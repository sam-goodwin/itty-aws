/**
 * Azure Deviceupdate API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface AccountsCreateInput {
  resourceGroupName: string;
  subscriptionId: string;
  accountName: string;
  properties?: {
    provisioningState?:
      | "Succeeded"
      | "Deleted"
      | "Failed"
      | "Canceled"
      | "Accepted"
      | "Creating";
    hostName?: string;
    publicNetworkAccess?: "Enabled" | "Disabled";
    privateEndpointConnections?: {
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
    sku?: "Free" | "Standard";
    encryption?: { keyVaultKeyUri?: string; userAssignedIdentity?: string };
    locations?: { name?: string; role?: "Primary" | "Failover" }[];
  };
  identity?: {
    principalId?: string;
    tenantId?: string;
    type:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    > | null;
  };
  tags?: Record<string, string>;
  location: string;
}
export const AccountsCreateInput = /*@__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      provisioningState: Schema.optional(
        Schema.Literals([
          "Succeeded",
          "Deleted",
          "Failed",
          "Canceled",
          "Accepted",
          "Creating",
        ]),
      ),
      hostName: Schema.optional(Schema.String),
      publicNetworkAccess: Schema.optional(
        Schema.Literals(["Enabled", "Disabled"]),
      ),
      privateEndpointConnections: Schema.optional(
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
      sku: Schema.optional(Schema.Literals(["Free", "Standard"])),
      encryption: Schema.optional(
        Schema.Struct({
          keyVaultKeyUri: Schema.optional(Schema.String),
          userAssignedIdentity: Schema.optional(Schema.String),
        }),
      ),
      locations: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.optional(Schema.String),
            role: Schema.optional(Schema.Literals(["Primary", "Failover"])),
          }),
        ),
      ),
    }),
  ),
  identity: Schema.optional(
    Schema.Struct({
      principalId: Schema.optional(Schema.String),
      tenantId: Schema.optional(Schema.String),
      type: Schema.Literals([
        "None",
        "SystemAssigned",
        "UserAssigned",
        "SystemAssigned,UserAssigned",
      ]),
      userAssignedIdentities: Schema.optional(
        Schema.NullOr(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              principalId: Schema.optional(Schema.String),
              clientId: Schema.optional(Schema.String),
            }),
          ),
        ),
      ),
    }),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.String,
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceUpdate/accounts/{accountName}",
    apiVersion: "2023-07-01",
  }),
) as unknown as Schema.Codec<AccountsCreateInput>;

// Output Schema
export interface AccountsCreateOutput {
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
export const AccountsCreateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<AccountsCreateOutput>;

// The operation
/**
 * Creates or updates Account.
 *
 * @param resourceGroupName - The resource group name.
 * @param api-version - ADU schema API version.
 * @param subscriptionId - The Azure subscription ID.
 * @param accountName - Account name.
 */
export const AccountsCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: AccountsCreateInput,
  outputSchema: AccountsCreateOutput,
}));
// Input Schema
export interface AccountsDeleteInput {
  resourceGroupName: string;
  subscriptionId: string;
  accountName: string;
}
export const AccountsDeleteInput = /*@__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceUpdate/accounts/{accountName}",
    apiVersion: "2023-07-01",
  }),
) as unknown as Schema.Codec<AccountsDeleteInput>;

// Output Schema
export type AccountsDeleteOutput = void;
export const AccountsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<AccountsDeleteOutput>;

// The operation
/**
 * Deletes account.
 *
 * @param resourceGroupName - The resource group name.
 * @param api-version - ADU schema API version.
 * @param subscriptionId - The Azure subscription ID.
 * @param accountName - Account name.
 */
export const AccountsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: AccountsDeleteInput,
  outputSchema: AccountsDeleteOutput,
}));
// Input Schema
export interface AccountsGetInput {
  resourceGroupName: string;
  subscriptionId: string;
  accountName: string;
}
export const AccountsGetInput = /*@__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceUpdate/accounts/{accountName}",
    apiVersion: "2023-07-01",
  }),
) as unknown as Schema.Codec<AccountsGetInput>;

// Output Schema
export interface AccountsGetOutput {
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
export const AccountsGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<AccountsGetOutput>;

// The operation
/**
 * Returns account details for the given account name.
 *
 * @param resourceGroupName - The resource group name.
 * @param api-version - ADU schema API version.
 * @param subscriptionId - The Azure subscription ID.
 * @param accountName - Account name.
 */
export const AccountsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: AccountsGetInput,
  outputSchema: AccountsGetOutput,
}));
// Input Schema
export interface AccountsListByResourceGroupInput {
  resourceGroupName: string;
  subscriptionId: string;
}
export const AccountsListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceUpdate/accounts",
      apiVersion: "2023-07-01",
    }),
  ) as unknown as Schema.Codec<AccountsListByResourceGroupInput>;

// Output Schema
export interface AccountsListByResourceGroupOutput {
  nextLink?: string;
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
}
export const AccountsListByResourceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<AccountsListByResourceGroupOutput>;

// The operation
/**
 * Returns list of Accounts.
 *
 * @param resourceGroupName - The resource group name.
 * @param api-version - ADU schema API version.
 * @param subscriptionId - The Azure subscription ID.
 */
export const AccountsListByResourceGroup = /*@__PURE__*/ API.make(() => ({
  inputSchema: AccountsListByResourceGroupInput,
  outputSchema: AccountsListByResourceGroupOutput,
}));
// Input Schema
export interface AccountsListBySubscriptionInput {
  subscriptionId: string;
}
export const AccountsListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DeviceUpdate/accounts",
      apiVersion: "2023-07-01",
    }),
  ) as unknown as Schema.Codec<AccountsListBySubscriptionInput>;

