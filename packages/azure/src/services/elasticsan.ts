/**
 * Azure Elasticsan API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const ElasticSansCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    elasticSanName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      sku: Schema.Struct({
        name: Schema.Literals(["Premium_LRS", "Premium_ZRS"]),
        tier: Schema.optional(Schema.Literals(["Premium"])),
      }),
      availabilityZones: Schema.optional(Schema.Array(Schema.String)),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Invalid",
          "Succeeded",
          "Failed",
          "Canceled",
          "Pending",
          "Creating",
          "Updating",
          "Deleting",
          "Deleted",
          "Restoring",
        ]),
      ),
      baseSizeTiB: Schema.Number,
      extendedCapacitySizeTiB: Schema.Number,
      totalVolumeSizeGiB: Schema.optional(Schema.Number),
      volumeGroupCount: Schema.optional(Schema.Number),
      totalIops: Schema.optional(Schema.Number),
      totalMBps: Schema.optional(Schema.Number),
      totalSizeTiB: Schema.optional(Schema.Number),
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
      publicNetworkAccess: Schema.optional(
        Schema.Literals(["Enabled", "Disabled"]),
      ),
      autoScaleProperties: Schema.optional(
        Schema.Struct({
          scaleUpProperties: Schema.optional(
            Schema.Struct({
              unusedSizeTiB: Schema.optional(Schema.Number),
              increaseCapacityUnitByTiB: Schema.optional(Schema.Number),
              capacityUnitScaleUpLimitTiB: Schema.optional(Schema.Number),
              autoScalePolicyEnforcement: Schema.optional(
                Schema.Literals(["None", "Enabled", "Disabled"]),
              ),
            }),
          ),
        }),
      ),
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  },
).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ElasticSan/elasticSans/{elasticSanName}",
    apiVersion: "2025-09-01",
  }),
);
export type ElasticSansCreateInput = typeof ElasticSansCreateInput.Type;

// Output Schema
export const ElasticSansCreateOutput =
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
export type ElasticSansCreateOutput = typeof ElasticSansCreateOutput.Type;

// The operation
/**
 * Create ElasticSan.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param elasticSanName - The name of the ElasticSan.
 */
export const ElasticSansCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ElasticSansCreateInput,
  outputSchema: ElasticSansCreateOutput,
}));
// Input Schema
export const ElasticSansDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    elasticSanName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ElasticSan/elasticSans/{elasticSanName}",
    apiVersion: "2025-09-01",
  }),
);
export type ElasticSansDeleteInput = typeof ElasticSansDeleteInput.Type;

// Output Schema
export const ElasticSansDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ElasticSansDeleteOutput = typeof ElasticSansDeleteOutput.Type;

// The operation
/**
 * Delete a Elastic San.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param elasticSanName - The name of the ElasticSan.
 */
export const ElasticSansDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ElasticSansDeleteInput,
  outputSchema: ElasticSansDeleteOutput,
}));
// Input Schema
export const ElasticSansGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  elasticSanName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ElasticSan/elasticSans/{elasticSanName}",
    apiVersion: "2025-09-01",
  }),
);
export type ElasticSansGetInput = typeof ElasticSansGetInput.Type;

// Output Schema
export const ElasticSansGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type ElasticSansGetOutput = typeof ElasticSansGetOutput.Type;

// The operation
/**
 * Get a ElasticSan.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param elasticSanName - The name of the ElasticSan.
 */
export const ElasticSansGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ElasticSansGetInput,
  outputSchema: ElasticSansGetOutput,
}));
// Input Schema
export const ElasticSansListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ElasticSan/elasticSans",
      apiVersion: "2025-09-01",
    }),
  );
export type ElasticSansListByResourceGroupInput =
  typeof ElasticSansListByResourceGroupInput.Type;

// Output Schema
export const ElasticSansListByResourceGroupOutput =
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
export type ElasticSansListByResourceGroupOutput =
  typeof ElasticSansListByResourceGroupOutput.Type;

