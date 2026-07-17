/**
 * Azure Servicefabricmanagedclusters API
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
export interface ApplicationsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  applicationName: string;
  properties?: {
    managedIdentities?: { name: string; principalId: string }[];
    provisioningState?: string;
    version?: string;
    parameters?: Record<string, string>;
    upgradePolicy?: {
      applicationHealthPolicy?: {
        considerWarningAsError: boolean;
        maxPercentUnhealthyDeployedApplications: number;
        defaultServiceTypeHealthPolicy?: {
          maxPercentUnhealthyServices: number;
          maxPercentUnhealthyPartitionsPerService: number;
          maxPercentUnhealthyReplicasPerPartition: number;
        };
        serviceTypeHealthPolicyMap?: Record<
          string,
          {
            maxPercentUnhealthyServices: number;
            maxPercentUnhealthyPartitionsPerService: number;
            maxPercentUnhealthyReplicasPerPartition: number;
          }
        >;
      };
      forceRestart?: boolean;
      rollingUpgradeMonitoringPolicy?: {
        failureAction: "Rollback" | "Manual";
        healthCheckWaitDuration: string;
        healthCheckStableDuration: string;
        healthCheckRetryTimeout: string;
        upgradeTimeout: string;
        upgradeDomainTimeout: string;
      };
      instanceCloseDelayDuration?: number;
      upgradeMode?: "Monitored" | "UnmonitoredAuto";
      upgradeReplicaSetCheckTimeout?: number;
      recreateApplication?: boolean;
    };
  };
  tags?: Record<string, string>;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned, UserAssigned";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
  location?: string;
}
export const ApplicationsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Codec<ApplicationsCreateOrUpdateInput>;

// Output Schema
export interface ApplicationsCreateOrUpdateOutput {
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
export const ApplicationsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ApplicationsCreateOrUpdateOutput>;

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
export const ApplicationsCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ApplicationsCreateOrUpdateInput,
  outputSchema: ApplicationsCreateOrUpdateOutput,
}));
// Input Schema
export interface ApplicationsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  applicationName: string;
}
export const ApplicationsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Codec<ApplicationsDeleteInput>;

// Output Schema
export type ApplicationsDeleteOutput = void;
export const ApplicationsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ApplicationsDeleteOutput>;

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
export const ApplicationsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: ApplicationsDeleteInput,
  outputSchema: ApplicationsDeleteOutput,
}));
// Input Schema
export interface ApplicationsFetchHealthInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  applicationName: string;
  eventsHealthStateFilter?:
    | "Default"
    | "None"
    | "Ok"
    | "Warning"
    | "Error"
    | "All";
  deployedApplicationsHealthStateFilter?:
    | "Default"
    | "None"
    | "Ok"
    | "Warning"
    | "Error"
    | "All";
  servicesHealthStateFilter?:
    | "Default"
    | "None"
    | "Ok"
    | "Warning"
    | "Error"
    | "All";
  excludeHealthStatistics?: boolean;
  timeout?: number;
}
export const ApplicationsFetchHealthInput =
  /*@__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Codec<ApplicationsFetchHealthInput>;

// Output Schema
export type ApplicationsFetchHealthOutput = void;
export const ApplicationsFetchHealthOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ApplicationsFetchHealthOutput>;

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
export const ApplicationsFetchHealth = /*@__PURE__*/ API.make(() => ({
  inputSchema: ApplicationsFetchHealthInput,
  outputSchema: ApplicationsFetchHealthOutput,
}));
// Input Schema
export interface ApplicationsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  applicationName: string;
}
export const ApplicationsGetInput = /*@__PURE__*/ Schema.Struct({
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
) as unknown as Schema.Codec<ApplicationsGetInput>;

// Output Schema
export interface ApplicationsGetOutput {
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
export const ApplicationsGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ApplicationsGetOutput>;

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
export const ApplicationsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ApplicationsGetInput,
  outputSchema: ApplicationsGetOutput,
}));
// Input Schema
export interface ApplicationsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
}
export const ApplicationsListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/applications",
    apiVersion: "2026-02-01",
  }),
) as unknown as Schema.Codec<ApplicationsListInput>;

