/**
 * Azure Netapp API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveOutputString, SensitiveString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface AccountsChangeKeyVaultInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  keyVaultUri: string;
  keyName: string;
  keyVaultResourceId?: string;
  keyVaultPrivateEndpoints: {
    virtualNetworkId?: string;
    privateEndpointId?: string;
  }[];
}
export const AccountsChangeKeyVaultInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    keyVaultUri: Schema.String,
    keyName: Schema.String,
    keyVaultResourceId: Schema.optional(Schema.String),
    keyVaultPrivateEndpoints: Schema.Array(
      Schema.Struct({
        virtualNetworkId: Schema.optional(Schema.String),
        privateEndpointId: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/changeKeyVault",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<AccountsChangeKeyVaultInput>;

// Output Schema
export type AccountsChangeKeyVaultOutput = void;
export const AccountsChangeKeyVaultOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<AccountsChangeKeyVaultOutput>;

// The operation
/**
 * Affects existing volumes that are encrypted with Key Vault/Managed HSM, and new volumes. Supports HSM to Key Vault, Key Vault to HSM, HSM to HSM and Key Vault to Key Vault.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 */
export const AccountsChangeKeyVault = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AccountsChangeKeyVaultInput,
    outputSchema: AccountsChangeKeyVaultOutput,
  }),
);
// Input Schema
export interface AccountsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  properties?: {
    provisioningState?: string;
    activeDirectories?: {
      activeDirectoryId?: string | null;
      username?: string;
      password?: string | Redacted.Redacted<string>;
      domain?: string;
      dns?: string;
      status?: "Created" | "InUse" | "Deleted" | "Error" | "Updating";
      statusDetails?: string;
      smbServerName?: string;
      organizationalUnit?: string;
      site?: string;
      backupOperators?: string[];
      administrators?: string[];
      kdcIP?: string;
      adName?: string;
      serverRootCACertificate?: string;
      aesEncryption?: boolean;
      ldapSigning?: boolean;
      securityOperators?: string[];
      ldapOverTLS?: boolean;
      allowLocalNfsUsersWithLdap?: boolean;
      encryptDCConnections?: boolean;
      ldapSearchScope?: {
        userDN?: string;
        groupDN?: string;
        groupMembershipFilter?: string;
      };
      preferredServersForLdapClient?: string;
    }[];
    encryption?: {
      keySource?: "Microsoft.NetApp" | "Microsoft.KeyVault";
      keyVaultProperties?: {
        keyVaultId?: string;
        keyVaultUri: string;
        keyName: string;
        keyVaultResourceId?: string;
        status?: "Created" | "InUse" | "Deleted" | "Error" | "Updating";
      };
      identity?: {
        principalId?: string;
        userAssignedIdentity?: string;
        federatedClientId?: string;
      };
    };
    disableShowmount?: boolean | null;
    nfsV4IDDomain?: string;
    multiAdStatus?: "Disabled" | "Enabled";
  };
  etag?: string;
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
    >;
  };
  tags?: Record<string, string>;
  location: string;
}
export const AccountsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(Schema.String),
        activeDirectories: Schema.optional(
          Schema.Array(
            Schema.Struct({
              activeDirectoryId: Schema.optional(Schema.NullOr(Schema.String)),
              username: Schema.optional(Schema.String),
              password: Schema.optional(SensitiveString),
              domain: Schema.optional(Schema.String),
              dns: Schema.optional(Schema.String),
              status: Schema.optional(
                Schema.Literals([
                  "Created",
                  "InUse",
                  "Deleted",
                  "Error",
                  "Updating",
                ]),
              ),
              statusDetails: Schema.optional(Schema.String),
              smbServerName: Schema.optional(Schema.String),
              organizationalUnit: Schema.optional(Schema.String),
              site: Schema.optional(Schema.String),
              backupOperators: Schema.optional(Schema.Array(Schema.String)),
              administrators: Schema.optional(Schema.Array(Schema.String)),
              kdcIP: Schema.optional(Schema.String),
              adName: Schema.optional(Schema.String),
              serverRootCACertificate: Schema.optional(Schema.String),
              aesEncryption: Schema.optional(Schema.Boolean),
              ldapSigning: Schema.optional(Schema.Boolean),
              securityOperators: Schema.optional(Schema.Array(Schema.String)),
              ldapOverTLS: Schema.optional(Schema.Boolean),
              allowLocalNfsUsersWithLdap: Schema.optional(Schema.Boolean),
              encryptDCConnections: Schema.optional(Schema.Boolean),
              ldapSearchScope: Schema.optional(
                Schema.Struct({
                  userDN: Schema.optional(Schema.String),
                  groupDN: Schema.optional(Schema.String),
                  groupMembershipFilter: Schema.optional(Schema.String),
                }),
              ),
              preferredServersForLdapClient: Schema.optional(Schema.String),
            }),
          ),
        ),
        encryption: Schema.optional(
          Schema.Struct({
            keySource: Schema.optional(
              Schema.Literals(["Microsoft.NetApp", "Microsoft.KeyVault"]),
            ),
            keyVaultProperties: Schema.optional(
              Schema.Struct({
                keyVaultId: Schema.optional(Schema.String),
                keyVaultUri: Schema.String,
                keyName: Schema.String,
                keyVaultResourceId: Schema.optional(Schema.String),
                status: Schema.optional(
                  Schema.Literals([
                    "Created",
                    "InUse",
                    "Deleted",
                    "Error",
                    "Updating",
                  ]),
                ),
              }),
            ),
            identity: Schema.optional(
              Schema.Struct({
                principalId: Schema.optional(Schema.String),
                userAssignedIdentity: Schema.optional(Schema.String),
                federatedClientId: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
        disableShowmount: Schema.optional(Schema.NullOr(Schema.Boolean)),
        nfsV4IDDomain: Schema.optional(Schema.String),
        multiAdStatus: Schema.optional(
          Schema.Literals(["Disabled", "Enabled"]),
        ),
      }),
    ),
    etag: Schema.optional(Schema.String),
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
          Schema.Record(
            Schema.String,
            Schema.Struct({
              principalId: Schema.optional(Schema.String),
              clientId: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<AccountsCreateOrUpdateInput>;

// Output Schema
export interface AccountsCreateOrUpdateOutput {
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
export const AccountsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<AccountsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update the specified NetApp account within the resource group
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
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
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<AccountsDeleteInput>;

// Output Schema
export type AccountsDeleteOutput = void;
export const AccountsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<AccountsDeleteOutput>;

// The operation
/**
 * Delete the specified NetApp account
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
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
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}",
    apiVersion: "2026-04-01",
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
export const AccountsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
 * Get the NetApp account
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 */
export const AccountsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AccountsGetInput,
  outputSchema: AccountsGetOutput,
}));
// Input Schema
export interface AccountsGetChangeKeyVaultInformationInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const AccountsGetChangeKeyVaultInformationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/getKeyVaultStatus",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<AccountsGetChangeKeyVaultInformationInput>;

// Output Schema
export interface AccountsGetChangeKeyVaultInformationOutput {
  properties?: {
    keyVaultUri?: string;
    keyName?: string;
    keyVaultResourceId?: string;
    keyVaultPrivateEndpoints?: {
      virtualNetworkId?: string;
      privateEndpointId?: string;
    }[];
  };
}
export const AccountsGetChangeKeyVaultInformationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        keyVaultUri: Schema.optional(Schema.String),
        keyName: Schema.optional(Schema.String),
        keyVaultResourceId: Schema.optional(Schema.String),
        keyVaultPrivateEndpoints: Schema.optional(
          Schema.Array(
            Schema.Struct({
              virtualNetworkId: Schema.optional(Schema.String),
              privateEndpointId: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<AccountsGetChangeKeyVaultInformationOutput>;

// The operation
/**
 * Contains data from encryption.keyVaultProperties as well as information about which private endpoint is used by each encryption sibling set. Response from this endpoint can be modified and used as request body for POST request.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 */
export const AccountsGetChangeKeyVaultInformation =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AccountsGetChangeKeyVaultInformationInput,
    outputSchema: AccountsGetChangeKeyVaultInformationOutput,
  }));
// Input Schema
export interface AccountsListInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const AccountsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<AccountsListInput>;

// Output Schema
export interface AccountsListOutput {
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
export const AccountsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<AccountsListOutput>;

// The operation
/**
 * List and describe all NetApp accounts in the resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const AccountsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AccountsListInput,
  outputSchema: AccountsListOutput,
}));
// Input Schema
export interface AccountsListBySubscriptionInput {
  subscriptionId: string;
}
export const AccountsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.NetApp/netAppAccounts",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<AccountsListBySubscriptionInput>;

// Output Schema
export interface AccountsListBySubscriptionOutput {
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
export const AccountsListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<AccountsListBySubscriptionOutput>;

// The operation
/**
 * List and describe all NetApp accounts in the subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const AccountsListBySubscription = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AccountsListBySubscriptionInput,
    outputSchema: AccountsListBySubscriptionOutput,
  }),
);
// Input Schema
export interface AccountsRenewCredentialsInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const AccountsRenewCredentialsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/renewCredentials",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<AccountsRenewCredentialsInput>;

// Output Schema
export type AccountsRenewCredentialsOutput = void;
export const AccountsRenewCredentialsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<AccountsRenewCredentialsOutput>;

// The operation
/**
 * Renew identity credentials that are used to authenticate to key vault, for customer-managed key encryption. If encryption.identity.principalId does not match identity.principalId, running this operation will fix it.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 */
export const AccountsRenewCredentials = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AccountsRenewCredentialsInput,
    outputSchema: AccountsRenewCredentialsOutput,
  }),
);
// Input Schema
export interface AccountsTransitionToCmkInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  virtualNetworkId: string;
  privateEndpointId: string;
}
export const AccountsTransitionToCmkInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    virtualNetworkId: Schema.String,
    privateEndpointId: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/transitiontocmk",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<AccountsTransitionToCmkInput>;

// Output Schema
export type AccountsTransitionToCmkOutput = void;
export const AccountsTransitionToCmkOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<AccountsTransitionToCmkOutput>;

// The operation
/**
 * Transitions all volumes in a VNet to a different encryption key source (Microsoft-managed key or Azure Key Vault). Operation fails if targeted volumes share encryption sibling set with volumes from another account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 */
export const AccountsTransitionToCmk = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AccountsTransitionToCmkInput,
    outputSchema: AccountsTransitionToCmkOutput,
  }),
);
// Input Schema
export interface AccountsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  location?: string;
  id?: string;
  name?: string;
  type?: string;
  tags?: Record<string, string>;
  properties?: {
    provisioningState?: string;
    activeDirectories?: {
      activeDirectoryId?: string | null;
      username?: string;
      password?: string | Redacted.Redacted<string>;
      domain?: string;
      dns?: string;
      status?: "Created" | "InUse" | "Deleted" | "Error" | "Updating";
      statusDetails?: string;
      smbServerName?: string;
      organizationalUnit?: string;
      site?: string;
      backupOperators?: string[];
      administrators?: string[];
      kdcIP?: string;
      adName?: string;
      serverRootCACertificate?: string;
      aesEncryption?: boolean;
      ldapSigning?: boolean;
      securityOperators?: string[];
      ldapOverTLS?: boolean;
      allowLocalNfsUsersWithLdap?: boolean;
      encryptDCConnections?: boolean;
      ldapSearchScope?: {
        userDN?: string;
        groupDN?: string;
        groupMembershipFilter?: string;
      };
      preferredServersForLdapClient?: string;
    }[];
    encryption?: {
      keySource?: "Microsoft.NetApp" | "Microsoft.KeyVault";
      keyVaultProperties?: {
        keyVaultId?: string;
        keyVaultUri: string;
        keyName: string;
        keyVaultResourceId?: string;
        status?: "Created" | "InUse" | "Deleted" | "Error" | "Updating";
      };
      identity?: {
        principalId?: string;
        userAssignedIdentity?: string;
        federatedClientId?: string;
      };
    };
    disableShowmount?: boolean | null;
    nfsV4IDDomain?: string;
    multiAdStatus?: "Disabled" | "Enabled";
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
    >;
  };
}
export const AccountsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  location: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  properties: Schema.optional(
    Schema.Struct({
      provisioningState: Schema.optional(Schema.String),
      activeDirectories: Schema.optional(
        Schema.Array(
          Schema.Struct({
            activeDirectoryId: Schema.optional(Schema.NullOr(Schema.String)),
            username: Schema.optional(Schema.String),
            password: Schema.optional(SensitiveString),
            domain: Schema.optional(Schema.String),
            dns: Schema.optional(Schema.String),
            status: Schema.optional(
              Schema.Literals([
                "Created",
                "InUse",
                "Deleted",
                "Error",
                "Updating",
              ]),
            ),
            statusDetails: Schema.optional(Schema.String),
            smbServerName: Schema.optional(Schema.String),
            organizationalUnit: Schema.optional(Schema.String),
            site: Schema.optional(Schema.String),
            backupOperators: Schema.optional(Schema.Array(Schema.String)),
            administrators: Schema.optional(Schema.Array(Schema.String)),
            kdcIP: Schema.optional(Schema.String),
            adName: Schema.optional(Schema.String),
            serverRootCACertificate: Schema.optional(Schema.String),
            aesEncryption: Schema.optional(Schema.Boolean),
            ldapSigning: Schema.optional(Schema.Boolean),
            securityOperators: Schema.optional(Schema.Array(Schema.String)),
            ldapOverTLS: Schema.optional(Schema.Boolean),
            allowLocalNfsUsersWithLdap: Schema.optional(Schema.Boolean),
            encryptDCConnections: Schema.optional(Schema.Boolean),
            ldapSearchScope: Schema.optional(
              Schema.Struct({
                userDN: Schema.optional(Schema.String),
                groupDN: Schema.optional(Schema.String),
                groupMembershipFilter: Schema.optional(Schema.String),
              }),
            ),
            preferredServersForLdapClient: Schema.optional(Schema.String),
          }),
        ),
      ),
      encryption: Schema.optional(
        Schema.Struct({
          keySource: Schema.optional(
            Schema.Literals(["Microsoft.NetApp", "Microsoft.KeyVault"]),
          ),
          keyVaultProperties: Schema.optional(
            Schema.Struct({
              keyVaultId: Schema.optional(Schema.String),
              keyVaultUri: Schema.String,
              keyName: Schema.String,
              keyVaultResourceId: Schema.optional(Schema.String),
              status: Schema.optional(
                Schema.Literals([
                  "Created",
                  "InUse",
                  "Deleted",
                  "Error",
                  "Updating",
                ]),
              ),
            }),
          ),
          identity: Schema.optional(
            Schema.Struct({
              principalId: Schema.optional(Schema.String),
              userAssignedIdentity: Schema.optional(Schema.String),
              federatedClientId: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
      disableShowmount: Schema.optional(Schema.NullOr(Schema.Boolean)),
      nfsV4IDDomain: Schema.optional(Schema.String),
      multiAdStatus: Schema.optional(Schema.Literals(["Disabled", "Enabled"])),
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
        Schema.Record(
          Schema.String,
          Schema.Struct({
            principalId: Schema.optional(Schema.String),
            clientId: Schema.optional(Schema.String),
          }),
        ),
      ),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}",
    apiVersion: "2026-04-01",
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
export const AccountsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
 * Patch the specified NetApp account
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 */
export const AccountsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AccountsUpdateInput,
  outputSchema: AccountsUpdateOutput,
}));
// Input Schema
export interface BackupPoliciesCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  backupPolicyName: string;
  properties: {
    backupPolicyId?: string;
    provisioningState?: string;
    dailyBackupsToKeep?: number;
    weeklyBackupsToKeep?: number;
    monthlyBackupsToKeep?: number;
    volumesAssigned?: number;
    enabled?: boolean;
    volumeBackups?: {
      volumeName?: string;
      volumeResourceId?: string;
      backupsCount?: number;
      policyEnabled?: boolean;
    }[];
  };
  etag?: string;
  tags?: Record<string, string>;
  location: string;
}
export const BackupPoliciesCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    backupPolicyName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      backupPolicyId: Schema.optional(Schema.String),
      provisioningState: Schema.optional(Schema.String),
      dailyBackupsToKeep: Schema.optional(Schema.Number),
      weeklyBackupsToKeep: Schema.optional(Schema.Number),
      monthlyBackupsToKeep: Schema.optional(Schema.Number),
      volumesAssigned: Schema.optional(Schema.Number),
      enabled: Schema.optional(Schema.Boolean),
      volumeBackups: Schema.optional(
        Schema.Array(
          Schema.Struct({
            volumeName: Schema.optional(Schema.String),
            volumeResourceId: Schema.optional(Schema.String),
            backupsCount: Schema.optional(Schema.Number),
            policyEnabled: Schema.optional(Schema.Boolean),
          }),
        ),
      ),
    }),
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/backupPolicies/{backupPolicyName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<BackupPoliciesCreateInput>;

// Output Schema
export interface BackupPoliciesCreateOutput {
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
export const BackupPoliciesCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<BackupPoliciesCreateOutput>;

// The operation
/**
 * Create a backup policy for Netapp Account
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param backupPolicyName - Backup policy Name which uniquely identify backup policy.
 */
export const BackupPoliciesCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BackupPoliciesCreateInput,
    outputSchema: BackupPoliciesCreateOutput,
  }),
);
// Input Schema
export interface BackupPoliciesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  backupPolicyName: string;
}
export const BackupPoliciesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    backupPolicyName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/backupPolicies/{backupPolicyName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<BackupPoliciesDeleteInput>;

// Output Schema
export type BackupPoliciesDeleteOutput = void;
export const BackupPoliciesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<BackupPoliciesDeleteOutput>;

// The operation
/**
 * Delete backup policy
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param backupPolicyName - Backup policy Name which uniquely identify backup policy.
 */
export const BackupPoliciesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BackupPoliciesDeleteInput,
    outputSchema: BackupPoliciesDeleteOutput,
  }),
);
// Input Schema
export interface BackupPoliciesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  backupPolicyName: string;
}
export const BackupPoliciesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    backupPolicyName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/backupPolicies/{backupPolicyName}",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<BackupPoliciesGetInput>;

// Output Schema
export interface BackupPoliciesGetOutput {
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
export const BackupPoliciesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<BackupPoliciesGetOutput>;

// The operation
/**
 * Get a particular backup Policy
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param backupPolicyName - Backup policy Name which uniquely identify backup policy.
 */
export const BackupPoliciesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BackupPoliciesGetInput,
  outputSchema: BackupPoliciesGetOutput,
}));
// Input Schema
export interface BackupPoliciesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const BackupPoliciesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/backupPolicies",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<BackupPoliciesListInput>;

// Output Schema
export interface BackupPoliciesListOutput {
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
export const BackupPoliciesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<BackupPoliciesListOutput>;

// The operation
/**
 * List backup policies for Netapp Account
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 */
export const BackupPoliciesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BackupPoliciesListInput,
  outputSchema: BackupPoliciesListOutput,
}));
// Input Schema
export interface BackupPoliciesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  backupPolicyName: string;
  location?: string;
  id?: string;
  name?: string;
  type?: string;
  tags?: Record<string, string>;
  properties?: {
    backupPolicyId?: string;
    provisioningState?: string;
    dailyBackupsToKeep?: number;
    weeklyBackupsToKeep?: number;
    monthlyBackupsToKeep?: number;
    volumesAssigned?: number;
    enabled?: boolean;
    volumeBackups?: {
      volumeName?: string;
      volumeResourceId?: string;
      backupsCount?: number;
      policyEnabled?: boolean;
    }[];
  };
}
export const BackupPoliciesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    backupPolicyName: Schema.String.pipe(T.PathParam()),
    location: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(
      Schema.Struct({
        backupPolicyId: Schema.optional(Schema.String),
        provisioningState: Schema.optional(Schema.String),
        dailyBackupsToKeep: Schema.optional(Schema.Number),
        weeklyBackupsToKeep: Schema.optional(Schema.Number),
        monthlyBackupsToKeep: Schema.optional(Schema.Number),
        volumesAssigned: Schema.optional(Schema.Number),
        enabled: Schema.optional(Schema.Boolean),
        volumeBackups: Schema.optional(
          Schema.Array(
            Schema.Struct({
              volumeName: Schema.optional(Schema.String),
              volumeResourceId: Schema.optional(Schema.String),
              backupsCount: Schema.optional(Schema.Number),
              policyEnabled: Schema.optional(Schema.Boolean),
            }),
          ),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/backupPolicies/{backupPolicyName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<BackupPoliciesUpdateInput>;

// Output Schema
export interface BackupPoliciesUpdateOutput {
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
export const BackupPoliciesUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<BackupPoliciesUpdateOutput>;

// The operation
/**
 * Patch a backup policy for Netapp Account
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param backupPolicyName - Backup policy Name which uniquely identify backup policy.
 */
export const BackupPoliciesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BackupPoliciesUpdateInput,
    outputSchema: BackupPoliciesUpdateOutput,
  }),
);
// Input Schema
export interface BackupsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  backupVaultName: string;
  backupName: string;
  properties: {
    backupId?: string;
    creationDate?: string;
    snapshotCreationDate?: string | null;
    completionDate?: string | null;
    provisioningState?: string;
    size?: number;
    label?: string;
    backupType?: "Manual" | "Scheduled";
    failureReason?: string;
    volumeResourceId: string;
    useExistingSnapshot?: boolean;
    snapshotName?: string;
    backupPolicyResourceId?: string;
    isLargeVolume?: boolean;
  };
}
export const BackupsCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  backupVaultName: Schema.String.pipe(T.PathParam()),
  backupName: Schema.String.pipe(T.PathParam()),
  properties: Schema.Struct({
    backupId: Schema.optional(Schema.String),
    creationDate: Schema.optional(Schema.String),
    snapshotCreationDate: Schema.optional(Schema.NullOr(Schema.String)),
    completionDate: Schema.optional(Schema.NullOr(Schema.String)),
    provisioningState: Schema.optional(Schema.String),
    size: Schema.optional(Schema.Number),
    label: Schema.optional(Schema.String),
    backupType: Schema.optional(Schema.Literals(["Manual", "Scheduled"])),
    failureReason: Schema.optional(Schema.String),
    volumeResourceId: Schema.String,
    useExistingSnapshot: Schema.optional(Schema.Boolean),
    snapshotName: Schema.optional(Schema.String),
    backupPolicyResourceId: Schema.optional(Schema.String),
    isLargeVolume: Schema.optional(Schema.Boolean),
  }),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/backupVaults/{backupVaultName}/backups/{backupName}",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<BackupsCreateInput>;

// Output Schema
export interface BackupsCreateOutput {
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
export const BackupsCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<BackupsCreateOutput>;

// The operation
/**
 * Create a backup under the Backup Vault
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param backupVaultName - The name of the Backup Vault
 * @param backupName - The name of the backup
 */
export const BackupsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BackupsCreateInput,
  outputSchema: BackupsCreateOutput,
}));
// Input Schema
export interface BackupsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  backupVaultName: string;
  backupName: string;
}
export const BackupsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  backupVaultName: Schema.String.pipe(T.PathParam()),
  backupName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/backupVaults/{backupVaultName}/backups/{backupName}",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<BackupsDeleteInput>;

