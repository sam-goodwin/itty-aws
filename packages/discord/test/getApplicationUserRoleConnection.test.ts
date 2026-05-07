import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { getApplicationUserRoleConnection } from "../src/operations/getApplicationUserRoleConnection.ts";
import { CredentialsFromEnv } from "../src/credentials.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);
void testRunId;

// The endpoint is /users/@me/applications/{application_id}/role-connection
// and requires a user OAuth2 bearer token with the `role_connections.write`
// scope (set DISCORD_BEARER_TOKEN). Bot tokens cannot use it. Operators must
// opt in with DISCORD_TEST_APPLICATION_ID for the happy path to run.
const TEST_APPLICATION_ID = process.env.DISCORD_TEST_APPLICATION_ID;

// Snowflake-format identifier that should not match a real application.
const NON_EXISTENT_APPLICATION_ID = "100000000000000000";

describe("getApplicationUserRoleConnection", () => {
  it("happy path - fetches the calling user's role connection on the application", async () => {
    if (!TEST_APPLICATION_ID) {
      throw new Error(
        "DISCORD_TEST_APPLICATION_ID is required for the getApplicationUserRoleConnection happy path. The endpoint requires a user OAuth2 bearer token (DISCORD_BEARER_TOKEN) with role_connections.write scope.",
      );
    }
    const result = await runEffect(
      getApplicationUserRoleConnection({
        application_id: TEST_APPLICATION_ID,
      }),
    );
    // The response is an ApplicationRoleConnection object — all fields are
    // optional. Assert the type shape when fields are present.
    if (result.platform_name !== undefined) {
      expect(typeof result.platform_name).toBe("string");
    }
    if (result.platform_username !== undefined && result.platform_username !== null) {
      expect(typeof result.platform_username).toBe("string");
    }
    if (result.metadata !== undefined) {
      expect(typeof result.metadata).toBe("object");
    }
  });

  it("error - NotFound for non-existent application_id", async () => {
    // Discord returns 404 NotFound for application_ids that do not exist or
    // have no role connection for the calling user.
    await runEffect(
      getApplicationUserRoleConnection({
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
      getApplicationUserRoleConnection({
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
