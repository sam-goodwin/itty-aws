import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import { BadRequest, NotFound } from "../../errors.ts";

// Input Schema
export const DeleteOrganizationDomainInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization_id: Schema.String.pipe(T.PathParam()),
    domain_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/organizations/{organization_id}/domains/{domain_id}",
    }),
  );
export type DeleteOrganizationDomainInput =
  typeof DeleteOrganizationDomainInput.Type;

// Output Schema
export const DeleteOrganizationDomainOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String,
    id: Schema.optional(Schema.String),
    slug: Schema.optional(Schema.String),
    deleted: Schema.Boolean,
    external_id: Schema.optional(Schema.String),
  });
export type DeleteOrganizationDomainOutput =
  typeof DeleteOrganizationDomainOutput.Type;

// The operation
/**
 * Remove a domain from an organization.
 *
 * Removes the given domain from the organization.
 *
 * @param organization_id - The ID of the organization to which the domain belongs
 * @param domain_id - The ID of the domain
 */
export const DeleteOrganizationDomain = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeleteOrganizationDomainInput,
    outputSchema: DeleteOrganizationDomainOutput,
    errors: [BadRequest, NotFound] as const,
  }),
);
