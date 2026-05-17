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

// Requires:
//   - a guild the bot is in with MANAGE_GUILD_EXPRESSIONS permission.
//   - a sticker file (PNG/APNG/Lottie at exactly 320x320, <=512KB) provided
//     as a data URI via env. No inline fixture meets the size + dimension
//     requirements, so the operator must supply one.
const TEST_GUILD_ID = process.env.DISCORD_TEST_GUILD_ID;
const TEST_STICKER_DATA_URI = process.env.DISCORD_TEST_STICKER_DATA_URI;

// Snowflake-format identifiers that should not match real entities.
const NON_EXISTENT_GUILD_ID = "100000000000000000";
const NON_EXISTENT_STICKER_ID = "100000000000000001";

// Discord requires sticker names of 2..30 chars.
const stickerName = (suffix: string): string =>
  `dt-${suffix}-${testRunId}`.slice(0, 30);

describe("deleteGuildSticker", () => {
  it(
    "happy path - creates a guild sticker then deletes it",
    async () => {
      if (!TEST_GUILD_ID || !TEST_STICKER_DATA_URI) {
        throw new Error(
          "DISCORD_TEST_GUILD_ID and DISCORD_TEST_STICKER_DATA_URI env vars are required for the deleteGuildSticker happy path. " +
            `(testRunId=${testRunId})`,
        );
      }
      await runEffect(
        Effect.gen(function* () {
          const sticker = yield* createGuildSticker({
            guild_id: TEST_GUILD_ID,
            name: stickerName("del"),
            tags: "smile",
            description: "distilled test sticker",
            file: TEST_STICKER_DATA_URI,
          });
          const result = yield* deleteGuildSticker({
            guild_id: TEST_GUILD_ID,
            sticker_id: sticker.id,
          }).pipe(
            // If the delete fails, attempt cleanup explicitly.
            Effect.ensuring(
              deleteGuildSticker({
                guild_id: TEST_GUILD_ID,
                sticker_id: sticker.id,
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

  it("error - NotFound for non-existent sticker_id", async () => {
    if (!TEST_GUILD_ID) {
      throw new Error(
        "DISCORD_TEST_GUILD_ID env var is required for the NotFound test",
      );
    }
    // A snowflake-shaped sticker_id that does not exist on the guild yields
    // 404 NotFound. Discord may also surface 403 Forbidden depending on
    // which check fires first.
    await runEffect(
      deleteGuildSticker({
        guild_id: TEST_GUILD_ID,
        sticker_id: NON_EXISTENT_STICKER_ID,
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
      deleteGuildSticker({
        guild_id: NON_EXISTENT_GUILD_ID,
        sticker_id: NON_EXISTENT_STICKER_ID,
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
