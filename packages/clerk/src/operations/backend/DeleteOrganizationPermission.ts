import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const DeleteOrganizationPermissionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permission_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/organization_permissions/{permission_id}",
    }),
  );
export type DeleteOrganizationPermissionInput =
  typeof DeleteOrganizationPermissionInput.Type;

// Output Schema
export const DeleteOrganizationPermissionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String,
    id: Schema.optional(Schema.String),
    slug: Schema.optional(Schema.String),
    deleted: Schema.Boolean,
    external_id: Schema.optional(Schema.String),
  });
export type DeleteOrganizationPermissionOutput =
  typeof DeleteOrganizationPermissionOutput.Type;

// The operation
/**
 * Delete an organization permission
 *
 * Deletes an organization permission.
 * System permissions cannot be deleted.
 *
 * @param permission_id - The ID of the permission to delete
 */
export const DeleteOrganizationPermission =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteOrganizationPermissionInput,
    outputSchema: DeleteOrganizationPermissionOutput,
    errors: [Forbidden, NotFound] as const,
  }));
