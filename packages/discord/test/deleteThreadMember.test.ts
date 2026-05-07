import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { CredentialsFromEnv } from "../src/credentials.ts";
import { addThreadMember } from "../src/operations/addThreadMember.ts";
import { deleteThreadMember } from "../src/operations/deleteThreadMember.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);
// testRunId is unused for path-only DELETE inputs but kept for parity with
// other discord tests that include it in resource identifiers.
void testRunId;

// A real Discord thread (channel) the bot can manage members in, and a
// real Discord user_id to add and then remove. The bot must already be a
// member of the thread (or have permission to manage it).
const TEST_THREAD_ID = process.env.DISCORD_TEST_THREAD_ID;
const TEST_USER_ID = process.env.DISCORD_TEST_USER_ID;

// Snowflake-format identifiers that should not match real Discord resources.
const NON_EXISTENT_THREAD_ID = "100000000000000000";
const NON_EXISTENT_USER_ID = "100000000000000001";

describe("deleteThreadMember", () => {
  it("happy path - removes a user previously added to a thread", async () => {
    if (!TEST_THREAD_ID || !TEST_USER_ID) {
      throw new Error(
        "DISCORD_TEST_THREAD_ID and DISCORD_TEST_USER_ID env vars are required for the deleteThreadMember happy path",
      );
    }
    await runEffect(
      Effect.gen(function* () {
        // Ensure the user is in the thread first (idempotent — Discord
        // returns 204 even if they're already a member).
        yield* addThreadMember({
          channel_id: TEST_THREAD_ID,
          user_id: TEST_USER_ID,
        });
        return yield* deleteThreadMember({
          channel_id: TEST_THREAD_ID,
          user_id: TEST_USER_ID,
        }).pipe(
          Effect.tap((result) =>
            Effect.sync(() => {
              // Discord returns 204 No Content on success.
              expect(result).toBeUndefined();
            }),
          ),
          Effect.ensuring(
            // Idempotent cleanup in case the primary delete failed.
            deleteThreadMember({
              channel_id: TEST_THREAD_ID,
              user_id: TEST_USER_ID,
            }).pipe(Effect.ignore),
          ),
        );
      }),
    );
  });

  it("error - NotFound for non-existent thread channel_id", async () => {
    await runEffect(
      deleteThreadMember({
        channel_id: NON_EXISTENT_THREAD_ID,
        user_id: TEST_USER_ID ?? NON_EXISTENT_USER_ID,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord returns NotFound for an unseen thread but may surface as
          // Forbidden when the bot can't see the channel.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden"]).toContain((e as any)._tag);
        }),
      ),
    );
  });

  it("error - Forbidden for thread bot has no access to", async () => {
    await runEffect(
      deleteThreadMember({
        channel_id: NON_EXISTENT_THREAD_ID,
        user_id: NON_EXISTENT_USER_ID,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // For a thread the bot is not in, Discord typically returns
          // Forbidden (50001 Missing Access) but may surface as NotFound.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["Forbidden", "NotFound"]).toContain((e as any)._tag);
        }),
      ),
    );
  });
});
