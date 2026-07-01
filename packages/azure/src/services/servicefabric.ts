/**
 * Azure Servicefabric API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface ApplicationsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  applicationName: string;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?:
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned, UserAssigned"
      | "None";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
  properties?: {
    typeVersion?: string;
    parameters?: Record<string, string>;
    upgradePolicy?: {
      upgradeReplicaSetCheckTimeout?: string;
      forceRestart?: boolean;
      rollingUpgradeMonitoringPolicy?: {
        failureAction?: "Rollback" | "Manual";
        healthCheckWaitDuration?: string;
        healthCheckStableDuration?: string;
        healthCheckRetryTimeout?: string;
        upgradeTimeout?: string;
        upgradeDomainTimeout?: string;
      };
      applicationHealthPolicy?: {
        considerWarningAsError?: boolean;
        maxPercentUnhealthyDeployedApplications?: number;
        defaultServiceTypeHealthPolicy?: {
          maxPercentUnhealthyServices?: number;
          maxPercentUnhealthyPartitionsPerService?: number;
          maxPercentUnhealthyReplicasPerPartition?: number;
        };
        serviceTypeHealthPolicyMap?: Record<
          string,
          {
            maxPercentUnhealthyServices?: number;
            maxPercentUnhealthyPartitionsPerService?: number;
            maxPercentUnhealthyReplicasPerPartition?: number;
          }
        >;
      };
      upgradeMode?:
        | "Invalid"
        | "UnmonitoredAuto"
        | "UnmonitoredManual"
        | "Monitored";
      recreateApplication?: boolean;
    };
    minimumNodes?: number;
    maximumNodes?: number;
    removeApplicationCapacity?: boolean;
    metrics?: {
      name?: string;
      maximumCapacity?: number;
      reservationCapacity?: number;
      totalApplicationCapacity?: number;
    }[];
    managedIdentities?: { name: string; principalId: string }[];
  };
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
  etag?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: string;
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: string;
    lastModifiedAt?: string;
  };
}
export const ApplicationsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    applicationName: Schema.String.pipe(T.PathParam()),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(
          Schema.Literals([
            "SystemAssigned",
            "UserAssigned",
            "SystemAssigned, UserAssigned",
            "None",
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
    properties: Schema.optional(
      Schema.Struct({
        typeVersion: Schema.optional(Schema.String),
        parameters: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        upgradePolicy: Schema.optional(
          Schema.Struct({
            upgradeReplicaSetCheckTimeout: Schema.optional(Schema.String),
            forceRestart: Schema.optional(Schema.Boolean),
            rollingUpgradeMonitoringPolicy: Schema.optional(
              Schema.Struct({
                failureAction: Schema.optional(
                  Schema.Literals(["Rollback", "Manual"]),
                ),
                healthCheckWaitDuration: Schema.optional(Schema.String),
                healthCheckStableDuration: Schema.optional(Schema.String),
                healthCheckRetryTimeout: Schema.optional(Schema.String),
                upgradeTimeout: Schema.optional(Schema.String),
                upgradeDomainTimeout: Schema.optional(Schema.String),
              }),
            ),
            applicationHealthPolicy: Schema.optional(
              Schema.Struct({
                considerWarningAsError: Schema.optional(Schema.Boolean),
                maxPercentUnhealthyDeployedApplications: Schema.optional(
                  Schema.Number,
                ),
                defaultServiceTypeHealthPolicy: Schema.optional(
                  Schema.Struct({
                    maxPercentUnhealthyServices: Schema.optional(Schema.Number),
                    maxPercentUnhealthyPartitionsPerService: Schema.optional(
                      Schema.Number,
                    ),
                    maxPercentUnhealthyReplicasPerPartition: Schema.optional(
                      Schema.Number,
                    ),
                  }),
                ),
                serviceTypeHealthPolicyMap: Schema.optional(
                  Schema.Record(
                    Schema.String,
                    Schema.Struct({
                      maxPercentUnhealthyServices: Schema.optional(
                        Schema.Number,
                      ),
                      maxPercentUnhealthyPartitionsPerService: Schema.optional(
                        Schema.Number,
                      ),
                      maxPercentUnhealthyReplicasPerPartition: Schema.optional(
                        Schema.Number,
                      ),
                    }),
                  ),
                ),
              }),
            ),
            upgradeMode: Schema.optional(
              Schema.Literals([
                "Invalid",
                "UnmonitoredAuto",
                "UnmonitoredManual",
                "Monitored",
              ]),
            ),
            recreateApplication: Schema.optional(Schema.Boolean),
          }),
        ),
        minimumNodes: Schema.optional(Schema.Number),
        maximumNodes: Schema.optional(Schema.Number),
        removeApplicationCapacity: Schema.optional(Schema.Boolean),
        metrics: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              maximumCapacity: Schema.optional(Schema.Number),
              reservationCapacity: Schema.optional(Schema.Number),
              totalApplicationCapacity: Schema.optional(Schema.Number),
            }),
          ),
        ),
        managedIdentities: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.String,
              principalId: Schema.String,
            }),
          ),
        ),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    etag: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(Schema.String),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(Schema.String),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}/applications/{applicationName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<ApplicationsCreateOrUpdateInput>;

// Output Schema
export type ApplicationsCreateOrUpdateOutput = void;
export const ApplicationsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ApplicationsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a Service Fabric application resource.
 *
 * Create or update a Service Fabric application resource with the specified name.
 *
 * @param subscriptionId - The customer subscription identifier.
 * @param resourceGroupName - The name of the resource group.
 * @param clusterName - The name of the cluster resource.
 * @param applicationName - The name of the application resource.
 * @param api-version - The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2021-06-01" for this specification.
 */
export const ApplicationsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ApplicationsCreateOrUpdateInput,
    outputSchema: ApplicationsCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface ApplicationsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  applicationName: string;
}
export const ApplicationsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    applicationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}/applications/{applicationName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<ApplicationsDeleteInput>;

// Output Schema
export type ApplicationsDeleteOutput = void;
export const ApplicationsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ApplicationsDeleteOutput>;

// The operation
/**
 * Deletes a Service Fabric application resource.
 *
 * Delete a Service Fabric application resource with the specified name.
 *
 * @param subscriptionId - The customer subscription identifier.
 * @param resourceGroupName - The name of the resource group.
 * @param clusterName - The name of the cluster resource.
 * @param applicationName - The name of the application resource.
 * @param api-version - The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2021-06-01" for this specification.
 */
export const ApplicationsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ApplicationsDeleteInput,
  outputSchema: ApplicationsDeleteOutput,
}));
// Input Schema
export interface ApplicationsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  applicationName: string;
}
export const ApplicationsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  applicationName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}/applications/{applicationName}",
    apiVersion: "2021-06-01",
  }),
) as unknown as Schema.Codec<ApplicationsGetInput>;

// Output Schema
export interface ApplicationsGetOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
  etag?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: string;
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: string;
    lastModifiedAt?: string;
  };
}
export const ApplicationsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  location: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  etag: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(Schema.String),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(Schema.String),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<ApplicationsGetOutput>;

// The operation
/**
 * Gets a Service Fabric application resource.
 *
 * Get a Service Fabric application resource created or in the process of being created in the Service Fabric cluster resource.
 *
 * @param subscriptionId - The customer subscription identifier.
 * @param resourceGroupName - The name of the resource group.
 * @param clusterName - The name of the cluster resource.
 * @param applicationName - The name of the application resource.
 * @param api-version - The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2021-06-01" for this specification.
 */
export const ApplicationsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ApplicationsGetInput,
  outputSchema: ApplicationsGetOutput,
}));
// Input Schema
export interface ApplicationsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
}
export const ApplicationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}/applications",
    apiVersion: "2021-06-01",
  }),
) as unknown as Schema.Codec<ApplicationsListInput>;

