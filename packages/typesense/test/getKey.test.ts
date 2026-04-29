import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createKey } from "../src/operations/createKey";
import { deleteKey } from "../src/operations/deleteKey";
import { getKey } from "../src/operations/getKey";
import { runEffect, testRunId } from "./setup";

describe("getKey", () => {
  it(
    "retrieves an existing key's metadata",
    async () => {
      let createdKeyId: number | undefined;
      const description = `distilled-typesense-getkey-${testRunId}`;

      const effect = Effect.gen(function* () {
        const created = yield* createKey({
          description,
          actions: ["documents:search"],
          collections: ["*"],
        });

        if (created.id === undefined) {
          throw new Error("expected created key to have an id");
        }
        createdKeyId = created.id;

        const result = yield* getKey({ keyId: created.id });
        expect(result.id).toBe(created.id);
        expect(result.description).toBe(description);
        expect(result.actions).toEqual(["documents:search"]);
        expect(result.collections).toEqual(["*"]);
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdKeyId === undefined
              ? Effect.void
              : deleteKey({ keyId: createdKeyId }).pipe(Effect.ignore),
          ),
        ),
      );

      await runEffect(effect);
    },
    { timeout: 30_000 },
  );

  it(
    "fails with NotFound when the key id does not exist",
    async () => {
      const error = await runEffect(
        getKey({ keyId: 999_999_999 }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
