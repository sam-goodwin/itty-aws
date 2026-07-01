/**
 * Azure Datamigration API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface DatabaseMigrationsMongoToCosmosDbRUMongoCreateInput {
  resourceGroupName: string;
  targetResourceName: string;
  migrationName: string;
  subscriptionId: string;
  properties?: {
    kind: "SqlMi" | "SqlVm" | "SqlDb" | "MongoToCosmosDbMongo";
    scope?: string;
    provisioningState?:
      | "Provisioning"
      | "Updating"
      | "Succeeded"
      | "Failed"
      | "Canceled";
    migrationStatus?: string;
    startedOn?: string;
    endedOn?: string;
    migrationService?: string;
    migrationOperationId?: string;
    migrationFailureError?: { code?: string; message?: string };
    provisioningError?: string;
  };
}
export const DatabaseMigrationsMongoToCosmosDbRUMongoCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    targetResourceName: Schema.String.pipe(T.PathParam()),
    migrationName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        kind: Schema.Literals([
          "SqlMi",
          "SqlVm",
          "SqlDb",
          "MongoToCosmosDbMongo",
        ]),
        scope: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Provisioning",
            "Updating",
            "Succeeded",
            "Failed",
            "Canceled",
          ]),
        ),
        migrationStatus: Schema.optional(Schema.String),
        startedOn: Schema.optional(Schema.String),
        endedOn: Schema.optional(Schema.String),
        migrationService: Schema.optional(Schema.String),
        migrationOperationId: Schema.optional(Schema.String),
        migrationFailureError: Schema.optional(
          Schema.Struct({
            code: Schema.optional(Schema.String),
            message: Schema.optional(Schema.String),
          }),
        ),
        provisioningError: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{targetResourceName}/providers/Microsoft.DataMigration/databaseMigrations/{migrationName}",
      apiVersion: "2025-06-30",
    }),
  ) as unknown as Schema.Codec<DatabaseMigrationsMongoToCosmosDbRUMongoCreateInput>;

// Output Schema
export interface DatabaseMigrationsMongoToCosmosDbRUMongoCreateOutput {
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
export const DatabaseMigrationsMongoToCosmosDbRUMongoCreateOutput =
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
  }) as unknown as Schema.Codec<DatabaseMigrationsMongoToCosmosDbRUMongoCreateOutput>;

// The operation
/**
 * Create or Update Database Migration resource.
 *
 * @param resourceGroupName - Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param targetResourceName - The name of the target resource/account.
 * @param migrationName - Name of the migration.
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param api-version - API version to use for the request.
 */
export const DatabaseMigrationsMongoToCosmosDbRUMongoCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DatabaseMigrationsMongoToCosmosDbRUMongoCreateInput,
    outputSchema: DatabaseMigrationsMongoToCosmosDbRUMongoCreateOutput,
  }));
// Input Schema
export interface DatabaseMigrationsMongoToCosmosDbRUMongoDeleteInput {
  resourceGroupName: string;
  targetResourceName: string;
  migrationName: string;
  subscriptionId: string;
  force?: boolean;
}
export const DatabaseMigrationsMongoToCosmosDbRUMongoDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    targetResourceName: Schema.String.pipe(T.PathParam()),
    migrationName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    force: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{targetResourceName}/providers/Microsoft.DataMigration/databaseMigrations/{migrationName}",
      apiVersion: "2025-06-30",
    }),
  ) as unknown as Schema.Codec<DatabaseMigrationsMongoToCosmosDbRUMongoDeleteInput>;

// Output Schema
export type DatabaseMigrationsMongoToCosmosDbRUMongoDeleteOutput = void;
export const DatabaseMigrationsMongoToCosmosDbRUMongoDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DatabaseMigrationsMongoToCosmosDbRUMongoDeleteOutput>;

// The operation
/**
 * Delete Database Migration resource.
 *
 * @param resourceGroupName - Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param targetResourceName - The name of the target resource/account.
 * @param migrationName - Name of the migration.
 * @param force - Optional force delete boolean. If this is provided as true, migration will be deleted even if active.
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param api-version - API version to use for the request.
 */
export const DatabaseMigrationsMongoToCosmosDbRUMongoDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DatabaseMigrationsMongoToCosmosDbRUMongoDeleteInput,
    outputSchema: DatabaseMigrationsMongoToCosmosDbRUMongoDeleteOutput,
  }));
// Input Schema
export interface DatabaseMigrationsMongoToCosmosDbRUMongoGetInput {
  resourceGroupName: string;
  targetResourceName: string;
  migrationName: string;
  subscriptionId: string;
}
export const DatabaseMigrationsMongoToCosmosDbRUMongoGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    targetResourceName: Schema.String.pipe(T.PathParam()),
    migrationName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{targetResourceName}/providers/Microsoft.DataMigration/databaseMigrations/{migrationName}",
      apiVersion: "2025-06-30",
    }),
  ) as unknown as Schema.Codec<DatabaseMigrationsMongoToCosmosDbRUMongoGetInput>;

// Output Schema
export interface DatabaseMigrationsMongoToCosmosDbRUMongoGetOutput {
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
export const DatabaseMigrationsMongoToCosmosDbRUMongoGetOutput =
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
  }) as unknown as Schema.Codec<DatabaseMigrationsMongoToCosmosDbRUMongoGetOutput>;

// The operation
/**
 * Get Database Migration resource.
 *
 * @param resourceGroupName - Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param targetResourceName - The name of the target resource/account.
 * @param migrationName - Name of the migration.
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param api-version - API version to use for the request.
 */
export const DatabaseMigrationsMongoToCosmosDbRUMongoGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DatabaseMigrationsMongoToCosmosDbRUMongoGetInput,
    outputSchema: DatabaseMigrationsMongoToCosmosDbRUMongoGetOutput,
  }));
// Input Schema
export interface DatabaseMigrationsMongoToCosmosDbRUMongoGetForScopeInput {
  resourceGroupName: string;
  targetResourceName: string;
  subscriptionId: string;
}
export const DatabaseMigrationsMongoToCosmosDbRUMongoGetForScopeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    targetResourceName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{targetResourceName}/providers/Microsoft.DataMigration/databaseMigrations",
      apiVersion: "2025-06-30",
    }),
  ) as unknown as Schema.Codec<DatabaseMigrationsMongoToCosmosDbRUMongoGetForScopeInput>;

// Output Schema
export interface DatabaseMigrationsMongoToCosmosDbRUMongoGetForScopeOutput {
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
  nextLink?: string;
}
export const DatabaseMigrationsMongoToCosmosDbRUMongoGetForScopeOutput =
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DatabaseMigrationsMongoToCosmosDbRUMongoGetForScopeOutput>;

// The operation
/**
 * Get Database Migration resources for the scope.
 *
 * @param resourceGroupName - Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param targetResourceName - The name of the target resource/account.
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param api-version - API version to use for the request.
 */
export const DatabaseMigrationsMongoToCosmosDbRUMongoGetForScope =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DatabaseMigrationsMongoToCosmosDbRUMongoGetForScopeInput,
    outputSchema: DatabaseMigrationsMongoToCosmosDbRUMongoGetForScopeOutput,
  }));
// Input Schema
export interface DatabaseMigrationsMongoToCosmosDbvCoreMongoCreateInput {
  resourceGroupName: string;
  targetResourceName: string;
  migrationName: string;
  subscriptionId: string;
  properties?: {
    kind: "SqlMi" | "SqlVm" | "SqlDb" | "MongoToCosmosDbMongo";
    scope?: string;
    provisioningState?:
      | "Provisioning"
      | "Updating"
      | "Succeeded"
      | "Failed"
      | "Canceled";
    migrationStatus?: string;
    startedOn?: string;
    endedOn?: string;
    migrationService?: string;
    migrationOperationId?: string;
    migrationFailureError?: { code?: string; message?: string };
    provisioningError?: string;
  };
}
export const DatabaseMigrationsMongoToCosmosDbvCoreMongoCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    targetResourceName: Schema.String.pipe(T.PathParam()),
    migrationName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        kind: Schema.Literals([
          "SqlMi",
          "SqlVm",
          "SqlDb",
          "MongoToCosmosDbMongo",
        ]),
        scope: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Provisioning",
            "Updating",
            "Succeeded",
            "Failed",
            "Canceled",
          ]),
        ),
        migrationStatus: Schema.optional(Schema.String),
        startedOn: Schema.optional(Schema.String),
        endedOn: Schema.optional(Schema.String),
        migrationService: Schema.optional(Schema.String),
        migrationOperationId: Schema.optional(Schema.String),
        migrationFailureError: Schema.optional(
          Schema.Struct({
            code: Schema.optional(Schema.String),
            message: Schema.optional(Schema.String),
          }),
        ),
        provisioningError: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/mongoClusters/{targetResourceName}/providers/Microsoft.DataMigration/databaseMigrations/{migrationName}",
      apiVersion: "2025-06-30",
    }),
  ) as unknown as Schema.Codec<DatabaseMigrationsMongoToCosmosDbvCoreMongoCreateInput>;

// Output Schema
export interface DatabaseMigrationsMongoToCosmosDbvCoreMongoCreateOutput {
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
export const DatabaseMigrationsMongoToCosmosDbvCoreMongoCreateOutput =
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
  }) as unknown as Schema.Codec<DatabaseMigrationsMongoToCosmosDbvCoreMongoCreateOutput>;

// The operation
/**
 * Create or Update Database Migration resource.
 *
 * @param resourceGroupName - Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param targetResourceName - The name of the target resource/account.
 * @param migrationName - Name of the migration.
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param api-version - API version to use for the request.
 */
export const DatabaseMigrationsMongoToCosmosDbvCoreMongoCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DatabaseMigrationsMongoToCosmosDbvCoreMongoCreateInput,
    outputSchema: DatabaseMigrationsMongoToCosmosDbvCoreMongoCreateOutput,
  }));
// Input Schema
export interface DatabaseMigrationsMongoToCosmosDbvCoreMongoDeleteInput {
  resourceGroupName: string;
  targetResourceName: string;
  migrationName: string;
  subscriptionId: string;
  force?: boolean;
}
export const DatabaseMigrationsMongoToCosmosDbvCoreMongoDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    targetResourceName: Schema.String.pipe(T.PathParam()),
    migrationName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    force: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/mongoClusters/{targetResourceName}/providers/Microsoft.DataMigration/databaseMigrations/{migrationName}",
      apiVersion: "2025-06-30",
    }),
  ) as unknown as Schema.Codec<DatabaseMigrationsMongoToCosmosDbvCoreMongoDeleteInput>;

// Output Schema
export type DatabaseMigrationsMongoToCosmosDbvCoreMongoDeleteOutput = void;
export const DatabaseMigrationsMongoToCosmosDbvCoreMongoDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DatabaseMigrationsMongoToCosmosDbvCoreMongoDeleteOutput>;

// The operation
/**
 * Delete Database Migration resource.
 *
 * @param resourceGroupName - Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param targetResourceName - The name of the target resource/account.
 * @param migrationName - Name of the migration.
 * @param force - Optional force delete boolean. If this is provided as true, migration will be deleted even if active.
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param api-version - API version to use for the request.
 */
export const DatabaseMigrationsMongoToCosmosDbvCoreMongoDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DatabaseMigrationsMongoToCosmosDbvCoreMongoDeleteInput,
    outputSchema: DatabaseMigrationsMongoToCosmosDbvCoreMongoDeleteOutput,
  }));
// Input Schema
export interface DatabaseMigrationsMongoToCosmosDbvCoreMongoGetInput {
  resourceGroupName: string;
  targetResourceName: string;
  migrationName: string;
  subscriptionId: string;
}
export const DatabaseMigrationsMongoToCosmosDbvCoreMongoGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    targetResourceName: Schema.String.pipe(T.PathParam()),
    migrationName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/mongoClusters/{targetResourceName}/providers/Microsoft.DataMigration/databaseMigrations/{migrationName}",
      apiVersion: "2025-06-30",
    }),
  ) as unknown as Schema.Codec<DatabaseMigrationsMongoToCosmosDbvCoreMongoGetInput>;

// Output Schema
export interface DatabaseMigrationsMongoToCosmosDbvCoreMongoGetOutput {
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
export const DatabaseMigrationsMongoToCosmosDbvCoreMongoGetOutput =
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
  }) as unknown as Schema.Codec<DatabaseMigrationsMongoToCosmosDbvCoreMongoGetOutput>;

// The operation
/**
 * Get Database Migration resource.
 *
 * @param resourceGroupName - Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param targetResourceName - The name of the target resource/account.
 * @param migrationName - Name of the migration.
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param api-version - API version to use for the request.
 */
export const DatabaseMigrationsMongoToCosmosDbvCoreMongoGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DatabaseMigrationsMongoToCosmosDbvCoreMongoGetInput,
    outputSchema: DatabaseMigrationsMongoToCosmosDbvCoreMongoGetOutput,
  }));
// Input Schema
export interface DatabaseMigrationsMongoToCosmosDbvCoreMongoGetForScopeInput {
  resourceGroupName: string;
  targetResourceName: string;
  subscriptionId: string;
}
export const DatabaseMigrationsMongoToCosmosDbvCoreMongoGetForScopeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    targetResourceName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/mongoClusters/{targetResourceName}/providers/Microsoft.DataMigration/databaseMigrations",
      apiVersion: "2025-06-30",
    }),
  ) as unknown as Schema.Codec<DatabaseMigrationsMongoToCosmosDbvCoreMongoGetForScopeInput>;

// Output Schema
export interface DatabaseMigrationsMongoToCosmosDbvCoreMongoGetForScopeOutput {
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
  nextLink?: string;
}
export const DatabaseMigrationsMongoToCosmosDbvCoreMongoGetForScopeOutput =
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DatabaseMigrationsMongoToCosmosDbvCoreMongoGetForScopeOutput>;

// The operation
/**
 * Get Database Migration resources for the scope.
 *
 * @param resourceGroupName - Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param targetResourceName - The name of the target resource/account.
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param api-version - API version to use for the request.
 */
export const DatabaseMigrationsMongoToCosmosDbvCoreMongoGetForScope =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DatabaseMigrationsMongoToCosmosDbvCoreMongoGetForScopeInput,
    outputSchema: DatabaseMigrationsMongoToCosmosDbvCoreMongoGetForScopeOutput,
  }));
// Input Schema
export interface DatabaseMigrationsSqlDbCancelInput {
  resourceGroupName: string;
  sqlDbInstanceName: string;
  targetDbName: string;
  subscriptionId: string;
  migrationOperationId?: string;
}
export const DatabaseMigrationsSqlDbCancelInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlDbInstanceName: Schema.String.pipe(T.PathParam()),
    targetDbName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    migrationOperationId: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{sqlDbInstanceName}/providers/Microsoft.DataMigration/databaseMigrations/{targetDbName}/cancel",
      apiVersion: "2025-06-30",
    }),
  ) as unknown as Schema.Codec<DatabaseMigrationsSqlDbCancelInput>;

// Output Schema
export type DatabaseMigrationsSqlDbCancelOutput = void;
export const DatabaseMigrationsSqlDbCancelOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DatabaseMigrationsSqlDbCancelOutput>;

// The operation
/**
 * Stop on going migration for the database.
 *
 * @param resourceGroupName - Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param targetDbName - The name of the target database.
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param api-version - API version to use for the request.
 */
export const DatabaseMigrationsSqlDbCancel =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DatabaseMigrationsSqlDbCancelInput,
    outputSchema: DatabaseMigrationsSqlDbCancelOutput,
  }));
// Input Schema
export interface DatabaseMigrationsSqlDbCreateOrUpdateInput {
  resourceGroupName: string;
  sqlDbInstanceName: string;
  targetDbName: string;
  subscriptionId: string;
  properties?: {
    kind: "SqlMi" | "SqlVm" | "SqlDb" | "MongoToCosmosDbMongo";
    scope?: string;
    provisioningState?:
      | "Provisioning"
      | "Updating"
      | "Succeeded"
      | "Failed"
      | "Canceled";
    migrationStatus?: string;
    startedOn?: string;
    endedOn?: string;
    migrationService?: string;
    migrationOperationId?: string;
    migrationFailureError?: { code?: string; message?: string };
    provisioningError?: string;
  };
}
export const DatabaseMigrationsSqlDbCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlDbInstanceName: Schema.String.pipe(T.PathParam()),
    targetDbName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        kind: Schema.Literals([
          "SqlMi",
          "SqlVm",
          "SqlDb",
          "MongoToCosmosDbMongo",
        ]),
        scope: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Provisioning",
            "Updating",
            "Succeeded",
            "Failed",
            "Canceled",
          ]),
        ),
        migrationStatus: Schema.optional(Schema.String),
        startedOn: Schema.optional(Schema.String),
        endedOn: Schema.optional(Schema.String),
        migrationService: Schema.optional(Schema.String),
        migrationOperationId: Schema.optional(Schema.String),
        migrationFailureError: Schema.optional(
          Schema.Struct({
            code: Schema.optional(Schema.String),
            message: Schema.optional(Schema.String),
          }),
        ),
        provisioningError: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{sqlDbInstanceName}/providers/Microsoft.DataMigration/databaseMigrations/{targetDbName}",
      apiVersion: "2025-06-30",
    }),
  ) as unknown as Schema.Codec<DatabaseMigrationsSqlDbCreateOrUpdateInput>;

// Output Schema
export interface DatabaseMigrationsSqlDbCreateOrUpdateOutput {
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
export const DatabaseMigrationsSqlDbCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<DatabaseMigrationsSqlDbCreateOrUpdateOutput>;

// The operation
/**
 * Create or Update Database Migration resource.
 *
 * @param resourceGroupName - Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param targetDbName - The name of the target database.
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param api-version - API version to use for the request.
 */
export const DatabaseMigrationsSqlDbCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DatabaseMigrationsSqlDbCreateOrUpdateInput,
    outputSchema: DatabaseMigrationsSqlDbCreateOrUpdateOutput,
  }));
