/**
 * Azure Automanage API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface BestPracticesGetInput {
  bestPracticeName: string;
}
export const BestPracticesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  bestPracticeName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Automanage/bestPractices/{bestPracticeName}",
    apiVersion: "2022-05-04",
  }),
) as unknown as Schema.Codec<BestPracticesGetInput>;

// Output Schema
export interface BestPracticesGetOutput {
  id?: string;
  type?: string;
  name?: string;
  properties?: { configuration?: unknown };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const BestPracticesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        configuration: Schema.optional(Schema.Unknown),
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
  },
) as unknown as Schema.Codec<BestPracticesGetOutput>;

// The operation
/**
 * Get information about a Automanage best practice
 *
 * @param bestPracticeName - The Automanage best practice name.
 * @param api-version - The API version to use for this operation.
 */
export const BestPracticesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BestPracticesGetInput,
  outputSchema: BestPracticesGetOutput,
}));
// Input Schema
export interface BestPracticesListByTenantInput {}
export const BestPracticesListByTenantInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Automanage/bestPractices",
      apiVersion: "2022-05-04",
    }),
  ) as unknown as Schema.Codec<BestPracticesListByTenantInput>;

// Output Schema
export interface BestPracticesListByTenantOutput {
  value?: {
    id?: string;
    type?: string;
    name?: string;
    properties?: { configuration?: unknown };
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
export const BestPracticesListByTenantOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          properties: Schema.optional(
            Schema.Struct({
              configuration: Schema.optional(Schema.Unknown),
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
        }),
      ),
    ),
  }) as unknown as Schema.Codec<BestPracticesListByTenantOutput>;

// The operation
/**
 * Retrieve a list of Automanage best practices
 *
 * @param api-version - The API version to use for this operation.
 */
export const BestPracticesListByTenant = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BestPracticesListByTenantInput,
    outputSchema: BestPracticesListByTenantOutput,
  }),
);
// Input Schema
export interface BestPracticesVersionsGetInput {
  bestPracticeName: string;
  versionName: string;
}
export const BestPracticesVersionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bestPracticeName: Schema.String.pipe(T.PathParam()),
    versionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Automanage/bestPractices/{bestPracticeName}/versions/{versionName}",
      apiVersion: "2022-05-04",
    }),
  ) as unknown as Schema.Codec<BestPracticesVersionsGetInput>;

// Output Schema
export interface BestPracticesVersionsGetOutput {
  id?: string;
  type?: string;
  name?: string;
  properties?: { configuration?: unknown };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const BestPracticesVersionsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        configuration: Schema.optional(Schema.Unknown),
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
  }) as unknown as Schema.Codec<BestPracticesVersionsGetOutput>;

// The operation
/**
 * Get information about a Automanage best practice version
 *
 * @param bestPracticeName - The Automanage best practice name.
 * @param versionName - The Automanage best practice version name.
 * @param api-version - The API version to use for this operation.
 */
export const BestPracticesVersionsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BestPracticesVersionsGetInput,
    outputSchema: BestPracticesVersionsGetOutput,
  }),
);
// Input Schema
export interface BestPracticesVersionsListByTenantInput {
  bestPracticeName: string;
}
export const BestPracticesVersionsListByTenantInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bestPracticeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Automanage/bestPractices/{bestPracticeName}/versions",
      apiVersion: "2022-05-04",
    }),
  ) as unknown as Schema.Codec<BestPracticesVersionsListByTenantInput>;

// Output Schema
export interface BestPracticesVersionsListByTenantOutput {
  value?: {
    id?: string;
    type?: string;
    name?: string;
    properties?: { configuration?: unknown };
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
export const BestPracticesVersionsListByTenantOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          properties: Schema.optional(
            Schema.Struct({
              configuration: Schema.optional(Schema.Unknown),
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
        }),
      ),
    ),
  }) as unknown as Schema.Codec<BestPracticesVersionsListByTenantOutput>;

// The operation
/**
 * Retrieve a list of Automanage best practices versions
 *
 * @param bestPracticeName - The Automanage best practice name.
 * @param api-version - The API version to use for this operation.
 */
export const BestPracticesVersionsListByTenant =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BestPracticesVersionsListByTenantInput,
    outputSchema: BestPracticesVersionsListByTenantOutput,
  }));
// Input Schema
export interface ConfigurationProfileAssignmentsCreateOrUpdateInput {
  configurationProfileAssignmentName: string;
  subscriptionId: string;
  resourceGroupName: string;
  vmName: string;
  properties?: {
    configurationProfile?: string;
    targetId?: string;
    status?: string;
  };
  managedBy?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const ConfigurationProfileAssignmentsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    configurationProfileAssignmentName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        configurationProfile: Schema.optional(Schema.String),
        targetId: Schema.optional(Schema.String),
        status: Schema.optional(Schema.String),
      }),
    ),
    managedBy: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/providers/Microsoft.Automanage/configurationProfileAssignments/{configurationProfileAssignmentName}",
      apiVersion: "2022-05-04",
    }),
  ) as unknown as Schema.Codec<ConfigurationProfileAssignmentsCreateOrUpdateInput>;

