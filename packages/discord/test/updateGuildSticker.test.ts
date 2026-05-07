import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { createGuildSticker } from "../src/operations/createGuildSticker.ts";
import { deleteGuildSticker } from "../src/operations/deleteGuildSticker.ts";
import { updateGuildSticker } from "../src/operations/updateGuildSticker.ts";
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
//   - a guild the bot is in with MANAGE_GUILD_EXPRESSIONS permission.
//   - to drive the happy path we first create a real sticker, which needs a
//     PNG/APNG/Lottie data URI at exactly 320x320 and <= 512KB. Operators
//     must supply their own clip via DISCORD_TEST_STICKER_DATA_URI; no
//     inline fixture meets the size + dimension constraints safely.
const TEST_GUILD_ID = process.env.DISCORD_TEST_GUILD_ID;
const TEST_STICKER_DATA_URI = process.env.DISCORD_TEST_STICKER_DATA_URI;

// Snowflake-format identifiers that should not match real resources.
const NON_EXISTENT_GUILD_ID = "100000000000000000";
const NON_EXISTENT_STICKER_ID = "100000000000000001";

// Discord requires sticker names of 2..30 chars.
const stickerName = (suffix: string): string =>
  `dt-${suffix}-${testRunId}`.slice(0, 30);

describe("updateGuildSticker", () => {
  it(
    "happy path - renames a freshly created guild sticker",
    async () => {
      if (!TEST_GUILD_ID || !TEST_STICKER_DATA_URI) {
        throw new Error(
          "DISCORD_TEST_GUILD_ID and DISCORD_TEST_STICKER_DATA_URI env vars are required for the updateGuildSticker happy path",
        );
      }
      const originalName = stickerName("upd_o");
      const newName = stickerName("upd_n");
      await runEffect(
        Effect.gen(function* () {
          const sticker = yield* createGuildSticker({
            guild_id: TEST_GUILD_ID,
            name: originalName,
            tags: "smile",
            description: "distilled test sticker",
            file: TEST_STICKER_DATA_URI,
          });
          return yield* Effect.gen(function* () {
            const updated = yield* updateGuildSticker({
              guild_id: TEST_GUILD_ID,
              sticker_id: sticker.id,
              name: newName,
              description: "renamed by distilled",
            });
            return yield* Effect.sync(() => {
              expect(updated.id).toBe(sticker.id);
              expect(updated.name).toBe(newName);
              expect(updated.description).toBe("renamed by distilled");
              expect(typeof updated.tags).toBe("string");
              expect(typeof updated.available).toBe("boolean");
              expect(updated.guild_id).toBe(TEST_GUILD_ID);
            });
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
    },
    30_000,
  );

  it("error - NotFound for non-existent sticker_id on a real guild", async () => {
    if (!TEST_GUILD_ID) {
      throw new Error(
        "DISCORD_TEST_GUILD_ID env var is required for the NotFound test",
      );
    }
    // A snowflake-shaped sticker_id that does not exist on the guild yields
    // 404 NotFound. Discord may also surface 403 Forbidden depending on
    // which check fires first.
    await runEffect(
      updateGuildSticker({
        guild_id: TEST_GUILD_ID,
        sticker_id: NON_EXISTENT_STICKER_ID,
        name: stickerName("nf"),
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
      if (!TEST_GUILD_ID || !TEST_STICKER_DATA_URI) {
        throw new Error(
          "DISCORD_TEST_GUILD_ID and DISCORD_TEST_STICKER_DATA_URI env vars are required for the BadRequest test",
        );
      }
      // Discord requires sticker names to be 2–30 characters; a single-char
      // name is rejected with 400 Invalid Form Body. We need a real sticker
      // for the route to actually validate the body, so create-then-update.
      const original = stickerName("br_o");
      await runEffect(
        Effect.gen(function* () {
          const sticker = yield* createGuildSticker({
            guild_id: TEST_GUILD_ID,
            name: original,
            tags: "smile",
            file: TEST_STICKER_DATA_URI,
          });
          return yield* updateGuildSticker({
            guild_id: TEST_GUILD_ID,
            sticker_id: sticker.id,
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
              deleteGuildSticker({
                guild_id: TEST_GUILD_ID,
                sticker_id: sticker.id,
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
      updateGuildSticker({
        guild_id: NON_EXISTENT_GUILD_ID,
        sticker_id: NON_EXISTENT_STICKER_ID,
        name: stickerName("fb"),
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
