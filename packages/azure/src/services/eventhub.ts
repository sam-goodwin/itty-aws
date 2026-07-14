/**
 * Azure Eventhub API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface ApplicationGroupCreateOrUpdateApplicationGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  applicationGroupName: string;
  properties?: {
    isEnabled?: boolean;
    clientAppGroupIdentifier: string;
    policies?: { name: string; type: "ThrottlingPolicy" }[];
  };
  location?: string;
}
export const ApplicationGroupCreateOrUpdateApplicationGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    applicationGroupName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        isEnabled: Schema.optional(Schema.Boolean),
        clientAppGroupIdentifier: Schema.String,
        policies: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.String,
              type: Schema.Literals(["ThrottlingPolicy"]),
            }),
          ),
        ),
      }),
    ),
    location: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/applicationGroups/{applicationGroupName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ApplicationGroupCreateOrUpdateApplicationGroupInput>;

// Output Schema
export interface ApplicationGroupCreateOrUpdateApplicationGroupOutput {
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
export const ApplicationGroupCreateOrUpdateApplicationGroupOutput =
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
  }) as unknown as Schema.Codec<ApplicationGroupCreateOrUpdateApplicationGroupOutput>;

// The operation
/**
 * Creates or updates an ApplicationGroup for a Namespace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The Namespace name
 * @param applicationGroupName - The Application Group name
 */
export const ApplicationGroupCreateOrUpdateApplicationGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ApplicationGroupCreateOrUpdateApplicationGroupInput,
    outputSchema: ApplicationGroupCreateOrUpdateApplicationGroupOutput,
  }));
// Input Schema
export interface ApplicationGroupDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  applicationGroupName: string;
}
export const ApplicationGroupDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    applicationGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/applicationGroups/{applicationGroupName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ApplicationGroupDeleteInput>;

// Output Schema
export type ApplicationGroupDeleteOutput = void;
export const ApplicationGroupDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ApplicationGroupDeleteOutput>;

// The operation
/**
 * Deletes an ApplicationGroup for a Namespace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The Namespace name
 * @param applicationGroupName - The Application Group name
 */
export const ApplicationGroupDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: ApplicationGroupDeleteInput,
  outputSchema: ApplicationGroupDeleteOutput,
}));
// Input Schema
export interface ApplicationGroupGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  applicationGroupName: string;
}
export const ApplicationGroupGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    applicationGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/applicationGroups/{applicationGroupName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ApplicationGroupGetInput>;

// Output Schema
export interface ApplicationGroupGetOutput {
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
export const ApplicationGroupGetOutput =
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
  }) as unknown as Schema.Codec<ApplicationGroupGetOutput>;

// The operation
/**
 * Gets an ApplicationGroup for a Namespace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The Namespace name
 * @param applicationGroupName - The Application Group name
 */
export const ApplicationGroupGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ApplicationGroupGetInput,
  outputSchema: ApplicationGroupGetOutput,
}));
// Input Schema
export interface ApplicationGroupListByNamespaceInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
}
export const ApplicationGroupListByNamespaceInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/applicationGroups",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ApplicationGroupListByNamespaceInput>;

// Output Schema
export interface ApplicationGroupListByNamespaceOutput {
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
export const ApplicationGroupListByNamespaceOutput =
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
  }) as unknown as Schema.Codec<ApplicationGroupListByNamespaceOutput>;

// The operation
/**
 * Gets a list of application groups for a Namespace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The Namespace name
 */
export const ApplicationGroupListByNamespace =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ApplicationGroupListByNamespaceInput,
    outputSchema: ApplicationGroupListByNamespaceOutput,
  }));
// Input Schema
export interface ClustersCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  properties?: {
    createdAt?: string;
    provisioningState?:
      | "Unknown"
      | "Creating"
      | "Deleting"
      | "Scaling"
      | "Active"
      | "Failed"
      | "Succeeded"
      | "Canceled";
    updatedAt?: string;
    metricId?: string;
    status?: string;
    supportsScaling?: boolean;
    platformCapabilities?: {
      confidentialCompute?: { mode?: "Disabled" | "Enabled" };
    };
    zoneRedundant?: boolean;
  };
  sku?: { name: "Dedicated"; capacity?: number };
  location?: string;
  tags?: Record<string, string>;
}
export const ClustersCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        createdAt: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Unknown",
            "Creating",
            "Deleting",
            "Scaling",
            "Active",
            "Failed",
            "Succeeded",
            "Canceled",
          ]),
        ),
        updatedAt: Schema.optional(Schema.String),
        metricId: Schema.optional(Schema.String),
        status: Schema.optional(Schema.String),
        supportsScaling: Schema.optional(Schema.Boolean),
        platformCapabilities: Schema.optional(
          Schema.Struct({
            confidentialCompute: Schema.optional(
              Schema.Struct({
                mode: Schema.optional(Schema.Literals(["Disabled", "Enabled"])),
              }),
            ),
          }),
        ),
        zoneRedundant: Schema.optional(Schema.Boolean),
      }),
    ),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.Literals(["Dedicated"]),
        capacity: Schema.optional(Schema.Number),
      }),
    ),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/clusters/{clusterName}",
      apiVersion: "2026-01-01",
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
  }) as unknown as Schema.Codec<ClustersCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates an instance of an Event Hubs Cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Event Hubs Cluster.
 */
export const ClustersCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ClustersCreateOrUpdateInput,
  outputSchema: ClustersCreateOrUpdateOutput,
}));
// Input Schema
export interface ClustersDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
}
export const ClustersDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/clusters/{clusterName}",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<ClustersDeleteInput>;

// Output Schema
export type ClustersDeleteOutput = void;
export const ClustersDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ClustersDeleteOutput>;

// The operation
/**
 * Deletes an existing Event Hubs Cluster. This operation is idempotent.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Event Hubs Cluster.
 */
export const ClustersDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: ClustersDeleteInput,
  outputSchema: ClustersDeleteOutput,
}));
// Input Schema
export interface ClustersGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
}
export const ClustersGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/clusters/{clusterName}",
    apiVersion: "2026-01-01",
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
export const ClustersGetOutput = /*@__PURE__*/ Schema.Struct({
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
 * Gets the resource description of the specified Event Hubs Cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Event Hubs Cluster.
 */
export const ClustersGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ClustersGetInput,
  outputSchema: ClustersGetOutput,
}));
// Input Schema
export interface ClustersListAvailableClusterRegionInput {
  subscriptionId: string;
}
export const ClustersListAvailableClusterRegionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.EventHub/availableClusterRegions",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ClustersListAvailableClusterRegionInput>;

// Output Schema
export interface ClustersListAvailableClusterRegionOutput {
  value?: { location?: string }[];
}
export const ClustersListAvailableClusterRegionOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          location: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ClustersListAvailableClusterRegionOutput>;

// The operation
/**
 * List the quantity of available pre-provisioned Event Hubs Clusters, indexed by Azure region.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const ClustersListAvailableClusterRegion =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ClustersListAvailableClusterRegionInput,
    outputSchema: ClustersListAvailableClusterRegionOutput,
  }));
// Input Schema
export interface ClustersListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const ClustersListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/clusters",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ClustersListByResourceGroupInput>;

// Output Schema
export interface ClustersListByResourceGroupOutput {
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
export const ClustersListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<ClustersListByResourceGroupOutput>;

// The operation
/**
 * Lists the available Event Hubs Clusters within an ARM resource group
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ClustersListByResourceGroup = /*@__PURE__*/ API.make(() => ({
  inputSchema: ClustersListByResourceGroupInput,
  outputSchema: ClustersListByResourceGroupOutput,
}));
// Input Schema
export interface ClustersListBySubscriptionInput {
  subscriptionId: string;
}
export const ClustersListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.EventHub/clusters",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ClustersListBySubscriptionInput>;

// Output Schema
export interface ClustersListBySubscriptionOutput {
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
export const ClustersListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<ClustersListBySubscriptionOutput>;

// The operation
/**
 * Lists the available Event Hubs Clusters within an ARM resource group
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const ClustersListBySubscription = /*@__PURE__*/ API.make(() => ({
  inputSchema: ClustersListBySubscriptionInput,
  outputSchema: ClustersListBySubscriptionOutput,
}));
// Input Schema
export interface ClustersListNamespacesInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
}
export const ClustersListNamespacesInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/clusters/{clusterName}/namespaces",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ClustersListNamespacesInput>;

// Output Schema
export interface ClustersListNamespacesOutput {
  value?: { id?: string }[];
}
export const ClustersListNamespacesOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ClustersListNamespacesOutput>;

// The operation
/**
 * List all Event Hubs Namespace IDs in an Event Hubs Dedicated Cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Event Hubs Cluster.
 */
