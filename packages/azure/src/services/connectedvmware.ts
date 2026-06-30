/**
 * Azure Connectedvmware API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveOutputString, SensitiveString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface ClustersCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  properties: {
    uuid?: string;
    vCenterId?: string;
    moRefId?: string;
    inventoryItemId?: string;
    moName?: string;
    statuses?: {
      type?: string;
      status?: string;
      reason?: string;
      message?: string;
      severity?: string;
      lastUpdatedAt?: string;
    }[];
    customResourceName?: string;
    usedMemoryGB?: number;
    totalMemoryGB?: number;
    usedCpuMHz?: number;
    totalCpuMHz?: number;
    datastoreIds?: string[];
    networkIds?: string[];
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Provisioning"
      | "Updating"
      | "Deleting"
      | "Accepted"
      | "Created";
  };
  location: string;
  extendedLocation?: { type?: string; name?: string };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  tags?: Record<string, string>;
  name?: string;
  id?: string;
  type?: string;
  kind?: string;
}
export const ClustersCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  properties: Schema.Struct({
    uuid: Schema.optional(Schema.String),
    vCenterId: Schema.optional(Schema.String),
    moRefId: Schema.optional(Schema.String),
    inventoryItemId: Schema.optional(Schema.String),
    moName: Schema.optional(Schema.String),
    statuses: Schema.optional(
      Schema.Array(
        Schema.Struct({
          type: Schema.optional(Schema.String),
          status: Schema.optional(Schema.String),
          reason: Schema.optional(Schema.String),
          message: Schema.optional(Schema.String),
          severity: Schema.optional(Schema.String),
          lastUpdatedAt: Schema.optional(Schema.String),
        }),
      ),
    ),
    customResourceName: Schema.optional(Schema.String),
    usedMemoryGB: Schema.optional(Schema.Number),
    totalMemoryGB: Schema.optional(Schema.Number),
    usedCpuMHz: Schema.optional(Schema.Number),
    totalCpuMHz: Schema.optional(Schema.Number),
    datastoreIds: Schema.optional(Schema.Array(Schema.String)),
    networkIds: Schema.optional(Schema.Array(Schema.String)),
    provisioningState: Schema.optional(
      Schema.Literals([
        "Succeeded",
        "Failed",
        "Canceled",
        "Provisioning",
        "Updating",
        "Deleting",
        "Accepted",
        "Created",
      ]),
    ),
  }),
  location: Schema.String,
  extendedLocation: Schema.optional(
    Schema.Struct({
      type: Schema.optional(Schema.String),
      name: Schema.optional(Schema.String),
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
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  name: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/clusters/{clusterName}",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<ClustersCreateInput>;

// Output Schema
export interface ClustersCreateOutput {
  properties: {
    uuid?: string;
    vCenterId?: string;
    moRefId?: string;
    inventoryItemId?: string;
    moName?: string;
    statuses?: {
      type?: string;
      status?: string;
      reason?: string;
      message?: string;
      severity?: string;
      lastUpdatedAt?: string;
    }[];
    customResourceName?: string;
    usedMemoryGB?: number;
    totalMemoryGB?: number;
    usedCpuMHz?: number;
    totalCpuMHz?: number;
    datastoreIds?: string[];
    networkIds?: string[];
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Provisioning"
      | "Updating"
      | "Deleting"
      | "Accepted"
      | "Created";
  };
  location: string;
  extendedLocation?: { type?: string; name?: string };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  tags?: Record<string, string>;
  name?: string;
  id?: string;
  type?: string;
  kind?: string;
}
export const ClustersCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.Struct({
    uuid: Schema.optional(Schema.String),
    vCenterId: Schema.optional(Schema.String),
    moRefId: Schema.optional(Schema.String),
    inventoryItemId: Schema.optional(Schema.String),
    moName: Schema.optional(Schema.String),
    statuses: Schema.optional(
      Schema.Array(
        Schema.Struct({
          type: Schema.optional(Schema.String),
          status: Schema.optional(Schema.String),
          reason: Schema.optional(Schema.String),
          message: Schema.optional(Schema.String),
          severity: Schema.optional(Schema.String),
          lastUpdatedAt: Schema.optional(Schema.String),
        }),
      ),
    ),
    customResourceName: Schema.optional(Schema.String),
    usedMemoryGB: Schema.optional(Schema.Number),
    totalMemoryGB: Schema.optional(Schema.Number),
    usedCpuMHz: Schema.optional(Schema.Number),
    totalCpuMHz: Schema.optional(Schema.Number),
    datastoreIds: Schema.optional(Schema.Array(Schema.String)),
    networkIds: Schema.optional(Schema.Array(Schema.String)),
    provisioningState: Schema.optional(
      Schema.Literals([
        "Succeeded",
        "Failed",
        "Canceled",
        "Provisioning",
        "Updating",
        "Deleting",
        "Accepted",
        "Created",
      ]),
    ),
  }),
  location: Schema.String,
  extendedLocation: Schema.optional(
    Schema.Struct({
      type: Schema.optional(Schema.String),
      name: Schema.optional(Schema.String),
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
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  name: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<ClustersCreateOutput>;

// The operation
/**
 * Implements cluster PUT method.
 *
 * Create Or Update cluster.
 *
 * @param subscriptionId - The Subscription ID.
 * @param resourceGroupName - The Resource Group Name.
 * @param clusterName - Name of the cluster.
 * @param api-version - Client Api Version.
 */
export const ClustersCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ClustersCreateInput,
  outputSchema: ClustersCreateOutput,
}));
// Input Schema
export interface ClustersDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  force?: boolean;
}
export const ClustersDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  force: Schema.optional(Schema.Boolean),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/clusters/{clusterName}",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<ClustersDeleteInput>;

// Output Schema
export type ClustersDeleteOutput = void;
export const ClustersDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ClustersDeleteOutput>;

// The operation
/**
 * Deletes an cluster.
 *
 * Implements cluster DELETE method.
 *
 * @param subscriptionId - The Subscription ID.
 * @param resourceGroupName - The Resource Group Name.
 * @param clusterName - Name of the cluster.
 * @param api-version - Client Api Version.
 * @param force - Whether force delete was specified.
 */
export const ClustersDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ClustersDeleteInput,
  outputSchema: ClustersDeleteOutput,
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
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/clusters/{clusterName}",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<ClustersGetInput>;

// Output Schema
export interface ClustersGetOutput {
  properties: {
    uuid?: string;
    vCenterId?: string;
    moRefId?: string;
    inventoryItemId?: string;
    moName?: string;
    statuses?: {
      type?: string;
      status?: string;
      reason?: string;
      message?: string;
      severity?: string;
      lastUpdatedAt?: string;
    }[];
    customResourceName?: string;
    usedMemoryGB?: number;
    totalMemoryGB?: number;
    usedCpuMHz?: number;
    totalCpuMHz?: number;
    datastoreIds?: string[];
    networkIds?: string[];
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Provisioning"
      | "Updating"
      | "Deleting"
      | "Accepted"
      | "Created";
  };
  location: string;
  extendedLocation?: { type?: string; name?: string };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  tags?: Record<string, string>;
  name?: string;
  id?: string;
  type?: string;
  kind?: string;
}
export const ClustersGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.Struct({
    uuid: Schema.optional(Schema.String),
    vCenterId: Schema.optional(Schema.String),
    moRefId: Schema.optional(Schema.String),
    inventoryItemId: Schema.optional(Schema.String),
    moName: Schema.optional(Schema.String),
    statuses: Schema.optional(
      Schema.Array(
        Schema.Struct({
          type: Schema.optional(Schema.String),
          status: Schema.optional(Schema.String),
          reason: Schema.optional(Schema.String),
          message: Schema.optional(Schema.String),
          severity: Schema.optional(Schema.String),
          lastUpdatedAt: Schema.optional(Schema.String),
        }),
      ),
    ),
    customResourceName: Schema.optional(Schema.String),
    usedMemoryGB: Schema.optional(Schema.Number),
    totalMemoryGB: Schema.optional(Schema.Number),
    usedCpuMHz: Schema.optional(Schema.Number),
    totalCpuMHz: Schema.optional(Schema.Number),
    datastoreIds: Schema.optional(Schema.Array(Schema.String)),
    networkIds: Schema.optional(Schema.Array(Schema.String)),
    provisioningState: Schema.optional(
      Schema.Literals([
        "Succeeded",
        "Failed",
        "Canceled",
        "Provisioning",
        "Updating",
        "Deleting",
        "Accepted",
        "Created",
      ]),
    ),
  }),
  location: Schema.String,
  extendedLocation: Schema.optional(
    Schema.Struct({
      type: Schema.optional(Schema.String),
      name: Schema.optional(Schema.String),
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
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  name: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<ClustersGetOutput>;

// The operation
/**
 * Gets a cluster.
 *
 * Implements cluster GET method.
 *
 * @param subscriptionId - The Subscription ID.
 * @param resourceGroupName - The Resource Group Name.
 * @param clusterName - Name of the cluster.
 * @param api-version - Client Api Version.
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
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.ConnectedVMwarevSphere/clusters",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<ClustersListInput>;

// Output Schema
export interface ClustersListOutput {
  nextLink?: string;
  value: {
    properties: {
      uuid?: string;
      vCenterId?: string;
      moRefId?: string;
      inventoryItemId?: string;
      moName?: string;
      statuses?: {
        type?: string;
        status?: string;
        reason?: string;
        message?: string;
        severity?: string;
        lastUpdatedAt?: string;
      }[];
      customResourceName?: string;
      usedMemoryGB?: number;
      totalMemoryGB?: number;
      usedCpuMHz?: number;
      totalCpuMHz?: number;
      datastoreIds?: string[];
      networkIds?: string[];
      provisioningState?:
        | "Succeeded"
        | "Failed"
        | "Canceled"
        | "Provisioning"
        | "Updating"
        | "Deleting"
        | "Accepted"
        | "Created";
    };
    location: string;
    extendedLocation?: { type?: string; name?: string };
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
    tags?: Record<string, string>;
    name?: string;
    id?: string;
    type?: string;
    kind?: string;
  }[];
}
export const ClustersListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nextLink: Schema.optional(Schema.String),
  value: Schema.Array(
    Schema.Struct({
      properties: Schema.Struct({
        uuid: Schema.optional(Schema.String),
        vCenterId: Schema.optional(Schema.String),
        moRefId: Schema.optional(Schema.String),
        inventoryItemId: Schema.optional(Schema.String),
        moName: Schema.optional(Schema.String),
        statuses: Schema.optional(
          Schema.Array(
            Schema.Struct({
              type: Schema.optional(Schema.String),
              status: Schema.optional(Schema.String),
              reason: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              severity: Schema.optional(Schema.String),
              lastUpdatedAt: Schema.optional(Schema.String),
            }),
          ),
        ),
        customResourceName: Schema.optional(Schema.String),
        usedMemoryGB: Schema.optional(Schema.Number),
        totalMemoryGB: Schema.optional(Schema.Number),
        usedCpuMHz: Schema.optional(Schema.Number),
        totalCpuMHz: Schema.optional(Schema.Number),
        datastoreIds: Schema.optional(Schema.Array(Schema.String)),
        networkIds: Schema.optional(Schema.Array(Schema.String)),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Provisioning",
            "Updating",
            "Deleting",
            "Accepted",
            "Created",
          ]),
        ),
      }),
      location: Schema.String,
      extendedLocation: Schema.optional(
        Schema.Struct({
          type: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
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
      tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      name: Schema.optional(Schema.String),
      id: Schema.optional(Schema.String),
      type: Schema.optional(Schema.String),
      kind: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<ClustersListOutput>;

// The operation
/**
 * Implements GET clusters in a subscription.
 *
 * List of clusters in a subscription.
 *
 * @param subscriptionId - The Subscription ID.
 * @param api-version - Client Api Version.
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/clusters",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<ClustersListByResourceGroupInput>;

// Output Schema
export interface ClustersListByResourceGroupOutput {
  nextLink?: string;
  value: {
    properties: {
      uuid?: string;
      vCenterId?: string;
      moRefId?: string;
      inventoryItemId?: string;
      moName?: string;
      statuses?: {
        type?: string;
        status?: string;
        reason?: string;
        message?: string;
        severity?: string;
        lastUpdatedAt?: string;
      }[];
      customResourceName?: string;
      usedMemoryGB?: number;
      totalMemoryGB?: number;
      usedCpuMHz?: number;
      totalCpuMHz?: number;
      datastoreIds?: string[];
      networkIds?: string[];
      provisioningState?:
        | "Succeeded"
        | "Failed"
        | "Canceled"
        | "Provisioning"
        | "Updating"
        | "Deleting"
        | "Accepted"
        | "Created";
    };
    location: string;
    extendedLocation?: { type?: string; name?: string };
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
    tags?: Record<string, string>;
    name?: string;
    id?: string;
    type?: string;
    kind?: string;
  }[];
}
export const ClustersListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.Array(
      Schema.Struct({
        properties: Schema.Struct({
          uuid: Schema.optional(Schema.String),
          vCenterId: Schema.optional(Schema.String),
          moRefId: Schema.optional(Schema.String),
          inventoryItemId: Schema.optional(Schema.String),
          moName: Schema.optional(Schema.String),
          statuses: Schema.optional(
            Schema.Array(
              Schema.Struct({
                type: Schema.optional(Schema.String),
                status: Schema.optional(Schema.String),
                reason: Schema.optional(Schema.String),
                message: Schema.optional(Schema.String),
                severity: Schema.optional(Schema.String),
                lastUpdatedAt: Schema.optional(Schema.String),
              }),
            ),
          ),
          customResourceName: Schema.optional(Schema.String),
          usedMemoryGB: Schema.optional(Schema.Number),
          totalMemoryGB: Schema.optional(Schema.Number),
          usedCpuMHz: Schema.optional(Schema.Number),
          totalCpuMHz: Schema.optional(Schema.Number),
          datastoreIds: Schema.optional(Schema.Array(Schema.String)),
          networkIds: Schema.optional(Schema.Array(Schema.String)),
          provisioningState: Schema.optional(
            Schema.Literals([
              "Succeeded",
              "Failed",
              "Canceled",
              "Provisioning",
              "Updating",
              "Deleting",
              "Accepted",
              "Created",
            ]),
          ),
        }),
        location: Schema.String,
        extendedLocation: Schema.optional(
          Schema.Struct({
            type: Schema.optional(Schema.String),
            name: Schema.optional(Schema.String),
          }),
        ),
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
        tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        name: Schema.optional(Schema.String),
        id: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        kind: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<ClustersListByResourceGroupOutput>;

// The operation
/**
 * Implements GET clusters in a resource group.
 *
 * List of clusters in a resource group.
 *
 * @param subscriptionId - The Subscription ID.
 * @param resourceGroupName - The Resource Group Name.
 * @param api-version - Client Api Version.
 */
export const ClustersListByResourceGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ClustersListByResourceGroupInput,
    outputSchema: ClustersListByResourceGroupOutput,
  }),
);
// Input Schema
export interface ClustersUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  tags?: Record<string, string>;
}
export const ClustersUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/clusters/{clusterName}",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<ClustersUpdateInput>;

// Output Schema
export interface ClustersUpdateOutput {
  properties: {
    uuid?: string;
    vCenterId?: string;
    moRefId?: string;
    inventoryItemId?: string;
    moName?: string;
    statuses?: {
      type?: string;
      status?: string;
      reason?: string;
      message?: string;
      severity?: string;
      lastUpdatedAt?: string;
    }[];
    customResourceName?: string;
    usedMemoryGB?: number;
    totalMemoryGB?: number;
    usedCpuMHz?: number;
    totalCpuMHz?: number;
    datastoreIds?: string[];
    networkIds?: string[];
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Provisioning"
      | "Updating"
      | "Deleting"
      | "Accepted"
      | "Created";
  };
  location: string;
  extendedLocation?: { type?: string; name?: string };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  tags?: Record<string, string>;
  name?: string;
  id?: string;
  type?: string;
  kind?: string;
}
export const ClustersUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.Struct({
    uuid: Schema.optional(Schema.String),
    vCenterId: Schema.optional(Schema.String),
    moRefId: Schema.optional(Schema.String),
    inventoryItemId: Schema.optional(Schema.String),
    moName: Schema.optional(Schema.String),
    statuses: Schema.optional(
      Schema.Array(
        Schema.Struct({
          type: Schema.optional(Schema.String),
          status: Schema.optional(Schema.String),
          reason: Schema.optional(Schema.String),
          message: Schema.optional(Schema.String),
          severity: Schema.optional(Schema.String),
          lastUpdatedAt: Schema.optional(Schema.String),
        }),
      ),
    ),
    customResourceName: Schema.optional(Schema.String),
    usedMemoryGB: Schema.optional(Schema.Number),
    totalMemoryGB: Schema.optional(Schema.Number),
    usedCpuMHz: Schema.optional(Schema.Number),
    totalCpuMHz: Schema.optional(Schema.Number),
    datastoreIds: Schema.optional(Schema.Array(Schema.String)),
    networkIds: Schema.optional(Schema.Array(Schema.String)),
    provisioningState: Schema.optional(
      Schema.Literals([
        "Succeeded",
        "Failed",
        "Canceled",
        "Provisioning",
        "Updating",
        "Deleting",
        "Accepted",
        "Created",
      ]),
    ),
  }),
  location: Schema.String,
  extendedLocation: Schema.optional(
    Schema.Struct({
      type: Schema.optional(Schema.String),
      name: Schema.optional(Schema.String),
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
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  name: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<ClustersUpdateOutput>;

// The operation
/**
 * Updates a cluster.
 *
 * API to update certain properties of the cluster resource.
 *
 * @param subscriptionId - The Subscription ID.
 * @param resourceGroupName - The Resource Group Name.
 * @param clusterName - Name of the cluster.
 * @param api-version - Client Api Version.
 */
export const ClustersUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ClustersUpdateInput,
  outputSchema: ClustersUpdateOutput,
}));
// Input Schema
export interface DatastoresCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  datastoreName: string;
  properties: {
    uuid?: string;
    vCenterId?: string;
    moRefId?: string;
    inventoryItemId?: string;
    moName?: string;
    statuses?: {
      type?: string;
      status?: string;
      reason?: string;
      message?: string;
      severity?: string;
      lastUpdatedAt?: string;
    }[];
    customResourceName?: string;
    capacityGB?: number;
    freeSpaceGB?: number;
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Provisioning"
      | "Updating"
      | "Deleting"
      | "Accepted"
      | "Created";
  };
  location: string;
  extendedLocation?: { type?: string; name?: string };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  tags?: Record<string, string>;
  name?: string;
  id?: string;
  type?: string;
  kind?: string;
}
export const DatastoresCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  datastoreName: Schema.String.pipe(T.PathParam()),
  properties: Schema.Struct({
    uuid: Schema.optional(Schema.String),
    vCenterId: Schema.optional(Schema.String),
    moRefId: Schema.optional(Schema.String),
    inventoryItemId: Schema.optional(Schema.String),
    moName: Schema.optional(Schema.String),
    statuses: Schema.optional(
      Schema.Array(
        Schema.Struct({
          type: Schema.optional(Schema.String),
          status: Schema.optional(Schema.String),
          reason: Schema.optional(Schema.String),
          message: Schema.optional(Schema.String),
          severity: Schema.optional(Schema.String),
          lastUpdatedAt: Schema.optional(Schema.String),
        }),
      ),
    ),
    customResourceName: Schema.optional(Schema.String),
    capacityGB: Schema.optional(Schema.Number),
    freeSpaceGB: Schema.optional(Schema.Number),
    provisioningState: Schema.optional(
      Schema.Literals([
        "Succeeded",
        "Failed",
        "Canceled",
        "Provisioning",
        "Updating",
        "Deleting",
        "Accepted",
        "Created",
      ]),
    ),
  }),
  location: Schema.String,
  extendedLocation: Schema.optional(
    Schema.Struct({
      type: Schema.optional(Schema.String),
      name: Schema.optional(Schema.String),
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
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  name: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/datastores/{datastoreName}",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<DatastoresCreateInput>;

// Output Schema
export interface DatastoresCreateOutput {
  properties: {
    uuid?: string;
    vCenterId?: string;
    moRefId?: string;
    inventoryItemId?: string;
    moName?: string;
    statuses?: {
      type?: string;
      status?: string;
      reason?: string;
      message?: string;
      severity?: string;
      lastUpdatedAt?: string;
    }[];
    customResourceName?: string;
    capacityGB?: number;
    freeSpaceGB?: number;
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Provisioning"
      | "Updating"
      | "Deleting"
      | "Accepted"
      | "Created";
  };
  location: string;
  extendedLocation?: { type?: string; name?: string };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  tags?: Record<string, string>;
  name?: string;
  id?: string;
  type?: string;
  kind?: string;
}
export const DatastoresCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    properties: Schema.Struct({
      uuid: Schema.optional(Schema.String),
      vCenterId: Schema.optional(Schema.String),
      moRefId: Schema.optional(Schema.String),
      inventoryItemId: Schema.optional(Schema.String),
      moName: Schema.optional(Schema.String),
      statuses: Schema.optional(
        Schema.Array(
          Schema.Struct({
            type: Schema.optional(Schema.String),
            status: Schema.optional(Schema.String),
            reason: Schema.optional(Schema.String),
            message: Schema.optional(Schema.String),
            severity: Schema.optional(Schema.String),
            lastUpdatedAt: Schema.optional(Schema.String),
          }),
        ),
      ),
      customResourceName: Schema.optional(Schema.String),
      capacityGB: Schema.optional(Schema.Number),
      freeSpaceGB: Schema.optional(Schema.Number),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Succeeded",
          "Failed",
          "Canceled",
          "Provisioning",
          "Updating",
          "Deleting",
          "Accepted",
          "Created",
        ]),
      ),
    }),
    location: Schema.String,
    extendedLocation: Schema.optional(
      Schema.Struct({
        type: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
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
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  },
) as unknown as Schema.Codec<DatastoresCreateOutput>;

// The operation
/**
 * Implements datastore PUT method.
 *
 * Create Or Update datastore.
 *
 * @param subscriptionId - The Subscription ID.
 * @param resourceGroupName - The Resource Group Name.
 * @param datastoreName - Name of the datastore.
 * @param api-version - Client Api Version.
 */
export const DatastoresCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DatastoresCreateInput,
  outputSchema: DatastoresCreateOutput,
}));
// Input Schema
export interface DatastoresDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  datastoreName: string;
  force?: boolean;
}
export const DatastoresDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  datastoreName: Schema.String.pipe(T.PathParam()),
  force: Schema.optional(Schema.Boolean),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/datastores/{datastoreName}",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<DatastoresDeleteInput>;

// Output Schema
export type DatastoresDeleteOutput = void;
export const DatastoresDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DatastoresDeleteOutput>;

// The operation
/**
 * Deletes an datastore.
 *
 * Implements datastore DELETE method.
 *
 * @param subscriptionId - The Subscription ID.
 * @param resourceGroupName - The Resource Group Name.
 * @param datastoreName - Name of the datastore.
 * @param api-version - Client Api Version.
 * @param force - Whether force delete was specified.
 */
