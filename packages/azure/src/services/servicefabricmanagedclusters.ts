/**
 * Azure Servicefabricmanagedclusters API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const ApplicationsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    applicationName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        managedIdentities: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.String,
              principalId: Schema.String,
            }),
          ),
        ),
        provisioningState: Schema.optional(Schema.String),
        version: Schema.optional(Schema.String),
        parameters: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        upgradePolicy: Schema.optional(
          Schema.Struct({
            applicationHealthPolicy: Schema.optional(
              Schema.Struct({
                considerWarningAsError: Schema.Boolean,
                maxPercentUnhealthyDeployedApplications: Schema.Number,
                defaultServiceTypeHealthPolicy: Schema.optional(
                  Schema.Struct({
                    maxPercentUnhealthyServices: Schema.Number,
                    maxPercentUnhealthyPartitionsPerService: Schema.Number,
                    maxPercentUnhealthyReplicasPerPartition: Schema.Number,
                  }),
                ),
                serviceTypeHealthPolicyMap: Schema.optional(
                  Schema.Record(
                    Schema.String,
                    Schema.Struct({
                      maxPercentUnhealthyServices: Schema.Number,
                      maxPercentUnhealthyPartitionsPerService: Schema.Number,
                      maxPercentUnhealthyReplicasPerPartition: Schema.Number,
                    }),
                  ),
                ),
              }),
            ),
            forceRestart: Schema.optional(Schema.Boolean),
            rollingUpgradeMonitoringPolicy: Schema.optional(
              Schema.Struct({
                failureAction: Schema.Literals(["Rollback", "Manual"]),
                healthCheckWaitDuration: Schema.String,
                healthCheckStableDuration: Schema.String,
                healthCheckRetryTimeout: Schema.String,
                upgradeTimeout: Schema.String,
                upgradeDomainTimeout: Schema.String,
              }),
            ),
            instanceCloseDelayDuration: Schema.optional(Schema.Number),
            upgradeMode: Schema.optional(
              Schema.Literals(["Monitored", "UnmonitoredAuto"]),
            ),
            upgradeReplicaSetCheckTimeout: Schema.optional(Schema.Number),
            recreateApplication: Schema.optional(Schema.Boolean),
          }),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(
          Schema.Literals([
            "None",
            "SystemAssigned",
            "UserAssigned",
            "SystemAssigned, UserAssigned",
          ]),
        ),
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
    location: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/applications/{applicationName}",
      apiVersion: "2026-02-01",
    }),
  );
export type ApplicationsCreateOrUpdateInput =
  typeof ApplicationsCreateOrUpdateInput.Type;

// Output Schema
export const ApplicationsCreateOrUpdateOutput =
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
export type ApplicationsCreateOrUpdateOutput =
  typeof ApplicationsCreateOrUpdateOutput.Type;

// The operation
/**
 * Create or update a Service Fabric managed application resource with the specified name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster resource.
 * @param applicationName - The name of the application resource.
 */
export const ApplicationsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ApplicationsCreateOrUpdateInput,
    outputSchema: ApplicationsCreateOrUpdateOutput,
  }),
);
// Input Schema
export const ApplicationsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    applicationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/applications/{applicationName}",
      apiVersion: "2026-02-01",
    }),
  );
export type ApplicationsDeleteInput = typeof ApplicationsDeleteInput.Type;

// Output Schema
export const ApplicationsDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ApplicationsDeleteOutput = typeof ApplicationsDeleteOutput.Type;

// The operation
/**
 * Delete a Service Fabric managed application resource with the specified name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster resource.
 * @param applicationName - The name of the application resource.
 */
export const ApplicationsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ApplicationsDeleteInput,
  outputSchema: ApplicationsDeleteOutput,
}));
// Input Schema
export const ApplicationsFetchHealthInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    applicationName: Schema.String.pipe(T.PathParam()),
    eventsHealthStateFilter: Schema.optional(
      Schema.Literals(["Default", "None", "Ok", "Warning", "Error", "All"]),
    ),
    deployedApplicationsHealthStateFilter: Schema.optional(
      Schema.Literals(["Default", "None", "Ok", "Warning", "Error", "All"]),
    ),
    servicesHealthStateFilter: Schema.optional(
      Schema.Literals(["Default", "None", "Ok", "Warning", "Error", "All"]),
    ),
    excludeHealthStatistics: Schema.optional(Schema.Boolean),
    timeout: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/applications/{applicationName}/fetchHealth",
      apiVersion: "2026-02-01",
    }),
  );
export type ApplicationsFetchHealthInput =
  typeof ApplicationsFetchHealthInput.Type;

// Output Schema
export const ApplicationsFetchHealthOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ApplicationsFetchHealthOutput =
  typeof ApplicationsFetchHealthOutput.Type;

// The operation
/**
 * Get the status of the deployed application health. It will query the cluster to find the health of the deployed application.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster resource.
 * @param applicationName - The name of the application resource.
 */
export const ApplicationsFetchHealth = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ApplicationsFetchHealthInput,
    outputSchema: ApplicationsFetchHealthOutput,
  }),
);
// Input Schema
export const ApplicationsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  applicationName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/applications/{applicationName}",
    apiVersion: "2026-02-01",
  }),
);
export type ApplicationsGetInput = typeof ApplicationsGetInput.Type;

// Output Schema
export const ApplicationsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type ApplicationsGetOutput = typeof ApplicationsGetOutput.Type;

// The operation
/**
 * Get a Service Fabric managed application resource created or in the process of being created in the Service Fabric cluster resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster resource.
 * @param applicationName - The name of the application resource.
 */
export const ApplicationsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ApplicationsGetInput,
  outputSchema: ApplicationsGetOutput,
}));
// Input Schema
export const ApplicationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/applications",
    apiVersion: "2026-02-01",
  }),
);
export type ApplicationsListInput = typeof ApplicationsListInput.Type;

// Output Schema
export const ApplicationsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
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
  },
);
export type ApplicationsListOutput = typeof ApplicationsListOutput.Type;

// The operation
/**
 * Gets all managed application resources created or in the process of being created in the Service Fabric cluster resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster resource.
 */
export const ApplicationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ApplicationsListInput,
  outputSchema: ApplicationsListOutput,
}));
// Input Schema
export const ApplicationsReadUpgradeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    applicationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/applications/{applicationName}/fetchUpgradeStatus",
      apiVersion: "2026-02-01",
    }),
  );
export type ApplicationsReadUpgradeInput =
  typeof ApplicationsReadUpgradeInput.Type;

// Output Schema
export const ApplicationsReadUpgradeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ApplicationsReadUpgradeOutput =
  typeof ApplicationsReadUpgradeOutput.Type;

// The operation
/**
 * Get the status of the latest application upgrade. It will query the cluster to find the status of the latest application upgrade.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster resource.
 * @param applicationName - The name of the application resource.
 */
export const ApplicationsReadUpgrade = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ApplicationsReadUpgradeInput,
    outputSchema: ApplicationsReadUpgradeOutput,
  }),
);
// Input Schema
export const ApplicationsRestartDeployedCodePackageInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    applicationName: Schema.String.pipe(T.PathParam()),
    nodeName: Schema.String,
    serviceManifestName: Schema.String,
    codePackageName: Schema.String,
    codePackageInstanceId: Schema.String,
    servicePackageActivationId: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/applications/{applicationName}/restartDeployedCodePackage",
      apiVersion: "2026-02-01",
    }),
  );
export type ApplicationsRestartDeployedCodePackageInput =
  typeof ApplicationsRestartDeployedCodePackageInput.Type;

// Output Schema
export const ApplicationsRestartDeployedCodePackageOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ApplicationsRestartDeployedCodePackageOutput =
  typeof ApplicationsRestartDeployedCodePackageOutput.Type;

// The operation
/**
 * Restart a code package instance of a service replica or instance. This is a potentially destabilizing operation that should be used with immense care.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster resource.
 * @param applicationName - The name of the application resource.
 */
export const ApplicationsRestartDeployedCodePackage =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ApplicationsRestartDeployedCodePackageInput,
    outputSchema: ApplicationsRestartDeployedCodePackageOutput,
  }));
// Input Schema
export const ApplicationsResumeUpgradeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    applicationName: Schema.String.pipe(T.PathParam()),
    upgradeDomainName: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/applications/{applicationName}/resumeUpgrade",
      apiVersion: "2026-02-01",
    }),
  );
export type ApplicationsResumeUpgradeInput =
  typeof ApplicationsResumeUpgradeInput.Type;

// Output Schema
export const ApplicationsResumeUpgradeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ApplicationsResumeUpgradeOutput =
  typeof ApplicationsResumeUpgradeOutput.Type;

// The operation
/**
 * Send a request to resume the current application upgrade. This will resume the application upgrade from where it was paused.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster resource.
 * @param applicationName - The name of the application resource.
 */
export const ApplicationsResumeUpgrade = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ApplicationsResumeUpgradeInput,
    outputSchema: ApplicationsResumeUpgradeOutput,
  }),
);
// Input Schema
export const ApplicationsStartRollbackInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    applicationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/applications/{applicationName}/startRollback",
      apiVersion: "2026-02-01",
    }),
  );
