import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { createMessage } from "../src/operations/createMessage.ts";
import { deleteMessage } from "../src/operations/deleteMessage.ts";
import { getAnswerVoters } from "../src/operations/getAnswerVoters.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// Requires a text channel where the bot can post messages. The happy path
// creates a poll-bearing message and reads its voters; the bot must be
// able to post polls (CREATE_POLLS / SEND_MESSAGES).
const TEST_CHANNEL_ID = process.env.DISCORD_TEST_CHANNEL_ID;

// Snowflake-format identifiers that should not match real entities.
const NON_EXISTENT_CHANNEL_ID = "100000000000000000";
const NON_EXISTENT_MESSAGE_ID = "100000000000000001";

describe("getAnswerVoters", () => {
  it(
    "happy path - lists voters for a fresh poll's first answer",
    async () => {
      if (!TEST_CHANNEL_ID) {
        throw new Error(
          "DISCORD_TEST_CHANNEL_ID env var is required for the getAnswerVoters happy path",
        );
      }
      await runEffect(
        Effect.gen(function* () {
          const msg = yield* createMessage({
            channel_id: TEST_CHANNEL_ID,
            poll: {
              question: { text: `distilled-poll-${testRunId}` },
              answers: [
                { poll_media: { text: "yes" } },
                { poll_media: { text: "no" } },
              ],
              duration: 1,
              allow_multiselect: false,
              layout_type: 1,
            },
          });
          return yield* getAnswerVoters({
            channel_id: TEST_CHANNEL_ID,
            message_id: msg.id,
            answer_id: 1,
          }).pipe(
            Effect.tap((result) =>
              Effect.sync(() => {
                expect(Array.isArray(result.users)).toBe(true);
                for (const user of result.users) {
                  expect(typeof user.id).toBe("string");
                  expect(typeof user.username).toBe("string");
                }
              }),
            ),
            Effect.ensuring(
              deleteMessage({
                channel_id: TEST_CHANNEL_ID,
                message_id: msg.id,
              }).pipe(Effect.ignore),
            ),
          );
        }),
      );
    },
    30_000,
  );

  it("error - NotFound for non-existent message_id in a real channel", async () => {
    if (!TEST_CHANNEL_ID) {
      throw new Error(
        "DISCORD_TEST_CHANNEL_ID env var is required for the NotFound test",
      );
    }
    // Discord returns 404 NotFound for an unknown message; may surface as
    // 403 Forbidden depending on which check fires first.
    await runEffect(
      getAnswerVoters({
        channel_id: TEST_CHANNEL_ID,
        message_id: NON_EXISTENT_MESSAGE_ID,
        answer_id: 1,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden"]).toContain((e as any)._tag);
        }),
      ),
    );
  });

  it("error - Forbidden for a channel_id the bot cannot see", async () => {
    // A snowflake-shaped channel_id the bot cannot access typically yields
    // 403 Forbidden (50001 — Missing Access), or 404 NotFound if the route
    // 404s before the permission check.
    await runEffect(
      getAnswerVoters({
        channel_id: NON_EXISTENT_CHANNEL_ID,
        message_id: NON_EXISTENT_MESSAGE_ID,
        answer_id: 1,
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
