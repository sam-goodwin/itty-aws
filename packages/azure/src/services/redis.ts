/**
 * Azure Redis API
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
  operation: Schema.optional(Schema.String),
  resource: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
});
const OperationStatusResultSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  status: Schema.String,
  percentComplete: Schema.optional(Schema.Number),
  startTime: Schema.optional(Schema.String),
  endTime: Schema.optional(Schema.String),
  operations: Schema.optional(Schema.Array(Schema.Unknown)),
  error: Schema.optional(Schema.suspend(() => ErrorDetailSchema)),
});
const ErrorDetailSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  code: Schema.optional(Schema.String),
  message: Schema.optional(Schema.String),
  target: Schema.optional(Schema.String),
  details: Schema.optional(Schema.Array(Schema.Unknown)),
  additionalInfo: Schema.optional(
    Schema.Array(Schema.suspend(() => ErrorAdditionalInfoSchema)),
  ),
});
const ErrorAdditionalInfoSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.optional(Schema.String),
  info: Schema.optional(Schema.Unknown),
});
const RedisResourceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
const RedisPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  redisConfiguration: Schema.optional(
    Schema.suspend(() => RedisCommonPropertiesRedisConfigurationSchema),
  ),
  redisVersion: Schema.optional(Schema.String),
  enableNonSslPort: Schema.optional(Schema.Boolean),
  replicasPerMaster: Schema.optional(Schema.Number),
  replicasPerPrimary: Schema.optional(Schema.Number),
  tenantSettings: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  shardCount: Schema.optional(Schema.Number),
  minimumTlsVersion: Schema.optional(Schema.suspend(() => TlsVersionSchema)),
  publicNetworkAccess: Schema.optional(
    Schema.suspend(() => PublicNetworkAccessSchema),
  ),
  updateChannel: Schema.optional(Schema.suspend(() => UpdateChannelSchema)),
  disableAccessKeyAuthentication: Schema.optional(Schema.Boolean),
  zonalAllocationPolicy: Schema.optional(
    Schema.suspend(() => ZonalAllocationPolicySchema),
  ),
});
const RedisCommonPropertiesRedisConfigurationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    "rdb-backup-enabled": Schema.optional(Schema.String),
    "rdb-backup-frequency": Schema.optional(Schema.String),
    "rdb-backup-max-snapshot-count": Schema.optional(Schema.String),
    "rdb-storage-connection-string": Schema.optional(Schema.String),
    "aof-backup-enabled": Schema.optional(Schema.String),
    "aof-storage-connection-string-0": Schema.optional(Schema.String),
    "aof-storage-connection-string-1": Schema.optional(Schema.String),
    "maxfragmentationmemory-reserved": Schema.optional(Schema.String),
    "maxmemory-policy": Schema.optional(Schema.String),
    "maxmemory-reserved": Schema.optional(Schema.String),
    "maxmemory-delta": Schema.optional(Schema.String),
    maxclients: Schema.optional(Schema.String),
    "notify-keyspace-events": Schema.optional(Schema.String),
    "preferred-data-archive-auth-method": Schema.optional(Schema.String),
    "preferred-data-persistence-auth-method": Schema.optional(Schema.String),
    "zonal-configuration": Schema.optional(Schema.String),
    authnotrequired: Schema.optional(Schema.String),
    "storage-subscription-id": Schema.optional(Schema.String),
    "aad-enabled": Schema.optional(Schema.String),
  });
const TlsVersionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "1.0",
  "1.1",
  "1.2",
]);
const PublicNetworkAccessSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Enabled",
  "Disabled",
]);
const UpdateChannelSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Stable",
  "Preview",
]);
const ZonalAllocationPolicySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(
  ["Automatic", "UserDefined", "NoZones"],
);
const ManagedServiceIdentityTypeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "None",
    "SystemAssigned",
    "UserAssigned",
    "SystemAssigned, UserAssigned",
  ]);
const UserAssignedIdentitiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Record(
  Schema.String,
  Schema.suspend(() => UserAssignedIdentitySchema),
);
const UserAssignedIdentitySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  principalId: Schema.optional(Schema.String),
  clientId: Schema.optional(Schema.String),
});
const RedisCreatePropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  redisConfiguration: Schema.optional(
    Schema.suspend(() => RedisCommonPropertiesRedisConfigurationSchema),
  ),
  redisVersion: Schema.optional(Schema.String),
  enableNonSslPort: Schema.optional(Schema.Boolean),
  replicasPerMaster: Schema.optional(Schema.Number),
  replicasPerPrimary: Schema.optional(Schema.Number),
  tenantSettings: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  shardCount: Schema.optional(Schema.Number),
  minimumTlsVersion: Schema.optional(Schema.suspend(() => TlsVersionSchema)),
  publicNetworkAccess: Schema.optional(
    Schema.suspend(() => PublicNetworkAccessSchema),
  ),
  updateChannel: Schema.optional(Schema.suspend(() => UpdateChannelSchema)),
  disableAccessKeyAuthentication: Schema.optional(Schema.Boolean),
  zonalAllocationPolicy: Schema.optional(
    Schema.suspend(() => ZonalAllocationPolicySchema),
  ),
});
const RedisUpdatePropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  redisConfiguration: Schema.optional(
    Schema.suspend(() => RedisCommonPropertiesRedisConfigurationSchema),
  ),
  redisVersion: Schema.optional(Schema.String),
  enableNonSslPort: Schema.optional(Schema.Boolean),
  replicasPerMaster: Schema.optional(Schema.Number),
  replicasPerPrimary: Schema.optional(Schema.Number),
  tenantSettings: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  shardCount: Schema.optional(Schema.Number),
  minimumTlsVersion: Schema.optional(Schema.suspend(() => TlsVersionSchema)),
  publicNetworkAccess: Schema.optional(
    Schema.suspend(() => PublicNetworkAccessSchema),
  ),
  updateChannel: Schema.optional(Schema.suspend(() => UpdateChannelSchema)),
  disableAccessKeyAuthentication: Schema.optional(Schema.Boolean),
  zonalAllocationPolicy: Schema.optional(
    Schema.suspend(() => ZonalAllocationPolicySchema),
  ),
});
const RedisCacheAccessPolicySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const RedisCacheAccessPolicyPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provisioningState: Schema.optional(
      Schema.suspend(() => AccessPolicyProvisioningStateSchema),
    ),
    type: Schema.optional(Schema.suspend(() => AccessPolicyTypeSchema)),
    permissions: Schema.String,
  });
const AccessPolicyProvisioningStateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Updating",
    "Succeeded",
    "Deleting",
    "Deleted",
    "Canceled",
    "Failed",
  ]);
const AccessPolicyTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Custom",
  "BuiltIn",
]);
const RedisCacheAccessPolicyAssignmentSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
const RedisCacheAccessPolicyAssignmentPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provisioningState: Schema.optional(
      Schema.suspend(() => AccessPolicyAssignmentProvisioningStateSchema),
    ),
    objectId: Schema.String,
    objectIdAlias: Schema.String,
    accessPolicyName: Schema.String,
  });
const AccessPolicyAssignmentProvisioningStateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Updating",
    "Succeeded",
    "Deleting",
    "Deleted",
    "Canceled",
    "Failed",
  ]);
const RedisFirewallRuleSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const RedisFirewallRulePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startIP: Schema.String,
    endIP: Schema.String,
  });
const RebootTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "PrimaryNode",
  "SecondaryNode",
  "AllNodes",
]);
const RedisLinkedServerWithPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
const RedisLinkedServerPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    linkedRedisCacheId: Schema.String,
    linkedRedisCacheLocation: Schema.String,
    serverRole: Schema.suspend(() => ReplicationRoleSchema),
    geoReplicatedPrimaryHostName: Schema.optional(Schema.String),
    primaryHostName: Schema.optional(Schema.String),
  });
const ReplicationRoleSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Primary",
  "Secondary",
]);
const RedisLinkedServerCreatePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    linkedRedisCacheId: Schema.String,
    linkedRedisCacheLocation: Schema.String,
    serverRole: Schema.suspend(() => ReplicationRoleSchema),
    geoReplicatedPrimaryHostName: Schema.optional(Schema.String),
    primaryHostName: Schema.optional(Schema.String),
  });
const UpgradeNotificationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  timestamp: Schema.optional(Schema.String),
  upsellNotification: Schema.optional(
    Schema.Record(Schema.String, Schema.String),
  ),
});
const RedisPatchScheduleSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const ScheduleEntriesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  scheduleEntries: Schema.Array(Schema.suspend(() => ScheduleEntrySchema)),
});
const ScheduleEntrySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  dayOfWeek: Schema.suspend(() => DayOfWeekSchema),
  startHourUtc: Schema.Number,
  maintenanceWindow: Schema.optional(Schema.String),
});
const DayOfWeekSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
  "Everyday",
  "Weekend",
]);
const PrivateEndpointConnectionPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    groupIds: Schema.optional(Schema.Array(Schema.String)),
    privateEndpoint: Schema.optional(
      Schema.suspend(() => PrivateEndpointSchema),
    ),
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
const RedisKeyTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Primary",
  "Secondary",
]);

// Input Schema
export const AccessPolicyAssignmentCreateUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    cacheName: Schema.String.pipe(T.PathParam()),
    accessPolicyAssignmentName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => RedisCacheAccessPolicyAssignmentPropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{cacheName}/accessPolicyAssignments/{accessPolicyAssignmentName}",
      apiVersion: "2024-11-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type AccessPolicyAssignmentCreateUpdateInput =
  typeof AccessPolicyAssignmentCreateUpdateInput.Type;

// Output Schema
export const AccessPolicyAssignmentCreateUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => RedisCacheAccessPolicyAssignmentPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type AccessPolicyAssignmentCreateUpdateOutput =
  typeof AccessPolicyAssignmentCreateUpdateOutput.Type;

// The operation
/**
 * Adds the access policy assignment to the specified users
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cacheName - The name of the Redis cache.
 * @param accessPolicyAssignmentName - The name of the access policy assignment.
 */
export const AccessPolicyAssignmentCreateUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AccessPolicyAssignmentCreateUpdateInput,
    outputSchema: AccessPolicyAssignmentCreateUpdateOutput,
  }));
// Input Schema
export const AccessPolicyAssignmentDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    cacheName: Schema.String.pipe(T.PathParam()),
    accessPolicyAssignmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{cacheName}/accessPolicyAssignments/{accessPolicyAssignmentName}",
      apiVersion: "2024-11-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type AccessPolicyAssignmentDeleteInput =
  typeof AccessPolicyAssignmentDeleteInput.Type;

// Output Schema
export const AccessPolicyAssignmentDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AccessPolicyAssignmentDeleteOutput =
  typeof AccessPolicyAssignmentDeleteOutput.Type;

// The operation
/**
 * Deletes the access policy assignment from a redis cache
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cacheName - The name of the Redis cache.
 * @param accessPolicyAssignmentName - The name of the access policy assignment.
 */
export const AccessPolicyAssignmentDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AccessPolicyAssignmentDeleteInput,
    outputSchema: AccessPolicyAssignmentDeleteOutput,
  }));
// Input Schema
export const AccessPolicyAssignmentGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    cacheName: Schema.String.pipe(T.PathParam()),
    accessPolicyAssignmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{cacheName}/accessPolicyAssignments/{accessPolicyAssignmentName}",
      apiVersion: "2024-11-01",
    }),
  );