export type ApplicationsStartRollbackInput =
  typeof ApplicationsStartRollbackInput.Type;

// Output Schema
export const ApplicationsStartRollbackOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ApplicationsStartRollbackOutput =
  typeof ApplicationsStartRollbackOutput.Type;

// The operation
/**
 * Send a request to start a rollback of the current application upgrade. This will start rolling back the application to the previous version.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster resource.
 * @param applicationName - The name of the application resource.
 */
export const ApplicationsStartRollback = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ApplicationsStartRollbackInput,
    outputSchema: ApplicationsStartRollbackOutput,
  }),
);
// Input Schema
export const ApplicationsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    applicationName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(
      Schema.Struct({
        parameters: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/applications/{applicationName}",
      apiVersion: "2026-02-01",
    }),
  );
export type ApplicationsUpdateInput = typeof ApplicationsUpdateInput.Type;

// Output Schema
export const ApplicationsUpdateOutput =
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
export type ApplicationsUpdateOutput = typeof ApplicationsUpdateOutput.Type;

// The operation
/**
 * Updates an application resource of a given managed cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster resource.
 * @param applicationName - The name of the application resource.
 */
export const ApplicationsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ApplicationsUpdateInput,
  outputSchema: ApplicationsUpdateOutput,
}));
// Input Schema
export const ApplicationsUpdateUpgradeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    applicationName: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
    upgradeKind: Schema.Literals(["Rolling"]),
    applicationHealthPolicy: Schema.optional(
      Schema.Struct({
        considerWarningAsError: Schema.Boolean,
        maxPercentUnhealthyDeployedApplications: Schema.Number,
        defaultServiceTypeHealthPolicy: Schema.optional(
          Schema.Struct({
            maxPercentUnhealthyServices: Schema.Number,
            maxPercentUnhealthyPartitionsPerService: Schema.Number,
            maxPercentUnhealthyReplicasPerPartition: Schema.Number,
          }),
        ),
        serviceTypeHealthPolicyMap: Schema.optional(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              maxPercentUnhealthyServices: Schema.Number,
              maxPercentUnhealthyPartitionsPerService: Schema.Number,
              maxPercentUnhealthyReplicasPerPartition: Schema.Number,
            }),
          ),
        ),
      }),
    ),
    updateDescription: Schema.optional(
      Schema.Struct({
        rollingUpgradeMode: Schema.Literals([
          "UnmonitoredAuto",
          "UnmonitoredManual",
          "Monitored",
        ]),
        forceRestart: Schema.optional(Schema.Boolean),
        replicaSetCheckTimeoutInMilliseconds: Schema.optional(Schema.Number),
        failureAction: Schema.optional(Schema.Literals(["Rollback", "Manual"])),
        healthCheckWaitDurationInMilliseconds: Schema.optional(Schema.String),
        healthCheckStableDurationInMilliseconds: Schema.optional(Schema.String),
        healthCheckRetryTimeoutInMilliseconds: Schema.optional(Schema.String),
        upgradeTimeoutInMilliseconds: Schema.optional(Schema.String),
        upgradeDomainTimeoutInMilliseconds: Schema.optional(Schema.String),
        instanceCloseDelayDurationInSeconds: Schema.optional(Schema.Number),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/applications/{applicationName}/updateUpgrade",
      apiVersion: "2026-02-01",
    }),
  );
export type ApplicationsUpdateUpgradeInput =
  typeof ApplicationsUpdateUpgradeInput.Type;

// Output Schema
export const ApplicationsUpdateUpgradeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ApplicationsUpdateUpgradeOutput =
  typeof ApplicationsUpdateUpgradeOutput.Type;

// The operation
/**
 * Send a request to update the current application upgrade.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster resource.
 * @param applicationName - The name of the application resource.
 */
export const ApplicationsUpdateUpgrade = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ApplicationsUpdateUpgradeInput,
    outputSchema: ApplicationsUpdateUpgradeOutput,
  }),
);
// Input Schema
export const ApplicationTypesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    applicationTypeName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(Schema.String),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/applicationTypes/{applicationTypeName}",
      apiVersion: "2026-02-01",
    }),
  );
export type ApplicationTypesCreateOrUpdateInput =
  typeof ApplicationTypesCreateOrUpdateInput.Type;

// Output Schema
export const ApplicationTypesCreateOrUpdateOutput =
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
export type ApplicationTypesCreateOrUpdateOutput =
  typeof ApplicationTypesCreateOrUpdateOutput.Type;

// The operation
/**
 * Create or update a Service Fabric managed application type name resource with the specified name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster resource.
 * @param applicationTypeName - The name of the application type name resource.
 */
export const ApplicationTypesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ApplicationTypesCreateOrUpdateInput,
    outputSchema: ApplicationTypesCreateOrUpdateOutput,
  }));
// Input Schema
export const ApplicationTypesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    applicationTypeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/applicationTypes/{applicationTypeName}",
      apiVersion: "2026-02-01",
    }),
  );
export type ApplicationTypesDeleteInput =
  typeof ApplicationTypesDeleteInput.Type;

// Output Schema
export const ApplicationTypesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ApplicationTypesDeleteOutput =
  typeof ApplicationTypesDeleteOutput.Type;

// The operation
/**
 * Delete a Service Fabric managed application type name resource with the specified name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster resource.
 * @param applicationTypeName - The name of the application type name resource.
 */
export const ApplicationTypesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ApplicationTypesDeleteInput,
    outputSchema: ApplicationTypesDeleteOutput,
  }),
);
// Input Schema
export const ApplicationTypesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    applicationTypeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/applicationTypes/{applicationTypeName}",
      apiVersion: "2026-02-01",
    }),
  );
export type ApplicationTypesGetInput = typeof ApplicationTypesGetInput.Type;

// Output Schema
export const ApplicationTypesGetOutput =
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
export type ApplicationTypesGetOutput = typeof ApplicationTypesGetOutput.Type;

// The operation
/**
 * Get a Service Fabric application type name resource created or in the process of being created in the Service Fabric managed cluster resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster resource.
 * @param applicationTypeName - The name of the application type name resource.
 */
export const ApplicationTypesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ApplicationTypesGetInput,
  outputSchema: ApplicationTypesGetOutput,
}));
// Input Schema
export const ApplicationTypesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/applicationTypes",
      apiVersion: "2026-02-01",
    }),
  );
export type ApplicationTypesListInput = typeof ApplicationTypesListInput.Type;

// Output Schema
export const ApplicationTypesListOutput =
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
export type ApplicationTypesListOutput = typeof ApplicationTypesListOutput.Type;

// The operation
/**
 * Gets all application type name resources created or in the process of being created in the Service Fabric managed cluster resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster resource.
 */
export const ApplicationTypesList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ApplicationTypesListInput,
    outputSchema: ApplicationTypesListOutput,
  }),
);
// Input Schema
export const ApplicationTypesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    applicationTypeName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/applicationTypes/{applicationTypeName}",
      apiVersion: "2026-02-01",
    }),
  );
export type ApplicationTypesUpdateInput =
  typeof ApplicationTypesUpdateInput.Type;

// Output Schema
export const ApplicationTypesUpdateOutput =
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
export type ApplicationTypesUpdateOutput =
  typeof ApplicationTypesUpdateOutput.Type;

// The operation
/**
 * Updates the tags of an application type resource of a given managed cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster resource.
 * @param applicationTypeName - The name of the application type name resource.
 */
export const ApplicationTypesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ApplicationTypesUpdateInput,
    outputSchema: ApplicationTypesUpdateOutput,
  }),
);
// Input Schema
export const ApplicationTypeVersionsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    applicationTypeName: Schema.String.pipe(T.PathParam()),
    version: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(Schema.String),
        appPackageUrl: Schema.String,
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/applicationTypes/{applicationTypeName}/versions/{version}",
      apiVersion: "2026-02-01",
    }),
  );
export type ApplicationTypeVersionsCreateOrUpdateInput =
  typeof ApplicationTypeVersionsCreateOrUpdateInput.Type;

// Output Schema
export const ApplicationTypeVersionsCreateOrUpdateOutput =
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
export type ApplicationTypeVersionsCreateOrUpdateOutput =
  typeof ApplicationTypeVersionsCreateOrUpdateOutput.Type;

// The operation
/**
 * Create or update a Service Fabric managed application type version resource with the specified name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster resource.
 * @param applicationTypeName - The name of the application type name resource.
 * @param version - The application type version.
 */
export const ApplicationTypeVersionsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ApplicationTypeVersionsCreateOrUpdateInput,
    outputSchema: ApplicationTypeVersionsCreateOrUpdateOutput,
  }));
// Input Schema
export const ApplicationTypeVersionsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    applicationTypeName: Schema.String.pipe(T.PathParam()),
    version: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/applicationTypes/{applicationTypeName}/versions/{version}",
      apiVersion: "2026-02-01",
    }),
  );
export type ApplicationTypeVersionsDeleteInput =
  typeof ApplicationTypeVersionsDeleteInput.Type;

