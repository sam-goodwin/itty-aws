import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveOutputString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface WebhooksgetWebhookEndpointInput {
  id: string;
}
export const WebhooksgetWebhookEndpointInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/v1/webhooks/endpoints/{id}" }),
  ) as unknown as Schema.Codec<WebhooksgetWebhookEndpointInput>;

// Output Schema
export interface WebhooksgetWebhookEndpointOutput {
  created_at: string;
  modified_at: string | null;
  id: string;
  url: string;
  name?: string | null;
  format: "raw" | "discord" | "slack";
  secret: Redacted.Redacted<string>;
  organization_id: string;
  events: ReadonlyArray<
    | "checkout.created"
    | "checkout.updated"
    | "checkout.expired"
    | "customer.created"
    | "customer.updated"
    | "customer.deleted"
    | "customer.state_changed"
    | "customer_seat.assigned"
    | "customer_seat.claimed"
    | "customer_seat.revoked"
    | "member.created"
    | "member.updated"
    | "member.deleted"
    | "order.created"
    | "order.updated"
    | "order.paid"
    | "order.refunded"
    | "subscription.created"
    | "subscription.updated"
    | "subscription.active"
    | "subscription.canceled"
    | "subscription.uncanceled"
    | "subscription.revoked"
    | "subscription.past_due"
    | "subscription.paused"
    | "subscription.resumed"
    | "refund.created"
    | "refund.updated"
    | "product.created"
    | "product.updated"
    | "benefit.created"
    | "benefit.updated"
    | "benefit_grant.created"
    | "benefit_grant.cycled"
    | "benefit_grant.updated"
    | "benefit_grant.revoked"
    | "organization.updated"
  >;
  enabled: boolean;
}
export const WebhooksgetWebhookEndpointOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    created_at: Schema.String,
    modified_at: Schema.NullOr(Schema.String),
    id: Schema.String,
    url: Schema.String,
    name: Schema.optional(Schema.NullOr(Schema.String)),
    format: Schema.Literals(["raw", "discord", "slack"]),
    secret: SensitiveOutputString,
    organization_id: Schema.String,
    events: Schema.Array(
      Schema.Literals([
        "checkout.created",
        "checkout.updated",
        "checkout.expired",
        "customer.created",
        "customer.updated",
        "customer.deleted",
        "customer.state_changed",
        "customer_seat.assigned",
        "customer_seat.claimed",
        "customer_seat.revoked",
        "member.created",
        "member.updated",
        "member.deleted",
        "order.created",
        "order.updated",
        "order.paid",
        "order.refunded",
        "subscription.created",
        "subscription.updated",
        "subscription.active",
        "subscription.canceled",
        "subscription.uncanceled",
        "subscription.revoked",
        "subscription.past_due",
        "subscription.paused",
        "subscription.resumed",
        "refund.created",
        "refund.updated",
        "product.created",
        "product.updated",
        "benefit.created",
        "benefit.updated",
        "benefit_grant.created",
        "benefit_grant.cycled",
        "benefit_grant.updated",
        "benefit_grant.revoked",
        "organization.updated",
      ]),
    ),
    enabled: Schema.Boolean,
  }) as unknown as Schema.Codec<WebhooksgetWebhookEndpointOutput>;

// The operation
/**
 * Get Webhook Endpoint
 *
 * Get a webhook endpoint by ID.
 * **Scopes**: `webhooks:read` `webhooks:write`
 *
 * @param id - The webhook endpoint ID.
 */
export const webhooksgetWebhookEndpoint = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WebhooksgetWebhookEndpointInput,
    outputSchema: WebhooksgetWebhookEndpointOutput,
  }),
);
