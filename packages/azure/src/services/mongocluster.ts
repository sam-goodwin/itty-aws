/**
 * Azure Mongocluster API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveOutputString, SensitiveString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface FirewallRulesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  mongoClusterName: string;
  firewallRuleName: string;
  properties?: {
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "InProgress"
      | "Updating"
      | "Dropping";
    startIpAddress: string;
    endIpAddress: string;
  };
}
export const FirewallRulesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    mongoClusterName: Schema.String.pipe(T.PathParam()),
    firewallRuleName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "InProgress",
            "Updating",
            "Dropping",
          ]),
        ),
        startIpAddress: Schema.String,
        endIpAddress: Schema.String,
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/mongoClusters/{mongoClusterName}/firewallRules/{firewallRuleName}",
      apiVersion: "2026-06-01",
    }),
  ) as unknown as Schema.Codec<FirewallRulesCreateOrUpdateInput>;

// Output Schema
export interface FirewallRulesCreateOrUpdateOutput {
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
export const FirewallRulesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<FirewallRulesCreateOrUpdateOutput>;

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
export const FirewallRulesCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: FirewallRulesCreateOrUpdateInput,
  outputSchema: FirewallRulesCreateOrUpdateOutput,
}));
// Input Schema
export interface FirewallRulesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  mongoClusterName: string;
  firewallRuleName: string;
}
export const FirewallRulesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    mongoClusterName: Schema.String.pipe(T.PathParam()),
    firewallRuleName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/mongoClusters/{mongoClusterName}/firewallRules/{firewallRuleName}",
      apiVersion: "2026-06-01",
    }),
  ) as unknown as Schema.Codec<FirewallRulesDeleteInput>;

// Output Schema
export type FirewallRulesDeleteOutput = void;
export const FirewallRulesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<FirewallRulesDeleteOutput>;

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
export const FirewallRulesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: FirewallRulesDeleteInput,
  outputSchema: FirewallRulesDeleteOutput,
}));
// Input Schema
export interface FirewallRulesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  mongoClusterName: string;
  firewallRuleName: string;
}
export const FirewallRulesGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  mongoClusterName: Schema.String.pipe(T.PathParam()),
  firewallRuleName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/mongoClusters/{mongoClusterName}/firewallRules/{firewallRuleName}",
    apiVersion: "2026-06-01",
  }),
) as unknown as Schema.Codec<FirewallRulesGetInput>;

// Output Schema
export interface FirewallRulesGetOutput {
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
export const FirewallRulesGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<FirewallRulesGetOutput>;

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
export const FirewallRulesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: FirewallRulesGetInput,
  outputSchema: FirewallRulesGetOutput,
}));
// Input Schema
export interface FirewallRulesListByMongoClusterInput {
  subscriptionId: string;
  resourceGroupName: string;
  mongoClusterName: string;
}
export const FirewallRulesListByMongoClusterInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    mongoClusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/mongoClusters/{mongoClusterName}/firewallRules",
      apiVersion: "2026-06-01",
    }),
  ) as unknown as Schema.Codec<FirewallRulesListByMongoClusterInput>;

// Output Schema
export interface FirewallRulesListByMongoClusterOutput {
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
export const FirewallRulesListByMongoClusterOutput =
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
  }) as unknown as Schema.Codec<FirewallRulesListByMongoClusterOutput>;

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
  /*@__PURE__*/ API.make(() => ({
    inputSchema: FirewallRulesListByMongoClusterInput,
    outputSchema: FirewallRulesListByMongoClusterOutput,
  }));
// Input Schema
export interface MongoClustersCheckNameAvailabilityInput {
  subscriptionId: string;
  location: string;
  name?: string;
  type?: string;
}
export const MongoClustersCheckNameAvailabilityInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DocumentDB/locations/{location}/checkMongoClusterNameAvailability",
      apiVersion: "2026-06-01",
    }),
  ) as unknown as Schema.Codec<MongoClustersCheckNameAvailabilityInput>;

