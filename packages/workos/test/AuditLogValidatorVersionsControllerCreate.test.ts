import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { AuditLogValidatorVersionsControllerCreate } from "../src/operations/AuditLogValidatorVersionsControllerCreate.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("AuditLogValidatorVersionsControllerCreate", () => {
  it(
    "creates a new schema version for an audit log action",
    async () => {
      const actionName = `distilled.workos.create_schema.${testRunId}`;

      const result = await runEffect(
        AuditLogValidatorVersionsControllerCreate({
          actionName,
          targets: [{ type: "user" }],
        }),
      );

      expect(result).toBeDefined();
      expect(typeof result.version).toBe("number");
      expect(result.version).toBeGreaterThan(0);
      expect(Array.isArray(result.targets)).toBe(true);
      expect(result.targets.length).toBe(1);
      expect(result.targets[0].type).toBe("user");
    },
    { timeout: 60_000 },
  );

  it(
    "fails with UnprocessableEntity when targets is empty",
    async () => {
      const actionName = `distilled.workos.invalid_schema.${testRunId}`;

      const error = await runEffect(
        AuditLogValidatorVersionsControllerCreate({
          actionName,
          targets: [],
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("UnprocessableEntity");
    },
    { timeout: 30_000 },
  );
});
