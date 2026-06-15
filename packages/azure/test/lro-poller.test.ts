/**
 * Azure ARM long-running-operation poller (layer 3).
 *
 * ARM mutating ops return a `201`/`202` ack and finish asynchronously. The
 * poller drives the protocol to a terminal state and resolves the final
 * resource, so callers see a provisioned resource — not the intermediate ack.
 *
 * These tests script the HTTP exchange (no network, no account) and assert both
 * the resolved value and the exact poll sequence the poller performed.
 */
import { Effect, Fiber, Layer, Redacted } from "effect";
import * as Schema from "effect/Schema";
import { TestClock } from "effect/testing";
import { describe, expect, it } from "vitest";
import { API } from "../src/client.ts";
import { Credentials } from "../src/credentials.ts";
import { AzureLongRunningOperationFailed } from "../src/errors.ts";
import * as T from "../src/traits.ts";
import { mockHttp } from "./fake-http.ts";

const STORAGE_PATH =
  "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}";

const ACCOUNT_INPUT = Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
});

const ACCOUNT_INPUT_VALUE = {
  subscriptionId: "sub",
  resourceGroupName: "rg",
  accountName: "acct",
};

const BASE = "https://fake.test";

const CredsLayer = Layer.succeed(
  Credentials,
  Effect.succeed({
    bearerToken: Redacted.make("test-token"),
    subscriptionId: "sub",
    apiBaseUrl: BASE,
  }),
);

const StorageAccount = Schema.Struct({
  id: Schema.String,
  properties: Schema.Struct({ provisioningState: Schema.String }),
});

/** An LRO operation over a storage account, varying only method/path/final-state. */
const lroOp = (
  method: "PUT" | "POST",
  finalStateVia: string,
  path: string = STORAGE_PATH,
) =>
  API.make(() => ({
    inputSchema: ACCOUNT_INPUT.pipe(
      T.Http({
        method,
        path,
        apiVersion: "2021-09-01",
        longRunning: { finalStateVia },
      }),
    ),
    outputSchema: StorageAccount,
  }));

const StorageAccountsCreate = lroOp("PUT", "azure-async-operation");

const ACCOUNT_PATH =
  "/subscriptions/sub/resourceGroups/rg/providers/Microsoft.Storage/storageAccounts/acct";
const OP_URL = `${BASE}/operations/op-123`;

