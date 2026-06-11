import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query getTemplateSourceForProject($projectId: String!) {\n  templateSourceForProject(projectId: $projectId) {\n    activeProjects\n    canvasConfig\n    category\n    code\n    communityThreadSlug\n    config\n    createdAt\n    creator {\n      avatar\n      hasPublicProfile\n      name\n      username\n    }\n    demoProjectId\n    description\n    guides {\n      post\n      video\n    }\n    health\n    id\n    image\n    isApproved\n    isV2Template\n    isVerified\n    languages\n    maintainer {\n      avatar\n      id\n      name\n      partnerProfile {\n        category\n        description\n        slug\n        type\n        website\n      }\n    }\n    metadata\n    name\n    projects\n    readme\n    recentProjects\n    serializedConfig\n    similarTemplates {\n      code\n      createdAt\n      creator {\n        avatar\n        hasPublicProfile\n        name\n        username\n      }\n      deploys\n      description\n      health\n      image\n      name\n      teamId\n      userId\n      workspaceId\n    }\n    status\n    supportHealthMetrics\n    tags\n    teamId\n    totalPayout\n    updatedAt\n    workspaceId\n  }\n}";

// Input Schema (GraphQL variables)
export const GetTemplateSourceForProjectInput = Schema.Struct({
  projectId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "getTemplateSourceForProject",
    type: "query",
  }),
);
export type GetTemplateSourceForProjectInput =
  typeof GetTemplateSourceForProjectInput.Type;

// Output Schema (GraphQL selection set)
export const GetTemplateSourceForProjectOutput = Schema.NullOr(
  Schema.Struct({
    activeProjects: Schema.Number,
    canvasConfig: Schema.NullOr(Schema.Unknown),
    category: Schema.NullOr(Schema.String),
    code: Schema.String,
    communityThreadSlug: Schema.NullOr(Schema.String),
    config: Schema.Unknown,
    createdAt: Schema.String,
    creator: Schema.NullOr(
      Schema.Struct({
        avatar: Schema.NullOr(Schema.String),
        hasPublicProfile: Schema.Boolean,
        name: Schema.NullOr(Schema.String),
        username: Schema.NullOr(Schema.String),
      }),
    ),
    demoProjectId: Schema.NullOr(Schema.String),
    description: Schema.NullOr(Schema.String),
    guides: Schema.NullOr(
      Schema.Struct({
        post: Schema.NullOr(Schema.String),
        video: Schema.NullOr(Schema.String),
      }),
    ),
    health: Schema.NullOr(Schema.Number),
    id: Schema.String,
    image: Schema.NullOr(Schema.String),
    isApproved: Schema.Boolean,
    isV2Template: Schema.Boolean,
    isVerified: Schema.Boolean,
    languages: Schema.NullOr(Schema.Array(Schema.String)),
    maintainer: Schema.NullOr(
      Schema.Struct({
        avatar: Schema.NullOr(Schema.String),
        id: Schema.String,
        name: Schema.String,
        partnerProfile: Schema.NullOr(
          Schema.Struct({
            category: Schema.String,
            description: Schema.String,
            slug: Schema.String,
            type: Schema.Literals([
              "BASIC_PARTNER",
              "LIMITED_PARTNER",
              "TEMPLATE_MAINTAINER",
            ]),
            website: Schema.String,
          }),
        ),
      }),
    ),
    metadata: Schema.Unknown,
    name: Schema.String,
    projects: Schema.Number,
    readme: Schema.NullOr(Schema.String),
    recentProjects: Schema.Number,
    serializedConfig: Schema.NullOr(Schema.Unknown),
    similarTemplates: Schema.Array(
      Schema.Struct({
        code: Schema.String,
        createdAt: Schema.String,
        creator: Schema.NullOr(
          Schema.Struct({
            avatar: Schema.NullOr(Schema.String),
            hasPublicProfile: Schema.Boolean,
            name: Schema.NullOr(Schema.String),
            username: Schema.NullOr(Schema.String),
          }),
        ),
        deploys: Schema.Number,
        description: Schema.NullOr(Schema.String),
        health: Schema.NullOr(Schema.Number),
        image: Schema.NullOr(Schema.String),
        name: Schema.String,
        teamId: Schema.NullOr(Schema.String),
        userId: Schema.NullOr(Schema.String),
        workspaceId: Schema.NullOr(Schema.String),
      }),
    ),
    status: Schema.Literals(["HIDDEN", "PUBLISHED", "UNPUBLISHED"]),
    supportHealthMetrics: Schema.NullOr(Schema.Unknown),
    tags: Schema.NullOr(Schema.Array(Schema.String)),
    teamId: Schema.NullOr(Schema.String),
    totalPayout: Schema.Number,
    updatedAt: Schema.String,
    workspaceId: Schema.NullOr(Schema.String),
  }),
).pipe(T.ResponsePath("templateSourceForProject"));
export type GetTemplateSourceForProjectOutput =
  typeof GetTemplateSourceForProjectOutput.Type;

/**
 * Get the source template for a project.
 */
export const getTemplateSourceForProject = API.make(() => ({
  inputSchema: GetTemplateSourceForProjectInput,
  outputSchema: GetTemplateSourceForProjectOutput,
}));
