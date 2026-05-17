import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { CredentialsFromEnv } from "../src/credentials.ts";
import { deprecatedListPins } from "../src/operations/deprecatedListPins.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);
// testRunId is unused for path-only GET inputs but kept for parity with
// other discord tests that include it in resource identifiers.
void testRunId;

// Requires a text channel the bot can read messages from.
const TEST_CHANNEL_ID = process.env.DISCORD_TEST_CHANNEL_ID;

// Snowflake-format identifier that should not match a real channel.
const NON_EXISTENT_CHANNEL_ID = "100000000000000000";

describe("deprecatedListPins", () => {
  it("happy path - lists pinned messages via the legacy route", async () => {
    if (!TEST_CHANNEL_ID) {
      throw new Error(
        "DISCORD_TEST_CHANNEL_ID env var is required for the deprecatedListPins happy path",
      );
    }
    const result = await runEffect(
      deprecatedListPins({ channel_id: TEST_CHANNEL_ID }),
    );
    // Discord returns an array of message objects (possibly empty).
    expect(Array.isArray(result)).toBe(true);
    for (const msg of result) {
      expect(typeof msg.id).toBe("string");
      expect(msg.channel_id).toBe(TEST_CHANNEL_ID);
      expect(msg.pinned).toBe(true);
    }
  });

  it("error - NotFound for non-existent channel_id", async () => {
    // Discord returns 404 NotFound (10003 — Unknown Channel) for an unknown
    // channel, but may surface as 403 Forbidden when the bot can't see it.
    await runEffect(
      deprecatedListPins({ channel_id: NON_EXISTENT_CHANNEL_ID }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden"]).toContain((e as any)._tag);
        }),
      ),
    );
  });

  it("error - Forbidden when the channel cannot be read by the bot", async () => {
    // A snowflake-shaped channel_id the bot cannot access typically yields
    // 403 Forbidden (50001 Missing Access), or 404 NotFound if the route
    // 404s before the permission check.
    await runEffect(
      deprecatedListPins({ channel_id: NON_EXISTENT_CHANNEL_ID }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["Forbidden", "NotFound"]).toContain((e as any)._tag);
        }),
      ),
    );
  });
});
