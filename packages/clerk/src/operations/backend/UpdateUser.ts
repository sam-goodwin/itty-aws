import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import {
  BadRequest,
  NotFound,
  Conflict,
  UnprocessableEntity,
} from "../../errors.ts";
import { SensitiveString, SensitiveNullableString } from "../../sensitive.ts";

// Input Schema
export const UpdateUserInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  user_id: Schema.String.pipe(T.PathParam()),
  external_id: Schema.optional(Schema.NullOr(Schema.String)),
  first_name: Schema.optional(Schema.NullOr(Schema.String)),
  last_name: Schema.optional(Schema.NullOr(Schema.String)),
  locale: Schema.optional(Schema.NullOr(Schema.String)),
  primary_email_address_id: Schema.optional(Schema.NullOr(Schema.String)),
  notify_primary_email_address_changed: Schema.optional(
    Schema.NullOr(Schema.Boolean),
  ),
  primary_phone_number_id: Schema.optional(Schema.NullOr(Schema.String)),
  primary_web3_wallet_id: Schema.optional(Schema.NullOr(Schema.String)),
  username: Schema.optional(Schema.NullOr(Schema.String)),
  profile_image_id: Schema.optional(Schema.NullOr(Schema.String)),
  password: Schema.optional(SensitiveNullableString),
  password_digest: Schema.optional(SensitiveString),
  password_hasher: Schema.optional(Schema.String),
  skip_password_checks: Schema.optional(Schema.NullOr(Schema.Boolean)),
  sign_out_of_other_sessions: Schema.optional(Schema.NullOr(Schema.Boolean)),
  totp_secret: Schema.optional(SensitiveNullableString),
  backup_codes: Schema.optional(Schema.Array(Schema.String)),
  public_metadata: Schema.optional(
    Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
  ),
  private_metadata: Schema.optional(
    Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
  ),
  unsafe_metadata: Schema.optional(
    Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
  ),
  delete_self_enabled: Schema.optional(Schema.NullOr(Schema.Boolean)),
  create_organization_enabled: Schema.optional(Schema.NullOr(Schema.Boolean)),
  legal_accepted_at: Schema.optional(Schema.NullOr(Schema.String)),
  skip_legal_checks: Schema.optional(Schema.NullOr(Schema.Boolean)),
  create_organizations_limit: Schema.optional(Schema.NullOr(Schema.Number)),
  created_at: Schema.optional(Schema.NullOr(Schema.String)),
  bypass_client_trust: Schema.optional(Schema.NullOr(Schema.Boolean)),
}).pipe(T.Http({ method: "PATCH", path: "/users/{user_id}" }));
export type UpdateUserInput = typeof UpdateUserInput.Type;

// Output Schema
export const UpdateUserOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
      backup_codes: Schema.optional(Schema.NullOr(Schema.Array(Schema.String))),
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
});
export type UpdateUserOutput = typeof UpdateUserOutput.Type;

// The operation
/**
 * Update a user
 *
 * Update a user's attributes.
 * You can set the user's primary contact identifiers (email address and phone numbers) by updating the `primary_email_address_id` and `primary_phone_number_id` attributes respectively.
 * Both IDs should correspond to verified identifications that belong to the user.
 * You can remove a user's username by setting the username attribute to null or the blank string "".
 * This is a destructive action; the identification will be deleted forever.
 * Usernames can be removed only if they are optional in your instance settings and there's at least one other identifier which can be used for authentication.
 * This endpoint allows changing a user's password. When passing the `password` parameter directly you have two further options.
 * You can ignore the password policy checks for your instance by setting the `skip_password_checks` parameter to `true`.
 * You can also choose to sign the user out of all their active sessions on any device once the password is updated. Just set `sign_out_of_other_sessions` to `true`.
 *
 * @param user_id - The ID of the user to update
 */
export const UpdateUser = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateUserInput,
  outputSchema: UpdateUserOutput,
  errors: [BadRequest, NotFound, Conflict, UnprocessableEntity] as const,
}));
