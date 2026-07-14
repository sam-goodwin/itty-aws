import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface LogsCountRangesCreateInput {
  project_id: string;
  query: {
    dateRange?: { date_from?: string | null; date_to?: string | null };
    targetBuckets?: number;
    severityLevels?: (
      | "trace"
      | "debug"
      | "info"
      | "warn"
      | "error"
      | "fatal"
    )[];
    serviceNames?: string[];
    searchTerm?: string;
    filterGroup?: {
      key?: string;
      type?: "log" | "log_attribute" | "log_resource_attribute";
      operator?:
        | "exact"
        | "is_not"
        | "icontains"
        | "not_icontains"
        | "regex"
        | "not_regex"
        | "gt"
        | "lt"
        | "is_date_exact"
        | "is_date_before"
        | "is_date_after"
        | "is_set"
        | "is_not_set";
      value?: unknown;
    }[];
  };
}
export const LogsCountRangesCreateInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    query: Schema.Struct({
      dateRange: Schema.optional(
        Schema.Struct({
          date_from: Schema.optional(Schema.NullOr(Schema.String)),
          date_to: Schema.optional(Schema.NullOr(Schema.String)),
        }),
      ),
      targetBuckets: Schema.optional(Schema.Number),
      severityLevels: Schema.optional(
        Schema.Array(
          Schema.Literals(["trace", "debug", "info", "warn", "error", "fatal"]),
        ),
      ),
      serviceNames: Schema.optional(Schema.Array(Schema.String)),
      searchTerm: Schema.optional(Schema.String),
      filterGroup: Schema.optional(
        Schema.Array(
          Schema.Struct({
            key: Schema.optional(Schema.String),
            type: Schema.optional(
              Schema.Literals([
                "log",
                "log_attribute",
                "log_resource_attribute",
              ]),
            ),
            operator: Schema.optional(
              Schema.Literals([
                "exact",
                "is_not",
                "icontains",
                "not_icontains",
                "regex",
                "not_regex",
                "gt",
                "lt",
                "is_date_exact",
                "is_date_before",
                "is_date_after",
                "is_set",
                "is_not_set",
              ]),
            ),
            value: Schema.optional(Schema.Unknown),
          }),
        ),
      ),
    }),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/logs/count-ranges/",
    }),
  ) as unknown as Schema.Codec<LogsCountRangesCreateInput>;

// Output Schema
export interface LogsCountRangesCreateOutput {
  ranges: { date_from: string; date_to: string; count: number }[];
  interval: string;
}
export const LogsCountRangesCreateOutput =
  /*@__PURE__*/ Schema.Struct({
    ranges: Schema.Array(
      Schema.Struct({
        date_from: Schema.String,
        date_to: Schema.String,
        count: Schema.Number,
      }),
    ),
    interval: Schema.String,
  }) as unknown as Schema.Codec<LogsCountRangesCreateOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const logsCountRangesCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: LogsCountRangesCreateInput,
  outputSchema: LogsCountRangesCreateOutput,
}));