export type AccessPolicyAssignmentGetInput =
  typeof AccessPolicyAssignmentGetInput.Type;

// Output Schema
export const AccessPolicyAssignmentGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => RedisCacheAccessPolicyAssignmentPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type AccessPolicyAssignmentGetOutput =
  typeof AccessPolicyAssignmentGetOutput.Type;

// The operation
/**
 * Gets the list of assignments for an access policy of a redis cache
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cacheName - The name of the Redis cache.
 * @param accessPolicyAssignmentName - The name of the access policy assignment.
 */
export const AccessPolicyAssignmentGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AccessPolicyAssignmentGetInput,
    outputSchema: AccessPolicyAssignmentGetOutput,
  }),
);
// Input Schema
export const AccessPolicyAssignmentListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    cacheName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{cacheName}/accessPolicyAssignments",
      apiVersion: "2024-11-01",
    }),
  );
export type AccessPolicyAssignmentListInput =
  typeof AccessPolicyAssignmentListInput.Type;

// Output Schema
export const AccessPolicyAssignmentListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.suspend(() => RedisCacheAccessPolicyAssignmentSchema),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type AccessPolicyAssignmentListOutput =
  typeof AccessPolicyAssignmentListOutput.Type;

// The operation
/**
 * Gets the list of access policy assignments associated with this redis cache
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cacheName - The name of the Redis cache.
 */
export const AccessPolicyAssignmentList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AccessPolicyAssignmentListInput,
    outputSchema: AccessPolicyAssignmentListOutput,
  }),
);
// Input Schema
export const AccessPolicyCreateUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    cacheName: Schema.String.pipe(T.PathParam()),
    accessPolicyName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => RedisCacheAccessPolicyPropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{cacheName}/accessPolicies/{accessPolicyName}",
      apiVersion: "2024-11-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type AccessPolicyCreateUpdateInput =
  typeof AccessPolicyCreateUpdateInput.Type;

// Output Schema
export const AccessPolicyCreateUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => RedisCacheAccessPolicyPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type AccessPolicyCreateUpdateOutput =
  typeof AccessPolicyCreateUpdateOutput.Type;

// The operation
/**
 * Adds an access policy to the redis cache
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cacheName - The name of the Redis cache.
 * @param accessPolicyName - The name of the access policy that is being added to the Redis cache.
 */
export const AccessPolicyCreateUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AccessPolicyCreateUpdateInput,
    outputSchema: AccessPolicyCreateUpdateOutput,
  }),
);
// Input Schema
export const AccessPolicyDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    cacheName: Schema.String.pipe(T.PathParam()),
    accessPolicyName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{cacheName}/accessPolicies/{accessPolicyName}",
      apiVersion: "2024-11-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type AccessPolicyDeleteInput = typeof AccessPolicyDeleteInput.Type;

// Output Schema
export const AccessPolicyDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AccessPolicyDeleteOutput = typeof AccessPolicyDeleteOutput.Type;

// The operation
/**
 * Deletes the access policy from a redis cache
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cacheName - The name of the Redis cache.
 * @param accessPolicyName - The name of the access policy that is being added to the Redis cache.
 */
export const AccessPolicyDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AccessPolicyDeleteInput,
  outputSchema: AccessPolicyDeleteOutput,
}));
// Input Schema
export const AccessPolicyGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  cacheName: Schema.String.pipe(T.PathParam()),
  accessPolicyName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{cacheName}/accessPolicies/{accessPolicyName}",
    apiVersion: "2024-11-01",
  }),
);
export type AccessPolicyGetInput = typeof AccessPolicyGetInput.Type;

