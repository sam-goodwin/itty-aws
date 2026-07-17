/**
 * Azure Devcenter API
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
export interface AttachedNetworksCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  devCenterName: string;
  attachedNetworkConnectionName: string;
  properties?: {
    provisioningState?:
      | "NotSpecified"
      | "Accepted"
      | "Running"
      | "Creating"
      | "Created"
      | "Updating"
      | "Updated"
      | "Deleting"
      | "Deleted"
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "MovingResources"
      | "TransientFailure"
      | "RolloutInProgress"
      | "StorageProvisioningFailed";
    networkConnectionId: string;
    networkConnectionLocation?: string;
    healthCheckStatus?:
      | "Unknown"
      | "Pending"
      | "Running"
      | "Passed"
      | "Warning"
      | "Failed"
      | "Informational";
    domainJoinType?: "HybridAzureADJoin" | "AzureADJoin" | "None";
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
export const AttachedNetworksCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    devCenterName: Schema.String.pipe(T.PathParam()),
    attachedNetworkConnectionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "NotSpecified",
            "Accepted",
            "Running",
            "Creating",
            "Created",
            "Updating",
            "Updated",
            "Deleting",
            "Deleted",
            "Succeeded",
            "Failed",
            "Canceled",
            "MovingResources",
            "TransientFailure",
            "RolloutInProgress",
            "StorageProvisioningFailed",
          ]),
        ),
        networkConnectionId: Schema.String,
        networkConnectionLocation: Schema.optional(Schema.String),
        healthCheckStatus: Schema.optional(
          Schema.Literals([
            "Unknown",
            "Pending",
            "Running",
            "Passed",
            "Warning",
            "Failed",
            "Informational",
          ]),
        ),
        domainJoinType: Schema.optional(
          Schema.Literals(["HybridAzureADJoin", "AzureADJoin", "None"]),
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
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/attachednetworks/{attachedNetworkConnectionName}",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<AttachedNetworksCreateOrUpdateInput>;

// Output Schema
export interface AttachedNetworksCreateOrUpdateOutput {
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
export const AttachedNetworksCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<AttachedNetworksCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates an attached NetworkConnection.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param devCenterName - The name of the devcenter.
 * @param attachedNetworkConnectionName - The name of the attached NetworkConnection.
 */
export const AttachedNetworksCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AttachedNetworksCreateOrUpdateInput,
    outputSchema: AttachedNetworksCreateOrUpdateOutput,
  }));
// Input Schema
export interface AttachedNetworksDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  devCenterName: string;
  attachedNetworkConnectionName: string;
}
export const AttachedNetworksDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    devCenterName: Schema.String.pipe(T.PathParam()),
    attachedNetworkConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/attachednetworks/{attachedNetworkConnectionName}",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<AttachedNetworksDeleteInput>;

// Output Schema
export type AttachedNetworksDeleteOutput = void;
export const AttachedNetworksDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<AttachedNetworksDeleteOutput>;

// The operation
/**
 * Un-attach a NetworkConnection.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param devCenterName - The name of the devcenter.
 * @param attachedNetworkConnectionName - The name of the attached NetworkConnection.
 */
export const AttachedNetworksDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: AttachedNetworksDeleteInput,
  outputSchema: AttachedNetworksDeleteOutput,
}));
// Input Schema
export interface AttachedNetworksGetByDevCenterInput {
  subscriptionId: string;
  resourceGroupName: string;
  devCenterName: string;
  attachedNetworkConnectionName: string;
}
export const AttachedNetworksGetByDevCenterInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    devCenterName: Schema.String.pipe(T.PathParam()),
    attachedNetworkConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/attachednetworks/{attachedNetworkConnectionName}",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<AttachedNetworksGetByDevCenterInput>;

// Output Schema
export interface AttachedNetworksGetByDevCenterOutput {
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
export const AttachedNetworksGetByDevCenterOutput =
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
  }) as unknown as Schema.Codec<AttachedNetworksGetByDevCenterOutput>;

// The operation
/**
 * Gets an attached NetworkConnection.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param devCenterName - The name of the devcenter.
 * @param attachedNetworkConnectionName - The name of the attached NetworkConnection.
 */
export const AttachedNetworksGetByDevCenter =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AttachedNetworksGetByDevCenterInput,
    outputSchema: AttachedNetworksGetByDevCenterOutput,
  }));
// Input Schema
export interface AttachedNetworksGetByProjectInput {
  subscriptionId: string;
  resourceGroupName: string;
  projectName: string;
  attachedNetworkConnectionName: string;
}
export const AttachedNetworksGetByProjectInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    attachedNetworkConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/attachednetworks/{attachedNetworkConnectionName}",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<AttachedNetworksGetByProjectInput>;

// Output Schema
export interface AttachedNetworksGetByProjectOutput {
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
export const AttachedNetworksGetByProjectOutput =
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
  }) as unknown as Schema.Codec<AttachedNetworksGetByProjectOutput>;

// The operation
/**
 * Gets an attached NetworkConnection.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - The name of the project.
 * @param attachedNetworkConnectionName - The name of the attached NetworkConnection.
 */
export const AttachedNetworksGetByProject =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AttachedNetworksGetByProjectInput,
    outputSchema: AttachedNetworksGetByProjectOutput,
  }));
// Input Schema
export interface AttachedNetworksListByDevCenterInput {
  subscriptionId: string;
  resourceGroupName: string;
  devCenterName: string;
  $top?: number;
}
export const AttachedNetworksListByDevCenterInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    devCenterName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/attachednetworks",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<AttachedNetworksListByDevCenterInput>;

// Output Schema
export interface AttachedNetworksListByDevCenterOutput {
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
export const AttachedNetworksListByDevCenterOutput =
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AttachedNetworksListByDevCenterOutput>;

// The operation
/**
 * Lists the attached NetworkConnections for a DevCenter.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param devCenterName - The name of the devcenter.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 */
export const AttachedNetworksListByDevCenter =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AttachedNetworksListByDevCenterInput,
    outputSchema: AttachedNetworksListByDevCenterOutput,
  }));
// Input Schema
export interface AttachedNetworksListByProjectInput {
  subscriptionId: string;
  resourceGroupName: string;
  projectName: string;
  $top?: number;
}
export const AttachedNetworksListByProjectInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/attachednetworks",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<AttachedNetworksListByProjectInput>;

// Output Schema
export interface AttachedNetworksListByProjectOutput {
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
export const AttachedNetworksListByProjectOutput =
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AttachedNetworksListByProjectOutput>;

// The operation
/**
 * Lists the attached NetworkConnections for a Project.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - The name of the project.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 */
export const AttachedNetworksListByProject =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AttachedNetworksListByProjectInput,
    outputSchema: AttachedNetworksListByProjectOutput,
  }));
// Input Schema
export interface CatalogsConnectInput {
  subscriptionId: string;
  resourceGroupName: string;
  devCenterName: string;
  catalogName: string;
}
export const CatalogsConnectInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  devCenterName: Schema.String.pipe(T.PathParam()),
  catalogName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/catalogs/{catalogName}/connect",
    apiVersion: "2025-02-01",
  }),
) as unknown as Schema.Codec<CatalogsConnectInput>;

// Output Schema
export type CatalogsConnectOutput = void;
export const CatalogsConnectOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<CatalogsConnectOutput>;

// The operation
/**
 * Connects a catalog to enable syncing.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param devCenterName - The name of the devcenter.
 * @param catalogName - The name of the Catalog.
 */
export const CatalogsConnect = /*@__PURE__*/ API.make(() => ({
  inputSchema: CatalogsConnectInput,
  outputSchema: CatalogsConnectOutput,
}));
// Input Schema
export interface CatalogsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  devCenterName: string;
  catalogName: string;
  properties?: {
    gitHub?: {
      uri?: string;
      branch?: string;
      secretIdentifier?: string;
      path?: string;
    };
    adoGit?: {
      uri?: string;
      branch?: string;
      secretIdentifier?: string;
      path?: string;
    };
    syncType?: "Manual" | "Scheduled";
    tags?: Record<string, string>;
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
export const CatalogsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    devCenterName: Schema.String.pipe(T.PathParam()),
    catalogName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        gitHub: Schema.optional(
          Schema.Struct({
            uri: Schema.optional(Schema.String),
            branch: Schema.optional(Schema.String),
            secretIdentifier: Schema.optional(Schema.String),
            path: Schema.optional(Schema.String),
          }),
        ),
        adoGit: Schema.optional(
          Schema.Struct({
            uri: Schema.optional(Schema.String),
            branch: Schema.optional(Schema.String),
            secretIdentifier: Schema.optional(Schema.String),
            path: Schema.optional(Schema.String),
          }),
        ),
        syncType: Schema.optional(Schema.Literals(["Manual", "Scheduled"])),
        tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
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
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/catalogs/{catalogName}",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<CatalogsCreateOrUpdateInput>;

// Output Schema
export interface CatalogsCreateOrUpdateOutput {
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
export const CatalogsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<CatalogsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a catalog.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param devCenterName - The name of the devcenter.
 * @param catalogName - The name of the Catalog.
 */
export const CatalogsCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: CatalogsCreateOrUpdateInput,
  outputSchema: CatalogsCreateOrUpdateOutput,
}));
// Input Schema
export interface CatalogsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  devCenterName: string;
  catalogName: string;
}
export const CatalogsDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  devCenterName: Schema.String.pipe(T.PathParam()),
  catalogName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/catalogs/{catalogName}",
    apiVersion: "2025-02-01",
  }),
) as unknown as Schema.Codec<CatalogsDeleteInput>;

// Output Schema
export type CatalogsDeleteOutput = void;
export const CatalogsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<CatalogsDeleteOutput>;

// The operation
/**
 * Deletes a catalog resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param devCenterName - The name of the devcenter.
 * @param catalogName - The name of the Catalog.
 */
export const CatalogsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: CatalogsDeleteInput,
  outputSchema: CatalogsDeleteOutput,
}));
// Input Schema
export interface CatalogsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  devCenterName: string;
  catalogName: string;
}
export const CatalogsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  devCenterName: Schema.String.pipe(T.PathParam()),
  catalogName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/catalogs/{catalogName}",
    apiVersion: "2025-02-01",
  }),
) as unknown as Schema.Codec<CatalogsGetInput>;

// Output Schema
export interface CatalogsGetOutput {
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
export const CatalogsGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<CatalogsGetOutput>;

// The operation
/**
 * Gets a catalog
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param devCenterName - The name of the devcenter.
 * @param catalogName - The name of the Catalog.
 */
export const CatalogsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: CatalogsGetInput,
  outputSchema: CatalogsGetOutput,
}));
// Input Schema
export interface CatalogsGetSyncErrorDetailsInput {
  subscriptionId: string;
  resourceGroupName: string;
  devCenterName: string;
  catalogName: string;
}
export const CatalogsGetSyncErrorDetailsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    devCenterName: Schema.String.pipe(T.PathParam()),
    catalogName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/catalogs/{catalogName}/getSyncErrorDetails",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<CatalogsGetSyncErrorDetailsInput>;

// Output Schema
export interface CatalogsGetSyncErrorDetailsOutput {
  operationError?: { code?: string; message?: string };
  conflicts?: { path?: string; name?: string }[];
  errors?: {
    path?: string;
    errorDetails?: { code?: string; message?: string }[];
  }[];
}
export const CatalogsGetSyncErrorDetailsOutput =
  /*@__PURE__*/ Schema.Struct({
    operationError: Schema.optional(
      Schema.Struct({
        code: Schema.optional(Schema.String),
        message: Schema.optional(Schema.String),
      }),
    ),
    conflicts: Schema.optional(
      Schema.Array(
        Schema.Struct({
          path: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
        }),
      ),
    ),
    errors: Schema.optional(
      Schema.Array(
        Schema.Struct({
          path: Schema.optional(Schema.String),
          errorDetails: Schema.optional(
            Schema.Array(
              Schema.Struct({
                code: Schema.optional(Schema.String),
                message: Schema.optional(Schema.String),
              }),
            ),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<CatalogsGetSyncErrorDetailsOutput>;

// The operation
/**
 * Gets catalog synchronization error details
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param devCenterName - The name of the devcenter.
 * @param catalogName - The name of the Catalog.
 */
export const CatalogsGetSyncErrorDetails = /*@__PURE__*/ API.make(() => ({
  inputSchema: CatalogsGetSyncErrorDetailsInput,
  outputSchema: CatalogsGetSyncErrorDetailsOutput,
}));
// Input Schema
export interface CatalogsListByDevCenterInput {
  subscriptionId: string;
  resourceGroupName: string;
  devCenterName: string;
  $top?: number;
}
export const CatalogsListByDevCenterInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    devCenterName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/catalogs",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<CatalogsListByDevCenterInput>;

// Output Schema
export interface CatalogsListByDevCenterOutput {
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
export const CatalogsListByDevCenterOutput =
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<CatalogsListByDevCenterOutput>;

// The operation
/**
 * Lists catalogs for a devcenter.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param devCenterName - The name of the devcenter.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 */
export const CatalogsListByDevCenter = /*@__PURE__*/ API.make(() => ({
  inputSchema: CatalogsListByDevCenterInput,
  outputSchema: CatalogsListByDevCenterOutput,
}));
// Input Schema
export interface CatalogsSyncInput {
  subscriptionId: string;
  resourceGroupName: string;
  devCenterName: string;
  catalogName: string;
}
export const CatalogsSyncInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  devCenterName: Schema.String.pipe(T.PathParam()),
  catalogName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/catalogs/{catalogName}/sync",
    apiVersion: "2025-02-01",
  }),
) as unknown as Schema.Codec<CatalogsSyncInput>;

// Output Schema
export type CatalogsSyncOutput = void;
export const CatalogsSyncOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<CatalogsSyncOutput>;

// The operation
/**
 * Syncs templates for a template source.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param devCenterName - The name of the devcenter.
 * @param catalogName - The name of the Catalog.
 */
export const CatalogsSync = /*@__PURE__*/ API.make(() => ({
  inputSchema: CatalogsSyncInput,
  outputSchema: CatalogsSyncOutput,
}));
// Input Schema
export interface CatalogsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  devCenterName: string;
  catalogName: string;
  properties?: {
    gitHub?: {
      uri?: string;
      branch?: string;
      secretIdentifier?: string;
      path?: string;
    };
    adoGit?: {
      uri?: string;
      branch?: string;
      secretIdentifier?: string;
      path?: string;
    };
    syncType?: "Manual" | "Scheduled";
    tags?: Record<string, string>;
  };
}
export const CatalogsUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  devCenterName: Schema.String.pipe(T.PathParam()),
  catalogName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      gitHub: Schema.optional(
        Schema.Struct({
          uri: Schema.optional(Schema.String),
          branch: Schema.optional(Schema.String),
          secretIdentifier: Schema.optional(Schema.String),
          path: Schema.optional(Schema.String),
        }),
      ),
      adoGit: Schema.optional(
        Schema.Struct({
          uri: Schema.optional(Schema.String),
          branch: Schema.optional(Schema.String),
          secretIdentifier: Schema.optional(Schema.String),
          path: Schema.optional(Schema.String),
        }),
      ),
      syncType: Schema.optional(Schema.Literals(["Manual", "Scheduled"])),
      tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/catalogs/{catalogName}",
    apiVersion: "2025-02-01",
  }),
) as unknown as Schema.Codec<CatalogsUpdateInput>;

// Output Schema
export interface CatalogsUpdateOutput {
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
export const CatalogsUpdateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<CatalogsUpdateOutput>;

// The operation
/**
 * Partially updates a catalog.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param devCenterName - The name of the devcenter.
 * @param catalogName - The name of the Catalog.
 */
export const CatalogsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: CatalogsUpdateInput,
  outputSchema: CatalogsUpdateOutput,
}));
// Input Schema
export interface CheckNameAvailabilityExecuteInput {
  subscriptionId: string;
  name?: string;
  type?: string;
}
export const CheckNameAvailabilityExecuteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DevCenter/checkNameAvailability",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<CheckNameAvailabilityExecuteInput>;

