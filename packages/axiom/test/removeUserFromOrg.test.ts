import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createUser } from "../src/operations/v2/createUser";
import { getUser } from "../src/operations/v2/getUser";
import { listRoles } from "../src/operations/v2/listRoles";
import { removeUserFromOrg } from "../src/operations/v2/removeUserFromOrg";
import { runEffect, testRunId } from "./setup";

describe("removeUserFromOrg", () => {
  it(
    "removes an existing user from the org and subsequent fetches return NotFound",
    async () => {
      const userName = `distilled-axiom-rm-user-${testRunId}`;
      const userEmail = `distilled-axiom-rm-user-${testRunId}@example.com`;
      let createdId: string | undefined;
      let deleted = false;

      const effect = Effect.gen(function* () {
        const roles = yield* listRoles({});
        expect(roles.length).toBeGreaterThan(0);
        const roleId = roles[0]!.id;

        const created = yield* createUser({
          name: userName,
          email: userEmail,
          role: roleId,
        });
        createdId = created.id;

        yield* removeUserFromOrg({ id: created.id });
        deleted = true;

        const afterDelete = yield* getUser({ id: created.id }).pipe(
          Effect.flip,
        );
        expect((afterDelete as { _tag: string })._tag).toBe("NotFound");
      }).pipe(
        Effect.ensuring(
          Effect.gen(function* () {
            if (createdId !== undefined && !deleted) {
              yield* removeUserFromOrg({ id: createdId }).pipe(Effect.ignore);
            }
          }),
        ),
      );

      await runEffect(effect);
    },
    { timeout: 60_000 },
  );

  it(
    "returns NotFound for a user id that does not exist",
    async () => {
      const error = await runEffect(
        removeUserFromOrg({ id: `doesnotexist-${testRunId}` }).pipe(
          Effect.flip,
        ),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
