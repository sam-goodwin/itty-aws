/**
 * Azure Servicenetworking API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Shared schemas
const OperationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  origin: Schema.optional(Schema.Literals(["user", "system", "user,system"])),
  actionType: Schema.optional(Schema.Literals(["Internal"])),
});
const TrafficControllerSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const systemDataSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  createdBy: Schema.optional(Schema.String),
  createdByType: Schema.optional(
    Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
  ),
  createdAt: Schema.optional(Schema.String),
  lastModifiedBy: Schema.optional(Schema.String),
  lastModifiedByType: Schema.optional(
    Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
  ),
  lastModifiedAt: Schema.optional(Schema.String),
});
const TrafficControllerPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    configurationEndpoints: Schema.optional(Schema.Array(Schema.String)),
    frontends: Schema.optional(
      Schema.Array(Schema.suspend(() => ResourceIdSchema)),
    ),
    associations: Schema.optional(
      Schema.Array(Schema.suspend(() => ResourceIdSchema)),
    ),
    securityPolicies: Schema.optional(
      Schema.Array(Schema.suspend(() => ResourceIdSchema)),
    ),
    securityPolicyConfigurations: Schema.optional(
      Schema.suspend(() => SecurityPolicyConfigurationsSchema),
    ),
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
  });
const ResourceIdSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
});
const SecurityPolicyConfigurationsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    wafSecurityPolicy: Schema.optional(
      Schema.suspend(() => WafSecurityPolicySchema),
    ),
  });
const WafSecurityPolicySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
});
const ProvisioningStateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Provisioning",
  "Updating",
  "Deleting",
  "Accepted",
  "Succeeded",
  "Failed",
  "Canceled",
]);
const TrafficControllerUpdatePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    securityPolicyConfigurations: Schema.optional(
      Schema.suspend(() => SecurityPolicyConfigurationsUpdateSchema),
    ),
  });
const SecurityPolicyConfigurationsUpdateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    wafSecurityPolicy: Schema.optional(
      Schema.suspend(() => WafSecurityPolicyUpdateSchema),
    ),
  });
const WafSecurityPolicyUpdateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.optional(Schema.String),
  },
);
const AssociationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const AssociationPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  associationType: Schema.suspend(() => AssociationTypeSchema),
  subnet: Schema.optional(Schema.suspend(() => AssociationSubnetSchema)),
  provisioningState: Schema.optional(
    Schema.suspend(() => ProvisioningStateSchema),
  ),
});
const AssociationTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "subnets",
]);
const AssociationSubnetSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
});
const AssociationUpdatePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    associationType: Schema.optional(
      Schema.suspend(() => AssociationTypeSchema),
    ),
    subnet: Schema.optional(
      Schema.suspend(() => AssociationSubnetUpdateSchema),
    ),
  });
const AssociationSubnetUpdateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.optional(Schema.String),
  },
);
const FrontendSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const FrontendPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  fqdn: Schema.optional(Schema.String),
  provisioningState: Schema.optional(
    Schema.suspend(() => ProvisioningStateSchema),
  ),
});
const SecurityPolicySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const SecurityPolicyPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    policyType: Schema.optional(Schema.suspend(() => PolicyTypeSchema)),
    wafPolicy: Schema.optional(Schema.suspend(() => WafPolicySchema)),
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
  });
const PolicyTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["waf"]);
const WafPolicySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
});
const SecurityPolicyUpdatePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    wafPolicy: Schema.optional(Schema.suspend(() => WafPolicyUpdateSchema)),
  });
const WafPolicyUpdateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
});

// Input Schema
export const AssociationsInterfaceCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    trafficControllerName: Schema.String.pipe(T.PathParam()),
    associationName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => AssociationPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceNetworking/trafficControllers/{trafficControllerName}/associations/{associationName}",
      apiVersion: "2025-01-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type AssociationsInterfaceCreateOrUpdateInput =
  typeof AssociationsInterfaceCreateOrUpdateInput.Type;

// Output Schema
export const AssociationsInterfaceCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => AssociationPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type AssociationsInterfaceCreateOrUpdateOutput =
  typeof AssociationsInterfaceCreateOrUpdateOutput.Type;

// The operation
/**
 * Create a Association
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param trafficControllerName - traffic controller name for path
 * @param associationName - Name of Association
 */
export const AssociationsInterfaceCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AssociationsInterfaceCreateOrUpdateInput,
    outputSchema: AssociationsInterfaceCreateOrUpdateOutput,
  }));
