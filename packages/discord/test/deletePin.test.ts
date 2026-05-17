import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { createMessage } from "../src/operations/createMessage.ts";
import { createPin } from "../src/operations/createPin.ts";
import { deleteMessage } from "../src/operations/deleteMessage.ts";
import { deletePin } from "../src/operations/deletePin.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// Requires a text channel where the bot can post, pin, and unpin messages.
const TEST_CHANNEL_ID = process.env.DISCORD_TEST_CHANNEL_ID;

// Snowflake-format identifiers that should not match real entities.
const NON_EXISTENT_CHANNEL_ID = "100000000000000000";
const NON_EXISTENT_MESSAGE_ID = "100000000000000001";

describe("deletePin", () => {
  it("happy path - pins then unpins a freshly created message", async () => {
    if (!TEST_CHANNEL_ID) {
      throw new Error(
        "DISCORD_TEST_CHANNEL_ID env var is required for the deletePin happy path",
      );
    }
    await runEffect(
      Effect.gen(function* () {
        const msg = yield* createMessage({
          channel_id: TEST_CHANNEL_ID,
          content: `distilled-discord-deletepin-${testRunId}`,
        });
        yield* createPin({
          channel_id: TEST_CHANNEL_ID,
          message_id: msg.id,
        }).pipe(
          Effect.ensuring(
            deleteMessage({
              channel_id: TEST_CHANNEL_ID,
              message_id: msg.id,
            }).pipe(Effect.ignore),
          ),
        );
        return yield* deletePin({
          channel_id: TEST_CHANNEL_ID,
          message_id: msg.id,
        }).pipe(
          Effect.tap(() =>
            Effect.sync(() => {
              // 204 No Content; output schema is Void.
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
    // Discord returns 404 NotFound when the message does not exist or is not
    // pinned in the channel.
    await runEffect(
      deletePin({
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

  it("error - Forbidden when the channel cannot be seen by the bot", async () => {
    // A snowflake-shaped channel_id the bot cannot access typically yields 403
    // Forbidden (50001 Missing Access), or 404 NotFound if the route 404s
    // before the permission check is reached.
    await runEffect(
      deletePin({
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
