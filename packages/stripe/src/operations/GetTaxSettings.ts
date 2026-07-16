import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetTaxSettingsInput {
  expand?: string;
}
export const GetTaxSettingsInput = /*@__PURE__*/ Schema.Struct({
  expand: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/v1/tax/settings",
    contentType: "form-urlencoded",
  }),
) as unknown as Schema.Codec<GetTaxSettingsInput>;

// Output Schema
export interface GetTaxSettingsOutput {
  defaults: {
    provider: "anrok" | "avalara" | "sphere" | "stripe";
    tax_behavior: "exclusive" | "inclusive" | "inferred_by_currency" | null;
    tax_code: string | null;
  };
  head_office: {
    address: {
      city: string | null;
      country: string | null;
      line1: string | null;
      line2: string | null;
      postal_code: string | null;
      state: string | null;
    };
  } | null;
  livemode: boolean;
  object: "tax.settings";
  status: "active" | "pending";
  status_details: {
    active?: {};
    pending?: { missing_fields: string[] | null };
  };
}
export const GetTaxSettingsOutput = /*@__PURE__*/ Schema.Struct({
  defaults: Schema.Struct({
    provider: Schema.Literals(["anrok", "avalara", "sphere", "stripe"]),
    tax_behavior: Schema.NullOr(
      Schema.Literals(["exclusive", "inclusive", "inferred_by_currency"]),
    ),
    tax_code: Schema.NullOr(Schema.String),
  }),
  head_office: Schema.NullOr(
    Schema.Struct({
      address: Schema.Struct({
        city: Schema.NullOr(Schema.String),
        country: Schema.NullOr(Schema.String),
        line1: Schema.NullOr(Schema.String),
        line2: Schema.NullOr(Schema.String),
        postal_code: Schema.NullOr(Schema.String),
        state: Schema.NullOr(Schema.String),
      }),
    }),
  ),
  livemode: Schema.Boolean,
  object: Schema.Literals(["tax.settings"]),
  status: Schema.Literals(["active", "pending"]),
  status_details: Schema.Struct({
    active: Schema.optional(Schema.Struct({})),
    pending: Schema.optional(
      Schema.Struct({
        missing_fields: Schema.NullOr(Schema.Array(Schema.String)),
      }),
    ),
  }),
}) as unknown as Schema.Codec<GetTaxSettingsOutput>;

// The operation
/**
 * Retrieve settings
 *
 * <p>Retrieves Tax <code>Settings</code> for a merchant.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetTaxSettings = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetTaxSettingsInput,
  outputSchema: GetTaxSettingsOutput,
}));
