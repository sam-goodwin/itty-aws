import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { createMessage } from "../src/operations/createMessage.ts";
import { deleteAllMessageReactionsByEmoji } from "../src/operations/deleteAllMessageReactionsByEmoji.ts";
import { deleteMessage } from "../src/operations/deleteMessage.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// Requires a text channel where the bot can post and manage messages.
const TEST_CHANNEL_ID = process.env.DISCORD_TEST_CHANNEL_ID;

// Snowflake-format identifiers that should not match real entities.
const NON_EXISTENT_CHANNEL_ID = "100000000000000000";
const NON_EXISTENT_MESSAGE_ID = "100000000000000001";

// A standard unicode emoji used as the {emoji_name} path segment. Discord
// accepts the raw unicode character or `name:id` for custom emoji.
const EMOJI = "👍";

describe("deleteAllMessageReactionsByEmoji", () => {
  it("happy path - clears reactions for a specific emoji on a freshly posted message", async () => {
    if (!TEST_CHANNEL_ID) {
      throw new Error(
        "DISCORD_TEST_CHANNEL_ID env var is required for the deleteAllMessageReactionsByEmoji happy path",
      );
    }
    void testRunId;
    await runEffect(
      Effect.gen(function* () {
        const msg = yield* createMessage({
          channel_id: TEST_CHANNEL_ID,
          content: `distilled-clear-emoji-${testRunId}`,
        });
        return yield* deleteAllMessageReactionsByEmoji({
          channel_id: TEST_CHANNEL_ID,
          message_id: msg.id,
          emoji_name: EMOJI,
        }).pipe(
          Effect.tap(() =>
            // 204 No Content; output schema is Void. Calling against a
            // message with zero reactions for this emoji is a valid no-op.
            Effect.sync(() => {
              expect(true).toBe(true);
            }),
          ),
          Effect.ensuring(
            deleteMessage({
              channel_id: TEST_CHANNEL_ID,
              message_id: msg.id,
            }).pipe(Effect.ignore),
          ),
        );
      }),
    );
  });

  it("error - NotFound for non-existent message_id in a real channel", async () => {
    if (!TEST_CHANNEL_ID) {
      throw new Error(
        "DISCORD_TEST_CHANNEL_ID env var is required for the NotFound test",
      );
    }
    // Discord returns 404 NotFound (10008 — message does not exist) when the
    // message_id does not exist in the channel.
    await runEffect(
      deleteAllMessageReactionsByEmoji({
        channel_id: TEST_CHANNEL_ID,
        message_id: NON_EXISTENT_MESSAGE_ID,
        emoji_name: EMOJI,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden"]).toContain((e as any)._tag);
        }),
      ),
    );
  });

  it("error - Forbidden when targeting a channel the bot cannot see", async () => {
    // A snowflake-shaped channel_id the bot cannot see typically yields 403
    // Forbidden (50001 Missing Access), or 404 NotFound if the route 404s
    // before the permission check.
    await runEffect(
      deleteAllMessageReactionsByEmoji({
        channel_id: NON_EXISTENT_CHANNEL_ID,
        message_id: NON_EXISTENT_MESSAGE_ID,
        emoji_name: EMOJI,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["Forbidden", "NotFound"]).toContain((e as any)._tag);
        }),
      ),
    );
  });
});
