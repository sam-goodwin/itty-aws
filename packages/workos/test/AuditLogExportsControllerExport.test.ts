import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { AuditLogExportsControllerExport } from "../src/operations/AuditLogExportsControllerExport.ts";
import { AuditLogExportsControllerExports } from "../src/operations/AuditLogExportsControllerExports.ts";
import { OrganizationsControllerCreate } from "../src/operations/OrganizationsControllerCreate.ts";
import { OrganizationsControllerDeleteOrganization } from "../src/operations/OrganizationsControllerDeleteOrganization.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("AuditLogExportsControllerExport", () => {
  it(
    "gets an existing audit log export by id",
    async () => {
      const rangeEnd = new Date();
      const rangeStart = new Date(rangeEnd.getTime() - 24 * 60 * 60 * 1000);

      await runEffect(
        Effect.gen(function* () {
          const org = yield* OrganizationsControllerCreate({
            name: `distilled-workos-export-get-${testRunId}`,
          });

          return yield* Effect.gen(function* () {
            const created = yield* AuditLogExportsControllerExports({
              organization_id: org.id,
              range_start: rangeStart.toISOString(),
              range_end: rangeEnd.toISOString(),
            });

            const result = yield* AuditLogExportsControllerExport({
              auditLogExportId: created.id,
            });

            expect(result.id).toBe(created.id);
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
    "fails with NotFound for a non-existent audit log export id",
    async () => {
      const error = await runEffect(
        AuditLogExportsControllerExport({
          auditLogExportId: `audit_log_export_does_not_exist_${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
