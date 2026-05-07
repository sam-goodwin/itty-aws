import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { CredentialsFromEnv } from "../src/credentials.ts";
import { createWebhook } from "../src/operations/createWebhook.ts";
import { deleteWebhook } from "../src/operations/deleteWebhook.ts";
import { getWebhookByToken } from "../src/operations/getWebhookByToken.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// GET /webhooks/{webhook_id}/{webhook_token} fetches a webhook using its
// token; this route does not require bot auth (the token in the URL is the
// credential). The happy path creates a webhook in an operator-supplied
// text channel (DISCORD_TEST_CHANNEL_ID), reads its returned token, fetches
// it via the token route, and deletes the webhook on cleanup.
const TEST_CHANNEL_ID = process.env.DISCORD_TEST_CHANNEL_ID;

// Snowflake-shaped ids unlikely to resolve to any real webhook, plus a
// plausible-looking but invalid token.
const NON_EXISTENT_WEBHOOK_ID = `1000000000000000${testRunId.slice(0, 2)}`;
const INACCESSIBLE_WEBHOOK_ID = "100000000000000001";
const BOGUS_WEBHOOK_TOKEN = `distilled-bogus-token-${testRunId}`;

describe("getWebhookByToken", () => {
  it(
    "happy path - fetches a webhook by id and token",
    async () => {
      if (!TEST_CHANNEL_ID) {
        throw new Error(
          "DISCORD_TEST_CHANNEL_ID env var is required for the getWebhookByToken happy path. " +
            "Set it to a text channel id where the bot has MANAGE_WEBHOOKS.",
        );
      }
      const webhookName = `distilled-discord-webhook-${testRunId}`;
      const created = await runEffect(
        createWebhook({ channel_id: TEST_CHANNEL_ID, name: webhookName }),
      );
      const webhookId = created.id;
      const webhookToken = created.token;
      if (!webhookToken) {
        // Defensive: incoming webhooks always include a token, but if the
        // server omits it we cannot exercise the token route — fail loudly
        // so the operator can investigate, then clean up.
        await runEffect(
          deleteWebhook({ webhook_id: webhookId }).pipe(Effect.ignore),
        );
        throw new Error(
          "createWebhook did not return a token; cannot exercise getWebhookByToken happy path.",
        );
      }
      try {
        const result = await runEffect(
          getWebhookByToken({
            webhook_id: webhookId,
            webhook_token: webhookToken,
          }),
        );
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const webhook = result as any;
        expect(webhook.id).toBe(webhookId);
        expect(webhook.name).toBe(webhookName);
        expect(typeof webhook.token).toBe("string");
        expect(
          webhook.avatar === null || typeof webhook.avatar === "string",
        ).toBe(true);
      } finally {
        await runEffect(
          deleteWebhook({ webhook_id: webhookId }).pipe(Effect.ignore),
        );
      }
    },
    { timeout: 30_000 },
  );

  it("error - NotFound for a non-existent webhook id", async () => {
    await runEffect(
      getWebhookByToken({
        webhook_id: NON_EXISTENT_WEBHOOK_ID,
        webhook_token: BOGUS_WEBHOOK_TOKEN,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord surfaces a missing webhook as NotFound. Some malformed or
          // out-of-range snowflakes may surface as BadRequest.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden", "BadRequest"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });

  it("error - Forbidden or NotFound for a webhook the caller cannot access", async () => {
    await runEffect(
      getWebhookByToken({
        webhook_id: INACCESSIBLE_WEBHOOK_ID,
        webhook_token: BOGUS_WEBHOOK_TOKEN,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // A webhook id paired with a bogus token typically surfaces as
          // Forbidden (invalid webhook token), but Discord often returns
          // NotFound to avoid leaking existence.
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
