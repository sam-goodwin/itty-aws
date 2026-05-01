/**
 * Azure Cognitiveservices API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const AccountCapabilityHostsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    capabilityHostName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/capabilityHosts/{capabilityHostName}",
    }),
  );
export type AccountCapabilityHostsCreateOrUpdateInput =
  typeof AccountCapabilityHostsCreateOrUpdateInput.Type;

// Output Schema
export const AccountCapabilityHostsCreateOrUpdateOutput =
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
export type AccountCapabilityHostsCreateOrUpdateOutput =
  typeof AccountCapabilityHostsCreateOrUpdateOutput.Type;

// The operation
/**
 * Create or update account capabilityHost.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param capabilityHostName - The name of the capability host associated with the Cognitive Services Resource
 */
export const AccountCapabilityHostsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AccountCapabilityHostsCreateOrUpdateInput,
    outputSchema: AccountCapabilityHostsCreateOrUpdateOutput,
  }));
// Input Schema
export const AccountCapabilityHostsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    capabilityHostName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/capabilityHosts/{capabilityHostName}",
    }),
  );
export type AccountCapabilityHostsDeleteInput =
  typeof AccountCapabilityHostsDeleteInput.Type;

// Output Schema
export const AccountCapabilityHostsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AccountCapabilityHostsDeleteOutput =
  typeof AccountCapabilityHostsDeleteOutput.Type;

// The operation
/**
 * Delete account capabilityHost.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param capabilityHostName - The name of the capability host associated with the Cognitive Services Resource
 */
export const AccountCapabilityHostsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AccountCapabilityHostsDeleteInput,
    outputSchema: AccountCapabilityHostsDeleteOutput,
  }));
// Input Schema
export const AccountCapabilityHostsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    capabilityHostName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/capabilityHosts/{capabilityHostName}",
    }),
  );
export type AccountCapabilityHostsGetInput =
  typeof AccountCapabilityHostsGetInput.Type;

// Output Schema
export const AccountCapabilityHostsGetOutput =
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
export type AccountCapabilityHostsGetOutput =
  typeof AccountCapabilityHostsGetOutput.Type;

// The operation
/**
 * Get account capabilityHost.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param capabilityHostName - The name of the capability host associated with the Cognitive Services Resource
 */
export const AccountCapabilityHostsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AccountCapabilityHostsGetInput,
    outputSchema: AccountCapabilityHostsGetOutput,
  }),
);
// Input Schema
export const AccountCapabilityHostsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/capabilityHosts",
    }),
  );
export type AccountCapabilityHostsListInput =
  typeof AccountCapabilityHostsListInput.Type;

// Output Schema
export const AccountCapabilityHostsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.NullOr(Schema.String)),
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
  });
export type AccountCapabilityHostsListOutput =
  typeof AccountCapabilityHostsListOutput.Type;

// The operation
/**
 * List capabilityHost.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 */
export const AccountCapabilityHostsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AccountCapabilityHostsListInput,
    outputSchema: AccountCapabilityHostsListOutput,
  }),
);
// Input Schema
export const AccountConnectionsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    connectionName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/connections/{connectionName}",
    }),
  );
export type AccountConnectionsCreateInput =
  typeof AccountConnectionsCreateInput.Type;

// Output Schema
export const AccountConnectionsCreateOutput =
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
export type AccountConnectionsCreateOutput =
  typeof AccountConnectionsCreateOutput.Type;

// The operation
/**
 * Create or update Cognitive Services account connection under the specified account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param connectionName - Friendly name of the connection
 */
export const AccountConnectionsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AccountConnectionsCreateInput,
    outputSchema: AccountConnectionsCreateOutput,
  }),
);
// Input Schema
export const AccountConnectionsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    connectionName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/connections/{connectionName}",
    }),
  );
export type AccountConnectionsDeleteInput =
  typeof AccountConnectionsDeleteInput.Type;

// Output Schema
export const AccountConnectionsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AccountConnectionsDeleteOutput =
  typeof AccountConnectionsDeleteOutput.Type;

// The operation
/**
 * Delete Cognitive Services account connection by name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param connectionName - Friendly name of the connection
 */
export const AccountConnectionsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AccountConnectionsDeleteInput,
    outputSchema: AccountConnectionsDeleteOutput,
  }),
);
// Input Schema
export const AccountConnectionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    connectionName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/connections/{connectionName}",
    }),
  );
export type AccountConnectionsGetInput = typeof AccountConnectionsGetInput.Type;

// Output Schema
export const AccountConnectionsGetOutput =
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
export type AccountConnectionsGetOutput =
  typeof AccountConnectionsGetOutput.Type;

// The operation
/**
 * Lists Cognitive Services account connection by name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param connectionName - Friendly name of the connection
 */
export const AccountConnectionsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AccountConnectionsGetInput,
    outputSchema: AccountConnectionsGetOutput,
  }),
);
// Input Schema
export const AccountConnectionsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
    target: Schema.optional(Schema.String),
    category: Schema.optional(Schema.String),
    includeAll: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/connections",
    }),
  );
export type AccountConnectionsListInput =
  typeof AccountConnectionsListInput.Type;

// Output Schema
export const AccountConnectionsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
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
  });
export type AccountConnectionsListOutput =
  typeof AccountConnectionsListOutput.Type;

// The operation
/**
 * Lists all the available  Cognitive Services account connections under the specified account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param target - Target of the connection.
 * @param category - Category of the connection.
 * @param includeAll - query parameter that indicates if get connection call should return both connections and datastores
 */
export const AccountConnectionsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AccountConnectionsListInput,
    outputSchema: AccountConnectionsListOutput,
  }),
);
// Input Schema
export const AccountConnectionsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    connectionName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/connections/{connectionName}",
    }),
  );
export type AccountConnectionsUpdateInput =
  typeof AccountConnectionsUpdateInput.Type;

// Output Schema
export const AccountConnectionsUpdateOutput =
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
export type AccountConnectionsUpdateOutput =
  typeof AccountConnectionsUpdateOutput.Type;

// The operation
/**
 * Update Cognitive Services account connection under the specified account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param connectionName - Friendly name of the connection
 */
export const AccountConnectionsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AccountConnectionsUpdateInput,
    outputSchema: AccountConnectionsUpdateOutput,
  }),
);
// Input Schema
export const AccountsCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  "api-version": Schema.String,
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}",
  }),
);
export type AccountsCreateInput = typeof AccountsCreateInput.Type;

// Output Schema
export const AccountsCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type AccountsCreateOutput = typeof AccountsCreateOutput.Type;

// The operation
/**
 * Create Cognitive Services Account. Accounts is a resource group wide resource type. It holds the keys for developer to access intelligent APIs. It's also the resource type for billing.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 */
export const AccountsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AccountsCreateInput,
  outputSchema: AccountsCreateOutput,
}));
// Input Schema
export const AccountsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  "api-version": Schema.String,
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}",
  }),
);
export type AccountsDeleteInput = typeof AccountsDeleteInput.Type;

// Output Schema
export const AccountsDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AccountsDeleteOutput = typeof AccountsDeleteOutput.Type;

// The operation
/**
 * Deletes a Cognitive Services account from the resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 */
export const AccountsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AccountsDeleteInput,
  outputSchema: AccountsDeleteOutput,
}));
// Input Schema
export const AccountsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  "api-version": Schema.String,
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}",
  }),
);
export type AccountsGetInput = typeof AccountsGetInput.Type;

// Output Schema
export const AccountsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type AccountsGetOutput = typeof AccountsGetOutput.Type;

// The operation
/**
 * Returns a Cognitive Services account specified by the parameters.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 */
export const AccountsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AccountsGetInput,
  outputSchema: AccountsGetOutput,
}));
// Input Schema
export const AccountsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  "api-version": Schema.String,
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/accounts",
  }),
);
export type AccountsListInput = typeof AccountsListInput.Type;

// Output Schema
export const AccountsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nextLink: Schema.optional(Schema.String),
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
});
export type AccountsListOutput = typeof AccountsListOutput.Type;

// The operation
/**
 * Returns all the resources of a particular type belonging to a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const AccountsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AccountsListInput,
  outputSchema: AccountsListOutput,
}));
// Input Schema
export const AccountsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts",
    }),
  );
export type AccountsListByResourceGroupInput =
  typeof AccountsListByResourceGroupInput.Type;

// Output Schema
export const AccountsListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
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
  });
export type AccountsListByResourceGroupOutput =
  typeof AccountsListByResourceGroupOutput.Type;

// The operation
/**
 * Returns all the resources of a particular type belonging to a resource group
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const AccountsListByResourceGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AccountsListByResourceGroupInput,
    outputSchema: AccountsListByResourceGroupOutput,
  }),
);
// Input Schema
export const AccountsListKeysInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  "api-version": Schema.String,
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/listKeys",
  }),
);
export type AccountsListKeysInput = typeof AccountsListKeysInput.Type;

// Output Schema
export const AccountsListKeysOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    key1: Schema.optional(Schema.String),
    key2: Schema.optional(Schema.String),
  },
);
export type AccountsListKeysOutput = typeof AccountsListKeysOutput.Type;

// The operation
/**
 * Lists the account keys for the specified Cognitive Services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 */
export const AccountsListKeys = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AccountsListKeysInput,
  outputSchema: AccountsListKeysOutput,
}));
// Input Schema
export const AccountsListModelsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/models",
    }),
  );
export type AccountsListModelsInput = typeof AccountsListModelsInput.Type;

// Output Schema
export const AccountsListModelsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          publisher: Schema.optional(Schema.String),
          format: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          version: Schema.optional(Schema.String),
          source: Schema.optional(Schema.String),
          sourceAccount: Schema.optional(Schema.String),
          callRateLimit: Schema.optional(
            Schema.Struct({
              count: Schema.optional(Schema.Number),
              renewalPeriod: Schema.optional(Schema.Number),
              rules: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    key: Schema.optional(Schema.String),
                    renewalPeriod: Schema.optional(Schema.Number),
                    count: Schema.optional(Schema.Number),
                    minCount: Schema.optional(Schema.Number),
                    dynamicThrottlingEnabled: Schema.optional(Schema.Boolean),
                    matchPatterns: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          path: Schema.optional(Schema.String),
                          method: Schema.optional(Schema.String),
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
    ),
  });
export type AccountsListModelsOutput = typeof AccountsListModelsOutput.Type;

// The operation
/**
 * List available Models for the requested Cognitive Services account
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 */
export const AccountsListModels = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AccountsListModelsInput,
  outputSchema: AccountsListModelsOutput,
}));
// Input Schema
export const AccountsListSkusInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  "api-version": Schema.String,
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/skus",
  }),
);
export type AccountsListSkusInput = typeof AccountsListSkusInput.Type;

// Output Schema
export const AccountsListSkusOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          resourceType: Schema.optional(Schema.String),
          sku: Schema.optional(
            Schema.Struct({
              name: Schema.String,
              tier: Schema.optional(
                Schema.Literals([
                  "Free",
                  "Basic",
                  "Standard",
                  "Premium",
                  "Enterprise",
                ]),
              ),
              size: Schema.optional(Schema.String),
              family: Schema.optional(Schema.String),
              capacity: Schema.optional(Schema.Number),
            }),
          ),
        }),
      ),
    ),
  },
);
export type AccountsListSkusOutput = typeof AccountsListSkusOutput.Type;

// The operation
/**
 * List available SKUs for the requested Cognitive Services account
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 */
export const AccountsListSkus = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AccountsListSkusInput,
  outputSchema: AccountsListSkusOutput,
}));
// Input Schema
export const AccountsListUsagesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/usages",
    }),
  );
export type AccountsListUsagesInput = typeof AccountsListUsagesInput.Type;

// Output Schema
export const AccountsListUsagesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          unit: Schema.optional(
            Schema.Literals([
              "Count",
              "Bytes",
              "Seconds",
              "Percent",
              "CountPerSecond",
              "BytesPerSecond",
              "Milliseconds",
            ]),
          ),
          name: Schema.optional(
            Schema.Struct({
              value: Schema.optional(Schema.String),
              localizedValue: Schema.optional(Schema.String),
            }),
          ),
          quotaPeriod: Schema.optional(Schema.String),
          limit: Schema.optional(Schema.Number),
          currentValue: Schema.optional(Schema.Number),
          nextResetTime: Schema.optional(Schema.String),
          status: Schema.optional(
            Schema.Literals(["Included", "Blocked", "InOverage", "Unknown"]),
          ),
        }),
      ),
    ),
  });
export type AccountsListUsagesOutput = typeof AccountsListUsagesOutput.Type;

// The operation
/**
 * Get usages for the requested Cognitive Services account
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param $filter - An OData filter expression that describes a subset of usages to return. The supported parameter is name.value (name of the metric, can have an or of multiple names).
 */
export const AccountsListUsages = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AccountsListUsagesInput,
  outputSchema: AccountsListUsagesOutput,
}));
// Input Schema
export const AccountsRegenerateKeyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/regenerateKey",
    }),
  );
export type AccountsRegenerateKeyInput = typeof AccountsRegenerateKeyInput.Type;

// Output Schema
export const AccountsRegenerateKeyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key1: Schema.optional(Schema.String),
    key2: Schema.optional(Schema.String),
  });
export type AccountsRegenerateKeyOutput =
  typeof AccountsRegenerateKeyOutput.Type;

// The operation
/**
 * Regenerates the specified account key for the specified Cognitive Services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 */
export const AccountsRegenerateKey = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AccountsRegenerateKeyInput,
    outputSchema: AccountsRegenerateKeyOutput,
  }),
);
// Input Schema
export const AccountsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  "api-version": Schema.String,
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}",
  }),
);
export type AccountsUpdateInput = typeof AccountsUpdateInput.Type;

// Output Schema
export const AccountsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type AccountsUpdateOutput = typeof AccountsUpdateOutput.Type;

