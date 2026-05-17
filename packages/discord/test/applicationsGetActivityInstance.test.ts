import { config } from "dotenv";
import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { CredentialsFromEnv } from "../src/credentials.ts";
import { applicationsGetActivityInstance } from "../src/operations/applicationsGetActivityInstance.ts";

config();

const MainLayer = Layer.merge(CredentialsFromEnv, FetchHttpClient.layer);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const runEffect = <A, E>(effect: Effect.Effect<A, E, any>): Promise<A> =>
  Effect.runPromise(
    effect.pipe(Effect.provide(MainLayer)) as Effect.Effect<A, E, never>,
  );

// The endpoint requires a real running activity instance launched by the
// caller's application. Activity instances are created when users open an
// embedded activity in a voice channel.
const TEST_APPLICATION_ID = process.env.DISCORD_TEST_APPLICATION_ID;
const TEST_ACTIVITY_INSTANCE_ID =
  process.env.DISCORD_TEST_ACTIVITY_INSTANCE_ID;

// Snowflake-format identifiers that should not match real Discord resources.
const NON_EXISTENT_APPLICATION_ID = "100000000000000000";
const NON_EXISTENT_INSTANCE_ID = "i-does-not-exist-12345678";

describe("applicationsGetActivityInstance", () => {
  it("happy path - fetches a running activity instance for the application", async () => {
    if (!TEST_APPLICATION_ID || !TEST_ACTIVITY_INSTANCE_ID) {
      throw new Error(
        "DISCORD_TEST_APPLICATION_ID and DISCORD_TEST_ACTIVITY_INSTANCE_ID env vars are required for the applicationsGetActivityInstance happy path",
      );
    }
    const result = await runEffect(
      applicationsGetActivityInstance({
        application_id: TEST_APPLICATION_ID,
        instance_id: TEST_ACTIVITY_INSTANCE_ID,
      }),
    );
    expect(result.application_id).toBe(TEST_APPLICATION_ID);
    expect(result.instance_id).toBe(TEST_ACTIVITY_INSTANCE_ID);
    expect(typeof result.launch_id).toBe("string");
    expect(Array.isArray(result.users)).toBe(true);
  });

  it("error - NotFound for non-existent instance_id", async () => {
    if (!TEST_APPLICATION_ID) {
      throw new Error(
        "DISCORD_TEST_APPLICATION_ID env var is required for the NotFound test",
      );
    }
    await runEffect(
      applicationsGetActivityInstance({
        application_id: TEST_APPLICATION_ID,
        instance_id: NON_EXISTENT_INSTANCE_ID,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord returns NotFound for an instance the application has no
          // record of, but may surface as Forbidden if the application can't
          // see the instance at all.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["NotFound", "Forbidden"]).toContain((e as any)._tag);
        }),
      ),
    );
  });

  it("error - Forbidden for application_id the caller does not own", async () => {
    await runEffect(
      applicationsGetActivityInstance({
        application_id: NON_EXISTENT_APPLICATION_ID,
        instance_id: NON_EXISTENT_INSTANCE_ID,
      }).pipe(
        Effect.flip,
        Effect.map((e) => {
          // Discord returns Forbidden (50001 Missing Access) for applications
          // the caller does not own; for fully unknown snowflakes it may
          // surface as NotFound instead.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          expect(["Forbidden", "NotFound"]).toContain((e as any)._tag);
        }),
      ),
    );
  });
});
