/**
 * Azure AzureKusto API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface AttachedDatabaseConfigurationsCheckNameAvailabilityInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  name: string;
  type: "Microsoft.Kusto/clusters/attachedDatabaseConfigurations";
}
export const AttachedDatabaseConfigurationsCheckNameAvailabilityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
    type: Schema.Literals([
      "Microsoft.Kusto/clusters/attachedDatabaseConfigurations",
    ]),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/attachedDatabaseConfigurationCheckNameAvailability",
      apiVersion: "2025-02-14",
    }),
  ) as unknown as Schema.Codec<AttachedDatabaseConfigurationsCheckNameAvailabilityInput>;

// Output Schema
export interface AttachedDatabaseConfigurationsCheckNameAvailabilityOutput {
  nameAvailable?: boolean;
  name?: string;
  message?: string;
  reason?: "Invalid" | "AlreadyExists";
}
export const AttachedDatabaseConfigurationsCheckNameAvailabilityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.Literals(["Invalid", "AlreadyExists"])),
  }) as unknown as Schema.Codec<AttachedDatabaseConfigurationsCheckNameAvailabilityOutput>;

// The operation
/**
 * Checks that the attached database configuration resource name is valid and is not already in use.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Kusto cluster.
 */
export const AttachedDatabaseConfigurationsCheckNameAvailability =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AttachedDatabaseConfigurationsCheckNameAvailabilityInput,
    outputSchema: AttachedDatabaseConfigurationsCheckNameAvailabilityOutput,
  }));
// Input Schema
export interface AttachedDatabaseConfigurationsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  attachedDatabaseConfigurationName: string;
  properties?: {
    provisioningState?:
      | "Running"
      | "Creating"
      | "Deleting"
      | "Succeeded"
      | "Failed"
      | "Moving"
      | "Canceled";
    databaseName: string;
    clusterResourceId: string;
    attachedDatabaseNames?: string[];
    defaultPrincipalsModificationKind: "Union" | "Replace" | "None";
    tableLevelSharingProperties?: {
      tablesToInclude?: string[];
      tablesToExclude?: string[];
      externalTablesToInclude?: string[];
      externalTablesToExclude?: string[];
      materializedViewsToInclude?: string[];
      materializedViewsToExclude?: string[];
      functionsToInclude?: string[];
      functionsToExclude?: string[];
    };
    databaseNameOverride?: string;
    databaseNamePrefix?: string;
  };
  location?: string;
}
export const AttachedDatabaseConfigurationsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    attachedDatabaseConfigurationName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Running",
            "Creating",
            "Deleting",
            "Succeeded",
            "Failed",
            "Moving",
            "Canceled",
          ]),
        ),
        databaseName: Schema.String,
        clusterResourceId: Schema.String,
        attachedDatabaseNames: Schema.optional(Schema.Array(Schema.String)),
        defaultPrincipalsModificationKind: Schema.Literals([
          "Union",
          "Replace",
          "None",
        ]),
        tableLevelSharingProperties: Schema.optional(
          Schema.Struct({
            tablesToInclude: Schema.optional(Schema.Array(Schema.String)),
            tablesToExclude: Schema.optional(Schema.Array(Schema.String)),
            externalTablesToInclude: Schema.optional(
              Schema.Array(Schema.String),
            ),
            externalTablesToExclude: Schema.optional(
              Schema.Array(Schema.String),
            ),
            materializedViewsToInclude: Schema.optional(
              Schema.Array(Schema.String),
            ),
            materializedViewsToExclude: Schema.optional(
              Schema.Array(Schema.String),
            ),
            functionsToInclude: Schema.optional(Schema.Array(Schema.String)),
            functionsToExclude: Schema.optional(Schema.Array(Schema.String)),
          }),
        ),
        databaseNameOverride: Schema.optional(Schema.String),
        databaseNamePrefix: Schema.optional(Schema.String),
      }),
    ),
    location: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/attachedDatabaseConfigurations/{attachedDatabaseConfigurationName}",
      apiVersion: "2025-02-14",
    }),
  ) as unknown as Schema.Codec<AttachedDatabaseConfigurationsCreateOrUpdateInput>;

// Output Schema
export interface AttachedDatabaseConfigurationsCreateOrUpdateOutput {
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
export const AttachedDatabaseConfigurationsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<AttachedDatabaseConfigurationsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates an attached database configuration.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Kusto cluster.
 * @param attachedDatabaseConfigurationName - The name of the attached database configuration.
 */
export const AttachedDatabaseConfigurationsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AttachedDatabaseConfigurationsCreateOrUpdateInput,
    outputSchema: AttachedDatabaseConfigurationsCreateOrUpdateOutput,
  }));
// Input Schema
export interface AttachedDatabaseConfigurationsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  attachedDatabaseConfigurationName: string;
}
export const AttachedDatabaseConfigurationsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    attachedDatabaseConfigurationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/attachedDatabaseConfigurations/{attachedDatabaseConfigurationName}",
      apiVersion: "2025-02-14",
    }),
  ) as unknown as Schema.Codec<AttachedDatabaseConfigurationsDeleteInput>;

// Output Schema
export type AttachedDatabaseConfigurationsDeleteOutput = void;
export const AttachedDatabaseConfigurationsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<AttachedDatabaseConfigurationsDeleteOutput>;

// The operation
/**
 * Deletes the attached database configuration with the given name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Kusto cluster.
 * @param attachedDatabaseConfigurationName - The name of the attached database configuration.
 */
export const AttachedDatabaseConfigurationsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AttachedDatabaseConfigurationsDeleteInput,
    outputSchema: AttachedDatabaseConfigurationsDeleteOutput,
  }));
// Input Schema
export interface AttachedDatabaseConfigurationsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  attachedDatabaseConfigurationName: string;
}
export const AttachedDatabaseConfigurationsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    attachedDatabaseConfigurationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/attachedDatabaseConfigurations/{attachedDatabaseConfigurationName}",
      apiVersion: "2025-02-14",
    }),
  ) as unknown as Schema.Codec<AttachedDatabaseConfigurationsGetInput>;

// Output Schema
export interface AttachedDatabaseConfigurationsGetOutput {
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
export const AttachedDatabaseConfigurationsGetOutput =
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
  }) as unknown as Schema.Codec<AttachedDatabaseConfigurationsGetOutput>;

// The operation
/**
 * Returns an attached database configuration.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Kusto cluster.
 * @param attachedDatabaseConfigurationName - The name of the attached database configuration.
 */
export const AttachedDatabaseConfigurationsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AttachedDatabaseConfigurationsGetInput,
    outputSchema: AttachedDatabaseConfigurationsGetOutput,
  }));
// Input Schema
export interface AttachedDatabaseConfigurationsListByClusterInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
}
export const AttachedDatabaseConfigurationsListByClusterInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/attachedDatabaseConfigurations",
      apiVersion: "2025-02-14",
    }),
  ) as unknown as Schema.Codec<AttachedDatabaseConfigurationsListByClusterInput>;

// Output Schema
export interface AttachedDatabaseConfigurationsListByClusterOutput {
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
export const AttachedDatabaseConfigurationsListByClusterOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<AttachedDatabaseConfigurationsListByClusterOutput>;

// The operation
/**
 * Returns the list of attached database configurations of the given Kusto cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Kusto cluster.
 */
export const AttachedDatabaseConfigurationsListByCluster =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AttachedDatabaseConfigurationsListByClusterInput,
    outputSchema: AttachedDatabaseConfigurationsListByClusterOutput,
  }));
// Input Schema
export interface ClusterPrincipalAssignmentsCheckNameAvailabilityInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  name: string;
  type: "Microsoft.Kusto/clusters/principalAssignments";
}
export const ClusterPrincipalAssignmentsCheckNameAvailabilityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
    type: Schema.Literals(["Microsoft.Kusto/clusters/principalAssignments"]),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/checkPrincipalAssignmentNameAvailability",
      apiVersion: "2025-02-14",
    }),
  ) as unknown as Schema.Codec<ClusterPrincipalAssignmentsCheckNameAvailabilityInput>;

// Output Schema
export interface ClusterPrincipalAssignmentsCheckNameAvailabilityOutput {
  nameAvailable?: boolean;
  name?: string;
  message?: string;
  reason?: "Invalid" | "AlreadyExists";
}
export const ClusterPrincipalAssignmentsCheckNameAvailabilityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.Literals(["Invalid", "AlreadyExists"])),
  }) as unknown as Schema.Codec<ClusterPrincipalAssignmentsCheckNameAvailabilityOutput>;

// The operation
/**
 * Checks that the principal assignment name is valid and is not already in use.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Kusto cluster.
 */
export const ClusterPrincipalAssignmentsCheckNameAvailability =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ClusterPrincipalAssignmentsCheckNameAvailabilityInput,
    outputSchema: ClusterPrincipalAssignmentsCheckNameAvailabilityOutput,
  }));
// Input Schema
export interface ClusterPrincipalAssignmentsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  principalAssignmentName: string;
  properties?: {
    principalId: string;
    role: "AllDatabasesAdmin" | "AllDatabasesViewer" | "AllDatabasesMonitor";
    tenantId?: string;
    principalType: "App" | "Group" | "User";
    tenantName?: string;
    principalName?: string;
    provisioningState?:
      | "Running"
      | "Creating"
      | "Deleting"
      | "Succeeded"
      | "Failed"
      | "Moving"
      | "Canceled";
    aadObjectId?: string;
  };
}
export const ClusterPrincipalAssignmentsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    principalAssignmentName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        principalId: Schema.String,
        role: Schema.Literals([
          "AllDatabasesAdmin",
          "AllDatabasesViewer",
          "AllDatabasesMonitor",
        ]),
        tenantId: Schema.optional(Schema.String),
        principalType: Schema.Literals(["App", "Group", "User"]),
        tenantName: Schema.optional(Schema.String),
        principalName: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Running",
            "Creating",
            "Deleting",
            "Succeeded",
            "Failed",
            "Moving",
            "Canceled",
          ]),
        ),
        aadObjectId: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/principalAssignments/{principalAssignmentName}",
      apiVersion: "2025-02-14",
    }),
  ) as unknown as Schema.Codec<ClusterPrincipalAssignmentsCreateOrUpdateInput>;

// Output Schema
export interface ClusterPrincipalAssignmentsCreateOrUpdateOutput {
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
export const ClusterPrincipalAssignmentsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ClusterPrincipalAssignmentsCreateOrUpdateOutput>;

// The operation
/**
 * Create a Kusto cluster principalAssignment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Kusto cluster.
 * @param principalAssignmentName - The name of the Kusto principalAssignment.
 */
export const ClusterPrincipalAssignmentsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ClusterPrincipalAssignmentsCreateOrUpdateInput,
    outputSchema: ClusterPrincipalAssignmentsCreateOrUpdateOutput,
  }));
// Input Schema
export interface ClusterPrincipalAssignmentsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  principalAssignmentName: string;
}
export const ClusterPrincipalAssignmentsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    principalAssignmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/principalAssignments/{principalAssignmentName}",
      apiVersion: "2025-02-14",
    }),
  ) as unknown as Schema.Codec<ClusterPrincipalAssignmentsDeleteInput>;

// Output Schema
export type ClusterPrincipalAssignmentsDeleteOutput = void;
export const ClusterPrincipalAssignmentsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ClusterPrincipalAssignmentsDeleteOutput>;

// The operation
/**
 * Deletes a Kusto cluster principalAssignment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Kusto cluster.
 * @param principalAssignmentName - The name of the Kusto principalAssignment.
 */
export const ClusterPrincipalAssignmentsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ClusterPrincipalAssignmentsDeleteInput,
    outputSchema: ClusterPrincipalAssignmentsDeleteOutput,
  }));
// Input Schema
export interface ClusterPrincipalAssignmentsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  principalAssignmentName: string;
}
export const ClusterPrincipalAssignmentsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    principalAssignmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/principalAssignments/{principalAssignmentName}",
      apiVersion: "2025-02-14",
    }),
  ) as unknown as Schema.Codec<ClusterPrincipalAssignmentsGetInput>;

// Output Schema
export interface ClusterPrincipalAssignmentsGetOutput {
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
export const ClusterPrincipalAssignmentsGetOutput =
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
  }) as unknown as Schema.Codec<ClusterPrincipalAssignmentsGetOutput>;

// The operation
/**
 * Gets a Kusto cluster principalAssignment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Kusto cluster.
 * @param principalAssignmentName - The name of the Kusto principalAssignment.
 */
export const ClusterPrincipalAssignmentsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ClusterPrincipalAssignmentsGetInput,
    outputSchema: ClusterPrincipalAssignmentsGetOutput,
  }));
// Input Schema
export interface ClusterPrincipalAssignmentsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
}
export const ClusterPrincipalAssignmentsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/principalAssignments",
      apiVersion: "2025-02-14",
    }),
  ) as unknown as Schema.Codec<ClusterPrincipalAssignmentsListInput>;

// Output Schema
export interface ClusterPrincipalAssignmentsListOutput {
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
export const ClusterPrincipalAssignmentsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<ClusterPrincipalAssignmentsListOutput>;

// The operation
/**
 * Lists all Kusto cluster principalAssignments.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Kusto cluster.
 */
export const ClusterPrincipalAssignmentsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ClusterPrincipalAssignmentsListInput,
    outputSchema: ClusterPrincipalAssignmentsListOutput,
  }));
// Input Schema
export interface ClustersAddCalloutPoliciesInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  value: {
    calloutUriRegex?: string;
    calloutType?:
      | "kusto"
      | "sql"
      | "cosmosdb"
      | "external_data"
      | "azure_digital_twins"
      | "sandbox_artifacts"
      | "webapi"
      | "mysql"
      | "postgresql"
      | "genevametrics"
      | "azure_openai";
    outboundAccess?: "Allow" | "Deny";
    calloutId?: string;
  }[];
  nextLink?: string;
}
export const ClustersAddCalloutPoliciesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    value: Schema.Array(
      Schema.Struct({
        calloutUriRegex: Schema.optional(Schema.String),
        calloutType: Schema.optional(
          Schema.Literals([
            "kusto",
            "sql",
            "cosmosdb",
            "external_data",
            "azure_digital_twins",
            "sandbox_artifacts",
            "webapi",
            "mysql",
            "postgresql",
            "genevametrics",
            "azure_openai",
          ]),
        ),
        outboundAccess: Schema.optional(Schema.Literals(["Allow", "Deny"])),
        calloutId: Schema.optional(Schema.String),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/addCalloutPolicies",
      apiVersion: "2025-02-14",
    }),
  ) as unknown as Schema.Codec<ClustersAddCalloutPoliciesInput>;

// Output Schema
export type ClustersAddCalloutPoliciesOutput = void;
export const ClustersAddCalloutPoliciesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ClustersAddCalloutPoliciesOutput>;

// The operation
/**
 * Adds a list of callout policies for engine services.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Kusto cluster.
 */
export const ClustersAddCalloutPolicies = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ClustersAddCalloutPoliciesInput,
    outputSchema: ClustersAddCalloutPoliciesOutput,
  }),
);
// Input Schema
export interface ClustersAddLanguageExtensionsInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  value?: {
    languageExtensionName?: "PYTHON" | "R";
    languageExtensionImageName?:
      | "R"
      | "Python3_6_5"
      | "Python3_10_8"
      | "Python3_10_8_DL"
      | "PythonCustomImage"
      | "Python3_11_7"
      | "Python3_11_7_DL";
    languageExtensionCustomImageName?: string;
  }[];
  nextLink?: string;
}
export const ClustersAddLanguageExtensionsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          languageExtensionName: Schema.optional(
            Schema.Literals(["PYTHON", "R"]),
          ),
          languageExtensionImageName: Schema.optional(
            Schema.Literals([
              "R",
              "Python3_6_5",
              "Python3_10_8",
              "Python3_10_8_DL",
              "PythonCustomImage",
              "Python3_11_7",
              "Python3_11_7_DL",
            ]),
          ),
          languageExtensionCustomImageName: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/addLanguageExtensions",
      apiVersion: "2025-02-14",
    }),
  ) as unknown as Schema.Codec<ClustersAddLanguageExtensionsInput>;

