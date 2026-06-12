import * as Schema from "effect/Schema";
import { tax_product_registrations_resource_country_optionsSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const PostTaxRegistrationsIdInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    active_from: Schema.optional(Schema.Unknown),
    expand: Schema.optional(Schema.Array(Schema.String)),
    expires_at: Schema.optional(Schema.Unknown),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/tax/registrations/{id}",
      contentType: "form-urlencoded",
    }),
  );
export type PostTaxRegistrationsIdInput =
  typeof PostTaxRegistrationsIdInput.Type;

// Output Schema
export const PostTaxRegistrationsIdOutput =
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
export type PostTaxRegistrationsIdOutput =
  typeof PostTaxRegistrationsIdOutput.Type;

// The operation
/**
 * Update a registration
 *
 * <p>Updates an existing Tax <code>Registration</code> object.</p>
 * <p>A registration cannot be deleted after it has been created. If you wish to end a registration you may do so by setting <code>expires_at</code>.</p>
 */
export const PostTaxRegistrationsId = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PostTaxRegistrationsIdInput,
    outputSchema: PostTaxRegistrationsIdOutput,
  }),
);
