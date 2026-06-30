import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface ErrorTrackingQueryIssuesListCreateInput {
  project_id: string;
  dateRange?: { date_from?: string; date_to?: string | null };
  status?:
    | "archived"
    | "active"
    | "resolved"
    | "pending_release"
    | "suppressed"
    | "all";
  assignee?: { id: string | number | null; type: "user" | "role" } | null;
  filterTestAccounts?: boolean;
  searchQuery?: string;
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
  orderBy?: "last_seen" | "first_seen" | "occurrences" | "users" | "sessions";
  orderDirection?: "ASC" | "DESC";
  limit?: number;
  offset?: number;
  volumeResolution?: number;
  library?: string | string[];
  release?: string;
  fingerprint?: string | string[];
  user?: string;
  personId?: string;
  url?: string;
  filePath?: string;
}
export const ErrorTrackingQueryIssuesListCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    dateRange: Schema.optional(
      Schema.Struct({
        date_from: Schema.optional(Schema.String),
        date_to: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
    status: Schema.optional(
      Schema.Literals([
        "archived",
        "active",
        "resolved",
        "pending_release",
        "suppressed",
        "all",
      ]),
    ),
    assignee: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          id: Schema.NullOr(Schema.Union([Schema.String, Schema.Number])),
          type: Schema.Literals(["user", "role"]),
        }),
      ),
    ),
    filterTestAccounts: Schema.optional(Schema.Boolean),
    searchQuery: Schema.optional(Schema.String),
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
    orderBy: Schema.optional(
      Schema.Literals([
        "last_seen",
        "first_seen",
        "occurrences",
        "users",
        "sessions",
      ]),
    ),
    orderDirection: Schema.optional(Schema.Literals(["ASC", "DESC"])),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
    volumeResolution: Schema.optional(Schema.Number),
    library: Schema.optional(
      Schema.Union([Schema.String, Schema.Array(Schema.String)]),
    ),
    release: Schema.optional(Schema.String),
    fingerprint: Schema.optional(
      Schema.Union([Schema.String, Schema.Array(Schema.String)]),
    ),
    user: Schema.optional(Schema.String),
    personId: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
    filePath: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/error_tracking/query/issues/",
    }),
  ) as unknown as Schema.Codec<ErrorTrackingQueryIssuesListCreateInput>;

// Output Schema
export interface ErrorTrackingQueryIssuesListCreateOutput {
  results: {
    id: string;
    name?: string | null;
    description?: string | null;
    status?: string;
    first_seen?: string | null;
    last_seen?: string | null;
    library?: string | null;
    source?: string | null;
    assignee?: { id?: string | number | null; type?: string | null } | null;
    aggregations?: {
      occurrences?: number;
      users?: number;
      sessions?: number;
      volumeRange?: number[];
      volume_buckets?: { label: string; value?: number | null }[];
    } | null;
  }[];
  hasMore: boolean;
  limit: number;
  offset: number;
  nextOffset?: number;
}
export const ErrorTrackingQueryIssuesListCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    results: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        name: Schema.optional(Schema.NullOr(Schema.String)),
        description: Schema.optional(Schema.NullOr(Schema.String)),
        status: Schema.optional(Schema.String),
        first_seen: Schema.optional(Schema.NullOr(Schema.String)),
        last_seen: Schema.optional(Schema.NullOr(Schema.String)),
        library: Schema.optional(Schema.NullOr(Schema.String)),
        source: Schema.optional(Schema.NullOr(Schema.String)),
        assignee: Schema.optional(
          Schema.NullOr(
            Schema.Struct({
              id: Schema.optional(
                Schema.NullOr(Schema.Union([Schema.String, Schema.Number])),
              ),
              type: Schema.optional(Schema.NullOr(Schema.String)),
            }),
          ),
        ),
        aggregations: Schema.optional(
          Schema.NullOr(
            Schema.Struct({
              occurrences: Schema.optional(Schema.Number),
              users: Schema.optional(Schema.Number),
              sessions: Schema.optional(Schema.Number),
              volumeRange: Schema.optional(Schema.Array(Schema.Number)),
              volume_buckets: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    label: Schema.String,
                    value: Schema.optional(Schema.NullOr(Schema.Number)),
                  }),
                ),
              ),
            }),
          ),
        ),
      }),
    ),
    hasMore: Schema.Boolean,
    limit: Schema.Number,
    offset: Schema.Number,
    nextOffset: Schema.optional(Schema.Number),
  }) as unknown as Schema.Codec<ErrorTrackingQueryIssuesListCreateOutput>;

// The operation
/**
 * List compact error tracking issues
 *
 * List error tracking issues with typed filters and compact aggregate counts.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingQueryIssuesListCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingQueryIssuesListCreateInput,
    outputSchema: ErrorTrackingQueryIssuesListCreateOutput,
  }));
