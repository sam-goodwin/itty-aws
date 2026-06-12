import * as Schema from "effect/Schema";
import {
  account_capabilitiesSchema,
  account_future_requirementsSchema,
  account_requirementsSchema,
  account_tos_acceptanceSchema,
  account_unification_account_controllerSchema,
  external_accountSchema,
  legal_entity_companySchema,
  personSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetAccountsAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    account: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/accounts/{account}",
      contentType: "form-urlencoded",
    }),
  );
export type GetAccountsAccountInput = typeof GetAccountsAccountInput.Type;

// Output Schema
export const GetAccountsAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    business_profile: Schema.optional(Schema.Unknown),
    business_type: Schema.optional(
      Schema.NullOr(
        Schema.Literals([
          "company",
          "government_entity",
          "individual",
          "non_profit",
        ]),
      ),
    ),
    capabilities: Schema.optional(
      Schema.suspend(() => account_capabilitiesSchema),
    ),
    charges_enabled: Schema.optional(Schema.Boolean),
    company: Schema.optional(Schema.suspend(() => legal_entity_companySchema)),
    controller: Schema.optional(
      Schema.suspend(() => account_unification_account_controllerSchema),
    ),
    country: Schema.optional(Schema.String),
    created: Schema.optional(Schema.Number),
    default_currency: Schema.optional(Schema.String),
    details_submitted: Schema.optional(Schema.Boolean),
    email: Schema.optional(Schema.NullOr(Schema.String)),
    external_accounts: Schema.optional(
      Schema.Struct({
        data: Schema.Array(Schema.suspend(() => external_accountSchema)),
        has_more: Schema.Boolean,
        object: Schema.Literals(["list"]),
        url: Schema.String,
      }),
    ),
    future_requirements: Schema.optional(
      Schema.suspend(() => account_future_requirementsSchema),
    ),
    groups: Schema.optional(Schema.Unknown),
    id: Schema.String,
    individual: Schema.optional(Schema.suspend(() => personSchema)),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    object: Schema.Literals(["account"]),
    payouts_enabled: Schema.optional(Schema.Boolean),
    requirements: Schema.optional(
      Schema.suspend(() => account_requirementsSchema),
    ),
    settings: Schema.optional(Schema.Unknown),
    tos_acceptance: Schema.optional(
      Schema.suspend(() => account_tos_acceptanceSchema),
    ),
    type: Schema.optional(
      Schema.Literals(["custom", "express", "none", "standard"]),
    ),
  });
export type GetAccountsAccountOutput = typeof GetAccountsAccountOutput.Type;

// The operation
/**
 * Retrieve account
 *
 * <p>Retrieves the details of an account.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetAccountsAccount = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetAccountsAccountInput,
  outputSchema: GetAccountsAccountOutput,
}));
