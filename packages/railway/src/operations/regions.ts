import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query regions($projectId: String) {\n  regions(projectId: $projectId) {\n    country\n    deploymentConstraints {\n      deprecationInfo {\n        isDeprecated\n        replacementRegion\n      }\n    }\n    location\n    name\n    region\n    workspaceId\n  }\n}";

// Input Schema (GraphQL variables)
export const RegionsInput = Schema.Struct({
  projectId: Schema.optional(Schema.NullOr(Schema.String)),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "regions",
    type: "query",
  }),
);
export type RegionsInput = typeof RegionsInput.Type;

// Output Schema (GraphQL selection set)
export const RegionsOutput = Schema.Array(
  Schema.Struct({
    country: Schema.String,
    deploymentConstraints: Schema.NullOr(
      Schema.Struct({
        deprecationInfo: Schema.NullOr(
          Schema.Struct({
            isDeprecated: Schema.Boolean,
            replacementRegion: Schema.String,
          }),
        ),
      }),
    ),
    location: Schema.String,
    name: Schema.String,
    region: Schema.NullOr(Schema.String),
    workspaceId: Schema.NullOr(Schema.String),
  }),
).pipe(T.ResponsePath("regions"));
export type RegionsOutput = typeof RegionsOutput.Type;

/**
 * List available regions
 */
export const regions = API.make(() => ({
  inputSchema: RegionsInput,
  outputSchema: RegionsOutput,
}));
