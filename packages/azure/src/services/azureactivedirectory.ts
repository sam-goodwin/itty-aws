/**
 * Azure Azureactivedirectory API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface PrivateEndpointConnectionsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  policyName: string;
  privateEndpointConnectionName: string;
  properties?: {
    privateEndpoint?: { id?: string };
    privateLinkServiceConnectionState?: {
      status?: "Approved" | "Pending" | "Rejected" | "Disconnected";
      description?: string;
      actionsRequired?: string;
    };
    provisioningState?: "Succeeded" | "Provisioning" | "Failed";
    privateLinkConnectionTags?: { tags?: Record<string, string> };
  };
}
export const PrivateEndpointConnectionsCreateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    policyName: Schema.String.pipe(T.PathParam()),
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
            status: Schema.optional(
              Schema.Literals([
                "Approved",
                "Pending",
                "Rejected",
                "Disconnected",
              ]),
            ),
            description: Schema.optional(Schema.String),
            actionsRequired: Schema.optional(Schema.String),
          }),
        ),
        provisioningState: Schema.optional(
          Schema.Literals(["Succeeded", "Provisioning", "Failed"]),
        ),
        privateLinkConnectionTags: Schema.optional(
          Schema.Struct({
            tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.aadiam/privateLinkForAzureAd/{policyName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2020-03-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsCreateInput>;

// Output Schema
export interface PrivateEndpointConnectionsCreateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const PrivateEndpointConnectionsCreateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsCreateOutput>;

// The operation
/**
 * Creates specified private endpoint connection associated with the given policy.
 *
 * @param api-version - Version of the API to be used with the client request.
 * @param subscriptionId - Azure subscription ID.
 * @param resourceGroupName - Name of an Azure resource group.
 * @param policyName - The name of the private link policy in Azure AD.
 * @param privateEndpointConnectionName - The PrivateEndpointConnection name.
 */
export const PrivateEndpointConnectionsCreate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsCreateInput,
    outputSchema: PrivateEndpointConnectionsCreateOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsDeleteInput {
  resourceGroupName: string;
  policyName: string;
  privateEndpointConnectionName: string;
  subscriptionId: string;
}
export const PrivateEndpointConnectionsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    policyName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.aadiam/privateLinkForAzureAd/{policyName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2020-03-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsDeleteInput>;

// Output Schema
export type PrivateEndpointConnectionsDeleteOutput = void;
export const PrivateEndpointConnectionsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<PrivateEndpointConnectionsDeleteOutput>;

// The operation
/**
 * Deletes the specified private endpoint connection associated with the given policy.
 *
 * @param resourceGroupName - Name of an Azure resource group.
 * @param policyName - The name of the private link policy in Azure AD.
 * @param privateEndpointConnectionName - The PrivateEndpointConnection name.
 * @param api-version - Version of the API to be used with the client request.
 * @param subscriptionId - Azure subscription ID.
 */
export const PrivateEndpointConnectionsDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsDeleteInput,
    outputSchema: PrivateEndpointConnectionsDeleteOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsGetInput {
  resourceGroupName: string;
  policyName: string;
  privateEndpointConnectionName: string;
  subscriptionId: string;
}
export const PrivateEndpointConnectionsGetInput =
  /*@__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    policyName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.aadiam/privateLinkForAzureAd/{policyName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2020-03-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsGetInput>;

// Output Schema
export interface PrivateEndpointConnectionsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const PrivateEndpointConnectionsGetOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsGetOutput>;

// The operation
/**
 * Gets the specified private endpoint connection associated with the given policy.
 *
 * @param resourceGroupName - Name of an Azure resource group.
 * @param policyName - The name of the private link policy in Azure AD.
 * @param privateEndpointConnectionName - The PrivateEndpointConnection name.
 * @param api-version - Version of the API to be used with the client request.
 * @param subscriptionId - Azure subscription ID.
 */
export const PrivateEndpointConnectionsGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsGetInput,
    outputSchema: PrivateEndpointConnectionsGetOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsListByPolicyNameInput {
  resourceGroupName: string;
  policyName: string;
  subscriptionId: string;
}
export const PrivateEndpointConnectionsListByPolicyNameInput =
  /*@__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    policyName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.aadiam/privateLinkForAzureAd/{policyName}/privateEndpointConnections",
      apiVersion: "2020-03-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsListByPolicyNameInput>;

// Output Schema
export interface PrivateEndpointConnectionsListByPolicyNameOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const PrivateEndpointConnectionsListByPolicyNameOutput =
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
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsListByPolicyNameOutput>;

// The operation
/**
 * Lists all Private Endpoint Connections for the given policy.
 *
 * @param resourceGroupName - Name of an Azure resource group.
 * @param policyName - The name of the private link policy in Azure AD.
 * @param api-version - Version of the API to be used with the client request.
 * @param subscriptionId - Azure subscription ID.
 */
export const PrivateEndpointConnectionsListByPolicyName =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsListByPolicyNameInput,
    outputSchema: PrivateEndpointConnectionsListByPolicyNameOutput,
  }));
