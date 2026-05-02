import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { apiToken } from "../src/operations/apiToken.ts";
import { auditLogs } from "../src/operations/auditLogs.ts";
import { runEffect } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("auditLogs", () => {
  it("happy path - returns paginated audit logs for the workspace", async () => {
    const result = await runEffect(
      Effect.gen(function* () {
        const tokenInfo = yield* apiToken({});
        const workspace = tokenInfo.workspaces[0];
        expect(workspace).toBeDefined();
        const workspaceId = workspace!.id;

        const logs = yield* auditLogs({
          workspaceId,
          first: 5,
          sort: "desc",
        });
        expect(Array.isArray(logs.edges)).toBe(true);
        expect(typeof logs.pageInfo.hasNextPage).toBe("boolean");
        expect(typeof logs.pageInfo.hasPreviousPage).toBe("boolean");
        for (const edge of logs.edges) {
          expect(typeof edge.cursor).toBe("string");
          expect(typeof edge.node.id).toBe("string");
          expect(typeof edge.node.eventType).toBe("string");
          expect(typeof edge.node.createdAt).toBe("string");
        }
        return logs;
      }),
    );

    expect(Array.isArray(result.edges)).toBe(true);
  }, 60_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });

    const error = await Effect.runPromise(
      auditLogs({ workspaceId: NON_EXISTENT_UUID, first: 1 }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );

    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);
});
