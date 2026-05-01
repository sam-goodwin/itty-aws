import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query assetByStorageKeys($storageKeys: [String!]!) {\n  asset {\n    byStorageKeys(storageKeys: $storageKeys) {\n      contentType\n      fileSHA256\n      fileSize\n      finalFileSize\n      id\n      storageKey\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const AssetByStorageKeysInput = Schema.Struct({
  storageKeys: Schema.Array(Schema.String),
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "assetByStorageKeys",
    type: "query",
  }),
);
export type AssetByStorageKeysInput = typeof AssetByStorageKeysInput.Type;

// Output Schema (GraphQL selection set)
export const AssetByStorageKeysOutput = Schema.Array(
  Schema.Struct({
    contentType: Schema.String,
    fileSHA256: Schema.String,
    fileSize: Schema.Number,
    finalFileSize: Schema.NullOr(Schema.Number),
    id: Schema.String,
    storageKey: Schema.String,
  }),
).pipe(T.ResponsePath("asset.byStorageKeys"));
export type AssetByStorageKeysOutput = typeof AssetByStorageKeysOutput.Type;

export const assetByStorageKeys = API.make(() => ({
  inputSchema: AssetByStorageKeysInput,
  outputSchema: AssetByStorageKeysOutput,
}));
