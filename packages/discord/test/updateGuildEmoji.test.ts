import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { createGuildEmoji } from "../src/operations/createGuildEmoji.ts";
import { deleteGuildEmoji } from "../src/operations/deleteGuildEmoji.ts";
import { updateGuildEmoji } from "../src/operations/updateGuildEmoji.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// Smallest valid 1x1 transparent PNG, encoded as a data URI. Discord accepts
// data URIs of the form "data:image/{png,jpeg,gif};base64,...".
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

describe("updateGuildEmoji", () => {
  it(
    "happy path - renames a freshly created guild emoji",
    async () => {
      if (!TEST_GUILD_ID) {
        throw new Error(
          "DISCORD_TEST_GUILD_ID env var is required for the updateGuildEmoji happy path",
        );
      }
      const originalName = emojiName("upd_o");
      const newName = emojiName("upd_n");
      await runEffect(
        Effect.gen(function* () {
          const emoji = yield* createGuildEmoji({
            guild_id: TEST_GUILD_ID,
            name: originalName,
            image: TINY_PNG_DATA_URI,
          });
          return yield* Effect.gen(function* () {
            const updated = yield* updateGuildEmoji({
              guild_id: TEST_GUILD_ID,
              emoji_id: emoji.id,
              name: newName,
            });
            return yield* Effect.sync(() => {
              expect(updated.id).toBe(emoji.id);
              expect(updated.name).toBe(newName);
              expect(Array.isArray(updated.roles)).toBe(true);
              expect(typeof updated.require_colons).toBe("boolean");
              expect(typeof updated.managed).toBe("boolean");
              expect(typeof updated.animated).toBe("boolean");
              expect(typeof updated.available).toBe("boolean");
            });
          }).pipe(
            Effect.ensuring(
              deleteGuildEmoji({
                guild_id: TEST_GUILD_ID,
                emoji_id: emoji.id,
              }).pipe(Effect.ignore),
            ),
          );
        }),
      );
    },
    30_000,
  );

  it("error - NotFound for non-existent emoji_id on a real guild", async () => {
    if (!TEST_GUILD_ID) {
      throw new Error(
        "DISCORD_TEST_GUILD_ID env var is required for the NotFound test",
      );
    }
    // A snowflake-shaped emoji_id that does not exist on the guild yields
    // 404 NotFound. Discord may also surface 403 Forbidden depending on
    // which check fires first.
    await runEffect(
      updateGuildEmoji({
        guild_id: TEST_GUILD_ID,
        emoji_id: NON_EXISTENT_EMOJI_ID,
        name: emojiName("nf"),
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden"]).toContain((e as any)._tag);
        }),
      ),
    );
  });

  it("error - BadRequest for invalid emoji name (contains hyphens and spaces)", async () => {
    if (!TEST_GUILD_ID) {
      throw new Error(
        "DISCORD_TEST_GUILD_ID env var is required for the BadRequest test",
      );
    }
    // Discord's emoji names must match ^[a-zA-Z0-9_]{2,32}$ — hyphens and
    // spaces are rejected with 400 Invalid Form Body. We need a real emoji
    // for the route to actually validate the body, so create-then-update.
    const original = emojiName("br_o");
    await runEffect(
      Effect.gen(function* () {
        const emoji = yield* createGuildEmoji({
          guild_id: TEST_GUILD_ID,
          name: original,
          image: TINY_PNG_DATA_URI,
        });
        return yield* updateGuildEmoji({
          guild_id: TEST_GUILD_ID,
          emoji_id: emoji.id,
          name: "bad-name with spaces",
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
            deleteGuildEmoji({
              guild_id: TEST_GUILD_ID,
              emoji_id: emoji.id,
            }).pipe(Effect.ignore),
          ),
        );
      }),
    );
  }, 30_000);

  it("error - Forbidden when targeting a guild the bot is not a member of", async () => {
    // A guild_id the bot does not see typically yields 403 Forbidden
    // (50001 Missing Access), or 404 NotFound if the route 404s before the
    // permission check.
    await runEffect(
      updateGuildEmoji({
        guild_id: NON_EXISTENT_GUILD_ID,
        emoji_id: NON_EXISTENT_EMOJI_ID,
        name: emojiName("fb"),
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