// Output Schema
export interface ApplicationsListOutput {
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
export const ApplicationsListOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ApplicationsListOutput>;

// The operation
/**
 * Gets all managed application resources created or in the process of being created in the Service Fabric cluster resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster resource.
 */
export const ApplicationsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: ApplicationsListInput,
  outputSchema: ApplicationsListOutput,
}));
// Input Schema
export interface ApplicationsReadUpgradeInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  applicationName: string;
}
export const ApplicationsReadUpgradeInput =
  /*@__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Codec<ApplicationsReadUpgradeInput>;

// Output Schema
export type ApplicationsReadUpgradeOutput = void;
export const ApplicationsReadUpgradeOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ApplicationsReadUpgradeOutput>;

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
export const ApplicationsReadUpgrade = /*@__PURE__*/ API.make(() => ({
  inputSchema: ApplicationsReadUpgradeInput,
  outputSchema: ApplicationsReadUpgradeOutput,
}));
// Input Schema
export interface ApplicationsRestartDeployedCodePackageInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  applicationName: string;
  nodeName: string;
  serviceManifestName: string;
  codePackageName: string;
  codePackageInstanceId: string;
  servicePackageActivationId?: string;
}
export const ApplicationsRestartDeployedCodePackageInput =
  /*@__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Codec<ApplicationsRestartDeployedCodePackageInput>;

// Output Schema
export type ApplicationsRestartDeployedCodePackageOutput = void;
export const ApplicationsRestartDeployedCodePackageOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ApplicationsRestartDeployedCodePackageOutput>;

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
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ApplicationsRestartDeployedCodePackageInput,
    outputSchema: ApplicationsRestartDeployedCodePackageOutput,
  }));
// Input Schema
export interface ApplicationsResumeUpgradeInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  applicationName: string;
  upgradeDomainName?: string;
}
export const ApplicationsResumeUpgradeInput =
  /*@__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Codec<ApplicationsResumeUpgradeInput>;

// Output Schema
export type ApplicationsResumeUpgradeOutput = void;
export const ApplicationsResumeUpgradeOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ApplicationsResumeUpgradeOutput>;

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
export const ApplicationsResumeUpgrade = /*@__PURE__*/ API.make(() => ({
  inputSchema: ApplicationsResumeUpgradeInput,
  outputSchema: ApplicationsResumeUpgradeOutput,
}));
// Input Schema
export interface ApplicationsStartRollbackInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  applicationName: string;
}
export const ApplicationsStartRollbackInput =
  /*@__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Codec<ApplicationsStartRollbackInput>;

// Output Schema
export type ApplicationsStartRollbackOutput = void;
export const ApplicationsStartRollbackOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ApplicationsStartRollbackOutput>;

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
export const ApplicationsStartRollback = /*@__PURE__*/ API.make(() => ({
  inputSchema: ApplicationsStartRollbackInput,
  outputSchema: ApplicationsStartRollbackOutput,
}));
// Input Schema
export interface ApplicationsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  applicationName: string;
  tags?: Record<string, string>;
  properties?: { parameters?: Record<string, string> };
}
export const ApplicationsUpdateInput =
  /*@__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Codec<ApplicationsUpdateInput>;

// Output Schema
export interface ApplicationsUpdateOutput {
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
export const ApplicationsUpdateOutput =
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
  }) as unknown as Schema.Codec<ApplicationsUpdateOutput>;

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
export const ApplicationsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ApplicationsUpdateInput,
  outputSchema: ApplicationsUpdateOutput,
}));
// Input Schema
export interface ApplicationsUpdateUpgradeInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  applicationName: string;
  name: string;
  upgradeKind: "Rolling";
  applicationHealthPolicy?: {
    considerWarningAsError: boolean;
    maxPercentUnhealthyDeployedApplications: number;
    defaultServiceTypeHealthPolicy?: {
      maxPercentUnhealthyServices: number;
      maxPercentUnhealthyPartitionsPerService: number;
      maxPercentUnhealthyReplicasPerPartition: number;
    };
    serviceTypeHealthPolicyMap?: Record<
      string,
      {
        maxPercentUnhealthyServices: number;
        maxPercentUnhealthyPartitionsPerService: number;
        maxPercentUnhealthyReplicasPerPartition: number;
      }
    >;
  };
  updateDescription?: {
    rollingUpgradeMode: "UnmonitoredAuto" | "UnmonitoredManual" | "Monitored";
    forceRestart?: boolean;
    replicaSetCheckTimeoutInMilliseconds?: number;
    failureAction?: "Rollback" | "Manual";
    healthCheckWaitDurationInMilliseconds?: string;
    healthCheckStableDurationInMilliseconds?: string;
    healthCheckRetryTimeoutInMilliseconds?: string;
    upgradeTimeoutInMilliseconds?: string;
    upgradeDomainTimeoutInMilliseconds?: string;
    instanceCloseDelayDurationInSeconds?: number;
  };
}
export const ApplicationsUpdateUpgradeInput =
  /*@__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Codec<ApplicationsUpdateUpgradeInput>;

// Output Schema
export type ApplicationsUpdateUpgradeOutput = void;
export const ApplicationsUpdateUpgradeOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ApplicationsUpdateUpgradeOutput>;

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
export const ApplicationsUpdateUpgrade = /*@__PURE__*/ API.make(() => ({
  inputSchema: ApplicationsUpdateUpgradeInput,
  outputSchema: ApplicationsUpdateUpgradeOutput,
}));
// Input Schema
export interface ApplicationTypesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  applicationTypeName: string;
  properties?: { provisioningState?: string };
  tags?: Record<string, string>;
  location?: string;
}
export const ApplicationTypesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Codec<ApplicationTypesCreateOrUpdateInput>;

// Output Schema
export interface ApplicationTypesCreateOrUpdateOutput {
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
export const ApplicationTypesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ApplicationTypesCreateOrUpdateOutput>;

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
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ApplicationTypesCreateOrUpdateInput,
    outputSchema: ApplicationTypesCreateOrUpdateOutput,
  }));
// Input Schema
export interface ApplicationTypesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  applicationTypeName: string;
}
export const ApplicationTypesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Codec<ApplicationTypesDeleteInput>;

// Output Schema
export type ApplicationTypesDeleteOutput = void;
export const ApplicationTypesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ApplicationTypesDeleteOutput>;

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
export const ApplicationTypesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: ApplicationTypesDeleteInput,
  outputSchema: ApplicationTypesDeleteOutput,
}));
// Input Schema
export interface ApplicationTypesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  applicationTypeName: string;
}
export const ApplicationTypesGetInput =
  /*@__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Codec<ApplicationTypesGetInput>;

// Output Schema
export interface ApplicationTypesGetOutput {
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
export const ApplicationTypesGetOutput =
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
  }) as unknown as Schema.Codec<ApplicationTypesGetOutput>;

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
export const ApplicationTypesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ApplicationTypesGetInput,
  outputSchema: ApplicationTypesGetOutput,
}));
// Input Schema
export interface ApplicationTypesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
}
export const ApplicationTypesListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/applicationTypes",
      apiVersion: "2026-02-01",
    }),
  ) as unknown as Schema.Codec<ApplicationTypesListInput>;

// Output Schema
export interface ApplicationTypesListOutput {
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
export const ApplicationTypesListOutput =
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
  }) as unknown as Schema.Codec<ApplicationTypesListOutput>;

// The operation
/**
 * Gets all application type name resources created or in the process of being created in the Service Fabric managed cluster resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster resource.
 */
