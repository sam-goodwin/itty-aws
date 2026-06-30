import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface HealthIssuesListInput {
  project_id: string;
  dismissed?: boolean;
  kind?: string;
  limit?: number;
  offset?: number;
  severity?: string;
  status?: string;
}
export const HealthIssuesListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  dismissed: Schema.optional(Schema.Boolean),
  kind: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
  offset: Schema.optional(Schema.Number),
  severity: Schema.optional(Schema.String),
  status: Schema.optional(Schema.String),
}).pipe(
  T.Http({ method: "GET", path: "/api/projects/{project_id}/health_issues/" }),
) as unknown as Schema.Codec<HealthIssuesListInput>;

// Output Schema
export interface HealthIssuesListOutput {
  count?: number;
  next?: string | null;
  previous?: string | null;
  results?: {
    id?: string;
    kind?: string;
    severity?: "critical" | "warning" | "info";
    status?: "active" | "resolved";
    dismissed?: boolean;
    payload?: Record<string, unknown>;
    created_at?: string;
    updated_at?: string;
    resolved_at?: string | null;
  }[];
}
export const HealthIssuesListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    count: Schema.optional(Schema.Number),
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          kind: Schema.optional(Schema.String),
          severity: Schema.optional(
            Schema.Literals(["critical", "warning", "info"]),
          ),
          status: Schema.optional(Schema.Literals(["active", "resolved"])),
          dismissed: Schema.optional(Schema.Boolean),
          payload: Schema.optional(
            Schema.Record(Schema.String, Schema.Unknown),
          ),
          created_at: Schema.optional(Schema.String),
          updated_at: Schema.optional(Schema.String),
          resolved_at: Schema.optional(Schema.NullOr(Schema.String)),
        }),
      ),
    ),
  },
) as unknown as Schema.Codec<HealthIssuesListOutput>;

// The operation
/**
 * List health issues
 *
 * Lists health issues detected across all of this project's PostHog health checks (outdated SDKs, data warehouse sync failures, missing web analytics events, ingestion warnings, and more). Filter by status, severity, kind, or dismissed state.
 *
 * @param dismissed - Filter by dismissed state. Omit to include both dismissed and non-dismissed issues.
 * @param kind - Only return issues from this check kind (e.g. 'sdk_outdated').
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param severity - Only return issues with this severity. One of: 'critical', 'warning', 'info'.
 * @param status - Only return issues with this status. One of: 'active', 'resolved'.
 */
export const healthIssuesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: HealthIssuesListInput,
  outputSchema: HealthIssuesListOutput,
}));