// Output Schema
export interface ConfigurationProfileAssignmentsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const ConfigurationProfileAssignmentsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ConfigurationProfileAssignmentsCreateOrUpdateOutput>;

// The operation
/**
 * Creates an association between a VM and Automanage configuration profile
 *
 * @param configurationProfileAssignmentName - Name of the configuration profile assignment. Only default is supported.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmName - The name of the virtual machine.
 * @param api-version - The API version to use for this operation.
 */
export const ConfigurationProfileAssignmentsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigurationProfileAssignmentsCreateOrUpdateInput,
    outputSchema: ConfigurationProfileAssignmentsCreateOrUpdateOutput,
  }));
// Input Schema
export interface ConfigurationProfileAssignmentsDeleteInput {
  resourceGroupName: string;
  configurationProfileAssignmentName: string;
  subscriptionId: string;
  vmName: string;
}
export const ConfigurationProfileAssignmentsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    configurationProfileAssignmentName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    vmName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/providers/Microsoft.Automanage/configurationProfileAssignments/{configurationProfileAssignmentName}",
      apiVersion: "2022-05-04",
    }),
  ) as unknown as Schema.Codec<ConfigurationProfileAssignmentsDeleteInput>;

// Output Schema
export type ConfigurationProfileAssignmentsDeleteOutput = void;
export const ConfigurationProfileAssignmentsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ConfigurationProfileAssignmentsDeleteOutput>;

// The operation
/**
 * Delete a configuration profile assignment
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param configurationProfileAssignmentName - Name of the configuration profile assignment
 * @param subscriptionId - The ID of the target subscription.
 * @param vmName - The name of the virtual machine.
 * @param api-version - The API version to use for this operation.
 */
export const ConfigurationProfileAssignmentsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigurationProfileAssignmentsDeleteInput,
    outputSchema: ConfigurationProfileAssignmentsDeleteOutput,
  }));
// Input Schema
export interface ConfigurationProfileAssignmentsGetInput {
  resourceGroupName: string;
  configurationProfileAssignmentName: string;
  subscriptionId: string;
  vmName: string;
}
export const ConfigurationProfileAssignmentsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    configurationProfileAssignmentName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    vmName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/providers/Microsoft.Automanage/configurationProfileAssignments/{configurationProfileAssignmentName}",
      apiVersion: "2022-05-04",
    }),
  ) as unknown as Schema.Codec<ConfigurationProfileAssignmentsGetInput>;

// Output Schema
export interface ConfigurationProfileAssignmentsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const ConfigurationProfileAssignmentsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ConfigurationProfileAssignmentsGetOutput>;

// The operation
/**
 * Get information about a configuration profile assignment
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param configurationProfileAssignmentName - The configuration profile assignment name.
 * @param subscriptionId - The ID of the target subscription.
 * @param vmName - The name of the virtual machine.
 * @param api-version - The API version to use for this operation.
 */
export const ConfigurationProfileAssignmentsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigurationProfileAssignmentsGetInput,
    outputSchema: ConfigurationProfileAssignmentsGetOutput,
  }));
// Input Schema
export interface ConfigurationProfileAssignmentsListInput {
  resourceGroupName: string;
  subscriptionId: string;
}
export const ConfigurationProfileAssignmentsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automanage/configurationProfileAssignments",
      apiVersion: "2022-05-04",
    }),
  ) as unknown as Schema.Codec<ConfigurationProfileAssignmentsListInput>;

// Output Schema
export interface ConfigurationProfileAssignmentsListOutput {
  value?: { id?: string; name?: string; type?: string }[];
}
export const ConfigurationProfileAssignmentsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ConfigurationProfileAssignmentsListOutput>;

// The operation
/**
 * Get list of configuration profile assignments
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param subscriptionId - The ID of the target subscription.
 * @param api-version - The API version to use for this operation.
 */
export const ConfigurationProfileAssignmentsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigurationProfileAssignmentsListInput,
    outputSchema: ConfigurationProfileAssignmentsListOutput,
  }));
// Input Schema
export interface ConfigurationProfileAssignmentsListByClusterNameInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
}
export const ConfigurationProfileAssignmentsListByClusterNameInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHci/clusters/{clusterName}/providers/Microsoft.Automanage/configurationProfileAssignments",
      apiVersion: "2022-05-04",
    }),
  ) as unknown as Schema.Codec<ConfigurationProfileAssignmentsListByClusterNameInput>;

// Output Schema
export interface ConfigurationProfileAssignmentsListByClusterNameOutput {
  value?: { id?: string; name?: string; type?: string }[];
}
export const ConfigurationProfileAssignmentsListByClusterNameOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ConfigurationProfileAssignmentsListByClusterNameOutput>;

// The operation
/**
 * Get list of configuration profile assignments
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Arc machine.
 * @param api-version - The API version to use for this operation.
 */
export const ConfigurationProfileAssignmentsListByClusterName =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigurationProfileAssignmentsListByClusterNameInput,
    outputSchema: ConfigurationProfileAssignmentsListByClusterNameOutput,
  }));
