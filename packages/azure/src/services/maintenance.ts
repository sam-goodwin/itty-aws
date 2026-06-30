/**
 * Azure Maintenance API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface ApplyUpdatesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  providerName: string;
  resourceType: string;
  resourceName: string;
}
export const ApplyUpdatesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    providerName: Schema.String.pipe(T.PathParam()),
    resourceType: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{providerName}/{resourceType}/{resourceName}/providers/Microsoft.Maintenance/applyUpdates/default",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<ApplyUpdatesCreateOrUpdateInput>;

// Output Schema
export interface ApplyUpdatesCreateOrUpdateOutput {
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
export const ApplyUpdatesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ApplyUpdatesCreateOrUpdateOutput>;

// The operation
/**
 * Apply Updates to resource
 *
 * Apply maintenance updates to resource
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - Resource group name
 * @param providerName - Resource provider name
 * @param resourceType - Resource type
 * @param resourceName - Resource identifier
 * @param api-version - Version of the API to be used with the client request.
 */
export const ApplyUpdatesCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ApplyUpdatesCreateOrUpdateInput,
    outputSchema: ApplyUpdatesCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface ApplyUpdatesCreateOrUpdateParentInput {
  subscriptionId: string;
  resourceGroupName: string;
  providerName: string;
  resourceParentType: string;
  resourceParentName: string;
  resourceType: string;
  resourceName: string;
}
export const ApplyUpdatesCreateOrUpdateParentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    providerName: Schema.String.pipe(T.PathParam()),
    resourceParentType: Schema.String.pipe(T.PathParam()),
    resourceParentName: Schema.String.pipe(T.PathParam()),
    resourceType: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{providerName}/{resourceParentType}/{resourceParentName}/{resourceType}/{resourceName}/providers/Microsoft.Maintenance/applyUpdates/default",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<ApplyUpdatesCreateOrUpdateParentInput>;

// Output Schema
export interface ApplyUpdatesCreateOrUpdateParentOutput {
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
export const ApplyUpdatesCreateOrUpdateParentOutput =
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
  }) as unknown as Schema.Codec<ApplyUpdatesCreateOrUpdateParentOutput>;

// The operation
/**
 * Apply Updates to resource with parent
 *
 * Apply maintenance updates to resource with parent
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - Resource group name
 * @param providerName - Resource provider name
 * @param resourceParentType - Resource parent type
 * @param resourceParentName - Resource parent identifier
 * @param resourceType - Resource type
 * @param resourceName - Resource identifier
 * @param api-version - Version of the API to be used with the client request.
 */
export const ApplyUpdatesCreateOrUpdateParent =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ApplyUpdatesCreateOrUpdateParentInput,
    outputSchema: ApplyUpdatesCreateOrUpdateParentOutput,
  }));
// Input Schema
export interface ApplyUpdatesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  providerName: string;
  resourceType: string;
  resourceName: string;
  applyUpdateName: string;
}
export const ApplyUpdatesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  providerName: Schema.String.pipe(T.PathParam()),
  resourceType: Schema.String.pipe(T.PathParam()),
  resourceName: Schema.String.pipe(T.PathParam()),
  applyUpdateName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{providerName}/{resourceType}/{resourceName}/providers/Microsoft.Maintenance/applyUpdates/{applyUpdateName}",
    apiVersion: "2023-04-01",
  }),
) as unknown as Schema.Codec<ApplyUpdatesGetInput>;

// Output Schema
export interface ApplyUpdatesGetOutput {
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
export const ApplyUpdatesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(
    Schema.Struct({
      createdBy: Schema.optional(Schema.String),
      createdByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      createdAt: Schema.optional(Schema.String),
      lastModifiedBy: Schema.optional(Schema.String),
      lastModifiedByType: Schema.optional(
        Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
      ),
      lastModifiedAt: Schema.optional(Schema.String),
    }),
  ),
}) as unknown as Schema.Codec<ApplyUpdatesGetOutput>;

// The operation
/**
 * Track Updates to resource
 *
 * Track maintenance updates to resource
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - Resource group name
 * @param providerName - Resource provider name
 * @param resourceType - Resource type
 * @param resourceName - Resource identifier
 * @param applyUpdateName - applyUpdate Id
 * @param api-version - Version of the API to be used with the client request.
 */
export const ApplyUpdatesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ApplyUpdatesGetInput,
  outputSchema: ApplyUpdatesGetOutput,
}));
// Input Schema
export interface ApplyUpdatesGetParentInput {
  subscriptionId: string;
  resourceGroupName: string;
  providerName: string;
  resourceParentType: string;
  resourceParentName: string;
  resourceType: string;
  resourceName: string;
  applyUpdateName: string;
}
export const ApplyUpdatesGetParentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    providerName: Schema.String.pipe(T.PathParam()),
    resourceParentType: Schema.String.pipe(T.PathParam()),
    resourceParentName: Schema.String.pipe(T.PathParam()),
    resourceType: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    applyUpdateName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{providerName}/{resourceParentType}/{resourceParentName}/{resourceType}/{resourceName}/providers/Microsoft.Maintenance/applyUpdates/{applyUpdateName}",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<ApplyUpdatesGetParentInput>;

// Output Schema
export interface ApplyUpdatesGetParentOutput {
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
export const ApplyUpdatesGetParentOutput =
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
  }) as unknown as Schema.Codec<ApplyUpdatesGetParentOutput>;

// The operation
/**
 * Track Updates to resource with parent
 *
 * Track maintenance updates to resource with parent
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - Resource group name
 * @param providerName - Resource provider name
 * @param resourceParentType - Resource parent type
 * @param resourceParentName - Resource parent identifier
 * @param resourceType - Resource type
 * @param resourceName - Resource identifier
 * @param applyUpdateName - applyUpdate Id
 * @param api-version - Version of the API to be used with the client request.
 */
