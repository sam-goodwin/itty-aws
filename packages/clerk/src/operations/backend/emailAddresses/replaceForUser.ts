import * as Schema from "effect/Schema";
import { API } from "../../../backend-client.ts";
import * as T from "../../../traits.ts";
import {
  BadRequest,
  Forbidden,
  NotFound,
  UnprocessableEntity,
} from "../../../errors.ts";

// Input Schema
export const ReplaceForUserInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  user_id: Schema.String.pipe(T.PathParam()),
  email_address: Schema.String,
}).pipe(T.Http({ method: "PUT", path: "/users/{user_id}/email_address" }));
export type ReplaceForUserInput = typeof ReplaceForUserInput.Type;

// Output Schema
export const ReplaceForUserOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type ReplaceForUserOutput = typeof ReplaceForUserOutput.Type;

// The operation
/**
 * Replace a user's email address
 *
 * Replaces all of the user's email addresses with a single verified, primary email address.
 * The new email address is created with the admin verification strategy. Any existing email
 * addresses are deleted. If an existing email address is linked to a connected account, the
 * request is rejected; remove the connected account first.
 *
 * @param user_id - The ID of the user whose email address to replace
 */
export const replaceForUser = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ReplaceForUserInput,
  outputSchema: ReplaceForUserOutput,
  errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
}));
