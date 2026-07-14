/**
 * Azure Chaos API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface CapabilitiesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  parentProviderNamespace: string;
  parentResourceType: string;
  parentResourceName: string;
  targetName: string;
  capabilityName: string;
  properties?: {
    publisher?: string;
    targetType?: string;
    description?: string;
    parametersSchema?: string;
    urn?: string;
  };
}
export const CapabilitiesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    parentProviderNamespace: Schema.String.pipe(T.PathParam()),
    parentResourceType: Schema.String.pipe(T.PathParam()),
    parentResourceName: Schema.String.pipe(T.PathParam()),
    targetName: Schema.String.pipe(T.PathParam()),
    capabilityName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        publisher: Schema.optional(Schema.String),
        targetType: Schema.optional(Schema.String),
        description: Schema.optional(Schema.String),
        parametersSchema: Schema.optional(Schema.String),
        urn: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{parentProviderNamespace}/{parentResourceType}/{parentResourceName}/providers/Microsoft.Chaos/targets/{targetName}/capabilities/{capabilityName}",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<CapabilitiesCreateOrUpdateInput>;

// Output Schema
export interface CapabilitiesCreateOrUpdateOutput {
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
export const CapabilitiesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<CapabilitiesCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a Capability resource that extends a Target resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param parentProviderNamespace - The parent resource provider namespace.
 * @param parentResourceType - The parent resource type.
 * @param parentResourceName - The parent resource name.
 * @param targetName - String that represents a Target resource name.
 * @param capabilityName - String that represents a Capability resource name.
 */
export const CapabilitiesCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: CapabilitiesCreateOrUpdateInput,
  outputSchema: CapabilitiesCreateOrUpdateOutput,
}));
// Input Schema
export interface CapabilitiesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  parentProviderNamespace: string;
  parentResourceType: string;
  parentResourceName: string;
  targetName: string;
  capabilityName: string;
}
export const CapabilitiesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    parentProviderNamespace: Schema.String.pipe(T.PathParam()),
    parentResourceType: Schema.String.pipe(T.PathParam()),
    parentResourceName: Schema.String.pipe(T.PathParam()),
    targetName: Schema.String.pipe(T.PathParam()),
    capabilityName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{parentProviderNamespace}/{parentResourceType}/{parentResourceName}/providers/Microsoft.Chaos/targets/{targetName}/capabilities/{capabilityName}",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<CapabilitiesDeleteInput>;

// Output Schema
export type CapabilitiesDeleteOutput = void;
export const CapabilitiesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<CapabilitiesDeleteOutput>;

// The operation
/**
 * Delete a Capability that extends a Target resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param parentProviderNamespace - The parent resource provider namespace.
 * @param parentResourceType - The parent resource type.
 * @param parentResourceName - The parent resource name.
 * @param targetName - String that represents a Target resource name.
 * @param capabilityName - String that represents a Capability resource name.
 */
export const CapabilitiesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: CapabilitiesDeleteInput,
  outputSchema: CapabilitiesDeleteOutput,
}));
// Input Schema
export interface CapabilitiesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  parentProviderNamespace: string;
  parentResourceType: string;
  parentResourceName: string;
  targetName: string;
  capabilityName: string;
}
export const CapabilitiesGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  parentProviderNamespace: Schema.String.pipe(T.PathParam()),
  parentResourceType: Schema.String.pipe(T.PathParam()),
  parentResourceName: Schema.String.pipe(T.PathParam()),
  targetName: Schema.String.pipe(T.PathParam()),
  capabilityName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{parentProviderNamespace}/{parentResourceType}/{parentResourceName}/providers/Microsoft.Chaos/targets/{targetName}/capabilities/{capabilityName}",
    apiVersion: "2025-01-01",
  }),
) as unknown as Schema.Codec<CapabilitiesGetInput>;

