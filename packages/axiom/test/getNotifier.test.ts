import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createNotifier } from "../src/operations/v2/createNotifier";
import { deleteNotifier } from "../src/operations/v2/deleteNotifier";
import { getNotifier } from "../src/operations/v2/getNotifier";
import { runEffect, testRunId } from "./setup";

describe("getNotifier", () => {
  it(
    "returns a notifier by id",
    async () => {
      const notifierName = `distilled-axiom-getnotifier-${testRunId}`;
      let createdId: string | undefined;

      const effect = Effect.gen(function* () {
        // Prerequisite: a notifier must exist to fetch.
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
            "createNotifier did not return an id; cannot test getNotifier happy path.",
          );
        }
        createdId = created.id;

        const fetched = yield* getNotifier({ id: created.id });

        expect(fetched.id).toBe(created.id);
        expect(fetched.name).toBe(notifierName);
        expect(fetched.properties.email?.emails).toContain(
          `distilled-test-${testRunId}@example.com`,
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
        getNotifier({ id: `notify_doesnotexist${testRunId}` }).pipe(
          Effect.flip,
        ),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
