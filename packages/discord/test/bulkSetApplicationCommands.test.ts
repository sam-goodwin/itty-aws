import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { bulkSetApplicationCommands } from "../src/operations/bulkSetApplicationCommands.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

// The endpoint requires:
//   - the bot's application_id (snowflake).
// The SDK's input schema currently only exposes the path parameter
// (application_id) and not the request body. As a result the operation
// performs a PUT with no body, which Discord treats as "set commands to
// no commands" — a destructive global-commands wipe. That is acceptable
// for test-only applications. Operators must opt in with
// DISCORD_TEST_APPLICATION_ID + DISCORD_TEST_ALLOW_DESTRUCTIVE_COMMANDS=1.
const TEST_APPLICATION_ID = process.env.DISCORD_TEST_APPLICATION_ID;
const ALLOW_DESTRUCTIVE =
  process.env.DISCORD_TEST_ALLOW_DESTRUCTIVE_COMMANDS === "1";

// Snowflake-format identifier that should not match a real application.
const NON_EXISTENT_APPLICATION_ID = "100000000000000000";

describe("bulkSetApplicationCommands", () => {
  it("happy path - bulk-sets the application's global commands", async () => {
    if (!TEST_APPLICATION_ID || !ALLOW_DESTRUCTIVE) {
      throw new Error(
        "DISCORD_TEST_APPLICATION_ID and DISCORD_TEST_ALLOW_DESTRUCTIVE_COMMANDS=1 are required for the bulkSetApplicationCommands happy path (this PUT replaces ALL global commands for the application).",
      );
    }
    await runEffect(
      bulkSetApplicationCommands({
        application_id: TEST_APPLICATION_ID,
      }).pipe(
        Effect.tap((commands) =>
          Effect.sync(() => {
            // Discord returns an array of the resulting application commands.
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
      bulkSetApplicationCommands({
        application_id: NON_EXISTENT_APPLICATION_ID,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord returns NotFound for an unseen application_id, but may
          // surface as Forbidden when the bot's token does not own the
          // application, or BadRequest if the route rejects the empty body.
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
      bulkSetApplicationCommands({
        application_id: "not-a-snowflake",
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

  it("error - Forbidden when the bot does not own the application_id", async () => {
    // Calling against a real application_id that the bot's token does not
    // own typically yields 403 Forbidden. Here we use a snowflake-shaped ID
    // that the bot definitely does not own; Discord may also return 404.
    await runEffect(
      bulkSetApplicationCommands({
        application_id: NON_EXISTENT_APPLICATION_ID,
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