// The operation
/**
 * Updates a Cognitive Services account
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 */
export const AccountsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AccountsUpdateInput,
  outputSchema: AccountsUpdateOutput,
}));
// Input Schema
export const AgentApplicationsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects/{projectName}/applications/{name}",
    }),
  );
export type AgentApplicationsCreateOrUpdateInput =
  typeof AgentApplicationsCreateOrUpdateInput.Type;

// Output Schema
export const AgentApplicationsCreateOrUpdateOutput =
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
export type AgentApplicationsCreateOrUpdateOutput =
  typeof AgentApplicationsCreateOrUpdateOutput.Type;

// The operation
/**
 * Creates or updates an Agent Application (asynchronous).
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param projectName - The name of Cognitive Services account's project.
 * @param name - Name for the Agent Application.
 */
export const AgentApplicationsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AgentApplicationsCreateOrUpdateInput,
    outputSchema: AgentApplicationsCreateOrUpdateOutput,
  }));
// Input Schema
export const AgentApplicationsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects/{projectName}/applications/{name}",
    }),
  );
export type AgentApplicationsDeleteInput =
  typeof AgentApplicationsDeleteInput.Type;

// Output Schema
export const AgentApplicationsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AgentApplicationsDeleteOutput =
  typeof AgentApplicationsDeleteOutput.Type;

// The operation
/**
 * Delete Agent Application.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param projectName - The name of Cognitive Services account's project.
 * @param name - Name for the Agent Application.
 */
export const AgentApplicationsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AgentApplicationsDeleteInput,
    outputSchema: AgentApplicationsDeleteOutput,
  }),
);
// Input Schema
export const AgentApplicationsDisableInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects/{projectName}/applications/{name}/disable",
    }),
  );
export type AgentApplicationsDisableInput =
  typeof AgentApplicationsDisableInput.Type;

// Output Schema
export const AgentApplicationsDisableOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AgentApplicationsDisableOutput =
  typeof AgentApplicationsDisableOutput.Type;

// The operation
/**
 * Disables an Agent Application.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param projectName - The name of Cognitive Services account's project.
 * @param name - Name for the Agent Application.
 */
export const AgentApplicationsDisable = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AgentApplicationsDisableInput,
    outputSchema: AgentApplicationsDisableOutput,
  }),
);
// Input Schema
export const AgentApplicationsEnableInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects/{projectName}/applications/{name}/enable",
    }),
  );
export type AgentApplicationsEnableInput =
  typeof AgentApplicationsEnableInput.Type;

// Output Schema
export const AgentApplicationsEnableOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AgentApplicationsEnableOutput =
  typeof AgentApplicationsEnableOutput.Type;

// The operation
/**
 * Enables an Agent Application.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param projectName - The name of Cognitive Services account's project.
 * @param name - Name for the Agent Application.
 */
export const AgentApplicationsEnable = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AgentApplicationsEnableInput,
    outputSchema: AgentApplicationsEnableOutput,
  }),
);
// Input Schema
export const AgentApplicationsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects/{projectName}/applications/{name}",
    }),
  );
export type AgentApplicationsGetInput = typeof AgentApplicationsGetInput.Type;

// Output Schema
export const AgentApplicationsGetOutput =
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
export type AgentApplicationsGetOutput = typeof AgentApplicationsGetOutput.Type;

// The operation
/**
 * Gets an Agent Application by name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param projectName - The name of Cognitive Services account's project.
 * @param name - Name for the Agent Application.
 */
export const AgentApplicationsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AgentApplicationsGetInput,
    outputSchema: AgentApplicationsGetOutput,
  }),
);
// Input Schema
export const AgentApplicationsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
    count: Schema.optional(Schema.Number),
    $skip: Schema.optional(Schema.Number),
    $skipToken: Schema.optional(Schema.String),
    names: Schema.optional(Schema.String),
    searchText: Schema.optional(Schema.String),
    orderBy: Schema.optional(Schema.String),
    orderByAsc: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects/{projectName}/applications",
    }),
  );
export type AgentApplicationsListInput = typeof AgentApplicationsListInput.Type;

// Output Schema
export const AgentApplicationsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.NullOr(Schema.String)),
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
  });
export type AgentApplicationsListOutput =
  typeof AgentApplicationsListOutput.Type;

// The operation
/**
 * Lists Agent Applications in the project.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param projectName - The name of Cognitive Services account's project.
 * @param count - Number of agent applications to be retrieved in a page of results.
 * @param $skip - Number of agent applications to skip.
 * @param $skipToken - Continuation token for pagination.
 * @param names - Names of agent applications to retrieve.
 * @param searchText - Search text for filtering agent applications.
 * @param orderBy - Field to order by.
 * @param orderByAsc - Whether to order in ascending order.
 */
export const AgentApplicationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AgentApplicationsListInput,
    outputSchema: AgentApplicationsListOutput,
  }),
);
// Input Schema
export const AgentApplicationsListAgentsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects/{projectName}/applications/{name}/listAgents",
    }),
  );
export type AgentApplicationsListAgentsInput =
  typeof AgentApplicationsListAgentsInput.Type;

// Output Schema
export const AgentApplicationsListAgentsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.NullOr(Schema.String)),
    value: Schema.optional(
      Schema.NullOr(
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
    ),
  });
export type AgentApplicationsListAgentsOutput =
  typeof AgentApplicationsListAgentsOutput.Type;

// The operation
/**
 * Lists agents for an Agent Application.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param projectName - The name of Cognitive Services account's project.
 * @param name - Name for the Agent Application.
 */
export const AgentApplicationsListAgents = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AgentApplicationsListAgentsInput,
    outputSchema: AgentApplicationsListAgentsOutput,
  }),
);
// Input Schema
export const AgentDeploymentsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    appName: Schema.String.pipe(T.PathParam()),
    deploymentName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects/{projectName}/applications/{appName}/agentDeployments/{deploymentName}",
    }),
  );
export type AgentDeploymentsCreateOrUpdateInput =
  typeof AgentDeploymentsCreateOrUpdateInput.Type;

// Output Schema
export const AgentDeploymentsCreateOrUpdateOutput =
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
export type AgentDeploymentsCreateOrUpdateOutput =
  typeof AgentDeploymentsCreateOrUpdateOutput.Type;

// The operation
/**
 * Creates or updates an Agent Deployment (asynchronous).
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param projectName - The name of Cognitive Services account's project.
 * @param appName - The name of the application associated with the Cognitive Services Account
 * @param deploymentName - The name of the deployment associated with the Cognitive Services Account
 */
export const AgentDeploymentsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AgentDeploymentsCreateOrUpdateInput,
    outputSchema: AgentDeploymentsCreateOrUpdateOutput,
  }));
// Input Schema
export const AgentDeploymentsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    appName: Schema.String.pipe(T.PathParam()),
    deploymentName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects/{projectName}/applications/{appName}/agentDeployments/{deploymentName}",
    }),
  );
export type AgentDeploymentsDeleteInput =
  typeof AgentDeploymentsDeleteInput.Type;

// Output Schema
export const AgentDeploymentsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AgentDeploymentsDeleteOutput =
  typeof AgentDeploymentsDeleteOutput.Type;

// The operation
/**
 * Delete Agent Deployment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param projectName - The name of Cognitive Services account's project.
 * @param appName - The name of the application associated with the Cognitive Services Account
 * @param deploymentName - The name of the deployment associated with the Cognitive Services Account
 */
export const AgentDeploymentsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AgentDeploymentsDeleteInput,
    outputSchema: AgentDeploymentsDeleteOutput,
  }),
);
// Input Schema
export const AgentDeploymentsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    appName: Schema.String.pipe(T.PathParam()),
    deploymentName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects/{projectName}/applications/{appName}/agentDeployments/{deploymentName}",
    }),
  );
export type AgentDeploymentsGetInput = typeof AgentDeploymentsGetInput.Type;

// Output Schema
export const AgentDeploymentsGetOutput =
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
export type AgentDeploymentsGetOutput = typeof AgentDeploymentsGetOutput.Type;

// The operation
/**
 * Gets an Agent Deployment by name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param projectName - The name of Cognitive Services account's project.
 * @param appName - The name of the application associated with the Cognitive Services Account
 * @param deploymentName - The name of the deployment associated with the Cognitive Services Account
 */
export const AgentDeploymentsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AgentDeploymentsGetInput,
  outputSchema: AgentDeploymentsGetOutput,
}));
// Input Schema
export const AgentDeploymentsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    appName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
    count: Schema.optional(Schema.Number),
    $skipToken: Schema.optional(Schema.String),
    names: Schema.optional(Schema.String),
    orderBy: Schema.optional(Schema.String),
    orderByAsc: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects/{projectName}/applications/{appName}/agentDeployments",
    }),
  );
export type AgentDeploymentsListInput = typeof AgentDeploymentsListInput.Type;

// Output Schema
export const AgentDeploymentsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.NullOr(Schema.String)),
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
  });
export type AgentDeploymentsListOutput = typeof AgentDeploymentsListOutput.Type;

// The operation
/**
 * Lists Agent Deployments in the application.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param projectName - The name of Cognitive Services account's project.
 * @param appName - The name of the application associated with the Cognitive Services Account
 * @param count - Number of agent deployments to be retrieved in a page of results.
 * @param $skipToken - Continuation token for pagination.
 * @param names - Names of agent deployments to retrieve.
 * @param orderBy - Field to order by.
 * @param orderByAsc - Whether to order in ascending order.
 */
export const AgentDeploymentsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AgentDeploymentsListInput,
    outputSchema: AgentDeploymentsListOutput,
  }),
);
// Input Schema
export const AgentDeploymentsStartInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    appName: Schema.String.pipe(T.PathParam()),
    deploymentName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects/{projectName}/applications/{appName}/agentDeployments/{deploymentName}/start",
    }),
  );
export type AgentDeploymentsStartInput = typeof AgentDeploymentsStartInput.Type;

// Output Schema
export const AgentDeploymentsStartOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AgentDeploymentsStartOutput =
  typeof AgentDeploymentsStartOutput.Type;

// The operation
/**
 * Starts an Agent Deployment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param projectName - The name of Cognitive Services account's project.
 * @param appName - The name of the application associated with the Cognitive Services Account
 * @param deploymentName - The name of the deployment associated with the Cognitive Services Account
 */
export const AgentDeploymentsStart = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AgentDeploymentsStartInput,
    outputSchema: AgentDeploymentsStartOutput,
  }),
);
// Input Schema
export const AgentDeploymentsStopInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    appName: Schema.String.pipe(T.PathParam()),
    deploymentName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects/{projectName}/applications/{appName}/agentDeployments/{deploymentName}/stop",
    }),
  );
export type AgentDeploymentsStopInput = typeof AgentDeploymentsStopInput.Type;

// Output Schema
export const AgentDeploymentsStopOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AgentDeploymentsStopOutput = typeof AgentDeploymentsStopOutput.Type;

// The operation
/**
 * Stops an Agent Deployment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param projectName - The name of Cognitive Services account's project.
 * @param appName - The name of the application associated with the Cognitive Services Account
 * @param deploymentName - The name of the deployment associated with the Cognitive Services Account
 */
export const AgentDeploymentsStop = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AgentDeploymentsStopInput,
    outputSchema: AgentDeploymentsStopOutput,
  }),
);
// Input Schema
export const CalculateModelCapacityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/calculateModelCapacity",
    }),
  );
export type CalculateModelCapacityInput =
  typeof CalculateModelCapacityInput.Type;

// Output Schema
export const CalculateModelCapacityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    model: Schema.optional(
      Schema.Struct({
        publisher: Schema.optional(Schema.String),
        format: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        version: Schema.optional(Schema.String),
        source: Schema.optional(Schema.String),
        sourceAccount: Schema.optional(Schema.String),
        callRateLimit: Schema.optional(
          Schema.Struct({
            count: Schema.optional(Schema.Number),
            renewalPeriod: Schema.optional(Schema.Number),
            rules: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  key: Schema.optional(Schema.String),
                  renewalPeriod: Schema.optional(Schema.Number),
                  count: Schema.optional(Schema.Number),
                  minCount: Schema.optional(Schema.Number),
                  dynamicThrottlingEnabled: Schema.optional(Schema.Boolean),
                  matchPatterns: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        path: Schema.optional(Schema.String),
                        method: Schema.optional(Schema.String),
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
    skuName: Schema.optional(Schema.String),
    estimatedCapacity: Schema.optional(
      Schema.Struct({
        value: Schema.optional(Schema.Number),
        deployableValue: Schema.optional(Schema.Number),
      }),
    ),
  });
export type CalculateModelCapacityOutput =
  typeof CalculateModelCapacityOutput.Type;

// The operation
/**
 * Model capacity calculator.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const calculateModelCapacity = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CalculateModelCapacityInput,
    outputSchema: CalculateModelCapacityOutput,
  }),
);
// Input Schema
export const CheckDomainAvailabilityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/checkDomainAvailability",
    }),
  );
export type CheckDomainAvailabilityInput =
  typeof CheckDomainAvailabilityInput.Type;

// Output Schema
export const CheckDomainAvailabilityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    isSubdomainAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.String),
    subdomainName: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  });
export type CheckDomainAvailabilityOutput =
  typeof CheckDomainAvailabilityOutput.Type;

// The operation
/**
 * Check whether a domain is available.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const CheckDomainAvailability = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CheckDomainAvailabilityInput,
    outputSchema: CheckDomainAvailabilityOutput,
  }),
);
// Input Schema
export const CheckSkuAvailabilityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/locations/{location}/checkSkuAvailability",
    }),
  );
export type CheckSkuAvailabilityInput = typeof CheckSkuAvailabilityInput.Type;

// Output Schema
export const CheckSkuAvailabilityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          kind: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          skuName: Schema.optional(Schema.String),
          skuAvailable: Schema.optional(Schema.Boolean),
          reason: Schema.optional(Schema.String),
          message: Schema.optional(Schema.String),
        }),
      ),
    ),
  });
export type CheckSkuAvailabilityOutput = typeof CheckSkuAvailabilityOutput.Type;

// The operation
/**
 * Check available SKUs.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The name of Azure region.
 */
export const CheckSkuAvailability = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CheckSkuAvailabilityInput,
    outputSchema: CheckSkuAvailabilityOutput,
  }),
);
// Input Schema
export const CommitmentPlansCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    commitmentPlanName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/commitmentPlans/{commitmentPlanName}",
    }),
  );
