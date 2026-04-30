import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { AuthorizationResourcesByExternalIdControllerGetByExternalId } from "../src/operations/AuthorizationResourcesByExternalIdControllerGetByExternalId.ts";
import { OrganizationsControllerCreate } from "../src/operations/OrganizationsControllerCreate.ts";
import { OrganizationsControllerDeleteOrganization } from "../src/operations/OrganizationsControllerDeleteOrganization.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("AuthorizationResourcesByExternalIdControllerGetByExternalId", () => {
  it(
    "retrieves an authorization resource by external id",
    async () => {
      const result = await runEffect(
        AuthorizationResourcesByExternalIdControllerGetByExternalId({
          organization_id: `org_${testRunId}`,
          resource_type_slug: "workspace",
          external_id: `external_${testRunId}`,
        }),
      );

      expect(result).toBeDefined();
      expect(typeof result.id).toBe("string");
      expect(typeof result.external_id).toBe("string");
      expect(typeof result.resource_type_slug).toBe("string");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with NotFound for a non-existent external id",
    async () => {
      const error = await runEffect(
        Effect.gen(function* () {
          const org = yield* OrganizationsControllerCreate({
            name: `distilled-workos-resources-by-ext-404-${testRunId}`,
          });

          return yield* AuthorizationResourcesByExternalIdControllerGetByExternalId(
            {
              organization_id: org.id,
              resource_type_slug: "workspace",
              external_id: `external_does_not_exist_${testRunId}`,
            },
          ).pipe(
            Effect.ensuring(
              OrganizationsControllerDeleteOrganization({ id: org.id }).pipe(
                Effect.ignore,
              ),
            ),
          );
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
    },
    { timeout: 60_000 },
  );

  it(
    "fails with Forbidden when the organization belongs to a different tenant",
    async () => {
      const error = await runEffect(
        AuthorizationResourcesByExternalIdControllerGetByExternalId({
          organization_id: "org_01HFGZ6QYV0000000000000000",
          resource_type_slug: "workspace",
          external_id: `external_${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(["Forbidden", "NotFound"]).toContain(error._tag);
    },
    { timeout: 30_000 },
  );
});
