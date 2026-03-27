import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { runEffect, testRunId, FAKE_REF, getExistingProject, getExistingOrgSlug } from "./setup";
import { v1ListAllProjects } from "../src/operations/v1ListAllProjects";
import { v1GetProject } from "../src/operations/v1GetProject";
import { v1GetAvailableRegions } from "../src/operations/v1GetAvailableRegions";
import { v1GetServicesHealth } from "../src/operations/v1GetServicesHealth";
import { v1GetReadonlyModeStatus } from "../src/operations/v1GetReadonlyModeStatus";
import { v1ListAllBackups } from "../src/operations/v1ListAllBackups";
import { v1ListProjectAddons } from "../src/operations/v1ListProjectAddons";
import { v1GetProjectLogs } from "../src/operations/v1GetProjectLogs";
import { v1GetDiskUtilization } from "../src/operations/v1GetDiskUtilization";
import { v1GetDatabaseDisk } from "../src/operations/v1GetDatabaseDisk";
import { v1GetPostgresUpgradeEligibility } from "../src/operations/v1GetPostgresUpgradeEligibility";
import { v1GetPostgresUpgradeStatus } from "../src/operations/v1GetPostgresUpgradeStatus";
import { v1GetProjectDiskAutoscaleConfig } from "../src/operations/v1GetProjectDiskAutoscaleConfig";
import { v1GetProjectUsageApiCount } from "../src/operations/v1GetProjectUsageApiCount";
import { v1GetProjectUsageRequestCount } from "../src/operations/v1GetProjectUsageRequestCount";
import { v1GetProjectPgbouncerConfig } from "../src/operations/v1GetProjectPgbouncerConfig";
import { v1ListActionRuns } from "../src/operations/v1ListActionRuns";
import { v1GetActionRun } from "../src/operations/v1GetActionRun";
import { v1GetActionRunLogs } from "../src/operations/v1GetActionRunLogs";
import { v1GetRestorePoint } from "../src/operations/v1GetRestorePoint";
import { v1GetProjectClaimToken } from "../src/operations/v1GetProjectClaimToken";
import { v1ListAvailableRestoreVersions } from "../src/operations/v1ListAvailableRestoreVersions";

const FAKE_ACTION_RUN_ID = "00000000-0000-0000-0000-000000000000";

