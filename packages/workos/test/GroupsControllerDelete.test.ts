import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { GroupsControllerCreate } from "../src/operations/GroupsControllerCreate.ts";
import { GroupsControllerDelete } from "../src/operations/GroupsControllerDelete.ts";
import { GroupsControllerGet } from "../src/operations/GroupsControllerGet.ts";
import { OrganizationsControllerCreate } from "../src/operations/OrganizationsControllerCreate.ts";
import { OrganizationsControllerDeleteOrganization } from "../src/operations/OrganizationsControllerDeleteOrganization.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("GroupsControllerDelete", () => {
  it(
    "deletes a group from an organization",
    async () => {
      const findError = await runEffect(
        Effect.gen(function* () {
          const org = yield* OrganizationsControllerCreate({
            name: `distilled-workos-groups-delete-${testRunId}`,
          });
          return yield* Effect.gen(function* () {
            const created = yield* GroupsControllerCreate({
              organizationId: org.id,
              name: `distilled-group-delete-${testRunId}`,
            });
            yield* GroupsControllerDelete({
              organizationId: org.id,
              groupId: created.id,
            });
            return yield* GroupsControllerGet({
              organizationId: org.id,
              groupId: created.id,
            });
          }).pipe(
            Effect.ensuring(
              OrganizationsControllerDeleteOrganization({
                id: org.id,
              }).pipe(Effect.ignore),
            ),
          );
        }).pipe(Effect.flip),
      );
      expect(["NotFound", "TooManyRequests"]).toContain(findError._tag);
    },
    { timeout: 60_000 },
  );

  it(
    "fails with NotFound for a non-existent group id",
    async () => {
      const error = await runEffect(
        Effect.gen(function* () {
          const org = yield* OrganizationsControllerCreate({
            name: `distilled-workos-groups-delete-404-${testRunId}`,
          });
          return yield* GroupsControllerDelete({
            organizationId: org.id,
            groupId: `group_does_not_exist_${testRunId}`,
          }).pipe(
            Effect.ensuring(
              OrganizationsControllerDeleteOrganization({
                id: org.id,
              }).pipe(Effect.ignore),
            ),
          );
        }).pipe(Effect.flip),
      );
      expect(["NotFound", "TooManyRequests"]).toContain(error._tag);
    },
    { timeout: 60_000 },
  );

  it(
    "fails with Forbidden when deleting a group in a different tenant",
    async () => {
      const error = await runEffect(
        GroupsControllerDelete({
          organizationId: "org_01HFGZ6QYV0000000000000000",
          groupId: `group_does_not_exist_${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(["Forbidden", "TooManyRequests"]).toContain(error._tag);
    },
    { timeout: 30_000 },
  );
});
