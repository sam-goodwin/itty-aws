import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  SensitiveOutputString,
  SensitiveOutputNullableString,
} from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface PostTestHelpersTerminalReadersReaderPresentPaymentMethodInput {
  reader: string;
  amount_tip?: number;
  card?: { cvc?: string; exp_month: number; exp_year: number; number: string };
  card_present?: { number?: string };
  expand?: string[];
  interac_present?: { number?: string };
  type?: "card" | "card_present" | "interac_present";
}
export const PostTestHelpersTerminalReadersReaderPresentPaymentMethodInput =
  /*@__PURE__*/ Schema.Struct({
    reader: Schema.String.pipe(T.PathParam()),
    amount_tip: Schema.optional(Schema.Number),
    card: Schema.optional(
      Schema.Struct({
        cvc: Schema.optional(Schema.String),
        exp_month: Schema.Number,
        exp_year: Schema.Number,
        number: Schema.String,
      }),
    ),
    card_present: Schema.optional(
      Schema.Struct({
        number: Schema.optional(Schema.String),
      }),
    ),
    expand: Schema.optional(Schema.Array(Schema.String)),
    interac_present: Schema.optional(
      Schema.Struct({
        number: Schema.optional(Schema.String),
      }),
    ),
    type: Schema.optional(
      Schema.Literals(["card", "card_present", "interac_present"]),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/test_helpers/terminal/readers/{reader}/present_payment_method",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<PostTestHelpersTerminalReadersReaderPresentPaymentMethodInput>;

// Output Schema
export interface PostTestHelpersTerminalReadersReaderPresentPaymentMethodOutput {
  action: unknown;
  device_sw_version: string | null;
  device_type:
    | "bbpos_chipper2x"
    | "bbpos_wisepad3"
    | "bbpos_wisepos_e"
    | "mobile_phone_reader"
    | "simulated_stripe_s700"
    | "simulated_stripe_s710"
    | "simulated_verifone_m425"
    | "simulated_verifone_p630"
    | "simulated_verifone_ux700"
    | "simulated_verifone_v660p"
    | "simulated_wisepos_e"
    | "stripe_m2"
    | "stripe_s700"
    | "stripe_s710"
    | "verifone_P400"
    | "verifone_m425"
    | "verifone_p630"
    | "verifone_ux700"
    | "verifone_v660p";
  id: string;
  ip_address: string | null;
  label: string;
  last_seen_at: number | null;
  livemode: boolean;
  location:
    | string
    | {
        address: {
          city: string | null;
          country: string | null;
          line1: string | null;
          line2: string | null;
          postal_code: string | null;
          state: string | null;
        };
        address_kana?: {
          city: string | null;
          country: string | null;
          line1: string | null;
          line2: string | null;
          postal_code: string | null;
          state: string | null;
          town: string | null;
        };
        address_kanji?: {
          city: string | null;
          country: string | null;
          line1: string | null;
          line2: string | null;
          postal_code: string | null;
          state: string | null;
          town: string | null;
        };
        configuration_overrides?: string;
        display_name: string;
        display_name_kana?: string;
        display_name_kanji?: string;
        id: string;
        livemode: boolean;
        metadata: Record<string, string>;
        object: "terminal.location";
        phone?: string;
      }
    | null;
  metadata: Record<string, string>;
  object: "terminal.reader";
  serial_number: string;
  status: "offline" | "online" | null;
}
export const PostTestHelpersTerminalReadersReaderPresentPaymentMethodOutput =
  /*@__PURE__*/ Schema.Struct({
    action: Schema.Unknown,
    device_sw_version: Schema.NullOr(Schema.String),
    device_type: Schema.Literals([
      "bbpos_chipper2x",
      "bbpos_wisepad3",
      "bbpos_wisepos_e",
      "mobile_phone_reader",
      "simulated_stripe_s700",
      "simulated_stripe_s710",
      "simulated_verifone_m425",
      "simulated_verifone_p630",
      "simulated_verifone_ux700",
      "simulated_verifone_v660p",
      "simulated_wisepos_e",
      "stripe_m2",
      "stripe_s700",
      "stripe_s710",
      "verifone_P400",
      "verifone_m425",
      "verifone_p630",
      "verifone_ux700",
      "verifone_v660p",
    ]),
    id: Schema.String,
    ip_address: Schema.NullOr(Schema.String),
    label: Schema.String,
    last_seen_at: Schema.NullOr(Schema.Number),
    livemode: Schema.Boolean,
    location: Schema.NullOr(
      Schema.Union([
        Schema.String,
        Schema.Struct({
          address: Schema.Struct({
            city: Schema.NullOr(Schema.String),
            country: Schema.NullOr(Schema.String),
            line1: Schema.NullOr(Schema.String),
            line2: Schema.NullOr(Schema.String),
            postal_code: Schema.NullOr(Schema.String),
            state: Schema.NullOr(Schema.String),
          }),
          address_kana: Schema.optional(
            Schema.Struct({
              city: Schema.NullOr(Schema.String),
              country: Schema.NullOr(Schema.String),
              line1: Schema.NullOr(Schema.String),
              line2: Schema.NullOr(Schema.String),
              postal_code: Schema.NullOr(Schema.String),
              state: Schema.NullOr(Schema.String),
              town: Schema.NullOr(Schema.String),
            }),
          ),
          address_kanji: Schema.optional(
            Schema.Struct({
              city: Schema.NullOr(Schema.String),
              country: Schema.NullOr(Schema.String),
              line1: Schema.NullOr(Schema.String),
              line2: Schema.NullOr(Schema.String),
              postal_code: Schema.NullOr(Schema.String),
              state: Schema.NullOr(Schema.String),
              town: Schema.NullOr(Schema.String),
            }),
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
        }),
      ]),
    ),
    metadata: Schema.Record(Schema.String, Schema.String),
    object: Schema.Literals(["terminal.reader"]),
    serial_number: Schema.String,
    status: Schema.NullOr(Schema.Literals(["offline", "online"])),
  }) as unknown as Schema.Codec<PostTestHelpersTerminalReadersReaderPresentPaymentMethodOutput>;

// The operation
/**
 * Simulate presenting a payment method
 *
 * <p>Presents a payment method on a simulated reader. Can be used to simulate accepting a payment, saving a card or refunding a transaction.</p>
 */
export const PostTestHelpersTerminalReadersReaderPresentPaymentMethod =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PostTestHelpersTerminalReadersReaderPresentPaymentMethodInput,
    outputSchema:
      PostTestHelpersTerminalReadersReaderPresentPaymentMethodOutput,
  }));