// Output Schema
export interface CapabilitiesGetOutput {
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
export const CapabilitiesGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<CapabilitiesGetOutput>;

// The operation
/**
 * Get a Capability resource that extends a Target resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param parentProviderNamespace - The parent resource provider namespace.
 * @param parentResourceType - The parent resource type.
 * @param parentResourceName - The parent resource name.
 * @param targetName - String that represents a Target resource name.
 * @param capabilityName - String that represents a Capability resource name.
 */
export const CapabilitiesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: CapabilitiesGetInput,
  outputSchema: CapabilitiesGetOutput,
}));
// Input Schema
export interface CapabilitiesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  parentProviderNamespace: string;
  parentResourceType: string;
  parentResourceName: string;
  targetName: string;
  continuationToken?: string;
}
export const CapabilitiesListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  parentProviderNamespace: Schema.String.pipe(T.PathParam()),
  parentResourceType: Schema.String.pipe(T.PathParam()),
  parentResourceName: Schema.String.pipe(T.PathParam()),
  targetName: Schema.String.pipe(T.PathParam()),
  continuationToken: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{parentProviderNamespace}/{parentResourceType}/{parentResourceName}/providers/Microsoft.Chaos/targets/{targetName}/capabilities",
    apiVersion: "2025-01-01",
  }),
) as unknown as Schema.Codec<CapabilitiesListInput>;

// Output Schema
export interface CapabilitiesListOutput {
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
export const CapabilitiesListOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<CapabilitiesListOutput>;

// The operation
/**
 * Get a list of Capability resources that extend a Target resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param parentProviderNamespace - The parent resource provider namespace.
 * @param parentResourceType - The parent resource type.
 * @param parentResourceName - The parent resource name.
 * @param continuationToken - String that sets the continuation token.
 * @param targetName - String that represents a Target resource name.
 */
export const CapabilitiesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: CapabilitiesListInput,
  outputSchema: CapabilitiesListOutput,
}));
// Input Schema
export interface CapabilityTypesGetInput {
  subscriptionId: string;
  location: string;
  targetTypeName: string;
  capabilityTypeName: string;
}
export const CapabilityTypesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    targetTypeName: Schema.String.pipe(T.PathParam()),
    capabilityTypeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Chaos/locations/{location}/targetTypes/{targetTypeName}/capabilityTypes/{capabilityTypeName}",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<CapabilityTypesGetInput>;

// Output Schema
export interface CapabilityTypesGetOutput {
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
export const CapabilityTypesGetOutput =
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
  }) as unknown as Schema.Codec<CapabilityTypesGetOutput>;

// The operation
/**
 * Get a Capability Type resource for given Target Type and location.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 * @param targetTypeName - String that represents a Target Type resource name.
 * @param capabilityTypeName - String that represents a Capability Type resource name.
 */
export const CapabilityTypesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: CapabilityTypesGetInput,
  outputSchema: CapabilityTypesGetOutput,
}));
// Input Schema
export interface CapabilityTypesListInput {
  subscriptionId: string;
  location: string;
  targetTypeName: string;
  continuationToken?: string;
}
export const CapabilityTypesListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    targetTypeName: Schema.String.pipe(T.PathParam()),
    continuationToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Chaos/locations/{location}/targetTypes/{targetTypeName}/capabilityTypes",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<CapabilityTypesListInput>;

// Output Schema
export interface CapabilityTypesListOutput {
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
export const CapabilityTypesListOutput =
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
  }) as unknown as Schema.Codec<CapabilityTypesListOutput>;

// The operation
/**
 * Get a list of Capability Type resources for given Target Type and location.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 * @param targetTypeName - String that represents a Target Type resource name.
 * @param continuationToken - String that sets the continuation token.
 */
export const CapabilityTypesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: CapabilityTypesListInput,
  outputSchema: CapabilityTypesListOutput,
}));
// Input Schema
export interface ExperimentsCancelInput {
  subscriptionId: string;
  resourceGroupName: string;
  experimentName: string;
}
export const ExperimentsCancelInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  experimentName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Chaos/experiments/{experimentName}/cancel",
    apiVersion: "2025-01-01",
  }),
) as unknown as Schema.Codec<ExperimentsCancelInput>;

