import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const WebhookEndpointsControllerDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "DELETE", path: "/webhook_endpoints/{id}" }));
export type WebhookEndpointsControllerDeleteInput =
  typeof WebhookEndpointsControllerDeleteInput.Type;

// Output Schema
export const WebhookEndpointsControllerDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type WebhookEndpointsControllerDeleteOutput =
  typeof WebhookEndpointsControllerDeleteOutput.Type;

// The operation
/**
 * Delete a Webhook Endpoint
 *
 * Delete an existing webhook endpoint.
 *
 * @param id - Unique identifier of the Webhook Endpoint.
 */
export const WebhookEndpointsControllerDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WebhookEndpointsControllerDeleteInput,
    outputSchema: WebhookEndpointsControllerDeleteOutput,
    errors: [NotFound] as const,
  }));
