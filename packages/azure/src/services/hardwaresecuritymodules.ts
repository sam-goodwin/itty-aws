/**
 * Azure Hardwaresecuritymodules API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const CloudHsmClusterBackupStatusGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    cloudHsmClusterName: Schema.String.pipe(T.PathParam()),
    jobId: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HardwareSecurityModules/cloudHsmClusters/{cloudHsmClusterName}/backupOperationStatus/{jobId}",
    }),
  );
export type CloudHsmClusterBackupStatusGetInput =
  typeof CloudHsmClusterBackupStatusGetInput.Type;

// Output Schema
export const CloudHsmClusterBackupStatusGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        status: Schema.optional(
          Schema.Literals(["InProgress", "Succeeded", "Failed", "Cancelled"]),
        ),
        statusDetails: Schema.optional(Schema.String),
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
        startTime: Schema.optional(Schema.String),
        endTime: Schema.optional(Schema.NullOr(Schema.String)),
        jobId: Schema.optional(Schema.String),
      }),
    ),
  });
export type CloudHsmClusterBackupStatusGetOutput =
  typeof CloudHsmClusterBackupStatusGetOutput.Type;

// The operation
/**
 * Gets the backup operation status of the specified Cloud HSM Cluster
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cloudHsmClusterName - The name of the Cloud HSM Cluster within the specified resource group. Cloud HSM Cluster names must be between 3 and 23 characters in length.
 * @param jobId - Identifier for the backup operation
 */
export const CloudHsmClusterBackupStatusGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CloudHsmClusterBackupStatusGetInput,
    outputSchema: CloudHsmClusterBackupStatusGetOutput,
  }));
// Input Schema
export const CloudHsmClusterPrivateEndpointConnectionsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    cloudHsmClusterName: Schema.String.pipe(T.PathParam()),
    peConnectionName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HardwareSecurityModules/cloudHsmClusters/{cloudHsmClusterName}/privateEndpointConnections/{peConnectionName}",
    }),
  );
export type CloudHsmClusterPrivateEndpointConnectionsCreateInput =
  typeof CloudHsmClusterPrivateEndpointConnectionsCreateInput.Type;

// Output Schema
export const CloudHsmClusterPrivateEndpointConnectionsCreateOutput =
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
export type CloudHsmClusterPrivateEndpointConnectionsCreateOutput =
  typeof CloudHsmClusterPrivateEndpointConnectionsCreateOutput.Type;

// The operation
/**
 * Creates or updates the private endpoint connection for the Cloud Hsm Cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cloudHsmClusterName - The name of the Cloud HSM Cluster within the specified resource group. Cloud HSM Cluster names must be between 3 and 23 characters in length.
 * @param peConnectionName - Name of the private endpoint connection associated with the Cloud HSM Cluster.
 */
export const CloudHsmClusterPrivateEndpointConnectionsCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CloudHsmClusterPrivateEndpointConnectionsCreateInput,
    outputSchema: CloudHsmClusterPrivateEndpointConnectionsCreateOutput,
  }));
// Input Schema
export const CloudHsmClusterPrivateEndpointConnectionsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    cloudHsmClusterName: Schema.String.pipe(T.PathParam()),
    peConnectionName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HardwareSecurityModules/cloudHsmClusters/{cloudHsmClusterName}/privateEndpointConnections/{peConnectionName}",
    }),
  );
export type CloudHsmClusterPrivateEndpointConnectionsDeleteInput =
  typeof CloudHsmClusterPrivateEndpointConnectionsDeleteInput.Type;

// Output Schema
export const CloudHsmClusterPrivateEndpointConnectionsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type CloudHsmClusterPrivateEndpointConnectionsDeleteOutput =
  typeof CloudHsmClusterPrivateEndpointConnectionsDeleteOutput.Type;

// The operation
/**
 * Deletes the private endpoint connection for the Cloud Hsm Cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cloudHsmClusterName - The name of the Cloud HSM Cluster within the specified resource group. Cloud HSM Cluster names must be between 3 and 23 characters in length.
 * @param peConnectionName - Name of the private endpoint connection associated with the Cloud HSM Cluster.
 */
export const CloudHsmClusterPrivateEndpointConnectionsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CloudHsmClusterPrivateEndpointConnectionsDeleteInput,
    outputSchema: CloudHsmClusterPrivateEndpointConnectionsDeleteOutput,
  }));
