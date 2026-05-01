import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation androidKeystoreDeleteAndroidKeystore($id: ID!) {\n  androidKeystore {\n    deleteAndroidKeystore(id: $id) {\n      id\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const AndroidKeystoreDeleteAndroidKeystoreInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "androidKeystoreDeleteAndroidKeystore",
    type: "mutation",
  }),
);
export type AndroidKeystoreDeleteAndroidKeystoreInput =
  typeof AndroidKeystoreDeleteAndroidKeystoreInput.Type;

// Output Schema (GraphQL selection set)
export const AndroidKeystoreDeleteAndroidKeystoreOutput = Schema.Struct({
  id: Schema.String,
}).pipe(T.ResponsePath("androidKeystore.deleteAndroidKeystore"));
export type AndroidKeystoreDeleteAndroidKeystoreOutput =
  typeof AndroidKeystoreDeleteAndroidKeystoreOutput.Type;

export const androidKeystoreDeleteAndroidKeystore = API.make(() => ({
  inputSchema: AndroidKeystoreDeleteAndroidKeystoreInput,
  outputSchema: AndroidKeystoreDeleteAndroidKeystoreOutput,
}));
