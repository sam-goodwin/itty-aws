import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
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
  );
export type CustomerPortallicenseKeysdeactivateInput =
  typeof CustomerPortallicenseKeysdeactivateInput.Type;

// Output Schema
export const CustomerPortallicenseKeysdeactivateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type CustomerPortallicenseKeysdeactivateOutput =
  typeof CustomerPortallicenseKeysdeactivateOutput.Type;

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
    errors: [NotFound, UnprocessableEntity] as const,
  }));
