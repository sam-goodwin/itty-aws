import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query getRegions($projectId: String) {\n  regions(projectId: $projectId) {\n    country\n    deploymentConstraints {\n      deprecationInfo {\n        isDeprecated\n        replacementRegion\n      }\n    }\n    id\n    location\n    name\n    region\n    workspaceId\n  }\n}";

// Input Schema (GraphQL variables)
export const GetRegionsInput = Schema.Struct({
  projectId: Schema.optional(Schema.NullOr(Schema.String)),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "getRegions",
    type: "query",
  }),
);
export type GetRegionsInput = typeof GetRegionsInput.Type;

// Output Schema (GraphQL selection set)
export const GetRegionsOutput = Schema.Array(
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
    id: Schema.NullOr(Schema.String),
    location: Schema.String,
    name: Schema.String,
    region: Schema.NullOr(Schema.String),
    workspaceId: Schema.NullOr(Schema.String),
  }),
).pipe(T.ResponsePath("regions"));
export type GetRegionsOutput = typeof GetRegionsOutput.Type;

/**
 * List available regions
 */
export const getRegions = API.make(() => ({
  inputSchema: GetRegionsInput,
  outputSchema: GetRegionsOutput,
}));
