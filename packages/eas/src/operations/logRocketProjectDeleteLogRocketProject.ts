import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation logRocketProjectDeleteLogRocketProject($logRocketProjectId: ID!) {\n  logRocketProject {\n    deleteLogRocketProject(logRocketProjectId: $logRocketProjectId) {\n      id\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const LogRocketProjectDeleteLogRocketProjectInput = Schema.Struct({
  logRocketProjectId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "logRocketProjectDeleteLogRocketProject",
    type: "mutation",
  }),
);
export type LogRocketProjectDeleteLogRocketProjectInput =
  typeof LogRocketProjectDeleteLogRocketProjectInput.Type;

// Output Schema (GraphQL selection set)
export const LogRocketProjectDeleteLogRocketProjectOutput = Schema.Struct({
  id: Schema.String,
}).pipe(T.ResponsePath("logRocketProject.deleteLogRocketProject"));
export type LogRocketProjectDeleteLogRocketProjectOutput =
  typeof LogRocketProjectDeleteLogRocketProjectOutput.Type;

export const logRocketProjectDeleteLogRocketProject = API.make(() => ({
  inputSchema: LogRocketProjectDeleteLogRocketProjectInput,
  outputSchema: LogRocketProjectDeleteLogRocketProjectOutput,
}));
