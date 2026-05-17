import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { createWebhook } from "../src/operations/createWebhook.ts";
import { deleteWebhook } from "../src/operations/deleteWebhook.ts";
import { deleteWebhookByToken } from "../src/operations/deleteWebhookByToken.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// Requires a text/announcement/forum channel where the bot has
// MANAGE_WEBHOOKS so we can create a webhook and learn its token.
const TEST_CHANNEL_ID = process.env.DISCORD_TEST_CHANNEL_ID;

// Snowflake-format identifier and a clearly bogus token. Real webhook
// tokens are ~68 chars of url-safe base64; an obvious junk string suffices
// to trigger NotFound / Forbidden without colliding with any real webhook.
const NON_EXISTENT_WEBHOOK_ID = "100000000000000000";
const BOGUS_WEBHOOK_TOKEN = `not-a-real-webhook-token-${testRunId}`;

// Discord requires webhook names of 1..80 chars and disallows certain
// substrings ("clyde", "discord").
const webhookName = (suffix: string): string =>
  `dt-delwhtok-${suffix}-${testRunId}`.slice(0, 80);

describe("deleteWebhookByToken", () => {
  it("happy path - creates a webhook then deletes it via its token", async () => {
    if (!TEST_CHANNEL_ID) {
      throw new Error(
        "DISCORD_TEST_CHANNEL_ID env var is required for the deleteWebhookByToken happy path",
      );
    }
    await runEffect(
      Effect.gen(function* () {
        const webhook = yield* createWebhook({
          channel_id: TEST_CHANNEL_ID,
          name: webhookName("happy"),
        });
        if (!webhook.token) {
          throw new Error(
            "createWebhook did not return a token — cannot exercise deleteWebhookByToken",
          );
        }
        return yield* deleteWebhookByToken({
          webhook_id: webhook.id,
          webhook_token: webhook.token,
        }).pipe(
          Effect.tap((result) =>
            Effect.sync(() => {
              // 204 No Content; output schema is Void.
              expect(result).toBeUndefined();
            }),
          ),
          Effect.ensuring(
            // Idempotent cleanup via the bot-auth route in case the
            // by-token delete failed.
            deleteWebhook({ webhook_id: webhook.id }).pipe(Effect.ignore),
          ),
        );
      }),
    );
  });

  it("error - NotFound for non-existent webhook_id", async () => {
    // Discord returns 404 NotFound (10015 — Unknown Webhook) for an
    // unknown webhook_id; may surface as 403 Forbidden depending on which
    // check fires first.
    await runEffect(
      deleteWebhookByToken({
        webhook_id: NON_EXISTENT_WEBHOOK_ID,
        webhook_token: BOGUS_WEBHOOK_TOKEN,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden"]).toContain((e as any)._tag);
        }),
      ),
    );
  });

  it("error - Forbidden for an invalid webhook token", async () => {
    if (!TEST_CHANNEL_ID) {
      throw new Error(
        "DISCORD_TEST_CHANNEL_ID env var is required for the Forbidden test (need a real webhook_id whose token mismatches)",
      );
    }
    // Create a real webhook so the webhook_id resolves, then call
    // deleteWebhookByToken with a wrong token. Discord typically returns
    // 401/403 for an invalid token; the typed error surfaces as Forbidden
    // (or NotFound if Discord opts to mask existence).
    await runEffect(
      Effect.gen(function* () {
        const webhook = yield* createWebhook({
          channel_id: TEST_CHANNEL_ID,
          name: webhookName("fb"),
        });
        return yield* deleteWebhookByToken({
          webhook_id: webhook.id,
          webhook_token: BOGUS_WEBHOOK_TOKEN,
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            expect(["Forbidden", "NotFound"]).toContain((e as any)._tag);
          }),
          Effect.ensuring(
            deleteWebhook({ webhook_id: webhook.id }).pipe(Effect.ignore),
          ),
        );
      }),
    );
  });
});
