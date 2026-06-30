import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const RoleExternalReferencesLookupRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization_id: Schema.String.pipe(T.PathParam()),
    provider: Schema.String,
    provider_organization_id: Schema.String,
    provider_role_id: Schema.optional(Schema.String),
    provider_role_slug: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/organizations/{organization_id}/role_external_references/lookup/",
    }),
  );
export type RoleExternalReferencesLookupRetrieveInput =
  typeof RoleExternalReferencesLookupRetrieveInput.Type;

// Output Schema
export const RoleExternalReferencesLookupRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reference: Schema.optional(Schema.Unknown),
  });
export type RoleExternalReferencesLookupRetrieveOutput =
  typeof RoleExternalReferencesLookupRetrieveOutput.Type;

// The operation
/**
 *
 * @param organization_id - ID of the organization you're trying to access. To find the ID of the organization, make a call to /api/organizations/.
 * @param provider - Integration kind (e.g., github, linear, jira, slack).
 * @param provider_organization_id - Provider organization/workspace/site identifier.
 * @param provider_role_id - Stable provider role identifier.
 * @param provider_role_slug - Human-friendly provider role identifier.
 */
export const roleExternalReferencesLookupRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RoleExternalReferencesLookupRetrieveInput,
    outputSchema: RoleExternalReferencesLookupRetrieveOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
