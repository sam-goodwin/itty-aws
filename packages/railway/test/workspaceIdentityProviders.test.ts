import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { apiToken } from "../src/operations/apiToken.ts";
import { workspaceIdentityProviders } from "../src/operations/workspaceIdentityProviders.ts";
import { runEffect } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("workspaceIdentityProviders", () => {
  it("happy path - lists identity providers for the authenticated token's workspace", async () => {
    const result = await runEffect(
      Effect.gen(function* () {
        const me = yield* apiToken({});
        const workspaceId = me.workspaces[0]?.id;
        if (!workspaceId) {
          throw new Error("test setup: authenticated token has no workspaces");
        }
        return yield* workspaceIdentityProviders({ workspaceId, first: 10 });
      }),
    );

    expect(Array.isArray(result.edges)).toBe(true);
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
      expect(typeof edge.node.workspaceId).toBe("string");
      expect(typeof edge.node.createdAt).toBe("string");
      expect(typeof edge.node.updatedAt).toBe("string");
      if (edge.node.enforcementEnabledAt !== null) {
        expect(typeof edge.node.enforcementEnabledAt).toBe("string");
      }
    }
  }, 60_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });
    const error = await Effect.runPromise(
      workspaceIdentityProviders({
        workspaceId: NON_EXISTENT_UUID,
        first: 1,
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);

  it("error - RailwayNotFound for a non-existent workspace id", async () => {
    const error = await runEffect(
      workspaceIdentityProviders({
        workspaceId: NON_EXISTENT_UUID,
        first: 1,
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayNotFound");
    expect((error as { message: string }).message).toMatch(/not found$/i);
  }, 30_000);
});
