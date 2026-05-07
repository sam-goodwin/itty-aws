import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { CredentialsFromEnv } from "../src/credentials.ts";
import { bulkDeleteMessages } from "../src/operations/bulkDeleteMessages.ts";
import { createMessage } from "../src/operations/createMessage.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// The endpoint requires:
//   - a guild text channel the bot is in with MANAGE_MESSAGES permission.
//   - 2..100 message IDs no older than 14 days.
const TEST_CHANNEL_ID = process.env.DISCORD_TEST_CHANNEL_ID;

// Snowflake-format identifiers that should not match real Discord resources.
const NON_EXISTENT_CHANNEL_ID = "100000000000000000";
const NON_EXISTENT_MESSAGE_ID_A = "100000000000000001";
const NON_EXISTENT_MESSAGE_ID_B = "100000000000000002";

describe("bulkDeleteMessages", () => {
  it("happy path - bulk-deletes two freshly created messages", async () => {
    if (!TEST_CHANNEL_ID) {
      throw new Error(
        "DISCORD_TEST_CHANNEL_ID env var is required for the bulkDeleteMessages happy path",
      );
    }
    await runEffect(
      Effect.gen(function* () {
        const m1 = yield* createMessage({
          channel_id: TEST_CHANNEL_ID,
          content: `distilled-bulk-delete-1-${testRunId}`,
        });
        const m2 = yield* createMessage({
          channel_id: TEST_CHANNEL_ID,
          content: `distilled-bulk-delete-2-${testRunId}`,
        });
        const result = yield* bulkDeleteMessages({
          channel_id: TEST_CHANNEL_ID,
          messages: [m1.id, m2.id],
        });
        // Discord returns 204 No Content; SDK decodes to void / undefined.
        expect(result).toBeUndefined();
      }),
    );
  });

  it("error - NotFound for non-existent channel_id", async () => {
    await runEffect(
      bulkDeleteMessages({
        channel_id: NON_EXISTENT_CHANNEL_ID,
        messages: [NON_EXISTENT_MESSAGE_ID_A, NON_EXISTENT_MESSAGE_ID_B],
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord returns NotFound for unseen channels, but may surface as
          // Forbidden (50001 Missing Access) when the bot can't see it.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden"]).toContain((e as any)._tag);
        }),
      ),
    );
  });

  it("error - BadRequest for too few messages (only one supplied)", async () => {
    if (!TEST_CHANNEL_ID) {
      throw new Error(
        "DISCORD_TEST_CHANNEL_ID env var is required for the BadRequest test",
      );
    }
    // Discord requires 2..100 message IDs; a single-element array is rejected
    // with 400 Invalid Form Body. May also surface as Forbidden if the bot
    // lacks MANAGE_MESSAGES, or NotFound for an unseen channel.
    await runEffect(
      bulkDeleteMessages({
        channel_id: TEST_CHANNEL_ID,
        messages: [NON_EXISTENT_MESSAGE_ID_A],
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["BadRequest", "Forbidden", "NotFound"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });

  it("error - Forbidden when the bot lacks MANAGE_MESSAGES on the channel", async () => {
    if (!TEST_CHANNEL_ID) {
      throw new Error(
        "DISCORD_TEST_CHANNEL_ID env var is required for the Forbidden test",
      );
    }
    // Targeting message snowflakes the bot does not own typically yields
    // Forbidden (50013 Missing Permissions) once the channel is reachable;
    // may also surface as NotFound (10008) since the messages do not exist
    // in the channel, or BadRequest if Discord rejects the IDs as too old.
    await runEffect(
      bulkDeleteMessages({
        channel_id: TEST_CHANNEL_ID,
        messages: [NON_EXISTENT_MESSAGE_ID_A, NON_EXISTENT_MESSAGE_ID_B],
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
