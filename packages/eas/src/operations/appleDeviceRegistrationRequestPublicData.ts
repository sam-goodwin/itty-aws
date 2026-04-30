import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query appleDeviceRegistrationRequestPublicData {\n  appleDeviceRegistrationRequestPublicData\n}";

// Input Schema (GraphQL variables)
export const AppleDeviceRegistrationRequestPublicDataInput = Schema.Struct(
  {},
).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "appleDeviceRegistrationRequestPublicData",
    type: "query",
  }),
);
export type AppleDeviceRegistrationRequestPublicDataInput =
  typeof AppleDeviceRegistrationRequestPublicDataInput.Type;

// Output Schema (GraphQL selection set)
export const AppleDeviceRegistrationRequestPublicDataOutput = Schema.Unknown;
export type AppleDeviceRegistrationRequestPublicDataOutput =
  typeof AppleDeviceRegistrationRequestPublicDataOutput.Type;

/**
 * Top-level query object for querying AppleDeviceRegistrationRequest publicly.
 */
export const appleDeviceRegistrationRequestPublicData = API.make(() => ({
  inputSchema: AppleDeviceRegistrationRequestPublicDataInput,
  outputSchema: AppleDeviceRegistrationRequestPublicDataOutput,
}));