// Output Schema
export interface CheckNameAvailabilityExecuteOutput {
  nameAvailable?: boolean;
  reason?: "Invalid" | "AlreadyExists";
  message?: string;
}
export const CheckNameAvailabilityExecuteOutput =
  /*@__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.Literals(["Invalid", "AlreadyExists"])),
    message: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<CheckNameAvailabilityExecuteOutput>;

// The operation
/**
 * Check the availability of name for resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param name - The name of the resource for which availability needs to be checked.
 * @param type - The resource type.
 */
export const CheckNameAvailabilityExecute =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CheckNameAvailabilityExecuteInput,
    outputSchema: CheckNameAvailabilityExecuteOutput,
  }));
// Input Schema
export interface CheckScopedNameAvailabilityExecuteInput {
  subscriptionId: string;
  name?: string;
  type?: string;
  scope?: string;
}
export const CheckScopedNameAvailabilityExecuteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    scope: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DevCenter/checkScopedNameAvailability",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<CheckScopedNameAvailabilityExecuteInput>;

// Output Schema
export interface CheckScopedNameAvailabilityExecuteOutput {
  nameAvailable?: boolean;
  reason?: "Invalid" | "AlreadyExists";
  message?: string;
}
export const CheckScopedNameAvailabilityExecuteOutput =
  /*@__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.Literals(["Invalid", "AlreadyExists"])),
    message: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<CheckScopedNameAvailabilityExecuteOutput>;

// The operation
/**
 * Check the availability of name for resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const CheckScopedNameAvailabilityExecute =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CheckScopedNameAvailabilityExecuteInput,
    outputSchema: CheckScopedNameAvailabilityExecuteOutput,
  }));
// Input Schema
export interface CustomizationTasksGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  devCenterName: string;
  catalogName: string;
  taskName: string;
}
export const CustomizationTasksGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    devCenterName: Schema.String.pipe(T.PathParam()),
    catalogName: Schema.String.pipe(T.PathParam()),
    taskName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/catalogs/{catalogName}/tasks/{taskName}",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<CustomizationTasksGetInput>;

// Output Schema
export interface CustomizationTasksGetOutput {
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
export const CustomizationTasksGetOutput =
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
  }) as unknown as Schema.Codec<CustomizationTasksGetOutput>;

// The operation
/**
 * Gets a Task from the catalog
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param devCenterName - The name of the devcenter.
 * @param catalogName - The name of the Catalog.
 * @param taskName - The name of the Task.
 */
export const CustomizationTasksGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: CustomizationTasksGetInput,
  outputSchema: CustomizationTasksGetOutput,
}));
// Input Schema
export interface CustomizationTasksGetErrorDetailsInput {
  subscriptionId: string;
  resourceGroupName: string;
  devCenterName: string;
  catalogName: string;
  taskName: string;
}
export const CustomizationTasksGetErrorDetailsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    devCenterName: Schema.String.pipe(T.PathParam()),
    catalogName: Schema.String.pipe(T.PathParam()),
    taskName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/catalogs/{catalogName}/tasks/{taskName}/getErrorDetails",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<CustomizationTasksGetErrorDetailsInput>;

// Output Schema
export interface CustomizationTasksGetErrorDetailsOutput {
  errors?: { code?: string; message?: string }[];
}
export const CustomizationTasksGetErrorDetailsOutput =
  /*@__PURE__*/ Schema.Struct({
    errors: Schema.optional(
      Schema.Array(
        Schema.Struct({
          code: Schema.optional(Schema.String),
          message: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<CustomizationTasksGetErrorDetailsOutput>;

// The operation
/**
 * Gets Customization Task error details
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param devCenterName - The name of the devcenter.
 * @param catalogName - The name of the Catalog.
 * @param taskName - The name of the Task.
 */
export const CustomizationTasksGetErrorDetails =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CustomizationTasksGetErrorDetailsInput,
    outputSchema: CustomizationTasksGetErrorDetailsOutput,
  }));
// Input Schema
export interface CustomizationTasksListByCatalogInput {
  subscriptionId: string;
  resourceGroupName: string;
  devCenterName: string;
  catalogName: string;
  $top?: number;
}
export const CustomizationTasksListByCatalogInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    devCenterName: Schema.String.pipe(T.PathParam()),
    catalogName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/catalogs/{catalogName}/tasks",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<CustomizationTasksListByCatalogInput>;

// Output Schema
export interface CustomizationTasksListByCatalogOutput {
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
export const CustomizationTasksListByCatalogOutput =
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<CustomizationTasksListByCatalogOutput>;

// The operation
/**
 * List Tasks in the catalog.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param devCenterName - The name of the devcenter.
 * @param catalogName - The name of the Catalog.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 */
export const CustomizationTasksListByCatalog =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CustomizationTasksListByCatalogInput,
    outputSchema: CustomizationTasksListByCatalogOutput,
  }));
// Input Schema
export interface DevBoxDefinitionsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  devCenterName: string;
  devBoxDefinitionName: string;
  properties?: {
    imageReference?: { id?: string; exactVersion?: string };
    sku?: {
      name: string;
      tier?: "Free" | "Basic" | "Standard" | "Premium";
      size?: string;
      family?: string;
      capacity?: number;
    };
    osStorageType?: string;
    hibernateSupport?: "Disabled" | "Enabled";
  };
  tags?: Record<string, string>;
  location: string;
}
export const DevBoxDefinitionsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    devCenterName: Schema.String.pipe(T.PathParam()),
    devBoxDefinitionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        imageReference: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
            exactVersion: Schema.optional(Schema.String),
          }),
        ),
        sku: Schema.optional(
          Schema.Struct({
            name: Schema.String,
            tier: Schema.optional(
              Schema.Literals(["Free", "Basic", "Standard", "Premium"]),
            ),
            size: Schema.optional(Schema.String),
            family: Schema.optional(Schema.String),
            capacity: Schema.optional(Schema.Number),
          }),
        ),
        osStorageType: Schema.optional(Schema.String),
        hibernateSupport: Schema.optional(
          Schema.Literals(["Disabled", "Enabled"]),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/devboxdefinitions/{devBoxDefinitionName}",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<DevBoxDefinitionsCreateOrUpdateInput>;

// Output Schema
export interface DevBoxDefinitionsCreateOrUpdateOutput {
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
export const DevBoxDefinitionsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<DevBoxDefinitionsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a Dev Box definition.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param devCenterName - The name of the devcenter.
 * @param devBoxDefinitionName - The name of the Dev Box definition.
 */
export const DevBoxDefinitionsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DevBoxDefinitionsCreateOrUpdateInput,
    outputSchema: DevBoxDefinitionsCreateOrUpdateOutput,
  }));
// Input Schema
export interface DevBoxDefinitionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  devCenterName: string;
  devBoxDefinitionName: string;
}
export const DevBoxDefinitionsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    devCenterName: Schema.String.pipe(T.PathParam()),
    devBoxDefinitionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/devboxdefinitions/{devBoxDefinitionName}",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<DevBoxDefinitionsDeleteInput>;

// Output Schema
export type DevBoxDefinitionsDeleteOutput = void;
export const DevBoxDefinitionsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DevBoxDefinitionsDeleteOutput>;

// The operation
/**
 * Deletes a Dev Box definition
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param devCenterName - The name of the devcenter.
 * @param devBoxDefinitionName - The name of the Dev Box definition.
 */
export const DevBoxDefinitionsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: DevBoxDefinitionsDeleteInput,
  outputSchema: DevBoxDefinitionsDeleteOutput,
}));
// Input Schema
export interface DevBoxDefinitionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  devCenterName: string;
  devBoxDefinitionName: string;
}
export const DevBoxDefinitionsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    devCenterName: Schema.String.pipe(T.PathParam()),
    devBoxDefinitionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/devboxdefinitions/{devBoxDefinitionName}",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<DevBoxDefinitionsGetInput>;

// Output Schema
export interface DevBoxDefinitionsGetOutput {
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
export const DevBoxDefinitionsGetOutput =
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
  }) as unknown as Schema.Codec<DevBoxDefinitionsGetOutput>;

// The operation
/**
 * Gets a Dev Box definition
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param devCenterName - The name of the devcenter.
 * @param devBoxDefinitionName - The name of the Dev Box definition.
 */
export const DevBoxDefinitionsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: DevBoxDefinitionsGetInput,
  outputSchema: DevBoxDefinitionsGetOutput,
}));
// Input Schema
export interface DevBoxDefinitionsGetByProjectInput {
  subscriptionId: string;
  resourceGroupName: string;
  projectName: string;
  devBoxDefinitionName: string;
}
export const DevBoxDefinitionsGetByProjectInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    devBoxDefinitionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/devboxdefinitions/{devBoxDefinitionName}",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<DevBoxDefinitionsGetByProjectInput>;

// Output Schema
export interface DevBoxDefinitionsGetByProjectOutput {
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
export const DevBoxDefinitionsGetByProjectOutput =
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
  }) as unknown as Schema.Codec<DevBoxDefinitionsGetByProjectOutput>;

// The operation
/**
 * Gets a Dev Box definition configured for a project
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - The name of the project.
 * @param devBoxDefinitionName - The name of the Dev Box definition.
 */
export const DevBoxDefinitionsGetByProject =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DevBoxDefinitionsGetByProjectInput,
    outputSchema: DevBoxDefinitionsGetByProjectOutput,
  }));
// Input Schema
export interface DevBoxDefinitionsListByDevCenterInput {
  subscriptionId: string;
  resourceGroupName: string;
  devCenterName: string;
  $top?: number;
}
export const DevBoxDefinitionsListByDevCenterInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    devCenterName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/devboxdefinitions",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<DevBoxDefinitionsListByDevCenterInput>;

// Output Schema
export interface DevBoxDefinitionsListByDevCenterOutput {
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
export const DevBoxDefinitionsListByDevCenterOutput =
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DevBoxDefinitionsListByDevCenterOutput>;

// The operation
/**
 * List Dev Box definitions for a devcenter.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param devCenterName - The name of the devcenter.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 */
export const DevBoxDefinitionsListByDevCenter =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DevBoxDefinitionsListByDevCenterInput,
    outputSchema: DevBoxDefinitionsListByDevCenterOutput,
  }));
// Input Schema
export interface DevBoxDefinitionsListByProjectInput {
  subscriptionId: string;
  resourceGroupName: string;
  projectName: string;
  $top?: number;
}
export const DevBoxDefinitionsListByProjectInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/devboxdefinitions",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<DevBoxDefinitionsListByProjectInput>;

// Output Schema
export interface DevBoxDefinitionsListByProjectOutput {
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
export const DevBoxDefinitionsListByProjectOutput =
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DevBoxDefinitionsListByProjectOutput>;

// The operation
/**
 * List Dev Box definitions configured for a project.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - The name of the project.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 */
export const DevBoxDefinitionsListByProject =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DevBoxDefinitionsListByProjectInput,
    outputSchema: DevBoxDefinitionsListByProjectOutput,
  }));
// Input Schema
export interface DevBoxDefinitionsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  devCenterName: string;
  devBoxDefinitionName: string;
  properties?: {
    imageReference?: { id?: string; exactVersion?: string };
    sku?: {
      name: string;
      tier?: "Free" | "Basic" | "Standard" | "Premium";
      size?: string;
      family?: string;
      capacity?: number;
    };
    osStorageType?: string;
    hibernateSupport?: "Disabled" | "Enabled";
  };
  tags?: Record<string, string>;
  location?: string;
}
export const DevBoxDefinitionsUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    devCenterName: Schema.String.pipe(T.PathParam()),
    devBoxDefinitionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        imageReference: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
            exactVersion: Schema.optional(Schema.String),
          }),
        ),
        sku: Schema.optional(
          Schema.Struct({
            name: Schema.String,
            tier: Schema.optional(
              Schema.Literals(["Free", "Basic", "Standard", "Premium"]),
            ),
            size: Schema.optional(Schema.String),
            family: Schema.optional(Schema.String),
            capacity: Schema.optional(Schema.Number),
          }),
        ),
        osStorageType: Schema.optional(Schema.String),
        hibernateSupport: Schema.optional(
          Schema.Literals(["Disabled", "Enabled"]),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/devboxdefinitions/{devBoxDefinitionName}",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<DevBoxDefinitionsUpdateInput>;

// Output Schema
export interface DevBoxDefinitionsUpdateOutput {
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
export const DevBoxDefinitionsUpdateOutput =
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
  }) as unknown as Schema.Codec<DevBoxDefinitionsUpdateOutput>;

// The operation
/**
 * Partially updates a Dev Box definition.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param devCenterName - The name of the devcenter.
 * @param devBoxDefinitionName - The name of the Dev Box definition.
 */
export const DevBoxDefinitionsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: DevBoxDefinitionsUpdateInput,
  outputSchema: DevBoxDefinitionsUpdateOutput,
}));
// Input Schema
export interface DevCentersCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  devCenterName: string;
  properties?: {
    encryption?: {
      customerManagedKeyEncryption?: {
        keyEncryptionKeyIdentity?: {
          identityType?:
            | "systemAssignedIdentity"
            | "userAssignedIdentity"
            | "delegatedResourceIdentity";
          userAssignedIdentityResourceId?: string;
          delegatedIdentityClientId?: string;
        };
        keyEncryptionKeyUrl?: string;
      };
    };
    displayName?: string;
    projectCatalogSettings?: {
      catalogItemSyncEnableStatus?: "Enabled" | "Disabled";
    };
    networkSettings?: {
      microsoftHostedNetworkEnableStatus?: "Enabled" | "Disabled";
    };
    devBoxProvisioningSettings?: {
      installAzureMonitorAgentEnableStatus?: "Enabled" | "Disabled";
    };
  };
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
  tags?: Record<string, string>;
  location: string;
}
export const DevCentersCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    devCenterName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        encryption: Schema.optional(
          Schema.Struct({
            customerManagedKeyEncryption: Schema.optional(
              Schema.Struct({
                keyEncryptionKeyIdentity: Schema.optional(
                  Schema.Struct({
                    identityType: Schema.optional(
                      Schema.Literals([
                        "systemAssignedIdentity",
                        "userAssignedIdentity",
                        "delegatedResourceIdentity",
                      ]),
                    ),
                    userAssignedIdentityResourceId: Schema.optional(
                      Schema.String,
                    ),
                    delegatedIdentityClientId: Schema.optional(Schema.String),
                  }),
                ),
                keyEncryptionKeyUrl: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
        displayName: Schema.optional(Schema.String),
        projectCatalogSettings: Schema.optional(
          Schema.Struct({
            catalogItemSyncEnableStatus: Schema.optional(
              Schema.Literals(["Enabled", "Disabled"]),
            ),
          }),
        ),
        networkSettings: Schema.optional(
          Schema.Struct({
            microsoftHostedNetworkEnableStatus: Schema.optional(
              Schema.Literals(["Enabled", "Disabled"]),
            ),
          }),
        ),
        devBoxProvisioningSettings: Schema.optional(
          Schema.Struct({
            installAzureMonitorAgentEnableStatus: Schema.optional(
              Schema.Literals(["Enabled", "Disabled"]),
            ),
          }),
        ),
      }),
    ),
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
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<DevCentersCreateOrUpdateInput>;

// Output Schema
export interface DevCentersCreateOrUpdateOutput {
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
export const DevCentersCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<DevCentersCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a devcenter resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param devCenterName - The name of the devcenter.
 */
export const DevCentersCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: DevCentersCreateOrUpdateInput,
  outputSchema: DevCentersCreateOrUpdateOutput,
}));
// Input Schema
export interface DevCentersDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  devCenterName: string;
}
export const DevCentersDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  devCenterName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}",
    apiVersion: "2025-02-01",
  }),
) as unknown as Schema.Codec<DevCentersDeleteInput>;

