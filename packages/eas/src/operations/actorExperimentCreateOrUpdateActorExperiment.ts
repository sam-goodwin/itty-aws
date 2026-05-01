import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation actorExperimentCreateOrUpdateActorExperiment($enabled: Boolean!, $experiment: Experiment!) {\n  actorExperiment {\n    createOrUpdateActorExperiment(enabled: $enabled, experiment: $experiment) {\n      createdAt\n      enabled\n      experiment\n      id\n      updatedAt\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const ActorExperimentCreateOrUpdateActorExperimentInput = Schema.Struct({
  enabled: Schema.Boolean,
  experiment: Schema.Literals(["ORBIT"]),
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "actorExperimentCreateOrUpdateActorExperiment",
    type: "mutation",
  }),
);
export type ActorExperimentCreateOrUpdateActorExperimentInput =
  typeof ActorExperimentCreateOrUpdateActorExperimentInput.Type;

// Output Schema (GraphQL selection set)
export const ActorExperimentCreateOrUpdateActorExperimentOutput = Schema.Struct(
  {
    createdAt: Schema.String,
    enabled: Schema.Boolean,
    experiment: Schema.Literals(["ORBIT"]),
    id: Schema.String,
    updatedAt: Schema.String,
  },
).pipe(T.ResponsePath("actorExperiment.createOrUpdateActorExperiment"));
export type ActorExperimentCreateOrUpdateActorExperimentOutput =
  typeof ActorExperimentCreateOrUpdateActorExperimentOutput.Type;

export const actorExperimentCreateOrUpdateActorExperiment = API.make(() => ({
  inputSchema: ActorExperimentCreateOrUpdateActorExperimentInput,
  outputSchema: ActorExperimentCreateOrUpdateActorExperimentOutput,
}));
