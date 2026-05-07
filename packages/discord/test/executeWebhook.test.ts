import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { createWebhook } from "../src/operations/createWebhook.ts";
import { deleteWebhook } from "../src/operations/deleteWebhook.ts";
import { executeWebhook } from "../src/operations/executeWebhook.ts";
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
// so we can create a webhook and obtain its token. The happy path
// additionally requires DISCORD_TEST_ALLOW_EXECUTE_WEBHOOK=1 because the
// SDK input schema for executeWebhook is missing the body fields
// (content/embeds/components/...), so a successful run requires the
// operator's confirmation that the codegen gap has been worked around
// (e.g. by patching the spec or sending body content out of band).
const TEST_CHANNEL_ID = process.env.DISCORD_TEST_CHANNEL_ID;
const ALLOW_EXECUTE_WEBHOOK =
  process.env.DISCORD_TEST_ALLOW_EXECUTE_WEBHOOK === "1";

// Snowflake-format identifier and a clearly bogus token.
const NON_EXISTENT_WEBHOOK_ID = "100000000000000000";
const BOGUS_WEBHOOK_TOKEN = `not-a-real-webhook-token-${testRunId}`;

// Discord requires webhook names of 1..80 chars and disallows certain
// substrings ("clyde", "discord").
const webhookName = (suffix: string): string =>
  `dt-execwh-${suffix}-${testRunId}`.slice(0, 80);

describe("executeWebhook", () => {
  it(
    "happy path - executes a freshly created webhook with wait=true",
    async () => {
      if (!TEST_CHANNEL_ID || !ALLOW_EXECUTE_WEBHOOK) {
        throw new Error(
          "DISCORD_TEST_CHANNEL_ID and DISCORD_TEST_ALLOW_EXECUTE_WEBHOOK=1 are required for the executeWebhook happy path. " +
            "The SDK input is missing body fields (content/embeds/components/...) due to a codegen gap; the happy path is gated until the spec is patched.",
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
              "createWebhook did not return a token — cannot exercise executeWebhook",
            );
          }
          return yield* executeWebhook({
            webhook_id: webhook.id,
            webhook_token: webhook.token,
            wait: true,
          }).pipe(
            Effect.tap((message) =>
              Effect.sync(() => {
                expect(typeof message.id).toBe("string");
                expect(message.id.length).toBeGreaterThan(0);
                expect(typeof message.channel_id).toBe("string");
                expect(typeof message.content).toBe("string");
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
      executeWebhook({
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

  it("error - BadRequest when executing a real webhook without body content", async () => {
    if (!TEST_CHANNEL_ID) {
      throw new Error(
        "DISCORD_TEST_CHANNEL_ID env var is required for the BadRequest test",
      );
    }
    // Discord requires content / embeds / components / sticker_ids / poll
    // / files. The SDK input has none of those exposed, so calling
    // against a real webhook produces 400 Invalid Form Body.
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
        return yield* executeWebhook({
          webhook_id: webhook.id,
          webhook_token: webhook.token,
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
      executeWebhook({
        webhook_id: NON_EXISTENT_WEBHOOK_ID,
        webhook_token: BOGUS_WEBHOOK_TOKEN,
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
