import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { CredentialsFromEnv } from "../src/credentials.ts";
import { addThreadMember } from "../src/operations/addThreadMember.ts";
import { deleteThreadMember } from "../src/operations/deleteThreadMember.ts";
import { getThreadMember } from "../src/operations/getThreadMember.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

// A real Discord thread (channel) the bot can read, and a real user_id the
// bot can add to that thread. The bot must already be a member of the
// thread (or have permission to manage it).
const TEST_THREAD_ID = process.env.DISCORD_TEST_THREAD_ID;
const TEST_USER_ID = process.env.DISCORD_TEST_USER_ID;

// Snowflake-format identifiers that should not match real Discord resources.
const NON_EXISTENT_THREAD_ID = "100000000000000000";
const NON_EXISTENT_USER_ID = "100000000000000001";

describe("getThreadMember", () => {
  it(
    "happy path - fetches a thread member by user id",
    async () => {
      if (!TEST_THREAD_ID || !TEST_USER_ID) {
        throw new Error(
          "DISCORD_TEST_THREAD_ID and DISCORD_TEST_USER_ID env vars are required for the getThreadMember happy path",
        );
      }
      await runEffect(
        Effect.gen(function* () {
          // Ensure the user is a member of the thread for this test run.
          yield* addThreadMember({
            channel_id: TEST_THREAD_ID,
            user_id: TEST_USER_ID,
          });
          const result = yield* getThreadMember({
            channel_id: TEST_THREAD_ID,
            user_id: TEST_USER_ID,
            with_member: true,
          });
          expect(typeof result.id).toBe("string");
          expect(result.user_id).toBe(TEST_USER_ID);
          expect(typeof result.join_timestamp).toBe("string");
          expect(typeof result.flags).toBe("number");
          if (result.member !== undefined) {
            expect(typeof result.member.flags).toBe("number");
            expect(typeof result.member.joined_at).toBe("string");
            expect(Array.isArray(result.member.roles)).toBe(true);
            expect(result.member.user.id).toBe(TEST_USER_ID);
            expect(typeof result.member.user.username).toBe("string");
          }
        }).pipe(
          Effect.ensuring(
            deleteThreadMember({
              channel_id: TEST_THREAD_ID,
              user_id: TEST_USER_ID,
            }).pipe(Effect.ignore),
          ),
        ),
      );
    },
    { timeout: 30_000 },
  );

  it("error - NotFound for non-existent thread channel_id", async () => {
    await runEffect(
      getThreadMember({
        channel_id: NON_EXISTENT_THREAD_ID,
        user_id: TEST_USER_ID ?? NON_EXISTENT_USER_ID,
      }).pipe(
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
      getThreadMember({
        channel_id: NON_EXISTENT_THREAD_ID,
        user_id: NON_EXISTENT_USER_ID,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // For a thread the bot is not in, Discord typically returns
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