export const DatastoresDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DatastoresDeleteInput,
  outputSchema: DatastoresDeleteOutput,
}));
// Input Schema
export interface DatastoresGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  datastoreName: string;
}
export const DatastoresGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  datastoreName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/datastores/{datastoreName}",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<DatastoresGetInput>;

// Output Schema
export interface DatastoresGetOutput {
  properties: {
    uuid?: string;
    vCenterId?: string;
    moRefId?: string;
    inventoryItemId?: string;
    moName?: string;
    statuses?: {
      type?: string;
      status?: string;
      reason?: string;
      message?: string;
      severity?: string;
      lastUpdatedAt?: string;
    }[];
    customResourceName?: string;
    capacityGB?: number;
    freeSpaceGB?: number;
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Provisioning"
      | "Updating"
      | "Deleting"
      | "Accepted"
      | "Created";
  };
  location: string;
  extendedLocation?: { type?: string; name?: string };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  tags?: Record<string, string>;
  name?: string;
  id?: string;
  type?: string;
  kind?: string;
}
export const DatastoresGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.Struct({
    uuid: Schema.optional(Schema.String),
    vCenterId: Schema.optional(Schema.String),
    moRefId: Schema.optional(Schema.String),
    inventoryItemId: Schema.optional(Schema.String),
    moName: Schema.optional(Schema.String),
    statuses: Schema.optional(
      Schema.Array(
        Schema.Struct({
          type: Schema.optional(Schema.String),
          status: Schema.optional(Schema.String),
          reason: Schema.optional(Schema.String),
          message: Schema.optional(Schema.String),
          severity: Schema.optional(Schema.String),
          lastUpdatedAt: Schema.optional(Schema.String),
        }),
      ),
    ),
    customResourceName: Schema.optional(Schema.String),
    capacityGB: Schema.optional(Schema.Number),
    freeSpaceGB: Schema.optional(Schema.Number),
    provisioningState: Schema.optional(
      Schema.Literals([
        "Succeeded",
        "Failed",
        "Canceled",
        "Provisioning",
        "Updating",
        "Deleting",
        "Accepted",
        "Created",
      ]),
    ),
  }),
  location: Schema.String,
  extendedLocation: Schema.optional(
    Schema.Struct({
      type: Schema.optional(Schema.String),
      name: Schema.optional(Schema.String),
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
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  name: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<DatastoresGetOutput>;

// The operation
/**
 * Gets a datastore.
 *
 * Implements datastore GET method.
 *
 * @param subscriptionId - The Subscription ID.
 * @param resourceGroupName - The Resource Group Name.
 * @param datastoreName - Name of the datastore.
 * @param api-version - Client Api Version.
 */
export const DatastoresGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DatastoresGetInput,
  outputSchema: DatastoresGetOutput,
}));
// Input Schema
export interface DatastoresListInput {
  subscriptionId: string;
}
export const DatastoresListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.ConnectedVMwarevSphere/datastores",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<DatastoresListInput>;

// Output Schema
export interface DatastoresListOutput {
  nextLink?: string;
  value: {
    properties: {
      uuid?: string;
      vCenterId?: string;
      moRefId?: string;
      inventoryItemId?: string;
      moName?: string;
      statuses?: {
        type?: string;
        status?: string;
        reason?: string;
        message?: string;
        severity?: string;
        lastUpdatedAt?: string;
      }[];
      customResourceName?: string;
      capacityGB?: number;
      freeSpaceGB?: number;
      provisioningState?:
        | "Succeeded"
        | "Failed"
        | "Canceled"
        | "Provisioning"
        | "Updating"
        | "Deleting"
        | "Accepted"
        | "Created";
    };
    location: string;
    extendedLocation?: { type?: string; name?: string };
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
    tags?: Record<string, string>;
    name?: string;
    id?: string;
    type?: string;
    kind?: string;
  }[];
}
export const DatastoresListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nextLink: Schema.optional(Schema.String),
  value: Schema.Array(
    Schema.Struct({
      properties: Schema.Struct({
        uuid: Schema.optional(Schema.String),
        vCenterId: Schema.optional(Schema.String),
        moRefId: Schema.optional(Schema.String),
        inventoryItemId: Schema.optional(Schema.String),
        moName: Schema.optional(Schema.String),
        statuses: Schema.optional(
          Schema.Array(
            Schema.Struct({
              type: Schema.optional(Schema.String),
              status: Schema.optional(Schema.String),
              reason: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              severity: Schema.optional(Schema.String),
              lastUpdatedAt: Schema.optional(Schema.String),
            }),
          ),
        ),
        customResourceName: Schema.optional(Schema.String),
        capacityGB: Schema.optional(Schema.Number),
        freeSpaceGB: Schema.optional(Schema.Number),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Provisioning",
            "Updating",
            "Deleting",
            "Accepted",
            "Created",
          ]),
        ),
      }),
      location: Schema.String,
      extendedLocation: Schema.optional(
        Schema.Struct({
          type: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
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
      tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      name: Schema.optional(Schema.String),
      id: Schema.optional(Schema.String),
      type: Schema.optional(Schema.String),
      kind: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<DatastoresListOutput>;

// The operation
/**
 * Implements GET datastores in a subscription.
 *
 * List of datastores in a subscription.
 *
 * @param subscriptionId - The Subscription ID.
 * @param api-version - Client Api Version.
 */
export const DatastoresList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DatastoresListInput,
  outputSchema: DatastoresListOutput,
}));
// Input Schema
export interface DatastoresListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const DatastoresListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/datastores",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<DatastoresListByResourceGroupInput>;

// Output Schema
export interface DatastoresListByResourceGroupOutput {
  nextLink?: string;
  value: {
    properties: {
      uuid?: string;
      vCenterId?: string;
      moRefId?: string;
      inventoryItemId?: string;
      moName?: string;
      statuses?: {
        type?: string;
        status?: string;
        reason?: string;
        message?: string;
        severity?: string;
        lastUpdatedAt?: string;
      }[];
      customResourceName?: string;
      capacityGB?: number;
      freeSpaceGB?: number;
      provisioningState?:
        | "Succeeded"
        | "Failed"
        | "Canceled"
        | "Provisioning"
        | "Updating"
        | "Deleting"
        | "Accepted"
        | "Created";
    };
    location: string;
    extendedLocation?: { type?: string; name?: string };
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
    tags?: Record<string, string>;
    name?: string;
    id?: string;
    type?: string;
    kind?: string;
  }[];
}
export const DatastoresListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.Array(
      Schema.Struct({
        properties: Schema.Struct({
          uuid: Schema.optional(Schema.String),
          vCenterId: Schema.optional(Schema.String),
          moRefId: Schema.optional(Schema.String),
          inventoryItemId: Schema.optional(Schema.String),
          moName: Schema.optional(Schema.String),
          statuses: Schema.optional(
            Schema.Array(
              Schema.Struct({
                type: Schema.optional(Schema.String),
                status: Schema.optional(Schema.String),
                reason: Schema.optional(Schema.String),
                message: Schema.optional(Schema.String),
                severity: Schema.optional(Schema.String),
                lastUpdatedAt: Schema.optional(Schema.String),
              }),
            ),
          ),
          customResourceName: Schema.optional(Schema.String),
          capacityGB: Schema.optional(Schema.Number),
          freeSpaceGB: Schema.optional(Schema.Number),
          provisioningState: Schema.optional(
            Schema.Literals([
              "Succeeded",
              "Failed",
              "Canceled",
              "Provisioning",
              "Updating",
              "Deleting",
              "Accepted",
              "Created",
            ]),
          ),
        }),
        location: Schema.String,
        extendedLocation: Schema.optional(
          Schema.Struct({
            type: Schema.optional(Schema.String),
            name: Schema.optional(Schema.String),
          }),
        ),
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
        tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        name: Schema.optional(Schema.String),
        id: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        kind: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<DatastoresListByResourceGroupOutput>;

// The operation
/**
 * Implements GET datastores in a resource group.
 *
 * List of datastores in a resource group.
 *
 * @param subscriptionId - The Subscription ID.
 * @param resourceGroupName - The Resource Group Name.
 * @param api-version - Client Api Version.
 */
export const DatastoresListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DatastoresListByResourceGroupInput,
    outputSchema: DatastoresListByResourceGroupOutput,
  }));
// Input Schema
export interface DatastoresUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  datastoreName: string;
  tags?: Record<string, string>;
}
export const DatastoresUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  datastoreName: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/datastores/{datastoreName}",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<DatastoresUpdateInput>;

// Output Schema
export interface DatastoresUpdateOutput {
  properties: {
    uuid?: string;
    vCenterId?: string;
    moRefId?: string;
    inventoryItemId?: string;
    moName?: string;
    statuses?: {
      type?: string;
      status?: string;
      reason?: string;
      message?: string;
      severity?: string;
      lastUpdatedAt?: string;
    }[];
    customResourceName?: string;
    capacityGB?: number;
    freeSpaceGB?: number;
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Provisioning"
      | "Updating"
      | "Deleting"
      | "Accepted"
      | "Created";
  };
  location: string;
  extendedLocation?: { type?: string; name?: string };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  tags?: Record<string, string>;
  name?: string;
  id?: string;
  type?: string;
  kind?: string;
}
export const DatastoresUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    properties: Schema.Struct({
      uuid: Schema.optional(Schema.String),
      vCenterId: Schema.optional(Schema.String),
      moRefId: Schema.optional(Schema.String),
      inventoryItemId: Schema.optional(Schema.String),
      moName: Schema.optional(Schema.String),
      statuses: Schema.optional(
        Schema.Array(
          Schema.Struct({
            type: Schema.optional(Schema.String),
            status: Schema.optional(Schema.String),
            reason: Schema.optional(Schema.String),
            message: Schema.optional(Schema.String),
            severity: Schema.optional(Schema.String),
            lastUpdatedAt: Schema.optional(Schema.String),
          }),
        ),
      ),
      customResourceName: Schema.optional(Schema.String),
      capacityGB: Schema.optional(Schema.Number),
      freeSpaceGB: Schema.optional(Schema.Number),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Succeeded",
          "Failed",
          "Canceled",
          "Provisioning",
          "Updating",
          "Deleting",
          "Accepted",
          "Created",
        ]),
      ),
    }),
    location: Schema.String,
    extendedLocation: Schema.optional(
      Schema.Struct({
        type: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
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
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  },
) as unknown as Schema.Codec<DatastoresUpdateOutput>;

// The operation
/**
 * Updates a datastore.
 *
 * API to update certain properties of the datastore resource.
 *
 * @param subscriptionId - The Subscription ID.
 * @param resourceGroupName - The Resource Group Name.
 * @param datastoreName - Name of the datastore.
 * @param api-version - Client Api Version.
 */
export const DatastoresUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DatastoresUpdateInput,
  outputSchema: DatastoresUpdateOutput,
}));
// Input Schema
export interface HostsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  hostName: string;
  properties: {
    uuid?: string;
    vCenterId?: string;
    moRefId?: string;
    inventoryItemId?: string;
    moName?: string;
    statuses?: {
      type?: string;
      status?: string;
      reason?: string;
      message?: string;
      severity?: string;
      lastUpdatedAt?: string;
    }[];
    customResourceName?: string;
    overallMemoryUsageGB?: number;
    memorySizeGB?: number;
    overallCpuUsageMHz?: number;
    cpuMhz?: number;
    datastoreIds?: string[];
    networkIds?: string[];
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Provisioning"
      | "Updating"
      | "Deleting"
      | "Accepted"
      | "Created";
  };
  location: string;
  extendedLocation?: { type?: string; name?: string };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  tags?: Record<string, string>;
  name?: string;
  id?: string;
  type?: string;
  kind?: string;
}
export const HostsCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  hostName: Schema.String.pipe(T.PathParam()),
  properties: Schema.Struct({
    uuid: Schema.optional(Schema.String),
    vCenterId: Schema.optional(Schema.String),
    moRefId: Schema.optional(Schema.String),
    inventoryItemId: Schema.optional(Schema.String),
    moName: Schema.optional(Schema.String),
    statuses: Schema.optional(
      Schema.Array(
        Schema.Struct({
          type: Schema.optional(Schema.String),
          status: Schema.optional(Schema.String),
          reason: Schema.optional(Schema.String),
          message: Schema.optional(Schema.String),
          severity: Schema.optional(Schema.String),
          lastUpdatedAt: Schema.optional(Schema.String),
        }),
      ),
    ),
    customResourceName: Schema.optional(Schema.String),
    overallMemoryUsageGB: Schema.optional(Schema.Number),
    memorySizeGB: Schema.optional(Schema.Number),
    overallCpuUsageMHz: Schema.optional(Schema.Number),
    cpuMhz: Schema.optional(Schema.Number),
    datastoreIds: Schema.optional(Schema.Array(Schema.String)),
    networkIds: Schema.optional(Schema.Array(Schema.String)),
    provisioningState: Schema.optional(
      Schema.Literals([
        "Succeeded",
        "Failed",
        "Canceled",
        "Provisioning",
        "Updating",
        "Deleting",
        "Accepted",
        "Created",
      ]),
    ),
  }),
  location: Schema.String,
  extendedLocation: Schema.optional(
    Schema.Struct({
      type: Schema.optional(Schema.String),
      name: Schema.optional(Schema.String),
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
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  name: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/hosts/{hostName}",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<HostsCreateInput>;

// Output Schema
export interface HostsCreateOutput {
  properties: {
    uuid?: string;
    vCenterId?: string;
    moRefId?: string;
    inventoryItemId?: string;
    moName?: string;
    statuses?: {
      type?: string;
      status?: string;
      reason?: string;
      message?: string;
      severity?: string;
      lastUpdatedAt?: string;
    }[];
    customResourceName?: string;
    overallMemoryUsageGB?: number;
    memorySizeGB?: number;
    overallCpuUsageMHz?: number;
    cpuMhz?: number;
    datastoreIds?: string[];
    networkIds?: string[];
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Provisioning"
      | "Updating"
      | "Deleting"
      | "Accepted"
      | "Created";
  };
  location: string;
  extendedLocation?: { type?: string; name?: string };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  tags?: Record<string, string>;
  name?: string;
  id?: string;
  type?: string;
  kind?: string;
}
export const HostsCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.Struct({
    uuid: Schema.optional(Schema.String),
    vCenterId: Schema.optional(Schema.String),
    moRefId: Schema.optional(Schema.String),
    inventoryItemId: Schema.optional(Schema.String),
    moName: Schema.optional(Schema.String),
    statuses: Schema.optional(
      Schema.Array(
        Schema.Struct({
          type: Schema.optional(Schema.String),
          status: Schema.optional(Schema.String),
          reason: Schema.optional(Schema.String),
          message: Schema.optional(Schema.String),
          severity: Schema.optional(Schema.String),
          lastUpdatedAt: Schema.optional(Schema.String),
        }),
      ),
    ),
    customResourceName: Schema.optional(Schema.String),
    overallMemoryUsageGB: Schema.optional(Schema.Number),
    memorySizeGB: Schema.optional(Schema.Number),
    overallCpuUsageMHz: Schema.optional(Schema.Number),
    cpuMhz: Schema.optional(Schema.Number),
    datastoreIds: Schema.optional(Schema.Array(Schema.String)),
    networkIds: Schema.optional(Schema.Array(Schema.String)),
    provisioningState: Schema.optional(
      Schema.Literals([
        "Succeeded",
        "Failed",
        "Canceled",
        "Provisioning",
        "Updating",
        "Deleting",
        "Accepted",
        "Created",
      ]),
    ),
  }),
  location: Schema.String,
  extendedLocation: Schema.optional(
    Schema.Struct({
      type: Schema.optional(Schema.String),
      name: Schema.optional(Schema.String),
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
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  name: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<HostsCreateOutput>;

// The operation
/**
 * Implements host PUT method.
 *
 * Create Or Update host.
 *
 * @param subscriptionId - The Subscription ID.
 * @param resourceGroupName - The Resource Group Name.
 * @param hostName - Name of the host.
 * @param api-version - Client Api Version.
 */
export const HostsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: HostsCreateInput,
  outputSchema: HostsCreateOutput,
}));
// Input Schema
export interface HostsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  hostName: string;
  force?: boolean;
}
export const HostsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  hostName: Schema.String.pipe(T.PathParam()),
  force: Schema.optional(Schema.Boolean),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/hosts/{hostName}",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<HostsDeleteInput>;

// Output Schema
export type HostsDeleteOutput = void;
export const HostsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<HostsDeleteOutput>;

// The operation
/**
 * Deletes an host.
 *
 * Implements host DELETE method.
 *
 * @param subscriptionId - The Subscription ID.
 * @param resourceGroupName - The Resource Group Name.
 * @param hostName - Name of the host.
 * @param api-version - Client Api Version.
 * @param force - Whether force delete was specified.
 */
export const HostsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: HostsDeleteInput,
  outputSchema: HostsDeleteOutput,
}));
// Input Schema
export interface HostsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  hostName: string;
}
export const HostsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  hostName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/hosts/{hostName}",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<HostsGetInput>;

// Output Schema
export interface HostsGetOutput {
  properties: {
    uuid?: string;
    vCenterId?: string;
    moRefId?: string;
    inventoryItemId?: string;
    moName?: string;
    statuses?: {
      type?: string;
      status?: string;
      reason?: string;
      message?: string;
      severity?: string;
      lastUpdatedAt?: string;
    }[];
    customResourceName?: string;
    overallMemoryUsageGB?: number;
    memorySizeGB?: number;
    overallCpuUsageMHz?: number;
    cpuMhz?: number;
    datastoreIds?: string[];
    networkIds?: string[];
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Provisioning"
      | "Updating"
      | "Deleting"
      | "Accepted"
      | "Created";
  };
  location: string;
  extendedLocation?: { type?: string; name?: string };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  tags?: Record<string, string>;
  name?: string;
  id?: string;
  type?: string;
  kind?: string;
}
export const HostsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.Struct({
    uuid: Schema.optional(Schema.String),
    vCenterId: Schema.optional(Schema.String),
    moRefId: Schema.optional(Schema.String),
    inventoryItemId: Schema.optional(Schema.String),
    moName: Schema.optional(Schema.String),
    statuses: Schema.optional(
      Schema.Array(
        Schema.Struct({
          type: Schema.optional(Schema.String),
          status: Schema.optional(Schema.String),
          reason: Schema.optional(Schema.String),
          message: Schema.optional(Schema.String),
          severity: Schema.optional(Schema.String),
          lastUpdatedAt: Schema.optional(Schema.String),
        }),
      ),
    ),
    customResourceName: Schema.optional(Schema.String),
    overallMemoryUsageGB: Schema.optional(Schema.Number),
    memorySizeGB: Schema.optional(Schema.Number),
    overallCpuUsageMHz: Schema.optional(Schema.Number),
    cpuMhz: Schema.optional(Schema.Number),
    datastoreIds: Schema.optional(Schema.Array(Schema.String)),
    networkIds: Schema.optional(Schema.Array(Schema.String)),
    provisioningState: Schema.optional(
      Schema.Literals([
        "Succeeded",
        "Failed",
        "Canceled",
        "Provisioning",
        "Updating",
        "Deleting",
        "Accepted",
        "Created",
      ]),
    ),
  }),
  location: Schema.String,
  extendedLocation: Schema.optional(
    Schema.Struct({
      type: Schema.optional(Schema.String),
      name: Schema.optional(Schema.String),
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
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  name: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<HostsGetOutput>;

// The operation
/**
 * Gets a host.
 *
 * Implements host GET method.
 *
 * @param subscriptionId - The Subscription ID.
 * @param resourceGroupName - The Resource Group Name.
 * @param hostName - Name of the host.
 * @param api-version - Client Api Version.
 */
export const HostsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: HostsGetInput,
  outputSchema: HostsGetOutput,
}));
// Input Schema
export interface HostsListInput {
  subscriptionId: string;
}
export const HostsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.ConnectedVMwarevSphere/hosts",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<HostsListInput>;

// Output Schema
export interface HostsListOutput {
  nextLink?: string;
  value: {
    properties: {
      uuid?: string;
      vCenterId?: string;
      moRefId?: string;
      inventoryItemId?: string;
      moName?: string;
      statuses?: {
        type?: string;
        status?: string;
        reason?: string;
        message?: string;
        severity?: string;
        lastUpdatedAt?: string;
      }[];
      customResourceName?: string;
      overallMemoryUsageGB?: number;
      memorySizeGB?: number;
      overallCpuUsageMHz?: number;
      cpuMhz?: number;
      datastoreIds?: string[];
      networkIds?: string[];
      provisioningState?:
        | "Succeeded"
        | "Failed"
        | "Canceled"
        | "Provisioning"
        | "Updating"
        | "Deleting"
        | "Accepted"
        | "Created";
    };
    location: string;
    extendedLocation?: { type?: string; name?: string };
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
    tags?: Record<string, string>;
    name?: string;
    id?: string;
    type?: string;
    kind?: string;
  }[];
}
export const HostsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nextLink: Schema.optional(Schema.String),
  value: Schema.Array(
    Schema.Struct({
      properties: Schema.Struct({
        uuid: Schema.optional(Schema.String),
        vCenterId: Schema.optional(Schema.String),
        moRefId: Schema.optional(Schema.String),
        inventoryItemId: Schema.optional(Schema.String),
        moName: Schema.optional(Schema.String),
        statuses: Schema.optional(
          Schema.Array(
            Schema.Struct({
              type: Schema.optional(Schema.String),
              status: Schema.optional(Schema.String),
              reason: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              severity: Schema.optional(Schema.String),
              lastUpdatedAt: Schema.optional(Schema.String),
            }),
          ),
        ),
        customResourceName: Schema.optional(Schema.String),
        overallMemoryUsageGB: Schema.optional(Schema.Number),
        memorySizeGB: Schema.optional(Schema.Number),
        overallCpuUsageMHz: Schema.optional(Schema.Number),
        cpuMhz: Schema.optional(Schema.Number),
        datastoreIds: Schema.optional(Schema.Array(Schema.String)),
        networkIds: Schema.optional(Schema.Array(Schema.String)),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Provisioning",
            "Updating",
            "Deleting",
            "Accepted",
            "Created",
          ]),
        ),
      }),
      location: Schema.String,
      extendedLocation: Schema.optional(
        Schema.Struct({
          type: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
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
      tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      name: Schema.optional(Schema.String),
      id: Schema.optional(Schema.String),
      type: Schema.optional(Schema.String),
      kind: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<HostsListOutput>;

// The operation
/**
 * Implements GET hosts in a subscription.
 *
 * List of hosts in a subscription.
 *
 * @param subscriptionId - The Subscription ID.
 * @param api-version - Client Api Version.
 */
export const HostsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: HostsListInput,
  outputSchema: HostsListOutput,
}));
// Input Schema
export interface HostsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const HostsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/hosts",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<HostsListByResourceGroupInput>;

