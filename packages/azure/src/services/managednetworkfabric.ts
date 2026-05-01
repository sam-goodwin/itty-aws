/**
 * Azure Managednetworkfabric API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const AccessControlListsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accessControlListName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/accessControlLists/{accessControlListName}",
    }),
  );
export type AccessControlListsCreateInput =
  typeof AccessControlListsCreateInput.Type;

// Output Schema
export const AccessControlListsCreateOutput =
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
export type AccessControlListsCreateOutput =
  typeof AccessControlListsCreateOutput.Type;

// The operation
/**
 * Implements Access Control List PUT method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accessControlListName - Name of the Access Control List.
 */
export const AccessControlListsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AccessControlListsCreateInput,
    outputSchema: AccessControlListsCreateOutput,
  }),
);
// Input Schema
export const AccessControlListsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accessControlListName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/accessControlLists/{accessControlListName}",
    }),
  );
export type AccessControlListsDeleteInput =
  typeof AccessControlListsDeleteInput.Type;

// Output Schema
export const AccessControlListsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AccessControlListsDeleteOutput =
  typeof AccessControlListsDeleteOutput.Type;

// The operation
/**
 * Implements Access Control List DELETE method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accessControlListName - Name of the Access Control List.
 */
export const AccessControlListsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AccessControlListsDeleteInput,
    outputSchema: AccessControlListsDeleteOutput,
  }),
);
// Input Schema
export const AccessControlListsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accessControlListName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/accessControlLists/{accessControlListName}",
    }),
  );
export type AccessControlListsGetInput = typeof AccessControlListsGetInput.Type;

// Output Schema
export const AccessControlListsGetOutput =
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
export type AccessControlListsGetOutput =
  typeof AccessControlListsGetOutput.Type;

// The operation
/**
 * Implements Access Control List GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accessControlListName - Name of the Access Control List.
 */
export const AccessControlListsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AccessControlListsGetInput,
    outputSchema: AccessControlListsGetOutput,
  }),
);
// Input Schema
export const AccessControlListsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/accessControlLists",
    }),
  );
export type AccessControlListsListByResourceGroupInput =
  typeof AccessControlListsListByResourceGroupInput.Type;

// Output Schema
export const AccessControlListsListByResourceGroupOutput =
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
export type AccessControlListsListByResourceGroupOutput =
  typeof AccessControlListsListByResourceGroupOutput.Type;

// The operation
/**
 * Implements AccessControlLists list by resource group GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const AccessControlListsListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AccessControlListsListByResourceGroupInput,
    outputSchema: AccessControlListsListByResourceGroupOutput,
  }));
// Input Schema
export const AccessControlListsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ManagedNetworkFabric/accessControlLists",
    }),
  );
export type AccessControlListsListBySubscriptionInput =
  typeof AccessControlListsListBySubscriptionInput.Type;

// Output Schema
export const AccessControlListsListBySubscriptionOutput =
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
export type AccessControlListsListBySubscriptionOutput =
  typeof AccessControlListsListBySubscriptionOutput.Type;

// The operation
/**
 * Implements AccessControlLists list by subscription GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const AccessControlListsListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AccessControlListsListBySubscriptionInput,
    outputSchema: AccessControlListsListBySubscriptionOutput,
  }));
// Input Schema
export const AccessControlListsResyncInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accessControlListName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/accessControlLists/{accessControlListName}/resync",
    }),
  );
export type AccessControlListsResyncInput =
  typeof AccessControlListsResyncInput.Type;

// Output Schema
export const AccessControlListsResyncOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type AccessControlListsResyncOutput =
  typeof AccessControlListsResyncOutput.Type;

// The operation
/**
 * Implements the operation to the underlying resources.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accessControlListName - Name of the Access Control List.
 */
export const AccessControlListsResync = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AccessControlListsResyncInput,
    outputSchema: AccessControlListsResyncOutput,
  }),
);
// Input Schema
export const AccessControlListsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accessControlListName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/accessControlLists/{accessControlListName}",
    }),
  );
export type AccessControlListsUpdateInput =
  typeof AccessControlListsUpdateInput.Type;

// Output Schema
export const AccessControlListsUpdateOutput =
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
export type AccessControlListsUpdateOutput =
  typeof AccessControlListsUpdateOutput.Type;

// The operation
/**
 * API to update certain properties of the Access Control List resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accessControlListName - Name of the Access Control List.
 */
export const AccessControlListsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AccessControlListsUpdateInput,
    outputSchema: AccessControlListsUpdateOutput,
  }),
);
// Input Schema
export const AccessControlListsUpdateAdministrativeStateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accessControlListName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/accessControlLists/{accessControlListName}/updateAdministrativeState",
    }),
  );
export type AccessControlListsUpdateAdministrativeStateInput =
  typeof AccessControlListsUpdateAdministrativeStateInput.Type;

// Output Schema
export const AccessControlListsUpdateAdministrativeStateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
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
        }),
      ),
    ),
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
    resourceId: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        successfulResources: Schema.optional(Schema.Array(Schema.String)),
        failedResources: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
  });
export type AccessControlListsUpdateAdministrativeStateOutput =
  typeof AccessControlListsUpdateAdministrativeStateOutput.Type;

// The operation
/**
 * Implements the operation to the underlying resources.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accessControlListName - Name of the Access Control List.
 */
export const AccessControlListsUpdateAdministrativeState =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AccessControlListsUpdateAdministrativeStateInput,
    outputSchema: AccessControlListsUpdateAdministrativeStateOutput,
  }));
// Input Schema
export const AccessControlListsValidateConfigurationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accessControlListName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/accessControlLists/{accessControlListName}/validateConfiguration",
    }),
  );
export type AccessControlListsValidateConfigurationInput =
  typeof AccessControlListsValidateConfigurationInput.Type;

// Output Schema
export const AccessControlListsValidateConfigurationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type AccessControlListsValidateConfigurationOutput =
  typeof AccessControlListsValidateConfigurationOutput.Type;

// The operation
/**
 * Implements the operation to the underlying resources.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accessControlListName - Name of the Access Control List.
 */
export const AccessControlListsValidateConfiguration =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AccessControlListsValidateConfigurationInput,
    outputSchema: AccessControlListsValidateConfigurationOutput,
  }));
// Input Schema
export const ExternalNetworksCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    l3IsolationDomainName: Schema.String.pipe(T.PathParam()),
    externalNetworkName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l3IsolationDomains/{l3IsolationDomainName}/externalNetworks/{externalNetworkName}",
    }),
  );
export type ExternalNetworksCreateInput =
  typeof ExternalNetworksCreateInput.Type;

// Output Schema
export const ExternalNetworksCreateOutput =
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
export type ExternalNetworksCreateOutput =
  typeof ExternalNetworksCreateOutput.Type;

// The operation
/**
 * Creates ExternalNetwork PUT method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param l3IsolationDomainName - Name of the L3 Isolation Domain.
 * @param externalNetworkName - Name of the External Network.
 */
export const ExternalNetworksCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ExternalNetworksCreateInput,
    outputSchema: ExternalNetworksCreateOutput,
  }),
);
// Input Schema
export const ExternalNetworksDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    l3IsolationDomainName: Schema.String.pipe(T.PathParam()),
    externalNetworkName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l3IsolationDomains/{l3IsolationDomainName}/externalNetworks/{externalNetworkName}",
    }),
  );
export type ExternalNetworksDeleteInput =
  typeof ExternalNetworksDeleteInput.Type;

// Output Schema
export const ExternalNetworksDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ExternalNetworksDeleteOutput =
  typeof ExternalNetworksDeleteOutput.Type;

// The operation
/**
 * Implements ExternalNetworks DELETE method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param l3IsolationDomainName - Name of the L3 Isolation Domain.
 * @param externalNetworkName - Name of the External Network.
 */
export const ExternalNetworksDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ExternalNetworksDeleteInput,
    outputSchema: ExternalNetworksDeleteOutput,
  }),
);
// Input Schema
export const ExternalNetworksGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    l3IsolationDomainName: Schema.String.pipe(T.PathParam()),
    externalNetworkName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l3IsolationDomains/{l3IsolationDomainName}/externalNetworks/{externalNetworkName}",
    }),
  );
export type ExternalNetworksGetInput = typeof ExternalNetworksGetInput.Type;

// Output Schema
export const ExternalNetworksGetOutput =
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
export type ExternalNetworksGetOutput = typeof ExternalNetworksGetOutput.Type;

// The operation
/**
 * Implements ExternalNetworks GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param l3IsolationDomainName - Name of the L3 Isolation Domain.
 * @param externalNetworkName - Name of the External Network.
 */
export const ExternalNetworksGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ExternalNetworksGetInput,
  outputSchema: ExternalNetworksGetOutput,
}));
// Input Schema
export const ExternalNetworksListByL3IsolationDomainInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    l3IsolationDomainName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l3IsolationDomains/{l3IsolationDomainName}/externalNetworks",
    }),
  );
export type ExternalNetworksListByL3IsolationDomainInput =
  typeof ExternalNetworksListByL3IsolationDomainInput.Type;

// Output Schema
export const ExternalNetworksListByL3IsolationDomainOutput =
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
export type ExternalNetworksListByL3IsolationDomainOutput =
  typeof ExternalNetworksListByL3IsolationDomainOutput.Type;

// The operation
/**
 * Implements External Networks list by resource group GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param l3IsolationDomainName - Name of the L3 Isolation Domain.
 */
export const ExternalNetworksListByL3IsolationDomain =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ExternalNetworksListByL3IsolationDomainInput,
    outputSchema: ExternalNetworksListByL3IsolationDomainOutput,
  }));
// Input Schema
export const ExternalNetworksUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    l3IsolationDomainName: Schema.String.pipe(T.PathParam()),
    externalNetworkName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l3IsolationDomains/{l3IsolationDomainName}/externalNetworks/{externalNetworkName}",
    }),
  );
export type ExternalNetworksUpdateInput =
  typeof ExternalNetworksUpdateInput.Type;

// Output Schema
export const ExternalNetworksUpdateOutput =
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
export type ExternalNetworksUpdateOutput =
  typeof ExternalNetworksUpdateOutput.Type;

// The operation
/**
 * API to update certain properties of the ExternalNetworks resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param l3IsolationDomainName - Name of the L3 Isolation Domain.
 * @param externalNetworkName - Name of the External Network.
 */
export const ExternalNetworksUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ExternalNetworksUpdateInput,
    outputSchema: ExternalNetworksUpdateOutput,
  }),
);
// Input Schema
export const ExternalNetworksUpdateAdministrativeStateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    l3IsolationDomainName: Schema.String.pipe(T.PathParam()),
    externalNetworkName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l3IsolationDomains/{l3IsolationDomainName}/externalNetworks/{externalNetworkName}/updateAdministrativeState",
    }),
  );
export type ExternalNetworksUpdateAdministrativeStateInput =
  typeof ExternalNetworksUpdateAdministrativeStateInput.Type;

// Output Schema
export const ExternalNetworksUpdateAdministrativeStateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
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
        }),
      ),
    ),
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
    resourceId: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        successfulResources: Schema.optional(Schema.Array(Schema.String)),
        failedResources: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
  });
export type ExternalNetworksUpdateAdministrativeStateOutput =
  typeof ExternalNetworksUpdateAdministrativeStateOutput.Type;

// The operation
/**
 * Executes update operation to enable or disable administrative State for externalNetwork.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param l3IsolationDomainName - Name of the L3 Isolation Domain.
 * @param externalNetworkName - Name of the External Network.
 */
export const ExternalNetworksUpdateAdministrativeState =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ExternalNetworksUpdateAdministrativeStateInput,
    outputSchema: ExternalNetworksUpdateAdministrativeStateOutput,
  }));
// Input Schema
export const ExternalNetworksUpdateBfdAdministrativeStateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    l3IsolationDomainName: Schema.String.pipe(T.PathParam()),
    externalNetworkName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l3IsolationDomains/{l3IsolationDomainName}/externalNetworks/{externalNetworkName}/updateBfdAdministrativeState",
    }),
  );
export type ExternalNetworksUpdateBfdAdministrativeStateInput =
  typeof ExternalNetworksUpdateBfdAdministrativeStateInput.Type;

// Output Schema
export const ExternalNetworksUpdateBfdAdministrativeStateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
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
        }),
      ),
    ),
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
    resourceId: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        routeType: Schema.optional(Schema.Literals(["Static", "OptionA"])),
        administrativeState: Schema.optional(
          Schema.Literals(["Enabled", "Disabled", "MAT", "RMA"]),
        ),
      }),
    ),
  });
export type ExternalNetworksUpdateBfdAdministrativeStateOutput =
  typeof ExternalNetworksUpdateBfdAdministrativeStateOutput.Type;

// The operation
/**
 * BFD administrative state for either static or bgp for internalNetwork.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param l3IsolationDomainName - Name of the L3 Isolation Domain.
 * @param externalNetworkName - Name of the External Network.
 */
export const ExternalNetworksUpdateBfdAdministrativeState =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ExternalNetworksUpdateBfdAdministrativeStateInput,
    outputSchema: ExternalNetworksUpdateBfdAdministrativeStateOutput,
  }));
// Input Schema
export const ExternalNetworksUpdateStaticRouteBfdAdministrativeStateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    l3IsolationDomainName: Schema.String.pipe(T.PathParam()),
    externalNetworkName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l3IsolationDomains/{l3IsolationDomainName}/externalNetworks/{externalNetworkName}/updateStaticRouteBfdAdministrativeState",
    }),
  );
export type ExternalNetworksUpdateStaticRouteBfdAdministrativeStateInput =
  typeof ExternalNetworksUpdateStaticRouteBfdAdministrativeStateInput.Type;

// Output Schema
export const ExternalNetworksUpdateStaticRouteBfdAdministrativeStateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
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
        }),
      ),
    ),
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
    resourceId: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        successfulResources: Schema.optional(Schema.Array(Schema.String)),
        failedResources: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
  });
export type ExternalNetworksUpdateStaticRouteBfdAdministrativeStateOutput =
  typeof ExternalNetworksUpdateStaticRouteBfdAdministrativeStateOutput.Type;

// The operation
/**
 * Update Static Route BFD for external Network.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param l3IsolationDomainName - Name of the L3 Isolation Domain.
 * @param externalNetworkName - Name of the External Network.
 */
export const ExternalNetworksUpdateStaticRouteBfdAdministrativeState =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ExternalNetworksUpdateStaticRouteBfdAdministrativeStateInput,
    outputSchema: ExternalNetworksUpdateStaticRouteBfdAdministrativeStateOutput,
  }));
// Input Schema
export const InternalNetworksCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    l3IsolationDomainName: Schema.String.pipe(T.PathParam()),
    internalNetworkName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l3IsolationDomains/{l3IsolationDomainName}/internalNetworks/{internalNetworkName}",
    }),
  );
export type InternalNetworksCreateInput =
  typeof InternalNetworksCreateInput.Type;

// Output Schema
export const InternalNetworksCreateOutput =
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
export type InternalNetworksCreateOutput =
  typeof InternalNetworksCreateOutput.Type;

// The operation
/**
 * Creates InternalNetwork PUT method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param l3IsolationDomainName - Name of the L3 Isolation Domain.
 * @param internalNetworkName - Name of the Internal Network.
 */
export const InternalNetworksCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: InternalNetworksCreateInput,
    outputSchema: InternalNetworksCreateOutput,
  }),
);
// Input Schema
export const InternalNetworksDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    l3IsolationDomainName: Schema.String.pipe(T.PathParam()),
    internalNetworkName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l3IsolationDomains/{l3IsolationDomainName}/internalNetworks/{internalNetworkName}",
    }),
  );
export type InternalNetworksDeleteInput =
  typeof InternalNetworksDeleteInput.Type;

// Output Schema
export const InternalNetworksDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type InternalNetworksDeleteOutput =
  typeof InternalNetworksDeleteOutput.Type;

// The operation
/**
 * Implements InternalNetworks DELETE method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param l3IsolationDomainName - Name of the L3 Isolation Domain.
 * @param internalNetworkName - Name of the Internal Network.
 */
export const InternalNetworksDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: InternalNetworksDeleteInput,
    outputSchema: InternalNetworksDeleteOutput,
  }),
);
// Input Schema
export const InternalNetworksGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    l3IsolationDomainName: Schema.String.pipe(T.PathParam()),
    internalNetworkName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l3IsolationDomains/{l3IsolationDomainName}/internalNetworks/{internalNetworkName}",
    }),
  );
export type InternalNetworksGetInput = typeof InternalNetworksGetInput.Type;

// Output Schema
export const InternalNetworksGetOutput =
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
export type InternalNetworksGetOutput = typeof InternalNetworksGetOutput.Type;

// The operation
/**
 * Gets a InternalNetworks.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param l3IsolationDomainName - Name of the L3 Isolation Domain.
 * @param internalNetworkName - Name of the Internal Network.
 */
export const InternalNetworksGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: InternalNetworksGetInput,
  outputSchema: InternalNetworksGetOutput,
}));
// Input Schema
export const InternalNetworksListByL3IsolationDomainInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    l3IsolationDomainName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l3IsolationDomains/{l3IsolationDomainName}/internalNetworks",
    }),
  );
export type InternalNetworksListByL3IsolationDomainInput =
  typeof InternalNetworksListByL3IsolationDomainInput.Type;

// Output Schema
export const InternalNetworksListByL3IsolationDomainOutput =
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
export type InternalNetworksListByL3IsolationDomainOutput =
  typeof InternalNetworksListByL3IsolationDomainOutput.Type;

// The operation
/**
 * Displays InternalNetworks list by resource group GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param l3IsolationDomainName - Name of the L3 Isolation Domain.
 */
export const InternalNetworksListByL3IsolationDomain =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: InternalNetworksListByL3IsolationDomainInput,
    outputSchema: InternalNetworksListByL3IsolationDomainOutput,
  }));
// Input Schema
export const InternalNetworksUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    l3IsolationDomainName: Schema.String.pipe(T.PathParam()),
    internalNetworkName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l3IsolationDomains/{l3IsolationDomainName}/internalNetworks/{internalNetworkName}",
    }),
  );
export type InternalNetworksUpdateInput =
  typeof InternalNetworksUpdateInput.Type;

// Output Schema
export const InternalNetworksUpdateOutput =
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
export type InternalNetworksUpdateOutput =
  typeof InternalNetworksUpdateOutput.Type;

// The operation
/**
 * Updates a InternalNetworks.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param l3IsolationDomainName - Name of the L3 Isolation Domain.
 * @param internalNetworkName - Name of the Internal Network.
 */
export const InternalNetworksUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: InternalNetworksUpdateInput,
    outputSchema: InternalNetworksUpdateOutput,
  }),
);
// Input Schema
export const InternalNetworksUpdateAdministrativeStateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    l3IsolationDomainName: Schema.String.pipe(T.PathParam()),
    internalNetworkName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l3IsolationDomains/{l3IsolationDomainName}/internalNetworks/{internalNetworkName}/updateAdministrativeState",
    }),
  );
export type InternalNetworksUpdateAdministrativeStateInput =
  typeof InternalNetworksUpdateAdministrativeStateInput.Type;

// Output Schema
export const InternalNetworksUpdateAdministrativeStateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
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
        }),
      ),
    ),
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
    resourceId: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        successfulResources: Schema.optional(Schema.Array(Schema.String)),
        failedResources: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
  });
export type InternalNetworksUpdateAdministrativeStateOutput =
  typeof InternalNetworksUpdateAdministrativeStateOutput.Type;

// The operation
/**
 * Executes update operation to enable or disable administrative State for InternalNetwork.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param l3IsolationDomainName - Name of the L3 Isolation Domain.
 * @param internalNetworkName - Name of the Internal Network.
 */
export const InternalNetworksUpdateAdministrativeState =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: InternalNetworksUpdateAdministrativeStateInput,
    outputSchema: InternalNetworksUpdateAdministrativeStateOutput,
  }));
// Input Schema
export const InternalNetworksUpdateBfdAdministrativeStateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    l3IsolationDomainName: Schema.String.pipe(T.PathParam()),
    internalNetworkName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l3IsolationDomains/{l3IsolationDomainName}/internalNetworks/{internalNetworkName}/updateBfdAdministrativeState",
    }),
  );
export type InternalNetworksUpdateBfdAdministrativeStateInput =
  typeof InternalNetworksUpdateBfdAdministrativeStateInput.Type;