// Output Schema
export type BackupsDeleteOutput = void;
export const BackupsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<BackupsDeleteOutput>;

// The operation
/**
 * Delete a Backup under the Backup Vault
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param backupVaultName - The name of the Backup Vault
 * @param backupName - The name of the backup
 */
export const BackupsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BackupsDeleteInput,
  outputSchema: BackupsDeleteOutput,
}));
// Input Schema
export interface BackupsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  backupVaultName: string;
  backupName: string;
}
export const BackupsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  backupVaultName: Schema.String.pipe(T.PathParam()),
  backupName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/backupVaults/{backupVaultName}/backups/{backupName}",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<BackupsGetInput>;

// Output Schema
export interface BackupsGetOutput {
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
export const BackupsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<BackupsGetOutput>;

// The operation
/**
 * Get the specified Backup under Backup Vault.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param backupVaultName - The name of the Backup Vault
 * @param backupName - The name of the backup
 */
export const BackupsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BackupsGetInput,
  outputSchema: BackupsGetOutput,
}));
// Input Schema
export interface BackupsGetLatestStatusInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  poolName: string;
  volumeName: string;
}
export const BackupsGetLatestStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    poolName: Schema.String.pipe(T.PathParam()),
    volumeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/latestBackupStatus/current",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<BackupsGetLatestStatusInput>;

// Output Schema
export interface BackupsGetLatestStatusOutput {
  healthy?: boolean;
  relationshipStatus?: "Idle" | "Transferring" | "Failed" | "Unknown";
  mirrorState?: "Uninitialized" | "Mirrored" | "Broken";
  unhealthyReason?: string;
  errorMessage?: string;
  lastTransferSize?: number;
  lastTransferType?: string;
  totalTransferBytes?: number;
  transferProgressBytes?: number;
}
export const BackupsGetLatestStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    healthy: Schema.optional(Schema.Boolean),
    relationshipStatus: Schema.optional(
      Schema.Literals(["Idle", "Transferring", "Failed", "Unknown"]),
    ),
    mirrorState: Schema.optional(
      Schema.Literals(["Uninitialized", "Mirrored", "Broken"]),
    ),
    unhealthyReason: Schema.optional(Schema.String),
    errorMessage: Schema.optional(Schema.String),
    lastTransferSize: Schema.optional(Schema.Number),
    lastTransferType: Schema.optional(Schema.String),
    totalTransferBytes: Schema.optional(Schema.Number),
    transferProgressBytes: Schema.optional(Schema.Number),
  }) as unknown as Schema.Codec<BackupsGetLatestStatusOutput>;

// The operation
/**
 * Get the latest status of the backup for a volume
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param poolName - The name of the capacity pool
 * @param volumeName - The name of the volume
 */
export const BackupsGetLatestStatus = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BackupsGetLatestStatusInput,
    outputSchema: BackupsGetLatestStatusOutput,
  }),
);
// Input Schema
export interface BackupsGetVolumeLatestRestoreStatusInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  poolName: string;
  volumeName: string;
}
export const BackupsGetVolumeLatestRestoreStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    poolName: Schema.String.pipe(T.PathParam()),
    volumeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/latestRestoreStatus/current",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<BackupsGetVolumeLatestRestoreStatusInput>;

// Output Schema
export interface BackupsGetVolumeLatestRestoreStatusOutput {
  healthy?: boolean;
  relationshipStatus?: "Idle" | "Transferring" | "Failed" | "Unknown";
  mirrorState?: "Uninitialized" | "Mirrored" | "Broken";
  unhealthyReason?: string;
  errorMessage?: string;
  totalTransferBytes?: number;
}
export const BackupsGetVolumeLatestRestoreStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    healthy: Schema.optional(Schema.Boolean),
    relationshipStatus: Schema.optional(
      Schema.Literals(["Idle", "Transferring", "Failed", "Unknown"]),
    ),
    mirrorState: Schema.optional(
      Schema.Literals(["Uninitialized", "Mirrored", "Broken"]),
    ),
    unhealthyReason: Schema.optional(Schema.String),
    errorMessage: Schema.optional(Schema.String),
    totalTransferBytes: Schema.optional(Schema.Number),
  }) as unknown as Schema.Codec<BackupsGetVolumeLatestRestoreStatusOutput>;

// The operation
/**
 * Get the latest status of the restore for a volume
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param poolName - The name of the capacity pool
 * @param volumeName - The name of the volume
 */
export const BackupsGetVolumeLatestRestoreStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BackupsGetVolumeLatestRestoreStatusInput,
    outputSchema: BackupsGetVolumeLatestRestoreStatusOutput,
  }));
// Input Schema
export interface BackupsListByVaultInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  backupVaultName: string;
  $filter?: string;
}
export const BackupsListByVaultInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    backupVaultName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/backupVaults/{backupVaultName}/backups",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<BackupsListByVaultInput>;

// Output Schema
export interface BackupsListByVaultOutput {
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
export const BackupsListByVaultOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<BackupsListByVaultOutput>;

// The operation
/**
 * List all backups Under a Backup Vault
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param backupVaultName - The name of the Backup Vault
 * @param $filter - An option to specify the VolumeResourceId. If present, then only returns the backups under the specified volume
 */
export const BackupsListByVault = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BackupsListByVaultInput,
  outputSchema: BackupsListByVaultOutput,
}));
// Input Schema
export interface BackupsUnderAccountMigrateBackupsInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  backupVaultId: string;
}
export const BackupsUnderAccountMigrateBackupsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    backupVaultId: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/migrateBackups",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<BackupsUnderAccountMigrateBackupsInput>;

// Output Schema
export type BackupsUnderAccountMigrateBackupsOutput = void;
export const BackupsUnderAccountMigrateBackupsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<BackupsUnderAccountMigrateBackupsOutput>;

// The operation
/**
 * Migrate the backups under a NetApp account to backup vault
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 */
export const BackupsUnderAccountMigrateBackups =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BackupsUnderAccountMigrateBackupsInput,
    outputSchema: BackupsUnderAccountMigrateBackupsOutput,
  }));
// Input Schema
export interface BackupsUnderBackupVaultRestoreFilesInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  backupVaultName: string;
  backupName: string;
  fileList: string[];
  restoreFilePath?: string;
  destinationVolumeId: string;
}
export const BackupsUnderBackupVaultRestoreFilesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    backupVaultName: Schema.String.pipe(T.PathParam()),
    backupName: Schema.String.pipe(T.PathParam()),
    fileList: Schema.Array(Schema.String),
    restoreFilePath: Schema.optional(Schema.String),
    destinationVolumeId: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/backupVaults/{backupVaultName}/backups/{backupName}/restoreFiles",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<BackupsUnderBackupVaultRestoreFilesInput>;

// Output Schema
export type BackupsUnderBackupVaultRestoreFilesOutput = void;
export const BackupsUnderBackupVaultRestoreFilesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<BackupsUnderBackupVaultRestoreFilesOutput>;

// The operation
/**
 * Restore the specified files from the specified backup to the active filesystem
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param backupVaultName - The name of the Backup Vault
 * @param backupName - The name of the backup
 */
export const BackupsUnderBackupVaultRestoreFiles =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BackupsUnderBackupVaultRestoreFilesInput,
    outputSchema: BackupsUnderBackupVaultRestoreFilesOutput,
  }));
// Input Schema
export interface BackupsUnderVolumeMigrateBackupsInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  poolName: string;
  volumeName: string;
  backupVaultId: string;
}
export const BackupsUnderVolumeMigrateBackupsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    poolName: Schema.String.pipe(T.PathParam()),
    volumeName: Schema.String.pipe(T.PathParam()),
    backupVaultId: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/migrateBackups",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<BackupsUnderVolumeMigrateBackupsInput>;

// Output Schema
export type BackupsUnderVolumeMigrateBackupsOutput = void;
export const BackupsUnderVolumeMigrateBackupsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<BackupsUnderVolumeMigrateBackupsOutput>;

// The operation
/**
 * Migrate the backups under volume to backup vault
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param poolName - The name of the capacity pool
 * @param volumeName - The name of the volume
 */
export const BackupsUnderVolumeMigrateBackups =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BackupsUnderVolumeMigrateBackupsInput,
    outputSchema: BackupsUnderVolumeMigrateBackupsOutput,
  }));
// Input Schema
export interface BackupsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  backupVaultName: string;
  backupName: string;
  properties?: { label?: string };
}
export const BackupsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  backupVaultName: Schema.String.pipe(T.PathParam()),
  backupName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      label: Schema.optional(Schema.String),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/backupVaults/{backupVaultName}/backups/{backupName}",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<BackupsUpdateInput>;

// Output Schema
export interface BackupsUpdateOutput {
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
export const BackupsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<BackupsUpdateOutput>;

// The operation
/**
 * Patch a Backup under the Backup Vault
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param backupVaultName - The name of the Backup Vault
 * @param backupName - The name of the backup
 */
export const BackupsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BackupsUpdateInput,
  outputSchema: BackupsUpdateOutput,
}));
// Input Schema
export interface BackupVaultsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  backupVaultName: string;
  properties?: { provisioningState?: string };
  tags?: Record<string, string>;
  location: string;
}
export const BackupVaultsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    backupVaultName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(Schema.String),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/backupVaults/{backupVaultName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<BackupVaultsCreateOrUpdateInput>;

// Output Schema
export interface BackupVaultsCreateOrUpdateOutput {
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
export const BackupVaultsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<BackupVaultsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update the specified Backup Vault in the NetApp account
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param backupVaultName - The name of the Backup Vault
 */
export const BackupVaultsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BackupVaultsCreateOrUpdateInput,
    outputSchema: BackupVaultsCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface BackupVaultsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  backupVaultName: string;
}
export const BackupVaultsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    backupVaultName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/backupVaults/{backupVaultName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<BackupVaultsDeleteInput>;

// Output Schema
export type BackupVaultsDeleteOutput = void;
export const BackupVaultsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<BackupVaultsDeleteOutput>;

// The operation
/**
 * Delete the specified Backup Vault
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param backupVaultName - The name of the Backup Vault
 */
export const BackupVaultsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BackupVaultsDeleteInput,
  outputSchema: BackupVaultsDeleteOutput,
}));
// Input Schema
export interface BackupVaultsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  backupVaultName: string;
}
export const BackupVaultsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  backupVaultName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/backupVaults/{backupVaultName}",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<BackupVaultsGetInput>;

// Output Schema
export interface BackupVaultsGetOutput {
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
export const BackupVaultsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<BackupVaultsGetOutput>;

// The operation
/**
 * Get the Backup Vault
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param backupVaultName - The name of the Backup Vault
 */
export const BackupVaultsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BackupVaultsGetInput,
  outputSchema: BackupVaultsGetOutput,
}));
// Input Schema
export interface BackupVaultsListByNetAppAccountInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const BackupVaultsListByNetAppAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/backupVaults",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<BackupVaultsListByNetAppAccountInput>;

// Output Schema
export interface BackupVaultsListByNetAppAccountOutput {
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
export const BackupVaultsListByNetAppAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<BackupVaultsListByNetAppAccountOutput>;

// The operation
/**
 * List and describe all Backup Vaults in the NetApp account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 */
export const BackupVaultsListByNetAppAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BackupVaultsListByNetAppAccountInput,
    outputSchema: BackupVaultsListByNetAppAccountOutput,
  }));
// Input Schema
export interface BackupVaultsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  backupVaultName: string;
  tags?: Record<string, string>;
}
export const BackupVaultsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    backupVaultName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/backupVaults/{backupVaultName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<BackupVaultsUpdateInput>;

// Output Schema
export interface BackupVaultsUpdateOutput {
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
export const BackupVaultsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<BackupVaultsUpdateOutput>;

// The operation
/**
 * Patch the specified NetApp Backup Vault
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param backupVaultName - The name of the Backup Vault
 */
export const BackupVaultsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BackupVaultsUpdateInput,
  outputSchema: BackupVaultsUpdateOutput,
}));
// Input Schema
export interface BucketsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  poolName: string;
  volumeName: string;
  bucketName: string;
  properties?: {
    path?: string;
    fileSystemUser?: {
      nfsUser?: { userId?: number; groupId?: number };
      cifsUser?: { username?: string };
    };
    provisioningState?:
      | "Accepted"
      | "Creating"
      | "Patching"
      | "Updating"
      | "Deleting"
      | "Moving"
      | "Failed"
      | "Succeeded";
    status?: "NoCredentialsSet" | "CredentialsExpired" | "Active";
    server?: {
      fqdn?: string;
      certificateCommonName?: string;
      certificateExpiryDate?: string;
      ipAddress?: string;
      certificateObject?: string;
      onCertificateConflictAction?: "Update" | "Fail";
    };
    permissions?: "ReadOnly" | "ReadWrite";
    akvDetails?: {
      certificateAkvDetails?: {
        certificateKeyVaultUri?: string;
        certificateName?: string;
      };
      credentialsAkvDetails?: {
        credentialsKeyVaultUri?: string;
        secretName?: string;
      };
    };
  };
}
export const BucketsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    poolName: Schema.String.pipe(T.PathParam()),
    volumeName: Schema.String.pipe(T.PathParam()),
    bucketName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        path: Schema.optional(Schema.String),
        fileSystemUser: Schema.optional(
          Schema.Struct({
            nfsUser: Schema.optional(
              Schema.Struct({
                userId: Schema.optional(Schema.Number),
                groupId: Schema.optional(Schema.Number),
              }),
            ),
            cifsUser: Schema.optional(
              Schema.Struct({
                username: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Accepted",
            "Creating",
            "Patching",
            "Updating",
            "Deleting",
            "Moving",
            "Failed",
            "Succeeded",
          ]),
        ),
        status: Schema.optional(
          Schema.Literals(["NoCredentialsSet", "CredentialsExpired", "Active"]),
        ),
        server: Schema.optional(
          Schema.Struct({
            fqdn: Schema.optional(Schema.String),
            certificateCommonName: Schema.optional(Schema.String),
            certificateExpiryDate: Schema.optional(Schema.String),
            ipAddress: Schema.optional(Schema.String),
            certificateObject: Schema.optional(Schema.String),
            onCertificateConflictAction: Schema.optional(
              Schema.Literals(["Update", "Fail"]),
            ),
          }),
        ),
        permissions: Schema.optional(
          Schema.Literals(["ReadOnly", "ReadWrite"]),
        ),
        akvDetails: Schema.optional(
          Schema.Struct({
            certificateAkvDetails: Schema.optional(
              Schema.Struct({
                certificateKeyVaultUri: Schema.optional(Schema.String),
                certificateName: Schema.optional(Schema.String),
              }),
            ),
            credentialsAkvDetails: Schema.optional(
              Schema.Struct({
                credentialsKeyVaultUri: Schema.optional(Schema.String),
                secretName: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/buckets/{bucketName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<BucketsCreateOrUpdateInput>;

// Output Schema
export interface BucketsCreateOrUpdateOutput {
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
export const BucketsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<BucketsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a bucket for a volume. A bucket allows additional services, such as AI services, connect to the volume data contained in those buckets.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param poolName - The name of the capacity pool
 * @param volumeName - The name of the volume
 * @param bucketName - The name of the bucket
 */
export const BucketsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BucketsCreateOrUpdateInput,
    outputSchema: BucketsCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface BucketsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  poolName: string;
  volumeName: string;
  bucketName: string;
}
export const BucketsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  poolName: Schema.String.pipe(T.PathParam()),
  volumeName: Schema.String.pipe(T.PathParam()),
  bucketName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/buckets/{bucketName}",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<BucketsDeleteInput>;

// Output Schema
export type BucketsDeleteOutput = void;
export const BucketsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<BucketsDeleteOutput>;

// The operation
/**
 * Delete a volume's bucket.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param poolName - The name of the capacity pool
 * @param volumeName - The name of the volume
 * @param bucketName - The name of the bucket
 */
export const BucketsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BucketsDeleteInput,
  outputSchema: BucketsDeleteOutput,
}));
// Input Schema
export interface BucketsGenerateAkvCredentialsInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  poolName: string;
  volumeName: string;
  bucketName: string;
  keyPairExpiryDays?: number;
}
export const BucketsGenerateAkvCredentialsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    poolName: Schema.String.pipe(T.PathParam()),
    volumeName: Schema.String.pipe(T.PathParam()),
    bucketName: Schema.String.pipe(T.PathParam()),
    keyPairExpiryDays: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/buckets/{bucketName}/generateAkvCredentials",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<BucketsGenerateAkvCredentialsInput>;

// Output Schema
export type BucketsGenerateAkvCredentialsOutput = void;
export const BucketsGenerateAkvCredentialsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<BucketsGenerateAkvCredentialsOutput>;

// The operation
/**
 * Generate the access key and secret key used for accessing the specified volume bucket and store in Azure Key Vault.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param poolName - The name of the capacity pool
 * @param volumeName - The name of the volume
 * @param bucketName - The name of the bucket
 */
export const BucketsGenerateAkvCredentials =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BucketsGenerateAkvCredentialsInput,
    outputSchema: BucketsGenerateAkvCredentialsOutput,
  }));
// Input Schema
export interface BucketsGenerateCredentialsInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  poolName: string;
  volumeName: string;
  bucketName: string;
  keyPairExpiryDays?: number;
}
export const BucketsGenerateCredentialsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    poolName: Schema.String.pipe(T.PathParam()),
    volumeName: Schema.String.pipe(T.PathParam()),
    bucketName: Schema.String.pipe(T.PathParam()),
    keyPairExpiryDays: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/buckets/{bucketName}/generateCredentials",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<BucketsGenerateCredentialsInput>;

// Output Schema
export interface BucketsGenerateCredentialsOutput {
  accessKey?: string;
  secretKey?: Redacted.Redacted<string>;
  keyPairExpiry?: string;
}
export const BucketsGenerateCredentialsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accessKey: Schema.optional(Schema.String),
    secretKey: Schema.optional(SensitiveOutputString),
    keyPairExpiry: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<BucketsGenerateCredentialsOutput>;

// The operation
/**
 * Generate the access key and secret key used for accessing the specified volume bucket. Also return expiry date and time of key pair (in UTC).
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param poolName - The name of the capacity pool
 * @param volumeName - The name of the volume
 * @param bucketName - The name of the bucket
 */
export const BucketsGenerateCredentials = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BucketsGenerateCredentialsInput,
    outputSchema: BucketsGenerateCredentialsOutput,
  }),
);
// Input Schema
export interface BucketsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  poolName: string;
  volumeName: string;
  bucketName: string;
}
export const BucketsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  poolName: Schema.String.pipe(T.PathParam()),
  volumeName: Schema.String.pipe(T.PathParam()),
  bucketName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/buckets/{bucketName}",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<BucketsGetInput>;

// Output Schema
export interface BucketsGetOutput {
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
export const BucketsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<BucketsGetOutput>;

// The operation
/**
 * Get the details of the specified volume's bucket. A bucket allows additional services, such as AI services, connect to the volume data contained in those buckets.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param poolName - The name of the capacity pool
 * @param volumeName - The name of the volume
 * @param bucketName - The name of the bucket
 */
export const BucketsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BucketsGetInput,
  outputSchema: BucketsGetOutput,
}));
// Input Schema
export interface BucketsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  poolName: string;
  volumeName: string;
}
export const BucketsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  poolName: Schema.String.pipe(T.PathParam()),
  volumeName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/buckets",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<BucketsListInput>;

// Output Schema
export interface BucketsListOutput {
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
export const BucketsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<BucketsListOutput>;

// The operation
/**
 * Describes all buckets belonging to a volume. Buckets allow additional services, such as AI services, connect to the volume data contained in those buckets.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param poolName - The name of the capacity pool
 * @param volumeName - The name of the volume
 */
export const BucketsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BucketsListInput,
  outputSchema: BucketsListOutput,
}));
// Input Schema
export interface BucketsRefreshCertificateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  poolName: string;
  volumeName: string;
  bucketName: string;
}
export const BucketsRefreshCertificateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    poolName: Schema.String.pipe(T.PathParam()),
    volumeName: Schema.String.pipe(T.PathParam()),
    bucketName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/buckets/{bucketName}/refreshCertificate",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<BucketsRefreshCertificateInput>;

// Output Schema
export type BucketsRefreshCertificateOutput = void;
export const BucketsRefreshCertificateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<BucketsRefreshCertificateOutput>;

// The operation
/**
 * This operation will fetch the certificate from Azure Key Vault and install it on the bucket server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param poolName - The name of the capacity pool
 * @param volumeName - The name of the volume
 * @param bucketName - The name of the bucket
 */
