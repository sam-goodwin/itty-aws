import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { BadRequest, Forbidden, NotFound } from "../../errors";

// Input Schema
export const EvaluationRunsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    evaluation_id: Schema.String,
    target_event_id: Schema.String,
    timestamp: Schema.String,
    event: Schema.optional(Schema.String),
    distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/environments/{project_id}/evaluation_runs/",
    }),
  );
export type EvaluationRunsCreateInput = typeof EvaluationRunsCreateInput.Type;

// Output Schema
export const EvaluationRunsCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Record(Schema.String, Schema.Unknown);
export type EvaluationRunsCreateOutput = typeof EvaluationRunsCreateOutput.Type;

// The operation
/**
 * Create a new evaluation run.
 * This endpoint validates the request and enqueues a Temporal workflow
 * to asynchronously execute the evaluation.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const evaluationRunsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: EvaluationRunsCreateInput,
    outputSchema: EvaluationRunsCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
