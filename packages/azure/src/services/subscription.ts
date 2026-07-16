/**
 * Azure Subscription API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface AliasCreateInput {
  aliasName: string;
  properties?: {
    displayName?: string;
    workload?: "Production" | "DevTest";
    billingScope?: string;
    subscriptionId?: string;
    resellerId?: string;
    additionalProperties?: {
      managementGroupId?: string;
      subscriptionTenantId?: string;
      subscriptionOwnerId?: string;
      tags?: Record<string, string>;
    };
  };
}
export const AliasCreateInput = /*@__PURE__*/ Schema.Struct({
  aliasName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      displayName: Schema.optional(Schema.String),
      workload: Schema.optional(Schema.Literals(["Production", "DevTest"])),
      billingScope: Schema.optional(Schema.String),
      subscriptionId: Schema.optional(Schema.String),
      resellerId: Schema.optional(Schema.String),
      additionalProperties: Schema.optional(
        Schema.Struct({
          managementGroupId: Schema.optional(Schema.String),
          subscriptionTenantId: Schema.optional(Schema.String),
          subscriptionOwnerId: Schema.optional(Schema.String),
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        }),
      ),
    }),
  ),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/providers/Microsoft.Subscription/aliases/{aliasName}",
    apiVersion: "2021-10-01",
  }),
) as unknown as Schema.Codec<AliasCreateInput>;

// Output Schema
export interface AliasCreateOutput {
  id?: string;
  name?: string;
  type?: string;
  properties?: {
    subscriptionId?: string;
    displayName?: string;
    provisioningState?: "Accepted" | "Succeeded" | "Failed";
    acceptOwnershipUrl?: string;
    acceptOwnershipState?: "Pending" | "Completed" | "Expired";
    billingScope?: string;
    workload?: "Production" | "DevTest";
    resellerId?: string;
    subscriptionOwnerId?: string;
    managementGroupId?: string;
    createdTime?: string;
    tags?: Record<string, string>;
  };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const AliasCreateOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  properties: Schema.optional(
    Schema.Struct({
      subscriptionId: Schema.optional(Schema.String),
      displayName: Schema.optional(Schema.String),
      provisioningState: Schema.optional(
        Schema.Literals(["Accepted", "Succeeded", "Failed"]),
      ),
      acceptOwnershipUrl: Schema.optional(Schema.String),
      acceptOwnershipState: Schema.optional(
        Schema.Literals(["Pending", "Completed", "Expired"]),
      ),
      billingScope: Schema.optional(Schema.String),
      workload: Schema.optional(Schema.Literals(["Production", "DevTest"])),
      resellerId: Schema.optional(Schema.String),
      subscriptionOwnerId: Schema.optional(Schema.String),
      managementGroupId: Schema.optional(Schema.String),
      createdTime: Schema.optional(Schema.String),
      tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    }),
  ),
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
}) as unknown as Schema.Codec<AliasCreateOutput>;

// The operation
/**
 * Create Alias Subscription.
 *
 * @param aliasName - AliasName is the name for the subscription creation request. Note that this is not the same as subscription name and this doesn’t have any other lifecycle need beyond the request for subscription creation.
 * @param api-version - Version of the API to be used with the client request. Current version is 2021-10-01
 */
export const AliasCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: AliasCreateInput,
  outputSchema: AliasCreateOutput,
}));
// Input Schema
export interface AliasDeleteInput {
  aliasName: string;
}
export const AliasDeleteInput = /*@__PURE__*/ Schema.Struct({
  aliasName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/providers/Microsoft.Subscription/aliases/{aliasName}",
    apiVersion: "2021-10-01",
  }),
) as unknown as Schema.Codec<AliasDeleteInput>;

// Output Schema
export type AliasDeleteOutput = void;
export const AliasDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<AliasDeleteOutput>;

// The operation
/**
 * Delete Alias.
 *
 * @param aliasName - AliasName is the name for the subscription creation request. Note that this is not the same as subscription name and this doesn’t have any other lifecycle need beyond the request for subscription creation.
 * @param api-version - Version of the API to be used with the client request. Current version is 2021-10-01
 */
export const AliasDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: AliasDeleteInput,
  outputSchema: AliasDeleteOutput,
}));
// Input Schema
export interface AliasGetInput {
  aliasName: string;
}
export const AliasGetInput = /*@__PURE__*/ Schema.Struct({
  aliasName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Subscription/aliases/{aliasName}",
    apiVersion: "2021-10-01",
  }),
) as unknown as Schema.Codec<AliasGetInput>;

