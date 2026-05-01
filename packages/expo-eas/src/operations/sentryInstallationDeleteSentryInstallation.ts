import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation sentryInstallationDeleteSentryInstallation($accountId: ID!) {\n  sentryInstallation {\n    deleteSentryInstallation(accountId: $accountId) {\n      id\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const SentryInstallationDeleteSentryInstallationInput = Schema.Struct({
  accountId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "sentryInstallationDeleteSentryInstallation",
    type: "mutation",
  }),
);
export type SentryInstallationDeleteSentryInstallationInput =
  typeof SentryInstallationDeleteSentryInstallationInput.Type;

// Output Schema (GraphQL selection set)
export const SentryInstallationDeleteSentryInstallationOutput = Schema.Struct({
  id: Schema.String,
}).pipe(T.ResponsePath("sentryInstallation.deleteSentryInstallation"));
export type SentryInstallationDeleteSentryInstallationOutput =
  typeof SentryInstallationDeleteSentryInstallationOutput.Type;

export const sentryInstallationDeleteSentryInstallation = API.make(() => ({
  inputSchema: SentryInstallationDeleteSentryInstallationInput,
  outputSchema: SentryInstallationDeleteSentryInstallationOutput,
}));
