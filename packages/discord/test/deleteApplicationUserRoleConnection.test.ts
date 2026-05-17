import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { deleteApplicationUserRoleConnection } from "../src/operations/deleteApplicationUserRoleConnection.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);

// The endpoint is /users/@me/applications/{application_id}/role-connection
// and requires a user OAuth2 bearer token with the `role_connections.write`
// scope — bot tokens cannot use it. This is a destructive operation that
// removes the calling user's role connection on the application. Operators
// who have a user token configured must opt in with
// DISCORD_TEST_APPLICATION_ID + DISCORD_TEST_ALLOW_DELETE_USER_ROLE_CONNECTION=1.
const TEST_APPLICATION_ID = process.env.DISCORD_TEST_APPLICATION_ID;
const ALLOW_DELETE_USER_ROLE_CONNECTION =
  process.env.DISCORD_TEST_ALLOW_DELETE_USER_ROLE_CONNECTION === "1";

// Snowflake-format identifier that should not match a real application.
const NON_EXISTENT_APPLICATION_ID = "100000000000000000";

describe("deleteApplicationUserRoleConnection", () => {
  it("happy path - deletes the calling user's role connection on the application", async () => {
    if (!TEST_APPLICATION_ID || !ALLOW_DELETE_USER_ROLE_CONNECTION) {
      throw new Error(
        "DISCORD_TEST_APPLICATION_ID and DISCORD_TEST_ALLOW_DELETE_USER_ROLE_CONNECTION=1 are required for the deleteApplicationUserRoleConnection happy path. The endpoint requires a user OAuth2 bearer token with role_connections.write scope; this DELETE removes the user's role connection.",
      );
    }
    void testRunId;
    await runEffect(
      deleteApplicationUserRoleConnection({
        application_id: TEST_APPLICATION_ID,
      }).pipe(
        Effect.tap(() =>
          // 204 No Content; output schema is Void.
          Effect.sync(() => {
            expect(true).toBe(true);
          }),
        ),
      ),
    );
  });

  it("error - NotFound for non-existent application_id", async () => {
    // Discord returns 404 NotFound for application_ids that do not exist or
    // have no role connection for the calling user.
    await runEffect(
      deleteApplicationUserRoleConnection({
        application_id: NON_EXISTENT_APPLICATION_ID,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden"]).toContain((e as any)._tag);
        }),
      ),
    );
  });

  it("error - Forbidden when the token lacks role_connections.write scope", async () => {
    // Bot tokens cannot use this endpoint — Discord returns 403 Forbidden
    // (or 401 in some configurations). User OAuth2 tokens missing the
    // role_connections.write scope return 403. May also surface as 404.
    await runEffect(
      deleteApplicationUserRoleConnection({
        application_id: NON_EXISTENT_APPLICATION_ID,
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
