/**
 * Azure Databricks API
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
  display: Schema.optional(Schema.suspend(() => OperationDisplaySchema)),
});
const OperationDisplaySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  provider: Schema.optional(Schema.String),
  resource: Schema.optional(Schema.String),
  operation: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
});
const AccessConnectorSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
});
const WorkspaceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
});
const AccessConnectorPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
    referedBy: Schema.optional(Schema.Array(Schema.String)),
  });
const ProvisioningStateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Accepted",
  "Running",
  "Ready",
  "Creating",
  "Created",
  "Deleting",
  "Deleted",
  "Canceled",
  "Failed",
  "Succeeded",
  "Updating",
]);
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
const WorkspacePropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  computeMode: Schema.suspend(() => ComputeModeSchema),
  managedResourceGroupId: Schema.optional(Schema.String),
  parameters: Schema.optional(
    Schema.suspend(() => WorkspaceCustomParametersSchema),
  ),
  provisioningState: Schema.optional(
    Schema.suspend(() => ProvisioningStateSchema),
  ),
  uiDefinitionUri: Schema.optional(Schema.String),
  authorizations: Schema.optional(
    Schema.Array(Schema.suspend(() => WorkspaceProviderAuthorizationSchema)),
  ),
  createdBy: Schema.optional(Schema.suspend(() => CreatedBySchema)),
  updatedBy: Schema.optional(Schema.suspend(() => CreatedBySchema)),
  createdDateTime: Schema.optional(Schema.String),
  workspaceId: Schema.optional(Schema.String),
  workspaceUrl: Schema.optional(Schema.String),
  storageAccountIdentity: Schema.optional(
    Schema.suspend(() => ManagedIdentityConfigurationSchema),
  ),
  managedDiskIdentity: Schema.optional(
    Schema.suspend(() => ManagedIdentityConfigurationSchema),
  ),
  diskEncryptionSetId: Schema.optional(Schema.String),
  encryption: Schema.optional(
    Schema.suspend(() => WorkspacePropertiesEncryptionSchema),
  ),
  enhancedSecurityCompliance: Schema.optional(
    Schema.suspend(() => EnhancedSecurityComplianceDefinitionSchema),
  ),
  privateEndpointConnections: Schema.optional(
    Schema.Array(Schema.suspend(() => PrivateEndpointConnectionSchema)),
  ),
  publicNetworkAccess: Schema.optional(
    Schema.suspend(() => PublicNetworkAccessSchema),
  ),
  requiredNsgRules: Schema.optional(
    Schema.suspend(() => RequiredNsgRulesSchema),
  ),
  defaultCatalog: Schema.optional(
    Schema.suspend(() => DefaultCatalogPropertiesSchema),
  ),
  isUcEnabled: Schema.optional(Schema.Boolean),
  accessConnector: Schema.optional(
    Schema.suspend(() => WorkspacePropertiesAccessConnectorSchema),
  ),
  defaultStorageFirewall: Schema.optional(
    Schema.suspend(() => DefaultStorageFirewallSchema),
  ),
});
const ComputeModeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Serverless",
  "Hybrid",
]);
const WorkspaceCustomParametersSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amlWorkspaceId: Schema.optional(
      Schema.suspend(() => WorkspaceCustomStringParameterSchema),
    ),
    customVirtualNetworkId: Schema.optional(
      Schema.suspend(() => WorkspaceCustomStringParameterSchema),
    ),
    customPublicSubnetName: Schema.optional(
      Schema.suspend(() => WorkspaceCustomStringParameterSchema),
    ),
    customPrivateSubnetName: Schema.optional(
      Schema.suspend(() => WorkspaceCustomStringParameterSchema),
    ),
    enableNoPublicIp: Schema.optional(
      Schema.suspend(() => WorkspaceNoPublicIPBooleanParameterSchema),
    ),
    loadBalancerBackendPoolName: Schema.optional(
      Schema.suspend(() => WorkspaceCustomStringParameterSchema),
    ),
    loadBalancerId: Schema.optional(
      Schema.suspend(() => WorkspaceCustomStringParameterSchema),
    ),
    natGatewayName: Schema.optional(
      Schema.suspend(() => WorkspaceCustomStringParameterSchema),
    ),
    publicIpName: Schema.optional(
      Schema.suspend(() => WorkspaceCustomStringParameterSchema),
    ),
    prepareEncryption: Schema.optional(
      Schema.suspend(() => WorkspaceCustomBooleanParameterSchema),
    ),
    encryption: Schema.optional(
      Schema.suspend(() => WorkspaceEncryptionParameterSchema),
    ),
    requireInfrastructureEncryption: Schema.optional(
      Schema.suspend(() => WorkspaceCustomBooleanParameterSchema),
    ),
    storageAccountName: Schema.optional(
      Schema.suspend(() => WorkspaceCustomStringParameterSchema),
    ),
    storageAccountSkuName: Schema.optional(
      Schema.suspend(() => WorkspaceCustomStringParameterSchema),
    ),
    vnetAddressPrefix: Schema.optional(
      Schema.suspend(() => WorkspaceCustomStringParameterSchema),
    ),
    resourceTags: Schema.optional(
      Schema.suspend(() => WorkspaceCustomObjectParameterSchema),
    ),
  });
const WorkspaceCustomStringParameterSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.suspend(() => CustomParameterTypeSchema)),
    value: Schema.String,
  });
const CustomParameterTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Bool",
  "Object",
  "String",
]);
const WorkspaceNoPublicIPBooleanParameterSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.suspend(() => CustomParameterTypeSchema)),
    value: Schema.Boolean,
  });
const WorkspaceCustomBooleanParameterSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.suspend(() => CustomParameterTypeSchema)),
    value: Schema.Boolean,
  });
const WorkspaceEncryptionParameterSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.suspend(() => CustomParameterTypeSchema)),
    value: Schema.optional(Schema.suspend(() => EncryptionSchema)),
  });
const EncryptionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  keySource: Schema.optional(
    Schema.Literals(["Default", "Microsoft.Keyvault"]),
  ),
  KeyName: Schema.optional(Schema.String),
  keyversion: Schema.optional(Schema.String),
  keyvaulturi: Schema.optional(Schema.String),
});
const WorkspaceCustomObjectParameterSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.suspend(() => CustomParameterTypeSchema)),
    value: Schema.Unknown,
  });
const WorkspaceProviderAuthorizationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    principalId: Schema.String,
    roleDefinitionId: Schema.String,
  });
const CreatedBySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  oid: Schema.optional(Schema.String),
  puid: Schema.optional(Schema.String),
  applicationId: Schema.optional(Schema.String),
});
const ManagedIdentityConfigurationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    principalId: Schema.optional(Schema.String),
    tenantId: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  });
const WorkspacePropertiesEncryptionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entities: Schema.suspend(() => EncryptionEntitiesDefinitionSchema),
  });
const EncryptionEntitiesDefinitionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    managedServices: Schema.optional(Schema.suspend(() => EncryptionV2Schema)),
    managedDisk: Schema.optional(
      Schema.suspend(() => ManagedDiskEncryptionSchema),
    ),
  });
const EncryptionV2Schema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  keySource: Schema.suspend(() => EncryptionKeySourceSchema),
  keyVaultProperties: Schema.optional(
    Schema.suspend(() => EncryptionV2KeyVaultPropertiesSchema),
  ),
});
const EncryptionKeySourceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Microsoft.Keyvault",
]);
const EncryptionV2KeyVaultPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    keyVaultUri: Schema.String,
    keyName: Schema.String,
    keyVersion: Schema.String,
  });
const ManagedDiskEncryptionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  keySource: Schema.suspend(() => EncryptionKeySourceSchema),
  keyVaultProperties: Schema.suspend(
    () => ManagedDiskEncryptionKeyVaultPropertiesSchema,
  ),
  rotationToLatestKeyVersionEnabled: Schema.optional(Schema.Boolean),
});
const ManagedDiskEncryptionKeyVaultPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    keyVaultUri: Schema.String,
    keyName: Schema.String,
    keyVersion: Schema.String,
  });
const EnhancedSecurityComplianceDefinitionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    automaticClusterUpdate: Schema.optional(
      Schema.suspend(() => AutomaticClusterUpdateDefinitionSchema),
    ),
    complianceSecurityProfile: Schema.optional(
      Schema.suspend(() => ComplianceSecurityProfileDefinitionSchema),
    ),
    enhancedSecurityMonitoring: Schema.optional(
      Schema.suspend(() => EnhancedSecurityMonitoringDefinitionSchema),
    ),
  });
const AutomaticClusterUpdateDefinitionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.suspend(() => AutomaticClusterUpdateValueSchema),
    ),
  });
const AutomaticClusterUpdateValueSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Enabled", "Disabled"]);
const ComplianceSecurityProfileDefinitionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    complianceStandards: Schema.optional(Schema.Array(Schema.String)),
    value: Schema.optional(
      Schema.suspend(() => ComplianceSecurityProfileValueSchema),
    ),
  });
const ComplianceSecurityProfileValueSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Enabled", "Disabled"]);
const EnhancedSecurityMonitoringDefinitionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.suspend(() => EnhancedSecurityMonitoringValueSchema),
    ),
  });
const EnhancedSecurityMonitoringValueSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Enabled", "Disabled"]);
const PrivateEndpointConnectionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  });
const PublicNetworkAccessSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Enabled",
  "Disabled",
]);
const RequiredNsgRulesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "AllRules",
  "NoAzureDatabricksRules",
  "NoAzureServiceRules",
]);
const DefaultCatalogPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    initialType: Schema.optional(
      Schema.Literals(["HiveMetastore", "UnityCatalog"]),
    ),
    initialName: Schema.optional(Schema.String),
  });
const WorkspacePropertiesAccessConnectorSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    identityType: Schema.suspend(() => IdentityTypeSchema),
    userAssignedIdentityId: Schema.optional(Schema.String),
  });
const IdentityTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "SystemAssigned",
  "UserAssigned",
]);
const DefaultStorageFirewallSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Disabled", "Enabled"]);
const SkuSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String,
  tier: Schema.optional(Schema.String),
});
const OutboundEnvironmentEndpointSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    category: Schema.optional(Schema.String),
    endpoints: Schema.optional(
      Schema.Array(Schema.suspend(() => EndpointDependencySchema)),
    ),
  });
const EndpointDependencySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  domainName: Schema.optional(Schema.String),
  endpointDetails: Schema.optional(
    Schema.Array(Schema.suspend(() => EndpointDetailSchema)),
  ),
});
const EndpointDetailSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  ipAddress: Schema.optional(Schema.String),
  port: Schema.optional(Schema.Number),
  latency: Schema.optional(Schema.Number),
  isAccessible: Schema.optional(Schema.Boolean),
});
const PrivateEndpointConnectionPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    privateEndpoint: Schema.optional(
      Schema.suspend(() => PrivateEndpointSchema),
    ),
    groupIds: Schema.optional(Schema.Array(Schema.String)),
    privateLinkServiceConnectionState: Schema.suspend(
      () => PrivateLinkServiceConnectionStateSchema,
    ),
    provisioningState: Schema.optional(
      Schema.suspend(() => PrivateEndpointConnectionProvisioningStateSchema),
    ),
  });
const PrivateEndpointSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
});
const PrivateLinkServiceConnectionStateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.suspend(() => PrivateLinkServiceConnectionStatusSchema),
    description: Schema.optional(Schema.String),
    actionsRequired: Schema.optional(Schema.String),
  });
const PrivateLinkServiceConnectionStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Pending",
    "Approved",
    "Rejected",
    "Disconnected",
  ]);
const PrivateEndpointConnectionProvisioningStateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Succeeded",
    "Creating",
    "Updating",
    "Deleting",
    "Failed",
  ]);
const GroupIdInformationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
});
const GroupIdInformationPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    groupId: Schema.optional(Schema.String),
    requiredMembers: Schema.optional(Schema.Array(Schema.String)),
    requiredZoneNames: Schema.optional(Schema.Array(Schema.String)),
  });
const VirtualNetworkPeeringSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
});
const VirtualNetworkPeeringPropertiesFormatSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowVirtualNetworkAccess: Schema.optional(Schema.Boolean),
    allowForwardedTraffic: Schema.optional(Schema.Boolean),
    allowGatewayTransit: Schema.optional(Schema.Boolean),
    useRemoteGateways: Schema.optional(Schema.Boolean),
    databricksVirtualNetwork: Schema.optional(
      Schema.suspend(
        () =>
          VirtualNetworkPeeringPropertiesFormatDatabricksVirtualNetworkSchema,
      ),
    ),
    databricksAddressSpace: Schema.optional(
      Schema.suspend(() => AddressSpaceSchema),
    ),
    remoteVirtualNetwork: Schema.suspend(
      () => VirtualNetworkPeeringPropertiesFormatRemoteVirtualNetworkSchema,
    ),
    remoteAddressSpace: Schema.optional(
      Schema.suspend(() => AddressSpaceSchema),
    ),
    peeringState: Schema.optional(Schema.suspend(() => PeeringStateSchema)),
    provisioningState: Schema.optional(
      Schema.suspend(() => PeeringProvisioningStateSchema),
    ),
  });
const VirtualNetworkPeeringPropertiesFormatDatabricksVirtualNetworkSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
  });
const AddressSpaceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  addressPrefixes: Schema.optional(Schema.Array(Schema.String)),
});
const VirtualNetworkPeeringPropertiesFormatRemoteVirtualNetworkSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
  });
const PeeringStateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Initiated",
  "Connected",
  "Disconnected",
]);
const PeeringProvisioningStateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Succeeded",
    "Updating",
    "Deleting",
    "Failed",
  ]);

// Input Schema
export const AccessConnectorsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    connectorName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => AccessConnectorPropertiesSchema),
    ),
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Databricks/accessConnectors/{connectorName}",
      apiVersion: "2026-01-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type AccessConnectorsCreateOrUpdateInput =
  typeof AccessConnectorsCreateOrUpdateInput.Type;

// Output Schema
export const AccessConnectorsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => AccessConnectorPropertiesSchema),
    ),
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
  });
export type AccessConnectorsCreateOrUpdateOutput =
  typeof AccessConnectorsCreateOrUpdateOutput.Type;

// The operation
/**
 * Creates or updates Azure Databricks Access Connector.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param connectorName - The name of the Azure Databricks Access Connector.
 */