// Output Schema
export interface HostsListByResourceGroupOutput {
  nextLink?: string;
  value: {
    properties: {
      uuid?: string;
      vCenterId?: string;
      moRefId?: string;
      inventoryItemId?: string;
      moName?: string;
      statuses?: {
        type?: string;
        status?: string;
        reason?: string;
        message?: string;
        severity?: string;
        lastUpdatedAt?: string;
      }[];
      customResourceName?: string;
      overallMemoryUsageGB?: number;
      memorySizeGB?: number;
      overallCpuUsageMHz?: number;
      cpuMhz?: number;
      datastoreIds?: string[];
      networkIds?: string[];
      provisioningState?:
        | "Succeeded"
        | "Failed"
        | "Canceled"
        | "Provisioning"
        | "Updating"
        | "Deleting"
        | "Accepted"
        | "Created";
    };
    location: string;
    extendedLocation?: { type?: string; name?: string };
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
    tags?: Record<string, string>;
    name?: string;
    id?: string;
    type?: string;
    kind?: string;
  }[];
}
export const HostsListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.Array(
      Schema.Struct({
        properties: Schema.Struct({
          uuid: Schema.optional(Schema.String),
          vCenterId: Schema.optional(Schema.String),
          moRefId: Schema.optional(Schema.String),
          inventoryItemId: Schema.optional(Schema.String),
          moName: Schema.optional(Schema.String),
          statuses: Schema.optional(
            Schema.Array(
              Schema.Struct({
                type: Schema.optional(Schema.String),
                status: Schema.optional(Schema.String),
                reason: Schema.optional(Schema.String),
                message: Schema.optional(Schema.String),
                severity: Schema.optional(Schema.String),
                lastUpdatedAt: Schema.optional(Schema.String),
              }),
            ),
          ),
          customResourceName: Schema.optional(Schema.String),
          overallMemoryUsageGB: Schema.optional(Schema.Number),
          memorySizeGB: Schema.optional(Schema.Number),
          overallCpuUsageMHz: Schema.optional(Schema.Number),
          cpuMhz: Schema.optional(Schema.Number),
          datastoreIds: Schema.optional(Schema.Array(Schema.String)),
          networkIds: Schema.optional(Schema.Array(Schema.String)),
          provisioningState: Schema.optional(
            Schema.Literals([
              "Succeeded",
              "Failed",
              "Canceled",
              "Provisioning",
              "Updating",
              "Deleting",
              "Accepted",
              "Created",
            ]),
          ),
        }),
        location: Schema.String,
        extendedLocation: Schema.optional(
          Schema.Struct({
            type: Schema.optional(Schema.String),
            name: Schema.optional(Schema.String),
          }),
        ),
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
        tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        name: Schema.optional(Schema.String),
        id: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        kind: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<HostsListByResourceGroupOutput>;

// The operation
/**
 * Implements GET hosts in a resource group.
 *
 * List of hosts in a resource group.
 *
 * @param subscriptionId - The Subscription ID.
 * @param resourceGroupName - The Resource Group Name.
 * @param api-version - Client Api Version.
 */
export const HostsListByResourceGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: HostsListByResourceGroupInput,
    outputSchema: HostsListByResourceGroupOutput,
  }),
);
// Input Schema
export interface HostsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  hostName: string;
  tags?: Record<string, string>;
}
export const HostsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  hostName: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/hosts/{hostName}",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<HostsUpdateInput>;

// Output Schema
export interface HostsUpdateOutput {
  properties: {
    uuid?: string;
    vCenterId?: string;
    moRefId?: string;
    inventoryItemId?: string;
    moName?: string;
    statuses?: {
      type?: string;
      status?: string;
      reason?: string;
      message?: string;
      severity?: string;
      lastUpdatedAt?: string;
    }[];
    customResourceName?: string;
    overallMemoryUsageGB?: number;
    memorySizeGB?: number;
    overallCpuUsageMHz?: number;
    cpuMhz?: number;
    datastoreIds?: string[];
    networkIds?: string[];
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Provisioning"
      | "Updating"
      | "Deleting"
      | "Accepted"
      | "Created";
  };
  location: string;
  extendedLocation?: { type?: string; name?: string };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  tags?: Record<string, string>;
  name?: string;
  id?: string;
  type?: string;
  kind?: string;
}
export const HostsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.Struct({
    uuid: Schema.optional(Schema.String),
    vCenterId: Schema.optional(Schema.String),
    moRefId: Schema.optional(Schema.String),
    inventoryItemId: Schema.optional(Schema.String),
    moName: Schema.optional(Schema.String),
    statuses: Schema.optional(
      Schema.Array(
        Schema.Struct({
          type: Schema.optional(Schema.String),
          status: Schema.optional(Schema.String),
          reason: Schema.optional(Schema.String),
          message: Schema.optional(Schema.String),
          severity: Schema.optional(Schema.String),
          lastUpdatedAt: Schema.optional(Schema.String),
        }),
      ),
    ),
    customResourceName: Schema.optional(Schema.String),
    overallMemoryUsageGB: Schema.optional(Schema.Number),
    memorySizeGB: Schema.optional(Schema.Number),
    overallCpuUsageMHz: Schema.optional(Schema.Number),
    cpuMhz: Schema.optional(Schema.Number),
    datastoreIds: Schema.optional(Schema.Array(Schema.String)),
    networkIds: Schema.optional(Schema.Array(Schema.String)),
    provisioningState: Schema.optional(
      Schema.Literals([
        "Succeeded",
        "Failed",
        "Canceled",
        "Provisioning",
        "Updating",
        "Deleting",
        "Accepted",
        "Created",
      ]),
    ),
  }),
  location: Schema.String,
  extendedLocation: Schema.optional(
    Schema.Struct({
      type: Schema.optional(Schema.String),
      name: Schema.optional(Schema.String),
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
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  name: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<HostsUpdateOutput>;

// The operation
/**
 * Updates a host.
 *
 * API to update certain properties of the host resource.
 *
 * @param subscriptionId - The Subscription ID.
 * @param resourceGroupName - The Resource Group Name.
 * @param hostName - Name of the host.
 * @param api-version - Client Api Version.
 */
export const HostsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: HostsUpdateInput,
  outputSchema: HostsUpdateOutput,
}));
// Input Schema
export interface InventoryItemsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  vcenterName: string;
  inventoryItemName: string;
  properties: {
    inventoryType:
      | "ResourcePool"
      | "VirtualMachine"
      | "VirtualMachineTemplate"
      | "VirtualNetwork"
      | "Cluster"
      | "Datastore"
      | "Host";
    managedResourceId?: string;
    moRefId?: string;
    moName?: string;
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Provisioning"
      | "Updating"
      | "Deleting"
      | "Accepted"
      | "Created";
  };
  kind?: string;
}
export const InventoryItemsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vcenterName: Schema.String.pipe(T.PathParam()),
    inventoryItemName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      inventoryType: Schema.Literals([
        "ResourcePool",
        "VirtualMachine",
        "VirtualMachineTemplate",
        "VirtualNetwork",
        "Cluster",
        "Datastore",
        "Host",
      ]),
      managedResourceId: Schema.optional(Schema.String),
      moRefId: Schema.optional(Schema.String),
      moName: Schema.optional(Schema.String),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Succeeded",
          "Failed",
          "Canceled",
          "Provisioning",
          "Updating",
          "Deleting",
          "Accepted",
          "Created",
        ]),
      ),
    }),
    kind: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/vcenters/{vcenterName}/inventoryItems/{inventoryItemName}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<InventoryItemsCreateInput>;

// Output Schema
export interface InventoryItemsCreateOutput {
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
export const InventoryItemsCreateOutput =
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
  }) as unknown as Schema.Codec<InventoryItemsCreateOutput>;

// The operation
/**
 * Implements InventoryItem PUT method.
 *
 * Create Or Update InventoryItem.
 *
 * @param subscriptionId - The Subscription ID.
 * @param resourceGroupName - The Resource Group Name.
 * @param vcenterName - Name of the vCenter.
 * @param inventoryItemName - Name of the inventoryItem.
 * @param api-version - Client Api Version.
 */
export const InventoryItemsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: InventoryItemsCreateInput,
    outputSchema: InventoryItemsCreateOutput,
  }),
);
// Input Schema
export interface InventoryItemsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  vcenterName: string;
  inventoryItemName: string;
}
export const InventoryItemsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vcenterName: Schema.String.pipe(T.PathParam()),
    inventoryItemName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/vcenters/{vcenterName}/inventoryItems/{inventoryItemName}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<InventoryItemsDeleteInput>;

// Output Schema
export type InventoryItemsDeleteOutput = void;
export const InventoryItemsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<InventoryItemsDeleteOutput>;

// The operation
/**
 * Deletes an inventoryItem.
 *
 * Implements inventoryItem DELETE method.
 *
 * @param subscriptionId - The Subscription ID.
 * @param resourceGroupName - The Resource Group Name.
 * @param vcenterName - Name of the vCenter.
 * @param inventoryItemName - Name of the inventoryItem.
 * @param api-version - Client Api Version.
 */
export const InventoryItemsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: InventoryItemsDeleteInput,
    outputSchema: InventoryItemsDeleteOutput,
  }),
);
// Input Schema
export interface InventoryItemsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  vcenterName: string;
  inventoryItemName: string;
}
export const InventoryItemsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vcenterName: Schema.String.pipe(T.PathParam()),
    inventoryItemName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/vcenters/{vcenterName}/inventoryItems/{inventoryItemName}",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<InventoryItemsGetInput>;

// Output Schema
export interface InventoryItemsGetOutput {
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
export const InventoryItemsGetOutput =
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
  }) as unknown as Schema.Codec<InventoryItemsGetOutput>;

// The operation
/**
 * Gets InventoryItem.
 *
 * Implements InventoryItem GET method.
 *
 * @param subscriptionId - The Subscription ID.
 * @param resourceGroupName - The Resource Group Name.
 * @param vcenterName - Name of the vCenter.
 * @param inventoryItemName - Name of the inventoryItem.
 * @param api-version - Client Api Version.
 */
export const InventoryItemsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: InventoryItemsGetInput,
  outputSchema: InventoryItemsGetOutput,
}));
// Input Schema
export interface InventoryItemsListByVCenterInput {
  subscriptionId: string;
  resourceGroupName: string;
  vcenterName: string;
}
export const InventoryItemsListByVCenterInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vcenterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/vcenters/{vcenterName}/inventoryItems",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<InventoryItemsListByVCenterInput>;

// Output Schema
export interface InventoryItemsListByVCenterOutput {
  nextLink?: string;
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
}
export const InventoryItemsListByVCenterOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<InventoryItemsListByVCenterOutput>;

// The operation
/**
 * Implements GET inventoryItems in a vCenter.
 *
 * Returns the list of inventoryItems of the given vCenter.
 *
 * @param subscriptionId - The Subscription ID.
 * @param resourceGroupName - The Resource Group Name.
 * @param vcenterName - Name of the vCenter.
 * @param api-version - Client Api Version.
 */
export const InventoryItemsListByVCenter = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: InventoryItemsListByVCenterInput,
    outputSchema: InventoryItemsListByVCenterOutput,
  }),
);
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.ConnectedVMwarevSphere/operations",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<OperationsListInput>;

// Output Schema
export interface OperationsListOutput {
  nextLink?: string;
  value: {
    name?: string;
    isDataAction?: boolean;
    display?: {
      provider?: string;
      resource?: string;
      operation?: string;
      description?: string;
    };
  }[];
}
export const OperationsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nextLink: Schema.optional(Schema.String),
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
    }),
  ),
}) as unknown as Schema.Codec<OperationsListOutput>;

// The operation
/**
 * Returns list of all operations.
 *
 * @param api-version - Client Api Version.
 */
export const OperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface ResourcePoolsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourcePoolName: string;
  properties: {
    uuid?: string;
    vCenterId?: string;
    moRefId?: string;
    inventoryItemId?: string;
    moName?: string;
    cpuSharesLevel?: string;
    cpuReservationMHz?: number;
    cpuLimitMHz?: number;
    memSharesLevel?: string;
    memReservationMB?: number;
    memLimitMB?: number;
    memOverallUsageGB?: number;
    memCapacityGB?: number;
    cpuOverallUsageMHz?: number;
    cpuCapacityMHz?: number;
    customResourceName?: string;
    datastoreIds?: string[];
    networkIds?: string[];
    statuses?: {
      type?: string;
      status?: string;
      reason?: string;
      message?: string;
      severity?: string;
      lastUpdatedAt?: string;
    }[];
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Provisioning"
      | "Updating"
      | "Deleting"
      | "Accepted"
      | "Created";
  };
  location: string;
  extendedLocation?: { type?: string; name?: string };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  tags?: Record<string, string>;
  name?: string;
  id?: string;
  type?: string;
  kind?: string;
}
export const ResourcePoolsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourcePoolName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      uuid: Schema.optional(Schema.String),
      vCenterId: Schema.optional(Schema.String),
      moRefId: Schema.optional(Schema.String),
      inventoryItemId: Schema.optional(Schema.String),
      moName: Schema.optional(Schema.String),
      cpuSharesLevel: Schema.optional(Schema.String),
      cpuReservationMHz: Schema.optional(Schema.Number),
      cpuLimitMHz: Schema.optional(Schema.Number),
      memSharesLevel: Schema.optional(Schema.String),
      memReservationMB: Schema.optional(Schema.Number),
      memLimitMB: Schema.optional(Schema.Number),
      memOverallUsageGB: Schema.optional(Schema.Number),
      memCapacityGB: Schema.optional(Schema.Number),
      cpuOverallUsageMHz: Schema.optional(Schema.Number),
      cpuCapacityMHz: Schema.optional(Schema.Number),
      customResourceName: Schema.optional(Schema.String),
      datastoreIds: Schema.optional(Schema.Array(Schema.String)),
      networkIds: Schema.optional(Schema.Array(Schema.String)),
      statuses: Schema.optional(
        Schema.Array(
          Schema.Struct({
            type: Schema.optional(Schema.String),
            status: Schema.optional(Schema.String),
            reason: Schema.optional(Schema.String),
            message: Schema.optional(Schema.String),
            severity: Schema.optional(Schema.String),
            lastUpdatedAt: Schema.optional(Schema.String),
          }),
        ),
      ),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Succeeded",
          "Failed",
          "Canceled",
          "Provisioning",
          "Updating",
          "Deleting",
          "Accepted",
          "Created",
        ]),
      ),
    }),
    location: Schema.String,
    extendedLocation: Schema.optional(
      Schema.Struct({
        type: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
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
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/resourcePools/{resourcePoolName}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<ResourcePoolsCreateInput>;

// Output Schema
export interface ResourcePoolsCreateOutput {
  properties: {
    uuid?: string;
    vCenterId?: string;
    moRefId?: string;
    inventoryItemId?: string;
    moName?: string;
    cpuSharesLevel?: string;
    cpuReservationMHz?: number;
    cpuLimitMHz?: number;
    memSharesLevel?: string;
    memReservationMB?: number;
    memLimitMB?: number;
    memOverallUsageGB?: number;
    memCapacityGB?: number;
    cpuOverallUsageMHz?: number;
    cpuCapacityMHz?: number;
    customResourceName?: string;
    datastoreIds?: string[];
    networkIds?: string[];
    statuses?: {
      type?: string;
      status?: string;
      reason?: string;
      message?: string;
      severity?: string;
      lastUpdatedAt?: string;
    }[];
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Provisioning"
      | "Updating"
      | "Deleting"
      | "Accepted"
      | "Created";
  };
  location: string;
  extendedLocation?: { type?: string; name?: string };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  tags?: Record<string, string>;
  name?: string;
  id?: string;
  type?: string;
  kind?: string;
}
export const ResourcePoolsCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.Struct({
      uuid: Schema.optional(Schema.String),
      vCenterId: Schema.optional(Schema.String),
      moRefId: Schema.optional(Schema.String),
      inventoryItemId: Schema.optional(Schema.String),
      moName: Schema.optional(Schema.String),
      cpuSharesLevel: Schema.optional(Schema.String),
      cpuReservationMHz: Schema.optional(Schema.Number),
      cpuLimitMHz: Schema.optional(Schema.Number),
      memSharesLevel: Schema.optional(Schema.String),
      memReservationMB: Schema.optional(Schema.Number),
      memLimitMB: Schema.optional(Schema.Number),
      memOverallUsageGB: Schema.optional(Schema.Number),
      memCapacityGB: Schema.optional(Schema.Number),
      cpuOverallUsageMHz: Schema.optional(Schema.Number),
      cpuCapacityMHz: Schema.optional(Schema.Number),
      customResourceName: Schema.optional(Schema.String),
      datastoreIds: Schema.optional(Schema.Array(Schema.String)),
      networkIds: Schema.optional(Schema.Array(Schema.String)),
      statuses: Schema.optional(
        Schema.Array(
          Schema.Struct({
            type: Schema.optional(Schema.String),
            status: Schema.optional(Schema.String),
            reason: Schema.optional(Schema.String),
            message: Schema.optional(Schema.String),
            severity: Schema.optional(Schema.String),
            lastUpdatedAt: Schema.optional(Schema.String),
          }),
        ),
      ),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Succeeded",
          "Failed",
          "Canceled",
          "Provisioning",
          "Updating",
          "Deleting",
          "Accepted",
          "Created",
        ]),
      ),
    }),
    location: Schema.String,
    extendedLocation: Schema.optional(
      Schema.Struct({
        type: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
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
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ResourcePoolsCreateOutput>;

// The operation
/**
 * Implements resourcePool PUT method.
 *
 * Create Or Update resourcePool.
 *
 * @param subscriptionId - The Subscription ID.
 * @param resourceGroupName - The Resource Group Name.
 * @param resourcePoolName - Name of the resourcePool.
 * @param api-version - Client Api Version.
 */
export const ResourcePoolsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ResourcePoolsCreateInput,
  outputSchema: ResourcePoolsCreateOutput,
}));
// Input Schema
export interface ResourcePoolsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourcePoolName: string;
  force?: boolean;
}
export const ResourcePoolsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourcePoolName: Schema.String.pipe(T.PathParam()),
    force: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/resourcePools/{resourcePoolName}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<ResourcePoolsDeleteInput>;

// Output Schema
export type ResourcePoolsDeleteOutput = void;
export const ResourcePoolsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ResourcePoolsDeleteOutput>;

// The operation
/**
 * Deletes an resourcePool.
 *
 * Implements resourcePool DELETE method.
 *
 * @param subscriptionId - The Subscription ID.
 * @param resourceGroupName - The Resource Group Name.
 * @param resourcePoolName - Name of the resourcePool.
 * @param api-version - Client Api Version.
 * @param force - Whether force delete was specified.
 */
export const ResourcePoolsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ResourcePoolsDeleteInput,
  outputSchema: ResourcePoolsDeleteOutput,
}));
// Input Schema
export interface ResourcePoolsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourcePoolName: string;
}
export const ResourcePoolsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  resourcePoolName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/resourcePools/{resourcePoolName}",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<ResourcePoolsGetInput>;

// Output Schema
export interface ResourcePoolsGetOutput {
  properties: {
    uuid?: string;
    vCenterId?: string;
    moRefId?: string;
    inventoryItemId?: string;
    moName?: string;
    cpuSharesLevel?: string;
    cpuReservationMHz?: number;
    cpuLimitMHz?: number;
    memSharesLevel?: string;
    memReservationMB?: number;
    memLimitMB?: number;
    memOverallUsageGB?: number;
    memCapacityGB?: number;
    cpuOverallUsageMHz?: number;
    cpuCapacityMHz?: number;
    customResourceName?: string;
    datastoreIds?: string[];
    networkIds?: string[];
    statuses?: {
      type?: string;
      status?: string;
      reason?: string;
      message?: string;
      severity?: string;
      lastUpdatedAt?: string;
    }[];
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Provisioning"
      | "Updating"
      | "Deleting"
      | "Accepted"
      | "Created";
  };
  location: string;
  extendedLocation?: { type?: string; name?: string };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  tags?: Record<string, string>;
  name?: string;
  id?: string;
  type?: string;
  kind?: string;
}
export const ResourcePoolsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    properties: Schema.Struct({
      uuid: Schema.optional(Schema.String),
      vCenterId: Schema.optional(Schema.String),
      moRefId: Schema.optional(Schema.String),
      inventoryItemId: Schema.optional(Schema.String),
      moName: Schema.optional(Schema.String),
      cpuSharesLevel: Schema.optional(Schema.String),
      cpuReservationMHz: Schema.optional(Schema.Number),
      cpuLimitMHz: Schema.optional(Schema.Number),
      memSharesLevel: Schema.optional(Schema.String),
      memReservationMB: Schema.optional(Schema.Number),
      memLimitMB: Schema.optional(Schema.Number),
      memOverallUsageGB: Schema.optional(Schema.Number),
      memCapacityGB: Schema.optional(Schema.Number),
      cpuOverallUsageMHz: Schema.optional(Schema.Number),
      cpuCapacityMHz: Schema.optional(Schema.Number),
      customResourceName: Schema.optional(Schema.String),
      datastoreIds: Schema.optional(Schema.Array(Schema.String)),
      networkIds: Schema.optional(Schema.Array(Schema.String)),
      statuses: Schema.optional(
        Schema.Array(
          Schema.Struct({
            type: Schema.optional(Schema.String),
            status: Schema.optional(Schema.String),
            reason: Schema.optional(Schema.String),
            message: Schema.optional(Schema.String),
            severity: Schema.optional(Schema.String),
            lastUpdatedAt: Schema.optional(Schema.String),
          }),
        ),
      ),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Succeeded",
          "Failed",
          "Canceled",
          "Provisioning",
          "Updating",
          "Deleting",
          "Accepted",
          "Created",
        ]),
      ),
    }),
    location: Schema.String,
    extendedLocation: Schema.optional(
      Schema.Struct({
        type: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
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
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  },
) as unknown as Schema.Codec<ResourcePoolsGetOutput>;

// The operation
/**
 * Gets a resourcePool.
 *
 * Implements resourcePool GET method.
 *
 * @param subscriptionId - The Subscription ID.
 * @param resourceGroupName - The Resource Group Name.
 * @param resourcePoolName - Name of the resourcePool.
 * @param api-version - Client Api Version.
 */
export const ResourcePoolsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ResourcePoolsGetInput,
  outputSchema: ResourcePoolsGetOutput,
}));
// Input Schema
export interface ResourcePoolsListInput {
  subscriptionId: string;
}
export const ResourcePoolsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.ConnectedVMwarevSphere/resourcePools",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<ResourcePoolsListInput>;

