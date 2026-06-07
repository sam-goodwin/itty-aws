/**
 * Azure Kubernetesconfiguration API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveNullableString } from "../sensitive.ts";

// Input Schema
export const ExtensionsCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterRp: Schema.String.pipe(T.PathParam()),
  clusterResourceName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      extensionType: Schema.optional(Schema.String),
      autoUpgradeMinorVersion: Schema.optional(Schema.Boolean),
      releaseTrain: Schema.optional(Schema.String),
      version: Schema.optional(Schema.NullOr(Schema.String)),
      scope: Schema.optional(
        Schema.Struct({
          cluster: Schema.optional(
            Schema.Struct({
              releaseNamespace: Schema.optional(Schema.String),
            }),
          ),
          namespace: Schema.optional(
            Schema.Struct({
              targetNamespace: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
      configurationSettings: Schema.optional(
        Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
      ),
      configurationProtectedSettings: Schema.optional(
        Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
      ),
      currentVersion: Schema.optional(Schema.NullOr(Schema.String)),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Succeeded",
          "Failed",
          "Canceled",
          "Creating",
          "Updating",
          "Deleting",
        ]),
      ),
      statuses: Schema.optional(
        Schema.NullOr(
          Schema.Array(
            Schema.Struct({
              code: Schema.optional(Schema.String),
              displayStatus: Schema.optional(Schema.String),
              level: Schema.optional(
                Schema.Literals(["Error", "Warning", "Information"]),
              ),
              message: Schema.optional(Schema.String),
              time: Schema.optional(Schema.String),
            }),
          ),
        ),
      ),
      errorInfo: Schema.optional(
        Schema.Struct({
          code: Schema.optional(Schema.String),
          message: Schema.optional(Schema.String),
          target: Schema.optional(Schema.String),
          details: Schema.optional(
            Schema.Array(
              Schema.Struct({
                code: Schema.optional(Schema.String),
                message: Schema.optional(Schema.String),
                target: Schema.optional(Schema.String),
                details: Schema.optional(Schema.Array(Schema.Unknown)),
                additionalInfo: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      type: Schema.optional(Schema.String),
                      info: Schema.optional(Schema.Unknown),
                    }),
                  ),
                ),
              }),
            ),
          ),
          additionalInfo: Schema.optional(
            Schema.Array(
              Schema.Struct({
                type: Schema.optional(Schema.String),
                info: Schema.optional(Schema.Unknown),
              }),
            ),
          ),
        }),
      ),
      customLocationSettings: Schema.optional(
        Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
      ),
      packageUri: Schema.optional(Schema.NullOr(Schema.String)),
      aksAssignedIdentity: Schema.optional(
        Schema.NullOr(
          Schema.Struct({
            principalId: Schema.optional(Schema.String),
            tenantId: Schema.optional(Schema.String),
            type: Schema.optional(
              Schema.Literals(["SystemAssigned", "UserAssigned"]),
            ),
          }),
        ),
      ),
      isSystemExtension: Schema.optional(Schema.Boolean),
    }),
  ),
  identity: Schema.optional(
    Schema.Struct({
      principalId: Schema.optional(Schema.String),
      tenantId: Schema.optional(Schema.String),
      type: Schema.optional(Schema.Literals(["SystemAssigned"])),
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
  plan: Schema.optional(
    Schema.Struct({
      name: Schema.String,
      publisher: Schema.String,
      product: Schema.String,
      promotionCode: Schema.optional(Schema.String),
      version: Schema.optional(Schema.String),
    }),
  ),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{clusterRp}/{clusterResourceName}/{clusterName}/providers/Microsoft.KubernetesConfiguration/extensions/{extensionName}",
    apiVersion: "2023-05-01",
  }),
);
export type ExtensionsCreateInput = typeof ExtensionsCreateInput.Type;

// Output Schema
export const ExtensionsCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  },
);
export type ExtensionsCreateOutput = typeof ExtensionsCreateOutput.Type;

// The operation
/**
 * Create a new Kubernetes Cluster Extension.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterRp - The Kubernetes cluster RP - i.e. Microsoft.ContainerService, Microsoft.Kubernetes, Microsoft.HybridContainerService.
 * @param clusterResourceName - The Kubernetes cluster resource name - i.e. managedClusters, connectedClusters, provisionedClusters.
 * @param clusterName - The name of the kubernetes cluster.
 * @param api-version - The API version to use for this operation.
 */
export const ExtensionsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ExtensionsCreateInput,
  outputSchema: ExtensionsCreateOutput,
}));
// Input Schema
export const ExtensionsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterRp: Schema.String.pipe(T.PathParam()),
  clusterResourceName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  forceDelete: Schema.optional(Schema.Boolean),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{clusterRp}/{clusterResourceName}/{clusterName}/providers/Microsoft.KubernetesConfiguration/extensions/{extensionName}",
    apiVersion: "2023-05-01",
  }),
);
export type ExtensionsDeleteInput = typeof ExtensionsDeleteInput.Type;

// Output Schema
export const ExtensionsDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ExtensionsDeleteOutput = typeof ExtensionsDeleteOutput.Type;

