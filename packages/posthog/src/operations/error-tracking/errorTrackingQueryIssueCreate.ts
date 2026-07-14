import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { NotFound } from "../../errors.ts";

// Input Schema
export interface ErrorTrackingQueryIssueCreateInput {
  project_id: string;
  issueId: string;
  dateRange?: { date_from?: string; date_to?: string | null };
  filterTestAccounts?: boolean;
  volumeResolution?: number;
  includeSparkline?: boolean;
}
export const ErrorTrackingQueryIssueCreateInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    issueId: Schema.String,
    dateRange: Schema.optional(
      Schema.Struct({
        date_from: Schema.optional(Schema.String),
        date_to: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
    filterTestAccounts: Schema.optional(Schema.Boolean),
    volumeResolution: Schema.optional(Schema.Number),
    includeSparkline: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/error_tracking/query/issue/",
    }),
  ) as unknown as Schema.Codec<ErrorTrackingQueryIssueCreateInput>;

// Output Schema
export interface ErrorTrackingQueryIssueCreateOutput {
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
  function?: string | null;
  top_in_app_frame?: {
    function?: string;
    source?: string;
    line?: number;
    column?: number;
    in_app?: boolean;
  };
  latest_release?: {
    version?: string;
    project?: string;
    timestamp?: string;
    commit_id?: string;
    branch?: string;
    repo_name?: string;
  };
  impact?: { occurrences?: number; users?: number; sessions?: number };
  sparkline?: number[];
}
export const ErrorTrackingQueryIssueCreateOutput =
  /*@__PURE__*/ Schema.Struct({
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
    function: Schema.optional(Schema.NullOr(Schema.String)),
    top_in_app_frame: Schema.optional(
      Schema.Struct({
        function: Schema.optional(Schema.String),
        source: Schema.optional(Schema.String),
        line: Schema.optional(Schema.Number),
        column: Schema.optional(Schema.Number),
        in_app: Schema.optional(Schema.Boolean),
      }),
    ),
    latest_release: Schema.optional(
      Schema.Struct({
        version: Schema.optional(Schema.String),
        project: Schema.optional(Schema.String),
        timestamp: Schema.optional(Schema.String),
        commit_id: Schema.optional(Schema.String),
        branch: Schema.optional(Schema.String),
        repo_name: Schema.optional(Schema.String),
      }),
    ),
    impact: Schema.optional(
      Schema.Struct({
        occurrences: Schema.optional(Schema.Number),
        users: Schema.optional(Schema.Number),
        sessions: Schema.optional(Schema.Number),
      }),
    ),
    sparkline: Schema.optional(Schema.Array(Schema.Number)),
  }) as unknown as Schema.Codec<ErrorTrackingQueryIssueCreateOutput>;

// The operation
/**
 * Get compact error tracking issue details
 *
 * Fetch one error tracking issue with impact counts, top in_app frame, latest release, and optional sparkline.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingQueryIssueCreate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingQueryIssueCreateInput,
    outputSchema: ErrorTrackingQueryIssueCreateOutput,
    errors: [NotFound] as const,
  }));
