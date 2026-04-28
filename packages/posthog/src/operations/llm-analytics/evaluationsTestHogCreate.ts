import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { BadRequest, Forbidden, NotFound } from "../../errors";

// Input Schema
export const EvaluationsTestHogCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    source: Schema.String,
    sample_count: Schema.optional(Schema.Number),
    allows_na: Schema.optional(Schema.Boolean),
    conditions: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/environments/{project_id}/evaluations/test_hog/",
    }),
  );
export type EvaluationsTestHogCreateInput =
  typeof EvaluationsTestHogCreateInput.Type;

// Output Schema
export const EvaluationsTestHogCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    results: Schema.Array(
      Schema.Struct({
        event_uuid: Schema.String,
        trace_id: Schema.optional(Schema.NullOr(Schema.String)),
        input_preview: Schema.String,
        output_preview: Schema.String,
        result: Schema.NullOr(Schema.Boolean),
        reasoning: Schema.NullOr(Schema.String),
        error: Schema.NullOr(Schema.String),
      }),
    ),
    message: Schema.optional(Schema.String),
  });
export type EvaluationsTestHogCreateOutput =
  typeof EvaluationsTestHogCreateOutput.Type;

// The operation
/**
 * Test Hog evaluation code against sample events without saving.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const evaluationsTestHogCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: EvaluationsTestHogCreateInput,
    outputSchema: EvaluationsTestHogCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
