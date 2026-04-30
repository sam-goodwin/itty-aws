import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document = "query backgroundJobReceipt {\n  backgroundJobReceipt\n}";

// Input Schema (GraphQL variables)
export const BackgroundJobReceiptInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "backgroundJobReceipt",
    type: "query",
  }),
);
export type BackgroundJobReceiptInput = typeof BackgroundJobReceiptInput.Type;

// Output Schema (GraphQL selection set)
export const BackgroundJobReceiptOutput = Schema.Unknown;
export type BackgroundJobReceiptOutput = typeof BackgroundJobReceiptOutput.Type;

export const backgroundJobReceipt = API.make(() => ({
  inputSchema: BackgroundJobReceiptInput,
  outputSchema: BackgroundJobReceiptOutput,
}));