export type CommitmentPlansCreateOrUpdateInput =
  typeof CommitmentPlansCreateOrUpdateInput.Type;

// Output Schema
export const CommitmentPlansCreateOrUpdateOutput =
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
export type CommitmentPlansCreateOrUpdateOutput =
  typeof CommitmentPlansCreateOrUpdateOutput.Type;

// The operation
/**
 * Update the state of specified commitmentPlans associated with the Cognitive Services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param commitmentPlanName - The name of the commitmentPlan associated with the Cognitive Services Account
 */
export const CommitmentPlansCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CommitmentPlansCreateOrUpdateInput,
    outputSchema: CommitmentPlansCreateOrUpdateOutput,
  }));
// Input Schema
export const CommitmentPlansCreateOrUpdateAssociationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    commitmentPlanName: Schema.String.pipe(T.PathParam()),
    commitmentPlanAssociationName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/commitmentPlans/{commitmentPlanName}/accountAssociations/{commitmentPlanAssociationName}",
    }),
  );
export type CommitmentPlansCreateOrUpdateAssociationInput =
  typeof CommitmentPlansCreateOrUpdateAssociationInput.Type;

// Output Schema
export const CommitmentPlansCreateOrUpdateAssociationOutput =
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
export type CommitmentPlansCreateOrUpdateAssociationOutput =
  typeof CommitmentPlansCreateOrUpdateAssociationOutput.Type;

// The operation
/**
 * Create or update the association of the Cognitive Services commitment plan.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param commitmentPlanName - The name of the commitmentPlan associated with the Cognitive Services Account
 * @param commitmentPlanAssociationName - The name of the commitment plan association with the Cognitive Services Account
 */
export const CommitmentPlansCreateOrUpdateAssociation =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CommitmentPlansCreateOrUpdateAssociationInput,
    outputSchema: CommitmentPlansCreateOrUpdateAssociationOutput,
  }));
// Input Schema
export const CommitmentPlansCreateOrUpdatePlanInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    commitmentPlanName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/commitmentPlans/{commitmentPlanName}",
    }),
  );
export type CommitmentPlansCreateOrUpdatePlanInput =
  typeof CommitmentPlansCreateOrUpdatePlanInput.Type;

// Output Schema
export const CommitmentPlansCreateOrUpdatePlanOutput =
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
export type CommitmentPlansCreateOrUpdatePlanOutput =
  typeof CommitmentPlansCreateOrUpdatePlanOutput.Type;

// The operation
/**
 * Create Cognitive Services commitment plan.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param commitmentPlanName - The name of the commitmentPlan associated with the Cognitive Services Account
 */
export const CommitmentPlansCreateOrUpdatePlan =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CommitmentPlansCreateOrUpdatePlanInput,
    outputSchema: CommitmentPlansCreateOrUpdatePlanOutput,
  }));
// Input Schema
export const CommitmentPlansDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    commitmentPlanName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/commitmentPlans/{commitmentPlanName}",
    }),
  );
export type CommitmentPlansDeleteInput = typeof CommitmentPlansDeleteInput.Type;

// Output Schema
export const CommitmentPlansDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type CommitmentPlansDeleteOutput =
  typeof CommitmentPlansDeleteOutput.Type;

// The operation
/**
 * Deletes the specified commitmentPlan associated with the Cognitive Services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param commitmentPlanName - The name of the commitmentPlan associated with the Cognitive Services Account
 */
export const CommitmentPlansDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CommitmentPlansDeleteInput,
    outputSchema: CommitmentPlansDeleteOutput,
  }),
);
// Input Schema
export const CommitmentPlansDeleteAssociationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    commitmentPlanName: Schema.String.pipe(T.PathParam()),
    commitmentPlanAssociationName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/commitmentPlans/{commitmentPlanName}/accountAssociations/{commitmentPlanAssociationName}",
    }),
  );
export type CommitmentPlansDeleteAssociationInput =
  typeof CommitmentPlansDeleteAssociationInput.Type;

// Output Schema
export const CommitmentPlansDeleteAssociationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type CommitmentPlansDeleteAssociationOutput =
  typeof CommitmentPlansDeleteAssociationOutput.Type;

// The operation
/**
 * Deletes the association of the Cognitive Services commitment plan.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param commitmentPlanName - The name of the commitmentPlan associated with the Cognitive Services Account
 * @param commitmentPlanAssociationName - The name of the commitment plan association with the Cognitive Services Account
 */
export const CommitmentPlansDeleteAssociation =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CommitmentPlansDeleteAssociationInput,
    outputSchema: CommitmentPlansDeleteAssociationOutput,
  }));
// Input Schema
export const CommitmentPlansDeletePlanInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    commitmentPlanName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/commitmentPlans/{commitmentPlanName}",
    }),
  );
export type CommitmentPlansDeletePlanInput =
  typeof CommitmentPlansDeletePlanInput.Type;

// Output Schema
export const CommitmentPlansDeletePlanOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type CommitmentPlansDeletePlanOutput =
  typeof CommitmentPlansDeletePlanOutput.Type;

// The operation
/**
 * Deletes a Cognitive Services commitment plan from the resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param commitmentPlanName - The name of the commitmentPlan associated with the Cognitive Services Account
 */
export const CommitmentPlansDeletePlan = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CommitmentPlansDeletePlanInput,
    outputSchema: CommitmentPlansDeletePlanOutput,
  }),
);
// Input Schema
export const CommitmentPlansGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    commitmentPlanName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/commitmentPlans/{commitmentPlanName}",
    }),
  );
export type CommitmentPlansGetInput = typeof CommitmentPlansGetInput.Type;

// Output Schema
export const CommitmentPlansGetOutput =
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
export type CommitmentPlansGetOutput = typeof CommitmentPlansGetOutput.Type;

// The operation
/**
 * Gets the specified commitmentPlans associated with the Cognitive Services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param commitmentPlanName - The name of the commitmentPlan associated with the Cognitive Services Account
 */
export const CommitmentPlansGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CommitmentPlansGetInput,
  outputSchema: CommitmentPlansGetOutput,
}));
// Input Schema
export const CommitmentPlansGetAssociationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    commitmentPlanName: Schema.String.pipe(T.PathParam()),
    commitmentPlanAssociationName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/commitmentPlans/{commitmentPlanName}/accountAssociations/{commitmentPlanAssociationName}",
    }),
  );
export type CommitmentPlansGetAssociationInput =
  typeof CommitmentPlansGetAssociationInput.Type;

// Output Schema
export const CommitmentPlansGetAssociationOutput =
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
export type CommitmentPlansGetAssociationOutput =
  typeof CommitmentPlansGetAssociationOutput.Type;

// The operation
/**
 * Gets the association of the Cognitive Services commitment plan.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param commitmentPlanName - The name of the commitmentPlan associated with the Cognitive Services Account
 * @param commitmentPlanAssociationName - The name of the commitment plan association with the Cognitive Services Account
 */
export const CommitmentPlansGetAssociation =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CommitmentPlansGetAssociationInput,
    outputSchema: CommitmentPlansGetAssociationOutput,
  }));
// Input Schema
export const CommitmentPlansGetPlanInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    commitmentPlanName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/commitmentPlans/{commitmentPlanName}",
    }),
  );
export type CommitmentPlansGetPlanInput =
  typeof CommitmentPlansGetPlanInput.Type;

// Output Schema
export const CommitmentPlansGetPlanOutput =
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
export type CommitmentPlansGetPlanOutput =
  typeof CommitmentPlansGetPlanOutput.Type;

// The operation
/**
 * Returns a Cognitive Services commitment plan specified by the parameters.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param commitmentPlanName - The name of the commitmentPlan associated with the Cognitive Services Account
 */
export const CommitmentPlansGetPlan = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CommitmentPlansGetPlanInput,
    outputSchema: CommitmentPlansGetPlanOutput,
  }),
);
// Input Schema
export const CommitmentPlansListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/commitmentPlans",
    }),
  );
export type CommitmentPlansListInput = typeof CommitmentPlansListInput.Type;

// Output Schema
export const CommitmentPlansListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
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
  });
export type CommitmentPlansListOutput = typeof CommitmentPlansListOutput.Type;

// The operation
/**
 * Gets the commitmentPlans associated with the Cognitive Services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 */
export const CommitmentPlansList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CommitmentPlansListInput,
  outputSchema: CommitmentPlansListOutput,
}));
// Input Schema
export const CommitmentPlansListAssociationsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    commitmentPlanName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/commitmentPlans/{commitmentPlanName}/accountAssociations",
    }),
  );
export type CommitmentPlansListAssociationsInput =
  typeof CommitmentPlansListAssociationsInput.Type;

// Output Schema
export const CommitmentPlansListAssociationsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
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
  });
export type CommitmentPlansListAssociationsOutput =
  typeof CommitmentPlansListAssociationsOutput.Type;

// The operation
/**
 * Gets the associations of the Cognitive Services commitment plan.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param commitmentPlanName - The name of the commitmentPlan associated with the Cognitive Services Account
 */
export const CommitmentPlansListAssociations =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CommitmentPlansListAssociationsInput,
    outputSchema: CommitmentPlansListAssociationsOutput,
  }));
// Input Schema
export const CommitmentPlansListPlansByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/commitmentPlans",
    }),
  );
export type CommitmentPlansListPlansByResourceGroupInput =
  typeof CommitmentPlansListPlansByResourceGroupInput.Type;

// Output Schema
export const CommitmentPlansListPlansByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
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
  });
export type CommitmentPlansListPlansByResourceGroupOutput =
  typeof CommitmentPlansListPlansByResourceGroupOutput.Type;

// The operation
/**
 * Returns all the resources of a particular type belonging to a resource group
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const CommitmentPlansListPlansByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CommitmentPlansListPlansByResourceGroupInput,
    outputSchema: CommitmentPlansListPlansByResourceGroupOutput,
  }));
// Input Schema
export const CommitmentPlansListPlansBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/commitmentPlans",
    }),
  );
export type CommitmentPlansListPlansBySubscriptionInput =
  typeof CommitmentPlansListPlansBySubscriptionInput.Type;

// Output Schema
export const CommitmentPlansListPlansBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
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
  });
export type CommitmentPlansListPlansBySubscriptionOutput =
  typeof CommitmentPlansListPlansBySubscriptionOutput.Type;

// The operation
/**
 * Returns all the resources of a particular type belonging to a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const CommitmentPlansListPlansBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CommitmentPlansListPlansBySubscriptionInput,
    outputSchema: CommitmentPlansListPlansBySubscriptionOutput,
  }));
// Input Schema
export const CommitmentPlansUpdatePlanInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    commitmentPlanName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/commitmentPlans/{commitmentPlanName}",
    }),
  );
export type CommitmentPlansUpdatePlanInput =
  typeof CommitmentPlansUpdatePlanInput.Type;

// Output Schema
export const CommitmentPlansUpdatePlanOutput =
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
export type CommitmentPlansUpdatePlanOutput =
  typeof CommitmentPlansUpdatePlanOutput.Type;

// The operation
/**
 * Create Cognitive Services commitment plan.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param commitmentPlanName - The name of the commitmentPlan associated with the Cognitive Services Account
 */
export const CommitmentPlansUpdatePlan = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CommitmentPlansUpdatePlanInput,
    outputSchema: CommitmentPlansUpdatePlanOutput,
  }),
);
// Input Schema
export const CommitmentTiersListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/locations/{location}/commitmentTiers",
    }),
  );
export type CommitmentTiersListInput = typeof CommitmentTiersListInput.Type;

// Output Schema
export const CommitmentTiersListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          kind: Schema.optional(Schema.String),
          skuName: Schema.optional(Schema.String),
          hostingModel: Schema.optional(
            Schema.Literals([
              "Web",
              "ConnectedContainer",
              "DisconnectedContainer",
              "ProvisionedWeb",
            ]),
          ),
          planType: Schema.optional(Schema.String),
          tier: Schema.optional(Schema.String),
          maxCount: Schema.optional(Schema.Number),
          quota: Schema.optional(
            Schema.Struct({
              quantity: Schema.optional(Schema.Number),
              unit: Schema.optional(Schema.String),
            }),
          ),
          cost: Schema.optional(
            Schema.Struct({
              commitmentMeterId: Schema.optional(Schema.String),
              overageMeterId: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
    ),
  });
export type CommitmentTiersListOutput = typeof CommitmentTiersListOutput.Type;

// The operation
/**
 * List Commitment Tiers.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The name of Azure region.
 */
export const CommitmentTiersList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CommitmentTiersListInput,
  outputSchema: CommitmentTiersListOutput,
}));
// Input Schema
export const DefenderForAISettingsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    defenderForAISettingName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/defenderForAISettings/{defenderForAISettingName}",
    }),
  );
export type DefenderForAISettingsCreateOrUpdateInput =
  typeof DefenderForAISettingsCreateOrUpdateInput.Type;

// Output Schema
export const DefenderForAISettingsCreateOrUpdateOutput =
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
export type DefenderForAISettingsCreateOrUpdateOutput =
  typeof DefenderForAISettingsCreateOrUpdateOutput.Type;

// The operation
/**
 * Creates or Updates the specified Defender for AI setting.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param defenderForAISettingName - The name of the defender for AI setting.
 */
export const DefenderForAISettingsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DefenderForAISettingsCreateOrUpdateInput,
    outputSchema: DefenderForAISettingsCreateOrUpdateOutput,
  }));
// Input Schema
export const DefenderForAISettingsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    defenderForAISettingName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/defenderForAISettings/{defenderForAISettingName}",
    }),
  );
