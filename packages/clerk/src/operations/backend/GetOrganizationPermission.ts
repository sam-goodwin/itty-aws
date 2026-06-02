import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import { NotFound } from "../../errors.ts";

// Input Schema
export const GetOrganizationPermissionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permission_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/organization_permissions/{permission_id}",
    }),
  );
export type GetOrganizationPermissionInput =
  typeof GetOrganizationPermissionInput.Type;

// Output Schema
export const GetOrganizationPermissionOutput =
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
export type GetOrganizationPermissionOutput =
  typeof GetOrganizationPermissionOutput.Type;

// The operation
/**
 * Get an organization permission
 *
 * Retrieves the details of an organization permission.
 *
 * @param permission_id - The ID of the permission to retrieve
 */
export const GetOrganizationPermission = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetOrganizationPermissionInput,
    outputSchema: GetOrganizationPermissionOutput,
    errors: [NotFound] as const,
  }),
);
