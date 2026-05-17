import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { CredentialsFromEnv } from "../src/credentials.ts";
import { threadSearch } from "../src/operations/threadSearch.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// GET /channels/{channel_id}/threads/search searches threads in a forum or
// media channel. Requires READ_MESSAGE_HISTORY. Happy path is gated on
// DISCORD_TEST_FORUM_CHANNEL_ID — must be a forum/media channel.
const TEST_FORUM_CHANNEL_ID = process.env.DISCORD_TEST_FORUM_CHANNEL_ID;

describe("threadSearch", () => {
  it.skipIf(!TEST_FORUM_CHANNEL_ID)(
    "happy path - searches threads in a forum channel",
    async () => {
      const result = await runEffect(
        threadSearch({
          channel_id: TEST_FORUM_CHANNEL_ID!,
          limit: 5,
        }),
      );
      expect(Array.isArray(result.threads)).toBe(true);
      for (const thread of result.threads) {
        expect(typeof thread.id).toBe("string");
        expect(typeof thread.guild_id).toBe("string");
        expect(typeof thread.name).toBe("string");
        expect(typeof thread.owner_id).toBe("string");
        expect(typeof thread.flags).toBe("number");
        expect(typeof thread.message_count).toBe("number");
        expect(typeof thread.member_count).toBe("number");
        expect(typeof thread.total_message_sent).toBe("number");
        expect(typeof thread.thread_metadata.archived).toBe("boolean");
        expect(typeof thread.thread_metadata.locked).toBe("boolean");
      }
    },
    { timeout: 30_000 },
  );

  it("error - NotFound for a non-existent channel id", async () => {
    const fakeChannelId = `1000000000000000${testRunId.slice(0, 2)}`;
    await runEffect(
      threadSearch({ channel_id: fakeChannelId, limit: 1 }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord may return NotFound (channel does not exist), Forbidden
          // (bot cannot see the channel), or BadRequest (channel is not a
          // forum/media channel) depending on routing.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden", "BadRequest"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });

  it("error - Forbidden for an inaccessible channel", async () => {
    // A snowflake the bot is unlikely to have access to. Discord may surface
    // this as Forbidden, NotFound (to avoid leaking existence), or BadRequest.
    const inaccessibleChannelId = "100000000000000001";
    await runEffect(
      threadSearch({ channel_id: inaccessibleChannelId, limit: 1 }).pipe(
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
