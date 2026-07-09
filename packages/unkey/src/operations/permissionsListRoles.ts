import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const PermissionsListRolesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    limit: Schema.optional(Schema.Number),
    cursor: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "POST", path: "/v2/permissions.listRoles" }));
export type PermissionsListRolesInput = typeof PermissionsListRolesInput.Type;

// Output Schema
export const PermissionsListRolesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    meta: Schema.Struct({
      requestId: Schema.String,
    }),
    data: Schema.Array(
      Schema.Struct({
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
    ),
    pagination: Schema.optional(
      Schema.Struct({
        cursor: Schema.optional(Schema.String),
        hasMore: Schema.Boolean,
      }),
    ),
  });
export type PermissionsListRolesOutput = typeof PermissionsListRolesOutput.Type;

// The operation
/**
 * List roles
 *
 * Retrieve all roles in your workspace including their assigned permissions.
 * Results are paginated and sorted by their id.
 * **Required Permissions**
 * Your root key must have the following permission:
 * - `rbac.*.read_role`
 */
export const permissionsListRoles = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PermissionsListRolesInput,
    outputSchema: PermissionsListRolesOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
