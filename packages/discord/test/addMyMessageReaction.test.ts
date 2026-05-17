import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { CredentialsFromEnv } from "../src/credentials.ts";
import { addMyMessageReaction } from "../src/operations/addMyMessageReaction.ts";
import { createMessage } from "../src/operations/createMessage.ts";
import { deleteMessage } from "../src/operations/deleteMessage.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

// Short random hex string generated once per test run.
// Append this to message content so parallel test runs don't collide.
const testRunId: string = crypto
  .randomUUID()
  .replace(/-/g, "")
  .slice(0, 8);

// A real Discord channel where the bot can send and react to messages.
const TEST_CHANNEL_ID = process.env.DISCORD_TEST_CHANNEL_ID;

// Snowflake-format identifiers that should not match real Discord resources.
const NON_EXISTENT_CHANNEL_ID = "100000000000000000";
const NON_EXISTENT_MESSAGE_ID = "100000000000000001";

// Unicode thumbs-up emoji. The PathParam trait URL-encodes this for Discord.
const REACTION_EMOJI = "👍";

describe("addMyMessageReaction", () => {
  it("happy path - posts a message and adds a reaction to it", async () => {
    if (!TEST_CHANNEL_ID) {
      throw new Error(
        "DISCORD_TEST_CHANNEL_ID env var is required for the addMyMessageReaction happy path",
      );
    }
    await runEffect(
      Effect.gen(function* () {
        // Post a fresh message we own so the reaction can be added cleanly.
        const message = yield* createMessage({
          channel_id: TEST_CHANNEL_ID,
          content: `distilled-test-react-${testRunId}`,
        });
        return yield* addMyMessageReaction({
          channel_id: TEST_CHANNEL_ID,
          message_id: message.id,
          emoji_name: REACTION_EMOJI,
        }).pipe(
          Effect.tap((result) =>
            Effect.sync(() => {
              // Discord returns 204 No Content on success — the operation
              // succeeded if no error was thrown.
              expect(result).toBeUndefined();
            }),
          ),
          Effect.ensuring(
            // Deleting the message also removes all reactions on it.
            deleteMessage({
              channel_id: TEST_CHANNEL_ID,
              message_id: message.id,
            }).pipe(Effect.ignore),
          ),
        );
      }),
    );
  });

  it("error - NotFound for non-existent message_id in real channel", async () => {
    if (!TEST_CHANNEL_ID) {
      throw new Error(
        "DISCORD_TEST_CHANNEL_ID env var is required for the NotFound test",
      );
    }
    await runEffect(
      addMyMessageReaction({
        channel_id: TEST_CHANNEL_ID,
        message_id: NON_EXISTENT_MESSAGE_ID,
        emoji_name: REACTION_EMOJI,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord returns NotFound for an unseen message but may surface as
          // Forbidden when the bot can't read the channel.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden"]).toContain((e as any)._tag);
        }),
      ),
    );
  });

  it("error - BadRequest for malformed (non-snowflake) message_id", async () => {
    if (!TEST_CHANNEL_ID) {
      throw new Error(
        "DISCORD_TEST_CHANNEL_ID env var is required for the BadRequest test",
      );
    }
    await runEffect(
      addMyMessageReaction({
        channel_id: TEST_CHANNEL_ID,
        message_id: "not-a-snowflake",
        emoji_name: REACTION_EMOJI,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord rejects malformed snowflakes with 400 Invalid Form Body;
          // routing layers may also classify it as 404.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["BadRequest", "NotFound"]).toContain((e as any)._tag);
        }),
      ),
    );
  });

  it("error - Forbidden for channel bot has no access to", async () => {
    await runEffect(
      addMyMessageReaction({
        channel_id: NON_EXISTENT_CHANNEL_ID,
        message_id: NON_EXISTENT_MESSAGE_ID,
        emoji_name: REACTION_EMOJI,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // For a channel the bot is not in, Discord typically returns
          // Forbidden (50001 Missing Access) but may surface as NotFound.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["Forbidden", "NotFound"]).toContain((e as any)._tag);
        }),
      ),
    );
  });
});
