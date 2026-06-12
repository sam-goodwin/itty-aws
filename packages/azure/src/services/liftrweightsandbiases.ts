/**
 * Azure Liftrweightsandbiases API
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
const InstanceResourceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
const InstancePropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  marketplace: Schema.suspend(() => LiftrBase_MarketplaceDetailsSchema),
  user: Schema.suspend(() => LiftrBase_UserDetailsSchema),
  provisioningState: Schema.optional(
    Schema.suspend(() => Azure_ResourceManager_ResourceProvisioningStateSchema),
  ),
  partnerProperties: Schema.suspend(() => PartnerPropertiesSchema),
  singleSignOnProperties: Schema.optional(
    Schema.suspend(() => LiftrBase_SingleSignOnPropertiesV2Schema),
  ),
});
const LiftrBase_MarketplaceDetailsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.optional(Schema.String),
    subscriptionStatus: Schema.optional(
      Schema.suspend(() => LiftrBase_MarketplaceSubscriptionStatusSchema),
    ),
    offerDetails: Schema.suspend(() => LiftrBase_OfferDetailsSchema),
  });
const LiftrBase_MarketplaceSubscriptionStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "PendingFulfillmentStart",
    "Subscribed",
    "Suspended",
    "Unsubscribed",
  ]);
const LiftrBase_OfferDetailsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  publisherId: Schema.String,
  offerId: Schema.String,
  planId: Schema.String,
  planName: Schema.optional(Schema.String),
  termUnit: Schema.optional(Schema.String),
  termId: Schema.optional(Schema.String),
});
const LiftrBase_UserDetailsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  firstName: Schema.optional(Schema.String),
  lastName: Schema.optional(Schema.String),
  emailAddress: Schema.optional(Schema.suspend(() => LiftrBase_emailSchema)),
  upn: Schema.optional(Schema.String),
  phoneNumber: Schema.optional(Schema.String),
});
const LiftrBase_emailSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.String;
const Azure_ResourceManager_ResourceProvisioningStateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Succeeded",
    "Failed",
    "Canceled",
  ]);
const PartnerPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  region: Schema.suspend(() => RegionSchema),
  subdomain: Schema.String,
});
const RegionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "eastus",
  "centralus",
  "westus",
  "westeurope",
  "japaneast",
  "koreacentral",
]);
const LiftrBase_SingleSignOnPropertiesV2Schema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.suspend(() => LiftrBase_SingleSignOnTypeSchema),
    state: Schema.optional(
      Schema.suspend(() => LiftrBase_SingleSignOnStatesSchema),
    ),
    enterpriseAppId: Schema.optional(Schema.String),
    url: Schema.optional(Schema.suspend(() => LiftrBase_UriSchema)),
    aadDomains: Schema.optional(Schema.Array(Schema.String)),
  });
const LiftrBase_SingleSignOnTypeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Saml", "OpenId"]);
const LiftrBase_SingleSignOnStatesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Initial", "Enable", "Disable"]);
const LiftrBase_UriSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.String;
const ManagedServiceIdentityTypeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "None",
    "SystemAssigned",
    "UserAssigned",
    "SystemAssigned,UserAssigned",
  ]);
const UserAssignedIdentitiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Record(
  Schema.String,
  Schema.suspend(() => UserAssignedIdentitySchema),
);
const UserAssignedIdentitySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  principalId: Schema.optional(Schema.String),
  clientId: Schema.optional(Schema.String),
});
const Azure_ResourceManager_CommonTypes_ManagedServiceIdentityUpdateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(
      Schema.Literals([
        "None",
        "SystemAssigned",
        "UserAssigned",
        "SystemAssigned,UserAssigned",
      ]),
    ),
    userAssignedIdentities: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.Struct({
          principalId: Schema.optional(Schema.String),
          clientId: Schema.optional(Schema.String),
        }),
      ),
    ),
  });

// Input Schema
export const InstancesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    instancename: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(Schema.suspend(() => InstancePropertiesSchema)),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.suspend(() => ManagedServiceIdentityTypeSchema),
        userAssignedIdentities: Schema.optional(
          Schema.suspend(() => UserAssignedIdentitiesSchema),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.WeightsAndBiases/instances/{instancename}",
      apiVersion: "2024-09-18",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type InstancesCreateOrUpdateInput =
  typeof InstancesCreateOrUpdateInput.Type;

// Output Schema
export const InstancesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => InstancePropertiesSchema)),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.suspend(() => ManagedServiceIdentityTypeSchema),
        userAssignedIdentities: Schema.optional(
          Schema.suspend(() => UserAssignedIdentitiesSchema),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type InstancesCreateOrUpdateOutput =
  typeof InstancesCreateOrUpdateOutput.Type;

// The operation
/**
 * Create a InstanceResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param instancename - Name of the Instance resource
 */
