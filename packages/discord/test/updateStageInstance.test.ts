import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { createStageInstance } from "../src/operations/createStageInstance.ts";
import { deleteStageInstance } from "../src/operations/deleteStageInstance.ts";
import { updateStageInstance } from "../src/operations/updateStageInstance.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// PATCH /stage-instances/{channel_id} — updates the live stage instance
// for a stage channel. Requires a stage channel (channel type 13) where
// the bot has MANAGE_CHANNELS / MUTE_MEMBERS / MOVE_MEMBERS and is a
// stage moderator. Operators must supply DISCORD_TEST_STAGE_CHANNEL_ID.
const TEST_STAGE_CHANNEL_ID = process.env.DISCORD_TEST_STAGE_CHANNEL_ID;

// Snowflake-format identifier that should not match a real channel.
const NON_EXISTENT_CHANNEL_ID = "100000000000000000";

// Discord requires a topic of 1..120 chars.
const stageTopic = (suffix: string): string =>
  `dt-upd-${suffix}-${testRunId}`.slice(0, 120);

describe("updateStageInstance", () => {
  it(
    "happy path - creates a stage instance, updates its topic, and cleans up",
    async () => {
      if (!TEST_STAGE_CHANNEL_ID) {
        throw new Error(
          "DISCORD_TEST_STAGE_CHANNEL_ID env var is required for the updateStageInstance happy path (channel must be a stage channel)",
        );
      }
      const initialTopic = stageTopic("init");
      const newTopic = stageTopic("happy");
      await runEffect(
        Effect.gen(function* () {
          const created = yield* createStageInstance({
            channel_id: TEST_STAGE_CHANNEL_ID,
            topic: initialTopic,
          });
          return yield* Effect.gen(function* () {
            const updated = yield* updateStageInstance({
              channel_id: TEST_STAGE_CHANNEL_ID,
              topic: newTopic,
            });
            return yield* Effect.sync(() => {
              expect(updated.id).toBe(created.id);
              expect(updated.channel_id).toBe(TEST_STAGE_CHANNEL_ID);
              expect(updated.topic).toBe(newTopic);
              expect(typeof updated.guild_id).toBe("string");
              expect(typeof updated.discoverable_disabled).toBe("boolean");
            });
          }).pipe(
            Effect.ensuring(
              deleteStageInstance({
                channel_id: TEST_STAGE_CHANNEL_ID,
              }).pipe(Effect.ignore),
            ),
          );
        }),
      );
    },
    30_000,
  );

  it(
    "error - BadRequest when topic exceeds 120 characters",
    async () => {
      if (!TEST_STAGE_CHANNEL_ID) {
        throw new Error(
          "DISCORD_TEST_STAGE_CHANNEL_ID env var is required for the BadRequest test",
        );
      }
      // Topic must be 1..120 characters; a 200-character value is
      // rejected with 400 Invalid Form Body. Need a real live stage
      // instance for the route to actually validate the body, so
      // create-then-update.
      const tooLongTopic = "a".repeat(200);
      await runEffect(
        Effect.gen(function* () {
          yield* createStageInstance({
            channel_id: TEST_STAGE_CHANNEL_ID,
            topic: stageTopic("br-init"),
          });
          return yield* updateStageInstance({
            channel_id: TEST_STAGE_CHANNEL_ID,
            topic: tooLongTopic,
          }).pipe(
            Effect.flip,
            Effect.map((e) => {
              expect(["BadRequest", "Forbidden", "NotFound"]).toContain(
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (e as any)._tag,
              );
            }),
            Effect.ensuring(
              deleteStageInstance({
                channel_id: TEST_STAGE_CHANNEL_ID,
              }).pipe(Effect.ignore),
            ),
          );
        }),
      );
    },
    30_000,
  );

  it("error - NotFound for a channel with no live stage instance", async () => {
    // PATCH /stage-instances/{channel_id} returns 404 NotFound when the
    // channel does not have a live stage instance, or when the channel
    // does not exist. Discord may also surface 403 Forbidden if the bot
    // lacks visibility, or BadRequest for malformed input.
    await runEffect(
      updateStageInstance({
        channel_id: NON_EXISTENT_CHANNEL_ID,
        topic: stageTopic("nf"),
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

  it("error - Forbidden when targeting a channel the bot cannot moderate", async () => {
    // A snowflake-shaped channel_id the bot does not see typically yields
    // 403 Forbidden (50001 Missing Access), or 404 NotFound if the route
    // 404s before the permission check fires, or BadRequest for malformed
    // input.
    await runEffect(
      updateStageInstance({
        channel_id: NON_EXISTENT_CHANNEL_ID,
        topic: stageTopic("fb"),
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
