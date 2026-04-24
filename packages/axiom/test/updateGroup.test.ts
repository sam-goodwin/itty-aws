import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { updateGroup } from "../src/operations/v2/updateGroup";
import { runEffect, testRunId } from "./setup";

describe("updateGroup", () => {
  // Groups are an Enterprise-plan feature. On non-Enterprise accounts axiom
  // returns 403 Forbidden before the id lookup / body validation, so neither
  // NotFound nor UnprocessableEntity can be reached here.
  it(
    "returns Forbidden on non-Enterprise plans",
    async () => {
      const error = await runEffect(
        updateGroup({
          id: `doesnotexist-${testRunId}`,
          name: `distilled-axiom-updgroup-${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("Forbidden");
    },
    { timeout: 30_000 },
  );
});
