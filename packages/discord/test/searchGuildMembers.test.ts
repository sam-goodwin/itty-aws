import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { CredentialsFromEnv } from "../src/credentials.ts";
import { searchGuildMembers } from "../src/operations/searchGuildMembers.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// GET /guilds/{guild_id}/members/search searches members by username/nickname
// prefix. Requires the GUILD_MEMBERS privileged intent. Happy path is gated
// on DISCORD_TEST_GUILD_ID.
const TEST_GUILD_ID = process.env.DISCORD_TEST_GUILD_ID;

describe("searchGuildMembers", () => {
  it.skipIf(!TEST_GUILD_ID)(
    "happy path - searches guild members by query prefix",
    async () => {
      const result = await runEffect(
        searchGuildMembers({
          guild_id: TEST_GUILD_ID!,
          query: "a",
          limit: 5,
        }),
      );
      expect(Array.isArray(result)).toBe(true);
      for (const member of result) {
        expect(typeof member.flags).toBe("number");
        expect(typeof member.joined_at).toBe("string");
        expect(typeof member.pending).toBe("boolean");
        expect(typeof member.mute).toBe("boolean");
        expect(typeof member.deaf).toBe("boolean");
        expect(Array.isArray(member.roles)).toBe(true);
        expect(typeof member.user.id).toBe("string");
        expect(typeof member.user.username).toBe("string");
        expect(typeof member.user.discriminator).toBe("string");
      }
    },
    { timeout: 30_000 },
  );

  it("error - NotFound for a non-existent guild id", async () => {
    const fakeGuildId = `1000000000000000${testRunId.slice(0, 2)}`;
    await runEffect(
      searchGuildMembers({
        guild_id: fakeGuildId,
        query: `nonexistent-${testRunId}`,
        limit: 1,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord may return NotFound (guild does not exist), Forbidden
          // (bot is not in the guild), or BadRequest depending on routing.
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
    // A snowflake the bot is unlikely to have access to. Discord may surface
    // this as Forbidden, NotFound (to avoid leaking existence), or BadRequest.
    const inaccessibleGuildId = "100000000000000001";
    await runEffect(
      searchGuildMembers({
        guild_id: inaccessibleGuildId,
        query: `nonexistent-${testRunId}`,
        limit: 1,
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
