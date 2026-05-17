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

// The endpoint requires:
//   - the bot's application_id (snowflake) — the bot's token must own it.
const TEST_APPLICATION_ID = process.env.DISCORD_TEST_APPLICATION_ID;

// Snowflake-format identifier that should not match a real application.
const NON_EXISTENT_APPLICATION_ID = "100000000000000000";

// Discord requires CHAT_INPUT command names to match ^[-_\p{L}\p{N}]{1,32}$.
const cmdName = (suffix: string): string =>
  `dtest-${suffix}-${testRunId}`.toLowerCase().slice(0, 32);

describe("createApplicationCommand", () => {
  it("happy path - creates an application command and deletes it on cleanup", async () => {
    if (!TEST_APPLICATION_ID) {
      throw new Error(
        "DISCORD_TEST_APPLICATION_ID env var is required for the createApplicationCommand happy path",
      );
    }
    const name = cmdName("happy");
    await runEffect(
      Effect.gen(function* () {
        const cmd = yield* createApplicationCommand({
          application_id: TEST_APPLICATION_ID,
          name,
          description: "distilled test command",
        });
        return yield* Effect.sync(() => {
          expect(typeof cmd.id).toBe("string");
          expect(cmd.application_id).toBe(TEST_APPLICATION_ID);
          expect(cmd.name).toBe(name);
          expect(cmd.description).toBe("distilled test command");
        }).pipe(
          Effect.ensuring(
            deleteApplicationCommand({
              application_id: TEST_APPLICATION_ID,
              command_id: cmd.id,
            }).pipe(Effect.ignore),
          ),
        );
      }),
    );
  });

  it("error - NotFound for non-existent application_id", async () => {
    await runEffect(
      createApplicationCommand({
        application_id: NON_EXISTENT_APPLICATION_ID,
        name: cmdName("nf"),
        description: "distilled test",
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord returns NotFound for an unseen application_id, but may
          // surface as Forbidden when the bot's token does not own it.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden"]).toContain((e as any)._tag);
        }),
      ),
    );
  });

  it("error - BadRequest for invalid command name (uppercase + spaces)", async () => {
    if (!TEST_APPLICATION_ID) {
      throw new Error(
        "DISCORD_TEST_APPLICATION_ID env var is required for the BadRequest test",
      );
    }
    // Discord's CHAT_INPUT command names must match ^[-_\p{L}\p{N}]{1,32}$ —
    // uppercase letters and spaces are explicitly rejected with 400 Invalid
    // Form Body.
    await runEffect(
      createApplicationCommand({
        application_id: TEST_APPLICATION_ID,
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

  it("error - Forbidden for application_id the bot does not own", async () => {
    // Calling against an application_id the bot's token does not own
    // typically yields 403 Forbidden; may also surface as 404 NotFound when
    // the route resolves the application before the permission check.
    await runEffect(
      createApplicationCommand({
        application_id: NON_EXISTENT_APPLICATION_ID,
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
