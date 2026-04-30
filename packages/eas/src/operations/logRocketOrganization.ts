import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation logRocketOrganization {\n  logRocketOrganization\n}";

// Input Schema (GraphQL variables)
export const LogRocketOrganizationInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "logRocketOrganization",
    type: "mutation",
  }),
);
export type LogRocketOrganizationInput = typeof LogRocketOrganizationInput.Type;

// Output Schema (GraphQL selection set)
export const LogRocketOrganizationOutput = Schema.Unknown;
export type LogRocketOrganizationOutput =
  typeof LogRocketOrganizationOutput.Type;

/**
 * Mutations for LogRocket organizations
 */
export const logRocketOrganization = API.make(() => ({
  inputSchema: LogRocketOrganizationInput,
  outputSchema: LogRocketOrganizationOutput,
}));
