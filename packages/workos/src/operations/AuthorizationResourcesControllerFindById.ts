import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const AuthorizationResourcesControllerFindByIdInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/authorization/resources/{resource_id}" }),
  );
export type AuthorizationResourcesControllerFindByIdInput =
  typeof AuthorizationResourcesControllerFindByIdInput.Type;

// Output Schema
export const AuthorizationResourcesControllerFindByIdOutput =
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
export type AuthorizationResourcesControllerFindByIdOutput =
  typeof AuthorizationResourcesControllerFindByIdOutput.Type;

// The operation
/**
 * Get a resource
 *
 * Retrieve the details of an authorization resource by its ID.
 *
 * @param resource_id - The ID of the authorization resource.
 */
export const AuthorizationResourcesControllerFindById =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AuthorizationResourcesControllerFindByIdInput,
    outputSchema: AuthorizationResourcesControllerFindByIdOutput,
    errors: [Forbidden, NotFound, UnprocessableEntity] as const,
  }));
