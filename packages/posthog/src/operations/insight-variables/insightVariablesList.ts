import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface InsightVariablesListInput {
  project_id: string;
  page?: number;
}
export const InsightVariablesListInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    page: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/insight_variables/",
    }),
  ) as unknown as Schema.Codec<InsightVariablesListInput>;

// Output Schema
export interface InsightVariablesListOutput {
  count?: number;
  next?: string | null;
  previous?: string | null;
  results?: {
    id?: string;
    name?: string;
    type?: "String" | "Number" | "Boolean" | "List" | "Date";
    default_value?: unknown;
    created_by?: number | null;
    created_at?: string;
    code_name?: string | null;
    values?: unknown;
  }[];
}
export const InsightVariablesListOutput =
  /*@__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.optional(
      Schema.Array(
        Schema.Struct({
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
        }),
      ),
    ),
  }) as unknown as Schema.Codec<InsightVariablesListOutput>;

// The operation
/**
 *
 * @param page - A page number within the paginated result set.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const insightVariablesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: InsightVariablesListInput,
  outputSchema: InsightVariablesListOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
