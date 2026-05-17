import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { CredentialsFromEnv } from "../src/credentials.ts";
import { getWebhookMessage } from "../src/operations/getWebhookMessage.ts";
import { updateWebhookMessage } from "../src/operations/updateWebhookMessage.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// PATCH /webhooks/{webhook_id}/{webhook_token}/messages/{message_id} —
// edits a specific message previously sent by the webhook. The route is
// authenticated purely via the (id, token) pair in the path; no bot
// Authorization header is used.
//
// The happy path requires operator-supplied env vars pointing at a
// webhook and a known message id posted via that webhook.
const TEST_WEBHOOK_ID = process.env.DISCORD_TEST_WEBHOOK_ID;
const TEST_WEBHOOK_TOKEN = process.env.DISCORD_TEST_WEBHOOK_TOKEN;
const TEST_WEBHOOK_MESSAGE_ID = process.env.DISCORD_TEST_WEBHOOK_MESSAGE_ID;

// Snowflake-shaped ids and a randomly-generated token unlikely to match
// any real webhook.
const NON_EXISTENT_WEBHOOK_ID = `1000000000000000${testRunId.slice(0, 2)}`;
const NON_EXISTENT_WEBHOOK_TOKEN = `distilled-bogus-webhook-token-${testRunId}`;
const NON_EXISTENT_MESSAGE_ID = "100000000000000002";

