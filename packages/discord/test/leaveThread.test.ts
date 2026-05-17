import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { CredentialsFromEnv } from "../src/credentials.ts";
import { joinThread } from "../src/operations/joinThread.ts";
import { leaveThread } from "../src/operations/leaveThread.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// DELETE /channels/{channel_id}/thread-members/@me — removes the current
// user (the bot) from the thread. The setup adds the bot via joinThread,
// then the happy path leaves it.
const TEST_THREAD_ID = process.env.DISCORD_TEST_THREAD_ID;

// Snowflake-shaped ids unlikely to resolve to any real thread.
const NON_EXISTENT_THREAD_ID = `1000000000000000${testRunId.slice(0, 2)}`;
const INACCESSIBLE_THREAD_ID = "100000000000000001";

describe("leaveThread", () => {
  it(
    "happy path - bot leaves a thread it joined",
    async () => {
      if (!TEST_THREAD_ID) {
        throw new Error(
          "DISCORD_TEST_THREAD_ID env var is required for the leaveThread happy path. " +
            "Set it to a thread (channel) the bot can see.",
        );
      }
      // Join first so leave has something to do.
      await runEffect(joinThread({ channel_id: TEST_THREAD_ID }));
      const result = await runEffect(
        leaveThread({ channel_id: TEST_THREAD_ID }),
      );
      // Discord returns 204 No Content on success.
      expect(result).toBeUndefined();
    },
    { timeout: 30_000 },
  );

  it("error - NotFound for a non-existent thread channel_id", async () => {
    await runEffect(
      leaveThread({ channel_id: NON_EXISTENT_THREAD_ID }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord returns NotFound for an unseen thread but may surface as
          // Forbidden when the bot can't see the channel, or BadRequest if
          // the snowflake is otherwise rejected.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden", "BadRequest"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });

  it("error - Forbidden or NotFound for a thread the bot has no access to", async () => {
    await runEffect(
      leaveThread({ channel_id: INACCESSIBLE_THREAD_ID }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // For a thread the bot cannot see, Discord typically returns
          // Forbidden (50001 Missing Access) but often returns NotFound to
          // avoid leaking existence.
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
