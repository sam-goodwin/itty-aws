import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export interface UserlandUserOrganizationMembershipsControllerDeleteInput {
  id: string;
}
export const UserlandUserOrganizationMembershipsControllerDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/user_management/organization_memberships/{id}",
    }),
  ) as unknown as Schema.Codec<UserlandUserOrganizationMembershipsControllerDeleteInput>;

// Output Schema
export type UserlandUserOrganizationMembershipsControllerDeleteOutput = void;
export const UserlandUserOrganizationMembershipsControllerDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<UserlandUserOrganizationMembershipsControllerDeleteOutput>;

// The operation
/**
 * Delete an organization membership
 *
 * Permanently deletes an existing organization membership. It cannot be undone.
 *
 * @param id - The unique ID of the organization membership.
 */
export const UserlandUserOrganizationMembershipsControllerDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UserlandUserOrganizationMembershipsControllerDeleteInput,
    outputSchema: UserlandUserOrganizationMembershipsControllerDeleteOutput,
    errors: [NotFound] as const,
  }));
