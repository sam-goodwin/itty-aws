import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { CredentialsFromEnv } from "../src/credentials.ts";
import { listGuildBans } from "../src/operations/listGuildBans.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// GET /guilds/{guild_id}/bans lists banned users for a guild. Requires
// the bot to have BAN_MEMBERS in the guild. The list is allowed to be
// empty.
const TEST_GUILD_ID = process.env.DISCORD_TEST_GUILD_ID;

// Snowflake-shaped ids unlikely to resolve to any real guild.
const NON_EXISTENT_GUILD_ID = `1000000000000000${testRunId.slice(0, 2)}`;
const INACCESSIBLE_GUILD_ID = "100000000000000001";

describe("listGuildBans", () => {
  it.skipIf(!TEST_GUILD_ID)(
    "happy path - lists bans for a guild",
    async () => {
      const result = await runEffect(
        listGuildBans({ guild_id: TEST_GUILD_ID!, limit: 5 }),
      );
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBeLessThanOrEqual(5);
      for (const ban of result) {
        expect(typeof ban.user.id).toBe("string");
        expect(typeof ban.user.username).toBe("string");
        expect(typeof ban.user.discriminator).toBe("string");
        expect(
          ban.user.avatar === null || typeof ban.user.avatar === "string",
        ).toBe(true);
        expect(ban.reason === null || typeof ban.reason === "string").toBe(
          true,
        );
      }
    },
    { timeout: 30_000 },
  );

  it("error - NotFound for a non-existent guild_id", async () => {
    await runEffect(
      listGuildBans({ guild_id: NON_EXISTENT_GUILD_ID }).pipe(
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

  it("error - Forbidden or NotFound for a guild the bot cannot access", async () => {
    await runEffect(
      listGuildBans({ guild_id: INACCESSIBLE_GUILD_ID }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // The bot can only list bans in guilds it's a member of with
          // BAN_MEMBERS; for any other guild Discord returns Forbidden, but
          // it often returns NotFound to avoid leaking existence.
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
