/**
 * Azure Mongocluster API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveOutputString } from "../sensitive.ts";

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
const MongoClusterSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
const MongoClusterPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  createMode: Schema.optional(Schema.suspend(() => CreateModeSchema)),
  restoreParameters: Schema.optional(
    Schema.suspend(() => MongoClusterRestoreParametersSchema),
  ),
  replicaParameters: Schema.optional(
    Schema.suspend(() => MongoClusterReplicaParametersSchema),
  ),
  administrator: Schema.optional(
    Schema.suspend(() => AdministratorPropertiesSchema),
  ),
  serverVersion: Schema.optional(Schema.String),
  connectionString: Schema.optional(SensitiveOutputString),
  provisioningState: Schema.optional(
    Schema.suspend(() => ProvisioningStateSchema),
  ),
  clusterStatus: Schema.optional(
    Schema.suspend(() => MongoClusterStatusSchema),
  ),
  publicNetworkAccess: Schema.optional(
    Schema.suspend(() => PublicNetworkAccessSchema),
  ),
  highAvailability: Schema.optional(
    Schema.suspend(() => HighAvailabilityPropertiesSchema),
  ),
  storage: Schema.optional(Schema.suspend(() => StoragePropertiesSchema)),
  sharding: Schema.optional(Schema.suspend(() => ShardingPropertiesSchema)),
  compute: Schema.optional(Schema.suspend(() => ComputePropertiesSchema)),
  backup: Schema.optional(Schema.suspend(() => BackupPropertiesSchema)),
  dataApi: Schema.optional(Schema.suspend(() => DataApiPropertiesSchema)),
  privateEndpointConnections: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
      }),
    ),
  ),
  previewFeatures: Schema.optional(
    Schema.Array(Schema.suspend(() => PreviewFeatureSchema)),
  ),
  replica: Schema.optional(Schema.suspend(() => ReplicationPropertiesSchema)),
  infrastructureVersion: Schema.optional(Schema.String),
  authConfig: Schema.optional(Schema.suspend(() => AuthConfigPropertiesSchema)),
  encryption: Schema.optional(Schema.suspend(() => EncryptionPropertiesSchema)),
});
const CreateModeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Default",
  "PointInTimeRestore",
  "GeoReplica",
  "Replica",
]);
const MongoClusterRestoreParametersSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pointInTimeUTC: Schema.optional(Schema.String),
    sourceResourceId: Schema.optional(
      Schema.suspend(() => MongoClusterResourceIdSchema),
    ),
  });
const MongoClusterResourceIdSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.String;
const MongoClusterReplicaParametersSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sourceResourceId: Schema.suspend(() => MongoClusterResourceIdSchema),
    sourceLocation: Schema.suspend(() => Azure_Core_azureLocationSchema),
  });
const Azure_Core_azureLocationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.String;
const AdministratorPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    userName: Schema.optional(Schema.String),
    password: Schema.optional(SensitiveOutputString),
  },
);
const ProvisioningStateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Succeeded",
  "Failed",
  "Canceled",
  "InProgress",
  "Updating",
  "Dropping",
]);
const MongoClusterStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Ready",
  "Provisioning",
  "Updating",
  "Starting",
  "Stopping",
  "Stopped",
  "Dropping",
]);
const PublicNetworkAccessSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Enabled",
  "Disabled",
]);
const HighAvailabilityPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    targetMode: Schema.optional(
      Schema.suspend(() => HighAvailabilityModeSchema),
    ),
  });
const HighAvailabilityModeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Disabled",
  "SameZone",
  "ZoneRedundantPreferred",
]);
const StoragePropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  sizeGb: Schema.optional(Schema.Number),
  type: Schema.optional(Schema.suspend(() => StorageTypeSchema)),
});
const StorageTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "PremiumSSD",
  "PremiumSSDv2",
]);
const ShardingPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  shardCount: Schema.optional(Schema.Number),
});
const ComputePropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  tier: Schema.optional(Schema.String),
});
const BackupPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  earliestRestoreTime: Schema.optional(Schema.String),
});
const DataApiPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  mode: Schema.optional(Schema.suspend(() => DataApiModeSchema)),
});
const DataApiModeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Enabled",
  "Disabled",
]);
const PreviewFeatureSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "GeoReplicas",
]);
const ReplicationPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  sourceResourceId: Schema.optional(
    Schema.suspend(() => MongoClusterResourceIdSchema),
  ),
  role: Schema.optional(Schema.suspend(() => ReplicationRoleSchema)),
  replicationState: Schema.optional(
    Schema.suspend(() => ReplicationStateSchema),
  ),
});
const ReplicationRoleSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Primary",
  "AsyncReplica",
  "GeoAsyncReplica",
]);
const ReplicationStateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Active",
  "Catchup",
  "Provisioning",
  "Updating",
  "Broken",
  "Reconfiguring",
]);
const AuthConfigPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  allowedModes: Schema.optional(
    Schema.Array(Schema.suspend(() => AuthenticationModeSchema)),
  ),
});
const AuthenticationModeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "NativeAuth",
  "MicrosoftEntraID",
]);
const EncryptionPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  customerManagedKeyEncryption: Schema.optional(
    Schema.suspend(() => CustomerManagedKeyEncryptionPropertiesSchema),
  ),
});
const CustomerManagedKeyEncryptionPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    keyEncryptionKeyIdentity: Schema.optional(
      Schema.suspend(() => KeyEncryptionKeyIdentitySchema),
    ),
    keyEncryptionKeyUrl: Schema.optional(Schema.String),
  });
const KeyEncryptionKeyIdentitySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    identityType: Schema.optional(
      Schema.suspend(() => KeyEncryptionKeyIdentityTypeSchema),
    ),
    userAssignedIdentityResourceId: Schema.optional(Schema.String),
  });
const KeyEncryptionKeyIdentityTypeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["UserAssignedIdentity"]);
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
const MongoClusterUpdatePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    administrator: Schema.optional(
      Schema.suspend(() => AdministratorPropertiesSchema),
    ),
    serverVersion: Schema.optional(Schema.String),
    publicNetworkAccess: Schema.optional(
      Schema.suspend(() => PublicNetworkAccessSchema),
    ),
    highAvailability: Schema.optional(
      Schema.suspend(() => HighAvailabilityPropertiesSchema),
    ),
    storage: Schema.optional(Schema.suspend(() => StoragePropertiesSchema)),
    sharding: Schema.optional(Schema.suspend(() => ShardingPropertiesSchema)),
    compute: Schema.optional(Schema.suspend(() => ComputePropertiesSchema)),
    backup: Schema.optional(Schema.suspend(() => BackupPropertiesSchema)),
    dataApi: Schema.optional(Schema.suspend(() => DataApiPropertiesSchema)),
    previewFeatures: Schema.optional(
      Schema.Array(Schema.suspend(() => PreviewFeatureSchema)),
    ),
    authConfig: Schema.optional(
      Schema.suspend(() => AuthConfigPropertiesSchema),
    ),
    encryption: Schema.optional(
      Schema.suspend(() => EncryptionPropertiesSchema),
    ),
  });
const FirewallRuleSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const FirewallRulePropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  provisioningState: Schema.optional(
    Schema.suspend(() => ProvisioningStateSchema),
  ),
  startIpAddress: Schema.String,
  endIpAddress: Schema.String,
});
const ConnectionStringSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  connectionString: Schema.optional(SensitiveOutputString),
  description: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
});
const PrivateEndpointConnectionResourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
const PrivateEndpointSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
});
const PrivateLinkServiceConnectionStateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(
      Schema.suspend(() => PrivateEndpointServiceConnectionStatusSchema),
    ),
    description: Schema.optional(Schema.String),
    actionsRequired: Schema.optional(Schema.String),
  });
const PrivateEndpointServiceConnectionStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Pending",
    "Approved",
    "Rejected",
  ]);
const PrivateEndpointConnectionProvisioningStateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Succeeded",
    "Creating",
    "Deleting",
    "Failed",
  ]);
const PrivateLinkResourceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const PromoteOptionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Forced",
]);
const PromoteModeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Switchover",
]);
const ReplicaSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const UserSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const UserPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  provisioningState: Schema.optional(
    Schema.suspend(() => ProvisioningStateSchema),
  ),
  identityProvider: Schema.optional(
    Schema.suspend(() => IdentityProviderSchema),
  ),
  roles: Schema.optional(
    Schema.Array(Schema.suspend(() => DatabaseRoleSchema)),
  ),
});
const IdentityProviderSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.suspend(() => IdentityProviderTypeSchema),
});
const IdentityProviderTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "MicrosoftEntraID",
]);
const DatabaseRoleSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  db: Schema.String,
  role: Schema.suspend(() => UserRoleSchema),
});
const UserRoleSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["root"]);

// Input Schema
export const FirewallRulesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    mongoClusterName: Schema.String.pipe(T.PathParam()),
    firewallRuleName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => FirewallRulePropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/mongoClusters/{mongoClusterName}/firewallRules/{firewallRuleName}",
      apiVersion: "2025-09-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type FirewallRulesCreateOrUpdateInput =
  typeof FirewallRulesCreateOrUpdateInput.Type;

// Output Schema
export const FirewallRulesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => FirewallRulePropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type FirewallRulesCreateOrUpdateOutput =
  typeof FirewallRulesCreateOrUpdateOutput.Type;

// The operation
/**
 * Creates a new firewall rule or updates an existing firewall rule on a mongo cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param mongoClusterName - The name of the mongo cluster.
 * @param firewallRuleName - The name of the mongo cluster firewall rule.
 */