// Output Schema
export type ExperimentsCancelOutput = void;
export const ExperimentsCancelOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ExperimentsCancelOutput>;

// The operation
/**
 * Cancel a running Experiment resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param experimentName - String that represents a Experiment resource name.
 */
export const ExperimentsCancel = /*@__PURE__*/ API.make(() => ({
  inputSchema: ExperimentsCancelInput,
  outputSchema: ExperimentsCancelOutput,
}));
// Input Schema
export interface ExperimentsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  experimentName: string;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
  properties: {
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Creating"
      | "Updating"
      | "Deleting";
    steps: {
      name: string;
      branches: {
        name: string;
        actions: { name: string; type: "delay" | "discrete" | "continuous" }[];
      }[];
    }[];
    selectors: {
      id: string;
      type: "List" | "Query";
      filter?: { type: "Simple" };
    }[];
  };
  tags?: Record<string, string>;
  location: string;
}
export const ExperimentsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    experimentName: Schema.String.pipe(T.PathParam()),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.Literals([
          "None",
          "SystemAssigned",
          "UserAssigned",
          "SystemAssigned,UserAssigned",
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
    properties: Schema.Struct({
      provisioningState: Schema.optional(
        Schema.Literals([
          "Succeeded",
          "Failed",
          "Canceled",
          "Creating",
          "Updating",
          "Deleting",
        ]),
      ),
      steps: Schema.Array(
        Schema.Struct({
          name: Schema.String,
          branches: Schema.Array(
            Schema.Struct({
              name: Schema.String,
              actions: Schema.Array(
                Schema.Struct({
                  name: Schema.String,
                  type: Schema.Literals(["delay", "discrete", "continuous"]),
                }),
              ),
            }),
          ),
        }),
      ),
      selectors: Schema.Array(
        Schema.Struct({
          id: Schema.String,
          type: Schema.Literals(["List", "Query"]),
          filter: Schema.optional(
            Schema.Struct({
              type: Schema.Literals(["Simple"]),
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Chaos/experiments/{experimentName}",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<ExperimentsCreateOrUpdateInput>;

// Output Schema
export interface ExperimentsCreateOrUpdateOutput {
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
export const ExperimentsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ExperimentsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a Experiment resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param experimentName - String that represents a Experiment resource name.
 */
export const ExperimentsCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ExperimentsCreateOrUpdateInput,
  outputSchema: ExperimentsCreateOrUpdateOutput,
}));
// Input Schema
export interface ExperimentsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  experimentName: string;
}
export const ExperimentsDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  experimentName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Chaos/experiments/{experimentName}",
    apiVersion: "2025-01-01",
  }),
) as unknown as Schema.Codec<ExperimentsDeleteInput>;

// Output Schema
export type ExperimentsDeleteOutput = void;
export const ExperimentsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ExperimentsDeleteOutput>;

// The operation
/**
 * Delete a Experiment resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param experimentName - String that represents a Experiment resource name.
 */
export const ExperimentsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: ExperimentsDeleteInput,
  outputSchema: ExperimentsDeleteOutput,
}));
// Input Schema
export interface ExperimentsExecutionDetailsInput {
  subscriptionId: string;
  resourceGroupName: string;
  experimentName: string;
  executionId: string;
}
export const ExperimentsExecutionDetailsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    experimentName: Schema.String.pipe(T.PathParam()),
    executionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Chaos/experiments/{experimentName}/executions/{executionId}/getExecutionDetails",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<ExperimentsExecutionDetailsInput>;

// Output Schema
export interface ExperimentsExecutionDetailsOutput {
  type?: string;
  id?: string;
  name?: string;
  properties?: {
    status?: string;
    startedAt?: string;
    stoppedAt?: string;
    failureReason?: string;
    lastActionAt?: string;
    runInformation?: {
      steps?: {
        stepName?: string;
        stepId?: string;
        status?: string;
        branches?: {
          branchName?: string;
          branchId?: string;
          status?: string;
          actions?: {
            actionName?: string;
            actionId?: string;
            status?: string;
            startTime?: string;
            endTime?: string;
            targets?: {
              status?: string;
              target?: string;
              targetFailedTime?: string;
              targetCompletedTime?: string;
              error?: { code?: string; message?: string };
            }[];
          }[];
        }[];
      }[];
    };
  };
}
export const ExperimentsExecutionDetailsOutput =
  /*@__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        status: Schema.optional(Schema.String),
        startedAt: Schema.optional(Schema.String),
        stoppedAt: Schema.optional(Schema.String),
        failureReason: Schema.optional(Schema.String),
        lastActionAt: Schema.optional(Schema.String),
        runInformation: Schema.optional(
          Schema.Struct({
            steps: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  stepName: Schema.optional(Schema.String),
                  stepId: Schema.optional(Schema.String),
                  status: Schema.optional(Schema.String),
                  branches: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        branchName: Schema.optional(Schema.String),
                        branchId: Schema.optional(Schema.String),
                        status: Schema.optional(Schema.String),
                        actions: Schema.optional(
                          Schema.Array(
                            Schema.Struct({
                              actionName: Schema.optional(Schema.String),
                              actionId: Schema.optional(Schema.String),
                              status: Schema.optional(Schema.String),
                              startTime: Schema.optional(Schema.String),
                              endTime: Schema.optional(Schema.String),
                              targets: Schema.optional(
                                Schema.Array(
                                  Schema.Struct({
                                    status: Schema.optional(Schema.String),
                                    target: Schema.optional(Schema.String),
                                    targetFailedTime: Schema.optional(
                                      Schema.String,
                                    ),
                                    targetCompletedTime: Schema.optional(
                                      Schema.String,
                                    ),
                                    error: Schema.optional(
                                      Schema.Struct({
                                        code: Schema.optional(Schema.String),
                                        message: Schema.optional(Schema.String),
                                      }),
                                    ),
                                  }),
                                ),
                              ),
                            }),
                          ),
                        ),
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
  }) as unknown as Schema.Codec<ExperimentsExecutionDetailsOutput>;

// The operation
/**
 * Execution details of an experiment resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param experimentName - String that represents a Experiment resource name.
 * @param executionId - GUID that represents a Experiment execution detail.
 */
export const ExperimentsExecutionDetails = /*@__PURE__*/ API.make(() => ({
  inputSchema: ExperimentsExecutionDetailsInput,
  outputSchema: ExperimentsExecutionDetailsOutput,
}));
// Input Schema
export interface ExperimentsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  experimentName: string;
}
export const ExperimentsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  experimentName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Chaos/experiments/{experimentName}",
    apiVersion: "2025-01-01",
  }),
) as unknown as Schema.Codec<ExperimentsGetInput>;