// Output Schema
export interface AccountsListBySubscriptionOutput {
  nextLink?: string;
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
}
export const AccountsListBySubscriptionOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<AccountsListBySubscriptionOutput>;

// The operation
/**
 * Returns list of Accounts.
 *
 * @param api-version - ADU schema API version.
 * @param subscriptionId - The Azure subscription ID.
 */
export const AccountsListBySubscription = /*@__PURE__*/ API.make(() => ({
  inputSchema: AccountsListBySubscriptionInput,
  outputSchema: AccountsListBySubscriptionOutput,
}));
// Input Schema
export interface AccountsUpdateInput {
  resourceGroupName: string;
  subscriptionId: string;
  accountName: string;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    > | null;
  };
  location?: string;
  tags?: Record<string, string>;
}
export const AccountsUpdateInput = /*@__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  identity: Schema.optional(
    Schema.Struct({
      principalId: Schema.optional(Schema.String),
      tenantId: Schema.optional(Schema.String),
      type: Schema.Literals([
        "None",
        "SystemAssigned",
        "UserAssigned",
        "SystemAssigned,UserAssigned",
      ]),
      userAssignedIdentities: Schema.optional(
        Schema.NullOr(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              principalId: Schema.optional(Schema.String),
              clientId: Schema.optional(Schema.String),
            }),
          ),
        ),
      ),
    }),
  ),
  location: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceUpdate/accounts/{accountName}",
    apiVersion: "2023-07-01",
  }),
) as unknown as Schema.Codec<AccountsUpdateInput>;

// Output Schema
export interface AccountsUpdateOutput {
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
export const AccountsUpdateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<AccountsUpdateOutput>;

// The operation
/**
 * Updates account's patchable properties
 *
 * @param resourceGroupName - The resource group name.
 * @param api-version - ADU schema API version.
 * @param subscriptionId - The Azure subscription ID.
 * @param accountName - Account name.
 */
export const AccountsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: AccountsUpdateInput,
  outputSchema: AccountsUpdateOutput,
}));
// Input Schema
export interface CheckNameAvailabilityInput {
  subscriptionId: string;
  name?: string;
  type?: string;
}
export const CheckNameAvailabilityInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DeviceUpdate/checknameavailability",
      apiVersion: "2023-07-01",
    }),
  ) as unknown as Schema.Codec<CheckNameAvailabilityInput>;

// Output Schema
export interface CheckNameAvailabilityOutput {
  nameAvailable?: boolean;
  reason?: "Invalid" | "AlreadyExists";
  message?: string;
}
export const CheckNameAvailabilityOutput =
  /*@__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.Literals(["Invalid", "AlreadyExists"])),
    message: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<CheckNameAvailabilityOutput>;

// The operation
/**
 * Checks ADU resource name availability.
 *
 * @param api-version - ADU schema API version.
 * @param subscriptionId - The Azure subscription ID.
 * @param name - The name of the resource for which availability needs to be checked.
 * @param type - The resource type.
 */
export const CheckNameAvailability = /*@__PURE__*/ API.make(() => ({
  inputSchema: CheckNameAvailabilityInput,
  outputSchema: CheckNameAvailabilityOutput,
}));
// Input Schema
export interface InstancesCreateInput {
  resourceGroupName: string;
  subscriptionId: string;
  accountName: string;
  instanceName: string;
  properties: {
    provisioningState?:
      | "Succeeded"
      | "Deleted"
      | "Failed"
      | "Canceled"
      | "Accepted"
      | "Creating";
    accountName?: string;
    iotHubs?: { resourceId: string }[];
    enableDiagnostics?: boolean;
    diagnosticStorageProperties?: {
      authenticationType: "KeyBased";
      connectionString?: string | Redacted.Redacted<string>;
      resourceId: string;
    };
  };
  tags?: Record<string, string>;
  location: string;
}
export const InstancesCreateInput = /*@__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  instanceName: Schema.String.pipe(T.PathParam()),
  properties: Schema.Struct({
    provisioningState: Schema.optional(
      Schema.Literals([
        "Succeeded",
        "Deleted",
        "Failed",
        "Canceled",
        "Accepted",
        "Creating",
      ]),
    ),
    accountName: Schema.optional(Schema.String),
    iotHubs: Schema.optional(
      Schema.Array(
        Schema.Struct({
          resourceId: Schema.String,
        }),
      ),
    ),
    enableDiagnostics: Schema.optional(Schema.Boolean),
    diagnosticStorageProperties: Schema.optional(
      Schema.Struct({
        authenticationType: Schema.Literals(["KeyBased"]),
        connectionString: Schema.optional(SensitiveString),
        resourceId: Schema.String,
      }),
    ),
  }),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.String,
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceUpdate/accounts/{accountName}/instances/{instanceName}",
    apiVersion: "2023-07-01",
  }),
) as unknown as Schema.Codec<InstancesCreateInput>;

// Output Schema
export interface InstancesCreateOutput {
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
export const InstancesCreateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<InstancesCreateOutput>;

// The operation
/**
 * Creates or updates instance.
 *
 * @param resourceGroupName - The resource group name.
 * @param api-version - ADU schema API version.
 * @param subscriptionId - The Azure subscription ID.
 * @param accountName - Account name.
 * @param instanceName - Instance name.
 */
