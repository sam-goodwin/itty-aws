import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation buildAnnotationDeleteBuildAnnotation($buildAnnotationId: ID!) {\n  buildAnnotation {\n    deleteBuildAnnotation(buildAnnotationId: $buildAnnotationId) {\n      buildAnnotationId\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const BuildAnnotationDeleteBuildAnnotationInput = Schema.Struct({
  buildAnnotationId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "buildAnnotationDeleteBuildAnnotation",
    type: "mutation",
  }),
);
export type BuildAnnotationDeleteBuildAnnotationInput =
  typeof BuildAnnotationDeleteBuildAnnotationInput.Type;

// Output Schema (GraphQL selection set)
export const BuildAnnotationDeleteBuildAnnotationOutput = Schema.Struct({
  buildAnnotationId: Schema.String,
}).pipe(T.ResponsePath("buildAnnotation.deleteBuildAnnotation"));
export type BuildAnnotationDeleteBuildAnnotationOutput =
  typeof BuildAnnotationDeleteBuildAnnotationOutput.Type;

export const buildAnnotationDeleteBuildAnnotation = API.make(() => ({
  inputSchema: BuildAnnotationDeleteBuildAnnotationInput,
  outputSchema: BuildAnnotationDeleteBuildAnnotationOutput,
}));
