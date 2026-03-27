import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { runEffect, FAKE_REF, FAKE_UUID, getExistingProject } from "./setup";
import { v1ListAllBuckets } from "../src/operations/v1ListAllBuckets";
import { v1ListMigrationHistory } from "../src/operations/v1ListMigrationHistory";
import { v1ListProjectTpaIntegrations } from "../src/operations/v1ListProjectTpaIntegrations";
import { v1GetProjectTpaIntegration } from "../src/operations/v1GetProjectTpaIntegration";
import { v1DeleteProjectTpaIntegration } from "../src/operations/v1DeleteProjectTpaIntegration";
import { v1RunAQuery } from "../src/operations/v1RunAQuery";
import { v1ReadOnlyQuery } from "../src/operations/v1ReadOnlyQuery";
import { v1GetAMigration } from "../src/operations/v1GetAMigration";
import { v1PatchAMigration } from "../src/operations/v1PatchAMigration";
import { v1ShutdownRealtime } from "../src/operations/v1ShutdownRealtime";
import { v1DisablePreviewBranching } from "../src/operations/v1DisablePreviewBranching";
import { v1DeleteJitAccess } from "../src/operations/v1DeleteJitAccess";

describe("Project Resources", () => {
  // ============================================================================
  // v1ListAllBuckets
  // ============================================================================
  describe("v1ListAllBuckets", () => {
    it("happy path - lists storage buckets", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) { ctx.skip(); return; }
      const result = await runEffect(v1ListAllBuckets({ ref: proj.ref }));
      expect(Array.isArray(result)).toBe(true);
    }, 30_000);

    it("error - BadRequest for invalid ref", async () => {
      await runEffect(
        v1ListAllBuckets({ ref: FAKE_REF }).pipe(
          Effect.flip,
          Effect.map((e) => expect((e as any)._tag).toBe("BadRequest")),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // v1ListMigrationHistory
  // ============================================================================
  describe("v1ListMigrationHistory", () => {
    it("happy path - lists migration history", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) { ctx.skip(); return; }
      const result = await runEffect(v1ListMigrationHistory({ ref: proj.ref }));
      expect(Array.isArray(result)).toBe(true);
    }, 30_000);

    it("error - BadRequest for invalid ref", async () => {
      await runEffect(
        v1ListMigrationHistory({ ref: FAKE_REF }).pipe(
          Effect.flip,
          Effect.map((e) => expect((e as any)._tag).toBe("BadRequest")),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // v1GetAMigration
  // ============================================================================
  describe("v1GetAMigration", () => {
    it("error - BadRequest for invalid ref", async () => {
      await runEffect(
        v1GetAMigration({ ref: FAKE_REF, version: "20240101000000" }).pipe(
          Effect.flip,
          Effect.map((e) => expect((e as any)._tag).toBe("BadRequest")),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent migration version", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) { ctx.skip(); return; }
      await runEffect(
        v1GetAMigration({ ref: proj.ref, version: "19700101000000" }).pipe(
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
  // v1PatchAMigration
  // ============================================================================
  describe("v1PatchAMigration", () => {
    it("error - NotFound for non-existent migration", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) { ctx.skip(); return; }
      await runEffect(
        v1PatchAMigration({ ref: proj.ref, version: "19700101000000" }).pipe(
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
  // v1ListProjectTpaIntegrations
  // ============================================================================
  describe("v1ListProjectTpaIntegrations", () => {
    it("happy path - lists TPA integrations", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) { ctx.skip(); return; }
      const result = await runEffect(v1ListProjectTpaIntegrations({ ref: proj.ref }));
      expect(Array.isArray(result)).toBe(true);
    }, 30_000);

    it("error - BadRequest for invalid ref", async () => {
      await runEffect(
        v1ListProjectTpaIntegrations({ ref: FAKE_REF }).pipe(
          Effect.flip,
          Effect.map((e) => expect((e as any)._tag).toBe("BadRequest")),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // v1GetProjectTpaIntegration
  // ============================================================================
  describe("v1GetProjectTpaIntegration", () => {
    it("error - NotFound for non-existent TPA integration", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) { ctx.skip(); return; }
      await runEffect(
        v1GetProjectTpaIntegration({ ref: proj.ref, tpa_id: FAKE_UUID }).pipe(
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
  // v1DeleteProjectTpaIntegration
  // ============================================================================
  describe("v1DeleteProjectTpaIntegration", () => {
    it("error - NotFound for non-existent TPA integration", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) { ctx.skip(); return; }
      await runEffect(
        v1DeleteProjectTpaIntegration({ ref: proj.ref, tpa_id: FAKE_UUID }).pipe(
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
  // v1RunAQuery
  // ============================================================================
  describe("v1RunAQuery", () => {
    it("happy path - runs a query", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) { ctx.skip(); return; }
      const result = await runEffect(v1RunAQuery({ ref: proj.ref, query: "SELECT 1 as val" }));
      expect(result).toBeDefined();
    }, 30_000);

    it("error - BadRequest for invalid ref", async () => {
      await runEffect(
        v1RunAQuery({ ref: FAKE_REF, query: "SELECT 1" }).pipe(
          Effect.flip,
          Effect.map((e) => expect((e as any)._tag).toBe("BadRequest")),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // v1ReadOnlyQuery
  // ============================================================================
  describe("v1ReadOnlyQuery", () => {
    it("happy path - runs a read-only query", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) { ctx.skip(); return; }
      const result = await runEffect(v1ReadOnlyQuery({ ref: proj.ref, query: "SELECT 1 as val" }));
      expect(result).toBeDefined();
    }, 30_000);

    it("error - BadRequest for invalid ref", async () => {
      await runEffect(
        v1ReadOnlyQuery({ ref: FAKE_REF, query: "SELECT 1" }).pipe(
          Effect.flip,
          Effect.map((e) => expect((e as any)._tag).toBe("BadRequest")),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // v1ShutdownRealtime
  // ============================================================================
  describe("v1ShutdownRealtime", () => {
    it("error - BadRequest for invalid ref", async () => {
      await runEffect(
        v1ShutdownRealtime({ ref: FAKE_REF }).pipe(
          Effect.flip,
          Effect.map((e) => expect((e as any)._tag).toBe("BadRequest")),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // v1DisablePreviewBranching
  // ============================================================================
  describe("v1DisablePreviewBranching", () => {
    it("error - BadRequest for invalid ref", async () => {
      await runEffect(
        v1DisablePreviewBranching({ ref: FAKE_REF }).pipe(
          Effect.flip,
          Effect.map((e) => expect((e as any)._tag).toBe("BadRequest")),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // v1DeleteJitAccess
  // ============================================================================
  describe("v1DeleteJitAccess", () => {
    it("error - BadRequest for invalid ref", async () => {
      await runEffect(
        v1DeleteJitAccess({ ref: FAKE_REF, user_id: FAKE_UUID }).pipe(
          Effect.flip,
          Effect.map((e) => expect((e as any)._tag).toBe("BadRequest")),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent JIT access on valid project", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) { ctx.skip(); return; }
      await runEffect(
        v1DeleteJitAccess({ ref: proj.ref, user_id: FAKE_UUID }).pipe(
          Effect.flip,
          Effect.map((e) => {
            const tag = (e as any)._tag;
            expect(["NotFound", "BadRequest"]).toContain(tag);
          }),
        ),
      );
    }, 30_000);
  });
});
