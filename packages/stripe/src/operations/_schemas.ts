import * as Schema from "effect/Schema";
import {
  SensitiveOutputString,
  SensitiveOutputNullableString,
} from "../sensitive.ts";

export const account_capabilitiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    acss_debit_payments: Schema.optional(
      Schema.Literals(["active", "inactive", "pending"]),
    ),
    affirm_payments: Schema.optional(
      Schema.Literals(["active", "inactive", "pending"]),
    ),
    afterpay_clearpay_payments: Schema.optional(
      Schema.Literals(["active", "inactive", "pending"]),
    ),
    alma_payments: Schema.optional(
      Schema.Literals(["active", "inactive", "pending"]),
    ),
    amazon_pay_payments: Schema.optional(
      Schema.Literals(["active", "inactive", "pending"]),
    ),
    au_becs_debit_payments: Schema.optional(
      Schema.Literals(["active", "inactive", "pending"]),
    ),
    bacs_debit_payments: Schema.optional(
      Schema.Literals(["active", "inactive", "pending"]),
    ),
    bancontact_payments: Schema.optional(
      Schema.Literals(["active", "inactive", "pending"]),
    ),
    bank_transfer_payments: Schema.optional(
      Schema.Literals(["active", "inactive", "pending"]),
    ),
    billie_payments: Schema.optional(
      Schema.Literals(["active", "inactive", "pending"]),
    ),
    blik_payments: Schema.optional(
      Schema.Literals(["active", "inactive", "pending"]),
    ),
    boleto_payments: Schema.optional(
      Schema.Literals(["active", "inactive", "pending"]),
    ),
    card_issuing: Schema.optional(
      Schema.Literals(["active", "inactive", "pending"]),
    ),
    card_payments: Schema.optional(
      Schema.Literals(["active", "inactive", "pending"]),
    ),
    cartes_bancaires_payments: Schema.optional(
      Schema.Literals(["active", "inactive", "pending"]),
    ),
    cashapp_payments: Schema.optional(
      Schema.Literals(["active", "inactive", "pending"]),
    ),
    crypto_payments: Schema.optional(
      Schema.Literals(["active", "inactive", "pending"]),
    ),
    eps_payments: Schema.optional(
      Schema.Literals(["active", "inactive", "pending"]),
    ),
    fpx_payments: Schema.optional(
      Schema.Literals(["active", "inactive", "pending"]),
    ),
    gb_bank_transfer_payments: Schema.optional(
      Schema.Literals(["active", "inactive", "pending"]),
    ),
    giropay_payments: Schema.optional(
      Schema.Literals(["active", "inactive", "pending"]),
    ),
    grabpay_payments: Schema.optional(
      Schema.Literals(["active", "inactive", "pending"]),
    ),
    ideal_payments: Schema.optional(
      Schema.Literals(["active", "inactive", "pending"]),
    ),
    india_international_payments: Schema.optional(
      Schema.Literals(["active", "inactive", "pending"]),
    ),
    jcb_payments: Schema.optional(
      Schema.Literals(["active", "inactive", "pending"]),
    ),
    jp_bank_transfer_payments: Schema.optional(
      Schema.Literals(["active", "inactive", "pending"]),
    ),
    kakao_pay_payments: Schema.optional(
      Schema.Literals(["active", "inactive", "pending"]),
    ),
    klarna_payments: Schema.optional(
      Schema.Literals(["active", "inactive", "pending"]),
    ),
    konbini_payments: Schema.optional(
      Schema.Literals(["active", "inactive", "pending"]),
    ),
    kr_card_payments: Schema.optional(
      Schema.Literals(["active", "inactive", "pending"]),
    ),
    legacy_payments: Schema.optional(
      Schema.Literals(["active", "inactive", "pending"]),
    ),
    link_payments: Schema.optional(
      Schema.Literals(["active", "inactive", "pending"]),
    ),
    mb_way_payments: Schema.optional(
      Schema.Literals(["active", "inactive", "pending"]),
    ),
    mobilepay_payments: Schema.optional(
      Schema.Literals(["active", "inactive", "pending"]),
    ),
    multibanco_payments: Schema.optional(
      Schema.Literals(["active", "inactive", "pending"]),
    ),
    mx_bank_transfer_payments: Schema.optional(
      Schema.Literals(["active", "inactive", "pending"]),
    ),
    naver_pay_payments: Schema.optional(
      Schema.Literals(["active", "inactive", "pending"]),
    ),
    nz_bank_account_becs_debit_payments: Schema.optional(
      Schema.Literals(["active", "inactive", "pending"]),
    ),
    oxxo_payments: Schema.optional(
      Schema.Literals(["active", "inactive", "pending"]),
    ),
    p24_payments: Schema.optional(
      Schema.Literals(["active", "inactive", "pending"]),
    ),
    pay_by_bank_payments: Schema.optional(
      Schema.Literals(["active", "inactive", "pending"]),
    ),
    payco_payments: Schema.optional(
      Schema.Literals(["active", "inactive", "pending"]),
    ),
    paynow_payments: Schema.optional(
      Schema.Literals(["active", "inactive", "pending"]),
    ),
    payto_payments: Schema.optional(
      Schema.Literals(["active", "inactive", "pending"]),
    ),
    pix_payments: Schema.optional(
      Schema.Literals(["active", "inactive", "pending"]),
    ),
    promptpay_payments: Schema.optional(
      Schema.Literals(["active", "inactive", "pending"]),
    ),
    revolut_pay_payments: Schema.optional(
      Schema.Literals(["active", "inactive", "pending"]),
    ),
    samsung_pay_payments: Schema.optional(
      Schema.Literals(["active", "inactive", "pending"]),
    ),
    satispay_payments: Schema.optional(
      Schema.Literals(["active", "inactive", "pending"]),
    ),
    sepa_bank_transfer_payments: Schema.optional(
      Schema.Literals(["active", "inactive", "pending"]),
    ),
    sepa_debit_payments: Schema.optional(
      Schema.Literals(["active", "inactive", "pending"]),
    ),
    sofort_payments: Schema.optional(
      Schema.Literals(["active", "inactive", "pending"]),
    ),
    swish_payments: Schema.optional(
      Schema.Literals(["active", "inactive", "pending"]),
    ),
    tax_reporting_us_1099_k: Schema.optional(
      Schema.Literals(["active", "inactive", "pending"]),
    ),
    tax_reporting_us_1099_misc: Schema.optional(
      Schema.Literals(["active", "inactive", "pending"]),
    ),
    transfers: Schema.optional(
      Schema.Literals(["active", "inactive", "pending"]),
    ),
    treasury: Schema.optional(
      Schema.Literals(["active", "inactive", "pending"]),
    ),
    twint_payments: Schema.optional(
      Schema.Literals(["active", "inactive", "pending"]),
    ),
    upi_payments: Schema.optional(
      Schema.Literals(["active", "inactive", "pending"]),
    ),
    us_bank_account_ach_payments: Schema.optional(
      Schema.Literals(["active", "inactive", "pending"]),
    ),
    us_bank_transfer_payments: Schema.optional(
      Schema.Literals(["active", "inactive", "pending"]),
    ),
    zip_payments: Schema.optional(
      Schema.Literals(["active", "inactive", "pending"]),
    ),
  });
export const legal_entity_companySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    address: Schema.optional(Schema.suspend(() => addressSchema)),
    address_kana: Schema.optional(Schema.Unknown),
    address_kanji: Schema.optional(Schema.Unknown),
    directors_provided: Schema.optional(Schema.Boolean),
    directorship_declaration: Schema.optional(Schema.Unknown),
    executives_provided: Schema.optional(Schema.Boolean),
    export_license_id: Schema.optional(Schema.String),
    export_purpose_code: Schema.optional(Schema.String),
    name: Schema.optional(Schema.NullOr(Schema.String)),
    name_kana: Schema.optional(Schema.NullOr(Schema.String)),
    name_kanji: Schema.optional(Schema.NullOr(Schema.String)),
    owners_provided: Schema.optional(Schema.Boolean),
    ownership_declaration: Schema.optional(Schema.Unknown),
    ownership_exemption_reason: Schema.optional(
      Schema.Literals([
        "qualified_entity_exceeds_ownership_threshold",
        "qualifies_as_financial_institution",
      ]),
    ),
    phone: Schema.optional(Schema.NullOr(Schema.String)),
    registration_date: Schema.optional(
      Schema.suspend(() => legal_entity_registration_dateSchema),
    ),
    representative_declaration: Schema.optional(Schema.Unknown),
    structure: Schema.optional(
      Schema.Literals([
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
    tax_id_provided: Schema.optional(Schema.Boolean),
    tax_id_registrar: Schema.optional(Schema.String),
    vat_id_provided: Schema.optional(Schema.Boolean),
    verification: Schema.optional(Schema.Unknown),
  });
export const addressSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  city: Schema.NullOr(Schema.String),
  country: Schema.NullOr(Schema.String),
  line1: Schema.NullOr(Schema.String),
  line2: Schema.NullOr(Schema.String),
  postal_code: Schema.NullOr(Schema.String),
  state: Schema.NullOr(Schema.String),
});
export const legal_entity_registration_dateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    day: Schema.NullOr(Schema.Number),
    month: Schema.NullOr(Schema.Number),
    year: Schema.NullOr(Schema.Number),
  });
export const account_unification_account_controllerSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fees: Schema.optional(
      Schema.suspend(() => account_unification_account_controller_feesSchema),
    ),
    is_controller: Schema.optional(Schema.Boolean),
    losses: Schema.optional(
      Schema.suspend(() => account_unification_account_controller_lossesSchema),
    ),
    requirement_collection: Schema.optional(
      Schema.Literals(["application", "stripe"]),
    ),
    stripe_dashboard: Schema.optional(
      Schema.suspend(
        () => account_unification_account_controller_stripe_dashboardSchema,
      ),
    ),
    type: Schema.Literals(["account", "application"]),
  });
export const account_unification_account_controller_feesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    payer: Schema.Literals([
      "account",
      "application",
      "application_custom",
      "application_express",
    ]),
  });
export const account_unification_account_controller_lossesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    payments: Schema.Literals(["application", "stripe"]),
  });
export const account_unification_account_controller_stripe_dashboardSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.Literals(["express", "full", "none"]),
  });
export const external_accountSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export const account_future_requirementsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    alternatives: Schema.NullOr(
      Schema.Array(
        Schema.suspend(() => account_requirements_alternativeSchema),
      ),
    ),
    current_deadline: Schema.NullOr(Schema.Number),
    currently_due: Schema.NullOr(Schema.Array(Schema.String)),
    disabled_reason: Schema.NullOr(
      Schema.Literals([
        "action_required.requested_capabilities",
        "listed",
        "other",
        "platform_paused",
        "rejected.fraud",
        "rejected.incomplete_verification",
        "rejected.listed",
        "rejected.other",
        "rejected.platform_fraud",
        "rejected.platform_other",
        "rejected.platform_terms_of_service",
        "rejected.terms_of_service",
        "requirements.past_due",
        "requirements.pending_verification",
        "under_review",
      ]),
    ),
    errors: Schema.NullOr(
      Schema.Array(Schema.suspend(() => account_requirements_errorSchema)),
    ),
    eventually_due: Schema.NullOr(Schema.Array(Schema.String)),
    past_due: Schema.NullOr(Schema.Array(Schema.String)),
    pending_verification: Schema.NullOr(Schema.Array(Schema.String)),
  });
export const account_requirements_alternativeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    alternative_fields_due: Schema.Array(Schema.String),
    original_fields_due: Schema.Array(Schema.String),
  });
export const account_requirements_errorSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.Literals([
      "external_request",
      "information_missing",
      "invalid_address_city_state_postal_code",
      "invalid_address_highway_contract_box",
      "invalid_address_private_mailbox",
      "invalid_business_profile_name",
      "invalid_business_profile_name_denylisted",
      "invalid_company_name_denylisted",
      "invalid_dob_age_over_maximum",
      "invalid_dob_age_under_18",
      "invalid_dob_age_under_minimum",
      "invalid_product_description_length",
      "invalid_product_description_url_match",
      "invalid_representative_country",
      "invalid_signator",
      "invalid_statement_descriptor_business_mismatch",
      "invalid_statement_descriptor_denylisted",
      "invalid_statement_descriptor_length",
      "invalid_statement_descriptor_prefix_denylisted",
      "invalid_statement_descriptor_prefix_mismatch",
      "invalid_street_address",
      "invalid_tax_id",
      "invalid_tax_id_format",
      "invalid_tos_acceptance",
      "invalid_url_denylisted",
      "invalid_url_format",
      "invalid_url_length",
      "invalid_url_web_presence_detected",
      "invalid_url_website_business_information_mismatch",
      "invalid_url_website_empty",
      "invalid_url_website_inaccessible",
      "invalid_url_website_inaccessible_geoblocked",
      "invalid_url_website_inaccessible_password_protected",
      "invalid_url_website_incomplete",
      "invalid_url_website_incomplete_cancellation_policy",
      "invalid_url_website_incomplete_customer_service_details",
      "invalid_url_website_incomplete_legal_restrictions",
      "invalid_url_website_incomplete_refund_policy",
      "invalid_url_website_incomplete_return_policy",
      "invalid_url_website_incomplete_terms_and_conditions",
      "invalid_url_website_incomplete_under_construction",
      "invalid_url_website_other",
      "invalid_value_other",
      "unsupported_business_type",
      "verification_directors_mismatch",
      "verification_document_address_mismatch",
      "verification_document_address_missing",
      "verification_document_corrupt",
      "verification_document_country_not_supported",
      "verification_document_directors_mismatch",
      "verification_document_dob_mismatch",
      "verification_document_duplicate_type",
      "verification_document_expired",
      "verification_document_failed_copy",
      "verification_document_failed_greyscale",
      "verification_document_failed_other",
      "verification_document_failed_test_mode",
      "verification_document_fraudulent",
      "verification_document_id_number_mismatch",
      "verification_document_id_number_missing",
      "verification_document_incomplete",
      "verification_document_invalid",
      "verification_document_issue_or_expiry_date_missing",
      "verification_document_manipulated",
      "verification_document_missing_back",
      "verification_document_missing_front",
      "verification_document_name_mismatch",
      "verification_document_name_missing",
      "verification_document_nationality_mismatch",
      "verification_document_not_readable",
      "verification_document_not_signed",
      "verification_document_not_uploaded",
      "verification_document_photo_mismatch",
      "verification_document_too_large",
      "verification_document_type_not_supported",
      "verification_extraneous_directors",
      "verification_failed_address_match",
      "verification_failed_authorizer_authority",
      "verification_failed_business_iec_number",
      "verification_failed_document_match",
      "verification_failed_id_number_match",
      "verification_failed_keyed_identity",
      "verification_failed_keyed_match",
      "verification_failed_name_match",
      "verification_failed_other",
      "verification_failed_representative_authority",
      "verification_failed_residential_address",
      "verification_failed_tax_id_match",
      "verification_failed_tax_id_not_issued",
      "verification_legal_entity_structure_mismatch",
      "verification_missing_directors",
      "verification_missing_executives",
      "verification_missing_owners",
      "verification_rejected_ownership_exemption_reason",
      "verification_requires_additional_memorandum_of_associations",
      "verification_requires_additional_proof_of_registration",
      "verification_supportability",
    ]),
    reason: Schema.String,
    requirement: Schema.String,
  });
export const personSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  account: Schema.optional(Schema.String),
  additional_tos_acceptances: Schema.optional(
    Schema.suspend(() => person_additional_tos_acceptancesSchema),
  ),
  address: Schema.optional(Schema.suspend(() => addressSchema)),
  address_kana: Schema.optional(Schema.Unknown),
  address_kanji: Schema.optional(Schema.Unknown),
  created: Schema.Number,
  dob: Schema.optional(Schema.suspend(() => legal_entity_dobSchema)),
  email: Schema.optional(Schema.NullOr(Schema.String)),
  first_name: Schema.optional(Schema.NullOr(Schema.String)),
  first_name_kana: Schema.optional(Schema.NullOr(Schema.String)),
  first_name_kanji: Schema.optional(Schema.NullOr(Schema.String)),
  full_name_aliases: Schema.optional(Schema.Array(Schema.String)),
  future_requirements: Schema.optional(Schema.Unknown),
  gender: Schema.optional(Schema.NullOr(Schema.String)),
  id: Schema.String,
  id_number_provided: Schema.optional(Schema.Boolean),
  id_number_secondary_provided: Schema.optional(Schema.Boolean),
  last_name: Schema.optional(Schema.NullOr(Schema.String)),
  last_name_kana: Schema.optional(Schema.NullOr(Schema.String)),
  last_name_kanji: Schema.optional(Schema.NullOr(Schema.String)),
  maiden_name: Schema.optional(Schema.NullOr(Schema.String)),
  metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  nationality: Schema.optional(Schema.NullOr(Schema.String)),
  object: Schema.Literals(["person"]),
  phone: Schema.optional(Schema.NullOr(Schema.String)),
  political_exposure: Schema.optional(Schema.Literals(["existing", "none"])),
  registered_address: Schema.optional(Schema.suspend(() => addressSchema)),
  relationship: Schema.optional(
    Schema.suspend(() => person_relationshipSchema),
  ),
  requirements: Schema.optional(Schema.Unknown),
  ssn_last_4_provided: Schema.optional(Schema.Boolean),
  us_cfpb_data: Schema.optional(Schema.Unknown),
  verification: Schema.optional(
    Schema.suspend(() => legal_entity_person_verificationSchema),
  ),
});
export const person_additional_tos_acceptancesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    account: Schema.Unknown,
  });
export const legal_entity_dobSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    day: Schema.NullOr(Schema.Number),
    month: Schema.NullOr(Schema.Number),
    year: Schema.NullOr(Schema.Number),
  },
);
export const person_relationshipSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    authorizer: Schema.NullOr(Schema.Boolean),
    director: Schema.NullOr(Schema.Boolean),
    executive: Schema.NullOr(Schema.Boolean),
    legal_guardian: Schema.NullOr(Schema.Boolean),
    owner: Schema.NullOr(Schema.Boolean),
    percent_ownership: Schema.NullOr(Schema.Number),
    representative: Schema.NullOr(Schema.Boolean),
    title: Schema.NullOr(Schema.String),
  });
export const legal_entity_person_verificationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    additional_document: Schema.optional(Schema.Unknown),
    details: Schema.optional(Schema.NullOr(Schema.String)),
    details_code: Schema.optional(Schema.NullOr(Schema.String)),
    document: Schema.optional(
      Schema.suspend(() => legal_entity_person_verification_documentSchema),
    ),
    status: Schema.String,
  });
export const legal_entity_person_verification_documentSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    back: Schema.Unknown,
    details: Schema.NullOr(Schema.String),
    details_code: Schema.NullOr(Schema.String),
    front: Schema.Unknown,
  });
export const account_requirementsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    alternatives: Schema.NullOr(
      Schema.Array(
        Schema.suspend(() => account_requirements_alternativeSchema),
      ),
    ),
    current_deadline: Schema.NullOr(Schema.Number),
    currently_due: Schema.NullOr(Schema.Array(Schema.String)),
    disabled_reason: Schema.NullOr(
      Schema.Literals([
        "action_required.requested_capabilities",
        "listed",
        "other",
        "platform_paused",
        "rejected.fraud",
        "rejected.incomplete_verification",
        "rejected.listed",
        "rejected.other",
        "rejected.platform_fraud",
        "rejected.platform_other",
        "rejected.platform_terms_of_service",
        "rejected.terms_of_service",
        "requirements.past_due",
        "requirements.pending_verification",
        "under_review",
      ]),
    ),
    errors: Schema.NullOr(
      Schema.Array(Schema.suspend(() => account_requirements_errorSchema)),
    ),
    eventually_due: Schema.NullOr(Schema.Array(Schema.String)),
    past_due: Schema.NullOr(Schema.Array(Schema.String)),
    pending_verification: Schema.NullOr(Schema.Array(Schema.String)),
  });
export const account_tos_acceptanceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    date: Schema.optional(Schema.NullOr(Schema.Number)),
    ip: Schema.optional(Schema.NullOr(Schema.String)),
    service_agreement: Schema.optional(Schema.String),
    user_agent: Schema.optional(Schema.NullOr(Schema.String)),
  });
export const connect_embedded_account_session_create_componentsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    account_management: Schema.suspend(
      () => connect_embedded_account_config_claimSchema,
    ),
    account_onboarding: Schema.suspend(
      () => connect_embedded_account_config_claimSchema,
    ),
    balances: Schema.suspend(() => connect_embedded_payouts_configSchema),
    disputes_list: Schema.suspend(
      () => connect_embedded_disputes_list_configSchema,
    ),
    documents: Schema.suspend(() => connect_embedded_base_config_claimSchema),
    financial_account: Schema.suspend(
      () => connect_embedded_financial_account_config_claimSchema,
    ),
    financial_account_transactions: Schema.suspend(
      () => connect_embedded_financial_account_transactions_config_claimSchema,
    ),
    instant_payouts_promotion: Schema.suspend(
      () => connect_embedded_instant_payouts_promotion_configSchema,
    ),
    issuing_card: Schema.suspend(
      () => connect_embedded_issuing_card_config_claimSchema,
    ),
    issuing_cards_list: Schema.suspend(
      () => connect_embedded_issuing_cards_list_config_claimSchema,
    ),
    notification_banner: Schema.suspend(
      () => connect_embedded_account_config_claimSchema,
    ),
    payment_details: Schema.suspend(
      () => connect_embedded_payments_config_claimSchema,
    ),
    payment_disputes: Schema.suspend(
      () => connect_embedded_payment_disputes_configSchema,
    ),
    payments: Schema.suspend(
      () => connect_embedded_payments_config_claimSchema,
    ),
    payout_details: Schema.suspend(
      () => connect_embedded_base_config_claimSchema,
    ),
    payouts: Schema.suspend(() => connect_embedded_payouts_configSchema),
    payouts_list: Schema.suspend(
      () => connect_embedded_base_config_claimSchema,
    ),
    tax_registrations: Schema.suspend(
      () => connect_embedded_base_config_claimSchema,
    ),
    tax_settings: Schema.suspend(
      () => connect_embedded_base_config_claimSchema,
    ),
  });
export const connect_embedded_account_config_claimSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.Boolean,
    features: Schema.suspend(
      () => connect_embedded_account_features_claimSchema,
    ),
  });
export const connect_embedded_account_features_claimSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    disable_stripe_user_authentication: Schema.Boolean,
    external_account_collection: Schema.Boolean,
  });
export const connect_embedded_payouts_configSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.Boolean,
    features: Schema.suspend(() => connect_embedded_payouts_featuresSchema),
  });
export const connect_embedded_payouts_featuresSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    disable_stripe_user_authentication: Schema.Boolean,
    edit_payout_schedule: Schema.Boolean,
    external_account_collection: Schema.Boolean,
    instant_payouts: Schema.Boolean,
    standard_payouts: Schema.Boolean,
  });
export const connect_embedded_disputes_list_configSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.Boolean,
    features: Schema.suspend(
      () => connect_embedded_disputes_list_featuresSchema,
    ),
  });
export const connect_embedded_disputes_list_featuresSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    capture_payments: Schema.Boolean,
    destination_on_behalf_of_charge_management: Schema.Boolean,
    dispute_management: Schema.Boolean,
    refund_management: Schema.Boolean,
  });
export const connect_embedded_base_config_claimSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.Boolean,
    features: Schema.suspend(() => connect_embedded_base_featuresSchema),
  });
export const connect_embedded_base_featuresSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({});
export const connect_embedded_financial_account_config_claimSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.Boolean,
    features: Schema.suspend(
      () => connect_embedded_financial_account_featuresSchema,
    ),
  });
export const connect_embedded_financial_account_featuresSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    disable_stripe_user_authentication: Schema.Boolean,
    external_account_collection: Schema.Boolean,
    send_money: Schema.Boolean,
    transfer_balance: Schema.Boolean,
  });
export const connect_embedded_financial_account_transactions_config_claimSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.Boolean,
    features: Schema.suspend(
      () => connect_embedded_financial_account_transactions_featuresSchema,
    ),
  });
export const connect_embedded_financial_account_transactions_featuresSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    card_spend_dispute_management: Schema.Boolean,
  });
export const connect_embedded_instant_payouts_promotion_configSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.Boolean,
    features: Schema.suspend(
      () => connect_embedded_instant_payouts_promotion_featuresSchema,
    ),
  });
export const connect_embedded_instant_payouts_promotion_featuresSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    disable_stripe_user_authentication: Schema.Boolean,
    external_account_collection: Schema.Boolean,
    instant_payouts: Schema.Boolean,
  });
export const connect_embedded_issuing_card_config_claimSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.Boolean,
    features: Schema.suspend(
      () => connect_embedded_issuing_card_featuresSchema,
    ),
  });
export const connect_embedded_issuing_card_featuresSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    card_management: Schema.Boolean,
    card_spend_dispute_management: Schema.Boolean,
    cardholder_management: Schema.Boolean,
    spend_control_management: Schema.Boolean,
  });
export const connect_embedded_issuing_cards_list_config_claimSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.Boolean,
    features: Schema.suspend(
      () => connect_embedded_issuing_cards_list_featuresSchema,
    ),
  });
export const connect_embedded_issuing_cards_list_featuresSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    card_management: Schema.Boolean,
    card_spend_dispute_management: Schema.Boolean,
    cardholder_management: Schema.Boolean,
    disable_stripe_user_authentication: Schema.Boolean,
    spend_control_management: Schema.Boolean,
  });
export const connect_embedded_payments_config_claimSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.Boolean,
    features: Schema.suspend(() => connect_embedded_payments_featuresSchema),
  });
export const connect_embedded_payments_featuresSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    capture_payments: Schema.Boolean,
    destination_on_behalf_of_charge_management: Schema.Boolean,
    dispute_management: Schema.Boolean,
    refund_management: Schema.Boolean,
  });
export const connect_embedded_payment_disputes_configSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.Boolean,
    features: Schema.suspend(
      () => connect_embedded_payment_disputes_featuresSchema,
    ),
  });
export const connect_embedded_payment_disputes_featuresSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    destination_on_behalf_of_charge_management: Schema.Boolean,
    dispute_management: Schema.Boolean,
    refund_management: Schema.Boolean,
  });
export const accountSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export const capabilitySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  account: Schema.Unknown,
  future_requirements: Schema.optional(
    Schema.suspend(() => account_capability_future_requirementsSchema),
  ),
  id: Schema.String,
  object: Schema.Literals(["capability"]),
  requested: Schema.Boolean,
  requested_at: Schema.NullOr(Schema.Number),
  requirements: Schema.optional(
    Schema.suspend(() => account_capability_requirementsSchema),
  ),
  status: Schema.Literals(["active", "inactive", "pending", "unrequested"]),
});
export const account_capability_future_requirementsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    alternatives: Schema.NullOr(
      Schema.Array(
        Schema.suspend(() => account_requirements_alternativeSchema),
      ),
    ),
    current_deadline: Schema.NullOr(Schema.Number),
    currently_due: Schema.Array(Schema.String),
    disabled_reason: Schema.NullOr(
      Schema.Literals([
        "other",
        "paused.inactivity",
        "pending.onboarding",
        "pending.review",
        "platform_disabled",
        "platform_paused",
        "rejected.inactivity",
        "rejected.other",
        "rejected.unsupported_business",
        "requirements.fields_needed",
      ]),
    ),
    errors: Schema.Array(
      Schema.suspend(() => account_requirements_errorSchema),
    ),
    eventually_due: Schema.Array(Schema.String),
    past_due: Schema.Array(Schema.String),
    pending_verification: Schema.Array(Schema.String),
  });
export const account_capability_requirementsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    alternatives: Schema.NullOr(
      Schema.Array(
        Schema.suspend(() => account_requirements_alternativeSchema),
      ),
    ),
    current_deadline: Schema.NullOr(Schema.Number),
    currently_due: Schema.Array(Schema.String),
    disabled_reason: Schema.NullOr(
      Schema.Literals([
        "other",
        "paused.inactivity",
        "pending.onboarding",
        "pending.review",
        "platform_disabled",
        "platform_paused",
        "rejected.inactivity",
        "rejected.other",
        "rejected.unsupported_business",
        "requirements.fields_needed",
      ]),
    ),
    errors: Schema.Array(
      Schema.suspend(() => account_requirements_errorSchema),
    ),
    eventually_due: Schema.Array(Schema.String),
    past_due: Schema.Array(Schema.String),
    pending_verification: Schema.Array(Schema.String),
  });
export const apple_pay_domainSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    created: Schema.Number,
    domain_name: Schema.String,
    id: Schema.String,
    livemode: Schema.Boolean,
    object: Schema.Literals(["apple_pay_domain"]),
  },
);
export const application_feeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  account: Schema.Unknown,
  amount: Schema.Number,
  amount_refunded: Schema.Number,
  application: Schema.Unknown,
  balance_transaction: Schema.Unknown,
  charge: Schema.Unknown,
  created: Schema.Number,
  currency: Schema.String,
  fee_source: Schema.Unknown,
  id: Schema.String,
  livemode: Schema.Boolean,
  object: Schema.Literals(["application_fee"]),
  originating_transaction: Schema.Unknown,
  refunded: Schema.Boolean,
  refunds: Schema.Struct({
    data: Schema.Array(Schema.suspend(() => fee_refundSchema)),
    has_more: Schema.Boolean,
    object: Schema.Literals(["list"]),
    url: Schema.String,
  }),
});
export const fee_refundSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  amount: Schema.Number,
  balance_transaction: Schema.Unknown,
  created: Schema.Number,
  currency: Schema.String,
  fee: Schema.Unknown,
  id: Schema.String,
  metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
  object: Schema.Literals(["fee_refund"]),
});
export const apps_secretSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  created: Schema.Number,
  deleted: Schema.optional(Schema.Boolean),
  expires_at: Schema.NullOr(Schema.Number),
  id: Schema.String,
  livemode: Schema.Boolean,
  name: Schema.String,
  object: Schema.Literals(["apps.secret"]),
  payload: Schema.optional(Schema.NullOr(Schema.String)),
  scope: Schema.suspend(() => secret_service_resource_scopeSchema),
});
export const secret_service_resource_scopeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.Literals(["account", "user"]),
    user: Schema.optional(Schema.String),
  });
export const balance_amountSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  amount: Schema.Number,
  currency: Schema.String,
  source_types: Schema.optional(
    Schema.suspend(() => balance_amount_by_source_typeSchema),
  ),
});
export const balance_amount_by_source_typeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bank_account: Schema.optional(Schema.Number),
    card: Schema.optional(Schema.Number),
    fpx: Schema.optional(Schema.Number),
  });
export const balance_amount_netSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amount: Schema.Number,
    currency: Schema.String,
    net_available: Schema.optional(
      Schema.Array(Schema.suspend(() => balance_net_availableSchema)),
    ),
    source_types: Schema.optional(
      Schema.suspend(() => balance_amount_by_source_typeSchema),
    ),
  });
export const balance_net_availableSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amount: Schema.Number,
    destination: Schema.String,
    source_types: Schema.optional(
      Schema.suspend(() => balance_amount_by_source_typeSchema),
    ),
  });
export const balance_detailSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  available: Schema.Array(Schema.suspend(() => balance_amountSchema)),
});
export const balance_detail_ungatedSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    available: Schema.Array(Schema.suspend(() => balance_amountSchema)),
    pending: Schema.Array(Schema.suspend(() => balance_amountSchema)),
  });
export const balance_settings_resource_paymentsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    debit_negative_balances: Schema.NullOr(Schema.Boolean),
    payouts: Schema.Unknown,
    settlement_timing: Schema.suspend(
      () => balance_settings_resource_settlement_timingSchema,
    ),
  });
export const balance_settings_resource_settlement_timingSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    delay_days: Schema.Number,
    delay_days_override: Schema.optional(Schema.Number),
  });
export const balance_transactionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amount: Schema.Number,
    available_on: Schema.Number,
    balance_type: Schema.Literals([
      "issuing",
      "payments",
      "refund_and_dispute_prefunding",
      "risk_reserved",
    ]),
    created: Schema.Number,
    currency: Schema.String,
    description: Schema.NullOr(Schema.String),
    exchange_rate: Schema.NullOr(Schema.Number),
    fee: Schema.Number,
    fee_details: Schema.Array(Schema.suspend(() => feeSchema)),
    id: Schema.String,
    net: Schema.Number,
    object: Schema.Literals(["balance_transaction"]),
    reporting_category: Schema.String,
    source: Schema.Unknown,
    status: Schema.String,
    type: Schema.Literals([
      "adjustment",
      "advance",
      "advance_funding",
      "anticipation_repayment",
      "application_fee",
      "application_fee_refund",
      "charge",
      "climate_order_purchase",
      "climate_order_refund",
      "connect_collection_transfer",
      "contribution",
      "issuing_authorization_hold",
      "issuing_authorization_release",
      "issuing_dispute",
      "issuing_transaction",
      "obligation_outbound",
      "obligation_reversal_inbound",
      "payment",
      "payment_failure_refund",
      "payment_network_reserve_hold",
      "payment_network_reserve_release",
      "payment_refund",
      "payment_reversal",
      "payment_unreconciled",
      "payout",
      "payout_cancel",
      "payout_failure",
      "payout_minimum_balance_hold",
      "payout_minimum_balance_release",
      "refund",
      "refund_failure",
      "reserve_hold",
      "reserve_release",
      "reserve_transaction",
      "reserved_funds",
      "stripe_balance_payment_debit",
      "stripe_balance_payment_debit_reversal",
      "stripe_fee",
      "stripe_fx_fee",
      "tax_fee",
      "topup",
      "topup_reversal",
      "transfer",
      "transfer_cancel",
      "transfer_failure",
      "transfer_refund",
    ]),
  });
export const feeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  amount: Schema.Number,
  application: Schema.NullOr(Schema.String),
  currency: Schema.String,
  description: Schema.NullOr(Schema.String),
  type: Schema.String,
});
export const billing_alertSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  alert_type: Schema.Literals(["usage_threshold"]),
  id: Schema.String,
  livemode: Schema.Boolean,
  object: Schema.Literals(["billing.alert"]),
  status: Schema.NullOr(Schema.Literals(["active", "archived", "inactive"])),
  title: Schema.String,
  usage_threshold: Schema.Unknown,
});
export const credit_balanceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  available_balance: Schema.suspend(
    () => billing_credit_grants_resource_amountSchema,
  ),
  ledger_balance: Schema.suspend(
    () => billing_credit_grants_resource_amountSchema,
  ),
});
export const billing_credit_grants_resource_amountSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    monetary: Schema.Unknown,
    type: Schema.Literals(["monetary"]),
  });
export const billing_credit_balance_transactionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    created: Schema.Number,
    credit: Schema.Unknown,
    credit_grant: Schema.Unknown,
    debit: Schema.Unknown,
    effective_at: Schema.Number,
    id: Schema.String,
    livemode: Schema.Boolean,
    object: Schema.Literals(["billing.credit_balance_transaction"]),
    test_clock: Schema.Unknown,
    type: Schema.NullOr(Schema.Literals(["credit", "debit"])),
  });
export const billing_credit_grantSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amount: Schema.suspend(() => billing_credit_grants_resource_amountSchema),
    applicability_config: Schema.suspend(
      () => billing_credit_grants_resource_applicability_configSchema,
    ),
    category: Schema.Literals(["paid", "promotional"]),
    created: Schema.Number,
    customer: Schema.Unknown,
    customer_account: Schema.NullOr(Schema.String),
    effective_at: Schema.NullOr(Schema.Number),
    expires_at: Schema.NullOr(Schema.Number),
    id: Schema.String,
    livemode: Schema.Boolean,
    metadata: Schema.Record(Schema.String, Schema.String),
    name: Schema.NullOr(Schema.String),
    object: Schema.Literals(["billing.credit_grant"]),
    priority: Schema.optional(Schema.NullOr(Schema.Number)),
    test_clock: Schema.Unknown,
    updated: Schema.Number,
    voided_at: Schema.NullOr(Schema.Number),
  });
export const billing_credit_grants_resource_applicability_configSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scope: Schema.suspend(() => billing_credit_grants_resource_scopeSchema),
  });
export const billing_credit_grants_resource_scopeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    price_type: Schema.optional(Schema.Literals(["metered"])),
    prices: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () => billing_credit_grants_resource_applicable_priceSchema,
        ),
      ),
    ),
  });
export const billing_credit_grants_resource_applicable_priceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.NullOr(Schema.String),
  });
export const billing_meterSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  created: Schema.Number,
  customer_mapping: Schema.suspend(
    () => billing_meter_resource_customer_mapping_settingsSchema,
  ),
  default_aggregation: Schema.suspend(
    () => billing_meter_resource_aggregation_settingsSchema,
  ),
  display_name: Schema.String,
  event_name: Schema.String,
  event_time_window: Schema.NullOr(Schema.Literals(["day", "hour"])),
  id: Schema.String,
  livemode: Schema.Boolean,
  object: Schema.Literals(["billing.meter"]),
  status: Schema.Literals(["active", "inactive"]),
  status_transitions: Schema.suspend(
    () => billing_meter_resource_billing_meter_status_transitionsSchema,
  ),
  updated: Schema.Number,
  value_settings: Schema.suspend(
    () => billing_meter_resource_billing_meter_valueSchema,
  ),
});
export const billing_meter_resource_customer_mapping_settingsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    event_payload_key: Schema.String,
    type: Schema.Literals(["by_id"]),
  });
export const billing_meter_resource_aggregation_settingsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    formula: Schema.Literals(["count", "last", "sum"]),
  });
export const billing_meter_resource_billing_meter_status_transitionsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deactivated_at: Schema.NullOr(Schema.Number),
  });
export const billing_meter_resource_billing_meter_valueSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    event_payload_key: Schema.String,
  });
export const billing_meter_event_summarySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    aggregated_value: Schema.Number,
    end_time: Schema.Number,
    id: Schema.String,
    livemode: Schema.Boolean,
    meter: Schema.String,
    object: Schema.Literals(["billing.meter_event_summary"]),
    start_time: Schema.Number,
  });
export const billing_portal_configurationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    active: Schema.Boolean,
    application: Schema.Unknown,
    business_profile: Schema.suspend(() => portal_business_profileSchema),
    created: Schema.Number,
    default_return_url: Schema.NullOr(Schema.String),
    features: Schema.suspend(() => portal_featuresSchema),
    id: Schema.String,
    is_default: Schema.Boolean,
    livemode: Schema.Boolean,
    login_page: Schema.suspend(() => portal_login_pageSchema),
    metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
    name: Schema.NullOr(Schema.String),
    object: Schema.Literals(["billing_portal.configuration"]),
    updated: Schema.Number,
  });
export const portal_business_profileSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    headline: Schema.NullOr(Schema.String),
    privacy_policy_url: Schema.NullOr(Schema.String),
    terms_of_service_url: Schema.NullOr(Schema.String),
  });
export const portal_featuresSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  customer_update: Schema.suspend(() => portal_customer_updateSchema),
  invoice_history: Schema.suspend(() => portal_invoice_listSchema),
  payment_method_update: Schema.suspend(
    () => portal_payment_method_updateSchema,
  ),
  subscription_cancel: Schema.suspend(() => portal_subscription_cancelSchema),
  subscription_update: Schema.suspend(() => portal_subscription_updateSchema),
});
export const portal_customer_updateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowed_updates: Schema.Array(
      Schema.Literals([
        "address",
        "email",
        "name",
        "phone",
        "shipping",
        "tax_id",
      ]),
    ),
    enabled: Schema.Boolean,
  });
export const portal_invoice_listSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.Boolean,
  });
export const portal_payment_method_updateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.Boolean,
    payment_method_configuration: Schema.NullOr(Schema.String),
  });
export const portal_subscription_cancelSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cancellation_reason: Schema.suspend(
      () => portal_subscription_cancellation_reasonSchema,
    ),
    enabled: Schema.Boolean,
    mode: Schema.Literals(["at_period_end", "immediately"]),
    proration_behavior: Schema.Literals([
      "always_invoice",
      "create_prorations",
      "none",
    ]),
  });
export const portal_subscription_cancellation_reasonSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.Boolean,
    options: Schema.Array(
      Schema.Literals([
        "customer_service",
        "low_quality",
        "missing_features",
        "other",
        "switched_service",
        "too_complex",
        "too_expensive",
        "unused",
      ]),
    ),
  });
export const portal_subscription_updateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billing_cycle_anchor: Schema.NullOr(Schema.Literals(["now", "unchanged"])),
    default_allowed_updates: Schema.Array(
      Schema.Literals(["price", "promotion_code", "quantity"]),
    ),
    enabled: Schema.Boolean,
    products: Schema.optional(
      Schema.NullOr(
        Schema.Array(
          Schema.suspend(() => portal_subscription_update_productSchema),
        ),
      ),
    ),
    proration_behavior: Schema.Literals([
      "always_invoice",
      "create_prorations",
      "none",
    ]),
    schedule_at_period_end: Schema.suspend(
      () => portal_resource_schedule_update_at_period_endSchema,
    ),
    trial_update_behavior: Schema.Literals(["continue_trial", "end_trial"]),
  });
export const portal_subscription_update_productSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    adjustable_quantity: Schema.suspend(
      () => portal_subscription_update_product_adjustable_quantitySchema,
    ),
    prices: Schema.Array(Schema.String),
    product: Schema.String,
  });
export const portal_subscription_update_product_adjustable_quantitySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.Boolean,
    maximum: Schema.NullOr(Schema.Number),
    minimum: Schema.Number,
  });
export const portal_resource_schedule_update_at_period_endSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conditions: Schema.Array(
      Schema.suspend(
        () => portal_resource_schedule_update_at_period_end_conditionSchema,
      ),
    ),
  });
export const portal_resource_schedule_update_at_period_end_conditionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.Literals(["decreasing_item_amount", "shortening_interval"]),
  });
export const portal_login_pageSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.Boolean,
    url: Schema.NullOr(Schema.String),
  });
export const chargeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  amount: Schema.Number,
  amount_captured: Schema.Number,
  amount_refunded: Schema.Number,
  application: Schema.Unknown,
  application_fee: Schema.Unknown,
  application_fee_amount: Schema.NullOr(Schema.Number),
  authorization_code: Schema.optional(Schema.String),
  balance_transaction: Schema.Unknown,
  billing_details: Schema.suspend(() => billing_detailsSchema),
  calculated_statement_descriptor: Schema.NullOr(Schema.String),
  captured: Schema.Boolean,
  created: Schema.Number,
  currency: Schema.String,
  customer: Schema.Unknown,
  description: Schema.NullOr(Schema.String),
  disputed: Schema.Boolean,
  failure_balance_transaction: Schema.Unknown,
  failure_code: Schema.NullOr(Schema.String),
  failure_message: Schema.NullOr(Schema.String),
  fraud_details: Schema.Unknown,
  id: Schema.String,
  level3: Schema.optional(Schema.suspend(() => level3Schema)),
  livemode: Schema.Boolean,
  metadata: Schema.Record(Schema.String, Schema.String),
  object: Schema.Literals(["charge"]),
  on_behalf_of: Schema.Unknown,
  outcome: Schema.Unknown,
  paid: Schema.Boolean,
  payment_intent: Schema.Unknown,
  payment_method: Schema.NullOr(Schema.String),
  payment_method_details: Schema.Unknown,
  presentment_details: Schema.optional(
    Schema.suspend(
      () => payment_flows_payment_intent_presentment_detailsSchema,
    ),
  ),
  radar_options: Schema.optional(
    Schema.suspend(() => radar_radar_optionsSchema),
  ),
  receipt_email: Schema.NullOr(Schema.String),
  receipt_number: Schema.NullOr(Schema.String),
  receipt_url: Schema.NullOr(Schema.String),
  refunded: Schema.Boolean,
  refunds: Schema.optional(
    Schema.NullOr(
      Schema.Struct({
        data: Schema.Array(Schema.suspend(() => refundSchema)),
        has_more: Schema.Boolean,
        object: Schema.Literals(["list"]),
        url: Schema.String,
      }),
    ),
  ),
  review: Schema.Unknown,
  shipping: Schema.Unknown,
  source: Schema.Unknown,
  source_transfer: Schema.Unknown,
  statement_descriptor: Schema.NullOr(Schema.String),
  statement_descriptor_suffix: Schema.NullOr(Schema.String),
  status: Schema.Literals(["failed", "pending", "succeeded"]),
  transfer: Schema.optional(Schema.Unknown),
  transfer_data: Schema.Unknown,
  transfer_group: Schema.NullOr(Schema.String),
});
export const billing_detailsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  address: Schema.Unknown,
  email: Schema.NullOr(Schema.String),
  name: Schema.NullOr(Schema.String),
  phone: Schema.NullOr(Schema.String),
  tax_id: Schema.NullOr(Schema.String),
});
export const level3Schema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  customer_reference: Schema.optional(Schema.String),
  line_items: Schema.Array(Schema.suspend(() => level3_line_itemsSchema)),
  merchant_reference: Schema.String,
  shipping_address_zip: Schema.optional(Schema.String),
  shipping_amount: Schema.optional(Schema.Number),
  shipping_from_zip: Schema.optional(Schema.String),
});
export const level3_line_itemsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    discount_amount: Schema.NullOr(Schema.Number),
    product_code: Schema.String,
    product_description: Schema.String,
    quantity: Schema.NullOr(Schema.Number),
    tax_amount: Schema.NullOr(Schema.Number),
    unit_cost: Schema.NullOr(Schema.Number),
  });
export const payment_flows_payment_intent_presentment_detailsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    presentment_amount: Schema.Number,
    presentment_currency: Schema.String,
  });
export const radar_radar_optionsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    session: Schema.optional(Schema.String),
  });
export const refundSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  amount: Schema.Number,
  balance_transaction: Schema.Unknown,
  charge: Schema.Unknown,
  created: Schema.Number,
  currency: Schema.String,
  description: Schema.optional(Schema.String),
  destination_details: Schema.optional(
    Schema.suspend(() => refund_destination_detailsSchema),
  ),
  failure_balance_transaction: Schema.optional(Schema.Unknown),
  failure_reason: Schema.optional(Schema.String),
  id: Schema.String,
  instructions_email: Schema.optional(Schema.String),
  metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
  next_action: Schema.optional(Schema.suspend(() => refund_next_actionSchema)),
  object: Schema.Literals(["refund"]),
  payment_intent: Schema.Unknown,
  pending_reason: Schema.optional(
    Schema.Literals(["charge_pending", "insufficient_funds", "processing"]),
  ),
  presentment_details: Schema.optional(
    Schema.suspend(
      () => payment_flows_payment_intent_presentment_detailsSchema,
    ),
  ),
  reason: Schema.NullOr(
    Schema.Literals([
      "duplicate",
      "expired_uncaptured_charge",
      "fraudulent",
      "requested_by_customer",
    ]),
  ),
  receipt_number: Schema.NullOr(Schema.String),
  source_transfer_reversal: Schema.Unknown,
  status: Schema.NullOr(Schema.String),
  transfer_reversal: Schema.Unknown,
});
export const refund_destination_detailsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    affirm: Schema.optional(
      Schema.suspend(() => destination_details_unimplementedSchema),
    ),
    afterpay_clearpay: Schema.optional(
      Schema.suspend(() => destination_details_unimplementedSchema),
    ),
    alipay: Schema.optional(
      Schema.suspend(() => destination_details_unimplementedSchema),
    ),
    alma: Schema.optional(
      Schema.suspend(() => destination_details_unimplementedSchema),
    ),
    amazon_pay: Schema.optional(
      Schema.suspend(() => destination_details_unimplementedSchema),
    ),
    au_bank_transfer: Schema.optional(
      Schema.suspend(() => destination_details_unimplementedSchema),
    ),
    blik: Schema.optional(
      Schema.suspend(() => refund_destination_details_blikSchema),
    ),
    br_bank_transfer: Schema.optional(
      Schema.suspend(() => refund_destination_details_br_bank_transferSchema),
    ),
    card: Schema.optional(
      Schema.suspend(() => refund_destination_details_cardSchema),
    ),
    cashapp: Schema.optional(
      Schema.suspend(() => destination_details_unimplementedSchema),
    ),
    crypto: Schema.optional(
      Schema.suspend(() => refund_destination_details_cryptoSchema),
    ),
    customer_cash_balance: Schema.optional(
      Schema.suspend(() => destination_details_unimplementedSchema),
    ),
    eps: Schema.optional(
      Schema.suspend(() => destination_details_unimplementedSchema),
    ),
    eu_bank_transfer: Schema.optional(
      Schema.suspend(() => refund_destination_details_eu_bank_transferSchema),
    ),
    gb_bank_transfer: Schema.optional(
      Schema.suspend(() => refund_destination_details_gb_bank_transferSchema),
    ),
    giropay: Schema.optional(
      Schema.suspend(() => destination_details_unimplementedSchema),
    ),
    grabpay: Schema.optional(
      Schema.suspend(() => destination_details_unimplementedSchema),
    ),
    jp_bank_transfer: Schema.optional(
      Schema.suspend(() => refund_destination_details_jp_bank_transferSchema),
    ),
    klarna: Schema.optional(
      Schema.suspend(() => destination_details_unimplementedSchema),
    ),
    mb_way: Schema.optional(
      Schema.suspend(() => refund_destination_details_mb_waySchema),
    ),
    multibanco: Schema.optional(
      Schema.suspend(() => refund_destination_details_multibancoSchema),
    ),
    mx_bank_transfer: Schema.optional(
      Schema.suspend(() => refund_destination_details_mx_bank_transferSchema),
    ),
    nz_bank_transfer: Schema.optional(
      Schema.suspend(() => destination_details_unimplementedSchema),
    ),
    p24: Schema.optional(
      Schema.suspend(() => refund_destination_details_p24Schema),
    ),
    paynow: Schema.optional(
      Schema.suspend(() => destination_details_unimplementedSchema),
    ),
    paypal: Schema.optional(
      Schema.suspend(() => refund_destination_details_paypalSchema),
    ),
    pix: Schema.optional(
      Schema.suspend(() => destination_details_unimplementedSchema),
    ),
    revolut: Schema.optional(
      Schema.suspend(() => destination_details_unimplementedSchema),
    ),
    sofort: Schema.optional(
      Schema.suspend(() => destination_details_unimplementedSchema),
    ),
    swish: Schema.optional(
      Schema.suspend(() => refund_destination_details_swishSchema),
    ),
    th_bank_transfer: Schema.optional(
      Schema.suspend(() => refund_destination_details_th_bank_transferSchema),
    ),
    twint: Schema.optional(
      Schema.suspend(() => destination_details_unimplementedSchema),
    ),
    type: Schema.String,
    us_bank_transfer: Schema.optional(
      Schema.suspend(() => refund_destination_details_us_bank_transferSchema),
    ),
    wechat_pay: Schema.optional(
      Schema.suspend(() => destination_details_unimplementedSchema),
    ),
    zip: Schema.optional(
      Schema.suspend(() => destination_details_unimplementedSchema),
    ),
  });
export const destination_details_unimplementedSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({});
export const refund_destination_details_blikSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    network_decline_code: Schema.NullOr(Schema.String),
    reference: Schema.NullOr(Schema.String),
    reference_status: Schema.NullOr(Schema.String),
  });
export const refund_destination_details_br_bank_transferSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reference: Schema.NullOr(Schema.String),
    reference_status: Schema.NullOr(Schema.String),
  });
export const refund_destination_details_cardSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reference: Schema.optional(Schema.String),
    reference_status: Schema.optional(Schema.String),
    reference_type: Schema.optional(Schema.String),
    type: Schema.Literals(["pending", "refund", "reversal"]),
  });
export const refund_destination_details_cryptoSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reference: Schema.NullOr(Schema.String),
  });
export const refund_destination_details_eu_bank_transferSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reference: Schema.NullOr(Schema.String),
    reference_status: Schema.NullOr(Schema.String),
  });
export const refund_destination_details_gb_bank_transferSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reference: Schema.NullOr(Schema.String),
    reference_status: Schema.NullOr(Schema.String),
  });
export const refund_destination_details_jp_bank_transferSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reference: Schema.NullOr(Schema.String),
    reference_status: Schema.NullOr(Schema.String),
  });
export const refund_destination_details_mb_waySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reference: Schema.NullOr(Schema.String),
    reference_status: Schema.NullOr(Schema.String),
  });
export const refund_destination_details_multibancoSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reference: Schema.NullOr(Schema.String),
    reference_status: Schema.NullOr(Schema.String),
  });
export const refund_destination_details_mx_bank_transferSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reference: Schema.NullOr(Schema.String),
    reference_status: Schema.NullOr(Schema.String),
  });
export const refund_destination_details_p24Schema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reference: Schema.NullOr(Schema.String),
    reference_status: Schema.NullOr(Schema.String),
  });
export const refund_destination_details_paypalSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    network_decline_code: Schema.NullOr(Schema.String),
  });
export const refund_destination_details_swishSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    network_decline_code: Schema.NullOr(Schema.String),
    reference: Schema.NullOr(Schema.String),
    reference_status: Schema.NullOr(Schema.String),
  });
export const refund_destination_details_th_bank_transferSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reference: Schema.NullOr(Schema.String),
    reference_status: Schema.NullOr(Schema.String),
  });
export const refund_destination_details_us_bank_transferSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reference: Schema.NullOr(Schema.String),
    reference_status: Schema.NullOr(Schema.String),
  });
export const refund_next_actionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    display_details: Schema.optional(
      Schema.suspend(() => refund_next_action_display_detailsSchema),
    ),
    type: Schema.String,
  });
export const refund_next_action_display_detailsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    email_sent: Schema.suspend(() => email_sentSchema),
    expires_at: Schema.Number,
  });
export const email_sentSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  email_sent_at: Schema.Number,
  email_sent_to: Schema.String,
});
export const checkout_sessionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    adaptive_pricing: Schema.Unknown,
    after_expiration: Schema.Unknown,
    allow_promotion_codes: Schema.NullOr(Schema.Boolean),
    amount_subtotal: Schema.NullOr(Schema.Number),
    amount_total: Schema.NullOr(Schema.Number),
    automatic_tax: Schema.suspend(
      () => payment_pages_checkout_session_automatic_taxSchema,
    ),
    billing_address_collection: Schema.NullOr(
      Schema.Literals(["auto", "required"]),
    ),
    branding_settings: Schema.optional(
      Schema.suspend(
        () => payment_pages_checkout_session_branding_settingsSchema,
      ),
    ),
    cancel_url: Schema.NullOr(Schema.String),
    client_reference_id: Schema.NullOr(Schema.String),
    client_secret: SensitiveOutputNullableString,
    collected_information: Schema.Unknown,
    consent: Schema.Unknown,
    consent_collection: Schema.Unknown,
    created: Schema.Number,
    currency: Schema.NullOr(Schema.String),
    currency_conversion: Schema.Unknown,
    custom_fields: Schema.Array(
      Schema.suspend(() => payment_pages_checkout_session_custom_fieldsSchema),
    ),
    custom_text: Schema.suspend(
      () => payment_pages_checkout_session_custom_textSchema,
    ),
    customer: Schema.Unknown,
    customer_account: Schema.NullOr(Schema.String),
    customer_creation: Schema.NullOr(
      Schema.Literals(["always", "if_required"]),
    ),
    customer_details: Schema.Unknown,
    customer_email: Schema.NullOr(Schema.String),
    discounts: Schema.NullOr(
      Schema.Array(
        Schema.suspend(() => payment_pages_checkout_session_discountSchema),
      ),
    ),
    excluded_payment_method_types: Schema.optional(Schema.Array(Schema.String)),
    expires_at: Schema.Number,
    id: Schema.String,
    integration_identifier: Schema.NullOr(Schema.String),
    invoice: Schema.Unknown,
    invoice_creation: Schema.Unknown,
    line_items: Schema.optional(
      Schema.Struct({
        data: Schema.Array(Schema.suspend(() => itemSchema)),
        has_more: Schema.Boolean,
        object: Schema.Literals(["list"]),
        url: Schema.String,
      }),
    ),
    livemode: Schema.Boolean,
    locale: Schema.NullOr(
      Schema.Literals([
        "auto",
        "bg",
        "cs",
        "da",
        "de",
        "el",
        "en",
        "en-GB",
        "es",
        "es-419",
        "et",
        "fi",
        "fil",
        "fr",
        "fr-CA",
        "hr",
        "hu",
        "id",
        "it",
        "ja",
        "ko",
        "lt",
        "lv",
        "ms",
        "mt",
        "nb",
        "nl",
        "pl",
        "pt",
        "pt-BR",
        "ro",
        "ru",
        "sk",
        "sl",
        "sv",
        "th",
        "tr",
        "vi",
        "zh",
        "zh-HK",
        "zh-TW",
      ]),
    ),
    metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
    mode: Schema.Literals(["payment", "setup", "subscription"]),
    name_collection: Schema.optional(
      Schema.suspend(
        () => payment_pages_checkout_session_name_collectionSchema,
      ),
    ),
    object: Schema.Literals(["checkout.session"]),
    optional_items: Schema.optional(
      Schema.NullOr(
        Schema.Array(
          Schema.suspend(
            () => payment_pages_checkout_session_optional_itemSchema,
          ),
        ),
      ),
    ),
    origin_context: Schema.NullOr(Schema.Literals(["mobile_app", "web"])),
    payment_intent: Schema.Unknown,
    payment_link: Schema.Unknown,
    payment_method_collection: Schema.NullOr(
      Schema.Literals(["always", "if_required"]),
    ),
    payment_method_configuration_details: Schema.Unknown,
    payment_method_options: Schema.Unknown,
    payment_method_types: Schema.Array(Schema.String),
    payment_status: Schema.Literals(["no_payment_required", "paid", "unpaid"]),
    permissions: Schema.Unknown,
    phone_number_collection: Schema.optional(
      Schema.suspend(
        () => payment_pages_checkout_session_phone_number_collectionSchema,
      ),
    ),
    presentment_details: Schema.optional(
      Schema.suspend(
        () => payment_flows_payment_intent_presentment_detailsSchema,
      ),
    ),
    recovered_from: Schema.NullOr(Schema.String),
    redirect_on_completion: Schema.optional(
      Schema.Literals(["always", "if_required", "never"]),
    ),
    return_url: Schema.optional(Schema.String),
    saved_payment_method_options: Schema.Unknown,
    setup_intent: Schema.Unknown,
    shipping_address_collection: Schema.Unknown,
    shipping_cost: Schema.Unknown,
    shipping_options: Schema.Array(
      Schema.suspend(
        () => payment_pages_checkout_session_shipping_optionSchema,
      ),
    ),
    status: Schema.NullOr(Schema.Literals(["complete", "expired", "open"])),
    submit_type: Schema.NullOr(
      Schema.Literals(["auto", "book", "donate", "pay", "subscribe"]),
    ),
    subscription: Schema.Unknown,
    success_url: Schema.NullOr(Schema.String),
    tax_id_collection: Schema.optional(
      Schema.suspend(
        () => payment_pages_checkout_session_tax_id_collectionSchema,
      ),
    ),
    total_details: Schema.Unknown,
    ui_mode: Schema.NullOr(
      Schema.Literals(["elements", "embedded_page", "form", "hosted_page"]),
    ),
    url: Schema.NullOr(Schema.String),
    wallet_options: Schema.Unknown,
  },
);
export const payment_pages_checkout_session_automatic_taxSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.Boolean,
    liability: Schema.Unknown,
    provider: Schema.NullOr(Schema.String),
    status: Schema.NullOr(
      Schema.Literals(["complete", "failed", "requires_location_inputs"]),
    ),
  });
export const payment_pages_checkout_session_branding_settingsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    background_color: Schema.String,
    border_style: Schema.Literals(["pill", "rectangular", "rounded"]),
    button_color: Schema.String,
    display_name: Schema.String,
    font_family: Schema.String,
    icon: Schema.Unknown,
    logo: Schema.Unknown,
  });
export const payment_pages_checkout_session_custom_fieldsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dropdown: Schema.optional(
      Schema.suspend(
        () => payment_pages_checkout_session_custom_fields_dropdownSchema,
      ),
    ),
    key: Schema.String,
    label: Schema.suspend(
      () => payment_pages_checkout_session_custom_fields_labelSchema,
    ),
    numeric: Schema.optional(
      Schema.suspend(
        () => payment_pages_checkout_session_custom_fields_numericSchema,
      ),
    ),
    optional: Schema.Boolean,
    text: Schema.optional(
      Schema.suspend(
        () => payment_pages_checkout_session_custom_fields_textSchema,
      ),
    ),
    type: Schema.Literals(["dropdown", "numeric", "text"]),
  });
export const payment_pages_checkout_session_custom_fields_dropdownSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    default_value: Schema.NullOr(Schema.String),
    options: Schema.Array(
      Schema.suspend(
        () => payment_pages_checkout_session_custom_fields_optionSchema,
      ),
    ),
    value: Schema.NullOr(Schema.String),
  });
export const payment_pages_checkout_session_custom_fields_optionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    label: Schema.String,
    value: Schema.String,
  });
export const payment_pages_checkout_session_custom_fields_labelSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    custom: Schema.NullOr(Schema.String),
    type: Schema.Literals(["custom"]),
  });
export const payment_pages_checkout_session_custom_fields_numericSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    default_value: Schema.NullOr(Schema.String),
    maximum_length: Schema.NullOr(Schema.Number),
    minimum_length: Schema.NullOr(Schema.Number),
    value: Schema.NullOr(Schema.String),
  });
export const payment_pages_checkout_session_custom_fields_textSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    default_value: Schema.NullOr(Schema.String),
    maximum_length: Schema.NullOr(Schema.Number),
    minimum_length: Schema.NullOr(Schema.Number),
    value: Schema.NullOr(Schema.String),
  });
export const payment_pages_checkout_session_custom_textSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    after_submit: Schema.Unknown,
    shipping_address: Schema.Unknown,
    submit: Schema.Unknown,
    terms_of_service_acceptance: Schema.Unknown,
  });
export const payment_pages_checkout_session_discountSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    coupon: Schema.Unknown,
    promotion_code: Schema.Unknown,
  });
export const itemSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  adjustable_quantity: Schema.Unknown,
  amount_discount: Schema.Number,
  amount_subtotal: Schema.Number,
  amount_tax: Schema.Number,
  amount_total: Schema.Number,
  currency: Schema.String,
  description: Schema.NullOr(Schema.String),
  discounts: Schema.optional(
    Schema.Array(Schema.suspend(() => line_items_discount_amountSchema)),
  ),
  id: Schema.String,
  metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
  object: Schema.Literals(["item"]),
  price: Schema.Unknown,
  quantity: Schema.NullOr(Schema.Number),
  taxes: Schema.optional(
    Schema.Array(Schema.suspend(() => line_items_tax_amountSchema)),
  ),
});
export const line_items_discount_amountSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amount: Schema.Number,
    discount: Schema.suspend(() => discountSchema),
  });
export const discountSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  checkout_session: Schema.NullOr(Schema.String),
  customer: Schema.Unknown,
  customer_account: Schema.NullOr(Schema.String),
  end: Schema.NullOr(Schema.Number),
  id: Schema.String,
  invoice: Schema.NullOr(Schema.String),
  invoice_item: Schema.NullOr(Schema.String),
  object: Schema.Literals(["discount"]),
  promotion_code: Schema.Unknown,
  source: Schema.suspend(() => discount_sourceSchema),
  start: Schema.Number,
  subscription: Schema.NullOr(Schema.String),
  subscription_item: Schema.NullOr(Schema.String),
});
export const discount_sourceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  coupon: Schema.Unknown,
  type: Schema.Literals(["coupon"]),
});
export const line_items_tax_amountSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amount: Schema.Number,
    rate: Schema.suspend(() => tax_rateSchema),
    taxability_reason: Schema.NullOr(
      Schema.Literals([
        "customer_exempt",
        "not_collecting",
        "not_subject_to_tax",
        "not_supported",
        "portion_product_exempt",
        "portion_reduced_rated",
        "portion_standard_rated",
        "product_exempt",
        "product_exempt_holiday",
        "proportionally_rated",
        "reduced_rated",
        "reverse_charge",
        "standard_rated",
        "taxable_basis_reduced",
        "zero_rated",
      ]),
    ),
    taxable_amount: Schema.NullOr(Schema.Number),
  });
export const tax_rateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  active: Schema.Boolean,
  country: Schema.NullOr(Schema.String),
  created: Schema.Number,
  description: Schema.NullOr(Schema.String),
  display_name: Schema.String,
  effective_percentage: Schema.NullOr(Schema.Number),
  flat_amount: Schema.Unknown,
  id: Schema.String,
  inclusive: Schema.Boolean,
  jurisdiction: Schema.NullOr(Schema.String),
  jurisdiction_level: Schema.NullOr(
    Schema.Literals([
      "city",
      "country",
      "county",
      "district",
      "multiple",
      "state",
    ]),
  ),
  livemode: Schema.Boolean,
  metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
  object: Schema.Literals(["tax_rate"]),
  percentage: Schema.Number,
  rate_type: Schema.NullOr(Schema.Literals(["flat_amount", "percentage"])),
  state: Schema.NullOr(Schema.String),
  tax_type: Schema.NullOr(
    Schema.Literals([
      "amusement_tax",
      "communications_tax",
      "gst",
      "hst",
      "igst",
      "jct",
      "lease_tax",
      "pst",
      "qst",
      "retail_delivery_fee",
      "rst",
      "sales_tax",
      "service_tax",
      "vat",
    ]),
  ),
});
export const payment_pages_checkout_session_name_collectionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    business: Schema.optional(
      Schema.suspend(() => payment_pages_checkout_session_business_nameSchema),
    ),
    individual: Schema.optional(
      Schema.suspend(
        () => payment_pages_checkout_session_individual_nameSchema,
      ),
    ),
  });
export const payment_pages_checkout_session_business_nameSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.Boolean,
    optional: Schema.Boolean,
  });
export const payment_pages_checkout_session_individual_nameSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.Boolean,
    optional: Schema.Boolean,
  });
export const payment_pages_checkout_session_optional_itemSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    adjustable_quantity: Schema.Unknown,
    price: Schema.String,
    quantity: Schema.Number,
  });
export const payment_pages_checkout_session_phone_number_collectionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.Boolean,
  });
export const payment_pages_checkout_session_shipping_optionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    shipping_amount: Schema.Number,
    shipping_rate: Schema.Unknown,
  });
export const payment_pages_checkout_session_tax_id_collectionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.Boolean,
    required: Schema.Literals(["if_supported", "never"]),
  });
export const climate_orderSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  amount_fees: Schema.Number,
  amount_subtotal: Schema.Number,
  amount_total: Schema.Number,
  beneficiary: Schema.optional(
    Schema.suspend(() => climate_removals_beneficiarySchema),
  ),
  canceled_at: Schema.NullOr(Schema.Number),
  cancellation_reason: Schema.NullOr(
    Schema.Literals(["expired", "product_unavailable", "requested"]),
  ),
  certificate: Schema.NullOr(Schema.String),
  confirmed_at: Schema.NullOr(Schema.Number),
  created: Schema.Number,
  currency: Schema.String,
  delayed_at: Schema.NullOr(Schema.Number),
  delivered_at: Schema.NullOr(Schema.Number),
  delivery_details: Schema.Array(
    Schema.suspend(() => climate_removals_order_deliveriesSchema),
  ),
  expected_delivery_year: Schema.Number,
  id: Schema.String,
  livemode: Schema.Boolean,
  metadata: Schema.Record(Schema.String, Schema.String),
  metric_tons: Schema.String,
  object: Schema.Literals(["climate.order"]),
  product: Schema.Unknown,
  product_substituted_at: Schema.NullOr(Schema.Number),
  status: Schema.Literals([
    "awaiting_funds",
    "canceled",
    "confirmed",
    "delivered",
    "open",
  ]),
});
export const climate_removals_beneficiarySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    public_name: Schema.String,
  });
export const climate_removals_order_deliveriesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    delivered_at: Schema.Number,
    location: Schema.Unknown,
    metric_tons: Schema.String,
    registry_url: Schema.NullOr(Schema.String),
    supplier: Schema.suspend(() => climate_supplierSchema),
  });
export const climate_supplierSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.String,
    info_url: Schema.String,
    livemode: Schema.Boolean,
    locations: Schema.Array(
      Schema.suspend(() => climate_removals_locationSchema),
    ),
    name: Schema.String,
    object: Schema.Literals(["climate.supplier"]),
    removal_pathway: Schema.Literals([
      "biomass_carbon_removal_and_storage",
      "direct_air_capture",
      "enhanced_weathering",
      "marine_carbon_removal",
    ]),
  },
);
export const climate_removals_locationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    city: Schema.NullOr(Schema.String),
    country: Schema.String,
    latitude: Schema.NullOr(Schema.Number),
    longitude: Schema.NullOr(Schema.Number),
    region: Schema.NullOr(Schema.String),
  });
export const climate_productSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  created: Schema.Number,
  current_prices_per_metric_ton: Schema.Record(
    Schema.String,
    Schema.suspend(() => climate_removals_products_priceSchema),
  ),
  delivery_year: Schema.NullOr(Schema.Number),
  id: Schema.String,
  livemode: Schema.Boolean,
  metric_tons_available: Schema.String,
  name: Schema.String,
  object: Schema.Literals(["climate.product"]),
  suppliers: Schema.Array(Schema.suspend(() => climate_supplierSchema)),
});
export const climate_removals_products_priceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amount_fees: Schema.Number,
    amount_subtotal: Schema.Number,
    amount_total: Schema.Number,
  });
export const country_specSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  verification_fields: Schema.suspend(
    () => country_spec_verification_fieldsSchema,
  ),
});
export const country_spec_verification_fieldsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    company: Schema.suspend(
      () => country_spec_verification_field_detailsSchema,
    ),
    individual: Schema.suspend(
      () => country_spec_verification_field_detailsSchema,
    ),
  });
export const country_spec_verification_field_detailsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    additional: Schema.Array(Schema.String),
    minimum: Schema.Array(Schema.String),
  });
export const couponSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  amount_off: Schema.NullOr(Schema.Number),
  applies_to: Schema.optional(Schema.suspend(() => coupon_applies_toSchema)),
  created: Schema.Number,
  currency: Schema.NullOr(Schema.String),
  currency_options: Schema.optional(
    Schema.Record(
      Schema.String,
      Schema.suspend(() => coupon_currency_optionSchema),
    ),
  ),
  duration: Schema.Literals(["forever", "once", "repeating"]),
  duration_in_months: Schema.NullOr(Schema.Number),
  id: Schema.String,
  livemode: Schema.Boolean,
  max_redemptions: Schema.NullOr(Schema.Number),
  metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
  name: Schema.NullOr(Schema.String),
  object: Schema.Literals(["coupon"]),
  percent_off: Schema.NullOr(Schema.Number),
  redeem_by: Schema.NullOr(Schema.Number),
  times_redeemed: Schema.Number,
  valid: Schema.Boolean,
});
export const coupon_applies_toSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    products: Schema.Array(Schema.String),
  });
export const coupon_currency_optionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amount_off: Schema.Number,
  });
export const credit_noteSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  amount: Schema.Number,
  amount_shipping: Schema.Number,
  created: Schema.Number,
  currency: Schema.String,
  customer: Schema.Unknown,
  customer_account: Schema.NullOr(Schema.String),
  customer_balance_transaction: Schema.Unknown,
  discount_amount: Schema.Number,
  discount_amounts: Schema.Array(
    Schema.suspend(() => discounts_resource_discount_amountSchema),
  ),
  effective_at: Schema.NullOr(Schema.Number),
  id: Schema.String,
  invoice: Schema.Unknown,
  lines: Schema.Struct({
    data: Schema.Array(Schema.suspend(() => credit_note_line_itemSchema)),
    has_more: Schema.Boolean,
    object: Schema.Literals(["list"]),
    url: Schema.String,
  }),
  livemode: Schema.Boolean,
  memo: Schema.NullOr(Schema.String),
  metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
  number: Schema.String,
  object: Schema.Literals(["credit_note"]),
  out_of_band_amount: Schema.NullOr(Schema.Number),
  pdf: Schema.String,
  post_payment_amount: Schema.Number,
  pre_payment_amount: Schema.Number,
  pretax_credit_amounts: Schema.Array(
    Schema.suspend(() => credit_notes_pretax_credit_amountSchema),
  ),
  reason: Schema.NullOr(
    Schema.Literals([
      "duplicate",
      "fraudulent",
      "order_change",
      "product_unsatisfactory",
    ]),
  ),
  refunds: Schema.Array(Schema.suspend(() => credit_note_refundSchema)),
  shipping_cost: Schema.Unknown,
  status: Schema.Literals(["issued", "void"]),
  subtotal: Schema.Number,
  subtotal_excluding_tax: Schema.NullOr(Schema.Number),
  total: Schema.Number,
  total_excluding_tax: Schema.NullOr(Schema.Number),
  total_taxes: Schema.NullOr(
    Schema.Array(
      Schema.suspend(() => billing_bill_resource_invoicing_taxes_taxSchema),
    ),
  ),
  type: Schema.Literals(["mixed", "post_payment", "pre_payment"]),
  voided_at: Schema.NullOr(Schema.Number),
});
export const discounts_resource_discount_amountSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amount: Schema.Number,
    discount: Schema.Unknown,
  });
export const credit_note_line_itemSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amount: Schema.Number,
    description: Schema.NullOr(Schema.String),
    discount_amount: Schema.Number,
    discount_amounts: Schema.Array(
      Schema.suspend(() => discounts_resource_discount_amountSchema),
    ),
    id: Schema.String,
    invoice_line_item: Schema.optional(Schema.String),
    livemode: Schema.Boolean,
    metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
    object: Schema.Literals(["credit_note_line_item"]),
    pretax_credit_amounts: Schema.Array(
      Schema.suspend(() => credit_notes_pretax_credit_amountSchema),
    ),
    quantity: Schema.NullOr(Schema.Number),
    tax_rates: Schema.Array(Schema.suspend(() => tax_rateSchema)),
    taxes: Schema.NullOr(
      Schema.Array(
        Schema.suspend(() => billing_bill_resource_invoicing_taxes_taxSchema),
      ),
    ),
    type: Schema.Literals(["custom_line_item", "invoice_line_item"]),
    unit_amount: Schema.NullOr(Schema.Number),
    unit_amount_decimal: Schema.NullOr(Schema.String),
  });
export const credit_notes_pretax_credit_amountSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amount: Schema.Number,
    credit_balance_transaction: Schema.optional(Schema.Unknown),
    discount: Schema.optional(Schema.Unknown),
    type: Schema.Literals(["credit_balance_transaction", "discount"]),
  });
export const billing_bill_resource_invoicing_taxes_taxSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amount: Schema.Number,
    tax_behavior: Schema.Literals(["exclusive", "inclusive"]),
    tax_rate_details: Schema.Unknown,
    taxability_reason: Schema.Literals([
      "customer_exempt",
      "not_available",
      "not_collecting",
      "not_subject_to_tax",
      "not_supported",
      "portion_product_exempt",
      "portion_reduced_rated",
      "portion_standard_rated",
      "product_exempt",
      "product_exempt_holiday",
      "proportionally_rated",
      "reduced_rated",
      "reverse_charge",
      "standard_rated",
      "taxable_basis_reduced",
      "zero_rated",
    ]),
    taxable_amount: Schema.NullOr(Schema.Number),
    type: Schema.Literals(["tax_rate_details"]),
  });
export const credit_note_refundSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amount_refunded: Schema.Number,
    payment_record_refund: Schema.Unknown,
    refund: Schema.Unknown,
    type: Schema.NullOr(Schema.Literals(["payment_record_refund", "refund"])),
  });
export const customer_session_resource_componentsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    buy_button: Schema.suspend(
      () => customer_session_resource_components_resource_buy_buttonSchema,
    ),
    customer_sheet: Schema.suspend(
      () => customer_session_resource_components_resource_customer_sheetSchema,
    ),
    mobile_payment_element: Schema.suspend(
      () =>
        customer_session_resource_components_resource_mobile_payment_elementSchema,
    ),
    payment_element: Schema.suspend(
      () => customer_session_resource_components_resource_payment_elementSchema,
    ),
    pricing_table: Schema.suspend(
      () => customer_session_resource_components_resource_pricing_tableSchema,
    ),
  });
export const customer_session_resource_components_resource_buy_buttonSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.Boolean,
  });
export const customer_session_resource_components_resource_customer_sheetSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.Boolean,
    features: Schema.Unknown,
  });
export const customer_session_resource_components_resource_mobile_payment_elementSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.Boolean,
    features: Schema.Unknown,
  });
export const customer_session_resource_components_resource_payment_elementSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.Boolean,
    features: Schema.Unknown,
  });
export const customer_session_resource_components_resource_pricing_tableSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.Boolean,
  });
export const customerSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  address: Schema.optional(Schema.Unknown),
  balance: Schema.optional(Schema.Number),
  business_name: Schema.optional(Schema.String),
  cash_balance: Schema.optional(Schema.Unknown),
  created: Schema.Number,
  currency: Schema.optional(Schema.NullOr(Schema.String)),
  customer_account: Schema.optional(Schema.NullOr(Schema.String)),
  default_source: Schema.Unknown,
  delinquent: Schema.optional(Schema.NullOr(Schema.Boolean)),
  description: Schema.NullOr(Schema.String),
  discount: Schema.optional(Schema.Unknown),
  email: Schema.NullOr(Schema.String),
  id: Schema.String,
  individual_name: Schema.optional(Schema.String),
  invoice_credit_balance: Schema.optional(
    Schema.Record(Schema.String, Schema.Number),
  ),
  invoice_prefix: Schema.optional(Schema.NullOr(Schema.String)),
  invoice_settings: Schema.optional(
    Schema.suspend(() => invoice_setting_customer_settingSchema),
  ),
  livemode: Schema.Boolean,
  metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  name: Schema.optional(Schema.NullOr(Schema.String)),
  next_invoice_sequence: Schema.optional(Schema.Number),
  object: Schema.Literals(["customer"]),
  phone: Schema.optional(Schema.NullOr(Schema.String)),
  preferred_locales: Schema.optional(
    Schema.NullOr(Schema.Array(Schema.String)),
  ),
  shipping: Schema.Unknown,
  sources: Schema.optional(
    Schema.Struct({
      data: Schema.Array(Schema.suspend(() => payment_sourceSchema)),
      has_more: Schema.Boolean,
      object: Schema.Literals(["list"]),
      url: Schema.String,
    }),
  ),
  subscriptions: Schema.optional(
    Schema.Struct({
      data: Schema.Array(Schema.suspend(() => subscriptionSchema)),
      has_more: Schema.Boolean,
      object: Schema.Literals(["list"]),
      url: Schema.String,
    }),
  ),
  tax: Schema.optional(Schema.suspend(() => customer_taxSchema)),
  tax_exempt: Schema.optional(
    Schema.NullOr(Schema.Literals(["exempt", "none", "reverse"])),
  ),
  tax_ids: Schema.optional(
    Schema.Struct({
      data: Schema.Array(Schema.suspend(() => tax_idSchema)),
      has_more: Schema.Boolean,
      object: Schema.Literals(["list"]),
      url: Schema.String,
    }),
  ),
  test_clock: Schema.optional(Schema.Unknown),
});
export const invoice_setting_customer_settingSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    custom_fields: Schema.NullOr(
      Schema.Array(Schema.suspend(() => invoice_setting_custom_fieldSchema)),
    ),
    default_payment_method: Schema.Unknown,
    footer: Schema.NullOr(Schema.String),
    rendering_options: Schema.Unknown,
  });
export const invoice_setting_custom_fieldSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String,
    value: Schema.String,
  });
export const payment_sourceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export const subscriptionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  application: Schema.Unknown,
  application_fee_percent: Schema.NullOr(Schema.Number),
  automatic_tax: Schema.suspend(() => subscription_automatic_taxSchema),
  billing_cycle_anchor: Schema.Number,
  billing_cycle_anchor_config: Schema.Unknown,
  billing_mode: Schema.suspend(() => subscriptions_resource_billing_modeSchema),
  billing_thresholds: Schema.Unknown,
  cancel_at: Schema.NullOr(Schema.Number),
  cancel_at_period_end: Schema.Boolean,
  canceled_at: Schema.NullOr(Schema.Number),
  cancellation_details: Schema.Unknown,
  collection_method: Schema.Literals(["charge_automatically", "send_invoice"]),
  created: Schema.Number,
  currency: Schema.String,
  customer: Schema.Unknown,
  customer_account: Schema.NullOr(Schema.String),
  days_until_due: Schema.NullOr(Schema.Number),
  default_payment_method: Schema.Unknown,
  default_source: Schema.Unknown,
  default_tax_rates: Schema.optional(
    Schema.NullOr(Schema.Array(Schema.suspend(() => tax_rateSchema))),
  ),
  description: Schema.NullOr(Schema.String),
  discounts: Schema.Array(Schema.Unknown),
  ended_at: Schema.NullOr(Schema.Number),
  id: Schema.String,
  invoice_settings: Schema.suspend(
    () => subscriptions_resource_subscription_invoice_settingsSchema,
  ),
  items: Schema.Struct({
    data: Schema.Array(Schema.suspend(() => subscription_itemSchema)),
    has_more: Schema.Boolean,
    object: Schema.Literals(["list"]),
    url: Schema.String,
  }),
  latest_invoice: Schema.Unknown,
  livemode: Schema.Boolean,
  metadata: Schema.Record(Schema.String, Schema.String),
  next_pending_invoice_item_invoice: Schema.NullOr(Schema.Number),
  object: Schema.Literals(["subscription"]),
  on_behalf_of: Schema.Unknown,
  pause_collection: Schema.Unknown,
  payment_settings: Schema.Unknown,
  pending_invoice_item_interval: Schema.Unknown,
  pending_setup_intent: Schema.Unknown,
  pending_update: Schema.Unknown,
  presentment_details: Schema.optional(
    Schema.suspend(
      () => subscriptions_resource_subscription_presentment_detailsSchema,
    ),
  ),
  schedule: Schema.Unknown,
  start_date: Schema.Number,
  status: Schema.Literals([
    "active",
    "canceled",
    "incomplete",
    "incomplete_expired",
    "past_due",
    "paused",
    "trialing",
    "unpaid",
  ]),
  test_clock: Schema.Unknown,
  transfer_data: Schema.Unknown,
  trial_end: Schema.NullOr(Schema.Number),
  trial_settings: Schema.Unknown,
  trial_start: Schema.NullOr(Schema.Number),
});
export const subscription_automatic_taxSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    disabled_reason: Schema.NullOr(
      Schema.Literals(["requires_location_inputs"]),
    ),
    enabled: Schema.Boolean,
    liability: Schema.Unknown,
  });
export const subscriptions_resource_billing_modeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    flexible: Schema.Unknown,
    type: Schema.Literals(["classic", "flexible"]),
    updated_at: Schema.optional(Schema.Number),
  });
export const subscriptions_resource_subscription_invoice_settingsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    account_tax_ids: Schema.NullOr(Schema.Array(Schema.Unknown)),
    issuer: Schema.suspend(() => connect_account_referenceSchema),
  });
export const connect_account_referenceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    account: Schema.optional(Schema.Unknown),
    type: Schema.Literals(["account", "self"]),
  });
export const subscription_itemSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billing_thresholds: Schema.Unknown,
    created: Schema.Number,
    current_period_end: Schema.Number,
    current_period_start: Schema.Number,
    discounts: Schema.Array(Schema.Unknown),
    id: Schema.String,
    metadata: Schema.Record(Schema.String, Schema.String),
    object: Schema.Literals(["subscription_item"]),
    plan: Schema.suspend(() => planSchema),
    price: Schema.suspend(() => priceSchema),
    quantity: Schema.optional(Schema.Number),
    subscription: Schema.String,
    tax_rates: Schema.NullOr(
      Schema.Array(Schema.suspend(() => tax_rateSchema)),
    ),
  });
export const planSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  active: Schema.Boolean,
  amount: Schema.NullOr(Schema.Number),
  amount_decimal: Schema.NullOr(Schema.String),
  billing_scheme: Schema.Literals(["per_unit", "tiered"]),
  created: Schema.Number,
  currency: Schema.String,
  id: Schema.String,
  interval: Schema.Literals(["day", "month", "week", "year"]),
  interval_count: Schema.Number,
  livemode: Schema.Boolean,
  metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
  meter: Schema.NullOr(Schema.String),
  nickname: Schema.NullOr(Schema.String),
  object: Schema.Literals(["plan"]),
  product: Schema.Unknown,
  tiers: Schema.optional(Schema.Array(Schema.suspend(() => plan_tierSchema))),
  tiers_mode: Schema.NullOr(Schema.Literals(["graduated", "volume"])),
  transform_usage: Schema.Unknown,
  trial_period_days: Schema.NullOr(Schema.Number),
  usage_type: Schema.Literals(["licensed", "metered"]),
});
export const plan_tierSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  flat_amount: Schema.NullOr(Schema.Number),
  flat_amount_decimal: Schema.NullOr(Schema.String),
  unit_amount: Schema.NullOr(Schema.Number),
  unit_amount_decimal: Schema.NullOr(Schema.String),
  up_to: Schema.NullOr(Schema.Number),
});
export const priceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  active: Schema.Boolean,
  billing_scheme: Schema.Literals(["per_unit", "tiered"]),
  created: Schema.Number,
  currency: Schema.String,
  currency_options: Schema.optional(
    Schema.Record(
      Schema.String,
      Schema.suspend(() => currency_optionSchema),
    ),
  ),
  custom_unit_amount: Schema.Unknown,
  id: Schema.String,
  livemode: Schema.Boolean,
  lookup_key: Schema.NullOr(Schema.String),
  metadata: Schema.Record(Schema.String, Schema.String),
  nickname: Schema.NullOr(Schema.String),
  object: Schema.Literals(["price"]),
  product: Schema.Unknown,
  recurring: Schema.Unknown,
  tax_behavior: Schema.NullOr(
    Schema.Literals(["exclusive", "inclusive", "unspecified"]),
  ),
  tiers: Schema.optional(Schema.Array(Schema.suspend(() => price_tierSchema))),
  tiers_mode: Schema.NullOr(Schema.Literals(["graduated", "volume"])),
  transform_quantity: Schema.Unknown,
  type: Schema.Literals(["one_time", "recurring"]),
  unit_amount: Schema.NullOr(Schema.Number),
  unit_amount_decimal: Schema.NullOr(Schema.String),
});
export const currency_optionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  custom_unit_amount: Schema.Unknown,
  tax_behavior: Schema.NullOr(
    Schema.Literals(["exclusive", "inclusive", "unspecified"]),
  ),
  tiers: Schema.optional(Schema.Array(Schema.suspend(() => price_tierSchema))),
  unit_amount: Schema.NullOr(Schema.Number),
  unit_amount_decimal: Schema.NullOr(Schema.String),
});
export const price_tierSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  flat_amount: Schema.NullOr(Schema.Number),
  flat_amount_decimal: Schema.NullOr(Schema.String),
  unit_amount: Schema.NullOr(Schema.Number),
  unit_amount_decimal: Schema.NullOr(Schema.String),
  up_to: Schema.NullOr(Schema.Number),
});
export const subscriptions_resource_subscription_presentment_detailsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    presentment_currency: Schema.String,
  });
export const customer_taxSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  automatic_tax: Schema.Literals([
    "failed",
    "not_collecting",
    "supported",
    "unrecognized_location",
  ]),
  ip_address: Schema.NullOr(Schema.String),
  location: Schema.Unknown,
  provider: Schema.Literals(["anrok", "avalara", "sphere", "stripe"]),
});
export const tax_idSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  country: Schema.NullOr(Schema.String),
  created: Schema.Number,
  customer: Schema.Unknown,
  customer_account: Schema.NullOr(Schema.String),
  id: Schema.String,
  livemode: Schema.Boolean,
  object: Schema.Literals(["tax_id"]),
  owner: Schema.Unknown,
  type: Schema.Literals([
    "ad_nrt",
    "ae_trn",
    "al_tin",
    "am_tin",
    "ao_tin",
    "ar_cuit",
    "au_abn",
    "au_arn",
    "aw_tin",
    "az_tin",
    "ba_tin",
    "bb_tin",
    "bd_bin",
    "bf_ifu",
    "bg_uic",
    "bh_vat",
    "bj_ifu",
    "bo_tin",
    "br_cnpj",
    "br_cpf",
    "bs_tin",
    "by_tin",
    "ca_bn",
    "ca_gst_hst",
    "ca_pst_bc",
    "ca_pst_mb",
    "ca_pst_sk",
    "ca_qst",
    "cd_nif",
    "ch_uid",
    "ch_vat",
    "cl_tin",
    "cm_niu",
    "cn_tin",
    "co_nit",
    "cr_tin",
    "cv_nif",
    "de_stn",
    "do_rcn",
    "ec_ruc",
    "eg_tin",
    "es_cif",
    "et_tin",
    "eu_oss_vat",
    "eu_vat",
    "gb_vat",
    "ge_vat",
    "gn_nif",
    "hk_br",
    "hr_oib",
    "hu_tin",
    "id_npwp",
    "il_vat",
    "in_gst",
    "is_vat",
    "jp_cn",
    "jp_rn",
    "jp_trn",
    "ke_pin",
    "kg_tin",
    "kh_tin",
    "kr_brn",
    "kz_bin",
    "la_tin",
    "li_uid",
    "li_vat",
    "lk_vat",
    "ma_vat",
    "md_vat",
    "me_pib",
    "mk_vat",
    "mr_nif",
    "mx_rfc",
    "my_frp",
    "my_itn",
    "my_sst",
    "ng_tin",
    "no_vat",
    "no_voec",
    "np_pan",
    "nz_gst",
    "om_vat",
    "pe_ruc",
    "ph_tin",
    "pl_nip",
    "ro_tin",
    "rs_pib",
    "ru_inn",
    "ru_kpp",
    "sa_vat",
    "sg_gst",
    "sg_uen",
    "si_tin",
    "sn_ninea",
    "sr_fin",
    "sv_nit",
    "th_vat",
    "tj_tin",
    "tr_tin",
    "tw_vat",
    "tz_vat",
    "ua_vat",
    "ug_tin",
    "unknown",
    "us_ein",
    "uy_ruc",
    "uz_tin",
    "uz_vat",
    "ve_rif",
    "vn_tin",
    "za_vat",
    "zm_tin",
    "zw_tin",
  ]),
  value: Schema.String,
  verification: Schema.Unknown,
});
export const customer_balance_transactionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amount: Schema.Number,
    checkout_session: Schema.Unknown,
    created: Schema.Number,
    credit_note: Schema.Unknown,
    currency: Schema.String,
    customer: Schema.Unknown,
    customer_account: Schema.NullOr(Schema.String),
    description: Schema.NullOr(Schema.String),
    ending_balance: Schema.Number,
    id: Schema.String,
    invoice: Schema.Unknown,
    livemode: Schema.Boolean,
    metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
    object: Schema.Literals(["customer_balance_transaction"]),
    type: Schema.Literals([
      "adjustment",
      "applied_to_invoice",
      "checkout_session_subscription_payment",
      "checkout_session_subscription_payment_canceled",
      "credit_note",
      "initial",
      "invoice_overpaid",
      "invoice_too_large",
      "invoice_too_small",
      "migration",
      "unapplied_from_invoice",
      "unspent_receiver_credit",
    ]),
  });
export const customer_balance_customer_balance_settingsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reconciliation_mode: Schema.Literals(["automatic", "manual"]),
    using_merchant_default: Schema.Boolean,
  });
export const customer_cash_balance_transactionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    adjusted_for_overdraft: Schema.optional(
      Schema.suspend(
        () =>
          customer_balance_resource_cash_balance_transaction_resource_adjusted_for_overdraftSchema,
      ),
    ),
    applied_to_payment: Schema.optional(
      Schema.suspend(
        () =>
          customer_balance_resource_cash_balance_transaction_resource_applied_to_payment_transactionSchema,
      ),
    ),
    created: Schema.Number,
    currency: Schema.String,
    customer: Schema.Unknown,
    customer_account: Schema.NullOr(Schema.String),
    ending_balance: Schema.Number,
    funded: Schema.optional(
      Schema.suspend(
        () =>
          customer_balance_resource_cash_balance_transaction_resource_funded_transactionSchema,
      ),
    ),
    id: Schema.String,
    livemode: Schema.Boolean,
    net_amount: Schema.Number,
    object: Schema.Literals(["customer_cash_balance_transaction"]),
    refunded_from_payment: Schema.optional(
      Schema.suspend(
        () =>
          customer_balance_resource_cash_balance_transaction_resource_refunded_from_payment_transactionSchema,
      ),
    ),
    transferred_to_balance: Schema.optional(
      Schema.suspend(
        () =>
          customer_balance_resource_cash_balance_transaction_resource_transferred_to_balanceSchema,
      ),
    ),
    type: Schema.Literals([
      "adjusted_for_overdraft",
      "applied_to_payment",
      "funded",
      "funding_reversed",
      "refunded_from_payment",
      "return_canceled",
      "return_initiated",
      "transferred_to_balance",
      "unapplied_from_payment",
    ]),
    unapplied_from_payment: Schema.optional(
      Schema.suspend(
        () =>
          customer_balance_resource_cash_balance_transaction_resource_unapplied_from_payment_transactionSchema,
      ),
    ),
  });
export const customer_balance_resource_cash_balance_transaction_resource_adjusted_for_overdraftSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    balance_transaction: Schema.Unknown,
    linked_transaction: Schema.Unknown,
  });
export const customer_balance_resource_cash_balance_transaction_resource_applied_to_payment_transactionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    payment_intent: Schema.Unknown,
  });
export const customer_balance_resource_cash_balance_transaction_resource_funded_transactionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bank_transfer: Schema.suspend(
      () =>
        customer_balance_resource_cash_balance_transaction_resource_funded_transaction_resource_bank_transferSchema,
    ),
  });
export const customer_balance_resource_cash_balance_transaction_resource_funded_transaction_resource_bank_transferSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    eu_bank_transfer: Schema.optional(
      Schema.suspend(
        () =>
          customer_balance_resource_cash_balance_transaction_resource_funded_transaction_resource_bank_transfer_resource_eu_bank_transferSchema,
      ),
    ),
    gb_bank_transfer: Schema.optional(
      Schema.suspend(
        () =>
          customer_balance_resource_cash_balance_transaction_resource_funded_transaction_resource_bank_transfer_resource_gb_bank_transferSchema,
      ),
    ),
    jp_bank_transfer: Schema.optional(
      Schema.suspend(
        () =>
          customer_balance_resource_cash_balance_transaction_resource_funded_transaction_resource_bank_transfer_resource_jp_bank_transferSchema,
      ),
    ),
    reference: Schema.NullOr(Schema.String),
    type: Schema.Literals([
      "eu_bank_transfer",
      "gb_bank_transfer",
      "jp_bank_transfer",
      "mx_bank_transfer",
      "us_bank_transfer",
    ]),
    us_bank_transfer: Schema.optional(
      Schema.suspend(
        () =>
          customer_balance_resource_cash_balance_transaction_resource_funded_transaction_resource_bank_transfer_resource_us_bank_transferSchema,
      ),
    ),
  });
export const customer_balance_resource_cash_balance_transaction_resource_funded_transaction_resource_bank_transfer_resource_eu_bank_transferSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bic: Schema.NullOr(Schema.String),
    iban_last4: Schema.NullOr(Schema.String),
    sender_name: Schema.NullOr(Schema.String),
  });
export const customer_balance_resource_cash_balance_transaction_resource_funded_transaction_resource_bank_transfer_resource_gb_bank_transferSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    account_number_last4: Schema.NullOr(Schema.String),
    sender_name: Schema.NullOr(Schema.String),
    sort_code: Schema.NullOr(Schema.String),
  });
export const customer_balance_resource_cash_balance_transaction_resource_funded_transaction_resource_bank_transfer_resource_jp_bank_transferSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sender_bank: Schema.NullOr(Schema.String),
    sender_branch: Schema.NullOr(Schema.String),
    sender_name: Schema.NullOr(Schema.String),
  });
export const customer_balance_resource_cash_balance_transaction_resource_funded_transaction_resource_bank_transfer_resource_us_bank_transferSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    network: Schema.optional(
      Schema.Literals(["ach", "domestic_wire_us", "swift"]),
    ),
    sender_name: Schema.NullOr(Schema.String),
  });
export const customer_balance_resource_cash_balance_transaction_resource_refunded_from_payment_transactionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    refund: Schema.Unknown,
  });
export const customer_balance_resource_cash_balance_transaction_resource_transferred_to_balanceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    balance_transaction: Schema.Unknown,
  });
export const customer_balance_resource_cash_balance_transaction_resource_unapplied_from_payment_transactionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    payment_intent: Schema.Unknown,
  });
export const funding_instructions_bank_transferSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    country: Schema.String,
    financial_addresses: Schema.Array(
      Schema.suspend(
        () => funding_instructions_bank_transfer_financial_addressSchema,
      ),
    ),
    type: Schema.Literals(["eu_bank_transfer", "jp_bank_transfer"]),
  });
export const funding_instructions_bank_transfer_financial_addressSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    aba: Schema.optional(
      Schema.suspend(() => funding_instructions_bank_transfer_aba_recordSchema),
    ),
    iban: Schema.optional(
      Schema.suspend(
        () => funding_instructions_bank_transfer_iban_recordSchema,
      ),
    ),
    sort_code: Schema.optional(
      Schema.suspend(
        () => funding_instructions_bank_transfer_sort_code_recordSchema,
      ),
    ),
    spei: Schema.optional(
      Schema.suspend(
        () => funding_instructions_bank_transfer_spei_recordSchema,
      ),
    ),
    supported_networks: Schema.optional(
      Schema.Array(
        Schema.Literals([
          "ach",
          "bacs",
          "domestic_wire_us",
          "fps",
          "sepa",
          "spei",
          "swift",
          "zengin",
        ]),
      ),
    ),
    swift: Schema.optional(
      Schema.suspend(
        () => funding_instructions_bank_transfer_swift_recordSchema,
      ),
    ),
    type: Schema.Literals([
      "aba",
      "iban",
      "sort_code",
      "spei",
      "swift",
      "zengin",
    ]),
    zengin: Schema.optional(
      Schema.suspend(
        () => funding_instructions_bank_transfer_zengin_recordSchema,
      ),
    ),
  });
export const funding_instructions_bank_transfer_aba_recordSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    account_holder_address: Schema.suspend(() => addressSchema),
    account_holder_name: Schema.String,
    account_number: Schema.String,
    account_type: Schema.String,
    bank_address: Schema.suspend(() => addressSchema),
    bank_name: Schema.String,
    routing_number: Schema.String,
  });
export const funding_instructions_bank_transfer_iban_recordSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    account_holder_address: Schema.suspend(() => addressSchema),
    account_holder_name: Schema.String,
    bank_address: Schema.suspend(() => addressSchema),
    bic: Schema.String,
    country: Schema.String,
    iban: Schema.String,
  });
export const funding_instructions_bank_transfer_sort_code_recordSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    account_holder_address: Schema.suspend(() => addressSchema),
    account_holder_name: Schema.String,
    account_number: Schema.String,
    bank_address: Schema.suspend(() => addressSchema),
    sort_code: Schema.String,
  });
export const funding_instructions_bank_transfer_spei_recordSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    account_holder_address: Schema.suspend(() => addressSchema),
    account_holder_name: Schema.String,
    bank_address: Schema.suspend(() => addressSchema),
    bank_code: Schema.String,
    bank_name: Schema.String,
    clabe: Schema.String,
  });
export const funding_instructions_bank_transfer_swift_recordSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    account_holder_address: Schema.suspend(() => addressSchema),
    account_holder_name: Schema.String,
    account_number: Schema.String,
    account_type: Schema.String,
    bank_address: Schema.suspend(() => addressSchema),
    bank_name: Schema.String,
    swift_code: Schema.String,
  });
export const funding_instructions_bank_transfer_zengin_recordSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    account_holder_address: Schema.suspend(() => addressSchema),
    account_holder_name: Schema.NullOr(Schema.String),
    account_number: Schema.NullOr(Schema.String),
    account_type: Schema.NullOr(Schema.String),
    bank_address: Schema.suspend(() => addressSchema),
    bank_code: Schema.NullOr(Schema.String),
    bank_name: Schema.NullOr(Schema.String),
    branch_code: Schema.NullOr(Schema.String),
    branch_name: Schema.NullOr(Schema.String),
  });
export const payment_methodSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  acss_debit: Schema.optional(
    Schema.suspend(() => payment_method_acss_debitSchema),
  ),
  affirm: Schema.optional(Schema.suspend(() => payment_method_affirmSchema)),
  afterpay_clearpay: Schema.optional(
    Schema.suspend(() => payment_method_afterpay_clearpaySchema),
  ),
  alipay: Schema.optional(
    Schema.suspend(() => payment_flows_private_payment_methods_alipaySchema),
  ),
  allow_redisplay: Schema.optional(
    Schema.Literals(["always", "limited", "unspecified"]),
  ),
  alma: Schema.optional(Schema.suspend(() => payment_method_almaSchema)),
  amazon_pay: Schema.optional(
    Schema.suspend(() => payment_method_amazon_paySchema),
  ),
  au_becs_debit: Schema.optional(
    Schema.suspend(() => payment_method_au_becs_debitSchema),
  ),
  bacs_debit: Schema.optional(
    Schema.suspend(() => payment_method_bacs_debitSchema),
  ),
  bancontact: Schema.optional(
    Schema.suspend(() => payment_method_bancontactSchema),
  ),
  billie: Schema.optional(Schema.suspend(() => payment_method_billieSchema)),
  billing_details: Schema.suspend(() => billing_detailsSchema),
  blik: Schema.optional(Schema.suspend(() => payment_method_blikSchema)),
  boleto: Schema.optional(Schema.suspend(() => payment_method_boletoSchema)),
  card: Schema.optional(Schema.suspend(() => payment_method_cardSchema)),
  card_present: Schema.optional(
    Schema.suspend(() => payment_method_card_presentSchema),
  ),
  cashapp: Schema.optional(Schema.suspend(() => payment_method_cashappSchema)),
  created: Schema.Number,
  crypto: Schema.optional(Schema.suspend(() => payment_method_cryptoSchema)),
  custom: Schema.optional(Schema.suspend(() => payment_method_customSchema)),
  customer: Schema.Unknown,
  customer_account: Schema.NullOr(Schema.String),
  customer_balance: Schema.optional(
    Schema.suspend(() => payment_method_customer_balanceSchema),
  ),
  eps: Schema.optional(Schema.suspend(() => payment_method_epsSchema)),
  fpx: Schema.optional(Schema.suspend(() => payment_method_fpxSchema)),
  giropay: Schema.optional(Schema.suspend(() => payment_method_giropaySchema)),
  grabpay: Schema.optional(Schema.suspend(() => payment_method_grabpaySchema)),
  id: Schema.String,
  ideal: Schema.optional(Schema.suspend(() => payment_method_idealSchema)),
  interac_present: Schema.optional(
    Schema.suspend(() => payment_method_interac_presentSchema),
  ),
  kakao_pay: Schema.optional(
    Schema.suspend(() => payment_method_kakao_paySchema),
  ),
  klarna: Schema.optional(Schema.suspend(() => payment_method_klarnaSchema)),
  konbini: Schema.optional(Schema.suspend(() => payment_method_konbiniSchema)),
  kr_card: Schema.optional(Schema.suspend(() => payment_method_kr_cardSchema)),
  link: Schema.optional(Schema.suspend(() => payment_method_linkSchema)),
  livemode: Schema.Boolean,
  mb_way: Schema.optional(Schema.suspend(() => payment_method_mb_waySchema)),
  metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
  mobilepay: Schema.optional(
    Schema.suspend(() => payment_method_mobilepaySchema),
  ),
  multibanco: Schema.optional(
    Schema.suspend(() => payment_method_multibancoSchema),
  ),
  naver_pay: Schema.optional(
    Schema.suspend(() => payment_method_naver_paySchema),
  ),
  nz_bank_account: Schema.optional(
    Schema.suspend(() => payment_method_nz_bank_accountSchema),
  ),
  object: Schema.Literals(["payment_method"]),
  oxxo: Schema.optional(Schema.suspend(() => payment_method_oxxoSchema)),
  p24: Schema.optional(Schema.suspend(() => payment_method_p24Schema)),
  pay_by_bank: Schema.optional(
    Schema.suspend(() => payment_method_pay_by_bankSchema),
  ),
  payco: Schema.optional(Schema.suspend(() => payment_method_paycoSchema)),
  paynow: Schema.optional(Schema.suspend(() => payment_method_paynowSchema)),
  paypal: Schema.optional(Schema.suspend(() => payment_method_paypalSchema)),
  payto: Schema.optional(Schema.suspend(() => payment_method_paytoSchema)),
  pix: Schema.optional(Schema.suspend(() => payment_method_pixSchema)),
  promptpay: Schema.optional(
    Schema.suspend(() => payment_method_promptpaySchema),
  ),
  radar_options: Schema.optional(
    Schema.suspend(() => radar_radar_optionsSchema),
  ),
  revolut_pay: Schema.optional(
    Schema.suspend(() => payment_method_revolut_paySchema),
  ),
  samsung_pay: Schema.optional(
    Schema.suspend(() => payment_method_samsung_paySchema),
  ),
  satispay: Schema.optional(
    Schema.suspend(() => payment_method_satispaySchema),
  ),
  sepa_debit: Schema.optional(
    Schema.suspend(() => payment_method_sepa_debitSchema),
  ),
  sofort: Schema.optional(Schema.suspend(() => payment_method_sofortSchema)),
  swish: Schema.optional(Schema.suspend(() => payment_method_swishSchema)),
  twint: Schema.optional(Schema.suspend(() => payment_method_twintSchema)),
  type: Schema.Literals([
    "acss_debit",
    "affirm",
    "afterpay_clearpay",
    "alipay",
    "alma",
    "amazon_pay",
    "au_becs_debit",
    "bacs_debit",
    "bancontact",
    "billie",
    "blik",
    "boleto",
    "card",
    "card_present",
    "cashapp",
    "crypto",
    "custom",
    "customer_balance",
    "eps",
    "fpx",
    "giropay",
    "grabpay",
    "ideal",
    "interac_present",
    "kakao_pay",
    "klarna",
    "konbini",
    "kr_card",
    "link",
    "mb_way",
    "mobilepay",
    "multibanco",
    "naver_pay",
    "nz_bank_account",
    "oxxo",
    "p24",
    "pay_by_bank",
    "payco",
    "paynow",
    "paypal",
    "payto",
    "pix",
    "promptpay",
    "revolut_pay",
    "samsung_pay",
    "satispay",
    "sepa_debit",
    "sofort",
    "swish",
    "twint",
    "upi",
    "us_bank_account",
    "wechat_pay",
    "zip",
  ]),
  upi: Schema.optional(Schema.suspend(() => payment_method_upiSchema)),
  us_bank_account: Schema.optional(
    Schema.suspend(() => payment_method_us_bank_accountSchema),
  ),
  wechat_pay: Schema.optional(
    Schema.suspend(() => payment_method_wechat_paySchema),
  ),
  zip: Schema.optional(Schema.suspend(() => payment_method_zipSchema)),
});
export const payment_method_acss_debitSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bank_name: Schema.NullOr(Schema.String),
    fingerprint: Schema.NullOr(Schema.String),
    institution_number: Schema.NullOr(Schema.String),
    last4: Schema.NullOr(Schema.String),
    transit_number: Schema.NullOr(Schema.String),
  });
export const payment_method_affirmSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({});
export const payment_method_afterpay_clearpaySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({});
export const payment_flows_private_payment_methods_alipaySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({});
export const payment_method_almaSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({});
export const payment_method_amazon_paySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({});
export const payment_method_au_becs_debitSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bsb_number: Schema.NullOr(Schema.String),
    fingerprint: Schema.NullOr(Schema.String),
    last4: Schema.NullOr(Schema.String),
  });
export const payment_method_bacs_debitSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fingerprint: Schema.NullOr(Schema.String),
    last4: Schema.NullOr(Schema.String),
    sort_code: Schema.NullOr(Schema.String),
  });
export const payment_method_bancontactSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({});
export const payment_method_billieSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({});
export const payment_method_blikSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({});
export const payment_method_boletoSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tax_id: Schema.String,
  });
export const payment_method_cardSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    brand: Schema.String,
    checks: Schema.Unknown,
    country: Schema.NullOr(Schema.String),
    description: Schema.optional(Schema.NullOr(Schema.String)),
    display_brand: Schema.NullOr(Schema.String),
    exp_month: Schema.Number,
    exp_year: Schema.Number,
    fingerprint: Schema.optional(Schema.NullOr(Schema.String)),
    funding: Schema.String,
    generated_from: Schema.Unknown,
    iin: Schema.optional(Schema.NullOr(Schema.String)),
    issuer: Schema.optional(Schema.NullOr(Schema.String)),
    last4: Schema.String,
    networks: Schema.Unknown,
    regulated_status: Schema.NullOr(
      Schema.Literals(["regulated", "unregulated"]),
    ),
    three_d_secure_usage: Schema.Unknown,
    wallet: Schema.Unknown,
  });
export const payment_method_card_presentSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    brand: Schema.NullOr(Schema.String),
    brand_product: Schema.NullOr(Schema.String),
    cardholder_name: Schema.NullOr(Schema.String),
    country: Schema.NullOr(Schema.String),
    description: Schema.optional(Schema.NullOr(Schema.String)),
    exp_month: Schema.Number,
    exp_year: Schema.Number,
    fingerprint: Schema.NullOr(Schema.String),
    funding: Schema.NullOr(Schema.String),
    iin: Schema.optional(Schema.NullOr(Schema.String)),
    issuer: Schema.optional(Schema.NullOr(Schema.String)),
    last4: Schema.NullOr(Schema.String),
    networks: Schema.Unknown,
    offline: Schema.Unknown,
    preferred_locales: Schema.NullOr(Schema.Array(Schema.String)),
    read_method: Schema.NullOr(
      Schema.Literals([
        "contact_emv",
        "contactless_emv",
        "contactless_magstripe_mode",
        "magnetic_stripe_fallback",
        "magnetic_stripe_track2",
      ]),
    ),
    wallet: Schema.optional(
      Schema.suspend(
        () =>
          payment_flows_private_payment_methods_card_present_common_walletSchema,
      ),
    ),
  });
export const payment_flows_private_payment_methods_card_present_common_walletSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.Literals([
      "apple_pay",
      "google_pay",
      "samsung_pay",
      "unknown",
    ]),
  });
export const payment_method_cashappSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    buyer_id: Schema.NullOr(Schema.String),
    cashtag: Schema.NullOr(Schema.String),
  });
export const payment_method_cryptoSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({});
export const payment_method_customSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    display_name: Schema.NullOr(Schema.String),
    logo: Schema.Unknown,
    type: Schema.String,
  });
export const payment_method_customer_balanceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({});
export const payment_method_epsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bank: Schema.NullOr(
      Schema.Literals([
        "arzte_und_apotheker_bank",
        "austrian_anadi_bank_ag",
        "bank_austria",
        "bankhaus_carl_spangler",
        "bankhaus_schelhammer_und_schattera_ag",
        "bawag_psk_ag",
        "bks_bank_ag",
        "brull_kallmus_bank_ag",
        "btv_vier_lander_bank",
        "capital_bank_grawe_gruppe_ag",
        "deutsche_bank_ag",
        "dolomitenbank",
        "easybank_ag",
        "erste_bank_und_sparkassen",
        "hypo_alpeadriabank_international_ag",
        "hypo_bank_burgenland_aktiengesellschaft",
        "hypo_noe_lb_fur_niederosterreich_u_wien",
        "hypo_oberosterreich_salzburg_steiermark",
        "hypo_tirol_bank_ag",
        "hypo_vorarlberg_bank_ag",
        "marchfelder_bank",
        "oberbank_ag",
        "raiffeisen_bankengruppe_osterreich",
        "schoellerbank_ag",
        "sparda_bank_wien",
        "volksbank_gruppe",
        "volkskreditbank_ag",
        "vr_bank_braunau",
      ]),
    ),
  });
export const payment_method_fpxSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    account_holder_type: Schema.NullOr(
      Schema.Literals(["company", "individual"]),
    ),
    bank: Schema.Literals([
      "affin_bank",
      "agrobank",
      "alliance_bank",
      "ambank",
      "bank_islam",
      "bank_muamalat",
      "bank_of_china",
      "bank_rakyat",
      "bsn",
      "cimb",
      "deutsche_bank",
      "hong_leong_bank",
      "hsbc",
      "kfh",
      "maybank2e",
      "maybank2u",
      "ocbc",
      "pb_enterprise",
      "public_bank",
      "rhb",
      "standard_chartered",
      "uob",
    ]),
  });
export const payment_method_giropaySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({});
export const payment_method_grabpaySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({});
export const payment_method_idealSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bank: Schema.NullOr(
      Schema.Literals([
        "abn_amro",
        "adyen",
        "asn_bank",
        "bunq",
        "buut",
        "finom",
        "handelsbanken",
        "ing",
        "knab",
        "mollie",
        "moneyou",
        "n26",
        "nn",
        "rabobank",
        "regiobank",
        "revolut",
        "sns_bank",
        "triodos_bank",
        "van_lanschot",
        "yoursafe",
      ]),
    ),
    bic: Schema.NullOr(
      Schema.Literals([
        "ABNANL2A",
        "ADYBNL2A",
        "ASNBNL21",
        "BITSNL2A",
        "BUNQNL2A",
        "BUUTNL2A",
        "FNOMNL22",
        "FVLBNL22",
        "HANDNL2A",
        "INGBNL2A",
        "KNABNL2H",
        "MLLENL2A",
        "MOYONL21",
        "NNBANL2G",
        "NTSBDEB1",
        "RABONL2U",
        "RBRBNL21",
        "REVOIE23",
        "REVOLT21",
        "SNSBNL2A",
        "TRIONL2U",
      ]),
    ),
  });
export const payment_method_interac_presentSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    brand: Schema.NullOr(Schema.String),
    cardholder_name: Schema.NullOr(Schema.String),
    country: Schema.NullOr(Schema.String),
    description: Schema.optional(Schema.NullOr(Schema.String)),
    exp_month: Schema.Number,
    exp_year: Schema.Number,
    fingerprint: Schema.NullOr(Schema.String),
    funding: Schema.NullOr(Schema.String),
    iin: Schema.optional(Schema.NullOr(Schema.String)),
    issuer: Schema.optional(Schema.NullOr(Schema.String)),
    last4: Schema.NullOr(Schema.String),
    networks: Schema.Unknown,
    preferred_locales: Schema.NullOr(Schema.Array(Schema.String)),
    read_method: Schema.NullOr(
      Schema.Literals([
        "contact_emv",
        "contactless_emv",
        "contactless_magstripe_mode",
        "magnetic_stripe_fallback",
        "magnetic_stripe_track2",
      ]),
    ),
  });
export const payment_method_kakao_paySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({});
export const payment_method_klarnaSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dob: Schema.optional(Schema.Unknown),
  });
export const payment_method_konbiniSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({});
export const payment_method_kr_cardSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    brand: Schema.NullOr(
      Schema.Literals([
        "bc",
        "citi",
        "hana",
        "hyundai",
        "jeju",
        "jeonbuk",
        "kakaobank",
        "kbank",
        "kdbbank",
        "kookmin",
        "kwangju",
        "lotte",
        "mg",
        "nh",
        "post",
        "samsung",
        "savingsbank",
        "shinhan",
        "shinhyup",
        "suhyup",
        "tossbank",
        "woori",
      ]),
    ),
    last4: Schema.NullOr(Schema.String),
  });
export const payment_method_linkSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    email: Schema.NullOr(Schema.String),
    persistent_token: Schema.optional(Schema.String),
  });
export const payment_method_mb_waySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({});
export const payment_method_mobilepaySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({});
export const payment_method_multibancoSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({});
export const payment_method_naver_paySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    buyer_id: Schema.NullOr(Schema.String),
    funding: Schema.Literals(["card", "points"]),
  });
export const payment_method_nz_bank_accountSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    account_holder_name: Schema.NullOr(Schema.String),
    bank_code: Schema.String,
    bank_name: Schema.String,
    branch_code: Schema.String,
    last4: Schema.String,
    suffix: Schema.NullOr(Schema.String),
  });
export const payment_method_oxxoSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({});
export const payment_method_p24Schema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bank: Schema.NullOr(
      Schema.Literals([
        "alior_bank",
        "bank_millennium",
        "bank_nowy_bfg_sa",
        "bank_pekao_sa",
        "banki_spbdzielcze",
        "blik",
        "bnp_paribas",
        "boz",
        "citi_handlowy",
        "credit_agricole",
        "envelobank",
        "etransfer_pocztowy24",
        "getin_bank",
        "ideabank",
        "ing",
        "inteligo",
        "mbank_mtransfer",
        "nest_przelew",
        "noble_pay",
        "pbac_z_ipko",
        "plus_bank",
        "santander_przelew24",
        "tmobile_usbugi_bankowe",
        "toyota_bank",
        "velobank",
        "volkswagen_bank",
      ]),
    ),
  });
export const payment_method_pay_by_bankSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({});
export const payment_method_paycoSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({});
export const payment_method_paynowSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({});
export const payment_method_paypalSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    country: Schema.NullOr(Schema.String),
    payer_email: Schema.NullOr(Schema.String),
    payer_id: Schema.NullOr(Schema.String),
  });
export const payment_method_paytoSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bsb_number: Schema.NullOr(Schema.String),
    last4: Schema.NullOr(Schema.String),
    pay_id: Schema.NullOr(Schema.String),
  });
export const payment_method_pixSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({});
export const payment_method_promptpaySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({});
export const payment_method_revolut_paySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({});
export const payment_method_samsung_paySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({});
export const payment_method_satispaySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({});
export const payment_method_sepa_debitSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bank_code: Schema.NullOr(Schema.String),
    branch_code: Schema.NullOr(Schema.String),
    country: Schema.NullOr(Schema.String),
    fingerprint: Schema.NullOr(Schema.String),
    generated_from: Schema.Unknown,
    last4: Schema.NullOr(Schema.String),
  });
export const payment_method_sofortSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    country: Schema.NullOr(Schema.String),
  });
export const payment_method_swishSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({});
export const payment_method_twintSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({});
export const payment_method_upiSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vpa: Schema.NullOr(Schema.String),
  });
export const payment_method_us_bank_accountSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    account_holder_type: Schema.NullOr(
      Schema.Literals(["company", "individual"]),
    ),
    account_type: Schema.NullOr(Schema.Literals(["checking", "savings"])),
    bank_name: Schema.NullOr(Schema.String),
    financial_connections_account: Schema.NullOr(Schema.String),
    fingerprint: Schema.NullOr(Schema.String),
    last4: Schema.NullOr(Schema.String),
    networks: Schema.Unknown,
    routing_number: Schema.NullOr(Schema.String),
    status_details: Schema.Unknown,
  });
export const payment_method_wechat_paySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({});
export const payment_method_zipSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({});
export const disputeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  amount: Schema.Number,
  balance_transactions: Schema.Array(
    Schema.suspend(() => balance_transactionSchema),
  ),
  charge: Schema.Unknown,
  created: Schema.Number,
  currency: Schema.String,
  enhanced_eligibility_types: Schema.Array(
    Schema.Literals(["visa_compelling_evidence_3", "visa_compliance"]),
  ),
  evidence: Schema.suspend(() => dispute_evidenceSchema),
  evidence_details: Schema.suspend(() => dispute_evidence_detailsSchema),
  id: Schema.String,
  is_charge_refundable: Schema.Boolean,
  livemode: Schema.Boolean,
  metadata: Schema.Record(Schema.String, Schema.String),
  network_reason_code: Schema.optional(Schema.NullOr(Schema.String)),
  object: Schema.Literals(["dispute"]),
  payment_intent: Schema.Unknown,
  payment_method_details: Schema.optional(
    Schema.suspend(() => dispute_payment_method_detailsSchema),
  ),
  reason: Schema.String,
  status: Schema.Literals([
    "lost",
    "needs_response",
    "prevented",
    "under_review",
    "warning_closed",
    "warning_needs_response",
    "warning_under_review",
    "won",
  ]),
});
export const dispute_evidenceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    access_activity_log: Schema.NullOr(Schema.String),
    billing_address: Schema.NullOr(Schema.String),
    cancellation_policy: Schema.Unknown,
    cancellation_policy_disclosure: Schema.NullOr(Schema.String),
    cancellation_rebuttal: Schema.NullOr(Schema.String),
    customer_communication: Schema.Unknown,
    customer_email_address: Schema.NullOr(Schema.String),
    customer_name: Schema.NullOr(Schema.String),
    customer_purchase_ip: Schema.NullOr(Schema.String),
    customer_signature: Schema.Unknown,
    duplicate_charge_documentation: Schema.Unknown,
    duplicate_charge_explanation: Schema.NullOr(Schema.String),
    duplicate_charge_id: Schema.NullOr(Schema.String),
    enhanced_evidence: Schema.suspend(() => dispute_enhanced_evidenceSchema),
    product_description: Schema.NullOr(Schema.String),
    receipt: Schema.Unknown,
    refund_policy: Schema.Unknown,
    refund_policy_disclosure: Schema.NullOr(Schema.String),
    refund_refusal_explanation: Schema.NullOr(Schema.String),
    service_date: Schema.NullOr(Schema.String),
    service_documentation: Schema.Unknown,
    shipping_address: Schema.NullOr(Schema.String),
    shipping_carrier: Schema.NullOr(Schema.String),
    shipping_date: Schema.NullOr(Schema.String),
    shipping_documentation: Schema.Unknown,
    shipping_tracking_number: Schema.NullOr(Schema.String),
    uncategorized_file: Schema.Unknown,
    uncategorized_text: Schema.NullOr(Schema.String),
  },
);
export const dispute_enhanced_evidenceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    visa_compelling_evidence_3: Schema.optional(
      Schema.suspend(
        () => dispute_enhanced_evidence_visa_compelling_evidence3Schema,
      ),
    ),
    visa_compliance: Schema.optional(
      Schema.suspend(() => dispute_enhanced_evidence_visa_complianceSchema),
    ),
  });
export const dispute_enhanced_evidence_visa_compelling_evidence3Schema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    disputed_transaction: Schema.Unknown,
    prior_undisputed_transactions: Schema.Array(
      Schema.suspend(
        () =>
          dispute_visa_compelling_evidence3_prior_undisputed_transactionSchema,
      ),
    ),
  });
export const dispute_visa_compelling_evidence3_prior_undisputed_transactionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    charge: Schema.String,
    customer_account_id: Schema.NullOr(Schema.String),
    customer_device_fingerprint: Schema.NullOr(Schema.String),
    customer_device_id: Schema.NullOr(Schema.String),
    customer_email_address: Schema.NullOr(Schema.String),
    customer_purchase_ip: Schema.NullOr(Schema.String),
    product_description: Schema.NullOr(Schema.String),
    shipping_address: Schema.Unknown,
  });
export const dispute_enhanced_evidence_visa_complianceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fee_acknowledged: Schema.Boolean,
  });
export const dispute_evidence_detailsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    due_by: Schema.NullOr(Schema.Number),
    enhanced_eligibility: Schema.suspend(
      () => dispute_enhanced_eligibilitySchema,
    ),
    has_evidence: Schema.Boolean,
    past_due: Schema.Boolean,
    submission_count: Schema.Number,
  });
export const dispute_enhanced_eligibilitySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    visa_compelling_evidence_3: Schema.optional(
      Schema.suspend(
        () => dispute_enhanced_eligibility_visa_compelling_evidence3Schema,
      ),
    ),
    visa_compliance: Schema.optional(
      Schema.suspend(() => dispute_enhanced_eligibility_visa_complianceSchema),
    ),
  });
export const dispute_enhanced_eligibility_visa_compelling_evidence3Schema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    required_actions: Schema.Array(
      Schema.Literals([
        "missing_customer_identifiers",
        "missing_disputed_transaction_description",
        "missing_merchandise_or_services",
        "missing_prior_undisputed_transaction_description",
        "missing_prior_undisputed_transactions",
      ]),
    ),
    status: Schema.Literals(["not_qualified", "qualified", "requires_action"]),
  });
export const dispute_enhanced_eligibility_visa_complianceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.Literals([
      "fee_acknowledged",
      "requires_fee_acknowledgement",
    ]),
  });
export const dispute_payment_method_detailsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amazon_pay: Schema.optional(
      Schema.suspend(() => dispute_payment_method_details_amazon_paySchema),
    ),
    card: Schema.optional(
      Schema.suspend(() => dispute_payment_method_details_cardSchema),
    ),
    klarna: Schema.optional(
      Schema.suspend(() => dispute_payment_method_details_klarnaSchema),
    ),
    paypal: Schema.optional(
      Schema.suspend(() => dispute_payment_method_details_paypalSchema),
    ),
    type: Schema.Literals(["amazon_pay", "card", "klarna", "paypal"]),
  });
export const dispute_payment_method_details_amazon_paySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dispute_type: Schema.NullOr(Schema.Literals(["chargeback", "claim"])),
  });
export const dispute_payment_method_details_cardSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    brand: Schema.String,
    case_type: Schema.Literals([
      "block",
      "chargeback",
      "compliance",
      "inquiry",
      "resolution",
    ]),
    network_reason_code: Schema.NullOr(Schema.String),
  });
export const dispute_payment_method_details_klarnaSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    chargeback_loss_reason_code: Schema.optional(Schema.String),
    reason_code: Schema.NullOr(Schema.String),
  });
export const dispute_payment_method_details_paypalSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    case_id: Schema.NullOr(Schema.String),
    reason_code: Schema.NullOr(Schema.String),
  });
export const entitlements_active_entitlementSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    feature: Schema.Unknown,
    id: Schema.String,
    livemode: Schema.Boolean,
    lookup_key: Schema.String,
    object: Schema.Literals(["entitlements.active_entitlement"]),
  });
export const entitlements_featureSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    active: Schema.Boolean,
    id: Schema.String,
    livemode: Schema.Boolean,
    lookup_key: Schema.String,
    metadata: Schema.Record(Schema.String, Schema.String),
    name: Schema.String,
    object: Schema.Literals(["entitlements.feature"]),
  });
export const eventSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  account: Schema.optional(Schema.String),
  api_version: Schema.NullOr(Schema.String),
  context: Schema.optional(Schema.String),
  created: Schema.Number,
  data: Schema.suspend(() => notification_event_dataSchema),
  id: Schema.String,
  livemode: Schema.Boolean,
  object: Schema.Literals(["event"]),
  pending_webhooks: Schema.Number,
  request: Schema.Unknown,
  type: Schema.Literals([
    "account.application.authorized",
    "account.application.deauthorized",
    "account.external_account.created",
    "account.external_account.deleted",
    "account.external_account.updated",
    "account.updated",
    "application_fee.created",
    "application_fee.refund.updated",
    "application_fee.refunded",
    "balance.available",
    "balance_settings.updated",
    "billing.alert.triggered",
    "billing.credit_grant.created",
    "billing_portal.configuration.created",
    "billing_portal.configuration.updated",
    "billing_portal.session.created",
    "capability.updated",
    "cash_balance.funds_available",
    "charge.captured",
    "charge.dispute.closed",
    "charge.dispute.created",
    "charge.dispute.funds_reinstated",
    "charge.dispute.funds_withdrawn",
    "charge.dispute.updated",
    "charge.expired",
    "charge.failed",
    "charge.pending",
    "charge.refund.updated",
    "charge.refunded",
    "charge.succeeded",
    "charge.updated",
    "checkout.session.async_payment_failed",
    "checkout.session.async_payment_succeeded",
    "checkout.session.completed",
    "checkout.session.expired",
    "climate.order.canceled",
    "climate.order.created",
    "climate.order.delayed",
    "climate.order.delivered",
    "climate.order.product_substituted",
    "climate.product.created",
    "climate.product.pricing_updated",
    "coupon.created",
    "coupon.deleted",
    "coupon.updated",
    "credit_note.created",
    "credit_note.updated",
    "credit_note.voided",
    "customer.created",
    "customer.deleted",
    "customer.discount.created",
    "customer.discount.deleted",
    "customer.discount.updated",
    "customer.source.created",
    "customer.source.deleted",
    "customer.source.expiring",
    "customer.source.updated",
    "customer.subscription.created",
    "customer.subscription.deleted",
    "customer.subscription.paused",
    "customer.subscription.pending_update_applied",
    "customer.subscription.pending_update_expired",
    "customer.subscription.resumed",
    "customer.subscription.trial_will_end",
    "customer.subscription.updated",
    "customer.tax_id.created",
    "customer.tax_id.deleted",
    "customer.tax_id.updated",
    "customer.updated",
    "customer_cash_balance_transaction.created",
    "entitlements.active_entitlement_summary.updated",
    "file.created",
    "financial_connections.account.account_numbers_updated",
    "financial_connections.account.created",
    "financial_connections.account.deactivated",
    "financial_connections.account.disconnected",
    "financial_connections.account.reactivated",
    "financial_connections.account.refreshed_balance",
    "financial_connections.account.refreshed_ownership",
    "financial_connections.account.refreshed_transactions",
    "financial_connections.account.upcoming_account_number_expiry",
    "identity.verification_session.canceled",
    "identity.verification_session.created",
    "identity.verification_session.processing",
    "identity.verification_session.redacted",
    "identity.verification_session.requires_input",
    "identity.verification_session.verified",
    "invoice.created",
    "invoice.deleted",
    "invoice.finalization_failed",
    "invoice.finalized",
    "invoice.marked_uncollectible",
    "invoice.overdue",
    "invoice.overpaid",
    "invoice.paid",
    "invoice.payment_action_required",
    "invoice.payment_attempt_required",
    "invoice.payment_failed",
    "invoice.payment_succeeded",
    "invoice.sent",
    "invoice.upcoming",
    "invoice.updated",
    "invoice.voided",
    "invoice.will_be_due",
    "invoice_payment.paid",
    "invoiceitem.created",
    "invoiceitem.deleted",
    "issuing_authorization.created",
    "issuing_authorization.request",
    "issuing_authorization.updated",
    "issuing_card.created",
    "issuing_card.updated",
    "issuing_cardholder.created",
    "issuing_cardholder.updated",
    "issuing_dispute.closed",
    "issuing_dispute.created",
    "issuing_dispute.funds_reinstated",
    "issuing_dispute.funds_rescinded",
    "issuing_dispute.submitted",
    "issuing_dispute.updated",
    "issuing_personalization_design.activated",
    "issuing_personalization_design.deactivated",
    "issuing_personalization_design.rejected",
    "issuing_personalization_design.updated",
    "issuing_token.created",
    "issuing_token.updated",
    "issuing_transaction.created",
    "issuing_transaction.purchase_details_receipt_updated",
    "issuing_transaction.updated",
    "mandate.updated",
    "payment_intent.amount_capturable_updated",
    "payment_intent.canceled",
    "payment_intent.created",
    "payment_intent.partially_funded",
    "payment_intent.payment_failed",
    "payment_intent.processing",
    "payment_intent.requires_action",
    "payment_intent.succeeded",
    "payment_link.created",
    "payment_link.updated",
    "payment_method.attached",
    "payment_method.automatically_updated",
    "payment_method.detached",
    "payment_method.updated",
    "payout.canceled",
    "payout.created",
    "payout.failed",
    "payout.paid",
    "payout.reconciliation_completed",
    "payout.updated",
    "person.created",
    "person.deleted",
    "person.updated",
    "plan.created",
    "plan.deleted",
    "plan.updated",
    "price.created",
    "price.deleted",
    "price.updated",
    "product.created",
    "product.deleted",
    "product.updated",
    "promotion_code.created",
    "promotion_code.updated",
    "quote.accepted",
    "quote.canceled",
    "quote.created",
    "quote.finalized",
    "radar.early_fraud_warning.created",
    "radar.early_fraud_warning.updated",
    "refund.created",
    "refund.failed",
    "refund.updated",
    "reporting.report_run.failed",
    "reporting.report_run.succeeded",
    "reporting.report_type.updated",
    "reserve.hold.created",
    "reserve.hold.updated",
    "reserve.plan.created",
    "reserve.plan.disabled",
    "reserve.plan.expired",
    "reserve.plan.updated",
    "reserve.release.created",
    "review.closed",
    "review.opened",
    "setup_intent.canceled",
    "setup_intent.created",
    "setup_intent.requires_action",
    "setup_intent.setup_failed",
    "setup_intent.succeeded",
    "sigma.scheduled_query_run.created",
    "source.canceled",
    "source.chargeable",
    "source.failed",
    "source.mandate_notification",
    "source.refund_attributes_required",
    "source.transaction.created",
    "source.transaction.updated",
    "subscription_schedule.aborted",
    "subscription_schedule.canceled",
    "subscription_schedule.completed",
    "subscription_schedule.created",
    "subscription_schedule.expiring",
    "subscription_schedule.released",
    "subscription_schedule.updated",
    "tax.settings.updated",
    "tax_rate.created",
    "tax_rate.updated",
    "terminal.reader.action_failed",
    "terminal.reader.action_succeeded",
    "terminal.reader.action_updated",
    "test_helpers.test_clock.advancing",
    "test_helpers.test_clock.created",
    "test_helpers.test_clock.deleted",
    "test_helpers.test_clock.internal_failure",
    "test_helpers.test_clock.ready",
    "topup.canceled",
    "topup.created",
    "topup.failed",
    "topup.reversed",
    "topup.succeeded",
    "transfer.created",
    "transfer.reversed",
    "transfer.updated",
    "treasury.credit_reversal.created",
    "treasury.credit_reversal.posted",
    "treasury.debit_reversal.completed",
    "treasury.debit_reversal.created",
    "treasury.debit_reversal.initial_credit_granted",
    "treasury.financial_account.closed",
    "treasury.financial_account.created",
    "treasury.financial_account.features_status_updated",
    "treasury.inbound_transfer.canceled",
    "treasury.inbound_transfer.created",
    "treasury.inbound_transfer.failed",
    "treasury.inbound_transfer.succeeded",
    "treasury.outbound_payment.canceled",
    "treasury.outbound_payment.created",
    "treasury.outbound_payment.expected_arrival_date_updated",
    "treasury.outbound_payment.failed",
    "treasury.outbound_payment.posted",
    "treasury.outbound_payment.returned",
    "treasury.outbound_payment.tracking_details_updated",
    "treasury.outbound_transfer.canceled",
    "treasury.outbound_transfer.created",
    "treasury.outbound_transfer.expected_arrival_date_updated",
    "treasury.outbound_transfer.failed",
    "treasury.outbound_transfer.posted",
    "treasury.outbound_transfer.returned",
    "treasury.outbound_transfer.tracking_details_updated",
    "treasury.received_credit.created",
    "treasury.received_credit.failed",
    "treasury.received_credit.succeeded",
    "treasury.received_debit.created",
  ]),
});
export const notification_event_dataSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.Unknown,
    previous_attributes: Schema.optional(Schema.Unknown),
  });
export const exchange_rateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
  object: Schema.Literals(["exchange_rate"]),
  rates: Schema.Record(Schema.String, Schema.Number),
});
export const file_linkSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  created: Schema.Number,
  expired: Schema.Boolean,
  expires_at: Schema.NullOr(Schema.Number),
  file: Schema.Unknown,
  id: Schema.String,
  livemode: Schema.Boolean,
  metadata: Schema.Record(Schema.String, Schema.String),
  object: Schema.Literals(["file_link"]),
  url: Schema.NullOr(Schema.String),
});
export const fileSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  created: Schema.Number,
  expires_at: Schema.NullOr(Schema.Number),
  filename: Schema.NullOr(Schema.String),
  id: Schema.String,
  links: Schema.optional(
    Schema.NullOr(
      Schema.Struct({
        data: Schema.Array(Schema.suspend(() => file_linkSchema)),
        has_more: Schema.Boolean,
        object: Schema.Literals(["list"]),
        url: Schema.String,
      }),
    ),
  ),
  object: Schema.Literals(["file"]),
  purpose: Schema.Literals([
    "account_requirement",
    "additional_verification",
    "business_icon",
    "business_logo",
    "customer_signature",
    "dispute_evidence",
    "document_provider_identity_document",
    "finance_report_run",
    "financial_account_statement",
    "identity_document",
    "identity_document_downloadable",
    "issuing_regulatory_reporting",
    "pci_document",
    "platform_terms_of_service",
    "selfie",
    "sigma_scheduled_query",
    "tax_document_user_upload",
    "terminal_android_apk",
    "terminal_reader_splashscreen",
    "terminal_wifi_certificate",
    "terminal_wifi_private_key",
  ]),
  size: Schema.Number,
  title: Schema.NullOr(Schema.String),
  type: Schema.NullOr(Schema.String),
  url: Schema.NullOr(Schema.String),
});
export const financial_connections_accountSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    account_holder: Schema.Unknown,
    account_numbers: Schema.NullOr(
      Schema.Array(
        Schema.suspend(
          () => bank_connections_resource_account_number_detailsSchema,
        ),
      ),
    ),
    balance: Schema.Unknown,
    balance_refresh: Schema.Unknown,
    category: Schema.Literals(["cash", "credit", "investment", "other"]),
    created: Schema.Number,
    display_name: Schema.NullOr(Schema.String),
    id: Schema.String,
    institution_name: Schema.String,
    last4: Schema.NullOr(Schema.String),
    livemode: Schema.Boolean,
    object: Schema.Literals(["financial_connections.account"]),
    ownership: Schema.Unknown,
    ownership_refresh: Schema.Unknown,
    permissions: Schema.NullOr(
      Schema.Array(
        Schema.Literals([
          "balances",
          "ownership",
          "payment_method",
          "transactions",
        ]),
      ),
    ),
    status: Schema.Literals(["active", "disconnected", "inactive"]),
    subcategory: Schema.Literals([
      "checking",
      "credit_card",
      "line_of_credit",
      "mortgage",
      "other",
      "savings",
    ]),
    subscriptions: Schema.NullOr(
      Schema.Array(Schema.Literals(["transactions"])),
    ),
    supported_payment_method_types: Schema.Array(
      Schema.Literals(["link", "us_bank_account"]),
    ),
    transaction_refresh: Schema.Unknown,
  });
export const bank_connections_resource_account_number_detailsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expected_expiry_date: Schema.NullOr(Schema.Number),
    identifier_type: Schema.Literals([
      "account_number",
      "tokenized_account_number",
    ]),
    status: Schema.Literals(["deactivated", "transactable"]),
    supported_networks: Schema.Array(Schema.Literals(["ach"])),
  });
export const financial_connections_account_ownerSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    email: Schema.NullOr(Schema.String),
    id: Schema.String,
    name: Schema.String,
    object: Schema.Literals(["financial_connections.account_owner"]),
    ownership: Schema.String,
    phone: Schema.NullOr(Schema.String),
    raw_address: Schema.NullOr(Schema.String),
    refreshed_at: Schema.NullOr(Schema.Number),
  });
export const bank_connections_resource_link_account_session_filtersSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    account_subcategories: Schema.NullOr(
      Schema.Array(
        Schema.Literals([
          "checking",
          "credit_card",
          "line_of_credit",
          "mortgage",
          "savings",
        ]),
      ),
    ),
    countries: Schema.NullOr(Schema.Array(Schema.String)),
  });
export const financial_connections_transactionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    account: Schema.String,
    amount: Schema.Number,
    currency: Schema.String,
    description: Schema.String,
    id: Schema.String,
    livemode: Schema.Boolean,
    object: Schema.Literals(["financial_connections.transaction"]),
    status: Schema.Literals(["pending", "posted", "void"]),
    status_transitions: Schema.suspend(
      () =>
        bank_connections_resource_transaction_resource_status_transitionsSchema,
    ),
    transacted_at: Schema.Number,
    transaction_refresh: Schema.String,
    updated: Schema.Number,
  });
export const bank_connections_resource_transaction_resource_status_transitionsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    posted_at: Schema.NullOr(Schema.Number),
    void_at: Schema.NullOr(Schema.Number),
  });
export const forwarding_requestSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    created: Schema.Number,
    id: Schema.String,
    livemode: Schema.Boolean,
    metadata: Schema.optional(
      Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
    ),
    object: Schema.Literals(["forwarding.request"]),
    payment_method: Schema.String,
    replacements: Schema.Array(
      Schema.Literals([
        "card_cvc",
        "card_expiry",
        "card_number",
        "cardholder_name",
        "request_signature",
      ]),
    ),
    request_context: Schema.Unknown,
    request_details: Schema.Unknown,
    response_details: Schema.Unknown,
    url: Schema.NullOr(Schema.String),
  });
export const identity_verification_reportSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    client_reference_id: Schema.NullOr(Schema.String),
    created: Schema.Number,
    document: Schema.optional(
      Schema.suspend(() => gelato_document_reportSchema),
    ),
    email: Schema.optional(Schema.suspend(() => gelato_email_reportSchema)),
    id: Schema.String,
    id_number: Schema.optional(
      Schema.suspend(() => gelato_id_number_reportSchema),
    ),
    livemode: Schema.Boolean,
    object: Schema.Literals(["identity.verification_report"]),
    options: Schema.optional(
      Schema.suspend(() => gelato_verification_report_optionsSchema),
    ),
    phone: Schema.optional(Schema.suspend(() => gelato_phone_reportSchema)),
    selfie: Schema.optional(Schema.suspend(() => gelato_selfie_reportSchema)),
    type: Schema.Literals(["document", "id_number", "verification_flow"]),
    verification_flow: Schema.optional(Schema.String),
    verification_session: Schema.NullOr(Schema.String),
  });
export const gelato_document_reportSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    address: Schema.Unknown,
    dob: Schema.optional(Schema.Unknown),
    error: Schema.Unknown,
    expiration_date: Schema.optional(Schema.Unknown),
    files: Schema.NullOr(Schema.Array(Schema.String)),
    first_name: Schema.NullOr(Schema.String),
    issued_date: Schema.Unknown,
    issuing_country: Schema.NullOr(Schema.String),
    last_name: Schema.NullOr(Schema.String),
    number: Schema.optional(Schema.NullOr(Schema.String)),
    sex: Schema.optional(
      Schema.NullOr(
        Schema.Literals(["[redacted]", "female", "male", "unknown"]),
      ),
    ),
    status: Schema.Literals(["unverified", "verified"]),
    type: Schema.NullOr(
      Schema.Literals(["driving_license", "id_card", "passport"]),
    ),
    unparsed_place_of_birth: Schema.optional(Schema.NullOr(Schema.String)),
    unparsed_sex: Schema.optional(Schema.NullOr(Schema.String)),
  });
export const gelato_email_reportSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    email: Schema.NullOr(Schema.String),
    error: Schema.Unknown,
    status: Schema.Literals(["unverified", "verified"]),
  });
export const gelato_id_number_reportSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dob: Schema.optional(Schema.Unknown),
    error: Schema.Unknown,
    first_name: Schema.NullOr(Schema.String),
    id_number: Schema.optional(Schema.NullOr(Schema.String)),
    id_number_type: Schema.NullOr(
      Schema.Literals(["br_cpf", "sg_nric", "us_ssn"]),
    ),
    last_name: Schema.NullOr(Schema.String),
    status: Schema.Literals(["unverified", "verified"]),
  });
export const gelato_verification_report_optionsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    document: Schema.optional(
      Schema.suspend(() => gelato_report_document_optionsSchema),
    ),
    id_number: Schema.optional(
      Schema.suspend(() => gelato_report_id_number_optionsSchema),
    ),
  });
export const gelato_report_document_optionsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowed_types: Schema.optional(
      Schema.Array(Schema.Literals(["driving_license", "id_card", "passport"])),
    ),
    require_id_number: Schema.optional(Schema.Boolean),
    require_live_capture: Schema.optional(Schema.Boolean),
    require_matching_selfie: Schema.optional(Schema.Boolean),
  });
export const gelato_report_id_number_optionsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({});
export const gelato_phone_reportSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    error: Schema.Unknown,
    phone: Schema.NullOr(Schema.String),
    status: Schema.Literals(["unverified", "verified"]),
  });
export const gelato_selfie_reportSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    document: Schema.NullOr(Schema.String),
    error: Schema.Unknown,
    selfie: Schema.NullOr(Schema.String),
    status: Schema.Literals(["unverified", "verified"]),
  });
export const identity_verification_sessionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    client_reference_id: Schema.NullOr(Schema.String),
    client_secret: SensitiveOutputNullableString,
    created: Schema.Number,
    id: Schema.String,
    last_error: Schema.Unknown,
    last_verification_report: Schema.Unknown,
    livemode: Schema.Boolean,
    metadata: Schema.Record(Schema.String, Schema.String),
    object: Schema.Literals(["identity.verification_session"]),
    options: Schema.Unknown,
    provided_details: Schema.optional(Schema.Unknown),
    redaction: Schema.Unknown,
    related_customer: Schema.NullOr(Schema.String),
    related_customer_account: Schema.NullOr(Schema.String),
    related_person: Schema.optional(
      Schema.suspend(() => gelato_related_personSchema),
    ),
    status: Schema.Literals([
      "canceled",
      "processing",
      "requires_input",
      "verified",
    ]),
    type: Schema.Literals(["document", "id_number", "verification_flow"]),
    url: Schema.NullOr(Schema.String),
    verification_flow: Schema.optional(Schema.String),
    verified_outputs: Schema.optional(Schema.Unknown),
  });
export const gelato_related_personSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    account: Schema.String,
    person: Schema.String,
  });
export const invoice_paymentSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  amount_paid: Schema.NullOr(Schema.Number),
  amount_requested: Schema.Number,
  created: Schema.Number,
  currency: Schema.String,
  id: Schema.String,
  invoice: Schema.Unknown,
  is_default: Schema.Boolean,
  livemode: Schema.Boolean,
  object: Schema.Literals(["invoice_payment"]),
  payment: Schema.suspend(
    () => invoices_payments_invoice_payment_associated_paymentSchema,
  ),
  status: Schema.String,
  status_transitions: Schema.suspend(
    () => invoices_payments_invoice_payment_status_transitionsSchema,
  ),
});
export const invoices_payments_invoice_payment_associated_paymentSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    charge: Schema.optional(Schema.Unknown),
    payment_intent: Schema.optional(Schema.Unknown),
    payment_record: Schema.optional(Schema.Unknown),
    type: Schema.Literals(["charge", "payment_intent", "payment_record"]),
  });
export const invoices_payments_invoice_payment_status_transitionsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    canceled_at: Schema.NullOr(Schema.Number),
    paid_at: Schema.NullOr(Schema.Number),
  });
export const invoice_rendering_templateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    created: Schema.Number,
    id: Schema.String,
    livemode: Schema.Boolean,
    metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
    nickname: Schema.NullOr(Schema.String),
    object: Schema.Literals(["invoice_rendering_template"]),
    status: Schema.Literals(["active", "archived"]),
    version: Schema.Number,
  });
export const invoiceitemSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  amount: Schema.Number,
  currency: Schema.String,
  customer: Schema.Unknown,
  customer_account: Schema.NullOr(Schema.String),
  date: Schema.Number,
  description: Schema.NullOr(Schema.String),
  discountable: Schema.Boolean,
  discounts: Schema.NullOr(Schema.Array(Schema.Unknown)),
  id: Schema.String,
  invoice: Schema.Unknown,
  livemode: Schema.Boolean,
  metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
  net_amount: Schema.optional(Schema.Number),
  object: Schema.Literals(["invoiceitem"]),
  parent: Schema.Unknown,
  period: Schema.suspend(() => invoice_line_item_periodSchema),
  pricing: Schema.Unknown,
  proration: Schema.Boolean,
  proration_details: Schema.optional(
    Schema.suspend(() => proration_detailsSchema),
  ),
  quantity: Schema.Number,
  quantity_decimal: Schema.String,
  tax_rates: Schema.NullOr(Schema.Array(Schema.suspend(() => tax_rateSchema))),
  test_clock: Schema.Unknown,
});
export const invoice_line_item_periodSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    end: Schema.Number,
    start: Schema.Number,
  });
export const proration_detailsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    discount_amounts: Schema.Array(
      Schema.suspend(() => discounts_resource_discount_amountSchema),
    ),
  });
export const invoiceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  account_country: Schema.NullOr(Schema.String),
  account_name: Schema.NullOr(Schema.String),
  account_tax_ids: Schema.NullOr(Schema.Array(Schema.Unknown)),
  amount_due: Schema.Number,
  amount_overpaid: Schema.Number,
  amount_paid: Schema.Number,
  amount_remaining: Schema.Number,
  amount_shipping: Schema.Number,
  application: Schema.Unknown,
  attempt_count: Schema.Number,
  attempted: Schema.Boolean,
  auto_advance: Schema.optional(Schema.Boolean),
  automatic_tax: Schema.suspend(() => automatic_taxSchema),
  automatically_finalizes_at: Schema.NullOr(Schema.Number),
  billing_reason: Schema.NullOr(
    Schema.Literals([
      "automatic_pending_invoice_item_invoice",
      "manual",
      "quote_accept",
      "subscription",
      "subscription_create",
      "subscription_cycle",
      "subscription_threshold",
      "subscription_update",
      "upcoming",
    ]),
  ),
  collection_method: Schema.Literals(["charge_automatically", "send_invoice"]),
  confirmation_secret: Schema.optional(Schema.Unknown),
  created: Schema.Number,
  currency: Schema.String,
  custom_fields: Schema.NullOr(
    Schema.Array(Schema.suspend(() => invoice_setting_custom_fieldSchema)),
  ),
  customer: Schema.Unknown,
  customer_account: Schema.NullOr(Schema.String),
  customer_address: Schema.Unknown,
  customer_email: Schema.NullOr(Schema.String),
  customer_name: Schema.NullOr(Schema.String),
  customer_phone: Schema.NullOr(Schema.String),
  customer_shipping: Schema.Unknown,
  customer_tax_exempt: Schema.NullOr(
    Schema.Literals(["exempt", "none", "reverse"]),
  ),
  customer_tax_ids: Schema.optional(
    Schema.NullOr(
      Schema.Array(
        Schema.suspend(() => invoices_resource_invoice_tax_idSchema),
      ),
    ),
  ),
  default_payment_method: Schema.Unknown,
  default_source: Schema.Unknown,
  default_tax_rates: Schema.Array(Schema.suspend(() => tax_rateSchema)),
  description: Schema.NullOr(Schema.String),
  discounts: Schema.Array(Schema.Unknown),
  due_date: Schema.NullOr(Schema.Number),
  effective_at: Schema.NullOr(Schema.Number),
  ending_balance: Schema.NullOr(Schema.Number),
  footer: Schema.NullOr(Schema.String),
  from_invoice: Schema.Unknown,
  hosted_invoice_url: Schema.optional(Schema.NullOr(Schema.String)),
  id: Schema.optional(Schema.String),
  invoice_pdf: Schema.optional(Schema.NullOr(Schema.String)),
  issuer: Schema.suspend(() => connect_account_referenceSchema),
  last_finalization_error: Schema.Unknown,
  latest_revision: Schema.Unknown,
  lines: Schema.Struct({
    data: Schema.Array(Schema.suspend(() => line_itemSchema)),
    has_more: Schema.Boolean,
    object: Schema.Literals(["list"]),
    url: Schema.String,
  }),
  livemode: Schema.Boolean,
  metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
  next_payment_attempt: Schema.NullOr(Schema.Number),
  number: Schema.NullOr(Schema.String),
  object: Schema.Literals(["invoice"]),
  on_behalf_of: Schema.Unknown,
  parent: Schema.Unknown,
  payment_settings: Schema.suspend(() => invoices_payment_settingsSchema),
  payments: Schema.optional(
    Schema.Struct({
      data: Schema.Array(Schema.suspend(() => invoice_paymentSchema)),
      has_more: Schema.Boolean,
      object: Schema.Literals(["list"]),
      url: Schema.String,
    }),
  ),
  period_end: Schema.Number,
  period_start: Schema.Number,
  post_payment_credit_notes_amount: Schema.Number,
  pre_payment_credit_notes_amount: Schema.Number,
  receipt_number: Schema.NullOr(Schema.String),
  rendering: Schema.Unknown,
  shipping_cost: Schema.Unknown,
  shipping_details: Schema.Unknown,
  starting_balance: Schema.Number,
  statement_descriptor: Schema.NullOr(Schema.String),
  status: Schema.NullOr(
    Schema.Literals(["draft", "open", "paid", "uncollectible", "void"]),
  ),
  status_transitions: Schema.suspend(
    () => invoices_resource_status_transitionsSchema,
  ),
  subscription: Schema.optional(Schema.Unknown),
  subtotal: Schema.Number,
  subtotal_excluding_tax: Schema.NullOr(Schema.Number),
  test_clock: Schema.Unknown,
  threshold_reason: Schema.optional(
    Schema.suspend(() => invoice_threshold_reasonSchema),
  ),
  total: Schema.Number,
  total_discount_amounts: Schema.NullOr(
    Schema.Array(
      Schema.suspend(() => discounts_resource_discount_amountSchema),
    ),
  ),
  total_excluding_tax: Schema.NullOr(Schema.Number),
  total_pretax_credit_amounts: Schema.NullOr(
    Schema.Array(
      Schema.suspend(() => invoices_resource_pretax_credit_amountSchema),
    ),
  ),
  total_taxes: Schema.NullOr(
    Schema.Array(
      Schema.suspend(() => billing_bill_resource_invoicing_taxes_taxSchema),
    ),
  ),
  webhooks_delivered_at: Schema.NullOr(Schema.Number),
});
export const automatic_taxSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  disabled_reason: Schema.NullOr(
    Schema.Literals([
      "finalization_requires_location_inputs",
      "finalization_system_error",
    ]),
  ),
  enabled: Schema.Boolean,
  liability: Schema.Unknown,
  provider: Schema.NullOr(Schema.String),
  status: Schema.NullOr(
    Schema.Literals(["complete", "failed", "requires_location_inputs"]),
  ),
});
export const invoices_resource_invoice_tax_idSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.Literals([
      "ad_nrt",
      "ae_trn",
      "al_tin",
      "am_tin",
      "ao_tin",
      "ar_cuit",
      "au_abn",
      "au_arn",
      "aw_tin",
      "az_tin",
      "ba_tin",
      "bb_tin",
      "bd_bin",
      "bf_ifu",
      "bg_uic",
      "bh_vat",
      "bj_ifu",
      "bo_tin",
      "br_cnpj",
      "br_cpf",
      "bs_tin",
      "by_tin",
      "ca_bn",
      "ca_gst_hst",
      "ca_pst_bc",
      "ca_pst_mb",
      "ca_pst_sk",
      "ca_qst",
      "cd_nif",
      "ch_uid",
      "ch_vat",
      "cl_tin",
      "cm_niu",
      "cn_tin",
      "co_nit",
      "cr_tin",
      "cv_nif",
      "de_stn",
      "do_rcn",
      "ec_ruc",
      "eg_tin",
      "es_cif",
      "et_tin",
      "eu_oss_vat",
      "eu_vat",
      "gb_vat",
      "ge_vat",
      "gn_nif",
      "hk_br",
      "hr_oib",
      "hu_tin",
      "id_npwp",
      "il_vat",
      "in_gst",
      "is_vat",
      "jp_cn",
      "jp_rn",
      "jp_trn",
      "ke_pin",
      "kg_tin",
      "kh_tin",
      "kr_brn",
      "kz_bin",
      "la_tin",
      "li_uid",
      "li_vat",
      "lk_vat",
      "ma_vat",
      "md_vat",
      "me_pib",
      "mk_vat",
      "mr_nif",
      "mx_rfc",
      "my_frp",
      "my_itn",
      "my_sst",
      "ng_tin",
      "no_vat",
      "no_voec",
      "np_pan",
      "nz_gst",
      "om_vat",
      "pe_ruc",
      "ph_tin",
      "pl_nip",
      "ro_tin",
      "rs_pib",
      "ru_inn",
      "ru_kpp",
      "sa_vat",
      "sg_gst",
      "sg_uen",
      "si_tin",
      "sn_ninea",
      "sr_fin",
      "sv_nit",
      "th_vat",
      "tj_tin",
      "tr_tin",
      "tw_vat",
      "tz_vat",
      "ua_vat",
      "ug_tin",
      "unknown",
      "us_ein",
      "uy_ruc",
      "uz_tin",
      "uz_vat",
      "ve_rif",
      "vn_tin",
      "za_vat",
      "zm_tin",
      "zw_tin",
    ]),
    value: Schema.NullOr(Schema.String),
  });
export const line_itemSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  amount: Schema.Number,
  currency: Schema.String,
  description: Schema.NullOr(Schema.String),
  discount_amounts: Schema.NullOr(
    Schema.Array(
      Schema.suspend(() => discounts_resource_discount_amountSchema),
    ),
  ),
  discountable: Schema.Boolean,
  discounts: Schema.Array(Schema.Unknown),
  id: Schema.String,
  invoice: Schema.NullOr(Schema.String),
  livemode: Schema.Boolean,
  metadata: Schema.Record(Schema.String, Schema.String),
  object: Schema.Literals(["line_item"]),
  parent: Schema.Unknown,
  period: Schema.suspend(() => invoice_line_item_periodSchema),
  pretax_credit_amounts: Schema.NullOr(
    Schema.Array(
      Schema.suspend(() => invoices_resource_pretax_credit_amountSchema),
    ),
  ),
  pricing: Schema.Unknown,
  quantity: Schema.NullOr(Schema.Number),
  quantity_decimal: Schema.NullOr(Schema.String),
  subscription: Schema.Unknown,
  subtotal: Schema.Number,
  taxes: Schema.NullOr(
    Schema.Array(
      Schema.suspend(() => billing_bill_resource_invoicing_taxes_taxSchema),
    ),
  ),
});
export const invoices_resource_pretax_credit_amountSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amount: Schema.Number,
    credit_balance_transaction: Schema.optional(Schema.Unknown),
    discount: Schema.optional(Schema.Unknown),
    type: Schema.Literals(["credit_balance_transaction", "discount"]),
  });
export const invoices_payment_settingsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    default_mandate: Schema.NullOr(Schema.String),
    payment_method_options: Schema.Unknown,
    payment_method_types: Schema.NullOr(
      Schema.Array(
        Schema.Literals([
          "ach_credit_transfer",
          "ach_debit",
          "acss_debit",
          "affirm",
          "amazon_pay",
          "au_becs_debit",
          "bacs_debit",
          "bancontact",
          "boleto",
          "card",
          "cashapp",
          "crypto",
          "custom",
          "customer_balance",
          "eps",
          "fpx",
          "giropay",
          "grabpay",
          "ideal",
          "jp_credit_transfer",
          "kakao_pay",
          "klarna",
          "konbini",
          "kr_card",
          "link",
          "multibanco",
          "naver_pay",
          "nz_bank_account",
          "p24",
          "pay_by_bank",
          "payco",
          "paynow",
          "paypal",
          "payto",
          "promptpay",
          "revolut_pay",
          "sepa_credit_transfer",
          "sepa_debit",
          "sofort",
          "swish",
          "us_bank_account",
          "wechat_pay",
        ]),
      ),
    ),
  });
export const invoices_resource_status_transitionsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    finalized_at: Schema.NullOr(Schema.Number),
    marked_uncollectible_at: Schema.NullOr(Schema.Number),
    paid_at: Schema.NullOr(Schema.Number),
    voided_at: Schema.NullOr(Schema.Number),
  });
export const invoice_threshold_reasonSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amount_gte: Schema.NullOr(Schema.Number),
    item_reasons: Schema.Array(
      Schema.suspend(() => invoice_item_threshold_reasonSchema),
    ),
  });
export const invoice_item_threshold_reasonSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    line_item_ids: Schema.Array(Schema.String),
    usage_gte: Schema.Number,
  });
export const issuing_authorizationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amount: Schema.Number,
    amount_details: Schema.Unknown,
    approved: Schema.Boolean,
    authorization_method: Schema.Literals([
      "chip",
      "contactless",
      "keyed_in",
      "online",
      "swipe",
    ]),
    balance_transactions: Schema.Array(
      Schema.suspend(() => balance_transactionSchema),
    ),
    card: Schema.suspend(() => issuing_cardSchema),
    cardholder: Schema.Unknown,
    created: Schema.Number,
    currency: Schema.String,
    fleet: Schema.Unknown,
    fraud_challenges: Schema.optional(
      Schema.NullOr(
        Schema.Array(
          Schema.suspend(() => issuing_authorization_fraud_challengeSchema),
        ),
      ),
    ),
    fuel: Schema.Unknown,
    id: Schema.String,
    livemode: Schema.Boolean,
    merchant_amount: Schema.Number,
    merchant_currency: Schema.String,
    merchant_data: Schema.suspend(
      () => issuing_authorization_merchant_dataSchema,
    ),
    metadata: Schema.Record(Schema.String, Schema.String),
    network_data: Schema.Unknown,
    object: Schema.Literals(["issuing.authorization"]),
    pending_request: Schema.Unknown,
    request_history: Schema.Array(
      Schema.suspend(() => issuing_authorization_requestSchema),
    ),
    status: Schema.Literals(["closed", "expired", "pending", "reversed"]),
    token: Schema.optional(Schema.Unknown),
    transactions: Schema.Array(Schema.suspend(() => issuing_transactionSchema)),
    treasury: Schema.optional(Schema.Unknown),
    verification_data: Schema.suspend(
      () => issuing_authorization_verification_dataSchema,
    ),
    verified_by_fraud_challenge: Schema.NullOr(Schema.Boolean),
    wallet: Schema.NullOr(Schema.String),
  });
export const issuing_cardSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  brand: Schema.String,
  cancellation_reason: Schema.NullOr(
    Schema.Literals(["design_rejected", "lost", "stolen"]),
  ),
  cardholder: Schema.suspend(() => issuing_cardholderSchema),
  created: Schema.Number,
  currency: Schema.String,
  cvc: Schema.optional(Schema.String),
  exp_month: Schema.Number,
  exp_year: Schema.Number,
  financial_account: Schema.optional(Schema.NullOr(Schema.String)),
  id: Schema.String,
  last4: Schema.String,
  latest_fraud_warning: Schema.Unknown,
  lifecycle_controls: Schema.Unknown,
  livemode: Schema.Boolean,
  metadata: Schema.Record(Schema.String, Schema.String),
  number: Schema.optional(Schema.String),
  object: Schema.Literals(["issuing.card"]),
  personalization_design: Schema.Unknown,
  replaced_by: Schema.Unknown,
  replacement_for: Schema.Unknown,
  replacement_reason: Schema.NullOr(
    Schema.Literals(["damaged", "expired", "lost", "stolen"]),
  ),
  second_line: Schema.NullOr(Schema.String),
  shipping: Schema.Unknown,
  spending_controls: Schema.suspend(
    () => issuing_card_authorization_controlsSchema,
  ),
  status: Schema.Literals(["active", "canceled", "inactive"]),
  type: Schema.Literals(["physical", "virtual"]),
  wallets: Schema.Unknown,
});
export const issuing_cardholderSchema =
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
export const issuing_cardholder_addressSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    address: Schema.suspend(() => addressSchema),
  });
export const issuing_cardholder_requirementsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    disabled_reason: Schema.NullOr(
      Schema.Literals([
        "listed",
        "rejected.listed",
        "requirements.past_due",
        "under_review",
      ]),
    ),
    past_due: Schema.NullOr(
      Schema.Array(
        Schema.Literals([
          "company.tax_id",
          "individual.card_issuing.user_terms_acceptance.date",
          "individual.card_issuing.user_terms_acceptance.ip",
          "individual.dob.day",
          "individual.dob.month",
          "individual.dob.year",
          "individual.first_name",
          "individual.last_name",
          "individual.verification.document",
        ]),
      ),
    ),
  });
export const issuing_card_authorization_controlsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowed_categories: Schema.NullOr(
      Schema.Array(
        Schema.Literals([
          "ac_refrigeration_repair",
          "accounting_bookkeeping_services",
          "advertising_services",
          "agricultural_cooperative",
          "airlines_air_carriers",
          "airports_flying_fields",
          "ambulance_services",
          "amusement_parks_carnivals",
          "antique_reproductions",
          "antique_shops",
          "aquariums",
          "architectural_surveying_services",
          "art_dealers_and_galleries",
          "artists_supply_and_craft_shops",
          "auto_and_home_supply_stores",
          "auto_body_repair_shops",
          "auto_paint_shops",
          "auto_service_shops",
          "automated_cash_disburse",
          "automated_fuel_dispensers",
          "automobile_associations",
          "automotive_parts_and_accessories_stores",
          "automotive_tire_stores",
          "bail_and_bond_payments",
          "bakeries",
          "bands_orchestras",
          "barber_and_beauty_shops",
          "betting_casino_gambling",
          "bicycle_shops",
          "billiard_pool_establishments",
          "boat_dealers",
          "boat_rentals_and_leases",
          "book_stores",
          "books_periodicals_and_newspapers",
          "bowling_alleys",
          "bus_lines",
          "business_secretarial_schools",
          "buying_shopping_services",
          "cable_satellite_and_other_pay_television_and_radio",
          "camera_and_photographic_supply_stores",
          "candy_nut_and_confectionery_stores",
          "car_and_truck_dealers_new_used",
          "car_and_truck_dealers_used_only",
          "car_rental_agencies",
          "car_washes",
          "carpentry_services",
          "carpet_upholstery_cleaning",
          "caterers",
          "charitable_and_social_service_organizations_fundraising",
          "chemicals_and_allied_products",
          "child_care_services",
          "childrens_and_infants_wear_stores",
          "chiropodists_podiatrists",
          "chiropractors",
          "cigar_stores_and_stands",
          "civic_social_fraternal_associations",
          "cleaning_and_maintenance",
          "clothing_rental",
          "colleges_universities",
          "commercial_equipment",
          "commercial_footwear",
          "commercial_photography_art_and_graphics",
          "commuter_transport_and_ferries",
          "computer_network_services",
          "computer_programming",
          "computer_repair",
          "computer_software_stores",
          "computers_peripherals_and_software",
          "concrete_work_services",
          "construction_materials",
          "consulting_public_relations",
          "correspondence_schools",
          "cosmetic_stores",
          "counseling_services",
          "country_clubs",
          "courier_services",
          "court_costs",
          "credit_reporting_agencies",
          "cruise_lines",
          "dairy_products_stores",
          "dance_hall_studios_schools",
          "dating_escort_services",
          "dentists_orthodontists",
          "department_stores",
          "detective_agencies",
          "digital_goods_applications",
          "digital_goods_games",
          "digital_goods_large_volume",
          "digital_goods_media",
          "direct_marketing_catalog_merchant",
          "direct_marketing_combination_catalog_and_retail_merchant",
          "direct_marketing_inbound_telemarketing",
          "direct_marketing_insurance_services",
          "direct_marketing_other",
          "direct_marketing_outbound_telemarketing",
          "direct_marketing_subscription",
          "direct_marketing_travel",
          "discount_stores",
          "doctors",
          "door_to_door_sales",
          "drapery_window_covering_and_upholstery_stores",
          "drinking_places",
          "drug_stores_and_pharmacies",
          "drugs_drug_proprietaries_and_druggist_sundries",
          "dry_cleaners",
          "durable_goods",
          "duty_free_stores",
          "eating_places_restaurants",
          "educational_services",
          "electric_razor_stores",
          "electric_vehicle_charging",
          "electrical_parts_and_equipment",
          "electrical_services",
          "electronics_repair_shops",
          "electronics_stores",
          "elementary_secondary_schools",
          "emergency_services_gcas_visa_use_only",
          "employment_temp_agencies",
          "equipment_rental",
          "exterminating_services",
          "family_clothing_stores",
          "fast_food_restaurants",
          "financial_institutions",
          "fines_government_administrative_entities",
          "fireplace_fireplace_screens_and_accessories_stores",
          "floor_covering_stores",
          "florists",
          "florists_supplies_nursery_stock_and_flowers",
          "freezer_and_locker_meat_provisioners",
          "fuel_dealers_non_automotive",
          "funeral_services_crematories",
          "furniture_home_furnishings_and_equipment_stores_except_appliances",
          "furniture_repair_refinishing",
          "furriers_and_fur_shops",
          "general_services",
          "gift_card_novelty_and_souvenir_shops",
          "glass_paint_and_wallpaper_stores",
          "glassware_crystal_stores",
          "golf_courses_public",
          "government_licensed_horse_dog_racing_us_region_only",
          "government_licensed_online_casions_online_gambling_us_region_only",
          "government_owned_lotteries_non_us_region",
          "government_owned_lotteries_us_region_only",
          "government_services",
          "grocery_stores_supermarkets",
          "hardware_equipment_and_supplies",
          "hardware_stores",
          "health_and_beauty_spas",
          "hearing_aids_sales_and_supplies",
          "heating_plumbing_a_c",
          "hobby_toy_and_game_shops",
          "home_supply_warehouse_stores",
          "hospitals",
          "hotels_motels_and_resorts",
          "household_appliance_stores",
          "industrial_supplies",
          "information_retrieval_services",
          "insurance_default",
          "insurance_underwriting_premiums",
          "intra_company_purchases",
          "jewelry_stores_watches_clocks_and_silverware_stores",
          "landscaping_services",
          "laundries",
          "laundry_cleaning_services",
          "legal_services_attorneys",
          "luggage_and_leather_goods_stores",
          "lumber_building_materials_stores",
          "manual_cash_disburse",
          "marinas_service_and_supplies",
          "marketplaces",
          "masonry_stonework_and_plaster",
          "massage_parlors",
          "medical_and_dental_labs",
          "medical_dental_ophthalmic_and_hospital_equipment_and_supplies",
          "medical_services",
          "membership_organizations",
          "mens_and_boys_clothing_and_accessories_stores",
          "mens_womens_clothing_stores",
          "metal_service_centers",
          "miscellaneous",
          "miscellaneous_apparel_and_accessory_shops",
          "miscellaneous_auto_dealers",
          "miscellaneous_business_services",
          "miscellaneous_food_stores",
          "miscellaneous_general_merchandise",
          "miscellaneous_general_services",
          "miscellaneous_home_furnishing_specialty_stores",
          "miscellaneous_publishing_and_printing",
          "miscellaneous_recreation_services",
          "miscellaneous_repair_shops",
          "miscellaneous_specialty_retail",
          "mobile_home_dealers",
          "motion_picture_theaters",
          "motor_freight_carriers_and_trucking",
          "motor_homes_dealers",
          "motor_vehicle_supplies_and_new_parts",
          "motorcycle_shops_and_dealers",
          "motorcycle_shops_dealers",
          "music_stores_musical_instruments_pianos_and_sheet_music",
          "news_dealers_and_newsstands",
          "non_fi_money_orders",
          "non_fi_stored_value_card_purchase_load",
          "nondurable_goods",
          "nurseries_lawn_and_garden_supply_stores",
          "nursing_personal_care",
          "office_and_commercial_furniture",
          "opticians_eyeglasses",
          "optometrists_ophthalmologist",
          "orthopedic_goods_prosthetic_devices",
          "osteopaths",
          "package_stores_beer_wine_and_liquor",
          "paints_varnishes_and_supplies",
          "parking_lots_garages",
          "passenger_railways",
          "pawn_shops",
          "pet_shops_pet_food_and_supplies",
          "petroleum_and_petroleum_products",
          "photo_developing",
          "photographic_photocopy_microfilm_equipment_and_supplies",
          "photographic_studios",
          "picture_video_production",
          "piece_goods_notions_and_other_dry_goods",
          "plumbing_heating_equipment_and_supplies",
          "political_organizations",
          "postal_services_government_only",
          "precious_stones_and_metals_watches_and_jewelry",
          "professional_services",
          "public_warehousing_and_storage",
          "quick_copy_repro_and_blueprint",
          "railroads",
          "real_estate_agents_and_managers_rentals",
          "record_stores",
          "recreational_vehicle_rentals",
          "religious_goods_stores",
          "religious_organizations",
          "roofing_siding_sheet_metal",
          "secretarial_support_services",
          "security_brokers_dealers",
          "service_stations",
          "sewing_needlework_fabric_and_piece_goods_stores",
          "shoe_repair_hat_cleaning",
          "shoe_stores",
          "small_appliance_repair",
          "snowmobile_dealers",
          "special_trade_services",
          "specialty_cleaning",
          "sporting_goods_stores",
          "sporting_recreation_camps",
          "sports_and_riding_apparel_stores",
          "sports_clubs_fields",
          "stamp_and_coin_stores",
          "stationary_office_supplies_printing_and_writing_paper",
          "stationery_stores_office_and_school_supply_stores",
          "swimming_pools_sales",
          "t_ui_travel_germany",
          "tailors_alterations",
          "tax_payments_government_agencies",
          "tax_preparation_services",
          "taxicabs_limousines",
          "telecommunication_equipment_and_telephone_sales",
          "telecommunication_services",
          "telegraph_services",
          "tent_and_awning_shops",
          "testing_laboratories",
          "theatrical_ticket_agencies",
          "timeshares",
          "tire_retreading_and_repair",
          "tolls_bridge_fees",
          "tourist_attractions_and_exhibits",
          "towing_services",
          "trailer_parks_campgrounds",
          "transportation_services",
          "travel_agencies_tour_operators",
          "truck_stop_iteration",
          "truck_utility_trailer_rentals",
          "typesetting_plate_making_and_related_services",
          "typewriter_stores",
          "u_s_federal_government_agencies_or_departments",
          "uniforms_commercial_clothing",
          "used_merchandise_and_secondhand_stores",
          "utilities",
          "variety_stores",
          "veterinary_services",
          "video_amusement_game_supplies",
          "video_game_arcades",
          "video_tape_rental_stores",
          "vocational_trade_schools",
          "watch_jewelry_repair",
          "welding_repair",
          "wholesale_clubs",
          "wig_and_toupee_stores",
          "wires_money_orders",
          "womens_accessory_and_specialty_shops",
          "womens_ready_to_wear_stores",
          "wrecking_and_salvage_yards",
        ]),
      ),
    ),
    allowed_merchant_countries: Schema.NullOr(Schema.Array(Schema.String)),
    blocked_categories: Schema.NullOr(
      Schema.Array(
        Schema.Literals([
          "ac_refrigeration_repair",
          "accounting_bookkeeping_services",
          "advertising_services",
          "agricultural_cooperative",
          "airlines_air_carriers",
          "airports_flying_fields",
          "ambulance_services",
          "amusement_parks_carnivals",
          "antique_reproductions",
          "antique_shops",
          "aquariums",
          "architectural_surveying_services",
          "art_dealers_and_galleries",
          "artists_supply_and_craft_shops",
          "auto_and_home_supply_stores",
          "auto_body_repair_shops",
          "auto_paint_shops",
          "auto_service_shops",
          "automated_cash_disburse",
          "automated_fuel_dispensers",
          "automobile_associations",
          "automotive_parts_and_accessories_stores",
          "automotive_tire_stores",
          "bail_and_bond_payments",
          "bakeries",
          "bands_orchestras",
          "barber_and_beauty_shops",
          "betting_casino_gambling",
          "bicycle_shops",
          "billiard_pool_establishments",
          "boat_dealers",
          "boat_rentals_and_leases",
          "book_stores",
          "books_periodicals_and_newspapers",
          "bowling_alleys",
          "bus_lines",
          "business_secretarial_schools",
          "buying_shopping_services",
          "cable_satellite_and_other_pay_television_and_radio",
          "camera_and_photographic_supply_stores",
          "candy_nut_and_confectionery_stores",
          "car_and_truck_dealers_new_used",
          "car_and_truck_dealers_used_only",
          "car_rental_agencies",
          "car_washes",
          "carpentry_services",
          "carpet_upholstery_cleaning",
          "caterers",
          "charitable_and_social_service_organizations_fundraising",
          "chemicals_and_allied_products",
          "child_care_services",
          "childrens_and_infants_wear_stores",
          "chiropodists_podiatrists",
          "chiropractors",
          "cigar_stores_and_stands",
          "civic_social_fraternal_associations",
          "cleaning_and_maintenance",
          "clothing_rental",
          "colleges_universities",
          "commercial_equipment",
          "commercial_footwear",
          "commercial_photography_art_and_graphics",
          "commuter_transport_and_ferries",
          "computer_network_services",
          "computer_programming",
          "computer_repair",
          "computer_software_stores",
          "computers_peripherals_and_software",
          "concrete_work_services",
          "construction_materials",
          "consulting_public_relations",
          "correspondence_schools",
          "cosmetic_stores",
          "counseling_services",
          "country_clubs",
          "courier_services",
          "court_costs",
          "credit_reporting_agencies",
          "cruise_lines",
          "dairy_products_stores",
          "dance_hall_studios_schools",
          "dating_escort_services",
          "dentists_orthodontists",
          "department_stores",
          "detective_agencies",
          "digital_goods_applications",
          "digital_goods_games",
          "digital_goods_large_volume",
          "digital_goods_media",
          "direct_marketing_catalog_merchant",
          "direct_marketing_combination_catalog_and_retail_merchant",
          "direct_marketing_inbound_telemarketing",
          "direct_marketing_insurance_services",
          "direct_marketing_other",
          "direct_marketing_outbound_telemarketing",
          "direct_marketing_subscription",
          "direct_marketing_travel",
          "discount_stores",
          "doctors",
          "door_to_door_sales",
          "drapery_window_covering_and_upholstery_stores",
          "drinking_places",
          "drug_stores_and_pharmacies",
          "drugs_drug_proprietaries_and_druggist_sundries",
          "dry_cleaners",
          "durable_goods",
          "duty_free_stores",
          "eating_places_restaurants",
          "educational_services",
          "electric_razor_stores",
          "electric_vehicle_charging",
          "electrical_parts_and_equipment",
          "electrical_services",
          "electronics_repair_shops",
          "electronics_stores",
          "elementary_secondary_schools",
          "emergency_services_gcas_visa_use_only",
          "employment_temp_agencies",
          "equipment_rental",
          "exterminating_services",
          "family_clothing_stores",
          "fast_food_restaurants",
          "financial_institutions",
          "fines_government_administrative_entities",
          "fireplace_fireplace_screens_and_accessories_stores",
          "floor_covering_stores",
          "florists",
          "florists_supplies_nursery_stock_and_flowers",
          "freezer_and_locker_meat_provisioners",
          "fuel_dealers_non_automotive",
          "funeral_services_crematories",
          "furniture_home_furnishings_and_equipment_stores_except_appliances",
          "furniture_repair_refinishing",
          "furriers_and_fur_shops",
          "general_services",
          "gift_card_novelty_and_souvenir_shops",
          "glass_paint_and_wallpaper_stores",
          "glassware_crystal_stores",
          "golf_courses_public",
          "government_licensed_horse_dog_racing_us_region_only",
          "government_licensed_online_casions_online_gambling_us_region_only",
          "government_owned_lotteries_non_us_region",
          "government_owned_lotteries_us_region_only",
          "government_services",
          "grocery_stores_supermarkets",
          "hardware_equipment_and_supplies",
          "hardware_stores",
          "health_and_beauty_spas",
          "hearing_aids_sales_and_supplies",
          "heating_plumbing_a_c",
          "hobby_toy_and_game_shops",
          "home_supply_warehouse_stores",
          "hospitals",
          "hotels_motels_and_resorts",
          "household_appliance_stores",
          "industrial_supplies",
          "information_retrieval_services",
          "insurance_default",
          "insurance_underwriting_premiums",
          "intra_company_purchases",
          "jewelry_stores_watches_clocks_and_silverware_stores",
          "landscaping_services",
          "laundries",
          "laundry_cleaning_services",
          "legal_services_attorneys",
          "luggage_and_leather_goods_stores",
          "lumber_building_materials_stores",
          "manual_cash_disburse",
          "marinas_service_and_supplies",
          "marketplaces",
          "masonry_stonework_and_plaster",
          "massage_parlors",
          "medical_and_dental_labs",
          "medical_dental_ophthalmic_and_hospital_equipment_and_supplies",
          "medical_services",
          "membership_organizations",
          "mens_and_boys_clothing_and_accessories_stores",
          "mens_womens_clothing_stores",
          "metal_service_centers",
          "miscellaneous",
          "miscellaneous_apparel_and_accessory_shops",
          "miscellaneous_auto_dealers",
          "miscellaneous_business_services",
          "miscellaneous_food_stores",
          "miscellaneous_general_merchandise",
          "miscellaneous_general_services",
          "miscellaneous_home_furnishing_specialty_stores",
          "miscellaneous_publishing_and_printing",
          "miscellaneous_recreation_services",
          "miscellaneous_repair_shops",
          "miscellaneous_specialty_retail",
          "mobile_home_dealers",
          "motion_picture_theaters",
          "motor_freight_carriers_and_trucking",
          "motor_homes_dealers",
          "motor_vehicle_supplies_and_new_parts",
          "motorcycle_shops_and_dealers",
          "motorcycle_shops_dealers",
          "music_stores_musical_instruments_pianos_and_sheet_music",
          "news_dealers_and_newsstands",
          "non_fi_money_orders",
          "non_fi_stored_value_card_purchase_load",
          "nondurable_goods",
          "nurseries_lawn_and_garden_supply_stores",
          "nursing_personal_care",
          "office_and_commercial_furniture",
          "opticians_eyeglasses",
          "optometrists_ophthalmologist",
          "orthopedic_goods_prosthetic_devices",
          "osteopaths",
          "package_stores_beer_wine_and_liquor",
          "paints_varnishes_and_supplies",
          "parking_lots_garages",
          "passenger_railways",
          "pawn_shops",
          "pet_shops_pet_food_and_supplies",
          "petroleum_and_petroleum_products",
          "photo_developing",
          "photographic_photocopy_microfilm_equipment_and_supplies",
          "photographic_studios",
          "picture_video_production",
          "piece_goods_notions_and_other_dry_goods",
          "plumbing_heating_equipment_and_supplies",
          "political_organizations",
          "postal_services_government_only",
          "precious_stones_and_metals_watches_and_jewelry",
          "professional_services",
          "public_warehousing_and_storage",
          "quick_copy_repro_and_blueprint",
          "railroads",
          "real_estate_agents_and_managers_rentals",
          "record_stores",
          "recreational_vehicle_rentals",
          "religious_goods_stores",
          "religious_organizations",
          "roofing_siding_sheet_metal",
          "secretarial_support_services",
          "security_brokers_dealers",
          "service_stations",
          "sewing_needlework_fabric_and_piece_goods_stores",
          "shoe_repair_hat_cleaning",
          "shoe_stores",
          "small_appliance_repair",
          "snowmobile_dealers",
          "special_trade_services",
          "specialty_cleaning",
          "sporting_goods_stores",
          "sporting_recreation_camps",
          "sports_and_riding_apparel_stores",
          "sports_clubs_fields",
          "stamp_and_coin_stores",
          "stationary_office_supplies_printing_and_writing_paper",
          "stationery_stores_office_and_school_supply_stores",
          "swimming_pools_sales",
          "t_ui_travel_germany",
          "tailors_alterations",
          "tax_payments_government_agencies",
          "tax_preparation_services",
          "taxicabs_limousines",
          "telecommunication_equipment_and_telephone_sales",
          "telecommunication_services",
          "telegraph_services",
          "tent_and_awning_shops",
          "testing_laboratories",
          "theatrical_ticket_agencies",
          "timeshares",
          "tire_retreading_and_repair",
          "tolls_bridge_fees",
          "tourist_attractions_and_exhibits",
          "towing_services",
          "trailer_parks_campgrounds",
          "transportation_services",
          "travel_agencies_tour_operators",
          "truck_stop_iteration",
          "truck_utility_trailer_rentals",
          "typesetting_plate_making_and_related_services",
          "typewriter_stores",
          "u_s_federal_government_agencies_or_departments",
          "uniforms_commercial_clothing",
          "used_merchandise_and_secondhand_stores",
          "utilities",
          "variety_stores",
          "veterinary_services",
          "video_amusement_game_supplies",
          "video_game_arcades",
          "video_tape_rental_stores",
          "vocational_trade_schools",
          "watch_jewelry_repair",
          "welding_repair",
          "wholesale_clubs",
          "wig_and_toupee_stores",
          "wires_money_orders",
          "womens_accessory_and_specialty_shops",
          "womens_ready_to_wear_stores",
          "wrecking_and_salvage_yards",
        ]),
      ),
    ),
    blocked_merchant_countries: Schema.NullOr(Schema.Array(Schema.String)),
    spending_limits: Schema.NullOr(
      Schema.Array(Schema.suspend(() => issuing_card_spending_limitSchema)),
    ),
    spending_limits_currency: Schema.NullOr(Schema.String),
  });
export const issuing_card_spending_limitSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amount: Schema.Number,
    categories: Schema.NullOr(
      Schema.Array(
        Schema.Literals([
          "ac_refrigeration_repair",
          "accounting_bookkeeping_services",
          "advertising_services",
          "agricultural_cooperative",
          "airlines_air_carriers",
          "airports_flying_fields",
          "ambulance_services",
          "amusement_parks_carnivals",
          "antique_reproductions",
          "antique_shops",
          "aquariums",
          "architectural_surveying_services",
          "art_dealers_and_galleries",
          "artists_supply_and_craft_shops",
          "auto_and_home_supply_stores",
          "auto_body_repair_shops",
          "auto_paint_shops",
          "auto_service_shops",
          "automated_cash_disburse",
          "automated_fuel_dispensers",
          "automobile_associations",
          "automotive_parts_and_accessories_stores",
          "automotive_tire_stores",
          "bail_and_bond_payments",
          "bakeries",
          "bands_orchestras",
          "barber_and_beauty_shops",
          "betting_casino_gambling",
          "bicycle_shops",
          "billiard_pool_establishments",
          "boat_dealers",
          "boat_rentals_and_leases",
          "book_stores",
          "books_periodicals_and_newspapers",
          "bowling_alleys",
          "bus_lines",
          "business_secretarial_schools",
          "buying_shopping_services",
          "cable_satellite_and_other_pay_television_and_radio",
          "camera_and_photographic_supply_stores",
          "candy_nut_and_confectionery_stores",
          "car_and_truck_dealers_new_used",
          "car_and_truck_dealers_used_only",
          "car_rental_agencies",
          "car_washes",
          "carpentry_services",
          "carpet_upholstery_cleaning",
          "caterers",
          "charitable_and_social_service_organizations_fundraising",
          "chemicals_and_allied_products",
          "child_care_services",
          "childrens_and_infants_wear_stores",
          "chiropodists_podiatrists",
          "chiropractors",
          "cigar_stores_and_stands",
          "civic_social_fraternal_associations",
          "cleaning_and_maintenance",
          "clothing_rental",
          "colleges_universities",
          "commercial_equipment",
          "commercial_footwear",
          "commercial_photography_art_and_graphics",
          "commuter_transport_and_ferries",
          "computer_network_services",
          "computer_programming",
          "computer_repair",
          "computer_software_stores",
          "computers_peripherals_and_software",
          "concrete_work_services",
          "construction_materials",
          "consulting_public_relations",
          "correspondence_schools",
          "cosmetic_stores",
          "counseling_services",
          "country_clubs",
          "courier_services",
          "court_costs",
          "credit_reporting_agencies",
          "cruise_lines",
          "dairy_products_stores",
          "dance_hall_studios_schools",
          "dating_escort_services",
          "dentists_orthodontists",
          "department_stores",
          "detective_agencies",
          "digital_goods_applications",
          "digital_goods_games",
          "digital_goods_large_volume",
          "digital_goods_media",
          "direct_marketing_catalog_merchant",
          "direct_marketing_combination_catalog_and_retail_merchant",
          "direct_marketing_inbound_telemarketing",
          "direct_marketing_insurance_services",
          "direct_marketing_other",
          "direct_marketing_outbound_telemarketing",
          "direct_marketing_subscription",
          "direct_marketing_travel",
          "discount_stores",
          "doctors",
          "door_to_door_sales",
          "drapery_window_covering_and_upholstery_stores",
          "drinking_places",
          "drug_stores_and_pharmacies",
          "drugs_drug_proprietaries_and_druggist_sundries",
          "dry_cleaners",
          "durable_goods",
          "duty_free_stores",
          "eating_places_restaurants",
          "educational_services",
          "electric_razor_stores",
          "electric_vehicle_charging",
          "electrical_parts_and_equipment",
          "electrical_services",
          "electronics_repair_shops",
          "electronics_stores",
          "elementary_secondary_schools",
          "emergency_services_gcas_visa_use_only",
          "employment_temp_agencies",
          "equipment_rental",
          "exterminating_services",
          "family_clothing_stores",
          "fast_food_restaurants",
          "financial_institutions",
          "fines_government_administrative_entities",
          "fireplace_fireplace_screens_and_accessories_stores",
          "floor_covering_stores",
          "florists",
          "florists_supplies_nursery_stock_and_flowers",
          "freezer_and_locker_meat_provisioners",
          "fuel_dealers_non_automotive",
          "funeral_services_crematories",
          "furniture_home_furnishings_and_equipment_stores_except_appliances",
          "furniture_repair_refinishing",
          "furriers_and_fur_shops",
          "general_services",
          "gift_card_novelty_and_souvenir_shops",
          "glass_paint_and_wallpaper_stores",
          "glassware_crystal_stores",
          "golf_courses_public",
          "government_licensed_horse_dog_racing_us_region_only",
          "government_licensed_online_casions_online_gambling_us_region_only",
          "government_owned_lotteries_non_us_region",
          "government_owned_lotteries_us_region_only",
          "government_services",
          "grocery_stores_supermarkets",
          "hardware_equipment_and_supplies",
          "hardware_stores",
          "health_and_beauty_spas",
          "hearing_aids_sales_and_supplies",
          "heating_plumbing_a_c",
          "hobby_toy_and_game_shops",
          "home_supply_warehouse_stores",
          "hospitals",
          "hotels_motels_and_resorts",
          "household_appliance_stores",
          "industrial_supplies",
          "information_retrieval_services",
          "insurance_default",
          "insurance_underwriting_premiums",
          "intra_company_purchases",
          "jewelry_stores_watches_clocks_and_silverware_stores",
          "landscaping_services",
          "laundries",
          "laundry_cleaning_services",
          "legal_services_attorneys",
          "luggage_and_leather_goods_stores",
          "lumber_building_materials_stores",
          "manual_cash_disburse",
          "marinas_service_and_supplies",
          "marketplaces",
          "masonry_stonework_and_plaster",
          "massage_parlors",
          "medical_and_dental_labs",
          "medical_dental_ophthalmic_and_hospital_equipment_and_supplies",
          "medical_services",
          "membership_organizations",
          "mens_and_boys_clothing_and_accessories_stores",
          "mens_womens_clothing_stores",
          "metal_service_centers",
          "miscellaneous",
          "miscellaneous_apparel_and_accessory_shops",
          "miscellaneous_auto_dealers",
          "miscellaneous_business_services",
          "miscellaneous_food_stores",
          "miscellaneous_general_merchandise",
          "miscellaneous_general_services",
          "miscellaneous_home_furnishing_specialty_stores",
          "miscellaneous_publishing_and_printing",
          "miscellaneous_recreation_services",
          "miscellaneous_repair_shops",
          "miscellaneous_specialty_retail",
          "mobile_home_dealers",
          "motion_picture_theaters",
          "motor_freight_carriers_and_trucking",
          "motor_homes_dealers",
          "motor_vehicle_supplies_and_new_parts",
          "motorcycle_shops_and_dealers",
          "motorcycle_shops_dealers",
          "music_stores_musical_instruments_pianos_and_sheet_music",
          "news_dealers_and_newsstands",
          "non_fi_money_orders",
          "non_fi_stored_value_card_purchase_load",
          "nondurable_goods",
          "nurseries_lawn_and_garden_supply_stores",
          "nursing_personal_care",
          "office_and_commercial_furniture",
          "opticians_eyeglasses",
          "optometrists_ophthalmologist",
          "orthopedic_goods_prosthetic_devices",
          "osteopaths",
          "package_stores_beer_wine_and_liquor",
          "paints_varnishes_and_supplies",
          "parking_lots_garages",
          "passenger_railways",
          "pawn_shops",
          "pet_shops_pet_food_and_supplies",
          "petroleum_and_petroleum_products",
          "photo_developing",
          "photographic_photocopy_microfilm_equipment_and_supplies",
          "photographic_studios",
          "picture_video_production",
          "piece_goods_notions_and_other_dry_goods",
          "plumbing_heating_equipment_and_supplies",
          "political_organizations",
          "postal_services_government_only",
          "precious_stones_and_metals_watches_and_jewelry",
          "professional_services",
          "public_warehousing_and_storage",
          "quick_copy_repro_and_blueprint",
          "railroads",
          "real_estate_agents_and_managers_rentals",
          "record_stores",
          "recreational_vehicle_rentals",
          "religious_goods_stores",
          "religious_organizations",
          "roofing_siding_sheet_metal",
          "secretarial_support_services",
          "security_brokers_dealers",
          "service_stations",
          "sewing_needlework_fabric_and_piece_goods_stores",
          "shoe_repair_hat_cleaning",
          "shoe_stores",
          "small_appliance_repair",
          "snowmobile_dealers",
          "special_trade_services",
          "specialty_cleaning",
          "sporting_goods_stores",
          "sporting_recreation_camps",
          "sports_and_riding_apparel_stores",
          "sports_clubs_fields",
          "stamp_and_coin_stores",
          "stationary_office_supplies_printing_and_writing_paper",
          "stationery_stores_office_and_school_supply_stores",
          "swimming_pools_sales",
          "t_ui_travel_germany",
          "tailors_alterations",
          "tax_payments_government_agencies",
          "tax_preparation_services",
          "taxicabs_limousines",
          "telecommunication_equipment_and_telephone_sales",
          "telecommunication_services",
          "telegraph_services",
          "tent_and_awning_shops",
          "testing_laboratories",
          "theatrical_ticket_agencies",
          "timeshares",
          "tire_retreading_and_repair",
          "tolls_bridge_fees",
          "tourist_attractions_and_exhibits",
          "towing_services",
          "trailer_parks_campgrounds",
          "transportation_services",
          "travel_agencies_tour_operators",
          "truck_stop_iteration",
          "truck_utility_trailer_rentals",
          "typesetting_plate_making_and_related_services",
          "typewriter_stores",
          "u_s_federal_government_agencies_or_departments",
          "uniforms_commercial_clothing",
          "used_merchandise_and_secondhand_stores",
          "utilities",
          "variety_stores",
          "veterinary_services",
          "video_amusement_game_supplies",
          "video_game_arcades",
          "video_tape_rental_stores",
          "vocational_trade_schools",
          "watch_jewelry_repair",
          "welding_repair",
          "wholesale_clubs",
          "wig_and_toupee_stores",
          "wires_money_orders",
          "womens_accessory_and_specialty_shops",
          "womens_ready_to_wear_stores",
          "wrecking_and_salvage_yards",
        ]),
      ),
    ),
    interval: Schema.Literals([
      "all_time",
      "daily",
      "monthly",
      "per_authorization",
      "weekly",
      "yearly",
    ]),
  });
export const issuing_authorization_fraud_challengeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    channel: Schema.Literals(["sms"]),
    status: Schema.Literals([
      "expired",
      "pending",
      "rejected",
      "undeliverable",
      "verified",
    ]),
    undeliverable_reason: Schema.NullOr(
      Schema.Literals(["no_phone_number", "unsupported_phone_number"]),
    ),
  });
export const issuing_authorization_merchant_dataSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    category: Schema.String,
    category_code: Schema.String,
    city: Schema.NullOr(Schema.String),
    country: Schema.NullOr(Schema.String),
    name: Schema.NullOr(Schema.String),
    network_id: Schema.String,
    postal_code: Schema.NullOr(Schema.String),
    state: Schema.NullOr(Schema.String),
    tax_id: Schema.NullOr(Schema.String),
    terminal_id: Schema.NullOr(Schema.String),
    url: Schema.NullOr(Schema.String),
  });
export const issuing_authorization_requestSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amount: Schema.Number,
    amount_details: Schema.Unknown,
    approved: Schema.Boolean,
    authorization_code: Schema.NullOr(Schema.String),
    created: Schema.Number,
    currency: Schema.String,
    merchant_amount: Schema.Number,
    merchant_currency: Schema.String,
    network_risk_score: Schema.NullOr(Schema.Number),
    reason: Schema.Literals([
      "account_disabled",
      "card_active",
      "card_canceled",
      "card_expired",
      "card_inactive",
      "cardholder_blocked",
      "cardholder_inactive",
      "cardholder_verification_required",
      "insecure_authorization_method",
      "insufficient_funds",
      "network_fallback",
      "not_allowed",
      "pin_blocked",
      "spending_controls",
      "suspected_fraud",
      "verification_failed",
      "webhook_approved",
      "webhook_declined",
      "webhook_error",
      "webhook_timeout",
    ]),
    reason_message: Schema.NullOr(Schema.String),
    requested_at: Schema.NullOr(Schema.Number),
  });
export const issuing_transactionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amount: Schema.Number,
    amount_details: Schema.Unknown,
    authorization: Schema.Unknown,
    balance_transaction: Schema.Unknown,
    card: Schema.Unknown,
    cardholder: Schema.Unknown,
    created: Schema.Number,
    currency: Schema.String,
    dispute: Schema.Unknown,
    id: Schema.String,
    livemode: Schema.Boolean,
    merchant_amount: Schema.Number,
    merchant_currency: Schema.String,
    merchant_data: Schema.suspend(
      () => issuing_authorization_merchant_dataSchema,
    ),
    metadata: Schema.Record(Schema.String, Schema.String),
    network_data: Schema.Unknown,
    object: Schema.Literals(["issuing.transaction"]),
    purchase_details: Schema.optional(Schema.Unknown),
    token: Schema.optional(Schema.Unknown),
    treasury: Schema.optional(Schema.Unknown),
    type: Schema.Literals(["capture", "refund"]),
    wallet: Schema.NullOr(
      Schema.Literals(["apple_pay", "google_pay", "samsung_pay"]),
    ),
  });
export const issuing_authorization_verification_dataSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    address_line1_check: Schema.Literals(["match", "mismatch", "not_provided"]),
    address_postal_code_check: Schema.Literals([
      "match",
      "mismatch",
      "not_provided",
    ]),
    authentication_exemption: Schema.Unknown,
    cvc_check: Schema.Literals(["match", "mismatch", "not_provided"]),
    expiry_check: Schema.Literals(["match", "mismatch", "not_provided"]),
    postal_code: Schema.NullOr(Schema.String),
    three_d_secure: Schema.Unknown,
  });
export const issuing_disputeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  amount: Schema.Number,
  balance_transactions: Schema.optional(
    Schema.NullOr(
      Schema.Array(Schema.suspend(() => balance_transactionSchema)),
    ),
  ),
  created: Schema.Number,
  currency: Schema.String,
  evidence: Schema.suspend(() => issuing_dispute_evidenceSchema),
  id: Schema.String,
  livemode: Schema.Boolean,
  loss_reason: Schema.optional(
    Schema.Literals([
      "cardholder_authentication_issuer_liability",
      "eci5_token_transaction_with_tavv",
      "excess_disputes_in_timeframe",
      "has_not_met_the_minimum_dispute_amount_requirements",
      "invalid_duplicate_dispute",
      "invalid_incorrect_amount_dispute",
      "invalid_no_authorization",
      "invalid_use_of_disputes",
      "merchandise_delivered_or_shipped",
      "merchandise_or_service_as_described",
      "not_cancelled",
      "other",
      "refund_issued",
      "submitted_beyond_allowable_time_limit",
      "transaction_3ds_required",
      "transaction_approved_after_prior_fraud_dispute",
      "transaction_authorized",
      "transaction_electronically_read",
      "transaction_qualifies_for_visa_easy_payment_service",
      "transaction_unattended",
    ]),
  ),
  metadata: Schema.Record(Schema.String, Schema.String),
  object: Schema.Literals(["issuing.dispute"]),
  status: Schema.Literals([
    "expired",
    "lost",
    "submitted",
    "unsubmitted",
    "won",
  ]),
  transaction: Schema.Unknown,
  treasury: Schema.optional(Schema.Unknown),
});
export const issuing_dispute_evidenceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    canceled: Schema.optional(
      Schema.suspend(() => issuing_dispute_canceled_evidenceSchema),
    ),
    duplicate: Schema.optional(
      Schema.suspend(() => issuing_dispute_duplicate_evidenceSchema),
    ),
    fraudulent: Schema.optional(
      Schema.suspend(() => issuing_dispute_fraudulent_evidenceSchema),
    ),
    merchandise_not_as_described: Schema.optional(
      Schema.suspend(
        () => issuing_dispute_merchandise_not_as_described_evidenceSchema,
      ),
    ),
    no_valid_authorization: Schema.optional(
      Schema.suspend(
        () => issuing_dispute_no_valid_authorization_evidenceSchema,
      ),
    ),
    not_received: Schema.optional(
      Schema.suspend(() => issuing_dispute_not_received_evidenceSchema),
    ),
    other: Schema.optional(
      Schema.suspend(() => issuing_dispute_other_evidenceSchema),
    ),
    reason: Schema.Literals([
      "canceled",
      "duplicate",
      "fraudulent",
      "merchandise_not_as_described",
      "no_valid_authorization",
      "not_received",
      "other",
      "service_not_as_described",
    ]),
    service_not_as_described: Schema.optional(
      Schema.suspend(
        () => issuing_dispute_service_not_as_described_evidenceSchema,
      ),
    ),
  });
export const issuing_dispute_canceled_evidenceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    additional_documentation: Schema.Unknown,
    canceled_at: Schema.NullOr(Schema.Number),
    cancellation_policy_provided: Schema.NullOr(Schema.Boolean),
    cancellation_reason: Schema.NullOr(Schema.String),
    expected_at: Schema.NullOr(Schema.Number),
    explanation: Schema.NullOr(Schema.String),
    product_description: Schema.NullOr(Schema.String),
    product_type: Schema.NullOr(Schema.Literals(["merchandise", "service"])),
    return_status: Schema.NullOr(
      Schema.Literals(["merchant_rejected", "successful"]),
    ),
    returned_at: Schema.NullOr(Schema.Number),
  });
export const issuing_dispute_duplicate_evidenceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    additional_documentation: Schema.Unknown,
    card_statement: Schema.Unknown,
    cash_receipt: Schema.Unknown,
    check_image: Schema.Unknown,
    explanation: Schema.NullOr(Schema.String),
    original_transaction: Schema.NullOr(Schema.String),
  });
export const issuing_dispute_fraudulent_evidenceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    additional_documentation: Schema.Unknown,
    explanation: Schema.NullOr(Schema.String),
  });
export const issuing_dispute_merchandise_not_as_described_evidenceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    additional_documentation: Schema.Unknown,
    explanation: Schema.NullOr(Schema.String),
    received_at: Schema.NullOr(Schema.Number),
    return_description: Schema.NullOr(Schema.String),
    return_status: Schema.NullOr(
      Schema.Literals(["merchant_rejected", "successful"]),
    ),
    returned_at: Schema.NullOr(Schema.Number),
  });
export const issuing_dispute_no_valid_authorization_evidenceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    additional_documentation: Schema.Unknown,
    explanation: Schema.NullOr(Schema.String),
  });
export const issuing_dispute_not_received_evidenceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    additional_documentation: Schema.Unknown,
    expected_at: Schema.NullOr(Schema.Number),
    explanation: Schema.NullOr(Schema.String),
    product_description: Schema.NullOr(Schema.String),
    product_type: Schema.NullOr(Schema.Literals(["merchandise", "service"])),
  });
export const issuing_dispute_other_evidenceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    additional_documentation: Schema.Unknown,
    explanation: Schema.NullOr(Schema.String),
    product_description: Schema.NullOr(Schema.String),
    product_type: Schema.NullOr(Schema.Literals(["merchandise", "service"])),
  });
export const issuing_dispute_service_not_as_described_evidenceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    additional_documentation: Schema.Unknown,
    canceled_at: Schema.NullOr(Schema.Number),
    cancellation_reason: Schema.NullOr(Schema.String),
    explanation: Schema.NullOr(Schema.String),
    received_at: Schema.NullOr(Schema.Number),
  });
export const issuing_personalization_designSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    card_logo: Schema.Unknown,
    carrier_text: Schema.Unknown,
    created: Schema.Number,
    id: Schema.String,
    livemode: Schema.Boolean,
    lookup_key: Schema.NullOr(Schema.String),
    metadata: Schema.Record(Schema.String, Schema.String),
    name: Schema.NullOr(Schema.String),
    object: Schema.Literals(["issuing.personalization_design"]),
    physical_bundle: Schema.Unknown,
    preferences: Schema.suspend(
      () => issuing_personalization_design_preferencesSchema,
    ),
    rejection_reasons: Schema.suspend(
      () => issuing_personalization_design_rejection_reasonsSchema,
    ),
    status: Schema.Literals(["active", "inactive", "rejected", "review"]),
  });
export const issuing_personalization_design_preferencesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    is_default: Schema.Boolean,
    is_platform_default: Schema.NullOr(Schema.Boolean),
  });
export const issuing_personalization_design_rejection_reasonsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    card_logo: Schema.NullOr(
      Schema.Array(
        Schema.Literals([
          "geographic_location",
          "inappropriate",
          "network_name",
          "non_binary_image",
          "non_fiat_currency",
          "other",
          "other_entity",
          "promotional_material",
        ]),
      ),
    ),
    carrier_text: Schema.NullOr(
      Schema.Array(
        Schema.Literals([
          "geographic_location",
          "inappropriate",
          "network_name",
          "non_fiat_currency",
          "other",
          "other_entity",
          "promotional_material",
        ]),
      ),
    ),
  });
export const issuing_physical_bundleSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    features: Schema.suspend(() => issuing_physical_bundle_featuresSchema),
    id: Schema.String,
    livemode: Schema.Boolean,
    name: Schema.String,
    object: Schema.Literals(["issuing.physical_bundle"]),
    status: Schema.Literals(["active", "inactive", "review"]),
    type: Schema.Literals(["custom", "standard"]),
  });
export const issuing_physical_bundle_featuresSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    card_logo: Schema.Literals(["optional", "required", "unsupported"]),
    carrier_text: Schema.Literals(["optional", "required", "unsupported"]),
    second_line: Schema.Literals(["optional", "required", "unsupported"]),
  });
export const issuing_tokenSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  card: Schema.Unknown,
  created: Schema.Number,
  device_fingerprint: Schema.NullOr(Schema.String),
  id: Schema.String,
  last4: Schema.optional(Schema.String),
  livemode: Schema.Boolean,
  network: Schema.Literals(["mastercard", "visa"]),
  network_data: Schema.optional(
    Schema.suspend(() => issuing_network_token_network_dataSchema),
  ),
  network_updated_at: Schema.Number,
  object: Schema.Literals(["issuing.token"]),
  status: Schema.Literals(["active", "deleted", "requested", "suspended"]),
  wallet_provider: Schema.optional(
    Schema.Literals(["apple_pay", "google_pay", "samsung_pay"]),
  ),
});
export const issuing_network_token_network_dataSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    device: Schema.optional(
      Schema.suspend(() => issuing_network_token_deviceSchema),
    ),
    mastercard: Schema.optional(
      Schema.suspend(() => issuing_network_token_mastercardSchema),
    ),
    type: Schema.Literals(["mastercard", "visa"]),
    visa: Schema.optional(
      Schema.suspend(() => issuing_network_token_visaSchema),
    ),
    wallet_provider: Schema.optional(
      Schema.suspend(() => issuing_network_token_wallet_providerSchema),
    ),
  });
export const issuing_network_token_deviceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    device_fingerprint: Schema.optional(Schema.String),
    ip_address: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    phone_number: Schema.optional(Schema.String),
    type: Schema.optional(Schema.Literals(["other", "phone", "watch"])),
  });
export const issuing_network_token_mastercardSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    card_reference_id: Schema.optional(Schema.String),
    token_reference_id: Schema.String,
    token_requestor_id: Schema.String,
    token_requestor_name: Schema.optional(Schema.String),
  });
export const issuing_network_token_visaSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    card_reference_id: Schema.NullOr(Schema.String),
    token_reference_id: Schema.String,
    token_requestor_id: Schema.String,
    token_risk_score: Schema.optional(Schema.String),
  });
export const issuing_network_token_wallet_providerSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    account_id: Schema.optional(Schema.String),
    account_trust_score: Schema.optional(Schema.Number),
    card_number_source: Schema.optional(
      Schema.Literals(["app", "manual", "on_file", "other"]),
    ),
    cardholder_address: Schema.optional(
      Schema.suspend(() => issuing_network_token_addressSchema),
    ),
    cardholder_name: Schema.optional(Schema.String),
    device_trust_score: Schema.optional(Schema.Number),
    hashed_account_email_address: Schema.optional(Schema.String),
    reason_codes: Schema.optional(
      Schema.Array(
        Schema.Literals([
          "account_card_too_new",
          "account_recently_changed",
          "account_too_new",
          "account_too_new_since_launch",
          "additional_device",
          "data_expired",
          "defer_id_v_decision",
          "device_recently_lost",
          "good_activity_history",
          "has_suspended_tokens",
          "high_risk",
          "inactive_account",
          "long_account_tenure",
          "low_account_score",
          "low_device_score",
          "low_phone_number_score",
          "network_service_error",
          "outside_home_territory",
          "provisioning_cardholder_mismatch",
          "provisioning_device_and_cardholder_mismatch",
          "provisioning_device_mismatch",
          "same_device_no_prior_authentication",
          "same_device_successful_prior_authentication",
          "software_update",
          "suspicious_activity",
          "too_many_different_cardholders",
          "too_many_recent_attempts",
          "too_many_recent_tokens",
        ]),
      ),
    ),
    suggested_decision: Schema.optional(
      Schema.Literals(["approve", "decline", "require_auth"]),
    ),
    suggested_decision_version: Schema.optional(Schema.String),
  });
export const issuing_network_token_addressSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    line1: Schema.String,
    postal_code: Schema.String,
  });
export const customer_acceptanceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accepted_at: Schema.NullOr(Schema.Number),
    offline: Schema.optional(Schema.suspend(() => offline_acceptanceSchema)),
    online: Schema.optional(Schema.suspend(() => online_acceptanceSchema)),
    type: Schema.Literals(["offline", "online"]),
  });
export const offline_acceptanceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({});
export const online_acceptanceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ip_address: Schema.NullOr(Schema.String),
    user_agent: Schema.NullOr(Schema.String),
  });
export const mandate_multi_useSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({});
export const mandate_payment_method_detailsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    acss_debit: Schema.optional(Schema.suspend(() => mandate_acss_debitSchema)),
    amazon_pay: Schema.optional(Schema.suspend(() => mandate_amazon_paySchema)),
    au_becs_debit: Schema.optional(
      Schema.suspend(() => mandate_au_becs_debitSchema),
    ),
    bacs_debit: Schema.optional(Schema.suspend(() => mandate_bacs_debitSchema)),
    card: Schema.optional(
      Schema.suspend(() => card_mandate_payment_method_detailsSchema),
    ),
    cashapp: Schema.optional(Schema.suspend(() => mandate_cashappSchema)),
    kakao_pay: Schema.optional(Schema.suspend(() => mandate_kakao_paySchema)),
    klarna: Schema.optional(Schema.suspend(() => mandate_klarnaSchema)),
    kr_card: Schema.optional(Schema.suspend(() => mandate_kr_cardSchema)),
    link: Schema.optional(Schema.suspend(() => mandate_linkSchema)),
    naver_pay: Schema.optional(Schema.suspend(() => mandate_naver_paySchema)),
    nz_bank_account: Schema.optional(
      Schema.suspend(() => mandate_nz_bank_accountSchema),
    ),
    paypal: Schema.optional(Schema.suspend(() => mandate_paypalSchema)),
    payto: Schema.optional(Schema.suspend(() => mandate_paytoSchema)),
    revolut_pay: Schema.optional(
      Schema.suspend(() => mandate_revolut_paySchema),
    ),
    sepa_debit: Schema.optional(Schema.suspend(() => mandate_sepa_debitSchema)),
    type: Schema.String,
    upi: Schema.optional(Schema.suspend(() => mandate_upiSchema)),
    us_bank_account: Schema.optional(
      Schema.suspend(() => mandate_us_bank_accountSchema),
    ),
  });
export const mandate_acss_debitSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    default_for: Schema.optional(
      Schema.Array(Schema.Literals(["invoice", "subscription"])),
    ),
    interval_description: Schema.NullOr(Schema.String),
    payment_schedule: Schema.Literals(["combined", "interval", "sporadic"]),
    transaction_type: Schema.Literals(["business", "personal"]),
  });
export const mandate_amazon_paySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({});
export const mandate_au_becs_debitSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    url: Schema.String,
  });
export const mandate_bacs_debitSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    display_name: Schema.NullOr(Schema.String),
    network_status: Schema.Literals([
      "accepted",
      "pending",
      "refused",
      "revoked",
    ]),
    reference: Schema.String,
    revocation_reason: Schema.NullOr(
      Schema.Literals([
        "account_closed",
        "bank_account_restricted",
        "bank_ownership_changed",
        "could_not_process",
        "debit_not_authorized",
      ]),
    ),
    service_user_number: Schema.NullOr(Schema.String),
    url: Schema.String,
  });
export const card_mandate_payment_method_detailsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({});
export const mandate_cashappSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
);
export const mandate_kakao_paySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({});
export const mandate_klarnaSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
);
export const mandate_kr_cardSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
);
export const mandate_linkSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({});
export const mandate_naver_paySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({});
export const mandate_nz_bank_accountSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({});
export const mandate_paypalSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  billing_agreement_id: Schema.NullOr(Schema.String),
  payer_id: Schema.NullOr(Schema.String),
});
export const mandate_paytoSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  amount: Schema.NullOr(Schema.Number),
  amount_type: Schema.Literals(["fixed", "maximum"]),
  end_date: Schema.NullOr(Schema.String),
  payment_schedule: Schema.Literals([
    "adhoc",
    "annual",
    "daily",
    "fortnightly",
    "monthly",
    "quarterly",
    "semi_annual",
    "weekly",
  ]),
  payments_per_period: Schema.NullOr(Schema.Number),
  purpose: Schema.NullOr(
    Schema.Literals([
      "dependant_support",
      "government",
      "loan",
      "mortgage",
      "other",
      "pension",
      "personal",
      "retail",
      "salary",
      "tax",
      "utility",
    ]),
  ),
  start_date: Schema.NullOr(Schema.String),
});
export const mandate_revolut_paySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({});
export const mandate_sepa_debitSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reference: Schema.String,
    url: Schema.String,
  });
export const mandate_upiSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  amount: Schema.NullOr(Schema.Number),
  amount_type: Schema.NullOr(Schema.Literals(["fixed", "maximum"])),
  description: Schema.NullOr(Schema.String),
  end_date: Schema.NullOr(Schema.Number),
});
export const mandate_us_bank_accountSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    collection_method: Schema.optional(Schema.Literals(["paper"])),
  });
export const mandate_single_useSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amount: Schema.Number,
    currency: Schema.String,
  });
export const payment_attempt_recordSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amount: Schema.suspend(
      () => payments_primitives_payment_records_resource_amountSchema,
    ),
    amount_authorized: Schema.suspend(
      () => payments_primitives_payment_records_resource_amountSchema,
    ),
    amount_canceled: Schema.suspend(
      () => payments_primitives_payment_records_resource_amountSchema,
    ),
    amount_failed: Schema.suspend(
      () => payments_primitives_payment_records_resource_amountSchema,
    ),
    amount_guaranteed: Schema.suspend(
      () => payments_primitives_payment_records_resource_amountSchema,
    ),
    amount_refunded: Schema.suspend(
      () => payments_primitives_payment_records_resource_amountSchema,
    ),
    amount_requested: Schema.suspend(
      () => payments_primitives_payment_records_resource_amountSchema,
    ),
    application: Schema.NullOr(Schema.String),
    created: Schema.Number,
    customer_details: Schema.Unknown,
    customer_presence: Schema.NullOr(
      Schema.Literals(["off_session", "on_session"]),
    ),
    description: Schema.NullOr(Schema.String),
    id: Schema.String,
    livemode: Schema.Boolean,
    metadata: Schema.Record(Schema.String, Schema.String),
    object: Schema.Literals(["payment_attempt_record"]),
    payment_method_details: Schema.Unknown,
    payment_record: Schema.NullOr(Schema.String),
    processor_details: Schema.suspend(
      () =>
        payments_primitives_payment_records_resource_processor_detailsSchema,
    ),
    reported_by: Schema.Literals(["self", "stripe"]),
    shipping_details: Schema.Unknown,
  });
export const payments_primitives_payment_records_resource_amountSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    currency: Schema.String,
    value: Schema.Number,
  });
export const payments_primitives_payment_records_resource_processor_detailsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    custom: Schema.optional(
      Schema.suspend(
        () =>
          payments_primitives_payment_records_resource_processor_details_resource_custom_detailsSchema,
      ),
    ),
    type: Schema.Literals(["custom"]),
  });
export const payments_primitives_payment_records_resource_processor_details_resource_custom_detailsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    payment_reference: Schema.NullOr(Schema.String),
  });
export const payment_intentSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  amount: Schema.Number,
  amount_capturable: Schema.Number,
  amount_details: Schema.optional(
    Schema.suspend(() => payment_flows_amount_detailsSchema),
  ),
  amount_received: Schema.Number,
  application: Schema.Unknown,
  application_fee_amount: Schema.NullOr(Schema.Number),
  automatic_payment_methods: Schema.Unknown,
  canceled_at: Schema.NullOr(Schema.Number),
  cancellation_reason: Schema.NullOr(
    Schema.Literals([
      "abandoned",
      "automatic",
      "duplicate",
      "expired",
      "failed_invoice",
      "fraudulent",
      "requested_by_customer",
      "void_invoice",
    ]),
  ),
  capture_method: Schema.Literals(["automatic", "automatic_async", "manual"]),
  client_secret: SensitiveOutputNullableString,
  confirmation_method: Schema.Literals(["automatic", "manual"]),
  created: Schema.Number,
  currency: Schema.String,
  customer: Schema.Unknown,
  customer_account: Schema.NullOr(Schema.String),
  description: Schema.NullOr(Schema.String),
  excluded_payment_method_types: Schema.NullOr(
    Schema.Array(
      Schema.Literals([
        "acss_debit",
        "affirm",
        "afterpay_clearpay",
        "alipay",
        "alma",
        "amazon_pay",
        "au_becs_debit",
        "bacs_debit",
        "bancontact",
        "billie",
        "blik",
        "boleto",
        "card",
        "cashapp",
        "crypto",
        "customer_balance",
        "eps",
        "fpx",
        "giropay",
        "grabpay",
        "ideal",
        "kakao_pay",
        "klarna",
        "konbini",
        "kr_card",
        "mb_way",
        "mobilepay",
        "multibanco",
        "naver_pay",
        "nz_bank_account",
        "oxxo",
        "p24",
        "pay_by_bank",
        "payco",
        "paynow",
        "paypal",
        "payto",
        "pix",
        "promptpay",
        "revolut_pay",
        "samsung_pay",
        "satispay",
        "sepa_debit",
        "sofort",
        "swish",
        "twint",
        "upi",
        "us_bank_account",
        "wechat_pay",
        "zip",
      ]),
    ),
  ),
  hooks: Schema.optional(
    Schema.suspend(() => payment_flows_payment_intent_async_workflowsSchema),
  ),
  id: Schema.String,
  last_payment_error: Schema.Unknown,
  latest_charge: Schema.Unknown,
  livemode: Schema.Boolean,
  metadata: Schema.Record(Schema.String, Schema.String),
  next_action: Schema.Unknown,
  object: Schema.Literals(["payment_intent"]),
  on_behalf_of: Schema.Unknown,
  payment_details: Schema.optional(
    Schema.suspend(() => payment_flows_payment_detailsSchema),
  ),
  payment_method: Schema.Unknown,
  payment_method_configuration_details: Schema.Unknown,
  payment_method_options: Schema.Unknown,
  payment_method_types: Schema.Array(Schema.String),
  presentment_details: Schema.optional(
    Schema.suspend(
      () => payment_flows_payment_intent_presentment_detailsSchema,
    ),
  ),
  processing: Schema.Unknown,
  receipt_email: Schema.NullOr(Schema.String),
  review: Schema.Unknown,
  setup_future_usage: Schema.NullOr(
    Schema.Literals(["off_session", "on_session"]),
  ),
  shipping: Schema.Unknown,
  source: Schema.Unknown,
  statement_descriptor: Schema.NullOr(Schema.String),
  statement_descriptor_suffix: Schema.NullOr(Schema.String),
  status: Schema.Literals([
    "canceled",
    "processing",
    "requires_action",
    "requires_capture",
    "requires_confirmation",
    "requires_payment_method",
    "succeeded",
  ]),
  transfer_data: Schema.optional(Schema.Unknown),
  transfer_group: Schema.NullOr(Schema.String),
});
export const payment_flows_amount_detailsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    discount_amount: Schema.optional(Schema.Number),
    error: Schema.optional(
      Schema.suspend(() => payment_flows_amount_details_resource_errorSchema),
    ),
    line_items: Schema.optional(
      Schema.Struct({
        data: Schema.Array(
          Schema.suspend(() => payment_intent_amount_details_line_itemSchema),
        ),
        has_more: Schema.Boolean,
        object: Schema.Literals(["list"]),
        url: Schema.String,
      }),
    ),
    shipping: Schema.optional(
      Schema.suspend(
        () => payment_flows_amount_details_resource_shippingSchema,
      ),
    ),
    tax: Schema.optional(
      Schema.suspend(() => payment_flows_amount_details_resource_taxSchema),
    ),
    tip: Schema.optional(
      Schema.suspend(
        () => payment_flows_amount_details_client_resource_tipSchema,
      ),
    ),
  });
export const payment_flows_amount_details_resource_errorSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.NullOr(
      Schema.Literals([
        "amount_details_amount_mismatch",
        "amount_details_tax_shipping_discount_greater_than_amount",
      ]),
    ),
    message: Schema.NullOr(Schema.String),
  });
export const payment_intent_amount_details_line_itemSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    discount_amount: Schema.NullOr(Schema.Number),
    id: Schema.String,
    object: Schema.Literals(["payment_intent_amount_details_line_item"]),
    payment_method_options: Schema.Unknown,
    product_code: Schema.NullOr(Schema.String),
    product_name: Schema.String,
    quantity: Schema.Number,
    tax: Schema.Unknown,
    unit_cost: Schema.Number,
    unit_of_measure: Schema.NullOr(Schema.String),
  });
export const payment_flows_amount_details_resource_shippingSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amount: Schema.NullOr(Schema.Number),
    from_postal_code: Schema.NullOr(Schema.String),
    to_postal_code: Schema.NullOr(Schema.String),
  });
export const payment_flows_amount_details_resource_taxSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    total_tax_amount: Schema.NullOr(Schema.Number),
  });
export const payment_flows_amount_details_client_resource_tipSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amount: Schema.optional(Schema.Number),
  });
export const payment_flows_payment_intent_async_workflowsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inputs: Schema.optional(
      Schema.suspend(
        () =>
          payment_flows_payment_intent_async_workflows_resource_inputsSchema,
      ),
    ),
  });
export const payment_flows_payment_intent_async_workflows_resource_inputsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tax: Schema.optional(
      Schema.suspend(
        () =>
          payment_flows_payment_intent_async_workflows_resource_inputs_resource_taxSchema,
      ),
    ),
  });
export const payment_flows_payment_intent_async_workflows_resource_inputs_resource_taxSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    calculation: Schema.String,
  });
export const payment_flows_payment_detailsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customer_reference: Schema.NullOr(Schema.String),
    order_reference: Schema.NullOr(Schema.String),
  });
export const payment_linkSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  active: Schema.Boolean,
  after_completion: Schema.suspend(
    () => payment_links_resource_after_completionSchema,
  ),
  allow_promotion_codes: Schema.Boolean,
  application: Schema.Unknown,
  application_fee_amount: Schema.NullOr(Schema.Number),
  application_fee_percent: Schema.NullOr(Schema.Number),
  automatic_tax: Schema.suspend(
    () => payment_links_resource_automatic_taxSchema,
  ),
  billing_address_collection: Schema.Literals(["auto", "required"]),
  consent_collection: Schema.Unknown,
  currency: Schema.String,
  custom_fields: Schema.Array(
    Schema.suspend(() => payment_links_resource_custom_fieldsSchema),
  ),
  custom_text: Schema.suspend(() => payment_links_resource_custom_textSchema),
  customer_creation: Schema.Literals(["always", "if_required"]),
  id: Schema.String,
  inactive_message: Schema.NullOr(Schema.String),
  invoice_creation: Schema.Unknown,
  line_items: Schema.optional(
    Schema.Struct({
      data: Schema.Array(Schema.suspend(() => itemSchema)),
      has_more: Schema.Boolean,
      object: Schema.Literals(["list"]),
      url: Schema.String,
    }),
  ),
  livemode: Schema.Boolean,
  metadata: Schema.Record(Schema.String, Schema.String),
  name_collection: Schema.optional(
    Schema.suspend(() => payment_links_resource_name_collectionSchema),
  ),
  object: Schema.Literals(["payment_link"]),
  on_behalf_of: Schema.Unknown,
  optional_items: Schema.optional(
    Schema.NullOr(
      Schema.Array(
        Schema.suspend(() => payment_links_resource_optional_itemSchema),
      ),
    ),
  ),
  payment_intent_data: Schema.Unknown,
  payment_method_collection: Schema.Literals(["always", "if_required"]),
  payment_method_types: Schema.NullOr(
    Schema.Array(
      Schema.Literals([
        "affirm",
        "afterpay_clearpay",
        "alipay",
        "alma",
        "au_becs_debit",
        "bacs_debit",
        "bancontact",
        "billie",
        "blik",
        "boleto",
        "card",
        "cashapp",
        "eps",
        "fpx",
        "giropay",
        "grabpay",
        "ideal",
        "klarna",
        "konbini",
        "link",
        "mb_way",
        "mobilepay",
        "multibanco",
        "oxxo",
        "p24",
        "pay_by_bank",
        "paynow",
        "paypal",
        "payto",
        "pix",
        "promptpay",
        "satispay",
        "sepa_debit",
        "sofort",
        "swish",
        "twint",
        "upi",
        "us_bank_account",
        "wechat_pay",
        "zip",
      ]),
    ),
  ),
  phone_number_collection: Schema.suspend(
    () => payment_links_resource_phone_number_collectionSchema,
  ),
  restrictions: Schema.Unknown,
  shipping_address_collection: Schema.Unknown,
  shipping_options: Schema.Array(
    Schema.suspend(() => payment_links_resource_shipping_optionSchema),
  ),
  submit_type: Schema.Literals(["auto", "book", "donate", "pay", "subscribe"]),
  subscription_data: Schema.Unknown,
  tax_id_collection: Schema.suspend(
    () => payment_links_resource_tax_id_collectionSchema,
  ),
  transfer_data: Schema.Unknown,
  url: Schema.String,
});
export const payment_links_resource_after_completionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hosted_confirmation: Schema.optional(
      Schema.suspend(
        () =>
          payment_links_resource_completion_behavior_confirmation_pageSchema,
      ),
    ),
    redirect: Schema.optional(
      Schema.suspend(
        () => payment_links_resource_completion_behavior_redirectSchema,
      ),
    ),
    type: Schema.Literals(["hosted_confirmation", "redirect"]),
  });
export const payment_links_resource_completion_behavior_confirmation_pageSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    custom_message: Schema.NullOr(Schema.String),
  });
export const payment_links_resource_completion_behavior_redirectSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    url: Schema.String,
  });
export const payment_links_resource_automatic_taxSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.Boolean,
    liability: Schema.Unknown,
  });
export const payment_links_resource_custom_fieldsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dropdown: Schema.optional(
      Schema.suspend(() => payment_links_resource_custom_fields_dropdownSchema),
    ),
    key: Schema.String,
    label: Schema.suspend(
      () => payment_links_resource_custom_fields_labelSchema,
    ),
    numeric: Schema.optional(
      Schema.suspend(() => payment_links_resource_custom_fields_numericSchema),
    ),
    optional: Schema.Boolean,
    text: Schema.optional(
      Schema.suspend(() => payment_links_resource_custom_fields_textSchema),
    ),
    type: Schema.Literals(["dropdown", "numeric", "text"]),
  });
export const payment_links_resource_custom_fields_dropdownSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    default_value: Schema.NullOr(Schema.String),
    options: Schema.Array(
      Schema.suspend(
        () => payment_links_resource_custom_fields_dropdown_optionSchema,
      ),
    ),
  });
export const payment_links_resource_custom_fields_dropdown_optionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    label: Schema.String,
    value: Schema.String,
  });
export const payment_links_resource_custom_fields_labelSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    custom: Schema.NullOr(Schema.String),
    type: Schema.Literals(["custom"]),
  });
export const payment_links_resource_custom_fields_numericSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    default_value: Schema.NullOr(Schema.String),
    maximum_length: Schema.NullOr(Schema.Number),
    minimum_length: Schema.NullOr(Schema.Number),
  });
export const payment_links_resource_custom_fields_textSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    default_value: Schema.NullOr(Schema.String),
    maximum_length: Schema.NullOr(Schema.Number),
    minimum_length: Schema.NullOr(Schema.Number),
  });
export const payment_links_resource_custom_textSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    after_submit: Schema.Unknown,
    shipping_address: Schema.Unknown,
    submit: Schema.Unknown,
    terms_of_service_acceptance: Schema.Unknown,
  });
export const payment_links_resource_name_collectionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    business: Schema.optional(
      Schema.suspend(() => payment_links_resource_business_nameSchema),
    ),
    individual: Schema.optional(
      Schema.suspend(() => payment_links_resource_individual_nameSchema),
    ),
  });
export const payment_links_resource_business_nameSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.Boolean,
    optional: Schema.Boolean,
  });
export const payment_links_resource_individual_nameSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.Boolean,
    optional: Schema.Boolean,
  });
export const payment_links_resource_optional_itemSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    adjustable_quantity: Schema.Unknown,
    price: Schema.String,
    quantity: Schema.Number,
  });
export const payment_links_resource_phone_number_collectionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.Boolean,
  });
export const payment_links_resource_shipping_optionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    shipping_amount: Schema.Number,
    shipping_rate: Schema.Unknown,
  });
export const payment_links_resource_tax_id_collectionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.Boolean,
    required: Schema.Literals(["if_supported", "never"]),
  });
export const payment_method_configurationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    acss_debit: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    active: Schema.Boolean,
    affirm: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    afterpay_clearpay: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    alipay: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    alma: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    amazon_pay: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    apple_pay: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    application: Schema.NullOr(Schema.String),
    au_becs_debit: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    bacs_debit: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    bancontact: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    billie: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    blik: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    boleto: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    card: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    cartes_bancaires: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    cashapp: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    crypto: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    customer_balance: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    eps: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    fpx: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    giropay: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    google_pay: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    grabpay: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    id: Schema.String,
    ideal: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    is_default: Schema.Boolean,
    jcb: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    kakao_pay: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    klarna: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    konbini: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    kr_card: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    link: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    livemode: Schema.Boolean,
    mb_way: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    mobilepay: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    multibanco: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    name: Schema.String,
    naver_pay: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    nz_bank_account: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    object: Schema.Literals(["payment_method_configuration"]),
    oxxo: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    p24: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    parent: Schema.NullOr(Schema.String),
    pay_by_bank: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    payco: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    paynow: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    paypal: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    payto: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    pix: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    promptpay: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    revolut_pay: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    samsung_pay: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    satispay: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    sepa_debit: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    sofort: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    swish: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    twint: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    upi: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    us_bank_account: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    wechat_pay: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
    zip: Schema.optional(
      Schema.suspend(
        () => payment_method_config_resource_payment_method_propertiesSchema,
      ),
    ),
  });
export const payment_method_config_resource_payment_method_propertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    available: Schema.Boolean,
    display_preference: Schema.suspend(
      () => payment_method_config_resource_display_preferenceSchema,
    ),
  });
export const payment_method_config_resource_display_preferenceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    overridable: Schema.NullOr(Schema.Boolean),
    preference: Schema.Literals(["none", "off", "on"]),
    value: Schema.Literals(["off", "on"]),
  });
export const payment_method_domainSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amazon_pay: Schema.suspend(
      () => payment_method_domain_resource_payment_method_statusSchema,
    ),
    apple_pay: Schema.suspend(
      () => payment_method_domain_resource_payment_method_statusSchema,
    ),
    created: Schema.Number,
    domain_name: Schema.String,
    enabled: Schema.Boolean,
    google_pay: Schema.suspend(
      () => payment_method_domain_resource_payment_method_statusSchema,
    ),
    id: Schema.String,
    klarna: Schema.suspend(
      () => payment_method_domain_resource_payment_method_statusSchema,
    ),
    link: Schema.suspend(
      () => payment_method_domain_resource_payment_method_statusSchema,
    ),
    livemode: Schema.Boolean,
    object: Schema.Literals(["payment_method_domain"]),
    paypal: Schema.suspend(
      () => payment_method_domain_resource_payment_method_statusSchema,
    ),
  });
export const payment_method_domain_resource_payment_method_statusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.Literals(["active", "inactive"]),
    status_details: Schema.optional(
      Schema.suspend(
        () =>
          payment_method_domain_resource_payment_method_status_detailsSchema,
      ),
    ),
  });
export const payment_method_domain_resource_payment_method_status_detailsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    error_message: Schema.String,
  });
export const payoutSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  amount: Schema.Number,
  application_fee: Schema.Unknown,
  application_fee_amount: Schema.NullOr(Schema.Number),
  arrival_date: Schema.Number,
  automatic: Schema.Boolean,
  balance_transaction: Schema.Unknown,
  created: Schema.Number,
  currency: Schema.String,
  description: Schema.NullOr(Schema.String),
  destination: Schema.Unknown,
  failure_balance_transaction: Schema.Unknown,
  failure_code: Schema.NullOr(Schema.String),
  failure_message: Schema.NullOr(Schema.String),
  id: Schema.String,
  livemode: Schema.Boolean,
  metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
  method: Schema.String,
  object: Schema.Literals(["payout"]),
  original_payout: Schema.Unknown,
  payout_method: Schema.NullOr(Schema.String),
  reconciliation_status: Schema.Literals([
    "completed",
    "in_progress",
    "not_applicable",
  ]),
  reversed_by: Schema.Unknown,
  source_type: Schema.String,
  statement_descriptor: Schema.NullOr(Schema.String),
  status: Schema.String,
  trace_id: Schema.Unknown,
  type: Schema.Literals(["bank_account", "card"]),
});
export const productSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  active: Schema.Boolean,
  created: Schema.Number,
  default_price: Schema.optional(Schema.Unknown),
  description: Schema.NullOr(Schema.String),
  id: Schema.String,
  images: Schema.Array(Schema.String),
  livemode: Schema.Boolean,
  marketing_features: Schema.Array(
    Schema.suspend(() => product_marketing_featureSchema),
  ),
  metadata: Schema.Record(Schema.String, Schema.String),
  name: Schema.String,
  object: Schema.Literals(["product"]),
  package_dimensions: Schema.Unknown,
  shippable: Schema.NullOr(Schema.Boolean),
  statement_descriptor: Schema.optional(Schema.NullOr(Schema.String)),
  tax_code: Schema.optional(Schema.Unknown),
  type: Schema.Literals(["good", "service"]),
  unit_label: Schema.optional(Schema.NullOr(Schema.String)),
  updated: Schema.Number,
  url: Schema.NullOr(Schema.String),
});
export const product_marketing_featureSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  });
export const product_featureSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  entitlement_feature: Schema.suspend(() => entitlements_featureSchema),
  id: Schema.String,
  livemode: Schema.Boolean,
  object: Schema.Literals(["product_feature"]),
});
export const promotion_codeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  active: Schema.Boolean,
  code: Schema.String,
  created: Schema.Number,
  customer: Schema.Unknown,
  customer_account: Schema.NullOr(Schema.String),
  expires_at: Schema.NullOr(Schema.Number),
  id: Schema.String,
  livemode: Schema.Boolean,
  max_redemptions: Schema.NullOr(Schema.Number),
  metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
  object: Schema.Literals(["promotion_code"]),
  promotion: Schema.suspend(() => promotion_codes_resource_promotionSchema),
  restrictions: Schema.suspend(
    () => promotion_codes_resource_restrictionsSchema,
  ),
  times_redeemed: Schema.Number,
});
export const promotion_codes_resource_promotionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    coupon: Schema.Unknown,
    type: Schema.Literals(["coupon"]),
  });
export const promotion_codes_resource_restrictionsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    currency_options: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.suspend(() => promotion_code_currency_optionSchema),
      ),
    ),
    first_time_transaction: Schema.Boolean,
    minimum_amount: Schema.NullOr(Schema.Number),
    minimum_amount_currency: Schema.NullOr(Schema.String),
  });
export const promotion_code_currency_optionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    minimum_amount: Schema.Number,
  });
export const quoteSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  amount_subtotal: Schema.Number,
  amount_total: Schema.Number,
  application: Schema.Unknown,
  application_fee_amount: Schema.NullOr(Schema.Number),
  application_fee_percent: Schema.NullOr(Schema.Number),
  automatic_tax: Schema.suspend(() => quotes_resource_automatic_taxSchema),
  collection_method: Schema.Literals(["charge_automatically", "send_invoice"]),
  computed: Schema.suspend(() => quotes_resource_computedSchema),
  created: Schema.Number,
  currency: Schema.NullOr(Schema.String),
  customer: Schema.Unknown,
  customer_account: Schema.NullOr(Schema.String),
  default_tax_rates: Schema.optional(Schema.Array(Schema.Unknown)),
  description: Schema.NullOr(Schema.String),
  discounts: Schema.Array(Schema.Unknown),
  expires_at: Schema.Number,
  footer: Schema.NullOr(Schema.String),
  from_quote: Schema.Unknown,
  header: Schema.NullOr(Schema.String),
  id: Schema.String,
  invoice: Schema.Unknown,
  invoice_settings: Schema.suspend(() => invoice_setting_quote_settingSchema),
  line_items: Schema.optional(
    Schema.Struct({
      data: Schema.Array(Schema.suspend(() => itemSchema)),
      has_more: Schema.Boolean,
      object: Schema.Literals(["list"]),
      url: Schema.String,
    }),
  ),
  livemode: Schema.Boolean,
  metadata: Schema.Record(Schema.String, Schema.String),
  number: Schema.NullOr(Schema.String),
  object: Schema.Literals(["quote"]),
  on_behalf_of: Schema.Unknown,
  status: Schema.Literals(["accepted", "canceled", "draft", "open"]),
  status_transitions: Schema.suspend(
    () => quotes_resource_status_transitionsSchema,
  ),
  subscription: Schema.Unknown,
  subscription_data: Schema.suspend(
    () => quotes_resource_subscription_data_subscription_dataSchema,
  ),
  subscription_schedule: Schema.Unknown,
  test_clock: Schema.Unknown,
  total_details: Schema.suspend(() => quotes_resource_total_detailsSchema),
  transfer_data: Schema.Unknown,
});
export const quotes_resource_automatic_taxSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.Boolean,
    liability: Schema.Unknown,
    provider: Schema.NullOr(Schema.String),
    status: Schema.NullOr(
      Schema.Literals(["complete", "failed", "requires_location_inputs"]),
    ),
  });
export const quotes_resource_computedSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    recurring: Schema.Unknown,
    upfront: Schema.suspend(() => quotes_resource_upfrontSchema),
  });
export const quotes_resource_upfrontSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amount_subtotal: Schema.Number,
    amount_total: Schema.Number,
    line_items: Schema.optional(
      Schema.Struct({
        data: Schema.Array(Schema.suspend(() => itemSchema)),
        has_more: Schema.Boolean,
        object: Schema.Literals(["list"]),
        url: Schema.String,
      }),
    ),
    total_details: Schema.suspend(() => quotes_resource_total_detailsSchema),
  });
export const quotes_resource_total_detailsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amount_discount: Schema.Number,
    amount_shipping: Schema.NullOr(Schema.Number),
    amount_tax: Schema.Number,
    breakdown: Schema.optional(
      Schema.suspend(
        () => quotes_resource_total_details_resource_breakdownSchema,
      ),
    ),
  });
export const quotes_resource_total_details_resource_breakdownSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    discounts: Schema.Array(
      Schema.suspend(() => line_items_discount_amountSchema),
    ),
    taxes: Schema.Array(Schema.suspend(() => line_items_tax_amountSchema)),
  });
export const invoice_setting_quote_settingSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    days_until_due: Schema.NullOr(Schema.Number),
    issuer: Schema.suspend(() => connect_account_referenceSchema),
  });
export const quotes_resource_status_transitionsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accepted_at: Schema.NullOr(Schema.Number),
    canceled_at: Schema.NullOr(Schema.Number),
    finalized_at: Schema.NullOr(Schema.Number),
  });
export const quotes_resource_subscription_data_subscription_dataSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billing_mode: Schema.suspend(
      () => quotes_resource_subscription_data_billing_modeSchema,
    ),
    description: Schema.NullOr(Schema.String),
    effective_date: Schema.NullOr(Schema.Number),
    metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
    trial_period_days: Schema.NullOr(Schema.Number),
  });
export const quotes_resource_subscription_data_billing_modeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    flexible: Schema.optional(
      Schema.suspend(() => subscriptions_resource_billing_mode_flexibleSchema),
    ),
    type: Schema.Literals(["classic", "flexible"]),
  });
export const subscriptions_resource_billing_mode_flexibleSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    proration_discounts: Schema.optional(
      Schema.Literals(["included", "itemized"]),
    ),
  });
export const radar_early_fraud_warningSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    actionable: Schema.Boolean,
    charge: Schema.Unknown,
    created: Schema.Number,
    fraud_type: Schema.String,
    id: Schema.String,
    livemode: Schema.Boolean,
    object: Schema.Literals(["radar.early_fraud_warning"]),
    payment_intent: Schema.optional(Schema.Unknown),
  });
export const insights_resources_payment_evaluation_client_device_metadataSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    radar_session: Schema.String,
  });
export const insights_resources_payment_evaluation_customer_detailsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customer: Schema.NullOr(Schema.String),
    customer_account: Schema.NullOr(Schema.String),
    email: Schema.NullOr(Schema.String),
    name: Schema.NullOr(Schema.String),
    phone: Schema.NullOr(Schema.String),
  });
export const insights_resources_payment_evaluation_eventSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dispute_opened: Schema.optional(
      Schema.suspend(
        () => insights_resources_payment_evaluation_dispute_openedSchema,
      ),
    ),
    early_fraud_warning_received: Schema.optional(
      Schema.suspend(
        () =>
          insights_resources_payment_evaluation_early_fraud_warning_receivedSchema,
      ),
    ),
    occurred_at: Schema.Number,
    refunded: Schema.optional(
      Schema.suspend(
        () => insights_resources_payment_evaluation_refundedSchema,
      ),
    ),
    type: Schema.Literals([
      "dispute_opened",
      "early_fraud_warning_received",
      "refunded",
      "user_intervention_raised",
      "user_intervention_resolved",
    ]),
    user_intervention_raised: Schema.optional(
      Schema.suspend(
        () =>
          insights_resources_payment_evaluation_user_intervention_raisedSchema,
      ),
    ),
    user_intervention_resolved: Schema.optional(
      Schema.suspend(
        () =>
          insights_resources_payment_evaluation_user_intervention_resolvedSchema,
      ),
    ),
  });
export const insights_resources_payment_evaluation_dispute_openedSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amount: Schema.Number,
    currency: Schema.String,
    reason: Schema.Literals([
      "account_not_available",
      "credit_not_processed",
      "customer_initiated",
      "duplicate",
      "fraudulent",
      "general",
      "noncompliant",
      "product_not_received",
      "product_unacceptable",
      "subscription_canceled",
      "unrecognized",
    ]),
  });
export const insights_resources_payment_evaluation_early_fraud_warning_receivedSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fraud_type: Schema.Literals([
      "made_with_lost_card",
      "made_with_stolen_card",
      "other",
      "unauthorized_use_of_card",
    ]),
  });
export const insights_resources_payment_evaluation_refundedSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amount: Schema.Number,
    currency: Schema.String,
    reason: Schema.Literals([
      "duplicate",
      "fraudulent",
      "other",
      "requested_by_customer",
    ]),
  });
export const insights_resources_payment_evaluation_user_intervention_raisedSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    custom: Schema.optional(
      Schema.suspend(
        () =>
          insights_resources_payment_evaluation_user_intervention_raised_customSchema,
      ),
    ),
    key: Schema.String,
    type: Schema.Literals(["3ds", "captcha", "custom"]),
  });
export const insights_resources_payment_evaluation_user_intervention_raised_customSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.String,
  });
export const insights_resources_payment_evaluation_user_intervention_resolvedSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key: Schema.String,
    outcome: Schema.NullOr(Schema.Literals(["abandoned", "failed", "passed"])),
  });
export const insights_resources_payment_evaluation_payment_detailsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amount: Schema.Number,
    currency: Schema.String,
    description: Schema.NullOr(Schema.String),
    money_movement_details: Schema.Unknown,
    payment_method_details: Schema.Unknown,
    shipping_details: Schema.Unknown,
    statement_descriptor: Schema.NullOr(Schema.String),
  });
export const insights_resources_payment_evaluation_signalsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fraudulent_payment: Schema.suspend(
      () => insights_resources_payment_evaluation_signal_v2Schema,
    ),
  });
export const insights_resources_payment_evaluation_signal_v2Schema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    evaluated_at: Schema.Number,
    risk_level: Schema.Literals(["elevated", "highest", "normal"]),
    score: Schema.Number,
  });
export const radar_value_list_itemSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    created: Schema.Number,
    created_by: Schema.String,
    id: Schema.String,
    livemode: Schema.Boolean,
    object: Schema.Literals(["radar.value_list_item"]),
    value: Schema.String,
    value_list: Schema.String,
  });
export const radar_value_listSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    alias: Schema.String,
    created: Schema.Number,
    created_by: Schema.String,
    id: Schema.String,
    item_type: Schema.Literals([
      "card_bin",
      "card_fingerprint",
      "case_sensitive_string",
      "country",
      "crypto_fingerprint",
      "customer_id",
      "email",
      "ip_address",
      "sepa_debit_fingerprint",
      "string",
      "us_bank_account_fingerprint",
    ]),
    list_items: Schema.Struct({
      data: Schema.Array(Schema.suspend(() => radar_value_list_itemSchema)),
      has_more: Schema.Boolean,
      object: Schema.Literals(["list"]),
      url: Schema.String,
    }),
    livemode: Schema.Boolean,
    metadata: Schema.Record(Schema.String, Schema.String),
    name: Schema.String,
    object: Schema.Literals(["radar.value_list"]),
  },
);
export const reporting_report_runSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    created: Schema.Number,
    error: Schema.NullOr(Schema.String),
    id: Schema.String,
    livemode: Schema.Boolean,
    object: Schema.Literals(["reporting.report_run"]),
    parameters: Schema.suspend(
      () => financial_reporting_finance_report_run_run_parametersSchema,
    ),
    report_type: Schema.String,
    result: Schema.Unknown,
    status: Schema.String,
    succeeded_at: Schema.NullOr(Schema.Number),
  });
export const financial_reporting_finance_report_run_run_parametersSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    columns: Schema.optional(Schema.Array(Schema.String)),
    connected_account: Schema.optional(Schema.String),
    currency: Schema.optional(Schema.String),
    interval_end: Schema.optional(Schema.Number),
    interval_start: Schema.optional(Schema.Number),
    payout: Schema.optional(Schema.String),
    reporting_category: Schema.optional(Schema.String),
    timezone: Schema.optional(Schema.String),
  });
export const reporting_report_typeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data_available_end: Schema.Number,
    data_available_start: Schema.Number,
    default_columns: Schema.NullOr(Schema.Array(Schema.String)),
    id: Schema.String,
    livemode: Schema.Boolean,
    name: Schema.String,
    object: Schema.Literals(["reporting.report_type"]),
    updated: Schema.Number,
    version: Schema.Number,
  });
export const reviewSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  billing_zip: Schema.NullOr(Schema.String),
  charge: Schema.Unknown,
  closed_reason: Schema.NullOr(
    Schema.Literals([
      "acknowledged",
      "approved",
      "canceled",
      "disputed",
      "payment_never_settled",
      "redacted",
      "refunded",
      "refunded_as_fraud",
    ]),
  ),
  created: Schema.Number,
  id: Schema.String,
  ip_address: Schema.NullOr(Schema.String),
  ip_address_location: Schema.Unknown,
  livemode: Schema.Boolean,
  object: Schema.Literals(["review"]),
  open: Schema.Boolean,
  opened_reason: Schema.Literals(["manual", "rule"]),
  payment_intent: Schema.optional(Schema.Unknown),
  reason: Schema.String,
  session: Schema.Unknown,
});
export const setup_attemptSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  application: Schema.Unknown,
  attach_to_self: Schema.optional(Schema.Boolean),
  created: Schema.Number,
  customer: Schema.Unknown,
  customer_account: Schema.NullOr(Schema.String),
  flow_directions: Schema.NullOr(
    Schema.Array(Schema.Literals(["inbound", "outbound"])),
  ),
  id: Schema.String,
  livemode: Schema.Boolean,
  object: Schema.Literals(["setup_attempt"]),
  on_behalf_of: Schema.Unknown,
  payment_method: Schema.Unknown,
  payment_method_details: Schema.suspend(
    () => setup_attempt_payment_method_detailsSchema,
  ),
  setup_error: Schema.Unknown,
  setup_intent: Schema.Unknown,
  status: Schema.String,
  usage: Schema.String,
});
export const setup_attempt_payment_method_detailsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    acss_debit: Schema.optional(
      Schema.suspend(
        () => setup_attempt_payment_method_details_acss_debitSchema,
      ),
    ),
    amazon_pay: Schema.optional(
      Schema.suspend(
        () => setup_attempt_payment_method_details_amazon_paySchema,
      ),
    ),
    au_becs_debit: Schema.optional(
      Schema.suspend(
        () => setup_attempt_payment_method_details_au_becs_debitSchema,
      ),
    ),
    bacs_debit: Schema.optional(
      Schema.suspend(
        () => setup_attempt_payment_method_details_bacs_debitSchema,
      ),
    ),
    bancontact: Schema.optional(
      Schema.suspend(
        () => setup_attempt_payment_method_details_bancontactSchema,
      ),
    ),
    boleto: Schema.optional(
      Schema.suspend(() => setup_attempt_payment_method_details_boletoSchema),
    ),
    card: Schema.optional(
      Schema.suspend(() => setup_attempt_payment_method_details_cardSchema),
    ),
    card_present: Schema.optional(
      Schema.suspend(
        () => setup_attempt_payment_method_details_card_presentSchema,
      ),
    ),
    cashapp: Schema.optional(
      Schema.suspend(() => setup_attempt_payment_method_details_cashappSchema),
    ),
    ideal: Schema.optional(
      Schema.suspend(() => setup_attempt_payment_method_details_idealSchema),
    ),
    kakao_pay: Schema.optional(
      Schema.suspend(
        () => setup_attempt_payment_method_details_kakao_paySchema,
      ),
    ),
    klarna: Schema.optional(
      Schema.suspend(() => setup_attempt_payment_method_details_klarnaSchema),
    ),
    kr_card: Schema.optional(
      Schema.suspend(() => setup_attempt_payment_method_details_kr_cardSchema),
    ),
    link: Schema.optional(
      Schema.suspend(() => setup_attempt_payment_method_details_linkSchema),
    ),
    naver_pay: Schema.optional(
      Schema.suspend(
        () => setup_attempt_payment_method_details_naver_paySchema,
      ),
    ),
    nz_bank_account: Schema.optional(
      Schema.suspend(
        () => setup_attempt_payment_method_details_nz_bank_accountSchema,
      ),
    ),
    paypal: Schema.optional(
      Schema.suspend(() => setup_attempt_payment_method_details_paypalSchema),
    ),
    payto: Schema.optional(
      Schema.suspend(() => setup_attempt_payment_method_details_paytoSchema),
    ),
    revolut_pay: Schema.optional(
      Schema.suspend(
        () => setup_attempt_payment_method_details_revolut_paySchema,
      ),
    ),
    sepa_debit: Schema.optional(
      Schema.suspend(
        () => setup_attempt_payment_method_details_sepa_debitSchema,
      ),
    ),
    sofort: Schema.optional(
      Schema.suspend(() => setup_attempt_payment_method_details_sofortSchema),
    ),
    type: Schema.String,
    upi: Schema.optional(
      Schema.suspend(() => setup_attempt_payment_method_details_upiSchema),
    ),
    us_bank_account: Schema.optional(
      Schema.suspend(
        () => setup_attempt_payment_method_details_us_bank_accountSchema,
      ),
    ),
  });
export const setup_attempt_payment_method_details_acss_debitSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({});
export const setup_attempt_payment_method_details_amazon_paySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({});
export const setup_attempt_payment_method_details_au_becs_debitSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({});
export const setup_attempt_payment_method_details_bacs_debitSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({});
export const setup_attempt_payment_method_details_bancontactSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bank_code: Schema.NullOr(Schema.String),
    bank_name: Schema.NullOr(Schema.String),
    bic: Schema.NullOr(Schema.String),
    generated_sepa_debit: Schema.Unknown,
    generated_sepa_debit_mandate: Schema.Unknown,
    iban_last4: Schema.NullOr(Schema.String),
    preferred_language: Schema.NullOr(
      Schema.Literals(["de", "en", "fr", "nl"]),
    ),
    verified_name: Schema.NullOr(Schema.String),
  });
export const setup_attempt_payment_method_details_boletoSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({});
export const setup_attempt_payment_method_details_cardSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    brand: Schema.NullOr(Schema.String),
    checks: Schema.Unknown,
    country: Schema.NullOr(Schema.String),
    description: Schema.optional(Schema.NullOr(Schema.String)),
    exp_month: Schema.NullOr(Schema.Number),
    exp_year: Schema.NullOr(Schema.Number),
    fingerprint: Schema.optional(Schema.NullOr(Schema.String)),
    funding: Schema.NullOr(Schema.String),
    iin: Schema.optional(Schema.NullOr(Schema.String)),
    issuer: Schema.optional(Schema.NullOr(Schema.String)),
    last4: Schema.NullOr(Schema.String),
    network: Schema.NullOr(Schema.String),
    three_d_secure: Schema.Unknown,
    wallet: Schema.Unknown,
  });
export const setup_attempt_payment_method_details_card_presentSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    generated_card: Schema.Unknown,
    offline: Schema.Unknown,
  });
export const setup_attempt_payment_method_details_cashappSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({});
export const setup_attempt_payment_method_details_idealSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bank: Schema.NullOr(
      Schema.Literals([
        "abn_amro",
        "adyen",
        "asn_bank",
        "bunq",
        "buut",
        "finom",
        "handelsbanken",
        "ing",
        "knab",
        "mollie",
        "moneyou",
        "n26",
        "nn",
        "rabobank",
        "regiobank",
        "revolut",
        "sns_bank",
        "triodos_bank",
        "van_lanschot",
        "yoursafe",
      ]),
    ),
    bic: Schema.NullOr(
      Schema.Literals([
        "ABNANL2A",
        "ADYBNL2A",
        "ASNBNL21",
        "BITSNL2A",
        "BUNQNL2A",
        "BUUTNL2A",
        "FNOMNL22",
        "FVLBNL22",
        "HANDNL2A",
        "INGBNL2A",
        "KNABNL2H",
        "MLLENL2A",
        "MOYONL21",
        "NNBANL2G",
        "NTSBDEB1",
        "RABONL2U",
        "RBRBNL21",
        "REVOIE23",
        "REVOLT21",
        "SNSBNL2A",
        "TRIONL2U",
      ]),
    ),
    generated_sepa_debit: Schema.Unknown,
    generated_sepa_debit_mandate: Schema.Unknown,
    iban_last4: Schema.NullOr(Schema.String),
    verified_name: Schema.NullOr(Schema.String),
  });
export const setup_attempt_payment_method_details_kakao_paySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({});
export const setup_attempt_payment_method_details_klarnaSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({});
export const setup_attempt_payment_method_details_kr_cardSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({});
export const setup_attempt_payment_method_details_linkSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({});
export const setup_attempt_payment_method_details_naver_paySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    buyer_id: Schema.optional(Schema.String),
  });
export const setup_attempt_payment_method_details_nz_bank_accountSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({});
export const setup_attempt_payment_method_details_paypalSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({});
export const setup_attempt_payment_method_details_paytoSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({});
export const setup_attempt_payment_method_details_revolut_paySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({});
export const setup_attempt_payment_method_details_sepa_debitSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({});
export const setup_attempt_payment_method_details_sofortSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bank_code: Schema.NullOr(Schema.String),
    bank_name: Schema.NullOr(Schema.String),
    bic: Schema.NullOr(Schema.String),
    generated_sepa_debit: Schema.Unknown,
    generated_sepa_debit_mandate: Schema.Unknown,
    iban_last4: Schema.NullOr(Schema.String),
    preferred_language: Schema.NullOr(
      Schema.Literals(["de", "en", "fr", "nl"]),
    ),
    verified_name: Schema.NullOr(Schema.String),
  });
export const setup_attempt_payment_method_details_upiSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({});
export const setup_attempt_payment_method_details_us_bank_accountSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({});
export const setup_intentSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  application: Schema.Unknown,
  attach_to_self: Schema.optional(Schema.Boolean),
  automatic_payment_methods: Schema.Unknown,
  cancellation_reason: Schema.NullOr(
    Schema.Literals(["abandoned", "duplicate", "requested_by_customer"]),
  ),
  client_secret: SensitiveOutputNullableString,
  created: Schema.Number,
  customer: Schema.Unknown,
  customer_account: Schema.optional(Schema.NullOr(Schema.String)),
  description: Schema.NullOr(Schema.String),
  excluded_payment_method_types: Schema.NullOr(
    Schema.Array(
      Schema.Literals([
        "acss_debit",
        "affirm",
        "afterpay_clearpay",
        "alipay",
        "alma",
        "amazon_pay",
        "au_becs_debit",
        "bacs_debit",
        "bancontact",
        "billie",
        "blik",
        "boleto",
        "card",
        "cashapp",
        "crypto",
        "customer_balance",
        "eps",
        "fpx",
        "giropay",
        "grabpay",
        "ideal",
        "kakao_pay",
        "klarna",
        "konbini",
        "kr_card",
        "mb_way",
        "mobilepay",
        "multibanco",
        "naver_pay",
        "nz_bank_account",
        "oxxo",
        "p24",
        "pay_by_bank",
        "payco",
        "paynow",
        "paypal",
        "payto",
        "pix",
        "promptpay",
        "revolut_pay",
        "samsung_pay",
        "satispay",
        "sepa_debit",
        "sofort",
        "swish",
        "twint",
        "upi",
        "us_bank_account",
        "wechat_pay",
        "zip",
      ]),
    ),
  ),
  flow_directions: Schema.optional(
    Schema.NullOr(Schema.Array(Schema.Literals(["inbound", "outbound"]))),
  ),
  id: Schema.String,
  last_setup_error: Schema.Unknown,
  latest_attempt: Schema.Unknown,
  livemode: Schema.Boolean,
  mandate: Schema.Unknown,
  metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
  next_action: Schema.Unknown,
  object: Schema.Literals(["setup_intent"]),
  on_behalf_of: Schema.Unknown,
  payment_method: Schema.Unknown,
  payment_method_configuration_details: Schema.Unknown,
  payment_method_options: Schema.Unknown,
  payment_method_types: Schema.Array(Schema.String),
  single_use_mandate: Schema.Unknown,
  status: Schema.Literals([
    "canceled",
    "processing",
    "requires_action",
    "requires_confirmation",
    "requires_payment_method",
    "succeeded",
  ]),
  usage: Schema.String,
});
export const shipping_rateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  active: Schema.Boolean,
  created: Schema.Number,
  delivery_estimate: Schema.Unknown,
  display_name: Schema.NullOr(Schema.String),
  fixed_amount: Schema.optional(
    Schema.suspend(() => shipping_rate_fixed_amountSchema),
  ),
  id: Schema.String,
  livemode: Schema.Boolean,
  metadata: Schema.Record(Schema.String, Schema.String),
  object: Schema.Literals(["shipping_rate"]),
  tax_behavior: Schema.NullOr(
    Schema.Literals(["exclusive", "inclusive", "unspecified"]),
  ),
  tax_code: Schema.Unknown,
  type: Schema.Literals(["fixed_amount"]),
});
export const shipping_rate_fixed_amountSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amount: Schema.Number,
    currency: Schema.String,
    currency_options: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.suspend(() => shipping_rate_currency_optionSchema),
      ),
    ),
  });
export const shipping_rate_currency_optionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amount: Schema.Number,
    tax_behavior: Schema.Literals(["exclusive", "inclusive", "unspecified"]),
  });
export const scheduled_query_runSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    created: Schema.Number,
    data_load_time: Schema.Number,
    error: Schema.optional(
      Schema.suspend(() => sigma_scheduled_query_run_errorSchema),
    ),
    file: Schema.Unknown,
    id: Schema.String,
    livemode: Schema.Boolean,
    object: Schema.Literals(["scheduled_query_run"]),
    result_available_until: Schema.Number,
    sql: Schema.String,
    status: Schema.String,
    title: Schema.String,
  });
export const sigma_scheduled_query_run_errorSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.String,
  });
export const source_type_ach_credit_transferSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    account_number: Schema.optional(Schema.NullOr(Schema.String)),
    bank_name: Schema.optional(Schema.NullOr(Schema.String)),
    fingerprint: Schema.optional(Schema.NullOr(Schema.String)),
    refund_account_holder_name: Schema.optional(Schema.NullOr(Schema.String)),
    refund_account_holder_type: Schema.optional(Schema.NullOr(Schema.String)),
    refund_routing_number: Schema.optional(Schema.NullOr(Schema.String)),
    routing_number: Schema.optional(Schema.NullOr(Schema.String)),
    swift_code: Schema.optional(Schema.NullOr(Schema.String)),
  });
export const source_type_ach_debitSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bank_name: Schema.optional(Schema.NullOr(Schema.String)),
    country: Schema.optional(Schema.NullOr(Schema.String)),
    fingerprint: Schema.optional(Schema.NullOr(Schema.String)),
    last4: Schema.optional(Schema.NullOr(Schema.String)),
    routing_number: Schema.optional(Schema.NullOr(Schema.String)),
    type: Schema.optional(Schema.NullOr(Schema.String)),
  });
export const source_type_acss_debitSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bank_address_city: Schema.optional(Schema.NullOr(Schema.String)),
    bank_address_line_1: Schema.optional(Schema.NullOr(Schema.String)),
    bank_address_line_2: Schema.optional(Schema.NullOr(Schema.String)),
    bank_address_postal_code: Schema.optional(Schema.NullOr(Schema.String)),
    bank_name: Schema.optional(Schema.NullOr(Schema.String)),
    category: Schema.optional(Schema.NullOr(Schema.String)),
    country: Schema.optional(Schema.NullOr(Schema.String)),
    fingerprint: Schema.optional(Schema.NullOr(Schema.String)),
    last4: Schema.optional(Schema.NullOr(Schema.String)),
    routing_number: Schema.optional(Schema.NullOr(Schema.String)),
  });
export const source_type_alipaySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data_string: Schema.optional(Schema.NullOr(Schema.String)),
    native_url: Schema.optional(Schema.NullOr(Schema.String)),
    statement_descriptor: Schema.optional(Schema.NullOr(Schema.String)),
  });
export const source_type_au_becs_debitSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bsb_number: Schema.optional(Schema.NullOr(Schema.String)),
    fingerprint: Schema.optional(Schema.NullOr(Schema.String)),
    last4: Schema.optional(Schema.NullOr(Schema.String)),
  });
export const source_type_bancontactSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bank_code: Schema.optional(Schema.NullOr(Schema.String)),
    bank_name: Schema.optional(Schema.NullOr(Schema.String)),
    bic: Schema.optional(Schema.NullOr(Schema.String)),
    iban_last4: Schema.optional(Schema.NullOr(Schema.String)),
    preferred_language: Schema.optional(Schema.NullOr(Schema.String)),
    statement_descriptor: Schema.optional(Schema.NullOr(Schema.String)),
  });
export const source_type_cardSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    address_line1_check: Schema.optional(Schema.NullOr(Schema.String)),
    address_zip_check: Schema.optional(Schema.NullOr(Schema.String)),
    brand: Schema.optional(Schema.NullOr(Schema.String)),
    country: Schema.optional(Schema.NullOr(Schema.String)),
    cvc_check: Schema.optional(Schema.NullOr(Schema.String)),
    description: Schema.optional(Schema.String),
    dynamic_last4: Schema.optional(Schema.NullOr(Schema.String)),
    exp_month: Schema.optional(Schema.NullOr(Schema.Number)),
    exp_year: Schema.optional(Schema.NullOr(Schema.Number)),
    fingerprint: Schema.optional(Schema.String),
    funding: Schema.optional(Schema.NullOr(Schema.String)),
    iin: Schema.optional(Schema.String),
    issuer: Schema.optional(Schema.String),
    last4: Schema.optional(Schema.NullOr(Schema.String)),
    name: Schema.optional(Schema.NullOr(Schema.String)),
    three_d_secure: Schema.optional(Schema.String),
    tokenization_method: Schema.optional(Schema.NullOr(Schema.String)),
  },
);
export const source_type_card_presentSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    application_cryptogram: Schema.optional(Schema.String),
    application_preferred_name: Schema.optional(Schema.String),
    authorization_code: Schema.optional(Schema.NullOr(Schema.String)),
    authorization_response_code: Schema.optional(Schema.String),
    brand: Schema.optional(Schema.NullOr(Schema.String)),
    country: Schema.optional(Schema.NullOr(Schema.String)),
    cvm_type: Schema.optional(Schema.String),
    data_type: Schema.optional(Schema.NullOr(Schema.String)),
    dedicated_file_name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    emv_auth_data: Schema.optional(Schema.String),
    evidence_customer_signature: Schema.optional(Schema.NullOr(Schema.String)),
    evidence_transaction_certificate: Schema.optional(
      Schema.NullOr(Schema.String),
    ),
    exp_month: Schema.optional(Schema.NullOr(Schema.Number)),
    exp_year: Schema.optional(Schema.NullOr(Schema.Number)),
    fingerprint: Schema.optional(Schema.String),
    funding: Schema.optional(Schema.NullOr(Schema.String)),
    iin: Schema.optional(Schema.String),
    issuer: Schema.optional(Schema.String),
    last4: Schema.optional(Schema.NullOr(Schema.String)),
    pos_device_id: Schema.optional(Schema.NullOr(Schema.String)),
    pos_entry_mode: Schema.optional(Schema.String),
    read_method: Schema.optional(Schema.NullOr(Schema.String)),
    reader: Schema.optional(Schema.NullOr(Schema.String)),
    terminal_verification_results: Schema.optional(Schema.String),
    transaction_status_information: Schema.optional(Schema.String),
  });
export const source_code_verification_flowSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    attempts_remaining: Schema.Number,
    status: Schema.String,
  });
export const source_type_epsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  reference: Schema.optional(Schema.NullOr(Schema.String)),
  statement_descriptor: Schema.optional(Schema.NullOr(Schema.String)),
});
export const source_type_giropaySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bank_code: Schema.optional(Schema.NullOr(Schema.String)),
    bank_name: Schema.optional(Schema.NullOr(Schema.String)),
    bic: Schema.optional(Schema.NullOr(Schema.String)),
    statement_descriptor: Schema.optional(Schema.NullOr(Schema.String)),
  });
export const source_type_idealSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bank: Schema.optional(Schema.NullOr(Schema.String)),
    bic: Schema.optional(Schema.NullOr(Schema.String)),
    iban_last4: Schema.optional(Schema.NullOr(Schema.String)),
    statement_descriptor: Schema.optional(Schema.NullOr(Schema.String)),
  });
export const source_type_klarnaSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    background_image_url: Schema.optional(Schema.String),
    client_token: Schema.optional(Schema.NullOr(Schema.String)),
    first_name: Schema.optional(Schema.String),
    last_name: Schema.optional(Schema.String),
    locale: Schema.optional(Schema.String),
    logo_url: Schema.optional(Schema.String),
    page_title: Schema.optional(Schema.String),
    pay_later_asset_urls_descriptive: Schema.optional(Schema.String),
    pay_later_asset_urls_standard: Schema.optional(Schema.String),
    pay_later_name: Schema.optional(Schema.String),
    pay_later_redirect_url: Schema.optional(Schema.String),
    pay_now_asset_urls_descriptive: Schema.optional(Schema.String),
    pay_now_asset_urls_standard: Schema.optional(Schema.String),
    pay_now_name: Schema.optional(Schema.String),
    pay_now_redirect_url: Schema.optional(Schema.String),
    pay_over_time_asset_urls_descriptive: Schema.optional(Schema.String),
    pay_over_time_asset_urls_standard: Schema.optional(Schema.String),
    pay_over_time_name: Schema.optional(Schema.String),
    pay_over_time_redirect_url: Schema.optional(Schema.String),
    payment_method_categories: Schema.optional(Schema.String),
    purchase_country: Schema.optional(Schema.String),
    purchase_type: Schema.optional(Schema.String),
    redirect_url: Schema.optional(Schema.String),
    shipping_delay: Schema.optional(Schema.Number),
    shipping_first_name: Schema.optional(Schema.String),
    shipping_last_name: Schema.optional(Schema.String),
  });
export const source_type_multibancoSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entity: Schema.optional(Schema.NullOr(Schema.String)),
    reference: Schema.optional(Schema.NullOr(Schema.String)),
    refund_account_holder_address_city: Schema.optional(
      Schema.NullOr(Schema.String),
    ),
    refund_account_holder_address_country: Schema.optional(
      Schema.NullOr(Schema.String),
    ),
    refund_account_holder_address_line1: Schema.optional(
      Schema.NullOr(Schema.String),
    ),
    refund_account_holder_address_line2: Schema.optional(
      Schema.NullOr(Schema.String),
    ),
    refund_account_holder_address_postal_code: Schema.optional(
      Schema.NullOr(Schema.String),
    ),
    refund_account_holder_address_state: Schema.optional(
      Schema.NullOr(Schema.String),
    ),
    refund_account_holder_name: Schema.optional(Schema.NullOr(Schema.String)),
    refund_iban: Schema.optional(Schema.NullOr(Schema.String)),
  });
export const source_type_p24Schema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  reference: Schema.optional(Schema.NullOr(Schema.String)),
});
export const source_receiver_flowSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    address: Schema.NullOr(Schema.String),
    amount_charged: Schema.Number,
    amount_received: Schema.Number,
    amount_returned: Schema.Number,
    refund_attributes_method: Schema.String,
    refund_attributes_status: Schema.String,
  });
export const source_redirect_flowSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    failure_reason: Schema.NullOr(Schema.String),
    return_url: Schema.String,
    status: Schema.String,
    url: Schema.String,
  });
export const source_type_sepa_credit_transferSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bank_name: Schema.optional(Schema.NullOr(Schema.String)),
    bic: Schema.optional(Schema.NullOr(Schema.String)),
    iban: Schema.optional(Schema.NullOr(Schema.String)),
    refund_account_holder_address_city: Schema.optional(
      Schema.NullOr(Schema.String),
    ),
    refund_account_holder_address_country: Schema.optional(
      Schema.NullOr(Schema.String),
    ),
    refund_account_holder_address_line1: Schema.optional(
      Schema.NullOr(Schema.String),
    ),
    refund_account_holder_address_line2: Schema.optional(
      Schema.NullOr(Schema.String),
    ),
    refund_account_holder_address_postal_code: Schema.optional(
      Schema.NullOr(Schema.String),
    ),
    refund_account_holder_address_state: Schema.optional(
      Schema.NullOr(Schema.String),
    ),
    refund_account_holder_name: Schema.optional(Schema.NullOr(Schema.String)),
    refund_iban: Schema.optional(Schema.NullOr(Schema.String)),
  });
export const source_type_sepa_debitSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bank_code: Schema.optional(Schema.NullOr(Schema.String)),
    branch_code: Schema.optional(Schema.NullOr(Schema.String)),
    country: Schema.optional(Schema.NullOr(Schema.String)),
    fingerprint: Schema.optional(Schema.NullOr(Schema.String)),
    last4: Schema.optional(Schema.NullOr(Schema.String)),
    mandate_reference: Schema.optional(Schema.NullOr(Schema.String)),
    mandate_url: Schema.optional(Schema.NullOr(Schema.String)),
  });
export const source_type_sofortSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bank_code: Schema.optional(Schema.NullOr(Schema.String)),
    bank_name: Schema.optional(Schema.NullOr(Schema.String)),
    bic: Schema.optional(Schema.NullOr(Schema.String)),
    country: Schema.optional(Schema.NullOr(Schema.String)),
    iban_last4: Schema.optional(Schema.NullOr(Schema.String)),
    preferred_language: Schema.optional(Schema.NullOr(Schema.String)),
    statement_descriptor: Schema.optional(Schema.NullOr(Schema.String)),
  });
export const source_orderSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  amount: Schema.Number,
  currency: Schema.String,
  email: Schema.optional(Schema.String),
  items: Schema.NullOr(
    Schema.Array(Schema.suspend(() => source_order_itemSchema)),
  ),
  shipping: Schema.optional(Schema.suspend(() => shippingSchema)),
});
export const source_order_itemSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amount: Schema.NullOr(Schema.Number),
    currency: Schema.NullOr(Schema.String),
    description: Schema.NullOr(Schema.String),
    parent: Schema.NullOr(Schema.String),
    quantity: Schema.optional(Schema.Number),
    type: Schema.NullOr(Schema.String),
  });
export const shippingSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  address: Schema.optional(Schema.suspend(() => addressSchema)),
  carrier: Schema.optional(Schema.NullOr(Schema.String)),
  name: Schema.optional(Schema.String),
  phone: Schema.optional(Schema.NullOr(Schema.String)),
  tracking_number: Schema.optional(Schema.NullOr(Schema.String)),
});
export const source_type_three_d_secureSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    address_line1_check: Schema.optional(Schema.NullOr(Schema.String)),
    address_zip_check: Schema.optional(Schema.NullOr(Schema.String)),
    authenticated: Schema.optional(Schema.NullOr(Schema.Boolean)),
    brand: Schema.optional(Schema.NullOr(Schema.String)),
    card: Schema.optional(Schema.NullOr(Schema.String)),
    country: Schema.optional(Schema.NullOr(Schema.String)),
    customer: Schema.optional(Schema.NullOr(Schema.String)),
    cvc_check: Schema.optional(Schema.NullOr(Schema.String)),
    description: Schema.optional(Schema.String),
    dynamic_last4: Schema.optional(Schema.NullOr(Schema.String)),
    exp_month: Schema.optional(Schema.NullOr(Schema.Number)),
    exp_year: Schema.optional(Schema.NullOr(Schema.Number)),
    fingerprint: Schema.optional(Schema.String),
    funding: Schema.optional(Schema.NullOr(Schema.String)),
    iin: Schema.optional(Schema.String),
    issuer: Schema.optional(Schema.String),
    last4: Schema.optional(Schema.NullOr(Schema.String)),
    name: Schema.optional(Schema.NullOr(Schema.String)),
    three_d_secure: Schema.optional(Schema.String),
    tokenization_method: Schema.optional(Schema.NullOr(Schema.String)),
  });
export const source_type_wechatSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    prepay_id: Schema.optional(Schema.String),
    qr_code_url: Schema.optional(Schema.NullOr(Schema.String)),
    statement_descriptor: Schema.optional(Schema.String),
  });
export const source_transactionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ach_credit_transfer: Schema.optional(
      Schema.suspend(() => source_transaction_ach_credit_transfer_dataSchema),
    ),
    amount: Schema.Number,
    chf_credit_transfer: Schema.optional(
      Schema.suspend(() => source_transaction_chf_credit_transfer_dataSchema),
    ),
    created: Schema.Number,
    currency: Schema.String,
    gbp_credit_transfer: Schema.optional(
      Schema.suspend(() => source_transaction_gbp_credit_transfer_dataSchema),
    ),
    id: Schema.String,
    livemode: Schema.Boolean,
    object: Schema.Literals(["source_transaction"]),
    paper_check: Schema.optional(
      Schema.suspend(() => source_transaction_paper_check_dataSchema),
    ),
    sepa_credit_transfer: Schema.optional(
      Schema.suspend(() => source_transaction_sepa_credit_transfer_dataSchema),
    ),
    source: Schema.String,
    status: Schema.String,
    type: Schema.Literals([
      "ach_credit_transfer",
      "ach_debit",
      "alipay",
      "bancontact",
      "card",
      "card_present",
      "eps",
      "giropay",
      "ideal",
      "klarna",
      "multibanco",
      "p24",
      "sepa_debit",
      "sofort",
      "three_d_secure",
      "wechat",
    ]),
  });
export const source_transaction_ach_credit_transfer_dataSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customer_data: Schema.optional(Schema.String),
    fingerprint: Schema.optional(Schema.String),
    last4: Schema.optional(Schema.String),
    routing_number: Schema.optional(Schema.String),
  });
export const source_transaction_chf_credit_transfer_dataSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reference: Schema.optional(Schema.String),
    sender_address_country: Schema.optional(Schema.String),
    sender_address_line1: Schema.optional(Schema.String),
    sender_iban: Schema.optional(Schema.String),
    sender_name: Schema.optional(Schema.String),
  });
export const source_transaction_gbp_credit_transfer_dataSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fingerprint: Schema.optional(Schema.String),
    funding_method: Schema.optional(Schema.String),
    last4: Schema.optional(Schema.String),
    reference: Schema.optional(Schema.String),
    sender_account_number: Schema.optional(Schema.String),
    sender_name: Schema.optional(Schema.String),
    sender_sort_code: Schema.optional(Schema.String),
  });
export const source_transaction_paper_check_dataSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    available_at: Schema.optional(Schema.String),
    invoices: Schema.optional(Schema.String),
  });
export const source_transaction_sepa_credit_transfer_dataSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reference: Schema.optional(Schema.String),
    sender_iban: Schema.optional(Schema.String),
    sender_name: Schema.optional(Schema.String),
  });
export const subscription_scheduleSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    application: Schema.Unknown,
    billing_mode: Schema.suspend(
      () => subscriptions_resource_billing_modeSchema,
    ),
    canceled_at: Schema.NullOr(Schema.Number),
    completed_at: Schema.NullOr(Schema.Number),
    created: Schema.Number,
    current_phase: Schema.Unknown,
    customer: Schema.Unknown,
    customer_account: Schema.NullOr(Schema.String),
    default_settings: Schema.suspend(
      () => subscription_schedules_resource_default_settingsSchema,
    ),
    end_behavior: Schema.Literals(["cancel", "none", "release", "renew"]),
    id: Schema.String,
    livemode: Schema.Boolean,
    metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
    object: Schema.Literals(["subscription_schedule"]),
    phases: Schema.Array(
      Schema.suspend(() => subscription_schedule_phase_configurationSchema),
    ),
    released_at: Schema.NullOr(Schema.Number),
    released_subscription: Schema.NullOr(Schema.String),
    status: Schema.Literals([
      "active",
      "canceled",
      "completed",
      "not_started",
      "released",
    ]),
    subscription: Schema.Unknown,
    test_clock: Schema.Unknown,
  });
export const subscription_schedules_resource_default_settingsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    application_fee_percent: Schema.NullOr(Schema.Number),
    automatic_tax: Schema.optional(
      Schema.suspend(
        () =>
          subscription_schedules_resource_default_settings_automatic_taxSchema,
      ),
    ),
    billing_cycle_anchor: Schema.Literals(["automatic", "phase_start"]),
    billing_thresholds: Schema.Unknown,
    collection_method: Schema.NullOr(
      Schema.Literals(["charge_automatically", "send_invoice"]),
    ),
    default_payment_method: Schema.Unknown,
    description: Schema.NullOr(Schema.String),
    invoice_settings: Schema.suspend(
      () => invoice_setting_subscription_schedule_settingSchema,
    ),
    on_behalf_of: Schema.Unknown,
    transfer_data: Schema.Unknown,
  });
export const subscription_schedules_resource_default_settings_automatic_taxSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    disabled_reason: Schema.NullOr(
      Schema.Literals(["requires_location_inputs"]),
    ),
    enabled: Schema.Boolean,
    liability: Schema.Unknown,
  });
export const invoice_setting_subscription_schedule_settingSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    account_tax_ids: Schema.NullOr(Schema.Array(Schema.Unknown)),
    days_until_due: Schema.NullOr(Schema.Number),
    issuer: Schema.suspend(() => connect_account_referenceSchema),
  });
export const subscription_schedule_phase_configurationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    add_invoice_items: Schema.Array(
      Schema.suspend(() => subscription_schedule_add_invoice_itemSchema),
    ),
    application_fee_percent: Schema.NullOr(Schema.Number),
    automatic_tax: Schema.optional(
      Schema.suspend(() => schedules_phase_automatic_taxSchema),
    ),
    billing_cycle_anchor: Schema.NullOr(
      Schema.Literals(["automatic", "phase_start"]),
    ),
    billing_thresholds: Schema.Unknown,
    collection_method: Schema.NullOr(
      Schema.Literals(["charge_automatically", "send_invoice"]),
    ),
    currency: Schema.String,
    default_payment_method: Schema.Unknown,
    default_tax_rates: Schema.optional(
      Schema.NullOr(Schema.Array(Schema.suspend(() => tax_rateSchema))),
    ),
    description: Schema.NullOr(Schema.String),
    discounts: Schema.Array(
      Schema.suspend(
        () => stackable_discount_with_discount_settings_and_discount_endSchema,
      ),
    ),
    end_date: Schema.Number,
    invoice_settings: Schema.Unknown,
    items: Schema.Array(
      Schema.suspend(() => subscription_schedule_configuration_itemSchema),
    ),
    metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
    on_behalf_of: Schema.Unknown,
    proration_behavior: Schema.Literals([
      "always_invoice",
      "create_prorations",
      "none",
    ]),
    start_date: Schema.Number,
    transfer_data: Schema.Unknown,
    trial_end: Schema.NullOr(Schema.Number),
  });
export const subscription_schedule_add_invoice_itemSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    discounts: Schema.Array(
      Schema.suspend(
        () => discounts_resource_stackable_discount_with_discount_endSchema,
      ),
    ),
    metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
    period: Schema.suspend(
      () => subscription_schedule_add_invoice_item_periodSchema,
    ),
    price: Schema.Unknown,
    quantity: Schema.NullOr(Schema.Number),
    tax_rates: Schema.optional(
      Schema.NullOr(Schema.Array(Schema.suspend(() => tax_rateSchema))),
    ),
  });
export const discounts_resource_stackable_discount_with_discount_endSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    coupon: Schema.Unknown,
    discount: Schema.Unknown,
    promotion_code: Schema.Unknown,
  });
export const subscription_schedule_add_invoice_item_periodSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    end: Schema.suspend(
      () =>
        subscription_schedules_resource_invoice_item_period_resource_period_endSchema,
    ),
    start: Schema.suspend(
      () =>
        subscription_schedules_resource_invoice_item_period_resource_period_startSchema,
    ),
  });
export const subscription_schedules_resource_invoice_item_period_resource_period_endSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    timestamp: Schema.optional(Schema.Number),
    type: Schema.Literals(["min_item_period_end", "phase_end", "timestamp"]),
  });
export const subscription_schedules_resource_invoice_item_period_resource_period_startSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    timestamp: Schema.optional(Schema.Number),
    type: Schema.Literals([
      "max_item_period_start",
      "phase_start",
      "timestamp",
    ]),
  });
export const schedules_phase_automatic_taxSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    disabled_reason: Schema.NullOr(
      Schema.Literals(["requires_location_inputs"]),
    ),
    enabled: Schema.Boolean,
    liability: Schema.Unknown,
  });
export const stackable_discount_with_discount_settings_and_discount_endSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    coupon: Schema.Unknown,
    discount: Schema.Unknown,
    promotion_code: Schema.Unknown,
  });
export const subscription_schedule_configuration_itemSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billing_thresholds: Schema.Unknown,
    discounts: Schema.Array(
      Schema.suspend(() => stackable_discount_with_discount_settingsSchema),
    ),
    metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
    plan: Schema.Unknown,
    price: Schema.Unknown,
    quantity: Schema.optional(Schema.Number),
    tax_rates: Schema.optional(
      Schema.NullOr(Schema.Array(Schema.suspend(() => tax_rateSchema))),
    ),
  });
export const stackable_discount_with_discount_settingsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    coupon: Schema.Unknown,
    discount: Schema.Unknown,
    promotion_code: Schema.Unknown,
  });
export const tax_product_resource_tax_association_transaction_attemptsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    committed: Schema.optional(
      Schema.suspend(
        () =>
          tax_product_resource_tax_association_transaction_attempts_resource_committedSchema,
      ),
    ),
    errored: Schema.optional(
      Schema.suspend(
        () =>
          tax_product_resource_tax_association_transaction_attempts_resource_erroredSchema,
      ),
    ),
    source: Schema.String,
    status: Schema.String,
  });
export const tax_product_resource_tax_association_transaction_attempts_resource_committedSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    transaction: Schema.String,
  });
export const tax_product_resource_tax_association_transaction_attempts_resource_erroredSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reason: Schema.Literals([
      "another_payment_associated_with_calculation",
      "calculation_expired",
      "currency_mismatch",
      "original_transaction_voided",
      "unique_reference_violation",
    ]),
  });
export const tax_product_resource_customer_detailsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    address: Schema.Unknown,
    address_source: Schema.NullOr(Schema.Literals(["billing", "shipping"])),
    ip_address: Schema.NullOr(Schema.String),
    tax_ids: Schema.Array(
      Schema.suspend(
        () => tax_product_resource_customer_details_resource_tax_idSchema,
      ),
    ),
    taxability_override: Schema.Literals([
      "customer_exempt",
      "none",
      "reverse_charge",
    ]),
  });
export const tax_product_resource_customer_details_resource_tax_idSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.Literals([
      "ad_nrt",
      "ae_trn",
      "al_tin",
      "am_tin",
      "ao_tin",
      "ar_cuit",
      "au_abn",
      "au_arn",
      "aw_tin",
      "az_tin",
      "ba_tin",
      "bb_tin",
      "bd_bin",
      "bf_ifu",
      "bg_uic",
      "bh_vat",
      "bj_ifu",
      "bo_tin",
      "br_cnpj",
      "br_cpf",
      "bs_tin",
      "by_tin",
      "ca_bn",
      "ca_gst_hst",
      "ca_pst_bc",
      "ca_pst_mb",
      "ca_pst_sk",
      "ca_qst",
      "cd_nif",
      "ch_uid",
      "ch_vat",
      "cl_tin",
      "cm_niu",
      "cn_tin",
      "co_nit",
      "cr_tin",
      "cv_nif",
      "de_stn",
      "do_rcn",
      "ec_ruc",
      "eg_tin",
      "es_cif",
      "et_tin",
      "eu_oss_vat",
      "eu_vat",
      "gb_vat",
      "ge_vat",
      "gn_nif",
      "hk_br",
      "hr_oib",
      "hu_tin",
      "id_npwp",
      "il_vat",
      "in_gst",
      "is_vat",
      "jp_cn",
      "jp_rn",
      "jp_trn",
      "ke_pin",
      "kg_tin",
      "kh_tin",
      "kr_brn",
      "kz_bin",
      "la_tin",
      "li_uid",
      "li_vat",
      "lk_vat",
      "ma_vat",
      "md_vat",
      "me_pib",
      "mk_vat",
      "mr_nif",
      "mx_rfc",
      "my_frp",
      "my_itn",
      "my_sst",
      "ng_tin",
      "no_vat",
      "no_voec",
      "np_pan",
      "nz_gst",
      "om_vat",
      "pe_ruc",
      "ph_tin",
      "pl_nip",
      "ro_tin",
      "rs_pib",
      "ru_inn",
      "ru_kpp",
      "sa_vat",
      "sg_gst",
      "sg_uen",
      "si_tin",
      "sn_ninea",
      "sr_fin",
      "sv_nit",
      "th_vat",
      "tj_tin",
      "tr_tin",
      "tw_vat",
      "tz_vat",
      "ua_vat",
      "ug_tin",
      "unknown",
      "us_ein",
      "uy_ruc",
      "uz_tin",
      "uz_vat",
      "ve_rif",
      "vn_tin",
      "za_vat",
      "zm_tin",
      "zw_tin",
    ]),
    value: Schema.String,
  });
export const tax_calculation_line_itemSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amount: Schema.Number,
    amount_tax: Schema.Number,
    id: Schema.String,
    livemode: Schema.Boolean,
    metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
    object: Schema.Literals(["tax.calculation_line_item"]),
    product: Schema.NullOr(Schema.String),
    quantity: Schema.Number,
    reference: Schema.String,
    tax_behavior: Schema.Literals(["exclusive", "inclusive"]),
    tax_breakdown: Schema.optional(
      Schema.NullOr(
        Schema.Array(
          Schema.suspend(
            () => tax_product_resource_line_item_tax_breakdownSchema,
          ),
        ),
      ),
    ),
    tax_code: Schema.String,
  });
export const tax_product_resource_line_item_tax_breakdownSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amount: Schema.Number,
    jurisdiction: Schema.suspend(() => tax_product_resource_jurisdictionSchema),
    sourcing: Schema.Literals(["destination", "origin"]),
    tax_rate_details: Schema.Unknown,
    taxability_reason: Schema.Literals([
      "customer_exempt",
      "not_collecting",
      "not_subject_to_tax",
      "not_supported",
      "portion_product_exempt",
      "portion_reduced_rated",
      "portion_standard_rated",
      "product_exempt",
      "product_exempt_holiday",
      "proportionally_rated",
      "reduced_rated",
      "reverse_charge",
      "standard_rated",
      "taxable_basis_reduced",
      "zero_rated",
    ]),
    taxable_amount: Schema.Number,
  });
export const tax_product_resource_jurisdictionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    country: Schema.String,
    display_name: Schema.String,
    level: Schema.Literals(["city", "country", "county", "district", "state"]),
    state: Schema.NullOr(Schema.String),
  });
export const tax_product_resource_tax_breakdownSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amount: Schema.Number,
    inclusive: Schema.Boolean,
    tax_rate_details: Schema.suspend(
      () => tax_product_resource_tax_rate_detailsSchema,
    ),
    taxability_reason: Schema.Literals([
      "customer_exempt",
      "not_collecting",
      "not_subject_to_tax",
      "not_supported",
      "portion_product_exempt",
      "portion_reduced_rated",
      "portion_standard_rated",
      "product_exempt",
      "product_exempt_holiday",
      "proportionally_rated",
      "reduced_rated",
      "reverse_charge",
      "standard_rated",
      "taxable_basis_reduced",
      "zero_rated",
    ]),
    taxable_amount: Schema.Number,
  });
export const tax_product_resource_tax_rate_detailsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    country: Schema.NullOr(Schema.String),
    flat_amount: Schema.Unknown,
    percentage_decimal: Schema.String,
    rate_type: Schema.NullOr(Schema.Literals(["flat_amount", "percentage"])),
    state: Schema.NullOr(Schema.String),
    tax_type: Schema.NullOr(
      Schema.Literals([
        "amusement_tax",
        "communications_tax",
        "gst",
        "hst",
        "igst",
        "jct",
        "lease_tax",
        "pst",
        "qst",
        "retail_delivery_fee",
        "rst",
        "sales_tax",
        "service_tax",
        "vat",
      ]),
    ),
  });
export const tax_registrationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
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
  },
);
export const tax_product_registrations_resource_country_optionsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ae: Schema.optional(
      Schema.suspend(
        () =>
          tax_product_registrations_resource_country_options_default_inbound_goodsSchema,
      ),
    ),
    al: Schema.optional(
      Schema.suspend(
        () => tax_product_registrations_resource_country_options_defaultSchema,
      ),
    ),
    am: Schema.optional(
      Schema.suspend(
        () =>
          tax_product_registrations_resource_country_options_simplifiedSchema,
      ),
    ),
    ao: Schema.optional(
      Schema.suspend(
        () => tax_product_registrations_resource_country_options_defaultSchema,
      ),
    ),
    at: Schema.optional(
      Schema.suspend(
        () => tax_product_registrations_resource_country_options_europeSchema,
      ),
    ),
    au: Schema.optional(
      Schema.suspend(
        () =>
          tax_product_registrations_resource_country_options_default_inbound_goodsSchema,
      ),
    ),
    aw: Schema.optional(
      Schema.suspend(
        () => tax_product_registrations_resource_country_options_defaultSchema,
      ),
    ),
    az: Schema.optional(
      Schema.suspend(
        () =>
          tax_product_registrations_resource_country_options_simplifiedSchema,
      ),
    ),
    ba: Schema.optional(
      Schema.suspend(
        () => tax_product_registrations_resource_country_options_defaultSchema,
      ),
    ),
    bb: Schema.optional(
      Schema.suspend(
        () => tax_product_registrations_resource_country_options_defaultSchema,
      ),
    ),
    bd: Schema.optional(
      Schema.suspend(
        () => tax_product_registrations_resource_country_options_defaultSchema,
      ),
    ),
    be: Schema.optional(
      Schema.suspend(
        () => tax_product_registrations_resource_country_options_europeSchema,
      ),
    ),
    bf: Schema.optional(
      Schema.suspend(
        () => tax_product_registrations_resource_country_options_defaultSchema,
      ),
    ),
    bg: Schema.optional(
      Schema.suspend(
        () => tax_product_registrations_resource_country_options_europeSchema,
      ),
    ),
    bh: Schema.optional(
      Schema.suspend(
        () => tax_product_registrations_resource_country_options_defaultSchema,
      ),
    ),
    bj: Schema.optional(
      Schema.suspend(
        () =>
          tax_product_registrations_resource_country_options_simplifiedSchema,
      ),
    ),
    bs: Schema.optional(
      Schema.suspend(
        () => tax_product_registrations_resource_country_options_defaultSchema,
      ),
    ),
    by: Schema.optional(
      Schema.suspend(
        () =>
          tax_product_registrations_resource_country_options_simplifiedSchema,
      ),
    ),
    ca: Schema.optional(
      Schema.suspend(
        () => tax_product_registrations_resource_country_options_canadaSchema,
      ),
    ),
    cd: Schema.optional(
      Schema.suspend(
        () => tax_product_registrations_resource_country_options_defaultSchema,
      ),
    ),
    ch: Schema.optional(
      Schema.suspend(
        () =>
          tax_product_registrations_resource_country_options_default_inbound_goodsSchema,
      ),
    ),
    cl: Schema.optional(
      Schema.suspend(
        () =>
          tax_product_registrations_resource_country_options_simplifiedSchema,
      ),
    ),
    cm: Schema.optional(
      Schema.suspend(
        () =>
          tax_product_registrations_resource_country_options_simplifiedSchema,
      ),
    ),
    co: Schema.optional(
      Schema.suspend(
        () =>
          tax_product_registrations_resource_country_options_simplifiedSchema,
      ),
    ),
    cr: Schema.optional(
      Schema.suspend(
        () =>
          tax_product_registrations_resource_country_options_simplifiedSchema,
      ),
    ),
    cv: Schema.optional(
      Schema.suspend(
        () =>
          tax_product_registrations_resource_country_options_simplifiedSchema,
      ),
    ),
    cy: Schema.optional(
      Schema.suspend(
        () => tax_product_registrations_resource_country_options_europeSchema,
      ),
    ),
    cz: Schema.optional(
      Schema.suspend(
        () => tax_product_registrations_resource_country_options_europeSchema,
      ),
    ),
    de: Schema.optional(
      Schema.suspend(
        () => tax_product_registrations_resource_country_options_europeSchema,
      ),
    ),
    dk: Schema.optional(
      Schema.suspend(
        () => tax_product_registrations_resource_country_options_europeSchema,
      ),
    ),
    ec: Schema.optional(
      Schema.suspend(
        () =>
          tax_product_registrations_resource_country_options_simplifiedSchema,
      ),
    ),
    ee: Schema.optional(
      Schema.suspend(
        () => tax_product_registrations_resource_country_options_europeSchema,
      ),
    ),
    eg: Schema.optional(
      Schema.suspend(
        () =>
          tax_product_registrations_resource_country_options_simplifiedSchema,
      ),
    ),
    es: Schema.optional(
      Schema.suspend(
        () => tax_product_registrations_resource_country_options_europeSchema,
      ),
    ),
    et: Schema.optional(
      Schema.suspend(
        () => tax_product_registrations_resource_country_options_defaultSchema,
      ),
    ),
    fi: Schema.optional(
      Schema.suspend(
        () => tax_product_registrations_resource_country_options_europeSchema,
      ),
    ),
    fr: Schema.optional(
      Schema.suspend(
        () => tax_product_registrations_resource_country_options_europeSchema,
      ),
    ),
    gb: Schema.optional(
      Schema.suspend(
        () =>
          tax_product_registrations_resource_country_options_default_inbound_goodsSchema,
      ),
    ),
    ge: Schema.optional(
      Schema.suspend(
        () =>
          tax_product_registrations_resource_country_options_simplifiedSchema,
      ),
    ),
    gn: Schema.optional(
      Schema.suspend(
        () => tax_product_registrations_resource_country_options_defaultSchema,
      ),
    ),
    gr: Schema.optional(
      Schema.suspend(
        () => tax_product_registrations_resource_country_options_europeSchema,
      ),
    ),
    hr: Schema.optional(
      Schema.suspend(
        () => tax_product_registrations_resource_country_options_europeSchema,
      ),
    ),
    hu: Schema.optional(
      Schema.suspend(
        () => tax_product_registrations_resource_country_options_europeSchema,
      ),
    ),
    id: Schema.optional(
      Schema.suspend(
        () =>
          tax_product_registrations_resource_country_options_simplifiedSchema,
      ),
    ),
    ie: Schema.optional(
      Schema.suspend(
        () => tax_product_registrations_resource_country_options_europeSchema,
      ),
    ),
    in: Schema.optional(
      Schema.suspend(
        () =>
          tax_product_registrations_resource_country_options_simplifiedSchema,
      ),
    ),
    is: Schema.optional(
      Schema.suspend(
        () => tax_product_registrations_resource_country_options_defaultSchema,
      ),
    ),
    it: Schema.optional(
      Schema.suspend(
        () => tax_product_registrations_resource_country_options_europeSchema,
      ),
    ),
    jp: Schema.optional(
      Schema.suspend(
        () =>
          tax_product_registrations_resource_country_options_default_inbound_goodsSchema,
      ),
    ),
    ke: Schema.optional(
      Schema.suspend(
        () =>
          tax_product_registrations_resource_country_options_simplifiedSchema,
      ),
    ),
    kg: Schema.optional(
      Schema.suspend(
        () =>
          tax_product_registrations_resource_country_options_simplifiedSchema,
      ),
    ),
    kh: Schema.optional(
      Schema.suspend(
        () =>
          tax_product_registrations_resource_country_options_simplifiedSchema,
      ),
    ),
    kr: Schema.optional(
      Schema.suspend(
        () =>
          tax_product_registrations_resource_country_options_simplifiedSchema,
      ),
    ),
    kz: Schema.optional(
      Schema.suspend(
        () =>
          tax_product_registrations_resource_country_options_simplifiedSchema,
      ),
    ),
    la: Schema.optional(
      Schema.suspend(
        () =>
          tax_product_registrations_resource_country_options_simplifiedSchema,
      ),
    ),
    lk: Schema.optional(
      Schema.suspend(
        () =>
          tax_product_registrations_resource_country_options_simplifiedSchema,
      ),
    ),
    lt: Schema.optional(
      Schema.suspend(
        () => tax_product_registrations_resource_country_options_europeSchema,
      ),
    ),
    lu: Schema.optional(
      Schema.suspend(
        () => tax_product_registrations_resource_country_options_europeSchema,
      ),
    ),
    lv: Schema.optional(
      Schema.suspend(
        () => tax_product_registrations_resource_country_options_europeSchema,
      ),
    ),
    ma: Schema.optional(
      Schema.suspend(
        () =>
          tax_product_registrations_resource_country_options_simplifiedSchema,
      ),
    ),
    md: Schema.optional(
      Schema.suspend(
        () =>
          tax_product_registrations_resource_country_options_simplifiedSchema,
      ),
    ),
    me: Schema.optional(
      Schema.suspend(
        () => tax_product_registrations_resource_country_options_defaultSchema,
      ),
    ),
    mk: Schema.optional(
      Schema.suspend(
        () => tax_product_registrations_resource_country_options_defaultSchema,
      ),
    ),
    mr: Schema.optional(
      Schema.suspend(
        () => tax_product_registrations_resource_country_options_defaultSchema,
      ),
    ),
    mt: Schema.optional(
      Schema.suspend(
        () => tax_product_registrations_resource_country_options_europeSchema,
      ),
    ),
    mx: Schema.optional(
      Schema.suspend(
        () =>
          tax_product_registrations_resource_country_options_simplifiedSchema,
      ),
    ),
    my: Schema.optional(
      Schema.suspend(
        () =>
          tax_product_registrations_resource_country_options_simplifiedSchema,
      ),
    ),
    ng: Schema.optional(
      Schema.suspend(
        () =>
          tax_product_registrations_resource_country_options_simplifiedSchema,
      ),
    ),
    nl: Schema.optional(
      Schema.suspend(
        () => tax_product_registrations_resource_country_options_europeSchema,
      ),
    ),
    no: Schema.optional(
      Schema.suspend(
        () =>
          tax_product_registrations_resource_country_options_default_inbound_goodsSchema,
      ),
    ),
    np: Schema.optional(
      Schema.suspend(
        () =>
          tax_product_registrations_resource_country_options_simplifiedSchema,
      ),
    ),
    nz: Schema.optional(
      Schema.suspend(
        () =>
          tax_product_registrations_resource_country_options_default_inbound_goodsSchema,
      ),
    ),
    om: Schema.optional(
      Schema.suspend(
        () => tax_product_registrations_resource_country_options_defaultSchema,
      ),
    ),
    pe: Schema.optional(
      Schema.suspend(
        () =>
          tax_product_registrations_resource_country_options_simplifiedSchema,
      ),
    ),
    ph: Schema.optional(
      Schema.suspend(
        () =>
          tax_product_registrations_resource_country_options_simplifiedSchema,
      ),
    ),
    pl: Schema.optional(
      Schema.suspend(
        () => tax_product_registrations_resource_country_options_europeSchema,
      ),
    ),
    pt: Schema.optional(
      Schema.suspend(
        () => tax_product_registrations_resource_country_options_europeSchema,
      ),
    ),
    ro: Schema.optional(
      Schema.suspend(
        () => tax_product_registrations_resource_country_options_europeSchema,
      ),
    ),
    rs: Schema.optional(
      Schema.suspend(
        () => tax_product_registrations_resource_country_options_defaultSchema,
      ),
    ),
    ru: Schema.optional(
      Schema.suspend(
        () =>
          tax_product_registrations_resource_country_options_simplifiedSchema,
      ),
    ),
    sa: Schema.optional(
      Schema.suspend(
        () =>
          tax_product_registrations_resource_country_options_simplifiedSchema,
      ),
    ),
    se: Schema.optional(
      Schema.suspend(
        () => tax_product_registrations_resource_country_options_europeSchema,
      ),
    ),
    sg: Schema.optional(
      Schema.suspend(
        () =>
          tax_product_registrations_resource_country_options_default_inbound_goodsSchema,
      ),
    ),
    si: Schema.optional(
      Schema.suspend(
        () => tax_product_registrations_resource_country_options_europeSchema,
      ),
    ),
    sk: Schema.optional(
      Schema.suspend(
        () => tax_product_registrations_resource_country_options_europeSchema,
      ),
    ),
    sn: Schema.optional(
      Schema.suspend(
        () =>
          tax_product_registrations_resource_country_options_simplifiedSchema,
      ),
    ),
    sr: Schema.optional(
      Schema.suspend(
        () => tax_product_registrations_resource_country_options_defaultSchema,
      ),
    ),
    th: Schema.optional(
      Schema.suspend(
        () => tax_product_registrations_resource_country_options_thailandSchema,
      ),
    ),
    tj: Schema.optional(
      Schema.suspend(
        () =>
          tax_product_registrations_resource_country_options_simplifiedSchema,
      ),
    ),
    tr: Schema.optional(
      Schema.suspend(
        () =>
          tax_product_registrations_resource_country_options_simplifiedSchema,
      ),
    ),
    tw: Schema.optional(
      Schema.suspend(
        () =>
          tax_product_registrations_resource_country_options_simplifiedSchema,
      ),
    ),
    tz: Schema.optional(
      Schema.suspend(
        () =>
          tax_product_registrations_resource_country_options_simplifiedSchema,
      ),
    ),
    ua: Schema.optional(
      Schema.suspend(
        () =>
          tax_product_registrations_resource_country_options_simplifiedSchema,
      ),
    ),
    ug: Schema.optional(
      Schema.suspend(
        () =>
          tax_product_registrations_resource_country_options_simplifiedSchema,
      ),
    ),
    us: Schema.optional(
      Schema.suspend(
        () =>
          tax_product_registrations_resource_country_options_united_statesSchema,
      ),
    ),
    uy: Schema.optional(
      Schema.suspend(
        () => tax_product_registrations_resource_country_options_defaultSchema,
      ),
    ),
    uz: Schema.optional(
      Schema.suspend(
        () =>
          tax_product_registrations_resource_country_options_simplifiedSchema,
      ),
    ),
    vn: Schema.optional(
      Schema.suspend(
        () =>
          tax_product_registrations_resource_country_options_simplifiedSchema,
      ),
    ),
    za: Schema.optional(
      Schema.suspend(
        () => tax_product_registrations_resource_country_options_defaultSchema,
      ),
    ),
    zm: Schema.optional(
      Schema.suspend(
        () =>
          tax_product_registrations_resource_country_options_simplifiedSchema,
      ),
    ),
    zw: Schema.optional(
      Schema.suspend(
        () => tax_product_registrations_resource_country_options_defaultSchema,
      ),
    ),
  });
export const tax_product_registrations_resource_country_options_default_inbound_goodsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    standard: Schema.optional(
      Schema.suspend(
        () =>
          tax_product_registrations_resource_country_options_default_standardSchema,
      ),
    ),
    type: Schema.Literals(["standard"]),
  });
export const tax_product_registrations_resource_country_options_default_standardSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    place_of_supply_scheme: Schema.Literals(["inbound_goods", "standard"]),
  });
export const tax_product_registrations_resource_country_options_defaultSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.Literals(["standard"]),
  });
export const tax_product_registrations_resource_country_options_simplifiedSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.Literals(["simplified"]),
  });
export const tax_product_registrations_resource_country_options_europeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    standard: Schema.optional(
      Schema.suspend(
        () =>
          tax_product_registrations_resource_country_options_eu_standardSchema,
      ),
    ),
    type: Schema.Literals(["ioss", "oss_non_union", "oss_union", "standard"]),
  });
export const tax_product_registrations_resource_country_options_eu_standardSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    place_of_supply_scheme: Schema.Literals([
      "inbound_goods",
      "small_seller",
      "standard",
    ]),
  });
export const tax_product_registrations_resource_country_options_canadaSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    province_standard: Schema.optional(
      Schema.suspend(
        () =>
          tax_product_registrations_resource_country_options_ca_province_standardSchema,
      ),
    ),
    type: Schema.Literals(["province_standard", "simplified", "standard"]),
  });
export const tax_product_registrations_resource_country_options_ca_province_standardSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    province: Schema.String,
  });
export const tax_product_registrations_resource_country_options_thailandSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.Literals(["simplified"]),
  });
export const tax_product_registrations_resource_country_options_united_statesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    local_amusement_tax: Schema.optional(
      Schema.suspend(
        () =>
          tax_product_registrations_resource_country_options_us_local_amusement_taxSchema,
      ),
    ),
    local_lease_tax: Schema.optional(
      Schema.suspend(
        () =>
          tax_product_registrations_resource_country_options_us_local_lease_taxSchema,
      ),
    ),
    state: Schema.String,
    state_sales_tax: Schema.optional(
      Schema.suspend(
        () =>
          tax_product_registrations_resource_country_options_us_state_sales_taxSchema,
      ),
    ),
    type: Schema.Literals([
      "local_amusement_tax",
      "local_lease_tax",
      "state_communications_tax",
      "state_retail_delivery_fee",
      "state_sales_tax",
    ]),
  });
export const tax_product_registrations_resource_country_options_us_local_amusement_taxSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    jurisdiction: Schema.String,
  });
export const tax_product_registrations_resource_country_options_us_local_lease_taxSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    jurisdiction: Schema.String,
  });
export const tax_product_registrations_resource_country_options_us_state_sales_taxSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    elections: Schema.optional(
      Schema.Array(
        Schema.suspend(
          () =>
            tax_product_registrations_resource_country_options_us_state_sales_tax_electionSchema,
        ),
      ),
    ),
  });
export const tax_product_registrations_resource_country_options_us_state_sales_tax_electionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    jurisdiction: Schema.optional(Schema.String),
    type: Schema.Literals([
      "local_use_tax",
      "simplified_sellers_use_tax",
      "single_local_use_tax",
    ]),
  });
export const tax_product_resource_tax_settings_defaultsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provider: Schema.Literals(["anrok", "avalara", "sphere", "stripe"]),
    tax_behavior: Schema.NullOr(
      Schema.Literals(["exclusive", "inclusive", "inferred_by_currency"]),
    ),
    tax_code: Schema.NullOr(Schema.String),
  });
export const tax_product_resource_tax_settings_status_detailsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    active: Schema.optional(
      Schema.suspend(
        () =>
          tax_product_resource_tax_settings_status_details_resource_activeSchema,
      ),
    ),
    pending: Schema.optional(
      Schema.suspend(
        () =>
          tax_product_resource_tax_settings_status_details_resource_pendingSchema,
      ),
    ),
  });
export const tax_product_resource_tax_settings_status_details_resource_activeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({});
export const tax_product_resource_tax_settings_status_details_resource_pendingSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    missing_fields: Schema.NullOr(Schema.Array(Schema.String)),
  });
export const tax_transaction_line_itemSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amount: Schema.Number,
    amount_tax: Schema.Number,
    id: Schema.String,
    livemode: Schema.Boolean,
    metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
    object: Schema.Literals(["tax.transaction_line_item"]),
    product: Schema.NullOr(Schema.String),
    quantity: Schema.Number,
    reference: Schema.String,
    reversal: Schema.Unknown,
    tax_behavior: Schema.Literals(["exclusive", "inclusive"]),
    tax_code: Schema.String,
    type: Schema.Literals(["reversal", "transaction"]),
  });
export const tax_codeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  description: Schema.String,
  id: Schema.String,
  name: Schema.String,
  object: Schema.Literals(["tax_code"]),
});
export const terminal_configurationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bbpos_wisepad3: Schema.optional(
      Schema.suspend(
        () =>
          terminal_configuration_configuration_resource_device_type_specific_configSchema,
      ),
    ),
    bbpos_wisepos_e: Schema.optional(
      Schema.suspend(
        () =>
          terminal_configuration_configuration_resource_device_type_specific_configSchema,
      ),
    ),
    cellular: Schema.optional(
      Schema.suspend(
        () =>
          terminal_configuration_configuration_resource_cellular_configSchema,
      ),
    ),
    id: Schema.String,
    is_account_default: Schema.NullOr(Schema.Boolean),
    livemode: Schema.Boolean,
    name: Schema.NullOr(Schema.String),
    object: Schema.Literals(["terminal.configuration"]),
    offline: Schema.optional(
      Schema.suspend(
        () =>
          terminal_configuration_configuration_resource_offline_configSchema,
      ),
    ),
    reboot_window: Schema.optional(
      Schema.suspend(
        () => terminal_configuration_configuration_resource_reboot_windowSchema,
      ),
    ),
    stripe_s700: Schema.optional(
      Schema.suspend(
        () =>
          terminal_configuration_configuration_resource_device_type_specific_configSchema,
      ),
    ),
    stripe_s710: Schema.optional(
      Schema.suspend(
        () =>
          terminal_configuration_configuration_resource_device_type_specific_configSchema,
      ),
    ),
    tipping: Schema.optional(
      Schema.suspend(
        () => terminal_configuration_configuration_resource_tippingSchema,
      ),
    ),
    verifone_p400: Schema.optional(
      Schema.suspend(
        () =>
          terminal_configuration_configuration_resource_device_type_specific_configSchema,
      ),
    ),
    wifi: Schema.optional(
      Schema.suspend(
        () => terminal_configuration_configuration_resource_wifi_configSchema,
      ),
    ),
  });
export const terminal_configuration_configuration_resource_device_type_specific_configSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    splashscreen: Schema.optional(Schema.Unknown),
  });
export const terminal_configuration_configuration_resource_cellular_configSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.Boolean,
  });
export const terminal_configuration_configuration_resource_offline_configSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.NullOr(Schema.Boolean),
  });
export const terminal_configuration_configuration_resource_reboot_windowSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    end_hour: Schema.Number,
    start_hour: Schema.Number,
  });
export const terminal_configuration_configuration_resource_tippingSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    aed: Schema.optional(
      Schema.suspend(
        () =>
          terminal_configuration_configuration_resource_currency_specific_configSchema,
      ),
    ),
    aud: Schema.optional(
      Schema.suspend(
        () =>
          terminal_configuration_configuration_resource_currency_specific_configSchema,
      ),
    ),
    cad: Schema.optional(
      Schema.suspend(
        () =>
          terminal_configuration_configuration_resource_currency_specific_configSchema,
      ),
    ),
    chf: Schema.optional(
      Schema.suspend(
        () =>
          terminal_configuration_configuration_resource_currency_specific_configSchema,
      ),
    ),
    czk: Schema.optional(
      Schema.suspend(
        () =>
          terminal_configuration_configuration_resource_currency_specific_configSchema,
      ),
    ),
    dkk: Schema.optional(
      Schema.suspend(
        () =>
          terminal_configuration_configuration_resource_currency_specific_configSchema,
      ),
    ),
    eur: Schema.optional(
      Schema.suspend(
        () =>
          terminal_configuration_configuration_resource_currency_specific_configSchema,
      ),
    ),
    gbp: Schema.optional(
      Schema.suspend(
        () =>
          terminal_configuration_configuration_resource_currency_specific_configSchema,
      ),
    ),
    gip: Schema.optional(
      Schema.suspend(
        () =>
          terminal_configuration_configuration_resource_currency_specific_configSchema,
      ),
    ),
    hkd: Schema.optional(
      Schema.suspend(
        () =>
          terminal_configuration_configuration_resource_currency_specific_configSchema,
      ),
    ),
    huf: Schema.optional(
      Schema.suspend(
        () =>
          terminal_configuration_configuration_resource_currency_specific_configSchema,
      ),
    ),
    jpy: Schema.optional(
      Schema.suspend(
        () =>
          terminal_configuration_configuration_resource_currency_specific_configSchema,
      ),
    ),
    mxn: Schema.optional(
      Schema.suspend(
        () =>
          terminal_configuration_configuration_resource_currency_specific_configSchema,
      ),
    ),
    myr: Schema.optional(
      Schema.suspend(
        () =>
          terminal_configuration_configuration_resource_currency_specific_configSchema,
      ),
    ),
    nok: Schema.optional(
      Schema.suspend(
        () =>
          terminal_configuration_configuration_resource_currency_specific_configSchema,
      ),
    ),
    nzd: Schema.optional(
      Schema.suspend(
        () =>
          terminal_configuration_configuration_resource_currency_specific_configSchema,
      ),
    ),
    pln: Schema.optional(
      Schema.suspend(
        () =>
          terminal_configuration_configuration_resource_currency_specific_configSchema,
      ),
    ),
    ron: Schema.optional(
      Schema.suspend(
        () =>
          terminal_configuration_configuration_resource_currency_specific_configSchema,
      ),
    ),
    sek: Schema.optional(
      Schema.suspend(
        () =>
          terminal_configuration_configuration_resource_currency_specific_configSchema,
      ),
    ),
    sgd: Schema.optional(
      Schema.suspend(
        () =>
          terminal_configuration_configuration_resource_currency_specific_configSchema,
      ),
    ),
    usd: Schema.optional(
      Schema.suspend(
        () =>
          terminal_configuration_configuration_resource_currency_specific_configSchema,
      ),
    ),
  });
export const terminal_configuration_configuration_resource_currency_specific_configSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fixed_amounts: Schema.optional(Schema.NullOr(Schema.Array(Schema.Number))),
    percentages: Schema.optional(Schema.NullOr(Schema.Array(Schema.Number))),
    smart_tip_threshold: Schema.optional(Schema.Number),
  });
export const terminal_configuration_configuration_resource_wifi_configSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enterprise_eap_peap: Schema.optional(
      Schema.suspend(
        () =>
          terminal_configuration_configuration_resource_enterprise_peap_wifiSchema,
      ),
    ),
    enterprise_eap_tls: Schema.optional(
      Schema.suspend(
        () =>
          terminal_configuration_configuration_resource_enterprise_tls_wifiSchema,
      ),
    ),
    personal_psk: Schema.optional(
      Schema.suspend(
        () =>
          terminal_configuration_configuration_resource_personal_psk_wifiSchema,
      ),
    ),
    type: Schema.Literals([
      "enterprise_eap_peap",
      "enterprise_eap_tls",
      "personal_psk",
    ]),
  });
export const terminal_configuration_configuration_resource_enterprise_peap_wifiSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ca_certificate_file: Schema.optional(Schema.String),
    password: SensitiveOutputString,
    ssid: Schema.String,
    username: Schema.String,
  });
export const terminal_configuration_configuration_resource_enterprise_tls_wifiSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ca_certificate_file: Schema.optional(Schema.String),
    client_certificate_file: Schema.String,
    private_key_file: Schema.String,
    private_key_file_password: Schema.optional(SensitiveOutputString),
    ssid: Schema.String,
  });
export const terminal_configuration_configuration_resource_personal_psk_wifiSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    password: SensitiveOutputString,
    ssid: Schema.String,
  });
export const terminal_locationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    address: Schema.suspend(() => addressSchema),
    address_kana: Schema.optional(
      Schema.suspend(() => legal_entity_japan_addressSchema),
    ),
    address_kanji: Schema.optional(
      Schema.suspend(() => legal_entity_japan_addressSchema),
    ),
    configuration_overrides: Schema.optional(Schema.String),
    display_name: Schema.String,
    display_name_kana: Schema.optional(Schema.String),
    display_name_kanji: Schema.optional(Schema.String),
    id: Schema.String,
    livemode: Schema.Boolean,
    metadata: Schema.Record(Schema.String, Schema.String),
    object: Schema.Literals(["terminal.location"]),
    phone: Schema.optional(Schema.String),
  });
export const legal_entity_japan_addressSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    city: Schema.NullOr(Schema.String),
    country: Schema.NullOr(Schema.String),
    line1: Schema.NullOr(Schema.String),
    line2: Schema.NullOr(Schema.String),
    postal_code: Schema.NullOr(Schema.String),
    state: Schema.NullOr(Schema.String),
    town: Schema.NullOr(Schema.String),
  });
export const terminal_onboarding_link_link_optionsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apple_terms_and_conditions: Schema.Unknown,
  });
export const terminal_readerSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  action: Schema.Unknown,
  device_sw_version: Schema.NullOr(Schema.String),
  device_type: Schema.Literals([
    "bbpos_chipper2x",
    "bbpos_wisepad3",
    "bbpos_wisepos_e",
    "mobile_phone_reader",
    "simulated_stripe_s700",
    "simulated_stripe_s710",
    "simulated_wisepos_e",
    "stripe_m2",
    "stripe_s700",
    "stripe_s710",
    "verifone_P400",
  ]),
  id: Schema.String,
  ip_address: Schema.NullOr(Schema.String),
  label: Schema.String,
  last_seen_at: Schema.NullOr(Schema.Number),
  livemode: Schema.Boolean,
  location: Schema.Unknown,
  metadata: Schema.Record(Schema.String, Schema.String),
  object: Schema.Literals(["terminal.reader"]),
  serial_number: Schema.String,
  status: Schema.NullOr(Schema.Literals(["offline", "online"])),
});
export const test_helpers_test_clockSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    created: Schema.Number,
    deletes_after: Schema.Number,
    frozen_time: Schema.Number,
    id: Schema.String,
    livemode: Schema.Boolean,
    name: Schema.NullOr(Schema.String),
    object: Schema.Literals(["test_helpers.test_clock"]),
    status: Schema.Literals(["advancing", "internal_failure", "ready"]),
    status_details: Schema.suspend(
      () => billing_clocks_resource_status_details_status_detailsSchema,
    ),
  });
export const billing_clocks_resource_status_details_status_detailsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    advancing: Schema.optional(
      Schema.suspend(
        () =>
          billing_clocks_resource_status_details_advancing_status_detailsSchema,
      ),
    ),
  });
export const billing_clocks_resource_status_details_advancing_status_detailsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    target_frozen_time: Schema.Number,
  });
export const treasury_inbound_transfers_resource_inbound_transfer_resource_linked_flowsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    received_debit: Schema.NullOr(Schema.String),
  });
export const treasury_inbound_transfers_resource_inbound_transfer_resource_status_transitionsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    canceled_at: Schema.optional(Schema.NullOr(Schema.Number)),
    failed_at: Schema.NullOr(Schema.Number),
    succeeded_at: Schema.NullOr(Schema.Number),
  });
export const treasury_outbound_payments_resource_outbound_payment_resource_status_transitionsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    canceled_at: Schema.NullOr(Schema.Number),
    failed_at: Schema.NullOr(Schema.Number),
    posted_at: Schema.NullOr(Schema.Number),
    returned_at: Schema.NullOr(Schema.Number),
  });
export const outbound_transfers_payment_method_detailsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billing_details: Schema.suspend(
      () => treasury_shared_resource_billing_detailsSchema,
    ),
    financial_account: Schema.optional(
      Schema.suspend(
        () => outbound_transfers_payment_method_details_financial_accountSchema,
      ),
    ),
    type: Schema.Literals(["financial_account", "us_bank_account"]),
    us_bank_account: Schema.optional(
      Schema.suspend(
        () => outbound_transfers_payment_method_details_us_bank_accountSchema,
      ),
    ),
  });
export const treasury_shared_resource_billing_detailsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    address: Schema.suspend(() => addressSchema),
    email: Schema.NullOr(Schema.String),
    name: Schema.NullOr(Schema.String),
  });
export const outbound_transfers_payment_method_details_financial_accountSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    network: Schema.Literals(["stripe"]),
  });
export const outbound_transfers_payment_method_details_us_bank_accountSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    account_holder_type: Schema.NullOr(
      Schema.Literals(["company", "individual"]),
    ),
    account_type: Schema.NullOr(Schema.Literals(["checking", "savings"])),
    bank_name: Schema.NullOr(Schema.String),
    fingerprint: Schema.NullOr(Schema.String),
    last4: Schema.NullOr(Schema.String),
    mandate: Schema.optional(Schema.Unknown),
    network: Schema.Literals(["ach", "us_domestic_wire"]),
    routing_number: Schema.NullOr(Schema.String),
  });
export const treasury_outbound_transfers_resource_status_transitionsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    canceled_at: Schema.NullOr(Schema.Number),
    failed_at: Schema.NullOr(Schema.Number),
    posted_at: Schema.NullOr(Schema.Number),
    returned_at: Schema.NullOr(Schema.Number),
  });
export const treasury_shared_resource_initiating_payment_method_details_initiating_payment_method_detailsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    balance: Schema.optional(Schema.Literals(["payments"])),
    billing_details: Schema.suspend(
      () => treasury_shared_resource_billing_detailsSchema,
    ),
    financial_account: Schema.optional(
      Schema.suspend(
        () => received_payment_method_details_financial_accountSchema,
      ),
    ),
    issuing_card: Schema.optional(Schema.String),
    type: Schema.Literals([
      "balance",
      "financial_account",
      "issuing_card",
      "stripe",
      "us_bank_account",
    ]),
    us_bank_account: Schema.optional(
      Schema.suspend(
        () =>
          treasury_shared_resource_initiating_payment_method_details_us_bank_accountSchema,
      ),
    ),
  });
export const received_payment_method_details_financial_accountSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    network: Schema.Literals(["stripe"]),
  });
export const treasury_shared_resource_initiating_payment_method_details_us_bank_accountSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bank_name: Schema.NullOr(Schema.String),
    last4: Schema.NullOr(Schema.String),
    routing_number: Schema.NullOr(Schema.String),
  });
export const treasury_received_credits_resource_linked_flowsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    credit_reversal: Schema.NullOr(Schema.String),
    issuing_authorization: Schema.NullOr(Schema.String),
    issuing_transaction: Schema.NullOr(Schema.String),
    source_flow: Schema.NullOr(Schema.String),
    source_flow_details: Schema.optional(Schema.Unknown),
    source_flow_type: Schema.NullOr(Schema.String),
  });
export const treasury_received_debits_resource_linked_flowsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    debit_reversal: Schema.NullOr(Schema.String),
    inbound_transfer: Schema.NullOr(Schema.String),
    issuing_authorization: Schema.NullOr(Schema.String),
    issuing_transaction: Schema.NullOr(Schema.String),
    payout: Schema.NullOr(Schema.String),
    topup: Schema.NullOr(Schema.String),
  });
export const bank_accountSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  account: Schema.optional(Schema.Unknown),
  account_holder_name: Schema.NullOr(Schema.String),
  account_holder_type: Schema.NullOr(Schema.String),
  account_type: Schema.NullOr(Schema.String),
  available_payout_methods: Schema.optional(
    Schema.NullOr(Schema.Array(Schema.Literals(["instant", "standard"]))),
  ),
  bank_name: Schema.NullOr(Schema.String),
  country: Schema.String,
  currency: Schema.String,
  customer: Schema.optional(Schema.Unknown),
  default_for_currency: Schema.optional(Schema.NullOr(Schema.Boolean)),
  fingerprint: Schema.NullOr(Schema.String),
  future_requirements: Schema.optional(Schema.Unknown),
  id: Schema.String,
  last4: Schema.String,
  metadata: Schema.optional(
    Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
  ),
  object: Schema.Literals(["bank_account"]),
  requirements: Schema.optional(Schema.Unknown),
  routing_number: Schema.NullOr(Schema.String),
  status: Schema.String,
});
export const cardSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  account: Schema.optional(Schema.Unknown),
  address_city: Schema.NullOr(Schema.String),
  address_country: Schema.NullOr(Schema.String),
  address_line1: Schema.NullOr(Schema.String),
  address_line1_check: Schema.NullOr(Schema.String),
  address_line2: Schema.NullOr(Schema.String),
  address_state: Schema.NullOr(Schema.String),
  address_zip: Schema.NullOr(Schema.String),
  address_zip_check: Schema.NullOr(Schema.String),
  allow_redisplay: Schema.optional(
    Schema.NullOr(Schema.Literals(["always", "limited", "unspecified"])),
  ),
  available_payout_methods: Schema.optional(
    Schema.NullOr(Schema.Array(Schema.Literals(["instant", "standard"]))),
  ),
  brand: Schema.String,
  country: Schema.NullOr(Schema.String),
  currency: Schema.optional(Schema.NullOr(Schema.String)),
  customer: Schema.optional(Schema.Unknown),
  cvc_check: Schema.NullOr(Schema.String),
  default_for_currency: Schema.optional(Schema.NullOr(Schema.Boolean)),
  description: Schema.optional(Schema.String),
  dynamic_last4: Schema.NullOr(Schema.String),
  exp_month: Schema.Number,
  exp_year: Schema.Number,
  fingerprint: Schema.optional(Schema.NullOr(Schema.String)),
  funding: Schema.String,
  id: Schema.String,
  iin: Schema.optional(Schema.String),
  issuer: Schema.optional(Schema.String),
  last4: Schema.String,
  metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
  name: Schema.NullOr(Schema.String),
  networks: Schema.optional(Schema.suspend(() => token_card_networksSchema)),
  object: Schema.Literals(["card"]),
  regulated_status: Schema.NullOr(
    Schema.Literals(["regulated", "unregulated"]),
  ),
  status: Schema.optional(Schema.NullOr(Schema.String)),
  tokenization_method: Schema.NullOr(Schema.String),
});
export const token_card_networksSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    preferred: Schema.NullOr(Schema.String),
  });
export const topupSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  amount: Schema.Number,
  balance_transaction: Schema.Unknown,
  created: Schema.Number,
  currency: Schema.String,
  description: Schema.NullOr(Schema.String),
  expected_availability_date: Schema.NullOr(Schema.Number),
  failure_code: Schema.NullOr(Schema.String),
  failure_message: Schema.NullOr(Schema.String),
  id: Schema.String,
  livemode: Schema.Boolean,
  metadata: Schema.Record(Schema.String, Schema.String),
  object: Schema.Literals(["topup"]),
  source: Schema.Unknown,
  statement_descriptor: Schema.NullOr(Schema.String),
  status: Schema.Literals([
    "canceled",
    "failed",
    "pending",
    "reversed",
    "succeeded",
  ]),
  transfer_group: Schema.NullOr(Schema.String),
});
export const transferSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  amount: Schema.Number,
  amount_reversed: Schema.Number,
  balance_transaction: Schema.Unknown,
  created: Schema.Number,
  currency: Schema.String,
  description: Schema.NullOr(Schema.String),
  destination: Schema.Unknown,
  destination_payment: Schema.optional(Schema.Unknown),
  id: Schema.String,
  livemode: Schema.Boolean,
  metadata: Schema.Record(Schema.String, Schema.String),
  object: Schema.Literals(["transfer"]),
  reversals: Schema.Struct({
    data: Schema.Array(Schema.suspend(() => transfer_reversalSchema)),
    has_more: Schema.Boolean,
    object: Schema.Literals(["list"]),
    url: Schema.String,
  }),
  reversed: Schema.Boolean,
  source_transaction: Schema.Unknown,
  source_type: Schema.optional(Schema.String),
  transfer_group: Schema.NullOr(Schema.String),
});
export const transfer_reversalSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amount: Schema.Number,
    balance_transaction: Schema.Unknown,
    created: Schema.Number,
    currency: Schema.String,
    destination_payment_refund: Schema.Unknown,
    id: Schema.String,
    metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
    object: Schema.Literals(["transfer_reversal"]),
    source_refund: Schema.Unknown,
    transfer: Schema.Unknown,
  });
export const treasury_credit_reversalSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amount: Schema.Number,
    created: Schema.Number,
    currency: Schema.String,
    financial_account: Schema.String,
    hosted_regulatory_receipt_url: Schema.NullOr(Schema.String),
    id: Schema.String,
    livemode: Schema.Boolean,
    metadata: Schema.Record(Schema.String, Schema.String),
    network: Schema.Literals(["ach", "stripe"]),
    object: Schema.Literals(["treasury.credit_reversal"]),
    received_credit: Schema.String,
    status: Schema.Literals(["canceled", "posted", "processing"]),
    status_transitions: Schema.suspend(
      () => treasury_received_credits_resource_status_transitionsSchema,
    ),
    transaction: Schema.Unknown,
  });
export const treasury_received_credits_resource_status_transitionsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    posted_at: Schema.NullOr(Schema.Number),
  });
export const treasury_debit_reversalSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amount: Schema.Number,
    created: Schema.Number,
    currency: Schema.String,
    financial_account: Schema.NullOr(Schema.String),
    hosted_regulatory_receipt_url: Schema.NullOr(Schema.String),
    id: Schema.String,
    linked_flows: Schema.Unknown,
    livemode: Schema.Boolean,
    metadata: Schema.Record(Schema.String, Schema.String),
    network: Schema.Literals(["ach", "card"]),
    object: Schema.Literals(["treasury.debit_reversal"]),
    received_debit: Schema.String,
    status: Schema.Literals(["failed", "processing", "succeeded"]),
    status_transitions: Schema.suspend(
      () => treasury_received_debits_resource_status_transitionsSchema,
    ),
    transaction: Schema.Unknown,
  });
export const treasury_received_debits_resource_status_transitionsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    completed_at: Schema.NullOr(Schema.Number),
  });
export const treasury_financial_accountSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    active_features: Schema.optional(
      Schema.Array(
        Schema.Literals([
          "card_issuing",
          "deposit_insurance",
          "financial_addresses.aba",
          "financial_addresses.aba.forwarding",
          "inbound_transfers.ach",
          "intra_stripe_flows",
          "outbound_payments.ach",
          "outbound_payments.us_domestic_wire",
          "outbound_transfers.ach",
          "outbound_transfers.us_domestic_wire",
          "remote_deposit_capture",
        ]),
      ),
    ),
    balance: Schema.suspend(
      () => treasury_financial_accounts_resource_balanceSchema,
    ),
    country: Schema.String,
    created: Schema.Number,
    features: Schema.optional(
      Schema.suspend(() => treasury_financial_account_featuresSchema),
    ),
    financial_addresses: Schema.Array(
      Schema.suspend(
        () => treasury_financial_accounts_resource_financial_addressSchema,
      ),
    ),
    id: Schema.String,
    is_default: Schema.optional(Schema.Boolean),
    livemode: Schema.Boolean,
    metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
    nickname: Schema.optional(Schema.NullOr(Schema.String)),
    object: Schema.Literals(["treasury.financial_account"]),
    pending_features: Schema.optional(
      Schema.Array(
        Schema.Literals([
          "card_issuing",
          "deposit_insurance",
          "financial_addresses.aba",
          "financial_addresses.aba.forwarding",
          "inbound_transfers.ach",
          "intra_stripe_flows",
          "outbound_payments.ach",
          "outbound_payments.us_domestic_wire",
          "outbound_transfers.ach",
          "outbound_transfers.us_domestic_wire",
          "remote_deposit_capture",
        ]),
      ),
    ),
    platform_restrictions: Schema.optional(Schema.Unknown),
    restricted_features: Schema.optional(
      Schema.Array(
        Schema.Literals([
          "card_issuing",
          "deposit_insurance",
          "financial_addresses.aba",
          "financial_addresses.aba.forwarding",
          "inbound_transfers.ach",
          "intra_stripe_flows",
          "outbound_payments.ach",
          "outbound_payments.us_domestic_wire",
          "outbound_transfers.ach",
          "outbound_transfers.us_domestic_wire",
          "remote_deposit_capture",
        ]),
      ),
    ),
    status: Schema.Literals(["closed", "open"]),
    status_details: Schema.suspend(
      () => treasury_financial_accounts_resource_status_detailsSchema,
    ),
    supported_currencies: Schema.Array(Schema.String),
  });
export const treasury_financial_accounts_resource_balanceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cash: Schema.Record(Schema.String, Schema.Number),
    inbound_pending: Schema.Record(Schema.String, Schema.Number),
    outbound_pending: Schema.Record(Schema.String, Schema.Number),
  });
export const treasury_financial_account_featuresSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    card_issuing: Schema.optional(
      Schema.suspend(
        () => treasury_financial_accounts_resource_toggle_settingsSchema,
      ),
    ),
    deposit_insurance: Schema.optional(
      Schema.suspend(
        () => treasury_financial_accounts_resource_toggle_settingsSchema,
      ),
    ),
    financial_addresses: Schema.optional(
      Schema.suspend(
        () =>
          treasury_financial_accounts_resource_financial_addresses_featuresSchema,
      ),
    ),
    inbound_transfers: Schema.optional(
      Schema.suspend(
        () => treasury_financial_accounts_resource_inbound_transfersSchema,
      ),
    ),
    intra_stripe_flows: Schema.optional(
      Schema.suspend(
        () => treasury_financial_accounts_resource_toggle_settingsSchema,
      ),
    ),
    object: Schema.Literals(["treasury.financial_account_features"]),
    outbound_payments: Schema.optional(
      Schema.suspend(
        () => treasury_financial_accounts_resource_outbound_paymentsSchema,
      ),
    ),
    outbound_transfers: Schema.optional(
      Schema.suspend(
        () => treasury_financial_accounts_resource_outbound_transfersSchema,
      ),
    ),
  });
export const treasury_financial_accounts_resource_toggle_settingsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requested: Schema.Boolean,
    status: Schema.Literals(["active", "pending", "restricted"]),
    status_details: Schema.Array(
      Schema.suspend(
        () =>
          treasury_financial_accounts_resource_toggles_setting_status_detailsSchema,
      ),
    ),
  });
export const treasury_financial_accounts_resource_toggles_setting_status_detailsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.Literals([
      "activating",
      "capability_not_requested",
      "financial_account_closed",
      "rejected_other",
      "rejected_unsupported_business",
      "requirements_past_due",
      "requirements_pending_verification",
      "restricted_by_platform",
      "restricted_other",
    ]),
    resolution: Schema.NullOr(
      Schema.Literals([
        "contact_stripe",
        "provide_information",
        "remove_restriction",
      ]),
    ),
    restriction: Schema.optional(
      Schema.Literals(["inbound_flows", "outbound_flows"]),
    ),
  });
export const treasury_financial_accounts_resource_financial_addresses_featuresSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    aba: Schema.optional(
      Schema.suspend(
        () => treasury_financial_accounts_resource_aba_toggle_settingsSchema,
      ),
    ),
  });
export const treasury_financial_accounts_resource_aba_toggle_settingsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requested: Schema.Boolean,
    status: Schema.Literals(["active", "pending", "restricted"]),
    status_details: Schema.Array(
      Schema.suspend(
        () =>
          treasury_financial_accounts_resource_toggles_setting_status_detailsSchema,
      ),
    ),
  });
export const treasury_financial_accounts_resource_inbound_transfersSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ach: Schema.optional(
      Schema.suspend(
        () =>
          treasury_financial_accounts_resource_inbound_ach_toggle_settingsSchema,
      ),
    ),
  });
export const treasury_financial_accounts_resource_inbound_ach_toggle_settingsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requested: Schema.Boolean,
    status: Schema.Literals(["active", "pending", "restricted"]),
    status_details: Schema.Array(
      Schema.suspend(
        () =>
          treasury_financial_accounts_resource_toggles_setting_status_detailsSchema,
      ),
    ),
  });
export const treasury_financial_accounts_resource_outbound_paymentsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ach: Schema.optional(
      Schema.suspend(
        () =>
          treasury_financial_accounts_resource_outbound_ach_toggle_settingsSchema,
      ),
    ),
    us_domestic_wire: Schema.optional(
      Schema.suspend(
        () => treasury_financial_accounts_resource_toggle_settingsSchema,
      ),
    ),
  });
export const treasury_financial_accounts_resource_outbound_ach_toggle_settingsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requested: Schema.Boolean,
    status: Schema.Literals(["active", "pending", "restricted"]),
    status_details: Schema.Array(
      Schema.suspend(
        () =>
          treasury_financial_accounts_resource_toggles_setting_status_detailsSchema,
      ),
    ),
  });
export const treasury_financial_accounts_resource_outbound_transfersSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ach: Schema.optional(
      Schema.suspend(
        () =>
          treasury_financial_accounts_resource_outbound_ach_toggle_settingsSchema,
      ),
    ),
    us_domestic_wire: Schema.optional(
      Schema.suspend(
        () => treasury_financial_accounts_resource_toggle_settingsSchema,
      ),
    ),
  });
export const treasury_financial_accounts_resource_financial_addressSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    aba: Schema.optional(
      Schema.suspend(
        () => treasury_financial_accounts_resource_aba_recordSchema,
      ),
    ),
    supported_networks: Schema.optional(
      Schema.Array(Schema.Literals(["ach", "us_domestic_wire"])),
    ),
    type: Schema.Literals(["aba"]),
  });
export const treasury_financial_accounts_resource_aba_recordSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    account_holder_name: Schema.String,
    account_number: Schema.optional(Schema.NullOr(Schema.String)),
    account_number_last4: Schema.String,
    bank_name: Schema.String,
    routing_number: Schema.String,
  });
export const treasury_financial_accounts_resource_status_detailsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    closed: Schema.Unknown,
  });
export const treasury_inbound_transferSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amount: Schema.Number,
    cancelable: Schema.Boolean,
    created: Schema.Number,
    currency: Schema.String,
    description: Schema.NullOr(Schema.String),
    failure_details: Schema.Unknown,
    financial_account: Schema.String,
    hosted_regulatory_receipt_url: Schema.NullOr(Schema.String),
    id: Schema.String,
    linked_flows: Schema.suspend(
      () =>
        treasury_inbound_transfers_resource_inbound_transfer_resource_linked_flowsSchema,
    ),
    livemode: Schema.Boolean,
    metadata: Schema.Record(Schema.String, Schema.String),
    object: Schema.Literals(["treasury.inbound_transfer"]),
    origin_payment_method: Schema.NullOr(Schema.String),
    origin_payment_method_details: Schema.Unknown,
    returned: Schema.NullOr(Schema.Boolean),
    statement_descriptor: Schema.String,
    status: Schema.Literals(["canceled", "failed", "processing", "succeeded"]),
    status_transitions: Schema.suspend(
      () =>
        treasury_inbound_transfers_resource_inbound_transfer_resource_status_transitionsSchema,
    ),
    transaction: Schema.Unknown,
  });
export const treasury_outbound_paymentSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amount: Schema.Number,
    cancelable: Schema.Boolean,
    created: Schema.Number,
    currency: Schema.String,
    customer: Schema.NullOr(Schema.String),
    description: Schema.NullOr(Schema.String),
    destination_payment_method: Schema.NullOr(Schema.String),
    destination_payment_method_details: Schema.Unknown,
    end_user_details: Schema.Unknown,
    expected_arrival_date: Schema.Number,
    financial_account: Schema.String,
    hosted_regulatory_receipt_url: Schema.NullOr(Schema.String),
    id: Schema.String,
    livemode: Schema.Boolean,
    metadata: Schema.Record(Schema.String, Schema.String),
    object: Schema.Literals(["treasury.outbound_payment"]),
    returned_details: Schema.Unknown,
    statement_descriptor: Schema.String,
    status: Schema.Literals([
      "canceled",
      "failed",
      "posted",
      "processing",
      "returned",
    ]),
    status_transitions: Schema.suspend(
      () =>
        treasury_outbound_payments_resource_outbound_payment_resource_status_transitionsSchema,
    ),
    tracking_details: Schema.Unknown,
    transaction: Schema.Unknown,
  });
export const treasury_outbound_transferSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amount: Schema.Number,
    cancelable: Schema.Boolean,
    created: Schema.Number,
    currency: Schema.String,
    description: Schema.NullOr(Schema.String),
    destination_payment_method: Schema.NullOr(Schema.String),
    destination_payment_method_details: Schema.suspend(
      () => outbound_transfers_payment_method_detailsSchema,
    ),
    expected_arrival_date: Schema.Number,
    financial_account: Schema.String,
    hosted_regulatory_receipt_url: Schema.NullOr(Schema.String),
    id: Schema.String,
    livemode: Schema.Boolean,
    metadata: Schema.Record(Schema.String, Schema.String),
    object: Schema.Literals(["treasury.outbound_transfer"]),
    returned_details: Schema.Unknown,
    statement_descriptor: Schema.String,
    status: Schema.Literals([
      "canceled",
      "failed",
      "posted",
      "processing",
      "returned",
    ]),
    status_transitions: Schema.suspend(
      () => treasury_outbound_transfers_resource_status_transitionsSchema,
    ),
    tracking_details: Schema.Unknown,
    transaction: Schema.Unknown,
  });
export const treasury_received_creditSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amount: Schema.Number,
    created: Schema.Number,
    currency: Schema.String,
    description: Schema.String,
    failure_code: Schema.NullOr(
      Schema.Literals([
        "account_closed",
        "account_frozen",
        "international_transaction",
        "other",
      ]),
    ),
    financial_account: Schema.NullOr(Schema.String),
    hosted_regulatory_receipt_url: Schema.NullOr(Schema.String),
    id: Schema.String,
    initiating_payment_method_details: Schema.suspend(
      () =>
        treasury_shared_resource_initiating_payment_method_details_initiating_payment_method_detailsSchema,
    ),
    linked_flows: Schema.suspend(
      () => treasury_received_credits_resource_linked_flowsSchema,
    ),
    livemode: Schema.Boolean,
    network: Schema.Literals(["ach", "card", "stripe", "us_domestic_wire"]),
    object: Schema.Literals(["treasury.received_credit"]),
    reversal_details: Schema.Unknown,
    status: Schema.Literals(["failed", "succeeded"]),
    transaction: Schema.Unknown,
  });
export const treasury_received_debitSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amount: Schema.Number,
    created: Schema.Number,
    currency: Schema.String,
    description: Schema.String,
    failure_code: Schema.NullOr(
      Schema.Literals([
        "account_closed",
        "account_frozen",
        "insufficient_funds",
        "international_transaction",
        "other",
      ]),
    ),
    financial_account: Schema.NullOr(Schema.String),
    hosted_regulatory_receipt_url: Schema.NullOr(Schema.String),
    id: Schema.String,
    initiating_payment_method_details: Schema.optional(
      Schema.suspend(
        () =>
          treasury_shared_resource_initiating_payment_method_details_initiating_payment_method_detailsSchema,
      ),
    ),
    linked_flows: Schema.suspend(
      () => treasury_received_debits_resource_linked_flowsSchema,
    ),
    livemode: Schema.Boolean,
    network: Schema.Literals(["ach", "card", "stripe"]),
    object: Schema.Literals(["treasury.received_debit"]),
    reversal_details: Schema.Unknown,
    status: Schema.Literals(["failed", "succeeded"]),
    transaction: Schema.Unknown,
  });
export const treasury_transaction_entrySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    balance_impact: Schema.suspend(
      () => treasury_transactions_resource_balance_impactSchema,
    ),
    created: Schema.Number,
    currency: Schema.String,
    effective_at: Schema.Number,
    financial_account: Schema.String,
    flow: Schema.NullOr(Schema.String),
    flow_details: Schema.optional(Schema.Unknown),
    flow_type: Schema.Literals([
      "credit_reversal",
      "debit_reversal",
      "inbound_transfer",
      "issuing_authorization",
      "other",
      "outbound_payment",
      "outbound_transfer",
      "received_credit",
      "received_debit",
    ]),
    id: Schema.String,
    livemode: Schema.Boolean,
    object: Schema.Literals(["treasury.transaction_entry"]),
    transaction: Schema.Unknown,
    type: Schema.Literals([
      "credit_reversal",
      "credit_reversal_posting",
      "debit_reversal",
      "inbound_transfer",
      "inbound_transfer_return",
      "issuing_authorization_hold",
      "issuing_authorization_release",
      "other",
      "outbound_payment",
      "outbound_payment_cancellation",
      "outbound_payment_failure",
      "outbound_payment_posting",
      "outbound_payment_return",
      "outbound_transfer",
      "outbound_transfer_cancellation",
      "outbound_transfer_failure",
      "outbound_transfer_posting",
      "outbound_transfer_return",
      "received_credit",
      "received_debit",
    ]),
  });
export const treasury_transactions_resource_balance_impactSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cash: Schema.Number,
    inbound_pending: Schema.Number,
    outbound_pending: Schema.Number,
  });
export const treasury_transactionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amount: Schema.Number,
    balance_impact: Schema.suspend(
      () => treasury_transactions_resource_balance_impactSchema,
    ),
    created: Schema.Number,
    currency: Schema.String,
    description: Schema.String,
    entries: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          data: Schema.Array(
            Schema.suspend(() => treasury_transaction_entrySchema),
          ),
          has_more: Schema.Boolean,
          object: Schema.Literals(["list"]),
          url: Schema.String,
        }),
      ),
    ),
    financial_account: Schema.String,
    flow: Schema.NullOr(Schema.String),
    flow_details: Schema.optional(Schema.Unknown),
    flow_type: Schema.Literals([
      "credit_reversal",
      "debit_reversal",
      "inbound_transfer",
      "issuing_authorization",
      "other",
      "outbound_payment",
      "outbound_transfer",
      "received_credit",
      "received_debit",
    ]),
    id: Schema.String,
    livemode: Schema.Boolean,
    object: Schema.Literals(["treasury.transaction"]),
    status: Schema.Literals(["open", "posted", "void"]),
    status_transitions: Schema.suspend(
      () =>
        treasury_transactions_resource_abstract_transaction_resource_status_transitionsSchema,
    ),
  });
export const treasury_transactions_resource_abstract_transaction_resource_status_transitionsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    posted_at: Schema.NullOr(Schema.Number),
    void_at: Schema.NullOr(Schema.Number),
  });
export const webhook_endpointSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    api_version: Schema.NullOr(Schema.String),
    application: Schema.NullOr(Schema.String),
    created: Schema.Number,
    description: Schema.NullOr(Schema.String),
    enabled_events: Schema.Array(Schema.String),
    id: Schema.String,
    livemode: Schema.Boolean,
    metadata: Schema.Record(Schema.String, Schema.String),
    object: Schema.Literals(["webhook_endpoint"]),
    secret: Schema.optional(SensitiveOutputString),
    status: Schema.String,
    url: Schema.String,
  },
);
export const v2_core_accountSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  applied_configurations: Schema.Array(
    Schema.Literals(["customer", "merchant", "recipient"]),
  ),
  closed: Schema.optional(Schema.Boolean),
  configuration: Schema.optional(
    Schema.Struct({
      customer: Schema.optional(
        Schema.Struct({
          applied: Schema.Boolean,
          automatic_indirect_tax: Schema.optional(
            Schema.Struct({
              exempt: Schema.optional(
                Schema.Literals(["exempt", "none", "reverse"]),
              ),
              ip_address: Schema.optional(Schema.String),
              location: Schema.optional(
                Schema.Struct({
                  country: Schema.optional(Schema.String),
                  state: Schema.optional(Schema.String),
                }),
              ),
              location_source: Schema.optional(
                Schema.Literals([
                  "identity_address",
                  "ip_address",
                  "payment_method",
                  "shipping_address",
                ]),
              ),
            }),
          ),
          billing: Schema.optional(
            Schema.Struct({
              default_payment_method: Schema.optional(Schema.String),
              invoice: Schema.optional(
                Schema.Struct({
                  custom_fields: Schema.Array(
                    Schema.Struct({
                      name: Schema.String,
                      value: Schema.String,
                    }),
                  ),
                  footer: Schema.optional(Schema.String),
                  next_sequence: Schema.optional(Schema.Number),
                  prefix: Schema.optional(Schema.String),
                  rendering: Schema.optional(
                    Schema.Struct({
                      amount_tax_display: Schema.optional(
                        Schema.Literals([
                          "exclude_tax",
                          "include_inclusive_tax",
                        ]),
                      ),
                      template: Schema.optional(Schema.String),
                    }),
                  ),
                }),
              ),
            }),
          ),
          capabilities: Schema.optional(
            Schema.Struct({
              automatic_indirect_tax: Schema.optional(
                Schema.Struct({
                  status: Schema.Literals([
                    "active",
                    "pending",
                    "restricted",
                    "unsupported",
                  ]),
                  status_details: Schema.Array(
                    Schema.Struct({
                      code: Schema.Literals([
                        "determining_status",
                        "requirements_past_due",
                        "requirements_pending_verification",
                        "restricted_other",
                        "unsupported_business",
                        "unsupported_country",
                        "unsupported_entity_type",
                      ]),
                      resolution: Schema.Literals([
                        "contact_stripe",
                        "no_resolution",
                        "provide_info",
                      ]),
                    }),
                  ),
                }),
              ),
            }),
          ),
          shipping: Schema.optional(
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
              name: Schema.optional(Schema.String),
              phone: Schema.optional(Schema.String),
            }),
          ),
          test_clock: Schema.optional(Schema.String),
        }),
      ),
      merchant: Schema.optional(
        Schema.Struct({
          applied: Schema.Boolean,
          bacs_debit_payments: Schema.optional(
            Schema.Struct({
              display_name: Schema.optional(Schema.String),
              service_user_number: Schema.optional(Schema.String),
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
          capabilities: Schema.optional(
            Schema.Struct({
              ach_debit_payments: Schema.optional(
                Schema.Struct({
                  status: Schema.Literals([
                    "active",
                    "pending",
                    "restricted",
                    "unsupported",
                  ]),
                  status_details: Schema.Array(
                    Schema.Struct({
                      code: Schema.Literals([
                        "determining_status",
                        "requirements_past_due",
                        "requirements_pending_verification",
                        "restricted_other",
                        "unsupported_business",
                        "unsupported_country",
                        "unsupported_entity_type",
                      ]),
                      resolution: Schema.Literals([
                        "contact_stripe",
                        "no_resolution",
                        "provide_info",
                      ]),
                    }),
                  ),
                }),
              ),
              acss_debit_payments: Schema.optional(
                Schema.Struct({
                  status: Schema.Literals([
                    "active",
                    "pending",
                    "restricted",
                    "unsupported",
                  ]),
                  status_details: Schema.Array(
                    Schema.Struct({
                      code: Schema.Literals([
                        "determining_status",
                        "requirements_past_due",
                        "requirements_pending_verification",
                        "restricted_other",
                        "unsupported_business",
                        "unsupported_country",
                        "unsupported_entity_type",
                      ]),
                      resolution: Schema.Literals([
                        "contact_stripe",
                        "no_resolution",
                        "provide_info",
                      ]),
                    }),
                  ),
                }),
              ),
              affirm_payments: Schema.optional(
                Schema.Struct({
                  status: Schema.Literals([
                    "active",
                    "pending",
                    "restricted",
                    "unsupported",
                  ]),
                  status_details: Schema.Array(
                    Schema.Struct({
                      code: Schema.Literals([
                        "determining_status",
                        "requirements_past_due",
                        "requirements_pending_verification",
                        "restricted_other",
                        "unsupported_business",
                        "unsupported_country",
                        "unsupported_entity_type",
                      ]),
                      resolution: Schema.Literals([
                        "contact_stripe",
                        "no_resolution",
                        "provide_info",
                      ]),
                    }),
                  ),
                }),
              ),
              afterpay_clearpay_payments: Schema.optional(
                Schema.Struct({
                  status: Schema.Literals([
                    "active",
                    "pending",
                    "restricted",
                    "unsupported",
                  ]),
                  status_details: Schema.Array(
                    Schema.Struct({
                      code: Schema.Literals([
                        "determining_status",
                        "requirements_past_due",
                        "requirements_pending_verification",
                        "restricted_other",
                        "unsupported_business",
                        "unsupported_country",
                        "unsupported_entity_type",
                      ]),
                      resolution: Schema.Literals([
                        "contact_stripe",
                        "no_resolution",
                        "provide_info",
                      ]),
                    }),
                  ),
                }),
              ),
              alma_payments: Schema.optional(
                Schema.Struct({
                  status: Schema.Literals([
                    "active",
                    "pending",
                    "restricted",
                    "unsupported",
                  ]),
                  status_details: Schema.Array(
                    Schema.Struct({
                      code: Schema.Literals([
                        "determining_status",
                        "requirements_past_due",
                        "requirements_pending_verification",
                        "restricted_other",
                        "unsupported_business",
                        "unsupported_country",
                        "unsupported_entity_type",
                      ]),
                      resolution: Schema.Literals([
                        "contact_stripe",
                        "no_resolution",
                        "provide_info",
                      ]),
                    }),
                  ),
                }),
              ),
              amazon_pay_payments: Schema.optional(
                Schema.Struct({
                  status: Schema.Literals([
                    "active",
                    "pending",
                    "restricted",
                    "unsupported",
                  ]),
                  status_details: Schema.Array(
                    Schema.Struct({
                      code: Schema.Literals([
                        "determining_status",
                        "requirements_past_due",
                        "requirements_pending_verification",
                        "restricted_other",
                        "unsupported_business",
                        "unsupported_country",
                        "unsupported_entity_type",
                      ]),
                      resolution: Schema.Literals([
                        "contact_stripe",
                        "no_resolution",
                        "provide_info",
                      ]),
                    }),
                  ),
                }),
              ),
              au_becs_debit_payments: Schema.optional(
                Schema.Struct({
                  status: Schema.Literals([
                    "active",
                    "pending",
                    "restricted",
                    "unsupported",
                  ]),
                  status_details: Schema.Array(
                    Schema.Struct({
                      code: Schema.Literals([
                        "determining_status",
                        "requirements_past_due",
                        "requirements_pending_verification",
                        "restricted_other",
                        "unsupported_business",
                        "unsupported_country",
                        "unsupported_entity_type",
                      ]),
                      resolution: Schema.Literals([
                        "contact_stripe",
                        "no_resolution",
                        "provide_info",
                      ]),
                    }),
                  ),
                }),
              ),
              bacs_debit_payments: Schema.optional(
                Schema.Struct({
                  status: Schema.Literals([
                    "active",
                    "pending",
                    "restricted",
                    "unsupported",
                  ]),
                  status_details: Schema.Array(
                    Schema.Struct({
                      code: Schema.Literals([
                        "determining_status",
                        "requirements_past_due",
                        "requirements_pending_verification",
                        "restricted_other",
                        "unsupported_business",
                        "unsupported_country",
                        "unsupported_entity_type",
                      ]),
                      resolution: Schema.Literals([
                        "contact_stripe",
                        "no_resolution",
                        "provide_info",
                      ]),
                    }),
                  ),
                }),
              ),
              bancontact_payments: Schema.optional(
                Schema.Struct({
                  status: Schema.Literals([
                    "active",
                    "pending",
                    "restricted",
                    "unsupported",
                  ]),
                  status_details: Schema.Array(
                    Schema.Struct({
                      code: Schema.Literals([
                        "determining_status",
                        "requirements_past_due",
                        "requirements_pending_verification",
                        "restricted_other",
                        "unsupported_business",
                        "unsupported_country",
                        "unsupported_entity_type",
                      ]),
                      resolution: Schema.Literals([
                        "contact_stripe",
                        "no_resolution",
                        "provide_info",
                      ]),
                    }),
                  ),
                }),
              ),
              blik_payments: Schema.optional(
                Schema.Struct({
                  status: Schema.Literals([
                    "active",
                    "pending",
                    "restricted",
                    "unsupported",
                  ]),
                  status_details: Schema.Array(
                    Schema.Struct({
                      code: Schema.Literals([
                        "determining_status",
                        "requirements_past_due",
                        "requirements_pending_verification",
                        "restricted_other",
                        "unsupported_business",
                        "unsupported_country",
                        "unsupported_entity_type",
                      ]),
                      resolution: Schema.Literals([
                        "contact_stripe",
                        "no_resolution",
                        "provide_info",
                      ]),
                    }),
                  ),
                }),
              ),
              boleto_payments: Schema.optional(
                Schema.Struct({
                  status: Schema.Literals([
                    "active",
                    "pending",
                    "restricted",
                    "unsupported",
                  ]),
                  status_details: Schema.Array(
                    Schema.Struct({
                      code: Schema.Literals([
                        "determining_status",
                        "requirements_past_due",
                        "requirements_pending_verification",
                        "restricted_other",
                        "unsupported_business",
                        "unsupported_country",
                        "unsupported_entity_type",
                      ]),
                      resolution: Schema.Literals([
                        "contact_stripe",
                        "no_resolution",
                        "provide_info",
                      ]),
                    }),
                  ),
                }),
              ),
              card_payments: Schema.optional(
                Schema.Struct({
                  status: Schema.Literals([
                    "active",
                    "pending",
                    "restricted",
                    "unsupported",
                  ]),
                  status_details: Schema.Array(
                    Schema.Struct({
                      code: Schema.Literals([
                        "determining_status",
                        "requirements_past_due",
                        "requirements_pending_verification",
                        "restricted_other",
                        "unsupported_business",
                        "unsupported_country",
                        "unsupported_entity_type",
                      ]),
                      resolution: Schema.Literals([
                        "contact_stripe",
                        "no_resolution",
                        "provide_info",
                      ]),
                    }),
                  ),
                }),
              ),
              cartes_bancaires_payments: Schema.optional(
                Schema.Struct({
                  status: Schema.Literals([
                    "active",
                    "pending",
                    "restricted",
                    "unsupported",
                  ]),
                  status_details: Schema.Array(
                    Schema.Struct({
                      code: Schema.Literals([
                        "determining_status",
                        "requirements_past_due",
                        "requirements_pending_verification",
                        "restricted_other",
                        "unsupported_business",
                        "unsupported_country",
                        "unsupported_entity_type",
                      ]),
                      resolution: Schema.Literals([
                        "contact_stripe",
                        "no_resolution",
                        "provide_info",
                      ]),
                    }),
                  ),
                }),
              ),
              cashapp_payments: Schema.optional(
                Schema.Struct({
                  status: Schema.Literals([
                    "active",
                    "pending",
                    "restricted",
                    "unsupported",
                  ]),
                  status_details: Schema.Array(
                    Schema.Struct({
                      code: Schema.Literals([
                        "determining_status",
                        "requirements_past_due",
                        "requirements_pending_verification",
                        "restricted_other",
                        "unsupported_business",
                        "unsupported_country",
                        "unsupported_entity_type",
                      ]),
                      resolution: Schema.Literals([
                        "contact_stripe",
                        "no_resolution",
                        "provide_info",
                      ]),
                    }),
                  ),
                }),
              ),
              eps_payments: Schema.optional(
                Schema.Struct({
                  status: Schema.Literals([
                    "active",
                    "pending",
                    "restricted",
                    "unsupported",
                  ]),
                  status_details: Schema.Array(
                    Schema.Struct({
                      code: Schema.Literals([
                        "determining_status",
                        "requirements_past_due",
                        "requirements_pending_verification",
                        "restricted_other",
                        "unsupported_business",
                        "unsupported_country",
                        "unsupported_entity_type",
                      ]),
                      resolution: Schema.Literals([
                        "contact_stripe",
                        "no_resolution",
                        "provide_info",
                      ]),
                    }),
                  ),
                }),
              ),
              fpx_payments: Schema.optional(
                Schema.Struct({
                  status: Schema.Literals([
                    "active",
                    "pending",
                    "restricted",
                    "unsupported",
                  ]),
                  status_details: Schema.Array(
                    Schema.Struct({
                      code: Schema.Literals([
                        "determining_status",
                        "requirements_past_due",
                        "requirements_pending_verification",
                        "restricted_other",
                        "unsupported_business",
                        "unsupported_country",
                        "unsupported_entity_type",
                      ]),
                      resolution: Schema.Literals([
                        "contact_stripe",
                        "no_resolution",
                        "provide_info",
                      ]),
                    }),
                  ),
                }),
              ),
              gb_bank_transfer_payments: Schema.optional(
                Schema.Struct({
                  status: Schema.Literals([
                    "active",
                    "pending",
                    "restricted",
                    "unsupported",
                  ]),
                  status_details: Schema.Array(
                    Schema.Struct({
                      code: Schema.Literals([
                        "determining_status",
                        "requirements_past_due",
                        "requirements_pending_verification",
                        "restricted_other",
                        "unsupported_business",
                        "unsupported_country",
                        "unsupported_entity_type",
                      ]),
                      resolution: Schema.Literals([
                        "contact_stripe",
                        "no_resolution",
                        "provide_info",
                      ]),
                    }),
                  ),
                }),
              ),
              grabpay_payments: Schema.optional(
                Schema.Struct({
                  status: Schema.Literals([
                    "active",
                    "pending",
                    "restricted",
                    "unsupported",
                  ]),
                  status_details: Schema.Array(
                    Schema.Struct({
                      code: Schema.Literals([
                        "determining_status",
                        "requirements_past_due",
                        "requirements_pending_verification",
                        "restricted_other",
                        "unsupported_business",
                        "unsupported_country",
                        "unsupported_entity_type",
                      ]),
                      resolution: Schema.Literals([
                        "contact_stripe",
                        "no_resolution",
                        "provide_info",
                      ]),
                    }),
                  ),
                }),
              ),
              ideal_payments: Schema.optional(
                Schema.Struct({
                  status: Schema.Literals([
                    "active",
                    "pending",
                    "restricted",
                    "unsupported",
                  ]),
                  status_details: Schema.Array(
                    Schema.Struct({
                      code: Schema.Literals([
                        "determining_status",
                        "requirements_past_due",
                        "requirements_pending_verification",
                        "restricted_other",
                        "unsupported_business",
                        "unsupported_country",
                        "unsupported_entity_type",
                      ]),
                      resolution: Schema.Literals([
                        "contact_stripe",
                        "no_resolution",
                        "provide_info",
                      ]),
                    }),
                  ),
                }),
              ),
              jcb_payments: Schema.optional(
                Schema.Struct({
                  status: Schema.Literals([
                    "active",
                    "pending",
                    "restricted",
                    "unsupported",
                  ]),
                  status_details: Schema.Array(
                    Schema.Struct({
                      code: Schema.Literals([
                        "determining_status",
                        "requirements_past_due",
                        "requirements_pending_verification",
                        "restricted_other",
                        "unsupported_business",
                        "unsupported_country",
                        "unsupported_entity_type",
                      ]),
                      resolution: Schema.Literals([
                        "contact_stripe",
                        "no_resolution",
                        "provide_info",
                      ]),
                    }),
                  ),
                }),
              ),
              jp_bank_transfer_payments: Schema.optional(
                Schema.Struct({
                  status: Schema.Literals([
                    "active",
                    "pending",
                    "restricted",
                    "unsupported",
                  ]),
                  status_details: Schema.Array(
                    Schema.Struct({
                      code: Schema.Literals([
                        "determining_status",
                        "requirements_past_due",
                        "requirements_pending_verification",
                        "restricted_other",
                        "unsupported_business",
                        "unsupported_country",
                        "unsupported_entity_type",
                      ]),
                      resolution: Schema.Literals([
                        "contact_stripe",
                        "no_resolution",
                        "provide_info",
                      ]),
                    }),
                  ),
                }),
              ),
              kakao_pay_payments: Schema.optional(
                Schema.Struct({
                  status: Schema.Literals([
                    "active",
                    "pending",
                    "restricted",
                    "unsupported",
                  ]),
                  status_details: Schema.Array(
                    Schema.Struct({
                      code: Schema.Literals([
                        "determining_status",
                        "requirements_past_due",
                        "requirements_pending_verification",
                        "restricted_other",
                        "unsupported_business",
                        "unsupported_country",
                        "unsupported_entity_type",
                      ]),
                      resolution: Schema.Literals([
                        "contact_stripe",
                        "no_resolution",
                        "provide_info",
                      ]),
                    }),
                  ),
                }),
              ),
              klarna_payments: Schema.optional(
                Schema.Struct({
                  status: Schema.Literals([
                    "active",
                    "pending",
                    "restricted",
                    "unsupported",
                  ]),
                  status_details: Schema.Array(
                    Schema.Struct({
                      code: Schema.Literals([
                        "determining_status",
                        "requirements_past_due",
                        "requirements_pending_verification",
                        "restricted_other",
                        "unsupported_business",
                        "unsupported_country",
                        "unsupported_entity_type",
                      ]),
                      resolution: Schema.Literals([
                        "contact_stripe",
                        "no_resolution",
                        "provide_info",
                      ]),
                    }),
                  ),
                }),
              ),
              konbini_payments: Schema.optional(
                Schema.Struct({
                  status: Schema.Literals([
                    "active",
                    "pending",
                    "restricted",
                    "unsupported",
                  ]),
                  status_details: Schema.Array(
                    Schema.Struct({
                      code: Schema.Literals([
                        "determining_status",
                        "requirements_past_due",
                        "requirements_pending_verification",
                        "restricted_other",
                        "unsupported_business",
                        "unsupported_country",
                        "unsupported_entity_type",
                      ]),
                      resolution: Schema.Literals([
                        "contact_stripe",
                        "no_resolution",
                        "provide_info",
                      ]),
                    }),
                  ),
                }),
              ),
              kr_card_payments: Schema.optional(
                Schema.Struct({
                  status: Schema.Literals([
                    "active",
                    "pending",
                    "restricted",
                    "unsupported",
                  ]),
                  status_details: Schema.Array(
                    Schema.Struct({
                      code: Schema.Literals([
                        "determining_status",
                        "requirements_past_due",
                        "requirements_pending_verification",
                        "restricted_other",
                        "unsupported_business",
                        "unsupported_country",
                        "unsupported_entity_type",
                      ]),
                      resolution: Schema.Literals([
                        "contact_stripe",
                        "no_resolution",
                        "provide_info",
                      ]),
                    }),
                  ),
                }),
              ),
              link_payments: Schema.optional(
                Schema.Struct({
                  status: Schema.Literals([
                    "active",
                    "pending",
                    "restricted",
                    "unsupported",
                  ]),
                  status_details: Schema.Array(
                    Schema.Struct({
                      code: Schema.Literals([
                        "determining_status",
                        "requirements_past_due",
                        "requirements_pending_verification",
                        "restricted_other",
                        "unsupported_business",
                        "unsupported_country",
                        "unsupported_entity_type",
                      ]),
                      resolution: Schema.Literals([
                        "contact_stripe",
                        "no_resolution",
                        "provide_info",
                      ]),
                    }),
                  ),
                }),
              ),
              mobilepay_payments: Schema.optional(
                Schema.Struct({
                  status: Schema.Literals([
                    "active",
                    "pending",
                    "restricted",
                    "unsupported",
                  ]),
                  status_details: Schema.Array(
                    Schema.Struct({
                      code: Schema.Literals([
                        "determining_status",
                        "requirements_past_due",
                        "requirements_pending_verification",
                        "restricted_other",
                        "unsupported_business",
                        "unsupported_country",
                        "unsupported_entity_type",
                      ]),
                      resolution: Schema.Literals([
                        "contact_stripe",
                        "no_resolution",
                        "provide_info",
                      ]),
                    }),
                  ),
                }),
              ),
              multibanco_payments: Schema.optional(
                Schema.Struct({
                  status: Schema.Literals([
                    "active",
                    "pending",
                    "restricted",
                    "unsupported",
                  ]),
                  status_details: Schema.Array(
                    Schema.Struct({
                      code: Schema.Literals([
                        "determining_status",
                        "requirements_past_due",
                        "requirements_pending_verification",
                        "restricted_other",
                        "unsupported_business",
                        "unsupported_country",
                        "unsupported_entity_type",
                      ]),
                      resolution: Schema.Literals([
                        "contact_stripe",
                        "no_resolution",
                        "provide_info",
                      ]),
                    }),
                  ),
                }),
              ),
              mx_bank_transfer_payments: Schema.optional(
                Schema.Struct({
                  status: Schema.Literals([
                    "active",
                    "pending",
                    "restricted",
                    "unsupported",
                  ]),
                  status_details: Schema.Array(
                    Schema.Struct({
                      code: Schema.Literals([
                        "determining_status",
                        "requirements_past_due",
                        "requirements_pending_verification",
                        "restricted_other",
                        "unsupported_business",
                        "unsupported_country",
                        "unsupported_entity_type",
                      ]),
                      resolution: Schema.Literals([
                        "contact_stripe",
                        "no_resolution",
                        "provide_info",
                      ]),
                    }),
                  ),
                }),
              ),
              naver_pay_payments: Schema.optional(
                Schema.Struct({
                  status: Schema.Literals([
                    "active",
                    "pending",
                    "restricted",
                    "unsupported",
                  ]),
                  status_details: Schema.Array(
                    Schema.Struct({
                      code: Schema.Literals([
                        "determining_status",
                        "requirements_past_due",
                        "requirements_pending_verification",
                        "restricted_other",
                        "unsupported_business",
                        "unsupported_country",
                        "unsupported_entity_type",
                      ]),
                      resolution: Schema.Literals([
                        "contact_stripe",
                        "no_resolution",
                        "provide_info",
                      ]),
                    }),
                  ),
                }),
              ),
              oxxo_payments: Schema.optional(
                Schema.Struct({
                  status: Schema.Literals([
                    "active",
                    "pending",
                    "restricted",
                    "unsupported",
                  ]),
                  status_details: Schema.Array(
                    Schema.Struct({
                      code: Schema.Literals([
                        "determining_status",
                        "requirements_past_due",
                        "requirements_pending_verification",
                        "restricted_other",
                        "unsupported_business",
                        "unsupported_country",
                        "unsupported_entity_type",
                      ]),
                      resolution: Schema.Literals([
                        "contact_stripe",
                        "no_resolution",
                        "provide_info",
                      ]),
                    }),
                  ),
                }),
              ),
              p24_payments: Schema.optional(
                Schema.Struct({
                  status: Schema.Literals([
                    "active",
                    "pending",
                    "restricted",
                    "unsupported",
                  ]),
                  status_details: Schema.Array(
                    Schema.Struct({
                      code: Schema.Literals([
                        "determining_status",
                        "requirements_past_due",
                        "requirements_pending_verification",
                        "restricted_other",
                        "unsupported_business",
                        "unsupported_country",
                        "unsupported_entity_type",
                      ]),
                      resolution: Schema.Literals([
                        "contact_stripe",
                        "no_resolution",
                        "provide_info",
                      ]),
                    }),
                  ),
                }),
              ),
              pay_by_bank_payments: Schema.optional(
                Schema.Struct({
                  status: Schema.Literals([
                    "active",
                    "pending",
                    "restricted",
                    "unsupported",
                  ]),
                  status_details: Schema.Array(
                    Schema.Struct({
                      code: Schema.Literals([
                        "determining_status",
                        "requirements_past_due",
                        "requirements_pending_verification",
                        "restricted_other",
                        "unsupported_business",
                        "unsupported_country",
                        "unsupported_entity_type",
                      ]),
                      resolution: Schema.Literals([
                        "contact_stripe",
                        "no_resolution",
                        "provide_info",
                      ]),
                    }),
                  ),
                }),
              ),
              payco_payments: Schema.optional(
                Schema.Struct({
                  status: Schema.Literals([
                    "active",
                    "pending",
                    "restricted",
                    "unsupported",
                  ]),
                  status_details: Schema.Array(
                    Schema.Struct({
                      code: Schema.Literals([
                        "determining_status",
                        "requirements_past_due",
                        "requirements_pending_verification",
                        "restricted_other",
                        "unsupported_business",
                        "unsupported_country",
                        "unsupported_entity_type",
                      ]),
                      resolution: Schema.Literals([
                        "contact_stripe",
                        "no_resolution",
                        "provide_info",
                      ]),
                    }),
                  ),
                }),
              ),
              paynow_payments: Schema.optional(
                Schema.Struct({
                  status: Schema.Literals([
                    "active",
                    "pending",
                    "restricted",
                    "unsupported",
                  ]),
                  status_details: Schema.Array(
                    Schema.Struct({
                      code: Schema.Literals([
                        "determining_status",
                        "requirements_past_due",
                        "requirements_pending_verification",
                        "restricted_other",
                        "unsupported_business",
                        "unsupported_country",
                        "unsupported_entity_type",
                      ]),
                      resolution: Schema.Literals([
                        "contact_stripe",
                        "no_resolution",
                        "provide_info",
                      ]),
                    }),
                  ),
                }),
              ),
              promptpay_payments: Schema.optional(
                Schema.Struct({
                  status: Schema.Literals([
                    "active",
                    "pending",
                    "restricted",
                    "unsupported",
                  ]),
                  status_details: Schema.Array(
                    Schema.Struct({
                      code: Schema.Literals([
                        "determining_status",
                        "requirements_past_due",
                        "requirements_pending_verification",
                        "restricted_other",
                        "unsupported_business",
                        "unsupported_country",
                        "unsupported_entity_type",
                      ]),
                      resolution: Schema.Literals([
                        "contact_stripe",
                        "no_resolution",
                        "provide_info",
                      ]),
                    }),
                  ),
                }),
              ),
              revolut_pay_payments: Schema.optional(
                Schema.Struct({
                  status: Schema.Literals([
                    "active",
                    "pending",
                    "restricted",
                    "unsupported",
                  ]),
                  status_details: Schema.Array(
                    Schema.Struct({
                      code: Schema.Literals([
                        "determining_status",
                        "requirements_past_due",
                        "requirements_pending_verification",
                        "restricted_other",
                        "unsupported_business",
                        "unsupported_country",
                        "unsupported_entity_type",
                      ]),
                      resolution: Schema.Literals([
                        "contact_stripe",
                        "no_resolution",
                        "provide_info",
                      ]),
                    }),
                  ),
                }),
              ),
              samsung_pay_payments: Schema.optional(
                Schema.Struct({
                  status: Schema.Literals([
                    "active",
                    "pending",
                    "restricted",
                    "unsupported",
                  ]),
                  status_details: Schema.Array(
                    Schema.Struct({
                      code: Schema.Literals([
                        "determining_status",
                        "requirements_past_due",
                        "requirements_pending_verification",
                        "restricted_other",
                        "unsupported_business",
                        "unsupported_country",
                        "unsupported_entity_type",
                      ]),
                      resolution: Schema.Literals([
                        "contact_stripe",
                        "no_resolution",
                        "provide_info",
                      ]),
                    }),
                  ),
                }),
              ),
              sepa_bank_transfer_payments: Schema.optional(
                Schema.Struct({
                  status: Schema.Literals([
                    "active",
                    "pending",
                    "restricted",
                    "unsupported",
                  ]),
                  status_details: Schema.Array(
                    Schema.Struct({
                      code: Schema.Literals([
                        "determining_status",
                        "requirements_past_due",
                        "requirements_pending_verification",
                        "restricted_other",
                        "unsupported_business",
                        "unsupported_country",
                        "unsupported_entity_type",
                      ]),
                      resolution: Schema.Literals([
                        "contact_stripe",
                        "no_resolution",
                        "provide_info",
                      ]),
                    }),
                  ),
                }),
              ),
              sepa_debit_payments: Schema.optional(
                Schema.Struct({
                  status: Schema.Literals([
                    "active",
                    "pending",
                    "restricted",
                    "unsupported",
                  ]),
                  status_details: Schema.Array(
                    Schema.Struct({
                      code: Schema.Literals([
                        "determining_status",
                        "requirements_past_due",
                        "requirements_pending_verification",
                        "restricted_other",
                        "unsupported_business",
                        "unsupported_country",
                        "unsupported_entity_type",
                      ]),
                      resolution: Schema.Literals([
                        "contact_stripe",
                        "no_resolution",
                        "provide_info",
                      ]),
                    }),
                  ),
                }),
              ),
              stripe_balance: Schema.optional(
                Schema.Struct({
                  payouts: Schema.optional(
                    Schema.Struct({
                      status: Schema.Literals([
                        "active",
                        "pending",
                        "restricted",
                        "unsupported",
                      ]),
                      status_details: Schema.Array(
                        Schema.Struct({
                          code: Schema.Literals([
                            "determining_status",
                            "requirements_past_due",
                            "requirements_pending_verification",
                            "restricted_other",
                            "unsupported_business",
                            "unsupported_country",
                            "unsupported_entity_type",
                          ]),
                          resolution: Schema.Literals([
                            "contact_stripe",
                            "no_resolution",
                            "provide_info",
                          ]),
                        }),
                      ),
                    }),
                  ),
                }),
              ),
              swish_payments: Schema.optional(
                Schema.Struct({
                  status: Schema.Literals([
                    "active",
                    "pending",
                    "restricted",
                    "unsupported",
                  ]),
                  status_details: Schema.Array(
                    Schema.Struct({
                      code: Schema.Literals([
                        "determining_status",
                        "requirements_past_due",
                        "requirements_pending_verification",
                        "restricted_other",
                        "unsupported_business",
                        "unsupported_country",
                        "unsupported_entity_type",
                      ]),
                      resolution: Schema.Literals([
                        "contact_stripe",
                        "no_resolution",
                        "provide_info",
                      ]),
                    }),
                  ),
                }),
              ),
              twint_payments: Schema.optional(
                Schema.Struct({
                  status: Schema.Literals([
                    "active",
                    "pending",
                    "restricted",
                    "unsupported",
                  ]),
                  status_details: Schema.Array(
                    Schema.Struct({
                      code: Schema.Literals([
                        "determining_status",
                        "requirements_past_due",
                        "requirements_pending_verification",
                        "restricted_other",
                        "unsupported_business",
                        "unsupported_country",
                        "unsupported_entity_type",
                      ]),
                      resolution: Schema.Literals([
                        "contact_stripe",
                        "no_resolution",
                        "provide_info",
                      ]),
                    }),
                  ),
                }),
              ),
              us_bank_transfer_payments: Schema.optional(
                Schema.Struct({
                  status: Schema.Literals([
                    "active",
                    "pending",
                    "restricted",
                    "unsupported",
                  ]),
                  status_details: Schema.Array(
                    Schema.Struct({
                      code: Schema.Literals([
                        "determining_status",
                        "requirements_past_due",
                        "requirements_pending_verification",
                        "restricted_other",
                        "unsupported_business",
                        "unsupported_country",
                        "unsupported_entity_type",
                      ]),
                      resolution: Schema.Literals([
                        "contact_stripe",
                        "no_resolution",
                        "provide_info",
                      ]),
                    }),
                  ),
                }),
              ),
              zip_payments: Schema.optional(
                Schema.Struct({
                  status: Schema.Literals([
                    "active",
                    "pending",
                    "restricted",
                    "unsupported",
                  ]),
                  status_details: Schema.Array(
                    Schema.Struct({
                      code: Schema.Literals([
                        "determining_status",
                        "requirements_past_due",
                        "requirements_pending_verification",
                        "restricted_other",
                        "unsupported_business",
                        "unsupported_country",
                        "unsupported_entity_type",
                      ]),
                      resolution: Schema.Literals([
                        "contact_stripe",
                        "no_resolution",
                        "provide_info",
                      ]),
                    }),
                  ),
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
            }),
          ),
          konbini_payments: Schema.optional(
            Schema.Struct({
              support: Schema.optional(
                Schema.Struct({
                  email: Schema.optional(Schema.String),
                  hours: Schema.optional(
                    Schema.Struct({
                      end_time: Schema.optional(Schema.String),
                      start_time: Schema.optional(Schema.String),
                    }),
                  ),
                  phone: Schema.optional(Schema.String),
                }),
              ),
            }),
          ),
          mcc: Schema.optional(Schema.String),
          script_statement_descriptor: Schema.optional(
            Schema.Struct({
              kana: Schema.optional(
                Schema.Struct({
                  descriptor: Schema.optional(Schema.String),
                  prefix: Schema.optional(Schema.String),
                }),
              ),
              kanji: Schema.optional(
                Schema.Struct({
                  descriptor: Schema.optional(Schema.String),
                  prefix: Schema.optional(Schema.String),
                }),
              ),
            }),
          ),
          sepa_debit_payments: Schema.optional(
            Schema.Struct({
              creditor_id: Schema.optional(Schema.String),
            }),
          ),
          statement_descriptor: Schema.optional(
            Schema.Struct({
              descriptor: Schema.optional(Schema.String),
              prefix: Schema.optional(Schema.String),
            }),
          ),
          support: Schema.optional(
            Schema.Struct({
              address: Schema.optional(
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
              email: Schema.optional(Schema.String),
              phone: Schema.optional(Schema.String),
              url: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
      recipient: Schema.optional(
        Schema.Struct({
          applied: Schema.Boolean,
          capabilities: Schema.optional(
            Schema.Struct({
              stripe_balance: Schema.optional(
                Schema.Struct({
                  payouts: Schema.optional(
                    Schema.Struct({
                      status: Schema.Literals([
                        "active",
                        "pending",
                        "restricted",
                        "unsupported",
                      ]),
                      status_details: Schema.Array(
                        Schema.Struct({
                          code: Schema.Literals([
                            "determining_status",
                            "requirements_past_due",
                            "requirements_pending_verification",
                            "restricted_other",
                            "unsupported_business",
                            "unsupported_country",
                            "unsupported_entity_type",
                          ]),
                          resolution: Schema.Literals([
                            "contact_stripe",
                            "no_resolution",
                            "provide_info",
                          ]),
                        }),
                      ),
                    }),
                  ),
                  stripe_transfers: Schema.optional(
                    Schema.Struct({
                      status: Schema.Literals([
                        "active",
                        "pending",
                        "restricted",
                        "unsupported",
                      ]),
                      status_details: Schema.Array(
                        Schema.Struct({
                          code: Schema.Literals([
                            "determining_status",
                            "requirements_past_due",
                            "requirements_pending_verification",
                            "restricted_other",
                            "unsupported_business",
                            "unsupported_country",
                            "unsupported_entity_type",
                          ]),
                          resolution: Schema.Literals([
                            "contact_stripe",
                            "no_resolution",
                            "provide_info",
                          ]),
                        }),
                      ),
                    }),
                  ),
                }),
              ),
            }),
          ),
        }),
      ),
    }),
  ),
  contact_email: Schema.optional(Schema.String),
  contact_phone: Schema.optional(Schema.String),
  created: Schema.String,
  dashboard: Schema.optional(Schema.Literals(["express", "full", "none"])),
  defaults: Schema.optional(
    Schema.Struct({
      currency: Schema.optional(Schema.String),
      locales: Schema.optional(
        Schema.Array(
          Schema.Literals([
            "ar-SA",
            "bg",
            "bg-BG",
            "cs",
            "cs-CZ",
            "da",
            "da-DK",
            "de",
            "de-DE",
            "el",
            "el-GR",
            "en",
            "en-AU",
            "en-CA",
            "en-GB",
            "en-IE",
            "en-IN",
            "en-NZ",
            "en-SG",
            "en-US",
            "es",
            "es-419",
            "es-ES",
            "et",
            "et-EE",
            "fi",
            "fil",
            "fil-PH",
            "fi-FI",
            "fr",
            "fr-CA",
            "fr-FR",
            "he-IL",
            "hr",
            "hr-HR",
            "hu",
            "hu-HU",
            "id",
            "id-ID",
            "it",
            "it-IT",
            "ja",
            "ja-JP",
            "ko",
            "ko-KR",
            "lt",
            "lt-LT",
            "lv",
            "lv-LV",
            "ms",
            "ms-MY",
            "mt",
            "mt-MT",
            "nb",
            "nb-NO",
            "nl",
            "nl-NL",
            "pl",
            "pl-PL",
            "pt",
            "pt-BR",
            "pt-PT",
            "ro",
            "ro-RO",
            "ru",
            "ru-RU",
            "sk",
            "sk-SK",
            "sl",
            "sl-SI",
            "sv",
            "sv-SE",
            "th",
            "th-TH",
            "tr",
            "tr-TR",
            "vi",
            "vi-VN",
            "zh",
            "zh-Hans",
            "zh-Hant-HK",
            "zh-Hant-TW",
            "zh-HK",
            "zh-TW",
          ]),
        ),
      ),
      profile: Schema.optional(
        Schema.Struct({
          business_url: Schema.optional(Schema.String),
          doing_business_as: Schema.optional(Schema.String),
          product_description: Schema.optional(Schema.String),
        }),
      ),
      responsibilities: Schema.Struct({
        fees_collector: Schema.optional(
          Schema.Literals([
            "application",
            "application_custom",
            "application_express",
            "stripe",
          ]),
        ),
        losses_collector: Schema.optional(
          Schema.Literals(["application", "stripe"]),
        ),
        requirements_collector: Schema.Literals(["application", "stripe"]),
      }),
    }),
  ),
  display_name: Schema.optional(Schema.String),
  future_requirements: Schema.optional(
    Schema.Struct({
      entries: Schema.optional(
        Schema.Array(
          Schema.Struct({
            awaiting_action_from: Schema.Literals(["stripe", "user"]),
            description: Schema.String,
            errors: Schema.Array(
              Schema.Struct({
                code: Schema.Literals([
                  "invalid_address_city_state_postal_code",
                  "invalid_address_highway_contract_box",
                  "invalid_address_private_mailbox",
                  "invalid_business_profile_name",
                  "invalid_business_profile_name_denylisted",
                  "invalid_company_name_denylisted",
                  "invalid_dob_age_over_maximum",
                  "invalid_dob_age_under_18",
                  "invalid_dob_age_under_minimum",
                  "invalid_product_description_length",
                  "invalid_product_description_url_match",
                  "invalid_representative_country",
                  "invalid_statement_descriptor_business_mismatch",
                  "invalid_statement_descriptor_denylisted",
                  "invalid_statement_descriptor_length",
                  "invalid_statement_descriptor_prefix_denylisted",
                  "invalid_statement_descriptor_prefix_mismatch",
                  "invalid_street_address",
                  "invalid_tax_id",
                  "invalid_tax_id_format",
                  "invalid_tos_acceptance",
                  "invalid_url_denylisted",
                  "invalid_url_format",
                  "invalid_url_website_business_information_mismatch",
                  "invalid_url_website_empty",
                  "invalid_url_website_inaccessible",
                  "invalid_url_website_inaccessible_geoblocked",
                  "invalid_url_website_inaccessible_password_protected",
                  "invalid_url_website_incomplete",
                  "invalid_url_website_incomplete_cancellation_policy",
                  "invalid_url_website_incomplete_customer_service_details",
                  "invalid_url_website_incomplete_legal_restrictions",
                  "invalid_url_website_incomplete_refund_policy",
                  "invalid_url_website_incomplete_return_policy",
                  "invalid_url_website_incomplete_terms_and_conditions",
                  "invalid_url_website_incomplete_under_construction",
                  "invalid_url_website_other",
                  "invalid_url_web_presence_detected",
                  "invalid_value_other",
                  "unresolvable_ip_address",
                  "unresolvable_postal_code",
                  "verification_directors_mismatch",
                  "verification_document_address_mismatch",
                  "verification_document_address_missing",
                  "verification_document_corrupt",
                  "verification_document_country_not_supported",
                  "verification_document_directors_mismatch",
                  "verification_document_dob_mismatch",
                  "verification_document_duplicate_type",
                  "verification_document_expired",
                  "verification_document_failed_copy",
                  "verification_document_failed_greyscale",
                  "verification_document_failed_other",
                  "verification_document_failed_test_mode",
                  "verification_document_fraudulent",
                  "verification_document_id_number_mismatch",
                  "verification_document_id_number_missing",
                  "verification_document_incomplete",
                  "verification_document_invalid",
                  "verification_document_issue_or_expiry_date_missing",
                  "verification_document_manipulated",
                  "verification_document_missing_back",
                  "verification_document_missing_front",
                  "verification_document_name_mismatch",
                  "verification_document_name_missing",
                  "verification_document_nationality_mismatch",
                  "verification_document_not_readable",
                  "verification_document_not_signed",
                  "verification_document_not_uploaded",
                  "verification_document_photo_mismatch",
                  "verification_document_too_large",
                  "verification_document_type_not_supported",
                  "verification_extraneous_directors",
                  "verification_failed_address_match",
                  "verification_failed_business_iec_number",
                  "verification_failed_document_match",
                  "verification_failed_id_number_match",
                  "verification_failed_keyed_identity",
                  "verification_failed_keyed_match",
                  "verification_failed_name_match",
                  "verification_failed_other",
                  "verification_failed_representative_authority",
                  "verification_failed_residential_address",
                  "verification_failed_tax_id_match",
                  "verification_failed_tax_id_not_issued",
                  "verification_missing_directors",
                  "verification_missing_executives",
                  "verification_missing_owners",
                  "verification_requires_additional_memorandum_of_associations",
                  "verification_requires_additional_proof_of_registration",
                  "verification_selfie_document_missing_photo",
                  "verification_selfie_face_mismatch",
                  "verification_selfie_manipulated",
                  "verification_selfie_unverified_other",
                  "verification_supportability",
                  "verification_token_stale",
                ]),
                description: Schema.String,
              }),
            ),
            impact: Schema.Struct({
              restricts_capabilities: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    capability: Schema.Literals([
                      "ach_debit_payments",
                      "acss_debit_payments",
                      "affirm_payments",
                      "afterpay_clearpay_payments",
                      "alma_payments",
                      "amazon_pay_payments",
                      "automatic_indirect_tax",
                      "au_becs_debit_payments",
                      "bacs_debit_payments",
                      "bancontact_payments",
                      "bank_accounts.local",
                      "bank_accounts.wire",
                      "blik_payments",
                      "boleto_payments",
                      "cards",
                      "card_payments",
                      "cartes_bancaires_payments",
                      "cashapp_payments",
                      "eps_payments",
                      "fpx_payments",
                      "gb_bank_transfer_payments",
                      "grabpay_payments",
                      "ideal_payments",
                      "jcb_payments",
                      "jp_bank_transfer_payments",
                      "kakao_pay_payments",
                      "klarna_payments",
                      "konbini_payments",
                      "kr_card_payments",
                      "link_payments",
                      "mobilepay_payments",
                      "multibanco_payments",
                      "mx_bank_transfer_payments",
                      "naver_pay_payments",
                      "oxxo_payments",
                      "p24_payments",
                      "payco_payments",
                      "paynow_payments",
                      "pay_by_bank_payments",
                      "promptpay_payments",
                      "revolut_pay_payments",
                      "samsung_pay_payments",
                      "sepa_bank_transfer_payments",
                      "sepa_debit_payments",
                      "stripe_balance.payouts",
                      "stripe_balance.stripe_transfers",
                      "swish_payments",
                      "twint_payments",
                      "us_bank_transfer_payments",
                      "zip_payments",
                    ]),
                    configuration: Schema.Literals([
                      "customer",
                      "merchant",
                      "recipient",
                    ]),
                    deadline: Schema.Struct({
                      status: Schema.Literals([
                        "currently_due",
                        "eventually_due",
                        "past_due",
                      ]),
                    }),
                  }),
                ),
              ),
            }),
            minimum_deadline: Schema.Struct({
              status: Schema.Literals([
                "currently_due",
                "eventually_due",
                "past_due",
              ]),
            }),
            reference: Schema.optional(
              Schema.Struct({
                inquiry: Schema.optional(Schema.String),
                resource: Schema.optional(Schema.String),
                type: Schema.Literals(["inquiry", "payment_method", "person"]),
              }),
            ),
            requested_reasons: Schema.Array(
              Schema.Struct({
                code: Schema.Literals([
                  "routine_onboarding",
                  "routine_verification",
                ]),
              }),
            ),
          }),
        ),
      ),
      minimum_transition_date: Schema.optional(Schema.String),
      summary: Schema.optional(
        Schema.Struct({
          minimum_deadline: Schema.optional(
            Schema.Struct({
              status: Schema.Literals([
                "currently_due",
                "eventually_due",
                "past_due",
              ]),
              time: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
    }),
  ),
  id: Schema.String,
  identity: Schema.optional(
    Schema.Struct({
      attestations: Schema.optional(
        Schema.Struct({
          directorship_declaration: Schema.optional(
            Schema.Struct({
              date: Schema.optional(Schema.String),
              ip: Schema.optional(Schema.String),
              user_agent: Schema.optional(Schema.String),
            }),
          ),
          ownership_declaration: Schema.optional(
            Schema.Struct({
              date: Schema.optional(Schema.String),
              ip: Schema.optional(Schema.String),
              user_agent: Schema.optional(Schema.String),
            }),
          ),
          persons_provided: Schema.optional(
            Schema.Struct({
              directors: Schema.optional(Schema.Boolean),
              executives: Schema.optional(Schema.Boolean),
              owners: Schema.optional(Schema.Boolean),
              ownership_exemption_reason: Schema.optional(
                Schema.Literals([
                  "qualified_entity_exceeds_ownership_threshold",
                  "qualifies_as_financial_institution",
                ]),
              ),
            }),
          ),
          representative_declaration: Schema.optional(
            Schema.Struct({
              date: Schema.optional(Schema.String),
              ip: Schema.optional(Schema.String),
              user_agent: Schema.optional(Schema.String),
            }),
          ),
          terms_of_service: Schema.optional(
            Schema.Struct({
              account: Schema.optional(
                Schema.Struct({
                  date: Schema.optional(Schema.String),
                  ip: Schema.optional(Schema.String),
                  user_agent: Schema.optional(Schema.String),
                }),
              ),
            }),
          ),
        }),
      ),
      business_details: Schema.optional(
        Schema.Struct({
          address: Schema.optional(
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
          annual_revenue: Schema.optional(
            Schema.Struct({
              amount: Schema.optional(
                Schema.Struct({
                  currency: Schema.String,
                  value: Schema.Number,
                }),
              ),
              fiscal_year_end: Schema.optional(Schema.String),
            }),
          ),
          documents: Schema.optional(
            Schema.Struct({
              bank_account_ownership_verification: Schema.optional(
                Schema.Struct({
                  files: Schema.Array(Schema.String),
                  type: Schema.Literals(["files"]),
                }),
              ),
              company_license: Schema.optional(
                Schema.Struct({
                  files: Schema.Array(Schema.String),
                  type: Schema.Literals(["files"]),
                }),
              ),
              company_memorandum_of_association: Schema.optional(
                Schema.Struct({
                  files: Schema.Array(Schema.String),
                  type: Schema.Literals(["files"]),
                }),
              ),
              company_ministerial_decree: Schema.optional(
                Schema.Struct({
                  files: Schema.Array(Schema.String),
                  type: Schema.Literals(["files"]),
                }),
              ),
              company_registration_verification: Schema.optional(
                Schema.Struct({
                  files: Schema.Array(Schema.String),
                  type: Schema.Literals(["files"]),
                }),
              ),
              company_tax_id_verification: Schema.optional(
                Schema.Struct({
                  files: Schema.Array(Schema.String),
                  type: Schema.Literals(["files"]),
                }),
              ),
              primary_verification: Schema.optional(
                Schema.Struct({
                  front_back: Schema.Struct({
                    back: Schema.optional(Schema.String),
                    front: Schema.String,
                  }),
                  type: Schema.Literals(["front_back"]),
                }),
              ),
              proof_of_address: Schema.optional(
                Schema.Struct({
                  files: Schema.Array(Schema.String),
                  type: Schema.Literals(["files"]),
                }),
              ),
              proof_of_registration: Schema.optional(
                Schema.Struct({
                  files: Schema.Array(Schema.String),
                  type: Schema.Literals(["files"]),
                }),
              ),
              proof_of_ultimate_beneficial_ownership: Schema.optional(
                Schema.Struct({
                  files: Schema.Array(Schema.String),
                  type: Schema.Literals(["files"]),
                }),
              ),
            }),
          ),
          estimated_worker_count: Schema.optional(Schema.Number),
          id_numbers: Schema.optional(
            Schema.Array(
              Schema.Struct({
                registrar: Schema.optional(Schema.String),
                type: Schema.Literals([
                  "ae_crn",
                  "ae_vat",
                  "ao_nif",
                  "ar_cuit",
                  "at_fn",
                  "at_stn",
                  "at_vat",
                  "au_abn",
                  "au_acn",
                  "au_in",
                  "az_tin",
                  "bd_etin",
                  "be_cbe",
                  "be_vat",
                  "bg_uic",
                  "bg_vat",
                  "br_cnpj",
                  "ca_cn",
                  "ca_crarr",
                  "ca_gst_hst",
                  "ca_neq",
                  "ca_rid",
                  "ch_chid",
                  "ch_uid",
                  "cr_cpj",
                  "cr_nite",
                  "cy_he",
                  "cy_tic",
                  "cy_vat",
                  "cz_ico",
                  "cz_vat",
                  "de_hrn",
                  "de_stn",
                  "de_vat",
                  "dk_cvr",
                  "dk_vat",
                  "do_rcn",
                  "ee_rk",
                  "ee_vat",
                  "es_cif",
                  "es_vat",
                  "fi_vat",
                  "fi_yt",
                  "fr_rna",
                  "fr_siren",
                  "fr_vat",
                  "gb_crn",
                  "gb_vat",
                  "gi_crn",
                  "gr_afm",
                  "gr_gemi",
                  "gr_vat",
                  "gt_nit",
                  "hk_br",
                  "hk_cr",
                  "hr_mbs",
                  "hr_oib",
                  "hr_vat",
                  "hu_cjs",
                  "hu_tin",
                  "hu_vat",
                  "ie_crn",
                  "ie_trn",
                  "ie_vat",
                  "it_rea",
                  "it_vat",
                  "jp_cn",
                  "kz_bin",
                  "li_uid",
                  "lt_ccrn",
                  "lt_vat",
                  "lu_nif",
                  "lu_rcs",
                  "lu_vat",
                  "lv_urn",
                  "lv_vat",
                  "mt_crn",
                  "mt_tin",
                  "mt_vat",
                  "mx_rfc",
                  "my_brn",
                  "my_coid",
                  "my_itn",
                  "my_sst",
                  "mz_nuit",
                  "nl_kvk",
                  "nl_rsin",
                  "nl_vat",
                  "no_orgnr",
                  "nz_bn",
                  "nz_ird",
                  "pe_ruc",
                  "pk_ntn",
                  "pl_nip",
                  "pl_regon",
                  "pl_vat",
                  "pt_vat",
                  "ro_cui",
                  "ro_orc",
                  "ro_vat",
                  "sa_crn",
                  "sa_tin",
                  "se_orgnr",
                  "se_vat",
                  "sg_uen",
                  "si_msp",
                  "si_tin",
                  "si_vat",
                  "sk_dic",
                  "sk_ico",
                  "sk_vat",
                  "th_crn",
                  "th_prn",
                  "th_tin",
                  "us_ein",
                ]),
              }),
            ),
          ),
          monthly_estimated_revenue: Schema.optional(
            Schema.Struct({
              amount: Schema.optional(
                Schema.Struct({
                  currency: Schema.String,
                  value: Schema.Number,
                }),
              ),
            }),
          ),
          phone: Schema.optional(Schema.String),
          registered_name: Schema.optional(Schema.String),
          registration_date: Schema.optional(
            Schema.Struct({
              day: Schema.Number,
              month: Schema.Number,
              year: Schema.Number,
            }),
          ),
          script_addresses: Schema.optional(
            Schema.Struct({
              kana: Schema.optional(
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
              kanji: Schema.optional(
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
            }),
          ),
          script_names: Schema.optional(
            Schema.Struct({
              kana: Schema.optional(
                Schema.Struct({
                  registered_name: Schema.optional(Schema.String),
                }),
              ),
              kanji: Schema.optional(
                Schema.Struct({
                  registered_name: Schema.optional(Schema.String),
                }),
              ),
            }),
          ),
          structure: Schema.optional(
            Schema.Literals([
              "cooperative",
              "free_zone_establishment",
              "free_zone_llc",
              "governmental_unit",
              "government_instrumentality",
              "incorporated_association",
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
              "public_listed_corporation",
              "public_partnership",
              "registered_charity",
              "single_member_llc",
              "sole_establishment",
              "sole_proprietorship",
              "tax_exempt_government_instrumentality",
              "trust",
              "unincorporated_association",
              "unincorporated_non_profit",
              "unincorporated_partnership",
            ]),
          ),
        }),
      ),
      country: Schema.optional(Schema.String),
      entity_type: Schema.optional(
        Schema.Literals([
          "company",
          "government_entity",
          "individual",
          "non_profit",
        ]),
      ),
      individual: Schema.optional(
        Schema.Struct({
          account: Schema.String,
          additional_addresses: Schema.optional(
            Schema.Array(
              Schema.Struct({
                city: Schema.optional(Schema.String),
                country: Schema.optional(Schema.String),
                line1: Schema.optional(Schema.String),
                line2: Schema.optional(Schema.String),
                postal_code: Schema.optional(Schema.String),
                purpose: Schema.Literals(["registered"]),
                state: Schema.optional(Schema.String),
                town: Schema.optional(Schema.String),
              }),
            ),
          ),
          additional_names: Schema.optional(
            Schema.Array(
              Schema.Struct({
                full_name: Schema.optional(Schema.String),
                given_name: Schema.optional(Schema.String),
                purpose: Schema.Literals(["alias", "maiden"]),
                surname: Schema.optional(Schema.String),
              }),
            ),
          ),
          additional_terms_of_service: Schema.optional(
            Schema.Struct({
              account: Schema.optional(
                Schema.Struct({
                  date: Schema.optional(Schema.String),
                  ip: Schema.optional(Schema.String),
                  user_agent: Schema.optional(Schema.String),
                }),
              ),
            }),
          ),
          address: Schema.optional(
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
          created: Schema.String,
          date_of_birth: Schema.optional(
            Schema.Struct({
              day: Schema.Number,
              month: Schema.Number,
              year: Schema.Number,
            }),
          ),
          documents: Schema.optional(
            Schema.Struct({
              company_authorization: Schema.optional(
                Schema.Struct({
                  files: Schema.Array(Schema.String),
                  type: Schema.Literals(["files"]),
                }),
              ),
              passport: Schema.optional(
                Schema.Struct({
                  files: Schema.Array(Schema.String),
                  type: Schema.Literals(["files"]),
                }),
              ),
              primary_verification: Schema.optional(
                Schema.Struct({
                  front_back: Schema.Struct({
                    back: Schema.optional(Schema.String),
                    front: Schema.String,
                  }),
                  type: Schema.Literals(["front_back"]),
                }),
              ),
              secondary_verification: Schema.optional(
                Schema.Struct({
                  front_back: Schema.Struct({
                    back: Schema.optional(Schema.String),
                    front: Schema.String,
                  }),
                  type: Schema.Literals(["front_back"]),
                }),
              ),
              visa: Schema.optional(
                Schema.Struct({
                  files: Schema.Array(Schema.String),
                  type: Schema.Literals(["files"]),
                }),
              ),
            }),
          ),
          email: Schema.optional(Schema.String),
          given_name: Schema.optional(Schema.String),
          id: Schema.String,
          id_numbers: Schema.optional(
            Schema.Array(
              Schema.Struct({
                type: Schema.Literals([
                  "ae_eid",
                  "ao_nif",
                  "ar_cuil",
                  "ar_dni",
                  "at_stn",
                  "az_tin",
                  "bd_brc",
                  "bd_etin",
                  "bd_nid",
                  "be_nrn",
                  "bg_ucn",
                  "bn_nric",
                  "br_cpf",
                  "ca_sin",
                  "ch_oasi",
                  "cl_rut",
                  "cn_pp",
                  "co_nuip",
                  "cr_ci",
                  "cr_cpf",
                  "cr_dimex",
                  "cr_nite",
                  "cy_tic",
                  "cz_rc",
                  "de_stn",
                  "dk_cpr",
                  "do_cie",
                  "do_rcn",
                  "ec_ci",
                  "ee_ik",
                  "es_nif",
                  "fi_hetu",
                  "fr_nir",
                  "gb_nino",
                  "gr_afm",
                  "gt_nit",
                  "hk_id",
                  "hr_oib",
                  "hu_ad",
                  "id_nik",
                  "ie_ppsn",
                  "is_kt",
                  "it_cf",
                  "jp_inc",
                  "ke_pin",
                  "kz_iin",
                  "li_peid",
                  "lt_ak",
                  "lu_nif",
                  "lv_pk",
                  "mx_rfc",
                  "my_nric",
                  "mz_nuit",
                  "ng_nin",
                  "nl_bsn",
                  "no_nin",
                  "nz_ird",
                  "pe_dni",
                  "pk_cnic",
                  "pk_snic",
                  "pl_pesel",
                  "pt_nif",
                  "ro_cnp",
                  "sa_tin",
                  "se_pin",
                  "sg_fin",
                  "sg_nric",
                  "sk_dic",
                  "th_lc",
                  "th_pin",
                  "tr_tin",
                  "us_itin",
                  "us_itin_last_4",
                  "us_ssn",
                  "us_ssn_last_4",
                  "uy_dni",
                  "za_id",
                ]),
              }),
            ),
          ),
          legal_gender: Schema.optional(Schema.Literals(["female", "male"])),
          metadata: Schema.optional(
            Schema.Record(Schema.String, Schema.String),
          ),
          nationalities: Schema.optional(Schema.Array(Schema.String)),
          object: Schema.String,
          phone: Schema.optional(Schema.String),
          political_exposure: Schema.optional(
            Schema.Literals(["existing", "none"]),
          ),
          relationship: Schema.optional(
            Schema.Struct({
              authorizer: Schema.optional(Schema.Boolean),
              director: Schema.optional(Schema.Boolean),
              executive: Schema.optional(Schema.Boolean),
              legal_guardian: Schema.optional(Schema.Boolean),
              owner: Schema.optional(Schema.Boolean),
              percent_ownership: Schema.optional(Schema.String),
              representative: Schema.optional(Schema.Boolean),
              title: Schema.optional(Schema.String),
            }),
          ),
          script_addresses: Schema.optional(
            Schema.Struct({
              kana: Schema.optional(
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
              kanji: Schema.optional(
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
            }),
          ),
          script_names: Schema.optional(
            Schema.Struct({
              kana: Schema.optional(
                Schema.Struct({
                  given_name: Schema.optional(Schema.String),
                  surname: Schema.optional(Schema.String),
                }),
              ),
              kanji: Schema.optional(
                Schema.Struct({
                  given_name: Schema.optional(Schema.String),
                  surname: Schema.optional(Schema.String),
                }),
              ),
            }),
          ),
          surname: Schema.optional(Schema.String),
          updated: Schema.String,
        }),
      ),
    }),
  ),
  livemode: Schema.Boolean,
  metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  object: Schema.Literals(["v2.core.account"]),
  requirements: Schema.optional(
    Schema.Struct({
      entries: Schema.optional(
        Schema.Array(
          Schema.Struct({
            awaiting_action_from: Schema.Literals(["stripe", "user"]),
            description: Schema.String,
            errors: Schema.Array(
              Schema.Struct({
                code: Schema.Literals([
                  "invalid_address_city_state_postal_code",
                  "invalid_address_highway_contract_box",
                  "invalid_address_private_mailbox",
                  "invalid_business_profile_name",
                  "invalid_business_profile_name_denylisted",
                  "invalid_company_name_denylisted",
                  "invalid_dob_age_over_maximum",
                  "invalid_dob_age_under_18",
                  "invalid_dob_age_under_minimum",
                  "invalid_product_description_length",
                  "invalid_product_description_url_match",
                  "invalid_representative_country",
                  "invalid_statement_descriptor_business_mismatch",
                  "invalid_statement_descriptor_denylisted",
                  "invalid_statement_descriptor_length",
                  "invalid_statement_descriptor_prefix_denylisted",
                  "invalid_statement_descriptor_prefix_mismatch",
                  "invalid_street_address",
                  "invalid_tax_id",
                  "invalid_tax_id_format",
                  "invalid_tos_acceptance",
                  "invalid_url_denylisted",
                  "invalid_url_format",
                  "invalid_url_website_business_information_mismatch",
                  "invalid_url_website_empty",
                  "invalid_url_website_inaccessible",
                  "invalid_url_website_inaccessible_geoblocked",
                  "invalid_url_website_inaccessible_password_protected",
                  "invalid_url_website_incomplete",
                  "invalid_url_website_incomplete_cancellation_policy",
                  "invalid_url_website_incomplete_customer_service_details",
                  "invalid_url_website_incomplete_legal_restrictions",
                  "invalid_url_website_incomplete_refund_policy",
                  "invalid_url_website_incomplete_return_policy",
                  "invalid_url_website_incomplete_terms_and_conditions",
                  "invalid_url_website_incomplete_under_construction",
                  "invalid_url_website_other",
                  "invalid_url_web_presence_detected",
                  "invalid_value_other",
                  "unresolvable_ip_address",
                  "unresolvable_postal_code",
                  "verification_directors_mismatch",
                  "verification_document_address_mismatch",
                  "verification_document_address_missing",
                  "verification_document_corrupt",
                  "verification_document_country_not_supported",
                  "verification_document_directors_mismatch",
                  "verification_document_dob_mismatch",
                  "verification_document_duplicate_type",
                  "verification_document_expired",
                  "verification_document_failed_copy",
                  "verification_document_failed_greyscale",
                  "verification_document_failed_other",
                  "verification_document_failed_test_mode",
                  "verification_document_fraudulent",
                  "verification_document_id_number_mismatch",
                  "verification_document_id_number_missing",
                  "verification_document_incomplete",
                  "verification_document_invalid",
                  "verification_document_issue_or_expiry_date_missing",
                  "verification_document_manipulated",
                  "verification_document_missing_back",
                  "verification_document_missing_front",
                  "verification_document_name_mismatch",
                  "verification_document_name_missing",
                  "verification_document_nationality_mismatch",
                  "verification_document_not_readable",
                  "verification_document_not_signed",
                  "verification_document_not_uploaded",
                  "verification_document_photo_mismatch",
                  "verification_document_too_large",
                  "verification_document_type_not_supported",
                  "verification_extraneous_directors",
                  "verification_failed_address_match",
                  "verification_failed_business_iec_number",
                  "verification_failed_document_match",
                  "verification_failed_id_number_match",
                  "verification_failed_keyed_identity",
                  "verification_failed_keyed_match",
                  "verification_failed_name_match",
                  "verification_failed_other",
                  "verification_failed_representative_authority",
                  "verification_failed_residential_address",
                  "verification_failed_tax_id_match",
                  "verification_failed_tax_id_not_issued",
                  "verification_missing_directors",
                  "verification_missing_executives",
                  "verification_missing_owners",
                  "verification_requires_additional_memorandum_of_associations",
                  "verification_requires_additional_proof_of_registration",
                  "verification_selfie_document_missing_photo",
                  "verification_selfie_face_mismatch",
                  "verification_selfie_manipulated",
                  "verification_selfie_unverified_other",
                  "verification_supportability",
                  "verification_token_stale",
                ]),
                description: Schema.String,
              }),
            ),
            impact: Schema.Struct({
              restricts_capabilities: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    capability: Schema.Literals([
                      "ach_debit_payments",
                      "acss_debit_payments",
                      "affirm_payments",
                      "afterpay_clearpay_payments",
                      "alma_payments",
                      "amazon_pay_payments",
                      "automatic_indirect_tax",
                      "au_becs_debit_payments",
                      "bacs_debit_payments",
                      "bancontact_payments",
                      "bank_accounts.local",
                      "bank_accounts.wire",
                      "blik_payments",
                      "boleto_payments",
                      "cards",
                      "card_payments",
                      "cartes_bancaires_payments",
                      "cashapp_payments",
                      "eps_payments",
                      "fpx_payments",
                      "gb_bank_transfer_payments",
                      "grabpay_payments",
                      "ideal_payments",
                      "jcb_payments",
                      "jp_bank_transfer_payments",
                      "kakao_pay_payments",
                      "klarna_payments",
                      "konbini_payments",
                      "kr_card_payments",
                      "link_payments",
                      "mobilepay_payments",
                      "multibanco_payments",
                      "mx_bank_transfer_payments",
                      "naver_pay_payments",
                      "oxxo_payments",
                      "p24_payments",
                      "payco_payments",
                      "paynow_payments",
                      "pay_by_bank_payments",
                      "promptpay_payments",
                      "revolut_pay_payments",
                      "samsung_pay_payments",
                      "sepa_bank_transfer_payments",
                      "sepa_debit_payments",
                      "stripe_balance.payouts",
                      "stripe_balance.stripe_transfers",
                      "swish_payments",
                      "twint_payments",
                      "us_bank_transfer_payments",
                      "zip_payments",
                    ]),
                    configuration: Schema.Literals([
                      "customer",
                      "merchant",
                      "recipient",
                    ]),
                    deadline: Schema.Struct({
                      status: Schema.Literals([
                        "currently_due",
                        "eventually_due",
                        "past_due",
                      ]),
                    }),
                  }),
                ),
              ),
            }),
            minimum_deadline: Schema.Struct({
              status: Schema.Literals([
                "currently_due",
                "eventually_due",
                "past_due",
              ]),
            }),
            reference: Schema.optional(
              Schema.Struct({
                inquiry: Schema.optional(Schema.String),
                resource: Schema.optional(Schema.String),
                type: Schema.Literals(["inquiry", "payment_method", "person"]),
              }),
            ),
            requested_reasons: Schema.Array(
              Schema.Struct({
                code: Schema.Literals([
                  "routine_onboarding",
                  "routine_verification",
                ]),
              }),
            ),
          }),
        ),
      ),
      summary: Schema.optional(
        Schema.Struct({
          minimum_deadline: Schema.optional(
            Schema.Struct({
              status: Schema.Literals([
                "currently_due",
                "eventually_due",
                "past_due",
              ]),
              time: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
    }),
  ),
});
export const v2_core_account_personSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    account: Schema.String,
    additional_addresses: Schema.optional(
      Schema.Array(
        Schema.Struct({
          city: Schema.optional(Schema.String),
          country: Schema.optional(Schema.String),
          line1: Schema.optional(Schema.String),
          line2: Schema.optional(Schema.String),
          postal_code: Schema.optional(Schema.String),
          purpose: Schema.Literals(["registered"]),
          state: Schema.optional(Schema.String),
          town: Schema.optional(Schema.String),
        }),
      ),
    ),
    additional_names: Schema.optional(
      Schema.Array(
        Schema.Struct({
          full_name: Schema.optional(Schema.String),
          given_name: Schema.optional(Schema.String),
          purpose: Schema.Literals(["alias", "maiden"]),
          surname: Schema.optional(Schema.String),
        }),
      ),
    ),
    additional_terms_of_service: Schema.optional(
      Schema.Struct({
        account: Schema.optional(
          Schema.Struct({
            date: Schema.optional(Schema.String),
            ip: Schema.optional(Schema.String),
            user_agent: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    address: Schema.optional(
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
    created: Schema.String,
    date_of_birth: Schema.optional(
      Schema.Struct({
        day: Schema.Number,
        month: Schema.Number,
        year: Schema.Number,
      }),
    ),
    documents: Schema.optional(
      Schema.Struct({
        company_authorization: Schema.optional(
          Schema.Struct({
            files: Schema.Array(Schema.String),
            type: Schema.Literals(["files"]),
          }),
        ),
        passport: Schema.optional(
          Schema.Struct({
            files: Schema.Array(Schema.String),
            type: Schema.Literals(["files"]),
          }),
        ),
        primary_verification: Schema.optional(
          Schema.Struct({
            front_back: Schema.Struct({
              back: Schema.optional(Schema.String),
              front: Schema.String,
            }),
            type: Schema.Literals(["front_back"]),
          }),
        ),
        secondary_verification: Schema.optional(
          Schema.Struct({
            front_back: Schema.Struct({
              back: Schema.optional(Schema.String),
              front: Schema.String,
            }),
            type: Schema.Literals(["front_back"]),
          }),
        ),
        visa: Schema.optional(
          Schema.Struct({
            files: Schema.Array(Schema.String),
            type: Schema.Literals(["files"]),
          }),
        ),
      }),
    ),
    email: Schema.optional(Schema.String),
    given_name: Schema.optional(Schema.String),
    id: Schema.String,
    id_numbers: Schema.optional(
      Schema.Array(
        Schema.Struct({
          type: Schema.Literals([
            "ae_eid",
            "ao_nif",
            "ar_cuil",
            "ar_dni",
            "at_stn",
            "az_tin",
            "bd_brc",
            "bd_etin",
            "bd_nid",
            "be_nrn",
            "bg_ucn",
            "bn_nric",
            "br_cpf",
            "ca_sin",
            "ch_oasi",
            "cl_rut",
            "cn_pp",
            "co_nuip",
            "cr_ci",
            "cr_cpf",
            "cr_dimex",
            "cr_nite",
            "cy_tic",
            "cz_rc",
            "de_stn",
            "dk_cpr",
            "do_cie",
            "do_rcn",
            "ec_ci",
            "ee_ik",
            "es_nif",
            "fi_hetu",
            "fr_nir",
            "gb_nino",
            "gr_afm",
            "gt_nit",
            "hk_id",
            "hr_oib",
            "hu_ad",
            "id_nik",
            "ie_ppsn",
            "is_kt",
            "it_cf",
            "jp_inc",
            "ke_pin",
            "kz_iin",
            "li_peid",
            "lt_ak",
            "lu_nif",
            "lv_pk",
            "mx_rfc",
            "my_nric",
            "mz_nuit",
            "ng_nin",
            "nl_bsn",
            "no_nin",
            "nz_ird",
            "pe_dni",
            "pk_cnic",
            "pk_snic",
            "pl_pesel",
            "pt_nif",
            "ro_cnp",
            "sa_tin",
            "se_pin",
            "sg_fin",
            "sg_nric",
            "sk_dic",
            "th_lc",
            "th_pin",
            "tr_tin",
            "us_itin",
            "us_itin_last_4",
            "us_ssn",
            "us_ssn_last_4",
            "uy_dni",
            "za_id",
          ]),
        }),
      ),
    ),
    legal_gender: Schema.optional(Schema.Literals(["female", "male"])),
    livemode: Schema.Boolean,
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    nationalities: Schema.optional(Schema.Array(Schema.String)),
    object: Schema.Literals(["v2.core.account_person"]),
    phone: Schema.optional(Schema.String),
    political_exposure: Schema.optional(Schema.Literals(["existing", "none"])),
    relationship: Schema.optional(
      Schema.Struct({
        authorizer: Schema.optional(Schema.Boolean),
        director: Schema.optional(Schema.Boolean),
        executive: Schema.optional(Schema.Boolean),
        legal_guardian: Schema.optional(Schema.Boolean),
        owner: Schema.optional(Schema.Boolean),
        percent_ownership: Schema.optional(Schema.String),
        representative: Schema.optional(Schema.Boolean),
        title: Schema.optional(Schema.String),
      }),
    ),
    script_addresses: Schema.optional(
      Schema.Struct({
        kana: Schema.optional(
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
        kanji: Schema.optional(
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
      }),
    ),
    script_names: Schema.optional(
      Schema.Struct({
        kana: Schema.optional(
          Schema.Struct({
            given_name: Schema.optional(Schema.String),
            surname: Schema.optional(Schema.String),
          }),
        ),
        kanji: Schema.optional(
          Schema.Struct({
            given_name: Schema.optional(Schema.String),
            surname: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    surname: Schema.optional(Schema.String),
    updated: Schema.String,
  });
export const v2_core_event_destinationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amazon_eventbridge: Schema.optional(
      Schema.Struct({
        aws_account_id: Schema.String,
        aws_event_source_arn: Schema.String,
        aws_event_source_status: Schema.Literals([
          "active",
          "deleted",
          "pending",
          "unknown",
        ]),
      }),
    ),
    created: Schema.String,
    description: Schema.String,
    enabled_events: Schema.Array(Schema.String),
    event_payload: Schema.Literals(["snapshot", "thin"]),
    events_from: Schema.optional(Schema.Array(Schema.String)),
    id: Schema.String,
    livemode: Schema.Boolean,
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.String,
    object: Schema.Literals(["v2.core.event_destination"]),
    snapshot_api_version: Schema.optional(Schema.String),
    status: Schema.Literals(["disabled", "enabled"]),
    status_details: Schema.optional(
      Schema.Struct({
        disabled: Schema.optional(
          Schema.Struct({
            reason: Schema.Literals(["no_aws_event_source_exists", "user"]),
          }),
        ),
      }),
    ),
    type: Schema.Literals(["amazon_eventbridge", "webhook_endpoint"]),
    updated: Schema.String,
    webhook_endpoint: Schema.optional(
      Schema.Struct({
        signing_secret: Schema.optional(SensitiveOutputString),
        url: Schema.optional(Schema.String),
      }),
    ),
  });
export const v2_core_eventSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  changes: Schema.optional(Schema.Unknown),
  context: Schema.optional(Schema.String),
  created: Schema.String,
  id: Schema.String,
  livemode: Schema.Boolean,
  object: Schema.Literals(["v2.core.event"]),
  reason: Schema.optional(
    Schema.Struct({
      request: Schema.optional(
        Schema.Struct({
          id: Schema.String,
          idempotency_key: Schema.String,
        }),
      ),
      type: Schema.Literals(["request"]),
    }),
  ),
  type: Schema.String,
});