export const AccessConnectorsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AccessConnectorsCreateOrUpdateInput,
    outputSchema: AccessConnectorsCreateOrUpdateOutput,
  }));
// Input Schema
export const AccessConnectorsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    connectorName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Databricks/accessConnectors/{connectorName}",
      apiVersion: "2026-01-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type AccessConnectorsDeleteInput =
  typeof AccessConnectorsDeleteInput.Type;

// Output Schema
export const AccessConnectorsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AccessConnectorsDeleteOutput =
  typeof AccessConnectorsDeleteOutput.Type;

// The operation
/**
 * Deletes the Azure Databricks Access Connector.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param connectorName - The name of the Azure Databricks Access Connector.
 */
export const AccessConnectorsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AccessConnectorsDeleteInput,
    outputSchema: AccessConnectorsDeleteOutput,
  }),
);
// Input Schema
export const AccessConnectorsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    connectorName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Databricks/accessConnectors/{connectorName}",
      apiVersion: "2026-01-01",
    }),
  );
export type AccessConnectorsGetInput = typeof AccessConnectorsGetInput.Type;

// Output Schema
export const AccessConnectorsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => AccessConnectorPropertiesSchema),
    ),
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
  });
export type AccessConnectorsGetOutput = typeof AccessConnectorsGetOutput.Type;