export const FirewallRulesCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: FirewallRulesCreateOrUpdateInput,
    outputSchema: FirewallRulesCreateOrUpdateOutput,
  }),
);
// Input Schema
export const FirewallRulesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    mongoClusterName: Schema.String.pipe(T.PathParam()),
    firewallRuleName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/mongoClusters/{mongoClusterName}/firewallRules/{firewallRuleName}",
      apiVersion: "2025-09-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type FirewallRulesDeleteInput = typeof FirewallRulesDeleteInput.Type;

// Output Schema
export const FirewallRulesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type FirewallRulesDeleteOutput = typeof FirewallRulesDeleteOutput.Type;

// The operation
/**
 * Deletes a mongo cluster firewall rule.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param mongoClusterName - The name of the mongo cluster.
 * @param firewallRuleName - The name of the mongo cluster firewall rule.
 */
export const FirewallRulesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FirewallRulesDeleteInput,
  outputSchema: FirewallRulesDeleteOutput,
}));
// Input Schema
export const FirewallRulesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  mongoClusterName: Schema.String.pipe(T.PathParam()),
  firewallRuleName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/mongoClusters/{mongoClusterName}/firewallRules/{firewallRuleName}",
    apiVersion: "2025-09-01",
  }),
);
export type FirewallRulesGetInput = typeof FirewallRulesGetInput.Type;

