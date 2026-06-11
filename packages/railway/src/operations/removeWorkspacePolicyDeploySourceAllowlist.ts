import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation workspacePolicyDeploySourceAllowlistRemove($id: String!) {\n  workspacePolicyDeploySourceAllowlistRemove(id: $id) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const RemoveWorkspacePolicyDeploySourceAllowlistInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "workspacePolicyDeploySourceAllowlistRemove",
    type: "mutation",
  }),
);
export type RemoveWorkspacePolicyDeploySourceAllowlistInput =
  typeof RemoveWorkspacePolicyDeploySourceAllowlistInput.Type;

// Output Schema (GraphQL selection set)
export const RemoveWorkspacePolicyDeploySourceAllowlistOutput =
  Schema.Boolean.pipe(
    T.ResponsePath("workspacePolicyDeploySourceAllowlistRemove"),
  );
export type RemoveWorkspacePolicyDeploySourceAllowlistOutput =
  typeof RemoveWorkspacePolicyDeploySourceAllowlistOutput.Type;

/**
 * Remove a deploy source from a workspace policy allowlist.
 */
export const removeWorkspacePolicyDeploySourceAllowlist = API.make(() => ({
  inputSchema: RemoveWorkspacePolicyDeploySourceAllowlistInput,
  outputSchema: RemoveWorkspacePolicyDeploySourceAllowlistOutput,
}));
