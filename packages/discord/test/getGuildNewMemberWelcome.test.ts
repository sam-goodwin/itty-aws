import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { getGuildNewMemberWelcome } from "../src/operations/getGuildNewMemberWelcome.ts";
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
//   - a Community guild the bot is in with MANAGE_GUILD permission and the
//     new-member-welcome experience configured. Operators must supply
//     DISCORD_TEST_GUILD_ID_WITH_NEW_MEMBER_WELCOME pointing to such a guild;
//     plain test guilds without the feature return 404.
const TEST_GUILD_ID_WITH_NEW_MEMBER_WELCOME =
  process.env.DISCORD_TEST_GUILD_ID_WITH_NEW_MEMBER_WELCOME;

// Snowflake-format identifier that should not match a real guild.
const NON_EXISTENT_GUILD_ID = "100000000000000000";

describe("getGuildNewMemberWelcome", () => {
  it("happy path - fetches the new-member welcome configuration for the guild", async () => {
    if (!TEST_GUILD_ID_WITH_NEW_MEMBER_WELCOME) {
      throw new Error(
        "DISCORD_TEST_GUILD_ID_WITH_NEW_MEMBER_WELCOME env var is required for the getGuildNewMemberWelcome happy path. The guild must be a Community guild with the new-member-welcome experience configured; otherwise Discord returns 404.",
      );
    }
    const result = await runEffect(
      getGuildNewMemberWelcome({
        guild_id: TEST_GUILD_ID_WITH_NEW_MEMBER_WELCOME,
      }),
    );
    expect(result.guild_id).toBe(TEST_GUILD_ID_WITH_NEW_MEMBER_WELCOME);
    expect(typeof result.enabled).toBe("boolean");
    expect(Array.isArray(result.new_member_actions)).toBe(true);
    expect(Array.isArray(result.resource_channels)).toBe(true);
    for (const action of result.new_member_actions) {
      expect(typeof action.channel_id).toBe("string");
      expect(typeof action.title).toBe("string");
      expect(typeof action.description).toBe("string");
    }
    for (const resource of result.resource_channels) {
      expect(typeof resource.channel_id).toBe("string");
      expect(typeof resource.title).toBe("string");
      expect(typeof resource.description).toBe("string");
    }
  });

  it("error - NotFound for non-existent guild_id", async () => {
    await runEffect(
      getGuildNewMemberWelcome({ guild_id: NON_EXISTENT_GUILD_ID }).pipe(
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

  it("error - Forbidden when targeting a guild the bot is not a member of", async () => {
    // Calling against a snowflake-shaped guild_id the bot does not see
    // typically yields Forbidden (50001 Missing Access), or NotFound if the
    // route resolves the guild before the permission check.
    await runEffect(
      getGuildNewMemberWelcome({ guild_id: NON_EXISTENT_GUILD_ID }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["Forbidden", "NotFound"]).toContain((e as any)._tag);
        }),
      ),
    );
  });
});