export const InstancesCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: InstancesCreateInput,
  outputSchema: InstancesCreateOutput,
}));
// Input Schema
export interface InstancesDeleteInput {
  resourceGroupName: string;
  subscriptionId: string;
  accountName: string;
  instanceName: string;
}
export const InstancesDeleteInput = /*@__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  instanceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceUpdate/accounts/{accountName}/instances/{instanceName}",
    apiVersion: "2023-07-01",
  }),
) as unknown as Schema.Codec<InstancesDeleteInput>;

// Output Schema
export type InstancesDeleteOutput = void;
export const InstancesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<InstancesDeleteOutput>;

// The operation
/**
 * Deletes instance.
 *
 * @param resourceGroupName - The resource group name.
 * @param api-version - ADU schema API version.
 * @param subscriptionId - The Azure subscription ID.
 * @param accountName - Account name.
 * @param instanceName - Instance name.
 */
export const InstancesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: InstancesDeleteInput,
  outputSchema: InstancesDeleteOutput,
}));
// Input Schema
export interface InstancesGetInput {
  resourceGroupName: string;
  subscriptionId: string;
  accountName: string;
  instanceName: string;
}
export const InstancesGetInput = /*@__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  instanceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceUpdate/accounts/{accountName}/instances/{instanceName}",
    apiVersion: "2023-07-01",
  }),
) as unknown as Schema.Codec<InstancesGetInput>;

// Output Schema
export interface InstancesGetOutput {
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
export const InstancesGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<InstancesGetOutput>;

// The operation
/**
 * Returns instance details for the given instance and account name.
 *
 * @param resourceGroupName - The resource group name.
 * @param api-version - ADU schema API version.
 * @param subscriptionId - The Azure subscription ID.
 * @param accountName - Account name.
 * @param instanceName - Instance name.
 */
export const InstancesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: InstancesGetInput,
  outputSchema: InstancesGetOutput,
}));
// Input Schema
export interface InstancesListByAccountInput {
  resourceGroupName: string;
  subscriptionId: string;
  accountName: string;
}
export const InstancesListByAccountInput =
  /*@__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceUpdate/accounts/{accountName}/instances",
      apiVersion: "2023-07-01",
    }),
  ) as unknown as Schema.Codec<InstancesListByAccountInput>;

// Output Schema
export interface InstancesListByAccountOutput {
  nextLink?: string;
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
}
export const InstancesListByAccountOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<InstancesListByAccountOutput>;

// The operation
/**
 * Returns instances for the given account name.
 *
 * @param resourceGroupName - The resource group name.
 * @param api-version - ADU schema API version.
 * @param subscriptionId - The Azure subscription ID.
 * @param accountName - Account name.
 */
export const InstancesListByAccount = /*@__PURE__*/ API.make(() => ({
  inputSchema: InstancesListByAccountInput,
  outputSchema: InstancesListByAccountOutput,
}));
// Input Schema
export interface InstancesUpdateInput {
  resourceGroupName: string;
  subscriptionId: string;
  accountName: string;
  instanceName: string;
  tags?: Record<string, string>;
}
export const InstancesUpdateInput = /*@__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  instanceName: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceUpdate/accounts/{accountName}/instances/{instanceName}",
    apiVersion: "2023-07-01",
  }),
) as unknown as Schema.Codec<InstancesUpdateInput>;

// Output Schema
export interface InstancesUpdateOutput {
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
export const InstancesUpdateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<InstancesUpdateOutput>;

// The operation
/**
 * Updates instance's tags.
 *
 * @param resourceGroupName - The resource group name.
 * @param api-version - ADU schema API version.
 * @param subscriptionId - The Azure subscription ID.
 * @param accountName - Account name.
 * @param instanceName - Instance name.
 */
export const InstancesUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: InstancesUpdateInput,
  outputSchema: InstancesUpdateOutput,
}));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.DeviceUpdate/operations",
    apiVersion: "2023-07-01",
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
 * Returns list of operations for Microsoft.DeviceUpdate resource provider.
 *
 * @param api-version - ADU schema API version.
 */
