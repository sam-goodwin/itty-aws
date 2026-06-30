import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const GetV1BuildsByBuildIdLogsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    buildId: Schema.String.pipe(T.PathParam()),
    follow: Schema.optional(Schema.Literals(["true", "false"])),
    cursor: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "GET", path: "/v1/builds/{buildId}/logs" }));
export type GetV1BuildsByBuildIdLogsInput =
  typeof GetV1BuildsByBuildIdLogsInput.Type;

// Output Schema
export const GetV1BuildsByBuildIdLogsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type GetV1BuildsByBuildIdLogsOutput =
  typeof GetV1BuildsByBuildIdLogsOutput.Type;

// The operation
/**
 * Stream build logs
 *
 * ⚠️ Experimental endpoint: this API is in active development and may change at any time without notice. ⚠️
 * Streams the full build log for a build as newline-delimited JSON (`application/x-ndjson`). Each line is a JSON object discriminated by `type`: `log` (a build output line) or `terminal` (end-of-stream marker with a `cursor` for resumption). The default is a finite dump that ends once the stream is drained; pass `follow=true` to keep the connection open for an in-flight build, and `cursor` to resume from a prior terminal cursor.
 */
export const getV1BuildsByBuildIdLogs = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetV1BuildsByBuildIdLogsInput,
    outputSchema: GetV1BuildsByBuildIdLogsOutput,
    errors: [NotFound] as const,
  }),
);