// The operation
/**
 * Delete a Kubernetes Cluster Extension. This will cause the Agent to Uninstall the extension from the cluster.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterRp - The Kubernetes cluster RP - i.e. Microsoft.ContainerService, Microsoft.Kubernetes, Microsoft.HybridContainerService.
 * @param clusterResourceName - The Kubernetes cluster resource name - i.e. managedClusters, connectedClusters, provisionedClusters.
 * @param clusterName - The name of the kubernetes cluster.
 * @param api-version - The API version to use for this operation.
 * @param forceDelete - Delete the extension resource in Azure - not the normal asynchronous delete.
 */
export const ExtensionsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ExtensionsDeleteInput,
  outputSchema: ExtensionsDeleteOutput,
}));
// Input Schema
export const ExtensionsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterRp: Schema.String.pipe(T.PathParam()),
  clusterResourceName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{clusterRp}/{clusterResourceName}/{clusterName}/providers/Microsoft.KubernetesConfiguration/extensions/{extensionName}",
    apiVersion: "2023-05-01",
  }),
);
export type ExtensionsGetInput = typeof ExtensionsGetInput.Type;

// Output Schema
export const ExtensionsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
});
export type ExtensionsGetOutput = typeof ExtensionsGetOutput.Type;

// The operation
/**
 * Gets Kubernetes Cluster Extension.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterRp - The Kubernetes cluster RP - i.e. Microsoft.ContainerService, Microsoft.Kubernetes, Microsoft.HybridContainerService.
 * @param clusterResourceName - The Kubernetes cluster resource name - i.e. managedClusters, connectedClusters, provisionedClusters.
 * @param clusterName - The name of the kubernetes cluster.
 * @param api-version - The API version to use for this operation.
 */
export const ExtensionsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ExtensionsGetInput,
  outputSchema: ExtensionsGetOutput,
}));
// Input Schema
export const ExtensionsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterRp: Schema.String.pipe(T.PathParam()),
  clusterResourceName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{clusterRp}/{clusterResourceName}/{clusterName}/providers/Microsoft.KubernetesConfiguration/extensions",
    apiVersion: "2023-05-01",
  }),
);
export type ExtensionsListInput = typeof ExtensionsListInput.Type;

// Output Schema
export const ExtensionsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type ExtensionsListOutput = typeof ExtensionsListOutput.Type;

// The operation
/**
 * List all Extensions in the cluster.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterRp - The Kubernetes cluster RP - i.e. Microsoft.ContainerService, Microsoft.Kubernetes, Microsoft.HybridContainerService.
 * @param clusterResourceName - The Kubernetes cluster resource name - i.e. managedClusters, connectedClusters, provisionedClusters.
 * @param clusterName - The name of the kubernetes cluster.
 * @param api-version - The API version to use for this operation.
 */
export const ExtensionsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ExtensionsListInput,
  outputSchema: ExtensionsListOutput,
}));
// Input Schema
export const ExtensionsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterRp: Schema.String.pipe(T.PathParam()),
  clusterResourceName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      autoUpgradeMinorVersion: Schema.optional(Schema.Boolean),
      releaseTrain: Schema.optional(Schema.String),
      version: Schema.optional(Schema.NullOr(Schema.String)),
      configurationSettings: Schema.optional(
        Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
      ),
      configurationProtectedSettings: Schema.optional(
        Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
      ),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{clusterRp}/{clusterResourceName}/{clusterName}/providers/Microsoft.KubernetesConfiguration/extensions/{extensionName}",
    apiVersion: "2023-05-01",
  }),
);
export type ExtensionsUpdateInput = typeof ExtensionsUpdateInput.Type;

// Output Schema
export const ExtensionsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  },
);
export type ExtensionsUpdateOutput = typeof ExtensionsUpdateOutput.Type;

// The operation
/**
 * Patch an existing Kubernetes Cluster Extension.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterRp - The Kubernetes cluster RP - i.e. Microsoft.ContainerService, Microsoft.Kubernetes, Microsoft.HybridContainerService.
 * @param clusterResourceName - The Kubernetes cluster resource name - i.e. managedClusters, connectedClusters, provisionedClusters.
 * @param clusterName - The name of the kubernetes cluster.
 * @param api-version - The API version to use for this operation.
 */
export const ExtensionsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ExtensionsUpdateInput,
  outputSchema: ExtensionsUpdateOutput,
}));
// Input Schema
export const FluxConfigOperationStatusGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterRp: Schema.String.pipe(T.PathParam()),
    clusterResourceName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    operationId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{clusterRp}/{clusterResourceName}/{clusterName}/providers/Microsoft.KubernetesConfiguration/fluxConfigurations/{fluxConfigurationName}/operations/{operationId}",
      apiVersion: "2023-05-01",
    }),
  );
export type FluxConfigOperationStatusGetInput =
  typeof FluxConfigOperationStatusGetInput.Type;

// Output Schema
export const FluxConfigOperationStatusGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.String,
    properties: Schema.optional(
      Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
    ),
    error: Schema.optional(
      Schema.Struct({
        code: Schema.optional(Schema.String),
        message: Schema.optional(Schema.String),
        target: Schema.optional(Schema.String),
        details: Schema.optional(
          Schema.Array(
            Schema.Struct({
              code: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              target: Schema.optional(Schema.String),
              details: Schema.optional(Schema.Array(Schema.Unknown)),
              additionalInfo: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    type: Schema.optional(Schema.String),
                    info: Schema.optional(Schema.Unknown),
                  }),
                ),
              ),
            }),
          ),
        ),
        additionalInfo: Schema.optional(
          Schema.Array(
            Schema.Struct({
              type: Schema.optional(Schema.String),
              info: Schema.optional(Schema.Unknown),
            }),
          ),
        ),
      }),
    ),
  });