// Output Schema
export type DevCentersDeleteOutput = void;
export const DevCentersDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DevCentersDeleteOutput>;

// The operation
/**
 * Deletes a devcenter
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param devCenterName - The name of the devcenter.
 */
export const DevCentersDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: DevCentersDeleteInput,
  outputSchema: DevCentersDeleteOutput,
}));
// Input Schema
export interface DevCentersGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  devCenterName: string;
}
export const DevCentersGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  devCenterName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}",
    apiVersion: "2025-02-01",
  }),
) as unknown as Schema.Codec<DevCentersGetInput>;

// Output Schema
export interface DevCentersGetOutput {
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
export const DevCentersGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<DevCentersGetOutput>;

// The operation
/**
 * Gets a devcenter.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param devCenterName - The name of the devcenter.
 */
export const DevCentersGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: DevCentersGetInput,
  outputSchema: DevCentersGetOutput,
}));
// Input Schema
export interface DevCentersListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  $top?: number;
}
export const DevCentersListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<DevCentersListByResourceGroupInput>;

// Output Schema
export interface DevCentersListByResourceGroupOutput {
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
export const DevCentersListByResourceGroupOutput =
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DevCentersListByResourceGroupOutput>;

// The operation
/**
 * Lists all devcenters in a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 */
export const DevCentersListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DevCentersListByResourceGroupInput,
    outputSchema: DevCentersListByResourceGroupOutput,
  }));
// Input Schema
export interface DevCentersListBySubscriptionInput {
  subscriptionId: string;
  $top?: number;
}
export const DevCentersListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DevCenter/devcenters",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<DevCentersListBySubscriptionInput>;

// Output Schema
export interface DevCentersListBySubscriptionOutput {
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
export const DevCentersListBySubscriptionOutput =
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DevCentersListBySubscriptionOutput>;

// The operation
/**
 * Lists all devcenters in a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 */
export const DevCentersListBySubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DevCentersListBySubscriptionInput,
    outputSchema: DevCentersListBySubscriptionOutput,
  }));
// Input Schema
export interface DevCentersUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  devCenterName: string;
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
    encryption?: {
      customerManagedKeyEncryption?: {
        keyEncryptionKeyIdentity?: {
          identityType?:
            | "systemAssignedIdentity"
            | "userAssignedIdentity"
            | "delegatedResourceIdentity";
          userAssignedIdentityResourceId?: string;
          delegatedIdentityClientId?: string;
        };
        keyEncryptionKeyUrl?: string;
      };
    };
    displayName?: string;
    projectCatalogSettings?: {
      catalogItemSyncEnableStatus?: "Enabled" | "Disabled";
    };
    networkSettings?: {
      microsoftHostedNetworkEnableStatus?: "Enabled" | "Disabled";
    };
    devBoxProvisioningSettings?: {
      installAzureMonitorAgentEnableStatus?: "Enabled" | "Disabled";
    };
  };
  tags?: Record<string, string>;
  location?: string;
}
export const DevCentersUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  devCenterName: Schema.String.pipe(T.PathParam()),
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
      encryption: Schema.optional(
        Schema.Struct({
          customerManagedKeyEncryption: Schema.optional(
            Schema.Struct({
              keyEncryptionKeyIdentity: Schema.optional(
                Schema.Struct({
                  identityType: Schema.optional(
                    Schema.Literals([
                      "systemAssignedIdentity",
                      "userAssignedIdentity",
                      "delegatedResourceIdentity",
                    ]),
                  ),
                  userAssignedIdentityResourceId: Schema.optional(
                    Schema.String,
                  ),
                  delegatedIdentityClientId: Schema.optional(Schema.String),
                }),
              ),
              keyEncryptionKeyUrl: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
      displayName: Schema.optional(Schema.String),
      projectCatalogSettings: Schema.optional(
        Schema.Struct({
          catalogItemSyncEnableStatus: Schema.optional(
            Schema.Literals(["Enabled", "Disabled"]),
          ),
        }),
      ),
      networkSettings: Schema.optional(
        Schema.Struct({
          microsoftHostedNetworkEnableStatus: Schema.optional(
            Schema.Literals(["Enabled", "Disabled"]),
          ),
        }),
      ),
      devBoxProvisioningSettings: Schema.optional(
        Schema.Struct({
          installAzureMonitorAgentEnableStatus: Schema.optional(
            Schema.Literals(["Enabled", "Disabled"]),
          ),
        }),
      ),
    }),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}",
    apiVersion: "2025-02-01",
  }),
) as unknown as Schema.Codec<DevCentersUpdateInput>;

// Output Schema
export interface DevCentersUpdateOutput {
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
export const DevCentersUpdateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<DevCentersUpdateOutput>;

// The operation
/**
 * Partially updates a devcenter.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param devCenterName - The name of the devcenter.
 */
export const DevCentersUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: DevCentersUpdateInput,
  outputSchema: DevCentersUpdateOutput,
}));
// Input Schema
export interface EnvironmentDefinitionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  devCenterName: string;
  catalogName: string;
  environmentDefinitionName: string;
}
export const EnvironmentDefinitionsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    devCenterName: Schema.String.pipe(T.PathParam()),
    catalogName: Schema.String.pipe(T.PathParam()),
    environmentDefinitionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/catalogs/{catalogName}/environmentDefinitions/{environmentDefinitionName}",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<EnvironmentDefinitionsGetInput>;

// Output Schema
export interface EnvironmentDefinitionsGetOutput {
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
export const EnvironmentDefinitionsGetOutput =
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
  }) as unknown as Schema.Codec<EnvironmentDefinitionsGetOutput>;

// The operation
/**
 * Gets an environment definition from the catalog.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param devCenterName - The name of the devcenter.
 * @param catalogName - The name of the Catalog.
 * @param environmentDefinitionName - The name of the Environment Definition.
 */
export const EnvironmentDefinitionsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: EnvironmentDefinitionsGetInput,
  outputSchema: EnvironmentDefinitionsGetOutput,
}));
// Input Schema
export interface EnvironmentDefinitionsGetByProjectCatalogInput {
  subscriptionId: string;
  resourceGroupName: string;
  projectName: string;
  catalogName: string;
  environmentDefinitionName: string;
}
export const EnvironmentDefinitionsGetByProjectCatalogInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    catalogName: Schema.String.pipe(T.PathParam()),
    environmentDefinitionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/catalogs/{catalogName}/environmentDefinitions/{environmentDefinitionName}",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<EnvironmentDefinitionsGetByProjectCatalogInput>;

// Output Schema
export interface EnvironmentDefinitionsGetByProjectCatalogOutput {
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
export const EnvironmentDefinitionsGetByProjectCatalogOutput =
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
  }) as unknown as Schema.Codec<EnvironmentDefinitionsGetByProjectCatalogOutput>;

// The operation
/**
 * Gets an environment definition from the catalog.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - The name of the project.
 * @param catalogName - The name of the Catalog.
 * @param environmentDefinitionName - The name of the Environment Definition.
 */
export const EnvironmentDefinitionsGetByProjectCatalog =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: EnvironmentDefinitionsGetByProjectCatalogInput,
    outputSchema: EnvironmentDefinitionsGetByProjectCatalogOutput,
  }));
// Input Schema
export interface EnvironmentDefinitionsGetErrorDetailsInput {
  subscriptionId: string;
  resourceGroupName: string;
  devCenterName: string;
  catalogName: string;
  environmentDefinitionName: string;
}
export const EnvironmentDefinitionsGetErrorDetailsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    devCenterName: Schema.String.pipe(T.PathParam()),
    catalogName: Schema.String.pipe(T.PathParam()),
    environmentDefinitionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/catalogs/{catalogName}/environmentDefinitions/{environmentDefinitionName}/getErrorDetails",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<EnvironmentDefinitionsGetErrorDetailsInput>;

// Output Schema
export interface EnvironmentDefinitionsGetErrorDetailsOutput {
  errors?: { code?: string; message?: string }[];
}
export const EnvironmentDefinitionsGetErrorDetailsOutput =
  /*@__PURE__*/ Schema.Struct({
    errors: Schema.optional(
      Schema.Array(
        Schema.Struct({
          code: Schema.optional(Schema.String),
          message: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<EnvironmentDefinitionsGetErrorDetailsOutput>;

// The operation
/**
 * Gets Environment Definition error details
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param devCenterName - The name of the devcenter.
 * @param catalogName - The name of the Catalog.
 * @param environmentDefinitionName - The name of the Environment Definition.
 */
export const EnvironmentDefinitionsGetErrorDetails =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: EnvironmentDefinitionsGetErrorDetailsInput,
    outputSchema: EnvironmentDefinitionsGetErrorDetailsOutput,
  }));
// Input Schema
export interface EnvironmentDefinitionsListByCatalogInput {
  subscriptionId: string;
  resourceGroupName: string;
  devCenterName: string;
  catalogName: string;
  $top?: number;
}
export const EnvironmentDefinitionsListByCatalogInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    devCenterName: Schema.String.pipe(T.PathParam()),
    catalogName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/catalogs/{catalogName}/environmentDefinitions",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<EnvironmentDefinitionsListByCatalogInput>;

// Output Schema
export interface EnvironmentDefinitionsListByCatalogOutput {
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
export const EnvironmentDefinitionsListByCatalogOutput =
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<EnvironmentDefinitionsListByCatalogOutput>;

// The operation
/**
 * List environment definitions in the catalog.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param devCenterName - The name of the devcenter.
 * @param catalogName - The name of the Catalog.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 */
export const EnvironmentDefinitionsListByCatalog =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: EnvironmentDefinitionsListByCatalogInput,
    outputSchema: EnvironmentDefinitionsListByCatalogOutput,
  }));
// Input Schema
export interface EnvironmentDefinitionsListByProjectCatalogInput {
  subscriptionId: string;
  resourceGroupName: string;
  projectName: string;
  catalogName: string;
}
export const EnvironmentDefinitionsListByProjectCatalogInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    catalogName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/catalogs/{catalogName}/environmentDefinitions",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<EnvironmentDefinitionsListByProjectCatalogInput>;

// Output Schema
export interface EnvironmentDefinitionsListByProjectCatalogOutput {
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
export const EnvironmentDefinitionsListByProjectCatalogOutput =
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<EnvironmentDefinitionsListByProjectCatalogOutput>;

// The operation
/**
 * Lists the environment definitions in this project catalog.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - The name of the project.
 * @param catalogName - The name of the Catalog.
 */
export const EnvironmentDefinitionsListByProjectCatalog =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: EnvironmentDefinitionsListByProjectCatalogInput,
    outputSchema: EnvironmentDefinitionsListByProjectCatalogOutput,
  }));
// Input Schema
export interface EnvironmentTypesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  devCenterName: string;
  environmentTypeName: string;
  properties?: { displayName?: string };
  tags?: Record<string, string>;
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
export const EnvironmentTypesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    devCenterName: Schema.String.pipe(T.PathParam()),
    environmentTypeName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        displayName: Schema.optional(Schema.String),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
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
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/environmentTypes/{environmentTypeName}",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<EnvironmentTypesCreateOrUpdateInput>;

// Output Schema
export interface EnvironmentTypesCreateOrUpdateOutput {
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
export const EnvironmentTypesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<EnvironmentTypesCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates an environment type.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param devCenterName - The name of the devcenter.
 * @param environmentTypeName - The name of the environment type.
 */
export const EnvironmentTypesCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: EnvironmentTypesCreateOrUpdateInput,
    outputSchema: EnvironmentTypesCreateOrUpdateOutput,
  }));
// Input Schema
export interface EnvironmentTypesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  devCenterName: string;
  environmentTypeName: string;
}
export const EnvironmentTypesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    devCenterName: Schema.String.pipe(T.PathParam()),
    environmentTypeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/environmentTypes/{environmentTypeName}",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<EnvironmentTypesDeleteInput>;

// Output Schema
export type EnvironmentTypesDeleteOutput = void;
export const EnvironmentTypesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<EnvironmentTypesDeleteOutput>;

// The operation
/**
 * Deletes an environment type.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param devCenterName - The name of the devcenter.
 * @param environmentTypeName - The name of the environment type.
 */
export const EnvironmentTypesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: EnvironmentTypesDeleteInput,
  outputSchema: EnvironmentTypesDeleteOutput,
}));
// Input Schema
export interface EnvironmentTypesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  devCenterName: string;
  environmentTypeName: string;
}
export const EnvironmentTypesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    devCenterName: Schema.String.pipe(T.PathParam()),
    environmentTypeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/environmentTypes/{environmentTypeName}",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<EnvironmentTypesGetInput>;

// Output Schema
export interface EnvironmentTypesGetOutput {
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
export const EnvironmentTypesGetOutput =
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
  }) as unknown as Schema.Codec<EnvironmentTypesGetOutput>;

// The operation
/**
 * Gets an environment type.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param devCenterName - The name of the devcenter.
 * @param environmentTypeName - The name of the environment type.
 */
export const EnvironmentTypesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: EnvironmentTypesGetInput,
  outputSchema: EnvironmentTypesGetOutput,
}));
// Input Schema
export interface EnvironmentTypesListByDevCenterInput {
  subscriptionId: string;
  resourceGroupName: string;
  devCenterName: string;
  $top?: number;
}
export const EnvironmentTypesListByDevCenterInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    devCenterName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/environmentTypes",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<EnvironmentTypesListByDevCenterInput>;

// Output Schema
export interface EnvironmentTypesListByDevCenterOutput {
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
export const EnvironmentTypesListByDevCenterOutput =
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<EnvironmentTypesListByDevCenterOutput>;

// The operation
/**
 * Lists environment types for the devcenter.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param devCenterName - The name of the devcenter.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 */
export const EnvironmentTypesListByDevCenter =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: EnvironmentTypesListByDevCenterInput,
    outputSchema: EnvironmentTypesListByDevCenterOutput,
  }));
// Input Schema
export interface EnvironmentTypesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  devCenterName: string;
  environmentTypeName: string;
  properties?: { displayName?: string };
  tags?: Record<string, string>;
}
export const EnvironmentTypesUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    devCenterName: Schema.String.pipe(T.PathParam()),
    environmentTypeName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        displayName: Schema.optional(Schema.String),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/environmentTypes/{environmentTypeName}",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<EnvironmentTypesUpdateInput>;

// Output Schema
export interface EnvironmentTypesUpdateOutput {
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
export const EnvironmentTypesUpdateOutput =
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
  }) as unknown as Schema.Codec<EnvironmentTypesUpdateOutput>;

// The operation
/**
 * Partially updates an environment type.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param devCenterName - The name of the devcenter.
 * @param environmentTypeName - The name of the environment type.
 */
export const EnvironmentTypesUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: EnvironmentTypesUpdateInput,
  outputSchema: EnvironmentTypesUpdateOutput,
}));
// Input Schema
export interface GalleriesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  devCenterName: string;
  galleryName: string;
  properties?: {
    provisioningState?:
      | "NotSpecified"
      | "Accepted"
      | "Running"
      | "Creating"
      | "Created"
      | "Updating"
      | "Updated"
      | "Deleting"
      | "Deleted"
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "MovingResources"
      | "TransientFailure"
      | "RolloutInProgress"
      | "StorageProvisioningFailed";
    galleryResourceId: string;
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
export const GalleriesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    devCenterName: Schema.String.pipe(T.PathParam()),
    galleryName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "NotSpecified",
            "Accepted",
            "Running",
            "Creating",
            "Created",
            "Updating",
            "Updated",
            "Deleting",
            "Deleted",
            "Succeeded",
            "Failed",
            "Canceled",
            "MovingResources",
            "TransientFailure",
            "RolloutInProgress",
            "StorageProvisioningFailed",
          ]),
        ),
        galleryResourceId: Schema.String,
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
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/galleries/{galleryName}",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<GalleriesCreateOrUpdateInput>;

