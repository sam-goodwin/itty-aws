import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document = "mutation appleDevice {\n  appleDevice\n}";

// Input Schema (GraphQL variables)
export const AppleDeviceInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "appleDevice",
    type: "mutation",
  }),
);
export type AppleDeviceInput = typeof AppleDeviceInput.Type;

// Output Schema (GraphQL selection set)
export const AppleDeviceOutput = Schema.Unknown;
export type AppleDeviceOutput = typeof AppleDeviceOutput.Type;

/**
 * Mutations that modify an Apple Device
 */
export const appleDevice = API.make(() => ({
  inputSchema: AppleDeviceInput,
  outputSchema: AppleDeviceOutput,
}));
