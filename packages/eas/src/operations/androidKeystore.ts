import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document = "mutation androidKeystore {\n  androidKeystore\n}";

// Input Schema (GraphQL variables)
export const AndroidKeystoreInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "androidKeystore",
    type: "mutation",
  }),
);
export type AndroidKeystoreInput = typeof AndroidKeystoreInput.Type;

// Output Schema (GraphQL selection set)
export const AndroidKeystoreOutput = Schema.Unknown;
export type AndroidKeystoreOutput = typeof AndroidKeystoreOutput.Type;

/**
 * Mutations that modify a Keystore
 */
export const androidKeystore = API.make(() => ({
  inputSchema: AndroidKeystoreInput,
  outputSchema: AndroidKeystoreOutput,
}));
