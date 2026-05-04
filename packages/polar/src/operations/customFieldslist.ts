import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const CustomFieldslistInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organization_id: Schema.optional(Schema.String),
  query: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  page: Schema.optional(Schema.Number),
  limit: Schema.optional(Schema.Number),
  sorting: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "GET", path: "/v1/custom-fields/" }));
export type CustomFieldslistInput = typeof CustomFieldslistInput.Type;

// Output Schema
export const CustomFieldslistOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    items: Schema.Array(Schema.Unknown),
    pagination: Schema.Struct({
      total_count: Schema.Number,
      max_page: Schema.Number,
    }),
  },
);
export type CustomFieldslistOutput = typeof CustomFieldslistOutput.Type;

// The operation
/**
 * List Custom Fields
 *
 * List custom fields.
 * **Scopes**: `custom_fields:read` `custom_fields:write`
 *
 * @param organization_id - Filter by organization ID.
 * @param query - Filter by custom field name or slug.
 * @param type - Filter by custom field type.
 * @param page - Page number, defaults to 1.
 * @param limit - Size of a page, defaults to 10. Maximum is 100.
 * @param sorting - Sorting criterion. Several criteria can be used simultaneously and will be applied in order. Add a minus sign `-` before the criteria name to sort by descending order.
 */
export const customFieldslist = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CustomFieldslistInput,
  outputSchema: CustomFieldslistOutput,
  errors: [UnprocessableEntity] as const,
}));