// Output Schema
export const ApplicationTypeVersionsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ApplicationTypeVersionsDeleteOutput =
  typeof ApplicationTypeVersionsDeleteOutput.Type;

// The operation
/**
 * Delete a Service Fabric managed application type version resource with the specified name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster resource.
 * @param applicationTypeName - The name of the application type name resource.
 * @param version - The application type version.
 */
export const ApplicationTypeVersionsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ApplicationTypeVersionsDeleteInput,
    outputSchema: ApplicationTypeVersionsDeleteOutput,
  }));
// Input Schema
export const ApplicationTypeVersionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    applicationTypeName: Schema.String.pipe(T.PathParam()),
    version: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/applicationTypes/{applicationTypeName}/versions/{version}",
      apiVersion: "2026-02-01",
    }),
  );
export type ApplicationTypeVersionsGetInput =
  typeof ApplicationTypeVersionsGetInput.Type;

// Output Schema
export const ApplicationTypeVersionsGetOutput =
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
export type ApplicationTypeVersionsGetOutput =
  typeof ApplicationTypeVersionsGetOutput.Type;

// The operation
/**
 * Get a Service Fabric managed application type version resource created or in the process of being created in the Service Fabric managed application type name resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster resource.
 * @param applicationTypeName - The name of the application type name resource.
 * @param version - The application type version.
 */
export const ApplicationTypeVersionsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ApplicationTypeVersionsGetInput,
    outputSchema: ApplicationTypeVersionsGetOutput,
  }),
);
// Input Schema
export const ApplicationTypeVersionsListByApplicationTypesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    applicationTypeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/applicationTypes/{applicationTypeName}/versions",
      apiVersion: "2026-02-01",
    }),
  );
export type ApplicationTypeVersionsListByApplicationTypesInput =
  typeof ApplicationTypeVersionsListByApplicationTypesInput.Type;

// Output Schema
export const ApplicationTypeVersionsListByApplicationTypesOutput =
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
export type ApplicationTypeVersionsListByApplicationTypesOutput =
  typeof ApplicationTypeVersionsListByApplicationTypesOutput.Type;

// The operation
/**
 * Gets all application type version resources created or in the process of being created in the Service Fabric managed application type name resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster resource.
 * @param applicationTypeName - The name of the application type name resource.
 */
export const ApplicationTypeVersionsListByApplicationTypes =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ApplicationTypeVersionsListByApplicationTypesInput,
    outputSchema: ApplicationTypeVersionsListByApplicationTypesOutput,
  }));
// Input Schema
export const ApplicationTypeVersionsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    applicationTypeName: Schema.String.pipe(T.PathParam()),
    version: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/applicationTypes/{applicationTypeName}/versions/{version}",
      apiVersion: "2026-02-01",
    }),
  );
export type ApplicationTypeVersionsUpdateInput =
  typeof ApplicationTypeVersionsUpdateInput.Type;

// Output Schema
export const ApplicationTypeVersionsUpdateOutput =
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
export type ApplicationTypeVersionsUpdateOutput =
  typeof ApplicationTypeVersionsUpdateOutput.Type;

// The operation
/**
 * Updates the tags of an application type version resource of a given managed cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster resource.
 * @param applicationTypeName - The name of the application type name resource.
 * @param version - The application type version.
 */
export const ApplicationTypeVersionsUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ApplicationTypeVersionsUpdateInput,
    outputSchema: ApplicationTypeVersionsUpdateOutput,
  }));
// Input Schema
export const ManagedApplyMaintenanceWindowPostInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/applyMaintenanceWindow",
      apiVersion: "2026-02-01",
    }),
  );
export type ManagedApplyMaintenanceWindowPostInput =
  typeof ManagedApplyMaintenanceWindowPostInput.Type;

// Output Schema
export const ManagedApplyMaintenanceWindowPostOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ManagedApplyMaintenanceWindowPostOutput =
  typeof ManagedApplyMaintenanceWindowPostOutput.Type;

// The operation
/**
 * Action to Apply Maintenance window on the Service Fabric Managed Clusters, right now. Any pending update will be applied.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster resource.
 */
export const managedApplyMaintenanceWindowPost =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ManagedApplyMaintenanceWindowPostInput,
    outputSchema: ManagedApplyMaintenanceWindowPostOutput,
  }));
// Input Schema
export const ManagedAzResiliencyStatusGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/getazresiliencystatus",
      apiVersion: "2026-02-01",
    }),
  );
export type ManagedAzResiliencyStatusGetInput =
  typeof ManagedAzResiliencyStatusGetInput.Type;

// Output Schema
export const ManagedAzResiliencyStatusGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    baseResourceStatus: Schema.optional(
      Schema.Array(
        Schema.Struct({
          resourceName: Schema.optional(Schema.String),
          resourceType: Schema.optional(Schema.String),
          isZoneResilient: Schema.optional(Schema.Boolean),
          details: Schema.optional(Schema.String),
        }),
      ),
    ),
    isClusterZoneResilient: Schema.optional(Schema.Boolean),
  });
export type ManagedAzResiliencyStatusGetOutput =
  typeof ManagedAzResiliencyStatusGetOutput.Type;

// The operation
/**
 * Action to get Az Resiliency Status of all the Base resources constituting Service Fabric Managed Clusters.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster resource.
 */
export const managedAzResiliencyStatusGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ManagedAzResiliencyStatusGetInput,
    outputSchema: ManagedAzResiliencyStatusGetOutput,
  }));
