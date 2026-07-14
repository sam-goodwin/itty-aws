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
export interface AuthorizationResourcesByExternalIdControllerListOrganizationMembershipsForResourceByExternalIdInput {
  organization_id: string;
  resource_type_slug: string;
  external_id: string;
  before?: string;
  after?: string;
  limit?: number;
  order?: string;
  permission_slug: string;
  assignment?: "direct" | "indirect";
}
export const AuthorizationResourcesByExternalIdControllerListOrganizationMembershipsForResourceByExternalIdInput =
  /*@__PURE__*/ Schema.Struct({
    organization_id: Schema.String.pipe(T.PathParam()),
    resource_type_slug: Schema.String.pipe(T.PathParam()),
    external_id: Schema.String.pipe(T.PathParam()),
    before: Schema.optional(Schema.String),
    after: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    order: Schema.optional(Schema.String),
    permission_slug: Schema.String,
    assignment: Schema.optional(Schema.Literals(["direct", "indirect"])),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/authorization/organizations/{organization_id}/resources/{resource_type_slug}/{external_id}/organization_memberships",
    }),
  ) as unknown as Schema.Codec<AuthorizationResourcesByExternalIdControllerListOrganizationMembershipsForResourceByExternalIdInput>;

// Output Schema
export interface AuthorizationResourcesByExternalIdControllerListOrganizationMembershipsForResourceByExternalIdOutput {
  object: string;
  data: ReadonlyArray<{
    object: string;
    id: string;
    user_id: string;
    organization_id: string;
    status: "active" | "inactive" | "pending";
    directory_managed: boolean;
    organization_name?: string;
    custom_attributes?: Record<string, unknown>;
    created_at: string;
    updated_at: string;
    user: {
      object?: string;
      id?: string;
      first_name?: string | null;
      last_name?: string | null;
      name?: string | null;
      profile_picture_url?: string | null;
      email?: string;
      email_verified?: boolean;
      external_id?: string | null;
      metadata?: Record<string, string>;
      last_sign_in_at?: string | null;
      locale?: string | null;
      created_at?: string;
      updated_at?: string;
    };
  }>;
  list_metadata: { before: string | null; after: string | null };
}
export const AuthorizationResourcesByExternalIdControllerListOrganizationMembershipsForResourceByExternalIdOutput =
  /*@__PURE__*/ Schema.Struct({
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
        user: Schema.Struct({
          object: Schema.optional(Schema.String),
          id: Schema.optional(Schema.String),
          first_name: Schema.optional(Schema.NullOr(Schema.String)),
          last_name: Schema.optional(Schema.NullOr(Schema.String)),
          name: Schema.optional(Schema.NullOr(Schema.String)),
          profile_picture_url: Schema.optional(Schema.NullOr(Schema.String)),
          email: Schema.optional(Schema.String),
          email_verified: Schema.optional(Schema.Boolean),
          external_id: Schema.optional(Schema.NullOr(Schema.String)),
          metadata: Schema.optional(
            Schema.Record(Schema.String, Schema.String),
          ),
          last_sign_in_at: Schema.optional(Schema.NullOr(Schema.String)),
          locale: Schema.optional(Schema.NullOr(Schema.String)),
          created_at: Schema.optional(Schema.String),
          updated_at: Schema.optional(Schema.String),
        }),
      }),
    ),
    list_metadata: Schema.Struct({
      before: Schema.NullOr(Schema.String),
      after: Schema.NullOr(Schema.String),
    }),
  }) as unknown as Schema.Codec<AuthorizationResourcesByExternalIdControllerListOrganizationMembershipsForResourceByExternalIdOutput>;

// The operation
/**
 * List memberships for a resource by external ID
 *
 * Returns all organization memberships that have a specific permission on a resource, using the resource's external ID. This is useful for answering "Who can access this resource?" when you only have the external ID.
 *
 * @param organization_id - The ID of the organization that owns the resource.
 * @param resource_type_slug - The slug of the resource type this resource belongs to.
 * @param external_id - An identifier you provide to reference the resource in your system.
 * @param before - An object ID that defines your place in the list. When the ID is not present, you are at the end of the list. For example, if you make a list request and receive 100 objects, ending with `"obj_123"`, your subsequent call can include `before="obj_123"` to fetch a new batch of objects before `"obj_123"`.
 * @param after - An object ID that defines your place in the list. When the ID is not present, you are at the end of the list. For example, if you make a list request and receive 100 objects, ending with `"obj_123"`, your subsequent call can include `after="obj_123"` to fetch a new batch of objects after `"obj_123"`.
 * @param limit - Upper limit on the number of objects to return, between `1` and `100`.
 * @param order - Order the results by the creation time. Supported values are `"asc"` (ascending), `"desc"` (descending), and `"normal"` (descending with reversed cursor semantics where `before` fetches older records and `after` fetches newer records).
 * @param permission_slug - The permission slug to filter by. Only users with this permission on the resource are returned.
 * @param assignment - Filter by assignment type. Use "direct" for direct assignments only, or "indirect" to include inherited assignments.
 */
export const AuthorizationResourcesByExternalIdControllerListOrganizationMembershipsForResourceByExternalId =
  /*@__PURE__*/ API.make(() => ({
    inputSchema:
      AuthorizationResourcesByExternalIdControllerListOrganizationMembershipsForResourceByExternalIdInput,
    outputSchema:
      AuthorizationResourcesByExternalIdControllerListOrganizationMembershipsForResourceByExternalIdOutput,
    errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
  }));
