import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document = "mutation workflowJobApproval {\n  workflowJobApproval\n}";

// Input Schema (GraphQL variables)
export const WorkflowJobApprovalInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "workflowJobApproval",
    type: "mutation",
  }),
);
export type WorkflowJobApprovalInput = typeof WorkflowJobApprovalInput.Type;

// Output Schema (GraphQL selection set)
export const WorkflowJobApprovalOutput = Schema.Unknown;
export type WorkflowJobApprovalOutput = typeof WorkflowJobApprovalOutput.Type;

export const workflowJobApproval = API.make(() => ({
  inputSchema: WorkflowJobApprovalInput,
  outputSchema: WorkflowJobApprovalOutput,
}));
