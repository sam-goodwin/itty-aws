/**
 * Azure Redisenterprise API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const AccessPolicyAssignmentCreateUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
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
        accessPolicyName: Schema.String,
        user: Schema.Struct({
          objectId: Schema.optional(Schema.String),
        }),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redisEnterprise/{clusterName}/databases/{databaseName}/accessPolicyAssignments/{accessPolicyAssignmentName}",
      apiVersion: "2025-07-01",
    }),
  );
export type AccessPolicyAssignmentCreateUpdateInput =
  typeof AccessPolicyAssignmentCreateUpdateInput.Type;

// Output Schema
export const AccessPolicyAssignmentCreateUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  });
export type AccessPolicyAssignmentCreateUpdateOutput =
  typeof AccessPolicyAssignmentCreateUpdateOutput.Type;

// The operation
/**
 * Creates/Updates a particular access policy assignment for a database
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
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
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redisEnterprise/{clusterName}/databases/{databaseName}/accessPolicyAssignments/{accessPolicyAssignmentName}",
      apiVersion: "2025-07-01",
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
 * Deletes a single access policy assignment.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
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
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redisEnterprise/{clusterName}/databases/{databaseName}/accessPolicyAssignments/{accessPolicyAssignmentName}",
      apiVersion: "2025-07-01",
    }),
  );
export type AccessPolicyAssignmentGetInput =
  typeof AccessPolicyAssignmentGetInput.Type;

// Output Schema
export const AccessPolicyAssignmentGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  });
export type AccessPolicyAssignmentGetOutput =
  typeof AccessPolicyAssignmentGetOutput.Type;

// The operation
/**
 * Gets information about access policy assignment for database.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
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
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redisEnterprise/{clusterName}/databases/{databaseName}/accessPolicyAssignments",
      apiVersion: "2025-07-01",
    }),
  );
export type AccessPolicyAssignmentListInput =
  typeof AccessPolicyAssignmentListInput.Type;

// Output Schema
export const AccessPolicyAssignmentListOutput =
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
    nextLink: Schema.optional(Schema.String),
  });
export type AccessPolicyAssignmentListOutput =
  typeof AccessPolicyAssignmentListOutput.Type;

// The operation
/**
 * Gets all access policy assignments..
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const AccessPolicyAssignmentList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AccessPolicyAssignmentListInput,
    outputSchema: AccessPolicyAssignmentListOutput,
  }),
);
// Input Schema
export const DatabasesCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      clientProtocol: Schema.optional(
        Schema.Literals(["Encrypted", "Plaintext"]),
      ),
      port: Schema.optional(Schema.Number),
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
      resourceState: Schema.optional(
        Schema.Literals([
          "Running",
          "Creating",
          "CreateFailed",
          "Updating",
          "UpdateFailed",
          "Deleting",
          "DeleteFailed",
          "Enabling",
          "EnableFailed",
          "Disabling",
          "DisableFailed",
          "Disabled",
          "Scaling",
          "ScalingFailed",
          "Moving",
        ]),
      ),
      clusteringPolicy: Schema.optional(
        Schema.Literals(["EnterpriseCluster", "OSSCluster", "NoCluster"]),
      ),
      evictionPolicy: Schema.optional(
        Schema.Literals([
          "AllKeysLFU",
          "AllKeysLRU",
          "AllKeysRandom",
          "VolatileLRU",
          "VolatileLFU",
          "VolatileTTL",
          "VolatileRandom",
          "NoEviction",
        ]),
      ),
      persistence: Schema.optional(
        Schema.Struct({
          aofEnabled: Schema.optional(Schema.Boolean),
          rdbEnabled: Schema.optional(Schema.Boolean),
          aofFrequency: Schema.optional(Schema.Literals(["1s", "always"])),
          rdbFrequency: Schema.optional(Schema.Literals(["1h", "6h", "12h"])),
        }),
      ),
      modules: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.String,
            args: Schema.optional(Schema.String),
            version: Schema.optional(Schema.String),
          }),
        ),
      ),
      geoReplication: Schema.optional(
        Schema.Struct({
          groupNickname: Schema.optional(Schema.String),
          linkedDatabases: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                state: Schema.optional(
                  Schema.Literals([
                    "Linked",
                    "Linking",
                    "Unlinking",
                    "LinkFailed",
                    "UnlinkFailed",
                  ]),
                ),
              }),
            ),
          ),
        }),
      ),
      redisVersion: Schema.optional(Schema.String),
      deferUpgrade: Schema.optional(
        Schema.Literals(["Deferred", "NotDeferred"]),
      ),
      accessKeysAuthentication: Schema.optional(
        Schema.Literals(["Disabled", "Enabled"]),
      ),
    }),
  ),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redisEnterprise/{clusterName}/databases/{databaseName}",
    apiVersion: "2025-07-01",
  }),
);
export type DatabasesCreateInput = typeof DatabasesCreateInput.Type;

// Output Schema
export const DatabasesCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
});
export type DatabasesCreateOutput = typeof DatabasesCreateOutput.Type;

// The operation
/**
 * Creates a database
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const DatabasesCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DatabasesCreateInput,
  outputSchema: DatabasesCreateOutput,
}));
// Input Schema
export const DatabasesDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redisEnterprise/{clusterName}/databases/{databaseName}",
    apiVersion: "2025-07-01",
  }),
);
export type DatabasesDeleteInput = typeof DatabasesDeleteInput.Type;

// Output Schema
export const DatabasesDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DatabasesDeleteOutput = typeof DatabasesDeleteOutput.Type;

// The operation
/**
 * Deletes a single database
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const DatabasesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DatabasesDeleteInput,
  outputSchema: DatabasesDeleteOutput,
}));
// Input Schema
export const DatabasesExportInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
  sasUri: Schema.String,
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redisEnterprise/{clusterName}/databases/{databaseName}/export",
    apiVersion: "2025-07-01",
  }),
);
export type DatabasesExportInput = typeof DatabasesExportInput.Type;

// Output Schema
export const DatabasesExportOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DatabasesExportOutput = typeof DatabasesExportOutput.Type;

// The operation
/**
 * Exports a database file from target database.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const DatabasesExport = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DatabasesExportInput,
  outputSchema: DatabasesExportOutput,
}));
// Input Schema
export const DatabasesFlushInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
  ids: Schema.optional(Schema.Array(Schema.String)),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redisEnterprise/{clusterName}/databases/{databaseName}/flush",
    apiVersion: "2025-07-01",
  }),
);
export type DatabasesFlushInput = typeof DatabasesFlushInput.Type;

// Output Schema
export const DatabasesFlushOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DatabasesFlushOutput = typeof DatabasesFlushOutput.Type;

// The operation
/**
 * Flushes all the keys in this database and also from its linked databases.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const DatabasesFlush = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DatabasesFlushInput,
  outputSchema: DatabasesFlushOutput,
}));
// Input Schema
export const DatabasesForceLinkToReplicationGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    geoReplication: Schema.Struct({
      groupNickname: Schema.optional(Schema.String),
      linkedDatabases: Schema.optional(
        Schema.Array(
          Schema.Struct({
            id: Schema.optional(Schema.String),
            state: Schema.optional(
              Schema.Literals([
                "Linked",
                "Linking",
                "Unlinking",
                "LinkFailed",
                "UnlinkFailed",
              ]),
            ),
          }),
        ),
      ),
    }),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redisEnterprise/{clusterName}/databases/{databaseName}/forceLinkToReplicationGroup",
      apiVersion: "2025-07-01",
    }),
  );
export type DatabasesForceLinkToReplicationGroupInput =
  typeof DatabasesForceLinkToReplicationGroupInput.Type;

// Output Schema
export const DatabasesForceLinkToReplicationGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DatabasesForceLinkToReplicationGroupOutput =
  typeof DatabasesForceLinkToReplicationGroupOutput.Type;

// The operation
/**
 * Forcibly recreates an existing database on the specified cluster, and rejoins it to an existing replication group. **IMPORTANT NOTE:** All data in this database will be discarded, and the database will temporarily be unavailable while rejoining the replication group.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const DatabasesForceLinkToReplicationGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DatabasesForceLinkToReplicationGroupInput,
    outputSchema: DatabasesForceLinkToReplicationGroupOutput,
  }));
// Input Schema
export const DatabasesForceUnlinkInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    ids: Schema.Array(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redisEnterprise/{clusterName}/databases/{databaseName}/forceUnlink",
      apiVersion: "2025-07-01",
    }),
  );
export type DatabasesForceUnlinkInput = typeof DatabasesForceUnlinkInput.Type;

// Output Schema
export const DatabasesForceUnlinkOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DatabasesForceUnlinkOutput = typeof DatabasesForceUnlinkOutput.Type;

// The operation
/**
 * Forcibly removes the link to the specified database resource.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const DatabasesForceUnlink = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DatabasesForceUnlinkInput,
    outputSchema: DatabasesForceUnlinkOutput,
  }),
);
// Input Schema
export const DatabasesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redisEnterprise/{clusterName}/databases/{databaseName}",
    apiVersion: "2025-07-01",
  }),
);
export type DatabasesGetInput = typeof DatabasesGetInput.Type;

// Output Schema
export const DatabasesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
});
export type DatabasesGetOutput = typeof DatabasesGetOutput.Type;

// The operation
/**
 * Gets information about a database in a Redis Enterprise cluster.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const DatabasesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DatabasesGetInput,
  outputSchema: DatabasesGetOutput,
}));
// Input Schema
export const DatabasesImportInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
  sasUris: Schema.Array(Schema.String),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redisEnterprise/{clusterName}/databases/{databaseName}/import",
    apiVersion: "2025-07-01",
  }),
);
export type DatabasesImportInput = typeof DatabasesImportInput.Type;

// Output Schema
export const DatabasesImportOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DatabasesImportOutput = typeof DatabasesImportOutput.Type;

// The operation
/**
 * Imports database files to target database.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const DatabasesImport = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DatabasesImportInput,
  outputSchema: DatabasesImportOutput,
}));
// Input Schema
export const DatabasesListByClusterInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redisEnterprise/{clusterName}/databases",
      apiVersion: "2025-07-01",
    }),
  );
export type DatabasesListByClusterInput =
  typeof DatabasesListByClusterInput.Type;

// Output Schema
export const DatabasesListByClusterOutput =
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
    nextLink: Schema.optional(Schema.String),
  });
export type DatabasesListByClusterOutput =
  typeof DatabasesListByClusterOutput.Type;

// The operation
/**
 * Gets all databases in the specified Redis Enterprise cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const DatabasesListByCluster = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DatabasesListByClusterInput,
    outputSchema: DatabasesListByClusterOutput,
  }),
);
// Input Schema
export const DatabasesListKeysInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redisEnterprise/{clusterName}/databases/{databaseName}/listKeys",
    apiVersion: "2025-07-01",
  }),
);
export type DatabasesListKeysInput = typeof DatabasesListKeysInput.Type;

// Output Schema
export const DatabasesListKeysOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    primaryKey: Schema.optional(Schema.String),
    secondaryKey: Schema.optional(Schema.String),
  });
export type DatabasesListKeysOutput = typeof DatabasesListKeysOutput.Type;

// The operation
/**
 * Retrieves the access keys for the Redis Enterprise database.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const DatabasesListKeys = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DatabasesListKeysInput,
  outputSchema: DatabasesListKeysOutput,
}));
// Input Schema
export const DatabasesRegenerateKeyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    keyType: Schema.Literals(["Primary", "Secondary"]),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redisEnterprise/{clusterName}/databases/{databaseName}/regenerateKey",
      apiVersion: "2025-07-01",
    }),
  );
export type DatabasesRegenerateKeyInput =
  typeof DatabasesRegenerateKeyInput.Type;

// Output Schema
export const DatabasesRegenerateKeyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    primaryKey: Schema.optional(Schema.String),
    secondaryKey: Schema.optional(Schema.String),
  });
export type DatabasesRegenerateKeyOutput =
  typeof DatabasesRegenerateKeyOutput.Type;

// The operation
/**
 * Regenerates the Redis Enterprise database's access keys.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const DatabasesRegenerateKey = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DatabasesRegenerateKeyInput,
    outputSchema: DatabasesRegenerateKeyOutput,
  }),
);
// Input Schema
export const DatabasesUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      clientProtocol: Schema.optional(
        Schema.Literals(["Encrypted", "Plaintext"]),
      ),
      port: Schema.optional(Schema.Number),
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
      resourceState: Schema.optional(
        Schema.Literals([
          "Running",
          "Creating",
          "CreateFailed",
          "Updating",
          "UpdateFailed",
          "Deleting",
          "DeleteFailed",
          "Enabling",
          "EnableFailed",
          "Disabling",
          "DisableFailed",
          "Disabled",
          "Scaling",
          "ScalingFailed",
          "Moving",
        ]),
      ),
      clusteringPolicy: Schema.optional(
        Schema.Literals(["EnterpriseCluster", "OSSCluster", "NoCluster"]),
      ),
      evictionPolicy: Schema.optional(
        Schema.Literals([
          "AllKeysLFU",
          "AllKeysLRU",
          "AllKeysRandom",
          "VolatileLRU",
          "VolatileLFU",
          "VolatileTTL",
          "VolatileRandom",
          "NoEviction",
        ]),
      ),
      persistence: Schema.optional(
        Schema.Struct({
          aofEnabled: Schema.optional(Schema.Boolean),
          rdbEnabled: Schema.optional(Schema.Boolean),
          aofFrequency: Schema.optional(Schema.Literals(["1s", "always"])),
          rdbFrequency: Schema.optional(Schema.Literals(["1h", "6h", "12h"])),
        }),
      ),
      modules: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.String,
            args: Schema.optional(Schema.String),
            version: Schema.optional(Schema.String),
          }),
        ),
      ),
      geoReplication: Schema.optional(
        Schema.Struct({
          groupNickname: Schema.optional(Schema.String),
          linkedDatabases: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                state: Schema.optional(
                  Schema.Literals([
                    "Linked",
                    "Linking",
                    "Unlinking",
                    "LinkFailed",
                    "UnlinkFailed",
                  ]),
                ),
              }),
            ),
          ),
        }),
      ),
      redisVersion: Schema.optional(Schema.String),
      deferUpgrade: Schema.optional(
        Schema.Literals(["Deferred", "NotDeferred"]),
      ),
      accessKeysAuthentication: Schema.optional(
        Schema.Literals(["Disabled", "Enabled"]),
      ),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redisEnterprise/{clusterName}/databases/{databaseName}",
    apiVersion: "2025-07-01",
  }),
);
export type DatabasesUpdateInput = typeof DatabasesUpdateInput.Type;

// Output Schema
export const DatabasesUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
});
export type DatabasesUpdateOutput = typeof DatabasesUpdateOutput.Type;

// The operation
/**
 * Updates a database
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const DatabasesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DatabasesUpdateInput,
  outputSchema: DatabasesUpdateOutput,
}));
// Input Schema
export const DatabasesUpgradeDBRedisVersionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redisEnterprise/{clusterName}/databases/{databaseName}/upgradeDBRedisVersion",
      apiVersion: "2025-07-01",
    }),
  );
export type DatabasesUpgradeDBRedisVersionInput =
  typeof DatabasesUpgradeDBRedisVersionInput.Type;

// Output Schema
export const DatabasesUpgradeDBRedisVersionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DatabasesUpgradeDBRedisVersionOutput =
  typeof DatabasesUpgradeDBRedisVersionOutput.Type;

// The operation
/**
 * Upgrades the database Redis version to the latest available.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const DatabasesUpgradeDBRedisVersion =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DatabasesUpgradeDBRedisVersionInput,
    outputSchema: DatabasesUpgradeDBRedisVersionOutput,
  }));
// Input Schema
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Cache/operations",
    apiVersion: "2025-07-01",
  }),
);
export type OperationsListInput = typeof OperationsListInput.Type;

// Output Schema
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
});
export type OperationsListOutput = typeof OperationsListOutput.Type;

// The operation
/**
 * Lists all of the available REST API operations of the Microsoft.Cache provider.
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export const OperationsStatusGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    location: Schema.String.pipe(T.PathParam()),
    operationId: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Cache/locations/{location}/operationsStatus/{operationId}",
      apiVersion: "2025-07-01",
    }),
  );
export type OperationsStatusGetInput = typeof OperationsStatusGetInput.Type;

// Output Schema
export const OperationsStatusGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    error: Schema.optional(
      Schema.Struct({
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
  });
export type OperationsStatusGetOutput = typeof OperationsStatusGetOutput.Type;

// The operation
/**
 * Gets the status of operation.
 *
 * @param location - The name of Azure region.
 * @param operationId - The ID of an ongoing async operation.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const OperationsStatusGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsStatusGetInput,
  outputSchema: OperationsStatusGetOutput,
}));
// Input Schema
export const PrivateEndpointConnectionsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redisEnterprise/{clusterName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2025-07-01",
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
 * Deletes the specified private endpoint connection associated with the Redis Enterprise cluster.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource
 */
export const PrivateEndpointConnectionsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsDeleteInput,
    outputSchema: PrivateEndpointConnectionsDeleteOutput,
  }));
// Input Schema
export const PrivateEndpointConnectionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redisEnterprise/{clusterName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2025-07-01",
    }),
  );
export type PrivateEndpointConnectionsGetInput =
  typeof PrivateEndpointConnectionsGetInput.Type;

// Output Schema
export const PrivateEndpointConnectionsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  });
export type PrivateEndpointConnectionsGetOutput =
  typeof PrivateEndpointConnectionsGetOutput.Type;

// The operation
/**
 * Gets the specified private endpoint connection associated with the Redis Enterprise cluster.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const PrivateEndpointConnectionsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsGetInput,
    outputSchema: PrivateEndpointConnectionsGetOutput,
  }));
// Input Schema
export const PrivateEndpointConnectionsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redisEnterprise/{clusterName}/privateEndpointConnections",
      apiVersion: "2025-07-01",
    }),
  );
export type PrivateEndpointConnectionsListInput =
  typeof PrivateEndpointConnectionsListInput.Type;

// Output Schema
export const PrivateEndpointConnectionsListOutput =
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
  });
export type PrivateEndpointConnectionsListOutput =
  typeof PrivateEndpointConnectionsListOutput.Type;

// The operation
/**
 * Lists all the private endpoint connections associated with the Redis Enterprise cluster.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const PrivateEndpointConnectionsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsListInput,
    outputSchema: PrivateEndpointConnectionsListOutput,
  }));
// Input Schema
export const PrivateEndpointConnectionsPutInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
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
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redisEnterprise/{clusterName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2025-07-01",
    }),
  );
export type PrivateEndpointConnectionsPutInput =
  typeof PrivateEndpointConnectionsPutInput.Type;

// Output Schema
export const PrivateEndpointConnectionsPutOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  });
export type PrivateEndpointConnectionsPutOutput =
  typeof PrivateEndpointConnectionsPutOutput.Type;

// The operation
/**
 * Updates the state of the specified private endpoint connection associated with the Redis Enterprise cluster.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource
 * @param properties - Resource properties.
 */
