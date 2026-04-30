import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document = "query workflowRuns {\n  workflowRuns\n}";

// Input Schema (GraphQL variables)
export const WorkflowRunsInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "workflowRuns",
    type: "query",
  }),
);
export type WorkflowRunsInput = typeof WorkflowRunsInput.Type;

// Output Schema (GraphQL selection set)
export const WorkflowRunsOutput = Schema.Unknown;
export type WorkflowRunsOutput = typeof WorkflowRunsOutput.Type;

export const workflowRuns = API.make(() => ({
  inputSchema: WorkflowRunsInput,
  outputSchema: WorkflowRunsOutput,
}));
