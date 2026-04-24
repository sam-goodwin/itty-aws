import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { updateRole } from "../src/operations/v2/updateRole";
import { runEffect, testRunId } from "./setup";

describe("updateRole", () => {
  // Roles are an Enterprise-plan feature. On non-Enterprise accounts axiom
  // returns 403 Forbidden before id lookup / body validation.
  it(
    "returns Forbidden on non-Enterprise plans",
    async () => {
      const error = await runEffect(
        updateRole({
          id: `doesnotexist-${testRunId}`,
          name: `distilled-axiom-updrole-${testRunId}`,
          orgCapabilities: { datasets: ["read"] },
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("Forbidden");
    },
    { timeout: 30_000 },
  );
});
