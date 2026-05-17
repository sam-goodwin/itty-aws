import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { getGuildJoinRequests } from "../src/operations/getGuildJoinRequests.ts";
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
//   - a guild the bot is in with MANAGE_GUILD permission. The guild must
//     have membership screening or join requests enabled (Community guild
//     with the join request review feature) for the response to contain
//     records — but the endpoint returns a valid (possibly empty) payload
//     even when the feature is disabled.
const TEST_GUILD_ID = process.env.DISCORD_TEST_GUILD_ID;

// Snowflake-format identifier that should not match a real guild.
const NON_EXISTENT_GUILD_ID = "100000000000000000";

describe("getGuildJoinRequests", () => {
  it("happy path - lists join requests for the configured guild", async () => {
    if (!TEST_GUILD_ID) {
      throw new Error(
        "DISCORD_TEST_GUILD_ID env var is required for the getGuildJoinRequests happy path",
      );
    }
    const result = await runEffect(
      getGuildJoinRequests({
        guild_id: TEST_GUILD_ID,
        limit: 5,
      }),
    );
    expect(typeof result).toBe("object");
    expect(result).not.toBeNull();
    if (result.total !== undefined) {
      expect(typeof result.total).toBe("number");
      expect(result.total).toBeGreaterThanOrEqual(0);
    }
    if (result.guild_join_requests !== undefined) {
      expect(Array.isArray(result.guild_join_requests)).toBe(true);
      for (const request of result.guild_join_requests) {
        expect(typeof request.id).toBe("string");
        expect(typeof request.created_at).toBe("string");
        expect(request.guild_id).toBe(TEST_GUILD_ID);
        expect(typeof request.user_id).toBe("string");
      }
    }
  });

  it("error - NotFound for non-existent guild_id", async () => {
    await runEffect(
      getGuildJoinRequests({ guild_id: NON_EXISTENT_GUILD_ID }).pipe(
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
      getGuildJoinRequests({ guild_id: NON_EXISTENT_GUILD_ID }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["Forbidden", "NotFound"]).toContain((e as any)._tag);
        }),
      ),
    );
  });
});
