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
export const PostAccountsAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    account: Schema.String.pipe(T.PathParam()),
    account_token: Schema.optional(Schema.String),
    business_profile: Schema.optional(
      Schema.Struct({
        annual_revenue: Schema.optional(
          Schema.Struct({
            amount: Schema.Number,
            currency: Schema.String,
            fiscal_year_end: Schema.String,
          }),
        ),
        estimated_worker_count: Schema.optional(Schema.Number),
        mcc: Schema.optional(Schema.String),
        minority_owned_business_designation: Schema.optional(
          Schema.Array(
            Schema.Literals([
              "lgbtqi_owned_business",
              "minority_owned_business",
              "none_of_these_apply",
              "prefer_not_to_answer",
              "women_owned_business",
            ]),
          ),
        ),
        monthly_estimated_revenue: Schema.optional(
          Schema.Struct({
            amount: Schema.Number,
            currency: Schema.String,
          }),
        ),
        name: Schema.optional(Schema.String),
        product_description: Schema.optional(Schema.String),
        support_address: Schema.optional(
          Schema.Struct({
            city: Schema.optional(Schema.String),
            country: Schema.optional(Schema.String),
            line1: Schema.optional(Schema.String),
            line2: Schema.optional(Schema.String),
            postal_code: Schema.optional(Schema.String),
            state: Schema.optional(Schema.String),
          }),
        ),
        support_email: Schema.optional(Schema.String),
        support_phone: Schema.optional(Schema.String),
        support_url: Schema.optional(Schema.Unknown),
        url: Schema.optional(Schema.String),
      }),
    ),
    business_type: Schema.optional(
      Schema.Literals([
        "company",
        "government_entity",
        "individual",
        "non_profit",
      ]),
    ),
    capabilities: Schema.optional(
      Schema.Struct({
        acss_debit_payments: Schema.optional(
          Schema.Struct({
            requested: Schema.optional(Schema.Boolean),
          }),
        ),
        affirm_payments: Schema.optional(
          Schema.Struct({
            requested: Schema.optional(Schema.Boolean),
          }),
        ),
        afterpay_clearpay_payments: Schema.optional(
          Schema.Struct({
            requested: Schema.optional(Schema.Boolean),
          }),
        ),
        alma_payments: Schema.optional(
          Schema.Struct({
            requested: Schema.optional(Schema.Boolean),
          }),
        ),
        amazon_pay_payments: Schema.optional(
          Schema.Struct({
            requested: Schema.optional(Schema.Boolean),
          }),
        ),
        au_becs_debit_payments: Schema.optional(
          Schema.Struct({
            requested: Schema.optional(Schema.Boolean),
          }),
        ),
        bacs_debit_payments: Schema.optional(
          Schema.Struct({
            requested: Schema.optional(Schema.Boolean),
          }),
        ),
        bancontact_payments: Schema.optional(
          Schema.Struct({
            requested: Schema.optional(Schema.Boolean),
          }),
        ),
        bank_transfer_payments: Schema.optional(
          Schema.Struct({
            requested: Schema.optional(Schema.Boolean),
          }),
        ),
        billie_payments: Schema.optional(
          Schema.Struct({
            requested: Schema.optional(Schema.Boolean),
          }),
        ),
        blik_payments: Schema.optional(
          Schema.Struct({
            requested: Schema.optional(Schema.Boolean),
          }),
        ),
        boleto_payments: Schema.optional(
          Schema.Struct({
            requested: Schema.optional(Schema.Boolean),
          }),
        ),
        card_issuing: Schema.optional(
          Schema.Struct({
            requested: Schema.optional(Schema.Boolean),
          }),
        ),
        card_payments: Schema.optional(
          Schema.Struct({
            requested: Schema.optional(Schema.Boolean),
          }),
        ),
        cartes_bancaires_payments: Schema.optional(
          Schema.Struct({
            requested: Schema.optional(Schema.Boolean),
          }),
        ),
        cashapp_payments: Schema.optional(
          Schema.Struct({
            requested: Schema.optional(Schema.Boolean),
          }),
        ),
        crypto_payments: Schema.optional(
          Schema.Struct({
            requested: Schema.optional(Schema.Boolean),
          }),
        ),
        eps_payments: Schema.optional(
          Schema.Struct({
            requested: Schema.optional(Schema.Boolean),
          }),
        ),
        fpx_payments: Schema.optional(
          Schema.Struct({
            requested: Schema.optional(Schema.Boolean),
          }),
        ),
        gb_bank_transfer_payments: Schema.optional(
          Schema.Struct({
            requested: Schema.optional(Schema.Boolean),
          }),
        ),
        giropay_payments: Schema.optional(
          Schema.Struct({
            requested: Schema.optional(Schema.Boolean),
          }),
        ),
        grabpay_payments: Schema.optional(
          Schema.Struct({
            requested: Schema.optional(Schema.Boolean),
          }),
        ),
        ideal_payments: Schema.optional(
          Schema.Struct({
            requested: Schema.optional(Schema.Boolean),
          }),
        ),
        india_international_payments: Schema.optional(
          Schema.Struct({
            requested: Schema.optional(Schema.Boolean),
          }),
        ),
        jcb_payments: Schema.optional(
          Schema.Struct({
            requested: Schema.optional(Schema.Boolean),
          }),
        ),
        jp_bank_transfer_payments: Schema.optional(
          Schema.Struct({
            requested: Schema.optional(Schema.Boolean),
          }),
        ),
        kakao_pay_payments: Schema.optional(
          Schema.Struct({
            requested: Schema.optional(Schema.Boolean),
          }),
        ),
        klarna_payments: Schema.optional(
          Schema.Struct({
            requested: Schema.optional(Schema.Boolean),
          }),
        ),
        konbini_payments: Schema.optional(
          Schema.Struct({
            requested: Schema.optional(Schema.Boolean),
          }),
        ),
        kr_card_payments: Schema.optional(
          Schema.Struct({
            requested: Schema.optional(Schema.Boolean),
          }),
        ),
        legacy_payments: Schema.optional(
          Schema.Struct({
            requested: Schema.optional(Schema.Boolean),
          }),
        ),
        link_payments: Schema.optional(
          Schema.Struct({
            requested: Schema.optional(Schema.Boolean),
          }),
        ),
        mb_way_payments: Schema.optional(
          Schema.Struct({
            requested: Schema.optional(Schema.Boolean),
          }),
        ),
        mobilepay_payments: Schema.optional(
          Schema.Struct({
            requested: Schema.optional(Schema.Boolean),
          }),
        ),
        multibanco_payments: Schema.optional(
          Schema.Struct({
            requested: Schema.optional(Schema.Boolean),
          }),
        ),
        mx_bank_transfer_payments: Schema.optional(
          Schema.Struct({
            requested: Schema.optional(Schema.Boolean),
          }),
        ),
        naver_pay_payments: Schema.optional(
          Schema.Struct({
            requested: Schema.optional(Schema.Boolean),
          }),
        ),
        nz_bank_account_becs_debit_payments: Schema.optional(
          Schema.Struct({
            requested: Schema.optional(Schema.Boolean),
          }),
        ),
        oxxo_payments: Schema.optional(
          Schema.Struct({
            requested: Schema.optional(Schema.Boolean),
          }),
        ),
        p24_payments: Schema.optional(
          Schema.Struct({
            requested: Schema.optional(Schema.Boolean),
          }),
        ),
        pay_by_bank_payments: Schema.optional(
          Schema.Struct({
            requested: Schema.optional(Schema.Boolean),
          }),
        ),
        payco_payments: Schema.optional(
          Schema.Struct({
            requested: Schema.optional(Schema.Boolean),
          }),
        ),
        paynow_payments: Schema.optional(
          Schema.Struct({
            requested: Schema.optional(Schema.Boolean),
          }),
        ),
        payto_payments: Schema.optional(
          Schema.Struct({
            requested: Schema.optional(Schema.Boolean),
          }),
        ),
        pix_payments: Schema.optional(
          Schema.Struct({
            requested: Schema.optional(Schema.Boolean),
          }),
        ),
        promptpay_payments: Schema.optional(
          Schema.Struct({
            requested: Schema.optional(Schema.Boolean),
          }),
        ),
        revolut_pay_payments: Schema.optional(
          Schema.Struct({
            requested: Schema.optional(Schema.Boolean),
          }),
        ),
        samsung_pay_payments: Schema.optional(
          Schema.Struct({
            requested: Schema.optional(Schema.Boolean),
          }),
        ),
        satispay_payments: Schema.optional(
          Schema.Struct({
            requested: Schema.optional(Schema.Boolean),
          }),
        ),
        sepa_bank_transfer_payments: Schema.optional(
          Schema.Struct({
            requested: Schema.optional(Schema.Boolean),
          }),
        ),
        sepa_debit_payments: Schema.optional(
          Schema.Struct({
            requested: Schema.optional(Schema.Boolean),
          }),
        ),
        sofort_payments: Schema.optional(
          Schema.Struct({
            requested: Schema.optional(Schema.Boolean),
          }),
        ),
        swish_payments: Schema.optional(
          Schema.Struct({
            requested: Schema.optional(Schema.Boolean),
          }),
        ),
        tax_reporting_us_1099_k: Schema.optional(
          Schema.Struct({
            requested: Schema.optional(Schema.Boolean),
          }),
        ),
        tax_reporting_us_1099_misc: Schema.optional(
          Schema.Struct({
            requested: Schema.optional(Schema.Boolean),
          }),
        ),
        transfers: Schema.optional(
          Schema.Struct({
            requested: Schema.optional(Schema.Boolean),
          }),
        ),
        treasury: Schema.optional(
          Schema.Struct({
            requested: Schema.optional(Schema.Boolean),
          }),
        ),
        twint_payments: Schema.optional(
          Schema.Struct({
            requested: Schema.optional(Schema.Boolean),
          }),
        ),
        upi_payments: Schema.optional(
          Schema.Struct({
            requested: Schema.optional(Schema.Boolean),
          }),
        ),
        us_bank_account_ach_payments: Schema.optional(
          Schema.Struct({
            requested: Schema.optional(Schema.Boolean),
          }),
        ),
        us_bank_transfer_payments: Schema.optional(
          Schema.Struct({
            requested: Schema.optional(Schema.Boolean),
          }),
        ),
        zip_payments: Schema.optional(
          Schema.Struct({
            requested: Schema.optional(Schema.Boolean),
          }),
        ),
      }),
    ),
    company: Schema.optional(
      Schema.Struct({
        address: Schema.optional(
          Schema.Struct({
            city: Schema.optional(Schema.String),
            country: Schema.optional(Schema.String),
            line1: Schema.optional(Schema.String),
            line2: Schema.optional(Schema.String),
            postal_code: Schema.optional(Schema.String),
            state: Schema.optional(Schema.String),
          }),
        ),
        address_kana: Schema.optional(
          Schema.Struct({
            city: Schema.optional(Schema.String),
            country: Schema.optional(Schema.String),
            line1: Schema.optional(Schema.String),
            line2: Schema.optional(Schema.String),
            postal_code: Schema.optional(Schema.String),
            state: Schema.optional(Schema.String),
            town: Schema.optional(Schema.String),
          }),
        ),
        address_kanji: Schema.optional(
          Schema.Struct({
            city: Schema.optional(Schema.String),
            country: Schema.optional(Schema.String),
            line1: Schema.optional(Schema.String),
            line2: Schema.optional(Schema.String),
            postal_code: Schema.optional(Schema.String),
            state: Schema.optional(Schema.String),
            town: Schema.optional(Schema.String),
          }),
        ),
        directors_provided: Schema.optional(Schema.Boolean),
        directorship_declaration: Schema.optional(
          Schema.Struct({
            date: Schema.optional(Schema.Number),
            ip: Schema.optional(Schema.String),
            user_agent: Schema.optional(Schema.String),
          }),
        ),
        executives_provided: Schema.optional(Schema.Boolean),
        export_license_id: Schema.optional(Schema.String),
        export_purpose_code: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        name_kana: Schema.optional(Schema.String),
        name_kanji: Schema.optional(Schema.String),
        owners_provided: Schema.optional(Schema.Boolean),
        ownership_declaration: Schema.optional(
          Schema.Struct({
            date: Schema.optional(Schema.Number),
            ip: Schema.optional(Schema.String),
            user_agent: Schema.optional(Schema.String),
          }),
        ),
        ownership_exemption_reason: Schema.optional(
          Schema.Literals([
            "",
            "qualified_entity_exceeds_ownership_threshold",
            "qualifies_as_financial_institution",
          ]),
        ),
        phone: Schema.optional(Schema.String),
        registration_date: Schema.optional(Schema.Unknown),
        registration_number: Schema.optional(Schema.String),
        representative_declaration: Schema.optional(
          Schema.Struct({
            date: Schema.optional(Schema.Number),
            ip: Schema.optional(Schema.String),
            user_agent: Schema.optional(Schema.String),
          }),
        ),
        structure: Schema.optional(
          Schema.Literals([
            "",
            "free_zone_establishment",
            "free_zone_llc",
            "government_instrumentality",
            "governmental_unit",
            "incorporated_non_profit",
            "incorporated_partnership",
            "limited_liability_partnership",
            "llc",
            "multi_member_llc",
            "private_company",
            "private_corporation",
            "private_partnership",
            "public_company",
            "public_corporation",
            "public_partnership",
            "registered_charity",
            "single_member_llc",
            "sole_establishment",
            "sole_proprietorship",
            "tax_exempt_government_instrumentality",
            "unincorporated_association",
            "unincorporated_non_profit",
            "unincorporated_partnership",
          ]),
        ),
        tax_id: Schema.optional(Schema.String),
        tax_id_registrar: Schema.optional(Schema.String),
        vat_id: Schema.optional(Schema.String),
        verification: Schema.optional(
          Schema.Struct({
            document: Schema.optional(
              Schema.Struct({
                back: Schema.optional(Schema.String),
                front: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
      }),
    ),
    default_currency: Schema.optional(Schema.String),
    documents: Schema.optional(
      Schema.Struct({
        bank_account_ownership_verification: Schema.optional(
          Schema.Struct({
            files: Schema.optional(Schema.Array(Schema.String)),
          }),
        ),
        company_license: Schema.optional(
          Schema.Struct({
            files: Schema.optional(Schema.Array(Schema.String)),
          }),
        ),
        company_memorandum_of_association: Schema.optional(
          Schema.Struct({
            files: Schema.optional(Schema.Array(Schema.String)),
          }),
        ),
        company_ministerial_decree: Schema.optional(
          Schema.Struct({
            files: Schema.optional(Schema.Array(Schema.String)),
          }),
        ),
        company_registration_verification: Schema.optional(
          Schema.Struct({
            files: Schema.optional(Schema.Array(Schema.String)),
          }),
        ),
        company_tax_id_verification: Schema.optional(
          Schema.Struct({
            files: Schema.optional(Schema.Array(Schema.String)),
          }),
        ),
        proof_of_address: Schema.optional(
          Schema.Struct({
            files: Schema.optional(Schema.Array(Schema.String)),
          }),
        ),
        proof_of_registration: Schema.optional(
          Schema.Struct({
            files: Schema.optional(Schema.Array(Schema.String)),
            signer: Schema.optional(
              Schema.Struct({
                person: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
        proof_of_ultimate_beneficial_ownership: Schema.optional(
          Schema.Struct({
            files: Schema.optional(Schema.Array(Schema.String)),
            signer: Schema.optional(
              Schema.Struct({
                person: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
      }),
    ),
    email: Schema.optional(Schema.String),
    expand: Schema.optional(Schema.Array(Schema.String)),
    external_account: Schema.optional(Schema.String),
    groups: Schema.optional(
      Schema.Struct({
        payments_pricing: Schema.optional(Schema.Unknown),
      }),
    ),
    individual: Schema.optional(
      Schema.Struct({
        address: Schema.optional(
          Schema.Struct({
            city: Schema.optional(Schema.String),
            country: Schema.optional(Schema.String),
            line1: Schema.optional(Schema.String),
            line2: Schema.optional(Schema.String),
            postal_code: Schema.optional(Schema.String),
            state: Schema.optional(Schema.String),
          }),
        ),
        address_kana: Schema.optional(
          Schema.Struct({
            city: Schema.optional(Schema.String),
            country: Schema.optional(Schema.String),
            line1: Schema.optional(Schema.String),
            line2: Schema.optional(Schema.String),
            postal_code: Schema.optional(Schema.String),
            state: Schema.optional(Schema.String),
            town: Schema.optional(Schema.String),
          }),
        ),
        address_kanji: Schema.optional(
          Schema.Struct({
            city: Schema.optional(Schema.String),
            country: Schema.optional(Schema.String),
            line1: Schema.optional(Schema.String),
            line2: Schema.optional(Schema.String),
            postal_code: Schema.optional(Schema.String),
            state: Schema.optional(Schema.String),
            town: Schema.optional(Schema.String),
          }),
        ),
        dob: Schema.optional(Schema.Unknown),
        email: Schema.optional(Schema.String),
        first_name: Schema.optional(Schema.String),
        first_name_kana: Schema.optional(Schema.String),
        first_name_kanji: Schema.optional(Schema.String),
        full_name_aliases: Schema.optional(Schema.Unknown),
        gender: Schema.optional(Schema.String),
        id_number: Schema.optional(Schema.String),
        id_number_secondary: Schema.optional(Schema.String),
        last_name: Schema.optional(Schema.String),
        last_name_kana: Schema.optional(Schema.String),
        last_name_kanji: Schema.optional(Schema.String),
        maiden_name: Schema.optional(Schema.String),
        metadata: Schema.optional(Schema.Unknown),
        phone: Schema.optional(Schema.String),
        political_exposure: Schema.optional(
          Schema.Literals(["existing", "none"]),
        ),
        registered_address: Schema.optional(
          Schema.Struct({
            city: Schema.optional(Schema.String),
            country: Schema.optional(Schema.String),
            line1: Schema.optional(Schema.String),
            line2: Schema.optional(Schema.String),
            postal_code: Schema.optional(Schema.String),
            state: Schema.optional(Schema.String),
          }),
        ),
        relationship: Schema.optional(
          Schema.Struct({
            director: Schema.optional(Schema.Boolean),
            executive: Schema.optional(Schema.Boolean),
            owner: Schema.optional(Schema.Boolean),
            percent_ownership: Schema.optional(Schema.Unknown),
            title: Schema.optional(Schema.String),
          }),
        ),
        ssn_last_4: Schema.optional(Schema.String),
        verification: Schema.optional(
          Schema.Struct({
            additional_document: Schema.optional(
              Schema.Struct({
                back: Schema.optional(Schema.String),
                front: Schema.optional(Schema.String),
              }),
            ),
            document: Schema.optional(
              Schema.Struct({
                back: Schema.optional(Schema.String),
                front: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
      }),
    ),
    metadata: Schema.optional(Schema.Unknown),
    settings: Schema.optional(
      Schema.Struct({
        bacs_debit_payments: Schema.optional(
          Schema.Struct({
            display_name: Schema.optional(Schema.String),
          }),
        ),
        branding: Schema.optional(
          Schema.Struct({
            icon: Schema.optional(Schema.String),
            logo: Schema.optional(Schema.String),
            primary_color: Schema.optional(Schema.String),
            secondary_color: Schema.optional(Schema.String),
          }),
        ),
        card_issuing: Schema.optional(
          Schema.Struct({
            tos_acceptance: Schema.optional(
              Schema.Struct({
                date: Schema.optional(Schema.Number),
                ip: Schema.optional(Schema.String),
                user_agent: Schema.optional(Schema.Unknown),
              }),
            ),
          }),
        ),
        card_payments: Schema.optional(
          Schema.Struct({
            decline_on: Schema.optional(
              Schema.Struct({
                avs_failure: Schema.optional(Schema.Boolean),
                cvc_failure: Schema.optional(Schema.Boolean),
              }),
            ),
            statement_descriptor_prefix: Schema.optional(Schema.String),
            statement_descriptor_prefix_kana: Schema.optional(Schema.Unknown),
            statement_descriptor_prefix_kanji: Schema.optional(Schema.Unknown),
          }),
        ),
        invoices: Schema.optional(
          Schema.Struct({
            default_account_tax_ids: Schema.optional(Schema.Unknown),
            hosted_payment_method_save: Schema.optional(
              Schema.Literals(["always", "never", "offer"]),
            ),
          }),
        ),
        payments: Schema.optional(
          Schema.Struct({
            statement_descriptor: Schema.optional(Schema.String),
            statement_descriptor_kana: Schema.optional(Schema.String),
            statement_descriptor_kanji: Schema.optional(Schema.String),
          }),
        ),
        payouts: Schema.optional(
          Schema.Struct({
            debit_negative_balances: Schema.optional(Schema.Boolean),
            schedule: Schema.optional(
              Schema.Struct({
                delay_days: Schema.optional(Schema.Unknown),
                interval: Schema.optional(
                  Schema.Literals(["daily", "manual", "monthly", "weekly"]),
                ),
                monthly_anchor: Schema.optional(Schema.Number),
                monthly_payout_days: Schema.optional(
                  Schema.Array(Schema.Number),
                ),
                weekly_anchor: Schema.optional(
                  Schema.Literals([
                    "friday",
                    "monday",
                    "saturday",
                    "sunday",
                    "thursday",
                    "tuesday",
                    "wednesday",
                  ]),
                ),
                weekly_payout_days: Schema.optional(
                  Schema.Array(
                    Schema.Literals([
                      "friday",
                      "monday",
                      "thursday",
                      "tuesday",
                      "wednesday",
                    ]),
                  ),
                ),
              }),
            ),
            statement_descriptor: Schema.optional(Schema.String),
          }),
        ),
        treasury: Schema.optional(
          Schema.Struct({
            tos_acceptance: Schema.optional(
              Schema.Struct({
                date: Schema.optional(Schema.Number),
                ip: Schema.optional(Schema.String),
                user_agent: Schema.optional(Schema.Unknown),
              }),
            ),
          }),
        ),
      }),
    ),
    tos_acceptance: Schema.optional(
      Schema.Struct({
        date: Schema.optional(Schema.Number),
        ip: Schema.optional(Schema.String),
        service_agreement: Schema.optional(Schema.String),
        user_agent: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/accounts/{account}",
      contentType: "form-urlencoded",
    }),
  );
export type PostAccountsAccountInput = typeof PostAccountsAccountInput.Type;

// Output Schema
export const PostAccountsAccountOutput =
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
export type PostAccountsAccountOutput = typeof PostAccountsAccountOutput.Type;

// The operation
/**
 * Update an account
 *
 * <p>Updates a <a href="/connect/accounts">connected account</a> by setting the values of the parameters passed. Any parameters not provided are
 * left unchanged.</p>
 * <p>For accounts where <a href="/api/accounts/object#account_object-controller-requirement_collection">controller.requirement_collection</a>
 * is <code>application</code>, which includes Custom accounts, you can update any information on the account.</p>
 * <p>For accounts where <a href="/api/accounts/object#account_object-controller-requirement_collection">controller.requirement_collection</a>
 * is <code>stripe</code>, which includes Standard and Express accounts, you can update all information until you create
 * an <a href="/api/account_links">Account Link</a> or <a href="/api/account_sessions">Account Session</a> to start Connect onboarding,
 * after which some properties can no longer be updated.</p>
 * <p>To update your own account, use the <a href="https://dashboard.stripe.com/settings/account">Dashboard</a>. Refer to our
 * <a href="/docs/connect/updating-accounts">Connect</a> documentation to learn more about updating accounts.</p>
 */
export const PostAccountsAccount = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PostAccountsAccountInput,
  outputSchema: PostAccountsAccountOutput,
}));
