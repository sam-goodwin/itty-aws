import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { createApplicationCommand } from "../src/operations/createApplicationCommand.ts";
import { deleteApplicationCommand } from "../src/operations/deleteApplicationCommand.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// Requires the bot's application_id. Operators must supply
// DISCORD_TEST_APPLICATION_ID for the happy path so a real command can be
// created and then deleted.
const TEST_APPLICATION_ID = process.env.DISCORD_TEST_APPLICATION_ID;

// Snowflake-format identifiers that should not match real entities.
const NON_EXISTENT_APPLICATION_ID = "100000000000000000";
const NON_EXISTENT_COMMAND_ID = "100000000000000001";

// Discord requires command names to match `^[-_\p{L}\p{N}\p{sc=Devanagari}\p{sc=Thai}]{1,32}$`
// in lowercase.
const commandName = (suffix: string): string =>
  `dt_${suffix}_${testRunId}`.toLowerCase().slice(0, 32);

describe("deleteApplicationCommand", () => {
  it("happy path - deletes a freshly created application command", async () => {
    if (!TEST_APPLICATION_ID) {
      throw new Error(
        "DISCORD_TEST_APPLICATION_ID env var is required for the deleteApplicationCommand happy path",
      );
    }
    const name = commandName("del");
    await runEffect(
      Effect.gen(function* () {
        const command = yield* createApplicationCommand({
          application_id: TEST_APPLICATION_ID,
          name,
          description: "distilled test command (will be deleted)",
        });
        return yield* deleteApplicationCommand({
          application_id: TEST_APPLICATION_ID,
          command_id: command.id,
        }).pipe(
          Effect.tap(() =>
            // 204 No Content; output schema is Void.
            Effect.sync(() => {
              expect(true).toBe(true);
            }),
          ),
        );
      }),
    );
  });

  it("error - NotFound for non-existent command_id", async () => {
    if (!TEST_APPLICATION_ID) {
      throw new Error(
        "DISCORD_TEST_APPLICATION_ID env var is required for the NotFound test",
      );
    }
    // Discord returns 404 NotFound for command_ids that do not exist on the
    // application.
    await runEffect(
      deleteApplicationCommand({
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

  it("error - Forbidden when the bot does not own the application_id", async () => {
    // A snowflake-shaped application_id the bot's token does not own
    // typically yields 403 Forbidden, or 404 NotFound if the route 404s
    // before the ownership check.
    await runEffect(
      deleteApplicationCommand({
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
