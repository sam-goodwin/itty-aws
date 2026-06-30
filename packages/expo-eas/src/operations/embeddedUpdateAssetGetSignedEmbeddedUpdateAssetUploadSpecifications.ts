import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation embeddedUpdateAssetGetSignedEmbeddedUpdateAssetUploadSpecifications($appId: ID!, $contentType: String!, $embeddedUpdateId: ID!) {\n  embeddedUpdateAsset {\n    getSignedEmbeddedUpdateAssetUploadSpecifications(appId: $appId, contentType: $contentType, embeddedUpdateId: $embeddedUpdateId) {\n      fields\n      presignedUrl\n      storageKey\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const EmbeddedUpdateAssetGetSignedEmbeddedUpdateAssetUploadSpecificationsInput =
  Schema.Struct({
    appId: Schema.String,
    contentType: Schema.String,
    embeddedUpdateId: Schema.String,
  }).pipe(
    T.Http({ method: "POST", path: "/graphql" }),
    T.GraphQLOp({
      query: __document,
      operationName:
        "embeddedUpdateAssetGetSignedEmbeddedUpdateAssetUploadSpecifications",
      type: "mutation",
    }),
  );
export type EmbeddedUpdateAssetGetSignedEmbeddedUpdateAssetUploadSpecificationsInput =
  typeof EmbeddedUpdateAssetGetSignedEmbeddedUpdateAssetUploadSpecificationsInput.Type;

// Output Schema (GraphQL selection set)
export const EmbeddedUpdateAssetGetSignedEmbeddedUpdateAssetUploadSpecificationsOutput =
  Schema.Struct({
    fields: Schema.Unknown,
    presignedUrl: Schema.String,
    storageKey: Schema.String,
  }).pipe(
    T.ResponsePath(
      "embeddedUpdateAsset.getSignedEmbeddedUpdateAssetUploadSpecifications",
    ),
  );
export type EmbeddedUpdateAssetGetSignedEmbeddedUpdateAssetUploadSpecificationsOutput =
  typeof EmbeddedUpdateAssetGetSignedEmbeddedUpdateAssetUploadSpecificationsOutput.Type;

export const embeddedUpdateAssetGetSignedEmbeddedUpdateAssetUploadSpecifications =
  API.make(() => ({
    inputSchema:
      EmbeddedUpdateAssetGetSignedEmbeddedUpdateAssetUploadSpecificationsInput,
    outputSchema:
      EmbeddedUpdateAssetGetSignedEmbeddedUpdateAssetUploadSpecificationsOutput,
  }));
