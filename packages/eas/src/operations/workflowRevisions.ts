import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document = "query workflowRevisions {\n  workflowRevisions\n}";

// Input Schema (GraphQL variables)
export const WorkflowRevisionsInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "workflowRevisions",
    type: "query",
  }),
);
export type WorkflowRevisionsInput = typeof WorkflowRevisionsInput.Type;

// Output Schema (GraphQL selection set)
export const WorkflowRevisionsOutput = Schema.Unknown;
export type WorkflowRevisionsOutput = typeof WorkflowRevisionsOutput.Type;

export const workflowRevisions = API.make(() => ({
  inputSchema: WorkflowRevisionsInput,
  outputSchema: WorkflowRevisionsOutput,
}));