// Input Schema
export const CloudHsmClusterPrivateEndpointConnectionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    cloudHsmClusterName: Schema.String.pipe(T.PathParam()),
    peConnectionName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HardwareSecurityModules/cloudHsmClusters/{cloudHsmClusterName}/privateEndpointConnections/{peConnectionName}",
    }),
  );
export type CloudHsmClusterPrivateEndpointConnectionsGetInput =
  typeof CloudHsmClusterPrivateEndpointConnectionsGetInput.Type;

// Output Schema
export const CloudHsmClusterPrivateEndpointConnectionsGetOutput =
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
export type CloudHsmClusterPrivateEndpointConnectionsGetOutput =
  typeof CloudHsmClusterPrivateEndpointConnectionsGetOutput.Type;

// The operation
/**
 * Gets the private endpoint connection for the Cloud Hsm Cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cloudHsmClusterName - The name of the Cloud HSM Cluster within the specified resource group. Cloud HSM Cluster names must be between 3 and 23 characters in length.
 * @param peConnectionName - Name of the private endpoint connection associated with the Cloud HSM Cluster.
 */
export const CloudHsmClusterPrivateEndpointConnectionsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CloudHsmClusterPrivateEndpointConnectionsGetInput,
    outputSchema: CloudHsmClusterPrivateEndpointConnectionsGetOutput,
  }));
// Input Schema
export const CloudHsmClusterPrivateLinkResourcesListByCloudHsmClusterInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    cloudHsmClusterName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HardwareSecurityModules/cloudHsmClusters/{cloudHsmClusterName}/privateLinkResources",
    }),
  );
export type CloudHsmClusterPrivateLinkResourcesListByCloudHsmClusterInput =
  typeof CloudHsmClusterPrivateLinkResourcesListByCloudHsmClusterInput.Type;

// Output Schema
export const CloudHsmClusterPrivateLinkResourcesListByCloudHsmClusterOutput =
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
  });
export type CloudHsmClusterPrivateLinkResourcesListByCloudHsmClusterOutput =
  typeof CloudHsmClusterPrivateLinkResourcesListByCloudHsmClusterOutput.Type;

// The operation
/**
 * Gets the private link resources supported for the Cloud Hsm Cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cloudHsmClusterName - The name of the Cloud HSM Cluster within the specified resource group. Cloud HSM Cluster names must be between 3 and 23 characters in length.
 */
export const CloudHsmClusterPrivateLinkResourcesListByCloudHsmCluster =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CloudHsmClusterPrivateLinkResourcesListByCloudHsmClusterInput,
    outputSchema:
      CloudHsmClusterPrivateLinkResourcesListByCloudHsmClusterOutput,
  }));
// Input Schema
export const CloudHsmClusterRestoreStatusGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    cloudHsmClusterName: Schema.String.pipe(T.PathParam()),
    jobId: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HardwareSecurityModules/cloudHsmClusters/{cloudHsmClusterName}/restoreOperationStatus/{jobId}",
    }),
  );
export type CloudHsmClusterRestoreStatusGetInput =
  typeof CloudHsmClusterRestoreStatusGetInput.Type;

// Output Schema
export const CloudHsmClusterRestoreStatusGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        status: Schema.optional(
          Schema.Literals(["InProgress", "Succeeded", "Failed", "Cancelled"]),
        ),
        statusDetails: Schema.optional(Schema.String),
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
        startTime: Schema.optional(Schema.String),
        endTime: Schema.optional(Schema.NullOr(Schema.String)),
        jobId: Schema.optional(Schema.String),
      }),
    ),
  });
export type CloudHsmClusterRestoreStatusGetOutput =
  typeof CloudHsmClusterRestoreStatusGetOutput.Type;

// The operation
/**
 * Gets the restore operation status of the specified Cloud HSM Cluster
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cloudHsmClusterName - The name of the Cloud HSM Cluster within the specified resource group. Cloud HSM Cluster names must be between 3 and 23 characters in length.
 * @param jobId - Identifier for the restore operation
 */
export const CloudHsmClusterRestoreStatusGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CloudHsmClusterRestoreStatusGetInput,
    outputSchema: CloudHsmClusterRestoreStatusGetOutput,
  }));
// Input Schema
export const CloudHsmClustersBackupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    cloudHsmClusterName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HardwareSecurityModules/cloudHsmClusters/{cloudHsmClusterName}/backup",
    }),
  );
export type CloudHsmClustersBackupInput =
  typeof CloudHsmClustersBackupInput.Type;

