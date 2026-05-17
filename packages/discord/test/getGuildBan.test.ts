import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { banUserFromGuild } from "../src/operations/banUserFromGuild.ts";
import { getGuildBan } from "../src/operations/getGuildBan.ts";
import { unbanUserFromGuild } from "../src/operations/unbanUserFromGuild.ts";
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
//   - a guild the bot is in with BAN_MEMBERS permission.
//   - the user_id (snowflake) of a user the bot is allowed to ban. The
//     happy path bans the user, fetches the ban record, then unbans them.
//     The operator must supply DISCORD_TEST_BANNABLE_USER_ID — a throwaway
//     test account the bot can safely ban/unban.
const TEST_GUILD_ID = process.env.DISCORD_TEST_GUILD_ID;
const TEST_BANNABLE_USER_ID = process.env.DISCORD_TEST_BANNABLE_USER_ID;

// Snowflake-format identifiers that should not match real resources.
const NON_EXISTENT_GUILD_ID = "100000000000000000";
const NON_EXISTENT_USER_ID = "100000000000000001";

describe("getGuildBan", () => {
  it("happy path - bans a user, fetches the ban record, then unbans them", async () => {
    if (!TEST_GUILD_ID || !TEST_BANNABLE_USER_ID) {
      throw new Error(
        "DISCORD_TEST_GUILD_ID and DISCORD_TEST_BANNABLE_USER_ID env vars are required for the getGuildBan happy path. The user_id must be a throwaway test account the bot can safely ban/unban.",
      );
    }
    await runEffect(
      Effect.gen(function* () {
        yield* banUserFromGuild({
          guild_id: TEST_GUILD_ID,
          user_id: TEST_BANNABLE_USER_ID,
          delete_message_seconds: 0,
        });
        return yield* Effect.gen(function* () {
          const ban = yield* getGuildBan({
            guild_id: TEST_GUILD_ID,
            user_id: TEST_BANNABLE_USER_ID,
          });
          expect(ban.user.id).toBe(TEST_BANNABLE_USER_ID);
          expect(typeof ban.user.username).toBe("string");
          expect(typeof ban.user.discriminator).toBe("string");
          // reason is nullable; assert null-or-string when present.
          if (ban.reason !== null) {
            expect(typeof ban.reason).toBe("string");
          }
        }).pipe(
          Effect.ensuring(
            unbanUserFromGuild({
              guild_id: TEST_GUILD_ID,
              user_id: TEST_BANNABLE_USER_ID,
            }).pipe(Effect.ignore),
          ),
        );
      }),
    );
  });

  it("error - NotFound for a user that is not banned in the guild", async () => {
    if (!TEST_GUILD_ID) {
      throw new Error(
        "DISCORD_TEST_GUILD_ID env var is required for the NotFound test",
      );
    }
    await runEffect(
      getGuildBan({
        guild_id: TEST_GUILD_ID,
        user_id: NON_EXISTENT_USER_ID,
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
      getGuildBan({
        guild_id: NON_EXISTENT_GUILD_ID,
        user_id: NON_EXISTENT_USER_ID,
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