// Input Schema
export const AssociationsInterfaceDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    trafficControllerName: Schema.String.pipe(T.PathParam()),
    associationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceNetworking/trafficControllers/{trafficControllerName}/associations/{associationName}",
      apiVersion: "2025-01-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type AssociationsInterfaceDeleteInput =
  typeof AssociationsInterfaceDeleteInput.Type;

// Output Schema
export const AssociationsInterfaceDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AssociationsInterfaceDeleteOutput =
  typeof AssociationsInterfaceDeleteOutput.Type;

// The operation
/**
 * Delete a Association
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param trafficControllerName - traffic controller name for path
 * @param associationName - Name of Association
 */
export const AssociationsInterfaceDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AssociationsInterfaceDeleteInput,
    outputSchema: AssociationsInterfaceDeleteOutput,
  }),
);
// Input Schema
export const AssociationsInterfaceGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    trafficControllerName: Schema.String.pipe(T.PathParam()),
    associationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceNetworking/trafficControllers/{trafficControllerName}/associations/{associationName}",
      apiVersion: "2025-01-01",
    }),
  );
export type AssociationsInterfaceGetInput =
  typeof AssociationsInterfaceGetInput.Type;

// Output Schema
export const AssociationsInterfaceGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => AssociationPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type AssociationsInterfaceGetOutput =
  typeof AssociationsInterfaceGetOutput.Type;

// The operation
/**
 * Get a Association
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param trafficControllerName - traffic controller name for path
 * @param associationName - Name of Association
 */
export const AssociationsInterfaceGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AssociationsInterfaceGetInput,
    outputSchema: AssociationsInterfaceGetOutput,
  }),
);
// Input Schema
export const AssociationsInterfaceListByTrafficControllerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    trafficControllerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceNetworking/trafficControllers/{trafficControllerName}/associations",
      apiVersion: "2025-01-01",
    }),
  );
export type AssociationsInterfaceListByTrafficControllerInput =
  typeof AssociationsInterfaceListByTrafficControllerInput.Type;

// Output Schema
export const AssociationsInterfaceListByTrafficControllerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => AssociationSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type AssociationsInterfaceListByTrafficControllerOutput =
  typeof AssociationsInterfaceListByTrafficControllerOutput.Type;

// The operation
/**
 * List Association resources by TrafficController
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param trafficControllerName - traffic controller name for path
 */
export const AssociationsInterfaceListByTrafficController =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AssociationsInterfaceListByTrafficControllerInput,
    outputSchema: AssociationsInterfaceListByTrafficControllerOutput,
  }));
// Input Schema
export const AssociationsInterfaceUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    trafficControllerName: Schema.String.pipe(T.PathParam()),
    associationName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(
      Schema.suspend(() => AssociationUpdatePropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceNetworking/trafficControllers/{trafficControllerName}/associations/{associationName}",
      apiVersion: "2025-01-01",
    }),
  );
export type AssociationsInterfaceUpdateInput =
  typeof AssociationsInterfaceUpdateInput.Type;

// Output Schema
export const AssociationsInterfaceUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => AssociationPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type AssociationsInterfaceUpdateOutput =
  typeof AssociationsInterfaceUpdateOutput.Type;

// The operation
/**
 * Update a Association
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param trafficControllerName - traffic controller name for path
 * @param associationName - Name of Association
 */
export const AssociationsInterfaceUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AssociationsInterfaceUpdateInput,
    outputSchema: AssociationsInterfaceUpdateOutput,
  }),
);
// Input Schema
export const FrontendsInterfaceCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    trafficControllerName: Schema.String.pipe(T.PathParam()),
    frontendName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(Schema.suspend(() => FrontendPropertiesSchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceNetworking/trafficControllers/{trafficControllerName}/frontends/{frontendName}",
      apiVersion: "2025-01-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type FrontendsInterfaceCreateOrUpdateInput =
  typeof FrontendsInterfaceCreateOrUpdateInput.Type;

// Output Schema
export const FrontendsInterfaceCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => FrontendPropertiesSchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type FrontendsInterfaceCreateOrUpdateOutput =
  typeof FrontendsInterfaceCreateOrUpdateOutput.Type;

// The operation
/**
 * Create a Frontend
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param trafficControllerName - traffic controller name for path
 * @param frontendName - Frontends
 */
export const FrontendsInterfaceCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: FrontendsInterfaceCreateOrUpdateInput,
    outputSchema: FrontendsInterfaceCreateOrUpdateOutput,
  }));
