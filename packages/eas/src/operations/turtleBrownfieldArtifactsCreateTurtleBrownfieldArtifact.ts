import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation turtleBrownfieldArtifactsCreateTurtleBrownfieldArtifact($input: CreateBrownfieldArtifactInput!) {\n  turtleBrownfieldArtifacts {\n    createTurtleBrownfieldArtifact(input: $input) {\n      artifact {\n        bundleName\n        createdAt\n        downloadUrl\n        id\n        platform\n        sizeBytes\n        updatedAt\n        version\n      }\n      uploadHeaders\n      uploadUrl\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const TurtleBrownfieldArtifactsCreateTurtleBrownfieldArtifactInput =
  Schema.Struct({
    input: Schema.Struct({
      appId: Schema.String,
      bundleName: Schema.String,
      filename: Schema.String,
      platform: Schema.Literals(["ANDROID", "IOS"]),
      producingTurtleJobRunId: Schema.String,
      size: Schema.Number,
      version: Schema.optional(Schema.NullOr(Schema.String)),
    }),
  }).pipe(
    T.Http({ method: "POST", path: "/graphql" }),
    T.GraphQLOp({
      query: __document,
      operationName: "turtleBrownfieldArtifactsCreateTurtleBrownfieldArtifact",
      type: "mutation",
    }),
  );
export type TurtleBrownfieldArtifactsCreateTurtleBrownfieldArtifactInput =
  typeof TurtleBrownfieldArtifactsCreateTurtleBrownfieldArtifactInput.Type;

// Output Schema (GraphQL selection set)
export const TurtleBrownfieldArtifactsCreateTurtleBrownfieldArtifactOutput =
  Schema.Struct({
    artifact: Schema.Struct({
      bundleName: Schema.String,
      createdAt: Schema.String,
      downloadUrl: Schema.NullOr(Schema.String),
      id: Schema.String,
      platform: Schema.Literals(["ANDROID", "IOS"]),
      sizeBytes: Schema.NullOr(Schema.Number),
      updatedAt: Schema.String,
      version: Schema.String,
    }),
    uploadHeaders: Schema.Unknown,
    uploadUrl: Schema.String,
  }).pipe(
    T.ResponsePath("turtleBrownfieldArtifacts.createTurtleBrownfieldArtifact"),
  );
export type TurtleBrownfieldArtifactsCreateTurtleBrownfieldArtifactOutput =
  typeof TurtleBrownfieldArtifactsCreateTurtleBrownfieldArtifactOutput.Type;

export const turtleBrownfieldArtifactsCreateTurtleBrownfieldArtifact = API.make(
  () => ({
    inputSchema: TurtleBrownfieldArtifactsCreateTurtleBrownfieldArtifactInput,
    outputSchema: TurtleBrownfieldArtifactsCreateTurtleBrownfieldArtifactOutput,
  }),
);
