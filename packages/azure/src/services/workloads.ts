/**
 * Azure Workloads API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface MonitorsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  monitorName: string;
  identity?: {
    type: "None" | "UserAssigned";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    > | null;
  };
  properties?: {
    provisioningState?:
      | "Accepted"
      | "Creating"
      | "Updating"
      | "Failed"
      | "Succeeded"
      | "Deleting"
      | "Migrating";
    errors?: {
      code?: string;
      message?: string;
      target?: string;
      details?: unknown[];
      innerError?: { innerError?: unknown };
    };
    appLocation?: string;
    routingPreference?: "Default" | "RouteAll";
    zoneRedundancyPreference?: string;
    managedResourceGroupConfiguration?: { name?: string };
    logAnalyticsWorkspaceArmId?: string;
    monitorSubnet?: string;
    msiArmId?: string;
    storageAccountArmId?: string;
  };
  tags?: Record<string, string>;
  location: string;
}
export const MonitorsCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  monitorName: Schema.String.pipe(T.PathParam()),
  identity: Schema.optional(
    Schema.Struct({
      type: Schema.Literals(["None", "UserAssigned"]),
      userAssignedIdentities: Schema.optional(
        Schema.NullOr(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              principalId: Schema.optional(Schema.String),
              clientId: Schema.optional(Schema.String),
            }),
          ),
        ),
      ),
    }),
  ),
  properties: Schema.optional(
    Schema.Struct({
      provisioningState: Schema.optional(
        Schema.Literals([
          "Accepted",
          "Creating",
          "Updating",
          "Failed",
          "Succeeded",
          "Deleting",
          "Migrating",
        ]),
      ),
      errors: Schema.optional(
        Schema.Struct({
          code: Schema.optional(Schema.String),
          message: Schema.optional(Schema.String),
          target: Schema.optional(Schema.String),
          details: Schema.optional(Schema.Array(Schema.Unknown)),
          innerError: Schema.optional(
            Schema.Struct({
              innerError: Schema.optional(Schema.Unknown),
            }),
          ),
        }),
      ),
      appLocation: Schema.optional(Schema.String),
      routingPreference: Schema.optional(
        Schema.Literals(["Default", "RouteAll"]),
      ),
      zoneRedundancyPreference: Schema.optional(Schema.String),
      managedResourceGroupConfiguration: Schema.optional(
        Schema.Struct({
          name: Schema.optional(Schema.String),
        }),
      ),
      logAnalyticsWorkspaceArmId: Schema.optional(Schema.String),
      monitorSubnet: Schema.optional(Schema.String),
      msiArmId: Schema.optional(Schema.String),
      storageAccountArmId: Schema.optional(Schema.String),
    }),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.String,
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/monitors/{monitorName}",
    apiVersion: "2023-04-01",
  }),
) as unknown as Schema.Codec<MonitorsCreateInput>;

// Output Schema
export interface MonitorsCreateOutput {
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
export const MonitorsCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<MonitorsCreateOutput>;

// The operation
/**
 * Creates a SAP monitor.
 *
 * Creates a SAP monitor for the specified subscription, resource group, and resource name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param monitorName - Name of the SAP monitor resource.
 */
export const monitorsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: MonitorsCreateInput,
  outputSchema: MonitorsCreateOutput,
}));
// Input Schema
export interface MonitorsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  monitorName: string;
}
export const MonitorsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  monitorName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/monitors/{monitorName}",
    apiVersion: "2023-04-01",
  }),
) as unknown as Schema.Codec<MonitorsDeleteInput>;

// Output Schema
export interface MonitorsDeleteOutput {
  id?: string;
  name?: string;
  status: string;
  percentComplete?: number;
  startTime?: string;
  endTime?: string;
  operations?: {
    id?: string;
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
export const MonitorsDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<MonitorsDeleteOutput>;

// The operation
/**
 * Deletes a SAP monitor.
 *
 * Deletes a SAP monitor with the specified subscription, resource group, and SAP monitor name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param monitorName - Name of the SAP monitor resource.
 */
export const monitorsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: MonitorsDeleteInput,
  outputSchema: MonitorsDeleteOutput,
}));
// Input Schema
export interface MonitorsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  monitorName: string;
}
export const MonitorsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  monitorName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/monitors/{monitorName}",
    apiVersion: "2023-04-01",
  }),
) as unknown as Schema.Codec<MonitorsGetInput>;

// Output Schema
export interface MonitorsGetOutput {
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
export const MonitorsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<MonitorsGetOutput>;

// The operation
/**
 * Gets properties of a SAP monitor.
 *
 * Gets properties of a SAP monitor for the specified subscription, resource group, and resource name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param monitorName - Name of the SAP monitor resource.
 */
export const monitorsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: MonitorsGetInput,
  outputSchema: MonitorsGetOutput,
}));
// Input Schema
export interface MonitorsListInput {
  subscriptionId: string;
}
export const MonitorsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.Workloads/monitors",
    apiVersion: "2023-04-01",
  }),
) as unknown as Schema.Codec<MonitorsListInput>;

// Output Schema
export interface MonitorsListOutput {
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
export const MonitorsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<MonitorsListOutput>;

// The operation
/**
 * Gets a list of SAP monitors in the specified subscription.
 *
 * Gets a list of SAP monitors in the specified subscription. The operations returns various properties of each SAP monitor.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const monitorsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: MonitorsListInput,
  outputSchema: MonitorsListOutput,
}));
// Input Schema
export interface MonitorsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const MonitorsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/monitors",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<MonitorsListByResourceGroupInput>;

// Output Schema
export interface MonitorsListByResourceGroupOutput {
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
export const MonitorsListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<MonitorsListByResourceGroupOutput>;

// The operation
/**
 * Gets a list of SAP monitors
 *
 * Gets a list of SAP monitors in the specified resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const monitorsListByResourceGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: MonitorsListByResourceGroupInput,
    outputSchema: MonitorsListByResourceGroupOutput,
  }),
);
// Input Schema
export interface MonitorsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  monitorName: string;
  tags?: Record<string, string>;
  identity?: {
    type: "None" | "UserAssigned";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    > | null;
  };
}
export const MonitorsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  monitorName: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  identity: Schema.optional(
    Schema.Struct({
      type: Schema.Literals(["None", "UserAssigned"]),
      userAssignedIdentities: Schema.optional(
        Schema.NullOr(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              principalId: Schema.optional(Schema.String),
              clientId: Schema.optional(Schema.String),
            }),
          ),
        ),
      ),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/monitors/{monitorName}",
    apiVersion: "2023-04-01",
  }),
) as unknown as Schema.Codec<MonitorsUpdateInput>;

// Output Schema
export interface MonitorsUpdateOutput {
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
export const MonitorsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<MonitorsUpdateOutput>;

// The operation
/**
 * Patches the Tags field of a SAP monitor.
 *
 * Patches the Tags field of a SAP monitor for the specified subscription, resource group, and SAP monitor name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param monitorName - Name of the SAP monitor resource.
 */
export const monitorsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: MonitorsUpdateInput,
  outputSchema: MonitorsUpdateOutput,
}));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Workloads/operations",
    apiVersion: "2023-04-01",
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
}) as unknown as Schema.Codec<OperationsListOutput>;

// The operation
/**
 * Lists all the available API operations under this PR
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface ProviderInstancesCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  monitorName: string;
  providerInstanceName: string;
  identity?: {
    type: "None" | "UserAssigned";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    > | null;
  };
  properties?: {
    provisioningState?:
      | "Accepted"
      | "Creating"
      | "Updating"
      | "Failed"
      | "Succeeded"
      | "Deleting"
      | "Migrating";
    errors?: {
      code?: string;
      message?: string;
      target?: string;
      details?: unknown[];
      innerError?: { innerError?: unknown };
    };
    providerSettings?: { providerType: string };
  };
}
export const ProviderInstancesCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    monitorName: Schema.String.pipe(T.PathParam()),
    providerInstanceName: Schema.String.pipe(T.PathParam()),
    identity: Schema.optional(
      Schema.Struct({
        type: Schema.Literals(["None", "UserAssigned"]),
        userAssignedIdentities: Schema.optional(
          Schema.NullOr(
            Schema.Record(
              Schema.String,
              Schema.Struct({
                principalId: Schema.optional(Schema.String),
                clientId: Schema.optional(Schema.String),
              }),
            ),
          ),
        ),
      }),
    ),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Accepted",
            "Creating",
            "Updating",
            "Failed",
            "Succeeded",
            "Deleting",
            "Migrating",
          ]),
        ),
        errors: Schema.optional(
          Schema.Struct({
            code: Schema.optional(Schema.String),
            message: Schema.optional(Schema.String),
            target: Schema.optional(Schema.String),
            details: Schema.optional(Schema.Array(Schema.Unknown)),
            innerError: Schema.optional(
              Schema.Struct({
                innerError: Schema.optional(Schema.Unknown),
              }),
            ),
          }),
        ),
        providerSettings: Schema.optional(
          Schema.Struct({
            providerType: Schema.String,
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/monitors/{monitorName}/providerInstances/{providerInstanceName}",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<ProviderInstancesCreateInput>;

// Output Schema
export interface ProviderInstancesCreateOutput {
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
export const ProviderInstancesCreateOutput =
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
  }) as unknown as Schema.Codec<ProviderInstancesCreateOutput>;

// The operation
/**
 * Creates a provider instance.
 *
 * Creates a provider instance for the specified subscription, resource group, SAP monitor name, and resource name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param monitorName - Name of the SAP monitor resource.
 * @param providerInstanceName - Name of the provider instance.
 */
export const ProviderInstancesCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ProviderInstancesCreateInput,
    outputSchema: ProviderInstancesCreateOutput,
  }),
);
// Input Schema
export interface ProviderInstancesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  monitorName: string;
  providerInstanceName: string;
}
export const ProviderInstancesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    monitorName: Schema.String.pipe(T.PathParam()),
    providerInstanceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/monitors/{monitorName}/providerInstances/{providerInstanceName}",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<ProviderInstancesDeleteInput>;

// Output Schema
export interface ProviderInstancesDeleteOutput {
  id?: string;
  name?: string;
  status: string;
  percentComplete?: number;
  startTime?: string;
  endTime?: string;
  operations?: {
    id?: string;
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
export const ProviderInstancesDeleteOutput =
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
  }) as unknown as Schema.Codec<ProviderInstancesDeleteOutput>;

// The operation
/**
 * Deletes a provider instance.
 *
 * Deletes a provider instance for the specified subscription, resource group, SAP monitor name, and resource name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param monitorName - Name of the SAP monitor resource.
 * @param providerInstanceName - Name of the provider instance.
 */
export const ProviderInstancesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ProviderInstancesDeleteInput,
    outputSchema: ProviderInstancesDeleteOutput,
  }),
);
// Input Schema
export interface ProviderInstancesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  monitorName: string;
  providerInstanceName: string;
}
export const ProviderInstancesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    monitorName: Schema.String.pipe(T.PathParam()),
    providerInstanceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/monitors/{monitorName}/providerInstances/{providerInstanceName}",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<ProviderInstancesGetInput>;

// Output Schema
export interface ProviderInstancesGetOutput {
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
export const ProviderInstancesGetOutput =
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
  }) as unknown as Schema.Codec<ProviderInstancesGetOutput>;

// The operation
/**
 * Gets properties of a provider instance.
 *
 * Gets properties of a provider instance for the specified subscription, resource group, SAP monitor name, and resource name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param monitorName - Name of the SAP monitor resource.
 * @param providerInstanceName - Name of the provider instance.
 */
export const ProviderInstancesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ProviderInstancesGetInput,
    outputSchema: ProviderInstancesGetOutput,
  }),
);
// Input Schema
export interface ProviderInstancesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  monitorName: string;
}
export const ProviderInstancesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    monitorName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/monitors/{monitorName}/providerInstances",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<ProviderInstancesListInput>;

// Output Schema
export interface ProviderInstancesListOutput {
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
export const ProviderInstancesListOutput =
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
  }) as unknown as Schema.Codec<ProviderInstancesListOutput>;

// The operation
/**
 * Gets a list of provider instances in the specified SAP monitor.
 *
 * Gets a list of provider instances in the specified SAP monitor. The operations returns various properties of each provider instances.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param monitorName - Name of the SAP monitor resource.
 */
