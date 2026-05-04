import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const CustomerPortallicenseKeysgetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/v1/customer-portal/license-keys/{id}" }),
  );
export type CustomerPortallicenseKeysgetInput =
  typeof CustomerPortallicenseKeysgetInput.Type;

// Output Schema
export const CustomerPortallicenseKeysgetOutput =
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
    activations: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        license_key_id: Schema.String,
        label: Schema.String,
        meta: Schema.Record(Schema.String, Schema.Unknown),
        created_at: Schema.String,
        modified_at: Schema.Unknown,
      }),
    ),
  });
export type CustomerPortallicenseKeysgetOutput =
  typeof CustomerPortallicenseKeysgetOutput.Type;

// The operation
/**
 * Get License Key
 *
 * Get a license key.
 * **Scopes**: `customer_portal:read` `customer_portal:write`
 */
export const customerPortallicenseKeysget =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CustomerPortallicenseKeysgetInput,
    outputSchema: CustomerPortallicenseKeysgetOutput,
    errors: [NotFound, UnprocessableEntity] as const,
  }));
