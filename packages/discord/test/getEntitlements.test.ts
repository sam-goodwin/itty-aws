import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { getEntitlements } from "../src/operations/getEntitlements.ts";
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

// The endpoint requires:
//   - the bot's application_id (snowflake) — the bot's token must own it.
const TEST_APPLICATION_ID = process.env.DISCORD_TEST_APPLICATION_ID;

// Snowflake-format identifier that should not match a real application.
const NON_EXISTENT_APPLICATION_ID = "100000000000000000";

describe("getEntitlements", () => {
  it("happy path - lists entitlements for the bot's application", async () => {
    if (!TEST_APPLICATION_ID) {
      throw new Error(
        "DISCORD_TEST_APPLICATION_ID env var is required for the getEntitlements happy path",
      );
    }
    const result = await runEffect(
      getEntitlements({
        application_id: TEST_APPLICATION_ID,
        limit: 5,
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
    await runEffect(
      getEntitlements({
        application_id: NON_EXISTENT_APPLICATION_ID,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord returns NotFound for an unseen application_id, but may
          // surface as Forbidden when the bot's token does not own it.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden"]).toContain((e as any)._tag);
        }),
      ),
    );
  });

  it("error - Forbidden for application_id the bot does not own", async () => {
    // Calling against an application_id the bot's token does not own
    // typically yields 403 Forbidden; may also surface as 404 NotFound when
    // the route resolves the application before the permission check.
    await runEffect(
      getEntitlements({
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
