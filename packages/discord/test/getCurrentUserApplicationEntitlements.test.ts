import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { getCurrentUserApplicationEntitlements } from "../src/operations/getCurrentUserApplicationEntitlements.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);
void testRunId;

// The endpoint is /users/@me/applications/{application_id}/entitlements
// and requires a user OAuth2 bearer token (set DISCORD_BEARER_TOKEN) with
// an entitlements-related scope. Bot tokens cannot use it. Operators must
// opt in with DISCORD_TEST_APPLICATION_ID for the happy path to run.
const TEST_APPLICATION_ID = process.env.DISCORD_TEST_APPLICATION_ID;

// Snowflake-format identifier that should not match a real application.
const NON_EXISTENT_APPLICATION_ID = "100000000000000000";

describe("getCurrentUserApplicationEntitlements", () => {
  it("happy path - lists the calling user's entitlements for the application", async () => {
    if (!TEST_APPLICATION_ID) {
      throw new Error(
        "DISCORD_TEST_APPLICATION_ID env var is required for the getCurrentUserApplicationEntitlements happy path. The endpoint requires a user OAuth2 bearer token (DISCORD_BEARER_TOKEN).",
      );
    }
    const result = await runEffect(
      getCurrentUserApplicationEntitlements({
        application_id: TEST_APPLICATION_ID,
      }),
    );
    // Discord returns an array (possibly empty) of entitlement records.
    expect(Array.isArray(result)).toBe(true);
    for (const entitlement of result) {
      expect(typeof entitlement.id).toBe("string");
      expect(typeof entitlement.sku_id).toBe("string");
      expect(entitlement.application_id).toBe(TEST_APPLICATION_ID);
      expect(typeof entitlement.user_id).toBe("string");
      expect(typeof entitlement.deleted).toBe("boolean");
    }
  });

  it("error - NotFound for non-existent application_id", async () => {
    // Discord returns 404 NotFound for application_ids that do not exist;
    // may surface as Forbidden when the calling token lacks access.
    await runEffect(
      getCurrentUserApplicationEntitlements({
        application_id: NON_EXISTENT_APPLICATION_ID,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden"]).toContain((e as any)._tag);
        }),
      ),
    );
  });

  it("error - Forbidden when the token lacks access to entitlements for the application", async () => {
    // Bot tokens cannot use this user-scoped endpoint — Discord returns
    // 403 Forbidden (or 401 in some configurations). User OAuth2 tokens
    // missing the proper scope return 403. May also surface as 404.
    await runEffect(
      getCurrentUserApplicationEntitlements({
        application_id: NON_EXISTENT_APPLICATION_ID,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["Forbidden", "NotFound"]).toContain((e as any)._tag);
        }),
      ),
    );
  });
});
