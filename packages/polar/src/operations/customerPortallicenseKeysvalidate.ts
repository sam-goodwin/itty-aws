import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const CustomerPortallicenseKeysvalidateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key: Schema.String,
    organization_id: Schema.String,
    activation_id: Schema.optional(Schema.Unknown),
    benefit_id: Schema.optional(Schema.Unknown),
    customer_id: Schema.optional(Schema.Unknown),
    increment_usage: Schema.optional(Schema.Unknown),
    conditions: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/customer-portal/license-keys/validate",
    }),
  );
export type CustomerPortallicenseKeysvalidateInput =
  typeof CustomerPortallicenseKeysvalidateInput.Type;

// Output Schema
export const CustomerPortallicenseKeysvalidateOutput =
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
    activation: Schema.optional(Schema.Unknown),
  });
export type CustomerPortallicenseKeysvalidateOutput =
  typeof CustomerPortallicenseKeysvalidateOutput.Type;

// The operation
/**
 * Validate License Key
 *
 * Validate a license key.
 * > This endpoint doesn't require authentication and can be safely used on a public
 * > client, like a desktop application or a mobile app.
 * > If you plan to validate a license key on a server, use the `/v1/license-keys/validate`
 * > endpoint instead.
 */
export const customerPortallicenseKeysvalidate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CustomerPortallicenseKeysvalidateInput,
    outputSchema: CustomerPortallicenseKeysvalidateOutput,
    errors: [NotFound, UnprocessableEntity] as const,
  }));