// Output Schema
export const FirewallRulesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    properties: Schema.optional(
      Schema.suspend(() => FirewallRulePropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  },
);
export type FirewallRulesGetOutput = typeof FirewallRulesGetOutput.Type;

// The operation
/**
 * Gets information about a mongo cluster firewall rule.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param mongoClusterName - The name of the mongo cluster.
 * @param firewallRuleName - The name of the mongo cluster firewall rule.
 */
export const FirewallRulesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FirewallRulesGetInput,
  outputSchema: FirewallRulesGetOutput,
}));
// Input Schema
export const FirewallRulesListByMongoClusterInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    mongoClusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/mongoClusters/{mongoClusterName}/firewallRules",
      apiVersion: "2025-09-01",
    }),
  );
export type FirewallRulesListByMongoClusterInput =
  typeof FirewallRulesListByMongoClusterInput.Type;

// Output Schema
export const FirewallRulesListByMongoClusterOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => FirewallRuleSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type FirewallRulesListByMongoClusterOutput =
  typeof FirewallRulesListByMongoClusterOutput.Type;

// The operation
/**
 * List all the firewall rules in a given mongo cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param mongoClusterName - The name of the mongo cluster.
 */
export const FirewallRulesListByMongoCluster =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: FirewallRulesListByMongoClusterInput,
    outputSchema: FirewallRulesListByMongoClusterOutput,
  }));