// Output Schema
export interface ExperimentsGetOutput {
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
export const ExperimentsGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<ExperimentsGetOutput>;

// The operation
/**
 * Get a Experiment resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param experimentName - String that represents a Experiment resource name.
 */
export const ExperimentsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ExperimentsGetInput,
  outputSchema: ExperimentsGetOutput,
}));
// Input Schema
export interface ExperimentsGetExecutionInput {
  subscriptionId: string;
  resourceGroupName: string;
  experimentName: string;
  executionId: string;
}
export const ExperimentsGetExecutionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    experimentName: Schema.String.pipe(T.PathParam()),
    executionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Chaos/experiments/{experimentName}/executions/{executionId}",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<ExperimentsGetExecutionInput>;

// Output Schema
export interface ExperimentsGetExecutionOutput {
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
export const ExperimentsGetExecutionOutput =
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
  }) as unknown as Schema.Codec<ExperimentsGetExecutionOutput>;

// The operation
/**
 * Get an execution of an Experiment resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param experimentName - String that represents a Experiment resource name.
 * @param executionId - GUID that represents a Experiment execution detail.
 */
export const ExperimentsGetExecution = /*@__PURE__*/ API.make(() => ({
  inputSchema: ExperimentsGetExecutionInput,
  outputSchema: ExperimentsGetExecutionOutput,
}));
// Input Schema
export interface ExperimentsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  running?: boolean;
  continuationToken?: string;
}
export const ExperimentsListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  running: Schema.optional(Schema.Boolean),
  continuationToken: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Chaos/experiments",
    apiVersion: "2025-01-01",
  }),
) as unknown as Schema.Codec<ExperimentsListInput>;