export const OperationsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface PrivateEndpointConnectionProxiesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  privateEndpointConnectionProxyId: string;
  properties?: {
    provisioningState?: "Succeeded" | "Creating" | "Deleting" | "Failed";
  };
  eTag?: string;
  remotePrivateEndpoint?: {
    id?: string;
    location?: string;
    immutableSubscriptionId?: string;
    immutableResourceId?: string;
    vnetTrafficTag?: string;
    manualPrivateLinkServiceConnections?: {
      name?: string;
      groupIds?: string[];
      requestMessage?: string;
    }[];
    privateLinkServiceConnections?: {
      name?: string;
      groupIds?: string[];
      requestMessage?: string;
    }[];
    privateLinkServiceProxies?: {
      id?: string;
      remotePrivateLinkServiceConnectionState?: {
        status?: "Pending" | "Approved" | "Rejected";
        description?: string;
        actionsRequired?: string;
      };
      remotePrivateEndpointConnection?: { id?: string };
      groupConnectivityInformation?: {
        groupId?: string;
        memberName?: string;
        customerVisibleFqdns?: string[];
        internalFqdn?: string;
        redirectMapId?: string;
        privateLinkServiceArmRegion?: string;
      }[];
    }[];
    connectionDetails?: {
      id?: string;
      privateIpAddress?: string;
      linkIdentifier?: string;
      groupId?: string;
      memberName?: string;
    }[];
  };
  status?: string;
}
export const PrivateEndpointConnectionProxiesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionProxyId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals(["Succeeded", "Creating", "Deleting", "Failed"]),
        ),
      }),
    ),
    eTag: Schema.optional(Schema.String),
    remotePrivateEndpoint: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        location: Schema.optional(Schema.String),
        immutableSubscriptionId: Schema.optional(Schema.String),
        immutableResourceId: Schema.optional(Schema.String),
        vnetTrafficTag: Schema.optional(Schema.String),
        manualPrivateLinkServiceConnections: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              groupIds: Schema.optional(Schema.Array(Schema.String)),
              requestMessage: Schema.optional(Schema.String),
            }),
          ),
        ),
        privateLinkServiceConnections: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              groupIds: Schema.optional(Schema.Array(Schema.String)),
              requestMessage: Schema.optional(Schema.String),
            }),
          ),
        ),
        privateLinkServiceProxies: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              remotePrivateLinkServiceConnectionState: Schema.optional(
                Schema.Struct({
                  status: Schema.optional(
                    Schema.Literals(["Pending", "Approved", "Rejected"]),
                  ),
                  description: Schema.optional(Schema.String),
                  actionsRequired: Schema.optional(Schema.String),
                }),
              ),
              remotePrivateEndpointConnection: Schema.optional(
                Schema.Struct({
                  id: Schema.optional(Schema.String),
                }),
              ),
              groupConnectivityInformation: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    groupId: Schema.optional(Schema.String),
                    memberName: Schema.optional(Schema.String),
                    customerVisibleFqdns: Schema.optional(
                      Schema.Array(Schema.String),
                    ),
                    internalFqdn: Schema.optional(Schema.String),
                    redirectMapId: Schema.optional(Schema.String),
                    privateLinkServiceArmRegion: Schema.optional(Schema.String),
                  }),
                ),
              ),
            }),
          ),
        ),
        connectionDetails: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              privateIpAddress: Schema.optional(Schema.String),
              linkIdentifier: Schema.optional(Schema.String),
              groupId: Schema.optional(Schema.String),
              memberName: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    status: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceUpdate/accounts/{accountName}/privateEndpointConnectionProxies/{privateEndpointConnectionProxyId}",
      apiVersion: "2023-07-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionProxiesCreateOrUpdateInput>;

// Output Schema
export interface PrivateEndpointConnectionProxiesCreateOrUpdateOutput {
  eTag?: string;
  remotePrivateEndpoint?: {
    id?: string;
    location?: string;
    immutableSubscriptionId?: string;
    immutableResourceId?: string;
    vnetTrafficTag?: string;
    manualPrivateLinkServiceConnections?: {
      name?: string;
      groupIds?: string[];
      requestMessage?: string;
    }[];
    privateLinkServiceConnections?: {
      name?: string;
      groupIds?: string[];
      requestMessage?: string;
    }[];
    privateLinkServiceProxies?: {
      id?: string;
      remotePrivateLinkServiceConnectionState?: {
        status?: "Pending" | "Approved" | "Rejected";
        description?: string;
        actionsRequired?: string;
      };
      remotePrivateEndpointConnection?: { id?: string };
      groupConnectivityInformation?: {
        groupId?: string;
        memberName?: string;
        customerVisibleFqdns?: string[];
        internalFqdn?: string;
        redirectMapId?: string;
        privateLinkServiceArmRegion?: string;
      }[];
    }[];
    connectionDetails?: {
      id?: string;
      privateIpAddress?: string;
      linkIdentifier?: string;
      groupId?: string;
      memberName?: string;
    }[];
  };
  status?: string;
}
export const PrivateEndpointConnectionProxiesCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    eTag: Schema.optional(Schema.String),
    remotePrivateEndpoint: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        location: Schema.optional(Schema.String),
        immutableSubscriptionId: Schema.optional(Schema.String),
        immutableResourceId: Schema.optional(Schema.String),
        vnetTrafficTag: Schema.optional(Schema.String),
        manualPrivateLinkServiceConnections: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              groupIds: Schema.optional(Schema.Array(Schema.String)),
              requestMessage: Schema.optional(Schema.String),
            }),
          ),
        ),
        privateLinkServiceConnections: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              groupIds: Schema.optional(Schema.Array(Schema.String)),
              requestMessage: Schema.optional(Schema.String),
            }),
          ),
        ),
        privateLinkServiceProxies: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              remotePrivateLinkServiceConnectionState: Schema.optional(
                Schema.Struct({
                  status: Schema.optional(
                    Schema.Literals(["Pending", "Approved", "Rejected"]),
                  ),
                  description: Schema.optional(Schema.String),
                  actionsRequired: Schema.optional(Schema.String),
                }),
              ),
              remotePrivateEndpointConnection: Schema.optional(
                Schema.Struct({
                  id: Schema.optional(Schema.String),
                }),
              ),
              groupConnectivityInformation: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    groupId: Schema.optional(Schema.String),
                    memberName: Schema.optional(Schema.String),
                    customerVisibleFqdns: Schema.optional(
                      Schema.Array(Schema.String),
                    ),
                    internalFqdn: Schema.optional(Schema.String),
                    redirectMapId: Schema.optional(Schema.String),
                    privateLinkServiceArmRegion: Schema.optional(Schema.String),
                  }),
                ),
              ),
            }),
          ),
        ),
        connectionDetails: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              privateIpAddress: Schema.optional(Schema.String),
              linkIdentifier: Schema.optional(Schema.String),
              groupId: Schema.optional(Schema.String),
              memberName: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    status: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PrivateEndpointConnectionProxiesCreateOrUpdateOutput>;

