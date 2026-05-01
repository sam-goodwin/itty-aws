import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation echoRepositoryGenerateEchoRepositoryAccessToken($input: GenerateEchoRepositoryAccessTokenInput!) {\n  echoRepository {\n    generateEchoRepositoryAccessToken(input: $input) {\n      expiresAt\n      gitCommitterEmail\n      gitCommitterName\n      gitUrl\n      token\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const EchoRepositoryGenerateEchoRepositoryAccessTokenInput =
  Schema.Struct({
    input: Schema.Struct({
      echoProjectId: Schema.String,
      provider: Schema.String,
    }),
  }).pipe(
    T.Http({ method: "POST", path: "/graphql" }),
    T.GraphQLOp({
      query: __document,
      operationName: "echoRepositoryGenerateEchoRepositoryAccessToken",
      type: "mutation",
    }),
  );
export type EchoRepositoryGenerateEchoRepositoryAccessTokenInput =
  typeof EchoRepositoryGenerateEchoRepositoryAccessTokenInput.Type;

// Output Schema (GraphQL selection set)
export const EchoRepositoryGenerateEchoRepositoryAccessTokenOutput =
  Schema.Struct({
    expiresAt: Schema.String,
    gitCommitterEmail: Schema.String,
    gitCommitterName: Schema.String,
    gitUrl: Schema.String,
    token: Schema.String,
  }).pipe(T.ResponsePath("echoRepository.generateEchoRepositoryAccessToken"));
export type EchoRepositoryGenerateEchoRepositoryAccessTokenOutput =
  typeof EchoRepositoryGenerateEchoRepositoryAccessTokenOutput.Type;

export const echoRepositoryGenerateEchoRepositoryAccessToken = API.make(() => ({
  inputSchema: EchoRepositoryGenerateEchoRepositoryAccessTokenInput,
  outputSchema: EchoRepositoryGenerateEchoRepositoryAccessTokenOutput,
}));