// Output Schema
export interface ApplicationsListOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    location?: string;
    tags?: Record<string, string>;
    etag?: string;
    systemData?: {
      createdBy?: string;
      createdByType?: string;
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: string;
      lastModifiedAt?: string;
    };
  }[];
  nextLink?: string;
}
export const ApplicationsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          location: Schema.optional(Schema.String),
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
          etag: Schema.optional(Schema.String),
          systemData: Schema.optional(
            Schema.Struct({
              createdBy: Schema.optional(Schema.String),
              createdByType: Schema.optional(Schema.String),
              createdAt: Schema.optional(Schema.String),
              lastModifiedBy: Schema.optional(Schema.String),
              lastModifiedByType: Schema.optional(Schema.String),
              lastModifiedAt: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  },
) as unknown as Schema.Codec<ApplicationsListOutput>;

// The operation
/**
 * Gets the list of application resources created in the specified Service Fabric cluster resource.
 *
 * Gets all application resources created or in the process of being created in the Service Fabric cluster resource.
 *
 * @param subscriptionId - The customer subscription identifier.
 * @param resourceGroupName - The name of the resource group.
 * @param clusterName - The name of the cluster resource.
 * @param api-version - The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2021-06-01" for this specification.
 */
export const ApplicationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ApplicationsListInput,
  outputSchema: ApplicationsListOutput,
}));
// Input Schema
export interface ApplicationsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  applicationName: string;
  properties?: {
    typeVersion?: string;
    parameters?: Record<string, string>;
    upgradePolicy?: {
      upgradeReplicaSetCheckTimeout?: string;
      forceRestart?: boolean;
      rollingUpgradeMonitoringPolicy?: {
        failureAction?: "Rollback" | "Manual";
        healthCheckWaitDuration?: string;
        healthCheckStableDuration?: string;
        healthCheckRetryTimeout?: string;
        upgradeTimeout?: string;
        upgradeDomainTimeout?: string;
      };
      applicationHealthPolicy?: {
        considerWarningAsError?: boolean;
        maxPercentUnhealthyDeployedApplications?: number;
        defaultServiceTypeHealthPolicy?: {
          maxPercentUnhealthyServices?: number;
          maxPercentUnhealthyPartitionsPerService?: number;
          maxPercentUnhealthyReplicasPerPartition?: number;
        };
        serviceTypeHealthPolicyMap?: Record<
          string,
          {
            maxPercentUnhealthyServices?: number;
            maxPercentUnhealthyPartitionsPerService?: number;
            maxPercentUnhealthyReplicasPerPartition?: number;
          }
        >;
      };
      upgradeMode?:
        | "Invalid"
        | "UnmonitoredAuto"
        | "UnmonitoredManual"
        | "Monitored";
      recreateApplication?: boolean;
    };
    minimumNodes?: number;
    maximumNodes?: number;
    removeApplicationCapacity?: boolean;
    metrics?: {
      name?: string;
      maximumCapacity?: number;
      reservationCapacity?: number;
      totalApplicationCapacity?: number;
    }[];
    managedIdentities?: { name: string; principalId: string }[];
  };
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
  etag?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: string;
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: string;
    lastModifiedAt?: string;
  };
}
export const ApplicationsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    applicationName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        typeVersion: Schema.optional(Schema.String),
        parameters: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        upgradePolicy: Schema.optional(
          Schema.Struct({
            upgradeReplicaSetCheckTimeout: Schema.optional(Schema.String),
            forceRestart: Schema.optional(Schema.Boolean),
            rollingUpgradeMonitoringPolicy: Schema.optional(
              Schema.Struct({
                failureAction: Schema.optional(
                  Schema.Literals(["Rollback", "Manual"]),
                ),
                healthCheckWaitDuration: Schema.optional(Schema.String),
                healthCheckStableDuration: Schema.optional(Schema.String),
                healthCheckRetryTimeout: Schema.optional(Schema.String),
                upgradeTimeout: Schema.optional(Schema.String),
                upgradeDomainTimeout: Schema.optional(Schema.String),
              }),
            ),
            applicationHealthPolicy: Schema.optional(
              Schema.Struct({
                considerWarningAsError: Schema.optional(Schema.Boolean),
                maxPercentUnhealthyDeployedApplications: Schema.optional(
                  Schema.Number,
                ),
                defaultServiceTypeHealthPolicy: Schema.optional(
                  Schema.Struct({
                    maxPercentUnhealthyServices: Schema.optional(Schema.Number),
                    maxPercentUnhealthyPartitionsPerService: Schema.optional(
                      Schema.Number,
                    ),
                    maxPercentUnhealthyReplicasPerPartition: Schema.optional(
                      Schema.Number,
                    ),
                  }),
                ),
                serviceTypeHealthPolicyMap: Schema.optional(
                  Schema.Record(
                    Schema.String,
                    Schema.Struct({
                      maxPercentUnhealthyServices: Schema.optional(
                        Schema.Number,
                      ),
                      maxPercentUnhealthyPartitionsPerService: Schema.optional(
                        Schema.Number,
                      ),
                      maxPercentUnhealthyReplicasPerPartition: Schema.optional(
                        Schema.Number,
                      ),
                    }),
                  ),
                ),
              }),
            ),
            upgradeMode: Schema.optional(
              Schema.Literals([
                "Invalid",
                "UnmonitoredAuto",
                "UnmonitoredManual",
                "Monitored",
              ]),
            ),
            recreateApplication: Schema.optional(Schema.Boolean),
          }),
        ),
        minimumNodes: Schema.optional(Schema.Number),
        maximumNodes: Schema.optional(Schema.Number),
        removeApplicationCapacity: Schema.optional(Schema.Boolean),
        metrics: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              maximumCapacity: Schema.optional(Schema.Number),
              reservationCapacity: Schema.optional(Schema.Number),
              totalApplicationCapacity: Schema.optional(Schema.Number),
            }),
          ),
        ),
        managedIdentities: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.String,
              principalId: Schema.String,
            }),
          ),
        ),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    etag: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(Schema.String),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(Schema.String),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}/applications/{applicationName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<ApplicationsUpdateInput>;

// Output Schema
export type ApplicationsUpdateOutput = void;
export const ApplicationsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ApplicationsUpdateOutput>;

// The operation
/**
 * Updates a Service Fabric application resource.
 *
 * Update a Service Fabric application resource with the specified name.
 *
 * @param subscriptionId - The customer subscription identifier.
 * @param resourceGroupName - The name of the resource group.
 * @param clusterName - The name of the cluster resource.
 * @param applicationName - The name of the application resource.
 * @param api-version - The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2021-06-01" for this specification.
 */
export const ApplicationsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ApplicationsUpdateInput,
  outputSchema: ApplicationsUpdateOutput,
}));
// Input Schema
export interface ApplicationTypesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  applicationTypeName: string;
  properties?: { provisioningState?: string };
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
  etag?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: string;
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: string;
    lastModifiedAt?: string;
  };
}
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
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    etag: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(Schema.String),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(Schema.String),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}/applicationTypes/{applicationTypeName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<ApplicationTypesCreateOrUpdateInput>;

// Output Schema
export interface ApplicationTypesCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
  etag?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: string;
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: string;
    lastModifiedAt?: string;
  };
}
export const ApplicationTypesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    etag: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(Schema.String),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(Schema.String),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<ApplicationTypesCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a Service Fabric application type name resource.
 *
 * Create or update a Service Fabric application type name resource with the specified name.
 *
 * @param subscriptionId - The customer subscription identifier.
 * @param resourceGroupName - The name of the resource group.
 * @param clusterName - The name of the cluster resource.
 * @param applicationTypeName - The name of the application type name resource.
 * @param api-version - The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2021-06-01" for this specification.
 */
export const ApplicationTypesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    applicationTypeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}/applicationTypes/{applicationTypeName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<ApplicationTypesDeleteInput>;

// Output Schema
export type ApplicationTypesDeleteOutput = void;
export const ApplicationTypesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ApplicationTypesDeleteOutput>;

// The operation
/**
 * Deletes a Service Fabric application type name resource.
 *
 * Delete a Service Fabric application type name resource with the specified name.
 *
 * @param subscriptionId - The customer subscription identifier.
 * @param resourceGroupName - The name of the resource group.
 * @param clusterName - The name of the cluster resource.
 * @param applicationTypeName - The name of the application type name resource.
 * @param api-version - The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2021-06-01" for this specification.
 */
export const ApplicationTypesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ApplicationTypesDeleteInput,
    outputSchema: ApplicationTypesDeleteOutput,
  }),
);
// Input Schema
export interface ApplicationTypesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  applicationTypeName: string;
}
export const ApplicationTypesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    applicationTypeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}/applicationTypes/{applicationTypeName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<ApplicationTypesGetInput>;

// Output Schema
export interface ApplicationTypesGetOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
  etag?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: string;
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: string;
    lastModifiedAt?: string;
  };
}
export const ApplicationTypesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    etag: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(Schema.String),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(Schema.String),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<ApplicationTypesGetOutput>;

// The operation
/**
 * Gets a Service Fabric application type name resource.
 *
 * Get a Service Fabric application type name resource created or in the process of being created in the Service Fabric cluster resource.
 *
 * @param subscriptionId - The customer subscription identifier.
 * @param resourceGroupName - The name of the resource group.
 * @param clusterName - The name of the cluster resource.
 * @param applicationTypeName - The name of the application type name resource.
 * @param api-version - The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2021-06-01" for this specification.
 */
export const ApplicationTypesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}/applicationTypes",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<ApplicationTypesListInput>;

