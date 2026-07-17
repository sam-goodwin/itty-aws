/**
 * Azure Maps API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface AccountsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  sku: { name: "S0" | "S1" | "G2"; tier?: string };
  kind?: "Gen1" | "Gen2";
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  identity?: {
    principalId?: string;
    tenantId?: string;
    type:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned, UserAssigned";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
  properties?: {
    uniqueId?: string;
    disableLocalAuth?: boolean;
    provisioningState?: string;
    linkedResources?: { uniqueName: string; id: string }[];
    cors?: { corsRules?: { allowedOrigins: string[] }[] };
    encryption?: {
      infrastructureEncryption?: "enabled" | "disabled";
      customerManagedKeyEncryption?: {
        keyEncryptionKeyIdentity?: {
          identityType?:
            | "systemAssignedIdentity"
            | "userAssignedIdentity"
            | "delegatedResourceIdentity";
          userAssignedIdentityResourceId?: string;
          delegatedIdentityClientId?: string;
        };
        keyEncryptionKeyUrl?: string;
      };
    };
  };
  tags?: Record<string, string>;
  location: string;
}
export const AccountsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    sku: Schema.Struct({
      name: Schema.Literals(["S0", "S1", "G2"]),
      tier: Schema.optional(Schema.String),
    }),
    kind: Schema.optional(Schema.Literals(["Gen1", "Gen2"])),
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
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.Literals([
          "None",
          "SystemAssigned",
          "UserAssigned",
          "SystemAssigned, UserAssigned",
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
    properties: Schema.optional(
      Schema.Struct({
        uniqueId: Schema.optional(Schema.String),
        disableLocalAuth: Schema.optional(Schema.Boolean),
        provisioningState: Schema.optional(Schema.String),
        linkedResources: Schema.optional(
          Schema.Array(
            Schema.Struct({
              uniqueName: Schema.String,
              id: Schema.String,
            }),
          ),
        ),
        cors: Schema.optional(
          Schema.Struct({
            corsRules: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  allowedOrigins: Schema.Array(Schema.String),
                }),
              ),
            ),
          }),
        ),
        encryption: Schema.optional(
          Schema.Struct({
            infrastructureEncryption: Schema.optional(
              Schema.Literals(["enabled", "disabled"]),
            ),
            customerManagedKeyEncryption: Schema.optional(
              Schema.Struct({
                keyEncryptionKeyIdentity: Schema.optional(
                  Schema.Struct({
                    identityType: Schema.optional(
                      Schema.Literals([
                        "systemAssignedIdentity",
                        "userAssignedIdentity",
                        "delegatedResourceIdentity",
                      ]),
                    ),
                    userAssignedIdentityResourceId: Schema.optional(
                      Schema.String,
                    ),
                    delegatedIdentityClientId: Schema.optional(Schema.String),
                  }),
                ),
                keyEncryptionKeyUrl: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Maps/accounts/{accountName}",
      apiVersion: "2023-06-01",
    }),
  ) as unknown as Schema.Codec<AccountsCreateOrUpdateInput>;

// Output Schema
export interface AccountsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const AccountsCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AccountsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a Maps Account. A Maps Account holds the keys which allow access to the Maps REST APIs.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the Maps Account.
 */
export const AccountsCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: AccountsCreateOrUpdateInput,
  outputSchema: AccountsCreateOrUpdateOutput,
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
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Maps/accounts/{accountName}",
    apiVersion: "2023-06-01",
  }),
) as unknown as Schema.Codec<AccountsDeleteInput>;

// Output Schema
export type AccountsDeleteOutput = void;
export const AccountsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<AccountsDeleteOutput>;

// The operation
/**
 * Delete a Maps Account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the Maps Account.
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
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Maps/accounts/{accountName}",
    apiVersion: "2023-06-01",
  }),
) as unknown as Schema.Codec<AccountsGetInput>;

// Output Schema
export interface AccountsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const AccountsGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<AccountsGetOutput>;

// The operation
/**
 * Get a Maps Account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the Maps Account.
 */
export const AccountsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: AccountsGetInput,
  outputSchema: AccountsGetOutput,
}));
// Input Schema
export interface AccountsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const AccountsListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Maps/accounts",
      apiVersion: "2023-06-01",
    }),
  ) as unknown as Schema.Codec<AccountsListByResourceGroupInput>;

