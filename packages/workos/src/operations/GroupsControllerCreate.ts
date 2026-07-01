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
export interface GroupsControllerCreateInput {
  organizationId: string;
  name?: string;
  description?: string | null;
}
export const GroupsControllerCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organizationId: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({ method: "POST", path: "/organizations/{organizationId}/groups" }),
  ) as unknown as Schema.Codec<GroupsControllerCreateInput>;

// Output Schema
export interface GroupsControllerCreateOutput {
  object?: string;
  id?: string;
  organization_id?: string;
  name?: string;
  description?: string | null;
  created_at?: string;
  updated_at?: string;
}
export const GroupsControllerCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    organization_id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.NullOr(Schema.String)),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<GroupsControllerCreateOutput>;

// The operation
/**
 * Create a group
 *
 * Create a new group within an organization.
 *
 * @param organizationId - The ID of the organization.
 */
export const GroupsControllerCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GroupsControllerCreateInput,
    outputSchema: GroupsControllerCreateOutput,
    errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
  }),
);
