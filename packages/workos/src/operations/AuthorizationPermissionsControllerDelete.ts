import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface AuthorizationPermissionsControllerDeleteInput {
  slug: string;
}
export const AuthorizationPermissionsControllerDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    slug: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "DELETE", path: "/authorization/permissions/{slug}" }),
  ) as unknown as Schema.Codec<AuthorizationPermissionsControllerDeleteInput>;

// Output Schema
export type AuthorizationPermissionsControllerDeleteOutput = void;
export const AuthorizationPermissionsControllerDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<AuthorizationPermissionsControllerDeleteOutput>;

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