// Input Schema
export const ManagedClustersCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        dnsName: Schema.String,
        fqdn: Schema.optional(Schema.String),
        ipv4Address: Schema.optional(Schema.String),
        clusterId: Schema.optional(Schema.String),
        clusterState: Schema.optional(
          Schema.Literals([
            "WaitingForNodes",
            "Deploying",
            "BaselineUpgrade",
            "Upgrading",
            "UpgradeFailed",
            "Ready",
          ]),
        ),
        clusterCertificateThumbprints: Schema.optional(
          Schema.Array(Schema.String),
        ),
        clientConnectionPort: Schema.optional(Schema.Number),
        httpGatewayConnectionPort: Schema.optional(Schema.Number),
        adminUserName: Schema.String,
        adminPassword: Schema.optional(SensitiveString),
        loadBalancingRules: Schema.optional(
          Schema.Array(
            Schema.Struct({
              frontendPort: Schema.Number,
              backendPort: Schema.Number,
              protocol: Schema.Literals(["tcp", "udp"]),
              probePort: Schema.optional(Schema.Number),
              probeProtocol: Schema.Literals(["tcp", "http", "https"]),
              probeRequestPath: Schema.optional(Schema.String),
              loadDistribution: Schema.optional(Schema.String),
            }),
          ),
        ),
        allowRdpAccess: Schema.optional(Schema.Boolean),
        networkSecurityRules: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.String,
              description: Schema.optional(Schema.String),
              protocol: Schema.Literals([
                "http",
                "https",
                "tcp",
                "udp",
                "icmp",
                "ah",
                "esp",
              ]),
              sourceAddressPrefixes: Schema.optional(
                Schema.Array(Schema.String),
              ),
              destinationAddressPrefixes: Schema.optional(
                Schema.Array(Schema.String),
              ),
              sourcePortRanges: Schema.optional(Schema.Array(Schema.String)),
              destinationPortRanges: Schema.optional(
                Schema.Array(Schema.String),
              ),
              sourceAddressPrefix: Schema.optional(Schema.String),
              destinationAddressPrefix: Schema.optional(Schema.String),
              sourcePortRange: Schema.optional(Schema.String),
              destinationPortRange: Schema.optional(Schema.String),
              access: Schema.Literals(["allow", "deny"]),
              priority: Schema.Number,
              direction: Schema.Literals(["inbound", "outbound"]),
            }),
          ),
        ),
        clients: Schema.optional(
          Schema.Array(
            Schema.Struct({
              isAdmin: Schema.Boolean,
              thumbprint: Schema.optional(Schema.String),
              commonName: Schema.optional(Schema.String),
              issuerThumbprint: Schema.optional(Schema.String),
            }),
          ),
        ),
        azureActiveDirectory: Schema.optional(
          Schema.Struct({
            tenantId: Schema.optional(Schema.String),
            clusterApplication: Schema.optional(Schema.String),
            clientApplication: Schema.optional(Schema.String),
          }),
        ),
        fabricSettings: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.String,
              parameters: Schema.Array(
                Schema.Struct({
                  name: Schema.String,
                  value: Schema.String,
                }),
              ),
            }),
          ),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "None",
            "Creating",
            "Created",
            "Updating",
            "Succeeded",
            "Failed",
            "Canceled",
            "Deleting",
            "Deleted",
            "Other",
          ]),
        ),
        clusterCodeVersion: Schema.optional(Schema.String),
        clusterUpgradeMode: Schema.optional(
          Schema.Literals(["Automatic", "Manual"]),
        ),
        clusterUpgradeCadence: Schema.optional(
          Schema.Literals(["Wave0", "Wave1", "Wave2"]),
        ),
        addonFeatures: Schema.optional(
          Schema.Array(
            Schema.Literals([
              "DnsService",
              "BackupRestoreService",
              "ResourceMonitorService",
            ]),
          ),
        ),
        enableAutoOSUpgrade: Schema.optional(Schema.Boolean),
        zonalResiliency: Schema.optional(Schema.Boolean),
        applicationTypeVersionsCleanupPolicy: Schema.optional(
          Schema.Struct({
            maxUnusedVersionsToKeep: Schema.Number,
          }),
        ),
        enableIpv6: Schema.optional(Schema.Boolean),
        subnetId: Schema.optional(Schema.String),
        ipTags: Schema.optional(
          Schema.Array(
            Schema.Struct({
              ipTagType: Schema.String,
              tag: Schema.String,
            }),
          ),
        ),
        ipv6Address: Schema.optional(Schema.String),
        enableServicePublicIP: Schema.optional(Schema.Boolean),
        auxiliarySubnets: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.String,
              enableIpv6: Schema.optional(Schema.Boolean),
              privateEndpointNetworkPolicies: Schema.optional(
                Schema.Literals(["enabled", "disabled"]),
              ),
              privateLinkServiceNetworkPolicies: Schema.optional(
                Schema.Literals(["enabled", "disabled"]),
              ),
              networkSecurityGroupId: Schema.optional(Schema.String),
            }),
          ),
        ),
        serviceEndpoints: Schema.optional(
          Schema.Array(
            Schema.Struct({
              service: Schema.String,
              locations: Schema.optional(Schema.Array(Schema.String)),
              networkIdentifier: Schema.optional(Schema.String),
            }),
          ),
        ),
        zonalUpdateMode: Schema.optional(Schema.Literals(["Standard", "Fast"])),
        useCustomVnet: Schema.optional(Schema.Boolean),
        publicIPPrefixId: Schema.optional(Schema.String),
        publicIPv6PrefixId: Schema.optional(Schema.String),
        ddosProtectionPlanId: Schema.optional(Schema.String),
        upgradeDescription: Schema.optional(
          Schema.Struct({
            forceRestart: Schema.optional(Schema.Boolean),
            healthPolicy: Schema.optional(
              Schema.Struct({
                maxPercentUnhealthyNodes: Schema.Number,
                maxPercentUnhealthyApplications: Schema.Number,
              }),
            ),
            deltaHealthPolicy: Schema.optional(
              Schema.Struct({
                maxPercentDeltaUnhealthyNodes: Schema.Number,
                maxPercentUpgradeDomainDeltaUnhealthyNodes: Schema.optional(
                  Schema.Number,
                ),
                maxPercentDeltaUnhealthyApplications: Schema.optional(
                  Schema.Number,
                ),
              }),
            ),
            monitoringPolicy: Schema.optional(
              Schema.Struct({
                healthCheckWaitDuration: Schema.String,
                healthCheckStableDuration: Schema.String,
                healthCheckRetryTimeout: Schema.String,
                upgradeTimeout: Schema.String,
                upgradeDomainTimeout: Schema.String,
              }),
            ),
            upgradeReplicaSetCheckTimeout: Schema.optional(Schema.String),
          }),
        ),
        httpGatewayTokenAuthConnectionPort: Schema.optional(Schema.Number),
        enableHttpGatewayExclusiveAuthMode: Schema.optional(Schema.Boolean),
        autoGeneratedDomainNameLabelScope: Schema.optional(
          Schema.Literals([
            "TenantReuse",
            "SubscriptionReuse",
            "ResourceGroupReuse",
            "NoReuse",
          ]),
        ),
        allocatedOutboundPorts: Schema.optional(Schema.Number),
        VMImage: Schema.optional(Schema.String),
        enableOutboundOnlyNodeTypes: Schema.optional(Schema.Boolean),
        skipManagedNsgAssignment: Schema.optional(Schema.Boolean),
      }),
    ),
    etag: Schema.optional(Schema.String),
    sku: Schema.Struct({
      name: Schema.Literals(["Basic", "Standard"]),
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}",
      apiVersion: "2026-02-01",
    }),
  );
export type ManagedClustersCreateOrUpdateInput =
  typeof ManagedClustersCreateOrUpdateInput.Type;

// Output Schema
export const ManagedClustersCreateOrUpdateOutput =
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
export type ManagedClustersCreateOrUpdateOutput =
  typeof ManagedClustersCreateOrUpdateOutput.Type;

// The operation
/**
 * Create or update a Service Fabric managed cluster resource with the specified name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster resource.
 */
export const ManagedClustersCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ManagedClustersCreateOrUpdateInput,
    outputSchema: ManagedClustersCreateOrUpdateOutput,
  }));
// Input Schema
export const ManagedClustersDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}",
      apiVersion: "2026-02-01",
    }),
  );
export type ManagedClustersDeleteInput = typeof ManagedClustersDeleteInput.Type;

// Output Schema
export const ManagedClustersDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ManagedClustersDeleteOutput =
  typeof ManagedClustersDeleteOutput.Type;

// The operation
/**
 * Delete a Service Fabric managed cluster resource with the specified name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster resource.
 */
export const ManagedClustersDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ManagedClustersDeleteInput,
    outputSchema: ManagedClustersDeleteOutput,
  }),
);
// Input Schema
export const ManagedClustersGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}",
      apiVersion: "2026-02-01",
    }),
  );
export type ManagedClustersGetInput = typeof ManagedClustersGetInput.Type;

// Output Schema
export const ManagedClustersGetOutput =
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
export type ManagedClustersGetOutput = typeof ManagedClustersGetOutput.Type;

// The operation
/**
 * Get a Service Fabric managed cluster resource created or in the process of being created in the specified resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster resource.
 */
export const ManagedClustersGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ManagedClustersGetInput,
  outputSchema: ManagedClustersGetOutput,
}));
// Input Schema
export const ManagedClustersListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters",
      apiVersion: "2026-02-01",
    }),
  );
export type ManagedClustersListByResourceGroupInput =
  typeof ManagedClustersListByResourceGroupInput.Type;

// Output Schema
export const ManagedClustersListByResourceGroupOutput =
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
export type ManagedClustersListByResourceGroupOutput =
  typeof ManagedClustersListByResourceGroupOutput.Type;

// The operation
/**
 * Gets all Service Fabric cluster resources created or in the process of being created in the resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ManagedClustersListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ManagedClustersListByResourceGroupInput,
    outputSchema: ManagedClustersListByResourceGroupOutput,
  }));
// Input Schema
export const ManagedClustersListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ServiceFabric/managedClusters",
      apiVersion: "2026-02-01",
    }),
  );
export type ManagedClustersListBySubscriptionInput =
  typeof ManagedClustersListBySubscriptionInput.Type;

// Output Schema
export const ManagedClustersListBySubscriptionOutput =
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
export type ManagedClustersListBySubscriptionOutput =
  typeof ManagedClustersListBySubscriptionOutput.Type;

// The operation
/**
 * Gets all Service Fabric cluster resources created or in the process of being created in the subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const ManagedClustersListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ManagedClustersListBySubscriptionInput,
    outputSchema: ManagedClustersListBySubscriptionOutput,
  }));
// Input Schema
export const ManagedClustersUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}",
      apiVersion: "2026-02-01",
    }),
  );
export type ManagedClustersUpdateInput = typeof ManagedClustersUpdateInput.Type;

// Output Schema
export const ManagedClustersUpdateOutput =
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
export type ManagedClustersUpdateOutput =
  typeof ManagedClustersUpdateOutput.Type;

// The operation
/**
 * Update the tags of of a Service Fabric managed cluster resource with the specified name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster resource.
 */
export const ManagedClustersUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ManagedClustersUpdateInput,
    outputSchema: ManagedClustersUpdateOutput,
  }),
);
// Input Schema
export const ManagedClusterVersionGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    clusterVersion: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ServiceFabric/locations/{location}/managedClusterVersions/{clusterVersion}",
      apiVersion: "2026-02-01",
    }),
  );
export type ManagedClusterVersionGetInput =
  typeof ManagedClusterVersionGetInput.Type;

// Output Schema
export const ManagedClusterVersionGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        clusterCodeVersion: Schema.optional(Schema.String),
        supportExpiryUtc: Schema.optional(Schema.String),
        osType: Schema.optional(Schema.Literals(["Windows"])),
      }),
    ),
  });
export type ManagedClusterVersionGetOutput =
  typeof ManagedClusterVersionGetOutput.Type;

// The operation
/**
 * Gets information about a Service Fabric managed cluster code version available in the specified location.
 *
 * Gets information about an available Service Fabric managed cluster code version.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The location for the cluster code versions. This is different from cluster location.
 * @param clusterVersion - The cluster code version.
 */
export const ManagedClusterVersionGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ManagedClusterVersionGetInput,
    outputSchema: ManagedClusterVersionGetOutput,
  }),
);
// Input Schema
export const ManagedClusterVersionGetByEnvironmentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    environment: Schema.Literals(["Windows"]).pipe(T.PathParam()),
    clusterVersion: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ServiceFabric/locations/{location}/environments/{environment}/managedClusterVersions/{clusterVersion}",
      apiVersion: "2026-02-01",
    }),
  );