// Output Schema
export interface AccountsListByResourceGroupOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const AccountsListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<AccountsListByResourceGroupOutput>;

// The operation
/**
 * Get all Maps Accounts in a Resource Group
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
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
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Maps/accounts",
      apiVersion: "2023-06-01",
    }),
  ) as unknown as Schema.Codec<AccountsListBySubscriptionInput>;

// Output Schema
export interface AccountsListBySubscriptionOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const AccountsListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<AccountsListBySubscriptionOutput>;

// The operation
/**
 * Get all Maps Accounts in a Subscription
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const AccountsListBySubscription = /*@__PURE__*/ API.make(() => ({
  inputSchema: AccountsListBySubscriptionInput,
  outputSchema: AccountsListBySubscriptionOutput,
}));
// Input Schema
export interface AccountsListKeysInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const AccountsListKeysInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Maps/accounts/{accountName}/listKeys",
    apiVersion: "2023-06-01",
  }),
) as unknown as Schema.Codec<AccountsListKeysInput>;

// Output Schema
export interface AccountsListKeysOutput {
  primaryKeyLastUpdated?: string;
  primaryKey?: string;
  secondaryKey?: string;
  secondaryKeyLastUpdated?: string;
}
export const AccountsListKeysOutput = /*@__PURE__*/ Schema.Struct({
  primaryKeyLastUpdated: Schema.optional(Schema.String),
  primaryKey: Schema.optional(Schema.String),
  secondaryKey: Schema.optional(Schema.String),
  secondaryKeyLastUpdated: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<AccountsListKeysOutput>;

// The operation
/**
 * Get the keys to use with the Maps APIs. A key is used to authenticate and authorize access to the Maps REST APIs. Only one key is needed at a time; two are given to provide seamless key regeneration.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the Maps Account.
 */
export const AccountsListKeys = /*@__PURE__*/ API.make(() => ({
  inputSchema: AccountsListKeysInput,
  outputSchema: AccountsListKeysOutput,
}));
// Input Schema
export interface AccountsListSasInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  signingKey: "primaryKey" | "secondaryKey" | "managedIdentity";
  principalId: string;
  regions?: string[];
  maxRatePerSecond: number;
  start: string;
  expiry: string;
}
export const AccountsListSasInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  signingKey: Schema.Literals([
    "primaryKey",
    "secondaryKey",
    "managedIdentity",
  ]),
  principalId: Schema.String,
  regions: Schema.optional(Schema.Array(Schema.String)),
  maxRatePerSecond: Schema.Number,
  start: Schema.String,
  expiry: Schema.String,
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Maps/accounts/{accountName}/listSas",
    apiVersion: "2023-06-01",
  }),
) as unknown as Schema.Codec<AccountsListSasInput>;

// Output Schema
export interface AccountsListSasOutput {
  accountSasToken?: string;
}
export const AccountsListSasOutput = /*@__PURE__*/ Schema.Struct({
  accountSasToken: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<AccountsListSasOutput>;

// The operation
/**
 * Create and list an account shared access signature token. Use this SAS token for authentication to Azure Maps REST APIs through various Azure Maps SDKs. As prerequisite to create a SAS Token.
 * Prerequisites:
 * 1. Create or have an existing User Assigned Managed Identity in the same Azure region as the account.
 * 2. Create or update an Azure Map account with the same Azure region as the User Assigned Managed Identity is placed.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the Maps Account.
 */
export const AccountsListSas = /*@__PURE__*/ API.make(() => ({
  inputSchema: AccountsListSasInput,
  outputSchema: AccountsListSasOutput,
}));
// Input Schema
export interface AccountsRegenerateKeysInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  keyType: "primary" | "secondary";
}
export const AccountsRegenerateKeysInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    keyType: Schema.Literals(["primary", "secondary"]),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Maps/accounts/{accountName}/regenerateKey",
      apiVersion: "2023-06-01",
    }),
  ) as unknown as Schema.Codec<AccountsRegenerateKeysInput>;

