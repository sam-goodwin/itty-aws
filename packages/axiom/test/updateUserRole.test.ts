import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createRole } from "../src/operations/v2/createRole";
import { createUser } from "../src/operations/v2/createUser";
import { deleteRole } from "../src/operations/v2/deleteRole";
import { listRoles } from "../src/operations/v2/listRoles";
import { removeUserFromOrg } from "../src/operations/v2/removeUserFromOrg";
import { updateUserRole } from "../src/operations/v2/updateUserRole";
import { runEffect, testRunId } from "./setup";

describe("updateUserRole", () => {
  it(
    "switches a user's role to a different role id",
    async () => {
      const userName = `distilled-axiom-ur-user-${testRunId}`;
      const userEmail = `distilled-axiom-ur-user-${testRunId}@example.com`;
      const roleName = `distilled-axiom-ur-role-${testRunId}`;
      let userId: string | undefined;
      let extraRoleId: string | undefined;

      const effect = Effect.gen(function* () {
        // Seed: pick an existing role for the initial user, create a second
        // role to switch to.
        const roles = yield* listRoles({});
        expect(roles.length).toBeGreaterThan(0);
        const initialRoleId = roles[0]!.id;

        const extraRole = yield* createRole({
          name: roleName,
          description: "updateUserRole happy path target",
          orgCapabilities: { datasets: ["read"] },
        });
        extraRoleId = extraRole.id;

        const user = yield* createUser({
          name: userName,
          email: userEmail,
          role: initialRoleId,
        });
        userId = user.id;
        expect(user.role.id).toBe(initialRoleId);

        const updated = yield* updateUserRole({
          id: user.id,
          role: extraRole.id,
        });

        expect(updated.id).toBe(user.id);
        expect(updated.role.id).toBe(extraRole.id);
      }).pipe(
        Effect.ensuring(
          Effect.gen(function* () {
            if (userId !== undefined) {
              yield* removeUserFromOrg({ id: userId }).pipe(Effect.ignore);
            }
            if (extraRoleId !== undefined) {
              yield* deleteRole({ id: extraRoleId }).pipe(Effect.ignore);
            }
          }),
        ),
      );

      await runEffect(effect);
    },
    { timeout: 90_000 },
  );

  it(
    "returns NotFound for a user id that does not exist",
    async () => {
      const roles = await runEffect(listRoles({}));
      expect(roles.length).toBeGreaterThan(0);

      const error = await runEffect(
        updateUserRole({
          id: `doesnotexist-${testRunId}`,
          role: roles[0]!.id,
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );

  it(
    "returns UnprocessableEntity when the target role id does not exist",
    async () => {
      const userName = `distilled-axiom-ur-422-${testRunId}`;
      const userEmail = `distilled-axiom-ur-422-${testRunId}@example.com`;
      let userId: string | undefined;

      const effect = Effect.gen(function* () {
        const roles = yield* listRoles({});
        expect(roles.length).toBeGreaterThan(0);

        const user = yield* createUser({
          name: userName,
          email: userEmail,
          role: roles[0]!.id,
        });
        userId = user.id;

        const error = yield* updateUserRole({
          id: user.id,
          role: `doesnotexist-${testRunId}`,
        }).pipe(Effect.flip);

        expect((error as { _tag: string })._tag).toBe("UnprocessableEntity");
      }).pipe(
        Effect.ensuring(
          Effect.gen(function* () {
            if (userId !== undefined) {
              yield* removeUserFromOrg({ id: userId }).pipe(Effect.ignore);
            }
          }),
        ),
      );

      await runEffect(effect);
    },
    { timeout: 60_000 },
  );
});
