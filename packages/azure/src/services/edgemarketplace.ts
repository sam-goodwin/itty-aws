/**
 * Azure Edgemarketplace API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveOutputString } from "../sensitive.ts";

// Shared schemas
const OfferSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const systemDataSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
});
const OfferPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  contentVersion: Schema.optional(Schema.String),
  contentUrl: Schema.optional(Schema.String),
  offerContent: Schema.suspend(() => OfferContentSchema),
  provisioningState: Schema.optional(
    Schema.suspend(() => Azure_ResourceManager_ResourceProvisioningStateSchema),
  ),
  marketplaceSkus: Schema.optional(
    Schema.Array(Schema.suspend(() => MarketplaceSkuSchema)),
  ),
});
const OfferContentSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  displayName: Schema.String,
  summary: Schema.optional(Schema.String),
  longSummary: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  offerId: Schema.String,
  offerType: Schema.optional(Schema.String),
  supportUri: Schema.optional(Schema.String),
  popularity: Schema.optional(Schema.Number),
  offerPublisher: Schema.optional(Schema.suspend(() => OfferPublisherSchema)),
  availability: Schema.optional(Schema.suspend(() => OfferAvailabilitySchema)),
  releaseType: Schema.optional(Schema.suspend(() => OfferReleaseTypeSchema)),
  iconFileUris: Schema.optional(Schema.suspend(() => IconFileUrisSchema)),
  termsAndConditions: Schema.optional(
    Schema.suspend(() => TermsAndConditionsSchema),
  ),
  categoryIds: Schema.optional(Schema.Array(Schema.String)),
  operatingSystems: Schema.optional(Schema.Array(Schema.String)),
});
const OfferPublisherSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  publisherId: Schema.String,
  publisherDisplayName: Schema.String,
});
const OfferAvailabilitySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Private",
  "Public",
]);
const OfferReleaseTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Preview",
  "GA",
]);
const IconFileUrisSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  small: Schema.optional(Schema.String),
  medium: Schema.optional(Schema.String),
  wide: Schema.optional(Schema.String),
  large: Schema.optional(Schema.String),
});
const TermsAndConditionsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  legalTermsUri: Schema.optional(Schema.String),
  legalTermsType: Schema.optional(Schema.String),
  privacyPolicyUri: Schema.optional(Schema.String),
});
const Azure_ResourceManager_ResourceProvisioningStateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Succeeded",
    "Failed",
    "Canceled",
  ]);
const MarketplaceSkuSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  catalogPlanId: Schema.String,
  marketplaceSkuId: Schema.String,
  type: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
  summary: Schema.optional(Schema.String),
  longSummary: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  generation: Schema.optional(Schema.String),
  displayRank: Schema.optional(Schema.Number),
  operatingSystem: Schema.optional(
    Schema.suspend(() => SkuOperatingSystemSchema),
  ),
  marketplaceSkuVersions: Schema.optional(
    Schema.Array(Schema.suspend(() => MarketplaceSkuVersionSchema)),
  ),
});
const SkuOperatingSystemSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  family: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  name: Schema.String,
});
const MarketplaceSkuVersionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String,
  sizeOnDiskInMb: Schema.optional(Schema.Number),
  minimumDownloadSizeInMb: Schema.optional(Schema.Number),
  stageName: Schema.optional(Schema.String),
  launchType: Schema.optional(Schema.suspend(() => OfferLaunchTypeSchema)),
});
const OfferLaunchTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Trusted",
  "Unknown",
]);
const PublisherSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const PublisherPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  provisioningState: Schema.optional(
    Schema.suspend(() => Azure_ResourceManager_ResourceProvisioningStateSchema),
  ),
});
const OperationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  origin: Schema.optional(Schema.Literals(["user", "system", "user,system"])),
  actionType: Schema.optional(Schema.Literals(["Internal"])),
});

// Input Schema
export const OffersGenerateAccessTokenInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
      longRunning: { finalStateVia: "location" },
    }),
  );
export type OffersGenerateAccessTokenInput =
  typeof OffersGenerateAccessTokenInput.Type;

// Output Schema
export const OffersGenerateAccessTokenOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    diskId: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    accessToken: SensitiveOutputString,
  });
export type OffersGenerateAccessTokenOutput =
  typeof OffersGenerateAccessTokenOutput.Type;

// The operation
/**
 * A long-running resource action.
 *
 * @param api-version - The API version to use for this operation.
 * @param offerId - Id of the offer
 */
export const OffersGenerateAccessToken = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: OffersGenerateAccessTokenInput,
    outputSchema: OffersGenerateAccessTokenOutput,
  }),
);
// Input Schema
export const OffersGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  offerId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/{resourceUri}/providers/Microsoft.EdgeMarketplace/offers/{offerId}",
    apiVersion: "2024-10-01",
  }),
);
export type OffersGetInput = typeof OffersGetInput.Type;

// Output Schema
export const OffersGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => OfferPropertiesSchema)),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type OffersGetOutput = typeof OffersGetOutput.Type;

