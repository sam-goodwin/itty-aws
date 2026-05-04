import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const LicenseKeysupdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.String.pipe(T.PathParam()),
    status: Schema.optional(Schema.Unknown),
    usage: Schema.optional(Schema.Number),
    limit_activations: Schema.optional(Schema.Unknown),
    limit_usage: Schema.optional(Schema.Unknown),
    expires_at: Schema.optional(Schema.Unknown),
  },
).pipe(T.Http({ method: "PATCH", path: "/v1/license-keys/{id}" }));
export type LicenseKeysupdateInput = typeof LicenseKeysupdateInput.Type;

// Output Schema
export const LicenseKeysupdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type LicenseKeysupdateOutput = typeof LicenseKeysupdateOutput.Type;

// The operation
/**
 * Update License Key
 *
 * Update a license key.
 * **Scopes**: `license_keys:write`
 */
export const licenseKeysupdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LicenseKeysupdateInput,
  outputSchema: LicenseKeysupdateOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
