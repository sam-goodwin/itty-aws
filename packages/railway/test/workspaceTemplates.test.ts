import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { apiToken } from "../src/operations/apiToken.ts";
import { workspaceTemplates } from "../src/operations/workspaceTemplates.ts";
import { runEffect } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("workspaceTemplates", () => {
  it("happy path - lists templates for the authenticated token's workspace", async () => {
    const result = await runEffect(
      Effect.gen(function* () {
        const me = yield* apiToken({});
        const workspaceId = me.workspaces[0]?.id;
        if (!workspaceId) {
          throw new Error("test setup: authenticated token has no workspaces");
        }
        return yield* workspaceTemplates({ workspaceId, first: 10 });
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
      const n = edge.node;
      expect(typeof n.id).toBe("string");
      expect(typeof n.code).toBe("string");
      expect(typeof n.name).toBe("string");
      expect(typeof n.createdAt).toBe("string");
      expect(typeof n.activeProjects).toBe("number");
      expect(typeof n.projects).toBe("number");
      expect(typeof n.recentProjects).toBe("number");
      expect(typeof n.totalPayout).toBe("number");
      expect(typeof n.isApproved).toBe("boolean");
      expect(typeof n.isV2Template).toBe("boolean");
      expect(typeof n.isVerified).toBe("boolean");
      expect(["HIDDEN", "PUBLISHED", "UNPUBLISHED"]).toContain(n.status);

      if (n.languages !== null) {
        expect(Array.isArray(n.languages)).toBe(true);
        for (const lang of n.languages) {
          expect(typeof lang).toBe("string");
        }
      }
      if (n.tags !== null) {
        expect(Array.isArray(n.tags)).toBe(true);
        for (const tag of n.tags) {
          expect(typeof tag).toBe("string");
        }
      }
      if (n.teamId !== null) {
        expect(typeof n.teamId).toBe("string");
      }
      if (n.workspaceId !== null) {
        expect(typeof n.workspaceId).toBe("string");
      }
    }
  }, 60_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });
    const error = await Effect.runPromise(
      workspaceTemplates({
        workspaceId: NON_EXISTENT_UUID,
        first: 1,
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);

  it("error - non-existent workspace id surfaces RailwayNotAuthorized", async () => {
    const error = await runEffect(
      workspaceTemplates({
        workspaceId: NON_EXISTENT_UUID,
        first: 1,
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayNotAuthorized");
  }, 30_000);
});
