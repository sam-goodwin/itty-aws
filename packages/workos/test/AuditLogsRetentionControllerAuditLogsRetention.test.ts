import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { AuditLogsRetentionControllerAuditLogsRetention } from "../src/operations/AuditLogsRetentionControllerAuditLogsRetention.ts";
import { OrganizationsControllerCreate } from "../src/operations/OrganizationsControllerCreate.ts";
import { OrganizationsControllerDeleteOrganization } from "../src/operations/OrganizationsControllerDeleteOrganization.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("AuditLogsRetentionControllerAuditLogsRetention", () => {
  it(
    "gets the audit log retention for an organization",
    async () => {
      const result = await runEffect(
        Effect.gen(function* () {
          const created = yield* OrganizationsControllerCreate({
            name: `distilled-workos-audit-retention-${testRunId}`,
          });
          return yield* AuditLogsRetentionControllerAuditLogsRetention({
            id: created.id,
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
      expect(
        result.retention_period_in_days === null ||
          typeof result.retention_period_in_days === "number",
      ).toBe(true);
    },
    { timeout: 60_000 },
  );

  it(
    "fails with NotFound for a non-existent organization id",
    async () => {
      const error = await runEffect(
        AuditLogsRetentionControllerAuditLogsRetention({
          id: `organization_does_not_exist_${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
