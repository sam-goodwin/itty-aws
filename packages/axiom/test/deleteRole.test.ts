import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { deleteRole } from "../src/operations/v2/deleteRole";
import { runEffect, testRunId } from "./setup";

describe("deleteRole", () => {
  // Roles are an Enterprise-plan feature. On non-Enterprise accounts axiom
  // returns 403 Forbidden before the id lookup, so NotFound is unreachable.
  it(
    "returns Forbidden on non-Enterprise plans",
    async () => {
      const error = await runEffect(
        deleteRole({ id: `doesnotexist-${testRunId}` }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("Forbidden");
    },
    { timeout: 30_000 },
  );
});
