import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import {
  BadRequest,
  Forbidden,
  NotFound,
  UnprocessableEntity,
} from "../../errors.ts";

// Input Schema
export const GetOrganizationBillingCreditBalanceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/organizations/{organization_id}/billing/credits",
    }),
  );
export type GetOrganizationBillingCreditBalanceInput =
  typeof GetOrganizationBillingCreditBalanceInput.Type;

// Output Schema
export const GetOrganizationBillingCreditBalanceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String,
    balance: Schema.NullOr(
      Schema.Struct({
        amount: Schema.Number,
        amount_formatted: Schema.String,
        currency: Schema.String,
        currency_symbol: Schema.String,
      }),
    ),
  });
export type GetOrganizationBillingCreditBalanceOutput =
  typeof GetOrganizationBillingCreditBalanceOutput.Type;

// The operation
/**
 * Retrieve an organization's credit balance
 *
 * Retrieves the current credit balance for the specified organization.
 * Credits can be applied during checkout to reduce the charge or automatically applied to upcoming recurring charges.
 *
 * @param organization_id - The ID of the organization whose credit balance to retrieve
 */
export const GetOrganizationBillingCreditBalance =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GetOrganizationBillingCreditBalanceInput,
    outputSchema: GetOrganizationBillingCreditBalanceOutput,
    errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
  }));