// Output Schema
export interface GalleriesCreateOrUpdateOutput {
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
export const GalleriesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<GalleriesCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a gallery.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param devCenterName - The name of the devcenter.
 * @param galleryName - The name of the gallery.
 */
export const GalleriesCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: GalleriesCreateOrUpdateInput,
  outputSchema: GalleriesCreateOrUpdateOutput,
}));
// Input Schema
export interface GalleriesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  devCenterName: string;
  galleryName: string;
}
export const GalleriesDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  devCenterName: Schema.String.pipe(T.PathParam()),
  galleryName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/galleries/{galleryName}",
    apiVersion: "2025-02-01",
  }),
) as unknown as Schema.Codec<GalleriesDeleteInput>;

// Output Schema
export type GalleriesDeleteOutput = void;
export const GalleriesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<GalleriesDeleteOutput>;

// The operation
/**
 * Deletes a gallery resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param devCenterName - The name of the devcenter.
 * @param galleryName - The name of the gallery.
 */
export const GalleriesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: GalleriesDeleteInput,
  outputSchema: GalleriesDeleteOutput,
}));
// Input Schema
export interface GalleriesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  devCenterName: string;
  galleryName: string;
}
export const GalleriesGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  devCenterName: Schema.String.pipe(T.PathParam()),
  galleryName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/galleries/{galleryName}",
    apiVersion: "2025-02-01",
  }),
) as unknown as Schema.Codec<GalleriesGetInput>;

// Output Schema
export interface GalleriesGetOutput {
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
export const GalleriesGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<GalleriesGetOutput>;

// The operation
/**
 * Gets a gallery
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param devCenterName - The name of the devcenter.
 * @param galleryName - The name of the gallery.
 */
export const GalleriesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: GalleriesGetInput,
  outputSchema: GalleriesGetOutput,
}));
// Input Schema
export interface GalleriesListByDevCenterInput {
  subscriptionId: string;
  resourceGroupName: string;
  devCenterName: string;
  $top?: number;
}
export const GalleriesListByDevCenterInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    devCenterName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/galleries",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<GalleriesListByDevCenterInput>;

// Output Schema
export interface GalleriesListByDevCenterOutput {
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
export const GalleriesListByDevCenterOutput =
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<GalleriesListByDevCenterOutput>;

// The operation
/**
 * Lists galleries for a devcenter.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param devCenterName - The name of the devcenter.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 */
export const GalleriesListByDevCenter = /*@__PURE__*/ API.make(() => ({
  inputSchema: GalleriesListByDevCenterInput,
  outputSchema: GalleriesListByDevCenterOutput,
}));
// Input Schema
export interface ImagesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  devCenterName: string;
  galleryName: string;
  imageName: string;
}
export const ImagesGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  devCenterName: Schema.String.pipe(T.PathParam()),
  galleryName: Schema.String.pipe(T.PathParam()),
  imageName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/galleries/{galleryName}/images/{imageName}",
    apiVersion: "2025-02-01",
  }),
) as unknown as Schema.Codec<ImagesGetInput>;

// Output Schema
export interface ImagesGetOutput {
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
export const ImagesGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ImagesGetOutput>;

// The operation
/**
 * Gets a gallery image.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param devCenterName - The name of the devcenter.
 * @param galleryName - The name of the gallery.
 * @param imageName - The name of the image.
 */
export const ImagesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ImagesGetInput,
  outputSchema: ImagesGetOutput,
}));
// Input Schema
export interface ImagesGetByProjectInput {
  subscriptionId: string;
  resourceGroupName: string;
  projectName: string;
  imageName: string;
}
export const ImagesGetByProjectInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    imageName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/images/{imageName}",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<ImagesGetByProjectInput>;

// Output Schema
export interface ImagesGetByProjectOutput {
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
export const ImagesGetByProjectOutput =
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
  }) as unknown as Schema.Codec<ImagesGetByProjectOutput>;

// The operation
/**
 * Gets an image.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - The name of the project.
 * @param imageName - The name of the image.
 */
export const ImagesGetByProject = /*@__PURE__*/ API.make(() => ({
  inputSchema: ImagesGetByProjectInput,
  outputSchema: ImagesGetByProjectOutput,
}));
// Input Schema
export interface ImagesListByDevCenterInput {
  subscriptionId: string;
  resourceGroupName: string;
  devCenterName: string;
  $top?: number;
}
export const ImagesListByDevCenterInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    devCenterName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/images",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<ImagesListByDevCenterInput>;

// Output Schema
export interface ImagesListByDevCenterOutput {
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
export const ImagesListByDevCenterOutput =
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ImagesListByDevCenterOutput>;

// The operation
/**
 * Lists images for a devcenter.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param devCenterName - The name of the devcenter.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 */
export const ImagesListByDevCenter = /*@__PURE__*/ API.make(() => ({
  inputSchema: ImagesListByDevCenterInput,
  outputSchema: ImagesListByDevCenterOutput,
}));
// Input Schema
export interface ImagesListByGalleryInput {
  subscriptionId: string;
  resourceGroupName: string;
  devCenterName: string;
  galleryName: string;
  $top?: number;
}
export const ImagesListByGalleryInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    devCenterName: Schema.String.pipe(T.PathParam()),
    galleryName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/galleries/{galleryName}/images",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<ImagesListByGalleryInput>;

// Output Schema
export interface ImagesListByGalleryOutput {
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
export const ImagesListByGalleryOutput =
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ImagesListByGalleryOutput>;

// The operation
/**
 * Lists images for a gallery.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param devCenterName - The name of the devcenter.
 * @param galleryName - The name of the gallery.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 */
export const ImagesListByGallery = /*@__PURE__*/ API.make(() => ({
  inputSchema: ImagesListByGalleryInput,
  outputSchema: ImagesListByGalleryOutput,
}));
// Input Schema
export interface ImagesListByProjectInput {
  subscriptionId: string;
  resourceGroupName: string;
  projectName: string;
}
export const ImagesListByProjectInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/images",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<ImagesListByProjectInput>;

// Output Schema
export interface ImagesListByProjectOutput {
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
export const ImagesListByProjectOutput =
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ImagesListByProjectOutput>;

// The operation
/**
 * Lists images for a project.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - The name of the project.
 */
export const ImagesListByProject = /*@__PURE__*/ API.make(() => ({
  inputSchema: ImagesListByProjectInput,
  outputSchema: ImagesListByProjectOutput,
}));
// Input Schema
export interface ImageVersionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  devCenterName: string;
  galleryName: string;
  imageName: string;
  versionName: string;
}
export const ImageVersionsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  devCenterName: Schema.String.pipe(T.PathParam()),
  galleryName: Schema.String.pipe(T.PathParam()),
  imageName: Schema.String.pipe(T.PathParam()),
  versionName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/galleries/{galleryName}/images/{imageName}/versions/{versionName}",
    apiVersion: "2025-02-01",
  }),
) as unknown as Schema.Codec<ImageVersionsGetInput>;

// Output Schema
export interface ImageVersionsGetOutput {
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
export const ImageVersionsGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ImageVersionsGetOutput>;

// The operation
/**
 * Gets an image version.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param devCenterName - The name of the devcenter.
 * @param galleryName - The name of the gallery.
 * @param imageName - The name of the image.
 * @param versionName - The version of the image.
 */
export const ImageVersionsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ImageVersionsGetInput,
  outputSchema: ImageVersionsGetOutput,
}));
// Input Schema
export interface ImageVersionsGetByProjectInput {
  subscriptionId: string;
  resourceGroupName: string;
  projectName: string;
  imageName: string;
  versionName: string;
}
export const ImageVersionsGetByProjectInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    imageName: Schema.String.pipe(T.PathParam()),
    versionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/images/{imageName}/versions/{versionName}",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<ImageVersionsGetByProjectInput>;

// Output Schema
export interface ImageVersionsGetByProjectOutput {
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
export const ImageVersionsGetByProjectOutput =
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
  }) as unknown as Schema.Codec<ImageVersionsGetByProjectOutput>;

// The operation
/**
 * Gets an image version.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - The name of the project.
 * @param imageName - The name of the image.
 * @param versionName - The version of the image.
 */
export const ImageVersionsGetByProject = /*@__PURE__*/ API.make(() => ({
  inputSchema: ImageVersionsGetByProjectInput,
  outputSchema: ImageVersionsGetByProjectOutput,
}));
// Input Schema
export interface ImageVersionsListByImageInput {
  subscriptionId: string;
  resourceGroupName: string;
  devCenterName: string;
  galleryName: string;
  imageName: string;
}
export const ImageVersionsListByImageInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    devCenterName: Schema.String.pipe(T.PathParam()),
    galleryName: Schema.String.pipe(T.PathParam()),
    imageName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/galleries/{galleryName}/images/{imageName}/versions",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<ImageVersionsListByImageInput>;

// Output Schema
export interface ImageVersionsListByImageOutput {
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
export const ImageVersionsListByImageOutput =
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ImageVersionsListByImageOutput>;

// The operation
/**
 * Lists versions for an image.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param devCenterName - The name of the devcenter.
 * @param galleryName - The name of the gallery.
 * @param imageName - The name of the image.
 */
export const ImageVersionsListByImage = /*@__PURE__*/ API.make(() => ({
  inputSchema: ImageVersionsListByImageInput,
  outputSchema: ImageVersionsListByImageOutput,
}));
// Input Schema
export interface ImageVersionsListByProjectInput {
  subscriptionId: string;
  resourceGroupName: string;
  projectName: string;
  imageName: string;
}
export const ImageVersionsListByProjectInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    imageName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/images/{imageName}/versions",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<ImageVersionsListByProjectInput>;

// Output Schema
export interface ImageVersionsListByProjectOutput {
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
export const ImageVersionsListByProjectOutput =
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ImageVersionsListByProjectOutput>;

// The operation
/**
 * Lists versions for an image.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - The name of the project.
 * @param imageName - The name of the image.
 */
export const ImageVersionsListByProject = /*@__PURE__*/ API.make(() => ({
  inputSchema: ImageVersionsListByProjectInput,
  outputSchema: ImageVersionsListByProjectOutput,
}));
// Input Schema
export interface NetworkConnectionsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkConnectionName: string;
  properties?: {
    subnetId?: string;
    domainName?: string;
    organizationUnit?: string;
    domainUsername?: string;
    domainPassword?: string | Redacted.Redacted<string>;
  };
  tags?: Record<string, string>;
  location: string;
}
export const NetworkConnectionsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkConnectionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        subnetId: Schema.optional(Schema.String),
        domainName: Schema.optional(Schema.String),
        organizationUnit: Schema.optional(Schema.String),
        domainUsername: Schema.optional(Schema.String),
        domainPassword: Schema.optional(SensitiveString),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/networkConnections/{networkConnectionName}",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<NetworkConnectionsCreateOrUpdateInput>;

// Output Schema
export interface NetworkConnectionsCreateOrUpdateOutput {
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
export const NetworkConnectionsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<NetworkConnectionsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a Network Connections resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkConnectionName - Name of the Network Connection that can be applied to a Pool.
 */
export const NetworkConnectionsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkConnectionsCreateOrUpdateInput,
    outputSchema: NetworkConnectionsCreateOrUpdateOutput,
  }));
// Input Schema
export interface NetworkConnectionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkConnectionName: string;
}
export const NetworkConnectionsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/networkConnections/{networkConnectionName}",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<NetworkConnectionsDeleteInput>;

// Output Schema
export type NetworkConnectionsDeleteOutput = void;
export const NetworkConnectionsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<NetworkConnectionsDeleteOutput>;

// The operation
/**
 * Deletes a Network Connections resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkConnectionName - Name of the Network Connection that can be applied to a Pool.
 */
export const NetworkConnectionsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: NetworkConnectionsDeleteInput,
  outputSchema: NetworkConnectionsDeleteOutput,
}));
// Input Schema
export interface NetworkConnectionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkConnectionName: string;
}
export const NetworkConnectionsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/networkConnections/{networkConnectionName}",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<NetworkConnectionsGetInput>;

// Output Schema
export interface NetworkConnectionsGetOutput {
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
export const NetworkConnectionsGetOutput =
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
  }) as unknown as Schema.Codec<NetworkConnectionsGetOutput>;

// The operation
/**
 * Gets a network connection resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkConnectionName - Name of the Network Connection that can be applied to a Pool.
 */
export const NetworkConnectionsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: NetworkConnectionsGetInput,
  outputSchema: NetworkConnectionsGetOutput,
}));
// Input Schema
export interface NetworkConnectionsGetHealthDetailsInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkConnectionName: string;
}
export const NetworkConnectionsGetHealthDetailsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/networkConnections/{networkConnectionName}/healthChecks/latest",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<NetworkConnectionsGetHealthDetailsInput>;

// Output Schema
export interface NetworkConnectionsGetHealthDetailsOutput {
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
export const NetworkConnectionsGetHealthDetailsOutput =
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
  }) as unknown as Schema.Codec<NetworkConnectionsGetHealthDetailsOutput>;

// The operation
/**
 * Gets health check status details.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkConnectionName - Name of the Network Connection that can be applied to a Pool.
 */
export const NetworkConnectionsGetHealthDetails =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkConnectionsGetHealthDetailsInput,
    outputSchema: NetworkConnectionsGetHealthDetailsOutput,
  }));
// Input Schema
export interface NetworkConnectionsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  $top?: number;
}
export const NetworkConnectionsListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/networkConnections",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<NetworkConnectionsListByResourceGroupInput>;

// Output Schema
export interface NetworkConnectionsListByResourceGroupOutput {
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
export const NetworkConnectionsListByResourceGroupOutput =
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<NetworkConnectionsListByResourceGroupOutput>;

// The operation
/**
 * Lists network connections in a resource group
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 */
export const NetworkConnectionsListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkConnectionsListByResourceGroupInput,
    outputSchema: NetworkConnectionsListByResourceGroupOutput,
  }));
// Input Schema
export interface NetworkConnectionsListBySubscriptionInput {
  subscriptionId: string;
  $top?: number;
}
export const NetworkConnectionsListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DevCenter/networkConnections",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<NetworkConnectionsListBySubscriptionInput>;

// Output Schema
export interface NetworkConnectionsListBySubscriptionOutput {
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
export const NetworkConnectionsListBySubscriptionOutput =
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<NetworkConnectionsListBySubscriptionOutput>;

// The operation
/**
 * Lists network connections in a subscription
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 */
export const NetworkConnectionsListBySubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkConnectionsListBySubscriptionInput,
    outputSchema: NetworkConnectionsListBySubscriptionOutput,
  }));
// Input Schema
export interface NetworkConnectionsListHealthDetailsInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkConnectionName: string;
  $top?: number;
}
export const NetworkConnectionsListHealthDetailsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkConnectionName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/networkConnections/{networkConnectionName}/healthChecks",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<NetworkConnectionsListHealthDetailsInput>;

// Output Schema
export interface NetworkConnectionsListHealthDetailsOutput {
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
export const NetworkConnectionsListHealthDetailsOutput =
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<NetworkConnectionsListHealthDetailsOutput>;

// The operation
/**
 * Lists health check status details
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 * @param networkConnectionName - Name of the Network Connection that can be applied to a Pool.
 */
export const NetworkConnectionsListHealthDetails =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkConnectionsListHealthDetailsInput,
    outputSchema: NetworkConnectionsListHealthDetailsOutput,
  }));
// Input Schema
export interface NetworkConnectionsListOutboundNetworkDependenciesEndpointsInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkConnectionName: string;
  $top?: number;
}
export const NetworkConnectionsListOutboundNetworkDependenciesEndpointsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkConnectionName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/networkConnections/{networkConnectionName}/outboundNetworkDependenciesEndpoints",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<NetworkConnectionsListOutboundNetworkDependenciesEndpointsInput>;

