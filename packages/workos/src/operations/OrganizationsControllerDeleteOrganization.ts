import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const OrganizationsControllerDeleteOrganizationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "DELETE", path: "/organizations/{id}" }));
export type OrganizationsControllerDeleteOrganizationInput =
  typeof OrganizationsControllerDeleteOrganizationInput.Type;

// Output Schema
export const OrganizationsControllerDeleteOrganizationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type OrganizationsControllerDeleteOrganizationOutput =
  typeof OrganizationsControllerDeleteOrganizationOutput.Type;

// The operation
/**
 * Delete an Organization
 *
 * Permanently deletes an organization in the current environment. It cannot be undone.
 *
 * @param id - Unique identifier of the Organization.
 */
export const OrganizationsControllerDeleteOrganization =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: OrganizationsControllerDeleteOrganizationInput,
    outputSchema: OrganizationsControllerDeleteOrganizationOutput,
    errors: [Forbidden, NotFound] as const,
  }));
