import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation androidFcmDeleteAndroidFcm($id: ID!) {\n  androidFcm {\n    deleteAndroidFcm(id: $id) {\n      id\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const AndroidFcmDeleteAndroidFcmInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "androidFcmDeleteAndroidFcm",
    type: "mutation",
  }),
);
export type AndroidFcmDeleteAndroidFcmInput =
  typeof AndroidFcmDeleteAndroidFcmInput.Type;

// Output Schema (GraphQL selection set)
export const AndroidFcmDeleteAndroidFcmOutput = Schema.Struct({
  id: Schema.String,
}).pipe(T.ResponsePath("androidFcm.deleteAndroidFcm"));
export type AndroidFcmDeleteAndroidFcmOutput =
  typeof AndroidFcmDeleteAndroidFcmOutput.Type;

export const androidFcmDeleteAndroidFcm = API.make(() => ({
  inputSchema: AndroidFcmDeleteAndroidFcmInput,
  outputSchema: AndroidFcmDeleteAndroidFcmOutput,
}));
