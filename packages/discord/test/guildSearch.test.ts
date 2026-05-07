import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { CredentialsFromEnv } from "../src/credentials.ts";
import { guildSearch } from "../src/operations/guildSearch.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// GET /guilds/{guild_id}/messages/search runs the guild's message search
// index. Historically this route is restricted to user accounts and is
// rejected for bot tokens, so the happy path is gated on
// DISCORD_TEST_GUILD_ID and may require user-token credentials to pass.
const TEST_GUILD_ID = process.env.DISCORD_TEST_GUILD_ID;

// Snowflake-shaped ids unlikely to resolve to any real guild.
const NON_EXISTENT_GUILD_ID = `1000000000000000${testRunId.slice(0, 2)}`;
const INACCESSIBLE_GUILD_ID = "100000000000000001";

describe("guildSearch", () => {
  it(
    "happy path - searches a guild's messages",
    async () => {
      if (!TEST_GUILD_ID) {
        throw new Error(
          "DISCORD_TEST_GUILD_ID env var is required for the guildSearch happy path. " +
            "Note that Discord typically restricts /guilds/{guild_id}/messages/search to user accounts.",
        );
      }
      const result = await runEffect(
        guildSearch({
          guild_id: TEST_GUILD_ID,
          content: `distilled-test-${testRunId}`,
          limit: 1,
        }),
      );
      expect(Array.isArray(result.messages)).toBe(true);
      expect(typeof result.total_results).toBe("number");
      expect(result.total_results).toBeGreaterThanOrEqual(0);
      expect(typeof result.doing_deep_historical_index).toBe("boolean");
      for (const group of result.messages) {
        expect(Array.isArray(group)).toBe(true);
        for (const m of group) {
          expect(typeof m.id).toBe("string");
          expect(typeof m.channel_id).toBe("string");
          expect(typeof m.content).toBe("string");
          expect(typeof m.timestamp).toBe("string");
          expect(typeof m.hit).toBe("boolean");
        }
      }
    },
    { timeout: 30_000 },
  );

  it("error - NotFound for a non-existent guild_id", async () => {
    await runEffect(
      guildSearch({
        guild_id: NON_EXISTENT_GUILD_ID,
        content: `distilled-test-${testRunId}`,
        limit: 1,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord surfaces a missing guild as NotFound. Some routes resolve
          // to Forbidden (notably for bot tokens on this user-only endpoint),
          // and malformed snowflakes as BadRequest.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden", "BadRequest"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });

  it("error - Forbidden or NotFound for a guild the caller cannot access", async () => {
    await runEffect(
      guildSearch({
        guild_id: INACCESSIBLE_GUILD_ID,
        content: `distilled-test-${testRunId}`,
        limit: 1,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Bots calling this user-only endpoint typically receive Forbidden;
          // a guild the caller is not in often returns NotFound to avoid
          // leaking existence.
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