// Output Schema
export interface AliasGetOutput {
  id?: string;
  name?: string;
  type?: string;
  properties?: {
    subscriptionId?: string;
    displayName?: string;
    provisioningState?: "Accepted" | "Succeeded" | "Failed";
    acceptOwnershipUrl?: string;
    acceptOwnershipState?: "Pending" | "Completed" | "Expired";
    billingScope?: string;
    workload?: "Production" | "DevTest";
    resellerId?: string;
    subscriptionOwnerId?: string;
    managementGroupId?: string;
    createdTime?: string;
    tags?: Record<string, string>;
  };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const AliasGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  properties: Schema.optional(
    Schema.Struct({
      subscriptionId: Schema.optional(Schema.String),
      displayName: Schema.optional(Schema.String),
      provisioningState: Schema.optional(
        Schema.Literals(["Accepted", "Succeeded", "Failed"]),
      ),
      acceptOwnershipUrl: Schema.optional(Schema.String),
      acceptOwnershipState: Schema.optional(
        Schema.Literals(["Pending", "Completed", "Expired"]),
      ),
      billingScope: Schema.optional(Schema.String),
      workload: Schema.optional(Schema.Literals(["Production", "DevTest"])),
      resellerId: Schema.optional(Schema.String),
      subscriptionOwnerId: Schema.optional(Schema.String),
      managementGroupId: Schema.optional(Schema.String),
      createdTime: Schema.optional(Schema.String),
      tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    }),
  ),
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
}) as unknown as Schema.Codec<AliasGetOutput>;

// The operation
/**
 * Get Alias Subscription.
 *
 * @param aliasName - AliasName is the name for the subscription creation request. Note that this is not the same as subscription name and this doesn’t have any other lifecycle need beyond the request for subscription creation.
 * @param api-version - Version of the API to be used with the client request. Current version is 2021-10-01
 */
export const AliasGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: AliasGetInput,
  outputSchema: AliasGetOutput,
}));
// Input Schema
export interface AliasListInput {}
export const AliasListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Subscription/aliases",
    apiVersion: "2021-10-01",
  }),
) as unknown as Schema.Codec<AliasListInput>;

// Output Schema
export interface AliasListOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    properties?: {
      subscriptionId?: string;
      displayName?: string;
      provisioningState?: "Accepted" | "Succeeded" | "Failed";
      acceptOwnershipUrl?: string;
      acceptOwnershipState?: "Pending" | "Completed" | "Expired";
      billingScope?: string;
      workload?: "Production" | "DevTest";
      resellerId?: string;
      subscriptionOwnerId?: string;
      managementGroupId?: string;
      createdTime?: string;
      tags?: Record<string, string>;
    };
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
export const AliasListOutput = /*@__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        properties: Schema.optional(
          Schema.Struct({
            subscriptionId: Schema.optional(Schema.String),
            displayName: Schema.optional(Schema.String),
            provisioningState: Schema.optional(
              Schema.Literals(["Accepted", "Succeeded", "Failed"]),
            ),
            acceptOwnershipUrl: Schema.optional(Schema.String),
            acceptOwnershipState: Schema.optional(
              Schema.Literals(["Pending", "Completed", "Expired"]),
            ),
            billingScope: Schema.optional(Schema.String),
            workload: Schema.optional(
              Schema.Literals(["Production", "DevTest"]),
            ),
            resellerId: Schema.optional(Schema.String),
            subscriptionOwnerId: Schema.optional(Schema.String),
            managementGroupId: Schema.optional(Schema.String),
            createdTime: Schema.optional(Schema.String),
            tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
          }),
        ),
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
}) as unknown as Schema.Codec<AliasListOutput>;

// The operation
/**
 * List Alias Subscription.
 *
 * @param api-version - Version of the API to be used with the client request. Current version is 2021-10-01
 */
export const AliasList = /*@__PURE__*/ API.make(() => ({
  inputSchema: AliasListInput,
  outputSchema: AliasListOutput,
}));
// Input Schema
export interface BillingAccountGetPolicyInput {
  billingAccountId: string;
}
export const BillingAccountGetPolicyInput =
  /*@__PURE__*/ Schema.Struct({
    billingAccountId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/providers/Microsoft.Subscription/policies/default",
      apiVersion: "2021-10-01",
    }),
  ) as unknown as Schema.Codec<BillingAccountGetPolicyInput>;

