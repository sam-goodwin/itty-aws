import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { getGuild } from "../src/operations/getGuild.ts";
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
//   - the guild_id (snowflake) of a guild the bot is a member of.
const TEST_GUILD_ID = process.env.DISCORD_TEST_GUILD_ID;

// Snowflake-format identifier that should not match a real guild.
const NON_EXISTENT_GUILD_ID = "100000000000000000";

describe("getGuild", () => {
  it("happy path - fetches a guild by id with counts", async () => {
    if (!TEST_GUILD_ID) {
      throw new Error(
        "DISCORD_TEST_GUILD_ID env var is required for the getGuild happy path",
      );
    }
    const result = await runEffect(
      getGuild({ guild_id: TEST_GUILD_ID, with_counts: true }),
    );
    expect(result.id).toBe(TEST_GUILD_ID);
    expect(typeof result.name).toBe("string");
    expect(typeof result.owner_id).toBe("string");
    expect(Array.isArray(result.roles)).toBe(true);
    expect(Array.isArray(result.emojis)).toBe(true);
    expect(Array.isArray(result.stickers)).toBe(true);
    expect(typeof result.system_channel_flags).toBe("number");
    if (result.approximate_member_count !== undefined && result.approximate_member_count !== null) {
      expect(typeof result.approximate_member_count).toBe("number");
    }
  });

  it("error - NotFound for non-existent guild_id", async () => {
    await runEffect(
      getGuild({ guild_id: NON_EXISTENT_GUILD_ID }).pipe(
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
      getGuild({ guild_id: NON_EXISTENT_GUILD_ID }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["Forbidden", "NotFound"]).toContain((e as any)._tag);
        }),
      ),
    );
  });
});