// Output Schema
export type ClustersAddLanguageExtensionsOutput = void;
export const ClustersAddLanguageExtensionsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ClustersAddLanguageExtensionsOutput>;

// The operation
/**
 * Add a list of language extensions that can run within KQL queries.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Kusto cluster.
 */
export const ClustersAddLanguageExtensions =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ClustersAddLanguageExtensionsInput,
    outputSchema: ClustersAddLanguageExtensionsOutput,
  }));
// Input Schema
export interface ClustersCheckNameAvailabilityInput {
  subscriptionId: string;
  location: string;
  name: string;
  type: "Microsoft.Kusto/clusters";
}
export const ClustersCheckNameAvailabilityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
    type: Schema.Literals(["Microsoft.Kusto/clusters"]),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Kusto/locations/{location}/checkNameAvailability",
      apiVersion: "2025-02-14",
    }),
  ) as unknown as Schema.Codec<ClustersCheckNameAvailabilityInput>;

// Output Schema
export interface ClustersCheckNameAvailabilityOutput {
  nameAvailable?: boolean;
  name?: string;
  message?: string;
  reason?: "Invalid" | "AlreadyExists";
}
export const ClustersCheckNameAvailabilityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.Literals(["Invalid", "AlreadyExists"])),
  }) as unknown as Schema.Codec<ClustersCheckNameAvailabilityOutput>;

// The operation
/**
 * Checks that the cluster name is valid and is not already in use.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The name of Azure region.
 */
export const ClustersCheckNameAvailability =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ClustersCheckNameAvailabilityInput,
    outputSchema: ClustersCheckNameAvailabilityOutput,
  }));
// Input Schema
export interface ClustersCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  properties?: {
    state?:
      | "Creating"
      | "Unavailable"
      | "Running"
      | "Deleting"
      | "Deleted"
      | "Stopping"
      | "Stopped"
      | "Starting"
      | "Updating"
      | "Migrated";
    provisioningState?:
      | "Running"
      | "Creating"
      | "Deleting"
      | "Succeeded"
      | "Failed"
      | "Moving"
      | "Canceled";
    uri?: string;
    dataIngestionUri?: string;
    stateReason?: string;
    trustedExternalTenants?: { value?: string }[];
    optimizedAutoscale?: {
      version: number;
      isEnabled: boolean;
      minimum: number;
      maximum: number;
    };
    enableDiskEncryption?: boolean;
    enableStreamingIngest?: boolean;
    virtualNetworkConfiguration?: {
      subnetId: string;
      enginePublicIpId: string;
      dataManagementPublicIpId: string;
      state?: "Enabled" | "Disabled";
    };
    keyVaultProperties?: {
      keyName?: string;
      keyVersion?: string;
      keyVaultUri?: string;
      userIdentity?: string;
      federatedIdentityClientId?: string;
    };
    enablePurge?: boolean;
    languageExtensions?: {
      value?: {
        languageExtensionName?: "PYTHON" | "R";
        languageExtensionImageName?:
          | "R"
          | "Python3_6_5"
          | "Python3_10_8"
          | "Python3_10_8_DL"
          | "PythonCustomImage"
          | "Python3_11_7"
          | "Python3_11_7_DL";
        languageExtensionCustomImageName?: string;
      }[];
      nextLink?: string;
    };
    enableDoubleEncryption?: boolean;
    publicNetworkAccess?: "Enabled" | "Disabled" | "SecuredByPerimeter";
    allowedIpRangeList?: string[];
    engineType?: "V2" | "V3";
    acceptedAudiences?: { value?: string }[];
    enableAutoStop?: boolean;
    restrictOutboundNetworkAccess?: "Enabled" | "Disabled";
    allowedFqdnList?: string[];
    calloutPolicies?: {
      calloutUriRegex?: string;
      calloutType?:
        | "kusto"
        | "sql"
        | "cosmosdb"
        | "external_data"
        | "azure_digital_twins"
        | "sandbox_artifacts"
        | "webapi"
        | "mysql"
        | "postgresql"
        | "genevametrics"
        | "azure_openai";
      outboundAccess?: "Allow" | "Deny";
      calloutId?: string;
    }[];
    publicIPType?: "IPv4" | "DualStack";
    virtualClusterGraduationProperties?: string;
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
    migrationCluster?: {
      id?: string;
      uri?: string;
      dataIngestionUri?: string;
      role?: "Source" | "Destination";
    };
    zoneStatus?: "NonZonal" | "ZonalInconsistency" | "Zonal";
  };
  sku: {
    name:
      | "Dev(No SLA)_Standard_D11_v2"
      | "Dev(No SLA)_Standard_E2a_v4"
      | "Standard_D11_v2"
      | "Standard_D12_v2"
      | "Standard_D13_v2"
      | "Standard_D14_v2"
      | "Standard_D32d_v4"
      | "Standard_D16d_v5"
      | "Standard_D32d_v5"
      | "Standard_DS13_v2+1TB_PS"
      | "Standard_DS13_v2+2TB_PS"
      | "Standard_DS14_v2+3TB_PS"
      | "Standard_DS14_v2+4TB_PS"
      | "Standard_L4s"
      | "Standard_L8s"
      | "Standard_L16s"
      | "Standard_L8s_v2"
      | "Standard_L16s_v2"
      | "Standard_L8s_v3"
      | "Standard_L16s_v3"
      | "Standard_L32s_v3"
      | "Standard_L8as_v3"
      | "Standard_L16as_v3"
      | "Standard_L32as_v3"
      | "Standard_E64i_v3"
      | "Standard_E80ids_v4"
      | "Standard_E2a_v4"
      | "Standard_E4a_v4"
      | "Standard_E8a_v4"
      | "Standard_E16a_v4"
      | "Standard_E8as_v4+1TB_PS"
      | "Standard_E8as_v4+2TB_PS"
      | "Standard_E16as_v4+3TB_PS"
      | "Standard_E16as_v4+4TB_PS"
      | "Standard_E8as_v5+1TB_PS"
      | "Standard_E8as_v5+2TB_PS"
      | "Standard_E16as_v5+3TB_PS"
      | "Standard_E16as_v5+4TB_PS"
      | "Standard_E2ads_v5"
      | "Standard_E4ads_v5"
      | "Standard_E8ads_v5"
      | "Standard_E16ads_v5"
      | "Standard_EC8as_v5+1TB_PS"
      | "Standard_EC8as_v5+2TB_PS"
      | "Standard_EC16as_v5+3TB_PS"
      | "Standard_EC16as_v5+4TB_PS"
      | "Standard_EC8ads_v5"
      | "Standard_EC16ads_v5"
      | "Standard_E8s_v4+1TB_PS"
      | "Standard_E8s_v4+2TB_PS"
      | "Standard_E16s_v4+3TB_PS"
      | "Standard_E16s_v4+4TB_PS"
      | "Standard_E8s_v5+1TB_PS"
      | "Standard_E8s_v5+2TB_PS"
      | "Standard_E16s_v5+3TB_PS"
      | "Standard_E16s_v5+4TB_PS"
      | "Standard_E2d_v4"
      | "Standard_E4d_v4"
      | "Standard_E8d_v4"
      | "Standard_E16d_v4"
      | "Standard_E2d_v5"
      | "Standard_E4d_v5"
      | "Standard_E8d_v5"
      | "Standard_E16d_v5";
    capacity?: number;
    tier: "Basic" | "Standard";
  };
  zones?: string[];
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
  etag?: string;
  tags?: Record<string, string>;
  location: string;
}
export const ClustersCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        state: Schema.optional(
          Schema.Literals([
            "Creating",
            "Unavailable",
            "Running",
            "Deleting",
            "Deleted",
            "Stopping",
            "Stopped",
            "Starting",
            "Updating",
            "Migrated",
          ]),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Running",
            "Creating",
            "Deleting",
            "Succeeded",
            "Failed",
            "Moving",
            "Canceled",
          ]),
        ),
        uri: Schema.optional(Schema.String),
        dataIngestionUri: Schema.optional(Schema.String),
        stateReason: Schema.optional(Schema.String),
        trustedExternalTenants: Schema.optional(
          Schema.Array(
            Schema.Struct({
              value: Schema.optional(Schema.String),
            }),
          ),
        ),
        optimizedAutoscale: Schema.optional(
          Schema.Struct({
            version: Schema.Number,
            isEnabled: Schema.Boolean,
            minimum: Schema.Number,
            maximum: Schema.Number,
          }),
        ),
        enableDiskEncryption: Schema.optional(Schema.Boolean),
        enableStreamingIngest: Schema.optional(Schema.Boolean),
        virtualNetworkConfiguration: Schema.optional(
          Schema.Struct({
            subnetId: Schema.String,
            enginePublicIpId: Schema.String,
            dataManagementPublicIpId: Schema.String,
            state: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
          }),
        ),
        keyVaultProperties: Schema.optional(
          Schema.Struct({
            keyName: Schema.optional(Schema.String),
            keyVersion: Schema.optional(Schema.String),
            keyVaultUri: Schema.optional(Schema.String),
            userIdentity: Schema.optional(Schema.String),
            federatedIdentityClientId: Schema.optional(Schema.String),
          }),
        ),
        enablePurge: Schema.optional(Schema.Boolean),
        languageExtensions: Schema.optional(
          Schema.Struct({
            value: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  languageExtensionName: Schema.optional(
                    Schema.Literals(["PYTHON", "R"]),
                  ),
                  languageExtensionImageName: Schema.optional(
                    Schema.Literals([
                      "R",
                      "Python3_6_5",
                      "Python3_10_8",
                      "Python3_10_8_DL",
                      "PythonCustomImage",
                      "Python3_11_7",
                      "Python3_11_7_DL",
                    ]),
                  ),
                  languageExtensionCustomImageName: Schema.optional(
                    Schema.String,
                  ),
                }),
              ),
            ),
            nextLink: Schema.optional(Schema.String),
          }),
        ),
        enableDoubleEncryption: Schema.optional(Schema.Boolean),
        publicNetworkAccess: Schema.optional(
          Schema.Literals(["Enabled", "Disabled", "SecuredByPerimeter"]),
        ),
        allowedIpRangeList: Schema.optional(Schema.Array(Schema.String)),
        engineType: Schema.optional(Schema.Literals(["V2", "V3"])),
        acceptedAudiences: Schema.optional(
          Schema.Array(
            Schema.Struct({
              value: Schema.optional(Schema.String),
            }),
          ),
        ),
        enableAutoStop: Schema.optional(Schema.Boolean),
        restrictOutboundNetworkAccess: Schema.optional(
          Schema.Literals(["Enabled", "Disabled"]),
        ),
        allowedFqdnList: Schema.optional(Schema.Array(Schema.String)),
        calloutPolicies: Schema.optional(
          Schema.Array(
            Schema.Struct({
              calloutUriRegex: Schema.optional(Schema.String),
              calloutType: Schema.optional(
                Schema.Literals([
                  "kusto",
                  "sql",
                  "cosmosdb",
                  "external_data",
                  "azure_digital_twins",
                  "sandbox_artifacts",
                  "webapi",
                  "mysql",
                  "postgresql",
                  "genevametrics",
                  "azure_openai",
                ]),
              ),
              outboundAccess: Schema.optional(
                Schema.Literals(["Allow", "Deny"]),
              ),
              calloutId: Schema.optional(Schema.String),
            }),
          ),
        ),
        publicIPType: Schema.optional(Schema.Literals(["IPv4", "DualStack"])),
        virtualClusterGraduationProperties: Schema.optional(Schema.String),
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
        migrationCluster: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
            uri: Schema.optional(Schema.String),
            dataIngestionUri: Schema.optional(Schema.String),
            role: Schema.optional(Schema.Literals(["Source", "Destination"])),
          }),
        ),
        zoneStatus: Schema.optional(
          Schema.Literals(["NonZonal", "ZonalInconsistency", "Zonal"]),
        ),
      }),
    ),
    sku: Schema.Struct({
      name: Schema.Literals([
        "Dev(No SLA)_Standard_D11_v2",
        "Dev(No SLA)_Standard_E2a_v4",
        "Standard_D11_v2",
        "Standard_D12_v2",
        "Standard_D13_v2",
        "Standard_D14_v2",
        "Standard_D32d_v4",
        "Standard_D16d_v5",
        "Standard_D32d_v5",
        "Standard_DS13_v2+1TB_PS",
        "Standard_DS13_v2+2TB_PS",
        "Standard_DS14_v2+3TB_PS",
        "Standard_DS14_v2+4TB_PS",
        "Standard_L4s",
        "Standard_L8s",
        "Standard_L16s",
        "Standard_L8s_v2",
        "Standard_L16s_v2",
        "Standard_L8s_v3",
        "Standard_L16s_v3",
        "Standard_L32s_v3",
        "Standard_L8as_v3",
        "Standard_L16as_v3",
        "Standard_L32as_v3",
        "Standard_E64i_v3",
        "Standard_E80ids_v4",
        "Standard_E2a_v4",
        "Standard_E4a_v4",
        "Standard_E8a_v4",
        "Standard_E16a_v4",
        "Standard_E8as_v4+1TB_PS",
        "Standard_E8as_v4+2TB_PS",
        "Standard_E16as_v4+3TB_PS",
        "Standard_E16as_v4+4TB_PS",
        "Standard_E8as_v5+1TB_PS",
        "Standard_E8as_v5+2TB_PS",
        "Standard_E16as_v5+3TB_PS",
        "Standard_E16as_v5+4TB_PS",
        "Standard_E2ads_v5",
        "Standard_E4ads_v5",
        "Standard_E8ads_v5",
        "Standard_E16ads_v5",
        "Standard_EC8as_v5+1TB_PS",
        "Standard_EC8as_v5+2TB_PS",
        "Standard_EC16as_v5+3TB_PS",
        "Standard_EC16as_v5+4TB_PS",
        "Standard_EC8ads_v5",
        "Standard_EC16ads_v5",
        "Standard_E8s_v4+1TB_PS",
        "Standard_E8s_v4+2TB_PS",
        "Standard_E16s_v4+3TB_PS",
        "Standard_E16s_v4+4TB_PS",
        "Standard_E8s_v5+1TB_PS",
        "Standard_E8s_v5+2TB_PS",
        "Standard_E16s_v5+3TB_PS",
        "Standard_E16s_v5+4TB_PS",
        "Standard_E2d_v4",
        "Standard_E4d_v4",
        "Standard_E8d_v4",
        "Standard_E16d_v4",
        "Standard_E2d_v5",
        "Standard_E4d_v5",
        "Standard_E8d_v5",
        "Standard_E16d_v5",
      ]),
      capacity: Schema.optional(Schema.Number),
      tier: Schema.Literals(["Basic", "Standard"]),
    }),
    zones: Schema.optional(Schema.Array(Schema.String)),
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
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}",
      apiVersion: "2025-02-14",
    }),
  ) as unknown as Schema.Codec<ClustersCreateOrUpdateInput>;

// Output Schema
export interface ClustersCreateOrUpdateOutput {
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
export const ClustersCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ClustersCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a Kusto cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Kusto cluster.
 * @param If-Match - The ETag of the cluster. Omit this value to always overwrite the current cluster. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 * @param If-None-Match - Set to '*' to allow a new cluster to be created, but to prevent updating an existing cluster. Other values will result in a 412 Pre-condition Failed response.
 */
export const ClustersCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ClustersCreateOrUpdateInput,
    outputSchema: ClustersCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface ClustersDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
}
export const ClustersDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}",
    apiVersion: "2025-02-14",
  }),
) as unknown as Schema.Codec<ClustersDeleteInput>;

// Output Schema
export type ClustersDeleteOutput = void;
export const ClustersDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ClustersDeleteOutput>;

// The operation
/**
 * Deletes a Kusto cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Kusto cluster.
 */