// The operation
/**
 * Gets an Azure Databricks Access Connector.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param connectorName - The name of the Azure Databricks Access Connector.
 */
export const AccessConnectorsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AccessConnectorsGetInput,
  outputSchema: AccessConnectorsGetOutput,
}));
// Input Schema
export const AccessConnectorsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Databricks/accessConnectors",
      apiVersion: "2026-01-01",
    }),
  );
export type AccessConnectorsListByResourceGroupInput =
  typeof AccessConnectorsListByResourceGroupInput.Type;

// Output Schema
export const AccessConnectorsListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => AccessConnectorSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type AccessConnectorsListByResourceGroupOutput =
  typeof AccessConnectorsListByResourceGroupOutput.Type;

// The operation
/**
 * Gets all the Azure Databricks Access Connectors within a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const AccessConnectorsListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AccessConnectorsListByResourceGroupInput,
    outputSchema: AccessConnectorsListByResourceGroupOutput,
  }));
// Input Schema
export const AccessConnectorsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Databricks/accessConnectors",
      apiVersion: "2026-01-01",
    }),
  );
export type AccessConnectorsListBySubscriptionInput =
  typeof AccessConnectorsListBySubscriptionInput.Type;

// Output Schema
export const AccessConnectorsListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => AccessConnectorSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type AccessConnectorsListBySubscriptionOutput =
  typeof AccessConnectorsListBySubscriptionOutput.Type;

// The operation
/**
 * Gets all the Azure Databricks Access Connectors within a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const AccessConnectorsListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AccessConnectorsListBySubscriptionInput,
    outputSchema: AccessConnectorsListBySubscriptionOutput,
  }));
// Input Schema
export const AccessConnectorsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    connectorName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
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
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Databricks/accessConnectors/{connectorName}",
      apiVersion: "2026-01-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type AccessConnectorsUpdateInput =
  typeof AccessConnectorsUpdateInput.Type;

// Output Schema
export const AccessConnectorsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => AccessConnectorPropertiesSchema),
    ),
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
  });
export type AccessConnectorsUpdateOutput =
  typeof AccessConnectorsUpdateOutput.Type;

// The operation
/**
 * Updates an Azure Databricks Access Connector.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param connectorName - The name of the Azure Databricks Access Connector.
 */
