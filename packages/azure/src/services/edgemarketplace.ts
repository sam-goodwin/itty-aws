/**
 * Azure Edgemarketplace API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveOutputString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface OffersGenerateAccessTokenInput {
  resourceUri: string;
  offerId: string;
  publisherName?: string;
  edgeMarketPlaceRegion: string;
  egeMarketPlaceResourceId?: string;
  hypervGeneration?: string;
  marketPlaceSku?: string;
  marketPlaceSkuVersion?: string;
  deviceSku?: string;
  deviceVersion?: string;
}
export const OffersGenerateAccessTokenInput =
  /*@__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
    offerId: Schema.String.pipe(T.PathParam()),
    publisherName: Schema.optional(Schema.String),
    edgeMarketPlaceRegion: Schema.String,
    egeMarketPlaceResourceId: Schema.optional(Schema.String),
    hypervGeneration: Schema.optional(Schema.String),
    marketPlaceSku: Schema.optional(Schema.String),
    marketPlaceSkuVersion: Schema.optional(Schema.String),
    deviceSku: Schema.optional(Schema.String),
    deviceVersion: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/{resourceUri}/providers/Microsoft.EdgeMarketplace/offers/{offerId}/generateAccessToken",
      apiVersion: "2024-10-01",
    }),
  ) as unknown as Schema.Codec<OffersGenerateAccessTokenInput>;

// Output Schema
export interface OffersGenerateAccessTokenOutput {
  diskId?: string;
  status?: string;
  accessToken: Redacted.Redacted<string>;
}
export const OffersGenerateAccessTokenOutput =
  /*@__PURE__*/ Schema.Struct({
    diskId: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    accessToken: SensitiveOutputString,
  }) as unknown as Schema.Codec<OffersGenerateAccessTokenOutput>;

// The operation
/**
 * A long-running resource action.
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 * @param offerId - Id of the offer
 */
export const OffersGenerateAccessToken = /*@__PURE__*/ API.make(() => ({
  inputSchema: OffersGenerateAccessTokenInput,
  outputSchema: OffersGenerateAccessTokenOutput,
}));
// Input Schema
export interface OffersGetInput {
  resourceUri: string;
  offerId: string;
}
export const OffersGetInput = /*@__PURE__*/ Schema.Struct({
  resourceUri: Schema.String.pipe(T.PathParam()),
  offerId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/{resourceUri}/providers/Microsoft.EdgeMarketplace/offers/{offerId}",
    apiVersion: "2024-10-01",
  }),
) as unknown as Schema.Codec<OffersGetInput>;

// Output Schema
export interface OffersGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const OffersGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
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
}) as unknown as Schema.Codec<OffersGetOutput>;

// The operation
/**
 * Get a Offer
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 * @param offerId - Id of the offer
 */
export const OffersGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: OffersGetInput,
  outputSchema: OffersGetOutput,
}));
// Input Schema
export interface OffersGetAccessTokenInput {
  resourceUri: string;
  offerId: string;
  requestId: string;
}
export const OffersGetAccessTokenInput =
  /*@__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
    offerId: Schema.String.pipe(T.PathParam()),
    requestId: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/{resourceUri}/providers/Microsoft.EdgeMarketplace/offers/{offerId}/getAccessToken",
      apiVersion: "2024-10-01",
    }),
  ) as unknown as Schema.Codec<OffersGetAccessTokenInput>;

// Output Schema
export interface OffersGetAccessTokenOutput {
  diskId?: string;
  status?: string;
  accessToken: Redacted.Redacted<string>;
}
export const OffersGetAccessTokenOutput =
  /*@__PURE__*/ Schema.Struct({
    diskId: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    accessToken: SensitiveOutputString,
  }) as unknown as Schema.Codec<OffersGetAccessTokenOutput>;

// The operation
/**
 * get access token.
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 * @param offerId - Id of the offer
 */
export const OffersGetAccessToken = /*@__PURE__*/ API.make(() => ({
  inputSchema: OffersGetAccessTokenInput,
  outputSchema: OffersGetAccessTokenOutput,
}));
// Input Schema
export interface OffersListInput {
  resourceUri: string;
  $top?: number;
  skip?: number;
  maxpagesize?: number;
  $filter?: string;
  $skipToken?: string;
}
export const OffersListInput = /*@__PURE__*/ Schema.Struct({
  resourceUri: Schema.String.pipe(T.PathParam()),
  $top: Schema.optional(Schema.Number),
  skip: Schema.optional(Schema.Number),
  maxpagesize: Schema.optional(Schema.Number),
  $filter: Schema.optional(Schema.String),
  $skipToken: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/{resourceUri}/providers/Microsoft.EdgeMarketplace/offers",
    apiVersion: "2024-10-01",
  }),
) as unknown as Schema.Codec<OffersListInput>;

// Output Schema
export interface OffersListOutput {
  value: {
    id?: string;
    name?: string;
    type?: string;
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
  }[];
  nextLink?: string;
}
export const OffersListOutput = /*@__PURE__*/ Schema.Struct({
  value: Schema.Array(
    Schema.Struct({
      id: Schema.optional(Schema.String),
      name: Schema.optional(Schema.String),
      type: Schema.optional(Schema.String),
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
    }),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<OffersListOutput>;

// The operation
/**
 * List Offer resources by parent
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 * @param $top - The number of result items to return.
 * @param skip - The number of result items to skip.
 * @param maxpagesize - The maximum number of result items per page.
 * @param $filter - Filter the result list using the given expression.
 * @param $skipToken - Skip over when retrieving results.
 */
export const OffersList = /*@__PURE__*/ API.make(() => ({
  inputSchema: OffersListInput,
  outputSchema: OffersListOutput,
}));
// Input Schema
export interface OffersListBySubscriptionInput {
  subscriptionId: string;
}
export const OffersListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.EdgeMarketplace/offers",
      apiVersion: "2024-10-01",
    }),
  ) as unknown as Schema.Codec<OffersListBySubscriptionInput>;

