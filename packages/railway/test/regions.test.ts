import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { regions } from "../src/operations/regions.ts";
import { runEffect } from "./setup.ts";

describe("regions", () => {
  it("happy path - lists available regions without projectId", async () => {
    const result = await runEffect(regions({}));

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);

    for (const region of result) {
      expect(typeof region.country).toBe("string");
      expect(typeof region.location).toBe("string");
      expect(typeof region.name).toBe("string");
      // region and workspaceId may be null
      if (region.region !== null) {
        expect(typeof region.region).toBe("string");
      }
      if (region.workspaceId !== null) {
        expect(typeof region.workspaceId).toBe("string");
      }
      if (region.deploymentConstraints !== null) {
        if (region.deploymentConstraints.deprecationInfo !== null) {
          expect(
            typeof region.deploymentConstraints.deprecationInfo.isDeprecated,
          ).toBe("boolean");
          expect(
            typeof region.deploymentConstraints.deprecationInfo
              .replacementRegion,
          ).toBe("string");
        }
      }
    }
  }, 60_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });

    const error = await Effect.runPromise(
      regions({}).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );

    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);
});
