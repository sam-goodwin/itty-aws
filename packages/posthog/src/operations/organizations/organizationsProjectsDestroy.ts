import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface OrganizationsProjectsDestroyInput {
  id: number;
  organization_id: string;
}
export const OrganizationsProjectsDestroyInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    organization_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/organizations/{organization_id}/projects/{id}/",
    }),
  ) as unknown as Schema.Codec<OrganizationsProjectsDestroyInput>;

// Output Schema
export type OrganizationsProjectsDestroyOutput = void;
export const OrganizationsProjectsDestroyOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<OrganizationsProjectsDestroyOutput>;

// The operation
/**
 * Projects for the current organization.
 *
 * @param id - A unique value identifying this project.
 * @param organization_id - ID of the organization you're trying to access. To find the ID of the organization, make a call to /api/organizations/.
 */
export const organizationsProjectsDestroy =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: OrganizationsProjectsDestroyInput,
    outputSchema: OrganizationsProjectsDestroyOutput,
    errors: [Forbidden, NotFound] as const,
  }));
