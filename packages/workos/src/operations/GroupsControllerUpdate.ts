import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  BadRequest,
  Forbidden,
  NotFound,
  UnprocessableEntity,
} from "../errors.ts";

// Input Schema
export const GroupsControllerUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organizationId: Schema.String.pipe(T.PathParam()),
    groupId: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/organizations/{organizationId}/groups/{groupId}",
    }),
  );
export type GroupsControllerUpdateInput =
  typeof GroupsControllerUpdateInput.Type;

// Output Schema
export const GroupsControllerUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String,
    id: Schema.String,
    organization_id: Schema.String,
    name: Schema.String,
    description: Schema.NullOr(Schema.String),
    created_at: Schema.String,
    updated_at: Schema.String,
  });
export type GroupsControllerUpdateOutput =
  typeof GroupsControllerUpdateOutput.Type;

// The operation
/**
 * Update a group
 *
 * Update an existing group. Only the fields provided in the request body will be updated.
 *
 * @param organizationId - The ID of the organization.
 * @param groupId - The ID of the group.
 */
export const GroupsControllerUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GroupsControllerUpdateInput,
    outputSchema: GroupsControllerUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
  }),
);
