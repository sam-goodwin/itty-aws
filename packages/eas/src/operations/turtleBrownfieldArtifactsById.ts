import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query turtleBrownfieldArtifactsById($turtleBrownfieldArtifactId: ID!) {\n  turtleBrownfieldArtifacts {\n    byId(turtleBrownfieldArtifactId: $turtleBrownfieldArtifactId) {\n      bundleName\n      createdAt\n      downloadUrl\n      id\n      platform\n      sizeBytes\n      updatedAt\n      version\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const TurtleBrownfieldArtifactsByIdInput = Schema.Struct({
  turtleBrownfieldArtifactId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "turtleBrownfieldArtifactsById",
    type: "query",
  }),
);
export type TurtleBrownfieldArtifactsByIdInput =
  typeof TurtleBrownfieldArtifactsByIdInput.Type;

// Output Schema (GraphQL selection set)
export const TurtleBrownfieldArtifactsByIdOutput = Schema.Struct({
  bundleName: Schema.String,
  createdAt: Schema.String,
  downloadUrl: Schema.NullOr(Schema.String),
  id: Schema.String,
  platform: Schema.Literals(["ANDROID", "IOS"]),
  sizeBytes: Schema.NullOr(Schema.Number),
  updatedAt: Schema.String,
  version: Schema.String,
}).pipe(T.ResponsePath("turtleBrownfieldArtifacts.byId"));
export type TurtleBrownfieldArtifactsByIdOutput =
  typeof TurtleBrownfieldArtifactsByIdOutput.Type;

export const turtleBrownfieldArtifactsById = API.make(() => ({
  inputSchema: TurtleBrownfieldArtifactsByIdInput,
  outputSchema: TurtleBrownfieldArtifactsByIdOutput,
}));
