import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { externalWorkspaces } from "../src/operations/externalWorkspaces.ts";
import { runEffect } from "./setup.ts";

describe("externalWorkspaces", () => {
  it(
    "happy path - returns external workspaces accessible to the bearer",
    async () => {
      const result = await runEffect(externalWorkspaces({}));

      expect(Array.isArray(result)).toBe(true);
      for (const ws of result) {
        expect(typeof ws.id).toBe("string");
        expect(typeof ws.name).toBe("string");
        expect(typeof ws.createdAt).toBe("string");
        expect(["FREE", "HOBBY", "PRO"]).toContain(ws.plan);
        expect([
          "ACTIVE",
          "CANCELLED",
          "INACTIVE",
          "PAST_DUE",
          "UNPAID",
        ]).toContain(ws.customerState);
        expect(typeof ws.has2FAEnforcement).toBe("boolean");
        expect(typeof ws.hasAutomaticDiagnosis).toBe("boolean");
        expect(typeof ws.hasBAA).toBe("boolean");
        expect(typeof ws.hasGuardrailsAccess).toBe("boolean");
        expect(typeof ws.hasRBAC).toBe("boolean");
        expect(typeof ws.hasSAML).toBe("boolean");
        expect(typeof ws.redactedDueTo2FAPending).toBe("boolean");
        expect(Array.isArray(ws.projects)).toBe(true);
      }
    },
    30_000,
  );

  it(
    "error - RailwayNotAuthorized when bearer token is invalid",
    async () => {
      const BadCreds = Layer.succeed(Credentials, {
        apiToken: Redacted.make("not-a-real-token-deadbeef"),
        apiBaseUrl: "https://backboard.railway.com",
      });

      const error = await Effect.runPromise(
        externalWorkspaces({}).pipe(
          Effect.flip,
          Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
        ) as Effect.Effect<{ _tag: string }, never, never>,
      );

      expect(error._tag).toBe("RailwayNotAuthorized");
    },
    30_000,
  );
});
