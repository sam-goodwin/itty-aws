import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { deleteGuildMember } from "../src/operations/deleteGuildMember.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// deleteGuildMember kicks a real user out of a real guild. New members can
// only be added via OAuth2 access tokens (PUT /guilds/{guild_id}/members
// requires the joined user's access_token, which we cannot mint here), so
// the happy path requires a pre-existing throwaway member plus an opt-in
// flag. The kicked user can rejoin via invite afterwards.
const TEST_GUILD_ID = process.env.DISCORD_TEST_GUILD_ID;
const TEST_KICK_USER_ID = process.env.DISCORD_TEST_KICK_USER_ID;
const ALLOW_KICK_MEMBER =
  process.env.DISCORD_TEST_ALLOW_KICK_MEMBER === "1";

// Snowflake-format identifiers that should not match real entities.
const NON_EXISTENT_GUILD_ID = "100000000000000000";
const NON_EXISTENT_USER_ID = "100000000000000001";

describe("deleteGuildMember", () => {
  it(
    "happy path - kicks a pre-existing throwaway member from the guild",
    async () => {
      if (!TEST_GUILD_ID || !TEST_KICK_USER_ID || !ALLOW_KICK_MEMBER) {
        throw new Error(
          "DISCORD_TEST_GUILD_ID, DISCORD_TEST_KICK_USER_ID and DISCORD_TEST_ALLOW_KICK_MEMBER=1 are required for the deleteGuildMember happy path. " +
            `(testRunId=${testRunId})`,
        );
      }
      const result = await runEffect(
        deleteGuildMember({
          guild_id: TEST_GUILD_ID,
          user_id: TEST_KICK_USER_ID,
        }),
      );
      // 204 No Content; output schema is Void.
      expect(result).toBeUndefined();
    },
    30_000,
  );

  it("error - NotFound for a user_id that is not a member of the guild", async () => {
    if (!TEST_GUILD_ID) {
      throw new Error(
        "DISCORD_TEST_GUILD_ID env var is required for the NotFound test",
      );
    }
    // A snowflake-shaped user_id that is not a member of the guild yields
    // 404 NotFound (10007). Discord may also surface 403 Forbidden depending
    // on which check fires first.
    await runEffect(
      deleteGuildMember({
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

  it("error - Forbidden for a guild_id the bot is not in", async () => {
    // A guild_id the bot is not a member of typically yields 403 Forbidden
    // (50001 Missing Access), or 404 NotFound if the route 404s before the
    // permission check.
    await runEffect(
      deleteGuildMember({
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
