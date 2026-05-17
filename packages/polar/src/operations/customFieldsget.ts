import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const CustomFieldsgetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/v1/custom-fields/{id}" }));
export type CustomFieldsgetInput = typeof CustomFieldsgetInput.Type;

// Output Schema
export const CustomFieldsgetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
  created_at: Schema.String,
  modified_at: Schema.NullOr(Schema.String),
  metadata: Schema.Record(Schema.String, Schema.Unknown),
  type: Schema.Literals(["text", "number", "date", "checkbox", "select"]),
  slug: Schema.String,
  name: Schema.String,
  organization_id: Schema.String,
  properties: Schema.Record(Schema.String, Schema.Unknown),
});
export type CustomFieldsgetOutput = typeof CustomFieldsgetOutput.Type;

// The operation
/**
 * Get Custom Field
 *
 * Get a custom field by ID.
 * **Scopes**: `custom_fields:read` `custom_fields:write`
 *
 * @param id - The custom field ID.
 */
export const customFieldsget = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CustomFieldsgetInput,
  outputSchema: CustomFieldsgetOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
