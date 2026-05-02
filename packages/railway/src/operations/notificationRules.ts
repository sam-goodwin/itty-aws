import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query notificationRules($projectId: String, $workspaceId: String!) {\n  notificationRules(projectId: $projectId, workspaceId: $workspaceId) {\n    channels {\n      config\n      createdAt\n      id\n      updatedAt\n      workspaceId\n    }\n    createdAt\n    environmentId\n    ephemeralEnvironments\n    eventTypes\n    id\n    projectId\n    serviceId\n    severities\n    updatedAt\n    workspaceId\n  }\n}";

// Input Schema (GraphQL variables)
export const NotificationRulesInput = Schema.Struct({
  projectId: Schema.optional(Schema.NullOr(Schema.String)),
  workspaceId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "notificationRules",
    type: "query",
  }),
);
export type NotificationRulesInput = typeof NotificationRulesInput.Type;

// Output Schema (GraphQL selection set)
export const NotificationRulesOutput = Schema.Array(
  Schema.Struct({
    channels: Schema.Array(
      Schema.Struct({
        config: Schema.Unknown,
        createdAt: Schema.String,
        id: Schema.String,
        updatedAt: Schema.String,
        workspaceId: Schema.String,
      }),
    ),
    createdAt: Schema.String,
    environmentId: Schema.NullOr(Schema.String),
    ephemeralEnvironments: Schema.NullOr(Schema.Boolean),
    eventTypes: Schema.Array(Schema.String),
    id: Schema.String,
    projectId: Schema.NullOr(Schema.String),
    serviceId: Schema.NullOr(Schema.String),
    severities: Schema.Array(
      Schema.Literals(["CRITICAL", "INFO", "NOTICE", "WARNING"]),
    ),
    updatedAt: Schema.String,
    workspaceId: Schema.String,
  }),
).pipe(T.ResponsePath("notificationRules"));
export type NotificationRulesOutput = typeof NotificationRulesOutput.Type;

/**
 * Get all notification rules for a workspace and project
 */
export const notificationRules = API.make(() => ({
  inputSchema: NotificationRulesInput,
  outputSchema: NotificationRulesOutput,
}));
