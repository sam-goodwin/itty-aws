/**
 * Azure Datashare API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface AccountsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  identity: {
    principalId?: string;
    tenantId?: string;
    type?: "SystemAssigned";
  };
  properties?: {
    createdAt?: string;
    provisioningState?:
      | "Succeeded"
      | "Creating"
      | "Deleting"
      | "Moving"
      | "Failed";
    userEmail?: string;
    userName?: string;
  };
  location?: string;
  tags?: Record<string, string>;
}
export const AccountsCreateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  identity: Schema.Struct({
    principalId: Schema.optional(Schema.String),
    tenantId: Schema.optional(Schema.String),
    type: Schema.optional(Schema.Literals(["SystemAssigned"])),
  }),
  properties: Schema.optional(
    Schema.Struct({
      createdAt: Schema.optional(Schema.String),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Succeeded",
          "Creating",
          "Deleting",
          "Moving",
          "Failed",
        ]),
      ),
      userEmail: Schema.optional(Schema.String),
      userName: Schema.optional(Schema.String),
    }),
  ),
  location: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}",
    apiVersion: "2021-08-01",
  }),
) as unknown as Schema.Codec<AccountsCreateInput>;

// Output Schema
export interface AccountsCreateOutput {
  id?: string;
  name?: string;
  systemData?: {
    createdAt?: string;
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
  };
  type?: string;
}
export const AccountsCreateOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdAt: Schema.optional(Schema.String),
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
    }),
  ),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<AccountsCreateOutput>;

// The operation
/**
 * Create an account in the given resource group
 *
 * Create an account
 *
 * @param subscriptionId - The subscription identifier
 * @param resourceGroupName - The resource group name.
 * @param accountName - The name of the share account.
 * @param api-version - The api version to use.
 */
export const AccountsCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: AccountsCreateInput,
  outputSchema: AccountsCreateOutput,
}));
// Input Schema
export interface AccountsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const AccountsDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}",
    apiVersion: "2021-08-01",
  }),
) as unknown as Schema.Codec<AccountsDeleteInput>;

// Output Schema
export interface AccountsDeleteOutput {
  endTime?: string;
  error?: {
    code: string;
    details?: unknown[];
    message: string;
    target?: string;
  };
  startTime?: string;
  status:
    | "Accepted"
    | "InProgress"
    | "TransientFailure"
    | "Succeeded"
    | "Failed"
    | "Canceled";
}
export const AccountsDeleteOutput = /*@__PURE__*/ Schema.Struct({
  endTime: Schema.optional(Schema.String),
  error: Schema.optional(
    Schema.Struct({
      code: Schema.String,
      details: Schema.optional(Schema.Array(Schema.Unknown)),
      message: Schema.String,
      target: Schema.optional(Schema.String),
    }),
  ),
  startTime: Schema.optional(Schema.String),
  status: Schema.Literals([
    "Accepted",
    "InProgress",
    "TransientFailure",
    "Succeeded",
    "Failed",
    "Canceled",
  ]),
}) as unknown as Schema.Codec<AccountsDeleteOutput>;

// The operation
/**
 * Delete an account
 *
 * DeleteAccount
 *
 * @param subscriptionId - The subscription identifier
 * @param resourceGroupName - The resource group name.
 * @param accountName - The name of the share account.
 * @param api-version - The api version to use.
 */
export const AccountsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: AccountsDeleteInput,
  outputSchema: AccountsDeleteOutput,
}));
// Input Schema
export interface AccountsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const AccountsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}",
    apiVersion: "2021-08-01",
  }),
) as unknown as Schema.Codec<AccountsGetInput>;

// Output Schema
export interface AccountsGetOutput {
  id?: string;
  name?: string;
  systemData?: {
    createdAt?: string;
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
  };
  type?: string;
}
export const AccountsGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdAt: Schema.optional(Schema.String),
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
    }),
  ),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<AccountsGetOutput>;

// The operation
/**
 * Get an account under a resource group
 *
 * Get an account
 *
 * @param subscriptionId - The subscription identifier
 * @param resourceGroupName - The resource group name.
 * @param accountName - The name of the share account.
 * @param api-version - The api version to use.
 */
export const AccountsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: AccountsGetInput,
  outputSchema: AccountsGetOutput,
}));
// Input Schema
export interface AccountsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  $skipToken?: string;
}
export const AccountsListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    $skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts",
      apiVersion: "2021-08-01",
    }),
  ) as unknown as Schema.Codec<AccountsListByResourceGroupInput>;

// Output Schema
export interface AccountsListByResourceGroupOutput {
  nextLink?: string;
  value: {
    id?: string;
    name?: string;
    systemData?: {
      createdAt?: string;
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    };
    type?: string;
  }[];
}
export const AccountsListByResourceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        systemData: Schema.optional(
          Schema.Struct({
            createdAt: Schema.optional(Schema.String),
            createdBy: Schema.optional(Schema.String),
            createdByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
            lastModifiedAt: Schema.optional(Schema.String),
            lastModifiedBy: Schema.optional(Schema.String),
            lastModifiedByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
          }),
        ),
        type: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<AccountsListByResourceGroupOutput>;

// The operation
/**
 * List Accounts in a resource group
 *
 * List Accounts in ResourceGroup
 *
 * @param subscriptionId - The subscription identifier
 * @param resourceGroupName - The resource group name.
 * @param api-version - The api version to use.
 * @param $skipToken - Continuation token
 */
export const AccountsListByResourceGroup = /*@__PURE__*/ API.make(() => ({
  inputSchema: AccountsListByResourceGroupInput,
  outputSchema: AccountsListByResourceGroupOutput,
}));
// Input Schema
export interface AccountsListBySubscriptionInput {
  subscriptionId: string;
  $skipToken?: string;
}
export const AccountsListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DataShare/accounts",
      apiVersion: "2021-08-01",
    }),
  ) as unknown as Schema.Codec<AccountsListBySubscriptionInput>;

// Output Schema
export interface AccountsListBySubscriptionOutput {
  nextLink?: string;
  value: {
    id?: string;
    name?: string;
    systemData?: {
      createdAt?: string;
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    };
    type?: string;
  }[];
}
export const AccountsListBySubscriptionOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        systemData: Schema.optional(
          Schema.Struct({
            createdAt: Schema.optional(Schema.String),
            createdBy: Schema.optional(Schema.String),
            createdByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
            lastModifiedAt: Schema.optional(Schema.String),
            lastModifiedBy: Schema.optional(Schema.String),
            lastModifiedByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
          }),
        ),
        type: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<AccountsListBySubscriptionOutput>;

// The operation
/**
 * List Accounts in a subscription
 *
 * List Accounts in Subscription
 *
 * @param subscriptionId - The subscription identifier
 * @param api-version - The api version to use.
 * @param $skipToken - Continuation token
 */
export const AccountsListBySubscription = /*@__PURE__*/ API.make(() => ({
  inputSchema: AccountsListBySubscriptionInput,
  outputSchema: AccountsListBySubscriptionOutput,
}));
// Input Schema
export interface AccountsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  tags?: Record<string, string>;
}
export const AccountsUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}",
    apiVersion: "2021-08-01",
  }),
) as unknown as Schema.Codec<AccountsUpdateInput>;

// Output Schema
export interface AccountsUpdateOutput {
  id?: string;
  name?: string;
  systemData?: {
    createdAt?: string;
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
  };
  type?: string;
}
export const AccountsUpdateOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdAt: Schema.optional(Schema.String),
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
    }),
  ),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<AccountsUpdateOutput>;

// The operation
/**
 * Patch a given account
 *
 * Patch an account
 *
 * @param subscriptionId - The subscription identifier
 * @param resourceGroupName - The resource group name.
 * @param accountName - The name of the share account.
 * @param api-version - The api version to use.
 */
export const AccountsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: AccountsUpdateInput,
  outputSchema: AccountsUpdateOutput,
}));
// Input Schema
export interface ConsumerInvitationsGetInput {
  location: string;
  invitationId: string;
}
export const ConsumerInvitationsGetInput =
  /*@__PURE__*/ Schema.Struct({
    location: Schema.String.pipe(T.PathParam()),
    invitationId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.DataShare/locations/{location}/consumerInvitations/{invitationId}",
      apiVersion: "2021-08-01",
    }),
  ) as unknown as Schema.Codec<ConsumerInvitationsGetInput>;

// Output Schema
export interface ConsumerInvitationsGetOutput {
  id?: string;
  name?: string;
  systemData?: {
    createdAt?: string;
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
  };
  type?: string;
}
export const ConsumerInvitationsGetOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdAt: Schema.optional(Schema.String),
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
      }),
    ),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ConsumerInvitationsGetOutput>;

// The operation
/**
 * Gets the invitation identified by invitationId
 *
 * Get an invitation
 *
 * @param location - Location of the invitation
 * @param invitationId - An invitation id
 * @param api-version - The api version to use.
 */
export const ConsumerInvitationsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ConsumerInvitationsGetInput,
  outputSchema: ConsumerInvitationsGetOutput,
}));
// Input Schema
export interface ConsumerInvitationsListInvitationsInput {
  $skipToken?: string;
}
export const ConsumerInvitationsListInvitationsInput =
  /*@__PURE__*/ Schema.Struct({
    $skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.DataShare/listInvitations",
      apiVersion: "2021-08-01",
    }),
  ) as unknown as Schema.Codec<ConsumerInvitationsListInvitationsInput>;

// Output Schema
export interface ConsumerInvitationsListInvitationsOutput {
  nextLink?: string;
  value: {
    id?: string;
    name?: string;
    systemData?: {
      createdAt?: string;
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    };
    type?: string;
  }[];
}
export const ConsumerInvitationsListInvitationsOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        systemData: Schema.optional(
          Schema.Struct({
            createdAt: Schema.optional(Schema.String),
            createdBy: Schema.optional(Schema.String),
            createdByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
            lastModifiedAt: Schema.optional(Schema.String),
            lastModifiedBy: Schema.optional(Schema.String),
            lastModifiedByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
          }),
        ),
        type: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<ConsumerInvitationsListInvitationsOutput>;

// The operation
/**
 * List the invitations
 *
 * Lists invitations
 *
 * @param api-version - The api version to use.
 * @param $skipToken - The continuation token
 */
export const ConsumerInvitationsListInvitations =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ConsumerInvitationsListInvitationsInput,
    outputSchema: ConsumerInvitationsListInvitationsOutput,
  }));
// Input Schema
export interface ConsumerInvitationsRejectInvitationInput {
  location: string;
  properties: {
    dataSetCount?: number;
    description?: string;
    expirationDate?: string;
    invitationId: string;
    invitationStatus?: "Pending" | "Accepted" | "Rejected" | "Withdrawn";
    location?: string;
    providerEmail?: string;
    providerName?: string;
    providerTenantName?: string;
    respondedAt?: string;
    sentAt?: string;
    shareName?: string;
    termsOfUse?: string;
    userEmail?: string;
    userName?: string;
  };
  id?: string;
  name?: string;
  systemData?: {
    createdAt?: string;
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
  };
  type?: string;
}
export const ConsumerInvitationsRejectInvitationInput =
  /*@__PURE__*/ Schema.Struct({
    location: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      dataSetCount: Schema.optional(Schema.Number),
      description: Schema.optional(Schema.String),
      expirationDate: Schema.optional(Schema.String),
      invitationId: Schema.String,
      invitationStatus: Schema.optional(
        Schema.Literals(["Pending", "Accepted", "Rejected", "Withdrawn"]),
      ),
      location: Schema.optional(Schema.String),
      providerEmail: Schema.optional(Schema.String),
      providerName: Schema.optional(Schema.String),
      providerTenantName: Schema.optional(Schema.String),
      respondedAt: Schema.optional(Schema.String),
      sentAt: Schema.optional(Schema.String),
      shareName: Schema.optional(Schema.String),
      termsOfUse: Schema.optional(Schema.String),
      userEmail: Schema.optional(Schema.String),
      userName: Schema.optional(Schema.String),
    }),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdAt: Schema.optional(Schema.String),
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
      }),
    ),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.DataShare/locations/{location}/rejectInvitation",
      apiVersion: "2021-08-01",
    }),
  ) as unknown as Schema.Codec<ConsumerInvitationsRejectInvitationInput>;