export type DefenderForAISettingsGetInput =
  typeof DefenderForAISettingsGetInput.Type;

// Output Schema
export const DefenderForAISettingsGetOutput =
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
export type DefenderForAISettingsGetOutput =
  typeof DefenderForAISettingsGetOutput.Type;

// The operation
/**
 * Gets the specified Defender for AI setting by name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param defenderForAISettingName - The name of the defender for AI setting.
 */
export const DefenderForAISettingsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DefenderForAISettingsGetInput,
    outputSchema: DefenderForAISettingsGetOutput,
  }),
);
// Input Schema
export const DefenderForAISettingsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/defenderForAISettings",
    }),
  );
export type DefenderForAISettingsListInput =
  typeof DefenderForAISettingsListInput.Type;

// Output Schema
export const DefenderForAISettingsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
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
  });
export type DefenderForAISettingsListOutput =
  typeof DefenderForAISettingsListOutput.Type;

// The operation
/**
 * Lists the Defender for AI settings.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 */
export const DefenderForAISettingsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DefenderForAISettingsListInput,
    outputSchema: DefenderForAISettingsListOutput,
  }),
);
// Input Schema
export const DefenderForAISettingsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    defenderForAISettingName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/defenderForAISettings/{defenderForAISettingName}",
    }),
  );
export type DefenderForAISettingsUpdateInput =
  typeof DefenderForAISettingsUpdateInput.Type;

// Output Schema
export const DefenderForAISettingsUpdateOutput =
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
export type DefenderForAISettingsUpdateOutput =
  typeof DefenderForAISettingsUpdateOutput.Type;

// The operation
/**
 * Updates the specified Defender for AI setting.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param defenderForAISettingName - The name of the defender for AI setting.
 */
export const DefenderForAISettingsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DefenderForAISettingsUpdateInput,
    outputSchema: DefenderForAISettingsUpdateOutput,
  }),
);
// Input Schema
export const DeletedAccountsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/locations/{location}/resourceGroups/{resourceGroupName}/deletedAccounts/{accountName}",
    }),
  );
export type DeletedAccountsGetInput = typeof DeletedAccountsGetInput.Type;

// Output Schema
export const DeletedAccountsGetOutput =
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
export type DeletedAccountsGetOutput = typeof DeletedAccountsGetOutput.Type;

// The operation
/**
 * Returns a Cognitive Services account specified by the parameters.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The name of Azure region.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 */
export const DeletedAccountsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeletedAccountsGetInput,
  outputSchema: DeletedAccountsGetOutput,
}));
// Input Schema
export const DeletedAccountsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/deletedAccounts",
    }),
  );
export type DeletedAccountsListInput = typeof DeletedAccountsListInput.Type;

// Output Schema
export const DeletedAccountsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
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
  });
export type DeletedAccountsListOutput = typeof DeletedAccountsListOutput.Type;

// The operation
/**
 * Returns all the resources of a particular type belonging to a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const DeletedAccountsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeletedAccountsListInput,
  outputSchema: DeletedAccountsListOutput,
}));
// Input Schema
export const DeletedAccountsPurgeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/locations/{location}/resourceGroups/{resourceGroupName}/deletedAccounts/{accountName}",
    }),
  );
export type DeletedAccountsPurgeInput = typeof DeletedAccountsPurgeInput.Type;

// Output Schema
export const DeletedAccountsPurgeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeletedAccountsPurgeOutput = typeof DeletedAccountsPurgeOutput.Type;

// The operation
/**
 * Deletes a Cognitive Services account from the resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The name of Azure region.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 */
export const DeletedAccountsPurge = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeletedAccountsPurgeInput,
    outputSchema: DeletedAccountsPurgeOutput,
  }),
);
// Input Schema
export const DeploymentsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    deploymentName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/deployments/{deploymentName}",
    }),
  );
export type DeploymentsCreateOrUpdateInput =
  typeof DeploymentsCreateOrUpdateInput.Type;

// Output Schema
export const DeploymentsCreateOrUpdateOutput =
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
export type DeploymentsCreateOrUpdateOutput =
  typeof DeploymentsCreateOrUpdateOutput.Type;

// The operation
/**
 * Update the state of specified deployments associated with the Cognitive Services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param deploymentName - The name of the deployment associated with the Cognitive Services Account
 */
export const DeploymentsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeploymentsCreateOrUpdateInput,
    outputSchema: DeploymentsCreateOrUpdateOutput,
  }),
);
// Input Schema
export const DeploymentsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    deploymentName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  },
).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/deployments/{deploymentName}",
  }),
);
export type DeploymentsDeleteInput = typeof DeploymentsDeleteInput.Type;

// Output Schema
export const DeploymentsDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeploymentsDeleteOutput = typeof DeploymentsDeleteOutput.Type;

// The operation
/**
 * Deletes the specified deployment associated with the Cognitive Services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param deploymentName - The name of the deployment associated with the Cognitive Services Account
 */
export const DeploymentsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeploymentsDeleteInput,
  outputSchema: DeploymentsDeleteOutput,
}));
// Input Schema
export const DeploymentsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  deploymentName: Schema.String.pipe(T.PathParam()),
  "api-version": Schema.String,
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/deployments/{deploymentName}",
  }),
);
export type DeploymentsGetInput = typeof DeploymentsGetInput.Type;

// Output Schema
export const DeploymentsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type DeploymentsGetOutput = typeof DeploymentsGetOutput.Type;

// The operation
/**
 * Gets the specified deployments associated with the Cognitive Services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param deploymentName - The name of the deployment associated with the Cognitive Services Account
 */
export const DeploymentsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeploymentsGetInput,
  outputSchema: DeploymentsGetOutput,
}));
// Input Schema
export const DeploymentsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  "api-version": Schema.String,
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/deployments",
  }),
);
export type DeploymentsListInput = typeof DeploymentsListInput.Type;

// Output Schema
export const DeploymentsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nextLink: Schema.optional(Schema.String),
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
});
export type DeploymentsListOutput = typeof DeploymentsListOutput.Type;

// The operation
/**
 * Gets the deployments associated with the Cognitive Services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 */
export const DeploymentsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeploymentsListInput,
  outputSchema: DeploymentsListOutput,
}));
// Input Schema
export const DeploymentsListSkusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    deploymentName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/deployments/{deploymentName}/skus",
    }),
  );
export type DeploymentsListSkusInput = typeof DeploymentsListSkusInput.Type;

// Output Schema
export const DeploymentsListSkusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          resourceType: Schema.optional(Schema.String),
          sku: Schema.optional(
            Schema.Struct({
              name: Schema.String,
              tier: Schema.optional(
                Schema.Literals([
                  "Free",
                  "Basic",
                  "Standard",
                  "Premium",
                  "Enterprise",
                ]),
              ),
              size: Schema.optional(Schema.String),
              family: Schema.optional(Schema.String),
              capacity: Schema.optional(Schema.Number),
            }),
          ),
          capacity: Schema.optional(
            Schema.Struct({
              minimum: Schema.optional(Schema.Number),
              maximum: Schema.optional(Schema.Number),
              step: Schema.optional(Schema.Number),
              default: Schema.optional(Schema.Number),
              allowedValues: Schema.optional(Schema.Array(Schema.Number)),
            }),
          ),
        }),
      ),
    ),
  });
export type DeploymentsListSkusOutput = typeof DeploymentsListSkusOutput.Type;

// The operation
/**
 * Lists the specified deployments skus associated with the Cognitive Services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param deploymentName - The name of the deployment associated with the Cognitive Services Account
 */
export const DeploymentsListSkus = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeploymentsListSkusInput,
  outputSchema: DeploymentsListSkusOutput,
}));
// Input Schema
export const DeploymentsPauseInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  deploymentName: Schema.String.pipe(T.PathParam()),
  "api-version": Schema.String,
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/deployments/{deploymentName}/pause",
  }),
);
export type DeploymentsPauseInput = typeof DeploymentsPauseInput.Type;

// Output Schema
export const DeploymentsPauseOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
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
export type DeploymentsPauseOutput = typeof DeploymentsPauseOutput.Type;

// The operation
/**
 * Pause a deployment
 *
 * Pauses inferencing on a deployment by setting the deploymentState to 'Paused' (see #/definitions/DeploymentProperties/properties/deploymentState). Only Standard, DataZoneStandard, and GlobalStandard SKUs support this operation. Inference requests to the paused deployment endpoint will receive HTTP 423 (Locked). This operation is idempotent.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param deploymentName - The name of the deployment associated with the Cognitive Services Account
 */
export const DeploymentsPause = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeploymentsPauseInput,
  outputSchema: DeploymentsPauseOutput,
}));
// Input Schema
export const DeploymentsResumeInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    deploymentName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  },
).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/deployments/{deploymentName}/resume",
  }),
);
export type DeploymentsResumeInput = typeof DeploymentsResumeInput.Type;

// Output Schema
export const DeploymentsResumeOutput =
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
export type DeploymentsResumeOutput = typeof DeploymentsResumeOutput.Type;

// The operation
/**
 * Resume a deployment
 *
 * Resumes inferencing on a previously paused deployment by setting the deploymentState to 'Running' (see #/definitions/DeploymentProperties/properties/deploymentState). This operation is idempotent and can be safely called on already running deployments.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param deploymentName - The name of the deployment associated with the Cognitive Services Account
 */
export const DeploymentsResume = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeploymentsResumeInput,
  outputSchema: DeploymentsResumeOutput,
}));
// Input Schema
export const DeploymentsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    deploymentName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  },
).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/deployments/{deploymentName}",
  }),
);
export type DeploymentsUpdateInput = typeof DeploymentsUpdateInput.Type;

// Output Schema
export const DeploymentsUpdateOutput =
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
export type DeploymentsUpdateOutput = typeof DeploymentsUpdateOutput.Type;

// The operation
/**
 * Update specified deployments associated with the Cognitive Services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param deploymentName - The name of the deployment associated with the Cognitive Services Account
 */
export const DeploymentsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeploymentsUpdateInput,
  outputSchema: DeploymentsUpdateOutput,
}));
// Input Schema
export const EncryptionScopesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    encryptionScopeName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/encryptionScopes/{encryptionScopeName}",
    }),
  );
export type EncryptionScopesCreateOrUpdateInput =
  typeof EncryptionScopesCreateOrUpdateInput.Type;

// Output Schema
export const EncryptionScopesCreateOrUpdateOutput =
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
export type EncryptionScopesCreateOrUpdateOutput =
  typeof EncryptionScopesCreateOrUpdateOutput.Type;

// The operation
/**
 * Update the state of specified encryptionScope associated with the Cognitive Services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param encryptionScopeName - The name of the encryptionScope associated with the Cognitive Services Account
 */
export const EncryptionScopesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: EncryptionScopesCreateOrUpdateInput,
    outputSchema: EncryptionScopesCreateOrUpdateOutput,
  }));
// Input Schema
export const EncryptionScopesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    encryptionScopeName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/encryptionScopes/{encryptionScopeName}",
    }),
  );
export type EncryptionScopesDeleteInput =
  typeof EncryptionScopesDeleteInput.Type;

// Output Schema
export const EncryptionScopesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type EncryptionScopesDeleteOutput =
  typeof EncryptionScopesDeleteOutput.Type;

// The operation
/**
 * Deletes the specified encryptionScope associated with the Cognitive Services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param encryptionScopeName - The name of the encryptionScope associated with the Cognitive Services Account
 */
export const EncryptionScopesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: EncryptionScopesDeleteInput,
    outputSchema: EncryptionScopesDeleteOutput,
  }),
);
// Input Schema
export const EncryptionScopesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    encryptionScopeName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/encryptionScopes/{encryptionScopeName}",
    }),
  );
export type EncryptionScopesGetInput = typeof EncryptionScopesGetInput.Type;

// Output Schema
export const EncryptionScopesGetOutput =
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
export type EncryptionScopesGetOutput = typeof EncryptionScopesGetOutput.Type;

// The operation
/**
 * Gets the specified EncryptionScope associated with the Cognitive Services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param encryptionScopeName - The name of the encryptionScope associated with the Cognitive Services Account
 */
export const EncryptionScopesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: EncryptionScopesGetInput,
  outputSchema: EncryptionScopesGetOutput,
}));
// Input Schema
export const EncryptionScopesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/encryptionScopes",
    }),
  );
export type EncryptionScopesListInput = typeof EncryptionScopesListInput.Type;

// Output Schema
export const EncryptionScopesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
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
  });
export type EncryptionScopesListOutput = typeof EncryptionScopesListOutput.Type;

// The operation
/**
 * Gets the content filters associated with the Azure OpenAI account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 */
export const EncryptionScopesList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: EncryptionScopesListInput,
    outputSchema: EncryptionScopesListOutput,
  }),
);
// Input Schema
export const LocationBasedModelCapacitiesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
    modelFormat: Schema.String,
    modelName: Schema.String,
    modelVersion: Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/locations/{location}/modelCapacities",
    }),
  );
export type LocationBasedModelCapacitiesListInput =
  typeof LocationBasedModelCapacitiesListInput.Type;

// Output Schema
export const LocationBasedModelCapacitiesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
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
  });
export type LocationBasedModelCapacitiesListOutput =
  typeof LocationBasedModelCapacitiesListOutput.Type;

// The operation
/**
 * List Location Based ModelCapacities.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The name of Azure region.
 * @param modelFormat - The format of the Model
 * @param modelName - The name of the Model
 * @param modelVersion - The version of the Model
 */
export const LocationBasedModelCapacitiesList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LocationBasedModelCapacitiesListInput,
    outputSchema: LocationBasedModelCapacitiesListOutput,
  }));
// Input Schema
export const ManagedNetworkProvisionsProvisionManagedNetworkInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    managedNetworkName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/managedNetworks/{managedNetworkName}/provision",
    }),
  );
export type ManagedNetworkProvisionsProvisionManagedNetworkInput =
  typeof ManagedNetworkProvisionsProvisionManagedNetworkInput.Type;