export const ClustersListNamespaces = /*@__PURE__*/ API.make(() => ({
  inputSchema: ClustersListNamespacesInput,
  outputSchema: ClustersListNamespacesOutput,
}));
// Input Schema
export interface ClustersUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  properties?: {
    createdAt?: string;
    provisioningState?:
      | "Unknown"
      | "Creating"
      | "Deleting"
      | "Scaling"
      | "Active"
      | "Failed"
      | "Succeeded"
      | "Canceled";
    updatedAt?: string;
    metricId?: string;
    status?: string;
    supportsScaling?: boolean;
    platformCapabilities?: {
      confidentialCompute?: { mode?: "Disabled" | "Enabled" };
    };
    zoneRedundant?: boolean;
  };
  sku?: { name: "Dedicated"; capacity?: number };
  location?: string;
  tags?: Record<string, string>;
}
export const ClustersUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      createdAt: Schema.optional(Schema.String),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Unknown",
          "Creating",
          "Deleting",
          "Scaling",
          "Active",
          "Failed",
          "Succeeded",
          "Canceled",
        ]),
      ),
      updatedAt: Schema.optional(Schema.String),
      metricId: Schema.optional(Schema.String),
      status: Schema.optional(Schema.String),
      supportsScaling: Schema.optional(Schema.Boolean),
      platformCapabilities: Schema.optional(
        Schema.Struct({
          confidentialCompute: Schema.optional(
            Schema.Struct({
              mode: Schema.optional(Schema.Literals(["Disabled", "Enabled"])),
            }),
          ),
        }),
      ),
      zoneRedundant: Schema.optional(Schema.Boolean),
    }),
  ),
  sku: Schema.optional(
    Schema.Struct({
      name: Schema.Literals(["Dedicated"]),
      capacity: Schema.optional(Schema.Number),
    }),
  ),
  location: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/clusters/{clusterName}",
    apiVersion: "2026-01-01",
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
export const ClustersUpdateOutput = /*@__PURE__*/ Schema.Struct({
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
 * Modifies mutable properties on the Event Hubs Cluster. This operation is idempotent.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Event Hubs Cluster.
 */
export const ClustersUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ClustersUpdateInput,
  outputSchema: ClustersUpdateOutput,
}));
// Input Schema
export interface ConfigurationGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
}
export const ConfigurationGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/clusters/{clusterName}/quotaConfiguration/default",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<ConfigurationGetInput>;

// Output Schema
export interface ConfigurationGetOutput {
  settings?: Record<string, string>;
}
export const ConfigurationGetOutput = /*@__PURE__*/ Schema.Struct({
  settings: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}) as unknown as Schema.Codec<ConfigurationGetOutput>;

// The operation
/**
 * Get all Event Hubs Cluster settings - a collection of key/value pairs which represent the quotas and settings imposed on the cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Event Hubs Cluster.
 */
export const ConfigurationGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ConfigurationGetInput,
  outputSchema: ConfigurationGetOutput,
}));
// Input Schema
export interface ConfigurationPatchInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  settings?: Record<string, string>;
}
export const ConfigurationPatchInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    settings: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/clusters/{clusterName}/quotaConfiguration/default",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ConfigurationPatchInput>;

// Output Schema
export interface ConfigurationPatchOutput {
  settings?: Record<string, string>;
}
export const ConfigurationPatchOutput =
  /*@__PURE__*/ Schema.Struct({
    settings: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }) as unknown as Schema.Codec<ConfigurationPatchOutput>;

// The operation
/**
 * Replace all specified Event Hubs Cluster settings with those contained in the request body. Leaves the settings not specified in the request body unmodified.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Event Hubs Cluster.
 */
export const ConfigurationPatch = /*@__PURE__*/ API.make(() => ({
  inputSchema: ConfigurationPatchInput,
  outputSchema: ConfigurationPatchOutput,
}));
// Input Schema
export interface ConsumerGroupsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  eventHubName: string;
  consumerGroupName: string;
  properties?: {
    createdAt?: string;
    updatedAt?: string;
    userMetadata?: string;
  };
  location?: string;
}
export const ConsumerGroupsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    eventHubName: Schema.String.pipe(T.PathParam()),
    consumerGroupName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        createdAt: Schema.optional(Schema.String),
        updatedAt: Schema.optional(Schema.String),
        userMetadata: Schema.optional(Schema.String),
      }),
    ),
    location: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/eventhubs/{eventHubName}/consumergroups/{consumerGroupName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ConsumerGroupsCreateOrUpdateInput>;

// Output Schema
export interface ConsumerGroupsCreateOrUpdateOutput {
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
export const ConsumerGroupsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ConsumerGroupsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates an Event Hubs consumer group as a nested resource within a Namespace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The Namespace name
 * @param eventHubName - The Event Hub name
 * @param consumerGroupName - The consumer group name
 */
export const ConsumerGroupsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ConsumerGroupsCreateOrUpdateInput,
    outputSchema: ConsumerGroupsCreateOrUpdateOutput,
  }));
// Input Schema
export interface ConsumerGroupsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  eventHubName: string;
  consumerGroupName: string;
}
export const ConsumerGroupsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    eventHubName: Schema.String.pipe(T.PathParam()),
    consumerGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/eventhubs/{eventHubName}/consumergroups/{consumerGroupName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ConsumerGroupsDeleteInput>;

// Output Schema
export type ConsumerGroupsDeleteOutput = void;
export const ConsumerGroupsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ConsumerGroupsDeleteOutput>;

// The operation
/**
 * Deletes a consumer group from the specified Event Hub and resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The Namespace name
 * @param eventHubName - The Event Hub name
 * @param consumerGroupName - The consumer group name
 */
export const ConsumerGroupsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: ConsumerGroupsDeleteInput,
  outputSchema: ConsumerGroupsDeleteOutput,
}));
// Input Schema
export interface ConsumerGroupsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  eventHubName: string;
  consumerGroupName: string;
}
export const ConsumerGroupsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  namespaceName: Schema.String.pipe(T.PathParam()),
  eventHubName: Schema.String.pipe(T.PathParam()),
  consumerGroupName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/eventhubs/{eventHubName}/consumergroups/{consumerGroupName}",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<ConsumerGroupsGetInput>;

// Output Schema
export interface ConsumerGroupsGetOutput {
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
export const ConsumerGroupsGetOutput =
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
  }) as unknown as Schema.Codec<ConsumerGroupsGetOutput>;

// The operation
/**
 * Gets a description for the specified consumer group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The Namespace name
 * @param eventHubName - The Event Hub name
 * @param consumerGroupName - The consumer group name
 */
export const ConsumerGroupsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ConsumerGroupsGetInput,
  outputSchema: ConsumerGroupsGetOutput,
}));
// Input Schema
export interface ConsumerGroupsListByEventHubInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  eventHubName: string;
  $skip?: number;
  $top?: number;
}
export const ConsumerGroupsListByEventHubInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    eventHubName: Schema.String.pipe(T.PathParam()),
    $skip: Schema.optional(Schema.Number),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/eventhubs/{eventHubName}/consumergroups",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ConsumerGroupsListByEventHubInput>;

// Output Schema
export interface ConsumerGroupsListByEventHubOutput {
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
export const ConsumerGroupsListByEventHubOutput =
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
  }) as unknown as Schema.Codec<ConsumerGroupsListByEventHubOutput>;

// The operation
/**
 * Gets all the consumer groups in a Namespace. An empty feed is returned if no consumer group exists in the Namespace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The Namespace name
 * @param eventHubName - The Event Hub name
 * @param $skip - Skip is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skip parameter that specifies a starting point to use for subsequent calls.
 * @param $top - May be used to limit the number of results to the most recent N usageDetails.
 */
export const ConsumerGroupsListByEventHub =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ConsumerGroupsListByEventHubInput,
    outputSchema: ConsumerGroupsListByEventHubOutput,
  }));
// Input Schema
export interface DisasterRecoveryConfigsBreakPairingInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  alias: string;
}
export const DisasterRecoveryConfigsBreakPairingInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    alias: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/disasterRecoveryConfigs/{alias}/breakPairing",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<DisasterRecoveryConfigsBreakPairingInput>;

// Output Schema
export type DisasterRecoveryConfigsBreakPairingOutput = void;
export const DisasterRecoveryConfigsBreakPairingOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DisasterRecoveryConfigsBreakPairingOutput>;

// The operation
/**
 * This operation disables the Disaster Recovery and stops replicating changes from primary to secondary namespaces
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The Namespace name
 * @param alias - The Disaster Recovery configuration name
 */
export const DisasterRecoveryConfigsBreakPairing =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DisasterRecoveryConfigsBreakPairingInput,
    outputSchema: DisasterRecoveryConfigsBreakPairingOutput,
  }));
// Input Schema
export interface DisasterRecoveryConfigsCheckNameAvailabilityInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  name: string;
}
export const DisasterRecoveryConfigsCheckNameAvailabilityInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/disasterRecoveryConfigs/checkNameAvailability",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<DisasterRecoveryConfigsCheckNameAvailabilityInput>;

// Output Schema
export interface DisasterRecoveryConfigsCheckNameAvailabilityOutput {
  message?: string;
  nameAvailable?: boolean;
  reason?:
    | "None"
    | "InvalidName"
    | "SubscriptionIsDisabled"
    | "NameInUse"
    | "NameInLockdown"
    | "TooManyNamespaceInCurrentSubscription";
}
export const DisasterRecoveryConfigsCheckNameAvailabilityOutput =
  /*@__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(
      Schema.Literals([
        "None",
        "InvalidName",
        "SubscriptionIsDisabled",
        "NameInUse",
        "NameInLockdown",
        "TooManyNamespaceInCurrentSubscription",
      ]),
    ),
  }) as unknown as Schema.Codec<DisasterRecoveryConfigsCheckNameAvailabilityOutput>;

// The operation
/**
 * Check the give Namespace name availability.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The Namespace name
 */
export const DisasterRecoveryConfigsCheckNameAvailability =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DisasterRecoveryConfigsCheckNameAvailabilityInput,
    outputSchema: DisasterRecoveryConfigsCheckNameAvailabilityOutput,
  }));
