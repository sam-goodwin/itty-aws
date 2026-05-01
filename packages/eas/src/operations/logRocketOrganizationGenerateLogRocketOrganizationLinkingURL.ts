import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation logRocketOrganizationGenerateLogRocketOrganizationLinkingURL($input: GenerateLogRocketOrganizationLinkingURLInput!) {\n  logRocketOrganization {\n    generateLogRocketOrganizationLinkingURL(input: $input) {\n      url\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const LogRocketOrganizationGenerateLogRocketOrganizationLinkingURLInput =
  Schema.Struct({
    input: Schema.Struct({
      accountId: Schema.String,
      callbackUrl: Schema.String,
    }),
  }).pipe(
    T.Http({ method: "POST", path: "/graphql" }),
    T.GraphQLOp({
      query: __document,
      operationName:
        "logRocketOrganizationGenerateLogRocketOrganizationLinkingURL",
      type: "mutation",
    }),
  );
export type LogRocketOrganizationGenerateLogRocketOrganizationLinkingURLInput =
  typeof LogRocketOrganizationGenerateLogRocketOrganizationLinkingURLInput.Type;

// Output Schema (GraphQL selection set)
export const LogRocketOrganizationGenerateLogRocketOrganizationLinkingURLOutput =
  Schema.Struct({
    url: Schema.String,
  }).pipe(
    T.ResponsePath(
      "logRocketOrganization.generateLogRocketOrganizationLinkingURL",
    ),
  );
export type LogRocketOrganizationGenerateLogRocketOrganizationLinkingURLOutput =
  typeof LogRocketOrganizationGenerateLogRocketOrganizationLinkingURLOutput.Type;

export const logRocketOrganizationGenerateLogRocketOrganizationLinkingURL =
  API.make(() => ({
    inputSchema:
      LogRocketOrganizationGenerateLogRocketOrganizationLinkingURLInput,
    outputSchema:
      LogRocketOrganizationGenerateLogRocketOrganizationLinkingURLOutput,
  }));
