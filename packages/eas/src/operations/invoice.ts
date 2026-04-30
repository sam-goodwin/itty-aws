import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document = "query invoice {\n  invoice\n}";

// Input Schema (GraphQL variables)
export const InvoiceInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "invoice",
    type: "query",
  }),
);
export type InvoiceInput = typeof InvoiceInput.Type;

// Output Schema (GraphQL selection set)
export const InvoiceOutput = Schema.Unknown;
export type InvoiceOutput = typeof InvoiceOutput.Type;

/**
 * Top-level query object for querying Stripe Invoices.
 */
export const invoice = API.make(() => ({
  inputSchema: InvoiceInput,
  outputSchema: InvoiceOutput,
}));
