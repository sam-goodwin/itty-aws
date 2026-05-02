import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { recoveryCodeGenerate } from "../src/operations/recoveryCodeGenerate.ts";
import { runEffect } from "./setup.ts";

describe("recoveryCodeGenerate", () => {
  it(
    "happy path - generates a fresh set of recovery codes for the authenticated user",
    async () => {
      const result = await runEffect(recoveryCodeGenerate({}));
      expect(Array.isArray(result.recoveryCodes)).toBe(true);
      expect(result.recoveryCodes.length).toBeGreaterThan(0);
      for (const code of result.recoveryCodes) {
        expect(typeof code).toBe("string");
        expect(code.length).toBeGreaterThan(0);
      }
    },
    60_000,
  );

  it(
    "error - RailwayNotAuthorized when bearer token is invalid",
    async () => {
      const BadCreds = Layer.succeed(Credentials, {
        apiToken: Redacted.make("not-a-real-token-deadbeef"),
        apiBaseUrl: "https://backboard.railway.com",
      });
      const error = await Effect.runPromise(
        recoveryCodeGenerate({}).pipe(
          Effect.flip,
          Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
        ) as Effect.Effect<{ _tag: string }, never, never>,
      );
      expect(error._tag).toBe("RailwayNotAuthorized");
    },
    30_000,
  );
});
