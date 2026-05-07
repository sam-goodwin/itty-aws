import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { getGuildApplicationCommandPermissions } from "../src/operations/getGuildApplicationCommandPermissions.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);
void testRunId;

// The endpoint requires:
//   - the bot's application_id (snowflake) — the bot's token must own it.
//   - a guild the bot is a member of (DISCORD_TEST_GUILD_ID).
//   - the command_id (snowflake) of a command in that guild that has at
//     least one permission overwrite configured. Discord returns 404 for a
//     command with no permissions configured, so the happy path requires
//     the operator to supply such a command_id via
//     DISCORD_TEST_GUILD_COMMAND_ID_WITH_PERMISSIONS.
//   - the bearer token must carry the `applications.commands.permissions.update`
//     scope (DISCORD_BEARER_TOKEN). Bot tokens cannot read these.
const TEST_APPLICATION_ID = process.env.DISCORD_TEST_APPLICATION_ID;
const TEST_GUILD_ID = process.env.DISCORD_TEST_GUILD_ID;
const TEST_COMMAND_ID_WITH_PERMISSIONS =
  process.env.DISCORD_TEST_GUILD_COMMAND_ID_WITH_PERMISSIONS;

// Snowflake-format identifiers that should not match real resources.
const NON_EXISTENT_APPLICATION_ID = "100000000000000000";
const NON_EXISTENT_GUILD_ID = "100000000000000001";
const NON_EXISTENT_COMMAND_ID = "100000000000000002";

describe("getGuildApplicationCommandPermissions", () => {
  it("happy path - fetches permissions for a guild application command", async () => {
    if (
      !TEST_APPLICATION_ID ||
      !TEST_GUILD_ID ||
      !TEST_COMMAND_ID_WITH_PERMISSIONS
    ) {
      throw new Error(
        "DISCORD_TEST_APPLICATION_ID, DISCORD_TEST_GUILD_ID, and DISCORD_TEST_GUILD_COMMAND_ID_WITH_PERMISSIONS are required for the getGuildApplicationCommandPermissions happy path. Discord returns 404 for a command with no permissions configured; the bearer token must carry applications.commands.permissions.update scope.",
      );
    }
    const result = await runEffect(
      getGuildApplicationCommandPermissions({
        application_id: TEST_APPLICATION_ID,
        guild_id: TEST_GUILD_ID,
        command_id: TEST_COMMAND_ID_WITH_PERMISSIONS,
      }),
    );
    expect(result.id).toBe(TEST_COMMAND_ID_WITH_PERMISSIONS);
    expect(result.application_id).toBe(TEST_APPLICATION_ID);
    expect(result.guild_id).toBe(TEST_GUILD_ID);
    expect(Array.isArray(result.permissions)).toBe(true);
    for (const overwrite of result.permissions) {
      expect(typeof overwrite.id).toBe("string");
      expect(typeof overwrite.permission).toBe("boolean");
    }
  });

  it("error - NotFound for non-existent command_id under the bot's application + guild", async () => {
    if (!TEST_APPLICATION_ID || !TEST_GUILD_ID) {
      throw new Error(
        "DISCORD_TEST_APPLICATION_ID and DISCORD_TEST_GUILD_ID env vars are required for the NotFound test",
      );
    }
    await runEffect(
      getGuildApplicationCommandPermissions({
        application_id: TEST_APPLICATION_ID,
        guild_id: TEST_GUILD_ID,
        command_id: NON_EXISTENT_COMMAND_ID,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden"]).toContain((e as any)._tag);
        }),
      ),
    );
  });

  it("error - Forbidden for application_id the bot does not own", async () => {
    // Looking up command permissions under an application_id the bot's
    // token does not own typically yields 403 Forbidden; may also surface
    // as 404 NotFound when the route resolves the application before the
    // permission check.
    await runEffect(
      getGuildApplicationCommandPermissions({
        application_id: NON_EXISTENT_APPLICATION_ID,
        guild_id: NON_EXISTENT_GUILD_ID,
        command_id: NON_EXISTENT_COMMAND_ID,
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