// Output Schema
export interface ApplicationTypesListOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    location?: string;
    tags?: Record<string, string>;
    etag?: string;
    systemData?: {
      createdBy?: string;
      createdByType?: string;
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: string;
      lastModifiedAt?: string;
    };
  }[];
  nextLink?: string;
}
export const ApplicationTypesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          location: Schema.optional(Schema.String),
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
          etag: Schema.optional(Schema.String),
          systemData: Schema.optional(
            Schema.Struct({
              createdBy: Schema.optional(Schema.String),
              createdByType: Schema.optional(Schema.String),
              createdAt: Schema.optional(Schema.String),
              lastModifiedBy: Schema.optional(Schema.String),
              lastModifiedByType: Schema.optional(Schema.String),
              lastModifiedAt: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ApplicationTypesListOutput>;

// The operation
/**
 * Gets the list of application type name resources created in the specified Service Fabric cluster resource.
 *
 * Gets all application type name resources created or in the process of being created in the Service Fabric cluster resource.
 *
 * @param subscriptionId - The customer subscription identifier.
 * @param resourceGroupName - The name of the resource group.
 * @param clusterName - The name of the cluster resource.
 * @param api-version - The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2021-06-01" for this specification.
 */
export const ApplicationTypesList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ApplicationTypesListInput,
    outputSchema: ApplicationTypesListOutput,
  }),
);
// Input Schema
export interface ApplicationTypeVersionsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  applicationTypeName: string;
  version: string;
  properties?: {
    provisioningState?: string;
    appPackageUrl: string;
    defaultParameterList?: Record<string, string>;
  };
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
  etag?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: string;
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: string;
    lastModifiedAt?: string;
  };
}
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
        defaultParameterList: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    etag: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(Schema.String),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(Schema.String),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}/applicationTypes/{applicationTypeName}/versions/{version}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<ApplicationTypeVersionsCreateOrUpdateInput>;

// Output Schema
export type ApplicationTypeVersionsCreateOrUpdateOutput = void;
export const ApplicationTypeVersionsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ApplicationTypeVersionsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a Service Fabric application type version resource.
 *
 * Create or update a Service Fabric application type version resource with the specified name.
 *
 * @param subscriptionId - The customer subscription identifier.
 * @param resourceGroupName - The name of the resource group.
 * @param clusterName - The name of the cluster resource.
 * @param applicationTypeName - The name of the application type name resource.
 * @param version - The application type version.
 * @param api-version - The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2021-06-01" for this specification.
 */
export const ApplicationTypeVersionsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    applicationTypeName: Schema.String.pipe(T.PathParam()),
    version: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}/applicationTypes/{applicationTypeName}/versions/{version}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<ApplicationTypeVersionsDeleteInput>;

// Output Schema
export type ApplicationTypeVersionsDeleteOutput = void;
export const ApplicationTypeVersionsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ApplicationTypeVersionsDeleteOutput>;

// The operation
/**
 * Deletes a Service Fabric application type version resource.
 *
 * Delete a Service Fabric application type version resource with the specified name.
 *
 * @param subscriptionId - The customer subscription identifier.
 * @param resourceGroupName - The name of the resource group.
 * @param clusterName - The name of the cluster resource.
 * @param applicationTypeName - The name of the application type name resource.
 * @param version - The application type version.
 * @param api-version - The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2021-06-01" for this specification.
 */
export const ApplicationTypeVersionsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    applicationTypeName: Schema.String.pipe(T.PathParam()),
    version: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}/applicationTypes/{applicationTypeName}/versions/{version}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<ApplicationTypeVersionsGetInput>;

// Output Schema
export interface ApplicationTypeVersionsGetOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
  etag?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: string;
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: string;
    lastModifiedAt?: string;
  };
}
export const ApplicationTypeVersionsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    etag: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(Schema.String),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(Schema.String),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<ApplicationTypeVersionsGetOutput>;

// The operation
/**
 * Gets a Service Fabric application type version resource.
 *
 * Get a Service Fabric application type version resource created or in the process of being created in the Service Fabric application type name resource.
 *
 * @param subscriptionId - The customer subscription identifier.
 * @param resourceGroupName - The name of the resource group.
 * @param clusterName - The name of the cluster resource.
 * @param applicationTypeName - The name of the application type name resource.
 * @param version - The application type version.
 * @param api-version - The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2021-06-01" for this specification.
 */
export const ApplicationTypeVersionsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ApplicationTypeVersionsGetInput,
    outputSchema: ApplicationTypeVersionsGetOutput,
  }),
);
// Input Schema
export interface ApplicationTypeVersionsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  applicationTypeName: string;
}
export const ApplicationTypeVersionsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    applicationTypeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}/applicationTypes/{applicationTypeName}/versions",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<ApplicationTypeVersionsListInput>;