// Input Schema
export interface PrivateLinkForAzureAdCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  policyName: string;
  name?: string;
  ownerTenantId?: string;
  allTenants?: boolean;
  tenants?: string[];
  resourceName?: string;
  resourceGroup?: string;
  tags?: Record<string, string>;
  id?: string;
  type?: string;
}
export const PrivateLinkForAzureAdCreateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    policyName: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    ownerTenantId: Schema.optional(Schema.String),
    allTenants: Schema.optional(Schema.Boolean),
    tenants: Schema.optional(Schema.Array(Schema.String)),
    resourceName: Schema.optional(Schema.String),
    resourceGroup: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.aadiam/privateLinkForAzureAd/{policyName}",
      apiVersion: "2020-03-01",
    }),
  ) as unknown as Schema.Codec<PrivateLinkForAzureAdCreateInput>;

// Output Schema
export interface PrivateLinkForAzureAdCreateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const PrivateLinkForAzureAdCreateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PrivateLinkForAzureAdCreateOutput>;

// The operation
/**
 * Creates a private link policy.
 *
 * @param subscriptionId - Azure subscription ID.
 * @param resourceGroupName - Name of an Azure resource group.
 * @param policyName - The name of the private link policy in Azure AD.
 * @param api-version - Version of the API to be used with the client request.
 */
export const privateLinkForAzureAdCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: PrivateLinkForAzureAdCreateInput,
  outputSchema: PrivateLinkForAzureAdCreateOutput,
}));
// Input Schema
export interface PrivateLinkForAzureAdDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  policyName: string;
}
export const PrivateLinkForAzureAdDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    policyName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.aadiam/privateLinkForAzureAd/{policyName}",
      apiVersion: "2020-03-01",
    }),
  ) as unknown as Schema.Codec<PrivateLinkForAzureAdDeleteInput>;

// Output Schema
export type PrivateLinkForAzureAdDeleteOutput = void;
export const PrivateLinkForAzureAdDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<PrivateLinkForAzureAdDeleteOutput>;

// The operation
/**
 * Deletes a private link policy. When operation completes, status code 200 returned without content.
 *
 * @param subscriptionId - Azure subscription ID.
 * @param resourceGroupName - Name of an Azure resource group.
 * @param policyName - The name of the private link policy in Azure AD.
 * @param api-version - Version of the API to be used with the client request.
 */
export const privateLinkForAzureAdDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: PrivateLinkForAzureAdDeleteInput,
  outputSchema: PrivateLinkForAzureAdDeleteOutput,
}));
// Input Schema
export interface PrivateLinkForAzureAdGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  policyName: string;
}
export const PrivateLinkForAzureAdGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    policyName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.aadiam/privateLinkForAzureAd/{policyName}",
      apiVersion: "2020-03-01",
    }),
  ) as unknown as Schema.Codec<PrivateLinkForAzureAdGetInput>;

// Output Schema
export interface PrivateLinkForAzureAdGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const PrivateLinkForAzureAdGetOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PrivateLinkForAzureAdGetOutput>;

// The operation
/**
 * Gets a private link policy with a given name.
 *
 * @param subscriptionId - Azure subscription ID.
 * @param resourceGroupName - Name of an Azure resource group.
 * @param policyName - The name of the private link policy in Azure AD.
 * @param api-version - Version of the API to be used with the client request.
 */
export const privateLinkForAzureAdGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: PrivateLinkForAzureAdGetInput,
  outputSchema: PrivateLinkForAzureAdGetOutput,
}));
// Input Schema
export interface PrivateLinkForAzureAdListInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const PrivateLinkForAzureAdListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.aadiam/privateLinkForAzureAd",
      apiVersion: "2020-03-01",
    }),
  ) as unknown as Schema.Codec<PrivateLinkForAzureAdListInput>;

// Output Schema
export interface PrivateLinkForAzureAdListOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const PrivateLinkForAzureAdListOutput =
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
  }) as unknown as Schema.Codec<PrivateLinkForAzureAdListOutput>;

// The operation
/**
 * Operation to return the list of Private Link Policies For AzureAD scoped to the resourceGroup.
 *
 * @param subscriptionId - Azure subscription ID.
 * @param resourceGroupName - Name of an Azure resource group.
 * @param api-version - Version of the API to be used with the client request.
 */
