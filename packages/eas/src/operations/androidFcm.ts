import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document = "mutation androidFcm {\n  androidFcm\n}";

// Input Schema (GraphQL variables)
export const AndroidFcmInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "androidFcm",
    type: "mutation",
  }),
);
export type AndroidFcmInput = typeof AndroidFcmInput.Type;

// Output Schema (GraphQL selection set)
export const AndroidFcmOutput = Schema.Unknown;
export type AndroidFcmOutput = typeof AndroidFcmOutput.Type;

/**
 * Mutations that modify an FCM V0/Legacy credential
 */
export const androidFcm = API.make(() => ({
  inputSchema: AndroidFcmInput,
  outputSchema: AndroidFcmOutput,
}));
