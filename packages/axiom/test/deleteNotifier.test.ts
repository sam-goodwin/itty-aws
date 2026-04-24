import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createNotifier } from "../src/operations/v2/createNotifier";
import { deleteNotifier } from "../src/operations/v2/deleteNotifier";
import { getNotifier } from "../src/operations/v2/getNotifier";
import { runEffect, testRunId } from "./setup";

describe("deleteNotifier", () => {
  it(
    "deletes an existing notifier and subsequent fetches return NotFound",
    async () => {
      const notifierName = `distilled-axiom-delnotifier-${testRunId}`;
      let createdId: string | undefined;

      const effect = Effect.gen(function* () {
        const created = yield* createNotifier({
          name: notifierName,
          properties: {
            email: {
              emails: [`distilled-test-${testRunId}@example.com`],
            },
          },
        });

        if (created.id === undefined) {
          throw new Error(
            "createNotifier did not return an id; cannot test deleteNotifier happy path.",
          );
        }
        createdId = created.id;

        // Destructive op under test. Output schema is Void — completing
        // without error is the success signal.
        const result = yield* deleteNotifier({ id: created.id });
        expect(result).toBeUndefined();

        // Verify removal: a subsequent fetch must now surface NotFound.
        const error = yield* getNotifier({ id: created.id }).pipe(Effect.flip);
        expect((error as { _tag: string })._tag).toBe("NotFound");

        // Clear the id so the ensuring cleanup doesn't try to delete twice.
        createdId = undefined;
      }).pipe(
        Effect.ensuring(
          Effect.gen(function* () {
            if (createdId !== undefined) {
              yield* deleteNotifier({ id: createdId }).pipe(Effect.ignore);
            }
          }),
        ),
      );

      await runEffect(effect);
    },
    { timeout: 60_000 },
  );

  it(
    "returns NotFound for a well-formed notifier id that does not exist",
    async () => {
      // Axiom notifier ids are prefixed with `notify_`. A syntactically valid
      // but non-existent id should produce a 404 → NotFound.
      const error = await runEffect(
        deleteNotifier({ id: `notify_doesnotexist${testRunId}` }).pipe(
          Effect.flip,
        ),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
