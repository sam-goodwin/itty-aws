/**
 * Azure Hybridkubernetes API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const ConnectedClusterCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    identity: Schema.Struct({
      principalId: Schema.optional(Schema.String),
      tenantId: Schema.optional(Schema.String),
      type: Schema.Literals(["None", "SystemAssigned"]),
    }),
    kind: Schema.optional(Schema.Literals(["ProvisionedCluster"])),
    properties: Schema.Struct({
      agentPublicKeyCertificate: Schema.String,
      kubernetesVersion: Schema.optional(Schema.String),
      totalNodeCount: Schema.optional(Schema.Number),
      totalCoreCount: Schema.optional(Schema.Number),
      agentVersion: Schema.optional(Schema.String),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Succeeded",
          "Failed",
          "Canceled",
          "Provisioning",
          "Updating",
          "Deleting",
          "Accepted",
        ]),
      ),
      distribution: Schema.optional(Schema.String),
      distributionVersion: Schema.optional(Schema.String),
      infrastructure: Schema.optional(Schema.String),
      offering: Schema.optional(Schema.String),
      managedIdentityCertificateExpirationTime: Schema.optional(Schema.String),
      lastConnectivityTime: Schema.optional(Schema.String),
      connectivityStatus: Schema.optional(
        Schema.Literals(["Connecting", "Connected", "Offline", "Expired"]),
      ),
      privateLinkState: Schema.optional(
        Schema.Literals(["Enabled", "Disabled"]),
      ),
      privateLinkScopeResourceId: Schema.optional(Schema.String),
      azureHybridBenefit: Schema.optional(
        Schema.Literals(["True", "False", "NotApplicable"]),
      ),
      aadProfile: Schema.optional(
        Schema.Struct({
          enableAzureRBAC: Schema.optional(Schema.Boolean),
          adminGroupObjectIDs: Schema.optional(Schema.Array(Schema.String)),
          tenantID: Schema.optional(Schema.String),
        }),
      ),
      arcAgentProfile: Schema.optional(
        Schema.Struct({
          desiredAgentVersion: Schema.optional(Schema.String),
          agentAutoUpgrade: Schema.optional(
            Schema.Literals(["Enabled", "Disabled"]),
          ),
        }),
      ),
      miscellaneousProperties: Schema.optional(
        Schema.Record(Schema.String, Schema.String),
      ),
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
      path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Kubernetes/connectedClusters/{clusterName}",
      apiVersion: "2024-01-01",
    }),
  );
export type ConnectedClusterCreateInput =
  typeof ConnectedClusterCreateInput.Type;

// Output Schema
export const ConnectedClusterCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  });
export type ConnectedClusterCreateOutput =
  typeof ConnectedClusterCreateOutput.Type;

// The operation
/**
 * Register a new Kubernetes cluster with Azure Resource Manager.
 *
 * API to register a new Kubernetes cluster and create a tracked resource in Azure Resource Manager (ARM).
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ConnectedClusterCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ConnectedClusterCreateInput,
    outputSchema: ConnectedClusterCreateOutput,
  }),
);
// Input Schema
export const ConnectedClusterDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Kubernetes/connectedClusters/{clusterName}",
      apiVersion: "2024-01-01",
    }),
  );
export type ConnectedClusterDeleteInput =
  typeof ConnectedClusterDeleteInput.Type;

// Output Schema
export const ConnectedClusterDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ConnectedClusterDeleteOutput =
  typeof ConnectedClusterDeleteOutput.Type;

// The operation
/**
 * Delete a connected cluster.
 *
 * Delete a connected cluster, removing the tracked resource in Azure Resource Manager (ARM).
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ConnectedClusterDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ConnectedClusterDeleteInput,
    outputSchema: ConnectedClusterDeleteOutput,
  }),
);
// Input Schema
export const ConnectedClusterGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Kubernetes/connectedClusters/{clusterName}",
      apiVersion: "2024-01-01",
    }),
  );
export type ConnectedClusterGetInput = typeof ConnectedClusterGetInput.Type;

// Output Schema
export const ConnectedClusterGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  });
export type ConnectedClusterGetOutput = typeof ConnectedClusterGetOutput.Type;

// The operation
/**
 * Get the properties of the specified connected cluster.
 *
 * Returns the properties of the specified connected cluster, including name, identity, properties, and additional cluster details.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ConnectedClusterGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ConnectedClusterGetInput,
  outputSchema: ConnectedClusterGetOutput,
}));
// Input Schema
export const ConnectedClusterListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Kubernetes/connectedClusters",
      apiVersion: "2024-01-01",
    }),
  );
export type ConnectedClusterListByResourceGroupInput =
  typeof ConnectedClusterListByResourceGroupInput.Type;

// Output Schema
export const ConnectedClusterListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type ConnectedClusterListByResourceGroupOutput =
  typeof ConnectedClusterListByResourceGroupOutput.Type;

// The operation
/**
 * Lists all connected clusters
 *
 * API to enumerate registered connected K8s clusters under a Resource Group
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ConnectedClusterListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConnectedClusterListByResourceGroupInput,
    outputSchema: ConnectedClusterListByResourceGroupOutput,
  }));
// Input Schema
export const ConnectedClusterListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Kubernetes/connectedClusters",
      apiVersion: "2024-01-01",
    }),
  );
export type ConnectedClusterListBySubscriptionInput =
  typeof ConnectedClusterListBySubscriptionInput.Type;

// Output Schema
export const ConnectedClusterListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type ConnectedClusterListBySubscriptionOutput =
  typeof ConnectedClusterListBySubscriptionOutput.Type;

// The operation
/**
 * Lists all connected clusters
 *
 * API to enumerate registered connected K8s clusters under a Subscription
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param api-version - The API version to use for this operation.
 */
