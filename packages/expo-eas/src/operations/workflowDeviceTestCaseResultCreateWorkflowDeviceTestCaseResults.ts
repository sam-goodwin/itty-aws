import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation workflowDeviceTestCaseResultCreateWorkflowDeviceTestCaseResults($input: CreateWorkflowDeviceTestCaseResultsInput!) {\n  workflowDeviceTestCaseResult {\n    createWorkflowDeviceTestCaseResults(input: $input) {\n      createdAt\n      duration\n      errorMessage\n      id\n      name\n      path\n      properties\n      retryCount\n      status\n      tags\n      updatedAt\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const WorkflowDeviceTestCaseResultCreateWorkflowDeviceTestCaseResultsInput =
  Schema.Struct({
    input: Schema.Struct({
      testCaseResults: Schema.Array(
        Schema.Struct({
          duration: Schema.optional(Schema.NullOr(Schema.Number)),
          errorMessage: Schema.optional(Schema.NullOr(Schema.String)),
          name: Schema.String,
          path: Schema.String,
          properties: Schema.optional(Schema.NullOr(Schema.Unknown)),
          retryCount: Schema.optional(Schema.NullOr(Schema.Number)),
          status: Schema.Literals(["FAILED", "PASSED"]),
          tags: Schema.optional(Schema.NullOr(Schema.Array(Schema.String))),
        }),
      ),
      workflowJobId: Schema.String,
    }),
  }).pipe(
    T.Http({ method: "POST", path: "/graphql" }),
    T.GraphQLOp({
      query: __document,
      operationName:
        "workflowDeviceTestCaseResultCreateWorkflowDeviceTestCaseResults",
      type: "mutation",
    }),
  );
export type WorkflowDeviceTestCaseResultCreateWorkflowDeviceTestCaseResultsInput =
  typeof WorkflowDeviceTestCaseResultCreateWorkflowDeviceTestCaseResultsInput.Type;

// Output Schema (GraphQL selection set)
export const WorkflowDeviceTestCaseResultCreateWorkflowDeviceTestCaseResultsOutput =
  Schema.Array(
    Schema.Struct({
      createdAt: Schema.String,
      duration: Schema.NullOr(Schema.Number),
      errorMessage: Schema.NullOr(Schema.String),
      id: Schema.String,
      name: Schema.String,
      path: Schema.String,
      properties: Schema.NullOr(Schema.Unknown),
      retryCount: Schema.NullOr(Schema.Number),
      status: Schema.Literals(["FAILED", "PASSED"]),
      tags: Schema.NullOr(Schema.Array(Schema.String)),
      updatedAt: Schema.String,
    }),
  ).pipe(
    T.ResponsePath(
      "workflowDeviceTestCaseResult.createWorkflowDeviceTestCaseResults",
    ),
  );
export type WorkflowDeviceTestCaseResultCreateWorkflowDeviceTestCaseResultsOutput =
  typeof WorkflowDeviceTestCaseResultCreateWorkflowDeviceTestCaseResultsOutput.Type;

export const workflowDeviceTestCaseResultCreateWorkflowDeviceTestCaseResults =
  API.make(() => ({
    inputSchema:
      WorkflowDeviceTestCaseResultCreateWorkflowDeviceTestCaseResultsInput,
    outputSchema:
      WorkflowDeviceTestCaseResultCreateWorkflowDeviceTestCaseResultsOutput,
  }));
