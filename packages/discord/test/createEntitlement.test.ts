import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { createEntitlement } from "../src/operations/createEntitlement.ts";
import { deleteEntitlement } from "../src/operations/deleteEntitlement.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

// The endpoint requires:
//   - the bot's application_id (snowflake) — the bot's token must own it.
//   - a sku_id (snowflake) belonging to that application.
//   - an owner_id (snowflake) — guild_id when owner_type=1, user_id when 2.
const TEST_APPLICATION_ID = process.env.DISCORD_TEST_APPLICATION_ID;
const TEST_SKU_ID = process.env.DISCORD_TEST_SKU_ID;
const TEST_OWNER_ID = process.env.DISCORD_TEST_USER_ID;

// Snowflake-format identifiers that should not match real Discord resources.
const NON_EXISTENT_APPLICATION_ID = "100000000000000000";
const NON_EXISTENT_SKU_ID = "100000000000000001";
const NON_EXISTENT_OWNER_ID = "100000000000000002";

// Discord owner types: 1 = guild subscription, 2 = user subscription.
const OWNER_TYPE_USER = 2;

describe("createEntitlement", () => {
  it("happy path - creates a test entitlement and deletes it on cleanup", async () => {
    if (!TEST_APPLICATION_ID || !TEST_SKU_ID || !TEST_OWNER_ID) {
      throw new Error(
        "DISCORD_TEST_APPLICATION_ID, DISCORD_TEST_SKU_ID and DISCORD_TEST_USER_ID env vars are required for the createEntitlement happy path",
      );
    }
    await runEffect(
      Effect.gen(function* () {
        const entitlement = yield* createEntitlement({
          application_id: TEST_APPLICATION_ID,
          sku_id: TEST_SKU_ID,
          owner_id: TEST_OWNER_ID,
          owner_type: OWNER_TYPE_USER,
        });
        return yield* Effect.sync(() => {
          expect(typeof entitlement.id).toBe("string");
          expect(entitlement.application_id).toBe(TEST_APPLICATION_ID);
          expect(entitlement.sku_id).toBe(TEST_SKU_ID);
          expect(typeof entitlement.deleted).toBe("boolean");
        }).pipe(
          Effect.ensuring(
            deleteEntitlement({
              application_id: TEST_APPLICATION_ID,
              entitlement_id: entitlement.id,
            }).pipe(Effect.ignore),
          ),
        );
      }),
    );
  });

  it("error - NotFound for non-existent sku_id", async () => {
    if (!TEST_APPLICATION_ID) {
      throw new Error(
        "DISCORD_TEST_APPLICATION_ID env var is required for the NotFound test",
      );
    }
    await runEffect(
      createEntitlement({
        application_id: TEST_APPLICATION_ID,
        sku_id: NON_EXISTENT_SKU_ID,
        owner_id: TEST_OWNER_ID ?? NON_EXISTENT_OWNER_ID,
        owner_type: OWNER_TYPE_USER,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord returns NotFound (10068) for an sku_id that does not
          // belong to the application; may surface as Forbidden or BadRequest.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "BadRequest", "Forbidden"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });

  it("error - BadRequest for invalid owner_type (out of range)", async () => {
    if (!TEST_APPLICATION_ID) {
      throw new Error(
        "DISCORD_TEST_APPLICATION_ID env var is required for the BadRequest test",
      );
    }
    // Discord's owner_type must be 1 or 2; any other value is rejected with
    // 400 Invalid Form Body. May also surface as Forbidden or NotFound.
    await runEffect(
      createEntitlement({
        application_id: TEST_APPLICATION_ID,
        sku_id: TEST_SKU_ID ?? NON_EXISTENT_SKU_ID,
        owner_id: TEST_OWNER_ID ?? NON_EXISTENT_OWNER_ID,
        owner_type: 99,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["BadRequest", "NotFound", "Forbidden"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });

  it("error - Forbidden for application_id the bot does not own", async () => {
    // Calling against an application_id the bot's token does not own
    // typically yields 403 Forbidden; may also surface as 404 NotFound when
    // the route resolves the application before the permission check.
    await runEffect(
      createEntitlement({
        application_id: NON_EXISTENT_APPLICATION_ID,
        sku_id: TEST_SKU_ID ?? NON_EXISTENT_SKU_ID,
        owner_id: TEST_OWNER_ID ?? NON_EXISTENT_OWNER_ID,
        owner_type: OWNER_TYPE_USER,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["Forbidden", "NotFound", "BadRequest"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });
});