export type FluxConfigOperationStatusGetOutput =
  typeof FluxConfigOperationStatusGetOutput.Type;

// The operation
/**
 * Get Async Operation status
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterRp - The Kubernetes cluster RP - i.e. Microsoft.ContainerService, Microsoft.Kubernetes, Microsoft.HybridContainerService.
 * @param clusterResourceName - The Kubernetes cluster resource name - i.e. managedClusters, connectedClusters, provisionedClusters.
 * @param clusterName - The name of the kubernetes cluster.
 * @param api-version - The API version to use for this operation.
 * @param operationId - operation Id
 */
export const FluxConfigOperationStatusGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: FluxConfigOperationStatusGetInput,
    outputSchema: FluxConfigOperationStatusGetOutput,
  }));
// Input Schema
export const FluxConfigurationsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterRp: Schema.String.pipe(T.PathParam()),
    clusterResourceName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        scope: Schema.optional(Schema.Literals(["cluster", "namespace"])),
        namespace: Schema.optional(Schema.String),
        sourceKind: Schema.optional(
          Schema.Literals(["GitRepository", "Bucket", "AzureBlob"]),
        ),
        suspend: Schema.optional(Schema.Boolean),
        gitRepository: Schema.optional(
          Schema.NullOr(
            Schema.Struct({
              url: Schema.optional(Schema.NullOr(Schema.String)),
              timeoutInSeconds: Schema.optional(Schema.NullOr(Schema.Number)),
              syncIntervalInSeconds: Schema.optional(
                Schema.NullOr(Schema.Number),
              ),
              repositoryRef: Schema.optional(
                Schema.NullOr(
                  Schema.Struct({
                    branch: Schema.optional(Schema.NullOr(Schema.String)),
                    tag: Schema.optional(Schema.NullOr(Schema.String)),
                    semver: Schema.optional(Schema.NullOr(Schema.String)),
                    commit: Schema.optional(Schema.NullOr(Schema.String)),
                  }),
                ),
              ),
              sshKnownHosts: Schema.optional(Schema.NullOr(Schema.String)),
              httpsUser: Schema.optional(Schema.NullOr(Schema.String)),
              httpsCACert: Schema.optional(Schema.NullOr(Schema.String)),
              localAuthRef: Schema.optional(Schema.NullOr(Schema.String)),
            }),
          ),
        ),
        bucket: Schema.optional(
          Schema.NullOr(
            Schema.Struct({
              url: Schema.optional(Schema.String),
              bucketName: Schema.optional(Schema.String),
              insecure: Schema.optional(Schema.Boolean),
              timeoutInSeconds: Schema.optional(Schema.NullOr(Schema.Number)),
              syncIntervalInSeconds: Schema.optional(
                Schema.NullOr(Schema.Number),
              ),
              accessKey: Schema.optional(Schema.NullOr(Schema.String)),
              localAuthRef: Schema.optional(Schema.NullOr(Schema.String)),
            }),
          ),
        ),
        azureBlob: Schema.optional(
          Schema.NullOr(
            Schema.Struct({
              url: Schema.optional(Schema.NullOr(Schema.String)),
              containerName: Schema.optional(Schema.NullOr(Schema.String)),
              timeoutInSeconds: Schema.optional(Schema.NullOr(Schema.Number)),
              syncIntervalInSeconds: Schema.optional(
                Schema.NullOr(Schema.Number),
              ),
              servicePrincipal: Schema.optional(
                Schema.NullOr(
                  Schema.Struct({
                    clientId: Schema.optional(Schema.NullOr(Schema.String)),
                    tenantId: Schema.optional(Schema.NullOr(Schema.String)),
                    clientSecret: Schema.optional(SensitiveNullableString),
                    clientCertificate: Schema.optional(
                      Schema.NullOr(Schema.String),
                    ),
                    clientCertificatePassword: Schema.optional(
                      SensitiveNullableString,
                    ),
                    clientCertificateSendChain: Schema.optional(Schema.Boolean),
                  }),
                ),
              ),
              accountKey: Schema.optional(Schema.NullOr(Schema.String)),
              sasToken: Schema.optional(Schema.NullOr(Schema.String)),
              managedIdentity: Schema.optional(
                Schema.NullOr(
                  Schema.Struct({
                    clientId: Schema.optional(Schema.NullOr(Schema.String)),
                  }),
                ),
              ),
              localAuthRef: Schema.optional(Schema.NullOr(Schema.String)),
            }),
          ),
        ),
        kustomizations: Schema.optional(
          Schema.NullOr(
            Schema.Record(
              Schema.String,
              Schema.NullOr(
                Schema.Struct({
                  name: Schema.optional(Schema.String),
                  path: Schema.optional(Schema.String),
                  dependsOn: Schema.optional(
                    Schema.NullOr(Schema.Array(Schema.String)),
                  ),
                  timeoutInSeconds: Schema.optional(
                    Schema.NullOr(Schema.Number),
                  ),
                  syncIntervalInSeconds: Schema.optional(
                    Schema.NullOr(Schema.Number),
                  ),
                  retryIntervalInSeconds: Schema.optional(
                    Schema.NullOr(Schema.Number),
                  ),
                  prune: Schema.optional(Schema.Boolean),
                  force: Schema.optional(Schema.Boolean),
                  wait: Schema.optional(Schema.Boolean),
                  postBuild: Schema.optional(
                    Schema.NullOr(
                      Schema.Struct({
                        substitute: Schema.optional(
                          Schema.NullOr(
                            Schema.Record(Schema.String, Schema.String),
                          ),
                        ),
                        substituteFrom: Schema.optional(
                          Schema.NullOr(
                            Schema.Array(
                              Schema.NullOr(
                                Schema.Struct({
                                  kind: Schema.optional(Schema.String),
                                  name: Schema.optional(Schema.String),
                                  optional: Schema.optional(Schema.Boolean),
                                }),
                              ),
                            ),
                          ),
                        ),
                      }),
                    ),
                  ),
                }),
              ),
            ),
          ),
        ),
        configurationProtectedSettings: Schema.optional(
          Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
        ),
        statuses: Schema.optional(
          Schema.NullOr(
            Schema.Array(
              Schema.NullOr(
                Schema.Struct({
                  name: Schema.optional(Schema.String),
                  namespace: Schema.optional(Schema.String),
                  kind: Schema.optional(Schema.String),
                  complianceState: Schema.optional(
                    Schema.Literals([
                      "Compliant",
                      "Non-Compliant",
                      "Pending",
                      "Suspended",
                      "Unknown",
                    ]),
                  ),
                  appliedBy: Schema.optional(
                    Schema.NullOr(
                      Schema.Struct({
                        name: Schema.optional(Schema.String),
                        namespace: Schema.optional(Schema.String),
                      }),
                    ),
                  ),
                  statusConditions: Schema.optional(
                    Schema.NullOr(
                      Schema.Array(
                        Schema.Struct({
                          lastTransitionTime: Schema.optional(Schema.String),
                          message: Schema.optional(Schema.String),
                          reason: Schema.optional(Schema.String),
                          status: Schema.optional(Schema.String),
                          type: Schema.optional(Schema.String),
                        }),
                      ),
                    ),
                  ),
                  helmReleaseProperties: Schema.optional(
                    Schema.NullOr(
                      Schema.Struct({
                        lastRevisionApplied: Schema.optional(
                          Schema.NullOr(Schema.Number),
                        ),
                        helmChartRef: Schema.optional(
                          Schema.NullOr(
                            Schema.Struct({
                              name: Schema.optional(Schema.String),
                              namespace: Schema.optional(Schema.String),
                            }),
                          ),
                        ),
                        failureCount: Schema.optional(
                          Schema.NullOr(Schema.Number),
                        ),
                        installFailureCount: Schema.optional(
                          Schema.NullOr(Schema.Number),
                        ),
                        upgradeFailureCount: Schema.optional(
                          Schema.NullOr(Schema.Number),
                        ),
                      }),
                    ),
                  ),
                }),
              ),
            ),
          ),
        ),
        repositoryPublicKey: Schema.optional(Schema.NullOr(Schema.String)),
        sourceSyncedCommitId: Schema.optional(Schema.NullOr(Schema.String)),
        sourceUpdatedAt: Schema.optional(Schema.NullOr(Schema.String)),
        statusUpdatedAt: Schema.optional(Schema.NullOr(Schema.String)),
        waitForReconciliation: Schema.optional(Schema.NullOr(Schema.Boolean)),
        reconciliationWaitDuration: Schema.optional(
          Schema.NullOr(Schema.String),
        ),
        complianceState: Schema.optional(
          Schema.Literals([
            "Compliant",
            "Non-Compliant",
            "Pending",
            "Suspended",
            "Unknown",
          ]),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Creating",
            "Updating",
            "Deleting",
          ]),
        ),
        errorMessage: Schema.optional(Schema.NullOr(Schema.String)),
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
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{clusterRp}/{clusterResourceName}/{clusterName}/providers/Microsoft.KubernetesConfiguration/fluxConfigurations/{fluxConfigurationName}",
      apiVersion: "2023-05-01",
    }),
  );
