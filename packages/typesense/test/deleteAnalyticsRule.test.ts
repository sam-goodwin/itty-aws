import { Effect } from "effect";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { deleteAnalyticsRule } from "../src/operations/deleteAnalyticsRule";
import { runEffect, testRunId } from "./setup";

const apiBaseUrl = process.env.TYPESENSE_API_URL;
const apiKey = process.env.TYPESENSE_API_KEY;

const collectionName = `distilled-typesense-darule-col-${testRunId}`;
const ruleName = `distilled-typesense-darule-${testRunId}`;

// The typed SDK schema for `createAnalyticsRule` is an empty struct that
// can't carry the rule's required body fields, so we provision the rule
// out-of-band with raw fetch.
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
  return fetch(`${apiBaseUrl}${path}`, {
    method,
    headers: {
      "X-TYPESENSE-API-KEY": apiKey,
      "Content-Type": "application/json",
    },
    body: body === undefined ? undefined : JSON.stringify(body),
  });
};

describe("deleteAnalyticsRule", () => {
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
    // Defensive: the rule is normally deleted by the happy-path test, but
    // ensure both rule and collection are gone if the test failed early.
    await rawFetch("DELETE", `/analytics/rules/${ruleName}`).catch(() => {});
    await rawFetch("DELETE", `/collections/${collectionName}`).catch(
      () => {},
    );
  }, 30_000);

  it(
    "deletes an existing analytics rule and returns its full record",
    async () => {
      const result = await runEffect(deleteAnalyticsRule({ ruleName }));

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
        deleteAnalyticsRule({
          ruleName: `does-not-exist-${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