// Input Schema
export const MongoClustersCheckNameAvailabilityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DocumentDB/locations/{location}/checkMongoClusterNameAvailability",
      apiVersion: "2025-09-01",
    }),
  );
export type MongoClustersCheckNameAvailabilityInput =
  typeof MongoClustersCheckNameAvailabilityInput.Type;

// Output Schema
export const MongoClustersCheckNameAvailabilityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.Literals(["Invalid", "AlreadyExists"])),
    message: Schema.optional(Schema.String),
  });
export type MongoClustersCheckNameAvailabilityOutput =
  typeof MongoClustersCheckNameAvailabilityOutput.Type;

// The operation
/**
 * Check if mongo cluster name is available for use.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 * @param name - The name of the resource for which availability needs to be checked.
 * @param type - The resource type.
 */
export const MongoClustersCheckNameAvailability =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MongoClustersCheckNameAvailabilityInput,
    outputSchema: MongoClustersCheckNameAvailabilityOutput,
  }));
// Input Schema
export const MongoClustersCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    mongoClusterName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => MongoClusterPropertiesSchema),
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/mongoClusters/{mongoClusterName}",
      apiVersion: "2025-09-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type MongoClustersCreateOrUpdateInput =
  typeof MongoClustersCreateOrUpdateInput.Type;

// Output Schema
export const MongoClustersCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => MongoClusterPropertiesSchema),
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
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type MongoClustersCreateOrUpdateOutput =
  typeof MongoClustersCreateOrUpdateOutput.Type;

// The operation
/**
 * Create or update a mongo cluster. Update overwrites all properties for the resource. To only modify some of the properties, use PATCH.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param mongoClusterName - The name of the mongo cluster.
 */
export const MongoClustersCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: MongoClustersCreateOrUpdateInput,
    outputSchema: MongoClustersCreateOrUpdateOutput,
  }),
);
// Input Schema
export const MongoClustersDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    mongoClusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/mongoClusters/{mongoClusterName}",
      apiVersion: "2025-09-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type MongoClustersDeleteInput = typeof MongoClustersDeleteInput.Type;

// Output Schema
export const MongoClustersDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type MongoClustersDeleteOutput = typeof MongoClustersDeleteOutput.Type;

// The operation
/**
 * Deletes a mongo cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param mongoClusterName - The name of the mongo cluster.
 */
export const MongoClustersDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: MongoClustersDeleteInput,
  outputSchema: MongoClustersDeleteOutput,
}));
// Input Schema
export const MongoClustersGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  mongoClusterName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/mongoClusters/{mongoClusterName}",
    apiVersion: "2025-09-01",
  }),
);
export type MongoClustersGetInput = typeof MongoClustersGetInput.Type;

// Output Schema
export const MongoClustersGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    properties: Schema.optional(
      Schema.suspend(() => MongoClusterPropertiesSchema),
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
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  },
);
export type MongoClustersGetOutput = typeof MongoClustersGetOutput.Type;

// The operation
/**
 * Gets information about a mongo cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param mongoClusterName - The name of the mongo cluster.
 */
export const MongoClustersGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: MongoClustersGetInput,
  outputSchema: MongoClustersGetOutput,
}));
// Input Schema
export const MongoClustersListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.DocumentDB/mongoClusters",
    apiVersion: "2025-09-01",
  }),
);
export type MongoClustersListInput = typeof MongoClustersListInput.Type;

// Output Schema
export const MongoClustersListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => MongoClusterSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type MongoClustersListOutput = typeof MongoClustersListOutput.Type;

