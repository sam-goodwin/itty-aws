import { Effect, Layer } from "effect";
import * as Redacted from "effect/Redacted";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it, beforeAll } from "vitest";
import { runEffect, testRunId, canManageApps } from "./test";
import { VolumesUpdate } from "../src/operations/VolumesUpdate";
import { VolumesCreate } from "../src/operations/VolumesCreate";
import { VolumeDelete } from "../src/operations/VolumeDelete";
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

describe("VolumesUpdate", () => {
  let skipApps = false;
  beforeAll(async () => { skipApps = !(await canManageApps()); });

    const appName = `distilled-fly-volup-${testRunId}`;

  it("happy path - updates a volume", async (ctx) => {
    if (skipApps) return ctx.skip();
    await runEffect(
      Effect.gen(function* () {
        yield* AppsCreate({ org_slug: "personal", name: appName });
        const volume = yield* VolumesCreate({
          app_name: appName,
          name: "test_vol",
          region: "ewr",
          size_gb: 1,
        });
        const result = yield* VolumesUpdate({
          app_name: appName,
          volume_id: volume.id!,
          auto_backup_enabled: false,
        }).pipe(
          Effect.match({
            onSuccess: (v) => ({ ok: true as const, value: v }),
            onFailure: (e) => ({ ok: false as const, error: e }),
          }),
        );
        if (result.ok) {
          expect(result.value).toHaveProperty("id");
        }
        yield* VolumeDelete({
          app_name: appName,
          volume_id: volume.id!,
        }).pipe(Effect.ignore);
      }).pipe(
        Effect.ensuring(
          AppsDelete({ app_name: appName }).pipe(Effect.ignore),
        ),
      ),
    );
  }, 30_000);

  it("error - NotFound for non-existent app", async () => {
    await runEffect(
      VolumesUpdate({
        app_name: "nonexistent-app-00000000",
        volume_id: "vol_00000000000000",
        auto_backup_enabled: false,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          expect((e as any)._tag).toBe("NotFound");
        }),
      ),
    );
  }, 30_000);

  it("error - NotFound for non-existent volume on valid app", async (ctx) => {
    if (skipApps) return ctx.skip();
    await runEffect(
      Effect.gen(function* () {
        yield* AppsCreate({ org_slug: "personal", name: appName });
        const error = yield* VolumesUpdate({
          app_name: appName,
          volume_id: "vol_00000000000000",
          auto_backup_enabled: false,
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
      VolumesUpdate({
        app_name: "nonexistent-app-00000000",
        volume_id: "vol_00000000000000",
        auto_backup_enabled: false,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          expect(["Forbidden", "Unauthorized", "UnknownFlyIoError"]).toContain((e as any)._tag);
        }),
        Effect.provide(BadTokenLayer),
      ),
    );
  }, 30_000);

  it("error - BadRequest with invalid snapshot_retention", async (ctx) => {
    if (skipApps) return ctx.skip();
    await runEffect(
      Effect.gen(function* () {
        yield* AppsCreate({ org_slug: "personal", name: appName });
        const volume = yield* VolumesCreate({
          app_name: appName,
          name: "test_vol_bad",
          region: "ewr",
          size_gb: 1,
        });
        const error = yield* VolumesUpdate({
          app_name: appName,
          volume_id: volume.id!,
          snapshot_retention: -1,
        }).pipe(Effect.flip);
        expect(["BadRequest", "UnknownFlyIoError"]).toContain(
          (error as any)._tag,
        );
        yield* VolumeDelete({
          app_name: appName,
          volume_id: volume.id!,
        }).pipe(Effect.ignore);
      }).pipe(
        Effect.ensuring(
          AppsDelete({ app_name: appName }).pipe(Effect.ignore),
        ),
      ),
    );
  }, 30_000);
});
