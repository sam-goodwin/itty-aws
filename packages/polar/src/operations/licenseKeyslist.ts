import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const LicenseKeyslistInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organization_id: Schema.optional(Schema.String),
  benefit_id: Schema.optional(Schema.String),
  status: Schema.optional(Schema.String),
  page: Schema.optional(Schema.Number),
  limit: Schema.optional(Schema.Number),
}).pipe(T.Http({ method: "GET", path: "/v1/license-keys/" }));
export type LicenseKeyslistInput = typeof LicenseKeyslistInput.Type;

// Output Schema
export const LicenseKeyslistOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  items: Schema.Array(
    Schema.Struct({
      id: Schema.String,
      created_at: Schema.String,
      modified_at: Schema.Unknown,
      organization_id: Schema.String,
      customer_id: Schema.String,
      customer: Schema.Struct({
        id: Schema.String,
        created_at: Schema.String,
        modified_at: Schema.Unknown,
        metadata: Schema.Record(Schema.String, Schema.Unknown),
        external_id: Schema.optional(Schema.Unknown),
        email: Schema.optional(Schema.Unknown),
        email_verified: Schema.Boolean,
        type: Schema.Literals(["individual", "team"]),
        name: Schema.Unknown,
        billing_address: Schema.Unknown,
        tax_id: Schema.Unknown,
        locale: Schema.optional(Schema.Unknown),
        organization_id: Schema.String,
        deleted_at: Schema.Unknown,
        avatar_url: Schema.String,
      }),
      benefit_id: Schema.String,
      key: Schema.String,
      display_key: Schema.String,
      status: Schema.Literals(["granted", "revoked", "disabled"]),
      limit_activations: Schema.Unknown,
      usage: Schema.Number,
      limit_usage: Schema.Unknown,
      validations: Schema.Number,
      last_validated_at: Schema.Unknown,
      expires_at: Schema.Unknown,
    }),
  ),
  pagination: Schema.Struct({
    total_count: Schema.Number,
    max_page: Schema.Number,
  }),
});
export type LicenseKeyslistOutput = typeof LicenseKeyslistOutput.Type;

// The operation
/**
 * List License Keys
 *
 * Get license keys connected to the given organization & filters.
 * **Scopes**: `license_keys:read` `license_keys:write`
 *
 * @param organization_id - Filter by organization ID.
 * @param benefit_id - Filter by benefit ID.
 * @param status - Filter by license key status.
 * @param page - Page number, defaults to 1.
 * @param limit - Size of a page, defaults to 10. Maximum is 100.
 */
export const licenseKeyslist = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LicenseKeyslistInput,
  outputSchema: LicenseKeyslistOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