// The operation
/**
 * Get a Offer
 *
 * @param api-version - The API version to use for this operation.
 * @param offerId - Id of the offer
 */
export const OffersGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OffersGetInput,
  outputSchema: OffersGetOutput,
}));
// Input Schema
export const OffersGetAccessTokenInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    offerId: Schema.String.pipe(T.PathParam()),
    requestId: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/{resourceUri}/providers/Microsoft.EdgeMarketplace/offers/{offerId}/getAccessToken",
      apiVersion: "2024-10-01",
    }),
  );
export type OffersGetAccessTokenInput = typeof OffersGetAccessTokenInput.Type;

// Output Schema
export const OffersGetAccessTokenOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    diskId: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    accessToken: SensitiveOutputString,
  });
export type OffersGetAccessTokenOutput = typeof OffersGetAccessTokenOutput.Type;

// The operation
/**
 * get access token.
 *
 * @param api-version - The API version to use for this operation.
 * @param offerId - Id of the offer
 */
export const OffersGetAccessToken = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: OffersGetAccessTokenInput,
    outputSchema: OffersGetAccessTokenOutput,
  }),
);
// Input Schema
export const OffersListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
);
export type OffersListInput = typeof OffersListInput.Type;

// Output Schema
export const OffersListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.Array(Schema.suspend(() => OfferSchema)),
  nextLink: Schema.optional(Schema.String),
});
export type OffersListOutput = typeof OffersListOutput.Type;

// The operation
/**
 * List Offer resources by parent
 *
 * @param api-version - The API version to use for this operation.
 * @param $top - The number of result items to return.
 * @param skip - The number of result items to skip.
 * @param maxpagesize - The maximum number of result items per page.
 * @param $filter - Filter the result list using the given expression.
 * @param $skipToken - Skip over when retrieving results.
 */
export const OffersList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OffersListInput,
  outputSchema: OffersListOutput,
}));
// Input Schema
export const OffersListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.EdgeMarketplace/offers",
      apiVersion: "2024-10-01",
    }),
  );
export type OffersListBySubscriptionInput =
  typeof OffersListBySubscriptionInput.Type;

// Output Schema
export const OffersListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => OfferSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type OffersListBySubscriptionOutput =
  typeof OffersListBySubscriptionOutput.Type;

// The operation
/**
 * List Offer resources by subscription ID
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const OffersListBySubscription = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: OffersListBySubscriptionInput,
    outputSchema: OffersListBySubscriptionOutput,
  }),
);
// Input Schema
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.EdgeMarketplace/operations",
    apiVersion: "2024-10-01",
  }),
);
export type OperationsListInput = typeof OperationsListInput.Type;

// Output Schema
export const OperationsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(Schema.Array(Schema.suspend(() => OperationSchema))),
  nextLink: Schema.optional(Schema.String),
});
export type OperationsListOutput = typeof OperationsListOutput.Type;

// The operation
/**
 * List the operations for the provider
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export const PublishersGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  publisherName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/{resourceUri}/providers/Microsoft.EdgeMarketplace/publishers/{publisherName}",
    apiVersion: "2024-10-01",
  }),
);
export type PublishersGetInput = typeof PublishersGetInput.Type;

// Output Schema
export const PublishersGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => PublisherPropertiesSchema)),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type PublishersGetOutput = typeof PublishersGetOutput.Type;

// The operation
/**
 * Get a Publisher
 *
 * @param api-version - The API version to use for this operation.
 * @param publisherName - Name of the publisher
 */
export const PublishersGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PublishersGetInput,
  outputSchema: PublishersGetOutput,
}));
// Input Schema
export const PublishersListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
);
export type PublishersListInput = typeof PublishersListInput.Type;

// Output Schema
export const PublishersListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.Array(Schema.suspend(() => PublisherSchema)),
  nextLink: Schema.optional(Schema.String),
});
export type PublishersListOutput = typeof PublishersListOutput.Type;

// The operation
/**
 * List Publisher resources by parent
 *
 * @param api-version - The API version to use for this operation.
 * @param $top - The number of result items to return.
 * @param skip - The number of result items to skip.
 * @param maxpagesize - The maximum number of result items per page.
 * @param $filter - Filter the result list using the given expression.
 * @param $skipToken - Skip over when retrieving results.
 */
export const PublishersList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PublishersListInput,
  outputSchema: PublishersListOutput,
}));
// Input Schema
export const PublishersListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.EdgeMarketplace/publishers",
      apiVersion: "2024-10-01",
    }),
  );
export type PublishersListBySubscriptionInput =
  typeof PublishersListBySubscriptionInput.Type;

// Output Schema
export const PublishersListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => PublisherSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type PublishersListBySubscriptionOutput =
  typeof PublishersListBySubscriptionOutput.Type;

// The operation
/**
 * List Publisher resources by subscription ID
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const PublishersListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PublishersListBySubscriptionInput,
    outputSchema: PublishersListBySubscriptionOutput,
  }));
