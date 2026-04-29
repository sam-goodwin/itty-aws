import { Effect } from "effect";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { upsertAnalyticsRule } from "../src/operations/upsertAnalyticsRule";
import { runEffect, testRunId } from "./setup";

const apiBaseUrl = process.env.TYPESENSE_API_URL;
const apiKey = process.env.TYPESENSE_API_KEY;

const collectionName = `distilled-typesense-upsarule-col-${testRunId}`;
const ruleName = `distilled-typesense-upsarule-${testRunId}`;

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

describe("upsertAnalyticsRule", () => {
  beforeAll(async () => {
    const res = await rawFetch("POST", "/collections", {
      name: collectionName,
      fields: [{ name: "title", type: "string" }],
    });
    if (!res.ok && res.status !== 409) {
      throw new Error(
        `Failed to create test collection: ${res.status} ${await res.text()}`,
      );
    }
  }, 30_000);

  afterAll(async () => {
    await rawFetch("DELETE", `/analytics/rules/${ruleName}`).catch(() => {});
    await rawFetch("DELETE", `/collections/${collectionName}`).catch(() => {});
  }, 30_000);

  it(
    "creates an analytics rule",
    async () => {
      // The SDK's input schema for upsertAnalyticsRule is missing the
      // required body fields (`type`, `collection`, `event_type`). We
      // inject them via `as never` (Schema.Struct preserves unknown keys
      // on encode).
      const result = await runEffect(
        upsertAnalyticsRule({
          ruleName,
          type: "log",
          collection: collectionName,
          event_type: "click",
        } as never),
      );

      expect(result.name).toBe(ruleName);
      expect(result.type).toBe("log");
      expect(result.collection).toBe(collectionName);
      expect(result.event_type).toBe("click");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with BadRequest when the rule body is missing required fields",
    async () => {
      // Sending an upsert with no `type`/`collection`/`event_type`
      // triggers a 400 from Typesense.
      const error = await runEffect(
        upsertAnalyticsRule({
          ruleName: `${ruleName}-bad`,
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("BadRequest");
    },
    { timeout: 30_000 },
  );
});
