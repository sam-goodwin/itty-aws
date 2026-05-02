import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { passkeys } from "../src/operations/passkeys.ts";
import { runEffect } from "./setup.ts";

describe("passkeys", () => {
  it("happy path - lists passkeys for the authenticated user", async () => {
    await runEffect(
      Effect.gen(function* () {
        const result = yield* passkeys({ first: 10 });

        expect(Array.isArray(result.edges)).toBe(true);
        for (const edge of result.edges) {
          expect(typeof edge.cursor).toBe("string");
          expect(typeof edge.node.id).toBe("string");
          expect(typeof edge.node.credentialId).toBe("string");
          expect(typeof edge.node.deviceName).toBe("string");
          expect(typeof edge.node.deviceType).toBe("string");
          expect(typeof edge.node.backedUp).toBe("boolean");
          expect(typeof edge.node.createdAt).toBe("string");
          expect(typeof edge.node.updatedAt).toBe("string");
          expect(Array.isArray(edge.node.transports)).toBe(true);
        }

        expect(typeof result.pageInfo.hasNextPage).toBe("boolean");
        expect(typeof result.pageInfo.hasPreviousPage).toBe("boolean");
      }),
    );
  }, 60_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });

    const error = await Effect.runPromise(
      passkeys({ first: 10 }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );

    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);
});
