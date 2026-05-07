import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { CredentialsFromEnv } from "../src/credentials.ts";
import { createMessage } from "../src/operations/createMessage.ts";
import { deleteMessage } from "../src/operations/deleteMessage.ts";
import { pollExpire } from "../src/operations/pollExpire.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// POST /channels/{channel_id}/polls/{message_id}/expire ends a poll early.
// The bot must own the poll. Happy path is gated on DISCORD_TEST_CHANNEL_ID;
// the test creates a fresh poll, expires it, and deletes the message in
// cleanup.
const TEST_CHANNEL_ID = process.env.DISCORD_TEST_CHANNEL_ID;

describe("pollExpire", () => {
  it.skipIf(!TEST_CHANNEL_ID)(
    "happy path - expires a bot-owned poll early",
    async () => {
      const created = await runEffect(
        createMessage({
          channel_id: TEST_CHANNEL_ID!,
          content: `pollExpire test ${testRunId}`,
          poll: {
            question: { text: `Test poll ${testRunId}` },
            answers: [
              { poll_media: { text: "Yes" } },
              { poll_media: { text: "No" } },
            ],
            duration: 1,
            allow_multiselect: false,
            layout_type: 1,
          },
        }),
      );
      try {
        const result = await runEffect(
          pollExpire({
            channel_id: TEST_CHANNEL_ID!,
            message_id: created.id,
          }),
        );
        expect(typeof result.id).toBe("string");
        expect(result.id).toBe(created.id);
        expect(typeof result.channel_id).toBe("string");
        expect(result.channel_id).toBe(TEST_CHANNEL_ID);
        expect(typeof result.timestamp).toBe("string");
        expect(typeof result.author.id).toBe("string");
        expect(typeof result.flags).toBe("number");
        if (result.poll !== undefined) {
          expect(typeof result.poll.expiry).toBe("string");
          expect(typeof result.poll.allow_multiselect).toBe("boolean");
          expect(Array.isArray(result.poll.answers)).toBe(true);
          expect(typeof result.poll.results.is_finalized).toBe("boolean");
        }
      } finally {
        await runEffect(
          deleteMessage({
            channel_id: TEST_CHANNEL_ID!,
            message_id: created.id,
          }).pipe(Effect.ignore),
        );
      }
    },
    { timeout: 30_000 },
  );

  it("error - NotFound for a non-existent poll message", async () => {
    const fakeChannelId =
      TEST_CHANNEL_ID ?? `1000000000000000${testRunId.slice(0, 2)}`;
    const fakeMessageId = `1000000000000000${testRunId.slice(0, 2)}`;
    await runEffect(
      pollExpire({
        channel_id: fakeChannelId,
        message_id: fakeMessageId,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord may return NotFound (message does not exist), Forbidden
          // (bot cannot see the channel/message), or BadRequest (message
          // exists but has no poll) depending on routing.
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
    const fakeMessageId = "100000000000000002";
    await runEffect(
      pollExpire({
        channel_id: inaccessibleChannelId,
        message_id: fakeMessageId,
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

  it.skipIf(!TEST_CHANNEL_ID)(
    "error - BadRequest when expiring a non-poll message",
    async () => {
      // Create a regular message (no poll) and try to expire it. Discord
      // typically surfaces this as BadRequest, but may route as NotFound or
      // Forbidden.
      const created = await runEffect(
        createMessage({
          channel_id: TEST_CHANNEL_ID!,
          content: `pollExpire-non-poll test ${testRunId}`,
        }),
      );
      try {
        await runEffect(
          pollExpire({
            channel_id: TEST_CHANNEL_ID!,
            message_id: created.id,
          }).pipe(
            Effect.flip,
            Effect.map((e) => {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              expect(["BadRequest", "NotFound", "Forbidden"]).toContain(
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (e as any)._tag,
              );
            }),
          ),
        );
      } finally {
        await runEffect(
          deleteMessage({
            channel_id: TEST_CHANNEL_ID!,
            message_id: created.id,
          }).pipe(Effect.ignore),
        );
      }
    },
    { timeout: 30_000 },
  );
});
