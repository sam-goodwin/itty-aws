import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const InsightVariablesCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    id: Schema.String,
    name: Schema.String,
    type: Schema.Literals(["String", "Number", "Boolean", "List", "Date"]),
    default_value: Schema.optional(Schema.NullOr(Schema.Unknown)),
    created_by: Schema.NullOr(Schema.Number),
    created_at: Schema.String,
    code_name: Schema.NullOr(Schema.String),
    values: Schema.optional(Schema.NullOr(Schema.Unknown)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/insight_variables/",
    }),
  );
export type InsightVariablesCreateInput =
  typeof InsightVariablesCreateInput.Type;

// Output Schema
export const InsightVariablesCreateOutput =
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
export type InsightVariablesCreateOutput =
  typeof InsightVariablesCreateOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const insightVariablesCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: InsightVariablesCreateInput,
    outputSchema: InsightVariablesCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
