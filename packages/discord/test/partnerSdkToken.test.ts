import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { CredentialsFromEnv } from "../src/credentials.ts";
import { partnerSdkToken } from "../src/operations/partnerSdkToken.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// POST /partner-sdk/token exchanges an external auth token for a Discord
// access token via the Discord Partner SDK OAuth2 flow. Requires Discord to
// have approved the application as a Partner SDK integration. The happy path
// is gated on operator-supplied credentials since most apps cannot exercise
// this endpoint.
const PARTNER_CLIENT_ID = process.env.DISCORD_PARTNER_CLIENT_ID;
const PARTNER_CLIENT_SECRET = process.env.DISCORD_PARTNER_CLIENT_SECRET;
const PARTNER_EXTERNAL_AUTH_TOKEN =
  process.env.DISCORD_PARTNER_EXTERNAL_AUTH_TOKEN;
const PARTNER_EXTERNAL_AUTH_TYPE =
  process.env.DISCORD_PARTNER_EXTERNAL_AUTH_TYPE;

describe("partnerSdkToken", () => {
  it.skipIf(
    !PARTNER_CLIENT_ID ||
      !PARTNER_EXTERNAL_AUTH_TOKEN ||
      !PARTNER_EXTERNAL_AUTH_TYPE,
  )(
    "happy path - exchanges an external auth token for a Discord access token",
    async () => {
      const result = await runEffect(
        partnerSdkToken({
          client_id: PARTNER_CLIENT_ID!,
          client_secret: PARTNER_CLIENT_SECRET,
          external_auth_token: PARTNER_EXTERNAL_AUTH_TOKEN!,
          external_auth_type: PARTNER_EXTERNAL_AUTH_TYPE!,
        }),
      );
      expect(typeof result.token_type).toBe("string");
      expect(result.access_token).toBeDefined();
      expect(typeof result.expires_in).toBe("number");
      expect(typeof result.scope).toBe("string");
      expect(typeof result.id_token).toBe("string");
    },
    { timeout: 30_000 },
  );

  it("error - BadRequest for an invalid external auth token", async () => {
    // A bogus external auth token should fail validation. Discord typically
    // surfaces this as BadRequest, but may route as Forbidden or NotFound
    // depending on how the partner integration is resolved.
    await runEffect(
      partnerSdkToken({
        client_id: PARTNER_CLIENT_ID ?? "100000000000000001",
        external_auth_token: `bogus-external-token-${testRunId}`,
        external_auth_type: PARTNER_EXTERNAL_AUTH_TYPE ?? "epic_online_services_access_token",
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["BadRequest", "Forbidden", "NotFound"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });

  it("error - Forbidden for a client_id not approved as a Partner SDK integration", async () => {
    // A snowflake that almost certainly does not correspond to an approved
    // Partner SDK integration. Discord may surface this as Forbidden,
    // BadRequest, or NotFound (to avoid leaking existence) depending on
    // routing.
    await runEffect(
      partnerSdkToken({
        client_id: `1000000000000000${testRunId.slice(0, 2)}`,
        external_auth_token: `unauthorized-token-${testRunId}`,
        external_auth_type:
          PARTNER_EXTERNAL_AUTH_TYPE ?? "epic_online_services_access_token",
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["Forbidden", "BadRequest", "NotFound"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });

  it("error - NotFound for a non-existent client_id", async () => {
    // A bogus client_id that should not resolve to any Discord application.
    // Discord may surface this as NotFound, BadRequest, or Forbidden.
    const fakeClientId = "100000000000000001";
    await runEffect(
      partnerSdkToken({
        client_id: fakeClientId,
        external_auth_token: `nonexistent-${testRunId}`,
        external_auth_type:
          PARTNER_EXTERNAL_AUTH_TYPE ?? "epic_online_services_access_token",
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "BadRequest", "Forbidden"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });
});