// Output Schema
export interface ApplicationTypeVersionsListOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    location?: string;
    tags?: Record<string, string>;
    etag?: string;
    systemData?: {
      createdBy?: string;
      createdByType?: string;
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: string;
      lastModifiedAt?: string;
    };
  }[];
  nextLink?: string;
}
export const ApplicationTypeVersionsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          location: Schema.optional(Schema.String),
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
          etag: Schema.optional(Schema.String),
          systemData: Schema.optional(
            Schema.Struct({
              createdBy: Schema.optional(Schema.String),
              createdByType: Schema.optional(Schema.String),
              createdAt: Schema.optional(Schema.String),
              lastModifiedBy: Schema.optional(Schema.String),
              lastModifiedByType: Schema.optional(Schema.String),
              lastModifiedAt: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ApplicationTypeVersionsListOutput>;

// The operation
/**
 * Gets the list of application type version resources created in the specified Service Fabric application type name resource.
 *
 * Gets all application type version resources created or in the process of being created in the Service Fabric application type name resource.
 *
 * @param subscriptionId - The customer subscription identifier.
 * @param resourceGroupName - The name of the resource group.
 * @param clusterName - The name of the cluster resource.
 * @param applicationTypeName - The name of the application type name resource.
 * @param api-version - The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2021-06-01" for this specification.
 */
export const ApplicationTypeVersionsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ApplicationTypeVersionsListInput,
    outputSchema: ApplicationTypeVersionsListOutput,
  }),
);
// Input Schema
export interface ClustersCreateOrUpdateInput {
  resourceGroupName: string;
  clusterName: string;
  subscriptionId: string;
  properties?: {
    addOnFeatures?: (
      | "RepairManager"
      | "DnsService"
      | "BackupRestoreService"
      | "ResourceMonitorService"
    )[];
    availableClusterVersions?: {
      codeVersion?: string;
      supportExpiryUtc?: string;
      environment?: "Windows" | "Linux";
    }[];
    azureActiveDirectory?: {
      tenantId?: string;
      clusterApplication?: string;
      clientApplication?: string;
    };
    certificate?: {
      thumbprint: string;
      thumbprintSecondary?: string;
      x509StoreName?:
        | "AddressBook"
        | "AuthRoot"
        | "CertificateAuthority"
        | "Disallowed"
        | "My"
        | "Root"
        | "TrustedPeople"
        | "TrustedPublisher";
    };
    certificateCommonNames?: {
      commonNames?: {
        certificateCommonName: string;
        certificateIssuerThumbprint: string;
      }[];
      x509StoreName?:
        | "AddressBook"
        | "AuthRoot"
        | "CertificateAuthority"
        | "Disallowed"
        | "My"
        | "Root"
        | "TrustedPeople"
        | "TrustedPublisher";
    };
    clientCertificateCommonNames?: {
      isAdmin: boolean;
      certificateCommonName: string;
      certificateIssuerThumbprint: string;
    }[];
    clientCertificateThumbprints?: {
      isAdmin: boolean;
      certificateThumbprint: string;
    }[];
    clusterCodeVersion?: string;
    clusterEndpoint?: string;
    clusterId?: string;
    clusterState?:
      | "WaitingForNodes"
      | "Deploying"
      | "BaselineUpgrade"
      | "UpdatingUserConfiguration"
      | "UpdatingUserCertificate"
      | "UpdatingInfrastructure"
      | "EnforcingClusterVersion"
      | "UpgradeServiceUnreachable"
      | "AutoScale"
      | "Ready";
    diagnosticsStorageAccountConfig?: {
      storageAccountName: string;
      protectedAccountKeyName: string;
      protectedAccountKeyName2?: string;
      blobEndpoint: string;
      queueEndpoint: string;
      tableEndpoint: string;
    };
    eventStoreServiceEnabled?: boolean;
    fabricSettings?: {
      name: string;
      parameters: { name: string; value: string }[];
    }[];
    managementEndpoint: string;
    nodeTypes: {
      name: string;
      placementProperties?: Record<string, string>;
      capacities?: Record<string, string>;
      clientConnectionEndpointPort: number;
      httpGatewayEndpointPort: number;
      durabilityLevel?: "Bronze" | "Silver" | "Gold";
      applicationPorts?: { startPort: number; endPort: number };
      ephemeralPorts?: { startPort: number; endPort: number };
      isPrimary: boolean;
      vmInstanceCount: number;
      reverseProxyEndpointPort?: number;
      isStateless?: boolean;
      multipleAvailabilityZones?: boolean;
    }[];
    provisioningState?: "Updating" | "Succeeded" | "Failed" | "Canceled";
    reliabilityLevel?: "None" | "Bronze" | "Silver" | "Gold" | "Platinum";
    reverseProxyCertificate?: {
      thumbprint: string;
      thumbprintSecondary?: string;
      x509StoreName?:
        | "AddressBook"
        | "AuthRoot"
        | "CertificateAuthority"
        | "Disallowed"
        | "My"
        | "Root"
        | "TrustedPeople"
        | "TrustedPublisher";
    };
    reverseProxyCertificateCommonNames?: {
      commonNames?: {
        certificateCommonName: string;
        certificateIssuerThumbprint: string;
      }[];
      x509StoreName?:
        | "AddressBook"
        | "AuthRoot"
        | "CertificateAuthority"
        | "Disallowed"
        | "My"
        | "Root"
        | "TrustedPeople"
        | "TrustedPublisher";
    };
    upgradeDescription?: {
      forceRestart?: boolean;
      upgradeReplicaSetCheckTimeout: string;
      healthCheckWaitDuration: string;
      healthCheckStableDuration: string;
      healthCheckRetryTimeout: string;
      upgradeTimeout: string;
      upgradeDomainTimeout: string;
      healthPolicy: {
        maxPercentUnhealthyNodes?: number;
        maxPercentUnhealthyApplications?: number;
        applicationHealthPolicies?: Record<
          string,
          {
            defaultServiceTypeHealthPolicy?: {
              maxPercentUnhealthyServices?: number;
            };
            serviceTypeHealthPolicies?: Record<
              string,
              { maxPercentUnhealthyServices?: number }
            >;
          }
        >;
      };
      deltaHealthPolicy?: {
        maxPercentDeltaUnhealthyNodes: number;
        maxPercentUpgradeDomainDeltaUnhealthyNodes: number;
        maxPercentDeltaUnhealthyApplications: number;
        applicationDeltaHealthPolicies?: Record<
          string,
          {
            defaultServiceTypeDeltaHealthPolicy?: {
              maxPercentDeltaUnhealthyServices?: number;
            };
            serviceTypeDeltaHealthPolicies?: Record<
              string,
              { maxPercentDeltaUnhealthyServices?: number }
            >;
          }
        >;
      };
    };
    upgradeMode?: "Automatic" | "Manual";
    applicationTypeVersionsCleanupPolicy?: { maxUnusedVersionsToKeep: number };
    vmImage?: string;
    sfZonalUpgradeMode?: "Parallel" | "Hierarchical";
    vmssZonalUpgradeMode?: "Parallel" | "Hierarchical";
    infrastructureServiceManager?: boolean;
    upgradeWave?: "Wave0" | "Wave1" | "Wave2";
    upgradePauseStartTimestampUtc?: string;
    upgradePauseEndTimestampUtc?: string;
    waveUpgradePaused?: boolean;
    notifications?: {
      isEnabled: boolean;
      notificationCategory: "WaveProgress";
      notificationLevel: "Critical" | "All";
      notificationTargets: {
        notificationChannel: "EmailUser" | "EmailSubscription";
        receivers: string[];
      }[];
    }[];
  };
  id?: string;
  name?: string;
  type?: string;
  location: string;
  tags?: Record<string, string>;
  etag?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: string;
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: string;
    lastModifiedAt?: string;
  };
}
export const ClustersCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        addOnFeatures: Schema.optional(
          Schema.Array(
            Schema.Literals([
              "RepairManager",
              "DnsService",
              "BackupRestoreService",
              "ResourceMonitorService",
            ]),
          ),
        ),
        availableClusterVersions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              codeVersion: Schema.optional(Schema.String),
              supportExpiryUtc: Schema.optional(Schema.String),
              environment: Schema.optional(
                Schema.Literals(["Windows", "Linux"]),
              ),
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
        certificate: Schema.optional(
          Schema.Struct({
            thumbprint: Schema.String,
            thumbprintSecondary: Schema.optional(Schema.String),
            x509StoreName: Schema.optional(
              Schema.Literals([
                "AddressBook",
                "AuthRoot",
                "CertificateAuthority",
                "Disallowed",
                "My",
                "Root",
                "TrustedPeople",
                "TrustedPublisher",
              ]),
            ),
          }),
        ),
        certificateCommonNames: Schema.optional(
          Schema.Struct({
            commonNames: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  certificateCommonName: Schema.String,
                  certificateIssuerThumbprint: Schema.String,
                }),
              ),
            ),
            x509StoreName: Schema.optional(
              Schema.Literals([
                "AddressBook",
                "AuthRoot",
                "CertificateAuthority",
                "Disallowed",
                "My",
                "Root",
                "TrustedPeople",
                "TrustedPublisher",
              ]),
            ),
          }),
        ),
        clientCertificateCommonNames: Schema.optional(
          Schema.Array(
            Schema.Struct({
              isAdmin: Schema.Boolean,
              certificateCommonName: Schema.String,
              certificateIssuerThumbprint: Schema.String,
            }),
          ),
        ),
        clientCertificateThumbprints: Schema.optional(
          Schema.Array(
            Schema.Struct({
              isAdmin: Schema.Boolean,
              certificateThumbprint: Schema.String,
            }),
          ),
        ),
        clusterCodeVersion: Schema.optional(Schema.String),
        clusterEndpoint: Schema.optional(Schema.String),
        clusterId: Schema.optional(Schema.String),
        clusterState: Schema.optional(
          Schema.Literals([
            "WaitingForNodes",
            "Deploying",
            "BaselineUpgrade",
            "UpdatingUserConfiguration",
            "UpdatingUserCertificate",
            "UpdatingInfrastructure",
            "EnforcingClusterVersion",
            "UpgradeServiceUnreachable",
            "AutoScale",
            "Ready",
          ]),
        ),
        diagnosticsStorageAccountConfig: Schema.optional(
          Schema.Struct({
            storageAccountName: Schema.String,
            protectedAccountKeyName: Schema.String,
            protectedAccountKeyName2: Schema.optional(Schema.String),
            blobEndpoint: Schema.String,
            queueEndpoint: Schema.String,
            tableEndpoint: Schema.String,
          }),
        ),
        eventStoreServiceEnabled: Schema.optional(Schema.Boolean),
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
        managementEndpoint: Schema.String,
        nodeTypes: Schema.Array(
          Schema.Struct({
            name: Schema.String,
            placementProperties: Schema.optional(
              Schema.Record(Schema.String, Schema.String),
            ),
            capacities: Schema.optional(
              Schema.Record(Schema.String, Schema.String),
            ),
            clientConnectionEndpointPort: Schema.Number,
            httpGatewayEndpointPort: Schema.Number,
            durabilityLevel: Schema.optional(
              Schema.Literals(["Bronze", "Silver", "Gold"]),
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
            isPrimary: Schema.Boolean,
            vmInstanceCount: Schema.Number,
            reverseProxyEndpointPort: Schema.optional(Schema.Number),
            isStateless: Schema.optional(Schema.Boolean),
            multipleAvailabilityZones: Schema.optional(Schema.Boolean),
          }),
        ),
        provisioningState: Schema.optional(
          Schema.Literals(["Updating", "Succeeded", "Failed", "Canceled"]),
        ),
        reliabilityLevel: Schema.optional(
          Schema.Literals(["None", "Bronze", "Silver", "Gold", "Platinum"]),
        ),
        reverseProxyCertificate: Schema.optional(
          Schema.Struct({
            thumbprint: Schema.String,
            thumbprintSecondary: Schema.optional(Schema.String),
            x509StoreName: Schema.optional(
              Schema.Literals([
                "AddressBook",
                "AuthRoot",
                "CertificateAuthority",
                "Disallowed",
                "My",
                "Root",
                "TrustedPeople",
                "TrustedPublisher",
              ]),
            ),
          }),
        ),
        reverseProxyCertificateCommonNames: Schema.optional(
          Schema.Struct({
            commonNames: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  certificateCommonName: Schema.String,
                  certificateIssuerThumbprint: Schema.String,
                }),
              ),
            ),
            x509StoreName: Schema.optional(
              Schema.Literals([
                "AddressBook",
                "AuthRoot",
                "CertificateAuthority",
                "Disallowed",
                "My",
                "Root",
                "TrustedPeople",
                "TrustedPublisher",
              ]),
            ),
          }),
        ),
        upgradeDescription: Schema.optional(
          Schema.Struct({
            forceRestart: Schema.optional(Schema.Boolean),
            upgradeReplicaSetCheckTimeout: Schema.String,
            healthCheckWaitDuration: Schema.String,
            healthCheckStableDuration: Schema.String,
            healthCheckRetryTimeout: Schema.String,
            upgradeTimeout: Schema.String,
            upgradeDomainTimeout: Schema.String,
            healthPolicy: Schema.Struct({
              maxPercentUnhealthyNodes: Schema.optional(Schema.Number),
              maxPercentUnhealthyApplications: Schema.optional(Schema.Number),
              applicationHealthPolicies: Schema.optional(
                Schema.Record(
                  Schema.String,
                  Schema.Struct({
                    defaultServiceTypeHealthPolicy: Schema.optional(
                      Schema.Struct({
                        maxPercentUnhealthyServices: Schema.optional(
                          Schema.Number,
                        ),
                      }),
                    ),
                    serviceTypeHealthPolicies: Schema.optional(
                      Schema.Record(
                        Schema.String,
                        Schema.Struct({
                          maxPercentUnhealthyServices: Schema.optional(
                            Schema.Number,
                          ),
                        }),
                      ),
                    ),
                  }),
                ),
              ),
            }),
            deltaHealthPolicy: Schema.optional(
              Schema.Struct({
                maxPercentDeltaUnhealthyNodes: Schema.Number,
                maxPercentUpgradeDomainDeltaUnhealthyNodes: Schema.Number,
                maxPercentDeltaUnhealthyApplications: Schema.Number,
                applicationDeltaHealthPolicies: Schema.optional(
                  Schema.Record(
                    Schema.String,
                    Schema.Struct({
                      defaultServiceTypeDeltaHealthPolicy: Schema.optional(
                        Schema.Struct({
                          maxPercentDeltaUnhealthyServices: Schema.optional(
                            Schema.Number,
                          ),
                        }),
                      ),
                      serviceTypeDeltaHealthPolicies: Schema.optional(
                        Schema.Record(
                          Schema.String,
                          Schema.Struct({
                            maxPercentDeltaUnhealthyServices: Schema.optional(
                              Schema.Number,
                            ),
                          }),
                        ),
                      ),
                    }),
                  ),
                ),
              }),
            ),
          }),
        ),
        upgradeMode: Schema.optional(Schema.Literals(["Automatic", "Manual"])),
        applicationTypeVersionsCleanupPolicy: Schema.optional(
          Schema.Struct({
            maxUnusedVersionsToKeep: Schema.Number,
          }),
        ),
        vmImage: Schema.optional(Schema.String),
        sfZonalUpgradeMode: Schema.optional(
          Schema.Literals(["Parallel", "Hierarchical"]),
        ),
        vmssZonalUpgradeMode: Schema.optional(
          Schema.Literals(["Parallel", "Hierarchical"]),
        ),
        infrastructureServiceManager: Schema.optional(Schema.Boolean),
        upgradeWave: Schema.optional(
          Schema.Literals(["Wave0", "Wave1", "Wave2"]),
        ),
        upgradePauseStartTimestampUtc: Schema.optional(Schema.String),
        upgradePauseEndTimestampUtc: Schema.optional(Schema.String),
        waveUpgradePaused: Schema.optional(Schema.Boolean),
        notifications: Schema.optional(
          Schema.Array(
            Schema.Struct({
              isEnabled: Schema.Boolean,
              notificationCategory: Schema.Literals(["WaveProgress"]),
              notificationLevel: Schema.Literals(["Critical", "All"]),
              notificationTargets: Schema.Array(
                Schema.Struct({
                  notificationChannel: Schema.Literals([
                    "EmailUser",
                    "EmailSubscription",
                  ]),
                  receivers: Schema.Array(Schema.String),
                }),
              ),
            }),
          ),
        ),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.String,
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    etag: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(Schema.String),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(Schema.String),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<ClustersCreateOrUpdateInput>;