// Input Schema
export const FrontendsInterfaceDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    trafficControllerName: Schema.String.pipe(T.PathParam()),
    frontendName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceNetworking/trafficControllers/{trafficControllerName}/frontends/{frontendName}",
      apiVersion: "2025-01-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type FrontendsInterfaceDeleteInput =
  typeof FrontendsInterfaceDeleteInput.Type;

// Output Schema
export const FrontendsInterfaceDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type FrontendsInterfaceDeleteOutput =
  typeof FrontendsInterfaceDeleteOutput.Type;

// The operation
/**
 * Delete a Frontend
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param trafficControllerName - traffic controller name for path
 * @param frontendName - Frontends
 */
export const FrontendsInterfaceDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: FrontendsInterfaceDeleteInput,
    outputSchema: FrontendsInterfaceDeleteOutput,
  }),
);
// Input Schema
export const FrontendsInterfaceGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    trafficControllerName: Schema.String.pipe(T.PathParam()),
    frontendName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceNetworking/trafficControllers/{trafficControllerName}/frontends/{frontendName}",
      apiVersion: "2025-01-01",
    }),
  );
export type FrontendsInterfaceGetInput = typeof FrontendsInterfaceGetInput.Type;

// Output Schema
export const FrontendsInterfaceGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => FrontendPropertiesSchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type FrontendsInterfaceGetOutput =
  typeof FrontendsInterfaceGetOutput.Type;

// The operation
/**
 * Get a Frontend
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param trafficControllerName - traffic controller name for path
 * @param frontendName - Frontends
 */
export const FrontendsInterfaceGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: FrontendsInterfaceGetInput,
    outputSchema: FrontendsInterfaceGetOutput,
  }),
);
// Input Schema
export const FrontendsInterfaceListByTrafficControllerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    trafficControllerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceNetworking/trafficControllers/{trafficControllerName}/frontends",
      apiVersion: "2025-01-01",
    }),
  );
export type FrontendsInterfaceListByTrafficControllerInput =
  typeof FrontendsInterfaceListByTrafficControllerInput.Type;

// Output Schema
export const FrontendsInterfaceListByTrafficControllerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => FrontendSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type FrontendsInterfaceListByTrafficControllerOutput =
  typeof FrontendsInterfaceListByTrafficControllerOutput.Type;

// The operation
/**
 * List Frontend resources by TrafficController
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param trafficControllerName - traffic controller name for path
 */
export const FrontendsInterfaceListByTrafficController =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: FrontendsInterfaceListByTrafficControllerInput,
    outputSchema: FrontendsInterfaceListByTrafficControllerOutput,
  }));
// Input Schema
export const FrontendsInterfaceUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    trafficControllerName: Schema.String.pipe(T.PathParam()),
    frontendName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceNetworking/trafficControllers/{trafficControllerName}/frontends/{frontendName}",
      apiVersion: "2025-01-01",
    }),
  );
export type FrontendsInterfaceUpdateInput =
  typeof FrontendsInterfaceUpdateInput.Type;

// Output Schema
export const FrontendsInterfaceUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => FrontendPropertiesSchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type FrontendsInterfaceUpdateOutput =
  typeof FrontendsInterfaceUpdateOutput.Type;

// The operation
/**
 * Update a Frontend
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param trafficControllerName - traffic controller name for path
 * @param frontendName - Frontends
 */
export const FrontendsInterfaceUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: FrontendsInterfaceUpdateInput,
    outputSchema: FrontendsInterfaceUpdateOutput,
  }),
);
// Input Schema
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.ServiceNetworking/operations",
    apiVersion: "2025-01-01",
  }),
);
export type OperationsListInput = typeof OperationsListInput.Type;

// Output Schema
export const OperationsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(Schema.Array(Schema.suspend(() => OperationSchema))),
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
export const SecurityPoliciesInterfaceCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    trafficControllerName: Schema.String.pipe(T.PathParam()),
    securityPolicyName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => SecurityPolicyPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceNetworking/trafficControllers/{trafficControllerName}/securityPolicies/{securityPolicyName}",
      apiVersion: "2025-01-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type SecurityPoliciesInterfaceCreateOrUpdateInput =
  typeof SecurityPoliciesInterfaceCreateOrUpdateInput.Type;

// Output Schema
export const SecurityPoliciesInterfaceCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => SecurityPolicyPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type SecurityPoliciesInterfaceCreateOrUpdateOutput =
  typeof SecurityPoliciesInterfaceCreateOrUpdateOutput.Type;

// The operation
/**
 * Create a SecurityPolicy
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param trafficControllerName - traffic controller name for path
 * @param securityPolicyName - SecurityPolicy
 */
export const SecurityPoliciesInterfaceCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SecurityPoliciesInterfaceCreateOrUpdateInput,
    outputSchema: SecurityPoliciesInterfaceCreateOrUpdateOutput,
  }));
// Input Schema
export const SecurityPoliciesInterfaceDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    trafficControllerName: Schema.String.pipe(T.PathParam()),
    securityPolicyName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceNetworking/trafficControllers/{trafficControllerName}/securityPolicies/{securityPolicyName}",
      apiVersion: "2025-01-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type SecurityPoliciesInterfaceDeleteInput =
  typeof SecurityPoliciesInterfaceDeleteInput.Type;

// Output Schema
export const SecurityPoliciesInterfaceDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type SecurityPoliciesInterfaceDeleteOutput =
  typeof SecurityPoliciesInterfaceDeleteOutput.Type;

// The operation
/**
 * Delete a SecurityPolicy
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param trafficControllerName - traffic controller name for path
 * @param securityPolicyName - SecurityPolicy
 */
export const SecurityPoliciesInterfaceDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SecurityPoliciesInterfaceDeleteInput,
    outputSchema: SecurityPoliciesInterfaceDeleteOutput,
  }));
// Input Schema
export const SecurityPoliciesInterfaceGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    trafficControllerName: Schema.String.pipe(T.PathParam()),
    securityPolicyName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceNetworking/trafficControllers/{trafficControllerName}/securityPolicies/{securityPolicyName}",
      apiVersion: "2025-01-01",
    }),
  );
export type SecurityPoliciesInterfaceGetInput =
  typeof SecurityPoliciesInterfaceGetInput.Type;

// Output Schema
export const SecurityPoliciesInterfaceGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => SecurityPolicyPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type SecurityPoliciesInterfaceGetOutput =
  typeof SecurityPoliciesInterfaceGetOutput.Type;

// The operation
/**
 * Get a SecurityPolicy
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param trafficControllerName - traffic controller name for path
 * @param securityPolicyName - SecurityPolicy
 */
export const SecurityPoliciesInterfaceGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SecurityPoliciesInterfaceGetInput,
    outputSchema: SecurityPoliciesInterfaceGetOutput,
  }));
// Input Schema
export const SecurityPoliciesInterfaceListByTrafficControllerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    trafficControllerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceNetworking/trafficControllers/{trafficControllerName}/securityPolicies",
      apiVersion: "2025-01-01",
    }),
  );
export type SecurityPoliciesInterfaceListByTrafficControllerInput =
  typeof SecurityPoliciesInterfaceListByTrafficControllerInput.Type;

// Output Schema
export const SecurityPoliciesInterfaceListByTrafficControllerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => SecurityPolicySchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type SecurityPoliciesInterfaceListByTrafficControllerOutput =
  typeof SecurityPoliciesInterfaceListByTrafficControllerOutput.Type;

// The operation
/**
 * List SecurityPolicy resources by TrafficController
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param trafficControllerName - traffic controller name for path
 */
export const SecurityPoliciesInterfaceListByTrafficController =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SecurityPoliciesInterfaceListByTrafficControllerInput,
    outputSchema: SecurityPoliciesInterfaceListByTrafficControllerOutput,
  }));
// Input Schema
export const SecurityPoliciesInterfaceUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    trafficControllerName: Schema.String.pipe(T.PathParam()),
    securityPolicyName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(
      Schema.suspend(() => SecurityPolicyUpdatePropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceNetworking/trafficControllers/{trafficControllerName}/securityPolicies/{securityPolicyName}",
      apiVersion: "2025-01-01",
    }),
  );
export type SecurityPoliciesInterfaceUpdateInput =
  typeof SecurityPoliciesInterfaceUpdateInput.Type;

// Output Schema
export const SecurityPoliciesInterfaceUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => SecurityPolicyPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type SecurityPoliciesInterfaceUpdateOutput =
  typeof SecurityPoliciesInterfaceUpdateOutput.Type;

// The operation
/**
 * Update a SecurityPolicy
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param trafficControllerName - traffic controller name for path
 * @param securityPolicyName - SecurityPolicy
 */
export const SecurityPoliciesInterfaceUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SecurityPoliciesInterfaceUpdateInput,
    outputSchema: SecurityPoliciesInterfaceUpdateOutput,
  }));
// Input Schema
export const TrafficControllerInterfaceCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    trafficControllerName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => TrafficControllerPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceNetworking/trafficControllers/{trafficControllerName}",
      apiVersion: "2025-01-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type TrafficControllerInterfaceCreateOrUpdateInput =
  typeof TrafficControllerInterfaceCreateOrUpdateInput.Type;

