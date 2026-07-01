import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface InsightVariablesCreateInput {
  project_id: string;
  id?: string;
  name?: string;
  type?: "String" | "Number" | "Boolean" | "List" | "Date";
  default_value?: unknown;
  created_by?: number | null;
  created_at?: string;
  code_name?: string | null;
  values?: unknown;
}
export const InsightVariablesCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
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
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/insight_variables/",
    }),
  ) as unknown as Schema.Codec<InsightVariablesCreateInput>;

// Output Schema
export interface InsightVariablesCreateOutput {
  id?: string;
  name?: string;
  type?: "String" | "Number" | "Boolean" | "List" | "Date";
  default_value?: unknown;
  created_by?: number | null;
  created_at?: string;
  code_name?: string | null;
  values?: unknown;
}
export const InsightVariablesCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<InsightVariablesCreateOutput>;

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
