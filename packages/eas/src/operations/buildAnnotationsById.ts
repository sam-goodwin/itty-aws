import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query buildAnnotationsById($buildAnnotationId: ID!) {\n  buildAnnotations {\n    byId(buildAnnotationId: $buildAnnotationId) {\n      authorUsername\n      buildPhase\n      exampleBuildLog\n      id\n      internalNotes\n      message\n      regexFlags\n      regexString\n      title\n      type\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const BuildAnnotationsByIdInput = Schema.Struct({
  buildAnnotationId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "buildAnnotationsById",
    type: "query",
  }),
);
export type BuildAnnotationsByIdInput = typeof BuildAnnotationsByIdInput.Type;

// Output Schema (GraphQL selection set)
export const BuildAnnotationsByIdOutput = Schema.Struct({
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
}).pipe(T.ResponsePath("buildAnnotations.byId"));
export type BuildAnnotationsByIdOutput = typeof BuildAnnotationsByIdOutput.Type;

export const buildAnnotationsById = API.make(() => ({
  inputSchema: BuildAnnotationsByIdInput,
  outputSchema: BuildAnnotationsByIdOutput,
}));
