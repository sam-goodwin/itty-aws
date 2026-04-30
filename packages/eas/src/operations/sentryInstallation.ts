import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document = "mutation sentryInstallation {\n  sentryInstallation\n}";

// Input Schema (GraphQL variables)
export const SentryInstallationInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "sentryInstallation",
    type: "mutation",
  }),
);
export type SentryInstallationInput = typeof SentryInstallationInput.Type;

// Output Schema (GraphQL selection set)
export const SentryInstallationOutput = Schema.Unknown;
export type SentryInstallationOutput = typeof SentryInstallationOutput.Type;

/**
 * Mutations for Sentry installations
 */
export const sentryInstallation = API.make(() => ({
  inputSchema: SentryInstallationInput,
  outputSchema: SentryInstallationOutput,
}));
