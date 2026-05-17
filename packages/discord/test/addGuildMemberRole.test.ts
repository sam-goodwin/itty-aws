import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { CredentialsFromEnv } from "../src/credentials.ts";
import { addGuildMemberRole } from "../src/operations/addGuildMemberRole.ts";
import { deleteGuildMemberRole } from "../src/operations/deleteGuildMemberRole.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

// The endpoint requires:
//   - the bot to be in TEST_GUILD_ID with MANAGE_ROLES permission
//   - TEST_USER_ID to already be a guild member
//   - TEST_ROLE_ID to be a role lower than the bot's highest role
const TEST_GUILD_ID = process.env.DISCORD_TEST_GUILD_ID;
const TEST_USER_ID = process.env.DISCORD_TEST_USER_ID;
const TEST_ROLE_ID = process.env.DISCORD_TEST_ROLE_ID;

// Snowflake-format identifiers that should not match real Discord resources.
const NON_EXISTENT_GUILD_ID = "100000000000000000";
const NON_EXISTENT_USER_ID = "100000000000000001";
const NON_EXISTENT_ROLE_ID = "100000000000000002";

describe("addGuildMemberRole", () => {
  it("happy path - adds a role to a guild member and removes it on cleanup", async () => {
    if (!TEST_GUILD_ID || !TEST_USER_ID || !TEST_ROLE_ID) {
      throw new Error(
        "DISCORD_TEST_GUILD_ID, DISCORD_TEST_USER_ID and DISCORD_TEST_ROLE_ID env vars are required for the addGuildMemberRole happy path",
      );
    }
    await runEffect(
      addGuildMemberRole({
        guild_id: TEST_GUILD_ID,
        user_id: TEST_USER_ID,
        role_id: TEST_ROLE_ID,
      }).pipe(
        Effect.tap((result) =>
          Effect.sync(() => {
            // Discord returns 204 No Content on success — the operation
            // succeeded if no error was thrown.
            expect(result).toBeUndefined();
          }),
        ),
        Effect.ensuring(
          deleteGuildMemberRole({
            guild_id: TEST_GUILD_ID,
            user_id: TEST_USER_ID,
            role_id: TEST_ROLE_ID,
          }).pipe(Effect.ignore),
        ),
      ),
    );
  });

  it("error - NotFound for non-existent role_id", async () => {
    if (!TEST_GUILD_ID || !TEST_USER_ID) {
      throw new Error(
        "DISCORD_TEST_GUILD_ID and DISCORD_TEST_USER_ID env vars are required for the NotFound test",
      );
    }
    await runEffect(
      addGuildMemberRole({
        guild_id: TEST_GUILD_ID,
        user_id: TEST_USER_ID,
        role_id: NON_EXISTENT_ROLE_ID,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord returns NotFound for an unseen role but may surface as
          // Forbidden when the bot can't manage the role.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden"]).toContain((e as any)._tag);
        }),
      ),
    );
  });

  it("error - BadRequest for malformed (non-snowflake) role_id", async () => {
    if (!TEST_GUILD_ID || !TEST_USER_ID) {
      throw new Error(
        "DISCORD_TEST_GUILD_ID and DISCORD_TEST_USER_ID env vars are required for the BadRequest test",
      );
    }
    await runEffect(
      addGuildMemberRole({
        guild_id: TEST_GUILD_ID,
        user_id: TEST_USER_ID,
        role_id: "not-a-snowflake",
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

  it("error - Forbidden for guild bot has no access to", async () => {
    await runEffect(
      addGuildMemberRole({
        guild_id: NON_EXISTENT_GUILD_ID,
        user_id: NON_EXISTENT_USER_ID,
        role_id: NON_EXISTENT_ROLE_ID,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // For a guild the bot is not in, Discord typically returns
          // Forbidden (50001 Missing Access) but may surface as NotFound.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["Forbidden", "NotFound"]).toContain((e as any)._tag);
        }),
      ),
    );
  });
});
