import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { NotFound } from "../../errors";
import { SensitiveString } from "../../sensitive";

// Input Schema
export const GetNotifierInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/v2/notifiers/{id}" }));
export type GetNotifierInput = typeof GetNotifierInput.Type;

// Output Schema
export const GetNotifierOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type GetNotifierOutput = typeof GetNotifierOutput.Type;

// The operation
/**
 * Retrieves detailed configuration for a specific notifier by its unique identifier
 *
 * @param id - Unique identifier of the notifier (format: notify_*)
 */
export const getNotifier = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetNotifierInput,
  outputSchema: GetNotifierOutput,
  errors: [NotFound] as const,
}));
