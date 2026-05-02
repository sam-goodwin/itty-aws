import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation notificationRuleUpdate($id: String!, $input: UpdateNotificationRuleInput!) {\n  notificationRuleUpdate(id: $id, input: $input) {\n    channels {\n      config\n      createdAt\n      id\n      updatedAt\n      workspaceId\n    }\n    createdAt\n    environmentId\n    ephemeralEnvironments\n    eventTypes\n    id\n    projectId\n    serviceId\n    severities\n    updatedAt\n    workspaceId\n  }\n}";

// Input Schema (GraphQL variables)
export const NotificationRuleUpdateInput = Schema.Struct({
  id: Schema.String,
  input: Schema.Struct({
    channelConfigs: Schema.optional(
      Schema.NullOr(Schema.Array(Schema.Unknown)),
    ),
    ephemeralEnvironments: Schema.optional(Schema.NullOr(Schema.Boolean)),
    eventTypes: Schema.optional(Schema.NullOr(Schema.Array(Schema.String))),
    severities: Schema.optional(
      Schema.NullOr(
        Schema.Array(
          Schema.Literals(["CRITICAL", "INFO", "NOTICE", "WARNING"]),
        ),
      ),
    ),
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "notificationRuleUpdate",
    type: "mutation",
  }),
);
export type NotificationRuleUpdateInput =
  typeof NotificationRuleUpdateInput.Type;

// Output Schema (GraphQL selection set)
export const NotificationRuleUpdateOutput = Schema.Struct({
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
}).pipe(T.ResponsePath("notificationRuleUpdate"));
export type NotificationRuleUpdateOutput =
  typeof NotificationRuleUpdateOutput.Type;

/**
 * Update a notification rule
 */
export const notificationRuleUpdate = API.make(() => ({
  inputSchema: NotificationRuleUpdateInput,
  outputSchema: NotificationRuleUpdateOutput,
}));
