import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export interface UserlandUserOrganizationMembershipsControllerReactivateInput {
  id: string;
}
export const UserlandUserOrganizationMembershipsControllerReactivateInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/user_management/organization_memberships/{id}/reactivate",
    }),
  ) as unknown as Schema.Codec<UserlandUserOrganizationMembershipsControllerReactivateInput>;

// Output Schema
export interface UserlandUserOrganizationMembershipsControllerReactivateOutput {
  object?: string;
  id?: string;
  user_id?: string;
  organization_id?: string;
  status?: "active" | "inactive" | "pending";
  directory_managed?: boolean;
  organization_name?: string;
  custom_attributes?: Record<string, unknown>;
  created_at?: string;
  updated_at?: string;
  role?: { slug?: string };
  roles?: ReadonlyArray<{ slug?: string }>;
  user?: {
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
}
export const UserlandUserOrganizationMembershipsControllerReactivateOutput =
  /*@__PURE__*/ Schema.Struct({
    object: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    user_id: Schema.optional(Schema.String),
    organization_id: Schema.optional(Schema.String),
    status: Schema.optional(Schema.Literals(["active", "inactive", "pending"])),
    directory_managed: Schema.optional(Schema.Boolean),
    organization_name: Schema.optional(Schema.String),
    custom_attributes: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
    role: Schema.optional(
      Schema.Struct({
        slug: Schema.optional(Schema.String),
      }),
    ),
    roles: Schema.optional(
      Schema.Array(
        Schema.Struct({
          slug: Schema.optional(Schema.String),
        }),
      ),
    ),
    user: Schema.optional(
      Schema.Struct({
        object: Schema.optional(Schema.String),
        id: Schema.optional(Schema.String),
        first_name: Schema.optional(Schema.NullOr(Schema.String)),
        last_name: Schema.optional(Schema.NullOr(Schema.String)),
        name: Schema.optional(Schema.NullOr(Schema.String)),
        profile_picture_url: Schema.optional(Schema.NullOr(Schema.String)),
        email: Schema.optional(Schema.String),
        email_verified: Schema.optional(Schema.Boolean),
        external_id: Schema.optional(Schema.NullOr(Schema.String)),
        metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        last_sign_in_at: Schema.optional(Schema.NullOr(Schema.String)),
        locale: Schema.optional(Schema.NullOr(Schema.String)),
        created_at: Schema.optional(Schema.String),
        updated_at: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<UserlandUserOrganizationMembershipsControllerReactivateOutput>;

// The operation
/**
 * Reactivate an organization membership
 *
 * Reactivates an `inactive` organization membership, retaining the pre-existing role(s). Emits an [organization_membership.updated](/events/organization-membership) event upon successful reactivation.
 * - Reactivating an `active` membership is a no-op and does not emit an event.
 * - Reactivating a `pending` membership returns an error. The user needs to [accept the invitation](/authkit/invitations) instead.
 * See the [membership management documentation](/authkit/users-organizations/organizations/membership-management) for additional details.
 *
 * @param id - The unique ID of the organization membership.
 */
export const UserlandUserOrganizationMembershipsControllerReactivate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: UserlandUserOrganizationMembershipsControllerReactivateInput,
    outputSchema: UserlandUserOrganizationMembershipsControllerReactivateOutput,
    errors: [BadRequest, NotFound, UnprocessableEntity] as const,
  }));
