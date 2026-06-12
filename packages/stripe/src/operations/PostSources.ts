import * as Schema from "effect/Schema";
import {
  source_code_verification_flowSchema,
  source_orderSchema,
  source_receiver_flowSchema,
  source_redirect_flowSchema,
  source_type_ach_credit_transferSchema,
  source_type_ach_debitSchema,
  source_type_acss_debitSchema,
  source_type_alipaySchema,
  source_type_au_becs_debitSchema,
  source_type_bancontactSchema,
  source_type_cardSchema,
  source_type_card_presentSchema,
  source_type_epsSchema,
  source_type_giropaySchema,
  source_type_idealSchema,
  source_type_klarnaSchema,
  source_type_multibancoSchema,
  source_type_p24Schema,
  source_type_sepa_credit_transferSchema,
  source_type_sepa_debitSchema,
  source_type_sofortSchema,
  source_type_three_d_secureSchema,
  source_type_wechatSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveOutputString } from "../sensitive.ts";

// Input Schema
export const PostSourcesInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  amount: Schema.optional(Schema.Number),
  currency: Schema.optional(Schema.String),
  customer: Schema.optional(Schema.String),
  expand: Schema.optional(Schema.Array(Schema.String)),
  flow: Schema.optional(
    Schema.Literals(["code_verification", "none", "receiver", "redirect"]),
  ),
  mandate: Schema.optional(
    Schema.Struct({
      acceptance: Schema.optional(
        Schema.Struct({
          date: Schema.optional(Schema.Number),
          ip: Schema.optional(Schema.String),
          offline: Schema.optional(
            Schema.Struct({
              contact_email: Schema.String,
            }),
          ),
          online: Schema.optional(
            Schema.Struct({
              date: Schema.optional(Schema.Number),
              ip: Schema.optional(Schema.String),
              user_agent: Schema.optional(Schema.String),
            }),
          ),
          status: Schema.Literals([
            "accepted",
            "pending",
            "refused",
            "revoked",
          ]),
          type: Schema.optional(Schema.Literals(["offline", "online"])),
          user_agent: Schema.optional(Schema.String),
        }),
      ),
      amount: Schema.optional(Schema.Unknown),
      currency: Schema.optional(Schema.String),
      interval: Schema.optional(
        Schema.Literals(["one_time", "scheduled", "variable"]),
      ),
      notification_method: Schema.optional(
        Schema.Literals([
          "deprecated_none",
          "email",
          "manual",
          "none",
          "stripe_email",
        ]),
      ),
    }),
  ),
  metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  original_source: Schema.optional(Schema.String),
  owner: Schema.optional(
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
      email: Schema.optional(Schema.String),
      name: Schema.optional(Schema.String),
      phone: Schema.optional(Schema.String),
    }),
  ),
  receiver: Schema.optional(
    Schema.Struct({
      refund_attributes_method: Schema.optional(
        Schema.Literals(["email", "manual", "none"]),
      ),
    }),
  ),
  redirect: Schema.optional(
    Schema.Struct({
      return_url: Schema.String,
    }),
  ),
  source_order: Schema.optional(
    Schema.Struct({
      items: Schema.optional(
        Schema.Array(
          Schema.Struct({
            amount: Schema.optional(Schema.Number),
            currency: Schema.optional(Schema.String),
            description: Schema.optional(Schema.String),
            parent: Schema.optional(Schema.String),
            quantity: Schema.optional(Schema.Number),
            type: Schema.optional(
              Schema.Literals(["discount", "shipping", "sku", "tax"]),
            ),
          }),
        ),
      ),
      shipping: Schema.optional(
        Schema.Struct({
          address: Schema.Struct({
            city: Schema.optional(Schema.String),
            country: Schema.optional(Schema.String),
            line1: Schema.String,
            line2: Schema.optional(Schema.String),
            postal_code: Schema.optional(Schema.String),
            state: Schema.optional(Schema.String),
          }),
          carrier: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          phone: Schema.optional(Schema.String),
          tracking_number: Schema.optional(Schema.String),
        }),
      ),
    }),
  ),
  statement_descriptor: Schema.optional(Schema.String),
  token: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  usage: Schema.optional(Schema.Literals(["reusable", "single_use"])),
}).pipe(
  T.Http({
    method: "POST",
    path: "/v1/sources",
    contentType: "form-urlencoded",
  }),
);
export type PostSourcesInput = typeof PostSourcesInput.Type;

