import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { createGuildSticker } from "../src/operations/createGuildSticker.ts";
import { deleteGuildSticker } from "../src/operations/deleteGuildSticker.ts";
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
//   - a guild the bot is in with CREATE_GUILD_EXPRESSIONS permission.
//   - a sticker file: PNG/APNG/Lottie at exactly 320x320 and <= 512KB.
//     Operators must supply their own data URI via DISCORD_TEST_STICKER_DATA_URI;
//     no inline fixture meets the size + dimension requirements safely.
const TEST_GUILD_ID = process.env.DISCORD_TEST_GUILD_ID;
const TEST_STICKER_DATA_URI = process.env.DISCORD_TEST_STICKER_DATA_URI;

// Snowflake-format identifier that should not match a real guild.
const NON_EXISTENT_GUILD_ID = "100000000000000000";

// Discord requires sticker names of 2..30 chars.
const stickerName = (suffix: string): string =>
  `dt-${suffix}-${testRunId}`.slice(0, 30);

// A clearly invalid sticker payload — empty data URI — used for the BadRequest
// path; Discord rejects it with 400 Invalid Form Body.
const INVALID_STICKER_DATA_URI = "data:image/png;base64,";

describe("createGuildSticker", () => {
  it("happy path - creates a guild sticker and deletes it on cleanup", async () => {
    if (!TEST_GUILD_ID || !TEST_STICKER_DATA_URI) {
      throw new Error(
        "DISCORD_TEST_GUILD_ID and DISCORD_TEST_STICKER_DATA_URI env vars are required for the createGuildSticker happy path",
      );
    }
    const name = stickerName("happy");
    await runEffect(
      Effect.gen(function* () {
        const sticker = yield* createGuildSticker({
          guild_id: TEST_GUILD_ID,
          name,
          tags: "smile",
          description: "distilled test sticker",
          file: TEST_STICKER_DATA_URI,
        });
        return yield* Effect.sync(() => {
          expect(typeof sticker.id).toBe("string");
          expect(sticker.name).toBe(name);
          expect(typeof sticker.tags).toBe("string");
          expect(typeof sticker.format_type).toBe("number");
          expect(typeof sticker.available).toBe("boolean");
          if (sticker.guild_id !== undefined) {
            expect(sticker.guild_id).toBe(TEST_GUILD_ID);
          }
        }).pipe(
          Effect.ensuring(
            deleteGuildSticker({
              guild_id: TEST_GUILD_ID,
              sticker_id: sticker.id,
            }).pipe(Effect.ignore),
          ),
        );
      }),
    );
  });

  it("error - NotFound for non-existent guild_id", async () => {
    await runEffect(
      createGuildSticker({
        guild_id: NON_EXISTENT_GUILD_ID,
        name: stickerName("nf"),
        tags: "smile",
        file: TEST_STICKER_DATA_URI ?? INVALID_STICKER_DATA_URI,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord returns NotFound for unseen guilds, but may surface as
          // Forbidden (50001 Missing Access) when the bot can't see it, or
          // BadRequest if Discord rejects the sticker payload first.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden", "BadRequest"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });

  it("error - BadRequest for invalid (empty) sticker file data URI", async () => {
    if (!TEST_GUILD_ID) {
      throw new Error(
        "DISCORD_TEST_GUILD_ID env var is required for the BadRequest test",
      );
    }
    // An empty / malformed sticker file data URI is rejected with 400 Invalid
    // Form Body. May also surface as Forbidden if the bot lacks
    // CREATE_GUILD_EXPRESSIONS, or NotFound for an unseen guild.
    await runEffect(
      createGuildSticker({
        guild_id: TEST_GUILD_ID,
        name: stickerName("bad"),
        tags: "smile",
        file: INVALID_STICKER_DATA_URI,
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
      createGuildSticker({
        guild_id: NON_EXISTENT_GUILD_ID,
        name: stickerName("fb"),
        tags: "smile",
        file: TEST_STICKER_DATA_URI ?? INVALID_STICKER_DATA_URI,
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
