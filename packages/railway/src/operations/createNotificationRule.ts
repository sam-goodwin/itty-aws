import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotAuthorized, ProblemProcessingRequest } from "./errors.ts";

const __document =
  "mutation notificationRuleCreate($input: CreateNotificationRuleInput!) {\n  notificationRuleCreate(input: $input) {\n    channels {\n      config\n      createdAt\n      id\n      updatedAt\n      workspaceId\n    }\n    createdAt\n    environmentId\n    ephemeralEnvironments\n    eventTypes\n    id\n    projectId\n    serviceId\n    severities\n    updatedAt\n    workspaceId\n  }\n}";

// Input Schema (GraphQL variables)
export const CreateNotificationRuleInput = Schema.Struct({
  input: Schema.Struct({
    channelConfigs: Schema.Array(Schema.Unknown),
    ephemeralEnvironments: Schema.optional(Schema.NullOr(Schema.Boolean)),
    eventTypes: Schema.Array(Schema.String),
    projectId: Schema.optional(Schema.NullOr(Schema.String)),
    severities: Schema.optional(
      Schema.NullOr(
        Schema.Array(
          Schema.Literals(["CRITICAL", "INFO", "NOTICE", "WARNING"]),
        ),
      ),
    ),
    workspaceId: Schema.String,
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "notificationRuleCreate",
    type: "mutation",
  }),
);
export type CreateNotificationRuleInput =
  typeof CreateNotificationRuleInput.Type;

// Output Schema (GraphQL selection set)
export const CreateNotificationRuleOutput = Schema.Struct({
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
}).pipe(T.ResponsePath("notificationRuleCreate"));
export type CreateNotificationRuleOutput =
  typeof CreateNotificationRuleOutput.Type;

/**
 * Create a new notification rule
 */
export const createNotificationRule = API.make(() => ({
  inputSchema: CreateNotificationRuleInput,
  outputSchema: CreateNotificationRuleOutput,
  errors: [NotAuthorized, ProblemProcessingRequest],
}));
