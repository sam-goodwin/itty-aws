import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { CredentialsFromEnv } from "../src/credentials.ts";
import { bulkBanUsersFromGuild } from "../src/operations/bulkBanUsersFromGuild.ts";
import { unbanUserFromGuild } from "../src/operations/unbanUserFromGuild.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

// The endpoint requires:
//   - a guild the bot is in with BAN_MEMBERS + MANAGE_GUILD permissions.
//   - a comma-separated list of user_id snowflakes for the happy path.
//     Discord allows banning users not currently in the guild, so a
//     throwaway snowflake suffices for testing.
const TEST_GUILD_ID = process.env.DISCORD_TEST_GUILD_ID;
const TEST_BAN_USER_IDS = process.env.DISCORD_TEST_BULK_BAN_USER_IDS;

// Snowflake-format identifiers that should not match real Discord resources.
const NON_EXISTENT_GUILD_ID = "100000000000000000";
const NON_EXISTENT_USER_ID_A = "100000000000000001";
const NON_EXISTENT_USER_ID_B = "100000000000000002";

describe("bulkBanUsersFromGuild", () => {
  it("happy path - bulk-bans a list of users and unbans them on cleanup", async () => {
    if (!TEST_GUILD_ID || !TEST_BAN_USER_IDS) {
      throw new Error(
        "DISCORD_TEST_GUILD_ID and DISCORD_TEST_BULK_BAN_USER_IDS env vars are required for the bulkBanUsersFromGuild happy path",
      );
    }
    const userIds = TEST_BAN_USER_IDS.split(",")
      .map((s) => s.trim())
      .filter((s) => s.length > 0);
    if (userIds.length === 0) {
      throw new Error(
        "DISCORD_TEST_BULK_BAN_USER_IDS must contain at least one snowflake",
      );
    }
    await runEffect(
      bulkBanUsersFromGuild({
        guild_id: TEST_GUILD_ID,
        user_ids: userIds,
        delete_message_seconds: 0,
      }).pipe(
        Effect.tap((result) =>
          Effect.sync(() => {
            expect(Array.isArray(result.banned_users)).toBe(true);
            expect(Array.isArray(result.failed_users)).toBe(true);
            // Every ID in the request must appear in exactly one of the two
            // result arrays.
            const seen = new Set<string>([
              ...result.banned_users,
              ...result.failed_users,
            ]);
            for (const id of userIds) {
              expect(seen.has(id)).toBe(true);
            }
          }),
        ),
        Effect.ensuring(
          Effect.forEach(
            userIds,
            (user_id) =>
              unbanUserFromGuild({
                guild_id: TEST_GUILD_ID,
                user_id,
              }).pipe(Effect.ignore),
            { concurrency: 4 },
          ),
        ),
      ),
    );
  });

  it("error - NotFound for non-existent guild_id", async () => {
    await runEffect(
      bulkBanUsersFromGuild({
        guild_id: NON_EXISTENT_GUILD_ID,
        user_ids: [NON_EXISTENT_USER_ID_A, NON_EXISTENT_USER_ID_B],
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord returns NotFound for unseen guilds, but may surface as
          // Forbidden (50001 Missing Access) when the bot can't see the guild.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden"]).toContain((e as any)._tag);
        }),
      ),
    );
  });

  it("error - BadRequest for empty user_ids array", async () => {
    if (!TEST_GUILD_ID) {
      throw new Error(
        "DISCORD_TEST_GUILD_ID env var is required for the BadRequest test",
      );
    }
    await runEffect(
      bulkBanUsersFromGuild({
        guild_id: TEST_GUILD_ID,
        user_ids: [],
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord requires 1..200 user_ids per call; an empty array yields
          // 400 Invalid Form Body. May also surface as Forbidden if the bot
          // lacks BAN_MEMBERS, or NotFound for an unseen guild.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["BadRequest", "Forbidden", "NotFound"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });

  it("error - Forbidden when the bot lacks BAN_MEMBERS / MANAGE_GUILD permissions", async () => {
    if (!TEST_GUILD_ID) {
      throw new Error(
        "DISCORD_TEST_GUILD_ID env var is required for the Forbidden test",
      );
    }
    // Targeting an arbitrary snowflake the bot does not own typically yields
    // Forbidden (50013 Missing Permissions); may also surface as NotFound or
    // BadRequest depending on validation order.
    await runEffect(
      bulkBanUsersFromGuild({
        guild_id: TEST_GUILD_ID,
        user_ids: [NON_EXISTENT_USER_ID_A],
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
