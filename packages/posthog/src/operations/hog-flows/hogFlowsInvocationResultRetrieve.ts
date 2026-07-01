import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface HogFlowsInvocationResultRetrieveInput {
  id: string;
  invocation_id: string;
  project_id: string;
}
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
  ) as unknown as Schema.Codec<HogFlowsInvocationResultRetrieveInput>;

// Output Schema
export interface HogFlowsInvocationResultRetrieveOutput {
  invocation_globals: Record<string, unknown>;
  invocation_id: string;
  status: string;
  error_kind: string;
  error_message: string;
  distinct_id: string;
  person_id: string;
  scheduled_at: string;
  started_at: string | null;
  finished_at: string | null;
  duration_ms: number | null;
  attempts: number;
  is_retry: boolean;
}
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
  }) as unknown as Schema.Codec<HogFlowsInvocationResultRetrieveOutput>;

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
