import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface PaymentslistInput {
  organization_id?: string | ReadonlyArray<string> | null;
  checkout_id?: string | ReadonlyArray<string> | null;
  order_id?: string | ReadonlyArray<string> | null;
  customer_id?: string | ReadonlyArray<string> | null;
  status?:
    | "pending"
    | "succeeded"
    | "failed"
    | ReadonlyArray<"pending" | "succeeded" | "failed">
    | null;
  method?: string | ReadonlyArray<string> | null;
  customer_email?: string | ReadonlyArray<string> | null;
  page?: number;
  limit?: number;
  sorting?: ReadonlyArray<
    | "created_at"
    | "-created_at"
    | "status"
    | "-status"
    | "amount"
    | "-amount"
    | "method"
    | "-method"
  > | null;
}
export const PaymentslistInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organization_id: Schema.optional(
    Schema.NullOr(Schema.Union([Schema.String, Schema.Array(Schema.String)])),
  ),
  checkout_id: Schema.optional(
    Schema.NullOr(Schema.Union([Schema.String, Schema.Array(Schema.String)])),
  ),
  order_id: Schema.optional(
    Schema.NullOr(Schema.Union([Schema.String, Schema.Array(Schema.String)])),
  ),
  customer_id: Schema.optional(
    Schema.NullOr(Schema.Union([Schema.String, Schema.Array(Schema.String)])),
  ),
  status: Schema.optional(
    Schema.NullOr(
      Schema.Union([
        Schema.Literals(["pending", "succeeded", "failed"]),
        Schema.Array(Schema.Literals(["pending", "succeeded", "failed"])),
      ]),
    ),
  ),
  method: Schema.optional(
    Schema.NullOr(Schema.Union([Schema.String, Schema.Array(Schema.String)])),
  ),
  customer_email: Schema.optional(
    Schema.NullOr(Schema.Union([Schema.String, Schema.Array(Schema.String)])),
  ),
  page: Schema.optional(Schema.Number),
  limit: Schema.optional(Schema.Number),
  sorting: Schema.optional(
    Schema.NullOr(
      Schema.Array(
        Schema.Literals([
          "created_at",
          "-created_at",
          "status",
          "-status",
          "amount",
          "-amount",
          "method",
          "-method",
        ]),
      ),
    ),
  ),
}).pipe(
  T.Http({ method: "GET", path: "/v1/payments/" }),
) as unknown as Schema.Codec<PaymentslistInput>;

// Output Schema
export interface PaymentslistOutput {
  items: ReadonlyArray<
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
      }
  >;
  pagination: { total_count: number; max_page: number };
}
export const PaymentslistOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  items: Schema.Array(
    Schema.Union([
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
    ]),
  ),
  pagination: Schema.Struct({
    total_count: Schema.Number,
    max_page: Schema.Number,
  }),
}) as unknown as Schema.Codec<PaymentslistOutput>;

// The operation
/**
 * List Payments
 *
 * List payments.
 * **Scopes**: `payments:read`
 *
 * @param organization_id - Filter by organization ID.
 * @param checkout_id - Filter by checkout ID.
 * @param order_id - Filter by order ID.
 * @param customer_id - Filter by customer ID.
 * @param status - Filter by payment status.
 * @param method - Filter by payment method.
 * @param customer_email - Filter by customer email.
 * @param page - Page number, defaults to 1.
 * @param limit - Size of a page, defaults to 10. Maximum is 100.
 * @param sorting - Sorting criterion. Several criteria can be used simultaneously and will be applied in order. Add a minus sign `-` before the criteria name to sort by descending order.
 */
export const paymentslist = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PaymentslistInput,
  outputSchema: PaymentslistOutput,
}));
