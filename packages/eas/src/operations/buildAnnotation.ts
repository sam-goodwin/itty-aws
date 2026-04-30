import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document = "mutation buildAnnotation {\n  buildAnnotation\n}";

// Input Schema (GraphQL variables)
export const BuildAnnotationInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "buildAnnotation",
    type: "mutation",
  }),
);
export type BuildAnnotationInput = typeof BuildAnnotationInput.Type;

// Output Schema (GraphQL selection set)
export const BuildAnnotationOutput = Schema.Unknown;
export type BuildAnnotationOutput = typeof BuildAnnotationOutput.Type;

/**
 * Mutations that create, update, and delete Build Annotations
 */
export const buildAnnotation = API.make(() => ({
  inputSchema: BuildAnnotationInput,
  outputSchema: BuildAnnotationOutput,
}));
