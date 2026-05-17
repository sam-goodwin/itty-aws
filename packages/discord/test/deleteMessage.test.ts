import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { createMessage } from "../src/operations/createMessage.ts";
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

// Requires a text channel where the bot can post and delete its own messages.
const TEST_CHANNEL_ID = process.env.DISCORD_TEST_CHANNEL_ID;

// Snowflake-format identifiers that should not match real entities.
const NON_EXISTENT_CHANNEL_ID = "100000000000000000";
const NON_EXISTENT_MESSAGE_ID = "100000000000000001";

describe("deleteMessage", () => {
  it(
    "happy path - posts a message then deletes it",
    async () => {
      if (!TEST_CHANNEL_ID) {
        throw new Error(
          "DISCORD_TEST_CHANNEL_ID env var is required for the deleteMessage happy path",
        );
      }
      await runEffect(
        Effect.gen(function* () {
          const msg = yield* createMessage({
            channel_id: TEST_CHANNEL_ID,
            content: `distilled-delete-message-${testRunId}`,
          });
          const result = yield* deleteMessage({
            channel_id: TEST_CHANNEL_ID,
            message_id: msg.id,
          }).pipe(
            // If the delete fails, attempt cleanup explicitly.
            Effect.ensuring(
              deleteMessage({
                channel_id: TEST_CHANNEL_ID,
                message_id: msg.id,
              }).pipe(Effect.ignore),
            ),
          );
          return yield* Effect.sync(() => {
            // 204 No Content; output schema is Void.
            expect(result).toBeUndefined();
          });
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
      deleteMessage({
        channel_id: TEST_CHANNEL_ID,
        message_id: NON_EXISTENT_MESSAGE_ID,
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
      deleteMessage({
        channel_id: NON_EXISTENT_CHANNEL_ID,
        message_id: NON_EXISTENT_MESSAGE_ID,
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
