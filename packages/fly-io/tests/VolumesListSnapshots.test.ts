import { Effect, Layer } from "effect";
import * as Redacted from "effect/Redacted";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it, beforeAll } from "vitest";
import { runEffect, testRunId, canManageApps } from "./test";
import { VolumesListSnapshots } from "../src/operations/VolumesListSnapshots";
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

describe("VolumesListSnapshots", () => {
  let skipApps = false;
  beforeAll(async () => { skipApps = !(await canManageApps()); });

    const appName = `distilled-fly-volsnp-${testRunId}`;

  it("happy path - lists snapshots for a volume", async (ctx) => {
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
        const result = yield* VolumesListSnapshots({
          app_name: appName,
          volume_id: volume.id!,
        });
        expect(Array.isArray(result)).toBe(true);
        expect(result).toHaveLength(0);
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
      VolumesListSnapshots({
        app_name: "nonexistent-app-00000000",
        volume_id: "vol_00000000000000",
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          expect((e as any)._tag).toBe("NotFound");
        }),
      ),
    );
  }, 30_000);

  it("error - Forbidden with invalid token", async () => {
    await Effect.runPromise(
      VolumesListSnapshots({
        app_name: "nonexistent-app-00000000",
        volume_id: "vol_00000000000000",
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
