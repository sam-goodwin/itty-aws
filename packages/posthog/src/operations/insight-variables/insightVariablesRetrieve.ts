import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface InsightVariablesRetrieveInput {
  id: string;
  project_id: string;
}
export const InsightVariablesRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/insight_variables/{id}/",
    }),
  ) as unknown as Schema.Codec<InsightVariablesRetrieveInput>;

// Output Schema
export interface InsightVariablesRetrieveOutput {
  id?: string;
  name?: string;
  type?: "String" | "Number" | "Boolean" | "List" | "Date";
  default_value?: unknown;
  created_by?: number | null;
  created_at?: string;
  code_name?: string | null;
  values?: unknown;
}
export const InsightVariablesRetrieveOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(
      Schema.Literals(["String", "Number", "Boolean", "List", "Date"]),
    ),
    default_value: Schema.optional(Schema.Unknown),
    created_by: Schema.optional(Schema.NullOr(Schema.Number)),
    created_at: Schema.optional(Schema.String),
    code_name: Schema.optional(Schema.NullOr(Schema.String)),
    values: Schema.optional(Schema.Unknown),
  }) as unknown as Schema.Codec<InsightVariablesRetrieveOutput>;

// The operation
/**
 *
 * @param id - A UUID string identifying this insight variable.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const insightVariablesRetrieve = /*@__PURE__*/ API.make(() => ({
  inputSchema: InsightVariablesRetrieveInput,
  outputSchema: InsightVariablesRetrieveOutput,
  errors: [Forbidden, NotFound] as const,
}));