export type ManagedClusterVersionGetByEnvironmentInput =
  typeof ManagedClusterVersionGetByEnvironmentInput.Type;

// Output Schema
export const ManagedClusterVersionGetByEnvironmentOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        clusterCodeVersion: Schema.optional(Schema.String),
        supportExpiryUtc: Schema.optional(Schema.String),
        osType: Schema.optional(Schema.Literals(["Windows"])),
      }),
    ),
  });
export type ManagedClusterVersionGetByEnvironmentOutput =
  typeof ManagedClusterVersionGetByEnvironmentOutput.Type;

// The operation
/**
 * Gets information about a Service Fabric cluster code version available for the specified environment.
 *
 * Gets information about an available Service Fabric cluster code version by environment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The location for the cluster code versions. This is different from cluster location.
 * @param environment - The operating system of the cluster.
 * @param clusterVersion - The cluster code version.
 */
export const ManagedClusterVersionGetByEnvironment =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ManagedClusterVersionGetByEnvironmentInput,
    outputSchema: ManagedClusterVersionGetByEnvironmentOutput,
  }));
// Input Schema
export const ManagedClusterVersionListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ServiceFabric/locations/{location}/managedClusterVersions",
      apiVersion: "2026-02-01",
    }),
  );
export type ManagedClusterVersionListInput =
  typeof ManagedClusterVersionListInput.Type;

// Output Schema
export const ManagedClusterVersionListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      id: Schema.optional(Schema.String),
      name: Schema.optional(Schema.String),
      type: Schema.optional(Schema.String),
      properties: Schema.optional(
        Schema.Struct({
          clusterCodeVersion: Schema.optional(Schema.String),
          supportExpiryUtc: Schema.optional(Schema.String),
          osType: Schema.optional(Schema.Literals(["Windows"])),
        }),
      ),
    }),
  );
export type ManagedClusterVersionListOutput =
  typeof ManagedClusterVersionListOutput.Type;

// The operation
/**
 * Gets the list of Service Fabric cluster code versions available for the specified location.
 *
 * Gets all available code versions for Service Fabric cluster resources by location.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The location for the cluster code versions. This is different from cluster location.
 */
export const ManagedClusterVersionList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ManagedClusterVersionListInput,
    outputSchema: ManagedClusterVersionListOutput,
  }),
);
// Input Schema
export const ManagedClusterVersionListByEnvironmentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    environment: Schema.Literals(["Windows"]).pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ServiceFabric/locations/{location}/environments/{environment}/managedClusterVersions",
      apiVersion: "2026-02-01",
    }),
  );
export type ManagedClusterVersionListByEnvironmentInput =
  typeof ManagedClusterVersionListByEnvironmentInput.Type;

// Output Schema
export const ManagedClusterVersionListByEnvironmentOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      id: Schema.optional(Schema.String),
      name: Schema.optional(Schema.String),
      type: Schema.optional(Schema.String),
      properties: Schema.optional(
        Schema.Struct({
          clusterCodeVersion: Schema.optional(Schema.String),
          supportExpiryUtc: Schema.optional(Schema.String),
          osType: Schema.optional(Schema.Literals(["Windows"])),
        }),
      ),
    }),
  );
export type ManagedClusterVersionListByEnvironmentOutput =
  typeof ManagedClusterVersionListByEnvironmentOutput.Type;

// The operation
/**
 * Gets the list of Service Fabric cluster code versions available for the specified environment.
 *
 * Gets all available code versions for Service Fabric cluster resources by environment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The location for the cluster code versions. This is different from cluster location.
 * @param environment - The operating system of the cluster.
 */
export const ManagedClusterVersionListByEnvironment =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ManagedClusterVersionListByEnvironmentInput,
    outputSchema: ManagedClusterVersionListByEnvironmentOutput,
  }));
// Input Schema
export const ManagedMaintenanceWindowStatusGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/getMaintenanceWindowStatus",
      apiVersion: "2026-02-01",
    }),
  );
export type ManagedMaintenanceWindowStatusGetInput =
  typeof ManagedMaintenanceWindowStatusGetInput.Type;

// Output Schema
export const ManagedMaintenanceWindowStatusGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    isWindowEnabled: Schema.optional(Schema.Boolean),
    isRegionReady: Schema.optional(Schema.Boolean),
    isWindowActive: Schema.optional(Schema.Boolean),
    canApplyUpdates: Schema.optional(Schema.Boolean),
    lastWindowStatusUpdateAtUTC: Schema.optional(Schema.String),
    lastWindowStartTimeUTC: Schema.optional(Schema.String),
    lastWindowEndTimeUTC: Schema.optional(Schema.String),
  });
export type ManagedMaintenanceWindowStatusGetOutput =
  typeof ManagedMaintenanceWindowStatusGetOutput.Type;

// The operation
/**
 * Action to get Maintenance Window Status of the Service Fabric Managed Clusters.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster resource.
 */
export const managedMaintenanceWindowStatusGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ManagedMaintenanceWindowStatusGetInput,
    outputSchema: ManagedMaintenanceWindowStatusGetOutput,
  }));
// Input Schema
export const ManagedUnsupportedVMSizesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    vmSize: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ServiceFabric/locations/{location}/managedUnsupportedVMSizes/{vmSize}",
      apiVersion: "2026-02-01",
    }),
  );
export type ManagedUnsupportedVMSizesGetInput =
  typeof ManagedUnsupportedVMSizesGetInput.Type;

// Output Schema
export const ManagedUnsupportedVMSizesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        size: Schema.optional(Schema.String),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  });
export type ManagedUnsupportedVMSizesGetOutput =
  typeof ManagedUnsupportedVMSizesGetOutput.Type;

// The operation
/**
 * Get unsupported vm size for Service Fabric Managed Clusters.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The location for the cluster code versions. This is different from cluster location.
 * @param vmSize - VM Size name.
 */
export const managedUnsupportedVMSizesGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ManagedUnsupportedVMSizesGetInput,
    outputSchema: ManagedUnsupportedVMSizesGetOutput,
  }));
// Input Schema
export const ManagedUnsupportedVMSizesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ServiceFabric/locations/{location}/managedUnsupportedVMSizes",
      apiVersion: "2026-02-01",
    }),
  );
export type ManagedUnsupportedVMSizesListInput =
  typeof ManagedUnsupportedVMSizesListInput.Type;

// Output Schema
export const ManagedUnsupportedVMSizesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        properties: Schema.optional(
          Schema.Struct({
            size: Schema.optional(Schema.String),
          }),
        ),
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type ManagedUnsupportedVMSizesListOutput =
  typeof ManagedUnsupportedVMSizesListOutput.Type;

// The operation
/**
 * Get the lists of unsupported vm sizes for Service Fabric Managed Clusters.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The location for the cluster code versions. This is different from cluster location.
 */
export const managedUnsupportedVMSizesList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ManagedUnsupportedVMSizesListInput,
    outputSchema: ManagedUnsupportedVMSizesListOutput,
  }));
