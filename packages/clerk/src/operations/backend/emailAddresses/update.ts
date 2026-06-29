import * as Schema from "effect/Schema";
import { API } from "../../../backend-client.ts";
import * as T from "../../../traits.ts";
import { BadRequest, Forbidden, NotFound, Conflict } from "../../../errors.ts";

// Input Schema
export const UpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  email_address_id: Schema.String.pipe(T.PathParam()),
  verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
  primary: Schema.optional(Schema.NullOr(Schema.Boolean)),
}).pipe(
  T.Http({ method: "PATCH", path: "/email_addresses/{email_address_id}" }),
);
export type UpdateInput = typeof UpdateInput.Type;

// Output Schema
export const UpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type UpdateOutput = typeof UpdateOutput.Type;

// The operation
/**
 * Update an email address
 *
 * Updates an email address.
 *
 * @param email_address_id - The ID of the email address to update
 */
export const update = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateInput,
  outputSchema: UpdateOutput,
  errors: [BadRequest, Forbidden, NotFound, Conflict] as const,
}));
