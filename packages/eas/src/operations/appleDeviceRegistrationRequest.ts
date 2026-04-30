import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation appleDeviceRegistrationRequest {\n  appleDeviceRegistrationRequest\n}";

// Input Schema (GraphQL variables)
export const AppleDeviceRegistrationRequestInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "appleDeviceRegistrationRequest",
    type: "mutation",
  }),
);
export type AppleDeviceRegistrationRequestInput =
  typeof AppleDeviceRegistrationRequestInput.Type;

// Output Schema (GraphQL selection set)
export const AppleDeviceRegistrationRequestOutput = Schema.Unknown;
export type AppleDeviceRegistrationRequestOutput =
  typeof AppleDeviceRegistrationRequestOutput.Type;

/**
 * Mutations that modify an Apple Device registration request
 */
export const appleDeviceRegistrationRequest = API.make(() => ({
  inputSchema: AppleDeviceRegistrationRequestInput,
  outputSchema: AppleDeviceRegistrationRequestOutput,
}));