// Input Schema
export interface DatabaseMigrationsSqlDbDeleteInput {
  resourceGroupName: string;
  sqlDbInstanceName: string;
  targetDbName: string;
  subscriptionId: string;
  force?: boolean;
}
export const DatabaseMigrationsSqlDbDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlDbInstanceName: Schema.String.pipe(T.PathParam()),
    targetDbName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    force: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{sqlDbInstanceName}/providers/Microsoft.DataMigration/databaseMigrations/{targetDbName}",
      apiVersion: "2025-06-30",
    }),
  ) as unknown as Schema.Codec<DatabaseMigrationsSqlDbDeleteInput>;

// Output Schema
export type DatabaseMigrationsSqlDbDeleteOutput = void;
export const DatabaseMigrationsSqlDbDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DatabaseMigrationsSqlDbDeleteOutput>;

// The operation
/**
 * Delete Database Migration resource.
 *
 * @param resourceGroupName - Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param targetDbName - The name of the target database.
 * @param force - Optional force delete boolean. If this is provided as true, migration will be deleted even if active.
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param api-version - API version to use for the request.
 */
export const DatabaseMigrationsSqlDbDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DatabaseMigrationsSqlDbDeleteInput,
    outputSchema: DatabaseMigrationsSqlDbDeleteOutput,
  }));
// Input Schema
export interface DatabaseMigrationsSqlDbGetInput {
  resourceGroupName: string;
  sqlDbInstanceName: string;
  targetDbName: string;
  subscriptionId: string;
  migrationOperationId?: string;
  $expand?: string;
}
export const DatabaseMigrationsSqlDbGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlDbInstanceName: Schema.String.pipe(T.PathParam()),
    targetDbName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    migrationOperationId: Schema.optional(Schema.String),
    $expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{sqlDbInstanceName}/providers/Microsoft.DataMigration/databaseMigrations/{targetDbName}",
      apiVersion: "2025-06-30",
    }),
  ) as unknown as Schema.Codec<DatabaseMigrationsSqlDbGetInput>;

// Output Schema
export interface DatabaseMigrationsSqlDbGetOutput {
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
export const DatabaseMigrationsSqlDbGetOutput =
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
  }) as unknown as Schema.Codec<DatabaseMigrationsSqlDbGetOutput>;

// The operation
/**
 * Retrieve the Database Migration resource.
 *
 * @param resourceGroupName - Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param targetDbName - The name of the target database.
 * @param migrationOperationId - Optional migration operation ID. If this is provided, then details of migration operation for that ID are retrieved. If not provided (default), then details related to most recent or current operation are retrieved.
 * @param $expand - Complete migration details be included in the response.
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param api-version - API version to use for the request.
 */
export const DatabaseMigrationsSqlDbGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DatabaseMigrationsSqlDbGetInput,
    outputSchema: DatabaseMigrationsSqlDbGetOutput,
  }),
);
// Input Schema
export interface DatabaseMigrationsSqlDbRetryInput {
  resourceGroupName: string;
  sqlDbInstanceName: string;
  targetDbName: string;
  subscriptionId: string;
  migrationOperationId?: string;
}
export const DatabaseMigrationsSqlDbRetryInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlDbInstanceName: Schema.String.pipe(T.PathParam()),
    targetDbName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    migrationOperationId: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{sqlDbInstanceName}/providers/Microsoft.DataMigration/databaseMigrations/{targetDbName}/retry",
      apiVersion: "2025-06-30",
    }),
  ) as unknown as Schema.Codec<DatabaseMigrationsSqlDbRetryInput>;

// Output Schema
export type DatabaseMigrationsSqlDbRetryOutput = void;
export const DatabaseMigrationsSqlDbRetryOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DatabaseMigrationsSqlDbRetryOutput>;

// The operation
/**
 * Retry on going migration for the database.
 *
 * @param resourceGroupName - Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param targetDbName - The name of the target database.
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param api-version - API version to use for the request.
 */
export const DatabaseMigrationsSqlDbRetry =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DatabaseMigrationsSqlDbRetryInput,
    outputSchema: DatabaseMigrationsSqlDbRetryOutput,
  }));
// Input Schema
export interface DatabaseMigrationsSqlMiCancelInput {
  resourceGroupName: string;
  managedInstanceName: string;
  targetDbName: string;
  subscriptionId: string;
  migrationOperationId?: string;
}
export const DatabaseMigrationsSqlMiCancelInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    managedInstanceName: Schema.String.pipe(T.PathParam()),
    targetDbName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    migrationOperationId: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/providers/Microsoft.DataMigration/databaseMigrations/{targetDbName}/cancel",
      apiVersion: "2025-06-30",
    }),
  ) as unknown as Schema.Codec<DatabaseMigrationsSqlMiCancelInput>;

// Output Schema
export type DatabaseMigrationsSqlMiCancelOutput = void;
export const DatabaseMigrationsSqlMiCancelOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DatabaseMigrationsSqlMiCancelOutput>;

// The operation
/**
 * Stop in-progress database migration to SQL Managed Instance.
 *
 * @param resourceGroupName - Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param targetDbName - The name of the target database.
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param api-version - API version to use for the request.
 */
export const DatabaseMigrationsSqlMiCancel =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DatabaseMigrationsSqlMiCancelInput,
    outputSchema: DatabaseMigrationsSqlMiCancelOutput,
  }));
// Input Schema
export interface DatabaseMigrationsSqlMiCreateOrUpdateInput {
  resourceGroupName: string;
  managedInstanceName: string;
  targetDbName: string;
  subscriptionId: string;
  properties?: {
    kind: "SqlMi" | "SqlVm" | "SqlDb" | "MongoToCosmosDbMongo";
    scope?: string;
    provisioningState?:
      | "Provisioning"
      | "Updating"
      | "Succeeded"
      | "Failed"
      | "Canceled";
    migrationStatus?: string;
    startedOn?: string;
    endedOn?: string;
    migrationService?: string;
    migrationOperationId?: string;
    migrationFailureError?: { code?: string; message?: string };
    provisioningError?: string;
  };
}
export const DatabaseMigrationsSqlMiCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    managedInstanceName: Schema.String.pipe(T.PathParam()),
    targetDbName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        kind: Schema.Literals([
          "SqlMi",
          "SqlVm",
          "SqlDb",
          "MongoToCosmosDbMongo",
        ]),
        scope: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Provisioning",
            "Updating",
            "Succeeded",
            "Failed",
            "Canceled",
          ]),
        ),
        migrationStatus: Schema.optional(Schema.String),
        startedOn: Schema.optional(Schema.String),
        endedOn: Schema.optional(Schema.String),
        migrationService: Schema.optional(Schema.String),
        migrationOperationId: Schema.optional(Schema.String),
        migrationFailureError: Schema.optional(
          Schema.Struct({
            code: Schema.optional(Schema.String),
            message: Schema.optional(Schema.String),
          }),
        ),
        provisioningError: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/providers/Microsoft.DataMigration/databaseMigrations/{targetDbName}",
      apiVersion: "2025-06-30",
    }),
  ) as unknown as Schema.Codec<DatabaseMigrationsSqlMiCreateOrUpdateInput>;

// Output Schema
export interface DatabaseMigrationsSqlMiCreateOrUpdateOutput {
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
export const DatabaseMigrationsSqlMiCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<DatabaseMigrationsSqlMiCreateOrUpdateOutput>;

// The operation
/**
 * Create a new database migration to a given SQL Managed Instance.
 *
 * @param resourceGroupName - Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param targetDbName - The name of the target database.
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param api-version - API version to use for the request.
 */
export const DatabaseMigrationsSqlMiCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DatabaseMigrationsSqlMiCreateOrUpdateInput,
    outputSchema: DatabaseMigrationsSqlMiCreateOrUpdateOutput,
  }));
// Input Schema
export interface DatabaseMigrationsSqlMiCutoverInput {
  resourceGroupName: string;
  managedInstanceName: string;
  targetDbName: string;
  subscriptionId: string;
  migrationOperationId?: string;
}
export const DatabaseMigrationsSqlMiCutoverInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    managedInstanceName: Schema.String.pipe(T.PathParam()),
    targetDbName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    migrationOperationId: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/providers/Microsoft.DataMigration/databaseMigrations/{targetDbName}/cutover",
      apiVersion: "2025-06-30",
    }),
  ) as unknown as Schema.Codec<DatabaseMigrationsSqlMiCutoverInput>;

// Output Schema
export type DatabaseMigrationsSqlMiCutoverOutput = void;
export const DatabaseMigrationsSqlMiCutoverOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DatabaseMigrationsSqlMiCutoverOutput>;

// The operation
/**
 * Initiate cutover for in-progress online database migration to SQL Managed Instance.
 *
 * @param resourceGroupName - Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param targetDbName - The name of the target database.
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param api-version - API version to use for the request.
 */
export const DatabaseMigrationsSqlMiCutover =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DatabaseMigrationsSqlMiCutoverInput,
    outputSchema: DatabaseMigrationsSqlMiCutoverOutput,
  }));
// Input Schema
export interface DatabaseMigrationsSqlMiDeleteInput {
  resourceGroupName: string;
  managedInstanceName: string;
  targetDbName: string;
  subscriptionId: string;
  force?: boolean;
}
export const DatabaseMigrationsSqlMiDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    managedInstanceName: Schema.String.pipe(T.PathParam()),
    targetDbName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    force: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/providers/Microsoft.DataMigration/databaseMigrations/{targetDbName}",
      apiVersion: "2025-06-30",
    }),
  ) as unknown as Schema.Codec<DatabaseMigrationsSqlMiDeleteInput>;

// Output Schema
export interface DatabaseMigrationsSqlMiDeleteOutput {
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
export const DatabaseMigrationsSqlMiDeleteOutput =
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
  }) as unknown as Schema.Codec<DatabaseMigrationsSqlMiDeleteOutput>;

// The operation
/**
 * Delete Database Migration resource.
 *
 * @param resourceGroupName - Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param targetDbName - The name of the target database.
 * @param force - Optional force delete boolean. If this is provided as true, migration will be deleted even if active.
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param api-version - API version to use for the request.
 */
export const DatabaseMigrationsSqlMiDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DatabaseMigrationsSqlMiDeleteInput,
    outputSchema: DatabaseMigrationsSqlMiDeleteOutput,
  }));
// Input Schema
export interface DatabaseMigrationsSqlMiGetInput {
  resourceGroupName: string;
  managedInstanceName: string;
  targetDbName: string;
  subscriptionId: string;
  migrationOperationId?: string;
  $expand?: string;
}
export const DatabaseMigrationsSqlMiGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    managedInstanceName: Schema.String.pipe(T.PathParam()),
    targetDbName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    migrationOperationId: Schema.optional(Schema.String),
    $expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/providers/Microsoft.DataMigration/databaseMigrations/{targetDbName}",
      apiVersion: "2025-06-30",
    }),
  ) as unknown as Schema.Codec<DatabaseMigrationsSqlMiGetInput>;

// Output Schema
export interface DatabaseMigrationsSqlMiGetOutput {
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
export const DatabaseMigrationsSqlMiGetOutput =
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
  }) as unknown as Schema.Codec<DatabaseMigrationsSqlMiGetOutput>;

// The operation
/**
 * Retrieve the specified database migration for a given SQL Managed Instance.
 *
 * @param resourceGroupName - Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param targetDbName - The name of the target database.
 * @param migrationOperationId - Optional migration operation ID. If this is provided, then details of migration operation for that ID are retrieved. If not provided (default), then details related to most recent or current operation are retrieved.
 * @param $expand - Complete migration details be included in the response.
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param api-version - API version to use for the request.
 */
export const DatabaseMigrationsSqlMiGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DatabaseMigrationsSqlMiGetInput,
    outputSchema: DatabaseMigrationsSqlMiGetOutput,
  }),
);
// Input Schema
export interface DatabaseMigrationsSqlVmCancelInput {
  resourceGroupName: string;
  sqlVirtualMachineName: string;
  targetDbName: string;
  subscriptionId: string;
  migrationOperationId?: string;
}
export const DatabaseMigrationsSqlVmCancelInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlVirtualMachineName: Schema.String.pipe(T.PathParam()),
    targetDbName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    migrationOperationId: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachines/{sqlVirtualMachineName}/providers/Microsoft.DataMigration/databaseMigrations/{targetDbName}/cancel",
      apiVersion: "2025-06-30",
    }),
  ) as unknown as Schema.Codec<DatabaseMigrationsSqlVmCancelInput>;

// Output Schema
export type DatabaseMigrationsSqlVmCancelOutput = void;
export const DatabaseMigrationsSqlVmCancelOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DatabaseMigrationsSqlVmCancelOutput>;

// The operation
/**
 * Stop in-progress database migration to SQL VM.
 *
 * @param resourceGroupName - Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param targetDbName - The name of the target database.
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param api-version - API version to use for the request.
 */
export const DatabaseMigrationsSqlVmCancel =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DatabaseMigrationsSqlVmCancelInput,
    outputSchema: DatabaseMigrationsSqlVmCancelOutput,
  }));
// Input Schema
export interface DatabaseMigrationsSqlVmCreateOrUpdateInput {
  resourceGroupName: string;
  sqlVirtualMachineName: string;
  targetDbName: string;
  subscriptionId: string;
  properties?: {
    kind: "SqlMi" | "SqlVm" | "SqlDb" | "MongoToCosmosDbMongo";
    scope?: string;
    provisioningState?:
      | "Provisioning"
      | "Updating"
      | "Succeeded"
      | "Failed"
      | "Canceled";
    migrationStatus?: string;
    startedOn?: string;
    endedOn?: string;
    migrationService?: string;
    migrationOperationId?: string;
    migrationFailureError?: { code?: string; message?: string };
    provisioningError?: string;
  };
}
export const DatabaseMigrationsSqlVmCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlVirtualMachineName: Schema.String.pipe(T.PathParam()),
    targetDbName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        kind: Schema.Literals([
          "SqlMi",
          "SqlVm",
          "SqlDb",
          "MongoToCosmosDbMongo",
        ]),
        scope: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Provisioning",
            "Updating",
            "Succeeded",
            "Failed",
            "Canceled",
          ]),
        ),
        migrationStatus: Schema.optional(Schema.String),
        startedOn: Schema.optional(Schema.String),
        endedOn: Schema.optional(Schema.String),
        migrationService: Schema.optional(Schema.String),
        migrationOperationId: Schema.optional(Schema.String),
        migrationFailureError: Schema.optional(
          Schema.Struct({
            code: Schema.optional(Schema.String),
            message: Schema.optional(Schema.String),
          }),
        ),
        provisioningError: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachines/{sqlVirtualMachineName}/providers/Microsoft.DataMigration/databaseMigrations/{targetDbName}",
      apiVersion: "2025-06-30",
    }),
  ) as unknown as Schema.Codec<DatabaseMigrationsSqlVmCreateOrUpdateInput>;

// Output Schema
export interface DatabaseMigrationsSqlVmCreateOrUpdateOutput {
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
export const DatabaseMigrationsSqlVmCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<DatabaseMigrationsSqlVmCreateOrUpdateOutput>;

// The operation
/**
 * Create a new database migration to a given SQL VM.
 *
 * @param resourceGroupName - Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param targetDbName - The name of the target database.
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param api-version - API version to use for the request.
 */
export const DatabaseMigrationsSqlVmCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DatabaseMigrationsSqlVmCreateOrUpdateInput,
    outputSchema: DatabaseMigrationsSqlVmCreateOrUpdateOutput,
  }));
// Input Schema
export interface DatabaseMigrationsSqlVmCutoverInput {
  resourceGroupName: string;
  sqlVirtualMachineName: string;
  targetDbName: string;
  subscriptionId: string;
  migrationOperationId?: string;
}
export const DatabaseMigrationsSqlVmCutoverInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlVirtualMachineName: Schema.String.pipe(T.PathParam()),
    targetDbName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    migrationOperationId: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachines/{sqlVirtualMachineName}/providers/Microsoft.DataMigration/databaseMigrations/{targetDbName}/cutover",
      apiVersion: "2025-06-30",
    }),
  ) as unknown as Schema.Codec<DatabaseMigrationsSqlVmCutoverInput>;

// Output Schema
export type DatabaseMigrationsSqlVmCutoverOutput = void;
export const DatabaseMigrationsSqlVmCutoverOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DatabaseMigrationsSqlVmCutoverOutput>;

// The operation
/**
 * Initiate cutover for in-progress online database migration to SQL VM.
 *
 * @param resourceGroupName - Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param targetDbName - The name of the target database.
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param api-version - API version to use for the request.
 */
export const DatabaseMigrationsSqlVmCutover =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DatabaseMigrationsSqlVmCutoverInput,
    outputSchema: DatabaseMigrationsSqlVmCutoverOutput,
  }));
// Input Schema
export interface DatabaseMigrationsSqlVmDeleteInput {
  resourceGroupName: string;
  sqlVirtualMachineName: string;
  targetDbName: string;
  subscriptionId: string;
  force?: boolean;
}
export const DatabaseMigrationsSqlVmDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlVirtualMachineName: Schema.String.pipe(T.PathParam()),
    targetDbName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    force: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachines/{sqlVirtualMachineName}/providers/Microsoft.DataMigration/databaseMigrations/{targetDbName}",
      apiVersion: "2025-06-30",
    }),
  ) as unknown as Schema.Codec<DatabaseMigrationsSqlVmDeleteInput>;

