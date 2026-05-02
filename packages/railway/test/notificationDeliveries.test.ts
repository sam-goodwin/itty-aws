import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { notificationDeliveries } from "../src/operations/notificationDeliveries.ts";
import { runEffect } from "./setup.ts";

describe("notificationDeliveries", () => {
  it("happy path - lists notification deliveries for the authenticated user", async () => {
    await runEffect(
      Effect.gen(function* () {
        const result = yield* notificationDeliveries({ first: 10 });

        expect(Array.isArray(result.edges)).toBe(true);
        for (const edge of result.edges) {
          expect(typeof edge.cursor).toBe("string");
          expect(typeof edge.node.id).toBe("string");
          expect(typeof edge.node.createdAt).toBe("string");
          expect(typeof edge.node.updatedAt).toBe("string");
          expect(["FAILED", "PENDING", "SENT"]).toContain(edge.node.status);
          expect(["EMAIL", "INAPP", "WEBHOOK"]).toContain(edge.node.type);
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
      notificationDeliveries({ first: 10 }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );

    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);
});
