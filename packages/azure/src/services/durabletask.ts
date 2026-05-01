/**
 * Azure Durabletask API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  "api-version": Schema.String,
}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.DurableTask/operations",
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
export const RetentionPoliciesCreateOrReplaceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    schedulerName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DurableTask/schedulers/{schedulerName}/retentionPolicies/default",
    }),
  );
export type RetentionPoliciesCreateOrReplaceInput =
  typeof RetentionPoliciesCreateOrReplaceInput.Type;

// Output Schema
export const RetentionPoliciesCreateOrReplaceOutput =
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
export type RetentionPoliciesCreateOrReplaceOutput =
  typeof RetentionPoliciesCreateOrReplaceOutput.Type;

// The operation
/**
 * Create or Update a Retention Policy
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param schedulerName - The name of the Scheduler
 */
export const RetentionPoliciesCreateOrReplace =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RetentionPoliciesCreateOrReplaceInput,
    outputSchema: RetentionPoliciesCreateOrReplaceOutput,
  }));
// Input Schema
export const RetentionPoliciesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    schedulerName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DurableTask/schedulers/{schedulerName}/retentionPolicies/default",
    }),
  );
export type RetentionPoliciesDeleteInput =
  typeof RetentionPoliciesDeleteInput.Type;

// Output Schema
export const RetentionPoliciesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type RetentionPoliciesDeleteOutput =
  typeof RetentionPoliciesDeleteOutput.Type;

// The operation
/**
 * Delete a Retention Policy
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param schedulerName - The name of the Scheduler
 */
export const RetentionPoliciesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RetentionPoliciesDeleteInput,
    outputSchema: RetentionPoliciesDeleteOutput,
  }),
);
// Input Schema
export const RetentionPoliciesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    schedulerName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DurableTask/schedulers/{schedulerName}/retentionPolicies/default",
    }),
  );
export type RetentionPoliciesGetInput = typeof RetentionPoliciesGetInput.Type;

// Output Schema
export const RetentionPoliciesGetOutput =
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
export type RetentionPoliciesGetOutput = typeof RetentionPoliciesGetOutput.Type;

// The operation
/**
 * Get a Retention Policy
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param schedulerName - The name of the Scheduler
 */
export const RetentionPoliciesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RetentionPoliciesGetInput,
    outputSchema: RetentionPoliciesGetOutput,
  }),
);
// Input Schema
export const RetentionPoliciesListBySchedulerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    schedulerName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DurableTask/schedulers/{schedulerName}/retentionPolicies",
    }),
  );
export type RetentionPoliciesListBySchedulerInput =
  typeof RetentionPoliciesListBySchedulerInput.Type;

// Output Schema
export const RetentionPoliciesListBySchedulerOutput =
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
export type RetentionPoliciesListBySchedulerOutput =
  typeof RetentionPoliciesListBySchedulerOutput.Type;

// The operation
/**
 * List Retention Policies
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param schedulerName - The name of the Scheduler
 */
export const RetentionPoliciesListByScheduler =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RetentionPoliciesListBySchedulerInput,
    outputSchema: RetentionPoliciesListBySchedulerOutput,
  }));
// Input Schema
export const RetentionPoliciesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    schedulerName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DurableTask/schedulers/{schedulerName}/retentionPolicies/default",
    }),
  );
export type RetentionPoliciesUpdateInput =
  typeof RetentionPoliciesUpdateInput.Type;

// Output Schema
export const RetentionPoliciesUpdateOutput =
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
export type RetentionPoliciesUpdateOutput =
  typeof RetentionPoliciesUpdateOutput.Type;

// The operation
/**
 * Update a Retention Policy
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param schedulerName - The name of the Scheduler
 */
export const RetentionPoliciesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RetentionPoliciesUpdateInput,
    outputSchema: RetentionPoliciesUpdateOutput,
  }),
);
// Input Schema
export const SchedulersCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    schedulerName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DurableTask/schedulers/{schedulerName}",
    }),
  );
export type SchedulersCreateOrUpdateInput =
  typeof SchedulersCreateOrUpdateInput.Type;

// Output Schema
export const SchedulersCreateOrUpdateOutput =
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
export type SchedulersCreateOrUpdateOutput =
  typeof SchedulersCreateOrUpdateOutput.Type;

// The operation
/**
 * Create or update a Scheduler
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param schedulerName - The name of the Scheduler
 */
