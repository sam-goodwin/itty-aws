import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { updateGuildMember } from "../src/operations/updateGuildMember.ts";
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
//   - a guild the bot is in with MANAGE_NICKNAMES (and other related perms
//     depending on which fields are touched).
//   - the user_id (snowflake) of a member of that guild. The bot is itself
//     a member, so DISCORD_TEST_BOT_USER_ID is a reliable target.
const TEST_GUILD_ID = process.env.DISCORD_TEST_GUILD_ID;
const TEST_BOT_USER_ID = process.env.DISCORD_TEST_BOT_USER_ID;

// Snowflake-format identifiers that should not match real resources.
const NON_EXISTENT_GUILD_ID = "100000000000000000";
const NON_EXISTENT_USER_ID = "100000000000000001";

// Discord nicknames must be 1–32 characters; build short, run-scoped values.
const nickFor = (suffix: string): string =>
  `dt_${suffix}_${testRunId}`.slice(0, 32);

describe("updateGuildMember", () => {
  it(
    "happy path - updates the bot's own nickname in the test guild",
    async () => {
      if (!TEST_GUILD_ID || !TEST_BOT_USER_ID) {
        throw new Error(
          "DISCORD_TEST_GUILD_ID and DISCORD_TEST_BOT_USER_ID env vars are required for the updateGuildMember happy path",
        );
      }
      const newNick = nickFor("happy");
      await runEffect(
        Effect.gen(function* () {
          const updated = yield* updateGuildMember({
            guild_id: TEST_GUILD_ID,
            user_id: TEST_BOT_USER_ID,
            nick: newNick,
          });
          return yield* Effect.sync(() => {
            expect(updated.user.id).toBe(TEST_BOT_USER_ID);
            expect(updated.nick).toBe(newNick);
            expect(Array.isArray(updated.roles)).toBe(true);
            expect(typeof updated.joined_at).toBe("string");
            expect(typeof updated.flags).toBe("number");
            expect(typeof updated.pending).toBe("boolean");
            expect(typeof updated.mute).toBe("boolean");
            expect(typeof updated.deaf).toBe("boolean");
          }).pipe(
            // Restore the nickname to null so the test guild is not left in
            // a dirtied state between runs.
            Effect.ensuring(
              updateGuildMember({
                guild_id: TEST_GUILD_ID,
                user_id: TEST_BOT_USER_ID,
                nick: null,
              }).pipe(Effect.ignore),
            ),
          );
        }),
      );
    },
    30_000,
  );

  it("error - NotFound for a user that is not a member of the guild", async () => {
    if (!TEST_GUILD_ID) {
      throw new Error(
        "DISCORD_TEST_GUILD_ID env var is required for the NotFound test",
      );
    }
    // A snowflake-shaped user_id with no membership in the guild yields
    // 404 NotFound. Discord may also surface 403 Forbidden depending on
    // which check fires first.
    await runEffect(
      updateGuildMember({
        guild_id: TEST_GUILD_ID,
        user_id: NON_EXISTENT_USER_ID,
        nick: nickFor("nf"),
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

  it("error - BadRequest for nickname exceeding 32 characters", async () => {
    if (!TEST_GUILD_ID || !TEST_BOT_USER_ID) {
      throw new Error(
        "DISCORD_TEST_GUILD_ID and DISCORD_TEST_BOT_USER_ID env vars are required for the BadRequest test",
      );
    }
    // Discord nicknames must be 1–32 characters; a 64-character value is
    // rejected with 400 Invalid Form Body.
    const tooLongNick = "a".repeat(64);
    await runEffect(
      updateGuildMember({
        guild_id: TEST_GUILD_ID,
        user_id: TEST_BOT_USER_ID,
        nick: tooLongNick,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["BadRequest", "Forbidden", "NotFound"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
        // If the API somehow accepted the nick, restore it to null so the
        // bot's display name in the test guild is not left dirty.
        Effect.ensuring(
          updateGuildMember({
            guild_id: TEST_GUILD_ID,
            user_id: TEST_BOT_USER_ID,
            nick: null,
          }).pipe(Effect.ignore),
        ),
      ),
    );
  });

  it("error - Forbidden when targeting a guild the bot is not a member of", async () => {
    // A guild_id the bot does not see typically yields 403 Forbidden
    // (50001 Missing Access), or 404 NotFound if the route 404s before the
    // permission check.
    await runEffect(
      updateGuildMember({
        guild_id: NON_EXISTENT_GUILD_ID,
        user_id: NON_EXISTENT_USER_ID,
        nick: nickFor("fb"),
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
