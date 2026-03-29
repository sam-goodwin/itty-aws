import { Effect, Layer } from "effect";
import * as Redacted from "effect/Redacted";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { runEffect, FAKE_REF, FAKE_UUID, testRunId, getExistingProject } from "./setup";
import { v1GetProject } from "../src/operations/v1GetProject";
import { v1ListAllBranches } from "../src/operations/v1ListAllBranches";
import { v1CreateABranch } from "../src/operations/v1CreateABranch";
import { v1GetABranch } from "../src/operations/v1GetABranch";
import { v1GetABranchConfig } from "../src/operations/v1GetABranchConfig";
import { v1UpdateABranchConfig } from "../src/operations/v1UpdateABranchConfig";
import { Credentials, DEFAULT_API_BASE_URL } from "../src/credentials";

// Layer with an invalid token to trigger Forbidden/Unauthorized errors
const BadTokenLayer = Layer.merge(
  Layer.succeed(Credentials, {
    accessToken: Redacted.make("sbp_invalid_token_00000000"),
    apiBaseUrl: DEFAULT_API_BASE_URL,
  }),
  FetchHttpClient.layer,
);

describe("Branches", () => {
  // ============================================================================
  // v1ListAllBranches
  // ============================================================================
  describe("v1ListAllBranches", () => {
    it("happy path - lists all branches", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) { ctx.skip(); return; }
      const projDetails = await runEffect(v1GetProject({ ref: proj.ref }));
      if (projDetails.status !== "ACTIVE_HEALTHY") { ctx.skip(); return; }
      const result = await runEffect(
        v1ListAllBranches({ ref: proj.ref }).pipe(
          Effect.catch((e) => {
            const tag = (e as any)._tag;
            // Branching may not be enabled on free-tier projects
            if (tag === "NotFound" || tag === "InternalServerError" || tag === "UnknownSupabaseError") return Effect.succeed(null);
            return Effect.fail(e);
          }),
        ),
      );
      if (result === null) { ctx.skip(); return; }
      expect(Array.isArray(result)).toBe(true);
      if (result.length > 0) {
        expect(result[0]).toHaveProperty("id");
        expect(result[0]).toHaveProperty("name");
        expect(result[0]).toHaveProperty("project_ref");
        expect(result[0]).toHaveProperty("is_default");
        expect(result[0]).toHaveProperty("status");
      }
    }, 30_000);

    it("error - BadRequest/NotFound for invalid ref", async () => {
      await runEffect(
        v1ListAllBranches({ ref: FAKE_REF }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["BadRequest", "NotFound"]).toContain((e as any)._tag);
          }),
        ),
      );
    }, 30_000);

    it("error - Forbidden with invalid token", async () => {
      await Effect.runPromise(
        v1ListAllBranches({ ref: FAKE_REF }).pipe(
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
  // v1CreateABranch
  // ============================================================================
  describe("v1CreateABranch", () => {
    it("happy path - creates a branch (skips if branching not available)", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) { ctx.skip(); return; }
      const projDetails = await runEffect(v1GetProject({ ref: proj.ref }));
      if (projDetails.status !== "ACTIVE_HEALTHY") { ctx.skip(); return; }
      const result = await runEffect(
        v1CreateABranch({ ref: proj.ref, branch_name: `test-branch-${testRunId}` }).pipe(
          Effect.catch((e) => {
            const tag = (e as any)._tag;
            // Branching requires a paid plan with branching enabled
            if (tag === "NotFound" || tag === "BadRequest" || tag === "InternalServerError" || tag === "UnknownSupabaseError") return Effect.succeed(null);
            return Effect.fail(e);
          }),
        ),
      );
      if (result === null) { ctx.skip(); return; }
      expect(result).toHaveProperty("id");
      expect(result).toHaveProperty("name");
      expect(result).toHaveProperty("project_ref");
      expect(result).toHaveProperty("is_default");
      expect(result).toHaveProperty("status");
    }, 30_000);

    it("error - BadRequest/NotFound for invalid ref", async () => {
      await runEffect(
        v1CreateABranch({ ref: FAKE_REF, branch_name: `test-branch-${testRunId}` }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["BadRequest", "NotFound"]).toContain((e as any)._tag);
          }),
        ),
      );
    }, 30_000);

    it("error - Forbidden with invalid token", async () => {
      await Effect.runPromise(
        v1CreateABranch({ ref: FAKE_REF, branch_name: `test-branch-${testRunId}` }).pipe(
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
  // v1GetABranch
  // ============================================================================
  describe("v1GetABranch", () => {
    it("happy path - gets a branch by name (skips if branching not available)", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) { ctx.skip(); return; }
      const projDetails = await runEffect(v1GetProject({ ref: proj.ref }));
      if (projDetails.status !== "ACTIVE_HEALTHY") { ctx.skip(); return; }
      // Try to list branches first to get a valid name
      const branches = await runEffect(
        v1ListAllBranches({ ref: proj.ref }).pipe(
          Effect.catch((e) => {
            const tag = (e as any)._tag;
            if (tag === "NotFound" || tag === "InternalServerError" || tag === "UnknownSupabaseError") return Effect.succeed(null);
            return Effect.fail(e);
          }),
        ),
      );
      if (!branches || branches.length === 0) { ctx.skip(); return; }
      const result = await runEffect(v1GetABranch({ ref: proj.ref, name: branches[0].name }));
      expect(result).toHaveProperty("id");
      expect(result).toHaveProperty("name");
      expect(result).toHaveProperty("project_ref");
      expect(result).toHaveProperty("is_default");
      expect(result).toHaveProperty("status");
    }, 30_000);

    it("error - NotFound for non-existent branch name", async () => {
      await runEffect(
        v1GetABranch({ ref: FAKE_REF, name: "nonexistent-branch" }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["BadRequest", "NotFound"]).toContain((e as any)._tag);
          }),
        ),
      );
    }, 30_000);

    it("error - Forbidden with invalid token", async () => {
      await Effect.runPromise(
        v1GetABranch({ ref: FAKE_REF, name: "nonexistent-branch" }).pipe(
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
  // v1GetABranchConfig
  // ============================================================================
  describe("v1GetABranchConfig", () => {
    it("happy path - gets branch config (skips if branching not available)", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) { ctx.skip(); return; }
      const projDetails = await runEffect(v1GetProject({ ref: proj.ref }));
      if (projDetails.status !== "ACTIVE_HEALTHY") { ctx.skip(); return; }
      // Try to list branches first to get a valid branch id
      const branches = await runEffect(
        v1ListAllBranches({ ref: proj.ref }).pipe(
          Effect.catch((e) => {
            const tag = (e as any)._tag;
            if (tag === "NotFound" || tag === "InternalServerError" || tag === "UnknownSupabaseError") return Effect.succeed(null);
            return Effect.fail(e);
          }),
        ),
      );
      if (!branches || branches.length === 0) { ctx.skip(); return; }
      const result = await runEffect(v1GetABranchConfig({ branch_id_or_ref: branches[0].id }));
      expect(result).toHaveProperty("ref");
      expect(result).toHaveProperty("postgres_version");
      expect(result).toHaveProperty("status");
      expect(result).toHaveProperty("db_host");
      expect(result).toHaveProperty("db_port");
      expect(typeof result.db_port).toBe("number");
    }, 30_000);

    it("error - NotFound for non-existent branch id", async () => {
      await runEffect(
        v1GetABranchConfig({ branch_id_or_ref: FAKE_UUID }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["BadRequest", "NotFound"]).toContain((e as any)._tag);
          }),
        ),
      );
    }, 30_000);

    it("error - Forbidden with invalid token", async () => {
      await Effect.runPromise(
        v1GetABranchConfig({ branch_id_or_ref: FAKE_UUID }).pipe(
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
  // v1UpdateABranchConfig
  // ============================================================================
  describe("v1UpdateABranchConfig", () => {
    it("happy path - updates branch config (skips if branching not available)", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) { ctx.skip(); return; }
      const projDetails = await runEffect(v1GetProject({ ref: proj.ref }));
      if (projDetails.status !== "ACTIVE_HEALTHY") { ctx.skip(); return; }
      // Try to list branches first to get a valid branch id
      const branches = await runEffect(
        v1ListAllBranches({ ref: proj.ref }).pipe(
          Effect.catch((e) => {
            const tag = (e as any)._tag;
            if (tag === "NotFound" || tag === "InternalServerError" || tag === "UnknownSupabaseError") return Effect.succeed(null);
            return Effect.fail(e);
          }),
        ),
      );
      if (!branches || branches.length === 0) { ctx.skip(); return; }
      // No-op update — just send the existing branch name back
      const result = await runEffect(
        v1UpdateABranchConfig({ branch_id_or_ref: branches[0].id, branch_name: branches[0].name }),
      );
      expect(result).toHaveProperty("id");
      expect(result).toHaveProperty("name");
      expect(result).toHaveProperty("project_ref");
      expect(result).toHaveProperty("status");
    }, 30_000);

    it("error - NotFound for non-existent branch id", async () => {
      await runEffect(
        v1UpdateABranchConfig({ branch_id_or_ref: FAKE_UUID }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["BadRequest", "NotFound"]).toContain((e as any)._tag);
          }),
        ),
      );
    }, 30_000);

    it("error - Forbidden with invalid token", async () => {
      await Effect.runPromise(
        v1UpdateABranchConfig({ branch_id_or_ref: FAKE_UUID }).pipe(
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
