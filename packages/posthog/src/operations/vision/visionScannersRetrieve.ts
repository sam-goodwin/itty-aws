import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const VisionScannersRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/vision/scanners/{id}/",
    }),
  );
export type VisionScannersRetrieveInput =
  typeof VisionScannersRetrieveInput.Type;

// Output Schema
export const VisionScannersRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    name: Schema.String,
    description: Schema.optional(Schema.String),
    scanner_type: Schema.Literals([
      "monitor",
      "classifier",
      "scorer",
      "summarizer",
    ]),
    scanner_config: Schema.Unknown,
    query: Schema.optional(Schema.Unknown),
    sampling_rate: Schema.optional(Schema.Number),
    provider: Schema.optional(Schema.Literals(["google"])),
    model: Schema.Literals([
      "gemini-3-flash-preview",
      "gemini-3.1-flash-lite-preview",
    ]),
    enabled: Schema.optional(Schema.Boolean),
    emits_signals: Schema.optional(Schema.Boolean),
    scanner_version: Schema.Number,
    estimated_monthly_observations: Schema.NullOr(Schema.Number),
    last_swept_at: Schema.String,
    created_at: Schema.String,
    created_by: Schema.Unknown,
    updated_at: Schema.String,
  });
export type VisionScannersRetrieveOutput =
  typeof VisionScannersRetrieveOutput.Type;

// The operation
/**
 * CRUD for Replay Vision scanners.
 *
 * @param id - A UUID string identifying this replay scanner.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const visionScannersRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VisionScannersRetrieveInput,
    outputSchema: VisionScannersRetrieveOutput,
  }),
);
