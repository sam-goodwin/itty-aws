import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface DeleteWebhookEndpointsWebhookEndpointInput {
  webhook_endpoint: string;
}
export const DeleteWebhookEndpointsWebhookEndpointInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    webhook_endpoint: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/v1/webhook_endpoints/{webhook_endpoint}",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<DeleteWebhookEndpointsWebhookEndpointInput>;

// Output Schema
export interface DeleteWebhookEndpointsWebhookEndpointOutput {
  deleted: true;
  id: string;
  object: "webhook_endpoint";
}
export const DeleteWebhookEndpointsWebhookEndpointOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deleted: Schema.Literals([true]),
    id: Schema.String,
    object: Schema.Literals(["webhook_endpoint"]),
  }) as unknown as Schema.Codec<DeleteWebhookEndpointsWebhookEndpointOutput>;

// The operation
/**
 * Delete a webhook endpoint
 *
 * <p>You can also delete webhook endpoints via the <a href="https://dashboard.stripe.com/account/webhooks">webhook endpoint management</a> page of the Stripe dashboard.</p>
 */
export const DeleteWebhookEndpointsWebhookEndpoint =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteWebhookEndpointsWebhookEndpointInput,
    outputSchema: DeleteWebhookEndpointsWebhookEndpointOutput,
  }));