// Output Schema
export interface DatabaseMigrationsSqlVmDeleteOutput {
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
export const DatabaseMigrationsSqlVmDeleteOutput =
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
  }) as unknown as Schema.Codec<DatabaseMigrationsSqlVmDeleteOutput>;

// The operation
/**
 * Delete Database Migration resource.
 *
 * @param resourceGroupName - Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param targetDbName - The name of the target database.
 * @param force - Optional force delete boolean. If this is provided as true, migration will be deleted even if active.
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param api-version - API version to use for the request.
 */
export const DatabaseMigrationsSqlVmDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DatabaseMigrationsSqlVmDeleteInput,
    outputSchema: DatabaseMigrationsSqlVmDeleteOutput,
  }));
// Input Schema
export interface DatabaseMigrationsSqlVmGetInput {
  resourceGroupName: string;
  sqlVirtualMachineName: string;
  targetDbName: string;
  subscriptionId: string;
  migrationOperationId?: string;
  $expand?: string;
}
export const DatabaseMigrationsSqlVmGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlVirtualMachineName: Schema.String.pipe(T.PathParam()),
    targetDbName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    migrationOperationId: Schema.optional(Schema.String),
    $expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachines/{sqlVirtualMachineName}/providers/Microsoft.DataMigration/databaseMigrations/{targetDbName}",
      apiVersion: "2025-06-30",
    }),
  ) as unknown as Schema.Codec<DatabaseMigrationsSqlVmGetInput>;

// Output Schema
export interface DatabaseMigrationsSqlVmGetOutput {
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
export const DatabaseMigrationsSqlVmGetOutput =
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
  }) as unknown as Schema.Codec<DatabaseMigrationsSqlVmGetOutput>;

// The operation
/**
 * Retrieve the specified database migration for a given SQL VM.
 *
 * @param resourceGroupName - Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param targetDbName - The name of the target database.
 * @param migrationOperationId - Optional migration operation ID. If this is provided, then details of migration operation for that ID are retrieved. If not provided (default), then details related to most recent or current operation are retrieved.
 * @param $expand - Complete migration details be included in the response.
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param api-version - API version to use for the request.
 */
export const DatabaseMigrationsSqlVmGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DatabaseMigrationsSqlVmGetInput,
    outputSchema: DatabaseMigrationsSqlVmGetOutput,
  }),
);
// Input Schema
export interface FilesCreateOrUpdateInput {
  subscriptionId: string;
  groupName: string;
  serviceName: string;
  projectName: string;
  fileName: string;
  etag?: string;
  properties?: {
    extension?: string;
    filePath?: string;
    lastModified?: string;
    mediaType?: string;
    size?: number;
  };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  id?: string;
  name?: string;
  type?: string;
}
export const FilesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    fileName: Schema.String.pipe(T.PathParam()),
    etag: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        extension: Schema.optional(Schema.String),
        filePath: Schema.optional(Schema.String),
        lastModified: Schema.optional(Schema.String),
        mediaType: Schema.optional(Schema.String),
        size: Schema.optional(Schema.Number),
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
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/projects/{projectName}/files/{fileName}",
      apiVersion: "2025-06-30",
    }),
  ) as unknown as Schema.Codec<FilesCreateOrUpdateInput>;

// Output Schema
export interface FilesCreateOrUpdateOutput {
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
export const FilesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<FilesCreateOrUpdateOutput>;

// The operation
/**
 * Create a file resource
 *
 * The PUT method creates a new file or updates an existing one.
 *
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param groupName - Name of the resource group
 * @param serviceName - Name of the service
 * @param projectName - Name of the project
 * @param fileName - Name of the File
 * @param api-version - Version of the API
 * @param etag - HTTP strong entity tag value. This is ignored if submitted.
 * @param properties - Custom file properties
 * @param systemData - Metadata pertaining to creation and last modification of the resource.
 */
export const FilesCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FilesCreateOrUpdateInput,
  outputSchema: FilesCreateOrUpdateOutput,
}));
// Input Schema
export interface FilesDeleteInput {
  subscriptionId: string;
  groupName: string;
  serviceName: string;
  projectName: string;
  fileName: string;
}
export const FilesDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  groupName: Schema.String.pipe(T.PathParam()),
  serviceName: Schema.String.pipe(T.PathParam()),
  projectName: Schema.String.pipe(T.PathParam()),
  fileName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/projects/{projectName}/files/{fileName}",
    apiVersion: "2025-06-30",
  }),
) as unknown as Schema.Codec<FilesDeleteInput>;

// Output Schema
export type FilesDeleteOutput = void;
export const FilesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<FilesDeleteOutput>;

// The operation
/**
 * Delete file
 *
 * This method deletes a file.
 *
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param groupName - Name of the resource group
 * @param serviceName - Name of the service
 * @param projectName - Name of the project
 * @param fileName - Name of the File
 * @param api-version - Version of the API
 */
export const FilesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FilesDeleteInput,
  outputSchema: FilesDeleteOutput,
}));
// Input Schema
export interface FilesGetInput {
  subscriptionId: string;
  groupName: string;
  serviceName: string;
  projectName: string;
  fileName: string;
}
export const FilesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  groupName: Schema.String.pipe(T.PathParam()),
  serviceName: Schema.String.pipe(T.PathParam()),
  projectName: Schema.String.pipe(T.PathParam()),
  fileName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/projects/{projectName}/files/{fileName}",
    apiVersion: "2025-06-30",
  }),
) as unknown as Schema.Codec<FilesGetInput>;

// Output Schema
export interface FilesGetOutput {
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
export const FilesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<FilesGetOutput>;

// The operation
/**
 * Get file information
 *
 * The files resource is a nested, proxy-only resource representing a file stored under the project resource. This method retrieves information about a file.
 *
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param groupName - Name of the resource group
 * @param serviceName - Name of the service
 * @param projectName - Name of the project
 * @param fileName - Name of the File
 * @param api-version - Version of the API
 */
export const FilesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FilesGetInput,
  outputSchema: FilesGetOutput,
}));
// Input Schema
export interface FilesListInput {
  subscriptionId: string;
  groupName: string;
  serviceName: string;
  projectName: string;
}
export const FilesListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  groupName: Schema.String.pipe(T.PathParam()),
  serviceName: Schema.String.pipe(T.PathParam()),
  projectName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/projects/{projectName}/files",
    apiVersion: "2025-06-30",
  }),
) as unknown as Schema.Codec<FilesListInput>;

// Output Schema
export interface FilesListOutput {
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
  nextLink?: string;
}
export const FilesListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<FilesListOutput>;

// The operation
/**
 * Get files in a project
 *
 * The project resource is a nested resource representing a stored migration project. This method returns a list of files owned by a project resource.
 *
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param groupName - Name of the resource group
 * @param serviceName - Name of the service
 * @param projectName - Name of the project
 * @param api-version - Version of the API
 */
export const FilesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FilesListInput,
  outputSchema: FilesListOutput,
}));
// Input Schema
export interface FilesReadInput {
  subscriptionId: string;
  groupName: string;
  serviceName: string;
  projectName: string;
  fileName: string;
}
export const FilesReadInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  groupName: Schema.String.pipe(T.PathParam()),
  serviceName: Schema.String.pipe(T.PathParam()),
  projectName: Schema.String.pipe(T.PathParam()),
  fileName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/projects/{projectName}/files/{fileName}/read",
    apiVersion: "2025-06-30",
  }),
) as unknown as Schema.Codec<FilesReadInput>;

// Output Schema
export interface FilesReadOutput {
  uri?: string;
  headers?: Record<string, string>;
}
export const FilesReadOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  uri: Schema.optional(Schema.String),
  headers: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}) as unknown as Schema.Codec<FilesReadOutput>;

// The operation
/**
 * Request storage information for downloading the file content
 *
 * This method is used for requesting storage information using which contents of the file can be downloaded.
 *
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param groupName - Name of the resource group
 * @param serviceName - Name of the service
 * @param projectName - Name of the project
 * @param fileName - Name of the File
 * @param api-version - Version of the API
 */
export const FilesRead = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FilesReadInput,
  outputSchema: FilesReadOutput,
}));
// Input Schema
export interface FilesReadWriteInput {
  subscriptionId: string;
  groupName: string;
  serviceName: string;
  projectName: string;
  fileName: string;
}
export const FilesReadWriteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  groupName: Schema.String.pipe(T.PathParam()),
  serviceName: Schema.String.pipe(T.PathParam()),
  projectName: Schema.String.pipe(T.PathParam()),
  fileName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/projects/{projectName}/files/{fileName}/readwrite",
    apiVersion: "2025-06-30",
  }),
) as unknown as Schema.Codec<FilesReadWriteInput>;

// Output Schema
export interface FilesReadWriteOutput {
  uri?: string;
  headers?: Record<string, string>;
}
export const FilesReadWriteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  uri: Schema.optional(Schema.String),
  headers: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}) as unknown as Schema.Codec<FilesReadWriteOutput>;

// The operation
/**
 * Request information for reading and writing file content.
 *
 * This method is used for requesting information for reading and writing the file content.
 *
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param groupName - Name of the resource group
 * @param serviceName - Name of the service
 * @param projectName - Name of the project
 * @param fileName - Name of the File
 * @param api-version - Version of the API
 */
export const FilesReadWrite = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FilesReadWriteInput,
  outputSchema: FilesReadWriteOutput,
}));
// Input Schema
export interface FilesUpdateInput {
  subscriptionId: string;
  groupName: string;
  serviceName: string;
  projectName: string;
  fileName: string;
  etag?: string;
  properties?: {
    extension?: string;
    filePath?: string;
    lastModified?: string;
    mediaType?: string;
    size?: number;
  };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  id?: string;
  name?: string;
  type?: string;
}
export const FilesUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  groupName: Schema.String.pipe(T.PathParam()),
  serviceName: Schema.String.pipe(T.PathParam()),
  projectName: Schema.String.pipe(T.PathParam()),
  fileName: Schema.String.pipe(T.PathParam()),
  etag: Schema.optional(Schema.String),
  properties: Schema.optional(
    Schema.Struct({
      extension: Schema.optional(Schema.String),
      filePath: Schema.optional(Schema.String),
      lastModified: Schema.optional(Schema.String),
      mediaType: Schema.optional(Schema.String),
      size: Schema.optional(Schema.Number),
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
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/projects/{projectName}/files/{fileName}",
    apiVersion: "2025-06-30",
  }),
) as unknown as Schema.Codec<FilesUpdateInput>;

// Output Schema
export interface FilesUpdateOutput {
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
export const FilesUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<FilesUpdateOutput>;

// The operation
/**
 * Update a file
 *
 * This method updates an existing file.
 *
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param groupName - Name of the resource group
 * @param serviceName - Name of the service
 * @param projectName - Name of the project
 * @param fileName - Name of the File
 * @param api-version - Version of the API
 * @param etag - HTTP strong entity tag value. This is ignored if submitted.
 * @param properties - Custom file properties
 * @param systemData - Metadata pertaining to creation and last modification of the resource.
 */
export const FilesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FilesUpdateInput,
  outputSchema: FilesUpdateOutput,
}));
// Input Schema
export interface MigrationServicesCreateOrUpdateInput {
  resourceGroupName: string;
  migrationServiceName: string;
  subscriptionId: string;
  properties?: {
    provisioningState?:
      | "Provisioning"
      | "Updating"
      | "Succeeded"
      | "Failed"
      | "Canceled";
    integrationRuntimeState?: string;
  };
  tags?: Record<string, string>;
  location: string;
}
export const MigrationServicesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    migrationServiceName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Provisioning",
            "Updating",
            "Succeeded",
            "Failed",
            "Canceled",
          ]),
        ),
        integrationRuntimeState: Schema.optional(Schema.String),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataMigration/migrationServices/{migrationServiceName}",
      apiVersion: "2025-06-30",
    }),
  ) as unknown as Schema.Codec<MigrationServicesCreateOrUpdateInput>;

// Output Schema
export interface MigrationServicesCreateOrUpdateOutput {
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
export const MigrationServicesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<MigrationServicesCreateOrUpdateOutput>;

// The operation
/**
 * Create or Update Database Migration Service.
 *
 * @param resourceGroupName - Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param migrationServiceName - Name of the Migration Service.
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param api-version - API version to use for the request.
 */
export const MigrationServicesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MigrationServicesCreateOrUpdateInput,
    outputSchema: MigrationServicesCreateOrUpdateOutput,
  }));
// Input Schema
export interface MigrationServicesDeleteInput {
  resourceGroupName: string;
  migrationServiceName: string;
  subscriptionId: string;
}
export const MigrationServicesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    migrationServiceName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataMigration/migrationServices/{migrationServiceName}",
      apiVersion: "2025-06-30",
    }),
  ) as unknown as Schema.Codec<MigrationServicesDeleteInput>;

// Output Schema
export type MigrationServicesDeleteOutput = void;
export const MigrationServicesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<MigrationServicesDeleteOutput>;

// The operation
/**
 * Delete Database Migration Service.
 *
 * @param resourceGroupName - Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param migrationServiceName - Name of the Migration Service.
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param api-version - API version to use for the request.
 */
export const MigrationServicesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: MigrationServicesDeleteInput,
    outputSchema: MigrationServicesDeleteOutput,
  }),
);
// Input Schema
export interface MigrationServicesGetInput {
  resourceGroupName: string;
  migrationServiceName: string;
  subscriptionId: string;
}
export const MigrationServicesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    migrationServiceName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataMigration/migrationServices/{migrationServiceName}",
      apiVersion: "2025-06-30",
    }),
  ) as unknown as Schema.Codec<MigrationServicesGetInput>;

// Output Schema
export interface MigrationServicesGetOutput {
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
export const MigrationServicesGetOutput =
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
  }) as unknown as Schema.Codec<MigrationServicesGetOutput>;

// The operation
/**
 * Retrieve the Database Migration Service
 *
 * @param resourceGroupName - Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param migrationServiceName - Name of the Migration Service.
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param api-version - API version to use for the request.
 */
export const MigrationServicesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: MigrationServicesGetInput,
    outputSchema: MigrationServicesGetOutput,
  }),
);
// Input Schema
export interface MigrationServicesListByResourceGroupInput {
  resourceGroupName: string;
  subscriptionId: string;
}
export const MigrationServicesListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataMigration/migrationServices",
      apiVersion: "2025-06-30",
    }),
  ) as unknown as Schema.Codec<MigrationServicesListByResourceGroupInput>;

// Output Schema
export interface MigrationServicesListByResourceGroupOutput {
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
  nextLink?: string;
}
export const MigrationServicesListByResourceGroupOutput =
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<MigrationServicesListByResourceGroupOutput>;

// The operation
/**
 * Retrieve all migration services in the resource group.
 *
 * @param resourceGroupName - Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param api-version - API version to use for the request.
 */
export const MigrationServicesListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MigrationServicesListByResourceGroupInput,
    outputSchema: MigrationServicesListByResourceGroupOutput,
  }));
// Input Schema
export interface MigrationServicesListBySubscriptionInput {
  subscriptionId: string;
}
export const MigrationServicesListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DataMigration/migrationServices",
      apiVersion: "2025-06-30",
    }),
  ) as unknown as Schema.Codec<MigrationServicesListBySubscriptionInput>;

// Output Schema
export interface MigrationServicesListBySubscriptionOutput {
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
  nextLink?: string;
}
export const MigrationServicesListBySubscriptionOutput =
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<MigrationServicesListBySubscriptionOutput>;

// The operation
/**
 * Retrieve all migration services in the subscriptions.
 *
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param api-version - API version to use for the request.
 */
export const MigrationServicesListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MigrationServicesListBySubscriptionInput,
    outputSchema: MigrationServicesListBySubscriptionOutput,
  }));
// Input Schema
export interface MigrationServicesListMigrationsInput {
  resourceGroupName: string;
  migrationServiceName: string;
  subscriptionId: string;
}
export const MigrationServicesListMigrationsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    migrationServiceName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataMigration/migrationServices/{migrationServiceName}/listMigrations",
      apiVersion: "2025-06-30",
    }),
  ) as unknown as Schema.Codec<MigrationServicesListMigrationsInput>;

// Output Schema
export interface MigrationServicesListMigrationsOutput {
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
  nextLink?: string;
}
export const MigrationServicesListMigrationsOutput =
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<MigrationServicesListMigrationsOutput>;

// The operation
/**
 * Retrieve the List of database migrations attached to the service.
 *
 * @param resourceGroupName - Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param migrationServiceName - Name of the Migration Service.
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param api-version - API version to use for the request.
 */
export const MigrationServicesListMigrations =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MigrationServicesListMigrationsInput,
    outputSchema: MigrationServicesListMigrationsOutput,
  }));
// Input Schema
export interface MigrationServicesUpdateInput {
  resourceGroupName: string;
  migrationServiceName: string;
  subscriptionId: string;
  tags?: Record<string, string>;
}
export const MigrationServicesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    migrationServiceName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataMigration/migrationServices/{migrationServiceName}",
      apiVersion: "2025-06-30",
    }),
  ) as unknown as Schema.Codec<MigrationServicesUpdateInput>;

// Output Schema
export interface MigrationServicesUpdateOutput {
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
export const MigrationServicesUpdateOutput =
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
  }) as unknown as Schema.Codec<MigrationServicesUpdateOutput>;

// The operation
/**
 * Update Database Migration Service.
 *
 * @param resourceGroupName - Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param migrationServiceName - Name of the Migration Service.
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param api-version - API version to use for the request.
 */
export const MigrationServicesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: MigrationServicesUpdateInput,
    outputSchema: MigrationServicesUpdateOutput,
  }),
);
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.DataMigration/operations",
    apiVersion: "2025-06-30",
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
    origin?: "user" | "system";
    properties?: Record<string, unknown>;
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
        origin: Schema.optional(Schema.Literals(["user", "system"])),
        properties: Schema.optional(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
      }),
    ),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<OperationsListOutput>;