// The operation
/**
 * (INTERNAL - DO NOT USE) Creates or updates the specified private endpoint connection proxy resource associated with the device update account.
 *
 * @param api-version - ADU schema API version.
 * @param subscriptionId - The Azure subscription ID.
 * @param resourceGroupName - The resource group name.
 * @param accountName - Account name.
 * @param privateEndpointConnectionProxyId - The ID of the private endpoint connection proxy object.
 */
export const PrivateEndpointConnectionProxiesCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionProxiesCreateOrUpdateInput,
    outputSchema: PrivateEndpointConnectionProxiesCreateOrUpdateOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionProxiesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  privateEndpointConnectionProxyId: string;
}
export const PrivateEndpointConnectionProxiesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionProxyId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceUpdate/accounts/{accountName}/privateEndpointConnectionProxies/{privateEndpointConnectionProxyId}",
      apiVersion: "2023-07-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionProxiesDeleteInput>;

// Output Schema
export type PrivateEndpointConnectionProxiesDeleteOutput = void;
export const PrivateEndpointConnectionProxiesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<PrivateEndpointConnectionProxiesDeleteOutput>;

// The operation
/**
 * (INTERNAL - DO NOT USE) Deletes the specified private endpoint connection proxy associated with the device update account.
 *
 * @param api-version - ADU schema API version.
 * @param subscriptionId - The Azure subscription ID.
 * @param resourceGroupName - The resource group name.
 * @param accountName - Account name.
 * @param privateEndpointConnectionProxyId - The ID of the private endpoint connection proxy object.
 */
export const PrivateEndpointConnectionProxiesDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionProxiesDeleteInput,
    outputSchema: PrivateEndpointConnectionProxiesDeleteOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionProxiesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  privateEndpointConnectionProxyId: string;
}
export const PrivateEndpointConnectionProxiesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionProxyId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceUpdate/accounts/{accountName}/privateEndpointConnectionProxies/{privateEndpointConnectionProxyId}",
      apiVersion: "2023-07-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionProxiesGetInput>;

// Output Schema
export interface PrivateEndpointConnectionProxiesGetOutput {
  eTag?: string;
  remotePrivateEndpoint?: {
    id?: string;
    location?: string;
    immutableSubscriptionId?: string;
    immutableResourceId?: string;
    vnetTrafficTag?: string;
    manualPrivateLinkServiceConnections?: {
      name?: string;
      groupIds?: string[];
      requestMessage?: string;
    }[];
    privateLinkServiceConnections?: {
      name?: string;
      groupIds?: string[];
      requestMessage?: string;
    }[];
    privateLinkServiceProxies?: {
      id?: string;
      remotePrivateLinkServiceConnectionState?: {
        status?: "Pending" | "Approved" | "Rejected";
        description?: string;
        actionsRequired?: string;
      };
      remotePrivateEndpointConnection?: { id?: string };
      groupConnectivityInformation?: {
        groupId?: string;
        memberName?: string;
        customerVisibleFqdns?: string[];
        internalFqdn?: string;
        redirectMapId?: string;
        privateLinkServiceArmRegion?: string;
      }[];
    }[];
    connectionDetails?: {
      id?: string;
      privateIpAddress?: string;
      linkIdentifier?: string;
      groupId?: string;
      memberName?: string;
    }[];
  };
  status?: string;
}
export const PrivateEndpointConnectionProxiesGetOutput =
  /*@__PURE__*/ Schema.Struct({
    eTag: Schema.optional(Schema.String),
    remotePrivateEndpoint: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        location: Schema.optional(Schema.String),
        immutableSubscriptionId: Schema.optional(Schema.String),
        immutableResourceId: Schema.optional(Schema.String),
        vnetTrafficTag: Schema.optional(Schema.String),
        manualPrivateLinkServiceConnections: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              groupIds: Schema.optional(Schema.Array(Schema.String)),
              requestMessage: Schema.optional(Schema.String),
            }),
          ),
        ),
        privateLinkServiceConnections: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              groupIds: Schema.optional(Schema.Array(Schema.String)),
              requestMessage: Schema.optional(Schema.String),
            }),
          ),
        ),
        privateLinkServiceProxies: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              remotePrivateLinkServiceConnectionState: Schema.optional(
                Schema.Struct({
                  status: Schema.optional(
                    Schema.Literals(["Pending", "Approved", "Rejected"]),
                  ),
                  description: Schema.optional(Schema.String),
                  actionsRequired: Schema.optional(Schema.String),
                }),
              ),
              remotePrivateEndpointConnection: Schema.optional(
                Schema.Struct({
                  id: Schema.optional(Schema.String),
                }),
              ),
              groupConnectivityInformation: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    groupId: Schema.optional(Schema.String),
                    memberName: Schema.optional(Schema.String),
                    customerVisibleFqdns: Schema.optional(
                      Schema.Array(Schema.String),
                    ),
                    internalFqdn: Schema.optional(Schema.String),
                    redirectMapId: Schema.optional(Schema.String),
                    privateLinkServiceArmRegion: Schema.optional(Schema.String),
                  }),
                ),
              ),
            }),
          ),
        ),
        connectionDetails: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              privateIpAddress: Schema.optional(Schema.String),
              linkIdentifier: Schema.optional(Schema.String),
              groupId: Schema.optional(Schema.String),
              memberName: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    status: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PrivateEndpointConnectionProxiesGetOutput>;

// The operation
/**
 * (INTERNAL - DO NOT USE) Get the specified private endpoint connection proxy associated with the device update account.
 *
 * @param api-version - ADU schema API version.
 * @param subscriptionId - The Azure subscription ID.
 * @param resourceGroupName - The resource group name.
 * @param accountName - Account name.
 * @param privateEndpointConnectionProxyId - The ID of the private endpoint connection proxy object.
 */
export const PrivateEndpointConnectionProxiesGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionProxiesGetInput,
    outputSchema: PrivateEndpointConnectionProxiesGetOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionProxiesListByAccountInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const PrivateEndpointConnectionProxiesListByAccountInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceUpdate/accounts/{accountName}/privateEndpointConnectionProxies",
      apiVersion: "2023-07-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionProxiesListByAccountInput>;

// Output Schema
export interface PrivateEndpointConnectionProxiesListByAccountOutput {
  value?: {
    eTag?: string;
    remotePrivateEndpoint?: {
      id?: string;
      location?: string;
      immutableSubscriptionId?: string;
      immutableResourceId?: string;
      vnetTrafficTag?: string;
      manualPrivateLinkServiceConnections?: {
        name?: string;
        groupIds?: string[];
        requestMessage?: string;
      }[];
      privateLinkServiceConnections?: {
        name?: string;
        groupIds?: string[];
        requestMessage?: string;
      }[];
      privateLinkServiceProxies?: {
        id?: string;
        remotePrivateLinkServiceConnectionState?: {
          status?: "Pending" | "Approved" | "Rejected";
          description?: string;
          actionsRequired?: string;
        };
        remotePrivateEndpointConnection?: { id?: string };
        groupConnectivityInformation?: {
          groupId?: string;
          memberName?: string;
          customerVisibleFqdns?: string[];
          internalFqdn?: string;
          redirectMapId?: string;
          privateLinkServiceArmRegion?: string;
        }[];
      }[];
      connectionDetails?: {
        id?: string;
        privateIpAddress?: string;
        linkIdentifier?: string;
        groupId?: string;
        memberName?: string;
      }[];
    };
    status?: string;
  }[];
  nextLink?: string;
}
export const PrivateEndpointConnectionProxiesListByAccountOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          eTag: Schema.optional(Schema.String),
          remotePrivateEndpoint: Schema.optional(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              location: Schema.optional(Schema.String),
              immutableSubscriptionId: Schema.optional(Schema.String),
              immutableResourceId: Schema.optional(Schema.String),
              vnetTrafficTag: Schema.optional(Schema.String),
              manualPrivateLinkServiceConnections: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    groupIds: Schema.optional(Schema.Array(Schema.String)),
                    requestMessage: Schema.optional(Schema.String),
                  }),
                ),
              ),
              privateLinkServiceConnections: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    groupIds: Schema.optional(Schema.Array(Schema.String)),
                    requestMessage: Schema.optional(Schema.String),
                  }),
                ),
              ),
              privateLinkServiceProxies: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    id: Schema.optional(Schema.String),
                    remotePrivateLinkServiceConnectionState: Schema.optional(
                      Schema.Struct({
                        status: Schema.optional(
                          Schema.Literals(["Pending", "Approved", "Rejected"]),
                        ),
                        description: Schema.optional(Schema.String),
                        actionsRequired: Schema.optional(Schema.String),
                      }),
                    ),
                    remotePrivateEndpointConnection: Schema.optional(
                      Schema.Struct({
                        id: Schema.optional(Schema.String),
                      }),
                    ),
                    groupConnectivityInformation: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          groupId: Schema.optional(Schema.String),
                          memberName: Schema.optional(Schema.String),
                          customerVisibleFqdns: Schema.optional(
                            Schema.Array(Schema.String),
                          ),
                          internalFqdn: Schema.optional(Schema.String),
                          redirectMapId: Schema.optional(Schema.String),
                          privateLinkServiceArmRegion: Schema.optional(
                            Schema.String,
                          ),
                        }),
                      ),
                    ),
                  }),
                ),
              ),
              connectionDetails: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    id: Schema.optional(Schema.String),
                    privateIpAddress: Schema.optional(Schema.String),
                    linkIdentifier: Schema.optional(Schema.String),
                    groupId: Schema.optional(Schema.String),
                    memberName: Schema.optional(Schema.String),
                  }),
                ),
              ),
            }),
          ),
          status: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PrivateEndpointConnectionProxiesListByAccountOutput>;

// The operation
/**
 * (INTERNAL - DO NOT USE) List all private endpoint connection proxies in a device update account.
 *
 * @param api-version - ADU schema API version.
 * @param subscriptionId - The Azure subscription ID.
 * @param resourceGroupName - The resource group name.
 * @param accountName - Account name.
 */
export const PrivateEndpointConnectionProxiesListByAccount =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionProxiesListByAccountInput,
    outputSchema: PrivateEndpointConnectionProxiesListByAccountOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionProxiesUpdatePrivateEndpointPropertiesInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  privateEndpointConnectionProxyId: string;
  id?: string;
  location?: string;
  immutableSubscriptionId?: string;
  immutableResourceId?: string;
  vnetTrafficTag?: string;
}
export const PrivateEndpointConnectionProxiesUpdatePrivateEndpointPropertiesInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionProxyId: Schema.String.pipe(T.PathParam()),
    id: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    immutableSubscriptionId: Schema.optional(Schema.String),
    immutableResourceId: Schema.optional(Schema.String),
    vnetTrafficTag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceUpdate/accounts/{accountName}/privateEndpointConnectionProxies/{privateEndpointConnectionProxyId}/updatePrivateEndpointProperties",
      apiVersion: "2023-07-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionProxiesUpdatePrivateEndpointPropertiesInput>;

// Output Schema
export type PrivateEndpointConnectionProxiesUpdatePrivateEndpointPropertiesOutput =
  void;