// Output Schema
export interface AccountsRegenerateKeysOutput {
  primaryKeyLastUpdated?: string;
  primaryKey?: string;
  secondaryKey?: string;
  secondaryKeyLastUpdated?: string;
}
export const AccountsRegenerateKeysOutput =
  /*@__PURE__*/ Schema.Struct({
    primaryKeyLastUpdated: Schema.optional(Schema.String),
    primaryKey: Schema.optional(Schema.String),
    secondaryKey: Schema.optional(Schema.String),
    secondaryKeyLastUpdated: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AccountsRegenerateKeysOutput>;

// The operation
/**
 * Regenerate either the primary or secondary key for use with the Maps APIs. The old key will stop working immediately.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the Maps Account.
 */
export const AccountsRegenerateKeys = /*@__PURE__*/ API.make(() => ({
  inputSchema: AccountsRegenerateKeysInput,
  outputSchema: AccountsRegenerateKeysOutput,
}));
// Input Schema
export interface AccountsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  tags?: Record<string, string>;
  kind?: "Gen1" | "Gen2";
  sku?: { name: "S0" | "S1" | "G2"; tier?: string };
  identity?: {
    principalId?: string;
    tenantId?: string;
    type:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned, UserAssigned";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
  properties?: {
    uniqueId?: string;
    disableLocalAuth?: boolean;
    provisioningState?: string;
    linkedResources?: { uniqueName: string; id: string }[];
    cors?: { corsRules?: { allowedOrigins: string[] }[] };
    encryption?: {
      infrastructureEncryption?: "enabled" | "disabled";
      customerManagedKeyEncryption?: {
        keyEncryptionKeyIdentity?: {
          identityType?:
            | "systemAssignedIdentity"
            | "userAssignedIdentity"
            | "delegatedResourceIdentity";
          userAssignedIdentityResourceId?: string;
          delegatedIdentityClientId?: string;
        };
        keyEncryptionKeyUrl?: string;
      };
    };
  };
}
export const AccountsUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  kind: Schema.optional(Schema.Literals(["Gen1", "Gen2"])),
  sku: Schema.optional(
    Schema.Struct({
      name: Schema.Literals(["S0", "S1", "G2"]),
      tier: Schema.optional(Schema.String),
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
        "SystemAssigned, UserAssigned",
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
  properties: Schema.optional(
    Schema.Struct({
      uniqueId: Schema.optional(Schema.String),
      disableLocalAuth: Schema.optional(Schema.Boolean),
      provisioningState: Schema.optional(Schema.String),
      linkedResources: Schema.optional(
        Schema.Array(
          Schema.Struct({
            uniqueName: Schema.String,
            id: Schema.String,
          }),
        ),
      ),
      cors: Schema.optional(
        Schema.Struct({
          corsRules: Schema.optional(
            Schema.Array(
              Schema.Struct({
                allowedOrigins: Schema.Array(Schema.String),
              }),
            ),
          ),
        }),
      ),
      encryption: Schema.optional(
        Schema.Struct({
          infrastructureEncryption: Schema.optional(
            Schema.Literals(["enabled", "disabled"]),
          ),
          customerManagedKeyEncryption: Schema.optional(
            Schema.Struct({
              keyEncryptionKeyIdentity: Schema.optional(
                Schema.Struct({
                  identityType: Schema.optional(
                    Schema.Literals([
                      "systemAssignedIdentity",
                      "userAssignedIdentity",
                      "delegatedResourceIdentity",
                    ]),
                  ),
                  userAssignedIdentityResourceId: Schema.optional(
                    Schema.String,
                  ),
                  delegatedIdentityClientId: Schema.optional(Schema.String),
                }),
              ),
              keyEncryptionKeyUrl: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Maps/accounts/{accountName}",
    apiVersion: "2023-06-01",
  }),
) as unknown as Schema.Codec<AccountsUpdateInput>;

// Output Schema
export interface AccountsUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const AccountsUpdateOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<AccountsUpdateOutput>;

// The operation
/**
 * Updates a Maps Account. Only a subset of the parameters may be updated after creation, such as Sku, Tags, Properties.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the Maps Account.
 */
export const AccountsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: AccountsUpdateInput,
  outputSchema: AccountsUpdateOutput,
}));
// Input Schema
export interface CreatorsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  creatorName: string;
  properties: { provisioningState?: string; storageUnits: number };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  tags?: Record<string, string>;
  location: string;
}
export const CreatorsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    creatorName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      provisioningState: Schema.optional(Schema.String),
      storageUnits: Schema.Number,
    }),
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
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Maps/accounts/{accountName}/creators/{creatorName}",
      apiVersion: "2023-06-01",
    }),
  ) as unknown as Schema.Codec<CreatorsCreateOrUpdateInput>;

// Output Schema
export interface CreatorsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const CreatorsCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<CreatorsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a Maps Creator resource. Creator resource will manage Azure resources required to populate a custom set of mapping data. It requires an account to exist before it can be created.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the Maps Account.
 * @param creatorName - The name of the Maps Creator instance.
 */
export const CreatorsCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: CreatorsCreateOrUpdateInput,
  outputSchema: CreatorsCreateOrUpdateOutput,
}));
// Input Schema
export interface CreatorsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  creatorName: string;
}
export const CreatorsDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  creatorName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Maps/accounts/{accountName}/creators/{creatorName}",
    apiVersion: "2023-06-01",
  }),
) as unknown as Schema.Codec<CreatorsDeleteInput>;