export const ApplyUpdatesGetParent = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ApplyUpdatesGetParentInput,
    outputSchema: ApplyUpdatesGetParentOutput,
  }),
);
// Input Schema
export interface ConfigurationAssignmentsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  providerName: string;
  resourceType: string;
  resourceName: string;
  configurationAssignmentName: string;
  location?: string;
  properties?: {
    maintenanceConfigurationId?: string;
    resourceId?: string;
    filter?: {
      resourceTypes?: string[];
      resourceGroups?: string[];
      osTypes?: string[];
      locations?: string[];
      tagSettings?: {
        tags?: Record<string, string[]>;
        filterOperator?: "All" | "Any";
      };
    };
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
export const ConfigurationAssignmentsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    providerName: Schema.String.pipe(T.PathParam()),
    resourceType: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    configurationAssignmentName: Schema.String.pipe(T.PathParam()),
    location: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        maintenanceConfigurationId: Schema.optional(Schema.String),
        resourceId: Schema.optional(Schema.String),
        filter: Schema.optional(
          Schema.Struct({
            resourceTypes: Schema.optional(Schema.Array(Schema.String)),
            resourceGroups: Schema.optional(Schema.Array(Schema.String)),
            osTypes: Schema.optional(Schema.Array(Schema.String)),
            locations: Schema.optional(Schema.Array(Schema.String)),
            tagSettings: Schema.optional(
              Schema.Struct({
                tags: Schema.optional(
                  Schema.Record(Schema.String, Schema.Array(Schema.String)),
                ),
                filterOperator: Schema.optional(
                  Schema.Literals(["All", "Any"]),
                ),
              }),
            ),
          }),
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
      path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{providerName}/{resourceType}/{resourceName}/providers/Microsoft.Maintenance/configurationAssignments/{configurationAssignmentName}",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<ConfigurationAssignmentsCreateOrUpdateInput>;

// Output Schema
export interface ConfigurationAssignmentsCreateOrUpdateOutput {
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
export const ConfigurationAssignmentsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ConfigurationAssignmentsCreateOrUpdateOutput>;

// The operation
/**
 * Create configuration assignment
 *
 * Register configuration for resource.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - Resource group name
 * @param providerName - Resource provider name
 * @param resourceType - Resource type
 * @param resourceName - Resource identifier
 * @param configurationAssignmentName - Configuration assignment name
 * @param api-version - Version of the API to be used with the client request.
 */
export const ConfigurationAssignmentsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigurationAssignmentsCreateOrUpdateInput,
    outputSchema: ConfigurationAssignmentsCreateOrUpdateOutput,
  }));
// Input Schema
export interface ConfigurationAssignmentsCreateOrUpdateParentInput {
  subscriptionId: string;
  resourceGroupName: string;
  providerName: string;
  resourceParentType: string;
  resourceParentName: string;
  resourceType: string;
  resourceName: string;
  configurationAssignmentName: string;
  location?: string;
  properties?: {
    maintenanceConfigurationId?: string;
    resourceId?: string;
    filter?: {
      resourceTypes?: string[];
      resourceGroups?: string[];
      osTypes?: string[];
      locations?: string[];
      tagSettings?: {
        tags?: Record<string, string[]>;
        filterOperator?: "All" | "Any";
      };
    };
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
export const ConfigurationAssignmentsCreateOrUpdateParentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    providerName: Schema.String.pipe(T.PathParam()),
    resourceParentType: Schema.String.pipe(T.PathParam()),
    resourceParentName: Schema.String.pipe(T.PathParam()),
    resourceType: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    configurationAssignmentName: Schema.String.pipe(T.PathParam()),
    location: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        maintenanceConfigurationId: Schema.optional(Schema.String),
        resourceId: Schema.optional(Schema.String),
        filter: Schema.optional(
          Schema.Struct({
            resourceTypes: Schema.optional(Schema.Array(Schema.String)),
            resourceGroups: Schema.optional(Schema.Array(Schema.String)),
            osTypes: Schema.optional(Schema.Array(Schema.String)),
            locations: Schema.optional(Schema.Array(Schema.String)),
            tagSettings: Schema.optional(
              Schema.Struct({
                tags: Schema.optional(
                  Schema.Record(Schema.String, Schema.Array(Schema.String)),
                ),
                filterOperator: Schema.optional(
                  Schema.Literals(["All", "Any"]),
                ),
              }),
            ),
          }),
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
      path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{providerName}/{resourceParentType}/{resourceParentName}/{resourceType}/{resourceName}/providers/Microsoft.Maintenance/configurationAssignments/{configurationAssignmentName}",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<ConfigurationAssignmentsCreateOrUpdateParentInput>;

// Output Schema
export interface ConfigurationAssignmentsCreateOrUpdateParentOutput {
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
export const ConfigurationAssignmentsCreateOrUpdateParentOutput =
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
  }) as unknown as Schema.Codec<ConfigurationAssignmentsCreateOrUpdateParentOutput>;

// The operation
/**
 * Create configuration assignment
 *
 * Register configuration for resource.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - Resource group name
 * @param providerName - Resource provider name
 * @param resourceParentType - Resource parent type
 * @param resourceParentName - Resource parent identifier
 * @param resourceType - Resource type
 * @param resourceName - Resource identifier
 * @param configurationAssignmentName - Configuration assignment name
 * @param api-version - Version of the API to be used with the client request.
 */
export const ConfigurationAssignmentsCreateOrUpdateParent =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigurationAssignmentsCreateOrUpdateParentInput,
    outputSchema: ConfigurationAssignmentsCreateOrUpdateParentOutput,
  }));
// Input Schema
export interface ConfigurationAssignmentsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  providerName: string;
  resourceType: string;
  resourceName: string;
  configurationAssignmentName: string;
}
export const ConfigurationAssignmentsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    providerName: Schema.String.pipe(T.PathParam()),
    resourceType: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    configurationAssignmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{providerName}/{resourceType}/{resourceName}/providers/Microsoft.Maintenance/configurationAssignments/{configurationAssignmentName}",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<ConfigurationAssignmentsDeleteInput>;

// Output Schema
export interface ConfigurationAssignmentsDeleteOutput {
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
export const ConfigurationAssignmentsDeleteOutput =
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
  }) as unknown as Schema.Codec<ConfigurationAssignmentsDeleteOutput>;

// The operation
/**
 * Unregister configuration for resource
 *
 * Unregister configuration for resource.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - Resource group name
 * @param providerName - Resource provider name
 * @param resourceType - Resource type
 * @param resourceName - Resource identifier
 * @param configurationAssignmentName - Unique configuration assignment name
 * @param api-version - Version of the API to be used with the client request.
 */
export const ConfigurationAssignmentsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigurationAssignmentsDeleteInput,
    outputSchema: ConfigurationAssignmentsDeleteOutput,
  }));
// Input Schema
export interface ConfigurationAssignmentsDeleteParentInput {
  subscriptionId: string;
  resourceGroupName: string;
  providerName: string;
  resourceParentType: string;
  resourceParentName: string;
  resourceType: string;
  resourceName: string;
  configurationAssignmentName: string;
}
export const ConfigurationAssignmentsDeleteParentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    providerName: Schema.String.pipe(T.PathParam()),
    resourceParentType: Schema.String.pipe(T.PathParam()),
    resourceParentName: Schema.String.pipe(T.PathParam()),
    resourceType: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    configurationAssignmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{providerName}/{resourceParentType}/{resourceParentName}/{resourceType}/{resourceName}/providers/Microsoft.Maintenance/configurationAssignments/{configurationAssignmentName}",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<ConfigurationAssignmentsDeleteParentInput>;