export const SchedulersCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SchedulersCreateOrUpdateInput,
    outputSchema: SchedulersCreateOrUpdateOutput,
  }),
);
// Input Schema
export const SchedulersCreateOrUpdatePrivateEndpointConnectionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    schedulerName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
    properties: Schema.optional(
      Schema.Struct({
        groupIds: Schema.optional(Schema.Array(Schema.String)),
        privateEndpoint: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
          }),
        ),
        privateLinkServiceConnectionState: Schema.Struct({
          status: Schema.optional(
            Schema.Literals(["Pending", "Approved", "Rejected"]),
          ),
          description: Schema.optional(Schema.String),
          actionsRequired: Schema.optional(Schema.String),
        }),
        provisioningState: Schema.optional(
          Schema.Literals(["Succeeded", "Creating", "Deleting", "Failed"]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DurableTask/schedulers/{schedulerName}/privateEndpointConnections/{privateEndpointConnectionName}",
    }),
  );
export type SchedulersCreateOrUpdatePrivateEndpointConnectionInput =
  typeof SchedulersCreateOrUpdatePrivateEndpointConnectionInput.Type;

// Output Schema
export const SchedulersCreateOrUpdatePrivateEndpointConnectionOutput =
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
export type SchedulersCreateOrUpdatePrivateEndpointConnectionOutput =
  typeof SchedulersCreateOrUpdatePrivateEndpointConnectionOutput.Type;

// The operation
/**
 * Create or update a private endpoint connection for the durable task scheduler
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param schedulerName - The name of the Scheduler
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource.
 * @param properties - Resource properties.
 */
export const SchedulersCreateOrUpdatePrivateEndpointConnection =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SchedulersCreateOrUpdatePrivateEndpointConnectionInput,
    outputSchema: SchedulersCreateOrUpdatePrivateEndpointConnectionOutput,
  }));
// Input Schema
export const SchedulersDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  schedulerName: Schema.String.pipe(T.PathParam()),
  "api-version": Schema.String,
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DurableTask/schedulers/{schedulerName}",
  }),
);
export type SchedulersDeleteInput = typeof SchedulersDeleteInput.Type;

// Output Schema
export const SchedulersDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type SchedulersDeleteOutput = typeof SchedulersDeleteOutput.Type;

// The operation
/**
 * Delete a Scheduler
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param schedulerName - The name of the Scheduler
 */
export const SchedulersDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SchedulersDeleteInput,
  outputSchema: SchedulersDeleteOutput,
}));
// Input Schema
export const SchedulersDeletePrivateEndpointConnectionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    schedulerName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DurableTask/schedulers/{schedulerName}/privateEndpointConnections/{privateEndpointConnectionName}",
    }),
  );
export type SchedulersDeletePrivateEndpointConnectionInput =
  typeof SchedulersDeletePrivateEndpointConnectionInput.Type;

// Output Schema
export const SchedulersDeletePrivateEndpointConnectionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type SchedulersDeletePrivateEndpointConnectionOutput =
  typeof SchedulersDeletePrivateEndpointConnectionOutput.Type;

// The operation
/**
 * Delete a private endpoint connection for the durable task scheduler
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param schedulerName - The name of the Scheduler
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource.
 */
export const SchedulersDeletePrivateEndpointConnection =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SchedulersDeletePrivateEndpointConnectionInput,
    outputSchema: SchedulersDeletePrivateEndpointConnectionOutput,
  }));
// Input Schema
export const SchedulersGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  schedulerName: Schema.String.pipe(T.PathParam()),
  "api-version": Schema.String,
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DurableTask/schedulers/{schedulerName}",
  }),
);
export type SchedulersGetInput = typeof SchedulersGetInput.Type;

// Output Schema
export const SchedulersGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type SchedulersGetOutput = typeof SchedulersGetOutput.Type;

// The operation
/**
 * Get a Scheduler
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param schedulerName - The name of the Scheduler
 */
export const SchedulersGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SchedulersGetInput,
  outputSchema: SchedulersGetOutput,
}));
// Input Schema
export const SchedulersGetPrivateEndpointConnectionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    schedulerName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DurableTask/schedulers/{schedulerName}/privateEndpointConnections/{privateEndpointConnectionName}",
    }),
  );
export type SchedulersGetPrivateEndpointConnectionInput =
  typeof SchedulersGetPrivateEndpointConnectionInput.Type;

// Output Schema
export const SchedulersGetPrivateEndpointConnectionOutput =
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
export type SchedulersGetPrivateEndpointConnectionOutput =
  typeof SchedulersGetPrivateEndpointConnectionOutput.Type;