export type FluxConfigurationsCreateOrUpdateInput =
  typeof FluxConfigurationsCreateOrUpdateInput.Type;

// Output Schema
export const FluxConfigurationsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  });
export type FluxConfigurationsCreateOrUpdateOutput =
  typeof FluxConfigurationsCreateOrUpdateOutput.Type;

// The operation
/**
 * Create a new Kubernetes Flux Configuration.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterRp - The Kubernetes cluster RP - i.e. Microsoft.ContainerService, Microsoft.Kubernetes, Microsoft.HybridContainerService.
 * @param clusterResourceName - The Kubernetes cluster resource name - i.e. managedClusters, connectedClusters, provisionedClusters.
 * @param clusterName - The name of the kubernetes cluster.
 * @param api-version - The API version to use for this operation.
 */
export const FluxConfigurationsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: FluxConfigurationsCreateOrUpdateInput,
    outputSchema: FluxConfigurationsCreateOrUpdateOutput,
  }));
// Input Schema
export const FluxConfigurationsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterRp: Schema.String.pipe(T.PathParam()),
    clusterResourceName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    forceDelete: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{clusterRp}/{clusterResourceName}/{clusterName}/providers/Microsoft.KubernetesConfiguration/fluxConfigurations/{fluxConfigurationName}",
      apiVersion: "2023-05-01",
    }),
  );
