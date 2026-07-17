import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetPaymentMethodInput {
  paymentMethodId: string;
}
export const GetPaymentMethodInput = /*@__PURE__*/ Schema.Struct({
  paymentMethodId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "GET", path: "/v2/payment-methods/{paymentMethodId}" }),
) as unknown as Schema.Codec<GetPaymentMethodInput>;

// Output Schema
export type GetPaymentMethodOutput =
  | {
      paymentMethodId: string;
      active: boolean;
      createdAt: string;
      updatedAt: string;
      paymentRail: "fedwire";
      fedwire: {
        asset: string;
        bankName: string;
        accountLast4: string;
        routingNumber: string;
      };
    }
  | {
      paymentMethodId: string;
      active: boolean;
      createdAt: string;
      updatedAt: string;
      paymentRail: "swift";
      swift: {
        asset: string;
        bankName: string;
        accountLast4: string;
        ibanLast4?: string;
        bic: string;
      };
    }
  | {
      paymentMethodId: string;
      active: boolean;
      createdAt: string;
      updatedAt: string;
      paymentRail: "sepa";
      sepa: { asset: string; bankName: string; ibanLast4: string; bic: string };
    };
export const GetPaymentMethodOutput = /*@__PURE__*/ Schema.Union([
  Schema.Struct({
    paymentMethodId: Schema.String,
    active: Schema.Boolean,
    createdAt: Schema.String,
    updatedAt: Schema.String,
    paymentRail: Schema.Literals(["fedwire"]),
    fedwire: Schema.Struct({
      asset: Schema.String,
      bankName: Schema.String,
      accountLast4: Schema.String,
      routingNumber: Schema.String,
    }),
  }),
  Schema.Struct({
    paymentMethodId: Schema.String,
    active: Schema.Boolean,
    createdAt: Schema.String,
    updatedAt: Schema.String,
    paymentRail: Schema.Literals(["swift"]),
    swift: Schema.Struct({
      asset: Schema.String,
      bankName: Schema.String,
      accountLast4: Schema.String,
      ibanLast4: Schema.optional(Schema.String),
      bic: Schema.String,
    }),
  }),
  Schema.Struct({
    paymentMethodId: Schema.String,
    active: Schema.Boolean,
    createdAt: Schema.String,
    updatedAt: Schema.String,
    paymentRail: Schema.Literals(["sepa"]),
    sepa: Schema.Struct({
      asset: Schema.String,
      bankName: Schema.String,
      ibanLast4: Schema.String,
      bic: Schema.String,
    }),
  }),
]) as unknown as Schema.Codec<GetPaymentMethodOutput>;

// The operation
/**
 * Get payment method
 *
 * Get details of a specific payment method by its ID. Returns 404 if the payment method is not found or not owned by the requesting entity.
 *
 * @param paymentMethodId - The unique identifier of the payment method.
 */
export const getPaymentMethod = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetPaymentMethodInput,
  outputSchema: GetPaymentMethodOutput,
}));
