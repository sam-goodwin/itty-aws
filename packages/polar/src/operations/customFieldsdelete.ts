import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface CustomFieldsdeleteInput {
  id: string;
}
export const CustomFieldsdeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "DELETE", path: "/v1/custom-fields/{id}" }),
  ) as unknown as Schema.Codec<CustomFieldsdeleteInput>;

// Output Schema
export type CustomFieldsdeleteOutput = void;
export const CustomFieldsdeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<CustomFieldsdeleteOutput>;

// The operation
/**
 * Delete Custom Field
 *
 * Delete a custom field.
 * **Scopes**: `custom_fields:write`
 *
 * @param id - The custom field ID.
 */
export const customFieldsdelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CustomFieldsdeleteInput,
  outputSchema: CustomFieldsdeleteOutput,
}));