export const ClustersDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ClustersDeleteInput,
  outputSchema: ClustersDeleteOutput,
}));
// Input Schema
export interface ClustersDetachFollowerDatabasesInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  clusterResourceId: string;
  attachedDatabaseConfigurationName: string;
  databaseName?: string;
  tableLevelSharingProperties?: {
    tablesToInclude?: string[];
    tablesToExclude?: string[];
    externalTablesToInclude?: string[];
    externalTablesToExclude?: string[];
    materializedViewsToInclude?: string[];
    materializedViewsToExclude?: string[];
    functionsToInclude?: string[];
    functionsToExclude?: string[];
  };
  databaseShareOrigin?: "Direct" | "DataShare" | "Other";
}
export const ClustersDetachFollowerDatabasesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    clusterResourceId: Schema.String,
    attachedDatabaseConfigurationName: Schema.String,
    databaseName: Schema.optional(Schema.String),
    tableLevelSharingProperties: Schema.optional(
      Schema.Struct({
        tablesToInclude: Schema.optional(Schema.Array(Schema.String)),
        tablesToExclude: Schema.optional(Schema.Array(Schema.String)),
        externalTablesToInclude: Schema.optional(Schema.Array(Schema.String)),
        externalTablesToExclude: Schema.optional(Schema.Array(Schema.String)),
        materializedViewsToInclude: Schema.optional(
          Schema.Array(Schema.String),
        ),
        materializedViewsToExclude: Schema.optional(
          Schema.Array(Schema.String),
        ),
        functionsToInclude: Schema.optional(Schema.Array(Schema.String)),
        functionsToExclude: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
    databaseShareOrigin: Schema.optional(
      Schema.Literals(["Direct", "DataShare", "Other"]),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/detachFollowerDatabases",
      apiVersion: "2025-02-14",
    }),
  ) as unknown as Schema.Codec<ClustersDetachFollowerDatabasesInput>;

// Output Schema
export type ClustersDetachFollowerDatabasesOutput = void;
export const ClustersDetachFollowerDatabasesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ClustersDetachFollowerDatabasesOutput>;

// The operation
/**
 * Detaches all followers of a database owned by this cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Kusto cluster.
 */
export const ClustersDetachFollowerDatabases =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ClustersDetachFollowerDatabasesInput,
    outputSchema: ClustersDetachFollowerDatabasesOutput,
  }));
// Input Schema
export interface ClustersDiagnoseVirtualNetworkInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
}
export const ClustersDiagnoseVirtualNetworkInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/diagnoseVirtualNetwork",
      apiVersion: "2025-02-14",
    }),
  ) as unknown as Schema.Codec<ClustersDiagnoseVirtualNetworkInput>;

// Output Schema
export interface ClustersDiagnoseVirtualNetworkOutput {
  findings?: string[];
}
export const ClustersDiagnoseVirtualNetworkOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    findings: Schema.optional(Schema.Array(Schema.String)),
  }) as unknown as Schema.Codec<ClustersDiagnoseVirtualNetworkOutput>;

// The operation
/**
 * Diagnoses network connectivity status for external resources on which the service is dependent on.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Kusto cluster.
 */
export const ClustersDiagnoseVirtualNetwork =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ClustersDiagnoseVirtualNetworkInput,
    outputSchema: ClustersDiagnoseVirtualNetworkOutput,
  }));
// Input Schema
export interface ClustersGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
}
export const ClustersGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}",
    apiVersion: "2025-02-14",
  }),
) as unknown as Schema.Codec<ClustersGetInput>;

// Output Schema
export interface ClustersGetOutput {
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
export const ClustersGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ClustersGetOutput>;

// The operation
/**
 * Gets a Kusto cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Kusto cluster.
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
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.Kusto/clusters",
    apiVersion: "2025-02-14",
  }),
) as unknown as Schema.Codec<ClustersListInput>;

// Output Schema
export interface ClustersListOutput {
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
export const ClustersListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ClustersListOutput>;

// The operation
/**
 * Lists all Kusto clusters within a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const ClustersList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ClustersListInput,
  outputSchema: ClustersListOutput,
}));
// Input Schema
export interface ClustersListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const ClustersListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters",
      apiVersion: "2025-02-14",
    }),
  ) as unknown as Schema.Codec<ClustersListByResourceGroupInput>;

// Output Schema
export interface ClustersListByResourceGroupOutput {
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
export const ClustersListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<ClustersListByResourceGroupOutput>;

// The operation
/**
 * Lists all Kusto clusters within a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ClustersListByResourceGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ClustersListByResourceGroupInput,
    outputSchema: ClustersListByResourceGroupOutput,
  }),
);
// Input Schema
export interface ClustersListCalloutPoliciesInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
}
export const ClustersListCalloutPoliciesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/listCalloutPolicies",
      apiVersion: "2025-02-14",
    }),
  ) as unknown as Schema.Codec<ClustersListCalloutPoliciesInput>;

// Output Schema
export interface ClustersListCalloutPoliciesOutput {
  value: {
    calloutUriRegex?: string;
    calloutType?:
      | "kusto"
      | "sql"
      | "cosmosdb"
      | "external_data"
      | "azure_digital_twins"
      | "sandbox_artifacts"
      | "webapi"
      | "mysql"
      | "postgresql"
      | "genevametrics"
      | "azure_openai";
    outboundAccess?: "Allow" | "Deny";
    calloutId?: string;
  }[];
  nextLink?: string;
}
export const ClustersListCalloutPoliciesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        calloutUriRegex: Schema.optional(Schema.String),
        calloutType: Schema.optional(
          Schema.Literals([
            "kusto",
            "sql",
            "cosmosdb",
            "external_data",
            "azure_digital_twins",
            "sandbox_artifacts",
            "webapi",
            "mysql",
            "postgresql",
            "genevametrics",
            "azure_openai",
          ]),
        ),
        outboundAccess: Schema.optional(Schema.Literals(["Allow", "Deny"])),
        calloutId: Schema.optional(Schema.String),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ClustersListCalloutPoliciesOutput>;

// The operation
/**
 * Returns the allowed callout policies for the specified service.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Kusto cluster.
 */
export const ClustersListCalloutPolicies = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ClustersListCalloutPoliciesInput,
    outputSchema: ClustersListCalloutPoliciesOutput,
  }),
);
// Input Schema
export interface ClustersListFollowerDatabasesInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
}
export const ClustersListFollowerDatabasesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/listFollowerDatabases",
      apiVersion: "2025-02-14",
    }),
  ) as unknown as Schema.Codec<ClustersListFollowerDatabasesInput>;

// Output Schema
export interface ClustersListFollowerDatabasesOutput {
  value?: {
    clusterResourceId: string;
    attachedDatabaseConfigurationName: string;
    databaseName?: string;
    tableLevelSharingProperties?: {
      tablesToInclude?: string[];
      tablesToExclude?: string[];
      externalTablesToInclude?: string[];
      externalTablesToExclude?: string[];
      materializedViewsToInclude?: string[];
      materializedViewsToExclude?: string[];
      functionsToInclude?: string[];
      functionsToExclude?: string[];
    };
    databaseShareOrigin?: "Direct" | "DataShare" | "Other";
  }[];
  nextLink?: string;
}
export const ClustersListFollowerDatabasesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          clusterResourceId: Schema.String,
          attachedDatabaseConfigurationName: Schema.String,
          databaseName: Schema.optional(Schema.String),
          tableLevelSharingProperties: Schema.optional(
            Schema.Struct({
              tablesToInclude: Schema.optional(Schema.Array(Schema.String)),
              tablesToExclude: Schema.optional(Schema.Array(Schema.String)),
              externalTablesToInclude: Schema.optional(
                Schema.Array(Schema.String),
              ),
              externalTablesToExclude: Schema.optional(
                Schema.Array(Schema.String),
              ),
              materializedViewsToInclude: Schema.optional(
                Schema.Array(Schema.String),
              ),
              materializedViewsToExclude: Schema.optional(
                Schema.Array(Schema.String),
              ),
              functionsToInclude: Schema.optional(Schema.Array(Schema.String)),
              functionsToExclude: Schema.optional(Schema.Array(Schema.String)),
            }),
          ),
          databaseShareOrigin: Schema.optional(
            Schema.Literals(["Direct", "DataShare", "Other"]),
          ),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ClustersListFollowerDatabasesOutput>;

// The operation
/**
 * Returns a list of databases that are owned by this cluster and were followed by another cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Kusto cluster.
 */
export const ClustersListFollowerDatabases =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ClustersListFollowerDatabasesInput,
    outputSchema: ClustersListFollowerDatabasesOutput,
  }));
// Input Schema
export interface ClustersListFollowerDatabasesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
}
export const ClustersListFollowerDatabasesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/listFollowerDatabases",
      apiVersion: "2025-02-14",
    }),
  ) as unknown as Schema.Codec<ClustersListFollowerDatabasesGetInput>;

// Output Schema
export interface ClustersListFollowerDatabasesGetOutput {
  value: {
    properties?: {
      clusterResourceId: string;
      attachedDatabaseConfigurationName: string;
      databaseName?: string;
      tableLevelSharingProperties?: {
        tablesToInclude?: string[];
        tablesToExclude?: string[];
        externalTablesToInclude?: string[];
        externalTablesToExclude?: string[];
        materializedViewsToInclude?: string[];
        materializedViewsToExclude?: string[];
        functionsToInclude?: string[];
        functionsToExclude?: string[];
      };
      databaseShareOrigin?: "Direct" | "DataShare" | "Other";
    };
  }[];
  nextLink?: string;
}
export const ClustersListFollowerDatabasesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        properties: Schema.optional(
          Schema.Struct({
            clusterResourceId: Schema.String,
            attachedDatabaseConfigurationName: Schema.String,
            databaseName: Schema.optional(Schema.String),
            tableLevelSharingProperties: Schema.optional(
              Schema.Struct({
                tablesToInclude: Schema.optional(Schema.Array(Schema.String)),
                tablesToExclude: Schema.optional(Schema.Array(Schema.String)),
                externalTablesToInclude: Schema.optional(
                  Schema.Array(Schema.String),
                ),
                externalTablesToExclude: Schema.optional(
                  Schema.Array(Schema.String),
                ),
                materializedViewsToInclude: Schema.optional(
                  Schema.Array(Schema.String),
                ),
                materializedViewsToExclude: Schema.optional(
                  Schema.Array(Schema.String),
                ),
                functionsToInclude: Schema.optional(
                  Schema.Array(Schema.String),
                ),
                functionsToExclude: Schema.optional(
                  Schema.Array(Schema.String),
                ),
              }),
            ),
            databaseShareOrigin: Schema.optional(
              Schema.Literals(["Direct", "DataShare", "Other"]),
            ),
          }),
        ),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ClustersListFollowerDatabasesGetOutput>;

// The operation
/**
 * Returns a list of databases that are owned by this cluster and were followed by another cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Kusto cluster.
 */
export const ClustersListFollowerDatabasesGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ClustersListFollowerDatabasesGetInput,
    outputSchema: ClustersListFollowerDatabasesGetOutput,
  }));
// Input Schema
export interface ClustersListLanguageExtensionsInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
}
export const ClustersListLanguageExtensionsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/listLanguageExtensions",
      apiVersion: "2025-02-14",
    }),
  ) as unknown as Schema.Codec<ClustersListLanguageExtensionsInput>;

// Output Schema
export interface ClustersListLanguageExtensionsOutput {
  value?: {
    languageExtensionName?: "PYTHON" | "R";
    languageExtensionImageName?:
      | "R"
      | "Python3_6_5"
      | "Python3_10_8"
      | "Python3_10_8_DL"
      | "PythonCustomImage"
      | "Python3_11_7"
      | "Python3_11_7_DL";
    languageExtensionCustomImageName?: string;
  }[];
  nextLink?: string;
}
export const ClustersListLanguageExtensionsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          languageExtensionName: Schema.optional(
            Schema.Literals(["PYTHON", "R"]),
          ),
          languageExtensionImageName: Schema.optional(
            Schema.Literals([
              "R",
              "Python3_6_5",
              "Python3_10_8",
              "Python3_10_8_DL",
              "PythonCustomImage",
              "Python3_11_7",
              "Python3_11_7_DL",
            ]),
          ),
          languageExtensionCustomImageName: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ClustersListLanguageExtensionsOutput>;

// The operation
/**
 * Returns a list of language extensions that can run within KQL queries.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Kusto cluster.
 */
export const ClustersListLanguageExtensions =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ClustersListLanguageExtensionsInput,
    outputSchema: ClustersListLanguageExtensionsOutput,
  }));
// Input Schema
export interface ClustersListOutboundNetworkDependenciesEndpointsInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
}
export const ClustersListOutboundNetworkDependenciesEndpointsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/outboundNetworkDependenciesEndpoints",
      apiVersion: "2025-02-14",
    }),
  ) as unknown as Schema.Codec<ClustersListOutboundNetworkDependenciesEndpointsInput>;

// Output Schema
export interface ClustersListOutboundNetworkDependenciesEndpointsOutput {
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
export const ClustersListOutboundNetworkDependenciesEndpointsOutput =
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
  }) as unknown as Schema.Codec<ClustersListOutboundNetworkDependenciesEndpointsOutput>;

// The operation
/**
 * Gets the network endpoints of all outbound dependencies of a Kusto cluster
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Kusto cluster.
 */
export const ClustersListOutboundNetworkDependenciesEndpoints =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ClustersListOutboundNetworkDependenciesEndpointsInput,
    outputSchema: ClustersListOutboundNetworkDependenciesEndpointsOutput,
  }));
// Input Schema
export interface ClustersListSkusInput {
  subscriptionId: string;
}
export const ClustersListSkusInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.Kusto/skus",
    apiVersion: "2025-02-14",
  }),
) as unknown as Schema.Codec<ClustersListSkusInput>;

// Output Schema
export interface ClustersListSkusOutput {
  value?: {
    resourceType?: string;
    name?: string;
    tier?: string;
    locations?: string[];
    locationInfo?: {
      location: string;
      zones?: string[];
      zoneDetails?: {
        name?: string[];
        capabilities?: { name?: string; value?: string }[];
      }[];
    }[];
    restrictions?: unknown[];
  }[];
  nextLink?: string;
}
export const ClustersListSkusOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          resourceType: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          tier: Schema.optional(Schema.String),
          locations: Schema.optional(Schema.Array(Schema.String)),
          locationInfo: Schema.optional(
            Schema.Array(
              Schema.Struct({
                location: Schema.String,
                zones: Schema.optional(Schema.Array(Schema.String)),
                zoneDetails: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      name: Schema.optional(Schema.Array(Schema.String)),
                      capabilities: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            name: Schema.optional(Schema.String),
                            value: Schema.optional(Schema.String),
                          }),
                        ),
                      ),
                    }),
                  ),
                ),
              }),
            ),
          ),
          restrictions: Schema.optional(Schema.Array(Schema.Unknown)),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  },
) as unknown as Schema.Codec<ClustersListSkusOutput>;