export type FluxConfigurationsDeleteInput =
  typeof FluxConfigurationsDeleteInput.Type;

// Output Schema
export const FluxConfigurationsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type FluxConfigurationsDeleteOutput =
  typeof FluxConfigurationsDeleteOutput.Type;

// The operation
/**
 * This will delete the YAML file used to set up the Flux Configuration, thus stopping future sync from the source repo.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterRp - The Kubernetes cluster RP - i.e. Microsoft.ContainerService, Microsoft.Kubernetes, Microsoft.HybridContainerService.
 * @param clusterResourceName - The Kubernetes cluster resource name - i.e. managedClusters, connectedClusters, provisionedClusters.
 * @param clusterName - The name of the kubernetes cluster.
 * @param api-version - The API version to use for this operation.
 * @param forceDelete - Delete the extension resource in Azure - not the normal asynchronous delete.
 */
export const FluxConfigurationsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: FluxConfigurationsDeleteInput,
    outputSchema: FluxConfigurationsDeleteOutput,
  }),
);
// Input Schema
export const FluxConfigurationsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterRp: Schema.String.pipe(T.PathParam()),
    clusterResourceName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{clusterRp}/{clusterResourceName}/{clusterName}/providers/Microsoft.KubernetesConfiguration/fluxConfigurations/{fluxConfigurationName}",
      apiVersion: "2023-05-01",
    }),
  );
export type FluxConfigurationsGetInput = typeof FluxConfigurationsGetInput.Type;

// Output Schema
export const FluxConfigurationsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  });
export type FluxConfigurationsGetOutput =
  typeof FluxConfigurationsGetOutput.Type;

// The operation
/**
 * Gets details of the Flux Configuration.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterRp - The Kubernetes cluster RP - i.e. Microsoft.ContainerService, Microsoft.Kubernetes, Microsoft.HybridContainerService.
 * @param clusterResourceName - The Kubernetes cluster resource name - i.e. managedClusters, connectedClusters, provisionedClusters.
 * @param clusterName - The name of the kubernetes cluster.
 * @param api-version - The API version to use for this operation.
 */
export const FluxConfigurationsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: FluxConfigurationsGetInput,
    outputSchema: FluxConfigurationsGetOutput,
  }),
);
// Input Schema
export const FluxConfigurationsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterRp: Schema.String.pipe(T.PathParam()),
    clusterResourceName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{clusterRp}/{clusterResourceName}/{clusterName}/providers/Microsoft.KubernetesConfiguration/fluxConfigurations",
      apiVersion: "2023-05-01",
    }),
  );
export type FluxConfigurationsListInput =
  typeof FluxConfigurationsListInput.Type;

// Output Schema
export const FluxConfigurationsListOutput =
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
export type FluxConfigurationsListOutput =
  typeof FluxConfigurationsListOutput.Type;

// The operation
/**
 * List all Flux Configurations.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterRp - The Kubernetes cluster RP - i.e. Microsoft.ContainerService, Microsoft.Kubernetes, Microsoft.HybridContainerService.
 * @param clusterResourceName - The Kubernetes cluster resource name - i.e. managedClusters, connectedClusters, provisionedClusters.
 * @param clusterName - The name of the kubernetes cluster.
 * @param api-version - The API version to use for this operation.
 */
