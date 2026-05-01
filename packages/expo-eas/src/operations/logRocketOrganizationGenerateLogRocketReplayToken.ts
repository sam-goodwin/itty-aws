import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation logRocketOrganizationGenerateLogRocketReplayToken($accountId: ID!) {\n  logRocketOrganization {\n    generateLogRocketReplayToken(accountId: $accountId) {\n      orgSlug\n      replayToken\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const LogRocketOrganizationGenerateLogRocketReplayTokenInput =
  Schema.Struct({
    accountId: Schema.String,
  }).pipe(
    T.Http({ method: "POST", path: "/graphql" }),
    T.GraphQLOp({
      query: __document,
      operationName: "logRocketOrganizationGenerateLogRocketReplayToken",
      type: "mutation",
    }),
  );
export type LogRocketOrganizationGenerateLogRocketReplayTokenInput =
  typeof LogRocketOrganizationGenerateLogRocketReplayTokenInput.Type;

// Output Schema (GraphQL selection set)
export const LogRocketOrganizationGenerateLogRocketReplayTokenOutput =
  Schema.Struct({
    orgSlug: Schema.String,
    replayToken: Schema.String,
  }).pipe(T.ResponsePath("logRocketOrganization.generateLogRocketReplayToken"));
export type LogRocketOrganizationGenerateLogRocketReplayTokenOutput =
  typeof LogRocketOrganizationGenerateLogRocketReplayTokenOutput.Type;

export const logRocketOrganizationGenerateLogRocketReplayToken = API.make(
  () => ({
    inputSchema: LogRocketOrganizationGenerateLogRocketReplayTokenInput,
    outputSchema: LogRocketOrganizationGenerateLogRocketReplayTokenOutput,
  }),
);