// The operation
/**
 * Gets a list of ElasticSan in a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ElasticSansListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ElasticSansListByResourceGroupInput,
    outputSchema: ElasticSansListByResourceGroupOutput,
  }));
// Input Schema
export const ElasticSansListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ElasticSan/elasticSans",
      apiVersion: "2025-09-01",
    }),
  );
export type ElasticSansListBySubscriptionInput =
  typeof ElasticSansListBySubscriptionInput.Type;

// Output Schema
export const ElasticSansListBySubscriptionOutput =
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
export type ElasticSansListBySubscriptionOutput =
  typeof ElasticSansListBySubscriptionOutput.Type;

// The operation
/**
 * Gets a list of ElasticSans in a subscription
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const ElasticSansListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ElasticSansListBySubscriptionInput,
    outputSchema: ElasticSansListBySubscriptionOutput,
  }));
// Input Schema
export const ElasticSansUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    elasticSanName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        baseSizeTiB: Schema.optional(Schema.Number),
        extendedCapacitySizeTiB: Schema.optional(Schema.Number),
        publicNetworkAccess: Schema.optional(
          Schema.Literals(["Enabled", "Disabled"]),
        ),
        autoScaleProperties: Schema.optional(
          Schema.Struct({
            scaleUpProperties: Schema.optional(
              Schema.Struct({
                unusedSizeTiB: Schema.optional(Schema.Number),
                increaseCapacityUnitByTiB: Schema.optional(Schema.Number),
                capacityUnitScaleUpLimitTiB: Schema.optional(Schema.Number),
                autoScalePolicyEnforcement: Schema.optional(
                  Schema.Literals(["None", "Enabled", "Disabled"]),
                ),
              }),
            ),
          }),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  },
).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ElasticSan/elasticSans/{elasticSanName}",
    apiVersion: "2025-09-01",
  }),
);
export type ElasticSansUpdateInput = typeof ElasticSansUpdateInput.Type;

// Output Schema
export const ElasticSansUpdateOutput =
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
export type ElasticSansUpdateOutput = typeof ElasticSansUpdateOutput.Type;

// The operation
/**
 * Update a Elastic San.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param elasticSanName - The name of the ElasticSan.
 */
export const ElasticSansUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ElasticSansUpdateInput,
  outputSchema: ElasticSansUpdateOutput,
}));
// Input Schema
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.ElasticSan/operations",
    apiVersion: "2025-09-01",
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
export const PrivateEndpointConnectionsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    elasticSanName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      provisioningState: Schema.optional(
        Schema.Literals([
          "Invalid",
          "Succeeded",
          "Failed",
          "Canceled",
          "Pending",
          "Creating",
          "Updating",
          "Deleting",
          "Deleted",
          "Restoring",
        ]),
      ),
      privateEndpoint: Schema.optional(
        Schema.Struct({
          id: Schema.optional(Schema.String),
        }),
      ),
      privateLinkServiceConnectionState: Schema.Struct({
        status: Schema.optional(
          Schema.Literals(["Pending", "Approved", "Failed", "Rejected"]),
        ),
        description: Schema.optional(Schema.String),
        actionsRequired: Schema.optional(Schema.String),
      }),
      groupIds: Schema.optional(Schema.Array(Schema.String)),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ElasticSan/elasticSans/{elasticSanName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2025-09-01",
    }),
  );
export type PrivateEndpointConnectionsCreateInput =
  typeof PrivateEndpointConnectionsCreateInput.Type;

// Output Schema
export const PrivateEndpointConnectionsCreateOutput =
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
export type PrivateEndpointConnectionsCreateOutput =
  typeof PrivateEndpointConnectionsCreateOutput.Type;

// The operation
/**
 * Update the state of specified private endpoint connection associated with the Elastic San
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param elasticSanName - The name of the ElasticSan.
 * @param privateEndpointConnectionName - The name of the Private Endpoint connection.
 */
export const PrivateEndpointConnectionsCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsCreateInput,
    outputSchema: PrivateEndpointConnectionsCreateOutput,
  }));
// Input Schema
export const PrivateEndpointConnectionsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    elasticSanName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ElasticSan/elasticSans/{elasticSanName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2025-09-01",
    }),
  );
export type PrivateEndpointConnectionsDeleteInput =
  typeof PrivateEndpointConnectionsDeleteInput.Type;

