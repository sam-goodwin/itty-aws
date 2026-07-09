import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export const PermissionsListPermissionsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cursor: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
  }).pipe(T.Http({ method: "POST", path: "/v2/permissions.listPermissions" }));
export type PermissionsListPermissionsInput =
  typeof PermissionsListPermissionsInput.Type;

// Output Schema
export const PermissionsListPermissionsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    meta: Schema.Struct({
      requestId: Schema.String,
    }),
    data: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        name: Schema.String,
        slug: Schema.String,
        description: Schema.optional(Schema.String),
      }),
    ),
    pagination: Schema.optional(
      Schema.Struct({
        cursor: Schema.optional(Schema.String),
        hasMore: Schema.Boolean,
      }),
    ),
  });
export type PermissionsListPermissionsOutput =
  typeof PermissionsListPermissionsOutput.Type;

// The operation
/**
 * List permissions
 *
 * Retrieve all permissions in your workspace.
 * Results are paginated and sorted by their id.
 * **Required Permissions**
 * Your root key must have the following permission:
 * - `rbac.*.read_permission`
 */
export const permissionsListPermissions = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PermissionsListPermissionsInput,
    outputSchema: PermissionsListPermissionsOutput,
    errors: [BadRequest, Forbidden] as const,
  }),
);
