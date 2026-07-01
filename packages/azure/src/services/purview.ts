/**
 * Azure Purview API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface AccountsAddRootCollectionAdminInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  objectId?: string;
}
export const AccountsAddRootCollectionAdminInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    objectId: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Purview/accounts/{accountName}/addRootCollectionAdmin",
      apiVersion: "2021-12-01",
    }),
  ) as unknown as Schema.Codec<AccountsAddRootCollectionAdminInput>;

// Output Schema
export type AccountsAddRootCollectionAdminOutput = void;
export const AccountsAddRootCollectionAdminOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<AccountsAddRootCollectionAdminOutput>;

// The operation
/**
 * Add the administrator for root collection.
 *
 * Add the administrator for root collection associated with this account.
 *
 * @param subscriptionId - The subscription identifier
 * @param resourceGroupName - The resource group name.
 * @param accountName - The name of the account.
 * @param api-version - The api version to use.
 */
export const AccountsAddRootCollectionAdmin =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AccountsAddRootCollectionAdminInput,
    outputSchema: AccountsAddRootCollectionAdminOutput,
  }));
// Input Schema
export interface AccountsCheckNameAvailabilityInput {
  subscriptionId: string;
  name?: string;
  type?: string;
}
export const AccountsCheckNameAvailabilityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Purview/checkNameAvailability",
      apiVersion: "2021-12-01",
    }),
  ) as unknown as Schema.Codec<AccountsCheckNameAvailabilityInput>;

// Output Schema
export interface AccountsCheckNameAvailabilityOutput {
  message?: string;
  nameAvailable?: boolean;
  reason?: "Invalid" | "AlreadyExists";
}
export const AccountsCheckNameAvailabilityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.Literals(["Invalid", "AlreadyExists"])),
  }) as unknown as Schema.Codec<AccountsCheckNameAvailabilityOutput>;

// The operation
/**
 * Checks the account name availability.
 *
 * Checks if account name is available.
 *
 * @param subscriptionId - The subscription identifier
 * @param api-version - The api version to use.
 */
export const AccountsCheckNameAvailability =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AccountsCheckNameAvailabilityInput,
    outputSchema: AccountsCheckNameAvailabilityOutput,
  }));
// Input Schema
export interface AccountsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  properties?: {
    accountStatus?: {
      accountProvisioningState?:
        | "Unknown"
        | "Creating"
        | "Updating"
        | "Moving"
        | "Deleting"
        | "SoftDeleting"
        | "SoftDeleted"
        | "Failed"
        | "Succeeded"
        | "Canceled";
      errorDetails?: {
        code?: string;
        details?: unknown[];
        message?: string;
        target?: string;
      };
    };
    cloudConnectors?: { awsExternalId?: string };
    createdAt?: string;
    createdBy?: string;
    createdByObjectId?: string;
    endpoints?: { catalog?: string; guardian?: string; scan?: string };
    friendlyName?: string;
    managedEventHubState?: "NotSpecified" | "Disabled" | "Enabled";
    managedResourceGroupName?: string;
    managedResources?: {
      eventHubNamespace?: string;
      resourceGroup?: string;
      storageAccount?: string;
    };
    managedResourcesPublicNetworkAccess?:
      | "NotSpecified"
      | "Enabled"
      | "Disabled";
    privateEndpointConnections?: {
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
    provisioningState?:
      | "Unknown"
      | "Creating"
      | "Moving"
      | "Deleting"
      | "SoftDeleting"
      | "SoftDeleted"
      | "Failed"
      | "Succeeded"
      | "Canceled";
    publicNetworkAccess?: "NotSpecified" | "Enabled" | "Disabled";
  };
  sku?: { capacity?: number; name?: "Standard" };
  id?: string;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?: "None" | "SystemAssigned" | "UserAssigned";
    userAssignedIdentities?: Record<
      string,
      { clientId?: string; principalId?: string }
    >;
  };
  location?: string;
  name?: string;
  systemData?: {
    createdAt?: string;
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
  };
  tags?: Record<string, string>;
  type?: string;
}
export const AccountsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        accountStatus: Schema.optional(
          Schema.Struct({
            accountProvisioningState: Schema.optional(
              Schema.Literals([
                "Unknown",
                "Creating",
                "Updating",
                "Moving",
                "Deleting",
                "SoftDeleting",
                "SoftDeleted",
                "Failed",
                "Succeeded",
                "Canceled",
              ]),
            ),
            errorDetails: Schema.optional(
              Schema.Struct({
                code: Schema.optional(Schema.String),
                details: Schema.optional(Schema.Array(Schema.Unknown)),
                message: Schema.optional(Schema.String),
                target: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
        cloudConnectors: Schema.optional(
          Schema.Struct({
            awsExternalId: Schema.optional(Schema.String),
          }),
        ),
        createdAt: Schema.optional(Schema.String),
        createdBy: Schema.optional(Schema.String),
        createdByObjectId: Schema.optional(Schema.String),
        endpoints: Schema.optional(
          Schema.Struct({
            catalog: Schema.optional(Schema.String),
            guardian: Schema.optional(Schema.String),
            scan: Schema.optional(Schema.String),
          }),
        ),
        friendlyName: Schema.optional(Schema.String),
        managedEventHubState: Schema.optional(
          Schema.Literals(["NotSpecified", "Disabled", "Enabled"]),
        ),
        managedResourceGroupName: Schema.optional(Schema.String),
        managedResources: Schema.optional(
          Schema.Struct({
            eventHubNamespace: Schema.optional(Schema.String),
            resourceGroup: Schema.optional(Schema.String),
            storageAccount: Schema.optional(Schema.String),
          }),
        ),
        managedResourcesPublicNetworkAccess: Schema.optional(
          Schema.Literals(["NotSpecified", "Enabled", "Disabled"]),
        ),
        privateEndpointConnections: Schema.optional(
          Schema.Array(
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
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Unknown",
            "Creating",
            "Moving",
            "Deleting",
            "SoftDeleting",
            "SoftDeleted",
            "Failed",
            "Succeeded",
            "Canceled",
          ]),
        ),
        publicNetworkAccess: Schema.optional(
          Schema.Literals(["NotSpecified", "Enabled", "Disabled"]),
        ),
      }),
    ),
    sku: Schema.optional(
      Schema.Struct({
        capacity: Schema.optional(Schema.Number),
        name: Schema.optional(Schema.Literals(["Standard"])),
      }),
    ),
    id: Schema.optional(Schema.String),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(
          Schema.Literals(["None", "SystemAssigned", "UserAssigned"]),
        ),
        userAssignedIdentities: Schema.optional(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              clientId: Schema.optional(Schema.String),
              principalId: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    location: Schema.optional(Schema.String),
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
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Purview/accounts/{accountName}",
      apiVersion: "2021-12-01",
    }),
  ) as unknown as Schema.Codec<AccountsCreateOrUpdateInput>;