// Output Schema
export const CloudHsmClustersBackupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        status: Schema.optional(
          Schema.Literals(["InProgress", "Succeeded", "Failed", "Cancelled"]),
        ),
        statusDetails: Schema.optional(Schema.String),
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
        startTime: Schema.optional(Schema.String),
        endTime: Schema.optional(Schema.NullOr(Schema.String)),
        jobId: Schema.optional(Schema.String),
      }),
    ),
  });
export type CloudHsmClustersBackupOutput =
  typeof CloudHsmClustersBackupOutput.Type;

// The operation
/**
 * Create a backup of the Cloud HSM Cluster in the specified subscription
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cloudHsmClusterName - The name of the Cloud HSM Cluster within the specified resource group. Cloud HSM Cluster names must be between 3 and 23 characters in length.
 */
export const CloudHsmClustersBackup = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CloudHsmClustersBackupInput,
    outputSchema: CloudHsmClustersBackupOutput,
  }),
);
// Input Schema
export const CloudHsmClustersCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    cloudHsmClusterName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HardwareSecurityModules/cloudHsmClusters/{cloudHsmClusterName}",
    }),
  );
export type CloudHsmClustersCreateOrUpdateInput =
  typeof CloudHsmClustersCreateOrUpdateInput.Type;

// Output Schema
export const CloudHsmClustersCreateOrUpdateOutput =
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
export type CloudHsmClustersCreateOrUpdateOutput =
  typeof CloudHsmClustersCreateOrUpdateOutput.Type;

// The operation
/**
 * Create or Update a Cloud HSM Cluster in the specified subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cloudHsmClusterName - The name of the Cloud HSM Cluster within the specified resource group. Cloud HSM Cluster names must be between 3 and 23 characters in length.
 */
export const CloudHsmClustersCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CloudHsmClustersCreateOrUpdateInput,
    outputSchema: CloudHsmClustersCreateOrUpdateOutput,
  }));
// Input Schema
export const CloudHsmClustersDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    cloudHsmClusterName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HardwareSecurityModules/cloudHsmClusters/{cloudHsmClusterName}",
    }),
  );
export type CloudHsmClustersDeleteInput =
  typeof CloudHsmClustersDeleteInput.Type;

// Output Schema
export const CloudHsmClustersDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type CloudHsmClustersDeleteOutput =
  typeof CloudHsmClustersDeleteOutput.Type;

// The operation
/**
 * Deletes the specified Cloud HSM Cluster
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cloudHsmClusterName - The name of the Cloud HSM Cluster within the specified resource group. Cloud HSM Cluster names must be between 3 and 23 characters in length.
 */
export const CloudHsmClustersDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CloudHsmClustersDeleteInput,
    outputSchema: CloudHsmClustersDeleteOutput,
  }),
);
// Input Schema
export const CloudHsmClustersGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    cloudHsmClusterName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HardwareSecurityModules/cloudHsmClusters/{cloudHsmClusterName}",
    }),
  );
export type CloudHsmClustersGetInput = typeof CloudHsmClustersGetInput.Type;

// Output Schema
export const CloudHsmClustersGetOutput =
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
export type CloudHsmClustersGetOutput = typeof CloudHsmClustersGetOutput.Type;

// The operation
/**
 * Gets the specified Cloud HSM Cluster
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cloudHsmClusterName - The name of the Cloud HSM Cluster within the specified resource group. Cloud HSM Cluster names must be between 3 and 23 characters in length.
 */
export const CloudHsmClustersGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CloudHsmClustersGetInput,
  outputSchema: CloudHsmClustersGetOutput,
}));
// Input Schema
export const CloudHsmClustersListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
    $skiptoken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HardwareSecurityModules/cloudHsmClusters",
    }),
  );
export type CloudHsmClustersListByResourceGroupInput =
  typeof CloudHsmClustersListByResourceGroupInput.Type;

// Output Schema
export const CloudHsmClustersListByResourceGroupOutput =
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
export type CloudHsmClustersListByResourceGroupOutput =
  typeof CloudHsmClustersListByResourceGroupOutput.Type;

// The operation
/**
 * The List operation gets information about the Cloud HSM Clusters associated with the subscription and within the specified resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $skiptoken - The page-continuation token to use with a paged version of this API
 */
export const CloudHsmClustersListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CloudHsmClustersListByResourceGroupInput,
    outputSchema: CloudHsmClustersListByResourceGroupOutput,
  }));