// Output Schema
export interface NetworkConnectionsListOutboundNetworkDependenciesEndpointsOutput {
  value?: {
    category?: string;
    endpoints?: {
      domainName?: string;
      description?: string;
      endpointDetails?: { port?: number }[];
    }[];
  }[];
  nextLink?: string;
}
export const NetworkConnectionsListOutboundNetworkDependenciesEndpointsOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          category: Schema.optional(Schema.String),
          endpoints: Schema.optional(
            Schema.Array(
              Schema.Struct({
                domainName: Schema.optional(Schema.String),
                description: Schema.optional(Schema.String),
                endpointDetails: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      port: Schema.optional(Schema.Number),
                    }),
                  ),
                ),
              }),
            ),
          ),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<NetworkConnectionsListOutboundNetworkDependenciesEndpointsOutput>;

// The operation
/**
 * Lists the endpoints that agents may call as part of Dev Box service administration. These FQDNs should be allowed for outbound access in order for the Dev Box service to function.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 * @param networkConnectionName - Name of the Network Connection that can be applied to a Pool.
 */
export const NetworkConnectionsListOutboundNetworkDependenciesEndpoints =
  /*@__PURE__*/ API.make(() => ({
    inputSchema:
      NetworkConnectionsListOutboundNetworkDependenciesEndpointsInput,
    outputSchema:
      NetworkConnectionsListOutboundNetworkDependenciesEndpointsOutput,
  }));
// Input Schema
export interface NetworkConnectionsRunHealthChecksInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkConnectionName: string;
}
export const NetworkConnectionsRunHealthChecksInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/networkConnections/{networkConnectionName}/runHealthChecks",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<NetworkConnectionsRunHealthChecksInput>;

// Output Schema
export type NetworkConnectionsRunHealthChecksOutput = void;
export const NetworkConnectionsRunHealthChecksOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<NetworkConnectionsRunHealthChecksOutput>;

// The operation
/**
 * Triggers a new health check run. The execution and health check result can be tracked via the network Connection health check details
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkConnectionName - Name of the Network Connection that can be applied to a Pool.
 */
export const NetworkConnectionsRunHealthChecks =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkConnectionsRunHealthChecksInput,
    outputSchema: NetworkConnectionsRunHealthChecksOutput,
  }));
// Input Schema
export interface NetworkConnectionsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  networkConnectionName: string;
  properties?: {
    subnetId?: string;
    domainName?: string;
    organizationUnit?: string;
    domainUsername?: string;
    domainPassword?: string | Redacted.Redacted<string>;
  };
  tags?: Record<string, string>;
  location?: string;
}
export const NetworkConnectionsUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkConnectionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        subnetId: Schema.optional(Schema.String),
        domainName: Schema.optional(Schema.String),
        organizationUnit: Schema.optional(Schema.String),
        domainUsername: Schema.optional(Schema.String),
        domainPassword: Schema.optional(SensitiveString),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/networkConnections/{networkConnectionName}",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<NetworkConnectionsUpdateInput>;

// Output Schema
export interface NetworkConnectionsUpdateOutput {
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
export const NetworkConnectionsUpdateOutput =
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
  }) as unknown as Schema.Codec<NetworkConnectionsUpdateOutput>;

// The operation
/**
 * Partially updates a Network Connection
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkConnectionName - Name of the Network Connection that can be applied to a Pool.
 */
export const NetworkConnectionsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: NetworkConnectionsUpdateInput,
  outputSchema: NetworkConnectionsUpdateOutput,
}));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.DevCenter/operations",
    apiVersion: "2025-02-01",
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
    origin?: "user" | "system" | "user,system";
    actionType?: "Internal";
  }[];
  nextLink?: string;
}
export const OperationsListOutput = /*@__PURE__*/ Schema.Struct({
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
        origin: Schema.optional(
          Schema.Literals(["user", "system", "user,system"]),
        ),
        actionType: Schema.optional(Schema.Literals(["Internal"])),
      }),
    ),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<OperationsListOutput>;

// The operation
/**
 * Lists all of the available resource provider operations.
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface OperationStatusesGetInput {
  subscriptionId: string;
  location: string;
  operationId: string;
}
export const OperationStatusesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    operationId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DevCenter/locations/{location}/operationStatuses/{operationId}",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<OperationStatusesGetInput>;

// Output Schema
export interface OperationStatusesGetOutput {
  id?: string;
  resourceId?: string;
  name?: string;
  status: string;
  percentComplete?: number;
  startTime?: string;
  endTime?: string;
  operations?: {
    id?: string;
    resourceId?: string;
    name?: string;
    status: string;
    percentComplete?: number;
    startTime?: string;
    endTime?: string;
    operations?: unknown[];
    error?: {
      code?: string;
      message?: string;
      target?: string;
      details?: unknown[];
      additionalInfo?: { type?: string; info?: unknown }[];
    };
  }[];
  error?: {
    code?: string;
    message?: string;
    target?: string;
    details?: unknown[];
    additionalInfo?: { type?: string; info?: unknown }[];
  };
}
export const OperationStatusesGetOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    resourceId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.String,
    percentComplete: Schema.optional(Schema.Number),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    operations: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          resourceId: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          status: Schema.String,
          percentComplete: Schema.optional(Schema.Number),
          startTime: Schema.optional(Schema.String),
          endTime: Schema.optional(Schema.String),
          operations: Schema.optional(Schema.Array(Schema.Unknown)),
          error: Schema.optional(
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
        }),
      ),
    ),
    error: Schema.optional(
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
  }) as unknown as Schema.Codec<OperationStatusesGetOutput>;

// The operation
/**
 * Get Operation Status
 *
 * Gets the current status of an async operation.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The Azure region
 * @param operationId - The ID of an ongoing async operation
 */
export const OperationStatusesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: OperationStatusesGetInput,
  outputSchema: OperationStatusesGetOutput,
}));
// Input Schema
export interface PoolsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  projectName: string;
  poolName: string;
  properties?: {
    devBoxDefinitionType?: "Reference" | "Value";
    devBoxDefinitionName?: string;
    devBoxDefinition?: {
      imageReference?: { id?: string; exactVersion?: string };
      sku?: {
        name: string;
        tier?: "Free" | "Basic" | "Standard" | "Premium";
        size?: string;
        family?: string;
        capacity?: number;
      };
      activeImageReference?: { id?: string; exactVersion?: string };
    };
    networkConnectionName?: string;
    licenseType?: "Windows_Client";
    localAdministrator?: "Disabled" | "Enabled";
    stopOnDisconnect?: {
      status?: "Enabled" | "Disabled";
      gracePeriodMinutes?: number;
    };
    stopOnNoConnect?: {
      status?: "Enabled" | "Disabled";
      gracePeriodMinutes?: number;
    };
    singleSignOnStatus?: "Disabled" | "Enabled";
    displayName?: string;
    virtualNetworkType?: "Managed" | "Unmanaged";
    managedVirtualNetworkRegions?: string[];
  };
  tags?: Record<string, string>;
  location: string;
}
export const PoolsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    poolName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        devBoxDefinitionType: Schema.optional(
          Schema.Literals(["Reference", "Value"]),
        ),
        devBoxDefinitionName: Schema.optional(Schema.String),
        devBoxDefinition: Schema.optional(
          Schema.Struct({
            imageReference: Schema.optional(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                exactVersion: Schema.optional(Schema.String),
              }),
            ),
            sku: Schema.optional(
              Schema.Struct({
                name: Schema.String,
                tier: Schema.optional(
                  Schema.Literals(["Free", "Basic", "Standard", "Premium"]),
                ),
                size: Schema.optional(Schema.String),
                family: Schema.optional(Schema.String),
                capacity: Schema.optional(Schema.Number),
              }),
            ),
            activeImageReference: Schema.optional(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                exactVersion: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
        networkConnectionName: Schema.optional(Schema.String),
        licenseType: Schema.optional(Schema.Literals(["Windows_Client"])),
        localAdministrator: Schema.optional(
          Schema.Literals(["Disabled", "Enabled"]),
        ),
        stopOnDisconnect: Schema.optional(
          Schema.Struct({
            status: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
            gracePeriodMinutes: Schema.optional(Schema.Number),
          }),
        ),
        stopOnNoConnect: Schema.optional(
          Schema.Struct({
            status: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
            gracePeriodMinutes: Schema.optional(Schema.Number),
          }),
        ),
        singleSignOnStatus: Schema.optional(
          Schema.Literals(["Disabled", "Enabled"]),
        ),
        displayName: Schema.optional(Schema.String),
        virtualNetworkType: Schema.optional(
          Schema.Literals(["Managed", "Unmanaged"]),
        ),
        managedVirtualNetworkRegions: Schema.optional(
          Schema.Array(Schema.String),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/pools/{poolName}",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<PoolsCreateOrUpdateInput>;

// Output Schema
export interface PoolsCreateOrUpdateOutput {
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
export const PoolsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<PoolsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a machine pool
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - The name of the project.
 * @param poolName - Name of the pool.
 */
export const PoolsCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: PoolsCreateOrUpdateInput,
  outputSchema: PoolsCreateOrUpdateOutput,
}));
// Input Schema
export interface PoolsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  projectName: string;
  poolName: string;
}
export const PoolsDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  projectName: Schema.String.pipe(T.PathParam()),
  poolName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/pools/{poolName}",
    apiVersion: "2025-02-01",
  }),
) as unknown as Schema.Codec<PoolsDeleteInput>;

// Output Schema
export type PoolsDeleteOutput = void;
export const PoolsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<PoolsDeleteOutput>;

// The operation
/**
 * Deletes a machine pool
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - The name of the project.
 * @param poolName - Name of the pool.
 */
export const PoolsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: PoolsDeleteInput,
  outputSchema: PoolsDeleteOutput,
}));
// Input Schema
export interface PoolsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  projectName: string;
  poolName: string;
}
export const PoolsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  projectName: Schema.String.pipe(T.PathParam()),
  poolName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/pools/{poolName}",
    apiVersion: "2025-02-01",
  }),
) as unknown as Schema.Codec<PoolsGetInput>;

// Output Schema
export interface PoolsGetOutput {
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
export const PoolsGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<PoolsGetOutput>;

// The operation
/**
 * Gets a machine pool
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - The name of the project.
 * @param poolName - Name of the pool.
 */
export const PoolsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: PoolsGetInput,
  outputSchema: PoolsGetOutput,
}));
// Input Schema
export interface PoolsListByProjectInput {
  subscriptionId: string;
  resourceGroupName: string;
  projectName: string;
  $top?: number;
}
export const PoolsListByProjectInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/pools",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<PoolsListByProjectInput>;

// Output Schema
export interface PoolsListByProjectOutput {
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
export const PoolsListByProjectOutput =
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PoolsListByProjectOutput>;

// The operation
/**
 * Lists pools for a project
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - The name of the project.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 */
export const PoolsListByProject = /*@__PURE__*/ API.make(() => ({
  inputSchema: PoolsListByProjectInput,
  outputSchema: PoolsListByProjectOutput,
}));
// Input Schema
export interface PoolsRunHealthChecksInput {
  subscriptionId: string;
  resourceGroupName: string;
  projectName: string;
  poolName: string;
}
export const PoolsRunHealthChecksInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    poolName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/pools/{poolName}/runHealthChecks",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<PoolsRunHealthChecksInput>;

// Output Schema
export type PoolsRunHealthChecksOutput = void;
export const PoolsRunHealthChecksOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<PoolsRunHealthChecksOutput>;

// The operation
/**
 * Triggers a refresh of the pool status.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - The name of the project.
 * @param poolName - Name of the pool.
 */
export const PoolsRunHealthChecks = /*@__PURE__*/ API.make(() => ({
  inputSchema: PoolsRunHealthChecksInput,
  outputSchema: PoolsRunHealthChecksOutput,
}));
// Input Schema
export interface PoolsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  projectName: string;
  poolName: string;
  properties?: {
    devBoxDefinitionType?: "Reference" | "Value";
    devBoxDefinitionName?: string;
    devBoxDefinition?: {
      imageReference?: { id?: string; exactVersion?: string };
      sku?: {
        name: string;
        tier?: "Free" | "Basic" | "Standard" | "Premium";
        size?: string;
        family?: string;
        capacity?: number;
      };
      activeImageReference?: { id?: string; exactVersion?: string };
    };
    networkConnectionName?: string;
    licenseType?: "Windows_Client";
    localAdministrator?: "Disabled" | "Enabled";
    stopOnDisconnect?: {
      status?: "Enabled" | "Disabled";
      gracePeriodMinutes?: number;
    };
    stopOnNoConnect?: {
      status?: "Enabled" | "Disabled";
      gracePeriodMinutes?: number;
    };
    singleSignOnStatus?: "Disabled" | "Enabled";
    displayName?: string;
    virtualNetworkType?: "Managed" | "Unmanaged";
    managedVirtualNetworkRegions?: string[];
  };
  tags?: Record<string, string>;
  location?: string;
}
export const PoolsUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  projectName: Schema.String.pipe(T.PathParam()),
  poolName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      devBoxDefinitionType: Schema.optional(
        Schema.Literals(["Reference", "Value"]),
      ),
      devBoxDefinitionName: Schema.optional(Schema.String),
      devBoxDefinition: Schema.optional(
        Schema.Struct({
          imageReference: Schema.optional(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              exactVersion: Schema.optional(Schema.String),
            }),
          ),
          sku: Schema.optional(
            Schema.Struct({
              name: Schema.String,
              tier: Schema.optional(
                Schema.Literals(["Free", "Basic", "Standard", "Premium"]),
              ),
              size: Schema.optional(Schema.String),
              family: Schema.optional(Schema.String),
              capacity: Schema.optional(Schema.Number),
            }),
          ),
          activeImageReference: Schema.optional(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              exactVersion: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
      networkConnectionName: Schema.optional(Schema.String),
      licenseType: Schema.optional(Schema.Literals(["Windows_Client"])),
      localAdministrator: Schema.optional(
        Schema.Literals(["Disabled", "Enabled"]),
      ),
      stopOnDisconnect: Schema.optional(
        Schema.Struct({
          status: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
          gracePeriodMinutes: Schema.optional(Schema.Number),
        }),
      ),
      stopOnNoConnect: Schema.optional(
        Schema.Struct({
          status: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
          gracePeriodMinutes: Schema.optional(Schema.Number),
        }),
      ),
      singleSignOnStatus: Schema.optional(
        Schema.Literals(["Disabled", "Enabled"]),
      ),
      displayName: Schema.optional(Schema.String),
      virtualNetworkType: Schema.optional(
        Schema.Literals(["Managed", "Unmanaged"]),
      ),
      managedVirtualNetworkRegions: Schema.optional(
        Schema.Array(Schema.String),
      ),
    }),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/pools/{poolName}",
    apiVersion: "2025-02-01",
  }),
) as unknown as Schema.Codec<PoolsUpdateInput>;

// Output Schema
export interface PoolsUpdateOutput {
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
export const PoolsUpdateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<PoolsUpdateOutput>;

// The operation
/**
 * Partially updates a machine pool
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - The name of the project.
 * @param poolName - Name of the pool.
 */
export const PoolsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: PoolsUpdateInput,
  outputSchema: PoolsUpdateOutput,
}));
// Input Schema
export interface ProjectAllowedEnvironmentTypesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  projectName: string;
  environmentTypeName: string;
}
export const ProjectAllowedEnvironmentTypesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    environmentTypeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/allowedEnvironmentTypes/{environmentTypeName}",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<ProjectAllowedEnvironmentTypesGetInput>;

// Output Schema
export interface ProjectAllowedEnvironmentTypesGetOutput {
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
export const ProjectAllowedEnvironmentTypesGetOutput =
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
  }) as unknown as Schema.Codec<ProjectAllowedEnvironmentTypesGetOutput>;