// Output Schema
export const AccessPolicyGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(
    Schema.suspend(() => RedisCacheAccessPolicyPropertiesSchema),
  ),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type AccessPolicyGetOutput = typeof AccessPolicyGetOutput.Type;

// The operation
/**
 * Gets the detailed information about an access policy of a redis cache
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cacheName - The name of the Redis cache.
 * @param accessPolicyName - The name of the access policy that is being added to the Redis cache.
 */
export const AccessPolicyGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AccessPolicyGetInput,
  outputSchema: AccessPolicyGetOutput,
}));
// Input Schema
export const AccessPolicyListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  cacheName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{cacheName}/accessPolicies",
    apiVersion: "2024-11-01",
  }),
);
export type AccessPolicyListInput = typeof AccessPolicyListInput.Type;

// Output Schema
export const AccessPolicyListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    value: Schema.Array(Schema.suspend(() => RedisCacheAccessPolicySchema)),
    nextLink: Schema.optional(Schema.String),
  },
);
export type AccessPolicyListOutput = typeof AccessPolicyListOutput.Type;

// The operation
/**
 * Gets the list of access policies associated with this redis cache
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cacheName - The name of the Redis cache.
 */
export const AccessPolicyList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AccessPolicyListInput,
  outputSchema: AccessPolicyListOutput,
}));
// Input Schema
export const AsyncOperationStatusGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    location: Schema.String.pipe(T.PathParam()),
    operationId: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Cache/locations/{location}/asyncOperations/{operationId}",
      apiVersion: "2024-11-01",
    }),
  );
export type AsyncOperationStatusGetInput =
  typeof AsyncOperationStatusGetInput.Type;

// Output Schema
export const AsyncOperationStatusGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.String,
    percentComplete: Schema.optional(Schema.Number),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    operations: Schema.optional(
      Schema.Array(Schema.suspend(() => OperationStatusResultSchema)),
    ),
    error: Schema.optional(Schema.suspend(() => ErrorDetailSchema)),
  });
export type AsyncOperationStatusGetOutput =
  typeof AsyncOperationStatusGetOutput.Type;

// The operation
/**
 * For checking the ongoing status of an operation
 *
 * @param api-version - The API version to use for this operation.
 * @param location - The location at which operation was triggered
 * @param operationId - The ID of asynchronous operation
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const AsyncOperationStatusGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AsyncOperationStatusGetInput,
    outputSchema: AsyncOperationStatusGetOutput,
  }),
);
// Input Schema
export const FirewallRulesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    cacheName: Schema.String.pipe(T.PathParam()),
    ruleName: Schema.String.pipe(T.PathParam()),
    properties: Schema.suspend(() => RedisFirewallRulePropertiesSchema),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{cacheName}/firewallRules/{ruleName}",
      apiVersion: "2024-11-01",
    }),
  );
export type FirewallRulesCreateOrUpdateInput =
  typeof FirewallRulesCreateOrUpdateInput.Type;

// Output Schema
export const FirewallRulesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.suspend(() => RedisFirewallRulePropertiesSchema),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type FirewallRulesCreateOrUpdateOutput =
  typeof FirewallRulesCreateOrUpdateOutput.Type;

// The operation
/**
 * Create or update a redis cache firewall rule
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cacheName - The name of the Redis cache.
 * @param ruleName - The name of the firewall rule.
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
    cacheName: Schema.String.pipe(T.PathParam()),
    ruleName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{cacheName}/firewallRules/{ruleName}",
      apiVersion: "2024-11-01",
    }),
  );
export type FirewallRulesDeleteInput = typeof FirewallRulesDeleteInput.Type;

// Output Schema
export const FirewallRulesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type FirewallRulesDeleteOutput = typeof FirewallRulesDeleteOutput.Type;

// The operation
/**
 * Deletes a single firewall rule in a specified redis cache.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cacheName - The name of the Redis cache.
 * @param ruleName - The name of the firewall rule.
 */
export const FirewallRulesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FirewallRulesDeleteInput,
  outputSchema: FirewallRulesDeleteOutput,
}));
// Input Schema
export const FirewallRulesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  cacheName: Schema.String.pipe(T.PathParam()),
  ruleName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{cacheName}/firewallRules/{ruleName}",
    apiVersion: "2024-11-01",
  }),
);
export type FirewallRulesGetInput = typeof FirewallRulesGetInput.Type;

// Output Schema
export const FirewallRulesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    properties: Schema.suspend(() => RedisFirewallRulePropertiesSchema),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  },
);
export type FirewallRulesGetOutput = typeof FirewallRulesGetOutput.Type;

// The operation
/**
 * Gets a single firewall rule in a specified redis cache.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cacheName - The name of the Redis cache.
 * @param ruleName - The name of the firewall rule.
 */
export const FirewallRulesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FirewallRulesGetInput,
  outputSchema: FirewallRulesGetOutput,
}));
// Input Schema
export const FirewallRulesListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    cacheName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{cacheName}/firewallRules",
    apiVersion: "2024-11-01",
  }),
);
export type FirewallRulesListInput = typeof FirewallRulesListInput.Type;