// Output Schema
export const InternalNetworksUpdateBfdAdministrativeStateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
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
        }),
      ),
    ),
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
    resourceId: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        neighborAddressAdministrativeStatus: Schema.optional(
          Schema.Array(
            Schema.Struct({
              neighborAddress: Schema.optional(Schema.String),
              administrativeState: Schema.optional(
                Schema.Literals(["Enabled", "Disabled", "MAT", "RMA"]),
              ),
              error: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
  });
export type InternalNetworksUpdateBfdAdministrativeStateOutput =
  typeof InternalNetworksUpdateBfdAdministrativeStateOutput.Type;

// The operation
/**
 * BFD administrative state for either static or bgp for internalNetwork.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param l3IsolationDomainName - Name of the L3 Isolation Domain.
 * @param internalNetworkName - Name of the Internal Network.
 */
export const InternalNetworksUpdateBfdAdministrativeState =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: InternalNetworksUpdateBfdAdministrativeStateInput,
    outputSchema: InternalNetworksUpdateBfdAdministrativeStateOutput,
  }));
// Input Schema
export const InternalNetworksUpdateBgpAdministrativeStateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    l3IsolationDomainName: Schema.String.pipe(T.PathParam()),
    internalNetworkName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l3IsolationDomains/{l3IsolationDomainName}/internalNetworks/{internalNetworkName}/updateBgpAdministrativeState",
    }),
  );
export type InternalNetworksUpdateBgpAdministrativeStateInput =
  typeof InternalNetworksUpdateBgpAdministrativeStateInput.Type;

// Output Schema
export const InternalNetworksUpdateBgpAdministrativeStateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
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
        }),
      ),
    ),
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
    resourceId: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        neighborAddressAdministrativeStatus: Schema.optional(
          Schema.Array(
            Schema.Struct({
              neighborAddress: Schema.optional(Schema.String),
              administrativeState: Schema.optional(
                Schema.Literals(["Enabled", "Disabled"]),
              ),
              error: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
  });
export type InternalNetworksUpdateBgpAdministrativeStateOutput =
  typeof InternalNetworksUpdateBgpAdministrativeStateOutput.Type;

// The operation
/**
 * Update BGP state for internalNetwork. Allowed only on edge devices.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param l3IsolationDomainName - Name of the L3 Isolation Domain.
 * @param internalNetworkName - Name of the Internal Network.
 */
export const InternalNetworksUpdateBgpAdministrativeState =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: InternalNetworksUpdateBgpAdministrativeStateInput,
    outputSchema: InternalNetworksUpdateBgpAdministrativeStateOutput,
  }));
// Input Schema
export const InternalNetworksUpdateStaticRouteBfdAdministrativeStateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    l3IsolationDomainName: Schema.String.pipe(T.PathParam()),
    internalNetworkName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l3IsolationDomains/{l3IsolationDomainName}/internalNetworks/{internalNetworkName}/updateStaticRouteBfdAdministrativeState",
    }),
  );
export type InternalNetworksUpdateStaticRouteBfdAdministrativeStateInput =
  typeof InternalNetworksUpdateStaticRouteBfdAdministrativeStateInput.Type;

// Output Schema
export const InternalNetworksUpdateStaticRouteBfdAdministrativeStateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
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
        }),
      ),
    ),
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
    resourceId: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        successfulResources: Schema.optional(Schema.Array(Schema.String)),
        failedResources: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
  });
export type InternalNetworksUpdateStaticRouteBfdAdministrativeStateOutput =
  typeof InternalNetworksUpdateStaticRouteBfdAdministrativeStateOutput.Type;

// The operation
/**
 * Update Static Route BFD administrative state for internalNetwork.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param l3IsolationDomainName - Name of the L3 Isolation Domain.
 * @param internalNetworkName - Name of the Internal Network.
 */
export const InternalNetworksUpdateStaticRouteBfdAdministrativeState =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: InternalNetworksUpdateStaticRouteBfdAdministrativeStateInput,
    outputSchema: InternalNetworksUpdateStaticRouteBfdAdministrativeStateOutput,
  }));
// Input Schema
export const InternetGatewayRulesCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    internetGatewayRuleName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/internetGatewayRules/{internetGatewayRuleName}",
    }),
  );
export type InternetGatewayRulesCreateInput =
  typeof InternetGatewayRulesCreateInput.Type;

// Output Schema
export const InternetGatewayRulesCreateOutput =
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
export type InternetGatewayRulesCreateOutput =
  typeof InternetGatewayRulesCreateOutput.Type;

// The operation
/**
 * Creates an Internet Gateway rule resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param internetGatewayRuleName - Name of the Internet Gateway rule.
 */
export const InternetGatewayRulesCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: InternetGatewayRulesCreateInput,
    outputSchema: InternetGatewayRulesCreateOutput,
  }),
);
// Input Schema
export const InternetGatewayRulesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    internetGatewayRuleName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/internetGatewayRules/{internetGatewayRuleName}",
    }),
  );
export type InternetGatewayRulesDeleteInput =
  typeof InternetGatewayRulesDeleteInput.Type;

// Output Schema
export const InternetGatewayRulesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type InternetGatewayRulesDeleteOutput =
  typeof InternetGatewayRulesDeleteOutput.Type;

// The operation
/**
 * Implements Internet Gateway Rules DELETE method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param internetGatewayRuleName - Name of the Internet Gateway rule.
 */
export const InternetGatewayRulesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: InternetGatewayRulesDeleteInput,
    outputSchema: InternetGatewayRulesDeleteOutput,
  }),
);
// Input Schema
export const InternetGatewayRulesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    internetGatewayRuleName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/internetGatewayRules/{internetGatewayRuleName}",
    }),
  );
export type InternetGatewayRulesGetInput =
  typeof InternetGatewayRulesGetInput.Type;

// Output Schema
export const InternetGatewayRulesGetOutput =
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
export type InternetGatewayRulesGetOutput =
  typeof InternetGatewayRulesGetOutput.Type;

// The operation
/**
 * Gets an Internet Gateway Rule resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param internetGatewayRuleName - Name of the Internet Gateway rule.
 */
export const InternetGatewayRulesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: InternetGatewayRulesGetInput,
    outputSchema: InternetGatewayRulesGetOutput,
  }),
);
// Input Schema
export const InternetGatewayRulesListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/internetGatewayRules",
    }),
  );
export type InternetGatewayRulesListByResourceGroupInput =
  typeof InternetGatewayRulesListByResourceGroupInput.Type;

// Output Schema
export const InternetGatewayRulesListByResourceGroupOutput =
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
export type InternetGatewayRulesListByResourceGroupOutput =
  typeof InternetGatewayRulesListByResourceGroupOutput.Type;

// The operation
/**
 * Implements Internet Gateway Rules list by resource group GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const InternetGatewayRulesListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: InternetGatewayRulesListByResourceGroupInput,
    outputSchema: InternetGatewayRulesListByResourceGroupOutput,
  }));
// Input Schema
export const InternetGatewayRulesListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ManagedNetworkFabric/internetGatewayRules",
    }),
  );
export type InternetGatewayRulesListBySubscriptionInput =
  typeof InternetGatewayRulesListBySubscriptionInput.Type;

// Output Schema
export const InternetGatewayRulesListBySubscriptionOutput =
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
export type InternetGatewayRulesListBySubscriptionOutput =
  typeof InternetGatewayRulesListBySubscriptionOutput.Type;

// The operation
/**
 * List all Internet Gateway rules in the given subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const InternetGatewayRulesListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: InternetGatewayRulesListBySubscriptionInput,
    outputSchema: InternetGatewayRulesListBySubscriptionOutput,
  }));
// Input Schema
export const InternetGatewayRulesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    internetGatewayRuleName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/internetGatewayRules/{internetGatewayRuleName}",
    }),
  );
export type InternetGatewayRulesUpdateInput =
  typeof InternetGatewayRulesUpdateInput.Type;

// Output Schema
export const InternetGatewayRulesUpdateOutput =
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
export type InternetGatewayRulesUpdateOutput =
  typeof InternetGatewayRulesUpdateOutput.Type;

// The operation
/**
 * API to update certain properties of the Internet Gateway Rule resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param internetGatewayRuleName - Name of the Internet Gateway rule.
 */
export const InternetGatewayRulesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: InternetGatewayRulesUpdateInput,
    outputSchema: InternetGatewayRulesUpdateOutput,
  }),
);
// Input Schema
export const InternetGatewaysCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    internetGatewayName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/internetGateways/{internetGatewayName}",
    }),
  );
export type InternetGatewaysCreateInput =
  typeof InternetGatewaysCreateInput.Type;

// Output Schema
export const InternetGatewaysCreateOutput =
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
export type InternetGatewaysCreateOutput =
  typeof InternetGatewaysCreateOutput.Type;

// The operation
/**
 * Creates a Network Fabric Service Internet Gateway resource instance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param internetGatewayName - Name of the Internet Gateway.
 */
export const InternetGatewaysCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: InternetGatewaysCreateInput,
    outputSchema: InternetGatewaysCreateOutput,
  }),
);
// Input Schema
export const InternetGatewaysDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    internetGatewayName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/internetGateways/{internetGatewayName}",
    }),
  );
export type InternetGatewaysDeleteInput =
  typeof InternetGatewaysDeleteInput.Type;

// Output Schema
export const InternetGatewaysDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type InternetGatewaysDeleteOutput =
  typeof InternetGatewaysDeleteOutput.Type;

// The operation
/**
 * Execute a delete on Network Fabric Service Internet Gateway.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param internetGatewayName - Name of the Internet Gateway.
 */
export const InternetGatewaysDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: InternetGatewaysDeleteInput,
    outputSchema: InternetGatewaysDeleteOutput,
  }),
);
// Input Schema
export const InternetGatewaysGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    internetGatewayName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/internetGateways/{internetGatewayName}",
    }),
  );
export type InternetGatewaysGetInput = typeof InternetGatewaysGetInput.Type;

// Output Schema
export const InternetGatewaysGetOutput =
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
export type InternetGatewaysGetOutput = typeof InternetGatewaysGetOutput.Type;

// The operation
/**
 * Implements Gateway GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param internetGatewayName - Name of the Internet Gateway.
 */
export const InternetGatewaysGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: InternetGatewaysGetInput,
  outputSchema: InternetGatewaysGetOutput,
}));
// Input Schema
export const InternetGatewaysListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/internetGateways",
    }),
  );
export type InternetGatewaysListByResourceGroupInput =
  typeof InternetGatewaysListByResourceGroupInput.Type;

// Output Schema
export const InternetGatewaysListByResourceGroupOutput =
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
export type InternetGatewaysListByResourceGroupOutput =
  typeof InternetGatewaysListByResourceGroupOutput.Type;

// The operation
/**
 * Displays Internet Gateways list by resource group GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const InternetGatewaysListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: InternetGatewaysListByResourceGroupInput,
    outputSchema: InternetGatewaysListByResourceGroupOutput,
  }));
// Input Schema
export const InternetGatewaysListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ManagedNetworkFabric/internetGateways",
    }),
  );
export type InternetGatewaysListBySubscriptionInput =
  typeof InternetGatewaysListBySubscriptionInput.Type;

// Output Schema
export const InternetGatewaysListBySubscriptionOutput =
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
export type InternetGatewaysListBySubscriptionOutput =
  typeof InternetGatewaysListBySubscriptionOutput.Type;

// The operation
/**
 * Displays Internet Gateways list by subscription GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const InternetGatewaysListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: InternetGatewaysListBySubscriptionInput,
    outputSchema: InternetGatewaysListBySubscriptionOutput,
  }));
// Input Schema
export const InternetGatewaysUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    internetGatewayName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/internetGateways/{internetGatewayName}",
    }),
  );
export type InternetGatewaysUpdateInput =
  typeof InternetGatewaysUpdateInput.Type;

// Output Schema
export const InternetGatewaysUpdateOutput =
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
export type InternetGatewaysUpdateOutput =
  typeof InternetGatewaysUpdateOutput.Type;

// The operation
/**
 * Execute patch on Network Fabric Service Internet Gateway.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param internetGatewayName - Name of the Internet Gateway.
 */
export const InternetGatewaysUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: InternetGatewaysUpdateInput,
    outputSchema: InternetGatewaysUpdateOutput,
  }),
);
// Input Schema
export const IpCommunitiesCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    ipCommunityName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/ipCommunities/{ipCommunityName}",
    }),
  );
export type IpCommunitiesCreateInput = typeof IpCommunitiesCreateInput.Type;

// Output Schema
export const IpCommunitiesCreateOutput =
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
export type IpCommunitiesCreateOutput = typeof IpCommunitiesCreateOutput.Type;

// The operation
/**
 * Implements an IP Community PUT method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param ipCommunityName - Name of the IP Community.
 */
export const IpCommunitiesCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: IpCommunitiesCreateInput,
  outputSchema: IpCommunitiesCreateOutput,
}));
// Input Schema
export const IpCommunitiesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    ipCommunityName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/ipCommunities/{ipCommunityName}",
    }),
  );
export type IpCommunitiesDeleteInput = typeof IpCommunitiesDeleteInput.Type;

// Output Schema
export const IpCommunitiesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type IpCommunitiesDeleteOutput = typeof IpCommunitiesDeleteOutput.Type;

// The operation
/**
 * Implements IP Community DELETE method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param ipCommunityName - Name of the IP Community.
 */
export const IpCommunitiesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: IpCommunitiesDeleteInput,
  outputSchema: IpCommunitiesDeleteOutput,
}));
// Input Schema
export const IpCommunitiesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  ipCommunityName: Schema.String.pipe(T.PathParam()),
  "api-version": Schema.String,
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/ipCommunities/{ipCommunityName}",
  }),
);
export type IpCommunitiesGetInput = typeof IpCommunitiesGetInput.Type;

// Output Schema
export const IpCommunitiesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
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
export type IpCommunitiesGetOutput = typeof IpCommunitiesGetOutput.Type;

// The operation
/**
 * Implements an IP Community GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param ipCommunityName - Name of the IP Community.
 */
export const IpCommunitiesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: IpCommunitiesGetInput,
  outputSchema: IpCommunitiesGetOutput,
}));
// Input Schema
export const IpCommunitiesListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/ipCommunities",
    }),
  );
export type IpCommunitiesListByResourceGroupInput =
  typeof IpCommunitiesListByResourceGroupInput.Type;

// Output Schema
export const IpCommunitiesListByResourceGroupOutput =
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
export type IpCommunitiesListByResourceGroupOutput =
  typeof IpCommunitiesListByResourceGroupOutput.Type;

// The operation
/**
 * Implements IP Communities list by resource group GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const IpCommunitiesListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IpCommunitiesListByResourceGroupInput,
    outputSchema: IpCommunitiesListByResourceGroupOutput,
  }));
// Input Schema
export const IpCommunitiesListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ManagedNetworkFabric/ipCommunities",
    }),
  );
export type IpCommunitiesListBySubscriptionInput =
  typeof IpCommunitiesListBySubscriptionInput.Type;

// Output Schema
export const IpCommunitiesListBySubscriptionOutput =
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
export type IpCommunitiesListBySubscriptionOutput =
  typeof IpCommunitiesListBySubscriptionOutput.Type;

// The operation
/**
 * Implements IP Communities list by subscription GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const IpCommunitiesListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IpCommunitiesListBySubscriptionInput,
    outputSchema: IpCommunitiesListBySubscriptionOutput,
  }));
// Input Schema
export const IpCommunitiesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    ipCommunityName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/ipCommunities/{ipCommunityName}",
    }),
  );
export type IpCommunitiesUpdateInput = typeof IpCommunitiesUpdateInput.Type;

// Output Schema
export const IpCommunitiesUpdateOutput =
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
export type IpCommunitiesUpdateOutput = typeof IpCommunitiesUpdateOutput.Type;

// The operation
/**
 * API to update certain properties of the IP Community resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param ipCommunityName - Name of the IP Community.
 */
export const IpCommunitiesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: IpCommunitiesUpdateInput,
  outputSchema: IpCommunitiesUpdateOutput,
}));
// Input Schema
export const IpExtendedCommunitiesCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    ipExtendedCommunityName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/ipExtendedCommunities/{ipExtendedCommunityName}",
    }),
  );
export type IpExtendedCommunitiesCreateInput =
  typeof IpExtendedCommunitiesCreateInput.Type;

// Output Schema
export const IpExtendedCommunitiesCreateOutput =
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
export type IpExtendedCommunitiesCreateOutput =
  typeof IpExtendedCommunitiesCreateOutput.Type;

// The operation
/**
 * Implements IP Extended Community PUT method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param ipExtendedCommunityName - Name of the IP Extended Community.
 */
export const IpExtendedCommunitiesCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: IpExtendedCommunitiesCreateInput,
    outputSchema: IpExtendedCommunitiesCreateOutput,
  }),
);
// Input Schema
export const IpExtendedCommunitiesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    ipExtendedCommunityName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/ipExtendedCommunities/{ipExtendedCommunityName}",
    }),
  );
export type IpExtendedCommunitiesDeleteInput =
  typeof IpExtendedCommunitiesDeleteInput.Type;

// Output Schema
export const IpExtendedCommunitiesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type IpExtendedCommunitiesDeleteOutput =
  typeof IpExtendedCommunitiesDeleteOutput.Type;

// The operation
/**
 * Implements IP Extended Community DELETE method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param ipExtendedCommunityName - Name of the IP Extended Community.
 */
export const IpExtendedCommunitiesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: IpExtendedCommunitiesDeleteInput,
    outputSchema: IpExtendedCommunitiesDeleteOutput,
  }),
);
// Input Schema
export const IpExtendedCommunitiesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    ipExtendedCommunityName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/ipExtendedCommunities/{ipExtendedCommunityName}",
    }),
  );
export type IpExtendedCommunitiesGetInput =
  typeof IpExtendedCommunitiesGetInput.Type;

// Output Schema
export const IpExtendedCommunitiesGetOutput =
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
export type IpExtendedCommunitiesGetOutput =
  typeof IpExtendedCommunitiesGetOutput.Type;

// The operation
/**
 * Implements IP Extended Community GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param ipExtendedCommunityName - Name of the IP Extended Community.
 */
export const IpExtendedCommunitiesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: IpExtendedCommunitiesGetInput,
    outputSchema: IpExtendedCommunitiesGetOutput,
  }),
);
// Input Schema
export const IpExtendedCommunitiesListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/ipExtendedCommunities",
    }),
  );
export type IpExtendedCommunitiesListByResourceGroupInput =
  typeof IpExtendedCommunitiesListByResourceGroupInput.Type;

// Output Schema
export const IpExtendedCommunitiesListByResourceGroupOutput =
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
export type IpExtendedCommunitiesListByResourceGroupOutput =
  typeof IpExtendedCommunitiesListByResourceGroupOutput.Type;

// The operation
/**
 * Implements IpExtendedCommunities list by resource group GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const IpExtendedCommunitiesListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IpExtendedCommunitiesListByResourceGroupInput,
    outputSchema: IpExtendedCommunitiesListByResourceGroupOutput,
  }));
// Input Schema
export const IpExtendedCommunitiesListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ManagedNetworkFabric/ipExtendedCommunities",
    }),
  );
export type IpExtendedCommunitiesListBySubscriptionInput =
  typeof IpExtendedCommunitiesListBySubscriptionInput.Type;

// Output Schema
export const IpExtendedCommunitiesListBySubscriptionOutput =
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
export type IpExtendedCommunitiesListBySubscriptionOutput =
  typeof IpExtendedCommunitiesListBySubscriptionOutput.Type;

// The operation
/**
 * Implements IpExtendedCommunities list by subscription GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const IpExtendedCommunitiesListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IpExtendedCommunitiesListBySubscriptionInput,
    outputSchema: IpExtendedCommunitiesListBySubscriptionOutput,
  }));
// Input Schema
export const IpExtendedCommunitiesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    ipExtendedCommunityName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/ipExtendedCommunities/{ipExtendedCommunityName}",
    }),
  );
export type IpExtendedCommunitiesUpdateInput =
  typeof IpExtendedCommunitiesUpdateInput.Type;

// Output Schema
export const IpExtendedCommunitiesUpdateOutput =
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
export type IpExtendedCommunitiesUpdateOutput =
  typeof IpExtendedCommunitiesUpdateOutput.Type;

// The operation
/**
 * API to update certain properties of the IP Extended Community resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param ipExtendedCommunityName - Name of the IP Extended Community.
 */
export const IpExtendedCommunitiesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: IpExtendedCommunitiesUpdateInput,
    outputSchema: IpExtendedCommunitiesUpdateOutput,
  }),
);
// Input Schema
export const IpPrefixesCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  ipPrefixName: Schema.String.pipe(T.PathParam()),
  "api-version": Schema.String,
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/ipPrefixes/{ipPrefixName}",
  }),
);
export type IpPrefixesCreateInput = typeof IpPrefixesCreateInput.Type;

