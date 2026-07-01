import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface TracingSpansAggregateCreateInput {
  project_id: string;
  query: {
    dateRange?: { date_from?: string | null; date_to?: string | null };
    compareFilter?: { compare?: boolean; compare_to?: string | null };
    serviceNames?: string[];
    filterGroup?: {
      key: string;
      type: "span" | "span_attribute" | "span_resource_attribute";
      operator:
        | "exact"
        | "is_not"
        | "icontains"
        | "not_icontains"
        | "regex"
        | "not_regex"
        | "gt"
        | "lt"
        | "is_set"
        | "is_not_set";
      value?: unknown;
    }[];
  };
}
export const TracingSpansAggregateCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    query: Schema.Struct({
      dateRange: Schema.optional(
        Schema.Struct({
          date_from: Schema.optional(Schema.NullOr(Schema.String)),
          date_to: Schema.optional(Schema.NullOr(Schema.String)),
        }),
      ),
      compareFilter: Schema.optional(
        Schema.Struct({
          compare: Schema.optional(Schema.Boolean),
          compare_to: Schema.optional(Schema.NullOr(Schema.String)),
        }),
      ),
      serviceNames: Schema.optional(Schema.Array(Schema.String)),
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
      path: "/api/projects/{project_id}/tracing/spans/aggregate/",
    }),
  ) as unknown as Schema.Codec<TracingSpansAggregateCreateInput>;

// Output Schema
export type TracingSpansAggregateCreateOutput = void;
export const TracingSpansAggregateCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<TracingSpansAggregateCreateOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const tracingSpansAggregateCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: TracingSpansAggregateCreateInput,
    outputSchema: TracingSpansAggregateCreateOutput,
  }),
);
