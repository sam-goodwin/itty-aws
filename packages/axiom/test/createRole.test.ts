import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createRole } from "../src/operations/v2/createRole";
import { runEffect, testRunId } from "./setup";

describe("createRole", () => {
  // Roles are an Enterprise-plan feature. On non-Enterprise accounts axiom
  // returns 403 Forbidden with "Creating roles is only supported for
  // Enterprise plans" before validating input.
  it(
    "returns Forbidden on non-Enterprise plans",
    async () => {
      const error = await runEffect(
        createRole({
          name: `distilled-axiom-createrole-${testRunId}`,
          description: "createRole Forbidden probe",
          orgCapabilities: {
            datasets: ["read"],
          },
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("Forbidden");
    },
    { timeout: 30_000 },
  );
});
