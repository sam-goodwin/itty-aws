import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const HealthIssuesSummaryRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/environments/{project_id}/health_issues/summary/",
    }),
  );
export type HealthIssuesSummaryRetrieveInput =
  typeof HealthIssuesSummaryRetrieveInput.Type;

// Output Schema
export const HealthIssuesSummaryRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    severity: Schema.optional(Schema.Literals(["critical", "warning", "info"])),
    status: Schema.optional(Schema.Literals(["active", "resolved"])),
    dismissed: Schema.optional(Schema.Boolean),
    payload: Schema.optional(Schema.Unknown),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
    resolved_at: Schema.optional(Schema.NullOr(Schema.String)),
  });
export type HealthIssuesSummaryRetrieveOutput =
  typeof HealthIssuesSummaryRetrieveOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const healthIssuesSummaryRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: HealthIssuesSummaryRetrieveInput,
    outputSchema: HealthIssuesSummaryRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