// The operation
/**
 * Lists all of the available SQL Migration REST API operations.
 *
 * @param api-version - API version to use for the request.
 */
export const OperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface ProjectsCreateOrUpdateInput {
  subscriptionId: string;
  groupName: string;
  serviceName: string;
  projectName: string;
  properties?: {
    sourcePlatform: "SQL" | "MySQL" | "PostgreSql" | "MongoDb" | "Unknown";
    azureAuthenticationInfo?: {
      applicationId?: string;
      appKey?: string;
      tenantId?: string;
      ignoreAzurePermissions?: boolean;
    };
    targetPlatform:
      | "SQLDB"
      | "SQLMI"
      | "AzureDbForMySql"
      | "AzureDbForPostgreSql"
      | "MongoDb"
      | "Unknown";
    creationTime?: string;
    sourceConnectionInfo?: {
      type: string;
      userName?: string;
      password?: string | Redacted.Redacted<string>;
    };
    targetConnectionInfo?: {
      type: string;
      userName?: string;
      password?: string | Redacted.Redacted<string>;
    };
    databasesInfo?: { sourceDatabaseName: string }[];
    provisioningState?: "Deleting" | "Succeeded";
  };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  etag?: string;
  tags?: Record<string, string>;
  location: string;
}
export const ProjectsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        sourcePlatform: Schema.Literals([
          "SQL",
          "MySQL",
          "PostgreSql",
          "MongoDb",
          "Unknown",
        ]),
        azureAuthenticationInfo: Schema.optional(
          Schema.Struct({
            applicationId: Schema.optional(Schema.String),
            appKey: Schema.optional(Schema.String),
            tenantId: Schema.optional(Schema.String),
            ignoreAzurePermissions: Schema.optional(Schema.Boolean),
          }),
        ),
        targetPlatform: Schema.Literals([
          "SQLDB",
          "SQLMI",
          "AzureDbForMySql",
          "AzureDbForPostgreSql",
          "MongoDb",
          "Unknown",
        ]),
        creationTime: Schema.optional(Schema.String),
        sourceConnectionInfo: Schema.optional(
          Schema.Struct({
            type: Schema.String,
            userName: Schema.optional(Schema.String),
            password: Schema.optional(SensitiveString),
          }),
        ),
        targetConnectionInfo: Schema.optional(
          Schema.Struct({
            type: Schema.String,
            userName: Schema.optional(Schema.String),
            password: Schema.optional(SensitiveString),
          }),
        ),
        databasesInfo: Schema.optional(
          Schema.Array(
            Schema.Struct({
              sourceDatabaseName: Schema.String,
            }),
          ),
        ),
        provisioningState: Schema.optional(
          Schema.Literals(["Deleting", "Succeeded"]),
        ),
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
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/projects/{projectName}",
      apiVersion: "2025-06-30",
    }),
  ) as unknown as Schema.Codec<ProjectsCreateOrUpdateInput>;

// Output Schema
export interface ProjectsCreateOrUpdateOutput {
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
export const ProjectsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ProjectsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update project
 *
 * The project resource is a nested resource representing a stored migration project. The PUT method creates a new project or updates an existing one.
 *
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param groupName - Name of the resource group
 * @param serviceName - Name of the service
 * @param projectName - Name of the project
 * @param api-version - Version of the API
 * @param properties - Project properties
 * @param systemData - Metadata pertaining to creation and last modification of the resource.
 * @param etag - HTTP strong entity tag value. This is ignored if submitted.
 */
export const ProjectsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ProjectsCreateOrUpdateInput,
    outputSchema: ProjectsCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface ProjectsDeleteInput {
  subscriptionId: string;
  groupName: string;
  serviceName: string;
  projectName: string;
  deleteRunningTasks?: boolean;
}
export const ProjectsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  groupName: Schema.String.pipe(T.PathParam()),
  serviceName: Schema.String.pipe(T.PathParam()),
  projectName: Schema.String.pipe(T.PathParam()),
  deleteRunningTasks: Schema.optional(Schema.Boolean),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/projects/{projectName}",
    apiVersion: "2025-06-30",
  }),
) as unknown as Schema.Codec<ProjectsDeleteInput>;

// Output Schema
export type ProjectsDeleteOutput = void;
export const ProjectsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ProjectsDeleteOutput>;

// The operation
/**
 * Delete project
 *
 * The project resource is a nested resource representing a stored migration project. The DELETE method deletes a project.
 *
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param groupName - Name of the resource group
 * @param serviceName - Name of the service
 * @param projectName - Name of the project
 * @param api-version - Version of the API
 * @param deleteRunningTasks - Delete the resource even if it contains running tasks
 */
export const ProjectsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ProjectsDeleteInput,
  outputSchema: ProjectsDeleteOutput,
}));
// Input Schema
export interface ProjectsGetInput {
  subscriptionId: string;
  groupName: string;
  serviceName: string;
  projectName: string;
}
export const ProjectsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  groupName: Schema.String.pipe(T.PathParam()),
  serviceName: Schema.String.pipe(T.PathParam()),
  projectName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/projects/{projectName}",
    apiVersion: "2025-06-30",
  }),
) as unknown as Schema.Codec<ProjectsGetInput>;

// Output Schema
export interface ProjectsGetOutput {
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
export const ProjectsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ProjectsGetOutput>;

// The operation
/**
 * Get project information
 *
 * The project resource is a nested resource representing a stored migration project. The GET method retrieves information about a project.
 *
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param groupName - Name of the resource group
 * @param serviceName - Name of the service
 * @param projectName - Name of the project
 * @param api-version - Version of the API
 */
export const ProjectsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ProjectsGetInput,
  outputSchema: ProjectsGetOutput,
}));
// Input Schema
export interface ProjectsListInput {
  subscriptionId: string;
  groupName: string;
  serviceName: string;
}
export const ProjectsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  groupName: Schema.String.pipe(T.PathParam()),
  serviceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/projects",
    apiVersion: "2025-06-30",
  }),
) as unknown as Schema.Codec<ProjectsListInput>;

// Output Schema
export interface ProjectsListOutput {
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
  nextLink?: string;
}
export const ProjectsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<ProjectsListOutput>;

// The operation
/**
 * Get projects in a service
 *
 * The project resource is a nested resource representing a stored migration project. This method returns a list of projects owned by a service resource.
 *
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param groupName - Name of the resource group
 * @param serviceName - Name of the service
 * @param api-version - Version of the API
 */
export const ProjectsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ProjectsListInput,
  outputSchema: ProjectsListOutput,
}));
// Input Schema
export interface ProjectsUpdateInput {
  subscriptionId: string;
  groupName: string;
  serviceName: string;
  projectName: string;
  properties?: {
    sourcePlatform: "SQL" | "MySQL" | "PostgreSql" | "MongoDb" | "Unknown";
    azureAuthenticationInfo?: {
      applicationId?: string;
      appKey?: string;
      tenantId?: string;
      ignoreAzurePermissions?: boolean;
    };
    targetPlatform:
      | "SQLDB"
      | "SQLMI"
      | "AzureDbForMySql"
      | "AzureDbForPostgreSql"
      | "MongoDb"
      | "Unknown";
    creationTime?: string;
    sourceConnectionInfo?: {
      type: string;
      userName?: string;
      password?: string | Redacted.Redacted<string>;
    };
    targetConnectionInfo?: {
      type: string;
      userName?: string;
      password?: string | Redacted.Redacted<string>;
    };
    databasesInfo?: { sourceDatabaseName: string }[];
    provisioningState?: "Deleting" | "Succeeded";
  };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  etag?: string;
  tags?: Record<string, string>;
  location: string;
}
export const ProjectsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  groupName: Schema.String.pipe(T.PathParam()),
  serviceName: Schema.String.pipe(T.PathParam()),
  projectName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      sourcePlatform: Schema.Literals([
        "SQL",
        "MySQL",
        "PostgreSql",
        "MongoDb",
        "Unknown",
      ]),
      azureAuthenticationInfo: Schema.optional(
        Schema.Struct({
          applicationId: Schema.optional(Schema.String),
          appKey: Schema.optional(Schema.String),
          tenantId: Schema.optional(Schema.String),
          ignoreAzurePermissions: Schema.optional(Schema.Boolean),
        }),
      ),
      targetPlatform: Schema.Literals([
        "SQLDB",
        "SQLMI",
        "AzureDbForMySql",
        "AzureDbForPostgreSql",
        "MongoDb",
        "Unknown",
      ]),
      creationTime: Schema.optional(Schema.String),
      sourceConnectionInfo: Schema.optional(
        Schema.Struct({
          type: Schema.String,
          userName: Schema.optional(Schema.String),
          password: Schema.optional(SensitiveString),
        }),
      ),
      targetConnectionInfo: Schema.optional(
        Schema.Struct({
          type: Schema.String,
          userName: Schema.optional(Schema.String),
          password: Schema.optional(SensitiveString),
        }),
      ),
      databasesInfo: Schema.optional(
        Schema.Array(
          Schema.Struct({
            sourceDatabaseName: Schema.String,
          }),
        ),
      ),
      provisioningState: Schema.optional(
        Schema.Literals(["Deleting", "Succeeded"]),
      ),
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
  etag: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.String,
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/projects/{projectName}",
    apiVersion: "2025-06-30",
  }),
) as unknown as Schema.Codec<ProjectsUpdateInput>;

// Output Schema
export interface ProjectsUpdateOutput {
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
export const ProjectsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ProjectsUpdateOutput>;

// The operation
/**
 * Update project
 *
 * The project resource is a nested resource representing a stored migration project. The PATCH method updates an existing project.
 *
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param groupName - Name of the resource group
 * @param serviceName - Name of the service
 * @param projectName - Name of the project
 * @param api-version - Version of the API
 * @param properties - Project properties
 * @param systemData - Metadata pertaining to creation and last modification of the resource.
 * @param etag - HTTP strong entity tag value. This is ignored if submitted.
 */
export const ProjectsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ProjectsUpdateInput,
  outputSchema: ProjectsUpdateOutput,
}));
// Input Schema
export interface ResourceSkusListSkusInput {
  subscriptionId: string;
}
export const ResourceSkusListSkusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DataMigration/skus",
      apiVersion: "2025-06-30",
    }),
  ) as unknown as Schema.Codec<ResourceSkusListSkusInput>;

// Output Schema
export interface ResourceSkusListSkusOutput {
  value: {
    resourceType?: string;
    name?: string;
    tier?: string;
    size?: string;
    family?: string;
    kind?: string;
    capacity?: {
      minimum?: number;
      maximum?: number;
      default?: number;
      scaleType?: "Automatic" | "Manual" | "None";
    };
    locations?: string[];
    apiVersions?: string[];
    costs?: { meterID?: string; quantity?: number; extendedUnit?: string }[];
    capabilities?: { name?: string; value?: string }[];
    restrictions?: {
      type?: "location";
      values?: string[];
      reasonCode?: "QuotaId" | "NotAvailableForSubscription";
    }[];
  }[];
  nextLink?: string;
}
export const ResourceSkusListSkusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        resourceType: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        tier: Schema.optional(Schema.String),
        size: Schema.optional(Schema.String),
        family: Schema.optional(Schema.String),
        kind: Schema.optional(Schema.String),
        capacity: Schema.optional(
          Schema.Struct({
            minimum: Schema.optional(Schema.Number),
            maximum: Schema.optional(Schema.Number),
            default: Schema.optional(Schema.Number),
            scaleType: Schema.optional(
              Schema.Literals(["Automatic", "Manual", "None"]),
            ),
          }),
        ),
        locations: Schema.optional(Schema.Array(Schema.String)),
        apiVersions: Schema.optional(Schema.Array(Schema.String)),
        costs: Schema.optional(
          Schema.Array(
            Schema.Struct({
              meterID: Schema.optional(Schema.String),
              quantity: Schema.optional(Schema.Number),
              extendedUnit: Schema.optional(Schema.String),
            }),
          ),
        ),
        capabilities: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              value: Schema.optional(Schema.String),
            }),
          ),
        ),
        restrictions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              type: Schema.optional(Schema.Literals(["location"])),
              values: Schema.optional(Schema.Array(Schema.String)),
              reasonCode: Schema.optional(
                Schema.Literals(["QuotaId", "NotAvailableForSubscription"]),
              ),
            }),
          ),
        ),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ResourceSkusListSkusOutput>;

// The operation
/**
 * Get supported SKUs
 *
 * The skus action returns the list of SKUs that DMS (classic) supports.
 *
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param api-version - Version of the API
 */
export const ResourceSkusListSkus = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ResourceSkusListSkusInput,
    outputSchema: ResourceSkusListSkusOutput,
  }),
);
// Input Schema
export interface ServicesCheckChildrenNameAvailabilityInput {
  subscriptionId: string;
  groupName: string;
  serviceName: string;
  name?: string;
  type?: string;
}
export const ServicesCheckChildrenNameAvailabilityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/checkNameAvailability",
      apiVersion: "2025-06-30",
    }),
  ) as unknown as Schema.Codec<ServicesCheckChildrenNameAvailabilityInput>;

// Output Schema
export interface ServicesCheckChildrenNameAvailabilityOutput {
  nameAvailable?: boolean;
  reason?: "AlreadyExists" | "Invalid";
  message?: string;
}
export const ServicesCheckChildrenNameAvailabilityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.Literals(["AlreadyExists", "Invalid"])),
    message: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ServicesCheckChildrenNameAvailabilityOutput>;

// The operation
/**
 * Check nested resource name validity and availability
 *
 * This method checks whether a proposed nested resource name is valid and available.
 *
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param groupName - Name of the resource group
 * @param api-version - Version of the API
 * @param serviceName - Name of the service
 * @param name - The proposed resource name
 * @param type - The resource type chain (e.g. virtualMachines/extensions)
 */
export const ServicesCheckChildrenNameAvailability =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ServicesCheckChildrenNameAvailabilityInput,
    outputSchema: ServicesCheckChildrenNameAvailabilityOutput,
  }));
// Input Schema
export interface ServicesCheckNameAvailabilityInput {
  subscriptionId: string;
  location: string;
  name?: string;
  type?: string;
}
export const ServicesCheckNameAvailabilityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DataMigration/locations/{location}/checkNameAvailability",
      apiVersion: "2025-06-30",
    }),
  ) as unknown as Schema.Codec<ServicesCheckNameAvailabilityInput>;

// Output Schema
export interface ServicesCheckNameAvailabilityOutput {
  nameAvailable?: boolean;
  reason?: "AlreadyExists" | "Invalid";
  message?: string;
}
export const ServicesCheckNameAvailabilityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.Literals(["AlreadyExists", "Invalid"])),
    message: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ServicesCheckNameAvailabilityOutput>;

// The operation
/**
 * Check name validity and availability
 *
 * This method checks whether a proposed top-level resource name is valid and available.
 *
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param location - The Azure region of the operation
 * @param api-version - Version of the API
 * @param name - The proposed resource name
 * @param type - The resource type chain (e.g. virtualMachines/extensions)
 */
export const ServicesCheckNameAvailability =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ServicesCheckNameAvailabilityInput,
    outputSchema: ServicesCheckNameAvailabilityOutput,
  }));
// Input Schema
export interface ServicesCheckStatusInput {
  subscriptionId: string;
  groupName: string;
  serviceName: string;
}
export const ServicesCheckStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/checkStatus",
      apiVersion: "2025-06-30",
    }),
  ) as unknown as Schema.Codec<ServicesCheckStatusInput>;

// Output Schema
export interface ServicesCheckStatusOutput {
  agentVersion?: string;
  agentConfiguration?: unknown;
  status?: string;
  vmSize?: string;
  supportedTaskTypes?: string[];
}
export const ServicesCheckStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    agentVersion: Schema.optional(Schema.String),
    agentConfiguration: Schema.optional(Schema.Unknown),
    status: Schema.optional(Schema.String),
    vmSize: Schema.optional(Schema.String),
    supportedTaskTypes: Schema.optional(Schema.Array(Schema.String)),
  }) as unknown as Schema.Codec<ServicesCheckStatusOutput>;

// The operation
/**
 * Check service health status
 *
 * The services resource is the top-level resource that represents the Azure Database Migration Service (classic). This action performs a health check and returns the status of the service and virtual machine size.
 *
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param groupName - Name of the resource group
 * @param serviceName - Name of the service
 * @param api-version - Version of the API
 */
export const ServicesCheckStatus = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ServicesCheckStatusInput,
  outputSchema: ServicesCheckStatusOutput,
}));
// Input Schema
export interface ServicesCreateOrUpdateInput {
  subscriptionId: string;
  groupName: string;
  serviceName: string;
  etag?: string;
  kind?: string;
  properties?: {
    provisioningState?:
      | "Accepted"
      | "Deleting"
      | "Deploying"
      | "Stopped"
      | "Stopping"
      | "Starting"
      | "FailedToStart"
      | "FailedToStop"
      | "Succeeded"
      | "Failed";
    publicKey?: string;
    virtualSubnetId?: string;
    virtualNicId?: string;
    autoStopDelay?: string;
    deleteResourcesOnStop?: boolean;
  };
  sku?: {
    name?: string;
    tier?: string;
    family?: string;
    size?: string;
    capacity?: number;
  };
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
export const ServicesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    etag: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Accepted",
            "Deleting",
            "Deploying",
            "Stopped",
            "Stopping",
            "Starting",
            "FailedToStart",
            "FailedToStop",
            "Succeeded",
            "Failed",
          ]),
        ),
        publicKey: Schema.optional(Schema.String),
        virtualSubnetId: Schema.optional(Schema.String),
        virtualNicId: Schema.optional(Schema.String),
        autoStopDelay: Schema.optional(Schema.String),
        deleteResourcesOnStop: Schema.optional(Schema.Boolean),
      }),
    ),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        tier: Schema.optional(Schema.String),
        family: Schema.optional(Schema.String),
        size: Schema.optional(Schema.String),
        capacity: Schema.optional(Schema.Number),
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}",
      apiVersion: "2025-06-30",
    }),
  ) as unknown as Schema.Codec<ServicesCreateOrUpdateInput>;

