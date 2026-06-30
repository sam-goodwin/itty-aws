import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetCountrySpecsCountryInput {
  country: string;
  expand?: string;
}
export const GetCountrySpecsCountryInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    country: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/country_specs/{country}",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<GetCountrySpecsCountryInput>;

// Output Schema
export interface GetCountrySpecsCountryOutput {
  default_currency: string;
  id: string;
  object: "country_spec";
  supported_bank_account_currencies: Record<string, string[]>;
  supported_payment_currencies: string[];
  supported_payment_methods: string[];
  supported_transfer_countries: string[];
  verification_fields: {
    company: { additional: string[]; minimum: string[] };
    individual: { additional: string[]; minimum: string[] };
  };
}
export const GetCountrySpecsCountryOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    default_currency: Schema.String,
    id: Schema.String,
    object: Schema.Literals(["country_spec"]),
    supported_bank_account_currencies: Schema.Record(
      Schema.String,
      Schema.Array(Schema.String),
    ),
    supported_payment_currencies: Schema.Array(Schema.String),
    supported_payment_methods: Schema.Array(Schema.String),
    supported_transfer_countries: Schema.Array(Schema.String),
    verification_fields: Schema.Struct({
      company: Schema.Struct({
        additional: Schema.Array(Schema.String),
        minimum: Schema.Array(Schema.String),
      }),
      individual: Schema.Struct({
        additional: Schema.Array(Schema.String),
        minimum: Schema.Array(Schema.String),
      }),
    }),
  }) as unknown as Schema.Codec<GetCountrySpecsCountryOutput>;

// The operation
/**
 * Retrieve a Country Spec
 *
 * <p>Returns a Country Spec for a given Country code.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetCountrySpecsCountry = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetCountrySpecsCountryInput,
    outputSchema: GetCountrySpecsCountryOutput,
  }),
);
