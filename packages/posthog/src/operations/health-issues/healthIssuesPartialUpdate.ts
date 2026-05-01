import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const HealthIssuesPartialUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    kind: Schema.optional(Schema.String),
    severity: Schema.optional(Schema.Literals(["critical", "warning", "info"])),
    status: Schema.optional(Schema.Literals(["active", "resolved"])),
    dismissed: Schema.optional(Schema.Boolean),
    payload: Schema.optional(Schema.Unknown),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
    resolved_at: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/environments/{project_id}/health_issues/{id}/",
    }),
  );
export type HealthIssuesPartialUpdateInput =
  typeof HealthIssuesPartialUpdateInput.Type;

// Output Schema
export const HealthIssuesPartialUpdateOutput =
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
export type HealthIssuesPartialUpdateOutput =
  typeof HealthIssuesPartialUpdateOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this health issue.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const healthIssuesPartialUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: HealthIssuesPartialUpdateInput,
    outputSchema: HealthIssuesPartialUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
