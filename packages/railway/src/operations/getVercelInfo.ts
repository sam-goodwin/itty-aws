import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query getVercelInfo {\n  vercelInfo {\n    accounts {\n      id\n      integrationAuthId\n      isUser\n      name\n      projects {\n        accountId\n        id\n        name\n      }\n      slug\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const GetVercelInfoInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "getVercelInfo",
    type: "query",
  }),
);
export type GetVercelInfoInput = typeof GetVercelInfoInput.Type;

// Output Schema (GraphQL selection set)
export const GetVercelInfoOutput = Schema.Struct({
  accounts: Schema.Array(
    Schema.Struct({
      id: Schema.String,
      integrationAuthId: Schema.String,
      isUser: Schema.Boolean,
      name: Schema.NullOr(Schema.String),
      projects: Schema.Array(
        Schema.Struct({
          accountId: Schema.String,
          id: Schema.String,
          name: Schema.String,
        }),
      ),
      slug: Schema.NullOr(Schema.String),
    }),
  ),
}).pipe(T.ResponsePath("vercelInfo"));
export type GetVercelInfoOutput = typeof GetVercelInfoOutput.Type;

/**
 * Get information about the user's Vercel accounts
 */
export const getVercelInfo = API.make(() => ({
  inputSchema: GetVercelInfoInput,
  outputSchema: GetVercelInfoOutput,
}));
