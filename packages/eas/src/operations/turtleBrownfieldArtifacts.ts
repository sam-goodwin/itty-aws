import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation turtleBrownfieldArtifacts {\n  turtleBrownfieldArtifacts\n}";

// Input Schema (GraphQL variables)
export const TurtleBrownfieldArtifactsInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "turtleBrownfieldArtifacts",
    type: "mutation",
  }),
);
export type TurtleBrownfieldArtifactsInput =
  typeof TurtleBrownfieldArtifactsInput.Type;

// Output Schema (GraphQL selection set)
export const TurtleBrownfieldArtifactsOutput = Schema.Unknown;
export type TurtleBrownfieldArtifactsOutput =
  typeof TurtleBrownfieldArtifactsOutput.Type;

export const turtleBrownfieldArtifacts = API.make(() => ({
  inputSchema: TurtleBrownfieldArtifactsInput,
  outputSchema: TurtleBrownfieldArtifactsOutput,
}));
