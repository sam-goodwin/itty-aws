import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import { BadRequest, UnprocessableEntity } from "../../errors.ts";

// Input Schema
export const GetUserListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  email_address: Schema.optional(Schema.String),
  phone_number: Schema.optional(Schema.String),
  external_id: Schema.optional(Schema.String),
  username: Schema.optional(Schema.String),
  web3_wallet: Schema.optional(Schema.String),
  user_id: Schema.optional(Schema.String),
  organization_id: Schema.optional(Schema.String),
  query: Schema.optional(Schema.String),
  email_address_query: Schema.optional(Schema.String),
  phone_number_query: Schema.optional(Schema.String),
  username_query: Schema.optional(Schema.String),
  name_query: Schema.optional(Schema.String),
  banned: Schema.optional(Schema.Boolean),
  last_active_at_before: Schema.optional(Schema.Number),
  last_active_at_after: Schema.optional(Schema.Number),
  last_active_at_since: Schema.optional(Schema.Number),
  created_at_before: Schema.optional(Schema.Number),
  created_at_after: Schema.optional(Schema.Number),
  last_sign_in_at_before: Schema.optional(Schema.Number),
  last_sign_in_at_after: Schema.optional(Schema.Number),
  provider: Schema.optional(Schema.String),
  provider_user_id: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
  offset: Schema.optional(Schema.Number),
  order_by: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "GET", path: "/users" }));
export type GetUserListInput = typeof GetUserListInput.Type;