// The operation
/**
 * Lists eligible SKUs for Kusto resource provider.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const ClustersListSkus = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ClustersListSkusInput,
  outputSchema: ClustersListSkusOutput,
}));
// Input Schema
export interface ClustersListSkusByResourceInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
}
export const ClustersListSkusByResourceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/skus",
      apiVersion: "2025-02-14",
    }),
  ) as unknown as Schema.Codec<ClustersListSkusByResourceInput>;

// Output Schema
export interface ClustersListSkusByResourceOutput {
  value?: {
    resourceType?: string;
    sku?: {
      name:
        | "Dev(No SLA)_Standard_D11_v2"
        | "Dev(No SLA)_Standard_E2a_v4"
        | "Standard_D11_v2"
        | "Standard_D12_v2"
        | "Standard_D13_v2"
        | "Standard_D14_v2"
        | "Standard_D32d_v4"
        | "Standard_D16d_v5"
        | "Standard_D32d_v5"
        | "Standard_DS13_v2+1TB_PS"
        | "Standard_DS13_v2+2TB_PS"
        | "Standard_DS14_v2+3TB_PS"
        | "Standard_DS14_v2+4TB_PS"
        | "Standard_L4s"
        | "Standard_L8s"
        | "Standard_L16s"
        | "Standard_L8s_v2"
        | "Standard_L16s_v2"
        | "Standard_L8s_v3"
        | "Standard_L16s_v3"
        | "Standard_L32s_v3"
        | "Standard_L8as_v3"
        | "Standard_L16as_v3"
        | "Standard_L32as_v3"
        | "Standard_E64i_v3"
        | "Standard_E80ids_v4"
        | "Standard_E2a_v4"
        | "Standard_E4a_v4"
        | "Standard_E8a_v4"
        | "Standard_E16a_v4"
        | "Standard_E8as_v4+1TB_PS"
        | "Standard_E8as_v4+2TB_PS"
        | "Standard_E16as_v4+3TB_PS"
        | "Standard_E16as_v4+4TB_PS"
        | "Standard_E8as_v5+1TB_PS"
        | "Standard_E8as_v5+2TB_PS"
        | "Standard_E16as_v5+3TB_PS"
        | "Standard_E16as_v5+4TB_PS"
        | "Standard_E2ads_v5"
        | "Standard_E4ads_v5"
        | "Standard_E8ads_v5"
        | "Standard_E16ads_v5"
        | "Standard_EC8as_v5+1TB_PS"
        | "Standard_EC8as_v5+2TB_PS"
        | "Standard_EC16as_v5+3TB_PS"
        | "Standard_EC16as_v5+4TB_PS"
        | "Standard_EC8ads_v5"
        | "Standard_EC16ads_v5"
        | "Standard_E8s_v4+1TB_PS"
        | "Standard_E8s_v4+2TB_PS"
        | "Standard_E16s_v4+3TB_PS"
        | "Standard_E16s_v4+4TB_PS"
        | "Standard_E8s_v5+1TB_PS"
        | "Standard_E8s_v5+2TB_PS"
        | "Standard_E16s_v5+3TB_PS"
        | "Standard_E16s_v5+4TB_PS"
        | "Standard_E2d_v4"
        | "Standard_E4d_v4"
        | "Standard_E8d_v4"
        | "Standard_E16d_v4"
        | "Standard_E2d_v5"
        | "Standard_E4d_v5"
        | "Standard_E8d_v5"
        | "Standard_E16d_v5";
      capacity?: number;
      tier: "Basic" | "Standard";
    };
    capacity?: {
      scaleType: "automatic" | "manual" | "none";
      minimum: number;
      maximum: number;
      default: number;
    };
  }[];
  nextLink?: string;
}
export const ClustersListSkusByResourceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          resourceType: Schema.optional(Schema.String),
          sku: Schema.optional(
            Schema.Struct({
              name: Schema.Literals([
                "Dev(No SLA)_Standard_D11_v2",
                "Dev(No SLA)_Standard_E2a_v4",
                "Standard_D11_v2",
                "Standard_D12_v2",
                "Standard_D13_v2",
                "Standard_D14_v2",
                "Standard_D32d_v4",
                "Standard_D16d_v5",
                "Standard_D32d_v5",
                "Standard_DS13_v2+1TB_PS",
                "Standard_DS13_v2+2TB_PS",
                "Standard_DS14_v2+3TB_PS",
                "Standard_DS14_v2+4TB_PS",
                "Standard_L4s",
                "Standard_L8s",
                "Standard_L16s",
                "Standard_L8s_v2",
                "Standard_L16s_v2",
                "Standard_L8s_v3",
                "Standard_L16s_v3",
                "Standard_L32s_v3",
                "Standard_L8as_v3",
                "Standard_L16as_v3",
                "Standard_L32as_v3",
                "Standard_E64i_v3",
                "Standard_E80ids_v4",
                "Standard_E2a_v4",
                "Standard_E4a_v4",
                "Standard_E8a_v4",
                "Standard_E16a_v4",
                "Standard_E8as_v4+1TB_PS",
                "Standard_E8as_v4+2TB_PS",
                "Standard_E16as_v4+3TB_PS",
                "Standard_E16as_v4+4TB_PS",
                "Standard_E8as_v5+1TB_PS",
                "Standard_E8as_v5+2TB_PS",
                "Standard_E16as_v5+3TB_PS",
                "Standard_E16as_v5+4TB_PS",
                "Standard_E2ads_v5",
                "Standard_E4ads_v5",
                "Standard_E8ads_v5",
                "Standard_E16ads_v5",
                "Standard_EC8as_v5+1TB_PS",
                "Standard_EC8as_v5+2TB_PS",
                "Standard_EC16as_v5+3TB_PS",
                "Standard_EC16as_v5+4TB_PS",
                "Standard_EC8ads_v5",
                "Standard_EC16ads_v5",
                "Standard_E8s_v4+1TB_PS",
                "Standard_E8s_v4+2TB_PS",
                "Standard_E16s_v4+3TB_PS",
                "Standard_E16s_v4+4TB_PS",
                "Standard_E8s_v5+1TB_PS",
                "Standard_E8s_v5+2TB_PS",
                "Standard_E16s_v5+3TB_PS",
                "Standard_E16s_v5+4TB_PS",
                "Standard_E2d_v4",
                "Standard_E4d_v4",
                "Standard_E8d_v4",
                "Standard_E16d_v4",
                "Standard_E2d_v5",
                "Standard_E4d_v5",
                "Standard_E8d_v5",
                "Standard_E16d_v5",
              ]),
              capacity: Schema.optional(Schema.Number),
              tier: Schema.Literals(["Basic", "Standard"]),
            }),
          ),
          capacity: Schema.optional(
            Schema.Struct({
              scaleType: Schema.Literals(["automatic", "manual", "none"]),
              minimum: Schema.Number,
              maximum: Schema.Number,
              default: Schema.Number,
            }),
          ),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ClustersListSkusByResourceOutput>;

// The operation
/**
 * Returns the SKUs available for the provided resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Kusto cluster.
 */
export const ClustersListSkusByResource = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ClustersListSkusByResourceInput,
    outputSchema: ClustersListSkusByResourceOutput,
  }),
);
// Input Schema
export interface ClustersMigrateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  clusterResourceId: string;
}
export const ClustersMigrateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  clusterResourceId: Schema.String,
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/migrate",
    apiVersion: "2025-02-14",
  }),
) as unknown as Schema.Codec<ClustersMigrateInput>;

// Output Schema
export type ClustersMigrateOutput = void;
export const ClustersMigrateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ClustersMigrateOutput>;

// The operation
/**
 * Migrate data from a Kusto cluster to another cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Kusto cluster.
 */
export const ClustersMigrate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ClustersMigrateInput,
  outputSchema: ClustersMigrateOutput,
}));
// Input Schema
export interface ClustersRemoveCalloutPolicyInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  calloutId?: string;
}
export const ClustersRemoveCalloutPolicyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    calloutId: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/removeCalloutPolicy",
      apiVersion: "2025-02-14",
    }),
  ) as unknown as Schema.Codec<ClustersRemoveCalloutPolicyInput>;

// Output Schema
export type ClustersRemoveCalloutPolicyOutput = void;
export const ClustersRemoveCalloutPolicyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ClustersRemoveCalloutPolicyOutput>;

// The operation
/**
 * Removes callout policy for engine services.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Kusto cluster.
 */
export const ClustersRemoveCalloutPolicy = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ClustersRemoveCalloutPolicyInput,
    outputSchema: ClustersRemoveCalloutPolicyOutput,
  }),
);
// Input Schema
export interface ClustersRemoveLanguageExtensionsInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  value?: {
    languageExtensionName?: "PYTHON" | "R";
    languageExtensionImageName?:
      | "R"
      | "Python3_6_5"
      | "Python3_10_8"
      | "Python3_10_8_DL"
      | "PythonCustomImage"
      | "Python3_11_7"
      | "Python3_11_7_DL";
    languageExtensionCustomImageName?: string;
  }[];
  nextLink?: string;
}
export const ClustersRemoveLanguageExtensionsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          languageExtensionName: Schema.optional(
            Schema.Literals(["PYTHON", "R"]),
          ),
          languageExtensionImageName: Schema.optional(
            Schema.Literals([
              "R",
              "Python3_6_5",
              "Python3_10_8",
              "Python3_10_8_DL",
              "PythonCustomImage",
              "Python3_11_7",
              "Python3_11_7_DL",
            ]),
          ),
          languageExtensionCustomImageName: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/removeLanguageExtensions",
      apiVersion: "2025-02-14",
    }),
  ) as unknown as Schema.Codec<ClustersRemoveLanguageExtensionsInput>;

// Output Schema
export type ClustersRemoveLanguageExtensionsOutput = void;
export const ClustersRemoveLanguageExtensionsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ClustersRemoveLanguageExtensionsOutput>;

// The operation
/**
 * Remove a list of language extensions that can run within KQL queries.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Kusto cluster.
 */
export const ClustersRemoveLanguageExtensions =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ClustersRemoveLanguageExtensionsInput,
    outputSchema: ClustersRemoveLanguageExtensionsOutput,
  }));
// Input Schema
export interface ClustersStartInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
}
export const ClustersStartInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/start",
    apiVersion: "2025-02-14",
  }),
) as unknown as Schema.Codec<ClustersStartInput>;

// Output Schema
export type ClustersStartOutput = void;
export const ClustersStartOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ClustersStartOutput>;

// The operation
/**
 * Starts a Kusto cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Kusto cluster.
 */
export const ClustersStart = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ClustersStartInput,
  outputSchema: ClustersStartOutput,
}));
// Input Schema
export interface ClustersStopInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
}
export const ClustersStopInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/stop",
    apiVersion: "2025-02-14",
  }),
) as unknown as Schema.Codec<ClustersStopInput>;

// Output Schema
export type ClustersStopOutput = void;
export const ClustersStopOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ClustersStopOutput>;

// The operation
/**
 * Stops a Kusto cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Kusto cluster.
 */
