import * as Schema from "effect/Schema";
import { EvaluationSchema } from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const EvaluationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  enabled: Schema.optional(Schema.Boolean),
  id__in: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
  offset: Schema.optional(Schema.Number),
  order_by: Schema.optional(Schema.String),
  search: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/api/environments/{project_id}/evaluations/",
  }),
);
export type EvaluationsListInput = typeof EvaluationsListInput.Type;

// Output Schema
export const EvaluationsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  count: Schema.optional(Schema.Number),
  next: Schema.optional(Schema.NullOr(Schema.String)),
  previous: Schema.optional(Schema.NullOr(Schema.String)),
  results: Schema.optional(
    Schema.Array(Schema.suspend(() => EvaluationSchema)),
  ),
});
export type EvaluationsListOutput = typeof EvaluationsListOutput.Type;

// The operation
/**
 *
 * @param enabled - Filter by enabled status
 * @param id__in - Multiple values may be separated by commas.
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param order_by - Ordering

* `created_at` - Created At
* `-created_at` - Created At (descending)
* `updated_at` - Updated At
* `-updated_at` - Updated At (descending)
* `name` - Name
* `-name` - Name (descending)
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param search - Search in name or description
 */
export const evaluationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: EvaluationsListInput,
  outputSchema: EvaluationsListOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
