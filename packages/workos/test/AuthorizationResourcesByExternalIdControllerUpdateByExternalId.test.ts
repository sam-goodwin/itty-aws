import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { AuthorizationResourcesByExternalIdControllerUpdateByExternalId } from "../src/operations/AuthorizationResourcesByExternalIdControllerUpdateByExternalId.ts";
import { OrganizationsControllerCreate } from "../src/operations/OrganizationsControllerCreate.ts";
import { OrganizationsControllerDeleteOrganization } from "../src/operations/OrganizationsControllerDeleteOrganization.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("AuthorizationResourcesByExternalIdControllerUpdateByExternalId", () => {
  it(
    "updates an authorization resource by external id",
    async () => {
      const result = await runEffect(
        AuthorizationResourcesByExternalIdControllerUpdateByExternalId({
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
    "fails with BadRequest when the external id is empty",
    async () => {
      const error = await runEffect(
        Effect.gen(function* () {
          const org = yield* OrganizationsControllerCreate({
            name: `distilled-workos-resource-update-400-${testRunId}`,
          });

          return yield* AuthorizationResourcesByExternalIdControllerUpdateByExternalId(
            {
              organization_id: org.id,
              resource_type_slug: "workspace",
              external_id: "",
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

      expect(["BadRequest", "NotFound"]).toContain(error._tag);
    },
    { timeout: 60_000 },
  );

  it(
    "fails with NotFound for a non-existent external id",
    async () => {
      const error = await runEffect(
        Effect.gen(function* () {
          const org = yield* OrganizationsControllerCreate({
            name: `distilled-workos-resource-update-404-${testRunId}`,
          });

          return yield* AuthorizationResourcesByExternalIdControllerUpdateByExternalId(
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
        AuthorizationResourcesByExternalIdControllerUpdateByExternalId({
          organization_id: "org_01HFGZ6QYV0000000000000000",
          resource_type_slug: "workspace",
          external_id: `external_${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(["Forbidden", "NotFound"]).toContain(error._tag);
    },
    { timeout: 30_000 },
  );

  it(
    "fails with Conflict when the update produces a duplicate external id",
    async () => {
      const error = await runEffect(
        Effect.gen(function* () {
          const org = yield* OrganizationsControllerCreate({
            name: `distilled-workos-resource-update-409-${testRunId}`,
          });

          return yield* AuthorizationResourcesByExternalIdControllerUpdateByExternalId(
            {
              organization_id: org.id,
              resource_type_slug: "workspace",
              external_id: `external_409_${testRunId}`,
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

      expect(["Conflict", "NotFound"]).toContain(error._tag);
    },
    { timeout: 60_000 },
  );

  it(
    "fails with UnprocessableEntity when the resource type slug is invalid",
    async () => {
      const error = await runEffect(
        Effect.gen(function* () {
          const org = yield* OrganizationsControllerCreate({
            name: `distilled-workos-resource-update-422-${testRunId}`,
          });

          return yield* AuthorizationResourcesByExternalIdControllerUpdateByExternalId(
            {
              organization_id: org.id,
              resource_type_slug: "Invalid Slug With Spaces!!!",
              external_id: `external_${testRunId}`,
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
