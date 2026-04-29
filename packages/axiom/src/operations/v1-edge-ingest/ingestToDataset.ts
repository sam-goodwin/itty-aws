import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, NotFound, UnprocessableEntity } from "../../errors.ts";

// Input Schema
export const IngestToDatasetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  "dataset-id": Schema.String.pipe(T.PathParam()),
  "timestamp-field": Schema.optional(Schema.String),
  "timestamp-format": Schema.optional(Schema.String),
  "csv-delimiter": Schema.optional(Schema.String),
}).pipe(T.Http({ method: "POST", path: "/v1/datasets/{dataset-id}/ingest" }));
export type IngestToDatasetInput = typeof IngestToDatasetInput.Type;

// Output Schema
export const IngestToDatasetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  blocksCreated: Schema.Number,
  failed: Schema.Number,
  failures: Schema.optional(
    Schema.Array(
      Schema.Struct({
        error: Schema.String,
        timestamp: Schema.String,
      }),
    ),
  ),
  ingested: Schema.Number,
  processedBytes: Schema.Number,
  walLength: Schema.Number,
});
export type IngestToDatasetOutput = typeof IngestToDatasetOutput.Type;

// The operation
/**
 *
 * @param timestamp-field - The name of the field to use as the timestamp. If not specified, the timestamp will be the time the event was received by Axiom.
 * @param timestamp-format - The date-time format of the timestamp field. The reference time is `Mon Jan 2 15:04:05 -0700 MST 2006`, as specified in https://pkg.go.dev/time/?tab=doc#Parse
 * @param csv-delimiter - The delimiter to use when parsing CSV data. If not specified, the default delimiter is `,`.
 * @param X-Axiom-CSV-Fields - A list of optional comma separated fields to use for CSV ingestion. If not specified, the first line of the CSV will be used as the field names.
 * @param X-Axiom-Event-Labels - An optional JSON encoded object with additional labels to add to all events in the request
 */
export const ingestToDataset = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: IngestToDatasetInput,
  outputSchema: IngestToDatasetOutput,
  errors: [BadRequest, NotFound, UnprocessableEntity] as const,
}));
