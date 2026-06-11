import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query workflowStatus($workflowId: String!) {\n  workflowStatus(workflowId: $workflowId) {\n    error\n    status\n  }\n}";

// Input Schema (GraphQL variables)
export const GetWorkflowStatusInput = Schema.Struct({
  workflowId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "workflowStatus",
    type: "query",
  }),
);
export type GetWorkflowStatusInput = typeof GetWorkflowStatusInput.Type;

// Output Schema (GraphQL selection set)
export const GetWorkflowStatusOutput = Schema.Struct({
  error: Schema.NullOr(Schema.String),
  status: Schema.Literals(["Complete", "Error", "NotFound", "Running"]),
}).pipe(T.ResponsePath("workflowStatus"));
export type GetWorkflowStatusOutput = typeof GetWorkflowStatusOutput.Type;

/**
 * Gets the status of a workflow
 */
export const getWorkflowStatus = API.make(() => ({
  inputSchema: GetWorkflowStatusInput,
  outputSchema: GetWorkflowStatusOutput,
}));
