import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { platformStatus } from "../src/operations/platformStatus.ts";
import { runEffect } from "./setup.ts";

describe("platformStatus", () => {
  it("happy path - returns the current platform status", async () => {
    await runEffect(
      Effect.gen(function* () {
        const result = yield* platformStatus({});

        expect(typeof result.isStable).toBe("boolean");

        if (result.incident !== null) {
          expect(typeof result.incident.id).toBe("string");
          expect(typeof result.incident.message).toBe("string");
          expect(typeof result.incident.url).toBe("string");
          expect([
            "IDENTIFIED",
            "INVESTIGATING",
            "MONITORING",
            "RESOLVED",
          ]).toContain(result.incident.status);
        }

        if (result.maintenance !== null) {
          expect(typeof result.maintenance.id).toBe("string");
          expect(typeof result.maintenance.message).toBe("string");
          expect(typeof result.maintenance.start).toBe("string");
          expect(typeof result.maintenance.url).toBe("string");
          expect(["COMPLETED", "INPROGRESS", "NOTSTARTEDYET"]).toContain(
            result.maintenance.status,
          );
        }
      }),
    );
  }, 60_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });

    const error = await Effect.runPromise(
      platformStatus({}).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );

    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);
});
