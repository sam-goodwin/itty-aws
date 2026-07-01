import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  SensitiveOutputString,
  SensitiveOutputNullableString,
} from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface PostCustomersCustomerSourcesIdVerifyInput {
  customer: string;
  id: string;
  amounts?: number[];
  expand?: string[];
}
export const PostCustomersCustomerSourcesIdVerifyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customer: Schema.String.pipe(T.PathParam()),
    id: Schema.String.pipe(T.PathParam()),
    amounts: Schema.optional(Schema.Array(Schema.Number)),
    expand: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/customers/{customer}/sources/{id}/verify",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<PostCustomersCustomerSourcesIdVerifyInput>;

// Output Schema
export interface PostCustomersCustomerSourcesIdVerifyOutput {
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
}
export const PostCustomersCustomerSourcesIdVerifyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<PostCustomersCustomerSourcesIdVerifyOutput>;

// The operation
/**
 * Verify a bank account
 *
 * <p>Verify a specified bank account for a given customer.</p>
 */
export const PostCustomersCustomerSourcesIdVerify =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PostCustomersCustomerSourcesIdVerifyInput,
    outputSchema: PostCustomersCustomerSourcesIdVerifyOutput,
  }));
