import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const TracingSpansTraceCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    trace_id: Schema.String.pipe(T.PathParam()),
    dateRange: Schema.optional(
      Schema.Struct({
        date_from: Schema.optional(Schema.NullOr(Schema.String)),
        date_to: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
    excludeAttributes: Schema.optional(Schema.Boolean),
    offset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/tracing/spans/trace/{trace_id}/",
    }),
  );
export type TracingSpansTraceCreateInput =
  typeof TracingSpansTraceCreateInput.Type;

// Output Schema
export const TracingSpansTraceCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type TracingSpansTraceCreateOutput =
  typeof TracingSpansTraceCreateOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const tracingSpansTraceCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: TracingSpansTraceCreateInput,
    outputSchema: TracingSpansTraceCreateOutput,
  }),
);
