import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface PostTreasuryFinancialAccountsFinancialAccountInput {
  financial_account: string;
  expand?: string[];
  features?: {
    card_issuing?: { requested: boolean };
    deposit_insurance?: { requested: boolean };
    financial_addresses?: { aba?: { requested: boolean } };
    inbound_transfers?: { ach?: { requested: boolean } };
    intra_stripe_flows?: { requested: boolean };
    outbound_payments?: {
      ach?: { requested: boolean };
      us_domestic_wire?: { requested: boolean };
    };
    outbound_transfers?: {
      ach?: { requested: boolean };
      us_domestic_wire?: { requested: boolean };
    };
  };
  forwarding_settings?: {
    financial_account?: string;
    payment_method?: string;
    type: "financial_account" | "payment_method";
  };
  metadata?: Record<string, string>;
  nickname?: string | "";
  platform_restrictions?: {
    inbound_flows?: "restricted" | "unrestricted";
    outbound_flows?: "restricted" | "unrestricted";
  };
}
export const PostTreasuryFinancialAccountsFinancialAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    financial_account: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.Array(Schema.String)),
    features: Schema.optional(
      Schema.Struct({
        card_issuing: Schema.optional(
          Schema.Struct({
            requested: Schema.Boolean,
          }),
        ),
        deposit_insurance: Schema.optional(
          Schema.Struct({
            requested: Schema.Boolean,
          }),
        ),
        financial_addresses: Schema.optional(
          Schema.Struct({
            aba: Schema.optional(
              Schema.Struct({
                requested: Schema.Boolean,
              }),
            ),
          }),
        ),
        inbound_transfers: Schema.optional(
          Schema.Struct({
            ach: Schema.optional(
              Schema.Struct({
                requested: Schema.Boolean,
              }),
            ),
          }),
        ),
        intra_stripe_flows: Schema.optional(
          Schema.Struct({
            requested: Schema.Boolean,
          }),
        ),
        outbound_payments: Schema.optional(
          Schema.Struct({
            ach: Schema.optional(
              Schema.Struct({
                requested: Schema.Boolean,
              }),
            ),
            us_domestic_wire: Schema.optional(
              Schema.Struct({
                requested: Schema.Boolean,
              }),
            ),
          }),
        ),
        outbound_transfers: Schema.optional(
          Schema.Struct({
            ach: Schema.optional(
              Schema.Struct({
                requested: Schema.Boolean,
              }),
            ),
            us_domestic_wire: Schema.optional(
              Schema.Struct({
                requested: Schema.Boolean,
              }),
            ),
          }),
        ),
      }),
    ),
    forwarding_settings: Schema.optional(
      Schema.Struct({
        financial_account: Schema.optional(Schema.String),
        payment_method: Schema.optional(Schema.String),
        type: Schema.Literals(["financial_account", "payment_method"]),
      }),
    ),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    nickname: Schema.optional(
      Schema.Union([Schema.String, Schema.Literals([""])]),
    ),
    platform_restrictions: Schema.optional(
      Schema.Struct({
        inbound_flows: Schema.optional(
          Schema.Literals(["restricted", "unrestricted"]),
        ),
        outbound_flows: Schema.optional(
          Schema.Literals(["restricted", "unrestricted"]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/treasury/financial_accounts/{financial_account}",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<PostTreasuryFinancialAccountsFinancialAccountInput>;

// Output Schema
export interface PostTreasuryFinancialAccountsFinancialAccountOutput {
  active_features?: (
    | "card_issuing"
    | "deposit_insurance"
    | "financial_addresses.aba"
    | "financial_addresses.aba.forwarding"
    | "inbound_transfers.ach"
    | "intra_stripe_flows"
    | "outbound_payments.ach"
    | "outbound_payments.us_domestic_wire"
    | "outbound_transfers.ach"
    | "outbound_transfers.us_domestic_wire"
    | "remote_deposit_capture"
  )[];
  balance: {
    cash: Record<string, number>;
    inbound_pending: Record<string, number>;
    outbound_pending: Record<string, number>;
  };
  country: string;
  created: number;
  features?: {
    card_issuing?: {
      requested: boolean;
      status: "active" | "pending" | "restricted";
      status_details: {
        code:
          | "activating"
          | "capability_not_requested"
          | "financial_account_closed"
          | "rejected_other"
          | "rejected_unsupported_business"
          | "requirements_past_due"
          | "requirements_pending_verification"
          | "restricted_by_platform"
          | "restricted_other";
        resolution:
          | "contact_stripe"
          | "provide_information"
          | "remove_restriction"
          | null;
        restriction?: "inbound_flows" | "outbound_flows";
      }[];
    };
    deposit_insurance?: {
      requested: boolean;
      status: "active" | "pending" | "restricted";
      status_details: {
        code:
          | "activating"
          | "capability_not_requested"
          | "financial_account_closed"
          | "rejected_other"
          | "rejected_unsupported_business"
          | "requirements_past_due"
          | "requirements_pending_verification"
          | "restricted_by_platform"
          | "restricted_other";
        resolution:
          | "contact_stripe"
          | "provide_information"
          | "remove_restriction"
          | null;
        restriction?: "inbound_flows" | "outbound_flows";
      }[];
    };
    financial_addresses?: {
      aba?: {
        requested: boolean;
        status: "active" | "pending" | "restricted";
        status_details: {
          code:
            | "activating"
            | "capability_not_requested"
            | "financial_account_closed"
            | "rejected_other"
            | "rejected_unsupported_business"
            | "requirements_past_due"
            | "requirements_pending_verification"
            | "restricted_by_platform"
            | "restricted_other";
          resolution:
            | "contact_stripe"
            | "provide_information"
            | "remove_restriction"
            | null;
          restriction?: "inbound_flows" | "outbound_flows";
        }[];
      };
    };
    inbound_transfers?: {
      ach?: {
        requested: boolean;
        status: "active" | "pending" | "restricted";
        status_details: {
          code:
            | "activating"
            | "capability_not_requested"
            | "financial_account_closed"
            | "rejected_other"
            | "rejected_unsupported_business"
            | "requirements_past_due"
            | "requirements_pending_verification"
            | "restricted_by_platform"
            | "restricted_other";
          resolution:
            | "contact_stripe"
            | "provide_information"
            | "remove_restriction"
            | null;
          restriction?: "inbound_flows" | "outbound_flows";
        }[];
      };
    };
    intra_stripe_flows?: {
      requested: boolean;
      status: "active" | "pending" | "restricted";
      status_details: {
        code:
          | "activating"
          | "capability_not_requested"
          | "financial_account_closed"
          | "rejected_other"
          | "rejected_unsupported_business"
          | "requirements_past_due"
          | "requirements_pending_verification"
          | "restricted_by_platform"
          | "restricted_other";
        resolution:
          | "contact_stripe"
          | "provide_information"
          | "remove_restriction"
          | null;
        restriction?: "inbound_flows" | "outbound_flows";
      }[];
    };
    object: "treasury.financial_account_features";
    outbound_payments?: {
      ach?: {
        requested: boolean;
        status: "active" | "pending" | "restricted";
        status_details: {
          code:
            | "activating"
            | "capability_not_requested"
            | "financial_account_closed"
            | "rejected_other"
            | "rejected_unsupported_business"
            | "requirements_past_due"
            | "requirements_pending_verification"
            | "restricted_by_platform"
            | "restricted_other";
          resolution:
            | "contact_stripe"
            | "provide_information"
            | "remove_restriction"
            | null;
          restriction?: "inbound_flows" | "outbound_flows";
        }[];
      };
      us_domestic_wire?: {
        requested: boolean;
        status: "active" | "pending" | "restricted";
        status_details: {
          code:
            | "activating"
            | "capability_not_requested"
            | "financial_account_closed"
            | "rejected_other"
            | "rejected_unsupported_business"
            | "requirements_past_due"
            | "requirements_pending_verification"
            | "restricted_by_platform"
            | "restricted_other";
          resolution:
            | "contact_stripe"
            | "provide_information"
            | "remove_restriction"
            | null;
          restriction?: "inbound_flows" | "outbound_flows";
        }[];
      };
    };
    outbound_transfers?: {
      ach?: {
        requested: boolean;
        status: "active" | "pending" | "restricted";
        status_details: {
          code:
            | "activating"
            | "capability_not_requested"
            | "financial_account_closed"
            | "rejected_other"
            | "rejected_unsupported_business"
            | "requirements_past_due"
            | "requirements_pending_verification"
            | "restricted_by_platform"
            | "restricted_other";
          resolution:
            | "contact_stripe"
            | "provide_information"
            | "remove_restriction"
            | null;
          restriction?: "inbound_flows" | "outbound_flows";
        }[];
      };
      us_domestic_wire?: {
        requested: boolean;
        status: "active" | "pending" | "restricted";
        status_details: {
          code:
            | "activating"
            | "capability_not_requested"
            | "financial_account_closed"
            | "rejected_other"
            | "rejected_unsupported_business"
            | "requirements_past_due"
            | "requirements_pending_verification"
            | "restricted_by_platform"
            | "restricted_other";
          resolution:
            | "contact_stripe"
            | "provide_information"
            | "remove_restriction"
            | null;
          restriction?: "inbound_flows" | "outbound_flows";
        }[];
      };
    };
  };
  financial_addresses: {
    aba?: {
      account_holder_name: string;
      account_number?: string | null;
      account_number_last4: string;
      bank_name: string;
      routing_number: string;
    };
    supported_networks?: ("ach" | "us_domestic_wire")[];
    type: "aba";
  }[];
  id: string;
  is_default?: boolean;
  livemode: boolean;
  metadata: Record<string, string> | null;
  nickname?: string | null;
  object: "treasury.financial_account";
  pending_features?: (
    | "card_issuing"
    | "deposit_insurance"
    | "financial_addresses.aba"
    | "financial_addresses.aba.forwarding"
    | "inbound_transfers.ach"
    | "intra_stripe_flows"
    | "outbound_payments.ach"
    | "outbound_payments.us_domestic_wire"
    | "outbound_transfers.ach"
    | "outbound_transfers.us_domestic_wire"
    | "remote_deposit_capture"
  )[];
  platform_restrictions?: {
    inbound_flows: "restricted" | "unrestricted" | null;
    outbound_flows: "restricted" | "unrestricted" | null;
  } | null;
  restricted_features?: (
    | "card_issuing"
    | "deposit_insurance"
    | "financial_addresses.aba"
    | "financial_addresses.aba.forwarding"
    | "inbound_transfers.ach"
    | "intra_stripe_flows"
    | "outbound_payments.ach"
    | "outbound_payments.us_domestic_wire"
    | "outbound_transfers.ach"
    | "outbound_transfers.us_domestic_wire"
    | "remote_deposit_capture"
  )[];
  status: "closed" | "open";
  status_details: {
    closed: {
      reasons: ("account_rejected" | "closed_by_platform" | "other")[];
    } | null;
  };
  supported_currencies: string[];
}
export const PostTreasuryFinancialAccountsFinancialAccountOutput =
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
    balance: Schema.Struct({
      cash: Schema.Record(Schema.String, Schema.Number),
      inbound_pending: Schema.Record(Schema.String, Schema.Number),
      outbound_pending: Schema.Record(Schema.String, Schema.Number),
    }),
    country: Schema.String,
    created: Schema.Number,
    features: Schema.optional(
      Schema.Struct({
        card_issuing: Schema.optional(
          Schema.Struct({
            requested: Schema.Boolean,
            status: Schema.Literals(["active", "pending", "restricted"]),
            status_details: Schema.Array(
              Schema.Struct({
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
              }),
            ),
          }),
        ),
        deposit_insurance: Schema.optional(
          Schema.Struct({
            requested: Schema.Boolean,
            status: Schema.Literals(["active", "pending", "restricted"]),
            status_details: Schema.Array(
              Schema.Struct({
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
              }),
            ),
          }),
        ),
        financial_addresses: Schema.optional(
          Schema.Struct({
            aba: Schema.optional(
              Schema.Struct({
                requested: Schema.Boolean,
                status: Schema.Literals(["active", "pending", "restricted"]),
                status_details: Schema.Array(
                  Schema.Struct({
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
                  }),
                ),
              }),
            ),
          }),
        ),
        inbound_transfers: Schema.optional(
          Schema.Struct({
            ach: Schema.optional(
              Schema.Struct({
                requested: Schema.Boolean,
                status: Schema.Literals(["active", "pending", "restricted"]),
                status_details: Schema.Array(
                  Schema.Struct({
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
                  }),
                ),
              }),
            ),
          }),
        ),
        intra_stripe_flows: Schema.optional(
          Schema.Struct({
            requested: Schema.Boolean,
            status: Schema.Literals(["active", "pending", "restricted"]),
            status_details: Schema.Array(
              Schema.Struct({
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
              }),
            ),
          }),
        ),
        object: Schema.Literals(["treasury.financial_account_features"]),
        outbound_payments: Schema.optional(
          Schema.Struct({
            ach: Schema.optional(
              Schema.Struct({
                requested: Schema.Boolean,
                status: Schema.Literals(["active", "pending", "restricted"]),
                status_details: Schema.Array(
                  Schema.Struct({
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
                  }),
                ),
              }),
            ),
            us_domestic_wire: Schema.optional(
              Schema.Struct({
                requested: Schema.Boolean,
                status: Schema.Literals(["active", "pending", "restricted"]),
                status_details: Schema.Array(
                  Schema.Struct({
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
                  }),
                ),
              }),
            ),
          }),
        ),
        outbound_transfers: Schema.optional(
          Schema.Struct({
            ach: Schema.optional(
              Schema.Struct({
                requested: Schema.Boolean,
                status: Schema.Literals(["active", "pending", "restricted"]),
                status_details: Schema.Array(
                  Schema.Struct({
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
                  }),
                ),
              }),
            ),
            us_domestic_wire: Schema.optional(
              Schema.Struct({
                requested: Schema.Boolean,
                status: Schema.Literals(["active", "pending", "restricted"]),
                status_details: Schema.Array(
                  Schema.Struct({
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
                  }),
                ),
              }),
            ),
          }),
        ),
      }),
    ),
    financial_addresses: Schema.Array(
      Schema.Struct({
        aba: Schema.optional(
          Schema.Struct({
            account_holder_name: Schema.String,
            account_number: Schema.optional(Schema.NullOr(Schema.String)),
            account_number_last4: Schema.String,
            bank_name: Schema.String,
            routing_number: Schema.String,
          }),
        ),
        supported_networks: Schema.optional(
          Schema.Array(Schema.Literals(["ach", "us_domestic_wire"])),
        ),
        type: Schema.Literals(["aba"]),
      }),
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
    platform_restrictions: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          inbound_flows: Schema.NullOr(
            Schema.Literals(["restricted", "unrestricted"]),
          ),
          outbound_flows: Schema.NullOr(
            Schema.Literals(["restricted", "unrestricted"]),
          ),
        }),
      ),
    ),
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
    status_details: Schema.Struct({
      closed: Schema.NullOr(
        Schema.Struct({
          reasons: Schema.Array(
            Schema.Literals([
              "account_rejected",
              "closed_by_platform",
              "other",
            ]),
          ),
        }),
      ),
    }),
    supported_currencies: Schema.Array(Schema.String),
  }) as unknown as Schema.Codec<PostTreasuryFinancialAccountsFinancialAccountOutput>;

// The operation
/**
 * Update a FinancialAccount
 *
 * <p>Updates the details of a FinancialAccount.</p>
 */
export const PostTreasuryFinancialAccountsFinancialAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PostTreasuryFinancialAccountsFinancialAccountInput,
    outputSchema: PostTreasuryFinancialAccountsFinancialAccountOutput,
  }));
