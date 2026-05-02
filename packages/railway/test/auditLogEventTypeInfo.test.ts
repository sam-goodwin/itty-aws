import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { auditLogEventTypeInfo } from "../src/operations/auditLogEventTypeInfo.ts";
import { runEffect } from "./setup.ts";

describe("auditLogEventTypeInfo", () => {
  it(
    "happy path - returns array of audit log event type descriptions",
    async () => {
      const result = await runEffect(auditLogEventTypeInfo({}));

      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBeGreaterThan(0);
      for (const info of result) {
        expect(typeof info.eventType).toBe("string");
        expect(typeof info.description).toBe("string");
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
        auditLogEventTypeInfo({}).pipe(
          Effect.flip,
          Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
        ) as Effect.Effect<{ _tag: string }, never, never>,
      );

      expect(error._tag).toBe("RailwayNotAuthorized");
    },
    30_000,
  );
});
