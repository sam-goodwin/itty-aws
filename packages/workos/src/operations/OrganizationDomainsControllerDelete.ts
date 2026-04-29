import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const OrganizationDomainsControllerDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "DELETE", path: "/organization_domains/{id}" }));
export type OrganizationDomainsControllerDeleteInput =
  typeof OrganizationDomainsControllerDeleteInput.Type;

// Output Schema
export const OrganizationDomainsControllerDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type OrganizationDomainsControllerDeleteOutput =
  typeof OrganizationDomainsControllerDeleteOutput.Type;

// The operation
/**
 * Delete an Organization Domain
 *
 * Permanently deletes an organization domain. It cannot be undone.
 *
 * @param id - Unique identifier of the organization domain.
 */
export const OrganizationDomainsControllerDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: OrganizationDomainsControllerDeleteInput,
    outputSchema: OrganizationDomainsControllerDeleteOutput,
    errors: [NotFound] as const,
  }));
