import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import {
  BadRequest,
  Forbidden,
  NotFound,
  Conflict,
  UnprocessableEntity,
} from "../../errors.ts";

// Input Schema
export const AdjustOrganizationBillingCreditBalanceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization_id: Schema.String.pipe(T.PathParam()),
    amount: Schema.Number,
    action: Schema.Literals(["increase", "decrease"]),
    currency: Schema.optional(Schema.String),
    idempotency_key: Schema.String,
    note: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/organizations/{organization_id}/billing/credits",
    }),
  );
export type AdjustOrganizationBillingCreditBalanceInput =
  typeof AdjustOrganizationBillingCreditBalanceInput.Type;

// Output Schema
export const AdjustOrganizationBillingCreditBalanceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String,
    id: Schema.String,
    payer_id: Schema.String,
    amount: Schema.Number,
    currency: Schema.String,
    source_type: Schema.String,
    source_id: Schema.String,
    note: Schema.optional(Schema.NullOr(Schema.String)),
    created_at: Schema.String,
  });
export type AdjustOrganizationBillingCreditBalanceOutput =
  typeof AdjustOrganizationBillingCreditBalanceOutput.Type;

// The operation
/**
 * Adjust an organization's credit balance
 *
 * Increases or decreases the credit balance for the specified organization.
 * Each adjustment is recorded as a ledger entry. The idempotency_key parameter
 * ensures that duplicate requests are safely handled.
 *
 * @param organization_id - The ID of the organization whose credit balance to adjust
 */
export const AdjustOrganizationBillingCreditBalance =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AdjustOrganizationBillingCreditBalanceInput,
    outputSchema: AdjustOrganizationBillingCreditBalanceOutput,
    errors: [
      BadRequest,
      Forbidden,
      NotFound,
      Conflict,
      UnprocessableEntity,
    ] as const,
  }));