// Input Schema
export const NodeTypesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    nodeTypeName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        isPrimary: Schema.Boolean,
        vmInstanceCount: Schema.Number,
        dataDiskSizeGB: Schema.optional(Schema.Number),
        dataDiskType: Schema.optional(
          Schema.Literals([
            "Standard_LRS",
            "StandardSSD_LRS",
            "Premium_LRS",
            "PremiumV2_LRS",
            "StandardSSD_ZRS",
            "Premium_ZRS",
          ]),
        ),
        dataDiskLetter: Schema.optional(Schema.String),
        placementProperties: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        capacities: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        applicationPorts: Schema.optional(
          Schema.Struct({
            startPort: Schema.Number,
            endPort: Schema.Number,
          }),
        ),
        ephemeralPorts: Schema.optional(
          Schema.Struct({
            startPort: Schema.Number,
            endPort: Schema.Number,
          }),
        ),
        vmSize: Schema.optional(Schema.String),
        vmImagePublisher: Schema.optional(Schema.String),
        vmImageOffer: Schema.optional(Schema.String),
        vmImageSku: Schema.optional(Schema.String),
        vmImageVersion: Schema.optional(Schema.String),
        vmSecrets: Schema.optional(
          Schema.Array(
            Schema.Struct({
              sourceVault: Schema.Struct({
                id: Schema.optional(Schema.String),
              }),
              vaultCertificates: Schema.Array(
                Schema.Struct({
                  certificateUrl: Schema.String,
                  certificateStore: Schema.String,
                }),
              ),
            }),
          ),
        ),
        vmExtensions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.String,
              properties: Schema.Struct({
                publisher: Schema.String,
                type: Schema.String,
                typeHandlerVersion: Schema.String,
                autoUpgradeMinorVersion: Schema.optional(Schema.Boolean),
                settings: Schema.optional(Schema.Unknown),
                protectedSettings: Schema.optional(Schema.Unknown),
                forceUpdateTag: Schema.optional(Schema.String),
                provisionAfterExtensions: Schema.optional(
                  Schema.Array(Schema.String),
                ),
                provisioningState: Schema.optional(Schema.String),
                enableAutomaticUpgrade: Schema.optional(Schema.Boolean),
                setupOrder: Schema.optional(
                  Schema.Array(Schema.Literals(["BeforeSFRuntime"])),
                ),
              }),
            }),
          ),
        ),
        vmManagedIdentity: Schema.optional(
          Schema.Struct({
            userAssignedIdentities: Schema.optional(
              Schema.Array(Schema.String),
            ),
          }),
        ),
        isStateless: Schema.optional(Schema.Boolean),
        multiplePlacementGroups: Schema.optional(Schema.Boolean),
        frontendConfigurations: Schema.optional(
          Schema.Array(
            Schema.Struct({
              ipAddressType: Schema.optional(Schema.Literals(["IPv4", "IPv6"])),
              loadBalancerBackendAddressPoolId: Schema.optional(Schema.String),
              loadBalancerInboundNatPoolId: Schema.optional(Schema.String),
              applicationGatewayBackendAddressPoolId: Schema.optional(
                Schema.String,
              ),
            }),
          ),
        ),
        networkSecurityRules: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.String,
              description: Schema.optional(Schema.String),
              protocol: Schema.Literals([
                "http",
                "https",
                "tcp",
                "udp",
                "icmp",
                "ah",
                "esp",
              ]),
              sourceAddressPrefixes: Schema.optional(
                Schema.Array(Schema.String),
              ),
              destinationAddressPrefixes: Schema.optional(
                Schema.Array(Schema.String),
              ),
              sourcePortRanges: Schema.optional(Schema.Array(Schema.String)),
              destinationPortRanges: Schema.optional(
                Schema.Array(Schema.String),
              ),
              sourceAddressPrefix: Schema.optional(Schema.String),
              destinationAddressPrefix: Schema.optional(Schema.String),
              sourcePortRange: Schema.optional(Schema.String),
              destinationPortRange: Schema.optional(Schema.String),
              access: Schema.Literals(["allow", "deny"]),
              priority: Schema.Number,
              direction: Schema.Literals(["inbound", "outbound"]),
            }),
          ),
        ),
        additionalDataDisks: Schema.optional(
          Schema.Array(
            Schema.Struct({
              lun: Schema.Number,
              diskSizeGB: Schema.Number,
              diskType: Schema.Literals([
                "Standard_LRS",
                "StandardSSD_LRS",
                "Premium_LRS",
                "PremiumV2_LRS",
                "StandardSSD_ZRS",
                "Premium_ZRS",
              ]),
              diskLetter: Schema.String,
            }),
          ),
        ),
        enableEncryptionAtHost: Schema.optional(Schema.Boolean),
        provisioningState: Schema.optional(
          Schema.Literals([
            "None",
            "Creating",
            "Created",
            "Updating",
            "Succeeded",
            "Failed",
            "Canceled",
            "Deleting",
            "Deleted",
            "Other",
          ]),
        ),
        enableAcceleratedNetworking: Schema.optional(Schema.Boolean),
        useDefaultPublicLoadBalancer: Schema.optional(Schema.Boolean),
        useTempDataDisk: Schema.optional(Schema.Boolean),
        enableOverProvisioning: Schema.optional(Schema.Boolean),
        zones: Schema.optional(Schema.Array(Schema.String)),
        isSpotVM: Schema.optional(Schema.Boolean),
        hostGroupId: Schema.optional(Schema.String),
        useEphemeralOSDisk: Schema.optional(Schema.Boolean),
        spotRestoreTimeout: Schema.optional(Schema.String),
        evictionPolicy: Schema.optional(
          Schema.Literals(["Delete", "Deallocate"]),
        ),
        vmImageResourceId: Schema.optional(Schema.String),
        subnetId: Schema.optional(Schema.String),
        vmSetupActions: Schema.optional(
          Schema.Array(Schema.Literals(["EnableContainers", "EnableHyperV"])),
        ),
        securityType: Schema.optional(
          Schema.Literals(["TrustedLaunch", "Standard", "ConfidentialVM"]),
        ),
        securityEncryptionType: Schema.optional(
          Schema.Literals(["DiskWithVMGuestState", "VMGuestStateOnly"]),
        ),
        secureBootEnabled: Schema.optional(Schema.Boolean),
        enableNodePublicIP: Schema.optional(Schema.Boolean),
        enableNodePublicIPv6: Schema.optional(Schema.Boolean),
        vmSharedGalleryImageId: Schema.optional(Schema.String),
        natGatewayId: Schema.optional(Schema.String),
        natConfigurations: Schema.optional(
          Schema.Array(
            Schema.Struct({
              backendPort: Schema.optional(Schema.Number),
              frontendPortRangeStart: Schema.optional(Schema.Number),
              frontendPortRangeEnd: Schema.optional(Schema.Number),
            }),
          ),
        ),
        vmImagePlan: Schema.optional(
          Schema.Struct({
            name: Schema.optional(Schema.String),
            product: Schema.optional(Schema.String),
            promotionCode: Schema.optional(Schema.String),
            publisher: Schema.optional(Schema.String),
          }),
        ),
        serviceArtifactReferenceId: Schema.optional(Schema.String),
        dscpConfigurationId: Schema.optional(Schema.String),
        additionalNetworkInterfaceConfigurations: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.String,
              enableAcceleratedNetworking: Schema.optional(Schema.Boolean),
              dscpConfiguration: Schema.optional(
                Schema.Struct({
                  id: Schema.optional(Schema.String),
                }),
              ),
              ipConfigurations: Schema.Array(
                Schema.Struct({
                  name: Schema.String,
                  applicationGatewayBackendAddressPools: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        id: Schema.optional(Schema.String),
                      }),
                    ),
                  ),
                  loadBalancerBackendAddressPools: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        id: Schema.optional(Schema.String),
                      }),
                    ),
                  ),
                  loadBalancerInboundNatPools: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        id: Schema.optional(Schema.String),
                      }),
                    ),
                  ),
                  subnet: Schema.optional(
                    Schema.Struct({
                      id: Schema.optional(Schema.String),
                    }),
                  ),
                  privateIPAddressVersion: Schema.optional(
                    Schema.Literals(["IPv4", "IPv6"]),
                  ),
                  publicIPAddressConfiguration: Schema.optional(
                    Schema.Struct({
                      name: Schema.String,
                      ipTags: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            ipTagType: Schema.String,
                            tag: Schema.String,
                          }),
                        ),
                      ),
                      publicIPAddressVersion: Schema.optional(
                        Schema.Literals(["IPv4", "IPv6"]),
                      ),
                    }),
                  ),
                }),
              ),
            }),
          ),
        ),
        computerNamePrefix: Schema.optional(Schema.String),
        vmApplications: Schema.optional(
          Schema.Array(
            Schema.Struct({
              configurationReference: Schema.optional(Schema.String),
              enableAutomaticUpgrade: Schema.optional(Schema.Boolean),
              order: Schema.optional(Schema.Number),
              packageReferenceId: Schema.String,
              vmGalleryTags: Schema.optional(Schema.String),
              treatFailureAsDeploymentFailure: Schema.optional(Schema.Boolean),
            }),
          ),
        ),
        zoneBalance: Schema.optional(Schema.Boolean),
        isOutboundOnly: Schema.optional(Schema.Boolean),
        enableResilientEphemeralOsDisk: Schema.optional(Schema.Boolean),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        tier: Schema.optional(Schema.String),
        capacity: Schema.Number,
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/nodeTypes/{nodeTypeName}",
      apiVersion: "2026-02-01",
    }),
  );
export type NodeTypesCreateOrUpdateInput =
  typeof NodeTypesCreateOrUpdateInput.Type;

// Output Schema
export const NodeTypesCreateOrUpdateOutput =
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
export type NodeTypesCreateOrUpdateOutput =
  typeof NodeTypesCreateOrUpdateOutput.Type;

// The operation
/**
 * Create or update a Service Fabric node type of a given managed cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster resource.
 * @param nodeTypeName - The name of the node type.
 */
export const NodeTypesCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NodeTypesCreateOrUpdateInput,
    outputSchema: NodeTypesCreateOrUpdateOutput,
  }),
);
// Input Schema
export const NodeTypesDeallocateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    nodeTypeName: Schema.String.pipe(T.PathParam()),
    nodes: Schema.optional(Schema.Array(Schema.String)),
    force: Schema.optional(Schema.Boolean),
    updateType: Schema.optional(
      Schema.Literals(["Default", "ByUpgradeDomain"]),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/nodeTypes/{nodeTypeName}/deallocate",
      apiVersion: "2026-02-01",
    }),
  );
export type NodeTypesDeallocateInput = typeof NodeTypesDeallocateInput.Type;

// Output Schema
export const NodeTypesDeallocateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type NodeTypesDeallocateOutput = typeof NodeTypesDeallocateOutput.Type;

