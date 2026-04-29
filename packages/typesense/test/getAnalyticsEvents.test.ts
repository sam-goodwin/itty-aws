import { Effect } from "effect";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { createAnalyticsEvent } from "../src/operations/createAnalyticsEvent";
import { getAnalyticsEvents } from "../src/operations/getAnalyticsEvents";
import { runEffect, testRunId } from "./setup";

const apiBaseUrl = process.env.TYPESENSE_API_URL;
const apiKey = process.env.TYPESENSE_API_KEY;

const collectionName = `distilled-typesense-getaevt-col-${testRunId}`;
const ruleName = `distilled-typesense-getaevt-rule-${testRunId}`;
const userId = `user-${testRunId}`;

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

describe("getAnalyticsEvents", () => {
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

    // Submit an event so the GET has something potentially returnable.
    // Typesense buffers events and may not surface them immediately; the
    // happy-path assertion only requires `events` to be an array.
    await runEffect(
      createAnalyticsEvent({
        name: ruleName,
        event_type: "click",
        data: {
          user_id: userId,
          doc_id: `doc-${testRunId}`,
          q: "hello",
        },
      }),
    );
  }, 30_000);

  afterAll(async () => {
    await rawFetch("DELETE", `/analytics/rules/${ruleName}`).catch(() => {});
    await rawFetch("DELETE", `/collections/${collectionName}`).catch(() => {});
  }, 30_000);

  it(
    "retrieves recent analytics events for a user + rule",
    async () => {
      const result = await runEffect(
        getAnalyticsEvents({
          user_id: userId,
          name: ruleName,
          n: 10,
        }),
      );

      expect(Array.isArray(result.events)).toBe(true);
    },
    { timeout: 30_000 },
  );

  it(
    "fails with BadRequest when the analytics rule name does not exist",
    async () => {
      // Typesense returns 400 with { message: "No analytics rule named ..." }
      // when the rule does not exist.
      const error = await runEffect(
        getAnalyticsEvents({
          user_id: userId,
          name: `does-not-exist-${testRunId}`,
          n: 10,
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("BadRequest");
    },
    { timeout: 30_000 },
  );
});