// The operation
/**
 * List all the mongo clusters in a given subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const MongoClustersList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: MongoClustersListInput,
  outputSchema: MongoClustersListOutput,
}));
// Input Schema
export const MongoClustersListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/mongoClusters",
      apiVersion: "2025-09-01",
    }),
  );
export type MongoClustersListByResourceGroupInput =
  typeof MongoClustersListByResourceGroupInput.Type;

// Output Schema
export const MongoClustersListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => MongoClusterSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type MongoClustersListByResourceGroupOutput =
  typeof MongoClustersListByResourceGroupOutput.Type;

// The operation
/**
 * List all the mongo clusters in a given resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const MongoClustersListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MongoClustersListByResourceGroupInput,
    outputSchema: MongoClustersListByResourceGroupOutput,
  }));
// Input Schema
export const MongoClustersListConnectionStringsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    mongoClusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/mongoClusters/{mongoClusterName}/listConnectionStrings",
      apiVersion: "2025-09-01",
    }),
  );
export type MongoClustersListConnectionStringsInput =
  typeof MongoClustersListConnectionStringsInput.Type;

// Output Schema
export const MongoClustersListConnectionStringsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    connectionStrings: Schema.optional(
      Schema.Array(Schema.suspend(() => ConnectionStringSchema)),
    ),
  });
export type MongoClustersListConnectionStringsOutput =
  typeof MongoClustersListConnectionStringsOutput.Type;

// The operation
/**
 * List mongo cluster connection strings. This includes the default connection string using SCRAM-SHA-256, as well as other connection strings supported by the cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param mongoClusterName - The name of the mongo cluster.
 */
export const MongoClustersListConnectionStrings =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MongoClustersListConnectionStringsInput,
    outputSchema: MongoClustersListConnectionStringsOutput,
  }));