// Output Schema
export const ManagedNetworkProvisionsProvisionManagedNetworkOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(Schema.Literals(["Inactive", "Active"])),
  });
export type ManagedNetworkProvisionsProvisionManagedNetworkOutput =
  typeof ManagedNetworkProvisionsProvisionManagedNetworkOutput.Type;

// The operation
/**
 * Provisions the managed network of a cognitive services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param managedNetworkName - Name of the managedNetwork associated with the cognitive services account. Only 'default' is supported.
 */
export const ManagedNetworkProvisionsProvisionManagedNetwork =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ManagedNetworkProvisionsProvisionManagedNetworkInput,
    outputSchema: ManagedNetworkProvisionsProvisionManagedNetworkOutput,
  }));
// Input Schema
export const ManagedNetworkSettingsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    managedNetworkName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/managedNetworks/{managedNetworkName}",
    }),
  );
export type ManagedNetworkSettingsGetInput =
  typeof ManagedNetworkSettingsGetInput.Type;

// Output Schema
export const ManagedNetworkSettingsGetOutput =
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
export type ManagedNetworkSettingsGetOutput =
  typeof ManagedNetworkSettingsGetOutput.Type;

// The operation
/**
 * Get API for managed network settings of a cognitive services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param managedNetworkName - Name of the managedNetwork associated with the cognitive services account. Only 'default' is supported.
 */
export const ManagedNetworkSettingsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ManagedNetworkSettingsGetInput,
    outputSchema: ManagedNetworkSettingsGetOutput,
  }),
);
// Input Schema
export const ManagedNetworkSettingsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/managedNetworks",
    }),
  );
export type ManagedNetworkSettingsListInput =
  typeof ManagedNetworkSettingsListInput.Type;

// Output Schema
export const ManagedNetworkSettingsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
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
  });
export type ManagedNetworkSettingsListOutput =
  typeof ManagedNetworkSettingsListOutput.Type;

// The operation
/**
 * List API for managed network settings of a cognitive services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 */
export const ManagedNetworkSettingsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ManagedNetworkSettingsListInput,
    outputSchema: ManagedNetworkSettingsListOutput,
  }),
);
// Input Schema
export const ManagedNetworkSettingsPatchInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    managedNetworkName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/managedNetworks/{managedNetworkName}",
    }),
  );
export type ManagedNetworkSettingsPatchInput =
  typeof ManagedNetworkSettingsPatchInput.Type;

// Output Schema
export const ManagedNetworkSettingsPatchOutput =
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
export type ManagedNetworkSettingsPatchOutput =
  typeof ManagedNetworkSettingsPatchOutput.Type;

// The operation
/**
 * Patch API for managed network settings of a cognitive services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param managedNetworkName - Name of the managedNetwork associated with the cognitive services account. Only 'default' is supported.
 */
export const ManagedNetworkSettingsPatch = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ManagedNetworkSettingsPatchInput,
    outputSchema: ManagedNetworkSettingsPatchOutput,
  }),
);
// Input Schema
export const ManagedNetworkSettingsPutInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    managedNetworkName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/managedNetworks/{managedNetworkName}",
    }),
  );
export type ManagedNetworkSettingsPutInput =
  typeof ManagedNetworkSettingsPutInput.Type;

// Output Schema
export const ManagedNetworkSettingsPutOutput =
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
export type ManagedNetworkSettingsPutOutput =
  typeof ManagedNetworkSettingsPutOutput.Type;

// The operation
/**
 * PUT API for managed network settings of a cognitive services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param managedNetworkName - Name of the managedNetwork associated with the cognitive services account. Only 'default' is supported.
 */
export const ManagedNetworkSettingsPut = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ManagedNetworkSettingsPutInput,
    outputSchema: ManagedNetworkSettingsPutOutput,
  }),
);
// Input Schema
export const ModelCapacitiesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
    modelFormat: Schema.String,
    modelName: Schema.String,
    modelVersion: Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/modelCapacities",
    }),
  );
export type ModelCapacitiesListInput = typeof ModelCapacitiesListInput.Type;

// Output Schema
export const ModelCapacitiesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
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
  });
export type ModelCapacitiesListOutput = typeof ModelCapacitiesListOutput.Type;

// The operation
/**
 * List ModelCapacities.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param modelFormat - The format of the Model
 * @param modelName - The name of the Model
 * @param modelVersion - The version of the Model
 */
export const ModelCapacitiesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ModelCapacitiesListInput,
  outputSchema: ModelCapacitiesListOutput,
}));
// Input Schema
export const ModelsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  location: Schema.String.pipe(T.PathParam()),
  "api-version": Schema.String,
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/locations/{location}/models",
  }),
);
export type ModelsListInput = typeof ModelsListInput.Type;

// Output Schema
export const ModelsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nextLink: Schema.optional(Schema.String),
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        model: Schema.optional(
          Schema.Struct({
            publisher: Schema.optional(Schema.String),
            format: Schema.optional(Schema.String),
            name: Schema.optional(Schema.String),
            version: Schema.optional(Schema.String),
            source: Schema.optional(Schema.String),
            sourceAccount: Schema.optional(Schema.String),
            callRateLimit: Schema.optional(
              Schema.Struct({
                count: Schema.optional(Schema.Number),
                renewalPeriod: Schema.optional(Schema.Number),
                rules: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      key: Schema.optional(Schema.String),
                      renewalPeriod: Schema.optional(Schema.Number),
                      count: Schema.optional(Schema.Number),
                      minCount: Schema.optional(Schema.Number),
                      dynamicThrottlingEnabled: Schema.optional(Schema.Boolean),
                      matchPatterns: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            path: Schema.optional(Schema.String),
                            method: Schema.optional(Schema.String),
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
        kind: Schema.optional(Schema.String),
        skuName: Schema.optional(Schema.String),
        description: Schema.optional(Schema.String),
      }),
    ),
  ),
});
export type ModelsListOutput = typeof ModelsListOutput.Type;

// The operation
/**
 * List Models.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The name of Azure region.
 */
export const ModelsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ModelsListInput,
  outputSchema: ModelsListOutput,
}));
// Input Schema
export const NetworkSecurityPerimeterConfigurationsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    nspConfigurationName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/networkSecurityPerimeterConfigurations/{nspConfigurationName}",
    }),
  );
export type NetworkSecurityPerimeterConfigurationsGetInput =
  typeof NetworkSecurityPerimeterConfigurationsGetInput.Type;

// Output Schema
export const NetworkSecurityPerimeterConfigurationsGetOutput =
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
export type NetworkSecurityPerimeterConfigurationsGetOutput =
  typeof NetworkSecurityPerimeterConfigurationsGetOutput.Type;

// The operation
/**
 * Gets the specified NSP configurations for an account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param nspConfigurationName - The name of the NSP Configuration.
 */
export const NetworkSecurityPerimeterConfigurationsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkSecurityPerimeterConfigurationsGetInput,
    outputSchema: NetworkSecurityPerimeterConfigurationsGetOutput,
  }));
// Input Schema
export const NetworkSecurityPerimeterConfigurationsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/networkSecurityPerimeterConfigurations",
    }),
  );
export type NetworkSecurityPerimeterConfigurationsListInput =
  typeof NetworkSecurityPerimeterConfigurationsListInput.Type;

// Output Schema
export const NetworkSecurityPerimeterConfigurationsListOutput =
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
export type NetworkSecurityPerimeterConfigurationsListOutput =
  typeof NetworkSecurityPerimeterConfigurationsListOutput.Type;

// The operation
/**
 * Gets a list of NSP configurations for an account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 */
export const NetworkSecurityPerimeterConfigurationsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkSecurityPerimeterConfigurationsListInput,
    outputSchema: NetworkSecurityPerimeterConfigurationsListOutput,
  }));
// Input Schema
export const NetworkSecurityPerimeterConfigurationsReconcileInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    nspConfigurationName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/networkSecurityPerimeterConfigurations/{nspConfigurationName}/reconcile",
    }),
  );
export type NetworkSecurityPerimeterConfigurationsReconcileInput =
  typeof NetworkSecurityPerimeterConfigurationsReconcileInput.Type;

// Output Schema
export const NetworkSecurityPerimeterConfigurationsReconcileOutput =
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
export type NetworkSecurityPerimeterConfigurationsReconcileOutput =
  typeof NetworkSecurityPerimeterConfigurationsReconcileOutput.Type;

// The operation
/**
 * Reconcile the NSP configuration for an account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param nspConfigurationName - The name of the NSP Configuration.
 */
export const NetworkSecurityPerimeterConfigurationsReconcile =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkSecurityPerimeterConfigurationsReconcileInput,
    outputSchema: NetworkSecurityPerimeterConfigurationsReconcileOutput,
  }));
// Input Schema
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  "api-version": Schema.String,
}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.CognitiveServices/operations",
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
 * Lists all the available Cognitive Services account operations.
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export const OutboundRuleCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    managedNetworkName: Schema.String.pipe(T.PathParam()),
    ruleName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/managedNetworks/{managedNetworkName}/outboundRules/{ruleName}",
    }),
  );
export type OutboundRuleCreateOrUpdateInput =
  typeof OutboundRuleCreateOrUpdateInput.Type;

// Output Schema
export const OutboundRuleCreateOrUpdateOutput =
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
export type OutboundRuleCreateOrUpdateOutput =
  typeof OutboundRuleCreateOrUpdateOutput.Type;

// The operation
/**
 * The PUT API for creating or updating a single outbound rule of the managed network associated with the cognitive services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param managedNetworkName - Name of the managedNetwork associated with the cognitive services account. Only 'default' is supported.
 * @param ruleName - Name of the cognitive services account managed network outbound rule
 */
export const OutboundRuleCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: OutboundRuleCreateOrUpdateInput,
    outputSchema: OutboundRuleCreateOrUpdateOutput,
  }),
);
// Input Schema
export const OutboundRuleDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    managedNetworkName: Schema.String.pipe(T.PathParam()),
    ruleName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/managedNetworks/{managedNetworkName}/outboundRules/{ruleName}",
    }),
  );
export type OutboundRuleDeleteInput = typeof OutboundRuleDeleteInput.Type;

// Output Schema
export const OutboundRuleDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type OutboundRuleDeleteOutput = typeof OutboundRuleDeleteOutput.Type;

// The operation
/**
 * The DELETE API for deleting a single outbound rule of the managed network associated with the cognitive services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param managedNetworkName - Name of the managedNetwork associated with the cognitive services account. Only 'default' is supported.
 * @param ruleName - Name of the cognitive services account managed network outbound rule
 */
export const OutboundRuleDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OutboundRuleDeleteInput,
  outputSchema: OutboundRuleDeleteOutput,
}));
// Input Schema
export const OutboundRuleGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  managedNetworkName: Schema.String.pipe(T.PathParam()),
  ruleName: Schema.String.pipe(T.PathParam()),
  "api-version": Schema.String,
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/managedNetworks/{managedNetworkName}/outboundRules/{ruleName}",
  }),
);
export type OutboundRuleGetInput = typeof OutboundRuleGetInput.Type;

// Output Schema
export const OutboundRuleGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type OutboundRuleGetOutput = typeof OutboundRuleGetOutput.Type;

// The operation
/**
 * The GET API for retrieving a single outbound rule of the managed network associated with the cognitive services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param managedNetworkName - Name of the managedNetwork associated with the cognitive services account. Only 'default' is supported.
 * @param ruleName - Name of the cognitive services account managed network outbound rule
 */
export const OutboundRuleGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OutboundRuleGetInput,
  outputSchema: OutboundRuleGetOutput,
}));
// Input Schema
export const OutboundRuleListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  managedNetworkName: Schema.String.pipe(T.PathParam()),
  "api-version": Schema.String,
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/managedNetworks/{managedNetworkName}/outboundRules",
  }),
);
export type OutboundRuleListInput = typeof OutboundRuleListInput.Type;

// Output Schema
export const OutboundRuleListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    nextLink: Schema.optional(Schema.String),
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
  },
);
export type OutboundRuleListOutput = typeof OutboundRuleListOutput.Type;

// The operation
/**
 * The GET API for retrieving the list of outbound rules of the managed network associated with the cognitive services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param managedNetworkName - Name of the managedNetwork associated with the cognitive services account. Only 'default' is supported.
 */
export const OutboundRuleList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OutboundRuleListInput,
  outputSchema: OutboundRuleListOutput,
}));
// Input Schema
export const OutboundRulesPostInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    managedNetworkName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  },
).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/managedNetworks/{managedNetworkName}/batchOutboundRules",
  }),
);
export type OutboundRulesPostInput = typeof OutboundRulesPostInput.Type;

// Output Schema
export const OutboundRulesPostOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
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
  });
export type OutboundRulesPostOutput = typeof OutboundRulesPostOutput.Type;

// The operation
/**
 * The POST API for updating the outbound rules of the managed network associated with the cognitive services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param managedNetworkName - Name of the managedNetwork associated with the cognitive services account. Only 'default' is supported.
 */
export const OutboundRulesPost = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OutboundRulesPostInput,
  outputSchema: OutboundRulesPostOutput,
}));
// Input Schema
export const PrivateEndpointConnectionsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/privateEndpointConnections/{privateEndpointConnectionName}",
    }),
  );
export type PrivateEndpointConnectionsCreateOrUpdateInput =
  typeof PrivateEndpointConnectionsCreateOrUpdateInput.Type;

// Output Schema
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
  });
export type PrivateEndpointConnectionsCreateOrUpdateOutput =
  typeof PrivateEndpointConnectionsCreateOrUpdateOutput.Type;

// The operation
/**
 * Update the state of specified private endpoint connection associated with the Cognitive Services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Cognitive Services Account
 */
export const PrivateEndpointConnectionsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsCreateOrUpdateInput,
    outputSchema: PrivateEndpointConnectionsCreateOrUpdateOutput,
  }));
