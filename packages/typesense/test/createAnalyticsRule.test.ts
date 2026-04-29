import { Effect } from "effect";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { createAnalyticsRule } from "../src/operations/createAnalyticsRule";
import { deleteAnalyticsRule } from "../src/operations/deleteAnalyticsRule";
import { runEffect, testRunId } from "./setup";

const apiBaseUrl = process.env.TYPESENSE_API_URL;
const apiKey = process.env.TYPESENSE_API_KEY;

const collectionName = `distilled-typesense-arule-col-${testRunId}`;
const ruleName = `distilled-typesense-arule-${testRunId}`;

// The typed SDK schema for `createCollection` has a complete shape, but for
// determinism we provision the prerequisite collection out-of-band so the
// happy path test can focus solely on createAnalyticsRule.
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

describe("createAnalyticsRule", () => {
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
    "creates a `log` analytics rule and returns the rule object",
    async () => {
      // Schema.Struct({}) preserves unknown keys on encode, so we cast the
      // full rule body through. The OpenAPI spec models this endpoint with
      // an empty input schema; the actual body is the rule itself.
      const result = await runEffect(
        createAnalyticsRule({
          name: ruleName,
          type: "log",
          collection: collectionName,
          event_type: "click",
        } as never).pipe(
          Effect.ensuring(
            deleteAnalyticsRule({ ruleName }).pipe(Effect.ignore),
          ),
        ),
      );

      const rule = result as {
        name?: string;
        type?: string;
        collection?: string;
        event_type?: string;
      };
      expect(rule.name).toBe(ruleName);
      expect(rule.type).toBe("log");
      expect(rule.collection).toBe(collectionName);
      expect(rule.event_type).toBe("click");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with BadRequest when the rule body is empty / missing required fields",
    async () => {
      // Sending POST /analytics/rules with an empty body causes Typesense to
      // reject with 400 because required fields (name, type, collection,
      // event_type) are missing.
      const error = await runEffect(createAnalyticsRule({}).pipe(Effect.flip));

      expect((error as { _tag: string })._tag).toBe("BadRequest");
    },
    { timeout: 30_000 },
  );
});