// The operation
/**
 * Gets an allowed environment type.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - The name of the project.
 * @param environmentTypeName - The name of the environment type.
 */
export const ProjectAllowedEnvironmentTypesGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ProjectAllowedEnvironmentTypesGetInput,
    outputSchema: ProjectAllowedEnvironmentTypesGetOutput,
  }));
// Input Schema
export interface ProjectAllowedEnvironmentTypesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  projectName: string;
  $top?: number;
}
export const ProjectAllowedEnvironmentTypesListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/allowedEnvironmentTypes",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<ProjectAllowedEnvironmentTypesListInput>;

// Output Schema
export interface ProjectAllowedEnvironmentTypesListOutput {
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
export const ProjectAllowedEnvironmentTypesListOutput =
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ProjectAllowedEnvironmentTypesListOutput>;

// The operation
/**
 * Lists allowed environment types for a project.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - The name of the project.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 */
export const ProjectAllowedEnvironmentTypesList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ProjectAllowedEnvironmentTypesListInput,
    outputSchema: ProjectAllowedEnvironmentTypesListOutput,
  }));
// Input Schema
export interface ProjectCatalogEnvironmentDefinitionsGetErrorDetailsInput {
  subscriptionId: string;
  resourceGroupName: string;
  projectName: string;
  catalogName: string;
  environmentDefinitionName: string;
}
export const ProjectCatalogEnvironmentDefinitionsGetErrorDetailsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    catalogName: Schema.String.pipe(T.PathParam()),
    environmentDefinitionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/catalogs/{catalogName}/environmentDefinitions/{environmentDefinitionName}/getErrorDetails",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<ProjectCatalogEnvironmentDefinitionsGetErrorDetailsInput>;

// Output Schema
export interface ProjectCatalogEnvironmentDefinitionsGetErrorDetailsOutput {
  errors?: { code?: string; message?: string }[];
}
export const ProjectCatalogEnvironmentDefinitionsGetErrorDetailsOutput =
  /*@__PURE__*/ Schema.Struct({
    errors: Schema.optional(
      Schema.Array(
        Schema.Struct({
          code: Schema.optional(Schema.String),
          message: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ProjectCatalogEnvironmentDefinitionsGetErrorDetailsOutput>;

// The operation
/**
 * Gets Environment Definition error details
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - The name of the project.
 * @param catalogName - The name of the Catalog.
 * @param environmentDefinitionName - The name of the Environment Definition.
 */
export const ProjectCatalogEnvironmentDefinitionsGetErrorDetails =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ProjectCatalogEnvironmentDefinitionsGetErrorDetailsInput,
    outputSchema: ProjectCatalogEnvironmentDefinitionsGetErrorDetailsOutput,
  }));
// Input Schema
export interface ProjectCatalogImageDefinitionBuildCancelInput {
  subscriptionId: string;
  resourceGroupName: string;
  projectName: string;
  catalogName: string;
  imageDefinitionName: string;
  buildName: string;
}
export const ProjectCatalogImageDefinitionBuildCancelInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    catalogName: Schema.String.pipe(T.PathParam()),
    imageDefinitionName: Schema.String.pipe(T.PathParam()),
    buildName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/catalogs/{catalogName}/imageDefinitions/{imageDefinitionName}/builds/{buildName}/cancel",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<ProjectCatalogImageDefinitionBuildCancelInput>;

// Output Schema
export type ProjectCatalogImageDefinitionBuildCancelOutput = void;
export const ProjectCatalogImageDefinitionBuildCancelOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ProjectCatalogImageDefinitionBuildCancelOutput>;

// The operation
/**
 * Cancels the specified build for an image definition.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - The name of the project.
 * @param catalogName - The name of the Catalog.
 * @param imageDefinitionName - The name of the Image Definition.
 * @param buildName - The ID of the Image Definition Build.
 */
export const ProjectCatalogImageDefinitionBuildCancel =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ProjectCatalogImageDefinitionBuildCancelInput,
    outputSchema: ProjectCatalogImageDefinitionBuildCancelOutput,
  }));
// Input Schema
export interface ProjectCatalogImageDefinitionBuildGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  projectName: string;
  catalogName: string;
  imageDefinitionName: string;
  buildName: string;
}
export const ProjectCatalogImageDefinitionBuildGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    catalogName: Schema.String.pipe(T.PathParam()),
    imageDefinitionName: Schema.String.pipe(T.PathParam()),
    buildName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/catalogs/{catalogName}/imageDefinitions/{imageDefinitionName}/builds/{buildName}",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<ProjectCatalogImageDefinitionBuildGetInput>;

// Output Schema
export interface ProjectCatalogImageDefinitionBuildGetOutput {
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
export const ProjectCatalogImageDefinitionBuildGetOutput =
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
  }) as unknown as Schema.Codec<ProjectCatalogImageDefinitionBuildGetOutput>;

// The operation
/**
 * Gets a build for a specified image definition.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - The name of the project.
 * @param catalogName - The name of the Catalog.
 * @param imageDefinitionName - The name of the Image Definition.
 * @param buildName - The ID of the Image Definition Build.
 */
export const ProjectCatalogImageDefinitionBuildGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ProjectCatalogImageDefinitionBuildGetInput,
    outputSchema: ProjectCatalogImageDefinitionBuildGetOutput,
  }));
// Input Schema
export interface ProjectCatalogImageDefinitionBuildGetBuildDetailsInput {
  subscriptionId: string;
  resourceGroupName: string;
  projectName: string;
  catalogName: string;
  imageDefinitionName: string;
  buildName: string;
}
export const ProjectCatalogImageDefinitionBuildGetBuildDetailsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    catalogName: Schema.String.pipe(T.PathParam()),
    imageDefinitionName: Schema.String.pipe(T.PathParam()),
    buildName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/catalogs/{catalogName}/imageDefinitions/{imageDefinitionName}/builds/{buildName}/getBuildDetails",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<ProjectCatalogImageDefinitionBuildGetBuildDetailsInput>;

// Output Schema
export interface ProjectCatalogImageDefinitionBuildGetBuildDetailsOutput {
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
export const ProjectCatalogImageDefinitionBuildGetBuildDetailsOutput =
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
  }) as unknown as Schema.Codec<ProjectCatalogImageDefinitionBuildGetBuildDetailsOutput>;

// The operation
/**
 * Gets Build details
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - The name of the project.
 * @param catalogName - The name of the Catalog.
 * @param imageDefinitionName - The name of the Image Definition.
 * @param buildName - The ID of the Image Definition Build.
 */
export const ProjectCatalogImageDefinitionBuildGetBuildDetails =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ProjectCatalogImageDefinitionBuildGetBuildDetailsInput,
    outputSchema: ProjectCatalogImageDefinitionBuildGetBuildDetailsOutput,
  }));
// Input Schema
export interface ProjectCatalogImageDefinitionBuildsListByImageDefinitionInput {
  subscriptionId: string;
  resourceGroupName: string;
  projectName: string;
  catalogName: string;
  imageDefinitionName: string;
}
export const ProjectCatalogImageDefinitionBuildsListByImageDefinitionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    catalogName: Schema.String.pipe(T.PathParam()),
    imageDefinitionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/catalogs/{catalogName}/imageDefinitions/{imageDefinitionName}/builds",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<ProjectCatalogImageDefinitionBuildsListByImageDefinitionInput>;

// Output Schema
export interface ProjectCatalogImageDefinitionBuildsListByImageDefinitionOutput {
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
export const ProjectCatalogImageDefinitionBuildsListByImageDefinitionOutput =
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ProjectCatalogImageDefinitionBuildsListByImageDefinitionOutput>;

// The operation
/**
 * Lists builds for a specified image definition.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - The name of the project.
 * @param catalogName - The name of the Catalog.
 * @param imageDefinitionName - The name of the Image Definition.
 */
export const ProjectCatalogImageDefinitionBuildsListByImageDefinition =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ProjectCatalogImageDefinitionBuildsListByImageDefinitionInput,
    outputSchema:
      ProjectCatalogImageDefinitionBuildsListByImageDefinitionOutput,
  }));
// Input Schema
export interface ProjectCatalogImageDefinitionsBuildImageInput {
  subscriptionId: string;
  resourceGroupName: string;
  projectName: string;
  catalogName: string;
  imageDefinitionName: string;
}
export const ProjectCatalogImageDefinitionsBuildImageInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    catalogName: Schema.String.pipe(T.PathParam()),
    imageDefinitionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/catalogs/{catalogName}/imageDefinitions/{imageDefinitionName}/buildImage",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<ProjectCatalogImageDefinitionsBuildImageInput>;

// Output Schema
export type ProjectCatalogImageDefinitionsBuildImageOutput = void;
export const ProjectCatalogImageDefinitionsBuildImageOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ProjectCatalogImageDefinitionsBuildImageOutput>;

// The operation
/**
 * Builds an image for the specified Image Definition.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - The name of the project.
 * @param catalogName - The name of the Catalog.
 * @param imageDefinitionName - The name of the Image Definition.
 */
export const ProjectCatalogImageDefinitionsBuildImage =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ProjectCatalogImageDefinitionsBuildImageInput,
    outputSchema: ProjectCatalogImageDefinitionsBuildImageOutput,
  }));
// Input Schema
export interface ProjectCatalogImageDefinitionsGetByProjectCatalogInput {
  subscriptionId: string;
  resourceGroupName: string;
  projectName: string;
  catalogName: string;
  imageDefinitionName: string;
}
export const ProjectCatalogImageDefinitionsGetByProjectCatalogInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    catalogName: Schema.String.pipe(T.PathParam()),
    imageDefinitionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/catalogs/{catalogName}/imageDefinitions/{imageDefinitionName}",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<ProjectCatalogImageDefinitionsGetByProjectCatalogInput>;

// Output Schema
export interface ProjectCatalogImageDefinitionsGetByProjectCatalogOutput {
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
export const ProjectCatalogImageDefinitionsGetByProjectCatalogOutput =
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
  }) as unknown as Schema.Codec<ProjectCatalogImageDefinitionsGetByProjectCatalogOutput>;

// The operation
/**
 * Gets an Image Definition from the catalog
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - The name of the project.
 * @param catalogName - The name of the Catalog.
 * @param imageDefinitionName - The name of the Image Definition.
 */
export const ProjectCatalogImageDefinitionsGetByProjectCatalog =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ProjectCatalogImageDefinitionsGetByProjectCatalogInput,
    outputSchema: ProjectCatalogImageDefinitionsGetByProjectCatalogOutput,
  }));
// Input Schema
export interface ProjectCatalogImageDefinitionsGetErrorDetailsInput {
  subscriptionId: string;
  resourceGroupName: string;
  projectName: string;
  catalogName: string;
  imageDefinitionName: string;
}
export const ProjectCatalogImageDefinitionsGetErrorDetailsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    catalogName: Schema.String.pipe(T.PathParam()),
    imageDefinitionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/catalogs/{catalogName}/imageDefinitions/{imageDefinitionName}/getErrorDetails",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<ProjectCatalogImageDefinitionsGetErrorDetailsInput>;

// Output Schema
export interface ProjectCatalogImageDefinitionsGetErrorDetailsOutput {
  errors?: { code?: string; message?: string }[];
}
export const ProjectCatalogImageDefinitionsGetErrorDetailsOutput =
  /*@__PURE__*/ Schema.Struct({
    errors: Schema.optional(
      Schema.Array(
        Schema.Struct({
          code: Schema.optional(Schema.String),
          message: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ProjectCatalogImageDefinitionsGetErrorDetailsOutput>;

// The operation
/**
 * Gets Image Definition error details
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - The name of the project.
 * @param catalogName - The name of the Catalog.
 * @param imageDefinitionName - The name of the Image Definition.
 */
export const ProjectCatalogImageDefinitionsGetErrorDetails =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ProjectCatalogImageDefinitionsGetErrorDetailsInput,
    outputSchema: ProjectCatalogImageDefinitionsGetErrorDetailsOutput,
  }));
// Input Schema
export interface ProjectCatalogImageDefinitionsListByProjectCatalogInput {
  subscriptionId: string;
  resourceGroupName: string;
  projectName: string;
  catalogName: string;
  $top?: number;
}
export const ProjectCatalogImageDefinitionsListByProjectCatalogInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    catalogName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/catalogs/{catalogName}/imageDefinitions",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<ProjectCatalogImageDefinitionsListByProjectCatalogInput>;

// Output Schema
export interface ProjectCatalogImageDefinitionsListByProjectCatalogOutput {
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
export const ProjectCatalogImageDefinitionsListByProjectCatalogOutput =
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ProjectCatalogImageDefinitionsListByProjectCatalogOutput>;

// The operation
/**
 * List Image Definitions in the catalog.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - The name of the project.
 * @param catalogName - The name of the Catalog.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 */
export const ProjectCatalogImageDefinitionsListByProjectCatalog =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ProjectCatalogImageDefinitionsListByProjectCatalogInput,
    outputSchema: ProjectCatalogImageDefinitionsListByProjectCatalogOutput,
  }));
// Input Schema
export interface ProjectCatalogsConnectInput {
  subscriptionId: string;
  resourceGroupName: string;
  projectName: string;
  catalogName: string;
}
export const ProjectCatalogsConnectInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    catalogName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/catalogs/{catalogName}/connect",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<ProjectCatalogsConnectInput>;

// Output Schema
export type ProjectCatalogsConnectOutput = void;
export const ProjectCatalogsConnectOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ProjectCatalogsConnectOutput>;

// The operation
/**
 * Connects a project catalog to enable syncing.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - The name of the project.
 * @param catalogName - The name of the Catalog.
 */
export const ProjectCatalogsConnect = /*@__PURE__*/ API.make(() => ({
  inputSchema: ProjectCatalogsConnectInput,
  outputSchema: ProjectCatalogsConnectOutput,
}));
// Input Schema
export interface ProjectCatalogsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  projectName: string;
  catalogName: string;
  properties?: {
    gitHub?: {
      uri?: string;
      branch?: string;
      secretIdentifier?: string;
      path?: string;
    };
    adoGit?: {
      uri?: string;
      branch?: string;
      secretIdentifier?: string;
      path?: string;
    };
    syncType?: "Manual" | "Scheduled";
    tags?: Record<string, string>;
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
export const ProjectCatalogsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    catalogName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        gitHub: Schema.optional(
          Schema.Struct({
            uri: Schema.optional(Schema.String),
            branch: Schema.optional(Schema.String),
            secretIdentifier: Schema.optional(Schema.String),
            path: Schema.optional(Schema.String),
          }),
        ),
        adoGit: Schema.optional(
          Schema.Struct({
            uri: Schema.optional(Schema.String),
            branch: Schema.optional(Schema.String),
            secretIdentifier: Schema.optional(Schema.String),
            path: Schema.optional(Schema.String),
          }),
        ),
        syncType: Schema.optional(Schema.Literals(["Manual", "Scheduled"])),
        tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
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
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/catalogs/{catalogName}",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<ProjectCatalogsCreateOrUpdateInput>;

// Output Schema
export interface ProjectCatalogsCreateOrUpdateOutput {
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
export const ProjectCatalogsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ProjectCatalogsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a project catalog.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - The name of the project.
 * @param catalogName - The name of the Catalog.
 */
export const ProjectCatalogsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ProjectCatalogsCreateOrUpdateInput,
    outputSchema: ProjectCatalogsCreateOrUpdateOutput,
  }));
// Input Schema
export interface ProjectCatalogsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  projectName: string;
  catalogName: string;
}
export const ProjectCatalogsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    catalogName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/catalogs/{catalogName}",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<ProjectCatalogsDeleteInput>;

// Output Schema
export type ProjectCatalogsDeleteOutput = void;
export const ProjectCatalogsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ProjectCatalogsDeleteOutput>;

