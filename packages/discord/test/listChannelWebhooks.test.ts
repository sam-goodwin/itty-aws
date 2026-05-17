import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { CredentialsFromEnv } from "../src/credentials.ts";
import { createWebhook } from "../src/operations/createWebhook.ts";
import { deleteWebhook } from "../src/operations/deleteWebhook.ts";
import { listChannelWebhooks } from "../src/operations/listChannelWebhooks.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// GET /channels/{channel_id}/webhooks lists active webhooks for a channel.
// The happy path creates a fresh webhook in an operator-supplied text
// channel (DISCORD_TEST_CHANNEL_ID), lists webhooks, asserts our created
// id is present, then deletes the created webhook on cleanup. The bot
// must have MANAGE_WEBHOOKS in that channel.
const TEST_CHANNEL_ID = process.env.DISCORD_TEST_CHANNEL_ID;

// Snowflake-shaped ids unlikely to resolve to any real channel.
const NON_EXISTENT_CHANNEL_ID = `1000000000000000${testRunId.slice(0, 2)}`;
const INACCESSIBLE_CHANNEL_ID = "100000000000000001";

describe("listChannelWebhooks", () => {
  it(
    "happy path - lists webhooks for a channel including a freshly created one",
    async () => {
      if (!TEST_CHANNEL_ID) {
        throw new Error(
          "DISCORD_TEST_CHANNEL_ID env var is required for the listChannelWebhooks happy path. " +
            "Set it to a text channel id where the bot has MANAGE_WEBHOOKS.",
        );
      }
      const webhookName = `distilled-discord-webhook-${testRunId}`;
      const created = await runEffect(
        createWebhook({ channel_id: TEST_CHANNEL_ID, name: webhookName }),
      );
      const webhookId = created.id;
      try {
        const result = await runEffect(
          listChannelWebhooks({ channel_id: TEST_CHANNEL_ID }),
        );
        expect(Array.isArray(result)).toBe(true);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const ids = (result as any[]).map((w) => w.id);
        expect(ids).toContain(webhookId);
        for (const w of result) {
          // The output schema is Schema.Array(Schema.Unknown); validate the
          // documented webhook shape defensively.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const wh = w as any;
          expect(typeof wh.id).toBe("string");
          expect(wh.channel_id).toBe(TEST_CHANNEL_ID);
          expect(typeof wh.type).toBe("number");
          if (wh.id === webhookId) {
            expect(wh.name).toBe(webhookName);
          }
        }
      } finally {
        await runEffect(
          deleteWebhook({ webhook_id: webhookId }).pipe(Effect.ignore),
        );
      }
    },
    { timeout: 30_000 },
  );

  it("error - NotFound for a non-existent channel_id", async () => {
    await runEffect(
      listChannelWebhooks({ channel_id: NON_EXISTENT_CHANNEL_ID }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord surfaces a missing channel as NotFound. Bot tokens calling
          // for a channel they cannot access typically receive Forbidden, and
          // malformed snowflakes may surface as BadRequest.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden", "BadRequest"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });

  it("error - Forbidden or NotFound for a channel the bot cannot access", async () => {
    await runEffect(
      listChannelWebhooks({ channel_id: INACCESSIBLE_CHANNEL_ID }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // The bot can only list webhooks in channels it has MANAGE_WEBHOOKS;
          // for any other channel Discord returns Forbidden, but it often
          // returns NotFound to avoid leaking existence.
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
