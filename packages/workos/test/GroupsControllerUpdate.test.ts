import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { GroupsControllerCreate } from "../src/operations/GroupsControllerCreate.ts";
import { GroupsControllerDelete } from "../src/operations/GroupsControllerDelete.ts";
import { GroupsControllerUpdate } from "../src/operations/GroupsControllerUpdate.ts";
import { OrganizationsControllerCreate } from "../src/operations/OrganizationsControllerCreate.ts";
import { OrganizationsControllerDeleteOrganization } from "../src/operations/OrganizationsControllerDeleteOrganization.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("GroupsControllerUpdate", () => {
  it(
    "updates a group's name",
    async () => {
      const initialName = `distilled-group-update-${testRunId}`;
      const updatedName = `distilled-group-updated-${testRunId}`;
      const result = await runEffect(
        Effect.gen(function* () {
          const org = yield* OrganizationsControllerCreate({
            name: `distilled-workos-groups-update-${testRunId}`,
          });
          return yield* Effect.gen(function* () {
            const created = yield* GroupsControllerCreate({
              organizationId: org.id,
              name: initialName,
            });
            return yield* GroupsControllerUpdate({
              organizationId: org.id,
              groupId: created.id,
              name: updatedName,
              description: "updated description",
            }).pipe(
              Effect.ensuring(
                GroupsControllerDelete({
                  organizationId: org.id,
                  groupId: created.id,
                }).pipe(Effect.ignore),
              ),
            );
          }).pipe(
            Effect.ensuring(
              OrganizationsControllerDeleteOrganization({
                id: org.id,
              }).pipe(Effect.ignore),
            ),
          );
        }),
      );
      expect(result).toBeDefined();
      expect(result.name).toBe(updatedName);
      expect(result.description).toBe("updated description");
      expect(typeof result.id).toBe("string");
      expect(typeof result.organization_id).toBe("string");
    },
    { timeout: 60_000 },
  );

  it(
    "fails with NotFound for a non-existent group id",
    async () => {
      const error = await runEffect(
        Effect.gen(function* () {
          const org = yield* OrganizationsControllerCreate({
            name: `distilled-workos-groups-update-404-${testRunId}`,
          });
          return yield* GroupsControllerUpdate({
            organizationId: org.id,
            groupId: `group_does_not_exist_${testRunId}`,
            name: `distilled-group-404-${testRunId}`,
          }).pipe(
            Effect.ensuring(
              OrganizationsControllerDeleteOrganization({
                id: org.id,
              }).pipe(Effect.ignore),
            ),
          );
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("NotFound");
    },
    { timeout: 60_000 },
  );

  it(
    "fails with Forbidden when updating a group in a different tenant",
    async () => {
      const error = await runEffect(
        GroupsControllerUpdate({
          organizationId: "org_01HFGZ6QYV0000000000000000",
          groupId: `group_does_not_exist_${testRunId}`,
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
            name: `distilled-workos-groups-update-400-${testRunId}`,
          });
          return yield* Effect.gen(function* () {
            const created = yield* GroupsControllerCreate({
              organizationId: org.id,
              name: `distilled-group-update-400-${testRunId}`,
            });
            return yield* GroupsControllerUpdate({
              organizationId: org.id,
              groupId: created.id,
              name: "",
            }).pipe(
              Effect.ensuring(
                GroupsControllerDelete({
                  organizationId: org.id,
                  groupId: created.id,
                }).pipe(Effect.ignore),
              ),
            );
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
    "fails with UnprocessableEntity when updating to an already-used name",
    async () => {
      const error = await runEffect(
        Effect.gen(function* () {
          const org = yield* OrganizationsControllerCreate({
            name: `distilled-workos-groups-update-422-${testRunId}`,
          });
          return yield* Effect.gen(function* () {
            const sharedName = `distilled-shared-${testRunId}`;
            const first = yield* GroupsControllerCreate({
              organizationId: org.id,
              name: sharedName,
            });
            const second = yield* GroupsControllerCreate({
              organizationId: org.id,
              name: `distilled-other-${testRunId}`,
            });
            return yield* GroupsControllerUpdate({
              organizationId: org.id,
              groupId: second.id,
              name: sharedName,
            }).pipe(
              Effect.ensuring(
                GroupsControllerDelete({
                  organizationId: org.id,
                  groupId: second.id,
                }).pipe(Effect.ignore),
              ),
              Effect.ensuring(
                GroupsControllerDelete({
                  organizationId: org.id,
                  groupId: first.id,
                }).pipe(Effect.ignore),
              ),
            );
          }).pipe(
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
