import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query buildAnnotationsAll($filters: BuildAnnotationFiltersInput) {\n  buildAnnotations {\n    all(filters: $filters) {\n      authorUsername\n      buildPhase\n      exampleBuildLog\n      id\n      internalNotes\n      message\n      regexFlags\n      regexString\n      title\n      type\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const BuildAnnotationsAllInput = Schema.Struct({
  filters: Schema.optional(
    Schema.NullOr(
      Schema.Struct({
        buildPhases: Schema.Array(Schema.String),
      }),
    ),
  ),
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "buildAnnotationsAll",
    type: "query",
  }),
);
export type BuildAnnotationsAllInput = typeof BuildAnnotationsAllInput.Type;

// Output Schema (GraphQL selection set)
export const BuildAnnotationsAllOutput = Schema.Array(
  Schema.Struct({
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
  }),
).pipe(T.ResponsePath("buildAnnotations.all"));
export type BuildAnnotationsAllOutput = typeof BuildAnnotationsAllOutput.Type;

export const buildAnnotationsAll = API.make(() => ({
  inputSchema: BuildAnnotationsAllInput,
  outputSchema: BuildAnnotationsAllOutput,
}));