// Output Schema
export interface ResourcePoolsListOutput {
  nextLink?: string;
  value: {
    properties: {
      uuid?: string;
      vCenterId?: string;
      moRefId?: string;
      inventoryItemId?: string;
      moName?: string;
      cpuSharesLevel?: string;
      cpuReservationMHz?: number;
      cpuLimitMHz?: number;
      memSharesLevel?: string;
      memReservationMB?: number;
      memLimitMB?: number;
      memOverallUsageGB?: number;
      memCapacityGB?: number;
      cpuOverallUsageMHz?: number;
      cpuCapacityMHz?: number;
      customResourceName?: string;
      datastoreIds?: string[];
      networkIds?: string[];
      statuses?: {
        type?: string;
        status?: string;
        reason?: string;
        message?: string;
        severity?: string;
        lastUpdatedAt?: string;
      }[];
      provisioningState?:
        | "Succeeded"
        | "Failed"
        | "Canceled"
        | "Provisioning"
        | "Updating"
        | "Deleting"
        | "Accepted"
        | "Created";
    };
    location: string;
    extendedLocation?: { type?: string; name?: string };
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
    tags?: Record<string, string>;
    name?: string;
    id?: string;
    type?: string;
    kind?: string;
  }[];
}
export const ResourcePoolsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.Array(
      Schema.Struct({
        properties: Schema.Struct({
          uuid: Schema.optional(Schema.String),
          vCenterId: Schema.optional(Schema.String),
          moRefId: Schema.optional(Schema.String),
          inventoryItemId: Schema.optional(Schema.String),
          moName: Schema.optional(Schema.String),
          cpuSharesLevel: Schema.optional(Schema.String),
          cpuReservationMHz: Schema.optional(Schema.Number),
          cpuLimitMHz: Schema.optional(Schema.Number),
          memSharesLevel: Schema.optional(Schema.String),
          memReservationMB: Schema.optional(Schema.Number),
          memLimitMB: Schema.optional(Schema.Number),
          memOverallUsageGB: Schema.optional(Schema.Number),
          memCapacityGB: Schema.optional(Schema.Number),
          cpuOverallUsageMHz: Schema.optional(Schema.Number),
          cpuCapacityMHz: Schema.optional(Schema.Number),
          customResourceName: Schema.optional(Schema.String),
          datastoreIds: Schema.optional(Schema.Array(Schema.String)),
          networkIds: Schema.optional(Schema.Array(Schema.String)),
          statuses: Schema.optional(
            Schema.Array(
              Schema.Struct({
                type: Schema.optional(Schema.String),
                status: Schema.optional(Schema.String),
                reason: Schema.optional(Schema.String),
                message: Schema.optional(Schema.String),
                severity: Schema.optional(Schema.String),
                lastUpdatedAt: Schema.optional(Schema.String),
              }),
            ),
          ),
          provisioningState: Schema.optional(
            Schema.Literals([
              "Succeeded",
              "Failed",
              "Canceled",
              "Provisioning",
              "Updating",
              "Deleting",
              "Accepted",
              "Created",
            ]),
          ),
        }),
        location: Schema.String,
        extendedLocation: Schema.optional(
          Schema.Struct({
            type: Schema.optional(Schema.String),
            name: Schema.optional(Schema.String),
          }),
        ),
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
        tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        name: Schema.optional(Schema.String),
        id: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        kind: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<ResourcePoolsListOutput>;

// The operation
/**
 * Implements GET resourcePools in a subscription.
 *
 * List of resourcePools in a subscription.
 *
 * @param subscriptionId - The Subscription ID.
 * @param api-version - Client Api Version.
 */
export const ResourcePoolsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ResourcePoolsListInput,
  outputSchema: ResourcePoolsListOutput,
}));
// Input Schema
export interface ResourcePoolsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const ResourcePoolsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/resourcePools",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<ResourcePoolsListByResourceGroupInput>;

// Output Schema
export interface ResourcePoolsListByResourceGroupOutput {
  nextLink?: string;
  value: {
    properties: {
      uuid?: string;
      vCenterId?: string;
      moRefId?: string;
      inventoryItemId?: string;
      moName?: string;
      cpuSharesLevel?: string;
      cpuReservationMHz?: number;
      cpuLimitMHz?: number;
      memSharesLevel?: string;
      memReservationMB?: number;
      memLimitMB?: number;
      memOverallUsageGB?: number;
      memCapacityGB?: number;
      cpuOverallUsageMHz?: number;
      cpuCapacityMHz?: number;
      customResourceName?: string;
      datastoreIds?: string[];
      networkIds?: string[];
      statuses?: {
        type?: string;
        status?: string;
        reason?: string;
        message?: string;
        severity?: string;
        lastUpdatedAt?: string;
      }[];
      provisioningState?:
        | "Succeeded"
        | "Failed"
        | "Canceled"
        | "Provisioning"
        | "Updating"
        | "Deleting"
        | "Accepted"
        | "Created";
    };
    location: string;
    extendedLocation?: { type?: string; name?: string };
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
    tags?: Record<string, string>;
    name?: string;
    id?: string;
    type?: string;
    kind?: string;
  }[];
}
export const ResourcePoolsListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.Array(
      Schema.Struct({
        properties: Schema.Struct({
          uuid: Schema.optional(Schema.String),
          vCenterId: Schema.optional(Schema.String),
          moRefId: Schema.optional(Schema.String),
          inventoryItemId: Schema.optional(Schema.String),
          moName: Schema.optional(Schema.String),
          cpuSharesLevel: Schema.optional(Schema.String),
          cpuReservationMHz: Schema.optional(Schema.Number),
          cpuLimitMHz: Schema.optional(Schema.Number),
          memSharesLevel: Schema.optional(Schema.String),
          memReservationMB: Schema.optional(Schema.Number),
          memLimitMB: Schema.optional(Schema.Number),
          memOverallUsageGB: Schema.optional(Schema.Number),
          memCapacityGB: Schema.optional(Schema.Number),
          cpuOverallUsageMHz: Schema.optional(Schema.Number),
          cpuCapacityMHz: Schema.optional(Schema.Number),
          customResourceName: Schema.optional(Schema.String),
          datastoreIds: Schema.optional(Schema.Array(Schema.String)),
          networkIds: Schema.optional(Schema.Array(Schema.String)),
          statuses: Schema.optional(
            Schema.Array(
              Schema.Struct({
                type: Schema.optional(Schema.String),
                status: Schema.optional(Schema.String),
                reason: Schema.optional(Schema.String),
                message: Schema.optional(Schema.String),
                severity: Schema.optional(Schema.String),
                lastUpdatedAt: Schema.optional(Schema.String),
              }),
            ),
          ),
          provisioningState: Schema.optional(
            Schema.Literals([
              "Succeeded",
              "Failed",
              "Canceled",
              "Provisioning",
              "Updating",
              "Deleting",
              "Accepted",
              "Created",
            ]),
          ),
        }),
        location: Schema.String,
        extendedLocation: Schema.optional(
          Schema.Struct({
            type: Schema.optional(Schema.String),
            name: Schema.optional(Schema.String),
          }),
        ),
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
        tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        name: Schema.optional(Schema.String),
        id: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        kind: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<ResourcePoolsListByResourceGroupOutput>;

// The operation
/**
 * Implements GET resourcePools in a resource group.
 *
 * List of resourcePools in a resource group.
 *
 * @param subscriptionId - The Subscription ID.
 * @param resourceGroupName - The Resource Group Name.
 * @param api-version - Client Api Version.
 */
export const ResourcePoolsListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ResourcePoolsListByResourceGroupInput,
    outputSchema: ResourcePoolsListByResourceGroupOutput,
  }));
// Input Schema
export interface ResourcePoolsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourcePoolName: string;
  tags?: Record<string, string>;
}
export const ResourcePoolsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourcePoolName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/resourcePools/{resourcePoolName}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<ResourcePoolsUpdateInput>;

// Output Schema
export interface ResourcePoolsUpdateOutput {
  properties: {
    uuid?: string;
    vCenterId?: string;
    moRefId?: string;
    inventoryItemId?: string;
    moName?: string;
    cpuSharesLevel?: string;
    cpuReservationMHz?: number;
    cpuLimitMHz?: number;
    memSharesLevel?: string;
    memReservationMB?: number;
    memLimitMB?: number;
    memOverallUsageGB?: number;
    memCapacityGB?: number;
    cpuOverallUsageMHz?: number;
    cpuCapacityMHz?: number;
    customResourceName?: string;
    datastoreIds?: string[];
    networkIds?: string[];
    statuses?: {
      type?: string;
      status?: string;
      reason?: string;
      message?: string;
      severity?: string;
      lastUpdatedAt?: string;
    }[];
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Provisioning"
      | "Updating"
      | "Deleting"
      | "Accepted"
      | "Created";
  };
  location: string;
  extendedLocation?: { type?: string; name?: string };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  tags?: Record<string, string>;
  name?: string;
  id?: string;
  type?: string;
  kind?: string;
}
export const ResourcePoolsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.Struct({
      uuid: Schema.optional(Schema.String),
      vCenterId: Schema.optional(Schema.String),
      moRefId: Schema.optional(Schema.String),
      inventoryItemId: Schema.optional(Schema.String),
      moName: Schema.optional(Schema.String),
      cpuSharesLevel: Schema.optional(Schema.String),
      cpuReservationMHz: Schema.optional(Schema.Number),
      cpuLimitMHz: Schema.optional(Schema.Number),
      memSharesLevel: Schema.optional(Schema.String),
      memReservationMB: Schema.optional(Schema.Number),
      memLimitMB: Schema.optional(Schema.Number),
      memOverallUsageGB: Schema.optional(Schema.Number),
      memCapacityGB: Schema.optional(Schema.Number),
      cpuOverallUsageMHz: Schema.optional(Schema.Number),
      cpuCapacityMHz: Schema.optional(Schema.Number),
      customResourceName: Schema.optional(Schema.String),
      datastoreIds: Schema.optional(Schema.Array(Schema.String)),
      networkIds: Schema.optional(Schema.Array(Schema.String)),
      statuses: Schema.optional(
        Schema.Array(
          Schema.Struct({
            type: Schema.optional(Schema.String),
            status: Schema.optional(Schema.String),
            reason: Schema.optional(Schema.String),
            message: Schema.optional(Schema.String),
            severity: Schema.optional(Schema.String),
            lastUpdatedAt: Schema.optional(Schema.String),
          }),
        ),
      ),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Succeeded",
          "Failed",
          "Canceled",
          "Provisioning",
          "Updating",
          "Deleting",
          "Accepted",
          "Created",
        ]),
      ),
    }),
    location: Schema.String,
    extendedLocation: Schema.optional(
      Schema.Struct({
        type: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
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
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ResourcePoolsUpdateOutput>;

// The operation
/**
 * Updates a resourcePool.
 *
 * API to update certain properties of the resourcePool resource.
 *
 * @param subscriptionId - The Subscription ID.
 * @param resourceGroupName - The Resource Group Name.
 * @param resourcePoolName - Name of the resourcePool.
 * @param api-version - Client Api Version.
 */
export const ResourcePoolsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ResourcePoolsUpdateInput,
  outputSchema: ResourcePoolsUpdateOutput,
}));
// Input Schema
export interface VCentersCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  vcenterName: string;
  properties: {
    uuid?: string;
    fqdn: string;
    port?: number;
    version?: string;
    instanceUuid?: string;
    connectionStatus?: string;
    customResourceName?: string;
    credentials?: {
      username?: string;
      password?: string | Redacted.Redacted<string>;
    };
    statuses?: {
      type?: string;
      status?: string;
      reason?: string;
      message?: string;
      severity?: string;
      lastUpdatedAt?: string;
    }[];
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Provisioning"
      | "Updating"
      | "Deleting"
      | "Accepted"
      | "Created";
  };
  location: string;
  extendedLocation?: { type?: string; name?: string };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  tags?: Record<string, string>;
  name?: string;
  id?: string;
  type?: string;
  kind?: string;
}
export const VCentersCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  vcenterName: Schema.String.pipe(T.PathParam()),
  properties: Schema.Struct({
    uuid: Schema.optional(Schema.String),
    fqdn: Schema.String,
    port: Schema.optional(Schema.Number),
    version: Schema.optional(Schema.String),
    instanceUuid: Schema.optional(Schema.String),
    connectionStatus: Schema.optional(Schema.String),
    customResourceName: Schema.optional(Schema.String),
    credentials: Schema.optional(
      Schema.Struct({
        username: Schema.optional(Schema.String),
        password: Schema.optional(SensitiveString),
      }),
    ),
    statuses: Schema.optional(
      Schema.Array(
        Schema.Struct({
          type: Schema.optional(Schema.String),
          status: Schema.optional(Schema.String),
          reason: Schema.optional(Schema.String),
          message: Schema.optional(Schema.String),
          severity: Schema.optional(Schema.String),
          lastUpdatedAt: Schema.optional(Schema.String),
        }),
      ),
    ),
    provisioningState: Schema.optional(
      Schema.Literals([
        "Succeeded",
        "Failed",
        "Canceled",
        "Provisioning",
        "Updating",
        "Deleting",
        "Accepted",
        "Created",
      ]),
    ),
  }),
  location: Schema.String,
  extendedLocation: Schema.optional(
    Schema.Struct({
      type: Schema.optional(Schema.String),
      name: Schema.optional(Schema.String),
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
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  name: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/vcenters/{vcenterName}",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<VCentersCreateInput>;

// Output Schema
export interface VCentersCreateOutput {
  properties: {
    uuid?: string;
    fqdn: string;
    port?: number;
    version?: string;
    instanceUuid?: string;
    connectionStatus?: string;
    customResourceName?: string;
    credentials?: { username?: string; password?: Redacted.Redacted<string> };
    statuses?: {
      type?: string;
      status?: string;
      reason?: string;
      message?: string;
      severity?: string;
      lastUpdatedAt?: string;
    }[];
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Provisioning"
      | "Updating"
      | "Deleting"
      | "Accepted"
      | "Created";
  };
  location: string;
  extendedLocation?: { type?: string; name?: string };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  tags?: Record<string, string>;
  name?: string;
  id?: string;
  type?: string;
  kind?: string;
}
export const VCentersCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.Struct({
    uuid: Schema.optional(Schema.String),
    fqdn: Schema.String,
    port: Schema.optional(Schema.Number),
    version: Schema.optional(Schema.String),
    instanceUuid: Schema.optional(Schema.String),
    connectionStatus: Schema.optional(Schema.String),
    customResourceName: Schema.optional(Schema.String),
    credentials: Schema.optional(
      Schema.Struct({
        username: Schema.optional(Schema.String),
        password: Schema.optional(SensitiveOutputString),
      }),
    ),
    statuses: Schema.optional(
      Schema.Array(
        Schema.Struct({
          type: Schema.optional(Schema.String),
          status: Schema.optional(Schema.String),
          reason: Schema.optional(Schema.String),
          message: Schema.optional(Schema.String),
          severity: Schema.optional(Schema.String),
          lastUpdatedAt: Schema.optional(Schema.String),
        }),
      ),
    ),
    provisioningState: Schema.optional(
      Schema.Literals([
        "Succeeded",
        "Failed",
        "Canceled",
        "Provisioning",
        "Updating",
        "Deleting",
        "Accepted",
        "Created",
      ]),
    ),
  }),
  location: Schema.String,
  extendedLocation: Schema.optional(
    Schema.Struct({
      type: Schema.optional(Schema.String),
      name: Schema.optional(Schema.String),
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
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  name: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<VCentersCreateOutput>;

// The operation
/**
 * Implements vCenter PUT method.
 *
 * Create Or Update vCenter.
 *
 * @param subscriptionId - The Subscription ID.
 * @param resourceGroupName - The Resource Group Name.
 * @param vcenterName - Name of the vCenter.
 * @param api-version - Client Api Version.
 */
export const VCentersCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VCentersCreateInput,
  outputSchema: VCentersCreateOutput,
}));
// Input Schema
export interface VCentersDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  vcenterName: string;
  force?: boolean;
}
export const VCentersDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  vcenterName: Schema.String.pipe(T.PathParam()),
  force: Schema.optional(Schema.Boolean),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/vcenters/{vcenterName}",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<VCentersDeleteInput>;

// Output Schema
export type VCentersDeleteOutput = void;
export const VCentersDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<VCentersDeleteOutput>;

// The operation
/**
 * Deletes an vCenter.
 *
 * Implements vCenter DELETE method.
 *
 * @param subscriptionId - The Subscription ID.
 * @param resourceGroupName - The Resource Group Name.
 * @param vcenterName - Name of the vCenter.
 * @param api-version - Client Api Version.
 * @param force - Whether force delete was specified.
 */
export const VCentersDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VCentersDeleteInput,
  outputSchema: VCentersDeleteOutput,
}));
// Input Schema
export interface VCentersGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  vcenterName: string;
}
export const VCentersGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  vcenterName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/vcenters/{vcenterName}",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<VCentersGetInput>;

// Output Schema
export interface VCentersGetOutput {
  properties: {
    uuid?: string;
    fqdn: string;
    port?: number;
    version?: string;
    instanceUuid?: string;
    connectionStatus?: string;
    customResourceName?: string;
    credentials?: { username?: string; password?: Redacted.Redacted<string> };
    statuses?: {
      type?: string;
      status?: string;
      reason?: string;
      message?: string;
      severity?: string;
      lastUpdatedAt?: string;
    }[];
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Provisioning"
      | "Updating"
      | "Deleting"
      | "Accepted"
      | "Created";
  };
  location: string;
  extendedLocation?: { type?: string; name?: string };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  tags?: Record<string, string>;
  name?: string;
  id?: string;
  type?: string;
  kind?: string;
}
export const VCentersGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.Struct({
    uuid: Schema.optional(Schema.String),
    fqdn: Schema.String,
    port: Schema.optional(Schema.Number),
    version: Schema.optional(Schema.String),
    instanceUuid: Schema.optional(Schema.String),
    connectionStatus: Schema.optional(Schema.String),
    customResourceName: Schema.optional(Schema.String),
    credentials: Schema.optional(
      Schema.Struct({
        username: Schema.optional(Schema.String),
        password: Schema.optional(SensitiveOutputString),
      }),
    ),
    statuses: Schema.optional(
      Schema.Array(
        Schema.Struct({
          type: Schema.optional(Schema.String),
          status: Schema.optional(Schema.String),
          reason: Schema.optional(Schema.String),
          message: Schema.optional(Schema.String),
          severity: Schema.optional(Schema.String),
          lastUpdatedAt: Schema.optional(Schema.String),
        }),
      ),
    ),
    provisioningState: Schema.optional(
      Schema.Literals([
        "Succeeded",
        "Failed",
        "Canceled",
        "Provisioning",
        "Updating",
        "Deleting",
        "Accepted",
        "Created",
      ]),
    ),
  }),
  location: Schema.String,
  extendedLocation: Schema.optional(
    Schema.Struct({
      type: Schema.optional(Schema.String),
      name: Schema.optional(Schema.String),
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
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  name: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<VCentersGetOutput>;

// The operation
/**
 * Gets a vCenter.
 *
 * Implements vCenter GET method.
 *
 * @param subscriptionId - The Subscription ID.
 * @param resourceGroupName - The Resource Group Name.
 * @param vcenterName - Name of the vCenter.
 * @param api-version - Client Api Version.
 */
export const VCentersGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VCentersGetInput,
  outputSchema: VCentersGetOutput,
}));
// Input Schema
export interface VCentersListInput {
  subscriptionId: string;
}
export const VCentersListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.ConnectedVMwarevSphere/vcenters",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<VCentersListInput>;

// Output Schema
export interface VCentersListOutput {
  nextLink?: string;
  value: {
    properties: {
      uuid?: string;
      fqdn: string;
      port?: number;
      version?: string;
      instanceUuid?: string;
      connectionStatus?: string;
      customResourceName?: string;
      credentials?: { username?: string; password?: Redacted.Redacted<string> };
      statuses?: {
        type?: string;
        status?: string;
        reason?: string;
        message?: string;
        severity?: string;
        lastUpdatedAt?: string;
      }[];
      provisioningState?:
        | "Succeeded"
        | "Failed"
        | "Canceled"
        | "Provisioning"
        | "Updating"
        | "Deleting"
        | "Accepted"
        | "Created";
    };
    location: string;
    extendedLocation?: { type?: string; name?: string };
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
    tags?: Record<string, string>;
    name?: string;
    id?: string;
    type?: string;
    kind?: string;
  }[];
}
export const VCentersListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nextLink: Schema.optional(Schema.String),
  value: Schema.Array(
    Schema.Struct({
      properties: Schema.Struct({
        uuid: Schema.optional(Schema.String),
        fqdn: Schema.String,
        port: Schema.optional(Schema.Number),
        version: Schema.optional(Schema.String),
        instanceUuid: Schema.optional(Schema.String),
        connectionStatus: Schema.optional(Schema.String),
        customResourceName: Schema.optional(Schema.String),
        credentials: Schema.optional(
          Schema.Struct({
            username: Schema.optional(Schema.String),
            password: Schema.optional(SensitiveOutputString),
          }),
        ),
        statuses: Schema.optional(
          Schema.Array(
            Schema.Struct({
              type: Schema.optional(Schema.String),
              status: Schema.optional(Schema.String),
              reason: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              severity: Schema.optional(Schema.String),
              lastUpdatedAt: Schema.optional(Schema.String),
            }),
          ),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Provisioning",
            "Updating",
            "Deleting",
            "Accepted",
            "Created",
          ]),
        ),
      }),
      location: Schema.String,
      extendedLocation: Schema.optional(
        Schema.Struct({
          type: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
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
      tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      name: Schema.optional(Schema.String),
      id: Schema.optional(Schema.String),
      type: Schema.optional(Schema.String),
      kind: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<VCentersListOutput>;

// The operation
/**
 * Implements GET vCenters in a subscription.
 *
 * List of vCenters in a subscription.
 *
 * @param subscriptionId - The Subscription ID.
 * @param api-version - Client Api Version.
 */
export const VCentersList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VCentersListInput,
  outputSchema: VCentersListOutput,
}));
// Input Schema
export interface VCentersListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const VCentersListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/vcenters",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<VCentersListByResourceGroupInput>;

// Output Schema
export interface VCentersListByResourceGroupOutput {
  nextLink?: string;
  value: {
    properties: {
      uuid?: string;
      fqdn: string;
      port?: number;
      version?: string;
      instanceUuid?: string;
      connectionStatus?: string;
      customResourceName?: string;
      credentials?: { username?: string; password?: Redacted.Redacted<string> };
      statuses?: {
        type?: string;
        status?: string;
        reason?: string;
        message?: string;
        severity?: string;
        lastUpdatedAt?: string;
      }[];
      provisioningState?:
        | "Succeeded"
        | "Failed"
        | "Canceled"
        | "Provisioning"
        | "Updating"
        | "Deleting"
        | "Accepted"
        | "Created";
    };
    location: string;
    extendedLocation?: { type?: string; name?: string };
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
    tags?: Record<string, string>;
    name?: string;
    id?: string;
    type?: string;
    kind?: string;
  }[];
}
export const VCentersListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.Array(
      Schema.Struct({
        properties: Schema.Struct({
          uuid: Schema.optional(Schema.String),
          fqdn: Schema.String,
          port: Schema.optional(Schema.Number),
          version: Schema.optional(Schema.String),
          instanceUuid: Schema.optional(Schema.String),
          connectionStatus: Schema.optional(Schema.String),
          customResourceName: Schema.optional(Schema.String),
          credentials: Schema.optional(
            Schema.Struct({
              username: Schema.optional(Schema.String),
              password: Schema.optional(SensitiveOutputString),
            }),
          ),
          statuses: Schema.optional(
            Schema.Array(
              Schema.Struct({
                type: Schema.optional(Schema.String),
                status: Schema.optional(Schema.String),
                reason: Schema.optional(Schema.String),
                message: Schema.optional(Schema.String),
                severity: Schema.optional(Schema.String),
                lastUpdatedAt: Schema.optional(Schema.String),
              }),
            ),
          ),
          provisioningState: Schema.optional(
            Schema.Literals([
              "Succeeded",
              "Failed",
              "Canceled",
              "Provisioning",
              "Updating",
              "Deleting",
              "Accepted",
              "Created",
            ]),
          ),
        }),
        location: Schema.String,
        extendedLocation: Schema.optional(
          Schema.Struct({
            type: Schema.optional(Schema.String),
            name: Schema.optional(Schema.String),
          }),
        ),
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
        tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        name: Schema.optional(Schema.String),
        id: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        kind: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<VCentersListByResourceGroupOutput>;

// The operation
/**
 * Implements GET vCenters in a resource group.
 *
 * List of vCenters in a resource group.
 *
 * @param subscriptionId - The Subscription ID.
 * @param resourceGroupName - The Resource Group Name.
 * @param api-version - Client Api Version.
 */
export const VCentersListByResourceGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VCentersListByResourceGroupInput,
    outputSchema: VCentersListByResourceGroupOutput,
  }),
);
// Input Schema
export interface VCentersUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  vcenterName: string;
  tags?: Record<string, string>;
}
export const VCentersUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  vcenterName: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/vcenters/{vcenterName}",
    apiVersion: "2023-12-01",
  }),
) as unknown as Schema.Codec<VCentersUpdateInput>;

