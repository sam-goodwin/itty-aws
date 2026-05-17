import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { createStageInstance } from "../src/operations/createStageInstance.ts";
import { deleteStageInstance } from "../src/operations/deleteStageInstance.ts";
import { getStageInstance } from "../src/operations/getStageInstance.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// GET /stage-instances/{channel_id} requires a live stage instance, which can
// only exist on a Stage Channel (channel type 13). The bot must have
// MANAGE_CHANNELS, MUTE_MEMBERS, and MOVE_MEMBERS in the channel. Stage
// channels cannot be cleanly created via the public API in a test fixture,
// so the happy path is gated on an operator-supplied DISCORD_TEST_STAGE_CHANNEL_ID
// pointing at a stage channel the bot can manage.
const TEST_STAGE_CHANNEL_ID = process.env.DISCORD_TEST_STAGE_CHANNEL_ID;

// Snowflake-shaped ids unlikely to resolve to any real stage channel.
const NON_EXISTENT_CHANNEL_ID = `1000000000000000${testRunId.slice(0, 2)}`;
const INACCESSIBLE_CHANNEL_ID = "100000000000000001";

describe("getStageInstance", () => {
  it(
    "happy path - fetches a stage instance",
    async () => {
      if (!TEST_STAGE_CHANNEL_ID) {
        throw new Error(
          "DISCORD_TEST_STAGE_CHANNEL_ID is required for the getStageInstance happy path. " +
            "Set it to the id of a Stage Channel (type 13) the bot can manage.",
        );
      }
      const channelId = TEST_STAGE_CHANNEL_ID;
      const topic = `distilled-discord-stage-${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          yield* createStageInstance({
            channel_id: channelId,
            topic,
          });
          const result = yield* getStageInstance({ channel_id: channelId });
          expect(typeof result.id).toBe("string");
          expect(result.channel_id).toBe(channelId);
          expect(typeof result.guild_id).toBe("string");
          expect(typeof result.topic).toBe("string");
          expect(typeof result.discoverable_disabled).toBe("boolean");
        }).pipe(
          Effect.ensuring(
            deleteStageInstance({ channel_id: channelId }).pipe(Effect.ignore),
          ),
        ),
      );
    },
    { timeout: 30_000 },
  );

  it("error - NotFound for a non-existent stage channel id", async () => {
    await runEffect(
      getStageInstance({ channel_id: NON_EXISTENT_CHANNEL_ID }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord surfaces a missing stage instance as NotFound. Some
          // malformed or out-of-range snowflakes may surface as BadRequest.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden", "BadRequest"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });

  it("error - Forbidden or NotFound for a stage channel the bot cannot access", async () => {
    await runEffect(
      getStageInstance({ channel_id: INACCESSIBLE_CHANNEL_ID }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // A channel id the bot is not in typically surfaces as Forbidden,
          // but Discord often returns NotFound to avoid leaking existence.
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