export const ApplicationTypesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: ApplicationTypesListInput,
  outputSchema: ApplicationTypesListOutput,
}));
// Input Schema
export interface ApplicationTypesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  applicationTypeName: string;
  tags?: Record<string, string>;
}
export const ApplicationTypesUpdateInput =
  /*@__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Codec<ApplicationTypesUpdateInput>;

// Output Schema
export interface ApplicationTypesUpdateOutput {
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
export const ApplicationTypesUpdateOutput =
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
  }) as unknown as Schema.Codec<ApplicationTypesUpdateOutput>;

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
export const ApplicationTypesUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ApplicationTypesUpdateInput,
  outputSchema: ApplicationTypesUpdateOutput,
}));
// Input Schema
export interface ApplicationTypeVersionsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  applicationTypeName: string;
  version: string;
  properties?: { provisioningState?: string; appPackageUrl: string };
  tags?: Record<string, string>;
  location?: string;
}
export const ApplicationTypeVersionsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Codec<ApplicationTypeVersionsCreateOrUpdateInput>;

// Output Schema
export interface ApplicationTypeVersionsCreateOrUpdateOutput {
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
export const ApplicationTypeVersionsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ApplicationTypeVersionsCreateOrUpdateOutput>;

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
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ApplicationTypeVersionsCreateOrUpdateInput,
    outputSchema: ApplicationTypeVersionsCreateOrUpdateOutput,
  }));
// Input Schema
export interface ApplicationTypeVersionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  applicationTypeName: string;
  version: string;
}
export const ApplicationTypeVersionsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Codec<ApplicationTypeVersionsDeleteInput>;

// Output Schema
export type ApplicationTypeVersionsDeleteOutput = void;
export const ApplicationTypeVersionsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ApplicationTypeVersionsDeleteOutput>;

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
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ApplicationTypeVersionsDeleteInput,
    outputSchema: ApplicationTypeVersionsDeleteOutput,
  }));
// Input Schema
export interface ApplicationTypeVersionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  applicationTypeName: string;
  version: string;
}
export const ApplicationTypeVersionsGetInput =
  /*@__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Codec<ApplicationTypeVersionsGetInput>;

// Output Schema
export interface ApplicationTypeVersionsGetOutput {
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
export const ApplicationTypeVersionsGetOutput =
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
  }) as unknown as Schema.Codec<ApplicationTypeVersionsGetOutput>;

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
export const ApplicationTypeVersionsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ApplicationTypeVersionsGetInput,
  outputSchema: ApplicationTypeVersionsGetOutput,
}));
// Input Schema
export interface ApplicationTypeVersionsListByApplicationTypesInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  applicationTypeName: string;
}
export const ApplicationTypeVersionsListByApplicationTypesInput =
  /*@__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Codec<ApplicationTypeVersionsListByApplicationTypesInput>;

// Output Schema
export interface ApplicationTypeVersionsListByApplicationTypesOutput {
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
export const ApplicationTypeVersionsListByApplicationTypesOutput =
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
  }) as unknown as Schema.Codec<ApplicationTypeVersionsListByApplicationTypesOutput>;

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
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ApplicationTypeVersionsListByApplicationTypesInput,
    outputSchema: ApplicationTypeVersionsListByApplicationTypesOutput,
  }));
// Input Schema
export interface ApplicationTypeVersionsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  applicationTypeName: string;
  version: string;
  tags?: Record<string, string>;
}
export const ApplicationTypeVersionsUpdateInput =
  /*@__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Codec<ApplicationTypeVersionsUpdateInput>;

// Output Schema
export interface ApplicationTypeVersionsUpdateOutput {
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
export const ApplicationTypeVersionsUpdateOutput =
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
  }) as unknown as Schema.Codec<ApplicationTypeVersionsUpdateOutput>;

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
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ApplicationTypeVersionsUpdateInput,
    outputSchema: ApplicationTypeVersionsUpdateOutput,
  }));
// Input Schema
export interface ManagedApplyMaintenanceWindowPostInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
}
export const ManagedApplyMaintenanceWindowPostInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/applyMaintenanceWindow",
      apiVersion: "2026-02-01",
    }),
  ) as unknown as Schema.Codec<ManagedApplyMaintenanceWindowPostInput>;

// Output Schema
export type ManagedApplyMaintenanceWindowPostOutput = void;
export const ManagedApplyMaintenanceWindowPostOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ManagedApplyMaintenanceWindowPostOutput>;

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
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ManagedApplyMaintenanceWindowPostInput,
    outputSchema: ManagedApplyMaintenanceWindowPostOutput,
  }));
// Input Schema
export interface ManagedAzResiliencyStatusGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
}
export const ManagedAzResiliencyStatusGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/getazresiliencystatus",
      apiVersion: "2026-02-01",
    }),
  ) as unknown as Schema.Codec<ManagedAzResiliencyStatusGetInput>;

// Output Schema
export interface ManagedAzResiliencyStatusGetOutput {
  baseResourceStatus?: {
    resourceName?: string;
    resourceType?: string;
    isZoneResilient?: boolean;
    details?: string;
  }[];
  isClusterZoneResilient?: boolean;
}
export const ManagedAzResiliencyStatusGetOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<ManagedAzResiliencyStatusGetOutput>;

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
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ManagedAzResiliencyStatusGetInput,
    outputSchema: ManagedAzResiliencyStatusGetOutput,
  }));
// Input Schema
export interface ManagedClustersCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  properties?: {
    dnsName: string;
    fqdn?: string;
    ipv4Address?: string;
    clusterId?: string;
    clusterState?:
      | "WaitingForNodes"
      | "Deploying"
      | "BaselineUpgrade"
      | "Upgrading"
      | "UpgradeFailed"
      | "Ready";
    clusterCertificateThumbprints?: string[];
    clientConnectionPort?: number;
    httpGatewayConnectionPort?: number;
    adminUserName: string;
    adminPassword?: string | Redacted.Redacted<string>;
    loadBalancingRules?: {
      frontendPort: number;
      backendPort: number;
      protocol: "tcp" | "udp";
      probePort?: number;
      probeProtocol: "tcp" | "http" | "https";
      probeRequestPath?: string;
      loadDistribution?: string;
    }[];
    allowRdpAccess?: boolean;
    networkSecurityRules?: {
      name: string;
      description?: string;
      protocol: "http" | "https" | "tcp" | "udp" | "icmp" | "ah" | "esp";
      sourceAddressPrefixes?: string[];
      destinationAddressPrefixes?: string[];
      sourcePortRanges?: string[];
      destinationPortRanges?: string[];
      sourceAddressPrefix?: string;
      destinationAddressPrefix?: string;
      sourcePortRange?: string;
      destinationPortRange?: string;
      access: "allow" | "deny";
      priority: number;
      direction: "inbound" | "outbound";
    }[];
    clients?: {
      isAdmin: boolean;
      thumbprint?: string;
      commonName?: string;
      issuerThumbprint?: string;
    }[];
    azureActiveDirectory?: {
      tenantId?: string;
      clusterApplication?: string;
      clientApplication?: string;
    };
    fabricSettings?: {
      name: string;
      parameters: { name: string; value: string }[];
    }[];
    provisioningState?:
      | "None"
      | "Creating"
      | "Created"
      | "Updating"
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Deleting"
      | "Deleted"
      | "Other";
    clusterCodeVersion?: string;
    clusterUpgradeMode?: "Automatic" | "Manual";
    clusterUpgradeCadence?: "Wave0" | "Wave1" | "Wave2";
    addonFeatures?: (
      | "DnsService"
      | "BackupRestoreService"
      | "ResourceMonitorService"
    )[];
    enableAutoOSUpgrade?: boolean;
    zonalResiliency?: boolean;
    applicationTypeVersionsCleanupPolicy?: { maxUnusedVersionsToKeep: number };
    enableIpv6?: boolean;
    subnetId?: string;
    ipTags?: { ipTagType: string; tag: string }[];
    ipv6Address?: string;
    enableServicePublicIP?: boolean;
    auxiliarySubnets?: {
      name: string;
      enableIpv6?: boolean;
      privateEndpointNetworkPolicies?: "enabled" | "disabled";
      privateLinkServiceNetworkPolicies?: "enabled" | "disabled";
      networkSecurityGroupId?: string;
    }[];
    serviceEndpoints?: {
      service: string;
      locations?: string[];
      networkIdentifier?: string;
    }[];
    zonalUpdateMode?: "Standard" | "Fast";
    useCustomVnet?: boolean;
    publicIPPrefixId?: string;
    publicIPv6PrefixId?: string;
    ddosProtectionPlanId?: string;
    upgradeDescription?: {
      forceRestart?: boolean;
      healthPolicy?: {
        maxPercentUnhealthyNodes: number;
        maxPercentUnhealthyApplications: number;
      };
      deltaHealthPolicy?: {
        maxPercentDeltaUnhealthyNodes: number;
        maxPercentUpgradeDomainDeltaUnhealthyNodes?: number;
        maxPercentDeltaUnhealthyApplications?: number;
      };
      monitoringPolicy?: {
        healthCheckWaitDuration: string;
        healthCheckStableDuration: string;
        healthCheckRetryTimeout: string;
        upgradeTimeout: string;
        upgradeDomainTimeout: string;
      };
      upgradeReplicaSetCheckTimeout?: string;
    };
    httpGatewayTokenAuthConnectionPort?: number;
    enableHttpGatewayExclusiveAuthMode?: boolean;
    autoGeneratedDomainNameLabelScope?:
      | "TenantReuse"
      | "SubscriptionReuse"
      | "ResourceGroupReuse"
      | "NoReuse";
    allocatedOutboundPorts?: number;
    VMImage?: string;
    enableOutboundOnlyNodeTypes?: boolean;
    skipManagedNsgAssignment?: boolean;
  };
  etag?: string;
  sku: { name: "Basic" | "Standard" };
  tags?: Record<string, string>;
  location: string;
}
export const ManagedClustersCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Codec<ManagedClustersCreateOrUpdateInput>;

// Output Schema
export interface ManagedClustersCreateOrUpdateOutput {
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
export const ManagedClustersCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ManagedClustersCreateOrUpdateOutput>;

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
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ManagedClustersCreateOrUpdateInput,
    outputSchema: ManagedClustersCreateOrUpdateOutput,
  }));
// Input Schema
export interface ManagedClustersDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
}
export const ManagedClustersDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}",
      apiVersion: "2026-02-01",
    }),
  ) as unknown as Schema.Codec<ManagedClustersDeleteInput>;

// Output Schema
export type ManagedClustersDeleteOutput = void;
export const ManagedClustersDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ManagedClustersDeleteOutput>;

// The operation
/**
 * Delete a Service Fabric managed cluster resource with the specified name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster resource.
 */