// Input Schema
export interface DisasterRecoveryConfigsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  alias: string;
  properties?: {
    provisioningState?: "Accepted" | "Succeeded" | "Failed";
    partnerNamespace?: string;
    alternateName?: string;
    role?: "Primary" | "PrimaryNotReplicating" | "Secondary";
    pendingReplicationOperationsCount?: number;
  };
  location?: string;
}
export const DisasterRecoveryConfigsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    alias: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals(["Accepted", "Succeeded", "Failed"]),
        ),
        partnerNamespace: Schema.optional(Schema.String),
        alternateName: Schema.optional(Schema.String),
        role: Schema.optional(
          Schema.Literals(["Primary", "PrimaryNotReplicating", "Secondary"]),
        ),
        pendingReplicationOperationsCount: Schema.optional(Schema.Number),
      }),
    ),
    location: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/disasterRecoveryConfigs/{alias}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<DisasterRecoveryConfigsCreateOrUpdateInput>;

// Output Schema
export interface DisasterRecoveryConfigsCreateOrUpdateOutput {
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
export const DisasterRecoveryConfigsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<DisasterRecoveryConfigsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a new Alias(Disaster Recovery configuration)
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The Namespace name
 * @param alias - The Disaster Recovery configuration name
 */
export const DisasterRecoveryConfigsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DisasterRecoveryConfigsCreateOrUpdateInput,
    outputSchema: DisasterRecoveryConfigsCreateOrUpdateOutput,
  }));
// Input Schema
export interface DisasterRecoveryConfigsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  alias: string;
}
export const DisasterRecoveryConfigsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    alias: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/disasterRecoveryConfigs/{alias}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<DisasterRecoveryConfigsDeleteInput>;

// Output Schema
export type DisasterRecoveryConfigsDeleteOutput = void;
export const DisasterRecoveryConfigsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DisasterRecoveryConfigsDeleteOutput>;

// The operation
/**
 * Deletes an Alias(Disaster Recovery configuration)
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The Namespace name
 * @param alias - The Disaster Recovery configuration name
 */
export const DisasterRecoveryConfigsDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DisasterRecoveryConfigsDeleteInput,
    outputSchema: DisasterRecoveryConfigsDeleteOutput,
  }));
// Input Schema
export interface DisasterRecoveryConfigsFailOverInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  alias: string;
}
export const DisasterRecoveryConfigsFailOverInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    alias: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/disasterRecoveryConfigs/{alias}/failover",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<DisasterRecoveryConfigsFailOverInput>;

// Output Schema
export type DisasterRecoveryConfigsFailOverOutput = void;
export const DisasterRecoveryConfigsFailOverOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DisasterRecoveryConfigsFailOverOutput>;

// The operation
/**
 * Invokes GEO DR failover and reconfigure the alias to point to the secondary namespace
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The Namespace name
 * @param alias - The Disaster Recovery configuration name
 */
export const DisasterRecoveryConfigsFailOver =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DisasterRecoveryConfigsFailOverInput,
    outputSchema: DisasterRecoveryConfigsFailOverOutput,
  }));
// Input Schema
export interface DisasterRecoveryConfigsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  alias: string;
}
export const DisasterRecoveryConfigsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    alias: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/disasterRecoveryConfigs/{alias}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<DisasterRecoveryConfigsGetInput>;

// Output Schema
export interface DisasterRecoveryConfigsGetOutput {
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
export const DisasterRecoveryConfigsGetOutput =
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
  }) as unknown as Schema.Codec<DisasterRecoveryConfigsGetOutput>;

// The operation
/**
 * Retrieves Alias(Disaster Recovery configuration) for primary or secondary namespace
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The Namespace name
 * @param alias - The Disaster Recovery configuration name
 */
export const DisasterRecoveryConfigsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: DisasterRecoveryConfigsGetInput,
  outputSchema: DisasterRecoveryConfigsGetOutput,
}));
// Input Schema
export interface DisasterRecoveryConfigsGetAuthorizationRuleInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  alias: string;
  authorizationRuleName: string;
}
export const DisasterRecoveryConfigsGetAuthorizationRuleInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    alias: Schema.String.pipe(T.PathParam()),
    authorizationRuleName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/disasterRecoveryConfigs/{alias}/authorizationRules/{authorizationRuleName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<DisasterRecoveryConfigsGetAuthorizationRuleInput>;

// Output Schema
export interface DisasterRecoveryConfigsGetAuthorizationRuleOutput {
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
export const DisasterRecoveryConfigsGetAuthorizationRuleOutput =
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
  }) as unknown as Schema.Codec<DisasterRecoveryConfigsGetAuthorizationRuleOutput>;

// The operation
/**
 * Gets an AuthorizationRule for a Namespace by rule name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The Namespace name
 * @param alias - The Disaster Recovery configuration name
 * @param authorizationRuleName - The authorization rule name.
 */
export const DisasterRecoveryConfigsGetAuthorizationRule =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DisasterRecoveryConfigsGetAuthorizationRuleInput,
    outputSchema: DisasterRecoveryConfigsGetAuthorizationRuleOutput,
  }));
// Input Schema
export interface DisasterRecoveryConfigsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
}
export const DisasterRecoveryConfigsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/disasterRecoveryConfigs",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<DisasterRecoveryConfigsListInput>;

// Output Schema
export interface DisasterRecoveryConfigsListOutput {
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
export const DisasterRecoveryConfigsListOutput =
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
  }) as unknown as Schema.Codec<DisasterRecoveryConfigsListOutput>;

// The operation
/**
 * Gets all Alias(Disaster Recovery configurations)
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The Namespace name
 */
export const DisasterRecoveryConfigsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: DisasterRecoveryConfigsListInput,
  outputSchema: DisasterRecoveryConfigsListOutput,
}));
// Input Schema
export interface DisasterRecoveryConfigsListAuthorizationRulesInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  alias: string;
}
export const DisasterRecoveryConfigsListAuthorizationRulesInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    alias: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/disasterRecoveryConfigs/{alias}/authorizationRules",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<DisasterRecoveryConfigsListAuthorizationRulesInput>;

// Output Schema
export interface DisasterRecoveryConfigsListAuthorizationRulesOutput {
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
export const DisasterRecoveryConfigsListAuthorizationRulesOutput =
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
  }) as unknown as Schema.Codec<DisasterRecoveryConfigsListAuthorizationRulesOutput>;

// The operation
/**
 * Gets a list of authorization rules for a Namespace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The Namespace name
 * @param alias - The Disaster Recovery configuration name
 */
export const DisasterRecoveryConfigsListAuthorizationRules =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DisasterRecoveryConfigsListAuthorizationRulesInput,
    outputSchema: DisasterRecoveryConfigsListAuthorizationRulesOutput,
  }));
// Input Schema
export interface DisasterRecoveryConfigsListKeysInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  alias: string;
  authorizationRuleName: string;
}
export const DisasterRecoveryConfigsListKeysInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    alias: Schema.String.pipe(T.PathParam()),
    authorizationRuleName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/disasterRecoveryConfigs/{alias}/authorizationRules/{authorizationRuleName}/listKeys",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<DisasterRecoveryConfigsListKeysInput>;

// Output Schema
export interface DisasterRecoveryConfigsListKeysOutput {
  primaryConnectionString?: string;
  secondaryConnectionString?: string;
  aliasPrimaryConnectionString?: string;
  aliasSecondaryConnectionString?: string;
  primaryKey?: string;
  secondaryKey?: string;
  keyName?: string;
}
export const DisasterRecoveryConfigsListKeysOutput =
  /*@__PURE__*/ Schema.Struct({
    primaryConnectionString: Schema.optional(Schema.String),
    secondaryConnectionString: Schema.optional(Schema.String),
    aliasPrimaryConnectionString: Schema.optional(Schema.String),
    aliasSecondaryConnectionString: Schema.optional(Schema.String),
    primaryKey: Schema.optional(Schema.String),
    secondaryKey: Schema.optional(Schema.String),
    keyName: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DisasterRecoveryConfigsListKeysOutput>;

// The operation
/**
 * Gets the primary and secondary connection strings for the Namespace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The Namespace name
 * @param alias - The Disaster Recovery configuration name
 * @param authorizationRuleName - The authorization rule name.
 */
export const DisasterRecoveryConfigsListKeys =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DisasterRecoveryConfigsListKeysInput,
    outputSchema: DisasterRecoveryConfigsListKeysOutput,
  }));