// Input Schema
export const CloudHsmClustersListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
    $skiptoken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.HardwareSecurityModules/cloudHsmClusters",
    }),
  );
export type CloudHsmClustersListBySubscriptionInput =
  typeof CloudHsmClustersListBySubscriptionInput.Type;

// Output Schema
export const CloudHsmClustersListBySubscriptionOutput =
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
export type CloudHsmClustersListBySubscriptionOutput =
  typeof CloudHsmClustersListBySubscriptionOutput.Type;

// The operation
/**
 * The List operation gets information about the Cloud HSM Clusters associated with the subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param $skiptoken - The page-continuation token to use with a paged version of this API
 */
export const CloudHsmClustersListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CloudHsmClustersListBySubscriptionInput,
    outputSchema: CloudHsmClustersListBySubscriptionOutput,
  }));
// Input Schema
export const CloudHsmClustersRestoreInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    cloudHsmClusterName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HardwareSecurityModules/cloudHsmClusters/{cloudHsmClusterName}/restore",
    }),
  );
export type CloudHsmClustersRestoreInput =
  typeof CloudHsmClustersRestoreInput.Type;

// Output Schema
export const CloudHsmClustersRestoreOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        status: Schema.optional(
          Schema.Literals(["InProgress", "Succeeded", "Failed", "Cancelled"]),
        ),
        statusDetails: Schema.optional(Schema.String),
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
        startTime: Schema.optional(Schema.String),
        endTime: Schema.optional(Schema.NullOr(Schema.String)),
        jobId: Schema.optional(Schema.String),
      }),
    ),
  });
export type CloudHsmClustersRestoreOutput =
  typeof CloudHsmClustersRestoreOutput.Type;

// The operation
/**
 * Restores all key materials of a specified Cloud HSM Cluster
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cloudHsmClusterName - The name of the Cloud HSM Cluster within the specified resource group. Cloud HSM Cluster names must be between 3 and 23 characters in length.
 */
export const CloudHsmClustersRestore = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CloudHsmClustersRestoreInput,
    outputSchema: CloudHsmClustersRestoreOutput,
  }),
);
// Input Schema
export const CloudHsmClustersUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    cloudHsmClusterName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HardwareSecurityModules/cloudHsmClusters/{cloudHsmClusterName}",
    }),
  );
export type CloudHsmClustersUpdateInput =
  typeof CloudHsmClustersUpdateInput.Type;

// Output Schema
export const CloudHsmClustersUpdateOutput =
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
export type CloudHsmClustersUpdateOutput =
  typeof CloudHsmClustersUpdateOutput.Type;

// The operation
/**
 * Update a Cloud HSM Cluster in the specified subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cloudHsmClusterName - The name of the Cloud HSM Cluster within the specified resource group. Cloud HSM Cluster names must be between 3 and 23 characters in length.
 */
export const CloudHsmClustersUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CloudHsmClustersUpdateInput,
    outputSchema: CloudHsmClustersUpdateOutput,
  }),
);
// Input Schema
export const CloudHsmClustersValidateBackupPropertiesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    cloudHsmClusterName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HardwareSecurityModules/cloudHsmClusters/{cloudHsmClusterName}/validateBackupProperties",
    }),
  );
export type CloudHsmClustersValidateBackupPropertiesInput =
  typeof CloudHsmClustersValidateBackupPropertiesInput.Type;

// Output Schema
export const CloudHsmClustersValidateBackupPropertiesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        status: Schema.optional(
          Schema.Literals(["InProgress", "Succeeded", "Failed", "Cancelled"]),
        ),
        statusDetails: Schema.optional(Schema.String),
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
        startTime: Schema.optional(Schema.String),
        endTime: Schema.optional(Schema.NullOr(Schema.String)),
        jobId: Schema.optional(Schema.String),
      }),
    ),
  });
export type CloudHsmClustersValidateBackupPropertiesOutput =
  typeof CloudHsmClustersValidateBackupPropertiesOutput.Type;

// The operation
/**
 * Pre Backup operation to validate whether the customer can perform a backup on the Cloud HSM Cluster resource in the specified subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cloudHsmClusterName - The name of the Cloud HSM Cluster within the specified resource group. Cloud HSM Cluster names must be between 3 and 23 characters in length.
 */
export const CloudHsmClustersValidateBackupProperties =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CloudHsmClustersValidateBackupPropertiesInput,
    outputSchema: CloudHsmClustersValidateBackupPropertiesOutput,
  }));