// Output Schema
export interface ConfigurationAssignmentsDeleteParentOutput {
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
export const ConfigurationAssignmentsDeleteParentOutput =
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
  }) as unknown as Schema.Codec<ConfigurationAssignmentsDeleteParentOutput>;

// The operation
/**
 * Unregister configuration for resource
 *
 * Unregister configuration for resource.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - Resource group name
 * @param providerName - Resource provider name
 * @param resourceParentType - Resource parent type
 * @param resourceParentName - Resource parent identifier
 * @param resourceType - Resource type
 * @param resourceName - Resource identifier
 * @param configurationAssignmentName - Unique configuration assignment name
 * @param api-version - Version of the API to be used with the client request.
 */
export const ConfigurationAssignmentsDeleteParent =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigurationAssignmentsDeleteParentInput,
    outputSchema: ConfigurationAssignmentsDeleteParentOutput,
  }));
// Input Schema
export interface ConfigurationAssignmentsForResourceGroupCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  configurationAssignmentName: string;
  location?: string;
  properties?: {
    maintenanceConfigurationId?: string;
    resourceId?: string;
    filter?: {
      resourceTypes?: string[];
      resourceGroups?: string[];
      osTypes?: string[];
      locations?: string[];
      tagSettings?: {
        tags?: Record<string, string[]>;
        filterOperator?: "All" | "Any";
      };
    };
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
export const ConfigurationAssignmentsForResourceGroupCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    configurationAssignmentName: Schema.String.pipe(T.PathParam()),
    location: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        maintenanceConfigurationId: Schema.optional(Schema.String),
        resourceId: Schema.optional(Schema.String),
        filter: Schema.optional(
          Schema.Struct({
            resourceTypes: Schema.optional(Schema.Array(Schema.String)),
            resourceGroups: Schema.optional(Schema.Array(Schema.String)),
            osTypes: Schema.optional(Schema.Array(Schema.String)),
            locations: Schema.optional(Schema.Array(Schema.String)),
            tagSettings: Schema.optional(
              Schema.Struct({
                tags: Schema.optional(
                  Schema.Record(Schema.String, Schema.Array(Schema.String)),
                ),
                filterOperator: Schema.optional(
                  Schema.Literals(["All", "Any"]),
                ),
              }),
            ),
          }),
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
      path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Maintenance/configurationAssignments/{configurationAssignmentName}",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<ConfigurationAssignmentsForResourceGroupCreateOrUpdateInput>;

// Output Schema
export interface ConfigurationAssignmentsForResourceGroupCreateOrUpdateOutput {
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
export const ConfigurationAssignmentsForResourceGroupCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ConfigurationAssignmentsForResourceGroupCreateOrUpdateOutput>;

// The operation
/**
 * Create configuration assignment
 *
 * Register configuration for resource.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - Resource group name
 * @param configurationAssignmentName - Configuration assignment name
 * @param api-version - Version of the API to be used with the client request.
 */
export const ConfigurationAssignmentsForResourceGroupCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigurationAssignmentsForResourceGroupCreateOrUpdateInput,
    outputSchema: ConfigurationAssignmentsForResourceGroupCreateOrUpdateOutput,
  }));
// Input Schema
export interface ConfigurationAssignmentsForResourceGroupDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  configurationAssignmentName: string;
}
export const ConfigurationAssignmentsForResourceGroupDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    configurationAssignmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Maintenance/configurationAssignments/{configurationAssignmentName}",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<ConfigurationAssignmentsForResourceGroupDeleteInput>;

// Output Schema
export interface ConfigurationAssignmentsForResourceGroupDeleteOutput {
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
export const ConfigurationAssignmentsForResourceGroupDeleteOutput =
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
  }) as unknown as Schema.Codec<ConfigurationAssignmentsForResourceGroupDeleteOutput>;

// The operation
/**
 * Unregister configuration for resource
 *
 * Unregister configuration for resource.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - Resource group name
 * @param configurationAssignmentName - Unique configuration assignment name
 * @param api-version - Version of the API to be used with the client request.
 */
export const ConfigurationAssignmentsForResourceGroupDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigurationAssignmentsForResourceGroupDeleteInput,
    outputSchema: ConfigurationAssignmentsForResourceGroupDeleteOutput,
  }));
// Input Schema
export interface ConfigurationAssignmentsForResourceGroupGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  configurationAssignmentName: string;
}
export const ConfigurationAssignmentsForResourceGroupGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    configurationAssignmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Maintenance/configurationAssignments/{configurationAssignmentName}",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<ConfigurationAssignmentsForResourceGroupGetInput>;

// Output Schema
export interface ConfigurationAssignmentsForResourceGroupGetOutput {
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
export const ConfigurationAssignmentsForResourceGroupGetOutput =
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
  }) as unknown as Schema.Codec<ConfigurationAssignmentsForResourceGroupGetOutput>;

// The operation
/**
 * Get configuration assignment
 *
 * Get configuration assignment for resource..
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - Resource group name
 * @param configurationAssignmentName - Configuration assignment name
 * @param api-version - Version of the API to be used with the client request.
 */
export const ConfigurationAssignmentsForResourceGroupGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigurationAssignmentsForResourceGroupGetInput,
    outputSchema: ConfigurationAssignmentsForResourceGroupGetOutput,
  }));
