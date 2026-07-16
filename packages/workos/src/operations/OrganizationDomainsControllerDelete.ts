import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export interface OrganizationDomainsControllerDeleteInput {
  id: string;
}
export const OrganizationDomainsControllerDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "DELETE", path: "/organization_domains/{id}" }),
  ) as unknown as Schema.Codec<OrganizationDomainsControllerDeleteInput>;

// Output Schema
export type OrganizationDomainsControllerDeleteOutput = void;
export const OrganizationDomainsControllerDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<OrganizationDomainsControllerDeleteOutput>;

// The operation
/**
 * Delete an Organization Domain
 *
 * Permanently deletes an organization domain. It cannot be undone.
 *
 * @param id - Unique identifier of the organization domain.
 */
export const OrganizationDomainsControllerDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: OrganizationDomainsControllerDeleteInput,
    outputSchema: OrganizationDomainsControllerDeleteOutput,
    errors: [NotFound] as const,
  }));