// The operation
/**
 * Deallocates one or more nodes on the node type. It will disable the fabric nodes, trigger a shutdown on the VMs and release them from the cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster resource.
 * @param nodeTypeName - The name of the node type.
 */
export const NodeTypesDeallocate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: NodeTypesDeallocateInput,
  outputSchema: NodeTypesDeallocateOutput,
}));
// Input Schema
export const NodeTypesDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  nodeTypeName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/nodeTypes/{nodeTypeName}",
    apiVersion: "2026-02-01",
  }),
);
export type NodeTypesDeleteInput = typeof NodeTypesDeleteInput.Type;

// Output Schema
export const NodeTypesDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type NodeTypesDeleteOutput = typeof NodeTypesDeleteOutput.Type;

// The operation
/**
 * Delete a Service Fabric node type of a given managed cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster resource.
 * @param nodeTypeName - The name of the node type.
 */
export const NodeTypesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: NodeTypesDeleteInput,
  outputSchema: NodeTypesDeleteOutput,
}));
// Input Schema
export const NodeTypesDeleteNodeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    nodeTypeName: Schema.String.pipe(T.PathParam()),
    nodes: Schema.optional(Schema.Array(Schema.String)),
    force: Schema.optional(Schema.Boolean),
    updateType: Schema.optional(
      Schema.Literals(["Default", "ByUpgradeDomain"]),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/nodeTypes/{nodeTypeName}/deleteNode",
      apiVersion: "2026-02-01",
    }),
  );
export type NodeTypesDeleteNodeInput = typeof NodeTypesDeleteNodeInput.Type;

// Output Schema
export const NodeTypesDeleteNodeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type NodeTypesDeleteNodeOutput = typeof NodeTypesDeleteNodeOutput.Type;

// The operation
/**
 * Deletes one or more nodes on the node type. It will disable the fabric nodes, trigger a delete on the VMs and removes the state from the cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster resource.
 * @param nodeTypeName - The name of the node type.
 */
export const NodeTypesDeleteNode = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: NodeTypesDeleteNodeInput,
  outputSchema: NodeTypesDeleteNodeOutput,
}));
// Input Schema
export const NodeTypesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  nodeTypeName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/nodeTypes/{nodeTypeName}",
    apiVersion: "2026-02-01",
  }),
);
export type NodeTypesGetInput = typeof NodeTypesGetInput.Type;

// Output Schema
export const NodeTypesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type NodeTypesGetOutput = typeof NodeTypesGetOutput.Type;

// The operation
/**
 * Get a Service Fabric node type of a given managed cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster resource.
 * @param nodeTypeName - The name of the node type.
 */
export const NodeTypesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: NodeTypesGetInput,
  outputSchema: NodeTypesGetOutput,
}));
// Input Schema
export const NodeTypeSkusListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  nodeTypeName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/nodeTypes/{nodeTypeName}/skus",
    apiVersion: "2026-02-01",
  }),
);
export type NodeTypeSkusListInput = typeof NodeTypeSkusListInput.Type;

// Output Schema
export const NodeTypeSkusListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    value: Schema.Array(
      Schema.Struct({
        resourceType: Schema.optional(Schema.String),
        sku: Schema.optional(
          Schema.Struct({
            name: Schema.optional(Schema.String),
            tier: Schema.optional(Schema.String),
          }),
        ),
        capacity: Schema.optional(
          Schema.Struct({
            minimum: Schema.optional(Schema.Number),
            maximum: Schema.optional(Schema.Number),
            default: Schema.optional(Schema.Number),
            scaleType: Schema.optional(
              Schema.Literals(["None", "Manual", "Automatic"]),
            ),
          }),
        ),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  },
);
export type NodeTypeSkusListOutput = typeof NodeTypeSkusListOutput.Type;

// The operation
/**
 * Get a Service Fabric node type supported SKUs.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster resource.
 * @param nodeTypeName - The name of the node type.
 */
export const NodeTypeSkusList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: NodeTypeSkusListInput,
  outputSchema: NodeTypeSkusListOutput,
}));
// Input Schema
export const NodeTypesListByManagedClustersInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/nodeTypes",
      apiVersion: "2026-02-01",
    }),
  );
export type NodeTypesListByManagedClustersInput =
  typeof NodeTypesListByManagedClustersInput.Type;

// Output Schema
export const NodeTypesListByManagedClustersOutput =
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
export type NodeTypesListByManagedClustersOutput =
  typeof NodeTypesListByManagedClustersOutput.Type;

// The operation
/**
 * Gets all Node types of the specified managed cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster resource.
 */
export const NodeTypesListByManagedClusters =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NodeTypesListByManagedClustersInput,
    outputSchema: NodeTypesListByManagedClustersOutput,
  }));
// Input Schema
export const NodeTypesRedeployInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    nodeTypeName: Schema.String.pipe(T.PathParam()),
    nodes: Schema.optional(Schema.Array(Schema.String)),
    force: Schema.optional(Schema.Boolean),
    updateType: Schema.optional(
      Schema.Literals(["Default", "ByUpgradeDomain"]),
    ),
  },
).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/nodeTypes/{nodeTypeName}/redeploy",
    apiVersion: "2026-02-01",
  }),
);
export type NodeTypesRedeployInput = typeof NodeTypesRedeployInput.Type;

// Output Schema
export const NodeTypesRedeployOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type NodeTypesRedeployOutput = typeof NodeTypesRedeployOutput.Type;

// The operation
/**
 * Redeploys one or more nodes on the node type. It will disable the fabric nodes, trigger a shut down on the VMs, move them to a new node, and power them back on.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster resource.
 * @param nodeTypeName - The name of the node type.
 */
export const NodeTypesRedeploy = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: NodeTypesRedeployInput,
  outputSchema: NodeTypesRedeployOutput,
}));
// Input Schema
export const NodeTypesReimageInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  nodeTypeName: Schema.String.pipe(T.PathParam()),
  nodes: Schema.optional(Schema.Array(Schema.String)),
  force: Schema.optional(Schema.Boolean),
  updateType: Schema.optional(Schema.Literals(["Default", "ByUpgradeDomain"])),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/nodeTypes/{nodeTypeName}/reimage",
    apiVersion: "2026-02-01",
  }),
);
export type NodeTypesReimageInput = typeof NodeTypesReimageInput.Type;

// Output Schema
export const NodeTypesReimageOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type NodeTypesReimageOutput = typeof NodeTypesReimageOutput.Type;

// The operation
/**
 * Reimages one or more nodes on the node type. It will disable the fabric nodes, trigger a reimage on the VMs and activate the nodes back again.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster resource.
 * @param nodeTypeName - The name of the node type.
 */
export const NodeTypesReimage = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: NodeTypesReimageInput,
  outputSchema: NodeTypesReimageOutput,
}));
// Input Schema
export const NodeTypesRestartInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  nodeTypeName: Schema.String.pipe(T.PathParam()),
  nodes: Schema.optional(Schema.Array(Schema.String)),
  force: Schema.optional(Schema.Boolean),
  updateType: Schema.optional(Schema.Literals(["Default", "ByUpgradeDomain"])),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/nodeTypes/{nodeTypeName}/restart",
    apiVersion: "2026-02-01",
  }),
);
export type NodeTypesRestartInput = typeof NodeTypesRestartInput.Type;

// Output Schema
export const NodeTypesRestartOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type NodeTypesRestartOutput = typeof NodeTypesRestartOutput.Type;

// The operation
/**
 * Restarts one or more nodes on the node type. It will disable the fabric nodes, trigger a restart on the VMs and activate the nodes back again.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster resource.
 * @param nodeTypeName - The name of the node type.
 */
export const NodeTypesRestart = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: NodeTypesRestartInput,
  outputSchema: NodeTypesRestartOutput,
}));
// Input Schema
export const NodeTypesStartInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  nodeTypeName: Schema.String.pipe(T.PathParam()),
  nodes: Schema.optional(Schema.Array(Schema.String)),
  force: Schema.optional(Schema.Boolean),
  updateType: Schema.optional(Schema.Literals(["Default", "ByUpgradeDomain"])),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/nodeTypes/{nodeTypeName}/start",
    apiVersion: "2026-02-01",
  }),
);
export type NodeTypesStartInput = typeof NodeTypesStartInput.Type;

// Output Schema
export const NodeTypesStartOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type NodeTypesStartOutput = typeof NodeTypesStartOutput.Type;

// The operation
/**
 * Starts one or more nodes on the node type. It will trigger an allocation of the fabric node if needed and activate them.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster resource.
 * @param nodeTypeName - The name of the node type.
 */
export const NodeTypesStart = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: NodeTypesStartInput,
  outputSchema: NodeTypesStartOutput,
}));
// Input Schema
export const NodeTypesUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  nodeTypeName: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  sku: Schema.optional(
    Schema.Struct({
      name: Schema.optional(Schema.String),
      tier: Schema.optional(Schema.String),
      capacity: Schema.Number,
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/nodeTypes/{nodeTypeName}",
    apiVersion: "2026-02-01",
  }),
);
export type NodeTypesUpdateInput = typeof NodeTypesUpdateInput.Type;

