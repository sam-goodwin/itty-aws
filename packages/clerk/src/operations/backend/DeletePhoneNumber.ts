import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const DeletePhoneNumberInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    phone_number_id: Schema.String.pipe(T.PathParam()),
  },
).pipe(T.Http({ method: "DELETE", path: "/phone_numbers/{phone_number_id}" }));
export type DeletePhoneNumberInput = typeof DeletePhoneNumberInput.Type;

// Output Schema
export const DeletePhoneNumberOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String,
    id: Schema.optional(Schema.String),
    slug: Schema.optional(Schema.String),
    deleted: Schema.Boolean,
    external_id: Schema.optional(Schema.String),
  });
export type DeletePhoneNumberOutput = typeof DeletePhoneNumberOutput.Type;

// The operation
/**
 * Delete a phone number
 *
 * Delete the phone number with the given ID
 *
 * @param phone_number_id - The ID of the phone number to delete
 */
export const DeletePhoneNumber = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeletePhoneNumberInput,
  outputSchema: DeletePhoneNumberOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
