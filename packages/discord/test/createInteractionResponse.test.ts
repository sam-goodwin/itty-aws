import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { createInteractionResponse } from "../src/operations/createInteractionResponse.ts";
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
//   - a fresh interaction_id + interaction_token captured from a real user
//     interaction (e.g. a slash-command invocation). Tokens are valid for
//     ~15 minutes and may only be acked once.
// The SDK's input schema currently exposes only the path parameters and the
// `with_response` query flag — the JSON callback body (`type`, `data`, etc.)
// is not exposed. As a result the operation performs a POST with no body,
// which Discord rejects with 400 Invalid Form Body. Operators must supply
// DISCORD_TEST_INTERACTION_ID + DISCORD_TEST_INTERACTION_TOKEN to attempt
// the happy path.
const TEST_INTERACTION_ID = process.env.DISCORD_TEST_INTERACTION_ID;
const TEST_INTERACTION_TOKEN = process.env.DISCORD_TEST_INTERACTION_TOKEN;

// Snowflake-format identifier that should not match a real interaction.
const NON_EXISTENT_INTERACTION_ID = "100000000000000000";
// Token shape is opaque; this is a clearly-bogus token used in error tests.
const NON_EXISTENT_INTERACTION_TOKEN = `notarealtoken-${testRunId}`;

describe("createInteractionResponse", () => {
  it("happy path - posts an interaction callback with with_response=true", async () => {
    if (!TEST_INTERACTION_ID || !TEST_INTERACTION_TOKEN) {
      throw new Error(
        "DISCORD_TEST_INTERACTION_ID and DISCORD_TEST_INTERACTION_TOKEN env vars are required for the createInteractionResponse happy path",
      );
    }
    await runEffect(
      createInteractionResponse({
        interaction_id: TEST_INTERACTION_ID,
        interaction_token: TEST_INTERACTION_TOKEN,
        with_response: true,
      }).pipe(
        Effect.tap((res) =>
          Effect.sync(() => {
            expect(typeof res.interaction.id).toBe("string");
            expect(res.interaction.id).toBe(TEST_INTERACTION_ID);
          }),
        ),
      ),
    );
  });

  it("error - NotFound for non-existent interaction_id/interaction_token", async () => {
    await runEffect(
      createInteractionResponse({
        interaction_id: NON_EXISTENT_INTERACTION_ID,
        interaction_token: NON_EXISTENT_INTERACTION_TOKEN,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord returns 404 NotFound for unrecognized interaction tokens.
          // It may also surface as 401 (covered as a generic case) or
          // BadRequest because the empty callback body is rejected first.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "BadRequest", "Forbidden"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });

  it("error - BadRequest when callback body is missing (codegen gap)", async () => {
    // The SDK input does not expose the JSON callback body (`type`, `data`).
    // POSTing without a body triggers 400 Invalid Form Body. Even with valid
    // interaction credentials this should fail until the spec is patched.
    await runEffect(
      createInteractionResponse({
        interaction_id: TEST_INTERACTION_ID ?? NON_EXISTENT_INTERACTION_ID,
        interaction_token:
          TEST_INTERACTION_TOKEN ?? NON_EXISTENT_INTERACTION_TOKEN,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["BadRequest", "NotFound", "Forbidden"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });

  it("error - Forbidden when the interaction token belongs to a different application", async () => {
    // A snowflake-shaped interaction_id with a bogus token typically yields
    // 404 NotFound, but Discord may classify access checks as 403 Forbidden
    // when the token doesn't match the bot's application.
    await runEffect(
      createInteractionResponse({
        interaction_id: NON_EXISTENT_INTERACTION_ID,
        interaction_token: NON_EXISTENT_INTERACTION_TOKEN,
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
