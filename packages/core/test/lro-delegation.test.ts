/**
 * Core long-running-operation gate (layers 1–2).
 *
 * The core client doesn't know ARM's polling protocol — that's the SDK's job.
 * Core's responsibility is narrow: when an operation's `Http` trait carries a
 * `longRunning` marker AND the response is an async ack (`201`/`202`), delegate
 * to the SDK-provided `pollLongRunning` hook and decode *its* result through the
 * output schema. Otherwise, decode the immediate response as usual.
 *
 * These tests prove that gate with a stub poller — no ARM semantics, no network.
 */
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Schema from "effect/Schema";
import { describe, expect, it } from "vitest";
import { makeAPI } from "../src/client.ts";
import type { Policy } from "../src/retry.ts";
import * as T from "../src/traits.ts";
import { fakeHttpLayer } from "./fake-http.ts";

interface TestConfig {
  apiBaseUrl: string;
}

class TestCreds extends Context.Service<TestCreds, Effect.Effect<TestConfig>>()(
  "TestCreds",
) {}
class TestRetry extends Context.Service<TestRetry, Policy>()("TestRetry") {}

const CredsLayer = Layer.succeed(
  TestCreds,
  Effect.succeed({ apiBaseUrl: "https://fake.test" }),
);

class TestParseError {
  readonly _tag = "TestParseError";
  constructor(readonly props: { body: unknown; cause: unknown }) {}
}

const Resource = Schema.Struct({
  id: Schema.String,
  provisioningState: Schema.String,
});

/** Build a client whose `pollLongRunning` hook records whether it was called. */
const makeClient = (
  pollLongRunning: (args: {
    finalStateVia?: string;
  }) => Effect.Effect<unknown, unknown>,
) =>
  makeAPI<TestConfig>({
    credentials: TestCreds,
    getBaseUrl: (c) => c.apiBaseUrl,
    getAuthHeaders: () => ({}),
    matchError: (_status, body) => Effect.fail(body),
    ParseError: TestParseError,
    retry: TestRetry,
    pollLongRunning,
  });

describe("core LRO gate", () => {
  it("delegates to pollLongRunning on a 202 for a longRunning op, and decodes its result", async () => {
    let polled = false;
    const API = makeClient(({ finalStateVia }) => {
      polled = true;
      expect(finalStateVia).toBe("azure-async-operation");
      return Effect.succeed({ id: "/final", provisioningState: "Succeeded" });
    });

    const Input = Schema.Struct({}).pipe(
      T.Http({
        method: "PUT",
        path: "/r",
        longRunning: { finalStateVia: "azure-async-operation" },
      }),
    );
    const createResource = API.make(() => ({
      inputSchema: Input,
      outputSchema: Resource,
    }));

    // Server acks with 202 + an intermediate body that does NOT satisfy the
    // output schema — so if core decoded it directly the test would fail.
    const http = fakeHttpLayer(() => ({
      status: 202,
      body: { provisioningState: "Creating" },
      headers: { "azure-asyncoperation": "https://fake.test/op/1" },
    }));

    const result = await Effect.runPromise(
      createResource({}).pipe(Effect.provide(Layer.merge(CredsLayer, http))),
    );

    expect(polled).toBe(true);
    expect(result).toEqual({ id: "/final", provisioningState: "Succeeded" });
  });

  it("does NOT poll a synchronous 200, even for a longRunning op", async () => {
    let polled = false;
    const API = makeClient(() => {
      polled = true;
      return Effect.succeed({
        id: "/should-not-be-used",
        provisioningState: "x",
      });
    });

    const Input = Schema.Struct({}).pipe(
      T.Http({
        method: "PUT",
        path: "/r",
        longRunning: { finalStateVia: "azure-async-operation" },
      }),
    );
    const createResource = API.make(() => ({
      inputSchema: Input,
      outputSchema: Resource,
    }));

    // The op completed synchronously: a 200 with the fully-provisioned body.
    const http = fakeHttpLayer(() => ({
      status: 200,
      body: { id: "/sync", provisioningState: "Succeeded" },
    }));

    const result = await Effect.runPromise(
      createResource({}).pipe(Effect.provide(Layer.merge(CredsLayer, http))),
    );

    expect(polled).toBe(false);
    expect(result).toEqual({ id: "/sync", provisioningState: "Succeeded" });
  });

  it("does NOT poll a 202 for a non-longRunning op (no trait marker)", async () => {
    let polled = false;
    const API = makeClient(() => {
      polled = true;
      return Effect.succeed({ id: "/nope", provisioningState: "x" });
    });

    // No `longRunning` marker on the trait.
    const Input = Schema.Struct({}).pipe(T.Http({ method: "PUT", path: "/r" }));
    const createResource = API.make(() => ({
      inputSchema: Input,
      outputSchema: Resource,
    }));

    const http = fakeHttpLayer(() => ({
      status: 202,
      body: { id: "/accepted", provisioningState: "Accepted" },
    }));

    const result = await Effect.runPromise(
      createResource({}).pipe(Effect.provide(Layer.merge(CredsLayer, http))),
    );

    expect(polled).toBe(false);
    expect(result).toEqual({ id: "/accepted", provisioningState: "Accepted" });
  });
});