// Output Schema
export const GetUserListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.Struct({
    id: Schema.String,
    object: Schema.Literals(["user"]),
    external_id: Schema.NullOr(Schema.String),
    primary_email_address_id: Schema.NullOr(Schema.String),
    primary_phone_number_id: Schema.NullOr(Schema.String),
    primary_web3_wallet_id: Schema.NullOr(Schema.String),
    username: Schema.NullOr(Schema.String),
    first_name: Schema.NullOr(Schema.String),
    last_name: Schema.NullOr(Schema.String),
    locale: Schema.optional(Schema.NullOr(Schema.String)),
    profile_image_url: Schema.optional(Schema.String),
    image_url: Schema.optional(Schema.String),
    has_image: Schema.Boolean,
    public_metadata: Schema.Record(Schema.String, Schema.Unknown),
    private_metadata: Schema.optional(
      Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    unsafe_metadata: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    email_addresses: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        object: Schema.Literals(["email_address"]),
        email_address: Schema.String,
        reserved: Schema.Boolean,
        verification: Schema.Unknown,
        linked_to: Schema.Array(
          Schema.Struct({
            type: Schema.String,
            id: Schema.String,
          }),
        ),
        matches_sso_connection: Schema.optional(Schema.Boolean),
        created_at: Schema.Number,
        updated_at: Schema.Number,
      }),
    ),
    phone_numbers: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        object: Schema.Literals(["phone_number"]),
        phone_number: Schema.String,
        reserved_for_second_factor: Schema.optional(Schema.Boolean),
        default_second_factor: Schema.optional(Schema.Boolean),
        reserved: Schema.Boolean,
        verification: Schema.Unknown,
        linked_to: Schema.Array(
          Schema.Struct({
            type: Schema.String,
            id: Schema.String,
          }),
        ),
        backup_codes: Schema.optional(
          Schema.NullOr(Schema.Array(Schema.String)),
        ),
        created_at: Schema.Number,
        updated_at: Schema.Number,
      }),
    ),
    web3_wallets: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        object: Schema.Literals(["web3_wallet"]),
        web3_wallet: Schema.String,
        verification: Schema.Unknown,
        created_at: Schema.Number,
        updated_at: Schema.Number,
      }),
    ),
    passkeys: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        object: Schema.Literals(["passkey"]),
        name: Schema.String,
        last_used_at: Schema.Number,
        verification: Schema.Unknown,
      }),
    ),
    password_enabled: Schema.Boolean,
    two_factor_enabled: Schema.Boolean,
    totp_enabled: Schema.Boolean,
    backup_code_enabled: Schema.Boolean,
    mfa_enabled_at: Schema.NullOr(Schema.Number),
    mfa_disabled_at: Schema.NullOr(Schema.Number),
    password_last_updated_at: Schema.optional(Schema.NullOr(Schema.Number)),
    external_accounts: Schema.Array(
      Schema.Struct({
        object: Schema.Literals([
          "external_account",
          "facebook_account",
          "google_account",
        ]),
        id: Schema.String,
        provider: Schema.String,
        identification_id: Schema.String,
        provider_user_id: Schema.String,
        approved_scopes: Schema.String,
        email_address: Schema.String,
        email_address_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
        first_name: Schema.String,
        last_name: Schema.String,
        avatar_url: Schema.optional(Schema.String),
        image_url: Schema.optional(Schema.NullOr(Schema.String)),
        username: Schema.optional(Schema.NullOr(Schema.String)),
        phone_number: Schema.optional(Schema.NullOr(Schema.String)),
        public_metadata: Schema.Record(Schema.String, Schema.Unknown),
        label: Schema.optional(Schema.NullOr(Schema.String)),
        created_at: Schema.Number,
        updated_at: Schema.Number,
        verification: Schema.Unknown,
      }),
    ),
    saml_accounts: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        object: Schema.Literals(["saml_account"]),
        provider: Schema.String,
        active: Schema.Boolean,
        email_address: Schema.String,
        first_name: Schema.optional(Schema.NullOr(Schema.String)),
        last_name: Schema.optional(Schema.NullOr(Schema.String)),
        provider_user_id: Schema.optional(Schema.NullOr(Schema.String)),
        last_authenticated_at: Schema.optional(Schema.NullOr(Schema.Number)),
        public_metadata: Schema.optional(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
        verification: Schema.Unknown,
        saml_connection: Schema.optional(Schema.Unknown),
      }),
    ),
    enterprise_accounts: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        object: Schema.Literals(["enterprise_account"]),
        protocol: Schema.optional(Schema.Literals(["oauth", "saml"])),
        provider: Schema.String,
        active: Schema.Boolean,
        email_address: Schema.String,
        first_name: Schema.optional(Schema.NullOr(Schema.String)),
        last_name: Schema.optional(Schema.NullOr(Schema.String)),
        provider_user_id: Schema.optional(Schema.NullOr(Schema.String)),
        enterprise_connection_id: Schema.optional(Schema.NullOr(Schema.String)),
        public_metadata: Schema.optional(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
        verification: Schema.Unknown,
        enterprise_connection: Schema.optional(Schema.Unknown),
        last_authenticated_at: Schema.optional(Schema.NullOr(Schema.Number)),
      }),
    ),
    organization_memberships: Schema.optional(
      Schema.Array(
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
    ),
    last_sign_in_at: Schema.NullOr(Schema.Number),
    banned: Schema.Boolean,
    locked: Schema.Boolean,
    deprovisioned: Schema.optional(Schema.Boolean),
    lockout_expires_in_seconds: Schema.NullOr(Schema.Number),
    verification_attempts_remaining: Schema.NullOr(Schema.Number),
    updated_at: Schema.Number,
    created_at: Schema.Number,
    delete_self_enabled: Schema.Boolean,
    create_organization_enabled: Schema.Boolean,
    create_organizations_limit: Schema.optional(Schema.NullOr(Schema.Number)),
    last_active_at: Schema.NullOr(Schema.Number),
    legal_accepted_at: Schema.NullOr(Schema.Number),
    bypass_client_trust: Schema.optional(Schema.Boolean),
    scim: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          directory_id: Schema.String,
          directory_enabled: Schema.optional(Schema.Boolean),
          external_id: Schema.NullOr(Schema.String),
        }),
      ),
    ),
  }),
);
export type GetUserListOutput = typeof GetUserListOutput.Type;

