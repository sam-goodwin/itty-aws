import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { runEffect, FAKE_REF, getExistingProject } from "./setup";
import { v1ListAllFunctions } from "../src/operations/v1ListAllFunctions";
import { v1GetAFunction } from "../src/operations/v1GetAFunction";
import { v1GetAFunctionBody } from "../src/operations/v1GetAFunctionBody";
import { v1DeleteAFunction } from "../src/operations/v1DeleteAFunction";
import { v1GetProjectFunctionCombinedStats } from "../src/operations/v1GetProjectFunctionCombinedStats";

describe("Functions", () => {
  // ============================================================================
  // v1ListAllFunctions
  // ============================================================================
  describe("v1ListAllFunctions", () => {
    it("happy path - lists all functions for project", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) { ctx.skip(); return; }
      const result = await runEffect(v1ListAllFunctions({ ref: proj.ref }));
      expect(Array.isArray(result)).toBe(true);
    }, 30_000);

    it("error - BadRequest for invalid ref", async () => {
      await runEffect(
        v1ListAllFunctions({ ref: FAKE_REF }).pipe(
          Effect.flip,
          Effect.map((e) => expect((e as any)._tag).toBe("BadRequest")),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // v1GetAFunction
  // ============================================================================
  describe("v1GetAFunction", () => {
    it("error - BadRequest for invalid ref", async () => {
      await runEffect(
        v1GetAFunction({ ref: FAKE_REF, function_slug: "nonexistent-fn" }).pipe(
          Effect.flip,
          Effect.map((e) => expect((e as any)._tag).toBe("BadRequest")),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent function on valid project", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) { ctx.skip(); return; }
      await runEffect(
        v1GetAFunction({ ref: proj.ref, function_slug: "nonexistent-fn" }).pipe(
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
  // v1GetAFunctionBody
  // ============================================================================
  describe("v1GetAFunctionBody", () => {
    it("error - BadRequest for invalid ref", async () => {
      await runEffect(
        v1GetAFunctionBody({ ref: FAKE_REF, function_slug: "nonexistent-fn" }).pipe(
          Effect.flip,
          Effect.map((e) => expect((e as any)._tag).toBe("BadRequest")),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent function on valid project", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) { ctx.skip(); return; }
      await runEffect(
        v1GetAFunctionBody({ ref: proj.ref, function_slug: "nonexistent-fn" }).pipe(
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
  // v1DeleteAFunction
  // ============================================================================
  describe("v1DeleteAFunction", () => {
    it("error - BadRequest for invalid ref", async () => {
      await runEffect(
        v1DeleteAFunction({ ref: FAKE_REF, function_slug: "nonexistent-fn" }).pipe(
          Effect.flip,
          Effect.map((e) => expect((e as any)._tag).toBe("BadRequest")),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent function on valid project", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) { ctx.skip(); return; }
      await runEffect(
        v1DeleteAFunction({ ref: proj.ref, function_slug: "nonexistent-fn" }).pipe(
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
  // v1GetProjectFunctionCombinedStats
  // ============================================================================
  describe("v1GetProjectFunctionCombinedStats", () => {
    it("error - BadRequest for invalid ref", async () => {
      await runEffect(
        v1GetProjectFunctionCombinedStats({
          ref: FAKE_REF,
          interval: "1day",
          function_id: "nonexistent",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect((e as any)._tag).toBe("BadRequest")),
        ),
      );
    }, 30_000);
  });
});
