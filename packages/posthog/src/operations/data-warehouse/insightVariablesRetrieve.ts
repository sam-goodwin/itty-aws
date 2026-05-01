import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const InsightVariablesRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/insight_variables/{id}/",
    }),
  );
export type InsightVariablesRetrieveInput =
  typeof InsightVariablesRetrieveInput.Type;

// Output Schema
export const InsightVariablesRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    name: Schema.String,
    type: Schema.Literals(["String", "Number", "Boolean", "List", "Date"]),
    default_value: Schema.optional(Schema.NullOr(Schema.Unknown)),
    created_by: Schema.NullOr(Schema.Number),
    created_at: Schema.String,
    code_name: Schema.NullOr(Schema.String),
    values: Schema.optional(Schema.NullOr(Schema.Unknown)),
  });
export type InsightVariablesRetrieveOutput =
  typeof InsightVariablesRetrieveOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this insight variable.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const insightVariablesRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: InsightVariablesRetrieveInput,
    outputSchema: InsightVariablesRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
