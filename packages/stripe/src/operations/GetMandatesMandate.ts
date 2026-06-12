import * as Schema from "effect/Schema";
import {
  customer_acceptanceSchema,
  mandate_multi_useSchema,
  mandate_payment_method_detailsSchema,
  mandate_single_useSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetMandatesMandateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mandate: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/mandates/{mandate}",
      contentType: "form-urlencoded",
    }),
  );
export type GetMandatesMandateInput = typeof GetMandatesMandateInput.Type;

// Output Schema
export const GetMandatesMandateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customer_acceptance: Schema.suspend(() => customer_acceptanceSchema),
    id: Schema.String,
    livemode: Schema.Boolean,
    multi_use: Schema.optional(Schema.suspend(() => mandate_multi_useSchema)),
    object: Schema.Literals(["mandate"]),
    on_behalf_of: Schema.optional(Schema.String),
    payment_method: Schema.Unknown,
    payment_method_details: Schema.suspend(
      () => mandate_payment_method_detailsSchema,
    ),
    single_use: Schema.optional(Schema.suspend(() => mandate_single_useSchema)),
    status: Schema.Literals(["active", "inactive", "pending"]),
    type: Schema.Literals(["multi_use", "single_use"]),
  });
export type GetMandatesMandateOutput = typeof GetMandatesMandateOutput.Type;

// The operation
/**
 * Retrieve a Mandate
 *
 * <p>Retrieves a Mandate object.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetMandatesMandate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetMandatesMandateInput,
  outputSchema: GetMandatesMandateOutput,
}));
