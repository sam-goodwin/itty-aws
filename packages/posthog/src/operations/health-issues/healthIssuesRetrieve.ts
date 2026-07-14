import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface HealthIssuesRetrieveInput {
  id: string;
  project_id: string;
}
export const HealthIssuesRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/health_issues/{id}/",
    }),
  ) as unknown as Schema.Codec<HealthIssuesRetrieveInput>;

// Output Schema
export interface HealthIssuesRetrieveOutput {
  id: string;
  kind: string;
  severity: "critical" | "warning" | "info";
  status: "active" | "resolved";
  dismissed?: boolean;
  payload: Record<string, unknown>;
  created_at: string;
  updated_at: string;
  resolved_at: string | null;
  title: string;
  summary: string;
  link: string;
  remediation: { human: string; agent: string } | null;
}
export const HealthIssuesRetrieveOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String,
    kind: Schema.String,
    severity: Schema.Literals(["critical", "warning", "info"]),
    status: Schema.Literals(["active", "resolved"]),
    dismissed: Schema.optional(Schema.Boolean),
    payload: Schema.Record(Schema.String, Schema.Unknown),
    created_at: Schema.String,
    updated_at: Schema.String,
    resolved_at: Schema.NullOr(Schema.String),
    title: Schema.String,
    summary: Schema.String,
    link: Schema.String,
    remediation: Schema.NullOr(
      Schema.Struct({
        human: Schema.String,
        agent: Schema.String,
      }),
    ),
  }) as unknown as Schema.Codec<HealthIssuesRetrieveOutput>;

// The operation
/**
 * Get a health issue
 *
 * Fetches a single health issue, enriched with the owning check's rendered explanation: a title, a one-line summary of what's wrong, a deep link to the relevant page, and remediation guidance for how to fix it.
 *
 * @param id - A UUID string identifying this health issue.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const healthIssuesRetrieve = /*@__PURE__*/ API.make(() => ({
  inputSchema: HealthIssuesRetrieveInput,
  outputSchema: HealthIssuesRetrieveOutput,
}));
