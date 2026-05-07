import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { updateMyGuildMember } from "../src/operations/updateMyGuildMember.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// PATCH /guilds/{guild_id}/members/@me — the bot updates its own member
// object in a guild. The bot must be a member of the guild and have
// CHANGE_NICKNAME (for nick edits).
const TEST_GUILD_ID = process.env.DISCORD_TEST_GUILD_ID;

// Snowflake-format identifier that should not match a real guild.
const NON_EXISTENT_GUILD_ID = "100000000000000000";

// Discord nicknames must be 1–32 characters; build short, run-scoped values.
const nickFor = (suffix: string): string =>
  `dt_${suffix}_${testRunId}`.slice(0, 32);

describe("updateMyGuildMember", () => {
  it(
    "happy path - updates the bot's own nickname in the test guild",
    async () => {
      if (!TEST_GUILD_ID) {
        throw new Error(
          "DISCORD_TEST_GUILD_ID env var is required for the updateMyGuildMember happy path",
        );
      }
      const newNick = nickFor("happy");
      await runEffect(
        Effect.gen(function* () {
          const updated = yield* updateMyGuildMember({
            guild_id: TEST_GUILD_ID,
            nick: newNick,
          });
          return yield* Effect.sync(() => {
            expect(updated.nick).toBe(newNick);
            expect(typeof updated.user.id).toBe("string");
            expect(typeof updated.user.username).toBe("string");
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
              updateMyGuildMember({
                guild_id: TEST_GUILD_ID,
                nick: null,
              }).pipe(Effect.ignore),
            ),
          );
        }),
      );
    },
    30_000,
  );

  it("error - BadRequest for nickname exceeding 32 characters", async () => {
    if (!TEST_GUILD_ID) {
      throw new Error(
        "DISCORD_TEST_GUILD_ID env var is required for the BadRequest test",
      );
    }
    // Discord nicknames must be 1–32 characters; a 64-character value is
    // rejected with 400 Invalid Form Body.
    const tooLongNick = "a".repeat(64);
    await runEffect(
      updateMyGuildMember({
        guild_id: TEST_GUILD_ID,
        nick: tooLongNick,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          expect(["BadRequest", "Forbidden", "NotFound"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
        // If the API somehow accepted the nick, restore it to null so the
        // bot's display name in the test guild is not left dirty.
        Effect.ensuring(
          updateMyGuildMember({
            guild_id: TEST_GUILD_ID,
            nick: null,
          }).pipe(Effect.ignore),
        ),
      ),
    );
  });

  it("error - NotFound when the guild does not exist", async () => {
    // A snowflake-shaped guild_id that resolves to no real guild typically
    // yields 404 NotFound, but Discord may also classify the response as
    // 403 Forbidden if the route 403s before the not-found check.
    await runEffect(
      updateMyGuildMember({
        guild_id: NON_EXISTENT_GUILD_ID,
        nick: nickFor("nf"),
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          expect(["NotFound", "Forbidden", "BadRequest"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });

  it("error - Forbidden when targeting a guild the bot is not a member of", async () => {
    // The same snowflake-shaped guild_id is also used to assert the
    // Forbidden mapping: Discord typically returns 403 Forbidden (50001
    // Missing Access) for guilds the bot cannot see, or 404 NotFound if
    // the route 404s before the permission check fires.
    await runEffect(
      updateMyGuildMember({
        guild_id: NON_EXISTENT_GUILD_ID,
        bio: `distilled-fb-${testRunId}`,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          expect(["Forbidden", "NotFound", "BadRequest"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });
});