// Output Schema
export const PrivateEndpointConnectionsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type PrivateEndpointConnectionsDeleteOutput =
  typeof PrivateEndpointConnectionsDeleteOutput.Type;

// The operation
/**
 * Deletes the specified private endpoint connection associated with the Elastic San
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param elasticSanName - The name of the ElasticSan.
 * @param privateEndpointConnectionName - The name of the Private Endpoint connection.
 */
export const PrivateEndpointConnectionsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsDeleteInput,
    outputSchema: PrivateEndpointConnectionsDeleteOutput,
  }));
// Input Schema
export const PrivateEndpointConnectionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    elasticSanName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ElasticSan/elasticSans/{elasticSanName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2025-09-01",
    }),
  );
export type PrivateEndpointConnectionsGetInput =
  typeof PrivateEndpointConnectionsGetInput.Type;

// Output Schema
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
  });
export type PrivateEndpointConnectionsGetOutput =
  typeof PrivateEndpointConnectionsGetOutput.Type;

// The operation
/**
 * Gets the specified private endpoint connection associated with the Elastic San
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param elasticSanName - The name of the ElasticSan.
 * @param privateEndpointConnectionName - The name of the Private Endpoint connection.
 */
export const PrivateEndpointConnectionsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsGetInput,
    outputSchema: PrivateEndpointConnectionsGetOutput,
  }));
// Input Schema
export const PrivateEndpointConnectionsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    elasticSanName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ElasticSan/elasticSans/{elasticSanName}/privateEndpointConnections",
      apiVersion: "2025-09-01",
    }),
  );
export type PrivateEndpointConnectionsListInput =
  typeof PrivateEndpointConnectionsListInput.Type;

// Output Schema
export const PrivateEndpointConnectionsListOutput =
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
export type PrivateEndpointConnectionsListOutput =
  typeof PrivateEndpointConnectionsListOutput.Type;

// The operation
/**
 * List all Private Endpoint Connections associated with the Elastic San.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param elasticSanName - The name of the ElasticSan.
 */
export const PrivateEndpointConnectionsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsListInput,
    outputSchema: PrivateEndpointConnectionsListOutput,
  }));
// Input Schema
export const PrivateLinkResourcesListByElasticSanInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    elasticSanName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ElasticSan/elasticSans/{elasticSanName}/privateLinkResources",
      apiVersion: "2025-09-01",
    }),
  );
export type PrivateLinkResourcesListByElasticSanInput =
  typeof PrivateLinkResourcesListByElasticSanInput.Type;

// Output Schema
export const PrivateLinkResourcesListByElasticSanOutput =
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
export type PrivateLinkResourcesListByElasticSanOutput =
  typeof PrivateLinkResourcesListByElasticSanOutput.Type;

// The operation
/**
 * Gets the private link resources that need to be created for a elastic San.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param elasticSanName - The name of the ElasticSan.
 */
export const PrivateLinkResourcesListByElasticSan =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkResourcesListByElasticSanInput,
    outputSchema: PrivateLinkResourcesListByElasticSanOutput,
  }));
// Input Schema
export const SkusListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  $filter: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.ElasticSan/skus",
    apiVersion: "2025-09-01",
  }),
);
export type SkusListInput = typeof SkusListInput.Type;

