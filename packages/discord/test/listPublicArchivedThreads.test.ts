import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { CredentialsFromEnv } from "../src/credentials.ts";
import { listPublicArchivedThreads } from "../src/operations/listPublicArchivedThreads.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// GET /channels/{channel_id}/threads/archived/public lists all public archived
// threads in a channel. Requires READ_MESSAGE_HISTORY. Happy path is gated on
// DISCORD_TEST_CHANNEL_ID since it requires a real channel id.
const TEST_CHANNEL_ID = process.env.DISCORD_TEST_CHANNEL_ID;

describe("listPublicArchivedThreads", () => {
  it.skipIf(!TEST_CHANNEL_ID)(
    "happy path - lists public archived threads in a channel",
    async () => {
      const result = await runEffect(
        listPublicArchivedThreads({
          channel_id: TEST_CHANNEL_ID!,
          limit: 5,
        }),
      );
      expect(Array.isArray(result.threads)).toBe(true);
      expect(Array.isArray(result.members)).toBe(true);
      expect(typeof result.has_more).toBe("boolean");
      for (const thread of result.threads) {
        expect(typeof thread.id).toBe("string");
        expect(typeof thread.flags).toBe("number");
        if (thread.name !== undefined && thread.name !== null) {
          expect(typeof thread.name).toBe("string");
        }
        if (thread.guild_id !== undefined && thread.guild_id !== null) {
          expect(typeof thread.guild_id).toBe("string");
        }
        if (thread.owner_id !== undefined && thread.owner_id !== null) {
          expect(typeof thread.owner_id).toBe("string");
        }
        if (thread.thread_metadata !== undefined) {
          expect(typeof thread.thread_metadata.archived).toBe("boolean");
          expect(typeof thread.thread_metadata.locked).toBe("boolean");
          expect(typeof thread.thread_metadata.archive_timestamp).toBe(
            "string",
          );
        }
      }
      for (const member of result.members) {
        if (member.id !== undefined && member.id !== null) {
          expect(typeof member.id).toBe("string");
        }
        if (member.user_id !== undefined && member.user_id !== null) {
          expect(typeof member.user_id).toBe("string");
        }
      }
    },
    { timeout: 30_000 },
  );

  it("error - NotFound for a non-existent channel id", async () => {
    const fakeChannelId = `1000000000000000${testRunId.slice(0, 2)}`;
    await runEffect(
      listPublicArchivedThreads({ channel_id: fakeChannelId }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord may return NotFound (channel does not exist), Forbidden
          // (bot cannot see the channel), or BadRequest depending on routing.
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
      listPublicArchivedThreads({
        channel_id: inaccessibleChannelId,
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