export const ClustersStop = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ClustersStopInput,
  outputSchema: ClustersStopOutput,
}));
// Input Schema
export interface ClustersUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  tags?: Record<string, string>;
  location?: string;
  sku?: {
    name:
      | "Dev(No SLA)_Standard_D11_v2"
      | "Dev(No SLA)_Standard_E2a_v4"
      | "Standard_D11_v2"
      | "Standard_D12_v2"
      | "Standard_D13_v2"
      | "Standard_D14_v2"
      | "Standard_D32d_v4"
      | "Standard_D16d_v5"
      | "Standard_D32d_v5"
      | "Standard_DS13_v2+1TB_PS"
      | "Standard_DS13_v2+2TB_PS"
      | "Standard_DS14_v2+3TB_PS"
      | "Standard_DS14_v2+4TB_PS"
      | "Standard_L4s"
      | "Standard_L8s"
      | "Standard_L16s"
      | "Standard_L8s_v2"
      | "Standard_L16s_v2"
      | "Standard_L8s_v3"
      | "Standard_L16s_v3"
      | "Standard_L32s_v3"
      | "Standard_L8as_v3"
      | "Standard_L16as_v3"
      | "Standard_L32as_v3"
      | "Standard_E64i_v3"
      | "Standard_E80ids_v4"
      | "Standard_E2a_v4"
      | "Standard_E4a_v4"
      | "Standard_E8a_v4"
      | "Standard_E16a_v4"
      | "Standard_E8as_v4+1TB_PS"
      | "Standard_E8as_v4+2TB_PS"
      | "Standard_E16as_v4+3TB_PS"
      | "Standard_E16as_v4+4TB_PS"
      | "Standard_E8as_v5+1TB_PS"
      | "Standard_E8as_v5+2TB_PS"
      | "Standard_E16as_v5+3TB_PS"
      | "Standard_E16as_v5+4TB_PS"
      | "Standard_E2ads_v5"
      | "Standard_E4ads_v5"
      | "Standard_E8ads_v5"
      | "Standard_E16ads_v5"
      | "Standard_EC8as_v5+1TB_PS"
      | "Standard_EC8as_v5+2TB_PS"
      | "Standard_EC16as_v5+3TB_PS"
      | "Standard_EC16as_v5+4TB_PS"
      | "Standard_EC8ads_v5"
      | "Standard_EC16ads_v5"
      | "Standard_E8s_v4+1TB_PS"
      | "Standard_E8s_v4+2TB_PS"
      | "Standard_E16s_v4+3TB_PS"
      | "Standard_E16s_v4+4TB_PS"
      | "Standard_E8s_v5+1TB_PS"
      | "Standard_E8s_v5+2TB_PS"
      | "Standard_E16s_v5+3TB_PS"
      | "Standard_E16s_v5+4TB_PS"
      | "Standard_E2d_v4"
      | "Standard_E4d_v4"
      | "Standard_E8d_v4"
      | "Standard_E16d_v4"
      | "Standard_E2d_v5"
      | "Standard_E4d_v5"
      | "Standard_E8d_v5"
      | "Standard_E16d_v5";
    capacity?: number;
    tier: "Basic" | "Standard";
  };
  zones?: string[];
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
    state?:
      | "Creating"
      | "Unavailable"
      | "Running"
      | "Deleting"
      | "Deleted"
      | "Stopping"
      | "Stopped"
      | "Starting"
      | "Updating"
      | "Migrated";
    provisioningState?:
      | "Running"
      | "Creating"
      | "Deleting"
      | "Succeeded"
      | "Failed"
      | "Moving"
      | "Canceled";
    uri?: string;
    dataIngestionUri?: string;
    stateReason?: string;
    trustedExternalTenants?: { value?: string }[];
    optimizedAutoscale?: {
      version: number;
      isEnabled: boolean;
      minimum: number;
      maximum: number;
    };
    enableDiskEncryption?: boolean;
    enableStreamingIngest?: boolean;
    virtualNetworkConfiguration?: {
      subnetId: string;
      enginePublicIpId: string;
      dataManagementPublicIpId: string;
      state?: "Enabled" | "Disabled";
    };
    keyVaultProperties?: {
      keyName?: string;
      keyVersion?: string;
      keyVaultUri?: string;
      userIdentity?: string;
      federatedIdentityClientId?: string;
    };
    enablePurge?: boolean;
    languageExtensions?: {
      value?: {
        languageExtensionName?: "PYTHON" | "R";
        languageExtensionImageName?:
          | "R"
          | "Python3_6_5"
          | "Python3_10_8"
          | "Python3_10_8_DL"
          | "PythonCustomImage"
          | "Python3_11_7"
          | "Python3_11_7_DL";
        languageExtensionCustomImageName?: string;
      }[];
      nextLink?: string;
    };
    enableDoubleEncryption?: boolean;
    publicNetworkAccess?: "Enabled" | "Disabled" | "SecuredByPerimeter";
    allowedIpRangeList?: string[];
    engineType?: "V2" | "V3";
    acceptedAudiences?: { value?: string }[];
    enableAutoStop?: boolean;
    restrictOutboundNetworkAccess?: "Enabled" | "Disabled";
    allowedFqdnList?: string[];
    calloutPolicies?: {
      calloutUriRegex?: string;
      calloutType?:
        | "kusto"
        | "sql"
        | "cosmosdb"
        | "external_data"
        | "azure_digital_twins"
        | "sandbox_artifacts"
        | "webapi"
        | "mysql"
        | "postgresql"
        | "genevametrics"
        | "azure_openai";
      outboundAccess?: "Allow" | "Deny";
      calloutId?: string;
    }[];
    publicIPType?: "IPv4" | "DualStack";
    virtualClusterGraduationProperties?: string;
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
    migrationCluster?: {
      id?: string;
      uri?: string;
      dataIngestionUri?: string;
      role?: "Source" | "Destination";
    };
    zoneStatus?: "NonZonal" | "ZonalInconsistency" | "Zonal";
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
export const ClustersUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.optional(Schema.String),
  sku: Schema.optional(
    Schema.Struct({
      name: Schema.Literals([
        "Dev(No SLA)_Standard_D11_v2",
        "Dev(No SLA)_Standard_E2a_v4",
        "Standard_D11_v2",
        "Standard_D12_v2",
        "Standard_D13_v2",
        "Standard_D14_v2",
        "Standard_D32d_v4",
        "Standard_D16d_v5",
        "Standard_D32d_v5",
        "Standard_DS13_v2+1TB_PS",
        "Standard_DS13_v2+2TB_PS",
        "Standard_DS14_v2+3TB_PS",
        "Standard_DS14_v2+4TB_PS",
        "Standard_L4s",
        "Standard_L8s",
        "Standard_L16s",
        "Standard_L8s_v2",
        "Standard_L16s_v2",
        "Standard_L8s_v3",
        "Standard_L16s_v3",
        "Standard_L32s_v3",
        "Standard_L8as_v3",
        "Standard_L16as_v3",
        "Standard_L32as_v3",
        "Standard_E64i_v3",
        "Standard_E80ids_v4",
        "Standard_E2a_v4",
        "Standard_E4a_v4",
        "Standard_E8a_v4",
        "Standard_E16a_v4",
        "Standard_E8as_v4+1TB_PS",
        "Standard_E8as_v4+2TB_PS",
        "Standard_E16as_v4+3TB_PS",
        "Standard_E16as_v4+4TB_PS",
        "Standard_E8as_v5+1TB_PS",
        "Standard_E8as_v5+2TB_PS",
        "Standard_E16as_v5+3TB_PS",
        "Standard_E16as_v5+4TB_PS",
        "Standard_E2ads_v5",
        "Standard_E4ads_v5",
        "Standard_E8ads_v5",
        "Standard_E16ads_v5",
        "Standard_EC8as_v5+1TB_PS",
        "Standard_EC8as_v5+2TB_PS",
        "Standard_EC16as_v5+3TB_PS",
        "Standard_EC16as_v5+4TB_PS",
        "Standard_EC8ads_v5",
        "Standard_EC16ads_v5",
        "Standard_E8s_v4+1TB_PS",
        "Standard_E8s_v4+2TB_PS",
        "Standard_E16s_v4+3TB_PS",
        "Standard_E16s_v4+4TB_PS",
        "Standard_E8s_v5+1TB_PS",
        "Standard_E8s_v5+2TB_PS",
        "Standard_E16s_v5+3TB_PS",
        "Standard_E16s_v5+4TB_PS",
        "Standard_E2d_v4",
        "Standard_E4d_v4",
        "Standard_E8d_v4",
        "Standard_E16d_v4",
        "Standard_E2d_v5",
        "Standard_E4d_v5",
        "Standard_E8d_v5",
        "Standard_E16d_v5",
      ]),
      capacity: Schema.optional(Schema.Number),
      tier: Schema.Literals(["Basic", "Standard"]),
    }),
  ),
  zones: Schema.optional(Schema.Array(Schema.String)),
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
      state: Schema.optional(
        Schema.Literals([
          "Creating",
          "Unavailable",
          "Running",
          "Deleting",
          "Deleted",
          "Stopping",
          "Stopped",
          "Starting",
          "Updating",
          "Migrated",
        ]),
      ),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Running",
          "Creating",
          "Deleting",
          "Succeeded",
          "Failed",
          "Moving",
          "Canceled",
        ]),
      ),
      uri: Schema.optional(Schema.String),
      dataIngestionUri: Schema.optional(Schema.String),
      stateReason: Schema.optional(Schema.String),
      trustedExternalTenants: Schema.optional(
        Schema.Array(
          Schema.Struct({
            value: Schema.optional(Schema.String),
          }),
        ),
      ),
      optimizedAutoscale: Schema.optional(
        Schema.Struct({
          version: Schema.Number,
          isEnabled: Schema.Boolean,
          minimum: Schema.Number,
          maximum: Schema.Number,
        }),
      ),
      enableDiskEncryption: Schema.optional(Schema.Boolean),
      enableStreamingIngest: Schema.optional(Schema.Boolean),
      virtualNetworkConfiguration: Schema.optional(
        Schema.Struct({
          subnetId: Schema.String,
          enginePublicIpId: Schema.String,
          dataManagementPublicIpId: Schema.String,
          state: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
        }),
      ),
      keyVaultProperties: Schema.optional(
        Schema.Struct({
          keyName: Schema.optional(Schema.String),
          keyVersion: Schema.optional(Schema.String),
          keyVaultUri: Schema.optional(Schema.String),
          userIdentity: Schema.optional(Schema.String),
          federatedIdentityClientId: Schema.optional(Schema.String),
        }),
      ),
      enablePurge: Schema.optional(Schema.Boolean),
      languageExtensions: Schema.optional(
        Schema.Struct({
          value: Schema.optional(
            Schema.Array(
              Schema.Struct({
                languageExtensionName: Schema.optional(
                  Schema.Literals(["PYTHON", "R"]),
                ),
                languageExtensionImageName: Schema.optional(
                  Schema.Literals([
                    "R",
                    "Python3_6_5",
                    "Python3_10_8",
                    "Python3_10_8_DL",
                    "PythonCustomImage",
                    "Python3_11_7",
                    "Python3_11_7_DL",
                  ]),
                ),
                languageExtensionCustomImageName: Schema.optional(
                  Schema.String,
                ),
              }),
            ),
          ),
          nextLink: Schema.optional(Schema.String),
        }),
      ),
      enableDoubleEncryption: Schema.optional(Schema.Boolean),
      publicNetworkAccess: Schema.optional(
        Schema.Literals(["Enabled", "Disabled", "SecuredByPerimeter"]),
      ),
      allowedIpRangeList: Schema.optional(Schema.Array(Schema.String)),
      engineType: Schema.optional(Schema.Literals(["V2", "V3"])),
      acceptedAudiences: Schema.optional(
        Schema.Array(
          Schema.Struct({
            value: Schema.optional(Schema.String),
          }),
        ),
      ),
      enableAutoStop: Schema.optional(Schema.Boolean),
      restrictOutboundNetworkAccess: Schema.optional(
        Schema.Literals(["Enabled", "Disabled"]),
      ),
      allowedFqdnList: Schema.optional(Schema.Array(Schema.String)),
      calloutPolicies: Schema.optional(
        Schema.Array(
          Schema.Struct({
            calloutUriRegex: Schema.optional(Schema.String),
            calloutType: Schema.optional(
              Schema.Literals([
                "kusto",
                "sql",
                "cosmosdb",
                "external_data",
                "azure_digital_twins",
                "sandbox_artifacts",
                "webapi",
                "mysql",
                "postgresql",
                "genevametrics",
                "azure_openai",
              ]),
            ),
            outboundAccess: Schema.optional(Schema.Literals(["Allow", "Deny"])),
            calloutId: Schema.optional(Schema.String),
          }),
        ),
      ),
      publicIPType: Schema.optional(Schema.Literals(["IPv4", "DualStack"])),
      virtualClusterGraduationProperties: Schema.optional(Schema.String),
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
      migrationCluster: Schema.optional(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          uri: Schema.optional(Schema.String),
          dataIngestionUri: Schema.optional(Schema.String),
          role: Schema.optional(Schema.Literals(["Source", "Destination"])),
        }),
      ),
      zoneStatus: Schema.optional(
        Schema.Literals(["NonZonal", "ZonalInconsistency", "Zonal"]),
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
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}",
    apiVersion: "2025-02-14",
  }),
) as unknown as Schema.Codec<ClustersUpdateInput>;

// Output Schema
export interface ClustersUpdateOutput {
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
export const ClustersUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ClustersUpdateOutput>;

// The operation
/**
 * Update a Kusto cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Kusto cluster.
 * @param If-Match - The ETag of the cluster. Omit this value to always overwrite the current cluster. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
 */
export const ClustersUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ClustersUpdateInput,
  outputSchema: ClustersUpdateOutput,
}));
// Input Schema
export interface DatabaseInviteFollowerInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  databaseName: string;
  inviteeEmail: string;
  tableLevelSharingProperties?: {
    tablesToInclude?: string[];
    tablesToExclude?: string[];
    externalTablesToInclude?: string[];
    externalTablesToExclude?: string[];
    materializedViewsToInclude?: string[];
    materializedViewsToExclude?: string[];
    functionsToInclude?: string[];
    functionsToExclude?: string[];
  };
}
export const DatabaseInviteFollowerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
    inviteeEmail: Schema.String,
    tableLevelSharingProperties: Schema.optional(
      Schema.Struct({
        tablesToInclude: Schema.optional(Schema.Array(Schema.String)),
        tablesToExclude: Schema.optional(Schema.Array(Schema.String)),
        externalTablesToInclude: Schema.optional(Schema.Array(Schema.String)),
        externalTablesToExclude: Schema.optional(Schema.Array(Schema.String)),
        materializedViewsToInclude: Schema.optional(
          Schema.Array(Schema.String),
        ),
        materializedViewsToExclude: Schema.optional(
          Schema.Array(Schema.String),
        ),
        functionsToInclude: Schema.optional(Schema.Array(Schema.String)),
        functionsToExclude: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/inviteFollower",
      apiVersion: "2025-02-14",
    }),
  ) as unknown as Schema.Codec<DatabaseInviteFollowerInput>;

// Output Schema
export interface DatabaseInviteFollowerOutput {
  generatedInvitation?: string;
}
export const DatabaseInviteFollowerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    generatedInvitation: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DatabaseInviteFollowerOutput>;

// The operation
/**
 * Generates an invitation token that allows attaching a follower database to this database.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Kusto cluster.
 * @param databaseName - The name of the database in the Kusto cluster.
 */
export const DatabaseInviteFollower = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DatabaseInviteFollowerInput,
    outputSchema: DatabaseInviteFollowerOutput,
  }),
);
// Input Schema
export interface DatabasePrincipalAssignmentsCheckNameAvailabilityInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  databaseName: string;
  name: string;
  type: "Microsoft.Kusto/clusters/databases/principalAssignments";
}
export const DatabasePrincipalAssignmentsCheckNameAvailabilityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
    type: Schema.Literals([
      "Microsoft.Kusto/clusters/databases/principalAssignments",
    ]),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/checkPrincipalAssignmentNameAvailability",
      apiVersion: "2025-02-14",
    }),
  ) as unknown as Schema.Codec<DatabasePrincipalAssignmentsCheckNameAvailabilityInput>;

// Output Schema
export interface DatabasePrincipalAssignmentsCheckNameAvailabilityOutput {
  nameAvailable?: boolean;
  name?: string;
  message?: string;
  reason?: "Invalid" | "AlreadyExists";
}
export const DatabasePrincipalAssignmentsCheckNameAvailabilityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.Literals(["Invalid", "AlreadyExists"])),
  }) as unknown as Schema.Codec<DatabasePrincipalAssignmentsCheckNameAvailabilityOutput>;

// The operation
/**
 * Checks that the database principal assignment is valid and is not already in use.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Kusto cluster.
 * @param databaseName - The name of the database in the Kusto cluster.
 */
export const DatabasePrincipalAssignmentsCheckNameAvailability =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DatabasePrincipalAssignmentsCheckNameAvailabilityInput,
    outputSchema: DatabasePrincipalAssignmentsCheckNameAvailabilityOutput,
  }));
// Input Schema
export interface DatabasePrincipalAssignmentsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  databaseName: string;
  principalAssignmentName: string;
  properties?: {
    principalId: string;
    role:
      | "Admin"
      | "Ingestor"
      | "Monitor"
      | "User"
      | "UnrestrictedViewer"
      | "Viewer";
    tenantId?: string;
    principalType: "App" | "Group" | "User";
    tenantName?: string;
    principalName?: string;
    provisioningState?:
      | "Running"
      | "Creating"
      | "Deleting"
      | "Succeeded"
      | "Failed"
      | "Moving"
      | "Canceled";
    aadObjectId?: string;
  };
}
export const DatabasePrincipalAssignmentsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
    principalAssignmentName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        principalId: Schema.String,
        role: Schema.Literals([
          "Admin",
          "Ingestor",
          "Monitor",
          "User",
          "UnrestrictedViewer",
          "Viewer",
        ]),
        tenantId: Schema.optional(Schema.String),
        principalType: Schema.Literals(["App", "Group", "User"]),
        tenantName: Schema.optional(Schema.String),
        principalName: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Running",
            "Creating",
            "Deleting",
            "Succeeded",
            "Failed",
            "Moving",
            "Canceled",
          ]),
        ),
        aadObjectId: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/principalAssignments/{principalAssignmentName}",
      apiVersion: "2025-02-14",
    }),
  ) as unknown as Schema.Codec<DatabasePrincipalAssignmentsCreateOrUpdateInput>;

// Output Schema
export interface DatabasePrincipalAssignmentsCreateOrUpdateOutput {
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
export const DatabasePrincipalAssignmentsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<DatabasePrincipalAssignmentsCreateOrUpdateOutput>;

// The operation
/**
 * Creates a Kusto cluster database principalAssignment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Kusto cluster.
 * @param databaseName - The name of the database in the Kusto cluster.
 * @param principalAssignmentName - The name of the Kusto principalAssignment.
 */
export const DatabasePrincipalAssignmentsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DatabasePrincipalAssignmentsCreateOrUpdateInput,
    outputSchema: DatabasePrincipalAssignmentsCreateOrUpdateOutput,
  }));
// Input Schema
export interface DatabasePrincipalAssignmentsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  databaseName: string;
  principalAssignmentName: string;
}
export const DatabasePrincipalAssignmentsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
    principalAssignmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/principalAssignments/{principalAssignmentName}",
      apiVersion: "2025-02-14",
    }),
  ) as unknown as Schema.Codec<DatabasePrincipalAssignmentsDeleteInput>;

// Output Schema
export type DatabasePrincipalAssignmentsDeleteOutput = void;
export const DatabasePrincipalAssignmentsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DatabasePrincipalAssignmentsDeleteOutput>;

// The operation
/**
 * Deletes a Kusto principalAssignment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Kusto cluster.
 * @param databaseName - The name of the database in the Kusto cluster.
 * @param principalAssignmentName - The name of the Kusto principalAssignment.
 */
export const DatabasePrincipalAssignmentsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DatabasePrincipalAssignmentsDeleteInput,
    outputSchema: DatabasePrincipalAssignmentsDeleteOutput,
  }));
// Input Schema
export interface DatabasePrincipalAssignmentsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  databaseName: string;
  principalAssignmentName: string;
}
export const DatabasePrincipalAssignmentsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
    principalAssignmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/principalAssignments/{principalAssignmentName}",
      apiVersion: "2025-02-14",
    }),
  ) as unknown as Schema.Codec<DatabasePrincipalAssignmentsGetInput>;

// Output Schema
export interface DatabasePrincipalAssignmentsGetOutput {
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
export const DatabasePrincipalAssignmentsGetOutput =
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
  }) as unknown as Schema.Codec<DatabasePrincipalAssignmentsGetOutput>;

// The operation
/**
 * Gets a Kusto cluster database principalAssignment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Kusto cluster.
 * @param databaseName - The name of the database in the Kusto cluster.
 * @param principalAssignmentName - The name of the Kusto principalAssignment.
 */
export const DatabasePrincipalAssignmentsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DatabasePrincipalAssignmentsGetInput,
    outputSchema: DatabasePrincipalAssignmentsGetOutput,
  }));
// Input Schema
export interface DatabasePrincipalAssignmentsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  databaseName: string;
}
export const DatabasePrincipalAssignmentsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/principalAssignments",
      apiVersion: "2025-02-14",
    }),
  ) as unknown as Schema.Codec<DatabasePrincipalAssignmentsListInput>;

