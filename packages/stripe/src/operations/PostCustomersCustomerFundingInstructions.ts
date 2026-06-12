import * as Schema from "effect/Schema";
import { funding_instructions_bank_transferSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const PostCustomersCustomerFundingInstructionsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customer: Schema.String.pipe(T.PathParam()),
    bank_transfer: Schema.Struct({
      eu_bank_transfer: Schema.optional(
        Schema.Struct({
          country: Schema.String,
        }),
      ),
      requested_address_types: Schema.optional(
        Schema.Array(Schema.Literals(["iban", "sort_code", "spei", "zengin"])),
      ),
      type: Schema.Literals([
        "eu_bank_transfer",
        "gb_bank_transfer",
        "jp_bank_transfer",
        "mx_bank_transfer",
        "us_bank_transfer",
      ]),
    }),
    currency: Schema.String,
    expand: Schema.optional(Schema.Array(Schema.String)),
    funding_type: Schema.Literals(["bank_transfer"]),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/customers/{customer}/funding_instructions",
      contentType: "form-urlencoded",
    }),
  );
export type PostCustomersCustomerFundingInstructionsInput =
  typeof PostCustomersCustomerFundingInstructionsInput.Type;

// Output Schema
export const PostCustomersCustomerFundingInstructionsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bank_transfer: Schema.suspend(
      () => funding_instructions_bank_transferSchema,
    ),
    currency: Schema.String,
    funding_type: Schema.Literals(["bank_transfer"]),
    livemode: Schema.Boolean,
    object: Schema.Literals(["funding_instructions"]),
  });
export type PostCustomersCustomerFundingInstructionsOutput =
  typeof PostCustomersCustomerFundingInstructionsOutput.Type;

// The operation
/**
 * Create or retrieve funding instructions for a customer cash balance
 *
 * <p>Retrieve funding instructions for a customer cash balance. If funding instructions do not yet exist for the customer, new
 * funding instructions will be created. If funding instructions have already been created for a given customer, the same
 * funding instructions will be retrieved. In other words, we will return the same funding instructions each time.</p>
 */
export const PostCustomersCustomerFundingInstructions =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PostCustomersCustomerFundingInstructionsInput,
    outputSchema: PostCustomersCustomerFundingInstructionsOutput,
  }));
