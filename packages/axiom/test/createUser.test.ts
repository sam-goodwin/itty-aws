import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createUser } from "../src/operations/v2/createUser";
import { listRoles } from "../src/operations/v2/listRoles";
import { removeUserFromOrg } from "../src/operations/v2/removeUserFromOrg";
import { runEffect, testRunId } from "./setup";

describe("createUser", () => {
  it(
    "invites a new user to the org and returns the stored record",
    async () => {
      const userName = `distilled-axiom-user-${testRunId}`;
      const userEmail = `distilled-axiom-user-${testRunId}@example.com`;
      let createdId: string | undefined;

      const effect = Effect.gen(function* () {
        // Axiom's createUser requires a role id that exists in the org.
        const roles = yield* listRoles({});
        expect(roles.length).toBeGreaterThan(0);
        const roleId = roles[0]!.id;

        const user = yield* createUser({
          name: userName,
          email: userEmail,
          role: roleId,
        });

        expect(user.name).toBe(userName);
        expect(user.email).toBe(userEmail);
        expect(typeof user.id).toBe("string");
        expect(user.id.length).toBeGreaterThan(0);
        expect(user.role.id).toBe(roleId);
        createdId = user.id;
      }).pipe(
        Effect.ensuring(
          Effect.gen(function* () {
            if (createdId !== undefined) {
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
    "returns BadRequest when the email is malformed",
    async () => {
      const error = await runEffect(
        createUser({
          name: `distilled-axiom-user-${testRunId}`,
          email: "not-a-valid-email",
          role: `doesnotexist-${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("BadRequest");
    },
    { timeout: 30_000 },
  );

  it(
    "returns UnprocessableEntity when the role id does not exist",
    async () => {
      const error = await runEffect(
        createUser({
          name: `distilled-axiom-user-${testRunId}`,
          email: `distilled-axiom-user-${testRunId}@example.com`,
          role: `doesnotexist-${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("UnprocessableEntity");
    },
    { timeout: 30_000 },
  );
});
