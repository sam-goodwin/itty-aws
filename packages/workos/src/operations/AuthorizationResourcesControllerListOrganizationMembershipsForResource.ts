import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  BadRequest,
  Forbidden,
  NotFound,
  UnprocessableEntity,
} from "../errors.ts";

// Input Schema
export const AuthorizationResourcesControllerListOrganizationMembershipsForResourceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource_id: Schema.String.pipe(T.PathParam()),
    before: Schema.optional(Schema.String),
    after: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    order: Schema.optional(Schema.Literals(["normal", "desc", "asc"])),
    permission_slug: Schema.String,
    assignment: Schema.optional(Schema.Literals(["direct", "indirect"])),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/authorization/resources/{resource_id}/organization_memberships",
    }),
  );
export type AuthorizationResourcesControllerListOrganizationMembershipsForResourceInput =
  typeof AuthorizationResourcesControllerListOrganizationMembershipsForResourceInput.Type;

// Output Schema
export const AuthorizationResourcesControllerListOrganizationMembershipsForResourceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String,
    data: Schema.Array(
      Schema.Struct({
        object: Schema.String,
        id: Schema.String,
        user_id: Schema.String,
        organization_id: Schema.String,
        status: Schema.Literals(["active", "inactive", "pending"]),
        directory_managed: Schema.Boolean,
        organization_name: Schema.optional(Schema.String),
        custom_attributes: Schema.optional(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
        created_at: Schema.String,
        updated_at: Schema.String,
      }),
    ),
    list_metadata: Schema.Struct({
      before: Schema.NullOr(Schema.String),
      after: Schema.NullOr(Schema.String),
    }),
  });
export type AuthorizationResourcesControllerListOrganizationMembershipsForResourceOutput =
  typeof AuthorizationResourcesControllerListOrganizationMembershipsForResourceOutput.Type;

// The operation
/**
 * List organization memberships for resource
 *
 * Returns all organization memberships that have a specific permission on a resource instance. This is useful for answering "Who can access this resource?".
 *
 * @param resource_id - The ID of the authorization resource.
 * @param before - An object ID that defines your place in the list. When the ID is not present, you are at the end of the list. For example, if you make a list request and receive 100 objects, ending with `"obj_123"`, your subsequent call can include `before="obj_123"` to fetch a new batch of objects before `"obj_123"`.
 * @param after - An object ID that defines your place in the list. When the ID is not present, you are at the end of the list. For example, if you make a list request and receive 100 objects, ending with `"obj_123"`, your subsequent call can include `after="obj_123"` to fetch a new batch of objects after `"obj_123"`.
 * @param limit - Upper limit on the number of objects to return, between `1` and `100`.
 * @param order - Order the results by the creation time. Supported values are `"asc"` (ascending), `"desc"` (descending), and `"normal"` (descending with reversed cursor semantics where `before` fetches older records and `after` fetches newer records). Defaults to descending.
 * @param permission_slug - The permission slug to filter by. Only users with this permission on the resource are returned.
 * @param assignment - Filter by assignment type. Use `direct` for direct assignments only, or `indirect` to include inherited assignments.
 */
export const AuthorizationResourcesControllerListOrganizationMembershipsForResource =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      AuthorizationResourcesControllerListOrganizationMembershipsForResourceInput,
    outputSchema:
      AuthorizationResourcesControllerListOrganizationMembershipsForResourceOutput,
    errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
  }));