export const ManagedClustersDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: ManagedClustersDeleteInput,
  outputSchema: ManagedClustersDeleteOutput,
}));
// Input Schema
export interface ManagedClustersGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
}
export const ManagedClustersGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}",
      apiVersion: "2026-02-01",
    }),
  ) as unknown as Schema.Codec<ManagedClustersGetInput>;

// Output Schema
export interface ManagedClustersGetOutput {
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
export const ManagedClustersGetOutput =
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
  }) as unknown as Schema.Codec<ManagedClustersGetOutput>;

// The operation
/**
 * Get a Service Fabric managed cluster resource created or in the process of being created in the specified resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster resource.
 */
export const ManagedClustersGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ManagedClustersGetInput,
  outputSchema: ManagedClustersGetOutput,
}));
// Input Schema
export interface ManagedClustersListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const ManagedClustersListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters",
      apiVersion: "2026-02-01",
    }),
  ) as unknown as Schema.Codec<ManagedClustersListByResourceGroupInput>;

// Output Schema
export interface ManagedClustersListByResourceGroupOutput {
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
export const ManagedClustersListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<ManagedClustersListByResourceGroupOutput>;

// The operation
/**
 * Gets all Service Fabric cluster resources created or in the process of being created in the resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ManagedClustersListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ManagedClustersListByResourceGroupInput,
    outputSchema: ManagedClustersListByResourceGroupOutput,
  }));
// Input Schema
export interface ManagedClustersListBySubscriptionInput {
  subscriptionId: string;
}
export const ManagedClustersListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ServiceFabric/managedClusters",
      apiVersion: "2026-02-01",
    }),
  ) as unknown as Schema.Codec<ManagedClustersListBySubscriptionInput>;

// Output Schema
export interface ManagedClustersListBySubscriptionOutput {
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
export const ManagedClustersListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<ManagedClustersListBySubscriptionOutput>;

// The operation
/**
 * Gets all Service Fabric cluster resources created or in the process of being created in the subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const ManagedClustersListBySubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ManagedClustersListBySubscriptionInput,
    outputSchema: ManagedClustersListBySubscriptionOutput,
  }));
// Input Schema
export interface ManagedClustersUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  tags?: Record<string, string>;
}
export const ManagedClustersUpdateInput =
  /*@__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Codec<ManagedClustersUpdateInput>;

// Output Schema
export interface ManagedClustersUpdateOutput {
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
export const ManagedClustersUpdateOutput =
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
  }) as unknown as Schema.Codec<ManagedClustersUpdateOutput>;

// The operation
/**
 * Update the tags of of a Service Fabric managed cluster resource with the specified name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the cluster resource.
 */
export const ManagedClustersUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ManagedClustersUpdateInput,
  outputSchema: ManagedClustersUpdateOutput,
}));
// Input Schema
export interface ManagedClusterVersionGetInput {
  subscriptionId: string;
  location: string;
  clusterVersion: string;
}
export const ManagedClusterVersionGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    clusterVersion: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ServiceFabric/locations/{location}/managedClusterVersions/{clusterVersion}",
      apiVersion: "2026-02-01",
    }),
  ) as unknown as Schema.Codec<ManagedClusterVersionGetInput>;