// The operation
/**
 * Get a private endpoint connection for the durable task scheduler
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param schedulerName - The name of the Scheduler
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource.
 */
export const SchedulersGetPrivateEndpointConnection =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SchedulersGetPrivateEndpointConnectionInput,
    outputSchema: SchedulersGetPrivateEndpointConnectionOutput,
  }));
// Input Schema
export const SchedulersGetPrivateLinkInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    schedulerName: Schema.String.pipe(T.PathParam()),
    privateLinkResourceName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DurableTask/schedulers/{schedulerName}/privateLinkResources/{privateLinkResourceName}",
    }),
  );
export type SchedulersGetPrivateLinkInput =
  typeof SchedulersGetPrivateLinkInput.Type;

// Output Schema
export const SchedulersGetPrivateLinkOutput =
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
export type SchedulersGetPrivateLinkOutput =
  typeof SchedulersGetPrivateLinkOutput.Type;

// The operation
/**
 * Get a private link resource for the durable task scheduler
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param schedulerName - The name of the Scheduler
 * @param privateLinkResourceName - The name of the private link associated with the Azure resource.
 */
export const SchedulersGetPrivateLink = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SchedulersGetPrivateLinkInput,
    outputSchema: SchedulersGetPrivateLinkOutput,
  }),
);
// Input Schema
export const SchedulersListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DurableTask/schedulers",
    }),
  );
export type SchedulersListByResourceGroupInput =
  typeof SchedulersListByResourceGroupInput.Type;

// Output Schema
export const SchedulersListByResourceGroupOutput =
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
export type SchedulersListByResourceGroupOutput =
  typeof SchedulersListByResourceGroupOutput.Type;

// The operation
/**
 * List Schedulers by resource group
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const SchedulersListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SchedulersListByResourceGroupInput,
    outputSchema: SchedulersListByResourceGroupOutput,
  }));
// Input Schema
export const SchedulersListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DurableTask/schedulers",
    }),
  );
export type SchedulersListBySubscriptionInput =
  typeof SchedulersListBySubscriptionInput.Type;

// Output Schema
export const SchedulersListBySubscriptionOutput =
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
export type SchedulersListBySubscriptionOutput =
  typeof SchedulersListBySubscriptionOutput.Type;

// The operation
/**
 * List Schedulers by subscription
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const SchedulersListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SchedulersListBySubscriptionInput,
    outputSchema: SchedulersListBySubscriptionOutput,
  }));
// Input Schema
export const SchedulersListPrivateEndpointConnectionsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    schedulerName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DurableTask/schedulers/{schedulerName}/privateEndpointConnections",
    }),
  );
export type SchedulersListPrivateEndpointConnectionsInput =
  typeof SchedulersListPrivateEndpointConnectionsInput.Type;

// Output Schema
export const SchedulersListPrivateEndpointConnectionsOutput =
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
export type SchedulersListPrivateEndpointConnectionsOutput =
  typeof SchedulersListPrivateEndpointConnectionsOutput.Type;

// The operation
/**
 * List private endpoint connections for the durable task scheduler
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param schedulerName - The name of the Scheduler
 */
export const SchedulersListPrivateEndpointConnections =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SchedulersListPrivateEndpointConnectionsInput,
    outputSchema: SchedulersListPrivateEndpointConnectionsOutput,
  }));
// Input Schema
export const SchedulersListPrivateLinksInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    schedulerName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DurableTask/schedulers/{schedulerName}/privateLinkResources",
    }),
  );
export type SchedulersListPrivateLinksInput =
  typeof SchedulersListPrivateLinksInput.Type;

// Output Schema
export const SchedulersListPrivateLinksOutput =
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
export type SchedulersListPrivateLinksOutput =
  typeof SchedulersListPrivateLinksOutput.Type;

// The operation
/**
 * List private link resources for the durable task scheduler
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param schedulerName - The name of the Scheduler
 */
export const SchedulersListPrivateLinks = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SchedulersListPrivateLinksInput,
    outputSchema: SchedulersListPrivateLinksOutput,
  }),
);
// Input Schema
export const SchedulersUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  schedulerName: Schema.String.pipe(T.PathParam()),
  "api-version": Schema.String,
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DurableTask/schedulers/{schedulerName}",
  }),
);
export type SchedulersUpdateInput = typeof SchedulersUpdateInput.Type;

