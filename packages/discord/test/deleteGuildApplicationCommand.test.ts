import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { createGuildApplicationCommand } from "../src/operations/createGuildApplicationCommand.ts";
import { deleteGuildApplicationCommand } from "../src/operations/deleteGuildApplicationCommand.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// The bot's own application snowflake.
const TEST_APPLICATION_ID = process.env.DISCORD_TEST_APPLICATION_ID;
// A guild where the bot is installed with the application.commands scope.
const TEST_GUILD_ID = process.env.DISCORD_TEST_GUILD_ID;

// Snowflake-format identifiers that should not match real entities.
const NON_EXISTENT_APPLICATION_ID = "100000000000000000";
const NON_EXISTENT_GUILD_ID = "100000000000000001";
const NON_EXISTENT_COMMAND_ID = "100000000000000002";

// Slash command names must be 1..32 chars and lowercase.
const commandName = (suffix: string): string =>
  `dt_delgcmd_${suffix}_${testRunId}`.slice(0, 32);

describe("deleteGuildApplicationCommand", () => {
  it(
    "happy path - creates a guild command then deletes it",
    async () => {
      if (!TEST_APPLICATION_ID || !TEST_GUILD_ID) {
        throw new Error(
          "DISCORD_TEST_APPLICATION_ID and DISCORD_TEST_GUILD_ID env vars are required for the deleteGuildApplicationCommand happy path",
        );
      }
      await runEffect(
        Effect.gen(function* () {
          const created = yield* createGuildApplicationCommand({
            application_id: TEST_APPLICATION_ID,
            guild_id: TEST_GUILD_ID,
            name: commandName("happy"),
            description: `distilled test ${testRunId}`,
          });
          const result = yield* deleteGuildApplicationCommand({
            application_id: TEST_APPLICATION_ID,
            guild_id: TEST_GUILD_ID,
            command_id: created.id,
          }).pipe(
            // If the delete fails, still try to clean up the command we
            // just created.
            Effect.ensuring(
              deleteGuildApplicationCommand({
                application_id: TEST_APPLICATION_ID,
                guild_id: TEST_GUILD_ID,
                command_id: created.id,
              }).pipe(Effect.ignore),
            ),
          );
          return yield* Effect.sync(() => {
            expect(result).toBeUndefined();
          });
        }),
      );
    },
    30_000,
  );

  it("error - NotFound for non-existent command_id", async () => {
    if (!TEST_APPLICATION_ID || !TEST_GUILD_ID) {
      throw new Error(
        "DISCORD_TEST_APPLICATION_ID and DISCORD_TEST_GUILD_ID env vars are required for the NotFound test",
      );
    }
    await runEffect(
      deleteGuildApplicationCommand({
        application_id: TEST_APPLICATION_ID,
        guild_id: TEST_GUILD_ID,
        command_id: NON_EXISTENT_COMMAND_ID,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // A snowflake-shaped command_id that does not exist on the
          // application/guild yields 404 NotFound. Discord may also surface
          // 403 Forbidden depending on which check fires first.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden"]).toContain((e as any)._tag);
        }),
      ),
    );
  });

  it(
    "error - Forbidden for an application_id that is not the bot's",
    async () => {
      // The bot can only manage commands for its own application. Targeting
      // another application_id results in 403 Forbidden, or 404 NotFound if
      // the route 404s before the permission check.
      await runEffect(
        deleteGuildApplicationCommand({
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
    },
  );
});