// Output Schema
export interface MongoClustersCheckNameAvailabilityOutput {
  nameAvailable?: boolean;
  reason?: "Invalid" | "AlreadyExists";
  message?: string;
}
export const MongoClustersCheckNameAvailabilityOutput =
  /*@__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.Literals(["Invalid", "AlreadyExists"])),
    message: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<MongoClustersCheckNameAvailabilityOutput>;

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
  /*@__PURE__*/ API.make(() => ({
    inputSchema: MongoClustersCheckNameAvailabilityInput,
    outputSchema: MongoClustersCheckNameAvailabilityOutput,
  }));
// Input Schema
export interface MongoClustersCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  mongoClusterName: string;
  properties?: {
    createMode?: "Default" | "PointInTimeRestore" | "GeoReplica" | "Replica";
    restoreParameters?: { pointInTimeUTC?: string; sourceResourceId?: string };
    replicaParameters?: { sourceResourceId: string; sourceLocation: string };
    administrator?: {
      userName?: string;
      password?: string | Redacted.Redacted<string>;
    };
    serverVersion?: string;
    connectionString?: string | Redacted.Redacted<string>;
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "InProgress"
      | "Updating"
      | "Dropping";
    clusterStatus?:
      | "Ready"
      | "Provisioning"
      | "Updating"
      | "Starting"
      | "Stopping"
      | "Stopped"
      | "Dropping";
    publicNetworkAccess?: "Enabled" | "Disabled";
    highAvailability?: {
      targetMode?: "Disabled" | "SameZone" | "ZoneRedundantPreferred";
    };
    storage?: { sizeGb?: number; type?: "PremiumSSD" | "PremiumSSDv2" };
    sharding?: { shardCount?: number };
    compute?: { tier?: string };
    backup?: { earliestRestoreTime?: string };
    dataApi?: { mode?: "Enabled" | "Disabled" };
    privateEndpointConnections?: {
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
    previewFeatures?: "GeoReplicas"[];
    replica?: {
      sourceResourceId?: string;
      role?: "Primary" | "AsyncReplica" | "GeoAsyncReplica";
      replicationState?:
        | "Active"
        | "Catchup"
        | "Provisioning"
        | "Updating"
        | "Broken"
        | "Reconfiguring";
    };
    infrastructureVersion?: string;
    authConfig?: { allowedModes?: ("NativeAuth" | "MicrosoftEntraID")[] };
    encryption?: {
      customerManagedKeyEncryption?: {
        keyEncryptionKeyIdentity?: {
          identityType?: "UserAssignedIdentity";
          userAssignedIdentityResourceId?: string;
        };
        keyEncryptionKeyUrl?: string;
      };
    };
    networkBypassMode?: "None" | "AzureCosmosDB";
  };
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
  tags?: Record<string, string>;
  location: string;
}
export const MongoClustersCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    mongoClusterName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        createMode: Schema.optional(
          Schema.Literals([
            "Default",
            "PointInTimeRestore",
            "GeoReplica",
            "Replica",
          ]),
        ),
        restoreParameters: Schema.optional(
          Schema.Struct({
            pointInTimeUTC: Schema.optional(Schema.String),
            sourceResourceId: Schema.optional(Schema.String),
          }),
        ),
        replicaParameters: Schema.optional(
          Schema.Struct({
            sourceResourceId: Schema.String,
            sourceLocation: Schema.String,
          }),
        ),
        administrator: Schema.optional(
          Schema.Struct({
            userName: Schema.optional(Schema.String),
            password: Schema.optional(SensitiveString),
          }),
        ),
        serverVersion: Schema.optional(Schema.String),
        connectionString: Schema.optional(SensitiveString),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "InProgress",
            "Updating",
            "Dropping",
          ]),
        ),
        clusterStatus: Schema.optional(
          Schema.Literals([
            "Ready",
            "Provisioning",
            "Updating",
            "Starting",
            "Stopping",
            "Stopped",
            "Dropping",
          ]),
        ),
        publicNetworkAccess: Schema.optional(
          Schema.Literals(["Enabled", "Disabled"]),
        ),
        highAvailability: Schema.optional(
          Schema.Struct({
            targetMode: Schema.optional(
              Schema.Literals([
                "Disabled",
                "SameZone",
                "ZoneRedundantPreferred",
              ]),
            ),
          }),
        ),
        storage: Schema.optional(
          Schema.Struct({
            sizeGb: Schema.optional(Schema.Number),
            type: Schema.optional(
              Schema.Literals(["PremiumSSD", "PremiumSSDv2"]),
            ),
          }),
        ),
        sharding: Schema.optional(
          Schema.Struct({
            shardCount: Schema.optional(Schema.Number),
          }),
        ),
        compute: Schema.optional(
          Schema.Struct({
            tier: Schema.optional(Schema.String),
          }),
        ),
        backup: Schema.optional(
          Schema.Struct({
            earliestRestoreTime: Schema.optional(Schema.String),
          }),
        ),
        dataApi: Schema.optional(
          Schema.Struct({
            mode: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
          }),
        ),
        privateEndpointConnections: Schema.optional(
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
        previewFeatures: Schema.optional(
          Schema.Array(Schema.Literals(["GeoReplicas"])),
        ),
        replica: Schema.optional(
          Schema.Struct({
            sourceResourceId: Schema.optional(Schema.String),
            role: Schema.optional(
              Schema.Literals(["Primary", "AsyncReplica", "GeoAsyncReplica"]),
            ),
            replicationState: Schema.optional(
              Schema.Literals([
                "Active",
                "Catchup",
                "Provisioning",
                "Updating",
                "Broken",
                "Reconfiguring",
              ]),
            ),
          }),
        ),
        infrastructureVersion: Schema.optional(Schema.String),
        authConfig: Schema.optional(
          Schema.Struct({
            allowedModes: Schema.optional(
              Schema.Array(Schema.Literals(["NativeAuth", "MicrosoftEntraID"])),
            ),
          }),
        ),
        encryption: Schema.optional(
          Schema.Struct({
            customerManagedKeyEncryption: Schema.optional(
              Schema.Struct({
                keyEncryptionKeyIdentity: Schema.optional(
                  Schema.Struct({
                    identityType: Schema.optional(
                      Schema.Literals(["UserAssignedIdentity"]),
                    ),
                    userAssignedIdentityResourceId: Schema.optional(
                      Schema.String,
                    ),
                  }),
                ),
                keyEncryptionKeyUrl: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
        networkBypassMode: Schema.optional(
          Schema.Literals(["None", "AzureCosmosDB"]),
        ),
      }),
    ),
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
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/mongoClusters/{mongoClusterName}",
      apiVersion: "2026-06-01",
    }),
  ) as unknown as Schema.Codec<MongoClustersCreateOrUpdateInput>;

// Output Schema
export interface MongoClustersCreateOrUpdateOutput {
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
export const MongoClustersCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<MongoClustersCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a mongo cluster. Update overwrites all properties for the resource. To only modify some of the properties, use PATCH.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param mongoClusterName - The name of the mongo cluster.
 */
export const MongoClustersCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: MongoClustersCreateOrUpdateInput,
  outputSchema: MongoClustersCreateOrUpdateOutput,
}));
// Input Schema
export interface MongoClustersDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  mongoClusterName: string;
}
export const MongoClustersDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    mongoClusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/mongoClusters/{mongoClusterName}",
      apiVersion: "2026-06-01",
    }),
  ) as unknown as Schema.Codec<MongoClustersDeleteInput>;

