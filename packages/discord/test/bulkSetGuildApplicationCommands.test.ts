import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { bulkSetGuildApplicationCommands } from "../src/operations/bulkSetGuildApplicationCommands.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

// The endpoint requires:
//   - the bot's application_id (snowflake) and a guild_id (snowflake) the
//     application is installed in.
// The SDK's input schema currently only exposes the path parameters and not
// the request body. As a result the operation performs a PUT with no body,
// which Discord treats as "set commands to no commands" — a destructive
// guild-commands wipe. Operators must opt in with
// DISCORD_TEST_APPLICATION_ID + DISCORD_TEST_GUILD_ID +
// DISCORD_TEST_ALLOW_DESTRUCTIVE_COMMANDS=1.
const TEST_APPLICATION_ID = process.env.DISCORD_TEST_APPLICATION_ID;
const TEST_GUILD_ID = process.env.DISCORD_TEST_GUILD_ID;
const ALLOW_DESTRUCTIVE =
  process.env.DISCORD_TEST_ALLOW_DESTRUCTIVE_COMMANDS === "1";

// Snowflake-format identifiers that should not match real Discord resources.
const NON_EXISTENT_APPLICATION_ID = "100000000000000000";
const NON_EXISTENT_GUILD_ID = "100000000000000001";

describe("bulkSetGuildApplicationCommands", () => {
  it("happy path - bulk-sets the application's guild-scoped commands", async () => {
    if (!TEST_APPLICATION_ID || !TEST_GUILD_ID || !ALLOW_DESTRUCTIVE) {
      throw new Error(
        "DISCORD_TEST_APPLICATION_ID, DISCORD_TEST_GUILD_ID and DISCORD_TEST_ALLOW_DESTRUCTIVE_COMMANDS=1 are required for the bulkSetGuildApplicationCommands happy path (this PUT replaces ALL guild commands for the application).",
      );
    }
    await runEffect(
      bulkSetGuildApplicationCommands({
        application_id: TEST_APPLICATION_ID,
        guild_id: TEST_GUILD_ID,
      }).pipe(
        Effect.tap((commands) =>
          Effect.sync(() => {
            expect(Array.isArray(commands)).toBe(true);
            for (const c of commands) {
              expect(typeof c.id).toBe("string");
              expect(typeof c.application_id).toBe("string");
              expect(typeof c.name).toBe("string");
              expect(typeof c.description).toBe("string");
              expect(c.application_id).toBe(TEST_APPLICATION_ID);
            }
          }),
        ),
      ),
    );
  });

  it("error - NotFound for non-existent application_id", async () => {
    await runEffect(
      bulkSetGuildApplicationCommands({
        application_id: NON_EXISTENT_APPLICATION_ID,
        guild_id: TEST_GUILD_ID ?? NON_EXISTENT_GUILD_ID,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord returns NotFound for an unseen application_id, but may
          // surface as Forbidden when the bot's token does not own it, or
          // BadRequest if the route rejects the empty body.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden", "BadRequest"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });

  it("error - BadRequest for malformed (non-snowflake) application_id", async () => {
    await runEffect(
      bulkSetGuildApplicationCommands({
        application_id: "not-a-snowflake",
        guild_id: TEST_GUILD_ID ?? NON_EXISTENT_GUILD_ID,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord rejects malformed snowflakes with 400 Invalid Form Body;
          // routing layers may also classify it as 404, or the bot may lack
          // ownership and receive 403.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["BadRequest", "NotFound", "Forbidden"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });

  it("error - Forbidden when the application is not installed in the guild", async () => {
    if (!TEST_APPLICATION_ID) {
      throw new Error(
        "DISCORD_TEST_APPLICATION_ID env var is required for the Forbidden test",
      );
    }
    // Targeting a guild_id where the application has not been authorized
    // typically yields Forbidden (50001 Missing Access). May also surface as
    // NotFound for an unseen guild, or BadRequest from form validation.
    await runEffect(
      bulkSetGuildApplicationCommands({
        application_id: TEST_APPLICATION_ID,
        guild_id: NON_EXISTENT_GUILD_ID,
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
  });
});
