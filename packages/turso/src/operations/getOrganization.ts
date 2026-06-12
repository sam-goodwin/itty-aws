import * as Schema from "effect/Schema";
import { OrganizationSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const GetOrganizationInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organizationSlug: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "GET", path: "/v1/organizations/{organizationSlug}" }),
);
export type GetOrganizationInput = typeof GetOrganizationInput.Type;

// Output Schema
export const GetOrganizationOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organization: Schema.optional(Schema.suspend(() => OrganizationSchema)),
});
export type GetOrganizationOutput = typeof GetOrganizationOutput.Type;

// The operation
/**
 * Retrieve Organization
 *
 * Retrieve details of a specific organization.
 *
 * @param organizationSlug - The slug of the organization or user account.
 */
export const getOrganization = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetOrganizationInput,
  outputSchema: GetOrganizationOutput,
  errors: [NotFound] as const,
}));