export const AccessConnectorsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AccessConnectorsUpdateInput,
    outputSchema: AccessConnectorsUpdateOutput,
  }),
);
// Input Schema
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Databricks/operations",
    apiVersion: "2026-01-01",
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
export const OutboundNetworkDependenciesEndpointsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Databricks/workspaces/{workspaceName}/outboundNetworkDependenciesEndpoints",
      apiVersion: "2026-01-01",
    }),
  );
export type OutboundNetworkDependenciesEndpointsListInput =
  typeof OutboundNetworkDependenciesEndpointsListInput.Type;

// Output Schema
export const OutboundNetworkDependenciesEndpointsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.suspend(() => OutboundEnvironmentEndpointSchema),
  );
export type OutboundNetworkDependenciesEndpointsListOutput =
  typeof OutboundNetworkDependenciesEndpointsListOutput.Type;

// The operation
/**
 * Gets a list of egress endpoints (network endpoints of all outbound dependencies) in the specified Workspace.
 *
 * Gets the list of endpoints that VNET Injected Workspace calls Azure Databricks Control Plane. You must configure outbound access with these endpoints. For more information, see https://docs.microsoft.com/en-us/azure/databricks/administration-guide/cloud-configurations/azure/udr
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 */
export const OutboundNetworkDependenciesEndpointsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: OutboundNetworkDependenciesEndpointsListInput,
    outputSchema: OutboundNetworkDependenciesEndpointsListOutput,
  }));
