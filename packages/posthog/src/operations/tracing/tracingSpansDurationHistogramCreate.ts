import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const TracingSpansDurationHistogramCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    query: Schema.Struct({
      dateRange: Schema.optional(
        Schema.Struct({
          date_from: Schema.optional(Schema.NullOr(Schema.String)),
          date_to: Schema.optional(Schema.NullOr(Schema.String)),
        }),
      ),
      serviceNames: Schema.optional(Schema.Array(Schema.String)),
      statusCodes: Schema.optional(Schema.Array(Schema.Number)),
      filterGroup: Schema.optional(
        Schema.Array(
          Schema.Struct({
            key: Schema.String,
            type: Schema.Literals([
              "span",
              "span_attribute",
              "span_resource_attribute",
            ]),
            operator: Schema.Literals([
              "exact",
              "is_not",
              "icontains",
              "not_icontains",
              "regex",
              "not_regex",
              "gt",
              "lt",
              "is_set",
              "is_not_set",
            ]),
            value: Schema.optional(Schema.Unknown),
          }),
        ),
      ),
    }),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/tracing/spans/duration-histogram/",
    }),
  );
export type TracingSpansDurationHistogramCreateInput =
  typeof TracingSpansDurationHistogramCreateInput.Type;

// Output Schema
export const TracingSpansDurationHistogramCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type TracingSpansDurationHistogramCreateOutput =
  typeof TracingSpansDurationHistogramCreateOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const tracingSpansDurationHistogramCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: TracingSpansDurationHistogramCreateInput,
    outputSchema: TracingSpansDurationHistogramCreateOutput,
  }));
