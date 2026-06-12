import * as Schema from "effect/Schema";
import {
  tax_product_resource_tax_settings_defaultsSchema,
  tax_product_resource_tax_settings_status_detailsSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetTaxSettingsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  expand: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/v1/tax/settings",
    contentType: "form-urlencoded",
  }),
);
export type GetTaxSettingsInput = typeof GetTaxSettingsInput.Type;

// Output Schema
export const GetTaxSettingsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  defaults: Schema.suspend(
    () => tax_product_resource_tax_settings_defaultsSchema,
  ),
  head_office: Schema.Unknown,
  livemode: Schema.Boolean,
  object: Schema.Literals(["tax.settings"]),
  status: Schema.Literals(["active", "pending"]),
  status_details: Schema.suspend(
    () => tax_product_resource_tax_settings_status_detailsSchema,
  ),
});
export type GetTaxSettingsOutput = typeof GetTaxSettingsOutput.Type;

// The operation
/**
 * Retrieve settings
 *
 * <p>Retrieves Tax <code>Settings</code> for a merchant.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetTaxSettings = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetTaxSettingsInput,
  outputSchema: GetTaxSettingsOutput,
}));