export const BucketsRefreshCertificate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BucketsRefreshCertificateInput,
    outputSchema: BucketsRefreshCertificateOutput,
  }),
);
// Input Schema
export interface BucketsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  poolName: string;
  volumeName: string;
  bucketName: string;
  properties?: {
    fileSystemUser?: {
      nfsUser?: { userId?: number; groupId?: number };
      cifsUser?: { username?: string };
    };
    provisioningState?:
      | "Accepted"
      | "Creating"
      | "Patching"
      | "Updating"
      | "Deleting"
      | "Moving"
      | "Failed"
      | "Succeeded";
    server?: {
      fqdn?: string;
      certificateObject?: string;
      onCertificateConflictAction?: "Update" | "Fail";
    };
    permissions?: "ReadOnly" | "ReadWrite";
    akvDetails?: {
      certificateAkvDetails?: {
        certificateKeyVaultUri?: string;
        certificateName?: string;
      };
      credentialsAkvDetails?: {
        credentialsKeyVaultUri?: string;
        secretName?: string;
      };
    };
  };
}
export const BucketsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  poolName: Schema.String.pipe(T.PathParam()),
  volumeName: Schema.String.pipe(T.PathParam()),
  bucketName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      fileSystemUser: Schema.optional(
        Schema.Struct({
          nfsUser: Schema.optional(
            Schema.Struct({
              userId: Schema.optional(Schema.Number),
              groupId: Schema.optional(Schema.Number),
            }),
          ),
          cifsUser: Schema.optional(
            Schema.Struct({
              username: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Accepted",
          "Creating",
          "Patching",
          "Updating",
          "Deleting",
          "Moving",
          "Failed",
          "Succeeded",
        ]),
      ),
      server: Schema.optional(
        Schema.Struct({
          fqdn: Schema.optional(Schema.String),
          certificateObject: Schema.optional(Schema.String),
          onCertificateConflictAction: Schema.optional(
            Schema.Literals(["Update", "Fail"]),
          ),
        }),
      ),
      permissions: Schema.optional(Schema.Literals(["ReadOnly", "ReadWrite"])),
      akvDetails: Schema.optional(
        Schema.Struct({
          certificateAkvDetails: Schema.optional(
            Schema.Struct({
              certificateKeyVaultUri: Schema.optional(Schema.String),
              certificateName: Schema.optional(Schema.String),
            }),
          ),
          credentialsAkvDetails: Schema.optional(
            Schema.Struct({
              credentialsKeyVaultUri: Schema.optional(Schema.String),
              secretName: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/buckets/{bucketName}",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<BucketsUpdateInput>;

// Output Schema
export interface BucketsUpdateOutput {
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
export const BucketsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<BucketsUpdateOutput>;

// The operation
/**
 * Updates the details of a volume bucket.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param poolName - The name of the capacity pool
 * @param volumeName - The name of the volume
 * @param bucketName - The name of the bucket
 */
export const BucketsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BucketsUpdateInput,
  outputSchema: BucketsUpdateOutput,
}));
// Input Schema
export interface CachesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  poolName: string;
  cacheName: string;
  properties: {
    filePath: string;
    size: number;
    exportPolicy?: {
      rules?: {
        ruleIndex?: number;
        unixReadOnly?: boolean;
        unixReadWrite?: boolean;
        kerberos5ReadOnly?: boolean;
        kerberos5ReadWrite?: boolean;
        kerberos5iReadOnly?: boolean;
        kerberos5iReadWrite?: boolean;
        kerberos5pReadOnly?: boolean;
        kerberos5pReadWrite?: boolean;
        cifs?: boolean;
        nfsv3?: boolean;
        nfsv41?: boolean;
        allowedClients?: string;
        hasRootAccess?: boolean;
        chownMode?: "Restricted" | "Unrestricted";
      }[];
    };
    protocolTypes?: ("NFSv3" | "NFSv4" | "SMB")[];
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Failed"
      | "Succeeded"
      | "Canceled";
    cacheState?:
      | "ClusterPeeringOfferSent"
      | "VserverPeeringOfferSent"
      | "Creating"
      | "Succeeded"
      | "Failed";
    cacheSubnetResourceId: string;
    peeringSubnetResourceId: string;
    mountTargets?: {
      mountTargetId?: string;
      ipAddress?: string;
      smbServerFqdn?: string;
    }[];
    kerberos?: "Disabled" | "Enabled";
    smbSettings?: {
      smbEncryption?: "Disabled" | "Enabled";
      smbAccessBasedEnumeration?: "Disabled" | "Enabled";
      smbNonBrowsable?: "Disabled" | "Enabled";
    };
    throughputMibps?: number;
    actualThroughputMibps?: number;
    encryptionKeySource: "Microsoft.NetApp" | "Microsoft.KeyVault";
    keyVaultPrivateEndpointResourceId?: string;
    maximumNumberOfFiles?: number;
    encryption?: "Disabled" | "Enabled";
    language?:
      | "c.utf-8"
      | "utf8mb4"
      | "ar"
      | "ar.utf-8"
      | "hr"
      | "hr.utf-8"
      | "cs"
      | "cs.utf-8"
      | "da"
      | "da.utf-8"
      | "nl"
      | "nl.utf-8"
      | "en"
      | "en.utf-8"
      | "fi"
      | "fi.utf-8"
      | "fr"
      | "fr.utf-8"
      | "de"
      | "de.utf-8"
      | "he"
      | "he.utf-8"
      | "hu"
      | "hu.utf-8"
      | "it"
      | "it.utf-8"
      | "ja"
      | "ja.utf-8"
      | "ja-v1"
      | "ja-v1.utf-8"
      | "ja-jp.pck"
      | "ja-jp.pck.utf-8"
      | "ja-jp.932"
      | "ja-jp.932.utf-8"
      | "ja-jp.pck-v2"
      | "ja-jp.pck-v2.utf-8"
      | "ko"
      | "ko.utf-8"
      | "no"
      | "no.utf-8"
      | "pl"
      | "pl.utf-8"
      | "pt"
      | "pt.utf-8"
      | "c"
      | "ro"
      | "ro.utf-8"
      | "ru"
      | "ru.utf-8"
      | "zh"
      | "zh.utf-8"
      | "zh.gbk"
      | "zh.gbk.utf-8"
      | "zh-tw.big5"
      | "zh-tw.big5.utf-8"
      | "zh-tw"
      | "zh-tw.utf-8"
      | "sk"
      | "sk.utf-8"
      | "sl"
      | "sl.utf-8"
      | "es"
      | "es.utf-8"
      | "sv"
      | "sv.utf-8"
      | "tr"
      | "tr.utf-8"
      | "en-us"
      | "en-us.utf-8";
    ldap?: "Disabled" | "Enabled";
    ldapServerType?: "ActiveDirectory" | "OpenLDAP";
    originClusterInformation: {
      peerClusterName: string;
      peerAddresses: string[];
      peerVserverName: string;
      peerVolumeName: string;
    };
    cifsChangeNotifications?: "Disabled" | "Enabled";
    globalFileLocking?: "Disabled" | "Enabled";
    writeBack?: "Disabled" | "Enabled";
    fileAccessLogs?: "Enabled" | "Disabled";
  };
  etag?: string;
  zones?: string[];
  tags?: Record<string, string>;
  location: string;
}
export const CachesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    poolName: Schema.String.pipe(T.PathParam()),
    cacheName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      filePath: Schema.String,
      size: Schema.Number,
      exportPolicy: Schema.optional(
        Schema.Struct({
          rules: Schema.optional(
            Schema.Array(
              Schema.Struct({
                ruleIndex: Schema.optional(Schema.Number),
                unixReadOnly: Schema.optional(Schema.Boolean),
                unixReadWrite: Schema.optional(Schema.Boolean),
                kerberos5ReadOnly: Schema.optional(Schema.Boolean),
                kerberos5ReadWrite: Schema.optional(Schema.Boolean),
                kerberos5iReadOnly: Schema.optional(Schema.Boolean),
                kerberos5iReadWrite: Schema.optional(Schema.Boolean),
                kerberos5pReadOnly: Schema.optional(Schema.Boolean),
                kerberos5pReadWrite: Schema.optional(Schema.Boolean),
                cifs: Schema.optional(Schema.Boolean),
                nfsv3: Schema.optional(Schema.Boolean),
                nfsv41: Schema.optional(Schema.Boolean),
                allowedClients: Schema.optional(Schema.String),
                hasRootAccess: Schema.optional(Schema.Boolean),
                chownMode: Schema.optional(
                  Schema.Literals(["Restricted", "Unrestricted"]),
                ),
              }),
            ),
          ),
        }),
      ),
      protocolTypes: Schema.optional(
        Schema.Array(Schema.Literals(["NFSv3", "NFSv4", "SMB"])),
      ),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Creating",
          "Updating",
          "Deleting",
          "Failed",
          "Succeeded",
          "Canceled",
        ]),
      ),
      cacheState: Schema.optional(
        Schema.Literals([
          "ClusterPeeringOfferSent",
          "VserverPeeringOfferSent",
          "Creating",
          "Succeeded",
          "Failed",
        ]),
      ),
      cacheSubnetResourceId: Schema.String,
      peeringSubnetResourceId: Schema.String,
      mountTargets: Schema.optional(
        Schema.Array(
          Schema.Struct({
            mountTargetId: Schema.optional(Schema.String),
            ipAddress: Schema.optional(Schema.String),
            smbServerFqdn: Schema.optional(Schema.String),
          }),
        ),
      ),
      kerberos: Schema.optional(Schema.Literals(["Disabled", "Enabled"])),
      smbSettings: Schema.optional(
        Schema.Struct({
          smbEncryption: Schema.optional(
            Schema.Literals(["Disabled", "Enabled"]),
          ),
          smbAccessBasedEnumeration: Schema.optional(
            Schema.Literals(["Disabled", "Enabled"]),
          ),
          smbNonBrowsable: Schema.optional(
            Schema.Literals(["Disabled", "Enabled"]),
          ),
        }),
      ),
      throughputMibps: Schema.optional(Schema.Number),
      actualThroughputMibps: Schema.optional(Schema.Number),
      encryptionKeySource: Schema.Literals([
        "Microsoft.NetApp",
        "Microsoft.KeyVault",
      ]),
      keyVaultPrivateEndpointResourceId: Schema.optional(Schema.String),
      maximumNumberOfFiles: Schema.optional(Schema.Number),
      encryption: Schema.optional(Schema.Literals(["Disabled", "Enabled"])),
      language: Schema.optional(
        Schema.Literals([
          "c.utf-8",
          "utf8mb4",
          "ar",
          "ar.utf-8",
          "hr",
          "hr.utf-8",
          "cs",
          "cs.utf-8",
          "da",
          "da.utf-8",
          "nl",
          "nl.utf-8",
          "en",
          "en.utf-8",
          "fi",
          "fi.utf-8",
          "fr",
          "fr.utf-8",
          "de",
          "de.utf-8",
          "he",
          "he.utf-8",
          "hu",
          "hu.utf-8",
          "it",
          "it.utf-8",
          "ja",
          "ja.utf-8",
          "ja-v1",
          "ja-v1.utf-8",
          "ja-jp.pck",
          "ja-jp.pck.utf-8",
          "ja-jp.932",
          "ja-jp.932.utf-8",
          "ja-jp.pck-v2",
          "ja-jp.pck-v2.utf-8",
          "ko",
          "ko.utf-8",
          "no",
          "no.utf-8",
          "pl",
          "pl.utf-8",
          "pt",
          "pt.utf-8",
          "c",
          "ro",
          "ro.utf-8",
          "ru",
          "ru.utf-8",
          "zh",
          "zh.utf-8",
          "zh.gbk",
          "zh.gbk.utf-8",
          "zh-tw.big5",
          "zh-tw.big5.utf-8",
          "zh-tw",
          "zh-tw.utf-8",
          "sk",
          "sk.utf-8",
          "sl",
          "sl.utf-8",
          "es",
          "es.utf-8",
          "sv",
          "sv.utf-8",
          "tr",
          "tr.utf-8",
          "en-us",
          "en-us.utf-8",
        ]),
      ),
      ldap: Schema.optional(Schema.Literals(["Disabled", "Enabled"])),
      ldapServerType: Schema.optional(
        Schema.Literals(["ActiveDirectory", "OpenLDAP"]),
      ),
      originClusterInformation: Schema.Struct({
        peerClusterName: Schema.String,
        peerAddresses: Schema.Array(Schema.String),
        peerVserverName: Schema.String,
        peerVolumeName: Schema.String,
      }),
      cifsChangeNotifications: Schema.optional(
        Schema.Literals(["Disabled", "Enabled"]),
      ),
      globalFileLocking: Schema.optional(
        Schema.Literals(["Disabled", "Enabled"]),
      ),
      writeBack: Schema.optional(Schema.Literals(["Disabled", "Enabled"])),
      fileAccessLogs: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
    }),
    etag: Schema.optional(Schema.String),
    zones: Schema.optional(Schema.Array(Schema.String)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/caches/{cacheName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<CachesCreateOrUpdateInput>;

// Output Schema
export interface CachesCreateOrUpdateOutput {
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
export const CachesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<CachesCreateOrUpdateOutput>;

// The operation
/**
 * Create or update the specified Cache within the Capacity Pool
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param poolName - The name of the capacity pool
 * @param cacheName - The name of the cache resource.
 */
export const CachesCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CachesCreateOrUpdateInput,
    outputSchema: CachesCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface CachesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  poolName: string;
  cacheName: string;
}
export const CachesDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  poolName: Schema.String.pipe(T.PathParam()),
  cacheName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/caches/{cacheName}",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<CachesDeleteInput>;

// Output Schema
export type CachesDeleteOutput = void;
export const CachesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<CachesDeleteOutput>;

// The operation
/**
 * Delete the specified cache
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param poolName - The name of the capacity pool
 * @param cacheName - The name of the cache resource.
 */
export const CachesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CachesDeleteInput,
  outputSchema: CachesDeleteOutput,
}));
// Input Schema
export interface CachesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  poolName: string;
  cacheName: string;
}
export const CachesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  poolName: Schema.String.pipe(T.PathParam()),
  cacheName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/caches/{cacheName}",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<CachesGetInput>;

// Output Schema
export interface CachesGetOutput {
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
export const CachesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<CachesGetOutput>;

// The operation
/**
 * Get the details of the specified Cache
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param poolName - The name of the capacity pool
 * @param cacheName - The name of the cache resource.
 */
export const CachesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CachesGetInput,
  outputSchema: CachesGetOutput,
}));
// Input Schema
export interface CachesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  poolName: string;
}
export const CachesListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  poolName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/caches",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<CachesListInput>;

// Output Schema
export interface CachesListOutput {
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
export const CachesListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<CachesListOutput>;

// The operation
/**
 * List all Caches within the Capacity Pool
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param poolName - The name of the capacity pool
 */
export const CachesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CachesListInput,
  outputSchema: CachesListOutput,
}));
// Input Schema
export interface CachesListPeeringPassphrasesInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  poolName: string;
  cacheName: string;
}
export const CachesListPeeringPassphrasesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    poolName: Schema.String.pipe(T.PathParam()),
    cacheName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/caches/{cacheName}/listPeeringPassphrases",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<CachesListPeeringPassphrasesInput>;

// Output Schema
export interface CachesListPeeringPassphrasesOutput {
  clusterPeeringCommand: string;
  clusterPeeringPassphrase: string;
  vserverPeeringCommand: string;
  criticalWarning?: string;
}
export const CachesListPeeringPassphrasesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clusterPeeringCommand: Schema.String,
    clusterPeeringPassphrase: Schema.String,
    vserverPeeringCommand: Schema.String,
    criticalWarning: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<CachesListPeeringPassphrasesOutput>;

// The operation
/**
 * This operation will list the cluster peering command, cluster peering passphrase and the vserver peering command
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param poolName - The name of the capacity pool
 * @param cacheName - The name of the cache resource.
 */
export const CachesListPeeringPassphrases =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CachesListPeeringPassphrasesInput,
    outputSchema: CachesListPeeringPassphrasesOutput,
  }));
// Input Schema
export interface CachesPoolChangeInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  poolName: string;
  cacheName: string;
  newPoolResourceId: string;
}
export const CachesPoolChangeInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  poolName: Schema.String.pipe(T.PathParam()),
  cacheName: Schema.String.pipe(T.PathParam()),
  newPoolResourceId: Schema.String,
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/caches/{cacheName}/poolChange",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<CachesPoolChangeInput>;

// Output Schema
export interface CachesPoolChangeOutput {
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
export const CachesPoolChangeOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
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
  },
) as unknown as Schema.Codec<CachesPoolChangeOutput>;

// The operation
/**
 * Moves Cache  to another Capacity Pool
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param poolName - The name of the capacity pool
 * @param cacheName - The name of the cache resource.
 */
export const CachesPoolChange = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CachesPoolChangeInput,
  outputSchema: CachesPoolChangeOutput,
}));
// Input Schema
export interface CachesResetSmbPasswordInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  poolName: string;
  cacheName: string;
}
export const CachesResetSmbPasswordInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    poolName: Schema.String.pipe(T.PathParam()),
    cacheName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/caches/{cacheName}/resetSmbPassword",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<CachesResetSmbPasswordInput>;

// Output Schema
export interface CachesResetSmbPasswordOutput {
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
export const CachesResetSmbPasswordOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<CachesResetSmbPasswordOutput>;

// The operation
/**
 * Resets the SMB password for the cache
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param poolName - The name of the capacity pool
 * @param cacheName - The name of the cache resource.
 */
export const CachesResetSmbPassword = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CachesResetSmbPasswordInput,
    outputSchema: CachesResetSmbPasswordOutput,
  }),
);
// Input Schema
export interface CachesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  poolName: string;
  cacheName: string;
  tags?: Record<string, string>;
  properties?: {
    size?: number;
    exportPolicy?: {
      rules?: {
        ruleIndex?: number;
        unixReadOnly?: boolean;
        unixReadWrite?: boolean;
        kerberos5ReadOnly?: boolean;
        kerberos5ReadWrite?: boolean;
        kerberos5iReadOnly?: boolean;
        kerberos5iReadWrite?: boolean;
        kerberos5pReadOnly?: boolean;
        kerberos5pReadWrite?: boolean;
        cifs?: boolean;
        nfsv3?: boolean;
        nfsv41?: boolean;
        allowedClients?: string;
        hasRootAccess?: boolean;
        chownMode?: "Restricted" | "Unrestricted";
      }[];
    };
    protocolTypes?: ("NFSv3" | "NFSv4" | "SMB")[];
    smbSettings?: {
      smbEncryption?: "Disabled" | "Enabled";
      smbAccessBasedEnumeration?: "Disabled" | "Enabled";
      smbNonBrowsable?: "Disabled" | "Enabled";
    };
    throughputMibps?: number;
    keyVaultPrivateEndpointResourceId?: string;
    cifsChangeNotifications?: "Disabled" | "Enabled";
    writeBack?: "Disabled" | "Enabled";
  };
}
export const CachesUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  poolName: Schema.String.pipe(T.PathParam()),
  cacheName: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  properties: Schema.optional(
    Schema.Struct({
      size: Schema.optional(Schema.Number),
      exportPolicy: Schema.optional(
        Schema.Struct({
          rules: Schema.optional(
            Schema.Array(
              Schema.Struct({
                ruleIndex: Schema.optional(Schema.Number),
                unixReadOnly: Schema.optional(Schema.Boolean),
                unixReadWrite: Schema.optional(Schema.Boolean),
                kerberos5ReadOnly: Schema.optional(Schema.Boolean),
                kerberos5ReadWrite: Schema.optional(Schema.Boolean),
                kerberos5iReadOnly: Schema.optional(Schema.Boolean),
                kerberos5iReadWrite: Schema.optional(Schema.Boolean),
                kerberos5pReadOnly: Schema.optional(Schema.Boolean),
                kerberos5pReadWrite: Schema.optional(Schema.Boolean),
                cifs: Schema.optional(Schema.Boolean),
                nfsv3: Schema.optional(Schema.Boolean),
                nfsv41: Schema.optional(Schema.Boolean),
                allowedClients: Schema.optional(Schema.String),
                hasRootAccess: Schema.optional(Schema.Boolean),
                chownMode: Schema.optional(
                  Schema.Literals(["Restricted", "Unrestricted"]),
                ),
              }),
            ),
          ),
        }),
      ),
      protocolTypes: Schema.optional(
        Schema.Array(Schema.Literals(["NFSv3", "NFSv4", "SMB"])),
      ),
      smbSettings: Schema.optional(
        Schema.Struct({
          smbEncryption: Schema.optional(
            Schema.Literals(["Disabled", "Enabled"]),
          ),
          smbAccessBasedEnumeration: Schema.optional(
            Schema.Literals(["Disabled", "Enabled"]),
          ),
          smbNonBrowsable: Schema.optional(
            Schema.Literals(["Disabled", "Enabled"]),
          ),
        }),
      ),
      throughputMibps: Schema.optional(Schema.Number),
      keyVaultPrivateEndpointResourceId: Schema.optional(Schema.String),
      cifsChangeNotifications: Schema.optional(
        Schema.Literals(["Disabled", "Enabled"]),
      ),
      writeBack: Schema.optional(Schema.Literals(["Disabled", "Enabled"])),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/caches/{cacheName}",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<CachesUpdateInput>;

// Output Schema
export interface CachesUpdateOutput {
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
export const CachesUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<CachesUpdateOutput>;

// The operation
/**
 * Patch the specified Cache
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param poolName - The name of the capacity pool
 * @param cacheName - The name of the cache resource.
 */
export const CachesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CachesUpdateInput,
  outputSchema: CachesUpdateOutput,
}));
// Input Schema
export interface NetAppResourceCheckFilePathAvailabilityInput {
  subscriptionId: string;
  location: string;
  name: string;
  subnetId: string;
  availabilityZone?: string | null;
}
export const NetAppResourceCheckFilePathAvailabilityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
    subnetId: Schema.String,
    availabilityZone: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.NetApp/locations/{location}/checkFilePathAvailability",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<NetAppResourceCheckFilePathAvailabilityInput>;

// Output Schema
export interface NetAppResourceCheckFilePathAvailabilityOutput {
  isAvailable?: boolean;
  reason?: "Invalid" | "AlreadyExists";
  message?: string;
}
export const NetAppResourceCheckFilePathAvailabilityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    isAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.Literals(["Invalid", "AlreadyExists"])),
    message: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<NetAppResourceCheckFilePathAvailabilityOutput>;

// The operation
/**
 * Check file path availability
 *
 * Check if a file path is available.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 */
export const NetAppResourceCheckFilePathAvailability =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetAppResourceCheckFilePathAvailabilityInput,
    outputSchema: NetAppResourceCheckFilePathAvailabilityOutput,
  }));
// Input Schema
export interface NetAppResourceCheckNameAvailabilityInput {
  subscriptionId: string;
  location: string;
  name: string;
  type:
    | "Microsoft.NetApp/netAppAccounts"
    | "Microsoft.NetApp/netAppAccounts/capacityPools"
    | "Microsoft.NetApp/netAppAccounts/capacityPools/volumes"
    | "Microsoft.NetApp/netAppAccounts/capacityPools/volumes/snapshots"
    | "Microsoft.NetApp/netAppAccounts/backupVaults/backups"
    | "Microsoft.NetApp/netAppAccounts/capacityPools/volumes/backups";
  resourceGroup: string;
}
export const NetAppResourceCheckNameAvailabilityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
    type: Schema.Literals([
      "Microsoft.NetApp/netAppAccounts",
      "Microsoft.NetApp/netAppAccounts/capacityPools",
      "Microsoft.NetApp/netAppAccounts/capacityPools/volumes",
      "Microsoft.NetApp/netAppAccounts/capacityPools/volumes/snapshots",
      "Microsoft.NetApp/netAppAccounts/backupVaults/backups",
      "Microsoft.NetApp/netAppAccounts/capacityPools/volumes/backups",
    ]),
    resourceGroup: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.NetApp/locations/{location}/checkNameAvailability",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<NetAppResourceCheckNameAvailabilityInput>;

// Output Schema
export interface NetAppResourceCheckNameAvailabilityOutput {
  isAvailable?: boolean;
  reason?: "Invalid" | "AlreadyExists";
  message?: string;
}
export const NetAppResourceCheckNameAvailabilityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    isAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.Literals(["Invalid", "AlreadyExists"])),
    message: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<NetAppResourceCheckNameAvailabilityOutput>;

// The operation
/**
 * Check resource name availability
 *
 * Check if a resource name is available.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 */
export const NetAppResourceCheckNameAvailability =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetAppResourceCheckNameAvailabilityInput,
    outputSchema: NetAppResourceCheckNameAvailabilityOutput,
  }));
