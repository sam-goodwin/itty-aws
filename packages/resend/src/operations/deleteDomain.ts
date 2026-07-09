import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const DeleteDomainInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  domain_id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "DELETE", path: "/domains/{domain_id}" }));
export type DeleteDomainInput = typeof DeleteDomainInput.Type;

// Output Schema
export const DeleteDomainOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  deleted: Schema.optional(Schema.Boolean),
});
export type DeleteDomainOutput = typeof DeleteDomainOutput.Type;

// The operation
/**
 * Remove an existing domain
 *
 * @param domain_id - The ID of the domain.
 */
export const deleteDomain = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteDomainInput,
  outputSchema: DeleteDomainOutput,
  errors: [NotFound] as const,
}));