// Output Schema
export interface AccountsCreateOrUpdateOutput {
  id?: string;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?: "None" | "SystemAssigned" | "UserAssigned";
    userAssignedIdentities?: Record<
      string,
      { clientId?: string; principalId?: string }
    >;
  };
  location?: string;
  name?: string;
  systemData?: {
    createdAt?: string;
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
  };
  tags?: Record<string, string>;
  type?: string;
}
export const AccountsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(
          Schema.Literals(["None", "SystemAssigned", "UserAssigned"]),
        ),
        userAssignedIdentities: Schema.optional(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              clientId: Schema.optional(Schema.String),
              principalId: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    location: Schema.optional(Schema.String),
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
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AccountsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update an account resource
 *
 * Creates or updates an account
 *
 * @param subscriptionId - The subscription identifier
 * @param resourceGroupName - The resource group name.
 * @param accountName - The name of the account.
 * @param api-version - The api version to use.
 */
export const AccountsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AccountsCreateOrUpdateInput,
    outputSchema: AccountsCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface AccountsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const AccountsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Purview/accounts/{accountName}",
    apiVersion: "2021-12-01",
  }),
) as unknown as Schema.Codec<AccountsDeleteInput>;

// Output Schema
export type AccountsDeleteOutput = void;
export const AccountsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<AccountsDeleteOutput>;

// The operation
/**
 * Deletes the account resource.
 *
 * Deletes an account resource
 *
 * @param subscriptionId - The subscription identifier
 * @param resourceGroupName - The resource group name.
 * @param accountName - The name of the account.
 * @param api-version - The api version to use.
 */
export const AccountsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AccountsDeleteInput,
  outputSchema: AccountsDeleteOutput,
}));
// Input Schema
export interface AccountsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const AccountsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Purview/accounts/{accountName}",
    apiVersion: "2021-12-01",
  }),
) as unknown as Schema.Codec<AccountsGetInput>;

// Output Schema
export interface AccountsGetOutput {
  id?: string;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?: "None" | "SystemAssigned" | "UserAssigned";
    userAssignedIdentities?: Record<
      string,
      { clientId?: string; principalId?: string }
    >;
  };
  location?: string;
  name?: string;
  systemData?: {
    createdAt?: string;
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
  };
  tags?: Record<string, string>;
  type?: string;
}
export const AccountsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  identity: Schema.optional(
    Schema.Struct({
      principalId: Schema.optional(Schema.String),
      tenantId: Schema.optional(Schema.String),
      type: Schema.optional(
        Schema.Literals(["None", "SystemAssigned", "UserAssigned"]),
      ),
      userAssignedIdentities: Schema.optional(
        Schema.Record(
          Schema.String,
          Schema.Struct({
            clientId: Schema.optional(Schema.String),
            principalId: Schema.optional(Schema.String),
          }),
        ),
      ),
    }),
  ),
  location: Schema.optional(Schema.String),
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
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<AccountsGetOutput>;

// The operation
/**
 * Gets the account resource.
 *
 * Get an account
 *
 * @param subscriptionId - The subscription identifier
 * @param resourceGroupName - The resource group name.
 * @param accountName - The name of the account.
 * @param api-version - The api version to use.
 */
export const AccountsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    $skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Purview/accounts",
      apiVersion: "2021-12-01",
    }),
  ) as unknown as Schema.Codec<AccountsListByResourceGroupInput>;

