import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation workflowDeviceTestCaseResult {\n  workflowDeviceTestCaseResult\n}";

// Input Schema (GraphQL variables)
export const WorkflowDeviceTestCaseResultInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "workflowDeviceTestCaseResult",
    type: "mutation",
  }),
);
export type WorkflowDeviceTestCaseResultInput =
  typeof WorkflowDeviceTestCaseResultInput.Type;

// Output Schema (GraphQL selection set)
export const WorkflowDeviceTestCaseResultOutput = Schema.Unknown;
export type WorkflowDeviceTestCaseResultOutput =
  typeof WorkflowDeviceTestCaseResultOutput.Type;

export const workflowDeviceTestCaseResult = API.make(() => ({
  inputSchema: WorkflowDeviceTestCaseResultInput,
  outputSchema: WorkflowDeviceTestCaseResultOutput,
}));
