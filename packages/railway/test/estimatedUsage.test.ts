import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { apiToken } from "../src/operations/apiToken.ts";
import { estimatedUsage } from "../src/operations/estimatedUsage.ts";
import { runEffect } from "./setup.ts";

describe("estimatedUsage", () => {
  it("happy path - returns estimated usage measurements for a workspace", async () => {
    const result = await runEffect(
      Effect.gen(function* () {
        const tokenInfo = yield* apiToken({});
        const workspace = tokenInfo.workspaces[0];
        expect(workspace).toBeDefined();
        const workspaceId = workspace!.id;

        const usage = yield* estimatedUsage({
          workspaceId,
          measurements: ["CPU_USAGE", "MEMORY_USAGE_GB", "NETWORK_TX_GB"],
        });

        expect(Array.isArray(usage)).toBe(true);
        for (const entry of usage) {
          expect(typeof entry.estimatedValue).toBe("number");
          expect(typeof entry.measurement).toBe("string");
          expect(typeof entry.projectId).toBe("string");
        }
        return usage;
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
      estimatedUsage({
        measurements: ["CPU_USAGE"],
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );

    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);
});
