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

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// The application's snowflake id (the bot's own application).
const TEST_APPLICATION_ID = process.env.DISCORD_TEST_APPLICATION_ID;
// A SKU id from the application's monetization settings; required to create
// a test entitlement that we can then delete.
const TEST_SKU_ID = process.env.DISCORD_TEST_SKU_ID;
// A guild that we own and can use as the entitlement owner.
const TEST_GUILD_ID = process.env.DISCORD_TEST_GUILD_ID;

// Snowflake-format identifier that should not match a real entity.
const NON_EXISTENT_APPLICATION_ID = "100000000000000000";
const NON_EXISTENT_ENTITLEMENT_ID = "100000000000000001";

describe("deleteEntitlement", () => {
  it(
    "happy path - creates a test entitlement then deletes it",
    async () => {
      if (!TEST_APPLICATION_ID || !TEST_SKU_ID || !TEST_GUILD_ID) {
        throw new Error(
          "DISCORD_TEST_APPLICATION_ID, DISCORD_TEST_SKU_ID and DISCORD_TEST_GUILD_ID env vars are required for the deleteEntitlement happy path. " +
            `(testRunId=${testRunId})`,
        );
      }
      await runEffect(
        Effect.gen(function* () {
          const created = yield* createEntitlement({
            application_id: TEST_APPLICATION_ID,
            sku_id: TEST_SKU_ID,
            owner_id: TEST_GUILD_ID,
            // owner_type 1 = GUILD_SUBSCRIPTION
            owner_type: 1,
          });
          const result = yield* deleteEntitlement({
            application_id: TEST_APPLICATION_ID,
            entitlement_id: created.id,
          }).pipe(
            // If deleteEntitlement fails, still try to clean up the test
            // entitlement we just created.
            Effect.ensuring(
              deleteEntitlement({
                application_id: TEST_APPLICATION_ID,
                entitlement_id: created.id,
              }).pipe(Effect.ignore),
            ),
          );
          return yield* Effect.sync(() => {
            expect(result).toBeUndefined();
          });
        }),
      );
    },
    30_000,
  );

  it("error - NotFound for non-existent entitlement_id", async () => {
    if (!TEST_APPLICATION_ID) {
      throw new Error(
        "DISCORD_TEST_APPLICATION_ID env var is required for the NotFound test",
      );
    }
    await runEffect(
      deleteEntitlement({
        application_id: TEST_APPLICATION_ID,
        entitlement_id: NON_EXISTENT_ENTITLEMENT_ID,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // A snowflake-shaped entitlement_id that does not exist on the
          // application yields 404 NotFound. Discord may also surface 403
          // Forbidden depending on which check fires first.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden"]).toContain((e as any)._tag);
        }),
      ),
    );
  });

  it(
    "error - Forbidden for an application_id that is not the bot's",
    async () => {
      // The bot can only manage entitlements for its own application.
      // Targeting another application_id results in 403 Forbidden, or 404
      // NotFound if the route 404s before the permission check.
      await runEffect(
        deleteEntitlement({
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
    },
  );
});
