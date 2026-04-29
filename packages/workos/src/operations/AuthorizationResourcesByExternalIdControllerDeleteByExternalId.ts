import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound, Conflict } from "../errors.ts";

// Input Schema
export const AuthorizationResourcesByExternalIdControllerDeleteByExternalIdInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization_id: Schema.String.pipe(T.PathParam()),
    resource_type_slug: Schema.String.pipe(T.PathParam()),
    external_id: Schema.String.pipe(T.PathParam()),
    cascade_delete: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/authorization/organizations/{organization_id}/resources/{resource_type_slug}/{external_id}",
    }),
  );
export type AuthorizationResourcesByExternalIdControllerDeleteByExternalIdInput =
  typeof AuthorizationResourcesByExternalIdControllerDeleteByExternalIdInput.Type;

// Output Schema
export const AuthorizationResourcesByExternalIdControllerDeleteByExternalIdOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AuthorizationResourcesByExternalIdControllerDeleteByExternalIdOutput =
  typeof AuthorizationResourcesByExternalIdControllerDeleteByExternalIdOutput.Type;

// The operation
/**
 * Delete an authorization resource by external ID
 *
 * Delete an authorization resource by organization, resource type, and external ID. This also deletes all descendant resources.
 *
 * @param organization_id - The ID of the organization that owns the resource.
 * @param resource_type_slug - The slug of the resource type.
 * @param external_id - An identifier you provide to reference the resource in your system.
 * @param cascade_delete - If true, deletes all descendant resources and role assignments. If not set and the resource has children or assignments, the request will fail.
 */
export const AuthorizationResourcesByExternalIdControllerDeleteByExternalId =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      AuthorizationResourcesByExternalIdControllerDeleteByExternalIdInput,
    outputSchema:
      AuthorizationResourcesByExternalIdControllerDeleteByExternalIdOutput,
    errors: [BadRequest, Forbidden, NotFound, Conflict] as const,
  }));
