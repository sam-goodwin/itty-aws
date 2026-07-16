/**
 * Azure Msi API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface FederatedIdentityCredentialsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  federatedIdentityCredentialResourceName: string;
  properties?: { issuer: string; subject: string; audiences: string[] };
}
export const FederatedIdentityCredentialsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    federatedIdentityCredentialResourceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        issuer: Schema.String,
        subject: Schema.String,
        audiences: Schema.Array(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{resourceName}/federatedIdentityCredentials/{federatedIdentityCredentialResourceName}",
      apiVersion: "2024-11-30",
    }),
  ) as unknown as Schema.Codec<FederatedIdentityCredentialsCreateOrUpdateInput>;

// Output Schema
export interface FederatedIdentityCredentialsCreateOrUpdateOutput {
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
export const FederatedIdentityCredentialsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<FederatedIdentityCredentialsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a federated identity credential under the specified user assigned identity.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the identity resource.
 * @param federatedIdentityCredentialResourceName - The name of the federated identity credential resource.
 */
export const FederatedIdentityCredentialsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: FederatedIdentityCredentialsCreateOrUpdateInput,
    outputSchema: FederatedIdentityCredentialsCreateOrUpdateOutput,
  }));
// Input Schema
export interface FederatedIdentityCredentialsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  federatedIdentityCredentialResourceName: string;
}
export const FederatedIdentityCredentialsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    federatedIdentityCredentialResourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{resourceName}/federatedIdentityCredentials/{federatedIdentityCredentialResourceName}",
      apiVersion: "2024-11-30",
    }),
  ) as unknown as Schema.Codec<FederatedIdentityCredentialsDeleteInput>;

// Output Schema
export type FederatedIdentityCredentialsDeleteOutput = void;
export const FederatedIdentityCredentialsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<FederatedIdentityCredentialsDeleteOutput>;

// The operation
/**
 * Deletes the federated identity credential.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the identity resource.
 * @param federatedIdentityCredentialResourceName - The name of the federated identity credential resource.
 */
export const FederatedIdentityCredentialsDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: FederatedIdentityCredentialsDeleteInput,
    outputSchema: FederatedIdentityCredentialsDeleteOutput,
  }));
// Input Schema
export interface FederatedIdentityCredentialsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  federatedIdentityCredentialResourceName: string;
}
export const FederatedIdentityCredentialsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    federatedIdentityCredentialResourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{resourceName}/federatedIdentityCredentials/{federatedIdentityCredentialResourceName}",
      apiVersion: "2024-11-30",
    }),
  ) as unknown as Schema.Codec<FederatedIdentityCredentialsGetInput>;

// Output Schema
export interface FederatedIdentityCredentialsGetOutput {
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
export const FederatedIdentityCredentialsGetOutput =
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
  }) as unknown as Schema.Codec<FederatedIdentityCredentialsGetOutput>;

// The operation
/**
 * Gets the federated identity credential.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the identity resource.
 * @param federatedIdentityCredentialResourceName - The name of the federated identity credential resource.
 */
export const FederatedIdentityCredentialsGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: FederatedIdentityCredentialsGetInput,
    outputSchema: FederatedIdentityCredentialsGetOutput,
  }));
// Input Schema
export interface FederatedIdentityCredentialsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  $top?: number;
  $skiptoken?: string;
}
export const FederatedIdentityCredentialsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $skiptoken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{resourceName}/federatedIdentityCredentials",
      apiVersion: "2024-11-30",
    }),
  ) as unknown as Schema.Codec<FederatedIdentityCredentialsListInput>;

// Output Schema
export interface FederatedIdentityCredentialsListOutput {
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
export const FederatedIdentityCredentialsListOutput =
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
  }) as unknown as Schema.Codec<FederatedIdentityCredentialsListOutput>;

// The operation
/**
 * Lists all the federated identity credentials under the specified user assigned identity.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the identity resource.
 * @param $top - Number of records to return.
 * @param $skiptoken - A skip token is used to continue retrieving items after an operation returns a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skipToken parameter that specifies a starting point to use for subsequent calls.
 */
export const FederatedIdentityCredentialsList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: FederatedIdentityCredentialsListInput,
    outputSchema: FederatedIdentityCredentialsListOutput,
  }));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.ManagedIdentity/operations",
    apiVersion: "2024-11-30",
  }),
) as unknown as Schema.Codec<OperationsListInput>;

// Output Schema
export interface OperationsListOutput {
  value: {
    name?: string;
    display?: {
      provider?: string;
      operation?: string;
      resource?: string;
      description?: string;
    };
  }[];
  nextLink?: string;
}
export const OperationsListOutput = /*@__PURE__*/ Schema.Struct({
  value: Schema.Array(
    Schema.Struct({
      name: Schema.optional(Schema.String),
      display: Schema.optional(
        Schema.Struct({
          provider: Schema.optional(Schema.String),
          operation: Schema.optional(Schema.String),
          resource: Schema.optional(Schema.String),
          description: Schema.optional(Schema.String),
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
export const OperationsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface SystemAssignedIdentitiesGetByScopeInput {
  scope: string;
}
export const SystemAssignedIdentitiesGetByScopeInput =
  /*@__PURE__*/ Schema.Struct({
    scope: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{scope}/providers/Microsoft.ManagedIdentity/identities/default",
      apiVersion: "2024-11-30",
    }),
  ) as unknown as Schema.Codec<SystemAssignedIdentitiesGetByScopeInput>;

// Output Schema
export interface SystemAssignedIdentitiesGetByScopeOutput {
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
export const SystemAssignedIdentitiesGetByScopeOutput =
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
  }) as unknown as Schema.Codec<SystemAssignedIdentitiesGetByScopeOutput>;

// The operation
/**
 * Gets the systemAssignedIdentity available under the specified RP scope.
 *
 * @param api-version - The API version to use for this operation.
 * @param scope - The fully qualified Azure Resource manager identifier of the resource.
 */
export const SystemAssignedIdentitiesGetByScope =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SystemAssignedIdentitiesGetByScopeInput,
    outputSchema: SystemAssignedIdentitiesGetByScopeOutput,
  }));
// Input Schema
export interface UserAssignedIdentitiesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  properties?: {
    tenantId?: string;
    principalId?: string;
    clientId?: string;
    isolationScope?: "None" | "Regional";
  };
  tags?: Record<string, string>;
  location: string;
}
export const UserAssignedIdentitiesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        tenantId: Schema.optional(Schema.String),
        principalId: Schema.optional(Schema.String),
        clientId: Schema.optional(Schema.String),
        isolationScope: Schema.optional(Schema.Literals(["None", "Regional"])),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{resourceName}",
      apiVersion: "2024-11-30",
    }),
  ) as unknown as Schema.Codec<UserAssignedIdentitiesCreateOrUpdateInput>;