describe("Projects", () => {
  // ============================================================================
  // v1ListAllProjects
  // ============================================================================
  describe("v1ListAllProjects", () => {
    it("happy path - lists all projects", async () => {
      const result = await runEffect(v1ListAllProjects({}));
      expect(Array.isArray(result)).toBe(true);
      if (result.length > 0) {
        expect(result[0]).toHaveProperty("id");
        expect(result[0]).toHaveProperty("ref");
        expect(result[0]).toHaveProperty("name");
        expect(result[0]).toHaveProperty("status");
        expect(result[0]).toHaveProperty("region");
      }
    }, 30_000);
  });

  // ============================================================================
  // v1GetProject
  // ============================================================================
  describe("v1GetProject", () => {
    it("happy path - gets project by ref", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) { ctx.skip(); return; }
      const result = await runEffect(v1GetProject({ ref: proj.ref }));
      expect(result.ref).toBe(proj.ref);
      expect(result.name).toBe(proj.name);
      expect(result).toHaveProperty("status");
      expect(result).toHaveProperty("database");
    }, 30_000);

    it("error - BadRequest for invalid ref", async () => {
      await runEffect(
        v1GetProject({ ref: FAKE_REF }).pipe(
          Effect.flip,
          Effect.map((e) => expect((e as any)._tag).toBe("BadRequest")),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // v1GetAvailableRegions
  // ============================================================================
  describe("v1GetAvailableRegions", () => {
    it("happy path - lists available regions", async () => {
      const orgSlug = await getExistingOrgSlug();
      const result = await runEffect(v1GetAvailableRegions({ organization_slug: orgSlug }));
      expect(result).toBeDefined();
      expect(result).toHaveProperty("recommendations");
      expect(result).toHaveProperty("all");
    }, 30_000);
  });

  // ============================================================================
  // v1GetServicesHealth
  // ============================================================================
  describe("v1GetServicesHealth", () => {
    it("happy path - gets services health", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) { ctx.skip(); return; }
      const result = await runEffect(
        v1GetServicesHealth({ ref: proj.ref, services: "auth,db" }),
      );
      expect(Array.isArray(result)).toBe(true);
    }, 30_000);

    it("error - BadRequest for invalid ref", async () => {
      await runEffect(
        v1GetServicesHealth({ ref: FAKE_REF, services: "auth" }).pipe(
          Effect.flip,
          Effect.map((e) => expect((e as any)._tag).toBe("BadRequest")),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // v1GetReadonlyModeStatus
  // ============================================================================
  describe("v1GetReadonlyModeStatus", () => {
    it("happy path - gets readonly mode status", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) { ctx.skip(); return; }
      const result = await runEffect(v1GetReadonlyModeStatus({ ref: proj.ref }));
      expect(result).toBeDefined();
    }, 30_000);

    it("error - BadRequest for invalid ref", async () => {
      await runEffect(
        v1GetReadonlyModeStatus({ ref: FAKE_REF }).pipe(
          Effect.flip,
          Effect.map((e) => expect((e as any)._tag).toBe("BadRequest")),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // v1ListAllBackups
  // ============================================================================
  describe("v1ListAllBackups", () => {
    it("happy path - lists backups", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) { ctx.skip(); return; }
      const result = await runEffect(v1ListAllBackups({ ref: proj.ref }));
      expect(Array.isArray(result)).toBe(true);
    }, 30_000);

    it("error - BadRequest for invalid ref", async () => {
      await runEffect(
        v1ListAllBackups({ ref: FAKE_REF }).pipe(
          Effect.flip,
          Effect.map((e) => expect((e as any)._tag).toBe("BadRequest")),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // v1ListProjectAddons
  // ============================================================================
  describe("v1ListProjectAddons", () => {
    it("happy path - lists project addons", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) { ctx.skip(); return; }
      const result = await runEffect(v1ListProjectAddons({ ref: proj.ref }));
      expect(result).toBeDefined();
    }, 30_000);

    it("error - BadRequest for invalid ref", async () => {
      await runEffect(
        v1ListProjectAddons({ ref: FAKE_REF }).pipe(
          Effect.flip,
          Effect.map((e) => expect((e as any)._tag).toBe("BadRequest")),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // v1GetProjectLogs
  // ============================================================================
  describe("v1GetProjectLogs", () => {
    it("happy path - gets project logs", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) { ctx.skip(); return; }
      const result = await runEffect(v1GetProjectLogs({ ref: proj.ref }));
      expect(result).toBeDefined();
    }, 30_000);

    it("error - BadRequest for invalid ref", async () => {
      await runEffect(
        v1GetProjectLogs({ ref: FAKE_REF }).pipe(
          Effect.flip,
          Effect.map((e) => {
            const tag = (e as any)._tag;
            expect(["BadRequest", "NotFound"]).toContain(tag);
          }),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // v1GetDiskUtilization
  // ============================================================================
  describe("v1GetDiskUtilization", () => {
    it("happy path - gets disk utilization", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) { ctx.skip(); return; }
      const result = await runEffect(v1GetDiskUtilization({ ref: proj.ref }));
      expect(result).toBeDefined();
    }, 30_000);

    it("error - BadRequest for invalid ref", async () => {
      await runEffect(
        v1GetDiskUtilization({ ref: FAKE_REF }).pipe(
          Effect.flip,
          Effect.map((e) => expect((e as any)._tag).toBe("BadRequest")),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // v1GetDatabaseDisk
  // ============================================================================
  describe("v1GetDatabaseDisk", () => {
    it("happy path - gets database disk", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) { ctx.skip(); return; }
      const result = await runEffect(v1GetDatabaseDisk({ ref: proj.ref }));
      expect(result).toBeDefined();
    }, 30_000);

    it("error - BadRequest for invalid ref", async () => {
      await runEffect(
        v1GetDatabaseDisk({ ref: FAKE_REF }).pipe(
          Effect.flip,
          Effect.map((e) => expect((e as any)._tag).toBe("BadRequest")),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // v1GetPostgresUpgradeEligibility
  // ============================================================================
  describe("v1GetPostgresUpgradeEligibility", () => {
    it("happy path - gets upgrade eligibility", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) { ctx.skip(); return; }
      const result = await runEffect(v1GetPostgresUpgradeEligibility({ ref: proj.ref }));
      expect(result).toBeDefined();
    }, 30_000);

    it("error - BadRequest for invalid ref", async () => {
      await runEffect(
        v1GetPostgresUpgradeEligibility({ ref: FAKE_REF }).pipe(
          Effect.flip,
          Effect.map((e) => expect((e as any)._tag).toBe("BadRequest")),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // v1GetPostgresUpgradeStatus
  // ============================================================================
  describe("v1GetPostgresUpgradeStatus", () => {
    it("happy path - gets upgrade status", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) { ctx.skip(); return; }
      const result = await runEffect(v1GetPostgresUpgradeStatus({ ref: proj.ref }));
      expect(result).toBeDefined();
    }, 30_000);

    it("error - BadRequest for invalid ref", async () => {
      await runEffect(
        v1GetPostgresUpgradeStatus({ ref: FAKE_REF }).pipe(
          Effect.flip,
          Effect.map((e) => expect((e as any)._tag).toBe("BadRequest")),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // v1GetProjectDiskAutoscaleConfig
  // ============================================================================
  describe("v1GetProjectDiskAutoscaleConfig", () => {
    it("happy path - gets disk autoscale config", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) { ctx.skip(); return; }
      const result = await runEffect(v1GetProjectDiskAutoscaleConfig({ ref: proj.ref }));
      expect(result).toBeDefined();
    }, 30_000);

    it("error - BadRequest for invalid ref", async () => {
      await runEffect(
        v1GetProjectDiskAutoscaleConfig({ ref: FAKE_REF }).pipe(
          Effect.flip,
          Effect.map((e) => expect((e as any)._tag).toBe("BadRequest")),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // v1GetProjectUsageApiCount
  // ============================================================================
  describe("v1GetProjectUsageApiCount", () => {
    it("happy path - gets API usage count", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) { ctx.skip(); return; }
      const result = await runEffect(v1GetProjectUsageApiCount({ ref: proj.ref }));
      expect(result).toBeDefined();
    }, 30_000);

    it("error - BadRequest for invalid ref", async () => {
      await runEffect(
        v1GetProjectUsageApiCount({ ref: FAKE_REF }).pipe(
          Effect.flip,
          Effect.map((e) => expect((e as any)._tag).toBe("BadRequest")),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // v1GetProjectUsageRequestCount
  // ============================================================================
  describe("v1GetProjectUsageRequestCount", () => {
    it("happy path - gets request usage count", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) { ctx.skip(); return; }
      const result = await runEffect(v1GetProjectUsageRequestCount({ ref: proj.ref }));
      expect(result).toBeDefined();
    }, 30_000);

    it("error - BadRequest for invalid ref", async () => {
      await runEffect(
        v1GetProjectUsageRequestCount({ ref: FAKE_REF }).pipe(
          Effect.flip,
          Effect.map((e) => expect((e as any)._tag).toBe("BadRequest")),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // v1GetProjectPgbouncerConfig
  // ============================================================================
  describe("v1GetProjectPgbouncerConfig", () => {
    it("happy path - gets pgbouncer config", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) { ctx.skip(); return; }
      const result = await runEffect(v1GetProjectPgbouncerConfig({ ref: proj.ref }));
      expect(result).toBeDefined();
    }, 30_000);

    it("error - BadRequest for invalid ref", async () => {
      await runEffect(
        v1GetProjectPgbouncerConfig({ ref: FAKE_REF }).pipe(
          Effect.flip,
          Effect.map((e) => expect((e as any)._tag).toBe("BadRequest")),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // v1ListActionRuns
  // ============================================================================
  describe("v1ListActionRuns", () => {
    it("happy path - lists action runs", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) { ctx.skip(); return; }
      const result = await runEffect(v1ListActionRuns({ ref: proj.ref }));
      expect(Array.isArray(result)).toBe(true);
    }, 30_000);

    it("error - BadRequest for invalid ref", async () => {
      await runEffect(
        v1ListActionRuns({ ref: FAKE_REF }).pipe(
          Effect.flip,
          Effect.map((e) => expect((e as any)._tag).toBe("BadRequest")),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // v1GetActionRun
  // ============================================================================
  describe("v1GetActionRun", () => {
    it("error - NotFound for non-existent action run", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) { ctx.skip(); return; }
      await runEffect(
        v1GetActionRun({ ref: proj.ref, run_id: FAKE_ACTION_RUN_ID }).pipe(
          Effect.flip,
          Effect.map((e) => {
            const tag = (e as any)._tag;
            expect(["NotFound", "BadRequest"]).toContain(tag);
          }),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // v1GetActionRunLogs
  // ============================================================================
  describe("v1GetActionRunLogs", () => {
    it("error - NotFound for non-existent action run", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) { ctx.skip(); return; }
      await runEffect(
        v1GetActionRunLogs({ ref: proj.ref, run_id: FAKE_ACTION_RUN_ID }).pipe(
          Effect.flip,
          Effect.map((e) => {
            const tag = (e as any)._tag;
            expect(["NotFound", "BadRequest"]).toContain(tag);
          }),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // v1GetRestorePoint
  // ============================================================================
  describe("v1GetRestorePoint", () => {
    it("happy path - gets restore point", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) { ctx.skip(); return; }
      const result = await runEffect(v1GetRestorePoint({ ref: proj.ref }));
      expect(result).toBeDefined();
    }, 30_000);

    it("error - BadRequest for invalid ref", async () => {
      await runEffect(
        v1GetRestorePoint({ ref: FAKE_REF }).pipe(
          Effect.flip,
          Effect.map((e) => expect((e as any)._tag).toBe("BadRequest")),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // v1GetProjectClaimToken
  // ============================================================================
  describe("v1GetProjectClaimToken", () => {
    it("error - BadRequest for invalid ref", async () => {
      await runEffect(
        v1GetProjectClaimToken({ ref: FAKE_REF }).pipe(
          Effect.flip,
          Effect.map((e) => expect((e as any)._tag).toBe("BadRequest")),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // v1ListAvailableRestoreVersions
  // ============================================================================
  describe("v1ListAvailableRestoreVersions", () => {
    it("happy path - lists available restore versions", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) { ctx.skip(); return; }
      const result = await runEffect(v1ListAvailableRestoreVersions({ ref: proj.ref }));
      expect(result).toBeDefined();
    }, 30_000);

    it("error - BadRequest for invalid ref", async () => {
      await runEffect(
        v1ListAvailableRestoreVersions({ ref: FAKE_REF }).pipe(
          Effect.flip,
          Effect.map((e) => expect((e as any)._tag).toBe("BadRequest")),
        ),
      );
    }, 30_000);
  });
});
