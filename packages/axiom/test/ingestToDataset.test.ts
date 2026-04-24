import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createDataset } from "../src/operations/v2/createDataset";
import { deleteDataset } from "../src/operations/v2/deleteDataset";
import { ingestToDataset } from "../src/operations/v1-edge-ingest/ingestToDataset";
import { runEffect, testRunId } from "./setup";

// NOTE: the generated ingestToDataset input schema doesn't model the
// request body (the spec types it as an opaque binary blob), so from the
// SDK we can only exercise path/query/header params + an empty body.
// That limits what we can assert: axiom returns a 200 with zero counters
// for an empty body even with bogus timestamp-format / csv-delimiter
// values, so the "BadRequest on bad timestamp-format" and
// "UnprocessableEntity on multi-char delimiter" probes can't be triggered
// without also sending events, which isn't reachable through the typed
// SDK today.

describe("ingestToDataset", () => {
  it(
    "accepts an empty ingest request against an existing dataset and returns zero counters",
    async () => {
      const datasetName = `distilled-axiom-ingest-${testRunId}`;

      const effect = Effect.gen(function* () {
        yield* createDataset({
          name: datasetName,
          description: "ingestToDataset test fixture",
        });

        const result = yield* ingestToDataset({
          "dataset-id": datasetName,
          "timestamp-field": "_time",
        });

        expect(typeof result.ingested).toBe("number");
        expect(typeof result.failed).toBe("number");
        expect(typeof result.blocksCreated).toBe("number");
        expect(typeof result.processedBytes).toBe("number");
        expect(typeof result.walLength).toBe("number");
        expect(result.failed).toBe(0);
      }).pipe(
        Effect.ensuring(
          deleteDataset({ dataset_id: datasetName }).pipe(Effect.ignore),
        ),
      );

      await runEffect(effect);
    },
    { timeout: 60_000 },
  );

  it(
    "returns UnprocessableEntity when ingesting without a body (generator limitation)",
    async () => {
      // Because the SDK can't model the request body (see note above), we
      // never reach the dataset-lookup stage — axiom rejects with 422
      // "payload in body is required" first, even for a non-existent
      // dataset id. When/if the generator learns to serialize the body,
      // this test should flip back to expecting NotFound.
      const error = await runEffect(
        ingestToDataset({
          "dataset-id": `doesnotexist-${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("UnprocessableEntity");
    },
    { timeout: 30_000 },
  );
});
