import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveOutputString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface GetWebhookEndpointsWebhookEndpointInput {
  webhook_endpoint: string;
  expand?: string;
}
export const GetWebhookEndpointsWebhookEndpointInput =
  /*@__PURE__*/ Schema.Struct({
    webhook_endpoint: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/webhook_endpoints/{webhook_endpoint}",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<GetWebhookEndpointsWebhookEndpointInput>;

// Output Schema
export interface GetWebhookEndpointsWebhookEndpointOutput {
  api_version: string | null;
  application: string | null;
  created: number;
  description: string | null;
  enabled_events: string[];
  id: string;
  livemode: boolean;
  metadata: Record<string, string>;
  object: "webhook_endpoint";
  secret?: Redacted.Redacted<string>;
  status: string;
  url: string;
}
export const GetWebhookEndpointsWebhookEndpointOutput =
  /*@__PURE__*/ Schema.Struct({
    api_version: Schema.NullOr(Schema.String),
    application: Schema.NullOr(Schema.String),
    created: Schema.Number,
    description: Schema.NullOr(Schema.String),
    enabled_events: Schema.Array(Schema.String),
    id: Schema.String,
    livemode: Schema.Boolean,
    metadata: Schema.Record(Schema.String, Schema.String),
    object: Schema.Literals(["webhook_endpoint"]),
    secret: Schema.optional(SensitiveOutputString),
    status: Schema.String,
    url: Schema.String,
  }) as unknown as Schema.Codec<GetWebhookEndpointsWebhookEndpointOutput>;

// The operation
/**
 * Retrieve a webhook endpoint
 *
 * <p>Retrieves the webhook endpoint with the given ID.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetWebhookEndpointsWebhookEndpoint =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GetWebhookEndpointsWebhookEndpointInput,
    outputSchema: GetWebhookEndpointsWebhookEndpointOutput,
  }));
