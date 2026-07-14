import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface TracingSpansTraceCreateInput {
  project_id: string;
  trace_id: string;
  dateRange?: { date_from?: string | null; date_to?: string | null };
  excludeAttributes?: boolean;
  offset?: number;
}
export const TracingSpansTraceCreateInput =
  /*@__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Codec<TracingSpansTraceCreateInput>;

// Output Schema
export type TracingSpansTraceCreateOutput = void;
export const TracingSpansTraceCreateOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<TracingSpansTraceCreateOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const tracingSpansTraceCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: TracingSpansTraceCreateInput,
  outputSchema: TracingSpansTraceCreateOutput,
}));
