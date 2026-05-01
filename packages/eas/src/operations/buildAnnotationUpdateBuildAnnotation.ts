import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation buildAnnotationUpdateBuildAnnotation($buildAnnotationData: BuildAnnotationDataInput!, $buildAnnotationId: ID!) {\n  buildAnnotation {\n    updateBuildAnnotation(buildAnnotationData: $buildAnnotationData, buildAnnotationId: $buildAnnotationId) {\n      authorUsername\n      buildPhase\n      exampleBuildLog\n      id\n      internalNotes\n      message\n      regexFlags\n      regexString\n      title\n      type\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const BuildAnnotationUpdateBuildAnnotationInput = Schema.Struct({
  buildAnnotationData: Schema.Struct({
    buildPhase: Schema.String,
    exampleBuildLog: Schema.optional(Schema.NullOr(Schema.String)),
    internalNotes: Schema.optional(Schema.NullOr(Schema.String)),
    message: Schema.String,
    regexFlags: Schema.optional(Schema.NullOr(Schema.String)),
    regexString: Schema.String,
    title: Schema.String,
    type: Schema.Literals(["ERROR", "INFO", "WARNING"]),
  }),
  buildAnnotationId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "buildAnnotationUpdateBuildAnnotation",
    type: "mutation",
  }),
);
export type BuildAnnotationUpdateBuildAnnotationInput =
  typeof BuildAnnotationUpdateBuildAnnotationInput.Type;

// Output Schema (GraphQL selection set)
export const BuildAnnotationUpdateBuildAnnotationOutput = Schema.Struct({
  authorUsername: Schema.NullOr(Schema.String),
  buildPhase: Schema.String,
  exampleBuildLog: Schema.NullOr(Schema.String),
  id: Schema.String,
  internalNotes: Schema.NullOr(Schema.String),
  message: Schema.String,
  regexFlags: Schema.NullOr(Schema.String),
  regexString: Schema.String,
  title: Schema.String,
  type: Schema.Literals(["ERROR", "INFO", "WARNING"]),
}).pipe(T.ResponsePath("buildAnnotation.updateBuildAnnotation"));
export type BuildAnnotationUpdateBuildAnnotationOutput =
  typeof BuildAnnotationUpdateBuildAnnotationOutput.Type;

export const buildAnnotationUpdateBuildAnnotation = API.make(() => ({
  inputSchema: BuildAnnotationUpdateBuildAnnotationInput,
  outputSchema: BuildAnnotationUpdateBuildAnnotationOutput,
}));
