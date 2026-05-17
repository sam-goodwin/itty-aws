import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { CredentialsFromEnv } from "../src/credentials.ts";
import { listGuildScheduledEventUsers } from "../src/operations/listGuildScheduledEventUsers.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// GET /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/users
// lists users subscribed to a guild scheduled event. The bot must be a
// member of the guild. The list is allowed to be empty. The happy path
// requires the operator to supply DISCORD_TEST_GUILD_ID plus
// DISCORD_TEST_SCHEDULED_EVENT_ID for an event in that guild.
const TEST_GUILD_ID = process.env.DISCORD_TEST_GUILD_ID;
const TEST_SCHEDULED_EVENT_ID = process.env.DISCORD_TEST_SCHEDULED_EVENT_ID;

// Snowflake-shaped ids unlikely to resolve to any real guild/event.
const NON_EXISTENT_GUILD_ID = `1000000000000000${testRunId.slice(0, 2)}`;
const NON_EXISTENT_EVENT_ID = "100000000000000001";
const INACCESSIBLE_GUILD_ID = "100000000000000002";

describe("listGuildScheduledEventUsers", () => {
  it.skipIf(!TEST_GUILD_ID || !TEST_SCHEDULED_EVENT_ID)(
    "happy path - lists users subscribed to a guild scheduled event",
    async () => {
      const result = await runEffect(
        listGuildScheduledEventUsers({
          guild_id: TEST_GUILD_ID!,
          guild_scheduled_event_id: TEST_SCHEDULED_EVENT_ID!,
          with_member: true,
          limit: 5,
        }),
      );
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBeLessThanOrEqual(5);
      for (const entry of result) {
        expect(entry.guild_scheduled_event_id).toBe(TEST_SCHEDULED_EVENT_ID!);
        expect(typeof entry.user_id).toBe("string");
        if (entry.user) {
          expect(entry.user.id).toBe(entry.user_id);
          expect(typeof entry.user.username).toBe("string");
        }
        if (entry.member) {
          expect(typeof entry.member.joined_at).toBe("string");
          expect(Array.isArray(entry.member.roles)).toBe(true);
          expect(entry.member.user.id).toBe(entry.user_id);
        }
      }
    },
    { timeout: 30_000 },
  );

  it("error - NotFound for a non-existent scheduled event", async () => {
    await runEffect(
      listGuildScheduledEventUsers({
        guild_id: TEST_GUILD_ID ?? NON_EXISTENT_GUILD_ID,
        guild_scheduled_event_id: NON_EXISTENT_EVENT_ID,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord surfaces a missing event (or guild) as NotFound. Bot
          // tokens calling for a guild they aren't a member of typically
          // receive Forbidden, and malformed snowflakes may surface as
          // BadRequest.
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
      listGuildScheduledEventUsers({
        guild_id: INACCESSIBLE_GUILD_ID,
        guild_scheduled_event_id: NON_EXISTENT_EVENT_ID,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // The bot can only list event users in guilds it's a member of;
          // for any other guild Discord returns Forbidden, but it often
          // returns NotFound to avoid leaking existence.
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
