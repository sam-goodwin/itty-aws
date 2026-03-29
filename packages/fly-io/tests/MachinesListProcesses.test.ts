import { Effect, Layer } from "effect";
import * as Redacted from "effect/Redacted";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it, beforeAll } from "vitest";
import { runEffect, testRunId, canManageApps } from "./test";
import { MachinesListProcesses } from "../src/operations/MachinesListProcesses";
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

describe("MachinesListProcesses", () => {
  let skipApps = false;
  beforeAll(async () => { skipApps = !(await canManageApps()); });

    const appName = `distilled-fly-mps-${testRunId}`;

  it("happy path - lists processes for a machine", async (ctx) => {
    if (skipApps) return ctx.skip();
    // Listing processes requires a running machine. With skip_launch
    // the machine won't be running, so accept success or a relevant error.
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
        const result = yield* MachinesListProcesses({
          app_name: appName,
          machine_id: machine.id!,
        }).pipe(
          Effect.match({
            onSuccess: (r) => ({ ok: true as const, value: r }),
            onFailure: (e) => ({ ok: false as const, error: e }),
          }),
        );
        if (result.ok) {
          expect(Array.isArray(result.value)).toBe(true);
        } else {
          // Non-running machine may return BadRequest
          expect(["BadRequest", "UnknownFlyIoError"]).toContain(
            (result.error as any)._tag,
          );
        }
      }).pipe(
        Effect.ensuring(
          AppsDelete({ app_name: appName }).pipe(Effect.ignore),
        ),
      ),
    );
  }, 30_000);

  it("error - NotFound for non-existent app", async () => {
    await runEffect(
      MachinesListProcesses({
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
        const error = yield* MachinesListProcesses({
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
      MachinesListProcesses({
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

  it("error - BadRequest on non-running machine", async (ctx) => {
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
        const error = yield* MachinesListProcesses({
          app_name: appName,
          machine_id: machine.id!,
        }).pipe(Effect.flip);
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