// Output Schema
export interface AccountsListByResourceGroupOutput {
  count?: number;
  nextLink?: string;
  value: {
    id?: string;
    identity?: {
      principalId?: string;
      tenantId?: string;
      type?: "None" | "SystemAssigned" | "UserAssigned";
      userAssignedIdentities?: Record<
        string,
        { clientId?: string; principalId?: string }
      >;
    };
    location?: string;
    name?: string;
    systemData?: {
      createdAt?: string;
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    };
    tags?: Record<string, string>;
    type?: string;
  }[];
}
export const AccountsListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    nextLink: Schema.optional(Schema.String),
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        identity: Schema.optional(
          Schema.Struct({
            principalId: Schema.optional(Schema.String),
            tenantId: Schema.optional(Schema.String),
            type: Schema.optional(
              Schema.Literals(["None", "SystemAssigned", "UserAssigned"]),
            ),
            userAssignedIdentities: Schema.optional(
              Schema.Record(
                Schema.String,
                Schema.Struct({
                  clientId: Schema.optional(Schema.String),
                  principalId: Schema.optional(Schema.String),
                }),
              ),
            ),
          }),
        ),
        location: Schema.optional(Schema.String),
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
        tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        type: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<AccountsListByResourceGroupOutput>;

// The operation
/**
 * Gets the accounts resources by resource group.
 *
 * List accounts in ResourceGroup
 *
 * @param subscriptionId - The subscription identifier
 * @param resourceGroupName - The resource group name.
 * @param api-version - The api version to use.
 * @param $skipToken - The skip token.
 */
export const AccountsListByResourceGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AccountsListByResourceGroupInput,
    outputSchema: AccountsListByResourceGroupOutput,
  }),
);
// Input Schema
export interface AccountsListBySubscriptionInput {
  subscriptionId: string;
  $skipToken?: string;
}
export const AccountsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Purview/accounts",
      apiVersion: "2021-12-01",
    }),
  ) as unknown as Schema.Codec<AccountsListBySubscriptionInput>;

// Output Schema
export interface AccountsListBySubscriptionOutput {
  count?: number;
  nextLink?: string;
  value: {
    id?: string;
    identity?: {
      principalId?: string;
      tenantId?: string;
      type?: "None" | "SystemAssigned" | "UserAssigned";
      userAssignedIdentities?: Record<
        string,
        { clientId?: string; principalId?: string }
      >;
    };
    location?: string;
    name?: string;
    systemData?: {
      createdAt?: string;
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    };
    tags?: Record<string, string>;
    type?: string;
  }[];
}
export const AccountsListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    nextLink: Schema.optional(Schema.String),
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        identity: Schema.optional(
          Schema.Struct({
            principalId: Schema.optional(Schema.String),
            tenantId: Schema.optional(Schema.String),
            type: Schema.optional(
              Schema.Literals(["None", "SystemAssigned", "UserAssigned"]),
            ),
            userAssignedIdentities: Schema.optional(
              Schema.Record(
                Schema.String,
                Schema.Struct({
                  clientId: Schema.optional(Schema.String),
                  principalId: Schema.optional(Schema.String),
                }),
              ),
            ),
          }),
        ),
        location: Schema.optional(Schema.String),
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
        tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        type: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<AccountsListBySubscriptionOutput>;

// The operation
/**
 * Gets the accounts resources by subscription.
 *
 * List accounts in Subscription
 *
 * @param subscriptionId - The subscription identifier
 * @param api-version - The api version to use.
 * @param $skipToken - The skip token.
 */
export const AccountsListBySubscription = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AccountsListBySubscriptionInput,
    outputSchema: AccountsListBySubscriptionOutput,
  }),
);
// Input Schema
export interface AccountsListKeysInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const AccountsListKeysInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Purview/accounts/{accountName}/listkeys",
    apiVersion: "2021-12-01",
  }),
) as unknown as Schema.Codec<AccountsListKeysInput>;

// Output Schema
export interface AccountsListKeysOutput {
  atlasKafkaPrimaryEndpoint?: string;
  atlasKafkaSecondaryEndpoint?: string;
}
export const AccountsListKeysOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    atlasKafkaPrimaryEndpoint: Schema.optional(Schema.String),
    atlasKafkaSecondaryEndpoint: Schema.optional(Schema.String),
  },
) as unknown as Schema.Codec<AccountsListKeysOutput>;

// The operation
/**
 * Lists the keys asynchronous.
 *
 * List the authorization keys associated with this account.
 *
 * @param subscriptionId - The subscription identifier
 * @param resourceGroupName - The resource group name.
 * @param accountName - The name of the account.
 * @param api-version - The api version to use.
 */
