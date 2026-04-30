import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document = "mutation actorExperiment {\n  actorExperiment\n}";

// Input Schema (GraphQL variables)
export const ActorExperimentInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "actorExperiment",
    type: "mutation",
  }),
);
export type ActorExperimentInput = typeof ActorExperimentInput.Type;

// Output Schema (GraphQL selection set)
export const ActorExperimentOutput = Schema.Unknown;
export type ActorExperimentOutput = typeof ActorExperimentOutput.Type;

/**
 * Mutations for Actor experiments
 */
export const actorExperiment = API.make(() => ({
  inputSchema: ActorExperimentInput,
  outputSchema: ActorExperimentOutput,
}));
