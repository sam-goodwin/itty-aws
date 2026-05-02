import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { templates } from "../src/operations/templates.ts";
import { runEffect } from "./setup.ts";

describe("templates", () => {
  it("happy path - lists published templates", async () => {
    const result = await runEffect(templates({ first: 10, verified: true }));

    expect(result).toBeDefined();
    expect(Array.isArray(result.edges)).toBe(true);
    expect(result.pageInfo).toBeDefined();
    expect(typeof result.pageInfo.hasNextPage).toBe("boolean");
    expect(typeof result.pageInfo.hasPreviousPage).toBe("boolean");
    if (result.pageInfo.endCursor !== null) {
      expect(typeof result.pageInfo.endCursor).toBe("string");
    }
    if (result.pageInfo.startCursor !== null) {
      expect(typeof result.pageInfo.startCursor).toBe("string");
    }

    for (const edge of result.edges) {
      expect(typeof edge.cursor).toBe("string");
      expect(typeof edge.node.id).toBe("string");
      expect(typeof edge.node.code).toBe("string");
      expect(typeof edge.node.name).toBe("string");
      expect(typeof edge.node.createdAt).toBe("string");
      expect(typeof edge.node.activeProjects).toBe("number");
      expect(typeof edge.node.projects).toBe("number");
      expect(typeof edge.node.recentProjects).toBe("number");
      expect(typeof edge.node.totalPayout).toBe("number");
      expect(typeof edge.node.isApproved).toBe("boolean");
      expect(typeof edge.node.isV2Template).toBe("boolean");
      expect(typeof edge.node.isVerified).toBe("boolean");
      expect(["HIDDEN", "PUBLISHED", "UNPUBLISHED"]).toContain(
        edge.node.status,
      );
      if (edge.node.tags !== null) {
        expect(Array.isArray(edge.node.tags)).toBe(true);
      }
      if (edge.node.languages !== null) {
        expect(Array.isArray(edge.node.languages)).toBe(true);
      }
    }
  }, 60_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });

    const error = await Effect.runPromise(
      templates({ first: 1 }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );

    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);
});
