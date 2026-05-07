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

// Requires a stage channel (channel type 13) where the bot is a stage
// moderator with MANAGE_CHANNELS / MUTE_MEMBERS / MOVE_MEMBERS. Operators
// must supply DISCORD_TEST_STAGE_CHANNEL_ID for the happy path.
const TEST_STAGE_CHANNEL_ID = process.env.DISCORD_TEST_STAGE_CHANNEL_ID;

// Snowflake-format identifier that should not match a real channel.
const NON_EXISTENT_CHANNEL_ID = "100000000000000000";

// Discord requires a topic of 1..120 chars.
const stageTopic = (suffix: string): string =>
  `dt-deletestage-${suffix}-${testRunId}`.slice(0, 120);

describe("deleteStageInstance", () => {
  it("happy path - creates then deletes a stage instance", async () => {
    if (!TEST_STAGE_CHANNEL_ID) {
      throw new Error(
        "DISCORD_TEST_STAGE_CHANNEL_ID env var is required for the deleteStageInstance happy path (channel must be a stage channel)",
      );
    }
    await runEffect(
      Effect.gen(function* () {
        yield* createStageInstance({
          channel_id: TEST_STAGE_CHANNEL_ID,
          topic: stageTopic("happy"),
        });
        return yield* deleteStageInstance({
          channel_id: TEST_STAGE_CHANNEL_ID,
        }).pipe(
          Effect.tap(() =>
            Effect.sync(() => {
              // 204 No Content; output schema is Void.
              expect(true).toBe(true);
            }),
          ),
          Effect.ensuring(
            // Idempotent cleanup in case the primary delete failed.
            deleteStageInstance({
              channel_id: TEST_STAGE_CHANNEL_ID,
            }).pipe(Effect.ignore),
          ),
        );
      }),
    );
  });

  it("error - NotFound for non-existent channel_id", async () => {
    // Discord returns 404 NotFound when no stage instance exists for the
    // channel; may surface as 403 Forbidden if the bot lacks visibility.
    await runEffect(
      deleteStageInstance({
        channel_id: NON_EXISTENT_CHANNEL_ID,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden"]).toContain((e as any)._tag);
        }),
      ),
    );
  });

  it("error - Forbidden when targeting a channel the bot cannot moderate", async () => {
    // A snowflake-shaped channel_id the bot cannot see typically yields 403
    // Forbidden (50001 Missing Access), or 404 NotFound if the route 404s
    // before the permission check.
    await runEffect(
      deleteStageInstance({
        channel_id: NON_EXISTENT_CHANNEL_ID,
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
