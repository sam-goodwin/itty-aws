import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, UnprocessableEntity } from "../../errors.ts";

// Input Schema
export const ListOrganizationsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    include_members_count: Schema.optional(Schema.Boolean),
    include_missing_member_with_elevated_permissions: Schema.optional(
      Schema.Boolean,
    ),
    query: Schema.optional(Schema.String),
    user_id: Schema.optional(Schema.String),
    organization_id: Schema.optional(Schema.String),
    order_by: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  },
).pipe(T.Http({ method: "GET", path: "/organizations" }));
export type ListOrganizationsInput = typeof ListOrganizationsInput.Type;

// Output Schema
export const ListOrganizationsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.Array(
      Schema.Struct({
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
    ),
    total_count: Schema.Number,
  });
export type ListOrganizationsOutput = typeof ListOrganizationsOutput.Type;

// The operation
/**
 * Get a list of organizations for an instance
 *
 * This request returns the list of organizations for an instance.
 * Results can be paginated using the optional `limit` and `offset` query parameters.
 * The organizations are ordered by descending creation date.
 * Most recent organizations will be returned first.
 *
 * @param include_members_count - Flag to denote whether the member counts of each organization should be included in the response or not.
 * @param include_missing_member_with_elevated_permissions - Flag to denote whether or not to include a member with elevated permissions who is not currently a member of the organization.
 * @param query - Returns organizations with ID, name, or slug that match the given query.
Uses exact match for organization ID and partial match for name and slug.
 * @param user_id - Returns organizations that include any of the specified user IDs as members. Any user IDs not found are ignored.
For each user ID, the `+` and `-` can be prepended to the ID, which denote whether the
respective organization should be included or excluded from the result set.
 * @param organization_id - Returns organizations with the organization IDs specified. Any organization IDs not found are ignored.
For each organization ID, the `+` and `-` can be prepended to the ID, which denote whether the
respective organization should be included or excluded from the result set. Accepts up to 100 organization IDs.
Example: ?organization_id=+org_1&organization_id=-org_2
 * @param order_by - Allows to return organizations in a particular order.
At the moment, you can order the returned organizations either by their `name`, `created_at` or `members_count`.
In order to specify the direction, you can use the `+/-` symbols prepended in the property to order by.
For example, if you want organizations to be returned in descending order according to their `created_at` property, you can use `-created_at`.
If you don't use `+` or `-`, then `+` is implied.
Defaults to `-created_at`.
 * @param limit - Applies a limit to the number of results returned.
Can be used for paginating the results together with `offset`.
 * @param offset - Skip the first `offset` results when paginating.
Needs to be an integer greater or equal to zero.
To be used in conjunction with `limit`.
 */
export const ListOrganizations = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListOrganizationsInput,
  outputSchema: ListOrganizationsOutput,
  errors: [BadRequest, Forbidden, UnprocessableEntity] as const,
}));