// Input Schema
export interface ConfigurationAssignmentsForResourceGroupUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  configurationAssignmentName: string;
  location?: string;
  properties?: {
    maintenanceConfigurationId?: string;
    resourceId?: string;
    filter?: {
      resourceTypes?: string[];
      resourceGroups?: string[];
      osTypes?: string[];
      locations?: string[];
      tagSettings?: {
        tags?: Record<string, string[]>;
        filterOperator?: "All" | "Any";
      };
    };
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
export const ConfigurationAssignmentsForResourceGroupUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    configurationAssignmentName: Schema.String.pipe(T.PathParam()),
    location: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        maintenanceConfigurationId: Schema.optional(Schema.String),
        resourceId: Schema.optional(Schema.String),
        filter: Schema.optional(
          Schema.Struct({
            resourceTypes: Schema.optional(Schema.Array(Schema.String)),
            resourceGroups: Schema.optional(Schema.Array(Schema.String)),
            osTypes: Schema.optional(Schema.Array(Schema.String)),
            locations: Schema.optional(Schema.Array(Schema.String)),
            tagSettings: Schema.optional(
              Schema.Struct({
                tags: Schema.optional(
                  Schema.Record(Schema.String, Schema.Array(Schema.String)),
                ),
                filterOperator: Schema.optional(
                  Schema.Literals(["All", "Any"]),
                ),
              }),
            ),
          }),
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
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Maintenance/configurationAssignments/{configurationAssignmentName}",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<ConfigurationAssignmentsForResourceGroupUpdateInput>;

// Output Schema
export interface ConfigurationAssignmentsForResourceGroupUpdateOutput {
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
export const ConfigurationAssignmentsForResourceGroupUpdateOutput =
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
  }) as unknown as Schema.Codec<ConfigurationAssignmentsForResourceGroupUpdateOutput>;

// The operation
/**
 * Create configuration assignment
 *
 * Register configuration for resource.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - Resource group name
 * @param configurationAssignmentName - Configuration assignment name
 * @param api-version - Version of the API to be used with the client request.
 */
export const ConfigurationAssignmentsForResourceGroupUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigurationAssignmentsForResourceGroupUpdateInput,
    outputSchema: ConfigurationAssignmentsForResourceGroupUpdateOutput,
  }));
// Input Schema
export interface ConfigurationAssignmentsForSubscriptionsCreateOrUpdateInput {
  subscriptionId: string;
  configurationAssignmentName: string;
  location?: string;
  properties?: {
    maintenanceConfigurationId?: string;
    resourceId?: string;
    filter?: {
      resourceTypes?: string[];
      resourceGroups?: string[];
      osTypes?: string[];
      locations?: string[];
      tagSettings?: {
        tags?: Record<string, string[]>;
        filterOperator?: "All" | "Any";
      };
    };
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
export const ConfigurationAssignmentsForSubscriptionsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    configurationAssignmentName: Schema.String.pipe(T.PathParam()),
    location: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        maintenanceConfigurationId: Schema.optional(Schema.String),
        resourceId: Schema.optional(Schema.String),
        filter: Schema.optional(
          Schema.Struct({
            resourceTypes: Schema.optional(Schema.Array(Schema.String)),
            resourceGroups: Schema.optional(Schema.Array(Schema.String)),
            osTypes: Schema.optional(Schema.Array(Schema.String)),
            locations: Schema.optional(Schema.Array(Schema.String)),
            tagSettings: Schema.optional(
              Schema.Struct({
                tags: Schema.optional(
                  Schema.Record(Schema.String, Schema.Array(Schema.String)),
                ),
                filterOperator: Schema.optional(
                  Schema.Literals(["All", "Any"]),
                ),
              }),
            ),
          }),
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
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Maintenance/configurationAssignments/{configurationAssignmentName}",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<ConfigurationAssignmentsForSubscriptionsCreateOrUpdateInput>;

// Output Schema
export interface ConfigurationAssignmentsForSubscriptionsCreateOrUpdateOutput {
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
export const ConfigurationAssignmentsForSubscriptionsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ConfigurationAssignmentsForSubscriptionsCreateOrUpdateOutput>;

// The operation
/**
 * Create configuration assignment
 *
 * Register configuration for resource.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param configurationAssignmentName - Configuration assignment name
 * @param api-version - Version of the API to be used with the client request.
 */
export const ConfigurationAssignmentsForSubscriptionsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigurationAssignmentsForSubscriptionsCreateOrUpdateInput,
    outputSchema: ConfigurationAssignmentsForSubscriptionsCreateOrUpdateOutput,
  }));
// Input Schema
export interface ConfigurationAssignmentsForSubscriptionsDeleteInput {
  subscriptionId: string;
  configurationAssignmentName: string;
}
export const ConfigurationAssignmentsForSubscriptionsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    configurationAssignmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Maintenance/configurationAssignments/{configurationAssignmentName}",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<ConfigurationAssignmentsForSubscriptionsDeleteInput>;

// Output Schema
export interface ConfigurationAssignmentsForSubscriptionsDeleteOutput {
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
export const ConfigurationAssignmentsForSubscriptionsDeleteOutput =
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
  }) as unknown as Schema.Codec<ConfigurationAssignmentsForSubscriptionsDeleteOutput>;

// The operation
/**
 * Unregister configuration for resource
 *
 * Unregister configuration for resource.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param configurationAssignmentName - Unique configuration assignment name
 * @param api-version - Version of the API to be used with the client request.
 */
export const ConfigurationAssignmentsForSubscriptionsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigurationAssignmentsForSubscriptionsDeleteInput,
    outputSchema: ConfigurationAssignmentsForSubscriptionsDeleteOutput,
  }));
// Input Schema
export interface ConfigurationAssignmentsForSubscriptionsGetInput {
  subscriptionId: string;
  configurationAssignmentName: string;
}
export const ConfigurationAssignmentsForSubscriptionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    configurationAssignmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Maintenance/configurationAssignments/{configurationAssignmentName}",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<ConfigurationAssignmentsForSubscriptionsGetInput>;

// Output Schema
export interface ConfigurationAssignmentsForSubscriptionsGetOutput {
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
export const ConfigurationAssignmentsForSubscriptionsGetOutput =
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
  }) as unknown as Schema.Codec<ConfigurationAssignmentsForSubscriptionsGetOutput>;

// The operation
/**
 * [UNSUPPORTED] Get configuration assignment. This API is not implemented yet.
 *
 * Get configuration assignment for resource.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param configurationAssignmentName - Configuration assignment name
 * @param api-version - Version of the API to be used with the client request.
 */
export const ConfigurationAssignmentsForSubscriptionsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigurationAssignmentsForSubscriptionsGetInput,
    outputSchema: ConfigurationAssignmentsForSubscriptionsGetOutput,
  }));
