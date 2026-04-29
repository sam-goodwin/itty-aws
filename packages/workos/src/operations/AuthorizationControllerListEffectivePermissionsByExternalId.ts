import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const AuthorizationControllerListEffectivePermissionsByExternalIdInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization_membership_id: Schema.String.pipe(T.PathParam()),
    resource_type_slug: Schema.String.pipe(T.PathParam()),
    external_id: Schema.String.pipe(T.PathParam()),
    before: Schema.optional(Schema.String),
    after: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    order: Schema.optional(Schema.Literals(["normal", "desc", "asc"])),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/authorization/organization_memberships/{organization_membership_id}/resources/{resource_type_slug}/{external_id}/permissions",
    }),
  );
export type AuthorizationControllerListEffectivePermissionsByExternalIdInput =
  typeof AuthorizationControllerListEffectivePermissionsByExternalIdInput.Type;

// Output Schema
export const AuthorizationControllerListEffectivePermissionsByExternalIdOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String,
    data: Schema.Array(
      Schema.Struct({
        object: Schema.String,
        id: Schema.String,
        slug: Schema.String,
        name: Schema.String,
        description: Schema.NullOr(Schema.String),
        system: Schema.Boolean,
        resource_type_slug: Schema.String,
        created_at: Schema.String,
        updated_at: Schema.String,
      }),
    ),
    list_metadata: Schema.Struct({
      before: Schema.NullOr(Schema.String),
      after: Schema.NullOr(Schema.String),
    }),
  });
export type AuthorizationControllerListEffectivePermissionsByExternalIdOutput =
  typeof AuthorizationControllerListEffectivePermissionsByExternalIdOutput.Type;

// The operation
/**
 * List effective permissions for an organization membership on a resource by external ID
 *
 * Returns all permissions the organization membership effectively has on a resource identified by its external ID, including permissions inherited through roles assigned to ancestor resources.
 *
 * @param organization_membership_id - The ID of the organization membership.
 * @param resource_type_slug - The slug of the resource type.
 * @param external_id - An identifier you provide to reference the resource in your system.
 * @param before - An object ID that defines your place in the list. When the ID is not present, you are at the end of the list. For example, if you make a list request and receive 100 objects, ending with `"obj_123"`, your subsequent call can include `before="obj_123"` to fetch a new batch of objects before `"obj_123"`.
 * @param after - An object ID that defines your place in the list. When the ID is not present, you are at the end of the list. For example, if you make a list request and receive 100 objects, ending with `"obj_123"`, your subsequent call can include `after="obj_123"` to fetch a new batch of objects after `"obj_123"`.
 * @param limit - Upper limit on the number of objects to return, between `1` and `100`.
 * @param order - Order the results by the creation time. Supported values are `"asc"` (ascending), `"desc"` (descending), and `"normal"` (descending with reversed cursor semantics where `before` fetches older records and `after` fetches newer records). Defaults to descending.
 */
export const AuthorizationControllerListEffectivePermissionsByExternalId =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      AuthorizationControllerListEffectivePermissionsByExternalIdInput,
    outputSchema:
      AuthorizationControllerListEffectivePermissionsByExternalIdOutput,
    errors: [Forbidden, NotFound, UnprocessableEntity] as const,
  }));
