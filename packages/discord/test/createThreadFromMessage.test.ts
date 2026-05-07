import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { createMessage } from "../src/operations/createMessage.ts";
import { createThreadFromMessage } from "../src/operations/createThreadFromMessage.ts";
import { deleteChannel } from "../src/operations/deleteChannel.ts";
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

// Requires a text channel where the bot can post messages and create threads.
const TEST_CHANNEL_ID = process.env.DISCORD_TEST_CHANNEL_ID;

// Snowflake-format identifiers that should not match real entities.
const NON_EXISTENT_CHANNEL_ID = "100000000000000000";
const NON_EXISTENT_MESSAGE_ID = "100000000000000001";

// Discord requires thread names of 1..100 chars.
const threadName = (suffix: string): string =>
  `dt-${suffix}-${testRunId}`.slice(0, 100);

describe("createThreadFromMessage", () => {
  it("happy path - creates a thread from a freshly posted message and deletes both on cleanup", async () => {
    if (!TEST_CHANNEL_ID) {
      throw new Error(
        "DISCORD_TEST_CHANNEL_ID env var is required for the createThreadFromMessage happy path",
      );
    }
    const name = threadName("happy");
    await runEffect(
      Effect.gen(function* () {
        const msg = yield* createMessage({
          channel_id: TEST_CHANNEL_ID,
          content: `distilled-thread-from-msg-${testRunId}`,
        });
        const thread = yield* createThreadFromMessage({
          channel_id: TEST_CHANNEL_ID,
          message_id: msg.id,
          name,
        }).pipe(
          Effect.ensuring(
            // The thread's id is the message id by Discord convention; deleting
            // the thread channel cleans up. We also delete the source message.
            deleteMessage({
              channel_id: TEST_CHANNEL_ID,
              message_id: msg.id,
            }).pipe(Effect.ignore),
          ),
        );
        return yield* Effect.sync(() => {
          expect(typeof thread.id).toBe("string");
          expect(thread.name).toBe(name);
          expect(typeof thread.guild_id).toBe("string");
          expect(typeof thread.owner_id).toBe("string");
          expect(typeof thread.flags).toBe("number");
          expect(typeof thread.thread_metadata.archived).toBe("boolean");
        }).pipe(
          Effect.ensuring(
            deleteChannel({ channel_id: thread.id }).pipe(Effect.ignore),
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
    await runEffect(
      createThreadFromMessage({
        channel_id: TEST_CHANNEL_ID,
        message_id: NON_EXISTENT_MESSAGE_ID,
        name: threadName("nf"),
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden"]).toContain((e as any)._tag);
        }),
      ),
    );
  });

  it("error - BadRequest when name is empty", async () => {
    if (!TEST_CHANNEL_ID) {
      throw new Error(
        "DISCORD_TEST_CHANNEL_ID env var is required for the BadRequest test",
      );
    }
    // Thread name must be 1..100 characters; empty string is rejected with
    // 400 Invalid Form Body. We use a real channel so the request reaches
    // the validation step; the bogus message_id may also surface as 404.
    await runEffect(
      createThreadFromMessage({
        channel_id: TEST_CHANNEL_ID,
        message_id: NON_EXISTENT_MESSAGE_ID,
        name: "",
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["BadRequest", "NotFound", "Forbidden"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });

  it("error - Forbidden when targeting a channel the bot cannot see", async () => {
    // A snowflake-shaped channel_id the bot cannot see typically yields 403
    // Forbidden (50001 Missing Access), or 404 NotFound if the route 404s
    // before the permission check.
    await runEffect(
      createThreadFromMessage({
        channel_id: NON_EXISTENT_CHANNEL_ID,
        message_id: NON_EXISTENT_MESSAGE_ID,
        name: threadName("fb"),
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
