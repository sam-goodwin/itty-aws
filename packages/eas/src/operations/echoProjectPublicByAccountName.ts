import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query echoProjectPublicByAccountName($accountName: String!, $after: String, $first: Int) {\n  echoProject {\n    publicByAccountName(accountName: $accountName, after: $after, first: $first) {\n      edges {\n        cursor\n        node {\n          description\n          displayName\n          id\n          initFromGitHubUrl\n          lastMessageAt\n          slug\n          updatedAt\n          visibility\n        }\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n        hasPreviousPage\n        startCursor\n      }\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const EchoProjectPublicByAccountNameInput = Schema.Struct({
  accountName: Schema.String,
  after: Schema.optional(Schema.NullOr(Schema.String)),
  first: Schema.optional(Schema.NullOr(Schema.Number)),
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "echoProjectPublicByAccountName",
    type: "query",
  }),
);
export type EchoProjectPublicByAccountNameInput =
  typeof EchoProjectPublicByAccountNameInput.Type;

// Output Schema (GraphQL selection set)
export const EchoProjectPublicByAccountNameOutput = Schema.Struct({
  edges: Schema.Array(
    Schema.Struct({
      cursor: Schema.String,
      node: Schema.Struct({
        description: Schema.NullOr(Schema.String),
        displayName: Schema.NullOr(Schema.String),
        id: Schema.String,
        initFromGitHubUrl: Schema.NullOr(Schema.String),
        lastMessageAt: Schema.NullOr(Schema.String),
        slug: Schema.NullOr(Schema.String),
        updatedAt: Schema.String,
        visibility: Schema.Literals(["PRIVATE", "PUBLIC"]),
      }),
    }),
  ),
  pageInfo: Schema.Struct({
    endCursor: Schema.NullOr(Schema.String),
    hasNextPage: Schema.Boolean,
    hasPreviousPage: Schema.Boolean,
    startCursor: Schema.NullOr(Schema.String),
  }),
}).pipe(T.ResponsePath("echoProject.publicByAccountName"));
export type EchoProjectPublicByAccountNameOutput =
  typeof EchoProjectPublicByAccountNameOutput.Type;

export const echoProjectPublicByAccountName = API.make(() => ({
  inputSchema: EchoProjectPublicByAccountNameInput,
  outputSchema: EchoProjectPublicByAccountNameOutput,
}));