export const AccountsListKeys = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AccountsListKeysInput,
  outputSchema: AccountsListKeysOutput,
}));
// Input Schema
export interface AccountsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?: "None" | "SystemAssigned" | "UserAssigned";
    userAssignedIdentities?: Record<
      string,
      { clientId?: string; principalId?: string }
    >;
  };
  properties?: {
    accountStatus?: {
      accountProvisioningState?:
        | "Unknown"
        | "Creating"
        | "Updating"
        | "Moving"
        | "Deleting"
        | "SoftDeleting"
        | "SoftDeleted"
        | "Failed"
        | "Succeeded"
        | "Canceled";
      errorDetails?: {
        code?: string;
        details?: unknown[];
        message?: string;
        target?: string;
      };
    };
    cloudConnectors?: { awsExternalId?: string };
    createdAt?: string;
    createdBy?: string;
    createdByObjectId?: string;
    endpoints?: { catalog?: string; guardian?: string; scan?: string };
    friendlyName?: string;
    managedEventHubState?: "NotSpecified" | "Disabled" | "Enabled";
    managedResourceGroupName?: string;
    managedResources?: {
      eventHubNamespace?: string;
      resourceGroup?: string;
      storageAccount?: string;
    };
    managedResourcesPublicNetworkAccess?:
      | "NotSpecified"
      | "Enabled"
      | "Disabled";
    privateEndpointConnections?: {
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
    provisioningState?:
      | "Unknown"
      | "Creating"
      | "Moving"
      | "Deleting"
      | "SoftDeleting"
      | "SoftDeleted"
      | "Failed"
      | "Succeeded"
      | "Canceled";
    publicNetworkAccess?: "NotSpecified" | "Enabled" | "Disabled";
  };
  tags?: Record<string, string>;
}
export const AccountsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  identity: Schema.optional(
    Schema.Struct({
      principalId: Schema.optional(Schema.String),
      tenantId: Schema.optional(Schema.String),
      type: Schema.optional(
        Schema.Literals(["None", "SystemAssigned", "UserAssigned"]),
      ),
      userAssignedIdentities: Schema.optional(
        Schema.Record(
          Schema.String,
          Schema.Struct({
            clientId: Schema.optional(Schema.String),
            principalId: Schema.optional(Schema.String),
          }),
        ),
      ),
    }),
  ),
  properties: Schema.optional(
    Schema.Struct({
      accountStatus: Schema.optional(
        Schema.Struct({
          accountProvisioningState: Schema.optional(
            Schema.Literals([
              "Unknown",
              "Creating",
              "Updating",
              "Moving",
              "Deleting",
              "SoftDeleting",
              "SoftDeleted",
              "Failed",
              "Succeeded",
              "Canceled",
            ]),
          ),
          errorDetails: Schema.optional(
            Schema.Struct({
              code: Schema.optional(Schema.String),
              details: Schema.optional(Schema.Array(Schema.Unknown)),
              message: Schema.optional(Schema.String),
              target: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
      cloudConnectors: Schema.optional(
        Schema.Struct({
          awsExternalId: Schema.optional(Schema.String),
        }),
      ),
      createdAt: Schema.optional(Schema.String),
      createdBy: Schema.optional(Schema.String),
      createdByObjectId: Schema.optional(Schema.String),
      endpoints: Schema.optional(
        Schema.Struct({
          catalog: Schema.optional(Schema.String),
          guardian: Schema.optional(Schema.String),
          scan: Schema.optional(Schema.String),
        }),
      ),
      friendlyName: Schema.optional(Schema.String),
      managedEventHubState: Schema.optional(
        Schema.Literals(["NotSpecified", "Disabled", "Enabled"]),
      ),
      managedResourceGroupName: Schema.optional(Schema.String),
      managedResources: Schema.optional(
        Schema.Struct({
          eventHubNamespace: Schema.optional(Schema.String),
          resourceGroup: Schema.optional(Schema.String),
          storageAccount: Schema.optional(Schema.String),
        }),
      ),
      managedResourcesPublicNetworkAccess: Schema.optional(
        Schema.Literals(["NotSpecified", "Enabled", "Disabled"]),
      ),
      privateEndpointConnections: Schema.optional(
        Schema.Array(
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
      ),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Unknown",
          "Creating",
          "Moving",
          "Deleting",
          "SoftDeleting",
          "SoftDeleted",
          "Failed",
          "Succeeded",
          "Canceled",
        ]),
      ),
      publicNetworkAccess: Schema.optional(
        Schema.Literals(["NotSpecified", "Enabled", "Disabled"]),
      ),
    }),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Purview/accounts/{accountName}",
    apiVersion: "2021-12-01",
  }),
) as unknown as Schema.Codec<AccountsUpdateInput>;

// Output Schema
export interface AccountsUpdateOutput {
  id?: string;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?: "None" | "SystemAssigned" | "UserAssigned";
    userAssignedIdentities?: Record<
      string,
      { clientId?: string; principalId?: string }
    >;
  };
  location?: string;
  name?: string;
  systemData?: {
    createdAt?: string;
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
  };
  tags?: Record<string, string>;
  type?: string;
}
export const AccountsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  identity: Schema.optional(
    Schema.Struct({
      principalId: Schema.optional(Schema.String),
      tenantId: Schema.optional(Schema.String),
      type: Schema.optional(
        Schema.Literals(["None", "SystemAssigned", "UserAssigned"]),
      ),
      userAssignedIdentities: Schema.optional(
        Schema.Record(
          Schema.String,
          Schema.Struct({
            clientId: Schema.optional(Schema.String),
            principalId: Schema.optional(Schema.String),
          }),
        ),
      ),
    }),
  ),
  location: Schema.optional(Schema.String),
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
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<AccountsUpdateOutput>;

// The operation
/**
 * Patches the account resource.
 *
 * Updates an account
 *
 * @param subscriptionId - The subscription identifier
 * @param resourceGroupName - The resource group name.
 * @param accountName - The name of the account.
 * @param api-version - The api version to use.
 */
export const AccountsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AccountsUpdateInput,
  outputSchema: AccountsUpdateOutput,
}));
// Input Schema
export interface DefaultAccountsGetInput {
  scopeTenantId: string;
  scopeType: "Tenant" | "Subscription";
  scope?: string;
}
export const DefaultAccountsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scopeTenantId: Schema.String,
    scopeType: Schema.Literals(["Tenant", "Subscription"]),
    scope: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Purview/getDefaultAccount",
      apiVersion: "2021-12-01",
    }),
  ) as unknown as Schema.Codec<DefaultAccountsGetInput>;

