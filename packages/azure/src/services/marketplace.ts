/**
 * Azure Marketplace API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Marketplace/operations",
    apiVersion: "2025-01-01",
  }),
) as unknown as Schema.Codec<OperationsListInput>;

// Output Schema
export interface OperationsListOutput {
  value?: {
    id?: string;
    name?: string;
    isDataAction?: boolean;
    display?: {
      provider?: string;
      resource?: string;
      operation?: string;
      description?: string;
    };
    origin?: string;
    properties?: unknown;
  }[];
  nextLink?: string;
}
export const OperationsListOutput = /*@__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
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
        origin: Schema.optional(Schema.String),
        properties: Schema.optional(Schema.Unknown),
      }),
    ),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<OperationsListOutput>;

// The operation
/**
 * Lists all of the available Microsoft.Marketplace REST API operations.
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface PrivateStoreAcknowledgeOfferNotificationInput {
  privateStoreId: string;
  offerId: string;
  properties?: {
    acknowledge?: boolean;
    dismiss?: boolean;
    removeOffer?: boolean;
    addPlans?: string[];
    removePlans?: string[];
  };
}
export const PrivateStoreAcknowledgeOfferNotificationInput =
  /*@__PURE__*/ Schema.Struct({
    privateStoreId: Schema.String.pipe(T.PathParam()),
    offerId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        acknowledge: Schema.optional(Schema.Boolean),
        dismiss: Schema.optional(Schema.Boolean),
        removeOffer: Schema.optional(Schema.Boolean),
        addPlans: Schema.optional(Schema.Array(Schema.String)),
        removePlans: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Marketplace/privateStores/{privateStoreId}/offers/{offerId}/acknowledgeNotification",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<PrivateStoreAcknowledgeOfferNotificationInput>;

// Output Schema
export type PrivateStoreAcknowledgeOfferNotificationOutput = void;
export const PrivateStoreAcknowledgeOfferNotificationOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<PrivateStoreAcknowledgeOfferNotificationOutput>;

// The operation
/**
 * Acknowledge notification for offer
 *
 * @param api-version - The API version to use for this operation.
 * @param privateStoreId - The store ID - must use the tenant ID
 * @param offerId - The offer ID to update or delete
 */
export const PrivateStoreAcknowledgeOfferNotification =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateStoreAcknowledgeOfferNotificationInput,
    outputSchema: PrivateStoreAcknowledgeOfferNotificationOutput,
  }));
// Input Schema
export interface PrivateStoreAdminRequestApprovalsListInput {
  privateStoreId: string;
}
export const PrivateStoreAdminRequestApprovalsListInput =
  /*@__PURE__*/ Schema.Struct({
    privateStoreId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Marketplace/privateStores/{privateStoreId}/adminRequestApprovals",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<PrivateStoreAdminRequestApprovalsListInput>;

// Output Schema
export interface PrivateStoreAdminRequestApprovalsListOutput {
  value?: {
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
export const PrivateStoreAdminRequestApprovalsListOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
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
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PrivateStoreAdminRequestApprovalsListOutput>;

// The operation
/**
 * Get list of admin request approvals
 *
 * @param api-version - The API version to use for this operation.
 * @param privateStoreId - The store ID - must use the tenant ID
 */
export const PrivateStoreAdminRequestApprovalsList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateStoreAdminRequestApprovalsListInput,
    outputSchema: PrivateStoreAdminRequestApprovalsListOutput,
  }));
// Input Schema
export interface PrivateStoreAnyExistingOffersInTheCollectionsInput {
  privateStoreId: string;
}
export const PrivateStoreAnyExistingOffersInTheCollectionsInput =
  /*@__PURE__*/ Schema.Struct({
    privateStoreId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Marketplace/privateStores/{privateStoreId}/anyExistingOffersInTheCollections",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<PrivateStoreAnyExistingOffersInTheCollectionsInput>;

// Output Schema
export interface PrivateStoreAnyExistingOffersInTheCollectionsOutput {
  value?: boolean;
}
export const PrivateStoreAnyExistingOffersInTheCollectionsOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.Boolean),
  }) as unknown as Schema.Codec<PrivateStoreAnyExistingOffersInTheCollectionsOutput>;

// The operation
/**
 * Query whether exists any offer in the collections.
 *
 * @param api-version - The API version to use for this operation.
 * @param privateStoreId - The store ID - must use the tenant ID
 */
export const PrivateStoreAnyExistingOffersInTheCollections =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateStoreAnyExistingOffersInTheCollectionsInput,
    outputSchema: PrivateStoreAnyExistingOffersInTheCollectionsOutput,
  }));
