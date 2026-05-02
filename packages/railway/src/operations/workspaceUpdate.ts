import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation workspaceUpdate($id: String!, $input: WorkspaceUpdateInput!) {\n  workspaceUpdate(id: $id, input: $input) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const WorkspaceUpdateInput = Schema.Struct({
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
    operationName: "workspaceUpdate",
    type: "mutation",
  }),
);
export type WorkspaceUpdateInput = typeof WorkspaceUpdateInput.Type;

// Output Schema (GraphQL selection set)
export const WorkspaceUpdateOutput = Schema.Boolean.pipe(
  T.ResponsePath("workspaceUpdate"),
);
export type WorkspaceUpdateOutput = typeof WorkspaceUpdateOutput.Type;

/**
 * Update a workspace by id
 */
export const workspaceUpdate = API.make(() => ({
  inputSchema: WorkspaceUpdateInput,
  outputSchema: WorkspaceUpdateOutput,
}));
