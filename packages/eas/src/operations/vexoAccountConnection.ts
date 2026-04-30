import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation vexoAccountConnection {\n  vexoAccountConnection\n}";

// Input Schema (GraphQL variables)
export const VexoAccountConnectionInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "vexoAccountConnection",
    type: "mutation",
  }),
);
export type VexoAccountConnectionInput = typeof VexoAccountConnectionInput.Type;

// Output Schema (GraphQL selection set)
export const VexoAccountConnectionOutput = Schema.Unknown;
export type VexoAccountConnectionOutput =
  typeof VexoAccountConnectionOutput.Type;

/**
 * Mutations for Vexo account connections
 */
export const vexoAccountConnection = API.make(() => ({
  inputSchema: VexoAccountConnectionInput,
  outputSchema: VexoAccountConnectionOutput,
}));
