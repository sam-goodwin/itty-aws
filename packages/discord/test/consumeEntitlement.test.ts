import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { consumeEntitlement } from "../src/operations/consumeEntitlement.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

// The endpoint requires:
//   - the bot's application_id (snowflake).
//   - an entitlement_id for a CONSUMABLE one-time purchase entitlement that
//     has not yet been consumed. Consumption is irreversible — Discord marks
//     the entitlement as consumed and a future purchase / grant is needed
//     to test consumption again.
const TEST_APPLICATION_ID = process.env.DISCORD_TEST_APPLICATION_ID;
const TEST_ENTITLEMENT_ID = process.env.DISCORD_TEST_CONSUMABLE_ENTITLEMENT_ID;

// Snowflake-format identifiers that should not match real Discord resources.
const NON_EXISTENT_APPLICATION_ID = "100000000000000000";
const NON_EXISTENT_ENTITLEMENT_ID = "100000000000000001";

describe("consumeEntitlement", () => {
  it("happy path - consumes a one-time consumable entitlement", async () => {
    if (!TEST_APPLICATION_ID || !TEST_ENTITLEMENT_ID) {
      throw new Error(
        "DISCORD_TEST_APPLICATION_ID and DISCORD_TEST_CONSUMABLE_ENTITLEMENT_ID env vars are required for the consumeEntitlement happy path (the entitlement must be a CONSUMABLE one-time purchase that has not been consumed yet — consumption is irreversible).",
      );
    }
    await runEffect(
      consumeEntitlement({
        application_id: TEST_APPLICATION_ID,
        entitlement_id: TEST_ENTITLEMENT_ID,
      }).pipe(
        Effect.tap((result) =>
          Effect.sync(() => {
            // Discord returns 204 No Content on success; the SDK decodes it
            // to void / undefined.
            expect(result).toBeUndefined();
          }),
        ),
      ),
    );
  });

  it("error - NotFound for non-existent entitlement_id", async () => {
    if (!TEST_APPLICATION_ID) {
      throw new Error(
        "DISCORD_TEST_APPLICATION_ID env var is required for the NotFound test",
      );
    }
    await runEffect(
      consumeEntitlement({
        application_id: TEST_APPLICATION_ID,
        entitlement_id: NON_EXISTENT_ENTITLEMENT_ID,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord returns NotFound (error code 10070) for an entitlement
          // that does not exist; may surface as Forbidden if the application
          // does not own the entitlement.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden"]).toContain((e as any)._tag);
        }),
      ),
    );
  });

  it("error - BadRequest for malformed (non-snowflake) entitlement_id", async () => {
    if (!TEST_APPLICATION_ID) {
      throw new Error(
        "DISCORD_TEST_APPLICATION_ID env var is required for the BadRequest test",
      );
    }
    await runEffect(
      consumeEntitlement({
        application_id: TEST_APPLICATION_ID,
        entitlement_id: "not-a-snowflake",
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord rejects malformed snowflakes with 400 Invalid Form Body;
          // routing layers may also classify it as 404.
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
      consumeEntitlement({
        application_id: NON_EXISTENT_APPLICATION_ID,
        entitlement_id: NON_EXISTENT_ENTITLEMENT_ID,
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