// Input Schema
export const PrivateEndpointConnectionsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.suspend(() => PrivateEndpointConnectionPropertiesSchema),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Databricks/workspaces/{workspaceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2026-01-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type PrivateEndpointConnectionsCreateInput =
  typeof PrivateEndpointConnectionsCreateInput.Type;

// Output Schema
export const PrivateEndpointConnectionsCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.suspend(() => PrivateEndpointConnectionPropertiesSchema),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  });
export type PrivateEndpointConnectionsCreateOutput =
  typeof PrivateEndpointConnectionsCreateOutput.Type;

// The operation
/**
 * Update private endpoint connection status
 *
 * Update the status of a private endpoint connection with the specified name
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param privateEndpointConnectionName - The name of the private endpoint connection
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
    workspaceName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Databricks/workspaces/{workspaceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2026-01-01",
      longRunning: { finalStateVia: "location" },
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
 * Remove private endpoint connection
 *
 * Remove private endpoint connection with the specified name
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param privateEndpointConnectionName - The name of the private endpoint connection
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
    workspaceName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Databricks/workspaces/{workspaceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2026-01-01",
    }),
  );
export type PrivateEndpointConnectionsGetInput =
  typeof PrivateEndpointConnectionsGetInput.Type;

// Output Schema
export const PrivateEndpointConnectionsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.suspend(() => PrivateEndpointConnectionPropertiesSchema),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  });
export type PrivateEndpointConnectionsGetOutput =
  typeof PrivateEndpointConnectionsGetOutput.Type;

// The operation
/**
 * Get private endpoint connection
 *
 * Get a private endpoint connection properties for a workspace
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param privateEndpointConnectionName - The name of the private endpoint connection
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
    workspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Databricks/workspaces/{workspaceName}/privateEndpointConnections",
      apiVersion: "2026-01-01",
    }),
  );
export type PrivateEndpointConnectionsListInput =
  typeof PrivateEndpointConnectionsListInput.Type;

// Output Schema
export const PrivateEndpointConnectionsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => PrivateEndpointConnectionSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type PrivateEndpointConnectionsListOutput =
  typeof PrivateEndpointConnectionsListOutput.Type;

// The operation
/**
 * List private endpoint connections
 *
 * List private endpoint connections of the workspace
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 */
export const PrivateEndpointConnectionsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsListInput,
    outputSchema: PrivateEndpointConnectionsListOutput,
  }));
