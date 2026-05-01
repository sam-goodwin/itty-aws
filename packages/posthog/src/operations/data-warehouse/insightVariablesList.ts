import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const InsightVariablesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    page: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/insight_variables/",
    }),
  );
export type InsightVariablesListInput = typeof InsightVariablesListInput.Type;

// Output Schema
export const InsightVariablesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.Number,
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        name: Schema.String,
        type: Schema.Literals(["String", "Number", "Boolean", "List", "Date"]),
        default_value: Schema.optional(Schema.NullOr(Schema.Unknown)),
        created_by: Schema.NullOr(Schema.Number),
        created_at: Schema.String,
        code_name: Schema.NullOr(Schema.String),
        values: Schema.optional(Schema.NullOr(Schema.Unknown)),
      }),
    ),
  });
export type InsightVariablesListOutput = typeof InsightVariablesListOutput.Type;

// The operation
/**
 *
 * @param page - A page number within the paginated result set.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const insightVariablesList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: InsightVariablesListInput,
    outputSchema: InsightVariablesListOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
