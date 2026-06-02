import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import { BadRequest, UnprocessableEntity } from "../../errors.ts";

// Input Schema
export const InstanceGetOrganizationMembershipsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    order_by: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(T.Http({ method: "GET", path: "/organization_memberships" }));
export type InstanceGetOrganizationMembershipsInput =
  typeof InstanceGetOrganizationMembershipsInput.Type;

// Output Schema
export const InstanceGetOrganizationMembershipsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        object: Schema.Literals(["organization_membership"]),
        role: Schema.String,
        role_name: Schema.optional(Schema.String),
        permissions: Schema.Array(Schema.String),
        public_metadata: Schema.Record(Schema.String, Schema.Unknown),
        private_metadata: Schema.optional(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
        organization: Schema.Struct({
          object: Schema.Literals(["organization"]),
          id: Schema.String,
          name: Schema.String,
          slug: Schema.String,
          image_url: Schema.optional(Schema.String),
          has_image: Schema.Boolean,
          members_count: Schema.optional(Schema.Number),
          missing_member_with_elevated_permissions: Schema.optional(
            Schema.Boolean,
          ),
          pending_invitations_count: Schema.optional(Schema.Number),
          max_allowed_memberships: Schema.Number,
          admin_delete_enabled: Schema.Boolean,
          public_metadata: Schema.Record(Schema.String, Schema.Unknown),
          private_metadata: Schema.optional(
            Schema.Record(Schema.String, Schema.Unknown),
          ),
          created_by: Schema.optional(Schema.String),
          created_at: Schema.Number,
          updated_at: Schema.Number,
          last_active_at: Schema.optional(Schema.Number),
          role_set_key: Schema.optional(Schema.NullOr(Schema.String)),
        }),
        public_user_data: Schema.optional(
          Schema.Struct({
            user_id: Schema.String,
            first_name: Schema.NullOr(Schema.String),
            last_name: Schema.NullOr(Schema.String),
            profile_image_url: Schema.NullOr(Schema.String),
            image_url: Schema.String,
            has_image: Schema.Boolean,
            identifier: Schema.optional(Schema.NullOr(Schema.String)),
            username: Schema.optional(Schema.NullOr(Schema.String)),
            banned: Schema.optional(Schema.Boolean),
          }),
        ),
        created_at: Schema.Number,
        updated_at: Schema.Number,
      }),
    ),
    total_count: Schema.Number,
  });
export type InstanceGetOrganizationMembershipsOutput =
  typeof InstanceGetOrganizationMembershipsOutput.Type;

// The operation
/**
 * Get a list of all organization memberships within an instance.
 *
 * Retrieves all organization user memberships for the given instance.
 *
 * @param order_by - Sorts organizations memberships by phone_number, email_address, created_at, first_name, last_name or username.
By prepending one of those values with + or -,
we can choose to sort in ascending (ASC) or descending (DESC) order.
 * @param limit - Applies a limit to the number of results returned.
Can be used for paginating the results together with `offset`.
 * @param offset - Skip the first `offset` results when paginating.
Needs to be an integer greater or equal to zero.
To be used in conjunction with `limit`.
 */
export const InstanceGetOrganizationMemberships =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: InstanceGetOrganizationMembershipsInput,
    outputSchema: InstanceGetOrganizationMembershipsOutput,
    errors: [BadRequest, UnprocessableEntity] as const,
  }));
