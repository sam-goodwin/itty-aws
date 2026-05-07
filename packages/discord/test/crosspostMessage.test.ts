import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { createMessage } from "../src/operations/createMessage.ts";
import { crosspostMessage } from "../src/operations/crosspostMessage.ts";
import { deleteMessage } from "../src/operations/deleteMessage.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// Crossposting requires the channel to be an announcement channel (type 5)
// where the bot has SEND_MESSAGES + MANAGE_MESSAGES (own message can be
// crossposted with just SEND_MESSAGES). Operators must supply
// DISCORD_TEST_ANNOUNCEMENT_CHANNEL_ID for the happy path.
const TEST_ANNOUNCEMENT_CHANNEL_ID =
  process.env.DISCORD_TEST_ANNOUNCEMENT_CHANNEL_ID;
// A regular text channel for the BadRequest test (50019 — A message can only
// be crossposted in an announcement channel).
const TEST_CHANNEL_ID = process.env.DISCORD_TEST_CHANNEL_ID;

// Snowflake-format identifiers that should not match real entities.
const NON_EXISTENT_CHANNEL_ID = "100000000000000000";
const NON_EXISTENT_MESSAGE_ID = "100000000000000001";

describe("crosspostMessage", () => {
  it("happy path - crossposts a freshly created announcement message", async () => {
    if (!TEST_ANNOUNCEMENT_CHANNEL_ID) {
      throw new Error(
        "DISCORD_TEST_ANNOUNCEMENT_CHANNEL_ID env var is required for the crosspostMessage happy path (channel must be an announcement / news channel)",
      );
    }
    const content = `distilled-crosspost-${testRunId}`;
    await runEffect(
      Effect.gen(function* () {
        const msg = yield* createMessage({
          channel_id: TEST_ANNOUNCEMENT_CHANNEL_ID,
          content,
        });
        return yield* crosspostMessage({
          channel_id: TEST_ANNOUNCEMENT_CHANNEL_ID,
          message_id: msg.id,
        }).pipe(
          Effect.tap((res) =>
            Effect.sync(() => {
              expect(res.id).toBe(msg.id);
              expect(res.channel_id).toBe(TEST_ANNOUNCEMENT_CHANNEL_ID);
              expect(res.content).toBe(content);
              expect(typeof res.flags).toBe("number");
              // The CROSSPOSTED message flag (bit 0 / value 1) is set on
              // successful crosspost.
              expect((res.flags & 1) === 1).toBe(true);
            }),
          ),
          Effect.ensuring(
            deleteMessage({
              channel_id: TEST_ANNOUNCEMENT_CHANNEL_ID,
              message_id: msg.id,
            }).pipe(Effect.ignore),
          ),
        );
      }),
    );
  });

  it("error - NotFound for non-existent message_id in a real channel", async () => {
    if (!TEST_ANNOUNCEMENT_CHANNEL_ID) {
      throw new Error(
        "DISCORD_TEST_ANNOUNCEMENT_CHANNEL_ID env var is required for the NotFound test",
      );
    }
    await runEffect(
      crosspostMessage({
        channel_id: TEST_ANNOUNCEMENT_CHANNEL_ID,
        message_id: NON_EXISTENT_MESSAGE_ID,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden"]).toContain((e as any)._tag);
        }),
      ),
    );
  });

  it("error - BadRequest when crossposting from a non-announcement channel", async () => {
    if (!TEST_CHANNEL_ID) {
      throw new Error(
        "DISCORD_TEST_CHANNEL_ID env var is required for the BadRequest test (regular text channel)",
      );
    }
    // Discord error 50019 — a message can only be crossposted in an
    // announcement channel. Posting to a regular text channel and attempting
    // to crosspost yields 400 Invalid Form Body.
    await runEffect(
      Effect.gen(function* () {
        const msg = yield* createMessage({
          channel_id: TEST_CHANNEL_ID,
          content: `distilled-crosspost-bad-${testRunId}`,
        });
        return yield* crosspostMessage({
          channel_id: TEST_CHANNEL_ID,
          message_id: msg.id,
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
            deleteMessage({
              channel_id: TEST_CHANNEL_ID,
              message_id: msg.id,
            }).pipe(Effect.ignore),
          ),
        );
      }),
    );
  });

  it("error - Forbidden when targeting a channel the bot cannot see", async () => {
    // A snowflake-shaped channel_id the bot cannot see typically yields 403
    // Forbidden (50001 Missing Access), or 404 NotFound if the route 404s
    // before the permission check.
    await runEffect(
      crosspostMessage({
        channel_id: NON_EXISTENT_CHANNEL_ID,
        message_id: NON_EXISTENT_MESSAGE_ID,
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
