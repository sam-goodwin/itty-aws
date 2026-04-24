import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { deleteGroup } from "../src/operations/v2/deleteGroup";
import { runEffect, testRunId } from "./setup";

describe("deleteGroup", () => {
  // Groups are an Enterprise-plan feature. On non-Enterprise accounts axiom
  // returns 403 Forbidden before the id lookup, so NotFound is unreachable.
  it(
    "returns Forbidden on non-Enterprise plans",
    async () => {
      const error = await runEffect(
        deleteGroup({ id: `doesnotexist-${testRunId}` }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("Forbidden");
    },
    { timeout: 30_000 },
  );
});
