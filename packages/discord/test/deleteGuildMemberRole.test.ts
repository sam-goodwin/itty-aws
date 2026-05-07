import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { addGuildMemberRole } from "../src/operations/addGuildMemberRole.ts";
import { deleteGuildMemberRole } from "../src/operations/deleteGuildMemberRole.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// Requires:
//   - a guild where the bot has Manage Roles
//   - a user_id that is currently a member of that guild
//   - a role_id in that guild whose position is BELOW the bot's highest role
// Roles cannot be created in isolation here without polluting the guild on
// every run, so the role is provided via env. The test grants then removes
// the role on the member; the member's other roles are untouched.
const TEST_GUILD_ID = process.env.DISCORD_TEST_GUILD_ID;
const TEST_MEMBER_USER_ID = process.env.DISCORD_TEST_MEMBER_USER_ID;
const TEST_ROLE_ID = process.env.DISCORD_TEST_ROLE_ID;

// Snowflake-format identifiers that should not match real entities.
const NON_EXISTENT_GUILD_ID = "100000000000000000";
const NON_EXISTENT_USER_ID = "100000000000000001";
const NON_EXISTENT_ROLE_ID = "100000000000000002";

describe("deleteGuildMemberRole", () => {
  it(
    "happy path - grants then removes a role on a real guild member",
    async () => {
      if (!TEST_GUILD_ID || !TEST_MEMBER_USER_ID || !TEST_ROLE_ID) {
        throw new Error(
          "DISCORD_TEST_GUILD_ID, DISCORD_TEST_MEMBER_USER_ID and DISCORD_TEST_ROLE_ID env vars are required for the deleteGuildMemberRole happy path. " +
            `(testRunId=${testRunId})`,
        );
      }
      await runEffect(
        Effect.gen(function* () {
          // Grant the role first so removing it is observable. Both
          // operations are idempotent on Discord's side.
          yield* addGuildMemberRole({
            guild_id: TEST_GUILD_ID,
            user_id: TEST_MEMBER_USER_ID,
            role_id: TEST_ROLE_ID,
          });
          const result = yield* deleteGuildMemberRole({
            guild_id: TEST_GUILD_ID,
            user_id: TEST_MEMBER_USER_ID,
            role_id: TEST_ROLE_ID,
          }).pipe(
            // If the delete fails, attempt the cleanup explicitly.
            Effect.ensuring(
              deleteGuildMemberRole({
                guild_id: TEST_GUILD_ID,
                user_id: TEST_MEMBER_USER_ID,
                role_id: TEST_ROLE_ID,
              }).pipe(Effect.ignore),
            ),
          );
          return yield* Effect.sync(() => {
            // 204 No Content; output schema is Void.
            expect(result).toBeUndefined();
          });
        }),
      );
    },
    30_000,
  );

  it(
    "error - NotFound for a role_id that does not exist in the guild",
    async () => {
      if (!TEST_GUILD_ID || !TEST_MEMBER_USER_ID) {
        throw new Error(
          "DISCORD_TEST_GUILD_ID and DISCORD_TEST_MEMBER_USER_ID env vars are required for the NotFound test",
        );
      }
      // A snowflake-shaped role_id that is not a role of the guild yields
      // 404 NotFound. Discord may also surface 403 Forbidden depending on
      // which check fires first.
      await runEffect(
        deleteGuildMemberRole({
          guild_id: TEST_GUILD_ID,
          user_id: TEST_MEMBER_USER_ID,
          role_id: NON_EXISTENT_ROLE_ID,
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            expect(["NotFound", "Forbidden"]).toContain((e as any)._tag);
          }),
        ),
      );
    },
  );

  it("error - Forbidden for a guild_id the bot is not in", async () => {
    // A guild_id the bot is not a member of typically yields 403 Forbidden
    // (50001 Missing Access), or 404 NotFound if the route 404s before the
    // permission check.
    await runEffect(
      deleteGuildMemberRole({
        guild_id: NON_EXISTENT_GUILD_ID,
        user_id: NON_EXISTENT_USER_ID,
        role_id: NON_EXISTENT_ROLE_ID,
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
