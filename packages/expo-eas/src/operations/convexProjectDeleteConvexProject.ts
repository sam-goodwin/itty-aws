import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation convexProjectDeleteConvexProject($convexProjectId: ID!) {\n  convexProject {\n    deleteConvexProject(convexProjectId: $convexProjectId) {\n      __typename\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const ConvexProjectDeleteConvexProjectInput = Schema.Struct({
  convexProjectId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "convexProjectDeleteConvexProject",
    type: "mutation",
  }),
);
export type ConvexProjectDeleteConvexProjectInput =
  typeof ConvexProjectDeleteConvexProjectInput.Type;

// Output Schema (GraphQL selection set)
export const ConvexProjectDeleteConvexProjectOutput = Schema.String.pipe(
  T.ResponsePath("convexProject.deleteConvexProject"),
);
export type ConvexProjectDeleteConvexProjectOutput =
  typeof ConvexProjectDeleteConvexProjectOutput.Type;

export const convexProjectDeleteConvexProject = API.make(() => ({
  inputSchema: ConvexProjectDeleteConvexProjectInput,
  outputSchema: ConvexProjectDeleteConvexProjectOutput,
}));
