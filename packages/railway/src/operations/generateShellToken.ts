import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation generateShellToken($input: ShellTokenInput!) {\n  generateShellToken(input: $input)\n}";

// Input Schema (GraphQL variables)
export const GenerateShellTokenInput = Schema.Struct({
  input: Schema.Struct({
    environmentId: Schema.String,
    instanceId: Schema.String,
    kind: Schema.optional(Schema.NullOr(Schema.String)),
    port: Schema.optional(Schema.NullOr(Schema.Number)),
    scope: Schema.String,
    serviceId: Schema.optional(Schema.NullOr(Schema.String)),
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "generateShellToken",
    type: "mutation",
  }),
);
export type GenerateShellTokenInput = typeof GenerateShellTokenInput.Type;

// Output Schema (GraphQL selection set)
export const GenerateShellTokenOutput = Schema.String.pipe(
  T.ResponsePath("generateShellToken"),
);
export type GenerateShellTokenOutput = typeof GenerateShellTokenOutput.Type;

/**
 * Mints a 5-minute JWT for opening a browser WS session against tcp-proxy.
 */
export const generateShellToken = API.make(() => ({
  inputSchema: GenerateShellTokenInput,
  outputSchema: GenerateShellTokenOutput,
}));
