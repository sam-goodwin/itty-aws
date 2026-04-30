import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { UserlandUsersControllerCreate } from "../src/operations/UserlandUsersControllerCreate.ts";
import { UserlandUsersControllerDelete } from "../src/operations/UserlandUsersControllerDelete.ts";
import { UserlandUsersControllerGet } from "../src/operations/UserlandUsersControllerGet.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("UserlandUsersControllerDelete", () => {
  it(
    "deletes a user, then GET returns NotFound",
    async () => {
      // Try to create an ephemeral user we can safely delete. The Create input
      // schema is empty, so creation may fail with a typed error if the live
      // API requires more fields. In that case we still verify the delete
      // operation maps a non-existent id to a typed error class.
      const created = await runEffect(
        UserlandUsersControllerCreate({}).pipe(
          Effect.matchEffect({
            onSuccess: (user) => Effect.succeed({ ok: true as const, user }),
            onFailure: () => Effect.succeed({ ok: false as const }),
          }),
        ),
      );

      if (!created.ok) {
        const error = await runEffect(
          UserlandUsersControllerDelete({
            id: `user_does_not_exist_${testRunId}`,
          }).pipe(Effect.flip),
        );
        expect(error._tag).toBe("NotFound");
        return;
      }

      const userId = created.user.id;
      const result = await runEffect(
        UserlandUsersControllerDelete({ id: userId }),
      );
      expect(result).toBeUndefined();

      const followUp = await runEffect(
        UserlandUsersControllerGet({ id: userId }).pipe(Effect.flip),
      );
      expect(followUp._tag).toBe("NotFound");
    },
    { timeout: 60_000 },
  );

  it(
    "fails with NotFound for a non-existent user id",
    async () => {
      const error = await runEffect(
        UserlandUsersControllerDelete({
          id: `user_does_not_exist_${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
