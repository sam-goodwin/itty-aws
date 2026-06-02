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
export const CreatePhoneNumberInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    user_id: Schema.String,
    phone_number: Schema.String,
    verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
    primary: Schema.optional(Schema.NullOr(Schema.Boolean)),
    reserved_for_second_factor: Schema.optional(Schema.NullOr(Schema.Boolean)),
  },
).pipe(T.Http({ method: "POST", path: "/phone_numbers" }));
export type CreatePhoneNumberInput = typeof CreatePhoneNumberInput.Type;

// Output Schema
export const CreatePhoneNumberOutput =
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
export type CreatePhoneNumberOutput = typeof CreatePhoneNumberOutput.Type;

// The operation
/**
 * Create a phone number
 *
 * Create a new phone number
 */
export const CreatePhoneNumber = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreatePhoneNumberInput,
  outputSchema: CreatePhoneNumberOutput,
  errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
}));