// The operation
/**
 * Deletes a project catalog resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - The name of the project.
 * @param catalogName - The name of the Catalog.
 */
export const ProjectCatalogsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: ProjectCatalogsDeleteInput,
  outputSchema: ProjectCatalogsDeleteOutput,
}));
// Input Schema
export interface ProjectCatalogsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  projectName: string;
  catalogName: string;
}
export const ProjectCatalogsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    catalogName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/catalogs/{catalogName}",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<ProjectCatalogsGetInput>;

// Output Schema
export interface ProjectCatalogsGetOutput {
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
export const ProjectCatalogsGetOutput =
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
  }) as unknown as Schema.Codec<ProjectCatalogsGetOutput>;

// The operation
/**
 * Gets an associated project catalog.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - The name of the project.
 * @param catalogName - The name of the Catalog.
 */
export const ProjectCatalogsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ProjectCatalogsGetInput,
  outputSchema: ProjectCatalogsGetOutput,
}));
// Input Schema
export interface ProjectCatalogsGetSyncErrorDetailsInput {
  subscriptionId: string;
  resourceGroupName: string;
  projectName: string;
  catalogName: string;
}
export const ProjectCatalogsGetSyncErrorDetailsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    catalogName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/catalogs/{catalogName}/getSyncErrorDetails",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<ProjectCatalogsGetSyncErrorDetailsInput>;

// Output Schema
export interface ProjectCatalogsGetSyncErrorDetailsOutput {
  operationError?: { code?: string; message?: string };
  conflicts?: { path?: string; name?: string }[];
  errors?: {
    path?: string;
    errorDetails?: { code?: string; message?: string }[];
  }[];
}
export const ProjectCatalogsGetSyncErrorDetailsOutput =
  /*@__PURE__*/ Schema.Struct({
    operationError: Schema.optional(
      Schema.Struct({
        code: Schema.optional(Schema.String),
        message: Schema.optional(Schema.String),
      }),
    ),
    conflicts: Schema.optional(
      Schema.Array(
        Schema.Struct({
          path: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
        }),
      ),
    ),
    errors: Schema.optional(
      Schema.Array(
        Schema.Struct({
          path: Schema.optional(Schema.String),
          errorDetails: Schema.optional(
            Schema.Array(
              Schema.Struct({
                code: Schema.optional(Schema.String),
                message: Schema.optional(Schema.String),
              }),
            ),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ProjectCatalogsGetSyncErrorDetailsOutput>;

// The operation
/**
 * Gets project catalog synchronization error details
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - The name of the project.
 * @param catalogName - The name of the Catalog.
 */
export const ProjectCatalogsGetSyncErrorDetails =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ProjectCatalogsGetSyncErrorDetailsInput,
    outputSchema: ProjectCatalogsGetSyncErrorDetailsOutput,
  }));
// Input Schema
export interface ProjectCatalogsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  projectName: string;
  $top?: number;
}
export const ProjectCatalogsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/catalogs",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<ProjectCatalogsListInput>;

// Output Schema
export interface ProjectCatalogsListOutput {
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
export const ProjectCatalogsListOutput =
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ProjectCatalogsListOutput>;

// The operation
/**
 * Lists the catalogs associated with a project.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - The name of the project.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 */
export const ProjectCatalogsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: ProjectCatalogsListInput,
  outputSchema: ProjectCatalogsListOutput,
}));
// Input Schema
export interface ProjectCatalogsPatchInput {
  subscriptionId: string;
  resourceGroupName: string;
  projectName: string;
  catalogName: string;
  properties?: {
    gitHub?: {
      uri?: string;
      branch?: string;
      secretIdentifier?: string;
      path?: string;
    };
    adoGit?: {
      uri?: string;
      branch?: string;
      secretIdentifier?: string;
      path?: string;
    };
    syncType?: "Manual" | "Scheduled";
    tags?: Record<string, string>;
  };
}
export const ProjectCatalogsPatchInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    catalogName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        gitHub: Schema.optional(
          Schema.Struct({
            uri: Schema.optional(Schema.String),
            branch: Schema.optional(Schema.String),
            secretIdentifier: Schema.optional(Schema.String),
            path: Schema.optional(Schema.String),
          }),
        ),
        adoGit: Schema.optional(
          Schema.Struct({
            uri: Schema.optional(Schema.String),
            branch: Schema.optional(Schema.String),
            secretIdentifier: Schema.optional(Schema.String),
            path: Schema.optional(Schema.String),
          }),
        ),
        syncType: Schema.optional(Schema.Literals(["Manual", "Scheduled"])),
        tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/catalogs/{catalogName}",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<ProjectCatalogsPatchInput>;

// Output Schema
export interface ProjectCatalogsPatchOutput {
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
export const ProjectCatalogsPatchOutput =
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
  }) as unknown as Schema.Codec<ProjectCatalogsPatchOutput>;

// The operation
/**
 * Partially updates a project catalog.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - The name of the project.
 * @param catalogName - The name of the Catalog.
 */
export const ProjectCatalogsPatch = /*@__PURE__*/ API.make(() => ({
  inputSchema: ProjectCatalogsPatchInput,
  outputSchema: ProjectCatalogsPatchOutput,
}));
// Input Schema
export interface ProjectCatalogsSyncInput {
  subscriptionId: string;
  resourceGroupName: string;
  projectName: string;
  catalogName: string;
}
export const ProjectCatalogsSyncInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    catalogName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/catalogs/{catalogName}/sync",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<ProjectCatalogsSyncInput>;

// Output Schema
export type ProjectCatalogsSyncOutput = void;
export const ProjectCatalogsSyncOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ProjectCatalogsSyncOutput>;

// The operation
/**
 * Syncs templates for a template source.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - The name of the project.
 * @param catalogName - The name of the Catalog.
 */
export const ProjectCatalogsSync = /*@__PURE__*/ API.make(() => ({
  inputSchema: ProjectCatalogsSyncInput,
  outputSchema: ProjectCatalogsSyncOutput,
}));
// Input Schema
export interface ProjectEnvironmentTypesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  projectName: string;
  environmentTypeName: string;
  properties?: {
    deploymentTargetId?: string;
    displayName?: string;
    status?: "Enabled" | "Disabled";
    creatorRoleAssignment?: {
      roles?: Record<string, { roleName?: string; description?: string }>;
    };
    userRoleAssignments?: Record<
      string,
      { roles?: Record<string, { roleName?: string; description?: string }> }
    >;
  };
  tags?: Record<string, string>;
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
  location?: string;
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
export const ProjectEnvironmentTypesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    environmentTypeName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        deploymentTargetId: Schema.optional(Schema.String),
        displayName: Schema.optional(Schema.String),
        status: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
        creatorRoleAssignment: Schema.optional(
          Schema.Struct({
            roles: Schema.optional(
              Schema.Record(
                Schema.String,
                Schema.Struct({
                  roleName: Schema.optional(Schema.String),
                  description: Schema.optional(Schema.String),
                }),
              ),
            ),
          }),
        ),
        userRoleAssignments: Schema.optional(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              roles: Schema.optional(
                Schema.Record(
                  Schema.String,
                  Schema.Struct({
                    roleName: Schema.optional(Schema.String),
                    description: Schema.optional(Schema.String),
                  }),
                ),
              ),
            }),
          ),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
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
    location: Schema.optional(Schema.String),
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
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/environmentTypes/{environmentTypeName}",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<ProjectEnvironmentTypesCreateOrUpdateInput>;

// Output Schema
export interface ProjectEnvironmentTypesCreateOrUpdateOutput {
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
export const ProjectEnvironmentTypesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ProjectEnvironmentTypesCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a project environment type.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - The name of the project.
 * @param environmentTypeName - The name of the environment type.
 */
export const ProjectEnvironmentTypesCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ProjectEnvironmentTypesCreateOrUpdateInput,
    outputSchema: ProjectEnvironmentTypesCreateOrUpdateOutput,
  }));
// Input Schema
export interface ProjectEnvironmentTypesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  projectName: string;
  environmentTypeName: string;
}
export const ProjectEnvironmentTypesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    environmentTypeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/environmentTypes/{environmentTypeName}",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<ProjectEnvironmentTypesDeleteInput>;

// Output Schema
export type ProjectEnvironmentTypesDeleteOutput = void;
export const ProjectEnvironmentTypesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ProjectEnvironmentTypesDeleteOutput>;

// The operation
/**
 * Deletes a project environment type.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - The name of the project.
 * @param environmentTypeName - The name of the environment type.
 */
export const ProjectEnvironmentTypesDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ProjectEnvironmentTypesDeleteInput,
    outputSchema: ProjectEnvironmentTypesDeleteOutput,
  }));
// Input Schema
export interface ProjectEnvironmentTypesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  projectName: string;
  environmentTypeName: string;
}
export const ProjectEnvironmentTypesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    environmentTypeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/environmentTypes/{environmentTypeName}",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<ProjectEnvironmentTypesGetInput>;

// Output Schema
export interface ProjectEnvironmentTypesGetOutput {
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
export const ProjectEnvironmentTypesGetOutput =
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
  }) as unknown as Schema.Codec<ProjectEnvironmentTypesGetOutput>;

// The operation
/**
 * Gets a project environment type.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - The name of the project.
 * @param environmentTypeName - The name of the environment type.
 */
export const ProjectEnvironmentTypesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ProjectEnvironmentTypesGetInput,
  outputSchema: ProjectEnvironmentTypesGetOutput,
}));
// Input Schema
export interface ProjectEnvironmentTypesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  projectName: string;
  $top?: number;
}
export const ProjectEnvironmentTypesListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/environmentTypes",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<ProjectEnvironmentTypesListInput>;

// Output Schema
export interface ProjectEnvironmentTypesListOutput {
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
export const ProjectEnvironmentTypesListOutput =
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ProjectEnvironmentTypesListOutput>;

// The operation
/**
 * Lists environment types for a project.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - The name of the project.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 */
export const ProjectEnvironmentTypesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: ProjectEnvironmentTypesListInput,
  outputSchema: ProjectEnvironmentTypesListOutput,
}));
// Input Schema
export interface ProjectEnvironmentTypesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  projectName: string;
  environmentTypeName: string;
  properties?: {
    deploymentTargetId?: string;
    displayName?: string;
    status?: "Enabled" | "Disabled";
    creatorRoleAssignment?: {
      roles?: Record<string, { roleName?: string; description?: string }>;
    };
    userRoleAssignments?: Record<
      string,
      { roles?: Record<string, { roleName?: string; description?: string }> }
    >;
  };
  tags?: Record<string, string>;
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
}
export const ProjectEnvironmentTypesUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    environmentTypeName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        deploymentTargetId: Schema.optional(Schema.String),
        displayName: Schema.optional(Schema.String),
        status: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
        creatorRoleAssignment: Schema.optional(
          Schema.Struct({
            roles: Schema.optional(
              Schema.Record(
                Schema.String,
                Schema.Struct({
                  roleName: Schema.optional(Schema.String),
                  description: Schema.optional(Schema.String),
                }),
              ),
            ),
          }),
        ),
        userRoleAssignments: Schema.optional(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              roles: Schema.optional(
                Schema.Record(
                  Schema.String,
                  Schema.Struct({
                    roleName: Schema.optional(Schema.String),
                    description: Schema.optional(Schema.String),
                  }),
                ),
              ),
            }),
          ),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
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
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/environmentTypes/{environmentTypeName}",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<ProjectEnvironmentTypesUpdateInput>;

// Output Schema
export interface ProjectEnvironmentTypesUpdateOutput {
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
export const ProjectEnvironmentTypesUpdateOutput =
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
  }) as unknown as Schema.Codec<ProjectEnvironmentTypesUpdateOutput>;

// The operation
/**
 * Partially updates a project environment type.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - The name of the project.
 * @param environmentTypeName - The name of the environment type.
 */
export const ProjectEnvironmentTypesUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ProjectEnvironmentTypesUpdateInput,
    outputSchema: ProjectEnvironmentTypesUpdateOutput,
  }));
// Input Schema
export interface ProjectPoliciesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  devCenterName: string;
  projectPolicyName: string;
  properties?: {
    resourcePolicies?: {
      resources?: string;
      filter?: string;
      action?: "Allow" | "Deny";
      resourceType?: "Images" | "AttachedNetworks" | "Skus";
    }[];
    scopes?: string[];
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
export const ProjectPoliciesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    devCenterName: Schema.String.pipe(T.PathParam()),
    projectPolicyName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        resourcePolicies: Schema.optional(
          Schema.Array(
            Schema.Struct({
              resources: Schema.optional(Schema.String),
              filter: Schema.optional(Schema.String),
              action: Schema.optional(Schema.Literals(["Allow", "Deny"])),
              resourceType: Schema.optional(
                Schema.Literals(["Images", "AttachedNetworks", "Skus"]),
              ),
            }),
          ),
        ),
        scopes: Schema.optional(Schema.Array(Schema.String)),
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
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/projectPolicies/{projectPolicyName}",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<ProjectPoliciesCreateOrUpdateInput>;

// Output Schema
export interface ProjectPoliciesCreateOrUpdateOutput {
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
export const ProjectPoliciesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ProjectPoliciesCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates an project policy.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param devCenterName - The name of the devcenter.
 * @param projectPolicyName - The name of the project policy.
 */
export const ProjectPoliciesCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ProjectPoliciesCreateOrUpdateInput,
    outputSchema: ProjectPoliciesCreateOrUpdateOutput,
  }));
// Input Schema
export interface ProjectPoliciesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  devCenterName: string;
  projectPolicyName: string;
}
export const ProjectPoliciesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    devCenterName: Schema.String.pipe(T.PathParam()),
    projectPolicyName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/projectPolicies/{projectPolicyName}",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<ProjectPoliciesDeleteInput>;

// Output Schema
export type ProjectPoliciesDeleteOutput = void;
export const ProjectPoliciesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ProjectPoliciesDeleteOutput>;

// The operation
/**
 * Deletes an project policy.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param devCenterName - The name of the devcenter.
 * @param projectPolicyName - The name of the project policy.
 */
export const ProjectPoliciesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: ProjectPoliciesDeleteInput,
  outputSchema: ProjectPoliciesDeleteOutput,
}));
// Input Schema
export interface ProjectPoliciesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  devCenterName: string;
  projectPolicyName: string;
}
export const ProjectPoliciesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    devCenterName: Schema.String.pipe(T.PathParam()),
    projectPolicyName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/projectPolicies/{projectPolicyName}",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<ProjectPoliciesGetInput>;

// Output Schema
export interface ProjectPoliciesGetOutput {
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
export const ProjectPoliciesGetOutput =
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
  }) as unknown as Schema.Codec<ProjectPoliciesGetOutput>;

// The operation
/**
 * Gets a specific project policy.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param devCenterName - The name of the devcenter.
 * @param projectPolicyName - The name of the project policy.
 */
export const ProjectPoliciesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ProjectPoliciesGetInput,
  outputSchema: ProjectPoliciesGetOutput,
}));
// Input Schema
export interface ProjectPoliciesListByDevCenterInput {
  subscriptionId: string;
  resourceGroupName: string;
  devCenterName: string;
  $top?: number;
}
export const ProjectPoliciesListByDevCenterInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    devCenterName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/projectPolicies",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<ProjectPoliciesListByDevCenterInput>;

// Output Schema
export interface ProjectPoliciesListByDevCenterOutput {
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
export const ProjectPoliciesListByDevCenterOutput =
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ProjectPoliciesListByDevCenterOutput>;

// The operation
/**
 * Lists all project policies in the dev center
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param devCenterName - The name of the devcenter.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 */
export const ProjectPoliciesListByDevCenter =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ProjectPoliciesListByDevCenterInput,
    outputSchema: ProjectPoliciesListByDevCenterOutput,
  }));
