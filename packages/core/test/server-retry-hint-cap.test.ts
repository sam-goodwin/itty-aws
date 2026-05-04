import * as Effect from "effect/Effect";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  DEFAULT_SERVER_RETRY_HINT_CAP_MS,
  readServerRetryHintCapMsFromEnv,
  ServerRetryHintCapMs,
  serverRetryHintCapLayer,
} from "../src/retry.ts";

describe("readServerRetryHintCapMsFromEnv", () => {
  const key = "DISTILLED_SERVER_RETRY_HINT_CAP_MS";
  let prev: string | undefined;

  beforeEach(() => {
    prev = process.env[key];
  });

  afterEach(() => {
    if (prev === undefined) delete process.env[key];
    else process.env[key] = prev;
  });

  it("returns the default when unset", () => {
    delete process.env[key];
    expect(readServerRetryHintCapMsFromEnv()).toBe(
      DEFAULT_SERVER_RETRY_HINT_CAP_MS,
    );
  });

  it("reads a valid positive integer from the environment", () => {
    process.env[key] = "5000";
    expect(readServerRetryHintCapMsFromEnv()).toBe(5000);
  });

  it("truncates fractional values", () => {
    process.env[key] = "999.7";
    expect(readServerRetryHintCapMsFromEnv()).toBe(999);
  });

  it("ignores invalid values and falls back to the default", () => {
    process.env[key] = "not-a-number";
    expect(readServerRetryHintCapMsFromEnv()).toBe(
      DEFAULT_SERVER_RETRY_HINT_CAP_MS,
    );
  });

  it("treats negative numbers as invalid", () => {
    process.env[key] = "-1";
    expect(readServerRetryHintCapMsFromEnv()).toBe(
      DEFAULT_SERVER_RETRY_HINT_CAP_MS,
    );
  });
});

describe("ServerRetryHintCapMs layer", () => {
  it("provides the cap into the context", () => {
    const program = Effect.gen(function* () {
      return yield* ServerRetryHintCapMs;
    }).pipe(Effect.provide(serverRetryHintCapLayer(42_000)));
    expect(Effect.runSync(program)).toBe(42_000);
  });
});
