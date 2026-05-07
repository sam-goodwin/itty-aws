import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { deleteWebhookMessage } from "../src/operations/deleteWebhookMessage.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// Creating a webhook message in-test is blocked by a codegen gap on
// executeWebhook (the `content`/`embeds`/`files`/... body fields are not
// exposed on the SDK input), so the happy path requires the operator to
// pre-create a webhook message and supply:
//   - DISCORD_TEST_WEBHOOK_ID
//   - DISCORD_TEST_WEBHOOK_TOKEN
//   - DISCORD_TEST_WEBHOOK_MESSAGE_ID — a message id produced by executing
//     this webhook (e.g. via Discord's UI or curl with `?wait=true`)
//   - DISCORD_TEST_ALLOW_DELETE_WEBHOOK_MESSAGE=1 since this is destructive
const TEST_WEBHOOK_ID = process.env.DISCORD_TEST_WEBHOOK_ID;
const TEST_WEBHOOK_TOKEN = process.env.DISCORD_TEST_WEBHOOK_TOKEN;
const TEST_WEBHOOK_MESSAGE_ID = process.env.DISCORD_TEST_WEBHOOK_MESSAGE_ID;
const ALLOW_DELETE_WEBHOOK_MESSAGE =
  process.env.DISCORD_TEST_ALLOW_DELETE_WEBHOOK_MESSAGE === "1";

// Snowflake-format identifiers that should not match real entities.
const NON_EXISTENT_WEBHOOK_ID = "100000000000000000";
const NON_EXISTENT_MESSAGE_ID = "100000000000000001";
// A token that is well-formed but bogus.
const NON_EXISTENT_WEBHOOK_TOKEN = `tok-${testRunId}-not-real`;

describe("deleteWebhookMessage", () => {
  it(
    "happy path - deletes a webhook message by id",
    async () => {
      if (
        !TEST_WEBHOOK_ID ||
        !TEST_WEBHOOK_TOKEN ||
        !TEST_WEBHOOK_MESSAGE_ID ||
        !ALLOW_DELETE_WEBHOOK_MESSAGE
      ) {
        throw new Error(
          "DISCORD_TEST_WEBHOOK_ID, DISCORD_TEST_WEBHOOK_TOKEN, DISCORD_TEST_WEBHOOK_MESSAGE_ID and DISCORD_TEST_ALLOW_DELETE_WEBHOOK_MESSAGE=1 are required for the deleteWebhookMessage happy path. " +
            `(testRunId=${testRunId})`,
        );
      }
      const result = await runEffect(
        deleteWebhookMessage({
          webhook_id: TEST_WEBHOOK_ID,
          webhook_token: TEST_WEBHOOK_TOKEN,
          message_id: TEST_WEBHOOK_MESSAGE_ID,
        }),
      );
      // 204 No Content; output schema is Void.
      expect(result).toBeUndefined();
    },
    30_000,
  );

  it("error - NotFound for non-existent message_id on a real webhook", async () => {
    if (!TEST_WEBHOOK_ID || !TEST_WEBHOOK_TOKEN) {
      throw new Error(
        "DISCORD_TEST_WEBHOOK_ID and DISCORD_TEST_WEBHOOK_TOKEN env vars are required for the NotFound test",
      );
    }
    // A snowflake-shaped message_id that does not belong to this webhook
    // yields 404 NotFound (10008 — Unknown Message). Discord may also
    // surface 403 Forbidden depending on which check fires first.
    await runEffect(
      deleteWebhookMessage({
        webhook_id: TEST_WEBHOOK_ID,
        webhook_token: TEST_WEBHOOK_TOKEN,
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

  it("error - Forbidden for a webhook_id / token pair that does not match", async () => {
    // Webhook routes authenticate purely via the (id, token) tuple. A
    // bogus pair fails authentication. Discord typically returns 401
    // mapped to Forbidden by the SDK, or 404 NotFound if the route 404s
    // before the auth check.
    await runEffect(
      deleteWebhookMessage({
        webhook_id: NON_EXISTENT_WEBHOOK_ID,
        webhook_token: NON_EXISTENT_WEBHOOK_TOKEN,
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
