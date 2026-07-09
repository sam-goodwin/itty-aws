import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const CreateContactInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  email: Schema.String,
  first_name: Schema.optional(Schema.String),
  last_name: Schema.optional(Schema.String),
  unsubscribed: Schema.optional(Schema.Boolean),
  properties: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  segments: Schema.optional(Schema.Array(Schema.String)),
  topics: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        subscription: Schema.optional(Schema.Literals(["opt_in", "opt_out"])),
      }),
    ),
  ),
  audience_id: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "POST", path: "/contacts" }));
export type CreateContactInput = typeof CreateContactInput.Type;

// Output Schema
export const CreateContactOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
});
export type CreateContactOutput = typeof CreateContactOutput.Type;

// The operation
/**
 * Create a new contact
 */
export const createContact = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateContactInput,
  outputSchema: CreateContactOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