export const privateLinkForAzureAdList = /*@__PURE__*/ API.make(() => ({
  inputSchema: PrivateLinkForAzureAdListInput,
  outputSchema: PrivateLinkForAzureAdListOutput,
}));
// Input Schema
export interface PrivateLinkForAzureAdListBySubscriptionInput {
  subscriptionId: string;
}
export const PrivateLinkForAzureAdListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/microsoft.aadiam/privateLinkForAzureAd",
      apiVersion: "2020-03-01",
    }),
  ) as unknown as Schema.Codec<PrivateLinkForAzureAdListBySubscriptionInput>;

// Output Schema
export interface PrivateLinkForAzureAdListBySubscriptionOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const PrivateLinkForAzureAdListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<PrivateLinkForAzureAdListBySubscriptionOutput>;

// The operation
/**
 * Lists all  Private Link Policies For AzureAD in the given subscription.
 *
 * @param subscriptionId - Azure subscription ID.
 * @param api-version - Version of the API to be used with the client request.
 */
export const privateLinkForAzureAdListBySubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkForAzureAdListBySubscriptionInput,
    outputSchema: PrivateLinkForAzureAdListBySubscriptionOutput,
  }));
// Input Schema
export interface PrivateLinkForAzureAdUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  policyName: string;
  tags?: Record<string, string>;
}
export const PrivateLinkForAzureAdUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    policyName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.aadiam/privateLinkForAzureAd/{policyName}",
      apiVersion: "2020-03-01",
    }),
  ) as unknown as Schema.Codec<PrivateLinkForAzureAdUpdateInput>;

// Output Schema
export interface PrivateLinkForAzureAdUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const PrivateLinkForAzureAdUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PrivateLinkForAzureAdUpdateOutput>;

// The operation
/**
 * Updates private link policy tags with specified values.
 *
 * @param subscriptionId - Azure subscription ID.
 * @param resourceGroupName - Name of an Azure resource group.
 * @param policyName - The name of the private link policy in Azure AD.
 * @param api-version - Version of the API to be used with the client request.
 */
export const privateLinkForAzureAdUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: PrivateLinkForAzureAdUpdateInput,
  outputSchema: PrivateLinkForAzureAdUpdateOutput,
}));
// Input Schema
export interface PrivateLinkResourcesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  policyName: string;
  groupName: string;
}
export const PrivateLinkResourcesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    policyName: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.aadiam/privateLinkForAzureAd/{policyName}/privateLinkResources/{groupName}",
      apiVersion: "2020-03-01",
    }),
  ) as unknown as Schema.Codec<PrivateLinkResourcesGetInput>;

// Output Schema
export interface PrivateLinkResourcesGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const PrivateLinkResourcesGetOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PrivateLinkResourcesGetOutput>;

// The operation
/**
 * Gets the private link resources that need to be created for a policy of AzureAD.
 *
 * @param subscriptionId - Azure subscription ID.
 * @param resourceGroupName - Name of an Azure resource group.
 * @param policyName - The name of the private link policy in Azure AD.
 * @param groupName - The name of the private link resource.
 * @param api-version - Version of the API to be used with the client request.
 */
export const PrivateLinkResourcesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: PrivateLinkResourcesGetInput,
  outputSchema: PrivateLinkResourcesGetOutput,
}));
// Input Schema
export interface PrivateLinkResourcesListByPrivateLinkPolicyInput {
  subscriptionId: string;
  resourceGroupName: string;
  policyName: string;
}
export const PrivateLinkResourcesListByPrivateLinkPolicyInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    policyName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.aadiam/privateLinkForAzureAd/{policyName}/privateLinkResources",
      apiVersion: "2020-03-01",
    }),
  ) as unknown as Schema.Codec<PrivateLinkResourcesListByPrivateLinkPolicyInput>;

// Output Schema
export interface PrivateLinkResourcesListByPrivateLinkPolicyOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const PrivateLinkResourcesListByPrivateLinkPolicyOutput =
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
  }) as unknown as Schema.Codec<PrivateLinkResourcesListByPrivateLinkPolicyOutput>;

// The operation
/**
 * Gets the private link resources that need to be created for a policy of AzureAD.
 *
 * @param subscriptionId - Azure subscription ID.
 * @param resourceGroupName - Name of an Azure resource group.
 * @param policyName - The name of the private link policy in Azure AD.
 * @param api-version - Version of the API to be used with the client request.
 */
export const PrivateLinkResourcesListByPrivateLinkPolicy =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkResourcesListByPrivateLinkPolicyInput,
    outputSchema: PrivateLinkResourcesListByPrivateLinkPolicyOutput,
  }));
