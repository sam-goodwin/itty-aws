import * as Schema from "effect/Schema";
import { tax_product_registrations_resource_country_optionsSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetTaxRegistrationsIdInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/tax/registrations/{id}",
      contentType: "form-urlencoded",
    }),
  );
export type GetTaxRegistrationsIdInput = typeof GetTaxRegistrationsIdInput.Type;

// Output Schema
export const GetTaxRegistrationsIdOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    active_from: Schema.Number,
    country: Schema.String,
    country_options: Schema.suspend(
      () => tax_product_registrations_resource_country_optionsSchema,
    ),
    created: Schema.Number,
    expires_at: Schema.NullOr(Schema.Number),
    id: Schema.String,
    livemode: Schema.Boolean,
    object: Schema.Literals(["tax.registration"]),
    status: Schema.Literals(["active", "expired", "scheduled"]),
  });
export type GetTaxRegistrationsIdOutput =
  typeof GetTaxRegistrationsIdOutput.Type;

// The operation
/**
 * Retrieve a registration
 *
 * <p>Returns a Tax <code>Registration</code> object.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetTaxRegistrationsId = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetTaxRegistrationsIdInput,
    outputSchema: GetTaxRegistrationsIdOutput,
  }),
);
