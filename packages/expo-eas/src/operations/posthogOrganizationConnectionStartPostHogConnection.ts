import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation posthogOrganizationConnectionStartPostHogConnection($input: CreatePostHogAccountRequestInput!) {\n  posthogOrganizationConnection {\n    startPostHogConnection(input: $input) {\n      __typename\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const PosthogOrganizationConnectionStartPostHogConnectionInput =
  Schema.Struct({
    input: Schema.Struct({
      accountId: Schema.String,
      region: Schema.Literals(["EU", "US"]),
    }),
  }).pipe(
    T.Http({ method: "POST", path: "/graphql" }),
    T.GraphQLOp({
      query: __document,
      operationName: "posthogOrganizationConnectionStartPostHogConnection",
      type: "mutation",
    }),
  );
export type PosthogOrganizationConnectionStartPostHogConnectionInput =
  typeof PosthogOrganizationConnectionStartPostHogConnectionInput.Type;

// Output Schema (GraphQL selection set)
export const PosthogOrganizationConnectionStartPostHogConnectionOutput =
  Schema.Unknown.pipe(
    T.ResponsePath("posthogOrganizationConnection.startPostHogConnection"),
  );
export type PosthogOrganizationConnectionStartPostHogConnectionOutput =
  typeof PosthogOrganizationConnectionStartPostHogConnectionOutput.Type;

export const posthogOrganizationConnectionStartPostHogConnection = API.make(
  () => ({
    inputSchema: PosthogOrganizationConnectionStartPostHogConnectionInput,
    outputSchema: PosthogOrganizationConnectionStartPostHogConnectionOutput,
  }),
);