// Output Schema
export const IpPrefixesCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
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
export type IpPrefixesCreateOutput = typeof IpPrefixesCreateOutput.Type;

// The operation
/**
 * Implements IP Prefix PUT method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param ipPrefixName - Name of the IP Prefix.
 */
export const IpPrefixesCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: IpPrefixesCreateInput,
  outputSchema: IpPrefixesCreateOutput,
}));
// Input Schema
export const IpPrefixesDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  ipPrefixName: Schema.String.pipe(T.PathParam()),
  "api-version": Schema.String,
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/ipPrefixes/{ipPrefixName}",
  }),
);
export type IpPrefixesDeleteInput = typeof IpPrefixesDeleteInput.Type;

// Output Schema
export const IpPrefixesDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type IpPrefixesDeleteOutput = typeof IpPrefixesDeleteOutput.Type;

// The operation
/**
 * Implements IP Prefix DELETE method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param ipPrefixName - Name of the IP Prefix.
 */
export const IpPrefixesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: IpPrefixesDeleteInput,
  outputSchema: IpPrefixesDeleteOutput,
}));
// Input Schema
export const IpPrefixesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  ipPrefixName: Schema.String.pipe(T.PathParam()),
  "api-version": Schema.String,
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/ipPrefixes/{ipPrefixName}",
  }),
);
export type IpPrefixesGetInput = typeof IpPrefixesGetInput.Type;

// Output Schema
export const IpPrefixesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type IpPrefixesGetOutput = typeof IpPrefixesGetOutput.Type;

// The operation
/**
 * Implements IP Prefix GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param ipPrefixName - Name of the IP Prefix.
 */
export const IpPrefixesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: IpPrefixesGetInput,
  outputSchema: IpPrefixesGetOutput,
}));
// Input Schema
export const IpPrefixesListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/ipPrefixes",
    }),
  );
export type IpPrefixesListByResourceGroupInput =
  typeof IpPrefixesListByResourceGroupInput.Type;

// Output Schema
export const IpPrefixesListByResourceGroupOutput =
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
export type IpPrefixesListByResourceGroupOutput =
  typeof IpPrefixesListByResourceGroupOutput.Type;

// The operation
/**
 * Implements IpPrefixes list by resource group GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const IpPrefixesListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IpPrefixesListByResourceGroupInput,
    outputSchema: IpPrefixesListByResourceGroupOutput,
  }));
// Input Schema
export const IpPrefixesListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ManagedNetworkFabric/ipPrefixes",
    }),
  );
export type IpPrefixesListBySubscriptionInput =
  typeof IpPrefixesListBySubscriptionInput.Type;

// Output Schema
export const IpPrefixesListBySubscriptionOutput =
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
export type IpPrefixesListBySubscriptionOutput =
  typeof IpPrefixesListBySubscriptionOutput.Type;

// The operation
/**
 * Implements IpPrefixes list by subscription GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const IpPrefixesListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IpPrefixesListBySubscriptionInput,
    outputSchema: IpPrefixesListBySubscriptionOutput,
  }));
// Input Schema
export const IpPrefixesUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  ipPrefixName: Schema.String.pipe(T.PathParam()),
  "api-version": Schema.String,
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/ipPrefixes/{ipPrefixName}",
  }),
);
export type IpPrefixesUpdateInput = typeof IpPrefixesUpdateInput.Type;

// Output Schema
export const IpPrefixesUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
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
export type IpPrefixesUpdateOutput = typeof IpPrefixesUpdateOutput.Type;

// The operation
/**
 * API to update certain properties of the IP Prefix resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param ipPrefixName - Name of the IP Prefix.
 */
export const IpPrefixesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: IpPrefixesUpdateInput,
  outputSchema: IpPrefixesUpdateOutput,
}));
// Input Schema
export const L2IsolationDomainsCommitConfigurationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    l2IsolationDomainName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l2IsolationDomains/{l2IsolationDomainName}/commitConfiguration",
    }),
  );
export type L2IsolationDomainsCommitConfigurationInput =
  typeof L2IsolationDomainsCommitConfigurationInput.Type;

// Output Schema
export const L2IsolationDomainsCommitConfigurationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type L2IsolationDomainsCommitConfigurationOutput =
  typeof L2IsolationDomainsCommitConfigurationOutput.Type;

// The operation
/**
 * Commits the configuration of the given resources.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param l2IsolationDomainName - Name of the L2 Isolation Domain.
 */
export const L2IsolationDomainsCommitConfiguration =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: L2IsolationDomainsCommitConfigurationInput,
    outputSchema: L2IsolationDomainsCommitConfigurationOutput,
  }));
// Input Schema
export const L2IsolationDomainsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    l2IsolationDomainName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l2IsolationDomains/{l2IsolationDomainName}",
    }),
  );
export type L2IsolationDomainsCreateInput =
  typeof L2IsolationDomainsCreateInput.Type;

// Output Schema
export const L2IsolationDomainsCreateOutput =
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
export type L2IsolationDomainsCreateOutput =
  typeof L2IsolationDomainsCreateOutput.Type;

// The operation
/**
 * Creates layer 2 network connectivity between compute nodes within a rack and across racks.The configuration is applied on the devices only after the isolation domain is enabled.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param l2IsolationDomainName - Name of the L2 Isolation Domain.
 */
export const L2IsolationDomainsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: L2IsolationDomainsCreateInput,
    outputSchema: L2IsolationDomainsCreateOutput,
  }),
);
// Input Schema
export const L2IsolationDomainsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    l2IsolationDomainName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l2IsolationDomains/{l2IsolationDomainName}",
    }),
  );
export type L2IsolationDomainsDeleteInput =
  typeof L2IsolationDomainsDeleteInput.Type;

// Output Schema
export const L2IsolationDomainsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type L2IsolationDomainsDeleteOutput =
  typeof L2IsolationDomainsDeleteOutput.Type;

// The operation
/**
 * Deletes layer 2 connectivity between compute nodes by managed by named L2 Isolation name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param l2IsolationDomainName - Name of the L2 Isolation Domain.
 */
export const L2IsolationDomainsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: L2IsolationDomainsDeleteInput,
    outputSchema: L2IsolationDomainsDeleteOutput,
  }),
);
// Input Schema
export const L2IsolationDomainsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    l2IsolationDomainName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l2IsolationDomains/{l2IsolationDomainName}",
    }),
  );
export type L2IsolationDomainsGetInput = typeof L2IsolationDomainsGetInput.Type;

// Output Schema
export const L2IsolationDomainsGetOutput =
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
export type L2IsolationDomainsGetOutput =
  typeof L2IsolationDomainsGetOutput.Type;

// The operation
/**
 * Implements L2 Isolation Domain GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param l2IsolationDomainName - Name of the L2 Isolation Domain.
 */
export const L2IsolationDomainsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: L2IsolationDomainsGetInput,
    outputSchema: L2IsolationDomainsGetOutput,
  }),
);
// Input Schema
export const L2IsolationDomainsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l2IsolationDomains",
    }),
  );
export type L2IsolationDomainsListByResourceGroupInput =
  typeof L2IsolationDomainsListByResourceGroupInput.Type;

// Output Schema
export const L2IsolationDomainsListByResourceGroupOutput =
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
export type L2IsolationDomainsListByResourceGroupOutput =
  typeof L2IsolationDomainsListByResourceGroupOutput.Type;

// The operation
/**
 * Displays L2IsolationDomains list by resource group GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const L2IsolationDomainsListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: L2IsolationDomainsListByResourceGroupInput,
    outputSchema: L2IsolationDomainsListByResourceGroupOutput,
  }));
// Input Schema
export const L2IsolationDomainsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ManagedNetworkFabric/l2IsolationDomains",
    }),
  );
export type L2IsolationDomainsListBySubscriptionInput =
  typeof L2IsolationDomainsListBySubscriptionInput.Type;

// Output Schema
export const L2IsolationDomainsListBySubscriptionOutput =
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
export type L2IsolationDomainsListBySubscriptionOutput =
  typeof L2IsolationDomainsListBySubscriptionOutput.Type;

// The operation
/**
 * Displays L2IsolationDomains list by subscription GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const L2IsolationDomainsListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: L2IsolationDomainsListBySubscriptionInput,
    outputSchema: L2IsolationDomainsListBySubscriptionOutput,
  }));
// Input Schema
export const L2IsolationDomainsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    l2IsolationDomainName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l2IsolationDomains/{l2IsolationDomainName}",
    }),
  );
export type L2IsolationDomainsUpdateInput =
  typeof L2IsolationDomainsUpdateInput.Type;

// Output Schema
export const L2IsolationDomainsUpdateOutput =
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
export type L2IsolationDomainsUpdateOutput =
  typeof L2IsolationDomainsUpdateOutput.Type;

// The operation
/**
 * API to update certain properties of the L2 Isolation Domain resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param l2IsolationDomainName - Name of the L2 Isolation Domain.
 */
export const L2IsolationDomainsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: L2IsolationDomainsUpdateInput,
    outputSchema: L2IsolationDomainsUpdateOutput,
  }),
);
// Input Schema
export const L2IsolationDomainsUpdateAdministrativeStateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    l2IsolationDomainName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l2IsolationDomains/{l2IsolationDomainName}/updateAdministrativeState",
    }),
  );
export type L2IsolationDomainsUpdateAdministrativeStateInput =
  typeof L2IsolationDomainsUpdateAdministrativeStateInput.Type;

// Output Schema
export const L2IsolationDomainsUpdateAdministrativeStateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
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
        }),
      ),
    ),
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
    resourceId: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        successfulResources: Schema.optional(Schema.Array(Schema.String)),
        failedResources: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
  });
export type L2IsolationDomainsUpdateAdministrativeStateOutput =
  typeof L2IsolationDomainsUpdateAdministrativeStateOutput.Type;

// The operation
/**
 * Enables isolation domain across the fabric or on specified racks.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param l2IsolationDomainName - Name of the L2 Isolation Domain.
 */
export const L2IsolationDomainsUpdateAdministrativeState =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: L2IsolationDomainsUpdateAdministrativeStateInput,
    outputSchema: L2IsolationDomainsUpdateAdministrativeStateOutput,
  }));
// Input Schema
export const L2IsolationDomainsValidateConfigurationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    l2IsolationDomainName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l2IsolationDomains/{l2IsolationDomainName}/validateConfiguration",
    }),
  );
export type L2IsolationDomainsValidateConfigurationInput =
  typeof L2IsolationDomainsValidateConfigurationInput.Type;

// Output Schema
export const L2IsolationDomainsValidateConfigurationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type L2IsolationDomainsValidateConfigurationOutput =
  typeof L2IsolationDomainsValidateConfigurationOutput.Type;

// The operation
/**
 * Validates the configuration of the resources.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param l2IsolationDomainName - Name of the L2 Isolation Domain.
 */
export const L2IsolationDomainsValidateConfiguration =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: L2IsolationDomainsValidateConfigurationInput,
    outputSchema: L2IsolationDomainsValidateConfigurationOutput,
  }));
// Input Schema
export const L3IsolationDomainsCommitConfigurationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    l3IsolationDomainName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l3IsolationDomains/{l3IsolationDomainName}/commitConfiguration",
    }),
  );
export type L3IsolationDomainsCommitConfigurationInput =
  typeof L3IsolationDomainsCommitConfigurationInput.Type;

// Output Schema
export const L3IsolationDomainsCommitConfigurationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type L3IsolationDomainsCommitConfigurationOutput =
  typeof L3IsolationDomainsCommitConfigurationOutput.Type;

// The operation
/**
 * Commits the configuration of the given resources.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param l3IsolationDomainName - Name of the L3 Isolation Domain.
 */
export const L3IsolationDomainsCommitConfiguration =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: L3IsolationDomainsCommitConfigurationInput,
    outputSchema: L3IsolationDomainsCommitConfigurationOutput,
  }));
// Input Schema
export const L3IsolationDomainsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    l3IsolationDomainName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l3IsolationDomains/{l3IsolationDomainName}",
    }),
  );
export type L3IsolationDomainsCreateInput =
  typeof L3IsolationDomainsCreateInput.Type;

// Output Schema
export const L3IsolationDomainsCreateOutput =
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
export type L3IsolationDomainsCreateOutput =
  typeof L3IsolationDomainsCreateOutput.Type;

// The operation
/**
 * Create isolation domain resources for layer 3 connectivity between compute nodes and for communication with external services .This configuration is applied on the devices only after the creation of networks is completed and isolation domain is enabled.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param l3IsolationDomainName - Name of the L3 Isolation Domain.
 */
export const L3IsolationDomainsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: L3IsolationDomainsCreateInput,
    outputSchema: L3IsolationDomainsCreateOutput,
  }),
);
// Input Schema
export const L3IsolationDomainsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    l3IsolationDomainName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l3IsolationDomains/{l3IsolationDomainName}",
    }),
  );
export type L3IsolationDomainsDeleteInput =
  typeof L3IsolationDomainsDeleteInput.Type;

// Output Schema
export const L3IsolationDomainsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type L3IsolationDomainsDeleteOutput =
  typeof L3IsolationDomainsDeleteOutput.Type;

// The operation
/**
 * Deletes layer 3 connectivity between compute nodes by managed by named L3 Isolation name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param l3IsolationDomainName - Name of the L3 Isolation Domain.
 */
export const L3IsolationDomainsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: L3IsolationDomainsDeleteInput,
    outputSchema: L3IsolationDomainsDeleteOutput,
  }),
);
// Input Schema
export const L3IsolationDomainsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    l3IsolationDomainName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l3IsolationDomains/{l3IsolationDomainName}",
    }),
  );
export type L3IsolationDomainsGetInput = typeof L3IsolationDomainsGetInput.Type;

// Output Schema
export const L3IsolationDomainsGetOutput =
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
export type L3IsolationDomainsGetOutput =
  typeof L3IsolationDomainsGetOutput.Type;

// The operation
/**
 * Retrieves details of this L3 Isolation Domain.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param l3IsolationDomainName - Name of the L3 Isolation Domain.
 */
export const L3IsolationDomainsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: L3IsolationDomainsGetInput,
    outputSchema: L3IsolationDomainsGetOutput,
  }),
);
// Input Schema
export const L3IsolationDomainsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l3IsolationDomains",
    }),
  );
export type L3IsolationDomainsListByResourceGroupInput =
  typeof L3IsolationDomainsListByResourceGroupInput.Type;

// Output Schema
export const L3IsolationDomainsListByResourceGroupOutput =
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
export type L3IsolationDomainsListByResourceGroupOutput =
  typeof L3IsolationDomainsListByResourceGroupOutput.Type;

// The operation
/**
 * Displays L3IsolationDomains list by resource group GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const L3IsolationDomainsListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: L3IsolationDomainsListByResourceGroupInput,
    outputSchema: L3IsolationDomainsListByResourceGroupOutput,
  }));
// Input Schema
export const L3IsolationDomainsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ManagedNetworkFabric/l3IsolationDomains",
    }),
  );
export type L3IsolationDomainsListBySubscriptionInput =
  typeof L3IsolationDomainsListBySubscriptionInput.Type;

// Output Schema
export const L3IsolationDomainsListBySubscriptionOutput =
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
export type L3IsolationDomainsListBySubscriptionOutput =
  typeof L3IsolationDomainsListBySubscriptionOutput.Type;

// The operation
/**
 * Displays L3IsolationDomains list by subscription GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const L3IsolationDomainsListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: L3IsolationDomainsListBySubscriptionInput,
    outputSchema: L3IsolationDomainsListBySubscriptionOutput,
  }));
// Input Schema
export const L3IsolationDomainsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    l3IsolationDomainName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l3IsolationDomains/{l3IsolationDomainName}",
    }),
  );
export type L3IsolationDomainsUpdateInput =
  typeof L3IsolationDomainsUpdateInput.Type;

// Output Schema
export const L3IsolationDomainsUpdateOutput =
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
export type L3IsolationDomainsUpdateOutput =
  typeof L3IsolationDomainsUpdateOutput.Type;

// The operation
/**
 * API to update certain properties of the L3 Isolation Domain resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param l3IsolationDomainName - Name of the L3 Isolation Domain.
 */
export const L3IsolationDomainsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: L3IsolationDomainsUpdateInput,
    outputSchema: L3IsolationDomainsUpdateOutput,
  }),
);
// Input Schema
export const L3IsolationDomainsUpdateAdministrativeStateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    l3IsolationDomainName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l3IsolationDomains/{l3IsolationDomainName}/updateAdministrativeState",
    }),
  );
export type L3IsolationDomainsUpdateAdministrativeStateInput =
  typeof L3IsolationDomainsUpdateAdministrativeStateInput.Type;

// Output Schema
export const L3IsolationDomainsUpdateAdministrativeStateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
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
        }),
      ),
    ),
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
    resourceId: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        successfulResources: Schema.optional(Schema.Array(Schema.String)),
        failedResources: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
  });
export type L3IsolationDomainsUpdateAdministrativeStateOutput =
  typeof L3IsolationDomainsUpdateAdministrativeStateOutput.Type;

// The operation
/**
 * Updates the administrative state of the L3 Isolation Domain resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param l3IsolationDomainName - Name of the L3 Isolation Domain.
 */
export const L3IsolationDomainsUpdateAdministrativeState =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: L3IsolationDomainsUpdateAdministrativeStateInput,
    outputSchema: L3IsolationDomainsUpdateAdministrativeStateOutput,
  }));
// Input Schema
export const L3IsolationDomainsValidateConfigurationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    l3IsolationDomainName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l3IsolationDomains/{l3IsolationDomainName}/validateConfiguration",
    }),
  );
export type L3IsolationDomainsValidateConfigurationInput =
  typeof L3IsolationDomainsValidateConfigurationInput.Type;

// Output Schema
export const L3IsolationDomainsValidateConfigurationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type L3IsolationDomainsValidateConfigurationOutput =
  typeof L3IsolationDomainsValidateConfigurationOutput.Type;

// The operation
/**
 * Validates the configuration of the resources.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param l3IsolationDomainName - Name of the L3 Isolation Domain.
 */
export const L3IsolationDomainsValidateConfiguration =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: L3IsolationDomainsValidateConfigurationInput,
    outputSchema: L3IsolationDomainsValidateConfigurationOutput,
  }));
// Input Schema
export const NeighborGroupsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    neighborGroupName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/neighborGroups/{neighborGroupName}",
    }),
  );
export type NeighborGroupsCreateInput = typeof NeighborGroupsCreateInput.Type;

// Output Schema
export const NeighborGroupsCreateOutput =
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
export type NeighborGroupsCreateOutput = typeof NeighborGroupsCreateOutput.Type;

// The operation
/**
 * Implements the Neighbor Group PUT method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param neighborGroupName - Name of the Neighbor Group.
 */
export const NeighborGroupsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NeighborGroupsCreateInput,
    outputSchema: NeighborGroupsCreateOutput,
  }),
);
// Input Schema
export const NeighborGroupsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    neighborGroupName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/neighborGroups/{neighborGroupName}",
    }),
  );
export type NeighborGroupsDeleteInput = typeof NeighborGroupsDeleteInput.Type;

// Output Schema
export const NeighborGroupsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type NeighborGroupsDeleteOutput = typeof NeighborGroupsDeleteOutput.Type;

// The operation
/**
 * Implements Neighbor Group DELETE method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param neighborGroupName - Name of the Neighbor Group.
 */
export const NeighborGroupsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NeighborGroupsDeleteInput,
    outputSchema: NeighborGroupsDeleteOutput,
  }),
);
// Input Schema
export const NeighborGroupsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    neighborGroupName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/neighborGroups/{neighborGroupName}",
  }),
);
export type NeighborGroupsGetInput = typeof NeighborGroupsGetInput.Type;

// Output Schema
export const NeighborGroupsGetOutput =
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
export type NeighborGroupsGetOutput = typeof NeighborGroupsGetOutput.Type;

// The operation
/**
 * Gets the Neighbor Group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param neighborGroupName - Name of the Neighbor Group.
 */
export const NeighborGroupsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: NeighborGroupsGetInput,
  outputSchema: NeighborGroupsGetOutput,
}));
// Input Schema
export const NeighborGroupsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/neighborGroups",
    }),
  );
export type NeighborGroupsListByResourceGroupInput =
  typeof NeighborGroupsListByResourceGroupInput.Type;

// Output Schema
export const NeighborGroupsListByResourceGroupOutput =
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
export type NeighborGroupsListByResourceGroupOutput =
  typeof NeighborGroupsListByResourceGroupOutput.Type;