// Input Schema
export interface ConfigurationAssignmentsForSubscriptionsUpdateInput {
  subscriptionId: string;
  configurationAssignmentName: string;
  location?: string;
  properties?: {
    maintenanceConfigurationId?: string;
    resourceId?: string;
    filter?: {
      resourceTypes?: string[];
      resourceGroups?: string[];
      osTypes?: string[];
      locations?: string[];
      tagSettings?: {
        tags?: Record<string, string[]>;
        filterOperator?: "All" | "Any";
      };
    };
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
export const ConfigurationAssignmentsForSubscriptionsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    configurationAssignmentName: Schema.String.pipe(T.PathParam()),
    location: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        maintenanceConfigurationId: Schema.optional(Schema.String),
        resourceId: Schema.optional(Schema.String),
        filter: Schema.optional(
          Schema.Struct({
            resourceTypes: Schema.optional(Schema.Array(Schema.String)),
            resourceGroups: Schema.optional(Schema.Array(Schema.String)),
            osTypes: Schema.optional(Schema.Array(Schema.String)),
            locations: Schema.optional(Schema.Array(Schema.String)),
            tagSettings: Schema.optional(
              Schema.Struct({
                tags: Schema.optional(
                  Schema.Record(Schema.String, Schema.Array(Schema.String)),
                ),
                filterOperator: Schema.optional(
                  Schema.Literals(["All", "Any"]),
                ),
              }),
            ),
          }),
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
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Maintenance/configurationAssignments/{configurationAssignmentName}",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<ConfigurationAssignmentsForSubscriptionsUpdateInput>;

// Output Schema
export interface ConfigurationAssignmentsForSubscriptionsUpdateOutput {
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
export const ConfigurationAssignmentsForSubscriptionsUpdateOutput =
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
  }) as unknown as Schema.Codec<ConfigurationAssignmentsForSubscriptionsUpdateOutput>;

// The operation
/**
 * Create configuration assignment
 *
 * Register configuration for resource.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param configurationAssignmentName - Configuration assignment name
 * @param api-version - Version of the API to be used with the client request.
 */
export const ConfigurationAssignmentsForSubscriptionsUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigurationAssignmentsForSubscriptionsUpdateInput,
    outputSchema: ConfigurationAssignmentsForSubscriptionsUpdateOutput,
  }));
// Input Schema
export interface ConfigurationAssignmentsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  providerName: string;
  resourceType: string;
  resourceName: string;
  configurationAssignmentName: string;
}
export const ConfigurationAssignmentsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    providerName: Schema.String.pipe(T.PathParam()),
    resourceType: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    configurationAssignmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{providerName}/{resourceType}/{resourceName}/providers/Microsoft.Maintenance/configurationAssignments/{configurationAssignmentName}",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<ConfigurationAssignmentsGetInput>;

// Output Schema
export interface ConfigurationAssignmentsGetOutput {
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
export const ConfigurationAssignmentsGetOutput =
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
  }) as unknown as Schema.Codec<ConfigurationAssignmentsGetOutput>;

// The operation
/**
 * Get configuration assignment
 *
 * Get configuration assignment for resource..
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - Resource group name
 * @param providerName - Resource provider name
 * @param resourceType - Resource type
 * @param resourceName - Resource identifier
 * @param configurationAssignmentName - Configuration assignment name
 * @param api-version - Version of the API to be used with the client request.
 */
export const ConfigurationAssignmentsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ConfigurationAssignmentsGetInput,
    outputSchema: ConfigurationAssignmentsGetOutput,
  }),
);
// Input Schema
export interface ConfigurationAssignmentsGetParentInput {
  subscriptionId: string;
  resourceGroupName: string;
  providerName: string;
  resourceParentType: string;
  resourceParentName: string;
  resourceType: string;
  resourceName: string;
  configurationAssignmentName: string;
}
export const ConfigurationAssignmentsGetParentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    providerName: Schema.String.pipe(T.PathParam()),
    resourceParentType: Schema.String.pipe(T.PathParam()),
    resourceParentName: Schema.String.pipe(T.PathParam()),
    resourceType: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    configurationAssignmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{providerName}/{resourceParentType}/{resourceParentName}/{resourceType}/{resourceName}/providers/Microsoft.Maintenance/configurationAssignments/{configurationAssignmentName}",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<ConfigurationAssignmentsGetParentInput>;

// Output Schema
export interface ConfigurationAssignmentsGetParentOutput {
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
export const ConfigurationAssignmentsGetParentOutput =
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
  }) as unknown as Schema.Codec<ConfigurationAssignmentsGetParentOutput>;

// The operation
/**
 * Get configuration assignment
 *
 * Get configuration assignment for resource..
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - Resource group name
 * @param providerName - Resource provider name
 * @param resourceParentType - Resource parent type
 * @param resourceParentName - Resource parent identifier
 * @param resourceType - Resource type
 * @param resourceName - Resource identifier
 * @param configurationAssignmentName - Configuration assignment name
 * @param api-version - Version of the API to be used with the client request.
 */
export const ConfigurationAssignmentsGetParent =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigurationAssignmentsGetParentInput,
    outputSchema: ConfigurationAssignmentsGetParentOutput,
  }));
// Input Schema
export interface ConfigurationAssignmentsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  providerName: string;
  resourceType: string;
  resourceName: string;
}
export const ConfigurationAssignmentsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    providerName: Schema.String.pipe(T.PathParam()),
    resourceType: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{providerName}/{resourceType}/{resourceName}/providers/Microsoft.Maintenance/configurationAssignments",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<ConfigurationAssignmentsListInput>;

// Output Schema
export interface ConfigurationAssignmentsListOutput {
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
}
export const ConfigurationAssignmentsListOutput =
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
  }) as unknown as Schema.Codec<ConfigurationAssignmentsListOutput>;

// The operation
/**
 * List configurationAssignments for resource
 *
 * List configurationAssignments for resource.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - Resource group name
 * @param providerName - Resource provider name
 * @param resourceType - Resource type
 * @param resourceName - Resource identifier
 * @param api-version - Version of the API to be used with the client request.
 */
export const ConfigurationAssignmentsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigurationAssignmentsListInput,
    outputSchema: ConfigurationAssignmentsListOutput,
  }));
// Input Schema
export interface ConfigurationAssignmentsListParentInput {
  subscriptionId: string;
  resourceGroupName: string;
  providerName: string;
  resourceParentType: string;
  resourceParentName: string;
  resourceType: string;
  resourceName: string;
}
export const ConfigurationAssignmentsListParentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    providerName: Schema.String.pipe(T.PathParam()),
    resourceParentType: Schema.String.pipe(T.PathParam()),
    resourceParentName: Schema.String.pipe(T.PathParam()),
    resourceType: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{providerName}/{resourceParentType}/{resourceParentName}/{resourceType}/{resourceName}/providers/Microsoft.Maintenance/configurationAssignments",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<ConfigurationAssignmentsListParentInput>;

// Output Schema
export interface ConfigurationAssignmentsListParentOutput {
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
}
export const ConfigurationAssignmentsListParentOutput =
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
  }) as unknown as Schema.Codec<ConfigurationAssignmentsListParentOutput>;