// Input Schema
export const MongoClustersPromoteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    mongoClusterName: Schema.String.pipe(T.PathParam()),
    promoteOption: Schema.suspend(() => PromoteOptionSchema),
    mode: Schema.optional(Schema.suspend(() => PromoteModeSchema)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/mongoClusters/{mongoClusterName}/promote",
      apiVersion: "2025-09-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type MongoClustersPromoteInput = typeof MongoClustersPromoteInput.Type;

// Output Schema
export const MongoClustersPromoteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type MongoClustersPromoteOutput = typeof MongoClustersPromoteOutput.Type;

// The operation
/**
 * Promotes a replica mongo cluster to a primary role.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param mongoClusterName - The name of the mongo cluster.
 */
export const MongoClustersPromote = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: MongoClustersPromoteInput,
    outputSchema: MongoClustersPromoteOutput,
  }),
);
// Input Schema
export const MongoClustersUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    mongoClusterName: Schema.String.pipe(T.PathParam()),
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
    properties: Schema.optional(
      Schema.suspend(() => MongoClusterUpdatePropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/mongoClusters/{mongoClusterName}",
      apiVersion: "2025-09-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type MongoClustersUpdateInput = typeof MongoClustersUpdateInput.Type;

// Output Schema
export const MongoClustersUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => MongoClusterPropertiesSchema),
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
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type MongoClustersUpdateOutput = typeof MongoClustersUpdateOutput.Type;

// The operation
/**
 * Updates an existing mongo cluster. The request body can contain one to many of the properties present in the normal mongo cluster definition.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param mongoClusterName - The name of the mongo cluster.
 */
export const MongoClustersUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: MongoClustersUpdateInput,
  outputSchema: MongoClustersUpdateOutput,
}));
// Input Schema
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.DocumentDB/operations",
    apiVersion: "2025-09-01",
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
export const PrivateEndpointConnectionsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    mongoClusterName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        groupIds: Schema.optional(Schema.Array(Schema.String)),
        privateEndpoint: Schema.optional(
          Schema.suspend(() => PrivateEndpointSchema),
        ),
        privateLinkServiceConnectionState: Schema.suspend(
          () => PrivateLinkServiceConnectionStateSchema,
        ),
        provisioningState: Schema.optional(
          Schema.suspend(
            () => PrivateEndpointConnectionProvisioningStateSchema,
          ),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/mongoClusters/{mongoClusterName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2025-09-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type PrivateEndpointConnectionsCreateInput =
  typeof PrivateEndpointConnectionsCreateInput.Type;

// Output Schema
export const PrivateEndpointConnectionsCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        groupIds: Schema.optional(Schema.Array(Schema.String)),
        privateEndpoint: Schema.optional(
          Schema.suspend(() => PrivateEndpointSchema),
        ),
        privateLinkServiceConnectionState: Schema.suspend(
          () => PrivateLinkServiceConnectionStateSchema,
        ),
        provisioningState: Schema.optional(
          Schema.suspend(
            () => PrivateEndpointConnectionProvisioningStateSchema,
          ),
        ),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type PrivateEndpointConnectionsCreateOutput =
  typeof PrivateEndpointConnectionsCreateOutput.Type;

// The operation
/**
 * Create a Private endpoint connection
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param mongoClusterName - The name of the mongo cluster.
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource.
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
    mongoClusterName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/mongoClusters/{mongoClusterName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2025-09-01",
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
 * Delete the private endpoint connection
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param mongoClusterName - The name of the mongo cluster.
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource.
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
    mongoClusterName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/mongoClusters/{mongoClusterName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2025-09-01",
    }),
  );
export type PrivateEndpointConnectionsGetInput =
  typeof PrivateEndpointConnectionsGetInput.Type;

// Output Schema
export const PrivateEndpointConnectionsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        groupIds: Schema.optional(Schema.Array(Schema.String)),
        privateEndpoint: Schema.optional(
          Schema.suspend(() => PrivateEndpointSchema),
        ),
        privateLinkServiceConnectionState: Schema.suspend(
          () => PrivateLinkServiceConnectionStateSchema,
        ),
        provisioningState: Schema.optional(
          Schema.suspend(
            () => PrivateEndpointConnectionProvisioningStateSchema,
          ),
        ),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type PrivateEndpointConnectionsGetOutput =
  typeof PrivateEndpointConnectionsGetOutput.Type;

// The operation
/**
 * Get a specific private connection
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param mongoClusterName - The name of the mongo cluster.
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource.
 */
export const PrivateEndpointConnectionsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsGetInput,
    outputSchema: PrivateEndpointConnectionsGetOutput,
  }));
// Input Schema
export const PrivateEndpointConnectionsListByMongoClusterInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    mongoClusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/mongoClusters/{mongoClusterName}/privateEndpointConnections",
      apiVersion: "2025-09-01",
    }),
  );
export type PrivateEndpointConnectionsListByMongoClusterInput =
  typeof PrivateEndpointConnectionsListByMongoClusterInput.Type;

// Output Schema
export const PrivateEndpointConnectionsListByMongoClusterOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.suspend(() => PrivateEndpointConnectionResourceSchema),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type PrivateEndpointConnectionsListByMongoClusterOutput =
  typeof PrivateEndpointConnectionsListByMongoClusterOutput.Type;

// The operation
/**
 * List existing private connections
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param mongoClusterName - The name of the mongo cluster.
 */
export const PrivateEndpointConnectionsListByMongoCluster =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsListByMongoClusterInput,
    outputSchema: PrivateEndpointConnectionsListByMongoClusterOutput,
  }));
// Input Schema
export const PrivateLinksListByMongoClusterInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    mongoClusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/mongoClusters/{mongoClusterName}/privateLinkResources",
      apiVersion: "2025-09-01",
    }),
  );
export type PrivateLinksListByMongoClusterInput =
  typeof PrivateLinksListByMongoClusterInput.Type;

// Output Schema
export const PrivateLinksListByMongoClusterOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => PrivateLinkResourceSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type PrivateLinksListByMongoClusterOutput =
  typeof PrivateLinksListByMongoClusterOutput.Type;