// Input Schema
export interface ConfigurationProfileAssignmentsListByMachineNameInput {
  subscriptionId: string;
  resourceGroupName: string;
  machineName: string;
}
export const ConfigurationProfileAssignmentsListByMachineNameInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    machineName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{machineName}/providers/Microsoft.Automanage/configurationProfileAssignments",
      apiVersion: "2022-05-04",
    }),
  ) as unknown as Schema.Codec<ConfigurationProfileAssignmentsListByMachineNameInput>;

// Output Schema
export interface ConfigurationProfileAssignmentsListByMachineNameOutput {
  value?: { id?: string; name?: string; type?: string }[];
}
export const ConfigurationProfileAssignmentsListByMachineNameOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ConfigurationProfileAssignmentsListByMachineNameOutput>;

// The operation
/**
 * Get list of configuration profile assignments
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param machineName - The name of the Arc machine.
 * @param api-version - The API version to use for this operation.
 */
export const ConfigurationProfileAssignmentsListByMachineName =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigurationProfileAssignmentsListByMachineNameInput,
    outputSchema: ConfigurationProfileAssignmentsListByMachineNameOutput,
  }));
// Input Schema
export interface ConfigurationProfileAssignmentsListBySubscriptionInput {
  subscriptionId: string;
}
export const ConfigurationProfileAssignmentsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Automanage/configurationProfileAssignments",
      apiVersion: "2022-05-04",
    }),
  ) as unknown as Schema.Codec<ConfigurationProfileAssignmentsListBySubscriptionInput>;

// Output Schema
export interface ConfigurationProfileAssignmentsListBySubscriptionOutput {
  value?: { id?: string; name?: string; type?: string }[];
}
export const ConfigurationProfileAssignmentsListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ConfigurationProfileAssignmentsListBySubscriptionOutput>;

// The operation
/**
 * Get list of configuration profile assignments under a given subscription
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param api-version - The API version to use for this operation.
 */
export const ConfigurationProfileAssignmentsListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigurationProfileAssignmentsListBySubscriptionInput,
    outputSchema: ConfigurationProfileAssignmentsListBySubscriptionOutput,
  }));
// Input Schema
export interface ConfigurationProfileAssignmentsListByVirtualMachinesInput {
  subscriptionId: string;
  resourceGroupName: string;
  vmName: string;
}
export const ConfigurationProfileAssignmentsListByVirtualMachinesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vmName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/providers/Microsoft.Automanage/configurationProfileAssignments",
      apiVersion: "2022-05-04",
    }),
  ) as unknown as Schema.Codec<ConfigurationProfileAssignmentsListByVirtualMachinesInput>;

// Output Schema
export interface ConfigurationProfileAssignmentsListByVirtualMachinesOutput {
  value?: { id?: string; name?: string; type?: string }[];
}
export const ConfigurationProfileAssignmentsListByVirtualMachinesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ConfigurationProfileAssignmentsListByVirtualMachinesOutput>;

// The operation
/**
 * Get list of configuration profile assignments
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vmName - The name of the virtual machine.
 * @param api-version - The API version to use for this operation.
 */
export const ConfigurationProfileAssignmentsListByVirtualMachines =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigurationProfileAssignmentsListByVirtualMachinesInput,
    outputSchema: ConfigurationProfileAssignmentsListByVirtualMachinesOutput,
  }));
// Input Schema
export interface ConfigurationProfileHCIAssignmentsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  configurationProfileAssignmentName: string;
  properties?: {
    configurationProfile?: string;
    targetId?: string;
    status?: string;
  };
  managedBy?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const ConfigurationProfileHCIAssignmentsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    configurationProfileAssignmentName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        configurationProfile: Schema.optional(Schema.String),
        targetId: Schema.optional(Schema.String),
        status: Schema.optional(Schema.String),
      }),
    ),
    managedBy: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHci/clusters/{clusterName}/providers/Microsoft.Automanage/configurationProfileAssignments/{configurationProfileAssignmentName}",
      apiVersion: "2022-05-04",
    }),
  ) as unknown as Schema.Codec<ConfigurationProfileHCIAssignmentsCreateOrUpdateInput>;

// Output Schema
export interface ConfigurationProfileHCIAssignmentsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const ConfigurationProfileHCIAssignmentsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ConfigurationProfileHCIAssignmentsCreateOrUpdateOutput>;

// The operation
/**
 * Creates an association between a AzureStackHCI cluster and Automanage configuration profile
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Arc machine.
 * @param configurationProfileAssignmentName - Name of the configuration profile assignment. Only default is supported.
 * @param api-version - The API version to use for this operation.
 */
export const ConfigurationProfileHCIAssignmentsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigurationProfileHCIAssignmentsCreateOrUpdateInput,
    outputSchema: ConfigurationProfileHCIAssignmentsCreateOrUpdateOutput,
  }));
// Input Schema
export interface ConfigurationProfileHCIAssignmentsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  configurationProfileAssignmentName: string;
}
export const ConfigurationProfileHCIAssignmentsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    configurationProfileAssignmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHci/clusters/{clusterName}/providers/Microsoft.Automanage/configurationProfileAssignments/{configurationProfileAssignmentName}",
      apiVersion: "2022-05-04",
    }),
  ) as unknown as Schema.Codec<ConfigurationProfileHCIAssignmentsDeleteInput>;

