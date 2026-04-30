import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document = "mutation workflowRun {\n  workflowRun\n}";

// Input Schema (GraphQL variables)
export const WorkflowRunInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "workflowRun",
    type: "mutation",
  }),
);
export type WorkflowRunInput = typeof WorkflowRunInput.Type;

// Output Schema (GraphQL selection set)
export const WorkflowRunOutput = Schema.Unknown;
export type WorkflowRunOutput = typeof WorkflowRunOutput.Type;

export const workflowRun = API.make(() => ({
  inputSchema: WorkflowRunInput,
  outputSchema: WorkflowRunOutput,
}));