// Output Schema
export interface VCentersUpdateOutput {
  properties: {
    uuid?: string;
    fqdn: string;
    port?: number;
    version?: string;
    instanceUuid?: string;
    connectionStatus?: string;
    customResourceName?: string;
    credentials?: { username?: string; password?: Redacted.Redacted<string> };
    statuses?: {
      type?: string;
      status?: string;
      reason?: string;
      message?: string;
      severity?: string;
      lastUpdatedAt?: string;
    }[];
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Provisioning"
      | "Updating"
      | "Deleting"
      | "Accepted"
      | "Created";
  };
  location: string;
  extendedLocation?: { type?: string; name?: string };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  tags?: Record<string, string>;
  name?: string;
  id?: string;
  type?: string;
  kind?: string;
}
export const VCentersUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.Struct({
    uuid: Schema.optional(Schema.String),
    fqdn: Schema.String,
    port: Schema.optional(Schema.Number),
    version: Schema.optional(Schema.String),
    instanceUuid: Schema.optional(Schema.String),
    connectionStatus: Schema.optional(Schema.String),
    customResourceName: Schema.optional(Schema.String),
    credentials: Schema.optional(
      Schema.Struct({
        username: Schema.optional(Schema.String),
        password: Schema.optional(SensitiveOutputString),
      }),
    ),
    statuses: Schema.optional(
      Schema.Array(
        Schema.Struct({
          type: Schema.optional(Schema.String),
          status: Schema.optional(Schema.String),
          reason: Schema.optional(Schema.String),
          message: Schema.optional(Schema.String),
          severity: Schema.optional(Schema.String),
          lastUpdatedAt: Schema.optional(Schema.String),
        }),
      ),
    ),
    provisioningState: Schema.optional(
      Schema.Literals([
        "Succeeded",
        "Failed",
        "Canceled",
        "Provisioning",
        "Updating",
        "Deleting",
        "Accepted",
        "Created",
      ]),
    ),
  }),
  location: Schema.String,
  extendedLocation: Schema.optional(
    Schema.Struct({
      type: Schema.optional(Schema.String),
      name: Schema.optional(Schema.String),
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
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  name: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<VCentersUpdateOutput>;

// The operation
/**
 * Updates a vCenter.
 *
 * API to update certain properties of the vCenter resource.
 *
 * @param subscriptionId - The Subscription ID.
 * @param resourceGroupName - The Resource Group Name.
 * @param vcenterName - Name of the vCenter.
 * @param api-version - Client Api Version.
 */
export const VCentersUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VCentersUpdateInput,
  outputSchema: VCentersUpdateOutput,
}));
// Input Schema
export interface VirtualMachineInstancesCreateOrUpdateInput {
  resourceUri: string;
  properties: {
    placementProfile?: {
      resourcePoolId?: string;
      clusterId?: string;
      hostId?: string;
      datastoreId?: string;
    };
    osProfile?: {
      computerName?: string;
      adminUsername?: string;
      adminPassword?: string | Redacted.Redacted<string>;
      guestId?: string;
      osType?: "Windows" | "Linux" | "Other";
      osSku?: string;
      toolsRunningStatus?: string;
      toolsVersionStatus?: string;
      toolsVersion?: string;
      windowsConfiguration?: {
        fullName?: string;
        orgName?: string;
        domainName?: string;
        domainUsername?: string;
        domainUserPassword?: string | Redacted.Redacted<string>;
        workGroupName?: string;
        productId?: string;
        autoLogon?: boolean;
        autoLogonCount?: number;
        timeZone?: string;
        firstLogonCommands?: string[];
      };
    };
    hardwareProfile?: {
      memorySizeMB?: number;
      numCPUs?: number;
      numCoresPerSocket?: number;
      cpuHotAddEnabled?: boolean;
      cpuHotRemoveEnabled?: boolean;
      memoryHotAddEnabled?: boolean;
    };
    networkProfile?: {
      networkInterfaces?: {
        name?: string;
        label?: string;
        ipAddresses?: string[];
        macAddress?: string;
        networkId?: string;
        nicType?:
          | "vmxnet3"
          | "vmxnet2"
          | "vmxnet"
          | "e1000"
          | "e1000e"
          | "pcnet32";
        powerOnBoot?: "enabled" | "disabled";
        networkMoRefId?: string;
        networkMoName?: string;
        deviceKey?: number;
        ipSettings?: {
          allocationMethod?:
            | "unset"
            | "dynamic"
            | "static"
            | "linklayer"
            | "random"
            | "other";
          dnsServers?: string[];
          gateway?: string[];
          ipAddress?: string;
          subnetMask?: string;
          primaryWinsServer?: string;
          secondaryWinsServer?: string;
          ipAddressInfo?: {
            allocationMethod?: string;
            ipAddress?: string;
            subnetMask?: string;
          }[];
        };
      }[];
    };
    storageProfile?: {
      disks?: {
        name?: string;
        label?: string;
        diskObjectId?: string;
        diskSizeGB?: number;
        deviceKey?: number;
        diskMode?:
          | "persistent"
          | "independent_persistent"
          | "independent_nonpersistent";
        controllerKey?: number;
        unitNumber?: number;
        deviceName?: string;
        diskType?:
          | "flat"
          | "pmem"
          | "rawphysical"
          | "rawvirtual"
          | "sparse"
          | "sesparse"
          | "unknown";
      }[];
      scsiControllers?: {
        type?: "lsilogic" | "buslogic" | "pvscsi" | "lsilogicsas";
        controllerKey?: number;
        busNumber?: number;
        scsiCtlrUnitNumber?: number;
        sharing?: "noSharing" | "physicalSharing" | "virtualSharing";
      }[];
    };
    securityProfile?: { uefiSettings?: { secureBootEnabled?: boolean } };
    infrastructureProfile?: {
      templateId?: string;
      vCenterId?: string;
      moRefId?: string;
      inventoryItemId?: string;
      moName?: string;
      folderPath?: string;
      instanceUuid?: string;
      smbiosUuid?: string;
      firmwareType?: "bios" | "efi";
      customResourceName?: string;
    };
    powerState?: string;
    statuses?: {
      type?: string;
      status?: string;
      reason?: string;
      message?: string;
      severity?: string;
      lastUpdatedAt?: string;
    }[];
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Provisioning"
      | "Updating"
      | "Deleting"
      | "Accepted"
      | "Created";
    resourceUid?: string;
  };
  extendedLocation?: { type?: string; name?: string };
}
export const VirtualMachineInstancesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      placementProfile: Schema.optional(
        Schema.Struct({
          resourcePoolId: Schema.optional(Schema.String),
          clusterId: Schema.optional(Schema.String),
          hostId: Schema.optional(Schema.String),
          datastoreId: Schema.optional(Schema.String),
        }),
      ),
      osProfile: Schema.optional(
        Schema.Struct({
          computerName: Schema.optional(Schema.String),
          adminUsername: Schema.optional(Schema.String),
          adminPassword: Schema.optional(SensitiveString),
          guestId: Schema.optional(Schema.String),
          osType: Schema.optional(
            Schema.Literals(["Windows", "Linux", "Other"]),
          ),
          osSku: Schema.optional(Schema.String),
          toolsRunningStatus: Schema.optional(Schema.String),
          toolsVersionStatus: Schema.optional(Schema.String),
          toolsVersion: Schema.optional(Schema.String),
          windowsConfiguration: Schema.optional(
            Schema.Struct({
              fullName: Schema.optional(Schema.String),
              orgName: Schema.optional(Schema.String),
              domainName: Schema.optional(Schema.String),
              domainUsername: Schema.optional(Schema.String),
              domainUserPassword: Schema.optional(SensitiveString),
              workGroupName: Schema.optional(Schema.String),
              productId: Schema.optional(Schema.String),
              autoLogon: Schema.optional(Schema.Boolean),
              autoLogonCount: Schema.optional(Schema.Number),
              timeZone: Schema.optional(Schema.String),
              firstLogonCommands: Schema.optional(Schema.Array(Schema.String)),
            }),
          ),
        }),
      ),
      hardwareProfile: Schema.optional(
        Schema.Struct({
          memorySizeMB: Schema.optional(Schema.Number),
          numCPUs: Schema.optional(Schema.Number),
          numCoresPerSocket: Schema.optional(Schema.Number),
          cpuHotAddEnabled: Schema.optional(Schema.Boolean),
          cpuHotRemoveEnabled: Schema.optional(Schema.Boolean),
          memoryHotAddEnabled: Schema.optional(Schema.Boolean),
        }),
      ),
      networkProfile: Schema.optional(
        Schema.Struct({
          networkInterfaces: Schema.optional(
            Schema.Array(
              Schema.Struct({
                name: Schema.optional(Schema.String),
                label: Schema.optional(Schema.String),
                ipAddresses: Schema.optional(Schema.Array(Schema.String)),
                macAddress: Schema.optional(Schema.String),
                networkId: Schema.optional(Schema.String),
                nicType: Schema.optional(
                  Schema.Literals([
                    "vmxnet3",
                    "vmxnet2",
                    "vmxnet",
                    "e1000",
                    "e1000e",
                    "pcnet32",
                  ]),
                ),
                powerOnBoot: Schema.optional(
                  Schema.Literals(["enabled", "disabled"]),
                ),
                networkMoRefId: Schema.optional(Schema.String),
                networkMoName: Schema.optional(Schema.String),
                deviceKey: Schema.optional(Schema.Number),
                ipSettings: Schema.optional(
                  Schema.Struct({
                    allocationMethod: Schema.optional(
                      Schema.Literals([
                        "unset",
                        "dynamic",
                        "static",
                        "linklayer",
                        "random",
                        "other",
                      ]),
                    ),
                    dnsServers: Schema.optional(Schema.Array(Schema.String)),
                    gateway: Schema.optional(Schema.Array(Schema.String)),
                    ipAddress: Schema.optional(Schema.String),
                    subnetMask: Schema.optional(Schema.String),
                    primaryWinsServer: Schema.optional(Schema.String),
                    secondaryWinsServer: Schema.optional(Schema.String),
                    ipAddressInfo: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          allocationMethod: Schema.optional(Schema.String),
                          ipAddress: Schema.optional(Schema.String),
                          subnetMask: Schema.optional(Schema.String),
                        }),
                      ),
                    ),
                  }),
                ),
              }),
            ),
          ),
        }),
      ),
      storageProfile: Schema.optional(
        Schema.Struct({
          disks: Schema.optional(
            Schema.Array(
              Schema.Struct({
                name: Schema.optional(Schema.String),
                label: Schema.optional(Schema.String),
                diskObjectId: Schema.optional(Schema.String),
                diskSizeGB: Schema.optional(Schema.Number),
                deviceKey: Schema.optional(Schema.Number),
                diskMode: Schema.optional(
                  Schema.Literals([
                    "persistent",
                    "independent_persistent",
                    "independent_nonpersistent",
                  ]),
                ),
                controllerKey: Schema.optional(Schema.Number),
                unitNumber: Schema.optional(Schema.Number),
                deviceName: Schema.optional(Schema.String),
                diskType: Schema.optional(
                  Schema.Literals([
                    "flat",
                    "pmem",
                    "rawphysical",
                    "rawvirtual",
                    "sparse",
                    "sesparse",
                    "unknown",
                  ]),
                ),
              }),
            ),
          ),
          scsiControllers: Schema.optional(
            Schema.Array(
              Schema.Struct({
                type: Schema.optional(
                  Schema.Literals([
                    "lsilogic",
                    "buslogic",
                    "pvscsi",
                    "lsilogicsas",
                  ]),
                ),
                controllerKey: Schema.optional(Schema.Number),
                busNumber: Schema.optional(Schema.Number),
                scsiCtlrUnitNumber: Schema.optional(Schema.Number),
                sharing: Schema.optional(
                  Schema.Literals([
                    "noSharing",
                    "physicalSharing",
                    "virtualSharing",
                  ]),
                ),
              }),
            ),
          ),
        }),
      ),
      securityProfile: Schema.optional(
        Schema.Struct({
          uefiSettings: Schema.optional(
            Schema.Struct({
              secureBootEnabled: Schema.optional(Schema.Boolean),
            }),
          ),
        }),
      ),
      infrastructureProfile: Schema.optional(
        Schema.Struct({
          templateId: Schema.optional(Schema.String),
          vCenterId: Schema.optional(Schema.String),
          moRefId: Schema.optional(Schema.String),
          inventoryItemId: Schema.optional(Schema.String),
          moName: Schema.optional(Schema.String),
          folderPath: Schema.optional(Schema.String),
          instanceUuid: Schema.optional(Schema.String),
          smbiosUuid: Schema.optional(Schema.String),
          firmwareType: Schema.optional(Schema.Literals(["bios", "efi"])),
          customResourceName: Schema.optional(Schema.String),
        }),
      ),
      powerState: Schema.optional(Schema.String),
      statuses: Schema.optional(
        Schema.Array(
          Schema.Struct({
            type: Schema.optional(Schema.String),
            status: Schema.optional(Schema.String),
            reason: Schema.optional(Schema.String),
            message: Schema.optional(Schema.String),
            severity: Schema.optional(Schema.String),
            lastUpdatedAt: Schema.optional(Schema.String),
          }),
        ),
      ),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Succeeded",
          "Failed",
          "Canceled",
          "Provisioning",
          "Updating",
          "Deleting",
          "Accepted",
          "Created",
        ]),
      ),
      resourceUid: Schema.optional(Schema.String),
    }),
    extendedLocation: Schema.optional(
      Schema.Struct({
        type: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/{resourceUri}/providers/Microsoft.ConnectedVMwarevSphere/virtualMachineInstances/default",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<VirtualMachineInstancesCreateOrUpdateInput>;

// Output Schema
export interface VirtualMachineInstancesCreateOrUpdateOutput {
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
export const VirtualMachineInstancesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<VirtualMachineInstancesCreateOrUpdateOutput>;

// The operation
/**
 * Implements virtual machine PUT method.
 *
 * The operation to create or update a virtual machine instance. Please note some properties can be set only during virtual machine instance creation.
 *
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the Hybrid Compute machine resource to be extended.
 * @param api-version - Client Api Version.
 */
export const VirtualMachineInstancesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineInstancesCreateOrUpdateInput,
    outputSchema: VirtualMachineInstancesCreateOrUpdateOutput,
  }));
// Input Schema
export interface VirtualMachineInstancesDeleteInput {
  resourceUri: string;
  deleteFromHost?: boolean;
  force?: boolean;
}
export const VirtualMachineInstancesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
    deleteFromHost: Schema.optional(Schema.Boolean),
    force: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/{resourceUri}/providers/Microsoft.ConnectedVMwarevSphere/virtualMachineInstances/default",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<VirtualMachineInstancesDeleteInput>;

// Output Schema
export type VirtualMachineInstancesDeleteOutput = void;
export const VirtualMachineInstancesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<VirtualMachineInstancesDeleteOutput>;

// The operation
/**
 * Deletes an virtual machine.
 *
 * The operation to delete a virtual machine instance.
 *
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the Hybrid Compute machine resource to be extended.
 * @param api-version - Client Api Version.
 * @param deleteFromHost - Whether to delete the VM from the vCenter.
 * @param force - Whether force delete was specified.
 */
export const VirtualMachineInstancesDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineInstancesDeleteInput,
    outputSchema: VirtualMachineInstancesDeleteOutput,
  }));
// Input Schema
export interface VirtualMachineInstancesGetInput {
  resourceUri: string;
}
export const VirtualMachineInstancesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{resourceUri}/providers/Microsoft.ConnectedVMwarevSphere/virtualMachineInstances/default",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<VirtualMachineInstancesGetInput>;

// Output Schema
export interface VirtualMachineInstancesGetOutput {
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
export const VirtualMachineInstancesGetOutput =
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
  }) as unknown as Schema.Codec<VirtualMachineInstancesGetOutput>;

// The operation
/**
 * Gets a virtual machine.
 *
 * Retrieves information about a virtual machine instance.
 *
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the Hybrid Compute machine resource to be extended.
 * @param api-version - Client Api Version.
 */
export const VirtualMachineInstancesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualMachineInstancesGetInput,
    outputSchema: VirtualMachineInstancesGetOutput,
  }),
);
// Input Schema
export interface VirtualMachineInstancesListInput {
  resourceUri: string;
}
export const VirtualMachineInstancesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{resourceUri}/providers/Microsoft.ConnectedVMwarevSphere/virtualMachineInstances",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<VirtualMachineInstancesListInput>;

// Output Schema
export interface VirtualMachineInstancesListOutput {
  nextLink?: string;
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
}
export const VirtualMachineInstancesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<VirtualMachineInstancesListOutput>;

// The operation
/**
 * Implements List virtual machine instances.
 *
 * Lists all of the virtual machine instances within the specified parent resource.
 *
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the Hybrid Compute machine resource to be extended.
 * @param api-version - Client Api Version.
 */
export const VirtualMachineInstancesList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualMachineInstancesListInput,
    outputSchema: VirtualMachineInstancesListOutput,
  }),
);
// Input Schema
export interface VirtualMachineInstancesRestartInput {
  resourceUri: string;
}
export const VirtualMachineInstancesRestartInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/{resourceUri}/providers/Microsoft.ConnectedVMwarevSphere/virtualMachineInstances/default/restart",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<VirtualMachineInstancesRestartInput>;

// Output Schema
export type VirtualMachineInstancesRestartOutput = void;
export const VirtualMachineInstancesRestartOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<VirtualMachineInstancesRestartOutput>;

// The operation
/**
 * Implements the operation to restart a virtual machine.
 *
 * The operation to restart a virtual machine instance.
 *
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the Hybrid Compute machine resource to be extended.
 * @param api-version - Client Api Version.
 */
export const VirtualMachineInstancesRestart =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineInstancesRestartInput,
    outputSchema: VirtualMachineInstancesRestartOutput,
  }));
// Input Schema
export interface VirtualMachineInstancesStartInput {
  resourceUri: string;
}
export const VirtualMachineInstancesStartInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/{resourceUri}/providers/Microsoft.ConnectedVMwarevSphere/virtualMachineInstances/default/start",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<VirtualMachineInstancesStartInput>;

// Output Schema
export type VirtualMachineInstancesStartOutput = void;
export const VirtualMachineInstancesStartOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<VirtualMachineInstancesStartOutput>;

// The operation
/**
 * Implements the operation to start a virtual machine.
 *
 * The operation to start a virtual machine instance.
 *
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the Hybrid Compute machine resource to be extended.
 * @param api-version - Client Api Version.
 */
export const VirtualMachineInstancesStart =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineInstancesStartInput,
    outputSchema: VirtualMachineInstancesStartOutput,
  }));
// Input Schema
export interface VirtualMachineInstancesStopInput {
  resourceUri: string;
  skipShutdown?: boolean;
}
export const VirtualMachineInstancesStopInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
    skipShutdown: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/{resourceUri}/providers/Microsoft.ConnectedVMwarevSphere/virtualMachineInstances/default/stop",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<VirtualMachineInstancesStopInput>;

// Output Schema
export type VirtualMachineInstancesStopOutput = void;
export const VirtualMachineInstancesStopOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<VirtualMachineInstancesStopOutput>;

// The operation
/**
 * Implements the operation to stop a virtual machine.
 *
 * The operation to power off (stop) a virtual machine instance.
 *
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the Hybrid Compute machine resource to be extended.
 * @param api-version - Client Api Version.
 */
export const VirtualMachineInstancesStop = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualMachineInstancesStopInput,
    outputSchema: VirtualMachineInstancesStopOutput,
  }),
);
// Input Schema
export interface VirtualMachineInstancesUpdateInput {
  resourceUri: string;
  properties?: {
    hardwareProfile?: {
      memorySizeMB?: number;
      numCPUs?: number;
      numCoresPerSocket?: number;
      cpuHotAddEnabled?: boolean;
      cpuHotRemoveEnabled?: boolean;
      memoryHotAddEnabled?: boolean;
    };
    storageProfile?: {
      disks?: {
        name?: string;
        diskSizeGB?: number;
        deviceKey?: number;
        diskMode?:
          | "persistent"
          | "independent_persistent"
          | "independent_nonpersistent";
        controllerKey?: number;
        unitNumber?: number;
        deviceName?: string;
        diskType?:
          | "flat"
          | "pmem"
          | "rawphysical"
          | "rawvirtual"
          | "sparse"
          | "sesparse"
          | "unknown";
      }[];
    };
    networkProfile?: {
      networkInterfaces?: {
        name?: string;
        networkId?: string;
        nicType?:
          | "vmxnet3"
          | "vmxnet2"
          | "vmxnet"
          | "e1000"
          | "e1000e"
          | "pcnet32";
        powerOnBoot?: "enabled" | "disabled";
        deviceKey?: number;
      }[];
    };
  };
}
export const VirtualMachineInstancesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        hardwareProfile: Schema.optional(
          Schema.Struct({
            memorySizeMB: Schema.optional(Schema.Number),
            numCPUs: Schema.optional(Schema.Number),
            numCoresPerSocket: Schema.optional(Schema.Number),
            cpuHotAddEnabled: Schema.optional(Schema.Boolean),
            cpuHotRemoveEnabled: Schema.optional(Schema.Boolean),
            memoryHotAddEnabled: Schema.optional(Schema.Boolean),
          }),
        ),
        storageProfile: Schema.optional(
          Schema.Struct({
            disks: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.optional(Schema.String),
                  diskSizeGB: Schema.optional(Schema.Number),
                  deviceKey: Schema.optional(Schema.Number),
                  diskMode: Schema.optional(
                    Schema.Literals([
                      "persistent",
                      "independent_persistent",
                      "independent_nonpersistent",
                    ]),
                  ),
                  controllerKey: Schema.optional(Schema.Number),
                  unitNumber: Schema.optional(Schema.Number),
                  deviceName: Schema.optional(Schema.String),
                  diskType: Schema.optional(
                    Schema.Literals([
                      "flat",
                      "pmem",
                      "rawphysical",
                      "rawvirtual",
                      "sparse",
                      "sesparse",
                      "unknown",
                    ]),
                  ),
                }),
              ),
            ),
          }),
        ),
        networkProfile: Schema.optional(
          Schema.Struct({
            networkInterfaces: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.optional(Schema.String),
                  networkId: Schema.optional(Schema.String),
                  nicType: Schema.optional(
                    Schema.Literals([
                      "vmxnet3",
                      "vmxnet2",
                      "vmxnet",
                      "e1000",
                      "e1000e",
                      "pcnet32",
                    ]),
                  ),
                  powerOnBoot: Schema.optional(
                    Schema.Literals(["enabled", "disabled"]),
                  ),
                  deviceKey: Schema.optional(Schema.Number),
                }),
              ),
            ),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/{resourceUri}/providers/Microsoft.ConnectedVMwarevSphere/virtualMachineInstances/default",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<VirtualMachineInstancesUpdateInput>;

