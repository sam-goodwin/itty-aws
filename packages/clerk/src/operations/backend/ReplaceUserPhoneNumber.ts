import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import {
  BadRequest,
  Forbidden,
  NotFound,
  UnprocessableEntity,
} from "../../errors.ts";

// Input Schema
export const ReplaceUserPhoneNumberInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    user_id: Schema.String.pipe(T.PathParam()),
    phone_number: Schema.String,
  }).pipe(T.Http({ method: "PUT", path: "/users/{user_id}/phone_number" }));
export type ReplaceUserPhoneNumberInput =
  typeof ReplaceUserPhoneNumberInput.Type;

// Output Schema
export const ReplaceUserPhoneNumberOutput =
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
export type ReplaceUserPhoneNumberOutput =
  typeof ReplaceUserPhoneNumberOutput.Type;

// The operation
/**
 * Replace a user's phone number
 *
 * Replaces all of the user's phone numbers with a single verified, primary phone number.
 * The new phone number is created with the admin verification strategy and is not reserved
 * for second factor. Any existing phone numbers are deleted; replacing a phone number that is
 * reserved for second factor disables the user's MFA.
 *
 * @param user_id - The ID of the user whose phone number to replace
 */
export const ReplaceUserPhoneNumber = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ReplaceUserPhoneNumberInput,
    outputSchema: ReplaceUserPhoneNumberOutput,
    errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
  }),
);
