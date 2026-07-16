/**
 * Azure Vi API
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
export interface AccountsCheckNameAvailabilityInput {
  subscriptionId: string;
  name: string;
  type: "Microsoft.VideoIndexer/accounts";
}
export const AccountsCheckNameAvailabilityInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
    type: Schema.Literals(["Microsoft.VideoIndexer/accounts"]),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.VideoIndexer/checkNameAvailability",
      apiVersion: "2025-04-01",
    }),
  ) as unknown as Schema.Codec<AccountsCheckNameAvailabilityInput>;

// Output Schema
export interface AccountsCheckNameAvailabilityOutput {
  nameAvailable?: boolean;
  reason?: "AlreadyExists";
  message?: string;
}
export const AccountsCheckNameAvailabilityOutput =
  /*@__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.Literals(["AlreadyExists"])),
    message: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AccountsCheckNameAvailabilityOutput>;

// The operation
/**
 * Checks that the Video Indexer account name is valid and is not already in use.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param api-version - The API version to use for this operation.
 */
export const AccountsCheckNameAvailability =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AccountsCheckNameAvailabilityInput,
    outputSchema: AccountsCheckNameAvailabilityOutput,
  }));
// Input Schema
export interface AccountsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  properties?: {
    tenantId?: string;
    accountId?: string;
    accountName?: string;
    storageServices?: { resourceId?: string; userAssignedIdentity?: string };
    openAiServices?: { resourceId?: string; userAssignedIdentity?: string };
    totalSecondsIndexed?: number;
    totalMinutesIndexed?: number;
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
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Accepted"
      | "Provisioning"
      | "Deleting";
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
export const AccountsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        tenantId: Schema.optional(Schema.String),
        accountId: Schema.optional(Schema.String),
        accountName: Schema.optional(Schema.String),
        storageServices: Schema.optional(
          Schema.Struct({
            resourceId: Schema.optional(Schema.String),
            userAssignedIdentity: Schema.optional(Schema.String),
          }),
        ),
        openAiServices: Schema.optional(
          Schema.Struct({
            resourceId: Schema.optional(Schema.String),
            userAssignedIdentity: Schema.optional(Schema.String),
          }),
        ),
        totalSecondsIndexed: Schema.optional(Schema.Number),
        totalMinutesIndexed: Schema.optional(Schema.Number),
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
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Accepted",
            "Provisioning",
            "Deleting",
          ]),
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VideoIndexer/accounts/{accountName}",
      apiVersion: "2025-04-01",
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
  }) as unknown as Schema.Codec<AccountsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates an Azure Video Indexer account.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the Azure Video Indexer account.
 * @param api-version - The API version to use for this operation.
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
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VideoIndexer/accounts/{accountName}",
    apiVersion: "2025-04-01",
  }),
) as unknown as Schema.Codec<AccountsDeleteInput>;

// Output Schema
export type AccountsDeleteOutput = void;
export const AccountsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<AccountsDeleteOutput>;

// The operation
/**
 * Delete an Azure Video Indexer account.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the Azure Video Indexer account.
 * @param api-version - The API version to use for this operation.
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
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VideoIndexer/accounts/{accountName}",
    apiVersion: "2025-04-01",
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
 * Gets the properties of an Azure Video Indexer account.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the Azure Video Indexer account.
 * @param api-version - The API version to use for this operation.
 */
export const AccountsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: AccountsGetInput,
  outputSchema: AccountsGetOutput,
}));
// Input Schema
export interface AccountsListInput {
  subscriptionId: string;
}
export const AccountsListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.VideoIndexer/accounts",
    apiVersion: "2025-04-01",
  }),
) as unknown as Schema.Codec<AccountsListInput>;

// Output Schema
export interface AccountsListOutput {
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
export const AccountsListOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<AccountsListOutput>;

// The operation
/**
 * List all Azure Video Indexer accounts available under the subscription
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param api-version - The API version to use for this operation.
 */
export const AccountsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: AccountsListInput,
  outputSchema: AccountsListOutput,
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VideoIndexer/accounts",
      apiVersion: "2025-04-01",
    }),
  ) as unknown as Schema.Codec<AccountsListByResourceGroupInput>;

