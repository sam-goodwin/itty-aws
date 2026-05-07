import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { deleteOriginalWebhookMessage } from "../src/operations/deleteOriginalWebhookMessage.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// "Original" here is the message produced by the most recent webhook
// execution with wait=true (or the initial message of an interaction
// followup). Creating one in-test is blocked by a codegen gap on
// executeWebhook (the `content`/`embeds`/`files`/... body fields are not
// exposed on the SDK input), so the happy path requires:
//   - DISCORD_TEST_WEBHOOK_ID and DISCORD_TEST_WEBHOOK_TOKEN for a webhook
//     whose original message the operator is willing to delete
//   - DISCORD_TEST_ALLOW_DELETE_WEBHOOK_ORIGINAL=1 since this is destructive
const TEST_WEBHOOK_ID = process.env.DISCORD_TEST_WEBHOOK_ID;
const TEST_WEBHOOK_TOKEN = process.env.DISCORD_TEST_WEBHOOK_TOKEN;
const ALLOW_DELETE_WEBHOOK_ORIGINAL =
  process.env.DISCORD_TEST_ALLOW_DELETE_WEBHOOK_ORIGINAL === "1";

// Snowflake-format identifier that should not match a real webhook.
const NON_EXISTENT_WEBHOOK_ID = "100000000000000000";
// A token that is well-formed but bogus.
const NON_EXISTENT_WEBHOOK_TOKEN = `tok-${testRunId}-not-real`;

describe("deleteOriginalWebhookMessage", () => {
  it(
    "happy path - deletes the original message of a real webhook",
    async () => {
      if (
        !TEST_WEBHOOK_ID ||
        !TEST_WEBHOOK_TOKEN ||
        !ALLOW_DELETE_WEBHOOK_ORIGINAL
      ) {
        throw new Error(
          "DISCORD_TEST_WEBHOOK_ID, DISCORD_TEST_WEBHOOK_TOKEN and DISCORD_TEST_ALLOW_DELETE_WEBHOOK_ORIGINAL=1 are required for the deleteOriginalWebhookMessage happy path. " +
            `(testRunId=${testRunId})`,
        );
      }
      const result = await runEffect(
        deleteOriginalWebhookMessage({
          webhook_id: TEST_WEBHOOK_ID,
          webhook_token: TEST_WEBHOOK_TOKEN,
        }),
      );
      // 204 No Content; output schema is Void.
      expect(result).toBeUndefined();
    },
    30_000,
  );

  it(
    "error - NotFound for a real webhook with no original message to delete",
    async () => {
      if (!TEST_WEBHOOK_ID || !TEST_WEBHOOK_TOKEN) {
        throw new Error(
          "DISCORD_TEST_WEBHOOK_ID and DISCORD_TEST_WEBHOOK_TOKEN env vars are required for the NotFound test",
        );
      }
      // After the happy-path delete (or when the webhook has never been
      // executed with wait=true), the @original message no longer exists.
      // Discord returns 404 NotFound (10008). Discord may also surface 403
      // Forbidden depending on which check fires first.
      await runEffect(
        deleteOriginalWebhookMessage({
          webhook_id: TEST_WEBHOOK_ID,
          webhook_token: TEST_WEBHOOK_TOKEN,
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            expect(["NotFound", "Forbidden"]).toContain((e as any)._tag);
          }),
        ),
      );
    },
  );

  it(
    "error - Forbidden for a webhook_id / token pair that does not match",
    async () => {
      // Webhook routes authenticate purely via the (id, token) tuple. A
      // bogus pair fails authentication. Discord typically returns 401
      // mapped to Forbidden by the SDK, or 404 NotFound if the route 404s
      // before the auth check.
      await runEffect(
        deleteOriginalWebhookMessage({
          webhook_id: NON_EXISTENT_WEBHOOK_ID,
          webhook_token: NON_EXISTENT_WEBHOOK_TOKEN,
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            expect(["Forbidden", "NotFound"]).toContain((e as any)._tag);
          }),
        ),
      );
    },
  );
});