// Output Schema
export interface ConsumerInvitationsRejectInvitationOutput {
  id?: string;
  name?: string;
  systemData?: {
    createdAt?: string;
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
  };
  type?: string;
}
export const ConsumerInvitationsRejectInvitationOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdAt: Schema.optional(Schema.String),
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
      }),
    ),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ConsumerInvitationsRejectInvitationOutput>;

// The operation
/**
 * Rejects the invitation identified by invitationId
 *
 * Reject an invitation
 *
 * @param location - Location of the invitation
 * @param api-version - The api version to use.
 */
export const ConsumerInvitationsRejectInvitation =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ConsumerInvitationsRejectInvitationInput,
    outputSchema: ConsumerInvitationsRejectInvitationOutput,
  }));
// Input Schema
export interface ConsumerSourceDataSetsListByShareSubscriptionInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  shareSubscriptionName: string;
  $skipToken?: string;
}
export const ConsumerSourceDataSetsListByShareSubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    shareSubscriptionName: Schema.String.pipe(T.PathParam()),
    $skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shareSubscriptions/{shareSubscriptionName}/consumerSourceDataSets",
      apiVersion: "2021-08-01",
    }),
  ) as unknown as Schema.Codec<ConsumerSourceDataSetsListByShareSubscriptionInput>;

// Output Schema
export interface ConsumerSourceDataSetsListByShareSubscriptionOutput {
  nextLink?: string;
  value: {
    id?: string;
    name?: string;
    systemData?: {
      createdAt?: string;
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    };
    type?: string;
  }[];
}
export const ConsumerSourceDataSetsListByShareSubscriptionOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        systemData: Schema.optional(
          Schema.Struct({
            createdAt: Schema.optional(Schema.String),
            createdBy: Schema.optional(Schema.String),
            createdByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
            lastModifiedAt: Schema.optional(Schema.String),
            lastModifiedBy: Schema.optional(Schema.String),
            lastModifiedByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
          }),
        ),
        type: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<ConsumerSourceDataSetsListByShareSubscriptionOutput>;

// The operation
/**
 * Get source dataSets of a shareSubscription.
 *
 * Get source dataSets of a shareSubscription
 *
 * @param subscriptionId - The subscription identifier
 * @param resourceGroupName - The resource group name.
 * @param accountName - The name of the share account.
 * @param shareSubscriptionName - The name of the shareSubscription.
 * @param api-version - The api version to use.
 * @param $skipToken - Continuation token
 */
export const ConsumerSourceDataSetsListByShareSubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ConsumerSourceDataSetsListByShareSubscriptionInput,
    outputSchema: ConsumerSourceDataSetsListByShareSubscriptionOutput,
  }));
// Input Schema
export interface DataSetMappingsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  shareSubscriptionName: string;
  dataSetMappingName: string;
  kind:
    | "Blob"
    | "Container"
    | "BlobFolder"
    | "AdlsGen2FileSystem"
    | "AdlsGen2Folder"
    | "AdlsGen2File"
    | "KustoCluster"
    | "KustoDatabase"
    | "KustoTable"
    | "SqlDBTable"
    | "SqlDWTable"
    | "SynapseWorkspaceSqlPoolTable";
  id?: string;
  name?: string;
  systemData?: {
    createdAt?: string;
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
  };
  type?: string;
}
export const DataSetMappingsCreateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    shareSubscriptionName: Schema.String.pipe(T.PathParam()),
    dataSetMappingName: Schema.String.pipe(T.PathParam()),
    kind: Schema.Literals([
      "Blob",
      "Container",
      "BlobFolder",
      "AdlsGen2FileSystem",
      "AdlsGen2Folder",
      "AdlsGen2File",
      "KustoCluster",
      "KustoDatabase",
      "KustoTable",
      "SqlDBTable",
      "SqlDWTable",
      "SynapseWorkspaceSqlPoolTable",
    ]),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdAt: Schema.optional(Schema.String),
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
      }),
    ),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shareSubscriptions/{shareSubscriptionName}/dataSetMappings/{dataSetMappingName}",
      apiVersion: "2021-08-01",
    }),
  ) as unknown as Schema.Codec<DataSetMappingsCreateInput>;

// Output Schema
export interface DataSetMappingsCreateOutput {
  id?: string;
  name?: string;
  systemData?: {
    createdAt?: string;
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
  };
  type?: string;
}
export const DataSetMappingsCreateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdAt: Schema.optional(Schema.String),
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
      }),
    ),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DataSetMappingsCreateOutput>;

// The operation
/**
 * Maps a source data set in the source share to a sink data set in the share subscription.
Enables copying the data set from source to destination.
 *
 * Create a DataSetMapping
 *
 * @param subscriptionId - The subscription identifier
 * @param resourceGroupName - The resource group name.
 * @param accountName - The name of the share account.
 * @param shareSubscriptionName - The name of the share subscription which will hold the data set sink.
 * @param dataSetMappingName - The name of the data set mapping to be created.
 * @param api-version - The api version to use.
 */
export const DataSetMappingsCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: DataSetMappingsCreateInput,
  outputSchema: DataSetMappingsCreateOutput,
}));
// Input Schema
export interface DataSetMappingsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  shareSubscriptionName: string;
  dataSetMappingName: string;
}
export const DataSetMappingsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    shareSubscriptionName: Schema.String.pipe(T.PathParam()),
    dataSetMappingName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shareSubscriptions/{shareSubscriptionName}/dataSetMappings/{dataSetMappingName}",
      apiVersion: "2021-08-01",
    }),
  ) as unknown as Schema.Codec<DataSetMappingsDeleteInput>;

// Output Schema
export type DataSetMappingsDeleteOutput = void;
export const DataSetMappingsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DataSetMappingsDeleteOutput>;

// The operation
/**
 * Delete DataSetMapping in a shareSubscription.
 *
 * Delete a DataSetMapping in a shareSubscription
 *
 * @param subscriptionId - The subscription identifier
 * @param resourceGroupName - The resource group name.
 * @param accountName - The name of the share account.
 * @param shareSubscriptionName - The name of the shareSubscription.
 * @param dataSetMappingName - The name of the dataSetMapping.
 * @param api-version - The api version to use.
 */
export const DataSetMappingsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: DataSetMappingsDeleteInput,
  outputSchema: DataSetMappingsDeleteOutput,
}));
// Input Schema
export interface DataSetMappingsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  shareSubscriptionName: string;
  dataSetMappingName: string;
}
export const DataSetMappingsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    shareSubscriptionName: Schema.String.pipe(T.PathParam()),
    dataSetMappingName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shareSubscriptions/{shareSubscriptionName}/dataSetMappings/{dataSetMappingName}",
      apiVersion: "2021-08-01",
    }),
  ) as unknown as Schema.Codec<DataSetMappingsGetInput>;

// Output Schema
export interface DataSetMappingsGetOutput {
  id?: string;
  name?: string;
  systemData?: {
    createdAt?: string;
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
  };
  type?: string;
}
export const DataSetMappingsGetOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdAt: Schema.optional(Schema.String),
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
      }),
    ),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DataSetMappingsGetOutput>;

// The operation
/**
 * Get DataSetMapping in a shareSubscription.
 *
 * Get a DataSetMapping in a shareSubscription
 *
 * @param subscriptionId - The subscription identifier
 * @param resourceGroupName - The resource group name.
 * @param accountName - The name of the share account.
 * @param shareSubscriptionName - The name of the shareSubscription.
 * @param dataSetMappingName - The name of the dataSetMapping.
 * @param api-version - The api version to use.
 */
export const DataSetMappingsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: DataSetMappingsGetInput,
  outputSchema: DataSetMappingsGetOutput,
}));
// Input Schema
export interface DataSetMappingsListByShareSubscriptionInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  shareSubscriptionName: string;
  $skipToken?: string;
  $filter?: string;
  $orderby?: string;
}
export const DataSetMappingsListByShareSubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    shareSubscriptionName: Schema.String.pipe(T.PathParam()),
    $skipToken: Schema.optional(Schema.String),
    $filter: Schema.optional(Schema.String),
    $orderby: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shareSubscriptions/{shareSubscriptionName}/dataSetMappings",
      apiVersion: "2021-08-01",
    }),
  ) as unknown as Schema.Codec<DataSetMappingsListByShareSubscriptionInput>;

// Output Schema
export interface DataSetMappingsListByShareSubscriptionOutput {
  nextLink?: string;
  value: {
    id?: string;
    name?: string;
    systemData?: {
      createdAt?: string;
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    };
    type?: string;
  }[];
}
export const DataSetMappingsListByShareSubscriptionOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        systemData: Schema.optional(
          Schema.Struct({
            createdAt: Schema.optional(Schema.String),
            createdBy: Schema.optional(Schema.String),
            createdByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
            lastModifiedAt: Schema.optional(Schema.String),
            lastModifiedBy: Schema.optional(Schema.String),
            lastModifiedByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
          }),
        ),
        type: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<DataSetMappingsListByShareSubscriptionOutput>;

// The operation
/**
 * List DataSetMappings in a share subscription.
 *
 * List DataSetMappings in a share subscription
 *
 * @param subscriptionId - The subscription identifier
 * @param resourceGroupName - The resource group name.
 * @param accountName - The name of the share account.
 * @param shareSubscriptionName - The name of the share subscription.
 * @param api-version - The api version to use.
 * @param $skipToken - Continuation token
 * @param $filter - Filters the results using OData syntax.
 * @param $orderby - Sorts the results using OData syntax.
 */
export const DataSetMappingsListByShareSubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DataSetMappingsListByShareSubscriptionInput,
    outputSchema: DataSetMappingsListByShareSubscriptionOutput,
  }));
// Input Schema
export interface DataSetsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  shareName: string;
  dataSetName: string;
  kind:
    | "Blob"
    | "Container"
    | "BlobFolder"
    | "AdlsGen2FileSystem"
    | "AdlsGen2Folder"
    | "AdlsGen2File"
    | "AdlsGen1Folder"
    | "AdlsGen1File"
    | "KustoCluster"
    | "KustoDatabase"
    | "KustoTable"
    | "SqlDBTable"
    | "SqlDWTable"
    | "SynapseWorkspaceSqlPoolTable";
  id?: string;
  name?: string;
  systemData?: {
    createdAt?: string;
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
  };
  type?: string;
}
export const DataSetsCreateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  shareName: Schema.String.pipe(T.PathParam()),
  dataSetName: Schema.String.pipe(T.PathParam()),
  kind: Schema.Literals([
    "Blob",
    "Container",
    "BlobFolder",
    "AdlsGen2FileSystem",
    "AdlsGen2Folder",
    "AdlsGen2File",
    "AdlsGen1Folder",
    "AdlsGen1File",
    "KustoCluster",
    "KustoDatabase",
    "KustoTable",
    "SqlDBTable",
    "SqlDWTable",
    "SynapseWorkspaceSqlPoolTable",
  ]),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdAt: Schema.optional(Schema.String),
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
    }),
  ),
  type: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName}/dataSets/{dataSetName}",
    apiVersion: "2021-08-01",
  }),
) as unknown as Schema.Codec<DataSetsCreateInput>;

// Output Schema
export interface DataSetsCreateOutput {
  id?: string;
  name?: string;
  systemData?: {
    createdAt?: string;
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
  };
  type?: string;
}
export const DataSetsCreateOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdAt: Schema.optional(Schema.String),
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
    }),
  ),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<DataSetsCreateOutput>;

// The operation
/**
 * Adds a new data set to an existing share.
 *
 * Create a DataSet
 *
 * @param subscriptionId - The subscription identifier
 * @param resourceGroupName - The resource group name.
 * @param accountName - The name of the share account.
 * @param shareName - The name of the share to add the data set to.
 * @param dataSetName - The name of the dataSet.
 * @param api-version - The api version to use.
 */