// Input Schema
export const PrivateLinkResourcesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    groupId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Databricks/workspaces/{workspaceName}/privateLinkResources/{groupId}",
      apiVersion: "2026-01-01",
    }),
  );
export type PrivateLinkResourcesGetInput =
  typeof PrivateLinkResourcesGetInput.Type;

// Output Schema
export const PrivateLinkResourcesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.suspend(() => GroupIdInformationPropertiesSchema),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  });
export type PrivateLinkResourcesGetOutput =
  typeof PrivateLinkResourcesGetOutput.Type;

// The operation
/**
 * Get the specified private link resource
 *
 * Get the specified private link resource for the given group id (sub-resource)
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param groupId - The name of the private link resource
 */
export const PrivateLinkResourcesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PrivateLinkResourcesGetInput,
    outputSchema: PrivateLinkResourcesGetOutput,
  }),
);
// Input Schema
export const PrivateLinkResourcesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Databricks/workspaces/{workspaceName}/privateLinkResources",
      apiVersion: "2026-01-01",
    }),
  );
export type PrivateLinkResourcesListInput =
  typeof PrivateLinkResourcesListInput.Type;

// Output Schema
export const PrivateLinkResourcesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => GroupIdInformationSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type PrivateLinkResourcesListOutput =
  typeof PrivateLinkResourcesListOutput.Type;