// Output Schema
export type ConfigurationProfileHCIAssignmentsDeleteOutput = void;
export const ConfigurationProfileHCIAssignmentsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ConfigurationProfileHCIAssignmentsDeleteOutput>;

// The operation
/**
 * Delete a configuration profile assignment
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Arc machine.
 * @param configurationProfileAssignmentName - Name of the configuration profile assignment
 * @param api-version - The API version to use for this operation.
 */
export const ConfigurationProfileHCIAssignmentsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigurationProfileHCIAssignmentsDeleteInput,
    outputSchema: ConfigurationProfileHCIAssignmentsDeleteOutput,
  }));
// Input Schema
export interface ConfigurationProfileHCIAssignmentsGetInput {
  resourceGroupName: string;
  subscriptionId: string;
  clusterName: string;
  configurationProfileAssignmentName: string;
}
export const ConfigurationProfileHCIAssignmentsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    configurationProfileAssignmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHci/clusters/{clusterName}/providers/Microsoft.Automanage/configurationProfileAssignments/{configurationProfileAssignmentName}",
      apiVersion: "2022-05-04",
    }),
  ) as unknown as Schema.Codec<ConfigurationProfileHCIAssignmentsGetInput>;

// Output Schema
export interface ConfigurationProfileHCIAssignmentsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const ConfigurationProfileHCIAssignmentsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ConfigurationProfileHCIAssignmentsGetOutput>;

// The operation
/**
 * Get information about a configuration profile assignment
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param subscriptionId - The ID of the target subscription.
 * @param clusterName - The name of the Arc machine.
 * @param configurationProfileAssignmentName - The configuration profile assignment name.
 * @param api-version - The API version to use for this operation.
 */
export const ConfigurationProfileHCIAssignmentsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigurationProfileHCIAssignmentsGetInput,
    outputSchema: ConfigurationProfileHCIAssignmentsGetOutput,
  }));
// Input Schema
export interface ConfigurationProfileHCRPAssignmentsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  machineName: string;
  configurationProfileAssignmentName: string;
  properties?: {
    configurationProfile?: string;
    targetId?: string;
    status?: string;
  };
  managedBy?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const ConfigurationProfileHCRPAssignmentsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    machineName: Schema.String.pipe(T.PathParam()),
    configurationProfileAssignmentName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        configurationProfile: Schema.optional(Schema.String),
        targetId: Schema.optional(Schema.String),
        status: Schema.optional(Schema.String),
      }),
    ),
    managedBy: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{machineName}/providers/Microsoft.Automanage/configurationProfileAssignments/{configurationProfileAssignmentName}",
      apiVersion: "2022-05-04",
    }),
  ) as unknown as Schema.Codec<ConfigurationProfileHCRPAssignmentsCreateOrUpdateInput>;

// Output Schema
export interface ConfigurationProfileHCRPAssignmentsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const ConfigurationProfileHCRPAssignmentsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ConfigurationProfileHCRPAssignmentsCreateOrUpdateOutput>;

// The operation
/**
 * Creates an association between a ARC machine and Automanage configuration profile
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param machineName - The name of the Arc machine.
 * @param configurationProfileAssignmentName - Name of the configuration profile assignment. Only default is supported.
 * @param api-version - The API version to use for this operation.
 */
export const ConfigurationProfileHCRPAssignmentsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigurationProfileHCRPAssignmentsCreateOrUpdateInput,
    outputSchema: ConfigurationProfileHCRPAssignmentsCreateOrUpdateOutput,
  }));
// Input Schema
export interface ConfigurationProfileHCRPAssignmentsDeleteInput {
  resourceGroupName: string;
  subscriptionId: string;
  machineName: string;
  configurationProfileAssignmentName: string;
}
export const ConfigurationProfileHCRPAssignmentsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    machineName: Schema.String.pipe(T.PathParam()),
    configurationProfileAssignmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{machineName}/providers/Microsoft.Automanage/configurationProfileAssignments/{configurationProfileAssignmentName}",
      apiVersion: "2022-05-04",
    }),
  ) as unknown as Schema.Codec<ConfigurationProfileHCRPAssignmentsDeleteInput>;

// Output Schema
export type ConfigurationProfileHCRPAssignmentsDeleteOutput = void;
export const ConfigurationProfileHCRPAssignmentsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ConfigurationProfileHCRPAssignmentsDeleteOutput>;

// The operation
/**
 * Delete a configuration profile assignment
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param subscriptionId - The ID of the target subscription.
 * @param machineName - The name of the Arc machine.
 * @param configurationProfileAssignmentName - Name of the configuration profile assignment
 * @param api-version - The API version to use for this operation.
 */
export const ConfigurationProfileHCRPAssignmentsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigurationProfileHCRPAssignmentsDeleteInput,
    outputSchema: ConfigurationProfileHCRPAssignmentsDeleteOutput,
  }));
