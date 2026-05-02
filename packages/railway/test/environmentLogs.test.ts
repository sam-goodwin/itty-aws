import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { environmentLogs } from "../src/operations/environmentLogs.ts";
import { getSharedProject, runEffect } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("environmentLogs", () => {
  it("happy path - returns log entries for an existing environment", async () => {
    const project = await getSharedProject();

    const result = await runEffect(
      Effect.gen(function* () {
        const logs = yield* environmentLogs({
          environmentId: project.baseEnvironmentId!,
          beforeLimit: 50,
        });

        expect(Array.isArray(logs)).toBe(true);
        for (const entry of logs) {
          expect(typeof entry.message).toBe("string");
          expect(typeof entry.timestamp).toBe("string");
          expect(Array.isArray(entry.attributes)).toBe(true);
          for (const attr of entry.attributes) {
            expect(typeof attr.key).toBe("string");
            expect(typeof attr.value).toBe("string");
          }
        }
      }),
    );

    expect(Array.isArray(result)).toBe(true);
  }, 60_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });

    const error = await Effect.runPromise(
      environmentLogs({
        environmentId: NON_EXISTENT_UUID,
        beforeLimit: 10,
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );

    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);

  it("error - non-existent environment id surfaces RailwayNotAuthorized", async () => {
    const error = await runEffect(
      environmentLogs({
        environmentId: NON_EXISTENT_UUID,
        beforeLimit: 10,
      }).pipe(Effect.flip),
    );

    expect((error as { _tag: string })._tag).toBe("RailwayNotAuthorized");
  }, 30_000);
});