export const DataSetsCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: DataSetsCreateInput,
  outputSchema: DataSetsCreateOutput,
}));
// Input Schema
export interface DataSetsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  shareName: string;
  dataSetName: string;
}
export const DataSetsDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  shareName: Schema.String.pipe(T.PathParam()),
  dataSetName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName}/dataSets/{dataSetName}",
    apiVersion: "2021-08-01",
  }),
) as unknown as Schema.Codec<DataSetsDeleteInput>;

// Output Schema
export type DataSetsDeleteOutput = void;
export const DataSetsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DataSetsDeleteOutput>;

// The operation
/**
 * Delete DataSet in a share.
 *
 * Delete a DataSet in a share
 *
 * @param subscriptionId - The subscription identifier
 * @param resourceGroupName - The resource group name.
 * @param accountName - The name of the share account.
 * @param shareName - The name of the share.
 * @param dataSetName - The name of the dataSet.
 * @param api-version - The api version to use.
 */
export const DataSetsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: DataSetsDeleteInput,
  outputSchema: DataSetsDeleteOutput,
}));
// Input Schema
export interface DataSetsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  shareName: string;
  dataSetName: string;
}
export const DataSetsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  shareName: Schema.String.pipe(T.PathParam()),
  dataSetName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName}/dataSets/{dataSetName}",
    apiVersion: "2021-08-01",
  }),
) as unknown as Schema.Codec<DataSetsGetInput>;

// Output Schema
export interface DataSetsGetOutput {
  id?: string;
  name?: string;
  systemData?: {
    createdAt?: string;
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
  };
  type?: string;
}
export const DataSetsGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdAt: Schema.optional(Schema.String),
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
    }),
  ),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<DataSetsGetOutput>;

// The operation
/**
 * Get DataSet in a share.
 *
 * Get a DataSet in a share
 *
 * @param subscriptionId - The subscription identifier
 * @param resourceGroupName - The resource group name.
 * @param accountName - The name of the share account.
 * @param shareName - The name of the share.
 * @param dataSetName - The name of the dataSet.
 * @param api-version - The api version to use.
 */
export const DataSetsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: DataSetsGetInput,
  outputSchema: DataSetsGetOutput,
}));
// Input Schema
export interface DataSetsListByShareInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  shareName: string;
  $skipToken?: string;
  $filter?: string;
  $orderby?: string;
}
export const DataSetsListByShareInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    shareName: Schema.String.pipe(T.PathParam()),
    $skipToken: Schema.optional(Schema.String),
    $filter: Schema.optional(Schema.String),
    $orderby: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName}/dataSets",
      apiVersion: "2021-08-01",
    }),
  ) as unknown as Schema.Codec<DataSetsListByShareInput>;

// Output Schema
export interface DataSetsListByShareOutput {
  nextLink?: string;
  value: {
    id?: string;
    name?: string;
    systemData?: {
      createdAt?: string;
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    };
    type?: string;
  }[];
}
export const DataSetsListByShareOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        systemData: Schema.optional(
          Schema.Struct({
            createdAt: Schema.optional(Schema.String),
            createdBy: Schema.optional(Schema.String),
            createdByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
            lastModifiedAt: Schema.optional(Schema.String),
            lastModifiedBy: Schema.optional(Schema.String),
            lastModifiedByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
          }),
        ),
        type: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<DataSetsListByShareOutput>;

// The operation
/**
 * List DataSets in a share.
 *
 * List DataSets in a share
 *
 * @param subscriptionId - The subscription identifier
 * @param resourceGroupName - The resource group name.
 * @param accountName - The name of the share account.
 * @param shareName - The name of the share.
 * @param api-version - The api version to use.
 * @param $skipToken - continuation token
 * @param $filter - Filters the results using OData syntax.
 * @param $orderby - Sorts the results using OData syntax.
 */
export const DataSetsListByShare = /*@__PURE__*/ API.make(() => ({
  inputSchema: DataSetsListByShareInput,
  outputSchema: DataSetsListByShareOutput,
}));
// Input Schema
export interface EmailRegistrationsActivateEmailInput {
  location: string;
  activationCode?: string;
  activationExpirationDate?: string;
  email?: string;
  registrationStatus?:
    | "ActivationPending"
    | "Activated"
    | "ActivationAttemptsExhausted";
  tenantId?: string;
}
export const EmailRegistrationsActivateEmailInput =
  /*@__PURE__*/ Schema.Struct({
    location: Schema.String.pipe(T.PathParam()),
    activationCode: Schema.optional(Schema.String),
    activationExpirationDate: Schema.optional(Schema.String),
    email: Schema.optional(Schema.String),
    registrationStatus: Schema.optional(
      Schema.Literals([
        "ActivationPending",
        "Activated",
        "ActivationAttemptsExhausted",
      ]),
    ),
    tenantId: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.DataShare/locations/{location}/activateEmail",
      apiVersion: "2021-08-01",
    }),
  ) as unknown as Schema.Codec<EmailRegistrationsActivateEmailInput>;

// Output Schema
export interface EmailRegistrationsActivateEmailOutput {
  activationCode?: string;
  activationExpirationDate?: string;
  email?: string;
  registrationStatus?:
    | "ActivationPending"
    | "Activated"
    | "ActivationAttemptsExhausted";
  tenantId?: string;
}
export const EmailRegistrationsActivateEmailOutput =
  /*@__PURE__*/ Schema.Struct({
    activationCode: Schema.optional(Schema.String),
    activationExpirationDate: Schema.optional(Schema.String),
    email: Schema.optional(Schema.String),
    registrationStatus: Schema.optional(
      Schema.Literals([
        "ActivationPending",
        "Activated",
        "ActivationAttemptsExhausted",
      ]),
    ),
    tenantId: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<EmailRegistrationsActivateEmailOutput>;

// The operation
/**
 * Activates the tenant and email combination using email code received.
 *
 * Activate the email registration for the current tenant
 *
 * @param location - Location of the activation.
 * @param api-version - The api version to use.
 */
export const EmailRegistrationsActivateEmail =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: EmailRegistrationsActivateEmailInput,
    outputSchema: EmailRegistrationsActivateEmailOutput,
  }));
// Input Schema
export interface EmailRegistrationsRegisterEmailInput {
  location: string;
}
export const EmailRegistrationsRegisterEmailInput =
  /*@__PURE__*/ Schema.Struct({
    location: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.DataShare/locations/{location}/registerEmail",
      apiVersion: "2021-08-01",
    }),
  ) as unknown as Schema.Codec<EmailRegistrationsRegisterEmailInput>;

// Output Schema
export interface EmailRegistrationsRegisterEmailOutput {
  activationCode?: string;
  activationExpirationDate?: string;
  email?: string;
  registrationStatus?:
    | "ActivationPending"
    | "Activated"
    | "ActivationAttemptsExhausted";
  tenantId?: string;
}
export const EmailRegistrationsRegisterEmailOutput =
  /*@__PURE__*/ Schema.Struct({
    activationCode: Schema.optional(Schema.String),
    activationExpirationDate: Schema.optional(Schema.String),
    email: Schema.optional(Schema.String),
    registrationStatus: Schema.optional(
      Schema.Literals([
        "ActivationPending",
        "Activated",
        "ActivationAttemptsExhausted",
      ]),
    ),
    tenantId: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<EmailRegistrationsRegisterEmailOutput>;

// The operation
/**
 * Registers the tenant and email combination for verification.
 *
 * Register an email for the current tenant
 *
 * @param location - Location of the registration
 * @param api-version - The api version to use.
 */
export const EmailRegistrationsRegisterEmail =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: EmailRegistrationsRegisterEmailInput,
    outputSchema: EmailRegistrationsRegisterEmailOutput,
  }));
// Input Schema
export interface InvitationsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  shareName: string;
  invitationName: string;
  properties?: {
    expirationDate?: string;
    invitationId?: string;
    invitationStatus?: "Pending" | "Accepted" | "Rejected" | "Withdrawn";
    respondedAt?: string;
    sentAt?: string;
    targetActiveDirectoryId?: string;
    targetEmail?: string;
    targetObjectId?: string;
    userEmail?: string;
    userName?: string;
  };
  id?: string;
  name?: string;
  systemData?: {
    createdAt?: string;
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
  };
  type?: string;
}
export const InvitationsCreateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  shareName: Schema.String.pipe(T.PathParam()),
  invitationName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      expirationDate: Schema.optional(Schema.String),
      invitationId: Schema.optional(Schema.String),
      invitationStatus: Schema.optional(
        Schema.Literals(["Pending", "Accepted", "Rejected", "Withdrawn"]),
      ),
      respondedAt: Schema.optional(Schema.String),
      sentAt: Schema.optional(Schema.String),
      targetActiveDirectoryId: Schema.optional(Schema.String),
      targetEmail: Schema.optional(Schema.String),
      targetObjectId: Schema.optional(Schema.String),
      userEmail: Schema.optional(Schema.String),
      userName: Schema.optional(Schema.String),
    }),
  ),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdAt: Schema.optional(Schema.String),
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
    }),
  ),
  type: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName}/invitations/{invitationName}",
    apiVersion: "2021-08-01",
  }),
) as unknown as Schema.Codec<InvitationsCreateInput>;

// Output Schema
export interface InvitationsCreateOutput {
  id?: string;
  name?: string;
  systemData?: {
    createdAt?: string;
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
  };
  type?: string;
}
export const InvitationsCreateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdAt: Schema.optional(Schema.String),
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
      }),
    ),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<InvitationsCreateOutput>;

// The operation
/**
 * Sends a new invitation to a recipient to access a share.
 *
 * Create an invitation
 *
 * @param subscriptionId - The subscription identifier
 * @param resourceGroupName - The resource group name.
 * @param accountName - The name of the share account.
 * @param shareName - The name of the share to send the invitation for.
 * @param invitationName - The name of the invitation.
 * @param api-version - The api version to use.
 */
export const InvitationsCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: InvitationsCreateInput,
  outputSchema: InvitationsCreateOutput,
}));
// Input Schema
export interface InvitationsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  shareName: string;
  invitationName: string;
}
export const InvitationsDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  shareName: Schema.String.pipe(T.PathParam()),
  invitationName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName}/invitations/{invitationName}",
    apiVersion: "2021-08-01",
  }),
) as unknown as Schema.Codec<InvitationsDeleteInput>;

// Output Schema
export type InvitationsDeleteOutput = void;
export const InvitationsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<InvitationsDeleteOutput>;

// The operation
/**
 * Delete Invitation in a share.
 *
 * Delete an invitation in a share
 *
 * @param subscriptionId - The subscription identifier
 * @param resourceGroupName - The resource group name.
 * @param accountName - The name of the share account.
 * @param shareName - The name of the share.
 * @param invitationName - The name of the invitation.
 * @param api-version - The api version to use.
 */
export const InvitationsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: InvitationsDeleteInput,
  outputSchema: InvitationsDeleteOutput,
}));
// Input Schema
export interface InvitationsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  shareName: string;
  invitationName: string;
}
export const InvitationsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  shareName: Schema.String.pipe(T.PathParam()),
  invitationName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName}/invitations/{invitationName}",
    apiVersion: "2021-08-01",
  }),
) as unknown as Schema.Codec<InvitationsGetInput>;

// Output Schema
export interface InvitationsGetOutput {
  id?: string;
  name?: string;
  systemData?: {
    createdAt?: string;
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
  };
  type?: string;
}
export const InvitationsGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdAt: Schema.optional(Schema.String),
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
    }),
  ),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<InvitationsGetOutput>;

// The operation
/**
 * Get Invitation in a share.
 *
 * Get an invitation in a share
 *
 * @param subscriptionId - The subscription identifier
 * @param resourceGroupName - The resource group name.
 * @param accountName - The name of the share account.
 * @param shareName - The name of the share.
 * @param invitationName - The name of the invitation.
 * @param api-version - The api version to use.
 */
