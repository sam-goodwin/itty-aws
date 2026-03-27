import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { runEffect, FAKE_REF, FAKE_UUID, getExistingProject } from "./setup";
import { v1GetProjectApiKeys } from "../src/operations/v1GetProjectApiKeys";
import { v1GetProjectApiKey } from "../src/operations/v1GetProjectApiKey";
import { v1DeleteProjectApiKey } from "../src/operations/v1DeleteProjectApiKey";

describe("API Keys", () => {
  // ============================================================================
  // v1GetProjectApiKeys
  // ============================================================================
  describe("v1GetProjectApiKeys", () => {
    it("happy path - lists project API keys", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) { ctx.skip(); return; }
      const result = await runEffect(v1GetProjectApiKeys({ ref: proj.ref }));
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBeGreaterThanOrEqual(1);
    }, 30_000);

    it("error - BadRequest for invalid ref", async () => {
      await runEffect(
        v1GetProjectApiKeys({ ref: FAKE_REF }).pipe(
          Effect.flip,
          Effect.map((e) => expect((e as any)._tag).toBe("BadRequest")),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // v1GetProjectApiKey
  // ============================================================================
  describe("v1GetProjectApiKey", () => {
    it("error - BadRequest for invalid ref", async () => {
      await runEffect(
        v1GetProjectApiKey({ ref: FAKE_REF, id: FAKE_UUID }).pipe(
          Effect.flip,
          Effect.map((e) => expect((e as any)._tag).toBe("BadRequest")),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent key on valid project", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) { ctx.skip(); return; }
      await runEffect(
        v1GetProjectApiKey({ ref: proj.ref, id: FAKE_UUID }).pipe(
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
  // v1DeleteProjectApiKey
  // ============================================================================
  describe("v1DeleteProjectApiKey", () => {
    it("error - BadRequest for invalid ref", async () => {
      await runEffect(
        v1DeleteProjectApiKey({ ref: FAKE_REF, id: FAKE_UUID }).pipe(
          Effect.flip,
          Effect.map((e) => expect((e as any)._tag).toBe("BadRequest")),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent key on valid project", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) { ctx.skip(); return; }
      await runEffect(
        v1DeleteProjectApiKey({ ref: proj.ref, id: FAKE_UUID }).pipe(
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