// Input Schema
export interface PrivateStoreBillingAccountsInput {
  privateStoreId: string;
}
export const PrivateStoreBillingAccountsInput =
  /*@__PURE__*/ Schema.Struct({
    privateStoreId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Marketplace/privateStores/{privateStoreId}/billingAccounts",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<PrivateStoreBillingAccountsInput>;

// Output Schema
export interface PrivateStoreBillingAccountsOutput {
  billingAccounts?: string[];
}
export const PrivateStoreBillingAccountsOutput =
  /*@__PURE__*/ Schema.Struct({
    billingAccounts: Schema.optional(Schema.Array(Schema.String)),
  }) as unknown as Schema.Codec<PrivateStoreBillingAccountsOutput>;

// The operation
/**
 * Tenant billing accounts names
 *
 * @param api-version - The API version to use for this operation.
 * @param privateStoreId - The store ID - must use the tenant ID
 */
export const PrivateStoreBillingAccounts = /*@__PURE__*/ API.make(() => ({
  inputSchema: PrivateStoreBillingAccountsInput,
  outputSchema: PrivateStoreBillingAccountsOutput,
}));
// Input Schema
export interface PrivateStoreBulkCollectionsActionInput {
  privateStoreId: string;
  properties?: { collectionIds?: string[]; action?: string };
}
export const PrivateStoreBulkCollectionsActionInput =
  /*@__PURE__*/ Schema.Struct({
    privateStoreId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        collectionIds: Schema.optional(Schema.Array(Schema.String)),
        action: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Marketplace/privateStores/{privateStoreId}/bulkCollectionsAction",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<PrivateStoreBulkCollectionsActionInput>;

// Output Schema
export interface PrivateStoreBulkCollectionsActionOutput {
  succeeded?: { collectionName?: string; collectionId?: string }[];
  failed?: { collectionName?: string; collectionId?: string }[];
}
export const PrivateStoreBulkCollectionsActionOutput =
  /*@__PURE__*/ Schema.Struct({
    succeeded: Schema.optional(
      Schema.Array(
        Schema.Struct({
          collectionName: Schema.optional(Schema.String),
          collectionId: Schema.optional(Schema.String),
        }),
      ),
    ),
    failed: Schema.optional(
      Schema.Array(
        Schema.Struct({
          collectionName: Schema.optional(Schema.String),
          collectionId: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<PrivateStoreBulkCollectionsActionOutput>;

// The operation
/**
 * Perform an action on bulk collections
 *
 * @param api-version - The API version to use for this operation.
 * @param privateStoreId - The store ID - must use the tenant ID
 */
export const PrivateStoreBulkCollectionsAction =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateStoreBulkCollectionsActionInput,
    outputSchema: PrivateStoreBulkCollectionsActionOutput,
  }));
// Input Schema
export interface PrivateStoreCollectionApproveAllItemsInput {
  privateStoreId: string;
  collectionId: string;
}
export const PrivateStoreCollectionApproveAllItemsInput =
  /*@__PURE__*/ Schema.Struct({
    privateStoreId: Schema.String.pipe(T.PathParam()),
    collectionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Marketplace/privateStores/{privateStoreId}/collections/{collectionId}/approveAllItems",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<PrivateStoreCollectionApproveAllItemsInput>;

// Output Schema
export interface PrivateStoreCollectionApproveAllItemsOutput {
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
export const PrivateStoreCollectionApproveAllItemsOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<PrivateStoreCollectionApproveAllItemsOutput>;

// The operation
/**
 * Delete all existing offers from the collection and enable approve all items.
 *
 * @param api-version - The API version to use for this operation.
 * @param privateStoreId - The store ID - must use the tenant ID
 * @param collectionId - The collection ID
 */
export const PrivateStoreCollectionApproveAllItems =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateStoreCollectionApproveAllItemsInput,
    outputSchema: PrivateStoreCollectionApproveAllItemsOutput,
  }));
// Input Schema
export interface PrivateStoreCollectionCreateOrUpdateInput {
  privateStoreId: string;
  collectionId: string;
  properties?: {
    collectionId?: string;
    collectionName?: string;
    claim?: string;
    allSubscriptions?: boolean;
    approveAllItems?: boolean;
    approveAllItemsModifiedAt?: string;
    subscriptionsList?: string[];
    enabled?: boolean;
    numberOfOffers?: number;
    appliedRules?: {
      type?: "PrivateProducts" | "TermsAndCondition";
      value?: string[];
    }[];
  };
}
export const PrivateStoreCollectionCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    privateStoreId: Schema.String.pipe(T.PathParam()),
    collectionId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        collectionId: Schema.optional(Schema.String),
        collectionName: Schema.optional(Schema.String),
        claim: Schema.optional(Schema.String),
        allSubscriptions: Schema.optional(Schema.Boolean),
        approveAllItems: Schema.optional(Schema.Boolean),
        approveAllItemsModifiedAt: Schema.optional(Schema.String),
        subscriptionsList: Schema.optional(Schema.Array(Schema.String)),
        enabled: Schema.optional(Schema.Boolean),
        numberOfOffers: Schema.optional(Schema.Number),
        appliedRules: Schema.optional(
          Schema.Array(
            Schema.Struct({
              type: Schema.optional(
                Schema.Literals(["PrivateProducts", "TermsAndCondition"]),
              ),
              value: Schema.optional(Schema.Array(Schema.String)),
            }),
          ),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/providers/Microsoft.Marketplace/privateStores/{privateStoreId}/collections/{collectionId}",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<PrivateStoreCollectionCreateOrUpdateInput>;

// Output Schema
export interface PrivateStoreCollectionCreateOrUpdateOutput {
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
export const PrivateStoreCollectionCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<PrivateStoreCollectionCreateOrUpdateOutput>;

// The operation
/**
 * Create or update private store collection
 *
 * @param api-version - The API version to use for this operation.
 * @param privateStoreId - The store ID - must use the tenant ID
 * @param collectionId - The collection ID
 */
export const PrivateStoreCollectionCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateStoreCollectionCreateOrUpdateInput,
    outputSchema: PrivateStoreCollectionCreateOrUpdateOutput,
  }));
// Input Schema
export interface PrivateStoreCollectionDeleteInput {
  privateStoreId: string;
  collectionId: string;
}
export const PrivateStoreCollectionDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    privateStoreId: Schema.String.pipe(T.PathParam()),
    collectionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/providers/Microsoft.Marketplace/privateStores/{privateStoreId}/collections/{collectionId}",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<PrivateStoreCollectionDeleteInput>;

// Output Schema
export type PrivateStoreCollectionDeleteOutput = void;
export const PrivateStoreCollectionDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<PrivateStoreCollectionDeleteOutput>;

// The operation
/**
 * Delete a collection from the given private store.
 *
 * @param api-version - The API version to use for this operation.
 * @param privateStoreId - The store ID - must use the tenant ID
 * @param collectionId - The collection ID
 */
export const PrivateStoreCollectionDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateStoreCollectionDeleteInput,
    outputSchema: PrivateStoreCollectionDeleteOutput,
  }));
// Input Schema
export interface PrivateStoreCollectionDisableApproveAllItemsInput {
  privateStoreId: string;
  collectionId: string;
}
export const PrivateStoreCollectionDisableApproveAllItemsInput =
  /*@__PURE__*/ Schema.Struct({
    privateStoreId: Schema.String.pipe(T.PathParam()),
    collectionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Marketplace/privateStores/{privateStoreId}/collections/{collectionId}/disableApproveAllItems",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<PrivateStoreCollectionDisableApproveAllItemsInput>;

// Output Schema
export interface PrivateStoreCollectionDisableApproveAllItemsOutput {
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
export const PrivateStoreCollectionDisableApproveAllItemsOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<PrivateStoreCollectionDisableApproveAllItemsOutput>;

// The operation
/**
 * Disable approve all items for the collection.
 *
 * @param api-version - The API version to use for this operation.
 * @param privateStoreId - The store ID - must use the tenant ID
 * @param collectionId - The collection ID
 */
export const PrivateStoreCollectionDisableApproveAllItems =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateStoreCollectionDisableApproveAllItemsInput,
    outputSchema: PrivateStoreCollectionDisableApproveAllItemsOutput,
  }));
// Input Schema
export interface PrivateStoreCollectionGetInput {
  privateStoreId: string;
  collectionId: string;
}
export const PrivateStoreCollectionGetInput =
  /*@__PURE__*/ Schema.Struct({
    privateStoreId: Schema.String.pipe(T.PathParam()),
    collectionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Marketplace/privateStores/{privateStoreId}/collections/{collectionId}",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<PrivateStoreCollectionGetInput>;

// Output Schema
export interface PrivateStoreCollectionGetOutput {
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
export const PrivateStoreCollectionGetOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<PrivateStoreCollectionGetOutput>;

// The operation
/**
 * Gets private store collection
 *
 * @param api-version - The API version to use for this operation.
 * @param privateStoreId - The store ID - must use the tenant ID
 * @param collectionId - The collection ID
 */
export const PrivateStoreCollectionGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: PrivateStoreCollectionGetInput,
  outputSchema: PrivateStoreCollectionGetOutput,
}));
// Input Schema
export interface PrivateStoreCollectionListInput {
  privateStoreId: string;
}
export const PrivateStoreCollectionListInput =
  /*@__PURE__*/ Schema.Struct({
    privateStoreId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Marketplace/privateStores/{privateStoreId}/collections",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<PrivateStoreCollectionListInput>;

// Output Schema
export interface PrivateStoreCollectionListOutput {
  value?: {
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
export const PrivateStoreCollectionListOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
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
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PrivateStoreCollectionListOutput>;

// The operation
/**
 * Gets private store collections list
 *
 * @param api-version - The API version to use for this operation.
 * @param privateStoreId - The store ID - must use the tenant ID
 */
export const PrivateStoreCollectionList = /*@__PURE__*/ API.make(() => ({
  inputSchema: PrivateStoreCollectionListInput,
  outputSchema: PrivateStoreCollectionListOutput,
}));
// Input Schema
export interface PrivateStoreCollectionOfferContextsViewInput {
  privateStoreId: string;
  collectionId: string;
  offerId: string;
  properties?: { subscriptionIds?: string[] };
}
export const PrivateStoreCollectionOfferContextsViewInput =
  /*@__PURE__*/ Schema.Struct({
    privateStoreId: Schema.String.pipe(T.PathParam()),
    collectionId: Schema.String.pipe(T.PathParam()),
    offerId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        subscriptionIds: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Marketplace/privateStores/{privateStoreId}/collections/{collectionId}/offers/{offerId}/contextsView",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<PrivateStoreCollectionOfferContextsViewInput>;

// Output Schema
export interface PrivateStoreCollectionOfferContextsViewOutput {
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
export const PrivateStoreCollectionOfferContextsViewOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<PrivateStoreCollectionOfferContextsViewOutput>;

// The operation
/**
 * Retrieve offer information with plans under required contexts restrictions.
 *
 * @param api-version - The API version to use for this operation.
 * @param privateStoreId - The store ID - must use the tenant ID
 * @param collectionId - The collection ID
 * @param offerId - The offer ID to update or delete
 */
export const PrivateStoreCollectionOfferContextsView =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateStoreCollectionOfferContextsViewInput,
    outputSchema: PrivateStoreCollectionOfferContextsViewOutput,
  }));
// Input Schema
export interface PrivateStoreCollectionOfferCreateOrUpdateInput {
  privateStoreId: string;
  collectionId: string;
  offerId: string;
  properties?: {
    uniqueOfferId?: string;
    offerDisplayName?: string;
    publisherDisplayName?: string;
    eTag?: string;
    privateStoreId?: string;
    createdAt?: string;
    modifiedAt?: string;
    specificPlanIdsLimitation?: string[];
    updateSuppressedDueIdempotence?: boolean;
    iconFileUris?: Record<string, string>;
    isStopSell?: boolean;
    plans?: {
      skuId?: string;
      planId?: string;
      planDisplayName?: string;
      accessibility?:
        | "Unknown"
        | "Public"
        | "PrivateTenantOnLevel"
        | "PrivateSubscriptionOnLevel";
      altStackReference?: string;
      stackType?: string;
      isStopSell?: boolean;
    }[];
  };
}
export const PrivateStoreCollectionOfferCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    privateStoreId: Schema.String.pipe(T.PathParam()),
    collectionId: Schema.String.pipe(T.PathParam()),
    offerId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        uniqueOfferId: Schema.optional(Schema.String),
        offerDisplayName: Schema.optional(Schema.String),
        publisherDisplayName: Schema.optional(Schema.String),
        eTag: Schema.optional(Schema.String),
        privateStoreId: Schema.optional(Schema.String),
        createdAt: Schema.optional(Schema.String),
        modifiedAt: Schema.optional(Schema.String),
        specificPlanIdsLimitation: Schema.optional(Schema.Array(Schema.String)),
        updateSuppressedDueIdempotence: Schema.optional(Schema.Boolean),
        iconFileUris: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        isStopSell: Schema.optional(Schema.Boolean),
        plans: Schema.optional(
          Schema.Array(
            Schema.Struct({
              skuId: Schema.optional(Schema.String),
              planId: Schema.optional(Schema.String),
              planDisplayName: Schema.optional(Schema.String),
              accessibility: Schema.optional(
                Schema.Literals([
                  "Unknown",
                  "Public",
                  "PrivateTenantOnLevel",
                  "PrivateSubscriptionOnLevel",
                ]),
              ),
              altStackReference: Schema.optional(Schema.String),
              stackType: Schema.optional(Schema.String),
              isStopSell: Schema.optional(Schema.Boolean),
            }),
          ),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/providers/Microsoft.Marketplace/privateStores/{privateStoreId}/collections/{collectionId}/offers/{offerId}",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<PrivateStoreCollectionOfferCreateOrUpdateInput>;

// Output Schema
export interface PrivateStoreCollectionOfferCreateOrUpdateOutput {
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
export const PrivateStoreCollectionOfferCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<PrivateStoreCollectionOfferCreateOrUpdateOutput>;

// The operation
/**
 * Update or add an offer to a specific collection of the private store.
 *
 * @param api-version - The API version to use for this operation.
 * @param privateStoreId - The store ID - must use the tenant ID
 * @param collectionId - The collection ID
 * @param offerId - The offer ID to update or delete
 */
export const PrivateStoreCollectionOfferCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateStoreCollectionOfferCreateOrUpdateInput,
    outputSchema: PrivateStoreCollectionOfferCreateOrUpdateOutput,
  }));
// Input Schema
export interface PrivateStoreCollectionOfferDeleteInput {
  privateStoreId: string;
  collectionId: string;
  offerId: string;
}
export const PrivateStoreCollectionOfferDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    privateStoreId: Schema.String.pipe(T.PathParam()),
    collectionId: Schema.String.pipe(T.PathParam()),
    offerId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/providers/Microsoft.Marketplace/privateStores/{privateStoreId}/collections/{collectionId}/offers/{offerId}",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<PrivateStoreCollectionOfferDeleteInput>;

// Output Schema
export type PrivateStoreCollectionOfferDeleteOutput = void;
export const PrivateStoreCollectionOfferDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<PrivateStoreCollectionOfferDeleteOutput>;

// The operation
/**
 * Deletes an offer from the given collection of private store.
 *
 * @param api-version - The API version to use for this operation.
 * @param privateStoreId - The store ID - must use the tenant ID
 * @param collectionId - The collection ID
 * @param offerId - The offer ID to update or delete
 */
export const PrivateStoreCollectionOfferDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateStoreCollectionOfferDeleteInput,
    outputSchema: PrivateStoreCollectionOfferDeleteOutput,
  }));
// Input Schema
export interface PrivateStoreCollectionOfferGetInput {
  privateStoreId: string;
  collectionId: string;
  offerId: string;
}
export const PrivateStoreCollectionOfferGetInput =
  /*@__PURE__*/ Schema.Struct({
    privateStoreId: Schema.String.pipe(T.PathParam()),
    collectionId: Schema.String.pipe(T.PathParam()),
    offerId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Marketplace/privateStores/{privateStoreId}/collections/{collectionId}/offers/{offerId}",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<PrivateStoreCollectionOfferGetInput>;

// Output Schema
export interface PrivateStoreCollectionOfferGetOutput {
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
export const PrivateStoreCollectionOfferGetOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<PrivateStoreCollectionOfferGetOutput>;

// The operation
/**
 * Gets information about a specific offer.
 *
 * @param api-version - The API version to use for this operation.
 * @param privateStoreId - The store ID - must use the tenant ID
 * @param collectionId - The collection ID
 * @param offerId - The offer ID to update or delete
 */
export const PrivateStoreCollectionOfferGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateStoreCollectionOfferGetInput,
    outputSchema: PrivateStoreCollectionOfferGetOutput,
  }));
// Input Schema
export interface PrivateStoreCollectionOfferListInput {
  privateStoreId: string;
  collectionId: string;
}
export const PrivateStoreCollectionOfferListInput =
  /*@__PURE__*/ Schema.Struct({
    privateStoreId: Schema.String.pipe(T.PathParam()),
    collectionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Marketplace/privateStores/{privateStoreId}/collections/{collectionId}/offers",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<PrivateStoreCollectionOfferListInput>;

// Output Schema
export interface PrivateStoreCollectionOfferListOutput {
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
export const PrivateStoreCollectionOfferListOutput =
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
  }) as unknown as Schema.Codec<PrivateStoreCollectionOfferListOutput>;

// The operation
/**
 * Get a list of all private offers in the given private store and collection
 *
 * @param api-version - The API version to use for this operation.
 * @param privateStoreId - The store ID - must use the tenant ID
 * @param collectionId - The collection ID
 */
export const PrivateStoreCollectionOfferList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateStoreCollectionOfferListInput,
    outputSchema: PrivateStoreCollectionOfferListOutput,
  }));
// Input Schema
export interface PrivateStoreCollectionOfferListByContextsInput {
  privateStoreId: string;
  collectionId: string;
  properties?: { subscriptionIds?: string[] };
}
export const PrivateStoreCollectionOfferListByContextsInput =
  /*@__PURE__*/ Schema.Struct({
    privateStoreId: Schema.String.pipe(T.PathParam()),
    collectionId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        subscriptionIds: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Marketplace/privateStores/{privateStoreId}/collections/{collectionId}/mapOffersToContexts",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<PrivateStoreCollectionOfferListByContextsInput>;

// Output Schema
export interface PrivateStoreCollectionOfferListByContextsOutput {
  value?: {
    context?: string;
    offers?: {
      value?: {
        uniqueOfferId?: string;
        offerDisplayName?: string;
        publisherDisplayName?: string;
        eTag?: string;
        privateStoreId?: string;
        createdAt?: string;
        modifiedAt?: string;
        specificPlanIdsLimitation?: string[];
        updateSuppressedDueIdempotence?: boolean;
        iconFileUris?: Record<string, string>;
        isStopSell?: boolean;
        plans?: {
          skuId?: string;
          planId?: string;
          planDisplayName?: string;
          accessibility?:
            | "Unknown"
            | "Public"
            | "PrivateTenantOnLevel"
            | "PrivateSubscriptionOnLevel";
          altStackReference?: string;
          stackType?: string;
          isStopSell?: boolean;
        }[];
      }[];
    };
  }[];
  nextLink?: string;
}
export const PrivateStoreCollectionOfferListByContextsOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          context: Schema.optional(Schema.String),
          offers: Schema.optional(
            Schema.Struct({
              value: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    uniqueOfferId: Schema.optional(Schema.String),
                    offerDisplayName: Schema.optional(Schema.String),
                    publisherDisplayName: Schema.optional(Schema.String),
                    eTag: Schema.optional(Schema.String),
                    privateStoreId: Schema.optional(Schema.String),
                    createdAt: Schema.optional(Schema.String),
                    modifiedAt: Schema.optional(Schema.String),
                    specificPlanIdsLimitation: Schema.optional(
                      Schema.Array(Schema.String),
                    ),
                    updateSuppressedDueIdempotence: Schema.optional(
                      Schema.Boolean,
                    ),
                    iconFileUris: Schema.optional(
                      Schema.Record(Schema.String, Schema.String),
                    ),
                    isStopSell: Schema.optional(Schema.Boolean),
                    plans: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          skuId: Schema.optional(Schema.String),
                          planId: Schema.optional(Schema.String),
                          planDisplayName: Schema.optional(Schema.String),
                          accessibility: Schema.optional(
                            Schema.Literals([
                              "Unknown",
                              "Public",
                              "PrivateTenantOnLevel",
                              "PrivateSubscriptionOnLevel",
                            ]),
                          ),
                          altStackReference: Schema.optional(Schema.String),
                          stackType: Schema.optional(Schema.String),
                          isStopSell: Schema.optional(Schema.Boolean),
                        }),
                      ),
                    ),
                  }),
                ),
              ),
            }),
          ),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PrivateStoreCollectionOfferListByContextsOutput>;

