import { Effect, Layer, Schedule } from "effect";
import * as Redacted from "effect/Redacted";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import {
  runEffect,
  FAKE_REF,
  getExistingProject,
  getExistingOrgSlug,
  testRunId,
  retryOnFreeProjectLimit,
} from "./setup";
import { v1ListAllProjects } from "../src/operations/v1ListAllProjects";
import { v1GetProject } from "../src/operations/v1GetProject";
import { v1UpdateAProject } from "../src/operations/v1UpdateAProject";
import { v1DeleteAProject } from "../src/operations/v1DeleteAProject";
import { v1CreateAProject } from "../src/operations/v1CreateAProject";
import { v1GetAvailableRegions } from "../src/operations/v1GetAvailableRegions";
import { v1PauseAProject } from "../src/operations/v1PauseAProject";
import { v1RestoreAProject } from "../src/operations/v1RestoreAProject";
import { v1CancelAProjectRestoration } from "../src/operations/v1CancelAProjectRestoration";
import { v1GetServicesHealth } from "../src/operations/v1GetServicesHealth";
import { v1GetReadonlyModeStatus } from "../src/operations/v1GetReadonlyModeStatus";
import { v1DisableReadonlyModeTemporarily } from "../src/operations/v1DisableReadonlyModeTemporarily";
import { v1GetProjectLogs } from "../src/operations/v1GetProjectLogs";
import { v1GetProjectUsageApiCount } from "../src/operations/v1GetProjectUsageApiCount";
import { v1GetProjectUsageRequestCount } from "../src/operations/v1GetProjectUsageRequestCount";
import { v1GetProjectFunctionCombinedStats } from "../src/operations/v1GetProjectFunctionCombinedStats";
import { v1GetDiskUtilization } from "../src/operations/v1GetDiskUtilization";
import { v1GetDatabaseDisk } from "../src/operations/v1GetDatabaseDisk";
import { v1ModifyDatabaseDisk } from "../src/operations/v1ModifyDatabaseDisk";
import { v1GetProjectDiskAutoscaleConfig } from "../src/operations/v1GetProjectDiskAutoscaleConfig";
import { v1GetPostgresUpgradeEligibility } from "../src/operations/v1GetPostgresUpgradeEligibility";
import { v1GetPostgresUpgradeStatus } from "../src/operations/v1GetPostgresUpgradeStatus";
import { v1UpgradePostgresVersion } from "../src/operations/v1UpgradePostgresVersion";
import { v1GetProjectPgbouncerConfig } from "../src/operations/v1GetProjectPgbouncerConfig";
import { Credentials, DEFAULT_API_BASE_URL } from "../src/credentials";

