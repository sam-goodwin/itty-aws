import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation appleProvisioningProfile {\n  appleProvisioningProfile\n}";

// Input Schema (GraphQL variables)
export const AppleProvisioningProfileInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "appleProvisioningProfile",
    type: "mutation",
  }),
);
export type AppleProvisioningProfileInput =
  typeof AppleProvisioningProfileInput.Type;

// Output Schema (GraphQL selection set)
export const AppleProvisioningProfileOutput = Schema.Unknown;
export type AppleProvisioningProfileOutput =
  typeof AppleProvisioningProfileOutput.Type;

/**
 * Mutations that modify a Provisioning Profile
 */
export const appleProvisioningProfile = API.make(() => ({
  inputSchema: AppleProvisioningProfileInput,
  outputSchema: AppleProvisioningProfileOutput,
}));
