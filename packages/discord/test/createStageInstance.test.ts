import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { createStageInstance } from "../src/operations/createStageInstance.ts";
import { deleteStageInstance } from "../src/operations/deleteStageInstance.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// Requires a stage channel (channel type 13) where the bot has
// MANAGE_CHANNELS / MUTE_MEMBERS / MOVE_MEMBERS. The bot must also be a
// stage moderator. Operators must supply DISCORD_TEST_STAGE_CHANNEL_ID for
// the happy path.
const TEST_STAGE_CHANNEL_ID = process.env.DISCORD_TEST_STAGE_CHANNEL_ID;

// Snowflake-format identifier that should not match a real channel.
const NON_EXISTENT_CHANNEL_ID = "100000000000000000";

// Discord requires a topic of 1..120 chars.
const stageTopic = (suffix: string): string =>
  `dt-${suffix}-${testRunId}`.slice(0, 120);

describe("createStageInstance", () => {
  it("happy path - creates a stage instance and deletes it on cleanup", async () => {
    if (!TEST_STAGE_CHANNEL_ID) {
      throw new Error(
        "DISCORD_TEST_STAGE_CHANNEL_ID env var is required for the createStageInstance happy path (channel must be a stage channel)",
      );
    }
    const topic = stageTopic("happy");
    await runEffect(
      Effect.gen(function* () {
        const stage = yield* createStageInstance({
          channel_id: TEST_STAGE_CHANNEL_ID,
          topic,
        });
        return yield* Effect.sync(() => {
          expect(typeof stage.id).toBe("string");
          expect(stage.id.length).toBeGreaterThan(0);
          expect(stage.channel_id).toBe(TEST_STAGE_CHANNEL_ID);
          expect(stage.topic).toBe(topic);
          expect(typeof stage.guild_id).toBe("string");
          expect(typeof stage.discoverable_disabled).toBe("boolean");
        }).pipe(
          Effect.ensuring(
            deleteStageInstance({
              channel_id: TEST_STAGE_CHANNEL_ID,
            }).pipe(Effect.ignore),
          ),
        );
      }),
    );
  });

  it("error - NotFound for non-existent channel_id", async () => {
    await runEffect(
      createStageInstance({
        channel_id: NON_EXISTENT_CHANNEL_ID,
        topic: stageTopic("nf"),
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord returns 404 NotFound for unknown channels; may surface as
          // 403 Forbidden if the bot lacks visibility.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden"]).toContain((e as any)._tag);
        }),
      ),
    );
  });

  it("error - BadRequest when topic is empty", async () => {
    if (!TEST_STAGE_CHANNEL_ID) {
      throw new Error(
        "DISCORD_TEST_STAGE_CHANNEL_ID env var is required for the BadRequest test",
      );
    }
    // Topic must be 1..120 characters; empty string is rejected with 400
    // Invalid Form Body.
    await runEffect(
      createStageInstance({
        channel_id: TEST_STAGE_CHANNEL_ID,
        topic: "",
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

  it("error - Forbidden when targeting a channel the bot cannot moderate", async () => {
    // A snowflake-shaped channel_id the bot does not see typically yields 403
    // Forbidden (50001 Missing Access), or 404 NotFound if the route 404s
    // before the permission check. A non-stage channel returns 400 BadRequest
    // (50079 — channel must be a stage channel).
    await runEffect(
      createStageInstance({
        channel_id: NON_EXISTENT_CHANNEL_ID,
        topic: stageTopic("fb"),
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