// The operation
/**
 * List configurationAssignments for resource
 *
 * List configurationAssignments for resource.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - Resource group name
 * @param providerName - Resource provider name
 * @param resourceParentType - Resource parent type
 * @param resourceParentName - Resource parent identifier
 * @param resourceType - Resource type
 * @param resourceName - Resource identifier
 * @param api-version - Version of the API to be used with the client request.
 */
export const ConfigurationAssignmentsListParent =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigurationAssignmentsListParentInput,
    outputSchema: ConfigurationAssignmentsListParentOutput,
  }));
// Input Schema
export interface ConfigurationAssignmentsWithinSubscriptionListInput {
  subscriptionId: string;
}
export const ConfigurationAssignmentsWithinSubscriptionListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Maintenance/configurationAssignments",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<ConfigurationAssignmentsWithinSubscriptionListInput>;

// Output Schema
export interface ConfigurationAssignmentsWithinSubscriptionListOutput {
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
}
export const ConfigurationAssignmentsWithinSubscriptionListOutput =
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
  }) as unknown as Schema.Codec<ConfigurationAssignmentsWithinSubscriptionListOutput>;

// The operation
/**
 * [UNSUPPORTED] Get configuration assignment within a subscription. This API is not implemented yet.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param api-version - Version of the API to be used with the client request.
 */
export const ConfigurationAssignmentsWithinSubscriptionList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConfigurationAssignmentsWithinSubscriptionListInput,
    outputSchema: ConfigurationAssignmentsWithinSubscriptionListOutput,
  }));
// Input Schema
export interface MaintenanceConfigurationsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  location?: string;
  tags?: Record<string, string>;
  properties?: {
    namespace?: string;
    extensionProperties?: Record<string, string>;
    maintenanceScope?:
      | "Host"
      | "Resource"
      | "OSImage"
      | "Extension"
      | "InGuestPatch"
      | "SQLDB"
      | "SQLManagedInstance";
    maintenanceWindow?: {
      startDateTime?: string;
      expirationDateTime?: string;
      duration?: string;
      timeZone?: string;
      recurEvery?: string;
    };
    visibility?: "Custom" | "Public";
    installPatches?: {
      rebootSetting?: "IfRequired" | "Never" | "Always";
      windowsParameters?: {
        kbNumbersToExclude?: string[];
        kbNumbersToInclude?: string[];
        classificationsToInclude?: string[];
        excludeKbsRequiringReboot?: boolean;
      };
      linuxParameters?: {
        packageNameMasksToExclude?: string[];
        packageNameMasksToInclude?: string[];
        classificationsToInclude?: string[];
      };
    };
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
export const MaintenanceConfigurationsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(
      Schema.Struct({
        namespace: Schema.optional(Schema.String),
        extensionProperties: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        maintenanceScope: Schema.optional(
          Schema.Literals([
            "Host",
            "Resource",
            "OSImage",
            "Extension",
            "InGuestPatch",
            "SQLDB",
            "SQLManagedInstance",
          ]),
        ),
        maintenanceWindow: Schema.optional(
          Schema.Struct({
            startDateTime: Schema.optional(Schema.String),
            expirationDateTime: Schema.optional(Schema.String),
            duration: Schema.optional(Schema.String),
            timeZone: Schema.optional(Schema.String),
            recurEvery: Schema.optional(Schema.String),
          }),
        ),
        visibility: Schema.optional(Schema.Literals(["Custom", "Public"])),
        installPatches: Schema.optional(
          Schema.Struct({
            rebootSetting: Schema.optional(
              Schema.Literals(["IfRequired", "Never", "Always"]),
            ),
            windowsParameters: Schema.optional(
              Schema.Struct({
                kbNumbersToExclude: Schema.optional(
                  Schema.Array(Schema.String),
                ),
                kbNumbersToInclude: Schema.optional(
                  Schema.Array(Schema.String),
                ),
                classificationsToInclude: Schema.optional(
                  Schema.Array(Schema.String),
                ),
                excludeKbsRequiringReboot: Schema.optional(Schema.Boolean),
              }),
            ),
            linuxParameters: Schema.optional(
              Schema.Struct({
                packageNameMasksToExclude: Schema.optional(
                  Schema.Array(Schema.String),
                ),
                packageNameMasksToInclude: Schema.optional(
                  Schema.Array(Schema.String),
                ),
                classificationsToInclude: Schema.optional(
                  Schema.Array(Schema.String),
                ),
              }),
            ),
          }),
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
      path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Maintenance/maintenanceConfigurations/{resourceName}",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<MaintenanceConfigurationsCreateOrUpdateInput>;

// Output Schema
export interface MaintenanceConfigurationsCreateOrUpdateOutput {
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
export const MaintenanceConfigurationsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<MaintenanceConfigurationsCreateOrUpdateOutput>;

// The operation
/**
 * Create or Update configuration record
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - Resource Group Name
 * @param resourceName - Maintenance Configuration Name
 * @param api-version - Version of the API to be used with the client request.
 */
export const MaintenanceConfigurationsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MaintenanceConfigurationsCreateOrUpdateInput,
    outputSchema: MaintenanceConfigurationsCreateOrUpdateOutput,
  }));
// Input Schema
export interface MaintenanceConfigurationsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const MaintenanceConfigurationsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Maintenance/maintenanceConfigurations/{resourceName}",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<MaintenanceConfigurationsDeleteInput>;

// Output Schema
export interface MaintenanceConfigurationsDeleteOutput {
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
export const MaintenanceConfigurationsDeleteOutput =
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
  }) as unknown as Schema.Codec<MaintenanceConfigurationsDeleteOutput>;

// The operation
/**
 * Delete Configuration record
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - Resource Group Name
 * @param resourceName - Maintenance Configuration Name
 * @param api-version - Version of the API to be used with the client request.
 */
export const MaintenanceConfigurationsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MaintenanceConfigurationsDeleteInput,
    outputSchema: MaintenanceConfigurationsDeleteOutput,
  }));
// Input Schema
export interface MaintenanceConfigurationsForResourceGroupListInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const MaintenanceConfigurationsForResourceGroupListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Maintenance/maintenanceConfigurations",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<MaintenanceConfigurationsForResourceGroupListInput>;

// Output Schema
export interface MaintenanceConfigurationsForResourceGroupListOutput {
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
}
export const MaintenanceConfigurationsForResourceGroupListOutput =
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
  }) as unknown as Schema.Codec<MaintenanceConfigurationsForResourceGroupListOutput>;

