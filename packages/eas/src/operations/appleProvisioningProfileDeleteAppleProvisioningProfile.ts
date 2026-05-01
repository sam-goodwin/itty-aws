import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation appleProvisioningProfileDeleteAppleProvisioningProfile($id: ID!) {\n  appleProvisioningProfile {\n    deleteAppleProvisioningProfile(id: $id) {\n      id\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const AppleProvisioningProfileDeleteAppleProvisioningProfileInput =
  Schema.Struct({
    id: Schema.String,
  }).pipe(
    T.Http({ method: "POST", path: "/graphql" }),
    T.GraphQLOp({
      query: __document,
      operationName: "appleProvisioningProfileDeleteAppleProvisioningProfile",
      type: "mutation",
    }),
  );
export type AppleProvisioningProfileDeleteAppleProvisioningProfileInput =
  typeof AppleProvisioningProfileDeleteAppleProvisioningProfileInput.Type;

// Output Schema (GraphQL selection set)
export const AppleProvisioningProfileDeleteAppleProvisioningProfileOutput =
  Schema.Struct({
    id: Schema.String,
  }).pipe(
    T.ResponsePath("appleProvisioningProfile.deleteAppleProvisioningProfile"),
  );
export type AppleProvisioningProfileDeleteAppleProvisioningProfileOutput =
  typeof AppleProvisioningProfileDeleteAppleProvisioningProfileOutput.Type;

export const appleProvisioningProfileDeleteAppleProvisioningProfile = API.make(
  () => ({
    inputSchema: AppleProvisioningProfileDeleteAppleProvisioningProfileInput,
    outputSchema: AppleProvisioningProfileDeleteAppleProvisioningProfileOutput,
  }),
);