export const InvitationsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: InvitationsGetInput,
  outputSchema: InvitationsGetOutput,
}));
// Input Schema
export interface InvitationsListByShareInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  shareName: string;
  $skipToken?: string;
  $filter?: string;
  $orderby?: string;
}
export const InvitationsListByShareInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    shareName: Schema.String.pipe(T.PathParam()),
    $skipToken: Schema.optional(Schema.String),
    $filter: Schema.optional(Schema.String),
    $orderby: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName}/invitations",
      apiVersion: "2021-08-01",
    }),
  ) as unknown as Schema.Codec<InvitationsListByShareInput>;

// Output Schema
export interface InvitationsListByShareOutput {
  nextLink?: string;
  value: {
    id?: string;
    name?: string;
    systemData?: {
      createdAt?: string;
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    };
    type?: string;
  }[];
}
export const InvitationsListByShareOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        systemData: Schema.optional(
          Schema.Struct({
            createdAt: Schema.optional(Schema.String),
            createdBy: Schema.optional(Schema.String),
            createdByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
            lastModifiedAt: Schema.optional(Schema.String),
            lastModifiedBy: Schema.optional(Schema.String),
            lastModifiedByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
          }),
        ),
        type: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<InvitationsListByShareOutput>;

// The operation
/**
 * List all Invitations in a share.
 *
 * List invitations in a share
 *
 * @param subscriptionId - The subscription identifier
 * @param resourceGroupName - The resource group name.
 * @param accountName - The name of the share account.
 * @param shareName - The name of the share.
 * @param api-version - The api version to use.
 * @param $skipToken - The continuation token
 * @param $filter - Filters the results using OData syntax.
 * @param $orderby - Sorts the results using OData syntax.
 */
export const InvitationsListByShare = /*@__PURE__*/ API.make(() => ({
  inputSchema: InvitationsListByShareInput,
  outputSchema: InvitationsListByShareOutput,
}));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.DataShare/operations",
    apiVersion: "2021-08-01",
  }),
) as unknown as Schema.Codec<OperationsListInput>;

// Output Schema
export interface OperationsListOutput {
  nextLink?: string;
  value: {
    display?: {
      description?: string;
      operation?: string;
      provider?: string;
      resource?: string;
    };
    name?: string;
    origin?: string;
    properties?: {
      serviceSpecification?: {
        logSpecifications?: {
          blobDuration?: string;
          displayName?: string;
          name?: string;
        }[];
        metricSpecifications?: {
          aggregationType?: string;
          dimensions?: { displayName?: string; name?: string }[];
          displayDescription?: string;
          displayName?: string;
          enableRegionalMdmAccount?: string;
          fillGapWithZero?: boolean;
          internalMetricName?: string;
          name?: string;
          resourceIdDimensionNameOverride?: string;
          supportedAggregationTypes?: string[];
          supportedTimeGrainTypes?: string[];
          unit?: string;
        }[];
      };
    };
  }[];
}
export const OperationsListOutput = /*@__PURE__*/ Schema.Struct({
  nextLink: Schema.optional(Schema.String),
  value: Schema.Array(
    Schema.Struct({
      display: Schema.optional(
        Schema.Struct({
          description: Schema.optional(Schema.String),
          operation: Schema.optional(Schema.String),
          provider: Schema.optional(Schema.String),
          resource: Schema.optional(Schema.String),
        }),
      ),
      name: Schema.optional(Schema.String),
      origin: Schema.optional(Schema.String),
      properties: Schema.optional(
        Schema.Struct({
          serviceSpecification: Schema.optional(
            Schema.Struct({
              logSpecifications: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    blobDuration: Schema.optional(Schema.String),
                    displayName: Schema.optional(Schema.String),
                    name: Schema.optional(Schema.String),
                  }),
                ),
              ),
              metricSpecifications: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    aggregationType: Schema.optional(Schema.String),
                    dimensions: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          displayName: Schema.optional(Schema.String),
                          name: Schema.optional(Schema.String),
                        }),
                      ),
                    ),
                    displayDescription: Schema.optional(Schema.String),
                    displayName: Schema.optional(Schema.String),
                    enableRegionalMdmAccount: Schema.optional(Schema.String),
                    fillGapWithZero: Schema.optional(Schema.Boolean),
                    internalMetricName: Schema.optional(Schema.String),
                    name: Schema.optional(Schema.String),
                    resourceIdDimensionNameOverride: Schema.optional(
                      Schema.String,
                    ),
                    supportedAggregationTypes: Schema.optional(
                      Schema.Array(Schema.String),
                    ),
                    supportedTimeGrainTypes: Schema.optional(
                      Schema.Array(Schema.String),
                    ),
                    unit: Schema.optional(Schema.String),
                  }),
                ),
              ),
            }),
          ),
        }),
      ),
    }),
  ),
}) as unknown as Schema.Codec<OperationsListOutput>;

// The operation
/**
 * Lists the available operations
 *
 * List of available operations
 *
 * @param api-version - The api version to use.
 */
export const OperationsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface ProviderShareSubscriptionsAdjustInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  shareName: string;
  providerShareSubscriptionId: string;
  properties?: {
    consumerEmail?: string;
    consumerName?: string;
    consumerTenantName?: string;
    createdAt?: string;
    expirationDate?: string;
    providerEmail?: string;
    providerName?: string;
    sharedAt?: string;
    shareSubscriptionObjectId?: string;
    shareSubscriptionStatus?:
      | "Active"
      | "Revoked"
      | "SourceDeleted"
      | "Revoking";
  };
  id?: string;
  name?: string;
  systemData?: {
    createdAt?: string;
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
  };
  type?: string;
}
export const ProviderShareSubscriptionsAdjustInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    shareName: Schema.String.pipe(T.PathParam()),
    providerShareSubscriptionId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        consumerEmail: Schema.optional(Schema.String),
        consumerName: Schema.optional(Schema.String),
        consumerTenantName: Schema.optional(Schema.String),
        createdAt: Schema.optional(Schema.String),
        expirationDate: Schema.optional(Schema.String),
        providerEmail: Schema.optional(Schema.String),
        providerName: Schema.optional(Schema.String),
        sharedAt: Schema.optional(Schema.String),
        shareSubscriptionObjectId: Schema.optional(Schema.String),
        shareSubscriptionStatus: Schema.optional(
          Schema.Literals(["Active", "Revoked", "SourceDeleted", "Revoking"]),
        ),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdAt: Schema.optional(Schema.String),
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
      }),
    ),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName}/providerShareSubscriptions/{providerShareSubscriptionId}/adjust",
      apiVersion: "2021-08-01",
    }),
  ) as unknown as Schema.Codec<ProviderShareSubscriptionsAdjustInput>;

// Output Schema
export interface ProviderShareSubscriptionsAdjustOutput {
  id?: string;
  name?: string;
  systemData?: {
    createdAt?: string;
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
  };
  type?: string;
}
export const ProviderShareSubscriptionsAdjustOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdAt: Schema.optional(Schema.String),
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
      }),
    ),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ProviderShareSubscriptionsAdjustOutput>;

// The operation
/**
 * Adjust the expiration date of a share subscription in a provider share.
 *
 * Adjust a share subscription's expiration date in a provider share
 *
 * @param subscriptionId - The subscription identifier
 * @param resourceGroupName - The resource group name.
 * @param accountName - The name of the share account.
 * @param shareName - The name of the share.
 * @param providerShareSubscriptionId - To locate shareSubscription
 * @param api-version - The api version to use.
 */
export const ProviderShareSubscriptionsAdjust =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ProviderShareSubscriptionsAdjustInput,
    outputSchema: ProviderShareSubscriptionsAdjustOutput,
  }));
// Input Schema
export interface ProviderShareSubscriptionsGetByShareInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  shareName: string;
  providerShareSubscriptionId: string;
}
export const ProviderShareSubscriptionsGetByShareInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    shareName: Schema.String.pipe(T.PathParam()),
    providerShareSubscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName}/providerShareSubscriptions/{providerShareSubscriptionId}",
      apiVersion: "2021-08-01",
    }),
  ) as unknown as Schema.Codec<ProviderShareSubscriptionsGetByShareInput>;

// Output Schema
export interface ProviderShareSubscriptionsGetByShareOutput {
  id?: string;
  name?: string;
  systemData?: {
    createdAt?: string;
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
  };
  type?: string;
}
export const ProviderShareSubscriptionsGetByShareOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdAt: Schema.optional(Schema.String),
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
      }),
    ),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ProviderShareSubscriptionsGetByShareOutput>;

// The operation
/**
 * Get share subscription in a provider share.
 *
 * Get share subscription in a provider share
 *
 * @param subscriptionId - The subscription identifier
 * @param resourceGroupName - The resource group name.
 * @param accountName - The name of the share account.
 * @param shareName - The name of the share.
 * @param providerShareSubscriptionId - To locate shareSubscription
 * @param api-version - The api version to use.
 */
export const ProviderShareSubscriptionsGetByShare =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ProviderShareSubscriptionsGetByShareInput,
    outputSchema: ProviderShareSubscriptionsGetByShareOutput,
  }));
// Input Schema
export interface ProviderShareSubscriptionsListByShareInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  shareName: string;
  $skipToken?: string;
}
export const ProviderShareSubscriptionsListByShareInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    shareName: Schema.String.pipe(T.PathParam()),
    $skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName}/providerShareSubscriptions",
      apiVersion: "2021-08-01",
    }),
  ) as unknown as Schema.Codec<ProviderShareSubscriptionsListByShareInput>;

// Output Schema
export interface ProviderShareSubscriptionsListByShareOutput {
  nextLink?: string;
  value: {
    id?: string;
    name?: string;
    systemData?: {
      createdAt?: string;
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    };
    type?: string;
  }[];
}
export const ProviderShareSubscriptionsListByShareOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        systemData: Schema.optional(
          Schema.Struct({
            createdAt: Schema.optional(Schema.String),
            createdBy: Schema.optional(Schema.String),
            createdByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
            lastModifiedAt: Schema.optional(Schema.String),
            lastModifiedBy: Schema.optional(Schema.String),
            lastModifiedByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
          }),
        ),
        type: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<ProviderShareSubscriptionsListByShareOutput>;

// The operation
/**
 * List of available share subscriptions to a provider share.
 *
 * List share subscriptions in a provider share
 *
 * @param subscriptionId - The subscription identifier
 * @param resourceGroupName - The resource group name.
 * @param accountName - The name of the share account.
 * @param shareName - The name of the share.
 * @param api-version - The api version to use.
 * @param $skipToken - Continuation Token
 */
export const ProviderShareSubscriptionsListByShare =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ProviderShareSubscriptionsListByShareInput,
    outputSchema: ProviderShareSubscriptionsListByShareOutput,
  }));
// Input Schema
export interface ProviderShareSubscriptionsReinstateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  shareName: string;
  providerShareSubscriptionId: string;
  properties?: {
    consumerEmail?: string;
    consumerName?: string;
    consumerTenantName?: string;
    createdAt?: string;
    expirationDate?: string;
    providerEmail?: string;
    providerName?: string;
    sharedAt?: string;
    shareSubscriptionObjectId?: string;
    shareSubscriptionStatus?:
      | "Active"
      | "Revoked"
      | "SourceDeleted"
      | "Revoking";
  };
  id?: string;
  name?: string;
  systemData?: {
    createdAt?: string;
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
  };
  type?: string;
}
export const ProviderShareSubscriptionsReinstateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    shareName: Schema.String.pipe(T.PathParam()),
    providerShareSubscriptionId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        consumerEmail: Schema.optional(Schema.String),
        consumerName: Schema.optional(Schema.String),
        consumerTenantName: Schema.optional(Schema.String),
        createdAt: Schema.optional(Schema.String),
        expirationDate: Schema.optional(Schema.String),
        providerEmail: Schema.optional(Schema.String),
        providerName: Schema.optional(Schema.String),
        sharedAt: Schema.optional(Schema.String),
        shareSubscriptionObjectId: Schema.optional(Schema.String),
        shareSubscriptionStatus: Schema.optional(
          Schema.Literals(["Active", "Revoked", "SourceDeleted", "Revoking"]),
        ),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdAt: Schema.optional(Schema.String),
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
      }),
    ),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName}/providerShareSubscriptions/{providerShareSubscriptionId}/reinstate",
      apiVersion: "2021-08-01",
    }),
  ) as unknown as Schema.Codec<ProviderShareSubscriptionsReinstateInput>;

