import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { createWebhook } from "../src/operations/createWebhook.ts";
import { deleteWebhook } from "../src/operations/deleteWebhook.ts";
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
// MANAGE_WEBHOOKS. Operators must supply DISCORD_TEST_CHANNEL_ID for the
// happy path.
const TEST_CHANNEL_ID = process.env.DISCORD_TEST_CHANNEL_ID;

// Snowflake-format identifier that should not match a real webhook.
const NON_EXISTENT_WEBHOOK_ID = "100000000000000000";

// Discord requires webhook names of 1..80 chars and disallows certain
// substrings ("clyde", "discord").
const webhookName = (suffix: string): string =>
  `dt-delwh-${suffix}-${testRunId}`.slice(0, 80);

describe("deleteWebhook", () => {
  it("happy path - creates a webhook and then deletes it", async () => {
    if (!TEST_CHANNEL_ID) {
      throw new Error(
        "DISCORD_TEST_CHANNEL_ID env var is required for the deleteWebhook happy path",
      );
    }
    await runEffect(
      Effect.gen(function* () {
        const webhook = yield* createWebhook({
          channel_id: TEST_CHANNEL_ID,
          name: webhookName("happy"),
        });
        return yield* deleteWebhook({ webhook_id: webhook.id }).pipe(
          Effect.tap((result) =>
            Effect.sync(() => {
              // 204 No Content; output schema is Void.
              expect(result).toBeUndefined();
            }),
          ),
          Effect.ensuring(
            // Idempotent cleanup in case the primary delete failed.
            deleteWebhook({ webhook_id: webhook.id }).pipe(Effect.ignore),
          ),
        );
      }),
    );
  });

  it("error - NotFound for non-existent webhook_id", async () => {
    // Discord returns 404 NotFound (10015 — Unknown Webhook) for an
    // unknown webhook_id. May surface as 403 Forbidden if route checks
    // permissions before existence.
    await runEffect(
      deleteWebhook({ webhook_id: NON_EXISTENT_WEBHOOK_ID }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden"]).toContain((e as any)._tag);
        }),
      ),
    );
  });

  it("error - Forbidden when the bot cannot manage the webhook", async () => {
    // A snowflake-shaped webhook_id the bot does not own typically yields
    // 403 Forbidden (50013 — Missing Permissions / 50001 — Missing Access),
    // or 404 NotFound if the route 404s before the permission check.
    await runEffect(
      deleteWebhook({ webhook_id: NON_EXISTENT_WEBHOOK_ID }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["Forbidden", "NotFound"]).toContain((e as any)._tag);
        }),
      ),
    );
  });
});