// The operation
/**
 * List private link resources
 *
 * List private link resources for a given workspace
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 */
export const PrivateLinkResourcesList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PrivateLinkResourcesListInput,
    outputSchema: PrivateLinkResourcesListOutput,
  }),
);
// Input Schema
export const VNetPeeringCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    peeringName: Schema.String.pipe(T.PathParam()),
    properties: Schema.suspend(
      () => VirtualNetworkPeeringPropertiesFormatSchema,
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Databricks/workspaces/{workspaceName}/virtualNetworkPeerings/{peeringName}",
      apiVersion: "2026-01-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type VNetPeeringCreateOrUpdateInput =
  typeof VNetPeeringCreateOrUpdateInput.Type;

// Output Schema
export const VNetPeeringCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.suspend(
      () => VirtualNetworkPeeringPropertiesFormatSchema,
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  });
export type VNetPeeringCreateOrUpdateOutput =
  typeof VNetPeeringCreateOrUpdateOutput.Type;

// The operation
/**
 * Creates vNet Peering for workspace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param peeringName - The name of the workspace vNet peering.
 */
export const vNetPeeringCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VNetPeeringCreateOrUpdateInput,
    outputSchema: VNetPeeringCreateOrUpdateOutput,
  }),
);
// Input Schema
export const VNetPeeringDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    peeringName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Databricks/workspaces/{workspaceName}/virtualNetworkPeerings/{peeringName}",
    apiVersion: "2026-01-01",
    longRunning: { finalStateVia: "location" },
  }),
);
export type VNetPeeringDeleteInput = typeof VNetPeeringDeleteInput.Type;

// Output Schema
export const VNetPeeringDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VNetPeeringDeleteOutput = typeof VNetPeeringDeleteOutput.Type;

// The operation
/**
 * Deletes the workspace vNetPeering.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param peeringName - The name of the workspace vNet peering.
 */
export const vNetPeeringDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VNetPeeringDeleteInput,
  outputSchema: VNetPeeringDeleteOutput,
}));
// Input Schema
export const VNetPeeringGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  peeringName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Databricks/workspaces/{workspaceName}/virtualNetworkPeerings/{peeringName}",
    apiVersion: "2026-01-01",
  }),
);
export type VNetPeeringGetInput = typeof VNetPeeringGetInput.Type;

// Output Schema
export const VNetPeeringGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.suspend(() => VirtualNetworkPeeringPropertiesFormatSchema),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
});
export type VNetPeeringGetOutput = typeof VNetPeeringGetOutput.Type;

// The operation
/**
 * Gets the workspace vNet Peering.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param peeringName - The name of the workspace vNet peering.
 */
export const vNetPeeringGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VNetPeeringGetInput,
  outputSchema: VNetPeeringGetOutput,
}));
// Input Schema
export const VNetPeeringListByWorkspaceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Databricks/workspaces/{workspaceName}/virtualNetworkPeerings",
      apiVersion: "2026-01-01",
    }),
  );
export type VNetPeeringListByWorkspaceInput =
  typeof VNetPeeringListByWorkspaceInput.Type;

// Output Schema
export const VNetPeeringListByWorkspaceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => VirtualNetworkPeeringSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type VNetPeeringListByWorkspaceOutput =
  typeof VNetPeeringListByWorkspaceOutput.Type;

// The operation
/**
 * Lists the workspace vNet Peerings.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 */