// Output Schema
export interface ProviderShareSubscriptionsReinstateOutput {
  id?: string;
  name?: string;
  systemData?: {
    createdAt?: string;
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
  };
  type?: string;
}
export const ProviderShareSubscriptionsReinstateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdAt: Schema.optional(Schema.String),
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
      }),
    ),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ProviderShareSubscriptionsReinstateOutput>;

// The operation
/**
 * Reinstate share subscription in a provider share.
 *
 * Reinstate share subscription in a provider share
 *
 * @param subscriptionId - The subscription identifier
 * @param resourceGroupName - The resource group name.
 * @param accountName - The name of the share account.
 * @param shareName - The name of the share.
 * @param providerShareSubscriptionId - To locate shareSubscription
 * @param api-version - The api version to use.
 */
export const ProviderShareSubscriptionsReinstate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ProviderShareSubscriptionsReinstateInput,
    outputSchema: ProviderShareSubscriptionsReinstateOutput,
  }));
// Input Schema
export interface ProviderShareSubscriptionsRevokeInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  shareName: string;
  providerShareSubscriptionId: string;
}
export const ProviderShareSubscriptionsRevokeInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    shareName: Schema.String.pipe(T.PathParam()),
    providerShareSubscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName}/providerShareSubscriptions/{providerShareSubscriptionId}/revoke",
      apiVersion: "2021-08-01",
    }),
  ) as unknown as Schema.Codec<ProviderShareSubscriptionsRevokeInput>;

// Output Schema
export interface ProviderShareSubscriptionsRevokeOutput {
  id?: string;
  name?: string;
  systemData?: {
    createdAt?: string;
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
  };
  type?: string;
}
export const ProviderShareSubscriptionsRevokeOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdAt: Schema.optional(Schema.String),
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
      }),
    ),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ProviderShareSubscriptionsRevokeOutput>;

// The operation
/**
 * Revoke share subscription in a provider share.
 *
 * Revoke share subscription in a provider share
 *
 * @param subscriptionId - The subscription identifier
 * @param resourceGroupName - The resource group name.
 * @param accountName - The name of the share account.
 * @param shareName - The name of the share.
 * @param providerShareSubscriptionId - To locate shareSubscription
 * @param api-version - The api version to use.
 */
export const ProviderShareSubscriptionsRevoke =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ProviderShareSubscriptionsRevokeInput,
    outputSchema: ProviderShareSubscriptionsRevokeOutput,
  }));
// Input Schema
export interface SharesCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  shareName: string;
  properties?: {
    createdAt?: string;
    description?: string;
    provisioningState?:
      | "Succeeded"
      | "Creating"
      | "Deleting"
      | "Moving"
      | "Failed";
    shareKind?: "CopyBased" | "InPlace";
    terms?: string;
    userEmail?: string;
    userName?: string;
  };
  id?: string;
  name?: string;
  systemData?: {
    createdAt?: string;
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
  };
  type?: string;
}
export const SharesCreateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  shareName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      createdAt: Schema.optional(Schema.String),
      description: Schema.optional(Schema.String),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Succeeded",
          "Creating",
          "Deleting",
          "Moving",
          "Failed",
        ]),
      ),
      shareKind: Schema.optional(Schema.Literals(["CopyBased", "InPlace"])),
      terms: Schema.optional(Schema.String),
      userEmail: Schema.optional(Schema.String),
      userName: Schema.optional(Schema.String),
    }),
  ),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdAt: Schema.optional(Schema.String),
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
    }),
  ),
  type: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName}",
    apiVersion: "2021-08-01",
  }),
) as unknown as Schema.Codec<SharesCreateInput>;

// Output Schema
export interface SharesCreateOutput {
  id?: string;
  name?: string;
  systemData?: {
    createdAt?: string;
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
  };
  type?: string;
}
export const SharesCreateOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdAt: Schema.optional(Schema.String),
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
    }),
  ),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<SharesCreateOutput>;

// The operation
/**
 * Create a share in the given account.
 *
 * Create a share
 *
 * @param subscriptionId - The subscription identifier
 * @param resourceGroupName - The resource group name.
 * @param accountName - The name of the share account.
 * @param shareName - The name of the share.
 * @param api-version - The api version to use.
 */
export const SharesCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: SharesCreateInput,
  outputSchema: SharesCreateOutput,
}));
// Input Schema
export interface SharesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  shareName: string;
}
export const SharesDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  shareName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName}",
    apiVersion: "2021-08-01",
  }),
) as unknown as Schema.Codec<SharesDeleteInput>;

// Output Schema
export interface SharesDeleteOutput {
  endTime?: string;
  error?: {
    code: string;
    details?: unknown[];
    message: string;
    target?: string;
  };
  startTime?: string;
  status:
    | "Accepted"
    | "InProgress"
    | "TransientFailure"
    | "Succeeded"
    | "Failed"
    | "Canceled";
}
export const SharesDeleteOutput = /*@__PURE__*/ Schema.Struct({
  endTime: Schema.optional(Schema.String),
  error: Schema.optional(
    Schema.Struct({
      code: Schema.String,
      details: Schema.optional(Schema.Array(Schema.Unknown)),
      message: Schema.String,
      target: Schema.optional(Schema.String),
    }),
  ),
  startTime: Schema.optional(Schema.String),
  status: Schema.Literals([
    "Accepted",
    "InProgress",
    "TransientFailure",
    "Succeeded",
    "Failed",
    "Canceled",
  ]),
}) as unknown as Schema.Codec<SharesDeleteOutput>;

// The operation
/**
 * Deletes a share
 *
 * Delete a share
 *
 * @param subscriptionId - The subscription identifier
 * @param resourceGroupName - The resource group name.
 * @param accountName - The name of the share account.
 * @param shareName - The name of the share.
 * @param api-version - The api version to use.
 */
export const SharesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: SharesDeleteInput,
  outputSchema: SharesDeleteOutput,
}));
// Input Schema
export interface SharesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  shareName: string;
}
export const SharesGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  shareName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName}",
    apiVersion: "2021-08-01",
  }),
) as unknown as Schema.Codec<SharesGetInput>;

// Output Schema
export interface SharesGetOutput {
  id?: string;
  name?: string;
  systemData?: {
    createdAt?: string;
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
  };
  type?: string;
}
export const SharesGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdAt: Schema.optional(Schema.String),
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
    }),
  ),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<SharesGetOutput>;

// The operation
/**
 * Get a specified share
 *
 * Get a share
 *
 * @param subscriptionId - The subscription identifier
 * @param resourceGroupName - The resource group name.
 * @param accountName - The name of the share account.
 * @param shareName - The name of the share to retrieve.
 * @param api-version - The api version to use.
 */
export const SharesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: SharesGetInput,
  outputSchema: SharesGetOutput,
}));
// Input Schema
export interface SharesListByAccountInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  $skipToken?: string;
  $filter?: string;
  $orderby?: string;
}
export const SharesListByAccountInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    $skipToken: Schema.optional(Schema.String),
    $filter: Schema.optional(Schema.String),
    $orderby: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares",
      apiVersion: "2021-08-01",
    }),
  ) as unknown as Schema.Codec<SharesListByAccountInput>;

// Output Schema
export interface SharesListByAccountOutput {
  nextLink?: string;
  value: {
    id?: string;
    name?: string;
    systemData?: {
      createdAt?: string;
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    };
    type?: string;
  }[];
}
export const SharesListByAccountOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        systemData: Schema.optional(
          Schema.Struct({
            createdAt: Schema.optional(Schema.String),
            createdBy: Schema.optional(Schema.String),
            createdByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
            lastModifiedAt: Schema.optional(Schema.String),
            lastModifiedBy: Schema.optional(Schema.String),
            lastModifiedByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
          }),
        ),
        type: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<SharesListByAccountOutput>;

// The operation
/**
 * List of available shares under an account.
 *
 * List shares in an account
 *
 * @param subscriptionId - The subscription identifier
 * @param resourceGroupName - The resource group name.
 * @param accountName - The name of the share account.
 * @param api-version - The api version to use.
 * @param $skipToken - Continuation Token
 * @param $filter - Filters the results using OData syntax.
 * @param $orderby - Sorts the results using OData syntax.
 */
export const SharesListByAccount = /*@__PURE__*/ API.make(() => ({
  inputSchema: SharesListByAccountInput,
  outputSchema: SharesListByAccountOutput,
}));
// Input Schema
export interface SharesListSynchronizationDetailsInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  shareName: string;
  $skipToken?: string;
  $filter?: string;
  $orderby?: string;
  consumerEmail?: string;
  consumerName?: string;
  consumerTenantName?: string;
  durationMs?: number;
  endTime?: string;
  message?: string;
  startTime?: string;
  status?: string;
  synchronizationId?: string;
  synchronizationMode?: "Incremental" | "FullSync";
}
export const SharesListSynchronizationDetailsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    shareName: Schema.String.pipe(T.PathParam()),
    $skipToken: Schema.optional(Schema.String),
    $filter: Schema.optional(Schema.String),
    $orderby: Schema.optional(Schema.String),
    consumerEmail: Schema.optional(Schema.String),
    consumerName: Schema.optional(Schema.String),
    consumerTenantName: Schema.optional(Schema.String),
    durationMs: Schema.optional(Schema.Number),
    endTime: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    synchronizationId: Schema.optional(Schema.String),
    synchronizationMode: Schema.optional(
      Schema.Literals(["Incremental", "FullSync"]),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName}/listSynchronizationDetails",
      apiVersion: "2021-08-01",
    }),
  ) as unknown as Schema.Codec<SharesListSynchronizationDetailsInput>;

// Output Schema
export interface SharesListSynchronizationDetailsOutput {
  nextLink?: string;
  value: {
    dataSetId?: string;
    dataSetType?:
      | "Blob"
      | "Container"
      | "BlobFolder"
      | "AdlsGen2FileSystem"
      | "AdlsGen2Folder"
      | "AdlsGen2File"
      | "AdlsGen1Folder"
      | "AdlsGen1File"
      | "KustoCluster"
      | "KustoDatabase"
      | "KustoTable"
      | "SqlDBTable"
      | "SqlDWTable"
      | "SynapseWorkspaceSqlPoolTable";
    durationMs?: number;
    endTime?: string;
    filesRead?: number;
    filesWritten?: number;
    message?: string;
    name?: string;
    rowsCopied?: number;
    rowsRead?: number;
    sizeRead?: number;
    sizeWritten?: number;
    startTime?: string;
    status?: string;
    vCore?: number;
  }[];
}
export const SharesListSynchronizationDetailsOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.Array(
      Schema.Struct({
        dataSetId: Schema.optional(Schema.String),
        dataSetType: Schema.optional(
          Schema.Literals([
            "Blob",
            "Container",
            "BlobFolder",
            "AdlsGen2FileSystem",
            "AdlsGen2Folder",
            "AdlsGen2File",
            "AdlsGen1Folder",
            "AdlsGen1File",
            "KustoCluster",
            "KustoDatabase",
            "KustoTable",
            "SqlDBTable",
            "SqlDWTable",
            "SynapseWorkspaceSqlPoolTable",
          ]),
        ),
        durationMs: Schema.optional(Schema.Number),
        endTime: Schema.optional(Schema.String),
        filesRead: Schema.optional(Schema.Number),
        filesWritten: Schema.optional(Schema.Number),
        message: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        rowsCopied: Schema.optional(Schema.Number),
        rowsRead: Schema.optional(Schema.Number),
        sizeRead: Schema.optional(Schema.Number),
        sizeWritten: Schema.optional(Schema.Number),
        startTime: Schema.optional(Schema.String),
        status: Schema.optional(Schema.String),
        vCore: Schema.optional(Schema.Number),
      }),
    ),
  }) as unknown as Schema.Codec<SharesListSynchronizationDetailsOutput>;