// The operation
/**
 * Displays NeighborGroups list by resource group GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const NeighborGroupsListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NeighborGroupsListByResourceGroupInput,
    outputSchema: NeighborGroupsListByResourceGroupOutput,
  }));
// Input Schema
export const NeighborGroupsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ManagedNetworkFabric/neighborGroups",
    }),
  );
export type NeighborGroupsListBySubscriptionInput =
  typeof NeighborGroupsListBySubscriptionInput.Type;

// Output Schema
export const NeighborGroupsListBySubscriptionOutput =
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
export type NeighborGroupsListBySubscriptionOutput =
  typeof NeighborGroupsListBySubscriptionOutput.Type;

// The operation
/**
 * Displays NeighborGroups list by subscription GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const NeighborGroupsListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NeighborGroupsListBySubscriptionInput,
    outputSchema: NeighborGroupsListBySubscriptionOutput,
  }));
// Input Schema
export const NeighborGroupsResyncInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    neighborGroupName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/neighborGroups/{neighborGroupName}/resync",
    }),
  );
export type NeighborGroupsResyncInput = typeof NeighborGroupsResyncInput.Type;

// Output Schema
export const NeighborGroupsResyncOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
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
        }),
      ),
    ),
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
    resourceId: Schema.optional(Schema.String),
  });
export type NeighborGroupsResyncOutput = typeof NeighborGroupsResyncOutput.Type;

// The operation
/**
 * Resync the Neighbor Group after a configuration change.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param neighborGroupName - Name of the Neighbor Group.
 */
export const NeighborGroupsResync = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NeighborGroupsResyncInput,
    outputSchema: NeighborGroupsResyncOutput,
  }),
);
// Input Schema
export const NeighborGroupsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    neighborGroupName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/neighborGroups/{neighborGroupName}",
    }),
  );
export type NeighborGroupsUpdateInput = typeof NeighborGroupsUpdateInput.Type;

// Output Schema
export const NeighborGroupsUpdateOutput =
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
export type NeighborGroupsUpdateOutput = typeof NeighborGroupsUpdateOutput.Type;

// The operation
/**
 * Updates the Neighbor Group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param neighborGroupName - Name of the Neighbor Group.
 */
export const NeighborGroupsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NeighborGroupsUpdateInput,
    outputSchema: NeighborGroupsUpdateOutput,
  }),
);
// Input Schema
export const NetworkBootstrapDevicesCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkBootstrapDeviceName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkBootstrapDevices/{networkBootstrapDeviceName}",
    }),
  );
export type NetworkBootstrapDevicesCreateInput =
  typeof NetworkBootstrapDevicesCreateInput.Type;

// Output Schema
export const NetworkBootstrapDevicesCreateOutput =
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
export type NetworkBootstrapDevicesCreateOutput =
  typeof NetworkBootstrapDevicesCreateOutput.Type;

// The operation
/**
 * Creates a Network Bootstrap Device resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkBootstrapDeviceName - Name of the Network Bootstrap Device.
 */
export const NetworkBootstrapDevicesCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkBootstrapDevicesCreateInput,
    outputSchema: NetworkBootstrapDevicesCreateOutput,
  }));
// Input Schema
export const NetworkBootstrapDevicesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkBootstrapDeviceName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkBootstrapDevices/{networkBootstrapDeviceName}",
    }),
  );
export type NetworkBootstrapDevicesDeleteInput =
  typeof NetworkBootstrapDevicesDeleteInput.Type;

// Output Schema
export const NetworkBootstrapDevicesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type NetworkBootstrapDevicesDeleteOutput =
  typeof NetworkBootstrapDevicesDeleteOutput.Type;

// The operation
/**
 * Deletes a Network Bootstrap Device resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkBootstrapDeviceName - Name of the Network Bootstrap Device.
 */
export const NetworkBootstrapDevicesDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkBootstrapDevicesDeleteInput,
    outputSchema: NetworkBootstrapDevicesDeleteOutput,
  }));
// Input Schema
export const NetworkBootstrapDevicesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkBootstrapDeviceName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkBootstrapDevices/{networkBootstrapDeviceName}",
    }),
  );
export type NetworkBootstrapDevicesGetInput =
  typeof NetworkBootstrapDevicesGetInput.Type;

// Output Schema
export const NetworkBootstrapDevicesGetOutput =
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
export type NetworkBootstrapDevicesGetOutput =
  typeof NetworkBootstrapDevicesGetOutput.Type;

// The operation
/**
 * Gets a Network Bootstrap Device resource details.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkBootstrapDeviceName - Name of the Network Bootstrap Device.
 */
export const NetworkBootstrapDevicesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NetworkBootstrapDevicesGetInput,
    outputSchema: NetworkBootstrapDevicesGetOutput,
  }),
);
// Input Schema
export const NetworkBootstrapDevicesListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkBootstrapDevices",
    }),
  );
export type NetworkBootstrapDevicesListByResourceGroupInput =
  typeof NetworkBootstrapDevicesListByResourceGroupInput.Type;

// Output Schema
export const NetworkBootstrapDevicesListByResourceGroupOutput =
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
export type NetworkBootstrapDevicesListByResourceGroupOutput =
  typeof NetworkBootstrapDevicesListByResourceGroupOutput.Type;

// The operation
/**
 * Lists all the Network Bootstrap Device resources in a given resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const NetworkBootstrapDevicesListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkBootstrapDevicesListByResourceGroupInput,
    outputSchema: NetworkBootstrapDevicesListByResourceGroupOutput,
  }));
// Input Schema
export const NetworkBootstrapDevicesListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ManagedNetworkFabric/networkBootstrapDevices",
    }),
  );
export type NetworkBootstrapDevicesListBySubscriptionInput =
  typeof NetworkBootstrapDevicesListBySubscriptionInput.Type;

// Output Schema
export const NetworkBootstrapDevicesListBySubscriptionOutput =
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
export type NetworkBootstrapDevicesListBySubscriptionOutput =
  typeof NetworkBootstrapDevicesListBySubscriptionOutput.Type;

// The operation
/**
 * List all the Network Bootstrap Device resources in a given subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const NetworkBootstrapDevicesListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkBootstrapDevicesListBySubscriptionInput,
    outputSchema: NetworkBootstrapDevicesListBySubscriptionOutput,
  }));
// Input Schema
export const NetworkBootstrapDevicesRebootInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkBootstrapDeviceName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkBootstrapDevices/{networkBootstrapDeviceName}/reboot",
    }),
  );
export type NetworkBootstrapDevicesRebootInput =
  typeof NetworkBootstrapDevicesRebootInput.Type;

// Output Schema
export const NetworkBootstrapDevicesRebootOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
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
        }),
      ),
    ),
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
    resourceId: Schema.optional(Schema.String),
  });
export type NetworkBootstrapDevicesRebootOutput =
  typeof NetworkBootstrapDevicesRebootOutput.Type;

// The operation
/**
 * Reboot the Network Bootstrap Device.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkBootstrapDeviceName - Name of the Network Bootstrap Device.
 */
export const NetworkBootstrapDevicesReboot =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkBootstrapDevicesRebootInput,
    outputSchema: NetworkBootstrapDevicesRebootOutput,
  }));
// Input Schema
export const NetworkBootstrapDevicesRefreshConfigurationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkBootstrapDeviceName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkBootstrapDevices/{networkBootstrapDeviceName}/refreshConfiguration",
    }),
  );
export type NetworkBootstrapDevicesRefreshConfigurationInput =
  typeof NetworkBootstrapDevicesRefreshConfigurationInput.Type;

// Output Schema
export const NetworkBootstrapDevicesRefreshConfigurationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
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
        }),
      ),
    ),
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
    resourceId: Schema.optional(Schema.String),
  });
export type NetworkBootstrapDevicesRefreshConfigurationOutput =
  typeof NetworkBootstrapDevicesRefreshConfigurationOutput.Type;

// The operation
/**
 * Refreshes the configuration of Network Bootstrap Device.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkBootstrapDeviceName - Name of the Network Bootstrap Device.
 */
export const NetworkBootstrapDevicesRefreshConfiguration =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkBootstrapDevicesRefreshConfigurationInput,
    outputSchema: NetworkBootstrapDevicesRefreshConfigurationOutput,
  }));
// Input Schema
export const NetworkBootstrapDevicesResyncPasswordsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkBootstrapDeviceName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkBootstrapDevices/{networkBootstrapDeviceName}/resyncPasswords",
    }),
  );
export type NetworkBootstrapDevicesResyncPasswordsInput =
  typeof NetworkBootstrapDevicesResyncPasswordsInput.Type;

// Output Schema
export const NetworkBootstrapDevicesResyncPasswordsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
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
        }),
      ),
    ),
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
    resourceId: Schema.optional(Schema.String),
  });
export type NetworkBootstrapDevicesResyncPasswordsOutput =
  typeof NetworkBootstrapDevicesResyncPasswordsOutput.Type;

// The operation
/**
 * Resync the latest passwords to the Network Bootstrap Device.
 *
 * Updates the Network Bootstrap Device to use the latest passwords. Does not generate new passwords. Allows network bootstrap devices missed during a previous password rotation to be brought back into sync.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkBootstrapDeviceName - Name of the Network Bootstrap Device.
 */
export const NetworkBootstrapDevicesResyncPasswords =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkBootstrapDevicesResyncPasswordsInput,
    outputSchema: NetworkBootstrapDevicesResyncPasswordsOutput,
  }));
// Input Schema
export const NetworkBootstrapDevicesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkBootstrapDeviceName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkBootstrapDevices/{networkBootstrapDeviceName}",
    }),
  );
export type NetworkBootstrapDevicesUpdateInput =
  typeof NetworkBootstrapDevicesUpdateInput.Type;

// Output Schema
export const NetworkBootstrapDevicesUpdateOutput =
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
export type NetworkBootstrapDevicesUpdateOutput =
  typeof NetworkBootstrapDevicesUpdateOutput.Type;

// The operation
/**
 * Update certain properties of the Network Bootstrap Device resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkBootstrapDeviceName - Name of the Network Bootstrap Device.
 */
export const NetworkBootstrapDevicesUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkBootstrapDevicesUpdateInput,
    outputSchema: NetworkBootstrapDevicesUpdateOutput,
  }));
// Input Schema
export const NetworkBootstrapDevicesUpdateAdministrativeStateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkBootstrapDeviceName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkBootstrapDevices/{networkBootstrapDeviceName}/updateAdministrativeState",
    }),
  );
export type NetworkBootstrapDevicesUpdateAdministrativeStateInput =
  typeof NetworkBootstrapDevicesUpdateAdministrativeStateInput.Type;

// Output Schema
export const NetworkBootstrapDevicesUpdateAdministrativeStateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
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
        }),
      ),
    ),
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
    resourceId: Schema.optional(Schema.String),
  });
export type NetworkBootstrapDevicesUpdateAdministrativeStateOutput =
  typeof NetworkBootstrapDevicesUpdateAdministrativeStateOutput.Type;

// The operation
/**
 * Updates the Administrative state of the Network Bootstrap Device.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkBootstrapDeviceName - Name of the Network Bootstrap Device.
 */
export const NetworkBootstrapDevicesUpdateAdministrativeState =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkBootstrapDevicesUpdateAdministrativeStateInput,
    outputSchema: NetworkBootstrapDevicesUpdateAdministrativeStateOutput,
  }));
// Input Schema
export const NetworkBootstrapDevicesUpgradeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkBootstrapDeviceName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkBootstrapDevices/{networkBootstrapDeviceName}/upgrade",
    }),
  );
export type NetworkBootstrapDevicesUpgradeInput =
  typeof NetworkBootstrapDevicesUpgradeInput.Type;

// Output Schema
export const NetworkBootstrapDevicesUpgradeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
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
        }),
      ),
    ),
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
    resourceId: Schema.optional(Schema.String),
  });
export type NetworkBootstrapDevicesUpgradeOutput =
  typeof NetworkBootstrapDevicesUpgradeOutput.Type;

// The operation
/**
 * Upgrades the version of the Network Bootstrap Device.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkBootstrapDeviceName - Name of the Network Bootstrap Device.
 */
export const NetworkBootstrapDevicesUpgrade =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkBootstrapDevicesUpgradeInput,
    outputSchema: NetworkBootstrapDevicesUpgradeOutput,
  }));
// Input Schema
export const NetworkBootstrapInterfacesCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkBootstrapDeviceName: Schema.String.pipe(T.PathParam()),
    networkBootstrapInterfaceName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkBootstrapDevices/{networkBootstrapDeviceName}/networkBootstrapInterfaces/{networkBootstrapInterfaceName}",
    }),
  );
export type NetworkBootstrapInterfacesCreateInput =
  typeof NetworkBootstrapInterfacesCreateInput.Type;

// Output Schema
export const NetworkBootstrapInterfacesCreateOutput =
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
export type NetworkBootstrapInterfacesCreateOutput =
  typeof NetworkBootstrapInterfacesCreateOutput.Type;

// The operation
/**
 * Create a Network Bootstrap Interface resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkBootstrapDeviceName - Name of the Network Bootstrap Device.
 * @param networkBootstrapInterfaceName - Name of the Network Bootstrap Interface.
 */
export const NetworkBootstrapInterfacesCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkBootstrapInterfacesCreateInput,
    outputSchema: NetworkBootstrapInterfacesCreateOutput,
  }));
// Input Schema
export const NetworkBootstrapInterfacesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkBootstrapDeviceName: Schema.String.pipe(T.PathParam()),
    networkBootstrapInterfaceName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkBootstrapDevices/{networkBootstrapDeviceName}/networkBootstrapInterfaces/{networkBootstrapInterfaceName}",
    }),
  );
export type NetworkBootstrapInterfacesDeleteInput =
  typeof NetworkBootstrapInterfacesDeleteInput.Type;

// Output Schema
export const NetworkBootstrapInterfacesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type NetworkBootstrapInterfacesDeleteOutput =
  typeof NetworkBootstrapInterfacesDeleteOutput.Type;

// The operation
/**
 * Delete the Network Bootstrap Interface resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkBootstrapDeviceName - Name of the Network Bootstrap Device.
 * @param networkBootstrapInterfaceName - Name of the Network Bootstrap Interface.
 */
export const NetworkBootstrapInterfacesDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkBootstrapInterfacesDeleteInput,
    outputSchema: NetworkBootstrapInterfacesDeleteOutput,
  }));
// Input Schema
export const NetworkBootstrapInterfacesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkBootstrapDeviceName: Schema.String.pipe(T.PathParam()),
    networkBootstrapInterfaceName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkBootstrapDevices/{networkBootstrapDeviceName}/networkBootstrapInterfaces/{networkBootstrapInterfaceName}",
    }),
  );
export type NetworkBootstrapInterfacesGetInput =
  typeof NetworkBootstrapInterfacesGetInput.Type;

// Output Schema
export const NetworkBootstrapInterfacesGetOutput =
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
export type NetworkBootstrapInterfacesGetOutput =
  typeof NetworkBootstrapInterfacesGetOutput.Type;

// The operation
/**
 * Get the Network Bootstrap Interface resource details.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkBootstrapDeviceName - Name of the Network Bootstrap Device.
 * @param networkBootstrapInterfaceName - Name of the Network Bootstrap Interface.
 */
export const NetworkBootstrapInterfacesGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkBootstrapInterfacesGetInput,
    outputSchema: NetworkBootstrapInterfacesGetOutput,
  }));
// Input Schema
export const NetworkBootstrapInterfacesListByNetworkBootstrapDeviceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkBootstrapDeviceName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkBootstrapDevices/{networkBootstrapDeviceName}/networkBootstrapInterfaces",
    }),
  );
export type NetworkBootstrapInterfacesListByNetworkBootstrapDeviceInput =
  typeof NetworkBootstrapInterfacesListByNetworkBootstrapDeviceInput.Type;

// Output Schema
export const NetworkBootstrapInterfacesListByNetworkBootstrapDeviceOutput =
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
export type NetworkBootstrapInterfacesListByNetworkBootstrapDeviceOutput =
  typeof NetworkBootstrapInterfacesListByNetworkBootstrapDeviceOutput.Type;

// The operation
/**
 * List all the Network Bootstrap Interface resources in a given resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkBootstrapDeviceName - Name of the Network Bootstrap Device.
 */
export const NetworkBootstrapInterfacesListByNetworkBootstrapDevice =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkBootstrapInterfacesListByNetworkBootstrapDeviceInput,
    outputSchema: NetworkBootstrapInterfacesListByNetworkBootstrapDeviceOutput,
  }));
// Input Schema
export const NetworkBootstrapInterfacesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkBootstrapDeviceName: Schema.String.pipe(T.PathParam()),
    networkBootstrapInterfaceName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkBootstrapDevices/{networkBootstrapDeviceName}/networkBootstrapInterfaces/{networkBootstrapInterfaceName}",
    }),
  );
export type NetworkBootstrapInterfacesUpdateInput =
  typeof NetworkBootstrapInterfacesUpdateInput.Type;

// Output Schema
export const NetworkBootstrapInterfacesUpdateOutput =
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
export type NetworkBootstrapInterfacesUpdateOutput =
  typeof NetworkBootstrapInterfacesUpdateOutput.Type;

// The operation
/**
 * Update certain properties of the Network Bootstrap Interface resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkBootstrapDeviceName - Name of the Network Bootstrap Device.
 * @param networkBootstrapInterfaceName - Name of the Network Bootstrap Interface.
 */
export const NetworkBootstrapInterfacesUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkBootstrapInterfacesUpdateInput,
    outputSchema: NetworkBootstrapInterfacesUpdateOutput,
  }));
// Input Schema
export const NetworkBootstrapInterfacesUpdateAdministrativeStateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkBootstrapDeviceName: Schema.String.pipe(T.PathParam()),
    networkBootstrapInterfaceName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkBootstrapDevices/{networkBootstrapDeviceName}/networkBootstrapInterfaces/{networkBootstrapInterfaceName}/updateAdministrativeState",
    }),
  );
export type NetworkBootstrapInterfacesUpdateAdministrativeStateInput =
  typeof NetworkBootstrapInterfacesUpdateAdministrativeStateInput.Type;

// Output Schema
export const NetworkBootstrapInterfacesUpdateAdministrativeStateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type NetworkBootstrapInterfacesUpdateAdministrativeStateOutput =
  typeof NetworkBootstrapInterfacesUpdateAdministrativeStateOutput.Type;

// The operation
/**
 * Update the admin state of the Network Interface.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkBootstrapDeviceName - Name of the Network Bootstrap Device.
 * @param networkBootstrapInterfaceName - Name of the Network Bootstrap Interface.
 */
export const NetworkBootstrapInterfacesUpdateAdministrativeState =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkBootstrapInterfacesUpdateAdministrativeStateInput,
    outputSchema: NetworkBootstrapInterfacesUpdateAdministrativeStateOutput,
  }));
// Input Schema
export const NetworkDevicesCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkDeviceName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkDevices/{networkDeviceName}",
    }),
  );
export type NetworkDevicesCreateInput = typeof NetworkDevicesCreateInput.Type;

// Output Schema
export const NetworkDevicesCreateOutput =
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
export type NetworkDevicesCreateOutput = typeof NetworkDevicesCreateOutput.Type;

// The operation
/**
 * Create a Network Device resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkDeviceName - Name of the Network Device.
 */
export const NetworkDevicesCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NetworkDevicesCreateInput,
    outputSchema: NetworkDevicesCreateOutput,
  }),
);
// Input Schema
export const NetworkDevicesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkDeviceName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkDevices/{networkDeviceName}",
    }),
  );
export type NetworkDevicesDeleteInput = typeof NetworkDevicesDeleteInput.Type;

// Output Schema
export const NetworkDevicesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type NetworkDevicesDeleteOutput = typeof NetworkDevicesDeleteOutput.Type;

// The operation
/**
 * Delete the Network Device resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkDeviceName - Name of the Network Device.
 */
export const NetworkDevicesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NetworkDevicesDeleteInput,
    outputSchema: NetworkDevicesDeleteOutput,
  }),
);
// Input Schema
export const NetworkDevicesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkDeviceName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkDevices/{networkDeviceName}",
  }),
);
export type NetworkDevicesGetInput = typeof NetworkDevicesGetInput.Type;

// Output Schema
export const NetworkDevicesGetOutput =
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
export type NetworkDevicesGetOutput = typeof NetworkDevicesGetOutput.Type;

// The operation
/**
 * Gets the Network Device resource details.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkDeviceName - Name of the Network Device.
 */
