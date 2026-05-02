import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation projectInvitationDelete($id: String!) {\n  projectInvitationDelete(id: $id) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const ProjectInvitationDeleteInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "projectInvitationDelete",
    type: "mutation",
  }),
);
export type ProjectInvitationDeleteInput =
  typeof ProjectInvitationDeleteInput.Type;

// Output Schema (GraphQL selection set)
export const ProjectInvitationDeleteOutput = Schema.Boolean.pipe(
  T.ResponsePath("projectInvitationDelete"),
);
export type ProjectInvitationDeleteOutput =
  typeof ProjectInvitationDeleteOutput.Type;

/**
 * Delete an invitation for a project
 */
export const projectInvitationDelete = API.make(() => ({
  inputSchema: ProjectInvitationDeleteInput,
  outputSchema: ProjectInvitationDeleteOutput,
}));
