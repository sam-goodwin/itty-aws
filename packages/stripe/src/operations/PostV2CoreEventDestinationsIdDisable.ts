import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveOutputString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface PostV2CoreEventDestinationsIdDisableInput {
  id: string;
}
export const PostV2CoreEventDestinationsIdDisableInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v2/core/event_destinations/{id}/disable",
    }),
  ) as unknown as Schema.Codec<PostV2CoreEventDestinationsIdDisableInput>;

// Output Schema
export interface PostV2CoreEventDestinationsIdDisableOutput {
  amazon_eventbridge?: {
    aws_account_id: string;
    aws_event_source_arn: string;
    aws_event_source_status: "active" | "deleted" | "pending" | "unknown";
  };
  azure_event_grid?: {
    azure_partner_topic_name: string;
    azure_partner_topic_status:
      | "activated"
      | "deleted"
      | "never_activated"
      | "unknown";
    azure_region: string;
    azure_resource_group_name: string;
    azure_subscription_id: string;
  };
  created: string;
  description: string;
  enabled_events: string[];
  event_payload: "snapshot" | "thin";
  events_from?: string[];
  id: string;
  livemode: boolean;
  metadata?: Record<string, string>;
  name: string;
  object: "v2.core.event_destination";
  snapshot_api_version?: string;
  status: "disabled" | "enabled";
  status_details?: {
    disabled?: {
      reason:
        | "no_aws_event_source_exists"
        | "no_azure_partner_topic_exists"
        | "user";
    };
  };
  type: "amazon_eventbridge" | "azure_event_grid" | "webhook_endpoint";
  updated: string;
  webhook_endpoint?: {
    signing_secret?: Redacted.Redacted<string>;
    url?: string;
  };
}
export const PostV2CoreEventDestinationsIdDisableOutput =
  /*@__PURE__*/ Schema.Struct({
    amazon_eventbridge: Schema.optional(
      Schema.Struct({
        aws_account_id: Schema.String,
        aws_event_source_arn: Schema.String,
        aws_event_source_status: Schema.Literals([
          "active",
          "deleted",
          "pending",
          "unknown",
        ]),
      }),
    ),
    azure_event_grid: Schema.optional(
      Schema.Struct({
        azure_partner_topic_name: Schema.String,
        azure_partner_topic_status: Schema.Literals([
          "activated",
          "deleted",
          "never_activated",
          "unknown",
        ]),
        azure_region: Schema.String,
        azure_resource_group_name: Schema.String,
        azure_subscription_id: Schema.String,
      }),
    ),
    created: Schema.String,
    description: Schema.String,
    enabled_events: Schema.Array(Schema.String),
    event_payload: Schema.Literals(["snapshot", "thin"]),
    events_from: Schema.optional(Schema.Array(Schema.String)),
    id: Schema.String,
    livemode: Schema.Boolean,
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.String,
    object: Schema.Literals(["v2.core.event_destination"]),
    snapshot_api_version: Schema.optional(Schema.String),
    status: Schema.Literals(["disabled", "enabled"]),
    status_details: Schema.optional(
      Schema.Struct({
        disabled: Schema.optional(
          Schema.Struct({
            reason: Schema.Literals([
              "no_aws_event_source_exists",
              "no_azure_partner_topic_exists",
              "user",
            ]),
          }),
        ),
      }),
    ),
    type: Schema.Literals([
      "amazon_eventbridge",
      "azure_event_grid",
      "webhook_endpoint",
    ]),
    updated: Schema.String,
    webhook_endpoint: Schema.optional(
      Schema.Struct({
        signing_secret: Schema.optional(SensitiveOutputString),
        url: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<PostV2CoreEventDestinationsIdDisableOutput>;

// The operation
/**
 * Disable an Event Destination
 *
 * Disable an event destination.
 *
 * @param id - Identifier for the event destination to disable.
 */
export const PostV2CoreEventDestinationsIdDisable =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PostV2CoreEventDestinationsIdDisableInput,
    outputSchema: PostV2CoreEventDestinationsIdDisableOutput,
  }));