// Input Schema
export const PrivateEndpointConnectionsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/privateEndpointConnections/{privateEndpointConnectionName}",
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
 * Deletes the specified private endpoint connection associated with the Cognitive Services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Cognitive Services Account
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
    accountName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/privateEndpointConnections/{privateEndpointConnectionName}",
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
 * Gets the specified private endpoint connection associated with the Cognitive Services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Cognitive Services Account
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
    accountName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/privateEndpointConnections",
    }),
  );
export type PrivateEndpointConnectionsListInput =
  typeof PrivateEndpointConnectionsListInput.Type;

// Output Schema
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
  });
export type PrivateEndpointConnectionsListOutput =
  typeof PrivateEndpointConnectionsListOutput.Type;

// The operation
/**
 * Gets the private endpoint connections associated with the Cognitive Services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 */
export const PrivateEndpointConnectionsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsListInput,
    outputSchema: PrivateEndpointConnectionsListOutput,
  }));
// Input Schema
export const PrivateLinkResourcesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/privateLinkResources",
    }),
  );
export type PrivateLinkResourcesListInput =
  typeof PrivateLinkResourcesListInput.Type;

// Output Schema
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
  });
export type PrivateLinkResourcesListOutput =
  typeof PrivateLinkResourcesListOutput.Type;

// The operation
/**
 * Gets the private link resources that need to be created for a Cognitive Services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 */
export const PrivateLinkResourcesList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PrivateLinkResourcesListInput,
    outputSchema: PrivateLinkResourcesListOutput,
  }),
);
// Input Schema
export const ProjectCapabilityHostsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    capabilityHostName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects/{projectName}/capabilityHosts/{capabilityHostName}",
    }),
  );
export type ProjectCapabilityHostsCreateOrUpdateInput =
  typeof ProjectCapabilityHostsCreateOrUpdateInput.Type;

// Output Schema
export const ProjectCapabilityHostsCreateOrUpdateOutput =
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
export type ProjectCapabilityHostsCreateOrUpdateOutput =
  typeof ProjectCapabilityHostsCreateOrUpdateOutput.Type;

// The operation
/**
 * Create or update project capabilityHost.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param projectName - The name of Cognitive Services account's project.
 * @param capabilityHostName - The name of the capability host associated with the Cognitive Services Resource
 */
export const ProjectCapabilityHostsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProjectCapabilityHostsCreateOrUpdateInput,
    outputSchema: ProjectCapabilityHostsCreateOrUpdateOutput,
  }));
// Input Schema
export const ProjectCapabilityHostsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    capabilityHostName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects/{projectName}/capabilityHosts/{capabilityHostName}",
    }),
  );
export type ProjectCapabilityHostsDeleteInput =
  typeof ProjectCapabilityHostsDeleteInput.Type;

// Output Schema
export const ProjectCapabilityHostsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ProjectCapabilityHostsDeleteOutput =
  typeof ProjectCapabilityHostsDeleteOutput.Type;

// The operation
/**
 * Delete project capabilityHost.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param projectName - The name of Cognitive Services account's project.
 * @param capabilityHostName - The name of the capability host associated with the Cognitive Services Resource
 */
export const ProjectCapabilityHostsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProjectCapabilityHostsDeleteInput,
    outputSchema: ProjectCapabilityHostsDeleteOutput,
  }));
// Input Schema
export const ProjectCapabilityHostsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    capabilityHostName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects/{projectName}/capabilityHosts/{capabilityHostName}",
    }),
  );
export type ProjectCapabilityHostsGetInput =
  typeof ProjectCapabilityHostsGetInput.Type;

// Output Schema
export const ProjectCapabilityHostsGetOutput =
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
export type ProjectCapabilityHostsGetOutput =
  typeof ProjectCapabilityHostsGetOutput.Type;

// The operation
/**
 * Get project capabilityHost.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param projectName - The name of Cognitive Services account's project.
 * @param capabilityHostName - The name of the capability host associated with the Cognitive Services Resource
 */
export const ProjectCapabilityHostsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ProjectCapabilityHostsGetInput,
    outputSchema: ProjectCapabilityHostsGetOutput,
  }),
);
// Input Schema
export const ProjectCapabilityHostsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects/{projectName}/capabilityHosts",
    }),
  );
export type ProjectCapabilityHostsListInput =
  typeof ProjectCapabilityHostsListInput.Type;

// Output Schema
export const ProjectCapabilityHostsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.NullOr(Schema.String)),
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
  });
export type ProjectCapabilityHostsListOutput =
  typeof ProjectCapabilityHostsListOutput.Type;

// The operation
/**
 * List capabilityHost.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param projectName - The name of Cognitive Services account's project.
 */
export const ProjectCapabilityHostsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ProjectCapabilityHostsListInput,
    outputSchema: ProjectCapabilityHostsListOutput,
  }),
);
// Input Schema
export const ProjectConnectionsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    connectionName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects/{projectName}/connections/{connectionName}",
    }),
  );
export type ProjectConnectionsCreateInput =
  typeof ProjectConnectionsCreateInput.Type;

// Output Schema
export const ProjectConnectionsCreateOutput =
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
export type ProjectConnectionsCreateOutput =
  typeof ProjectConnectionsCreateOutput.Type;

// The operation
/**
 * Create or update Cognitive Services project connection under the specified project.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param projectName - The name of Cognitive Services account's project.
 * @param connectionName - Friendly name of the connection
 */
export const ProjectConnectionsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ProjectConnectionsCreateInput,
    outputSchema: ProjectConnectionsCreateOutput,
  }),
);
// Input Schema
export const ProjectConnectionsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    connectionName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects/{projectName}/connections/{connectionName}",
    }),
  );
export type ProjectConnectionsDeleteInput =
  typeof ProjectConnectionsDeleteInput.Type;

// Output Schema
export const ProjectConnectionsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ProjectConnectionsDeleteOutput =
  typeof ProjectConnectionsDeleteOutput.Type;

// The operation
/**
 * Delete Cognitive Services project connection by name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param projectName - The name of Cognitive Services account's project.
 * @param connectionName - Friendly name of the connection
 */
export const ProjectConnectionsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ProjectConnectionsDeleteInput,
    outputSchema: ProjectConnectionsDeleteOutput,
  }),
);
// Input Schema
export const ProjectConnectionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    connectionName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects/{projectName}/connections/{connectionName}",
    }),
  );
export type ProjectConnectionsGetInput = typeof ProjectConnectionsGetInput.Type;

// Output Schema
export const ProjectConnectionsGetOutput =
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
export type ProjectConnectionsGetOutput =
  typeof ProjectConnectionsGetOutput.Type;

// The operation
/**
 * Lists Cognitive Services project connection by name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param projectName - The name of Cognitive Services account's project.
 * @param connectionName - Friendly name of the connection
 */
export const ProjectConnectionsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ProjectConnectionsGetInput,
    outputSchema: ProjectConnectionsGetOutput,
  }),
);
// Input Schema
export const ProjectConnectionsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
    target: Schema.optional(Schema.String),
    category: Schema.optional(Schema.String),
    includeAll: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects/{projectName}/connections",
    }),
  );
export type ProjectConnectionsListInput =
  typeof ProjectConnectionsListInput.Type;

// Output Schema
export const ProjectConnectionsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
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
  });
export type ProjectConnectionsListOutput =
  typeof ProjectConnectionsListOutput.Type;

// The operation
/**
 * Lists all the available Cognitive Services project connections under the specified project.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param projectName - The name of Cognitive Services account's project.
 * @param target - Target of the connection.
 * @param category - Category of the connection.
 * @param includeAll - query parameter that indicates if get connection call should return both connections and datastores
 */
export const ProjectConnectionsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ProjectConnectionsListInput,
    outputSchema: ProjectConnectionsListOutput,
  }),
);
// Input Schema
export const ProjectConnectionsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    connectionName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects/{projectName}/connections/{connectionName}",
    }),
  );
export type ProjectConnectionsUpdateInput =
  typeof ProjectConnectionsUpdateInput.Type;

// Output Schema
export const ProjectConnectionsUpdateOutput =
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
export type ProjectConnectionsUpdateOutput =
  typeof ProjectConnectionsUpdateOutput.Type;

// The operation
/**
 * Update Cognitive Services project connection under the specified project.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param projectName - The name of Cognitive Services account's project.
 * @param connectionName - Friendly name of the connection
 */
export const ProjectConnectionsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ProjectConnectionsUpdateInput,
    outputSchema: ProjectConnectionsUpdateOutput,
  }),
);
// Input Schema
export const ProjectsCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  projectName: Schema.String.pipe(T.PathParam()),
  "api-version": Schema.String,
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects/{projectName}",
  }),
);
export type ProjectsCreateInput = typeof ProjectsCreateInput.Type;

// Output Schema
export const ProjectsCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type ProjectsCreateOutput = typeof ProjectsCreateOutput.Type;

// The operation
/**
 * Create Cognitive Services Account's Project. Project is a sub-resource of an account which give AI developer it's individual container to work on.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param projectName - The name of Cognitive Services account's project.
 */
export const ProjectsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ProjectsCreateInput,
  outputSchema: ProjectsCreateOutput,
}));
// Input Schema
export const ProjectsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  projectName: Schema.String.pipe(T.PathParam()),
  "api-version": Schema.String,
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects/{projectName}",
  }),
);
export type ProjectsDeleteInput = typeof ProjectsDeleteInput.Type;

// Output Schema
export const ProjectsDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ProjectsDeleteOutput = typeof ProjectsDeleteOutput.Type;

// The operation
/**
 * Deletes a Cognitive Services project from the resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param projectName - The name of Cognitive Services account's project.
 */
export const ProjectsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ProjectsDeleteInput,
  outputSchema: ProjectsDeleteOutput,
}));
// Input Schema
export const ProjectsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  projectName: Schema.String.pipe(T.PathParam()),
  "api-version": Schema.String,
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects/{projectName}",
  }),
);
export type ProjectsGetInput = typeof ProjectsGetInput.Type;

// Output Schema
export const ProjectsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type ProjectsGetOutput = typeof ProjectsGetOutput.Type;

// The operation
/**
 * Returns a Cognitive Services project specified by the parameters.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param projectName - The name of Cognitive Services account's project.
 */
export const ProjectsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ProjectsGetInput,
  outputSchema: ProjectsGetOutput,
}));
// Input Schema
export const ProjectsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  "api-version": Schema.String,
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects",
  }),
);
export type ProjectsListInput = typeof ProjectsListInput.Type;

// Output Schema
export const ProjectsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nextLink: Schema.optional(Schema.String),
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
});
export type ProjectsListOutput = typeof ProjectsListOutput.Type;

// The operation
/**
 * Returns all the projects in a Cognitive Services account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 */
export const ProjectsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ProjectsListInput,
  outputSchema: ProjectsListOutput,
}));
// Input Schema
export const ProjectsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  projectName: Schema.String.pipe(T.PathParam()),
  "api-version": Schema.String,
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/projects/{projectName}",
  }),
);
export type ProjectsUpdateInput = typeof ProjectsUpdateInput.Type;

// Output Schema
export const ProjectsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type ProjectsUpdateOutput = typeof ProjectsUpdateOutput.Type;

// The operation
/**
 * Updates a Cognitive Services Project
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param projectName - The name of Cognitive Services account's project.
 */
export const ProjectsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ProjectsUpdateInput,
  outputSchema: ProjectsUpdateOutput,
}));
// Input Schema
export const QuotaTiersCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    default: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/quotaTiers/{default}",
    }),
  );
export type QuotaTiersCreateOrUpdateInput =
  typeof QuotaTiersCreateOrUpdateInput.Type;

// Output Schema
export const QuotaTiersCreateOrUpdateOutput =
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
export type QuotaTiersCreateOrUpdateOutput =
  typeof QuotaTiersCreateOrUpdateOutput.Type;

// The operation
/**
 * Updates the Quota Tier resource for a subscription.
 *
 * Update the Quota Tier information for the given subscription. QuotaTiers is a subscription wide resource type. It holds current tier information.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param default - Default parameter. Leave the value as default.
 */
export const QuotaTiersCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: QuotaTiersCreateOrUpdateInput,
    outputSchema: QuotaTiersCreateOrUpdateOutput,
  }),
);
// Input Schema
export const QuotaTiersGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  default: Schema.String.pipe(T.PathParam()),
  "api-version": Schema.String,
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/quotaTiers/{default}",
  }),
);
export type QuotaTiersGetInput = typeof QuotaTiersGetInput.Type;

// Output Schema
export const QuotaTiersGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type QuotaTiersGetOutput = typeof QuotaTiersGetOutput.Type;

// The operation
/**
 * Gets the Quota Tier for a subscription
 *
 * Gets the Quota Tier information for the given subscription. QuotaTiers is a subscription wide resource type. It holds current tier information.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param default - Default parameter. Leave the value as default.
 */
export const QuotaTiersGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: QuotaTiersGetInput,
  outputSchema: QuotaTiersGetOutput,
}));
// Input Schema
export const QuotaTiersListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/quotaTiers",
    }),
  );
export type QuotaTiersListBySubscriptionInput =
  typeof QuotaTiersListBySubscriptionInput.Type;

// Output Schema
export const QuotaTiersListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
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
  });
export type QuotaTiersListBySubscriptionOutput =
  typeof QuotaTiersListBySubscriptionOutput.Type;

// The operation
/**
 * Returns all the resources of a particular type belonging to a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const QuotaTiersListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: QuotaTiersListBySubscriptionInput,
    outputSchema: QuotaTiersListBySubscriptionOutput,
  }));
// Input Schema
export const QuotaTiersUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  default: Schema.String.pipe(T.PathParam()),
  "api-version": Schema.String,
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/quotaTiers/{default}",
  }),
);
export type QuotaTiersUpdateInput = typeof QuotaTiersUpdateInput.Type;

// Output Schema
export const QuotaTiersUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
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
export type QuotaTiersUpdateOutput = typeof QuotaTiersUpdateOutput.Type;

// The operation
/**
 * Updates the Quota Tier resource for a subscription. The only properties that can be updated are  "tierUpgradePolicy"
 *
 * Update the Quota Tier information for the given subscription. QuotaTiers is a subscription wide resource type. It holds current tier information.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param default - Default parameter. Leave the value as default.
 */
