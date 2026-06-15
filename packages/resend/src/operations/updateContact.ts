import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const UpdateContactInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  email: Schema.optional(Schema.String),
  first_name: Schema.optional(Schema.String),
  last_name: Schema.optional(Schema.String),
  unsubscribed: Schema.optional(Schema.Boolean),
  properties: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
}).pipe(T.Http({ method: "PATCH", path: "/contacts/{id}" }));
export type UpdateContactInput = typeof UpdateContactInput.Type;

// Output Schema
export const UpdateContactOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
});
export type UpdateContactOutput = typeof UpdateContactOutput.Type;

// The operation
/**
 * Update a single contact by ID or email
 *
 * @param id - The Contact ID or email address.
 */
export const updateContact = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateContactInput,
  outputSchema: UpdateContactOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
