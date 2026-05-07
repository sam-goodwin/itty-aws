import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { CredentialsFromEnv } from "../src/credentials.ts";
import { leaveGuild } from "../src/operations/leaveGuild.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// DELETE /users/@me/guilds/{guild_id} — the current user (bot) leaves the
// guild. This is a one-way destructive operation: after success the bot is
// no longer a member of the guild and must be re-invited to run the happy
// path again. The operator must set DISCORD_TEST_LEAVE_GUILD_ID to a
// throwaway guild the bot has been added to specifically for this test.
//
// A bot cannot leave a guild it owns; for owned guilds Discord returns
// BadRequest. The operator-supplied guild must therefore be one the bot
// does not own.
const TEST_LEAVE_GUILD_ID = process.env.DISCORD_TEST_LEAVE_GUILD_ID;

// Snowflake-shaped ids unlikely to resolve to any real guild membership.
const NON_EXISTENT_GUILD_ID = `1000000000000000${testRunId.slice(0, 2)}`;
const INACCESSIBLE_GUILD_ID = "100000000000000001";

describe("leaveGuild", () => {
  it(
    "happy path - the bot leaves a guild",
    async () => {
      if (!TEST_LEAVE_GUILD_ID) {
        throw new Error(
          "DISCORD_TEST_LEAVE_GUILD_ID env var is required for the leaveGuild happy path. " +
            "Set it to a throwaway guild id the bot has been invited to. The bot will be removed " +
            "from this guild on success and must be re-invited before re-running.",
        );
      }
      const result = await runEffect(
        leaveGuild({ guild_id: TEST_LEAVE_GUILD_ID }),
      );
      // Discord returns 204 No Content on success.
      expect(result).toBeUndefined();
    },
    { timeout: 30_000 },
  );

  it("error - NotFound for a guild the bot is not a member of", async () => {
    await runEffect(
      leaveGuild({ guild_id: NON_EXISTENT_GUILD_ID }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord surfaces a missing membership as NotFound (10004 — Unknown
          // Guild). Some malformed snowflakes may surface as BadRequest.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden", "BadRequest"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });

  it("error - Forbidden or NotFound for a guild the caller cannot leave", async () => {
    await runEffect(
      leaveGuild({ guild_id: INACCESSIBLE_GUILD_ID }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // A guild id the bot is not a member of typically surfaces as
          // NotFound, but Discord can also classify ownership conflicts as
          // Forbidden or BadRequest.
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