export const ProviderInstancesList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ProviderInstancesListInput,
    outputSchema: ProviderInstancesListOutput,
  }),
);
// Input Schema
export interface SAPApplicationServerInstancesCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  sapVirtualInstanceName: string;
  applicationInstanceName: string;
  properties?: {
    instanceNo?: string;
    subnet?: string;
    hostname?: string;
    kernelVersion?: string;
    kernelPatch?: string;
    ipAddress?: string;
    gatewayPort?: number | null;
    icmHttpPort?: number | null;
    icmHttpsPort?: number | null;
    loadBalancerDetails?: { id?: string };
    vmDetails?: {
      type?: "Active" | "Standby" | "Unknown";
      virtualMachineId?: string;
      storageDetails?: { id?: string }[];
    }[];
    status?:
      | "Starting"
      | "Running"
      | "Stopping"
      | "Offline"
      | "PartiallyRunning"
      | "Unavailable"
      | "SoftShutdown";
    health?: "Unknown" | "Healthy" | "Unhealthy" | "Degraded";
    provisioningState?:
      | "Succeeded"
      | "Updating"
      | "Creating"
      | "Failed"
      | "Deleting";
    errors?: {
      properties?: { code?: string; message?: string; details?: unknown[] };
    };
  };
  tags?: Record<string, string>;
  location: string;
}
export const SAPApplicationServerInstancesCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sapVirtualInstanceName: Schema.String.pipe(T.PathParam()),
    applicationInstanceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        instanceNo: Schema.optional(Schema.String),
        subnet: Schema.optional(Schema.String),
        hostname: Schema.optional(Schema.String),
        kernelVersion: Schema.optional(Schema.String),
        kernelPatch: Schema.optional(Schema.String),
        ipAddress: Schema.optional(Schema.String),
        gatewayPort: Schema.optional(Schema.NullOr(Schema.Number)),
        icmHttpPort: Schema.optional(Schema.NullOr(Schema.Number)),
        icmHttpsPort: Schema.optional(Schema.NullOr(Schema.Number)),
        loadBalancerDetails: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
          }),
        ),
        vmDetails: Schema.optional(
          Schema.Array(
            Schema.Struct({
              type: Schema.optional(
                Schema.Literals(["Active", "Standby", "Unknown"]),
              ),
              virtualMachineId: Schema.optional(Schema.String),
              storageDetails: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    id: Schema.optional(Schema.String),
                  }),
                ),
              ),
            }),
          ),
        ),
        status: Schema.optional(
          Schema.Literals([
            "Starting",
            "Running",
            "Stopping",
            "Offline",
            "PartiallyRunning",
            "Unavailable",
            "SoftShutdown",
          ]),
        ),
        health: Schema.optional(
          Schema.Literals(["Unknown", "Healthy", "Unhealthy", "Degraded"]),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Updating",
            "Creating",
            "Failed",
            "Deleting",
          ]),
        ),
        errors: Schema.optional(
          Schema.Struct({
            properties: Schema.optional(
              Schema.Struct({
                code: Schema.optional(Schema.String),
                message: Schema.optional(Schema.String),
                details: Schema.optional(Schema.Array(Schema.Unknown)),
              }),
            ),
          }),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/applicationInstances/{applicationInstanceName}",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<SAPApplicationServerInstancesCreateInput>;

// Output Schema
export interface SAPApplicationServerInstancesCreateOutput {
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
export const SAPApplicationServerInstancesCreateOutput =
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
  }) as unknown as Schema.Codec<SAPApplicationServerInstancesCreateOutput>;

// The operation
/**
 * Puts the SAP Application Server Instance resource. <br><br>This will be used by service only. PUT by end user will return a Bad Request error.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sapVirtualInstanceName - The name of the Virtual Instances for SAP solutions resource
 * @param applicationInstanceName - The name of SAP Application Server instance resource.
 * @param api-version - The API version to use for this operation.
 */
export const SAPApplicationServerInstancesCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SAPApplicationServerInstancesCreateInput,
    outputSchema: SAPApplicationServerInstancesCreateOutput,
  }));
// Input Schema
export interface SAPApplicationServerInstancesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  sapVirtualInstanceName: string;
  applicationInstanceName: string;
}
export const SAPApplicationServerInstancesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sapVirtualInstanceName: Schema.String.pipe(T.PathParam()),
    applicationInstanceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/applicationInstances/{applicationInstanceName}",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<SAPApplicationServerInstancesDeleteInput>;

// Output Schema
export interface SAPApplicationServerInstancesDeleteOutput {
  id?: string;
  name?: string;
  status: string;
  percentComplete?: number;
  startTime?: string;
  endTime?: string;
  operations?: {
    id?: string;
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
export const SAPApplicationServerInstancesDeleteOutput =
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
  }) as unknown as Schema.Codec<SAPApplicationServerInstancesDeleteOutput>;

// The operation
/**
 * Deletes the SAP Application Server Instance resource. <br><br>This operation will be used by service only. Delete by end user will return a Bad Request error.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sapVirtualInstanceName - The name of the Virtual Instances for SAP solutions resource
 * @param applicationInstanceName - The name of SAP Application Server instance resource.
 * @param api-version - The API version to use for this operation.
 */
export const SAPApplicationServerInstancesDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SAPApplicationServerInstancesDeleteInput,
    outputSchema: SAPApplicationServerInstancesDeleteOutput,
  }));
// Input Schema
export interface SAPApplicationServerInstancesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  sapVirtualInstanceName: string;
  applicationInstanceName: string;
}
export const SAPApplicationServerInstancesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sapVirtualInstanceName: Schema.String.pipe(T.PathParam()),
    applicationInstanceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/applicationInstances/{applicationInstanceName}",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<SAPApplicationServerInstancesGetInput>;

// Output Schema
export interface SAPApplicationServerInstancesGetOutput {
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
export const SAPApplicationServerInstancesGetOutput =
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
  }) as unknown as Schema.Codec<SAPApplicationServerInstancesGetOutput>;

// The operation
/**
 * Gets the SAP Application Server Instance corresponding to the Virtual Instance for SAP solutions resource.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sapVirtualInstanceName - The name of the Virtual Instances for SAP solutions resource
 * @param applicationInstanceName - The name of SAP Application Server instance resource.
 * @param api-version - The API version to use for this operation.
 */
export const SAPApplicationServerInstancesGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SAPApplicationServerInstancesGetInput,
    outputSchema: SAPApplicationServerInstancesGetOutput,
  }));
// Input Schema
export interface SAPApplicationServerInstancesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  sapVirtualInstanceName: string;
}
export const SAPApplicationServerInstancesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sapVirtualInstanceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/applicationInstances",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<SAPApplicationServerInstancesListInput>;

// Output Schema
export interface SAPApplicationServerInstancesListOutput {
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
export const SAPApplicationServerInstancesListOutput =
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
  }) as unknown as Schema.Codec<SAPApplicationServerInstancesListOutput>;

// The operation
/**
 * Lists the SAP Application Server Instance resources for a given Virtual Instance for SAP solutions resource.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sapVirtualInstanceName - The name of the Virtual Instances for SAP solutions resource
 * @param api-version - The API version to use for this operation.
 */
export const SAPApplicationServerInstancesList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SAPApplicationServerInstancesListInput,
    outputSchema: SAPApplicationServerInstancesListOutput,
  }));
// Input Schema
export interface SapApplicationServerInstancesStartInput {
  subscriptionId: string;
  resourceGroupName: string;
  sapVirtualInstanceName: string;
  applicationInstanceName: string;
  startVm?: boolean;
}
export const SapApplicationServerInstancesStartInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sapVirtualInstanceName: Schema.String.pipe(T.PathParam()),
    applicationInstanceName: Schema.String.pipe(T.PathParam()),
    startVm: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/applicationInstances/{applicationInstanceName}/start",
      apiVersion: "2024-09-01",
    }),
  ) as unknown as Schema.Codec<SapApplicationServerInstancesStartInput>;

// Output Schema
export interface SapApplicationServerInstancesStartOutput {
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
export const SapApplicationServerInstancesStartOutput =
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
  }) as unknown as Schema.Codec<SapApplicationServerInstancesStartOutput>;

// The operation
/**
 * Starts the SAP Application Server Instance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sapVirtualInstanceName - The name of the Virtual Instances for SAP solutions resource
 * @param applicationInstanceName - The name of SAP Application Server instance resource.
 */
export const SapApplicationServerInstancesStart =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SapApplicationServerInstancesStartInput,
    outputSchema: SapApplicationServerInstancesStartOutput,
  }));
// Input Schema
export interface SAPApplicationServerInstancesStartInstanceInput {
  subscriptionId: string;
  resourceGroupName: string;
  sapVirtualInstanceName: string;
  applicationInstanceName: string;
}
export const SAPApplicationServerInstancesStartInstanceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sapVirtualInstanceName: Schema.String.pipe(T.PathParam()),
    applicationInstanceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/applicationInstances/{applicationInstanceName}/start",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<SAPApplicationServerInstancesStartInstanceInput>;

// Output Schema
export interface SAPApplicationServerInstancesStartInstanceOutput {
  id?: string;
  name?: string;
  status: string;
  percentComplete?: number;
  startTime?: string;
  endTime?: string;
  operations?: {
    id?: string;
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
export const SAPApplicationServerInstancesStartInstanceOutput =
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
  }) as unknown as Schema.Codec<SAPApplicationServerInstancesStartInstanceOutput>;

// The operation
/**
 * Starts the SAP Application Server Instance.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sapVirtualInstanceName - The name of the Virtual Instances for SAP solutions resource
 * @param applicationInstanceName - The name of SAP Application Server instance resource.
 * @param api-version - The API version to use for this operation.
 */
export const SAPApplicationServerInstancesStartInstance =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SAPApplicationServerInstancesStartInstanceInput,
    outputSchema: SAPApplicationServerInstancesStartInstanceOutput,
  }));
// Input Schema
export interface SapApplicationServerInstancesStopInput {
  subscriptionId: string;
  resourceGroupName: string;
  sapVirtualInstanceName: string;
  applicationInstanceName: string;
  softStopTimeoutSeconds?: number;
  deallocateVm?: boolean;
}
export const SapApplicationServerInstancesStopInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sapVirtualInstanceName: Schema.String.pipe(T.PathParam()),
    applicationInstanceName: Schema.String.pipe(T.PathParam()),
    softStopTimeoutSeconds: Schema.optional(Schema.Number),
    deallocateVm: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/applicationInstances/{applicationInstanceName}/stop",
      apiVersion: "2024-09-01",
    }),
  ) as unknown as Schema.Codec<SapApplicationServerInstancesStopInput>;

// Output Schema
export interface SapApplicationServerInstancesStopOutput {
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
export const SapApplicationServerInstancesStopOutput =
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
  }) as unknown as Schema.Codec<SapApplicationServerInstancesStopOutput>;

// The operation
/**
 * Stops the SAP Application Server Instance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sapVirtualInstanceName - The name of the Virtual Instances for SAP solutions resource
 * @param applicationInstanceName - The name of SAP Application Server instance resource.
 */
export const SapApplicationServerInstancesStop =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SapApplicationServerInstancesStopInput,
    outputSchema: SapApplicationServerInstancesStopOutput,
  }));
// Input Schema
export interface SAPApplicationServerInstancesStopInstanceInput {
  subscriptionId: string;
  resourceGroupName: string;
  sapVirtualInstanceName: string;
  applicationInstanceName: string;
  softStopTimeoutSeconds?: number;
}
export const SAPApplicationServerInstancesStopInstanceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sapVirtualInstanceName: Schema.String.pipe(T.PathParam()),
    applicationInstanceName: Schema.String.pipe(T.PathParam()),
    softStopTimeoutSeconds: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/applicationInstances/{applicationInstanceName}/stop",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<SAPApplicationServerInstancesStopInstanceInput>;

// Output Schema
export interface SAPApplicationServerInstancesStopInstanceOutput {
  id?: string;
  name?: string;
  status: string;
  percentComplete?: number;
  startTime?: string;
  endTime?: string;
  operations?: {
    id?: string;
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
export const SAPApplicationServerInstancesStopInstanceOutput =
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
  }) as unknown as Schema.Codec<SAPApplicationServerInstancesStopInstanceOutput>;

// The operation
/**
 * Stops the SAP Application Server Instance.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sapVirtualInstanceName - The name of the Virtual Instances for SAP solutions resource
 * @param applicationInstanceName - The name of SAP Application Server instance resource.
 * @param api-version - The API version to use for this operation.
 */
export const SAPApplicationServerInstancesStopInstance =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SAPApplicationServerInstancesStopInstanceInput,
    outputSchema: SAPApplicationServerInstancesStopInstanceOutput,
  }));
// Input Schema
export interface SAPApplicationServerInstancesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  sapVirtualInstanceName: string;
  applicationInstanceName: string;
  tags?: Record<string, string>;
}
export const SAPApplicationServerInstancesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sapVirtualInstanceName: Schema.String.pipe(T.PathParam()),
    applicationInstanceName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/applicationInstances/{applicationInstanceName}",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<SAPApplicationServerInstancesUpdateInput>;

// Output Schema
export interface SAPApplicationServerInstancesUpdateOutput {
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
export const SAPApplicationServerInstancesUpdateOutput =
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
  }) as unknown as Schema.Codec<SAPApplicationServerInstancesUpdateOutput>;

// The operation
/**
 * Puts the SAP Application Server Instance resource.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sapVirtualInstanceName - The name of the Virtual Instances for SAP solutions resource
 * @param applicationInstanceName - The name of SAP Application Server instance resource.
 * @param api-version - The API version to use for this operation.
 */
export const SAPApplicationServerInstancesUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SAPApplicationServerInstancesUpdateInput,
    outputSchema: SAPApplicationServerInstancesUpdateOutput,
  }));
// Input Schema
export interface SAPAvailabilityZoneDetailsInput {
  subscriptionId: string;
  location: string;
  appLocation: string;
  sapProduct: "ECC" | "S4HANA" | "Other";
  databaseType: "HANA" | "DB2";
}
export const SAPAvailabilityZoneDetailsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    appLocation: Schema.String,
    sapProduct: Schema.Literals(["ECC", "S4HANA", "Other"]),
    databaseType: Schema.Literals(["HANA", "DB2"]),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Workloads/locations/{location}/sapVirtualInstanceMetadata/default/getAvailabilityZoneDetails",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<SAPAvailabilityZoneDetailsInput>;

// Output Schema
export interface SAPAvailabilityZoneDetailsOutput {
  availabilityZonePairs?: { zoneA?: number; zoneB?: number }[];
}
export const SAPAvailabilityZoneDetailsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    availabilityZonePairs: Schema.optional(
      Schema.Array(
        Schema.Struct({
          zoneA: Schema.optional(Schema.Number),
          zoneB: Schema.optional(Schema.Number),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<SAPAvailabilityZoneDetailsOutput>;

// The operation
/**
 * Get the recommended SAP Availability Zone Pair Details for your region.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The name of Azure region.
 * @param api-version - The API version to use for this operation.
 */
export const SAPAvailabilityZoneDetails = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SAPAvailabilityZoneDetailsInput,
    outputSchema: SAPAvailabilityZoneDetailsOutput,
  }),
);
// Input Schema
export interface SAPCentralInstancesCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  sapVirtualInstanceName: string;
  centralInstanceName: string;
  properties?: {
    instanceNo?: string;
    subnet?: string;
    messageServerProperties?: {
      msPort?: number | null;
      internalMsPort?: number | null;
      httpPort?: number | null;
      httpsPort?: number | null;
      hostname?: string;
      ipAddress?: string;
      health?: "Unknown" | "Healthy" | "Unhealthy" | "Degraded";
    };
    enqueueServerProperties?: {
      hostname?: string;
      ipAddress?: string;
      port?: number | null;
      health?: "Unknown" | "Healthy" | "Unhealthy" | "Degraded";
    };
    gatewayServerProperties?: {
      port?: number | null;
      health?: "Unknown" | "Healthy" | "Unhealthy" | "Degraded";
    };
    enqueueReplicationServerProperties?: {
      ersVersion?: "EnqueueReplicator1" | "EnqueueReplicator2";
      instanceNo?: string;
      hostname?: string;
      kernelVersion?: string;
      kernelPatch?: string;
      ipAddress?: string;
      health?: "Unknown" | "Healthy" | "Unhealthy" | "Degraded";
    };
    kernelVersion?: string | null;
    kernelPatch?: string | null;
    loadBalancerDetails?: { id?: string };
    vmDetails?: {
      type?:
        | "Primary"
        | "Secondary"
        | "Unknown"
        | "ASCS"
        | "ERSInactive"
        | "ERS"
        | "Standby";
      virtualMachineId?: string;
      storageDetails?: { id?: string }[];
    }[];
    status?:
      | "Starting"
      | "Running"
      | "Stopping"
      | "Offline"
      | "PartiallyRunning"
      | "Unavailable"
      | "SoftShutdown";
    health?: "Unknown" | "Healthy" | "Unhealthy" | "Degraded";
    provisioningState?:
      | "Succeeded"
      | "Updating"
      | "Creating"
      | "Failed"
      | "Deleting";
    errors?: {
      properties?: { code?: string; message?: string; details?: unknown[] };
    };
  };
  tags?: Record<string, string>;
  location: string;
}
export const SAPCentralInstancesCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sapVirtualInstanceName: Schema.String.pipe(T.PathParam()),
    centralInstanceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        instanceNo: Schema.optional(Schema.String),
        subnet: Schema.optional(Schema.String),
        messageServerProperties: Schema.optional(
          Schema.Struct({
            msPort: Schema.optional(Schema.NullOr(Schema.Number)),
            internalMsPort: Schema.optional(Schema.NullOr(Schema.Number)),
            httpPort: Schema.optional(Schema.NullOr(Schema.Number)),
            httpsPort: Schema.optional(Schema.NullOr(Schema.Number)),
            hostname: Schema.optional(Schema.String),
            ipAddress: Schema.optional(Schema.String),
            health: Schema.optional(
              Schema.Literals(["Unknown", "Healthy", "Unhealthy", "Degraded"]),
            ),
          }),
        ),
        enqueueServerProperties: Schema.optional(
          Schema.Struct({
            hostname: Schema.optional(Schema.String),
            ipAddress: Schema.optional(Schema.String),
            port: Schema.optional(Schema.NullOr(Schema.Number)),
            health: Schema.optional(
              Schema.Literals(["Unknown", "Healthy", "Unhealthy", "Degraded"]),
            ),
          }),
        ),
        gatewayServerProperties: Schema.optional(
          Schema.Struct({
            port: Schema.optional(Schema.NullOr(Schema.Number)),
            health: Schema.optional(
              Schema.Literals(["Unknown", "Healthy", "Unhealthy", "Degraded"]),
            ),
          }),
        ),
        enqueueReplicationServerProperties: Schema.optional(
          Schema.Struct({
            ersVersion: Schema.optional(
              Schema.Literals(["EnqueueReplicator1", "EnqueueReplicator2"]),
            ),
            instanceNo: Schema.optional(Schema.String),
            hostname: Schema.optional(Schema.String),
            kernelVersion: Schema.optional(Schema.String),
            kernelPatch: Schema.optional(Schema.String),
            ipAddress: Schema.optional(Schema.String),
            health: Schema.optional(
              Schema.Literals(["Unknown", "Healthy", "Unhealthy", "Degraded"]),
            ),
          }),
        ),
        kernelVersion: Schema.optional(Schema.NullOr(Schema.String)),
        kernelPatch: Schema.optional(Schema.NullOr(Schema.String)),
        loadBalancerDetails: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
          }),
        ),
        vmDetails: Schema.optional(
          Schema.Array(
            Schema.Struct({
              type: Schema.optional(
                Schema.Literals([
                  "Primary",
                  "Secondary",
                  "Unknown",
                  "ASCS",
                  "ERSInactive",
                  "ERS",
                  "Standby",
                ]),
              ),
              virtualMachineId: Schema.optional(Schema.String),
              storageDetails: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    id: Schema.optional(Schema.String),
                  }),
                ),
              ),
            }),
          ),
        ),
        status: Schema.optional(
          Schema.Literals([
            "Starting",
            "Running",
            "Stopping",
            "Offline",
            "PartiallyRunning",
            "Unavailable",
            "SoftShutdown",
          ]),
        ),
        health: Schema.optional(
          Schema.Literals(["Unknown", "Healthy", "Unhealthy", "Degraded"]),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Updating",
            "Creating",
            "Failed",
            "Deleting",
          ]),
        ),
        errors: Schema.optional(
          Schema.Struct({
            properties: Schema.optional(
              Schema.Struct({
                code: Schema.optional(Schema.String),
                message: Schema.optional(Schema.String),
                details: Schema.optional(Schema.Array(Schema.Unknown)),
              }),
            ),
          }),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/centralInstances/{centralInstanceName}",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<SAPCentralInstancesCreateInput>;

// Output Schema
export interface SAPCentralInstancesCreateOutput {
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
export const SAPCentralInstancesCreateOutput =
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
  }) as unknown as Schema.Codec<SAPCentralInstancesCreateOutput>;

// The operation
/**
 * Creates the SAP Central Services Instance resource. <br><br>This will be used by service only. PUT operation on this resource by end user will return a Bad Request error.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sapVirtualInstanceName - The name of the Virtual Instances for SAP solutions resource
 * @param centralInstanceName - Central Services Instance resource name string modeled as parameter for auto generation to work correctly.
 * @param api-version - The API version to use for this operation.
 */
export const SAPCentralInstancesCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SAPCentralInstancesCreateInput,
    outputSchema: SAPCentralInstancesCreateOutput,
  }),
);
// Input Schema
export interface SAPCentralInstancesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  sapVirtualInstanceName: string;
  centralInstanceName: string;
}
export const SAPCentralInstancesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sapVirtualInstanceName: Schema.String.pipe(T.PathParam()),
    centralInstanceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/centralInstances/{centralInstanceName}",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<SAPCentralInstancesDeleteInput>;

// Output Schema
export interface SAPCentralInstancesDeleteOutput {
  id?: string;
  name?: string;
  status: string;
  percentComplete?: number;
  startTime?: string;
  endTime?: string;
  operations?: {
    id?: string;
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
export const SAPCentralInstancesDeleteOutput =
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
  }) as unknown as Schema.Codec<SAPCentralInstancesDeleteOutput>;

// The operation
/**
 * Deletes the SAP Central Services Instance resource. <br><br>This will be used by service only. Delete operation on this resource by end user will return a Bad Request error. You can delete the parent resource, which is the Virtual Instance for SAP solutions resource, using the delete operation on it.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sapVirtualInstanceName - The name of the Virtual Instances for SAP solutions resource
 * @param centralInstanceName - Central Services Instance resource name string modeled as parameter for auto generation to work correctly.
 * @param api-version - The API version to use for this operation.
 */
export const SAPCentralInstancesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SAPCentralInstancesDeleteInput,
    outputSchema: SAPCentralInstancesDeleteOutput,
  }),
);
// Input Schema
export interface SAPCentralInstancesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  sapVirtualInstanceName: string;
  centralInstanceName: string;
}
export const SAPCentralInstancesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sapVirtualInstanceName: Schema.String.pipe(T.PathParam()),
    centralInstanceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/centralInstances/{centralInstanceName}",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<SAPCentralInstancesGetInput>;

// Output Schema
export interface SAPCentralInstancesGetOutput {
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
export const SAPCentralInstancesGetOutput =
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
  }) as unknown as Schema.Codec<SAPCentralInstancesGetOutput>;

// The operation
/**
 * Gets the SAP Central Services Instance resource.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sapVirtualInstanceName - The name of the Virtual Instances for SAP solutions resource
 * @param centralInstanceName - Central Services Instance resource name string modeled as parameter for auto generation to work correctly.
 * @param api-version - The API version to use for this operation.
 */
export const SAPCentralInstancesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SAPCentralInstancesGetInput,
    outputSchema: SAPCentralInstancesGetOutput,
  }),
);
// Input Schema
export interface SAPCentralInstancesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  sapVirtualInstanceName: string;
}
export const SAPCentralInstancesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sapVirtualInstanceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/centralInstances",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<SAPCentralInstancesListInput>;

// Output Schema
export interface SAPCentralInstancesListOutput {
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
export const SAPCentralInstancesListOutput =
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
  }) as unknown as Schema.Codec<SAPCentralInstancesListOutput>;

// The operation
/**
 * Lists the SAP Central Services Instance resource for the given Virtual Instance for SAP solutions resource.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sapVirtualInstanceName - The name of the Virtual Instances for SAP solutions resource
 * @param api-version - The API version to use for this operation.
 */
export const SAPCentralInstancesList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SAPCentralInstancesListInput,
    outputSchema: SAPCentralInstancesListOutput,
  }),
);
// Input Schema
export interface SAPCentralInstancesStartInstanceInput {
  subscriptionId: string;
  resourceGroupName: string;
  sapVirtualInstanceName: string;
  centralInstanceName: string;
}
export const SAPCentralInstancesStartInstanceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sapVirtualInstanceName: Schema.String.pipe(T.PathParam()),
    centralInstanceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/centralInstances/{centralInstanceName}/start",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<SAPCentralInstancesStartInstanceInput>;

// Output Schema
export interface SAPCentralInstancesStartInstanceOutput {
  id?: string;
  name?: string;
  status: string;
  percentComplete?: number;
  startTime?: string;
  endTime?: string;
  operations?: {
    id?: string;
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
export const SAPCentralInstancesStartInstanceOutput =
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
  }) as unknown as Schema.Codec<SAPCentralInstancesStartInstanceOutput>;

// The operation
/**
 * Starts the SAP Central Services Instance.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sapVirtualInstanceName - The name of the Virtual Instances for SAP solutions resource
 * @param centralInstanceName - Central Services Instance resource name string modeled as parameter for auto generation to work correctly.
 * @param api-version - The API version to use for this operation.
 */
export const SAPCentralInstancesStartInstance =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SAPCentralInstancesStartInstanceInput,
    outputSchema: SAPCentralInstancesStartInstanceOutput,
  }));