export const QuotaTiersUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: QuotaTiersUpdateInput,
  outputSchema: QuotaTiersUpdateOutput,
}));
// Input Schema
export const RaiBlocklistItemsBatchAddInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    raiBlocklistName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/raiBlocklists/{raiBlocklistName}/addRaiBlocklistItems",
    }),
  );
export type RaiBlocklistItemsBatchAddInput =
  typeof RaiBlocklistItemsBatchAddInput.Type;

// Output Schema
export const RaiBlocklistItemsBatchAddOutput =
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
export type RaiBlocklistItemsBatchAddOutput =
  typeof RaiBlocklistItemsBatchAddOutput.Type;

// The operation
/**
 * Batch operation to add blocklist items.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param raiBlocklistName - The name of the RaiBlocklist associated with the Cognitive Services Account
 */
export const RaiBlocklistItemsBatchAdd = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RaiBlocklistItemsBatchAddInput,
    outputSchema: RaiBlocklistItemsBatchAddOutput,
  }),
);
// Input Schema
export const RaiBlocklistItemsBatchDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    raiBlocklistName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/raiBlocklists/{raiBlocklistName}/deleteRaiBlocklistItems",
    }),
  );
export type RaiBlocklistItemsBatchDeleteInput =
  typeof RaiBlocklistItemsBatchDeleteInput.Type;

// Output Schema
export const RaiBlocklistItemsBatchDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type RaiBlocklistItemsBatchDeleteOutput =
  typeof RaiBlocklistItemsBatchDeleteOutput.Type;

// The operation
/**
 * Batch operation to delete blocklist items.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param raiBlocklistName - The name of the RaiBlocklist associated with the Cognitive Services Account
 */
export const RaiBlocklistItemsBatchDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RaiBlocklistItemsBatchDeleteInput,
    outputSchema: RaiBlocklistItemsBatchDeleteOutput,
  }));
// Input Schema
export const RaiBlocklistItemsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    raiBlocklistName: Schema.String.pipe(T.PathParam()),
    raiBlocklistItemName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/raiBlocklists/{raiBlocklistName}/raiBlocklistItems/{raiBlocklistItemName}",
    }),
  );
export type RaiBlocklistItemsCreateOrUpdateInput =
  typeof RaiBlocklistItemsCreateOrUpdateInput.Type;

// Output Schema
export const RaiBlocklistItemsCreateOrUpdateOutput =
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
export type RaiBlocklistItemsCreateOrUpdateOutput =
  typeof RaiBlocklistItemsCreateOrUpdateOutput.Type;

// The operation
/**
 * Update the state of specified blocklist item associated with the Azure OpenAI account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param raiBlocklistName - The name of the RaiBlocklist associated with the Cognitive Services Account
 * @param raiBlocklistItemName - The name of the RaiBlocklist Item associated with the custom blocklist
 */
export const RaiBlocklistItemsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RaiBlocklistItemsCreateOrUpdateInput,
    outputSchema: RaiBlocklistItemsCreateOrUpdateOutput,
  }));
// Input Schema
export const RaiBlocklistItemsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    raiBlocklistName: Schema.String.pipe(T.PathParam()),
    raiBlocklistItemName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/raiBlocklists/{raiBlocklistName}/raiBlocklistItems/{raiBlocklistItemName}",
    }),
  );
export type RaiBlocklistItemsDeleteInput =
  typeof RaiBlocklistItemsDeleteInput.Type;

// Output Schema
export const RaiBlocklistItemsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type RaiBlocklistItemsDeleteOutput =
  typeof RaiBlocklistItemsDeleteOutput.Type;

// The operation
/**
 * Deletes the specified blocklist Item associated with the custom blocklist.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param raiBlocklistName - The name of the RaiBlocklist associated with the Cognitive Services Account
 * @param raiBlocklistItemName - The name of the RaiBlocklist Item associated with the custom blocklist
 */
export const RaiBlocklistItemsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RaiBlocklistItemsDeleteInput,
    outputSchema: RaiBlocklistItemsDeleteOutput,
  }),
);
// Input Schema
export const RaiBlocklistItemsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    raiBlocklistName: Schema.String.pipe(T.PathParam()),
    raiBlocklistItemName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/raiBlocklists/{raiBlocklistName}/raiBlocklistItems/{raiBlocklistItemName}",
    }),
  );
export type RaiBlocklistItemsGetInput = typeof RaiBlocklistItemsGetInput.Type;

// Output Schema
export const RaiBlocklistItemsGetOutput =
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
export type RaiBlocklistItemsGetOutput = typeof RaiBlocklistItemsGetOutput.Type;

// The operation
/**
 * Gets the specified custom blocklist Item associated with the custom blocklist.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param raiBlocklistName - The name of the RaiBlocklist associated with the Cognitive Services Account
 * @param raiBlocklistItemName - The name of the RaiBlocklist Item associated with the custom blocklist
 */
export const RaiBlocklistItemsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RaiBlocklistItemsGetInput,
    outputSchema: RaiBlocklistItemsGetOutput,
  }),
);
// Input Schema
export const RaiBlocklistItemsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    raiBlocklistName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/raiBlocklists/{raiBlocklistName}/raiBlocklistItems",
    }),
  );
export type RaiBlocklistItemsListInput = typeof RaiBlocklistItemsListInput.Type;

// Output Schema
export const RaiBlocklistItemsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
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
  });
export type RaiBlocklistItemsListOutput =
  typeof RaiBlocklistItemsListOutput.Type;

// The operation
/**
 * Gets the blocklist items associated with the custom blocklist.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param raiBlocklistName - The name of the RaiBlocklist associated with the Cognitive Services Account
 */
export const RaiBlocklistItemsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RaiBlocklistItemsListInput,
    outputSchema: RaiBlocklistItemsListOutput,
  }),
);
// Input Schema
export const RaiBlocklistsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    raiBlocklistName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/raiBlocklists/{raiBlocklistName}",
    }),
  );
export type RaiBlocklistsCreateOrUpdateInput =
  typeof RaiBlocklistsCreateOrUpdateInput.Type;

// Output Schema
export const RaiBlocklistsCreateOrUpdateOutput =
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
export type RaiBlocklistsCreateOrUpdateOutput =
  typeof RaiBlocklistsCreateOrUpdateOutput.Type;

// The operation
/**
 * Update the state of specified blocklist associated with the Azure OpenAI account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param raiBlocklistName - The name of the RaiBlocklist associated with the Cognitive Services Account
 */
export const RaiBlocklistsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RaiBlocklistsCreateOrUpdateInput,
    outputSchema: RaiBlocklistsCreateOrUpdateOutput,
  }),
);
// Input Schema
export const RaiBlocklistsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    raiBlocklistName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/raiBlocklists/{raiBlocklistName}",
    }),
  );
export type RaiBlocklistsDeleteInput = typeof RaiBlocklistsDeleteInput.Type;

// Output Schema
export const RaiBlocklistsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type RaiBlocklistsDeleteOutput = typeof RaiBlocklistsDeleteOutput.Type;

// The operation
/**
 * Deletes the specified custom blocklist associated with the Azure OpenAI account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param raiBlocklistName - The name of the RaiBlocklist associated with the Cognitive Services Account
 */
export const RaiBlocklistsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RaiBlocklistsDeleteInput,
  outputSchema: RaiBlocklistsDeleteOutput,
}));
// Input Schema
export const RaiBlocklistsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  raiBlocklistName: Schema.String.pipe(T.PathParam()),
  "api-version": Schema.String,
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/raiBlocklists/{raiBlocklistName}",
  }),
);
export type RaiBlocklistsGetInput = typeof RaiBlocklistsGetInput.Type;

// Output Schema
export const RaiBlocklistsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
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
export type RaiBlocklistsGetOutput = typeof RaiBlocklistsGetOutput.Type;

// The operation
/**
 * Gets the specified custom blocklist associated with the Azure OpenAI account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param raiBlocklistName - The name of the RaiBlocklist associated with the Cognitive Services Account
 */
export const RaiBlocklistsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RaiBlocklistsGetInput,
  outputSchema: RaiBlocklistsGetOutput,
}));
// Input Schema
export const RaiBlocklistsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/raiBlocklists",
  }),
);
export type RaiBlocklistsListInput = typeof RaiBlocklistsListInput.Type;

// Output Schema
export const RaiBlocklistsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
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
  });
export type RaiBlocklistsListOutput = typeof RaiBlocklistsListOutput.Type;

// The operation
/**
 * Gets the custom blocklists associated with the Azure OpenAI account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 */
export const RaiBlocklistsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RaiBlocklistsListInput,
  outputSchema: RaiBlocklistsListOutput,
}));
// Input Schema
export const RaiContentFiltersGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    filterName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/locations/{location}/raiContentFilters/{filterName}",
    }),
  );
export type RaiContentFiltersGetInput = typeof RaiContentFiltersGetInput.Type;

// Output Schema
export const RaiContentFiltersGetOutput =
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
export type RaiContentFiltersGetOutput = typeof RaiContentFiltersGetOutput.Type;

// The operation
/**
 * Get Content Filters by Name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The name of Azure region.
 * @param filterName - The name of the RAI Content Filter.
 */
export const RaiContentFiltersGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RaiContentFiltersGetInput,
    outputSchema: RaiContentFiltersGetOutput,
  }),
);
// Input Schema
export const RaiContentFiltersListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/locations/{location}/raiContentFilters",
    }),
  );
export type RaiContentFiltersListInput = typeof RaiContentFiltersListInput.Type;

// Output Schema
export const RaiContentFiltersListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
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
  });
export type RaiContentFiltersListOutput =
  typeof RaiContentFiltersListOutput.Type;

// The operation
/**
 * List Content Filters types.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The name of Azure region.
 */
export const RaiContentFiltersList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RaiContentFiltersListInput,
    outputSchema: RaiContentFiltersListOutput,
  }),
);
// Input Schema
export const RaiExternalSafetyProviderCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    safetyProviderName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/raiExternalSafetyProviders/{safetyProviderName}",
    }),
  );
export type RaiExternalSafetyProviderCreateOrUpdateInput =
  typeof RaiExternalSafetyProviderCreateOrUpdateInput.Type;

// Output Schema
export const RaiExternalSafetyProviderCreateOrUpdateOutput =
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
export type RaiExternalSafetyProviderCreateOrUpdateOutput =
  typeof RaiExternalSafetyProviderCreateOrUpdateOutput.Type;

// The operation
/**
 * Create the rai safety provider associated with the subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param safetyProviderName - The name of the Rai External Safety Provider associated with the Cognitive Services Account
 */
export const RaiExternalSafetyProviderCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RaiExternalSafetyProviderCreateOrUpdateInput,
    outputSchema: RaiExternalSafetyProviderCreateOrUpdateOutput,
  }));
// Input Schema
export const RaiExternalSafetyProviderDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    safetyProviderName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/raiExternalSafetyProviders/{safetyProviderName}",
    }),
  );
export type RaiExternalSafetyProviderDeleteInput =
  typeof RaiExternalSafetyProviderDeleteInput.Type;

// Output Schema
export const RaiExternalSafetyProviderDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type RaiExternalSafetyProviderDeleteOutput =
  typeof RaiExternalSafetyProviderDeleteOutput.Type;

// The operation
/**
 * Deletes the specified custom topic associated with the subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param safetyProviderName - The name of the Rai External Safety Provider associated with the Cognitive Services Account
 */
export const RaiExternalSafetyProviderDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RaiExternalSafetyProviderDeleteInput,
    outputSchema: RaiExternalSafetyProviderDeleteOutput,
  }));
// Input Schema
export const RaiExternalSafetyProviderGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    safetyProviderName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/raiExternalSafetyProviders/{safetyProviderName}",
    }),
  );
export type RaiExternalSafetyProviderGetInput =
  typeof RaiExternalSafetyProviderGetInput.Type;

// Output Schema
export const RaiExternalSafetyProviderGetOutput =
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
export type RaiExternalSafetyProviderGetOutput =
  typeof RaiExternalSafetyProviderGetOutput.Type;

// The operation
/**
 * Gets the specified external safety provider associated with the Subscription
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param safetyProviderName - The name of the Rai External Safety Provider associated with the Cognitive Services Account
 */
export const RaiExternalSafetyProviderGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RaiExternalSafetyProviderGetInput,
    outputSchema: RaiExternalSafetyProviderGetOutput,
  }));
// Input Schema
export const RaiExternalSafetyProvidersListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/raiExternalSafetyProviders",
    }),
  );
export type RaiExternalSafetyProvidersListInput =
  typeof RaiExternalSafetyProvidersListInput.Type;

// Output Schema
export const RaiExternalSafetyProvidersListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
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
  });
export type RaiExternalSafetyProvidersListOutput =
  typeof RaiExternalSafetyProvidersListOutput.Type;

// The operation
/**
 * Gets the safety providers associated with the subscription
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const RaiExternalSafetyProvidersList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RaiExternalSafetyProvidersListInput,
    outputSchema: RaiExternalSafetyProvidersListOutput,
  }));
// Input Schema
export const RaiPoliciesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    raiPolicyName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/raiPolicies/{raiPolicyName}",
    }),
  );
export type RaiPoliciesCreateOrUpdateInput =
  typeof RaiPoliciesCreateOrUpdateInput.Type;

// Output Schema
export const RaiPoliciesCreateOrUpdateOutput =
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
export type RaiPoliciesCreateOrUpdateOutput =
  typeof RaiPoliciesCreateOrUpdateOutput.Type;

// The operation
/**
 * Update the state of specified Content Filters associated with the Azure OpenAI account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param raiPolicyName - The name of the RaiPolicy associated with the Cognitive Services Account
 */
