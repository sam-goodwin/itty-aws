import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound, Conflict } from "../errors.ts";

// Input Schema
export interface AuthorizationResourcesControllerDeleteInput {
  resource_id: string;
  cascade_delete?: boolean;
}
export const AuthorizationResourcesControllerDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    resource_id: Schema.String.pipe(T.PathParam()),
    cascade_delete: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/authorization/resources/{resource_id}",
    }),
  ) as unknown as Schema.Codec<AuthorizationResourcesControllerDeleteInput>;

// Output Schema
export type AuthorizationResourcesControllerDeleteOutput = void;
export const AuthorizationResourcesControllerDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<AuthorizationResourcesControllerDeleteOutput>;

// The operation
/**
 * Delete an authorization resource
 *
 * Delete an authorization resource and all its descendants.
 *
 * @param resource_id - The ID of the authorization resource.
 * @param cascade_delete - If true, deletes all descendant resources and role assignments. If not set and the resource has children or assignments, the request will fail.
 */
export const AuthorizationResourcesControllerDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AuthorizationResourcesControllerDeleteInput,
    outputSchema: AuthorizationResourcesControllerDeleteOutput,
    errors: [BadRequest, Forbidden, NotFound, Conflict] as const,
  }));