// Output Schema
export interface ManagedClusterVersionGetOutput {
  id?: string;
  name?: string;
  type?: string;
  properties?: {
    clusterCodeVersion?: string;
    supportExpiryUtc?: string;
    osType?: "Windows";
  };
}
export const ManagedClusterVersionGetOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<ManagedClusterVersionGetOutput>;

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
export const ManagedClusterVersionGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ManagedClusterVersionGetInput,
  outputSchema: ManagedClusterVersionGetOutput,
}));
// Input Schema
export interface ManagedClusterVersionGetByEnvironmentInput {
  subscriptionId: string;
  location: string;
  environment: "Windows";
  clusterVersion: string;
}
export const ManagedClusterVersionGetByEnvironmentInput =
  /*@__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Codec<ManagedClusterVersionGetByEnvironmentInput>;

// Output Schema
export interface ManagedClusterVersionGetByEnvironmentOutput {
  id?: string;
  name?: string;
  type?: string;
  properties?: {
    clusterCodeVersion?: string;
    supportExpiryUtc?: string;
    osType?: "Windows";
  };
}
export const ManagedClusterVersionGetByEnvironmentOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<ManagedClusterVersionGetByEnvironmentOutput>;

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
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ManagedClusterVersionGetByEnvironmentInput,
    outputSchema: ManagedClusterVersionGetByEnvironmentOutput,
  }));
// Input Schema
export interface ManagedClusterVersionListInput {
  subscriptionId: string;
  location: string;
}
export const ManagedClusterVersionListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ServiceFabric/locations/{location}/managedClusterVersions",
      apiVersion: "2026-02-01",
    }),
  ) as unknown as Schema.Codec<ManagedClusterVersionListInput>;

// Output Schema
export type ManagedClusterVersionListOutput = {
  id?: string;
  name?: string;
  type?: string;
  properties?: {
    clusterCodeVersion?: string;
    supportExpiryUtc?: string;
    osType?: "Windows";
  };
}[];
export const ManagedClusterVersionListOutput =
  /*@__PURE__*/ Schema.Array(
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
  ) as unknown as Schema.Codec<ManagedClusterVersionListOutput>;

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
export const ManagedClusterVersionList = /*@__PURE__*/ API.make(() => ({
  inputSchema: ManagedClusterVersionListInput,
  outputSchema: ManagedClusterVersionListOutput,
}));
// Input Schema
export interface ManagedClusterVersionListByEnvironmentInput {
  subscriptionId: string;
  location: string;
  environment: "Windows";
}
export const ManagedClusterVersionListByEnvironmentInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    environment: Schema.Literals(["Windows"]).pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ServiceFabric/locations/{location}/environments/{environment}/managedClusterVersions",
      apiVersion: "2026-02-01",
    }),
  ) as unknown as Schema.Codec<ManagedClusterVersionListByEnvironmentInput>;

// Output Schema
export type ManagedClusterVersionListByEnvironmentOutput = {
  id?: string;
  name?: string;
  type?: string;
  properties?: {
    clusterCodeVersion?: string;
    supportExpiryUtc?: string;
    osType?: "Windows";
  };
}[];
export const ManagedClusterVersionListByEnvironmentOutput =
  /*@__PURE__*/ Schema.Array(
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
  ) as unknown as Schema.Codec<ManagedClusterVersionListByEnvironmentOutput>;

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
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ManagedClusterVersionListByEnvironmentInput,
    outputSchema: ManagedClusterVersionListByEnvironmentOutput,
  }));
// Input Schema
export interface ManagedMaintenanceWindowStatusGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
}
export const ManagedMaintenanceWindowStatusGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/getMaintenanceWindowStatus",
      apiVersion: "2026-02-01",
    }),
  ) as unknown as Schema.Codec<ManagedMaintenanceWindowStatusGetInput>;

// Output Schema
export interface ManagedMaintenanceWindowStatusGetOutput {
  isWindowEnabled?: boolean;
  isRegionReady?: boolean;
  isWindowActive?: boolean;
  canApplyUpdates?: boolean;
  lastWindowStatusUpdateAtUTC?: string;
  lastWindowStartTimeUTC?: string;
  lastWindowEndTimeUTC?: string;
}
export const ManagedMaintenanceWindowStatusGetOutput =
  /*@__PURE__*/ Schema.Struct({
    isWindowEnabled: Schema.optional(Schema.Boolean),
    isRegionReady: Schema.optional(Schema.Boolean),
    isWindowActive: Schema.optional(Schema.Boolean),
    canApplyUpdates: Schema.optional(Schema.Boolean),
    lastWindowStatusUpdateAtUTC: Schema.optional(Schema.String),
    lastWindowStartTimeUTC: Schema.optional(Schema.String),
    lastWindowEndTimeUTC: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ManagedMaintenanceWindowStatusGetOutput>;

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
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ManagedMaintenanceWindowStatusGetInput,
    outputSchema: ManagedMaintenanceWindowStatusGetOutput,
  }));
// Input Schema
export interface ManagedUnsupportedVMSizesGetInput {
  subscriptionId: string;
  location: string;
  vmSize: string;
}
export const ManagedUnsupportedVMSizesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    vmSize: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ServiceFabric/locations/{location}/managedUnsupportedVMSizes/{vmSize}",
      apiVersion: "2026-02-01",
    }),
  ) as unknown as Schema.Codec<ManagedUnsupportedVMSizesGetInput>;

// Output Schema
export interface ManagedUnsupportedVMSizesGetOutput {
  properties?: { size?: string };
  id?: string;
  name?: string;
  type?: string;
}
export const ManagedUnsupportedVMSizesGetOutput =
  /*@__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        size: Schema.optional(Schema.String),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ManagedUnsupportedVMSizesGetOutput>;

// The operation
/**
 * Get unsupported vm size for Service Fabric Managed Clusters.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The location for the unsupported VM sizes. This is different from cluster location.
 * @param vmSize - VM Size name.
 */
export const managedUnsupportedVMSizesGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ManagedUnsupportedVMSizesGetInput,
    outputSchema: ManagedUnsupportedVMSizesGetOutput,
  }));
// Input Schema
export interface ManagedUnsupportedVMSizesListInput {
  subscriptionId: string;
  location: string;
}
export const ManagedUnsupportedVMSizesListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ServiceFabric/locations/{location}/managedUnsupportedVMSizes",
      apiVersion: "2026-02-01",
    }),
  ) as unknown as Schema.Codec<ManagedUnsupportedVMSizesListInput>;

// Output Schema
export interface ManagedUnsupportedVMSizesListOutput {
  value: {
    properties?: { size?: string };
    id?: string;
    name?: string;
    type?: string;
  }[];
  nextLink?: string;
}
export const ManagedUnsupportedVMSizesListOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<ManagedUnsupportedVMSizesListOutput>;

// The operation
/**
 * Get the lists of unsupported vm sizes for Service Fabric Managed Clusters.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The location for the unsupported VM sizes. This is different from cluster location.
 */
export const managedUnsupportedVMSizesList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ManagedUnsupportedVMSizesListInput,
    outputSchema: ManagedUnsupportedVMSizesListOutput,
  }));
