import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const LicenseKeysdeactivateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key: Schema.String,
    organization_id: Schema.String,
    activation_id: Schema.String,
  }).pipe(T.Http({ method: "POST", path: "/v1/license-keys/deactivate" }));
export type LicenseKeysdeactivateInput = typeof LicenseKeysdeactivateInput.Type;

// Output Schema
export const LicenseKeysdeactivateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type LicenseKeysdeactivateOutput =
  typeof LicenseKeysdeactivateOutput.Type;

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
    errors: [NotFound, UnprocessableEntity] as const,
  }),
);
