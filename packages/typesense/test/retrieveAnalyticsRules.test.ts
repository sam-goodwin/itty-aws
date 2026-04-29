import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials";
import { retrieveAnalyticsRules } from "../src/operations/retrieveAnalyticsRules";
import { runEffect, testRunId } from "./setup";

const apiBaseUrl = process.env.TYPESENSE_API_URL;
const apiKey = process.env.TYPESENSE_API_KEY;

const collectionName = `distilled-typesense-retarules-col-${testRunId}`;
const ruleName = `distilled-typesense-retarules-rule-${testRunId}`;

// Raw HTTP helpers — the typed SDK schemas for analytics rules / collections
// don't expose every body field required by Typesense, so we provision the
// prerequisite rule and collection out-of-band.
const rawFetch = async (
  method: string,
  path: string,
  body?: unknown,
): Promise<Response> => {
  if (!apiBaseUrl || !apiKey) {
    throw new Error(
      "TYPESENSE_API_URL and TYPESENSE_API_KEY must be set to run typesense tests",
    );
  }
  const res = await fetch(`${apiBaseUrl}${path}`, {
    method,
    headers: {
      "X-TYPESENSE-API-KEY": apiKey,
      "Content-Type": "application/json",
    },
    body: body === undefined ? undefined : JSON.stringify(body),
  });
  return res;
};

describe("retrieveAnalyticsRules", () => {
  beforeAll(async () => {
    const createCol = await rawFetch("POST", "/collections", {
      name: collectionName,
      fields: [{ name: "title", type: "string" }],
    });
    if (!createCol.ok && createCol.status !== 409) {
      throw new Error(
        `Failed to create test collection: ${createCol.status} ${await createCol.text()}`,
      );
    }

    const createRule = await rawFetch(
      "PUT",
      `/analytics/rules/${ruleName}`,
      {
        type: "log",
        collection: collectionName,
        event_type: "click",
      },
    );
    if (!createRule.ok) {
      throw new Error(
        `Failed to create test analytics rule: ${createRule.status} ${await createRule.text()}`,
      );
    }
  }, 30_000);

  afterAll(async () => {
    await rawFetch("DELETE", `/analytics/rules/${ruleName}`).catch(() => {});
    await rawFetch("DELETE", `/collections/${collectionName}`).catch(() => {});
  }, 30_000);

  it(
    "lists all analytics rules including ones we just created",
    async () => {
      const result = await runEffect(retrieveAnalyticsRules({}));

      expect(Array.isArray(result)).toBe(true);

      const ours = result.find((r) => r.name === ruleName);
      expect(ours).toBeDefined();
      expect(ours?.type).toBe("log");
      expect(ours?.collection).toBe(collectionName);
      expect(ours?.event_type).toBe("click");
    },
    { timeout: 30_000 },
  );

  it(
    "returns Unauthorized when the X-TYPESENSE-API-KEY is invalid",
    async () => {
      if (!apiBaseUrl) {
        throw new Error(
          "TYPESENSE_API_URL must be set to run typesense tests",
        );
      }
      const BadCredentials = Layer.succeed(Credentials, {
        apiKey: Redacted.make(`invalid-key-${testRunId}`),
        apiBaseUrl,
      });

      const error = await Effect.runPromise(
        retrieveAnalyticsRules({}).pipe(
          Effect.flip,
          Effect.provide(Layer.merge(BadCredentials, FetchHttpClient.layer)),
        ) as Effect.Effect<unknown, never, never>,
      );

      expect((error as { _tag: string })._tag).toBe("Unauthorized");
    },
    { timeout: 30_000 },
  );
});