// Output Schema
export interface ClustersCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  location: string;
  tags?: Record<string, string>;
  etag?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: string;
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: string;
    lastModifiedAt?: string;
  };
}
export const ClustersCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.String,
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    etag: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(Schema.String),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(Schema.String),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<ClustersCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a Service Fabric cluster resource.
 *
 * Create or update a Service Fabric cluster resource with the specified name.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param clusterName - The name of the cluster resource.
 * @param api-version - The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2021-06-01" for this specification.
 * @param subscriptionId - The customer subscription identifier.
 */
export const ClustersCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ClustersCreateOrUpdateInput,
    outputSchema: ClustersCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface ClustersDeleteInput {
  resourceGroupName: string;
  clusterName: string;
  subscriptionId: string;
}
export const ClustersDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}",
    apiVersion: "2021-06-01",
  }),
) as unknown as Schema.Codec<ClustersDeleteInput>;

// Output Schema
export type ClustersDeleteOutput = void;
export const ClustersDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ClustersDeleteOutput>;

// The operation
/**
 * Deletes a Service Fabric cluster resource.
 *
 * Delete a Service Fabric cluster resource with the specified name.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param clusterName - The name of the cluster resource.
 * @param api-version - The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2021-06-01" for this specification.
 * @param subscriptionId - The customer subscription identifier.
 */
export const ClustersDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ClustersDeleteInput,
  outputSchema: ClustersDeleteOutput,
}));
// Input Schema
export interface ClustersGetInput {
  resourceGroupName: string;
  clusterName: string;
  subscriptionId: string;
}
export const ClustersGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}",
    apiVersion: "2021-06-01",
  }),
) as unknown as Schema.Codec<ClustersGetInput>;

// Output Schema
export interface ClustersGetOutput {
  id?: string;
  name?: string;
  type?: string;
  location: string;
  tags?: Record<string, string>;
  etag?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: string;
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: string;
    lastModifiedAt?: string;
  };
}
export const ClustersGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  location: Schema.String,
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  etag: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(Schema.String),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(Schema.String),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<ClustersGetOutput>;

// The operation
/**
 * Gets a Service Fabric cluster resource.
 *
 * Get a Service Fabric cluster resource created or in the process of being created in the specified resource group.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param clusterName - The name of the cluster resource.
 * @param api-version - The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2021-06-01" for this specification.
 * @param subscriptionId - The customer subscription identifier.
 */
export const ClustersGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ClustersGetInput,
  outputSchema: ClustersGetOutput,
}));
// Input Schema
export interface ClustersListInput {
  subscriptionId: string;
}
export const ClustersListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.ServiceFabric/clusters",
    apiVersion: "2021-06-01",
  }),
) as unknown as Schema.Codec<ClustersListInput>;

// Output Schema
export interface ClustersListOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    location: string;
    tags?: Record<string, string>;
    etag?: string;
    systemData?: {
      createdBy?: string;
      createdByType?: string;
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: string;
      lastModifiedAt?: string;
    };
  }[];
  nextLink?: string;
}
export const ClustersListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        location: Schema.String,
        tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        etag: Schema.optional(Schema.String),
        systemData: Schema.optional(
          Schema.Struct({
            createdBy: Schema.optional(Schema.String),
            createdByType: Schema.optional(Schema.String),
            createdAt: Schema.optional(Schema.String),
            lastModifiedBy: Schema.optional(Schema.String),
            lastModifiedByType: Schema.optional(Schema.String),
            lastModifiedAt: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<ClustersListOutput>;

// The operation
/**
 * Gets the list of Service Fabric cluster resources created in the specified subscription.
 *
 * Gets all Service Fabric cluster resources created or in the process of being created in the subscription.
 *
 * @param api-version - The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2021-06-01" for this specification.
 * @param subscriptionId - The customer subscription identifier.
 */
export const ClustersList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ClustersListInput,
  outputSchema: ClustersListOutput,
}));
// Input Schema
export interface ClustersListByResourceGroupInput {
  resourceGroupName: string;
  subscriptionId: string;
}
export const ClustersListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<ClustersListByResourceGroupInput>;

// Output Schema
export interface ClustersListByResourceGroupOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    location: string;
    tags?: Record<string, string>;
    etag?: string;
    systemData?: {
      createdBy?: string;
      createdByType?: string;
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: string;
      lastModifiedAt?: string;
    };
  }[];
  nextLink?: string;
}
export const ClustersListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          location: Schema.String,
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
          etag: Schema.optional(Schema.String),
          systemData: Schema.optional(
            Schema.Struct({
              createdBy: Schema.optional(Schema.String),
              createdByType: Schema.optional(Schema.String),
              createdAt: Schema.optional(Schema.String),
              lastModifiedBy: Schema.optional(Schema.String),
              lastModifiedByType: Schema.optional(Schema.String),
              lastModifiedAt: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ClustersListByResourceGroupOutput>;

// The operation
/**
 * Gets the list of Service Fabric cluster resources created in the specified resource group.
 *
 * Gets all Service Fabric cluster resources created or in the process of being created in the resource group.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param api-version - The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2021-06-01" for this specification.
 * @param subscriptionId - The customer subscription identifier.
 */
export const ClustersListByResourceGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ClustersListByResourceGroupInput,
    outputSchema: ClustersListByResourceGroupOutput,
  }),
);
// Input Schema
export interface ClustersListUpgradableVersionsInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  targetVersion: string;
}
export const ClustersListUpgradableVersionsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    targetVersion: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}/listUpgradableVersions",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<ClustersListUpgradableVersionsInput>;

// Output Schema
export interface ClustersListUpgradableVersionsOutput {
  supportedPath?: string[];
}
export const ClustersListUpgradableVersionsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    supportedPath: Schema.optional(Schema.Array(Schema.String)),
  }) as unknown as Schema.Codec<ClustersListUpgradableVersionsOutput>;

