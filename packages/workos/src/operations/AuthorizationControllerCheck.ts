import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const AuthorizationControllerCheckInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization_membership_id: Schema.String.pipe(T.PathParam()),
    permission_slug: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/authorization/organization_memberships/{organization_membership_id}/check",
    }),
  );
export type AuthorizationControllerCheckInput =
  typeof AuthorizationControllerCheckInput.Type;

// Output Schema
export const AuthorizationControllerCheckOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    authorized: Schema.optional(Schema.Boolean),
  });
export type AuthorizationControllerCheckOutput =
  typeof AuthorizationControllerCheckOutput.Type;

// The operation
/**
 * Check authorization
 *
 * Check if an organization membership has a specific permission on a resource. Supports identification by resource_id OR by resource_external_id + resource_type_slug.
 *
 * @param organization_membership_id - The ID of the organization membership to check.
 */
export const AuthorizationControllerCheck =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AuthorizationControllerCheckInput,
    outputSchema: AuthorizationControllerCheckOutput,
    errors: [Forbidden, NotFound, UnprocessableEntity] as const,
  }));