describe("ARM LRO poller", () => {
  it("azure-async-operation: polls the monitor to Succeeded, then GETs the original URI", async () => {
    const { layer, calls } = mockHttp((_req, i) => {
      switch (i) {
        case 0: // PUT ack
          return {
            status: 202,
            body: {},
            headers: { "azure-asyncoperation": OP_URL, "retry-after": "0" },
          };
        case 1: // monitor poll → terminal success
          return { status: 200, body: { status: "Succeeded" } };
        default: // final GET on the original resource URI
          return {
            status: 200,
            body: {
              id: ACCOUNT_PATH,
              properties: { provisioningState: "Succeeded" },
            },
          };
      }
    });

    const result = await Effect.runPromise(
      StorageAccountsCreate({
        subscriptionId: "sub",
        resourceGroupName: "rg",
        accountName: "acct",
      }).pipe(Effect.provide(Layer.merge(CredsLayer, layer))),
    );

    expect(result.properties.provisioningState).toBe("Succeeded");
    expect(result.id).toBe(ACCOUNT_PATH);

    // Exact poll sequence: PUT → GET monitor → GET original URI.
    expect(calls.map((c) => c.method)).toEqual(["PUT", "GET", "GET"]);
    expect(calls[1].url).toBe(OP_URL);
    expect(calls[2].url).toBe(BASE + ACCOUNT_PATH);
  });

  it("location: polls the Location URL until it stops returning 202, then resolves that body", async () => {
    const LOC_URL = `${BASE}/locations/loc-456`;
    const RunAction = lroOp("POST", "location", `${STORAGE_PATH}/failover`);

    const { layer, calls } = mockHttp((_req, i) => {
      switch (i) {
        case 0: // POST ack with a Location monitor (no Azure-AsyncOperation)
          return {
            status: 202,
            body: {},
            headers: { location: LOC_URL, "retry-after": "0" },
          };
        case 1: // still running
          return { status: 202, body: {}, headers: { "retry-after": "0" } };
        default: // 200 → the Location response body IS the final resource
          return {
            status: 200,
            body: {
              id: ACCOUNT_PATH,
              properties: { provisioningState: "Succeeded" },
            },
          };
      }
    });

    const result = await Effect.runPromise(
      RunAction({
        subscriptionId: "sub",
        resourceGroupName: "rg",
        accountName: "acct",
      }).pipe(Effect.provide(Layer.merge(CredsLayer, layer))),
    );

    expect(result.properties.provisioningState).toBe("Succeeded");
    expect(result.id).toBe(ACCOUNT_PATH);

    // POST → GET Location (202) → GET Location (200). No GET on the original URI.
    expect(calls.map((c) => c.method)).toEqual(["POST", "GET", "GET"]);
    expect(calls[1].url).toBe(LOC_URL);
    expect(calls[2].url).toBe(LOC_URL);
  });

  it("original-uri: polls the monitor, then GETs the original URI (ignoring the monitor body)", async () => {
    const Create = lroOp("PUT", "original-uri");

    const { layer, calls } = mockHttp((_req, i) => {
      switch (i) {
        case 0: // PUT ack
          return {
            status: 202,
            body: {},
            headers: { "azure-asyncoperation": OP_URL, "retry-after": "0" },
          };
        case 1: // monitor → Succeeded, but the monitor body is NOT the resource
          return { status: 200, body: { status: "Succeeded" } };
        default: // original URI carries the provisioned resource
          return {
            status: 200,
            body: {
              id: ACCOUNT_PATH,
              properties: { provisioningState: "Succeeded" },
            },
          };
      }
    });

    const result = await Effect.runPromise(
      Create(ACCOUNT_INPUT_VALUE).pipe(
        Effect.provide(Layer.merge(CredsLayer, layer)),
      ),
    );

    expect(result.id).toBe(ACCOUNT_PATH);
    // PUT → GET monitor → GET original URI.
    expect(calls.map((c) => c.method)).toEqual(["PUT", "GET", "GET"]);
    expect(calls[2].url).toBe(BASE + ACCOUNT_PATH);
  });

  it("async-operation Failed → AzureLongRunningOperationFailed (no final GET)", async () => {
    const Create = lroOp("PUT", "azure-async-operation");

    const { layer, calls } = mockHttp((_req, i) =>
      i === 0
        ? {
            status: 202,
            body: {},
            headers: { "azure-asyncoperation": OP_URL, "retry-after": "0" },
          }
        : {
            status: 200,
            body: {
              status: "Failed",
              error: { code: "DeploymentFailed", message: "boom" },
            },
          },
    );

    const error = await Effect.runPromise(
      Create(ACCOUNT_INPUT_VALUE).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(CredsLayer, layer)),
      ),
    );

    expect(error).toBeInstanceOf(AzureLongRunningOperationFailed);
    expect(error).toMatchObject({
      _tag: "AzureLongRunningOperationFailed",
      status: "Failed",
      code: "DeploymentFailed",
      message: "boom",
    });
    // PUT + one monitor poll only — it fails before any final GET.
    expect(calls.map((c) => c.method)).toEqual(["PUT", "GET"]);
  });

  it("honors each poll's Retry-After before the next poll (TestClock)", async () => {
    const Create = lroOp("PUT", "azure-async-operation");

    const { layer, calls } = mockHttp((_req, i) => {
      switch (i) {
        case 0: // PUT ack
          return {
            status: 202,
            body: {},
            headers: { "azure-asyncoperation": OP_URL },
          };
        case 1: // still running, asks us to wait an hour before polling again
          return {
            status: 200,
            body: { status: "InProgress" },
            headers: { "retry-after": "3600" },
          };
        case 2: // terminal success
          return { status: 200, body: { status: "Succeeded" } };
        default: // final resource
          return {
            status: 200,
            body: {
              id: ACCOUNT_PATH,
              properties: { provisioningState: "Succeeded" },
            },
          };
      }
    });

    const program = Effect.gen(function* () {
      const fiber = yield* Effect.forkChild(Create(ACCOUNT_INPUT_VALUE));

      // The immediate PUT + first poll run; the poller is now sleeping on the
      // 3600s Retry-After before the second poll.
      yield* TestClock.adjust("1 second");
      expect(calls.map((c) => c.method)).toEqual(["PUT", "GET"]);
      expect(fiber.pollUnsafe()).toBeUndefined();

      // Advancing less than the Retry-After does not release the next poll.
      yield* TestClock.adjust("59 minutes");
      expect(calls.length).toBe(2);
      expect(fiber.pollUnsafe()).toBeUndefined();

      // Crossing the hour boundary releases poll #2 (Succeeded) + the final GET.
      yield* TestClock.adjust("1 minute");
      const result = yield* Fiber.join(fiber);
      expect(result.properties.provisioningState).toBe("Succeeded");
      expect(calls.map((c) => c.method)).toEqual(["PUT", "GET", "GET", "GET"]);
    });

    await Effect.runPromise(
      program.pipe(
        Effect.scoped,
        Effect.provide(Layer.mergeAll(CredsLayer, layer, TestClock.layer())),
      ),
    );
  });
});