// The operation
/**
 * Operation to get the minimum and maximum upgradable version from the current cluster version, or the required path to get to the an specific target version.
 *
 * If a target is not provided, it will get the minimum and maximum versions available from the current cluster version. If a target is given, it will provide the required path to get from the current cluster version to the target version.
 *
 * @param subscriptionId - The customer subscription identifier.
 * @param resourceGroupName - The name of the resource group.
 * @param clusterName - The name of the cluster resource.
 * @param api-version - The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2021-06-01" for this specification.
 */
export const ClustersListUpgradableVersions =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ClustersListUpgradableVersionsInput,
    outputSchema: ClustersListUpgradableVersionsOutput,
  }));
// Input Schema
export interface ClustersUpdateInput {
  resourceGroupName: string;
  clusterName: string;
  subscriptionId: string;
  properties?: {
    addOnFeatures?: (
      | "RepairManager"
      | "DnsService"
      | "BackupRestoreService"
      | "ResourceMonitorService"
    )[];
    certificate?: {
      thumbprint: string;
      thumbprintSecondary?: string;
      x509StoreName?:
        | "AddressBook"
        | "AuthRoot"
        | "CertificateAuthority"
        | "Disallowed"
        | "My"
        | "Root"
        | "TrustedPeople"
        | "TrustedPublisher";
    };
    certificateCommonNames?: {
      commonNames?: {
        certificateCommonName: string;
        certificateIssuerThumbprint: string;
      }[];
      x509StoreName?:
        | "AddressBook"
        | "AuthRoot"
        | "CertificateAuthority"
        | "Disallowed"
        | "My"
        | "Root"
        | "TrustedPeople"
        | "TrustedPublisher";
    };
    clientCertificateCommonNames?: {
      isAdmin: boolean;
      certificateCommonName: string;
      certificateIssuerThumbprint: string;
    }[];
    clientCertificateThumbprints?: {
      isAdmin: boolean;
      certificateThumbprint: string;
    }[];
    clusterCodeVersion?: string;
    eventStoreServiceEnabled?: boolean;
    fabricSettings?: {
      name: string;
      parameters: { name: string; value: string }[];
    }[];
    nodeTypes?: {
      name: string;
      placementProperties?: Record<string, string>;
      capacities?: Record<string, string>;
      clientConnectionEndpointPort: number;
      httpGatewayEndpointPort: number;
      durabilityLevel?: "Bronze" | "Silver" | "Gold";
      applicationPorts?: { startPort: number; endPort: number };
      ephemeralPorts?: { startPort: number; endPort: number };
      isPrimary: boolean;
      vmInstanceCount: number;
      reverseProxyEndpointPort?: number;
      isStateless?: boolean;
      multipleAvailabilityZones?: boolean;
    }[];
    reliabilityLevel?: "None" | "Bronze" | "Silver" | "Gold" | "Platinum";
    reverseProxyCertificate?: {
      thumbprint: string;
      thumbprintSecondary?: string;
      x509StoreName?:
        | "AddressBook"
        | "AuthRoot"
        | "CertificateAuthority"
        | "Disallowed"
        | "My"
        | "Root"
        | "TrustedPeople"
        | "TrustedPublisher";
    };
    upgradeDescription?: {
      forceRestart?: boolean;
      upgradeReplicaSetCheckTimeout: string;
      healthCheckWaitDuration: string;
      healthCheckStableDuration: string;
      healthCheckRetryTimeout: string;
      upgradeTimeout: string;
      upgradeDomainTimeout: string;
      healthPolicy: {
        maxPercentUnhealthyNodes?: number;
        maxPercentUnhealthyApplications?: number;
        applicationHealthPolicies?: Record<
          string,
          {
            defaultServiceTypeHealthPolicy?: {
              maxPercentUnhealthyServices?: number;
            };
            serviceTypeHealthPolicies?: Record<
              string,
              { maxPercentUnhealthyServices?: number }
            >;
          }
        >;
      };
      deltaHealthPolicy?: {
        maxPercentDeltaUnhealthyNodes: number;
        maxPercentUpgradeDomainDeltaUnhealthyNodes: number;
        maxPercentDeltaUnhealthyApplications: number;
        applicationDeltaHealthPolicies?: Record<
          string,
          {
            defaultServiceTypeDeltaHealthPolicy?: {
              maxPercentDeltaUnhealthyServices?: number;
            };
            serviceTypeDeltaHealthPolicies?: Record<
              string,
              { maxPercentDeltaUnhealthyServices?: number }
            >;
          }
        >;
      };
    };
    applicationTypeVersionsCleanupPolicy?: { maxUnusedVersionsToKeep: number };
    upgradeMode?: "Automatic" | "Manual";
    sfZonalUpgradeMode?: "Parallel" | "Hierarchical";
    vmssZonalUpgradeMode?: "Parallel" | "Hierarchical";
    infrastructureServiceManager?: boolean;
    upgradeWave?: "Wave0" | "Wave1" | "Wave2";
    upgradePauseStartTimestampUtc?: string;
    upgradePauseEndTimestampUtc?: string;
    waveUpgradePaused?: boolean;
    notifications?: {
      isEnabled: boolean;
      notificationCategory: "WaveProgress";
      notificationLevel: "Critical" | "All";
      notificationTargets: {
        notificationChannel: "EmailUser" | "EmailSubscription";
        receivers: string[];
      }[];
    }[];
  };
  tags?: Record<string, string>;
}
export const ClustersUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      addOnFeatures: Schema.optional(
        Schema.Array(
          Schema.Literals([
            "RepairManager",
            "DnsService",
            "BackupRestoreService",
            "ResourceMonitorService",
          ]),
        ),
      ),
      certificate: Schema.optional(
        Schema.Struct({
          thumbprint: Schema.String,
          thumbprintSecondary: Schema.optional(Schema.String),
          x509StoreName: Schema.optional(
            Schema.Literals([
              "AddressBook",
              "AuthRoot",
              "CertificateAuthority",
              "Disallowed",
              "My",
              "Root",
              "TrustedPeople",
              "TrustedPublisher",
            ]),
          ),
        }),
      ),
      certificateCommonNames: Schema.optional(
        Schema.Struct({
          commonNames: Schema.optional(
            Schema.Array(
              Schema.Struct({
                certificateCommonName: Schema.String,
                certificateIssuerThumbprint: Schema.String,
              }),
            ),
          ),
          x509StoreName: Schema.optional(
            Schema.Literals([
              "AddressBook",
              "AuthRoot",
              "CertificateAuthority",
              "Disallowed",
              "My",
              "Root",
              "TrustedPeople",
              "TrustedPublisher",
            ]),
          ),
        }),
      ),
      clientCertificateCommonNames: Schema.optional(
        Schema.Array(
          Schema.Struct({
            isAdmin: Schema.Boolean,
            certificateCommonName: Schema.String,
            certificateIssuerThumbprint: Schema.String,
          }),
        ),
      ),
      clientCertificateThumbprints: Schema.optional(
        Schema.Array(
          Schema.Struct({
            isAdmin: Schema.Boolean,
            certificateThumbprint: Schema.String,
          }),
        ),
      ),
      clusterCodeVersion: Schema.optional(Schema.String),
      eventStoreServiceEnabled: Schema.optional(Schema.Boolean),
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
      nodeTypes: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.String,
            placementProperties: Schema.optional(
              Schema.Record(Schema.String, Schema.String),
            ),
            capacities: Schema.optional(
              Schema.Record(Schema.String, Schema.String),
            ),
            clientConnectionEndpointPort: Schema.Number,
            httpGatewayEndpointPort: Schema.Number,
            durabilityLevel: Schema.optional(
              Schema.Literals(["Bronze", "Silver", "Gold"]),
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
            isPrimary: Schema.Boolean,
            vmInstanceCount: Schema.Number,
            reverseProxyEndpointPort: Schema.optional(Schema.Number),
            isStateless: Schema.optional(Schema.Boolean),
            multipleAvailabilityZones: Schema.optional(Schema.Boolean),
          }),
        ),
      ),
      reliabilityLevel: Schema.optional(
        Schema.Literals(["None", "Bronze", "Silver", "Gold", "Platinum"]),
      ),
      reverseProxyCertificate: Schema.optional(
        Schema.Struct({
          thumbprint: Schema.String,
          thumbprintSecondary: Schema.optional(Schema.String),
          x509StoreName: Schema.optional(
            Schema.Literals([
              "AddressBook",
              "AuthRoot",
              "CertificateAuthority",
              "Disallowed",
              "My",
              "Root",
              "TrustedPeople",
              "TrustedPublisher",
            ]),
          ),
        }),
      ),
      upgradeDescription: Schema.optional(
        Schema.Struct({
          forceRestart: Schema.optional(Schema.Boolean),
          upgradeReplicaSetCheckTimeout: Schema.String,
          healthCheckWaitDuration: Schema.String,
          healthCheckStableDuration: Schema.String,
          healthCheckRetryTimeout: Schema.String,
          upgradeTimeout: Schema.String,
          upgradeDomainTimeout: Schema.String,
          healthPolicy: Schema.Struct({
            maxPercentUnhealthyNodes: Schema.optional(Schema.Number),
            maxPercentUnhealthyApplications: Schema.optional(Schema.Number),
            applicationHealthPolicies: Schema.optional(
              Schema.Record(
                Schema.String,
                Schema.Struct({
                  defaultServiceTypeHealthPolicy: Schema.optional(
                    Schema.Struct({
                      maxPercentUnhealthyServices: Schema.optional(
                        Schema.Number,
                      ),
                    }),
                  ),
                  serviceTypeHealthPolicies: Schema.optional(
                    Schema.Record(
                      Schema.String,
                      Schema.Struct({
                        maxPercentUnhealthyServices: Schema.optional(
                          Schema.Number,
                        ),
                      }),
                    ),
                  ),
                }),
              ),
            ),
          }),
          deltaHealthPolicy: Schema.optional(
            Schema.Struct({
              maxPercentDeltaUnhealthyNodes: Schema.Number,
              maxPercentUpgradeDomainDeltaUnhealthyNodes: Schema.Number,
              maxPercentDeltaUnhealthyApplications: Schema.Number,
              applicationDeltaHealthPolicies: Schema.optional(
                Schema.Record(
                  Schema.String,
                  Schema.Struct({
                    defaultServiceTypeDeltaHealthPolicy: Schema.optional(
                      Schema.Struct({
                        maxPercentDeltaUnhealthyServices: Schema.optional(
                          Schema.Number,
                        ),
                      }),
                    ),
                    serviceTypeDeltaHealthPolicies: Schema.optional(
                      Schema.Record(
                        Schema.String,
                        Schema.Struct({
                          maxPercentDeltaUnhealthyServices: Schema.optional(
                            Schema.Number,
                          ),
                        }),
                      ),
                    ),
                  }),
                ),
              ),
            }),
          ),
        }),
      ),
      applicationTypeVersionsCleanupPolicy: Schema.optional(
        Schema.Struct({
          maxUnusedVersionsToKeep: Schema.Number,
        }),
      ),
      upgradeMode: Schema.optional(Schema.Literals(["Automatic", "Manual"])),
      sfZonalUpgradeMode: Schema.optional(
        Schema.Literals(["Parallel", "Hierarchical"]),
      ),
      vmssZonalUpgradeMode: Schema.optional(
        Schema.Literals(["Parallel", "Hierarchical"]),
      ),
      infrastructureServiceManager: Schema.optional(Schema.Boolean),
      upgradeWave: Schema.optional(
        Schema.Literals(["Wave0", "Wave1", "Wave2"]),
      ),
      upgradePauseStartTimestampUtc: Schema.optional(Schema.String),
      upgradePauseEndTimestampUtc: Schema.optional(Schema.String),
      waveUpgradePaused: Schema.optional(Schema.Boolean),
      notifications: Schema.optional(
        Schema.Array(
          Schema.Struct({
            isEnabled: Schema.Boolean,
            notificationCategory: Schema.Literals(["WaveProgress"]),
            notificationLevel: Schema.Literals(["Critical", "All"]),
            notificationTargets: Schema.Array(
              Schema.Struct({
                notificationChannel: Schema.Literals([
                  "EmailUser",
                  "EmailSubscription",
                ]),
                receivers: Schema.Array(Schema.String),
              }),
            ),
          }),
        ),
      ),
    }),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}",
    apiVersion: "2021-06-01",
  }),
) as unknown as Schema.Codec<ClustersUpdateInput>;

