import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const UpdateDomainInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  domain_id: Schema.String.pipe(T.PathParam()),
  open_tracking: Schema.optional(Schema.Boolean),
  click_tracking: Schema.optional(Schema.Boolean),
  tls: Schema.optional(Schema.String),
  capabilities: Schema.optional(
    Schema.Struct({
      sending: Schema.optional(Schema.Literals(["enabled", "disabled"])),
      receiving: Schema.optional(Schema.Literals(["enabled", "disabled"])),
    }),
  ),
  tracking_subdomain: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "PATCH", path: "/domains/{domain_id}" }));
export type UpdateDomainInput = typeof UpdateDomainInput.Type;

// Output Schema
export const UpdateDomainOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  object: Schema.optional(Schema.String),
});
export type UpdateDomainOutput = typeof UpdateDomainOutput.Type;

// The operation
/**
 * Update an existing domain
 *
 * @param domain_id - The ID of the domain.
 */
export const updateDomain = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateDomainInput,
  outputSchema: UpdateDomainOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
