import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation approveDeployment($id: String!) {\n  deploymentApprove(id: $id) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const ApproveDeploymentInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "approveDeployment",
    type: "mutation",
  }),
);
export type ApproveDeploymentInput = typeof ApproveDeploymentInput.Type;

// Output Schema (GraphQL selection set)
export const ApproveDeploymentOutput = Schema.Boolean.pipe(
  T.ResponsePath("deploymentApprove"),
);
export type ApproveDeploymentOutput = typeof ApproveDeploymentOutput.Type;

/**
 * Approves a deployment.
 */
export const approveDeployment = API.make(() => ({
  inputSchema: ApproveDeploymentInput,
  outputSchema: ApproveDeploymentOutput,
}));