// Input Schema
export interface NetAppResourceCheckQuotaAvailabilityInput {
  subscriptionId: string;
  location: string;
  name: string;
  type:
    | "Microsoft.NetApp/netAppAccounts"
    | "Microsoft.NetApp/netAppAccounts/capacityPools"
    | "Microsoft.NetApp/netAppAccounts/capacityPools/volumes"
    | "Microsoft.NetApp/netAppAccounts/capacityPools/volumes/snapshots"
    | "Microsoft.NetApp/netAppAccounts/backupVaults/backups"
    | "Microsoft.NetApp/netAppAccounts/capacityPools/volumes/backups";
  resourceGroup: string;
}
export const NetAppResourceCheckQuotaAvailabilityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
    type: Schema.Literals([
      "Microsoft.NetApp/netAppAccounts",
      "Microsoft.NetApp/netAppAccounts/capacityPools",
      "Microsoft.NetApp/netAppAccounts/capacityPools/volumes",
      "Microsoft.NetApp/netAppAccounts/capacityPools/volumes/snapshots",
      "Microsoft.NetApp/netAppAccounts/backupVaults/backups",
      "Microsoft.NetApp/netAppAccounts/capacityPools/volumes/backups",
    ]),
    resourceGroup: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.NetApp/locations/{location}/checkQuotaAvailability",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<NetAppResourceCheckQuotaAvailabilityInput>;

// Output Schema
export interface NetAppResourceCheckQuotaAvailabilityOutput {
  isAvailable?: boolean;
  reason?: "Invalid" | "AlreadyExists";
  message?: string;
}
export const NetAppResourceCheckQuotaAvailabilityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    isAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.Literals(["Invalid", "AlreadyExists"])),
    message: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<NetAppResourceCheckQuotaAvailabilityOutput>;

// The operation
/**
 * Check quota availability
 *
 * Check if a quota is available.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 */
export const NetAppResourceCheckQuotaAvailability =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetAppResourceCheckQuotaAvailabilityInput,
    outputSchema: NetAppResourceCheckQuotaAvailabilityOutput,
  }));
// Input Schema
export interface NetAppResourceQueryNetworkSiblingSetInput {
  subscriptionId: string;
  location: string;
  networkSiblingSetId: string;
  subnetId: string;
}
export const NetAppResourceQueryNetworkSiblingSetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    networkSiblingSetId: Schema.String,
    subnetId: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.NetApp/locations/{location}/queryNetworkSiblingSet",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<NetAppResourceQueryNetworkSiblingSetInput>;

// Output Schema
export interface NetAppResourceQueryNetworkSiblingSetOutput {
  networkSiblingSetId?: string;
  subnetId?: string;
  networkSiblingSetStateId?: string;
  networkFeatures?: "Basic" | "Standard" | "Basic_Standard" | "Standard_Basic";
  provisioningState?: "Succeeded" | "Failed" | "Canceled" | "Updating";
  nicInfoList?: { ipAddress?: string; volumeResourceIds?: string[] }[];
}
export const NetAppResourceQueryNetworkSiblingSetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    networkSiblingSetId: Schema.optional(Schema.String),
    subnetId: Schema.optional(Schema.String),
    networkSiblingSetStateId: Schema.optional(Schema.String),
    networkFeatures: Schema.optional(
      Schema.Literals([
        "Basic",
        "Standard",
        "Basic_Standard",
        "Standard_Basic",
      ]),
    ),
    provisioningState: Schema.optional(
      Schema.Literals(["Succeeded", "Failed", "Canceled", "Updating"]),
    ),
    nicInfoList: Schema.optional(
      Schema.Array(
        Schema.Struct({
          ipAddress: Schema.optional(Schema.String),
          volumeResourceIds: Schema.optional(Schema.Array(Schema.String)),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<NetAppResourceQueryNetworkSiblingSetOutput>;

// The operation
/**
 * Describe a network sibling set
 *
 * Get details of the specified network sibling set.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 */
export const NetAppResourceQueryNetworkSiblingSet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetAppResourceQueryNetworkSiblingSetInput,
    outputSchema: NetAppResourceQueryNetworkSiblingSetOutput,
  }));
// Input Schema
export interface NetAppResourceQueryRegionInfoInput {
  subscriptionId: string;
  location: string;
}
export const NetAppResourceQueryRegionInfoInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.NetApp/locations/{location}/regionInfo",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<NetAppResourceQueryRegionInfoInput>;

// Output Schema
export interface NetAppResourceQueryRegionInfoOutput {
  storageToNetworkProximity?:
    | "Default"
    | "T1"
    | "T2"
    | "AcrossT2"
    | "T1AndT2"
    | "T1AndAcrossT2"
    | "T2AndAcrossT2"
    | "T1AndT2AndAcrossT2";
  availabilityZoneMappings?: {
    availabilityZone?: string;
    isAvailable?: boolean;
  }[];
}
export const NetAppResourceQueryRegionInfoOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    storageToNetworkProximity: Schema.optional(
      Schema.Literals([
        "Default",
        "T1",
        "T2",
        "AcrossT2",
        "T1AndT2",
        "T1AndAcrossT2",
        "T2AndAcrossT2",
        "T1AndT2AndAcrossT2",
      ]),
    ),
    availabilityZoneMappings: Schema.optional(
      Schema.Array(
        Schema.Struct({
          availabilityZone: Schema.optional(Schema.String),
          isAvailable: Schema.optional(Schema.Boolean),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<NetAppResourceQueryRegionInfoOutput>;

// The operation
/**
 * Describes region specific information.
 *
 * Provides storage to network proximity and logical zone mapping information.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 */
export const NetAppResourceQueryRegionInfo =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetAppResourceQueryRegionInfoInput,
    outputSchema: NetAppResourceQueryRegionInfoOutput,
  }));
// Input Schema
export interface NetAppResourceQuotaLimitsAccountGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  quotaLimitName: string;
}
export const NetAppResourceQuotaLimitsAccountGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    quotaLimitName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/quotaLimits/{quotaLimitName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<NetAppResourceQuotaLimitsAccountGetInput>;

// Output Schema
export interface NetAppResourceQuotaLimitsAccountGetOutput {
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
export const NetAppResourceQuotaLimitsAccountGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<NetAppResourceQuotaLimitsAccountGetOutput>;

// The operation
/**
 * Get the default, current and usages account quota limit
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param quotaLimitName - The name of the Quota Limit
 */
export const NetAppResourceQuotaLimitsAccountGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetAppResourceQuotaLimitsAccountGetInput,
    outputSchema: NetAppResourceQuotaLimitsAccountGetOutput,
  }));
// Input Schema
export interface NetAppResourceQuotaLimitsAccountListInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const NetAppResourceQuotaLimitsAccountListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/quotaLimits",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<NetAppResourceQuotaLimitsAccountListInput>;

// Output Schema
export interface NetAppResourceQuotaLimitsAccountListOutput {
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
export const NetAppResourceQuotaLimitsAccountListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<NetAppResourceQuotaLimitsAccountListOutput>;

// The operation
/**
 * Gets a list of quota limits for all quotas that are under account. Currently PoolsPerAccount is the only one.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 */
export const NetAppResourceQuotaLimitsAccountList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetAppResourceQuotaLimitsAccountListInput,
    outputSchema: NetAppResourceQuotaLimitsAccountListOutput,
  }));
// Input Schema
export interface NetAppResourceQuotaLimitsGetInput {
  subscriptionId: string;
  location: string;
  quotaLimitName: string;
}
export const NetAppResourceQuotaLimitsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    quotaLimitName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.NetApp/locations/{location}/quotaLimits/{quotaLimitName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<NetAppResourceQuotaLimitsGetInput>;

// Output Schema
export interface NetAppResourceQuotaLimitsGetOutput {
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
export const NetAppResourceQuotaLimitsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<NetAppResourceQuotaLimitsGetOutput>;

// The operation
/**
 * Get the default and current quota limit
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 * @param quotaLimitName - The name of the Quota Limit
 */
export const NetAppResourceQuotaLimitsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetAppResourceQuotaLimitsGetInput,
    outputSchema: NetAppResourceQuotaLimitsGetOutput,
  }));
// Input Schema
export interface NetAppResourceQuotaLimitsListInput {
  subscriptionId: string;
  location: string;
}
export const NetAppResourceQuotaLimitsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.NetApp/locations/{location}/quotaLimits",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<NetAppResourceQuotaLimitsListInput>;

// Output Schema
export interface NetAppResourceQuotaLimitsListOutput {
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
export const NetAppResourceQuotaLimitsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<NetAppResourceQuotaLimitsListOutput>;

// The operation
/**
 * Get the default and current limits for quotas
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 */
export const NetAppResourceQuotaLimitsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetAppResourceQuotaLimitsListInput,
    outputSchema: NetAppResourceQuotaLimitsListOutput,
  }));
// Input Schema
export interface NetAppResourceRegionInfosGetInput {
  subscriptionId: string;
  location: string;
}
export const NetAppResourceRegionInfosGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.NetApp/locations/{location}/regionInfos/default",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<NetAppResourceRegionInfosGetInput>;

// Output Schema
export interface NetAppResourceRegionInfosGetOutput {
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
export const NetAppResourceRegionInfosGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<NetAppResourceRegionInfosGetOutput>;

// The operation
/**
 * Provides storage to network proximity and logical zone mapping information.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 */
export const NetAppResourceRegionInfosGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetAppResourceRegionInfosGetInput,
    outputSchema: NetAppResourceRegionInfosGetOutput,
  }));
// Input Schema
export interface NetAppResourceRegionInfosListInput {
  subscriptionId: string;
  location: string;
}
export const NetAppResourceRegionInfosListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.NetApp/locations/{location}/regionInfos",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<NetAppResourceRegionInfosListInput>;

// Output Schema
export interface NetAppResourceRegionInfosListOutput {
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
export const NetAppResourceRegionInfosListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<NetAppResourceRegionInfosListOutput>;

// The operation
/**
 * Provides region specific information.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 */
export const NetAppResourceRegionInfosList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetAppResourceRegionInfosListInput,
    outputSchema: NetAppResourceRegionInfosListOutput,
  }));
// Input Schema
export interface NetAppResourceUpdateNetworkSiblingSetInput {
  subscriptionId: string;
  location: string;
  networkSiblingSetId: string;
  subnetId: string;
  networkSiblingSetStateId: string;
  networkFeatures: "Basic" | "Standard" | "Basic_Standard" | "Standard_Basic";
}
export const NetAppResourceUpdateNetworkSiblingSetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    networkSiblingSetId: Schema.String,
    subnetId: Schema.String,
    networkSiblingSetStateId: Schema.String,
    networkFeatures: Schema.Literals([
      "Basic",
      "Standard",
      "Basic_Standard",
      "Standard_Basic",
    ]),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.NetApp/locations/{location}/updateNetworkSiblingSet",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<NetAppResourceUpdateNetworkSiblingSetInput>;

// Output Schema
export interface NetAppResourceUpdateNetworkSiblingSetOutput {
  networkSiblingSetId?: string;
  subnetId?: string;
  networkSiblingSetStateId?: string;
  networkFeatures?: "Basic" | "Standard" | "Basic_Standard" | "Standard_Basic";
  provisioningState?: "Succeeded" | "Failed" | "Canceled" | "Updating";
  nicInfoList?: { ipAddress?: string; volumeResourceIds?: string[] }[];
}
export const NetAppResourceUpdateNetworkSiblingSetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    networkSiblingSetId: Schema.optional(Schema.String),
    subnetId: Schema.optional(Schema.String),
    networkSiblingSetStateId: Schema.optional(Schema.String),
    networkFeatures: Schema.optional(
      Schema.Literals([
        "Basic",
        "Standard",
        "Basic_Standard",
        "Standard_Basic",
      ]),
    ),
    provisioningState: Schema.optional(
      Schema.Literals(["Succeeded", "Failed", "Canceled", "Updating"]),
    ),
    nicInfoList: Schema.optional(
      Schema.Array(
        Schema.Struct({
          ipAddress: Schema.optional(Schema.String),
          volumeResourceIds: Schema.optional(Schema.Array(Schema.String)),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<NetAppResourceUpdateNetworkSiblingSetOutput>;

// The operation
/**
 * Update the network features of a network sibling set
 *
 * Update the network features of the specified network sibling set.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 */
export const NetAppResourceUpdateNetworkSiblingSet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetAppResourceUpdateNetworkSiblingSetInput,
    outputSchema: NetAppResourceUpdateNetworkSiblingSetOutput,
  }));
// Input Schema
export interface NetAppResourceUsagesGetInput {
  subscriptionId: string;
  location: string;
  usageType: string;
}
export const NetAppResourceUsagesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    usageType: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.NetApp/locations/{location}/usages/{usageType}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<NetAppResourceUsagesGetInput>;

// Output Schema
export interface NetAppResourceUsagesGetOutput {
  id?: string;
  name?: { value?: string; localizedValue?: string };
  properties?: { currentValue?: number; limit?: number; unit?: string };
}
export const NetAppResourceUsagesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(
      Schema.Struct({
        value: Schema.optional(Schema.String),
        localizedValue: Schema.optional(Schema.String),
      }),
    ),
    properties: Schema.optional(
      Schema.Struct({
        currentValue: Schema.optional(Schema.Number),
        limit: Schema.optional(Schema.Number),
        unit: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<NetAppResourceUsagesGetOutput>;

// The operation
/**
 * Get specific type of usage
 *
 * Get current subscription usage of the specific type
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 * @param usageType - The type of usage
 */
export const NetAppResourceUsagesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NetAppResourceUsagesGetInput,
    outputSchema: NetAppResourceUsagesGetOutput,
  }),
);
// Input Schema
export interface NetAppResourceUsagesListInput {
  subscriptionId: string;
  location: string;
}
export const NetAppResourceUsagesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.NetApp/locations/{location}/usages",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<NetAppResourceUsagesListInput>;

// Output Schema
export interface NetAppResourceUsagesListOutput {
  value: {
    id?: string;
    name?: { value?: string; localizedValue?: string };
    properties?: { currentValue?: number; limit?: number; unit?: string };
  }[];
  nextLink?: string;
}
export const NetAppResourceUsagesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(
          Schema.Struct({
            value: Schema.optional(Schema.String),
            localizedValue: Schema.optional(Schema.String),
          }),
        ),
        properties: Schema.optional(
          Schema.Struct({
            currentValue: Schema.optional(Schema.Number),
            limit: Schema.optional(Schema.Number),
            unit: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<NetAppResourceUsagesListOutput>;

// The operation
/**
 * Get usages
 *
 * Get current subscription usages
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 */
export const NetAppResourceUsagesList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NetAppResourceUsagesListInput,
    outputSchema: NetAppResourceUsagesListOutput,
  }),
);
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.NetApp/operations",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<OperationsListInput>;

// Output Schema
export interface OperationsListOutput {
  value: {
    name?: string;
    display?: {
      provider?: string;
      resource?: string;
      operation?: string;
      description?: string;
    };
    origin?: string;
    properties?: {
      serviceSpecification?: {
        metricSpecifications?: {
          name?: string;
          displayName?: string;
          displayDescription?: string;
          unit?: string;
          supportedAggregationTypes?: "Average"[];
          supportedTimeGrainTypes?: string[];
          internalMetricName?: string;
          enableRegionalMdmAccount?: boolean;
          sourceMdmAccount?: string;
          sourceMdmNamespace?: string;
          dimensions?: { name?: string; displayName?: string }[];
          aggregationType?: string;
          fillGapWithZero?: boolean;
          category?: string;
          resourceIdDimensionNameOverride?: string;
          isInternal?: boolean;
        }[];
        logSpecifications?: { name?: string; displayName?: string }[];
      };
    };
  }[];
  nextLink?: string;
}
export const OperationsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.Array(
    Schema.Struct({
      name: Schema.optional(Schema.String),
      display: Schema.optional(
        Schema.Struct({
          provider: Schema.optional(Schema.String),
          resource: Schema.optional(Schema.String),
          operation: Schema.optional(Schema.String),
          description: Schema.optional(Schema.String),
        }),
      ),
      origin: Schema.optional(Schema.String),
      properties: Schema.optional(
        Schema.Struct({
          serviceSpecification: Schema.optional(
            Schema.Struct({
              metricSpecifications: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    displayName: Schema.optional(Schema.String),
                    displayDescription: Schema.optional(Schema.String),
                    unit: Schema.optional(Schema.String),
                    supportedAggregationTypes: Schema.optional(
                      Schema.Array(Schema.Literals(["Average"])),
                    ),
                    supportedTimeGrainTypes: Schema.optional(
                      Schema.Array(Schema.String),
                    ),
                    internalMetricName: Schema.optional(Schema.String),
                    enableRegionalMdmAccount: Schema.optional(Schema.Boolean),
                    sourceMdmAccount: Schema.optional(Schema.String),
                    sourceMdmNamespace: Schema.optional(Schema.String),
                    dimensions: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          name: Schema.optional(Schema.String),
                          displayName: Schema.optional(Schema.String),
                        }),
                      ),
                    ),
                    aggregationType: Schema.optional(Schema.String),
                    fillGapWithZero: Schema.optional(Schema.Boolean),
                    category: Schema.optional(Schema.String),
                    resourceIdDimensionNameOverride: Schema.optional(
                      Schema.String,
                    ),
                    isInternal: Schema.optional(Schema.Boolean),
                  }),
                ),
              ),
              logSpecifications: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    displayName: Schema.optional(Schema.String),
                  }),
                ),
              ),
            }),
          ),
        }),
      ),
    }),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<OperationsListOutput>;

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
export interface PoolsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  poolName: string;
  properties: {
    poolId?: string;
    size: number;
    serviceLevel: "Standard" | "Premium" | "Ultra" | "StandardZRS" | "Flexible";
    provisioningState?: string;
    totalThroughputMibps?: number;
    utilizedThroughputMibps?: number;
    customThroughputMibps?: number | null;
    qosType?: "Auto" | "Manual";
    coolAccess?: boolean;
    encryptionType?: "Single" | "Double" | null;
  };
  etag?: string;
  tags?: Record<string, string>;
  location: string;
}
export const PoolsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    poolName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      poolId: Schema.optional(Schema.String),
      size: Schema.Number,
      serviceLevel: Schema.Literals([
        "Standard",
        "Premium",
        "Ultra",
        "StandardZRS",
        "Flexible",
      ]),
      provisioningState: Schema.optional(Schema.String),
      totalThroughputMibps: Schema.optional(Schema.Number),
      utilizedThroughputMibps: Schema.optional(Schema.Number),
      customThroughputMibps: Schema.optional(Schema.NullOr(Schema.Number)),
      qosType: Schema.optional(Schema.Literals(["Auto", "Manual"])),
      coolAccess: Schema.optional(Schema.Boolean),
      encryptionType: Schema.optional(
        Schema.NullOr(Schema.Literals(["Single", "Double"])),
      ),
    }),
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<PoolsCreateOrUpdateInput>;

// Output Schema
export interface PoolsCreateOrUpdateOutput {
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
export const PoolsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<PoolsCreateOrUpdateOutput>;

// The operation
/**
 * Create or Update a capacity pool
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param poolName - The name of the capacity pool
 */
export const PoolsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PoolsCreateOrUpdateInput,
  outputSchema: PoolsCreateOrUpdateOutput,
}));
// Input Schema
export interface PoolsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  poolName: string;
}
export const PoolsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  poolName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<PoolsDeleteInput>;

// Output Schema
export type PoolsDeleteOutput = void;
export const PoolsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<PoolsDeleteOutput>;

// The operation
/**
 * Delete the specified capacity pool
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param poolName - The name of the capacity pool
 */
export const PoolsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PoolsDeleteInput,
  outputSchema: PoolsDeleteOutput,
}));
// Input Schema
export interface PoolsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  poolName: string;
}
export const PoolsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  poolName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<PoolsGetInput>;

// Output Schema
export interface PoolsGetOutput {
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
export const PoolsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<PoolsGetOutput>;

// The operation
/**
 * Get details of the specified capacity pool
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param poolName - The name of the capacity pool
 */
export const PoolsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PoolsGetInput,
  outputSchema: PoolsGetOutput,
}));
// Input Schema
export interface PoolsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const PoolsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<PoolsListInput>;

// Output Schema
export interface PoolsListOutput {
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
export const PoolsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<PoolsListOutput>;

// The operation
/**
 * List all capacity pools in the NetApp Account
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 */
export const PoolsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PoolsListInput,
  outputSchema: PoolsListOutput,
}));
// Input Schema
export interface PoolsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  poolName: string;
  location?: string;
  id?: string;
  name?: string;
  type?: string;
  tags?: Record<string, string>;
  properties?: {
    size?: number;
    qosType?: "Auto" | "Manual";
    coolAccess?: boolean;
    customThroughputMibps?: number | null;
  };
}
export const PoolsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  poolName: Schema.String.pipe(T.PathParam()),
  location: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  properties: Schema.optional(
    Schema.Struct({
      size: Schema.optional(Schema.Number),
      qosType: Schema.optional(Schema.Literals(["Auto", "Manual"])),
      coolAccess: Schema.optional(Schema.Boolean),
      customThroughputMibps: Schema.optional(Schema.NullOr(Schema.Number)),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<PoolsUpdateInput>;

// Output Schema
export interface PoolsUpdateOutput {
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
export const PoolsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<PoolsUpdateOutput>;

// The operation
/**
 * Patch the specified capacity pool
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param poolName - The name of the capacity pool
 */
export const PoolsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PoolsUpdateInput,
  outputSchema: PoolsUpdateOutput,
}));
// Input Schema
export interface RansomwareReportsClearSuspectsInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  poolName: string;
  volumeName: string;
  ransomwareReportName: string;
  resolution: "PotentialThreat" | "FalsePositive";
  extensions: string[];
}
export const RansomwareReportsClearSuspectsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    poolName: Schema.String.pipe(T.PathParam()),
    volumeName: Schema.String.pipe(T.PathParam()),
    ransomwareReportName: Schema.String.pipe(T.PathParam()),
    resolution: Schema.Literals(["PotentialThreat", "FalsePositive"]),
    extensions: Schema.Array(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/ransomwareReports/{ransomwareReportName}/clearSuspects",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<RansomwareReportsClearSuspectsInput>;

// Output Schema
export type RansomwareReportsClearSuspectsOutput = void;
export const RansomwareReportsClearSuspectsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<RansomwareReportsClearSuspectsOutput>;

// The operation
/**
 * Clear ransomware suspects for the given Advanced Ransomware Protection report. You should evaluate the report to determine whether the activity is acceptable (false positive) or whether an attack seems malicious.
 * ARP creates snapshots named Anti_ransomware_backup when it detects a potential ransomware threat. You can use one of these ARP snapshots or another snapshot of your volume to restore data",
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param poolName - The name of the capacity pool
 * @param volumeName - The name of the volume
 * @param ransomwareReportName - The name of the ransomware report
 */
export const RansomwareReportsClearSuspects =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RansomwareReportsClearSuspectsInput,
    outputSchema: RansomwareReportsClearSuspectsOutput,
  }));