export const ConnectedClusterListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConnectedClusterListBySubscriptionInput,
    outputSchema: ConnectedClusterListBySubscriptionOutput,
  }));
// Input Schema
export const ConnectedClusterListClusterUserCredentialInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    authenticationMethod: Schema.Literals(["Token", "AAD"]),
    clientProxy: Schema.Boolean,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Kubernetes/connectedClusters/{clusterName}/listClusterUserCredential",
      apiVersion: "2024-01-01",
    }),
  );
export type ConnectedClusterListClusterUserCredentialInput =
  typeof ConnectedClusterListClusterUserCredentialInput.Type;

// Output Schema
export const ConnectedClusterListClusterUserCredentialOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hybridConnectionConfig: Schema.optional(
      Schema.Struct({
        expirationTime: Schema.optional(Schema.Number),
        hybridConnectionName: Schema.optional(Schema.String),
        relay: Schema.optional(Schema.String),
        token: Schema.optional(Schema.String),
      }),
    ),
    kubeconfigs: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.optional(Schema.String),
          value: Schema.optional(Schema.String),
        }),
      ),
    ),
  });
export type ConnectedClusterListClusterUserCredentialOutput =
  typeof ConnectedClusterListClusterUserCredentialOutput.Type;

// The operation
/**
 * Gets cluster user credentials of a connected cluster
 *
 * Gets cluster user credentials of the connected cluster with a specified resource group and name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ConnectedClusterListClusterUserCredential =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConnectedClusterListClusterUserCredentialInput,
    outputSchema: ConnectedClusterListClusterUserCredentialOutput,
  }));
// Input Schema
export const ConnectedClusterUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(
      Schema.Struct({
        distribution: Schema.optional(Schema.String),
        distributionVersion: Schema.optional(Schema.String),
        azureHybridBenefit: Schema.optional(
          Schema.Literals(["True", "False", "NotApplicable"]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Kubernetes/connectedClusters/{clusterName}",
      apiVersion: "2024-01-01",
    }),
  );
export type ConnectedClusterUpdateInput =
  typeof ConnectedClusterUpdateInput.Type;

// Output Schema
export const ConnectedClusterUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  });
export type ConnectedClusterUpdateOutput =
  typeof ConnectedClusterUpdateOutput.Type;

// The operation
/**
 * Updates a connected cluster.
 *
 * API to update certain properties of the connected cluster resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ConnectedClusterUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ConnectedClusterUpdateInput,
    outputSchema: ConnectedClusterUpdateOutput,
  }),
);
// Input Schema
export const OperationsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Kubernetes/operations",
    apiVersion: "2024-01-01",
  }),
);
export type OperationsGetInput = typeof OperationsGetInput.Type;

// Output Schema
export const OperationsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(
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
      }),
    ),
  ),
  nextLink: Schema.optional(Schema.String),
});
export type OperationsGetOutput = typeof OperationsGetOutput.Type;

// The operation
/**
 * Lists all of the available API operations for Connected Cluster resource.
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsGetInput,
  outputSchema: OperationsGetOutput,
}));