// Output Schema
export interface ClustersUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  location: string;
  tags?: Record<string, string>;
  etag?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: string;
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: string;
    lastModifiedAt?: string;
  };
}
export const ClustersUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  location: Schema.String,
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  etag: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(Schema.String),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(Schema.String),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<ClustersUpdateOutput>;

// The operation
/**
 * Updates the configuration of a Service Fabric cluster resource.
 *
 * Update the configuration of a Service Fabric cluster resource with the specified name.
 *
 * @param resourceGroupName - The name of the resource group.
 * @param clusterName - The name of the cluster resource.
 * @param api-version - The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2021-06-01" for this specification.
 * @param subscriptionId - The customer subscription identifier.
 */
export const ClustersUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ClustersUpdateInput,
  outputSchema: ClustersUpdateOutput,
}));
// Input Schema
export interface ClusterVersionsGetInput {
  location: string;
  subscriptionId: string;
  clusterVersion: string;
}
export const ClusterVersionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    location: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    clusterVersion: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ServiceFabric/locations/{location}/clusterVersions/{clusterVersion}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<ClusterVersionsGetInput>;

// Output Schema
export interface ClusterVersionsGetOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    properties?: {
      codeVersion?: string;
      supportExpiryUtc?: string;
      environment?: "Windows" | "Linux";
    };
  }[];
  nextLink?: string;
}
export const ClusterVersionsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          properties: Schema.optional(
            Schema.Struct({
              codeVersion: Schema.optional(Schema.String),
              supportExpiryUtc: Schema.optional(Schema.String),
              environment: Schema.optional(
                Schema.Literals(["Windows", "Linux"]),
              ),
            }),
          ),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ClusterVersionsGetOutput>;

// The operation
/**
 * Gets information about a Service Fabric cluster code version available in the specified location.
 *
 * Gets information about an available Service Fabric cluster code version.
 *
 * @param location - The location for the cluster code versions. This is different from cluster location.
 * @param api-version - The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2021-06-01" for this specification.
 * @param subscriptionId - The customer subscription identifier.
 * @param clusterVersion - The cluster code version.
 */
export const ClusterVersionsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ClusterVersionsGetInput,
  outputSchema: ClusterVersionsGetOutput,
}));
// Input Schema
export interface ClusterVersionsGetByEnvironmentInput {
  location: string;
  environment: "Windows" | "Linux";
  subscriptionId: string;
  clusterVersion: string;
}
export const ClusterVersionsGetByEnvironmentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    location: Schema.String.pipe(T.PathParam()),
    environment: Schema.Literals(["Windows", "Linux"]).pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    clusterVersion: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ServiceFabric/locations/{location}/environments/{environment}/clusterVersions/{clusterVersion}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<ClusterVersionsGetByEnvironmentInput>;

// Output Schema
export interface ClusterVersionsGetByEnvironmentOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    properties?: {
      codeVersion?: string;
      supportExpiryUtc?: string;
      environment?: "Windows" | "Linux";
    };
  }[];
  nextLink?: string;
}
export const ClusterVersionsGetByEnvironmentOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          properties: Schema.optional(
            Schema.Struct({
              codeVersion: Schema.optional(Schema.String),
              supportExpiryUtc: Schema.optional(Schema.String),
              environment: Schema.optional(
                Schema.Literals(["Windows", "Linux"]),
              ),
            }),
          ),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ClusterVersionsGetByEnvironmentOutput>;

// The operation
/**
 * Gets information about a Service Fabric cluster code version available for the specified environment.
 *
 * Gets information about an available Service Fabric cluster code version by environment.
 *
 * @param location - The location for the cluster code versions. This is different from cluster location.
 * @param environment - The operating system of the cluster. The default means all.
 * @param api-version - The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2021-06-01" for this specification.
 * @param subscriptionId - The customer subscription identifier.
 * @param clusterVersion - The cluster code version.
 */
export const ClusterVersionsGetByEnvironment =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ClusterVersionsGetByEnvironmentInput,
    outputSchema: ClusterVersionsGetByEnvironmentOutput,
  }));
// Input Schema
export interface ClusterVersionsListInput {
  location: string;
  subscriptionId: string;
}
export const ClusterVersionsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    location: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ServiceFabric/locations/{location}/clusterVersions",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<ClusterVersionsListInput>;

// Output Schema
export interface ClusterVersionsListOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    properties?: {
      codeVersion?: string;
      supportExpiryUtc?: string;
      environment?: "Windows" | "Linux";
    };
  }[];
  nextLink?: string;
}
export const ClusterVersionsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          properties: Schema.optional(
            Schema.Struct({
              codeVersion: Schema.optional(Schema.String),
              supportExpiryUtc: Schema.optional(Schema.String),
              environment: Schema.optional(
                Schema.Literals(["Windows", "Linux"]),
              ),
            }),
          ),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ClusterVersionsListOutput>;

// The operation
/**
 * Gets the list of Service Fabric cluster code versions available for the specified location.
 *
 * Gets all available code versions for Service Fabric cluster resources by location.
 *
 * @param location - The location for the cluster code versions. This is different from cluster location.
 * @param api-version - The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2021-06-01" for this specification.
 * @param subscriptionId - The customer subscription identifier.
 */