// Input Schema
export interface NodeTypesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  nodeTypeName: string;
  properties?: {
    isPrimary: boolean;
    vmInstanceCount: number;
    dataDiskSizeGB?: number;
    dataDiskType?:
      | "Standard_LRS"
      | "StandardSSD_LRS"
      | "Premium_LRS"
      | "PremiumV2_LRS"
      | "StandardSSD_ZRS"
      | "Premium_ZRS";
    dataDiskLetter?: string;
    placementProperties?: Record<string, string>;
    capacities?: Record<string, string>;
    applicationPorts?: { startPort: number; endPort: number };
    ephemeralPorts?: { startPort: number; endPort: number };
    vmSize?: string;
    vmImagePublisher?: string;
    vmImageOffer?: string;
    vmImageSku?: string;
    vmImageVersion?: string;
    vmSecrets?: {
      sourceVault: { id?: string };
      vaultCertificates: { certificateUrl: string; certificateStore: string }[];
    }[];
    vmExtensions?: {
      name: string;
      properties: {
        publisher: string;
        type: string;
        typeHandlerVersion: string;
        autoUpgradeMinorVersion?: boolean;
        settings?: unknown;
        protectedSettings?: unknown;
        forceUpdateTag?: string;
        provisionAfterExtensions?: string[];
        provisioningState?: string;
        enableAutomaticUpgrade?: boolean;
        setupOrder?: "BeforeSFRuntime"[];
      };
    }[];
    vmManagedIdentity?: { userAssignedIdentities?: string[] };
    isStateless?: boolean;
    multiplePlacementGroups?: boolean;
    frontendConfigurations?: {
      ipAddressType?: "IPv4" | "IPv6";
      loadBalancerBackendAddressPoolId?: string;
      loadBalancerInboundNatPoolId?: string;
      applicationGatewayBackendAddressPoolId?: string;
    }[];
    networkSecurityRules?: {
      name: string;
      description?: string;
      protocol: "http" | "https" | "tcp" | "udp" | "icmp" | "ah" | "esp";
      sourceAddressPrefixes?: string[];
      destinationAddressPrefixes?: string[];
      sourcePortRanges?: string[];
      destinationPortRanges?: string[];
      sourceAddressPrefix?: string;
      destinationAddressPrefix?: string;
      sourcePortRange?: string;
      destinationPortRange?: string;
      access: "allow" | "deny";
      priority: number;
      direction: "inbound" | "outbound";
    }[];
    additionalDataDisks?: {
      lun: number;
      diskSizeGB: number;
      diskType:
        | "Standard_LRS"
        | "StandardSSD_LRS"
        | "Premium_LRS"
        | "PremiumV2_LRS"
        | "StandardSSD_ZRS"
        | "Premium_ZRS";
      diskLetter: string;
    }[];
    enableEncryptionAtHost?: boolean;
    provisioningState?:
      | "None"
      | "Creating"
      | "Created"
      | "Updating"
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Deleting"
      | "Deleted"
      | "Other";
    enableAcceleratedNetworking?: boolean;
    useDefaultPublicLoadBalancer?: boolean;
    useTempDataDisk?: boolean;
    enableOverProvisioning?: boolean;
    zones?: string[];
    isSpotVM?: boolean;
    hostGroupId?: string;
    useEphemeralOSDisk?: boolean;
    spotRestoreTimeout?: string;
    evictionPolicy?: "Delete" | "Deallocate";
    vmImageResourceId?: string;
    subnetId?: string;
    vmSetupActions?: ("EnableContainers" | "EnableHyperV")[];
    securityType?: "TrustedLaunch" | "Standard" | "ConfidentialVM";
    securityEncryptionType?: "DiskWithVMGuestState" | "VMGuestStateOnly";
    secureBootEnabled?: boolean;
    enableNodePublicIP?: boolean;
    enableNodePublicIPv6?: boolean;
    vmSharedGalleryImageId?: string;
    natGatewayId?: string;
    natConfigurations?: {
      backendPort?: number;
      frontendPortRangeStart?: number;
      frontendPortRangeEnd?: number;
    }[];
    vmImagePlan?: {
      name?: string;
      product?: string;
      promotionCode?: string;
      publisher?: string;
    };
    serviceArtifactReferenceId?: string;
    dscpConfigurationId?: string;
    additionalNetworkInterfaceConfigurations?: {
      name: string;
      enableAcceleratedNetworking?: boolean;
      dscpConfiguration?: { id?: string };
      ipConfigurations: {
        name: string;
        applicationGatewayBackendAddressPools?: { id?: string }[];
        loadBalancerBackendAddressPools?: { id?: string }[];
        loadBalancerInboundNatPools?: { id?: string }[];
        subnet?: { id?: string };
        privateIPAddressVersion?: "IPv4" | "IPv6";
        publicIPAddressConfiguration?: {
          name: string;
          ipTags?: { ipTagType: string; tag: string }[];
          publicIPAddressVersion?: "IPv4" | "IPv6";
        };
      }[];
    }[];
    computerNamePrefix?: string;
    vmApplications?: {
      configurationReference?: string;
      enableAutomaticUpgrade?: boolean;
      order?: number;
      packageReferenceId: string;
      vmGalleryTags?: string;
      treatFailureAsDeploymentFailure?: boolean;
    }[];
    zoneBalance?: boolean;
    isOutboundOnly?: boolean;
    enableResilientEphemeralOsDisk?: boolean;
  };
  tags?: Record<string, string>;
  sku?: { name?: string; tier?: string; capacity: number };
}
export const NodeTypesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Codec<NodeTypesCreateOrUpdateInput>;

