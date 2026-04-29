import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GroupsControllerGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organizationId: Schema.String.pipe(T.PathParam()),
    groupId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/organizations/{organizationId}/groups/{groupId}",
    }),
  );
export type GroupsControllerGetInput = typeof GroupsControllerGetInput.Type;

// Output Schema
export const GroupsControllerGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String,
    id: Schema.String,
    organization_id: Schema.String,
    name: Schema.String,
    description: Schema.NullOr(Schema.String),
    created_at: Schema.String,
    updated_at: Schema.String,
  });
export type GroupsControllerGetOutput = typeof GroupsControllerGetOutput.Type;

// The operation
/**
 * Get a group
 *
 * Retrieve a group by its ID within an organization.
 *
 * @param organizationId - The ID of the organization.
 * @param groupId - The ID of the group.
 */
export const GroupsControllerGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GroupsControllerGetInput,
  outputSchema: GroupsControllerGetOutput,
  errors: [Forbidden, NotFound] as const,
}));