export const FluxConfigurationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: FluxConfigurationsListInput,
    outputSchema: FluxConfigurationsListOutput,
  }),
);
// Input Schema
export const FluxConfigurationsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterRp: Schema.String.pipe(T.PathParam()),
    clusterResourceName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        sourceKind: Schema.optional(
          Schema.Literals(["GitRepository", "Bucket", "AzureBlob"]),
        ),
        suspend: Schema.optional(Schema.NullOr(Schema.Boolean)),
        gitRepository: Schema.optional(
          Schema.NullOr(
            Schema.Struct({
              url: Schema.optional(Schema.NullOr(Schema.String)),
              timeoutInSeconds: Schema.optional(Schema.NullOr(Schema.Number)),
              syncIntervalInSeconds: Schema.optional(
                Schema.NullOr(Schema.Number),
              ),
              repositoryRef: Schema.optional(
                Schema.NullOr(
                  Schema.Struct({
                    branch: Schema.optional(Schema.NullOr(Schema.String)),
                    tag: Schema.optional(Schema.NullOr(Schema.String)),
                    semver: Schema.optional(Schema.NullOr(Schema.String)),
                    commit: Schema.optional(Schema.NullOr(Schema.String)),
                  }),
                ),
              ),
              sshKnownHosts: Schema.optional(Schema.NullOr(Schema.String)),
              httpsUser: Schema.optional(Schema.NullOr(Schema.String)),
              httpsCACert: Schema.optional(Schema.NullOr(Schema.String)),
              localAuthRef: Schema.optional(Schema.NullOr(Schema.String)),
            }),
          ),
        ),
        bucket: Schema.optional(
          Schema.NullOr(
            Schema.Struct({
              url: Schema.optional(Schema.NullOr(Schema.String)),
              bucketName: Schema.optional(Schema.NullOr(Schema.String)),
              insecure: Schema.optional(Schema.NullOr(Schema.Boolean)),
              timeoutInSeconds: Schema.optional(Schema.NullOr(Schema.Number)),
              syncIntervalInSeconds: Schema.optional(
                Schema.NullOr(Schema.Number),
              ),
              accessKey: Schema.optional(Schema.NullOr(Schema.String)),
              localAuthRef: Schema.optional(Schema.NullOr(Schema.String)),
            }),
          ),
        ),
        azureBlob: Schema.optional(
          Schema.NullOr(
            Schema.Struct({
              url: Schema.optional(Schema.NullOr(Schema.String)),
              containerName: Schema.optional(Schema.NullOr(Schema.String)),
              timeoutInSeconds: Schema.optional(Schema.NullOr(Schema.Number)),
              syncIntervalInSeconds: Schema.optional(
                Schema.NullOr(Schema.Number),
              ),
              servicePrincipal: Schema.optional(
                Schema.NullOr(
                  Schema.Struct({
                    clientId: Schema.optional(Schema.NullOr(Schema.String)),
                    tenantId: Schema.optional(Schema.NullOr(Schema.String)),
                    clientSecret: Schema.optional(SensitiveNullableString),
                    clientCertificate: Schema.optional(
                      Schema.NullOr(Schema.String),
                    ),
                    clientCertificatePassword: Schema.optional(
                      SensitiveNullableString,
                    ),
                    clientCertificateSendChain: Schema.optional(Schema.Boolean),
                  }),
                ),
              ),
              accountKey: Schema.optional(Schema.NullOr(Schema.String)),
              sasToken: Schema.optional(Schema.NullOr(Schema.String)),
              managedIdentity: Schema.optional(
                Schema.NullOr(
                  Schema.Struct({
                    clientId: Schema.optional(Schema.NullOr(Schema.String)),
                  }),
                ),
              ),
              localAuthRef: Schema.optional(Schema.NullOr(Schema.String)),
            }),
          ),
        ),
        kustomizations: Schema.optional(
          Schema.NullOr(
            Schema.Record(
              Schema.String,
              Schema.NullOr(
                Schema.Struct({
                  path: Schema.optional(Schema.NullOr(Schema.String)),
                  dependsOn: Schema.optional(
                    Schema.NullOr(Schema.Array(Schema.String)),
                  ),
                  timeoutInSeconds: Schema.optional(
                    Schema.NullOr(Schema.Number),
                  ),
                  syncIntervalInSeconds: Schema.optional(
                    Schema.NullOr(Schema.Number),
                  ),
                  retryIntervalInSeconds: Schema.optional(
                    Schema.NullOr(Schema.Number),
                  ),
                  prune: Schema.optional(Schema.NullOr(Schema.Boolean)),
                  force: Schema.optional(Schema.NullOr(Schema.Boolean)),
                  wait: Schema.optional(Schema.NullOr(Schema.Boolean)),
                  postBuild: Schema.optional(
                    Schema.NullOr(
                      Schema.Struct({
                        substitute: Schema.optional(
                          Schema.NullOr(
                            Schema.Record(Schema.String, Schema.String),
                          ),
                        ),
                        substituteFrom: Schema.optional(
                          Schema.NullOr(
                            Schema.Array(
                              Schema.NullOr(
                                Schema.Struct({
                                  kind: Schema.optional(Schema.String),
                                  name: Schema.optional(Schema.String),
                                  optional: Schema.optional(Schema.Boolean),
                                }),
                              ),
                            ),
                          ),
                        ),
                      }),
                    ),
                  ),
                }),
              ),
            ),
          ),
        ),
        configurationProtectedSettings: Schema.optional(
          Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{clusterRp}/{clusterResourceName}/{clusterName}/providers/Microsoft.KubernetesConfiguration/fluxConfigurations/{fluxConfigurationName}",
      apiVersion: "2023-05-01",
    }),
  );
export type FluxConfigurationsUpdateInput =
  typeof FluxConfigurationsUpdateInput.Type;

// Output Schema
export const FluxConfigurationsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  });
export type FluxConfigurationsUpdateOutput =
  typeof FluxConfigurationsUpdateOutput.Type;

// The operation
/**
 * Update an existing Kubernetes Flux Configuration.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterRp - The Kubernetes cluster RP - i.e. Microsoft.ContainerService, Microsoft.Kubernetes, Microsoft.HybridContainerService.
 * @param clusterResourceName - The Kubernetes cluster resource name - i.e. managedClusters, connectedClusters, provisionedClusters.
 * @param clusterName - The name of the kubernetes cluster.
 * @param api-version - The API version to use for this operation.
 */
export const FluxConfigurationsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: FluxConfigurationsUpdateInput,
    outputSchema: FluxConfigurationsUpdateOutput,
  }),
);
// Input Schema
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.KubernetesConfiguration/operations",
    apiVersion: "2023-05-01",
  }),
);
export type OperationsListInput = typeof OperationsListInput.Type;

// Output Schema
export const OperationsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
        isDataAction: Schema.optional(Schema.Boolean),
        origin: Schema.optional(Schema.String),
      }),
    ),
  ),
  nextLink: Schema.optional(Schema.String),
});
export type OperationsListOutput = typeof OperationsListOutput.Type;

