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
export interface AuthorizationResourcesControllerUpdateInput {
  resource_id: string;
  name?: string;
  description?: string | null;
}
export const AuthorizationResourcesControllerUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    resource_id: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({ method: "PATCH", path: "/authorization/resources/{resource_id}" }),
  ) as unknown as Schema.Codec<AuthorizationResourcesControllerUpdateInput>;

// Output Schema
export interface AuthorizationResourcesControllerUpdateOutput {
  object: string;
  name: string;
  description: string | null;
  organization_id: string;
  parent_resource_id: string | null;
  id: string;
  external_id: string;
  resource_type_slug: string;
  created_at: string;
  updated_at: string;
}
export const AuthorizationResourcesControllerUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<AuthorizationResourcesControllerUpdateOutput>;

// The operation
/**
 * Update a resource
 *
 * Update an existing authorization resource.
 *
 * @param resource_id - The ID of the authorization resource.
 */
export const AuthorizationResourcesControllerUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AuthorizationResourcesControllerUpdateInput,
    outputSchema: AuthorizationResourcesControllerUpdateOutput,
    errors: [
      BadRequest,
      Forbidden,
      NotFound,
      Conflict,
      UnprocessableEntity,
    ] as const,
  }));
