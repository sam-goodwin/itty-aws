import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
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
    assignee: Schema.optional(Schema.Unknown),
    filterTestAccounts: Schema.optional(Schema.Boolean),
    searchQuery: Schema.optional(Schema.String),
    filterGroup: Schema.optional(
      Schema.Array(
        Schema.Struct({
          key: Schema.optional(Schema.String),
          value: Schema.optional(Schema.Unknown),
          operator: Schema.optional(Schema.Unknown),
          type: Schema.optional(Schema.Unknown),
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
    library: Schema.optional(Schema.Unknown),
    release: Schema.optional(Schema.String),
    fingerprint: Schema.optional(Schema.Unknown),
    user: Schema.optional(Schema.String),
    personId: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
    filePath: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/error_tracking/query/issues/",
    }),
  );
export type ErrorTrackingQueryIssuesListCreateInput =
  typeof ErrorTrackingQueryIssuesListCreateInput.Type;

// Output Schema
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
        assignee: Schema.optional(Schema.Unknown),
        aggregations: Schema.optional(Schema.Unknown),
      }),
    ),
    hasMore: Schema.Boolean,
    limit: Schema.Number,
    offset: Schema.Number,
    nextOffset: Schema.optional(Schema.Number),
  });
export type ErrorTrackingQueryIssuesListCreateOutput =
  typeof ErrorTrackingQueryIssuesListCreateOutput.Type;

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