// Input Schema
export interface SAPCentralInstancesStopInstanceInput {
  subscriptionId: string;
  resourceGroupName: string;
  sapVirtualInstanceName: string;
  centralInstanceName: string;
  softStopTimeoutSeconds?: number;
}
export const SAPCentralInstancesStopInstanceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sapVirtualInstanceName: Schema.String.pipe(T.PathParam()),
    centralInstanceName: Schema.String.pipe(T.PathParam()),
    softStopTimeoutSeconds: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/centralInstances/{centralInstanceName}/stop",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<SAPCentralInstancesStopInstanceInput>;

// Output Schema
export interface SAPCentralInstancesStopInstanceOutput {
  id?: string;
  name?: string;
  status: string;
  percentComplete?: number;
  startTime?: string;
  endTime?: string;
  operations?: {
    id?: string;
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
export const SAPCentralInstancesStopInstanceOutput =
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
  }) as unknown as Schema.Codec<SAPCentralInstancesStopInstanceOutput>;

// The operation
/**
 * Stops the SAP Central Services Instance.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sapVirtualInstanceName - The name of the Virtual Instances for SAP solutions resource
 * @param centralInstanceName - Central Services Instance resource name string modeled as parameter for auto generation to work correctly.
 * @param api-version - The API version to use for this operation.
 */
export const SAPCentralInstancesStopInstance =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SAPCentralInstancesStopInstanceInput,
    outputSchema: SAPCentralInstancesStopInstanceOutput,
  }));
// Input Schema
export interface SAPCentralInstancesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  sapVirtualInstanceName: string;
  centralInstanceName: string;
  tags?: Record<string, string>;
}
export const SAPCentralInstancesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sapVirtualInstanceName: Schema.String.pipe(T.PathParam()),
    centralInstanceName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/centralInstances/{centralInstanceName}",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<SAPCentralInstancesUpdateInput>;

// Output Schema
export interface SAPCentralInstancesUpdateOutput {
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
export const SAPCentralInstancesUpdateOutput =
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
  }) as unknown as Schema.Codec<SAPCentralInstancesUpdateOutput>;

// The operation
/**
 * Updates the SAP Central Services Instance resource. <br><br>This can be used to update tags on the resource.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sapVirtualInstanceName - The name of the Virtual Instances for SAP solutions resource
 * @param centralInstanceName - Central Services Instance resource name string modeled as parameter for auto generation to work correctly.
 * @param api-version - The API version to use for this operation.
 */
export const SAPCentralInstancesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SAPCentralInstancesUpdateInput,
    outputSchema: SAPCentralInstancesUpdateOutput,
  }),
);
// Input Schema
export interface SapCentralServerInstancesCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  sapVirtualInstanceName: string;
  centralInstanceName: string;
  properties?: {
    instanceNo?: string;
    subnet?: string;
    messageServerProperties?: {
      msPort?: number;
      internalMsPort?: number;
      httpPort?: number;
      httpsPort?: number;
      hostname?: string;
      ipAddress?: string;
      health?: "Unknown" | "Healthy" | "Unhealthy" | "Degraded";
    };
    enqueueServerProperties?: {
      hostname?: string;
      ipAddress?: string;
      port?: number;
      health?: "Unknown" | "Healthy" | "Unhealthy" | "Degraded";
    };
    gatewayServerProperties?: {
      port?: number;
      health?: "Unknown" | "Healthy" | "Unhealthy" | "Degraded";
    };
    enqueueReplicationServerProperties?: {
      ersVersion?: "EnqueueReplicator1" | "EnqueueReplicator2";
      instanceNo?: string;
      hostname?: string;
      kernelVersion?: string;
      kernelPatch?: string;
      ipAddress?: string;
      health?: "Unknown" | "Healthy" | "Unhealthy" | "Degraded";
    };
    kernelVersion?: string;
    kernelPatch?: string;
    loadBalancerDetails?: { id?: string };
    vmDetails?: {
      type?:
        | "Primary"
        | "Secondary"
        | "Unknown"
        | "ASCS"
        | "ERSInactive"
        | "ERS"
        | "Standby";
      virtualMachineId?: string;
      storageDetails?: { id?: string }[];
    }[];
    status?:
      | "Starting"
      | "Running"
      | "Stopping"
      | "Offline"
      | "PartiallyRunning"
      | "Unavailable"
      | "SoftShutdown";
    health?: "Unknown" | "Healthy" | "Unhealthy" | "Degraded";
    provisioningState?:
      | "Succeeded"
      | "Updating"
      | "Creating"
      | "Failed"
      | "Deleting"
      | "Canceled";
    errors?: {
      properties?: { code?: string; message?: string; details?: unknown[] };
    };
  };
  tags?: Record<string, string>;
  location: string;
}
export const SapCentralServerInstancesCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sapVirtualInstanceName: Schema.String.pipe(T.PathParam()),
    centralInstanceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        instanceNo: Schema.optional(Schema.String),
        subnet: Schema.optional(Schema.String),
        messageServerProperties: Schema.optional(
          Schema.Struct({
            msPort: Schema.optional(Schema.Number),
            internalMsPort: Schema.optional(Schema.Number),
            httpPort: Schema.optional(Schema.Number),
            httpsPort: Schema.optional(Schema.Number),
            hostname: Schema.optional(Schema.String),
            ipAddress: Schema.optional(Schema.String),
            health: Schema.optional(
              Schema.Literals(["Unknown", "Healthy", "Unhealthy", "Degraded"]),
            ),
          }),
        ),
        enqueueServerProperties: Schema.optional(
          Schema.Struct({
            hostname: Schema.optional(Schema.String),
            ipAddress: Schema.optional(Schema.String),
            port: Schema.optional(Schema.Number),
            health: Schema.optional(
              Schema.Literals(["Unknown", "Healthy", "Unhealthy", "Degraded"]),
            ),
          }),
        ),
        gatewayServerProperties: Schema.optional(
          Schema.Struct({
            port: Schema.optional(Schema.Number),
            health: Schema.optional(
              Schema.Literals(["Unknown", "Healthy", "Unhealthy", "Degraded"]),
            ),
          }),
        ),
        enqueueReplicationServerProperties: Schema.optional(
          Schema.Struct({
            ersVersion: Schema.optional(
              Schema.Literals(["EnqueueReplicator1", "EnqueueReplicator2"]),
            ),
            instanceNo: Schema.optional(Schema.String),
            hostname: Schema.optional(Schema.String),
            kernelVersion: Schema.optional(Schema.String),
            kernelPatch: Schema.optional(Schema.String),
            ipAddress: Schema.optional(Schema.String),
            health: Schema.optional(
              Schema.Literals(["Unknown", "Healthy", "Unhealthy", "Degraded"]),
            ),
          }),
        ),
        kernelVersion: Schema.optional(Schema.String),
        kernelPatch: Schema.optional(Schema.String),
        loadBalancerDetails: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
          }),
        ),
        vmDetails: Schema.optional(
          Schema.Array(
            Schema.Struct({
              type: Schema.optional(
                Schema.Literals([
                  "Primary",
                  "Secondary",
                  "Unknown",
                  "ASCS",
                  "ERSInactive",
                  "ERS",
                  "Standby",
                ]),
              ),
              virtualMachineId: Schema.optional(Schema.String),
              storageDetails: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    id: Schema.optional(Schema.String),
                  }),
                ),
              ),
            }),
          ),
        ),
        status: Schema.optional(
          Schema.Literals([
            "Starting",
            "Running",
            "Stopping",
            "Offline",
            "PartiallyRunning",
            "Unavailable",
            "SoftShutdown",
          ]),
        ),
        health: Schema.optional(
          Schema.Literals(["Unknown", "Healthy", "Unhealthy", "Degraded"]),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Updating",
            "Creating",
            "Failed",
            "Deleting",
            "Canceled",
          ]),
        ),
        errors: Schema.optional(
          Schema.Struct({
            properties: Schema.optional(
              Schema.Struct({
                code: Schema.optional(Schema.String),
                message: Schema.optional(Schema.String),
                details: Schema.optional(Schema.Array(Schema.Unknown)),
              }),
            ),
          }),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/centralInstances/{centralInstanceName}",
      apiVersion: "2024-09-01",
    }),
  ) as unknown as Schema.Codec<SapCentralServerInstancesCreateInput>;

// Output Schema
export interface SapCentralServerInstancesCreateOutput {
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
export const SapCentralServerInstancesCreateOutput =
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
  }) as unknown as Schema.Codec<SapCentralServerInstancesCreateOutput>;

// The operation
/**
 * Creates the SAP Central Services Instance resource. &lt;br&gt;&lt;br&gt;This will be used by service only. PUT operation on this resource by end user will return a Bad Request error.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sapVirtualInstanceName - The name of the Virtual Instances for SAP solutions resource
 * @param centralInstanceName - Central Services Instance resource name string modeled as parameter for auto generation to work correctly.
 */
export const SapCentralServerInstancesCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SapCentralServerInstancesCreateInput,
    outputSchema: SapCentralServerInstancesCreateOutput,
  }));
// Input Schema
export interface SapCentralServerInstancesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  sapVirtualInstanceName: string;
  centralInstanceName: string;
}
export const SapCentralServerInstancesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sapVirtualInstanceName: Schema.String.pipe(T.PathParam()),
    centralInstanceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/centralInstances/{centralInstanceName}",
      apiVersion: "2024-09-01",
    }),
  ) as unknown as Schema.Codec<SapCentralServerInstancesDeleteInput>;

// Output Schema
export type SapCentralServerInstancesDeleteOutput = void;
export const SapCentralServerInstancesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<SapCentralServerInstancesDeleteOutput>;

// The operation
/**
 * Deletes the SAP Central Services Instance resource. &lt;br&gt;&lt;br&gt;This will be used by service only. Delete operation on this resource by end user will return a Bad Request error. You can delete the parent resource, which is the Virtual Instance for SAP solutions resource, using the delete operation on it.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sapVirtualInstanceName - The name of the Virtual Instances for SAP solutions resource
 * @param centralInstanceName - Central Services Instance resource name string modeled as parameter for auto generation to work correctly.
 */
export const SapCentralServerInstancesDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SapCentralServerInstancesDeleteInput,
    outputSchema: SapCentralServerInstancesDeleteOutput,
  }));
// Input Schema
export interface SapCentralServerInstancesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  sapVirtualInstanceName: string;
  centralInstanceName: string;
}
export const SapCentralServerInstancesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sapVirtualInstanceName: Schema.String.pipe(T.PathParam()),
    centralInstanceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/centralInstances/{centralInstanceName}",
      apiVersion: "2024-09-01",
    }),
  ) as unknown as Schema.Codec<SapCentralServerInstancesGetInput>;

// Output Schema
export interface SapCentralServerInstancesGetOutput {
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
export const SapCentralServerInstancesGetOutput =
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
  }) as unknown as Schema.Codec<SapCentralServerInstancesGetOutput>;

// The operation
/**
 * Gets the SAP Central Services Instance resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sapVirtualInstanceName - The name of the Virtual Instances for SAP solutions resource
 * @param centralInstanceName - Central Services Instance resource name string modeled as parameter for auto generation to work correctly.
 */
export const SapCentralServerInstancesGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SapCentralServerInstancesGetInput,
    outputSchema: SapCentralServerInstancesGetOutput,
  }));
// Input Schema
export interface SapCentralServerInstancesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  sapVirtualInstanceName: string;
}
export const SapCentralServerInstancesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sapVirtualInstanceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/centralInstances",
      apiVersion: "2024-09-01",
    }),
  ) as unknown as Schema.Codec<SapCentralServerInstancesListInput>;

// Output Schema
export interface SapCentralServerInstancesListOutput {
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
export const SapCentralServerInstancesListOutput =
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
  }) as unknown as Schema.Codec<SapCentralServerInstancesListOutput>;

// The operation
/**
 * Lists the SAP Central Services Instance resource for the given Virtual Instance for SAP solutions resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sapVirtualInstanceName - The name of the Virtual Instances for SAP solutions resource
 */
export const SapCentralServerInstancesList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SapCentralServerInstancesListInput,
    outputSchema: SapCentralServerInstancesListOutput,
  }));
// Input Schema
export interface SapCentralServerInstancesStartInput {
  subscriptionId: string;
  resourceGroupName: string;
  sapVirtualInstanceName: string;
  centralInstanceName: string;
  startVm?: boolean;
}
export const SapCentralServerInstancesStartInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sapVirtualInstanceName: Schema.String.pipe(T.PathParam()),
    centralInstanceName: Schema.String.pipe(T.PathParam()),
    startVm: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/centralInstances/{centralInstanceName}/start",
      apiVersion: "2024-09-01",
    }),
  ) as unknown as Schema.Codec<SapCentralServerInstancesStartInput>;

// Output Schema
export interface SapCentralServerInstancesStartOutput {
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
export const SapCentralServerInstancesStartOutput =
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
  }) as unknown as Schema.Codec<SapCentralServerInstancesStartOutput>;

// The operation
/**
 * Starts the SAP Central Services Instance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sapVirtualInstanceName - The name of the Virtual Instances for SAP solutions resource
 * @param centralInstanceName - Central Services Instance resource name string modeled as parameter for auto generation to work correctly.
 */