// Output Schema
export type CreatorsDeleteOutput = void;
export const CreatorsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<CreatorsDeleteOutput>;

// The operation
/**
 * Delete a Maps Creator resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the Maps Account.
 * @param creatorName - The name of the Maps Creator instance.
 */
export const CreatorsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: CreatorsDeleteInput,
  outputSchema: CreatorsDeleteOutput,
}));
// Input Schema
export interface CreatorsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  creatorName: string;
}
export const CreatorsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  creatorName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Maps/accounts/{accountName}/creators/{creatorName}",
    apiVersion: "2023-06-01",
  }),
) as unknown as Schema.Codec<CreatorsGetInput>;

// Output Schema
export interface CreatorsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const CreatorsGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<CreatorsGetOutput>;

// The operation
/**
 * Get a Maps Creator resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the Maps Account.
 * @param creatorName - The name of the Maps Creator instance.
 */
export const CreatorsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: CreatorsGetInput,
  outputSchema: CreatorsGetOutput,
}));
// Input Schema
export interface CreatorsListByAccountInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const CreatorsListByAccountInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Maps/accounts/{accountName}/creators",
      apiVersion: "2023-06-01",
    }),
  ) as unknown as Schema.Codec<CreatorsListByAccountInput>;

// Output Schema
export interface CreatorsListByAccountOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const CreatorsListByAccountOutput =
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
  }) as unknown as Schema.Codec<CreatorsListByAccountOutput>;

// The operation
/**
 * Get all Creator instances for an Azure Maps Account
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the Maps Account.
 */
export const CreatorsListByAccount = /*@__PURE__*/ API.make(() => ({
  inputSchema: CreatorsListByAccountInput,
  outputSchema: CreatorsListByAccountOutput,
}));
// Input Schema
export interface CreatorsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  creatorName: string;
  tags?: Record<string, string>;
  properties?: { provisioningState?: string; storageUnits: number };
}
export const CreatorsUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  creatorName: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  properties: Schema.optional(
    Schema.Struct({
      provisioningState: Schema.optional(Schema.String),
      storageUnits: Schema.Number,
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Maps/accounts/{accountName}/creators/{creatorName}",
    apiVersion: "2023-06-01",
  }),
) as unknown as Schema.Codec<CreatorsUpdateInput>;

// Output Schema
export interface CreatorsUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const CreatorsUpdateOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<CreatorsUpdateOutput>;

// The operation
/**
 * Updates the Maps Creator resource. Only a subset of the parameters may be updated after creation, such as Tags.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the Maps Account.
 * @param creatorName - The name of the Maps Creator instance.
 */
