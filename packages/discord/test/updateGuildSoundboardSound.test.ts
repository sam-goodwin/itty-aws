import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { createGuildSoundboardSound } from "../src/operations/createGuildSoundboardSound.ts";
import { deleteGuildSoundboardSound } from "../src/operations/deleteGuildSoundboardSound.ts";
import { updateGuildSoundboardSound } from "../src/operations/updateGuildSoundboardSound.ts";
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

// Snowflake-format identifiers that should not match real resources.
const NON_EXISTENT_GUILD_ID = "100000000000000000";
const NON_EXISTENT_SOUND_ID = "100000000000000001";

// Discord requires soundboard sound names of 2..32 chars.
const soundName = (suffix: string): string =>
  `dt-${suffix}-${testRunId}`.slice(0, 32);

describe("updateGuildSoundboardSound", () => {
  it(
    "happy path - renames a freshly created soundboard sound",
    async () => {
      if (!TEST_GUILD_ID || !TEST_SOUND_DATA_URI) {
        throw new Error(
          "DISCORD_TEST_GUILD_ID and DISCORD_TEST_SOUNDBOARD_DATA_URI env vars are required for the updateGuildSoundboardSound happy path",
        );
      }
      const originalName = soundName("upd_o");
      const newName = soundName("upd_n");
      await runEffect(
        Effect.gen(function* () {
          const sound = yield* createGuildSoundboardSound({
            guild_id: TEST_GUILD_ID,
            name: originalName,
            sound: TEST_SOUND_DATA_URI,
            volume: 1,
          });
          return yield* Effect.gen(function* () {
            const updated = yield* updateGuildSoundboardSound({
              guild_id: TEST_GUILD_ID,
              sound_id: sound.sound_id,
              name: newName,
              volume: 0.5,
            });
            return yield* Effect.sync(() => {
              expect(updated.sound_id).toBe(sound.sound_id);
              expect(updated.name).toBe(newName);
              expect(typeof updated.volume).toBe("number");
              expect(typeof updated.available).toBe("boolean");
              if (updated.guild_id !== undefined) {
                expect(updated.guild_id).toBe(TEST_GUILD_ID);
              }
            });
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
    },
    30_000,
  );

  it("error - NotFound for non-existent sound_id on a real guild", async () => {
    if (!TEST_GUILD_ID) {
      throw new Error(
        "DISCORD_TEST_GUILD_ID env var is required for the NotFound test",
      );
    }
    // A snowflake-shaped sound_id that does not exist on the guild yields
    // 404 NotFound. Discord may also surface 403 Forbidden depending on
    // which check fires first.
    await runEffect(
      updateGuildSoundboardSound({
        guild_id: TEST_GUILD_ID,
        sound_id: NON_EXISTENT_SOUND_ID,
        name: soundName("nf"),
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden", "BadRequest"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });

  it(
    "error - BadRequest for name shorter than 2 characters",
    async () => {
      if (!TEST_GUILD_ID || !TEST_SOUND_DATA_URI) {
        throw new Error(
          "DISCORD_TEST_GUILD_ID and DISCORD_TEST_SOUNDBOARD_DATA_URI env vars are required for the BadRequest test",
        );
      }
      // Discord requires soundboard sound names to be 2–32 characters; a
      // single-character name is rejected with 400 Invalid Form Body. May
      // also surface as Forbidden if MANAGE_GUILD_EXPRESSIONS validation
      // fires first.
      const original = soundName("br_o");
      await runEffect(
        Effect.gen(function* () {
          const sound = yield* createGuildSoundboardSound({
            guild_id: TEST_GUILD_ID,
            name: original,
            sound: TEST_SOUND_DATA_URI,
            volume: 1,
          });
          return yield* updateGuildSoundboardSound({
            guild_id: TEST_GUILD_ID,
            sound_id: sound.sound_id,
            name: "x",
          }).pipe(
            Effect.flip,
            Effect.map((e) => {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              expect(["BadRequest", "Forbidden", "NotFound"]).toContain(
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (e as any)._tag,
              );
            }),
            Effect.ensuring(
              deleteGuildSoundboardSound({
                guild_id: TEST_GUILD_ID,
                sound_id: sound.sound_id,
              }).pipe(Effect.ignore),
            ),
          );
        }),
      );
    },
    30_000,
  );

  it("error - Forbidden when targeting a guild the bot is not a member of", async () => {
    // A guild_id the bot does not see typically yields 403 Forbidden
    // (50001 Missing Access), or 404 NotFound if the route 404s before the
    // permission check.
    await runEffect(
      updateGuildSoundboardSound({
        guild_id: NON_EXISTENT_GUILD_ID,
        sound_id: NON_EXISTENT_SOUND_ID,
        name: soundName("fb"),
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
