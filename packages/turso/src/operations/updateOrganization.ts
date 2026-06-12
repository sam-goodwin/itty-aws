import * as Schema from "effect/Schema";
import { OrganizationSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const UpdateOrganizationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organizationSlug: Schema.String.pipe(T.PathParam()),
    overages: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({ method: "PATCH", path: "/v1/organizations/{organizationSlug}" }),
  );
export type UpdateOrganizationInput = typeof UpdateOrganizationInput.Type;

// Output Schema
export const UpdateOrganizationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization: Schema.optional(Schema.suspend(() => OrganizationSchema)),
  });
export type UpdateOrganizationOutput = typeof UpdateOrganizationOutput.Type;

// The operation
/**
 * Update Organization
 *
 * Update an organization you own or are a member of.
 *
 * @param organizationSlug - The slug of the organization or user account.
 */
export const updateOrganization = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateOrganizationInput,
  outputSchema: UpdateOrganizationOutput,
}));
