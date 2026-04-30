import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document = "query buildAnnotations {\n  buildAnnotations\n}";

// Input Schema (GraphQL variables)
export const BuildAnnotationsInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "buildAnnotations",
    type: "query",
  }),
);
export type BuildAnnotationsInput = typeof BuildAnnotationsInput.Type;

// Output Schema (GraphQL selection set)
export const BuildAnnotationsOutput = Schema.Unknown;
export type BuildAnnotationsOutput = typeof BuildAnnotationsOutput.Type;

/**
 * Top-level query object for querying annotations.
 */
export const buildAnnotations = API.make(() => ({
  inputSchema: BuildAnnotationsInput,
  outputSchema: BuildAnnotationsOutput,
}));