// The operation
/**
 * List all the available operations the KubernetesConfiguration resource provider supports.
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export const OperationStatusGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterRp: Schema.String.pipe(T.PathParam()),
    clusterResourceName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    operationId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{clusterRp}/{clusterResourceName}/{clusterName}/providers/Microsoft.KubernetesConfiguration/extensions/{extensionName}/operations/{operationId}",
      apiVersion: "2023-05-01",
    }),
  );
export type OperationStatusGetInput = typeof OperationStatusGetInput.Type;

// Output Schema
export const OperationStatusGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.String,
    properties: Schema.optional(
      Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
    ),
    error: Schema.optional(
      Schema.Struct({
        code: Schema.optional(Schema.String),
        message: Schema.optional(Schema.String),
        target: Schema.optional(Schema.String),
        details: Schema.optional(
          Schema.Array(
            Schema.Struct({
              code: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              target: Schema.optional(Schema.String),
              details: Schema.optional(Schema.Array(Schema.Unknown)),
              additionalInfo: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    type: Schema.optional(Schema.String),
                    info: Schema.optional(Schema.Unknown),
                  }),
                ),
              ),
            }),
          ),
        ),
        additionalInfo: Schema.optional(
          Schema.Array(
            Schema.Struct({
              type: Schema.optional(Schema.String),
              info: Schema.optional(Schema.Unknown),
            }),
          ),
        ),
      }),
    ),
  });
export type OperationStatusGetOutput = typeof OperationStatusGetOutput.Type;

// The operation
/**
 * Get Async Operation status
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterRp - The Kubernetes cluster RP - i.e. Microsoft.ContainerService, Microsoft.Kubernetes, Microsoft.HybridContainerService.
 * @param clusterResourceName - The Kubernetes cluster resource name - i.e. managedClusters, connectedClusters, provisionedClusters.
 * @param clusterName - The name of the kubernetes cluster.
 * @param api-version - The API version to use for this operation.
 * @param operationId - operation Id
 */
export const OperationStatusGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationStatusGetInput,
  outputSchema: OperationStatusGetOutput,
}));
// Input Schema
export const OperationStatusListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterRp: Schema.String.pipe(T.PathParam()),
    clusterResourceName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{clusterRp}/{clusterResourceName}/{clusterName}/providers/Microsoft.KubernetesConfiguration/operations",
      apiVersion: "2023-05-01",
    }),
  );
export type OperationStatusListInput = typeof OperationStatusListInput.Type;

// Output Schema
export const OperationStatusListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          status: Schema.String,
          properties: Schema.optional(
            Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
          ),
          error: Schema.optional(
            Schema.Struct({
              code: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              target: Schema.optional(Schema.String),
              details: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    code: Schema.optional(Schema.String),
                    message: Schema.optional(Schema.String),
                    target: Schema.optional(Schema.String),
                    details: Schema.optional(Schema.Array(Schema.Unknown)),
                    additionalInfo: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          type: Schema.optional(Schema.String),
                          info: Schema.optional(Schema.Unknown),
                        }),
                      ),
                    ),
                  }),
                ),
              ),
              additionalInfo: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    type: Schema.optional(Schema.String),
                    info: Schema.optional(Schema.Unknown),
                  }),
                ),
              ),
            }),
          ),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type OperationStatusListOutput = typeof OperationStatusListOutput.Type;

// The operation
/**
 * List Async Operations, currently in progress, in a cluster
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterRp - The Kubernetes cluster RP - i.e. Microsoft.ContainerService, Microsoft.Kubernetes, Microsoft.HybridContainerService.
 * @param clusterResourceName - The Kubernetes cluster resource name - i.e. managedClusters, connectedClusters, provisionedClusters.
 * @param clusterName - The name of the kubernetes cluster.
 * @param api-version - The API version to use for this operation.
 */
export const OperationStatusList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationStatusListInput,
  outputSchema: OperationStatusListOutput,
}));
// Input Schema
export const SourceControlConfigurationsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterRp: Schema.String.pipe(T.PathParam()),
    clusterResourceName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        repositoryUrl: Schema.optional(Schema.String),
        operatorNamespace: Schema.optional(Schema.String),
        operatorInstanceName: Schema.optional(Schema.String),
        operatorType: Schema.optional(Schema.Literals(["Flux"])),
        operatorParams: Schema.optional(Schema.String),
        configurationProtectedSettings: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        operatorScope: Schema.optional(
          Schema.Literals(["cluster", "namespace"]),
        ),
        repositoryPublicKey: Schema.optional(Schema.String),
        sshKnownHostsContents: Schema.optional(Schema.String),
        enableHelmOperator: Schema.optional(Schema.Boolean),
        helmOperatorProperties: Schema.optional(
          Schema.Struct({
            chartVersion: Schema.optional(Schema.String),
            chartValues: Schema.optional(Schema.String),
          }),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Accepted",
            "Deleting",
            "Running",
            "Succeeded",
            "Failed",
          ]),
        ),
        complianceStatus: Schema.optional(
          Schema.Struct({
            complianceState: Schema.optional(
              Schema.Literals([
                "Pending",
                "Compliant",
                "Noncompliant",
                "Installed",
                "Failed",
              ]),
            ),
            lastConfigApplied: Schema.optional(Schema.String),
            message: Schema.optional(Schema.String),
            messageLevel: Schema.optional(
              Schema.Literals(["Error", "Warning", "Information"]),
            ),
          }),
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
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{clusterRp}/{clusterResourceName}/{clusterName}/providers/Microsoft.KubernetesConfiguration/sourceControlConfigurations/{sourceControlConfigurationName}",
      apiVersion: "2023-05-01",
    }),
  );
