import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface PostTreasuryFinancialAccountsFinancialAccountCloseInput {
  financial_account: string;
  expand?: string[];
  forwarding_settings?: {
    financial_account?: string;
    payment_method?: string;
    type: "financial_account" | "payment_method";
  };
}
export const PostTreasuryFinancialAccountsFinancialAccountCloseInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    financial_account: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.Array(Schema.String)),
    forwarding_settings: Schema.optional(
      Schema.Struct({
        financial_account: Schema.optional(Schema.String),
        payment_method: Schema.optional(Schema.String),
        type: Schema.Literals(["financial_account", "payment_method"]),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/treasury/financial_accounts/{financial_account}/close",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<PostTreasuryFinancialAccountsFinancialAccountCloseInput>;

// Output Schema
export interface PostTreasuryFinancialAccountsFinancialAccountCloseOutput {
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
export const PostTreasuryFinancialAccountsFinancialAccountCloseOutput =
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
  }) as unknown as Schema.Codec<PostTreasuryFinancialAccountsFinancialAccountCloseOutput>;

// The operation
/**
 * Close a FinancialAccount
 *
 * <p>Closes a FinancialAccount. A FinancialAccount can only be closed if it has a zero balance, has no pending InboundTransfers, and has canceled all attached Issuing cards.</p>
 */
export const PostTreasuryFinancialAccountsFinancialAccountClose =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PostTreasuryFinancialAccountsFinancialAccountCloseInput,
    outputSchema: PostTreasuryFinancialAccountsFinancialAccountCloseOutput,
  }));
