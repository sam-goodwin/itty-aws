import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface GroupsControllerGetInput {
  organizationId: string;
  groupId: string;
}
export const GroupsControllerGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organizationId: Schema.String.pipe(T.PathParam()),
    groupId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/organizations/{organizationId}/groups/{groupId}",
    }),
  ) as unknown as Schema.Codec<GroupsControllerGetInput>;

// Output Schema
export interface GroupsControllerGetOutput {
  object?: string;
  id?: string;
  organization_id?: string;
  name?: string;
  description?: string | null;
  created_at?: string;
  updated_at?: string;
}
export const GroupsControllerGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    organization_id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.NullOr(Schema.String)),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<GroupsControllerGetOutput>;

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
