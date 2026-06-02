import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const DeleteDomainInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  domain_id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "DELETE", path: "/domains/{domain_id}" }));
export type DeleteDomainInput = typeof DeleteDomainInput.Type;

// Output Schema
export const DeleteDomainOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.String,
  id: Schema.optional(Schema.String),
  slug: Schema.optional(Schema.String),
  deleted: Schema.Boolean,
  external_id: Schema.optional(Schema.String),
});
export type DeleteDomainOutput = typeof DeleteDomainOutput.Type;

// The operation
/**
 * Delete a satellite domain
 *
 * Deletes a satellite domain for the instance.
 * It is currently not possible to delete the instance's primary domain.
 *
 * @param domain_id - The ID of the domain that will be deleted. Must be a satellite domain.
 */
export const DeleteDomain = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteDomainInput,
  outputSchema: DeleteDomainOutput,
  errors: [Forbidden, NotFound] as const,
}));
