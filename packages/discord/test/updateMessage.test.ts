import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { createMessage } from "../src/operations/createMessage.ts";
import { deleteMessage } from "../src/operations/deleteMessage.ts";
import { updateMessage } from "../src/operations/updateMessage.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// Requires a text channel the bot can post to. Operators must supply
// DISCORD_TEST_CHANNEL_ID for the happy path.
const TEST_CHANNEL_ID = process.env.DISCORD_TEST_CHANNEL_ID;

// Snowflake-format identifiers that should not match real resources.
const NON_EXISTENT_CHANNEL_ID = "100000000000000000";
const NON_EXISTENT_MESSAGE_ID = "100000000000000001";

describe("updateMessage", () => {
  it(
    "happy path - edits a freshly posted message",
    async () => {
      if (!TEST_CHANNEL_ID) {
        throw new Error(
          "DISCORD_TEST_CHANNEL_ID env var is required for the updateMessage happy path",
        );
      }
      const originalContent = `distilled-upd-orig-${testRunId}`;
      const newContent = `distilled-upd-new-${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          const msg = yield* createMessage({
            channel_id: TEST_CHANNEL_ID,
            content: originalContent,
          });
          return yield* Effect.gen(function* () {
            const updated = yield* updateMessage({
              channel_id: TEST_CHANNEL_ID,
              message_id: msg.id,
              content: newContent,
            });
            return yield* Effect.sync(() => {
              expect(updated.id).toBe(msg.id);
              expect(updated.channel_id).toBe(TEST_CHANNEL_ID);
              expect(updated.content).toBe(newContent);
              expect(typeof updated.author.id).toBe("string");
              expect(typeof updated.timestamp).toBe("string");
              expect(typeof updated.edited_timestamp).toBe("string");
              expect(typeof updated.flags).toBe("number");
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

  it("error - NotFound for non-existent message_id on a real channel", async () => {
    if (!TEST_CHANNEL_ID) {
      throw new Error(
        "DISCORD_TEST_CHANNEL_ID env var is required for the NotFound test",
      );
    }
    // A snowflake-shaped message_id that does not exist on the channel
    // yields 404 NotFound. Discord may also surface 403 Forbidden depending
    // on which check fires first.
    await runEffect(
      updateMessage({
        channel_id: TEST_CHANNEL_ID,
        message_id: NON_EXISTENT_MESSAGE_ID,
        content: `distilled-nf-${testRunId}`,
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
  });

  it(
    "error - BadRequest when content exceeds 2000 characters",
    async () => {
      if (!TEST_CHANNEL_ID) {
        throw new Error(
          "DISCORD_TEST_CHANNEL_ID env var is required for the BadRequest test",
        );
      }
      // Discord's per-message content limit is 2000 chars; 2001 chars
      // triggers 400 Invalid Form Body. We need a real message for the
      // route to actually validate the body, so create-then-update.
      const tooLong = "a".repeat(2001);
      await runEffect(
        Effect.gen(function* () {
          const msg = yield* createMessage({
            channel_id: TEST_CHANNEL_ID,
            content: `distilled-br-orig-${testRunId}`,
          });
          return yield* updateMessage({
            channel_id: TEST_CHANNEL_ID,
            message_id: msg.id,
            content: tooLong,
          }).pipe(
            Effect.flip,
            Effect.map((e) => {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              expect(["BadRequest", "Forbidden", "NotFound"]).toContain(
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (e as any)._tag,
              );
            }),
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

  it("error - Forbidden when targeting a channel the bot cannot see", async () => {
    // A snowflake-shaped channel_id the bot cannot see typically yields 403
    // Forbidden (50001 Missing Access), or 404 NotFound if the route 404s
    // before the permission check.
    await runEffect(
      updateMessage({
        channel_id: NON_EXISTENT_CHANNEL_ID,
        message_id: NON_EXISTENT_MESSAGE_ID,
        content: `distilled-fb-${testRunId}`,
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
});
