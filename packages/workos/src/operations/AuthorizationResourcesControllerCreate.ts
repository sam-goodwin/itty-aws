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
export const AuthorizationResourcesControllerCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "POST", path: "/authorization/resources" }),
  );
export type AuthorizationResourcesControllerCreateInput =
  typeof AuthorizationResourcesControllerCreateInput.Type;

// Output Schema
export const AuthorizationResourcesControllerCreateOutput =
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
export type AuthorizationResourcesControllerCreateOutput =
  typeof AuthorizationResourcesControllerCreateOutput.Type;

// The operation
/**
 * Create an authorization resource
 *
 * Create a new authorization resource.
 */
export const AuthorizationResourcesControllerCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
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
