import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createRole } from "../src/operations/v2/createRole";
import { deleteRole } from "../src/operations/v2/deleteRole";
import { getRoleById } from "../src/operations/v2/getRoleById";
import { runEffect, testRunId } from "./setup";

describe("deleteRole", () => {
  it(
    "deletes an existing role and subsequent fetches return NotFound",
    async () => {
      const roleName = `distilled-axiom-delrole-${testRunId}`;
      let createdId: string | undefined;

      const effect = Effect.gen(function* () {
        const created = yield* createRole({
          name: roleName,
          description: "deleteRole test fixture",
          orgCapabilities: {
            datasets: ["read"],
          },
        });
        createdId = created.id;

        // Destructive op under test. Output schema is Void — completing
        // without error is the success signal.
        const result = yield* deleteRole({ id: created.id });
        expect(result).toBeUndefined();

        // Verify removal: a subsequent fetch must now surface NotFound.
        const error = yield* getRoleById({ id: created.id }).pipe(Effect.flip);
        expect((error as { _tag: string })._tag).toBe("NotFound");

        // Clear the id so the ensuring cleanup doesn't try to delete twice.
        createdId = undefined;
      }).pipe(
        Effect.ensuring(
          Effect.gen(function* () {
            if (createdId !== undefined) {
              yield* deleteRole({ id: createdId }).pipe(Effect.ignore);
            }
          }),
        ),
      );

      await runEffect(effect);
    },
    { timeout: 60_000 },
  );

  it(
    "returns NotFound for a role id that does not exist",
    async () => {
      // A syntactically-valid but non-existent role id should produce a
      // 404 → NotFound.
      const error = await runEffect(
        deleteRole({ id: `doesnotexist-${testRunId}` }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