export const PrivateEndpointConnectionProxiesUpdatePrivateEndpointPropertiesOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<PrivateEndpointConnectionProxiesUpdatePrivateEndpointPropertiesOutput>;

// The operation
/**
 * (INTERNAL - DO NOT USE) Updates a private endpoint inside the private endpoint connection proxy object.
 *
 * @param api-version - ADU schema API version.
 * @param subscriptionId - The Azure subscription ID.
 * @param resourceGroupName - The resource group name.
 * @param accountName - Account name.
 * @param privateEndpointConnectionProxyId - The ID of the private endpoint connection proxy object.
 */
export const PrivateEndpointConnectionProxiesUpdatePrivateEndpointProperties =
  /*@__PURE__*/ API.make(() => ({
    inputSchema:
      PrivateEndpointConnectionProxiesUpdatePrivateEndpointPropertiesInput,
    outputSchema:
      PrivateEndpointConnectionProxiesUpdatePrivateEndpointPropertiesOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionProxiesValidateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  privateEndpointConnectionProxyId: string;
  properties?: {
    provisioningState?: "Succeeded" | "Creating" | "Deleting" | "Failed";
  };
  eTag?: string;
  remotePrivateEndpoint?: {
    id?: string;
    location?: string;
    immutableSubscriptionId?: string;
    immutableResourceId?: string;
    vnetTrafficTag?: string;
    manualPrivateLinkServiceConnections?: {
      name?: string;
      groupIds?: string[];
      requestMessage?: string;
    }[];
    privateLinkServiceConnections?: {
      name?: string;
      groupIds?: string[];
      requestMessage?: string;
    }[];
    privateLinkServiceProxies?: {
      id?: string;
      remotePrivateLinkServiceConnectionState?: {
        status?: "Pending" | "Approved" | "Rejected";
        description?: string;
        actionsRequired?: string;
      };
      remotePrivateEndpointConnection?: { id?: string };
      groupConnectivityInformation?: {
        groupId?: string;
        memberName?: string;
        customerVisibleFqdns?: string[];
        internalFqdn?: string;
        redirectMapId?: string;
        privateLinkServiceArmRegion?: string;
      }[];
    }[];
    connectionDetails?: {
      id?: string;
      privateIpAddress?: string;
      linkIdentifier?: string;
      groupId?: string;
      memberName?: string;
    }[];
  };
  status?: string;
}
export const PrivateEndpointConnectionProxiesValidateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionProxyId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals(["Succeeded", "Creating", "Deleting", "Failed"]),
        ),
      }),
    ),
    eTag: Schema.optional(Schema.String),
    remotePrivateEndpoint: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        location: Schema.optional(Schema.String),
        immutableSubscriptionId: Schema.optional(Schema.String),
        immutableResourceId: Schema.optional(Schema.String),
        vnetTrafficTag: Schema.optional(Schema.String),
        manualPrivateLinkServiceConnections: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              groupIds: Schema.optional(Schema.Array(Schema.String)),
              requestMessage: Schema.optional(Schema.String),
            }),
          ),
        ),
        privateLinkServiceConnections: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              groupIds: Schema.optional(Schema.Array(Schema.String)),
              requestMessage: Schema.optional(Schema.String),
            }),
          ),
        ),
        privateLinkServiceProxies: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              remotePrivateLinkServiceConnectionState: Schema.optional(
                Schema.Struct({
                  status: Schema.optional(
                    Schema.Literals(["Pending", "Approved", "Rejected"]),
                  ),
                  description: Schema.optional(Schema.String),
                  actionsRequired: Schema.optional(Schema.String),
                }),
              ),
              remotePrivateEndpointConnection: Schema.optional(
                Schema.Struct({
                  id: Schema.optional(Schema.String),
                }),
              ),
              groupConnectivityInformation: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    groupId: Schema.optional(Schema.String),
                    memberName: Schema.optional(Schema.String),
                    customerVisibleFqdns: Schema.optional(
                      Schema.Array(Schema.String),
                    ),
                    internalFqdn: Schema.optional(Schema.String),
                    redirectMapId: Schema.optional(Schema.String),
                    privateLinkServiceArmRegion: Schema.optional(Schema.String),
                  }),
                ),
              ),
            }),
          ),
        ),
        connectionDetails: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              privateIpAddress: Schema.optional(Schema.String),
              linkIdentifier: Schema.optional(Schema.String),
              groupId: Schema.optional(Schema.String),
              memberName: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    status: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceUpdate/accounts/{accountName}/privateEndpointConnectionProxies/{privateEndpointConnectionProxyId}/validate",
      apiVersion: "2023-07-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionProxiesValidateInput>;

// Output Schema
export type PrivateEndpointConnectionProxiesValidateOutput = void;
export const PrivateEndpointConnectionProxiesValidateOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<PrivateEndpointConnectionProxiesValidateOutput>;

// The operation
/**
 * (INTERNAL - DO NOT USE) Validates a private endpoint connection proxy object.
 *
 * @param api-version - ADU schema API version.
 * @param subscriptionId - The Azure subscription ID.
 * @param resourceGroupName - The resource group name.
 * @param accountName - Account name.
 * @param privateEndpointConnectionProxyId - The ID of the private endpoint connection proxy object.
 */
