import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface CustomPropertyDefinitionsListInput {
  project_id: string;
  limit?: number;
  offset?: number;
}
export const CustomPropertyDefinitionsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/custom_property_definitions/",
    }),
  ) as unknown as Schema.Codec<CustomPropertyDefinitionsListInput>;

// Output Schema
export interface CustomPropertyDefinitionsListOutput {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: {
    id: string;
    name: string;
    description?: string | null;
    display_type:
      | "text"
      | "number"
      | "currency"
      | "percent"
      | "date"
      | "datetime"
      | "boolean";
    is_big_number?: boolean;
    created_at: string;
    created_by: number | null;
    updated_at: string | null;
  }[];
}
export const CustomPropertyDefinitionsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.Number,
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        name: Schema.String,
        description: Schema.optional(Schema.NullOr(Schema.String)),
        display_type: Schema.Literals([
          "text",
          "number",
          "currency",
          "percent",
          "date",
          "datetime",
          "boolean",
        ]),
        is_big_number: Schema.optional(Schema.Boolean),
        created_at: Schema.String,
        created_by: Schema.NullOr(Schema.Number),
        updated_at: Schema.NullOr(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<CustomPropertyDefinitionsListOutput>;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const customPropertyDefinitionsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CustomPropertyDefinitionsListInput,
    outputSchema: CustomPropertyDefinitionsListOutput,
  }));
