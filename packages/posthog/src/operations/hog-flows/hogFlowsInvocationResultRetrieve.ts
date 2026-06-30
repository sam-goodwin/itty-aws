import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const HogFlowsInvocationResultRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    invocation_id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/hog_flows/{id}/invocation_results/{invocation_id}/",
    }),
  );
export type HogFlowsInvocationResultRetrieveInput =
  typeof HogFlowsInvocationResultRetrieveInput.Type;

// Output Schema
export const HogFlowsInvocationResultRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    invocation_globals: Schema.Record(Schema.String, Schema.Unknown),
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
  });
export type HogFlowsInvocationResultRetrieveOutput =
  typeof HogFlowsInvocationResultRetrieveOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this hog flow.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const hogFlowsInvocationResultRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: HogFlowsInvocationResultRetrieveInput,
    outputSchema: HogFlowsInvocationResultRetrieveOutput,
  }));