export const SapCentralServerInstancesStart =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SapCentralServerInstancesStartInput,
    outputSchema: SapCentralServerInstancesStartOutput,
  }));
// Input Schema
export interface SapCentralServerInstancesStopInput {
  subscriptionId: string;
  resourceGroupName: string;
  sapVirtualInstanceName: string;
  centralInstanceName: string;
  softStopTimeoutSeconds?: number;
  deallocateVm?: boolean;
}
export const SapCentralServerInstancesStopInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sapVirtualInstanceName: Schema.String.pipe(T.PathParam()),
    centralInstanceName: Schema.String.pipe(T.PathParam()),
    softStopTimeoutSeconds: Schema.optional(Schema.Number),
    deallocateVm: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/centralInstances/{centralInstanceName}/stop",
      apiVersion: "2024-09-01",
    }),
  ) as unknown as Schema.Codec<SapCentralServerInstancesStopInput>;

// Output Schema
export interface SapCentralServerInstancesStopOutput {
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
export const SapCentralServerInstancesStopOutput =
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
  }) as unknown as Schema.Codec<SapCentralServerInstancesStopOutput>;

// The operation
/**
 * Stops the SAP Central Services Instance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sapVirtualInstanceName - The name of the Virtual Instances for SAP solutions resource
 * @param centralInstanceName - Central Services Instance resource name string modeled as parameter for auto generation to work correctly.
 */
export const SapCentralServerInstancesStop =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SapCentralServerInstancesStopInput,
    outputSchema: SapCentralServerInstancesStopOutput,
  }));
// Input Schema
export interface SapCentralServerInstancesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  sapVirtualInstanceName: string;
  centralInstanceName: string;
  tags?: Record<string, string>;
}
export const SapCentralServerInstancesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sapVirtualInstanceName: Schema.String.pipe(T.PathParam()),
    centralInstanceName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/centralInstances/{centralInstanceName}",
      apiVersion: "2024-09-01",
    }),
  ) as unknown as Schema.Codec<SapCentralServerInstancesUpdateInput>;

// Output Schema
export interface SapCentralServerInstancesUpdateOutput {
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
export const SapCentralServerInstancesUpdateOutput =
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
  }) as unknown as Schema.Codec<SapCentralServerInstancesUpdateOutput>;

// The operation
/**
 * Updates the SAP Central Services Instance resource. &lt;br&gt;&lt;br&gt;This can be used to update tags on the resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sapVirtualInstanceName - The name of the Virtual Instances for SAP solutions resource
 * @param centralInstanceName - Central Services Instance resource name string modeled as parameter for auto generation to work correctly.
 */
export const SapCentralServerInstancesUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SapCentralServerInstancesUpdateInput,
    outputSchema: SapCentralServerInstancesUpdateOutput,
  }));
// Input Schema
export interface SAPDatabaseInstancesCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  sapVirtualInstanceName: string;
  databaseInstanceName: string;
  properties?: {
    subnet?: string;
    databaseSid?: string;
    databaseType?: string;
    ipAddress?: string;
    loadBalancerDetails?: { id?: string };
    vmDetails?: {
      virtualMachineId?: string;
      status?:
        | "Starting"
        | "Running"
        | "Stopping"
        | "Offline"
        | "PartiallyRunning"
        | "Unavailable"
        | "SoftShutdown";
      storageDetails?: { id?: string }[];
    }[];
    status?:
      | "Starting"
      | "Running"
      | "Stopping"
      | "Offline"
      | "PartiallyRunning"
      | "Unavailable"
      | "SoftShutdown";
    provisioningState?:
      | "Succeeded"
      | "Updating"
      | "Creating"
      | "Failed"
      | "Deleting";
    errors?: {
      properties?: { code?: string; message?: string; details?: unknown[] };
    };
  };
  tags?: Record<string, string>;
  location: string;
}
export const SAPDatabaseInstancesCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sapVirtualInstanceName: Schema.String.pipe(T.PathParam()),
    databaseInstanceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        subnet: Schema.optional(Schema.String),
        databaseSid: Schema.optional(Schema.String),
        databaseType: Schema.optional(Schema.String),
        ipAddress: Schema.optional(Schema.String),
        loadBalancerDetails: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
          }),
        ),
        vmDetails: Schema.optional(
          Schema.Array(
            Schema.Struct({
              virtualMachineId: Schema.optional(Schema.String),
              status: Schema.optional(
                Schema.Literals([
                  "Starting",
                  "Running",
                  "Stopping",
                  "Offline",
                  "PartiallyRunning",
                  "Unavailable",
                  "SoftShutdown",
                ]),
              ),
              storageDetails: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    id: Schema.optional(Schema.String),
                  }),
                ),
              ),
            }),
          ),
        ),
        status: Schema.optional(
          Schema.Literals([
            "Starting",
            "Running",
            "Stopping",
            "Offline",
            "PartiallyRunning",
            "Unavailable",
            "SoftShutdown",
          ]),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Updating",
            "Creating",
            "Failed",
            "Deleting",
          ]),
        ),
        errors: Schema.optional(
          Schema.Struct({
            properties: Schema.optional(
              Schema.Struct({
                code: Schema.optional(Schema.String),
                message: Schema.optional(Schema.String),
                details: Schema.optional(Schema.Array(Schema.Unknown)),
              }),
            ),
          }),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/databaseInstances/{databaseInstanceName}",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<SAPDatabaseInstancesCreateInput>;

// Output Schema
export interface SAPDatabaseInstancesCreateOutput {
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
export const SAPDatabaseInstancesCreateOutput =
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
  }) as unknown as Schema.Codec<SAPDatabaseInstancesCreateOutput>;

// The operation
/**
 * Creates the Database resource corresponding to the Virtual Instance for SAP solutions resource. <br><br>This will be used by service only. PUT by end user will return a Bad Request error.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sapVirtualInstanceName - The name of the Virtual Instances for SAP solutions resource
 * @param databaseInstanceName - Database resource name string modeled as parameter for auto generation to work correctly.
 * @param api-version - The API version to use for this operation.
 */
export const SAPDatabaseInstancesCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SAPDatabaseInstancesCreateInput,
    outputSchema: SAPDatabaseInstancesCreateOutput,
  }),
);
// Input Schema
export interface SAPDatabaseInstancesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  sapVirtualInstanceName: string;
  databaseInstanceName: string;
}
export const SAPDatabaseInstancesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sapVirtualInstanceName: Schema.String.pipe(T.PathParam()),
    databaseInstanceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/databaseInstances/{databaseInstanceName}",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<SAPDatabaseInstancesDeleteInput>;

// Output Schema
export interface SAPDatabaseInstancesDeleteOutput {
  id?: string;
  name?: string;
  status: string;
  percentComplete?: number;
  startTime?: string;
  endTime?: string;
  operations?: {
    id?: string;
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
export const SAPDatabaseInstancesDeleteOutput =
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
  }) as unknown as Schema.Codec<SAPDatabaseInstancesDeleteOutput>;

// The operation
/**
 * Deletes the Database resource corresponding to a Virtual Instance for SAP solutions resource. <br><br>This will be used by service only. Delete by end user will return a Bad Request error.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sapVirtualInstanceName - The name of the Virtual Instances for SAP solutions resource
 * @param databaseInstanceName - Database resource name string modeled as parameter for auto generation to work correctly.
 * @param api-version - The API version to use for this operation.
 */
export const SAPDatabaseInstancesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SAPDatabaseInstancesDeleteInput,
    outputSchema: SAPDatabaseInstancesDeleteOutput,
  }),
);
// Input Schema
export interface SAPDatabaseInstancesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  sapVirtualInstanceName: string;
  databaseInstanceName: string;
}
export const SAPDatabaseInstancesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sapVirtualInstanceName: Schema.String.pipe(T.PathParam()),
    databaseInstanceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/databaseInstances/{databaseInstanceName}",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<SAPDatabaseInstancesGetInput>;

// Output Schema
export interface SAPDatabaseInstancesGetOutput {
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
export const SAPDatabaseInstancesGetOutput =
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
  }) as unknown as Schema.Codec<SAPDatabaseInstancesGetOutput>;

// The operation
/**
 * Gets the SAP Database Instance resource.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sapVirtualInstanceName - The name of the Virtual Instances for SAP solutions resource
 * @param databaseInstanceName - Database resource name string modeled as parameter for auto generation to work correctly.
 * @param api-version - The API version to use for this operation.
 */
export const SAPDatabaseInstancesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SAPDatabaseInstancesGetInput,
    outputSchema: SAPDatabaseInstancesGetOutput,
  }),
);
// Input Schema
export interface SAPDatabaseInstancesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  sapVirtualInstanceName: string;
}
export const SAPDatabaseInstancesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sapVirtualInstanceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/databaseInstances",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<SAPDatabaseInstancesListInput>;

// Output Schema
export interface SAPDatabaseInstancesListOutput {
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
export const SAPDatabaseInstancesListOutput =
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
  }) as unknown as Schema.Codec<SAPDatabaseInstancesListOutput>;

// The operation
/**
 * Lists the Database resources associated with a Virtual Instance for SAP solutions resource.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sapVirtualInstanceName - The name of the Virtual Instances for SAP solutions resource
 * @param api-version - The API version to use for this operation.
 */
export const SAPDatabaseInstancesList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SAPDatabaseInstancesListInput,
    outputSchema: SAPDatabaseInstancesListOutput,
  }),
);
// Input Schema
export interface SapDatabaseInstancesStartInput {
  subscriptionId: string;
  resourceGroupName: string;
  sapVirtualInstanceName: string;
  databaseInstanceName: string;
  startVm?: boolean;
}
export const SapDatabaseInstancesStartInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sapVirtualInstanceName: Schema.String.pipe(T.PathParam()),
    databaseInstanceName: Schema.String.pipe(T.PathParam()),
    startVm: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/databaseInstances/{databaseInstanceName}/start",
      apiVersion: "2024-09-01",
    }),
  ) as unknown as Schema.Codec<SapDatabaseInstancesStartInput>;

// Output Schema
export interface SapDatabaseInstancesStartOutput {
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
export const SapDatabaseInstancesStartOutput =
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
  }) as unknown as Schema.Codec<SapDatabaseInstancesStartOutput>;

// The operation
/**
 * Starts the database instance of the SAP system.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sapVirtualInstanceName - The name of the Virtual Instances for SAP solutions resource
 * @param databaseInstanceName - Database resource name string modeled as parameter for auto generation to work correctly.
 */
export const SapDatabaseInstancesStart = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SapDatabaseInstancesStartInput,
    outputSchema: SapDatabaseInstancesStartOutput,
  }),
);
// Input Schema
export interface SAPDatabaseInstancesStartInstanceInput {
  subscriptionId: string;
  resourceGroupName: string;
  sapVirtualInstanceName: string;
  databaseInstanceName: string;
}
export const SAPDatabaseInstancesStartInstanceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sapVirtualInstanceName: Schema.String.pipe(T.PathParam()),
    databaseInstanceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/databaseInstances/{databaseInstanceName}/start",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<SAPDatabaseInstancesStartInstanceInput>;

// Output Schema
export interface SAPDatabaseInstancesStartInstanceOutput {
  id?: string;
  name?: string;
  status: string;
  percentComplete?: number;
  startTime?: string;
  endTime?: string;
  operations?: {
    id?: string;
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
export const SAPDatabaseInstancesStartInstanceOutput =
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
  }) as unknown as Schema.Codec<SAPDatabaseInstancesStartInstanceOutput>;

// The operation
/**
 * Starts the database instance of the SAP system.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sapVirtualInstanceName - The name of the Virtual Instances for SAP solutions resource
 * @param databaseInstanceName - Database resource name string modeled as parameter for auto generation to work correctly.
 * @param api-version - The API version to use for this operation.
 */
export const SAPDatabaseInstancesStartInstance =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SAPDatabaseInstancesStartInstanceInput,
    outputSchema: SAPDatabaseInstancesStartInstanceOutput,
  }));
// Input Schema
export interface SapDatabaseInstancesStopInput {
  subscriptionId: string;
  resourceGroupName: string;
  sapVirtualInstanceName: string;
  databaseInstanceName: string;
  softStopTimeoutSeconds?: number;
  deallocateVm?: boolean;
}
export const SapDatabaseInstancesStopInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sapVirtualInstanceName: Schema.String.pipe(T.PathParam()),
    databaseInstanceName: Schema.String.pipe(T.PathParam()),
    softStopTimeoutSeconds: Schema.optional(Schema.Number),
    deallocateVm: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/databaseInstances/{databaseInstanceName}/stop",
      apiVersion: "2024-09-01",
    }),
  ) as unknown as Schema.Codec<SapDatabaseInstancesStopInput>;

// Output Schema
export interface SapDatabaseInstancesStopOutput {
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
export const SapDatabaseInstancesStopOutput =
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
  }) as unknown as Schema.Codec<SapDatabaseInstancesStopOutput>;

