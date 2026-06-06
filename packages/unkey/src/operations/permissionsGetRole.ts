import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const PermissionsGetRoleInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    role: Schema.String,
  }).pipe(T.Http({ method: "POST", path: "/v2/permissions.getRole" }));
export type PermissionsGetRoleInput = typeof PermissionsGetRoleInput.Type;

// Output Schema
export const PermissionsGetRoleOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    meta: Schema.Struct({
      requestId: Schema.String,
    }),
    data: Schema.Struct({
      id: Schema.String,
      name: Schema.String,
      description: Schema.optional(Schema.String),
      permissions: Schema.optional(
        Schema.Array(
          Schema.Struct({
            id: Schema.String,
            name: Schema.String,
            slug: Schema.String,
            description: Schema.optional(Schema.String),
          }),
        ),
      ),
    }),
  });
export type PermissionsGetRoleOutput = typeof PermissionsGetRoleOutput.Type;

// The operation
/**
 * Get role
 *
 * Retrieve details about a specific role including its assigned permissions.
 * **Required Permissions**
 * Your root key must have the following permission:
 * - `rbac.*.read_role`
 */
export const permissionsGetRole = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PermissionsGetRoleInput,
  outputSchema: PermissionsGetRoleOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
