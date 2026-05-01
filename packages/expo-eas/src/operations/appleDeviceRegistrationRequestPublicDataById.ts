import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query appleDeviceRegistrationRequestPublicDataById($id: ID!) {\n  appleDeviceRegistrationRequestPublicData {\n    byId(id: $id) {\n      id\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const AppleDeviceRegistrationRequestPublicDataByIdInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "appleDeviceRegistrationRequestPublicDataById",
    type: "query",
  }),
);
export type AppleDeviceRegistrationRequestPublicDataByIdInput =
  typeof AppleDeviceRegistrationRequestPublicDataByIdInput.Type;

// Output Schema (GraphQL selection set)
export const AppleDeviceRegistrationRequestPublicDataByIdOutput = Schema.NullOr(
  Schema.Struct({
    id: Schema.String,
  }),
).pipe(T.ResponsePath("appleDeviceRegistrationRequestPublicData.byId"));
export type AppleDeviceRegistrationRequestPublicDataByIdOutput =
  typeof AppleDeviceRegistrationRequestPublicDataByIdOutput.Type;

export const appleDeviceRegistrationRequestPublicDataById = API.make(() => ({
  inputSchema: AppleDeviceRegistrationRequestPublicDataByIdInput,
  outputSchema: AppleDeviceRegistrationRequestPublicDataByIdOutput,
}));
