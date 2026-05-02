import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query projectInvitation($code: String!) {\n  projectInvitation(code: $code) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const ProjectInvitationInput = Schema.Struct({
  code: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "projectInvitation",
    type: "query",
  }),
);
export type ProjectInvitationInput = typeof ProjectInvitationInput.Type;

// Output Schema (GraphQL selection set)
export const ProjectInvitationOutput = Schema.Unknown.pipe(
  T.ResponsePath("projectInvitation"),
);
export type ProjectInvitationOutput = typeof ProjectInvitationOutput.Type;

/**
 * Get a project invitation by code
 */
export const projectInvitation = API.make(() => ({
  inputSchema: ProjectInvitationInput,
  outputSchema: ProjectInvitationOutput,
}));
