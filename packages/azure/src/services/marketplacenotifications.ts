/**
 * Azure Marketplacenotifications API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface NotificationGetInput {
  subscription: string;
  notification: string;
  principalId: string;
}
export const NotificationGetInput = /*@__PURE__*/ Schema.Struct({
  subscription: Schema.String.pipe(T.PathParam()),
  notification: Schema.String.pipe(T.PathParam()),
  principalId: Schema.String,
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscription}/providers/Microsoft.MarketplaceNotifications/reviewsNotification/{notification}",
    apiVersion: "2021-03-03",
  }),
) as unknown as Schema.Codec<NotificationGetInput>;

// Output Schema
export interface NotificationGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const NotificationGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<NotificationGetOutput>;

// The operation
/**
 *
 * @param subscription - user's subscription id
 * @param notification - the notification id
 * @param principalId - user's principal id
 * @param api-version - The API version to use for the request.
 */
export const NotificationGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: NotificationGetInput,
  outputSchema: NotificationGetOutput,
}));
// Input Schema
export interface NotificationGetOperationsInput {}
export const NotificationGetOperationsInput =
  /*@__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.MarketplaceNotifications/operations",
      apiVersion: "2021-03-03",
    }),
  ) as unknown as Schema.Codec<NotificationGetOperationsInput>;

// Output Schema
export interface NotificationGetOperationsOutput {
  value?: {
    name?: string;
    isDataAction?: boolean;
    display?: {
      resource?: string;
      provider?: string;
      operation?: string;
      description?: string;
    };
    origin?: string;
    properties?: unknown;
  }[];
  nextLink?: string;
}
export const NotificationGetOperationsOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.optional(Schema.String),
          isDataAction: Schema.optional(Schema.Boolean),
          display: Schema.optional(
            Schema.Struct({
              resource: Schema.optional(Schema.String),
              provider: Schema.optional(Schema.String),
              operation: Schema.optional(Schema.String),
              description: Schema.optional(Schema.String),
            }),
          ),
          origin: Schema.optional(Schema.String),
          properties: Schema.optional(Schema.Unknown),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<NotificationGetOperationsOutput>;

// The operation
/**
 *
 * @param api-version - The API version to use for the request.
 */
export const NotificationGetOperations = /*@__PURE__*/ API.make(() => ({
  inputSchema: NotificationGetOperationsInput,
  outputSchema: NotificationGetOperationsOutput,
}));
// Input Schema
export interface NotificationsListInput {
  subscription: string;
  principalId: string;
}
export const NotificationsListInput = /*@__PURE__*/ Schema.Struct({
  subscription: Schema.String.pipe(T.PathParam()),
  principalId: Schema.String,
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscription}/providers/Microsoft.MarketplaceNotifications/reviewsNotifications",
    apiVersion: "2021-03-03",
  }),
) as unknown as Schema.Codec<NotificationsListInput>;

// Output Schema
export interface NotificationsListOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const NotificationsListOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<NotificationsListOutput>;

// The operation
/**
 *
 * @param subscription - user's subscription id
 * @param principalId - user's principal id
 * @param api-version - The API version to use for the request.
 */
export const NotificationsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: NotificationsListInput,
  outputSchema: NotificationsListOutput,
}));