// Output Schema
export interface BillingAccountGetPolicyOutput {
  id?: string;
  name?: string;
  type?: string;
  properties?: {
    serviceTenants?: { tenantId?: string; tenantName?: string }[];
    allowTransfers?: boolean;
  };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const BillingAccountGetPolicyOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        serviceTenants: Schema.optional(
          Schema.Array(
            Schema.Struct({
              tenantId: Schema.optional(Schema.String),
              tenantName: Schema.optional(Schema.String),
            }),
          ),
        ),
        allowTransfers: Schema.optional(Schema.Boolean),
      }),
    ),
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
  }) as unknown as Schema.Codec<BillingAccountGetPolicyOutput>;

// The operation
/**
 * Get Billing Account Policy.
 *
 * @param billingAccountId - Billing Account Id.
 * @param api-version - Version of the API to be used with the client request. Current version is 2021-10-01
 */
export const BillingAccountGetPolicy = /*@__PURE__*/ API.make(() => ({
  inputSchema: BillingAccountGetPolicyInput,
  outputSchema: BillingAccountGetPolicyOutput,
}));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Subscription/operations",
    apiVersion: "2021-10-01",
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
      }),
    ),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<OperationsListOutput>;

// The operation
/**
 * Lists all of the available Microsoft.Subscription API operations.
 *
 * @param api-version - Version of the API to be used with the client request. Current version is 2021-10-01
 */
export const OperationsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface SubscriptionAcceptOwnershipInput {
  subscriptionId: string;
  properties?: {
    displayName: string;
    managementGroupId?: string;
    tags?: Record<string, string>;
  };
}
export const SubscriptionAcceptOwnershipInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        displayName: Schema.String,
        managementGroupId: Schema.optional(Schema.String),
        tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Subscription/subscriptions/{subscriptionId}/acceptOwnership",
      apiVersion: "2021-10-01",
    }),
  ) as unknown as Schema.Codec<SubscriptionAcceptOwnershipInput>;

// Output Schema
export type SubscriptionAcceptOwnershipOutput = void;
export const SubscriptionAcceptOwnershipOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<SubscriptionAcceptOwnershipOutput>;

// The operation
/**
 * Accept subscription ownership.
 *
 * @param subscriptionId - Subscription Id.
 * @param api-version - Version of the API to be used with the client request. Current version is 2021-10-01
 */
export const SubscriptionAcceptOwnership = /*@__PURE__*/ API.make(() => ({
  inputSchema: SubscriptionAcceptOwnershipInput,
  outputSchema: SubscriptionAcceptOwnershipOutput,
}));
// Input Schema
export interface SubscriptionAcceptOwnershipStatusInput {
  subscriptionId: string;
}
export const SubscriptionAcceptOwnershipStatusInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Subscription/subscriptions/{subscriptionId}/acceptOwnershipStatus",
      apiVersion: "2021-10-01",
    }),
  ) as unknown as Schema.Codec<SubscriptionAcceptOwnershipStatusInput>;

// Output Schema
export interface SubscriptionAcceptOwnershipStatusOutput {
  subscriptionId?: string;
  acceptOwnershipState?: "Pending" | "Completed" | "Expired";
  provisioningState?: "Pending" | "Accepted" | "Succeeded";
  billingOwner?: string;
  subscriptionTenantId?: string;
  displayName?: string;
  tags?: Record<string, string>;
}
export const SubscriptionAcceptOwnershipStatusOutput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.optional(Schema.String),
    acceptOwnershipState: Schema.optional(
      Schema.Literals(["Pending", "Completed", "Expired"]),
    ),
    provisioningState: Schema.optional(
      Schema.Literals(["Pending", "Accepted", "Succeeded"]),
    ),
    billingOwner: Schema.optional(Schema.String),
    subscriptionTenantId: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }) as unknown as Schema.Codec<SubscriptionAcceptOwnershipStatusOutput>;

// The operation
/**
 * Accept subscription ownership status.
 *
 * @param subscriptionId - Subscription Id.
 * @param api-version - Version of the API to be used with the client request. Current version is 2021-10-01
 */