export const NetworkDevicesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: NetworkDevicesGetInput,
  outputSchema: NetworkDevicesGetOutput,
}));
// Input Schema
export const NetworkDeviceSkusGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    networkDeviceSkuName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ManagedNetworkFabric/networkDeviceSkus/{networkDeviceSkuName}",
    }),
  );
export type NetworkDeviceSkusGetInput = typeof NetworkDeviceSkusGetInput.Type;

// Output Schema
export const NetworkDeviceSkusGetOutput =
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
export type NetworkDeviceSkusGetOutput = typeof NetworkDeviceSkusGetOutput.Type;

// The operation
/**
 * Get a Network Device SKU details.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param networkDeviceSkuName - Name of the Network Device SKU.
 */
export const NetworkDeviceSkusGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NetworkDeviceSkusGetInput,
    outputSchema: NetworkDeviceSkusGetOutput,
  }),
);
// Input Schema
export const NetworkDeviceSkusListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ManagedNetworkFabric/networkDeviceSkus",
    }),
  );
export type NetworkDeviceSkusListBySubscriptionInput =
  typeof NetworkDeviceSkusListBySubscriptionInput.Type;

// Output Schema
export const NetworkDeviceSkusListBySubscriptionOutput =
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
export type NetworkDeviceSkusListBySubscriptionOutput =
  typeof NetworkDeviceSkusListBySubscriptionOutput.Type;

// The operation
/**
 * List Network Device SKUs for the given subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const NetworkDeviceSkusListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkDeviceSkusListBySubscriptionInput,
    outputSchema: NetworkDeviceSkusListBySubscriptionOutput,
  }));
// Input Schema
export const NetworkDevicesListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkDevices",
    }),
  );
export type NetworkDevicesListByResourceGroupInput =
  typeof NetworkDevicesListByResourceGroupInput.Type;

// Output Schema
export const NetworkDevicesListByResourceGroupOutput =
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
export type NetworkDevicesListByResourceGroupOutput =
  typeof NetworkDevicesListByResourceGroupOutput.Type;

// The operation
/**
 * List all the Network Device resources in a given resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const NetworkDevicesListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkDevicesListByResourceGroupInput,
    outputSchema: NetworkDevicesListByResourceGroupOutput,
  }));
// Input Schema
export const NetworkDevicesListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ManagedNetworkFabric/networkDevices",
    }),
  );
export type NetworkDevicesListBySubscriptionInput =
  typeof NetworkDevicesListBySubscriptionInput.Type;

// Output Schema
export const NetworkDevicesListBySubscriptionOutput =
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
export type NetworkDevicesListBySubscriptionOutput =
  typeof NetworkDevicesListBySubscriptionOutput.Type;

// The operation
/**
 * List all the Network Device resources in a given subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const NetworkDevicesListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkDevicesListBySubscriptionInput,
    outputSchema: NetworkDevicesListBySubscriptionOutput,
  }));
// Input Schema
export const NetworkDevicesRebootInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkDeviceName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkDevices/{networkDeviceName}/reboot",
    }),
  );
export type NetworkDevicesRebootInput = typeof NetworkDevicesRebootInput.Type;

// Output Schema
export const NetworkDevicesRebootOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type NetworkDevicesRebootOutput = typeof NetworkDevicesRebootOutput.Type;

// The operation
/**
 * Reboot the Network Device.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkDeviceName - Name of the Network Device.
 */
export const NetworkDevicesReboot = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NetworkDevicesRebootInput,
    outputSchema: NetworkDevicesRebootOutput,
  }),
);
// Input Schema
export const NetworkDevicesRefreshConfigurationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkDeviceName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkDevices/{networkDeviceName}/refreshConfiguration",
    }),
  );
export type NetworkDevicesRefreshConfigurationInput =
  typeof NetworkDevicesRefreshConfigurationInput.Type;

// Output Schema
export const NetworkDevicesRefreshConfigurationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
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
        }),
      ),
    ),
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
    resourceId: Schema.optional(Schema.String),
  });
export type NetworkDevicesRefreshConfigurationOutput =
  typeof NetworkDevicesRefreshConfigurationOutput.Type;

// The operation
/**
 * Refreshes the configuration the Network Device.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkDeviceName - Name of the Network Device.
 */
export const NetworkDevicesRefreshConfiguration =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkDevicesRefreshConfigurationInput,
    outputSchema: NetworkDevicesRefreshConfigurationOutput,
  }));
// Input Schema
export const NetworkDevicesResyncCertificatesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkDeviceName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkDevices/{networkDeviceName}/resyncCertificates",
    }),
  );
export type NetworkDevicesResyncCertificatesInput =
  typeof NetworkDevicesResyncCertificatesInput.Type;

// Output Schema
export const NetworkDevicesResyncCertificatesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
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
        }),
      ),
    ),
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
    resourceId: Schema.optional(Schema.String),
  });
export type NetworkDevicesResyncCertificatesOutput =
  typeof NetworkDevicesResyncCertificatesOutput.Type;

// The operation
/**
 * Resync the latest certificates to the Network Device.
 *
 * Updates the Network Device to use the latest certificates. Does not generate new certificates. Allows network devices missed during a previous certificate rotation to be brought back into sync.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkDeviceName - Name of the Network Device.
 */
export const NetworkDevicesResyncCertificates =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkDevicesResyncCertificatesInput,
    outputSchema: NetworkDevicesResyncCertificatesOutput,
  }));
// Input Schema
export const NetworkDevicesResyncPasswordsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkDeviceName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkDevices/{networkDeviceName}/resyncPasswords",
    }),
  );
export type NetworkDevicesResyncPasswordsInput =
  typeof NetworkDevicesResyncPasswordsInput.Type;

// Output Schema
export const NetworkDevicesResyncPasswordsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
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
        }),
      ),
    ),
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
    resourceId: Schema.optional(Schema.String),
  });
export type NetworkDevicesResyncPasswordsOutput =
  typeof NetworkDevicesResyncPasswordsOutput.Type;

// The operation
/**
 * Resync the latest passwords to the Network Device.
 *
 * Updates the Network Device to use the latest passwords. Does not generate new passwords. Allows network devices missed during a previous password rotation to be brought back into sync.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkDeviceName - Name of the Network Device.
 */
export const NetworkDevicesResyncPasswords =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkDevicesResyncPasswordsInput,
    outputSchema: NetworkDevicesResyncPasswordsOutput,
  }));
// Input Schema
export const NetworkDevicesRunRoCommandInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkDeviceName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkDevices/{networkDeviceName}/runRoCommand",
    }),
  );
export type NetworkDevicesRunRoCommandInput =
  typeof NetworkDevicesRunRoCommandInput.Type;

// Output Schema
export const NetworkDevicesRunRoCommandOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type NetworkDevicesRunRoCommandOutput =
  typeof NetworkDevicesRunRoCommandOutput.Type;

// The operation
/**
 * Run the RO Command on the Network Device.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkDeviceName - Name of the Network Device.
 */
export const NetworkDevicesRunRoCommand = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NetworkDevicesRunRoCommandInput,
    outputSchema: NetworkDevicesRunRoCommandOutput,
  }),
);
// Input Schema
export const NetworkDevicesRunRwCommandInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkDeviceName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkDevices/{networkDeviceName}/runRwCommand",
    }),
  );
export type NetworkDevicesRunRwCommandInput =
  typeof NetworkDevicesRunRwCommandInput.Type;

// Output Schema
export const NetworkDevicesRunRwCommandOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
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
        }),
      ),
    ),
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
    resourceId: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        configurationState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Rejected",
            "Accepted",
            "Provisioned",
            "ErrorProvisioning",
            "Deprovisioning",
            "Deprovisioned",
            "ErrorDeprovisioning",
            "DeferredControl",
            "Provisioning",
            "PendingCommit",
            "PendingAdministrativeUpdate",
          ]),
        ),
        outputUrl: Schema.optional(Schema.String),
      }),
    ),
  });
export type NetworkDevicesRunRwCommandOutput =
  typeof NetworkDevicesRunRwCommandOutput.Type;

// The operation
/**
 * Run the RW Command on the Network Device.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkDeviceName - Name of the Network Device.
 */
export const NetworkDevicesRunRwCommand = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NetworkDevicesRunRwCommandInput,
    outputSchema: NetworkDevicesRunRwCommandOutput,
  }),
);
// Input Schema
export const NetworkDevicesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkDeviceName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkDevices/{networkDeviceName}",
    }),
  );
export type NetworkDevicesUpdateInput = typeof NetworkDevicesUpdateInput.Type;

// Output Schema
export const NetworkDevicesUpdateOutput =
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
export type NetworkDevicesUpdateOutput = typeof NetworkDevicesUpdateOutput.Type;

// The operation
/**
 * Update certain properties of the Network Device resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkDeviceName - Name of the Network Device.
 */
export const NetworkDevicesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NetworkDevicesUpdateInput,
    outputSchema: NetworkDevicesUpdateOutput,
  }),
);
// Input Schema
export const NetworkDevicesUpdateAdministrativeStateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkDeviceName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkDevices/{networkDeviceName}/updateAdministrativeState",
    }),
  );
export type NetworkDevicesUpdateAdministrativeStateInput =
  typeof NetworkDevicesUpdateAdministrativeStateInput.Type;

// Output Schema
export const NetworkDevicesUpdateAdministrativeStateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
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
        }),
      ),
    ),
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
    resourceId: Schema.optional(Schema.String),
  });
export type NetworkDevicesUpdateAdministrativeStateOutput =
  typeof NetworkDevicesUpdateAdministrativeStateOutput.Type;

// The operation
/**
 * Updates the Administrative state of the Network Device.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkDeviceName - Name of the Network Device.
 */
export const NetworkDevicesUpdateAdministrativeState =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkDevicesUpdateAdministrativeStateInput,
    outputSchema: NetworkDevicesUpdateAdministrativeStateOutput,
  }));
// Input Schema
export const NetworkDevicesUpgradeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkDeviceName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkDevices/{networkDeviceName}/upgrade",
    }),
  );
export type NetworkDevicesUpgradeInput = typeof NetworkDevicesUpgradeInput.Type;

// Output Schema
export const NetworkDevicesUpgradeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
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
        }),
      ),
    ),
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
    resourceId: Schema.optional(Schema.String),
  });
export type NetworkDevicesUpgradeOutput =
  typeof NetworkDevicesUpgradeOutput.Type;

// The operation
/**
 * Upgrades the version of the Network Device.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkDeviceName - Name of the Network Device.
 */
export const NetworkDevicesUpgrade = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NetworkDevicesUpgradeInput,
    outputSchema: NetworkDevicesUpgradeOutput,
  }),
);
// Input Schema
export const NetworkFabricControllersCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkFabricControllerName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabricControllers/{networkFabricControllerName}",
    }),
  );
export type NetworkFabricControllersCreateInput =
  typeof NetworkFabricControllersCreateInput.Type;

// Output Schema
export const NetworkFabricControllersCreateOutput =
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
export type NetworkFabricControllersCreateOutput =
  typeof NetworkFabricControllersCreateOutput.Type;

// The operation
/**
 * Creates a Network Fabric Controller.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkFabricControllerName - Name of the Network Fabric Controller.
 */
export const NetworkFabricControllersCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkFabricControllersCreateInput,
    outputSchema: NetworkFabricControllersCreateOutput,
  }));
// Input Schema
export const NetworkFabricControllersDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkFabricControllerName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabricControllers/{networkFabricControllerName}",
    }),
  );
export type NetworkFabricControllersDeleteInput =
  typeof NetworkFabricControllersDeleteInput.Type;

// Output Schema
export const NetworkFabricControllersDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type NetworkFabricControllersDeleteOutput =
  typeof NetworkFabricControllersDeleteOutput.Type;

// The operation
/**
 * Deletes the Network Fabric Controller resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkFabricControllerName - Name of the Network Fabric Controller.
 */
export const NetworkFabricControllersDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkFabricControllersDeleteInput,
    outputSchema: NetworkFabricControllersDeleteOutput,
  }));
// Input Schema
export const NetworkFabricControllersGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkFabricControllerName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabricControllers/{networkFabricControllerName}",
    }),
  );
export type NetworkFabricControllersGetInput =
  typeof NetworkFabricControllersGetInput.Type;

// Output Schema
export const NetworkFabricControllersGetOutput =
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
export type NetworkFabricControllersGetOutput =
  typeof NetworkFabricControllersGetOutput.Type;

// The operation
/**
 * Shows the provisioning status of Network Fabric Controller.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkFabricControllerName - Name of the Network Fabric Controller.
 */
export const NetworkFabricControllersGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NetworkFabricControllersGetInput,
    outputSchema: NetworkFabricControllersGetOutput,
  }),
);
// Input Schema
export const NetworkFabricControllersListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabricControllers",
    }),
  );
export type NetworkFabricControllersListByResourceGroupInput =
  typeof NetworkFabricControllersListByResourceGroupInput.Type;

// Output Schema
export const NetworkFabricControllersListByResourceGroupOutput =
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
export type NetworkFabricControllersListByResourceGroupOutput =
  typeof NetworkFabricControllersListByResourceGroupOutput.Type;

// The operation
/**
 * Lists all the NetworkFabricControllers thats available in the resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const NetworkFabricControllersListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkFabricControllersListByResourceGroupInput,
    outputSchema: NetworkFabricControllersListByResourceGroupOutput,
  }));
// Input Schema
export const NetworkFabricControllersListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ManagedNetworkFabric/networkFabricControllers",
    }),
  );
export type NetworkFabricControllersListBySubscriptionInput =
  typeof NetworkFabricControllersListBySubscriptionInput.Type;

// Output Schema
export const NetworkFabricControllersListBySubscriptionOutput =
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
export type NetworkFabricControllersListBySubscriptionOutput =
  typeof NetworkFabricControllersListBySubscriptionOutput.Type;

// The operation
/**
 * Lists all the NetworkFabricControllers by subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const NetworkFabricControllersListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkFabricControllersListBySubscriptionInput,
    outputSchema: NetworkFabricControllersListBySubscriptionOutput,
  }));
// Input Schema
export const NetworkFabricControllersUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkFabricControllerName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabricControllers/{networkFabricControllerName}",
    }),
  );
export type NetworkFabricControllersUpdateInput =
  typeof NetworkFabricControllersUpdateInput.Type;

// Output Schema
export const NetworkFabricControllersUpdateOutput =
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
export type NetworkFabricControllersUpdateOutput =
  typeof NetworkFabricControllersUpdateOutput.Type;

// The operation
/**
 * Updates are currently not supported for the Network Fabric Controller resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkFabricControllerName - Name of the Network Fabric Controller.
 */
export const NetworkFabricControllersUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkFabricControllersUpdateInput,
    outputSchema: NetworkFabricControllersUpdateOutput,
  }));
// Input Schema
export const NetworkFabricsArmConfigurationDiffInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkFabricName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabrics/{networkFabricName}/armConfigurationDiff",
    }),
  );
export type NetworkFabricsArmConfigurationDiffInput =
  typeof NetworkFabricsArmConfigurationDiffInput.Type;

// Output Schema
export const NetworkFabricsArmConfigurationDiffOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
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
        }),
      ),
    ),
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
    resourceId: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        configurationDiffUrl: Schema.optional(Schema.String),
      }),
    ),
  });
export type NetworkFabricsArmConfigurationDiffOutput =
  typeof NetworkFabricsArmConfigurationDiffOutput.Type;

// The operation
/**
 * Post action: Triggers diff of NetworkFabric ARM Configuration.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkFabricName - Name of the Network Fabric.
 */
export const NetworkFabricsArmConfigurationDiff =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkFabricsArmConfigurationDiffInput,
    outputSchema: NetworkFabricsArmConfigurationDiffOutput,
  }));
// Input Schema
export const NetworkFabricsCommitBatchStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkFabricName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabrics/{networkFabricName}/commitBatchStatus",
    }),
  );
export type NetworkFabricsCommitBatchStatusInput =
  typeof NetworkFabricsCommitBatchStatusInput.Type;

// Output Schema
export const NetworkFabricsCommitBatchStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
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
        }),
      ),
    ),
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
    resourceId: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        commitBatchId: Schema.optional(Schema.String),
        commitBatchState: Schema.optional(
          Schema.Literals(["Processing", "Succeeded", "Failed"]),
        ),
        commitBatchDetails: Schema.optional(
          Schema.Struct({
            failedDevices: Schema.optional(Schema.Array(Schema.String)),
          }),
        ),
      }),
    ),
  });
export type NetworkFabricsCommitBatchStatusOutput =
  typeof NetworkFabricsCommitBatchStatusOutput.Type;

// The operation
/**
 * Post action: Returns a status of commit batch operation.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkFabricName - Name of the Network Fabric.
 */
export const NetworkFabricsCommitBatchStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkFabricsCommitBatchStatusInput,
    outputSchema: NetworkFabricsCommitBatchStatusOutput,
  }));
// Input Schema
export const NetworkFabricsCommitConfigurationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkFabricName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabrics/{networkFabricName}/commitConfiguration",
    }),
  );
export type NetworkFabricsCommitConfigurationInput =
  typeof NetworkFabricsCommitConfigurationInput.Type;

// Output Schema
export const NetworkFabricsCommitConfigurationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
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
        }),
      ),
    ),
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
    resourceId: Schema.optional(Schema.String),
  });
export type NetworkFabricsCommitConfigurationOutput =
  typeof NetworkFabricsCommitConfigurationOutput.Type;

// The operation
/**
 * Atomic update of the given Network Fabric instance. Sync update of NFA resources at Fabric level.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkFabricName - Name of the Network Fabric.
 */
export const NetworkFabricsCommitConfiguration =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkFabricsCommitConfigurationInput,
    outputSchema: NetworkFabricsCommitConfigurationOutput,
  }));
// Input Schema
export const NetworkFabricsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkFabricName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabrics/{networkFabricName}",
    }),
  );
export type NetworkFabricsCreateInput = typeof NetworkFabricsCreateInput.Type;

// Output Schema
export const NetworkFabricsCreateOutput =
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
export type NetworkFabricsCreateOutput = typeof NetworkFabricsCreateOutput.Type;

// The operation
/**
 * Create Network Fabric resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkFabricName - Name of the Network Fabric.
 */
export const NetworkFabricsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NetworkFabricsCreateInput,
    outputSchema: NetworkFabricsCreateOutput,
  }),
);
// Input Schema
export const NetworkFabricsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkFabricName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabrics/{networkFabricName}",
    }),
  );
export type NetworkFabricsDeleteInput = typeof NetworkFabricsDeleteInput.Type;

// Output Schema
export const NetworkFabricsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type NetworkFabricsDeleteOutput = typeof NetworkFabricsDeleteOutput.Type;

// The operation
/**
 * Delete Network Fabric resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkFabricName - Name of the Network Fabric.
 */
export const NetworkFabricsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NetworkFabricsDeleteInput,
    outputSchema: NetworkFabricsDeleteOutput,
  }),
);
// Input Schema
export const NetworkFabricsDeprovisionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkFabricName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabrics/{networkFabricName}/deprovision",
    }),
  );
export type NetworkFabricsDeprovisionInput =
  typeof NetworkFabricsDeprovisionInput.Type;

// Output Schema
export const NetworkFabricsDeprovisionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type NetworkFabricsDeprovisionOutput =
  typeof NetworkFabricsDeprovisionOutput.Type;

// The operation
/**
 * Deprovisions the underlying resources in the given Network Fabric instance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkFabricName - Name of the Network Fabric.
 */
export const NetworkFabricsDeprovision = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NetworkFabricsDeprovisionInput,
    outputSchema: NetworkFabricsDeprovisionOutput,
  }),
);
// Input Schema
export const NetworkFabricsDiscardCommitBatchInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkFabricName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabrics/{networkFabricName}/discardCommitBatch",
    }),
  );
export type NetworkFabricsDiscardCommitBatchInput =
  typeof NetworkFabricsDiscardCommitBatchInput.Type;

// Output Schema
export const NetworkFabricsDiscardCommitBatchOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
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
        }),
      ),
    ),
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
    resourceId: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        commitBatchId: Schema.optional(Schema.String),
      }),
    ),
  });
export type NetworkFabricsDiscardCommitBatchOutput =
  typeof NetworkFabricsDiscardCommitBatchOutput.Type;

// The operation
/**
 * Post action: Discards a Batch operation in progress.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkFabricName - Name of the Network Fabric.
 */
