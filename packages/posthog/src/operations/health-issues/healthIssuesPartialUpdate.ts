import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface HealthIssuesPartialUpdateInput {
  id: string;
  project_id: string;
  kind?: string;
  severity?: "critical" | "warning" | "info";
  status?: "active" | "resolved";
  dismissed?: boolean;
  payload?: Record<string, unknown>;
  created_at?: string;
  updated_at?: string;
  resolved_at?: string | null;
}
export const HealthIssuesPartialUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    kind: Schema.optional(Schema.String),
    severity: Schema.optional(Schema.Literals(["critical", "warning", "info"])),
    status: Schema.optional(Schema.Literals(["active", "resolved"])),
    dismissed: Schema.optional(Schema.Boolean),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
    resolved_at: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/projects/{project_id}/health_issues/{id}/",
    }),
  ) as unknown as Schema.Codec<HealthIssuesPartialUpdateInput>;

// Output Schema
export interface HealthIssuesPartialUpdateOutput {
  id?: string;
  kind?: string;
  severity?: "critical" | "warning" | "info";
  status?: "active" | "resolved";
  dismissed?: boolean;
  payload?: Record<string, unknown>;
  created_at?: string;
  updated_at?: string;
  resolved_at?: string | null;
}
export const HealthIssuesPartialUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    severity: Schema.optional(Schema.Literals(["critical", "warning", "info"])),
    status: Schema.optional(Schema.Literals(["active", "resolved"])),
    dismissed: Schema.optional(Schema.Boolean),
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
    resolved_at: Schema.optional(Schema.NullOr(Schema.String)),
  }) as unknown as Schema.Codec<HealthIssuesPartialUpdateOutput>;

// The operation
/**
 *
 * @param id - A UUID string identifying this health issue.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const healthIssuesPartialUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: HealthIssuesPartialUpdateInput,
  outputSchema: HealthIssuesPartialUpdateOutput,
}));
