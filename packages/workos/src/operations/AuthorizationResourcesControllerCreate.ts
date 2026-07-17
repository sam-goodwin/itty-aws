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
export interface AuthorizationResourcesControllerCreateInput {
  external_id: string;
  name: string;
  description?: string | null;
  resource_type_slug: string;
  organization_id: string;
}
export const AuthorizationResourcesControllerCreateInput =
  /*@__PURE__*/ Schema.Struct({
    external_id: Schema.String,
    name: Schema.String,
    description: Schema.optional(Schema.NullOr(Schema.String)),
    resource_type_slug: Schema.String,
    organization_id: Schema.String,
  }).pipe(
    T.Http({ method: "POST", path: "/authorization/resources" }),
  ) as unknown as Schema.Codec<AuthorizationResourcesControllerCreateInput>;

// Output Schema
export interface AuthorizationResourcesControllerCreateOutput {
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
export const AuthorizationResourcesControllerCreateOutput =
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
  }) as unknown as Schema.Codec<AuthorizationResourcesControllerCreateOutput>;

// The operation
/**
 * Create an authorization resource
 *
 * Create a new authorization resource.
 */
export const AuthorizationResourcesControllerCreate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AuthorizationResourcesControllerCreateInput,
    outputSchema: AuthorizationResourcesControllerCreateOutput,
    errors: [
      BadRequest,
      Forbidden,
      NotFound,
      Conflict,
      UnprocessableEntity,
    ] as const,
  }));
