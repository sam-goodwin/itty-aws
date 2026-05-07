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

// Requires a guild where the bot has Manage Guild Expressions and a small
// MP3/OGG sound clip (<=512KB, <=5.2s) provided as a data URI. Discord does
// not accept synthetic placeholder audio, so the clip must come from env.
const TEST_GUILD_ID = process.env.DISCORD_TEST_GUILD_ID;
const TEST_SOUNDBOARD_SOUND_DATA_URI =
  process.env.DISCORD_TEST_SOUNDBOARD_SOUND_DATA_URI;

// Snowflake-format identifiers that should not match real entities.
const NON_EXISTENT_GUILD_ID = "100000000000000000";
const NON_EXISTENT_SOUND_ID = "100000000000000001";

// Soundboard sound names must be 2..32 chars.
const soundName = (suffix: string): string =>
  `dt-sb-${suffix}-${testRunId}`.slice(0, 32);

describe("deleteGuildSoundboardSound", () => {
  it(
    "happy path - creates a soundboard sound then deletes it",
    async () => {
      if (!TEST_GUILD_ID || !TEST_SOUNDBOARD_SOUND_DATA_URI) {
        throw new Error(
          "DISCORD_TEST_GUILD_ID and DISCORD_TEST_SOUNDBOARD_SOUND_DATA_URI env vars are required for the deleteGuildSoundboardSound happy path. " +
            `(testRunId=${testRunId})`,
        );
      }
      await runEffect(
        Effect.gen(function* () {
          const sound = yield* createGuildSoundboardSound({
            guild_id: TEST_GUILD_ID,
            name: soundName("del"),
            sound: TEST_SOUNDBOARD_SOUND_DATA_URI,
          });
          const result = yield* deleteGuildSoundboardSound({
            guild_id: TEST_GUILD_ID,
            sound_id: sound.sound_id,
          }).pipe(
            // If the delete fails, attempt cleanup explicitly.
            Effect.ensuring(
              deleteGuildSoundboardSound({
                guild_id: TEST_GUILD_ID,
                sound_id: sound.sound_id,
              }).pipe(Effect.ignore),
            ),
          );
          return yield* Effect.sync(() => {
            // 204 No Content; output schema is Void.
            expect(result).toBeUndefined();
          });
        }),
      );
    },
    30_000,
  );

  it("error - NotFound for non-existent sound_id", async () => {
    if (!TEST_GUILD_ID) {
      throw new Error(
        "DISCORD_TEST_GUILD_ID env var is required for the NotFound test",
      );
    }
    // A snowflake-shaped sound_id that does not exist on the guild yields
    // 404 NotFound. Discord may also surface 403 Forbidden depending on
    // which check fires first.
    await runEffect(
      deleteGuildSoundboardSound({
        guild_id: TEST_GUILD_ID,
        sound_id: NON_EXISTENT_SOUND_ID,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden"]).toContain((e as any)._tag);
        }),
      ),
    );
  });

  it("error - Forbidden for a guild_id the bot is not in", async () => {
    // A guild_id the bot is not a member of typically yields 403 Forbidden
    // (50001 Missing Access), or 404 NotFound if the route 404s before the
    // permission check.
    await runEffect(
      deleteGuildSoundboardSound({
        guild_id: NON_EXISTENT_GUILD_ID,
        sound_id: NON_EXISTENT_SOUND_ID,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["Forbidden", "NotFound"]).toContain((e as any)._tag);
        }),
      ),
    );
  });
});