// Output Schema
export const SchedulersUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
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
  },
);
export type SchedulersUpdateOutput = typeof SchedulersUpdateOutput.Type;

// The operation
/**
 * Update a Scheduler
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param schedulerName - The name of the Scheduler
 */
export const SchedulersUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SchedulersUpdateInput,
  outputSchema: SchedulersUpdateOutput,
}));
// Input Schema
export const SchedulersUpdatePrivateEndpointConnectionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    schedulerName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DurableTask/schedulers/{schedulerName}/privateEndpointConnections/{privateEndpointConnectionName}",
    }),
  );
export type SchedulersUpdatePrivateEndpointConnectionInput =
  typeof SchedulersUpdatePrivateEndpointConnectionInput.Type;

// Output Schema
export const SchedulersUpdatePrivateEndpointConnectionOutput =
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
export type SchedulersUpdatePrivateEndpointConnectionOutput =
  typeof SchedulersUpdatePrivateEndpointConnectionOutput.Type;

// The operation
/**
 * Update a private endpoint connection for the durable task scheduler
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param schedulerName - The name of the Scheduler
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource.
 */
export const SchedulersUpdatePrivateEndpointConnection =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SchedulersUpdatePrivateEndpointConnectionInput,
    outputSchema: SchedulersUpdatePrivateEndpointConnectionOutput,
  }));
// Input Schema
export const TaskHubsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    schedulerName: Schema.String.pipe(T.PathParam()),
    taskHubName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DurableTask/schedulers/{schedulerName}/taskHubs/{taskHubName}",
    }),
  );
export type TaskHubsCreateOrUpdateInput =
  typeof TaskHubsCreateOrUpdateInput.Type;

// Output Schema
export const TaskHubsCreateOrUpdateOutput =
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
export type TaskHubsCreateOrUpdateOutput =
  typeof TaskHubsCreateOrUpdateOutput.Type;

// The operation
/**
 * Create or Update a Task Hub
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param schedulerName - The name of the Scheduler
 * @param taskHubName - The name of the TaskHub
 */
export const TaskHubsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: TaskHubsCreateOrUpdateInput,
    outputSchema: TaskHubsCreateOrUpdateOutput,
  }),
);
// Input Schema
export const TaskHubsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  schedulerName: Schema.String.pipe(T.PathParam()),
  taskHubName: Schema.String.pipe(T.PathParam()),
  "api-version": Schema.String,
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DurableTask/schedulers/{schedulerName}/taskHubs/{taskHubName}",
  }),
);
export type TaskHubsDeleteInput = typeof TaskHubsDeleteInput.Type;

// Output Schema
export const TaskHubsDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type TaskHubsDeleteOutput = typeof TaskHubsDeleteOutput.Type;

// The operation
/**
 * Delete a Task Hub
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param schedulerName - The name of the Scheduler
 * @param taskHubName - The name of the TaskHub
 */
export const TaskHubsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TaskHubsDeleteInput,
  outputSchema: TaskHubsDeleteOutput,
}));
// Input Schema
export const TaskHubsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  schedulerName: Schema.String.pipe(T.PathParam()),
  taskHubName: Schema.String.pipe(T.PathParam()),
  "api-version": Schema.String,
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DurableTask/schedulers/{schedulerName}/taskHubs/{taskHubName}",
  }),
);
export type TaskHubsGetInput = typeof TaskHubsGetInput.Type;

// Output Schema
export const TaskHubsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type TaskHubsGetOutput = typeof TaskHubsGetOutput.Type;

// The operation
/**
 * Get a Task Hub
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param schedulerName - The name of the Scheduler
 * @param taskHubName - The name of the TaskHub
 */
export const TaskHubsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TaskHubsGetInput,
  outputSchema: TaskHubsGetOutput,
}));
// Input Schema
export const TaskHubsListBySchedulerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    schedulerName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DurableTask/schedulers/{schedulerName}/taskHubs",
    }),
  );
export type TaskHubsListBySchedulerInput =
  typeof TaskHubsListBySchedulerInput.Type;

// Output Schema
export const TaskHubsListBySchedulerOutput =
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
export type TaskHubsListBySchedulerOutput =
  typeof TaskHubsListBySchedulerOutput.Type;

// The operation
/**
 * List Task Hubs
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param schedulerName - The name of the Scheduler
 */
export const TaskHubsListByScheduler = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: TaskHubsListBySchedulerInput,
    outputSchema: TaskHubsListBySchedulerOutput,
  }),
);