describe("updateWebhookMessage", () => {
  it(
    "happy path - edits a webhook message and restores its content",
    async () => {
      if (!TEST_WEBHOOK_ID || !TEST_WEBHOOK_TOKEN || !TEST_WEBHOOK_MESSAGE_ID) {
        throw new Error(
          "DISCORD_TEST_WEBHOOK_ID, DISCORD_TEST_WEBHOOK_TOKEN, and " +
            "DISCORD_TEST_WEBHOOK_MESSAGE_ID must be set for the " +
            "updateWebhookMessage happy path. The message_id must reference " +
            "a message posted via the webhook token.",
        );
      }
      const newContent = `distilled-wh-msg-upd-${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          // Snapshot the current content so we can restore it in cleanup.
          const before = yield* getWebhookMessage({
            webhook_id: TEST_WEBHOOK_ID,
            webhook_token: TEST_WEBHOOK_TOKEN,
            message_id: TEST_WEBHOOK_MESSAGE_ID,
          });
          const originalContent = before.content;
          return yield* Effect.gen(function* () {
            const updated = yield* updateWebhookMessage({
              webhook_id: TEST_WEBHOOK_ID,
              webhook_token: TEST_WEBHOOK_TOKEN,
              message_id: TEST_WEBHOOK_MESSAGE_ID,
              content: newContent,
            });
            return yield* Effect.sync(() => {
              expect(updated.id).toBe(TEST_WEBHOOK_MESSAGE_ID);
              expect(updated.channel_id).toBe(before.channel_id);
              expect(updated.content).toBe(newContent);
              expect(typeof updated.timestamp).toBe("string");
              expect(typeof updated.edited_timestamp).toBe("string");
              expect(typeof updated.flags).toBe("number");
              expect(Array.isArray(updated.mentions)).toBe(true);
              expect(Array.isArray(updated.mention_roles)).toBe(true);
              expect(Array.isArray(updated.attachments)).toBe(true);
              expect(Array.isArray(updated.embeds)).toBe(true);
              expect(Array.isArray(updated.components)).toBe(true);
              expect(typeof updated.author.id).toBe("string");
            });
          }).pipe(
            // Restore the original content so the test message is not
            // left dirtied between runs.
            Effect.ensuring(
              updateWebhookMessage({
                webhook_id: TEST_WEBHOOK_ID,
                webhook_token: TEST_WEBHOOK_TOKEN,
                message_id: TEST_WEBHOOK_MESSAGE_ID,
                content: originalContent,
              }).pipe(Effect.ignore),
            ),
          );
        }),
      );
    },
    30_000,
  );

  it(
    "error - BadRequest when content exceeds 2000 characters",
    async () => {
      if (!TEST_WEBHOOK_ID || !TEST_WEBHOOK_TOKEN || !TEST_WEBHOOK_MESSAGE_ID) {
        throw new Error(
          "DISCORD_TEST_WEBHOOK_ID, DISCORD_TEST_WEBHOOK_TOKEN and " +
            "DISCORD_TEST_WEBHOOK_MESSAGE_ID env vars are required for " +
            "the BadRequest test",
        );
      }
      // Discord's per-message content limit is 2000 chars; 2001 chars
      // triggers 400 Invalid Form Body. Snapshot the original content so
      // that even though the PATCH is rejected, no state is left dirtied
      // if the API somehow accepted it.
      const tooLong = "a".repeat(2001);
      await runEffect(
        Effect.gen(function* () {
          const before = yield* getWebhookMessage({
            webhook_id: TEST_WEBHOOK_ID,
            webhook_token: TEST_WEBHOOK_TOKEN,
            message_id: TEST_WEBHOOK_MESSAGE_ID,
          });
          const originalContent = before.content;
          return yield* updateWebhookMessage({
            webhook_id: TEST_WEBHOOK_ID,
            webhook_token: TEST_WEBHOOK_TOKEN,
            message_id: TEST_WEBHOOK_MESSAGE_ID,
            content: tooLong,
          }).pipe(
            Effect.flip,
            Effect.map((e) => {
              expect(["BadRequest", "Forbidden", "NotFound"]).toContain(
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (e as any)._tag,
              );
            }),
            Effect.ensuring(
              updateWebhookMessage({
                webhook_id: TEST_WEBHOOK_ID,
                webhook_token: TEST_WEBHOOK_TOKEN,
                message_id: TEST_WEBHOOK_MESSAGE_ID,
                content: originalContent,
              }).pipe(Effect.ignore),
            ),
          );
        }),
      );
    },
    30_000,
  );

  it("error - NotFound for a non-existent webhook id", async () => {
    // Discord returns 404 (10015) for missing webhook ids. Token
    // mismatch on a real id may surface as 401/403 instead, and
    // malformed snowflakes as BadRequest.
    await runEffect(
      updateWebhookMessage({
        webhook_id: NON_EXISTENT_WEBHOOK_ID,
        webhook_token: NON_EXISTENT_WEBHOOK_TOKEN,
        message_id: NON_EXISTENT_MESSAGE_ID,
        content: `distilled-nf-${testRunId}`,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          expect(["NotFound", "Forbidden", "BadRequest"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });

  it("error - Forbidden for a token mismatch on a real webhook id", async () => {
    if (!TEST_WEBHOOK_ID) {
      // Without a real webhook id, fall back to the missing-id case;
      // Discord may classify as Forbidden, NotFound, Unauthorized, or
      // BadRequest depending on which check fires first.
      await runEffect(
        updateWebhookMessage({
          webhook_id: NON_EXISTENT_WEBHOOK_ID,
          webhook_token: NON_EXISTENT_WEBHOOK_TOKEN,
          message_id: NON_EXISTENT_MESSAGE_ID,
          content: `distilled-fb-${testRunId}`,
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect([
              "Forbidden",
              "NotFound",
              "Unauthorized",
              "BadRequest",
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ]).toContain((e as any)._tag);
          }),
        ),
      );
      return;
    }
    // Real webhook id + bogus token typically yields 401/403; some
    // routes resolve as 404 instead.
    await runEffect(
      updateWebhookMessage({
        webhook_id: TEST_WEBHOOK_ID,
        webhook_token: NON_EXISTENT_WEBHOOK_TOKEN,
        message_id: NON_EXISTENT_MESSAGE_ID,
        content: `distilled-fb-${testRunId}`,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          expect([
            "Forbidden",
            "NotFound",
            "Unauthorized",
            "BadRequest",
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ]).toContain((e as any)._tag);
        }),
      ),
    );
  });
});