// Output Schema
export interface VirtualMachineInstancesUpdateOutput {
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
export const VirtualMachineInstancesUpdateOutput =
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
  }) as unknown as Schema.Codec<VirtualMachineInstancesUpdateOutput>;

// The operation
/**
 * Updates a virtual machine.
 *
 * The operation to update a virtual machine instance.
 *
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the Hybrid Compute machine resource to be extended.
 * @param api-version - Client Api Version.
 */
export const VirtualMachineInstancesUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineInstancesUpdateInput,
    outputSchema: VirtualMachineInstancesUpdateOutput,
  }));
// Input Schema
export interface VirtualMachineTemplatesCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  virtualMachineTemplateName: string;
  properties: {
    uuid?: string;
    vCenterId?: string;
    moRefId?: string;
    inventoryItemId?: string;
    moName?: string;
    memorySizeMB?: number;
    numCPUs?: number;
    numCoresPerSocket?: number;
    osType?: "Windows" | "Linux" | "Other";
    osName?: string;
    folderPath?: string;
    networkInterfaces?: {
      name?: string;
      label?: string;
      ipAddresses?: string[];
      macAddress?: string;
      networkId?: string;
      nicType?:
        | "vmxnet3"
        | "vmxnet2"
        | "vmxnet"
        | "e1000"
        | "e1000e"
        | "pcnet32";
      powerOnBoot?: "enabled" | "disabled";
      networkMoRefId?: string;
      networkMoName?: string;
      deviceKey?: number;
      ipSettings?: {
        allocationMethod?:
          | "unset"
          | "dynamic"
          | "static"
          | "linklayer"
          | "random"
          | "other";
        dnsServers?: string[];
        gateway?: string[];
        ipAddress?: string;
        subnetMask?: string;
        primaryWinsServer?: string;
        secondaryWinsServer?: string;
        ipAddressInfo?: {
          allocationMethod?: string;
          ipAddress?: string;
          subnetMask?: string;
        }[];
      };
    }[];
    disks?: {
      name?: string;
      label?: string;
      diskObjectId?: string;
      diskSizeGB?: number;
      deviceKey?: number;
      diskMode?:
        | "persistent"
        | "independent_persistent"
        | "independent_nonpersistent";
      controllerKey?: number;
      unitNumber?: number;
      deviceName?: string;
      diskType?:
        | "flat"
        | "pmem"
        | "rawphysical"
        | "rawvirtual"
        | "sparse"
        | "sesparse"
        | "unknown";
    }[];
    customResourceName?: string;
    toolsVersionStatus?: string;
    toolsVersion?: string;
    firmwareType?: "bios" | "efi";
    statuses?: {
      type?: string;
      status?: string;
      reason?: string;
      message?: string;
      severity?: string;
      lastUpdatedAt?: string;
    }[];
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Provisioning"
      | "Updating"
      | "Deleting"
      | "Accepted"
      | "Created";
  };
  location: string;
  extendedLocation?: { type?: string; name?: string };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  tags?: Record<string, string>;
  name?: string;
  id?: string;
  type?: string;
  kind?: string;
}
export const VirtualMachineTemplatesCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    virtualMachineTemplateName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      uuid: Schema.optional(Schema.String),
      vCenterId: Schema.optional(Schema.String),
      moRefId: Schema.optional(Schema.String),
      inventoryItemId: Schema.optional(Schema.String),
      moName: Schema.optional(Schema.String),
      memorySizeMB: Schema.optional(Schema.Number),
      numCPUs: Schema.optional(Schema.Number),
      numCoresPerSocket: Schema.optional(Schema.Number),
      osType: Schema.optional(Schema.Literals(["Windows", "Linux", "Other"])),
      osName: Schema.optional(Schema.String),
      folderPath: Schema.optional(Schema.String),
      networkInterfaces: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.optional(Schema.String),
            label: Schema.optional(Schema.String),
            ipAddresses: Schema.optional(Schema.Array(Schema.String)),
            macAddress: Schema.optional(Schema.String),
            networkId: Schema.optional(Schema.String),
            nicType: Schema.optional(
              Schema.Literals([
                "vmxnet3",
                "vmxnet2",
                "vmxnet",
                "e1000",
                "e1000e",
                "pcnet32",
              ]),
            ),
            powerOnBoot: Schema.optional(
              Schema.Literals(["enabled", "disabled"]),
            ),
            networkMoRefId: Schema.optional(Schema.String),
            networkMoName: Schema.optional(Schema.String),
            deviceKey: Schema.optional(Schema.Number),
            ipSettings: Schema.optional(
              Schema.Struct({
                allocationMethod: Schema.optional(
                  Schema.Literals([
                    "unset",
                    "dynamic",
                    "static",
                    "linklayer",
                    "random",
                    "other",
                  ]),
                ),
                dnsServers: Schema.optional(Schema.Array(Schema.String)),
                gateway: Schema.optional(Schema.Array(Schema.String)),
                ipAddress: Schema.optional(Schema.String),
                subnetMask: Schema.optional(Schema.String),
                primaryWinsServer: Schema.optional(Schema.String),
                secondaryWinsServer: Schema.optional(Schema.String),
                ipAddressInfo: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      allocationMethod: Schema.optional(Schema.String),
                      ipAddress: Schema.optional(Schema.String),
                      subnetMask: Schema.optional(Schema.String),
                    }),
                  ),
                ),
              }),
            ),
          }),
        ),
      ),
      disks: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.optional(Schema.String),
            label: Schema.optional(Schema.String),
            diskObjectId: Schema.optional(Schema.String),
            diskSizeGB: Schema.optional(Schema.Number),
            deviceKey: Schema.optional(Schema.Number),
            diskMode: Schema.optional(
              Schema.Literals([
                "persistent",
                "independent_persistent",
                "independent_nonpersistent",
              ]),
            ),
            controllerKey: Schema.optional(Schema.Number),
            unitNumber: Schema.optional(Schema.Number),
            deviceName: Schema.optional(Schema.String),
            diskType: Schema.optional(
              Schema.Literals([
                "flat",
                "pmem",
                "rawphysical",
                "rawvirtual",
                "sparse",
                "sesparse",
                "unknown",
              ]),
            ),
          }),
        ),
      ),
      customResourceName: Schema.optional(Schema.String),
      toolsVersionStatus: Schema.optional(Schema.String),
      toolsVersion: Schema.optional(Schema.String),
      firmwareType: Schema.optional(Schema.Literals(["bios", "efi"])),
      statuses: Schema.optional(
        Schema.Array(
          Schema.Struct({
            type: Schema.optional(Schema.String),
            status: Schema.optional(Schema.String),
            reason: Schema.optional(Schema.String),
            message: Schema.optional(Schema.String),
            severity: Schema.optional(Schema.String),
            lastUpdatedAt: Schema.optional(Schema.String),
          }),
        ),
      ),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Succeeded",
          "Failed",
          "Canceled",
          "Provisioning",
          "Updating",
          "Deleting",
          "Accepted",
          "Created",
        ]),
      ),
    }),
    location: Schema.String,
    extendedLocation: Schema.optional(
      Schema.Struct({
        type: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
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
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/virtualMachineTemplates/{virtualMachineTemplateName}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<VirtualMachineTemplatesCreateInput>;

// Output Schema
export interface VirtualMachineTemplatesCreateOutput {
  properties: {
    uuid?: string;
    vCenterId?: string;
    moRefId?: string;
    inventoryItemId?: string;
    moName?: string;
    memorySizeMB?: number;
    numCPUs?: number;
    numCoresPerSocket?: number;
    osType?: "Windows" | "Linux" | "Other";
    osName?: string;
    folderPath?: string;
    networkInterfaces?: {
      name?: string;
      label?: string;
      ipAddresses?: string[];
      macAddress?: string;
      networkId?: string;
      nicType?:
        | "vmxnet3"
        | "vmxnet2"
        | "vmxnet"
        | "e1000"
        | "e1000e"
        | "pcnet32";
      powerOnBoot?: "enabled" | "disabled";
      networkMoRefId?: string;
      networkMoName?: string;
      deviceKey?: number;
      ipSettings?: {
        allocationMethod?:
          | "unset"
          | "dynamic"
          | "static"
          | "linklayer"
          | "random"
          | "other";
        dnsServers?: string[];
        gateway?: string[];
        ipAddress?: string;
        subnetMask?: string;
        primaryWinsServer?: string;
        secondaryWinsServer?: string;
        ipAddressInfo?: {
          allocationMethod?: string;
          ipAddress?: string;
          subnetMask?: string;
        }[];
      };
    }[];
    disks?: {
      name?: string;
      label?: string;
      diskObjectId?: string;
      diskSizeGB?: number;
      deviceKey?: number;
      diskMode?:
        | "persistent"
        | "independent_persistent"
        | "independent_nonpersistent";
      controllerKey?: number;
      unitNumber?: number;
      deviceName?: string;
      diskType?:
        | "flat"
        | "pmem"
        | "rawphysical"
        | "rawvirtual"
        | "sparse"
        | "sesparse"
        | "unknown";
    }[];
    customResourceName?: string;
    toolsVersionStatus?: string;
    toolsVersion?: string;
    firmwareType?: "bios" | "efi";
    statuses?: {
      type?: string;
      status?: string;
      reason?: string;
      message?: string;
      severity?: string;
      lastUpdatedAt?: string;
    }[];
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Provisioning"
      | "Updating"
      | "Deleting"
      | "Accepted"
      | "Created";
  };
  location: string;
  extendedLocation?: { type?: string; name?: string };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  tags?: Record<string, string>;
  name?: string;
  id?: string;
  type?: string;
  kind?: string;
}
export const VirtualMachineTemplatesCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.Struct({
      uuid: Schema.optional(Schema.String),
      vCenterId: Schema.optional(Schema.String),
      moRefId: Schema.optional(Schema.String),
      inventoryItemId: Schema.optional(Schema.String),
      moName: Schema.optional(Schema.String),
      memorySizeMB: Schema.optional(Schema.Number),
      numCPUs: Schema.optional(Schema.Number),
      numCoresPerSocket: Schema.optional(Schema.Number),
      osType: Schema.optional(Schema.Literals(["Windows", "Linux", "Other"])),
      osName: Schema.optional(Schema.String),
      folderPath: Schema.optional(Schema.String),
      networkInterfaces: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.optional(Schema.String),
            label: Schema.optional(Schema.String),
            ipAddresses: Schema.optional(Schema.Array(Schema.String)),
            macAddress: Schema.optional(Schema.String),
            networkId: Schema.optional(Schema.String),
            nicType: Schema.optional(
              Schema.Literals([
                "vmxnet3",
                "vmxnet2",
                "vmxnet",
                "e1000",
                "e1000e",
                "pcnet32",
              ]),
            ),
            powerOnBoot: Schema.optional(
              Schema.Literals(["enabled", "disabled"]),
            ),
            networkMoRefId: Schema.optional(Schema.String),
            networkMoName: Schema.optional(Schema.String),
            deviceKey: Schema.optional(Schema.Number),
            ipSettings: Schema.optional(
              Schema.Struct({
                allocationMethod: Schema.optional(
                  Schema.Literals([
                    "unset",
                    "dynamic",
                    "static",
                    "linklayer",
                    "random",
                    "other",
                  ]),
                ),
                dnsServers: Schema.optional(Schema.Array(Schema.String)),
                gateway: Schema.optional(Schema.Array(Schema.String)),
                ipAddress: Schema.optional(Schema.String),
                subnetMask: Schema.optional(Schema.String),
                primaryWinsServer: Schema.optional(Schema.String),
                secondaryWinsServer: Schema.optional(Schema.String),
                ipAddressInfo: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      allocationMethod: Schema.optional(Schema.String),
                      ipAddress: Schema.optional(Schema.String),
                      subnetMask: Schema.optional(Schema.String),
                    }),
                  ),
                ),
              }),
            ),
          }),
        ),
      ),
      disks: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.optional(Schema.String),
            label: Schema.optional(Schema.String),
            diskObjectId: Schema.optional(Schema.String),
            diskSizeGB: Schema.optional(Schema.Number),
            deviceKey: Schema.optional(Schema.Number),
            diskMode: Schema.optional(
              Schema.Literals([
                "persistent",
                "independent_persistent",
                "independent_nonpersistent",
              ]),
            ),
            controllerKey: Schema.optional(Schema.Number),
            unitNumber: Schema.optional(Schema.Number),
            deviceName: Schema.optional(Schema.String),
            diskType: Schema.optional(
              Schema.Literals([
                "flat",
                "pmem",
                "rawphysical",
                "rawvirtual",
                "sparse",
                "sesparse",
                "unknown",
              ]),
            ),
          }),
        ),
      ),
      customResourceName: Schema.optional(Schema.String),
      toolsVersionStatus: Schema.optional(Schema.String),
      toolsVersion: Schema.optional(Schema.String),
      firmwareType: Schema.optional(Schema.Literals(["bios", "efi"])),
      statuses: Schema.optional(
        Schema.Array(
          Schema.Struct({
            type: Schema.optional(Schema.String),
            status: Schema.optional(Schema.String),
            reason: Schema.optional(Schema.String),
            message: Schema.optional(Schema.String),
            severity: Schema.optional(Schema.String),
            lastUpdatedAt: Schema.optional(Schema.String),
          }),
        ),
      ),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Succeeded",
          "Failed",
          "Canceled",
          "Provisioning",
          "Updating",
          "Deleting",
          "Accepted",
          "Created",
        ]),
      ),
    }),
    location: Schema.String,
    extendedLocation: Schema.optional(
      Schema.Struct({
        type: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
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
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<VirtualMachineTemplatesCreateOutput>;

// The operation
/**
 * Implements virtual machine template PUT method.
 *
 * Create Or Update virtual machine template.
 *
 * @param subscriptionId - The Subscription ID.
 * @param resourceGroupName - The Resource Group Name.
 * @param virtualMachineTemplateName - Name of the virtual machine template resource.
 * @param api-version - Client Api Version.
 */
export const VirtualMachineTemplatesCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineTemplatesCreateInput,
    outputSchema: VirtualMachineTemplatesCreateOutput,
  }));
// Input Schema
export interface VirtualMachineTemplatesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  virtualMachineTemplateName: string;
  force?: boolean;
}
export const VirtualMachineTemplatesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    virtualMachineTemplateName: Schema.String.pipe(T.PathParam()),
    force: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/virtualMachineTemplates/{virtualMachineTemplateName}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<VirtualMachineTemplatesDeleteInput>;

// Output Schema
export type VirtualMachineTemplatesDeleteOutput = void;
export const VirtualMachineTemplatesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<VirtualMachineTemplatesDeleteOutput>;

// The operation
/**
 * Deletes an virtual machine template.
 *
 * Implements virtual machine template DELETE method.
 *
 * @param subscriptionId - The Subscription ID.
 * @param resourceGroupName - The Resource Group Name.
 * @param virtualMachineTemplateName - Name of the virtual machine template resource.
 * @param api-version - Client Api Version.
 * @param force - Whether force delete was specified.
 */
export const VirtualMachineTemplatesDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineTemplatesDeleteInput,
    outputSchema: VirtualMachineTemplatesDeleteOutput,
  }));
// Input Schema
export interface VirtualMachineTemplatesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  virtualMachineTemplateName: string;
}
export const VirtualMachineTemplatesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    virtualMachineTemplateName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/virtualMachineTemplates/{virtualMachineTemplateName}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<VirtualMachineTemplatesGetInput>;

// Output Schema
export interface VirtualMachineTemplatesGetOutput {
  properties: {
    uuid?: string;
    vCenterId?: string;
    moRefId?: string;
    inventoryItemId?: string;
    moName?: string;
    memorySizeMB?: number;
    numCPUs?: number;
    numCoresPerSocket?: number;
    osType?: "Windows" | "Linux" | "Other";
    osName?: string;
    folderPath?: string;
    networkInterfaces?: {
      name?: string;
      label?: string;
      ipAddresses?: string[];
      macAddress?: string;
      networkId?: string;
      nicType?:
        | "vmxnet3"
        | "vmxnet2"
        | "vmxnet"
        | "e1000"
        | "e1000e"
        | "pcnet32";
      powerOnBoot?: "enabled" | "disabled";
      networkMoRefId?: string;
      networkMoName?: string;
      deviceKey?: number;
      ipSettings?: {
        allocationMethod?:
          | "unset"
          | "dynamic"
          | "static"
          | "linklayer"
          | "random"
          | "other";
        dnsServers?: string[];
        gateway?: string[];
        ipAddress?: string;
        subnetMask?: string;
        primaryWinsServer?: string;
        secondaryWinsServer?: string;
        ipAddressInfo?: {
          allocationMethod?: string;
          ipAddress?: string;
          subnetMask?: string;
        }[];
      };
    }[];
    disks?: {
      name?: string;
      label?: string;
      diskObjectId?: string;
      diskSizeGB?: number;
      deviceKey?: number;
      diskMode?:
        | "persistent"
        | "independent_persistent"
        | "independent_nonpersistent";
      controllerKey?: number;
      unitNumber?: number;
      deviceName?: string;
      diskType?:
        | "flat"
        | "pmem"
        | "rawphysical"
        | "rawvirtual"
        | "sparse"
        | "sesparse"
        | "unknown";
    }[];
    customResourceName?: string;
    toolsVersionStatus?: string;
    toolsVersion?: string;
    firmwareType?: "bios" | "efi";
    statuses?: {
      type?: string;
      status?: string;
      reason?: string;
      message?: string;
      severity?: string;
      lastUpdatedAt?: string;
    }[];
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Provisioning"
      | "Updating"
      | "Deleting"
      | "Accepted"
      | "Created";
  };
  location: string;
  extendedLocation?: { type?: string; name?: string };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  tags?: Record<string, string>;
  name?: string;
  id?: string;
  type?: string;
  kind?: string;
}
export const VirtualMachineTemplatesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.Struct({
      uuid: Schema.optional(Schema.String),
      vCenterId: Schema.optional(Schema.String),
      moRefId: Schema.optional(Schema.String),
      inventoryItemId: Schema.optional(Schema.String),
      moName: Schema.optional(Schema.String),
      memorySizeMB: Schema.optional(Schema.Number),
      numCPUs: Schema.optional(Schema.Number),
      numCoresPerSocket: Schema.optional(Schema.Number),
      osType: Schema.optional(Schema.Literals(["Windows", "Linux", "Other"])),
      osName: Schema.optional(Schema.String),
      folderPath: Schema.optional(Schema.String),
      networkInterfaces: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.optional(Schema.String),
            label: Schema.optional(Schema.String),
            ipAddresses: Schema.optional(Schema.Array(Schema.String)),
            macAddress: Schema.optional(Schema.String),
            networkId: Schema.optional(Schema.String),
            nicType: Schema.optional(
              Schema.Literals([
                "vmxnet3",
                "vmxnet2",
                "vmxnet",
                "e1000",
                "e1000e",
                "pcnet32",
              ]),
            ),
            powerOnBoot: Schema.optional(
              Schema.Literals(["enabled", "disabled"]),
            ),
            networkMoRefId: Schema.optional(Schema.String),
            networkMoName: Schema.optional(Schema.String),
            deviceKey: Schema.optional(Schema.Number),
            ipSettings: Schema.optional(
              Schema.Struct({
                allocationMethod: Schema.optional(
                  Schema.Literals([
                    "unset",
                    "dynamic",
                    "static",
                    "linklayer",
                    "random",
                    "other",
                  ]),
                ),
                dnsServers: Schema.optional(Schema.Array(Schema.String)),
                gateway: Schema.optional(Schema.Array(Schema.String)),
                ipAddress: Schema.optional(Schema.String),
                subnetMask: Schema.optional(Schema.String),
                primaryWinsServer: Schema.optional(Schema.String),
                secondaryWinsServer: Schema.optional(Schema.String),
                ipAddressInfo: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      allocationMethod: Schema.optional(Schema.String),
                      ipAddress: Schema.optional(Schema.String),
                      subnetMask: Schema.optional(Schema.String),
                    }),
                  ),
                ),
              }),
            ),
          }),
        ),
      ),
      disks: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.optional(Schema.String),
            label: Schema.optional(Schema.String),
            diskObjectId: Schema.optional(Schema.String),
            diskSizeGB: Schema.optional(Schema.Number),
            deviceKey: Schema.optional(Schema.Number),
            diskMode: Schema.optional(
              Schema.Literals([
                "persistent",
                "independent_persistent",
                "independent_nonpersistent",
              ]),
            ),
            controllerKey: Schema.optional(Schema.Number),
            unitNumber: Schema.optional(Schema.Number),
            deviceName: Schema.optional(Schema.String),
            diskType: Schema.optional(
              Schema.Literals([
                "flat",
                "pmem",
                "rawphysical",
                "rawvirtual",
                "sparse",
                "sesparse",
                "unknown",
              ]),
            ),
          }),
        ),
      ),
      customResourceName: Schema.optional(Schema.String),
      toolsVersionStatus: Schema.optional(Schema.String),
      toolsVersion: Schema.optional(Schema.String),
      firmwareType: Schema.optional(Schema.Literals(["bios", "efi"])),
      statuses: Schema.optional(
        Schema.Array(
          Schema.Struct({
            type: Schema.optional(Schema.String),
            status: Schema.optional(Schema.String),
            reason: Schema.optional(Schema.String),
            message: Schema.optional(Schema.String),
            severity: Schema.optional(Schema.String),
            lastUpdatedAt: Schema.optional(Schema.String),
          }),
        ),
      ),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Succeeded",
          "Failed",
          "Canceled",
          "Provisioning",
          "Updating",
          "Deleting",
          "Accepted",
          "Created",
        ]),
      ),
    }),
    location: Schema.String,
    extendedLocation: Schema.optional(
      Schema.Struct({
        type: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
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
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<VirtualMachineTemplatesGetOutput>;

// The operation
/**
 * Gets a virtual machine template.
 *
 * Implements virtual machine template GET method.
 *
 * @param subscriptionId - The Subscription ID.
 * @param resourceGroupName - The Resource Group Name.
 * @param virtualMachineTemplateName - Name of the virtual machine template resource.
 * @param api-version - Client Api Version.
 */
export const VirtualMachineTemplatesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualMachineTemplatesGetInput,
    outputSchema: VirtualMachineTemplatesGetOutput,
  }),
);
// Input Schema
export interface VirtualMachineTemplatesListInput {
  subscriptionId: string;
}
export const VirtualMachineTemplatesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ConnectedVMwarevSphere/virtualMachineTemplates",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<VirtualMachineTemplatesListInput>;

