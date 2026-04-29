import { Effect } from "effect";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { getStemmingDictionary } from "../src/operations/getStemmingDictionary";
import { runEffect, testRunId } from "./setup";

const apiBaseUrl = process.env.TYPESENSE_API_URL;
const apiKey = process.env.TYPESENSE_API_KEY;

const dictionaryId = `distilled-typesense-getstem-${testRunId}`;

describe("getStemmingDictionary", () => {
  // The typed importStemmingDictionary SDK schema doesn't expose the
  // JSONL body / id query-param wiring needed to actually upload the
  // dictionary, so we provision via raw fetch.
  beforeAll(async () => {
    if (!apiBaseUrl || !apiKey) {
      throw new Error(
        "TYPESENSE_API_URL and TYPESENSE_API_KEY must be set to run typesense tests",
      );
    }
    const jsonl = [
      JSON.stringify({ word: "people", root: "person" }),
      JSON.stringify({ word: "children", root: "child" }),
    ].join("\n");
    const res = await fetch(
      `${apiBaseUrl}/stemming/dictionaries/import?id=${encodeURIComponent(dictionaryId)}`,
      {
        method: "POST",
        headers: {
          "X-TYPESENSE-API-KEY": apiKey,
          "Content-Type": "text/plain",
        },
        body: jsonl,
      },
    );
    if (!res.ok) {
      throw new Error(
        `Failed to import test stemming dictionary: ${res.status} ${await res.text()}`,
      );
    }
  }, 30_000);

  afterAll(async () => {
    if (!apiBaseUrl || !apiKey) return;
    await fetch(
      `${apiBaseUrl}/stemming/dictionaries/${encodeURIComponent(dictionaryId)}`,
      {
        method: "DELETE",
        headers: { "X-TYPESENSE-API-KEY": apiKey },
      },
    ).catch(() => {});
  }, 30_000);

  it(
    "retrieves an existing stemming dictionary by id",
    async () => {
      const result = await runEffect(getStemmingDictionary({ dictionaryId }));

      expect(result.id).toBe(dictionaryId);
      expect(Array.isArray(result.words)).toBe(true);
      expect(result.words.length).toBeGreaterThanOrEqual(2);
      const peopleEntry = result.words.find((w) => w.word === "people");
      expect(peopleEntry?.root).toBe("person");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with NotFound when the stemming dictionary does not exist",
    async () => {
      const error = await runEffect(
        getStemmingDictionary({
          dictionaryId: `does-not-exist-${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
