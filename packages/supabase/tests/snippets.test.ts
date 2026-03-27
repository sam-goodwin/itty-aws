import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { runEffect, FAKE_UUID } from "./setup";
import { v1ListAllSnippets } from "../src/operations/v1ListAllSnippets";
import { v1GetASnippet } from "../src/operations/v1GetASnippet";

describe("Snippets", () => {
  // ============================================================================
  // v1ListAllSnippets
  // ============================================================================
  describe("v1ListAllSnippets", () => {
    it("happy path - lists all snippets", async () => {
      const result = await runEffect(v1ListAllSnippets({}));
      expect(result).toBeDefined();
    }, 30_000);
  });

  // ============================================================================
  // v1GetASnippet
  // ============================================================================
  describe("v1GetASnippet", () => {
    it("error - NotFound for non-existent snippet", async () => {
      await runEffect(
        v1GetASnippet({ id: FAKE_UUID }).pipe(
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
