import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation echoProjectCreateEchoProjectIcons($echoProjectId: ID!, $icons: [CreateEchoProjectIconInput!]!) {\n  echoProject {\n    createEchoProjectIcons(echoProjectId: $echoProjectId, icons: $icons) {\n      accentColor\n      createdAt\n      id\n      model\n      prompt\n      source\n      url\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const EchoProjectCreateEchoProjectIconsInput = Schema.Struct({
  echoProjectId: Schema.String,
  icons: Schema.Array(
    Schema.Struct({
      accentColor: Schema.optional(Schema.NullOr(Schema.String)),
      model: Schema.optional(Schema.NullOr(Schema.String)),
      prompt: Schema.optional(Schema.NullOr(Schema.String)),
      source: Schema.Literals(["AI_GENERATED", "USER_UPLOADED"]),
      url: Schema.String,
    }),
  ),
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "echoProjectCreateEchoProjectIcons",
    type: "mutation",
  }),
);
export type EchoProjectCreateEchoProjectIconsInput =
  typeof EchoProjectCreateEchoProjectIconsInput.Type;

// Output Schema (GraphQL selection set)
export const EchoProjectCreateEchoProjectIconsOutput = Schema.Array(
  Schema.Struct({
    accentColor: Schema.NullOr(Schema.String),
    createdAt: Schema.String,
    id: Schema.String,
    model: Schema.NullOr(Schema.String),
    prompt: Schema.NullOr(Schema.String),
    source: Schema.Literals(["AI_GENERATED", "USER_UPLOADED"]),
    url: Schema.String,
  }),
).pipe(T.ResponsePath("echoProject.createEchoProjectIcons"));
export type EchoProjectCreateEchoProjectIconsOutput =
  typeof EchoProjectCreateEchoProjectIconsOutput.Type;

export const echoProjectCreateEchoProjectIcons = API.make(() => ({
  inputSchema: EchoProjectCreateEchoProjectIconsInput,
  outputSchema: EchoProjectCreateEchoProjectIconsOutput,
}));
