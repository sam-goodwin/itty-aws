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
export const ConnectedClusterCreateOrReplaceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
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
        Schema.Literals([
          "Connecting",
          "Connected",
          "Offline",
          "Expired",
          "AgentNotInstalled",
        ]),
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
          systemComponents: Schema.optional(
            Schema.Array(
              Schema.Struct({
                type: Schema.optional(Schema.String),
                userSpecifiedVersion: Schema.optional(Schema.String),
                majorVersion: Schema.optional(Schema.Number),
                currentVersion: Schema.optional(Schema.String),
              }),
            ),
          ),
          agentErrors: Schema.optional(
            Schema.Array(
              Schema.Struct({
                message: Schema.optional(Schema.String),
                severity: Schema.optional(Schema.String),
                component: Schema.optional(Schema.String),
                time: Schema.optional(Schema.String),
              }),
            ),
          ),
          agentState: Schema.optional(Schema.String),
        }),
      ),
      securityProfile: Schema.optional(
        Schema.Struct({
          workloadIdentity: Schema.optional(
            Schema.Struct({
              enabled: Schema.optional(Schema.Boolean),
            }),
          ),
        }),
      ),
      oidcIssuerProfile: Schema.optional(
        Schema.Struct({
          enabled: Schema.optional(Schema.Boolean),
          issuerUrl: Schema.optional(Schema.String),
          selfHostedIssuerUrl: Schema.optional(Schema.String),
        }),
      ),
      gateway: Schema.optional(
        Schema.Struct({
          enabled: Schema.optional(Schema.Boolean),
        }),
      ),
      arcAgentryConfigurations: Schema.optional(
        Schema.NullOr(
          Schema.Array(
            Schema.Struct({
              feature: Schema.optional(Schema.String),
              settings: Schema.optional(
                Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
              ),
              protectedSettings: Schema.optional(
                Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
              ),
            }),
          ),
        ),
      ),
      miscellaneousProperties: Schema.optional(
        Schema.Record(Schema.String, Schema.String),
      ),
    }),
    identity: Schema.Struct({
      principalId: Schema.optional(Schema.String),
      tenantId: Schema.optional(Schema.String),
      type: Schema.Literals(["None", "SystemAssigned"]),
    }),
    kind: Schema.optional(Schema.Literals(["ProvisionedCluster"])),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kubernetes/connectedClusters/{clusterName}",
      apiVersion: "2026-05-01",
    }),
  );
export type ConnectedClusterCreateOrReplaceInput =
  typeof ConnectedClusterCreateOrReplaceInput.Type;

// Output Schema
export const ConnectedClusterCreateOrReplaceOutput =
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
  });
export type ConnectedClusterCreateOrReplaceOutput =
  typeof ConnectedClusterCreateOrReplaceOutput.Type;

// The operation
/**
 * Register a new Kubernetes cluster with Azure Resource Manager.
 *
 * API to register a new Kubernetes cluster and create or replace a connected cluster tracked resource in Azure Resource Manager (ARM).
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Kubernetes cluster on which get is called.
 */
export const ConnectedClusterCreateOrReplace =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConnectedClusterCreateOrReplaceInput,
    outputSchema: ConnectedClusterCreateOrReplaceOutput,
  }));
// Input Schema
export const ConnectedClusterDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kubernetes/connectedClusters/{clusterName}",
      apiVersion: "2026-05-01",
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
 * @param clusterName - The name of the Kubernetes cluster on which get is called.
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
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kubernetes/connectedClusters/{clusterName}",
      apiVersion: "2026-05-01",
    }),
  );
export type ConnectedClusterGetInput = typeof ConnectedClusterGetInput.Type;

// Output Schema
export const ConnectedClusterGetOutput =
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
 * @param clusterName - The name of the Kubernetes cluster on which get is called.
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kubernetes/connectedClusters",
      apiVersion: "2026-05-01",
    }),
  );
export type ConnectedClusterListByResourceGroupInput =
  typeof ConnectedClusterListByResourceGroupInput.Type;

// Output Schema
export const ConnectedClusterListByResourceGroupOutput =
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
  });
export type ConnectedClusterListByResourceGroupOutput =
  typeof ConnectedClusterListByResourceGroupOutput.Type;

// The operation
/**
 * Lists all connected clusters in the given Resource Group
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
      apiVersion: "2026-05-01",
    }),
  );
export type ConnectedClusterListBySubscriptionInput =
  typeof ConnectedClusterListBySubscriptionInput.Type;

// Output Schema
export const ConnectedClusterListBySubscriptionOutput =
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
  });
export type ConnectedClusterListBySubscriptionOutput =
  typeof ConnectedClusterListBySubscriptionOutput.Type;

// The operation
/**
 * Lists all connected clusters in the given Subscription
 *
 * API to enumerate registered connected K8s clusters under a Subscription
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
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
    clusterName: Schema.String.pipe(T.PathParam()),
    authenticationMethod: Schema.Literals(["Token", "AAD"]),
    clientProxy: Schema.Boolean,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kubernetes/connectedClusters/{clusterName}/listClusterUserCredential",
      apiVersion: "2026-05-01",
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
        relayTid: Schema.optional(Schema.String),
        relayType: Schema.optional(Schema.String),
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
 * @param clusterName - The name of the Kubernetes cluster on which get is called.
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
    clusterName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(
      Schema.Struct({
        distribution: Schema.optional(Schema.String),
        distributionVersion: Schema.optional(Schema.String),
        azureHybridBenefit: Schema.optional(
          Schema.Literals(["True", "False", "NotApplicable"]),
        ),
        gateway: Schema.optional(
          Schema.Struct({
            enabled: Schema.optional(Schema.Boolean),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kubernetes/connectedClusters/{clusterName}",
      apiVersion: "2026-05-01",
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
 * @param clusterName - The name of the Kubernetes cluster on which get is called.
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
    apiVersion: "2026-05-01",
  }),
);
export type OperationsGetInput = typeof OperationsGetInput.Type;

// Output Schema
export const OperationsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.Array(
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
  nextLink: Schema.optional(Schema.String),
});
export type OperationsGetOutput = typeof OperationsGetOutput.Type;

// The operation
/**
 * List the operations for the provider
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsGetInput,
  outputSchema: OperationsGetOutput,
}));
