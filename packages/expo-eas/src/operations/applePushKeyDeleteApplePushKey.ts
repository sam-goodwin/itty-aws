import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation applePushKeyDeleteApplePushKey($id: ID!) {\n  applePushKey {\n    deleteApplePushKey(id: $id) {\n      id\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const ApplePushKeyDeleteApplePushKeyInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "applePushKeyDeleteApplePushKey",
    type: "mutation",
  }),
);
export type ApplePushKeyDeleteApplePushKeyInput =
  typeof ApplePushKeyDeleteApplePushKeyInput.Type;

// Output Schema (GraphQL selection set)
export const ApplePushKeyDeleteApplePushKeyOutput = Schema.Struct({
  id: Schema.String,
}).pipe(T.ResponsePath("applePushKey.deleteApplePushKey"));
export type ApplePushKeyDeleteApplePushKeyOutput =
  typeof ApplePushKeyDeleteApplePushKeyOutput.Type;

export const applePushKeyDeleteApplePushKey = API.make(() => ({
  inputSchema: ApplePushKeyDeleteApplePushKeyInput,
  outputSchema: ApplePushKeyDeleteApplePushKeyOutput,
}));