export const vNetPeeringListByWorkspace = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VNetPeeringListByWorkspaceInput,
    outputSchema: VNetPeeringListByWorkspaceOutput,
  }),
);
// Input Schema
export const WorkspacesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.suspend(() => WorkspacePropertiesSchema),
    sku: Schema.optional(Schema.suspend(() => SkuSchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Databricks/workspaces/{workspaceName}",
      apiVersion: "2026-01-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type WorkspacesCreateOrUpdateInput =
  typeof WorkspacesCreateOrUpdateInput.Type;

// Output Schema
export const WorkspacesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.suspend(() => WorkspacePropertiesSchema),
    sku: Schema.optional(Schema.suspend(() => SkuSchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  });
export type WorkspacesCreateOrUpdateOutput =
  typeof WorkspacesCreateOrUpdateOutput.Type;

// The operation
/**
 * Creates a new workspace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 */
export const WorkspacesCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WorkspacesCreateOrUpdateInput,
    outputSchema: WorkspacesCreateOrUpdateOutput,
  }),
);
// Input Schema
export const WorkspacesDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  forceDeletion: Schema.optional(Schema.Boolean),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Databricks/workspaces/{workspaceName}",
    apiVersion: "2026-01-01",
    longRunning: { finalStateVia: "location" },
  }),
);
export type WorkspacesDeleteInput = typeof WorkspacesDeleteInput.Type;

// Output Schema
export const WorkspacesDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type WorkspacesDeleteOutput = typeof WorkspacesDeleteOutput.Type;

// The operation
/**
 * Deletes the workspace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 * @param forceDeletion - Optional parameter to retain default unity catalog data. By default the data will retained if Uc is enabled on the workspace.
 */
export const WorkspacesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WorkspacesDeleteInput,
  outputSchema: WorkspacesDeleteOutput,
}));
// Input Schema
export const WorkspacesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Databricks/workspaces/{workspaceName}",
    apiVersion: "2026-01-01",
  }),
);
export type WorkspacesGetInput = typeof WorkspacesGetInput.Type;

// Output Schema
export const WorkspacesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.suspend(() => WorkspacePropertiesSchema),
  sku: Schema.optional(Schema.suspend(() => SkuSchema)),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.String,
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
});
export type WorkspacesGetOutput = typeof WorkspacesGetOutput.Type;

// The operation
/**
 * Gets the workspace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 */
export const WorkspacesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WorkspacesGetInput,
  outputSchema: WorkspacesGetOutput,
}));
// Input Schema
export const WorkspacesListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Databricks/workspaces",
      apiVersion: "2026-01-01",
    }),
  );
export type WorkspacesListByResourceGroupInput =
  typeof WorkspacesListByResourceGroupInput.Type;

// Output Schema
export const WorkspacesListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => WorkspaceSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type WorkspacesListByResourceGroupOutput =
  typeof WorkspacesListByResourceGroupOutput.Type;

// The operation
/**
 * Gets all the workspaces within a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const WorkspacesListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkspacesListByResourceGroupInput,
    outputSchema: WorkspacesListByResourceGroupOutput,
  }));
// Input Schema
export const WorkspacesListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Databricks/workspaces",
      apiVersion: "2026-01-01",
    }),
  );
export type WorkspacesListBySubscriptionInput =
  typeof WorkspacesListBySubscriptionInput.Type;

// Output Schema
export const WorkspacesListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => WorkspaceSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type WorkspacesListBySubscriptionOutput =
  typeof WorkspacesListBySubscriptionOutput.Type;

// The operation
/**
 * Gets all the workspaces within a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const WorkspacesListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkspacesListBySubscriptionInput,
    outputSchema: WorkspacesListBySubscriptionOutput,
  }));
// Input Schema
export const WorkspacesUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Databricks/workspaces/{workspaceName}",
    apiVersion: "2026-01-01",
    longRunning: { finalStateVia: "location" },
  }),
);
export type WorkspacesUpdateInput = typeof WorkspacesUpdateInput.Type;

// Output Schema
export const WorkspacesUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    properties: Schema.suspend(() => WorkspacePropertiesSchema),
    sku: Schema.optional(Schema.suspend(() => SkuSchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  },
);
export type WorkspacesUpdateOutput = typeof WorkspacesUpdateOutput.Type;

// The operation
/**
 * Updates a workspace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace.
 */
export const WorkspacesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WorkspacesUpdateInput,
  outputSchema: WorkspacesUpdateOutput,
}));
