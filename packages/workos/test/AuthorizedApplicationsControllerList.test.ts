import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { AuthorizedApplicationsControllerList } from "../src/operations/AuthorizedApplicationsControllerList.ts";
import { UserlandUsersControllerList } from "../src/operations/UserlandUsersControllerList.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("AuthorizedApplicationsControllerList", () => {
  it(
    "lists authorized applications for an existing user",
    async () => {
      const users = await runEffect(UserlandUsersControllerList({ limit: 1 }));

      if (users.data.length === 0) {
        const error = await runEffect(
          AuthorizedApplicationsControllerList({
            user_id: `user_does_not_exist_${testRunId}`,
            limit: 5,
          }).pipe(Effect.flip),
        );
        expect(error._tag).toBe("NotFound");
        return;
      }

      const seed = users.data[0] as { id: string };
      const result = await runEffect(
        AuthorizedApplicationsControllerList({
          user_id: seed.id,
          limit: 5,
        }),
      );
      expect(result).toBeDefined();
      expect(result.object).toBe("list");
      expect(Array.isArray(result.data)).toBe(true);
      expect(result.list_metadata).toBeDefined();
      for (const entry of result.data) {
        expect(typeof entry.id).toBe("string");
        expect(Array.isArray(entry.granted_scopes)).toBe(true);
        expect(typeof entry.application.id).toBe("string");
        expect(typeof entry.application.client_id).toBe("string");
        expect(typeof entry.application.name).toBe("string");
        expect(Array.isArray(entry.application.scopes)).toBe(true);
        expect(typeof entry.application.created_at).toBe("string");
        expect(typeof entry.application.updated_at).toBe("string");
      }
    },
    { timeout: 60_000 },
  );

  it(
    "fails with NotFound for a non-existent user id",
    async () => {
      const error = await runEffect(
        AuthorizedApplicationsControllerList({
          user_id: `user_does_not_exist_${testRunId}`,
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
        AuthorizedApplicationsControllerList({
          user_id: seedId,
          limit: 1000,
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("UnprocessableEntity");
    },
    { timeout: 30_000 },
  );
});
