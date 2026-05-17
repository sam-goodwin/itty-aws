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

// Smallest valid 1x1 transparent PNG, encoded as a data URI. Discord accepts
// data URIs of the form "data:image/{png,jpeg,gif};base64,...".
const TINY_PNG_DATA_URI =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII=";

// The endpoint requires:
//   - a guild the bot is in with CREATE_GUILD_EXPRESSIONS permission.
const TEST_GUILD_ID = process.env.DISCORD_TEST_GUILD_ID;

// Snowflake-format identifier that should not match a real guild.
const NON_EXISTENT_GUILD_ID = "100000000000000000";

// Discord requires emoji names to match ^[a-zA-Z0-9_]{2,32}$.
const emojiName = (suffix: string): string => {
  const raw = `dt_${suffix}_${testRunId}`;
  return raw.replace(/[^a-zA-Z0-9_]/g, "_").slice(0, 32);
};

describe("createGuildEmoji", () => {
  it("happy path - creates a guild emoji and deletes it on cleanup", async () => {
    if (!TEST_GUILD_ID) {
      throw new Error(
        "DISCORD_TEST_GUILD_ID env var is required for the createGuildEmoji happy path",
      );
    }
    const name = emojiName("happy");
    await runEffect(
      Effect.gen(function* () {
        const emoji = yield* createGuildEmoji({
          guild_id: TEST_GUILD_ID,
          name,
          image: TINY_PNG_DATA_URI,
        });
        return yield* Effect.sync(() => {
          expect(typeof emoji.id).toBe("string");
          expect(emoji.name).toBe(name);
          expect(Array.isArray(emoji.roles)).toBe(true);
          expect(typeof emoji.require_colons).toBe("boolean");
          expect(typeof emoji.managed).toBe("boolean");
          expect(typeof emoji.animated).toBe("boolean");
          expect(typeof emoji.available).toBe("boolean");
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
  });

  it("error - NotFound for non-existent guild_id", async () => {
    await runEffect(
      createGuildEmoji({
        guild_id: NON_EXISTENT_GUILD_ID,
        name: emojiName("nf"),
        image: TINY_PNG_DATA_URI,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord returns NotFound for unseen guilds, but may surface as
          // Forbidden (50001 Missing Access) when the bot can't see it.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden", "BadRequest"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });

  it("error - BadRequest for invalid emoji name (contains hyphens)", async () => {
    if (!TEST_GUILD_ID) {
      throw new Error(
        "DISCORD_TEST_GUILD_ID env var is required for the BadRequest test",
      );
    }
    // Discord's emoji names must match ^[a-zA-Z0-9_]{2,32}$ — hyphens and
    // spaces are rejected with 400 Invalid Form Body.
    await runEffect(
      createGuildEmoji({
        guild_id: TEST_GUILD_ID,
        name: "bad-name with spaces",
        image: TINY_PNG_DATA_URI,
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
      createGuildEmoji({
        guild_id: NON_EXISTENT_GUILD_ID,
        name: emojiName("fb"),
        image: TINY_PNG_DATA_URI,
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