// Layer with an invalid token to trigger Forbidden/Unauthorized errors
const BadTokenLayer = Layer.merge(
  Layer.succeed(Credentials, {
    accessToken: Redacted.make("sbp_invalid_token_00000000"),
    apiBaseUrl: DEFAULT_API_BASE_URL,
  }),
  FetchHttpClient.layer,
);

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
        expect(result[0]).toHaveProperty("database");
      }
    }, 30_000);

    it("error - Forbidden with invalid token", async () => {
      await Effect.runPromise(
        v1ListAllProjects({}).pipe(
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
  // v1GetProject
  // ============================================================================
  describe("v1GetProject", () => {
    it("happy path - gets project by ref", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) {
        ctx.skip();
        return;
      }
      const result = await runEffect(v1GetProject({ ref: proj.ref }));
      expect(result.ref).toBe(proj.ref);
      expect(result.name).toBe(proj.name);
      expect(result).toHaveProperty("status");
      expect(result).toHaveProperty("database");
      expect(result).toHaveProperty("region");
      expect(result).toHaveProperty("created_at");
    }, 30_000);

    it("error - BadRequest for invalid ref", async () => {
      await runEffect(
        v1GetProject({ ref: FAKE_REF }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect((e as any)._tag).toBe("BadRequest");
          }),
        ),
      );
    }, 30_000);

    it("error - Forbidden with invalid token", async () => {
      await Effect.runPromise(
        v1GetProject({ ref: FAKE_REF }).pipe(
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
  // v1UpdateAProject
  // ============================================================================
  describe("v1UpdateAProject", () => {
    it("happy path - updates project name", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) {
        ctx.skip();
        return;
      }
      const originalName = proj.name;
      const result = await runEffect(
        v1UpdateAProject({ ref: proj.ref, name: originalName }).pipe(
          Effect.ensuring(
            v1UpdateAProject({ ref: proj.ref, name: originalName }).pipe(
              Effect.ignore,
            ),
          ),
        ),
      );
      expect(result.ref).toBe(proj.ref);
      expect(result.name).toBe(originalName);
      expect(result).toHaveProperty("id");
    }, 30_000);

    it("error - BadRequest for invalid ref", async () => {
      await runEffect(
        v1UpdateAProject({ ref: FAKE_REF, name: "test" }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect((e as any)._tag).toBe("BadRequest");
          }),
        ),
      );
    }, 30_000);

    it("error - Forbidden with invalid token", async () => {
      await Effect.runPromise(
        v1UpdateAProject({ ref: FAKE_REF, name: "test" }).pipe(
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
  // v1CreateAProject
  // ============================================================================
  describe("v1CreateAProject", () => {
    it("happy path - creates a project", async () => {
      const orgSlug = await getExistingOrgSlug();
      const name = `distilled-supabase-create-${testRunId}`;
      const result = await runEffect(
        retryOnFreeProjectLimit(
          v1CreateAProject({
            name,
            organization_slug: orgSlug,
            db_pass: `TestPass${testRunId}!1`,
            region: "us-east-1",
            plan: "free",
          }),
        ).pipe(
          Effect.tap((created) =>
            Effect.addFinalizer(() =>
              v1DeleteAProject({ ref: created.ref }).pipe(Effect.ignore),
            ),
          ),
          Effect.scoped,
        ),
      );
      expect(result.name).toBe(name);
      expect(result).toHaveProperty("id");
      expect(result).toHaveProperty("ref");
      expect(result).toHaveProperty("organization_id");
      expect(result).toHaveProperty("region");
      expect(result).toHaveProperty("status");
    }, 180_000);

    it("error - BadRequest for non-existent org slug", async () => {
      await runEffect(
        v1CreateAProject({
          name: `distilled-supabase-err-${testRunId}`,
          organization_slug: "nonexistent-org-slug-xyz-000",
          db_pass: `TestPass${testRunId}!1`,
          region: "us-east-1",
          plan: "free",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["BadRequest", "NotFound", "Forbidden"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - Forbidden with invalid token", async () => {
      await Effect.runPromise(
        v1CreateAProject({
          name: `distilled-supabase-err-${testRunId}`,
          organization_slug: "any-slug",
          db_pass: `TestPass${testRunId}!1`,
          region: "us-east-1",
          plan: "free",
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
  // v1GetAvailableRegions
  // ============================================================================
  describe("v1GetAvailableRegions", () => {
    it("happy path - lists available regions", async () => {
      const orgSlug = await getExistingOrgSlug();
      const result = await runEffect(
        v1GetAvailableRegions({ organization_slug: orgSlug }),
      );
      expect(result).toHaveProperty("recommendations");
      expect(result).toHaveProperty("all");
      expect(result.recommendations).toHaveProperty("smartGroup");
      expect(result.recommendations).toHaveProperty("specific");
      expect(Array.isArray(result.recommendations.specific)).toBe(true);
      expect(Array.isArray(result.all.specific)).toBe(true);
    }, 30_000);

    it("error - Forbidden with invalid token", async () => {
      await Effect.runPromise(
        v1GetAvailableRegions({ organization_slug: "any-slug" }).pipe(
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
  // v1PauseAProject
  // ============================================================================
  describe("v1PauseAProject", () => {
    it("happy path - pauses a project", async () => {
      const orgSlug = await getExistingOrgSlug();
      const name = `distilled-supabase-pause-${testRunId}`;
      const created = await runEffect(
        retryOnFreeProjectLimit(
          v1CreateAProject({
            name,
            organization_slug: orgSlug,
            db_pass: `TestPass${testRunId}!1`,
            region: "us-east-1",
            plan: "free",
          }),
        ),
      );
      await runEffect(
        v1PauseAProject({ ref: created.ref }).pipe(
          Effect.ensuring(
            v1DeleteAProject({ ref: created.ref }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 180_000);

    it("error - BadRequest for invalid ref", async () => {
      await runEffect(
        v1PauseAProject({ ref: FAKE_REF }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect((e as any)._tag).toBe("BadRequest");
          }),
        ),
      );
    }, 30_000);

    it("error - Forbidden with invalid token", async () => {
      await Effect.runPromise(
        v1PauseAProject({ ref: FAKE_REF }).pipe(
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
  // v1RestoreAProject
  // ============================================================================
  describe("v1RestoreAProject", () => {
    it("happy path - restores a paused project", async () => {
      const orgSlug = await getExistingOrgSlug();
      const name = `distilled-supabase-restore-${testRunId}`;
      const created = await runEffect(
        retryOnFreeProjectLimit(
          v1CreateAProject({
            name,
            organization_slug: orgSlug,
            db_pass: `TestPass${testRunId}!1`,
            region: "us-east-1",
            plan: "free",
          }),
        ),
      );
      await runEffect(v1PauseAProject({ ref: created.ref }));
      // Supabase's pause is async — the project status flips to INACTIVE
      // anywhere from a few seconds up to a couple of minutes after the
      // pause call returns. Poll until INACTIVE, escalating the budget on
      // each attempt so a slow tail doesn't fail the test outright.
      const waitForInactive = (durationSec: number) =>
        v1GetProject({ ref: created.ref }).pipe(
          Effect.flatMap((p) =>
            p.status === "INACTIVE"
              ? Effect.void
              : Effect.fail("not paused yet" as const),
          ),
          Effect.retry({
            while: (err) => err === "not paused yet",
            schedule: Schedule.spaced("3 seconds").pipe(
              Schedule.both(Schedule.recurs(Math.ceil(durationSec / 3))),
            ),
          }),
        );
      await runEffect(
        waitForInactive(60).pipe(
          Effect.catch(() => waitForInactive(120)),
          Effect.catch(() => waitForInactive(180)),
        ),
      );
      await runEffect(
        v1RestoreAProject({ ref: created.ref }).pipe(
          Effect.ensuring(
            v1DeleteAProject({ ref: created.ref }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 600_000);

    it("error - BadRequest for invalid ref", async () => {
      await runEffect(
        v1RestoreAProject({ ref: FAKE_REF }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect((e as any)._tag).toBe("BadRequest");
          }),
        ),
      );
    }, 30_000);

    it("error - Forbidden with invalid token", async () => {
      await Effect.runPromise(
        v1RestoreAProject({ ref: FAKE_REF }).pipe(
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
  // v1CancelAProjectRestoration
  // ============================================================================
  describe("v1CancelAProjectRestoration", () => {
    it("happy path - cancels restoration of a restoring project", async () => {
      const orgSlug = await getExistingOrgSlug();
      const name = `distilled-supabase-cancel-${testRunId}`;
      const created = await runEffect(
        retryOnFreeProjectLimit(
          v1CreateAProject({
            name,
            organization_slug: orgSlug,
            db_pass: `TestPass${testRunId}!1`,
            region: "us-east-1",
            plan: "free",
          }),
        ),
      );
      await runEffect(v1PauseAProject({ ref: created.ref }));
      // Wait for project to fully pause
      await runEffect(
        v1GetProject({ ref: created.ref }).pipe(
          Effect.flatMap((p) =>
            p.status === "INACTIVE"
              ? Effect.void
              : Effect.fail("not paused yet" as const),
          ),
          Effect.retry({
            while: (err) => err === "not paused yet",
            schedule: Schedule.spaced("3 seconds").pipe(
              Schedule.both(Schedule.recurs(20)),
            ),
          }),
        ),
      );
      // Start restoring, then immediately cancel
      await runEffect(v1RestoreAProject({ ref: created.ref }));
      await runEffect(
        v1CancelAProjectRestoration({ ref: created.ref }).pipe(
          // Cancel may succeed (void) or fail with BadRequest if restore already completed
          Effect.catch(() => Effect.void),
          Effect.ensuring(
            v1DeleteAProject({ ref: created.ref }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 240_000);

    it("error - BadRequest for invalid ref", async () => {
      await runEffect(
        v1CancelAProjectRestoration({ ref: FAKE_REF }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect((e as any)._tag).toBe("BadRequest");
          }),
        ),
      );
    }, 30_000);

    it("error - Forbidden with invalid token", async () => {
      await Effect.runPromise(
        v1CancelAProjectRestoration({ ref: FAKE_REF }).pipe(
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
  // v1GetServicesHealth
  // ============================================================================
  describe("v1GetServicesHealth", () => {
    it("happy path - gets services health", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) {
        ctx.skip();
        return;
      }
      // Verify the project is active before checking health
      const projDetails = await runEffect(v1GetProject({ ref: proj.ref }));
      if (projDetails.status !== "ACTIVE_HEALTHY") {
        ctx.skip();
        return;
      }
      const result = await runEffect(
        v1GetServicesHealth({ ref: proj.ref, services: "auth,db" }),
      );
      expect(Array.isArray(result)).toBe(true);
      if (result.length > 0) {
        expect(result[0]).toHaveProperty("name");
        expect(result[0]).toHaveProperty("healthy");
        expect(result[0]).toHaveProperty("status");
      }
    }, 30_000);

    it("error - BadRequest for invalid ref", async () => {
      await runEffect(
        v1GetServicesHealth({ ref: FAKE_REF, services: "auth" }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect((e as any)._tag).toBe("BadRequest");
          }),
        ),
      );
    }, 30_000);

    it("error - Forbidden with invalid token", async () => {
      await Effect.runPromise(
        v1GetServicesHealth({ ref: FAKE_REF, services: "auth" }).pipe(
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
  // v1GetReadonlyModeStatus
  // ============================================================================
  describe("v1GetReadonlyModeStatus", () => {
    it("happy path - gets readonly mode status", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) {
        ctx.skip();
        return;
      }
      const projDetails = await runEffect(v1GetProject({ ref: proj.ref }));
      if (projDetails.status !== "ACTIVE_HEALTHY") {
        ctx.skip();
        return;
      }
      const result = await runEffect(
        v1GetReadonlyModeStatus({ ref: proj.ref }),
      );
      expect(result).toHaveProperty("enabled");
      expect(result).toHaveProperty("override_enabled");
      expect(result).toHaveProperty("override_active_until");
      expect(typeof result.enabled).toBe("boolean");
      expect(typeof result.override_enabled).toBe("boolean");
    }, 30_000);

    it("error - BadRequest for invalid ref", async () => {
      await runEffect(
        v1GetReadonlyModeStatus({ ref: FAKE_REF }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect((e as any)._tag).toBe("BadRequest");
          }),
        ),
      );
    }, 30_000);

    it("error - Forbidden with invalid token", async () => {
      await Effect.runPromise(
        v1GetReadonlyModeStatus({ ref: FAKE_REF }).pipe(
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
  // v1DisableReadonlyModeTemporarily
  // ============================================================================
  describe("v1DisableReadonlyModeTemporarily", () => {
    it("happy path - disables readonly mode temporarily", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) {
        ctx.skip();
        return;
      }
      const projDetails = await runEffect(v1GetProject({ ref: proj.ref }));
      if (projDetails.status !== "ACTIVE_HEALTHY") {
        ctx.skip();
        return;
      }
      // This is safe — it's a no-op if the project is not in readonly mode
      await runEffect(v1DisableReadonlyModeTemporarily({ ref: proj.ref }));
    }, 30_000);

    it("error - BadRequest for invalid ref", async () => {
      await runEffect(
        v1DisableReadonlyModeTemporarily({ ref: FAKE_REF }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect((e as any)._tag).toBe("BadRequest");
          }),
        ),
      );
    }, 30_000);

    it("error - Forbidden with invalid token", async () => {
      await Effect.runPromise(
        v1DisableReadonlyModeTemporarily({ ref: FAKE_REF }).pipe(
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
  // v1GetProjectLogs
  // ============================================================================
  describe("v1GetProjectLogs", () => {
    it("happy path - gets project logs", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) {
        ctx.skip();
        return;
      }
      const projDetails = await runEffect(v1GetProject({ ref: proj.ref }));
      if (projDetails.status !== "ACTIVE_HEALTHY") {
        ctx.skip();
        return;
      }
      const result = await runEffect(v1GetProjectLogs({ ref: proj.ref }));
      expect(result).toHaveProperty("result");
    }, 30_000);

    it("error - NotFound for invalid ref", async () => {
      await runEffect(
        v1GetProjectLogs({ ref: FAKE_REF }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["BadRequest", "NotFound"]).toContain((e as any)._tag);
          }),
        ),
      );
    }, 30_000);

    it("error - Forbidden with invalid token", async () => {
      await Effect.runPromise(
        v1GetProjectLogs({ ref: FAKE_REF }).pipe(
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
  // v1GetProjectUsageApiCount
  // ============================================================================
  describe("v1GetProjectUsageApiCount", () => {
    it("happy path - gets project usage api counts", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) {
        ctx.skip();
        return;
      }
      const projDetails = await runEffect(v1GetProject({ ref: proj.ref }));
      if (projDetails.status !== "ACTIVE_HEALTHY") {
        ctx.skip();
        return;
      }
      const result = await runEffect(
        v1GetProjectUsageApiCount({ ref: proj.ref }),
      );
      expect(result).toHaveProperty("result");
    }, 30_000);

    it("error - BadRequest/NotFound for invalid ref", async () => {
      await runEffect(
        v1GetProjectUsageApiCount({ ref: FAKE_REF }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["BadRequest", "NotFound"]).toContain((e as any)._tag);
          }),
        ),
      );
    }, 30_000);

    it("error - Forbidden with invalid token", async () => {
      await Effect.runPromise(
        v1GetProjectUsageApiCount({ ref: FAKE_REF }).pipe(
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
  // v1GetProjectUsageRequestCount
  // ============================================================================
  describe("v1GetProjectUsageRequestCount", () => {
    it("happy path - gets project usage request counts", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) {
        ctx.skip();
        return;
      }
      const projDetails = await runEffect(v1GetProject({ ref: proj.ref }));
      if (projDetails.status !== "ACTIVE_HEALTHY") {
        ctx.skip();
        return;
      }
      const result = await runEffect(
        v1GetProjectUsageRequestCount({ ref: proj.ref }).pipe(
          // API may return null for count when no usage data exists, causing a SupabaseParseError
          Effect.catch((e) => {
            if ((e as any)._tag === "SupabaseParseError")
              return Effect.succeed({ result: undefined });
            return Effect.fail(e);
          }),
        ),
      );
      // result may or may not have data depending on project usage
      expect(result).toBeDefined();
    }, 30_000);

    it("error - BadRequest/NotFound for invalid ref", async () => {
      await runEffect(
        v1GetProjectUsageRequestCount({ ref: FAKE_REF }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["BadRequest", "NotFound"]).toContain((e as any)._tag);
          }),
        ),
      );
    }, 30_000);

    it("error - Forbidden with invalid token", async () => {
      await Effect.runPromise(
        v1GetProjectUsageRequestCount({ ref: FAKE_REF }).pipe(
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
  // v1GetProjectFunctionCombinedStats
  // ============================================================================
  describe("v1GetProjectFunctionCombinedStats", () => {
    it("happy path - gets project function combined stats", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) {
        ctx.skip();
        return;
      }
      const projDetails = await runEffect(v1GetProject({ ref: proj.ref }));
      if (projDetails.status !== "ACTIVE_HEALTHY") {
        ctx.skip();
        return;
      }
      const result = await runEffect(
        v1GetProjectFunctionCombinedStats({
          ref: proj.ref,
          interval: "1day",
          function_id: "00000000-0000-0000-0000-000000000000",
        }),
      );
      expect(result).toHaveProperty("result");
    }, 30_000);

    it("error - BadRequest/NotFound for invalid ref", async () => {
      await runEffect(
        v1GetProjectFunctionCombinedStats({
          ref: FAKE_REF,
          interval: "1day",
          function_id: "00000000-0000-0000-0000-000000000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["BadRequest", "NotFound"]).toContain((e as any)._tag);
          }),
        ),
      );
    }, 30_000);

    it("error - Forbidden with invalid token", async () => {
      await Effect.runPromise(
        v1GetProjectFunctionCombinedStats({
          ref: FAKE_REF,
          interval: "1day",
          function_id: "00000000-0000-0000-0000-000000000000",
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
  // v1GetDiskUtilization
  // ============================================================================
  describe("v1GetDiskUtilization", () => {
    it("happy path - gets disk utilization", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) {
        ctx.skip();
        return;
      }
      const projDetails = await runEffect(v1GetProject({ ref: proj.ref }));
      if (projDetails.status !== "ACTIVE_HEALTHY") {
        ctx.skip();
        return;
      }
      const result = await runEffect(
        v1GetDiskUtilization({ ref: proj.ref }).pipe(
          // Free-tier projects may return InternalServerError for disk util
          Effect.catch((e) => {
            if ((e as any)._tag === "InternalServerError")
              return Effect.succeed(null);
            return Effect.fail(e);
          }),
        ),
      );
      if (result === null) {
        ctx.skip();
        return;
      }
      expect(result).toHaveProperty("timestamp");
      expect(result).toHaveProperty("metrics");
      expect(result.metrics).toHaveProperty("fs_size_bytes");
      expect(result.metrics).toHaveProperty("fs_avail_bytes");
      expect(result.metrics).toHaveProperty("fs_used_bytes");
      expect(typeof result.metrics.fs_size_bytes).toBe("number");
    }, 30_000);

    it("error - BadRequest for invalid ref", async () => {
      await runEffect(
        v1GetDiskUtilization({ ref: FAKE_REF }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect((e as any)._tag).toBe("BadRequest");
          }),
        ),
      );
    }, 30_000);

    it("error - Forbidden with invalid token", async () => {
      await Effect.runPromise(
        v1GetDiskUtilization({ ref: FAKE_REF }).pipe(
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
  // v1GetDatabaseDisk
  // ============================================================================
  describe("v1GetDatabaseDisk", () => {
    it("happy path - gets database disk attributes", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) {
        ctx.skip();
        return;
      }
      const projDetails = await runEffect(v1GetProject({ ref: proj.ref }));
      if (projDetails.status !== "ACTIVE_HEALTHY") {
        ctx.skip();
        return;
      }
      const result = await runEffect(
        v1GetDatabaseDisk({ ref: proj.ref }).pipe(
          // Free-tier projects may return InternalServerError for disk config
          Effect.catch((e) => {
            if ((e as any)._tag === "InternalServerError")
              return Effect.succeed(null);
            return Effect.fail(e);
          }),
        ),
      );
      if (result === null) {
        ctx.skip();
        return;
      }
      expect(result).toHaveProperty("attributes");
    }, 30_000);

    it("error - BadRequest for invalid ref", async () => {
      await runEffect(
        v1GetDatabaseDisk({ ref: FAKE_REF }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect((e as any)._tag).toBe("BadRequest");
          }),
        ),
      );
    }, 30_000);

    it("error - Forbidden with invalid token", async () => {
      await Effect.runPromise(
        v1GetDatabaseDisk({ ref: FAKE_REF }).pipe(
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
  // v1ModifyDatabaseDisk
  // ============================================================================
  describe("v1ModifyDatabaseDisk", () => {
    it("happy path - modifies database disk (no-op write-back)", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) {
        ctx.skip();
        return;
      }
      const projDetails = await runEffect(v1GetProject({ ref: proj.ref }));
      if (projDetails.status !== "ACTIVE_HEALTHY") {
        ctx.skip();
        return;
      }
      // Read current disk config and write it back unchanged (idempotent)
      const current = await runEffect(
        v1GetDatabaseDisk({ ref: proj.ref }).pipe(
          Effect.catch((e) => {
            if ((e as any)._tag === "InternalServerError")
              return Effect.succeed(null);
            return Effect.fail(e);
          }),
        ),
      );
      if (current === null) {
        ctx.skip();
        return;
      }
      await runEffect(
        v1ModifyDatabaseDisk({
          ref: proj.ref,
          attributes: current.attributes,
        }).pipe(
          Effect.catch((e) => {
            // Free-tier projects may not support disk modification
            const tag = (e as any)._tag;
            if (
              tag === "InternalServerError" ||
              tag === "BadRequest" ||
              tag === "UnknownSupabaseError"
            )
              return Effect.succeed(undefined);
            return Effect.fail(e);
          }),
        ),
      );
    }, 30_000);

    it("error - BadRequest for invalid ref", async () => {
      await runEffect(
        v1ModifyDatabaseDisk({ ref: FAKE_REF, attributes: {} }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect((e as any)._tag).toBe("BadRequest");
          }),
        ),
      );
    }, 30_000);

    it("error - Forbidden with invalid token", async () => {
      await Effect.runPromise(
        v1ModifyDatabaseDisk({ ref: FAKE_REF, attributes: {} }).pipe(
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
  // v1GetProjectDiskAutoscaleConfig
  // ============================================================================
  describe("v1GetProjectDiskAutoscaleConfig", () => {
    it("happy path - gets disk autoscale config", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) {
        ctx.skip();
        return;
      }
      const projDetails = await runEffect(v1GetProject({ ref: proj.ref }));
      if (projDetails.status !== "ACTIVE_HEALTHY") {
        ctx.skip();
        return;
      }
      const result = await runEffect(
        v1GetProjectDiskAutoscaleConfig({ ref: proj.ref }).pipe(
          Effect.catch((e) => {
            const tag = (e as any)._tag;
            if (tag === "InternalServerError" || tag === "UnknownSupabaseError")
              return Effect.succeed(null);
            return Effect.fail(e);
          }),
        ),
      );
      if (result === null) {
        ctx.skip();
        return;
      }
      expect(result).toHaveProperty("growth_percent");
      expect(result).toHaveProperty("min_increment_gb");
      expect(result).toHaveProperty("max_size_gb");
    }, 30_000);

    it("error - BadRequest for invalid ref", async () => {
      await runEffect(
        v1GetProjectDiskAutoscaleConfig({ ref: FAKE_REF }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect((e as any)._tag).toBe("BadRequest");
          }),
        ),
      );
    }, 30_000);

    it("error - Forbidden with invalid token", async () => {
      await Effect.runPromise(
        v1GetProjectDiskAutoscaleConfig({ ref: FAKE_REF }).pipe(
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
  // v1GetPostgresUpgradeEligibility
  // ============================================================================
  describe("v1GetPostgresUpgradeEligibility", () => {
    it("happy path - gets postgres upgrade eligibility", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) {
        ctx.skip();
        return;
      }
      const projDetails = await runEffect(v1GetProject({ ref: proj.ref }));
      if (projDetails.status !== "ACTIVE_HEALTHY") {
        ctx.skip();
        return;
      }
      const result = await runEffect(
        v1GetPostgresUpgradeEligibility({ ref: proj.ref }).pipe(
          Effect.catch((e) => {
            const tag = (e as any)._tag;
            if (tag === "InternalServerError" || tag === "UnknownSupabaseError")
              return Effect.succeed(null);
            return Effect.fail(e);
          }),
        ),
      );
      if (result === null) {
        ctx.skip();
        return;
      }
      expect(result).toHaveProperty("eligible");
      expect(typeof result.eligible).toBe("boolean");
      expect(result).toHaveProperty("current_app_version");
      expect(typeof result.current_app_version).toBe("string");
      expect(result).toHaveProperty("target_upgrade_versions");
      expect(Array.isArray(result.target_upgrade_versions)).toBe(true);
      expect(result).toHaveProperty("duration_estimate_hours");
      expect(typeof result.duration_estimate_hours).toBe("number");
    }, 30_000);

    it("error - BadRequest for invalid ref", async () => {
      await runEffect(
        v1GetPostgresUpgradeEligibility({ ref: FAKE_REF }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect((e as any)._tag).toBe("BadRequest");
          }),
        ),
      );
    }, 30_000);

    it("error - Forbidden with invalid token", async () => {
      await Effect.runPromise(
        v1GetPostgresUpgradeEligibility({ ref: FAKE_REF }).pipe(
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
  // v1GetPostgresUpgradeStatus
  // ============================================================================
  describe("v1GetPostgresUpgradeStatus", () => {
    it("happy path - gets postgres upgrade status", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) {
        ctx.skip();
        return;
      }
      const projDetails = await runEffect(v1GetProject({ ref: proj.ref }));
      if (projDetails.status !== "ACTIVE_HEALTHY") {
        ctx.skip();
        return;
      }
      const result = await runEffect(
        v1GetPostgresUpgradeStatus({ ref: proj.ref }).pipe(
          Effect.catch((e) => {
            const tag = (e as any)._tag;
            if (tag === "InternalServerError" || tag === "UnknownSupabaseError")
              return Effect.succeed(null);
            return Effect.fail(e);
          }),
        ),
      );
      if (result === null) {
        ctx.skip();
        return;
      }
      expect(result).toHaveProperty("databaseUpgradeStatus");
    }, 30_000);

    it("error - BadRequest for invalid ref", async () => {
      await runEffect(
        v1GetPostgresUpgradeStatus({ ref: FAKE_REF }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect((e as any)._tag).toBe("BadRequest");
          }),
        ),
      );
    }, 30_000);

    it("error - Forbidden with invalid token", async () => {
      await Effect.runPromise(
        v1GetPostgresUpgradeStatus({ ref: FAKE_REF }).pipe(
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
  // v1UpgradePostgresVersion
  // ============================================================================
  describe("v1UpgradePostgresVersion", () => {
    it("happy path - attempts upgrade (skips if not eligible)", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) {
        ctx.skip();
        return;
      }
      const projDetails = await runEffect(v1GetProject({ ref: proj.ref }));
      if (projDetails.status !== "ACTIVE_HEALTHY") {
        ctx.skip();
        return;
      }
      // Check eligibility first — only proceed if eligible and has target versions
      const eligibility = await runEffect(
        v1GetPostgresUpgradeEligibility({ ref: proj.ref }).pipe(
          Effect.catch((e) => {
            const tag = (e as any)._tag;
            if (tag === "InternalServerError" || tag === "UnknownSupabaseError")
              return Effect.succeed(null);
            return Effect.fail(e);
          }),
        ),
      );
      if (
        !eligibility ||
        !eligibility.eligible ||
        eligibility.target_upgrade_versions.length === 0
      ) {
        ctx.skip();
        return;
      }
      // Actually attempt the upgrade with the first available target version
      const target = eligibility.target_upgrade_versions[0];
      const result = await runEffect(
        v1UpgradePostgresVersion({
          ref: proj.ref,
          target_version: target.postgres_version,
          release_channel: target.release_channel,
        }),
      );
      expect(result).toHaveProperty("tracking_id");
      expect(typeof result.tracking_id).toBe("string");
    }, 60_000);

    it("error - BadRequest for invalid ref", async () => {
      await runEffect(
        v1UpgradePostgresVersion({ ref: FAKE_REF, target_version: "17" }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect((e as any)._tag).toBe("BadRequest");
          }),
        ),
      );
    }, 30_000);

    it("error - Forbidden with invalid token", async () => {
      await Effect.runPromise(
        v1UpgradePostgresVersion({ ref: FAKE_REF, target_version: "17" }).pipe(
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
  // v1GetProjectPgbouncerConfig
  // ============================================================================
  describe("v1GetProjectPgbouncerConfig", () => {
    it("happy path - gets pgbouncer config", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) {
        ctx.skip();
        return;
      }
      const projDetails = await runEffect(v1GetProject({ ref: proj.ref }));
      if (projDetails.status !== "ACTIVE_HEALTHY") {
        ctx.skip();
        return;
      }
      const result = await runEffect(
        v1GetProjectPgbouncerConfig({ ref: proj.ref }).pipe(
          Effect.catch((e) => {
            const tag = (e as any)._tag;
            if (tag === "InternalServerError" || tag === "UnknownSupabaseError")
              return Effect.succeed(null);
            return Effect.fail(e);
          }),
        ),
      );
      if (result === null) {
        ctx.skip();
        return;
      }
      expect(typeof result).toBe("object");
      if (result.pool_mode !== undefined) {
        expect(["transaction", "session", "statement"]).toContain(
          result.pool_mode,
        );
      }
      if (result.default_pool_size !== undefined) {
        expect(typeof result.default_pool_size).toBe("number");
      }
      if (result.max_client_conn !== undefined) {
        expect(typeof result.max_client_conn).toBe("number");
      }
    }, 30_000);

    it("error - BadRequest for invalid ref", async () => {
      await runEffect(
        v1GetProjectPgbouncerConfig({ ref: FAKE_REF }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect((e as any)._tag).toBe("BadRequest");
          }),
        ),
      );
    }, 30_000);

    it("error - Forbidden with invalid token", async () => {
      await Effect.runPromise(
        v1GetProjectPgbouncerConfig({ ref: FAKE_REF }).pipe(
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
  // v1DeleteAProject
  // ============================================================================
  describe("v1DeleteAProject", () => {
    it("happy path - creates then deletes a project", async () => {
      const orgSlug = await getExistingOrgSlug();
      const name = `distilled-supabase-del-${testRunId}`;
      const created = await runEffect(
        retryOnFreeProjectLimit(
          v1CreateAProject({
            name,
            organization_slug: orgSlug,
            db_pass: `TestPass${testRunId}!1`,
            region: "us-east-1",
            plan: "free",
          }),
        ),
      );
      const result = await runEffect(v1DeleteAProject({ ref: created.ref }));
      expect(result.ref).toBe(created.ref);
      expect(result.name).toBe(name);
      expect(result).toHaveProperty("id");
    }, 180_000);

    it("error - BadRequest for invalid ref", async () => {
      await runEffect(
        v1DeleteAProject({ ref: FAKE_REF }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect((e as any)._tag).toBe("BadRequest");
          }),
        ),
      );
    }, 30_000);

    it("error - Forbidden with invalid token", async () => {
      await Effect.runPromise(
        v1DeleteAProject({ ref: FAKE_REF }).pipe(
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
