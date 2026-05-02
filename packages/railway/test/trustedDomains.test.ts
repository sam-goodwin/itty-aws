import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { apiToken } from "../src/operations/apiToken.ts";
import { trustedDomains } from "../src/operations/trustedDomains.ts";
import { runEffect } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("trustedDomains", () => {
  it("happy path - lists trusted domains for the authenticated user's workspace", async () => {
    const result = await runEffect(
      Effect.gen(function* () {
        const me = yield* apiToken({});
        const workspaceId = me.workspaces[0]?.id;
        expect(workspaceId).toBeDefined();
        if (!workspaceId) {
          return {
            edges: [],
            pageInfo: {
              endCursor: null,
              hasNextPage: false,
              hasPreviousPage: false,
              startCursor: null,
            },
          };
        }
        return yield* trustedDomains({ workspaceId, first: 20 });
      }),
    );

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
      expect(typeof edge.node.domainName).toBe("string");
      expect(typeof edge.node.role).toBe("string");
      expect(typeof edge.node.verificationType).toBe("string");
      expect(typeof edge.node.workspaceId).toBe("string");
      expect(["FAILED", "PENDING", "VERIFIED"]).toContain(edge.node.status);
    }
  }, 60_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });

    const error = await Effect.runPromise(
      trustedDomains({ workspaceId: NON_EXISTENT_UUID, first: 1 }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );

    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);
});