// Input Schema
export interface EventHubsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  eventHubName: string;
  properties?: {
    partitionIds?: string[];
    createdAt?: string;
    updatedAt?: string;
    messageRetentionInDays?: number;
    partitionCount?: number;
    status?:
      | "Active"
      | "Disabled"
      | "Restoring"
      | "SendDisabled"
      | "ReceiveDisabled"
      | "Creating"
      | "Deleting"
      | "Renaming"
      | "Unknown";
    captureDescription?: {
      enabled?: boolean;
      encoding?: "Avro" | "AvroDeflate";
      intervalInSeconds?: number;
      sizeLimitInBytes?: number;
      destination?: {
        name?: string;
        identity?: {
          type?: "SystemAssigned" | "UserAssigned";
          userAssignedIdentity?: string;
        };
        properties?: {
          storageAccountResourceId?: string;
          blobContainer?: string;
          archiveNameFormat?: string;
          dataLakeSubscriptionId?: string;
          dataLakeAccountName?: string;
          dataLakeFolderPath?: string;
        };
      };
      skipEmptyArchives?: boolean;
    };
    retentionDescription?: {
      cleanupPolicy?: "Delete" | "Compact" | "DeleteOrCompact";
      retentionTimeInHours?: number;
      minCompactionLagTimeInMinutes?: number;
      tombstoneRetentionTimeInHours?: number;
    };
    messageTimestampDescription?: { timestampType?: "LogAppend" | "Create" };
    identifier?: string;
    userMetadata?: string;
  };
  location?: string;
}
export const EventHubsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    eventHubName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        partitionIds: Schema.optional(Schema.Array(Schema.String)),
        createdAt: Schema.optional(Schema.String),
        updatedAt: Schema.optional(Schema.String),
        messageRetentionInDays: Schema.optional(Schema.Number),
        partitionCount: Schema.optional(Schema.Number),
        status: Schema.optional(
          Schema.Literals([
            "Active",
            "Disabled",
            "Restoring",
            "SendDisabled",
            "ReceiveDisabled",
            "Creating",
            "Deleting",
            "Renaming",
            "Unknown",
          ]),
        ),
        captureDescription: Schema.optional(
          Schema.Struct({
            enabled: Schema.optional(Schema.Boolean),
            encoding: Schema.optional(Schema.Literals(["Avro", "AvroDeflate"])),
            intervalInSeconds: Schema.optional(Schema.Number),
            sizeLimitInBytes: Schema.optional(Schema.Number),
            destination: Schema.optional(
              Schema.Struct({
                name: Schema.optional(Schema.String),
                identity: Schema.optional(
                  Schema.Struct({
                    type: Schema.optional(
                      Schema.Literals(["SystemAssigned", "UserAssigned"]),
                    ),
                    userAssignedIdentity: Schema.optional(Schema.String),
                  }),
                ),
                properties: Schema.optional(
                  Schema.Struct({
                    storageAccountResourceId: Schema.optional(Schema.String),
                    blobContainer: Schema.optional(Schema.String),
                    archiveNameFormat: Schema.optional(Schema.String),
                    dataLakeSubscriptionId: Schema.optional(Schema.String),
                    dataLakeAccountName: Schema.optional(Schema.String),
                    dataLakeFolderPath: Schema.optional(Schema.String),
                  }),
                ),
              }),
            ),
            skipEmptyArchives: Schema.optional(Schema.Boolean),
          }),
        ),
        retentionDescription: Schema.optional(
          Schema.Struct({
            cleanupPolicy: Schema.optional(
              Schema.Literals(["Delete", "Compact", "DeleteOrCompact"]),
            ),
            retentionTimeInHours: Schema.optional(Schema.Number),
            minCompactionLagTimeInMinutes: Schema.optional(Schema.Number),
            tombstoneRetentionTimeInHours: Schema.optional(Schema.Number),
          }),
        ),
        messageTimestampDescription: Schema.optional(
          Schema.Struct({
            timestampType: Schema.optional(
              Schema.Literals(["LogAppend", "Create"]),
            ),
          }),
        ),
        identifier: Schema.optional(Schema.String),
        userMetadata: Schema.optional(Schema.String),
      }),
    ),
    location: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/eventhubs/{eventHubName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<EventHubsCreateOrUpdateInput>;

// Output Schema
export interface EventHubsCreateOrUpdateOutput {
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
export const EventHubsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<EventHubsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a new Event Hub as a nested resource within a Namespace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The Namespace name
 * @param eventHubName - The Event Hub name
 */
export const EventHubsCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: EventHubsCreateOrUpdateInput,
  outputSchema: EventHubsCreateOrUpdateOutput,
}));
// Input Schema
export interface EventHubsCreateOrUpdateAuthorizationRuleInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  eventHubName: string;
  authorizationRuleName: string;
  properties?: { rights: ("Manage" | "Send" | "Listen")[] };
  location?: string;
}
export const EventHubsCreateOrUpdateAuthorizationRuleInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    eventHubName: Schema.String.pipe(T.PathParam()),
    authorizationRuleName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        rights: Schema.Array(Schema.Literals(["Manage", "Send", "Listen"])),
      }),
    ),
    location: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/eventhubs/{eventHubName}/authorizationRules/{authorizationRuleName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<EventHubsCreateOrUpdateAuthorizationRuleInput>;

// Output Schema
export interface EventHubsCreateOrUpdateAuthorizationRuleOutput {
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
export const EventHubsCreateOrUpdateAuthorizationRuleOutput =
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
  }) as unknown as Schema.Codec<EventHubsCreateOrUpdateAuthorizationRuleOutput>;

// The operation
/**
 * Creates or updates an AuthorizationRule for the specified Event Hub. Creation/update of the AuthorizationRule will take a few seconds to take effect.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The Namespace name
 * @param eventHubName - The Event Hub name
 * @param authorizationRuleName - The authorization rule name.
 */
export const EventHubsCreateOrUpdateAuthorizationRule =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: EventHubsCreateOrUpdateAuthorizationRuleInput,
    outputSchema: EventHubsCreateOrUpdateAuthorizationRuleOutput,
  }));
// Input Schema
export interface EventHubsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  eventHubName: string;
}
export const EventHubsDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  namespaceName: Schema.String.pipe(T.PathParam()),
  eventHubName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/eventhubs/{eventHubName}",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<EventHubsDeleteInput>;

// Output Schema
export type EventHubsDeleteOutput = void;
export const EventHubsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<EventHubsDeleteOutput>;

// The operation
/**
 * Deletes an Event Hub from the specified Namespace and resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The Namespace name
 * @param eventHubName - The Event Hub name
 */
export const EventHubsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: EventHubsDeleteInput,
  outputSchema: EventHubsDeleteOutput,
}));
// Input Schema
export interface EventHubsDeleteAuthorizationRuleInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  eventHubName: string;
  authorizationRuleName: string;
}
export const EventHubsDeleteAuthorizationRuleInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    eventHubName: Schema.String.pipe(T.PathParam()),
    authorizationRuleName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/eventhubs/{eventHubName}/authorizationRules/{authorizationRuleName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<EventHubsDeleteAuthorizationRuleInput>;

// Output Schema
export type EventHubsDeleteAuthorizationRuleOutput = void;
export const EventHubsDeleteAuthorizationRuleOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<EventHubsDeleteAuthorizationRuleOutput>;

// The operation
/**
 * Deletes an Event Hub AuthorizationRule.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The Namespace name
 * @param eventHubName - The Event Hub name
 * @param authorizationRuleName - The authorization rule name.
 */
export const EventHubsDeleteAuthorizationRule =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: EventHubsDeleteAuthorizationRuleInput,
    outputSchema: EventHubsDeleteAuthorizationRuleOutput,
  }));
// Input Schema
export interface EventHubsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  eventHubName: string;
}
export const EventHubsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  namespaceName: Schema.String.pipe(T.PathParam()),
  eventHubName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/eventhubs/{eventHubName}",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<EventHubsGetInput>;

// Output Schema
export interface EventHubsGetOutput {
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
export const EventHubsGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<EventHubsGetOutput>;

// The operation
/**
 * Gets an Event Hubs description for the specified Event Hub.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The Namespace name
 * @param eventHubName - The Event Hub name
 */
export const EventHubsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: EventHubsGetInput,
  outputSchema: EventHubsGetOutput,
}));
// Input Schema
export interface EventHubsGetAuthorizationRuleInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  eventHubName: string;
  authorizationRuleName: string;
}
export const EventHubsGetAuthorizationRuleInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    eventHubName: Schema.String.pipe(T.PathParam()),
    authorizationRuleName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/eventhubs/{eventHubName}/authorizationRules/{authorizationRuleName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<EventHubsGetAuthorizationRuleInput>;

// Output Schema
export interface EventHubsGetAuthorizationRuleOutput {
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
export const EventHubsGetAuthorizationRuleOutput =
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
  }) as unknown as Schema.Codec<EventHubsGetAuthorizationRuleOutput>;

// The operation
/**
 * Gets an AuthorizationRule for an Event Hub by rule name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The Namespace name
 * @param eventHubName - The Event Hub name
 * @param authorizationRuleName - The authorization rule name.
 */
export const EventHubsGetAuthorizationRule =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: EventHubsGetAuthorizationRuleInput,
    outputSchema: EventHubsGetAuthorizationRuleOutput,
  }));
// Input Schema
export interface EventHubsListAuthorizationRulesInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  eventHubName: string;
}
export const EventHubsListAuthorizationRulesInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    eventHubName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/eventhubs/{eventHubName}/authorizationRules",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<EventHubsListAuthorizationRulesInput>;

// Output Schema
export interface EventHubsListAuthorizationRulesOutput {
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
export const EventHubsListAuthorizationRulesOutput =
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
  }) as unknown as Schema.Codec<EventHubsListAuthorizationRulesOutput>;

// The operation
/**
 * Gets the authorization rules for an Event Hub.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The Namespace name
 * @param eventHubName - The Event Hub name
 */
export const EventHubsListAuthorizationRules =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: EventHubsListAuthorizationRulesInput,
    outputSchema: EventHubsListAuthorizationRulesOutput,
  }));
// Input Schema
export interface EventHubsListByNamespaceInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  $skip?: number;
  $top?: number;
}
export const EventHubsListByNamespaceInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    $skip: Schema.optional(Schema.Number),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/eventhubs",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<EventHubsListByNamespaceInput>;

// Output Schema
export interface EventHubsListByNamespaceOutput {
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
export const EventHubsListByNamespaceOutput =
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
  }) as unknown as Schema.Codec<EventHubsListByNamespaceOutput>;

// The operation
/**
 * Gets all the Event Hubs in a Namespace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The Namespace name
 * @param $skip - Skip is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skip parameter that specifies a starting point to use for subsequent calls.
 * @param $top - May be used to limit the number of results to the most recent N usageDetails.
 */
