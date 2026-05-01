import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const HealthIssuesRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/environments/{project_id}/health_issues/{id}/",
    }),
  );
export type HealthIssuesRetrieveInput = typeof HealthIssuesRetrieveInput.Type;

// Output Schema
export const HealthIssuesRetrieveOutput =
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
export type HealthIssuesRetrieveOutput = typeof HealthIssuesRetrieveOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this health issue.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const healthIssuesRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: HealthIssuesRetrieveInput,
    outputSchema: HealthIssuesRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