// The operation
/**
 * Get a list of all offers in the given collection according to the required contexts.
 *
 * @param api-version - The API version to use for this operation.
 * @param privateStoreId - The store ID - must use the tenant ID
 * @param collectionId - The collection ID
 */
export const PrivateStoreCollectionOfferListByContexts =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateStoreCollectionOfferListByContextsInput,
    outputSchema: PrivateStoreCollectionOfferListByContextsOutput,
  }));
// Input Schema
export interface PrivateStoreCollectionOfferPostInput {
  privateStoreId: string;
  collectionId: string;
  offerId: string;
}
export const PrivateStoreCollectionOfferPostInput =
  /*@__PURE__*/ Schema.Struct({
    privateStoreId: Schema.String.pipe(T.PathParam()),
    collectionId: Schema.String.pipe(T.PathParam()),
    offerId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Marketplace/privateStores/{privateStoreId}/collections/{collectionId}/offers/{offerId}",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<PrivateStoreCollectionOfferPostInput>;

// Output Schema
export type PrivateStoreCollectionOfferPostOutput = void;
export const PrivateStoreCollectionOfferPostOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<PrivateStoreCollectionOfferPostOutput>;

// The operation
/**
 * Delete Private store offer. This is a workaround.
 *
 * @param api-version - The API version to use for this operation.
 * @param privateStoreId - The store ID - must use the tenant ID
 * @param collectionId - The collection ID
 * @param offerId - The offer ID to update or delete
 */
export const PrivateStoreCollectionOfferPost =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateStoreCollectionOfferPostInput,
    outputSchema: PrivateStoreCollectionOfferPostOutput,
  }));