// Output Schema
export interface AccountsListByResourceGroupOutput {
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
export const AccountsListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<AccountsListByResourceGroupOutput>;

// The operation
/**
 * List all Azure Video Indexer accounts available under the resource group
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const AccountsListByResourceGroup = /*@__PURE__*/ API.make(() => ({
  inputSchema: AccountsListByResourceGroupInput,
  outputSchema: AccountsListByResourceGroupOutput,
}));
// Input Schema
export interface AccountsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  properties?: {
    tenantId?: string;
    accountId?: string;
    storageServices?: { userAssignedIdentity?: string };
    openAiServices?: { resourceId?: string; userAssignedIdentity?: string };
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
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Accepted"
      | "Provisioning"
      | "Deleting";
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
}
export const AccountsUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      tenantId: Schema.optional(Schema.String),
      accountId: Schema.optional(Schema.String),
      storageServices: Schema.optional(
        Schema.Struct({
          userAssignedIdentity: Schema.optional(Schema.String),
        }),
      ),
      openAiServices: Schema.optional(
        Schema.Struct({
          resourceId: Schema.optional(Schema.String),
          userAssignedIdentity: Schema.optional(Schema.String),
        }),
      ),
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
      provisioningState: Schema.optional(
        Schema.Literals([
          "Succeeded",
          "Failed",
          "Canceled",
          "Accepted",
          "Provisioning",
          "Deleting",
        ]),
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
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VideoIndexer/accounts/{accountName}",
    apiVersion: "2025-04-01",
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
 * Updates the properties of an existing Azure Video Indexer account.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the Azure Video Indexer account.
 * @param api-version - The API version to use for this operation.
 */
export const AccountsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: AccountsUpdateInput,
  outputSchema: AccountsUpdateOutput,
}));
// Input Schema
export interface GenerateAccessTokenInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  permissionType: "Contributor" | "Reader";
  scope: "Video" | "Account" | "Project";
  videoId?: string;
  projectId?: string;
}
export const GenerateAccessTokenInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    permissionType: Schema.Literals(["Contributor", "Reader"]),
    scope: Schema.Literals(["Video", "Account", "Project"]),
    videoId: Schema.optional(Schema.String),
    projectId: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VideoIndexer/accounts/{accountName}/generateAccessToken",
      apiVersion: "2025-04-01",
    }),
  ) as unknown as Schema.Codec<GenerateAccessTokenInput>;

// Output Schema
export interface GenerateAccessTokenOutput {
  accessToken?: Redacted.Redacted<string>;
}
export const GenerateAccessTokenOutput =
  /*@__PURE__*/ Schema.Struct({
    accessToken: Schema.optional(SensitiveOutputString),
  }) as unknown as Schema.Codec<GenerateAccessTokenOutput>;

// The operation
/**
 * Generate an Azure Video Indexer access token.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the Azure Video Indexer account.
 * @param api-version - The API version to use for this operation.
 */
export const GenerateAccessToken = /*@__PURE__*/ API.make(() => ({
  inputSchema: GenerateAccessTokenInput,
  outputSchema: GenerateAccessTokenOutput,
}));
// Input Schema
export interface GenerateExtensionAccessTokenInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  permissionType: "Contributor" | "Reader";
  scope: "Video" | "Account" | "Project";
  extensionId: string;
  videoId?: string;
  tokenLifetimeInSeconds?: number;
}
export const GenerateExtensionAccessTokenInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    permissionType: Schema.Literals(["Contributor", "Reader"]),
    scope: Schema.Literals(["Video", "Account", "Project"]),
    extensionId: Schema.String,
    videoId: Schema.optional(Schema.String),
    tokenLifetimeInSeconds: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VideoIndexer/accounts/{accountName}/generateExtensionAccessToken",
      apiVersion: "2025-04-01",
    }),
  ) as unknown as Schema.Codec<GenerateExtensionAccessTokenInput>;

// Output Schema
export interface GenerateExtensionAccessTokenOutput {
  accessToken?: Redacted.Redacted<string>;
}
export const GenerateExtensionAccessTokenOutput =
  /*@__PURE__*/ Schema.Struct({
    accessToken: Schema.optional(SensitiveOutputString),
  }) as unknown as Schema.Codec<GenerateExtensionAccessTokenOutput>;

// The operation
/**
 * Generate an Azure Video Indexer access token.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the Azure Video Indexer account.
 * @param api-version - The API version to use for this operation.
 */
export const GenerateExtensionAccessToken =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GenerateExtensionAccessTokenInput,
    outputSchema: GenerateExtensionAccessTokenOutput,
  }));
// Input Schema
export interface GenerateExtensionRestrictedViewerAccessTokenInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  scope: "Video" | "Account" | "Project";
  extensionId: string;
  videoId?: string;
  tokenLifetimeInSeconds?: number;
}
export const GenerateExtensionRestrictedViewerAccessTokenInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    scope: Schema.Literals(["Video", "Account", "Project"]),
    extensionId: Schema.String,
    videoId: Schema.optional(Schema.String),
    tokenLifetimeInSeconds: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VideoIndexer/accounts/{accountName}/generateExtensionRestrictedViewerAccessToken",
      apiVersion: "2025-04-01",
    }),
  ) as unknown as Schema.Codec<GenerateExtensionRestrictedViewerAccessTokenInput>;

// Output Schema
export interface GenerateExtensionRestrictedViewerAccessTokenOutput {
  accessToken?: Redacted.Redacted<string>;
}
export const GenerateExtensionRestrictedViewerAccessTokenOutput =
  /*@__PURE__*/ Schema.Struct({
    accessToken: Schema.optional(SensitiveOutputString),
  }) as unknown as Schema.Codec<GenerateExtensionRestrictedViewerAccessTokenOutput>;

