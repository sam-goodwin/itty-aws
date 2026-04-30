import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { AuditLogsRetentionControllerUpdateAuditLogsRetention } from "../src/operations/AuditLogsRetentionControllerUpdateAuditLogsRetention.ts";
import { OrganizationsControllerCreate } from "../src/operations/OrganizationsControllerCreate.ts";
import { OrganizationsControllerDeleteOrganization } from "../src/operations/OrganizationsControllerDeleteOrganization.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("AuditLogsRetentionControllerUpdateAuditLogsRetention", () => {
  it(
    "sets the audit log retention for an organization",
    async () => {
      const result = await runEffect(
        Effect.gen(function* () {
          const created = yield* OrganizationsControllerCreate({
            name: `distilled-workos-audit-update-retention-${testRunId}`,
          });
          return yield* AuditLogsRetentionControllerUpdateAuditLogsRetention({
            id: created.id,
            retention_period_in_days: 30,
          }).pipe(
            Effect.ensuring(
              OrganizationsControllerDeleteOrganization({
                id: created.id,
              }).pipe(Effect.ignore),
            ),
          );
        }),
      );
      expect(result).toBeDefined();
      expect(result.retention_period_in_days).toBe(30);
    },
    { timeout: 60_000 },
  );

  it(
    "fails with NotFound for a non-existent organization id",
    async () => {
      const error = await runEffect(
        AuditLogsRetentionControllerUpdateAuditLogsRetention({
          id: `organization_does_not_exist_${testRunId}`,
          retention_period_in_days: 30,
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with UnprocessableEntity for a negative retention period",
    async () => {
      const error = await runEffect(
        Effect.gen(function* () {
          const created = yield* OrganizationsControllerCreate({
            name: `distilled-workos-audit-422-${testRunId}`,
          });
          return yield* AuditLogsRetentionControllerUpdateAuditLogsRetention({
            id: created.id,
            retention_period_in_days: -1,
          }).pipe(
            Effect.ensuring(
              OrganizationsControllerDeleteOrganization({
                id: created.id,
              }).pipe(Effect.ignore),
            ),
          );
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("UnprocessableEntity");
    },
    { timeout: 60_000 },
  );
});