// Output Schema
export const NodeTypesUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type NodeTypesUpdateOutput = typeof NodeTypesUpdateOutput.Type;

// The operation
/**
 * Update the configuration of a node type of a given managed cluster, only updating tags or capacity.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster resource.
 * @param nodeTypeName - The name of the node type.
 */
export const NodeTypesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: NodeTypesUpdateInput,
  outputSchema: NodeTypesUpdateOutput,
}));
// Input Schema
export const OperationResultsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    operationId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ServiceFabric/locations/{location}/managedClusterOperationResults/{operationId}",
      apiVersion: "2026-02-01",
    }),
  );
export type OperationResultsGetInput = typeof OperationResultsGetInput.Type;

// Output Schema
export const OperationResultsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type OperationResultsGetOutput = typeof OperationResultsGetOutput.Type;

// The operation
/**
 * Get long running operation result.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The name of Azure region.
 * @param operationId - operation identifier.
 */
export const OperationResultsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationResultsGetInput,
  outputSchema: OperationResultsGetOutput,
}));
// Input Schema
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.ServiceFabric/operations",
    apiVersion: "2026-02-01",
  }),
);
export type OperationsListInput = typeof OperationsListInput.Type;

// Output Schema
export const OperationsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
      origin: Schema.optional(Schema.String),
      nextLink: Schema.optional(Schema.String),
    }),
  ),
  nextLink: Schema.optional(Schema.String),
});
export type OperationsListOutput = typeof OperationsListOutput.Type;

// The operation
/**
 * Lists all of the available Service Fabric resource provider API operations.
 *
 * Get the list of available Service Fabric resource provider API operations.
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
    location: Schema.String.pipe(T.PathParam()),
    operationId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ServiceFabric/locations/{location}/managedClusterOperations/{operationId}",
      apiVersion: "2026-02-01",
    }),
  );
export type OperationStatusGetInput = typeof OperationStatusGetInput.Type;

// Output Schema
export const OperationStatusGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    percentComplete: Schema.optional(Schema.Number),
    status: Schema.optional(Schema.String),
    error: Schema.optional(
      Schema.Struct({
        code: Schema.optional(Schema.String),
        message: Schema.optional(Schema.String),
      }),
    ),
  });
export type OperationStatusGetOutput = typeof OperationStatusGetOutput.Type;

// The operation
/**
 * Get long running operation status.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The name of Azure region.
 * @param operationId - operation identifier.
 */
export const OperationStatusGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationStatusGetInput,
  outputSchema: OperationStatusGetOutput,
}));
// Input Schema
export const ServicesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    applicationName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        placementConstraints: Schema.optional(Schema.String),
        correlationScheme: Schema.optional(
          Schema.Array(
            Schema.Struct({
              scheme: Schema.Literals([
                "AlignedAffinity",
                "NonAlignedAffinity",
              ]),
              serviceName: Schema.String,
            }),
          ),
        ),
        serviceLoadMetrics: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.String,
              weight: Schema.optional(
                Schema.Literals(["Zero", "Low", "Medium", "High"]),
              ),
              primaryDefaultLoad: Schema.optional(Schema.Number),
              secondaryDefaultLoad: Schema.optional(Schema.Number),
              defaultLoad: Schema.optional(Schema.Number),
            }),
          ),
        ),
        servicePlacementPolicies: Schema.optional(
          Schema.Array(
            Schema.Struct({
              type: Schema.Literals([
                "InvalidDomain",
                "RequiredDomain",
                "PreferredPrimaryDomain",
                "RequiredDomainDistribution",
                "NonPartiallyPlaceService",
              ]),
            }),
          ),
        ),
        defaultMoveCost: Schema.optional(
          Schema.Literals(["Zero", "Low", "Medium", "High"]),
        ),
        scalingPolicies: Schema.optional(
          Schema.Array(
            Schema.Struct({
              scalingMechanism: Schema.Struct({
                kind: Schema.Literals([
                  "ScalePartitionInstanceCount",
                  "AddRemoveIncrementalNamedPartition",
                ]),
              }),
              scalingTrigger: Schema.Struct({
                kind: Schema.Literals([
                  "AveragePartitionLoadTrigger",
                  "AverageServiceLoadTrigger",
                ]),
              }),
            }),
          ),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/applications/{applicationName}/services/{serviceName}",
      apiVersion: "2026-02-01",
    }),
  );
export type ServicesCreateOrUpdateInput =
  typeof ServicesCreateOrUpdateInput.Type;

// Output Schema
export const ServicesCreateOrUpdateOutput =
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
export type ServicesCreateOrUpdateOutput =
  typeof ServicesCreateOrUpdateOutput.Type;

// The operation
/**
 * Create or update a Service Fabric managed service resource with the specified name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster resource.
 * @param applicationName - The name of the application resource.
 * @param serviceName - The name of the service resource in the format of {applicationName}~{serviceName}.
 */
export const ServicesCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ServicesCreateOrUpdateInput,
    outputSchema: ServicesCreateOrUpdateOutput,
  }),
);
// Input Schema
export const ServicesDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  applicationName: Schema.String.pipe(T.PathParam()),
  serviceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/applications/{applicationName}/services/{serviceName}",
    apiVersion: "2026-02-01",
  }),
);
export type ServicesDeleteInput = typeof ServicesDeleteInput.Type;

// Output Schema
export const ServicesDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ServicesDeleteOutput = typeof ServicesDeleteOutput.Type;

// The operation
/**
 * Delete a Service Fabric managed service resource with the specified name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster resource.
 * @param applicationName - The name of the application resource.
 * @param serviceName - The name of the service resource in the format of {applicationName}~{serviceName}.
 */
export const ServicesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ServicesDeleteInput,
  outputSchema: ServicesDeleteOutput,
}));
// Input Schema
export const ServicesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  applicationName: Schema.String.pipe(T.PathParam()),
  serviceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/applications/{applicationName}/services/{serviceName}",
    apiVersion: "2026-02-01",
  }),
);
export type ServicesGetInput = typeof ServicesGetInput.Type;

// Output Schema
export const ServicesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type ServicesGetOutput = typeof ServicesGetOutput.Type;

// The operation
/**
 * Get a Service Fabric service resource created or in the process of being created in the Service Fabric managed application resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster resource.
 * @param applicationName - The name of the application resource.
 * @param serviceName - The name of the service resource in the format of {applicationName}~{serviceName}.
 */
export const ServicesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ServicesGetInput,
  outputSchema: ServicesGetOutput,
}));
// Input Schema
export const ServicesListByApplicationsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    applicationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/applications/{applicationName}/services",
      apiVersion: "2026-02-01",
    }),
  );
export type ServicesListByApplicationsInput =
  typeof ServicesListByApplicationsInput.Type;

// Output Schema
export const ServicesListByApplicationsOutput =
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
export type ServicesListByApplicationsOutput =
  typeof ServicesListByApplicationsOutput.Type;

// The operation
/**
 * Gets all service resources created or in the process of being created in the Service Fabric managed application resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster resource.
 * @param applicationName - The name of the application resource.
 */
export const ServicesListByApplications = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ServicesListByApplicationsInput,
    outputSchema: ServicesListByApplicationsOutput,
  }),
);
// Input Schema
export const ServicesRestartReplicaInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    applicationName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    partitionId: Schema.String,
    replicaIds: Schema.Array(Schema.Number),
    restartKind: Schema.Literals(["Simultaneous"]),
    forceRestart: Schema.optional(Schema.Boolean),
    timeout: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/applications/{applicationName}/services/{serviceName}/restartReplica",
      apiVersion: "2026-02-01",
    }),
  );
export type ServicesRestartReplicaInput =
  typeof ServicesRestartReplicaInput.Type;

// Output Schema
export const ServicesRestartReplicaOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ServicesRestartReplicaOutput =
  typeof ServicesRestartReplicaOutput.Type;

// The operation
/**
 * A long-running resource action.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster resource.
 * @param applicationName - The name of the application resource.
 * @param serviceName - The name of the service resource in the format of {applicationName}~{serviceName}.
 */
export const ServicesRestartReplica = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ServicesRestartReplicaInput,
    outputSchema: ServicesRestartReplicaOutput,
  }),
);
// Input Schema
export const ServicesUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  applicationName: Schema.String.pipe(T.PathParam()),
  serviceName: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/applications/{applicationName}/services/{serviceName}",
    apiVersion: "2026-02-01",
  }),
);
export type ServicesUpdateInput = typeof ServicesUpdateInput.Type;

// Output Schema
export const ServicesUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type ServicesUpdateOutput = typeof ServicesUpdateOutput.Type;

// The operation
/**
 * Updates the tags of a service resource of a given managed cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster resource.
 * @param applicationName - The name of the application resource.
 * @param serviceName - The name of the service resource in the format of {applicationName}~{serviceName}.
 */
export const ServicesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ServicesUpdateInput,
  outputSchema: ServicesUpdateOutput,
}));
