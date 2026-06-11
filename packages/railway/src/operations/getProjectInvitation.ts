import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query getProjectInvitation($code: String!) {\n  projectInvitation(code: $code) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const GetProjectInvitationInput = Schema.Struct({
  code: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "getProjectInvitation",
    type: "query",
  }),
);
export type GetProjectInvitationInput = typeof GetProjectInvitationInput.Type;

// Output Schema (GraphQL selection set)
export const GetProjectInvitationOutput = Schema.Unknown.pipe(
  T.ResponsePath("projectInvitation"),
);
export type GetProjectInvitationOutput = typeof GetProjectInvitationOutput.Type;

/**
 * Get a project invitation by code
 */
export const getProjectInvitation = API.make(() => ({
  inputSchema: GetProjectInvitationInput,
  outputSchema: GetProjectInvitationOutput,
}));
