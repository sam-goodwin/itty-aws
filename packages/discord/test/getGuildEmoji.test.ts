import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { createGuildEmoji } from "../src/operations/createGuildEmoji.ts";
import { deleteGuildEmoji } from "../src/operations/deleteGuildEmoji.ts";
import { getGuildEmoji } from "../src/operations/getGuildEmoji.ts";
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
//   - a guild the bot is in with MANAGE_GUILD_EXPRESSIONS permission.
const TEST_GUILD_ID = process.env.DISCORD_TEST_GUILD_ID;

// Snowflake-format identifiers that should not match real resources.
const NON_EXISTENT_GUILD_ID = "100000000000000000";
const NON_EXISTENT_EMOJI_ID = "100000000000000001";

// Discord requires emoji names to match ^[a-zA-Z0-9_]{2,32}$.
const emojiName = (suffix: string): string => {
  const raw = `dt_${suffix}_${testRunId}`;
  return raw.replace(/[^a-zA-Z0-9_]/g, "_").slice(0, 32);
};

describe("getGuildEmoji", () => {
  it("happy path - fetches a freshly created guild emoji by id", async () => {
    if (!TEST_GUILD_ID) {
      throw new Error(
        "DISCORD_TEST_GUILD_ID env var is required for the getGuildEmoji happy path",
      );
    }
    const name = emojiName("get");
    await runEffect(
      Effect.gen(function* () {
        const created = yield* createGuildEmoji({
          guild_id: TEST_GUILD_ID,
          name,
          image: TINY_PNG_DATA_URI,
        });
        return yield* Effect.gen(function* () {
          const fetched = yield* getGuildEmoji({
            guild_id: TEST_GUILD_ID,
            emoji_id: created.id,
          });
          expect(fetched.id).toBe(created.id);
          expect(fetched.name).toBe(name);
          expect(Array.isArray(fetched.roles)).toBe(true);
          expect(typeof fetched.require_colons).toBe("boolean");
          expect(typeof fetched.managed).toBe("boolean");
          expect(typeof fetched.animated).toBe("boolean");
          expect(typeof fetched.available).toBe("boolean");
        }).pipe(
          Effect.ensuring(
            deleteGuildEmoji({
              guild_id: TEST_GUILD_ID,
              emoji_id: created.id,
            }).pipe(Effect.ignore),
          ),
        );
      }),
    );
  });

  it("error - NotFound for non-existent emoji_id under a real guild", async () => {
    if (!TEST_GUILD_ID) {
      throw new Error(
        "DISCORD_TEST_GUILD_ID env var is required for the NotFound test",
      );
    }
    await runEffect(
      getGuildEmoji({
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

  it("error - Forbidden when targeting a guild the bot is not a member of", async () => {
    // Calling against a snowflake-shaped guild_id the bot does not see
    // typically yields Forbidden (50001 Missing Access), or NotFound if the
    // route resolves the guild before the permission check.
    await runEffect(
      getGuildEmoji({
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
