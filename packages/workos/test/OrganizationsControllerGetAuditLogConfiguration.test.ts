import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { OrganizationsControllerCreate } from "../src/operations/OrganizationsControllerCreate.ts";
import { OrganizationsControllerDeleteOrganization } from "../src/operations/OrganizationsControllerDeleteOrganization.ts";
import { OrganizationsControllerGetAuditLogConfiguration } from "../src/operations/OrganizationsControllerGetAuditLogConfiguration.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("OrganizationsControllerGetAuditLogConfiguration", () => {
  it(
    "gets the audit log configuration for an organization",
    async () => {
      const result = await runEffect(
        Effect.gen(function* () {
          const created = yield* OrganizationsControllerCreate({
            name: `distilled-workos-orgs-audit-${testRunId}`,
          });
          return yield* OrganizationsControllerGetAuditLogConfiguration({
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
      expect(typeof result.organization_id).toBe("string");
      expect(typeof result.retention_period_in_days).toBe("number");
      expect(["active", "inactive", "disabled"]).toContain(result.state);
    },
    { timeout: 60_000 },
  );

  it(
    "fails with NotFound for a non-existent organization id",
    async () => {
      const error = await runEffect(
        OrganizationsControllerGetAuditLogConfiguration({
          id: `organization_does_not_exist_${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
