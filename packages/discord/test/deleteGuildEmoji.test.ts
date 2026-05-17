import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { createGuildEmoji } from "../src/operations/createGuildEmoji.ts";
import { deleteGuildEmoji } from "../src/operations/deleteGuildEmoji.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// Smallest valid 1x1 transparent PNG, encoded as a data URI.
const TINY_PNG_DATA_URI =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII=";

// Requires a guild where the bot has Manage Emojis and Stickers.
const TEST_GUILD_ID = process.env.DISCORD_TEST_GUILD_ID;

// Snowflake-format identifiers that should not match real entities.
const NON_EXISTENT_GUILD_ID = "100000000000000000";
const NON_EXISTENT_EMOJI_ID = "100000000000000001";

// Discord requires emoji names to match ^[a-zA-Z0-9_]{2,32}$.
const emojiName = (suffix: string): string => {
  const raw = `dt_${suffix}_${testRunId}`;
  return raw.replace(/[^a-zA-Z0-9_]/g, "_").slice(0, 32);
};

describe("deleteGuildEmoji", () => {
  it(
    "happy path - deletes a freshly created guild emoji",
    async () => {
      if (!TEST_GUILD_ID) {
        throw new Error(
          "DISCORD_TEST_GUILD_ID env var is required for the deleteGuildEmoji happy path",
        );
      }
      await runEffect(
        Effect.gen(function* () {
          const emoji = yield* createGuildEmoji({
            guild_id: TEST_GUILD_ID,
            name: emojiName("del"),
            image: TINY_PNG_DATA_URI,
          });
          const result = yield* deleteGuildEmoji({
            guild_id: TEST_GUILD_ID,
            emoji_id: emoji.id,
          }).pipe(
            // If the delete fails, still attempt to remove the emoji we
            // just created.
            Effect.ensuring(
              deleteGuildEmoji({
                guild_id: TEST_GUILD_ID,
                emoji_id: emoji.id,
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

  it("error - NotFound for non-existent emoji_id", async () => {
    if (!TEST_GUILD_ID) {
      throw new Error(
        "DISCORD_TEST_GUILD_ID env var is required for the NotFound test",
      );
    }
    // A snowflake-shaped emoji_id that does not exist on the guild yields
    // 404 NotFound. Discord may also surface 403 Forbidden depending on
    // which check fires first.
    await runEffect(
      deleteGuildEmoji({
        guild_id: TEST_GUILD_ID,
        emoji_id: NON_EXISTENT_EMOJI_ID,
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
      deleteGuildEmoji({
        guild_id: NON_EXISTENT_GUILD_ID,
        emoji_id: NON_EXISTENT_EMOJI_ID,
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