// Input Schema
export interface RansomwareReportsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  poolName: string;
  volumeName: string;
  ransomwareReportName: string;
}
export const RansomwareReportsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    poolName: Schema.String.pipe(T.PathParam()),
    volumeName: Schema.String.pipe(T.PathParam()),
    ransomwareReportName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/ransomwareReports/{ransomwareReportName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<RansomwareReportsGetInput>;

// Output Schema
export interface RansomwareReportsGetOutput {
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
export const RansomwareReportsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<RansomwareReportsGetOutput>;

// The operation
/**
 * Get details of the specified ransomware report (ARP)
 * ARP reports are created with a list of suspected files when it detects any combination of high data entropy, abnormal volume activity with data encryption, and unusual file extensions.
 * ARP creates snapshots named Anti_ransomware_backup when it detects a potential ransomware threat. You can use one of these ARP snapshots or another snapshot of your volume to restore data.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param poolName - The name of the capacity pool
 * @param volumeName - The name of the volume
 * @param ransomwareReportName - The name of the ransomware report
 */
export const RansomwareReportsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RansomwareReportsGetInput,
    outputSchema: RansomwareReportsGetOutput,
  }),
);
// Input Schema
export interface RansomwareReportsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  poolName: string;
  volumeName: string;
}
export const RansomwareReportsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    poolName: Schema.String.pipe(T.PathParam()),
    volumeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/ransomwareReports",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<RansomwareReportsListInput>;

// Output Schema
export interface RansomwareReportsListOutput {
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
export const RansomwareReportsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<RansomwareReportsListOutput>;

// The operation
/**
 * List all ransomware reports for the volume
 * Returns a list of the Advanced Ransomware Protection (ARP) reports for the volume.
 * ARP reports are created with a list of suspected files when it detects any combination of high data entropy, abnormal volume activity with data encryption, and unusual file extensions.
 * ARP creates snapshots named Anti_ransomware_backup when it detects a potential ransomware threat. You can use one of these ARP snapshots or another snapshot of your volume to restore data"
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param poolName - The name of the capacity pool
 * @param volumeName - The name of the volume
 */
export const RansomwareReportsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RansomwareReportsListInput,
    outputSchema: RansomwareReportsListOutput,
  }),
);
// Input Schema
export interface SnapshotPoliciesCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  snapshotPolicyName: string;
  properties: {
    hourlySchedule?: {
      snapshotsToKeep?: number;
      minute?: number;
      usedBytes?: number;
    };
    dailySchedule?: {
      snapshotsToKeep?: number;
      hour?: number;
      minute?: number;
      usedBytes?: number;
    };
    weeklySchedule?: {
      snapshotsToKeep?: number;
      day?: string;
      hour?: number;
      minute?: number;
      usedBytes?: number;
    };
    monthlySchedule?: {
      snapshotsToKeep?: number;
      daysOfMonth?: string;
      hour?: number;
      minute?: number;
      usedBytes?: number;
    };
    enabled?: boolean;
    provisioningState?: string;
  };
  etag?: string;
  tags?: Record<string, string>;
  location: string;
}
export const SnapshotPoliciesCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    snapshotPolicyName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      hourlySchedule: Schema.optional(
        Schema.Struct({
          snapshotsToKeep: Schema.optional(Schema.Number),
          minute: Schema.optional(Schema.Number),
          usedBytes: Schema.optional(Schema.Number),
        }),
      ),
      dailySchedule: Schema.optional(
        Schema.Struct({
          snapshotsToKeep: Schema.optional(Schema.Number),
          hour: Schema.optional(Schema.Number),
          minute: Schema.optional(Schema.Number),
          usedBytes: Schema.optional(Schema.Number),
        }),
      ),
      weeklySchedule: Schema.optional(
        Schema.Struct({
          snapshotsToKeep: Schema.optional(Schema.Number),
          day: Schema.optional(Schema.String),
          hour: Schema.optional(Schema.Number),
          minute: Schema.optional(Schema.Number),
          usedBytes: Schema.optional(Schema.Number),
        }),
      ),
      monthlySchedule: Schema.optional(
        Schema.Struct({
          snapshotsToKeep: Schema.optional(Schema.Number),
          daysOfMonth: Schema.optional(Schema.String),
          hour: Schema.optional(Schema.Number),
          minute: Schema.optional(Schema.Number),
          usedBytes: Schema.optional(Schema.Number),
        }),
      ),
      enabled: Schema.optional(Schema.Boolean),
      provisioningState: Schema.optional(Schema.String),
    }),
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/snapshotPolicies/{snapshotPolicyName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<SnapshotPoliciesCreateInput>;

// Output Schema
export interface SnapshotPoliciesCreateOutput {
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
export const SnapshotPoliciesCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<SnapshotPoliciesCreateOutput>;

// The operation
/**
 * Create a snapshot policy
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param snapshotPolicyName - The name of the snapshot policy
 */
export const SnapshotPoliciesCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SnapshotPoliciesCreateInput,
    outputSchema: SnapshotPoliciesCreateOutput,
  }),
);
// Input Schema
export interface SnapshotPoliciesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  snapshotPolicyName: string;
}
export const SnapshotPoliciesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    snapshotPolicyName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/snapshotPolicies/{snapshotPolicyName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<SnapshotPoliciesDeleteInput>;

// Output Schema
export type SnapshotPoliciesDeleteOutput = void;
export const SnapshotPoliciesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<SnapshotPoliciesDeleteOutput>;

// The operation
/**
 * Delete snapshot policy
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param snapshotPolicyName - The name of the snapshot policy
 */
export const SnapshotPoliciesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SnapshotPoliciesDeleteInput,
    outputSchema: SnapshotPoliciesDeleteOutput,
  }),
);
// Input Schema
export interface SnapshotPoliciesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  snapshotPolicyName: string;
}
export const SnapshotPoliciesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    snapshotPolicyName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/snapshotPolicies/{snapshotPolicyName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<SnapshotPoliciesGetInput>;

// Output Schema
export interface SnapshotPoliciesGetOutput {
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
export const SnapshotPoliciesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<SnapshotPoliciesGetOutput>;

// The operation
/**
 * Get a snapshot Policy
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param snapshotPolicyName - The name of the snapshot policy
 */
export const SnapshotPoliciesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SnapshotPoliciesGetInput,
  outputSchema: SnapshotPoliciesGetOutput,
}));
// Input Schema
export interface SnapshotPoliciesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const SnapshotPoliciesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/snapshotPolicies",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<SnapshotPoliciesListInput>;

// Output Schema
export interface SnapshotPoliciesListOutput {
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
export const SnapshotPoliciesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<SnapshotPoliciesListOutput>;

// The operation
/**
 * List snapshot policy
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 */
export const SnapshotPoliciesList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SnapshotPoliciesListInput,
    outputSchema: SnapshotPoliciesListOutput,
  }),
);
// Input Schema
export interface SnapshotPoliciesListVolumesInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  snapshotPolicyName: string;
}
export const SnapshotPoliciesListVolumesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    snapshotPolicyName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/snapshotPolicies/{snapshotPolicyName}/volumes",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<SnapshotPoliciesListVolumesInput>;

// Output Schema
export interface SnapshotPoliciesListVolumesOutput {
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
export const SnapshotPoliciesListVolumesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<SnapshotPoliciesListVolumesOutput>;

// The operation
/**
 * Get volumes associated with snapshot policy
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param snapshotPolicyName - The name of the snapshot policy
 */
export const SnapshotPoliciesListVolumes = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SnapshotPoliciesListVolumesInput,
    outputSchema: SnapshotPoliciesListVolumesOutput,
  }),
);
// Input Schema
export interface SnapshotPoliciesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  snapshotPolicyName: string;
  location?: string;
  id?: string;
  name?: string;
  type?: string;
  tags?: Record<string, string>;
  properties?: {
    hourlySchedule?: {
      snapshotsToKeep?: number;
      minute?: number;
      usedBytes?: number;
    };
    dailySchedule?: {
      snapshotsToKeep?: number;
      hour?: number;
      minute?: number;
      usedBytes?: number;
    };
    weeklySchedule?: {
      snapshotsToKeep?: number;
      day?: string;
      hour?: number;
      minute?: number;
      usedBytes?: number;
    };
    monthlySchedule?: {
      snapshotsToKeep?: number;
      daysOfMonth?: string;
      hour?: number;
      minute?: number;
      usedBytes?: number;
    };
    enabled?: boolean;
    provisioningState?: string;
  };
}
export const SnapshotPoliciesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    snapshotPolicyName: Schema.String.pipe(T.PathParam()),
    location: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(
      Schema.Struct({
        hourlySchedule: Schema.optional(
          Schema.Struct({
            snapshotsToKeep: Schema.optional(Schema.Number),
            minute: Schema.optional(Schema.Number),
            usedBytes: Schema.optional(Schema.Number),
          }),
        ),
        dailySchedule: Schema.optional(
          Schema.Struct({
            snapshotsToKeep: Schema.optional(Schema.Number),
            hour: Schema.optional(Schema.Number),
            minute: Schema.optional(Schema.Number),
            usedBytes: Schema.optional(Schema.Number),
          }),
        ),
        weeklySchedule: Schema.optional(
          Schema.Struct({
            snapshotsToKeep: Schema.optional(Schema.Number),
            day: Schema.optional(Schema.String),
            hour: Schema.optional(Schema.Number),
            minute: Schema.optional(Schema.Number),
            usedBytes: Schema.optional(Schema.Number),
          }),
        ),
        monthlySchedule: Schema.optional(
          Schema.Struct({
            snapshotsToKeep: Schema.optional(Schema.Number),
            daysOfMonth: Schema.optional(Schema.String),
            hour: Schema.optional(Schema.Number),
            minute: Schema.optional(Schema.Number),
            usedBytes: Schema.optional(Schema.Number),
          }),
        ),
        enabled: Schema.optional(Schema.Boolean),
        provisioningState: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/snapshotPolicies/{snapshotPolicyName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<SnapshotPoliciesUpdateInput>;

// Output Schema
export interface SnapshotPoliciesUpdateOutput {
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
export const SnapshotPoliciesUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<SnapshotPoliciesUpdateOutput>;

// The operation
/**
 * Patch a snapshot policy
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param snapshotPolicyName - The name of the snapshot policy
 */
export const SnapshotPoliciesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SnapshotPoliciesUpdateInput,
    outputSchema: SnapshotPoliciesUpdateOutput,
  }),
);
// Input Schema
export interface SnapshotsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  poolName: string;
  volumeName: string;
  snapshotName: string;
  properties?: {
    snapshotId?: string;
    created?: string;
    provisioningState?: string;
  };
  location: string;
}
export const SnapshotsCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  poolName: Schema.String.pipe(T.PathParam()),
  volumeName: Schema.String.pipe(T.PathParam()),
  snapshotName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      snapshotId: Schema.optional(Schema.String),
      created: Schema.optional(Schema.String),
      provisioningState: Schema.optional(Schema.String),
    }),
  ),
  location: Schema.String,
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/snapshots/{snapshotName}",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<SnapshotsCreateInput>;

// Output Schema
export interface SnapshotsCreateOutput {
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
export const SnapshotsCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<SnapshotsCreateOutput>;

// The operation
/**
 * Create the specified snapshot within the given volume
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param poolName - The name of the capacity pool
 * @param volumeName - The name of the volume
 * @param snapshotName - The name of the snapshot
 */
export const SnapshotsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SnapshotsCreateInput,
  outputSchema: SnapshotsCreateOutput,
}));
// Input Schema
export interface SnapshotsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  poolName: string;
  volumeName: string;
  snapshotName: string;
}
export const SnapshotsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  poolName: Schema.String.pipe(T.PathParam()),
  volumeName: Schema.String.pipe(T.PathParam()),
  snapshotName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/snapshots/{snapshotName}",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<SnapshotsDeleteInput>;

// Output Schema
export type SnapshotsDeleteOutput = void;
export const SnapshotsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<SnapshotsDeleteOutput>;

// The operation
/**
 * Delete snapshot
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param poolName - The name of the capacity pool
 * @param volumeName - The name of the volume
 * @param snapshotName - The name of the snapshot
 */
export const SnapshotsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SnapshotsDeleteInput,
  outputSchema: SnapshotsDeleteOutput,
}));
// Input Schema
export interface SnapshotsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  poolName: string;
  volumeName: string;
  snapshotName: string;
}
export const SnapshotsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  poolName: Schema.String.pipe(T.PathParam()),
  volumeName: Schema.String.pipe(T.PathParam()),
  snapshotName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/snapshots/{snapshotName}",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<SnapshotsGetInput>;

// Output Schema
export interface SnapshotsGetOutput {
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
export const SnapshotsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<SnapshotsGetOutput>;

// The operation
/**
 * Get details of the specified snapshot
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param poolName - The name of the capacity pool
 * @param volumeName - The name of the volume
 * @param snapshotName - The name of the snapshot
 */
export const SnapshotsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SnapshotsGetInput,
  outputSchema: SnapshotsGetOutput,
}));
// Input Schema
export interface SnapshotsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  poolName: string;
  volumeName: string;
}
export const SnapshotsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  poolName: Schema.String.pipe(T.PathParam()),
  volumeName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/snapshots",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<SnapshotsListInput>;

// Output Schema
export interface SnapshotsListOutput {
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
export const SnapshotsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<SnapshotsListOutput>;

// The operation
/**
 * List all snapshots associated with the volume
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param poolName - The name of the capacity pool
 * @param volumeName - The name of the volume
 */
export const SnapshotsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SnapshotsListInput,
  outputSchema: SnapshotsListOutput,
}));
// Input Schema
export interface SnapshotsRestoreFilesInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  poolName: string;
  volumeName: string;
  snapshotName: string;
  filePaths: string[];
  destinationPath?: string;
}
export const SnapshotsRestoreFilesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    poolName: Schema.String.pipe(T.PathParam()),
    volumeName: Schema.String.pipe(T.PathParam()),
    snapshotName: Schema.String.pipe(T.PathParam()),
    filePaths: Schema.Array(Schema.String),
    destinationPath: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/snapshots/{snapshotName}/restoreFiles",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<SnapshotsRestoreFilesInput>;

// Output Schema
export type SnapshotsRestoreFilesOutput = void;
export const SnapshotsRestoreFilesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<SnapshotsRestoreFilesOutput>;

// The operation
/**
 * Restore the specified files from the specified snapshot to the active filesystem
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param poolName - The name of the capacity pool
 * @param volumeName - The name of the volume
 * @param snapshotName - The name of the snapshot
 */
export const SnapshotsRestoreFiles = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SnapshotsRestoreFilesInput,
    outputSchema: SnapshotsRestoreFilesOutput,
  }),
);
// Input Schema
export interface SnapshotsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  poolName: string;
  volumeName: string;
  snapshotName: string;
}
export const SnapshotsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  poolName: Schema.String.pipe(T.PathParam()),
  volumeName: Schema.String.pipe(T.PathParam()),
  snapshotName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/snapshots/{snapshotName}",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<SnapshotsUpdateInput>;

// Output Schema
export interface SnapshotsUpdateOutput {
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
export const SnapshotsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<SnapshotsUpdateOutput>;

// The operation
/**
 * Patch a snapshot
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param poolName - The name of the capacity pool
 * @param volumeName - The name of the volume
 * @param snapshotName - The name of the snapshot
 */
export const SnapshotsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SnapshotsUpdateInput,
  outputSchema: SnapshotsUpdateOutput,
}));
// Input Schema
export interface SubvolumesCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  poolName: string;
  volumeName: string;
  subvolumeName: string;
  properties?: {
    path?: string;
    size?: number | null;
    parentPath?: string | null;
    provisioningState?: string;
  };
}
export const SubvolumesCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  poolName: Schema.String.pipe(T.PathParam()),
  volumeName: Schema.String.pipe(T.PathParam()),
  subvolumeName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      path: Schema.optional(Schema.String),
      size: Schema.optional(Schema.NullOr(Schema.Number)),
      parentPath: Schema.optional(Schema.NullOr(Schema.String)),
      provisioningState: Schema.optional(Schema.String),
    }),
  ),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/subvolumes/{subvolumeName}",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<SubvolumesCreateInput>;

// Output Schema
export interface SubvolumesCreateOutput {
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
export const SubvolumesCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
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
  },
) as unknown as Schema.Codec<SubvolumesCreateOutput>;

// The operation
/**
 * Creates a subvolume in the path or clones the subvolume mentioned in the parentPath
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param poolName - The name of the capacity pool
 * @param volumeName - The name of the volume
 * @param subvolumeName - The name of the subvolume.
 */
export const SubvolumesCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SubvolumesCreateInput,
  outputSchema: SubvolumesCreateOutput,
}));
// Input Schema
export interface SubvolumesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  poolName: string;
  volumeName: string;
  subvolumeName: string;
}
export const SubvolumesDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  poolName: Schema.String.pipe(T.PathParam()),
  volumeName: Schema.String.pipe(T.PathParam()),
  subvolumeName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/subvolumes/{subvolumeName}",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<SubvolumesDeleteInput>;

// Output Schema
export type SubvolumesDeleteOutput = void;
export const SubvolumesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<SubvolumesDeleteOutput>;

// The operation
/**
 * Delete subvolume
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param poolName - The name of the capacity pool
 * @param volumeName - The name of the volume
 * @param subvolumeName - The name of the subvolume.
 */
export const SubvolumesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SubvolumesDeleteInput,
  outputSchema: SubvolumesDeleteOutput,
}));
// Input Schema
export interface SubvolumesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  poolName: string;
  volumeName: string;
  subvolumeName: string;
}
export const SubvolumesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  poolName: Schema.String.pipe(T.PathParam()),
  volumeName: Schema.String.pipe(T.PathParam()),
  subvolumeName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/subvolumes/{subvolumeName}",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<SubvolumesGetInput>;

// Output Schema
export interface SubvolumesGetOutput {
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
export const SubvolumesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<SubvolumesGetOutput>;

// The operation
/**
 * Returns the path associated with the subvolumeName provided
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param poolName - The name of the capacity pool
 * @param volumeName - The name of the volume
 * @param subvolumeName - The name of the subvolume.
 */
export const SubvolumesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SubvolumesGetInput,
  outputSchema: SubvolumesGetOutput,
}));
// Input Schema
export interface SubvolumesGetMetadataInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  poolName: string;
  volumeName: string;
  subvolumeName: string;
}
export const SubvolumesGetMetadataInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    poolName: Schema.String.pipe(T.PathParam()),
    volumeName: Schema.String.pipe(T.PathParam()),
    subvolumeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/subvolumes/{subvolumeName}/getMetadata",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<SubvolumesGetMetadataInput>;

// Output Schema
export interface SubvolumesGetMetadataOutput {
  id?: string;
  name?: string;
  type?: string;
  properties?: {
    path?: string;
    parentPath?: string;
    size?: number;
    bytesUsed?: number;
    permissions?: string;
    creationTimeStamp?: string;
    accessedTimeStamp?: string;
    modifiedTimeStamp?: string;
    changedTimeStamp?: string;
    provisioningState?: string;
  };
}
export const SubvolumesGetMetadataOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        path: Schema.optional(Schema.String),
        parentPath: Schema.optional(Schema.String),
        size: Schema.optional(Schema.Number),
        bytesUsed: Schema.optional(Schema.Number),
        permissions: Schema.optional(Schema.String),
        creationTimeStamp: Schema.optional(Schema.String),
        accessedTimeStamp: Schema.optional(Schema.String),
        modifiedTimeStamp: Schema.optional(Schema.String),
        changedTimeStamp: Schema.optional(Schema.String),
        provisioningState: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<SubvolumesGetMetadataOutput>;

// The operation
/**
 * Get details of the specified subvolume
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param poolName - The name of the capacity pool
 * @param volumeName - The name of the volume
 * @param subvolumeName - The name of the subvolume.
 */
export const SubvolumesGetMetadata = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SubvolumesGetMetadataInput,
    outputSchema: SubvolumesGetMetadataOutput,
  }),
);
// Input Schema
export interface SubvolumesListByVolumeInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  poolName: string;
  volumeName: string;
}
export const SubvolumesListByVolumeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    poolName: Schema.String.pipe(T.PathParam()),
    volumeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/subvolumes",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<SubvolumesListByVolumeInput>;

// Output Schema
export interface SubvolumesListByVolumeOutput {
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
export const SubvolumesListByVolumeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<SubvolumesListByVolumeOutput>;

// The operation
/**
 * Returns a list of the subvolumes in the volume
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param poolName - The name of the capacity pool
 * @param volumeName - The name of the volume
 */
export const SubvolumesListByVolume = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SubvolumesListByVolumeInput,
    outputSchema: SubvolumesListByVolumeOutput,
  }),
);
// Input Schema
export interface SubvolumesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  poolName: string;
  volumeName: string;
  subvolumeName: string;
  properties?: { size?: number | null; path?: string };
}
export const SubvolumesUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  poolName: Schema.String.pipe(T.PathParam()),
  volumeName: Schema.String.pipe(T.PathParam()),
  subvolumeName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      size: Schema.optional(Schema.NullOr(Schema.Number)),
      path: Schema.optional(Schema.String),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/subvolumes/{subvolumeName}",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<SubvolumesUpdateInput>;

// Output Schema
export interface SubvolumesUpdateOutput {
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
export const SubvolumesUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
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
  },
) as unknown as Schema.Codec<SubvolumesUpdateOutput>;

// The operation
/**
 * Patch a subvolume
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param poolName - The name of the capacity pool
 * @param volumeName - The name of the volume
 * @param subvolumeName - The name of the subvolume.
 */