// The operation
/**
 * Get Configuration records within a subscription and resource group
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - Resource Group Name
 * @param api-version - Version of the API to be used with the client request.
 */
export const MaintenanceConfigurationsForResourceGroupList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MaintenanceConfigurationsForResourceGroupListInput,
    outputSchema: MaintenanceConfigurationsForResourceGroupListOutput,
  }));
// Input Schema
export interface MaintenanceConfigurationsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const MaintenanceConfigurationsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Maintenance/maintenanceConfigurations/{resourceName}",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<MaintenanceConfigurationsGetInput>;

// Output Schema
export interface MaintenanceConfigurationsGetOutput {
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
export const MaintenanceConfigurationsGetOutput =
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
  }) as unknown as Schema.Codec<MaintenanceConfigurationsGetOutput>;

// The operation
/**
 * Get Configuration record
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - Resource Group Name
 * @param resourceName - Maintenance Configuration Name
 * @param api-version - Version of the API to be used with the client request.
 */
export const MaintenanceConfigurationsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MaintenanceConfigurationsGetInput,
    outputSchema: MaintenanceConfigurationsGetOutput,
  }));
// Input Schema
export interface MaintenanceConfigurationsListInput {
  subscriptionId: string;
}
export const MaintenanceConfigurationsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Maintenance/maintenanceConfigurations",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<MaintenanceConfigurationsListInput>;

// Output Schema
export interface MaintenanceConfigurationsListOutput {
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
}
export const MaintenanceConfigurationsListOutput =
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
  }) as unknown as Schema.Codec<MaintenanceConfigurationsListOutput>;

// The operation
/**
 * Get Configuration records within a subscription
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param api-version - Version of the API to be used with the client request.
 */
export const MaintenanceConfigurationsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MaintenanceConfigurationsListInput,
    outputSchema: MaintenanceConfigurationsListOutput,
  }));
// Input Schema
export interface MaintenanceConfigurationsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  location?: string;
  tags?: Record<string, string>;
  properties?: {
    namespace?: string;
    extensionProperties?: Record<string, string>;
    maintenanceScope?:
      | "Host"
      | "Resource"
      | "OSImage"
      | "Extension"
      | "InGuestPatch"
      | "SQLDB"
      | "SQLManagedInstance";
    maintenanceWindow?: {
      startDateTime?: string;
      expirationDateTime?: string;
      duration?: string;
      timeZone?: string;
      recurEvery?: string;
    };
    visibility?: "Custom" | "Public";
    installPatches?: {
      rebootSetting?: "IfRequired" | "Never" | "Always";
      windowsParameters?: {
        kbNumbersToExclude?: string[];
        kbNumbersToInclude?: string[];
        classificationsToInclude?: string[];
        excludeKbsRequiringReboot?: boolean;
      };
      linuxParameters?: {
        packageNameMasksToExclude?: string[];
        packageNameMasksToInclude?: string[];
        classificationsToInclude?: string[];
      };
    };
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
export const MaintenanceConfigurationsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(
      Schema.Struct({
        namespace: Schema.optional(Schema.String),
        extensionProperties: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        maintenanceScope: Schema.optional(
          Schema.Literals([
            "Host",
            "Resource",
            "OSImage",
            "Extension",
            "InGuestPatch",
            "SQLDB",
            "SQLManagedInstance",
          ]),
        ),
        maintenanceWindow: Schema.optional(
          Schema.Struct({
            startDateTime: Schema.optional(Schema.String),
            expirationDateTime: Schema.optional(Schema.String),
            duration: Schema.optional(Schema.String),
            timeZone: Schema.optional(Schema.String),
            recurEvery: Schema.optional(Schema.String),
          }),
        ),
        visibility: Schema.optional(Schema.Literals(["Custom", "Public"])),
        installPatches: Schema.optional(
          Schema.Struct({
            rebootSetting: Schema.optional(
              Schema.Literals(["IfRequired", "Never", "Always"]),
            ),
            windowsParameters: Schema.optional(
              Schema.Struct({
                kbNumbersToExclude: Schema.optional(
                  Schema.Array(Schema.String),
                ),
                kbNumbersToInclude: Schema.optional(
                  Schema.Array(Schema.String),
                ),
                classificationsToInclude: Schema.optional(
                  Schema.Array(Schema.String),
                ),
                excludeKbsRequiringReboot: Schema.optional(Schema.Boolean),
              }),
            ),
            linuxParameters: Schema.optional(
              Schema.Struct({
                packageNameMasksToExclude: Schema.optional(
                  Schema.Array(Schema.String),
                ),
                packageNameMasksToInclude: Schema.optional(
                  Schema.Array(Schema.String),
                ),
                classificationsToInclude: Schema.optional(
                  Schema.Array(Schema.String),
                ),
              }),
            ),
          }),
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
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Maintenance/maintenanceConfigurations/{resourceName}",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<MaintenanceConfigurationsUpdateInput>;

// Output Schema
export interface MaintenanceConfigurationsUpdateOutput {
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
export const MaintenanceConfigurationsUpdateOutput =
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
  }) as unknown as Schema.Codec<MaintenanceConfigurationsUpdateOutput>;

// The operation
/**
 * Patch configuration record
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - Resource Group Name
 * @param resourceName - Maintenance Configuration Name
 * @param api-version - Version of the API to be used with the client request.
 */
export const MaintenanceConfigurationsUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MaintenanceConfigurationsUpdateInput,
    outputSchema: MaintenanceConfigurationsUpdateOutput,
  }));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Maintenance/operations",
    apiVersion: "2023-04-01",
  }),
) as unknown as Schema.Codec<OperationsListInput>;

// Output Schema
export interface OperationsListOutput {
  value?: {
    name?: string;
    display?: {
      provider?: string;
      resource?: string;
      operation?: string;
      description?: string;
    };
    origin?: string;
    properties?: unknown;
    isDataAction?: boolean;
  }[];
}
export const OperationsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        display: Schema.optional(
          Schema.Struct({
            provider: Schema.optional(Schema.String),
            resource: Schema.optional(Schema.String),
            operation: Schema.optional(Schema.String),
            description: Schema.optional(Schema.String),
          }),
        ),
        origin: Schema.optional(Schema.String),
        properties: Schema.optional(Schema.Unknown),
        isDataAction: Schema.optional(Schema.Boolean),
      }),
    ),
  ),
}) as unknown as Schema.Codec<OperationsListOutput>;

// The operation
/**
 * List available operations
 *
 * List the available operations supported by the Microsoft.Maintenance resource provider
 *
 * @param api-version - Version of the API to be used with the client request.
 */
