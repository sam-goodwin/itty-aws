import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document = "query workerDeployment {\n  workerDeployment\n}";

// Input Schema (GraphQL variables)
export const WorkerDeploymentInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "workerDeployment",
    type: "query",
  }),
);
export type WorkerDeploymentInput = typeof WorkerDeploymentInput.Type;

// Output Schema (GraphQL selection set)
export const WorkerDeploymentOutput = Schema.Unknown;
export type WorkerDeploymentOutput = typeof WorkerDeploymentOutput.Type;

export const workerDeployment = API.make(() => ({
  inputSchema: WorkerDeploymentInput,
  outputSchema: WorkerDeploymentOutput,
}));
