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

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// DELETE /guilds/{guild_id}/bans/{user_id} removes a guild ban. Requires
// BAN_MEMBERS. Happy path is gated on DISCORD_TEST_GUILD_ID; the test bans
// a synthetic user snowflake first and then unbans it. Discord accepts any
// well-formed snowflake for the ban list, so no real user is affected.
const TEST_GUILD_ID = process.env.DISCORD_TEST_GUILD_ID;

// A synthetic but well-formed snowflake derived from testRunId so it doesn't
// collide with another concurrent run. Discord snowflakes are 17-19 digit
// numbers; 17 digits keeps us comfortably within range.
const syntheticUserId = `2000000000000${testRunId.slice(0, 4)}`;

describe("unbanUserFromGuild", () => {
  it.skipIf(!TEST_GUILD_ID)(
    "happy path - unbans a previously banned synthetic user",
    async () => {
      await runEffect(
        banUserFromGuild({
          guild_id: TEST_GUILD_ID!,
          user_id: syntheticUserId,
        }),
      );
      try {
        const result = await runEffect(
          unbanUserFromGuild({
            guild_id: TEST_GUILD_ID!,
            user_id: syntheticUserId,
          }),
        );
        // Endpoint returns 204 No Content; the typed output is void.
        expect(result).toBeUndefined();
      } finally {
        // Defensive cleanup in case the unban above failed midway.
        await runEffect(
          unbanUserFromGuild({
            guild_id: TEST_GUILD_ID!,
            user_id: syntheticUserId,
          }).pipe(Effect.ignore),
        );
      }
    },
    { timeout: 30_000 },
  );

  it("error - NotFound when the user is not banned", async () => {
    // A user_id that has never been banned in the test guild. Discord
    // typically surfaces this as NotFound, but may route as Forbidden
    // (insufficient access) or BadRequest depending on guild access
    // ordering.
    const guildId =
      TEST_GUILD_ID ?? `1000000000000000${testRunId.slice(0, 2)}`;
    const neverBannedUserId = `3000000000000${testRunId.slice(4, 8)}`;
    await runEffect(
      unbanUserFromGuild({
        guild_id: guildId,
        user_id: neverBannedUserId,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden", "BadRequest"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });

  it("error - Forbidden for an inaccessible guild", async () => {
    // A guild snowflake the bot is unlikely to have access to. Discord may
    // surface this as Forbidden, NotFound (to avoid leaking existence), or
    // BadRequest.
    const inaccessibleGuildId = "100000000000000001";
    await runEffect(
      unbanUserFromGuild({
        guild_id: inaccessibleGuildId,
        user_id: "100000000000000002",
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
