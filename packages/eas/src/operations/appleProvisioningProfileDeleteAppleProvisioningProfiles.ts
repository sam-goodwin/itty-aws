import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation appleProvisioningProfileDeleteAppleProvisioningProfiles($ids: [ID!]!) {\n  appleProvisioningProfile {\n    deleteAppleProvisioningProfiles(ids: $ids) {\n      id\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const AppleProvisioningProfileDeleteAppleProvisioningProfilesInput =
  Schema.Struct({
    ids: Schema.Array(Schema.String),
  }).pipe(
    T.Http({ method: "POST", path: "/graphql" }),
    T.GraphQLOp({
      query: __document,
      operationName: "appleProvisioningProfileDeleteAppleProvisioningProfiles",
      type: "mutation",
    }),
  );
export type AppleProvisioningProfileDeleteAppleProvisioningProfilesInput =
  typeof AppleProvisioningProfileDeleteAppleProvisioningProfilesInput.Type;

// Output Schema (GraphQL selection set)
export const AppleProvisioningProfileDeleteAppleProvisioningProfilesOutput =
  Schema.Array(
    Schema.Struct({
      id: Schema.String,
    }),
  ).pipe(
    T.ResponsePath("appleProvisioningProfile.deleteAppleProvisioningProfiles"),
  );
export type AppleProvisioningProfileDeleteAppleProvisioningProfilesOutput =
  typeof AppleProvisioningProfileDeleteAppleProvisioningProfilesOutput.Type;

export const appleProvisioningProfileDeleteAppleProvisioningProfiles = API.make(
  () => ({
    inputSchema: AppleProvisioningProfileDeleteAppleProvisioningProfilesInput,
    outputSchema: AppleProvisioningProfileDeleteAppleProvisioningProfilesOutput,
  }),
);