export const SubscriptionAcceptOwnershipStatus =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SubscriptionAcceptOwnershipStatusInput,
    outputSchema: SubscriptionAcceptOwnershipStatusOutput,
  }));
// Input Schema
export interface SubscriptionCancelInput {
  subscriptionId: string;
}
export const SubscriptionCancelInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Subscription/cancel",
      apiVersion: "2021-10-01",
    }),
  ) as unknown as Schema.Codec<SubscriptionCancelInput>;

// Output Schema
export interface SubscriptionCancelOutput {
  subscriptionId?: string;
}
export const SubscriptionCancelOutput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SubscriptionCancelOutput>;

// The operation
/**
 * The operation to cancel a subscription
 *
 * @param subscriptionId - Subscription Id.
 * @param api-version - Version of the API to be used with the client request. Current version is 2021-10-01
 */
export const SubscriptionCancel = /*@__PURE__*/ API.make(() => ({
  inputSchema: SubscriptionCancelInput,
  outputSchema: SubscriptionCancelOutput,
}));
// Input Schema
export interface SubscriptionEnableInput {
  subscriptionId: string;
}
export const SubscriptionEnableInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Subscription/enable",
      apiVersion: "2021-10-01",
    }),
  ) as unknown as Schema.Codec<SubscriptionEnableInput>;

// Output Schema
export interface SubscriptionEnableOutput {
  subscriptionId?: string;
}
export const SubscriptionEnableOutput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SubscriptionEnableOutput>;

// The operation
/**
 * The operation to enable a subscription
 *
 * @param subscriptionId - Subscription Id.
 * @param api-version - Version of the API to be used with the client request. Current version is 2021-10-01
 */
export const SubscriptionEnable = /*@__PURE__*/ API.make(() => ({
  inputSchema: SubscriptionEnableInput,
  outputSchema: SubscriptionEnableOutput,
}));
// Input Schema
export interface SubscriptionOperationGetInput {
  operationId: string;
}
export const SubscriptionOperationGetInput =
  /*@__PURE__*/ Schema.Struct({
    operationId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Subscription/subscriptionOperations/{operationId}",
      apiVersion: "2021-10-01",
    }),
  ) as unknown as Schema.Codec<SubscriptionOperationGetInput>;

// Output Schema
export interface SubscriptionOperationGetOutput {
  subscriptionLink?: string;
}
export const SubscriptionOperationGetOutput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SubscriptionOperationGetOutput>;

// The operation
/**
 * Get the status of the pending Microsoft.Subscription API operations.
 *
 * @param operationId - The operation ID, which can be found from the Location field in the generate recommendation response header.
 * @param api-version - Version of the API to be used with the client request. Current version is 2021-10-01
 */
export const SubscriptionOperationGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: SubscriptionOperationGetInput,
  outputSchema: SubscriptionOperationGetOutput,
}));
// Input Schema
export interface SubscriptionPolicyAddUpdatePolicyForTenantInput {
  blockSubscriptionsLeavingTenant?: boolean;
  blockSubscriptionsIntoTenant?: boolean;
  exemptedPrincipals?: string[];
}
export const SubscriptionPolicyAddUpdatePolicyForTenantInput =
  /*@__PURE__*/ Schema.Struct({
    blockSubscriptionsLeavingTenant: Schema.optional(Schema.Boolean),
    blockSubscriptionsIntoTenant: Schema.optional(Schema.Boolean),
    exemptedPrincipals: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/providers/Microsoft.Subscription/policies/default",
      apiVersion: "2021-10-01",
    }),
  ) as unknown as Schema.Codec<SubscriptionPolicyAddUpdatePolicyForTenantInput>;

// Output Schema
export interface SubscriptionPolicyAddUpdatePolicyForTenantOutput {
  id?: string;
  name?: string;
  type?: string;
  properties?: {
    policyId?: string;
    blockSubscriptionsLeavingTenant?: boolean;
    blockSubscriptionsIntoTenant?: boolean;
    exemptedPrincipals?: string[];
  };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const SubscriptionPolicyAddUpdatePolicyForTenantOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        policyId: Schema.optional(Schema.String),
        blockSubscriptionsLeavingTenant: Schema.optional(Schema.Boolean),
        blockSubscriptionsIntoTenant: Schema.optional(Schema.Boolean),
        exemptedPrincipals: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
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
  }) as unknown as Schema.Codec<SubscriptionPolicyAddUpdatePolicyForTenantOutput>;

