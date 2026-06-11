import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query getProjects($after: String, $before: String, $first: Int, $includeDeleted: Boolean, $last: Int, $orderBy: ProjectsOrderBy, $userId: String, $workspaceId: String) {\n  projects(after: $after, before: $before, first: $first, includeDeleted: $includeDeleted, last: $last, orderBy: $orderBy, userId: $userId, workspaceId: $workspaceId) {\n    edges {\n      cursor\n      node {\n        baseEnvironmentId\n        botPrEnvironments\n        createdAt\n        deletedAt\n        description\n        expiredAt\n        featureFlags\n        focusedPrEnvironments\n        id\n        isPublic\n        isTempProject\n        name\n        prDeploys\n        primaryEnvironmentId\n        subscriptionPlanLimit\n        subscriptionType\n        teamId\n        updatedAt\n        workspaceId\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const GetProjectsInput = Schema.Struct({
  after: Schema.optional(Schema.NullOr(Schema.String)),
  before: Schema.optional(Schema.NullOr(Schema.String)),
  first: Schema.optional(Schema.NullOr(Schema.Number)),
  includeDeleted: Schema.optional(Schema.NullOr(Schema.Boolean)),
  last: Schema.optional(Schema.NullOr(Schema.Number)),
  orderBy: Schema.optional(
    Schema.NullOr(
      Schema.Literals(["CREATED_AT_DESC", "NAME_ASC", "UPDATED_AT_DESC"]),
    ),
  ),
  userId: Schema.optional(Schema.NullOr(Schema.String)),
  workspaceId: Schema.optional(Schema.NullOr(Schema.String)),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "getProjects",
    type: "query",
  }),
);
export type GetProjectsInput = typeof GetProjectsInput.Type;

// Output Schema (GraphQL selection set)
export const GetProjectsOutput = Schema.Struct({
  edges: Schema.Array(
    Schema.Struct({
      cursor: Schema.String,
      node: Schema.Struct({
        baseEnvironmentId: Schema.NullOr(Schema.String),
        botPrEnvironments: Schema.Boolean,
        createdAt: Schema.String,
        deletedAt: Schema.NullOr(Schema.String),
        description: Schema.NullOr(Schema.String),
        expiredAt: Schema.NullOr(Schema.String),
        featureFlags: Schema.Array(Schema.Literals(["PLACEHOLDER"])),
        focusedPrEnvironments: Schema.Boolean,
        id: Schema.String,
        isPublic: Schema.Boolean,
        isTempProject: Schema.Boolean,
        name: Schema.String,
        prDeploys: Schema.Boolean,
        primaryEnvironmentId: Schema.NullOr(Schema.String),
        subscriptionPlanLimit: Schema.Unknown,
        subscriptionType: Schema.Literals(["free", "hobby", "pro", "trial"]),
        teamId: Schema.NullOr(Schema.String),
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
}).pipe(T.ResponsePath("projects"));
export type GetProjectsOutput = typeof GetProjectsOutput.Type;

/**
 * Gets all projects for a user or workspace.
 */
export const getProjects = API.make(() => ({
  inputSchema: GetProjectsInput,
  outputSchema: GetProjectsOutput,
}));
