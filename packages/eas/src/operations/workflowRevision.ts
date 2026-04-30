import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document = "mutation workflowRevision {\n  workflowRevision\n}";

// Input Schema (GraphQL variables)
export const WorkflowRevisionInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "workflowRevision",
    type: "mutation",
  }),
);
export type WorkflowRevisionInput = typeof WorkflowRevisionInput.Type;

// Output Schema (GraphQL selection set)
export const WorkflowRevisionOutput = Schema.Unknown;
export type WorkflowRevisionOutput = typeof WorkflowRevisionOutput.Type;

export const workflowRevision = API.make(() => ({
  inputSchema: WorkflowRevisionInput,
  outputSchema: WorkflowRevisionOutput,
}));
