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
    "accepts an empty notifier name",
    async () => {
      // Probed live: axiom accepts an empty `name` and stores the notifier
      // with `name: ""`. The spec lists `name` as required (which matches
      // the request shape) but the backend does not enforce non-empty on
      // the value. Assert the permissive behaviour and clean up.
      let createdId: string | undefined;

      const effect = Effect.gen(function* () {
        const notifier = yield* createNotifier({
          name: "",
          properties: {
            email: {
              emails: [`distilled-test-${testRunId}@example.com`],
            },
          },
        });

        expect(notifier.name).toBe("");
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
    { timeout: 30_000 },
  );
});
