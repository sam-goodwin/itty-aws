import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const UserlandUserOrganizationMembershipsControllerDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/user_management/organization_memberships/{id}",
    }),
  );
export type UserlandUserOrganizationMembershipsControllerDeleteInput =
  typeof UserlandUserOrganizationMembershipsControllerDeleteInput.Type;

// Output Schema
export const UserlandUserOrganizationMembershipsControllerDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type UserlandUserOrganizationMembershipsControllerDeleteOutput =
  typeof UserlandUserOrganizationMembershipsControllerDeleteOutput.Type;

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
