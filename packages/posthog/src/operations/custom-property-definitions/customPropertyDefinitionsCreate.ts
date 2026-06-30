import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const CustomPropertyDefinitionsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
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
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/custom_property_definitions/",
    }),
  );
export type CustomPropertyDefinitionsCreateInput =
  typeof CustomPropertyDefinitionsCreateInput.Type;

// Output Schema
export const CustomPropertyDefinitionsCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type CustomPropertyDefinitionsCreateOutput =
  typeof CustomPropertyDefinitionsCreateOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const customPropertyDefinitionsCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CustomPropertyDefinitionsCreateInput,
    outputSchema: CustomPropertyDefinitionsCreateOutput,
  }));
