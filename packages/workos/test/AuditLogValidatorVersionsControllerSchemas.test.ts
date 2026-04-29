import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { AuditLogValidatorVersionsControllerCreate } from "../src/operations/AuditLogValidatorVersionsControllerCreate.ts";
import { AuditLogValidatorVersionsControllerSchemas } from "../src/operations/AuditLogValidatorVersionsControllerSchemas.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("AuditLogValidatorVersionsControllerSchemas", () => {
  it(
    "lists schemas for an existing audit log action",
    async () => {
      const actionName = `distilled.workos.list_schemas.${testRunId}`;

      const result = await runEffect(
        Effect.gen(function* () {
          yield* AuditLogValidatorVersionsControllerCreate({
            actionName,
            targets: [{ type: "user" }],
          });

          return yield* AuditLogValidatorVersionsControllerSchemas({
            actionName,
            limit: 10,
          });
        }),
      );

      expect(result).toBeDefined();
      expect(result.data).toBeDefined();
      expect(Array.isArray(result.data)).toBe(true);
      expect(result.data!.length).toBeGreaterThan(0);
    },
    { timeout: 60_000 },
  );

  it(
    "fails with NotFound when listing schemas for a non-existent action",
    async () => {
      const error = await runEffect(
        AuditLogValidatorVersionsControllerSchemas({
          actionName: `distilled.workos.does_not_exist.${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with UnprocessableEntity when limit is out of range",
    async () => {
      const actionName = `distilled.workos.list_schemas_invalid.${testRunId}`;

      const error = await runEffect(
        Effect.gen(function* () {
          yield* AuditLogValidatorVersionsControllerCreate({
            actionName,
            targets: [{ type: "user" }],
          });

          return yield* AuditLogValidatorVersionsControllerSchemas({
            actionName,
            limit: 9999,
          });
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("UnprocessableEntity");
    },
    { timeout: 60_000 },
  );
});