// Output Schema
export const SkusListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.Array(
    Schema.Struct({
      name: Schema.Literals(["Premium_LRS", "Premium_ZRS"]),
      tier: Schema.optional(Schema.Literals(["Premium"])),
      resourceType: Schema.optional(Schema.String),
      locations: Schema.optional(Schema.Array(Schema.String)),
      locationInfo: Schema.optional(
        Schema.Array(
          Schema.Struct({
            location: Schema.optional(Schema.String),
            zones: Schema.optional(Schema.Array(Schema.String)),
          }),
        ),
      ),
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
  nextLink: Schema.optional(Schema.String),
});
export type SkusListOutput = typeof SkusListOutput.Type;

// The operation
/**
 * List all the available Skus in the region and information related to them
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param $filter - Specify $filter='location eq <location>' to filter on location.
 */
export const SkusList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SkusListInput,
  outputSchema: SkusListOutput,
}));
// Input Schema
export const VolumeGroupsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    elasticSanName: Schema.String.pipe(T.PathParam()),
    volumeGroupName: Schema.String.pipe(T.PathParam()),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.Literals(["None", "SystemAssigned", "UserAssigned"]),
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
        provisioningState: Schema.optional(
          Schema.Literals([
            "Invalid",
            "Succeeded",
            "Failed",
            "Canceled",
            "Pending",
            "Creating",
            "Updating",
            "Deleting",
            "Deleted",
            "Restoring",
          ]),
        ),
        protocolType: Schema.optional(Schema.Literals(["Iscsi", "None"])),
        encryption: Schema.optional(
          Schema.Literals([
            "EncryptionAtRestWithPlatformKey",
            "EncryptionAtRestWithCustomerManagedKey",
          ]),
        ),
        encryptionProperties: Schema.optional(
          Schema.Struct({
            keyVaultProperties: Schema.optional(
              Schema.Struct({
                keyName: Schema.optional(Schema.String),
                keyVersion: Schema.optional(Schema.String),
                keyVaultUri: Schema.optional(Schema.String),
                currentVersionedKeyIdentifier: Schema.optional(Schema.String),
                lastKeyRotationTimestamp: Schema.optional(Schema.String),
                currentVersionedKeyExpirationTimestamp: Schema.optional(
                  Schema.String,
                ),
              }),
            ),
            identity: Schema.optional(
              Schema.Struct({
                userAssignedIdentity: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
        networkAcls: Schema.optional(
          Schema.Struct({
            virtualNetworkRules: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  id: Schema.String,
                  action: Schema.optional(Schema.Literals(["Allow"])),
                }),
              ),
            ),
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
        enforceDataIntegrityCheckForIscsi: Schema.optional(Schema.Boolean),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ElasticSan/elasticSans/{elasticSanName}/volumegroups/{volumeGroupName}",
      apiVersion: "2025-09-01",
    }),
  );
export type VolumeGroupsCreateInput = typeof VolumeGroupsCreateInput.Type;

// Output Schema
export const VolumeGroupsCreateOutput =
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
export type VolumeGroupsCreateOutput = typeof VolumeGroupsCreateOutput.Type;

// The operation
/**
 * Create a Volume Group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param elasticSanName - The name of the ElasticSan.
 * @param volumeGroupName - The name of the VolumeGroup.
 */
export const VolumeGroupsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VolumeGroupsCreateInput,
  outputSchema: VolumeGroupsCreateOutput,
}));
// Input Schema
export const VolumeGroupsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    elasticSanName: Schema.String.pipe(T.PathParam()),
    volumeGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ElasticSan/elasticSans/{elasticSanName}/volumegroups/{volumeGroupName}",
      apiVersion: "2025-09-01",
    }),
  );
export type VolumeGroupsDeleteInput = typeof VolumeGroupsDeleteInput.Type;

// Output Schema
export const VolumeGroupsDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VolumeGroupsDeleteOutput = typeof VolumeGroupsDeleteOutput.Type;

// The operation
/**
 * Delete an VolumeGroup.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param elasticSanName - The name of the ElasticSan.
 * @param volumeGroupName - The name of the VolumeGroup.
 */
export const VolumeGroupsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VolumeGroupsDeleteInput,
  outputSchema: VolumeGroupsDeleteOutput,
}));
// Input Schema
export const VolumeGroupsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  elasticSanName: Schema.String.pipe(T.PathParam()),
  volumeGroupName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ElasticSan/elasticSans/{elasticSanName}/volumegroups/{volumeGroupName}",
    apiVersion: "2025-09-01",
  }),
);
export type VolumeGroupsGetInput = typeof VolumeGroupsGetInput.Type;

// Output Schema
export const VolumeGroupsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type VolumeGroupsGetOutput = typeof VolumeGroupsGetOutput.Type;

// The operation
/**
 * Get an VolumeGroups.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param elasticSanName - The name of the ElasticSan.
 * @param volumeGroupName - The name of the VolumeGroup.
 */
