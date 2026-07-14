import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface ListPaymentMethodsInput {
  pageSize?: number;
  pageToken?: string;
}
export const ListPaymentMethodsInput =
  /*@__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number),
    pageToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "GET", path: "/v2/payment-methods" }),
  ) as unknown as Schema.Codec<ListPaymentMethodsInput>;

// Output Schema
export interface ListPaymentMethodsOutput {
  paymentMethods: (
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
        sepa: {
          asset: string;
          bankName: string;
          ibanLast4: string;
          bic: string;
        };
      }
  )[];
  nextPageToken?: string;
}
export const ListPaymentMethodsOutput =
  /*@__PURE__*/ Schema.Struct({
    paymentMethods: Schema.Array(
      Schema.Union([
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
      ]),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ListPaymentMethodsOutput>;

// The operation
/**
 * List payment methods
 *
 * List payment methods linked to your entity. Payment methods represent external financial instruments that can be used as a target for transfers. The list will not include disabled or deleted payment methods.
 * **Currently Supported Types:**
 * - `fedwire`: Domestic USD wire transfers
 * - `swift`: International wire transfers
 * - `sepa`: SEPA EUR transfers
 * **Note:** Payment methods are created and verified through your linked CDP entity. Currently, fetching payment methods is only supported for Prime investment vehicles linked to CDP.
 *
 * @param pageSize - The number of resources to return per page.
 * @param pageToken - The token for the next page of resources, if any.
 */
export const listPaymentMethods = /*@__PURE__*/ API.make(() => ({
  inputSchema: ListPaymentMethodsInput,
  outputSchema: ListPaymentMethodsOutput,
}));
