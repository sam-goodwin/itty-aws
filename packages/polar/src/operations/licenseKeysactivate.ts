import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const LicenseKeysactivateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key: Schema.String,
    organization_id: Schema.String,
    label: Schema.String,
    conditions: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    meta: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).pipe(T.Http({ method: "POST", path: "/v1/license-keys/activate" }));
export type LicenseKeysactivateInput = typeof LicenseKeysactivateInput.Type;

// Output Schema
export const LicenseKeysactivateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    license_key_id: Schema.String,
    label: Schema.String,
    meta: Schema.Record(Schema.String, Schema.Unknown),
    created_at: Schema.String,
    modified_at: Schema.Unknown,
    license_key: Schema.Struct({
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
  });
export type LicenseKeysactivateOutput = typeof LicenseKeysactivateOutput.Type;

// The operation
/**
 * Activate License Key
 *
 * Activate a license key instance.
 * **Scopes**: `license_keys:write`
 */
export const licenseKeysactivate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LicenseKeysactivateInput,
  outputSchema: LicenseKeysactivateOutput,
  errors: [Forbidden, NotFound, UnprocessableEntity] as const,
}));
