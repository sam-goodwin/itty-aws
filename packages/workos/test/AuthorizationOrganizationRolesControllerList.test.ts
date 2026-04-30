import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { AuthorizationOrganizationRolesControllerList } from "../src/operations/AuthorizationOrganizationRolesControllerList.ts";
import { OrganizationsControllerCreate } from "../src/operations/OrganizationsControllerCreate.ts";
import { OrganizationsControllerDeleteOrganization } from "../src/operations/OrganizationsControllerDeleteOrganization.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("AuthorizationOrganizationRolesControllerList", () => {
  it(
    "lists roles applicable to an organization",
    async () => {
      const result = await runEffect(
        Effect.gen(function* () {
          const org = yield* OrganizationsControllerCreate({
            name: `distilled-workos-roles-list-${testRunId}`,
          });

          return yield* AuthorizationOrganizationRolesControllerList({
            organizationId: org.id,
          }).pipe(
            Effect.ensuring(
              OrganizationsControllerDeleteOrganization({ id: org.id }).pipe(
                Effect.ignore,
              ),
            ),
          );
        }),
      );

      expect(result).toBeDefined();
      expect(Array.isArray(result.data)).toBe(true);
      for (const role of result.data) {
        expect(typeof role.id).toBe("string");
        expect(typeof role.slug).toBe("string");
        expect(["EnvironmentRole", "OrganizationRole"]).toContain(role.type);
      }
    },
    { timeout: 60_000 },
  );

  it(
    "fails with NotFound for a non-existent organization id",
    async () => {
      const error = await runEffect(
        AuthorizationOrganizationRolesControllerList({
          organizationId: `org_does_not_exist_${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with Forbidden when the organization belongs to a different tenant",
    async () => {
      const error = await runEffect(
        AuthorizationOrganizationRolesControllerList({
          organizationId: "org_01HFGZ6QYV0000000000000000",
        }).pipe(Effect.flip),
      );

      expect(["Forbidden", "NotFound"]).toContain(error._tag);
    },
    { timeout: 30_000 },
  );
});