// Input Schema
export interface ConfigurationProfileHCRPAssignmentsGetInput {
  resourceGroupName: string;
  subscriptionId: string;
  machineName: string;
  configurationProfileAssignmentName: string;
}
export const ConfigurationProfileHCRPAssignmentsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    machineName: Schema.String.pipe(T.PathParam()),
    configurationProfileAssignmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{machineName}/providers/Microsoft.Automanage/configurationProfileAssignments/{configurationProfileAssignmentName}",
      apiVersion: "2022-05-04",
    }),
  ) as unknown as Schema.Codec<ConfigurationProfileHCRPAssignmentsGetInput>;

// Output Schema
export interface ConfigurationProfileHCRPAssignmentsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const ConfigurationProfileHCRPAssignmentsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ConfigurationProfileHCRPAssignmentsGetOutput>;

// The operation
/**
 * Get information about a configuration profile assignment
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param subscriptionId - The ID of the target subscription.
 * @param machineName - The name of the Arc machine.
 * @param configurationProfileAssignmentName - The configuration profile assignment name.
 * @param api-version - The API version to use for this operation.
 */
export const ConfigurationProfileHCRPAssignmentsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigurationProfileHCRPAssignmentsGetInput,
    outputSchema: ConfigurationProfileHCRPAssignmentsGetOutput,
  }));
// Input Schema
export interface ConfigurationProfilesCreateOrUpdateInput {
  configurationProfileName: string;
  subscriptionId: string;
  resourceGroupName: string;
  properties?: { configuration?: unknown };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  tags?: Record<string, string>;
  location: string;
}
export const ConfigurationProfilesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    configurationProfileName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        configuration: Schema.optional(Schema.Unknown),
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
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automanage/configurationProfiles/{configurationProfileName}",
      apiVersion: "2022-05-04",
    }),
  ) as unknown as Schema.Codec<ConfigurationProfilesCreateOrUpdateInput>;

// Output Schema
export interface ConfigurationProfilesCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const ConfigurationProfilesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ConfigurationProfilesCreateOrUpdateOutput>;

// The operation
/**
 * Creates a configuration profile
 *
 * @param configurationProfileName - Name of the configuration profile.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const ConfigurationProfilesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigurationProfilesCreateOrUpdateInput,
    outputSchema: ConfigurationProfilesCreateOrUpdateOutput,
  }));
// Input Schema
export interface ConfigurationProfilesDeleteInput {
  resourceGroupName: string;
  configurationProfileName: string;
  subscriptionId: string;
}
export const ConfigurationProfilesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    configurationProfileName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automanage/configurationProfiles/{configurationProfileName}",
      apiVersion: "2022-05-04",
    }),
  ) as unknown as Schema.Codec<ConfigurationProfilesDeleteInput>;

// Output Schema
export type ConfigurationProfilesDeleteOutput = void;
export const ConfigurationProfilesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ConfigurationProfilesDeleteOutput>;

// The operation
/**
 * Delete a configuration profile
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param configurationProfileName - Name of the configuration profile
 * @param subscriptionId - The ID of the target subscription.
 * @param api-version - The API version to use for this operation.
 */
export const ConfigurationProfilesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ConfigurationProfilesDeleteInput,
    outputSchema: ConfigurationProfilesDeleteOutput,
  }),
);
// Input Schema
export interface ConfigurationProfilesGetInput {
  configurationProfileName: string;
  subscriptionId: string;
  resourceGroupName: string;
}
export const ConfigurationProfilesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    configurationProfileName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automanage/configurationProfiles/{configurationProfileName}",
      apiVersion: "2022-05-04",
    }),
  ) as unknown as Schema.Codec<ConfigurationProfilesGetInput>;

// Output Schema
export interface ConfigurationProfilesGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const ConfigurationProfilesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ConfigurationProfilesGetOutput>;

// The operation
/**
 * Get information about a configuration profile
 *
 * @param configurationProfileName - The configuration profile name.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const ConfigurationProfilesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ConfigurationProfilesGetInput,
    outputSchema: ConfigurationProfilesGetOutput,
  }),
);
// Input Schema
export interface ConfigurationProfilesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const ConfigurationProfilesListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automanage/configurationProfiles",
      apiVersion: "2022-05-04",
    }),
  ) as unknown as Schema.Codec<ConfigurationProfilesListByResourceGroupInput>;

// Output Schema
export interface ConfigurationProfilesListByResourceGroupOutput {
  value?: { id?: string; name?: string; type?: string }[];
}
export const ConfigurationProfilesListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ConfigurationProfilesListByResourceGroupOutput>;

// The operation
/**
 * Retrieve a list of configuration profile within a given resource group
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const ConfigurationProfilesListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigurationProfilesListByResourceGroupInput,
    outputSchema: ConfigurationProfilesListByResourceGroupOutput,
  }));
// Input Schema
export interface ConfigurationProfilesListBySubscriptionInput {
  subscriptionId: string;
}
export const ConfigurationProfilesListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Automanage/configurationProfiles",
      apiVersion: "2022-05-04",
    }),
  ) as unknown as Schema.Codec<ConfigurationProfilesListBySubscriptionInput>;

// Output Schema
export interface ConfigurationProfilesListBySubscriptionOutput {
  value?: { id?: string; name?: string; type?: string }[];
}
export const ConfigurationProfilesListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ConfigurationProfilesListBySubscriptionOutput>;

// The operation
/**
 * Retrieve a list of configuration profile within a subscription
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param api-version - The API version to use for this operation.
 */