// The operation
/**
 * Stops the database instance of the SAP system.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sapVirtualInstanceName - The name of the Virtual Instances for SAP solutions resource
 * @param databaseInstanceName - Database resource name string modeled as parameter for auto generation to work correctly.
 */
export const SapDatabaseInstancesStop = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SapDatabaseInstancesStopInput,
    outputSchema: SapDatabaseInstancesStopOutput,
  }),
);
// Input Schema
export interface SAPDatabaseInstancesStopInstanceInput {
  subscriptionId: string;
  resourceGroupName: string;
  sapVirtualInstanceName: string;
  databaseInstanceName: string;
  softStopTimeoutSeconds?: number;
}
export const SAPDatabaseInstancesStopInstanceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sapVirtualInstanceName: Schema.String.pipe(T.PathParam()),
    databaseInstanceName: Schema.String.pipe(T.PathParam()),
    softStopTimeoutSeconds: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/databaseInstances/{databaseInstanceName}/stop",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<SAPDatabaseInstancesStopInstanceInput>;

// Output Schema
export interface SAPDatabaseInstancesStopInstanceOutput {
  id?: string;
  name?: string;
  status: string;
  percentComplete?: number;
  startTime?: string;
  endTime?: string;
  operations?: {
    id?: string;
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
export const SAPDatabaseInstancesStopInstanceOutput =
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
  }) as unknown as Schema.Codec<SAPDatabaseInstancesStopInstanceOutput>;

// The operation
/**
 * Stops the database instance of the SAP system.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sapVirtualInstanceName - The name of the Virtual Instances for SAP solutions resource
 * @param databaseInstanceName - Database resource name string modeled as parameter for auto generation to work correctly.
 * @param api-version - The API version to use for this operation.
 */
export const SAPDatabaseInstancesStopInstance =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SAPDatabaseInstancesStopInstanceInput,
    outputSchema: SAPDatabaseInstancesStopInstanceOutput,
  }));
// Input Schema
export interface SAPDatabaseInstancesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  sapVirtualInstanceName: string;
  databaseInstanceName: string;
  tags?: Record<string, string>;
}
export const SAPDatabaseInstancesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sapVirtualInstanceName: Schema.String.pipe(T.PathParam()),
    databaseInstanceName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/databaseInstances/{databaseInstanceName}",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<SAPDatabaseInstancesUpdateInput>;

// Output Schema
export interface SAPDatabaseInstancesUpdateOutput {
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
export const SAPDatabaseInstancesUpdateOutput =
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
  }) as unknown as Schema.Codec<SAPDatabaseInstancesUpdateOutput>;

// The operation
/**
 * Updates the Database resource.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sapVirtualInstanceName - The name of the Virtual Instances for SAP solutions resource
 * @param databaseInstanceName - Database resource name string modeled as parameter for auto generation to work correctly.
 * @param api-version - The API version to use for this operation.
 */
export const SAPDatabaseInstancesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SAPDatabaseInstancesUpdateInput,
    outputSchema: SAPDatabaseInstancesUpdateOutput,
  }),
);
// Input Schema
export interface SAPDiskConfigurationsInput {
  subscriptionId: string;
  location: string;
  appLocation: string;
  environment: "NonProd" | "Prod";
  sapProduct: "ECC" | "S4HANA" | "Other";
  databaseType: "HANA" | "DB2";
  deploymentType: "SingleServer" | "ThreeTier";
  dbVmSku: string;
}
export const SAPDiskConfigurationsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    appLocation: Schema.String,
    environment: Schema.Literals(["NonProd", "Prod"]),
    sapProduct: Schema.Literals(["ECC", "S4HANA", "Other"]),
    databaseType: Schema.Literals(["HANA", "DB2"]),
    deploymentType: Schema.Literals(["SingleServer", "ThreeTier"]),
    dbVmSku: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Workloads/locations/{location}/sapVirtualInstanceMetadata/default/getDiskConfigurations",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<SAPDiskConfigurationsInput>;

// Output Schema
export interface SAPDiskConfigurationsOutput {
  volumeConfigurations?: Record<
    string,
    {
      recommendedConfiguration?: {
        count?: number;
        sizeGB?: number;
        sku?: {
          name?:
            | "Standard_LRS"
            | "Premium_LRS"
            | "StandardSSD_LRS"
            | "UltraSSD_LRS"
            | "Premium_ZRS"
            | "StandardSSD_ZRS"
            | "PremiumV2_LRS";
        };
      };
      supportedConfigurations?: {
        sku?: {
          name?:
            | "Standard_LRS"
            | "Premium_LRS"
            | "StandardSSD_LRS"
            | "UltraSSD_LRS"
            | "Premium_ZRS"
            | "StandardSSD_ZRS"
            | "PremiumV2_LRS";
        };
        sizeGB?: number;
        minimumSupportedDiskCount?: number;
        maximumSupportedDiskCount?: number;
        iopsReadWrite?: number;
        mbpsReadWrite?: number;
        diskTier?: string;
      }[];
    }
  >;
}
export const SAPDiskConfigurationsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    volumeConfigurations: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.Struct({
          recommendedConfiguration: Schema.optional(
            Schema.Struct({
              count: Schema.optional(Schema.Number),
              sizeGB: Schema.optional(Schema.Number),
              sku: Schema.optional(
                Schema.Struct({
                  name: Schema.optional(
                    Schema.Literals([
                      "Standard_LRS",
                      "Premium_LRS",
                      "StandardSSD_LRS",
                      "UltraSSD_LRS",
                      "Premium_ZRS",
                      "StandardSSD_ZRS",
                      "PremiumV2_LRS",
                    ]),
                  ),
                }),
              ),
            }),
          ),
          supportedConfigurations: Schema.optional(
            Schema.Array(
              Schema.Struct({
                sku: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(
                      Schema.Literals([
                        "Standard_LRS",
                        "Premium_LRS",
                        "StandardSSD_LRS",
                        "UltraSSD_LRS",
                        "Premium_ZRS",
                        "StandardSSD_ZRS",
                        "PremiumV2_LRS",
                      ]),
                    ),
                  }),
                ),
                sizeGB: Schema.optional(Schema.Number),
                minimumSupportedDiskCount: Schema.optional(Schema.Number),
                maximumSupportedDiskCount: Schema.optional(Schema.Number),
                iopsReadWrite: Schema.optional(Schema.Number),
                mbpsReadWrite: Schema.optional(Schema.Number),
                diskTier: Schema.optional(Schema.String),
              }),
            ),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<SAPDiskConfigurationsOutput>;

// The operation
/**
 * Get the SAP Disk Configuration Layout prod/non-prod SAP System.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The name of Azure region.
 * @param api-version - The API version to use for this operation.
 */
export const SAPDiskConfigurations = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SAPDiskConfigurationsInput,
    outputSchema: SAPDiskConfigurationsOutput,
  }),
);
// Input Schema
export interface SapLandscapeMonitorCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  monitorName: string;
  properties?: {
    provisioningState?:
      | "Accepted"
      | "Created"
      | "Failed"
      | "Succeeded"
      | "Canceled";
    grouping?: {
      landscape?: { name?: string; topSid?: string[] }[];
      sapApplication?: { name?: string; topSid?: string[] }[];
    };
    topMetricsThresholds?: {
      name?: string;
      green?: number;
      yellow?: number;
      red?: number;
    }[];
  };
}
export const SapLandscapeMonitorCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    monitorName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Accepted",
            "Created",
            "Failed",
            "Succeeded",
            "Canceled",
          ]),
        ),
        grouping: Schema.optional(
          Schema.Struct({
            landscape: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.optional(Schema.String),
                  topSid: Schema.optional(Schema.Array(Schema.String)),
                }),
              ),
            ),
            sapApplication: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.optional(Schema.String),
                  topSid: Schema.optional(Schema.Array(Schema.String)),
                }),
              ),
            ),
          }),
        ),
        topMetricsThresholds: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              green: Schema.optional(Schema.Number),
              yellow: Schema.optional(Schema.Number),
              red: Schema.optional(Schema.Number),
            }),
          ),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/monitors/{monitorName}/sapLandscapeMonitor/default",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<SapLandscapeMonitorCreateInput>;

// Output Schema
export interface SapLandscapeMonitorCreateOutput {
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
export const SapLandscapeMonitorCreateOutput =
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
  }) as unknown as Schema.Codec<SapLandscapeMonitorCreateOutput>;

// The operation
/**
 * Creates a SAP Landscape Monitor Dashboard.
 *
 * Creates a SAP Landscape Monitor Dashboard for the specified subscription, resource group, and resource name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param monitorName - Name of the SAP monitor resource.
 */
export const SapLandscapeMonitorCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SapLandscapeMonitorCreateInput,
    outputSchema: SapLandscapeMonitorCreateOutput,
  }),
);
// Input Schema
export interface SapLandscapeMonitorDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  monitorName: string;
}
export const SapLandscapeMonitorDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    monitorName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/monitors/{monitorName}/sapLandscapeMonitor/default",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<SapLandscapeMonitorDeleteInput>;

// Output Schema
export type SapLandscapeMonitorDeleteOutput = void;
export const SapLandscapeMonitorDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<SapLandscapeMonitorDeleteOutput>;

// The operation
/**
 * Deletes a SAP Landscape Monitor Dashboard.
 *
 * Deletes a SAP Landscape Monitor Dashboard with the specified subscription, resource group, and SAP monitor name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param monitorName - Name of the SAP monitor resource.
 */
export const SapLandscapeMonitorDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SapLandscapeMonitorDeleteInput,
    outputSchema: SapLandscapeMonitorDeleteOutput,
  }),
);
// Input Schema
export interface SapLandscapeMonitorGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  monitorName: string;
}
export const SapLandscapeMonitorGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    monitorName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/monitors/{monitorName}/sapLandscapeMonitor/default",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<SapLandscapeMonitorGetInput>;

// Output Schema
export interface SapLandscapeMonitorGetOutput {
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
export const SapLandscapeMonitorGetOutput =
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
  }) as unknown as Schema.Codec<SapLandscapeMonitorGetOutput>;

// The operation
/**
 * Gets configuration values for Single Pane Of Glass for SAP monitor.
 *
 * Gets configuration values for Single Pane Of Glass for SAP monitor for the specified subscription, resource group, and resource name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param monitorName - Name of the SAP monitor resource.
 */
export const SapLandscapeMonitorGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SapLandscapeMonitorGetInput,
    outputSchema: SapLandscapeMonitorGetOutput,
  }),
);
// Input Schema
export interface SapLandscapeMonitorListInput {
  subscriptionId: string;
  resourceGroupName: string;
  monitorName: string;
}
export const SapLandscapeMonitorListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    monitorName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/monitors/{monitorName}/sapLandscapeMonitor",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<SapLandscapeMonitorListInput>;

// Output Schema
export interface SapLandscapeMonitorListOutput {
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
export const SapLandscapeMonitorListOutput =
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
  }) as unknown as Schema.Codec<SapLandscapeMonitorListOutput>;

// The operation
/**
 * Gets configuration values for Single Pane Of Glass for SAP monitor.
 *
 * Gets configuration values for Single Pane Of Glass for SAP monitor for the specified subscription, resource group, and resource name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param monitorName - Name of the SAP monitor resource.
 */
export const SapLandscapeMonitorList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SapLandscapeMonitorListInput,
    outputSchema: SapLandscapeMonitorListOutput,
  }),
);
// Input Schema
export interface SapLandscapeMonitorUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  monitorName: string;
  properties?: {
    provisioningState?:
      | "Accepted"
      | "Created"
      | "Failed"
      | "Succeeded"
      | "Canceled";
    grouping?: {
      landscape?: { name?: string; topSid?: string[] }[];
      sapApplication?: { name?: string; topSid?: string[] }[];
    };
    topMetricsThresholds?: {
      name?: string;
      green?: number;
      yellow?: number;
      red?: number;
    }[];
  };
}
export const SapLandscapeMonitorUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    monitorName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Accepted",
            "Created",
            "Failed",
            "Succeeded",
            "Canceled",
          ]),
        ),
        grouping: Schema.optional(
          Schema.Struct({
            landscape: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.optional(Schema.String),
                  topSid: Schema.optional(Schema.Array(Schema.String)),
                }),
              ),
            ),
            sapApplication: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.optional(Schema.String),
                  topSid: Schema.optional(Schema.Array(Schema.String)),
                }),
              ),
            ),
          }),
        ),
        topMetricsThresholds: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              green: Schema.optional(Schema.Number),
              yellow: Schema.optional(Schema.Number),
              red: Schema.optional(Schema.Number),
            }),
          ),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/monitors/{monitorName}/sapLandscapeMonitor/default",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<SapLandscapeMonitorUpdateInput>;

// Output Schema
export interface SapLandscapeMonitorUpdateOutput {
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
export const SapLandscapeMonitorUpdateOutput =
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
  }) as unknown as Schema.Codec<SapLandscapeMonitorUpdateOutput>;

