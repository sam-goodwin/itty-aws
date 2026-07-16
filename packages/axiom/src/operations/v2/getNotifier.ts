import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { NotFound } from "../../errors.ts";
import { SensitiveOutputString } from "../../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface GetNotifierInput {
  id: string;
}
export const GetNotifierInput = /*@__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "GET", path: "/v2/notifiers/{id}" }),
) as unknown as Schema.Codec<GetNotifierInput>;

// Output Schema
export interface GetNotifierOutput {
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
export const GetNotifierOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<GetNotifierOutput>;

// The operation
/**
 * Retrieves detailed configuration for a specific notifier by its unique identifier
 *
 * @param id - Unique identifier of the notifier (format: notify_*)
 */
export const getNotifier = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetNotifierInput,
  outputSchema: GetNotifierOutput,
  errors: [NotFound] as const,
}));
