import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation updateWorkspace($id: String!, $input: WorkspaceUpdateInput!) {\n  workspaceUpdate(id: $id, input: $input) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const UpdateWorkspaceInput = Schema.Struct({
  id: Schema.String,
  input: Schema.Struct({
    avatar: Schema.optional(Schema.NullOr(Schema.String)),
    name: Schema.optional(Schema.NullOr(Schema.String)),
    preferredRegion: Schema.optional(Schema.NullOr(Schema.String)),
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "updateWorkspace",
    type: "mutation",
  }),
);
export type UpdateWorkspaceInput = typeof UpdateWorkspaceInput.Type;

// Output Schema (GraphQL selection set)
export const UpdateWorkspaceOutput = Schema.Boolean.pipe(
  T.ResponsePath("workspaceUpdate"),
);
export type UpdateWorkspaceOutput = typeof UpdateWorkspaceOutput.Type;

/**
 * Update a workspace by id
 */
export const updateWorkspace = API.make(() => ({
  inputSchema: UpdateWorkspaceInput,
  outputSchema: UpdateWorkspaceOutput,
}));
