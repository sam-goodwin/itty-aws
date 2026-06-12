import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation projectLeave($id: String!) {\n  projectLeave(id: $id)\n}";

// Input Schema (GraphQL variables)
export const LeaveProjectInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "projectLeave",
    type: "mutation",
  }),
);
export type LeaveProjectInput = typeof LeaveProjectInput.Type;

// Output Schema (GraphQL selection set)
export const LeaveProjectOutput = Schema.Boolean.pipe(
  T.ResponsePath("projectLeave"),
);
export type LeaveProjectOutput = typeof LeaveProjectOutput.Type;

/**
 * Leave project as currently authenticated user
 */
export const leaveProject = API.make(() => ({
  inputSchema: LeaveProjectInput,
  outputSchema: LeaveProjectOutput,
}));
