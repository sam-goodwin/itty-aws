import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query assetSignedUrls($storageKeys: [String!]!, $updateId: ID!) {\n  asset {\n    signedUrls(storageKeys: $storageKeys, updateId: $updateId) {\n      headers\n      storageKey\n      url\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const AssetSignedUrlsInput = Schema.Struct({
  storageKeys: Schema.Array(Schema.String),
  updateId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "assetSignedUrls",
    type: "query",
  }),
);
export type AssetSignedUrlsInput = typeof AssetSignedUrlsInput.Type;

// Output Schema (GraphQL selection set)
export const AssetSignedUrlsOutput = Schema.Array(
  Schema.Struct({
    headers: Schema.NullOr(Schema.Unknown),
    storageKey: Schema.String,
    url: Schema.String,
  }),
).pipe(T.ResponsePath("asset.signedUrls"));
export type AssetSignedUrlsOutput = typeof AssetSignedUrlsOutput.Type;

export const assetSignedUrls = API.make(() => ({
  inputSchema: AssetSignedUrlsInput,
  outputSchema: AssetSignedUrlsOutput,
}));
