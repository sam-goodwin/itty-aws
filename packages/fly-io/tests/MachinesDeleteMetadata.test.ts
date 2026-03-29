import { Effect, Layer } from "effect";
import * as Redacted from "effect/Redacted";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it, beforeAll } from "vitest";
import { runEffect, testRunId, canManageApps } from "./test";
import { MachinesDeleteMetadata } from "../src/operations/MachinesDeleteMetadata";
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

describe("MachinesDeleteMetadata", () => {
  let skipApps = false;
  beforeAll(async () => { skipApps = !(await canManageApps()); });

    const appName = `distilled-fly-mdmeta-${testRunId}`;

  it("happy path - deletes a metadata key from a machine", async (ctx) => {
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
            metadata: { deleteMe: "value" },
          },
          skip_launch: true,
        });
        yield* MachinesDeleteMetadata({
          app_name: appName,
          machine_id: machine.id!,
          key: "deleteMe",
        });
        // Verify the key is gone
        const metadata = yield* MachinesShowMetadata({
          app_name: appName,
          machine_id: machine.id!,
        });
        expect(metadata).not.toHaveProperty("deleteMe");
      }).pipe(
        Effect.ensuring(
          AppsDelete({ app_name: appName }).pipe(Effect.ignore),
        ),
      ),
    );
  }, 30_000);

  it("error - NotFound for non-existent app", async () => {
    await runEffect(
      MachinesDeleteMetadata({
        app_name: "nonexistent-app-00000000",
        machine_id: "0000000000000",
        key: "someKey",
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
        const error = yield* MachinesDeleteMetadata({
          app_name: appName,
          machine_id: "0000000000000",
          key: "someKey",
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
      MachinesDeleteMetadata({
        app_name: "nonexistent-app-00000000",
        machine_id: "0000000000000",
        key: "someKey",
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          expect(["Forbidden", "Unauthorized", "UnknownFlyIoError"]).toContain((e as any)._tag);
        }),
        Effect.provide(BadTokenLayer),
      ),
    );
  }, 30_000);
});