// Input Schema
export const CloudHsmClustersValidateRestorePropertiesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    cloudHsmClusterName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HardwareSecurityModules/cloudHsmClusters/{cloudHsmClusterName}/validateRestoreProperties",
    }),
  );
export type CloudHsmClustersValidateRestorePropertiesInput =
  typeof CloudHsmClustersValidateRestorePropertiesInput.Type;

// Output Schema
export const CloudHsmClustersValidateRestorePropertiesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        status: Schema.optional(
          Schema.Literals(["InProgress", "Succeeded", "Failed", "Cancelled"]),
        ),
        statusDetails: Schema.optional(Schema.String),
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
        startTime: Schema.optional(Schema.String),
        endTime: Schema.optional(Schema.NullOr(Schema.String)),
        jobId: Schema.optional(Schema.String),
      }),
    ),
  });
export type CloudHsmClustersValidateRestorePropertiesOutput =
  typeof CloudHsmClustersValidateRestorePropertiesOutput.Type;

// The operation
/**
 * Queued validating pre restore operation
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cloudHsmClusterName - The name of the Cloud HSM Cluster within the specified resource group. Cloud HSM Cluster names must be between 3 and 23 characters in length.
 */
export const CloudHsmClustersValidateRestoreProperties =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CloudHsmClustersValidateRestorePropertiesInput,
    outputSchema: CloudHsmClustersValidateRestorePropertiesOutput,
  }));
// Input Schema
export const DedicatedHsmCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HardwareSecurityModules/dedicatedHSMs/{name}",
    }),
  );
export type DedicatedHsmCreateOrUpdateInput =
  typeof DedicatedHsmCreateOrUpdateInput.Type;

// Output Schema
export const DedicatedHsmCreateOrUpdateOutput =
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
export type DedicatedHsmCreateOrUpdateOutput =
  typeof DedicatedHsmCreateOrUpdateOutput.Type;

// The operation
/**
 * Create or Update a dedicated HSM in the specified subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - Name of the dedicated Hsm
 */
export const DedicatedHsmCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DedicatedHsmCreateOrUpdateInput,
    outputSchema: DedicatedHsmCreateOrUpdateOutput,
  }),
);
// Input Schema
export const DedicatedHsmDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HardwareSecurityModules/dedicatedHSMs/{name}",
    }),
  );
export type DedicatedHsmDeleteInput = typeof DedicatedHsmDeleteInput.Type;

// Output Schema
export const DedicatedHsmDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DedicatedHsmDeleteOutput = typeof DedicatedHsmDeleteOutput.Type;

// The operation
/**
 * Deletes the specified Azure Dedicated HSM.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - Name of the dedicated Hsm
 */
export const DedicatedHsmDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DedicatedHsmDeleteInput,
  outputSchema: DedicatedHsmDeleteOutput,
}));
// Input Schema
export const DedicatedHsmGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
  "api-version": Schema.String,
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HardwareSecurityModules/dedicatedHSMs/{name}",
  }),
);
export type DedicatedHsmGetInput = typeof DedicatedHsmGetInput.Type;

// Output Schema
export const DedicatedHsmGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type DedicatedHsmGetOutput = typeof DedicatedHsmGetOutput.Type;

// The operation
/**
 * Gets the specified Azure dedicated HSM.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - Name of the dedicated Hsm
 */
export const DedicatedHsmGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DedicatedHsmGetInput,
  outputSchema: DedicatedHsmGetOutput,
}));
// Input Schema
export const DedicatedHsmListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HardwareSecurityModules/dedicatedHSMs",
    }),
  );
export type DedicatedHsmListByResourceGroupInput =
  typeof DedicatedHsmListByResourceGroupInput.Type;

// Output Schema
export const DedicatedHsmListByResourceGroupOutput =
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
export type DedicatedHsmListByResourceGroupOutput =
  typeof DedicatedHsmListByResourceGroupOutput.Type;

// The operation
/**
 * The List operation gets information about the dedicated HSMs associated with the subscription and within the specified resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $top - Maximum number of results to return.
 */
export const DedicatedHsmListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DedicatedHsmListByResourceGroupInput,
    outputSchema: DedicatedHsmListByResourceGroupOutput,
  }));
// Input Schema
export const DedicatedHsmListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.HardwareSecurityModules/dedicatedHSMs",
    }),
  );
export type DedicatedHsmListBySubscriptionInput =
  typeof DedicatedHsmListBySubscriptionInput.Type;