export const VolumeGroupsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VolumeGroupsGetInput,
  outputSchema: VolumeGroupsGetOutput,
}));
// Input Schema
export const VolumeGroupsListByElasticSanInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    elasticSanName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ElasticSan/elasticSans/{elasticSanName}/volumegroups",
      apiVersion: "2025-09-01",
    }),
  );
export type VolumeGroupsListByElasticSanInput =
  typeof VolumeGroupsListByElasticSanInput.Type;

// Output Schema
export const VolumeGroupsListByElasticSanOutput =
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
export type VolumeGroupsListByElasticSanOutput =
  typeof VolumeGroupsListByElasticSanOutput.Type;

// The operation
/**
 * List VolumeGroups.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param elasticSanName - The name of the ElasticSan.
 */
export const VolumeGroupsListByElasticSan =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VolumeGroupsListByElasticSanInput,
    outputSchema: VolumeGroupsListByElasticSanOutput,
  }));
// Input Schema
export const VolumeGroupsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    elasticSanName: Schema.String.pipe(T.PathParam()),
    volumeGroupName: Schema.String.pipe(T.PathParam()),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.Literals(["None", "SystemAssigned", "UserAssigned"]),
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
        protocolType: Schema.optional(Schema.Literals(["Iscsi", "None"])),
        encryption: Schema.optional(
          Schema.Literals([
            "EncryptionAtRestWithPlatformKey",
            "EncryptionAtRestWithCustomerManagedKey",
          ]),
        ),
        encryptionProperties: Schema.optional(
          Schema.Struct({
            keyVaultProperties: Schema.optional(
              Schema.Struct({
                keyName: Schema.optional(Schema.String),
                keyVersion: Schema.optional(Schema.String),
                keyVaultUri: Schema.optional(Schema.String),
                currentVersionedKeyIdentifier: Schema.optional(Schema.String),
                lastKeyRotationTimestamp: Schema.optional(Schema.String),
                currentVersionedKeyExpirationTimestamp: Schema.optional(
                  Schema.String,
                ),
              }),
            ),
            identity: Schema.optional(
              Schema.Struct({
                userAssignedIdentity: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
        networkAcls: Schema.optional(
          Schema.Struct({
            virtualNetworkRules: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  id: Schema.String,
                  action: Schema.optional(Schema.Literals(["Allow"])),
                }),
              ),
            ),
          }),
        ),
        enforceDataIntegrityCheckForIscsi: Schema.optional(Schema.Boolean),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ElasticSan/elasticSans/{elasticSanName}/volumegroups/{volumeGroupName}",
      apiVersion: "2025-09-01",
    }),
  );
export type VolumeGroupsUpdateInput = typeof VolumeGroupsUpdateInput.Type;

// Output Schema
export const VolumeGroupsUpdateOutput =
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
export type VolumeGroupsUpdateOutput = typeof VolumeGroupsUpdateOutput.Type;

// The operation
/**
 * Update an VolumeGroup.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param elasticSanName - The name of the ElasticSan.
 * @param volumeGroupName - The name of the VolumeGroup.
 */
export const VolumeGroupsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VolumeGroupsUpdateInput,
  outputSchema: VolumeGroupsUpdateOutput,
}));
// Input Schema
export const VolumesCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  elasticSanName: Schema.String.pipe(T.PathParam()),
  volumeGroupName: Schema.String.pipe(T.PathParam()),
  volumeName: Schema.String.pipe(T.PathParam()),
  properties: Schema.Struct({
    volumeId: Schema.optional(Schema.String),
    creationData: Schema.optional(
      Schema.Struct({
        createSource: Schema.optional(
          Schema.Literals([
            "None",
            "VolumeSnapshot",
            "DiskSnapshot",
            "Disk",
            "DiskRestorePoint",
          ]),
        ),
        sourceId: Schema.optional(Schema.String),
      }),
    ),
    sizeGiB: Schema.Number,
    storageTarget: Schema.optional(
      Schema.Struct({
        targetIqn: Schema.optional(Schema.String),
        targetPortalHostname: Schema.optional(Schema.String),
        targetPortalPort: Schema.optional(Schema.Number),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Invalid",
            "Succeeded",
            "Failed",
            "Canceled",
            "Pending",
            "Creating",
            "Updating",
            "Deleting",
            "Deleted",
            "Restoring",
          ]),
        ),
        status: Schema.optional(
          Schema.Literals([
            "Invalid",
            "Unknown",
            "Healthy",
            "Unhealthy",
            "Updating",
            "Running",
            "Stopped",
            "Stopped (deallocated)",
          ]),
        ),
      }),
    ),
    managedBy: Schema.optional(
      Schema.Struct({
        resourceId: Schema.optional(Schema.String),
      }),
    ),
    provisioningState: Schema.optional(
      Schema.Literals([
        "Invalid",
        "Succeeded",
        "Failed",
        "Canceled",
        "Pending",
        "Creating",
        "Updating",
        "Deleting",
        "Deleted",
        "Restoring",
      ]),
    ),
  }),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ElasticSan/elasticSans/{elasticSanName}/volumegroups/{volumeGroupName}/volumes/{volumeName}",
    apiVersion: "2025-09-01",
  }),
);
export type VolumesCreateInput = typeof VolumesCreateInput.Type;

