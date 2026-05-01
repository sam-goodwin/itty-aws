import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation environmentSecretCreateEnvironmentSecretForApp($appId: String!, $environmentSecretData: CreateEnvironmentSecretInput!) {\n  environmentSecret {\n    createEnvironmentSecretForApp(appId: $appId, environmentSecretData: $environmentSecretData) {\n      createdAt\n      id\n      name\n      type\n      updatedAt\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const EnvironmentSecretCreateEnvironmentSecretForAppInput =
  Schema.Struct({
    appId: Schema.String,
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
      operationName: "environmentSecretCreateEnvironmentSecretForApp",
      type: "mutation",
    }),
  );
export type EnvironmentSecretCreateEnvironmentSecretForAppInput =
  typeof EnvironmentSecretCreateEnvironmentSecretForAppInput.Type;

// Output Schema (GraphQL selection set)
export const EnvironmentSecretCreateEnvironmentSecretForAppOutput =
  Schema.Struct({
    createdAt: Schema.String,
    id: Schema.String,
    name: Schema.String,
    type: Schema.Literals(["FILE_BASE64", "STRING"]),
    updatedAt: Schema.String,
  }).pipe(T.ResponsePath("environmentSecret.createEnvironmentSecretForApp"));
export type EnvironmentSecretCreateEnvironmentSecretForAppOutput =
  typeof EnvironmentSecretCreateEnvironmentSecretForAppOutput.Type;

export const environmentSecretCreateEnvironmentSecretForApp = API.make(() => ({
  inputSchema: EnvironmentSecretCreateEnvironmentSecretForAppInput,
  outputSchema: EnvironmentSecretCreateEnvironmentSecretForAppOutput,
}));
