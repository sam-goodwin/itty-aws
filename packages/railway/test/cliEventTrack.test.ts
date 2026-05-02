import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { cliEventTrack } from "../src/operations/cliEventTrack.ts";
import { runEffect, testRunId } from "./setup.ts";

const validInput = (overrides?: { command?: string }) => ({
  arch: "x64",
  cliVersion: "0.0.0-test",
  command: overrides?.command ?? `distilled-railway-cli-${testRunId}`,
  durationMs: 42,
  isCi: true,
  os: "linux",
  success: true,
});

describe("cliEventTrack", () => {
  it(
    "happy path - tracks a CLI event and returns true",
    async () => {
      const result = await runEffect(
        cliEventTrack({ input: validInput() }),
      );
      expect(result).toBe(true);
    },
    60_000,
  );

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });
    const error = await Effect.runPromise(
      cliEventTrack({ input: validInput({ command: "unauth" }) }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);

  it("error - RailwayInvalidInput for an empty command", async () => {
    const error = await runEffect(
      cliEventTrack({ input: validInput({ command: "" }) }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayInvalidInput");
  }, 30_000);
});