export const ConfigurationProfilesListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigurationProfilesListBySubscriptionInput,
    outputSchema: ConfigurationProfilesListBySubscriptionOutput,
  }));
// Input Schema
export interface ConfigurationProfilesUpdateInput {
  configurationProfileName: string;
  subscriptionId: string;
  resourceGroupName: string;
  properties?: { configuration?: unknown };
  tags?: Record<string, string>;
}
export const ConfigurationProfilesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    configurationProfileName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        configuration: Schema.optional(Schema.Unknown),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automanage/configurationProfiles/{configurationProfileName}",
      apiVersion: "2022-05-04",
    }),
  ) as unknown as Schema.Codec<ConfigurationProfilesUpdateInput>;

// Output Schema
export interface ConfigurationProfilesUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const ConfigurationProfilesUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ConfigurationProfilesUpdateOutput>;

// The operation
/**
 * Updates a configuration profile
 *
 * @param configurationProfileName - Name of the configuration profile.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const ConfigurationProfilesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ConfigurationProfilesUpdateInput,
    outputSchema: ConfigurationProfilesUpdateOutput,
  }),
);
// Input Schema
export interface ConfigurationProfilesVersionsCreateOrUpdateInput {
  configurationProfileName: string;
  versionName: string;
  subscriptionId: string;
  resourceGroupName: string;
  properties?: { configuration?: unknown };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  tags?: Record<string, string>;
  location: string;
}
export const ConfigurationProfilesVersionsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    configurationProfileName: Schema.String.pipe(T.PathParam()),
    versionName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        configuration: Schema.optional(Schema.Unknown),
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
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automanage/configurationProfiles/{configurationProfileName}/versions/{versionName}",
      apiVersion: "2022-05-04",
    }),
  ) as unknown as Schema.Codec<ConfigurationProfilesVersionsCreateOrUpdateInput>;

// Output Schema
export interface ConfigurationProfilesVersionsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const ConfigurationProfilesVersionsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ConfigurationProfilesVersionsCreateOrUpdateOutput>;

// The operation
/**
 * Creates a configuration profile version
 *
 * @param configurationProfileName - Name of the configuration profile.
 * @param versionName - The configuration profile version name.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const ConfigurationProfilesVersionsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigurationProfilesVersionsCreateOrUpdateInput,
    outputSchema: ConfigurationProfilesVersionsCreateOrUpdateOutput,
  }));
// Input Schema
export interface ConfigurationProfilesVersionsDeleteInput {
  resourceGroupName: string;
  configurationProfileName: string;
  versionName: string;
  subscriptionId: string;
}
export const ConfigurationProfilesVersionsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    configurationProfileName: Schema.String.pipe(T.PathParam()),
    versionName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automanage/configurationProfiles/{configurationProfileName}/versions/{versionName}",
      apiVersion: "2022-05-04",
    }),
  ) as unknown as Schema.Codec<ConfigurationProfilesVersionsDeleteInput>;

// Output Schema
export type ConfigurationProfilesVersionsDeleteOutput = void;
export const ConfigurationProfilesVersionsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ConfigurationProfilesVersionsDeleteOutput>;

// The operation
/**
 * Delete a configuration profile version
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param configurationProfileName - Name of the configuration profile
 * @param versionName - The configuration profile version name.
 * @param subscriptionId - The ID of the target subscription.
 * @param api-version - The API version to use for this operation.
 */
export const ConfigurationProfilesVersionsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigurationProfilesVersionsDeleteInput,
    outputSchema: ConfigurationProfilesVersionsDeleteOutput,
  }));
// Input Schema
export interface ConfigurationProfilesVersionsGetInput {
  configurationProfileName: string;
  versionName: string;
  subscriptionId: string;
  resourceGroupName: string;
}
export const ConfigurationProfilesVersionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    configurationProfileName: Schema.String.pipe(T.PathParam()),
    versionName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automanage/configurationProfiles/{configurationProfileName}/versions/{versionName}",
      apiVersion: "2022-05-04",
    }),
  ) as unknown as Schema.Codec<ConfigurationProfilesVersionsGetInput>;

// Output Schema
export interface ConfigurationProfilesVersionsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const ConfigurationProfilesVersionsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ConfigurationProfilesVersionsGetOutput>;