// Output Schema
export type MongoClustersDeleteOutput = void;
export const MongoClustersDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<MongoClustersDeleteOutput>;

// The operation
/**
 * Deletes a mongo cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param mongoClusterName - The name of the mongo cluster.
 */
export const MongoClustersDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: MongoClustersDeleteInput,
  outputSchema: MongoClustersDeleteOutput,
}));
// Input Schema
export interface MongoClustersGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  mongoClusterName: string;
}
export const MongoClustersGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  mongoClusterName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/mongoClusters/{mongoClusterName}",
    apiVersion: "2026-06-01",
  }),
) as unknown as Schema.Codec<MongoClustersGetInput>;

// Output Schema
export interface MongoClustersGetOutput {
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
export const MongoClustersGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<MongoClustersGetOutput>;

// The operation
/**
 * Gets information about a mongo cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param mongoClusterName - The name of the mongo cluster.
 */
export const MongoClustersGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: MongoClustersGetInput,
  outputSchema: MongoClustersGetOutput,
}));
// Input Schema
export interface MongoClustersListInput {
  subscriptionId: string;
}
export const MongoClustersListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.DocumentDB/mongoClusters",
    apiVersion: "2026-06-01",
  }),
) as unknown as Schema.Codec<MongoClustersListInput>;

// Output Schema
export interface MongoClustersListOutput {
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
export const MongoClustersListOutput =
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
  }) as unknown as Schema.Codec<MongoClustersListOutput>;