// Output Schema
export interface DatabasePrincipalAssignmentsListOutput {
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
export const DatabasePrincipalAssignmentsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<DatabasePrincipalAssignmentsListOutput>;

// The operation
/**
 * Lists all Kusto cluster database principalAssignments.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Kusto cluster.
 * @param databaseName - The name of the database in the Kusto cluster.
 */
export const DatabasePrincipalAssignmentsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DatabasePrincipalAssignmentsListInput,
    outputSchema: DatabasePrincipalAssignmentsListOutput,
  }));
// Input Schema
export interface DatabasesAddPrincipalsInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  databaseName: string;
  value?: {
    role:
      | "Admin"
      | "Ingestor"
      | "Monitor"
      | "User"
      | "UnrestrictedViewer"
      | "Viewer";
    name: string;
    type: "App" | "Group" | "User";
    fqn?: string;
    email?: string;
    appId?: string;
    tenantName?: string;
  }[];
}
export const DatabasesAddPrincipalsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          role: Schema.Literals([
            "Admin",
            "Ingestor",
            "Monitor",
            "User",
            "UnrestrictedViewer",
            "Viewer",
          ]),
          name: Schema.String,
          type: Schema.Literals(["App", "Group", "User"]),
          fqn: Schema.optional(Schema.String),
          email: Schema.optional(Schema.String),
          appId: Schema.optional(Schema.String),
          tenantName: Schema.optional(Schema.String),
        }),
      ),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/addPrincipals",
      apiVersion: "2025-02-14",
    }),
  ) as unknown as Schema.Codec<DatabasesAddPrincipalsInput>;

// Output Schema
export interface DatabasesAddPrincipalsOutput {
  value?: {
    role:
      | "Admin"
      | "Ingestor"
      | "Monitor"
      | "User"
      | "UnrestrictedViewer"
      | "Viewer";
    name: string;
    type: "App" | "Group" | "User";
    fqn?: string;
    email?: string;
    appId?: string;
    tenantName?: string;
  }[];
  nextLink?: string;
}
export const DatabasesAddPrincipalsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          role: Schema.Literals([
            "Admin",
            "Ingestor",
            "Monitor",
            "User",
            "UnrestrictedViewer",
            "Viewer",
          ]),
          name: Schema.String,
          type: Schema.Literals(["App", "Group", "User"]),
          fqn: Schema.optional(Schema.String),
          email: Schema.optional(Schema.String),
          appId: Schema.optional(Schema.String),
          tenantName: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DatabasesAddPrincipalsOutput>;

// The operation
/**
 * Add Database principals permissions.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Kusto cluster.
 * @param databaseName - The name of the database in the Kusto cluster.
 */
export const DatabasesAddPrincipals = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DatabasesAddPrincipalsInput,
    outputSchema: DatabasesAddPrincipalsOutput,
  }),
);
// Input Schema
export interface DatabasesCheckNameAvailabilityInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  name: string;
  type:
    | "Microsoft.Kusto/clusters/databases"
    | "Microsoft.Kusto/clusters/attachedDatabaseConfigurations";
}
export const DatabasesCheckNameAvailabilityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
    type: Schema.Literals([
      "Microsoft.Kusto/clusters/databases",
      "Microsoft.Kusto/clusters/attachedDatabaseConfigurations",
    ]),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/checkNameAvailability",
      apiVersion: "2025-02-14",
    }),
  ) as unknown as Schema.Codec<DatabasesCheckNameAvailabilityInput>;

// Output Schema
export interface DatabasesCheckNameAvailabilityOutput {
  nameAvailable?: boolean;
  name?: string;
  message?: string;
  reason?: "Invalid" | "AlreadyExists";
}
export const DatabasesCheckNameAvailabilityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.Literals(["Invalid", "AlreadyExists"])),
  }) as unknown as Schema.Codec<DatabasesCheckNameAvailabilityOutput>;

// The operation
/**
 * Checks that the databases resource name is valid and is not already in use.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Kusto cluster.
 */
export const DatabasesCheckNameAvailability =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DatabasesCheckNameAvailabilityInput,
    outputSchema: DatabasesCheckNameAvailabilityOutput,
  }));
// Input Schema
export interface DatabasesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  databaseName: string;
  callerRole?: "Admin" | "None";
  location?: string;
  kind: "ReadWrite" | "ReadOnlyFollowing";
}
export const DatabasesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
    callerRole: Schema.optional(Schema.Literals(["Admin", "None"])),
    location: Schema.optional(Schema.String),
    kind: Schema.Literals(["ReadWrite", "ReadOnlyFollowing"]),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}",
      apiVersion: "2025-02-14",
    }),
  ) as unknown as Schema.Codec<DatabasesCreateOrUpdateInput>;

// Output Schema
export interface DatabasesCreateOrUpdateOutput {
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
export const DatabasesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<DatabasesCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a database.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Kusto cluster.
 * @param databaseName - The name of the database in the Kusto cluster.
 * @param callerRole - By default, any user who run operation on a database become an Admin on it. This property allows the caller to exclude the caller from Admins list.
 */
export const DatabasesCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DatabasesCreateOrUpdateInput,
    outputSchema: DatabasesCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface DatabasesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  databaseName: string;
}
export const DatabasesDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  databaseName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}",
    apiVersion: "2025-02-14",
  }),
) as unknown as Schema.Codec<DatabasesDeleteInput>;

// Output Schema
export type DatabasesDeleteOutput = void;
export const DatabasesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DatabasesDeleteOutput>;

// The operation
/**
 * Deletes the database with the given name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Kusto cluster.
 * @param databaseName - The name of the database in the Kusto cluster.
 */
export const DatabasesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DatabasesDeleteInput,
  outputSchema: DatabasesDeleteOutput,
}));
// Input Schema
export interface DatabasesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  databaseName: string;
}
export const DatabasesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  databaseName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}",
    apiVersion: "2025-02-14",
  }),
) as unknown as Schema.Codec<DatabasesGetInput>;

// Output Schema
export interface DatabasesGetOutput {
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
export const DatabasesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<DatabasesGetOutput>;

// The operation
/**
 * Returns a database.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Kusto cluster.
 * @param databaseName - The name of the database in the Kusto cluster.
 */
export const DatabasesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DatabasesGetInput,
  outputSchema: DatabasesGetOutput,
}));
// Input Schema
export interface DatabasesListByClusterInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  $top?: number;
  $skiptoken?: string;
}
export const DatabasesListByClusterInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    $skiptoken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases",
      apiVersion: "2025-02-14",
    }),
  ) as unknown as Schema.Codec<DatabasesListByClusterInput>;

// Output Schema
export interface DatabasesListByClusterOutput {
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
export const DatabasesListByClusterOutput =
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
  }) as unknown as Schema.Codec<DatabasesListByClusterOutput>;

// The operation
/**
 * Returns the list of databases of the given Kusto cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Kusto cluster.
 * @param $top - limit the number of results
 * @param $skiptoken - Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls.
 */
export const DatabasesListByCluster = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DatabasesListByClusterInput,
    outputSchema: DatabasesListByClusterOutput,
  }),
);
// Input Schema
export interface DatabasesListPrincipalsInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  databaseName: string;
}
export const DatabasesListPrincipalsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/listPrincipals",
      apiVersion: "2025-02-14",
    }),
  ) as unknown as Schema.Codec<DatabasesListPrincipalsInput>;

// Output Schema
export interface DatabasesListPrincipalsOutput {
  value?: {
    role:
      | "Admin"
      | "Ingestor"
      | "Monitor"
      | "User"
      | "UnrestrictedViewer"
      | "Viewer";
    name: string;
    type: "App" | "Group" | "User";
    fqn?: string;
    email?: string;
    appId?: string;
    tenantName?: string;
  }[];
  nextLink?: string;
}
export const DatabasesListPrincipalsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          role: Schema.Literals([
            "Admin",
            "Ingestor",
            "Monitor",
            "User",
            "UnrestrictedViewer",
            "Viewer",
          ]),
          name: Schema.String,
          type: Schema.Literals(["App", "Group", "User"]),
          fqn: Schema.optional(Schema.String),
          email: Schema.optional(Schema.String),
          appId: Schema.optional(Schema.String),
          tenantName: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DatabasesListPrincipalsOutput>;

// The operation
/**
 * Returns a list of database principals of the given Kusto cluster and database.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Kusto cluster.
 * @param databaseName - The name of the database in the Kusto cluster.
 */
export const DatabasesListPrincipals = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DatabasesListPrincipalsInput,
    outputSchema: DatabasesListPrincipalsOutput,
  }),
);
// Input Schema
export interface DatabasesRemovePrincipalsInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  databaseName: string;
  value?: {
    role:
      | "Admin"
      | "Ingestor"
      | "Monitor"
      | "User"
      | "UnrestrictedViewer"
      | "Viewer";
    name: string;
    type: "App" | "Group" | "User";
    fqn?: string;
    email?: string;
    appId?: string;
    tenantName?: string;
  }[];
}
export const DatabasesRemovePrincipalsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          role: Schema.Literals([
            "Admin",
            "Ingestor",
            "Monitor",
            "User",
            "UnrestrictedViewer",
            "Viewer",
          ]),
          name: Schema.String,
          type: Schema.Literals(["App", "Group", "User"]),
          fqn: Schema.optional(Schema.String),
          email: Schema.optional(Schema.String),
          appId: Schema.optional(Schema.String),
          tenantName: Schema.optional(Schema.String),
        }),
      ),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/removePrincipals",
      apiVersion: "2025-02-14",
    }),
  ) as unknown as Schema.Codec<DatabasesRemovePrincipalsInput>;

// Output Schema
export interface DatabasesRemovePrincipalsOutput {
  value?: {
    role:
      | "Admin"
      | "Ingestor"
      | "Monitor"
      | "User"
      | "UnrestrictedViewer"
      | "Viewer";
    name: string;
    type: "App" | "Group" | "User";
    fqn?: string;
    email?: string;
    appId?: string;
    tenantName?: string;
  }[];
  nextLink?: string;
}
export const DatabasesRemovePrincipalsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          role: Schema.Literals([
            "Admin",
            "Ingestor",
            "Monitor",
            "User",
            "UnrestrictedViewer",
            "Viewer",
          ]),
          name: Schema.String,
          type: Schema.Literals(["App", "Group", "User"]),
          fqn: Schema.optional(Schema.String),
          email: Schema.optional(Schema.String),
          appId: Schema.optional(Schema.String),
          tenantName: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DatabasesRemovePrincipalsOutput>;

// The operation
/**
 * Remove Database principals permissions.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Kusto cluster.
 * @param databaseName - The name of the database in the Kusto cluster.
 */
export const DatabasesRemovePrincipals = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DatabasesRemovePrincipalsInput,
    outputSchema: DatabasesRemovePrincipalsOutput,
  }),
);
// Input Schema
export interface DatabasesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  databaseName: string;
  callerRole?: "Admin" | "None";
  location?: string;
  kind: "ReadWrite" | "ReadOnlyFollowing";
}
export const DatabasesUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  databaseName: Schema.String.pipe(T.PathParam()),
  callerRole: Schema.optional(Schema.Literals(["Admin", "None"])),
  location: Schema.optional(Schema.String),
  kind: Schema.Literals(["ReadWrite", "ReadOnlyFollowing"]),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}",
    apiVersion: "2025-02-14",
  }),
) as unknown as Schema.Codec<DatabasesUpdateInput>;

// Output Schema
export interface DatabasesUpdateOutput {
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
export const DatabasesUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<DatabasesUpdateOutput>;

// The operation
/**
 * Updates a database.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Kusto cluster.
 * @param databaseName - The name of the database in the Kusto cluster.
 * @param callerRole - By default, any user who run operation on a database become an Admin on it. This property allows the caller to exclude the caller from Admins list.
 */
export const DatabasesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DatabasesUpdateInput,
  outputSchema: DatabasesUpdateOutput,
}));
// Input Schema
export interface DataConnectionsCheckNameAvailabilityInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  databaseName: string;
  name: string;
  type: "Microsoft.Kusto/clusters/databases/dataConnections";
}
export const DataConnectionsCheckNameAvailabilityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
    type: Schema.Literals([
      "Microsoft.Kusto/clusters/databases/dataConnections",
    ]),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/checkNameAvailability",
      apiVersion: "2025-02-14",
    }),
  ) as unknown as Schema.Codec<DataConnectionsCheckNameAvailabilityInput>;

// Output Schema
export interface DataConnectionsCheckNameAvailabilityOutput {
  nameAvailable?: boolean;
  name?: string;
  message?: string;
  reason?: "Invalid" | "AlreadyExists";
}
export const DataConnectionsCheckNameAvailabilityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.Literals(["Invalid", "AlreadyExists"])),
  }) as unknown as Schema.Codec<DataConnectionsCheckNameAvailabilityOutput>;

// The operation
/**
 * Checks that the data connection name is valid and is not already in use.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Kusto cluster.
 * @param databaseName - The name of the database in the Kusto cluster.
 */
export const DataConnectionsCheckNameAvailability =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DataConnectionsCheckNameAvailabilityInput,
    outputSchema: DataConnectionsCheckNameAvailabilityOutput,
  }));
// Input Schema
export interface DataConnectionsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  databaseName: string;
  dataConnectionName: string;
  location?: string;
  kind:
    | "EventHub"
    | "EventGrid"
    | "IotHub"
    | "CosmosDb"
    | "EventHubWithManagedIdentity"
    | "EventGridWithManagedIdentity";
}
export const DataConnectionsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
    dataConnectionName: Schema.String.pipe(T.PathParam()),
    location: Schema.optional(Schema.String),
    kind: Schema.Literals([
      "EventHub",
      "EventGrid",
      "IotHub",
      "CosmosDb",
      "EventHubWithManagedIdentity",
      "EventGridWithManagedIdentity",
    ]),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/dataConnections/{dataConnectionName}",
      apiVersion: "2025-02-14",
    }),
  ) as unknown as Schema.Codec<DataConnectionsCreateOrUpdateInput>;

// Output Schema
export interface DataConnectionsCreateOrUpdateOutput {
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
export const DataConnectionsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<DataConnectionsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a data connection.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Kusto cluster.
 * @param databaseName - The name of the database in the Kusto cluster.
 * @param dataConnectionName - The name of the data connection.
 */
export const DataConnectionsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DataConnectionsCreateOrUpdateInput,
    outputSchema: DataConnectionsCreateOrUpdateOutput,
  }));
// Input Schema
export interface DataConnectionsDataConnectionValidationInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  databaseName: string;
  dataConnectionName?: string;
  properties?: {
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
  };
}
export const DataConnectionsDataConnectionValidationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
    dataConnectionName: Schema.optional(Schema.String),
    properties: Schema.optional(
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
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/dataConnectionValidation",
      apiVersion: "2025-02-14",
    }),
  ) as unknown as Schema.Codec<DataConnectionsDataConnectionValidationInput>;

// Output Schema
export interface DataConnectionsDataConnectionValidationOutput {
  value?: { errorMessage?: string }[];
}
export const DataConnectionsDataConnectionValidationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          errorMessage: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<DataConnectionsDataConnectionValidationOutput>;

// The operation
/**
 * Checks that the data connection parameters are valid.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Kusto cluster.
 * @param databaseName - The name of the database in the Kusto cluster.
 */
export const DataConnectionsDataConnectionValidation =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DataConnectionsDataConnectionValidationInput,
    outputSchema: DataConnectionsDataConnectionValidationOutput,
  }));
// Input Schema
export interface DataConnectionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  databaseName: string;
  dataConnectionName: string;
}
export const DataConnectionsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
    dataConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/dataConnections/{dataConnectionName}",
      apiVersion: "2025-02-14",
    }),
  ) as unknown as Schema.Codec<DataConnectionsDeleteInput>;

// Output Schema
export type DataConnectionsDeleteOutput = void;
export const DataConnectionsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DataConnectionsDeleteOutput>;

// The operation
/**
 * Deletes the data connection with the given name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Kusto cluster.
 * @param databaseName - The name of the database in the Kusto cluster.
 * @param dataConnectionName - The name of the data connection.
 */
