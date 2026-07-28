import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveOutputString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface WebhooksupdateWebhookEndpointInput {
  id: string;
  url?: string | null;
  name?: string | null;
  format?: "raw" | "discord" | "slack" | null;
  events?: ReadonlyArray<
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
  > | null;
  enabled?: boolean | null;
}
export const WebhooksupdateWebhookEndpointInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    url: Schema.optional(Schema.NullOr(Schema.String)),
    name: Schema.optional(Schema.NullOr(Schema.String)),
    format: Schema.optional(
      Schema.NullOr(Schema.Literals(["raw", "discord", "slack"])),
    ),
    events: Schema.optional(
      Schema.NullOr(
        Schema.Array(
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
      ),
    ),
    enabled: Schema.optional(Schema.NullOr(Schema.Boolean)),
  }).pipe(
    T.Http({ method: "PATCH", path: "/v1/webhooks/endpoints/{id}" }),
  ) as unknown as Schema.Codec<WebhooksupdateWebhookEndpointInput>;

// Output Schema
export interface WebhooksupdateWebhookEndpointOutput {
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
export const WebhooksupdateWebhookEndpointOutput =
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
  }) as unknown as Schema.Codec<WebhooksupdateWebhookEndpointOutput>;

// The operation
/**
 * Update Webhook Endpoint
 *
 * Update a webhook endpoint.
 * **Scopes**: `webhooks:write`
 *
 * @param id - The webhook endpoint ID.
 */
export const webhooksupdateWebhookEndpoint =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WebhooksupdateWebhookEndpointInput,
    outputSchema: WebhooksupdateWebhookEndpointOutput,
  }));
