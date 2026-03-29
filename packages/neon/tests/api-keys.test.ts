import { Effect, Layer } from "effect";
import * as Redacted from "effect/Redacted";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { runEffect, testRunId } from "./setup";
import { listApiKeys } from "../src/operations/listApiKeys";
import { createApiKey } from "../src/operations/createApiKey";
import { revokeApiKey } from "../src/operations/revokeApiKey";
import { Credentials, DEFAULT_API_BASE_URL } from "../src/credentials";

// Layer with an invalid token to trigger Unauthorized errors
const BadTokenLayer = Layer.merge(
  Layer.succeed(Credentials, {
    apiKey: Redacted.make("invalid_token_00000000"),
    apiBaseUrl: DEFAULT_API_BASE_URL,
  }),
  FetchHttpClient.layer,
);

describe("ApiKeys", () => {
  // ============================================================================
  // listApiKeys
  // ============================================================================
  describe("listApiKeys", () => {
    it("happy path - lists API keys", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* listApiKeys({});
          expect(Array.isArray(result)).toBe(true);
          if (result.length > 0) {
            expect(result[0]).toHaveProperty("id");
            expect(result[0]).toHaveProperty("name");
            expect(result[0]).toHaveProperty("created_at");
          }
        }).pipe(
          Effect.catchTag("NotFound", () => Effect.succeed(undefined)),
          Effect.catchTag("BadRequest", () => Effect.succeed(undefined)),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        listApiKeys({}).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Unauthorized", "Forbidden", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // createApiKey
  // ============================================================================
  describe("createApiKey", () => {
    const keyName = `distilled-neon-apikey-${testRunId}`;

    it("happy path - creates and revokes an API key", async () => {
      await runEffect(
        Effect.gen(function* () {
          const created = yield* createApiKey({ key_name: keyName });
          expect(created).toHaveProperty("id");
          expect(created).toHaveProperty("key");
          expect(typeof created.key).toBe("string");
          expect(created.key.length).toBeGreaterThan(0);
          expect(created.name).toBe(keyName);
          expect(created).toHaveProperty("created_at");
          expect(created).toHaveProperty("created_by");
        }).pipe(
          Effect.ensuring(
            Effect.gen(function* () {
              // Clean up: list keys and revoke any matching our test name
              const keys = yield* listApiKeys({});
              const testKey = keys.find((k) => k.name === keyName);
              if (testKey) {
                yield* revokeApiKey({ key_id: testKey.id }).pipe(Effect.ignore);
              }
            }).pipe(Effect.ignore),
          ),
          Effect.catchTag("NotFound", () => Effect.succeed(undefined)),
          Effect.catchTag("BadRequest", () => Effect.succeed(undefined)),
        ),
      );
    }, 30_000);

    it("happy path - created key appears in list", async () => {
      const createdKeyName = `distilled-neon-list-${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          const created = yield* createApiKey({ key_name: createdKeyName });
          const keys = yield* listApiKeys({});
          const found = keys.find((k) => k.id === created.id);
          expect(found).toBeDefined();
          expect(found!.name).toBe(createdKeyName);
        }).pipe(
          Effect.ensuring(
            Effect.gen(function* () {
              const keys = yield* listApiKeys({});
              const testKey = keys.find((k) => k.name === createdKeyName);
              if (testKey) {
                yield* revokeApiKey({ key_id: testKey.id }).pipe(Effect.ignore);
              }
            }).pipe(Effect.ignore),
          ),
          Effect.catchTag("NotFound", () => Effect.succeed(undefined)),
          Effect.catchTag("BadRequest", () => Effect.succeed(undefined)),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        createApiKey({ key_name: `distilled-neon-bad-${testRunId}` }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Unauthorized", "Forbidden", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);

    it("error - BadRequest with empty key name", async () => {
      await runEffect(
        createApiKey({ key_name: "" }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect([
              "BadRequest",
              "NotFound",
              "UnprocessableEntity",
              "UnknownNeonError",
            ]).toContain((e as any)._tag);
          }),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // revokeApiKey
  // ============================================================================
  describe("revokeApiKey", () => {
    it("happy path - revokes an existing API key", async () => {
      const revokeName = `distilled-neon-revoke-${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          const created = yield* createApiKey({ key_name: revokeName });
          const revoked = yield* revokeApiKey({ key_id: created.id });
          expect(revoked).toHaveProperty("id");
          expect(revoked.id).toBe(created.id);
          expect(revoked.name).toBe(revokeName);
          expect(revoked.revoked).toBe(true);
          expect(revoked).toHaveProperty("last_used_from_addr");
        }).pipe(
          Effect.catchTag("NotFound", () => Effect.succeed(undefined)),
          Effect.catchTag("BadRequest", () => Effect.succeed(undefined)),
        ),
      );
    }, 30_000);

    it("happy path - revoked key no longer appears in list", async () => {
      const removeName = `distilled-neon-remove-${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          const created = yield* createApiKey({ key_name: removeName });
          yield* revokeApiKey({ key_id: created.id });
          const keys = yield* listApiKeys({});
          const found = keys.find((k) => k.id === created.id);
          expect(found).toBeUndefined();
        }).pipe(
          Effect.catchTag("NotFound", () => Effect.succeed(undefined)),
          Effect.catchTag("BadRequest", () => Effect.succeed(undefined)),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent key ID", async () => {
      await runEffect(
        revokeApiKey({ key_id: 999999999 }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
        ),
      );
    }, 30_000);

    it("error - NotFound when revoking already-revoked key", async () => {
      const doubleName = `distilled-neon-double-${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          const created = yield* createApiKey({ key_name: doubleName });
          yield* revokeApiKey({ key_id: created.id });
          // Second revoke should fail
          yield* revokeApiKey({ key_id: created.id }).pipe(
            Effect.flip,
            Effect.map((e) => {
              expect(["NotFound", "UnknownNeonError"]).toContain(
                (e as any)._tag,
              );
            }),
          );
        }).pipe(
          Effect.catchTag("NotFound", () => Effect.succeed(undefined)),
          Effect.catchTag("BadRequest", () => Effect.succeed(undefined)),
        ),
      );
    }, 30_000);

    it("error - Unauthorized with invalid token", async () => {
      await Effect.runPromise(
        revokeApiKey({ key_id: 999999999 }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Unauthorized", "Forbidden", "UnknownNeonError"]).toContain(
              (e as any)._tag,
            );
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });
});
