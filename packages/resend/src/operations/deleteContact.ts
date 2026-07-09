import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const DeleteContactInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "DELETE", path: "/contacts/{id}" }));
export type DeleteContactInput = typeof DeleteContactInput.Type;

// Output Schema
export const DeleteContactOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  deleted: Schema.optional(Schema.Boolean),
});
export type DeleteContactOutput = typeof DeleteContactOutput.Type;

// The operation
/**
 * Remove an existing contact by ID or email
 *
 * @param id - The Contact ID or email address.
 */
export const deleteContact = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteContactInput,
  outputSchema: DeleteContactOutput,
  errors: [NotFound] as const,
}));
