import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query accountSSOConfigurationPublicData {\n  accountSSOConfigurationPublicData\n}";

// Input Schema (GraphQL variables)
export const AccountSSOConfigurationPublicDataInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "accountSSOConfigurationPublicData",
    type: "query",
  }),
);
export type AccountSSOConfigurationPublicDataInput =
  typeof AccountSSOConfigurationPublicDataInput.Type;

// Output Schema (GraphQL selection set)
export const AccountSSOConfigurationPublicDataOutput = Schema.Unknown;
export type AccountSSOConfigurationPublicDataOutput =
  typeof AccountSSOConfigurationPublicDataOutput.Type;

/**
 * Top-level query object for querying AccountSSOConfigurationPublicData
 */
export const accountSSOConfigurationPublicData = API.make(() => ({
  inputSchema: AccountSSOConfigurationPublicDataInput,
  outputSchema: AccountSSOConfigurationPublicDataOutput,
}));
