import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { GroupsControllerCreate } from "../src/operations/GroupsControllerCreate.ts";
import { GroupsControllerDelete } from "../src/operations/GroupsControllerDelete.ts";
import { OrganizationsControllerCreate } from "../src/operations/OrganizationsControllerCreate.ts";
import { OrganizationsControllerDeleteOrganization } from "../src/operations/OrganizationsControllerDeleteOrganization.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("GroupsControllerCreate", () => {
  it(
    "creates a group in an organization",
    async () => {
      const groupName = `distilled-group-${testRunId}`;
      const result = await runEffect(
        Effect.gen(function* () {
          const org = yield* OrganizationsControllerCreate({
            name: `distilled-workos-groups-create-${testRunId}`,
          });
          return yield* Effect.gen(function* () {
            const created = yield* GroupsControllerCreate({
              organizationId: org.id,
              name: groupName,
              description: "test group",
            });
            yield* GroupsControllerDelete({
              organizationId: org.id,
              groupId: created.id,
            }).pipe(Effect.ignore);
            return { created, orgId: org.id };
          }).pipe(
            Effect.ensuring(
              OrganizationsControllerDeleteOrganization({
                id: org.id,
              }).pipe(Effect.ignore),
            ),
          );
        }),
      );
      expect(result.created).toBeDefined();
      expect(typeof result.created.id).toBe("string");
      expect(result.created.organization_id).toBe(result.orgId);
      expect(result.created.name).toBe(groupName);
      expect(result.created.description).toBe("test group");
      expect(typeof result.created.created_at).toBe("string");
      expect(typeof result.created.updated_at).toBe("string");
    },
    { timeout: 60_000 },
  );

  it(
    "fails with NotFound for a non-existent organization id",
    async () => {
      const error = await runEffect(
        GroupsControllerCreate({
          organizationId: `organization_does_not_exist_${testRunId}`,
          name: `distilled-group-404-${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with Forbidden when creating a group in a different tenant",
    async () => {
      const error = await runEffect(
        GroupsControllerCreate({
          organizationId: "org_01HFGZ6QYV0000000000000000",
          name: `distilled-group-403-${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(["Forbidden", "NotFound"]).toContain(error._tag);
    },
    { timeout: 30_000 },
  );

  it(
    "fails with BadRequest for an empty group name",
    async () => {
      const error = await runEffect(
        Effect.gen(function* () {
          const org = yield* OrganizationsControllerCreate({
            name: `distilled-workos-groups-400-${testRunId}`,
          });
          return yield* GroupsControllerCreate({
            organizationId: org.id,
            name: "",
          }).pipe(
            Effect.ensuring(
              OrganizationsControllerDeleteOrganization({
                id: org.id,
              }).pipe(Effect.ignore),
            ),
          );
        }).pipe(Effect.flip),
      );
      expect(["BadRequest", "UnprocessableEntity"]).toContain(error._tag);
    },
    { timeout: 60_000 },
  );

  it(
    "fails with UnprocessableEntity when creating a duplicate group name",
    async () => {
      const error = await runEffect(
        Effect.gen(function* () {
          const org = yield* OrganizationsControllerCreate({
            name: `distilled-workos-groups-422-${testRunId}`,
          });
          const groupName = `distilled-dup-group-${testRunId}`;
          const first = yield* GroupsControllerCreate({
            organizationId: org.id,
            name: groupName,
          });
          return yield* GroupsControllerCreate({
            organizationId: org.id,
            name: groupName,
          }).pipe(
            Effect.ensuring(
              GroupsControllerDelete({
                organizationId: org.id,
                groupId: first.id,
              }).pipe(Effect.ignore),
            ),
            Effect.ensuring(
              OrganizationsControllerDeleteOrganization({
                id: org.id,
              }).pipe(Effect.ignore),
            ),
          );
        }).pipe(Effect.flip),
      );
      expect(["Conflict", "UnprocessableEntity"]).toContain(error._tag);
    },
    { timeout: 60_000 },
  );
});