export const DataConnectionsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DataConnectionsDeleteInput,
    outputSchema: DataConnectionsDeleteOutput,
  }),
);
// Input Schema
export interface DataConnectionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  databaseName: string;
  dataConnectionName: string;
}
export const DataConnectionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
    dataConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/dataConnections/{dataConnectionName}",
      apiVersion: "2025-02-14",
    }),
  ) as unknown as Schema.Codec<DataConnectionsGetInput>;

// Output Schema
export interface DataConnectionsGetOutput {
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
export const DataConnectionsGetOutput =
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
  }) as unknown as Schema.Codec<DataConnectionsGetOutput>;

// The operation
/**
 * Returns a data connection.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Kusto cluster.
 * @param databaseName - The name of the database in the Kusto cluster.
 * @param dataConnectionName - The name of the data connection.
 */
export const DataConnectionsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DataConnectionsGetInput,
  outputSchema: DataConnectionsGetOutput,
}));
// Input Schema
export interface DataConnectionsListByDatabaseInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  databaseName: string;
}
export const DataConnectionsListByDatabaseInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/dataConnections",
      apiVersion: "2025-02-14",
    }),
  ) as unknown as Schema.Codec<DataConnectionsListByDatabaseInput>;

// Output Schema
export interface DataConnectionsListByDatabaseOutput {
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
export const DataConnectionsListByDatabaseOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<DataConnectionsListByDatabaseOutput>;

// The operation
/**
 * Returns the list of data connections of the given Kusto database.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Kusto cluster.
 * @param databaseName - The name of the database in the Kusto cluster.
 */
export const DataConnectionsListByDatabase =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DataConnectionsListByDatabaseInput,
    outputSchema: DataConnectionsListByDatabaseOutput,
  }));
// Input Schema
export interface DataConnectionsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  databaseName: string;
  dataConnectionName: string;
  location?: string;
  kind:
    | "EventHub"
    | "EventGrid"
    | "IotHub"
    | "CosmosDb"
    | "EventHubWithManagedIdentity"
    | "EventGridWithManagedIdentity";
}
export const DataConnectionsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
    dataConnectionName: Schema.String.pipe(T.PathParam()),
    location: Schema.optional(Schema.String),
    kind: Schema.Literals([
      "EventHub",
      "EventGrid",
      "IotHub",
      "CosmosDb",
      "EventHubWithManagedIdentity",
      "EventGridWithManagedIdentity",
    ]),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/dataConnections/{dataConnectionName}",
      apiVersion: "2025-02-14",
    }),
  ) as unknown as Schema.Codec<DataConnectionsUpdateInput>;

// Output Schema
export interface DataConnectionsUpdateOutput {
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
export const DataConnectionsUpdateOutput =
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
  }) as unknown as Schema.Codec<DataConnectionsUpdateOutput>;

// The operation
/**
 * Updates a data connection.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Kusto cluster.
 * @param databaseName - The name of the database in the Kusto cluster.
 * @param dataConnectionName - The name of the data connection.
 */
export const DataConnectionsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DataConnectionsUpdateInput,
    outputSchema: DataConnectionsUpdateOutput,
  }),
);
// Input Schema
export interface ManagedPrivateEndpointsCheckNameAvailabilityInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  name: string;
  type: "Microsoft.Kusto/clusters/managedPrivateEndpoints";
}
export const ManagedPrivateEndpointsCheckNameAvailabilityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
    type: Schema.Literals(["Microsoft.Kusto/clusters/managedPrivateEndpoints"]),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/managedPrivateEndpointsCheckNameAvailability",
      apiVersion: "2025-02-14",
    }),
  ) as unknown as Schema.Codec<ManagedPrivateEndpointsCheckNameAvailabilityInput>;

// Output Schema
export interface ManagedPrivateEndpointsCheckNameAvailabilityOutput {
  nameAvailable?: boolean;
  name?: string;
  message?: string;
  reason?: "Invalid" | "AlreadyExists";
}
export const ManagedPrivateEndpointsCheckNameAvailabilityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.Literals(["Invalid", "AlreadyExists"])),
  }) as unknown as Schema.Codec<ManagedPrivateEndpointsCheckNameAvailabilityOutput>;

// The operation
/**
 * Checks that the managed private endpoints resource name is valid and is not already in use.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Kusto cluster.
 */
export const ManagedPrivateEndpointsCheckNameAvailability =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ManagedPrivateEndpointsCheckNameAvailabilityInput,
    outputSchema: ManagedPrivateEndpointsCheckNameAvailabilityOutput,
  }));
// Input Schema
export interface ManagedPrivateEndpointsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  managedPrivateEndpointName: string;
  properties?: {
    privateLinkResourceId: string;
    privateLinkResourceRegion?: string;
    groupId: string;
    requestMessage?: string;
    provisioningState?:
      | "Running"
      | "Creating"
      | "Deleting"
      | "Succeeded"
      | "Failed"
      | "Moving"
      | "Canceled";
  };
}
export const ManagedPrivateEndpointsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    managedPrivateEndpointName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        privateLinkResourceId: Schema.String,
        privateLinkResourceRegion: Schema.optional(Schema.String),
        groupId: Schema.String,
        requestMessage: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Running",
            "Creating",
            "Deleting",
            "Succeeded",
            "Failed",
            "Moving",
            "Canceled",
          ]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/managedPrivateEndpoints/{managedPrivateEndpointName}",
      apiVersion: "2025-02-14",
    }),
  ) as unknown as Schema.Codec<ManagedPrivateEndpointsCreateOrUpdateInput>;

// Output Schema
export interface ManagedPrivateEndpointsCreateOrUpdateOutput {
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
export const ManagedPrivateEndpointsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ManagedPrivateEndpointsCreateOrUpdateOutput>;

// The operation
/**
 * Creates a managed private endpoint.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Kusto cluster.
 * @param managedPrivateEndpointName - The name of the managed private endpoint.
 */
export const ManagedPrivateEndpointsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ManagedPrivateEndpointsCreateOrUpdateInput,
    outputSchema: ManagedPrivateEndpointsCreateOrUpdateOutput,
  }));
// Input Schema
export interface ManagedPrivateEndpointsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  managedPrivateEndpointName: string;
}
export const ManagedPrivateEndpointsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    managedPrivateEndpointName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/managedPrivateEndpoints/{managedPrivateEndpointName}",
      apiVersion: "2025-02-14",
    }),
  ) as unknown as Schema.Codec<ManagedPrivateEndpointsDeleteInput>;

// Output Schema
export type ManagedPrivateEndpointsDeleteOutput = void;
export const ManagedPrivateEndpointsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ManagedPrivateEndpointsDeleteOutput>;

// The operation
/**
 * Deletes a managed private endpoint.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Kusto cluster.
 * @param managedPrivateEndpointName - The name of the managed private endpoint.
 */
export const ManagedPrivateEndpointsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ManagedPrivateEndpointsDeleteInput,
    outputSchema: ManagedPrivateEndpointsDeleteOutput,
  }));
// Input Schema
export interface ManagedPrivateEndpointsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  managedPrivateEndpointName: string;
}
export const ManagedPrivateEndpointsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    managedPrivateEndpointName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/managedPrivateEndpoints/{managedPrivateEndpointName}",
      apiVersion: "2025-02-14",
    }),
  ) as unknown as Schema.Codec<ManagedPrivateEndpointsGetInput>;

// Output Schema
export interface ManagedPrivateEndpointsGetOutput {
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
export const ManagedPrivateEndpointsGetOutput =
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
  }) as unknown as Schema.Codec<ManagedPrivateEndpointsGetOutput>;

// The operation
/**
 * Gets a managed private endpoint.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Kusto cluster.
 * @param managedPrivateEndpointName - The name of the managed private endpoint.
 */
export const ManagedPrivateEndpointsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ManagedPrivateEndpointsGetInput,
    outputSchema: ManagedPrivateEndpointsGetOutput,
  }),
);
// Input Schema
export interface ManagedPrivateEndpointsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
}
export const ManagedPrivateEndpointsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/managedPrivateEndpoints",
      apiVersion: "2025-02-14",
    }),
  ) as unknown as Schema.Codec<ManagedPrivateEndpointsListInput>;

// Output Schema
export interface ManagedPrivateEndpointsListOutput {
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
export const ManagedPrivateEndpointsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<ManagedPrivateEndpointsListOutput>;

// The operation
/**
 * Returns the list of managed private endpoints.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Kusto cluster.
 */
export const ManagedPrivateEndpointsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ManagedPrivateEndpointsListInput,
    outputSchema: ManagedPrivateEndpointsListOutput,
  }),
);
// Input Schema
export interface ManagedPrivateEndpointsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  managedPrivateEndpointName: string;
  properties?: {
    privateLinkResourceId: string;
    privateLinkResourceRegion?: string;
    groupId: string;
    requestMessage?: string;
    provisioningState?:
      | "Running"
      | "Creating"
      | "Deleting"
      | "Succeeded"
      | "Failed"
      | "Moving"
      | "Canceled";
  };
}
export const ManagedPrivateEndpointsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    managedPrivateEndpointName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        privateLinkResourceId: Schema.String,
        privateLinkResourceRegion: Schema.optional(Schema.String),
        groupId: Schema.String,
        requestMessage: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Running",
            "Creating",
            "Deleting",
            "Succeeded",
            "Failed",
            "Moving",
            "Canceled",
          ]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/managedPrivateEndpoints/{managedPrivateEndpointName}",
      apiVersion: "2025-02-14",
    }),
  ) as unknown as Schema.Codec<ManagedPrivateEndpointsUpdateInput>;

// Output Schema
export interface ManagedPrivateEndpointsUpdateOutput {
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
export const ManagedPrivateEndpointsUpdateOutput =
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
  }) as unknown as Schema.Codec<ManagedPrivateEndpointsUpdateOutput>;

// The operation
/**
 * Updates a managed private endpoint.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Kusto cluster.
 * @param managedPrivateEndpointName - The name of the managed private endpoint.
 */
export const ManagedPrivateEndpointsUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ManagedPrivateEndpointsUpdateInput,
    outputSchema: ManagedPrivateEndpointsUpdateOutput,
  }));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Kusto/operations",
    apiVersion: "2025-02-14",
  }),
) as unknown as Schema.Codec<OperationsListInput>;

// Output Schema
export interface OperationsListOutput {
  value?: {
    name?: string;
    display?: {
      provider?: string;
      operation?: string;
      resource?: string;
      description?: string;
    };
    origin?: string;
    properties?: unknown;
  }[];
  nextLink?: string;
}
export const OperationsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(
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
        origin: Schema.optional(Schema.String),
        properties: Schema.optional(Schema.Unknown),
      }),
    ),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<OperationsListOutput>;

// The operation
/**
 * List the operations for the provider
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface OperationsResultsGetInput {
  subscriptionId: string;
  location: string;
  operationId: string;
}
export const OperationsResultsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    operationId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Kusto/locations/{location}/operationResults/{operationId}",
      apiVersion: "2025-02-14",
    }),
  ) as unknown as Schema.Codec<OperationsResultsGetInput>;

// Output Schema
export interface OperationsResultsGetOutput {
  id?: string;
  name?: string;
  status?: "Succeeded" | "Canceled" | "Failed" | "Running";
  startTime?: string;
  endTime?: string;
  percentComplete?: number;
  properties?: {
    operationKind?: string;
    provisioningState?:
      | "Running"
      | "Creating"
      | "Deleting"
      | "Succeeded"
      | "Failed"
      | "Moving"
      | "Canceled";
    operationState?: string;
  };
  error?: { code?: string; message?: string };
}
export const OperationsResultsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.optional(
      Schema.Literals(["Succeeded", "Canceled", "Failed", "Running"]),
    ),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    percentComplete: Schema.optional(Schema.Number),
    properties: Schema.optional(
      Schema.Struct({
        operationKind: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Running",
            "Creating",
            "Deleting",
            "Succeeded",
            "Failed",
            "Moving",
            "Canceled",
          ]),
        ),
        operationState: Schema.optional(Schema.String),
      }),
    ),
    error: Schema.optional(
      Schema.Struct({
        code: Schema.optional(Schema.String),
        message: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<OperationsResultsGetOutput>;

// The operation
/**
 * Returns operation results.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The name of Azure region.
 * @param operationId - The ID of an ongoing async operation.
 */
export const OperationsResultsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: OperationsResultsGetInput,
    outputSchema: OperationsResultsGetOutput,
  }),
);
// Input Schema
export interface PrivateEndpointConnectionsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  privateEndpointConnectionName: string;
  properties?: {
    privateEndpoint?: { id?: string };
    privateLinkServiceConnectionState: {
      status?: string;
      description?: string;
      actionsRequired?: string;
    };
    groupId?: string;
    provisioningState?: string;
  };
}
export const PrivateEndpointConnectionsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        privateEndpoint: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
          }),
        ),
        privateLinkServiceConnectionState: Schema.Struct({
          status: Schema.optional(Schema.String),
          description: Schema.optional(Schema.String),
          actionsRequired: Schema.optional(Schema.String),
        }),
        groupId: Schema.optional(Schema.String),
        provisioningState: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2025-02-14",
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
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsCreateOrUpdateOutput>;

// The operation
/**
 * Approve or reject a private endpoint connection with a given name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Kusto cluster.
 * @param privateEndpointConnectionName - The name of the private endpoint connection.
 */
export const PrivateEndpointConnectionsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsCreateOrUpdateInput,
    outputSchema: PrivateEndpointConnectionsCreateOrUpdateOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2025-02-14",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsDeleteInput>;

// Output Schema
export type PrivateEndpointConnectionsDeleteOutput = void;
export const PrivateEndpointConnectionsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<PrivateEndpointConnectionsDeleteOutput>;

// The operation
/**
 * Deletes a private endpoint connection with a given name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Kusto cluster.
 * @param privateEndpointConnectionName - The name of the private endpoint connection.
 */
export const PrivateEndpointConnectionsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsDeleteInput,
    outputSchema: PrivateEndpointConnectionsDeleteOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2025-02-14",
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
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsGetOutput>;

// The operation
/**
 * Gets a private endpoint connection.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Kusto cluster.
 * @param privateEndpointConnectionName - The name of the private endpoint connection.
 */
export const PrivateEndpointConnectionsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsGetInput,
    outputSchema: PrivateEndpointConnectionsGetOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
}
export const PrivateEndpointConnectionsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/privateEndpointConnections",
      apiVersion: "2025-02-14",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsListInput>;

// Output Schema
export interface PrivateEndpointConnectionsListOutput {
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
export const PrivateEndpointConnectionsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsListOutput>;

// The operation
/**
 * Returns the list of private endpoint connections.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Kusto cluster.
 */
export const PrivateEndpointConnectionsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsListInput,
    outputSchema: PrivateEndpointConnectionsListOutput,
  }));
// Input Schema
export interface PrivateLinkResourcesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  privateLinkResourceName: string;
}
export const PrivateLinkResourcesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    privateLinkResourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/privateLinkResources/{privateLinkResourceName}",
      apiVersion: "2025-02-14",
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
  }) as unknown as Schema.Codec<PrivateLinkResourcesGetOutput>;

// The operation
/**
 * Gets a private link resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Kusto cluster.
 * @param privateLinkResourceName - The name of the private link resource.
 */
export const PrivateLinkResourcesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PrivateLinkResourcesGetInput,
    outputSchema: PrivateLinkResourcesGetOutput,
  }),
);
// Input Schema
export interface PrivateLinkResourcesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
}
export const PrivateLinkResourcesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/privateLinkResources",
      apiVersion: "2025-02-14",
    }),
  ) as unknown as Schema.Codec<PrivateLinkResourcesListInput>;