// Output Schema
export interface ServicesCreateOrUpdateOutput {
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
export const ServicesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ServicesCreateOrUpdateOutput>;

// The operation
/**
 * Create or update DMS (classic) Instance
 *
 * The services resource is the top-level resource that represents the Azure Database Migration Service (classic). The PUT method creates a new service or updates an existing one. When a service is updated, existing child resources (i.e. tasks) are unaffected. Services currently support a single kind, "vm", which refers to a VM-based service, although other kinds may be added in the future. This method can change the kind, SKU, and network of the service, but if tasks are currently running (i.e. the service is busy), this will fail with 400 Bad Request ("ServiceIsBusy"). The provider will reply when successful with 200 OK or 201 Created. Long-running operations use the provisioningState property.
 *
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param groupName - Name of the resource group
 * @param serviceName - Name of the service
 * @param api-version - Version of the API
 * @param etag - HTTP strong entity tag value. Ignored if submitted
 * @param kind - The resource kind. Only 'vm' (the default) is supported.
 * @param properties - Custom service properties
 * @param sku - Service SKU
 * @param systemData - Metadata pertaining to creation and last modification of the resource.
 */
export const ServicesCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ServicesCreateOrUpdateInput,
    outputSchema: ServicesCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface ServicesDeleteInput {
  subscriptionId: string;
  groupName: string;
  serviceName: string;
  deleteRunningTasks?: boolean;
}
export const ServicesDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  groupName: Schema.String.pipe(T.PathParam()),
  serviceName: Schema.String.pipe(T.PathParam()),
  deleteRunningTasks: Schema.optional(Schema.Boolean),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}",
    apiVersion: "2025-06-30",
  }),
) as unknown as Schema.Codec<ServicesDeleteInput>;

// Output Schema
export type ServicesDeleteOutput = void;
export const ServicesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ServicesDeleteOutput>;

// The operation
/**
 * Delete DMS (classic) Service Instance
 *
 * The services resource is the top-level resource that represents the Azure Database Migration Service (classic). The DELETE method deletes a service. Any running tasks will be canceled.
 *
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param groupName - Name of the resource group
 * @param serviceName - Name of the service
 * @param api-version - Version of the API
 * @param deleteRunningTasks - Delete the resource even if it contains running tasks
 */
export const ServicesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ServicesDeleteInput,
  outputSchema: ServicesDeleteOutput,
}));
// Input Schema
export interface ServicesGetInput {
  subscriptionId: string;
  groupName: string;
  serviceName: string;
}
export const ServicesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  groupName: Schema.String.pipe(T.PathParam()),
  serviceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}",
    apiVersion: "2025-06-30",
  }),
) as unknown as Schema.Codec<ServicesGetInput>;

// Output Schema
export interface ServicesGetOutput {
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
export const ServicesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ServicesGetOutput>;

// The operation
/**
 * Get DMS (classic) Service Instance
 *
 * The services resource is the top-level resource that represents the Azure Database Migration Service (classic). The GET method retrieves information about a service instance.
 *
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param groupName - Name of the resource group
 * @param serviceName - Name of the service
 * @param api-version - Version of the API
 */
export const ServicesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ServicesGetInput,
  outputSchema: ServicesGetOutput,
}));
// Input Schema
export interface ServicesListInput {
  subscriptionId: string;
}
export const ServicesListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.DataMigration/services",
    apiVersion: "2025-06-30",
  }),
) as unknown as Schema.Codec<ServicesListInput>;

// Output Schema
export interface ServicesListOutput {
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
  nextLink?: string;
}
export const ServicesListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<ServicesListOutput>;

// The operation
/**
 * Get services in subscription
 *
 * The services resource is the top-level resource that represents the Azure Database Migration Service (classic). This method returns a list of service resources in a subscription.
 *
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param api-version - Version of the API
 */
export const ServicesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ServicesListInput,
  outputSchema: ServicesListOutput,
}));
// Input Schema
export interface ServicesListByResourceGroupInput {
  subscriptionId: string;
  groupName: string;
}
export const ServicesListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services",
      apiVersion: "2025-06-30",
    }),
  ) as unknown as Schema.Codec<ServicesListByResourceGroupInput>;

// Output Schema
export interface ServicesListByResourceGroupOutput {
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
  nextLink?: string;
}
export const ServicesListByResourceGroupOutput =
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ServicesListByResourceGroupOutput>;

// The operation
/**
 * Get services in resource group
 *
 * The Services resource is the top-level resource that represents the Azure Database Migration Service (classic). This method returns a list of service resources in a resource group.
 *
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param groupName - Name of the resource group
 * @param api-version - Version of the API
 */
export const ServicesListByResourceGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ServicesListByResourceGroupInput,
    outputSchema: ServicesListByResourceGroupOutput,
  }),
);
// Input Schema
export interface ServicesListSkusInput {
  subscriptionId: string;
  groupName: string;
  serviceName: string;
}
export const ServicesListSkusInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  groupName: Schema.String.pipe(T.PathParam()),
  serviceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/skus",
    apiVersion: "2025-06-30",
  }),
) as unknown as Schema.Codec<ServicesListSkusInput>;

// Output Schema
export interface ServicesListSkusOutput {
  value?: {
    resourceType?: string;
    sku?: { name?: string; family?: string; size?: string; tier?: string };
    capacity?: {
      minimum?: number;
      maximum?: number;
      default?: number;
      scaleType?: "none" | "manual" | "automatic";
    };
  }[];
  nextLink?: string;
}
export const ServicesListSkusOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          resourceType: Schema.optional(Schema.String),
          sku: Schema.optional(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              family: Schema.optional(Schema.String),
              size: Schema.optional(Schema.String),
              tier: Schema.optional(Schema.String),
            }),
          ),
          capacity: Schema.optional(
            Schema.Struct({
              minimum: Schema.optional(Schema.Number),
              maximum: Schema.optional(Schema.Number),
              default: Schema.optional(Schema.Number),
              scaleType: Schema.optional(
                Schema.Literals(["none", "manual", "automatic"]),
              ),
            }),
          ),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  },
) as unknown as Schema.Codec<ServicesListSkusOutput>;

// The operation
/**
 * Get compatible SKUs
 *
 * The services resource is the top-level resource that represents the Database Migration Service (classic). The skus action returns the list of SKUs that a service resource can be updated to.
 *
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param groupName - Name of the resource group
 * @param serviceName - Name of the service
 * @param api-version - Version of the API
 */
export const ServicesListSkus = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ServicesListSkusInput,
  outputSchema: ServicesListSkusOutput,
}));
// Input Schema
export interface ServicesStartInput {
  subscriptionId: string;
  groupName: string;
  serviceName: string;
}
export const ServicesStartInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  groupName: Schema.String.pipe(T.PathParam()),
  serviceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/start",
    apiVersion: "2025-06-30",
  }),
) as unknown as Schema.Codec<ServicesStartInput>;

// Output Schema
export type ServicesStartOutput = void;
export const ServicesStartOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ServicesStartOutput>;

// The operation
/**
 * Start service
 *
 * The services resource is the top-level resource that represents the Azure Database Migration Service (classic). This action starts the service and the service can be used for data migration.
 *
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param groupName - Name of the resource group
 * @param serviceName - Name of the service
 * @param api-version - Version of the API
 */
export const ServicesStart = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ServicesStartInput,
  outputSchema: ServicesStartOutput,
}));
// Input Schema
export interface ServicesStopInput {
  subscriptionId: string;
  groupName: string;
  serviceName: string;
}
export const ServicesStopInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  groupName: Schema.String.pipe(T.PathParam()),
  serviceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/stop",
    apiVersion: "2025-06-30",
  }),
) as unknown as Schema.Codec<ServicesStopInput>;

// Output Schema
export type ServicesStopOutput = void;
export const ServicesStopOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ServicesStopOutput>;

// The operation
/**
 * Stop service
 *
 * The services resource is the top-level resource that represents the Azure Database Migration Service (classic). This action stops the service and the service cannot be used for data migration. The service owner won't be billed when the service is stopped.
 *
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param groupName - Name of the resource group
 * @param serviceName - Name of the service
 * @param api-version - Version of the API
 */
export const ServicesStop = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ServicesStopInput,
  outputSchema: ServicesStopOutput,
}));
// Input Schema
export interface ServicesUpdateInput {
  subscriptionId: string;
  groupName: string;
  serviceName: string;
  etag?: string;
  kind?: string;
  properties?: {
    provisioningState?:
      | "Accepted"
      | "Deleting"
      | "Deploying"
      | "Stopped"
      | "Stopping"
      | "Starting"
      | "FailedToStart"
      | "FailedToStop"
      | "Succeeded"
      | "Failed";
    publicKey?: string;
    virtualSubnetId?: string;
    virtualNicId?: string;
    autoStopDelay?: string;
    deleteResourcesOnStop?: boolean;
  };
  sku?: {
    name?: string;
    tier?: string;
    family?: string;
    size?: string;
    capacity?: number;
  };
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
export const ServicesUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  groupName: Schema.String.pipe(T.PathParam()),
  serviceName: Schema.String.pipe(T.PathParam()),
  etag: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  properties: Schema.optional(
    Schema.Struct({
      provisioningState: Schema.optional(
        Schema.Literals([
          "Accepted",
          "Deleting",
          "Deploying",
          "Stopped",
          "Stopping",
          "Starting",
          "FailedToStart",
          "FailedToStop",
          "Succeeded",
          "Failed",
        ]),
      ),
      publicKey: Schema.optional(Schema.String),
      virtualSubnetId: Schema.optional(Schema.String),
      virtualNicId: Schema.optional(Schema.String),
      autoStopDelay: Schema.optional(Schema.String),
      deleteResourcesOnStop: Schema.optional(Schema.Boolean),
    }),
  ),
  sku: Schema.optional(
    Schema.Struct({
      name: Schema.optional(Schema.String),
      tier: Schema.optional(Schema.String),
      family: Schema.optional(Schema.String),
      size: Schema.optional(Schema.String),
      capacity: Schema.optional(Schema.Number),
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
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}",
    apiVersion: "2025-06-30",
  }),
) as unknown as Schema.Codec<ServicesUpdateInput>;

// Output Schema
export interface ServicesUpdateOutput {
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
export const ServicesUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ServicesUpdateOutput>;

// The operation
/**
 * Create or update DMS (classic) Service Instance
 *
 * The services resource is the top-level resource that represents the Azure Database Migration Service (classic). The PATCH method updates an existing service. This method can change the kind, SKU, and network of the service, but if tasks are currently running (i.e. the service is busy), this will fail with 400 Bad Request ("ServiceIsBusy").
 *
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param groupName - Name of the resource group
 * @param serviceName - Name of the service
 * @param api-version - Version of the API
 * @param etag - HTTP strong entity tag value. Ignored if submitted
 * @param kind - The resource kind. Only 'vm' (the default) is supported.
 * @param properties - Custom service properties
 * @param sku - Service SKU
 * @param systemData - Metadata pertaining to creation and last modification of the resource.
 */
export const ServicesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ServicesUpdateInput,
  outputSchema: ServicesUpdateOutput,
}));
// Input Schema
export interface ServiceTasksCancelInput {
  subscriptionId: string;
  groupName: string;
  serviceName: string;
  taskName: string;
}
export const ServiceTasksCancelInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    taskName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/serviceTasks/{taskName}/cancel",
      apiVersion: "2025-06-30",
    }),
  ) as unknown as Schema.Codec<ServiceTasksCancelInput>;

// Output Schema
export interface ServiceTasksCancelOutput {
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
export const ServiceTasksCancelOutput =
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
  }) as unknown as Schema.Codec<ServiceTasksCancelOutput>;

// The operation
/**
 * Cancel a service task
 *
 * The service tasks resource is a nested, proxy-only resource representing work performed by a DMS (classic) instance. This method cancels a service task if it's currently queued or running.
 *
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param groupName - Name of the resource group
 * @param serviceName - Name of the service
 * @param taskName - Name of the Task
 * @param api-version - Version of the API
 */
export const ServiceTasksCancel = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ServiceTasksCancelInput,
  outputSchema: ServiceTasksCancelOutput,
}));
// Input Schema
export interface ServiceTasksCreateOrUpdateInput {
  subscriptionId: string;
  groupName: string;
  serviceName: string;
  taskName: string;
  etag?: string;
  properties?: {
    taskType:
      | "Connect.MongoDb"
      | "ConnectToSource.SqlServer"
      | "ConnectToSource.SqlServer.Sync"
      | "ConnectToSource.PostgreSql.Sync"
      | "ConnectToSource.MySql"
      | "ConnectToSource.Oracle.Sync"
      | "ConnectToTarget.SqlDb"
      | "ConnectToTarget.SqlDb.Sync"
      | "ConnectToTarget.AzureDbForPostgreSql.Sync"
      | "ConnectToTarget.Oracle.AzureDbForPostgreSql.Sync"
      | "ConnectToTarget.AzureSqlDbMI"
      | "ConnectToTarget.AzureSqlDbMI.Sync.LRS"
      | "ConnectToTarget.AzureDbForMySql"
      | "GetUserTables.Sql"
      | "GetUserTables.AzureSqlDb.Sync"
      | "GetUserTablesOracle"
      | "GetUserTablesPostgreSql"
      | "GetUserTablesMySql"
      | "Migrate.MongoDb"
      | "Migrate.SqlServer.AzureSqlDbMI"
      | "Migrate.SqlServer.AzureSqlDbMI.Sync.LRS"
      | "Migrate.SqlServer.SqlDb"
      | "Migrate.SqlServer.AzureSqlDb.Sync"
      | "Migrate.MySql.AzureDbForMySql.Sync"
      | "Migrate.MySql.AzureDbForMySql"
      | "Migrate.PostgreSql.AzureDbForPostgreSql.SyncV2"
      | "Migrate.Oracle.AzureDbForPostgreSql.Sync"
      | "ValidateMigrationInput.SqlServer.SqlDb.Sync"
      | "ValidateMigrationInput.SqlServer.AzureSqlDbMI"
      | "ValidateMigrationInput.SqlServer.AzureSqlDbMI.Sync.LRS"
      | "Validate.MongoDb"
      | "Validate.Oracle.AzureDbPostgreSql.Sync"
      | "GetTDECertificates.Sql"
      | "Migrate.Ssis"
      | "Service.Check.OCI"
      | "Service.Upload.OCI"
      | "Service.Install.OCI"
      | "MigrateSchemaSqlServerSqlDb";
    errors?: {
      code?: string;
      message?: string;
      details?: { code?: string; message?: string; details?: unknown[] }[];
    }[];
    state?:
      | "Unknown"
      | "Queued"
      | "Running"
      | "Canceled"
      | "Succeeded"
      | "Failed"
      | "FailedInputValidation"
      | "Faulted";
    commands?: {
      commandType:
        | "Migrate.Sync.Complete.Database"
        | "Migrate.SqlServer.AzureDbSqlMi.Complete"
        | "cancel"
        | "finish"
        | "restart";
      errors?: {
        code?: string;
        message?: string;
        details?: { code?: string; message?: string; details?: unknown[] }[];
      }[];
      state?: "Unknown" | "Accepted" | "Running" | "Succeeded" | "Failed";
    }[];
    clientData?: Record<string, string>;
  };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  id?: string;
  name?: string;
  type?: string;
}
export const ServiceTasksCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    taskName: Schema.String.pipe(T.PathParam()),
    etag: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        taskType: Schema.Literals([
          "Connect.MongoDb",
          "ConnectToSource.SqlServer",
          "ConnectToSource.SqlServer.Sync",
          "ConnectToSource.PostgreSql.Sync",
          "ConnectToSource.MySql",
          "ConnectToSource.Oracle.Sync",
          "ConnectToTarget.SqlDb",
          "ConnectToTarget.SqlDb.Sync",
          "ConnectToTarget.AzureDbForPostgreSql.Sync",
          "ConnectToTarget.Oracle.AzureDbForPostgreSql.Sync",
          "ConnectToTarget.AzureSqlDbMI",
          "ConnectToTarget.AzureSqlDbMI.Sync.LRS",
          "ConnectToTarget.AzureDbForMySql",
          "GetUserTables.Sql",
          "GetUserTables.AzureSqlDb.Sync",
          "GetUserTablesOracle",
          "GetUserTablesPostgreSql",
          "GetUserTablesMySql",
          "Migrate.MongoDb",
          "Migrate.SqlServer.AzureSqlDbMI",
          "Migrate.SqlServer.AzureSqlDbMI.Sync.LRS",
          "Migrate.SqlServer.SqlDb",
          "Migrate.SqlServer.AzureSqlDb.Sync",
          "Migrate.MySql.AzureDbForMySql.Sync",
          "Migrate.MySql.AzureDbForMySql",
          "Migrate.PostgreSql.AzureDbForPostgreSql.SyncV2",
          "Migrate.Oracle.AzureDbForPostgreSql.Sync",
          "ValidateMigrationInput.SqlServer.SqlDb.Sync",
          "ValidateMigrationInput.SqlServer.AzureSqlDbMI",
          "ValidateMigrationInput.SqlServer.AzureSqlDbMI.Sync.LRS",
          "Validate.MongoDb",
          "Validate.Oracle.AzureDbPostgreSql.Sync",
          "GetTDECertificates.Sql",
          "Migrate.Ssis",
          "Service.Check.OCI",
          "Service.Upload.OCI",
          "Service.Install.OCI",
          "MigrateSchemaSqlServerSqlDb",
        ]),
        errors: Schema.optional(
          Schema.Array(
            Schema.Struct({
              code: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              details: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    code: Schema.optional(Schema.String),
                    message: Schema.optional(Schema.String),
                    details: Schema.optional(Schema.Array(Schema.Unknown)),
                  }),
                ),
              ),
            }),
          ),
        ),
        state: Schema.optional(
          Schema.Literals([
            "Unknown",
            "Queued",
            "Running",
            "Canceled",
            "Succeeded",
            "Failed",
            "FailedInputValidation",
            "Faulted",
          ]),
        ),
        commands: Schema.optional(
          Schema.Array(
            Schema.Struct({
              commandType: Schema.Literals([
                "Migrate.Sync.Complete.Database",
                "Migrate.SqlServer.AzureDbSqlMi.Complete",
                "cancel",
                "finish",
                "restart",
              ]),
              errors: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    code: Schema.optional(Schema.String),
                    message: Schema.optional(Schema.String),
                    details: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          code: Schema.optional(Schema.String),
                          message: Schema.optional(Schema.String),
                          details: Schema.optional(
                            Schema.Array(Schema.Unknown),
                          ),
                        }),
                      ),
                    ),
                  }),
                ),
              ),
              state: Schema.optional(
                Schema.Literals([
                  "Unknown",
                  "Accepted",
                  "Running",
                  "Succeeded",
                  "Failed",
                ]),
              ),
            }),
          ),
        ),
        clientData: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
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
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/serviceTasks/{taskName}",
      apiVersion: "2025-06-30",
    }),
  ) as unknown as Schema.Codec<ServiceTasksCreateOrUpdateInput>;

