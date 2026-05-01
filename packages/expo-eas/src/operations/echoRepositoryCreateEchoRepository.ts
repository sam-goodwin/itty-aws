import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation echoRepositoryCreateEchoRepository($input: CreateEchoRepositoryInput!) {\n  echoRepository {\n    createEchoRepository(input: $input) {\n      defaultBranch\n      githubRepositoryIdentifier\n      name\n      nodeIdentifier\n      owner\n      status\n      url\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const EchoRepositoryCreateEchoRepositoryInput = Schema.Struct({
  input: Schema.Struct({
    description: Schema.optional(Schema.NullOr(Schema.String)),
    echoProjectId: Schema.String,
    force: Schema.optional(Schema.NullOr(Schema.Boolean)),
    isPrivate: Schema.optional(Schema.NullOr(Schema.Boolean)),
    orgName: Schema.String,
    provider: Schema.String,
    repoName: Schema.String,
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "echoRepositoryCreateEchoRepository",
    type: "mutation",
  }),
);
export type EchoRepositoryCreateEchoRepositoryInput =
  typeof EchoRepositoryCreateEchoRepositoryInput.Type;

// Output Schema (GraphQL selection set)
export const EchoRepositoryCreateEchoRepositoryOutput = Schema.Struct({
  defaultBranch: Schema.String,
  githubRepositoryIdentifier: Schema.Number,
  name: Schema.String,
  nodeIdentifier: Schema.String,
  owner: Schema.String,
  status: Schema.String,
  url: Schema.String,
}).pipe(T.ResponsePath("echoRepository.createEchoRepository"));
export type EchoRepositoryCreateEchoRepositoryOutput =
  typeof EchoRepositoryCreateEchoRepositoryOutput.Type;

export const echoRepositoryCreateEchoRepository = API.make(() => ({
  inputSchema: EchoRepositoryCreateEchoRepositoryInput,
  outputSchema: EchoRepositoryCreateEchoRepositoryOutput,
}));
