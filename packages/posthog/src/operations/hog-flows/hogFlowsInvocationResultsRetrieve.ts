import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const HogFlowsInvocationResultsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    after: Schema.optional(Schema.String),
    before: Schema.optional(Schema.String),
    distinct_id: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    status: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/hog_flows/{id}/invocation_results/",
    }),
  );
export type HogFlowsInvocationResultsRetrieveInput =
  typeof HogFlowsInvocationResultsRetrieveInput.Type;

// Output Schema
export const HogFlowsInvocationResultsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      invocation_id: Schema.String,
      status: Schema.String,
      error_kind: Schema.String,
      error_message: Schema.String,
      distinct_id: Schema.String,
      person_id: Schema.String,
      scheduled_at: Schema.String,
      started_at: Schema.NullOr(Schema.String),
      finished_at: Schema.NullOr(Schema.String),
      duration_ms: Schema.NullOr(Schema.Number),
      attempts: Schema.Number,
      is_retry: Schema.Boolean,
    }),
  );
export type HogFlowsInvocationResultsRetrieveOutput =
  typeof HogFlowsInvocationResultsRetrieveOutput.Type;

// The operation
/**
 *
 * @param after - Start of the time range, matched on scheduled time. Relative ('-7d', '-24h') or ISO 8601. Defaults to -7d — bounds the ClickHouse partition scan, so widen it explicitly for older runs.
 * @param before - End of the time range, matched on scheduled time. Same format as 'after'. Defaults to now.
 * @param distinct_id - Only return invocations triggered for this distinct_id (the person the run executed for).
 * @param id - A UUID string identifying this hog flow.
 * @param limit - Maximum number of invocations to return (1-500, default 50).
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param status - Comma-separated invocation statuses to include, e.g. 'failed' or 'success,failed'.
 */
export const hogFlowsInvocationResultsRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: HogFlowsInvocationResultsRetrieveInput,
    outputSchema: HogFlowsInvocationResultsRetrieveOutput,
  }));
