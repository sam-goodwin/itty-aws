import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface LicenseKeysdeactivateInput {
  key: string;
  organization_id: string;
  activation_id: string;
}
export const LicenseKeysdeactivateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key: Schema.String,
    organization_id: Schema.String,
    activation_id: Schema.String,
  }).pipe(
    T.Http({ method: "POST", path: "/v1/license-keys/deactivate" }),
  ) as unknown as Schema.Codec<LicenseKeysdeactivateInput>;

// Output Schema
export type LicenseKeysdeactivateOutput = void;
export const LicenseKeysdeactivateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<LicenseKeysdeactivateOutput>;

// The operation
/**
 * Deactivate License Key
 *
 * Deactivate a license key instance.
 * **Scopes**: `license_keys:write`
 */
export const licenseKeysdeactivate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: LicenseKeysdeactivateInput,
    outputSchema: LicenseKeysdeactivateOutput,
  }),
);
