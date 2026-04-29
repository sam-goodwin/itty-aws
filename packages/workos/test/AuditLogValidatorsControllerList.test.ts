import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { AuditLogValidatorsControllerList } from "../src/operations/AuditLogValidatorsControllerList.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("AuditLogValidatorsControllerList", () => {
  it(
    "lists audit log actions",
    async () => {
      const result = await runEffect(
        AuditLogValidatorsControllerList({ limit: 10 }),
      );

      expect(result).toBeDefined();
      if (result.data !== undefined) {
        expect(Array.isArray(result.data)).toBe(true);
      }
    },
    { timeout: 30_000 },
  );

  it(
    "fails with UnprocessableEntity when limit is out of range",
    async () => {
      const error = await runEffect(
        AuditLogValidatorsControllerList({ limit: 9999 }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("UnprocessableEntity");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with NotFound when paginating with a non-existent cursor",
    async () => {
      const error = await runEffect(
        AuditLogValidatorsControllerList({
          after: `does_not_exist_${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
