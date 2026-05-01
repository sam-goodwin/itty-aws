import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query invoicePreviewInvoiceForAdditionalAgentCreditsCountUpdate($accountID: ID!, $additionalAgentCreditsCount: Int!) {\n  invoice {\n    previewInvoiceForAdditionalAgentCreditsCountUpdate(accountID: $accountID, additionalAgentCreditsCount: $additionalAgentCreditsCount) {\n      amountDue\n      amountPaid\n      amountRemaining\n      discount {\n        amount\n        duration\n        durationInMonths\n        id\n        name\n        type\n      }\n      id\n      lineItems {\n        amount\n        description\n        id\n        metadata\n        period {\n          end\n          start\n        }\n        plan {\n          id\n          name\n        }\n        price {\n          id\n        }\n        proration\n        quantity\n        unitAmountExcludingTax\n      }\n      period {\n        end\n        start\n      }\n      startingBalance\n      subtotal\n      total\n      totalDiscountedAmount\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const InvoicePreviewInvoiceForAdditionalAgentCreditsCountUpdateInput =
  Schema.Struct({
    accountID: Schema.String,
    additionalAgentCreditsCount: Schema.Number,
  }).pipe(
    T.Http({ method: "POST", path: "/graphql" }),
    T.GraphQLOp({
      query: __document,
      operationName:
        "invoicePreviewInvoiceForAdditionalAgentCreditsCountUpdate",
      type: "query",
    }),
  );
export type InvoicePreviewInvoiceForAdditionalAgentCreditsCountUpdateInput =
  typeof InvoicePreviewInvoiceForAdditionalAgentCreditsCountUpdateInput.Type;

// Output Schema (GraphQL selection set)
export const InvoicePreviewInvoiceForAdditionalAgentCreditsCountUpdateOutput =
  Schema.NullOr(
    Schema.Struct({
      amountDue: Schema.Number,
      amountPaid: Schema.Number,
      amountRemaining: Schema.Number,
      discount: Schema.NullOr(
        Schema.Struct({
          amount: Schema.Number,
          duration: Schema.String,
          durationInMonths: Schema.NullOr(Schema.Number),
          id: Schema.String,
          name: Schema.String,
          type: Schema.Literals(["AMOUNT", "PERCENTAGE"]),
        }),
      ),
      id: Schema.String,
      lineItems: Schema.Array(
        Schema.Struct({
          amount: Schema.Number,
          description: Schema.String,
          id: Schema.String,
          metadata: Schema.Unknown,
          period: Schema.Struct({
            end: Schema.String,
            start: Schema.String,
          }),
          plan: Schema.Struct({
            id: Schema.String,
            name: Schema.NullOr(Schema.String),
          }),
          price: Schema.NullOr(
            Schema.Struct({
              id: Schema.String,
            }),
          ),
          proration: Schema.Boolean,
          quantity: Schema.Number,
          unitAmountExcludingTax: Schema.NullOr(Schema.Number),
        }),
      ),
      period: Schema.Struct({
        end: Schema.String,
        start: Schema.String,
      }),
      startingBalance: Schema.Number,
      subtotal: Schema.Number,
      total: Schema.Number,
      totalDiscountedAmount: Schema.Number,
    }),
  ).pipe(
    T.ResponsePath(
      "invoice.previewInvoiceForAdditionalAgentCreditsCountUpdate",
    ),
  );
export type InvoicePreviewInvoiceForAdditionalAgentCreditsCountUpdateOutput =
  typeof InvoicePreviewInvoiceForAdditionalAgentCreditsCountUpdateOutput.Type;

export const invoicePreviewInvoiceForAdditionalAgentCreditsCountUpdate =
  API.make(() => ({
    inputSchema: InvoicePreviewInvoiceForAdditionalAgentCreditsCountUpdateInput,
    outputSchema:
      InvoicePreviewInvoiceForAdditionalAgentCreditsCountUpdateOutput,
  }));