// Output Schema
export interface ExperimentsListOutput {
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
export const ExperimentsListOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ExperimentsListOutput>;

// The operation
/**
 * Get a list of Experiment resources in a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param running - Optional value that indicates whether to filter results based on if the Experiment is currently running. If null, then the results will not be filtered.
 * @param continuationToken - String that sets the continuation token.
 */
export const ExperimentsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: ExperimentsListInput,
  outputSchema: ExperimentsListOutput,
}));
// Input Schema
export interface ExperimentsListAllInput {
  subscriptionId: string;
  running?: boolean;
  continuationToken?: string;
}
export const ExperimentsListAllInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    running: Schema.optional(Schema.Boolean),
    continuationToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Chaos/experiments",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<ExperimentsListAllInput>;

// Output Schema
export interface ExperimentsListAllOutput {
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
export const ExperimentsListAllOutput =
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
  }) as unknown as Schema.Codec<ExperimentsListAllOutput>;

// The operation
/**
 * Get a list of Experiment resources in a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param running - Optional value that indicates whether to filter results based on if the Experiment is currently running. If null, then the results will not be filtered.
 * @param continuationToken - String that sets the continuation token.
 */
export const ExperimentsListAll = /*@__PURE__*/ API.make(() => ({
  inputSchema: ExperimentsListAllInput,
  outputSchema: ExperimentsListAllOutput,
}));
// Input Schema
export interface ExperimentsListAllExecutionsInput {
  subscriptionId: string;
  resourceGroupName: string;
  experimentName: string;
}
export const ExperimentsListAllExecutionsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    experimentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Chaos/experiments/{experimentName}/executions",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<ExperimentsListAllExecutionsInput>;

// Output Schema
export interface ExperimentsListAllExecutionsOutput {
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
export const ExperimentsListAllExecutionsOutput =
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
  }) as unknown as Schema.Codec<ExperimentsListAllExecutionsOutput>;

// The operation
/**
 * Get a list of executions of an Experiment resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param experimentName - String that represents a Experiment resource name.
 */
export const ExperimentsListAllExecutions =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ExperimentsListAllExecutionsInput,
    outputSchema: ExperimentsListAllExecutionsOutput,
  }));
// Input Schema
export interface ExperimentsStartInput {
  subscriptionId: string;
  resourceGroupName: string;
  experimentName: string;
}
export const ExperimentsStartInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  experimentName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Chaos/experiments/{experimentName}/start",
    apiVersion: "2025-01-01",
  }),
) as unknown as Schema.Codec<ExperimentsStartInput>;

// Output Schema
export type ExperimentsStartOutput = void;
export const ExperimentsStartOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ExperimentsStartOutput>;

// The operation
/**
 * Start a Experiment resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param experimentName - String that represents a Experiment resource name.
 */
