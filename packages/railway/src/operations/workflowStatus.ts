import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query workflowStatus($workflowId: String!) {\n  workflowStatus(workflowId: $workflowId) {\n    error\n    status\n  }\n}";

// Input Schema (GraphQL variables)
export const WorkflowStatusInput = Schema.Struct({
  workflowId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "workflowStatus",
    type: "query",
  }),
);
export type WorkflowStatusInput = typeof WorkflowStatusInput.Type;

// Output Schema (GraphQL selection set)
export const WorkflowStatusOutput = Schema.Struct({
  error: Schema.NullOr(Schema.String),
  status: Schema.Literals(["Complete", "Error", "NotFound", "Running"]),
}).pipe(T.ResponsePath("workflowStatus"));
export type WorkflowStatusOutput = typeof WorkflowStatusOutput.Type;

/**
 * Gets the status of a workflow
 */
export const workflowStatus = API.make(() => ({
  inputSchema: WorkflowStatusInput,
  outputSchema: WorkflowStatusOutput,
}));