// Output Schema
export interface NodeTypesCreateOrUpdateOutput {
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
export const NodeTypesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<NodeTypesCreateOrUpdateOutput>;

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
export const NodeTypesCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: NodeTypesCreateOrUpdateInput,
  outputSchema: NodeTypesCreateOrUpdateOutput,
}));
// Input Schema
export interface NodeTypesDeallocateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  nodeTypeName: string;
  nodes?: string[];
  force?: boolean;
  updateType?: "Default" | "ByUpgradeDomain";
}
export const NodeTypesDeallocateInput =
  /*@__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Codec<NodeTypesDeallocateInput>;

// Output Schema
export type NodeTypesDeallocateOutput = void;
export const NodeTypesDeallocateOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<NodeTypesDeallocateOutput>;

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
export const NodeTypesDeallocate = /*@__PURE__*/ API.make(() => ({
  inputSchema: NodeTypesDeallocateInput,
  outputSchema: NodeTypesDeallocateOutput,
}));
// Input Schema
export interface NodeTypesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  nodeTypeName: string;
}
export const NodeTypesDeleteInput = /*@__PURE__*/ Schema.Struct({
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
) as unknown as Schema.Codec<NodeTypesDeleteInput>;

// Output Schema
export type NodeTypesDeleteOutput = void;
export const NodeTypesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<NodeTypesDeleteOutput>;

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
export const NodeTypesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: NodeTypesDeleteInput,
  outputSchema: NodeTypesDeleteOutput,
}));
// Input Schema
export interface NodeTypesDeleteNodeInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  nodeTypeName: string;
  nodes?: string[];
  force?: boolean;
  updateType?: "Default" | "ByUpgradeDomain";
}
export const NodeTypesDeleteNodeInput =
  /*@__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Codec<NodeTypesDeleteNodeInput>;

// Output Schema
export type NodeTypesDeleteNodeOutput = void;
export const NodeTypesDeleteNodeOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<NodeTypesDeleteNodeOutput>;

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
export const NodeTypesDeleteNode = /*@__PURE__*/ API.make(() => ({
  inputSchema: NodeTypesDeleteNodeInput,
  outputSchema: NodeTypesDeleteNodeOutput,
}));
// Input Schema
export interface NodeTypesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  nodeTypeName: string;
}
export const NodeTypesGetInput = /*@__PURE__*/ Schema.Struct({
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
) as unknown as Schema.Codec<NodeTypesGetInput>;

// Output Schema
export interface NodeTypesGetOutput {
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
export const NodeTypesGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<NodeTypesGetOutput>;

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
export const NodeTypesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: NodeTypesGetInput,
  outputSchema: NodeTypesGetOutput,
}));
// Input Schema
export interface NodeTypeSkusListInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  nodeTypeName: string;
}
export const NodeTypeSkusListInput = /*@__PURE__*/ Schema.Struct({
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
) as unknown as Schema.Codec<NodeTypeSkusListInput>;

// Output Schema
export interface NodeTypeSkusListOutput {
  value: {
    resourceType?: string;
    sku?: { name?: string; tier?: string };
    capacity?: {
      minimum?: number;
      maximum?: number;
      default?: number;
      scaleType?: "None" | "Manual" | "Automatic";
    };
  }[];
  nextLink?: string;
}
export const NodeTypeSkusListOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<NodeTypeSkusListOutput>;

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
export const NodeTypeSkusList = /*@__PURE__*/ API.make(() => ({
  inputSchema: NodeTypeSkusListInput,
  outputSchema: NodeTypeSkusListOutput,
}));
// Input Schema
export interface NodeTypesListByManagedClustersInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
}
export const NodeTypesListByManagedClustersInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/nodeTypes",
      apiVersion: "2026-02-01",
    }),
  ) as unknown as Schema.Codec<NodeTypesListByManagedClustersInput>;

// Output Schema
export interface NodeTypesListByManagedClustersOutput {
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
export const NodeTypesListByManagedClustersOutput =
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
  }) as unknown as Schema.Codec<NodeTypesListByManagedClustersOutput>;

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
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NodeTypesListByManagedClustersInput,
    outputSchema: NodeTypesListByManagedClustersOutput,
  }));
// Input Schema
export interface NodeTypesRedeployInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  nodeTypeName: string;
  nodes?: string[];
  force?: boolean;
  updateType?: "Default" | "ByUpgradeDomain";
}
export const NodeTypesRedeployInput = /*@__PURE__*/ Schema.Struct({
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
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/nodeTypes/{nodeTypeName}/redeploy",
    apiVersion: "2026-02-01",
  }),
) as unknown as Schema.Codec<NodeTypesRedeployInput>;

// Output Schema
export type NodeTypesRedeployOutput = void;
export const NodeTypesRedeployOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<NodeTypesRedeployOutput>;

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
export const NodeTypesRedeploy = /*@__PURE__*/ API.make(() => ({
  inputSchema: NodeTypesRedeployInput,
  outputSchema: NodeTypesRedeployOutput,
}));
// Input Schema
export interface NodeTypesReimageInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  nodeTypeName: string;
  nodes?: string[];
  force?: boolean;
  updateType?: "Default" | "ByUpgradeDomain";
}
export const NodeTypesReimageInput = /*@__PURE__*/ Schema.Struct({
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
) as unknown as Schema.Codec<NodeTypesReimageInput>;

// Output Schema
export type NodeTypesReimageOutput = void;
export const NodeTypesReimageOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<NodeTypesReimageOutput>;

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
export const NodeTypesReimage = /*@__PURE__*/ API.make(() => ({
  inputSchema: NodeTypesReimageInput,
  outputSchema: NodeTypesReimageOutput,
}));
// Input Schema
export interface NodeTypesRestartInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  nodeTypeName: string;
  nodes?: string[];
  force?: boolean;
  updateType?: "Default" | "ByUpgradeDomain";
}
export const NodeTypesRestartInput = /*@__PURE__*/ Schema.Struct({
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
) as unknown as Schema.Codec<NodeTypesRestartInput>;

// Output Schema
export type NodeTypesRestartOutput = void;
export const NodeTypesRestartOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<NodeTypesRestartOutput>;

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
export const NodeTypesRestart = /*@__PURE__*/ API.make(() => ({
  inputSchema: NodeTypesRestartInput,
  outputSchema: NodeTypesRestartOutput,
}));
// Input Schema
export interface NodeTypesStartInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  nodeTypeName: string;
  nodes?: string[];
  force?: boolean;
  updateType?: "Default" | "ByUpgradeDomain";
}
export const NodeTypesStartInput = /*@__PURE__*/ Schema.Struct({
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
) as unknown as Schema.Codec<NodeTypesStartInput>;

// Output Schema
export type NodeTypesStartOutput = void;
export const NodeTypesStartOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<NodeTypesStartOutput>;

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
export const NodeTypesStart = /*@__PURE__*/ API.make(() => ({
  inputSchema: NodeTypesStartInput,
  outputSchema: NodeTypesStartOutput,
}));
// Input Schema
export interface NodeTypesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  nodeTypeName: string;
  tags?: Record<string, string>;
  sku?: { name?: string; tier?: string; capacity: number };
}
export const NodeTypesUpdateInput = /*@__PURE__*/ Schema.Struct({
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
) as unknown as Schema.Codec<NodeTypesUpdateInput>;

// Output Schema
export interface NodeTypesUpdateOutput {
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
export const NodeTypesUpdateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<NodeTypesUpdateOutput>;

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
export const NodeTypesUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: NodeTypesUpdateInput,
  outputSchema: NodeTypesUpdateOutput,
}));
// Input Schema
export interface OperationResultsGetInput {
  subscriptionId: string;
  location: string;
  operationId: string;
}
export const OperationResultsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    operationId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ServiceFabric/locations/{location}/managedClusterOperationResults/{operationId}",
      apiVersion: "2026-02-01",
    }),
  ) as unknown as Schema.Codec<OperationResultsGetInput>;

