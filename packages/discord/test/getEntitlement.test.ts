import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { getEntitlement } from "../src/operations/getEntitlement.ts";
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
//   - the entitlement_id (snowflake) of an existing entitlement on that
//     application. Entitlements normally come from real purchases, so the
//     happy path requires the operator to supply an existing entitlement_id
//     via DISCORD_TEST_ENTITLEMENT_ID.
const TEST_APPLICATION_ID = process.env.DISCORD_TEST_APPLICATION_ID;
const TEST_ENTITLEMENT_ID = process.env.DISCORD_TEST_ENTITLEMENT_ID;

// Snowflake-format identifiers that should not match real resources.
const NON_EXISTENT_APPLICATION_ID = "100000000000000000";
const NON_EXISTENT_ENTITLEMENT_ID = "100000000000000001";

describe("getEntitlement", () => {
  it("happy path - fetches an entitlement by id", async () => {
    if (!TEST_APPLICATION_ID || !TEST_ENTITLEMENT_ID) {
      throw new Error(
        "DISCORD_TEST_APPLICATION_ID and DISCORD_TEST_ENTITLEMENT_ID env vars are required for the getEntitlement happy path",
      );
    }
    const result = await runEffect(
      getEntitlement({
        application_id: TEST_APPLICATION_ID,
        entitlement_id: TEST_ENTITLEMENT_ID,
      }),
    );
    expect(result.id).toBe(TEST_ENTITLEMENT_ID);
    expect(result.application_id).toBe(TEST_APPLICATION_ID);
    expect(typeof result.sku_id).toBe("string");
    expect(typeof result.user_id).toBe("string");
    expect(typeof result.deleted).toBe("boolean");
  });

  it("error - NotFound for non-existent entitlement_id under the bot's application", async () => {
    if (!TEST_APPLICATION_ID) {
      throw new Error(
        "DISCORD_TEST_APPLICATION_ID env var is required for the NotFound test",
      );
    }
    await runEffect(
      getEntitlement({
        application_id: TEST_APPLICATION_ID,
        entitlement_id: NON_EXISTENT_ENTITLEMENT_ID,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden"]).toContain((e as any)._tag);
        }),
      ),
    );
  });

  it("error - Forbidden for application_id the bot does not own", async () => {
    // Looking up an entitlement under an application_id the bot's token
    // does not own typically yields 403 Forbidden; may also surface as
    // 404 NotFound when the route resolves the application before the
    // permission check.
    await runEffect(
      getEntitlement({
        application_id: NON_EXISTENT_APPLICATION_ID,
        entitlement_id: NON_EXISTENT_ENTITLEMENT_ID,
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
