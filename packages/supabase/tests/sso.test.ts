import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { runEffect, FAKE_REF, FAKE_UUID, getExistingProject } from "./setup";
import { v1ListAllSsoProvider } from "../src/operations/v1ListAllSsoProvider";
import { v1GetASsoProvider } from "../src/operations/v1GetASsoProvider";
import { v1DeleteASsoProvider } from "../src/operations/v1DeleteASsoProvider";

describe("SSO Providers", () => {
  // ============================================================================
  // v1ListAllSsoProvider
  // ============================================================================
  describe("v1ListAllSsoProvider", () => {
    it("happy path - lists SSO providers for project", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) { ctx.skip(); return; }
      await runEffect(
        v1ListAllSsoProvider({ ref: proj.ref }).pipe(
          Effect.matchEffect({
            onSuccess: (result) => {
              expect(result).toBeDefined();
              return Effect.void;
            },
            onFailure: (e) => {
              // May return NotFound if SSO is not configured
              const tag = (e as any)._tag;
              expect(["NotFound", "BadRequest"]).toContain(tag);
              return Effect.void;
            },
          }),
        ),
      );
    }, 30_000);

    it("error - BadRequest for invalid ref", async () => {
      await runEffect(
        v1ListAllSsoProvider({ ref: FAKE_REF }).pipe(
          Effect.flip,
          Effect.map((e) => expect((e as any)._tag).toBe("BadRequest")),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // v1GetASsoProvider
  // ============================================================================
  describe("v1GetASsoProvider", () => {
    it("error - BadRequest for invalid ref", async () => {
      await runEffect(
        v1GetASsoProvider({ ref: FAKE_REF, provider_id: FAKE_UUID }).pipe(
          Effect.flip,
          Effect.map((e) => expect((e as any)._tag).toBe("BadRequest")),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent provider on valid project", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) { ctx.skip(); return; }
      await runEffect(
        v1GetASsoProvider({ ref: proj.ref, provider_id: FAKE_UUID }).pipe(
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
  // v1DeleteASsoProvider
  // ============================================================================
  describe("v1DeleteASsoProvider", () => {
    it("error - BadRequest for invalid ref", async () => {
      await runEffect(
        v1DeleteASsoProvider({ ref: FAKE_REF, provider_id: FAKE_UUID }).pipe(
          Effect.flip,
          Effect.map((e) => expect((e as any)._tag).toBe("BadRequest")),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent provider on valid project", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) { ctx.skip(); return; }
      await runEffect(
        v1DeleteASsoProvider({ ref: proj.ref, provider_id: FAKE_UUID }).pipe(
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
