import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  BadRequest,
  Forbidden,
  NotFound,
  Conflict,
  UnprocessableEntity,
} from "../errors.ts";

// Input Schema
export const AuthorizationResourcesByExternalIdControllerUpdateByExternalIdInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization_id: Schema.String.pipe(T.PathParam()),
    resource_type_slug: Schema.String.pipe(T.PathParam()),
    external_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/authorization/organizations/{organization_id}/resources/{resource_type_slug}/{external_id}",
    }),
  );
export type AuthorizationResourcesByExternalIdControllerUpdateByExternalIdInput =
  typeof AuthorizationResourcesByExternalIdControllerUpdateByExternalIdInput.Type;

// Output Schema
export const AuthorizationResourcesByExternalIdControllerUpdateByExternalIdOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String,
    name: Schema.String,
    description: Schema.NullOr(Schema.String),
    organization_id: Schema.String,
    parent_resource_id: Schema.NullOr(Schema.String),
    id: Schema.String,
    external_id: Schema.String,
    resource_type_slug: Schema.String,
    created_at: Schema.String,
    updated_at: Schema.String,
  });
export type AuthorizationResourcesByExternalIdControllerUpdateByExternalIdOutput =
  typeof AuthorizationResourcesByExternalIdControllerUpdateByExternalIdOutput.Type;

// The operation
/**
 * Update a resource by external ID
 *
 * Update an existing authorization resource using its external ID.
 *
 * @param organization_id - The ID of the organization that owns the resource.
 * @param resource_type_slug - The slug of the resource type.
 * @param external_id - An identifier you provide to reference the resource in your system.
 */
export const AuthorizationResourcesByExternalIdControllerUpdateByExternalId =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      AuthorizationResourcesByExternalIdControllerUpdateByExternalIdInput,
    outputSchema:
      AuthorizationResourcesByExternalIdControllerUpdateByExternalIdOutput,
    errors: [
      BadRequest,
      Forbidden,
      NotFound,
      Conflict,
      UnprocessableEntity,
    ] as const,
  }));
