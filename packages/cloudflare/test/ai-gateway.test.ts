import { describe, expect } from "vitest";
import * as Effect from "effect/Effect";
import { test, getAccountId, testRunId } from "./test.ts";
import * as AiGateway from "~/services/ai-gateway";

const accountId = () => getAccountId();

// ============================================================================
// Helpers
// ============================================================================

/**
 * Deterministic gateway name for tests with a random suffix to avoid collisions in parallel runs.
 * Follows the convention: distilled-cf-ai-gw-{testname}-{testRunId}
 */
const gatewayName = (name: string) => `distilled-cf-ai-gw-${name}-${testRunId}`;

/** Default create params (using 0 instead of null for numeric fields since null values are dropped from the request body) */
const defaultGatewayParams = (name: string) => ({
  accountId: accountId(),
  id: name,
  cacheInvalidateOnUpdate: true,
  cacheTtl: 0,
  collectLogs: true,
  rateLimitingInterval: 0,
  rateLimitingLimit: 0,
  rateLimitingTechnique: "fixed" as const,
});

/**
 * Create an AI Gateway, run `fn`, then delete the gateway.
 * Cleanup-first pattern for idempotency.
 */
const withGateway = <A, E, R>(
  name: string,
  fn: (gwId: string) => Effect.Effect<A, E, R>,
): Effect.Effect<A, E | any, R | any> =>
  Effect.gen(function* () {
    // Attempt cleanup first in case of previous failed run
    yield* AiGateway.deleteAiGateway({
      accountId: accountId(),
      id: name,
    }).pipe(Effect.catch(() => Effect.void));

    // Create gateway
    yield* AiGateway.createAiGateway(defaultGatewayParams(name));

    // Run the test function, ensuring cleanup
    return yield* fn(name).pipe(
      Effect.ensuring(
        AiGateway.deleteAiGateway({
          accountId: accountId(),
          id: name,
        }).pipe(Effect.catch(() => Effect.void)),
      ),
    );
  });

// ============================================================================
// AI Gateway Tests
// ============================================================================

