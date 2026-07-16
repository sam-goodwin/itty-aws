import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface EvaluationRunsCreateInput {
  project_id: string;
  evaluation_id?: string;
  target_event_id?: string;
  timestamp?: string;
  event?: string;
  distinct_id?: string | null;
}
export const EvaluationRunsCreateInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    evaluation_id: Schema.optional(Schema.String),
    target_event_id: Schema.optional(Schema.String),
    timestamp: Schema.optional(Schema.String),
    event: Schema.optional(Schema.String),
    distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/evaluation_runs/",
    }),
  ) as unknown as Schema.Codec<EvaluationRunsCreateInput>;

// Output Schema
export type EvaluationRunsCreateOutput = Record<string, unknown>;
export const EvaluationRunsCreateOutput =
  /*@__PURE__*/ Schema.Record(
    Schema.String,
    Schema.Unknown,
  ) as unknown as Schema.Codec<EvaluationRunsCreateOutput>;

// The operation
/**
 * Create a new evaluation run.
 * This endpoint validates the request and enqueues a Temporal workflow
 * to asynchronously execute the evaluation.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const evaluationRunsCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: EvaluationRunsCreateInput,
  outputSchema: EvaluationRunsCreateOutput,
}));
