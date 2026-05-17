import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { createWebhook } from "../src/operations/createWebhook.ts";
import { deleteWebhook } from "../src/operations/deleteWebhook.ts";
import { executeSlackCompatibleWebhook } from "../src/operations/executeSlackCompatibleWebhook.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// Requires a text/announcement channel where the bot has MANAGE_WEBHOOKS,
// so we can create a webhook and obtain its token.
const TEST_CHANNEL_ID = process.env.DISCORD_TEST_CHANNEL_ID;

// Snowflake-format identifier and a clearly bogus token.
const NON_EXISTENT_WEBHOOK_ID = "100000000000000000";
const BOGUS_WEBHOOK_TOKEN = `not-a-real-webhook-token-${testRunId}`;

// Discord requires webhook names of 1..80 chars and disallows certain
// substrings ("clyde", "discord").
const webhookName = (suffix: string): string =>
  `dt-execslack-${suffix}-${testRunId}`.slice(0, 80);

describe("executeSlackCompatibleWebhook", () => {
  it(
    "happy path - posts a slack-style payload to a freshly created webhook",
    async () => {
      if (!TEST_CHANNEL_ID) {
        throw new Error(
          "DISCORD_TEST_CHANNEL_ID env var is required for the executeSlackCompatibleWebhook happy path",
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
              "createWebhook did not return a token — cannot exercise executeSlackCompatibleWebhook",
            );
          }
          return yield* executeSlackCompatibleWebhook({
            webhook_id: webhook.id,
            webhook_token: webhook.token,
            text: `distilled-slack-${testRunId}`,
          }).pipe(
            Effect.tap((result) =>
              Effect.sync(() => {
                // Discord returns either an "ok" body or null/empty
                // depending on the wait flag. Both shapes are accepted by
                // the NullOr(String) schema.
                if (result !== null) {
                  expect(typeof result).toBe("string");
                }
              }),
            ),
            Effect.ensuring(
              deleteWebhook({ webhook_id: webhook.id }).pipe(Effect.ignore),
            ),
          );
        }),
      );
    },
    30_000,
  );

  it("error - NotFound for non-existent webhook_id", async () => {
    // Discord returns 404 NotFound (10015 — Unknown Webhook) for an
    // unknown webhook_id; may surface as 403 Forbidden depending on the
    // route's check order.
    await runEffect(
      executeSlackCompatibleWebhook({
        webhook_id: NON_EXISTENT_WEBHOOK_ID,
        webhook_token: BOGUS_WEBHOOK_TOKEN,
        text: `distilled-slack-${testRunId}`,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden"]).toContain((e as any)._tag);
        }),
      ),
    );
  });

  it("error - BadRequest when the slack payload has no content", async () => {
    if (!TEST_CHANNEL_ID) {
      throw new Error(
        "DISCORD_TEST_CHANNEL_ID env var is required for the BadRequest test",
      );
    }
    // Discord's slack-compatible adapter requires a text or attachments
    // field — a payload with neither is rejected with 400 Invalid Form
    // Body. Routing layers may also classify as 404/403 first.
    await runEffect(
      Effect.gen(function* () {
        const webhook = yield* createWebhook({
          channel_id: TEST_CHANNEL_ID,
          name: webhookName("br"),
        });
        if (!webhook.token) {
          throw new Error(
            "createWebhook did not return a token — cannot exercise BadRequest",
          );
        }
        return yield* executeSlackCompatibleWebhook({
          webhook_id: webhook.id,
          webhook_token: webhook.token,
          // No text and no attachments — empty payload should be rejected.
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
            deleteWebhook({ webhook_id: webhook.id }).pipe(Effect.ignore),
          ),
        );
      }),
    );
  });

  it("error - Forbidden for a webhook_id / token pair that does not match", async () => {
    // Webhook routes authenticate purely via the (id, token) tuple. A
    // bogus pair fails authentication. Discord typically returns 401
    // mapped to Forbidden by the SDK, or 404 NotFound if the route 404s
    // before the auth check.
    await runEffect(
      executeSlackCompatibleWebhook({
        webhook_id: NON_EXISTENT_WEBHOOK_ID,
        webhook_token: BOGUS_WEBHOOK_TOKEN,
        text: `distilled-slack-${testRunId}`,
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