// Output Schema
export const FirewallRulesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => RedisFirewallRuleSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type FirewallRulesListOutput = typeof FirewallRulesListOutput.Type;

// The operation
/**
 * Gets all firewall rules in the specified redis cache.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cacheName - The name of the Redis cache.
 */
export const FirewallRulesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FirewallRulesListInput,
  outputSchema: FirewallRulesListOutput,
}));
// Input Schema
export const LinkedServerCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    linkedServerName: Schema.String.pipe(T.PathParam()),
    properties: Schema.suspend(() => RedisLinkedServerCreatePropertiesSchema),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{name}/linkedServers/{linkedServerName}",
      apiVersion: "2024-11-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type LinkedServerCreateInput = typeof LinkedServerCreateInput.Type;

// Output Schema
export const LinkedServerCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => RedisLinkedServerPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type LinkedServerCreateOutput = typeof LinkedServerCreateOutput.Type;

// The operation
/**
 * Adds a linked server to the Redis cache (requires Premium SKU).
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - The name of the redis cache.
 * @param linkedServerName - The name of the RedisLinkedServerWithProperties
 */
export const LinkedServerCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LinkedServerCreateInput,
  outputSchema: LinkedServerCreateOutput,
}));
// Input Schema
export const LinkedServerDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    linkedServerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{name}/linkedServers/{linkedServerName}",
      apiVersion: "2024-11-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type LinkedServerDeleteInput = typeof LinkedServerDeleteInput.Type;

// Output Schema
export const LinkedServerDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type LinkedServerDeleteOutput = typeof LinkedServerDeleteOutput.Type;

// The operation
/**
 * Deletes the linked server from a redis cache (requires Premium SKU).
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - The name of the redis cache.
 * @param linkedServerName - The name of the RedisLinkedServerWithProperties
 */
export const LinkedServerDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LinkedServerDeleteInput,
  outputSchema: LinkedServerDeleteOutput,
}));
// Input Schema
export const LinkedServerGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
  linkedServerName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{name}/linkedServers/{linkedServerName}",
    apiVersion: "2024-11-01",
  }),
);
export type LinkedServerGetInput = typeof LinkedServerGetInput.Type;

// Output Schema
export const LinkedServerGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(
    Schema.suspend(() => RedisLinkedServerPropertiesSchema),
  ),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type LinkedServerGetOutput = typeof LinkedServerGetOutput.Type;

// The operation
/**
 * Gets the detailed information about a linked server of a redis cache (requires Premium SKU).
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - The name of the redis cache.
 * @param linkedServerName - The name of the RedisLinkedServerWithProperties
 */
export const LinkedServerGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LinkedServerGetInput,
  outputSchema: LinkedServerGetOutput,
}));
// Input Schema
export const LinkedServerListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{name}/linkedServers",
    apiVersion: "2024-11-01",
  }),
);
export type LinkedServerListInput = typeof LinkedServerListInput.Type;

// Output Schema
export const LinkedServerListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    value: Schema.Array(
      Schema.suspend(() => RedisLinkedServerWithPropertiesSchema),
    ),
    nextLink: Schema.optional(Schema.String),
  },
);
export type LinkedServerListOutput = typeof LinkedServerListOutput.Type;

// The operation
/**
 * Gets the list of linked servers associated with this redis cache (requires Premium SKU).
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - The name of the redis cache.
 */
export const LinkedServerList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LinkedServerListInput,
  outputSchema: LinkedServerListOutput,
}));
// Input Schema
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Cache/operations",
    apiVersion: "2024-11-01",
  }),
);
export type OperationsListInput = typeof OperationsListInput.Type;

// Output Schema
export const OperationsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.Array(Schema.suspend(() => OperationSchema)),
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
export const PatchSchedulesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    default: Schema.Literals(["default"]).pipe(T.PathParam()),
    properties: Schema.suspend(() => ScheduleEntriesSchema),
    location: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{name}/patchSchedules/{default}",
      apiVersion: "2024-11-01",
    }),
  );
export type PatchSchedulesCreateOrUpdateInput =
  typeof PatchSchedulesCreateOrUpdateInput.Type;

// Output Schema
export const PatchSchedulesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.suspend(() => ScheduleEntriesSchema),
    location: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type PatchSchedulesCreateOrUpdateOutput =
  typeof PatchSchedulesCreateOrUpdateOutput.Type;

// The operation
/**
 * Create or replace the patching schedule for Redis cache.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - The name of the redis cache.
 * @param default - The name of the RedisPatchSchedule
 */
export const PatchSchedulesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PatchSchedulesCreateOrUpdateInput,
    outputSchema: PatchSchedulesCreateOrUpdateOutput,
  }));
// Input Schema
export const PatchSchedulesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    default: Schema.Literals(["default"]).pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{name}/patchSchedules/{default}",
      apiVersion: "2024-11-01",
    }),
  );
export type PatchSchedulesDeleteInput = typeof PatchSchedulesDeleteInput.Type;

// Output Schema
export const PatchSchedulesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type PatchSchedulesDeleteOutput = typeof PatchSchedulesDeleteOutput.Type;