// The operation
/**
 * list private links on the given resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param mongoClusterName - The name of the mongo cluster.
 */
export const PrivateLinksListByMongoCluster =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinksListByMongoClusterInput,
    outputSchema: PrivateLinksListByMongoClusterOutput,
  }));
// Input Schema
export const ReplicasListByParentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    mongoClusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/mongoClusters/{mongoClusterName}/replicas",
      apiVersion: "2025-09-01",
    }),
  );
export type ReplicasListByParentInput = typeof ReplicasListByParentInput.Type;

// Output Schema
export const ReplicasListByParentOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => ReplicaSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type ReplicasListByParentOutput = typeof ReplicasListByParentOutput.Type;

// The operation
/**
 * List all the replicas for the mongo cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param mongoClusterName - The name of the mongo cluster.
 */
export const ReplicasListByParent = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ReplicasListByParentInput,
    outputSchema: ReplicasListByParentOutput,
  }),
);
// Input Schema
export const UsersCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    mongoClusterName: Schema.String.pipe(T.PathParam()),
    userName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(Schema.suspend(() => UserPropertiesSchema)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/mongoClusters/{mongoClusterName}/users/{userName}",
      apiVersion: "2025-09-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type UsersCreateOrUpdateInput = typeof UsersCreateOrUpdateInput.Type;

// Output Schema
export const UsersCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => UserPropertiesSchema)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type UsersCreateOrUpdateOutput = typeof UsersCreateOrUpdateOutput.Type;

// The operation
/**
 * Creates a new user or updates an existing user on a mongo cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param mongoClusterName - The name of the mongo cluster.
 * @param userName - The name of the mongo cluster user.
 */
export const UsersCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UsersCreateOrUpdateInput,
  outputSchema: UsersCreateOrUpdateOutput,
}));
// Input Schema
export const UsersDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  mongoClusterName: Schema.String.pipe(T.PathParam()),
  userName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/mongoClusters/{mongoClusterName}/users/{userName}",
    apiVersion: "2025-09-01",
    longRunning: { finalStateVia: "location" },
  }),
);
export type UsersDeleteInput = typeof UsersDeleteInput.Type;

// Output Schema
export const UsersDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type UsersDeleteOutput = typeof UsersDeleteOutput.Type;

// The operation
/**
 * Deletes a mongo cluster user.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param mongoClusterName - The name of the mongo cluster.
 * @param userName - The name of the mongo cluster user.
 */
export const UsersDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UsersDeleteInput,
  outputSchema: UsersDeleteOutput,
}));
// Input Schema
export const UsersGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  mongoClusterName: Schema.String.pipe(T.PathParam()),
  userName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/mongoClusters/{mongoClusterName}/users/{userName}",
    apiVersion: "2025-09-01",
  }),
);
export type UsersGetInput = typeof UsersGetInput.Type;

// Output Schema
export const UsersGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => UserPropertiesSchema)),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type UsersGetOutput = typeof UsersGetOutput.Type;

// The operation
/**
 * Gets the defintion of a Mongo cluster user.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param mongoClusterName - The name of the mongo cluster.
 * @param userName - The name of the mongo cluster user.
 */
export const UsersGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UsersGetInput,
  outputSchema: UsersGetOutput,
}));
// Input Schema
export const UsersListByMongoClusterInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    mongoClusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/mongoClusters/{mongoClusterName}/users",
      apiVersion: "2025-09-01",
    }),
  );
export type UsersListByMongoClusterInput =
  typeof UsersListByMongoClusterInput.Type;

// Output Schema
export const UsersListByMongoClusterOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => UserSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type UsersListByMongoClusterOutput =
  typeof UsersListByMongoClusterOutput.Type;

// The operation
/**
 * List all the users on a mongo cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param mongoClusterName - The name of the mongo cluster.
 */
export const UsersListByMongoCluster = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: UsersListByMongoClusterInput,
    outputSchema: UsersListByMongoClusterOutput,
  }),
);
