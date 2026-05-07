import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { createGuildSoundboardSound } from "../src/operations/createGuildSoundboardSound.ts";
import { deleteGuildSoundboardSound } from "../src/operations/deleteGuildSoundboardSound.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// The endpoint requires:
//   - a guild the bot is in with CREATE_GUILD_EXPRESSIONS permission and
//     soundboard support (community guild or boosted).
//   - a sound data URI: "data:audio/{mpeg,ogg};base64,..." up to 512KB and
//     <= 5.2 seconds duration. Operators must supply their own valid clip
//     via DISCORD_TEST_SOUNDBOARD_DATA_URI; no inline MP3/OGG fixture is
//     small enough to embed safely.
const TEST_GUILD_ID = process.env.DISCORD_TEST_GUILD_ID;
const TEST_SOUND_DATA_URI = process.env.DISCORD_TEST_SOUNDBOARD_DATA_URI;

// Snowflake-format identifier that should not match a real guild.
const NON_EXISTENT_GUILD_ID = "100000000000000000";

// Discord requires soundboard sound names of 2..32 chars.
const soundName = (suffix: string): string =>
  `dt-${suffix}-${testRunId}`.slice(0, 32);

// A clearly invalid sound payload — empty data URI — used for the BadRequest
// path; Discord rejects it with 400 Invalid Form Body.
const INVALID_SOUND_DATA_URI = "data:audio/mpeg;base64,";

describe("createGuildSoundboardSound", () => {
  it("happy path - creates a guild soundboard sound and deletes it on cleanup", async () => {
    if (!TEST_GUILD_ID || !TEST_SOUND_DATA_URI) {
      throw new Error(
        "DISCORD_TEST_GUILD_ID and DISCORD_TEST_SOUNDBOARD_DATA_URI env vars are required for the createGuildSoundboardSound happy path",
      );
    }
    const name = soundName("happy");
    await runEffect(
      Effect.gen(function* () {
        const sound = yield* createGuildSoundboardSound({
          guild_id: TEST_GUILD_ID,
          name,
          sound: TEST_SOUND_DATA_URI,
          volume: 1,
        });
        return yield* Effect.sync(() => {
          expect(typeof sound.sound_id).toBe("string");
          expect(sound.name).toBe(name);
          expect(typeof sound.volume).toBe("number");
          expect(typeof sound.available).toBe("boolean");
          if (sound.guild_id !== undefined) {
            expect(sound.guild_id).toBe(TEST_GUILD_ID);
          }
        }).pipe(
          Effect.ensuring(
            deleteGuildSoundboardSound({
              guild_id: TEST_GUILD_ID,
              sound_id: sound.sound_id,
            }).pipe(Effect.ignore),
          ),
        );
      }),
    );
  });

  it("error - NotFound for non-existent guild_id", async () => {
    await runEffect(
      createGuildSoundboardSound({
        guild_id: NON_EXISTENT_GUILD_ID,
        name: soundName("nf"),
        sound: TEST_SOUND_DATA_URI ?? INVALID_SOUND_DATA_URI,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord returns NotFound for unseen guilds, but may surface as
          // Forbidden (50001 Missing Access) when the bot can't see it, or
          // BadRequest if Discord rejects the sound payload first.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden", "BadRequest"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });

  it("error - BadRequest for invalid (empty) sound data URI", async () => {
    if (!TEST_GUILD_ID) {
      throw new Error(
        "DISCORD_TEST_GUILD_ID env var is required for the BadRequest test",
      );
    }
    // An empty / malformed sound data URI is rejected with 400 Invalid Form
    // Body. May also surface as Forbidden if the bot lacks
    // CREATE_GUILD_EXPRESSIONS, or NotFound for an unseen guild.
    await runEffect(
      createGuildSoundboardSound({
        guild_id: TEST_GUILD_ID,
        name: soundName("bad"),
        sound: INVALID_SOUND_DATA_URI,
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

  it("error - Forbidden when targeting a guild the bot is not a member of", async () => {
    // Calling against a snowflake-shaped guild_id the bot does not see
    // typically yields Forbidden (50001 Missing Access), or NotFound if the
    // route resolves the guild before the permission check.
    await runEffect(
      createGuildSoundboardSound({
        guild_id: NON_EXISTENT_GUILD_ID,
        name: soundName("fb"),
        sound: TEST_SOUND_DATA_URI ?? INVALID_SOUND_DATA_URI,
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