export const PrivateEndpointConnectionsPut =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsPutInput,
    outputSchema: PrivateEndpointConnectionsPutOutput,
  }));
// Input Schema
export const PrivateLinkResourcesListByClusterInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redisEnterprise/{clusterName}/privateLinkResources",
      apiVersion: "2025-07-01",
    }),
  );
export type PrivateLinkResourcesListByClusterInput =
  typeof PrivateLinkResourcesListByClusterInput.Type;

// Output Schema
export const PrivateLinkResourcesListByClusterOutput =
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
  });
export type PrivateLinkResourcesListByClusterOutput =
  typeof PrivateLinkResourcesListByClusterOutput.Type;

// The operation
/**
 * Gets the private link resources that need to be created for a Redis Enterprise cluster.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const PrivateLinkResourcesListByCluster =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkResourcesListByClusterInput,
    outputSchema: PrivateLinkResourcesListByClusterOutput,
  }));
// Input Schema
export const RedisEnterpriseCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    kind: Schema.optional(Schema.Literals(["v1", "v2"])),
    sku: Schema.Struct({
      name: Schema.Literals([
        "Enterprise_E1",
        "Enterprise_E5",
        "Enterprise_E10",
        "Enterprise_E20",
        "Enterprise_E50",
        "Enterprise_E100",
        "Enterprise_E200",
        "Enterprise_E400",
        "EnterpriseFlash_F300",
        "EnterpriseFlash_F700",
        "EnterpriseFlash_F1500",
        "Balanced_B0",
        "Balanced_B1",
        "Balanced_B3",
        "Balanced_B5",
        "Balanced_B10",
        "Balanced_B20",
        "Balanced_B50",
        "Balanced_B100",
        "Balanced_B150",
        "Balanced_B250",
        "Balanced_B350",
        "Balanced_B500",
        "Balanced_B700",
        "Balanced_B1000",
        "MemoryOptimized_M10",
        "MemoryOptimized_M20",
        "MemoryOptimized_M50",
        "MemoryOptimized_M100",
        "MemoryOptimized_M150",
        "MemoryOptimized_M250",
        "MemoryOptimized_M350",
        "MemoryOptimized_M500",
        "MemoryOptimized_M700",
        "MemoryOptimized_M1000",
        "MemoryOptimized_M1500",
        "MemoryOptimized_M2000",
        "ComputeOptimized_X3",
        "ComputeOptimized_X5",
        "ComputeOptimized_X10",
        "ComputeOptimized_X20",
        "ComputeOptimized_X50",
        "ComputeOptimized_X100",
        "ComputeOptimized_X150",
        "ComputeOptimized_X250",
        "ComputeOptimized_X350",
        "ComputeOptimized_X500",
        "ComputeOptimized_X700",
        "FlashOptimized_A250",
        "FlashOptimized_A500",
        "FlashOptimized_A700",
        "FlashOptimized_A1000",
        "FlashOptimized_A1500",
        "FlashOptimized_A2000",
        "FlashOptimized_A4500",
      ]),
      capacity: Schema.optional(Schema.Number),
    }),
    zones: Schema.optional(Schema.Array(Schema.String)),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.Literals([
          "None",
          "SystemAssigned",
          "UserAssigned",
          "SystemAssigned, UserAssigned",
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
    properties: Schema.optional(
      Schema.Struct({
        highAvailability: Schema.optional(
          Schema.Literals(["Enabled", "Disabled"]),
        ),
        minimumTlsVersion: Schema.optional(
          Schema.Literals(["1.0", "1.1", "1.2"]),
        ),
        encryption: Schema.optional(
          Schema.Struct({
            customerManagedKeyEncryption: Schema.optional(
              Schema.Struct({
                keyEncryptionKeyIdentity: Schema.optional(
                  Schema.Struct({
                    userAssignedIdentityResourceId: Schema.optional(
                      Schema.String,
                    ),
                    identityType: Schema.optional(
                      Schema.Literals([
                        "systemAssignedIdentity",
                        "userAssignedIdentity",
                      ]),
                    ),
                  }),
                ),
                keyEncryptionKeyUrl: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
        hostName: Schema.optional(Schema.String),
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
        redundancyMode: Schema.optional(Schema.Literals(["None", "LR", "ZR"])),
        resourceState: Schema.optional(
          Schema.Literals([
            "Running",
            "Creating",
            "CreateFailed",
            "Updating",
            "UpdateFailed",
            "Deleting",
            "DeleteFailed",
            "Enabling",
            "EnableFailed",
            "Disabling",
            "DisableFailed",
            "Disabled",
            "Scaling",
            "ScalingFailed",
            "Moving",
          ]),
        ),
        redisVersion: Schema.optional(Schema.String),
        privateEndpointConnections: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              name: Schema.optional(Schema.String),
              type: Schema.optional(Schema.String),
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redisEnterprise/{clusterName}",
      apiVersion: "2025-07-01",
    }),
  );
export type RedisEnterpriseCreateInput = typeof RedisEnterpriseCreateInput.Type;

// Output Schema
export const RedisEnterpriseCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  });
export type RedisEnterpriseCreateOutput =
  typeof RedisEnterpriseCreateOutput.Type;

// The operation
/**
 * Creates or updates an existing (overwrite/recreate, with potential downtime) cache cluster
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const RedisEnterpriseCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RedisEnterpriseCreateInput,
    outputSchema: RedisEnterpriseCreateOutput,
  }),
);
// Input Schema
export const RedisEnterpriseDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redisEnterprise/{clusterName}",
      apiVersion: "2025-07-01",
    }),
  );
export type RedisEnterpriseDeleteInput = typeof RedisEnterpriseDeleteInput.Type;

// Output Schema
export const RedisEnterpriseDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type RedisEnterpriseDeleteOutput =
  typeof RedisEnterpriseDeleteOutput.Type;

// The operation
/**
 * Deletes a Redis Enterprise cache cluster.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const RedisEnterpriseDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RedisEnterpriseDeleteInput,
    outputSchema: RedisEnterpriseDeleteOutput,
  }),
);
// Input Schema
export const RedisEnterpriseGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redisEnterprise/{clusterName}",
      apiVersion: "2025-07-01",
    }),
  );
export type RedisEnterpriseGetInput = typeof RedisEnterpriseGetInput.Type;

// Output Schema
export const RedisEnterpriseGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  });
export type RedisEnterpriseGetOutput = typeof RedisEnterpriseGetOutput.Type;

// The operation
/**
 * Gets information about a Redis Enterprise cluster
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const RedisEnterpriseGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RedisEnterpriseGetInput,
  outputSchema: RedisEnterpriseGetOutput,
}));
// Input Schema
export const RedisEnterpriseListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Cache/redisEnterprise",
      apiVersion: "2025-07-01",
    }),
  );
export type RedisEnterpriseListInput = typeof RedisEnterpriseListInput.Type;

// Output Schema
export const RedisEnterpriseListOutput =
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
    nextLink: Schema.optional(Schema.String),
  });
export type RedisEnterpriseListOutput = typeof RedisEnterpriseListOutput.Type;

// The operation
/**
 * Lists all Redis Enterprise clusters in the specified subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const RedisEnterpriseList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RedisEnterpriseListInput,
  outputSchema: RedisEnterpriseListOutput,
}));
// Input Schema
export const RedisEnterpriseListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redisEnterprise",
      apiVersion: "2025-07-01",
    }),
  );
export type RedisEnterpriseListByResourceGroupInput =
  typeof RedisEnterpriseListByResourceGroupInput.Type;

// Output Schema
export const RedisEnterpriseListByResourceGroupOutput =
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
    nextLink: Schema.optional(Schema.String),
  });
export type RedisEnterpriseListByResourceGroupOutput =
  typeof RedisEnterpriseListByResourceGroupOutput.Type;

// The operation
/**
 * Lists all Redis Enterprise clusters in a resource group.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const RedisEnterpriseListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RedisEnterpriseListByResourceGroupInput,
    outputSchema: RedisEnterpriseListByResourceGroupOutput,
  }));
// Input Schema
export const RedisEnterpriseListSkusForScalingInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redisEnterprise/{clusterName}/listSkusForScaling",
      apiVersion: "2025-07-01",
    }),
  );
export type RedisEnterpriseListSkusForScalingInput =
  typeof RedisEnterpriseListSkusForScalingInput.Type;

// Output Schema
export const RedisEnterpriseListSkusForScalingOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    skus: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.optional(Schema.String),
          sizeInGB: Schema.optional(Schema.Number),
        }),
      ),
    ),
  });
export type RedisEnterpriseListSkusForScalingOutput =
  typeof RedisEnterpriseListSkusForScalingOutput.Type;

// The operation
/**
 * Lists the available SKUs for scaling the Redis Enterprise cluster.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const RedisEnterpriseListSkusForScaling =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RedisEnterpriseListSkusForScalingInput,
    outputSchema: RedisEnterpriseListSkusForScalingOutput,
  }));
// Input Schema
export const RedisEnterpriseUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.Literals([
          "Enterprise_E1",
          "Enterprise_E5",
          "Enterprise_E10",
          "Enterprise_E20",
          "Enterprise_E50",
          "Enterprise_E100",
          "Enterprise_E200",
          "Enterprise_E400",
          "EnterpriseFlash_F300",
          "EnterpriseFlash_F700",
          "EnterpriseFlash_F1500",
          "Balanced_B0",
          "Balanced_B1",
          "Balanced_B3",
          "Balanced_B5",
          "Balanced_B10",
          "Balanced_B20",
          "Balanced_B50",
          "Balanced_B100",
          "Balanced_B150",
          "Balanced_B250",
          "Balanced_B350",
          "Balanced_B500",
          "Balanced_B700",
          "Balanced_B1000",
          "MemoryOptimized_M10",
          "MemoryOptimized_M20",
          "MemoryOptimized_M50",
          "MemoryOptimized_M100",
          "MemoryOptimized_M150",
          "MemoryOptimized_M250",
          "MemoryOptimized_M350",
          "MemoryOptimized_M500",
          "MemoryOptimized_M700",
          "MemoryOptimized_M1000",
          "MemoryOptimized_M1500",
          "MemoryOptimized_M2000",
          "ComputeOptimized_X3",
          "ComputeOptimized_X5",
          "ComputeOptimized_X10",
          "ComputeOptimized_X20",
          "ComputeOptimized_X50",
          "ComputeOptimized_X100",
          "ComputeOptimized_X150",
          "ComputeOptimized_X250",
          "ComputeOptimized_X350",
          "ComputeOptimized_X500",
          "ComputeOptimized_X700",
          "FlashOptimized_A250",
          "FlashOptimized_A500",
          "FlashOptimized_A700",
          "FlashOptimized_A1000",
          "FlashOptimized_A1500",
          "FlashOptimized_A2000",
          "FlashOptimized_A4500",
        ]),
        capacity: Schema.optional(Schema.Number),
      }),
    ),
    properties: Schema.optional(
      Schema.Struct({
        highAvailability: Schema.optional(
          Schema.Literals(["Enabled", "Disabled"]),
        ),
        minimumTlsVersion: Schema.optional(
          Schema.Literals(["1.0", "1.1", "1.2"]),
        ),
        encryption: Schema.optional(
          Schema.Struct({
            customerManagedKeyEncryption: Schema.optional(
              Schema.Struct({
                keyEncryptionKeyIdentity: Schema.optional(
                  Schema.Struct({
                    userAssignedIdentityResourceId: Schema.optional(
                      Schema.String,
                    ),
                    identityType: Schema.optional(
                      Schema.Literals([
                        "systemAssignedIdentity",
                        "userAssignedIdentity",
                      ]),
                    ),
                  }),
                ),
                keyEncryptionKeyUrl: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
        hostName: Schema.optional(Schema.String),
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
        redundancyMode: Schema.optional(Schema.Literals(["None", "LR", "ZR"])),
        resourceState: Schema.optional(
          Schema.Literals([
            "Running",
            "Creating",
            "CreateFailed",
            "Updating",
            "UpdateFailed",
            "Deleting",
            "DeleteFailed",
            "Enabling",
            "EnableFailed",
            "Disabling",
            "DisableFailed",
            "Disabled",
            "Scaling",
            "ScalingFailed",
            "Moving",
          ]),
        ),
        redisVersion: Schema.optional(Schema.String),
        privateEndpointConnections: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              name: Schema.optional(Schema.String),
              type: Schema.optional(Schema.String),
            }),
          ),
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
          "SystemAssigned, UserAssigned",
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
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/redisEnterprise/{clusterName}",
      apiVersion: "2025-07-01",
    }),
  );
export type RedisEnterpriseUpdateInput = typeof RedisEnterpriseUpdateInput.Type;

// Output Schema
export const RedisEnterpriseUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  });
export type RedisEnterpriseUpdateOutput =
  typeof RedisEnterpriseUpdateOutput.Type;

// The operation
/**
 * Updates an existing Redis Enterprise cluster
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const RedisEnterpriseUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RedisEnterpriseUpdateInput,
    outputSchema: RedisEnterpriseUpdateOutput,
  }),
);
