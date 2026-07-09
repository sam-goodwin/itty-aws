import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const GetContactInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/contacts/{id}" }));
export type GetContactInput = typeof GetContactInput.Type;

// Output Schema
export const GetContactOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  email: Schema.optional(Schema.String),
  first_name: Schema.optional(Schema.String),
  last_name: Schema.optional(Schema.String),
  created_at: Schema.optional(Schema.String),
  unsubscribed: Schema.optional(Schema.Boolean),
  properties: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
});
export type GetContactOutput = typeof GetContactOutput.Type;

// The operation
/**
 * Retrieve a single contact by ID or email
 *
 * @param id - The Contact ID or email address.
 */
export const getContact = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetContactInput,
  outputSchema: GetContactOutput,
  errors: [NotFound] as const,
}));
