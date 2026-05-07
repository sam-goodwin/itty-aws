import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { createMessage } from "../src/operations/createMessage.ts";
import { deleteMessage } from "../src/operations/deleteMessage.ts";
import { getMessage } from "../src/operations/getMessage.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// GET /channels/{channel_id}/messages/{message_id} fetches a single message.
// The bot must have VIEW_CHANNEL + READ_MESSAGE_HISTORY on the channel.
// Test setup posts a message and removes it via Effect.ensuring.
const TEST_CHANNEL_ID = process.env.DISCORD_TEST_CHANNEL_ID;

// Snowflake-shaped ids unlikely to resolve to any real message/channel.
const NON_EXISTENT_MESSAGE_ID = `1000000000000000${testRunId.slice(0, 2)}`;
const NON_EXISTENT_CHANNEL_ID = "100000000000000001";

describe("getMessage", () => {
  it("happy path - posts then fetches a message in the test channel", async () => {
    if (!TEST_CHANNEL_ID) {
      throw new Error(
        "DISCORD_TEST_CHANNEL_ID must be set for the getMessage happy path. " +
          "The bot must have VIEW_CHANNEL, SEND_MESSAGES and READ_MESSAGE_HISTORY.",
      );
    }
    const created = await runEffect(
      createMessage({
        channel_id: TEST_CHANNEL_ID,
        content: `distilled-discord-getMessage-${testRunId}`,
      }),
    );
    try {
      const result = await runEffect(
        getMessage({
          channel_id: TEST_CHANNEL_ID,
          // The created message id is in the response — created is the
          // CreateMessageOutput which mirrors GetMessageOutput; both have
          // `id`.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          message_id: (created as any).id,
        }),
      );
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      expect(result.id).toBe((created as any).id);
      expect(result.channel_id).toBe(TEST_CHANNEL_ID);
      expect(typeof result.content).toBe("string");
      expect(result.content).toBe(
        `distilled-discord-getMessage-${testRunId}`,
      );
      expect(typeof result.author.id).toBe("string");
      expect(typeof result.author.username).toBe("string");
      expect(typeof result.timestamp).toBe("string");
      expect(typeof result.flags).toBe("number");
      expect(Array.isArray(result.mentions)).toBe(true);
      expect(Array.isArray(result.attachments)).toBe(true);
      expect(Array.isArray(result.embeds)).toBe(true);
      expect(typeof result.pinned).toBe("boolean");
      expect(typeof result.tts).toBe("boolean");
      expect(typeof result.mention_everyone).toBe("boolean");
    } finally {
      await runEffect(
        deleteMessage({
          channel_id: TEST_CHANNEL_ID,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          message_id: (created as any).id,
        }).pipe(Effect.ignore),
      );
    }
  });

  it("error - NotFound for a non-existent message id", async () => {
    if (!TEST_CHANNEL_ID) {
      throw new Error(
        "DISCORD_TEST_CHANNEL_ID must be set for the getMessage error tests.",
      );
    }
    await runEffect(
      getMessage({
        channel_id: TEST_CHANNEL_ID,
        message_id: NON_EXISTENT_MESSAGE_ID,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord returns NotFound (10008 — Unknown Message) for missing
          // message ids. Some malformed snowflakes may surface as
          // BadRequest, and revoked access as Forbidden.
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
      getMessage({
        channel_id: NON_EXISTENT_CHANNEL_ID,
        message_id: "100000000000000002",
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // For a missing or inaccessible channel, Discord prefers Forbidden
          // (Missing Access) when the channel exists but the bot can't view
          // it, and NotFound when the channel does not exist.
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