// Output Schema
export interface UserAssignedIdentitiesCreateOrUpdateOutput {
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
export const UserAssignedIdentitiesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<UserAssignedIdentitiesCreateOrUpdateOutput>;

// The operation
/**
 * Create or update an identity in the specified subscription and resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the identity resource.
 */
export const UserAssignedIdentitiesCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: UserAssignedIdentitiesCreateOrUpdateInput,
    outputSchema: UserAssignedIdentitiesCreateOrUpdateOutput,
  }));
// Input Schema
export interface UserAssignedIdentitiesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const UserAssignedIdentitiesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{resourceName}",
      apiVersion: "2024-11-30",
    }),
  ) as unknown as Schema.Codec<UserAssignedIdentitiesDeleteInput>;

// Output Schema
export type UserAssignedIdentitiesDeleteOutput = void;
export const UserAssignedIdentitiesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<UserAssignedIdentitiesDeleteOutput>;

// The operation
/**
 * Deletes the identity.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the identity resource.
 */
export const UserAssignedIdentitiesDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: UserAssignedIdentitiesDeleteInput,
    outputSchema: UserAssignedIdentitiesDeleteOutput,
  }));
// Input Schema
export interface UserAssignedIdentitiesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const UserAssignedIdentitiesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{resourceName}",
      apiVersion: "2024-11-30",
    }),
  ) as unknown as Schema.Codec<UserAssignedIdentitiesGetInput>;

// Output Schema
export interface UserAssignedIdentitiesGetOutput {
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
export const UserAssignedIdentitiesGetOutput =
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
  }) as unknown as Schema.Codec<UserAssignedIdentitiesGetOutput>;

// The operation
/**
 * Gets the identity.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the identity resource.
 */
export const UserAssignedIdentitiesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: UserAssignedIdentitiesGetInput,
  outputSchema: UserAssignedIdentitiesGetOutput,
}));
// Input Schema
export interface UserAssignedIdentitiesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const UserAssignedIdentitiesListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities",
      apiVersion: "2024-11-30",
    }),
  ) as unknown as Schema.Codec<UserAssignedIdentitiesListByResourceGroupInput>;

// Output Schema
export interface UserAssignedIdentitiesListByResourceGroupOutput {
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
export const UserAssignedIdentitiesListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<UserAssignedIdentitiesListByResourceGroupOutput>;

// The operation
/**
 * Lists all the userAssignedIdentities available under the specified ResourceGroup.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const UserAssignedIdentitiesListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: UserAssignedIdentitiesListByResourceGroupInput,
    outputSchema: UserAssignedIdentitiesListByResourceGroupOutput,
  }));
// Input Schema
export interface UserAssignedIdentitiesListBySubscriptionInput {
  subscriptionId: string;
}
export const UserAssignedIdentitiesListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ManagedIdentity/userAssignedIdentities",
      apiVersion: "2024-11-30",
    }),
  ) as unknown as Schema.Codec<UserAssignedIdentitiesListBySubscriptionInput>;

// Output Schema
export interface UserAssignedIdentitiesListBySubscriptionOutput {
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
export const UserAssignedIdentitiesListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<UserAssignedIdentitiesListBySubscriptionOutput>;

// The operation
/**
 * Lists all the userAssignedIdentities available under the specified subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const UserAssignedIdentitiesListBySubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: UserAssignedIdentitiesListBySubscriptionInput,
    outputSchema: UserAssignedIdentitiesListBySubscriptionOutput,
  }));
// Input Schema
export interface UserAssignedIdentitiesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  location?: string;
  tags?: Record<string, string>;
  properties?: {
    tenantId?: string;
    principalId?: string;
    clientId?: string;
    isolationScope?: "None" | "Regional";
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
export const UserAssignedIdentitiesUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(
      Schema.Struct({
        tenantId: Schema.optional(Schema.String),
        principalId: Schema.optional(Schema.String),
        clientId: Schema.optional(Schema.String),
        isolationScope: Schema.optional(Schema.Literals(["None", "Regional"])),
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
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{resourceName}",
      apiVersion: "2024-11-30",
    }),
  ) as unknown as Schema.Codec<UserAssignedIdentitiesUpdateInput>;

// Output Schema
export interface UserAssignedIdentitiesUpdateOutput {
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
export const UserAssignedIdentitiesUpdateOutput =
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
  }) as unknown as Schema.Codec<UserAssignedIdentitiesUpdateOutput>;

// The operation
/**
 * Update an identity in the specified subscription and resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param resourceName - The name of the identity resource.
 */
export const UserAssignedIdentitiesUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: UserAssignedIdentitiesUpdateInput,
    outputSchema: UserAssignedIdentitiesUpdateOutput,
  }));
