import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document = "query workflows {\n  workflows\n}";

// Input Schema (GraphQL variables)
export const WorkflowsInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "workflows",
    type: "query",
  }),
);
export type WorkflowsInput = typeof WorkflowsInput.Type;

// Output Schema (GraphQL selection set)
export const WorkflowsOutput = Schema.Unknown;
export type WorkflowsOutput = typeof WorkflowsOutput.Type;

export const workflows = API.make(() => ({
  inputSchema: WorkflowsInput,
  outputSchema: WorkflowsOutput,
}));
