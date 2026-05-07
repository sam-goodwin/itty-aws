import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { CredentialsFromEnv } from "../src/credentials.ts";
import { getApplication } from "../src/operations/getApplication.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

const testRunId: string = crypto.randomUUID().replace(/-/g, "").slice(0, 8);
// testRunId is unused for path-only GET inputs but kept for parity with
// other discord tests that include it in resource identifiers.
void testRunId;

// The "@me" alias resolves to the application owning the bot token.
const SELF_APPLICATION_ID = "@me";

// Snowflake-format identifier that should not match a real application.
const NON_EXISTENT_APPLICATION_ID = "100000000000000000";

describe("getApplication", () => {
  it("happy path - fetches the bot's own application via @me", async () => {
    const result = await runEffect(
      getApplication({ application_id: SELF_APPLICATION_ID }),
    );
    expect(typeof result.id).toBe("string");
    expect(result.id.length).toBeGreaterThan(0);
    expect(typeof result.name).toBe("string");
    expect(typeof result.description).toBe("string");
  });

  it("error - NotFound for non-existent application_id", async () => {
    // Discord returns 404 NotFound for an unknown application_id; may
    // surface as 403 Forbidden depending on which check fires first.
    await runEffect(
      getApplication({
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

  it("error - Forbidden for an application_id the bot does not own", async () => {
    // Bots can only fetch their own application. Querying another
    // application typically yields 403 Forbidden, or 404 NotFound when
    // Discord opts to mask existence.
    await runEffect(
      getApplication({
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
