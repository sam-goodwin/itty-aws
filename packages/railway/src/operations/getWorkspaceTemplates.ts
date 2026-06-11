import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query getWorkspaceTemplates($after: String, $before: String, $first: Int, $last: Int, $workspaceId: String!) {\n  workspaceTemplates(after: $after, before: $before, first: $first, last: $last, workspaceId: $workspaceId) {\n    edges {\n      cursor\n      node {\n        activeProjects\n        canvasConfig\n        category\n        code\n        communityThreadSlug\n        config\n        createdAt\n        demoProjectId\n        description\n        health\n        id\n        image\n        isApproved\n        isV2Template\n        isVerified\n        languages\n        metadata\n        name\n        projects\n        readme\n        recentProjects\n        serializedConfig\n        status\n        supportHealthMetrics\n        tags\n        teamId\n        totalPayout\n        updatedAt\n        workspaceId\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const GetWorkspaceTemplatesInput = Schema.Struct({
  after: Schema.optional(Schema.NullOr(Schema.String)),
  before: Schema.optional(Schema.NullOr(Schema.String)),
  first: Schema.optional(Schema.NullOr(Schema.Number)),
  last: Schema.optional(Schema.NullOr(Schema.Number)),
  workspaceId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "getWorkspaceTemplates",
    type: "query",
  }),
);
export type GetWorkspaceTemplatesInput = typeof GetWorkspaceTemplatesInput.Type;

// Output Schema (GraphQL selection set)
export const GetWorkspaceTemplatesOutput = Schema.Struct({
  edges: Schema.Array(
    Schema.Struct({
      cursor: Schema.String,
      node: Schema.Struct({
        activeProjects: Schema.Number,
        canvasConfig: Schema.NullOr(Schema.Unknown),
        category: Schema.NullOr(Schema.String),
        code: Schema.String,
        communityThreadSlug: Schema.NullOr(Schema.String),
        config: Schema.Unknown,
        createdAt: Schema.String,
        demoProjectId: Schema.NullOr(Schema.String),
        description: Schema.NullOr(Schema.String),
        health: Schema.NullOr(Schema.Number),
        id: Schema.String,
        image: Schema.NullOr(Schema.String),
        isApproved: Schema.Boolean,
        isV2Template: Schema.Boolean,
        isVerified: Schema.Boolean,
        languages: Schema.NullOr(Schema.Array(Schema.String)),
        metadata: Schema.Unknown,
        name: Schema.String,
        projects: Schema.Number,
        readme: Schema.NullOr(Schema.String),
        recentProjects: Schema.Number,
        serializedConfig: Schema.NullOr(Schema.Unknown),
        status: Schema.Literals(["HIDDEN", "PUBLISHED", "UNPUBLISHED"]),
        supportHealthMetrics: Schema.NullOr(Schema.Unknown),
        tags: Schema.NullOr(Schema.Array(Schema.String)),
        teamId: Schema.NullOr(Schema.String),
        totalPayout: Schema.Number,
        updatedAt: Schema.String,
        workspaceId: Schema.NullOr(Schema.String),
      }),
    }),
  ),
  pageInfo: Schema.Struct({
    endCursor: Schema.NullOr(Schema.String),
    hasNextPage: Schema.Boolean,
    hasPreviousPage: Schema.Boolean,
    startCursor: Schema.NullOr(Schema.String),
  }),
}).pipe(T.ResponsePath("workspaceTemplates"));
export type GetWorkspaceTemplatesOutput =
  typeof GetWorkspaceTemplatesOutput.Type;

/**
 * Get all templates for a workspace.
 */
export const getWorkspaceTemplates = API.make(() => ({
  inputSchema: GetWorkspaceTemplatesInput,
  outputSchema: GetWorkspaceTemplatesOutput,
}));
