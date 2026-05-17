import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { addMyMessageReaction } from "../src/operations/addMyMessageReaction.ts";
import { createMessage } from "../src/operations/createMessage.ts";
import { deleteMessage } from "../src/operations/deleteMessage.ts";
import { deleteUserMessageReaction } from "../src/operations/deleteUserMessageReaction.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// Requires a text channel where the bot can post messages and has the
// MANAGE_MESSAGES permission to delete other users' reactions. The bot's
// own user_id is needed so we can remove the reaction it added via
// addMyMessageReaction (the @me alias is not used by this endpoint).
const TEST_CHANNEL_ID = process.env.DISCORD_TEST_CHANNEL_ID;
const TEST_BOT_USER_ID = process.env.DISCORD_TEST_BOT_USER_ID;

// Snowflake-format identifiers that should not match real entities.
const NON_EXISTENT_CHANNEL_ID = "100000000000000000";
const NON_EXISTENT_MESSAGE_ID = "100000000000000001";
const NON_EXISTENT_USER_ID = "100000000000000002";

// Standard Unicode emoji.
const EMOJI = "👍";

describe("deleteUserMessageReaction", () => {
  it(
    "happy path - adds a reaction as the bot then removes it by user_id",
    async () => {
      if (!TEST_CHANNEL_ID || !TEST_BOT_USER_ID) {
        throw new Error(
          "DISCORD_TEST_CHANNEL_ID and DISCORD_TEST_BOT_USER_ID env vars are required for the deleteUserMessageReaction happy path",
        );
      }
      await runEffect(
        Effect.gen(function* () {
          const msg = yield* createMessage({
            channel_id: TEST_CHANNEL_ID,
            content: `distilled-delete-user-reaction-${testRunId}`,
          });
          return yield* Effect.gen(function* () {
            yield* addMyMessageReaction({
              channel_id: TEST_CHANNEL_ID,
              message_id: msg.id,
              emoji_name: EMOJI,
            });
            const result = yield* deleteUserMessageReaction({
              channel_id: TEST_CHANNEL_ID,
              message_id: msg.id,
              emoji_name: EMOJI,
              user_id: TEST_BOT_USER_ID,
            });
            return yield* Effect.sync(() => {
              // 204 No Content; output schema is Void.
              expect(result).toBeUndefined();
            });
          }).pipe(
            Effect.ensuring(
              deleteMessage({
                channel_id: TEST_CHANNEL_ID,
                message_id: msg.id,
              }).pipe(Effect.ignore),
            ),
          );
        }),
      );
    },
    30_000,
  );

  it("error - NotFound for a message_id that does not exist in the channel", async () => {
    if (!TEST_CHANNEL_ID) {
      throw new Error(
        "DISCORD_TEST_CHANNEL_ID env var is required for the NotFound test",
      );
    }
    // A snowflake-shaped message_id that does not exist in the channel
    // yields 404 NotFound. Discord may also surface 403 Forbidden depending
    // on which check fires first.
    await runEffect(
      deleteUserMessageReaction({
        channel_id: TEST_CHANNEL_ID,
        message_id: NON_EXISTENT_MESSAGE_ID,
        emoji_name: EMOJI,
        user_id: TEST_BOT_USER_ID ?? NON_EXISTENT_USER_ID,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden"]).toContain((e as any)._tag);
        }),
      ),
    );
  });

  it("error - Forbidden for a channel_id the bot cannot see", async () => {
    // A snowflake-shaped channel_id the bot cannot see typically yields 403
    // Forbidden (50001 Missing Access), or 404 NotFound if the route 404s
    // before the permission check.
    await runEffect(
      deleteUserMessageReaction({
        channel_id: NON_EXISTENT_CHANNEL_ID,
        message_id: NON_EXISTENT_MESSAGE_ID,
        emoji_name: EMOJI,
        user_id: NON_EXISTENT_USER_ID,
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
