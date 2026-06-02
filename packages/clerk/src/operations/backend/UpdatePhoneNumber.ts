import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const UpdatePhoneNumberInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    phone_number_id: Schema.String.pipe(T.PathParam()),
    verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
    primary: Schema.optional(Schema.NullOr(Schema.Boolean)),
    reserved_for_second_factor: Schema.optional(Schema.NullOr(Schema.Boolean)),
  },
).pipe(T.Http({ method: "PATCH", path: "/phone_numbers/{phone_number_id}" }));
export type UpdatePhoneNumberInput = typeof UpdatePhoneNumberInput.Type;

// Output Schema
export const UpdatePhoneNumberOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    object: Schema.Literals(["phone_number"]),
    phone_number: Schema.String,
    reserved_for_second_factor: Schema.optional(Schema.Boolean),
    default_second_factor: Schema.optional(Schema.Boolean),
    reserved: Schema.Boolean,
    verification: Schema.Unknown,
    linked_to: Schema.Array(
      Schema.Struct({
        type: Schema.String,
        id: Schema.String,
      }),
    ),
    backup_codes: Schema.optional(Schema.NullOr(Schema.Array(Schema.String))),
    created_at: Schema.Number,
    updated_at: Schema.Number,
  });
export type UpdatePhoneNumberOutput = typeof UpdatePhoneNumberOutput.Type;

// The operation
/**
 * Update a phone number
 *
 * Updates a phone number
 *
 * @param phone_number_id - The ID of the phone number to update
 */
export const UpdatePhoneNumber = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdatePhoneNumberInput,
  outputSchema: UpdatePhoneNumberOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
