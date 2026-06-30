import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface AuthorizationResourcesByExternalIdControllerGetByExternalIdInput {
  organization_id: string;
  resource_type_slug: string;
  external_id: string;
}
export const AuthorizationResourcesByExternalIdControllerGetByExternalIdInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization_id: Schema.String.pipe(T.PathParam()),
    resource_type_slug: Schema.String.pipe(T.PathParam()),
    external_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/authorization/organizations/{organization_id}/resources/{resource_type_slug}/{external_id}",
    }),
  ) as unknown as Schema.Codec<AuthorizationResourcesByExternalIdControllerGetByExternalIdInput>;

// Output Schema
export interface AuthorizationResourcesByExternalIdControllerGetByExternalIdOutput {
  object?: string;
  name?: string;
  description?: string | null;
  organization_id?: string;
  parent_resource_id?: string | null;
  id?: string;
  external_id?: string;
  resource_type_slug?: string;
  created_at?: string;
  updated_at?: string;
}
export const AuthorizationResourcesByExternalIdControllerGetByExternalIdOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.NullOr(Schema.String)),
    organization_id: Schema.optional(Schema.String),
    parent_resource_id: Schema.optional(Schema.NullOr(Schema.String)),
    id: Schema.optional(Schema.String),
    external_id: Schema.optional(Schema.String),
    resource_type_slug: Schema.optional(Schema.String),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AuthorizationResourcesByExternalIdControllerGetByExternalIdOutput>;

// The operation
/**
 * Get a resource by external ID
 *
 * Retrieve the details of an authorization resource by its external ID, organization, and resource type. This is useful when you only have the external ID from your system and need to fetch the full resource details.
 *
 * @param organization_id - The ID of the organization that owns the resource.
 * @param resource_type_slug - The slug of the resource type.
 * @param external_id - An identifier you provide to reference the resource in your system.
 */
export const AuthorizationResourcesByExternalIdControllerGetByExternalId =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      AuthorizationResourcesByExternalIdControllerGetByExternalIdInput,
    outputSchema:
      AuthorizationResourcesByExternalIdControllerGetByExternalIdOutput,
    errors: [Forbidden, NotFound] as const,
  }));
