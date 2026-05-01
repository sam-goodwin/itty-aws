import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation environmentSecretCreateEnvironmentSecretForAccount($accountId: String!, $environmentSecretData: CreateEnvironmentSecretInput!) {\n  environmentSecret {\n    createEnvironmentSecretForAccount(accountId: $accountId, environmentSecretData: $environmentSecretData) {\n      createdAt\n      id\n      name\n      type\n      updatedAt\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const EnvironmentSecretCreateEnvironmentSecretForAccountInput =
  Schema.Struct({
    accountId: Schema.String,
    environmentSecretData: Schema.Struct({
      name: Schema.String,
      type: Schema.optional(
        Schema.NullOr(Schema.Literals(["FILE_BASE64", "STRING"])),
      ),
      value: Schema.String,
    }),
  }).pipe(
    T.Http({ method: "POST", path: "/graphql" }),
    T.GraphQLOp({
      query: __document,
      operationName: "environmentSecretCreateEnvironmentSecretForAccount",
      type: "mutation",
    }),
  );
export type EnvironmentSecretCreateEnvironmentSecretForAccountInput =
  typeof EnvironmentSecretCreateEnvironmentSecretForAccountInput.Type;

// Output Schema (GraphQL selection set)
export const EnvironmentSecretCreateEnvironmentSecretForAccountOutput =
  Schema.Struct({
    createdAt: Schema.String,
    id: Schema.String,
    name: Schema.String,
    type: Schema.Literals(["FILE_BASE64", "STRING"]),
    updatedAt: Schema.String,
  }).pipe(
    T.ResponsePath("environmentSecret.createEnvironmentSecretForAccount"),
  );
export type EnvironmentSecretCreateEnvironmentSecretForAccountOutput =
  typeof EnvironmentSecretCreateEnvironmentSecretForAccountOutput.Type;

export const environmentSecretCreateEnvironmentSecretForAccount = API.make(
  () => ({
    inputSchema: EnvironmentSecretCreateEnvironmentSecretForAccountInput,
    outputSchema: EnvironmentSecretCreateEnvironmentSecretForAccountOutput,
  }),
);