// Input Schema
export interface PrivateStoreCollectionOfferUpsertOfferWithMultiContextInput {
  privateStoreId: string;
  collectionId: string;
  offerId: string;
  properties?: {
    offerId?: string;
    eTag?: string;
    plansContext?: { context?: string; planIds?: string[] }[];
  };
}
export const PrivateStoreCollectionOfferUpsertOfferWithMultiContextInput =
  /*@__PURE__*/ Schema.Struct({
    privateStoreId: Schema.String.pipe(T.PathParam()),
    collectionId: Schema.String.pipe(T.PathParam()),
    offerId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        offerId: Schema.optional(Schema.String),
        eTag: Schema.optional(Schema.String),
        plansContext: Schema.optional(
          Schema.Array(
            Schema.Struct({
              context: Schema.optional(Schema.String),
              planIds: Schema.optional(Schema.Array(Schema.String)),
            }),
          ),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Marketplace/privateStores/{privateStoreId}/collections/{collectionId}/offers/{offerId}/upsertOfferWithMultiContext",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<PrivateStoreCollectionOfferUpsertOfferWithMultiContextInput>;

// Output Schema
export interface PrivateStoreCollectionOfferUpsertOfferWithMultiContextOutput {
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
export const PrivateStoreCollectionOfferUpsertOfferWithMultiContextOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<PrivateStoreCollectionOfferUpsertOfferWithMultiContextOutput>;

// The operation
/**
 * Upsert an offer with multiple context details.
 *
 * @param api-version - The API version to use for this operation.
 * @param privateStoreId - The store ID - must use the tenant ID
 * @param collectionId - The collection ID
 * @param offerId - The offer ID to update or delete
 */
export const PrivateStoreCollectionOfferUpsertOfferWithMultiContext =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateStoreCollectionOfferUpsertOfferWithMultiContextInput,
    outputSchema: PrivateStoreCollectionOfferUpsertOfferWithMultiContextOutput,
  }));
// Input Schema
export interface PrivateStoreCollectionPostInput {
  privateStoreId: string;
  collectionId: string;
}
export const PrivateStoreCollectionPostInput =
  /*@__PURE__*/ Schema.Struct({
    privateStoreId: Schema.String.pipe(T.PathParam()),
    collectionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Marketplace/privateStores/{privateStoreId}/collections/{collectionId}",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<PrivateStoreCollectionPostInput>;

// Output Schema
export type PrivateStoreCollectionPostOutput = void;
export const PrivateStoreCollectionPostOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<PrivateStoreCollectionPostOutput>;

// The operation
/**
 * Delete Private store collection. This is a workaround.
 *
 * @param api-version - The API version to use for this operation.
 * @param privateStoreId - The store ID - must use the tenant ID
 * @param collectionId - The collection ID
 */
export const PrivateStoreCollectionPost = /*@__PURE__*/ API.make(() => ({
  inputSchema: PrivateStoreCollectionPostInput,
  outputSchema: PrivateStoreCollectionPostOutput,
}));
// Input Schema
export interface PrivateStoreCollectionsToSubscriptionsMappingInput {
  privateStoreId: string;
  properties?: { subscriptionIds?: string[] };
}
export const PrivateStoreCollectionsToSubscriptionsMappingInput =
  /*@__PURE__*/ Schema.Struct({
    privateStoreId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        subscriptionIds: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Marketplace/privateStores/{privateStoreId}/collectionsToSubscriptionsMapping",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<PrivateStoreCollectionsToSubscriptionsMappingInput>;

// Output Schema
export interface PrivateStoreCollectionsToSubscriptionsMappingOutput {
  details?: Record<
    string,
    { collectionName?: string; subscriptions?: string[] }
  >;
}
export const PrivateStoreCollectionsToSubscriptionsMappingOutput =
  /*@__PURE__*/ Schema.Struct({
    details: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.Struct({
          collectionName: Schema.optional(Schema.String),
          subscriptions: Schema.optional(Schema.Array(Schema.String)),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<PrivateStoreCollectionsToSubscriptionsMappingOutput>;

// The operation
/**
 * For a given subscriptions list, the API will return a map of collections and the related subscriptions from the supplied list.
 *
 * @param api-version - The API version to use for this operation.
 * @param privateStoreId - The store ID - must use the tenant ID
 */
export const PrivateStoreCollectionsToSubscriptionsMapping =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateStoreCollectionsToSubscriptionsMappingInput,
    outputSchema: PrivateStoreCollectionsToSubscriptionsMappingOutput,
  }));
// Input Schema
export interface PrivateStoreCollectionTransferOffersInput {
  privateStoreId: string;
  collectionId: string;
  properties?: {
    targetCollections?: string[];
    operation?: string;
    offerIdsList?: string[];
  };
}
export const PrivateStoreCollectionTransferOffersInput =
  /*@__PURE__*/ Schema.Struct({
    privateStoreId: Schema.String.pipe(T.PathParam()),
    collectionId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        targetCollections: Schema.optional(Schema.Array(Schema.String)),
        operation: Schema.optional(Schema.String),
        offerIdsList: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Marketplace/privateStores/{privateStoreId}/collections/{collectionId}/transferOffers",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<PrivateStoreCollectionTransferOffersInput>;

// Output Schema
export interface PrivateStoreCollectionTransferOffersOutput {
  succeeded?: { collectionName?: string; collectionId?: string }[];
  failed?: { collectionName?: string; collectionId?: string }[];
}
export const PrivateStoreCollectionTransferOffersOutput =
  /*@__PURE__*/ Schema.Struct({
    succeeded: Schema.optional(
      Schema.Array(
        Schema.Struct({
          collectionName: Schema.optional(Schema.String),
          collectionId: Schema.optional(Schema.String),
        }),
      ),
    ),
    failed: Schema.optional(
      Schema.Array(
        Schema.Struct({
          collectionName: Schema.optional(Schema.String),
          collectionId: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<PrivateStoreCollectionTransferOffersOutput>;

// The operation
/**
 * transferring offers (copy or move) from source collection to target collection(s)
 *
 * @param api-version - The API version to use for this operation.
 * @param privateStoreId - The store ID - must use the tenant ID
 * @param collectionId - The collection ID
 */
export const PrivateStoreCollectionTransferOffers =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateStoreCollectionTransferOffersInput,
    outputSchema: PrivateStoreCollectionTransferOffersOutput,
  }));
// Input Schema
export interface PrivateStoreCreateApprovalRequestInput {
  privateStoreId: string;
  requestApprovalId: string;
  properties?: {
    offerId?: string;
    offerDisplayName?: string;
    publisherId?: string;
    plansDetails?: {
      planId?: string;
      status?: "Pending" | "Rejected" | "Approved" | "None";
      requestDate?: unknown;
      justification?: string;
      subscriptionId?: string;
      subscriptionName?: string;
    }[];
    isClosed?: boolean;
    messageCode?: number;
  };
}
export const PrivateStoreCreateApprovalRequestInput =
  /*@__PURE__*/ Schema.Struct({
    privateStoreId: Schema.String.pipe(T.PathParam()),
    requestApprovalId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        offerId: Schema.optional(Schema.String),
        offerDisplayName: Schema.optional(Schema.String),
        publisherId: Schema.optional(Schema.String),
        plansDetails: Schema.optional(
          Schema.Array(
            Schema.Struct({
              planId: Schema.optional(Schema.String),
              status: Schema.optional(
                Schema.Literals(["Pending", "Rejected", "Approved", "None"]),
              ),
              requestDate: Schema.optional(Schema.Unknown),
              justification: Schema.optional(Schema.String),
              subscriptionId: Schema.optional(Schema.String),
              subscriptionName: Schema.optional(Schema.String),
            }),
          ),
        ),
        isClosed: Schema.optional(Schema.Boolean),
        messageCode: Schema.optional(Schema.Number),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/providers/Microsoft.Marketplace/privateStores/{privateStoreId}/requestApprovals/{requestApprovalId}",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<PrivateStoreCreateApprovalRequestInput>;

// Output Schema
export interface PrivateStoreCreateApprovalRequestOutput {
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
export const PrivateStoreCreateApprovalRequestOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<PrivateStoreCreateApprovalRequestOutput>;

// The operation
/**
 * Create approval request
 *
 * @param api-version - The API version to use for this operation.
 * @param privateStoreId - The store ID - must use the tenant ID
 * @param requestApprovalId - The request approval ID to get create or update
 */
export const PrivateStoreCreateApprovalRequest =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateStoreCreateApprovalRequestInput,
    outputSchema: PrivateStoreCreateApprovalRequestOutput,
  }));
// Input Schema
export interface PrivateStoreCreateOrUpdateInput {
  privateStoreId: string;
  properties?: {
    availability?: "enabled" | "disabled";
    privateStoreId?: string;
    eTag?: string;
    privateStoreName?: string;
    tenantId?: string;
    isGov?: boolean;
    collectionIds?: string[];
    branding?: Record<string, string>;
    notificationsSettings?: {
      recipients?: {
        principalId?: string;
        emailAddress?: string;
        displayName?: string;
      }[];
      sendToAllMarketplaceAdmins?: boolean;
    };
  };
}
export const PrivateStoreCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    privateStoreId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        availability: Schema.optional(Schema.Literals(["enabled", "disabled"])),
        privateStoreId: Schema.optional(Schema.String),
        eTag: Schema.optional(Schema.String),
        privateStoreName: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        isGov: Schema.optional(Schema.Boolean),
        collectionIds: Schema.optional(Schema.Array(Schema.String)),
        branding: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        notificationsSettings: Schema.optional(
          Schema.Struct({
            recipients: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  principalId: Schema.optional(Schema.String),
                  emailAddress: Schema.optional(Schema.String),
                  displayName: Schema.optional(Schema.String),
                }),
              ),
            ),
            sendToAllMarketplaceAdmins: Schema.optional(Schema.Boolean),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/providers/Microsoft.Marketplace/privateStores/{privateStoreId}",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<PrivateStoreCreateOrUpdateInput>;

// Output Schema
export type PrivateStoreCreateOrUpdateOutput = void;
export const PrivateStoreCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<PrivateStoreCreateOrUpdateOutput>;

// The operation
/**
 * Changes private store properties
 *
 * @param api-version - The API version to use for this operation.
 * @param privateStoreId - The store ID - must use the tenant ID
 */
export const PrivateStoreCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: PrivateStoreCreateOrUpdateInput,
  outputSchema: PrivateStoreCreateOrUpdateOutput,
}));
// Input Schema
export interface PrivateStoreDeleteInput {
  privateStoreId: string;
}
export const PrivateStoreDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    privateStoreId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/providers/Microsoft.Marketplace/privateStores/{privateStoreId}",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<PrivateStoreDeleteInput>;

// Output Schema
export type PrivateStoreDeleteOutput = void;
export const PrivateStoreDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<PrivateStoreDeleteOutput>;

// The operation
/**
 * Deletes the private store. All that is not saved will be lost.
 *
 * @param api-version - The API version to use for this operation.
 * @param privateStoreId - The store ID - must use the tenant ID
 */
export const PrivateStoreDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: PrivateStoreDeleteInput,
  outputSchema: PrivateStoreDeleteOutput,
}));
// Input Schema
export interface PrivateStoreFetchAllSubscriptionsInTenantInput {
  privateStoreId: string;
}
export const PrivateStoreFetchAllSubscriptionsInTenantInput =
  /*@__PURE__*/ Schema.Struct({
    privateStoreId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Marketplace/privateStores/{privateStoreId}/fetchAllSubscriptionsInTenant",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<PrivateStoreFetchAllSubscriptionsInTenantInput>;

// Output Schema
export interface PrivateStoreFetchAllSubscriptionsInTenantOutput {
  value?: {
    id?: string;
    subscriptionId?: string;
    displayName?: string;
    state?: "Enabled" | "Warned" | "PastDue" | "Disabled" | "Deleted";
  }[];
  skipToken?: string;
  count?: number;
}
export const PrivateStoreFetchAllSubscriptionsInTenantOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          subscriptionId: Schema.optional(Schema.String),
          displayName: Schema.optional(Schema.String),
          state: Schema.optional(
            Schema.Literals([
              "Enabled",
              "Warned",
              "PastDue",
              "Disabled",
              "Deleted",
            ]),
          ),
        }),
      ),
    ),
    skipToken: Schema.optional(Schema.String),
    count: Schema.optional(Schema.Number),
  }) as unknown as Schema.Codec<PrivateStoreFetchAllSubscriptionsInTenantOutput>;

