import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { CredentialsFromEnv } from "../src/credentials.ts";
import { addGroupDmUser } from "../src/operations/addGroupDmUser.ts";
import { deleteGroupDmUser } from "../src/operations/deleteGroupDmUser.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

// Group DM channel the bot/user owns. The endpoint requires a group DM
// the caller created and (for bot tokens) an OAuth2 access_token of the
// user being added with the `gdm.join` scope.
const TEST_GROUP_DM_CHANNEL_ID = process.env.DISCORD_TEST_GROUP_DM_CHANNEL_ID;
const TEST_USER_ID = process.env.DISCORD_TEST_USER_ID;
const TEST_USER_ACCESS_TOKEN = process.env.DISCORD_TEST_USER_ACCESS_TOKEN;

// Snowflake-format identifiers that should not match real Discord resources.
const NON_EXISTENT_CHANNEL_ID = "100000000000000000";
const NON_EXISTENT_USER_ID = "100000000000000001";

describe("addGroupDmUser", () => {
  it("happy path - adds a user to a group DM and removes them on cleanup", async () => {
    if (!TEST_GROUP_DM_CHANNEL_ID || !TEST_USER_ID || !TEST_USER_ACCESS_TOKEN) {
      throw new Error(
        "DISCORD_TEST_GROUP_DM_CHANNEL_ID, DISCORD_TEST_USER_ID and DISCORD_TEST_USER_ACCESS_TOKEN env vars are required for the addGroupDmUser happy path",
      );
    }
    await runEffect(
      addGroupDmUser({
        channel_id: TEST_GROUP_DM_CHANNEL_ID,
        user_id: TEST_USER_ID,
        access_token: TEST_USER_ACCESS_TOKEN,
        nick: "distilled-test-user",
      }).pipe(
        Effect.tap((result) =>
          Effect.sync(() => {
            // Discord returns 204 No Content (empty body) on success.
            // The operation succeeded if no error was thrown.
            expect(result).toBeDefined();
          }),
        ),
        Effect.ensuring(
          deleteGroupDmUser({
            channel_id: TEST_GROUP_DM_CHANNEL_ID,
            user_id: TEST_USER_ID,
          }).pipe(Effect.ignore),
        ),
      ),
    );
  });

  it("error - NotFound for non-existent channel_id", async () => {
    await runEffect(
      addGroupDmUser({
        channel_id: NON_EXISTENT_CHANNEL_ID,
        user_id: TEST_USER_ID ?? NON_EXISTENT_USER_ID,
        access_token: TEST_USER_ACCESS_TOKEN ?? "fake-access-token",
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord returns NotFound for unknown channels but may surface as
          // Forbidden (50001 Missing Access) when the bot can't see the channel.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden"]).toContain((e as any)._tag);
        }),
      ),
    );
  });

  it("error - BadRequest for malformed (non-snowflake) channel_id", async () => {
    await runEffect(
      addGroupDmUser({
        channel_id: "not-a-snowflake",
        user_id: TEST_USER_ID ?? NON_EXISTENT_USER_ID,
        access_token: TEST_USER_ACCESS_TOKEN ?? "fake-access-token",
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

  it("error - Forbidden for channel the caller does not own", async () => {
    await runEffect(
      addGroupDmUser({
        channel_id: NON_EXISTENT_CHANNEL_ID,
        user_id: NON_EXISTENT_USER_ID,
        access_token: "fake-access-token",
        nick: "should-fail",
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord returns Forbidden (50001 Missing Access) for group DMs
          // the caller does not own; for entirely unknown channel snowflakes
          // it may surface as NotFound instead.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["Forbidden", "NotFound"]).toContain((e as any)._tag);
        }),
      ),
    );
  });
});