// The operation
/**
 * Deletes the patching schedule of a redis cache.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - The name of the redis cache.
 * @param default - The name of the RedisPatchSchedule
 */
export const PatchSchedulesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PatchSchedulesDeleteInput,
    outputSchema: PatchSchedulesDeleteOutput,
  }),
);
// Input Schema
export const PatchSchedulesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    default: Schema.Literals(["default"]).pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{name}/patchSchedules/{default}",
    apiVersion: "2024-11-01",
  }),
);
export type PatchSchedulesGetInput = typeof PatchSchedulesGetInput.Type;

// Output Schema
export const PatchSchedulesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.suspend(() => ScheduleEntriesSchema),
    location: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type PatchSchedulesGetOutput = typeof PatchSchedulesGetOutput.Type;

// The operation
/**
 * Gets the patching schedule of a redis cache.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - The name of the redis cache.
 * @param default - The name of the RedisPatchSchedule
 */
export const PatchSchedulesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PatchSchedulesGetInput,
  outputSchema: PatchSchedulesGetOutput,
}));
// Input Schema
export const PatchSchedulesListByRedisResourceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    cacheName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{cacheName}/patchSchedules",
      apiVersion: "2024-11-01",
    }),
  );
export type PatchSchedulesListByRedisResourceInput =
  typeof PatchSchedulesListByRedisResourceInput.Type;

// Output Schema
export const PatchSchedulesListByRedisResourceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => RedisPatchScheduleSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type PatchSchedulesListByRedisResourceOutput =
  typeof PatchSchedulesListByRedisResourceOutput.Type;

// The operation
/**
 * Gets all patch schedules in the specified redis cache (there is only one).
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cacheName - The name of the Redis cache.
 */
export const PatchSchedulesListByRedisResource =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PatchSchedulesListByRedisResourceInput,
    outputSchema: PatchSchedulesListByRedisResourceOutput,
  }));
// Input Schema
export const PrivateEndpointConnectionsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    cacheName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{cacheName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2024-11-01",
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
 * Deletes the specified private endpoint connection associated with the redis cache.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cacheName - The name of the Redis cache.
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
    cacheName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{cacheName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2024-11-01",
    }),
  );
export type PrivateEndpointConnectionsGetInput =
  typeof PrivateEndpointConnectionsGetInput.Type;

// Output Schema
export const PrivateEndpointConnectionsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => PrivateEndpointConnectionPropertiesSchema),
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
 * Gets the specified private endpoint connection associated with the redis cache.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cacheName - The name of the Redis cache.
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource.
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
    cacheName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{cacheName}/privateEndpointConnections",
      apiVersion: "2024-11-01",
    }),
  );
export type PrivateEndpointConnectionsListInput =
  typeof PrivateEndpointConnectionsListInput.Type;

// Output Schema
export const PrivateEndpointConnectionsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type PrivateEndpointConnectionsListOutput =
  typeof PrivateEndpointConnectionsListOutput.Type;

// The operation
/**
 * List all the private endpoint connections associated with the redis cache.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cacheName - The name of the Redis cache.
 */
export const PrivateEndpointConnectionsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsListInput,
    outputSchema: PrivateEndpointConnectionsListOutput,
  }));
// Input Schema
export const PrivateEndpointConnectionsPutInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    cacheName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => PrivateEndpointConnectionPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{cacheName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2024-11-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type PrivateEndpointConnectionsPutInput =
  typeof PrivateEndpointConnectionsPutInput.Type;

// Output Schema
export const PrivateEndpointConnectionsPutOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => PrivateEndpointConnectionPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type PrivateEndpointConnectionsPutOutput =
  typeof PrivateEndpointConnectionsPutOutput.Type;

// The operation
/**
 * Update the state of specified private endpoint connection associated with the redis cache.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cacheName - The name of the Redis cache.
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource.
 * @param properties - Resource properties.
 */
export const PrivateEndpointConnectionsPut =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsPutInput,
    outputSchema: PrivateEndpointConnectionsPutOutput,
  }));
// Input Schema
export const PrivateLinkResourcesListByRedisCacheInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    cacheName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{cacheName}/privateLinkResources",
      apiVersion: "2024-11-01",
    }),
  );
export type PrivateLinkResourcesListByRedisCacheInput =
  typeof PrivateLinkResourcesListByRedisCacheInput.Type;

// Output Schema
export const PrivateLinkResourcesListByRedisCacheOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type PrivateLinkResourcesListByRedisCacheOutput =
  typeof PrivateLinkResourcesListByRedisCacheOutput.Type;

// The operation
/**
 * Gets the private link resources that need to be created for a redis cache.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cacheName - The name of the Redis cache.
 */
export const PrivateLinkResourcesListByRedisCache =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkResourcesListByRedisCacheInput,
    outputSchema: PrivateLinkResourcesListByRedisCacheOutput,
  }));
// Input Schema
export const RedisCheckNameAvailabilityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
    type: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Cache/checkNameAvailability",
      apiVersion: "2024-11-01",
    }),
  );
