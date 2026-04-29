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
export const GroupsControllerCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organizationId: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
    description: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({ method: "POST", path: "/organizations/{organizationId}/groups" }),
  );
export type GroupsControllerCreateInput =
  typeof GroupsControllerCreateInput.Type;

// Output Schema
export const GroupsControllerCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String,
    id: Schema.String,
    organization_id: Schema.String,
    name: Schema.String,
    description: Schema.NullOr(Schema.String),
    created_at: Schema.String,
    updated_at: Schema.String,
  });
export type GroupsControllerCreateOutput =
  typeof GroupsControllerCreateOutput.Type;

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
