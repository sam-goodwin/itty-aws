import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { AuthorizationResourcesByExternalIdControllerListOrganizationMembershipsForResourceByExternalId } from "../src/operations/AuthorizationResourcesByExternalIdControllerListOrganizationMembershipsForResourceByExternalId.ts";
import { OrganizationsControllerCreate } from "../src/operations/OrganizationsControllerCreate.ts";
import { OrganizationsControllerDeleteOrganization } from "../src/operations/OrganizationsControllerDeleteOrganization.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("AuthorizationResourcesByExternalIdControllerListOrganizationMembershipsForResourceByExternalId", () => {
  it(
    "lists organization memberships for a resource by external id",
    async () => {
      const result = await runEffect(
        AuthorizationResourcesByExternalIdControllerListOrganizationMembershipsForResourceByExternalId(
          {
            organization_id: `org_${testRunId}`,
            resource_type_slug: "workspace",
            external_id: `external_${testRunId}`,
            permission_slug: "read",
            limit: 10,
          },
        ),
      );

      expect(result).toBeDefined();
      expect(Array.isArray(result.data)).toBe(true);
      expect(result.list_metadata).toBeDefined();
    },
    { timeout: 30_000 },
  );

  it(
    "fails with BadRequest when permission_slug is empty",
    async () => {
      const error = await runEffect(
        Effect.gen(function* () {
          const org = yield* OrganizationsControllerCreate({
            name: `distilled-workos-resource-mems-400-${testRunId}`,
          });

          return yield* AuthorizationResourcesByExternalIdControllerListOrganizationMembershipsForResourceByExternalId(
            {
              organization_id: org.id,
              resource_type_slug: "workspace",
              external_id: `external_${testRunId}`,
              permission_slug: "",
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

      expect(["BadRequest", "UnprocessableEntity"]).toContain(error._tag);
    },
    { timeout: 60_000 },
  );

  it(
    "fails with NotFound for a non-existent external id",
    async () => {
      const error = await runEffect(
        Effect.gen(function* () {
          const org = yield* OrganizationsControllerCreate({
            name: `distilled-workos-resource-mems-404-${testRunId}`,
          });

          return yield* AuthorizationResourcesByExternalIdControllerListOrganizationMembershipsForResourceByExternalId(
            {
              organization_id: org.id,
              resource_type_slug: "workspace",
              external_id: `external_does_not_exist_${testRunId}`,
              permission_slug: "read",
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
        AuthorizationResourcesByExternalIdControllerListOrganizationMembershipsForResourceByExternalId(
          {
            organization_id: "org_01HFGZ6QYV0000000000000000",
            resource_type_slug: "workspace",
            external_id: `external_${testRunId}`,
            permission_slug: "read",
          },
        ).pipe(Effect.flip),
      );

      expect(["Forbidden", "NotFound"]).toContain(error._tag);
    },
    { timeout: 30_000 },
  );

  it(
    "fails with UnprocessableEntity when the resource type slug is invalid",
    async () => {
      const error = await runEffect(
        Effect.gen(function* () {
          const org = yield* OrganizationsControllerCreate({
            name: `distilled-workos-resource-mems-422-${testRunId}`,
          });

          return yield* AuthorizationResourcesByExternalIdControllerListOrganizationMembershipsForResourceByExternalId(
            {
              organization_id: org.id,
              resource_type_slug: "Invalid Slug With Spaces!!!",
              external_id: `external_${testRunId}`,
              permission_slug: "read",
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

      expect(["NotFound", "UnprocessableEntity"]).toContain(error._tag);
    },
    { timeout: 60_000 },
  );
});