export const SubvolumesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SubvolumesUpdateInput,
  outputSchema: SubvolumesUpdateOutput,
}));
// Input Schema
export interface VolumeGroupsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  volumeGroupName: string;
  properties?: {
    provisioningState?: string;
    groupMetaData?: {
      groupDescription?: string;
      applicationType?: "SAP-HANA" | "ORACLE";
      applicationIdentifier?: string;
      globalPlacementRules?: { key: string; value: string }[];
      volumesCount?: number;
    };
    volumes?: {
      id?: string;
      name?: string;
      type?: string;
      tags?: Record<string, string>;
      zones?: string[];
      properties: {
        fileSystemId?: string;
        creationToken: string;
        serviceLevel?:
          | "Standard"
          | "Premium"
          | "Ultra"
          | "StandardZRS"
          | "Flexible";
        usageThreshold: number;
        exportPolicy?: {
          rules?: {
            ruleIndex?: number;
            unixReadOnly?: boolean;
            unixReadWrite?: boolean;
            kerberos5ReadOnly?: boolean;
            kerberos5ReadWrite?: boolean;
            kerberos5iReadOnly?: boolean;
            kerberos5iReadWrite?: boolean;
            kerberos5pReadOnly?: boolean;
            kerberos5pReadWrite?: boolean;
            cifs?: boolean;
            nfsv3?: boolean;
            nfsv41?: boolean;
            allowedClients?: string;
            hasRootAccess?: boolean;
            chownMode?: "Restricted" | "Unrestricted";
          }[];
        };
        protocolTypes?: string[];
        provisioningState?: string;
        snapshotId?: string | null;
        deleteBaseSnapshot?: boolean;
        backupId?: string | null;
        baremetalTenantId?: string;
        subnetId: string;
        networkFeatures?:
          | "Basic"
          | "Standard"
          | "Basic_Standard"
          | "Standard_Basic";
        effectiveNetworkFeatures?:
          | "Basic"
          | "Standard"
          | "Basic_Standard"
          | "Standard_Basic";
        networkSiblingSetId?: string;
        storageToNetworkProximity?: "Default" | "T1" | "T2" | "AcrossT2";
        mountTargets?: {
          mountTargetId?: string;
          fileSystemId: string;
          ipAddress?: string;
          smbServerFqdn?: string;
        }[];
        volumeType?: string;
        dataProtection?: {
          backup?: {
            backupPolicyId?: string;
            policyEnforced?: boolean;
            backupVaultId?: string;
          };
          replication?: {
            replicationId?: string;
            endpointType?: "src" | "dst";
            replicationSchedule?: "_10minutely" | "hourly" | "daily";
            remoteVolumeResourceId?: string;
            remotePath?: {
              externalHostName: string;
              serverName: string;
              volumeName: string;
            };
            remoteVolumeRegion?: string;
            destinationReplications?: {
              resourceId?: string;
              replicationType?:
                | "CrossRegionReplication"
                | "CrossZoneReplication";
              region?: string;
              zone?: string;
            }[];
            externalReplicationSetupStatus?:
              | "ClusterPeerRequired"
              | "ClusterPeerPending"
              | "VServerPeerRequired"
              | "ReplicationCreateRequired"
              | "NoActionRequired";
            externalReplicationSetupInfo?: string;
            mirrorState?: "Uninitialized" | "Mirrored" | "Broken";
            relationshipStatus?: "Idle" | "Transferring";
          };
          snapshot?: { snapshotPolicyId?: string };
          volumeRelocation?: {
            relocationRequested?: boolean;
            readyToBeFinalized?: boolean;
          };
          ransomwareProtection?: {
            desiredRansomwareProtectionState?: "Disabled" | "Enabled";
            actualRansomwareProtectionState?:
              | "Disabled"
              | "Enabled"
              | "Learning"
              | "Paused";
          };
        };
        acceptGrowCapacityPoolForShortTermCloneSplit?: "Accepted" | "Declined";
        isRestoring?: boolean;
        snapshotDirectoryVisible?: boolean;
        kerberosEnabled?: boolean;
        securityStyle?: "ntfs" | "unix";
        smbEncryption?: boolean;
        smbAccessBasedEnumeration?: "Disabled" | "Enabled";
        smbNonBrowsable?: "Disabled" | "Enabled";
        smbContinuouslyAvailable?: boolean;
        throughputMibps?: number | null;
        actualThroughputMibps?: number;
        encryptionKeySource?: "Microsoft.NetApp" | "Microsoft.KeyVault";
        keyVaultPrivateEndpointResourceId?: string;
        ldapEnabled?: boolean;
        coolAccess?: boolean;
        coolnessPeriod?: number;
        coolAccessRetrievalPolicy?: "Default" | "OnRead" | "Never";
        coolAccessTieringPolicy?: "Auto" | "SnapshotOnly";
        unixPermissions?: string;
        cloneProgress?: number | null;
        fileAccessLogs?: "Enabled" | "Disabled";
        avsDataStore?: "Enabled" | "Disabled";
        dataStoreResourceId?: string[];
        isDefaultQuotaEnabled?: boolean;
        defaultUserQuotaInKiBs?: number;
        defaultGroupQuotaInKiBs?: number;
        maximumNumberOfFiles?: number;
        volumeGroupName?: string;
        capacityPoolResourceId?: string;
        proximityPlacementGroup?: string;
        t2Network?: string;
        volumeSpecName?: string;
        encrypted?: boolean;
        placementRules?: { key: string; value: string }[];
        enableSubvolumes?: "Enabled" | "Disabled";
        provisionedAvailabilityZone?: string | null;
        isLargeVolume?: boolean;
        originatingResourceId?: string | null;
        inheritedSizeInBytes?: number | null;
      };
    }[];
  };
  location?: string;
}
export const VolumeGroupsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    volumeGroupName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(Schema.String),
        groupMetaData: Schema.optional(
          Schema.Struct({
            groupDescription: Schema.optional(Schema.String),
            applicationType: Schema.optional(
              Schema.Literals(["SAP-HANA", "ORACLE"]),
            ),
            applicationIdentifier: Schema.optional(Schema.String),
            globalPlacementRules: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  key: Schema.String,
                  value: Schema.String,
                }),
              ),
            ),
            volumesCount: Schema.optional(Schema.Number),
          }),
        ),
        volumes: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              name: Schema.optional(Schema.String),
              type: Schema.optional(Schema.String),
              tags: Schema.optional(
                Schema.Record(Schema.String, Schema.String),
              ),
              zones: Schema.optional(Schema.Array(Schema.String)),
              properties: Schema.Struct({
                fileSystemId: Schema.optional(Schema.String),
                creationToken: Schema.String,
                serviceLevel: Schema.optional(
                  Schema.Literals([
                    "Standard",
                    "Premium",
                    "Ultra",
                    "StandardZRS",
                    "Flexible",
                  ]),
                ),
                usageThreshold: Schema.Number,
                exportPolicy: Schema.optional(
                  Schema.Struct({
                    rules: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          ruleIndex: Schema.optional(Schema.Number),
                          unixReadOnly: Schema.optional(Schema.Boolean),
                          unixReadWrite: Schema.optional(Schema.Boolean),
                          kerberos5ReadOnly: Schema.optional(Schema.Boolean),
                          kerberos5ReadWrite: Schema.optional(Schema.Boolean),
                          kerberos5iReadOnly: Schema.optional(Schema.Boolean),
                          kerberos5iReadWrite: Schema.optional(Schema.Boolean),
                          kerberos5pReadOnly: Schema.optional(Schema.Boolean),
                          kerberos5pReadWrite: Schema.optional(Schema.Boolean),
                          cifs: Schema.optional(Schema.Boolean),
                          nfsv3: Schema.optional(Schema.Boolean),
                          nfsv41: Schema.optional(Schema.Boolean),
                          allowedClients: Schema.optional(Schema.String),
                          hasRootAccess: Schema.optional(Schema.Boolean),
                          chownMode: Schema.optional(
                            Schema.Literals(["Restricted", "Unrestricted"]),
                          ),
                        }),
                      ),
                    ),
                  }),
                ),
                protocolTypes: Schema.optional(Schema.Array(Schema.String)),
                provisioningState: Schema.optional(Schema.String),
                snapshotId: Schema.optional(Schema.NullOr(Schema.String)),
                deleteBaseSnapshot: Schema.optional(Schema.Boolean),
                backupId: Schema.optional(Schema.NullOr(Schema.String)),
                baremetalTenantId: Schema.optional(Schema.String),
                subnetId: Schema.String,
                networkFeatures: Schema.optional(
                  Schema.Literals([
                    "Basic",
                    "Standard",
                    "Basic_Standard",
                    "Standard_Basic",
                  ]),
                ),
                effectiveNetworkFeatures: Schema.optional(
                  Schema.Literals([
                    "Basic",
                    "Standard",
                    "Basic_Standard",
                    "Standard_Basic",
                  ]),
                ),
                networkSiblingSetId: Schema.optional(Schema.String),
                storageToNetworkProximity: Schema.optional(
                  Schema.Literals(["Default", "T1", "T2", "AcrossT2"]),
                ),
                mountTargets: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      mountTargetId: Schema.optional(Schema.String),
                      fileSystemId: Schema.String,
                      ipAddress: Schema.optional(Schema.String),
                      smbServerFqdn: Schema.optional(Schema.String),
                    }),
                  ),
                ),
                volumeType: Schema.optional(Schema.String),
                dataProtection: Schema.optional(
                  Schema.Struct({
                    backup: Schema.optional(
                      Schema.Struct({
                        backupPolicyId: Schema.optional(Schema.String),
                        policyEnforced: Schema.optional(Schema.Boolean),
                        backupVaultId: Schema.optional(Schema.String),
                      }),
                    ),
                    replication: Schema.optional(
                      Schema.Struct({
                        replicationId: Schema.optional(Schema.String),
                        endpointType: Schema.optional(
                          Schema.Literals(["src", "dst"]),
                        ),
                        replicationSchedule: Schema.optional(
                          Schema.Literals(["_10minutely", "hourly", "daily"]),
                        ),
                        remoteVolumeResourceId: Schema.optional(Schema.String),
                        remotePath: Schema.optional(
                          Schema.Struct({
                            externalHostName: Schema.String,
                            serverName: Schema.String,
                            volumeName: Schema.String,
                          }),
                        ),
                        remoteVolumeRegion: Schema.optional(Schema.String),
                        destinationReplications: Schema.optional(
                          Schema.Array(
                            Schema.Struct({
                              resourceId: Schema.optional(Schema.String),
                              replicationType: Schema.optional(
                                Schema.Literals([
                                  "CrossRegionReplication",
                                  "CrossZoneReplication",
                                ]),
                              ),
                              region: Schema.optional(Schema.String),
                              zone: Schema.optional(Schema.String),
                            }),
                          ),
                        ),
                        externalReplicationSetupStatus: Schema.optional(
                          Schema.Literals([
                            "ClusterPeerRequired",
                            "ClusterPeerPending",
                            "VServerPeerRequired",
                            "ReplicationCreateRequired",
                            "NoActionRequired",
                          ]),
                        ),
                        externalReplicationSetupInfo: Schema.optional(
                          Schema.String,
                        ),
                        mirrorState: Schema.optional(
                          Schema.Literals([
                            "Uninitialized",
                            "Mirrored",
                            "Broken",
                          ]),
                        ),
                        relationshipStatus: Schema.optional(
                          Schema.Literals(["Idle", "Transferring"]),
                        ),
                      }),
                    ),
                    snapshot: Schema.optional(
                      Schema.Struct({
                        snapshotPolicyId: Schema.optional(Schema.String),
                      }),
                    ),
                    volumeRelocation: Schema.optional(
                      Schema.Struct({
                        relocationRequested: Schema.optional(Schema.Boolean),
                        readyToBeFinalized: Schema.optional(Schema.Boolean),
                      }),
                    ),
                    ransomwareProtection: Schema.optional(
                      Schema.Struct({
                        desiredRansomwareProtectionState: Schema.optional(
                          Schema.Literals(["Disabled", "Enabled"]),
                        ),
                        actualRansomwareProtectionState: Schema.optional(
                          Schema.Literals([
                            "Disabled",
                            "Enabled",
                            "Learning",
                            "Paused",
                          ]),
                        ),
                      }),
                    ),
                  }),
                ),
                acceptGrowCapacityPoolForShortTermCloneSplit: Schema.optional(
                  Schema.Literals(["Accepted", "Declined"]),
                ),
                isRestoring: Schema.optional(Schema.Boolean),
                snapshotDirectoryVisible: Schema.optional(Schema.Boolean),
                kerberosEnabled: Schema.optional(Schema.Boolean),
                securityStyle: Schema.optional(
                  Schema.Literals(["ntfs", "unix"]),
                ),
                smbEncryption: Schema.optional(Schema.Boolean),
                smbAccessBasedEnumeration: Schema.optional(
                  Schema.Literals(["Disabled", "Enabled"]),
                ),
                smbNonBrowsable: Schema.optional(
                  Schema.Literals(["Disabled", "Enabled"]),
                ),
                smbContinuouslyAvailable: Schema.optional(Schema.Boolean),
                throughputMibps: Schema.optional(Schema.NullOr(Schema.Number)),
                actualThroughputMibps: Schema.optional(Schema.Number),
                encryptionKeySource: Schema.optional(
                  Schema.Literals(["Microsoft.NetApp", "Microsoft.KeyVault"]),
                ),
                keyVaultPrivateEndpointResourceId: Schema.optional(
                  Schema.String,
                ),
                ldapEnabled: Schema.optional(Schema.Boolean),
                coolAccess: Schema.optional(Schema.Boolean),
                coolnessPeriod: Schema.optional(Schema.Number),
                coolAccessRetrievalPolicy: Schema.optional(
                  Schema.Literals(["Default", "OnRead", "Never"]),
                ),
                coolAccessTieringPolicy: Schema.optional(
                  Schema.Literals(["Auto", "SnapshotOnly"]),
                ),
                unixPermissions: Schema.optional(Schema.String),
                cloneProgress: Schema.optional(Schema.NullOr(Schema.Number)),
                fileAccessLogs: Schema.optional(
                  Schema.Literals(["Enabled", "Disabled"]),
                ),
                avsDataStore: Schema.optional(
                  Schema.Literals(["Enabled", "Disabled"]),
                ),
                dataStoreResourceId: Schema.optional(
                  Schema.Array(Schema.String),
                ),
                isDefaultQuotaEnabled: Schema.optional(Schema.Boolean),
                defaultUserQuotaInKiBs: Schema.optional(Schema.Number),
                defaultGroupQuotaInKiBs: Schema.optional(Schema.Number),
                maximumNumberOfFiles: Schema.optional(Schema.Number),
                volumeGroupName: Schema.optional(Schema.String),
                capacityPoolResourceId: Schema.optional(Schema.String),
                proximityPlacementGroup: Schema.optional(Schema.String),
                t2Network: Schema.optional(Schema.String),
                volumeSpecName: Schema.optional(Schema.String),
                encrypted: Schema.optional(Schema.Boolean),
                placementRules: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      key: Schema.String,
                      value: Schema.String,
                    }),
                  ),
                ),
                enableSubvolumes: Schema.optional(
                  Schema.Literals(["Enabled", "Disabled"]),
                ),
                provisionedAvailabilityZone: Schema.optional(
                  Schema.NullOr(Schema.String),
                ),
                isLargeVolume: Schema.optional(Schema.Boolean),
                originatingResourceId: Schema.optional(
                  Schema.NullOr(Schema.String),
                ),
                inheritedSizeInBytes: Schema.optional(
                  Schema.NullOr(Schema.Number),
                ),
              }),
            }),
          ),
        ),
      }),
    ),
    location: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/volumeGroups/{volumeGroupName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<VolumeGroupsCreateInput>;

// Output Schema
export interface VolumeGroupsCreateOutput {
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
export const VolumeGroupsCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<VolumeGroupsCreateOutput>;

// The operation
/**
 * Create a volume group along with specified volumes
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param volumeGroupName - The name of the volumeGroup
 */
export const VolumeGroupsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VolumeGroupsCreateInput,
  outputSchema: VolumeGroupsCreateOutput,
}));
// Input Schema
export interface VolumeGroupsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  volumeGroupName: string;
}
export const VolumeGroupsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    volumeGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/volumeGroups/{volumeGroupName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<VolumeGroupsDeleteInput>;

// Output Schema
export type VolumeGroupsDeleteOutput = void;
export const VolumeGroupsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<VolumeGroupsDeleteOutput>;

// The operation
/**
 * Delete the specified volume group only if there are no volumes under volume group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param volumeGroupName - The name of the volumeGroup
 */
export const VolumeGroupsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VolumeGroupsDeleteInput,
  outputSchema: VolumeGroupsDeleteOutput,
}));
// Input Schema
export interface VolumeGroupsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  volumeGroupName: string;
}
export const VolumeGroupsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  volumeGroupName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/volumeGroups/{volumeGroupName}",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<VolumeGroupsGetInput>;

// Output Schema
export interface VolumeGroupsGetOutput {
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
export const VolumeGroupsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<VolumeGroupsGetOutput>;

// The operation
/**
 * Get details of the specified volume group
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param volumeGroupName - The name of the volumeGroup
 */
export const VolumeGroupsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VolumeGroupsGetInput,
  outputSchema: VolumeGroupsGetOutput,
}));
// Input Schema
export interface VolumeGroupsListByNetAppAccountInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const VolumeGroupsListByNetAppAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/volumeGroups",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<VolumeGroupsListByNetAppAccountInput>;

// Output Schema
export interface VolumeGroupsListByNetAppAccountOutput {
  value: {
    location?: string;
    id?: string;
    name?: string;
    type?: string;
    properties?: {
      provisioningState?: string;
      groupMetaData?: {
        groupDescription?: string;
        applicationType?: "SAP-HANA" | "ORACLE";
        applicationIdentifier?: string;
        globalPlacementRules?: { key: string; value: string }[];
        volumesCount?: number;
      };
    };
  }[];
  nextLink?: string;
}
export const VolumeGroupsListByNetAppAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        location: Schema.optional(Schema.String),
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        properties: Schema.optional(
          Schema.Struct({
            provisioningState: Schema.optional(Schema.String),
            groupMetaData: Schema.optional(
              Schema.Struct({
                groupDescription: Schema.optional(Schema.String),
                applicationType: Schema.optional(
                  Schema.Literals(["SAP-HANA", "ORACLE"]),
                ),
                applicationIdentifier: Schema.optional(Schema.String),
                globalPlacementRules: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      key: Schema.String,
                      value: Schema.String,
                    }),
                  ),
                ),
                volumesCount: Schema.optional(Schema.Number),
              }),
            ),
          }),
        ),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<VolumeGroupsListByNetAppAccountOutput>;

// The operation
/**
 * List all volume groups for given account
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 */
export const VolumeGroupsListByNetAppAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VolumeGroupsListByNetAppAccountInput,
    outputSchema: VolumeGroupsListByNetAppAccountOutput,
  }));
// Input Schema
export interface VolumeQuotaRulesCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  poolName: string;
  volumeName: string;
  volumeQuotaRuleName: string;
  properties?: {
    provisioningState?:
      | "Accepted"
      | "Creating"
      | "Patching"
      | "Updating"
      | "Deleting"
      | "Moving"
      | "Failed"
      | "Succeeded";
    quotaSizeInKiBs?: number;
    quotaType?:
      | "DefaultUserQuota"
      | "DefaultGroupQuota"
      | "IndividualUserQuota"
      | "IndividualGroupQuota";
    quotaTarget?: string;
  };
  tags?: Record<string, string>;
  location: string;
}
export const VolumeQuotaRulesCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    poolName: Schema.String.pipe(T.PathParam()),
    volumeName: Schema.String.pipe(T.PathParam()),
    volumeQuotaRuleName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Accepted",
            "Creating",
            "Patching",
            "Updating",
            "Deleting",
            "Moving",
            "Failed",
            "Succeeded",
          ]),
        ),
        quotaSizeInKiBs: Schema.optional(Schema.Number),
        quotaType: Schema.optional(
          Schema.Literals([
            "DefaultUserQuota",
            "DefaultGroupQuota",
            "IndividualUserQuota",
            "IndividualGroupQuota",
          ]),
        ),
        quotaTarget: Schema.optional(Schema.String),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/volumeQuotaRules/{volumeQuotaRuleName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<VolumeQuotaRulesCreateInput>;

// Output Schema
export interface VolumeQuotaRulesCreateOutput {
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
export const VolumeQuotaRulesCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<VolumeQuotaRulesCreateOutput>;

// The operation
/**
 * Create the specified quota rule within the given volume
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param poolName - The name of the capacity pool
 * @param volumeName - The name of the volume
 * @param volumeQuotaRuleName - The name of volume quota rule
 */
export const VolumeQuotaRulesCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VolumeQuotaRulesCreateInput,
    outputSchema: VolumeQuotaRulesCreateOutput,
  }),
);
// Input Schema
export interface VolumeQuotaRulesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  poolName: string;
  volumeName: string;
  volumeQuotaRuleName: string;
}
export const VolumeQuotaRulesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    poolName: Schema.String.pipe(T.PathParam()),
    volumeName: Schema.String.pipe(T.PathParam()),
    volumeQuotaRuleName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/volumeQuotaRules/{volumeQuotaRuleName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<VolumeQuotaRulesDeleteInput>;

// Output Schema
export type VolumeQuotaRulesDeleteOutput = void;
export const VolumeQuotaRulesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<VolumeQuotaRulesDeleteOutput>;

// The operation
/**
 * Delete quota rule
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param poolName - The name of the capacity pool
 * @param volumeName - The name of the volume
 * @param volumeQuotaRuleName - The name of volume quota rule
 */
export const VolumeQuotaRulesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VolumeQuotaRulesDeleteInput,
    outputSchema: VolumeQuotaRulesDeleteOutput,
  }),
);
// Input Schema
export interface VolumeQuotaRulesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  poolName: string;
  volumeName: string;
  volumeQuotaRuleName: string;
}
export const VolumeQuotaRulesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    poolName: Schema.String.pipe(T.PathParam()),
    volumeName: Schema.String.pipe(T.PathParam()),
    volumeQuotaRuleName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/volumeQuotaRules/{volumeQuotaRuleName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<VolumeQuotaRulesGetInput>;

// Output Schema
export interface VolumeQuotaRulesGetOutput {
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
export const VolumeQuotaRulesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<VolumeQuotaRulesGetOutput>;

// The operation
/**
 * Get details of the specified quota rule
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param poolName - The name of the capacity pool
 * @param volumeName - The name of the volume
 * @param volumeQuotaRuleName - The name of volume quota rule
 */
export const VolumeQuotaRulesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VolumeQuotaRulesGetInput,
  outputSchema: VolumeQuotaRulesGetOutput,
}));
// Input Schema
export interface VolumeQuotaRulesListByVolumeInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  poolName: string;
  volumeName: string;
}
export const VolumeQuotaRulesListByVolumeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    poolName: Schema.String.pipe(T.PathParam()),
    volumeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/volumeQuotaRules",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<VolumeQuotaRulesListByVolumeInput>;

// Output Schema
export interface VolumeQuotaRulesListByVolumeOutput {
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
export const VolumeQuotaRulesListByVolumeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<VolumeQuotaRulesListByVolumeOutput>;

// The operation
/**
 * List all quota rules associated with the volume
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param poolName - The name of the capacity pool
 * @param volumeName - The name of the volume
 */
export const VolumeQuotaRulesListByVolume =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VolumeQuotaRulesListByVolumeInput,
    outputSchema: VolumeQuotaRulesListByVolumeOutput,
  }));
