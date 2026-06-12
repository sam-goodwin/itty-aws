import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation fairUseAgree($agree: Boolean!) {\n  fairUseAgree(agree: $agree)\n}";

// Input Schema (GraphQL variables)
export const AgreeFairUseInput = Schema.Struct({
  agree: Schema.Boolean,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "fairUseAgree",
    type: "mutation",
  }),
);
export type AgreeFairUseInput = typeof AgreeFairUseInput.Type;

// Output Schema (GraphQL selection set)
export const AgreeFairUseOutput = Schema.Boolean.pipe(
  T.ResponsePath("fairUseAgree"),
);
export type AgreeFairUseOutput = typeof AgreeFairUseOutput.Type;

/**
 * Agree to the fair use policy for the currently authenticated user
 */
export const agreeFairUse = API.make(() => ({
  inputSchema: AgreeFairUseInput,
  outputSchema: AgreeFairUseOutput,
}));