// The operation
/**
 * List data set level details for a share synchronization
 *
 * List synchronization details
 *
 * @param subscriptionId - The subscription identifier
 * @param resourceGroupName - The resource group name.
 * @param accountName - The name of the share account.
 * @param shareName - The name of the share.
 * @param api-version - The api version to use.
 * @param $skipToken - Continuation token
 * @param $filter - Filters the results using OData syntax.
 * @param $orderby - Sorts the results using OData syntax.
 */
export const SharesListSynchronizationDetails =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SharesListSynchronizationDetailsInput,
    outputSchema: SharesListSynchronizationDetailsOutput,
  }));
// Input Schema
export interface SharesListSynchronizationsInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  shareName: string;
  $skipToken?: string;
  $filter?: string;
  $orderby?: string;
}
export const SharesListSynchronizationsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    shareName: Schema.String.pipe(T.PathParam()),
    $skipToken: Schema.optional(Schema.String),
    $filter: Schema.optional(Schema.String),
    $orderby: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName}/listSynchronizations",
      apiVersion: "2021-08-01",
    }),
  ) as unknown as Schema.Codec<SharesListSynchronizationsInput>;

// Output Schema
export interface SharesListSynchronizationsOutput {
  nextLink?: string;
  value: {
    consumerEmail?: string;
    consumerName?: string;
    consumerTenantName?: string;
    durationMs?: number;
    endTime?: string;
    message?: string;
    startTime?: string;
    status?: string;
    synchronizationId?: string;
    synchronizationMode?: "Incremental" | "FullSync";
  }[];
}
export const SharesListSynchronizationsOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.Array(
      Schema.Struct({
        consumerEmail: Schema.optional(Schema.String),
        consumerName: Schema.optional(Schema.String),
        consumerTenantName: Schema.optional(Schema.String),
        durationMs: Schema.optional(Schema.Number),
        endTime: Schema.optional(Schema.String),
        message: Schema.optional(Schema.String),
        startTime: Schema.optional(Schema.String),
        status: Schema.optional(Schema.String),
        synchronizationId: Schema.optional(Schema.String),
        synchronizationMode: Schema.optional(
          Schema.Literals(["Incremental", "FullSync"]),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<SharesListSynchronizationsOutput>;

// The operation
/**
 * List Synchronizations in a share
 *
 * List synchronizations of a share
 *
 * @param subscriptionId - The subscription identifier
 * @param resourceGroupName - The resource group name.
 * @param accountName - The name of the share account.
 * @param shareName - The name of the share.
 * @param api-version - The api version to use.
 * @param $skipToken - Continuation token
 * @param $filter - Filters the results using OData syntax.
 * @param $orderby - Sorts the results using OData syntax.
 */
export const SharesListSynchronizations = /*@__PURE__*/ API.make(() => ({
  inputSchema: SharesListSynchronizationsInput,
  outputSchema: SharesListSynchronizationsOutput,
}));
// Input Schema
export interface ShareSubscriptionsCancelSynchronizationInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  shareSubscriptionName: string;
  durationMs?: number;
  endTime?: string;
  message?: string;
  startTime?: string;
  status?: string;
  synchronizationId: string;
  synchronizationMode?: "Incremental" | "FullSync";
}
export const ShareSubscriptionsCancelSynchronizationInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    shareSubscriptionName: Schema.String.pipe(T.PathParam()),
    durationMs: Schema.optional(Schema.Number),
    endTime: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    synchronizationId: Schema.String,
    synchronizationMode: Schema.optional(
      Schema.Literals(["Incremental", "FullSync"]),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shareSubscriptions/{shareSubscriptionName}/cancelSynchronization",
      apiVersion: "2021-08-01",
    }),
  ) as unknown as Schema.Codec<ShareSubscriptionsCancelSynchronizationInput>;

// Output Schema
export interface ShareSubscriptionsCancelSynchronizationOutput {
  durationMs?: number;
  endTime?: string;
  message?: string;
  startTime?: string;
  status?: string;
  synchronizationId: string;
  synchronizationMode?: "Incremental" | "FullSync";
}
export const ShareSubscriptionsCancelSynchronizationOutput =
  /*@__PURE__*/ Schema.Struct({
    durationMs: Schema.optional(Schema.Number),
    endTime: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    synchronizationId: Schema.String,
    synchronizationMode: Schema.optional(
      Schema.Literals(["Incremental", "FullSync"]),
    ),
  }) as unknown as Schema.Codec<ShareSubscriptionsCancelSynchronizationOutput>;

// The operation
/**
 * Request cancellation of a data share snapshot
 *
 * Request to cancel a synchronization.
 *
 * @param subscriptionId - The subscription identifier
 * @param resourceGroupName - The resource group name.
 * @param accountName - The name of the share account.
 * @param shareSubscriptionName - The name of the shareSubscription.
 * @param api-version - The api version to use.
 */
export const ShareSubscriptionsCancelSynchronization =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ShareSubscriptionsCancelSynchronizationInput,
    outputSchema: ShareSubscriptionsCancelSynchronizationOutput,
  }));
// Input Schema
export interface ShareSubscriptionsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  shareSubscriptionName: string;
  properties: {
    createdAt?: string;
    expirationDate?: string;
    invitationId: string;
    providerEmail?: string;
    providerName?: string;
    providerTenantName?: string;
    provisioningState?:
      | "Succeeded"
      | "Creating"
      | "Deleting"
      | "Moving"
      | "Failed";
    shareDescription?: string;
    shareKind?: "CopyBased" | "InPlace";
    shareName?: string;
    shareSubscriptionStatus?:
      | "Active"
      | "Revoked"
      | "SourceDeleted"
      | "Revoking";
    shareTerms?: string;
    sourceShareLocation: string;
    userEmail?: string;
    userName?: string;
  };
  id?: string;
  name?: string;
  systemData?: {
    createdAt?: string;
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
  };
  type?: string;
}
export const ShareSubscriptionsCreateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    shareSubscriptionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      createdAt: Schema.optional(Schema.String),
      expirationDate: Schema.optional(Schema.String),
      invitationId: Schema.String,
      providerEmail: Schema.optional(Schema.String),
      providerName: Schema.optional(Schema.String),
      providerTenantName: Schema.optional(Schema.String),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Succeeded",
          "Creating",
          "Deleting",
          "Moving",
          "Failed",
        ]),
      ),
      shareDescription: Schema.optional(Schema.String),
      shareKind: Schema.optional(Schema.Literals(["CopyBased", "InPlace"])),
      shareName: Schema.optional(Schema.String),
      shareSubscriptionStatus: Schema.optional(
        Schema.Literals(["Active", "Revoked", "SourceDeleted", "Revoking"]),
      ),
      shareTerms: Schema.optional(Schema.String),
      sourceShareLocation: Schema.String,
      userEmail: Schema.optional(Schema.String),
      userName: Schema.optional(Schema.String),
    }),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdAt: Schema.optional(Schema.String),
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
      }),
    ),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shareSubscriptions/{shareSubscriptionName}",
      apiVersion: "2021-08-01",
    }),
  ) as unknown as Schema.Codec<ShareSubscriptionsCreateInput>;

// Output Schema
export interface ShareSubscriptionsCreateOutput {
  id?: string;
  name?: string;
  systemData?: {
    createdAt?: string;
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
  };
  type?: string;
}
export const ShareSubscriptionsCreateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdAt: Schema.optional(Schema.String),
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
      }),
    ),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ShareSubscriptionsCreateOutput>;

// The operation
/**
 * Create shareSubscription in an account.
 *
 * Create a shareSubscription in an account
 *
 * @param subscriptionId - The subscription identifier
 * @param resourceGroupName - The resource group name.
 * @param accountName - The name of the share account.
 * @param shareSubscriptionName - The name of the shareSubscription.
 * @param api-version - The api version to use.
 */
export const ShareSubscriptionsCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ShareSubscriptionsCreateInput,
  outputSchema: ShareSubscriptionsCreateOutput,
}));
// Input Schema
export interface ShareSubscriptionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  shareSubscriptionName: string;
}
export const ShareSubscriptionsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    shareSubscriptionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shareSubscriptions/{shareSubscriptionName}",
      apiVersion: "2021-08-01",
    }),
  ) as unknown as Schema.Codec<ShareSubscriptionsDeleteInput>;

// Output Schema
export interface ShareSubscriptionsDeleteOutput {
  endTime?: string;
  error?: {
    code: string;
    details?: unknown[];
    message: string;
    target?: string;
  };
  startTime?: string;
  status:
    | "Accepted"
    | "InProgress"
    | "TransientFailure"
    | "Succeeded"
    | "Failed"
    | "Canceled";
}
export const ShareSubscriptionsDeleteOutput =
  /*@__PURE__*/ Schema.Struct({
    endTime: Schema.optional(Schema.String),
    error: Schema.optional(
      Schema.Struct({
        code: Schema.String,
        details: Schema.optional(Schema.Array(Schema.Unknown)),
        message: Schema.String,
        target: Schema.optional(Schema.String),
      }),
    ),
    startTime: Schema.optional(Schema.String),
    status: Schema.Literals([
      "Accepted",
      "InProgress",
      "TransientFailure",
      "Succeeded",
      "Failed",
      "Canceled",
    ]),
  }) as unknown as Schema.Codec<ShareSubscriptionsDeleteOutput>;

// The operation
/**
 * Delete shareSubscription in an account.
 *
 * Delete a shareSubscription in an account
 *
 * @param subscriptionId - The subscription identifier
 * @param resourceGroupName - The resource group name.
 * @param accountName - The name of the share account.
 * @param shareSubscriptionName - The name of the shareSubscription.
 * @param api-version - The api version to use.
 */
export const ShareSubscriptionsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: ShareSubscriptionsDeleteInput,
  outputSchema: ShareSubscriptionsDeleteOutput,
}));
// Input Schema
export interface ShareSubscriptionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  shareSubscriptionName: string;
}
export const ShareSubscriptionsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    shareSubscriptionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shareSubscriptions/{shareSubscriptionName}",
      apiVersion: "2021-08-01",
    }),
  ) as unknown as Schema.Codec<ShareSubscriptionsGetInput>;

// Output Schema
export interface ShareSubscriptionsGetOutput {
  id?: string;
  name?: string;
  systemData?: {
    createdAt?: string;
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
  };
  type?: string;
}
export const ShareSubscriptionsGetOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdAt: Schema.optional(Schema.String),
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
      }),
    ),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ShareSubscriptionsGetOutput>;

// The operation
/**
 * Get shareSubscription in an account.
 *
 * Get a shareSubscription in an account
 *
 * @param subscriptionId - The subscription identifier
 * @param resourceGroupName - The resource group name.
 * @param accountName - The name of the share account.
 * @param shareSubscriptionName - The name of the shareSubscription.
 * @param api-version - The api version to use.
 */
export const ShareSubscriptionsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ShareSubscriptionsGetInput,
  outputSchema: ShareSubscriptionsGetOutput,
}));
// Input Schema
export interface ShareSubscriptionsListByAccountInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  $skipToken?: string;
  $filter?: string;
  $orderby?: string;
}
export const ShareSubscriptionsListByAccountInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    $skipToken: Schema.optional(Schema.String),
    $filter: Schema.optional(Schema.String),
    $orderby: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shareSubscriptions",
      apiVersion: "2021-08-01",
    }),
  ) as unknown as Schema.Codec<ShareSubscriptionsListByAccountInput>;

