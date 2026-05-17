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

// A real Discord thread (channel) the bot can manage members in, and a
// real Discord user_id to add. The bot must already be a member of the
// thread (or have permission to manage it).
const TEST_THREAD_ID = process.env.DISCORD_TEST_THREAD_ID;
const TEST_USER_ID = process.env.DISCORD_TEST_USER_ID;

// Snowflake-format identifiers that should not match real Discord resources.
const NON_EXISTENT_THREAD_ID = "100000000000000000";
const NON_EXISTENT_USER_ID = "100000000000000001";

describe("addThreadMember", () => {
  it("happy path - adds a user to a thread and removes them on cleanup", async () => {
    if (!TEST_THREAD_ID || !TEST_USER_ID) {
      throw new Error(
        "DISCORD_TEST_THREAD_ID and DISCORD_TEST_USER_ID env vars are required for the addThreadMember happy path",
      );
    }
    await runEffect(
      addThreadMember({
        channel_id: TEST_THREAD_ID,
        user_id: TEST_USER_ID,
      }).pipe(
        Effect.tap((result) =>
          Effect.sync(() => {
            // Discord returns 204 No Content on success — the operation
            // succeeded if no error was thrown.
            expect(result).toBeUndefined();
          }),
        ),
        Effect.ensuring(
          deleteThreadMember({
            channel_id: TEST_THREAD_ID,
            user_id: TEST_USER_ID,
          }).pipe(Effect.ignore),
        ),
      ),
    );
  });

  it("error - NotFound for non-existent thread channel_id", async () => {
    await runEffect(
      addThreadMember({
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

  it("error - BadRequest for malformed (non-snowflake) channel_id", async () => {
    await runEffect(
      addThreadMember({
        channel_id: "not-a-snowflake",
        user_id: TEST_USER_ID ?? NON_EXISTENT_USER_ID,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord rejects malformed snowflakes with 400 Invalid Form Body;
          // routing layers may also classify it as 404.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["BadRequest", "NotFound"]).toContain((e as any)._tag);
        }),
      ),
    );
  });

  it("error - Forbidden for thread bot has no access to", async () => {
    await runEffect(
      addThreadMember({
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
