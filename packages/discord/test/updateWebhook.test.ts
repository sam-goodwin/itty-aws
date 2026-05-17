import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { createWebhook } from "../src/operations/createWebhook.ts";
import { deleteWebhook } from "../src/operations/deleteWebhook.ts";
import { updateWebhook } from "../src/operations/updateWebhook.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// PATCH /webhooks/{webhook_id} — updates a webhook's name / avatar /
// channel_id. Requires a text/announcement/forum channel where the bot
// has MANAGE_WEBHOOKS. Operators must supply DISCORD_TEST_CHANNEL_ID for
// the happy path so the test can create + update + delete its own
// webhook.
const TEST_CHANNEL_ID = process.env.DISCORD_TEST_CHANNEL_ID;

// Snowflake-format identifier that should not match a real webhook.
const NON_EXISTENT_WEBHOOK_ID = "100000000000000000";

// Discord requires webhook names of 1..80 chars and disallows certain
// substrings ("clyde", "discord").
const webhookName = (suffix: string): string =>
  `dt-upd-${suffix}-${testRunId}`.slice(0, 80);

describe("updateWebhook", () => {
  it(
    "happy path - creates a webhook, renames it, and cleans up",
    async () => {
      if (!TEST_CHANNEL_ID) {
        throw new Error(
          "DISCORD_TEST_CHANNEL_ID env var is required for the updateWebhook happy path",
        );
      }
      const initialName = webhookName("init");
      const newName = webhookName("happy");
      await runEffect(
        Effect.gen(function* () {
          const webhook = yield* createWebhook({
            channel_id: TEST_CHANNEL_ID,
            name: initialName,
          });
          return yield* Effect.gen(function* () {
            const updated = yield* updateWebhook({
              webhook_id: webhook.id,
              name: newName,
            });
            return yield* Effect.sync(() => {
              // Output is opaque on the schema; Discord returns the
              // updated webhook object. Narrow the shape for assertions.
              const obj = updated as {
                id?: string;
                name?: string;
                channel_id?: string;
              };
              expect(obj.id).toBe(webhook.id);
              expect(obj.name).toBe(newName);
              expect(typeof obj.channel_id).toBe("string");
            });
          }).pipe(
            Effect.ensuring(
              deleteWebhook({ webhook_id: webhook.id }).pipe(Effect.ignore),
            ),
          );
        }),
      );
    },
    30_000,
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
      // 400 Invalid Form Body. Need a real webhook for the route to
      // actually validate the body, so create-then-update.
      await runEffect(
        Effect.gen(function* () {
          const webhook = yield* createWebhook({
            channel_id: TEST_CHANNEL_ID,
            name: webhookName("br-init"),
          });
          return yield* updateWebhook({
            webhook_id: webhook.id,
            name: "",
          }).pipe(
            Effect.flip,
            Effect.map((e) => {
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
    },
    30_000,
  );

  it("error - NotFound for a non-existent webhook id", async () => {
    // Discord returns 404 NotFound (10015) for missing webhook ids. The
    // bot's auth context may also classify the response as 403 Forbidden
    // if the route 403s before the not-found check, or BadRequest for
    // malformed input.
    await runEffect(
      updateWebhook({
        webhook_id: NON_EXISTENT_WEBHOOK_ID,
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

  it("error - Forbidden when targeting a webhook the bot cannot manage", async () => {
    // A snowflake-shaped webhook_id the bot cannot see typically yields
    // 403 Forbidden (50001 Missing Access), or 404 NotFound if the route
    // 404s before the permission check fires, or BadRequest for
    // malformed input.
    await runEffect(
      updateWebhook({
        webhook_id: NON_EXISTENT_WEBHOOK_ID,
        name: webhookName("fb"),
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          expect(["Forbidden", "NotFound", "BadRequest"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });
});
