import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { getGuildWidgetSettings } from "../src/operations/getGuildWidgetSettings.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// GET /guilds/{guild_id}/widget returns the *settings* of the widget
// (enabled flag and target channel id). Requires MANAGE_GUILD on the bot's
// member of the guild. Unlike the public widget.json endpoint, this works
// regardless of whether the widget is currently enabled.
const TEST_GUILD_ID = process.env.DISCORD_TEST_GUILD_ID;

// Snowflake-shaped ids unlikely to resolve to a guild the bot can access.
const NON_EXISTENT_GUILD_ID = `1000000000000000${testRunId.slice(0, 2)}`;
const INACCESSIBLE_GUILD_ID = "100000000000000001";

describe("getGuildWidgetSettings", () => {
  it("happy path - fetches widget settings for the test guild", async () => {
    if (!TEST_GUILD_ID) {
      throw new Error(
        "DISCORD_TEST_GUILD_ID must be set for the getGuildWidgetSettings happy path. " +
          "The bot must have MANAGE_GUILD on this guild.",
      );
    }
    const result = await runEffect(
      getGuildWidgetSettings({ guild_id: TEST_GUILD_ID }),
    );
    expect(typeof result.enabled).toBe("boolean");
    // channel_id is `Schema.Unknown` — Discord returns either a snowflake
    // string or null. We assert only that the property is present.
    expect("channel_id" in result).toBe(true);
  });

  it("error - NotFound for a non-existent guild id", async () => {
    await runEffect(
      getGuildWidgetSettings({ guild_id: NON_EXISTENT_GUILD_ID }).pipe(
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
      getGuildWidgetSettings({ guild_id: INACCESSIBLE_GUILD_ID }).pipe(
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