export const EventHubsListByNamespace = /*@__PURE__*/ API.make(() => ({
  inputSchema: EventHubsListByNamespaceInput,
  outputSchema: EventHubsListByNamespaceOutput,
}));
// Input Schema
export interface EventHubsListKeysInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  eventHubName: string;
  authorizationRuleName: string;
}
export const EventHubsListKeysInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  namespaceName: Schema.String.pipe(T.PathParam()),
  eventHubName: Schema.String.pipe(T.PathParam()),
  authorizationRuleName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/eventhubs/{eventHubName}/authorizationRules/{authorizationRuleName}/listKeys",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<EventHubsListKeysInput>;

// Output Schema
export interface EventHubsListKeysOutput {
  primaryConnectionString?: string;
  secondaryConnectionString?: string;
  aliasPrimaryConnectionString?: string;
  aliasSecondaryConnectionString?: string;
  primaryKey?: string;
  secondaryKey?: string;
  keyName?: string;
}
export const EventHubsListKeysOutput =
  /*@__PURE__*/ Schema.Struct({
    primaryConnectionString: Schema.optional(Schema.String),
    secondaryConnectionString: Schema.optional(Schema.String),
    aliasPrimaryConnectionString: Schema.optional(Schema.String),
    aliasSecondaryConnectionString: Schema.optional(Schema.String),
    primaryKey: Schema.optional(Schema.String),
    secondaryKey: Schema.optional(Schema.String),
    keyName: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<EventHubsListKeysOutput>;

// The operation
/**
 * Gets the ACS and SAS connection strings for the Event Hub.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The Namespace name
 * @param eventHubName - The Event Hub name
 * @param authorizationRuleName - The authorization rule name.
 */
export const EventHubsListKeys = /*@__PURE__*/ API.make(() => ({
  inputSchema: EventHubsListKeysInput,
  outputSchema: EventHubsListKeysOutput,
}));
// Input Schema
export interface EventHubsRegenerateKeysInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  eventHubName: string;
  authorizationRuleName: string;
  keyType: "PrimaryKey" | "SecondaryKey";
  key?: string;
}
export const EventHubsRegenerateKeysInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    eventHubName: Schema.String.pipe(T.PathParam()),
    authorizationRuleName: Schema.String.pipe(T.PathParam()),
    keyType: Schema.Literals(["PrimaryKey", "SecondaryKey"]),
    key: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/eventhubs/{eventHubName}/authorizationRules/{authorizationRuleName}/regenerateKeys",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<EventHubsRegenerateKeysInput>;

// Output Schema
export interface EventHubsRegenerateKeysOutput {
  primaryConnectionString?: string;
  secondaryConnectionString?: string;
  aliasPrimaryConnectionString?: string;
  aliasSecondaryConnectionString?: string;
  primaryKey?: string;
  secondaryKey?: string;
  keyName?: string;
}
export const EventHubsRegenerateKeysOutput =
  /*@__PURE__*/ Schema.Struct({
    primaryConnectionString: Schema.optional(Schema.String),
    secondaryConnectionString: Schema.optional(Schema.String),
    aliasPrimaryConnectionString: Schema.optional(Schema.String),
    aliasSecondaryConnectionString: Schema.optional(Schema.String),
    primaryKey: Schema.optional(Schema.String),
    secondaryKey: Schema.optional(Schema.String),
    keyName: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<EventHubsRegenerateKeysOutput>;

// The operation
/**
 * Regenerates the ACS and SAS connection strings for the Event Hub.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The Namespace name
 * @param eventHubName - The Event Hub name
 * @param authorizationRuleName - The authorization rule name.
 */
export const EventHubsRegenerateKeys = /*@__PURE__*/ API.make(() => ({
  inputSchema: EventHubsRegenerateKeysInput,
  outputSchema: EventHubsRegenerateKeysOutput,
}));
// Input Schema
export interface NamespacesCheckNameAvailabilityInput {
  subscriptionId: string;
  name: string;
}
export const NamespacesCheckNameAvailabilityInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.EventHub/checkNameAvailability",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<NamespacesCheckNameAvailabilityInput>;

// Output Schema
export interface NamespacesCheckNameAvailabilityOutput {
  message?: string;
  nameAvailable?: boolean;
  reason?:
    | "None"
    | "InvalidName"
    | "SubscriptionIsDisabled"
    | "NameInUse"
    | "NameInLockdown"
    | "TooManyNamespaceInCurrentSubscription";
}
export const NamespacesCheckNameAvailabilityOutput =
  /*@__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(
      Schema.Literals([
        "None",
        "InvalidName",
        "SubscriptionIsDisabled",
        "NameInUse",
        "NameInLockdown",
        "TooManyNamespaceInCurrentSubscription",
      ]),
    ),
  }) as unknown as Schema.Codec<NamespacesCheckNameAvailabilityOutput>;

// The operation
/**
 * Check the give Namespace name availability.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const NamespacesCheckNameAvailability =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NamespacesCheckNameAvailabilityInput,
    outputSchema: NamespacesCheckNameAvailabilityOutput,
  }));
// Input Schema
export interface NamespacesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  properties?: {
    minimumTlsVersion?: "1.0" | "1.1" | "1.2" | "1.3";
    provisioningState?: string;
    status?: string;
    createdAt?: string;
    updatedAt?: string;
    serviceBusEndpoint?: string;
    clusterArmId?: string;
    metricId?: string;
    isAutoInflateEnabled?: boolean;
    publicNetworkAccess?: "Enabled" | "Disabled" | "SecuredByPerimeter";
    maximumThroughputUnits?: number;
    kafkaEnabled?: boolean;
    zoneRedundant?: boolean;
    encryption?: {
      keyVaultProperties?: {
        keyName?: string;
        keyVaultUri?: string;
        keyVersion?: string;
        identity?: { userAssignedIdentity?: string };
      }[];
      keySource?: "Microsoft.KeyVault";
      requireInfrastructureEncryption?: boolean;
    };
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
    disableLocalAuth?: boolean;
    alternateName?: string;
    platformCapabilities?: {
      confidentialCompute?: { mode?: "Disabled" | "Enabled" };
    };
    geoDataReplication?: {
      maxReplicationLagDurationInSeconds?: number;
      locations?: {
        locationName?: string;
        roleType?: "Primary" | "Secondary";
        replicaState?: string;
        clusterArmId?: string;
      }[];
    };
    ipAddressType?: "IPv4" | "DualStack";
  };
  sku?: {
    name: "Basic" | "Standard" | "Premium";
    tier?: "Basic" | "Standard" | "Premium";
    capacity?: number;
  };
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
  location?: string;
  tags?: Record<string, string>;
}
export const NamespacesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        minimumTlsVersion: Schema.optional(
          Schema.Literals(["1.0", "1.1", "1.2", "1.3"]),
        ),
        provisioningState: Schema.optional(Schema.String),
        status: Schema.optional(Schema.String),
        createdAt: Schema.optional(Schema.String),
        updatedAt: Schema.optional(Schema.String),
        serviceBusEndpoint: Schema.optional(Schema.String),
        clusterArmId: Schema.optional(Schema.String),
        metricId: Schema.optional(Schema.String),
        isAutoInflateEnabled: Schema.optional(Schema.Boolean),
        publicNetworkAccess: Schema.optional(
          Schema.Literals(["Enabled", "Disabled", "SecuredByPerimeter"]),
        ),
        maximumThroughputUnits: Schema.optional(Schema.Number),
        kafkaEnabled: Schema.optional(Schema.Boolean),
        zoneRedundant: Schema.optional(Schema.Boolean),
        encryption: Schema.optional(
          Schema.Struct({
            keyVaultProperties: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  keyName: Schema.optional(Schema.String),
                  keyVaultUri: Schema.optional(Schema.String),
                  keyVersion: Schema.optional(Schema.String),
                  identity: Schema.optional(
                    Schema.Struct({
                      userAssignedIdentity: Schema.optional(Schema.String),
                    }),
                  ),
                }),
              ),
            ),
            keySource: Schema.optional(Schema.Literals(["Microsoft.KeyVault"])),
            requireInfrastructureEncryption: Schema.optional(Schema.Boolean),
          }),
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
        disableLocalAuth: Schema.optional(Schema.Boolean),
        alternateName: Schema.optional(Schema.String),
        platformCapabilities: Schema.optional(
          Schema.Struct({
            confidentialCompute: Schema.optional(
              Schema.Struct({
                mode: Schema.optional(Schema.Literals(["Disabled", "Enabled"])),
              }),
            ),
          }),
        ),
        geoDataReplication: Schema.optional(
          Schema.Struct({
            maxReplicationLagDurationInSeconds: Schema.optional(Schema.Number),
            locations: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  locationName: Schema.optional(Schema.String),
                  roleType: Schema.optional(
                    Schema.Literals(["Primary", "Secondary"]),
                  ),
                  replicaState: Schema.optional(Schema.String),
                  clusterArmId: Schema.optional(Schema.String),
                }),
              ),
            ),
          }),
        ),
        ipAddressType: Schema.optional(Schema.Literals(["IPv4", "DualStack"])),
      }),
    ),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.Literals(["Basic", "Standard", "Premium"]),
        tier: Schema.optional(
          Schema.Literals(["Basic", "Standard", "Premium"]),
        ),
        capacity: Schema.optional(Schema.Number),
      }),
    ),
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
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<NamespacesCreateOrUpdateInput>;

// Output Schema
export interface NamespacesCreateOrUpdateOutput {
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
export const NamespacesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<NamespacesCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a namespace. Once created, this namespace's resource manifest is immutable. This operation is idempotent.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The Namespace name
 */
export const NamespacesCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: NamespacesCreateOrUpdateInput,
  outputSchema: NamespacesCreateOrUpdateOutput,
}));
// Input Schema
export interface NamespacesCreateOrUpdateAuthorizationRuleInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  authorizationRuleName: string;
  properties?: { rights: ("Manage" | "Send" | "Listen")[] };
  location?: string;
}
export const NamespacesCreateOrUpdateAuthorizationRuleInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    authorizationRuleName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        rights: Schema.Array(Schema.Literals(["Manage", "Send", "Listen"])),
      }),
    ),
    location: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/authorizationRules/{authorizationRuleName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<NamespacesCreateOrUpdateAuthorizationRuleInput>;

// Output Schema
export interface NamespacesCreateOrUpdateAuthorizationRuleOutput {
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
export const NamespacesCreateOrUpdateAuthorizationRuleOutput =
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
  }) as unknown as Schema.Codec<NamespacesCreateOrUpdateAuthorizationRuleOutput>;