// The operation
/**
 * List all the mongo clusters in a given subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const MongoClustersList = /*@__PURE__*/ API.make(() => ({
  inputSchema: MongoClustersListInput,
  outputSchema: MongoClustersListOutput,
}));
// Input Schema
export interface MongoClustersListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const MongoClustersListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/mongoClusters",
      apiVersion: "2026-06-01",
    }),
  ) as unknown as Schema.Codec<MongoClustersListByResourceGroupInput>;

// Output Schema
export interface MongoClustersListByResourceGroupOutput {
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
export const MongoClustersListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<MongoClustersListByResourceGroupOutput>;

// The operation
/**
 * List all the mongo clusters in a given resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const MongoClustersListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: MongoClustersListByResourceGroupInput,
    outputSchema: MongoClustersListByResourceGroupOutput,
  }));
// Input Schema
export interface MongoClustersListConnectionStringsInput {
  subscriptionId: string;
  resourceGroupName: string;
  mongoClusterName: string;
}
export const MongoClustersListConnectionStringsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    mongoClusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/mongoClusters/{mongoClusterName}/listConnectionStrings",
      apiVersion: "2026-06-01",
    }),
  ) as unknown as Schema.Codec<MongoClustersListConnectionStringsInput>;

// Output Schema
export interface MongoClustersListConnectionStringsOutput {
  connectionStrings?: {
    connectionString?: Redacted.Redacted<string>;
    description?: string;
    name?: string;
  }[];
}
export const MongoClustersListConnectionStringsOutput =
  /*@__PURE__*/ Schema.Struct({
    connectionStrings: Schema.optional(
      Schema.Array(
        Schema.Struct({
          connectionString: Schema.optional(SensitiveOutputString),
          description: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<MongoClustersListConnectionStringsOutput>;

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
  /*@__PURE__*/ API.make(() => ({
    inputSchema: MongoClustersListConnectionStringsInput,
    outputSchema: MongoClustersListConnectionStringsOutput,
  }));
// Input Schema
export interface MongoClustersPromoteInput {
  subscriptionId: string;
  resourceGroupName: string;
  mongoClusterName: string;
  promoteOption: "Forced";
  mode?: "Switchover";
}
export const MongoClustersPromoteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    mongoClusterName: Schema.String.pipe(T.PathParam()),
    promoteOption: Schema.Literals(["Forced"]),
    mode: Schema.optional(Schema.Literals(["Switchover"])),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/mongoClusters/{mongoClusterName}/promote",
      apiVersion: "2026-06-01",
    }),
  ) as unknown as Schema.Codec<MongoClustersPromoteInput>;

// Output Schema
export type MongoClustersPromoteOutput = void;
export const MongoClustersPromoteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<MongoClustersPromoteOutput>;

// The operation
/**
 * Promotes a replica mongo cluster to a primary role.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param mongoClusterName - The name of the mongo cluster.
 */
export const MongoClustersPromote = /*@__PURE__*/ API.make(() => ({
  inputSchema: MongoClustersPromoteInput,
  outputSchema: MongoClustersPromoteOutput,
}));
// Input Schema
export interface MongoClustersUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  mongoClusterName: string;
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
  tags?: Record<string, string>;
  properties?: {
    administrator?: {
      userName?: string;
      password?: string | Redacted.Redacted<string>;
    };
    serverVersion?: string;
    publicNetworkAccess?: "Enabled" | "Disabled";
    highAvailability?: {
      targetMode?: "Disabled" | "SameZone" | "ZoneRedundantPreferred";
    };
    storage?: { sizeGb?: number; type?: "PremiumSSD" | "PremiumSSDv2" };
    sharding?: { shardCount?: number };
    compute?: { tier?: string };
    backup?: { earliestRestoreTime?: string };
    dataApi?: { mode?: "Enabled" | "Disabled" };
    previewFeatures?: "GeoReplicas"[];
    authConfig?: { allowedModes?: ("NativeAuth" | "MicrosoftEntraID")[] };
    encryption?: {
      customerManagedKeyEncryption?: {
        keyEncryptionKeyIdentity?: {
          identityType?: "UserAssignedIdentity";
          userAssignedIdentityResourceId?: string;
        };
        keyEncryptionKeyUrl?: string;
      };
    };
    networkBypassMode?: "None" | "AzureCosmosDB";
  };
}
export const MongoClustersUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    mongoClusterName: Schema.String.pipe(T.PathParam()),
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
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(
      Schema.Struct({
        administrator: Schema.optional(
          Schema.Struct({
            userName: Schema.optional(Schema.String),
            password: Schema.optional(SensitiveString),
          }),
        ),
        serverVersion: Schema.optional(Schema.String),
        publicNetworkAccess: Schema.optional(
          Schema.Literals(["Enabled", "Disabled"]),
        ),
        highAvailability: Schema.optional(
          Schema.Struct({
            targetMode: Schema.optional(
              Schema.Literals([
                "Disabled",
                "SameZone",
                "ZoneRedundantPreferred",
              ]),
            ),
          }),
        ),
        storage: Schema.optional(
          Schema.Struct({
            sizeGb: Schema.optional(Schema.Number),
            type: Schema.optional(
              Schema.Literals(["PremiumSSD", "PremiumSSDv2"]),
            ),
          }),
        ),
        sharding: Schema.optional(
          Schema.Struct({
            shardCount: Schema.optional(Schema.Number),
          }),
        ),
        compute: Schema.optional(
          Schema.Struct({
            tier: Schema.optional(Schema.String),
          }),
        ),
        backup: Schema.optional(
          Schema.Struct({
            earliestRestoreTime: Schema.optional(Schema.String),
          }),
        ),
        dataApi: Schema.optional(
          Schema.Struct({
            mode: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
          }),
        ),
        previewFeatures: Schema.optional(
          Schema.Array(Schema.Literals(["GeoReplicas"])),
        ),
        authConfig: Schema.optional(
          Schema.Struct({
            allowedModes: Schema.optional(
              Schema.Array(Schema.Literals(["NativeAuth", "MicrosoftEntraID"])),
            ),
          }),
        ),
        encryption: Schema.optional(
          Schema.Struct({
            customerManagedKeyEncryption: Schema.optional(
              Schema.Struct({
                keyEncryptionKeyIdentity: Schema.optional(
                  Schema.Struct({
                    identityType: Schema.optional(
                      Schema.Literals(["UserAssignedIdentity"]),
                    ),
                    userAssignedIdentityResourceId: Schema.optional(
                      Schema.String,
                    ),
                  }),
                ),
                keyEncryptionKeyUrl: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
        networkBypassMode: Schema.optional(
          Schema.Literals(["None", "AzureCosmosDB"]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/mongoClusters/{mongoClusterName}",
      apiVersion: "2026-06-01",
    }),
  ) as unknown as Schema.Codec<MongoClustersUpdateInput>;

// Output Schema
export interface MongoClustersUpdateOutput {
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
export const MongoClustersUpdateOutput =
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
  }) as unknown as Schema.Codec<MongoClustersUpdateOutput>;

// The operation
/**
 * Updates an existing mongo cluster. The request body can contain one to many of the properties present in the normal mongo cluster definition.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param mongoClusterName - The name of the mongo cluster.
 */
export const MongoClustersUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: MongoClustersUpdateInput,
  outputSchema: MongoClustersUpdateOutput,
}));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.DocumentDB/operations",
    apiVersion: "2026-06-01",
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
export const OperationsListOutput = /*@__PURE__*/ Schema.Struct({
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
 * List the operations for the provider
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface PrivateEndpointConnectionsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  mongoClusterName: string;
  privateEndpointConnectionName: string;
  properties?: {
    groupIds?: string[];
    privateEndpoint?: { id?: string };
    privateLinkServiceConnectionState: {
      status?: "Pending" | "Approved" | "Rejected";
      description?: string;
      actionsRequired?: string;
    };
    provisioningState?: "Succeeded" | "Creating" | "Deleting" | "Failed";
  };
}
export const PrivateEndpointConnectionsCreateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    mongoClusterName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        groupIds: Schema.optional(Schema.Array(Schema.String)),
        privateEndpoint: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
          }),
        ),
        privateLinkServiceConnectionState: Schema.Struct({
          status: Schema.optional(
            Schema.Literals(["Pending", "Approved", "Rejected"]),
          ),
          description: Schema.optional(Schema.String),
          actionsRequired: Schema.optional(Schema.String),
        }),
        provisioningState: Schema.optional(
          Schema.Literals(["Succeeded", "Creating", "Deleting", "Failed"]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/mongoClusters/{mongoClusterName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2026-06-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsCreateInput>;

// Output Schema
export interface PrivateEndpointConnectionsCreateOutput {
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
export const PrivateEndpointConnectionsCreateOutput =
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
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsCreateOutput>;

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
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsCreateInput,
    outputSchema: PrivateEndpointConnectionsCreateOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  mongoClusterName: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    mongoClusterName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/mongoClusters/{mongoClusterName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2026-06-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsDeleteInput>;

// Output Schema
export type PrivateEndpointConnectionsDeleteOutput = void;
export const PrivateEndpointConnectionsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<PrivateEndpointConnectionsDeleteOutput>;

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
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsDeleteInput,
    outputSchema: PrivateEndpointConnectionsDeleteOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  mongoClusterName: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    mongoClusterName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/mongoClusters/{mongoClusterName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2026-06-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsGetInput>;

// Output Schema
export interface PrivateEndpointConnectionsGetOutput {
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
export const PrivateEndpointConnectionsGetOutput =
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
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsGetOutput>;

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
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsGetInput,
    outputSchema: PrivateEndpointConnectionsGetOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsListByMongoClusterInput {
  subscriptionId: string;
  resourceGroupName: string;
  mongoClusterName: string;
}
export const PrivateEndpointConnectionsListByMongoClusterInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    mongoClusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/mongoClusters/{mongoClusterName}/privateEndpointConnections",
      apiVersion: "2026-06-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsListByMongoClusterInput>;

// Output Schema
export interface PrivateEndpointConnectionsListByMongoClusterOutput {
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
export const PrivateEndpointConnectionsListByMongoClusterOutput =
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
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsListByMongoClusterOutput>;

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
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsListByMongoClusterInput,
    outputSchema: PrivateEndpointConnectionsListByMongoClusterOutput,
  }));
// Input Schema
export interface PrivateLinksListByMongoClusterInput {
  subscriptionId: string;
  resourceGroupName: string;
  mongoClusterName: string;
}
export const PrivateLinksListByMongoClusterInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    mongoClusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/mongoClusters/{mongoClusterName}/privateLinkResources",
      apiVersion: "2026-06-01",
    }),
  ) as unknown as Schema.Codec<PrivateLinksListByMongoClusterInput>;

// Output Schema
export interface PrivateLinksListByMongoClusterOutput {
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
export const PrivateLinksListByMongoClusterOutput =
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
  }) as unknown as Schema.Codec<PrivateLinksListByMongoClusterOutput>;

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
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinksListByMongoClusterInput,
    outputSchema: PrivateLinksListByMongoClusterOutput,
  }));
// Input Schema
export interface ReplicasListByParentInput {
  subscriptionId: string;
  resourceGroupName: string;
  mongoClusterName: string;
}
export const ReplicasListByParentInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    mongoClusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/mongoClusters/{mongoClusterName}/replicas",
      apiVersion: "2026-06-01",
    }),
  ) as unknown as Schema.Codec<ReplicasListByParentInput>;

