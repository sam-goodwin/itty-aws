import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { getSelfVoiceState } from "../src/operations/getSelfVoiceState.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// GET /guilds/{guild_id}/voice-states/@me — returns the *bot's* current
// voice state in the given guild. The bot must be connected to a voice
// channel in that guild; if it isn't, Discord returns 404 (Voice State Not
// Found). The happy path therefore requires the operator to supply
// DISCORD_TEST_VOICE_GUILD_ID — a guild where the bot is actively in voice.
const TEST_VOICE_GUILD_ID = process.env.DISCORD_TEST_VOICE_GUILD_ID;

// Snowflake-shaped ids unlikely to resolve to a guild the bot is in voice
// in.
const NON_EXISTENT_GUILD_ID = `1000000000000000${testRunId.slice(0, 2)}`;
const INACCESSIBLE_GUILD_ID = "100000000000000001";

describe("getSelfVoiceState", () => {
  it("happy path - returns the bot's voice state in the guild", async () => {
    if (!TEST_VOICE_GUILD_ID) {
      throw new Error(
        "DISCORD_TEST_VOICE_GUILD_ID must be set for the getSelfVoiceState happy path. " +
          "The bot must be actively connected to a voice channel in this guild.",
      );
    }
    const result = await runEffect(
      getSelfVoiceState({ guild_id: TEST_VOICE_GUILD_ID }),
    );
    // channel_id and guild_id are typed as `Schema.Unknown` (Discord may
    // return them as snowflake strings or null). Assert the property is
    // present rather than a specific shape.
    expect("channel_id" in result).toBe(true);
    expect("guild_id" in result).toBe(true);
    expect(typeof result.deaf).toBe("boolean");
    expect(typeof result.mute).toBe("boolean");
    expect(
      result.request_to_speak_timestamp === null ||
        typeof result.request_to_speak_timestamp === "string",
    ).toBe(true);
    expect(typeof result.suppress).toBe("boolean");
    expect(
      result.self_stream === null || typeof result.self_stream === "boolean",
    ).toBe(true);
    expect(typeof result.self_deaf).toBe("boolean");
    expect(typeof result.self_mute).toBe("boolean");
    expect(typeof result.self_video).toBe("boolean");
    expect(typeof result.session_id).toBe("string");
    expect(typeof result.user_id).toBe("string");
  });

  it("error - NotFound for a non-existent guild id", async () => {
    await runEffect(
      getSelfVoiceState({ guild_id: NON_EXISTENT_GUILD_ID }).pipe(
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
      getSelfVoiceState({ guild_id: INACCESSIBLE_GUILD_ID }).pipe(
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
