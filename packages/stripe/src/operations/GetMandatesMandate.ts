import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  SensitiveOutputString,
  SensitiveOutputNullableString,
} from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface GetMandatesMandateInput {
  mandate: string;
  expand?: string;
}
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
  ) as unknown as Schema.Codec<GetMandatesMandateInput>;

// Output Schema
export interface GetMandatesMandateOutput {
  customer_acceptance: {
    accepted_at: number | null;
    offline?: {};
    online?: { ip_address: string | null; user_agent: string | null };
    type: "offline" | "online";
  };
  id: string;
  livemode: boolean;
  multi_use?: { amount?: number; currency?: string };
  object: "mandate";
  on_behalf_of?: string;
  payment_method: unknown;
  payment_method_details: {
    acss_debit?: {
      default_for?: ("invoice" | "subscription")[];
      interval_description: string | null;
      payment_schedule: "combined" | "interval" | "sporadic";
      transaction_type: "business" | "personal";
    };
    amazon_pay?: {};
    au_becs_debit?: { url: string };
    bacs_debit?: {
      display_name: string | null;
      network_status: "accepted" | "pending" | "refused" | "revoked";
      reference: string;
      revocation_reason:
        | "account_closed"
        | "bank_account_restricted"
        | "bank_ownership_changed"
        | "could_not_process"
        | "debit_not_authorized"
        | null;
      service_user_number: string | null;
      url: string;
    };
    card?: {};
    cashapp?: {};
    kakao_pay?: {};
    klarna?: {};
    kr_card?: {};
    link?: {};
    naver_pay?: {};
    nz_bank_account?: {};
    paypal?: { billing_agreement_id: string | null; payer_id: string | null };
    payto?: {
      amount: number | null;
      amount_type: "fixed" | "maximum";
      end_date: string | null;
      payment_schedule:
        | "adhoc"
        | "annual"
        | "daily"
        | "fortnightly"
        | "monthly"
        | "quarterly"
        | "semi_annual"
        | "weekly";
      payments_per_period: number | null;
      purpose:
        | "dependant_support"
        | "government"
        | "loan"
        | "mortgage"
        | "other"
        | "pension"
        | "personal"
        | "retail"
        | "salary"
        | "tax"
        | "utility"
        | null;
      start_date: string | null;
    };
    pix?: {
      amount_includes_iof?: "always" | "never";
      amount_type?: "fixed" | "maximum";
      end_date?: string;
      payment_schedule?:
        | "halfyearly"
        | "monthly"
        | "quarterly"
        | "weekly"
        | "yearly";
      reference?: string;
      start_date?: string;
    };
    revolut_pay?: {};
    sepa_debit?: { reference: string; url: string };
    twint?: {};
    type: string;
    upi?: {
      amount: number | null;
      amount_type: "fixed" | "maximum" | null;
      description: string | null;
      end_date: number | null;
    };
    us_bank_account?: { collection_method?: "paper" };
  };
  single_use?: { amount: number; currency: string };
  status: "active" | "inactive" | "pending";
  type: "multi_use" | "single_use";
}
export const GetMandatesMandateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customer_acceptance: Schema.Struct({
      accepted_at: Schema.NullOr(Schema.Number),
      offline: Schema.optional(Schema.Struct({})),
      online: Schema.optional(
        Schema.Struct({
          ip_address: Schema.NullOr(Schema.String),
          user_agent: Schema.NullOr(Schema.String),
        }),
      ),
      type: Schema.Literals(["offline", "online"]),
    }),
    id: Schema.String,
    livemode: Schema.Boolean,
    multi_use: Schema.optional(
      Schema.Struct({
        amount: Schema.optional(Schema.Number),
        currency: Schema.optional(Schema.String),
      }),
    ),
    object: Schema.Literals(["mandate"]),
    on_behalf_of: Schema.optional(Schema.String),
    payment_method: Schema.Unknown,
    payment_method_details: Schema.Struct({
      acss_debit: Schema.optional(
        Schema.Struct({
          default_for: Schema.optional(
            Schema.Array(Schema.Literals(["invoice", "subscription"])),
          ),
          interval_description: Schema.NullOr(Schema.String),
          payment_schedule: Schema.Literals([
            "combined",
            "interval",
            "sporadic",
          ]),
          transaction_type: Schema.Literals(["business", "personal"]),
        }),
      ),
      amazon_pay: Schema.optional(Schema.Struct({})),
      au_becs_debit: Schema.optional(
        Schema.Struct({
          url: Schema.String,
        }),
      ),
      bacs_debit: Schema.optional(
        Schema.Struct({
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
        }),
      ),
      card: Schema.optional(Schema.Struct({})),
      cashapp: Schema.optional(Schema.Struct({})),
      kakao_pay: Schema.optional(Schema.Struct({})),
      klarna: Schema.optional(Schema.Struct({})),
      kr_card: Schema.optional(Schema.Struct({})),
      link: Schema.optional(Schema.Struct({})),
      naver_pay: Schema.optional(Schema.Struct({})),
      nz_bank_account: Schema.optional(Schema.Struct({})),
      paypal: Schema.optional(
        Schema.Struct({
          billing_agreement_id: Schema.NullOr(Schema.String),
          payer_id: Schema.NullOr(Schema.String),
        }),
      ),
      payto: Schema.optional(
        Schema.Struct({
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
        }),
      ),
      pix: Schema.optional(
        Schema.Struct({
          amount_includes_iof: Schema.optional(
            Schema.Literals(["always", "never"]),
          ),
          amount_type: Schema.optional(Schema.Literals(["fixed", "maximum"])),
          end_date: Schema.optional(Schema.String),
          payment_schedule: Schema.optional(
            Schema.Literals([
              "halfyearly",
              "monthly",
              "quarterly",
              "weekly",
              "yearly",
            ]),
          ),
          reference: Schema.optional(Schema.String),
          start_date: Schema.optional(Schema.String),
        }),
      ),
      revolut_pay: Schema.optional(Schema.Struct({})),
      sepa_debit: Schema.optional(
        Schema.Struct({
          reference: Schema.String,
          url: Schema.String,
        }),
      ),
      twint: Schema.optional(Schema.Struct({})),
      type: Schema.String,
      upi: Schema.optional(
        Schema.Struct({
          amount: Schema.NullOr(Schema.Number),
          amount_type: Schema.NullOr(Schema.Literals(["fixed", "maximum"])),
          description: Schema.NullOr(Schema.String),
          end_date: Schema.NullOr(Schema.Number),
        }),
      ),
      us_bank_account: Schema.optional(
        Schema.Struct({
          collection_method: Schema.optional(Schema.Literals(["paper"])),
        }),
      ),
    }),
    single_use: Schema.optional(
      Schema.Struct({
        amount: Schema.Number,
        currency: Schema.String,
      }),
    ),
    status: Schema.Literals(["active", "inactive", "pending"]),
    type: Schema.Literals(["multi_use", "single_use"]),
  }) as unknown as Schema.Codec<GetMandatesMandateOutput>;

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