// The operation
/**
 * Generate an Azure Video Indexer restricted viewer access token.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the Azure Video Indexer account.
 * @param api-version - The API version to use for this operation.
 */
export const GenerateExtensionRestrictedViewerAccessToken =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GenerateExtensionRestrictedViewerAccessTokenInput,
    outputSchema: GenerateExtensionRestrictedViewerAccessTokenOutput,
  }));
// Input Schema
export interface GenerateRestrictedViewerAccessTokenInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  scope: "Video" | "Account" | "Project";
  videoId?: string;
  projectId?: string;
}
export const GenerateRestrictedViewerAccessTokenInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    scope: Schema.Literals(["Video", "Account", "Project"]),
    videoId: Schema.optional(Schema.String),
    projectId: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VideoIndexer/accounts/{accountName}/generateRestrictedViewerAccessToken",
      apiVersion: "2025-04-01",
    }),
  ) as unknown as Schema.Codec<GenerateRestrictedViewerAccessTokenInput>;

// Output Schema
export interface GenerateRestrictedViewerAccessTokenOutput {
  accessToken?: Redacted.Redacted<string>;
}
export const GenerateRestrictedViewerAccessTokenOutput =
  /*@__PURE__*/ Schema.Struct({
    accessToken: Schema.optional(SensitiveOutputString),
  }) as unknown as Schema.Codec<GenerateRestrictedViewerAccessTokenOutput>;

// The operation
/**
 * Generate an Azure Video Indexer restricted viewer access token.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the Azure Video Indexer account.
 * @param api-version - The API version to use for this operation.
 */
export const GenerateRestrictedViewerAccessToken =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GenerateRestrictedViewerAccessTokenInput,
    outputSchema: GenerateRestrictedViewerAccessTokenOutput,
  }));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.VideoIndexer/operations",
    apiVersion: "2025-04-01",
  }),
) as unknown as Schema.Codec<OperationsListInput>;

// Output Schema
export interface OperationsListOutput {
  value?: {
    name?: string;
    isDataAction?: boolean;
    actionType?: string;
    display?: {
      provider?: string;
      resource?: string;
      operation?: string;
      description?: string;
    };
    origin?: string;
  }[];
  nextLink?: string;
}
export const OperationsListOutput = /*@__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        isDataAction: Schema.optional(Schema.Boolean),
        actionType: Schema.optional(Schema.String),
        display: Schema.optional(
          Schema.Struct({
            provider: Schema.optional(Schema.String),
            resource: Schema.optional(Schema.String),
            operation: Schema.optional(Schema.String),
            description: Schema.optional(Schema.String),
          }),
        ),
        origin: Schema.optional(Schema.String),
      }),
    ),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<OperationsListOutput>;

// The operation
/**
 * Lists all of the available Azure Video Indexer provider operations.
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ API.make(() => ({
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
    groupIds?: string[];
    privateEndpoint?: { id?: string };
    privateLinkServiceConnectionState: {
      status?: "Pending" | "Approved" | "Rejected";
      description?: string;
      actionsRequired?: string;
    };
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
    properties: Schema.optional(
      Schema.Struct({
        groupIds: Schema.optional(Schema.Array(Schema.String)),
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
        provisioningState: Schema.optional(
          Schema.Literals(["Succeeded", "Creating", "Deleting", "Failed"]),
        ),
      }),
    ),
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VideoIndexer/accounts/{accountName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2025-04-01",
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
 * Update the state of specified private endpoint connection associated with the Video Indexer account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the Azure Video Indexer account.
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource.
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VideoIndexer/accounts/{accountName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2025-04-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsDeleteInput>;

// Output Schema
export type PrivateEndpointConnectionsDeleteOutput = void;
export const PrivateEndpointConnectionsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<PrivateEndpointConnectionsDeleteOutput>;

// The operation
/**
 * Deletes the specified private endpoint connection associated with the Video Indexer account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the Azure Video Indexer account.
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource.
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VideoIndexer/accounts/{accountName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2025-04-01",
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
 * Get the specified private endpoint connection associated with the Video Indexer account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the Azure Video Indexer account.
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource.
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VideoIndexer/accounts/{accountName}/privateEndpointConnections",
      apiVersion: "2025-04-01",
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
  nextLink?: string;
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsListByAccountOutput>;

// The operation
/**
 * List all private endpoint connections in a Video Indexer account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the Azure Video Indexer account.
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VideoIndexer/accounts/{accountName}/privateLinkResources/{groupId}",
      apiVersion: "2025-04-01",
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
 * Get the private link resource with the specified group Id associated with the Video Indexer account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the Azure Video Indexer account.
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VideoIndexer/accounts/{accountName}/privateLinkResources",
      apiVersion: "2025-04-01",
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
 * List all private link resources in a Video Indexer account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of the Azure Video Indexer account.
 */
export const PrivateLinkResourcesListByAccount =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkResourcesListByAccountInput,
    outputSchema: PrivateLinkResourcesListByAccountOutput,
  }));