// Output Schema
export const VolumesCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type VolumesCreateOutput = typeof VolumesCreateOutput.Type;

// The operation
/**
 * Create a Volume.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param elasticSanName - The name of the ElasticSan.
 * @param volumeGroupName - The name of the VolumeGroup.
 * @param volumeName - The name of the Volume.
 */
export const VolumesCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VolumesCreateInput,
  outputSchema: VolumesCreateOutput,
}));
// Input Schema
export const VolumesDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  elasticSanName: Schema.String.pipe(T.PathParam()),
  volumeGroupName: Schema.String.pipe(T.PathParam()),
  volumeName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ElasticSan/elasticSans/{elasticSanName}/volumegroups/{volumeGroupName}/volumes/{volumeName}",
    apiVersion: "2025-09-01",
  }),
);
export type VolumesDeleteInput = typeof VolumesDeleteInput.Type;

// Output Schema
export const VolumesDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VolumesDeleteOutput = typeof VolumesDeleteOutput.Type;

// The operation
/**
 * Delete an Volume.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param elasticSanName - The name of the ElasticSan.
 * @param volumeGroupName - The name of the VolumeGroup.
 * @param volumeName - The name of the Volume.
 * @param x-ms-delete-snapshots - Optional, used to delete snapshots under volume. Allowed value are only true or false. Default value is false.
 * @param x-ms-force-delete - Optional, used to delete volume if active sessions present. Allowed value are only true or false. Default value is false.
 */
export const VolumesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VolumesDeleteInput,
  outputSchema: VolumesDeleteOutput,
}));
// Input Schema
export const VolumesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  elasticSanName: Schema.String.pipe(T.PathParam()),
  volumeGroupName: Schema.String.pipe(T.PathParam()),
  volumeName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ElasticSan/elasticSans/{elasticSanName}/volumegroups/{volumeGroupName}/volumes/{volumeName}",
    apiVersion: "2025-09-01",
  }),
);
export type VolumesGetInput = typeof VolumesGetInput.Type;

// Output Schema
export const VolumesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type VolumesGetOutput = typeof VolumesGetOutput.Type;

// The operation
/**
 * Get an Volume.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param elasticSanName - The name of the ElasticSan.
 * @param volumeGroupName - The name of the VolumeGroup.
 * @param volumeName - The name of the Volume.
 */
export const VolumesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VolumesGetInput,
  outputSchema: VolumesGetOutput,
}));
// Input Schema
export const VolumesListByVolumeGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    elasticSanName: Schema.String.pipe(T.PathParam()),
    volumeGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ElasticSan/elasticSans/{elasticSanName}/volumegroups/{volumeGroupName}/volumes",
      apiVersion: "2025-09-01",
    }),
  );
export type VolumesListByVolumeGroupInput =
  typeof VolumesListByVolumeGroupInput.Type;

// Output Schema
export const VolumesListByVolumeGroupOutput =
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
export type VolumesListByVolumeGroupOutput =
  typeof VolumesListByVolumeGroupOutput.Type;

// The operation
/**
 * List Volumes in a VolumeGroup.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param elasticSanName - The name of the ElasticSan.
 * @param volumeGroupName - The name of the VolumeGroup.
 */
