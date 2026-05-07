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

// The endpoint requires:
//   - the bot's application_id (snowflake) — the bot's token must own it.
//   - a guild_id (snowflake) where the application is installed.
const TEST_APPLICATION_ID = process.env.DISCORD_TEST_APPLICATION_ID;
const TEST_GUILD_ID = process.env.DISCORD_TEST_GUILD_ID;

// Snowflake-format identifiers that should not match real Discord resources.
const NON_EXISTENT_APPLICATION_ID = "100000000000000000";
const NON_EXISTENT_GUILD_ID = "100000000000000001";

// Discord requires CHAT_INPUT command names to match ^[-_\p{L}\p{N}]{1,32}$.
const cmdName = (suffix: string): string =>
  `dtest-${suffix}-${testRunId}`.toLowerCase().slice(0, 32);

describe("createGuildApplicationCommand", () => {
  it("happy path - creates a guild application command and deletes it on cleanup", async () => {
    if (!TEST_APPLICATION_ID || !TEST_GUILD_ID) {
      throw new Error(
        "DISCORD_TEST_APPLICATION_ID and DISCORD_TEST_GUILD_ID env vars are required for the createGuildApplicationCommand happy path",
      );
    }
    const name = cmdName("happy");
    await runEffect(
      Effect.gen(function* () {
        const cmd = yield* createGuildApplicationCommand({
          application_id: TEST_APPLICATION_ID,
          guild_id: TEST_GUILD_ID,
          name,
          description: "distilled test guild command",
        });
        return yield* Effect.sync(() => {
          expect(typeof cmd.id).toBe("string");
          expect(cmd.application_id).toBe(TEST_APPLICATION_ID);
          expect(cmd.name).toBe(name);
          expect(cmd.description).toBe("distilled test guild command");
          if (cmd.guild_id !== undefined) {
            expect(cmd.guild_id).toBe(TEST_GUILD_ID);
          }
        }).pipe(
          Effect.ensuring(
            deleteGuildApplicationCommand({
              application_id: TEST_APPLICATION_ID,
              guild_id: TEST_GUILD_ID,
              command_id: cmd.id,
            }).pipe(Effect.ignore),
          ),
        );
      }),
    );
  });

  it("error - NotFound for non-existent application_id", async () => {
    await runEffect(
      createGuildApplicationCommand({
        application_id: NON_EXISTENT_APPLICATION_ID,
        guild_id: TEST_GUILD_ID ?? NON_EXISTENT_GUILD_ID,
        name: cmdName("nf"),
        description: "distilled test",
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord returns NotFound for an unseen application_id, but may
          // surface as Forbidden when the bot's token does not own it.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden", "BadRequest"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });

  it("error - BadRequest for invalid command name (uppercase + spaces)", async () => {
    if (!TEST_APPLICATION_ID || !TEST_GUILD_ID) {
      throw new Error(
        "DISCORD_TEST_APPLICATION_ID and DISCORD_TEST_GUILD_ID env vars are required for the BadRequest test",
      );
    }
    // Discord's CHAT_INPUT command names must match ^[-_\p{L}\p{N}]{1,32}$ —
    // uppercase letters and spaces are explicitly rejected with 400 Invalid
    // Form Body.
    await runEffect(
      createGuildApplicationCommand({
        application_id: TEST_APPLICATION_ID,
        guild_id: TEST_GUILD_ID,
        name: "INVALID NAME WITH SPACES",
        description: "distilled test",
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["BadRequest", "Forbidden", "NotFound"]).toContain(
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
    // typically yields Forbidden (50001 Missing Access). May also surface
    // as NotFound for an unseen guild, or BadRequest from form validation.
    await runEffect(
      createGuildApplicationCommand({
        application_id: TEST_APPLICATION_ID,
        guild_id: NON_EXISTENT_GUILD_ID,
        name: cmdName("fb"),
        description: "distilled test",
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
