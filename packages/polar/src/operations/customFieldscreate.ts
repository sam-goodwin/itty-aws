import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const CustomFieldscreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "POST", path: "/v1/custom-fields/" }),
  );
export type CustomFieldscreateInput = typeof CustomFieldscreateInput.Type;

// Output Schema
export const CustomFieldscreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type CustomFieldscreateOutput = typeof CustomFieldscreateOutput.Type;

// The operation
/**
 * Create Custom Field
 *
 * Create a custom field.
 * **Scopes**: `custom_fields:write`
 */
export const customFieldscreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CustomFieldscreateInput,
  outputSchema: CustomFieldscreateOutput,
  errors: [UnprocessableEntity] as const,
}));
