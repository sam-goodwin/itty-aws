import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface CustomerPortallicenseKeysdeactivateInput {
  key: string;
  organization_id: string;
  activation_id: string;
}
export const CustomerPortallicenseKeysdeactivateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key: Schema.String,
    organization_id: Schema.String,
    activation_id: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/customer-portal/license-keys/deactivate",
    }),
  ) as unknown as Schema.Codec<CustomerPortallicenseKeysdeactivateInput>;

// Output Schema
export type CustomerPortallicenseKeysdeactivateOutput = void;
export const CustomerPortallicenseKeysdeactivateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<CustomerPortallicenseKeysdeactivateOutput>;

// The operation
/**
 * Deactivate License Key
 *
 * Deactivate a license key instance.
 * > This endpoint doesn't require authentication and can be safely used on a public
 * > client, like a desktop application or a mobile app.
 * > If you plan to validate a license key on a server, use the `/v1/license-keys/deactivate`
 * > endpoint instead.
 */
export const customerPortallicenseKeysdeactivate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CustomerPortallicenseKeysdeactivateInput,
    outputSchema: CustomerPortallicenseKeysdeactivateOutput,
  }));