// The operation
/**
 * Get information about a configuration profile version
 *
 * @param configurationProfileName - The configuration profile name.
 * @param versionName - The configuration profile version name.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const ConfigurationProfilesVersionsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigurationProfilesVersionsGetInput,
    outputSchema: ConfigurationProfilesVersionsGetOutput,
  }));
// Input Schema
export interface ConfigurationProfilesVersionsListChildResourcesInput {
  configurationProfileName: string;
  subscriptionId: string;
  resourceGroupName: string;
}
export const ConfigurationProfilesVersionsListChildResourcesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    configurationProfileName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automanage/configurationProfiles/{configurationProfileName}/versions",
      apiVersion: "2022-05-04",
    }),
  ) as unknown as Schema.Codec<ConfigurationProfilesVersionsListChildResourcesInput>;

// Output Schema
export interface ConfigurationProfilesVersionsListChildResourcesOutput {
  value?: { id?: string; name?: string; type?: string }[];
}
export const ConfigurationProfilesVersionsListChildResourcesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ConfigurationProfilesVersionsListChildResourcesOutput>;

// The operation
/**
 * Retrieve a list of configuration profile version for a configuration profile
 *
 * @param configurationProfileName - Name of the configuration profile.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const ConfigurationProfilesVersionsListChildResources =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigurationProfilesVersionsListChildResourcesInput,
    outputSchema: ConfigurationProfilesVersionsListChildResourcesOutput,
  }));
// Input Schema
export interface HCIReportsGetInput {
  resourceGroupName: string;
  subscriptionId: string;
  clusterName: string;
  configurationProfileAssignmentName: string;
  reportName: string;
}
export const HCIReportsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
  clusterName: Schema.String.pipe(T.PathParam()),
  configurationProfileAssignmentName: Schema.String.pipe(T.PathParam()),
  reportName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHci/clusters/{clusterName}/providers/Microsoft.Automanage/configurationProfileAssignments/{configurationProfileAssignmentName}/reports/{reportName}",
    apiVersion: "2022-05-04",
  }),
) as unknown as Schema.Codec<HCIReportsGetInput>;

// Output Schema
export interface HCIReportsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const HCIReportsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<HCIReportsGetOutput>;

// The operation
/**
 * Get information about a report associated with a configuration profile assignment run
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param subscriptionId - The ID of the target subscription.
 * @param clusterName - The name of the Arc machine.
 * @param configurationProfileAssignmentName - The configuration profile assignment name.
 * @param reportName - The report name.
 * @param api-version - The API version to use for this operation.
 */
export const HCIReportsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: HCIReportsGetInput,
  outputSchema: HCIReportsGetOutput,
}));
// Input Schema
export interface HCIReportsListByConfigurationProfileAssignmentsInput {
  subscriptionId: string;
  resourceGroupName: string;
  clusterName: string;
  configurationProfileAssignmentName: string;
}
export const HCIReportsListByConfigurationProfileAssignmentsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    configurationProfileAssignmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHci/clusters/{clusterName}/providers/Microsoft.Automanage/configurationProfileAssignments/{configurationProfileAssignmentName}/reports",
      apiVersion: "2022-05-04",
    }),
  ) as unknown as Schema.Codec<HCIReportsListByConfigurationProfileAssignmentsInput>;

// Output Schema
export interface HCIReportsListByConfigurationProfileAssignmentsOutput {
  value?: { id?: string; name?: string; type?: string }[];
}
export const HCIReportsListByConfigurationProfileAssignmentsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<HCIReportsListByConfigurationProfileAssignmentsOutput>;

// The operation
/**
 * Retrieve a list of reports within a given configuration profile assignment
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param clusterName - The name of the Arc machine.
 * @param configurationProfileAssignmentName - The configuration profile assignment name.
 * @param api-version - The API version to use for this operation.
 */
export const HCIReportsListByConfigurationProfileAssignments =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: HCIReportsListByConfigurationProfileAssignmentsInput,
    outputSchema: HCIReportsListByConfigurationProfileAssignmentsOutput,
  }));
// Input Schema
export interface HCRPReportsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  machineName: string;
  configurationProfileAssignmentName: string;
  reportName: string;
}
export const HCRPReportsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  machineName: Schema.String.pipe(T.PathParam()),
  configurationProfileAssignmentName: Schema.String.pipe(T.PathParam()),
  reportName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{machineName}/providers/Microsoft.Automanage/configurationProfileAssignments/{configurationProfileAssignmentName}/reports/{reportName}",
    apiVersion: "2022-05-04",
  }),
) as unknown as Schema.Codec<HCRPReportsGetInput>;

// Output Schema
export interface HCRPReportsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const HCRPReportsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<HCRPReportsGetOutput>;

// The operation
/**
 * Get information about a report associated with a configuration profile assignment run
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param machineName - The name of the Arc machine.
 * @param configurationProfileAssignmentName - The configuration profile assignment name.
 * @param reportName - The report name.
 * @param api-version - The API version to use for this operation.
 */
export const HCRPReportsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: HCRPReportsGetInput,
  outputSchema: HCRPReportsGetOutput,
}));
// Input Schema
export interface HCRPReportsListByConfigurationProfileAssignmentsInput {
  subscriptionId: string;
  resourceGroupName: string;
  machineName: string;
  configurationProfileAssignmentName: string;
}
export const HCRPReportsListByConfigurationProfileAssignmentsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    machineName: Schema.String.pipe(T.PathParam()),
    configurationProfileAssignmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{machineName}/providers/Microsoft.Automanage/configurationProfileAssignments/{configurationProfileAssignmentName}/reports",
      apiVersion: "2022-05-04",
    }),
  ) as unknown as Schema.Codec<HCRPReportsListByConfigurationProfileAssignmentsInput>;

