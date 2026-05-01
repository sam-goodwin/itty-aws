import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const HealthIssuesListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  limit: Schema.optional(Schema.Number),
  offset: Schema.optional(Schema.Number),
}).pipe(
  T.Http({
    method: "GET",
    path: "/api/environments/{project_id}/health_issues/",
  }),
);
export type HealthIssuesListInput = typeof HealthIssuesListInput.Type;

// Output Schema
export const HealthIssuesListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    count: Schema.Number,
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        kind: Schema.String,
        severity: Schema.Literals(["critical", "warning", "info"]),
        status: Schema.Literals(["active", "resolved"]),
        dismissed: Schema.optional(Schema.Boolean),
        payload: Schema.Unknown,
        created_at: Schema.String,
        updated_at: Schema.String,
        resolved_at: Schema.NullOr(Schema.String),
      }),
    ),
  },
);
export type HealthIssuesListOutput = typeof HealthIssuesListOutput.Type;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const healthIssuesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: HealthIssuesListInput,
  outputSchema: HealthIssuesListOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
