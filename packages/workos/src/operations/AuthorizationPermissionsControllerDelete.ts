import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const AuthorizationPermissionsControllerDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    slug: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "DELETE", path: "/authorization/permissions/{slug}" }),
  );
export type AuthorizationPermissionsControllerDeleteInput =
  typeof AuthorizationPermissionsControllerDeleteInput.Type;

// Output Schema
export const AuthorizationPermissionsControllerDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AuthorizationPermissionsControllerDeleteOutput =
  typeof AuthorizationPermissionsControllerDeleteOutput.Type;

// The operation
/**
 * Delete a permission
 *
 * Delete an existing permission. System permissions cannot be deleted.
 *
 * @param slug - A unique key to reference the permission. Must be lowercase and contain only letters, numbers, hyphens, underscores, colons, periods, and asterisks.
 */
export const AuthorizationPermissionsControllerDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AuthorizationPermissionsControllerDeleteInput,
    outputSchema: AuthorizationPermissionsControllerDeleteOutput,
    errors: [Forbidden, NotFound] as const,
  }));
