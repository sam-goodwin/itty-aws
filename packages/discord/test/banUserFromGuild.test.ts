import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { CredentialsFromEnv } from "../src/credentials.ts";
import { banUserFromGuild } from "../src/operations/banUserFromGuild.ts";
import { unbanUserFromGuild } from "../src/operations/unbanUserFromGuild.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

// The endpoint requires:
//   - a guild the bot is in with BAN_MEMBERS permission
//   - a user_id (snowflake) of a user the bot is allowed to ban
//     (typically a throwaway test user not in the guild — Discord allows
//     banning users who are not currently a member of the guild)
const TEST_GUILD_ID = process.env.DISCORD_TEST_GUILD_ID;
const TEST_BAN_USER_ID = process.env.DISCORD_TEST_BAN_USER_ID;

// Snowflake-format identifiers that should not match real Discord resources.
const NON_EXISTENT_GUILD_ID = "100000000000000000";
const NON_EXISTENT_USER_ID = "100000000000000001";

describe("banUserFromGuild", () => {
  it("happy path - bans a user and unbans them on cleanup", async () => {
    if (!TEST_GUILD_ID || !TEST_BAN_USER_ID) {
      throw new Error(
        "DISCORD_TEST_GUILD_ID and DISCORD_TEST_BAN_USER_ID env vars are required for the banUserFromGuild happy path",
      );
    }
    await runEffect(
      banUserFromGuild({
        guild_id: TEST_GUILD_ID,
        user_id: TEST_BAN_USER_ID,
        delete_message_seconds: 0,
      }).pipe(
        Effect.tap((result) =>
          Effect.sync(() => {
            // Discord returns 204 No Content on success; the SDK decodes it to
            // void / undefined.
            expect(result).toBeUndefined();
          }),
        ),
        Effect.ensuring(
          unbanUserFromGuild({
            guild_id: TEST_GUILD_ID,
            user_id: TEST_BAN_USER_ID,
          }).pipe(Effect.ignore),
        ),
      ),
    );
  });

  it("error - NotFound for non-existent guild_id", async () => {
    await runEffect(
      banUserFromGuild({
        guild_id: NON_EXISTENT_GUILD_ID,
        user_id: TEST_BAN_USER_ID ?? NON_EXISTENT_USER_ID,
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

  it("error - BadRequest for invalid delete_message_seconds (out of range)", async () => {
    if (!TEST_GUILD_ID) {
      throw new Error(
        "DISCORD_TEST_GUILD_ID env var is required for the BadRequest test",
      );
    }
    await runEffect(
      banUserFromGuild({
        guild_id: TEST_GUILD_ID,
        user_id: TEST_BAN_USER_ID ?? NON_EXISTENT_USER_ID,
        // Discord's docs cap delete_message_seconds at 604800 (7 days).
        // Anything well beyond that range should be rejected as 400 Invalid
        // Form Body. May also surface as Forbidden if a permission check
        // fires before form validation.
        delete_message_seconds: 99_999_999,
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

  it("error - Forbidden when banning a user_id the bot lacks permission to ban", async () => {
    if (!TEST_GUILD_ID) {
      throw new Error(
        "DISCORD_TEST_GUILD_ID env var is required for the Forbidden test",
      );
    }
    // Attempting to ban an arbitrary snowflake the bot does not own and
    // cannot manage typically yields Forbidden (50013 Missing Permissions)
    // when the target's role is higher than the bot's, or NotFound when the
    // user does not exist at all.
    await runEffect(
      banUserFromGuild({
        guild_id: TEST_GUILD_ID,
        user_id: NON_EXISTENT_USER_ID,
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