export const RaiPoliciesCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RaiPoliciesCreateOrUpdateInput,
    outputSchema: RaiPoliciesCreateOrUpdateOutput,
  }),
);
// Input Schema
export const RaiPoliciesDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    raiPolicyName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  },
).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/raiPolicies/{raiPolicyName}",
  }),
);
export type RaiPoliciesDeleteInput = typeof RaiPoliciesDeleteInput.Type;

// Output Schema
export const RaiPoliciesDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type RaiPoliciesDeleteOutput = typeof RaiPoliciesDeleteOutput.Type;

// The operation
/**
 * Deletes the specified Content Filters associated with the Azure OpenAI account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param raiPolicyName - The name of the RaiPolicy associated with the Cognitive Services Account
 */
export const RaiPoliciesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RaiPoliciesDeleteInput,
  outputSchema: RaiPoliciesDeleteOutput,
}));
// Input Schema
export const RaiPoliciesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  raiPolicyName: Schema.String.pipe(T.PathParam()),
  "api-version": Schema.String,
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/raiPolicies/{raiPolicyName}",
  }),
);
export type RaiPoliciesGetInput = typeof RaiPoliciesGetInput.Type;

// Output Schema
export const RaiPoliciesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type RaiPoliciesGetOutput = typeof RaiPoliciesGetOutput.Type;

// The operation
/**
 * Gets the specified Content Filters associated with the Azure OpenAI account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param raiPolicyName - The name of the RaiPolicy associated with the Cognitive Services Account
 */
export const RaiPoliciesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RaiPoliciesGetInput,
  outputSchema: RaiPoliciesGetOutput,
}));
// Input Schema
export const RaiPoliciesListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  "api-version": Schema.String,
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/raiPolicies",
  }),
);
export type RaiPoliciesListInput = typeof RaiPoliciesListInput.Type;

// Output Schema
export const RaiPoliciesListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nextLink: Schema.optional(Schema.String),
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
});
export type RaiPoliciesListOutput = typeof RaiPoliciesListOutput.Type;

// The operation
/**
 * Gets the content filters associated with the Azure OpenAI account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 */
export const RaiPoliciesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RaiPoliciesListInput,
  outputSchema: RaiPoliciesListOutput,
}));
// Input Schema
export const RaiToolLabelsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    raiToolConnectionName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/raiToolLabels/{raiToolConnectionName}",
    }),
  );
export type RaiToolLabelsCreateOrUpdateInput =
  typeof RaiToolLabelsCreateOrUpdateInput.Type;

// Output Schema
export const RaiToolLabelsCreateOrUpdateOutput =
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
export type RaiToolLabelsCreateOrUpdateOutput =
  typeof RaiToolLabelsCreateOrUpdateOutput.Type;

// The operation
/**
 * Creates the RAI Tool Label associated with the Azure OpenAI account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param raiToolConnectionName - The name of the Rai Tool Label
 */
export const RaiToolLabelsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RaiToolLabelsCreateOrUpdateInput,
    outputSchema: RaiToolLabelsCreateOrUpdateOutput,
  }),
);
// Input Schema
export const RaiToolLabelsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    raiToolConnectionName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/raiToolLabels/{raiToolConnectionName}",
    }),
  );
export type RaiToolLabelsDeleteInput = typeof RaiToolLabelsDeleteInput.Type;

// Output Schema
export const RaiToolLabelsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type RaiToolLabelsDeleteOutput = typeof RaiToolLabelsDeleteOutput.Type;

// The operation
/**
 * Deletes the specified RAI Tool Label associated with the Azure OpenAI account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param raiToolConnectionName - The name of the Rai Tool Label
 */
export const RaiToolLabelsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RaiToolLabelsDeleteInput,
  outputSchema: RaiToolLabelsDeleteOutput,
}));
// Input Schema
export const RaiToolLabelsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  raiToolConnectionName: Schema.String.pipe(T.PathParam()),
  "api-version": Schema.String,
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/raiToolLabels/{raiToolConnectionName}",
  }),
);
export type RaiToolLabelsGetInput = typeof RaiToolLabelsGetInput.Type;

// Output Schema
export const RaiToolLabelsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
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
export type RaiToolLabelsGetOutput = typeof RaiToolLabelsGetOutput.Type;

// The operation
/**
 * Gets the specified RAI Tool Label associated with the Azure OpenAI account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param raiToolConnectionName - The name of the Rai Tool Label
 */
export const RaiToolLabelsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RaiToolLabelsGetInput,
  outputSchema: RaiToolLabelsGetOutput,
}));
// Input Schema
export const RaiToolLabelsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/raiToolLabels",
  }),
);
export type RaiToolLabelsListInput = typeof RaiToolLabelsListInput.Type;

// Output Schema
export const RaiToolLabelsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
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
  });
export type RaiToolLabelsListOutput = typeof RaiToolLabelsListOutput.Type;

// The operation
/**
 * Lists all RAI Tool Labels associated with the Azure OpenAI account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 */
export const RaiToolLabelsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RaiToolLabelsListInput,
  outputSchema: RaiToolLabelsListOutput,
}));
// Input Schema
export const RaiTopicsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    raiTopicName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/raitopics/{raiTopicName}",
    }),
  );
export type RaiTopicsCreateOrUpdateInput =
  typeof RaiTopicsCreateOrUpdateInput.Type;

// Output Schema
export const RaiTopicsCreateOrUpdateOutput =
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
export type RaiTopicsCreateOrUpdateOutput =
  typeof RaiTopicsCreateOrUpdateOutput.Type;

// The operation
/**
 * Create the rai topic associated with the Azure OpenAI account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param raiTopicName - The name of the Rai Topic associated with the Cognitive Services Account
 */
export const RaiTopicsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RaiTopicsCreateOrUpdateInput,
    outputSchema: RaiTopicsCreateOrUpdateOutput,
  }),
);
// Input Schema
export const RaiTopicsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  raiTopicName: Schema.String.pipe(T.PathParam()),
  "api-version": Schema.String,
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/raitopics/{raiTopicName}",
  }),
);
export type RaiTopicsDeleteInput = typeof RaiTopicsDeleteInput.Type;

// Output Schema
export const RaiTopicsDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type RaiTopicsDeleteOutput = typeof RaiTopicsDeleteOutput.Type;

// The operation
/**
 * Deletes the specified custom topic associated with the Azure OpenAI account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param raiTopicName - The name of the Rai Topic associated with the Cognitive Services Account
 */
export const RaiTopicsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RaiTopicsDeleteInput,
  outputSchema: RaiTopicsDeleteOutput,
}));
// Input Schema
export const RaiTopicsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  raiTopicName: Schema.String.pipe(T.PathParam()),
  "api-version": Schema.String,
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/raitopics/{raiTopicName}",
  }),
);
export type RaiTopicsGetInput = typeof RaiTopicsGetInput.Type;

// Output Schema
export const RaiTopicsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type RaiTopicsGetOutput = typeof RaiTopicsGetOutput.Type;

// The operation
/**
 * Gets the specified custom topic associated with the Azure OpenAI account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param raiTopicName - The name of the Rai Topic associated with the Cognitive Services Account
 */
export const RaiTopicsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RaiTopicsGetInput,
  outputSchema: RaiTopicsGetOutput,
}));
// Input Schema
export const RaiTopicsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  "api-version": Schema.String,
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/raitopics",
  }),
);
export type RaiTopicsListInput = typeof RaiTopicsListInput.Type;

// Output Schema
export const RaiTopicsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nextLink: Schema.optional(Schema.String),
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
});
export type RaiTopicsListOutput = typeof RaiTopicsListOutput.Type;

// The operation
/**
 * Gets the custom topics associated with the Azure OpenAI account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 */
export const RaiTopicsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RaiTopicsListInput,
  outputSchema: RaiTopicsListOutput,
}));
// Input Schema
export const ResourceSkusListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  "api-version": Schema.String,
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/skus",
  }),
);
export type ResourceSkusListInput = typeof ResourceSkusListInput.Type;

// Output Schema
export const ResourceSkusListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    value: Schema.Array(
      Schema.Struct({
        resourceType: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        tier: Schema.optional(Schema.String),
        kind: Schema.optional(Schema.String),
        locations: Schema.optional(Schema.Array(Schema.String)),
        restrictions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              type: Schema.optional(Schema.Literals(["Location", "Zone"])),
              values: Schema.optional(Schema.Array(Schema.String)),
              restrictionInfo: Schema.optional(
                Schema.Struct({
                  locations: Schema.optional(Schema.Array(Schema.String)),
                  zones: Schema.optional(Schema.Array(Schema.String)),
                }),
              ),
              reasonCode: Schema.optional(
                Schema.Literals(["QuotaId", "NotAvailableForSubscription"]),
              ),
            }),
          ),
        ),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  },
);
export type ResourceSkusListOutput = typeof ResourceSkusListOutput.Type;

// The operation
/**
 * Gets the list of Microsoft.CognitiveServices SKUs available for your Subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const ResourceSkusList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ResourceSkusListInput,
  outputSchema: ResourceSkusListOutput,
}));
// Input Schema
export const SubscriptionRaiPolicyCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    raiPolicyName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/raiPolicy/{raiPolicyName}",
    }),
  );
export type SubscriptionRaiPolicyCreateOrUpdateInput =
  typeof SubscriptionRaiPolicyCreateOrUpdateInput.Type;

// Output Schema
export const SubscriptionRaiPolicyCreateOrUpdateOutput =
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
export type SubscriptionRaiPolicyCreateOrUpdateOutput =
  typeof SubscriptionRaiPolicyCreateOrUpdateOutput.Type;

// The operation
/**
 * Update the state of specified Content Filters associated with the subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param raiPolicyName - The name of the RaiPolicy associated with the Cognitive Services Account
 */
export const SubscriptionRaiPolicyCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SubscriptionRaiPolicyCreateOrUpdateInput,
    outputSchema: SubscriptionRaiPolicyCreateOrUpdateOutput,
  }));
// Input Schema
export const SubscriptionRaiPolicyDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    raiPolicyName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/raiPolicy/{raiPolicyName}",
    }),
  );
export type SubscriptionRaiPolicyDeleteInput =
  typeof SubscriptionRaiPolicyDeleteInput.Type;

// Output Schema
export const SubscriptionRaiPolicyDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type SubscriptionRaiPolicyDeleteOutput =
  typeof SubscriptionRaiPolicyDeleteOutput.Type;

// The operation
/**
 * Deletes the specified Content Filters associated with the subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param raiPolicyName - The name of the RaiPolicy associated with the Cognitive Services Account
 */
export const SubscriptionRaiPolicyDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SubscriptionRaiPolicyDeleteInput,
    outputSchema: SubscriptionRaiPolicyDeleteOutput,
  }),
);
// Input Schema
export const SubscriptionRaiPolicyGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    raiPolicyName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/raiPolicy/{raiPolicyName}",
    }),
  );
export type SubscriptionRaiPolicyGetInput =
  typeof SubscriptionRaiPolicyGetInput.Type;

// Output Schema
export const SubscriptionRaiPolicyGetOutput =
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
export type SubscriptionRaiPolicyGetOutput =
  typeof SubscriptionRaiPolicyGetOutput.Type;

// The operation
/**
 * Gets the specified Content Filters associated with the Subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param raiPolicyName - The name of the RaiPolicy associated with the Cognitive Services Account
 */
export const SubscriptionRaiPolicyGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SubscriptionRaiPolicyGetInput,
    outputSchema: SubscriptionRaiPolicyGetOutput,
  }),
);
// Input Schema
export const TestRaiExternalSafetyProviderCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    safetyProviderName: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/testRaiExternalSafetyProvider/{safetyProviderName}",
    }),
  );
export type TestRaiExternalSafetyProviderCreateOrUpdateInput =
  typeof TestRaiExternalSafetyProviderCreateOrUpdateInput.Type;

// Output Schema
export const TestRaiExternalSafetyProviderCreateOrUpdateOutput =
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
export type TestRaiExternalSafetyProviderCreateOrUpdateOutput =
  typeof TestRaiExternalSafetyProviderCreateOrUpdateOutput.Type;

// The operation
/**
 * Test the rai safety provider associated with the subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - The name of Cognitive Services account.
 * @param safetyProviderName - The name of the Rai External Safety Provider associated with the Cognitive Services Account
 */
export const TestRaiExternalSafetyProviderCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: TestRaiExternalSafetyProviderCreateOrUpdateInput,
    outputSchema: TestRaiExternalSafetyProviderCreateOrUpdateOutput,
  }));
// Input Schema
export const UsagesListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  location: Schema.String.pipe(T.PathParam()),
  "api-version": Schema.String,
  $filter: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/locations/{location}/usages",
  }),
);
export type UsagesListInput = typeof UsagesListInput.Type;

// Output Schema
export const UsagesListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nextLink: Schema.optional(Schema.String),
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        unit: Schema.optional(
          Schema.Literals([
            "Count",
            "Bytes",
            "Seconds",
            "Percent",
            "CountPerSecond",
            "BytesPerSecond",
            "Milliseconds",
          ]),
        ),
        name: Schema.optional(
          Schema.Struct({
            value: Schema.optional(Schema.String),
            localizedValue: Schema.optional(Schema.String),
          }),
        ),
        quotaPeriod: Schema.optional(Schema.String),
        limit: Schema.optional(Schema.Number),
        currentValue: Schema.optional(Schema.Number),
        nextResetTime: Schema.optional(Schema.String),
        status: Schema.optional(
          Schema.Literals(["Included", "Blocked", "InOverage", "Unknown"]),
        ),
      }),
    ),
  ),
});
export type UsagesListOutput = typeof UsagesListOutput.Type;

// The operation
/**
 * Get usages for the requested subscription
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The name of Azure region.
 * @param $filter - An OData filter expression that describes a subset of usages to return. The supported parameter is name.value (name of the metric, can have an or of multiple names).
 */
export const UsagesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UsagesListInput,
  outputSchema: UsagesListOutput,
}));
