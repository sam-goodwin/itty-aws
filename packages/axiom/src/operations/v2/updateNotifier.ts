import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { NotFound, UnprocessableEntity } from "../../errors.ts";
import { SensitiveString, SensitiveOutputString } from "../../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface UpdateNotifierInput {
  id: string;
  createdAt?: string;
  createdBy?: string;
  disabledUntil?: string;
  name: string;
  properties: {
    customWebhook?: {
      body: string;
      headers?: Record<string, string>;
      secretHeaders?: Record<string, string>;
      url: string;
    };
    discord?: { discordChannel?: string; discordToken?: string };
    discordWebhook?: { discordWebhookUrl?: string };
    email?: { emails?: ReadonlyArray<string> };
    microsoftTeams?: { microsoftTeamsUrl?: string };
    opsgenie?: { apiKey?: string | Redacted.Redacted<string>; isEU?: boolean };
    pagerduty?: { routingKey?: string; token?: string };
    slack?: { slackUrl?: string };
    webhook?: { url?: string };
  };
  updatedAt?: string;
}
export const UpdateNotifierInput = /*@__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
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
  updatedAt: Schema.optional(Schema.String),
}).pipe(
  T.Http({ method: "PUT", path: "/v2/notifiers/{id}" }),
) as unknown as Schema.Codec<UpdateNotifierInput>;

// Output Schema
export interface UpdateNotifierOutput {
  createdAt?: string;
  createdBy?: string;
  disabledUntil?: string;
  name: string;
  properties: {
    customWebhook?: {
      body: string;
      headers?: Record<string, string>;
      secretHeaders?: Record<string, string>;
      url: string;
    };
    discord?: { discordChannel?: string; discordToken?: string };
    discordWebhook?: { discordWebhookUrl?: string };
    email?: { emails?: ReadonlyArray<string> };
    microsoftTeams?: { microsoftTeamsUrl?: string };
    opsgenie?: { apiKey?: Redacted.Redacted<string>; isEU?: boolean };
    pagerduty?: { routingKey?: string; token?: string };
    slack?: { slackUrl?: string };
    webhook?: { url?: string };
  };
  updatedAt?: string;
  id?: string;
}
export const UpdateNotifierOutput = /*@__PURE__*/ Schema.Struct({
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
        apiKey: Schema.optional(SensitiveOutputString),
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
  updatedAt: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<UpdateNotifierOutput>;

// The operation
/**
 * Update notifier
 */
export const updateNotifier = /*@__PURE__*/ API.make(() => ({
  inputSchema: UpdateNotifierInput,
  outputSchema: UpdateNotifierOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
