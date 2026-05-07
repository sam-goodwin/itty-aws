import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { createGuildApplicationCommand } from "../src/operations/createGuildApplicationCommand.ts";
import { deleteGuildApplicationCommand } from "../src/operations/deleteGuildApplicationCommand.ts";
import { getGuildApplicationCommand } from "../src/operations/getGuildApplicationCommand.ts";
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
//   - a guild the bot is a member of (DISCORD_TEST_GUILD_ID).
//   - the command_id (snowflake) of a command registered to that guild.
const TEST_APPLICATION_ID = process.env.DISCORD_TEST_APPLICATION_ID;
const TEST_GUILD_ID = process.env.DISCORD_TEST_GUILD_ID;

// Snowflake-format identifiers that should not match real resources.
const NON_EXISTENT_APPLICATION_ID = "100000000000000000";
const NON_EXISTENT_GUILD_ID = "100000000000000001";
const NON_EXISTENT_COMMAND_ID = "100000000000000002";

// Discord requires CHAT_INPUT command names to match ^[-_\p{L}\p{N}]{1,32}$.
const cmdName = (suffix: string): string =>
  `dtest-${suffix}-${testRunId}`.toLowerCase().slice(0, 32);

describe("getGuildApplicationCommand", () => {
  it("happy path - fetches a freshly created guild application command by id", async () => {
    if (!TEST_APPLICATION_ID || !TEST_GUILD_ID) {
      throw new Error(
        "DISCORD_TEST_APPLICATION_ID and DISCORD_TEST_GUILD_ID env vars are required for the getGuildApplicationCommand happy path",
      );
    }
    const name = cmdName("get");
    await runEffect(
      Effect.gen(function* () {
        const created = yield* createGuildApplicationCommand({
          application_id: TEST_APPLICATION_ID,
          guild_id: TEST_GUILD_ID,
          name,
          description: "distilled test command",
        });
        return yield* Effect.gen(function* () {
          const fetched = yield* getGuildApplicationCommand({
            application_id: TEST_APPLICATION_ID,
            guild_id: TEST_GUILD_ID,
            command_id: created.id,
          });
          expect(fetched.id).toBe(created.id);
          expect(fetched.application_id).toBe(TEST_APPLICATION_ID);
          expect(fetched.name).toBe(name);
          expect(fetched.description).toBe("distilled test command");
          expect(typeof fetched.version).toBe("string");
          if (fetched.guild_id !== undefined) {
            expect(fetched.guild_id).toBe(TEST_GUILD_ID);
          }
        }).pipe(
          Effect.ensuring(
            deleteGuildApplicationCommand({
              application_id: TEST_APPLICATION_ID,
              guild_id: TEST_GUILD_ID,
              command_id: created.id,
            }).pipe(Effect.ignore),
          ),
        );
      }),
    );
  });

  it("error - NotFound for non-existent command_id under the bot's application + guild", async () => {
    if (!TEST_APPLICATION_ID || !TEST_GUILD_ID) {
      throw new Error(
        "DISCORD_TEST_APPLICATION_ID and DISCORD_TEST_GUILD_ID env vars are required for the NotFound test",
      );
    }
    await runEffect(
      getGuildApplicationCommand({
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
    // Looking up a command under an application_id the bot's token does not
    // own typically yields 403 Forbidden; may also surface as 404 NotFound
    // when the route resolves the application before the permission check.
    await runEffect(
      getGuildApplicationCommand({
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