// Output Schema
export const DedicatedHsmListBySubscriptionOutput =
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
export type DedicatedHsmListBySubscriptionOutput =
  typeof DedicatedHsmListBySubscriptionOutput.Type;

// The operation
/**
 * The List operation gets information about the dedicated HSMs associated with the subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param $top - Maximum number of results to return.
 */
export const DedicatedHsmListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DedicatedHsmListBySubscriptionInput,
    outputSchema: DedicatedHsmListBySubscriptionOutput,
  }));
// Input Schema
export const DedicatedHsmListOutboundNetworkDependenciesEndpointsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HardwareSecurityModules/dedicatedHSMs/{name}/outboundNetworkDependenciesEndpoints",
    }),
  );
export type DedicatedHsmListOutboundNetworkDependenciesEndpointsInput =
  typeof DedicatedHsmListOutboundNetworkDependenciesEndpointsInput.Type;

// Output Schema
export const DedicatedHsmListOutboundNetworkDependenciesEndpointsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        category: Schema.optional(Schema.String),
        endpoints: Schema.optional(
          Schema.Array(
            Schema.Struct({
              domainName: Schema.optional(Schema.String),
              endpointDetails: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    ipAddress: Schema.optional(Schema.String),
                    port: Schema.optional(Schema.Number),
                    protocol: Schema.optional(Schema.String),
                    description: Schema.optional(Schema.String),
                  }),
                ),
              ),
            }),
          ),
        ),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type DedicatedHsmListOutboundNetworkDependenciesEndpointsOutput =
  typeof DedicatedHsmListOutboundNetworkDependenciesEndpointsOutput.Type;

// The operation
/**
 * Gets a list of egress endpoints (network endpoints of all outbound dependencies) in the specified dedicated hsm resource. The operation returns properties of each egress endpoint.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - Name of the dedicated Hsm
 */
export const DedicatedHsmListOutboundNetworkDependenciesEndpoints =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DedicatedHsmListOutboundNetworkDependenciesEndpointsInput,
    outputSchema: DedicatedHsmListOutboundNetworkDependenciesEndpointsOutput,
  }));
// Input Schema
export const DedicatedHsmUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HardwareSecurityModules/dedicatedHSMs/{name}",
    }),
  );
export type DedicatedHsmUpdateInput = typeof DedicatedHsmUpdateInput.Type;

// Output Schema
export const DedicatedHsmUpdateOutput =
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
export type DedicatedHsmUpdateOutput = typeof DedicatedHsmUpdateOutput.Type;

// The operation
/**
 * Update a dedicated HSM in the specified subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - Name of the dedicated Hsm
 */
export const DedicatedHsmUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DedicatedHsmUpdateInput,
  outputSchema: DedicatedHsmUpdateOutput,
}));
// Input Schema
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  "api-version": Schema.String,
}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.HardwareSecurityModules/operations",
  }),
);
export type OperationsListInput = typeof OperationsListInput.Type;

// Output Schema
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
        origin: Schema.optional(
          Schema.Literals(["user", "system", "user,system"]),
        ),
        actionType: Schema.optional(Schema.Literals(["Internal"])),
      }),
    ),
  ),
  nextLink: Schema.optional(Schema.String),
});
export type OperationsListOutput = typeof OperationsListOutput.Type;

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
export const PrivateEndpointConnectionsListByCloudHsmClusterInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    cloudHsmClusterName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HardwareSecurityModules/cloudHsmClusters/{cloudHsmClusterName}/privateEndpointConnections",
    }),
  );
export type PrivateEndpointConnectionsListByCloudHsmClusterInput =
  typeof PrivateEndpointConnectionsListByCloudHsmClusterInput.Type;

// Output Schema
export const PrivateEndpointConnectionsListByCloudHsmClusterOutput =
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
export type PrivateEndpointConnectionsListByCloudHsmClusterOutput =
  typeof PrivateEndpointConnectionsListByCloudHsmClusterOutput.Type;

// The operation
/**
 * The List operation gets information about the private endpoint connections associated with the Cloud HSM Cluster
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cloudHsmClusterName - The name of the Cloud HSM Cluster within the specified resource group. Cloud HSM Cluster names must be between 3 and 23 characters in length.
 */
export const PrivateEndpointConnectionsListByCloudHsmCluster =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsListByCloudHsmClusterInput,
    outputSchema: PrivateEndpointConnectionsListByCloudHsmClusterOutput,
  }));