export const NetworkFabricsDiscardCommitBatch =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkFabricsDiscardCommitBatchInput,
    outputSchema: NetworkFabricsDiscardCommitBatchOutput,
  }));
// Input Schema
export const NetworkFabricsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkFabricName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabrics/{networkFabricName}",
  }),
);
export type NetworkFabricsGetInput = typeof NetworkFabricsGetInput.Type;

// Output Schema
export const NetworkFabricsGetOutput =
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
export type NetworkFabricsGetOutput = typeof NetworkFabricsGetOutput.Type;

// The operation
/**
 * Get Network Fabric resource details.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkFabricName - Name of the Network Fabric.
 */
export const NetworkFabricsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: NetworkFabricsGetInput,
  outputSchema: NetworkFabricsGetOutput,
}));
// Input Schema
export const NetworkFabricsGetTopologyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkFabricName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabrics/{networkFabricName}/getTopology",
    }),
  );
export type NetworkFabricsGetTopologyInput =
  typeof NetworkFabricsGetTopologyInput.Type;

// Output Schema
export const NetworkFabricsGetTopologyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
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
        }),
      ),
    ),
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
    resourceId: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        url: Schema.optional(Schema.String),
      }),
    ),
  });
export type NetworkFabricsGetTopologyOutput =
  typeof NetworkFabricsGetTopologyOutput.Type;

// The operation
/**
 * Gets Topology of the underlying resources in the given Network Fabric instance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkFabricName - Name of the Network Fabric.
 */
export const NetworkFabricsGetTopology = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NetworkFabricsGetTopologyInput,
    outputSchema: NetworkFabricsGetTopologyOutput,
  }),
);
// Input Schema
export const NetworkFabricSkusGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    networkFabricSkuName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ManagedNetworkFabric/networkFabricSkus/{networkFabricSkuName}",
    }),
  );
export type NetworkFabricSkusGetInput = typeof NetworkFabricSkusGetInput.Type;

// Output Schema
export const NetworkFabricSkusGetOutput =
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
export type NetworkFabricSkusGetOutput = typeof NetworkFabricSkusGetOutput.Type;

// The operation
/**
 * Implements Network Fabric SKU GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param networkFabricSkuName - Name of the Network Fabric SKU.
 */
export const NetworkFabricSkusGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NetworkFabricSkusGetInput,
    outputSchema: NetworkFabricSkusGetOutput,
  }),
);
// Input Schema
export const NetworkFabricSkusListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ManagedNetworkFabric/networkFabricSkus",
    }),
  );
export type NetworkFabricSkusListBySubscriptionInput =
  typeof NetworkFabricSkusListBySubscriptionInput.Type;

// Output Schema
export const NetworkFabricSkusListBySubscriptionOutput =
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
export type NetworkFabricSkusListBySubscriptionOutput =
  typeof NetworkFabricSkusListBySubscriptionOutput.Type;

// The operation
/**
 * Implements Network Fabric SKUs list by subscription GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const NetworkFabricSkusListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkFabricSkusListBySubscriptionInput,
    outputSchema: NetworkFabricSkusListBySubscriptionOutput,
  }));
// Input Schema
export const NetworkFabricsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabrics",
    }),
  );
export type NetworkFabricsListByResourceGroupInput =
  typeof NetworkFabricsListByResourceGroupInput.Type;

// Output Schema
export const NetworkFabricsListByResourceGroupOutput =
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
export type NetworkFabricsListByResourceGroupOutput =
  typeof NetworkFabricsListByResourceGroupOutput.Type;

// The operation
/**
 * List all the Network Fabric resources in the given resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const NetworkFabricsListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkFabricsListByResourceGroupInput,
    outputSchema: NetworkFabricsListByResourceGroupOutput,
  }));
// Input Schema
export const NetworkFabricsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ManagedNetworkFabric/networkFabrics",
    }),
  );
export type NetworkFabricsListBySubscriptionInput =
  typeof NetworkFabricsListBySubscriptionInput.Type;

// Output Schema
export const NetworkFabricsListBySubscriptionOutput =
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
export type NetworkFabricsListBySubscriptionOutput =
  typeof NetworkFabricsListBySubscriptionOutput.Type;

// The operation
/**
 * List all the Network Fabric resources in the given subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const NetworkFabricsListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkFabricsListBySubscriptionInput,
    outputSchema: NetworkFabricsListBySubscriptionOutput,
  }));
// Input Schema
export const NetworkFabricsLockFabricInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkFabricName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabrics/{networkFabricName}/lockFabric",
    }),
  );
export type NetworkFabricsLockFabricInput =
  typeof NetworkFabricsLockFabricInput.Type;

// Output Schema
export const NetworkFabricsLockFabricOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type NetworkFabricsLockFabricOutput =
  typeof NetworkFabricsLockFabricOutput.Type;

// The operation
/**
 * Post action: Triggers network fabric lock operation.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkFabricName - Name of the Network Fabric.
 */
export const NetworkFabricsLockFabric = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NetworkFabricsLockFabricInput,
    outputSchema: NetworkFabricsLockFabricOutput,
  }),
);
// Input Schema
export const NetworkFabricsProvisionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkFabricName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabrics/{networkFabricName}/provision",
    }),
  );
export type NetworkFabricsProvisionInput =
  typeof NetworkFabricsProvisionInput.Type;

// Output Schema
export const NetworkFabricsProvisionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type NetworkFabricsProvisionOutput =
  typeof NetworkFabricsProvisionOutput.Type;

// The operation
/**
 * Provisions the underlying resources in the given Network Fabric instance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkFabricName - Name of the Network Fabric.
 */
export const NetworkFabricsProvision = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NetworkFabricsProvisionInput,
    outputSchema: NetworkFabricsProvisionOutput,
  }),
);
// Input Schema
export const NetworkFabricsRefreshConfigurationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkFabricName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabrics/{networkFabricName}/refreshConfiguration",
    }),
  );
export type NetworkFabricsRefreshConfigurationInput =
  typeof NetworkFabricsRefreshConfigurationInput.Type;

// Output Schema
export const NetworkFabricsRefreshConfigurationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type NetworkFabricsRefreshConfigurationOutput =
  typeof NetworkFabricsRefreshConfigurationOutput.Type;

// The operation
/**
 * Refreshes the configuration of the underlying resources in the given Network Fabric instance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkFabricName - Name of the Network Fabric.
 */
export const NetworkFabricsRefreshConfiguration =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkFabricsRefreshConfigurationInput,
    outputSchema: NetworkFabricsRefreshConfigurationOutput,
  }));
// Input Schema
export const NetworkFabricsResyncCertificatesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkFabricName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabrics/{networkFabricName}/resyncCertificates",
    }),
  );
export type NetworkFabricsResyncCertificatesInput =
  typeof NetworkFabricsResyncCertificatesInput.Type;

// Output Schema
export const NetworkFabricsResyncCertificatesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
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
        }),
      ),
    ),
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
    resourceId: Schema.optional(Schema.String),
  });
export type NetworkFabricsResyncCertificatesOutput =
  typeof NetworkFabricsResyncCertificatesOutput.Type;

// The operation
/**
 * Re-sync all certificates on Network Devices.
 *
 * Updates all Network Devices to use the latest certificates. Does not generate new certificates. Allows network devices missed during a previous certificate rotation to be brought back into sync.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkFabricName - Name of the Network Fabric.
 */
export const NetworkFabricsResyncCertificates =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkFabricsResyncCertificatesInput,
    outputSchema: NetworkFabricsResyncCertificatesOutput,
  }));
// Input Schema
export const NetworkFabricsResyncPasswordsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkFabricName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabrics/{networkFabricName}/resyncPasswords",
    }),
  );
export type NetworkFabricsResyncPasswordsInput =
  typeof NetworkFabricsResyncPasswordsInput.Type;

// Output Schema
export const NetworkFabricsResyncPasswordsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
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
        }),
      ),
    ),
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
    resourceId: Schema.optional(Schema.String),
  });
export type NetworkFabricsResyncPasswordsOutput =
  typeof NetworkFabricsResyncPasswordsOutput.Type;

// The operation
/**
 * Resync the latest passwords to the Terminal Server and Network Devices.
 *
 * Updates the Terminal Server and all Network Devices to use the latest passwords. Does not generate new passwords.
 * Allows devices to be brought back in sync after a partially successful password rotation.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkFabricName - Name of the Network Fabric.
 */
export const NetworkFabricsResyncPasswords =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkFabricsResyncPasswordsInput,
    outputSchema: NetworkFabricsResyncPasswordsOutput,
  }));
// Input Schema
export const NetworkFabricsRotateCertificatesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkFabricName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabrics/{networkFabricName}/rotateCertificates",
    }),
  );
export type NetworkFabricsRotateCertificatesInput =
  typeof NetworkFabricsRotateCertificatesInput.Type;

// Output Schema
export const NetworkFabricsRotateCertificatesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
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
        }),
      ),
    ),
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
    resourceId: Schema.optional(Schema.String),
  });
export type NetworkFabricsRotateCertificatesOutput =
  typeof NetworkFabricsRotateCertificatesOutput.Type;

// The operation
/**
 * Rotate all certificates on Network Devices.
 *
 * Creates new certificates, then updates the Network Devices to use the new certificates. Note that disabled devices cannot be updated and must be resynchronized with the new certificates once they are enabled.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkFabricName - Name of the Network Fabric.
 */
export const NetworkFabricsRotateCertificates =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkFabricsRotateCertificatesInput,
    outputSchema: NetworkFabricsRotateCertificatesOutput,
  }));
// Input Schema
export const NetworkFabricsRotatePasswordsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkFabricName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabrics/{networkFabricName}/rotatePasswords",
    }),
  );
export type NetworkFabricsRotatePasswordsInput =
  typeof NetworkFabricsRotatePasswordsInput.Type;

// Output Schema
export const NetworkFabricsRotatePasswordsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
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
        }),
      ),
    ),
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
    resourceId: Schema.optional(Schema.String),
  });
export type NetworkFabricsRotatePasswordsOutput =
  typeof NetworkFabricsRotatePasswordsOutput.Type;

// The operation
/**
 * Rotate all passwords on the Terminal Server and Network Devices.
 *
 * Creates new passwords, then updates the Terminal Server and Network Devices to use the new passwords.
 * Note that disabled devices cannot be updated and must be resynchronized with the new passwords once they are enabled.
 * Fails if any of the devices could not be updated with the new password.
 * Failed devices should be resynchronized with the new passwords once possible.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkFabricName - Name of the Network Fabric.
 */
export const NetworkFabricsRotatePasswords =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkFabricsRotatePasswordsInput,
    outputSchema: NetworkFabricsRotatePasswordsOutput,
  }));
// Input Schema
export const NetworkFabricsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkFabricName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabrics/{networkFabricName}",
    }),
  );
export type NetworkFabricsUpdateInput = typeof NetworkFabricsUpdateInput.Type;

// Output Schema
export const NetworkFabricsUpdateOutput =
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
export type NetworkFabricsUpdateOutput = typeof NetworkFabricsUpdateOutput.Type;

// The operation
/**
 * Update certain properties of the Network Fabric resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkFabricName - Name of the Network Fabric.
 */
export const NetworkFabricsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NetworkFabricsUpdateInput,
    outputSchema: NetworkFabricsUpdateOutput,
  }),
);
// Input Schema
export const NetworkFabricsUpdateInfraManagementBfdConfigurationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkFabricName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabrics/{networkFabricName}/updateInfraManagementBfdConfiguration",
    }),
  );
export type NetworkFabricsUpdateInfraManagementBfdConfigurationInput =
  typeof NetworkFabricsUpdateInfraManagementBfdConfigurationInput.Type;

// Output Schema
export const NetworkFabricsUpdateInfraManagementBfdConfigurationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
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
        }),
      ),
    ),
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
    resourceId: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        successfulResources: Schema.optional(Schema.Array(Schema.String)),
        failedResources: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
  });
export type NetworkFabricsUpdateInfraManagementBfdConfigurationOutput =
  typeof NetworkFabricsUpdateInfraManagementBfdConfigurationOutput.Type;

// The operation
/**
 * Updates the Infra Management BFD Configuration of the underlying resources in the given Network Fabric instance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkFabricName - Name of the Network Fabric.
 */
export const NetworkFabricsUpdateInfraManagementBfdConfiguration =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkFabricsUpdateInfraManagementBfdConfigurationInput,
    outputSchema: NetworkFabricsUpdateInfraManagementBfdConfigurationOutput,
  }));
// Input Schema
export const NetworkFabricsUpdateWorkloadManagementBfdConfigurationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkFabricName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabrics/{networkFabricName}/updateWorkloadManagementBfdConfiguration",
    }),
  );
export type NetworkFabricsUpdateWorkloadManagementBfdConfigurationInput =
  typeof NetworkFabricsUpdateWorkloadManagementBfdConfigurationInput.Type;

// Output Schema
export const NetworkFabricsUpdateWorkloadManagementBfdConfigurationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
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
        }),
      ),
    ),
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
    resourceId: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        successfulResources: Schema.optional(Schema.Array(Schema.String)),
        failedResources: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
  });
export type NetworkFabricsUpdateWorkloadManagementBfdConfigurationOutput =
  typeof NetworkFabricsUpdateWorkloadManagementBfdConfigurationOutput.Type;

// The operation
/**
 * Updates the Workload Management BFD Configuration of the underlying resources in the given Network Fabric instance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkFabricName - Name of the Network Fabric.
 */
export const NetworkFabricsUpdateWorkloadManagementBfdConfiguration =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkFabricsUpdateWorkloadManagementBfdConfigurationInput,
    outputSchema: NetworkFabricsUpdateWorkloadManagementBfdConfigurationOutput,
  }));
// Input Schema
export const NetworkFabricsUpgradeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkFabricName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabrics/{networkFabricName}/upgrade",
    }),
  );
export type NetworkFabricsUpgradeInput = typeof NetworkFabricsUpgradeInput.Type;

// Output Schema
export const NetworkFabricsUpgradeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type NetworkFabricsUpgradeOutput =
  typeof NetworkFabricsUpgradeOutput.Type;

// The operation
/**
 * Upgrades the version of the underlying resources in the given Network Fabric instance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkFabricName - Name of the Network Fabric.
 */
export const NetworkFabricsUpgrade = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NetworkFabricsUpgradeInput,
    outputSchema: NetworkFabricsUpgradeOutput,
  }),
);
// Input Schema
export const NetworkFabricsValidateConfigurationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkFabricName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabrics/{networkFabricName}/validateConfiguration",
    }),
  );
export type NetworkFabricsValidateConfigurationInput =
  typeof NetworkFabricsValidateConfigurationInput.Type;

// Output Schema
export const NetworkFabricsValidateConfigurationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type NetworkFabricsValidateConfigurationOutput =
  typeof NetworkFabricsValidateConfigurationOutput.Type;

// The operation
/**
 * Validates the configuration of the underlying resources in the given Network Fabric instance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkFabricName - Name of the Network Fabric.
 */
export const NetworkFabricsValidateConfiguration =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkFabricsValidateConfigurationInput,
    outputSchema: NetworkFabricsValidateConfigurationOutput,
  }));
// Input Schema
export const NetworkFabricsViewDeviceConfigurationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkFabricName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabrics/{networkFabricName}/viewDeviceConfiguration",
    }),
  );
export type NetworkFabricsViewDeviceConfigurationInput =
  typeof NetworkFabricsViewDeviceConfigurationInput.Type;

// Output Schema
export const NetworkFabricsViewDeviceConfigurationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
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
        }),
      ),
    ),
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
    resourceId: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        deviceConfigurationUrl: Schema.optional(Schema.String),
      }),
    ),
  });
export type NetworkFabricsViewDeviceConfigurationOutput =
  typeof NetworkFabricsViewDeviceConfigurationOutput.Type;

// The operation
/**
 * Post action: Triggers view of network fabric configuration.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkFabricName - Name of the Network Fabric.
 */
export const NetworkFabricsViewDeviceConfiguration =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkFabricsViewDeviceConfigurationInput,
    outputSchema: NetworkFabricsViewDeviceConfigurationOutput,
  }));
// Input Schema
export const NetworkInterfacesCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkDeviceName: Schema.String.pipe(T.PathParam()),
    networkInterfaceName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkDevices/{networkDeviceName}/networkInterfaces/{networkInterfaceName}",
    }),
  );
export type NetworkInterfacesCreateInput =
  typeof NetworkInterfacesCreateInput.Type;

// Output Schema
export const NetworkInterfacesCreateOutput =
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
export type NetworkInterfacesCreateOutput =
  typeof NetworkInterfacesCreateOutput.Type;

// The operation
/**
 * Create a Network Interface resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkDeviceName - Name of the Network Device.
 * @param networkInterfaceName - Name of the Network Interface.
 */
export const NetworkInterfacesCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NetworkInterfacesCreateInput,
    outputSchema: NetworkInterfacesCreateOutput,
  }),
);
// Input Schema
export const NetworkInterfacesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkDeviceName: Schema.String.pipe(T.PathParam()),
    networkInterfaceName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkDevices/{networkDeviceName}/networkInterfaces/{networkInterfaceName}",
    }),
  );
export type NetworkInterfacesDeleteInput =
  typeof NetworkInterfacesDeleteInput.Type;

// Output Schema
export const NetworkInterfacesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type NetworkInterfacesDeleteOutput =
  typeof NetworkInterfacesDeleteOutput.Type;

// The operation
/**
 * Delete the Network Interface resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkDeviceName - Name of the Network Device.
 * @param networkInterfaceName - Name of the Network Interface.
 */
export const NetworkInterfacesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NetworkInterfacesDeleteInput,
    outputSchema: NetworkInterfacesDeleteOutput,
  }),
);
// Input Schema
export const NetworkInterfacesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkDeviceName: Schema.String.pipe(T.PathParam()),
    networkInterfaceName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkDevices/{networkDeviceName}/networkInterfaces/{networkInterfaceName}",
    }),
  );
export type NetworkInterfacesGetInput = typeof NetworkInterfacesGetInput.Type;

// Output Schema
export const NetworkInterfacesGetOutput =
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
export type NetworkInterfacesGetOutput = typeof NetworkInterfacesGetOutput.Type;

// The operation
/**
 * Get the Network Interface resource details.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkDeviceName - Name of the Network Device.
 * @param networkInterfaceName - Name of the Network Interface.
 */
export const NetworkInterfacesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NetworkInterfacesGetInput,
    outputSchema: NetworkInterfacesGetOutput,
  }),
);
// Input Schema
export const NetworkInterfacesListByNetworkDeviceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkDeviceName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkDevices/{networkDeviceName}/networkInterfaces",
    }),
  );
export type NetworkInterfacesListByNetworkDeviceInput =
  typeof NetworkInterfacesListByNetworkDeviceInput.Type;

// Output Schema
export const NetworkInterfacesListByNetworkDeviceOutput =
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
export type NetworkInterfacesListByNetworkDeviceOutput =
  typeof NetworkInterfacesListByNetworkDeviceOutput.Type;

// The operation
/**
 * List all the Network Interface resources in a given resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkDeviceName - Name of the Network Device.
 */
export const NetworkInterfacesListByNetworkDevice =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkInterfacesListByNetworkDeviceInput,
    outputSchema: NetworkInterfacesListByNetworkDeviceOutput,
  }));
// Input Schema
export const NetworkInterfacesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkDeviceName: Schema.String.pipe(T.PathParam()),
    networkInterfaceName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkDevices/{networkDeviceName}/networkInterfaces/{networkInterfaceName}",
    }),
  );
export type NetworkInterfacesUpdateInput =
  typeof NetworkInterfacesUpdateInput.Type;

// Output Schema
export const NetworkInterfacesUpdateOutput =
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
export type NetworkInterfacesUpdateOutput =
  typeof NetworkInterfacesUpdateOutput.Type;

// The operation
/**
 * Update certain properties of the Network Interface resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkDeviceName - Name of the Network Device.
 * @param networkInterfaceName - Name of the Network Interface.
 */
export const NetworkInterfacesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NetworkInterfacesUpdateInput,
    outputSchema: NetworkInterfacesUpdateOutput,
  }),
);
// Input Schema
export const NetworkInterfacesUpdateAdministrativeStateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkDeviceName: Schema.String.pipe(T.PathParam()),
    networkInterfaceName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkDevices/{networkDeviceName}/networkInterfaces/{networkInterfaceName}/updateAdministrativeState",
    }),
  );
export type NetworkInterfacesUpdateAdministrativeStateInput =
  typeof NetworkInterfacesUpdateAdministrativeStateInput.Type;

