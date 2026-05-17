import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { CredentialsFromEnv } from "../src/credentials.ts";
import { listGuildMembers } from "../src/operations/listGuildMembers.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// GET /guilds/{guild_id}/members lists members of a guild. Requires the
// GUILD_MEMBERS privileged gateway intent. The bot must be a member of the
// guild. The list is allowed to be empty in theory, but a real test guild
// will always include at least the bot itself.
const TEST_GUILD_ID = process.env.DISCORD_TEST_GUILD_ID;

// Snowflake-shaped ids unlikely to resolve to any real guild.
const NON_EXISTENT_GUILD_ID = `1000000000000000${testRunId.slice(0, 2)}`;
const INACCESSIBLE_GUILD_ID = "100000000000000001";

describe("listGuildMembers", () => {
  it.skipIf(!TEST_GUILD_ID)(
    "happy path - lists members in a guild",
    async () => {
      const result = await runEffect(
        listGuildMembers({ guild_id: TEST_GUILD_ID!, limit: 5 }),
      );
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBeLessThanOrEqual(5);
      for (const member of result) {
        expect(typeof member.user.id).toBe("string");
        expect(typeof member.user.username).toBe("string");
        expect(typeof member.joined_at).toBe("string");
        expect(Array.isArray(member.roles)).toBe(true);
        expect(typeof member.flags).toBe("number");
        expect(typeof member.pending).toBe("boolean");
        expect(typeof member.mute).toBe("boolean");
        expect(typeof member.deaf).toBe("boolean");
        expect(member.nick === null || typeof member.nick === "string").toBe(
          true,
        );
        expect(
          member.avatar === null || typeof member.avatar === "string",
        ).toBe(true);
      }
    },
    { timeout: 30_000 },
  );

  it("error - NotFound for a non-existent guild_id", async () => {
    await runEffect(
      listGuildMembers({ guild_id: NON_EXISTENT_GUILD_ID }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord surfaces a missing guild as NotFound. Bot tokens calling
          // for a guild they aren't a member of typically receive Forbidden,
          // and malformed snowflakes may surface as BadRequest.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden", "BadRequest"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });

  it("error - Forbidden or NotFound for a guild the bot is not a member of", async () => {
    await runEffect(
      listGuildMembers({ guild_id: INACCESSIBLE_GUILD_ID }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // The bot can only list members in guilds it's a member of, and
          // requires the GUILD_MEMBERS privileged intent; for any other
          // guild Discord returns Forbidden, but it often returns NotFound
          // to avoid leaking existence.
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