export const ClusterVersionsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ClusterVersionsListInput,
  outputSchema: ClusterVersionsListOutput,
}));
// Input Schema
export interface ClusterVersionsListByEnvironmentInput {
  location: string;
  environment: "Windows" | "Linux";
  subscriptionId: string;
}
export const ClusterVersionsListByEnvironmentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    location: Schema.String.pipe(T.PathParam()),
    environment: Schema.Literals(["Windows", "Linux"]).pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ServiceFabric/locations/{location}/environments/{environment}/clusterVersions",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<ClusterVersionsListByEnvironmentInput>;

// Output Schema
export interface ClusterVersionsListByEnvironmentOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    properties?: {
      codeVersion?: string;
      supportExpiryUtc?: string;
      environment?: "Windows" | "Linux";
    };
  }[];
  nextLink?: string;
}
export const ClusterVersionsListByEnvironmentOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          properties: Schema.optional(
            Schema.Struct({
              codeVersion: Schema.optional(Schema.String),
              supportExpiryUtc: Schema.optional(Schema.String),
              environment: Schema.optional(
                Schema.Literals(["Windows", "Linux"]),
              ),
            }),
          ),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ClusterVersionsListByEnvironmentOutput>;

// The operation
/**
 * Gets the list of Service Fabric cluster code versions available for the specified environment.
 *
 * Gets all available code versions for Service Fabric cluster resources by environment.
 *
 * @param location - The location for the cluster code versions. This is different from cluster location.
 * @param environment - The operating system of the cluster. The default means all.
 * @param api-version - The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2021-06-01" for this specification.
 * @param subscriptionId - The customer subscription identifier.
 */
export const ClusterVersionsListByEnvironment =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ClusterVersionsListByEnvironmentInput,
    outputSchema: ClusterVersionsListByEnvironmentOutput,
  }));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.ServiceFabric/operations",
    apiVersion: "2021-06-01",
  }),
) as unknown as Schema.Codec<OperationsListInput>;

// Output Schema
export interface OperationsListOutput {
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
    nextLink?: string;
  }[];
  nextLink?: string;
}
export const OperationsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
        nextLink: Schema.optional(Schema.String),
      }),
    ),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<OperationsListOutput>;

// The operation
/**
 * Lists all of the available Service Fabric resource provider API operations.
 *
 * Get the list of available Service Fabric resource provider API operations.
 *
 * @param api-version - The version of the Service Fabric resource provider API
 */
export const OperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
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
      scheme: "Invalid" | "Affinity" | "AlignedAffinity" | "NonAlignedAffinity";
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
        | "Invalid"
        | "InvalidDomain"
        | "RequiredDomain"
        | "PreferredPrimaryDomain"
        | "RequiredDomainDistribution"
        | "NonPartiallyPlaceService";
    }[];
    defaultMoveCost?: "Zero" | "Low" | "Medium" | "High";
  };
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
  etag?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: string;
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: string;
    lastModifiedAt?: string;
  };
}
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
                "Invalid",
                "Affinity",
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
                "Invalid",
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
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    etag: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(Schema.String),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(Schema.String),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}/applications/{applicationName}/services/{serviceName}",
      apiVersion: "2021-06-01",
    }),
  ) as unknown as Schema.Codec<ServicesCreateOrUpdateInput>;

// Output Schema
export type ServicesCreateOrUpdateOutput = void;
export const ServicesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ServicesCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a Service Fabric service resource.
 *
 * Create or update a Service Fabric service resource with the specified name.
 *
 * @param subscriptionId - The customer subscription identifier.
 * @param resourceGroupName - The name of the resource group.
 * @param clusterName - The name of the cluster resource.
 * @param applicationName - The name of the application resource.
 * @param serviceName - The name of the service resource in the format of {applicationName}~{serviceName}.
 * @param api-version - The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2021-06-01" for this specification.
 */
export const ServicesCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ServicesCreateOrUpdateInput,
    outputSchema: ServicesCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface ServicesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  applicationName: string;
  serviceName: string;
}
export const ServicesDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  applicationName: Schema.String.pipe(T.PathParam()),
  serviceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}/applications/{applicationName}/services/{serviceName}",
    apiVersion: "2021-06-01",
  }),
) as unknown as Schema.Codec<ServicesDeleteInput>;

// Output Schema
export type ServicesDeleteOutput = void;
export const ServicesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ServicesDeleteOutput>;

// The operation
/**
 * Deletes a Service Fabric service resource.
 *
 * Delete a Service Fabric service resource with the specified name.
 *
 * @param subscriptionId - The customer subscription identifier.
 * @param resourceGroupName - The name of the resource group.
 * @param clusterName - The name of the cluster resource.
 * @param applicationName - The name of the application resource.
 * @param serviceName - The name of the service resource in the format of {applicationName}~{serviceName}.
 * @param api-version - The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2021-06-01" for this specification.
 */
export const ServicesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
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
export const ServicesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  applicationName: Schema.String.pipe(T.PathParam()),
  serviceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}/applications/{applicationName}/services/{serviceName}",
    apiVersion: "2021-06-01",
  }),
) as unknown as Schema.Codec<ServicesGetInput>;

// Output Schema
export interface ServicesGetOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
  etag?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: string;
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: string;
    lastModifiedAt?: string;
  };
}
export const ServicesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  location: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  etag: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(Schema.String),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(Schema.String),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<ServicesGetOutput>;

// The operation
/**
 * Gets a Service Fabric service resource.
 *
 * Get a Service Fabric service resource created or in the process of being created in the Service Fabric application resource.
 *
 * @param subscriptionId - The customer subscription identifier.
 * @param resourceGroupName - The name of the resource group.
 * @param clusterName - The name of the cluster resource.
 * @param applicationName - The name of the application resource.
 * @param serviceName - The name of the service resource in the format of {applicationName}~{serviceName}.
 * @param api-version - The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2021-06-01" for this specification.
 */
export const ServicesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ServicesGetInput,
  outputSchema: ServicesGetOutput,
}));
// Input Schema
export interface ServicesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  applicationName: string;
}
export const ServicesListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  applicationName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}/applications/{applicationName}/services",
    apiVersion: "2021-06-01",
  }),
) as unknown as Schema.Codec<ServicesListInput>;

// Output Schema
export interface ServicesListOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    location?: string;
    tags?: Record<string, string>;
    etag?: string;
    systemData?: {
      createdBy?: string;
      createdByType?: string;
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: string;
      lastModifiedAt?: string;
    };
  }[];
  nextLink?: string;
}
export const ServicesListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        location: Schema.optional(Schema.String),
        tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        etag: Schema.optional(Schema.String),
        systemData: Schema.optional(
          Schema.Struct({
            createdBy: Schema.optional(Schema.String),
            createdByType: Schema.optional(Schema.String),
            createdAt: Schema.optional(Schema.String),
            lastModifiedBy: Schema.optional(Schema.String),
            lastModifiedByType: Schema.optional(Schema.String),
            lastModifiedAt: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<ServicesListOutput>;

// The operation
/**
 * Gets the list of service resources created in the specified Service Fabric application resource.
 *
 * Gets all service resources created or in the process of being created in the Service Fabric application resource.
 *
 * @param subscriptionId - The customer subscription identifier.
 * @param resourceGroupName - The name of the resource group.
 * @param clusterName - The name of the cluster resource.
 * @param applicationName - The name of the application resource.
 * @param api-version - The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2021-06-01" for this specification.
 */
export const ServicesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ServicesListInput,
  outputSchema: ServicesListOutput,
}));
// Input Schema
export interface ServicesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  applicationName: string;
  serviceName: string;
  properties?: {
    placementConstraints?: string;
    correlationScheme?: {
      scheme: "Invalid" | "Affinity" | "AlignedAffinity" | "NonAlignedAffinity";
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
        | "Invalid"
        | "InvalidDomain"
        | "RequiredDomain"
        | "PreferredPrimaryDomain"
        | "RequiredDomainDistribution"
        | "NonPartiallyPlaceService";
    }[];
    defaultMoveCost?: "Zero" | "Low" | "Medium" | "High";
  };
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: Record<string, string>;
  etag?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: string;
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: string;
    lastModifiedAt?: string;
  };
}
export const ServicesUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
              "Invalid",
              "Affinity",
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
              "Invalid",
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
    }),
  ),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  location: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  etag: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(Schema.String),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(Schema.String),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}/applications/{applicationName}/services/{serviceName}",
    apiVersion: "2021-06-01",
  }),
) as unknown as Schema.Codec<ServicesUpdateInput>;

// Output Schema
export type ServicesUpdateOutput = void;
export const ServicesUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ServicesUpdateOutput>;

// The operation
/**
 * Updates a Service Fabric service resource.
 *
 * Update a Service Fabric service resource with the specified name.
 *
 * @param subscriptionId - The customer subscription identifier.
 * @param resourceGroupName - The name of the resource group.
 * @param clusterName - The name of the cluster resource.
 * @param applicationName - The name of the application resource.
 * @param serviceName - The name of the service resource in the format of {applicationName}~{serviceName}.
 * @param api-version - The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2021-06-01" for this specification.
 */
export const ServicesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ServicesUpdateInput,
  outputSchema: ServicesUpdateOutput,
}));
