import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { getUser } from "../src/operations/v2/getUser";
import { getUsers } from "../src/operations/v2/getUsers";
import { runEffect, testRunId } from "./setup";

describe("getUser", () => {
  it(
    "fetches a user by id and returns their profile",
    async () => {
      // Resolve an existing user id from the org rather than managing one here;
      // getUsers is guaranteed to return at least the authenticated caller.
      const users = await runEffect(getUsers({}));
      expect(users.length).toBeGreaterThan(0);
      const target = users[0]!;

      const user = await runEffect(getUser({ id: target.id }));

      expect(user.id).toBe(target.id);
      expect(user.email).toBe(target.email);
      expect(user.name).toBe(target.name);
      expect(user.role.id).toBe(target.role.id);
      expect(user.role.name).toBe(target.role.name);
    },
    { timeout: 30_000 },
  );

  it(
    "returns NotFound for a user id that does not exist",
    async () => {
      const error = await runEffect(
        getUser({ id: `doesnotexist-${testRunId}` }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
