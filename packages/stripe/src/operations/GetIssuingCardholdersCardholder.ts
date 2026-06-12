import * as Schema from "effect/Schema";
import {
  issuing_cardholder_addressSchema,
  issuing_cardholder_requirementsSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetIssuingCardholdersCardholderInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cardholder: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/issuing/cardholders/{cardholder}",
      contentType: "form-urlencoded",
    }),
  );
export type GetIssuingCardholdersCardholderInput =
  typeof GetIssuingCardholdersCardholderInput.Type;

// Output Schema
export const GetIssuingCardholdersCardholderOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billing: Schema.suspend(() => issuing_cardholder_addressSchema),
    company: Schema.Unknown,
    created: Schema.Number,
    email: Schema.NullOr(Schema.String),
    id: Schema.String,
    individual: Schema.Unknown,
    livemode: Schema.Boolean,
    metadata: Schema.Record(Schema.String, Schema.String),
    name: Schema.String,
    object: Schema.Literals(["issuing.cardholder"]),
    phone_number: Schema.NullOr(Schema.String),
    preferred_locales: Schema.NullOr(
      Schema.Array(Schema.Literals(["de", "en", "es", "fr", "it"])),
    ),
    requirements: Schema.suspend(() => issuing_cardholder_requirementsSchema),
    spending_controls: Schema.Unknown,
    status: Schema.Literals(["active", "blocked", "inactive"]),
    type: Schema.Literals(["company", "individual"]),
  });
export type GetIssuingCardholdersCardholderOutput =
  typeof GetIssuingCardholdersCardholderOutput.Type;

// The operation
/**
 * Retrieve a cardholder
 *
 * <p>Retrieves an Issuing <code>Cardholder</code> object.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetIssuingCardholdersCardholder =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GetIssuingCardholdersCardholderInput,
    outputSchema: GetIssuingCardholdersCardholderOutput,
  }));
