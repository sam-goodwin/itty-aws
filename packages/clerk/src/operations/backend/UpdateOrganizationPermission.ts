import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import {
  BadRequest,
  Forbidden,
  NotFound,
  UnprocessableEntity,
} from "../../errors.ts";

// Input Schema
export const UpdateOrganizationPermissionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permission_id: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    key: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/organization_permissions/{permission_id}",
    }),
  );
export type UpdateOrganizationPermissionInput =
  typeof UpdateOrganizationPermissionInput.Type;

// Output Schema
export const UpdateOrganizationPermissionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.Literals(["permission"]),
    id: Schema.String,
    name: Schema.String,
    key: Schema.String,
    description: Schema.String,
    type: Schema.String,
    created_at: Schema.Number,
    updated_at: Schema.Number,
  });
export type UpdateOrganizationPermissionOutput =
  typeof UpdateOrganizationPermissionOutput.Type;

// The operation
/**
 * Update an organization permission
 *
 * Updates the properties of an existing organization permission.
 * System permissions cannot be updated.
 *
 * @param permission_id - The ID of the permission to update
 */
export const UpdateOrganizationPermission =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UpdateOrganizationPermissionInput,
    outputSchema: UpdateOrganizationPermissionOutput,
    errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
  }));
