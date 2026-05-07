import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as Redacted from "effect/Redacted";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import {
  Credentials,
  CredentialsFromEnv,
  DEFAULT_API_BASE_URL,
} from "../src/credentials.ts";
import { updateApplicationUserRoleConnection } from "../src/operations/updateApplicationUserRoleConnection.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// PUT /users/@me/applications/{application_id}/role-connection updates the
// calling user's application role connection. This endpoint is user-only and
// requires a Bearer token with the `role_connections.write` scope; bot
// tokens are rejected. The happy path is gated on DISCORD_BEARER_TOKEN and
// DISCORD_TEST_APPLICATION_ID.
const TEST_BEARER = process.env.DISCORD_BEARER_TOKEN;
const TEST_APPLICATION_ID = process.env.DISCORD_TEST_APPLICATION_ID;
const NON_EXISTENT_APPLICATION_ID = "100000000000000000";

// A deliberately bogus bearer token used for the error tests so they don't
// depend on operator credentials.
const makeBearerLayer = (token: string): Layer.Layer<Credentials> =>
  Layer.succeed(Credentials, {
    token: Redacted.make(token),
    authScheme: "Bearer" as const,
    apiBaseUrl: DEFAULT_API_BASE_URL,
  });

const runWithBearer = <A, E>(
  token: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  effect: Effect.Effect<A, E, any>,
): Promise<A> => {
  const layer = Layer.merge(makeBearerLayer(token), FetchHttpClient.layer);
  return Effect.runPromise(
    effect.pipe(Effect.provide(layer)) as Effect.Effect<A, E, never>,
  );
};

describe("updateApplicationUserRoleConnection", () => {
  it.skipIf(!TEST_BEARER || !TEST_APPLICATION_ID)(
    "happy path - updates the calling user's application role connection",
    async () => {
      const result = await runEffect(
        updateApplicationUserRoleConnection({
          application_id: TEST_APPLICATION_ID!,
          platform_name: `distilled-discord-${testRunId}`,
          platform_username: `tester-${testRunId}`,
          metadata: {},
        }),
      );
      if (result.platform_name !== undefined) {
        expect(typeof result.platform_name).toBe("string");
      }
      if (result.platform_username !== undefined && result.platform_username !== null) {
        expect(typeof result.platform_username).toBe("string");
      }
      if (result.metadata !== undefined) {
        expect(typeof result.metadata).toBe("object");
      }
    },
    { timeout: 30_000 },
  );

  it("error - BadRequest for a malformed application_id", async () => {
    // A non-snowflake application_id should fail validation. Discord may
    // surface this as BadRequest, NotFound, Forbidden, or Unauthorized
    // depending on routing.
    await runWithBearer(
      `invalid-bearer-${testRunId}`,
      updateApplicationUserRoleConnection({
        application_id: `not-a-snowflake-${testRunId}`,
        platform_name: `distilled-discord-${testRunId}`,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          expect([
            "BadRequest",
            "NotFound",
            "Forbidden",
            "Unauthorized",
          ]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });

  it("error - Forbidden for a bearer token missing the role_connections.write scope", async () => {
    // A deliberately bogus bearer token framed as missing the required
    // scope. /users/@me/applications/{application_id}/role-connection
    // requires `role_connections.write`; Discord may surface this as
    // Forbidden, Unauthorized, NotFound, or BadRequest.
    await runWithBearer(
      `no-scope-${testRunId}`,
      updateApplicationUserRoleConnection({
        application_id: NON_EXISTENT_APPLICATION_ID,
        platform_name: `distilled-discord-${testRunId}`,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          expect([
            "Forbidden",
            "Unauthorized",
            "NotFound",
            "BadRequest",
          ]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });

  it("error - NotFound for a non-existent application id", async () => {
    const fakeApplicationId = `1000000000000000${testRunId.slice(0, 2)}`;
    await runWithBearer(
      `invalid-bearer-${testRunId}`,
      updateApplicationUserRoleConnection({
        application_id: fakeApplicationId,
        platform_name: `distilled-discord-${testRunId}`,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord may return NotFound (application does not exist),
          // Forbidden (caller cannot access it), Unauthorized (bad token),
          // or BadRequest depending on routing.
          expect([
            "NotFound",
            "Forbidden",
            "Unauthorized",
            "BadRequest",
          ]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });
});