// Output Schema
export interface VirtualMachineTemplatesListOutput {
  nextLink?: string;
  value: {
    properties: {
      uuid?: string;
      vCenterId?: string;
      moRefId?: string;
      inventoryItemId?: string;
      moName?: string;
      memorySizeMB?: number;
      numCPUs?: number;
      numCoresPerSocket?: number;
      osType?: "Windows" | "Linux" | "Other";
      osName?: string;
      folderPath?: string;
      networkInterfaces?: {
        name?: string;
        label?: string;
        ipAddresses?: string[];
        macAddress?: string;
        networkId?: string;
        nicType?:
          | "vmxnet3"
          | "vmxnet2"
          | "vmxnet"
          | "e1000"
          | "e1000e"
          | "pcnet32";
        powerOnBoot?: "enabled" | "disabled";
        networkMoRefId?: string;
        networkMoName?: string;
        deviceKey?: number;
        ipSettings?: {
          allocationMethod?:
            | "unset"
            | "dynamic"
            | "static"
            | "linklayer"
            | "random"
            | "other";
          dnsServers?: string[];
          gateway?: string[];
          ipAddress?: string;
          subnetMask?: string;
          primaryWinsServer?: string;
          secondaryWinsServer?: string;
          ipAddressInfo?: {
            allocationMethod?: string;
            ipAddress?: string;
            subnetMask?: string;
          }[];
        };
      }[];
      disks?: {
        name?: string;
        label?: string;
        diskObjectId?: string;
        diskSizeGB?: number;
        deviceKey?: number;
        diskMode?:
          | "persistent"
          | "independent_persistent"
          | "independent_nonpersistent";
        controllerKey?: number;
        unitNumber?: number;
        deviceName?: string;
        diskType?:
          | "flat"
          | "pmem"
          | "rawphysical"
          | "rawvirtual"
          | "sparse"
          | "sesparse"
          | "unknown";
      }[];
      customResourceName?: string;
      toolsVersionStatus?: string;
      toolsVersion?: string;
      firmwareType?: "bios" | "efi";
      statuses?: {
        type?: string;
        status?: string;
        reason?: string;
        message?: string;
        severity?: string;
        lastUpdatedAt?: string;
      }[];
      provisioningState?:
        | "Succeeded"
        | "Failed"
        | "Canceled"
        | "Provisioning"
        | "Updating"
        | "Deleting"
        | "Accepted"
        | "Created";
    };
    location: string;
    extendedLocation?: { type?: string; name?: string };
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
    tags?: Record<string, string>;
    name?: string;
    id?: string;
    type?: string;
    kind?: string;
  }[];
}
export const VirtualMachineTemplatesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.Array(
      Schema.Struct({
        properties: Schema.Struct({
          uuid: Schema.optional(Schema.String),
          vCenterId: Schema.optional(Schema.String),
          moRefId: Schema.optional(Schema.String),
          inventoryItemId: Schema.optional(Schema.String),
          moName: Schema.optional(Schema.String),
          memorySizeMB: Schema.optional(Schema.Number),
          numCPUs: Schema.optional(Schema.Number),
          numCoresPerSocket: Schema.optional(Schema.Number),
          osType: Schema.optional(
            Schema.Literals(["Windows", "Linux", "Other"]),
          ),
          osName: Schema.optional(Schema.String),
          folderPath: Schema.optional(Schema.String),
          networkInterfaces: Schema.optional(
            Schema.Array(
              Schema.Struct({
                name: Schema.optional(Schema.String),
                label: Schema.optional(Schema.String),
                ipAddresses: Schema.optional(Schema.Array(Schema.String)),
                macAddress: Schema.optional(Schema.String),
                networkId: Schema.optional(Schema.String),
                nicType: Schema.optional(
                  Schema.Literals([
                    "vmxnet3",
                    "vmxnet2",
                    "vmxnet",
                    "e1000",
                    "e1000e",
                    "pcnet32",
                  ]),
                ),
                powerOnBoot: Schema.optional(
                  Schema.Literals(["enabled", "disabled"]),
                ),
                networkMoRefId: Schema.optional(Schema.String),
                networkMoName: Schema.optional(Schema.String),
                deviceKey: Schema.optional(Schema.Number),
                ipSettings: Schema.optional(
                  Schema.Struct({
                    allocationMethod: Schema.optional(
                      Schema.Literals([
                        "unset",
                        "dynamic",
                        "static",
                        "linklayer",
                        "random",
                        "other",
                      ]),
                    ),
                    dnsServers: Schema.optional(Schema.Array(Schema.String)),
                    gateway: Schema.optional(Schema.Array(Schema.String)),
                    ipAddress: Schema.optional(Schema.String),
                    subnetMask: Schema.optional(Schema.String),
                    primaryWinsServer: Schema.optional(Schema.String),
                    secondaryWinsServer: Schema.optional(Schema.String),
                    ipAddressInfo: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          allocationMethod: Schema.optional(Schema.String),
                          ipAddress: Schema.optional(Schema.String),
                          subnetMask: Schema.optional(Schema.String),
                        }),
                      ),
                    ),
                  }),
                ),
              }),
            ),
          ),
          disks: Schema.optional(
            Schema.Array(
              Schema.Struct({
                name: Schema.optional(Schema.String),
                label: Schema.optional(Schema.String),
                diskObjectId: Schema.optional(Schema.String),
                diskSizeGB: Schema.optional(Schema.Number),
                deviceKey: Schema.optional(Schema.Number),
                diskMode: Schema.optional(
                  Schema.Literals([
                    "persistent",
                    "independent_persistent",
                    "independent_nonpersistent",
                  ]),
                ),
                controllerKey: Schema.optional(Schema.Number),
                unitNumber: Schema.optional(Schema.Number),
                deviceName: Schema.optional(Schema.String),
                diskType: Schema.optional(
                  Schema.Literals([
                    "flat",
                    "pmem",
                    "rawphysical",
                    "rawvirtual",
                    "sparse",
                    "sesparse",
                    "unknown",
                  ]),
                ),
              }),
            ),
          ),
          customResourceName: Schema.optional(Schema.String),
          toolsVersionStatus: Schema.optional(Schema.String),
          toolsVersion: Schema.optional(Schema.String),
          firmwareType: Schema.optional(Schema.Literals(["bios", "efi"])),
          statuses: Schema.optional(
            Schema.Array(
              Schema.Struct({
                type: Schema.optional(Schema.String),
                status: Schema.optional(Schema.String),
                reason: Schema.optional(Schema.String),
                message: Schema.optional(Schema.String),
                severity: Schema.optional(Schema.String),
                lastUpdatedAt: Schema.optional(Schema.String),
              }),
            ),
          ),
          provisioningState: Schema.optional(
            Schema.Literals([
              "Succeeded",
              "Failed",
              "Canceled",
              "Provisioning",
              "Updating",
              "Deleting",
              "Accepted",
              "Created",
            ]),
          ),
        }),
        location: Schema.String,
        extendedLocation: Schema.optional(
          Schema.Struct({
            type: Schema.optional(Schema.String),
            name: Schema.optional(Schema.String),
          }),
        ),
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
        tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        name: Schema.optional(Schema.String),
        id: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        kind: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<VirtualMachineTemplatesListOutput>;

// The operation
/**
 * Implements GET virtualMachineTemplates in a subscription.
 *
 * List of virtualMachineTemplates in a subscription.
 *
 * @param subscriptionId - The Subscription ID.
 * @param api-version - Client Api Version.
 */
export const VirtualMachineTemplatesList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualMachineTemplatesListInput,
    outputSchema: VirtualMachineTemplatesListOutput,
  }),
);
// Input Schema
export interface VirtualMachineTemplatesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const VirtualMachineTemplatesListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/virtualMachineTemplates",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<VirtualMachineTemplatesListByResourceGroupInput>;

// Output Schema
export interface VirtualMachineTemplatesListByResourceGroupOutput {
  nextLink?: string;
  value: {
    properties: {
      uuid?: string;
      vCenterId?: string;
      moRefId?: string;
      inventoryItemId?: string;
      moName?: string;
      memorySizeMB?: number;
      numCPUs?: number;
      numCoresPerSocket?: number;
      osType?: "Windows" | "Linux" | "Other";
      osName?: string;
      folderPath?: string;
      networkInterfaces?: {
        name?: string;
        label?: string;
        ipAddresses?: string[];
        macAddress?: string;
        networkId?: string;
        nicType?:
          | "vmxnet3"
          | "vmxnet2"
          | "vmxnet"
          | "e1000"
          | "e1000e"
          | "pcnet32";
        powerOnBoot?: "enabled" | "disabled";
        networkMoRefId?: string;
        networkMoName?: string;
        deviceKey?: number;
        ipSettings?: {
          allocationMethod?:
            | "unset"
            | "dynamic"
            | "static"
            | "linklayer"
            | "random"
            | "other";
          dnsServers?: string[];
          gateway?: string[];
          ipAddress?: string;
          subnetMask?: string;
          primaryWinsServer?: string;
          secondaryWinsServer?: string;
          ipAddressInfo?: {
            allocationMethod?: string;
            ipAddress?: string;
            subnetMask?: string;
          }[];
        };
      }[];
      disks?: {
        name?: string;
        label?: string;
        diskObjectId?: string;
        diskSizeGB?: number;
        deviceKey?: number;
        diskMode?:
          | "persistent"
          | "independent_persistent"
          | "independent_nonpersistent";
        controllerKey?: number;
        unitNumber?: number;
        deviceName?: string;
        diskType?:
          | "flat"
          | "pmem"
          | "rawphysical"
          | "rawvirtual"
          | "sparse"
          | "sesparse"
          | "unknown";
      }[];
      customResourceName?: string;
      toolsVersionStatus?: string;
      toolsVersion?: string;
      firmwareType?: "bios" | "efi";
      statuses?: {
        type?: string;
        status?: string;
        reason?: string;
        message?: string;
        severity?: string;
        lastUpdatedAt?: string;
      }[];
      provisioningState?:
        | "Succeeded"
        | "Failed"
        | "Canceled"
        | "Provisioning"
        | "Updating"
        | "Deleting"
        | "Accepted"
        | "Created";
    };
    location: string;
    extendedLocation?: { type?: string; name?: string };
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
    tags?: Record<string, string>;
    name?: string;
    id?: string;
    type?: string;
    kind?: string;
  }[];
}
export const VirtualMachineTemplatesListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.Array(
      Schema.Struct({
        properties: Schema.Struct({
          uuid: Schema.optional(Schema.String),
          vCenterId: Schema.optional(Schema.String),
          moRefId: Schema.optional(Schema.String),
          inventoryItemId: Schema.optional(Schema.String),
          moName: Schema.optional(Schema.String),
          memorySizeMB: Schema.optional(Schema.Number),
          numCPUs: Schema.optional(Schema.Number),
          numCoresPerSocket: Schema.optional(Schema.Number),
          osType: Schema.optional(
            Schema.Literals(["Windows", "Linux", "Other"]),
          ),
          osName: Schema.optional(Schema.String),
          folderPath: Schema.optional(Schema.String),
          networkInterfaces: Schema.optional(
            Schema.Array(
              Schema.Struct({
                name: Schema.optional(Schema.String),
                label: Schema.optional(Schema.String),
                ipAddresses: Schema.optional(Schema.Array(Schema.String)),
                macAddress: Schema.optional(Schema.String),
                networkId: Schema.optional(Schema.String),
                nicType: Schema.optional(
                  Schema.Literals([
                    "vmxnet3",
                    "vmxnet2",
                    "vmxnet",
                    "e1000",
                    "e1000e",
                    "pcnet32",
                  ]),
                ),
                powerOnBoot: Schema.optional(
                  Schema.Literals(["enabled", "disabled"]),
                ),
                networkMoRefId: Schema.optional(Schema.String),
                networkMoName: Schema.optional(Schema.String),
                deviceKey: Schema.optional(Schema.Number),
                ipSettings: Schema.optional(
                  Schema.Struct({
                    allocationMethod: Schema.optional(
                      Schema.Literals([
                        "unset",
                        "dynamic",
                        "static",
                        "linklayer",
                        "random",
                        "other",
                      ]),
                    ),
                    dnsServers: Schema.optional(Schema.Array(Schema.String)),
                    gateway: Schema.optional(Schema.Array(Schema.String)),
                    ipAddress: Schema.optional(Schema.String),
                    subnetMask: Schema.optional(Schema.String),
                    primaryWinsServer: Schema.optional(Schema.String),
                    secondaryWinsServer: Schema.optional(Schema.String),
                    ipAddressInfo: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          allocationMethod: Schema.optional(Schema.String),
                          ipAddress: Schema.optional(Schema.String),
                          subnetMask: Schema.optional(Schema.String),
                        }),
                      ),
                    ),
                  }),
                ),
              }),
            ),
          ),
          disks: Schema.optional(
            Schema.Array(
              Schema.Struct({
                name: Schema.optional(Schema.String),
                label: Schema.optional(Schema.String),
                diskObjectId: Schema.optional(Schema.String),
                diskSizeGB: Schema.optional(Schema.Number),
                deviceKey: Schema.optional(Schema.Number),
                diskMode: Schema.optional(
                  Schema.Literals([
                    "persistent",
                    "independent_persistent",
                    "independent_nonpersistent",
                  ]),
                ),
                controllerKey: Schema.optional(Schema.Number),
                unitNumber: Schema.optional(Schema.Number),
                deviceName: Schema.optional(Schema.String),
                diskType: Schema.optional(
                  Schema.Literals([
                    "flat",
                    "pmem",
                    "rawphysical",
                    "rawvirtual",
                    "sparse",
                    "sesparse",
                    "unknown",
                  ]),
                ),
              }),
            ),
          ),
          customResourceName: Schema.optional(Schema.String),
          toolsVersionStatus: Schema.optional(Schema.String),
          toolsVersion: Schema.optional(Schema.String),
          firmwareType: Schema.optional(Schema.Literals(["bios", "efi"])),
          statuses: Schema.optional(
            Schema.Array(
              Schema.Struct({
                type: Schema.optional(Schema.String),
                status: Schema.optional(Schema.String),
                reason: Schema.optional(Schema.String),
                message: Schema.optional(Schema.String),
                severity: Schema.optional(Schema.String),
                lastUpdatedAt: Schema.optional(Schema.String),
              }),
            ),
          ),
          provisioningState: Schema.optional(
            Schema.Literals([
              "Succeeded",
              "Failed",
              "Canceled",
              "Provisioning",
              "Updating",
              "Deleting",
              "Accepted",
              "Created",
            ]),
          ),
        }),
        location: Schema.String,
        extendedLocation: Schema.optional(
          Schema.Struct({
            type: Schema.optional(Schema.String),
            name: Schema.optional(Schema.String),
          }),
        ),
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
        tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        name: Schema.optional(Schema.String),
        id: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        kind: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<VirtualMachineTemplatesListByResourceGroupOutput>;

// The operation
/**
 * Implements GET virtualMachineTemplates in a resource group.
 *
 * List of virtualMachineTemplates in a resource group.
 *
 * @param subscriptionId - The Subscription ID.
 * @param resourceGroupName - The Resource Group Name.
 * @param api-version - Client Api Version.
 */
export const VirtualMachineTemplatesListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineTemplatesListByResourceGroupInput,
    outputSchema: VirtualMachineTemplatesListByResourceGroupOutput,
  }));
// Input Schema
export interface VirtualMachineTemplatesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  virtualMachineTemplateName: string;
  tags?: Record<string, string>;
}
export const VirtualMachineTemplatesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    virtualMachineTemplateName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/virtualMachineTemplates/{virtualMachineTemplateName}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<VirtualMachineTemplatesUpdateInput>;

// Output Schema
export interface VirtualMachineTemplatesUpdateOutput {
  properties: {
    uuid?: string;
    vCenterId?: string;
    moRefId?: string;
    inventoryItemId?: string;
    moName?: string;
    memorySizeMB?: number;
    numCPUs?: number;
    numCoresPerSocket?: number;
    osType?: "Windows" | "Linux" | "Other";
    osName?: string;
    folderPath?: string;
    networkInterfaces?: {
      name?: string;
      label?: string;
      ipAddresses?: string[];
      macAddress?: string;
      networkId?: string;
      nicType?:
        | "vmxnet3"
        | "vmxnet2"
        | "vmxnet"
        | "e1000"
        | "e1000e"
        | "pcnet32";
      powerOnBoot?: "enabled" | "disabled";
      networkMoRefId?: string;
      networkMoName?: string;
      deviceKey?: number;
      ipSettings?: {
        allocationMethod?:
          | "unset"
          | "dynamic"
          | "static"
          | "linklayer"
          | "random"
          | "other";
        dnsServers?: string[];
        gateway?: string[];
        ipAddress?: string;
        subnetMask?: string;
        primaryWinsServer?: string;
        secondaryWinsServer?: string;
        ipAddressInfo?: {
          allocationMethod?: string;
          ipAddress?: string;
          subnetMask?: string;
        }[];
      };
    }[];
    disks?: {
      name?: string;
      label?: string;
      diskObjectId?: string;
      diskSizeGB?: number;
      deviceKey?: number;
      diskMode?:
        | "persistent"
        | "independent_persistent"
        | "independent_nonpersistent";
      controllerKey?: number;
      unitNumber?: number;
      deviceName?: string;
      diskType?:
        | "flat"
        | "pmem"
        | "rawphysical"
        | "rawvirtual"
        | "sparse"
        | "sesparse"
        | "unknown";
    }[];
    customResourceName?: string;
    toolsVersionStatus?: string;
    toolsVersion?: string;
    firmwareType?: "bios" | "efi";
    statuses?: {
      type?: string;
      status?: string;
      reason?: string;
      message?: string;
      severity?: string;
      lastUpdatedAt?: string;
    }[];
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Provisioning"
      | "Updating"
      | "Deleting"
      | "Accepted"
      | "Created";
  };
  location: string;
  extendedLocation?: { type?: string; name?: string };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  tags?: Record<string, string>;
  name?: string;
  id?: string;
  type?: string;
  kind?: string;
}
export const VirtualMachineTemplatesUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.Struct({
      uuid: Schema.optional(Schema.String),
      vCenterId: Schema.optional(Schema.String),
      moRefId: Schema.optional(Schema.String),
      inventoryItemId: Schema.optional(Schema.String),
      moName: Schema.optional(Schema.String),
      memorySizeMB: Schema.optional(Schema.Number),
      numCPUs: Schema.optional(Schema.Number),
      numCoresPerSocket: Schema.optional(Schema.Number),
      osType: Schema.optional(Schema.Literals(["Windows", "Linux", "Other"])),
      osName: Schema.optional(Schema.String),
      folderPath: Schema.optional(Schema.String),
      networkInterfaces: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.optional(Schema.String),
            label: Schema.optional(Schema.String),
            ipAddresses: Schema.optional(Schema.Array(Schema.String)),
            macAddress: Schema.optional(Schema.String),
            networkId: Schema.optional(Schema.String),
            nicType: Schema.optional(
              Schema.Literals([
                "vmxnet3",
                "vmxnet2",
                "vmxnet",
                "e1000",
                "e1000e",
                "pcnet32",
              ]),
            ),
            powerOnBoot: Schema.optional(
              Schema.Literals(["enabled", "disabled"]),
            ),
            networkMoRefId: Schema.optional(Schema.String),
            networkMoName: Schema.optional(Schema.String),
            deviceKey: Schema.optional(Schema.Number),
            ipSettings: Schema.optional(
              Schema.Struct({
                allocationMethod: Schema.optional(
                  Schema.Literals([
                    "unset",
                    "dynamic",
                    "static",
                    "linklayer",
                    "random",
                    "other",
                  ]),
                ),
                dnsServers: Schema.optional(Schema.Array(Schema.String)),
                gateway: Schema.optional(Schema.Array(Schema.String)),
                ipAddress: Schema.optional(Schema.String),
                subnetMask: Schema.optional(Schema.String),
                primaryWinsServer: Schema.optional(Schema.String),
                secondaryWinsServer: Schema.optional(Schema.String),
                ipAddressInfo: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      allocationMethod: Schema.optional(Schema.String),
                      ipAddress: Schema.optional(Schema.String),
                      subnetMask: Schema.optional(Schema.String),
                    }),
                  ),
                ),
              }),
            ),
          }),
        ),
      ),
      disks: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.optional(Schema.String),
            label: Schema.optional(Schema.String),
            diskObjectId: Schema.optional(Schema.String),
            diskSizeGB: Schema.optional(Schema.Number),
            deviceKey: Schema.optional(Schema.Number),
            diskMode: Schema.optional(
              Schema.Literals([
                "persistent",
                "independent_persistent",
                "independent_nonpersistent",
              ]),
            ),
            controllerKey: Schema.optional(Schema.Number),
            unitNumber: Schema.optional(Schema.Number),
            deviceName: Schema.optional(Schema.String),
            diskType: Schema.optional(
              Schema.Literals([
                "flat",
                "pmem",
                "rawphysical",
                "rawvirtual",
                "sparse",
                "sesparse",
                "unknown",
              ]),
            ),
          }),
        ),
      ),
      customResourceName: Schema.optional(Schema.String),
      toolsVersionStatus: Schema.optional(Schema.String),
      toolsVersion: Schema.optional(Schema.String),
      firmwareType: Schema.optional(Schema.Literals(["bios", "efi"])),
      statuses: Schema.optional(
        Schema.Array(
          Schema.Struct({
            type: Schema.optional(Schema.String),
            status: Schema.optional(Schema.String),
            reason: Schema.optional(Schema.String),
            message: Schema.optional(Schema.String),
            severity: Schema.optional(Schema.String),
            lastUpdatedAt: Schema.optional(Schema.String),
          }),
        ),
      ),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Succeeded",
          "Failed",
          "Canceled",
          "Provisioning",
          "Updating",
          "Deleting",
          "Accepted",
          "Created",
        ]),
      ),
    }),
    location: Schema.String,
    extendedLocation: Schema.optional(
      Schema.Struct({
        type: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
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
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<VirtualMachineTemplatesUpdateOutput>;

// The operation
/**
 * Updates a virtual machine template.
 *
 * API to update certain properties of the virtual machine template resource.
 *
 * @param subscriptionId - The Subscription ID.
 * @param resourceGroupName - The Resource Group Name.
 * @param virtualMachineTemplateName - Name of the virtual machine template resource.
 * @param api-version - Client Api Version.
 */
export const VirtualMachineTemplatesUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualMachineTemplatesUpdateInput,
    outputSchema: VirtualMachineTemplatesUpdateOutput,
  }));
