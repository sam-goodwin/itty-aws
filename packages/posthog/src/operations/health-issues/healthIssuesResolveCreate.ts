import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const HealthIssuesResolveCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    kind: Schema.String,
    severity: Schema.Literals(["critical", "warning", "info"]),
    status: Schema.Literals(["active", "resolved"]),
    dismissed: Schema.optional(Schema.Boolean),
    payload: Schema.Unknown,
    created_at: Schema.String,
    updated_at: Schema.String,
    resolved_at: Schema.NullOr(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/environments/{project_id}/health_issues/{id}/resolve/",
    }),
  );
export type HealthIssuesResolveCreateInput =
  typeof HealthIssuesResolveCreateInput.Type;

// Output Schema
export const HealthIssuesResolveCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    kind: Schema.String,
    severity: Schema.Literals(["critical", "warning", "info"]),
    status: Schema.Literals(["active", "resolved"]),
    dismissed: Schema.optional(Schema.Boolean),
    payload: Schema.Unknown,
    created_at: Schema.String,
    updated_at: Schema.String,
    resolved_at: Schema.NullOr(Schema.String),
  });
export type HealthIssuesResolveCreateOutput =
  typeof HealthIssuesResolveCreateOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this health issue.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const healthIssuesResolveCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: HealthIssuesResolveCreateInput,
    outputSchema: HealthIssuesResolveCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
