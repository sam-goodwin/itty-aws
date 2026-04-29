import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createKey } from "../src/operations/createKey";
import { deleteKey } from "../src/operations/deleteKey";
import { runEffect, testRunId } from "./setup";

describe("createKey", () => {
  it(
    "creates an API key and returns its id, value_prefix and the secret value",
    async () => {
      let createdId: number | undefined;
      const effect = Effect.gen(function* () {
        const key = yield* createKey({
          description: `distilled-typesense-key-${testRunId}`,
          actions: ["documents:search"],
          collections: ["*"],
        });

        if (typeof key.id === "number") {
          createdId = key.id;
        }

        expect(key.description).toBe(
          `distilled-typesense-key-${testRunId}`,
        );
        expect(key.actions).toEqual(["documents:search"]);
        expect(key.collections).toEqual(["*"]);
        // The generated key value is returned only on creation.
        expect(typeof key.value).toBe("string");
        expect((key.value as string).length).toBeGreaterThan(0);
        expect(typeof key.id).toBe("number");
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdId === undefined
              ? Effect.void
              : deleteKey({ keyId: createdId }).pipe(Effect.ignore),
          ),
        ),
      );

      await runEffect(effect);
    },
    { timeout: 30_000 },
  );

  it(
    "fails with BadRequest when an action name is not a recognized action",
    async () => {
      // Typesense rejects unrecognised action strings (the action grammar
      // is `<resource>:<verb>`; `bogus:nope` is not a valid action) with
      // HTTP 400.
      const error = await runEffect(
        createKey({
          description: `distilled-typesense-key-bad-${testRunId}`,
          actions: ["bogus:nope"],
          collections: ["*"],
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("BadRequest");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with Conflict when creating a key with a value that already exists",
    async () => {
      // Reuse the same custom `value` for two key-creation requests. The
      // second creation collides with the first and Typesense returns 409.
      const value = `distilled-typesense-keyval-${testRunId}-${Date.now()}`;
      let firstId: number | undefined;

      const effect = Effect.gen(function* () {
        const first = yield* createKey({
          value,
          description: `distilled-typesense-key-conflict-1-${testRunId}`,
          actions: ["documents:search"],
          collections: ["*"],
        });
        if (typeof first.id === "number") {
          firstId = first.id;
        }

        return yield* createKey({
          value,
          description: `distilled-typesense-key-conflict-2-${testRunId}`,
          actions: ["documents:search"],
          collections: ["*"],
        }).pipe(Effect.flip);
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            firstId === undefined
              ? Effect.void
              : deleteKey({ keyId: firstId }).pipe(Effect.ignore),
          ),
        ),
      );

      const error = await runEffect(effect);
      expect((error as { _tag: string })._tag).toBe("Conflict");
    },
    { timeout: 30_000 },
  );
});
