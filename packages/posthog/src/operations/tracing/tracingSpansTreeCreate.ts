import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface TracingSpansTreeCreateInput {
  project_id: string;
  query: {
    spanName: string;
    serviceName: string;
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
export const TracingSpansTreeCreateInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    query: Schema.Struct({
      spanName: Schema.String,
      serviceName: Schema.String,
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
      path: "/api/projects/{project_id}/tracing/spans/tree/",
    }),
  ) as unknown as Schema.Codec<TracingSpansTreeCreateInput>;

// Output Schema
export type TracingSpansTreeCreateOutput = void;
export const TracingSpansTreeCreateOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<TracingSpansTreeCreateOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const tracingSpansTreeCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: TracingSpansTreeCreateInput,
  outputSchema: TracingSpansTreeCreateOutput,
}));