// Output Schema
export type OperationResultsGetOutput = void;
export const OperationResultsGetOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<OperationResultsGetOutput>;

// The operation
/**
 * Get long running operation result.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The name of Azure region.
 * @param operationId - operation identifier.
 */
export const OperationResultsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: OperationResultsGetInput,
  outputSchema: OperationResultsGetOutput,
}));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.ServiceFabric/operations",
    apiVersion: "2026-02-01",
  }),
) as unknown as Schema.Codec<OperationsListInput>;

// Output Schema
export interface OperationsListOutput {
  value: {
    name?: string;
    isDataAction?: boolean;
    display?: {
      provider?: string;
      resource?: string;
      operation?: string;
      description?: string;
    };
    origin?: string;
    nextLink?: string;
  }[];
  nextLink?: string;
}
export const OperationsListOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<OperationsListOutput>;

// The operation
/**
 * Lists all of the available Service Fabric resource provider API operations.
 *
 * Get the list of available Service Fabric resource provider API operations.
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface OperationStatusGetInput {
  subscriptionId: string;
  location: string;
  operationId: string;
}
export const OperationStatusGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    operationId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ServiceFabric/locations/{location}/managedClusterOperations/{operationId}",
      apiVersion: "2026-02-01",
    }),
  ) as unknown as Schema.Codec<OperationStatusGetInput>;

// Output Schema
export interface OperationStatusGetOutput {
  name?: string;
  startTime?: string;
  endTime?: string;
  percentComplete?: number;
  status?: string;
  error?: { code?: string; message?: string };
}
export const OperationStatusGetOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<OperationStatusGetOutput>;

// The operation
/**
 * Get long running operation status.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The name of Azure region.
 * @param operationId - operation identifier.
 */
export const OperationStatusGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: OperationStatusGetInput,
  outputSchema: OperationStatusGetOutput,
}));
// Input Schema
export interface ServicesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  applicationName: string;
  serviceName: string;
  properties?: {
    placementConstraints?: string;
    correlationScheme?: {
      scheme: "AlignedAffinity" | "NonAlignedAffinity";
      serviceName: string;
    }[];
    serviceLoadMetrics?: {
      name: string;
      weight?: "Zero" | "Low" | "Medium" | "High";
      primaryDefaultLoad?: number;
      secondaryDefaultLoad?: number;
      defaultLoad?: number;
    }[];
    servicePlacementPolicies?: {
      type:
        | "InvalidDomain"
        | "RequiredDomain"
        | "PreferredPrimaryDomain"
        | "RequiredDomainDistribution"
        | "NonPartiallyPlaceService";
    }[];
    defaultMoveCost?: "Zero" | "Low" | "Medium" | "High";
    scalingPolicies?: {
      scalingMechanism: {
        kind:
          | "ScalePartitionInstanceCount"
          | "AddRemoveIncrementalNamedPartition";
      };
      scalingTrigger: {
        kind: "AveragePartitionLoadTrigger" | "AverageServiceLoadTrigger";
      };
    }[];
  };
  tags?: Record<string, string>;
  location?: string;
}
export const ServicesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Codec<ServicesCreateOrUpdateInput>;

// Output Schema
export interface ServicesCreateOrUpdateOutput {
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
export const ServicesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ServicesCreateOrUpdateOutput>;

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
export const ServicesCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ServicesCreateOrUpdateInput,
  outputSchema: ServicesCreateOrUpdateOutput,
}));
// Input Schema
export interface ServicesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  applicationName: string;
  serviceName: string;
}
export const ServicesDeleteInput = /*@__PURE__*/ Schema.Struct({
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
) as unknown as Schema.Codec<ServicesDeleteInput>;

// Output Schema
export type ServicesDeleteOutput = void;
export const ServicesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ServicesDeleteOutput>;

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
export const ServicesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: ServicesDeleteInput,
  outputSchema: ServicesDeleteOutput,
}));
// Input Schema
export interface ServicesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  applicationName: string;
  serviceName: string;
}
export const ServicesGetInput = /*@__PURE__*/ Schema.Struct({
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
) as unknown as Schema.Codec<ServicesGetInput>;

// Output Schema
export interface ServicesGetOutput {
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
export const ServicesGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ServicesGetOutput>;

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
export const ServicesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ServicesGetInput,
  outputSchema: ServicesGetOutput,
}));
// Input Schema
export interface ServicesListByApplicationsInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  applicationName: string;
}
export const ServicesListByApplicationsInput =
  /*@__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Codec<ServicesListByApplicationsInput>;

// Output Schema
export interface ServicesListByApplicationsOutput {
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
export const ServicesListByApplicationsOutput =
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
  }) as unknown as Schema.Codec<ServicesListByApplicationsOutput>;

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
export const ServicesListByApplications = /*@__PURE__*/ API.make(() => ({
  inputSchema: ServicesListByApplicationsInput,
  outputSchema: ServicesListByApplicationsOutput,
}));
// Input Schema
export interface ServicesRestartReplicaInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  applicationName: string;
  serviceName: string;
  partitionId: string;
  replicaIds: number[];
  restartKind: "Simultaneous";
  forceRestart?: boolean;
  timeout?: number;
}
export const ServicesRestartReplicaInput =
  /*@__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Codec<ServicesRestartReplicaInput>;

// Output Schema
export type ServicesRestartReplicaOutput = void;
export const ServicesRestartReplicaOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ServicesRestartReplicaOutput>;

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
export const ServicesRestartReplica = /*@__PURE__*/ API.make(() => ({
  inputSchema: ServicesRestartReplicaInput,
  outputSchema: ServicesRestartReplicaOutput,
}));
// Input Schema
export interface ServicesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  applicationName: string;
  serviceName: string;
  tags?: Record<string, string>;
}
export const ServicesUpdateInput = /*@__PURE__*/ Schema.Struct({
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
) as unknown as Schema.Codec<ServicesUpdateInput>;

// Output Schema
export interface ServicesUpdateOutput {
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
export const ServicesUpdateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ServicesUpdateOutput>;

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
export const ServicesUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ServicesUpdateInput,
  outputSchema: ServicesUpdateOutput,
}));
