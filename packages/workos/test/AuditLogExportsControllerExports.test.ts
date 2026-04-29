import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { AuditLogExportsControllerExports } from "../src/operations/AuditLogExportsControllerExports.ts";
import { OrganizationsControllerCreate } from "../src/operations/OrganizationsControllerCreate.ts";
import { OrganizationsControllerDeleteOrganization } from "../src/operations/OrganizationsControllerDeleteOrganization.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("AuditLogExportsControllerExports", () => {
  it(
    "creates an audit log export for an organization",
    async () => {
      const rangeEnd = new Date();
      const rangeStart = new Date(rangeEnd.getTime() - 24 * 60 * 60 * 1000);

      await runEffect(
        Effect.gen(function* () {
          const org = yield* OrganizationsControllerCreate({
            name: `distilled-workos-audit-export-${testRunId}`,
          });

          return yield* Effect.gen(function* () {
            const result = yield* AuditLogExportsControllerExports({
              organization_id: org.id,
              range_start: rangeStart.toISOString(),
              range_end: rangeEnd.toISOString(),
            });

            expect(result).toBeDefined();
            expect(typeof result.id).toBe("string");
            expect(["pending", "ready", "error"]).toContain(result.state);
          }).pipe(
            Effect.ensuring(
              OrganizationsControllerDeleteOrganization({ id: org.id }).pipe(
                Effect.ignore,
              ),
            ),
          );
        }),
      );
    },
    { timeout: 60_000 },
  );

  it(
    "fails with NotFound when the organization does not exist",
    async () => {
      const rangeEnd = new Date();
      const rangeStart = new Date(rangeEnd.getTime() - 24 * 60 * 60 * 1000);

      const error = await runEffect(
        AuditLogExportsControllerExports({
          organization_id: `org_does_not_exist_${testRunId}`,
          range_start: rangeStart.toISOString(),
          range_end: rangeEnd.toISOString(),
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with BadRequest when range_start is not a valid date",
    async () => {
      const error = await runEffect(
        Effect.gen(function* () {
          const org = yield* OrganizationsControllerCreate({
            name: `distilled-workos-audit-export-400-${testRunId}`,
          });

          return yield* Effect.gen(function* () {
            return yield* AuditLogExportsControllerExports({
              organization_id: org.id,
              range_start: "not-a-valid-date",
              range_end: new Date().toISOString(),
            });
          }).pipe(
            Effect.ensuring(
              OrganizationsControllerDeleteOrganization({ id: org.id }).pipe(
                Effect.ignore,
              ),
            ),
          );
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("BadRequest");
    },
    { timeout: 60_000 },
  );
});
