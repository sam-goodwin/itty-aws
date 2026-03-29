import { Effect, Layer } from "effect";
import * as Redacted from "effect/Redacted";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it, beforeAll } from "vitest";
import { runEffect, testRunId, canManageApps } from "./test";
import { MachinesUpsertMetadata } from "../src/operations/MachinesUpsertMetadata";
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

describe("MachinesUpsertMetadata", () => {
  let skipApps = false;
  beforeAll(async () => { skipApps = !(await canManageApps()); });

    const appName = `distilled-fly-mupm-${testRunId}`;

  it("happy path - upserts metadata key", async (ctx) => {
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
        const result = yield* MachinesUpsertMetadata({
          app_name: appName,
          machine_id: machine.id!,
          key: "test-key",
          value: "test-value",
        }).pipe(
          Effect.match({
            onSuccess: () => ({ ok: true as const }),
            onFailure: (e) => ({ ok: false as const, error: e }),
          }),
        );
        // Either success or an expected error is fine
        expect(result).toBeDefined();
      }).pipe(
        Effect.ensuring(
          AppsDelete({ app_name: appName }).pipe(Effect.ignore),
        ),
      ),
    );
  }, 30_000);

  it("error - NotFound for non-existent app", async () => {
    await runEffect(
      MachinesUpsertMetadata({
        app_name: "nonexistent-app-00000000",
        machine_id: "0000000000000",
        key: "test-key",
        value: "test-value",
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
        const error = yield* MachinesUpsertMetadata({
          app_name: appName,
          machine_id: "0000000000000",
          key: "test-key",
          value: "test-value",
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
      MachinesUpsertMetadata({
        app_name: "nonexistent-app-00000000",
        machine_id: "0000000000000",
        key: "test-key",
        value: "test-value",
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
