import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { CredentialsFromEnv } from "../src/credentials.ts";
import { getWebhookMessage } from "../src/operations/getWebhookMessage.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// GET /webhooks/{webhook_id}/{webhook_token}/messages/{message_id} — fetches
// a specific message previously sent by the webhook. The webhook path is
// unauthenticated (the token in the path is the credential); the webhook_id
// must point at a real webhook, the token must match, and the message_id
// must reference a message posted by that webhook.
//
// The happy path requires operator-supplied env vars pointing at a webhook
// and a known message id posted via that webhook.
const TEST_WEBHOOK_ID = process.env.DISCORD_TEST_WEBHOOK_ID;
const TEST_WEBHOOK_TOKEN = process.env.DISCORD_TEST_WEBHOOK_TOKEN;
const TEST_WEBHOOK_MESSAGE_ID = process.env.DISCORD_TEST_WEBHOOK_MESSAGE_ID;

// Snowflake-shaped ids and a randomly-generated token unlikely to match any
// real webhook. Discord typically returns 404 (10015 — Unknown Webhook) for
// missing ids, and 401/403 for token mismatches.
const NON_EXISTENT_WEBHOOK_ID = `1000000000000000${testRunId.slice(0, 2)}`;
const NON_EXISTENT_WEBHOOK_TOKEN = `distilled-bogus-webhook-token-${testRunId}`;
const NON_EXISTENT_MESSAGE_ID = "100000000000000002";

describe("getWebhookMessage", () => {
  it(
    "happy path - fetches a webhook message by id",
    async () => {
      if (!TEST_WEBHOOK_ID || !TEST_WEBHOOK_TOKEN || !TEST_WEBHOOK_MESSAGE_ID) {
        throw new Error(
          "DISCORD_TEST_WEBHOOK_ID, DISCORD_TEST_WEBHOOK_TOKEN, and DISCORD_TEST_WEBHOOK_MESSAGE_ID must be set " +
            "for the getWebhookMessage happy path. The message_id must reference a message posted via the webhook token.",
        );
      }
      const result = await runEffect(
        getWebhookMessage({
          webhook_id: TEST_WEBHOOK_ID,
          webhook_token: TEST_WEBHOOK_TOKEN,
          message_id: TEST_WEBHOOK_MESSAGE_ID,
        }),
      );
      expect(result.id).toBe(TEST_WEBHOOK_MESSAGE_ID);
      expect(typeof result.channel_id).toBe("string");
      expect(typeof result.content).toBe("string");
      expect(typeof result.timestamp).toBe("string");
      expect(
        result.edited_timestamp === null ||
          typeof result.edited_timestamp === "string",
      ).toBe(true);
      expect(typeof result.flags).toBe("number");
      expect(Array.isArray(result.mentions)).toBe(true);
      expect(Array.isArray(result.mention_roles)).toBe(true);
      expect(Array.isArray(result.attachments)).toBe(true);
      expect(Array.isArray(result.embeds)).toBe(true);
      expect(Array.isArray(result.components)).toBe(true);
      expect(typeof result.author.id).toBe("string");
      expect(typeof result.author.username).toBe("string");
      expect(typeof result.pinned).toBe("boolean");
      expect(typeof result.mention_everyone).toBe("boolean");
      expect(typeof result.tts).toBe("boolean");
    },
    { timeout: 30_000 },
  );

  it(
    "happy path - accepts the optional thread_id query parameter",
    async () => {
      if (!TEST_WEBHOOK_ID || !TEST_WEBHOOK_TOKEN || !TEST_WEBHOOK_MESSAGE_ID) {
        throw new Error(
          "DISCORD_TEST_WEBHOOK_ID, DISCORD_TEST_WEBHOOK_TOKEN, and DISCORD_TEST_WEBHOOK_MESSAGE_ID must be set " +
            "for the getWebhookMessage happy path.",
        );
      }
      // Optional thread_id — if the operator supplies a thread id where the
      // webhook posted the message, use it; otherwise skip silently because
      // re-running the previous case would be redundant.
      const threadId = process.env.DISCORD_TEST_WEBHOOK_THREAD_ID;
      if (!threadId) return;
      const result = await runEffect(
        getWebhookMessage({
          webhook_id: TEST_WEBHOOK_ID,
          webhook_token: TEST_WEBHOOK_TOKEN,
          message_id: TEST_WEBHOOK_MESSAGE_ID,
          thread_id: threadId,
        }),
      );
      expect(result.id).toBe(TEST_WEBHOOK_MESSAGE_ID);
      expect(typeof result.content).toBe("string");
    },
    { timeout: 30_000 },
  );

  it("error - NotFound for a non-existent webhook id", async () => {
    await runEffect(
      getWebhookMessage({
        webhook_id: NON_EXISTENT_WEBHOOK_ID,
        webhook_token: NON_EXISTENT_WEBHOOK_TOKEN,
        message_id: NON_EXISTENT_MESSAGE_ID,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord typically returns NotFound (10015 — Unknown Webhook) for
          // missing webhook ids. A token mismatch on a real webhook id may
          // surface as Forbidden, and malformed snowflakes as BadRequest.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden", "BadRequest"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });

  it("error - Forbidden or NotFound for a token mismatch", async () => {
    if (!TEST_WEBHOOK_ID) {
      // Without a real webhook id, fall back to the missing-id case.
      await runEffect(
        getWebhookMessage({
          webhook_id: "100000000000000001",
          webhook_token: NON_EXISTENT_WEBHOOK_TOKEN,
          message_id: NON_EXISTENT_MESSAGE_ID,
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            expect(["NotFound", "Forbidden", "BadRequest"]).toContain(
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              (e as any)._tag,
            );
          }),
        ),
      );
      return;
    }
    // Real webhook id + bogus token typically yields 401 or 403; some
    // routes resolve as 404 instead.
    await runEffect(
      getWebhookMessage({
        webhook_id: TEST_WEBHOOK_ID,
        webhook_token: NON_EXISTENT_WEBHOOK_TOKEN,
        message_id: NON_EXISTENT_MESSAGE_ID,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          expect([
            "NotFound",
            "Forbidden",
            "Unauthorized",
            "BadRequest",
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ]).toContain((e as any)._tag);
        }),
      ),
    );
  });
});
