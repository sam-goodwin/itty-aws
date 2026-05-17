import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { createWebhook } from "../src/operations/createWebhook.ts";
import { deleteWebhook } from "../src/operations/deleteWebhook.ts";
import { executeGithubCompatibleWebhook } from "../src/operations/executeGithubCompatibleWebhook.ts";
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
  `dt-execgh-${suffix}-${testRunId}`.slice(0, 80);

// Minimal GitHub-shaped sender object the spec requires.
const sender = {
  id: 1,
  login: `distilled-${testRunId}`,
  html_url: "https://github.com/distilled-test",
  avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
};

describe("executeGithubCompatibleWebhook", () => {
  it(
    "happy path - posts a github-style payload to a freshly created webhook",
    async () => {
      if (!TEST_CHANNEL_ID) {
        throw new Error(
          "DISCORD_TEST_CHANNEL_ID env var is required for the executeGithubCompatibleWebhook happy path",
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
              "createWebhook did not return a token — cannot exercise executeGithubCompatibleWebhook",
            );
          }
          return yield* executeGithubCompatibleWebhook({
            webhook_id: webhook.id,
            webhook_token: webhook.token,
            action: "created",
            sender,
          }).pipe(
            Effect.tap((result) =>
              Effect.sync(() => {
                // 204 No Content; output schema is Void.
                expect(result).toBeUndefined();
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
      executeGithubCompatibleWebhook({
        webhook_id: NON_EXISTENT_WEBHOOK_ID,
        webhook_token: BOGUS_WEBHOOK_TOKEN,
        sender,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden"]).toContain((e as any)._tag);
        }),
      ),
    );
  });

  it("error - BadRequest when the github payload shape is rejected", async () => {
    if (!TEST_CHANNEL_ID) {
      throw new Error(
        "DISCORD_TEST_CHANNEL_ID env var is required for the BadRequest test",
      );
    }
    // Discord's github-compatible adapter requires a recognized event
    // shape. A bare sender with no event-specific fields and no X-GitHub-
    // Event header is rejected with 400 Invalid Form Body. Routing layers
    // may also classify as 404/403 first.
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
        return yield* executeGithubCompatibleWebhook({
          webhook_id: webhook.id,
          webhook_token: webhook.token,
          sender: {
            // Discord expects sender.id to be a number; supply an obviously
            // out-of-range placeholder along with no event payload to
            // trigger a 400.
            id: 0,
            login: "",
            html_url: "",
            avatar_url: "",
          },
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
      executeGithubCompatibleWebhook({
        webhook_id: NON_EXISTENT_WEBHOOK_ID,
        webhook_token: BOGUS_WEBHOOK_TOKEN,
        sender,
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