// Output Schema
export interface DefaultAccountsGetOutput {
  accountName?: string;
  resourceGroupName?: string;
  scope?: string;
  scopeTenantId?: string;
  scopeType?: "Tenant" | "Subscription";
  subscriptionId?: string;
}
export const DefaultAccountsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountName: Schema.optional(Schema.String),
    resourceGroupName: Schema.optional(Schema.String),
    scope: Schema.optional(Schema.String),
    scopeTenantId: Schema.optional(Schema.String),
    scopeType: Schema.optional(Schema.Literals(["Tenant", "Subscription"])),
    subscriptionId: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DefaultAccountsGetOutput>;

// The operation
/**
 * Gets the default account information set for the scope.
 *
 * Get the default account for the scope.
 *
 * @param scopeTenantId - The tenant ID.
 * @param scopeType - The scope for the default account.
 * @param scope - The Id of the scope object, for example if the scope is "Subscription" then it is the ID of that subscription.
 * @param api-version - The api version to use.
 */
export const DefaultAccountsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DefaultAccountsGetInput,
  outputSchema: DefaultAccountsGetOutput,
}));
// Input Schema
export interface DefaultAccountsRemoveInput {
  scopeTenantId: string;
  scopeType: "Tenant" | "Subscription";
  scope?: string;
}
export const DefaultAccountsRemoveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scopeTenantId: Schema.String,
    scopeType: Schema.Literals(["Tenant", "Subscription"]),
    scope: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Purview/removeDefaultAccount",
      apiVersion: "2021-12-01",
    }),
  ) as unknown as Schema.Codec<DefaultAccountsRemoveInput>;

// Output Schema
export type DefaultAccountsRemoveOutput = void;
export const DefaultAccountsRemoveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DefaultAccountsRemoveOutput>;

// The operation
/**
 * Removes the default account from the scope.
 *
 * @param scopeTenantId - The tenant ID.
 * @param scopeType - The scope for the default account.
 * @param scope - The Id of the scope object, for example if the scope is "Subscription" then it is the ID of that subscription.
 * @param api-version - The api version to use.
 */
export const DefaultAccountsRemove = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DefaultAccountsRemoveInput,
    outputSchema: DefaultAccountsRemoveOutput,
  }),
);
// Input Schema
export interface DefaultAccountsSetInput {
  accountName?: string;
  resourceGroupName?: string;
  scope?: string;
  scopeTenantId?: string;
  scopeType?: "Tenant" | "Subscription";
  subscriptionId?: string;
}
export const DefaultAccountsSetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountName: Schema.optional(Schema.String),
    resourceGroupName: Schema.optional(Schema.String),
    scope: Schema.optional(Schema.String),
    scopeTenantId: Schema.optional(Schema.String),
    scopeType: Schema.optional(Schema.Literals(["Tenant", "Subscription"])),
    subscriptionId: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Purview/setDefaultAccount",
      apiVersion: "2021-12-01",
    }),
  ) as unknown as Schema.Codec<DefaultAccountsSetInput>;

// Output Schema
export interface DefaultAccountsSetOutput {
  accountName?: string;
  resourceGroupName?: string;
  scope?: string;
  scopeTenantId?: string;
  scopeType?: "Tenant" | "Subscription";
  subscriptionId?: string;
}
export const DefaultAccountsSetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountName: Schema.optional(Schema.String),
    resourceGroupName: Schema.optional(Schema.String),
    scope: Schema.optional(Schema.String),
    scopeTenantId: Schema.optional(Schema.String),
    scopeType: Schema.optional(Schema.Literals(["Tenant", "Subscription"])),
    subscriptionId: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DefaultAccountsSetOutput>;

// The operation
/**
 * Sets the default account for the scope.
 *
 * @param api-version - The api version to use.
 */
export const DefaultAccountsSet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DefaultAccountsSetInput,
  outputSchema: DefaultAccountsSetOutput,
}));
// Input Schema
export interface FeaturesAccountGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  features?: string[];
}
export const FeaturesAccountGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    features: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Purview/accounts/{accountName}/listFeatures",
      apiVersion: "2021-12-01",
    }),
  ) as unknown as Schema.Codec<FeaturesAccountGetInput>;

// Output Schema
export interface FeaturesAccountGetOutput {
  features?: Record<string, boolean>;
}
export const FeaturesAccountGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    features: Schema.optional(Schema.Record(Schema.String, Schema.Boolean)),
  }) as unknown as Schema.Codec<FeaturesAccountGetOutput>;

// The operation
/**
 * Gets a list of features and their status for the account.
Status of enabled features will be true. Status of disabled features will be false.
Features that don't exist will be excluded from the results.
 *
 * Gets details from a list of feature names.
 *
 * @param subscriptionId - The subscription identifier
 * @param resourceGroupName - The resource group name.
 * @param accountName - The name of the account.
 * @param api-version - The api version to use.
 */