export type SourceControlConfigurationsCreateOrUpdateInput =
  typeof SourceControlConfigurationsCreateOrUpdateInput.Type;

// Output Schema
export const SourceControlConfigurationsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  });
export type SourceControlConfigurationsCreateOrUpdateOutput =
  typeof SourceControlConfigurationsCreateOrUpdateOutput.Type;

// The operation
/**
 * Create a new Kubernetes Source Control Configuration.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterRp - The Kubernetes cluster RP - i.e. Microsoft.ContainerService, Microsoft.Kubernetes, Microsoft.HybridContainerService.
 * @param clusterResourceName - The Kubernetes cluster resource name - i.e. managedClusters, connectedClusters, provisionedClusters.
 * @param clusterName - The name of the kubernetes cluster.
 * @param api-version - The API version to use for this operation.
 */
export const SourceControlConfigurationsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SourceControlConfigurationsCreateOrUpdateInput,
    outputSchema: SourceControlConfigurationsCreateOrUpdateOutput,
  }));
// Input Schema
export const SourceControlConfigurationsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterRp: Schema.String.pipe(T.PathParam()),
    clusterResourceName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{clusterRp}/{clusterResourceName}/{clusterName}/providers/Microsoft.KubernetesConfiguration/sourceControlConfigurations/{sourceControlConfigurationName}",
      apiVersion: "2023-05-01",
    }),
  );
export type SourceControlConfigurationsDeleteInput =
  typeof SourceControlConfigurationsDeleteInput.Type;

// Output Schema
export const SourceControlConfigurationsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type SourceControlConfigurationsDeleteOutput =
  typeof SourceControlConfigurationsDeleteOutput.Type;

// The operation
/**
 * This will delete the YAML file used to set up the Source control configuration, thus stopping future sync from the source repo.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterRp - The Kubernetes cluster RP - i.e. Microsoft.ContainerService, Microsoft.Kubernetes, Microsoft.HybridContainerService.
 * @param clusterResourceName - The Kubernetes cluster resource name - i.e. managedClusters, connectedClusters, provisionedClusters.
 * @param clusterName - The name of the kubernetes cluster.
 * @param api-version - The API version to use for this operation.
 */
export const SourceControlConfigurationsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SourceControlConfigurationsDeleteInput,
    outputSchema: SourceControlConfigurationsDeleteOutput,
  }));
// Input Schema
export const SourceControlConfigurationsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterRp: Schema.String.pipe(T.PathParam()),
    clusterResourceName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{clusterRp}/{clusterResourceName}/{clusterName}/providers/Microsoft.KubernetesConfiguration/sourceControlConfigurations/{sourceControlConfigurationName}",
      apiVersion: "2023-05-01",
    }),
  );
export type SourceControlConfigurationsGetInput =
  typeof SourceControlConfigurationsGetInput.Type;

// Output Schema
export const SourceControlConfigurationsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  });
export type SourceControlConfigurationsGetOutput =
  typeof SourceControlConfigurationsGetOutput.Type;

// The operation
/**
 * Gets details of the Source Control Configuration.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterRp - The Kubernetes cluster RP - i.e. Microsoft.ContainerService, Microsoft.Kubernetes, Microsoft.HybridContainerService.
 * @param clusterResourceName - The Kubernetes cluster resource name - i.e. managedClusters, connectedClusters, provisionedClusters.
 * @param clusterName - The name of the kubernetes cluster.
 * @param api-version - The API version to use for this operation.
 */
export const SourceControlConfigurationsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SourceControlConfigurationsGetInput,
    outputSchema: SourceControlConfigurationsGetOutput,
  }));
// Input Schema
export const SourceControlConfigurationsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterRp: Schema.String.pipe(T.PathParam()),
    clusterResourceName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{clusterRp}/{clusterResourceName}/{clusterName}/providers/Microsoft.KubernetesConfiguration/sourceControlConfigurations",
      apiVersion: "2023-05-01",
    }),
  );
export type SourceControlConfigurationsListInput =
  typeof SourceControlConfigurationsListInput.Type;

// Output Schema
export const SourceControlConfigurationsListOutput =
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
export type SourceControlConfigurationsListOutput =
  typeof SourceControlConfigurationsListOutput.Type;

// The operation
/**
 * List all Source Control Configurations.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterRp - The Kubernetes cluster RP - i.e. Microsoft.ContainerService, Microsoft.Kubernetes, Microsoft.HybridContainerService.
 * @param clusterResourceName - The Kubernetes cluster resource name - i.e. managedClusters, connectedClusters, provisionedClusters.
 * @param clusterName - The name of the kubernetes cluster.
 * @param api-version - The API version to use for this operation.
 */
export const SourceControlConfigurationsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SourceControlConfigurationsListInput,
    outputSchema: SourceControlConfigurationsListOutput,
  }));
