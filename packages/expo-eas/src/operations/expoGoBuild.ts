import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query expoGoBuild {\n  expoGoBuild {\n    supportedSdkVersionKeys\n    supportedSdkVersions {\n      isBeta\n      isDeprecated\n      isLatest\n      sdkVersion\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const ExpoGoBuildInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "expoGoBuild",
    type: "query",
  }),
);
export type ExpoGoBuildInput = typeof ExpoGoBuildInput.Type;

// Output Schema (GraphQL selection set)
export const ExpoGoBuildOutput = Schema.Struct({
  supportedSdkVersionKeys: Schema.Array(Schema.String),
  supportedSdkVersions: Schema.Array(
    Schema.Struct({
      isBeta: Schema.Boolean,
      isDeprecated: Schema.Boolean,
      isLatest: Schema.Boolean,
      sdkVersion: Schema.String,
    }),
  ),
}).pipe(T.ResponsePath("expoGoBuild"));
export type ExpoGoBuildOutput = typeof ExpoGoBuildOutput.Type;

export const expoGoBuild = API.make(() => ({
  inputSchema: ExpoGoBuildInput,
  outputSchema: ExpoGoBuildOutput,
}));