// Input Schema
export interface VolumeQuotaRulesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  poolName: string;
  volumeName: string;
  volumeQuotaRuleName: string;
  tags?: Record<string, string>;
  properties?: {
    provisioningState?:
      | "Accepted"
      | "Creating"
      | "Patching"
      | "Updating"
      | "Deleting"
      | "Moving"
      | "Failed"
      | "Succeeded";
    quotaSizeInKiBs?: number;
    quotaType?:
      | "DefaultUserQuota"
      | "DefaultGroupQuota"
      | "IndividualUserQuota"
      | "IndividualGroupQuota";
    quotaTarget?: string;
  };
}
export const VolumeQuotaRulesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    poolName: Schema.String.pipe(T.PathParam()),
    volumeName: Schema.String.pipe(T.PathParam()),
    volumeQuotaRuleName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Accepted",
            "Creating",
            "Patching",
            "Updating",
            "Deleting",
            "Moving",
            "Failed",
            "Succeeded",
          ]),
        ),
        quotaSizeInKiBs: Schema.optional(Schema.Number),
        quotaType: Schema.optional(
          Schema.Literals([
            "DefaultUserQuota",
            "DefaultGroupQuota",
            "IndividualUserQuota",
            "IndividualGroupQuota",
          ]),
        ),
        quotaTarget: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/volumeQuotaRules/{volumeQuotaRuleName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<VolumeQuotaRulesUpdateInput>;

// Output Schema
export interface VolumeQuotaRulesUpdateOutput {
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
export const VolumeQuotaRulesUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<VolumeQuotaRulesUpdateOutput>;

// The operation
/**
 * Patch a quota rule
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param poolName - The name of the capacity pool
 * @param volumeName - The name of the volume
 * @param volumeQuotaRuleName - The name of volume quota rule
 */
export const VolumeQuotaRulesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VolumeQuotaRulesUpdateInput,
    outputSchema: VolumeQuotaRulesUpdateOutput,
  }),
);
// Input Schema
export interface VolumesAuthorizeExternalReplicationInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  poolName: string;
  volumeName: string;
}
export const VolumesAuthorizeExternalReplicationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    poolName: Schema.String.pipe(T.PathParam()),
    volumeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/authorizeExternalReplication",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<VolumesAuthorizeExternalReplicationInput>;

// Output Schema
export interface VolumesAuthorizeExternalReplicationOutput {
  properties?: { svmPeeringCommand?: string };
}
export const VolumesAuthorizeExternalReplicationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        svmPeeringCommand: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<VolumesAuthorizeExternalReplicationOutput>;

// The operation
/**
 * Starts SVM peering and returns a command to be run on the external ONTAP to accept it.  Once the SVM have been peered a SnapMirror will be created
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param poolName - The name of the capacity pool
 * @param volumeName - The name of the volume
 */
export const VolumesAuthorizeExternalReplication =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VolumesAuthorizeExternalReplicationInput,
    outputSchema: VolumesAuthorizeExternalReplicationOutput,
  }));
// Input Schema
export interface VolumesAuthorizeReplicationInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  poolName: string;
  volumeName: string;
  remoteVolumeResourceId?: string;
}
export const VolumesAuthorizeReplicationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    poolName: Schema.String.pipe(T.PathParam()),
    volumeName: Schema.String.pipe(T.PathParam()),
    remoteVolumeResourceId: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/authorizeReplication",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<VolumesAuthorizeReplicationInput>;

// Output Schema
export type VolumesAuthorizeReplicationOutput = void;
export const VolumesAuthorizeReplicationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<VolumesAuthorizeReplicationOutput>;

// The operation
/**
 * Authorize the replication connection on the source volume
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param poolName - The name of the capacity pool
 * @param volumeName - The name of the volume
 */
export const VolumesAuthorizeReplication = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VolumesAuthorizeReplicationInput,
    outputSchema: VolumesAuthorizeReplicationOutput,
  }),
);
// Input Schema
export interface VolumesBreakFileLocksInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  poolName: string;
  volumeName: string;
  clientIp?: string;
  confirmRunningDisruptiveOperation?: boolean;
}
export const VolumesBreakFileLocksInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    poolName: Schema.String.pipe(T.PathParam()),
    volumeName: Schema.String.pipe(T.PathParam()),
    clientIp: Schema.optional(Schema.String),
    confirmRunningDisruptiveOperation: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/breakFileLocks",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<VolumesBreakFileLocksInput>;

// Output Schema
export type VolumesBreakFileLocksOutput = void;
export const VolumesBreakFileLocksOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<VolumesBreakFileLocksOutput>;

// The operation
/**
 * Break all the file locks on a volume
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param poolName - The name of the capacity pool
 * @param volumeName - The name of the volume
 */
export const VolumesBreakFileLocks = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VolumesBreakFileLocksInput,
    outputSchema: VolumesBreakFileLocksOutput,
  }),
);
// Input Schema
export interface VolumesBreakReplicationInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  poolName: string;
  volumeName: string;
  forceBreakReplication?: boolean;
}
export const VolumesBreakReplicationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    poolName: Schema.String.pipe(T.PathParam()),
    volumeName: Schema.String.pipe(T.PathParam()),
    forceBreakReplication: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/breakReplication",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<VolumesBreakReplicationInput>;

// Output Schema
export type VolumesBreakReplicationOutput = void;
export const VolumesBreakReplicationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<VolumesBreakReplicationOutput>;

// The operation
/**
 * Break the replication connection on the destination volume
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param poolName - The name of the capacity pool
 * @param volumeName - The name of the volume
 */
export const VolumesBreakReplication = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VolumesBreakReplicationInput,
    outputSchema: VolumesBreakReplicationOutput,
  }),
);
// Input Schema
export interface VolumesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  poolName: string;
  volumeName: string;
  properties: {
    fileSystemId?: string;
    creationToken: string;
    serviceLevel?:
      | "Standard"
      | "Premium"
      | "Ultra"
      | "StandardZRS"
      | "Flexible";
    usageThreshold: number;
    exportPolicy?: {
      rules?: {
        ruleIndex?: number;
        unixReadOnly?: boolean;
        unixReadWrite?: boolean;
        kerberos5ReadOnly?: boolean;
        kerberos5ReadWrite?: boolean;
        kerberos5iReadOnly?: boolean;
        kerberos5iReadWrite?: boolean;
        kerberos5pReadOnly?: boolean;
        kerberos5pReadWrite?: boolean;
        cifs?: boolean;
        nfsv3?: boolean;
        nfsv41?: boolean;
        allowedClients?: string;
        hasRootAccess?: boolean;
        chownMode?: "Restricted" | "Unrestricted";
      }[];
    };
    protocolTypes?: string[];
    provisioningState?: string;
    snapshotId?: string | null;
    deleteBaseSnapshot?: boolean;
    backupId?: string | null;
    baremetalTenantId?: string;
    subnetId: string;
    networkFeatures?:
      | "Basic"
      | "Standard"
      | "Basic_Standard"
      | "Standard_Basic";
    effectiveNetworkFeatures?:
      | "Basic"
      | "Standard"
      | "Basic_Standard"
      | "Standard_Basic";
    networkSiblingSetId?: string;
    storageToNetworkProximity?: "Default" | "T1" | "T2" | "AcrossT2";
    mountTargets?: {
      mountTargetId?: string;
      fileSystemId: string;
      ipAddress?: string;
      smbServerFqdn?: string;
    }[];
    volumeType?: string;
    dataProtection?: {
      backup?: {
        backupPolicyId?: string;
        policyEnforced?: boolean;
        backupVaultId?: string;
      };
      replication?: {
        replicationId?: string;
        endpointType?: "src" | "dst";
        replicationSchedule?: "_10minutely" | "hourly" | "daily";
        remoteVolumeResourceId?: string;
        remotePath?: {
          externalHostName: string;
          serverName: string;
          volumeName: string;
        };
        remoteVolumeRegion?: string;
        destinationReplications?: {
          resourceId?: string;
          replicationType?: "CrossRegionReplication" | "CrossZoneReplication";
          region?: string;
          zone?: string;
        }[];
        externalReplicationSetupStatus?:
          | "ClusterPeerRequired"
          | "ClusterPeerPending"
          | "VServerPeerRequired"
          | "ReplicationCreateRequired"
          | "NoActionRequired";
        externalReplicationSetupInfo?: string;
        mirrorState?: "Uninitialized" | "Mirrored" | "Broken";
        relationshipStatus?: "Idle" | "Transferring";
      };
      snapshot?: { snapshotPolicyId?: string };
      volumeRelocation?: {
        relocationRequested?: boolean;
        readyToBeFinalized?: boolean;
      };
      ransomwareProtection?: {
        desiredRansomwareProtectionState?: "Disabled" | "Enabled";
        actualRansomwareProtectionState?:
          | "Disabled"
          | "Enabled"
          | "Learning"
          | "Paused";
      };
    };
    acceptGrowCapacityPoolForShortTermCloneSplit?: "Accepted" | "Declined";
    isRestoring?: boolean;
    snapshotDirectoryVisible?: boolean;
    kerberosEnabled?: boolean;
    securityStyle?: "ntfs" | "unix";
    smbEncryption?: boolean;
    smbAccessBasedEnumeration?: "Disabled" | "Enabled";
    smbNonBrowsable?: "Disabled" | "Enabled";
    smbContinuouslyAvailable?: boolean;
    throughputMibps?: number | null;
    actualThroughputMibps?: number;
    encryptionKeySource?: "Microsoft.NetApp" | "Microsoft.KeyVault";
    keyVaultPrivateEndpointResourceId?: string;
    ldapEnabled?: boolean;
    coolAccess?: boolean;
    coolnessPeriod?: number;
    coolAccessRetrievalPolicy?: "Default" | "OnRead" | "Never";
    coolAccessTieringPolicy?: "Auto" | "SnapshotOnly";
    unixPermissions?: string;
    cloneProgress?: number | null;
    fileAccessLogs?: "Enabled" | "Disabled";
    avsDataStore?: "Enabled" | "Disabled";
    dataStoreResourceId?: string[];
    isDefaultQuotaEnabled?: boolean;
    defaultUserQuotaInKiBs?: number;
    defaultGroupQuotaInKiBs?: number;
    maximumNumberOfFiles?: number;
    volumeGroupName?: string;
    capacityPoolResourceId?: string;
    proximityPlacementGroup?: string;
    t2Network?: string;
    volumeSpecName?: string;
    encrypted?: boolean;
    placementRules?: { key: string; value: string }[];
    enableSubvolumes?: "Enabled" | "Disabled";
    provisionedAvailabilityZone?: string | null;
    isLargeVolume?: boolean;
    originatingResourceId?: string | null;
    inheritedSizeInBytes?: number | null;
  };
  etag?: string;
  zones?: string[];
  tags?: Record<string, string>;
  location: string;
}
export const VolumesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    poolName: Schema.String.pipe(T.PathParam()),
    volumeName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      fileSystemId: Schema.optional(Schema.String),
      creationToken: Schema.String,
      serviceLevel: Schema.optional(
        Schema.Literals([
          "Standard",
          "Premium",
          "Ultra",
          "StandardZRS",
          "Flexible",
        ]),
      ),
      usageThreshold: Schema.Number,
      exportPolicy: Schema.optional(
        Schema.Struct({
          rules: Schema.optional(
            Schema.Array(
              Schema.Struct({
                ruleIndex: Schema.optional(Schema.Number),
                unixReadOnly: Schema.optional(Schema.Boolean),
                unixReadWrite: Schema.optional(Schema.Boolean),
                kerberos5ReadOnly: Schema.optional(Schema.Boolean),
                kerberos5ReadWrite: Schema.optional(Schema.Boolean),
                kerberos5iReadOnly: Schema.optional(Schema.Boolean),
                kerberos5iReadWrite: Schema.optional(Schema.Boolean),
                kerberos5pReadOnly: Schema.optional(Schema.Boolean),
                kerberos5pReadWrite: Schema.optional(Schema.Boolean),
                cifs: Schema.optional(Schema.Boolean),
                nfsv3: Schema.optional(Schema.Boolean),
                nfsv41: Schema.optional(Schema.Boolean),
                allowedClients: Schema.optional(Schema.String),
                hasRootAccess: Schema.optional(Schema.Boolean),
                chownMode: Schema.optional(
                  Schema.Literals(["Restricted", "Unrestricted"]),
                ),
              }),
            ),
          ),
        }),
      ),
      protocolTypes: Schema.optional(Schema.Array(Schema.String)),
      provisioningState: Schema.optional(Schema.String),
      snapshotId: Schema.optional(Schema.NullOr(Schema.String)),
      deleteBaseSnapshot: Schema.optional(Schema.Boolean),
      backupId: Schema.optional(Schema.NullOr(Schema.String)),
      baremetalTenantId: Schema.optional(Schema.String),
      subnetId: Schema.String,
      networkFeatures: Schema.optional(
        Schema.Literals([
          "Basic",
          "Standard",
          "Basic_Standard",
          "Standard_Basic",
        ]),
      ),
      effectiveNetworkFeatures: Schema.optional(
        Schema.Literals([
          "Basic",
          "Standard",
          "Basic_Standard",
          "Standard_Basic",
        ]),
      ),
      networkSiblingSetId: Schema.optional(Schema.String),
      storageToNetworkProximity: Schema.optional(
        Schema.Literals(["Default", "T1", "T2", "AcrossT2"]),
      ),
      mountTargets: Schema.optional(
        Schema.Array(
          Schema.Struct({
            mountTargetId: Schema.optional(Schema.String),
            fileSystemId: Schema.String,
            ipAddress: Schema.optional(Schema.String),
            smbServerFqdn: Schema.optional(Schema.String),
          }),
        ),
      ),
      volumeType: Schema.optional(Schema.String),
      dataProtection: Schema.optional(
        Schema.Struct({
          backup: Schema.optional(
            Schema.Struct({
              backupPolicyId: Schema.optional(Schema.String),
              policyEnforced: Schema.optional(Schema.Boolean),
              backupVaultId: Schema.optional(Schema.String),
            }),
          ),
          replication: Schema.optional(
            Schema.Struct({
              replicationId: Schema.optional(Schema.String),
              endpointType: Schema.optional(Schema.Literals(["src", "dst"])),
              replicationSchedule: Schema.optional(
                Schema.Literals(["_10minutely", "hourly", "daily"]),
              ),
              remoteVolumeResourceId: Schema.optional(Schema.String),
              remotePath: Schema.optional(
                Schema.Struct({
                  externalHostName: Schema.String,
                  serverName: Schema.String,
                  volumeName: Schema.String,
                }),
              ),
              remoteVolumeRegion: Schema.optional(Schema.String),
              destinationReplications: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    resourceId: Schema.optional(Schema.String),
                    replicationType: Schema.optional(
                      Schema.Literals([
                        "CrossRegionReplication",
                        "CrossZoneReplication",
                      ]),
                    ),
                    region: Schema.optional(Schema.String),
                    zone: Schema.optional(Schema.String),
                  }),
                ),
              ),
              externalReplicationSetupStatus: Schema.optional(
                Schema.Literals([
                  "ClusterPeerRequired",
                  "ClusterPeerPending",
                  "VServerPeerRequired",
                  "ReplicationCreateRequired",
                  "NoActionRequired",
                ]),
              ),
              externalReplicationSetupInfo: Schema.optional(Schema.String),
              mirrorState: Schema.optional(
                Schema.Literals(["Uninitialized", "Mirrored", "Broken"]),
              ),
              relationshipStatus: Schema.optional(
                Schema.Literals(["Idle", "Transferring"]),
              ),
            }),
          ),
          snapshot: Schema.optional(
            Schema.Struct({
              snapshotPolicyId: Schema.optional(Schema.String),
            }),
          ),
          volumeRelocation: Schema.optional(
            Schema.Struct({
              relocationRequested: Schema.optional(Schema.Boolean),
              readyToBeFinalized: Schema.optional(Schema.Boolean),
            }),
          ),
          ransomwareProtection: Schema.optional(
            Schema.Struct({
              desiredRansomwareProtectionState: Schema.optional(
                Schema.Literals(["Disabled", "Enabled"]),
              ),
              actualRansomwareProtectionState: Schema.optional(
                Schema.Literals(["Disabled", "Enabled", "Learning", "Paused"]),
              ),
            }),
          ),
        }),
      ),
      acceptGrowCapacityPoolForShortTermCloneSplit: Schema.optional(
        Schema.Literals(["Accepted", "Declined"]),
      ),
      isRestoring: Schema.optional(Schema.Boolean),
      snapshotDirectoryVisible: Schema.optional(Schema.Boolean),
      kerberosEnabled: Schema.optional(Schema.Boolean),
      securityStyle: Schema.optional(Schema.Literals(["ntfs", "unix"])),
      smbEncryption: Schema.optional(Schema.Boolean),
      smbAccessBasedEnumeration: Schema.optional(
        Schema.Literals(["Disabled", "Enabled"]),
      ),
      smbNonBrowsable: Schema.optional(
        Schema.Literals(["Disabled", "Enabled"]),
      ),
      smbContinuouslyAvailable: Schema.optional(Schema.Boolean),
      throughputMibps: Schema.optional(Schema.NullOr(Schema.Number)),
      actualThroughputMibps: Schema.optional(Schema.Number),
      encryptionKeySource: Schema.optional(
        Schema.Literals(["Microsoft.NetApp", "Microsoft.KeyVault"]),
      ),
      keyVaultPrivateEndpointResourceId: Schema.optional(Schema.String),
      ldapEnabled: Schema.optional(Schema.Boolean),
      coolAccess: Schema.optional(Schema.Boolean),
      coolnessPeriod: Schema.optional(Schema.Number),
      coolAccessRetrievalPolicy: Schema.optional(
        Schema.Literals(["Default", "OnRead", "Never"]),
      ),
      coolAccessTieringPolicy: Schema.optional(
        Schema.Literals(["Auto", "SnapshotOnly"]),
      ),
      unixPermissions: Schema.optional(Schema.String),
      cloneProgress: Schema.optional(Schema.NullOr(Schema.Number)),
      fileAccessLogs: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
      avsDataStore: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
      dataStoreResourceId: Schema.optional(Schema.Array(Schema.String)),
      isDefaultQuotaEnabled: Schema.optional(Schema.Boolean),
      defaultUserQuotaInKiBs: Schema.optional(Schema.Number),
      defaultGroupQuotaInKiBs: Schema.optional(Schema.Number),
      maximumNumberOfFiles: Schema.optional(Schema.Number),
      volumeGroupName: Schema.optional(Schema.String),
      capacityPoolResourceId: Schema.optional(Schema.String),
      proximityPlacementGroup: Schema.optional(Schema.String),
      t2Network: Schema.optional(Schema.String),
      volumeSpecName: Schema.optional(Schema.String),
      encrypted: Schema.optional(Schema.Boolean),
      placementRules: Schema.optional(
        Schema.Array(
          Schema.Struct({
            key: Schema.String,
            value: Schema.String,
          }),
        ),
      ),
      enableSubvolumes: Schema.optional(
        Schema.Literals(["Enabled", "Disabled"]),
      ),
      provisionedAvailabilityZone: Schema.optional(
        Schema.NullOr(Schema.String),
      ),
      isLargeVolume: Schema.optional(Schema.Boolean),
      originatingResourceId: Schema.optional(Schema.NullOr(Schema.String)),
      inheritedSizeInBytes: Schema.optional(Schema.NullOr(Schema.Number)),
    }),
    etag: Schema.optional(Schema.String),
    zones: Schema.optional(Schema.Array(Schema.String)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<VolumesCreateOrUpdateInput>;

// Output Schema
export interface VolumesCreateOrUpdateOutput {
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
export const VolumesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<VolumesCreateOrUpdateOutput>;

// The operation
/**
 * Create or update the specified volume within the capacity pool
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param poolName - The name of the capacity pool
 * @param volumeName - The name of the volume
 */
export const VolumesCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VolumesCreateOrUpdateInput,
    outputSchema: VolumesCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface VolumesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  poolName: string;
  volumeName: string;
  forceDelete?: boolean;
}
export const VolumesDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  poolName: Schema.String.pipe(T.PathParam()),
  volumeName: Schema.String.pipe(T.PathParam()),
  forceDelete: Schema.optional(Schema.Boolean),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<VolumesDeleteInput>;

// Output Schema
export type VolumesDeleteOutput = void;
export const VolumesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<VolumesDeleteOutput>;

// The operation
/**
 * Delete the specified volume
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param poolName - The name of the capacity pool
 * @param volumeName - The name of the volume
 * @param forceDelete - An option to force delete the volume. Will cleanup resources connected to the particular volume
 */
export const VolumesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VolumesDeleteInput,
  outputSchema: VolumesDeleteOutput,
}));
// Input Schema
export interface VolumesDeleteReplicationInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  poolName: string;
  volumeName: string;
}
export const VolumesDeleteReplicationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    poolName: Schema.String.pipe(T.PathParam()),
    volumeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/deleteReplication",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<VolumesDeleteReplicationInput>;

// Output Schema
export type VolumesDeleteReplicationOutput = void;
export const VolumesDeleteReplicationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<VolumesDeleteReplicationOutput>;

// The operation
/**
 * Delete the replication connection on the destination volume, and send release to the source replication
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param poolName - The name of the capacity pool
 * @param volumeName - The name of the volume
 */
export const VolumesDeleteReplication = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VolumesDeleteReplicationInput,
    outputSchema: VolumesDeleteReplicationOutput,
  }),
);
// Input Schema
export interface VolumesFinalizeExternalReplicationInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  poolName: string;
  volumeName: string;
}
export const VolumesFinalizeExternalReplicationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    poolName: Schema.String.pipe(T.PathParam()),
    volumeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/finalizeExternalReplication",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<VolumesFinalizeExternalReplicationInput>;

// Output Schema
export type VolumesFinalizeExternalReplicationOutput = void;
export const VolumesFinalizeExternalReplicationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<VolumesFinalizeExternalReplicationOutput>;

// The operation
/**
 * Finalizes the migration of an external volume by releasing the replication and breaking the external cluster peering if no other migration is active.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param poolName - The name of the capacity pool
 * @param volumeName - The name of the volume
 */
export const VolumesFinalizeExternalReplication =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VolumesFinalizeExternalReplicationInput,
    outputSchema: VolumesFinalizeExternalReplicationOutput,
  }));
// Input Schema
export interface VolumesFinalizeRelocationInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  poolName: string;
  volumeName: string;
}
export const VolumesFinalizeRelocationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    poolName: Schema.String.pipe(T.PathParam()),
    volumeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/finalizeRelocation",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<VolumesFinalizeRelocationInput>;

// Output Schema
export type VolumesFinalizeRelocationOutput = void;
export const VolumesFinalizeRelocationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<VolumesFinalizeRelocationOutput>;

// The operation
/**
 * Finalizes the relocation of the volume and cleans up the old volume.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param poolName - The name of the capacity pool
 * @param volumeName - The name of the volume
 */
export const VolumesFinalizeRelocation = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VolumesFinalizeRelocationInput,
    outputSchema: VolumesFinalizeRelocationOutput,
  }),
);
// Input Schema
export interface VolumesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  poolName: string;
  volumeName: string;
}
export const VolumesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  poolName: Schema.String.pipe(T.PathParam()),
  volumeName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<VolumesGetInput>;