export const VolumesListByVolumeGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VolumesListByVolumeGroupInput,
    outputSchema: VolumesListByVolumeGroupOutput,
  }),
);
// Input Schema
export const VolumeSnapshotsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    elasticSanName: Schema.String.pipe(T.PathParam()),
    volumeGroupName: Schema.String.pipe(T.PathParam()),
    snapshotName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      creationData: Schema.Struct({
        sourceId: Schema.String,
      }),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Invalid",
          "Succeeded",
          "Failed",
          "Canceled",
          "Pending",
          "Creating",
          "Updating",
          "Deleting",
          "Deleted",
          "Restoring",
        ]),
      ),
      sourceVolumeSizeGiB: Schema.optional(Schema.Number),
      volumeName: Schema.optional(Schema.String),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ElasticSan/elasticSans/{elasticSanName}/volumegroups/{volumeGroupName}/snapshots/{snapshotName}",
      apiVersion: "2025-09-01",
    }),
  );
export type VolumeSnapshotsCreateInput = typeof VolumeSnapshotsCreateInput.Type;

// Output Schema
export const VolumeSnapshotsCreateOutput =
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
export type VolumeSnapshotsCreateOutput =
  typeof VolumeSnapshotsCreateOutput.Type;

// The operation
/**
 * Create a Volume Snapshot.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param elasticSanName - The name of the ElasticSan.
 * @param volumeGroupName - The name of the VolumeGroup.
 * @param snapshotName - The name of the volume snapshot within the given volume group.
 */
export const VolumeSnapshotsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VolumeSnapshotsCreateInput,
    outputSchema: VolumeSnapshotsCreateOutput,
  }),
);
// Input Schema
export const VolumeSnapshotsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    elasticSanName: Schema.String.pipe(T.PathParam()),
    volumeGroupName: Schema.String.pipe(T.PathParam()),
    snapshotName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ElasticSan/elasticSans/{elasticSanName}/volumegroups/{volumeGroupName}/snapshots/{snapshotName}",
      apiVersion: "2025-09-01",
    }),
  );
export type VolumeSnapshotsDeleteInput = typeof VolumeSnapshotsDeleteInput.Type;

// Output Schema
export const VolumeSnapshotsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VolumeSnapshotsDeleteOutput =
  typeof VolumeSnapshotsDeleteOutput.Type;

// The operation
/**
 * Delete a Volume Snapshot.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param elasticSanName - The name of the ElasticSan.
 * @param volumeGroupName - The name of the VolumeGroup.
 * @param snapshotName - The name of the volume snapshot within the given volume group.
 */
export const VolumeSnapshotsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VolumeSnapshotsDeleteInput,
    outputSchema: VolumeSnapshotsDeleteOutput,
  }),
);
// Input Schema
export const VolumeSnapshotsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    elasticSanName: Schema.String.pipe(T.PathParam()),
    volumeGroupName: Schema.String.pipe(T.PathParam()),
    snapshotName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ElasticSan/elasticSans/{elasticSanName}/volumegroups/{volumeGroupName}/snapshots/{snapshotName}",
      apiVersion: "2025-09-01",
    }),
  );
export type VolumeSnapshotsGetInput = typeof VolumeSnapshotsGetInput.Type;

// Output Schema
export const VolumeSnapshotsGetOutput =
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
export type VolumeSnapshotsGetOutput = typeof VolumeSnapshotsGetOutput.Type;

// The operation
/**
 * Get a Volume Snapshot.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param elasticSanName - The name of the ElasticSan.
 * @param volumeGroupName - The name of the VolumeGroup.
 * @param snapshotName - The name of the volume snapshot within the given volume group.
 */
export const VolumeSnapshotsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VolumeSnapshotsGetInput,
  outputSchema: VolumeSnapshotsGetOutput,
}));
// Input Schema
export const VolumeSnapshotsListByVolumeGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    elasticSanName: Schema.String.pipe(T.PathParam()),
    volumeGroupName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ElasticSan/elasticSans/{elasticSanName}/volumegroups/{volumeGroupName}/snapshots",
      apiVersion: "2025-09-01",
    }),
  );
