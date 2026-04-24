import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createNotifier } from "../src/operations/v2/createNotifier";
import { deleteNotifier } from "../src/operations/v2/deleteNotifier";
import { runEffect, testRunId } from "./setup";

describe("createNotifier", () => {
  it(
    "creates an email notifier and returns the stored configuration",
    async () => {
      const notifierName = `distilled-axiom-notifier-${testRunId}`;
      let createdId: string | undefined;

      const effect = Effect.gen(function* () {
        const notifier = yield* createNotifier({
          name: notifierName,
          properties: {
            email: {
              emails: [`distilled-test-${testRunId}@example.com`],
            },
          },
        });

        expect(notifier.name).toBe(notifierName);
        expect(notifier.properties.email?.emails).toContain(
          `distilled-test-${testRunId}@example.com`,
        );
        if (notifier.id !== undefined) {
          expect(typeof notifier.id).toBe("string");
          expect(notifier.id.length).toBeGreaterThan(0);
        }
        createdId = notifier.id;
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
    "returns UnprocessableEntity when the notifier name is empty",
    async () => {
      // `name` is required and must be non-empty; axiom surfaces this as 422
      // → UnprocessableEntity.
      const error = await runEffect(
        createNotifier({
          name: "",
          properties: {
            email: {
              emails: [`distilled-test-${testRunId}@example.com`],
            },
          },
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("UnprocessableEntity");
    },
    { timeout: 30_000 },
  );
});