// Output Schema
export const NetworkInterfacesUpdateAdministrativeStateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
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
        }),
      ),
    ),
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
    resourceId: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        successfulResources: Schema.optional(Schema.Array(Schema.String)),
        failedResources: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
  });
export type NetworkInterfacesUpdateAdministrativeStateOutput =
  typeof NetworkInterfacesUpdateAdministrativeStateOutput.Type;

// The operation
/**
 * Update the admin state of the Network Interface.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkDeviceName - Name of the Network Device.
 * @param networkInterfaceName - Name of the Network Interface.
 */
export const NetworkInterfacesUpdateAdministrativeState =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkInterfacesUpdateAdministrativeStateInput,
    outputSchema: NetworkInterfacesUpdateAdministrativeStateOutput,
  }));
// Input Schema
export const NetworkMonitorsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkMonitorName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkMonitors/{networkMonitorName}",
    }),
  );
export type NetworkMonitorsCreateInput = typeof NetworkMonitorsCreateInput.Type;

// Output Schema
export const NetworkMonitorsCreateOutput =
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
export type NetworkMonitorsCreateOutput =
  typeof NetworkMonitorsCreateOutput.Type;

// The operation
/**
 * Creates NetworkMonitor resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkMonitorName - Name of the Network Monitor.
 */
export const NetworkMonitorsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NetworkMonitorsCreateInput,
    outputSchema: NetworkMonitorsCreateOutput,
  }),
);
// Input Schema
export const NetworkMonitorsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkMonitorName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkMonitors/{networkMonitorName}",
    }),
  );
export type NetworkMonitorsDeleteInput = typeof NetworkMonitorsDeleteInput.Type;

// Output Schema
export const NetworkMonitorsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type NetworkMonitorsDeleteOutput =
  typeof NetworkMonitorsDeleteOutput.Type;

// The operation
/**
 * Deletes layer 2 connectivity between compute nodes by managed by named NetworkMonitor name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkMonitorName - Name of the Network Monitor.
 */
export const NetworkMonitorsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NetworkMonitorsDeleteInput,
    outputSchema: NetworkMonitorsDeleteOutput,
  }),
);
// Input Schema
export const NetworkMonitorsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkMonitorName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkMonitors/{networkMonitorName}",
    }),
  );
export type NetworkMonitorsGetInput = typeof NetworkMonitorsGetInput.Type;

// Output Schema
export const NetworkMonitorsGetOutput =
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
export type NetworkMonitorsGetOutput = typeof NetworkMonitorsGetOutput.Type;

// The operation
/**
 * Implements NetworkMonitor GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkMonitorName - Name of the Network Monitor.
 */
export const NetworkMonitorsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: NetworkMonitorsGetInput,
  outputSchema: NetworkMonitorsGetOutput,
}));
// Input Schema
export const NetworkMonitorsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkMonitors",
    }),
  );
export type NetworkMonitorsListByResourceGroupInput =
  typeof NetworkMonitorsListByResourceGroupInput.Type;

// Output Schema
export const NetworkMonitorsListByResourceGroupOutput =
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
export type NetworkMonitorsListByResourceGroupOutput =
  typeof NetworkMonitorsListByResourceGroupOutput.Type;

// The operation
/**
 * Displays NetworkMonitors list by resource group GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const NetworkMonitorsListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkMonitorsListByResourceGroupInput,
    outputSchema: NetworkMonitorsListByResourceGroupOutput,
  }));
// Input Schema
export const NetworkMonitorsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ManagedNetworkFabric/networkMonitors",
    }),
  );
export type NetworkMonitorsListBySubscriptionInput =
  typeof NetworkMonitorsListBySubscriptionInput.Type;

// Output Schema
export const NetworkMonitorsListBySubscriptionOutput =
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
export type NetworkMonitorsListBySubscriptionOutput =
  typeof NetworkMonitorsListBySubscriptionOutput.Type;

// The operation
/**
 * Displays NetworkMonitors list by subscription GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const NetworkMonitorsListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkMonitorsListBySubscriptionInput,
    outputSchema: NetworkMonitorsListBySubscriptionOutput,
  }));
// Input Schema
export const NetworkMonitorsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkMonitorName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkMonitors/{networkMonitorName}",
    }),
  );
export type NetworkMonitorsUpdateInput = typeof NetworkMonitorsUpdateInput.Type;

// Output Schema
export const NetworkMonitorsUpdateOutput =
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
export type NetworkMonitorsUpdateOutput =
  typeof NetworkMonitorsUpdateOutput.Type;

// The operation
/**
 * API to update certain properties of the NetworkMonitor resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkMonitorName - Name of the Network Monitor.
 */
export const NetworkMonitorsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NetworkMonitorsUpdateInput,
    outputSchema: NetworkMonitorsUpdateOutput,
  }),
);
// Input Schema
export const NetworkMonitorsUpdateAdministrativeStateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkMonitorName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkMonitors/{networkMonitorName}/updateAdministrativeState",
    }),
  );
export type NetworkMonitorsUpdateAdministrativeStateInput =
  typeof NetworkMonitorsUpdateAdministrativeStateInput.Type;

// Output Schema
export const NetworkMonitorsUpdateAdministrativeStateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type NetworkMonitorsUpdateAdministrativeStateOutput =
  typeof NetworkMonitorsUpdateAdministrativeStateOutput.Type;

// The operation
/**
 * Enables isolation domain across the fabric or on specified racks.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkMonitorName - Name of the Network Monitor.
 */
export const NetworkMonitorsUpdateAdministrativeState =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkMonitorsUpdateAdministrativeStateInput,
    outputSchema: NetworkMonitorsUpdateAdministrativeStateOutput,
  }));
// Input Schema
export const NetworkPacketBrokersCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkPacketBrokerName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkPacketBrokers/{networkPacketBrokerName}",
    }),
  );
export type NetworkPacketBrokersCreateInput =
  typeof NetworkPacketBrokersCreateInput.Type;

// Output Schema
export const NetworkPacketBrokersCreateOutput =
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
export type NetworkPacketBrokersCreateOutput =
  typeof NetworkPacketBrokersCreateOutput.Type;

// The operation
/**
 * Creates a Network Packet Broker.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkPacketBrokerName - Name of the Network Packet Broker.
 */
export const NetworkPacketBrokersCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NetworkPacketBrokersCreateInput,
    outputSchema: NetworkPacketBrokersCreateOutput,
  }),
);
// Input Schema
export const NetworkPacketBrokersDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkPacketBrokerName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkPacketBrokers/{networkPacketBrokerName}",
    }),
  );
export type NetworkPacketBrokersDeleteInput =
  typeof NetworkPacketBrokersDeleteInput.Type;

// Output Schema
export const NetworkPacketBrokersDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type NetworkPacketBrokersDeleteOutput =
  typeof NetworkPacketBrokersDeleteOutput.Type;

// The operation
/**
 * Deletes Network Packet Broker.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkPacketBrokerName - Name of the Network Packet Broker.
 */
export const NetworkPacketBrokersDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NetworkPacketBrokersDeleteInput,
    outputSchema: NetworkPacketBrokersDeleteOutput,
  }),
);
// Input Schema
export const NetworkPacketBrokersGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkPacketBrokerName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkPacketBrokers/{networkPacketBrokerName}",
    }),
  );
export type NetworkPacketBrokersGetInput =
  typeof NetworkPacketBrokersGetInput.Type;

// Output Schema
export const NetworkPacketBrokersGetOutput =
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
export type NetworkPacketBrokersGetOutput =
  typeof NetworkPacketBrokersGetOutput.Type;

// The operation
/**
 * Retrieves details of this Network Packet Broker.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkPacketBrokerName - Name of the Network Packet Broker.
 */
export const NetworkPacketBrokersGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NetworkPacketBrokersGetInput,
    outputSchema: NetworkPacketBrokersGetOutput,
  }),
);
// Input Schema
export const NetworkPacketBrokersListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkPacketBrokers",
    }),
  );
export type NetworkPacketBrokersListByResourceGroupInput =
  typeof NetworkPacketBrokersListByResourceGroupInput.Type;

// Output Schema
export const NetworkPacketBrokersListByResourceGroupOutput =
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
export type NetworkPacketBrokersListByResourceGroupOutput =
  typeof NetworkPacketBrokersListByResourceGroupOutput.Type;

// The operation
/**
 * Displays NetworkPacketBrokers list by resource group GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const NetworkPacketBrokersListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkPacketBrokersListByResourceGroupInput,
    outputSchema: NetworkPacketBrokersListByResourceGroupOutput,
  }));
// Input Schema
export const NetworkPacketBrokersListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ManagedNetworkFabric/networkPacketBrokers",
    }),
  );
export type NetworkPacketBrokersListBySubscriptionInput =
  typeof NetworkPacketBrokersListBySubscriptionInput.Type;

// Output Schema
export const NetworkPacketBrokersListBySubscriptionOutput =
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
export type NetworkPacketBrokersListBySubscriptionOutput =
  typeof NetworkPacketBrokersListBySubscriptionOutput.Type;

// The operation
/**
 * Displays Network Packet Brokers list by subscription GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const NetworkPacketBrokersListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkPacketBrokersListBySubscriptionInput,
    outputSchema: NetworkPacketBrokersListBySubscriptionOutput,
  }));
// Input Schema
export const NetworkPacketBrokersUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkPacketBrokerName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkPacketBrokers/{networkPacketBrokerName}",
    }),
  );
export type NetworkPacketBrokersUpdateInput =
  typeof NetworkPacketBrokersUpdateInput.Type;

// Output Schema
export const NetworkPacketBrokersUpdateOutput =
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
export type NetworkPacketBrokersUpdateOutput =
  typeof NetworkPacketBrokersUpdateOutput.Type;

// The operation
/**
 * API to update certain properties of the Network Packet Broker resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkPacketBrokerName - Name of the Network Packet Broker.
 */
export const NetworkPacketBrokersUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NetworkPacketBrokersUpdateInput,
    outputSchema: NetworkPacketBrokersUpdateOutput,
  }),
);
// Input Schema
export const NetworkRacksCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkRackName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkRacks/{networkRackName}",
    }),
  );
export type NetworkRacksCreateInput = typeof NetworkRacksCreateInput.Type;

// Output Schema
export const NetworkRacksCreateOutput =
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
export type NetworkRacksCreateOutput = typeof NetworkRacksCreateOutput.Type;

// The operation
/**
 * Create Network Rack resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkRackName - Name of the Network Rack.
 */
export const NetworkRacksCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: NetworkRacksCreateInput,
  outputSchema: NetworkRacksCreateOutput,
}));
// Input Schema
export const NetworkRacksDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkRackName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkRacks/{networkRackName}",
    }),
  );
export type NetworkRacksDeleteInput = typeof NetworkRacksDeleteInput.Type;

// Output Schema
export const NetworkRacksDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type NetworkRacksDeleteOutput = typeof NetworkRacksDeleteOutput.Type;

// The operation
/**
 * Delete Network Rack resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkRackName - Name of the Network Rack.
 */
export const NetworkRacksDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: NetworkRacksDeleteInput,
  outputSchema: NetworkRacksDeleteOutput,
}));
// Input Schema
export const NetworkRacksGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  networkRackName: Schema.String.pipe(T.PathParam()),
  "api-version": Schema.String,
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkRacks/{networkRackName}",
  }),
);
export type NetworkRacksGetInput = typeof NetworkRacksGetInput.Type;

// Output Schema
export const NetworkRacksGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type NetworkRacksGetOutput = typeof NetworkRacksGetOutput.Type;

// The operation
/**
 * Get Network Rack resource details.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkRackName - Name of the Network Rack.
 */
export const NetworkRacksGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: NetworkRacksGetInput,
  outputSchema: NetworkRacksGetOutput,
}));
// Input Schema
export const NetworkRacksListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkRacks",
    }),
  );
export type NetworkRacksListByResourceGroupInput =
  typeof NetworkRacksListByResourceGroupInput.Type;

// Output Schema
export const NetworkRacksListByResourceGroupOutput =
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
export type NetworkRacksListByResourceGroupOutput =
  typeof NetworkRacksListByResourceGroupOutput.Type;

// The operation
/**
 * List all Network Rack resources in the given resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const NetworkRacksListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkRacksListByResourceGroupInput,
    outputSchema: NetworkRacksListByResourceGroupOutput,
  }));
// Input Schema
export const NetworkRacksListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ManagedNetworkFabric/networkRacks",
    }),
  );
export type NetworkRacksListBySubscriptionInput =
  typeof NetworkRacksListBySubscriptionInput.Type;

// Output Schema
export const NetworkRacksListBySubscriptionOutput =
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
export type NetworkRacksListBySubscriptionOutput =
  typeof NetworkRacksListBySubscriptionOutput.Type;

// The operation
/**
 * List all Network Rack resources in the given subscription
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const NetworkRacksListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkRacksListBySubscriptionInput,
    outputSchema: NetworkRacksListBySubscriptionOutput,
  }));
// Input Schema
export const NetworkRacksUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkRackName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkRacks/{networkRackName}",
    }),
  );
export type NetworkRacksUpdateInput = typeof NetworkRacksUpdateInput.Type;

// Output Schema
export const NetworkRacksUpdateOutput =
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
export type NetworkRacksUpdateOutput = typeof NetworkRacksUpdateOutput.Type;

// The operation
/**
 * Update certain properties of the Network Rack resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkRackName - Name of the Network Rack.
 */
export const NetworkRacksUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: NetworkRacksUpdateInput,
  outputSchema: NetworkRacksUpdateOutput,
}));
// Input Schema
export const NetworkTapRulesCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkTapRuleName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkTapRules/{networkTapRuleName}",
    }),
  );
export type NetworkTapRulesCreateInput = typeof NetworkTapRulesCreateInput.Type;

// Output Schema
export const NetworkTapRulesCreateOutput =
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
export type NetworkTapRulesCreateOutput =
  typeof NetworkTapRulesCreateOutput.Type;

// The operation
/**
 * Create Network Tap Rule resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkTapRuleName - Name of the Network Tap Rule.
 */
export const NetworkTapRulesCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NetworkTapRulesCreateInput,
    outputSchema: NetworkTapRulesCreateOutput,
  }),
);
// Input Schema
export const NetworkTapRulesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkTapRuleName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkTapRules/{networkTapRuleName}",
    }),
  );
export type NetworkTapRulesDeleteInput = typeof NetworkTapRulesDeleteInput.Type;

// Output Schema
export const NetworkTapRulesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type NetworkTapRulesDeleteOutput =
  typeof NetworkTapRulesDeleteOutput.Type;

// The operation
/**
 * Delete Network Tap Rule resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkTapRuleName - Name of the Network Tap Rule.
 */
export const NetworkTapRulesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NetworkTapRulesDeleteInput,
    outputSchema: NetworkTapRulesDeleteOutput,
  }),
);
// Input Schema
export const NetworkTapRulesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkTapRuleName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkTapRules/{networkTapRuleName}",
    }),
  );
export type NetworkTapRulesGetInput = typeof NetworkTapRulesGetInput.Type;

// Output Schema
export const NetworkTapRulesGetOutput =
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
export type NetworkTapRulesGetOutput = typeof NetworkTapRulesGetOutput.Type;

// The operation
/**
 * Get Network Tap Rule resource details.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkTapRuleName - Name of the Network Tap Rule.
 */
export const NetworkTapRulesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: NetworkTapRulesGetInput,
  outputSchema: NetworkTapRulesGetOutput,
}));
// Input Schema
export const NetworkTapRulesListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkTapRules",
    }),
  );
export type NetworkTapRulesListByResourceGroupInput =
  typeof NetworkTapRulesListByResourceGroupInput.Type;

// Output Schema
export const NetworkTapRulesListByResourceGroupOutput =
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
export type NetworkTapRulesListByResourceGroupOutput =
  typeof NetworkTapRulesListByResourceGroupOutput.Type;

// The operation
/**
 * List all the Network Tap Rule resources in the given resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const NetworkTapRulesListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkTapRulesListByResourceGroupInput,
    outputSchema: NetworkTapRulesListByResourceGroupOutput,
  }));
// Input Schema
export const NetworkTapRulesListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ManagedNetworkFabric/networkTapRules",
    }),
  );
export type NetworkTapRulesListBySubscriptionInput =
  typeof NetworkTapRulesListBySubscriptionInput.Type;

// Output Schema
export const NetworkTapRulesListBySubscriptionOutput =
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
export type NetworkTapRulesListBySubscriptionOutput =
  typeof NetworkTapRulesListBySubscriptionOutput.Type;

// The operation
/**
 * List all the Network Tap Rule resources in the given subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const NetworkTapRulesListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkTapRulesListBySubscriptionInput,
    outputSchema: NetworkTapRulesListBySubscriptionOutput,
  }));
// Input Schema
export const NetworkTapRulesResyncInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkTapRuleName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkTapRules/{networkTapRuleName}/resync",
    }),
  );
export type NetworkTapRulesResyncInput = typeof NetworkTapRulesResyncInput.Type;

// Output Schema
export const NetworkTapRulesResyncOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
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
        }),
      ),
    ),
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
    resourceId: Schema.optional(Schema.String),
  });
export type NetworkTapRulesResyncOutput =
  typeof NetworkTapRulesResyncOutput.Type;

// The operation
/**
 * Implements the operation to the underlying resources.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkTapRuleName - Name of the Network Tap Rule.
 */
export const NetworkTapRulesResync = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NetworkTapRulesResyncInput,
    outputSchema: NetworkTapRulesResyncOutput,
  }),
);
// Input Schema
export const NetworkTapRulesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkTapRuleName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkTapRules/{networkTapRuleName}",
    }),
  );
export type NetworkTapRulesUpdateInput = typeof NetworkTapRulesUpdateInput.Type;

// Output Schema
export const NetworkTapRulesUpdateOutput =
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
export type NetworkTapRulesUpdateOutput =
  typeof NetworkTapRulesUpdateOutput.Type;

// The operation
/**
 * Update certain properties of the Network Tap Rule resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkTapRuleName - Name of the Network Tap Rule.
 */
export const NetworkTapRulesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NetworkTapRulesUpdateInput,
    outputSchema: NetworkTapRulesUpdateOutput,
  }),
);
// Input Schema
export const NetworkTapRulesUpdateAdministrativeStateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkTapRuleName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkTapRules/{networkTapRuleName}/updateAdministrativeState",
    }),
  );
export type NetworkTapRulesUpdateAdministrativeStateInput =
  typeof NetworkTapRulesUpdateAdministrativeStateInput.Type;

// Output Schema
export const NetworkTapRulesUpdateAdministrativeStateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type NetworkTapRulesUpdateAdministrativeStateOutput =
  typeof NetworkTapRulesUpdateAdministrativeStateOutput.Type;

// The operation
/**
 * Implements the operation to the underlying resources.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkTapRuleName - Name of the Network Tap Rule.
 */
export const NetworkTapRulesUpdateAdministrativeState =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkTapRulesUpdateAdministrativeStateInput,
    outputSchema: NetworkTapRulesUpdateAdministrativeStateOutput,
  }));
// Input Schema
export const NetworkTapRulesValidateConfigurationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkTapRuleName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkTapRules/{networkTapRuleName}/validateConfiguration",
    }),
  );
export type NetworkTapRulesValidateConfigurationInput =
  typeof NetworkTapRulesValidateConfigurationInput.Type;

// Output Schema
export const NetworkTapRulesValidateConfigurationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type NetworkTapRulesValidateConfigurationOutput =
  typeof NetworkTapRulesValidateConfigurationOutput.Type;

// The operation
/**
 * Implements the operation to the underlying resources.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkTapRuleName - Name of the Network Tap Rule.
 */
export const NetworkTapRulesValidateConfiguration =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkTapRulesValidateConfigurationInput,
    outputSchema: NetworkTapRulesValidateConfigurationOutput,
  }));
// Input Schema
export const NetworkTapsCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkTapName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  },
).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkTaps/{networkTapName}",
  }),
);
export type NetworkTapsCreateInput = typeof NetworkTapsCreateInput.Type;

// Output Schema
export const NetworkTapsCreateOutput =
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
export type NetworkTapsCreateOutput = typeof NetworkTapsCreateOutput.Type;

// The operation
/**
 * Creates a Network Tap.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkTapName - Name of the Network Tap.
 */
export const NetworkTapsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: NetworkTapsCreateInput,
  outputSchema: NetworkTapsCreateOutput,
}));
// Input Schema
export const NetworkTapsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkTapName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  },
).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkTaps/{networkTapName}",
  }),
);
export type NetworkTapsDeleteInput = typeof NetworkTapsDeleteInput.Type;

