import * as Schema from "effect/Schema";
import { API } from "../../../backend-client.ts";
import * as T from "../../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../../errors.ts";

// Input Schema
export const GetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  phone_number_id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/phone_numbers/{phone_number_id}" }));
export type GetInput = typeof GetInput.Type;

// Output Schema
export const GetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type GetOutput = typeof GetOutput.Type;

// The operation
/**
 * Retrieve a phone number
 *
 * Returns the details of a phone number
 *
 * @param phone_number_id - The ID of the phone number to retrieve
 */
export const get = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetInput,
  outputSchema: GetOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