export const ExperimentsStart = /*@__PURE__*/ API.make(() => ({
  inputSchema: ExperimentsStartInput,
  outputSchema: ExperimentsStartOutput,
}));
// Input Schema
export interface ExperimentsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  experimentName: string;
  tags?: Record<string, string>;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
}
export const ExperimentsUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  experimentName: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  identity: Schema.optional(
    Schema.Struct({
      principalId: Schema.optional(Schema.String),
      tenantId: Schema.optional(Schema.String),
      type: Schema.Literals([
        "None",
        "SystemAssigned",
        "UserAssigned",
        "SystemAssigned,UserAssigned",
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
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Chaos/experiments/{experimentName}",
    apiVersion: "2025-01-01",
  }),
) as unknown as Schema.Codec<ExperimentsUpdateInput>;

// Output Schema
export interface ExperimentsUpdateOutput {
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
export const ExperimentsUpdateOutput =
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
  }) as unknown as Schema.Codec<ExperimentsUpdateOutput>;

// The operation
/**
 * The operation to update an experiment.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param experimentName - String that represents a Experiment resource name.
 */
export const ExperimentsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ExperimentsUpdateInput,
  outputSchema: ExperimentsUpdateOutput,
}));
// Input Schema
export interface OperationsListAllInput {}
export const OperationsListAllInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Chaos/operations",
    apiVersion: "2025-01-01",
  }),
) as unknown as Schema.Codec<OperationsListAllInput>;

// Output Schema
export interface OperationsListAllOutput {
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
export const OperationsListAllOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<OperationsListAllOutput>;

// The operation
/**
 * List the operations for the provider
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsListAll = /*@__PURE__*/ API.make(() => ({
  inputSchema: OperationsListAllInput,
  outputSchema: OperationsListAllOutput,
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
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Chaos/locations/{location}/operationStatuses/{operationId}",
      apiVersion: "2025-01-01",
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
 * Returns the current status of an async operation.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 * @param operationId - The ID of an ongoing async operation.
 */
export const OperationStatusesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: OperationStatusesGetInput,
  outputSchema: OperationStatusesGetOutput,
}));
// Input Schema
export interface TargetsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  parentProviderNamespace: string;
  parentResourceType: string;
  parentResourceName: string;
  targetName: string;
  properties: Record<string, unknown>;
  location?: string;
}
export const TargetsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    parentProviderNamespace: Schema.String.pipe(T.PathParam()),
    parentResourceType: Schema.String.pipe(T.PathParam()),
    parentResourceName: Schema.String.pipe(T.PathParam()),
    targetName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Record(Schema.String, Schema.Unknown),
    location: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{parentProviderNamespace}/{parentResourceType}/{parentResourceName}/providers/Microsoft.Chaos/targets/{targetName}",
      apiVersion: "2025-01-01",
    }),
  ) as unknown as Schema.Codec<TargetsCreateOrUpdateInput>;

// Output Schema
export interface TargetsCreateOrUpdateOutput {
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
export const TargetsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<TargetsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a Target resource that extends a tracked regional resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param parentProviderNamespace - The parent resource provider namespace.
 * @param parentResourceType - The parent resource type.
 * @param parentResourceName - The parent resource name.
 * @param targetName - String that represents a Target resource name.
 */
export const TargetsCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: TargetsCreateOrUpdateInput,
  outputSchema: TargetsCreateOrUpdateOutput,
}));
// Input Schema
export interface TargetsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  parentProviderNamespace: string;
  parentResourceType: string;
  parentResourceName: string;
  targetName: string;
}
export const TargetsDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  parentProviderNamespace: Schema.String.pipe(T.PathParam()),
  parentResourceType: Schema.String.pipe(T.PathParam()),
  parentResourceName: Schema.String.pipe(T.PathParam()),
  targetName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{parentProviderNamespace}/{parentResourceType}/{parentResourceName}/providers/Microsoft.Chaos/targets/{targetName}",
    apiVersion: "2025-01-01",
  }),
) as unknown as Schema.Codec<TargetsDeleteInput>;

// Output Schema
export type TargetsDeleteOutput = void;
export const TargetsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<TargetsDeleteOutput>;

// The operation
/**
 * Delete a Target resource that extends a tracked regional resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param parentProviderNamespace - The parent resource provider namespace.
 * @param parentResourceType - The parent resource type.
 * @param parentResourceName - The parent resource name.
 * @param targetName - String that represents a Target resource name.
 */
