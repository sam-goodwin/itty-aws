import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { UserlandUserSessionsControllerList } from "../src/operations/UserlandUserSessionsControllerList.ts";
import { UserlandUsersControllerList } from "../src/operations/UserlandUsersControllerList.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("UserlandUserSessionsControllerList", () => {
  it(
    "lists sessions for an existing user",
    async () => {
      const users = await runEffect(UserlandUsersControllerList({ limit: 1 }));

      if (users.data.length === 0) {
        const error = await runEffect(
          UserlandUserSessionsControllerList({
            id: `user_does_not_exist_${testRunId}`,
            limit: 5,
          }).pipe(Effect.flip),
        );
        expect(error._tag).toBe("NotFound");
        return;
      }

      const seed = users.data[0] as { id: string };
      const result = await runEffect(
        UserlandUserSessionsControllerList({ id: seed.id, limit: 5 }),
      );
      expect(result).toBeDefined();
      if (result.data) {
        expect(Array.isArray(result.data)).toBe(true);
        for (const session of result.data) {
          expect(typeof session.id).toBe("string");
          expect(session.user_id).toBe(seed.id);
          expect(typeof session.auth_method).toBe("string");
          expect(["active", "expired", "revoked"]).toContain(session.status);
          expect(typeof session.expires_at).toBe("string");
          expect(typeof session.created_at).toBe("string");
        }
      }
    },
    { timeout: 60_000 },
  );

  it(
    "fails with NotFound for a non-existent user id",
    async () => {
      const error = await runEffect(
        UserlandUserSessionsControllerList({
          id: `user_does_not_exist_${testRunId}`,
          limit: 5,
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with UnprocessableEntity when limit exceeds the allowed maximum",
    async () => {
      const users = await runEffect(UserlandUsersControllerList({ limit: 1 }));
      const seedId =
        users.data.length > 0
          ? (users.data[0] as { id: string }).id
          : `user_does_not_exist_${testRunId}`;

      // The API documents limit as between 1 and 100; 1000 violates that bound.
      const error = await runEffect(
        UserlandUserSessionsControllerList({ id: seedId, limit: 1000 }).pipe(
          Effect.flip,
        ),
      );
      expect(error._tag).toBe("UnprocessableEntity");
    },
    { timeout: 30_000 },
  );
});
