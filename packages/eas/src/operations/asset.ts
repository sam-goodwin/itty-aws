import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document = "mutation asset {\n  asset\n}";

// Input Schema (GraphQL variables)
export const AssetInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "asset",
    type: "mutation",
  }),
);
export type AssetInput = typeof AssetInput.Type;

// Output Schema (GraphQL selection set)
export const AssetOutput = Schema.Unknown;
export type AssetOutput = typeof AssetOutput.Type;

export const asset = API.make(() => ({
  inputSchema: AssetInput,
  outputSchema: AssetOutput,
}));