// Output Schema
export interface ReplicasListByParentOutput {
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
export const ReplicasListByParentOutput =
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
  }) as unknown as Schema.Codec<ReplicasListByParentOutput>;

// The operation
/**
 * List all the replicas for the mongo cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param mongoClusterName - The name of the mongo cluster.
 */
export const ReplicasListByParent = /*@__PURE__*/ API.make(() => ({
  inputSchema: ReplicasListByParentInput,
  outputSchema: ReplicasListByParentOutput,
}));
// Input Schema
export interface UsersCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  mongoClusterName: string;
  userName: string;
  properties?: {
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "InProgress"
      | "Updating"
      | "Dropping";
    identityProvider?: { type: "MicrosoftEntraID" };
    roles?: { db: string; role: "root" }[];
  };
}
export const UsersCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    mongoClusterName: Schema.String.pipe(T.PathParam()),
    userName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "InProgress",
            "Updating",
            "Dropping",
          ]),
        ),
        identityProvider: Schema.optional(
          Schema.Struct({
            type: Schema.Literals(["MicrosoftEntraID"]),
          }),
        ),
        roles: Schema.optional(
          Schema.Array(
            Schema.Struct({
              db: Schema.String,
              role: Schema.Literals(["root"]),
            }),
          ),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/mongoClusters/{mongoClusterName}/users/{userName}",
      apiVersion: "2026-06-01",
    }),
  ) as unknown as Schema.Codec<UsersCreateOrUpdateInput>;

