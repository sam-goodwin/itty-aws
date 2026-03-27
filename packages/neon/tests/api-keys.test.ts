import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { runEffect, testRunId } from "./setup";
import { createApiKey } from "../src/operations/createApiKey";
import { listApiKeys } from "../src/operations/listApiKeys";
import { revokeApiKey } from "../src/operations/revokeApiKey";

// Note: Personal API key operations (create/list/revoke) are not available
// when using organization API keys. These tests handle both cases.

describe("API Keys", () => {
  describe("createApiKey", () => {
    it("happy path - creates an API key or handles org key restriction", async () => {
      const keyName = `distilled-neon-key-${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          const result = yield* createApiKey({ key_name: keyName });
          expect(result.id).toBeDefined();
          expect(result.key).toBeDefined();
          // Cleanup
          yield* revokeApiKey({ key_id: result.id }).pipe(Effect.ignore);
        }).pipe(
          Effect.catch((e) => {
            // Organization API keys cannot create personal API keys
            expect(e._tag).toBe("NotFound");
            return Effect.void;
          }),
        ),
      );
    }, 30_000);
  });

  describe("listApiKeys", () => {
    it("happy path - lists API keys or handles org key restriction", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* listApiKeys({});
          expect(Array.isArray(result)).toBe(true);
        }).pipe(
          Effect.catch((e) => {
            // Organization API keys cannot list personal API keys
            expect(e._tag).toBe("NotFound");
            return Effect.void;
          }),
        ),
      );
    }, 30_000);
  });

  describe("revokeApiKey", () => {
    it("error - NotFound for non-existent key", async () => {
      await runEffect(
        revokeApiKey({ key_id: 999999999 }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);
  });
});