// The operation
/**
 * Creates or updates an AuthorizationRule for a Namespace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The Namespace name
 * @param authorizationRuleName - The authorization rule name.
 */
export const NamespacesCreateOrUpdateAuthorizationRule =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NamespacesCreateOrUpdateAuthorizationRuleInput,
    outputSchema: NamespacesCreateOrUpdateAuthorizationRuleOutput,
  }));
// Input Schema
export interface NamespacesCreateOrUpdateNetworkRuleSetInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  properties?: {
    trustedServiceAccessEnabled?: boolean;
    defaultAction?: "Allow" | "Deny";
    virtualNetworkRules?: {
      subnet?: { id?: string };
      ignoreMissingVnetServiceEndpoint?: boolean;
    }[];
    ipRules?: { ipMask?: string; action?: "Allow" }[];
    publicNetworkAccess?: "Enabled" | "Disabled" | "SecuredByPerimeter";
  };
  location?: string;
}
export const NamespacesCreateOrUpdateNetworkRuleSetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        trustedServiceAccessEnabled: Schema.optional(Schema.Boolean),
        defaultAction: Schema.optional(Schema.Literals(["Allow", "Deny"])),
        virtualNetworkRules: Schema.optional(
          Schema.Array(
            Schema.Struct({
              subnet: Schema.optional(
                Schema.Struct({
                  id: Schema.optional(Schema.String),
                }),
              ),
              ignoreMissingVnetServiceEndpoint: Schema.optional(Schema.Boolean),
            }),
          ),
        ),
        ipRules: Schema.optional(
          Schema.Array(
            Schema.Struct({
              ipMask: Schema.optional(Schema.String),
              action: Schema.optional(Schema.Literals(["Allow"])),
            }),
          ),
        ),
        publicNetworkAccess: Schema.optional(
          Schema.Literals(["Enabled", "Disabled", "SecuredByPerimeter"]),
        ),
      }),
    ),
    location: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/networkRuleSets/default",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<NamespacesCreateOrUpdateNetworkRuleSetInput>;

// Output Schema
export interface NamespacesCreateOrUpdateNetworkRuleSetOutput {
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
export const NamespacesCreateOrUpdateNetworkRuleSetOutput =
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
  }) as unknown as Schema.Codec<NamespacesCreateOrUpdateNetworkRuleSetOutput>;

// The operation
/**
 * Create or update NetworkRuleSet for a Namespace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The Namespace name
 */
export const NamespacesCreateOrUpdateNetworkRuleSet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NamespacesCreateOrUpdateNetworkRuleSetInput,
    outputSchema: NamespacesCreateOrUpdateNetworkRuleSetOutput,
  }));
// Input Schema
export interface NamespacesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
}
export const NamespacesDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  namespaceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<NamespacesDeleteInput>;

// Output Schema
export type NamespacesDeleteOutput = void;
export const NamespacesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<NamespacesDeleteOutput>;

// The operation
/**
 * Deletes an existing namespace. This operation also removes all associated resources under the namespace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The Namespace name
 */
export const NamespacesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: NamespacesDeleteInput,
  outputSchema: NamespacesDeleteOutput,
}));
// Input Schema
export interface NamespacesDeleteAuthorizationRuleInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  authorizationRuleName: string;
}
export const NamespacesDeleteAuthorizationRuleInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    authorizationRuleName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/authorizationRules/{authorizationRuleName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<NamespacesDeleteAuthorizationRuleInput>;

// Output Schema
export type NamespacesDeleteAuthorizationRuleOutput = void;
export const NamespacesDeleteAuthorizationRuleOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<NamespacesDeleteAuthorizationRuleOutput>;

// The operation
/**
 * Deletes an AuthorizationRule for a Namespace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The Namespace name
 * @param authorizationRuleName - The authorization rule name.
 */
export const NamespacesDeleteAuthorizationRule =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NamespacesDeleteAuthorizationRuleInput,
    outputSchema: NamespacesDeleteAuthorizationRuleOutput,
  }));
// Input Schema
export interface NamespacesFailoverInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  properties?: { primaryLocation?: string; force?: boolean };
}
export const NamespacesFailoverInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        primaryLocation: Schema.optional(Schema.String),
        force: Schema.optional(Schema.Boolean),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/failover",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<NamespacesFailoverInput>;

// Output Schema
export type NamespacesFailoverOutput = void;
export const NamespacesFailoverOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<NamespacesFailoverOutput>;

// The operation
/**
 * GeoDR Failover
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The Namespace name
 */
export const NamespacesFailover = /*@__PURE__*/ API.make(() => ({
  inputSchema: NamespacesFailoverInput,
  outputSchema: NamespacesFailoverOutput,
}));
// Input Schema
export interface NamespacesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
}
export const NamespacesGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  namespaceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<NamespacesGetInput>;

// Output Schema
export interface NamespacesGetOutput {
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
export const NamespacesGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<NamespacesGetOutput>;

// The operation
/**
 * Gets the description of the specified namespace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The Namespace name
 */
export const NamespacesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: NamespacesGetInput,
  outputSchema: NamespacesGetOutput,
}));
// Input Schema
export interface NamespacesGetAuthorizationRuleInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  authorizationRuleName: string;
}
export const NamespacesGetAuthorizationRuleInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    authorizationRuleName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/authorizationRules/{authorizationRuleName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<NamespacesGetAuthorizationRuleInput>;

// Output Schema
export interface NamespacesGetAuthorizationRuleOutput {
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
export const NamespacesGetAuthorizationRuleOutput =
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
  }) as unknown as Schema.Codec<NamespacesGetAuthorizationRuleOutput>;

// The operation
/**
 * Gets an AuthorizationRule for a Namespace by rule name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The Namespace name
 * @param authorizationRuleName - The authorization rule name.
 */
export const NamespacesGetAuthorizationRule =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NamespacesGetAuthorizationRuleInput,
    outputSchema: NamespacesGetAuthorizationRuleOutput,
  }));
// Input Schema
export interface NamespacesGetNetworkRuleSetInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
}
export const NamespacesGetNetworkRuleSetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/networkRuleSets/default",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<NamespacesGetNetworkRuleSetInput>;

// Output Schema
export interface NamespacesGetNetworkRuleSetOutput {
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
export const NamespacesGetNetworkRuleSetOutput =
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
  }) as unknown as Schema.Codec<NamespacesGetNetworkRuleSetOutput>;

// The operation
/**
 * Gets NetworkRuleSet for a Namespace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The Namespace name
 */
export const NamespacesGetNetworkRuleSet = /*@__PURE__*/ API.make(() => ({
  inputSchema: NamespacesGetNetworkRuleSetInput,
  outputSchema: NamespacesGetNetworkRuleSetOutput,
}));
// Input Schema
export interface NamespacesListInput {
  subscriptionId: string;
}
export const NamespacesListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.EventHub/namespaces",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<NamespacesListInput>;

// Output Schema
export interface NamespacesListOutput {
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
export const NamespacesListOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<NamespacesListOutput>;

// The operation
/**
 * Lists all the available Namespaces within a subscription, irrespective of the resource groups.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const NamespacesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: NamespacesListInput,
  outputSchema: NamespacesListOutput,
}));
// Input Schema
export interface NamespacesListAuthorizationRulesInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
}
export const NamespacesListAuthorizationRulesInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/authorizationRules",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<NamespacesListAuthorizationRulesInput>;

// Output Schema
export interface NamespacesListAuthorizationRulesOutput {
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
export const NamespacesListAuthorizationRulesOutput =
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
  }) as unknown as Schema.Codec<NamespacesListAuthorizationRulesOutput>;

// The operation
/**
 * Gets a list of authorization rules for a Namespace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The Namespace name
 */
export const NamespacesListAuthorizationRules =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NamespacesListAuthorizationRulesInput,
    outputSchema: NamespacesListAuthorizationRulesOutput,
  }));
// Input Schema
export interface NamespacesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const NamespacesListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<NamespacesListByResourceGroupInput>;

