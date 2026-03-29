import { Effect, Layer } from "effect";
import * as Redacted from "effect/Redacted";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { runEffect, testRunId } from "./test";
import { AppsCreate } from "../src/operations/AppsCreate";
import { AppsDelete } from "../src/operations/AppsDelete";
import { VolumesList } from "../src/operations/VolumesList";
import { VolumesCreate } from "../src/operations/VolumesCreate";
import { VolumesGetById } from "../src/operations/VolumesGetById";
import { VolumesUpdate } from "../src/operations/VolumesUpdate";
import { VolumeDelete } from "../src/operations/VolumeDelete";
import { VolumesExtend } from "../src/operations/VolumesExtend";
import { VolumesListSnapshots } from "../src/operations/VolumesListSnapshots";
import { createVolumeSnapshot } from "../src/operations/createVolumeSnapshot";
import { Credentials, DEFAULT_API_BASE_URL } from "../src/credentials";

// Layer with an invalid token to trigger Forbidden errors
const BadTokenLayer = Layer.merge(
  Layer.succeed(Credentials, {
    apiKey: Redacted.make("invalid_token_00000000"),
    apiBaseUrl: DEFAULT_API_BASE_URL,
  }),
  FetchHttpClient.layer,
);

describe("Volumes", () => {
  // ============================================================================
  // VolumesList
  // ============================================================================

  describe("VolumesList", () => {
    const appName = `test-vollist-${testRunId}`;

    it("happy path - list volumes for an app", async () => {
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: appName });
          const volumes = yield* VolumesList({
            app_name: appName,
          });
          expect(Array.isArray(volumes)).toBe(true);
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: appName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent app", async () => {
      await runEffect(
        Effect.gen(function* () {
          const error = yield* VolumesList({
            app_name: "nonexistent-app-00000000",
          }).pipe(Effect.flip);
          expect((error as any)._tag).toBe("NotFound");
        }),
      );
    }, 30_000);

    it("error - Forbidden with invalid token", async () => {
      await Effect.runPromise(
        VolumesList({
          app_name: "nonexistent-app-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Forbidden", "Unauthorized"]).toContain((e as any)._tag);
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // VolumesCreate
  // ============================================================================

  describe("VolumesCreate", () => {
    const appName = `test-volcreate-${testRunId}`;

    it("happy path - create a volume for an app", async () => {
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: appName });
          const volume = yield* VolumesCreate({
            app_name: appName,
            name: `vol-${testRunId}`,
            size_gb: 1,
            region: "ewr",
          });
          expect(volume).toBeDefined();
          expect(volume).toHaveProperty("id");
          expect(volume).toHaveProperty("name");
          expect(volume).toHaveProperty("size_gb");
          expect(volume.size_gb).toBe(1);
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: appName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent app", async () => {
      await runEffect(
        Effect.gen(function* () {
          const error = yield* VolumesCreate({
            app_name: "nonexistent-app-00000000",
            name: "test-vol",
            size_gb: 1,
            region: "ewr",
          }).pipe(Effect.flip);
          expect((error as any)._tag).toBe("NotFound");
        }),
      );
    }, 30_000);

    it("error - Forbidden with invalid token", async () => {
      await Effect.runPromise(
        VolumesCreate({
          app_name: "nonexistent-app-00000000",
          name: "test-vol",
          size_gb: 1,
          region: "ewr",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Forbidden", "Unauthorized"]).toContain((e as any)._tag);
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // VolumesGetById
  // ============================================================================

  describe("VolumesGetById", () => {
    const appName = `test-volget-${testRunId}`;

    it("happy path - get a volume by ID", async () => {
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: appName });
          const volume = yield* VolumesCreate({
            app_name: appName,
            name: `vol-get-${testRunId}`,
            size_gb: 1,
            region: "ewr",
          });
          const result = yield* VolumesGetById({
            app_name: appName,
            volume_id: volume.id!,
          });
          expect(result).toBeDefined();
          expect(result).toHaveProperty("id");
          expect(result.id).toBe(volume.id);
          expect(result).toHaveProperty("name");
          expect(result).toHaveProperty("size_gb");
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: appName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent volume", async () => {
      const nfAppName = `test-volget-nf-${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: nfAppName });
          const error = yield* VolumesGetById({
            app_name: nfAppName,
            volume_id: "vol_00000000000000",
          }).pipe(Effect.flip);
          expect((error as any)._tag).toBe("NotFound");
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: nfAppName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - Forbidden with invalid token", async () => {
      await Effect.runPromise(
        VolumesGetById({
          app_name: "nonexistent-app-00000000",
          volume_id: "vol_00000000000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Forbidden", "Unauthorized"]).toContain((e as any)._tag);
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // VolumesUpdate
  // ============================================================================

  describe("VolumesUpdate", () => {
    const appName = `test-volupd-${testRunId}`;

    it("happy path - update a volume", async () => {
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: appName });
          const volume = yield* VolumesCreate({
            app_name: appName,
            name: `vol-upd-${testRunId}`,
            size_gb: 1,
            region: "ewr",
          });
          const result = yield* VolumesUpdate({
            app_name: appName,
            volume_id: volume.id!,
            auto_backup_enabled: false,
            snapshot_retention: 1,
          });
          expect(result).toBeDefined();
          expect(result).toHaveProperty("id");
          expect(result.id).toBe(volume.id);
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: appName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent volume", async () => {
      const nfAppName = `test-volupd-nf-${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: nfAppName });
          const error = yield* VolumesUpdate({
            app_name: nfAppName,
            volume_id: "vol_00000000000000",
            auto_backup_enabled: false,
          }).pipe(Effect.flip);
          expect((error as any)._tag).toBe("NotFound");
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: nfAppName }).pipe(Effect.ignore),
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
            expect(["Forbidden", "Unauthorized"]).toContain((e as any)._tag);
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // VolumeDelete
  // ============================================================================

  describe("VolumeDelete", () => {
    const appName = `test-voldel-${testRunId}`;

    it("happy path - create then delete a volume", async () => {
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: appName });
          const volume = yield* VolumesCreate({
            app_name: appName,
            name: `vol-del-${testRunId}`,
            size_gb: 1,
            region: "ewr",
          });
          const result = yield* VolumeDelete({
            app_name: appName,
            volume_id: volume.id!,
          });
          expect(result).toBeDefined();
          expect(result).toHaveProperty("id");
          expect(result.id).toBe(volume.id);
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: appName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent volume", async () => {
      const nfAppName = `test-voldel-nf-${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: nfAppName });
          const error = yield* VolumeDelete({
            app_name: nfAppName,
            volume_id: "vol_00000000000000",
          }).pipe(Effect.flip);
          expect((error as any)._tag).toBe("NotFound");
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: nfAppName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - Forbidden with invalid token", async () => {
      await Effect.runPromise(
        VolumeDelete({
          app_name: "nonexistent-app-00000000",
          volume_id: "vol_00000000000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Forbidden", "Unauthorized"]).toContain((e as any)._tag);
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // VolumesExtend
  // ============================================================================

  describe("VolumesExtend", () => {
    const appName = `test-volext-${testRunId}`;

    it("happy path - extend a volume", async () => {
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: appName });
          const volume = yield* VolumesCreate({
            app_name: appName,
            name: `vol-ext-${testRunId}`,
            size_gb: 1,
            region: "ewr",
          });
          const result = yield* VolumesExtend({
            app_name: appName,
            volume_id: volume.id!,
            size_gb: 2,
          });
          expect(result).toBeDefined();
          expect(result).toHaveProperty("volume");
          expect(result).toHaveProperty("needs_restart");
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: appName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent volume", async () => {
      const nfAppName = `test-volext-nf-${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: nfAppName });
          const error = yield* VolumesExtend({
            app_name: nfAppName,
            volume_id: "vol_00000000000000",
            size_gb: 2,
          }).pipe(Effect.flip);
          expect((error as any)._tag).toBe("NotFound");
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: nfAppName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - Forbidden with invalid token", async () => {
      await Effect.runPromise(
        VolumesExtend({
          app_name: "nonexistent-app-00000000",
          volume_id: "vol_00000000000000",
          size_gb: 2,
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Forbidden", "Unauthorized"]).toContain((e as any)._tag);
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // VolumesListSnapshots
  // ============================================================================

  describe("VolumesListSnapshots", () => {
    const appName = `test-volsnap-${testRunId}`;

    it("happy path - list snapshots for a volume", async () => {
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: appName });
          const volume = yield* VolumesCreate({
            app_name: appName,
            name: `vol-snap-${testRunId}`,
            size_gb: 1,
            region: "ewr",
          });
          const snapshots = yield* VolumesListSnapshots({
            app_name: appName,
            volume_id: volume.id!,
          });
          expect(Array.isArray(snapshots)).toBe(true);
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: appName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent volume", async () => {
      const nfAppName = `test-volsnap-nf-${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: nfAppName });
          const error = yield* VolumesListSnapshots({
            app_name: nfAppName,
            volume_id: "vol_00000000000000",
          }).pipe(Effect.flip);
          expect((error as any)._tag).toBe("NotFound");
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: nfAppName }).pipe(Effect.ignore),
          ),
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
            expect(["Forbidden", "Unauthorized"]).toContain((e as any)._tag);
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // createVolumeSnapshot
  // ============================================================================

  describe("createVolumeSnapshot", () => {
    const appName = `test-volcsnap-${testRunId}`;

    it("happy path - create a snapshot for a volume", async () => {
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: appName });
          const volume = yield* VolumesCreate({
            app_name: appName,
            name: `vol-csnap-${testRunId}`,
            size_gb: 1,
            region: "ewr",
          });
          yield* createVolumeSnapshot({
            app_name: appName,
            volume_id: volume.id!,
          });
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: appName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent volume", async () => {
      const nfAppName = `test-volcsnap-nf-${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: nfAppName });
          const error = yield* createVolumeSnapshot({
            app_name: nfAppName,
            volume_id: "vol_00000000000000",
          }).pipe(Effect.flip);
          expect((error as any)._tag).toBe("NotFound");
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: nfAppName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - Forbidden with invalid token", async () => {
      await Effect.runPromise(
        createVolumeSnapshot({
          app_name: "nonexistent-app-00000000",
          volume_id: "vol_00000000000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Forbidden", "Unauthorized"]).toContain((e as any)._tag);
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });
});
