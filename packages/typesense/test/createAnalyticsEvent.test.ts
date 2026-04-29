import { Effect } from "effect";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { createAnalyticsEvent } from "../src/operations/createAnalyticsEvent";
import { runEffect, testRunId } from "./setup";

const apiBaseUrl = process.env.TYPESENSE_API_URL;
const apiKey = process.env.TYPESENSE_API_KEY;

const collectionName = `distilled-typesense-aevt-col-${testRunId}`;
const ruleName = `distilled-typesense-aevt-rule-${testRunId}`;

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

describe("createAnalyticsEvent", () => {
  beforeAll(async () => {
    // Create a collection that the analytics rule can reference.
    const createCol = await rawFetch("POST", "/collections", {
      name: collectionName,
      fields: [{ name: "title", type: "string" }],
    });
    if (!createCol.ok && createCol.status !== 409) {
      throw new Error(
        `Failed to create test collection: ${createCol.status} ${await createCol.text()}`,
      );
    }

    // Create a `log` analytics rule keyed by ruleName + event_type=click.
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
    "submits an analytics event for an existing rule and returns ok: true",
    async () => {
      const result = await runEffect(
        createAnalyticsEvent({
          name: ruleName,
          event_type: "click",
          data: {
            user_id: `user-${testRunId}`,
            doc_id: `doc-${testRunId}`,
            q: "hello",
          },
        }),
      );

      expect(result.ok).toBe(true);
    },
    { timeout: 30_000 },
  );

  it(
    "fails with BadRequest when the analytics rule name does not exist",
    async () => {
      // Typesense returns 400 with { message: "No analytics rule found ..." }
      // when the event's `name` does not correspond to a registered rule.
      const error = await runEffect(
        createAnalyticsEvent({
          name: `does-not-exist-${testRunId}`,
          event_type: "click",
          data: {
            user_id: `user-${testRunId}`,
            doc_id: `doc-${testRunId}`,
          },
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("BadRequest");
    },
    { timeout: 30_000 },
  );
});
