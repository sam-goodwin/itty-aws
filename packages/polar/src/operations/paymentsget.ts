import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface PaymentsgetInput {
  id: string;
}
export const PaymentsgetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "GET", path: "/v1/payments/{id}" }),
) as unknown as Schema.Codec<PaymentsgetInput>;

// Output Schema
export type PaymentsgetOutput =
  | {
      created_at: string;
      modified_at: string | null;
      id: string;
      processor: "stripe";
      status: "pending" | "succeeded" | "failed";
      amount: number;
      currency: string;
      method: string;
      trigger:
        | "purchase"
        | "subscription_cycle"
        | "retry_dunning"
        | "retry_customer"
        | "retry_payment_method_update"
        | "retry_admin"
        | null;
      decline_reason: string | null;
      decline_message: string | null;
      organization_id: string;
      checkout_id: string | null;
      order_id: string | null;
      processor_metadata?: Record<string, unknown>;
      method_metadata: { brand: string; last4: string };
    }
  | {
      created_at: string;
      modified_at: string | null;
      id: string;
      processor: "stripe";
      status: "pending" | "succeeded" | "failed";
      amount: number;
      currency: string;
      method: string;
      trigger:
        | "purchase"
        | "subscription_cycle"
        | "retry_dunning"
        | "retry_customer"
        | "retry_payment_method_update"
        | "retry_admin"
        | null;
      decline_reason: string | null;
      decline_message: string | null;
      organization_id: string;
      checkout_id: string | null;
      order_id: string | null;
      processor_metadata?: Record<string, unknown>;
    };
export const PaymentsgetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Union([
  Schema.Struct({
    created_at: Schema.String,
    modified_at: Schema.NullOr(Schema.String),
    id: Schema.String,
    processor: Schema.Literals(["stripe"]),
    status: Schema.Literals(["pending", "succeeded", "failed"]),
    amount: Schema.Number,
    currency: Schema.String,
    method: Schema.String,
    trigger: Schema.NullOr(
      Schema.Literals([
        "purchase",
        "subscription_cycle",
        "retry_dunning",
        "retry_customer",
        "retry_payment_method_update",
        "retry_admin",
      ]),
    ),
    decline_reason: Schema.NullOr(Schema.String),
    decline_message: Schema.NullOr(Schema.String),
    organization_id: Schema.String,
    checkout_id: Schema.NullOr(Schema.String),
    order_id: Schema.NullOr(Schema.String),
    processor_metadata: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    method_metadata: Schema.Struct({
      brand: Schema.String,
      last4: Schema.String,
    }),
  }),
  Schema.Struct({
    created_at: Schema.String,
    modified_at: Schema.NullOr(Schema.String),
    id: Schema.String,
    processor: Schema.Literals(["stripe"]),
    status: Schema.Literals(["pending", "succeeded", "failed"]),
    amount: Schema.Number,
    currency: Schema.String,
    method: Schema.String,
    trigger: Schema.NullOr(
      Schema.Literals([
        "purchase",
        "subscription_cycle",
        "retry_dunning",
        "retry_customer",
        "retry_payment_method_update",
        "retry_admin",
      ]),
    ),
    decline_reason: Schema.NullOr(Schema.String),
    decline_message: Schema.NullOr(Schema.String),
    organization_id: Schema.String,
    checkout_id: Schema.NullOr(Schema.String),
    order_id: Schema.NullOr(Schema.String),
    processor_metadata: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
  }),
]) as unknown as Schema.Codec<PaymentsgetOutput>;

// The operation
/**
 * Get Payment
 *
 * Get a payment by ID.
 * **Scopes**: `payments:read`
 *
 * @param id - The payment ID.
 */
export const paymentsget = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PaymentsgetInput,
  outputSchema: PaymentsgetOutput,
}));
