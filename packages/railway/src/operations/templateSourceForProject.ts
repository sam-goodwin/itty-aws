import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query templateSourceForProject($projectId: String!) {\n  templateSourceForProject(projectId: $projectId) {\n    activeProjects\n    canvasConfig\n    category\n    code\n    communityThreadSlug\n    config\n    createdAt\n    creator {\n      avatar\n      hasPublicProfile\n      name\n      username\n    }\n    demoProjectId\n    description\n    guides {\n      post\n      video\n    }\n    health\n    id\n    image\n    isApproved\n    isV2Template\n    isVerified\n    languages\n    metadata\n    name\n    projects\n    readme\n    recentProjects\n    serializedConfig\n    similarTemplates {\n      code\n      createdAt\n      creator {\n        avatar\n        hasPublicProfile\n        name\n        username\n      }\n      deploys\n      description\n      health\n      image\n      name\n      teamId\n      userId\n      workspaceId\n    }\n    status\n    supportHealthMetrics\n    tags\n    teamId\n    totalPayout\n    workspaceId\n  }\n}";

// Input Schema (GraphQL variables)
export const TemplateSourceForProjectInput = Schema.Struct({
  projectId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "templateSourceForProject",
    type: "query",
  }),
);
export type TemplateSourceForProjectInput =
  typeof TemplateSourceForProjectInput.Type;

// Output Schema (GraphQL selection set)
export const TemplateSourceForProjectOutput = Schema.NullOr(
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
    workspaceId: Schema.NullOr(Schema.String),
  }),
).pipe(T.ResponsePath("templateSourceForProject"));
export type TemplateSourceForProjectOutput =
  typeof TemplateSourceForProjectOutput.Type;

/**
 * Get the source template for a project.
 */
export const templateSourceForProject = API.make(() => ({
  inputSchema: TemplateSourceForProjectInput,
  outputSchema: TemplateSourceForProjectOutput,
}));
