import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createNotifier } from "../src/operations/v2/createNotifier";
import { deleteNotifier } from "../src/operations/v2/deleteNotifier";
import { updateNotifier } from "../src/operations/v2/updateNotifier";
import { runEffect, testRunId } from "./setup";

describe("updateNotifier", () => {
  it(
    "updates an existing notifier and returns the refreshed record",
    async () => {
      const initialName = `distilled-axiom-updnotifier-${testRunId}`;
      const renamedName = `distilled-axiom-updnotifier-renamed-${testRunId}`;
      let createdId: string | undefined;

      const effect = Effect.gen(function* () {
        // Prerequisite: a notifier to update.
        const created = yield* createNotifier({
          name: initialName,
          properties: {
            email: {
              emails: [`distilled-test-${testRunId}@example.com`],
            },
          },
        });

        if (created.id === undefined) {
          throw new Error(
            "createNotifier did not return an id; cannot test updateNotifier happy path.",
          );
        }
        createdId = created.id;

        const updated = yield* updateNotifier({
          id: created.id,
          name: renamedName,
          properties: {
            email: {
              emails: [`distilled-updated-${testRunId}@example.com`],
            },
          },
        });

        expect(updated.id).toBe(created.id);
        expect(updated.name).toBe(renamedName);
        expect(updated.properties.email?.emails).toContain(
          `distilled-updated-${testRunId}@example.com`,
        );
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
        updateNotifier({
          id: `notify_doesnotexist${testRunId}`,
          name: `distilled-axiom-nf-${testRunId}`,
          properties: {
            email: {
              emails: [`distilled-test-${testRunId}@example.com`],
            },
          },
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );

  // Removed: "returns UnprocessableEntity when the notifier name is empty".
  // Probed live: axiom accepts an empty notifier `name` and stores the
  // record — see createNotifier.test.ts for the same observation.
});