// Output Schema
export const PostSourcesOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  ach_credit_transfer: Schema.optional(
    Schema.suspend(() => source_type_ach_credit_transferSchema),
  ),
  ach_debit: Schema.optional(Schema.suspend(() => source_type_ach_debitSchema)),
  acss_debit: Schema.optional(
    Schema.suspend(() => source_type_acss_debitSchema),
  ),
  alipay: Schema.optional(Schema.suspend(() => source_type_alipaySchema)),
  allow_redisplay: Schema.NullOr(
    Schema.Literals(["always", "limited", "unspecified"]),
  ),
  amount: Schema.NullOr(Schema.Number),
  au_becs_debit: Schema.optional(
    Schema.suspend(() => source_type_au_becs_debitSchema),
  ),
  bancontact: Schema.optional(
    Schema.suspend(() => source_type_bancontactSchema),
  ),
  card: Schema.optional(Schema.suspend(() => source_type_cardSchema)),
  card_present: Schema.optional(
    Schema.suspend(() => source_type_card_presentSchema),
  ),
  client_secret: SensitiveOutputString,
  code_verification: Schema.optional(
    Schema.suspend(() => source_code_verification_flowSchema),
  ),
  created: Schema.Number,
  currency: Schema.NullOr(Schema.String),
  customer: Schema.optional(Schema.String),
  eps: Schema.optional(Schema.suspend(() => source_type_epsSchema)),
  flow: Schema.String,
  giropay: Schema.optional(Schema.suspend(() => source_type_giropaySchema)),
  id: Schema.String,
  ideal: Schema.optional(Schema.suspend(() => source_type_idealSchema)),
  klarna: Schema.optional(Schema.suspend(() => source_type_klarnaSchema)),
  livemode: Schema.Boolean,
  metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
  multibanco: Schema.optional(
    Schema.suspend(() => source_type_multibancoSchema),
  ),
  object: Schema.Literals(["source"]),
  owner: Schema.Unknown,
  p24: Schema.optional(Schema.suspend(() => source_type_p24Schema)),
  receiver: Schema.optional(Schema.suspend(() => source_receiver_flowSchema)),
  redirect: Schema.optional(Schema.suspend(() => source_redirect_flowSchema)),
  sepa_credit_transfer: Schema.optional(
    Schema.suspend(() => source_type_sepa_credit_transferSchema),
  ),
  sepa_debit: Schema.optional(
    Schema.suspend(() => source_type_sepa_debitSchema),
  ),
  sofort: Schema.optional(Schema.suspend(() => source_type_sofortSchema)),
  source_order: Schema.optional(Schema.suspend(() => source_orderSchema)),
  statement_descriptor: Schema.NullOr(Schema.String),
  status: Schema.String,
  three_d_secure: Schema.optional(
    Schema.suspend(() => source_type_three_d_secureSchema),
  ),
  type: Schema.Literals([
    "ach_credit_transfer",
    "ach_debit",
    "acss_debit",
    "alipay",
    "au_becs_debit",
    "bancontact",
    "card",
    "card_present",
    "eps",
    "giropay",
    "ideal",
    "klarna",
    "multibanco",
    "p24",
    "sepa_credit_transfer",
    "sepa_debit",
    "sofort",
    "three_d_secure",
    "wechat",
  ]),
  usage: Schema.NullOr(Schema.String),
  wechat: Schema.optional(Schema.suspend(() => source_type_wechatSchema)),
});
export type PostSourcesOutput = typeof PostSourcesOutput.Type;

// The operation
/**
 * Shares a source
 *
 * <p>Creates a new source object.</p>
 */
export const PostSources = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PostSourcesInput,
  outputSchema: PostSourcesOutput,
}));
