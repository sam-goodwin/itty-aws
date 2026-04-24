import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createGroup } from "../src/operations/v2/createGroup";
import { runEffect, testRunId } from "./setup";

describe("createGroup", () => {
  // Groups are an Enterprise-plan feature. On non-Enterprise accounts axiom
  // returns 403 Forbidden with "create groups is only supported for Enterprise
  // plans" before validating input, so we assert that instead of the
  // happy-path / UnprocessableEntity shapes.
  it(
    "returns Forbidden on non-Enterprise plans",
    async () => {
      const error = await runEffect(
        createGroup({
          name: `distilled-axiom-creategroup-${testRunId}`,
          description: "createGroup Forbidden probe",
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("Forbidden");
    },
    { timeout: 30_000 },
  );
});
