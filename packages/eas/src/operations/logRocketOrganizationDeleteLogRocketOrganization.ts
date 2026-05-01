import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation logRocketOrganizationDeleteLogRocketOrganization($accountId: ID!) {\n  logRocketOrganization {\n    deleteLogRocketOrganization(accountId: $accountId) {\n      accountId\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const LogRocketOrganizationDeleteLogRocketOrganizationInput =
  Schema.Struct({
    accountId: Schema.String,
  }).pipe(
    T.Http({ method: "POST", path: "/graphql" }),
    T.GraphQLOp({
      query: __document,
      operationName: "logRocketOrganizationDeleteLogRocketOrganization",
      type: "mutation",
    }),
  );
export type LogRocketOrganizationDeleteLogRocketOrganizationInput =
  typeof LogRocketOrganizationDeleteLogRocketOrganizationInput.Type;

// Output Schema (GraphQL selection set)
export const LogRocketOrganizationDeleteLogRocketOrganizationOutput =
  Schema.Struct({
    accountId: Schema.String,
  }).pipe(T.ResponsePath("logRocketOrganization.deleteLogRocketOrganization"));
export type LogRocketOrganizationDeleteLogRocketOrganizationOutput =
  typeof LogRocketOrganizationDeleteLogRocketOrganizationOutput.Type;

export const logRocketOrganizationDeleteLogRocketOrganization = API.make(
  () => ({
    inputSchema: LogRocketOrganizationDeleteLogRocketOrganizationInput,
    outputSchema: LogRocketOrganizationDeleteLogRocketOrganizationOutput,
  }),
);