export const FeaturesAccountGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FeaturesAccountGetInput,
  outputSchema: FeaturesAccountGetOutput,
}));
// Input Schema
export interface FeaturesSubscriptionGetInput {
  subscriptionId: string;
  locations: string;
  features?: string[];
}
export const FeaturesSubscriptionGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    locations: Schema.String.pipe(T.PathParam()),
    features: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Purview/locations/{locations}/listFeatures",
      apiVersion: "2021-12-01",
    }),
  ) as unknown as Schema.Codec<FeaturesSubscriptionGetInput>;

// Output Schema
export interface FeaturesSubscriptionGetOutput {
  features?: Record<string, boolean>;
}
export const FeaturesSubscriptionGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    features: Schema.optional(Schema.Record(Schema.String, Schema.Boolean)),
  }) as unknown as Schema.Codec<FeaturesSubscriptionGetOutput>;

// The operation
/**
 * Gets a list of features and their status for the location and subscription.
Status of enabled features will be true. Status of disabled features will be false.
Features that don't exist will be excluded from the results.
 *
 * Gets details from a list of feature names.
 *
 * @param subscriptionId - The subscription identifier
 * @param locations - Location of feature.
 * @param api-version - The api version to use.
 */
export const FeaturesSubscriptionGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: FeaturesSubscriptionGetInput,
    outputSchema: FeaturesSubscriptionGetOutput,
  }),
);
// Input Schema
export interface KafkaConfigurationsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  kafkaConfigurationName: string;
  properties?: {
    consumerGroup?: string;
    credentials?: {
      identityId?: string;
      type?: "None" | "SystemAssigned" | "UserAssigned";
    };
    eventHubResourceId?: string;
    eventHubType?: "Notification" | "Hook";
    eventStreamingState?: "Disabled" | "Enabled";
    eventStreamingType?: "None" | "Managed" | "Azure";
    eventHubPartitionId?: string;
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
export const KafkaConfigurationsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    kafkaConfigurationName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        consumerGroup: Schema.optional(Schema.String),
        credentials: Schema.optional(
          Schema.Struct({
            identityId: Schema.optional(Schema.String),
            type: Schema.optional(
              Schema.Literals(["None", "SystemAssigned", "UserAssigned"]),
            ),
          }),
        ),
        eventHubResourceId: Schema.optional(Schema.String),
        eventHubType: Schema.optional(
          Schema.Literals(["Notification", "Hook"]),
        ),
        eventStreamingState: Schema.optional(
          Schema.Literals(["Disabled", "Enabled"]),
        ),
        eventStreamingType: Schema.optional(
          Schema.Literals(["None", "Managed", "Azure"]),
        ),
        eventHubPartitionId: Schema.optional(Schema.String),
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Purview/accounts/{accountName}/kafkaConfigurations/{kafkaConfigurationName}",
      apiVersion: "2021-12-01",
    }),
  ) as unknown as Schema.Codec<KafkaConfigurationsCreateOrUpdateInput>;

// Output Schema
export interface KafkaConfigurationsCreateOrUpdateOutput {
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
export const KafkaConfigurationsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<KafkaConfigurationsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update the kafka configuration.
 *
 * Create or update Kafka Configuration
 *
 * @param subscriptionId - The subscription identifier
 * @param resourceGroupName - The resource group name.
 * @param accountName - The name of the account.
 * @param kafkaConfigurationName - The kafka configuration name.
 * @param api-version - The api version to use.
 */
export const KafkaConfigurationsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: KafkaConfigurationsCreateOrUpdateInput,
    outputSchema: KafkaConfigurationsCreateOrUpdateOutput,
  }));
// Input Schema
export interface KafkaConfigurationsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  kafkaConfigurationName: string;
}
export const KafkaConfigurationsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    kafkaConfigurationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Purview/accounts/{accountName}/kafkaConfigurations/{kafkaConfigurationName}",
      apiVersion: "2021-12-01",
    }),
  ) as unknown as Schema.Codec<KafkaConfigurationsDeleteInput>;

// Output Schema
export type KafkaConfigurationsDeleteOutput = void;
export const KafkaConfigurationsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<KafkaConfigurationsDeleteOutput>;

// The operation
/**
 * Deletes the kafka configuration on the account.
 *
 * Deletes a KafkaConfiguration resource.
 *
 * @param subscriptionId - The subscription identifier
 * @param resourceGroupName - The resource group name.
 * @param accountName - The name of the account.
 * @param kafkaConfigurationName - Name of kafka configuration.
 * @param api-version - The api version to use.
 */
export const KafkaConfigurationsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: KafkaConfigurationsDeleteInput,
    outputSchema: KafkaConfigurationsDeleteOutput,
  }),
);
// Input Schema
export interface KafkaConfigurationsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  kafkaConfigurationName: string;
}
export const KafkaConfigurationsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    kafkaConfigurationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Purview/accounts/{accountName}/kafkaConfigurations/{kafkaConfigurationName}",
      apiVersion: "2021-12-01",
    }),
  ) as unknown as Schema.Codec<KafkaConfigurationsGetInput>;

// Output Schema
export interface KafkaConfigurationsGetOutput {
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
export const KafkaConfigurationsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<KafkaConfigurationsGetOutput>;

// The operation
/**
 * Gets the kafka configuration.
 *
 * Gets the kafka configuration for the account
 *
 * @param subscriptionId - The subscription identifier
 * @param resourceGroupName - The resource group name.
 * @param accountName - The name of the account.
 * @param kafkaConfigurationName - Name of kafka configuration.
 * @param api-version - The api version to use.
 */
export const KafkaConfigurationsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: KafkaConfigurationsGetInput,
    outputSchema: KafkaConfigurationsGetOutput,
  }),
);
// Input Schema
export interface KafkaConfigurationsListByAccountInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  $skipToken?: string;
}
export const KafkaConfigurationsListByAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    $skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Purview/accounts/{accountName}/kafkaConfigurations",
      apiVersion: "2021-12-01",
    }),
  ) as unknown as Schema.Codec<KafkaConfigurationsListByAccountInput>;

