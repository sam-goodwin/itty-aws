import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { UnprocessableEntity } from "../../errors.ts";
import { SensitiveString } from "../../sensitive.ts";

// Input Schema
export const CreateNotifierInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  createdAt: Schema.optional(Schema.String),
  createdBy: Schema.optional(Schema.String),
  disabledUntil: Schema.optional(Schema.String),
  name: Schema.String,
  properties: Schema.Struct({
    customWebhook: Schema.optional(
      Schema.Struct({
        body: Schema.String,
        headers: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        secretHeaders: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        url: Schema.String,
      }),
    ),
    discord: Schema.optional(
      Schema.Struct({
        discordChannel: Schema.optional(Schema.String),
        discordToken: Schema.optional(Schema.String),
      }),
    ),
    discordWebhook: Schema.optional(
      Schema.Struct({
        discordWebhookUrl: Schema.optional(Schema.String),
      }),
    ),
    email: Schema.optional(
      Schema.Struct({
        emails: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
    microsoftTeams: Schema.optional(
      Schema.Struct({
        microsoftTeamsUrl: Schema.optional(Schema.String),
      }),
    ),
    opsgenie: Schema.optional(
      Schema.Struct({
        apiKey: Schema.optional(SensitiveString),
        isEU: Schema.optional(Schema.Boolean),
      }),
    ),
    pagerduty: Schema.optional(
      Schema.Struct({
        routingKey: Schema.optional(Schema.String),
        token: Schema.optional(Schema.String),
      }),
    ),
    slack: Schema.optional(
      Schema.Struct({
        slackUrl: Schema.optional(Schema.String),
      }),
    ),
    webhook: Schema.optional(
      Schema.Struct({
        url: Schema.optional(Schema.String),
      }),
    ),
  }),
}).pipe(T.Http({ method: "POST", path: "/v2/notifiers" }));
export type CreateNotifierInput = typeof CreateNotifierInput.Type;

// Output Schema
export const CreateNotifierOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  createdAt: Schema.optional(Schema.String),
  createdBy: Schema.optional(Schema.String),
  disabledUntil: Schema.optional(Schema.String),
  name: Schema.String,
  properties: Schema.Struct({
    customWebhook: Schema.optional(
      Schema.Struct({
        body: Schema.String,
        headers: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        secretHeaders: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        url: Schema.String,
      }),
    ),
    discord: Schema.optional(
      Schema.Struct({
        discordChannel: Schema.optional(Schema.String),
        discordToken: Schema.optional(Schema.String),
      }),
    ),
    discordWebhook: Schema.optional(
      Schema.Struct({
        discordWebhookUrl: Schema.optional(Schema.String),
      }),
    ),
    email: Schema.optional(
      Schema.Struct({
        emails: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
    microsoftTeams: Schema.optional(
      Schema.Struct({
        microsoftTeamsUrl: Schema.optional(Schema.String),
      }),
    ),
    opsgenie: Schema.optional(
      Schema.Struct({
        apiKey: Schema.optional(SensitiveString),
        isEU: Schema.optional(Schema.Boolean),
      }),
    ),
    pagerduty: Schema.optional(
      Schema.Struct({
        routingKey: Schema.optional(Schema.String),
        token: Schema.optional(Schema.String),
      }),
    ),
    slack: Schema.optional(
      Schema.Struct({
        slackUrl: Schema.optional(Schema.String),
      }),
    ),
    webhook: Schema.optional(
      Schema.Struct({
        url: Schema.optional(Schema.String),
      }),
    ),
  }),
  id: Schema.optional(Schema.String),
});
export type CreateNotifierOutput = typeof CreateNotifierOutput.Type;

// The operation
/**
 * Creates a new notifier configuration for sending alerts through various channels (Slack, Email, etc)
 */
export const createNotifier = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateNotifierInput,
  outputSchema: CreateNotifierOutput,
  errors: [UnprocessableEntity] as const,
}));
