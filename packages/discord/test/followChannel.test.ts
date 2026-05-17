import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { deleteWebhook } from "../src/operations/deleteWebhook.ts";
import { followChannel } from "../src/operations/followChannel.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);
// testRunId is unused for path-only POST inputs but kept for parity with
// other discord tests that include it in resource identifiers.
void testRunId;

// followChannel mirrors an announcement channel (type 5 — "news") into a
// destination text channel by creating a webhook in the destination. The
// happy path requires:
//   - DISCORD_TEST_ANNOUNCEMENT_CHANNEL_ID — source announcement channel
//   - DISCORD_TEST_CHANNEL_ID — destination text channel where the bot has
//     MANAGE_WEBHOOKS
const TEST_ANNOUNCEMENT_CHANNEL_ID =
  process.env.DISCORD_TEST_ANNOUNCEMENT_CHANNEL_ID;
const TEST_CHANNEL_ID = process.env.DISCORD_TEST_CHANNEL_ID;

// Snowflake-format identifiers that should not match real channels.
const NON_EXISTENT_CHANNEL_ID = "100000000000000000";
const NON_EXISTENT_WEBHOOK_TARGET_ID = "100000000000000001";

describe("followChannel", () => {
  it(
    "happy path - follows an announcement channel into a destination text channel",
    async () => {
      if (!TEST_ANNOUNCEMENT_CHANNEL_ID || !TEST_CHANNEL_ID) {
        throw new Error(
          "DISCORD_TEST_ANNOUNCEMENT_CHANNEL_ID and DISCORD_TEST_CHANNEL_ID env vars are required for the followChannel happy path",
        );
      }
      await runEffect(
        Effect.gen(function* () {
          const follower = yield* followChannel({
            channel_id: TEST_ANNOUNCEMENT_CHANNEL_ID,
            webhook_channel_id: TEST_CHANNEL_ID,
          });
          return yield* Effect.sync(() => {
            expect(follower.channel_id).toBe(TEST_ANNOUNCEMENT_CHANNEL_ID);
            expect(typeof follower.webhook_id).toBe("string");
            expect(follower.webhook_id.length).toBeGreaterThan(0);
          }).pipe(
            Effect.ensuring(
              // Delete the mirror webhook Discord just created in the
              // destination channel.
              deleteWebhook({ webhook_id: follower.webhook_id }).pipe(
                Effect.ignore,
              ),
            ),
          );
        }),
      );
    },
    30_000,
  );

  it("error - NotFound for non-existent source channel_id", async () => {
    // Discord returns 404 NotFound for an unknown source channel; may
    // surface as 403 Forbidden when the bot can't see it.
    await runEffect(
      followChannel({
        channel_id: NON_EXISTENT_CHANNEL_ID,
        webhook_channel_id: TEST_CHANNEL_ID ?? NON_EXISTENT_WEBHOOK_TARGET_ID,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden"]).toContain((e as any)._tag);
        }),
      ),
    );
  });

  it("error - BadRequest when the source is not an announcement channel", async () => {
    if (!TEST_CHANNEL_ID) {
      throw new Error(
        "DISCORD_TEST_CHANNEL_ID env var is required for the BadRequest test",
      );
    }
    // Following a channel that is not type 5 (Announcement) is rejected
    // with 400 Invalid Form Body. Routing layers may also classify as
    // 404/403 first.
    await runEffect(
      followChannel({
        channel_id: TEST_CHANNEL_ID,
        webhook_channel_id: TEST_CHANNEL_ID,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["BadRequest", "Forbidden", "NotFound"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });

  it("error - Forbidden when the destination channel cannot be managed by the bot", async () => {
    // A snowflake-shaped webhook_channel_id the bot does not own /
    // cannot manage typically yields 403 Forbidden (50013 — Missing
    // Permissions / 50001 — Missing Access). May surface as 404 NotFound
    // if the route 404s before the permission check.
    await runEffect(
      followChannel({
        channel_id:
          TEST_ANNOUNCEMENT_CHANNEL_ID ?? NON_EXISTENT_CHANNEL_ID,
        webhook_channel_id: NON_EXISTENT_WEBHOOK_TARGET_ID,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
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
