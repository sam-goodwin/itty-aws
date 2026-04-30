import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document = "query workflowJobs {\n  workflowJobs\n}";

// Input Schema (GraphQL variables)
export const WorkflowJobsInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "workflowJobs",
    type: "query",
  }),
);
export type WorkflowJobsInput = typeof WorkflowJobsInput.Type;

// Output Schema (GraphQL selection set)
export const WorkflowJobsOutput = Schema.Unknown;
export type WorkflowJobsOutput = typeof WorkflowJobsOutput.Type;

export const workflowJobs = API.make(() => ({
  inputSchema: WorkflowJobsInput,
  outputSchema: WorkflowJobsOutput,
}));
