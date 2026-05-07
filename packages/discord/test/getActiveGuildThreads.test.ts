import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { CredentialsFromEnv } from "../src/credentials.ts";
import { getActiveGuildThreads } from "../src/operations/getActiveGuildThreads.ts";

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

// Requires a guild the bot is in and can read threads from.
const TEST_GUILD_ID = process.env.DISCORD_TEST_GUILD_ID;

// Snowflake-format identifier that should not match a real guild.
const NON_EXISTENT_GUILD_ID = "100000000000000000";

describe("getActiveGuildThreads", () => {
  it("happy path - lists active threads in a real guild", async () => {
    if (!TEST_GUILD_ID) {
      throw new Error(
        "DISCORD_TEST_GUILD_ID env var is required for the getActiveGuildThreads happy path",
      );
    }
    const result = await runEffect(
      getActiveGuildThreads({ guild_id: TEST_GUILD_ID }),
    );
    expect(Array.isArray(result.threads)).toBe(true);
    for (const thread of result.threads) {
      expect(typeof thread.id).toBe("string");
      expect(thread.guild_id).toBe(TEST_GUILD_ID);
      expect(typeof thread.name).toBe("string");
      // Active means not archived per Discord's definition.
      expect(thread.thread_metadata.archived).toBe(false);
    }
  });

  it("error - NotFound for non-existent guild_id", async () => {
    // Discord returns 404 NotFound for an unknown guild; may surface as
    // 403 Forbidden when the bot can't see it.
    await runEffect(
      getActiveGuildThreads({ guild_id: NON_EXISTENT_GUILD_ID }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden"]).toContain((e as any)._tag);
        }),
      ),
    );
  });

  it("error - Forbidden for a guild the bot is not in", async () => {
    // A snowflake-shaped guild_id the bot is not a member of typically
    // yields 403 Forbidden (50001 — Missing Access), or 404 NotFound if
    // the route 404s before the membership check.
    await runEffect(
      getActiveGuildThreads({ guild_id: NON_EXISTENT_GUILD_ID }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["Forbidden", "NotFound"]).toContain((e as any)._tag);
        }),
      ),
    );
  });
});
