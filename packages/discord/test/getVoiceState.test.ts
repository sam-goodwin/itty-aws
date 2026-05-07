import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { CredentialsFromEnv } from "../src/credentials.ts";
import { getVoiceState } from "../src/operations/getVoiceState.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// GET /guilds/{guild_id}/voice-states/{user_id} requires that the target
// user is currently connected to a voice channel in the guild and that the
// bot has permission to read voice states there. This cannot be cleanly
// created via the API in a test fixture, so the happy path is gated on
// operator-supplied env vars pointing at a guild and a user known to be
// connected to voice.
const TEST_VOICE_GUILD_ID = process.env.DISCORD_TEST_VOICE_GUILD_ID;
const TEST_VOICE_USER_ID = process.env.DISCORD_TEST_VOICE_USER_ID;

// Snowflake-shaped ids unlikely to resolve to any real guild/user.
const NON_EXISTENT_GUILD_ID = `1000000000000000${testRunId.slice(0, 2)}`;
const NON_EXISTENT_USER_ID = "100000000000000001";
const INACCESSIBLE_GUILD_ID = "100000000000000002";

describe("getVoiceState", () => {
  it(
    "happy path - fetches a voice state for a connected user",
    async () => {
      if (!TEST_VOICE_GUILD_ID || !TEST_VOICE_USER_ID) {
        throw new Error(
          "DISCORD_TEST_VOICE_GUILD_ID and DISCORD_TEST_VOICE_USER_ID env vars are required for the getVoiceState happy path. " +
            "Set them to a guild id and a user id known to be connected to a voice channel in that guild.",
        );
      }
      const result = await runEffect(
        getVoiceState({
          guild_id: TEST_VOICE_GUILD_ID,
          user_id: TEST_VOICE_USER_ID,
        }),
      );
      expect(result.user_id).toBe(TEST_VOICE_USER_ID);
      expect(typeof result.session_id).toBe("string");
      expect(typeof result.deaf).toBe("boolean");
      expect(typeof result.mute).toBe("boolean");
      expect(typeof result.self_deaf).toBe("boolean");
      expect(typeof result.self_mute).toBe("boolean");
      expect(typeof result.self_video).toBe("boolean");
      expect(typeof result.suppress).toBe("boolean");
      expect(
        result.self_stream === null || typeof result.self_stream === "boolean",
      ).toBe(true);
      expect(
        result.request_to_speak_timestamp === null ||
          typeof result.request_to_speak_timestamp === "string",
      ).toBe(true);
    },
    { timeout: 30_000 },
  );

  it("error - NotFound for a non-existent guild_id", async () => {
    await runEffect(
      getVoiceState({
        guild_id: NON_EXISTENT_GUILD_ID,
        user_id: TEST_VOICE_USER_ID ?? NON_EXISTENT_USER_ID,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord surfaces a missing guild as NotFound. The bot may also see
          // it as Forbidden when it has no access, or BadRequest if the
          // snowflake is otherwise rejected.
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
      getVoiceState({
        guild_id: INACCESSIBLE_GUILD_ID,
        user_id: NON_EXISTENT_USER_ID,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // For a guild the bot is not in, Discord typically returns
          // Forbidden (50001 Missing Access) but often returns NotFound to
          // avoid leaking existence.
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
