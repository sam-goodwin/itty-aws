/**
 * Azure Marketplacenotifications API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Shared schemas
const NotificationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
});
const OfferPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  offerId: Schema.optional(Schema.String),
  createdDate: Schema.optional(Schema.String),
  offerDisplayName: Schema.optional(Schema.String),
  principalId: Schema.optional(Schema.String),
});
const OperationDetailSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  isDataAction: Schema.optional(Schema.Boolean),
  display: Schema.optional(Schema.suspend(() => OperationDisplaySchema)),
  origin: Schema.optional(Schema.String),
  properties: Schema.optional(Schema.Unknown),
});
const OperationDisplaySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resource: Schema.optional(Schema.String),
  provider: Schema.optional(Schema.String),
  operation: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
});

// Input Schema
export const NotificationGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscription}/providers/Microsoft.MarketplaceNotifications/reviewsNotification/{notification}",
    apiVersion: "2021-03-03",
  }),
);
export type NotificationGetInput = typeof NotificationGetInput.Type;

// Output Schema
export const NotificationGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
  properties: Schema.optional(Schema.suspend(() => OfferPropertiesSchema)),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
});
export type NotificationGetOutput = typeof NotificationGetOutput.Type;

// The operation
export const NotificationGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: NotificationGetInput,
  outputSchema: NotificationGetOutput,
}));
// Input Schema
export const NotificationGetOperationsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.MarketplaceNotifications/operations",
      apiVersion: "2021-03-03",
    }),
  );
export type NotificationGetOperationsInput =
  typeof NotificationGetOperationsInput.Type;

// Output Schema
export const NotificationGetOperationsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => OperationDetailSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type NotificationGetOperationsOutput =
  typeof NotificationGetOperationsOutput.Type;

// The operation
export const NotificationGetOperations = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NotificationGetOperationsInput,
    outputSchema: NotificationGetOperationsOutput,
  }),
);
// Input Schema
export const NotificationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscription}/providers/Microsoft.MarketplaceNotifications/reviewsNotifications",
    apiVersion: "2021-03-03",
  }),
);
export type NotificationsListInput = typeof NotificationsListInput.Type;

// Output Schema
export const NotificationsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => NotificationSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type NotificationsListOutput = typeof NotificationsListOutput.Type;

// The operation
export const NotificationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: NotificationsListInput,
  outputSchema: NotificationsListOutput,
}));
