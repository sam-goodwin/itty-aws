import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation keystoreGenerationUrl {\n  keystoreGenerationUrl {\n    createKeystoreGenerationUrl {\n      id\n      url\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const KeystoreGenerationUrlInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "keystoreGenerationUrl",
    type: "mutation",
  }),
);
export type KeystoreGenerationUrlInput = typeof KeystoreGenerationUrlInput.Type;

// Output Schema (GraphQL selection set)
export const KeystoreGenerationUrlOutput = Schema.Struct({
  createKeystoreGenerationUrl: Schema.Struct({
    id: Schema.String,
    url: Schema.String,
  }),
}).pipe(T.ResponsePath("keystoreGenerationUrl"));
export type KeystoreGenerationUrlOutput =
  typeof KeystoreGenerationUrlOutput.Type;

export const keystoreGenerationUrl = API.make(() => ({
  inputSchema: KeystoreGenerationUrlInput,
  outputSchema: KeystoreGenerationUrlOutput,
}));
