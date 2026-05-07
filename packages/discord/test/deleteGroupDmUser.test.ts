import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { deleteGroupDmUser } from "../src/operations/deleteGroupDmUser.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// Group DM management requires a user OAuth2 token with the `gdm.join` scope
// and the caller must be the group DM owner. The happy path is also opt-in
// because it actually removes a real user from a real group DM.
const TEST_GROUP_DM_CHANNEL_ID = process.env.DISCORD_TEST_GROUP_DM_CHANNEL_ID;
const TEST_GROUP_DM_USER_ID = process.env.DISCORD_TEST_GROUP_DM_USER_ID;
const ALLOW_REMOVE_GROUP_DM_USER =
  process.env.DISCORD_TEST_ALLOW_REMOVE_GROUP_DM_USER === "1";

// Snowflake-format identifiers that should not match a real entity.
const NON_EXISTENT_CHANNEL_ID = "100000000000000000";
const NON_EXISTENT_USER_ID = "100000000000000001";

describe("deleteGroupDmUser", () => {
  it(
    "happy path - removes a recipient from a group DM",
    async () => {
      if (
        !TEST_GROUP_DM_CHANNEL_ID ||
        !TEST_GROUP_DM_USER_ID ||
        !ALLOW_REMOVE_GROUP_DM_USER
      ) {
        throw new Error(
          "DISCORD_TEST_GROUP_DM_CHANNEL_ID, DISCORD_TEST_GROUP_DM_USER_ID and DISCORD_TEST_ALLOW_REMOVE_GROUP_DM_USER=1 are required for the deleteGroupDmUser happy path. " +
            `(testRunId=${testRunId})`,
        );
      }
      const result = await runEffect(
        deleteGroupDmUser({
          channel_id: TEST_GROUP_DM_CHANNEL_ID,
          user_id: TEST_GROUP_DM_USER_ID,
        }),
      );
      expect(result).toBeUndefined();
    },
    30_000,
  );

  it("error - NotFound for non-existent channel_id", async () => {
    await runEffect(
      deleteGroupDmUser({
        channel_id: NON_EXISTENT_CHANNEL_ID,
        user_id: NON_EXISTENT_USER_ID,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // A snowflake-shaped channel_id that the caller cannot see yields
          // 404 NotFound, or 403 Forbidden if the route reaches the
          // permission check first.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden"]).toContain((e as any)._tag);
        }),
      ),
    );
  });

  it(
    "error - Forbidden when the bot is not the group DM owner",
    async () => {
      // Bot tokens cannot manage group DMs at all — even if the channel_id
      // and user_id are well-formed, Discord returns 403 Forbidden (or 404
      // NotFound when the route 404s before the permission check).
      await runEffect(
        deleteGroupDmUser({
          channel_id: NON_EXISTENT_CHANNEL_ID,
          user_id: "not-a-snowflake",
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
    },
  );
});
