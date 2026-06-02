import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import { UnprocessableEntity } from "../../errors.ts";

// Input Schema
export const ListOrganizationMembershipsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization_id: Schema.String.pipe(T.PathParam()),
    order_by: Schema.optional(Schema.String),
    user_id: Schema.optional(Schema.String),
    email_address: Schema.optional(Schema.String),
    phone_number: Schema.optional(Schema.String),
    username: Schema.optional(Schema.String),
    web3_wallet: Schema.optional(Schema.String),
    role: Schema.optional(Schema.String),
    query: Schema.optional(Schema.String),
    email_address_query: Schema.optional(Schema.String),
    phone_number_query: Schema.optional(Schema.String),
    username_query: Schema.optional(Schema.String),
    name_query: Schema.optional(Schema.String),
    last_active_at_before: Schema.optional(Schema.Number),
    last_active_at_after: Schema.optional(Schema.Number),
    created_at_before: Schema.optional(Schema.Number),
    created_at_after: Schema.optional(Schema.Number),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/organizations/{organization_id}/memberships",
    }),
  );
export type ListOrganizationMembershipsInput =
  typeof ListOrganizationMembershipsInput.Type;

// Output Schema
export const ListOrganizationMembershipsOutput =
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
export type ListOrganizationMembershipsOutput =
  typeof ListOrganizationMembershipsOutput.Type;

// The operation
/**
 * Get a list of all members of an organization
 *
 * Retrieves all user memberships for the given organization
 *
 * @param organization_id - The organization ID.
 * @param order_by - Sorts organizations memberships by phone_number, email_address, created_at, first_name, last_name or username.
By prepending one of those values with + or -, we can choose to sort in ascending (ASC) or descending (DESC) order."
 * @param user_id - Returns users with the user IDs specified. For each user ID, the `+` and `-` can be
prepended to the ID, which denote whether the respective user ID should be included or
excluded from the result set. Accepts up to 100 user IDs. Any user IDs not found are ignored.
 * @param email_address - Returns users with the specified email addresses. Accepts up to 100 email addresses. Any email addresses not found are ignored.
 * @param phone_number - Returns users with the specified phone numbers. Accepts up to 100 phone numbers. Any phone numbers not found are ignored.
 * @param username - Returns users with the specified usernames.
Accepts up to 100 usernames.
Any usernames not found are ignored.
 * @param web3_wallet - Returns users with the specified web3 wallet addresses.
Accepts up to 100 web3 wallet addresses.
Any web3 wallet addresses not found are ignored.
 * @param role - Returns users with the specified roles. Accepts up to 100 roles. Any roles not found are ignored.
 * @param query - Returns users that match the given query.
For possible matches, we check the email addresses, phone numbers, usernames, web3 wallets, user IDs, first and last names.
The query value doesn't need to match the exact value you are looking for, it is capable of partial matches as well.
 * @param email_address_query - Returns users with emails that match the given query, via case-insensitive partial match.
For example, `email_address_query=ello` will match a user with the email `HELLO@example.com`.
 * @param phone_number_query - Returns users with phone numbers that match the given query, via case-insensitive partial match.
For example, `phone_number_query=555` will match a user with the phone number `+1555xxxxxxx`.
 * @param username_query - Returns users with usernames that match the given query, via case-insensitive partial match.
For example, `username_query=CoolUser` will match a user with the username `SomeCoolUser`.
 * @param name_query - Returns users with names that match the given query, via case-insensitive partial match.
 * @param last_active_at_before - Returns users whose last session activity was before the given date (with millisecond precision).
Example: use 1700690400000 to retrieve users whose last session activity was before 2023-11-23.
 * @param last_active_at_after - Returns users whose last session activity was after the given date (with millisecond precision).
Example: use 1700690400000 to retrieve users whose last session activity was after 2023-11-23.
 * @param created_at_before - Returns users who have been created before the given date (with millisecond precision).
Example: use 1730160000000 to retrieve users who have been created before 2024-10-29.
 * @param created_at_after - Returns users who have been created after the given date (with millisecond precision).
Example: use 1730160000000 to retrieve users who have been created after 2024-10-29.
 * @param limit - Applies a limit to the number of results returned.
Can be used for paginating the results together with `offset`.
 * @param offset - Skip the first `offset` results when paginating.
Needs to be an integer greater or equal to zero.
To be used in conjunction with `limit`.
 */
export const ListOrganizationMemberships = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ListOrganizationMembershipsInput,
    outputSchema: ListOrganizationMembershipsOutput,
    errors: [UnprocessableEntity] as const,
  }),
);
