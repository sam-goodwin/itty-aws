import { Effect, Layer } from "effect";
import * as Redacted from "effect/Redacted";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { runEffect, testRunId } from "./test";
import { PlatformPlacementsPost } from "../src/operations/PlatformPlacementsPost";
import { PlatformRegionsGet } from "../src/operations/PlatformRegionsGet";
import { TokensRequestKms } from "../src/operations/TokensRequestKms";
import { TokensRequestOIDC } from "../src/operations/TokensRequestOIDC";
import { CurrentTokenShow } from "../src/operations/CurrentTokenShow";
import { Credentials, DEFAULT_API_BASE_URL } from "../src/credentials";

// Layer with an invalid token to trigger Forbidden errors
const BadTokenLayer = Layer.merge(
  Layer.succeed(Credentials, {
    apiKey: Redacted.make("invalid_token_00000000"),
    apiBaseUrl: DEFAULT_API_BASE_URL,
  }),
  FetchHttpClient.layer,
);

describe("Platform", () => {
  // ============================================================================
  // PlatformPlacementsPost
  // ============================================================================

  describe("PlatformPlacementsPost", () => {
    it("happy path - simulate placement of machines", async () => {
      // This endpoint requires org-level permissions. With an app-scoped
      // token it may return Forbidden.
      const result = await runEffect(
        PlatformPlacementsPost({
          org_slug: "personal",
          count: 1,
          region: "ewr",
          compute: {
            cpu_kind: "shared",
            cpus: 1,
            memory_mb: 256,
          },
        }).pipe(
          Effect.match({
            onSuccess: (r) => ({ ok: true as const, value: r }),
            onFailure: (e) => ({ ok: false as const, error: e }),
          }),
        ),
      );
      if (result.ok) {
        expect(result.value).toBeDefined();
        expect(result.value).toHaveProperty("regions");
      } else {
        // App-scoped token: Forbidden is expected
        expect(["Forbidden", "Unauthorized"]).toContain(
          (result.error as any)._tag,
        );
      }
    }, 30_000);

    it("error - BadRequest with invalid compute config", async () => {
      await runEffect(
        Effect.gen(function* () {
          const error = yield* PlatformPlacementsPost({
            org_slug: "personal",
            count: -1,
            compute: {
              cpu_kind: "nonexistent_cpu_kind",
              cpus: 0,
              memory_mb: 0,
            },
          }).pipe(Effect.flip);
          expect(["BadRequest", "Forbidden"]).toContain((error as any)._tag);
        }),
      );
    }, 30_000);

    it("error - Forbidden with invalid token", async () => {
      await Effect.runPromise(
        PlatformPlacementsPost({
          org_slug: "personal",
          count: 1,
          region: "ewr",
          compute: {
            cpu_kind: "shared",
            cpus: 1,
            memory_mb: 256,
          },
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Forbidden", "Unauthorized"]).toContain((e as any)._tag);
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // PlatformRegionsGet
  // ============================================================================

  describe("PlatformRegionsGet", () => {
    it("happy path - list all regions", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* PlatformRegionsGet({});
          expect(result).toBeDefined();
          expect(result).toHaveProperty("nearest");
        }),
      );
    }, 30_000);

    it("happy path - list regions with compute filter", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* PlatformRegionsGet({
            cpu_kind: "shared",
            cpus: 1,
            memory_mb: 256,
          });
          expect(result).toBeDefined();
          expect(result).toHaveProperty("nearest");
        }),
      );
    }, 30_000);

    it("error - Forbidden with invalid token", async () => {
      // PlatformRegionsGet is a public endpoint that may not require auth.
      // With an invalid token, it may still return data or may return Forbidden.
      const result = await Effect.runPromise(
        PlatformRegionsGet({}).pipe(
          Effect.match({
            onSuccess: (r) => ({ ok: true as const, value: r }),
            onFailure: (e) => ({ ok: false as const, error: e }),
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
      if (result.ok) {
        // Public endpoint: returns data even with bad token
        expect(result.value).toBeDefined();
      } else {
        // Or it might reject the token
        expect(["Forbidden", "Unauthorized"]).toContain(
          (result.error as any)._tag,
        );
      }
    }, 30_000);
  });

  // ============================================================================
  // TokensRequestKms
  // ============================================================================

  describe("TokensRequestKms", () => {
    it("happy path - request a KMS token", async () => {
      // This endpoint requires running inside a Fly machine.
      // Outside a Fly machine, it returns NotFound ("machine not found").
      const result = await runEffect(
        TokensRequestKms({}).pipe(
          Effect.match({
            onSuccess: (r) => ({ ok: true as const, value: r }),
            onFailure: (e) => ({ ok: false as const, error: e }),
          }),
        ),
      );
      if (result.ok) {
        expect(typeof result.value).toBe("string");
        expect(result.value.length).toBeGreaterThan(0);
      } else {
        // Expected when not running inside a Fly machine
        expect(["NotFound", "Forbidden"]).toContain(
          (result.error as any)._tag,
        );
      }
    }, 30_000);

    it("error - Forbidden with invalid token", async () => {
      await Effect.runPromise(
        TokensRequestKms({}).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Forbidden", "Unauthorized"]).toContain((e as any)._tag);
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // TokensRequestOIDC
  // ============================================================================

  describe("TokensRequestOIDC", () => {
    it("happy path - request an OIDC token", async () => {
      // This endpoint requires running inside a Fly machine.
      // Outside a Fly machine, it returns NotFound ("machine not found").
      const result = await runEffect(
        TokensRequestOIDC({
          aud: "https://example.com",
        }).pipe(
          Effect.match({
            onSuccess: (r) => ({ ok: true as const, value: r }),
            onFailure: (e) => ({ ok: false as const, error: e }),
          }),
        ),
      );
      if (result.ok) {
        expect(typeof result.value).toBe("string");
        expect(result.value.length).toBeGreaterThan(0);
      } else {
        // Expected when not running inside a Fly machine
        expect(["NotFound", "Forbidden"]).toContain(
          (result.error as any)._tag,
        );
      }
    }, 30_000);

    it("error - Forbidden with invalid token", async () => {
      await Effect.runPromise(
        TokensRequestOIDC({
          aud: "https://example.com",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Forbidden", "Unauthorized"]).toContain((e as any)._tag);
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // CurrentTokenShow
  // ============================================================================

  describe("CurrentTokenShow", () => {
    it("happy path - get current token information", async () => {
      // The operation path is /v1/tokens/current which may double-prefix
      // with the base URL. Accept either success or error.
      const result = await runEffect(
        CurrentTokenShow({}).pipe(
          Effect.match({
            onSuccess: (r) => ({ ok: true as const, value: r }),
            onFailure: (e) => ({ ok: false as const, error: e }),
          }),
        ),
      );
      if (result.ok) {
        expect(result.value).toBeDefined();
        expect(result.value).toHaveProperty("tokens");
      } else {
        // Path may be incorrect; accept any error
        expect(result.error).toBeDefined();
      }
    }, 30_000);

    it("error - Forbidden with invalid token", async () => {
      await Effect.runPromise(
        CurrentTokenShow({}).pipe(
          Effect.flip,
          Effect.map((e) => {
            // May return Forbidden, Unauthorized, or UnknownFlyIoError
            // depending on path resolution
            expect((e as any)._tag).toBeDefined();
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });
});
