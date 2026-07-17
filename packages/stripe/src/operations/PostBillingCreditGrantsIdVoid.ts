import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  SensitiveOutputString,
  SensitiveOutputNullableString,
} from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface PostBillingCreditGrantsIdVoidInput {
  id: string;
  expand?: string[];
}
export const PostBillingCreditGrantsIdVoidInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/billing/credit_grants/{id}/void",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<PostBillingCreditGrantsIdVoidInput>;

// Output Schema
export interface PostBillingCreditGrantsIdVoidOutput {
  amount: {
    monetary: { currency: string; value: number } | null;
    type: "monetary";
  };
  applicability_config: {
    scope: { price_type?: "metered"; prices?: { id: string | null }[] };
  };
  category: "paid" | "promotional";
  created: number;
  customer: unknown;
  customer_account: string | null;
  effective_at: number | null;
  expires_at: number | null;
  id: string;
  livemode: boolean;
  metadata: Record<string, string>;
  name: string | null;
  object: "billing.credit_grant";
  priority: number | null;
  test_clock:
    | string
    | {
        created: number;
        deletes_after: number;
        frozen_time: number;
        id: string;
        livemode: boolean;
        name: string | null;
        object: "test_helpers.test_clock";
        status: "advancing" | "internal_failure" | "ready";
        status_details: { advancing?: { target_frozen_time: number } };
      }
    | null;
  updated: number;
  voided_at: number | null;
}
export const PostBillingCreditGrantsIdVoidOutput =
  /*@__PURE__*/ Schema.Struct({
    amount: Schema.Struct({
      monetary: Schema.NullOr(
        Schema.Struct({
          currency: Schema.String,
          value: Schema.Number,
        }),
      ),
      type: Schema.Literals(["monetary"]),
    }),
    applicability_config: Schema.Struct({
      scope: Schema.Struct({
        price_type: Schema.optional(Schema.Literals(["metered"])),
        prices: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.NullOr(Schema.String),
            }),
          ),
        ),
      }),
    }),
    category: Schema.Literals(["paid", "promotional"]),
    created: Schema.Number,
    customer: Schema.Unknown,
    customer_account: Schema.NullOr(Schema.String),
    effective_at: Schema.NullOr(Schema.Number),
    expires_at: Schema.NullOr(Schema.Number),
    id: Schema.String,
    livemode: Schema.Boolean,
    metadata: Schema.Record(Schema.String, Schema.String),
    name: Schema.NullOr(Schema.String),
    object: Schema.Literals(["billing.credit_grant"]),
    priority: Schema.NullOr(Schema.Number),
    test_clock: Schema.NullOr(
      Schema.Union([
        Schema.String,
        Schema.Struct({
          created: Schema.Number,
          deletes_after: Schema.Number,
          frozen_time: Schema.Number,
          id: Schema.String,
          livemode: Schema.Boolean,
          name: Schema.NullOr(Schema.String),
          object: Schema.Literals(["test_helpers.test_clock"]),
          status: Schema.Literals(["advancing", "internal_failure", "ready"]),
          status_details: Schema.Struct({
            advancing: Schema.optional(
              Schema.Struct({
                target_frozen_time: Schema.Number,
              }),
            ),
          }),
        }),
      ]),
    ),
    updated: Schema.Number,
    voided_at: Schema.NullOr(Schema.Number),
  }) as unknown as Schema.Codec<PostBillingCreditGrantsIdVoidOutput>;

// The operation
/**
 * Void a credit grant
 *
 * <p>Voids a credit grant.</p>
 *
 * @param id - Unique identifier for the object.
 */
export const PostBillingCreditGrantsIdVoid =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PostBillingCreditGrantsIdVoidInput,
    outputSchema: PostBillingCreditGrantsIdVoidOutput,
  }));