// Output Schema
export interface NamespacesListByResourceGroupOutput {
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
export const NamespacesListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<NamespacesListByResourceGroupOutput>;

// The operation
/**
 * Lists the available Namespaces within a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const NamespacesListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NamespacesListByResourceGroupInput,
    outputSchema: NamespacesListByResourceGroupOutput,
  }));
// Input Schema
export interface NamespacesListKeysInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  authorizationRuleName: string;
}
export const NamespacesListKeysInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    authorizationRuleName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/authorizationRules/{authorizationRuleName}/listKeys",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<NamespacesListKeysInput>;

// Output Schema
export interface NamespacesListKeysOutput {
  primaryConnectionString?: string;
  secondaryConnectionString?: string;
  aliasPrimaryConnectionString?: string;
  aliasSecondaryConnectionString?: string;
  primaryKey?: string;
  secondaryKey?: string;
  keyName?: string;
}
export const NamespacesListKeysOutput =
  /*@__PURE__*/ Schema.Struct({
    primaryConnectionString: Schema.optional(Schema.String),
    secondaryConnectionString: Schema.optional(Schema.String),
    aliasPrimaryConnectionString: Schema.optional(Schema.String),
    aliasSecondaryConnectionString: Schema.optional(Schema.String),
    primaryKey: Schema.optional(Schema.String),
    secondaryKey: Schema.optional(Schema.String),
    keyName: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<NamespacesListKeysOutput>;

// The operation
/**
 * Gets the primary and secondary connection strings for the Namespace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The Namespace name
 * @param authorizationRuleName - The authorization rule name.
 */
export const NamespacesListKeys = /*@__PURE__*/ API.make(() => ({
  inputSchema: NamespacesListKeysInput,
  outputSchema: NamespacesListKeysOutput,
}));
// Input Schema
export interface NamespacesListNetworkRuleSetInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
}
export const NamespacesListNetworkRuleSetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/networkRuleSets",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<NamespacesListNetworkRuleSetInput>;

// Output Schema
export interface NamespacesListNetworkRuleSetOutput {
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
export const NamespacesListNetworkRuleSetOutput =
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
  }) as unknown as Schema.Codec<NamespacesListNetworkRuleSetOutput>;

// The operation
/**
 * Gets NetworkRuleSet for a Namespace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The Namespace name
 */
export const NamespacesListNetworkRuleSet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NamespacesListNetworkRuleSetInput,
    outputSchema: NamespacesListNetworkRuleSetOutput,
  }));
// Input Schema
export interface NamespacesRegenerateKeysInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  authorizationRuleName: string;
  keyType: "PrimaryKey" | "SecondaryKey";
  key?: string;
}
export const NamespacesRegenerateKeysInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    authorizationRuleName: Schema.String.pipe(T.PathParam()),
    keyType: Schema.Literals(["PrimaryKey", "SecondaryKey"]),
    key: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/authorizationRules/{authorizationRuleName}/regenerateKeys",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<NamespacesRegenerateKeysInput>;

// Output Schema
export interface NamespacesRegenerateKeysOutput {
  primaryConnectionString?: string;
  secondaryConnectionString?: string;
  aliasPrimaryConnectionString?: string;
  aliasSecondaryConnectionString?: string;
  primaryKey?: string;
  secondaryKey?: string;
  keyName?: string;
}
export const NamespacesRegenerateKeysOutput =
  /*@__PURE__*/ Schema.Struct({
    primaryConnectionString: Schema.optional(Schema.String),
    secondaryConnectionString: Schema.optional(Schema.String),
    aliasPrimaryConnectionString: Schema.optional(Schema.String),
    aliasSecondaryConnectionString: Schema.optional(Schema.String),
    primaryKey: Schema.optional(Schema.String),
    secondaryKey: Schema.optional(Schema.String),
    keyName: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<NamespacesRegenerateKeysOutput>;

// The operation
/**
 * Regenerates the primary or secondary connection strings for the specified Namespace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The Namespace name
 * @param authorizationRuleName - The authorization rule name.
 */
export const NamespacesRegenerateKeys = /*@__PURE__*/ API.make(() => ({
  inputSchema: NamespacesRegenerateKeysInput,
  outputSchema: NamespacesRegenerateKeysOutput,
}));
// Input Schema
export interface NamespacesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  properties?: {
    minimumTlsVersion?: "1.0" | "1.1" | "1.2" | "1.3";
    provisioningState?: string;
    status?: string;
    createdAt?: string;
    updatedAt?: string;
    serviceBusEndpoint?: string;
    clusterArmId?: string;
    metricId?: string;
    isAutoInflateEnabled?: boolean;
    publicNetworkAccess?: "Enabled" | "Disabled" | "SecuredByPerimeter";
    maximumThroughputUnits?: number;
    kafkaEnabled?: boolean;
    zoneRedundant?: boolean;
    encryption?: {
      keyVaultProperties?: {
        keyName?: string;
        keyVaultUri?: string;
        keyVersion?: string;
        identity?: { userAssignedIdentity?: string };
      }[];
      keySource?: "Microsoft.KeyVault";
      requireInfrastructureEncryption?: boolean;
    };
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
    disableLocalAuth?: boolean;
    alternateName?: string;
    platformCapabilities?: {
      confidentialCompute?: { mode?: "Disabled" | "Enabled" };
    };
    geoDataReplication?: {
      maxReplicationLagDurationInSeconds?: number;
      locations?: {
        locationName?: string;
        roleType?: "Primary" | "Secondary";
        replicaState?: string;
        clusterArmId?: string;
      }[];
    };
    ipAddressType?: "IPv4" | "DualStack";
  };
  sku?: {
    name: "Basic" | "Standard" | "Premium";
    tier?: "Basic" | "Standard" | "Premium";
    capacity?: number;
  };
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
  location?: string;
  tags?: Record<string, string>;
}
export const NamespacesUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  namespaceName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      minimumTlsVersion: Schema.optional(
        Schema.Literals(["1.0", "1.1", "1.2", "1.3"]),
      ),
      provisioningState: Schema.optional(Schema.String),
      status: Schema.optional(Schema.String),
      createdAt: Schema.optional(Schema.String),
      updatedAt: Schema.optional(Schema.String),
      serviceBusEndpoint: Schema.optional(Schema.String),
      clusterArmId: Schema.optional(Schema.String),
      metricId: Schema.optional(Schema.String),
      isAutoInflateEnabled: Schema.optional(Schema.Boolean),
      publicNetworkAccess: Schema.optional(
        Schema.Literals(["Enabled", "Disabled", "SecuredByPerimeter"]),
      ),
      maximumThroughputUnits: Schema.optional(Schema.Number),
      kafkaEnabled: Schema.optional(Schema.Boolean),
      zoneRedundant: Schema.optional(Schema.Boolean),
      encryption: Schema.optional(
        Schema.Struct({
          keyVaultProperties: Schema.optional(
            Schema.Array(
              Schema.Struct({
                keyName: Schema.optional(Schema.String),
                keyVaultUri: Schema.optional(Schema.String),
                keyVersion: Schema.optional(Schema.String),
                identity: Schema.optional(
                  Schema.Struct({
                    userAssignedIdentity: Schema.optional(Schema.String),
                  }),
                ),
              }),
            ),
          ),
          keySource: Schema.optional(Schema.Literals(["Microsoft.KeyVault"])),
          requireInfrastructureEncryption: Schema.optional(Schema.Boolean),
        }),
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
      disableLocalAuth: Schema.optional(Schema.Boolean),
      alternateName: Schema.optional(Schema.String),
      platformCapabilities: Schema.optional(
        Schema.Struct({
          confidentialCompute: Schema.optional(
            Schema.Struct({
              mode: Schema.optional(Schema.Literals(["Disabled", "Enabled"])),
            }),
          ),
        }),
      ),
      geoDataReplication: Schema.optional(
        Schema.Struct({
          maxReplicationLagDurationInSeconds: Schema.optional(Schema.Number),
          locations: Schema.optional(
            Schema.Array(
              Schema.Struct({
                locationName: Schema.optional(Schema.String),
                roleType: Schema.optional(
                  Schema.Literals(["Primary", "Secondary"]),
                ),
                replicaState: Schema.optional(Schema.String),
                clusterArmId: Schema.optional(Schema.String),
              }),
            ),
          ),
        }),
      ),
      ipAddressType: Schema.optional(Schema.Literals(["IPv4", "DualStack"])),
    }),
  ),
  sku: Schema.optional(
    Schema.Struct({
      name: Schema.Literals(["Basic", "Standard", "Premium"]),
      tier: Schema.optional(Schema.Literals(["Basic", "Standard", "Premium"])),
      capacity: Schema.optional(Schema.Number),
    }),
  ),
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
  location: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<NamespacesUpdateInput>;

// Output Schema
export interface NamespacesUpdateOutput {
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
export const NamespacesUpdateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<NamespacesUpdateOutput>;

// The operation
/**
 * Creates or updates a namespace. Once created, this namespace's resource manifest is immutable. This operation is idempotent.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The Namespace name
 */
export const NamespacesUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: NamespacesUpdateInput,
  outputSchema: NamespacesUpdateOutput,
}));
// Input Schema
export interface NetworkSecurityPerimeterConfigurationListInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
}
export const NetworkSecurityPerimeterConfigurationListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/networkSecurityPerimeterConfigurations",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<NetworkSecurityPerimeterConfigurationListInput>;

// Output Schema
export interface NetworkSecurityPerimeterConfigurationListOutput {
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
}
export const NetworkSecurityPerimeterConfigurationListOutput =
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
  }) as unknown as Schema.Codec<NetworkSecurityPerimeterConfigurationListOutput>;

// The operation
/**
 * Gets list of current NetworkSecurityPerimeterConfiguration for Namespace
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The Namespace name
 */
export const NetworkSecurityPerimeterConfigurationList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkSecurityPerimeterConfigurationListInput,
    outputSchema: NetworkSecurityPerimeterConfigurationListOutput,
  }));