export type RedisCheckNameAvailabilityInput =
  typeof RedisCheckNameAvailabilityInput.Type;

// Output Schema
export const RedisCheckNameAvailabilityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type RedisCheckNameAvailabilityOutput =
  typeof RedisCheckNameAvailabilityOutput.Type;

// The operation
/**
 * Checks that the redis cache name is valid and is not already in use.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const RedisCheckNameAvailability = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RedisCheckNameAvailabilityInput,
    outputSchema: RedisCheckNameAvailabilityOutput,
  }),
);
// Input Schema
export const RedisCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
  properties: Schema.suspend(() => RedisCreatePropertiesSchema),
  zones: Schema.optional(Schema.Array(Schema.String)),
  location: Schema.String,
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
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{name}",
    apiVersion: "2024-11-01",
    longRunning: { finalStateVia: "location" },
  }),
);
export type RedisCreateInput = typeof RedisCreateInput.Type;

// Output Schema
export const RedisCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.suspend(() => RedisPropertiesSchema),
  zones: Schema.optional(Schema.Array(Schema.String)),
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
export type RedisCreateOutput = typeof RedisCreateOutput.Type;

// The operation
/**
 * Create or replace (overwrite/recreate, with potential downtime) an existing Redis cache.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - The name of the RedisResource
 */
export const RedisCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RedisCreateInput,
  outputSchema: RedisCreateOutput,
}));
// Input Schema
export const RedisDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{name}",
    apiVersion: "2024-11-01",
    longRunning: { finalStateVia: "location" },
  }),
);
export type RedisDeleteInput = typeof RedisDeleteInput.Type;

// Output Schema
export const RedisDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type RedisDeleteOutput = typeof RedisDeleteOutput.Type;

// The operation
/**
 * Deletes a Redis cache.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - The name of the RedisResource
 */
export const RedisDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RedisDeleteInput,
  outputSchema: RedisDeleteOutput,
}));
// Input Schema
export const RedisExportDataInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
  format: Schema.optional(Schema.String),
  prefix: Schema.String,
  container: Schema.String,
  "preferred-data-archive-auth-method": Schema.optional(Schema.String),
  "storage-subscription-id": Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{name}/export",
    apiVersion: "2024-11-01",
    longRunning: { finalStateVia: "location" },
  }),
);
export type RedisExportDataInput = typeof RedisExportDataInput.Type;

// Output Schema
export const RedisExportDataOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type RedisExportDataOutput = typeof RedisExportDataOutput.Type;

// The operation
/**
 * Export data from the redis cache to blobs in a container.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - The name of the RedisResource
 */
export const RedisExportData = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RedisExportDataInput,
  outputSchema: RedisExportDataOutput,
}));
// Input Schema
export const RedisFlushCacheInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  cacheName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{cacheName}/flush",
    apiVersion: "2024-11-01",
    longRunning: { finalStateVia: "location" },
  }),
);
export type RedisFlushCacheInput = typeof RedisFlushCacheInput.Type;

// Output Schema
export const RedisFlushCacheOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  status: Schema.String,
  percentComplete: Schema.optional(Schema.Number),
  startTime: Schema.optional(Schema.String),
  endTime: Schema.optional(Schema.String),
  operations: Schema.optional(
    Schema.Array(Schema.suspend(() => OperationStatusResultSchema)),
  ),
  error: Schema.optional(Schema.suspend(() => ErrorDetailSchema)),
});
export type RedisFlushCacheOutput = typeof RedisFlushCacheOutput.Type;

// The operation
/**
 * Deletes all of the keys in a cache.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cacheName - The name of the Redis cache.
 */
export const RedisFlushCache = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RedisFlushCacheInput,
  outputSchema: RedisFlushCacheOutput,
}));
// Input Schema
export const RedisForceRebootInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
  rebootType: Schema.optional(Schema.suspend(() => RebootTypeSchema)),
  shardId: Schema.optional(Schema.Number),
  ports: Schema.optional(Schema.Array(Schema.Number)),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{name}/forceReboot",
    apiVersion: "2024-11-01",
  }),
);
export type RedisForceRebootInput = typeof RedisForceRebootInput.Type;

// Output Schema
export const RedisForceRebootOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    message: Schema.optional(Schema.String),
  },
);
export type RedisForceRebootOutput = typeof RedisForceRebootOutput.Type;

// The operation
/**
 * Reboot specified Redis node(s). This operation requires write permission to the cache resource. There can be potential data loss.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - The name of the RedisResource
 */
export const RedisForceReboot = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RedisForceRebootInput,
  outputSchema: RedisForceRebootOutput,
}));
// Input Schema
export const RedisGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{name}",
    apiVersion: "2024-11-01",
  }),
);
export type RedisGetInput = typeof RedisGetInput.Type;

// Output Schema
export const RedisGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.suspend(() => RedisPropertiesSchema),
  zones: Schema.optional(Schema.Array(Schema.String)),
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
export type RedisGetOutput = typeof RedisGetOutput.Type;

// The operation
/**
 * Gets a Redis cache (resource description).
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - The name of the RedisResource
 */