// Output Schema
export interface ServiceTasksCreateOrUpdateOutput {
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
export const ServiceTasksCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ServiceTasksCreateOrUpdateOutput>;

// The operation
/**
 * Create or update service task
 *
 * The service tasks resource is a nested, proxy-only resource representing work performed by a DMS (classic) instance. The PUT method creates a new service task or updates an existing one, although since service tasks have no mutable custom properties, there is little reason to update an existing one.
 *
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param groupName - Name of the resource group
 * @param serviceName - Name of the service
 * @param taskName - Name of the Task
 * @param api-version - Version of the API
 * @param etag - HTTP strong entity tag value. This is ignored if submitted.
 * @param properties - Custom task properties
 * @param systemData - Metadata pertaining to creation and last modification of the resource.
 */
export const ServiceTasksCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ServiceTasksCreateOrUpdateInput,
    outputSchema: ServiceTasksCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface ServiceTasksDeleteInput {
  subscriptionId: string;
  groupName: string;
  serviceName: string;
  taskName: string;
  deleteRunningTasks?: boolean;
}
export const ServiceTasksDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    taskName: Schema.String.pipe(T.PathParam()),
    deleteRunningTasks: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/serviceTasks/{taskName}",
      apiVersion: "2025-06-30",
    }),
  ) as unknown as Schema.Codec<ServiceTasksDeleteInput>;

// Output Schema
export type ServiceTasksDeleteOutput = void;
export const ServiceTasksDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ServiceTasksDeleteOutput>;

// The operation
/**
 * Delete service task
 *
 * The service tasks resource is a nested, proxy-only resource representing work performed by a DMS (classic) instance. The DELETE method deletes a service task, canceling it first if it's running.
 *
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param groupName - Name of the resource group
 * @param serviceName - Name of the service
 * @param taskName - Name of the Task
 * @param api-version - Version of the API
 * @param deleteRunningTasks - Delete the resource even if it contains running tasks
 */
export const ServiceTasksDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ServiceTasksDeleteInput,
  outputSchema: ServiceTasksDeleteOutput,
}));
// Input Schema
export interface ServiceTasksGetInput {
  subscriptionId: string;
  groupName: string;
  serviceName: string;
  taskName: string;
  $expand?: string;
}
export const ServiceTasksGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  groupName: Schema.String.pipe(T.PathParam()),
  serviceName: Schema.String.pipe(T.PathParam()),
  taskName: Schema.String.pipe(T.PathParam()),
  $expand: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/serviceTasks/{taskName}",
    apiVersion: "2025-06-30",
  }),
) as unknown as Schema.Codec<ServiceTasksGetInput>;

// Output Schema
export interface ServiceTasksGetOutput {
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
export const ServiceTasksGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ServiceTasksGetOutput>;

// The operation
/**
 * Get service task information
 *
 * The service tasks resource is a nested, proxy-only resource representing work performed by a DMS (classic) instance. The GET method retrieves information about a service task.
 *
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param groupName - Name of the resource group
 * @param serviceName - Name of the service
 * @param taskName - Name of the Task
 * @param api-version - Version of the API
 * @param $expand - Expand the response
 */
export const ServiceTasksGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ServiceTasksGetInput,
  outputSchema: ServiceTasksGetOutput,
}));
// Input Schema
export interface ServiceTasksListInput {
  subscriptionId: string;
  groupName: string;
  serviceName: string;
  taskType?: string;
}
export const ServiceTasksListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  groupName: Schema.String.pipe(T.PathParam()),
  serviceName: Schema.String.pipe(T.PathParam()),
  taskType: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/serviceTasks",
    apiVersion: "2025-06-30",
  }),
) as unknown as Schema.Codec<ServiceTasksListInput>;

// Output Schema
export interface ServiceTasksListOutput {
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
  nextLink?: string;
}
export const ServiceTasksListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
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
    nextLink: Schema.optional(Schema.String),
  },
) as unknown as Schema.Codec<ServiceTasksListOutput>;

// The operation
/**
 * Get service level tasks for a service
 *
 * The services resource is the top-level resource that represents the Azure Database Migration Service (classic). This method returns a list of service level tasks owned by a service resource. Some tasks may have a status of Unknown, which indicates that an error occurred while querying the status of that task.
 *
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param groupName - Name of the resource group
 * @param serviceName - Name of the service
 * @param api-version - Version of the API
 * @param taskType - Filter tasks by task type
 */
export const ServiceTasksList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ServiceTasksListInput,
  outputSchema: ServiceTasksListOutput,
}));
// Input Schema
export interface ServiceTasksUpdateInput {
  subscriptionId: string;
  groupName: string;
  serviceName: string;
  taskName: string;
  etag?: string;
  properties?: {
    taskType:
      | "Connect.MongoDb"
      | "ConnectToSource.SqlServer"
      | "ConnectToSource.SqlServer.Sync"
      | "ConnectToSource.PostgreSql.Sync"
      | "ConnectToSource.MySql"
      | "ConnectToSource.Oracle.Sync"
      | "ConnectToTarget.SqlDb"
      | "ConnectToTarget.SqlDb.Sync"
      | "ConnectToTarget.AzureDbForPostgreSql.Sync"
      | "ConnectToTarget.Oracle.AzureDbForPostgreSql.Sync"
      | "ConnectToTarget.AzureSqlDbMI"
      | "ConnectToTarget.AzureSqlDbMI.Sync.LRS"
      | "ConnectToTarget.AzureDbForMySql"
      | "GetUserTables.Sql"
      | "GetUserTables.AzureSqlDb.Sync"
      | "GetUserTablesOracle"
      | "GetUserTablesPostgreSql"
      | "GetUserTablesMySql"
      | "Migrate.MongoDb"
      | "Migrate.SqlServer.AzureSqlDbMI"
      | "Migrate.SqlServer.AzureSqlDbMI.Sync.LRS"
      | "Migrate.SqlServer.SqlDb"
      | "Migrate.SqlServer.AzureSqlDb.Sync"
      | "Migrate.MySql.AzureDbForMySql.Sync"
      | "Migrate.MySql.AzureDbForMySql"
      | "Migrate.PostgreSql.AzureDbForPostgreSql.SyncV2"
      | "Migrate.Oracle.AzureDbForPostgreSql.Sync"
      | "ValidateMigrationInput.SqlServer.SqlDb.Sync"
      | "ValidateMigrationInput.SqlServer.AzureSqlDbMI"
      | "ValidateMigrationInput.SqlServer.AzureSqlDbMI.Sync.LRS"
      | "Validate.MongoDb"
      | "Validate.Oracle.AzureDbPostgreSql.Sync"
      | "GetTDECertificates.Sql"
      | "Migrate.Ssis"
      | "Service.Check.OCI"
      | "Service.Upload.OCI"
      | "Service.Install.OCI"
      | "MigrateSchemaSqlServerSqlDb";
    errors?: {
      code?: string;
      message?: string;
      details?: { code?: string; message?: string; details?: unknown[] }[];
    }[];
    state?:
      | "Unknown"
      | "Queued"
      | "Running"
      | "Canceled"
      | "Succeeded"
      | "Failed"
      | "FailedInputValidation"
      | "Faulted";
    commands?: {
      commandType:
        | "Migrate.Sync.Complete.Database"
        | "Migrate.SqlServer.AzureDbSqlMi.Complete"
        | "cancel"
        | "finish"
        | "restart";
      errors?: {
        code?: string;
        message?: string;
        details?: { code?: string; message?: string; details?: unknown[] }[];
      }[];
      state?: "Unknown" | "Accepted" | "Running" | "Succeeded" | "Failed";
    }[];
    clientData?: Record<string, string>;
  };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  id?: string;
  name?: string;
  type?: string;
}
export const ServiceTasksUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    taskName: Schema.String.pipe(T.PathParam()),
    etag: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        taskType: Schema.Literals([
          "Connect.MongoDb",
          "ConnectToSource.SqlServer",
          "ConnectToSource.SqlServer.Sync",
          "ConnectToSource.PostgreSql.Sync",
          "ConnectToSource.MySql",
          "ConnectToSource.Oracle.Sync",
          "ConnectToTarget.SqlDb",
          "ConnectToTarget.SqlDb.Sync",
          "ConnectToTarget.AzureDbForPostgreSql.Sync",
          "ConnectToTarget.Oracle.AzureDbForPostgreSql.Sync",
          "ConnectToTarget.AzureSqlDbMI",
          "ConnectToTarget.AzureSqlDbMI.Sync.LRS",
          "ConnectToTarget.AzureDbForMySql",
          "GetUserTables.Sql",
          "GetUserTables.AzureSqlDb.Sync",
          "GetUserTablesOracle",
          "GetUserTablesPostgreSql",
          "GetUserTablesMySql",
          "Migrate.MongoDb",
          "Migrate.SqlServer.AzureSqlDbMI",
          "Migrate.SqlServer.AzureSqlDbMI.Sync.LRS",
          "Migrate.SqlServer.SqlDb",
          "Migrate.SqlServer.AzureSqlDb.Sync",
          "Migrate.MySql.AzureDbForMySql.Sync",
          "Migrate.MySql.AzureDbForMySql",
          "Migrate.PostgreSql.AzureDbForPostgreSql.SyncV2",
          "Migrate.Oracle.AzureDbForPostgreSql.Sync",
          "ValidateMigrationInput.SqlServer.SqlDb.Sync",
          "ValidateMigrationInput.SqlServer.AzureSqlDbMI",
          "ValidateMigrationInput.SqlServer.AzureSqlDbMI.Sync.LRS",
          "Validate.MongoDb",
          "Validate.Oracle.AzureDbPostgreSql.Sync",
          "GetTDECertificates.Sql",
          "Migrate.Ssis",
          "Service.Check.OCI",
          "Service.Upload.OCI",
          "Service.Install.OCI",
          "MigrateSchemaSqlServerSqlDb",
        ]),
        errors: Schema.optional(
          Schema.Array(
            Schema.Struct({
              code: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              details: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    code: Schema.optional(Schema.String),
                    message: Schema.optional(Schema.String),
                    details: Schema.optional(Schema.Array(Schema.Unknown)),
                  }),
                ),
              ),
            }),
          ),
        ),
        state: Schema.optional(
          Schema.Literals([
            "Unknown",
            "Queued",
            "Running",
            "Canceled",
            "Succeeded",
            "Failed",
            "FailedInputValidation",
            "Faulted",
          ]),
        ),
        commands: Schema.optional(
          Schema.Array(
            Schema.Struct({
              commandType: Schema.Literals([
                "Migrate.Sync.Complete.Database",
                "Migrate.SqlServer.AzureDbSqlMi.Complete",
                "cancel",
                "finish",
                "restart",
              ]),
              errors: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    code: Schema.optional(Schema.String),
                    message: Schema.optional(Schema.String),
                    details: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          code: Schema.optional(Schema.String),
                          message: Schema.optional(Schema.String),
                          details: Schema.optional(
                            Schema.Array(Schema.Unknown),
                          ),
                        }),
                      ),
                    ),
                  }),
                ),
              ),
              state: Schema.optional(
                Schema.Literals([
                  "Unknown",
                  "Accepted",
                  "Running",
                  "Succeeded",
                  "Failed",
                ]),
              ),
            }),
          ),
        ),
        clientData: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
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
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/serviceTasks/{taskName}",
      apiVersion: "2025-06-30",
    }),
  ) as unknown as Schema.Codec<ServiceTasksUpdateInput>;

// Output Schema
export interface ServiceTasksUpdateOutput {
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
export const ServiceTasksUpdateOutput =
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
  }) as unknown as Schema.Codec<ServiceTasksUpdateOutput>;

// The operation
/**
 * Create or update service task
 *
 * The service tasks resource is a nested, proxy-only resource representing work performed by a DMS (classic) instance. The PATCH method updates an existing service task, but since service tasks have no mutable custom properties, there is little reason to do so.
 *
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param groupName - Name of the resource group
 * @param serviceName - Name of the service
 * @param taskName - Name of the Task
 * @param api-version - Version of the API
 * @param etag - HTTP strong entity tag value. This is ignored if submitted.
 * @param properties - Custom task properties
 * @param systemData - Metadata pertaining to creation and last modification of the resource.
 */
export const ServiceTasksUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ServiceTasksUpdateInput,
  outputSchema: ServiceTasksUpdateOutput,
}));
// Input Schema
export interface SqlMigrationServicesCreateOrUpdateInput {
  resourceGroupName: string;
  sqlMigrationServiceName: string;
  subscriptionId: string;
  properties?: { provisioningState?: string; integrationRuntimeState?: string };
  tags?: Record<string, string>;
  location: string;
}
export const SqlMigrationServicesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlMigrationServiceName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(Schema.String),
        integrationRuntimeState: Schema.optional(Schema.String),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataMigration/sqlMigrationServices/{sqlMigrationServiceName}",
      apiVersion: "2025-06-30",
    }),
  ) as unknown as Schema.Codec<SqlMigrationServicesCreateOrUpdateInput>;

// Output Schema
export interface SqlMigrationServicesCreateOrUpdateOutput {
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
export const SqlMigrationServicesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<SqlMigrationServicesCreateOrUpdateOutput>;

// The operation
/**
 * Create or Update Database Migration Service.
 *
 * @param resourceGroupName - Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param sqlMigrationServiceName - Name of the SQL Migration Service.
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param api-version - API version to use for the request.
 */
export const SqlMigrationServicesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlMigrationServicesCreateOrUpdateInput,
    outputSchema: SqlMigrationServicesCreateOrUpdateOutput,
  }));
// Input Schema
export interface SqlMigrationServicesDeleteInput {
  resourceGroupName: string;
  sqlMigrationServiceName: string;
  subscriptionId: string;
}
export const SqlMigrationServicesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlMigrationServiceName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataMigration/sqlMigrationServices/{sqlMigrationServiceName}",
      apiVersion: "2025-06-30",
    }),
  ) as unknown as Schema.Codec<SqlMigrationServicesDeleteInput>;

// Output Schema
export type SqlMigrationServicesDeleteOutput = void;
export const SqlMigrationServicesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<SqlMigrationServicesDeleteOutput>;

// The operation
/**
 * Delete Database Migration Service.
 *
 * @param resourceGroupName - Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param sqlMigrationServiceName - Name of the SQL Migration Service.
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param api-version - API version to use for the request.
 */
export const SqlMigrationServicesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SqlMigrationServicesDeleteInput,
    outputSchema: SqlMigrationServicesDeleteOutput,
  }),
);
// Input Schema
export interface SqlMigrationServicesDeleteNodeInput {
  resourceGroupName: string;
  sqlMigrationServiceName: string;
  subscriptionId: string;
  nodeName?: string;
  integrationRuntimeName?: string;
}
export const SqlMigrationServicesDeleteNodeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlMigrationServiceName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    nodeName: Schema.optional(Schema.String),
    integrationRuntimeName: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataMigration/sqlMigrationServices/{sqlMigrationServiceName}/deleteNode",
      apiVersion: "2025-06-30",
    }),
  ) as unknown as Schema.Codec<SqlMigrationServicesDeleteNodeInput>;

// Output Schema
export interface SqlMigrationServicesDeleteNodeOutput {
  nodeName?: string;
  integrationRuntimeName?: string;
}
export const SqlMigrationServicesDeleteNodeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nodeName: Schema.optional(Schema.String),
    integrationRuntimeName: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SqlMigrationServicesDeleteNodeOutput>;

// The operation
/**
 * Delete the integration runtime node.
 *
 * @param resourceGroupName - Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param sqlMigrationServiceName - Name of the SQL Migration Service.
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param api-version - API version to use for the request.
 */
export const SqlMigrationServicesDeleteNode =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlMigrationServicesDeleteNodeInput,
    outputSchema: SqlMigrationServicesDeleteNodeOutput,
  }));
// Input Schema
export interface SqlMigrationServicesGetInput {
  resourceGroupName: string;
  sqlMigrationServiceName: string;
  subscriptionId: string;
}
export const SqlMigrationServicesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlMigrationServiceName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataMigration/sqlMigrationServices/{sqlMigrationServiceName}",
      apiVersion: "2025-06-30",
    }),
  ) as unknown as Schema.Codec<SqlMigrationServicesGetInput>;