// Output Schema
export interface UsersCreateOrUpdateOutput {
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
export const UsersCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<UsersCreateOrUpdateOutput>;

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
export const UsersCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: UsersCreateOrUpdateInput,
  outputSchema: UsersCreateOrUpdateOutput,
}));
// Input Schema
export interface UsersDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  mongoClusterName: string;
  userName: string;
}
export const UsersDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  mongoClusterName: Schema.String.pipe(T.PathParam()),
  userName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/mongoClusters/{mongoClusterName}/users/{userName}",
    apiVersion: "2026-06-01",
  }),
) as unknown as Schema.Codec<UsersDeleteInput>;

// Output Schema
export type UsersDeleteOutput = void;
export const UsersDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<UsersDeleteOutput>;

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
export const UsersDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: UsersDeleteInput,
  outputSchema: UsersDeleteOutput,
}));
// Input Schema
export interface UsersGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  mongoClusterName: string;
  userName: string;
}
export const UsersGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  mongoClusterName: Schema.String.pipe(T.PathParam()),
  userName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/mongoClusters/{mongoClusterName}/users/{userName}",
    apiVersion: "2026-06-01",
  }),
) as unknown as Schema.Codec<UsersGetInput>;

// Output Schema
export interface UsersGetOutput {
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
export const UsersGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<UsersGetOutput>;

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
export const UsersGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: UsersGetInput,
  outputSchema: UsersGetOutput,
}));
// Input Schema
export interface UsersListByMongoClusterInput {
  subscriptionId: string;
  resourceGroupName: string;
  mongoClusterName: string;
}
export const UsersListByMongoClusterInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    mongoClusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/mongoClusters/{mongoClusterName}/users",
      apiVersion: "2026-06-01",
    }),
  ) as unknown as Schema.Codec<UsersListByMongoClusterInput>;

// Output Schema
export interface UsersListByMongoClusterOutput {
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
export const UsersListByMongoClusterOutput =
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
  }) as unknown as Schema.Codec<UsersListByMongoClusterOutput>;

// The operation
/**
 * List all the users on a mongo cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param mongoClusterName - The name of the mongo cluster.
 */
export const UsersListByMongoCluster = /*@__PURE__*/ API.make(() => ({
  inputSchema: UsersListByMongoClusterInput,
  outputSchema: UsersListByMongoClusterOutput,
}));