// Output Schema
export interface ShareSubscriptionsListByAccountOutput {
  nextLink?: string;
  value: {
    id?: string;
    name?: string;
    systemData?: {
      createdAt?: string;
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    };
    type?: string;
  }[];
}
export const ShareSubscriptionsListByAccountOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        systemData: Schema.optional(
          Schema.Struct({
            createdAt: Schema.optional(Schema.String),
            createdBy: Schema.optional(Schema.String),
            createdByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
            lastModifiedAt: Schema.optional(Schema.String),
            lastModifiedBy: Schema.optional(Schema.String),
            lastModifiedByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
          }),
        ),
        type: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<ShareSubscriptionsListByAccountOutput>;

// The operation
/**
 * List of available share subscriptions under an account.
 *
 * List share subscriptions in an account
 *
 * @param subscriptionId - The subscription identifier
 * @param resourceGroupName - The resource group name.
 * @param accountName - The name of the share account.
 * @param api-version - The api version to use.
 * @param $skipToken - Continuation Token
 * @param $filter - Filters the results using OData syntax.
 * @param $orderby - Sorts the results using OData syntax.
 */
export const ShareSubscriptionsListByAccount =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ShareSubscriptionsListByAccountInput,
    outputSchema: ShareSubscriptionsListByAccountOutput,
  }));
// Input Schema
export interface ShareSubscriptionsListSourceShareSynchronizationSettingsInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  shareSubscriptionName: string;
  $skipToken?: string;
}
export const ShareSubscriptionsListSourceShareSynchronizationSettingsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    shareSubscriptionName: Schema.String.pipe(T.PathParam()),
    $skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shareSubscriptions/{shareSubscriptionName}/listSourceShareSynchronizationSettings",
      apiVersion: "2021-08-01",
    }),
  ) as unknown as Schema.Codec<ShareSubscriptionsListSourceShareSynchronizationSettingsInput>;

// Output Schema
export interface ShareSubscriptionsListSourceShareSynchronizationSettingsOutput {
  nextLink?: string;
  value: { kind: "ScheduleBased" }[];
}
export const ShareSubscriptionsListSourceShareSynchronizationSettingsOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.Array(
      Schema.Struct({
        kind: Schema.Literals(["ScheduleBased"]),
      }),
    ),
  }) as unknown as Schema.Codec<ShareSubscriptionsListSourceShareSynchronizationSettingsOutput>;

// The operation
/**
 * Get source share synchronization settings for a shareSubscription.
 *
 * Get synchronization settings set on a share
 *
 * @param subscriptionId - The subscription identifier
 * @param resourceGroupName - The resource group name.
 * @param accountName - The name of the share account.
 * @param shareSubscriptionName - The name of the shareSubscription.
 * @param api-version - The api version to use.
 * @param $skipToken - Continuation token
 */
export const ShareSubscriptionsListSourceShareSynchronizationSettings =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ShareSubscriptionsListSourceShareSynchronizationSettingsInput,
    outputSchema:
      ShareSubscriptionsListSourceShareSynchronizationSettingsOutput,
  }));
// Input Schema
export interface ShareSubscriptionsListSynchronizationDetailsInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  shareSubscriptionName: string;
  $skipToken?: string;
  $filter?: string;
  $orderby?: string;
  durationMs?: number;
  endTime?: string;
  message?: string;
  startTime?: string;
  status?: string;
  synchronizationId: string;
  synchronizationMode?: "Incremental" | "FullSync";
}
export const ShareSubscriptionsListSynchronizationDetailsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    shareSubscriptionName: Schema.String.pipe(T.PathParam()),
    $skipToken: Schema.optional(Schema.String),
    $filter: Schema.optional(Schema.String),
    $orderby: Schema.optional(Schema.String),
    durationMs: Schema.optional(Schema.Number),
    endTime: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    synchronizationId: Schema.String,
    synchronizationMode: Schema.optional(
      Schema.Literals(["Incremental", "FullSync"]),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shareSubscriptions/{shareSubscriptionName}/listSynchronizationDetails",
      apiVersion: "2021-08-01",
    }),
  ) as unknown as Schema.Codec<ShareSubscriptionsListSynchronizationDetailsInput>;

// Output Schema
export interface ShareSubscriptionsListSynchronizationDetailsOutput {
  nextLink?: string;
  value: {
    dataSetId?: string;
    dataSetType?:
      | "Blob"
      | "Container"
      | "BlobFolder"
      | "AdlsGen2FileSystem"
      | "AdlsGen2Folder"
      | "AdlsGen2File"
      | "AdlsGen1Folder"
      | "AdlsGen1File"
      | "KustoCluster"
      | "KustoDatabase"
      | "KustoTable"
      | "SqlDBTable"
      | "SqlDWTable"
      | "SynapseWorkspaceSqlPoolTable";
    durationMs?: number;
    endTime?: string;
    filesRead?: number;
    filesWritten?: number;
    message?: string;
    name?: string;
    rowsCopied?: number;
    rowsRead?: number;
    sizeRead?: number;
    sizeWritten?: number;
    startTime?: string;
    status?: string;
    vCore?: number;
  }[];
}
export const ShareSubscriptionsListSynchronizationDetailsOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.Array(
      Schema.Struct({
        dataSetId: Schema.optional(Schema.String),
        dataSetType: Schema.optional(
          Schema.Literals([
            "Blob",
            "Container",
            "BlobFolder",
            "AdlsGen2FileSystem",
            "AdlsGen2Folder",
            "AdlsGen2File",
            "AdlsGen1Folder",
            "AdlsGen1File",
            "KustoCluster",
            "KustoDatabase",
            "KustoTable",
            "SqlDBTable",
            "SqlDWTable",
            "SynapseWorkspaceSqlPoolTable",
          ]),
        ),
        durationMs: Schema.optional(Schema.Number),
        endTime: Schema.optional(Schema.String),
        filesRead: Schema.optional(Schema.Number),
        filesWritten: Schema.optional(Schema.Number),
        message: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        rowsCopied: Schema.optional(Schema.Number),
        rowsRead: Schema.optional(Schema.Number),
        sizeRead: Schema.optional(Schema.Number),
        sizeWritten: Schema.optional(Schema.Number),
        startTime: Schema.optional(Schema.String),
        status: Schema.optional(Schema.String),
        vCore: Schema.optional(Schema.Number),
      }),
    ),
  }) as unknown as Schema.Codec<ShareSubscriptionsListSynchronizationDetailsOutput>;

// The operation
/**
 * List data set level details for a share subscription synchronization
 *
 * List synchronization details
 *
 * @param subscriptionId - The subscription identifier
 * @param resourceGroupName - The resource group name.
 * @param accountName - The name of the share account.
 * @param shareSubscriptionName - The name of the share subscription.
 * @param api-version - The api version to use.
 * @param $skipToken - Continuation token
 * @param $filter - Filters the results using OData syntax.
 * @param $orderby - Sorts the results using OData syntax.
 */
export const ShareSubscriptionsListSynchronizationDetails =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ShareSubscriptionsListSynchronizationDetailsInput,
    outputSchema: ShareSubscriptionsListSynchronizationDetailsOutput,
  }));
// Input Schema
export interface ShareSubscriptionsListSynchronizationsInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  shareSubscriptionName: string;
  $skipToken?: string;
  $filter?: string;
  $orderby?: string;
}
export const ShareSubscriptionsListSynchronizationsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    shareSubscriptionName: Schema.String.pipe(T.PathParam()),
    $skipToken: Schema.optional(Schema.String),
    $filter: Schema.optional(Schema.String),
    $orderby: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shareSubscriptions/{shareSubscriptionName}/listSynchronizations",
      apiVersion: "2021-08-01",
    }),
  ) as unknown as Schema.Codec<ShareSubscriptionsListSynchronizationsInput>;

// Output Schema
export interface ShareSubscriptionsListSynchronizationsOutput {
  nextLink?: string;
  value: {
    durationMs?: number;
    endTime?: string;
    message?: string;
    startTime?: string;
    status?: string;
    synchronizationId: string;
    synchronizationMode?: "Incremental" | "FullSync";
  }[];
}
export const ShareSubscriptionsListSynchronizationsOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.Array(
      Schema.Struct({
        durationMs: Schema.optional(Schema.Number),
        endTime: Schema.optional(Schema.String),
        message: Schema.optional(Schema.String),
        startTime: Schema.optional(Schema.String),
        status: Schema.optional(Schema.String),
        synchronizationId: Schema.String,
        synchronizationMode: Schema.optional(
          Schema.Literals(["Incremental", "FullSync"]),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<ShareSubscriptionsListSynchronizationsOutput>;

// The operation
/**
 * List Synchronizations in a share subscription.
 *
 * List synchronizations of a share subscription
 *
 * @param subscriptionId - The subscription identifier
 * @param resourceGroupName - The resource group name.
 * @param accountName - The name of the share account.
 * @param shareSubscriptionName - The name of the share subscription.
 * @param api-version - The api version to use.
 * @param $skipToken - Continuation token
 * @param $filter - Filters the results using OData syntax.
 * @param $orderby - Sorts the results using OData syntax.
 */
export const ShareSubscriptionsListSynchronizations =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ShareSubscriptionsListSynchronizationsInput,
    outputSchema: ShareSubscriptionsListSynchronizationsOutput,
  }));
// Input Schema
export interface ShareSubscriptionsSynchronizeInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  shareSubscriptionName: string;
  synchronizationMode?: "Incremental" | "FullSync";
}
export const ShareSubscriptionsSynchronizeInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    shareSubscriptionName: Schema.String.pipe(T.PathParam()),
    synchronizationMode: Schema.optional(
      Schema.Literals(["Incremental", "FullSync"]),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shareSubscriptions/{shareSubscriptionName}/synchronize",
      apiVersion: "2021-08-01",
    }),
  ) as unknown as Schema.Codec<ShareSubscriptionsSynchronizeInput>;

// Output Schema
export interface ShareSubscriptionsSynchronizeOutput {
  durationMs?: number;
  endTime?: string;
  message?: string;
  startTime?: string;
  status?: string;
  synchronizationId: string;
  synchronizationMode?: "Incremental" | "FullSync";
}
export const ShareSubscriptionsSynchronizeOutput =
  /*@__PURE__*/ Schema.Struct({
    durationMs: Schema.optional(Schema.Number),
    endTime: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    synchronizationId: Schema.String,
    synchronizationMode: Schema.optional(
      Schema.Literals(["Incremental", "FullSync"]),
    ),
  }) as unknown as Schema.Codec<ShareSubscriptionsSynchronizeOutput>;

// The operation
/**
 * Initiate an asynchronous data share job
 *
 * Initiate a copy
 *
 * @param subscriptionId - The subscription identifier
 * @param resourceGroupName - The resource group name.
 * @param accountName - The name of the share account.
 * @param shareSubscriptionName - The name of share subscription
 * @param api-version - The api version to use.
 */
export const ShareSubscriptionsSynchronize =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ShareSubscriptionsSynchronizeInput,
    outputSchema: ShareSubscriptionsSynchronizeOutput,
  }));
// Input Schema
export interface SynchronizationSettingsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  shareName: string;
  synchronizationSettingName: string;
  kind: "ScheduleBased";
  id?: string;
  name?: string;
  systemData?: {
    createdAt?: string;
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
  };
  type?: string;
}
export const SynchronizationSettingsCreateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    shareName: Schema.String.pipe(T.PathParam()),
    synchronizationSettingName: Schema.String.pipe(T.PathParam()),
    kind: Schema.Literals(["ScheduleBased"]),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdAt: Schema.optional(Schema.String),
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
      }),
    ),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName}/synchronizationSettings/{synchronizationSettingName}",
      apiVersion: "2021-08-01",
    }),
  ) as unknown as Schema.Codec<SynchronizationSettingsCreateInput>;

// Output Schema
export interface SynchronizationSettingsCreateOutput {
  id?: string;
  name?: string;
  systemData?: {
    createdAt?: string;
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
  };
  type?: string;
}
export const SynchronizationSettingsCreateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdAt: Schema.optional(Schema.String),
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
      }),
    ),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SynchronizationSettingsCreateOutput>;

// The operation
/**
 * Adds a new synchronization setting to an existing share.
 *
 * Create a synchronizationSetting
 *
 * @param subscriptionId - The subscription identifier
 * @param resourceGroupName - The resource group name.
 * @param accountName - The name of the share account.
 * @param shareName - The name of the share to add the synchronization setting to.
 * @param synchronizationSettingName - The name of the synchronizationSetting.
 * @param api-version - The api version to use.
 */
export const SynchronizationSettingsCreate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SynchronizationSettingsCreateInput,
    outputSchema: SynchronizationSettingsCreateOutput,
  }));
// Input Schema
export interface SynchronizationSettingsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  shareName: string;
  synchronizationSettingName: string;
}
export const SynchronizationSettingsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    shareName: Schema.String.pipe(T.PathParam()),
    synchronizationSettingName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName}/synchronizationSettings/{synchronizationSettingName}",
      apiVersion: "2021-08-01",
    }),
  ) as unknown as Schema.Codec<SynchronizationSettingsDeleteInput>;

// Output Schema
export interface SynchronizationSettingsDeleteOutput {
  endTime?: string;
  error?: {
    code: string;
    details?: unknown[];
    message: string;
    target?: string;
  };
  startTime?: string;
  status:
    | "Accepted"
    | "InProgress"
    | "TransientFailure"
    | "Succeeded"
    | "Failed"
    | "Canceled";
}
export const SynchronizationSettingsDeleteOutput =
  /*@__PURE__*/ Schema.Struct({
    endTime: Schema.optional(Schema.String),
    error: Schema.optional(
      Schema.Struct({
        code: Schema.String,
        details: Schema.optional(Schema.Array(Schema.Unknown)),
        message: Schema.String,
        target: Schema.optional(Schema.String),
      }),
    ),
    startTime: Schema.optional(Schema.String),
    status: Schema.Literals([
      "Accepted",
      "InProgress",
      "TransientFailure",
      "Succeeded",
      "Failed",
      "Canceled",
    ]),
  }) as unknown as Schema.Codec<SynchronizationSettingsDeleteOutput>;

// The operation
/**
 * Delete synchronizationSetting in a share.
 *
 * Delete a synchronizationSetting in a share
 *
 * @param subscriptionId - The subscription identifier
 * @param resourceGroupName - The resource group name.
 * @param accountName - The name of the share account.
 * @param shareName - The name of the share.
 * @param synchronizationSettingName - The name of the synchronizationSetting .
 * @param api-version - The api version to use.
 */
export const SynchronizationSettingsDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SynchronizationSettingsDeleteInput,
    outputSchema: SynchronizationSettingsDeleteOutput,
  }));
// Input Schema
export interface SynchronizationSettingsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  shareName: string;
  synchronizationSettingName: string;
}
export const SynchronizationSettingsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    shareName: Schema.String.pipe(T.PathParam()),
    synchronizationSettingName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName}/synchronizationSettings/{synchronizationSettingName}",
      apiVersion: "2021-08-01",
    }),
  ) as unknown as Schema.Codec<SynchronizationSettingsGetInput>;

// Output Schema
export interface SynchronizationSettingsGetOutput {
  id?: string;
  name?: string;
  systemData?: {
    createdAt?: string;
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
  };
  type?: string;
}
export const SynchronizationSettingsGetOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdAt: Schema.optional(Schema.String),
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
      }),
    ),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SynchronizationSettingsGetOutput>;

// The operation
/**
 * Get synchronizationSetting in a share.
 *
 * Get a synchronizationSetting in a share
 *
 * @param subscriptionId - The subscription identifier
 * @param resourceGroupName - The resource group name.
 * @param accountName - The name of the share account.
 * @param shareName - The name of the share.
 * @param synchronizationSettingName - The name of the synchronizationSetting.
 * @param api-version - The api version to use.
 */
export const SynchronizationSettingsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: SynchronizationSettingsGetInput,
  outputSchema: SynchronizationSettingsGetOutput,
}));
// Input Schema
export interface SynchronizationSettingsListByShareInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  shareName: string;
  $skipToken?: string;
}
export const SynchronizationSettingsListByShareInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    shareName: Schema.String.pipe(T.PathParam()),
    $skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName}/synchronizationSettings",
      apiVersion: "2021-08-01",
    }),
  ) as unknown as Schema.Codec<SynchronizationSettingsListByShareInput>;

// Output Schema
export interface SynchronizationSettingsListByShareOutput {
  nextLink?: string;
  value: {
    id?: string;
    name?: string;
    systemData?: {
      createdAt?: string;
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    };
    type?: string;
  }[];
}
export const SynchronizationSettingsListByShareOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        systemData: Schema.optional(
          Schema.Struct({
            createdAt: Schema.optional(Schema.String),
            createdBy: Schema.optional(Schema.String),
            createdByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
            lastModifiedAt: Schema.optional(Schema.String),
            lastModifiedBy: Schema.optional(Schema.String),
            lastModifiedByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
          }),
        ),
        type: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<SynchronizationSettingsListByShareOutput>;

// The operation
/**
 * List synchronizationSettings in a share.
 *
 * List synchronizationSettings in a share
 *
 * @param subscriptionId - The subscription identifier
 * @param resourceGroupName - The resource group name.
 * @param accountName - The name of the share account.
 * @param shareName - The name of the share.
 * @param api-version - The api version to use.
 * @param $skipToken - continuation token
 */
export const SynchronizationSettingsListByShare =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SynchronizationSettingsListByShareInput,
    outputSchema: SynchronizationSettingsListByShareOutput,
  }));
// Input Schema
export interface TriggersCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  shareSubscriptionName: string;
  triggerName: string;
  kind: "ScheduleBased";
  id?: string;
  name?: string;
  systemData?: {
    createdAt?: string;
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
  };
  type?: string;
}
export const TriggersCreateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  shareSubscriptionName: Schema.String.pipe(T.PathParam()),
  triggerName: Schema.String.pipe(T.PathParam()),
  kind: Schema.Literals(["ScheduleBased"]),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdAt: Schema.optional(Schema.String),
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
    }),
  ),
  type: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shareSubscriptions/{shareSubscriptionName}/triggers/{triggerName}",
    apiVersion: "2021-08-01",
  }),
) as unknown as Schema.Codec<TriggersCreateInput>;

// Output Schema
export interface TriggersCreateOutput {
  id?: string;
  name?: string;
  systemData?: {
    createdAt?: string;
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
  };
  type?: string;
}
export const TriggersCreateOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdAt: Schema.optional(Schema.String),
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
    }),
  ),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<TriggersCreateOutput>;

// The operation
/**
 * This method creates a trigger for a share subscription
 *
 * Create a Trigger
 *
 * @param subscriptionId - The subscription identifier
 * @param resourceGroupName - The resource group name.
 * @param accountName - The name of the share account.
 * @param shareSubscriptionName - The name of the share subscription which will hold the data set sink.
 * @param triggerName - The name of the trigger.
 * @param api-version - The api version to use.
 */
export const TriggersCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: TriggersCreateInput,
  outputSchema: TriggersCreateOutput,
}));
// Input Schema
export interface TriggersDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  shareSubscriptionName: string;
  triggerName: string;
}
export const TriggersDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  shareSubscriptionName: Schema.String.pipe(T.PathParam()),
  triggerName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shareSubscriptions/{shareSubscriptionName}/triggers/{triggerName}",
    apiVersion: "2021-08-01",
  }),
) as unknown as Schema.Codec<TriggersDeleteInput>;

// Output Schema
export interface TriggersDeleteOutput {
  endTime?: string;
  error?: {
    code: string;
    details?: unknown[];
    message: string;
    target?: string;
  };
  startTime?: string;
  status:
    | "Accepted"
    | "InProgress"
    | "TransientFailure"
    | "Succeeded"
    | "Failed"
    | "Canceled";
}
export const TriggersDeleteOutput = /*@__PURE__*/ Schema.Struct({
  endTime: Schema.optional(Schema.String),
  error: Schema.optional(
    Schema.Struct({
      code: Schema.String,
      details: Schema.optional(Schema.Array(Schema.Unknown)),
      message: Schema.String,
      target: Schema.optional(Schema.String),
    }),
  ),
  startTime: Schema.optional(Schema.String),
  status: Schema.Literals([
    "Accepted",
    "InProgress",
    "TransientFailure",
    "Succeeded",
    "Failed",
    "Canceled",
  ]),
}) as unknown as Schema.Codec<TriggersDeleteOutput>;

// The operation
/**
 * Delete Trigger in a shareSubscription.
 *
 * Delete a Trigger in a shareSubscription
 *
 * @param subscriptionId - The subscription identifier
 * @param resourceGroupName - The resource group name.
 * @param accountName - The name of the share account.
 * @param shareSubscriptionName - The name of the shareSubscription.
 * @param triggerName - The name of the trigger.
 * @param api-version - The api version to use.
 */
export const TriggersDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: TriggersDeleteInput,
  outputSchema: TriggersDeleteOutput,
}));
// Input Schema
export interface TriggersGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  shareSubscriptionName: string;
  triggerName: string;
}
export const TriggersGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  shareSubscriptionName: Schema.String.pipe(T.PathParam()),
  triggerName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shareSubscriptions/{shareSubscriptionName}/triggers/{triggerName}",
    apiVersion: "2021-08-01",
  }),
) as unknown as Schema.Codec<TriggersGetInput>;

// Output Schema
export interface TriggersGetOutput {
  id?: string;
  name?: string;
  systemData?: {
    createdAt?: string;
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
  };
  type?: string;
}
export const TriggersGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdAt: Schema.optional(Schema.String),
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
    }),
  ),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<TriggersGetOutput>;

// The operation
/**
 * Get Trigger in a shareSubscription.
 *
 * Get a Trigger in a shareSubscription
 *
 * @param subscriptionId - The subscription identifier
 * @param resourceGroupName - The resource group name.
 * @param accountName - The name of the share account.
 * @param shareSubscriptionName - The name of the shareSubscription.
 * @param triggerName - The name of the trigger.
 * @param api-version - The api version to use.
 */
export const TriggersGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: TriggersGetInput,
  outputSchema: TriggersGetOutput,
}));
// Input Schema
export interface TriggersListByShareSubscriptionInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  shareSubscriptionName: string;
  $skipToken?: string;
}
export const TriggersListByShareSubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    shareSubscriptionName: Schema.String.pipe(T.PathParam()),
    $skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shareSubscriptions/{shareSubscriptionName}/triggers",
      apiVersion: "2021-08-01",
    }),
  ) as unknown as Schema.Codec<TriggersListByShareSubscriptionInput>;

// Output Schema
export interface TriggersListByShareSubscriptionOutput {
  nextLink?: string;
  value: {
    id?: string;
    name?: string;
    systemData?: {
      createdAt?: string;
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    };
    type?: string;
  }[];
}
export const TriggersListByShareSubscriptionOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        systemData: Schema.optional(
          Schema.Struct({
            createdAt: Schema.optional(Schema.String),
            createdBy: Schema.optional(Schema.String),
            createdByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
            lastModifiedAt: Schema.optional(Schema.String),
            lastModifiedBy: Schema.optional(Schema.String),
            lastModifiedByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
          }),
        ),
        type: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<TriggersListByShareSubscriptionOutput>;

// The operation
/**
 * List Triggers in a share subscription.
 *
 * List Triggers in a share subscription
 *
 * @param subscriptionId - The subscription identifier
 * @param resourceGroupName - The resource group name.
 * @param accountName - The name of the share account.
 * @param shareSubscriptionName - The name of the share subscription.
 * @param api-version - The api version to use.
 * @param $skipToken - Continuation token
 */
export const TriggersListByShareSubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: TriggersListByShareSubscriptionInput,
    outputSchema: TriggersListByShareSubscriptionOutput,
  }));