// Output Schema
export interface HCRPReportsListByConfigurationProfileAssignmentsOutput {
  value?: { id?: string; name?: string; type?: string }[];
}
export const HCRPReportsListByConfigurationProfileAssignmentsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<HCRPReportsListByConfigurationProfileAssignmentsOutput>;

// The operation
/**
 * Retrieve a list of reports within a given configuration profile assignment
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param machineName - The name of the Arc machine.
 * @param configurationProfileAssignmentName - The configuration profile assignment name.
 * @param api-version - The API version to use for this operation.
 */
export const HCRPReportsListByConfigurationProfileAssignments =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: HCRPReportsListByConfigurationProfileAssignmentsInput,
    outputSchema: HCRPReportsListByConfigurationProfileAssignmentsOutput,
  }));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Automanage/operations",
    apiVersion: "2022-05-04",
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
 * Lists all of the available Automanage REST API operations.
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface ReportsGetInput {
  resourceGroupName: string;
  configurationProfileAssignmentName: string;
  reportName: string;
  subscriptionId: string;
  vmName: string;
}
export const ReportsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  configurationProfileAssignmentName: Schema.String.pipe(T.PathParam()),
  reportName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
  vmName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/providers/Microsoft.Automanage/configurationProfileAssignments/{configurationProfileAssignmentName}/reports/{reportName}",
    apiVersion: "2022-05-04",
  }),
) as unknown as Schema.Codec<ReportsGetInput>;

// Output Schema
export interface ReportsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const ReportsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<ReportsGetOutput>;

// The operation
/**
 * Get information about a report associated with a configuration profile assignment run
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param configurationProfileAssignmentName - The configuration profile assignment name.
 * @param reportName - The report name.
 * @param subscriptionId - The ID of the target subscription.
 * @param vmName - The name of the virtual machine.
 * @param api-version - The API version to use for this operation.
 */
export const reportsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ReportsGetInput,
  outputSchema: ReportsGetOutput,
}));
// Input Schema
export interface ReportsListByConfigurationProfileAssignmentsInput {
  subscriptionId: string;
  resourceGroupName: string;
  configurationProfileAssignmentName: string;
  vmName: string;
}
export const ReportsListByConfigurationProfileAssignmentsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    configurationProfileAssignmentName: Schema.String.pipe(T.PathParam()),
    vmName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}/providers/Microsoft.Automanage/configurationProfileAssignments/{configurationProfileAssignmentName}/reports",
      apiVersion: "2022-05-04",
    }),
  ) as unknown as Schema.Codec<ReportsListByConfigurationProfileAssignmentsInput>;

// Output Schema
export interface ReportsListByConfigurationProfileAssignmentsOutput {
  value?: { id?: string; name?: string; type?: string }[];
}
export const ReportsListByConfigurationProfileAssignmentsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ReportsListByConfigurationProfileAssignmentsOutput>;

// The operation
/**
 * Retrieve a list of reports within a given configuration profile assignment
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param configurationProfileAssignmentName - The configuration profile assignment name.
 * @param vmName - The name of the virtual machine.
 * @param api-version - The API version to use for this operation.
 */
export const reportsListByConfigurationProfileAssignments =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReportsListByConfigurationProfileAssignmentsInput,
    outputSchema: ReportsListByConfigurationProfileAssignmentsOutput,
  }));
// Input Schema
export interface ServicePrincipalsGetInput {
  subscriptionId: string;
}
export const ServicePrincipalsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Automanage/servicePrincipals/default",
      apiVersion: "2022-05-04",
    }),
  ) as unknown as Schema.Codec<ServicePrincipalsGetInput>;

// Output Schema
export interface ServicePrincipalsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const ServicePrincipalsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ServicePrincipalsGetOutput>;

// The operation
/**
 * Get the Automanage AAD first party Application Service Principal details for the subscription id.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param api-version - The API version to use for this operation.
 */
export const ServicePrincipalsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ServicePrincipalsGetInput,
    outputSchema: ServicePrincipalsGetOutput,
  }),
);
// Input Schema
export interface ServicePrincipalsListBySubscriptionInput {
  subscriptionId: string;
}
export const ServicePrincipalsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Automanage/servicePrincipals",
      apiVersion: "2022-05-04",
    }),
  ) as unknown as Schema.Codec<ServicePrincipalsListBySubscriptionInput>;

// Output Schema
export interface ServicePrincipalsListBySubscriptionOutput {
  value?: { id?: string; name?: string; type?: string }[];
}
export const ServicePrincipalsListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ServicePrincipalsListBySubscriptionOutput>;

// The operation
/**
 * Get the Automanage AAD first party Application Service Principal details for the subscription id.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param api-version - The API version to use for this operation.
 */
export const ServicePrincipalsListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ServicePrincipalsListBySubscriptionInput,
    outputSchema: ServicePrincipalsListBySubscriptionOutput,
  }));