// The operation
/**
 * Create or Update Subscription tenant policy for user's tenant.
 *
 * @param api-version - Version of the API to be used with the client request. Current version is 2021-10-01
 */
export const SubscriptionPolicyAddUpdatePolicyForTenant =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SubscriptionPolicyAddUpdatePolicyForTenantInput,
    outputSchema: SubscriptionPolicyAddUpdatePolicyForTenantOutput,
  }));
// Input Schema
export interface SubscriptionPolicyGetPolicyForTenantInput {}
export const SubscriptionPolicyGetPolicyForTenantInput =
  /*@__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Subscription/policies/default",
      apiVersion: "2021-10-01",
    }),
  ) as unknown as Schema.Codec<SubscriptionPolicyGetPolicyForTenantInput>;

// Output Schema
export interface SubscriptionPolicyGetPolicyForTenantOutput {
  id?: string;
  name?: string;
  type?: string;
  properties?: {
    policyId?: string;
    blockSubscriptionsLeavingTenant?: boolean;
    blockSubscriptionsIntoTenant?: boolean;
    exemptedPrincipals?: string[];
  };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const SubscriptionPolicyGetPolicyForTenantOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        policyId: Schema.optional(Schema.String),
        blockSubscriptionsLeavingTenant: Schema.optional(Schema.Boolean),
        blockSubscriptionsIntoTenant: Schema.optional(Schema.Boolean),
        exemptedPrincipals: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
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
  }) as unknown as Schema.Codec<SubscriptionPolicyGetPolicyForTenantOutput>;

// The operation
/**
 * Get the subscription tenant policy for the user's tenant.
 *
 * @param api-version - Version of the API to be used with the client request. Current version is 2021-10-01
 */
export const SubscriptionPolicyGetPolicyForTenant =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SubscriptionPolicyGetPolicyForTenantInput,
    outputSchema: SubscriptionPolicyGetPolicyForTenantOutput,
  }));
// Input Schema
export interface SubscriptionPolicyListPolicyForTenantInput {}
export const SubscriptionPolicyListPolicyForTenantInput =
  /*@__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Subscription/policies",
      apiVersion: "2021-10-01",
    }),
  ) as unknown as Schema.Codec<SubscriptionPolicyListPolicyForTenantInput>;

// Output Schema
export interface SubscriptionPolicyListPolicyForTenantOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    properties?: {
      policyId?: string;
      blockSubscriptionsLeavingTenant?: boolean;
      blockSubscriptionsIntoTenant?: boolean;
      exemptedPrincipals?: string[];
    };
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
export const SubscriptionPolicyListPolicyForTenantOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          properties: Schema.optional(
            Schema.Struct({
              policyId: Schema.optional(Schema.String),
              blockSubscriptionsLeavingTenant: Schema.optional(Schema.Boolean),
              blockSubscriptionsIntoTenant: Schema.optional(Schema.Boolean),
              exemptedPrincipals: Schema.optional(Schema.Array(Schema.String)),
            }),
          ),
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
  }) as unknown as Schema.Codec<SubscriptionPolicyListPolicyForTenantOutput>;

// The operation
/**
 * Get the subscription tenant policy for the user's tenant.
 *
 * @param api-version - Version of the API to be used with the client request. Current version is 2021-10-01
 */
export const SubscriptionPolicyListPolicyForTenant =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SubscriptionPolicyListPolicyForTenantInput,
    outputSchema: SubscriptionPolicyListPolicyForTenantOutput,
  }));
// Input Schema
export interface SubscriptionRenameInput {
  subscriptionId: string;
  subscriptionName?: string;
}
export const SubscriptionRenameInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    subscriptionName: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Subscription/rename",
      apiVersion: "2021-10-01",
    }),
  ) as unknown as Schema.Codec<SubscriptionRenameInput>;

// Output Schema
export interface SubscriptionRenameOutput {
  subscriptionId?: string;
}
export const SubscriptionRenameOutput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SubscriptionRenameOutput>;

// The operation
/**
 * The operation to rename a subscription
 *
 * @param subscriptionId - Subscription Id.
 * @param api-version - Version of the API to be used with the client request. Current version is 2021-10-01
 */
export const SubscriptionRename = /*@__PURE__*/ API.make(() => ({
  inputSchema: SubscriptionRenameInput,
  outputSchema: SubscriptionRenameOutput,
}));
