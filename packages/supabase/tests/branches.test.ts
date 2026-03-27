import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { runEffect, FAKE_REF, FAKE_UUID, getExistingProject } from "./setup";
import { v1ListAllBranches } from "../src/operations/v1ListAllBranches";
import { v1GetABranch } from "../src/operations/v1GetABranch";
import { v1GetABranchConfig } from "../src/operations/v1GetABranchConfig";
import { v1DeleteABranch } from "../src/operations/v1DeleteABranch";
import { v1DiffABranch } from "../src/operations/v1DiffABranch";
import { v1MergeABranch } from "../src/operations/v1MergeABranch";
import { v1PushABranch } from "../src/operations/v1PushABranch";
import { v1ResetABranch } from "../src/operations/v1ResetABranch";
import { v1RestoreABranch } from "../src/operations/v1RestoreABranch";

describe("Branches", () => {
  // ============================================================================
  // v1ListAllBranches
  // ============================================================================
  describe("v1ListAllBranches", () => {
    it("happy path - lists branches for project", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) { ctx.skip(); return; }
      await runEffect(
        v1ListAllBranches({ ref: proj.ref }).pipe(
          Effect.matchEffect({
            onSuccess: (result) => {
              // Branching may not be enabled — empty array is fine
              expect(Array.isArray(result)).toBe(true);
              return Effect.void;
            },
            onFailure: (e) => {
              // May return NotFound if branching is not enabled
              const tag = (e as any)._tag;
              expect(["NotFound", "BadRequest"]).toContain(tag);
              return Effect.void;
            },
          }),
        ),
      );
    }, 30_000);

    it("error - NotFound for invalid ref", async () => {
      await runEffect(
        v1ListAllBranches({ ref: FAKE_REF }).pipe(
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
  // v1GetABranch
  // ============================================================================
  describe("v1GetABranch", () => {
    it("error - NotFound for invalid ref", async () => {
      await runEffect(
        v1GetABranch({ ref: FAKE_REF, name: "nonexistent-branch" }).pipe(
          Effect.flip,
          Effect.map((e) => {
            const tag = (e as any)._tag;
            expect(["NotFound", "BadRequest"]).toContain(tag);
          }),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent branch on valid project", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) { ctx.skip(); return; }
      await runEffect(
        v1GetABranch({ ref: proj.ref, name: "nonexistent-branch" }).pipe(
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
  // v1GetABranchConfig
  // ============================================================================
  describe("v1GetABranchConfig", () => {
    it("error - BadRequest for invalid ref", async () => {
      await runEffect(
        v1GetABranchConfig({ branch_id_or_ref: FAKE_REF }).pipe(
          Effect.flip,
          Effect.map((e) => expect((e as any)._tag).toBe("BadRequest")),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent branch", async () => {
      await runEffect(
        v1GetABranchConfig({ branch_id_or_ref: FAKE_UUID }).pipe(
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
  // v1DeleteABranch
  // ============================================================================
  describe("v1DeleteABranch", () => {
    it("error - NotFound for non-existent branch", async () => {
      await runEffect(
        v1DeleteABranch({ branch_id_or_ref: FAKE_UUID }).pipe(
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
  // v1DiffABranch
  // ============================================================================
  describe("v1DiffABranch", () => {
    it("error - NotFound for non-existent branch", async () => {
      await runEffect(
        v1DiffABranch({ branch_id_or_ref: FAKE_UUID }).pipe(
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
  // v1MergeABranch
  // ============================================================================
  describe("v1MergeABranch", () => {
    it("error - NotFound for non-existent branch", async () => {
      await runEffect(
        v1MergeABranch({ branch_id_or_ref: FAKE_UUID }).pipe(
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
  // v1PushABranch
  // ============================================================================
  describe("v1PushABranch", () => {
    it("error - NotFound for non-existent branch", async () => {
      await runEffect(
        v1PushABranch({ branch_id_or_ref: FAKE_UUID }).pipe(
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
  // v1ResetABranch
  // ============================================================================
  describe("v1ResetABranch", () => {
    it("error - NotFound for non-existent branch", async () => {
      await runEffect(
        v1ResetABranch({ branch_id_or_ref: FAKE_UUID }).pipe(
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
  // v1RestoreABranch
  // ============================================================================
  describe("v1RestoreABranch", () => {
    it("error - NotFound for non-existent branch", async () => {
      await runEffect(
        v1RestoreABranch({ branch_id_or_ref: FAKE_UUID }).pipe(
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
