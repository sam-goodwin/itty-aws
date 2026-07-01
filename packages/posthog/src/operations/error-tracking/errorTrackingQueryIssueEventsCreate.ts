import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { NotFound } from "../../errors.ts";

// Input Schema
export interface ErrorTrackingQueryIssueEventsCreateInput {
  project_id: string;
  issueId: string;
  dateRange?: { date_from?: string; date_to?: string | null };
  filterTestAccounts?: boolean;
  filterGroup?: {
    key?: string;
    value?: string | number | boolean | (string | number)[];
    operator?:
      | "exact"
      | "is_not"
      | "icontains"
      | "not_icontains"
      | "regex"
      | "not_regex"
      | "gt"
      | "lt"
      | "gte"
      | "lte"
      | "is_set"
      | "is_not_set"
      | "is_date_exact"
      | "is_date_after"
      | "is_date_before"
      | "in"
      | "not_in"
      | ""
      | null;
    type?:
      | "event"
      | "event_metadata"
      | "feature"
      | "person"
      | "cohort"
      | "element"
      | "static-cohort"
      | "dynamic-cohort"
      | "precalculated-cohort"
      | "group"
      | "recording"
      | "log_entry"
      | "behavioral"
      | "session"
      | "hogql"
      | "data_warehouse"
      | "data_warehouse_person_property"
      | "error_tracking_issue"
      | "log"
      | "log_attribute"
      | "log_resource_attribute"
      | "span"
      | "span_attribute"
      | "span_resource_attribute"
      | "revenue_analytics"
      | "flag"
      | "workflow_variable"
      | "";
  }[];
  searchQuery?: string;
  orderDirection?: "ASC" | "DESC";
  limit?: number;
  offset?: number;
  verbosity?: "summary" | "stack" | "raw";
  onlyAppFrames?: boolean;
}
export const ErrorTrackingQueryIssueEventsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    issueId: Schema.String,
    dateRange: Schema.optional(
      Schema.Struct({
        date_from: Schema.optional(Schema.String),
        date_to: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
    filterTestAccounts: Schema.optional(Schema.Boolean),
    filterGroup: Schema.optional(
      Schema.Array(
        Schema.Struct({
          key: Schema.optional(Schema.String),
          value: Schema.optional(
            Schema.Union([
              Schema.String,
              Schema.Number,
              Schema.Boolean,
              Schema.Array(Schema.Union([Schema.String, Schema.Number])),
            ]),
          ),
          operator: Schema.optional(
            Schema.NullOr(
              Schema.Union([
                Schema.Literals([
                  "exact",
                  "is_not",
                  "icontains",
                  "not_icontains",
                  "regex",
                  "not_regex",
                  "gt",
                  "lt",
                  "gte",
                  "lte",
                  "is_set",
                  "is_not_set",
                  "is_date_exact",
                  "is_date_after",
                  "is_date_before",
                  "in",
                  "not_in",
                ]),
                Schema.Literals([""]),
              ]),
            ),
          ),
          type: Schema.optional(
            Schema.Union([
              Schema.Literals([
                "event",
                "event_metadata",
                "feature",
                "person",
                "cohort",
                "element",
                "static-cohort",
                "dynamic-cohort",
                "precalculated-cohort",
                "group",
                "recording",
                "log_entry",
                "behavioral",
                "session",
                "hogql",
                "data_warehouse",
                "data_warehouse_person_property",
                "error_tracking_issue",
                "log",
                "log_attribute",
                "log_resource_attribute",
                "span",
                "span_attribute",
                "span_resource_attribute",
                "revenue_analytics",
                "flag",
                "workflow_variable",
              ]),
              Schema.Literals([""]),
            ]),
          ),
        }),
      ),
    ),
    searchQuery: Schema.optional(Schema.String),
    orderDirection: Schema.optional(Schema.Literals(["ASC", "DESC"])),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
    verbosity: Schema.optional(Schema.Literals(["summary", "stack", "raw"])),
    onlyAppFrames: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/error_tracking/query/issue_events/",
    }),
  ) as unknown as Schema.Codec<ErrorTrackingQueryIssueEventsCreateInput>;

// Output Schema
export interface ErrorTrackingQueryIssueEventsCreateOutput {
  results: {
    uuid?: string;
    distinct_id?: string;
    timestamp?: string;
    properties?: Record<string, unknown>;
  }[];
  hasMore: boolean;
  limit: number;
  offset: number;
  nextOffset?: number;
}
export const ErrorTrackingQueryIssueEventsCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    results: Schema.Array(
      Schema.Struct({
        uuid: Schema.optional(Schema.String),
        distinct_id: Schema.optional(Schema.String),
        timestamp: Schema.optional(Schema.String),
        properties: Schema.optional(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
      }),
    ),
    hasMore: Schema.Boolean,
    limit: Schema.Number,
    offset: Schema.Number,
    nextOffset: Schema.optional(Schema.Number),
  }) as unknown as Schema.Codec<ErrorTrackingQueryIssueEventsCreateOutput>;

// The operation
/**
 * List sampled exception events for an error tracking issue
 *
 * Fetch sampled exception events, stack traces, browser/SDK context, URL, and $session_id values for one issue.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingQueryIssueEventsCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingQueryIssueEventsCreateInput,
    outputSchema: ErrorTrackingQueryIssueEventsCreateOutput,
    errors: [NotFound] as const,
  }));