// Input Schema
export interface ProjectPoliciesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  devCenterName: string;
  projectPolicyName: string;
  properties?: {
    resourcePolicies?: {
      resources?: string;
      filter?: string;
      action?: "Allow" | "Deny";
      resourceType?: "Images" | "AttachedNetworks" | "Skus";
    }[];
    scopes?: string[];
  };
}
export const ProjectPoliciesUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    devCenterName: Schema.String.pipe(T.PathParam()),
    projectPolicyName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        resourcePolicies: Schema.optional(
          Schema.Array(
            Schema.Struct({
              resources: Schema.optional(Schema.String),
              filter: Schema.optional(Schema.String),
              action: Schema.optional(Schema.Literals(["Allow", "Deny"])),
              resourceType: Schema.optional(
                Schema.Literals(["Images", "AttachedNetworks", "Skus"]),
              ),
            }),
          ),
        ),
        scopes: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/projectPolicies/{projectPolicyName}",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<ProjectPoliciesUpdateInput>;

// Output Schema
export interface ProjectPoliciesUpdateOutput {
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
export const ProjectPoliciesUpdateOutput =
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
  }) as unknown as Schema.Codec<ProjectPoliciesUpdateOutput>;

// The operation
/**
 * Partially updates an project policy.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param devCenterName - The name of the devcenter.
 * @param projectPolicyName - The name of the project policy.
 */
export const ProjectPoliciesUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ProjectPoliciesUpdateInput,
  outputSchema: ProjectPoliciesUpdateOutput,
}));
// Input Schema
export interface ProjectsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  projectName: string;
  properties?: {
    devCenterId?: string;
    description?: string;
    maxDevBoxesPerUser?: number;
    displayName?: string;
    catalogSettings?: {
      catalogItemSyncTypes?: ("EnvironmentDefinition" | "ImageDefinition")[];
    };
  };
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
  tags?: Record<string, string>;
  location: string;
}
export const ProjectsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        devCenterId: Schema.optional(Schema.String),
        description: Schema.optional(Schema.String),
        maxDevBoxesPerUser: Schema.optional(Schema.Number),
        displayName: Schema.optional(Schema.String),
        catalogSettings: Schema.optional(
          Schema.Struct({
            catalogItemSyncTypes: Schema.optional(
              Schema.Array(
                Schema.Literals(["EnvironmentDefinition", "ImageDefinition"]),
              ),
            ),
          }),
        ),
      }),
    ),
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
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<ProjectsCreateOrUpdateInput>;

// Output Schema
export interface ProjectsCreateOrUpdateOutput {
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
export const ProjectsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ProjectsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a project.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - The name of the project.
 */
export const ProjectsCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ProjectsCreateOrUpdateInput,
  outputSchema: ProjectsCreateOrUpdateOutput,
}));
// Input Schema
export interface ProjectsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  projectName: string;
}
export const ProjectsDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  projectName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}",
    apiVersion: "2025-02-01",
  }),
) as unknown as Schema.Codec<ProjectsDeleteInput>;

// Output Schema
export type ProjectsDeleteOutput = void;
export const ProjectsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ProjectsDeleteOutput>;

// The operation
/**
 * Deletes a project resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - The name of the project.
 */
export const ProjectsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: ProjectsDeleteInput,
  outputSchema: ProjectsDeleteOutput,
}));
// Input Schema
export interface ProjectsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  projectName: string;
}
export const ProjectsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  projectName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}",
    apiVersion: "2025-02-01",
  }),
) as unknown as Schema.Codec<ProjectsGetInput>;

// Output Schema
export interface ProjectsGetOutput {
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
export const ProjectsGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ProjectsGetOutput>;

// The operation
/**
 * Gets a specific project.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - The name of the project.
 */
export const ProjectsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ProjectsGetInput,
  outputSchema: ProjectsGetOutput,
}));
// Input Schema
export interface ProjectsGetInheritedSettingsInput {
  subscriptionId: string;
  resourceGroupName: string;
  projectName: string;
}
export const ProjectsGetInheritedSettingsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/getInheritedSettings",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<ProjectsGetInheritedSettingsInput>;

// Output Schema
export interface ProjectsGetInheritedSettingsOutput {
  projectCatalogSettings?: {
    catalogItemSyncEnableStatus?: "Enabled" | "Disabled";
  };
  networkSettings?: {
    microsoftHostedNetworkEnableStatus?: "Enabled" | "Disabled";
  };
}
export const ProjectsGetInheritedSettingsOutput =
  /*@__PURE__*/ Schema.Struct({
    projectCatalogSettings: Schema.optional(
      Schema.Struct({
        catalogItemSyncEnableStatus: Schema.optional(
          Schema.Literals(["Enabled", "Disabled"]),
        ),
      }),
    ),
    networkSettings: Schema.optional(
      Schema.Struct({
        microsoftHostedNetworkEnableStatus: Schema.optional(
          Schema.Literals(["Enabled", "Disabled"]),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<ProjectsGetInheritedSettingsOutput>;

// The operation
/**
 * Gets applicable inherited settings for this project.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - The name of the project.
 */
export const ProjectsGetInheritedSettings =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ProjectsGetInheritedSettingsInput,
    outputSchema: ProjectsGetInheritedSettingsOutput,
  }));
// Input Schema
export interface ProjectsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  $top?: number;
}
export const ProjectsListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<ProjectsListByResourceGroupInput>;

// Output Schema
export interface ProjectsListByResourceGroupOutput {
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
export const ProjectsListByResourceGroupOutput =
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ProjectsListByResourceGroupOutput>;

// The operation
/**
 * Lists all projects in the resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 */
export const ProjectsListByResourceGroup = /*@__PURE__*/ API.make(() => ({
  inputSchema: ProjectsListByResourceGroupInput,
  outputSchema: ProjectsListByResourceGroupOutput,
}));
// Input Schema
export interface ProjectsListBySubscriptionInput {
  subscriptionId: string;
  $top?: number;
}
export const ProjectsListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DevCenter/projects",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<ProjectsListBySubscriptionInput>;

// Output Schema
export interface ProjectsListBySubscriptionOutput {
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
export const ProjectsListBySubscriptionOutput =
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ProjectsListBySubscriptionOutput>;

// The operation
/**
 * Lists all projects in the subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 */
export const ProjectsListBySubscription = /*@__PURE__*/ API.make(() => ({
  inputSchema: ProjectsListBySubscriptionInput,
  outputSchema: ProjectsListBySubscriptionOutput,
}));
// Input Schema
export interface ProjectsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  projectName: string;
  properties?: {
    devCenterId?: string;
    description?: string;
    maxDevBoxesPerUser?: number;
    displayName?: string;
    catalogSettings?: {
      catalogItemSyncTypes?: ("EnvironmentDefinition" | "ImageDefinition")[];
    };
  };
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
  tags?: Record<string, string>;
  location?: string;
}
export const ProjectsUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  projectName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      devCenterId: Schema.optional(Schema.String),
      description: Schema.optional(Schema.String),
      maxDevBoxesPerUser: Schema.optional(Schema.Number),
      displayName: Schema.optional(Schema.String),
      catalogSettings: Schema.optional(
        Schema.Struct({
          catalogItemSyncTypes: Schema.optional(
            Schema.Array(
              Schema.Literals(["EnvironmentDefinition", "ImageDefinition"]),
            ),
          ),
        }),
      ),
    }),
  ),
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
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}",
    apiVersion: "2025-02-01",
  }),
) as unknown as Schema.Codec<ProjectsUpdateInput>;

// Output Schema
export interface ProjectsUpdateOutput {
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
export const ProjectsUpdateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ProjectsUpdateOutput>;

// The operation
/**
 * Partially updates a project.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - The name of the project.
 */
export const ProjectsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ProjectsUpdateInput,
  outputSchema: ProjectsUpdateOutput,
}));
// Input Schema
export interface SchedulesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  projectName: string;
  poolName: string;
  scheduleName: string;
  $top?: number;
  properties?: { tags?: Record<string, string>; location?: string };
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
export const SchedulesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    poolName: Schema.String.pipe(T.PathParam()),
    scheduleName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
    properties: Schema.optional(
      Schema.Struct({
        tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        location: Schema.optional(Schema.String),
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
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/pools/{poolName}/schedules/{scheduleName}",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<SchedulesCreateOrUpdateInput>;

// Output Schema
export interface SchedulesCreateOrUpdateOutput {
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
export const SchedulesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<SchedulesCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a Schedule.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - The name of the project.
 * @param poolName - Name of the pool.
 * @param scheduleName - The name of the schedule that uniquely identifies it.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 */
export const SchedulesCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: SchedulesCreateOrUpdateInput,
  outputSchema: SchedulesCreateOrUpdateOutput,
}));
// Input Schema
export interface SchedulesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  projectName: string;
  poolName: string;
  scheduleName: string;
  $top?: number;
}
export const SchedulesDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  projectName: Schema.String.pipe(T.PathParam()),
  poolName: Schema.String.pipe(T.PathParam()),
  scheduleName: Schema.String.pipe(T.PathParam()),
  $top: Schema.optional(Schema.Number),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/pools/{poolName}/schedules/{scheduleName}",
    apiVersion: "2025-02-01",
  }),
) as unknown as Schema.Codec<SchedulesDeleteInput>;

// Output Schema
export type SchedulesDeleteOutput = void;
export const SchedulesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<SchedulesDeleteOutput>;

// The operation
/**
 * Deletes a Scheduled.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - The name of the project.
 * @param poolName - Name of the pool.
 * @param scheduleName - The name of the schedule that uniquely identifies it.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 */
export const SchedulesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: SchedulesDeleteInput,
  outputSchema: SchedulesDeleteOutput,
}));
// Input Schema
export interface SchedulesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  projectName: string;
  poolName: string;
  scheduleName: string;
  $top?: number;
}
export const SchedulesGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  projectName: Schema.String.pipe(T.PathParam()),
  poolName: Schema.String.pipe(T.PathParam()),
  scheduleName: Schema.String.pipe(T.PathParam()),
  $top: Schema.optional(Schema.Number),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/pools/{poolName}/schedules/{scheduleName}",
    apiVersion: "2025-02-01",
  }),
) as unknown as Schema.Codec<SchedulesGetInput>;

// Output Schema
export interface SchedulesGetOutput {
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
export const SchedulesGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<SchedulesGetOutput>;

// The operation
/**
 * Gets a schedule resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - The name of the project.
 * @param poolName - Name of the pool.
 * @param scheduleName - The name of the schedule that uniquely identifies it.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 */
export const SchedulesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: SchedulesGetInput,
  outputSchema: SchedulesGetOutput,
}));
// Input Schema
export interface SchedulesListByPoolInput {
  subscriptionId: string;
  resourceGroupName: string;
  projectName: string;
  poolName: string;
  $top?: number;
}
export const SchedulesListByPoolInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    poolName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/pools/{poolName}/schedules",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<SchedulesListByPoolInput>;

// Output Schema
export interface SchedulesListByPoolOutput {
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
export const SchedulesListByPoolOutput =
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SchedulesListByPoolOutput>;

// The operation
/**
 * Lists schedules for a pool
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - The name of the project.
 * @param poolName - Name of the pool.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 */
export const SchedulesListByPool = /*@__PURE__*/ API.make(() => ({
  inputSchema: SchedulesListByPoolInput,
  outputSchema: SchedulesListByPoolOutput,
}));
// Input Schema
export interface SchedulesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  projectName: string;
  poolName: string;
  scheduleName: string;
  $top?: number;
  properties?: { tags?: Record<string, string>; location?: string };
}
export const SchedulesUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  projectName: Schema.String.pipe(T.PathParam()),
  poolName: Schema.String.pipe(T.PathParam()),
  scheduleName: Schema.String.pipe(T.PathParam()),
  $top: Schema.optional(Schema.Number),
  properties: Schema.optional(
    Schema.Struct({
      tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      location: Schema.optional(Schema.String),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/pools/{poolName}/schedules/{scheduleName}",
    apiVersion: "2025-02-01",
  }),
) as unknown as Schema.Codec<SchedulesUpdateInput>;

// Output Schema
export interface SchedulesUpdateOutput {
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
export const SchedulesUpdateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<SchedulesUpdateOutput>;

// The operation
/**
 * Partially updates a Scheduled.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - The name of the project.
 * @param poolName - Name of the pool.
 * @param scheduleName - The name of the schedule that uniquely identifies it.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 */
export const SchedulesUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: SchedulesUpdateInput,
  outputSchema: SchedulesUpdateOutput,
}));
// Input Schema
export interface SkusListByProjectInput {
  subscriptionId: string;
  resourceGroupName: string;
  projectName: string;
}
export const SkusListByProjectInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  projectName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/listSkus",
    apiVersion: "2025-02-01",
  }),
) as unknown as Schema.Codec<SkusListByProjectInput>;

// Output Schema
export interface SkusListByProjectOutput {
  value?: {
    name: string;
    tier?: "Free" | "Basic" | "Standard" | "Premium";
    size?: string;
    family?: string;
    capacity?: number;
  }[];
  nextLink?: string;
}
export const SkusListByProjectOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.String,
          tier: Schema.optional(
            Schema.Literals(["Free", "Basic", "Standard", "Premium"]),
          ),
          size: Schema.optional(Schema.String),
          family: Schema.optional(Schema.String),
          capacity: Schema.optional(Schema.Number),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SkusListByProjectOutput>;

// The operation
/**
 * Lists SKUs available to the project
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - The name of the project.
 */
export const SkusListByProject = /*@__PURE__*/ API.make(() => ({
  inputSchema: SkusListByProjectInput,
  outputSchema: SkusListByProjectOutput,
}));
// Input Schema
export interface SkusListBySubscriptionInput {
  subscriptionId: string;
  $top?: number;
}
export const SkusListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DevCenter/skus",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<SkusListBySubscriptionInput>;

// Output Schema
export interface SkusListBySubscriptionOutput {
  value?: {
    name: string;
    tier?: "Free" | "Basic" | "Standard" | "Premium";
    size?: string;
    family?: string;
    capacity?: number;
  }[];
  nextLink?: string;
}
export const SkusListBySubscriptionOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.String,
          tier: Schema.optional(
            Schema.Literals(["Free", "Basic", "Standard", "Premium"]),
          ),
          size: Schema.optional(Schema.String),
          family: Schema.optional(Schema.String),
          capacity: Schema.optional(Schema.Number),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SkusListBySubscriptionOutput>;

// The operation
/**
 * Lists the Microsoft.DevCenter SKUs available in a subscription
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param $top - The maximum number of resources to return from the operation. Example: '$top=10'.
 */
export const SkusListBySubscription = /*@__PURE__*/ API.make(() => ({
  inputSchema: SkusListBySubscriptionInput,
  outputSchema: SkusListBySubscriptionOutput,
}));
// Input Schema
export interface UsagesListByLocationInput {
  subscriptionId: string;
  location: string;
}
export const UsagesListByLocationInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DevCenter/locations/{location}/usages",
      apiVersion: "2025-02-01",
    }),
  ) as unknown as Schema.Codec<UsagesListByLocationInput>;

// Output Schema
export interface UsagesListByLocationOutput {
  value?: {
    currentValue?: number;
    limit?: number;
    unit?: "Count";
    name?: { localizedValue?: string; value?: string };
    id?: string;
  }[];
  nextLink?: string;
}
export const UsagesListByLocationOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          currentValue: Schema.optional(Schema.Number),
          limit: Schema.optional(Schema.Number),
          unit: Schema.optional(Schema.Literals(["Count"])),
          name: Schema.optional(
            Schema.Struct({
              localizedValue: Schema.optional(Schema.String),
              value: Schema.optional(Schema.String),
            }),
          ),
          id: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<UsagesListByLocationOutput>;

// The operation
/**
 * Lists the current usages and limits in this location for the provided subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The Azure region
 */
export const UsagesListByLocation = /*@__PURE__*/ API.make(() => ({
  inputSchema: UsagesListByLocationInput,
  outputSchema: UsagesListByLocationOutput,
}));
