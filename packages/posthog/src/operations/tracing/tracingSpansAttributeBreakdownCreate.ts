import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface TracingSpansAttributeBreakdownCreateInput {
  project_id: string;
  query: {
    breakdownKey: string;
    breakdownType: "span_attribute" | "span_resource_attribute";
    orderBy?: "count" | "error_count";
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
export const TracingSpansAttributeBreakdownCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    query: Schema.Struct({
      breakdownKey: Schema.String,
      breakdownType: Schema.Literals([
        "span_attribute",
        "span_resource_attribute",
      ]),
      orderBy: Schema.optional(Schema.Literals(["count", "error_count"])),
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
      path: "/api/projects/{project_id}/tracing/spans/attribute-breakdown/",
    }),
  ) as unknown as Schema.Codec<TracingSpansAttributeBreakdownCreateInput>;

// Output Schema
export type TracingSpansAttributeBreakdownCreateOutput = void;
export const TracingSpansAttributeBreakdownCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<TracingSpansAttributeBreakdownCreateOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const tracingSpansAttributeBreakdownCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: TracingSpansAttributeBreakdownCreateInput,
    outputSchema: TracingSpansAttributeBreakdownCreateOutput,
  }));
