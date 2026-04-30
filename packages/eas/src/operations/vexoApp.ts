import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document = "mutation vexoApp {\n  vexoApp\n}";

// Input Schema (GraphQL variables)
export const VexoAppInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "vexoApp",
    type: "mutation",
  }),
);
export type VexoAppInput = typeof VexoAppInput.Type;

// Output Schema (GraphQL selection set)
export const VexoAppOutput = Schema.Unknown;
export type VexoAppOutput = typeof VexoAppOutput.Type;

/**
 * Mutations for Vexo apps
 */
export const vexoApp = API.make(() => ({
  inputSchema: VexoAppInput,
  outputSchema: VexoAppOutput,
}));
