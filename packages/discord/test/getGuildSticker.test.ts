import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { getGuildSticker } from "../src/operations/getGuildSticker.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);
void testRunId;

// The endpoint requires:
//   - a guild the bot is in.
//   - the sticker_id (snowflake) of an existing sticker in that guild.
//     Creating stickers requires uploading PNG/APNG/Lottie/GIF files via
//     multipart, which is not practical in-test, so the happy path requires
//     the operator to supply DISCORD_TEST_GUILD_STICKER_ID.
const TEST_GUILD_ID = process.env.DISCORD_TEST_GUILD_ID;
const TEST_GUILD_STICKER_ID = process.env.DISCORD_TEST_GUILD_STICKER_ID;

// Snowflake-format identifiers that should not match real resources.
const NON_EXISTENT_GUILD_ID = "100000000000000000";
const NON_EXISTENT_STICKER_ID = "100000000000000001";

describe("getGuildSticker", () => {
  it("happy path - fetches a guild sticker by id", async () => {
    if (!TEST_GUILD_ID || !TEST_GUILD_STICKER_ID) {
      throw new Error(
        "DISCORD_TEST_GUILD_ID and DISCORD_TEST_GUILD_STICKER_ID env vars are required for the getGuildSticker happy path. Stickers require multipart uploads so cannot be created in-test.",
      );
    }
    const result = await runEffect(
      getGuildSticker({
        guild_id: TEST_GUILD_ID,
        sticker_id: TEST_GUILD_STICKER_ID,
      }),
    );
    expect(result.id).toBe(TEST_GUILD_STICKER_ID);
    expect(result.guild_id).toBe(TEST_GUILD_ID);
    expect(typeof result.name).toBe("string");
    expect(typeof result.tags).toBe("string");
    expect(typeof result.available).toBe("boolean");
    if (result.description !== null) {
      expect(typeof result.description).toBe("string");
    }
  });

  it("error - NotFound for non-existent sticker_id under a real guild", async () => {
    if (!TEST_GUILD_ID) {
      throw new Error(
        "DISCORD_TEST_GUILD_ID env var is required for the NotFound test",
      );
    }
    await runEffect(
      getGuildSticker({
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

  it("error - Forbidden when targeting a guild the bot is not a member of", async () => {
    // Calling against a snowflake-shaped guild_id the bot does not see
    // typically yields Forbidden (50001 Missing Access), or NotFound if the
    // route resolves the guild before the permission check.
    await runEffect(
      getGuildSticker({
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
