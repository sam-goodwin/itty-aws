import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const GetEmailAddressInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  email_address_id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/email_addresses/{email_address_id}" }));
export type GetEmailAddressInput = typeof GetEmailAddressInput.Type;

// Output Schema
export const GetEmailAddressOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type GetEmailAddressOutput = typeof GetEmailAddressOutput.Type;

// The operation
/**
 * Retrieve an email address
 *
 * Returns the details of an email address.
 *
 * @param email_address_id - The ID of the email address to retrieve
 */
export const GetEmailAddress = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetEmailAddressInput,
  outputSchema: GetEmailAddressOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