// The operation
/**
 * Patches the SAP Landscape Monitor Dashboard.
 *
 * Patches the SAP Landscape Monitor Dashboard for the specified subscription, resource group, and SAP monitor name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param monitorName - Name of the SAP monitor resource.
 */
export const SapLandscapeMonitorUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SapLandscapeMonitorUpdateInput,
    outputSchema: SapLandscapeMonitorUpdateOutput,
  }),
);
// Input Schema
export interface SAPSizingRecommendationsInput {
  subscriptionId: string;
  location: string;
  appLocation: string;
  environment: "NonProd" | "Prod";
  sapProduct: "ECC" | "S4HANA" | "Other";
  deploymentType: "SingleServer" | "ThreeTier";
  saps: number;
  dbMemory: number;
  databaseType: "HANA" | "DB2";
  dbScaleMethod?: "ScaleUp";
  highAvailabilityType?: "AvailabilitySet" | "AvailabilityZone";
}
export const SAPSizingRecommendationsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    appLocation: Schema.String,
    environment: Schema.Literals(["NonProd", "Prod"]),
    sapProduct: Schema.Literals(["ECC", "S4HANA", "Other"]),
    deploymentType: Schema.Literals(["SingleServer", "ThreeTier"]),
    saps: Schema.Number,
    dbMemory: Schema.Number,
    databaseType: Schema.Literals(["HANA", "DB2"]),
    dbScaleMethod: Schema.optional(Schema.Literals(["ScaleUp"])),
    highAvailabilityType: Schema.optional(
      Schema.Literals(["AvailabilitySet", "AvailabilityZone"]),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Workloads/locations/{location}/sapVirtualInstanceMetadata/default/getSizingRecommendations",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<SAPSizingRecommendationsInput>;

// Output Schema
export interface SAPSizingRecommendationsOutput {
  deploymentType: "SingleServer" | "ThreeTier";
}
export const SAPSizingRecommendationsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deploymentType: Schema.Literals(["SingleServer", "ThreeTier"]),
  }) as unknown as Schema.Codec<SAPSizingRecommendationsOutput>;

// The operation
/**
 * Get SAP sizing recommendations by providing input SAPS for application tier and memory required for database tier
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The name of Azure region.
 * @param api-version - The API version to use for this operation.
 */
export const SAPSizingRecommendations = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SAPSizingRecommendationsInput,
    outputSchema: SAPSizingRecommendationsOutput,
  }),
);
// Input Schema
export interface SAPSupportedSkuInput {
  subscriptionId: string;
  location: string;
  appLocation: string;
  environment: "NonProd" | "Prod";
  sapProduct: "ECC" | "S4HANA" | "Other";
  deploymentType: "SingleServer" | "ThreeTier";
  databaseType: "HANA" | "DB2";
  highAvailabilityType?: "AvailabilitySet" | "AvailabilityZone";
}
export const SAPSupportedSkuInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  location: Schema.String.pipe(T.PathParam()),
  appLocation: Schema.String,
  environment: Schema.Literals(["NonProd", "Prod"]),
  sapProduct: Schema.Literals(["ECC", "S4HANA", "Other"]),
  deploymentType: Schema.Literals(["SingleServer", "ThreeTier"]),
  databaseType: Schema.Literals(["HANA", "DB2"]),
  highAvailabilityType: Schema.optional(
    Schema.Literals(["AvailabilitySet", "AvailabilityZone"]),
  ),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.Workloads/locations/{location}/sapVirtualInstanceMetadata/default/getSapSupportedSku",
    apiVersion: "2023-04-01",
  }),
) as unknown as Schema.Codec<SAPSupportedSkuInput>;

// Output Schema
export interface SAPSupportedSkuOutput {
  supportedSkus?: {
    vmSku?: string;
    isAppServerCertified?: boolean;
    isDatabaseCertified?: boolean;
  }[];
}
export const SAPSupportedSkuOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  supportedSkus: Schema.optional(
    Schema.Array(
      Schema.Struct({
        vmSku: Schema.optional(Schema.String),
        isAppServerCertified: Schema.optional(Schema.Boolean),
        isDatabaseCertified: Schema.optional(Schema.Boolean),
      }),
    ),
  ),
}) as unknown as Schema.Codec<SAPSupportedSkuOutput>;

// The operation
/**
 * Get a list of SAP supported SKUs for ASCS, Application and Database tier.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The name of Azure region.
 * @param api-version - The API version to use for this operation.
 */
export const SAPSupportedSku = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SAPSupportedSkuInput,
  outputSchema: SAPSupportedSkuOutput,
}));
// Input Schema
export interface SAPVirtualInstancesCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  sapVirtualInstanceName: string;
  identity?: {
    type: "None" | "UserAssigned";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    > | null;
  };
  properties: {
    environment: "NonProd" | "Prod";
    sapProduct: "ECC" | "S4HANA" | "Other";
    configuration: {
      configurationType: "Deployment" | "Discovery" | "DeploymentWithOSConfig";
    };
    managedResourceGroupConfiguration?: { name?: string };
    status?:
      | "Starting"
      | "Running"
      | "Stopping"
      | "Offline"
      | "PartiallyRunning"
      | "Unavailable"
      | "SoftShutdown";
    health?: "Unknown" | "Healthy" | "Unhealthy" | "Degraded";
    state?:
      | "InfrastructureDeploymentPending"
      | "InfrastructureDeploymentInProgress"
      | "InfrastructureDeploymentFailed"
      | "SoftwareInstallationPending"
      | "SoftwareInstallationInProgress"
      | "SoftwareInstallationFailed"
      | "SoftwareDetectionInProgress"
      | "SoftwareDetectionFailed"
      | "DiscoveryPending"
      | "DiscoveryInProgress"
      | "DiscoveryFailed"
      | "RegistrationComplete";
    provisioningState?:
      | "Succeeded"
      | "Updating"
      | "Creating"
      | "Failed"
      | "Deleting";
    errors?: {
      properties?: { code?: string; message?: string; details?: unknown[] };
    };
  };
  tags?: Record<string, string>;
  location: string;
}
export const SAPVirtualInstancesCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sapVirtualInstanceName: Schema.String.pipe(T.PathParam()),
    identity: Schema.optional(
      Schema.Struct({
        type: Schema.Literals(["None", "UserAssigned"]),
        userAssignedIdentities: Schema.optional(
          Schema.NullOr(
            Schema.Record(
              Schema.String,
              Schema.Struct({
                principalId: Schema.optional(Schema.String),
                clientId: Schema.optional(Schema.String),
              }),
            ),
          ),
        ),
      }),
    ),
    properties: Schema.Struct({
      environment: Schema.Literals(["NonProd", "Prod"]),
      sapProduct: Schema.Literals(["ECC", "S4HANA", "Other"]),
      configuration: Schema.Struct({
        configurationType: Schema.Literals([
          "Deployment",
          "Discovery",
          "DeploymentWithOSConfig",
        ]),
      }),
      managedResourceGroupConfiguration: Schema.optional(
        Schema.Struct({
          name: Schema.optional(Schema.String),
        }),
      ),
      status: Schema.optional(
        Schema.Literals([
          "Starting",
          "Running",
          "Stopping",
          "Offline",
          "PartiallyRunning",
          "Unavailable",
          "SoftShutdown",
        ]),
      ),
      health: Schema.optional(
        Schema.Literals(["Unknown", "Healthy", "Unhealthy", "Degraded"]),
      ),
      state: Schema.optional(
        Schema.Literals([
          "InfrastructureDeploymentPending",
          "InfrastructureDeploymentInProgress",
          "InfrastructureDeploymentFailed",
          "SoftwareInstallationPending",
          "SoftwareInstallationInProgress",
          "SoftwareInstallationFailed",
          "SoftwareDetectionInProgress",
          "SoftwareDetectionFailed",
          "DiscoveryPending",
          "DiscoveryInProgress",
          "DiscoveryFailed",
          "RegistrationComplete",
        ]),
      ),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Succeeded",
          "Updating",
          "Creating",
          "Failed",
          "Deleting",
        ]),
      ),
      errors: Schema.optional(
        Schema.Struct({
          properties: Schema.optional(
            Schema.Struct({
              code: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              details: Schema.optional(Schema.Array(Schema.Unknown)),
            }),
          ),
        }),
      ),
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<SAPVirtualInstancesCreateInput>;

// Output Schema
export interface SAPVirtualInstancesCreateOutput {
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
export const SAPVirtualInstancesCreateOutput =
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
  }) as unknown as Schema.Codec<SAPVirtualInstancesCreateOutput>;

// The operation
/**
 * Creates a Virtual Instance for SAP solutions (VIS) resource
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sapVirtualInstanceName - The name of the Virtual Instances for SAP solutions resource
 * @param api-version - The API version to use for this operation.
 */
export const SAPVirtualInstancesCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SAPVirtualInstancesCreateInput,
    outputSchema: SAPVirtualInstancesCreateOutput,
  }),
);
// Input Schema
export interface SAPVirtualInstancesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  sapVirtualInstanceName: string;
}
export const SAPVirtualInstancesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sapVirtualInstanceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<SAPVirtualInstancesDeleteInput>;

// Output Schema
export interface SAPVirtualInstancesDeleteOutput {
  id?: string;
  name?: string;
  status: string;
  percentComplete?: number;
  startTime?: string;
  endTime?: string;
  operations?: {
    id?: string;
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
export const SAPVirtualInstancesDeleteOutput =
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
  }) as unknown as Schema.Codec<SAPVirtualInstancesDeleteOutput>;

// The operation
/**
 * Deletes a Virtual Instance for SAP solutions resource and its child resources, that is the associated Central Services Instance, Application Server Instances and Database Instance.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sapVirtualInstanceName - The name of the Virtual Instances for SAP solutions resource
 * @param api-version - The API version to use for this operation.
 */
export const SAPVirtualInstancesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SAPVirtualInstancesDeleteInput,
    outputSchema: SAPVirtualInstancesDeleteOutput,
  }),
);
// Input Schema
export interface SAPVirtualInstancesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  sapVirtualInstanceName: string;
}
export const SAPVirtualInstancesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sapVirtualInstanceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<SAPVirtualInstancesGetInput>;

// Output Schema
export interface SAPVirtualInstancesGetOutput {
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
export const SAPVirtualInstancesGetOutput =
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
  }) as unknown as Schema.Codec<SAPVirtualInstancesGetOutput>;

// The operation
/**
 * Gets a Virtual Instance for SAP solutions resource
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sapVirtualInstanceName - The name of the Virtual Instances for SAP solutions resource
 * @param api-version - The API version to use for this operation.
 */
export const SAPVirtualInstancesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SAPVirtualInstancesGetInput,
    outputSchema: SAPVirtualInstancesGetOutput,
  }),
);
// Input Schema
export interface SapVirtualInstancesInvokeAvailabilityZoneDetailsInput {
  subscriptionId: string;
  location: string;
  appLocation: string;
  sapProduct: "ECC" | "S4HANA" | "Other";
  databaseType: "HANA" | "DB2";
}
export const SapVirtualInstancesInvokeAvailabilityZoneDetailsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    appLocation: Schema.String,
    sapProduct: Schema.Literals(["ECC", "S4HANA", "Other"]),
    databaseType: Schema.Literals(["HANA", "DB2"]),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Workloads/locations/{location}/sapVirtualInstanceMetadata/default/getAvailabilityZoneDetails",
      apiVersion: "2024-09-01",
    }),
  ) as unknown as Schema.Codec<SapVirtualInstancesInvokeAvailabilityZoneDetailsInput>;

// Output Schema
export interface SapVirtualInstancesInvokeAvailabilityZoneDetailsOutput {
  availabilityZonePairs?: { zoneA?: number; zoneB?: number }[];
}
export const SapVirtualInstancesInvokeAvailabilityZoneDetailsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    availabilityZonePairs: Schema.optional(
      Schema.Array(
        Schema.Struct({
          zoneA: Schema.optional(Schema.Number),
          zoneB: Schema.optional(Schema.Number),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<SapVirtualInstancesInvokeAvailabilityZoneDetailsOutput>;

// The operation
/**
 * Get the recommended SAP Availability Zone Pair Details for your region.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 */
export const SapVirtualInstancesInvokeAvailabilityZoneDetails =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SapVirtualInstancesInvokeAvailabilityZoneDetailsInput,
    outputSchema: SapVirtualInstancesInvokeAvailabilityZoneDetailsOutput,
  }));
// Input Schema
export interface SapVirtualInstancesInvokeDiskConfigurationsInput {
  subscriptionId: string;
  location: string;
  appLocation: string;
  environment: "NonProd" | "Prod";
  sapProduct: "ECC" | "S4HANA" | "Other";
  databaseType: "HANA" | "DB2";
  deploymentType: "SingleServer" | "ThreeTier";
  dbVmSku: string;
}
export const SapVirtualInstancesInvokeDiskConfigurationsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    appLocation: Schema.String,
    environment: Schema.Literals(["NonProd", "Prod"]),
    sapProduct: Schema.Literals(["ECC", "S4HANA", "Other"]),
    databaseType: Schema.Literals(["HANA", "DB2"]),
    deploymentType: Schema.Literals(["SingleServer", "ThreeTier"]),
    dbVmSku: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Workloads/locations/{location}/sapVirtualInstanceMetadata/default/getDiskConfigurations",
      apiVersion: "2024-09-01",
    }),
  ) as unknown as Schema.Codec<SapVirtualInstancesInvokeDiskConfigurationsInput>;

