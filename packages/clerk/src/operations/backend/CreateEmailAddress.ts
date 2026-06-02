import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import {
  BadRequest,
  Forbidden,
  NotFound,
  Conflict,
  UnprocessableEntity,
} from "../../errors.ts";

// Input Schema
export const CreateEmailAddressInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    user_id: Schema.String,
    email_address: Schema.String,
    verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
    primary: Schema.optional(Schema.NullOr(Schema.Boolean)),
  }).pipe(T.Http({ method: "POST", path: "/email_addresses" }));
export type CreateEmailAddressInput = typeof CreateEmailAddressInput.Type;

// Output Schema
export const CreateEmailAddressOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    object: Schema.Literals(["email_address"]),
    email_address: Schema.String,
    reserved: Schema.Boolean,
    verification: Schema.Unknown,
    linked_to: Schema.Array(
      Schema.Struct({
        type: Schema.String,
        id: Schema.String,
      }),
    ),
    matches_sso_connection: Schema.optional(Schema.Boolean),
    created_at: Schema.Number,
    updated_at: Schema.Number,
  });
export type CreateEmailAddressOutput = typeof CreateEmailAddressOutput.Type;

// The operation
/**
 * Create an email address
 *
 * Create a new email address
 */
export const CreateEmailAddress = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateEmailAddressInput,
  outputSchema: CreateEmailAddressOutput,
  errors: [
    BadRequest,
    Forbidden,
    NotFound,
    Conflict,
    UnprocessableEntity,
  ] as const,
}));
