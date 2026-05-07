import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { getGuildWelcomeScreen } from "../src/operations/getGuildWelcomeScreen.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// GET /guilds/{guild_id}/welcome-screen returns the welcome screen for a
// Community-enabled guild. If the guild has no welcome screen configured
// Discord responds 404 (NotFound 10069 — Welcome screens only exist for
// Community guilds with one set up). The test guild therefore must be a
// Community guild that has a welcome screen configured.
const TEST_GUILD_ID =
  process.env.DISCORD_TEST_GUILD_WITH_WELCOME_SCREEN_ID ??
  process.env.DISCORD_TEST_GUILD_ID;

// Snowflake-shaped ids that should not resolve to any guild the bot can
// read.
const NON_EXISTENT_GUILD_ID = `1000000000000000${testRunId.slice(0, 2)}`;
const INACCESSIBLE_GUILD_ID = "100000000000000001";

describe("getGuildWelcomeScreen", () => {
  it("happy path - fetches the welcome screen of the test guild", async () => {
    if (!TEST_GUILD_ID) {
      throw new Error(
        "DISCORD_TEST_GUILD_WITH_WELCOME_SCREEN_ID (or DISCORD_TEST_GUILD_ID) must be set " +
          "for the getGuildWelcomeScreen happy path. The guild must be Community-enabled " +
          "with a welcome screen configured.",
      );
    }
    const result = await runEffect(
      getGuildWelcomeScreen({ guild_id: TEST_GUILD_ID }),
    );
    expect(
      result.description === null || typeof result.description === "string",
    ).toBe(true);
    expect(Array.isArray(result.welcome_channels)).toBe(true);
    for (const wc of result.welcome_channels) {
      expect(typeof wc.channel_id).toBe("string");
      expect(typeof wc.description).toBe("string");
      expect(wc.emoji_name === null || typeof wc.emoji_name === "string").toBe(
        true,
      );
    }
  });

  it("error - NotFound for a non-existent guild id", async () => {
    await runEffect(
      getGuildWelcomeScreen({ guild_id: NON_EXISTENT_GUILD_ID }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord may surface a missing guild as NotFound (10004), or as
          // Forbidden (Missing Access) when the bot is not in the guild.
          // Some malformed snowflakes may surface as BadRequest.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden", "BadRequest"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });

  it("error - Forbidden or NotFound for a guild the bot cannot access", async () => {
    await runEffect(
      getGuildWelcomeScreen({ guild_id: INACCESSIBLE_GUILD_ID }).pipe(
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