// Output Schema
export interface SqlMigrationServicesGetOutput {
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
export const SqlMigrationServicesGetOutput =
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
  }) as unknown as Schema.Codec<SqlMigrationServicesGetOutput>;

// The operation
/**
 * Retrieve the Database Migration Service
 *
 * @param resourceGroupName - Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param sqlMigrationServiceName - Name of the SQL Migration Service.
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param api-version - API version to use for the request.
 */
export const SqlMigrationServicesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SqlMigrationServicesGetInput,
    outputSchema: SqlMigrationServicesGetOutput,
  }),
);
// Input Schema
export interface SqlMigrationServicesListAuthKeysInput {
  resourceGroupName: string;
  sqlMigrationServiceName: string;
  subscriptionId: string;
}
export const SqlMigrationServicesListAuthKeysInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlMigrationServiceName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataMigration/sqlMigrationServices/{sqlMigrationServiceName}/listAuthKeys",
      apiVersion: "2025-06-30",
    }),
  ) as unknown as Schema.Codec<SqlMigrationServicesListAuthKeysInput>;

// Output Schema
export interface SqlMigrationServicesListAuthKeysOutput {
  authKey1?: string;
  authKey2?: string;
}
export const SqlMigrationServicesListAuthKeysOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    authKey1: Schema.optional(Schema.String),
    authKey2: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SqlMigrationServicesListAuthKeysOutput>;

// The operation
/**
 * Retrieve the List of Authentication Keys for Self Hosted Integration Runtime.
 *
 * @param resourceGroupName - Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param sqlMigrationServiceName - Name of the SQL Migration Service.
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param api-version - API version to use for the request.
 */
export const SqlMigrationServicesListAuthKeys =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlMigrationServicesListAuthKeysInput,
    outputSchema: SqlMigrationServicesListAuthKeysOutput,
  }));
// Input Schema
export interface SqlMigrationServicesListByResourceGroupInput {
  resourceGroupName: string;
  subscriptionId: string;
}
export const SqlMigrationServicesListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataMigration/sqlMigrationServices",
      apiVersion: "2025-06-30",
    }),
  ) as unknown as Schema.Codec<SqlMigrationServicesListByResourceGroupInput>;

// Output Schema
export interface SqlMigrationServicesListByResourceGroupOutput {
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
  nextLink?: string;
}
export const SqlMigrationServicesListByResourceGroupOutput =
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SqlMigrationServicesListByResourceGroupOutput>;

// The operation
/**
 * Retrieve all SQL migration services in the resource group.
 *
 * @param resourceGroupName - Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param api-version - API version to use for the request.
 */
export const SqlMigrationServicesListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlMigrationServicesListByResourceGroupInput,
    outputSchema: SqlMigrationServicesListByResourceGroupOutput,
  }));
// Input Schema
export interface SqlMigrationServicesListBySubscriptionInput {
  subscriptionId: string;
}
export const SqlMigrationServicesListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DataMigration/sqlMigrationServices",
      apiVersion: "2025-06-30",
    }),
  ) as unknown as Schema.Codec<SqlMigrationServicesListBySubscriptionInput>;

// Output Schema
export interface SqlMigrationServicesListBySubscriptionOutput {
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
  nextLink?: string;
}
export const SqlMigrationServicesListBySubscriptionOutput =
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SqlMigrationServicesListBySubscriptionOutput>;

// The operation
/**
 * Retrieve all SQL migration services in the subscriptions.
 *
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param api-version - API version to use for the request.
 */
export const SqlMigrationServicesListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlMigrationServicesListBySubscriptionInput,
    outputSchema: SqlMigrationServicesListBySubscriptionOutput,
  }));
// Input Schema
export interface SqlMigrationServicesListMigrationsInput {
  resourceGroupName: string;
  sqlMigrationServiceName: string;
  subscriptionId: string;
}
export const SqlMigrationServicesListMigrationsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlMigrationServiceName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataMigration/sqlMigrationServices/{sqlMigrationServiceName}/listMigrations",
      apiVersion: "2025-06-30",
    }),
  ) as unknown as Schema.Codec<SqlMigrationServicesListMigrationsInput>;

// Output Schema
export interface SqlMigrationServicesListMigrationsOutput {
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
  nextLink?: string;
}
export const SqlMigrationServicesListMigrationsOutput =
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
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SqlMigrationServicesListMigrationsOutput>;

// The operation
/**
 * Retrieve the List of database migrations attached to the service.
 *
 * @param resourceGroupName - Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param sqlMigrationServiceName - Name of the SQL Migration Service.
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param api-version - API version to use for the request.
 */
export const SqlMigrationServicesListMigrations =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlMigrationServicesListMigrationsInput,
    outputSchema: SqlMigrationServicesListMigrationsOutput,
  }));
// Input Schema
export interface SqlMigrationServicesListMonitoringDataInput {
  resourceGroupName: string;
  sqlMigrationServiceName: string;
  subscriptionId: string;
}
export const SqlMigrationServicesListMonitoringDataInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlMigrationServiceName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataMigration/sqlMigrationServices/{sqlMigrationServiceName}/listMonitoringData",
      apiVersion: "2025-06-30",
    }),
  ) as unknown as Schema.Codec<SqlMigrationServicesListMonitoringDataInput>;

// Output Schema
export interface SqlMigrationServicesListMonitoringDataOutput {
  name?: string;
  nodes?: {
    additionalProperties?: Record<string, unknown>;
    nodeName?: string;
    availableMemoryInMB?: number;
    cpuUtilization?: number;
    concurrentJobsLimit?: number;
    concurrentJobsRunning?: number;
    maxConcurrentJobs?: number;
    sentBytes?: number;
    receivedBytes?: number;
  }[];
}
export const SqlMigrationServicesListMonitoringDataOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    nodes: Schema.optional(
      Schema.Array(
        Schema.Struct({
          additionalProperties: Schema.optional(
            Schema.Record(Schema.String, Schema.Unknown),
          ),
          nodeName: Schema.optional(Schema.String),
          availableMemoryInMB: Schema.optional(Schema.Number),
          cpuUtilization: Schema.optional(Schema.Number),
          concurrentJobsLimit: Schema.optional(Schema.Number),
          concurrentJobsRunning: Schema.optional(Schema.Number),
          maxConcurrentJobs: Schema.optional(Schema.Number),
          sentBytes: Schema.optional(Schema.Number),
          receivedBytes: Schema.optional(Schema.Number),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<SqlMigrationServicesListMonitoringDataOutput>;

// The operation
/**
 * Retrieve the registered Integration Runtime nodes and their monitoring data for a given Database Migration Service.
 *
 * @param resourceGroupName - Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param sqlMigrationServiceName - Name of the SQL Migration Service.
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param api-version - API version to use for the request.
 */
export const SqlMigrationServicesListMonitoringData =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlMigrationServicesListMonitoringDataInput,
    outputSchema: SqlMigrationServicesListMonitoringDataOutput,
  }));
// Input Schema
export interface SqlMigrationServicesRegenerateAuthKeysInput {
  resourceGroupName: string;
  sqlMigrationServiceName: string;
  subscriptionId: string;
  keyName?: string;
  authKey1?: string;
  authKey2?: string;
}
export const SqlMigrationServicesRegenerateAuthKeysInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlMigrationServiceName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    keyName: Schema.optional(Schema.String),
    authKey1: Schema.optional(Schema.String),
    authKey2: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataMigration/sqlMigrationServices/{sqlMigrationServiceName}/regenerateAuthKeys",
      apiVersion: "2025-06-30",
    }),
  ) as unknown as Schema.Codec<SqlMigrationServicesRegenerateAuthKeysInput>;

// Output Schema
export interface SqlMigrationServicesRegenerateAuthKeysOutput {
  keyName?: string;
  authKey1?: string;
  authKey2?: string;
}
export const SqlMigrationServicesRegenerateAuthKeysOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    keyName: Schema.optional(Schema.String),
    authKey1: Schema.optional(Schema.String),
    authKey2: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SqlMigrationServicesRegenerateAuthKeysOutput>;

// The operation
/**
 * Regenerate a new set of Authentication Keys for Self Hosted Integration Runtime.
 *
 * @param resourceGroupName - Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param sqlMigrationServiceName - Name of the SQL Migration Service.
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param api-version - API version to use for the request.
 */
export const SqlMigrationServicesRegenerateAuthKeys =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlMigrationServicesRegenerateAuthKeysInput,
    outputSchema: SqlMigrationServicesRegenerateAuthKeysOutput,
  }));
// Input Schema
export interface SqlMigrationServicesUpdateInput {
  resourceGroupName: string;
  sqlMigrationServiceName: string;
  subscriptionId: string;
  tags?: Record<string, string>;
}
export const SqlMigrationServicesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    sqlMigrationServiceName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataMigration/sqlMigrationServices/{sqlMigrationServiceName}",
      apiVersion: "2025-06-30",
    }),
  ) as unknown as Schema.Codec<SqlMigrationServicesUpdateInput>;

// Output Schema
export interface SqlMigrationServicesUpdateOutput {
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
export const SqlMigrationServicesUpdateOutput =
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
  }) as unknown as Schema.Codec<SqlMigrationServicesUpdateOutput>;

// The operation
/**
 * Update Database Migration Service.
 *
 * @param resourceGroupName - Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
 * @param sqlMigrationServiceName - Name of the SQL Migration Service.
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param api-version - API version to use for the request.
 */
export const SqlMigrationServicesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SqlMigrationServicesUpdateInput,
    outputSchema: SqlMigrationServicesUpdateOutput,
  }),
);
// Input Schema
export interface TasksCancelInput {
  subscriptionId: string;
  groupName: string;
  serviceName: string;
  projectName: string;
  taskName: string;
}
export const TasksCancelInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  groupName: Schema.String.pipe(T.PathParam()),
  serviceName: Schema.String.pipe(T.PathParam()),
  projectName: Schema.String.pipe(T.PathParam()),
  taskName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/projects/{projectName}/tasks/{taskName}/cancel",
    apiVersion: "2025-06-30",
  }),
) as unknown as Schema.Codec<TasksCancelInput>;

// Output Schema
export interface TasksCancelOutput {
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
export const TasksCancelOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<TasksCancelOutput>;

// The operation
/**
 * Cancel a task
 *
 * The tasks resource is a nested, proxy-only resource representing work performed by a DMS (classic) instance. This method cancels a task if it's currently queued or running.
 *
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param groupName - Name of the resource group
 * @param serviceName - Name of the service
 * @param projectName - Name of the project
 * @param taskName - Name of the Task
 * @param api-version - Version of the API
 */
export const TasksCancel = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TasksCancelInput,
  outputSchema: TasksCancelOutput,
}));
// Input Schema
export interface TasksCommandInput {
  subscriptionId: string;
  groupName: string;
  serviceName: string;
  projectName: string;
  taskName: string;
  commandType:
    | "Migrate.Sync.Complete.Database"
    | "Migrate.SqlServer.AzureDbSqlMi.Complete"
    | "cancel"
    | "finish"
    | "restart";
  errors?: {
    code?: string;
    message?: string;
    details?: { code?: string; message?: string; details?: unknown[] }[];
  }[];
  state?: "Unknown" | "Accepted" | "Running" | "Succeeded" | "Failed";
}
export const TasksCommandInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  groupName: Schema.String.pipe(T.PathParam()),
  serviceName: Schema.String.pipe(T.PathParam()),
  projectName: Schema.String.pipe(T.PathParam()),
  taskName: Schema.String.pipe(T.PathParam()),
  commandType: Schema.Literals([
    "Migrate.Sync.Complete.Database",
    "Migrate.SqlServer.AzureDbSqlMi.Complete",
    "cancel",
    "finish",
    "restart",
  ]),
  errors: Schema.optional(
    Schema.Array(
      Schema.Struct({
        code: Schema.optional(Schema.String),
        message: Schema.optional(Schema.String),
        details: Schema.optional(
          Schema.Array(
            Schema.Struct({
              code: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              details: Schema.optional(Schema.Array(Schema.Unknown)),
            }),
          ),
        ),
      }),
    ),
  ),
  state: Schema.optional(
    Schema.Literals(["Unknown", "Accepted", "Running", "Succeeded", "Failed"]),
  ),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/projects/{projectName}/tasks/{taskName}/command",
    apiVersion: "2025-06-30",
  }),
) as unknown as Schema.Codec<TasksCommandInput>;

// Output Schema
export interface TasksCommandOutput {
  commandType:
    | "Migrate.Sync.Complete.Database"
    | "Migrate.SqlServer.AzureDbSqlMi.Complete"
    | "cancel"
    | "finish"
    | "restart";
  errors?: {
    code?: string;
    message?: string;
    details?: { code?: string; message?: string; details?: unknown[] }[];
  }[];
  state?: "Unknown" | "Accepted" | "Running" | "Succeeded" | "Failed";
}
export const TasksCommandOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  commandType: Schema.Literals([
    "Migrate.Sync.Complete.Database",
    "Migrate.SqlServer.AzureDbSqlMi.Complete",
    "cancel",
    "finish",
    "restart",
  ]),
  errors: Schema.optional(
    Schema.Array(
      Schema.Struct({
        code: Schema.optional(Schema.String),
        message: Schema.optional(Schema.String),
        details: Schema.optional(
          Schema.Array(
            Schema.Struct({
              code: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              details: Schema.optional(Schema.Array(Schema.Unknown)),
            }),
          ),
        ),
      }),
    ),
  ),
  state: Schema.optional(
    Schema.Literals(["Unknown", "Accepted", "Running", "Succeeded", "Failed"]),
  ),
}) as unknown as Schema.Codec<TasksCommandOutput>;

// The operation
/**
 * Execute a command on a task
 *
 * The tasks resource is a nested, proxy-only resource representing work performed by a DMS (classic) instance. This method executes a command on a running task.
 *
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param groupName - Name of the resource group
 * @param serviceName - Name of the service
 * @param projectName - Name of the project
 * @param taskName - Name of the Task
 * @param api-version - Version of the API
 * @param commandType - Command type.
 * @param errors - Array of errors. This is ignored if submitted.
 * @param state - The state of the command. This is ignored if submitted.
 */