export const TargetsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: TargetsDeleteInput,
  outputSchema: TargetsDeleteOutput,
}));
// Input Schema
export interface TargetsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  parentProviderNamespace: string;
  parentResourceType: string;
  parentResourceName: string;
  targetName: string;
}
export const TargetsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  parentProviderNamespace: Schema.String.pipe(T.PathParam()),
  parentResourceType: Schema.String.pipe(T.PathParam()),
  parentResourceName: Schema.String.pipe(T.PathParam()),
  targetName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{parentProviderNamespace}/{parentResourceType}/{parentResourceName}/providers/Microsoft.Chaos/targets/{targetName}",
    apiVersion: "2025-01-01",
  }),
) as unknown as Schema.Codec<TargetsGetInput>;

// Output Schema
export interface TargetsGetOutput {
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
export const TargetsGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<TargetsGetOutput>;

// The operation
/**
 * Get a Target resource that extends a tracked regional resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param parentProviderNamespace - The parent resource provider namespace.
 * @param parentResourceType - The parent resource type.
 * @param parentResourceName - The parent resource name.
 * @param targetName - String that represents a Target resource name.
 */
export const TargetsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: TargetsGetInput,
  outputSchema: TargetsGetOutput,
}));
// Input Schema
export interface TargetsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  parentProviderNamespace: string;
  parentResourceType: string;
  parentResourceName: string;
  continuationToken?: string;
}
export const TargetsListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  parentProviderNamespace: Schema.String.pipe(T.PathParam()),
  parentResourceType: Schema.String.pipe(T.PathParam()),
  parentResourceName: Schema.String.pipe(T.PathParam()),
  continuationToken: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{parentProviderNamespace}/{parentResourceType}/{parentResourceName}/providers/Microsoft.Chaos/targets",
    apiVersion: "2025-01-01",
  }),
) as unknown as Schema.Codec<TargetsListInput>;

// Output Schema
export interface TargetsListOutput {
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
export const TargetsListOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<TargetsListOutput>;

// The operation
/**
 * Get a list of Target resources that extend a tracked regional resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param parentProviderNamespace - The parent resource provider namespace.
 * @param parentResourceType - The parent resource type.
 * @param parentResourceName - The parent resource name.
 * @param continuationToken - String that sets the continuation token.
 */
export const TargetsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: TargetsListInput,
  outputSchema: TargetsListOutput,
}));
// Input Schema
export interface TargetTypesGetInput {
  subscriptionId: string;
  location: string;
  targetTypeName: string;
}
export const TargetTypesGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  location: Schema.String.pipe(T.PathParam()),
  targetTypeName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.Chaos/locations/{location}/targetTypes/{targetTypeName}",
    apiVersion: "2025-01-01",
  }),
) as unknown as Schema.Codec<TargetTypesGetInput>;

// Output Schema
export interface TargetTypesGetOutput {
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
export const TargetTypesGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<TargetTypesGetOutput>;

// The operation
/**
 * Get a Target Type resources for given location.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 * @param targetTypeName - String that represents a Target Type resource name.
 */
export const TargetTypesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: TargetTypesGetInput,
  outputSchema: TargetTypesGetOutput,
}));
// Input Schema
export interface TargetTypesListInput {
  subscriptionId: string;
  location: string;
  continuationToken?: string;
}
export const TargetTypesListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  location: Schema.String.pipe(T.PathParam()),
  continuationToken: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.Chaos/locations/{location}/targetTypes",
    apiVersion: "2025-01-01",
  }),
) as unknown as Schema.Codec<TargetTypesListInput>;

// Output Schema
export interface TargetTypesListOutput {
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
export const TargetTypesListOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<TargetTypesListOutput>;

// The operation
/**
 * Get a list of Target Type resources for given location.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 * @param continuationToken - String that sets the continuation token.
 */
export const TargetTypesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: TargetTypesListInput,
  outputSchema: TargetTypesListOutput,
}));
