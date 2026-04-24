import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createDataset } from "../src/operations/v2/createDataset";
import { deleteDataset } from "../src/operations/v2/deleteDataset";
import { ingestToDataset } from "../src/operations/v1-edge-ingest/ingestToDataset";
import { runEffect, testRunId } from "./setup";

describe("ingestToDataset", () => {
  it(
    "ingests events into an existing dataset and returns counters",
    async () => {
      const datasetName = `distilled-axiom-ingest-${testRunId}`;

      const effect = Effect.gen(function* () {
        yield* createDataset({
          name: datasetName,
          description: "ingestToDataset test fixture",
        });

        // The generated ingestToDataset input schema only models path/query
        // fields; there is no body field. `buildRequestParts` will therefore
        // not carry any event array in the request body. We cast through
        // `unknown` to send a realistic payload alongside the documented
        // options — a signal that the input schema needs a body field — and
        // assert the response shape that axiom returns for this endpoint.
        const result = yield* ingestToDataset({
          "dataset-id": datasetName,
          "timestamp-field": "_time",
          events: [
            { _time: new Date().toISOString(), source: `test-${testRunId}` },
          ],
        } as unknown as { "dataset-id": string });

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
    "returns NotFound when ingesting into a dataset that does not exist",
    async () => {
      const error = await runEffect(
        ingestToDataset({
          "dataset-id": `doesnotexist-${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );

  it(
    "returns BadRequest when the timestamp-format is not a valid Go time layout",
    async () => {
      const datasetName = `distilled-axiom-ingest-badreq-${testRunId}`;

      const effect = Effect.gen(function* () {
        yield* createDataset({
          name: datasetName,
          description: "ingestToDataset BadRequest fixture",
        });

        // A completely nonsensical `timestamp-format` can't be parsed by
        // axiom's Go time layout parser; it surfaces this as a 400
        // BadRequest.
        const error = yield* ingestToDataset({
          "dataset-id": datasetName,
          "timestamp-field": "_time",
          "timestamp-format": "not-a-valid-go-time-layout",
        }).pipe(Effect.flip);

        expect((error as { _tag: string })._tag).toBe("BadRequest");
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
    "returns UnprocessableEntity when the csv-delimiter is not a single character",
    async () => {
      const datasetName = `distilled-axiom-ingest-422-${testRunId}`;

      const effect = Effect.gen(function* () {
        yield* createDataset({
          name: datasetName,
          description: "ingestToDataset 422 fixture",
        });

        // Multi-character delimiter is not allowed; axiom surfaces this as
        // 422 UnprocessableEntity.
        const error = yield* ingestToDataset({
          "dataset-id": datasetName,
          "csv-delimiter": "not-a-single-character",
        }).pipe(Effect.flip);

        expect((error as { _tag: string })._tag).toBe("UnprocessableEntity");
      }).pipe(
        Effect.ensuring(
          deleteDataset({ dataset_id: datasetName }).pipe(Effect.ignore),
        ),
      );

      await runEffect(effect);
    },
    { timeout: 60_000 },
  );
});