export const CreatorsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: CreatorsUpdateInput,
  outputSchema: CreatorsUpdateOutput,
}));
// Input Schema
export interface MapsListOperationsInput {}
export const MapsListOperationsInput =
  /*@__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Maps/operations",
      apiVersion: "2023-06-01",
    }),
  ) as unknown as Schema.Codec<MapsListOperationsInput>;

// Output Schema
export interface MapsListOperationsOutput {
  value?: {
    name?: string;
    isDataAction?: boolean;
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
          dimensions?: {
            name?: string;
            displayName?: string;
            internalName?: string;
            internalMetricName?: string;
            sourceMdmNamespace?: string;
            toBeExportedToShoebox?: boolean;
          }[];
          aggregationType?: string;
          fillGapWithZero?: boolean;
          category?: string;
          resourceIdDimensionNameOverride?: string;
          sourceMdmAccount?: string;
          internalMetricName?: string;
          lockAggregationType?: string;
          sourceMdmNamespace?: string;
          supportedAggregationTypes?: string;
        }[];
      };
    };
  }[];
  nextLink?: string;
}
export const MapsListOperationsOutput =
  /*@__PURE__*/ Schema.Struct({
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
                        dimensions: Schema.optional(
                          Schema.Array(
                            Schema.Struct({
                              name: Schema.optional(Schema.String),
                              displayName: Schema.optional(Schema.String),
                              internalName: Schema.optional(Schema.String),
                              internalMetricName: Schema.optional(
                                Schema.String,
                              ),
                              sourceMdmNamespace: Schema.optional(
                                Schema.String,
                              ),
                              toBeExportedToShoebox: Schema.optional(
                                Schema.Boolean,
                              ),
                            }),
                          ),
                        ),
                        aggregationType: Schema.optional(Schema.String),
                        fillGapWithZero: Schema.optional(Schema.Boolean),
                        category: Schema.optional(Schema.String),
                        resourceIdDimensionNameOverride: Schema.optional(
                          Schema.String,
                        ),
                        sourceMdmAccount: Schema.optional(Schema.String),
                        internalMetricName: Schema.optional(Schema.String),
                        lockAggregationType: Schema.optional(Schema.String),
                        sourceMdmNamespace: Schema.optional(Schema.String),
                        supportedAggregationTypes: Schema.optional(
                          Schema.String,
                        ),
                      }),
                    ),
                  ),
                }),
              ),
            }),
          ),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<MapsListOperationsOutput>;

// The operation
/**
 * List operations available for the Maps Resource Provider
 *
 * @param api-version - The API version to use for this operation.
 */
export const MapsListOperations = /*@__PURE__*/ API.make(() => ({
  inputSchema: MapsListOperationsInput,
  outputSchema: MapsListOperationsOutput,
}));
// Input Schema
export interface MapsListSubscriptionOperationsInput {
  subscriptionId: string;
}
export const MapsListSubscriptionOperationsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Maps/operations",
      apiVersion: "2023-06-01",
    }),
  ) as unknown as Schema.Codec<MapsListSubscriptionOperationsInput>;

// Output Schema
export interface MapsListSubscriptionOperationsOutput {
  value?: {
    name?: string;
    isDataAction?: boolean;
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
          dimensions?: {
            name?: string;
            displayName?: string;
            internalName?: string;
            internalMetricName?: string;
            sourceMdmNamespace?: string;
            toBeExportedToShoebox?: boolean;
          }[];
          aggregationType?: string;
          fillGapWithZero?: boolean;
          category?: string;
          resourceIdDimensionNameOverride?: string;
          sourceMdmAccount?: string;
          internalMetricName?: string;
          lockAggregationType?: string;
          sourceMdmNamespace?: string;
          supportedAggregationTypes?: string;
        }[];
      };
    };
  }[];
  nextLink?: string;
}
export const MapsListSubscriptionOperationsOutput =
  /*@__PURE__*/ Schema.Struct({
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
                        dimensions: Schema.optional(
                          Schema.Array(
                            Schema.Struct({
                              name: Schema.optional(Schema.String),
                              displayName: Schema.optional(Schema.String),
                              internalName: Schema.optional(Schema.String),
                              internalMetricName: Schema.optional(
                                Schema.String,
                              ),
                              sourceMdmNamespace: Schema.optional(
                                Schema.String,
                              ),
                              toBeExportedToShoebox: Schema.optional(
                                Schema.Boolean,
                              ),
                            }),
                          ),
                        ),
                        aggregationType: Schema.optional(Schema.String),
                        fillGapWithZero: Schema.optional(Schema.Boolean),
                        category: Schema.optional(Schema.String),
                        resourceIdDimensionNameOverride: Schema.optional(
                          Schema.String,
                        ),
                        sourceMdmAccount: Schema.optional(Schema.String),
                        internalMetricName: Schema.optional(Schema.String),
                        lockAggregationType: Schema.optional(Schema.String),
                        sourceMdmNamespace: Schema.optional(Schema.String),
                        supportedAggregationTypes: Schema.optional(
                          Schema.String,
                        ),
                      }),
                    ),
                  ),
                }),
              ),
            }),
          ),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<MapsListSubscriptionOperationsOutput>;

// The operation
/**
 * List operations available for the Maps Resource Provider
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const MapsListSubscriptionOperations =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: MapsListSubscriptionOperationsInput,
    outputSchema: MapsListSubscriptionOperationsOutput,
  }));
