import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query assetMetadata($storageKeys: [String!]!) {\n  asset {\n    metadata(storageKeys: $storageKeys) {\n      status\n      storageKey\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const AssetMetadataInput = Schema.Struct({
  storageKeys: Schema.Array(Schema.String),
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "assetMetadata",
    type: "query",
  }),
);
export type AssetMetadataInput = typeof AssetMetadataInput.Type;

// Output Schema (GraphQL selection set)
export const AssetMetadataOutput = Schema.Array(
  Schema.Struct({
    status: Schema.Literals(["DOES_NOT_EXIST", "EXISTS"]),
    storageKey: Schema.String,
  }),
).pipe(T.ResponsePath("asset.metadata"));
export type AssetMetadataOutput = typeof AssetMetadataOutput.Type;

export const assetMetadata = API.make(() => ({
  inputSchema: AssetMetadataInput,
  outputSchema: AssetMetadataOutput,
}));