// Output Schema
export interface KafkaConfigurationsListByAccountOutput {
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
export const KafkaConfigurationsListByAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<KafkaConfigurationsListByAccountOutput>;

// The operation
/**
 * Gets the list of Kafka configurations for the account.
 *
 * Lists the Kafka configurations in the Account
 *
 * @param subscriptionId - The subscription identifier
 * @param resourceGroupName - The resource group name.
 * @param accountName - The name of the account.
 * @param api-version - The api version to use.
 * @param $skipToken - The skip token.
 */
export const KafkaConfigurationsListByAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: KafkaConfigurationsListByAccountInput,
    outputSchema: KafkaConfigurationsListByAccountOutput,
  }));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Purview/operations",
    apiVersion: "2021-12-01",
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
    isDataAction?: boolean;
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
          dimensions?: {
            displayName?: string;
            name?: string;
            toBeExportedForCustomer?: boolean;
          }[];
          displayDescription?: string;
          displayName?: string;
          enableRegionalMdmAccount?: string;
          internalMetricName?: string;
          name?: string;
          resourceIdDimensionNameOverride?: string;
          sourceMdmNamespace?: string;
          supportedAggregationTypes?: string[];
          supportedTimeGrainTypes?: string[];
          unit?: string;
        }[];
      };
    };
  }[];
}
export const OperationsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
      isDataAction: Schema.optional(Schema.Boolean),
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
                          toBeExportedForCustomer: Schema.optional(
                            Schema.Boolean,
                          ),
                        }),
                      ),
                    ),
                    displayDescription: Schema.optional(Schema.String),
                    displayName: Schema.optional(Schema.String),
                    enableRegionalMdmAccount: Schema.optional(Schema.String),
                    internalMetricName: Schema.optional(Schema.String),
                    name: Schema.optional(Schema.String),
                    resourceIdDimensionNameOverride: Schema.optional(
                      Schema.String,
                    ),
                    sourceMdmNamespace: Schema.optional(Schema.String),
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
export const OperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface PrivateEndpointConnectionsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  privateEndpointConnectionName: string;
  properties?: {
    privateEndpoint?: { id?: string };
    privateLinkServiceConnectionState?: {
      actionsRequired?: string;
      description?: string;
      status?: "Unknown" | "Pending" | "Approved" | "Rejected" | "Disconnected";
    };
    provisioningState?: string;
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
export const PrivateEndpointConnectionsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        privateEndpoint: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
          }),
        ),
        privateLinkServiceConnectionState: Schema.optional(
          Schema.Struct({
            actionsRequired: Schema.optional(Schema.String),
            description: Schema.optional(Schema.String),
            status: Schema.optional(
              Schema.Literals([
                "Unknown",
                "Pending",
                "Approved",
                "Rejected",
                "Disconnected",
              ]),
            ),
          }),
        ),
        provisioningState: Schema.optional(Schema.String),
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Purview/accounts/{accountName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2021-12-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsCreateOrUpdateInput>;

// Output Schema
export interface PrivateEndpointConnectionsCreateOrUpdateOutput {
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
export const PrivateEndpointConnectionsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsCreateOrUpdateOutput>;

// The operation
/**
 * Approves/Rejects private endpoint connection request.
 *
 * Create or update a private endpoint connection
 *
 * @param subscriptionId - The subscription identifier
 * @param resourceGroupName - The resource group name.
 * @param accountName - The name of the account.
 * @param privateEndpointConnectionName - Name of the private endpoint connection.
 * @param api-version - The api version to use.
 */
export const PrivateEndpointConnectionsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsCreateOrUpdateInput,
    outputSchema: PrivateEndpointConnectionsCreateOrUpdateOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Purview/accounts/{accountName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2021-12-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsDeleteInput>;

// Output Schema
export type PrivateEndpointConnectionsDeleteOutput = void;
export const PrivateEndpointConnectionsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<PrivateEndpointConnectionsDeleteOutput>;

// The operation
/**
 * Deletes private endpoint connection.
 *
 * Delete a private endpoint connection
 *
 * @param subscriptionId - The subscription identifier
 * @param resourceGroupName - The resource group name.
 * @param accountName - The name of the account.
 * @param privateEndpointConnectionName - Name of the private endpoint connection.
 * @param api-version - The api version to use.
 */
export const PrivateEndpointConnectionsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsDeleteInput,
    outputSchema: PrivateEndpointConnectionsDeleteOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Purview/accounts/{accountName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2021-12-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsGetInput>;

// Output Schema
export interface PrivateEndpointConnectionsGetOutput {
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
export const PrivateEndpointConnectionsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsGetOutput>;

// The operation
/**
 * Gets private endpoint connection information.
 *
 * Get a private endpoint connection
 *
 * @param subscriptionId - The subscription identifier
 * @param resourceGroupName - The resource group name.
 * @param accountName - The name of the account.
 * @param privateEndpointConnectionName - Name of the private endpoint connection.
 * @param api-version - The api version to use.
 */
export const PrivateEndpointConnectionsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsGetInput,
    outputSchema: PrivateEndpointConnectionsGetOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsListByAccountInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  $skipToken?: string;
}
export const PrivateEndpointConnectionsListByAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    $skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Purview/accounts/{accountName}/privateEndpointConnections",
      apiVersion: "2021-12-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsListByAccountInput>;

// Output Schema
export interface PrivateEndpointConnectionsListByAccountOutput {
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
export const PrivateEndpointConnectionsListByAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsListByAccountOutput>;

// The operation
/**
 * Gets private endpoint connections.
 *
 * Get private endpoint connections for account
 *
 * @param subscriptionId - The subscription identifier
 * @param resourceGroupName - The resource group name.
 * @param accountName - The name of the account.
 * @param api-version - The api version to use.
 * @param $skipToken - The skip token.
 */
export const PrivateEndpointConnectionsListByAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsListByAccountInput,
    outputSchema: PrivateEndpointConnectionsListByAccountOutput,
  }));
// Input Schema
export interface PrivateLinkResourcesGetByGroupIdInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  groupId: string;
}
export const PrivateLinkResourcesGetByGroupIdInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    groupId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Purview/accounts/{accountName}/privateLinkResources/{groupId}",
      apiVersion: "2021-12-01",
    }),
  ) as unknown as Schema.Codec<PrivateLinkResourcesGetByGroupIdInput>;

