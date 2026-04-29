import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createKey } from "../src/operations/createKey";
import { deleteKey } from "../src/operations/deleteKey";
import { runEffect, testRunId } from "./setup";

describe("deleteKey", () => {
  it(
    "deletes an existing key and returns its id",
    async () => {
      let createdKeyId: number | undefined;

      const effect = Effect.gen(function* () {
        const created = yield* createKey({
          description: `distilled-typesense-delkey-${testRunId}`,
          actions: ["documents:search"],
          collections: ["*"],
        });

        // The Typesense create response always includes an id.
        if (created.id === undefined) {
          throw new Error("expected created key to have an id");
        }
        createdKeyId = created.id;

        const result = yield* deleteKey({ keyId: created.id });
        expect(result.id).toBe(created.id);
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
        deleteKey({ keyId: 999_999_999 }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with BadRequest when the key id is not a valid integer",
    async () => {
      // Typesense parses the path segment as an integer and returns
      // 400 "Bad request" when it is malformed.
      const error = await runEffect(
        deleteKey({ keyId: "not-a-number" as unknown as number }).pipe(
          Effect.flip,
        ),
      );

      expect((error as { _tag: string })._tag).toBe("BadRequest");
    },
    { timeout: 30_000 },
  );
});