export const PrivateEndpointConnectionProxiesValidate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionProxiesValidateInput,
    outputSchema: PrivateEndpointConnectionProxiesValidateOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  privateEndpointConnectionName: string;
  properties: {
    privateEndpoint?: { id?: string };
    privateLinkServiceConnectionState: {
      status?: "Pending" | "Approved" | "Rejected";
      description?: string;
      actionsRequired?: string;
    };
    groupIds?: string[];
    provisioningState?: "Succeeded" | "Creating" | "Deleting" | "Failed";
  };
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
export const PrivateEndpointConnectionsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      privateEndpoint: Schema.optional(
        Schema.Struct({
          id: Schema.optional(Schema.String),
        }),
      ),
      privateLinkServiceConnectionState: Schema.Struct({
        status: Schema.optional(
          Schema.Literals(["Pending", "Approved", "Rejected"]),
        ),
        description: Schema.optional(Schema.String),
        actionsRequired: Schema.optional(Schema.String),
      }),
      groupIds: Schema.optional(Schema.Array(Schema.String)),
      provisioningState: Schema.optional(
        Schema.Literals(["Succeeded", "Creating", "Deleting", "Failed"]),
      ),
    }),
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
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceUpdate/accounts/{accountName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2023-07-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsCreateOrUpdateInput>;

// Output Schema
export interface PrivateEndpointConnectionsCreateOrUpdateOutput {
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
export const PrivateEndpointConnectionsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsCreateOrUpdateOutput>;

// The operation
/**
 * Update the state of specified private endpoint connection associated with the device update account.
 *
 * @param api-version - ADU schema API version.
 * @param subscriptionId - The Azure subscription ID.
 * @param resourceGroupName - The resource group name.
 * @param accountName - Account name.
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource
 * @param properties - Resource properties.
 */
export const PrivateEndpointConnectionsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
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
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceUpdate/accounts/{accountName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2023-07-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsDeleteInput>;

// Output Schema
export type PrivateEndpointConnectionsDeleteOutput = void;
export const PrivateEndpointConnectionsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<PrivateEndpointConnectionsDeleteOutput>;

// The operation
/**
 * Deletes the specified private endpoint connection associated with the device update account.
 *
 * @param api-version - ADU schema API version.
 * @param subscriptionId - The Azure subscription ID.
 * @param resourceGroupName - The resource group name.
 * @param accountName - Account name.
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource
 */
export const PrivateEndpointConnectionsDelete =
  /*@__PURE__*/ API.make(() => ({
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
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceUpdate/accounts/{accountName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2023-07-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsGetInput>;

// Output Schema
export interface PrivateEndpointConnectionsGetOutput {
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
export const PrivateEndpointConnectionsGetOutput =
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
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsGetOutput>;

// The operation
/**
 * Get the specified private endpoint connection associated with the device update account.
 *
 * @param api-version - ADU schema API version.
 * @param subscriptionId - The Azure subscription ID.
 * @param resourceGroupName - The resource group name.
 * @param accountName - Account name.
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource
 */
export const PrivateEndpointConnectionsGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsGetInput,
    outputSchema: PrivateEndpointConnectionsGetOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsListByAccountInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const PrivateEndpointConnectionsListByAccountInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceUpdate/accounts/{accountName}/privateEndpointConnections",
      apiVersion: "2023-07-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsListByAccountInput>;

// Output Schema
export interface PrivateEndpointConnectionsListByAccountOutput {
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
}
export const PrivateEndpointConnectionsListByAccountOutput =
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
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsListByAccountOutput>;

// The operation
/**
 * List all private endpoint connections in a device update account.
 *
 * @param api-version - ADU schema API version.
 * @param subscriptionId - The Azure subscription ID.
 * @param resourceGroupName - The resource group name.
 * @param accountName - Account name.
 */
export const PrivateEndpointConnectionsListByAccount =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsListByAccountInput,
    outputSchema: PrivateEndpointConnectionsListByAccountOutput,
  }));
// Input Schema
export interface PrivateLinkResourcesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  groupId: string;
}
export const PrivateLinkResourcesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    groupId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceUpdate/accounts/{accountName}/privateLinkResources/{groupId}",
      apiVersion: "2023-07-01",
    }),
  ) as unknown as Schema.Codec<PrivateLinkResourcesGetInput>;

// Output Schema
export interface PrivateLinkResourcesGetOutput {
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
export const PrivateLinkResourcesGetOutput =
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
  }) as unknown as Schema.Codec<PrivateLinkResourcesGetOutput>;

// The operation
/**
 * Get the specified private link resource associated with the device update account.
 *
 * @param api-version - ADU schema API version.
 * @param subscriptionId - The Azure subscription ID.
 * @param resourceGroupName - The resource group name.
 * @param accountName - Account name.
 * @param groupId - The group ID of the private link resource.
 */
export const PrivateLinkResourcesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: PrivateLinkResourcesGetInput,
  outputSchema: PrivateLinkResourcesGetOutput,
}));
// Input Schema
export interface PrivateLinkResourcesListByAccountInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const PrivateLinkResourcesListByAccountInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceUpdate/accounts/{accountName}/privateLinkResources",
      apiVersion: "2023-07-01",
    }),
  ) as unknown as Schema.Codec<PrivateLinkResourcesListByAccountInput>;

// Output Schema
export interface PrivateLinkResourcesListByAccountOutput {
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
export const PrivateLinkResourcesListByAccountOutput =
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
  }) as unknown as Schema.Codec<PrivateLinkResourcesListByAccountOutput>;

// The operation
/**
 * List all private link resources in a device update account.
 *
 * @param api-version - ADU schema API version.
 * @param subscriptionId - The Azure subscription ID.
 * @param resourceGroupName - The resource group name.
 * @param accountName - Account name.
 */
export const PrivateLinkResourcesListByAccount =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkResourcesListByAccountInput,
    outputSchema: PrivateLinkResourcesListByAccountOutput,
  }));
