import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface LogsFacetValuesCreateInput {
  project_id: string;
  query: {
    facetField?: "severity_text" | "service_name" | null;
    facetResourceAttribute?: string | null;
    dateRange?: { date_from?: string | null; date_to?: string | null };
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
    facetSearch?: string;
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
export const LogsFacetValuesCreateInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    query: Schema.Struct({
      facetField: Schema.optional(
        Schema.NullOr(Schema.Literals(["severity_text", "service_name"])),
      ),
      facetResourceAttribute: Schema.optional(Schema.NullOr(Schema.String)),
      dateRange: Schema.optional(
        Schema.Struct({
          date_from: Schema.optional(Schema.NullOr(Schema.String)),
          date_to: Schema.optional(Schema.NullOr(Schema.String)),
        }),
      ),
      severityLevels: Schema.optional(
        Schema.Array(
          Schema.Literals(["trace", "debug", "info", "warn", "error", "fatal"]),
        ),
      ),
      serviceNames: Schema.optional(Schema.Array(Schema.String)),
      searchTerm: Schema.optional(Schema.String),
      facetSearch: Schema.optional(Schema.String),
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
      path: "/api/projects/{project_id}/logs/facet_values/",
    }),
  ) as unknown as Schema.Codec<LogsFacetValuesCreateInput>;

// Output Schema
export interface LogsFacetValuesCreateOutput {
  results: { value: string; count: number }[];
}
export const LogsFacetValuesCreateOutput =
  /*@__PURE__*/ Schema.Struct({
    results: Schema.Array(
      Schema.Struct({
        value: Schema.String,
        count: Schema.Number,
      }),
    ),
  }) as unknown as Schema.Codec<LogsFacetValuesCreateOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const logsFacetValuesCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: LogsFacetValuesCreateInput,
  outputSchema: LogsFacetValuesCreateOutput,
}));
