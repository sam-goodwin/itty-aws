import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { updateUserMessageExternalModerationMetadata } from "../src/operations/updateUserMessageExternalModerationMetadata.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// PUT /partner-sdk/dms/{user_id_1}/{user_id_2}/messages/{message_id}/moderation-metadata
// — partner SDK endpoint that updates the external moderation metadata for
// a DM message between two users. Output is `Schema.Void`. There is no
// programmatic way to create a DM between two arbitrary test users from a
// bot, so the happy path requires operator-supplied env vars pointing at
// a DM message that the credential is allowed to moderate.
const TEST_USER_ID_1 = process.env.DISCORD_TEST_DM_USER_ID_1;
const TEST_USER_ID_2 = process.env.DISCORD_TEST_DM_USER_ID_2;
const TEST_DM_MESSAGE_ID = process.env.DISCORD_TEST_DM_MESSAGE_ID;

// Snowflake-format identifiers that should not match real resources.
const NON_EXISTENT_USER_ID_1 = "100000000000000000";
const NON_EXISTENT_USER_ID_2 = "100000000000000001";
const NON_EXISTENT_MESSAGE_ID = "100000000000000002";

describe("updateUserMessageExternalModerationMetadata", () => {
  it(
    "happy path - PUT against a real DM message resolves with no body",
    async () => {
      if (!TEST_USER_ID_1 || !TEST_USER_ID_2 || !TEST_DM_MESSAGE_ID) {
        throw new Error(
          "DISCORD_TEST_DM_USER_ID_1, DISCORD_TEST_DM_USER_ID_2 and " +
            "DISCORD_TEST_DM_MESSAGE_ID env vars are required for the " +
            "updateUserMessageExternalModerationMetadata happy path. The " +
            "credential must be authorised under the partner SDK to moderate " +
            "this DM message.",
        );
      }
      await runEffect(
        updateUserMessageExternalModerationMetadata({
          user_id_1: TEST_USER_ID_1,
          user_id_2: TEST_USER_ID_2,
          message_id: TEST_DM_MESSAGE_ID,
        }).pipe(
          Effect.map((result) => {
            // Output schema is Void — successful resolution is the assertion.
            expect(result).toBeUndefined();
          }),
        ),
      );
    },
    30_000,
  );

  it("error - BadRequest for a malformed (non-snowflake) message_id", async () => {
    // Discord rejects malformed snowflakes with 400 Invalid Form Body;
    // routing layers may also classify the path as 404, or the partner
    // SDK auth may receive 403 before the body is validated.
    await runEffect(
      updateUserMessageExternalModerationMetadata({
        user_id_1: NON_EXISTENT_USER_ID_1,
        user_id_2: NON_EXISTENT_USER_ID_2,
        message_id: `not-a-snowflake-${testRunId}`,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          expect(["BadRequest", "NotFound", "Forbidden"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });

  it("error - NotFound for a non-existent message_id", async () => {
    // Snowflake-shaped ids that resolve to no real DM message yield 404
    // NotFound. Discord may also classify the response as 403 Forbidden
    // if the partner SDK auth check fires first, or BadRequest depending
    // on validation order.
    await runEffect(
      updateUserMessageExternalModerationMetadata({
        user_id_1: NON_EXISTENT_USER_ID_1,
        user_id_2: NON_EXISTENT_USER_ID_2,
        message_id: NON_EXISTENT_MESSAGE_ID,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          expect(["NotFound", "Forbidden", "BadRequest"]).toContain(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (e as any)._tag,
          );
        }),
      ),
    );
  });

  it("error - Forbidden when the credential is not authorised for the DM", async () => {
    // The partner SDK route requires a credential authorised to moderate
    // the targeted DM. A regular bot token typically yields 403 Forbidden
    // (or 401 Unauthorized) on this route, but Discord may also return
    // 404 NotFound if the route 404s before the auth check, or BadRequest
    // for malformed input.
    await runEffect(
      updateUserMessageExternalModerationMetadata({
        user_id_1: NON_EXISTENT_USER_ID_1,
        user_id_2: NON_EXISTENT_USER_ID_2,
        message_id: NON_EXISTENT_MESSAGE_ID,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          expect([
            "Forbidden",
            "NotFound",
            "Unauthorized",
            "BadRequest",
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ]).toContain((e as any)._tag);
        }),
      ),
    );
  });
});
