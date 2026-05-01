import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation appleDeviceDeleteAppleDevice($id: ID!) {\n  appleDevice {\n    deleteAppleDevice(id: $id) {\n      id\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const AppleDeviceDeleteAppleDeviceInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "appleDeviceDeleteAppleDevice",
    type: "mutation",
  }),
);
export type AppleDeviceDeleteAppleDeviceInput =
  typeof AppleDeviceDeleteAppleDeviceInput.Type;

// Output Schema (GraphQL selection set)
export const AppleDeviceDeleteAppleDeviceOutput = Schema.Struct({
  id: Schema.String,
}).pipe(T.ResponsePath("appleDevice.deleteAppleDevice"));
export type AppleDeviceDeleteAppleDeviceOutput =
  typeof AppleDeviceDeleteAppleDeviceOutput.Type;

export const appleDeviceDeleteAppleDevice = API.make(() => ({
  inputSchema: AppleDeviceDeleteAppleDeviceInput,
  outputSchema: AppleDeviceDeleteAppleDeviceOutput,
}));
