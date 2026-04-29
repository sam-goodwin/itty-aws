import { Effect } from "effect";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { retrieveAnalyticsRule } from "../src/operations/retrieveAnalyticsRule";
import { runEffect, testRunId } from "./setup";

const apiBaseUrl = process.env.TYPESENSE_API_URL;
const apiKey = process.env.TYPESENSE_API_KEY;

const collectionName = `distilled-typesense-retarule-col-${testRunId}`;
const ruleName = `distilled-typesense-retarule-rule-${testRunId}`;

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

describe("retrieveAnalyticsRule", () => {
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
    "retrieves an analytics rule by name",
    async () => {
      const result = await runEffect(retrieveAnalyticsRule({ ruleName }));

      expect(result.name).toBe(ruleName);
      expect(result.type).toBe("log");
      expect(result.collection).toBe(collectionName);
      expect(result.event_type).toBe("click");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with NotFound when the analytics rule does not exist",
    async () => {
      const error = await runEffect(
        retrieveAnalyticsRule({
          ruleName: `does-not-exist-${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
