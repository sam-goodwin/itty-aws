import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { getGuildMember } from "../src/operations/getGuildMember.ts";
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
//   - the user_id (snowflake) of a member of that guild. The bot is itself
//     a member, so DISCORD_TEST_BOT_USER_ID is a reliable target.
const TEST_GUILD_ID = process.env.DISCORD_TEST_GUILD_ID;
const TEST_BOT_USER_ID = process.env.DISCORD_TEST_BOT_USER_ID;

// Snowflake-format identifiers that should not match real resources.
const NON_EXISTENT_GUILD_ID = "100000000000000000";
const NON_EXISTENT_USER_ID = "100000000000000001";

describe("getGuildMember", () => {
  it("happy path - fetches the bot's own member record in the configured guild", async () => {
    if (!TEST_GUILD_ID || !TEST_BOT_USER_ID) {
      throw new Error(
        "DISCORD_TEST_GUILD_ID and DISCORD_TEST_BOT_USER_ID env vars are required for the getGuildMember happy path",
      );
    }
    const result = await runEffect(
      getGuildMember({
        guild_id: TEST_GUILD_ID,
        user_id: TEST_BOT_USER_ID,
      }),
    );
    expect(result.user.id).toBe(TEST_BOT_USER_ID);
    expect(typeof result.user.username).toBe("string");
    expect(typeof result.joined_at).toBe("string");
    expect(Array.isArray(result.roles)).toBe(true);
    expect(typeof result.flags).toBe("number");
    expect(typeof result.pending).toBe("boolean");
    expect(typeof result.mute).toBe("boolean");
    expect(typeof result.deaf).toBe("boolean");
  });

  it("error - NotFound for a user that is not a member of the guild", async () => {
    if (!TEST_GUILD_ID) {
      throw new Error(
        "DISCORD_TEST_GUILD_ID env var is required for the NotFound test",
      );
    }
    await runEffect(
      getGuildMember({
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
      getGuildMember({
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
