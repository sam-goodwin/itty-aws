import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  SensitiveOutputString,
  SensitiveOutputNullableString,
} from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface GetConfirmationTokensConfirmationTokenInput {
  confirmation_token: string;
  expand?: string;
}
export const GetConfirmationTokensConfirmationTokenInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    confirmation_token: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/confirmation_tokens/{confirmation_token}",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<GetConfirmationTokensConfirmationTokenInput>;

// Output Schema
export interface GetConfirmationTokensConfirmationTokenOutput {
  created: number;
  expires_at: number | null;
  id: string;
  livemode: boolean;
  mandate_data?: {
    customer_acceptance: {
      online: { ip_address: string | null; user_agent: string | null } | null;
      type: string;
    };
  } | null;
  object: "confirmation_token";
  payment_intent: string | null;
  payment_method_options: {
    card: {
      cvc_token: string | null;
      installments?: {
        plan?: {
          count: number | null;
          interval: "month" | null;
          type: "bonus" | "fixed_count" | "revolving";
        };
      };
    } | null;
  } | null;
  payment_method_preview: unknown;
  return_url: string | null;
  setup_future_usage: "off_session" | "on_session" | null;
  setup_intent: string | null;
  shipping: {
    address: {
      city: string | null;
      country: string | null;
      line1: string | null;
      line2: string | null;
      postal_code: string | null;
      state: string | null;
    };
    name: string;
    phone: string | null;
  } | null;
  use_stripe_sdk: boolean;
}
export const GetConfirmationTokensConfirmationTokenOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    created: Schema.Number,
    expires_at: Schema.NullOr(Schema.Number),
    id: Schema.String,
    livemode: Schema.Boolean,
    mandate_data: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          customer_acceptance: Schema.Struct({
            online: Schema.NullOr(
              Schema.Struct({
                ip_address: Schema.NullOr(Schema.String),
                user_agent: Schema.NullOr(Schema.String),
              }),
            ),
            type: Schema.String,
          }),
        }),
      ),
    ),
    object: Schema.Literals(["confirmation_token"]),
    payment_intent: Schema.NullOr(Schema.String),
    payment_method_options: Schema.NullOr(
      Schema.Struct({
        card: Schema.NullOr(
          Schema.Struct({
            cvc_token: Schema.NullOr(Schema.String),
            installments: Schema.optional(
              Schema.Struct({
                plan: Schema.optional(
                  Schema.Struct({
                    count: Schema.NullOr(Schema.Number),
                    interval: Schema.NullOr(Schema.Literals(["month"])),
                    type: Schema.Literals([
                      "bonus",
                      "fixed_count",
                      "revolving",
                    ]),
                  }),
                ),
              }),
            ),
          }),
        ),
      }),
    ),
    payment_method_preview: Schema.Unknown,
    return_url: Schema.NullOr(Schema.String),
    setup_future_usage: Schema.NullOr(
      Schema.Literals(["off_session", "on_session"]),
    ),
    setup_intent: Schema.NullOr(Schema.String),
    shipping: Schema.NullOr(
      Schema.Struct({
        address: Schema.Struct({
          city: Schema.NullOr(Schema.String),
          country: Schema.NullOr(Schema.String),
          line1: Schema.NullOr(Schema.String),
          line2: Schema.NullOr(Schema.String),
          postal_code: Schema.NullOr(Schema.String),
          state: Schema.NullOr(Schema.String),
        }),
        name: Schema.String,
        phone: Schema.NullOr(Schema.String),
      }),
    ),
    use_stripe_sdk: Schema.Boolean,
  }) as unknown as Schema.Codec<GetConfirmationTokensConfirmationTokenOutput>;

// The operation
/**
 * Retrieve a ConfirmationToken
 *
 * <p>Retrieves an existing ConfirmationToken object</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetConfirmationTokensConfirmationToken =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GetConfirmationTokensConfirmationTokenInput,
    outputSchema: GetConfirmationTokensConfirmationTokenOutput,
  }));
