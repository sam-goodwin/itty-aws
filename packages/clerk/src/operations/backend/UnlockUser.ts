import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import { Forbidden } from "../../errors.ts";

// Input Schema
export const UnlockUserInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  user_id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "POST", path: "/users/{user_id}/unlock" }));
export type UnlockUserInput = typeof UnlockUserInput.Type;

// Output Schema
export const UnlockUserOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type UnlockUserOutput = typeof UnlockUserOutput.Type;

// The operation
/**
 * Unlock a user
 *
 * Removes the lock from the given user.
 *
 * @param user_id - The ID of the user to unlock
 */
export const UnlockUser = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UnlockUserInput,
  outputSchema: UnlockUserOutput,
  errors: [Forbidden] as const,
}));