describe("AiGateway", () => {
  // --------------------------------------------------------------------------
  // createAiGateway
  // --------------------------------------------------------------------------
  describe("createAiGateway", () => {
    test("happy path - creates a new AI gateway", () =>
      Effect.gen(function* () {
        const name = gatewayName("create-happy");

        // Cleanup first
        yield* AiGateway.deleteAiGateway({
          accountId: accountId(),
          id: name,
        }).pipe(Effect.catch(() => Effect.void));

        const result = yield* AiGateway.createAiGateway(
          defaultGatewayParams(name),
        );

        expect(result).toBeDefined();
        expect(result.id).toBe(name);
        expect(result.collectLogs).toBe(true);
        expect(result.cacheInvalidateOnUpdate).toBe(true);

        // Cleanup
        yield* AiGateway.deleteAiGateway({
          accountId: accountId(),
          id: name,
        }).pipe(Effect.catch(() => Effect.void));
      }));

    test("error - GatewayAlreadyExists for duplicate gateway", () =>
      withGateway(gatewayName("create-dup"), (name) =>
        AiGateway.createAiGateway(defaultGatewayParams(name)).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("GatewayAlreadyExists")),
        ),
      ));
  });

  // --------------------------------------------------------------------------
  // getAiGateway
  // --------------------------------------------------------------------------
  describe("getAiGateway", () => {
    test("happy path - retrieves an existing gateway", () =>
      withGateway(gatewayName("get-happy"), (name) =>
        Effect.gen(function* () {
          const result = yield* AiGateway.getAiGateway({
            accountId: accountId(),
            id: name,
          });

          expect(result).toBeDefined();
          expect(result.id).toBe(name);
          expect(typeof result.createdAt).toBe("string");
          expect(typeof result.modifiedAt).toBe("string");
        }),
      ));

    test("error - GatewayNotFound for non-existent gateway", () =>
      AiGateway.getAiGateway({
        accountId: accountId(),
        id: "distilled-cf-ai-gw-nonexistent-xyz",
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("GatewayNotFound")),
      ));
  });

  // --------------------------------------------------------------------------
  // updateAiGateway
  // --------------------------------------------------------------------------
  describe("updateAiGateway", () => {
    test("happy path - updates an existing gateway", () =>
      withGateway(gatewayName("update-happy"), (name) =>
        Effect.gen(function* () {
          const result = yield* AiGateway.updateAiGateway({
            accountId: accountId(),
            id: name,
            cacheInvalidateOnUpdate: false,
            cacheTtl: 0,
            collectLogs: false,
            rateLimitingInterval: 0,
            rateLimitingLimit: 0,
            rateLimitingTechnique: "sliding",
          });

          expect(result).toBeDefined();
          expect(result.id).toBe(name);
          expect(result.collectLogs).toBe(false);
          expect(result.cacheInvalidateOnUpdate).toBe(false);
          expect(result.rateLimitingTechnique).toBe("sliding");
        }),
      ));

    test("error - GatewayNotFound for update non-existent gateway", () =>
      AiGateway.updateAiGateway({
        accountId: accountId(),
        id: "distilled-cf-ai-gw-nonexistent-update",
        cacheInvalidateOnUpdate: true,
        cacheTtl: 0,
        collectLogs: true,
        rateLimitingInterval: 0,
        rateLimitingLimit: 0,
        rateLimitingTechnique: "fixed",
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("GatewayNotFound")),
      ));
  });

  // --------------------------------------------------------------------------
  // deleteAiGateway
  // --------------------------------------------------------------------------
  describe("deleteAiGateway", () => {
    test("happy path - deletes an existing gateway", () =>
      Effect.gen(function* () {
        const name = gatewayName("delete-happy");

        yield* AiGateway.deleteAiGateway({
          accountId: accountId(),
          id: name,
        }).pipe(Effect.catch(() => Effect.void));

        yield* AiGateway.createAiGateway(defaultGatewayParams(name));

        const result = yield* AiGateway.deleteAiGateway({
          accountId: accountId(),
          id: name,
        });

        expect(result).toBeDefined();
      }));

    test("error - GatewayNotFound for delete non-existent gateway", () =>
      AiGateway.deleteAiGateway({
        accountId: accountId(),
        id: "distilled-cf-ai-gw-nonexistent-delete",
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("GatewayNotFound")),
      ));
  });

  // --------------------------------------------------------------------------
  // providerConfigs (BYOK provider keys)
  // --------------------------------------------------------------------------
  describe("providerConfigs", () => {
    test("happy path - create, list, rotate, delete a provider config", () =>
      withGateway(gatewayName("provider-cfg"), (name) =>
        Effect.gen(function* () {
          // Create a BYOK provider key with an inline (dummy) secret value.
          // Cloudflare stores it in the account's Secrets Store under the
          // {gateway}_{provider}_{alias} naming convention.
          const created = yield* AiGateway.createProviderConfig({
            accountId: accountId(),
            gatewayId: name,
            providerSlug: "openai",
            alias: "default",
            defaultConfig: true,
            secret: "distilled-test-not-a-real-key-1",
          });

          expect(created.providerSlug).toBe("openai");
          expect(created.alias).toBe("default");
          expect(created.defaultConfig).toBe(true);
          expect(created.gatewayId).toBe(name);
          expect(typeof created.secretId).toBe("string");

          // List includes the created config.
          const listed = yield* AiGateway.listProviderConfigs({
            accountId: accountId(),
            gatewayId: name,
          });
          expect(listed.result.map((c) => c.id)).toContain(created.id);

          // Rotate the secret value in place.
          const rotated = yield* AiGateway.updateProviderConfig({
            accountId: accountId(),
            gatewayId: name,
            id: created.id,
            secret: "distilled-test-not-a-real-key-2",
          });
          expect(rotated.id).toBe(created.id);
          expect(rotated.providerSlug).toBe("openai");

          // Delete the config.
          const deleted = yield* AiGateway.deleteProviderConfig({
            accountId: accountId(),
            gatewayId: name,
            id: created.id,
          });
          expect(deleted.id).toBe(created.id);

          const after = yield* AiGateway.listProviderConfigs({
            accountId: accountId(),
            gatewayId: name,
          });
          expect(after.result.map((c) => c.id)).not.toContain(created.id);
        }),
      ));

    test("error - ProviderConfigNotFound for delete non-existent config", () =>
      withGateway(gatewayName("provider-cfg-404"), (name) =>
        AiGateway.deleteProviderConfig({
          accountId: accountId(),
          gatewayId: name,
          id: "00000000-0000-0000-0000-000000000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("ProviderConfigNotFound")),
        ),
      ));
  });
});
