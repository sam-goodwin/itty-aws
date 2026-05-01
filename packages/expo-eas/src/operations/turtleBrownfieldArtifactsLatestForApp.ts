import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query turtleBrownfieldArtifactsLatestForApp($appId: ID!, $bundleName: String!, $platform: AppPlatform!) {\n  turtleBrownfieldArtifacts {\n    latestForApp(appId: $appId, bundleName: $bundleName, platform: $platform) {\n      bundleName\n      createdAt\n      downloadUrl\n      id\n      platform\n      sizeBytes\n      updatedAt\n      version\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const TurtleBrownfieldArtifactsLatestForAppInput = Schema.Struct({
  appId: Schema.String,
  bundleName: Schema.String,
  platform: Schema.Literals(["ANDROID", "IOS"]),
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "turtleBrownfieldArtifactsLatestForApp",
    type: "query",
  }),
);
export type TurtleBrownfieldArtifactsLatestForAppInput =
  typeof TurtleBrownfieldArtifactsLatestForAppInput.Type;

// Output Schema (GraphQL selection set)
export const TurtleBrownfieldArtifactsLatestForAppOutput = Schema.NullOr(
  Schema.Struct({
    bundleName: Schema.String,
    createdAt: Schema.String,
    downloadUrl: Schema.NullOr(Schema.String),
    id: Schema.String,
    platform: Schema.Literals(["ANDROID", "IOS"]),
    sizeBytes: Schema.NullOr(Schema.Number),
    updatedAt: Schema.String,
    version: Schema.String,
  }),
).pipe(T.ResponsePath("turtleBrownfieldArtifacts.latestForApp"));
export type TurtleBrownfieldArtifactsLatestForAppOutput =
  typeof TurtleBrownfieldArtifactsLatestForAppOutput.Type;

export const turtleBrownfieldArtifactsLatestForApp = API.make(() => ({
  inputSchema: TurtleBrownfieldArtifactsLatestForAppInput,
  outputSchema: TurtleBrownfieldArtifactsLatestForAppOutput,
}));
