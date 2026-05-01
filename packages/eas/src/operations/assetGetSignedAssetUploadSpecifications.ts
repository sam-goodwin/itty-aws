import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation assetGetSignedAssetUploadSpecifications($assetContentTypes: [String]!) {\n  asset {\n    getSignedAssetUploadSpecifications(assetContentTypes: $assetContentTypes) {\n      specifications\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const AssetGetSignedAssetUploadSpecificationsInput = Schema.Struct({
  assetContentTypes: Schema.Array(Schema.NullOr(Schema.String)),
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "assetGetSignedAssetUploadSpecifications",
    type: "mutation",
  }),
);
export type AssetGetSignedAssetUploadSpecificationsInput =
  typeof AssetGetSignedAssetUploadSpecificationsInput.Type;

// Output Schema (GraphQL selection set)
export const AssetGetSignedAssetUploadSpecificationsOutput = Schema.Struct({
  specifications: Schema.Array(Schema.String),
}).pipe(T.ResponsePath("asset.getSignedAssetUploadSpecifications"));
export type AssetGetSignedAssetUploadSpecificationsOutput =
  typeof AssetGetSignedAssetUploadSpecificationsOutput.Type;

export const assetGetSignedAssetUploadSpecifications = API.make(() => ({
  inputSchema: AssetGetSignedAssetUploadSpecificationsInput,
  outputSchema: AssetGetSignedAssetUploadSpecificationsOutput,
}));
