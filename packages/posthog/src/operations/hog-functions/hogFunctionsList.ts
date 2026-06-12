import * as Schema from "effect/Schema";
import { HogFunctionMinimalSchema } from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const HogFunctionsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  created_at: Schema.optional(Schema.String),
  created_by: Schema.optional(Schema.Number),
  enabled: Schema.optional(Schema.Boolean),
  id: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
  offset: Schema.optional(Schema.Number),
  search: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  updated_at: Schema.optional(Schema.String),
}).pipe(
  T.Http({ method: "GET", path: "/api/projects/{project_id}/hog_functions/" }),
);
export type HogFunctionsListInput = typeof HogFunctionsListInput.Type;

// Output Schema
export const HogFunctionsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    count: Schema.optional(Schema.Number),
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.optional(
      Schema.Array(Schema.suspend(() => HogFunctionMinimalSchema)),
    ),
  },
);
export type HogFunctionsListOutput = typeof HogFunctionsListOutput.Type;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param search - A search term.
 * @param type - Multiple values may be separated by commas.
 */
export const hogFunctionsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: HogFunctionsListInput,
  outputSchema: HogFunctionsListOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