// The operation
/**
 * List all users
 *
 * Returns a list of all users.
 * The users are returned sorted by creation date, with the newest users appearing first.
 *
 * @param email_address - Returns users with the specified email addresses.
Accepts up to 100 email addresses.
Any email addresses not found are ignored.
 * @param phone_number - Returns users with the specified phone numbers.
Accepts up to 100 phone numbers.
Any phone numbers not found are ignored.
 * @param external_id - Returns users with the specified external IDs.
For each external ID, the `+` and `-` can be
prepended to the ID, which denote whether the
respective external ID should be included or
excluded from the result set.
Accepts up to 100 external IDs.
Any external IDs not found are ignored.
 * @param username - Returns users with the specified usernames.
Accepts up to 100 usernames.
Any usernames not found are ignored.
 * @param web3_wallet - Returns users with the specified web3 wallet addresses.
Accepts up to 100 web3 wallet addresses.
Any web3 wallet addresses not found are ignored.
 * @param user_id - Returns users with the user IDs specified.
For each user ID, the `+` and `-` can be
prepended to the ID, which denote whether the
respective user ID should be included or
excluded from the result set.
Accepts up to 100 user IDs.
Any user IDs not found are ignored.
 * @param organization_id - Returns users that have memberships to the
given organizations.
For each organization ID, the `+` and `-` can be
prepended to the ID, which denote whether the
respective organization should be included or
excluded from the result set.
Accepts up to 100 organization IDs.
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
 * @param banned - Returns users which are either banned (`banned=true`) or not banned (`banned=false`).
 * @param last_active_at_before - Returns users whose last session activity was before the given date (with millisecond precision).
Example: use 1700690400000 to retrieve users whose last session activity was before 2023-11-23.
 * @param last_active_at_after - Returns users whose last session activity was after the given date (with millisecond precision).
Example: use 1700690400000 to retrieve users whose last session activity was after 2023-11-23.
 * @param last_active_at_since - Returns users that had session activity since the given date.
Example: use 1700690400000 to retrieve users that had session activity from 2023-11-23 until the current day.
Deprecated in favor of `last_active_at_after`.
 * @param created_at_before - Returns users who have been created before the given date (with millisecond precision).
Example: use 1730160000000 to retrieve users who have been created before 2024-10-29.
 * @param created_at_after - Returns users who have been created after the given date (with millisecond precision).
Example: use 1730160000000 to retrieve users who have been created after 2024-10-29.
 * @param last_sign_in_at_before - Returns users whose last sign-in was before the given date (with millisecond precision).
Example: use 1700690400000 to retrieve users whose last sign-in was before 2023-11-23.
 * @param last_sign_in_at_after - Returns users whose last sign-in was after the given date (with millisecond precision).
Example: use 1700690400000 to retrieve users whose last sign-in was after 2023-11-23.
 * @param provider - Returns users with external accounts for the specified OAuth provider.
Must be used in combination with the `provider_user_id` parameter.
For example, use `provider=oauth_google&provider_user_id=12345` to retrieve a user with Google provider user ID 12345.
 * @param provider_user_id - Returns users with the specified provider user IDs for a specific provider.
Must be used in combination with the `provider` parameter.
For example, use `provider=oauth_google&provider_user_id=12345` to retrieve a user with Google provider user ID 12345.
Accepts up to 100 provider user IDs.
Any provider user IDs not found are ignored.
 * @param limit - Applies a limit to the number of results returned.
Can be used for paginating the results together with `offset`.
 * @param offset - Skip the first `offset` results when paginating.
Needs to be an integer greater or equal to zero.
To be used in conjunction with `limit`.
 * @param order_by - Allows to return users in a particular order.
At the moment, you can order the returned users by their `created_at`,`updated_at`,`email_address`,`web3wallet`,`first_name`,`last_name`,`phone_number`,`username`,`last_active_at`,`last_sign_in_at`.
In order to specify the direction, you can use the `+/-` symbols prepended in the property to order by.
For example, if you want users to be returned in descending order according to their `created_at` property, you can use `-created_at`.
If you don't use `+` or `-`, then `+` is implied. We only support one `order_by` parameter, and if multiple `order_by` parameters are provided, we will only keep the first one. For example,
if you pass `order_by=username&order_by=created_at`, we will consider only the first `order_by` parameter, which is `username`. The `created_at` parameter will be ignored in this case.
 */
export const GetUserList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetUserListInput,
  outputSchema: GetUserListOutput,
  errors: [BadRequest, UnprocessableEntity] as const,
}));
