import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createGroup } from "../src/operations/v2/createGroup";
import { deleteGroup } from "../src/operations/v2/deleteGroup";
import { getGroupById } from "../src/operations/v2/getGroupById";
import { runEffect, testRunId } from "./setup";

describe("deleteGroup", () => {
  it(
    "deletes an existing group and subsequent fetches return NotFound",
    async () => {
      const groupName = `distilled-axiom-delgroup-${testRunId}`;
      let createdId: string | undefined;

      const effect = Effect.gen(function* () {
        const created = yield* createGroup({
          name: groupName,
          description: "deleteGroup test fixture",
        });
        createdId = created.id;

        // Destructive op under test. Output schema is Void — completing
        // without error is the success signal.
        const result = yield* deleteGroup({ id: created.id });
        expect(result).toBeUndefined();

        // Verify removal: a subsequent fetch must now surface NotFound.
        const error = yield* getGroupById({ id: created.id }).pipe(Effect.flip);
        expect((error as { _tag: string })._tag).toBe("NotFound");

        // Clear the id so the ensuring cleanup doesn't try to delete twice.
        createdId = undefined;
      }).pipe(
        Effect.ensuring(
          Effect.gen(function* () {
            if (createdId !== undefined) {
              yield* deleteGroup({ id: createdId }).pipe(Effect.ignore);
            }
          }),
        ),
      );

      await runEffect(effect);
    },
    { timeout: 60_000 },
  );

  it(
    "returns NotFound for a group id that does not exist",
    async () => {
      // A syntactically-valid but non-existent group id should produce a
      // 404 → NotFound.
      const error = await runEffect(
        deleteGroup({ id: `doesnotexist-${testRunId}` }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
