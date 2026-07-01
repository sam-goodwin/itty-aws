import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface AuthorizationRoleAssignmentsControllerListRoleAssignmentsForResourceByExternalIdInput {
  organization_id: string;
  resource_type_slug: string;
  external_id: string;
  before?: string;
  after?: string;
  limit?: number;
  order?: string;
  role_slug?: string;
}
export const AuthorizationRoleAssignmentsControllerListRoleAssignmentsForResourceByExternalIdInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization_id: Schema.String.pipe(T.PathParam()),
    resource_type_slug: Schema.String.pipe(T.PathParam()),
    external_id: Schema.String.pipe(T.PathParam()),
    before: Schema.optional(Schema.String),
    after: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    order: Schema.optional(Schema.String),
    role_slug: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/authorization/organizations/{organization_id}/resources/{resource_type_slug}/{external_id}/role_assignments",
    }),
  ) as unknown as Schema.Codec<AuthorizationRoleAssignmentsControllerListRoleAssignmentsForResourceByExternalIdInput>;

// Output Schema
export interface AuthorizationRoleAssignmentsControllerListRoleAssignmentsForResourceByExternalIdOutput {
  object: string;
  data: {
    object: string;
    id: string;
    organization_membership_id: string;
    role: { slug?: string };
    resource: { id: string; external_id: string; resource_type_slug: string };
    created_at: string;
    updated_at: string;
  }[];
  list_metadata: { before: string | null; after: string | null };
}
export const AuthorizationRoleAssignmentsControllerListRoleAssignmentsForResourceByExternalIdOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String,
    data: Schema.Array(
      Schema.Struct({
        object: Schema.String,
        id: Schema.String,
        organization_membership_id: Schema.String,
        role: Schema.Struct({
          slug: Schema.optional(Schema.String),
        }),
        resource: Schema.Struct({
          id: Schema.String,
          external_id: Schema.String,
          resource_type_slug: Schema.String,
        }),
        created_at: Schema.String,
        updated_at: Schema.String,
      }),
    ),
    list_metadata: Schema.Struct({
      before: Schema.NullOr(Schema.String),
      after: Schema.NullOr(Schema.String),
    }),
  }) as unknown as Schema.Codec<AuthorizationRoleAssignmentsControllerListRoleAssignmentsForResourceByExternalIdOutput>;

// The operation
/**
 * List role assignments for a resource by external ID
 *
 * List all role assignments granted on a resource, identified by its external ID. Each assignment includes the organization membership it was granted to.
 *
 * @param organization_id - The ID of the organization that owns the resource.
 * @param resource_type_slug - The slug of the resource type.
 * @param external_id - An identifier you provide to reference the resource in your system.
 * @param before - An object ID that defines your place in the list. When the ID is not present, you are at the end of the list. For example, if you make a list request and receive 100 objects, ending with `"obj_123"`, your subsequent call can include `before="obj_123"` to fetch a new batch of objects before `"obj_123"`.
 * @param after - An object ID that defines your place in the list. When the ID is not present, you are at the end of the list. For example, if you make a list request and receive 100 objects, ending with `"obj_123"`, your subsequent call can include `after="obj_123"` to fetch a new batch of objects after `"obj_123"`.
 * @param limit - Upper limit on the number of objects to return, between `1` and `100`.
 * @param order - Order the results by the creation time. Supported values are `"asc"` (ascending), `"desc"` (descending), and `"normal"` (descending with reversed cursor semantics where `before` fetches older records and `after` fetches newer records).
 * @param role_slug - Filter assignments by the slug of the role.
 */
export const AuthorizationRoleAssignmentsControllerListRoleAssignmentsForResourceByExternalId =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      AuthorizationRoleAssignmentsControllerListRoleAssignmentsForResourceByExternalIdInput,
    outputSchema:
      AuthorizationRoleAssignmentsControllerListRoleAssignmentsForResourceByExternalIdOutput,
    errors: [Forbidden, NotFound] as const,
  }));