// Output Schema
export interface VolumesGetOutput {
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
export const VolumesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<VolumesGetOutput>;

// The operation
/**
 * Get the details of the specified volume
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param poolName - The name of the capacity pool
 * @param volumeName - The name of the volume
 */
export const VolumesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VolumesGetInput,
  outputSchema: VolumesGetOutput,
}));
// Input Schema
export interface VolumesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  poolName: string;
}
export const VolumesListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  poolName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<VolumesListInput>;

// Output Schema
export interface VolumesListOutput {
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
export const VolumesListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<VolumesListOutput>;

// The operation
/**
 * List all volumes within the capacity pool
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param poolName - The name of the capacity pool
 */
export const VolumesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VolumesListInput,
  outputSchema: VolumesListOutput,
}));
// Input Schema
export interface VolumesListGetGroupIdListForLdapUserInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  poolName: string;
  volumeName: string;
  username: string;
}
export const VolumesListGetGroupIdListForLdapUserInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    poolName: Schema.String.pipe(T.PathParam()),
    volumeName: Schema.String.pipe(T.PathParam()),
    username: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/getGroupIdListForLdapUser",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<VolumesListGetGroupIdListForLdapUserInput>;

// Output Schema
export interface VolumesListGetGroupIdListForLdapUserOutput {
  groupIdsForLdapUser?: string[];
}
export const VolumesListGetGroupIdListForLdapUserOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    groupIdsForLdapUser: Schema.optional(Schema.Array(Schema.String)),
  }) as unknown as Schema.Codec<VolumesListGetGroupIdListForLdapUserOutput>;

// The operation
/**
 * Returns the list of group Ids for a specific LDAP User
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param poolName - The name of the capacity pool
 * @param volumeName - The name of the volume
 */
export const VolumesListGetGroupIdListForLdapUser =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VolumesListGetGroupIdListForLdapUserInput,
    outputSchema: VolumesListGetGroupIdListForLdapUserOutput,
  }));
// Input Schema
export interface VolumesListQuotaReportInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  poolName: string;
  volumeName: string;
  quotaType?:
    | "DefaultUserQuota"
    | "DefaultGroupQuota"
    | "IndividualUserQuota"
    | "IndividualGroupQuota";
  quotaTarget?: string;
  usageThresholdPercentage?: number;
}
export const VolumesListQuotaReportInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    poolName: Schema.String.pipe(T.PathParam()),
    volumeName: Schema.String.pipe(T.PathParam()),
    quotaType: Schema.optional(
      Schema.Literals([
        "DefaultUserQuota",
        "DefaultGroupQuota",
        "IndividualUserQuota",
        "IndividualGroupQuota",
      ]),
    ),
    quotaTarget: Schema.optional(Schema.String),
    usageThresholdPercentage: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/listQuotaReport",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<VolumesListQuotaReportInput>;

// Output Schema
export interface VolumesListQuotaReportOutput {
  properties?: {
    quotaReportRecords?: {
      quotaType?:
        | "DefaultUserQuota"
        | "DefaultGroupQuota"
        | "IndividualUserQuota"
        | "IndividualGroupQuota";
      quotaTarget?: string;
      quotaLimitUsedInKiBs?: number;
      quotaLimitTotalInKiBs?: number;
      percentageUsed?: number;
      isDerivedQuota?: boolean;
    }[];
  };
}
export const VolumesListQuotaReportOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        quotaReportRecords: Schema.optional(
          Schema.Array(
            Schema.Struct({
              quotaType: Schema.optional(
                Schema.Literals([
                  "DefaultUserQuota",
                  "DefaultGroupQuota",
                  "IndividualUserQuota",
                  "IndividualGroupQuota",
                ]),
              ),
              quotaTarget: Schema.optional(Schema.String),
              quotaLimitUsedInKiBs: Schema.optional(Schema.Number),
              quotaLimitTotalInKiBs: Schema.optional(Schema.Number),
              percentageUsed: Schema.optional(Schema.Number),
              isDerivedQuota: Schema.optional(Schema.Boolean),
            }),
          ),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<VolumesListQuotaReportOutput>;

// The operation
/**
 * Get quota report for volume (with filter support)
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param poolName - The name of the capacity pool
 * @param volumeName - The name of the volume
 */
export const VolumesListQuotaReport = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VolumesListQuotaReportInput,
    outputSchema: VolumesListQuotaReportOutput,
  }),
);
// Input Schema
export interface VolumesListReplicationsInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  poolName: string;
  volumeName: string;
  exclude?: "None" | "Deleted";
}
export const VolumesListReplicationsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    poolName: Schema.String.pipe(T.PathParam()),
    volumeName: Schema.String.pipe(T.PathParam()),
    exclude: Schema.optional(Schema.Literals(["None", "Deleted"])),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/listReplications",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<VolumesListReplicationsInput>;

// Output Schema
export interface VolumesListReplicationsOutput {
  value: {
    replicationId?: string;
    endpointType?: "src" | "dst";
    replicationSchedule?: "_10minutely" | "hourly" | "daily";
    remoteVolumeResourceId?: string;
    remoteVolumeRegion?: string;
    mirrorState?: "Uninitialized" | "Mirrored" | "Broken";
    replicationCreationTime?: string;
    replicationDeletionTime?: string;
  }[];
  nextLink?: string;
}
export const VolumesListReplicationsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        replicationId: Schema.optional(Schema.String),
        endpointType: Schema.optional(Schema.Literals(["src", "dst"])),
        replicationSchedule: Schema.optional(
          Schema.Literals(["_10minutely", "hourly", "daily"]),
        ),
        remoteVolumeResourceId: Schema.optional(Schema.String),
        remoteVolumeRegion: Schema.optional(Schema.String),
        mirrorState: Schema.optional(
          Schema.Literals(["Uninitialized", "Mirrored", "Broken"]),
        ),
        replicationCreationTime: Schema.optional(Schema.String),
        replicationDeletionTime: Schema.optional(Schema.String),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<VolumesListReplicationsOutput>;

// The operation
/**
 * List all replications for a specified volume
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param poolName - The name of the capacity pool
 * @param volumeName - The name of the volume
 */
export const VolumesListReplications = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VolumesListReplicationsInput,
    outputSchema: VolumesListReplicationsOutput,
  }),
);
// Input Schema
export interface VolumesPeerExternalClusterInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  poolName: string;
  volumeName: string;
  peerIpAddresses: string[];
}
export const VolumesPeerExternalClusterInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    poolName: Schema.String.pipe(T.PathParam()),
    volumeName: Schema.String.pipe(T.PathParam()),
    peerIpAddresses: Schema.Array(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/peerExternalCluster",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<VolumesPeerExternalClusterInput>;

// Output Schema
export interface VolumesPeerExternalClusterOutput {
  properties?: { clusterPeeringCommand?: string; passphrase?: string };
}
export const VolumesPeerExternalClusterOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        clusterPeeringCommand: Schema.optional(Schema.String),
        passphrase: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<VolumesPeerExternalClusterOutput>;

// The operation
/**
 * Starts peering the external cluster for this migration volume
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param poolName - The name of the capacity pool
 * @param volumeName - The name of the volume
 */
export const VolumesPeerExternalCluster = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VolumesPeerExternalClusterInput,
    outputSchema: VolumesPeerExternalClusterOutput,
  }),
);
// Input Schema
export interface VolumesPerformReplicationTransferInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  poolName: string;
  volumeName: string;
}
export const VolumesPerformReplicationTransferInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    poolName: Schema.String.pipe(T.PathParam()),
    volumeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/performReplicationTransfer",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<VolumesPerformReplicationTransferInput>;

// Output Schema
export type VolumesPerformReplicationTransferOutput = void;
export const VolumesPerformReplicationTransferOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<VolumesPerformReplicationTransferOutput>;

// The operation
/**
 * Performs an adhoc replication transfer on a volume with volumeType Migration
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param poolName - The name of the capacity pool
 * @param volumeName - The name of the volume
 */
export const VolumesPerformReplicationTransfer =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VolumesPerformReplicationTransferInput,
    outputSchema: VolumesPerformReplicationTransferOutput,
  }));
// Input Schema
export interface VolumesPoolChangeInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  poolName: string;
  volumeName: string;
  newPoolResourceId: string;
}
export const VolumesPoolChangeInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    poolName: Schema.String.pipe(T.PathParam()),
    volumeName: Schema.String.pipe(T.PathParam()),
    newPoolResourceId: Schema.String,
  },
).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/poolChange",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<VolumesPoolChangeInput>;

// Output Schema
export type VolumesPoolChangeOutput = void;
export const VolumesPoolChangeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<VolumesPoolChangeOutput>;

// The operation
/**
 * Moves volume to another pool
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param poolName - The name of the capacity pool
 * @param volumeName - The name of the volume
 */
export const VolumesPoolChange = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VolumesPoolChangeInput,
  outputSchema: VolumesPoolChangeOutput,
}));
// Input Schema
export interface VolumesPopulateAvailabilityZoneInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  poolName: string;
  volumeName: string;
}
export const VolumesPopulateAvailabilityZoneInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    poolName: Schema.String.pipe(T.PathParam()),
    volumeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/populateAvailabilityZone",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<VolumesPopulateAvailabilityZoneInput>;

// Output Schema
export interface VolumesPopulateAvailabilityZoneOutput {
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
export const VolumesPopulateAvailabilityZoneOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<VolumesPopulateAvailabilityZoneOutput>;

// The operation
/**
 * This operation will populate availability zone information for a volume
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param poolName - The name of the capacity pool
 * @param volumeName - The name of the volume
 */
export const VolumesPopulateAvailabilityZone =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VolumesPopulateAvailabilityZoneInput,
    outputSchema: VolumesPopulateAvailabilityZoneOutput,
  }));
// Input Schema
export interface VolumesReestablishReplicationInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  poolName: string;
  volumeName: string;
  sourceVolumeId?: string;
}
export const VolumesReestablishReplicationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    poolName: Schema.String.pipe(T.PathParam()),
    volumeName: Schema.String.pipe(T.PathParam()),
    sourceVolumeId: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/reestablishReplication",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<VolumesReestablishReplicationInput>;

// Output Schema
export type VolumesReestablishReplicationOutput = void;
export const VolumesReestablishReplicationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<VolumesReestablishReplicationOutput>;

// The operation
/**
 * Re-establish a previously deleted replication between 2 volumes that have a common ad-hoc or policy-based snapshots
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param poolName - The name of the capacity pool
 * @param volumeName - The name of the volume
 */
export const VolumesReestablishReplication =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VolumesReestablishReplicationInput,
    outputSchema: VolumesReestablishReplicationOutput,
  }));
// Input Schema
export interface VolumesReInitializeReplicationInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  poolName: string;
  volumeName: string;
}
export const VolumesReInitializeReplicationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    poolName: Schema.String.pipe(T.PathParam()),
    volumeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/reinitializeReplication",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<VolumesReInitializeReplicationInput>;

// Output Schema
export type VolumesReInitializeReplicationOutput = void;
export const VolumesReInitializeReplicationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<VolumesReInitializeReplicationOutput>;

// The operation
/**
 * Re-Initializes the replication connection on the destination volume
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param poolName - The name of the capacity pool
 * @param volumeName - The name of the volume
 */
export const VolumesReInitializeReplication =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VolumesReInitializeReplicationInput,
    outputSchema: VolumesReInitializeReplicationOutput,
  }));
// Input Schema
export interface VolumesRelocateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  poolName: string;
  volumeName: string;
  creationToken?: string;
}
export const VolumesRelocateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  poolName: Schema.String.pipe(T.PathParam()),
  volumeName: Schema.String.pipe(T.PathParam()),
  creationToken: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/relocate",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<VolumesRelocateInput>;

// Output Schema
export type VolumesRelocateOutput = void;
export const VolumesRelocateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<VolumesRelocateOutput>;

// The operation
/**
 * Relocates volume to a new stamp
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param poolName - The name of the capacity pool
 * @param volumeName - The name of the volume
 */
export const VolumesRelocate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VolumesRelocateInput,
  outputSchema: VolumesRelocateOutput,
}));
// Input Schema
export interface VolumesReplicationStatusInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  poolName: string;
  volumeName: string;
}
export const VolumesReplicationStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    poolName: Schema.String.pipe(T.PathParam()),
    volumeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/replicationStatus",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<VolumesReplicationStatusInput>;

// Output Schema
export interface VolumesReplicationStatusOutput {
  healthy?: boolean;
  relationshipStatus?: "Idle" | "Transferring";
  mirrorState?: "Uninitialized" | "Mirrored" | "Broken";
  totalProgress?: string;
  errorMessage?: string;
}
export const VolumesReplicationStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    healthy: Schema.optional(Schema.Boolean),
    relationshipStatus: Schema.optional(
      Schema.Literals(["Idle", "Transferring"]),
    ),
    mirrorState: Schema.optional(
      Schema.Literals(["Uninitialized", "Mirrored", "Broken"]),
    ),
    totalProgress: Schema.optional(Schema.String),
    errorMessage: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<VolumesReplicationStatusOutput>;

// The operation
/**
 * Get the status of the replication
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param poolName - The name of the capacity pool
 * @param volumeName - The name of the volume
 */
export const VolumesReplicationStatus = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VolumesReplicationStatusInput,
    outputSchema: VolumesReplicationStatusOutput,
  }),
);
// Input Schema
export interface VolumesResetCifsPasswordInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  poolName: string;
  volumeName: string;
}
export const VolumesResetCifsPasswordInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    poolName: Schema.String.pipe(T.PathParam()),
    volumeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/resetCifsPassword",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<VolumesResetCifsPasswordInput>;

// Output Schema
export type VolumesResetCifsPasswordOutput = void;
export const VolumesResetCifsPasswordOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<VolumesResetCifsPasswordOutput>;

// The operation
/**
 * Reset cifs password from volume
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param poolName - The name of the capacity pool
 * @param volumeName - The name of the volume
 */
export const VolumesResetCifsPassword = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VolumesResetCifsPasswordInput,
    outputSchema: VolumesResetCifsPasswordOutput,
  }),
);
// Input Schema
export interface VolumesResyncReplicationInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  poolName: string;
  volumeName: string;
}
export const VolumesResyncReplicationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    poolName: Schema.String.pipe(T.PathParam()),
    volumeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/resyncReplication",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<VolumesResyncReplicationInput>;

// Output Schema
export type VolumesResyncReplicationOutput = void;
export const VolumesResyncReplicationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<VolumesResyncReplicationOutput>;

// The operation
/**
 * Resync the connection on the destination volume. If the operation is ran on the source volume it will reverse-resync the connection and sync from destination to source.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param poolName - The name of the capacity pool
 * @param volumeName - The name of the volume
 */
export const VolumesResyncReplication = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VolumesResyncReplicationInput,
    outputSchema: VolumesResyncReplicationOutput,
  }),
);
// Input Schema
export interface VolumesRevertInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  poolName: string;
  volumeName: string;
  snapshotId?: string;
}
export const VolumesRevertInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  poolName: Schema.String.pipe(T.PathParam()),
  volumeName: Schema.String.pipe(T.PathParam()),
  snapshotId: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/revert",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<VolumesRevertInput>;

// Output Schema
export type VolumesRevertOutput = void;
export const VolumesRevertOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<VolumesRevertOutput>;

// The operation
/**
 * Revert a volume to the snapshot specified in the body
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param poolName - The name of the capacity pool
 * @param volumeName - The name of the volume
 */
export const VolumesRevert = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VolumesRevertInput,
  outputSchema: VolumesRevertOutput,
}));
// Input Schema
export interface VolumesRevertRelocationInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  poolName: string;
  volumeName: string;
}
export const VolumesRevertRelocationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    poolName: Schema.String.pipe(T.PathParam()),
    volumeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/revertRelocation",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<VolumesRevertRelocationInput>;

// Output Schema
export type VolumesRevertRelocationOutput = void;
export const VolumesRevertRelocationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<VolumesRevertRelocationOutput>;

// The operation
/**
 * Reverts the volume relocation process, cleans up the new volume and starts using the former-existing volume.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param poolName - The name of the capacity pool
 * @param volumeName - The name of the volume
 */
export const VolumesRevertRelocation = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VolumesRevertRelocationInput,
    outputSchema: VolumesRevertRelocationOutput,
  }),
);
// Input Schema
export interface VolumesSplitCloneFromParentInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  poolName: string;
  volumeName: string;
}
export const VolumesSplitCloneFromParentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    poolName: Schema.String.pipe(T.PathParam()),
    volumeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/splitCloneFromParent",
      apiVersion: "2026-04-01",
    }),
  ) as unknown as Schema.Codec<VolumesSplitCloneFromParentInput>;

// Output Schema
export interface VolumesSplitCloneFromParentOutput {
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
export const VolumesSplitCloneFromParentOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<VolumesSplitCloneFromParentOutput>;

// The operation
/**
 * Split operation to convert clone volume to an independent volume.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param poolName - The name of the capacity pool
 * @param volumeName - The name of the volume
 */
export const VolumesSplitCloneFromParent = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VolumesSplitCloneFromParentInput,
    outputSchema: VolumesSplitCloneFromParentOutput,
  }),
);
// Input Schema
export interface VolumesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  poolName: string;
  volumeName: string;
  location?: string;
  id?: string;
  name?: string;
  type?: string;
  tags?: Record<string, string>;
  properties?: {
    serviceLevel?:
      | "Standard"
      | "Premium"
      | "Ultra"
      | "StandardZRS"
      | "Flexible";
    usageThreshold?: number;
    exportPolicy?: {
      rules?: {
        ruleIndex?: number;
        unixReadOnly?: boolean;
        unixReadWrite?: boolean;
        kerberos5ReadOnly?: boolean;
        kerberos5ReadWrite?: boolean;
        kerberos5iReadOnly?: boolean;
        kerberos5iReadWrite?: boolean;
        kerberos5pReadOnly?: boolean;
        kerberos5pReadWrite?: boolean;
        cifs?: boolean;
        nfsv3?: boolean;
        nfsv41?: boolean;
        allowedClients?: string;
        hasRootAccess?: boolean;
        chownMode?: "Restricted" | "Unrestricted";
      }[];
    };
    protocolTypes?: string[];
    throughputMibps?: number;
    dataProtection?: {
      backup?: {
        backupPolicyId?: string;
        policyEnforced?: boolean;
        backupVaultId?: string;
      };
      snapshot?: { snapshotPolicyId?: string };
      ransomwareProtection?: {
        desiredRansomwareProtectionState?: "Disabled" | "Enabled";
      };
    };
    isDefaultQuotaEnabled?: boolean;
    defaultUserQuotaInKiBs?: number;
    defaultGroupQuotaInKiBs?: number;
    unixPermissions?: string;
    coolAccess?: boolean;
    coolnessPeriod?: number;
    coolAccessRetrievalPolicy?: "Default" | "OnRead" | "Never";
    coolAccessTieringPolicy?: "Auto" | "SnapshotOnly";
    snapshotDirectoryVisible?: boolean;
    smbAccessBasedEnumeration?: "Disabled" | "Enabled";
    smbNonBrowsable?: "Disabled" | "Enabled";
  };
}
export const VolumesUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  poolName: Schema.String.pipe(T.PathParam()),
  volumeName: Schema.String.pipe(T.PathParam()),
  location: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  properties: Schema.optional(
    Schema.Struct({
      serviceLevel: Schema.optional(
        Schema.Literals([
          "Standard",
          "Premium",
          "Ultra",
          "StandardZRS",
          "Flexible",
        ]),
      ),
      usageThreshold: Schema.optional(Schema.Number),
      exportPolicy: Schema.optional(
        Schema.Struct({
          rules: Schema.optional(
            Schema.Array(
              Schema.Struct({
                ruleIndex: Schema.optional(Schema.Number),
                unixReadOnly: Schema.optional(Schema.Boolean),
                unixReadWrite: Schema.optional(Schema.Boolean),
                kerberos5ReadOnly: Schema.optional(Schema.Boolean),
                kerberos5ReadWrite: Schema.optional(Schema.Boolean),
                kerberos5iReadOnly: Schema.optional(Schema.Boolean),
                kerberos5iReadWrite: Schema.optional(Schema.Boolean),
                kerberos5pReadOnly: Schema.optional(Schema.Boolean),
                kerberos5pReadWrite: Schema.optional(Schema.Boolean),
                cifs: Schema.optional(Schema.Boolean),
                nfsv3: Schema.optional(Schema.Boolean),
                nfsv41: Schema.optional(Schema.Boolean),
                allowedClients: Schema.optional(Schema.String),
                hasRootAccess: Schema.optional(Schema.Boolean),
                chownMode: Schema.optional(
                  Schema.Literals(["Restricted", "Unrestricted"]),
                ),
              }),
            ),
          ),
        }),
      ),
      protocolTypes: Schema.optional(Schema.Array(Schema.String)),
      throughputMibps: Schema.optional(Schema.Number),
      dataProtection: Schema.optional(
        Schema.Struct({
          backup: Schema.optional(
            Schema.Struct({
              backupPolicyId: Schema.optional(Schema.String),
              policyEnforced: Schema.optional(Schema.Boolean),
              backupVaultId: Schema.optional(Schema.String),
            }),
          ),
          snapshot: Schema.optional(
            Schema.Struct({
              snapshotPolicyId: Schema.optional(Schema.String),
            }),
          ),
          ransomwareProtection: Schema.optional(
            Schema.Struct({
              desiredRansomwareProtectionState: Schema.optional(
                Schema.Literals(["Disabled", "Enabled"]),
              ),
            }),
          ),
        }),
      ),
      isDefaultQuotaEnabled: Schema.optional(Schema.Boolean),
      defaultUserQuotaInKiBs: Schema.optional(Schema.Number),
      defaultGroupQuotaInKiBs: Schema.optional(Schema.Number),
      unixPermissions: Schema.optional(Schema.String),
      coolAccess: Schema.optional(Schema.Boolean),
      coolnessPeriod: Schema.optional(Schema.Number),
      coolAccessRetrievalPolicy: Schema.optional(
        Schema.Literals(["Default", "OnRead", "Never"]),
      ),
      coolAccessTieringPolicy: Schema.optional(
        Schema.Literals(["Auto", "SnapshotOnly"]),
      ),
      snapshotDirectoryVisible: Schema.optional(Schema.Boolean),
      smbAccessBasedEnumeration: Schema.optional(
        Schema.Literals(["Disabled", "Enabled"]),
      ),
      smbNonBrowsable: Schema.optional(
        Schema.Literals(["Disabled", "Enabled"]),
      ),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}",
    apiVersion: "2026-04-01",
  }),
) as unknown as Schema.Codec<VolumesUpdateInput>;

// Output Schema
export interface VolumesUpdateOutput {
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
export const VolumesUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<VolumesUpdateOutput>;

// The operation
/**
 * Patch the specified volume
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the NetApp account
 * @param poolName - The name of the capacity pool
 * @param volumeName - The name of the volume
 */
export const VolumesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VolumesUpdateInput,
  outputSchema: VolumesUpdateOutput,
}));