// Input Schema
export interface VirtualNetworksCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  virtualNetworkName: string;
  properties: {
    uuid?: string;
    vCenterId?: string;
    moRefId?: string;
    inventoryItemId?: string;
    moName?: string;
    customResourceName?: string;
    statuses?: {
      type?: string;
      status?: string;
      reason?: string;
      message?: string;
      severity?: string;
      lastUpdatedAt?: string;
    }[];
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Provisioning"
      | "Updating"
      | "Deleting"
      | "Accepted"
      | "Created";
  };
  location: string;
  extendedLocation?: { type?: string; name?: string };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  tags?: Record<string, string>;
  name?: string;
  id?: string;
  type?: string;
  kind?: string;
}
export const VirtualNetworksCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    virtualNetworkName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      uuid: Schema.optional(Schema.String),
      vCenterId: Schema.optional(Schema.String),
      moRefId: Schema.optional(Schema.String),
      inventoryItemId: Schema.optional(Schema.String),
      moName: Schema.optional(Schema.String),
      customResourceName: Schema.optional(Schema.String),
      statuses: Schema.optional(
        Schema.Array(
          Schema.Struct({
            type: Schema.optional(Schema.String),
            status: Schema.optional(Schema.String),
            reason: Schema.optional(Schema.String),
            message: Schema.optional(Schema.String),
            severity: Schema.optional(Schema.String),
            lastUpdatedAt: Schema.optional(Schema.String),
          }),
        ),
      ),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Succeeded",
          "Failed",
          "Canceled",
          "Provisioning",
          "Updating",
          "Deleting",
          "Accepted",
          "Created",
        ]),
      ),
    }),
    location: Schema.String,
    extendedLocation: Schema.optional(
      Schema.Struct({
        type: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
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
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/virtualNetworks/{virtualNetworkName}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<VirtualNetworksCreateInput>;

// Output Schema
export interface VirtualNetworksCreateOutput {
  properties: {
    uuid?: string;
    vCenterId?: string;
    moRefId?: string;
    inventoryItemId?: string;
    moName?: string;
    customResourceName?: string;
    statuses?: {
      type?: string;
      status?: string;
      reason?: string;
      message?: string;
      severity?: string;
      lastUpdatedAt?: string;
    }[];
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Provisioning"
      | "Updating"
      | "Deleting"
      | "Accepted"
      | "Created";
  };
  location: string;
  extendedLocation?: { type?: string; name?: string };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  tags?: Record<string, string>;
  name?: string;
  id?: string;
  type?: string;
  kind?: string;
}
export const VirtualNetworksCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.Struct({
      uuid: Schema.optional(Schema.String),
      vCenterId: Schema.optional(Schema.String),
      moRefId: Schema.optional(Schema.String),
      inventoryItemId: Schema.optional(Schema.String),
      moName: Schema.optional(Schema.String),
      customResourceName: Schema.optional(Schema.String),
      statuses: Schema.optional(
        Schema.Array(
          Schema.Struct({
            type: Schema.optional(Schema.String),
            status: Schema.optional(Schema.String),
            reason: Schema.optional(Schema.String),
            message: Schema.optional(Schema.String),
            severity: Schema.optional(Schema.String),
            lastUpdatedAt: Schema.optional(Schema.String),
          }),
        ),
      ),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Succeeded",
          "Failed",
          "Canceled",
          "Provisioning",
          "Updating",
          "Deleting",
          "Accepted",
          "Created",
        ]),
      ),
    }),
    location: Schema.String,
    extendedLocation: Schema.optional(
      Schema.Struct({
        type: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
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
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<VirtualNetworksCreateOutput>;

// The operation
/**
 * Implements virtual network PUT method.
 *
 * Create Or Update virtual network.
 *
 * @param subscriptionId - The Subscription ID.
 * @param resourceGroupName - The Resource Group Name.
 * @param virtualNetworkName - Name of the virtual network resource.
 * @param api-version - Client Api Version.
 */
export const VirtualNetworksCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualNetworksCreateInput,
    outputSchema: VirtualNetworksCreateOutput,
  }),
);
// Input Schema
export interface VirtualNetworksDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  virtualNetworkName: string;
  force?: boolean;
}
export const VirtualNetworksDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    virtualNetworkName: Schema.String.pipe(T.PathParam()),
    force: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/virtualNetworks/{virtualNetworkName}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<VirtualNetworksDeleteInput>;

// Output Schema
export type VirtualNetworksDeleteOutput = void;
export const VirtualNetworksDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<VirtualNetworksDeleteOutput>;

// The operation
/**
 * Deletes an virtual network.
 *
 * Implements virtual network DELETE method.
 *
 * @param subscriptionId - The Subscription ID.
 * @param resourceGroupName - The Resource Group Name.
 * @param virtualNetworkName - Name of the virtual network resource.
 * @param api-version - Client Api Version.
 * @param force - Whether force delete was specified.
 */
export const VirtualNetworksDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualNetworksDeleteInput,
    outputSchema: VirtualNetworksDeleteOutput,
  }),
);
// Input Schema
export interface VirtualNetworksGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  virtualNetworkName: string;
}
export const VirtualNetworksGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    virtualNetworkName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/virtualNetworks/{virtualNetworkName}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<VirtualNetworksGetInput>;

// Output Schema
export interface VirtualNetworksGetOutput {
  properties: {
    uuid?: string;
    vCenterId?: string;
    moRefId?: string;
    inventoryItemId?: string;
    moName?: string;
    customResourceName?: string;
    statuses?: {
      type?: string;
      status?: string;
      reason?: string;
      message?: string;
      severity?: string;
      lastUpdatedAt?: string;
    }[];
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Provisioning"
      | "Updating"
      | "Deleting"
      | "Accepted"
      | "Created";
  };
  location: string;
  extendedLocation?: { type?: string; name?: string };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  tags?: Record<string, string>;
  name?: string;
  id?: string;
  type?: string;
  kind?: string;
}
export const VirtualNetworksGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.Struct({
      uuid: Schema.optional(Schema.String),
      vCenterId: Schema.optional(Schema.String),
      moRefId: Schema.optional(Schema.String),
      inventoryItemId: Schema.optional(Schema.String),
      moName: Schema.optional(Schema.String),
      customResourceName: Schema.optional(Schema.String),
      statuses: Schema.optional(
        Schema.Array(
          Schema.Struct({
            type: Schema.optional(Schema.String),
            status: Schema.optional(Schema.String),
            reason: Schema.optional(Schema.String),
            message: Schema.optional(Schema.String),
            severity: Schema.optional(Schema.String),
            lastUpdatedAt: Schema.optional(Schema.String),
          }),
        ),
      ),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Succeeded",
          "Failed",
          "Canceled",
          "Provisioning",
          "Updating",
          "Deleting",
          "Accepted",
          "Created",
        ]),
      ),
    }),
    location: Schema.String,
    extendedLocation: Schema.optional(
      Schema.Struct({
        type: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
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
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<VirtualNetworksGetOutput>;

// The operation
/**
 * Gets a virtual network.
 *
 * Implements virtual network GET method.
 *
 * @param subscriptionId - The Subscription ID.
 * @param resourceGroupName - The Resource Group Name.
 * @param virtualNetworkName - Name of the virtual network resource.
 * @param api-version - Client Api Version.
 */
export const VirtualNetworksGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VirtualNetworksGetInput,
  outputSchema: VirtualNetworksGetOutput,
}));
// Input Schema
export interface VirtualNetworksListInput {
  subscriptionId: string;
}
export const VirtualNetworksListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ConnectedVMwarevSphere/virtualNetworks",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<VirtualNetworksListInput>;

// Output Schema
export interface VirtualNetworksListOutput {
  nextLink?: string;
  value: {
    properties: {
      uuid?: string;
      vCenterId?: string;
      moRefId?: string;
      inventoryItemId?: string;
      moName?: string;
      customResourceName?: string;
      statuses?: {
        type?: string;
        status?: string;
        reason?: string;
        message?: string;
        severity?: string;
        lastUpdatedAt?: string;
      }[];
      provisioningState?:
        | "Succeeded"
        | "Failed"
        | "Canceled"
        | "Provisioning"
        | "Updating"
        | "Deleting"
        | "Accepted"
        | "Created";
    };
    location: string;
    extendedLocation?: { type?: string; name?: string };
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
    tags?: Record<string, string>;
    name?: string;
    id?: string;
    type?: string;
    kind?: string;
  }[];
}
export const VirtualNetworksListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.Array(
      Schema.Struct({
        properties: Schema.Struct({
          uuid: Schema.optional(Schema.String),
          vCenterId: Schema.optional(Schema.String),
          moRefId: Schema.optional(Schema.String),
          inventoryItemId: Schema.optional(Schema.String),
          moName: Schema.optional(Schema.String),
          customResourceName: Schema.optional(Schema.String),
          statuses: Schema.optional(
            Schema.Array(
              Schema.Struct({
                type: Schema.optional(Schema.String),
                status: Schema.optional(Schema.String),
                reason: Schema.optional(Schema.String),
                message: Schema.optional(Schema.String),
                severity: Schema.optional(Schema.String),
                lastUpdatedAt: Schema.optional(Schema.String),
              }),
            ),
          ),
          provisioningState: Schema.optional(
            Schema.Literals([
              "Succeeded",
              "Failed",
              "Canceled",
              "Provisioning",
              "Updating",
              "Deleting",
              "Accepted",
              "Created",
            ]),
          ),
        }),
        location: Schema.String,
        extendedLocation: Schema.optional(
          Schema.Struct({
            type: Schema.optional(Schema.String),
            name: Schema.optional(Schema.String),
          }),
        ),
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
        tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        name: Schema.optional(Schema.String),
        id: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        kind: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<VirtualNetworksListOutput>;

// The operation
/**
 * Implements GET virtualNetworks in a subscription.
 *
 * List of virtualNetworks in a subscription.
 *
 * @param subscriptionId - The Subscription ID.
 * @param api-version - Client Api Version.
 */
export const VirtualNetworksList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VirtualNetworksListInput,
  outputSchema: VirtualNetworksListOutput,
}));
// Input Schema
export interface VirtualNetworksListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const VirtualNetworksListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/virtualNetworks",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<VirtualNetworksListByResourceGroupInput>;

// Output Schema
export interface VirtualNetworksListByResourceGroupOutput {
  nextLink?: string;
  value: {
    properties: {
      uuid?: string;
      vCenterId?: string;
      moRefId?: string;
      inventoryItemId?: string;
      moName?: string;
      customResourceName?: string;
      statuses?: {
        type?: string;
        status?: string;
        reason?: string;
        message?: string;
        severity?: string;
        lastUpdatedAt?: string;
      }[];
      provisioningState?:
        | "Succeeded"
        | "Failed"
        | "Canceled"
        | "Provisioning"
        | "Updating"
        | "Deleting"
        | "Accepted"
        | "Created";
    };
    location: string;
    extendedLocation?: { type?: string; name?: string };
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
    tags?: Record<string, string>;
    name?: string;
    id?: string;
    type?: string;
    kind?: string;
  }[];
}
export const VirtualNetworksListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.Array(
      Schema.Struct({
        properties: Schema.Struct({
          uuid: Schema.optional(Schema.String),
          vCenterId: Schema.optional(Schema.String),
          moRefId: Schema.optional(Schema.String),
          inventoryItemId: Schema.optional(Schema.String),
          moName: Schema.optional(Schema.String),
          customResourceName: Schema.optional(Schema.String),
          statuses: Schema.optional(
            Schema.Array(
              Schema.Struct({
                type: Schema.optional(Schema.String),
                status: Schema.optional(Schema.String),
                reason: Schema.optional(Schema.String),
                message: Schema.optional(Schema.String),
                severity: Schema.optional(Schema.String),
                lastUpdatedAt: Schema.optional(Schema.String),
              }),
            ),
          ),
          provisioningState: Schema.optional(
            Schema.Literals([
              "Succeeded",
              "Failed",
              "Canceled",
              "Provisioning",
              "Updating",
              "Deleting",
              "Accepted",
              "Created",
            ]),
          ),
        }),
        location: Schema.String,
        extendedLocation: Schema.optional(
          Schema.Struct({
            type: Schema.optional(Schema.String),
            name: Schema.optional(Schema.String),
          }),
        ),
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
        tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        name: Schema.optional(Schema.String),
        id: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        kind: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<VirtualNetworksListByResourceGroupOutput>;

// The operation
/**
 * Implements GET virtualNetworks in a resource group.
 *
 * List of virtualNetworks in a resource group.
 *
 * @param subscriptionId - The Subscription ID.
 * @param resourceGroupName - The Resource Group Name.
 * @param api-version - Client Api Version.
 */
export const VirtualNetworksListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualNetworksListByResourceGroupInput,
    outputSchema: VirtualNetworksListByResourceGroupOutput,
  }));
// Input Schema
export interface VirtualNetworksUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  virtualNetworkName: string;
  tags?: Record<string, string>;
}
export const VirtualNetworksUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    virtualNetworkName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/virtualNetworks/{virtualNetworkName}",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<VirtualNetworksUpdateInput>;

// Output Schema
export interface VirtualNetworksUpdateOutput {
  properties: {
    uuid?: string;
    vCenterId?: string;
    moRefId?: string;
    inventoryItemId?: string;
    moName?: string;
    customResourceName?: string;
    statuses?: {
      type?: string;
      status?: string;
      reason?: string;
      message?: string;
      severity?: string;
      lastUpdatedAt?: string;
    }[];
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Provisioning"
      | "Updating"
      | "Deleting"
      | "Accepted"
      | "Created";
  };
  location: string;
  extendedLocation?: { type?: string; name?: string };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  tags?: Record<string, string>;
  name?: string;
  id?: string;
  type?: string;
  kind?: string;
}
export const VirtualNetworksUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.Struct({
      uuid: Schema.optional(Schema.String),
      vCenterId: Schema.optional(Schema.String),
      moRefId: Schema.optional(Schema.String),
      inventoryItemId: Schema.optional(Schema.String),
      moName: Schema.optional(Schema.String),
      customResourceName: Schema.optional(Schema.String),
      statuses: Schema.optional(
        Schema.Array(
          Schema.Struct({
            type: Schema.optional(Schema.String),
            status: Schema.optional(Schema.String),
            reason: Schema.optional(Schema.String),
            message: Schema.optional(Schema.String),
            severity: Schema.optional(Schema.String),
            lastUpdatedAt: Schema.optional(Schema.String),
          }),
        ),
      ),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Succeeded",
          "Failed",
          "Canceled",
          "Provisioning",
          "Updating",
          "Deleting",
          "Accepted",
          "Created",
        ]),
      ),
    }),
    location: Schema.String,
    extendedLocation: Schema.optional(
      Schema.Struct({
        type: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
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
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<VirtualNetworksUpdateOutput>;

// The operation
/**
 * Updates a virtual network.
 *
 * API to update certain properties of the virtual network resource.
 *
 * @param subscriptionId - The Subscription ID.
 * @param resourceGroupName - The Resource Group Name.
 * @param virtualNetworkName - Name of the virtual network resource.
 * @param api-version - Client Api Version.
 */
export const VirtualNetworksUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualNetworksUpdateInput,
    outputSchema: VirtualNetworksUpdateOutput,
  }),
);
// Input Schema
export interface VMInstanceGuestAgentsCreateInput {
  resourceUri: string;
  properties: {
    uuid?: string;
    credentials?: {
      username?: string;
      password?: string | Redacted.Redacted<string>;
      privateKey?: string | Redacted.Redacted<string>;
    };
    privateLinkScopeResourceId?: string;
    httpProxyConfig?: { httpsProxy?: string };
    provisioningAction?: "install" | "uninstall" | "repair";
    status?: string;
    customResourceName?: string;
    statuses?: {
      type?: string;
      status?: string;
      reason?: string;
      message?: string;
      severity?: string;
      lastUpdatedAt?: string;
    }[];
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Provisioning"
      | "Updating"
      | "Deleting"
      | "Accepted"
      | "Created";
  };
}
export const VMInstanceGuestAgentsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      uuid: Schema.optional(Schema.String),
      credentials: Schema.optional(
        Schema.Struct({
          username: Schema.optional(Schema.String),
          password: Schema.optional(SensitiveString),
          privateKey: Schema.optional(SensitiveString),
        }),
      ),
      privateLinkScopeResourceId: Schema.optional(Schema.String),
      httpProxyConfig: Schema.optional(
        Schema.Struct({
          httpsProxy: Schema.optional(Schema.String),
        }),
      ),
      provisioningAction: Schema.optional(
        Schema.Literals(["install", "uninstall", "repair"]),
      ),
      status: Schema.optional(Schema.String),
      customResourceName: Schema.optional(Schema.String),
      statuses: Schema.optional(
        Schema.Array(
          Schema.Struct({
            type: Schema.optional(Schema.String),
            status: Schema.optional(Schema.String),
            reason: Schema.optional(Schema.String),
            message: Schema.optional(Schema.String),
            severity: Schema.optional(Schema.String),
            lastUpdatedAt: Schema.optional(Schema.String),
          }),
        ),
      ),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Succeeded",
          "Failed",
          "Canceled",
          "Provisioning",
          "Updating",
          "Deleting",
          "Accepted",
          "Created",
        ]),
      ),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/{resourceUri}/providers/Microsoft.ConnectedVMwarevSphere/virtualMachineInstances/default/guestAgents/default",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<VMInstanceGuestAgentsCreateInput>;

// Output Schema
export interface VMInstanceGuestAgentsCreateOutput {
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
export const VMInstanceGuestAgentsCreateOutput =
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
  }) as unknown as Schema.Codec<VMInstanceGuestAgentsCreateOutput>;

// The operation
/**
 * Implements GuestAgent PUT method.
 *
 * Create Or Update GuestAgent.
 *
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the Hybrid Compute machine resource to be extended.
 * @param api-version - Client Api Version.
 */
export const VMInstanceGuestAgentsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VMInstanceGuestAgentsCreateInput,
    outputSchema: VMInstanceGuestAgentsCreateOutput,
  }),
);
// Input Schema
export interface VMInstanceGuestAgentsDeleteInput {
  resourceUri: string;
}
export const VMInstanceGuestAgentsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/{resourceUri}/providers/Microsoft.ConnectedVMwarevSphere/virtualMachineInstances/default/guestAgents/default",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<VMInstanceGuestAgentsDeleteInput>;

// Output Schema
export type VMInstanceGuestAgentsDeleteOutput = void;
export const VMInstanceGuestAgentsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<VMInstanceGuestAgentsDeleteOutput>;

// The operation
/**
 * Deletes an GuestAgent.
 *
 * Implements GuestAgent DELETE method.
 *
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the Hybrid Compute machine resource to be extended.
 * @param api-version - Client Api Version.
 */
export const VMInstanceGuestAgentsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VMInstanceGuestAgentsDeleteInput,
    outputSchema: VMInstanceGuestAgentsDeleteOutput,
  }),
);
// Input Schema
export interface VMInstanceGuestAgentsGetInput {
  resourceUri: string;
}
export const VMInstanceGuestAgentsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{resourceUri}/providers/Microsoft.ConnectedVMwarevSphere/virtualMachineInstances/default/guestAgents/default",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<VMInstanceGuestAgentsGetInput>;

// Output Schema
export interface VMInstanceGuestAgentsGetOutput {
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
export const VMInstanceGuestAgentsGetOutput =
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
  }) as unknown as Schema.Codec<VMInstanceGuestAgentsGetOutput>;

// The operation
/**
 * Gets GuestAgent.
 *
 * Implements GuestAgent GET method.
 *
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the Hybrid Compute machine resource to be extended.
 * @param api-version - Client Api Version.
 */
export const VMInstanceGuestAgentsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VMInstanceGuestAgentsGetInput,
    outputSchema: VMInstanceGuestAgentsGetOutput,
  }),
);
// Input Schema
export interface VMInstanceGuestAgentsListInput {
  resourceUri: string;
}
export const VMInstanceGuestAgentsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{resourceUri}/providers/Microsoft.ConnectedVMwarevSphere/virtualMachineInstances/default/guestAgents",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<VMInstanceGuestAgentsListInput>;

// Output Schema
export interface VMInstanceGuestAgentsListOutput {
  nextLink?: string;
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
}
export const VMInstanceGuestAgentsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<VMInstanceGuestAgentsListOutput>;

// The operation
/**
 * Implements GET GuestAgent in a vm.
 *
 * Returns the list of GuestAgent of the given vm.
 *
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the Hybrid Compute machine resource to be extended.
 * @param api-version - Client Api Version.
 */
export const VMInstanceGuestAgentsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VMInstanceGuestAgentsListInput,
    outputSchema: VMInstanceGuestAgentsListOutput,
  }),
);
// Input Schema
export interface VmInstanceHybridIdentityMetadataGetInput {
  resourceUri: string;
}
export const VmInstanceHybridIdentityMetadataGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{resourceUri}/providers/Microsoft.ConnectedVMwarevSphere/virtualMachineInstances/default/hybridIdentityMetadata/default",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<VmInstanceHybridIdentityMetadataGetInput>;

// Output Schema
export interface VmInstanceHybridIdentityMetadataGetOutput {
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
export const VmInstanceHybridIdentityMetadataGetOutput =
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
  }) as unknown as Schema.Codec<VmInstanceHybridIdentityMetadataGetOutput>;

// The operation
/**
 * Gets HybridIdentityMetadata.
 *
 * Implements HybridIdentityMetadata GET method.
 *
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the Hybrid Compute machine resource to be extended.
 * @param api-version - Client Api Version.
 */
export const VmInstanceHybridIdentityMetadataGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VmInstanceHybridIdentityMetadataGetInput,
    outputSchema: VmInstanceHybridIdentityMetadataGetOutput,
  }));
// Input Schema
export interface VmInstanceHybridIdentityMetadataListInput {
  resourceUri: string;
}
export const VmInstanceHybridIdentityMetadataListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{resourceUri}/providers/Microsoft.ConnectedVMwarevSphere/virtualMachineInstances/default/hybridIdentityMetadata",
      apiVersion: "2023-12-01",
    }),
  ) as unknown as Schema.Codec<VmInstanceHybridIdentityMetadataListInput>;

// Output Schema
export interface VmInstanceHybridIdentityMetadataListOutput {
  nextLink?: string;
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
}
export const VmInstanceHybridIdentityMetadataListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<VmInstanceHybridIdentityMetadataListOutput>;

// The operation
/**
 * Implements GET HybridIdentityMetadata in a vm.
 *
 * Returns the list of HybridIdentityMetadata of the given vm.
 *
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the Hybrid Compute machine resource to be extended.
 * @param api-version - Client Api Version.
 */
export const VmInstanceHybridIdentityMetadataList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VmInstanceHybridIdentityMetadataListInput,
    outputSchema: VmInstanceHybridIdentityMetadataListOutput,
  }));
