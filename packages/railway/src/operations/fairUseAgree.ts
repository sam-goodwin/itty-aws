import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation fairUseAgree($agree: Boolean!) {\n  fairUseAgree(agree: $agree)\n}";

// Input Schema (GraphQL variables)
export const FairUseAgreeInput = Schema.Struct({
  agree: Schema.Boolean,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "fairUseAgree",
    type: "mutation",
  }),
);
export type FairUseAgreeInput = typeof FairUseAgreeInput.Type;

// Output Schema (GraphQL selection set)
export const FairUseAgreeOutput = Schema.Boolean.pipe(
  T.ResponsePath("fairUseAgree"),
);
export type FairUseAgreeOutput = typeof FairUseAgreeOutput.Type;

/**
 * Agree to the fair use policy for the currently authenticated user
 */
export const fairUseAgree = API.make(() => ({
  inputSchema: FairUseAgreeInput,
  outputSchema: FairUseAgreeOutput,
}));