export const TasksCommand = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TasksCommandInput,
  outputSchema: TasksCommandOutput,
}));
// Input Schema
export interface TasksCreateOrUpdateInput {
  subscriptionId: string;
  groupName: string;
  serviceName: string;
  projectName: string;
  taskName: string;
  etag?: string;
  properties?: {
    taskType:
      | "Connect.MongoDb"
      | "ConnectToSource.SqlServer"
      | "ConnectToSource.SqlServer.Sync"
      | "ConnectToSource.PostgreSql.Sync"
      | "ConnectToSource.MySql"
      | "ConnectToSource.Oracle.Sync"
      | "ConnectToTarget.SqlDb"
      | "ConnectToTarget.SqlDb.Sync"
      | "ConnectToTarget.AzureDbForPostgreSql.Sync"
      | "ConnectToTarget.Oracle.AzureDbForPostgreSql.Sync"
      | "ConnectToTarget.AzureSqlDbMI"
      | "ConnectToTarget.AzureSqlDbMI.Sync.LRS"
      | "ConnectToTarget.AzureDbForMySql"
      | "GetUserTables.Sql"
      | "GetUserTables.AzureSqlDb.Sync"
      | "GetUserTablesOracle"
      | "GetUserTablesPostgreSql"
      | "GetUserTablesMySql"
      | "Migrate.MongoDb"
      | "Migrate.SqlServer.AzureSqlDbMI"
      | "Migrate.SqlServer.AzureSqlDbMI.Sync.LRS"
      | "Migrate.SqlServer.SqlDb"
      | "Migrate.SqlServer.AzureSqlDb.Sync"
      | "Migrate.MySql.AzureDbForMySql.Sync"
      | "Migrate.MySql.AzureDbForMySql"
      | "Migrate.PostgreSql.AzureDbForPostgreSql.SyncV2"
      | "Migrate.Oracle.AzureDbForPostgreSql.Sync"
      | "ValidateMigrationInput.SqlServer.SqlDb.Sync"
      | "ValidateMigrationInput.SqlServer.AzureSqlDbMI"
      | "ValidateMigrationInput.SqlServer.AzureSqlDbMI.Sync.LRS"
      | "Validate.MongoDb"
      | "Validate.Oracle.AzureDbPostgreSql.Sync"
      | "GetTDECertificates.Sql"
      | "Migrate.Ssis"
      | "Service.Check.OCI"
      | "Service.Upload.OCI"
      | "Service.Install.OCI"
      | "MigrateSchemaSqlServerSqlDb";
    errors?: {
      code?: string;
      message?: string;
      details?: { code?: string; message?: string; details?: unknown[] }[];
    }[];
    state?:
      | "Unknown"
      | "Queued"
      | "Running"
      | "Canceled"
      | "Succeeded"
      | "Failed"
      | "FailedInputValidation"
      | "Faulted";
    commands?: {
      commandType:
        | "Migrate.Sync.Complete.Database"
        | "Migrate.SqlServer.AzureDbSqlMi.Complete"
        | "cancel"
        | "finish"
        | "restart";
      errors?: {
        code?: string;
        message?: string;
        details?: { code?: string; message?: string; details?: unknown[] }[];
      }[];
      state?: "Unknown" | "Accepted" | "Running" | "Succeeded" | "Failed";
    }[];
    clientData?: Record<string, string>;
  };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  id?: string;
  name?: string;
  type?: string;
}
export const TasksCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
    serviceName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    taskName: Schema.String.pipe(T.PathParam()),
    etag: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        taskType: Schema.Literals([
          "Connect.MongoDb",
          "ConnectToSource.SqlServer",
          "ConnectToSource.SqlServer.Sync",
          "ConnectToSource.PostgreSql.Sync",
          "ConnectToSource.MySql",
          "ConnectToSource.Oracle.Sync",
          "ConnectToTarget.SqlDb",
          "ConnectToTarget.SqlDb.Sync",
          "ConnectToTarget.AzureDbForPostgreSql.Sync",
          "ConnectToTarget.Oracle.AzureDbForPostgreSql.Sync",
          "ConnectToTarget.AzureSqlDbMI",
          "ConnectToTarget.AzureSqlDbMI.Sync.LRS",
          "ConnectToTarget.AzureDbForMySql",
          "GetUserTables.Sql",
          "GetUserTables.AzureSqlDb.Sync",
          "GetUserTablesOracle",
          "GetUserTablesPostgreSql",
          "GetUserTablesMySql",
          "Migrate.MongoDb",
          "Migrate.SqlServer.AzureSqlDbMI",
          "Migrate.SqlServer.AzureSqlDbMI.Sync.LRS",
          "Migrate.SqlServer.SqlDb",
          "Migrate.SqlServer.AzureSqlDb.Sync",
          "Migrate.MySql.AzureDbForMySql.Sync",
          "Migrate.MySql.AzureDbForMySql",
          "Migrate.PostgreSql.AzureDbForPostgreSql.SyncV2",
          "Migrate.Oracle.AzureDbForPostgreSql.Sync",
          "ValidateMigrationInput.SqlServer.SqlDb.Sync",
          "ValidateMigrationInput.SqlServer.AzureSqlDbMI",
          "ValidateMigrationInput.SqlServer.AzureSqlDbMI.Sync.LRS",
          "Validate.MongoDb",
          "Validate.Oracle.AzureDbPostgreSql.Sync",
          "GetTDECertificates.Sql",
          "Migrate.Ssis",
          "Service.Check.OCI",
          "Service.Upload.OCI",
          "Service.Install.OCI",
          "MigrateSchemaSqlServerSqlDb",
        ]),
        errors: Schema.optional(
          Schema.Array(
            Schema.Struct({
              code: Schema.optional(Schema.String),
              message: Schema.optional(Schema.String),
              details: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    code: Schema.optional(Schema.String),
                    message: Schema.optional(Schema.String),
                    details: Schema.optional(Schema.Array(Schema.Unknown)),
                  }),
                ),
              ),
            }),
          ),
        ),
        state: Schema.optional(
          Schema.Literals([
            "Unknown",
            "Queued",
            "Running",
            "Canceled",
            "Succeeded",
            "Failed",
            "FailedInputValidation",
            "Faulted",
          ]),
        ),
        commands: Schema.optional(
          Schema.Array(
            Schema.Struct({
              commandType: Schema.Literals([
                "Migrate.Sync.Complete.Database",
                "Migrate.SqlServer.AzureDbSqlMi.Complete",
                "cancel",
                "finish",
                "restart",
              ]),
              errors: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    code: Schema.optional(Schema.String),
                    message: Schema.optional(Schema.String),
                    details: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          code: Schema.optional(Schema.String),
                          message: Schema.optional(Schema.String),
                          details: Schema.optional(
                            Schema.Array(Schema.Unknown),
                          ),
                        }),
                      ),
                    ),
                  }),
                ),
              ),
              state: Schema.optional(
                Schema.Literals([
                  "Unknown",
                  "Accepted",
                  "Running",
                  "Succeeded",
                  "Failed",
                ]),
              ),
            }),
          ),
        ),
        clientData: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
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
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/projects/{projectName}/tasks/{taskName}",
      apiVersion: "2025-06-30",
    }),
  ) as unknown as Schema.Codec<TasksCreateOrUpdateInput>;

// Output Schema
export interface TasksCreateOrUpdateOutput {
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
export const TasksCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<TasksCreateOrUpdateOutput>;

// The operation
/**
 * Create or update task
 *
 * The tasks resource is a nested, proxy-only resource representing work performed by a DMS (classic) instance. The PUT method creates a new task or updates an existing one, although since tasks have no mutable custom properties, there is little reason to update an existing one.
 *
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param groupName - Name of the resource group
 * @param serviceName - Name of the service
 * @param projectName - Name of the project
 * @param taskName - Name of the Task
 * @param api-version - Version of the API
 * @param etag - HTTP strong entity tag value. This is ignored if submitted.
 * @param properties - Custom task properties
 * @param systemData - Metadata pertaining to creation and last modification of the resource.
 */
export const TasksCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TasksCreateOrUpdateInput,
  outputSchema: TasksCreateOrUpdateOutput,
}));
// Input Schema
export interface TasksDeleteInput {
  subscriptionId: string;
  groupName: string;
  serviceName: string;
  projectName: string;
  taskName: string;
  deleteRunningTasks?: boolean;
}
export const TasksDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  groupName: Schema.String.pipe(T.PathParam()),
  serviceName: Schema.String.pipe(T.PathParam()),
  projectName: Schema.String.pipe(T.PathParam()),
  taskName: Schema.String.pipe(T.PathParam()),
  deleteRunningTasks: Schema.optional(Schema.Boolean),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/projects/{projectName}/tasks/{taskName}",
    apiVersion: "2025-06-30",
  }),
) as unknown as Schema.Codec<TasksDeleteInput>;

// Output Schema
export type TasksDeleteOutput = void;
export const TasksDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<TasksDeleteOutput>;

// The operation
/**
 * Delete task
 *
 * The tasks resource is a nested, proxy-only resource representing work performed by a DMS (classic) instance. The DELETE method deletes a task, canceling it first if it's running.
 *
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param groupName - Name of the resource group
 * @param serviceName - Name of the service
 * @param projectName - Name of the project
 * @param taskName - Name of the Task
 * @param api-version - Version of the API
 * @param deleteRunningTasks - Delete the resource even if it contains running tasks
 */
export const TasksDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TasksDeleteInput,
  outputSchema: TasksDeleteOutput,
}));
// Input Schema
export interface TasksGetInput {
  subscriptionId: string;
  groupName: string;
  serviceName: string;
  projectName: string;
  taskName: string;
  $expand?: string;
}
export const TasksGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  groupName: Schema.String.pipe(T.PathParam()),
  serviceName: Schema.String.pipe(T.PathParam()),
  projectName: Schema.String.pipe(T.PathParam()),
  taskName: Schema.String.pipe(T.PathParam()),
  $expand: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/projects/{projectName}/tasks/{taskName}",
    apiVersion: "2025-06-30",
  }),
) as unknown as Schema.Codec<TasksGetInput>;

// Output Schema
export interface TasksGetOutput {
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
export const TasksGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<TasksGetOutput>;

// The operation
/**
 * Get task information
 *
 * The tasks resource is a nested, proxy-only resource representing work performed by a DMS (classic) instance. The GET method retrieves information about a task.
 *
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param groupName - Name of the resource group
 * @param serviceName - Name of the service
 * @param projectName - Name of the project
 * @param taskName - Name of the Task
 * @param api-version - Version of the API
 * @param $expand - Expand the response
 */
export const TasksGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TasksGetInput,
  outputSchema: TasksGetOutput,
}));
// Input Schema
export interface TasksListInput {
  subscriptionId: string;
  groupName: string;
  serviceName: string;
  projectName: string;
  taskType?: string;
}
export const TasksListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  groupName: Schema.String.pipe(T.PathParam()),
  serviceName: Schema.String.pipe(T.PathParam()),
  projectName: Schema.String.pipe(T.PathParam()),
  taskType: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/projects/{projectName}/tasks",
    apiVersion: "2025-06-30",
  }),
) as unknown as Schema.Codec<TasksListInput>;

// Output Schema
export interface TasksListOutput {
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
  nextLink?: string;
}
export const TasksListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<TasksListOutput>;

// The operation
/**
 * Get tasks in a service
 *
 * The services resource is the top-level resource that represents the Azure Database Migration Service (classic). This method returns a list of tasks owned by a service resource. Some tasks may have a status of Unknown, which indicates that an error occurred while querying the status of that task.
 *
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param groupName - Name of the resource group
 * @param serviceName - Name of the service
 * @param projectName - Name of the project
 * @param api-version - Version of the API
 * @param taskType - Filter tasks by task type
 */
export const TasksList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TasksListInput,
  outputSchema: TasksListOutput,
}));
// Input Schema
export interface TasksUpdateInput {
  subscriptionId: string;
  groupName: string;
  serviceName: string;
  projectName: string;
  taskName: string;
  etag?: string;
  properties?: {
    taskType:
      | "Connect.MongoDb"
      | "ConnectToSource.SqlServer"
      | "ConnectToSource.SqlServer.Sync"
      | "ConnectToSource.PostgreSql.Sync"
      | "ConnectToSource.MySql"
      | "ConnectToSource.Oracle.Sync"
      | "ConnectToTarget.SqlDb"
      | "ConnectToTarget.SqlDb.Sync"
      | "ConnectToTarget.AzureDbForPostgreSql.Sync"
      | "ConnectToTarget.Oracle.AzureDbForPostgreSql.Sync"
      | "ConnectToTarget.AzureSqlDbMI"
      | "ConnectToTarget.AzureSqlDbMI.Sync.LRS"
      | "ConnectToTarget.AzureDbForMySql"
      | "GetUserTables.Sql"
      | "GetUserTables.AzureSqlDb.Sync"
      | "GetUserTablesOracle"
      | "GetUserTablesPostgreSql"
      | "GetUserTablesMySql"
      | "Migrate.MongoDb"
      | "Migrate.SqlServer.AzureSqlDbMI"
      | "Migrate.SqlServer.AzureSqlDbMI.Sync.LRS"
      | "Migrate.SqlServer.SqlDb"
      | "Migrate.SqlServer.AzureSqlDb.Sync"
      | "Migrate.MySql.AzureDbForMySql.Sync"
      | "Migrate.MySql.AzureDbForMySql"
      | "Migrate.PostgreSql.AzureDbForPostgreSql.SyncV2"
      | "Migrate.Oracle.AzureDbForPostgreSql.Sync"
      | "ValidateMigrationInput.SqlServer.SqlDb.Sync"
      | "ValidateMigrationInput.SqlServer.AzureSqlDbMI"
      | "ValidateMigrationInput.SqlServer.AzureSqlDbMI.Sync.LRS"
      | "Validate.MongoDb"
      | "Validate.Oracle.AzureDbPostgreSql.Sync"
      | "GetTDECertificates.Sql"
      | "Migrate.Ssis"
      | "Service.Check.OCI"
      | "Service.Upload.OCI"
      | "Service.Install.OCI"
      | "MigrateSchemaSqlServerSqlDb";
    errors?: {
      code?: string;
      message?: string;
      details?: { code?: string; message?: string; details?: unknown[] }[];
    }[];
    state?:
      | "Unknown"
      | "Queued"
      | "Running"
      | "Canceled"
      | "Succeeded"
      | "Failed"
      | "FailedInputValidation"
      | "Faulted";
    commands?: {
      commandType:
        | "Migrate.Sync.Complete.Database"
        | "Migrate.SqlServer.AzureDbSqlMi.Complete"
        | "cancel"
        | "finish"
        | "restart";
      errors?: {
        code?: string;
        message?: string;
        details?: { code?: string; message?: string; details?: unknown[] }[];
      }[];
      state?: "Unknown" | "Accepted" | "Running" | "Succeeded" | "Failed";
    }[];
    clientData?: Record<string, string>;
  };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  id?: string;
  name?: string;
  type?: string;
}
export const TasksUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  groupName: Schema.String.pipe(T.PathParam()),
  serviceName: Schema.String.pipe(T.PathParam()),
  projectName: Schema.String.pipe(T.PathParam()),
  taskName: Schema.String.pipe(T.PathParam()),
  etag: Schema.optional(Schema.String),
  properties: Schema.optional(
    Schema.Struct({
      taskType: Schema.Literals([
        "Connect.MongoDb",
        "ConnectToSource.SqlServer",
        "ConnectToSource.SqlServer.Sync",
        "ConnectToSource.PostgreSql.Sync",
        "ConnectToSource.MySql",
        "ConnectToSource.Oracle.Sync",
        "ConnectToTarget.SqlDb",
        "ConnectToTarget.SqlDb.Sync",
        "ConnectToTarget.AzureDbForPostgreSql.Sync",
        "ConnectToTarget.Oracle.AzureDbForPostgreSql.Sync",
        "ConnectToTarget.AzureSqlDbMI",
        "ConnectToTarget.AzureSqlDbMI.Sync.LRS",
        "ConnectToTarget.AzureDbForMySql",
        "GetUserTables.Sql",
        "GetUserTables.AzureSqlDb.Sync",
        "GetUserTablesOracle",
        "GetUserTablesPostgreSql",
        "GetUserTablesMySql",
        "Migrate.MongoDb",
        "Migrate.SqlServer.AzureSqlDbMI",
        "Migrate.SqlServer.AzureSqlDbMI.Sync.LRS",
        "Migrate.SqlServer.SqlDb",
        "Migrate.SqlServer.AzureSqlDb.Sync",
        "Migrate.MySql.AzureDbForMySql.Sync",
        "Migrate.MySql.AzureDbForMySql",
        "Migrate.PostgreSql.AzureDbForPostgreSql.SyncV2",
        "Migrate.Oracle.AzureDbForPostgreSql.Sync",
        "ValidateMigrationInput.SqlServer.SqlDb.Sync",
        "ValidateMigrationInput.SqlServer.AzureSqlDbMI",
        "ValidateMigrationInput.SqlServer.AzureSqlDbMI.Sync.LRS",
        "Validate.MongoDb",
        "Validate.Oracle.AzureDbPostgreSql.Sync",
        "GetTDECertificates.Sql",
        "Migrate.Ssis",
        "Service.Check.OCI",
        "Service.Upload.OCI",
        "Service.Install.OCI",
        "MigrateSchemaSqlServerSqlDb",
      ]),
      errors: Schema.optional(
        Schema.Array(
          Schema.Struct({
            code: Schema.optional(Schema.String),
            message: Schema.optional(Schema.String),
            details: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  code: Schema.optional(Schema.String),
                  message: Schema.optional(Schema.String),
                  details: Schema.optional(Schema.Array(Schema.Unknown)),
                }),
              ),
            ),
          }),
        ),
      ),
      state: Schema.optional(
        Schema.Literals([
          "Unknown",
          "Queued",
          "Running",
          "Canceled",
          "Succeeded",
          "Failed",
          "FailedInputValidation",
          "Faulted",
        ]),
      ),
      commands: Schema.optional(
        Schema.Array(
          Schema.Struct({
            commandType: Schema.Literals([
              "Migrate.Sync.Complete.Database",
              "Migrate.SqlServer.AzureDbSqlMi.Complete",
              "cancel",
              "finish",
              "restart",
            ]),
            errors: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  code: Schema.optional(Schema.String),
                  message: Schema.optional(Schema.String),
                  details: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        code: Schema.optional(Schema.String),
                        message: Schema.optional(Schema.String),
                        details: Schema.optional(Schema.Array(Schema.Unknown)),
                      }),
                    ),
                  ),
                }),
              ),
            ),
            state: Schema.optional(
              Schema.Literals([
                "Unknown",
                "Accepted",
                "Running",
                "Succeeded",
                "Failed",
              ]),
            ),
          }),
        ),
      ),
      clientData: Schema.optional(Schema.Record(Schema.String, Schema.String)),
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
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/projects/{projectName}/tasks/{taskName}",
    apiVersion: "2025-06-30",
  }),
) as unknown as Schema.Codec<TasksUpdateInput>;

// Output Schema
export interface TasksUpdateOutput {
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
export const TasksUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<TasksUpdateOutput>;

// The operation
/**
 * Create or update task
 *
 * The tasks resource is a nested, proxy-only resource representing work performed by a DMS (classic) instance. The PATCH method updates an existing task, but since tasks have no mutable custom properties, there is little reason to do so.
 *
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param groupName - Name of the resource group
 * @param serviceName - Name of the service
 * @param projectName - Name of the project
 * @param taskName - Name of the Task
 * @param api-version - Version of the API
 * @param etag - HTTP strong entity tag value. This is ignored if submitted.
 * @param properties - Custom task properties
 * @param systemData - Metadata pertaining to creation and last modification of the resource.
 */
export const TasksUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TasksUpdateInput,
  outputSchema: TasksUpdateOutput,
}));
// Input Schema
export interface UsagesListInput {
  subscriptionId: string;
  location: string;
}
export const UsagesListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  location: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.DataMigration/locations/{location}/usages",
    apiVersion: "2025-06-30",
  }),
) as unknown as Schema.Codec<UsagesListInput>;

// Output Schema
export interface UsagesListOutput {
  value?: {
    currentValue?: number;
    id?: string;
    limit?: number;
    name?: { localizedValue?: string; value?: string };
    unit?: string;
  }[];
  nextLink?: string;
}
export const UsagesListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        currentValue: Schema.optional(Schema.Number),
        id: Schema.optional(Schema.String),
        limit: Schema.optional(Schema.Number),
        name: Schema.optional(
          Schema.Struct({
            localizedValue: Schema.optional(Schema.String),
            value: Schema.optional(Schema.String),
          }),
        ),
        unit: Schema.optional(Schema.String),
      }),
    ),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<UsagesListOutput>;

// The operation
/**
 * Get resource quotas and usage information
 *
 * This method returns region-specific quotas and resource usage information for the Azure Database Migration Service (classic).
 *
 * @param subscriptionId - Subscription ID that identifies an Azure subscription.
 * @param location - The Azure region of the operation
 * @param api-version - Version of the API
 */
export const UsagesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UsagesListInput,
  outputSchema: UsagesListOutput,
}));