// Output Schema
export interface SapVirtualInstancesInvokeDiskConfigurationsOutput {
  volumeConfigurations?: Record<
    string,
    {
      recommendedConfiguration?: {
        count?: number;
        sizeGB?: number;
        sku?: {
          name?:
            | "Standard_LRS"
            | "Premium_LRS"
            | "StandardSSD_LRS"
            | "UltraSSD_LRS"
            | "Premium_ZRS"
            | "StandardSSD_ZRS"
            | "PremiumV2_LRS";
        };
      };
      supportedConfigurations?: {
        sku?: {
          name?:
            | "Standard_LRS"
            | "Premium_LRS"
            | "StandardSSD_LRS"
            | "UltraSSD_LRS"
            | "Premium_ZRS"
            | "StandardSSD_ZRS"
            | "PremiumV2_LRS";
        };
        sizeGB?: number;
        minimumSupportedDiskCount?: number;
        maximumSupportedDiskCount?: number;
        iopsReadWrite?: number;
        mbpsReadWrite?: number;
        diskTier?: string;
      }[];
    }
  >;
}
export const SapVirtualInstancesInvokeDiskConfigurationsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    volumeConfigurations: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.Struct({
          recommendedConfiguration: Schema.optional(
            Schema.Struct({
              count: Schema.optional(Schema.Number),
              sizeGB: Schema.optional(Schema.Number),
              sku: Schema.optional(
                Schema.Struct({
                  name: Schema.optional(
                    Schema.Literals([
                      "Standard_LRS",
                      "Premium_LRS",
                      "StandardSSD_LRS",
                      "UltraSSD_LRS",
                      "Premium_ZRS",
                      "StandardSSD_ZRS",
                      "PremiumV2_LRS",
                    ]),
                  ),
                }),
              ),
            }),
          ),
          supportedConfigurations: Schema.optional(
            Schema.Array(
              Schema.Struct({
                sku: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(
                      Schema.Literals([
                        "Standard_LRS",
                        "Premium_LRS",
                        "StandardSSD_LRS",
                        "UltraSSD_LRS",
                        "Premium_ZRS",
                        "StandardSSD_ZRS",
                        "PremiumV2_LRS",
                      ]),
                    ),
                  }),
                ),
                sizeGB: Schema.optional(Schema.Number),
                minimumSupportedDiskCount: Schema.optional(Schema.Number),
                maximumSupportedDiskCount: Schema.optional(Schema.Number),
                iopsReadWrite: Schema.optional(Schema.Number),
                mbpsReadWrite: Schema.optional(Schema.Number),
                diskTier: Schema.optional(Schema.String),
              }),
            ),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<SapVirtualInstancesInvokeDiskConfigurationsOutput>;

// The operation
/**
 * Get the SAP Disk Configuration Layout prod/non-prod SAP System.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 */
export const SapVirtualInstancesInvokeDiskConfigurations =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SapVirtualInstancesInvokeDiskConfigurationsInput,
    outputSchema: SapVirtualInstancesInvokeDiskConfigurationsOutput,
  }));
// Input Schema
export interface SapVirtualInstancesInvokeSapSupportedSkuInput {
  subscriptionId: string;
  location: string;
  appLocation: string;
  environment: "NonProd" | "Prod";
  sapProduct: "ECC" | "S4HANA" | "Other";
  deploymentType: "SingleServer" | "ThreeTier";
  databaseType: "HANA" | "DB2";
  highAvailabilityType?: "AvailabilitySet" | "AvailabilityZone";
}
export const SapVirtualInstancesInvokeSapSupportedSkuInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    appLocation: Schema.String,
    environment: Schema.Literals(["NonProd", "Prod"]),
    sapProduct: Schema.Literals(["ECC", "S4HANA", "Other"]),
    deploymentType: Schema.Literals(["SingleServer", "ThreeTier"]),
    databaseType: Schema.Literals(["HANA", "DB2"]),
    highAvailabilityType: Schema.optional(
      Schema.Literals(["AvailabilitySet", "AvailabilityZone"]),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Workloads/locations/{location}/sapVirtualInstanceMetadata/default/getSapSupportedSku",
      apiVersion: "2024-09-01",
    }),
  ) as unknown as Schema.Codec<SapVirtualInstancesInvokeSapSupportedSkuInput>;

// Output Schema
export interface SapVirtualInstancesInvokeSapSupportedSkuOutput {
  supportedSkus?: {
    vmSku?: string;
    isAppServerCertified?: boolean;
    isDatabaseCertified?: boolean;
  }[];
}
export const SapVirtualInstancesInvokeSapSupportedSkuOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    supportedSkus: Schema.optional(
      Schema.Array(
        Schema.Struct({
          vmSku: Schema.optional(Schema.String),
          isAppServerCertified: Schema.optional(Schema.Boolean),
          isDatabaseCertified: Schema.optional(Schema.Boolean),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<SapVirtualInstancesInvokeSapSupportedSkuOutput>;

// The operation
/**
 * Get a list of SAP supported SKUs for ASCS, Application and Database tier.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 */
export const SapVirtualInstancesInvokeSapSupportedSku =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SapVirtualInstancesInvokeSapSupportedSkuInput,
    outputSchema: SapVirtualInstancesInvokeSapSupportedSkuOutput,
  }));
// Input Schema
export interface SapVirtualInstancesInvokeSizingRecommendationsInput {
  subscriptionId: string;
  location: string;
  appLocation: string;
  environment: "NonProd" | "Prod";
  sapProduct: "ECC" | "S4HANA" | "Other";
  deploymentType: "SingleServer" | "ThreeTier";
  saps: number;
  dbMemory: number;
  databaseType: "HANA" | "DB2";
  dbScaleMethod?: "ScaleUp";
  highAvailabilityType?: "AvailabilitySet" | "AvailabilityZone";
}
export const SapVirtualInstancesInvokeSizingRecommendationsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    appLocation: Schema.String,
    environment: Schema.Literals(["NonProd", "Prod"]),
    sapProduct: Schema.Literals(["ECC", "S4HANA", "Other"]),
    deploymentType: Schema.Literals(["SingleServer", "ThreeTier"]),
    saps: Schema.Number,
    dbMemory: Schema.Number,
    databaseType: Schema.Literals(["HANA", "DB2"]),
    dbScaleMethod: Schema.optional(Schema.Literals(["ScaleUp"])),
    highAvailabilityType: Schema.optional(
      Schema.Literals(["AvailabilitySet", "AvailabilityZone"]),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Workloads/locations/{location}/sapVirtualInstanceMetadata/default/getSizingRecommendations",
      apiVersion: "2024-09-01",
    }),
  ) as unknown as Schema.Codec<SapVirtualInstancesInvokeSizingRecommendationsInput>;

// Output Schema
export interface SapVirtualInstancesInvokeSizingRecommendationsOutput {
  deploymentType: "SingleServer" | "ThreeTier";
}
export const SapVirtualInstancesInvokeSizingRecommendationsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deploymentType: Schema.Literals(["SingleServer", "ThreeTier"]),
  }) as unknown as Schema.Codec<SapVirtualInstancesInvokeSizingRecommendationsOutput>;

// The operation
/**
 * Gets the sizing recommendations.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 */
export const SapVirtualInstancesInvokeSizingRecommendations =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SapVirtualInstancesInvokeSizingRecommendationsInput,
    outputSchema: SapVirtualInstancesInvokeSizingRecommendationsOutput,
  }));
// Input Schema
export interface SAPVirtualInstancesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const SAPVirtualInstancesListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<SAPVirtualInstancesListByResourceGroupInput>;

// Output Schema
export interface SAPVirtualInstancesListByResourceGroupOutput {
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
export const SAPVirtualInstancesListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<SAPVirtualInstancesListByResourceGroupOutput>;

// The operation
/**
 * Gets all Virtual Instances for SAP solutions resources in a Resource Group.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const SAPVirtualInstancesListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SAPVirtualInstancesListByResourceGroupInput,
    outputSchema: SAPVirtualInstancesListByResourceGroupOutput,
  }));
// Input Schema
export interface SAPVirtualInstancesListBySubscriptionInput {
  subscriptionId: string;
}
export const SAPVirtualInstancesListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Workloads/sapVirtualInstances",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<SAPVirtualInstancesListBySubscriptionInput>;

// Output Schema
export interface SAPVirtualInstancesListBySubscriptionOutput {
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
export const SAPVirtualInstancesListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<SAPVirtualInstancesListBySubscriptionOutput>;

// The operation
/**
 * Gets all Virtual Instances for SAP solutions resources in a Subscription.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param api-version - The API version to use for this operation.
 */
export const SAPVirtualInstancesListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SAPVirtualInstancesListBySubscriptionInput,
    outputSchema: SAPVirtualInstancesListBySubscriptionOutput,
  }));
// Input Schema
export interface SAPVirtualInstancesStartInput {
  subscriptionId: string;
  resourceGroupName: string;
  sapVirtualInstanceName: string;
}
export const SAPVirtualInstancesStartInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sapVirtualInstanceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/start",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<SAPVirtualInstancesStartInput>;

// Output Schema
export interface SAPVirtualInstancesStartOutput {
  id?: string;
  name?: string;
  status: string;
  percentComplete?: number;
  startTime?: string;
  endTime?: string;
  operations?: {
    id?: string;
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
export const SAPVirtualInstancesStartOutput =
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
  }) as unknown as Schema.Codec<SAPVirtualInstancesStartOutput>;

// The operation
/**
 * Starts the SAP application, that is the Central Services instance and Application server instances.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sapVirtualInstanceName - The name of the Virtual Instances for SAP solutions resource
 * @param api-version - The API version to use for this operation.
 */
export const SAPVirtualInstancesStart = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SAPVirtualInstancesStartInput,
    outputSchema: SAPVirtualInstancesStartOutput,
  }),
);
// Input Schema
export interface SAPVirtualInstancesStopInput {
  subscriptionId: string;
  resourceGroupName: string;
  sapVirtualInstanceName: string;
  softStopTimeoutSeconds?: number;
}
export const SAPVirtualInstancesStopInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sapVirtualInstanceName: Schema.String.pipe(T.PathParam()),
    softStopTimeoutSeconds: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/stop",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<SAPVirtualInstancesStopInput>;

// Output Schema
export interface SAPVirtualInstancesStopOutput {
  id?: string;
  name?: string;
  status: string;
  percentComplete?: number;
  startTime?: string;
  endTime?: string;
  operations?: {
    id?: string;
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
export const SAPVirtualInstancesStopOutput =
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
  }) as unknown as Schema.Codec<SAPVirtualInstancesStopOutput>;

// The operation
/**
 * Stops the SAP Application, that is the Application server instances and Central Services instance.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sapVirtualInstanceName - The name of the Virtual Instances for SAP solutions resource
 * @param api-version - The API version to use for this operation.
 */
export const SAPVirtualInstancesStop = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SAPVirtualInstancesStopInput,
    outputSchema: SAPVirtualInstancesStopOutput,
  }),
);
// Input Schema
export interface SAPVirtualInstancesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  sapVirtualInstanceName: string;
  tags?: Record<string, string>;
  identity?: {
    type: "None" | "UserAssigned";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    > | null;
  };
}
export const SAPVirtualInstancesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sapVirtualInstanceName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    identity: Schema.optional(
      Schema.Struct({
        type: Schema.Literals(["None", "UserAssigned"]),
        userAssignedIdentities: Schema.optional(
          Schema.NullOr(
            Schema.Record(
              Schema.String,
              Schema.Struct({
                principalId: Schema.optional(Schema.String),
                clientId: Schema.optional(Schema.String),
              }),
            ),
          ),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<SAPVirtualInstancesUpdateInput>;

// Output Schema
export interface SAPVirtualInstancesUpdateOutput {
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
export const SAPVirtualInstancesUpdateOutput =
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
  }) as unknown as Schema.Codec<SAPVirtualInstancesUpdateOutput>;

// The operation
/**
 * Updates a Virtual Instance for SAP solutions resource
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param sapVirtualInstanceName - The name of the Virtual Instances for SAP solutions resource
 * @param api-version - The API version to use for this operation.
 */
export const SAPVirtualInstancesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SAPVirtualInstancesUpdateInput,
    outputSchema: SAPVirtualInstancesUpdateOutput,
  }),
);
