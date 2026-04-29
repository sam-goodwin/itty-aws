import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GroupsControllerDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organizationId: Schema.String.pipe(T.PathParam()),
    groupId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/organizations/{organizationId}/groups/{groupId}",
    }),
  );
export type GroupsControllerDeleteInput =
  typeof GroupsControllerDeleteInput.Type;

// Output Schema
export const GroupsControllerDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type GroupsControllerDeleteOutput =
  typeof GroupsControllerDeleteOutput.Type;

// The operation
/**
 * Delete a group
 *
 * Delete a group from an organization.
 *
 * @param organizationId - The ID of the organization.
 * @param groupId - The ID of the group.
 */
export const GroupsControllerDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GroupsControllerDeleteInput,
    outputSchema: GroupsControllerDeleteOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
