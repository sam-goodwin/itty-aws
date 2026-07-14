import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface CustomPropertyDefinitionsPartialUpdateInput {
  id: string;
  project_id: string;
  name?: string;
  description?: string | null;
  display_type?:
    | "text"
    | "number"
    | "currency"
    | "percent"
    | "date"
    | "datetime"
    | "boolean";
  is_big_number?: boolean;
  created_at?: string;
  created_by?: number | null;
  updated_at?: string | null;
}
export const CustomPropertyDefinitionsPartialUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.NullOr(Schema.String)),
    display_type: Schema.optional(
      Schema.Literals([
        "text",
        "number",
        "currency",
        "percent",
        "date",
        "datetime",
        "boolean",
      ]),
    ),
    is_big_number: Schema.optional(Schema.Boolean),
    created_at: Schema.optional(Schema.String),
    created_by: Schema.optional(Schema.NullOr(Schema.Number)),
    updated_at: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/projects/{project_id}/custom_property_definitions/{id}/",
    }),
  ) as unknown as Schema.Codec<CustomPropertyDefinitionsPartialUpdateInput>;

// Output Schema
export interface CustomPropertyDefinitionsPartialUpdateOutput {
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
}
export const CustomPropertyDefinitionsPartialUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<CustomPropertyDefinitionsPartialUpdateOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const customPropertyDefinitionsPartialUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CustomPropertyDefinitionsPartialUpdateInput,
    outputSchema: CustomPropertyDefinitionsPartialUpdateOutput,
  }));
