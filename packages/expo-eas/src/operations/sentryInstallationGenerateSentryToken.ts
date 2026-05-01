import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation sentryInstallationGenerateSentryToken($accountId: ID!) {\n  sentryInstallation {\n    generateSentryToken(accountId: $accountId) {\n      installationId\n      orgSlug\n      token\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const SentryInstallationGenerateSentryTokenInput = Schema.Struct({
  accountId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "sentryInstallationGenerateSentryToken",
    type: "mutation",
  }),
);
export type SentryInstallationGenerateSentryTokenInput =
  typeof SentryInstallationGenerateSentryTokenInput.Type;

// Output Schema (GraphQL selection set)
export const SentryInstallationGenerateSentryTokenOutput = Schema.Struct({
  installationId: Schema.String,
  orgSlug: Schema.String,
  token: Schema.String,
}).pipe(T.ResponsePath("sentryInstallation.generateSentryToken"));
export type SentryInstallationGenerateSentryTokenOutput =
  typeof SentryInstallationGenerateSentryTokenOutput.Type;

export const sentryInstallationGenerateSentryToken = API.make(() => ({
  inputSchema: SentryInstallationGenerateSentryTokenInput,
  outputSchema: SentryInstallationGenerateSentryTokenOutput,
}));
