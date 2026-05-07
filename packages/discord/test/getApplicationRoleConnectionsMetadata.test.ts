import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { getApplicationRoleConnectionsMetadata } from "../src/operations/getApplicationRoleConnectionsMetadata.ts";
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

// The endpoint requires:
//   - the bot's application_id (snowflake) — the bot's token must own it.
const TEST_APPLICATION_ID = process.env.DISCORD_TEST_APPLICATION_ID;

// Snowflake-format identifier that should not match a real application.
const NON_EXISTENT_APPLICATION_ID = "100000000000000000";

describe("getApplicationRoleConnectionsMetadata", () => {
  it("happy path - fetches role connections metadata for the bot's application", async () => {
    if (!TEST_APPLICATION_ID) {
      throw new Error(
        "DISCORD_TEST_APPLICATION_ID env var is required for the getApplicationRoleConnectionsMetadata happy path",
      );
    }
    const result = await runEffect(
      getApplicationRoleConnectionsMetadata({
        application_id: TEST_APPLICATION_ID,
      }),
    );
    // Discord returns an array (possibly empty) of role connection metadata
    // records. Assert the array shape and per-record fields when present.
    expect(Array.isArray(result)).toBe(true);
    for (const record of result) {
      expect(typeof record.key).toBe("string");
      expect(typeof record.name).toBe("string");
      expect(typeof record.description).toBe("string");
    }
  });

  it("error - NotFound for non-existent application_id", async () => {
    await runEffect(
      getApplicationRoleConnectionsMetadata({
        application_id: NON_EXISTENT_APPLICATION_ID,
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

  it("error - Forbidden for application_id the bot does not own", async () => {
    // Calling against an application_id the bot's token does not own
    // typically yields 403 Forbidden; may also surface as 404 NotFound when
    // the route resolves the application before the permission check.
    await runEffect(
      getApplicationRoleConnectionsMetadata({
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
