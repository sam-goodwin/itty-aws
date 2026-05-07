import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { createApplicationCommand } from "../src/operations/createApplicationCommand.ts";
import { deleteApplicationCommand } from "../src/operations/deleteApplicationCommand.ts";
import { getApplicationCommand } from "../src/operations/getApplicationCommand.ts";
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
//   - the command_id (snowflake) of a command that belongs to that application.
const TEST_APPLICATION_ID = process.env.DISCORD_TEST_APPLICATION_ID;

// Snowflake-format identifier that should not match a real application/command.
const NON_EXISTENT_APPLICATION_ID = "100000000000000000";
const NON_EXISTENT_COMMAND_ID = "100000000000000001";

// Discord requires CHAT_INPUT command names to match ^[-_\p{L}\p{N}]{1,32}$.
const cmdName = (suffix: string): string =>
  `dtest-${suffix}-${testRunId}`.toLowerCase().slice(0, 32);

describe("getApplicationCommand", () => {
  it("happy path - fetches a freshly created application command by id", async () => {
    if (!TEST_APPLICATION_ID) {
      throw new Error(
        "DISCORD_TEST_APPLICATION_ID env var is required for the getApplicationCommand happy path",
      );
    }
    const name = cmdName("get");
    await runEffect(
      Effect.gen(function* () {
        const created = yield* createApplicationCommand({
          application_id: TEST_APPLICATION_ID,
          name,
          description: "distilled test command",
        });
        return yield* Effect.gen(function* () {
          const fetched = yield* getApplicationCommand({
            application_id: TEST_APPLICATION_ID,
            command_id: created.id,
          });
          expect(fetched.id).toBe(created.id);
          expect(fetched.application_id).toBe(TEST_APPLICATION_ID);
          expect(fetched.name).toBe(name);
          expect(fetched.description).toBe("distilled test command");
          expect(typeof fetched.version).toBe("string");
        }).pipe(
          Effect.ensuring(
            deleteApplicationCommand({
              application_id: TEST_APPLICATION_ID,
              command_id: created.id,
            }).pipe(Effect.ignore),
          ),
        );
      }),
    );
  });

  it("error - NotFound for non-existent command_id under the bot's application", async () => {
    if (!TEST_APPLICATION_ID) {
      throw new Error(
        "DISCORD_TEST_APPLICATION_ID env var is required for the NotFound test",
      );
    }
    await runEffect(
      getApplicationCommand({
        application_id: TEST_APPLICATION_ID,
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
      getApplicationCommand({
        application_id: NON_EXISTENT_APPLICATION_ID,
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
