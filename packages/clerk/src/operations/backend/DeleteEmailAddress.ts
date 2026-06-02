import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound, Conflict } from "../../errors.ts";

// Input Schema
export const DeleteEmailAddressInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    email_address_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "DELETE", path: "/email_addresses/{email_address_id}" }),
  );
export type DeleteEmailAddressInput = typeof DeleteEmailAddressInput.Type;

// Output Schema
export const DeleteEmailAddressOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String,
    id: Schema.optional(Schema.String),
    slug: Schema.optional(Schema.String),
    deleted: Schema.Boolean,
    external_id: Schema.optional(Schema.String),
  });
export type DeleteEmailAddressOutput = typeof DeleteEmailAddressOutput.Type;

// The operation
/**
 * Delete an email address
 *
 * Delete the email address with the given ID
 *
 * @param email_address_id - The ID of the email address to delete
 */
export const DeleteEmailAddress = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteEmailAddressInput,
  outputSchema: DeleteEmailAddressOutput,
  errors: [BadRequest, Forbidden, NotFound, Conflict] as const,
}));