export const InstancesCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: InstancesCreateOrUpdateInput,
    outputSchema: InstancesCreateOrUpdateOutput,
  }),
);
// Input Schema
export const InstancesDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  instancename: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.WeightsAndBiases/instances/{instancename}",
    apiVersion: "2024-09-18",
    longRunning: { finalStateVia: "location" },
  }),
);
export type InstancesDeleteInput = typeof InstancesDeleteInput.Type;

// Output Schema
export const InstancesDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type InstancesDeleteOutput = typeof InstancesDeleteOutput.Type;

// The operation
/**
 * Delete a InstanceResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param instancename - Name of the Instance resource
 */
export const InstancesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: InstancesDeleteInput,
  outputSchema: InstancesDeleteOutput,
}));
// Input Schema
export const InstancesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  instancename: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.WeightsAndBiases/instances/{instancename}",
    apiVersion: "2024-09-18",
  }),
);
export type InstancesGetInput = typeof InstancesGetInput.Type;

// Output Schema
export const InstancesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => InstancePropertiesSchema)),
  identity: Schema.optional(
    Schema.Struct({
      principalId: Schema.optional(Schema.String),
      tenantId: Schema.optional(Schema.String),
      type: Schema.suspend(() => ManagedServiceIdentityTypeSchema),
      userAssignedIdentities: Schema.optional(
        Schema.suspend(() => UserAssignedIdentitiesSchema),
      ),
    }),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.String,
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type InstancesGetOutput = typeof InstancesGetOutput.Type;

// The operation
/**
 * Get a InstanceResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param instancename - Name of the Instance resource
 */
export const InstancesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: InstancesGetInput,
  outputSchema: InstancesGetOutput,
}));
// Input Schema
export const InstancesListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.WeightsAndBiases/instances",
      apiVersion: "2024-09-18",
    }),
  );
export type InstancesListByResourceGroupInput =
  typeof InstancesListByResourceGroupInput.Type;

// Output Schema
export const InstancesListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => InstanceResourceSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type InstancesListByResourceGroupOutput =
  typeof InstancesListByResourceGroupOutput.Type;

// The operation
/**
 * List InstanceResource resources by resource group
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const InstancesListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: InstancesListByResourceGroupInput,
    outputSchema: InstancesListByResourceGroupOutput,
  }));
// Input Schema
export const InstancesListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.WeightsAndBiases/instances",
      apiVersion: "2024-09-18",
    }),
  );
export type InstancesListBySubscriptionInput =
  typeof InstancesListBySubscriptionInput.Type;

// Output Schema
export const InstancesListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => InstanceResourceSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type InstancesListBySubscriptionOutput =
  typeof InstancesListBySubscriptionOutput.Type;

// The operation
/**
 * List InstanceResource resources by subscription ID
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const InstancesListBySubscription = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: InstancesListBySubscriptionInput,
    outputSchema: InstancesListBySubscriptionOutput,
  }),
);
// Input Schema
export const InstancesUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  instancename: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  identity: Schema.optional(
    Schema.suspend(
      () =>
        Azure_ResourceManager_CommonTypes_ManagedServiceIdentityUpdateSchema,
    ),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.WeightsAndBiases/instances/{instancename}",
    apiVersion: "2024-09-18",
  }),
);
export type InstancesUpdateInput = typeof InstancesUpdateInput.Type;

// Output Schema
export const InstancesUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => InstancePropertiesSchema)),
  identity: Schema.optional(
    Schema.Struct({
      principalId: Schema.optional(Schema.String),
      tenantId: Schema.optional(Schema.String),
      type: Schema.suspend(() => ManagedServiceIdentityTypeSchema),
      userAssignedIdentities: Schema.optional(
        Schema.suspend(() => UserAssignedIdentitiesSchema),
      ),
    }),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.String,
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type InstancesUpdateOutput = typeof InstancesUpdateOutput.Type;

// The operation
/**
 * Update a InstanceResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param instancename - Name of the Instance resource
 */
export const InstancesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: InstancesUpdateInput,
  outputSchema: InstancesUpdateOutput,
}));
// Input Schema
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.WeightsAndBiases/operations",
    apiVersion: "2024-09-18",
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