// Output Schema
export interface OffersListBySubscriptionOutput {
  value: {
    id?: string;
    name?: string;
    type?: string;
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
  }[];
  nextLink?: string;
}
export const OffersListBySubscriptionOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        systemData: Schema.optional(
          Schema.Struct({
            createdBy: Schema.optional(Schema.String),
            createdByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
            createdAt: Schema.optional(Schema.String),
            lastModifiedBy: Schema.optional(Schema.String),
            lastModifiedByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
            lastModifiedAt: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<OffersListBySubscriptionOutput>;

// The operation
/**
 * List Offer resources by subscription ID
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const OffersListBySubscription = /*@__PURE__*/ API.make(() => ({
  inputSchema: OffersListBySubscriptionInput,
  outputSchema: OffersListBySubscriptionOutput,
}));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.EdgeMarketplace/operations",
    apiVersion: "2024-10-01",
  }),
) as unknown as Schema.Codec<OperationsListInput>;

// Output Schema
export interface OperationsListOutput {
  value?: {
    name?: string;
    isDataAction?: boolean;
    display?: {
      provider?: string;
      resource?: string;
      operation?: string;
      description?: string;
    };
    origin?: "user" | "system" | "user,system";
    actionType?: "Internal";
  }[];
  nextLink?: string;
}
export const OperationsListOutput = /*@__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        isDataAction: Schema.optional(Schema.Boolean),
        display: Schema.optional(
          Schema.Struct({
            provider: Schema.optional(Schema.String),
            resource: Schema.optional(Schema.String),
            operation: Schema.optional(Schema.String),
            description: Schema.optional(Schema.String),
          }),
        ),
        origin: Schema.optional(
          Schema.Literals(["user", "system", "user,system"]),
        ),
        actionType: Schema.optional(Schema.Literals(["Internal"])),
      }),
    ),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<OperationsListOutput>;

// The operation
/**
 * List the operations for the provider
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface PublishersGetInput {
  resourceUri: string;
  publisherName: string;
}
export const PublishersGetInput = /*@__PURE__*/ Schema.Struct({
  resourceUri: Schema.String.pipe(T.PathParam()),
  publisherName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/{resourceUri}/providers/Microsoft.EdgeMarketplace/publishers/{publisherName}",
    apiVersion: "2024-10-01",
  }),
) as unknown as Schema.Codec<PublishersGetInput>;

// Output Schema
export interface PublishersGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const PublishersGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
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
}) as unknown as Schema.Codec<PublishersGetOutput>;

// The operation
/**
 * Get a Publisher
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 * @param publisherName - Name of the publisher
 */
export const PublishersGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: PublishersGetInput,
  outputSchema: PublishersGetOutput,
}));
// Input Schema
export interface PublishersListInput {
  resourceUri: string;
  $top?: number;
  skip?: number;
  maxpagesize?: number;
  $filter?: string;
  $skipToken?: string;
}
export const PublishersListInput = /*@__PURE__*/ Schema.Struct({
  resourceUri: Schema.String.pipe(T.PathParam()),
  $top: Schema.optional(Schema.Number),
  skip: Schema.optional(Schema.Number),
  maxpagesize: Schema.optional(Schema.Number),
  $filter: Schema.optional(Schema.String),
  $skipToken: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/{resourceUri}/providers/Microsoft.EdgeMarketplace/publishers",
    apiVersion: "2024-10-01",
  }),
) as unknown as Schema.Codec<PublishersListInput>;

// Output Schema
export interface PublishersListOutput {
  value: {
    id?: string;
    name?: string;
    type?: string;
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
  }[];
  nextLink?: string;
}
export const PublishersListOutput = /*@__PURE__*/ Schema.Struct({
  value: Schema.Array(
    Schema.Struct({
      id: Schema.optional(Schema.String),
      name: Schema.optional(Schema.String),
      type: Schema.optional(Schema.String),
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
    }),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<PublishersListOutput>;

// The operation
/**
 * List Publisher resources by parent
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 * @param $top - The number of result items to return.
 * @param skip - The number of result items to skip.
 * @param maxpagesize - The maximum number of result items per page.
 * @param $filter - Filter the result list using the given expression.
 * @param $skipToken - Skip over when retrieving results.
 */
export const PublishersList = /*@__PURE__*/ API.make(() => ({
  inputSchema: PublishersListInput,
  outputSchema: PublishersListOutput,
}));
// Input Schema
export interface PublishersListBySubscriptionInput {
  subscriptionId: string;
}
export const PublishersListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.EdgeMarketplace/publishers",
      apiVersion: "2024-10-01",
    }),
  ) as unknown as Schema.Codec<PublishersListBySubscriptionInput>;

// Output Schema
export interface PublishersListBySubscriptionOutput {
  value: {
    id?: string;
    name?: string;
    type?: string;
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
  }[];
  nextLink?: string;
}
export const PublishersListBySubscriptionOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        systemData: Schema.optional(
          Schema.Struct({
            createdBy: Schema.optional(Schema.String),
            createdByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
            createdAt: Schema.optional(Schema.String),
            lastModifiedBy: Schema.optional(Schema.String),
            lastModifiedByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
            lastModifiedAt: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PublishersListBySubscriptionOutput>;

// The operation
/**
 * List Publisher resources by subscription ID
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const PublishersListBySubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PublishersListBySubscriptionInput,
    outputSchema: PublishersListBySubscriptionOutput,
  }));
