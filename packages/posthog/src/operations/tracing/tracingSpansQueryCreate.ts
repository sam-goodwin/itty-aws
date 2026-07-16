import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface TracingSpansQueryCreateInput {
  project_id: string;
  query: {
    dateRange?: { date_from?: string | null; date_to?: string | null };
    serviceNames?: string[];
    statusCodes?: number[];
    orderBy?: "timestamp" | "duration";
    orderDirection?: "ASC" | "DESC";
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
    traceId?: string;
    limit?: number;
    after?: string;
    offset?: number;
    rootSpans?: boolean;
    flatSpans?: boolean;
    prefetchSpans?: number;
    excludeAttributes?: boolean;
  };
}
export const TracingSpansQueryCreateInput =
  /*@__PURE__*/ Schema.Struct({
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
      orderBy: Schema.optional(Schema.Literals(["timestamp", "duration"])),
      orderDirection: Schema.optional(Schema.Literals(["ASC", "DESC"])),
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
      traceId: Schema.optional(Schema.String),
      limit: Schema.optional(Schema.Number),
      after: Schema.optional(Schema.String),
      offset: Schema.optional(Schema.Number),
      rootSpans: Schema.optional(Schema.Boolean),
      flatSpans: Schema.optional(Schema.Boolean),
      prefetchSpans: Schema.optional(Schema.Number),
      excludeAttributes: Schema.optional(Schema.Boolean),
    }),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/tracing/spans/query/",
    }),
  ) as unknown as Schema.Codec<TracingSpansQueryCreateInput>;

// Output Schema
export type TracingSpansQueryCreateOutput = void;
export const TracingSpansQueryCreateOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<TracingSpansQueryCreateOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const tracingSpansQueryCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: TracingSpansQueryCreateInput,
  outputSchema: TracingSpansQueryCreateOutput,
}));
