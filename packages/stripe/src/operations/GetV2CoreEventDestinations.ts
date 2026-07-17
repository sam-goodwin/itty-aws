import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveOutputString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface GetV2CoreEventDestinationsInput {
  include?: string;
  limit?: number;
}
export const GetV2CoreEventDestinationsInput =
  /*@__PURE__*/ Schema.Struct({
    include: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({ method: "GET", path: "/v2/core/event_destinations" }),
  ) as unknown as Schema.Codec<GetV2CoreEventDestinationsInput>;

// Output Schema
export interface GetV2CoreEventDestinationsOutput {
  data: {
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
  }[];
  next_page_url: string | null;
  previous_page_url: string | null;
}
export const GetV2CoreEventDestinationsOutput =
  /*@__PURE__*/ Schema.Struct({
    data: Schema.Array(
      Schema.Struct({
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
      }),
    ),
    next_page_url: Schema.NullOr(Schema.String),
    previous_page_url: Schema.NullOr(Schema.String),
  }) as unknown as Schema.Codec<GetV2CoreEventDestinationsOutput>;

// The operation
/**
 * List Event Destinations
 *
 * Lists all event destinations.
 *
 * @param include - Additional fields to include in the response. Currently supports `webhook_endpoint.url`.
 * @param limit - The page size.
 */
export const GetV2CoreEventDestinations = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetV2CoreEventDestinationsInput,
  outputSchema: GetV2CoreEventDestinationsOutput,
}));