export type VolumeSnapshotsListByVolumeGroupInput =
  typeof VolumeSnapshotsListByVolumeGroupInput.Type;

// Output Schema
export const VolumeSnapshotsListByVolumeGroupOutput =
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
export type VolumeSnapshotsListByVolumeGroupOutput =
  typeof VolumeSnapshotsListByVolumeGroupOutput.Type;

// The operation
/**
 * List Snapshots in a VolumeGroup or List Snapshots by Volume (name) in a VolumeGroup using filter
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param elasticSanName - The name of the ElasticSan.
 * @param volumeGroupName - The name of the VolumeGroup.
 * @param $filter - Specify $filter='volumeName eq <volume name>' to filter on volume.
 */
export const VolumeSnapshotsListByVolumeGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VolumeSnapshotsListByVolumeGroupInput,
    outputSchema: VolumeSnapshotsListByVolumeGroupOutput,
  }));
// Input Schema
export const VolumesPreBackupInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  elasticSanName: Schema.String.pipe(T.PathParam()),
  volumeGroupName: Schema.String.pipe(T.PathParam()),
  volumeNames: Schema.Array(Schema.String),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ElasticSan/elasticSans/{elasticSanName}/volumegroups/{volumeGroupName}/preBackup",
    apiVersion: "2025-09-01",
  }),
);
export type VolumesPreBackupInput = typeof VolumesPreBackupInput.Type;

// Output Schema
export const VolumesPreBackupOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    validationStatus: Schema.optional(Schema.String),
  },
);
export type VolumesPreBackupOutput = typeof VolumesPreBackupOutput.Type;

// The operation
/**
 * Validate whether a disk snapshot backup can be taken for list of volumes.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param elasticSanName - The name of the ElasticSan.
 * @param volumeGroupName - The name of the VolumeGroup.
 */
export const VolumesPreBackup = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VolumesPreBackupInput,
  outputSchema: VolumesPreBackupOutput,
}));
// Input Schema
export const VolumesPreRestoreInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    elasticSanName: Schema.String.pipe(T.PathParam()),
    volumeGroupName: Schema.String.pipe(T.PathParam()),
    diskSnapshotIds: Schema.Array(Schema.String),
  },
).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ElasticSan/elasticSans/{elasticSanName}/volumegroups/{volumeGroupName}/preRestore",
    apiVersion: "2025-09-01",
  }),
);
export type VolumesPreRestoreInput = typeof VolumesPreRestoreInput.Type;

// Output Schema
export const VolumesPreRestoreOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validationStatus: Schema.optional(Schema.String),
  });
export type VolumesPreRestoreOutput = typeof VolumesPreRestoreOutput.Type;

// The operation
/**
 * Validate whether a list of backed up disk snapshots can be restored into ElasticSan volumes.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param elasticSanName - The name of the ElasticSan.
 * @param volumeGroupName - The name of the VolumeGroup.
 */
export const VolumesPreRestore = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VolumesPreRestoreInput,
  outputSchema: VolumesPreRestoreOutput,
}));
// Input Schema
export const VolumesUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  elasticSanName: Schema.String.pipe(T.PathParam()),
  volumeGroupName: Schema.String.pipe(T.PathParam()),
  volumeName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      sizeGiB: Schema.optional(Schema.Number),
      managedBy: Schema.optional(
        Schema.Struct({
          resourceId: Schema.optional(Schema.String),
        }),
      ),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ElasticSan/elasticSans/{elasticSanName}/volumegroups/{volumeGroupName}/volumes/{volumeName}",
    apiVersion: "2025-09-01",
  }),
);
export type VolumesUpdateInput = typeof VolumesUpdateInput.Type;

// Output Schema
export const VolumesUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type VolumesUpdateOutput = typeof VolumesUpdateOutput.Type;

// The operation
/**
 * Update an Volume.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param elasticSanName - The name of the ElasticSan.
 * @param volumeGroupName - The name of the VolumeGroup.
 * @param volumeName - The name of the Volume.
 */
export const VolumesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VolumesUpdateInput,
  outputSchema: VolumesUpdateOutput,
}));
