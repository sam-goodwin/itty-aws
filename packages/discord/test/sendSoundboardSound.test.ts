import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { CredentialsFromEnv } from "../src/credentials.ts";
import { sendSoundboardSound } from "../src/operations/sendSoundboardSound.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// POST /channels/{channel_id}/send-soundboard-sound plays a soundboard sound
// in a voice channel. The bot must already be connected to the voice
// channel. Happy path is gated on DISCORD_TEST_VOICE_CHANNEL_ID and
// DISCORD_TEST_SOUNDBOARD_SOUND_ID; the operator is responsible for
// connecting the bot to voice before running.
const TEST_VOICE_CHANNEL_ID = process.env.DISCORD_TEST_VOICE_CHANNEL_ID;
const TEST_SOUNDBOARD_SOUND_ID = process.env.DISCORD_TEST_SOUNDBOARD_SOUND_ID;
const TEST_SOURCE_GUILD_ID = process.env.DISCORD_TEST_SOURCE_GUILD_ID;

describe("sendSoundboardSound", () => {
  it.skipIf(!TEST_VOICE_CHANNEL_ID || !TEST_SOUNDBOARD_SOUND_ID)(
    "happy path - plays a soundboard sound in a voice channel",
    async () => {
      const result = await runEffect(
        sendSoundboardSound({
          channel_id: TEST_VOICE_CHANNEL_ID!,
          sound_id: TEST_SOUNDBOARD_SOUND_ID!,
          source_guild_id: TEST_SOURCE_GUILD_ID,
        }),
      );
      // Endpoint returns 204 No Content; typed output is void.
      expect(result).toBeUndefined();
    },
    { timeout: 30_000 },
  );

  it("error - BadRequest when the bot is not connected to voice", async () => {
    // Without a voice connection, Discord rejects the request. May surface
    // as BadRequest, Forbidden, or NotFound depending on routing.
    const channelId =
      TEST_VOICE_CHANNEL_ID ?? `1000000000000000${testRunId.slice(0, 2)}`;
    await runEffect(
      sendSoundboardSound({
        channel_id: channelId,
        sound_id: TEST_SOUNDBOARD_SOUND_ID ?? "100000000000000001",
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["BadRequest", "Forbidden", "NotFound"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });

  it("error - Forbidden for an inaccessible channel", async () => {
    // A snowflake the bot is unlikely to have access to. Discord may surface
    // this as Forbidden, NotFound (to avoid leaking existence), or BadRequest.
    const inaccessibleChannelId = "100000000000000001";
    await runEffect(
      sendSoundboardSound({
        channel_id: inaccessibleChannelId,
        sound_id: "100000000000000002",
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

  it("error - NotFound for a non-existent channel id", async () => {
    const fakeChannelId = `1000000000000000${testRunId.slice(0, 2)}`;
    await runEffect(
      sendSoundboardSound({
        channel_id: fakeChannelId,
        sound_id: `1000000000000000${testRunId.slice(2, 4)}`,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord may return NotFound (channel does not exist), Forbidden
          // (bot cannot see the channel), or BadRequest depending on routing.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden", "BadRequest"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });
});