// Output Schema
export interface PrivateLinkResourcesListOutput {
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
export const PrivateLinkResourcesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<PrivateLinkResourcesListOutput>;

// The operation
/**
 * Returns the list of private link resources.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Kusto cluster.
 */
export const PrivateLinkResourcesList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PrivateLinkResourcesListInput,
    outputSchema: PrivateLinkResourcesListOutput,
  }),
);
// Input Schema
export interface SandboxCustomImagesCheckNameAvailabilityInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  name: string;
  type: "Microsoft.Kusto/clusters/sandboxCustomImages";
}
export const SandboxCustomImagesCheckNameAvailabilityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
    type: Schema.Literals(["Microsoft.Kusto/clusters/sandboxCustomImages"]),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/sandboxCustomImagesCheckNameAvailability",
      apiVersion: "2025-02-14",
    }),
  ) as unknown as Schema.Codec<SandboxCustomImagesCheckNameAvailabilityInput>;

// Output Schema
export interface SandboxCustomImagesCheckNameAvailabilityOutput {
  nameAvailable?: boolean;
  name?: string;
  message?: string;
  reason?: "Invalid" | "AlreadyExists";
}
export const SandboxCustomImagesCheckNameAvailabilityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.Literals(["Invalid", "AlreadyExists"])),
  }) as unknown as Schema.Codec<SandboxCustomImagesCheckNameAvailabilityOutput>;

// The operation
/**
 * Checks that the sandbox custom image resource name is valid and is not already in use.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Kusto cluster.
 */
export const SandboxCustomImagesCheckNameAvailability =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SandboxCustomImagesCheckNameAvailabilityInput,
    outputSchema: SandboxCustomImagesCheckNameAvailabilityOutput,
  }));
// Input Schema
export interface SandboxCustomImagesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  sandboxCustomImageName: string;
  properties?: {
    language: "Python";
    languageVersion?: string;
    baseImageName?: string;
    requirementsFileContent?: string;
    provisioningState?:
      | "Running"
      | "Creating"
      | "Deleting"
      | "Succeeded"
      | "Failed"
      | "Moving"
      | "Canceled";
  };
}
export const SandboxCustomImagesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    sandboxCustomImageName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        language: Schema.Literals(["Python"]),
        languageVersion: Schema.optional(Schema.String),
        baseImageName: Schema.optional(Schema.String),
        requirementsFileContent: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Running",
            "Creating",
            "Deleting",
            "Succeeded",
            "Failed",
            "Moving",
            "Canceled",
          ]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/sandboxCustomImages/{sandboxCustomImageName}",
      apiVersion: "2025-02-14",
    }),
  ) as unknown as Schema.Codec<SandboxCustomImagesCreateOrUpdateInput>;

// Output Schema
export interface SandboxCustomImagesCreateOrUpdateOutput {
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
export const SandboxCustomImagesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<SandboxCustomImagesCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a sandbox custom image.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Kusto cluster.
 * @param sandboxCustomImageName - The name of the sandbox custom image.
 */
export const SandboxCustomImagesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SandboxCustomImagesCreateOrUpdateInput,
    outputSchema: SandboxCustomImagesCreateOrUpdateOutput,
  }));
// Input Schema
export interface SandboxCustomImagesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  sandboxCustomImageName: string;
}
export const SandboxCustomImagesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    sandboxCustomImageName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/sandboxCustomImages/{sandboxCustomImageName}",
      apiVersion: "2025-02-14",
    }),
  ) as unknown as Schema.Codec<SandboxCustomImagesDeleteInput>;

// Output Schema
export type SandboxCustomImagesDeleteOutput = void;
export const SandboxCustomImagesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<SandboxCustomImagesDeleteOutput>;

// The operation
/**
 * Deletes a sandbox custom image.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Kusto cluster.
 * @param sandboxCustomImageName - The name of the sandbox custom image.
 */
export const SandboxCustomImagesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SandboxCustomImagesDeleteInput,
    outputSchema: SandboxCustomImagesDeleteOutput,
  }),
);
// Input Schema
export interface SandboxCustomImagesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  sandboxCustomImageName: string;
}
export const SandboxCustomImagesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    sandboxCustomImageName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/sandboxCustomImages/{sandboxCustomImageName}",
      apiVersion: "2025-02-14",
    }),
  ) as unknown as Schema.Codec<SandboxCustomImagesGetInput>;

// Output Schema
export interface SandboxCustomImagesGetOutput {
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
export const SandboxCustomImagesGetOutput =
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
  }) as unknown as Schema.Codec<SandboxCustomImagesGetOutput>;

// The operation
/**
 * Returns a sandbox custom image
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Kusto cluster.
 * @param sandboxCustomImageName - The name of the sandbox custom image.
 */
export const SandboxCustomImagesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SandboxCustomImagesGetInput,
    outputSchema: SandboxCustomImagesGetOutput,
  }),
);
// Input Schema
export interface SandboxCustomImagesListByClusterInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
}
export const SandboxCustomImagesListByClusterInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/sandboxCustomImages",
      apiVersion: "2025-02-14",
    }),
  ) as unknown as Schema.Codec<SandboxCustomImagesListByClusterInput>;

// Output Schema
export interface SandboxCustomImagesListByClusterOutput {
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
export const SandboxCustomImagesListByClusterOutput =
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
  }) as unknown as Schema.Codec<SandboxCustomImagesListByClusterOutput>;

// The operation
/**
 * Returns the list of the existing sandbox custom images of the given Kusto cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Kusto cluster.
 */
export const SandboxCustomImagesListByCluster =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SandboxCustomImagesListByClusterInput,
    outputSchema: SandboxCustomImagesListByClusterOutput,
  }));
// Input Schema
export interface SandboxCustomImagesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  sandboxCustomImageName: string;
  properties?: {
    language: "Python";
    languageVersion?: string;
    baseImageName?: string;
    requirementsFileContent?: string;
    provisioningState?:
      | "Running"
      | "Creating"
      | "Deleting"
      | "Succeeded"
      | "Failed"
      | "Moving"
      | "Canceled";
  };
}
export const SandboxCustomImagesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    sandboxCustomImageName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        language: Schema.Literals(["Python"]),
        languageVersion: Schema.optional(Schema.String),
        baseImageName: Schema.optional(Schema.String),
        requirementsFileContent: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Running",
            "Creating",
            "Deleting",
            "Succeeded",
            "Failed",
            "Moving",
            "Canceled",
          ]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/sandboxCustomImages/{sandboxCustomImageName}",
      apiVersion: "2025-02-14",
    }),
  ) as unknown as Schema.Codec<SandboxCustomImagesUpdateInput>;

// Output Schema
export interface SandboxCustomImagesUpdateOutput {
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
export const SandboxCustomImagesUpdateOutput =
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
  }) as unknown as Schema.Codec<SandboxCustomImagesUpdateOutput>;

// The operation
/**
 * Updates a sandbox custom image.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Kusto cluster.
 * @param sandboxCustomImageName - The name of the sandbox custom image.
 */
export const SandboxCustomImagesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SandboxCustomImagesUpdateInput,
    outputSchema: SandboxCustomImagesUpdateOutput,
  }),
);
// Input Schema
export interface ScriptsCheckNameAvailabilityInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  databaseName: string;
  name: string;
  type: "Microsoft.Kusto/clusters/databases/scripts";
}
export const ScriptsCheckNameAvailabilityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
    type: Schema.Literals(["Microsoft.Kusto/clusters/databases/scripts"]),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/scriptsCheckNameAvailability",
      apiVersion: "2025-02-14",
    }),
  ) as unknown as Schema.Codec<ScriptsCheckNameAvailabilityInput>;

// Output Schema
export interface ScriptsCheckNameAvailabilityOutput {
  nameAvailable?: boolean;
  name?: string;
  message?: string;
  reason?: "Invalid" | "AlreadyExists";
}
export const ScriptsCheckNameAvailabilityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.Literals(["Invalid", "AlreadyExists"])),
  }) as unknown as Schema.Codec<ScriptsCheckNameAvailabilityOutput>;

// The operation
/**
 * Checks that the script name is valid and is not already in use.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Kusto cluster.
 * @param databaseName - The name of the database in the Kusto cluster.
 */
export const ScriptsCheckNameAvailability =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ScriptsCheckNameAvailabilityInput,
    outputSchema: ScriptsCheckNameAvailabilityOutput,
  }));
// Input Schema
export interface ScriptsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  databaseName: string;
  scriptName: string;
  properties?: {
    scriptUrl?: string;
    scriptUrlSasToken?: string;
    scriptContent?: string;
    forceUpdateTag?: string;
    continueOnErrors?: boolean;
    provisioningState?:
      | "Running"
      | "Creating"
      | "Deleting"
      | "Succeeded"
      | "Failed"
      | "Moving"
      | "Canceled";
    scriptLevel?: "Database" | "Cluster";
    principalPermissionsAction?:
      | "RetainPermissionOnScriptCompletion"
      | "RemovePermissionOnScriptCompletion";
    managedIdentityResourceId?: string;
  };
}
export const ScriptsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
    scriptName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        scriptUrl: Schema.optional(Schema.String),
        scriptUrlSasToken: Schema.optional(Schema.String),
        scriptContent: Schema.optional(Schema.String),
        forceUpdateTag: Schema.optional(Schema.String),
        continueOnErrors: Schema.optional(Schema.Boolean),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Running",
            "Creating",
            "Deleting",
            "Succeeded",
            "Failed",
            "Moving",
            "Canceled",
          ]),
        ),
        scriptLevel: Schema.optional(Schema.Literals(["Database", "Cluster"])),
        principalPermissionsAction: Schema.optional(
          Schema.Literals([
            "RetainPermissionOnScriptCompletion",
            "RemovePermissionOnScriptCompletion",
          ]),
        ),
        managedIdentityResourceId: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/scripts/{scriptName}",
      apiVersion: "2025-02-14",
    }),
  ) as unknown as Schema.Codec<ScriptsCreateOrUpdateInput>;

// Output Schema
export interface ScriptsCreateOrUpdateOutput {
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
export const ScriptsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ScriptsCreateOrUpdateOutput>;

// The operation
/**
 * Creates a Kusto database script.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Kusto cluster.
 * @param databaseName - The name of the database in the Kusto cluster.
 * @param scriptName - The name of the Kusto database script.
 */
export const ScriptsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ScriptsCreateOrUpdateInput,
    outputSchema: ScriptsCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface ScriptsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  databaseName: string;
  scriptName: string;
}
export const ScriptsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  databaseName: Schema.String.pipe(T.PathParam()),
  scriptName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/scripts/{scriptName}",
    apiVersion: "2025-02-14",
  }),
) as unknown as Schema.Codec<ScriptsDeleteInput>;

// Output Schema
export type ScriptsDeleteOutput = void;
export const ScriptsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ScriptsDeleteOutput>;

// The operation
/**
 * Deletes a Kusto database script.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Kusto cluster.
 * @param databaseName - The name of the database in the Kusto cluster.
 * @param scriptName - The name of the Kusto database script.
 */
export const ScriptsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ScriptsDeleteInput,
  outputSchema: ScriptsDeleteOutput,
}));
// Input Schema
export interface ScriptsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  databaseName: string;
  scriptName: string;
}
export const ScriptsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  databaseName: Schema.String.pipe(T.PathParam()),
  scriptName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/scripts/{scriptName}",
    apiVersion: "2025-02-14",
  }),
) as unknown as Schema.Codec<ScriptsGetInput>;

// Output Schema
export interface ScriptsGetOutput {
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
export const ScriptsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ScriptsGetOutput>;

// The operation
/**
 * Gets a Kusto cluster database script.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Kusto cluster.
 * @param databaseName - The name of the database in the Kusto cluster.
 * @param scriptName - The name of the Kusto database script.
 */
export const ScriptsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ScriptsGetInput,
  outputSchema: ScriptsGetOutput,
}));
// Input Schema
export interface ScriptsListByDatabaseInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  databaseName: string;
}
export const ScriptsListByDatabaseInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    databaseName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/scripts",
      apiVersion: "2025-02-14",
    }),
  ) as unknown as Schema.Codec<ScriptsListByDatabaseInput>;

// Output Schema
export interface ScriptsListByDatabaseOutput {
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
export const ScriptsListByDatabaseOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<ScriptsListByDatabaseOutput>;

// The operation
/**
 * Returns the list of database scripts for given database.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Kusto cluster.
 * @param databaseName - The name of the database in the Kusto cluster.
 */
export const ScriptsListByDatabase = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ScriptsListByDatabaseInput,
    outputSchema: ScriptsListByDatabaseOutput,
  }),
);
// Input Schema
export interface ScriptsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  databaseName: string;
  scriptName: string;
  properties?: {
    scriptUrl?: string;
    scriptUrlSasToken?: string;
    scriptContent?: string;
    forceUpdateTag?: string;
    continueOnErrors?: boolean;
    provisioningState?:
      | "Running"
      | "Creating"
      | "Deleting"
      | "Succeeded"
      | "Failed"
      | "Moving"
      | "Canceled";
    scriptLevel?: "Database" | "Cluster";
    principalPermissionsAction?:
      | "RetainPermissionOnScriptCompletion"
      | "RemovePermissionOnScriptCompletion";
    managedIdentityResourceId?: string;
  };
}
export const ScriptsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  databaseName: Schema.String.pipe(T.PathParam()),
  scriptName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      scriptUrl: Schema.optional(Schema.String),
      scriptUrlSasToken: Schema.optional(Schema.String),
      scriptContent: Schema.optional(Schema.String),
      forceUpdateTag: Schema.optional(Schema.String),
      continueOnErrors: Schema.optional(Schema.Boolean),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Running",
          "Creating",
          "Deleting",
          "Succeeded",
          "Failed",
          "Moving",
          "Canceled",
        ]),
      ),
      scriptLevel: Schema.optional(Schema.Literals(["Database", "Cluster"])),
      principalPermissionsAction: Schema.optional(
        Schema.Literals([
          "RetainPermissionOnScriptCompletion",
          "RemovePermissionOnScriptCompletion",
        ]),
      ),
      managedIdentityResourceId: Schema.optional(Schema.String),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/scripts/{scriptName}",
    apiVersion: "2025-02-14",
  }),
) as unknown as Schema.Codec<ScriptsUpdateInput>;

// Output Schema
export interface ScriptsUpdateOutput {
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
export const ScriptsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ScriptsUpdateOutput>;

// The operation
/**
 * Updates a database script.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Kusto cluster.
 * @param databaseName - The name of the database in the Kusto cluster.
 * @param scriptName - The name of the Kusto database script.
 */
export const ScriptsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ScriptsUpdateInput,
  outputSchema: ScriptsUpdateOutput,
}));
// Input Schema
export interface SkusListInput {
  subscriptionId: string;
  location: string;
}
export const SkusListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  location: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.Kusto/locations/{location}/skus",
    apiVersion: "2025-02-14",
  }),
) as unknown as Schema.Codec<SkusListInput>;

// Output Schema
export interface SkusListOutput {
  value?: {
    resourceType?: string;
    name?: string;
    tier?: string;
    locations?: string[];
    locationInfo?: {
      location: string;
      zones?: string[];
      zoneDetails?: {
        name?: string[];
        capabilities?: { name?: string; value?: string }[];
      }[];
    }[];
    restrictions?: unknown[];
  }[];
  nextLink?: string;
}
export const SkusListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        resourceType: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        tier: Schema.optional(Schema.String),
        locations: Schema.optional(Schema.Array(Schema.String)),
        locationInfo: Schema.optional(
          Schema.Array(
            Schema.Struct({
              location: Schema.String,
              zones: Schema.optional(Schema.Array(Schema.String)),
              zoneDetails: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    name: Schema.optional(Schema.Array(Schema.String)),
                    capabilities: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          name: Schema.optional(Schema.String),
                          value: Schema.optional(Schema.String),
                        }),
                      ),
                    ),
                  }),
                ),
              ),
            }),
          ),
        ),
        restrictions: Schema.optional(Schema.Array(Schema.Unknown)),
      }),
    ),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<SkusListOutput>;

// The operation
/**
 * Lists eligible region SKUs for Kusto resource provider by Azure region.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The name of Azure region.
 */
export const SkusList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SkusListInput,
  outputSchema: SkusListOutput,
}));