// Output Schema
export const TrafficControllerInterfaceCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => TrafficControllerPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type TrafficControllerInterfaceCreateOrUpdateOutput =
  typeof TrafficControllerInterfaceCreateOrUpdateOutput.Type;

// The operation
/**
 * Create a TrafficController
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param trafficControllerName - traffic controller name for path
 */
export const TrafficControllerInterfaceCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: TrafficControllerInterfaceCreateOrUpdateInput,
    outputSchema: TrafficControllerInterfaceCreateOrUpdateOutput,
  }));
// Input Schema
export const TrafficControllerInterfaceDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    trafficControllerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceNetworking/trafficControllers/{trafficControllerName}",
      apiVersion: "2025-01-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type TrafficControllerInterfaceDeleteInput =
  typeof TrafficControllerInterfaceDeleteInput.Type;

// Output Schema
export const TrafficControllerInterfaceDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type TrafficControllerInterfaceDeleteOutput =
  typeof TrafficControllerInterfaceDeleteOutput.Type;

// The operation
/**
 * Delete a TrafficController
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param trafficControllerName - traffic controller name for path
 */
export const TrafficControllerInterfaceDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: TrafficControllerInterfaceDeleteInput,
    outputSchema: TrafficControllerInterfaceDeleteOutput,
  }));
// Input Schema
export const TrafficControllerInterfaceGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    trafficControllerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceNetworking/trafficControllers/{trafficControllerName}",
      apiVersion: "2025-01-01",
    }),
  );
export type TrafficControllerInterfaceGetInput =
  typeof TrafficControllerInterfaceGetInput.Type;

// Output Schema
export const TrafficControllerInterfaceGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => TrafficControllerPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type TrafficControllerInterfaceGetOutput =
  typeof TrafficControllerInterfaceGetOutput.Type;

// The operation
/**
 * Get a TrafficController
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param trafficControllerName - traffic controller name for path
 */
export const TrafficControllerInterfaceGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: TrafficControllerInterfaceGetInput,
    outputSchema: TrafficControllerInterfaceGetOutput,
  }));
// Input Schema
export const TrafficControllerInterfaceListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceNetworking/trafficControllers",
      apiVersion: "2025-01-01",
    }),
  );
export type TrafficControllerInterfaceListByResourceGroupInput =
  typeof TrafficControllerInterfaceListByResourceGroupInput.Type;

// Output Schema
export const TrafficControllerInterfaceListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => TrafficControllerSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type TrafficControllerInterfaceListByResourceGroupOutput =
  typeof TrafficControllerInterfaceListByResourceGroupOutput.Type;

// The operation
/**
 * List TrafficController resources by resource group
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const TrafficControllerInterfaceListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: TrafficControllerInterfaceListByResourceGroupInput,
    outputSchema: TrafficControllerInterfaceListByResourceGroupOutput,
  }));
// Input Schema
export const TrafficControllerInterfaceListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ServiceNetworking/trafficControllers",
      apiVersion: "2025-01-01",
    }),
  );
export type TrafficControllerInterfaceListBySubscriptionInput =
  typeof TrafficControllerInterfaceListBySubscriptionInput.Type;

// Output Schema
export const TrafficControllerInterfaceListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => TrafficControllerSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type TrafficControllerInterfaceListBySubscriptionOutput =
  typeof TrafficControllerInterfaceListBySubscriptionOutput.Type;

// The operation
/**
 * List TrafficController resources by subscription ID
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const TrafficControllerInterfaceListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: TrafficControllerInterfaceListBySubscriptionInput,
    outputSchema: TrafficControllerInterfaceListBySubscriptionOutput,
  }));
// Input Schema
export const TrafficControllerInterfaceUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    trafficControllerName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(
      Schema.suspend(() => TrafficControllerUpdatePropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceNetworking/trafficControllers/{trafficControllerName}",
      apiVersion: "2025-01-01",
    }),
  );
export type TrafficControllerInterfaceUpdateInput =
  typeof TrafficControllerInterfaceUpdateInput.Type;

// Output Schema
export const TrafficControllerInterfaceUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => TrafficControllerPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type TrafficControllerInterfaceUpdateOutput =
  typeof TrafficControllerInterfaceUpdateOutput.Type;

// The operation
/**
 * Update a TrafficController
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param trafficControllerName - traffic controller name for path
 */
export const TrafficControllerInterfaceUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: TrafficControllerInterfaceUpdateInput,
    outputSchema: TrafficControllerInterfaceUpdateOutput,
  }));