export const OperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface PublicMaintenanceConfigurationsGetInput {
  subscriptionId: string;
  resourceName: string;
}
export const PublicMaintenanceConfigurationsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Maintenance/publicMaintenanceConfigurations/{resourceName}",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<PublicMaintenanceConfigurationsGetInput>;

// Output Schema
export interface PublicMaintenanceConfigurationsGetOutput {
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
export const PublicMaintenanceConfigurationsGetOutput =
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
  }) as unknown as Schema.Codec<PublicMaintenanceConfigurationsGetOutput>;

// The operation
/**
 * Get Public Maintenance Configuration record
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceName - Maintenance Configuration Name
 * @param api-version - Version of the API to be used with the client request.
 */
export const PublicMaintenanceConfigurationsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PublicMaintenanceConfigurationsGetInput,
    outputSchema: PublicMaintenanceConfigurationsGetOutput,
  }));
// Input Schema
export interface PublicMaintenanceConfigurationsListInput {
  subscriptionId: string;
}
export const PublicMaintenanceConfigurationsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Maintenance/publicMaintenanceConfigurations",
      apiVersion: "2023-04-01",
    }),
  ) as unknown as Schema.Codec<PublicMaintenanceConfigurationsListInput>;

// Output Schema
export interface PublicMaintenanceConfigurationsListOutput {
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
}
export const PublicMaintenanceConfigurationsListOutput =
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
  }) as unknown as Schema.Codec<PublicMaintenanceConfigurationsListOutput>;

// The operation
/**
 * Get Public Maintenance Configuration records
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param api-version - Version of the API to be used with the client request.
 */
export const PublicMaintenanceConfigurationsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PublicMaintenanceConfigurationsListInput,
    outputSchema: PublicMaintenanceConfigurationsListOutput,
  }));
// Input Schema
export interface UpdatesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  providerName: string;
  resourceType: string;
  resourceName: string;
}
export const UpdatesListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  providerName: Schema.String.pipe(T.PathParam()),
  resourceType: Schema.String.pipe(T.PathParam()),
  resourceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{providerName}/{resourceType}/{resourceName}/providers/Microsoft.Maintenance/updates",
    apiVersion: "2023-04-01",
  }),
) as unknown as Schema.Codec<UpdatesListInput>;

// Output Schema
export interface UpdatesListOutput {
  value?: {
    maintenanceScope?:
      | "Host"
      | "Resource"
      | "OSImage"
      | "Extension"
      | "InGuestPatch"
      | "SQLDB"
      | "SQLManagedInstance";
    impactType?: "None" | "Freeze" | "Restart" | "Redeploy";
    status?: "Pending" | "InProgress" | "Completed" | "RetryNow" | "RetryLater";
    impactDurationInSec?: number;
    notBefore?: string;
    properties?: { resourceId?: string };
  }[];
}
export const UpdatesListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        maintenanceScope: Schema.optional(
          Schema.Literals([
            "Host",
            "Resource",
            "OSImage",
            "Extension",
            "InGuestPatch",
            "SQLDB",
            "SQLManagedInstance",
          ]),
        ),
        impactType: Schema.optional(
          Schema.Literals(["None", "Freeze", "Restart", "Redeploy"]),
        ),
        status: Schema.optional(
          Schema.Literals([
            "Pending",
            "InProgress",
            "Completed",
            "RetryNow",
            "RetryLater",
          ]),
        ),
        impactDurationInSec: Schema.optional(Schema.Number),
        notBefore: Schema.optional(Schema.String),
        properties: Schema.optional(
          Schema.Struct({
            resourceId: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  ),
}) as unknown as Schema.Codec<UpdatesListOutput>;

// The operation
/**
 * Get Updates to resource
 *
 * Get updates to resources.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - Resource group name
 * @param providerName - Resource provider name
 * @param resourceType - Resource type
 * @param resourceName - Resource identifier
 * @param api-version - Version of the API to be used with the client request.
 */
export const UpdatesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdatesListInput,
  outputSchema: UpdatesListOutput,
}));
// Input Schema
export interface UpdatesListParentInput {
  subscriptionId: string;
  resourceGroupName: string;
  providerName: string;
  resourceParentType: string;
  resourceParentName: string;
  resourceType: string;
  resourceName: string;
}
export const UpdatesListParentInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    providerName: Schema.String.pipe(T.PathParam()),
    resourceParentType: Schema.String.pipe(T.PathParam()),
    resourceParentName: Schema.String.pipe(T.PathParam()),
    resourceType: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{providerName}/{resourceParentType}/{resourceParentName}/{resourceType}/{resourceName}/providers/Microsoft.Maintenance/updates",
    apiVersion: "2023-04-01",
  }),
) as unknown as Schema.Codec<UpdatesListParentInput>;

// Output Schema
export interface UpdatesListParentOutput {
  value?: {
    maintenanceScope?:
      | "Host"
      | "Resource"
      | "OSImage"
      | "Extension"
      | "InGuestPatch"
      | "SQLDB"
      | "SQLManagedInstance";
    impactType?: "None" | "Freeze" | "Restart" | "Redeploy";
    status?: "Pending" | "InProgress" | "Completed" | "RetryNow" | "RetryLater";
    impactDurationInSec?: number;
    notBefore?: string;
    properties?: { resourceId?: string };
  }[];
}
export const UpdatesListParentOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          maintenanceScope: Schema.optional(
            Schema.Literals([
              "Host",
              "Resource",
              "OSImage",
              "Extension",
              "InGuestPatch",
              "SQLDB",
              "SQLManagedInstance",
            ]),
          ),
          impactType: Schema.optional(
            Schema.Literals(["None", "Freeze", "Restart", "Redeploy"]),
          ),
          status: Schema.optional(
            Schema.Literals([
              "Pending",
              "InProgress",
              "Completed",
              "RetryNow",
              "RetryLater",
            ]),
          ),
          impactDurationInSec: Schema.optional(Schema.Number),
          notBefore: Schema.optional(Schema.String),
          properties: Schema.optional(
            Schema.Struct({
              resourceId: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<UpdatesListParentOutput>;

// The operation
/**
 * Get Updates to resource
 *
 * Get updates to resources.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - Resource group name
 * @param providerName - Resource provider name
 * @param resourceParentType - Resource parent type
 * @param resourceParentName - Resource parent identifier
 * @param resourceType - Resource type
 * @param resourceName - Resource identifier
 * @param api-version - Version of the API to be used with the client request.
 */
export const UpdatesListParent = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdatesListParentInput,
  outputSchema: UpdatesListParentOutput,
}));
