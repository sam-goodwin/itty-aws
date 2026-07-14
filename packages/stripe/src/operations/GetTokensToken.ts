import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  SensitiveOutputString,
  SensitiveOutputNullableString,
} from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface GetTokensTokenInput {
  token: string;
  expand?: string;
}
export const GetTokensTokenInput = /*@__PURE__*/ Schema.Struct({
  token: Schema.String.pipe(T.PathParam()),
  expand: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/v1/tokens/{token}",
    contentType: "form-urlencoded",
  }),
) as unknown as Schema.Codec<GetTokensTokenInput>;

// Output Schema
export interface GetTokensTokenOutput {
  bank_account?: {
    account?: unknown;
    account_holder_name: string | null;
    account_holder_type: string | null;
    account_type: string | null;
    available_payout_methods?: ("instant" | "standard")[] | null;
    bank_name: string | null;
    country: string;
    currency: string;
    customer?: unknown;
    default_for_currency?: boolean | null;
    fingerprint: string | null;
    future_requirements?: unknown;
    id: string;
    last4: string;
    metadata?: Record<string, string> | null;
    object: "bank_account";
    requirements?: unknown;
    routing_number: string | null;
    status: string;
  };
  card?: {
    account?: unknown;
    address_city: string | null;
    address_country: string | null;
    address_line1: string | null;
    address_line1_check: string | null;
    address_line2: string | null;
    address_state: string | null;
    address_zip: string | null;
    address_zip_check: string | null;
    allow_redisplay?: "always" | "limited" | "unspecified" | null;
    available_payout_methods?: ("instant" | "standard")[] | null;
    brand: string;
    country: string | null;
    currency?: string | null;
    customer?: unknown;
    cvc_check: string | null;
    default_for_currency?: boolean | null;
    description?: string;
    dynamic_last4: string | null;
    exp_month: number;
    exp_year: number;
    fingerprint?: string | null;
    funding: string;
    id: string;
    iin?: string;
    issuer?: string;
    last4: string;
    metadata: Record<string, string> | null;
    name: string | null;
    networks?: { preferred: string | null };
    object: "card";
    regulated_status: "regulated" | "unregulated" | null;
    status?: string | null;
    tokenization_method: string | null;
  };
  client_ip: string | null;
  created: number;
  id: string;
  livemode: boolean;
  object: "token";
  type: string;
  used: boolean;
}
export const GetTokensTokenOutput = /*@__PURE__*/ Schema.Struct({
  bank_account: Schema.optional(
    Schema.Struct({
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
    }),
  ),
  card: Schema.optional(
    Schema.Struct({
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
      networks: Schema.optional(
        Schema.Struct({
          preferred: Schema.NullOr(Schema.String),
        }),
      ),
      object: Schema.Literals(["card"]),
      regulated_status: Schema.NullOr(
        Schema.Literals(["regulated", "unregulated"]),
      ),
      status: Schema.optional(Schema.NullOr(Schema.String)),
      tokenization_method: Schema.NullOr(Schema.String),
    }),
  ),
  client_ip: Schema.NullOr(Schema.String),
  created: Schema.Number,
  id: Schema.String,
  livemode: Schema.Boolean,
  object: Schema.Literals(["token"]),
  type: Schema.String,
  used: Schema.Boolean,
}) as unknown as Schema.Codec<GetTokensTokenOutput>;

// The operation
/**
 * Retrieve a token
 *
 * <p>Retrieves the token with the given ID.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetTokensToken = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetTokensTokenInput,
  outputSchema: GetTokensTokenOutput,
}));
