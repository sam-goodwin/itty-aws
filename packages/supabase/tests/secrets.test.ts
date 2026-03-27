import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { runEffect, FAKE_REF, getExistingProject } from "./setup";
import { v1ListAllSecrets } from "../src/operations/v1ListAllSecrets";

describe("Secrets", () => {
  // ============================================================================
  // v1ListAllSecrets
  // ============================================================================
  describe("v1ListAllSecrets", () => {
    it("happy path - lists all secrets for project", async (ctx) => {
      const proj = await getExistingProject();
      if (!proj) { ctx.skip(); return; }
      const result = await runEffect(v1ListAllSecrets({ ref: proj.ref }));
      expect(Array.isArray(result)).toBe(true);
    }, 30_000);

    it("error - BadRequest for invalid ref", async () => {
      await runEffect(
        v1ListAllSecrets({ ref: FAKE_REF }).pipe(
          Effect.flip,
          Effect.map((e) => expect((e as any)._tag).toBe("BadRequest")),
        ),
      );
    }, 30_000);
  });
});
