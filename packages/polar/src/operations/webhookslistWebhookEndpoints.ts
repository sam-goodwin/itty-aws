import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveOutputString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface WebhookslistWebhookEndpointsInput {
  organization_id?: string | ReadonlyArray<string> | null;
  page?: number;
  limit?: number;
}
export const WebhookslistWebhookEndpointsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization_id: Schema.optional(
      Schema.NullOr(Schema.Union([Schema.String, Schema.Array(Schema.String)])),
    ),
    page: Schema.optional(Schema.Number),
    limit: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({ method: "GET", path: "/v1/webhooks/endpoints" }),
  ) as unknown as Schema.Codec<WebhookslistWebhookEndpointsInput>;

// Output Schema
export interface WebhookslistWebhookEndpointsOutput {
  items: ReadonlyArray<{
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
  }>;
  pagination: { total_count: number; max_page: number };
}
export const WebhookslistWebhookEndpointsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    items: Schema.Array(
      Schema.Struct({
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
      }),
    ),
    pagination: Schema.Struct({
      total_count: Schema.Number,
      max_page: Schema.Number,
    }),
  }) as unknown as Schema.Codec<WebhookslistWebhookEndpointsOutput>;

// The operation
/**
 * List Webhook Endpoints
 *
 * List webhook endpoints.
 * **Scopes**: `webhooks:read` `webhooks:write`
 *
 * @param organization_id - Filter by organization ID.
 * @param page - Page number, defaults to 1.
 * @param limit - Size of a page, defaults to 10. Maximum is 100.
 */
export const webhookslistWebhookEndpoints =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WebhookslistWebhookEndpointsInput,
    outputSchema: WebhookslistWebhookEndpointsOutput,
  }));
