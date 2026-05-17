import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { CredentialsFromEnv } from "../src/credentials.ts";
import { createMessage } from "../src/operations/createMessage.ts";
import { deleteMessage } from "../src/operations/deleteMessage.ts";
import { listMessages } from "../src/operations/listMessages.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// GET /channels/{channel_id}/messages lists messages in a channel. The
// happy path posts a fresh message in an operator-supplied text channel
// (DISCORD_TEST_CHANNEL_ID), lists messages, asserts the new message id
// is present, then deletes the message on cleanup. The bot must have
// SEND_MESSAGES and READ_MESSAGE_HISTORY in that channel.
const TEST_CHANNEL_ID = process.env.DISCORD_TEST_CHANNEL_ID;

// Snowflake-shaped ids unlikely to resolve to any real channel.
const NON_EXISTENT_CHANNEL_ID = `1000000000000000${testRunId.slice(0, 2)}`;
const INACCESSIBLE_CHANNEL_ID = "100000000000000001";

describe("listMessages", () => {
  it.skipIf(!TEST_CHANNEL_ID)(
    "happy path - lists messages including a freshly posted one",
    async () => {
      const content = `distilled-discord listMessages test ${testRunId}`;
      const created = await runEffect(
        createMessage({ channel_id: TEST_CHANNEL_ID!, content }),
      );
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const messageId = (created as any).id as string;
      expect(typeof messageId).toBe("string");

      try {
        const result = await runEffect(
          listMessages({ channel_id: TEST_CHANNEL_ID!, limit: 25 }),
        );
        expect(Array.isArray(result)).toBe(true);
        expect(result.length).toBeGreaterThanOrEqual(1);
        const ids = result.map((m) => m.id);
        expect(ids).toContain(messageId);
        for (const m of result) {
          expect(typeof m.id).toBe("string");
          expect(m.channel_id).toBe(TEST_CHANNEL_ID!);
          expect(typeof m.content).toBe("string");
          expect(typeof m.timestamp).toBe("string");
          expect(typeof m.author.id).toBe("string");
          expect(typeof m.author.username).toBe("string");
          expect(typeof m.pinned).toBe("boolean");
          expect(typeof m.tts).toBe("boolean");
          expect(typeof m.mention_everyone).toBe("boolean");
          expect(Array.isArray(m.mentions)).toBe(true);
          expect(Array.isArray(m.mention_roles)).toBe(true);
          expect(Array.isArray(m.attachments)).toBe(true);
          expect(Array.isArray(m.embeds)).toBe(true);
          expect(
            m.edited_timestamp === null ||
              typeof m.edited_timestamp === "string",
          ).toBe(true);
          if (m.id === messageId) {
            expect(m.content).toBe(content);
          }
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

  it("error - NotFound for a non-existent channel_id", async () => {
    await runEffect(
      listMessages({ channel_id: NON_EXISTENT_CHANNEL_ID }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord surfaces a missing channel as NotFound. Bot tokens
          // calling for a channel they cannot access typically receive
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
      listMessages({ channel_id: INACCESSIBLE_CHANNEL_ID }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // The bot can only list messages in channels it can read with
          // READ_MESSAGE_HISTORY; for any other channel Discord returns
          // Forbidden, but it often returns NotFound to avoid leaking
          // existence.
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