// The operation
/**
 * Fetch all subscriptions in tenant, only for marketplace admin
 *
 * @param api-version - The API version to use for this operation.
 * @param privateStoreId - The store ID - must use the tenant ID
 * @param next-page-token - The skip token to get the next page.
 */
export const PrivateStoreFetchAllSubscriptionsInTenant =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateStoreFetchAllSubscriptionsInTenantInput,
    outputSchema: PrivateStoreFetchAllSubscriptionsInTenantOutput,
  }));
// Input Schema
export interface PrivateStoreGetInput {
  privateStoreId: string;
}
export const PrivateStoreGetInput = /*@__PURE__*/ Schema.Struct({
  privateStoreId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Marketplace/privateStores/{privateStoreId}",
    apiVersion: "2025-01-01",
  }),
) as unknown as Schema.Codec<PrivateStoreGetInput>;

// Output Schema
export interface PrivateStoreGetOutput {
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
export const PrivateStoreGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<PrivateStoreGetOutput>;

// The operation
/**
 * Get information about the private store
 *
 * @param api-version - The API version to use for this operation.
 * @param privateStoreId - The store ID - must use the tenant ID
 */
export const PrivateStoreGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: PrivateStoreGetInput,
  outputSchema: PrivateStoreGetOutput,
}));
// Input Schema
export interface PrivateStoreGetAdminRequestApprovalInput {
  privateStoreId: string;
  adminRequestApprovalId: string;
  publisherId: string;
}
export const PrivateStoreGetAdminRequestApprovalInput =
  /*@__PURE__*/ Schema.Struct({
    privateStoreId: Schema.String.pipe(T.PathParam()),
    adminRequestApprovalId: Schema.String.pipe(T.PathParam()),
    publisherId: Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Marketplace/privateStores/{privateStoreId}/adminRequestApprovals/{adminRequestApprovalId}",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<PrivateStoreGetAdminRequestApprovalInput>;

// Output Schema
export interface PrivateStoreGetAdminRequestApprovalOutput {
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
export const PrivateStoreGetAdminRequestApprovalOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<PrivateStoreGetAdminRequestApprovalOutput>;

// The operation
/**
 * Get open approval requests
 *
 * @param api-version - The API version to use for this operation.
 * @param privateStoreId - The store ID - must use the tenant ID
 * @param adminRequestApprovalId - The admin request approval ID to get create or update
 * @param publisherId - The publisher id of this offer.
 */
export const PrivateStoreGetAdminRequestApproval =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateStoreGetAdminRequestApprovalInput,
    outputSchema: PrivateStoreGetAdminRequestApprovalOutput,
  }));
// Input Schema
export interface PrivateStoreGetApprovalRequestsListInput {
  privateStoreId: string;
}
export const PrivateStoreGetApprovalRequestsListInput =
  /*@__PURE__*/ Schema.Struct({
    privateStoreId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Marketplace/privateStores/{privateStoreId}/requestApprovals",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<PrivateStoreGetApprovalRequestsListInput>;

// Output Schema
export interface PrivateStoreGetApprovalRequestsListOutput {
  value?: {
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
export const PrivateStoreGetApprovalRequestsListOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
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
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PrivateStoreGetApprovalRequestsListOutput>;

// The operation
/**
 * Get all open approval requests of current user
 *
 * @param api-version - The API version to use for this operation.
 * @param privateStoreId - The store ID - must use the tenant ID
 */
export const PrivateStoreGetApprovalRequestsList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateStoreGetApprovalRequestsListInput,
    outputSchema: PrivateStoreGetApprovalRequestsListOutput,
  }));
// Input Schema
export interface PrivateStoreGetRequestApprovalInput {
  privateStoreId: string;
  requestApprovalId: string;
}
export const PrivateStoreGetRequestApprovalInput =
  /*@__PURE__*/ Schema.Struct({
    privateStoreId: Schema.String.pipe(T.PathParam()),
    requestApprovalId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Marketplace/privateStores/{privateStoreId}/requestApprovals/{requestApprovalId}",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<PrivateStoreGetRequestApprovalInput>;

// Output Schema
export interface PrivateStoreGetRequestApprovalOutput {
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
export const PrivateStoreGetRequestApprovalOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<PrivateStoreGetRequestApprovalOutput>;

// The operation
/**
 * Get open request approval details
 *
 * @param api-version - The API version to use for this operation.
 * @param privateStoreId - The store ID - must use the tenant ID
 * @param requestApprovalId - The request approval ID to get create or update
 */
export const PrivateStoreGetRequestApproval =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateStoreGetRequestApprovalInput,
    outputSchema: PrivateStoreGetRequestApprovalOutput,
  }));
// Input Schema
export interface PrivateStoreListInput {
  "use-cache"?: string;
}
export const PrivateStoreListInput = /*@__PURE__*/ Schema.Struct({
  "use-cache": Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Marketplace/privateStores",
    apiVersion: "2025-01-01",
  }),
) as unknown as Schema.Codec<PrivateStoreListInput>;