// Input Schema
export interface NetworkSecurityPerimeterConfigurationsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  resourceAssociationName: string;
}
export const NetworkSecurityPerimeterConfigurationsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    resourceAssociationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/networkSecurityPerimeterConfigurations/{resourceAssociationName}/reconcile",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<NetworkSecurityPerimeterConfigurationsCreateOrUpdateInput>;

// Output Schema
export type NetworkSecurityPerimeterConfigurationsCreateOrUpdateOutput = void;
export const NetworkSecurityPerimeterConfigurationsCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<NetworkSecurityPerimeterConfigurationsCreateOrUpdateOutput>;

// The operation
/**
 * Refreshes any information about the association.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The Namespace name
 * @param resourceAssociationName - The ResourceAssociation Name
 */
export const NetworkSecurityPerimeterConfigurationsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkSecurityPerimeterConfigurationsCreateOrUpdateInput,
    outputSchema: NetworkSecurityPerimeterConfigurationsCreateOrUpdateOutput,
  }));
// Input Schema
export interface NetworkSecurityPerimeterConfigurationsGetResourceAssociationNameInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  resourceAssociationName: string;
}
export const NetworkSecurityPerimeterConfigurationsGetResourceAssociationNameInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    resourceAssociationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/networkSecurityPerimeterConfigurations/{resourceAssociationName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<NetworkSecurityPerimeterConfigurationsGetResourceAssociationNameInput>;

// Output Schema
export interface NetworkSecurityPerimeterConfigurationsGetResourceAssociationNameOutput {
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
export const NetworkSecurityPerimeterConfigurationsGetResourceAssociationNameOutput =
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
  }) as unknown as Schema.Codec<NetworkSecurityPerimeterConfigurationsGetResourceAssociationNameOutput>;

// The operation
/**
 * Return a NetworkSecurityPerimeterConfigurations resourceAssociationName
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The Namespace name
 * @param resourceAssociationName - The ResourceAssociation Name
 */
export const NetworkSecurityPerimeterConfigurationsGetResourceAssociationName =
  /*@__PURE__*/ API.make(() => ({
    inputSchema:
      NetworkSecurityPerimeterConfigurationsGetResourceAssociationNameInput,
    outputSchema:
      NetworkSecurityPerimeterConfigurationsGetResourceAssociationNameOutput,
  }));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.EventHub/operations",
    apiVersion: "2026-01-01",
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
    properties?: unknown;
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
      properties: Schema.optional(Schema.Unknown),
    }),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<OperationsListOutput>;

// The operation
/**
 * Lists all of the available Event Hub REST API operations.
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
  namespaceName: string;
  privateEndpointConnectionName: string;
  properties?: {
    privateEndpoint?: { id?: string };
    privateLinkServiceConnectionState?: {
      status?: "Pending" | "Approved" | "Rejected" | "Disconnected";
      description?: string;
    };
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Succeeded"
      | "Canceled"
      | "Failed";
  };
  location?: string;
}
export const PrivateEndpointConnectionsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
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
                "Pending",
                "Approved",
                "Rejected",
                "Disconnected",
              ]),
            ),
            description: Schema.optional(Schema.String),
          }),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Deleting",
            "Succeeded",
            "Canceled",
            "Failed",
          ]),
        ),
      }),
    ),
    location: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2026-01-01",
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
 * Creates or updates PrivateEndpointConnections of service namespace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The Namespace name
 * @param privateEndpointConnectionName - The PrivateEndpointConnection name
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
  namespaceName: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsDeleteInput>;

// Output Schema
export type PrivateEndpointConnectionsDeleteOutput = void;
export const PrivateEndpointConnectionsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<PrivateEndpointConnectionsDeleteOutput>;

// The operation
/**
 * Deletes an existing namespace. This operation also removes all associated resources under the namespace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The Namespace name
 * @param privateEndpointConnectionName - The PrivateEndpointConnection name
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
  namespaceName: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2026-01-01",
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
 * Gets a description for the specified Private Endpoint Connection name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The Namespace name
 * @param privateEndpointConnectionName - The PrivateEndpointConnection name
 */
export const PrivateEndpointConnectionsGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsGetInput,
    outputSchema: PrivateEndpointConnectionsGetOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
}
export const PrivateEndpointConnectionsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/privateEndpointConnections",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsListInput>;

// Output Schema
export interface PrivateEndpointConnectionsListOutput {
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
export const PrivateEndpointConnectionsListOutput =
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
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsListOutput>;

// The operation
/**
 * Gets the available PrivateEndpointConnections within a namespace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The Namespace name
 */
export const PrivateEndpointConnectionsList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsListInput,
    outputSchema: PrivateEndpointConnectionsListOutput,
  }));
// Input Schema
export interface PrivateLinkResourcesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
}
export const PrivateLinkResourcesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/privateLinkResources",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<PrivateLinkResourcesGetInput>;

// Output Schema
export interface PrivateLinkResourcesGetOutput {
  value: {
    properties?: {
      groupId?: string;
      requiredMembers?: string[];
      requiredZoneNames?: string[];
    };
    id?: string;
    name?: string;
    type?: string;
  }[];
  nextLink?: string;
}
export const PrivateLinkResourcesGetOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        properties: Schema.optional(
          Schema.Struct({
            groupId: Schema.optional(Schema.String),
            requiredMembers: Schema.optional(Schema.Array(Schema.String)),
            requiredZoneNames: Schema.optional(Schema.Array(Schema.String)),
          }),
        ),
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PrivateLinkResourcesGetOutput>;

// The operation
/**
 * Gets lists of resources that supports Privatelinks.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The Namespace name
 */
export const PrivateLinkResourcesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: PrivateLinkResourcesGetInput,
  outputSchema: PrivateLinkResourcesGetOutput,
}));
// Input Schema
export interface SchemaRegistryCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  schemaGroupName: string;
  properties?: {
    updatedAtUtc?: string;
    createdAtUtc?: string;
    eTag?: string;
    groupProperties?: Record<string, string>;
    schemaCompatibility?: "None" | "Backward" | "Forward";
    schemaType?: "Unknown" | "Avro" | "ProtoBuf" | "Json";
  };
  location?: string;
}
export const SchemaRegistryCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    schemaGroupName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        updatedAtUtc: Schema.optional(Schema.String),
        createdAtUtc: Schema.optional(Schema.String),
        eTag: Schema.optional(Schema.String),
        groupProperties: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        schemaCompatibility: Schema.optional(
          Schema.Literals(["None", "Backward", "Forward"]),
        ),
        schemaType: Schema.optional(
          Schema.Literals(["Unknown", "Avro", "ProtoBuf", "Json"]),
        ),
      }),
    ),
    location: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/schemagroups/{schemaGroupName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<SchemaRegistryCreateOrUpdateInput>;

// Output Schema
export interface SchemaRegistryCreateOrUpdateOutput {
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
export const SchemaRegistryCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<SchemaRegistryCreateOrUpdateOutput>;

// The operation
/**
 * Creates or Updates an EventHub schema group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The Namespace name
 * @param schemaGroupName - The Schema Group name
 */
export const SchemaRegistryCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SchemaRegistryCreateOrUpdateInput,
    outputSchema: SchemaRegistryCreateOrUpdateOutput,
  }));
// Input Schema
export interface SchemaRegistryDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  schemaGroupName: string;
}
export const SchemaRegistryDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    schemaGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/schemagroups/{schemaGroupName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<SchemaRegistryDeleteInput>;

// Output Schema
export type SchemaRegistryDeleteOutput = void;
export const SchemaRegistryDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<SchemaRegistryDeleteOutput>;

// The operation
/**
 * Deletes an EventHub schema group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The Namespace name
 * @param schemaGroupName - The Schema Group name
 */
export const SchemaRegistryDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: SchemaRegistryDeleteInput,
  outputSchema: SchemaRegistryDeleteOutput,
}));
// Input Schema
export interface SchemaRegistryGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  schemaGroupName: string;
}
export const SchemaRegistryGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  namespaceName: Schema.String.pipe(T.PathParam()),
  schemaGroupName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/schemagroups/{schemaGroupName}",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<SchemaRegistryGetInput>;

// Output Schema
export interface SchemaRegistryGetOutput {
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
export const SchemaRegistryGetOutput =
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
  }) as unknown as Schema.Codec<SchemaRegistryGetOutput>;

// The operation
/**
 * Gets the details of an EventHub schema group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The Namespace name
 * @param schemaGroupName - The Schema Group name
 */
export const SchemaRegistryGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: SchemaRegistryGetInput,
  outputSchema: SchemaRegistryGetOutput,
}));
// Input Schema
export interface SchemaRegistryListByNamespaceInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  $skip?: number;
  $top?: number;
}
export const SchemaRegistryListByNamespaceInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    $skip: Schema.optional(Schema.Number),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/schemagroups",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<SchemaRegistryListByNamespaceInput>;

// Output Schema
export interface SchemaRegistryListByNamespaceOutput {
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
export const SchemaRegistryListByNamespaceOutput =
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
  }) as unknown as Schema.Codec<SchemaRegistryListByNamespaceOutput>;

// The operation
/**
 * Gets all the Schema Groups in a Namespace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param namespaceName - The Namespace name
 * @param $skip - Skip is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skip parameter that specifies a starting point to use for subsequent calls.
 * @param $top - May be used to limit the number of results to the most recent N usageDetails.
 */
export const SchemaRegistryListByNamespace =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SchemaRegistryListByNamespaceInput,
    outputSchema: SchemaRegistryListByNamespaceOutput,
  }));