export const RedisGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RedisGetInput,
  outputSchema: RedisGetOutput,
}));
// Input Schema
export const RedisImportDataInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
  format: Schema.optional(Schema.String),
  files: Schema.Array(Schema.String),
  "preferred-data-archive-auth-method": Schema.optional(Schema.String),
  "storage-subscription-id": Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{name}/import",
    apiVersion: "2024-11-01",
    longRunning: { finalStateVia: "location" },
  }),
);
export type RedisImportDataInput = typeof RedisImportDataInput.Type;

// Output Schema
export const RedisImportDataOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type RedisImportDataOutput = typeof RedisImportDataOutput.Type;

// The operation
/**
 * Import data into Redis cache.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - The name of the RedisResource
 */
export const RedisImportData = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RedisImportDataInput,
  outputSchema: RedisImportDataOutput,
}));
// Input Schema
export const RedisListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis",
      apiVersion: "2024-11-01",
    }),
  );
export type RedisListByResourceGroupInput =
  typeof RedisListByResourceGroupInput.Type;

// Output Schema
export const RedisListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => RedisResourceSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type RedisListByResourceGroupOutput =
  typeof RedisListByResourceGroupOutput.Type;

// The operation
/**
 * Lists all Redis caches in a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const RedisListByResourceGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RedisListByResourceGroupInput,
    outputSchema: RedisListByResourceGroupOutput,
  }),
);
// Input Schema
export const RedisListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Cache/redis",
      apiVersion: "2024-11-01",
    }),
  );
export type RedisListBySubscriptionInput =
  typeof RedisListBySubscriptionInput.Type;

// Output Schema
export const RedisListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => RedisResourceSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type RedisListBySubscriptionOutput =
  typeof RedisListBySubscriptionOutput.Type;

// The operation
/**
 * Gets all Redis caches in the specified subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const RedisListBySubscription = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RedisListBySubscriptionInput,
    outputSchema: RedisListBySubscriptionOutput,
  }),
);
// Input Schema
export const RedisListKeysInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{name}/listKeys",
    apiVersion: "2024-11-01",
  }),
);
export type RedisListKeysInput = typeof RedisListKeysInput.Type;

// Output Schema
export const RedisListKeysOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  primaryKey: Schema.optional(Schema.String),
  secondaryKey: Schema.optional(Schema.String),
});
export type RedisListKeysOutput = typeof RedisListKeysOutput.Type;

// The operation
/**
 * Retrieve a Redis cache's access keys. This operation requires write permission to the cache resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - The name of the RedisResource
 */
export const RedisListKeys = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RedisListKeysInput,
  outputSchema: RedisListKeysOutput,
}));
// Input Schema
export const RedisListUpgradeNotificationsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    history: Schema.Number,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{name}/listUpgradeNotifications",
      apiVersion: "2024-11-01",
    }),
  );
export type RedisListUpgradeNotificationsInput =
  typeof RedisListUpgradeNotificationsInput.Type;

// Output Schema
export const RedisListUpgradeNotificationsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => UpgradeNotificationSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type RedisListUpgradeNotificationsOutput =
  typeof RedisListUpgradeNotificationsOutput.Type;

// The operation
/**
 * [Deprecated] Gets any upgrade notifications for a Redis cache.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - The name of the RedisResource
 * @param history - how many minutes in past to look for upgrade notifications
 */
export const RedisListUpgradeNotifications =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RedisListUpgradeNotificationsInput,
    outputSchema: RedisListUpgradeNotificationsOutput,
  }));
// Input Schema
export const RedisRegenerateKeyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    keyType: Schema.suspend(() => RedisKeyTypeSchema),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{name}/regenerateKey",
      apiVersion: "2024-11-01",
    }),
  );
export type RedisRegenerateKeyInput = typeof RedisRegenerateKeyInput.Type;

// Output Schema
export const RedisRegenerateKeyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    primaryKey: Schema.optional(Schema.String),
    secondaryKey: Schema.optional(Schema.String),
  });
export type RedisRegenerateKeyOutput = typeof RedisRegenerateKeyOutput.Type;

// The operation
/**
 * Regenerate Redis cache's access keys. This operation requires write permission to the cache resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - The name of the RedisResource
 */
export const RedisRegenerateKey = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RedisRegenerateKeyInput,
  outputSchema: RedisRegenerateKeyOutput,
}));
// Input Schema
export const RedisUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.suspend(() => RedisUpdatePropertiesSchema),
  ),
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
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redis/{name}",
    apiVersion: "2024-11-01",
    longRunning: { finalStateVia: "location" },
  }),
);
export type RedisUpdateInput = typeof RedisUpdateInput.Type;

// Output Schema
export const RedisUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.suspend(() => RedisPropertiesSchema),
  zones: Schema.optional(Schema.Array(Schema.String)),
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
export type RedisUpdateOutput = typeof RedisUpdateOutput.Type;

// The operation
/**
 * Update an existing Redis cache.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - The name of the RedisResource
 */
export const RedisUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RedisUpdateInput,
  outputSchema: RedisUpdateOutput,
}));
