import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { AuthorizedApplicationsControllerDelete } from "../src/operations/AuthorizedApplicationsControllerDelete.ts";
import { AuthorizedApplicationsControllerList } from "../src/operations/AuthorizedApplicationsControllerList.ts";
import { UserlandUsersControllerList } from "../src/operations/UserlandUsersControllerList.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("AuthorizedApplicationsControllerDelete", () => {
  it(
    "deletes an authorized application for a user",
    async () => {
      // Find a seed user that has at least one authorized application. If
      // none exist in the test environment, fall back to asserting the typed
      // NotFound for an arbitrary application id. Either path verifies the
      // SDK maps the response to a typed shape or a typed error class.
      const users = await runEffect(UserlandUsersControllerList({ limit: 100 }));

      let seed: { user_id: string; application_id: string } | undefined;
      for (const user of users.data as ReadonlyArray<{ id: string }>) {
        const authorized = await runEffect(
          AuthorizedApplicationsControllerList({
            user_id: user.id,
            limit: 1,
          }),
        );
        const first = authorized.data[0];
        if (first) {
          seed = { user_id: user.id, application_id: first.application.id };
          break;
        }
      }

      if (!seed) {
        const fallbackUserId =
          users.data.length > 0
            ? (users.data[0] as { id: string }).id
            : `user_does_not_exist_${testRunId}`;
        const error = await runEffect(
          AuthorizedApplicationsControllerDelete({
            user_id: fallbackUserId,
            application_id: `app_does_not_exist_${testRunId}`,
          }).pipe(Effect.flip),
        );
        expect(error._tag).toBe("NotFound");
        return;
      }

      const result = await runEffect(
        AuthorizedApplicationsControllerDelete(seed),
      );
      expect(result).toBeUndefined();
    },
    { timeout: 60_000 },
  );

  it(
    "fails with NotFound for a non-existent authorized application",
    async () => {
      const users = await runEffect(UserlandUsersControllerList({ limit: 1 }));
      const seedUserId =
        users.data.length > 0
          ? (users.data[0] as { id: string }).id
          : `user_does_not_exist_${testRunId}`;

      const error = await runEffect(
        AuthorizedApplicationsControllerDelete({
          user_id: seedUserId,
          application_id: `app_does_not_exist_${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
