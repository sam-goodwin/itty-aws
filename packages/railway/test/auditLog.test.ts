import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { apiToken } from "../src/operations/apiToken.ts";
import { auditLog } from "../src/operations/auditLog.ts";
import { auditLogs } from "../src/operations/auditLogs.ts";
import { runEffect } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("auditLog", () => {
  it("happy path - returns the audit log identified by id+workspaceId", async () => {
    const result = await runEffect(
      Effect.gen(function* () {
        const tokenInfo = yield* apiToken({});
        const workspace = tokenInfo.workspaces[0];
        expect(workspace).toBeDefined();
        const workspaceId = workspace!.id;

        const logs = yield* auditLogs({
          workspaceId,
          first: 1,
          sort: "desc",
        });
        expect(logs.edges.length).toBeGreaterThan(0);
        const logId = logs.edges[0]!.node.id;

        const log = yield* auditLog({ id: logId, workspaceId });
        expect(log.id).toBe(logId);
        expect(typeof log.eventType).toBe("string");
        expect(typeof log.createdAt).toBe("string");
        return log;
      }),
    );

    expect(typeof result.id).toBe("string");
  }, 60_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });

    const error = await Effect.runPromise(
      auditLog({ id: NON_EXISTENT_UUID, workspaceId: NON_EXISTENT_UUID }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );

    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);

  it("error - RailwayNotFound for a non-existent audit log id", async () => {
    const error = await runEffect(
      Effect.gen(function* () {
        const tokenInfo = yield* apiToken({});
        const workspace = tokenInfo.workspaces[0];
        expect(workspace).toBeDefined();
        const workspaceId = workspace!.id;

        return yield* auditLog({
          id: NON_EXISTENT_UUID,
          workspaceId,
        }).pipe(Effect.flip);
      }),
    );

    expect([
      "RailwayNotFound",
      "RailwayNotAuthorized",
      "RailwayInvalidInput",
      "UnknownRailwayError",
    ]).toContain((error as { _tag: string })._tag);
    expect((error as { message: string }).message).toMatch(/not found$/i);
  }, 30_000);
});
