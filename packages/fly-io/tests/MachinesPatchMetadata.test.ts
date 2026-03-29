import { Effect, Layer } from "effect";
import * as Redacted from "effect/Redacted";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it, beforeAll } from "vitest";
import { runEffect, testRunId, canManageApps } from "./test";
import { MachinesPatchMetadata } from "../src/operations/MachinesPatchMetadata";
import { MachinesShowMetadata } from "../src/operations/MachinesShowMetadata";
import { MachinesCreate } from "../src/operations/MachinesCreate";
import { AppsCreate } from "../src/operations/AppsCreate";
import { AppsDelete } from "../src/operations/AppsDelete";
import { Credentials, DEFAULT_API_BASE_URL } from "../src/credentials";

// Layer with an invalid token to trigger Forbidden errors
const BadTokenLayer = Layer.merge(
  Layer.succeed(Credentials, {
    apiKey: Redacted.make("invalid_token_00000000"),
    apiBaseUrl: DEFAULT_API_BASE_URL,
  }),
  FetchHttpClient.layer,
);

describe("MachinesPatchMetadata", () => {
  let skipApps = false;
  beforeAll(async () => { skipApps = !(await canManageApps()); });

    const appName = `distilled-fly-mpmeta-${testRunId}`;

  it("happy path - patches metadata on a machine", async (ctx) => {
    if (skipApps) return ctx.skip();
    await runEffect(
      Effect.gen(function* () {
        yield* AppsCreate({ org_slug: "personal", name: appName });
        const machine = yield* MachinesCreate({
          app_name: appName,
          config: {
            image: "registry.fly.io/flyctl:latest",
            auto_destroy: true,
            guest: {
              cpu_kind: "shared",
              cpus: 1,
              memory_mb: 256,
            },
            metadata: { existing: "value" },
          },
          skip_launch: true,
        });
        // Patch adds/updates keys; the body is passed as extra properties
        yield* MachinesPatchMetadata({
          app_name: appName,
          machine_id: machine.id!,
          patched: "newValue",
        } as any);
        // Verify the metadata was updated
        const metadata = yield* MachinesShowMetadata({
          app_name: appName,
          machine_id: machine.id!,
        });
        expect(metadata.patched).toBe("newValue");
        expect(metadata.existing).toBe("value");
      }).pipe(
        Effect.ensuring(
          AppsDelete({ app_name: appName }).pipe(Effect.ignore),
        ),
      ),
    );
  }, 30_000);

  it("error - NotFound for non-existent app", async () => {
    await runEffect(
      MachinesPatchMetadata({
        app_name: "nonexistent-app-00000000",
        machine_id: "0000000000000",
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          expect((e as any)._tag).toBe("NotFound");
        }),
      ),
    );
  }, 30_000);

  it("error - NotFound for non-existent machine on valid app", async (ctx) => {
    if (skipApps) return ctx.skip();
    await runEffect(
      Effect.gen(function* () {
        yield* AppsCreate({ org_slug: "personal", name: appName });
        const error = yield* MachinesPatchMetadata({
          app_name: appName,
          machine_id: "0000000000000",
        }).pipe(Effect.flip);
        expect((error as any)._tag).toBe("NotFound");
      }).pipe(
        Effect.ensuring(
          AppsDelete({ app_name: appName }).pipe(Effect.ignore),
        ),
      ),
    );
  }, 30_000);

  it("error - Forbidden with invalid token", async () => {
    await Effect.runPromise(
      MachinesPatchMetadata({
        app_name: "nonexistent-app-00000000",
        machine_id: "0000000000000",
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          expect(["Forbidden", "Unauthorized", "UnknownFlyIoError"]).toContain((e as any)._tag);
        }),
        Effect.provide(BadTokenLayer),
      ),
    );
  }, 30_000);

  it("error - BadRequest with invalid machine_version", async (ctx) => {
    if (skipApps) return ctx.skip();
    await runEffect(
      Effect.gen(function* () {
        yield* AppsCreate({ org_slug: "personal", name: appName });
        const machine = yield* MachinesCreate({
          app_name: appName,
          config: {
            image: "registry.fly.io/flyctl:latest",
            auto_destroy: true,
            guest: {
              cpu_kind: "shared",
              cpus: 1,
              memory_mb: 256,
            },
          },
          skip_launch: true,
        });
        // Provide a stale machine_version to trigger a precondition failure
        const error = yield* MachinesPatchMetadata({
          app_name: appName,
          machine_id: machine.id!,
          machine_version: "stale_version_00000000",
          someKey: "someValue",
        } as any).pipe(Effect.flip);
        expect(["BadRequest", "UnknownFlyIoError"]).toContain(
          (error as any)._tag,
        );
      }).pipe(
        Effect.ensuring(
          AppsDelete({ app_name: appName }).pipe(Effect.ignore),
        ),
      ),
    );
  }, 30_000);
});