// Output Schema
export interface PrivateStoreListOutput {
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
export const PrivateStoreListOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<PrivateStoreListOutput>;

// The operation
/**
 * Gets the list of available private stores.
 *
 * @param api-version - The API version to use for this operation.
 * @param use-cache - Determines if to use cache or DB for serving this request
 */
export const PrivateStoreList = /*@__PURE__*/ API.make(() => ({
  inputSchema: PrivateStoreListInput,
  outputSchema: PrivateStoreListOutput,
}));
// Input Schema
export interface PrivateStoreListNewPlansNotificationsInput {
  privateStoreId: string;
}
export const PrivateStoreListNewPlansNotificationsInput =
  /*@__PURE__*/ Schema.Struct({
    privateStoreId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Marketplace/privateStores/{privateStoreId}/listNewPlansNotifications",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<PrivateStoreListNewPlansNotificationsInput>;

// Output Schema
export interface PrivateStoreListNewPlansNotificationsOutput {
  newPlansNotifications?: {
    offerId?: string;
    displayName?: string;
    isFuturePlansEnabled?: boolean;
    messageCode?: number;
    icon?: string;
    plans?: { planId?: string; planDisplayName?: string }[];
  }[];
}
export const PrivateStoreListNewPlansNotificationsOutput =
  /*@__PURE__*/ Schema.Struct({
    newPlansNotifications: Schema.optional(
      Schema.Array(
        Schema.Struct({
          offerId: Schema.optional(Schema.String),
          displayName: Schema.optional(Schema.String),
          isFuturePlansEnabled: Schema.optional(Schema.Boolean),
          messageCode: Schema.optional(Schema.Number),
          icon: Schema.optional(Schema.String),
          plans: Schema.optional(
            Schema.Array(
              Schema.Struct({
                planId: Schema.optional(Schema.String),
                planDisplayName: Schema.optional(Schema.String),
              }),
            ),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<PrivateStoreListNewPlansNotificationsOutput>;

// The operation
/**
 * List new plans notifications
 *
 * @param api-version - The API version to use for this operation.
 * @param privateStoreId - The store ID - must use the tenant ID
 */
export const PrivateStoreListNewPlansNotifications =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateStoreListNewPlansNotificationsInput,
    outputSchema: PrivateStoreListNewPlansNotificationsOutput,
  }));
// Input Schema
export interface PrivateStoreListStopSellOffersPlansNotificationsInput {
  privateStoreId: string;
  subscriptions?: string[];
}
export const PrivateStoreListStopSellOffersPlansNotificationsInput =
  /*@__PURE__*/ Schema.Struct({
    privateStoreId: Schema.String.pipe(T.PathParam()),
    subscriptions: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Marketplace/privateStores/{privateStoreId}/listStopSellOffersPlansNotifications",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<PrivateStoreListStopSellOffersPlansNotificationsInput>;

// Output Schema
export interface PrivateStoreListStopSellOffersPlansNotificationsOutput {
  stopSellNotifications?: {
    offerId?: string;
    displayName?: string;
    isEntire?: boolean;
    messageCode?: number;
    icon?: string;
    plans?: { planId?: string; planDisplayName?: string }[];
    publicContext?: boolean;
    subscriptionsIds?: string[];
  }[];
}
export const PrivateStoreListStopSellOffersPlansNotificationsOutput =
  /*@__PURE__*/ Schema.Struct({
    stopSellNotifications: Schema.optional(
      Schema.Array(
        Schema.Struct({
          offerId: Schema.optional(Schema.String),
          displayName: Schema.optional(Schema.String),
          isEntire: Schema.optional(Schema.Boolean),
          messageCode: Schema.optional(Schema.Number),
          icon: Schema.optional(Schema.String),
          plans: Schema.optional(
            Schema.Array(
              Schema.Struct({
                planId: Schema.optional(Schema.String),
                planDisplayName: Schema.optional(Schema.String),
              }),
            ),
          ),
          publicContext: Schema.optional(Schema.Boolean),
          subscriptionsIds: Schema.optional(Schema.Array(Schema.String)),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<PrivateStoreListStopSellOffersPlansNotificationsOutput>;

// The operation
/**
 * List stop sell notifications for both stop sell offers and stop sell plans
 *
 * @param api-version - The API version to use for this operation.
 * @param privateStoreId - The store ID - must use the tenant ID
 */
export const PrivateStoreListStopSellOffersPlansNotifications =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateStoreListStopSellOffersPlansNotificationsInput,
    outputSchema: PrivateStoreListStopSellOffersPlansNotificationsOutput,
  }));
// Input Schema
export interface PrivateStoreListSubscriptionsContextInput {
  privateStoreId: string;
}
export const PrivateStoreListSubscriptionsContextInput =
  /*@__PURE__*/ Schema.Struct({
    privateStoreId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Marketplace/privateStores/{privateStoreId}/listSubscriptionsContext",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<PrivateStoreListSubscriptionsContextInput>;

// Output Schema
export interface PrivateStoreListSubscriptionsContextOutput {
  subscriptionsIds?: string[];
}
export const PrivateStoreListSubscriptionsContextOutput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionsIds: Schema.optional(Schema.Array(Schema.String)),
  }) as unknown as Schema.Codec<PrivateStoreListSubscriptionsContextOutput>;

// The operation
/**
 * List all the subscriptions in the private store context
 *
 * @param api-version - The API version to use for this operation.
 * @param privateStoreId - The store ID - must use the tenant ID
 */
export const PrivateStoreListSubscriptionsContext =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateStoreListSubscriptionsContextInput,
    outputSchema: PrivateStoreListSubscriptionsContextOutput,
  }));
// Input Schema
export interface PrivateStoreQueryApprovedPlansInput {
  privateStoreId: string;
  properties?: {
    offerId?: string;
    planIds?: string[];
    subscriptionIds?: string[];
  };
}
export const PrivateStoreQueryApprovedPlansInput =
  /*@__PURE__*/ Schema.Struct({
    privateStoreId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        offerId: Schema.optional(Schema.String),
        planIds: Schema.optional(Schema.Array(Schema.String)),
        subscriptionIds: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Marketplace/privateStores/{privateStoreId}/queryApprovedPlans",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<PrivateStoreQueryApprovedPlansInput>;

// Output Schema
export interface PrivateStoreQueryApprovedPlansOutput {
  details?: {
    planId?: string;
    subscriptionIds?: string[];
    allSubscriptions?: boolean;
  }[];
}
export const PrivateStoreQueryApprovedPlansOutput =
  /*@__PURE__*/ Schema.Struct({
    details: Schema.optional(
      Schema.Array(
        Schema.Struct({
          planId: Schema.optional(Schema.String),
          subscriptionIds: Schema.optional(Schema.Array(Schema.String)),
          allSubscriptions: Schema.optional(Schema.Boolean),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<PrivateStoreQueryApprovedPlansOutput>;

// The operation
/**
 * Get map of plans and related approved subscriptions.
 *
 * @param api-version - The API version to use for this operation.
 * @param privateStoreId - The store ID - must use the tenant ID
 */
export const PrivateStoreQueryApprovedPlans =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateStoreQueryApprovedPlansInput,
    outputSchema: PrivateStoreQueryApprovedPlansOutput,
  }));
// Input Schema
export interface PrivateStoreQueryNotificationsStateInput {
  privateStoreId: string;
}
export const PrivateStoreQueryNotificationsStateInput =
  /*@__PURE__*/ Schema.Struct({
    privateStoreId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Marketplace/privateStores/{privateStoreId}/queryNotificationsState",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<PrivateStoreQueryNotificationsStateInput>;

// Output Schema
export interface PrivateStoreQueryNotificationsStateOutput {
  stopSellNotifications?: {
    offerId?: string;
    displayName?: string;
    isEntire?: boolean;
    messageCode?: number;
    icon?: string;
    plans?: { planId?: string; planDisplayName?: string }[];
  }[];
  newNotifications?: {
    offerId?: string;
    displayName?: string;
    isFuturePlansEnabled?: boolean;
    messageCode?: number;
    icon?: string;
    plans?: { planId?: string; planDisplayName?: string }[];
  }[];
  approvalRequests?: {
    offerId?: string;
    displayName?: string;
    publisherId?: string;
    messageCode?: number;
    icon?: string;
    plans?: { planId?: string; planDisplayName?: string }[];
  }[];
}
export const PrivateStoreQueryNotificationsStateOutput =
  /*@__PURE__*/ Schema.Struct({
    stopSellNotifications: Schema.optional(
      Schema.Array(
        Schema.Struct({
          offerId: Schema.optional(Schema.String),
          displayName: Schema.optional(Schema.String),
          isEntire: Schema.optional(Schema.Boolean),
          messageCode: Schema.optional(Schema.Number),
          icon: Schema.optional(Schema.String),
          plans: Schema.optional(
            Schema.Array(
              Schema.Struct({
                planId: Schema.optional(Schema.String),
                planDisplayName: Schema.optional(Schema.String),
              }),
            ),
          ),
        }),
      ),
    ),
    newNotifications: Schema.optional(
      Schema.Array(
        Schema.Struct({
          offerId: Schema.optional(Schema.String),
          displayName: Schema.optional(Schema.String),
          isFuturePlansEnabled: Schema.optional(Schema.Boolean),
          messageCode: Schema.optional(Schema.Number),
          icon: Schema.optional(Schema.String),
          plans: Schema.optional(
            Schema.Array(
              Schema.Struct({
                planId: Schema.optional(Schema.String),
                planDisplayName: Schema.optional(Schema.String),
              }),
            ),
          ),
        }),
      ),
    ),
    approvalRequests: Schema.optional(
      Schema.Array(
        Schema.Struct({
          offerId: Schema.optional(Schema.String),
          displayName: Schema.optional(Schema.String),
          publisherId: Schema.optional(Schema.String),
          messageCode: Schema.optional(Schema.Number),
          icon: Schema.optional(Schema.String),
          plans: Schema.optional(
            Schema.Array(
              Schema.Struct({
                planId: Schema.optional(Schema.String),
                planDisplayName: Schema.optional(Schema.String),
              }),
            ),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<PrivateStoreQueryNotificationsStateOutput>;

// The operation
/**
 * Get private store notifications state
 *
 * @param api-version - The API version to use for this operation.
 * @param privateStoreId - The store ID - must use the tenant ID
 */
export const PrivateStoreQueryNotificationsState =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateStoreQueryNotificationsStateInput,
    outputSchema: PrivateStoreQueryNotificationsStateOutput,
  }));
// Input Schema
export interface PrivateStoreQueryOffersInput {
  privateStoreId: string;
}
export const PrivateStoreQueryOffersInput =
  /*@__PURE__*/ Schema.Struct({
    privateStoreId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Marketplace/privateStores/{privateStoreId}/queryOffers",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<PrivateStoreQueryOffersInput>;

// Output Schema
export interface PrivateStoreQueryOffersOutput {
  value?: {
    uniqueOfferId?: string;
    offerDisplayName?: string;
    publisherDisplayName?: string;
    eTag?: string;
    privateStoreId?: string;
    createdAt?: string;
    modifiedAt?: string;
    specificPlanIdsLimitation?: string[];
    updateSuppressedDueIdempotence?: boolean;
    iconFileUris?: Record<string, string>;
    isStopSell?: boolean;
    plans?: {
      skuId?: string;
      planId?: string;
      planDisplayName?: string;
      accessibility?:
        | "Unknown"
        | "Public"
        | "PrivateTenantOnLevel"
        | "PrivateSubscriptionOnLevel";
      altStackReference?: string;
      stackType?: string;
      isStopSell?: boolean;
    }[];
  }[];
  nextLink?: string;
}
export const PrivateStoreQueryOffersOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          uniqueOfferId: Schema.optional(Schema.String),
          offerDisplayName: Schema.optional(Schema.String),
          publisherDisplayName: Schema.optional(Schema.String),
          eTag: Schema.optional(Schema.String),
          privateStoreId: Schema.optional(Schema.String),
          createdAt: Schema.optional(Schema.String),
          modifiedAt: Schema.optional(Schema.String),
          specificPlanIdsLimitation: Schema.optional(
            Schema.Array(Schema.String),
          ),
          updateSuppressedDueIdempotence: Schema.optional(Schema.Boolean),
          iconFileUris: Schema.optional(
            Schema.Record(Schema.String, Schema.String),
          ),
          isStopSell: Schema.optional(Schema.Boolean),
          plans: Schema.optional(
            Schema.Array(
              Schema.Struct({
                skuId: Schema.optional(Schema.String),
                planId: Schema.optional(Schema.String),
                planDisplayName: Schema.optional(Schema.String),
                accessibility: Schema.optional(
                  Schema.Literals([
                    "Unknown",
                    "Public",
                    "PrivateTenantOnLevel",
                    "PrivateSubscriptionOnLevel",
                  ]),
                ),
                altStackReference: Schema.optional(Schema.String),
                stackType: Schema.optional(Schema.String),
                isStopSell: Schema.optional(Schema.Boolean),
              }),
            ),
          ),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PrivateStoreQueryOffersOutput>;

// The operation
/**
 * List of offers, regardless the collections
 *
 * @param api-version - The API version to use for this operation.
 * @param privateStoreId - The store ID - must use the tenant ID
 */
export const PrivateStoreQueryOffers = /*@__PURE__*/ API.make(() => ({
  inputSchema: PrivateStoreQueryOffersInput,
  outputSchema: PrivateStoreQueryOffersOutput,
}));
// Input Schema
export interface PrivateStoreQueryRequestApprovalInput {
  privateStoreId: string;
  requestApprovalId: string;
  properties?: {
    publisherId?: string;
    planIds?: string[];
    subscriptionId?: string;
  };
}
export const PrivateStoreQueryRequestApprovalInput =
  /*@__PURE__*/ Schema.Struct({
    privateStoreId: Schema.String.pipe(T.PathParam()),
    requestApprovalId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        publisherId: Schema.optional(Schema.String),
        planIds: Schema.optional(Schema.Array(Schema.String)),
        subscriptionId: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Marketplace/privateStores/{privateStoreId}/requestApprovals/{requestApprovalId}/query",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<PrivateStoreQueryRequestApprovalInput>;

// Output Schema
export interface PrivateStoreQueryRequestApprovalOutput {
  uniqueOfferId?: string;
  plansDetails?: Record<
    string,
    {
      planId?: string;
      status?: "Pending" | "Rejected" | "Approved" | "None";
      requestDate?: unknown;
      justification?: string;
      subscriptionId?: string;
      subscriptionName?: string;
    }
  >;
  etag?: string;
  messageCode?: number;
}
export const PrivateStoreQueryRequestApprovalOutput =
  /*@__PURE__*/ Schema.Struct({
    uniqueOfferId: Schema.optional(Schema.String),
    plansDetails: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.Struct({
          planId: Schema.optional(Schema.String),
          status: Schema.optional(
            Schema.Literals(["Pending", "Rejected", "Approved", "None"]),
          ),
          requestDate: Schema.optional(Schema.Unknown),
          justification: Schema.optional(Schema.String),
          subscriptionId: Schema.optional(Schema.String),
          subscriptionName: Schema.optional(Schema.String),
        }),
      ),
    ),
    etag: Schema.optional(Schema.String),
    messageCode: Schema.optional(Schema.Number),
  }) as unknown as Schema.Codec<PrivateStoreQueryRequestApprovalOutput>;

// The operation
/**
 * Get request statuses foreach plan, this api is used as a complex GET action.
 *
 * @param api-version - The API version to use for this operation.
 * @param privateStoreId - The store ID - must use the tenant ID
 * @param requestApprovalId - The request approval ID to get create or update
 */
export const PrivateStoreQueryRequestApproval =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateStoreQueryRequestApprovalInput,
    outputSchema: PrivateStoreQueryRequestApprovalOutput,
  }));
// Input Schema
export interface PrivateStoreQueryUserOffersInput {
  privateStoreId: string;
  properties?: { offerIds?: string[]; subscriptionIds?: string[] };
}
export const PrivateStoreQueryUserOffersInput =
  /*@__PURE__*/ Schema.Struct({
    privateStoreId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        offerIds: Schema.optional(Schema.Array(Schema.String)),
        subscriptionIds: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Marketplace/privateStores/{privateStoreId}/queryUserOffers",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<PrivateStoreQueryUserOffersInput>;

// Output Schema
export interface PrivateStoreQueryUserOffersOutput {
  value?: {
    uniqueOfferId?: string;
    offerDisplayName?: string;
    publisherDisplayName?: string;
    eTag?: string;
    privateStoreId?: string;
    createdAt?: string;
    modifiedAt?: string;
    specificPlanIdsLimitation?: string[];
    updateSuppressedDueIdempotence?: boolean;
    iconFileUris?: Record<string, string>;
    isStopSell?: boolean;
    plans?: {
      skuId?: string;
      planId?: string;
      planDisplayName?: string;
      accessibility?:
        | "Unknown"
        | "Public"
        | "PrivateTenantOnLevel"
        | "PrivateSubscriptionOnLevel";
      altStackReference?: string;
      stackType?: string;
      isStopSell?: boolean;
    }[];
  }[];
  nextLink?: string;
}
export const PrivateStoreQueryUserOffersOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          uniqueOfferId: Schema.optional(Schema.String),
          offerDisplayName: Schema.optional(Schema.String),
          publisherDisplayName: Schema.optional(Schema.String),
          eTag: Schema.optional(Schema.String),
          privateStoreId: Schema.optional(Schema.String),
          createdAt: Schema.optional(Schema.String),
          modifiedAt: Schema.optional(Schema.String),
          specificPlanIdsLimitation: Schema.optional(
            Schema.Array(Schema.String),
          ),
          updateSuppressedDueIdempotence: Schema.optional(Schema.Boolean),
          iconFileUris: Schema.optional(
            Schema.Record(Schema.String, Schema.String),
          ),
          isStopSell: Schema.optional(Schema.Boolean),
          plans: Schema.optional(
            Schema.Array(
              Schema.Struct({
                skuId: Schema.optional(Schema.String),
                planId: Schema.optional(Schema.String),
                planDisplayName: Schema.optional(Schema.String),
                accessibility: Schema.optional(
                  Schema.Literals([
                    "Unknown",
                    "Public",
                    "PrivateTenantOnLevel",
                    "PrivateSubscriptionOnLevel",
                  ]),
                ),
                altStackReference: Schema.optional(Schema.String),
                stackType: Schema.optional(Schema.String),
                isStopSell: Schema.optional(Schema.Boolean),
              }),
            ),
          ),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PrivateStoreQueryUserOffersOutput>;

// The operation
/**
 * List of user's approved offers for the provided offers and subscriptions
 *
 * @param api-version - The API version to use for this operation.
 * @param privateStoreId - The store ID - must use the tenant ID
 */
export const PrivateStoreQueryUserOffers = /*@__PURE__*/ API.make(() => ({
  inputSchema: PrivateStoreQueryUserOffersInput,
  outputSchema: PrivateStoreQueryUserOffersOutput,
}));
// Input Schema
export interface PrivateStoreUpdateAdminRequestApprovalInput {
  privateStoreId: string;
  adminRequestApprovalId: string;
  properties?: {
    offerId?: string;
    displayName?: string;
    publisherId?: string;
    adminAction?: "Approved" | "Rejected";
    approvedPlans?: string[];
    comment?: string;
    administrator?: string;
    plans?: {
      planId?: string;
      planDisplayName?: string;
      requesters?: {
        user?: string;
        date?: string;
        justification?: string;
        subscriptionId?: string;
        subscriptionName?: string;
      }[];
    }[];
    collectionIds?: string[];
    icon?: string;
  };
}
export const PrivateStoreUpdateAdminRequestApprovalInput =
  /*@__PURE__*/ Schema.Struct({
    privateStoreId: Schema.String.pipe(T.PathParam()),
    adminRequestApprovalId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        offerId: Schema.optional(Schema.String),
        displayName: Schema.optional(Schema.String),
        publisherId: Schema.optional(Schema.String),
        adminAction: Schema.optional(Schema.Literals(["Approved", "Rejected"])),
        approvedPlans: Schema.optional(Schema.Array(Schema.String)),
        comment: Schema.optional(Schema.String),
        administrator: Schema.optional(Schema.String),
        plans: Schema.optional(
          Schema.Array(
            Schema.Struct({
              planId: Schema.optional(Schema.String),
              planDisplayName: Schema.optional(Schema.String),
              requesters: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    user: Schema.optional(Schema.String),
                    date: Schema.optional(Schema.String),
                    justification: Schema.optional(Schema.String),
                    subscriptionId: Schema.optional(Schema.String),
                    subscriptionName: Schema.optional(Schema.String),
                  }),
                ),
              ),
            }),
          ),
        ),
        collectionIds: Schema.optional(Schema.Array(Schema.String)),
        icon: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/providers/Microsoft.Marketplace/privateStores/{privateStoreId}/adminRequestApprovals/{adminRequestApprovalId}",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<PrivateStoreUpdateAdminRequestApprovalInput>;

// Output Schema
export interface PrivateStoreUpdateAdminRequestApprovalOutput {
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
export const PrivateStoreUpdateAdminRequestApprovalOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<PrivateStoreUpdateAdminRequestApprovalOutput>;

// The operation
/**
 * Update the admin action, weather the request is approved or rejected and the approved plans
 *
 * @param api-version - The API version to use for this operation.
 * @param privateStoreId - The store ID - must use the tenant ID
 * @param adminRequestApprovalId - The admin request approval ID to get create or update
 */
export const PrivateStoreUpdateAdminRequestApproval =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateStoreUpdateAdminRequestApprovalInput,
    outputSchema: PrivateStoreUpdateAdminRequestApprovalOutput,
  }));
// Input Schema
export interface PrivateStoreWithdrawPlanInput {
  privateStoreId: string;
  requestApprovalId: string;
  properties?: { planId?: string; publisherId?: string };
}
export const PrivateStoreWithdrawPlanInput =
  /*@__PURE__*/ Schema.Struct({
    privateStoreId: Schema.String.pipe(T.PathParam()),
    requestApprovalId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        planId: Schema.optional(Schema.String),
        publisherId: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Marketplace/privateStores/{privateStoreId}/requestApprovals/{requestApprovalId}/withdrawPlan",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<PrivateStoreWithdrawPlanInput>;

// Output Schema
export type PrivateStoreWithdrawPlanOutput = void;
export const PrivateStoreWithdrawPlanOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<PrivateStoreWithdrawPlanOutput>;

// The operation
/**
 * Withdraw a user request approval on specific plan
 *
 * @param api-version - The API version to use for this operation.
 * @param privateStoreId - The store ID - must use the tenant ID
 * @param requestApprovalId - The request approval ID to get create or update
 */
export const PrivateStoreWithdrawPlan = /*@__PURE__*/ API.make(() => ({
  inputSchema: PrivateStoreWithdrawPlanInput,
  outputSchema: PrivateStoreWithdrawPlanOutput,
}));
// Input Schema
export interface QueryRulesInput {
  privateStoreId: string;
  collectionId: string;
}
export const QueryRulesInput = /*@__PURE__*/ Schema.Struct({
  privateStoreId: Schema.String.pipe(T.PathParam()),
  collectionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/providers/Microsoft.Marketplace/privateStores/{privateStoreId}/collections/{collectionId}/queryRules",
    apiVersion: "2025-01-01",
  }),
) as unknown as Schema.Codec<QueryRulesInput>;

// Output Schema
export interface QueryRulesOutput {
  value?: {
    type?: "PrivateProducts" | "TermsAndCondition";
    value?: string[];
  }[];
  nextLink?: string;
}
export const QueryRulesOutput = /*@__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        type: Schema.optional(
          Schema.Literals(["PrivateProducts", "TermsAndCondition"]),
        ),
        value: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<QueryRulesOutput>;

// The operation
/**
 * Get a list of all private store rules in the given private store and collection
 *
 * @param api-version - The API version to use for this operation.
 * @param privateStoreId - The store ID - must use the tenant ID
 * @param collectionId - The collection ID
 */
export const QueryRules = /*@__PURE__*/ API.make(() => ({
  inputSchema: QueryRulesInput,
  outputSchema: QueryRulesOutput,
}));
// Input Schema
export interface QueryUserRulesInput {
  privateStoreId: string;
  properties?: { subscriptionIds?: string[] };
}
export const QueryUserRulesInput = /*@__PURE__*/ Schema.Struct({
  privateStoreId: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      subscriptionIds: Schema.optional(Schema.Array(Schema.String)),
    }),
  ),
}).pipe(
  T.Http({
    method: "POST",
    path: "/providers/Microsoft.Marketplace/privateStores/{privateStoreId}/queryUserRules",
    apiVersion: "2025-01-01",
  }),
) as unknown as Schema.Codec<QueryUserRulesInput>;

// Output Schema
export interface QueryUserRulesOutput {
  value?: {
    type?: "PrivateProducts" | "TermsAndCondition";
    value?: string[];
  }[];
  nextLink?: string;
}
export const QueryUserRulesOutput = /*@__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        type: Schema.optional(
          Schema.Literals(["PrivateProducts", "TermsAndCondition"]),
        ),
        value: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<QueryUserRulesOutput>;

// The operation
/**
 * All rules approved in the private store that are relevant for user subscriptions
 *
 * @param api-version - The API version to use for this operation.
 * @param privateStoreId - The store ID - must use the tenant ID
 */
export const QueryUserRules = /*@__PURE__*/ API.make(() => ({
  inputSchema: QueryUserRulesInput,
  outputSchema: QueryUserRulesOutput,
}));
// Input Schema
export interface SetCollectionRulesInput {
  privateStoreId: string;
  collectionId: string;
  value?: {
    type?: "PrivateProducts" | "TermsAndCondition";
    value?: string[];
  }[];
  nextLink?: string;
}
export const SetCollectionRulesInput =
  /*@__PURE__*/ Schema.Struct({
    privateStoreId: Schema.String.pipe(T.PathParam()),
    collectionId: Schema.String.pipe(T.PathParam()),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          type: Schema.optional(
            Schema.Literals(["PrivateProducts", "TermsAndCondition"]),
          ),
          value: Schema.optional(Schema.Array(Schema.String)),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Marketplace/privateStores/{privateStoreId}/collections/{collectionId}/setRules",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<SetCollectionRulesInput>;

// Output Schema
export type SetCollectionRulesOutput = void;
export const SetCollectionRulesOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<SetCollectionRulesOutput>;

// The operation
/**
 * Set rule for specific private store and collection
 *
 * @param api-version - The API version to use for this operation.
 * @param privateStoreId - The store ID - must use the tenant ID
 * @param collectionId - The collection ID
 */
export const SetCollectionRules = /*@__PURE__*/ API.make(() => ({
  inputSchema: SetCollectionRulesInput,
  outputSchema: SetCollectionRulesOutput,
}));
