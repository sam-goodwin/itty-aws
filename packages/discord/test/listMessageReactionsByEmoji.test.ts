import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { CredentialsFromEnv } from "../src/credentials.ts";
import { addMyMessageReaction } from "../src/operations/addMyMessageReaction.ts";
import { createMessage } from "../src/operations/createMessage.ts";
import { deleteMessage } from "../src/operations/deleteMessage.ts";
import { getMyUser } from "../src/operations/getMyUser.ts";
import { listMessageReactionsByEmoji } from "../src/operations/listMessageReactionsByEmoji.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// GET /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}
// lists users who reacted to a message with a given emoji. The happy path
// posts a fresh message in an operator-supplied text channel
// (DISCORD_TEST_CHANNEL_ID), adds the bot's own reaction with a unicode
// emoji, lists reactors, asserts the bot's id is included, then deletes
// the message for cleanup. The bot must have SEND_MESSAGES,
// ADD_REACTIONS, and READ_MESSAGE_HISTORY in that channel.
const TEST_CHANNEL_ID = process.env.DISCORD_TEST_CHANNEL_ID;

// A simple unicode emoji (thumbs up).
const EMOJI = "\u{1F44D}";

// Snowflake-shaped ids unlikely to resolve to any real channel/message.
const NON_EXISTENT_CHANNEL_ID = `1000000000000000${testRunId.slice(0, 2)}`;
const NON_EXISTENT_MESSAGE_ID = "100000000000000001";
const INACCESSIBLE_CHANNEL_ID = "100000000000000002";

describe("listMessageReactionsByEmoji", () => {
  it.skipIf(!TEST_CHANNEL_ID)(
    "happy path - lists users who reacted with a given emoji",
    async () => {
      const me = await runEffect(getMyUser({}));
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const myId = (me as any).id as string;
      expect(typeof myId).toBe("string");

      const created = await runEffect(
        createMessage({
          channel_id: TEST_CHANNEL_ID!,
          content: `distilled-discord reaction list test ${testRunId}`,
        }),
      );
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const messageId = (created as any).id as string;
      expect(typeof messageId).toBe("string");

      try {
        await runEffect(
          addMyMessageReaction({
            channel_id: TEST_CHANNEL_ID!,
            message_id: messageId,
            emoji_name: EMOJI,
          }),
        );

        const result = await runEffect(
          listMessageReactionsByEmoji({
            channel_id: TEST_CHANNEL_ID!,
            message_id: messageId,
            emoji_name: EMOJI,
            limit: 25,
          }),
        );
        expect(Array.isArray(result)).toBe(true);
        expect(result.length).toBeGreaterThanOrEqual(1);
        const ids = result.map((u) => u.id);
        expect(ids).toContain(myId);
        for (const user of result) {
          expect(typeof user.id).toBe("string");
          expect(typeof user.username).toBe("string");
          expect(typeof user.discriminator).toBe("string");
          expect(
            user.avatar === null || typeof user.avatar === "string",
          ).toBe(true);
        }
      } finally {
        await runEffect(
          deleteMessage({
            channel_id: TEST_CHANNEL_ID!,
            message_id: messageId,
          }).pipe(Effect.ignore),
        );
      }
    },
    { timeout: 30_000 },
  );

  it("error - NotFound for a non-existent message", async () => {
    await runEffect(
      listMessageReactionsByEmoji({
        channel_id: TEST_CHANNEL_ID ?? NON_EXISTENT_CHANNEL_ID,
        message_id: NON_EXISTENT_MESSAGE_ID,
        emoji_name: EMOJI,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord surfaces a missing message (or channel) as NotFound. Bot
          // tokens calling for a channel they cannot access typically receive
          // Forbidden, and malformed snowflakes may surface as BadRequest.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden", "BadRequest"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });

  it("error - Forbidden or NotFound for a channel the bot cannot access", async () => {
    await runEffect(
      listMessageReactionsByEmoji({
        channel_id: INACCESSIBLE_CHANNEL_ID,
        message_id: NON_EXISTENT_MESSAGE_ID,
        emoji_name: EMOJI,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // The bot can only list reactions in channels it can read; for any
          // other channel Discord returns Forbidden, but it often returns
          // NotFound to avoid leaking existence.
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
