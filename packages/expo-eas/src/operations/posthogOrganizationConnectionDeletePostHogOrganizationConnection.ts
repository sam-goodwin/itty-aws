import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation posthogOrganizationConnectionDeletePostHogOrganizationConnection($id: ID!) {\n  posthogOrganizationConnection {\n    deletePostHogOrganizationConnection(id: $id) {\n      __typename\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const PosthogOrganizationConnectionDeletePostHogOrganizationConnectionInput =
  Schema.Struct({
    id: Schema.String,
  }).pipe(
    T.Http({ method: "POST", path: "/graphql" }),
    T.GraphQLOp({
      query: __document,
      operationName:
        "posthogOrganizationConnectionDeletePostHogOrganizationConnection",
      type: "mutation",
    }),
  );
export type PosthogOrganizationConnectionDeletePostHogOrganizationConnectionInput =
  typeof PosthogOrganizationConnectionDeletePostHogOrganizationConnectionInput.Type;

// Output Schema (GraphQL selection set)
export const PosthogOrganizationConnectionDeletePostHogOrganizationConnectionOutput =
  Schema.String.pipe(
    T.ResponsePath(
      "posthogOrganizationConnection.deletePostHogOrganizationConnection",
    ),
  );
export type PosthogOrganizationConnectionDeletePostHogOrganizationConnectionOutput =
  typeof PosthogOrganizationConnectionDeletePostHogOrganizationConnectionOutput.Type;

export const posthogOrganizationConnectionDeletePostHogOrganizationConnection =
  API.make(() => ({
    inputSchema:
      PosthogOrganizationConnectionDeletePostHogOrganizationConnectionInput,
    outputSchema:
      PosthogOrganizationConnectionDeletePostHogOrganizationConnectionOutput,
  }));