// Output Schema
export const NetworkTapsDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type NetworkTapsDeleteOutput = typeof NetworkTapsDeleteOutput.Type;

// The operation
/**
 * Deletes Network Tap.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkTapName - Name of the Network Tap.
 */
export const NetworkTapsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: NetworkTapsDeleteInput,
  outputSchema: NetworkTapsDeleteOutput,
}));
// Input Schema
export const NetworkTapsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  networkTapName: Schema.String.pipe(T.PathParam()),
  "api-version": Schema.String,
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkTaps/{networkTapName}",
  }),
);
export type NetworkTapsGetInput = typeof NetworkTapsGetInput.Type;

// Output Schema
export const NetworkTapsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type NetworkTapsGetOutput = typeof NetworkTapsGetOutput.Type;

// The operation
/**
 * Retrieves details of this Network Tap.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkTapName - Name of the Network Tap.
 */
export const NetworkTapsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: NetworkTapsGetInput,
  outputSchema: NetworkTapsGetOutput,
}));
// Input Schema
export const NetworkTapsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkTaps",
    }),
  );
export type NetworkTapsListByResourceGroupInput =
  typeof NetworkTapsListByResourceGroupInput.Type;

// Output Schema
export const NetworkTapsListByResourceGroupOutput =
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
export type NetworkTapsListByResourceGroupOutput =
  typeof NetworkTapsListByResourceGroupOutput.Type;

// The operation
/**
 * Displays Network Taps list by resource group GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const NetworkTapsListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkTapsListByResourceGroupInput,
    outputSchema: NetworkTapsListByResourceGroupOutput,
  }));
// Input Schema
export const NetworkTapsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ManagedNetworkFabric/networkTaps",
    }),
  );
export type NetworkTapsListBySubscriptionInput =
  typeof NetworkTapsListBySubscriptionInput.Type;

// Output Schema
export const NetworkTapsListBySubscriptionOutput =
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
export type NetworkTapsListBySubscriptionOutput =
  typeof NetworkTapsListBySubscriptionOutput.Type;

// The operation
/**
 * Displays Network Taps list by subscription GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const NetworkTapsListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkTapsListBySubscriptionInput,
    outputSchema: NetworkTapsListBySubscriptionOutput,
  }));
// Input Schema
export const NetworkTapsResyncInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkTapName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  },
).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkTaps/{networkTapName}/resync",
  }),
);
export type NetworkTapsResyncInput = typeof NetworkTapsResyncInput.Type;

// Output Schema
export const NetworkTapsResyncOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
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
        }),
      ),
    ),
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
    resourceId: Schema.optional(Schema.String),
  });
export type NetworkTapsResyncOutput = typeof NetworkTapsResyncOutput.Type;

// The operation
/**
 * Implements the operation to the underlying resources.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkTapName - Name of the Network Tap.
 */
export const NetworkTapsResync = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: NetworkTapsResyncInput,
  outputSchema: NetworkTapsResyncOutput,
}));
// Input Schema
export const NetworkTapsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkTapName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  },
).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkTaps/{networkTapName}",
  }),
);
export type NetworkTapsUpdateInput = typeof NetworkTapsUpdateInput.Type;

// Output Schema
export const NetworkTapsUpdateOutput =
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
export type NetworkTapsUpdateOutput = typeof NetworkTapsUpdateOutput.Type;

// The operation
/**
 * API to update certain properties of the Network Tap resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkTapName - Name of the Network Tap.
 */
export const NetworkTapsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: NetworkTapsUpdateInput,
  outputSchema: NetworkTapsUpdateOutput,
}));
// Input Schema
export const NetworkTapsUpdateAdministrativeStateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkTapName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkTaps/{networkTapName}/updateAdministrativeState",
    }),
  );
export type NetworkTapsUpdateAdministrativeStateInput =
  typeof NetworkTapsUpdateAdministrativeStateInput.Type;

// Output Schema
export const NetworkTapsUpdateAdministrativeStateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
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
        }),
      ),
    ),
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
    resourceId: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        successfulResources: Schema.optional(Schema.Array(Schema.String)),
        failedResources: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
  });
export type NetworkTapsUpdateAdministrativeStateOutput =
  typeof NetworkTapsUpdateAdministrativeStateOutput.Type;

// The operation
/**
 * Implements the operation to the underlying resources.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkTapName - Name of the Network Tap.
 */
export const NetworkTapsUpdateAdministrativeState =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkTapsUpdateAdministrativeStateInput,
    outputSchema: NetworkTapsUpdateAdministrativeStateOutput,
  }));
// Input Schema
export const NetworkToNetworkInterconnectsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkFabricName: Schema.String.pipe(T.PathParam()),
    networkToNetworkInterconnectName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabrics/{networkFabricName}/networkToNetworkInterconnects/{networkToNetworkInterconnectName}",
    }),
  );
export type NetworkToNetworkInterconnectsCreateInput =
  typeof NetworkToNetworkInterconnectsCreateInput.Type;

// Output Schema
export const NetworkToNetworkInterconnectsCreateOutput =
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
export type NetworkToNetworkInterconnectsCreateOutput =
  typeof NetworkToNetworkInterconnectsCreateOutput.Type;

// The operation
/**
 * Configuration used to setup CE-PE connectivity PUT Method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkFabricName - Name of the Network Fabric.
 * @param networkToNetworkInterconnectName - Name of the Network to Network Interconnect.
 */
export const NetworkToNetworkInterconnectsCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkToNetworkInterconnectsCreateInput,
    outputSchema: NetworkToNetworkInterconnectsCreateOutput,
  }));
// Input Schema
export const NetworkToNetworkInterconnectsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkFabricName: Schema.String.pipe(T.PathParam()),
    networkToNetworkInterconnectName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabrics/{networkFabricName}/networkToNetworkInterconnects/{networkToNetworkInterconnectName}",
    }),
  );
export type NetworkToNetworkInterconnectsDeleteInput =
  typeof NetworkToNetworkInterconnectsDeleteInput.Type;

// Output Schema
export const NetworkToNetworkInterconnectsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type NetworkToNetworkInterconnectsDeleteOutput =
  typeof NetworkToNetworkInterconnectsDeleteOutput.Type;

// The operation
/**
 * Implements NetworkToNetworkInterconnects DELETE method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkFabricName - Name of the Network Fabric.
 * @param networkToNetworkInterconnectName - Name of the Network to Network Interconnect.
 */
export const NetworkToNetworkInterconnectsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkToNetworkInterconnectsDeleteInput,
    outputSchema: NetworkToNetworkInterconnectsDeleteOutput,
  }));
// Input Schema
export const NetworkToNetworkInterconnectsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkFabricName: Schema.String.pipe(T.PathParam()),
    networkToNetworkInterconnectName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabrics/{networkFabricName}/networkToNetworkInterconnects/{networkToNetworkInterconnectName}",
    }),
  );
export type NetworkToNetworkInterconnectsGetInput =
  typeof NetworkToNetworkInterconnectsGetInput.Type;

// Output Schema
export const NetworkToNetworkInterconnectsGetOutput =
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
export type NetworkToNetworkInterconnectsGetOutput =
  typeof NetworkToNetworkInterconnectsGetOutput.Type;

// The operation
/**
 * Implements NetworkToNetworkInterconnects GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkFabricName - Name of the Network Fabric.
 * @param networkToNetworkInterconnectName - Name of the Network to Network Interconnect.
 */
export const NetworkToNetworkInterconnectsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkToNetworkInterconnectsGetInput,
    outputSchema: NetworkToNetworkInterconnectsGetOutput,
  }));
// Input Schema
export const NetworkToNetworkInterconnectsListByNetworkFabricInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkFabricName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabrics/{networkFabricName}/networkToNetworkInterconnects",
    }),
  );
export type NetworkToNetworkInterconnectsListByNetworkFabricInput =
  typeof NetworkToNetworkInterconnectsListByNetworkFabricInput.Type;

// Output Schema
export const NetworkToNetworkInterconnectsListByNetworkFabricOutput =
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
export type NetworkToNetworkInterconnectsListByNetworkFabricOutput =
  typeof NetworkToNetworkInterconnectsListByNetworkFabricOutput.Type;

// The operation
/**
 * Implements Network To Network Interconnects list by Network Fabric GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkFabricName - Name of the Network Fabric.
 */
export const NetworkToNetworkInterconnectsListByNetworkFabric =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkToNetworkInterconnectsListByNetworkFabricInput,
    outputSchema: NetworkToNetworkInterconnectsListByNetworkFabricOutput,
  }));
// Input Schema
export const NetworkToNetworkInterconnectsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkFabricName: Schema.String.pipe(T.PathParam()),
    networkToNetworkInterconnectName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabrics/{networkFabricName}/networkToNetworkInterconnects/{networkToNetworkInterconnectName}",
    }),
  );
export type NetworkToNetworkInterconnectsUpdateInput =
  typeof NetworkToNetworkInterconnectsUpdateInput.Type;

// Output Schema
export const NetworkToNetworkInterconnectsUpdateOutput =
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
export type NetworkToNetworkInterconnectsUpdateOutput =
  typeof NetworkToNetworkInterconnectsUpdateOutput.Type;

// The operation
/**
 * Update certain properties of the Network To NetworkInterconnects resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkFabricName - Name of the Network Fabric.
 * @param networkToNetworkInterconnectName - Name of the Network to Network Interconnect.
 */
export const NetworkToNetworkInterconnectsUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkToNetworkInterconnectsUpdateInput,
    outputSchema: NetworkToNetworkInterconnectsUpdateOutput,
  }));
// Input Schema
export const NetworkToNetworkInterconnectsUpdateAdministrativeStateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkFabricName: Schema.String.pipe(T.PathParam()),
    networkToNetworkInterconnectName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabrics/{networkFabricName}/networkToNetworkInterconnects/{networkToNetworkInterconnectName}/updateAdministrativeState",
    }),
  );
export type NetworkToNetworkInterconnectsUpdateAdministrativeStateInput =
  typeof NetworkToNetworkInterconnectsUpdateAdministrativeStateInput.Type;

// Output Schema
export const NetworkToNetworkInterconnectsUpdateAdministrativeStateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
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
        }),
      ),
    ),
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
    resourceId: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        successfulResources: Schema.optional(Schema.Array(Schema.String)),
        failedResources: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
  });
export type NetworkToNetworkInterconnectsUpdateAdministrativeStateOutput =
  typeof NetworkToNetworkInterconnectsUpdateAdministrativeStateOutput.Type;

// The operation
/**
 * Updates the Admin State.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkFabricName - Name of the Network Fabric.
 * @param networkToNetworkInterconnectName - Name of the Network to Network Interconnect.
 */
export const NetworkToNetworkInterconnectsUpdateAdministrativeState =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkToNetworkInterconnectsUpdateAdministrativeStateInput,
    outputSchema: NetworkToNetworkInterconnectsUpdateAdministrativeStateOutput,
  }));
// Input Schema
export const NetworkToNetworkInterconnectsUpdateBfdAdministrativeStateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkFabricName: Schema.String.pipe(T.PathParam()),
    networkToNetworkInterconnectName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabrics/{networkFabricName}/networkToNetworkInterconnects/{networkToNetworkInterconnectName}/updateBfdAdministrativeState",
    }),
  );
export type NetworkToNetworkInterconnectsUpdateBfdAdministrativeStateInput =
  typeof NetworkToNetworkInterconnectsUpdateBfdAdministrativeStateInput.Type;

// Output Schema
export const NetworkToNetworkInterconnectsUpdateBfdAdministrativeStateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
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
        }),
      ),
    ),
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
    resourceId: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        routeType: Schema.optional(Schema.Literals(["Static", "OptionA"])),
        administrativeState: Schema.optional(
          Schema.Literals(["Enabled", "Disabled", "MAT", "RMA"]),
        ),
      }),
    ),
  });
export type NetworkToNetworkInterconnectsUpdateBfdAdministrativeStateOutput =
  typeof NetworkToNetworkInterconnectsUpdateBfdAdministrativeStateOutput.Type;

// The operation
/**
 * Updates the Admin State.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkFabricName - Name of the Network Fabric.
 * @param networkToNetworkInterconnectName - Name of the Network to Network Interconnect.
 */
export const NetworkToNetworkInterconnectsUpdateBfdAdministrativeState =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkToNetworkInterconnectsUpdateBfdAdministrativeStateInput,
    outputSchema:
      NetworkToNetworkInterconnectsUpdateBfdAdministrativeStateOutput,
  }));
// Input Schema
export const NetworkToNetworkInterconnectsUpdateNpbStaticRouteBfdAdministrativeStateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    networkFabricName: Schema.String.pipe(T.PathParam()),
    networkToNetworkInterconnectName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkFabrics/{networkFabricName}/networkToNetworkInterconnects/{networkToNetworkInterconnectName}/updateNpbStaticRouteBfdAdministrativeState",
    }),
  );
export type NetworkToNetworkInterconnectsUpdateNpbStaticRouteBfdAdministrativeStateInput =
  typeof NetworkToNetworkInterconnectsUpdateNpbStaticRouteBfdAdministrativeStateInput.Type;

// Output Schema
export const NetworkToNetworkInterconnectsUpdateNpbStaticRouteBfdAdministrativeStateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
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
        }),
      ),
    ),
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
    resourceId: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        successfulResources: Schema.optional(Schema.Array(Schema.String)),
        failedResources: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
  });
export type NetworkToNetworkInterconnectsUpdateNpbStaticRouteBfdAdministrativeStateOutput =
  typeof NetworkToNetworkInterconnectsUpdateNpbStaticRouteBfdAdministrativeStateOutput.Type;

// The operation
/**
 * Updates the NPB Static Route BFD Administrative State.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param networkFabricName - Name of the Network Fabric.
 * @param networkToNetworkInterconnectName - Name of the Network to Network Interconnect.
 */
export const NetworkToNetworkInterconnectsUpdateNpbStaticRouteBfdAdministrativeState =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      NetworkToNetworkInterconnectsUpdateNpbStaticRouteBfdAdministrativeStateInput,
    outputSchema:
      NetworkToNetworkInterconnectsUpdateNpbStaticRouteBfdAdministrativeStateOutput,
  }));
// Input Schema
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  "api-version": Schema.String,
}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.ManagedNetworkFabric/operations",
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
export const RoutePoliciesCommitConfigurationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    routePolicyName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/routePolicies/{routePolicyName}/commitConfiguration",
    }),
  );
export type RoutePoliciesCommitConfigurationInput =
  typeof RoutePoliciesCommitConfigurationInput.Type;

// Output Schema
export const RoutePoliciesCommitConfigurationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type RoutePoliciesCommitConfigurationOutput =
  typeof RoutePoliciesCommitConfigurationOutput.Type;

// The operation
/**
 * Commits the configuration of the given resources.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param routePolicyName - Name of the Route Policy.
 */
export const RoutePoliciesCommitConfiguration =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RoutePoliciesCommitConfigurationInput,
    outputSchema: RoutePoliciesCommitConfigurationOutput,
  }));
// Input Schema
export const RoutePoliciesCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    routePolicyName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/routePolicies/{routePolicyName}",
    }),
  );
export type RoutePoliciesCreateInput = typeof RoutePoliciesCreateInput.Type;

// Output Schema
export const RoutePoliciesCreateOutput =
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
export type RoutePoliciesCreateOutput = typeof RoutePoliciesCreateOutput.Type;

// The operation
/**
 * Implements Route Policy PUT method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param routePolicyName - Name of the Route Policy.
 */
export const RoutePoliciesCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RoutePoliciesCreateInput,
  outputSchema: RoutePoliciesCreateOutput,
}));
// Input Schema
export const RoutePoliciesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    routePolicyName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/routePolicies/{routePolicyName}",
    }),
  );
export type RoutePoliciesDeleteInput = typeof RoutePoliciesDeleteInput.Type;

// Output Schema
export const RoutePoliciesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type RoutePoliciesDeleteOutput = typeof RoutePoliciesDeleteOutput.Type;

// The operation
/**
 * Implements Route Policy DELETE method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param routePolicyName - Name of the Route Policy.
 */
export const RoutePoliciesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RoutePoliciesDeleteInput,
  outputSchema: RoutePoliciesDeleteOutput,
}));
// Input Schema
export const RoutePoliciesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  routePolicyName: Schema.String.pipe(T.PathParam()),
  "api-version": Schema.String,
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/routePolicies/{routePolicyName}",
  }),
);
export type RoutePoliciesGetInput = typeof RoutePoliciesGetInput.Type;

// Output Schema
export const RoutePoliciesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
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
export type RoutePoliciesGetOutput = typeof RoutePoliciesGetOutput.Type;

// The operation
/**
 * Implements Route Policy GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param routePolicyName - Name of the Route Policy.
 */
export const RoutePoliciesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RoutePoliciesGetInput,
  outputSchema: RoutePoliciesGetOutput,
}));
// Input Schema
export const RoutePoliciesListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/routePolicies",
    }),
  );
export type RoutePoliciesListByResourceGroupInput =
  typeof RoutePoliciesListByResourceGroupInput.Type;

// Output Schema
export const RoutePoliciesListByResourceGroupOutput =
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
export type RoutePoliciesListByResourceGroupOutput =
  typeof RoutePoliciesListByResourceGroupOutput.Type;

// The operation
/**
 * Implements RoutePolicies list by resource group GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const RoutePoliciesListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RoutePoliciesListByResourceGroupInput,
    outputSchema: RoutePoliciesListByResourceGroupOutput,
  }));
// Input Schema
export const RoutePoliciesListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ManagedNetworkFabric/routePolicies",
    }),
  );
export type RoutePoliciesListBySubscriptionInput =
  typeof RoutePoliciesListBySubscriptionInput.Type;

// Output Schema
export const RoutePoliciesListBySubscriptionOutput =
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
export type RoutePoliciesListBySubscriptionOutput =
  typeof RoutePoliciesListBySubscriptionOutput.Type;

// The operation
/**
 * Implements RoutePolicies list by subscription GET method.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const RoutePoliciesListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RoutePoliciesListBySubscriptionInput,
    outputSchema: RoutePoliciesListBySubscriptionOutput,
  }));
// Input Schema
export const RoutePoliciesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    routePolicyName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/routePolicies/{routePolicyName}",
    }),
  );
export type RoutePoliciesUpdateInput = typeof RoutePoliciesUpdateInput.Type;

// Output Schema
export const RoutePoliciesUpdateOutput =
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
export type RoutePoliciesUpdateOutput = typeof RoutePoliciesUpdateOutput.Type;

// The operation
/**
 * API to update certain properties of the Route Policy resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param routePolicyName - Name of the Route Policy.
 */
export const RoutePoliciesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RoutePoliciesUpdateInput,
  outputSchema: RoutePoliciesUpdateOutput,
}));
// Input Schema
export const RoutePoliciesUpdateAdministrativeStateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    routePolicyName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/routePolicies/{routePolicyName}/updateAdministrativeState",
    }),
  );
export type RoutePoliciesUpdateAdministrativeStateInput =
  typeof RoutePoliciesUpdateAdministrativeStateInput.Type;

// Output Schema
export const RoutePoliciesUpdateAdministrativeStateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
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
        }),
      ),
    ),
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
    resourceId: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        successfulResources: Schema.optional(Schema.Array(Schema.String)),
        failedResources: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
  });
export type RoutePoliciesUpdateAdministrativeStateOutput =
  typeof RoutePoliciesUpdateAdministrativeStateOutput.Type;

// The operation
/**
 * Updated the admin state for this Route Policy.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param routePolicyName - Name of the Route Policy.
 */
export const RoutePoliciesUpdateAdministrativeState =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RoutePoliciesUpdateAdministrativeStateInput,
    outputSchema: RoutePoliciesUpdateAdministrativeStateOutput,
  }));
// Input Schema
export const RoutePoliciesValidateConfigurationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    routePolicyName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/routePolicies/{routePolicyName}/validateConfiguration",
    }),
  );
export type RoutePoliciesValidateConfigurationInput =
  typeof RoutePoliciesValidateConfigurationInput.Type;

// Output Schema
export const RoutePoliciesValidateConfigurationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type RoutePoliciesValidateConfigurationOutput =
  typeof RoutePoliciesValidateConfigurationOutput.Type;

// The operation
/**
 * Validates the configuration of the resources.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param routePolicyName - Name of the Route Policy.
 */
export const RoutePoliciesValidateConfiguration =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RoutePoliciesValidateConfigurationInput,
    outputSchema: RoutePoliciesValidateConfigurationOutput,
  }));