// Output Schema
export interface PrivateLinkResourcesGetByGroupIdOutput {
  id?: string;
  name?: string;
  properties?: {
    groupId?: string;
    requiredMembers?: string[];
    requiredZoneNames?: string[];
  };
  type?: string;
}
export const PrivateLinkResourcesGetByGroupIdOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        groupId: Schema.optional(Schema.String),
        requiredMembers: Schema.optional(Schema.Array(Schema.String)),
        requiredZoneNames: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PrivateLinkResourcesGetByGroupIdOutput>;

// The operation
/**
 * Gets a privately linkable resources for an account with given group identifier.
 *
 * Gets a privately linkable resources for an account with given group identifier
 *
 * @param subscriptionId - The subscription identifier
 * @param resourceGroupName - The resource group name.
 * @param accountName - The name of the account.
 * @param groupId - The group identifier.
 * @param api-version - The api version to use.
 */
export const PrivateLinkResourcesGetByGroupId =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkResourcesGetByGroupIdInput,
    outputSchema: PrivateLinkResourcesGetByGroupIdOutput,
  }));
// Input Schema
export interface PrivateLinkResourcesListByAccountInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const PrivateLinkResourcesListByAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Purview/accounts/{accountName}/privateLinkResources",
      apiVersion: "2021-12-01",
    }),
  ) as unknown as Schema.Codec<PrivateLinkResourcesListByAccountInput>;

// Output Schema
export interface PrivateLinkResourcesListByAccountOutput {
  nextLink?: string;
  value: {
    id?: string;
    name?: string;
    properties?: {
      groupId?: string;
      requiredMembers?: string[];
      requiredZoneNames?: string[];
    };
    type?: string;
  }[];
}
export const PrivateLinkResourcesListByAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        properties: Schema.optional(
          Schema.Struct({
            groupId: Schema.optional(Schema.String),
            requiredMembers: Schema.optional(Schema.Array(Schema.String)),
            requiredZoneNames: Schema.optional(Schema.Array(Schema.String)),
          }),
        ),
        type: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<PrivateLinkResourcesListByAccountOutput>;

// The operation
/**
 * Gets a list of privately linkable resources for an account.
 *
 * Gets a list of privately linkable resources for an account
 *
 * @param subscriptionId - The subscription identifier
 * @param resourceGroupName - The resource group name.
 * @param accountName - The name of the account.
 * @param api-version - The api version to use.
 */
export const PrivateLinkResourcesListByAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkResourcesListByAccountInput,
    outputSchema: PrivateLinkResourcesListByAccountOutput,
  }));
// Input Schema
export interface UsagesGetInput {
  subscriptionId: string;
  location: string;
  $filter?: string;
}
export const UsagesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  location: Schema.String.pipe(T.PathParam()),
  $filter: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.Purview/locations/{location}/usages",
    apiVersion: "2021-12-01",
  }),
) as unknown as Schema.Codec<UsagesGetInput>;

// Output Schema
export interface UsagesGetOutput {
  value?: {
    currentValue?: number;
    id?: string;
    limit?: number;
    name?: { localizedValue?: string; value?: string };
    unit?: string;
  }[];
  nextLink?: string;
}
export const UsagesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        currentValue: Schema.optional(Schema.Number),
        id: Schema.optional(Schema.String),
        limit: Schema.optional(Schema.Number),
        name: Schema.optional(
          Schema.Struct({
            localizedValue: Schema.optional(Schema.String),
            value: Schema.optional(Schema.String),
          }),
        ),
        unit: Schema.optional(Schema.String),
      }),
    ),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<UsagesGetOutput>;

// The operation
/**
 * Gets the Usage quota configuration.
 *
 * Get the usage quota configuration
 *
 * @param subscriptionId - The subscription identifier
 * @param location - The region.
 * @param api-version - The api version to use.
 */
export const UsagesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UsagesGetInput,
  outputSchema: UsagesGetOutput,
}));
