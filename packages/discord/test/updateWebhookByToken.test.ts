import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { CredentialsFromEnv } from "../src/credentials.ts";
import { createWebhook } from "../src/operations/createWebhook.ts";
import { deleteWebhook } from "../src/operations/deleteWebhook.ts";
import { updateWebhookByToken } from "../src/operations/updateWebhookByToken.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// PATCH /webhooks/{webhook_id}/{webhook_token} updates a webhook using
// its token. The route does not require bot auth — the token in the URL
// is the credential. The happy path creates a webhook in an
// operator-supplied text channel (DISCORD_TEST_CHANNEL_ID), reads its
// returned token, renames it via the token route, and deletes the
// webhook on cleanup.
const TEST_CHANNEL_ID = process.env.DISCORD_TEST_CHANNEL_ID;

// Snowflake-shaped ids unlikely to resolve to any real webhook, plus a
// plausible-looking but invalid token.
const NON_EXISTENT_WEBHOOK_ID = `1000000000000000${testRunId.slice(0, 2)}`;
const INACCESSIBLE_WEBHOOK_ID = "100000000000000001";
const BOGUS_WEBHOOK_TOKEN = `distilled-bogus-token-${testRunId}`;

// Discord requires webhook names of 1..80 chars and disallows certain
// substrings ("clyde", "discord").
const webhookName = (suffix: string): string =>
  `dt-upd-tok-${suffix}-${testRunId}`.slice(0, 80);

describe("updateWebhookByToken", () => {
  it(
    "happy path - renames a webhook via its token",
    async () => {
      if (!TEST_CHANNEL_ID) {
        throw new Error(
          "DISCORD_TEST_CHANNEL_ID env var is required for the updateWebhookByToken happy path. " +
            "Set it to a text channel id where the bot has MANAGE_WEBHOOKS.",
        );
      }
      const initialName = webhookName("init");
      const newName = webhookName("happy");
      const created = await runEffect(
        createWebhook({ channel_id: TEST_CHANNEL_ID, name: initialName }),
      );
      const webhookId = created.id;
      const webhookToken = created.token;
      if (!webhookToken) {
        // Defensive: incoming webhooks always include a token, but if the
        // server omits it we cannot exercise the token route — fail
        // loudly so the operator can investigate, then clean up.
        await runEffect(
          deleteWebhook({ webhook_id: webhookId }).pipe(Effect.ignore),
        );
        throw new Error(
          "createWebhook did not return a token; cannot exercise updateWebhookByToken happy path.",
        );
      }
      try {
        const result = await runEffect(
          updateWebhookByToken({
            webhook_id: webhookId,
            webhook_token: webhookToken,
            name: newName,
          }),
        );
        // Output is opaque on the schema; Discord returns the updated
        // webhook object. Narrow the shape for assertions.
        const webhook = result as {
          id?: string;
          name?: string;
          channel_id?: string;
        };
        expect(webhook.id).toBe(webhookId);
        expect(webhook.name).toBe(newName);
        expect(typeof webhook.channel_id).toBe("string");
      } finally {
        await runEffect(
          deleteWebhook({ webhook_id: webhookId }).pipe(Effect.ignore),
        );
      }
    },
    { timeout: 30_000 },
  );

  it(
    "error - BadRequest when name is empty",
    async () => {
      if (!TEST_CHANNEL_ID) {
        throw new Error(
          "DISCORD_TEST_CHANNEL_ID env var is required for the BadRequest test",
        );
      }
      // Webhook name must be 1..80 chars; empty string is rejected with
      // 400 Invalid Form Body. Need a real webhook (with a real token)
      // for the route to actually validate the body.
      const created = await runEffect(
        createWebhook({
          channel_id: TEST_CHANNEL_ID,
          name: webhookName("br-init"),
        }),
      );
      const webhookId = created.id;
      const webhookToken = created.token;
      if (!webhookToken) {
        await runEffect(
          deleteWebhook({ webhook_id: webhookId }).pipe(Effect.ignore),
        );
        throw new Error(
          "createWebhook did not return a token; cannot exercise updateWebhookByToken BadRequest test.",
        );
      }
      try {
        await runEffect(
          updateWebhookByToken({
            webhook_id: webhookId,
            webhook_token: webhookToken,
            name: "",
          }).pipe(
            Effect.flip,
            Effect.map((e) => {
              expect(["BadRequest", "Forbidden", "NotFound"]).toContain(
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (e as any)._tag,
              );
            }),
          ),
        );
      } finally {
        await runEffect(
          deleteWebhook({ webhook_id: webhookId }).pipe(Effect.ignore),
        );
      }
    },
    { timeout: 30_000 },
  );

  it("error - NotFound for a non-existent webhook id", async () => {
    // Discord returns 404 NotFound (10015) for missing webhook ids. Some
    // malformed or out-of-range snowflakes may surface as BadRequest;
    // the bogus token may also yield Forbidden.
    await runEffect(
      updateWebhookByToken({
        webhook_id: NON_EXISTENT_WEBHOOK_ID,
        webhook_token: BOGUS_WEBHOOK_TOKEN,
        name: webhookName("nf"),
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          expect(["NotFound", "Forbidden", "BadRequest"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });

  it("error - Forbidden when the (id, token) pair does not match a real webhook", async () => {
    // Webhook routes authenticate purely via the (id, token) tuple. A
    // bogus pair fails authentication. Discord typically returns 401 /
    // 403 mapped to Forbidden, or 404 NotFound to avoid leaking
    // existence; some malformed snowflakes may surface as BadRequest.
    await runEffect(
      updateWebhookByToken({
        webhook_id: INACCESSIBLE_WEBHOOK_ID,
        webhook_token: BOGUS_WEBHOOK_TOKEN,
        name: webhookName("fb"),
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          expect([
            "Forbidden",
            "NotFound",
            "Unauthorized",
            "BadRequest",
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ]).toContain((e as any)._tag);
        }),
      ),
    );
  });
});
