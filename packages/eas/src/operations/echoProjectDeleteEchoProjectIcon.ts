import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation echoProjectDeleteEchoProjectIcon($echoProjectIconId: ID!, $echoProjectId: ID!) {\n  echoProject {\n    deleteEchoProjectIcon(echoProjectIconId: $echoProjectIconId, echoProjectId: $echoProjectId) {\n      accentColor\n      createdAt\n      id\n      model\n      prompt\n      source\n      url\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const EchoProjectDeleteEchoProjectIconInput = Schema.Struct({
  echoProjectIconId: Schema.String,
  echoProjectId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "echoProjectDeleteEchoProjectIcon",
    type: "mutation",
  }),
);
export type EchoProjectDeleteEchoProjectIconInput =
  typeof EchoProjectDeleteEchoProjectIconInput.Type;

// Output Schema (GraphQL selection set)
export const EchoProjectDeleteEchoProjectIconOutput = Schema.Struct({
  accentColor: Schema.NullOr(Schema.String),
  createdAt: Schema.String,
  id: Schema.String,
  model: Schema.NullOr(Schema.String),
  prompt: Schema.NullOr(Schema.String),
  source: Schema.Literals(["AI_GENERATED", "USER_UPLOADED"]),
  url: Schema.String,
}).pipe(T.ResponsePath("echoProject.deleteEchoProjectIcon"));
export type EchoProjectDeleteEchoProjectIconOutput =
  typeof EchoProjectDeleteEchoProjectIconOutput.Type;

export const echoProjectDeleteEchoProjectIcon = API.make(() => ({
  inputSchema: EchoProjectDeleteEchoProjectIconInput,
  outputSchema: EchoProjectDeleteEchoProjectIconOutput,
}));
