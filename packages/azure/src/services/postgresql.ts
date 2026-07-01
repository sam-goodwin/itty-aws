/**
 * Azure Postgresql API
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
export interface AdministratorsMicrosoftEntraCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  serverName: string;
  objectId: string;
  properties?: {
    principalType?: "Unknown" | "User" | "Group" | "ServicePrincipal";
    principalName?: string;
    tenantId?: string;
  };
}
export const AdministratorsMicrosoftEntraCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
    objectId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        principalType: Schema.optional(
          Schema.Literals(["Unknown", "User", "Group", "ServicePrincipal"]),
        ),
        principalName: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/administrators/{objectId}",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<AdministratorsMicrosoftEntraCreateOrUpdateInput>;

// Output Schema
export type AdministratorsMicrosoftEntraCreateOrUpdateOutput = void;
export const AdministratorsMicrosoftEntraCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<AdministratorsMicrosoftEntraCreateOrUpdateOutput>;

// The operation
/**
 * Creates a new server administrator associated to a Microsoft Entra principal.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param objectId - Object identifier of the Microsoft Entra principal.
 */
export const AdministratorsMicrosoftEntraCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AdministratorsMicrosoftEntraCreateOrUpdateInput,
    outputSchema: AdministratorsMicrosoftEntraCreateOrUpdateOutput,
  }));
// Input Schema
export interface AdministratorsMicrosoftEntraDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  serverName: string;
  objectId: string;
}
export const AdministratorsMicrosoftEntraDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
    objectId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/administrators/{objectId}",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<AdministratorsMicrosoftEntraDeleteInput>;

// Output Schema
export type AdministratorsMicrosoftEntraDeleteOutput = void;
export const AdministratorsMicrosoftEntraDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<AdministratorsMicrosoftEntraDeleteOutput>;

// The operation
/**
 * Deletes an existing server administrator associated to a Microsoft Entra principal.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param objectId - Object identifier of the Microsoft Entra principal.
 */
export const AdministratorsMicrosoftEntraDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AdministratorsMicrosoftEntraDeleteInput,
    outputSchema: AdministratorsMicrosoftEntraDeleteOutput,
  }));
// Input Schema
export interface AdministratorsMicrosoftEntraGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  serverName: string;
  objectId: string;
}
export const AdministratorsMicrosoftEntraGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
    objectId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/administrators/{objectId}",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<AdministratorsMicrosoftEntraGetInput>;

// Output Schema
export interface AdministratorsMicrosoftEntraGetOutput {
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
export const AdministratorsMicrosoftEntraGetOutput =
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
  }) as unknown as Schema.Codec<AdministratorsMicrosoftEntraGetOutput>;

// The operation
/**
 * Gets information about a server administrator associated to a Microsoft Entra principal.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param objectId - Object identifier of the Microsoft Entra principal.
 */
export const AdministratorsMicrosoftEntraGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AdministratorsMicrosoftEntraGetInput,
    outputSchema: AdministratorsMicrosoftEntraGetOutput,
  }));
// Input Schema
export interface AdministratorsMicrosoftEntraListByServerInput {
  subscriptionId: string;
  resourceGroupName: string;
  serverName: string;
}
export const AdministratorsMicrosoftEntraListByServerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/administrators",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<AdministratorsMicrosoftEntraListByServerInput>;

// Output Schema
export interface AdministratorsMicrosoftEntraListByServerOutput {
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
export const AdministratorsMicrosoftEntraListByServerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<AdministratorsMicrosoftEntraListByServerOutput>;

// The operation
/**
 * List all server administrators associated to a Microsoft Entra principal.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 */
export const AdministratorsMicrosoftEntraListByServer =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AdministratorsMicrosoftEntraListByServerInput,
    outputSchema: AdministratorsMicrosoftEntraListByServerOutput,
  }));
// Input Schema
export interface AdvancedThreatProtectionSettingsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  serverName: string;
  threatProtectionName: "Default";
}
export const AdvancedThreatProtectionSettingsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
    threatProtectionName: Schema.Literals(["Default"]).pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/advancedThreatProtectionSettings/{threatProtectionName}",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<AdvancedThreatProtectionSettingsGetInput>;

// Output Schema
export interface AdvancedThreatProtectionSettingsGetOutput {
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
export const AdvancedThreatProtectionSettingsGetOutput =
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
  }) as unknown as Schema.Codec<AdvancedThreatProtectionSettingsGetOutput>;

// The operation
/**
 * Gets state of advanced threat protection settings for a server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param threatProtectionName - Name of the advanced threat protection settings.
 */
export const AdvancedThreatProtectionSettingsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AdvancedThreatProtectionSettingsGetInput,
    outputSchema: AdvancedThreatProtectionSettingsGetOutput,
  }));
// Input Schema
export interface AdvancedThreatProtectionSettingsListByServerInput {
  subscriptionId: string;
  resourceGroupName: string;
  serverName: string;
}
export const AdvancedThreatProtectionSettingsListByServerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/advancedThreatProtectionSettings",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<AdvancedThreatProtectionSettingsListByServerInput>;

// Output Schema
export interface AdvancedThreatProtectionSettingsListByServerOutput {
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
export const AdvancedThreatProtectionSettingsListByServerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<AdvancedThreatProtectionSettingsListByServerOutput>;

// The operation
/**
 * Lists state of advanced threat protection settings for a server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 */
export const AdvancedThreatProtectionSettingsListByServer =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AdvancedThreatProtectionSettingsListByServerInput,
    outputSchema: AdvancedThreatProtectionSettingsListByServerOutput,
  }));
// Input Schema
export interface BackupsAutomaticAndOnDemandCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  serverName: string;
  backupName: string;
}
export const BackupsAutomaticAndOnDemandCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
    backupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/backups/{backupName}",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<BackupsAutomaticAndOnDemandCreateInput>;

// Output Schema
export type BackupsAutomaticAndOnDemandCreateOutput = void;
export const BackupsAutomaticAndOnDemandCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<BackupsAutomaticAndOnDemandCreateOutput>;

// The operation
/**
 * Creates an on demand backup of a server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param backupName - Name of the backup.
 */
export const BackupsAutomaticAndOnDemandCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BackupsAutomaticAndOnDemandCreateInput,
    outputSchema: BackupsAutomaticAndOnDemandCreateOutput,
  }));
// Input Schema
export interface BackupsAutomaticAndOnDemandDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  serverName: string;
  backupName: string;
}
export const BackupsAutomaticAndOnDemandDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
    backupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/backups/{backupName}",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<BackupsAutomaticAndOnDemandDeleteInput>;

// Output Schema
export type BackupsAutomaticAndOnDemandDeleteOutput = void;
export const BackupsAutomaticAndOnDemandDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<BackupsAutomaticAndOnDemandDeleteOutput>;

// The operation
/**
 * Deletes a specific backup, given its name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param backupName - Name of the backup.
 */
export const BackupsAutomaticAndOnDemandDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BackupsAutomaticAndOnDemandDeleteInput,
    outputSchema: BackupsAutomaticAndOnDemandDeleteOutput,
  }));
// Input Schema
export interface BackupsAutomaticAndOnDemandGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  serverName: string;
  backupName: string;
}
export const BackupsAutomaticAndOnDemandGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
    backupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/backups/{backupName}",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<BackupsAutomaticAndOnDemandGetInput>;

// Output Schema
export interface BackupsAutomaticAndOnDemandGetOutput {
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
export const BackupsAutomaticAndOnDemandGetOutput =
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
  }) as unknown as Schema.Codec<BackupsAutomaticAndOnDemandGetOutput>;

// The operation
/**
 * Gets information of an on demand backup, given its name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param backupName - Name of the backup.
 */
export const BackupsAutomaticAndOnDemandGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BackupsAutomaticAndOnDemandGetInput,
    outputSchema: BackupsAutomaticAndOnDemandGetOutput,
  }));
// Input Schema
export interface BackupsAutomaticAndOnDemandListByServerInput {
  subscriptionId: string;
  resourceGroupName: string;
  serverName: string;
}
export const BackupsAutomaticAndOnDemandListByServerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/backups",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<BackupsAutomaticAndOnDemandListByServerInput>;

// Output Schema
export interface BackupsAutomaticAndOnDemandListByServerOutput {
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
export const BackupsAutomaticAndOnDemandListByServerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<BackupsAutomaticAndOnDemandListByServerOutput>;

// The operation
/**
 * Lists all available backups of a server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 */
export const BackupsAutomaticAndOnDemandListByServer =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BackupsAutomaticAndOnDemandListByServerInput,
    outputSchema: BackupsAutomaticAndOnDemandListByServerOutput,
  }));
// Input Schema
export interface BackupsLongTermRetentionCheckPrerequisitesInput {
  subscriptionId: string;
  resourceGroupName: string;
  serverName: string;
  backupSettings: { backupName: string };
}
export const BackupsLongTermRetentionCheckPrerequisitesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
    backupSettings: Schema.Struct({
      backupName: Schema.String,
    }),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/ltrPreBackup",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<BackupsLongTermRetentionCheckPrerequisitesInput>;

// Output Schema
export interface BackupsLongTermRetentionCheckPrerequisitesOutput {
  properties: { numberOfContainers: number };
}
export const BackupsLongTermRetentionCheckPrerequisitesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.Struct({
      numberOfContainers: Schema.Number,
    }),
  }) as unknown as Schema.Codec<BackupsLongTermRetentionCheckPrerequisitesOutput>;

// The operation
/**
 * Performs all checks required for a long term retention backup operation to succeed.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 */
export const BackupsLongTermRetentionCheckPrerequisites =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BackupsLongTermRetentionCheckPrerequisitesInput,
    outputSchema: BackupsLongTermRetentionCheckPrerequisitesOutput,
  }));
// Input Schema
export interface BackupsLongTermRetentionGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  serverName: string;
  backupName: string;
}
export const BackupsLongTermRetentionGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
    backupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/ltrBackupOperations/{backupName}",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<BackupsLongTermRetentionGetInput>;

// Output Schema
export interface BackupsLongTermRetentionGetOutput {
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
export const BackupsLongTermRetentionGetOutput =
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
  }) as unknown as Schema.Codec<BackupsLongTermRetentionGetOutput>;

// The operation
/**
 * Gets the results of a long retention backup operation for a server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param backupName - The name of the backup.
 */
export const BackupsLongTermRetentionGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BackupsLongTermRetentionGetInput,
    outputSchema: BackupsLongTermRetentionGetOutput,
  }),
);
// Input Schema
export interface BackupsLongTermRetentionListByServerInput {
  subscriptionId: string;
  resourceGroupName: string;
  serverName: string;
}
export const BackupsLongTermRetentionListByServerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/ltrBackupOperations",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<BackupsLongTermRetentionListByServerInput>;

// Output Schema
export interface BackupsLongTermRetentionListByServerOutput {
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
export const BackupsLongTermRetentionListByServerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<BackupsLongTermRetentionListByServerOutput>;

// The operation
/**
 * Lists the results of the long term retention backup operations for a server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 */
export const BackupsLongTermRetentionListByServer =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BackupsLongTermRetentionListByServerInput,
    outputSchema: BackupsLongTermRetentionListByServerOutput,
  }));
// Input Schema
export interface BackupsLongTermRetentionStartInput {
  subscriptionId: string;
  resourceGroupName: string;
  serverName: string;
  targetDetails: { sasUriList: string[] };
  backupSettings: { backupName: string };
}
export const BackupsLongTermRetentionStartInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
    targetDetails: Schema.Struct({
      sasUriList: Schema.Array(Schema.String),
    }),
    backupSettings: Schema.Struct({
      backupName: Schema.String,
    }),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/startLtrBackup",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<BackupsLongTermRetentionStartInput>;

// Output Schema
export interface BackupsLongTermRetentionStartOutput {
  properties?: {
    datasourceSizeInBytes?: number;
    dataTransferredInBytes?: number;
    backupName?: string;
    backupMetadata?: string;
    status: "Running" | "Cancelled" | "Failed" | "Succeeded";
    startTime: string;
    endTime?: string;
    percentComplete?: number;
    errorCode?: string;
    errorMessage?: string;
  };
}
export const BackupsLongTermRetentionStartOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        datasourceSizeInBytes: Schema.optional(Schema.Number),
        dataTransferredInBytes: Schema.optional(Schema.Number),
        backupName: Schema.optional(Schema.String),
        backupMetadata: Schema.optional(Schema.String),
        status: Schema.Literals([
          "Running",
          "Cancelled",
          "Failed",
          "Succeeded",
        ]),
        startTime: Schema.String,
        endTime: Schema.optional(Schema.String),
        percentComplete: Schema.optional(Schema.Number),
        errorCode: Schema.optional(Schema.String),
        errorMessage: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<BackupsLongTermRetentionStartOutput>;

// The operation
/**
 * Initiates a long term retention backup.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 */
export const BackupsLongTermRetentionStart =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BackupsLongTermRetentionStartInput,
    outputSchema: BackupsLongTermRetentionStartOutput,
  }));
// Input Schema
export interface CapabilitiesByLocationListInput {
  subscriptionId: string;
  locationName: string;
}
export const CapabilitiesByLocationListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    locationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DBforPostgreSQL/locations/{locationName}/capabilities",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<CapabilitiesByLocationListInput>;

// Output Schema
export interface CapabilitiesByLocationListOutput {
  value: {
    status?: "Visible" | "Available" | "Default" | "Disabled";
    reason?: string;
  }[];
  nextLink?: string;
}
export const CapabilitiesByLocationListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        status: Schema.optional(
          Schema.Literals(["Visible", "Available", "Default", "Disabled"]),
        ),
        reason: Schema.optional(Schema.String),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<CapabilitiesByLocationListOutput>;

// The operation
/**
 * Lists the capabilities available in a given location for a specific subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param locationName - The name of the location.
 */
export const CapabilitiesByLocationList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CapabilitiesByLocationListInput,
    outputSchema: CapabilitiesByLocationListOutput,
  }),
);
// Input Schema
export interface CapabilitiesByServerListInput {
  subscriptionId: string;
  resourceGroupName: string;
  serverName: string;
}
export const CapabilitiesByServerListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/capabilities",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<CapabilitiesByServerListInput>;

// Output Schema
export interface CapabilitiesByServerListOutput {
  value: {
    status?: "Visible" | "Available" | "Default" | "Disabled";
    reason?: string;
  }[];
  nextLink?: string;
}
export const CapabilitiesByServerListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        status: Schema.optional(
          Schema.Literals(["Visible", "Available", "Default", "Disabled"]),
        ),
        reason: Schema.optional(Schema.String),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<CapabilitiesByServerListOutput>;

// The operation
/**
 * Lists the capabilities available for a given server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 */
export const CapabilitiesByServerList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CapabilitiesByServerListInput,
    outputSchema: CapabilitiesByServerListOutput,
  }),
);
// Input Schema
export interface CapturedLogsListByServerInput {
  subscriptionId: string;
  resourceGroupName: string;
  serverName: string;
}
export const CapturedLogsListByServerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/logFiles",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<CapturedLogsListByServerInput>;

// Output Schema
export interface CapturedLogsListByServerOutput {
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
export const CapturedLogsListByServerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<CapturedLogsListByServerOutput>;

// The operation
/**
 * Lists all captured logs for download in a server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 */
export const CapturedLogsListByServer = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CapturedLogsListByServerInput,
    outputSchema: CapturedLogsListByServerOutput,
  }),
);
// Input Schema
export interface ConfigurationsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  serverName: string;
  configurationName: string;
}
export const ConfigurationsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
    configurationName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/configurations/{configurationName}",
    apiVersion: "2025-08-01",
  }),
) as unknown as Schema.Codec<ConfigurationsGetInput>;

// Output Schema
export interface ConfigurationsGetOutput {
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
export const ConfigurationsGetOutput =
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
  }) as unknown as Schema.Codec<ConfigurationsGetOutput>;

// The operation
/**
 * Gets information about a specific configuration (also known as server parameter) of a server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param configurationName - Name of the configuration (also known as server parameter).
 */
export const ConfigurationsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ConfigurationsGetInput,
  outputSchema: ConfigurationsGetOutput,
}));
// Input Schema
export interface ConfigurationsListByServerInput {
  subscriptionId: string;
  resourceGroupName: string;
  serverName: string;
}
export const ConfigurationsListByServerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/configurations",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<ConfigurationsListByServerInput>;

// Output Schema
export interface ConfigurationsListByServerOutput {
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
export const ConfigurationsListByServerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<ConfigurationsListByServerOutput>;

// The operation
/**
 * Lists all configurations (also known as server parameters) of a server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 */
export const ConfigurationsListByServer = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ConfigurationsListByServerInput,
    outputSchema: ConfigurationsListByServerOutput,
  }),
);
// Input Schema
export interface ConfigurationsPutInput {
  subscriptionId: string;
  resourceGroupName: string;
  serverName: string;
  configurationName: string;
  properties?: {
    value?: string;
    description?: string;
    defaultValue?: string;
    dataType?:
      | "Boolean"
      | "Numeric"
      | "Integer"
      | "Enumeration"
      | "String"
      | "Set";
    allowedValues?: string;
    source?: string;
    isDynamicConfig?: boolean;
    isReadOnly?: boolean;
    isConfigPendingRestart?: boolean;
    unit?: string;
    documentationLink?: string;
  };
}
export const ConfigurationsPutInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
    configurationName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        value: Schema.optional(Schema.String),
        description: Schema.optional(Schema.String),
        defaultValue: Schema.optional(Schema.String),
        dataType: Schema.optional(
          Schema.Literals([
            "Boolean",
            "Numeric",
            "Integer",
            "Enumeration",
            "String",
            "Set",
          ]),
        ),
        allowedValues: Schema.optional(Schema.String),
        source: Schema.optional(Schema.String),
        isDynamicConfig: Schema.optional(Schema.Boolean),
        isReadOnly: Schema.optional(Schema.Boolean),
        isConfigPendingRestart: Schema.optional(Schema.Boolean),
        unit: Schema.optional(Schema.String),
        documentationLink: Schema.optional(Schema.String),
      }),
    ),
  },
).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/configurations/{configurationName}",
    apiVersion: "2025-08-01",
  }),
) as unknown as Schema.Codec<ConfigurationsPutInput>;

// Output Schema
export type ConfigurationsPutOutput = void;
export const ConfigurationsPutOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ConfigurationsPutOutput>;

// The operation
/**
 * Updates, using Put verb, the value assigned to a specific modifiable configuration (also known as server parameter) of a server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param configurationName - Name of the configuration (also known as server parameter).
 */
export const ConfigurationsPut = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ConfigurationsPutInput,
  outputSchema: ConfigurationsPutOutput,
}));
// Input Schema
export interface ConfigurationsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  serverName: string;
  configurationName: string;
  properties?: {
    value?: string;
    description?: string;
    defaultValue?: string;
    dataType?:
      | "Boolean"
      | "Numeric"
      | "Integer"
      | "Enumeration"
      | "String"
      | "Set";
    allowedValues?: string;
    source?: string;
    isDynamicConfig?: boolean;
    isReadOnly?: boolean;
    isConfigPendingRestart?: boolean;
    unit?: string;
    documentationLink?: string;
  };
}
export const ConfigurationsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
    configurationName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        value: Schema.optional(Schema.String),
        description: Schema.optional(Schema.String),
        defaultValue: Schema.optional(Schema.String),
        dataType: Schema.optional(
          Schema.Literals([
            "Boolean",
            "Numeric",
            "Integer",
            "Enumeration",
            "String",
            "Set",
          ]),
        ),
        allowedValues: Schema.optional(Schema.String),
        source: Schema.optional(Schema.String),
        isDynamicConfig: Schema.optional(Schema.Boolean),
        isReadOnly: Schema.optional(Schema.Boolean),
        isConfigPendingRestart: Schema.optional(Schema.Boolean),
        unit: Schema.optional(Schema.String),
        documentationLink: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/configurations/{configurationName}",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<ConfigurationsUpdateInput>;

// Output Schema
export type ConfigurationsUpdateOutput = void;
export const ConfigurationsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ConfigurationsUpdateOutput>;

// The operation
/**
 * Updates the value assigned to a specific modifiable configuration (also known as server parameter) of a server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param configurationName - Name of the configuration (also known as server parameter).
 */
export const ConfigurationsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ConfigurationsUpdateInput,
    outputSchema: ConfigurationsUpdateOutput,
  }),
);
// Input Schema
export interface DatabasesCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  serverName: string;
  databaseName: string;
  properties?: { charset?: string; collation?: string };
}
export const DatabasesCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serverName: Schema.String.pipe(T.PathParam()),
  databaseName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      charset: Schema.optional(Schema.String),
      collation: Schema.optional(Schema.String),
    }),
  ),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/databases/{databaseName}",
    apiVersion: "2025-08-01",
  }),
) as unknown as Schema.Codec<DatabasesCreateInput>;

// Output Schema
export type DatabasesCreateOutput = void;
export const DatabasesCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DatabasesCreateOutput>;

// The operation
/**
 * Creates a new database.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param databaseName - Name of the database (case-sensitive). Exact database names can be retrieved by getting the list of all existing databases in a server.
 */
export const DatabasesCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DatabasesCreateInput,
  outputSchema: DatabasesCreateOutput,
}));
// Input Schema
export interface DatabasesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  serverName: string;
  databaseName: string;
}
export const DatabasesDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serverName: Schema.String.pipe(T.PathParam()),
  databaseName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/databases/{databaseName}",
    apiVersion: "2025-08-01",
  }),
) as unknown as Schema.Codec<DatabasesDeleteInput>;

// Output Schema
export type DatabasesDeleteOutput = void;
export const DatabasesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DatabasesDeleteOutput>;

// The operation
/**
 * Deletes an existing database.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param databaseName - Name of the database (case-sensitive). Exact database names can be retrieved by getting the list of all existing databases in a server.
 */
export const DatabasesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DatabasesDeleteInput,
  outputSchema: DatabasesDeleteOutput,
}));
// Input Schema
export interface DatabasesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  serverName: string;
  databaseName: string;
}
export const DatabasesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serverName: Schema.String.pipe(T.PathParam()),
  databaseName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/databases/{databaseName}",
    apiVersion: "2025-08-01",
  }),
) as unknown as Schema.Codec<DatabasesGetInput>;

// Output Schema
export interface DatabasesGetOutput {
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
export const DatabasesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<DatabasesGetOutput>;

// The operation
/**
 * Gets information about an existing database.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param databaseName - Name of the database (case-sensitive). Exact database names can be retrieved by getting the list of all existing databases in a server.
 */
export const DatabasesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DatabasesGetInput,
  outputSchema: DatabasesGetOutput,
}));
// Input Schema
export interface DatabasesListByServerInput {
  subscriptionId: string;
  resourceGroupName: string;
  serverName: string;
}
export const DatabasesListByServerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/databases",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<DatabasesListByServerInput>;

// Output Schema
export interface DatabasesListByServerOutput {
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
export const DatabasesListByServerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<DatabasesListByServerOutput>;

// The operation
/**
 * Lists all databases in a server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 */
export const DatabasesListByServer = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DatabasesListByServerInput,
    outputSchema: DatabasesListByServerOutput,
  }),
);
// Input Schema
export interface FirewallRulesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  serverName: string;
  firewallRuleName: string;
  properties: { startIpAddress: string; endIpAddress: string };
}
export const FirewallRulesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
    firewallRuleName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      startIpAddress: Schema.String,
      endIpAddress: Schema.String,
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/firewallRules/{firewallRuleName}",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<FirewallRulesCreateOrUpdateInput>;

// Output Schema
export type FirewallRulesCreateOrUpdateOutput = void;
export const FirewallRulesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<FirewallRulesCreateOrUpdateOutput>;

// The operation
/**
 * Creates a new firewall rule or updates an existing firewall rule.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param firewallRuleName - Name of the firewall rule.
 */
export const FirewallRulesCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: FirewallRulesCreateOrUpdateInput,
    outputSchema: FirewallRulesCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface FirewallRulesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  serverName: string;
  firewallRuleName: string;
}
export const FirewallRulesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
    firewallRuleName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/firewallRules/{firewallRuleName}",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<FirewallRulesDeleteInput>;

// Output Schema
export type FirewallRulesDeleteOutput = void;
export const FirewallRulesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<FirewallRulesDeleteOutput>;

// The operation
/**
 * Deletes an existing firewall rule.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param firewallRuleName - Name of the firewall rule.
 */
export const FirewallRulesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FirewallRulesDeleteInput,
  outputSchema: FirewallRulesDeleteOutput,
}));
// Input Schema
export interface FirewallRulesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  serverName: string;
  firewallRuleName: string;
}
export const FirewallRulesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serverName: Schema.String.pipe(T.PathParam()),
  firewallRuleName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/firewallRules/{firewallRuleName}",
    apiVersion: "2025-08-01",
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
export const FirewallRulesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
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
  },
) as unknown as Schema.Codec<FirewallRulesGetOutput>;

// The operation
/**
 * Gets information about a firewall rule in a server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param firewallRuleName - Name of the firewall rule.
 */
export const FirewallRulesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FirewallRulesGetInput,
  outputSchema: FirewallRulesGetOutput,
}));
// Input Schema
export interface FirewallRulesListByServerInput {
  subscriptionId: string;
  resourceGroupName: string;
  serverName: string;
}
export const FirewallRulesListByServerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/firewallRules",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<FirewallRulesListByServerInput>;

// Output Schema
export interface FirewallRulesListByServerOutput {
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
export const FirewallRulesListByServerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<FirewallRulesListByServerOutput>;

// The operation
/**
 * Lists information about all firewall rules in a server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 */
export const FirewallRulesListByServer = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: FirewallRulesListByServerInput,
    outputSchema: FirewallRulesListByServerOutput,
  }),
);
// Input Schema
export interface MigrationsCancelInput {
  subscriptionId: string;
  resourceGroupName: string;
  serverName: string;
  migrationName: string;
}
export const MigrationsCancelInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serverName: Schema.String.pipe(T.PathParam()),
  migrationName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/migrations/{migrationName}",
    apiVersion: "2025-08-01",
  }),
) as unknown as Schema.Codec<MigrationsCancelInput>;

// Output Schema
export interface MigrationsCancelOutput {
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
export const MigrationsCancelOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
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
  },
) as unknown as Schema.Codec<MigrationsCancelOutput>;

// The operation
/**
 * Cancels an active migration.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param migrationName - Name of migration.
 */
export const MigrationsCancel = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: MigrationsCancelInput,
  outputSchema: MigrationsCancelOutput,
}));
// Input Schema
export interface MigrationsCheckNameAvailabilityInput {
  subscriptionId: string;
  resourceGroupName: string;
  serverName: string;
  name: string;
  type: string;
  nameAvailable?: boolean;
  reason?: "Invalid" | "AlreadyExists";
  message?: string;
}
export const MigrationsCheckNameAvailabilityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
    type: Schema.String,
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.Literals(["Invalid", "AlreadyExists"])),
    message: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/checkMigrationNameAvailability",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<MigrationsCheckNameAvailabilityInput>;

// Output Schema
export interface MigrationsCheckNameAvailabilityOutput {
  name: string;
  type: string;
  nameAvailable?: boolean;
  reason?: "Invalid" | "AlreadyExists";
  message?: string;
}
export const MigrationsCheckNameAvailabilityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String,
    type: Schema.String,
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.Literals(["Invalid", "AlreadyExists"])),
    message: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<MigrationsCheckNameAvailabilityOutput>;

// The operation
/**
 * Check the validity and availability of the given name, to assign it to a new migration.
 *
 * Checks if a proposed migration name is valid and available.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 */
export const MigrationsCheckNameAvailability =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MigrationsCheckNameAvailabilityInput,
    outputSchema: MigrationsCheckNameAvailabilityOutput,
  }));
// Input Schema
export interface MigrationsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  serverName: string;
  migrationName: string;
  properties?: {
    migrationId?: string;
    currentStatus?: {
      state?:
        | "InProgress"
        | "WaitingForUserAction"
        | "Canceled"
        | "Failed"
        | "Succeeded"
        | "ValidationFailed"
        | "CleaningUp";
      error?: string;
      currentSubStateDetails?: {
        currentSubState?:
          | "PerformingPreRequisiteSteps"
          | "WaitingForLogicalReplicationSetupRequestOnSourceDB"
          | "WaitingForDBsToMigrateSpecification"
          | "WaitingForTargetDBOverwriteConfirmation"
          | "WaitingForDataMigrationScheduling"
          | "WaitingForDataMigrationWindow"
          | "MigratingData"
          | "WaitingForCutoverTrigger"
          | "CompletingMigration"
          | "Completed"
          | "CancelingRequestedDBMigrations"
          | "ValidationInProgress";
        dbDetails?: Record<
          string,
          {
            databaseName?: string;
            migrationState?:
              | "InProgress"
              | "WaitingForCutoverTrigger"
              | "Failed"
              | "Canceled"
              | "Succeeded"
              | "Canceling";
            migrationOperation?: string;
            startedOn?: string;
            endedOn?: string;
            fullLoadQueuedTables?: number;
            fullLoadErroredTables?: number;
            fullLoadLoadingTables?: number;
            fullLoadCompletedTables?: number;
            cdcUpdateCounter?: number;
            cdcDeleteCounter?: number;
            cdcInsertCounter?: number;
            appliedChanges?: number;
            incomingChanges?: number;
            latency?: number;
            message?: string;
          }
        >;
        validationDetails?: {
          status?: "Failed" | "Succeeded" | "Warning";
          validationStartTimeInUtc?: string;
          validationEndTimeInUtc?: string;
          serverLevelValidationDetails?: {
            type?: string;
            state?: "Failed" | "Succeeded" | "Warning";
            messages?: {
              state?: "Failed" | "Succeeded" | "Warning";
              message?: string;
            }[];
          }[];
          dbLevelValidationDetails?: {
            databaseName?: string;
            startedOn?: string;
            endedOn?: string;
            summary?: {
              type?: string;
              state?: "Failed" | "Succeeded" | "Warning";
              messages?: {
                state?: "Failed" | "Succeeded" | "Warning";
                message?: string;
              }[];
            }[];
          }[];
        };
      };
    };
    migrationInstanceResourceId?: string;
    migrationMode?: "Offline" | "Online";
    migrationOption?: "Validate" | "Migrate" | "ValidateAndMigrate";
    sourceType?:
      | "OnPremises"
      | "AWS"
      | "GCP"
      | "AzureVM"
      | "PostgreSQLSingleServer"
      | "AWS_RDS"
      | "AWS_AURORA"
      | "AWS_EC2"
      | "GCP_CloudSQL"
      | "GCP_AlloyDB"
      | "GCP_Compute"
      | "EDB"
      | "EDB_Oracle_Server"
      | "EDB_PostgreSQL"
      | "PostgreSQLFlexibleServer"
      | "PostgreSQLCosmosDB"
      | "Huawei_RDS"
      | "Huawei_Compute"
      | "Heroku_PostgreSQL"
      | "Crunchy_PostgreSQL"
      | "ApsaraDB_RDS"
      | "Digital_Ocean_Droplets"
      | "Digital_Ocean_PostgreSQL"
      | "Supabase_PostgreSQL";
    sslMode?: "Prefer" | "Require" | "VerifyCA" | "VerifyFull";
    sourceDbServerMetadata?: {
      location?: string;
      version?: string;
      storageMb?: number;
      sku?: {
        name?: string;
        tier?: "Burstable" | "GeneralPurpose" | "MemoryOptimized";
      };
    };
    targetDbServerMetadata?: {
      location?: string;
      version?: string;
      storageMb?: number;
      sku?: {
        name?: string;
        tier?: "Burstable" | "GeneralPurpose" | "MemoryOptimized";
      };
    };
    sourceDbServerResourceId?: string;
    sourceDbServerFullyQualifiedDomainName?: string;
    targetDbServerResourceId?: string;
    targetDbServerFullyQualifiedDomainName?: string;
    secretParameters?: {
      adminCredentials: {
        sourceServerPassword: string | Redacted.Redacted<string>;
        targetServerPassword: string | Redacted.Redacted<string>;
      };
      sourceServerUsername?: string;
      targetServerUsername?: string;
    };
    dbsToMigrate?: string[];
    setupLogicalReplicationOnSourceDbIfNeeded?: "True" | "False";
    overwriteDbsInTarget?: "True" | "False";
    migrationWindowStartTimeInUtc?: string;
    migrationWindowEndTimeInUtc?: string;
    migrateRoles?: "True" | "False";
    startDataMigration?: "True" | "False";
    triggerCutover?: "True" | "False";
    dbsToTriggerCutoverOn?: string[];
    cancel?: "True" | "False";
    dbsToCancelMigrationOn?: string[];
  };
  tags?: Record<string, string>;
  location: string;
}
export const MigrationsCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serverName: Schema.String.pipe(T.PathParam()),
  migrationName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      migrationId: Schema.optional(Schema.String),
      currentStatus: Schema.optional(
        Schema.Struct({
          state: Schema.optional(
            Schema.Literals([
              "InProgress",
              "WaitingForUserAction",
              "Canceled",
              "Failed",
              "Succeeded",
              "ValidationFailed",
              "CleaningUp",
            ]),
          ),
          error: Schema.optional(Schema.String),
          currentSubStateDetails: Schema.optional(
            Schema.Struct({
              currentSubState: Schema.optional(
                Schema.Literals([
                  "PerformingPreRequisiteSteps",
                  "WaitingForLogicalReplicationSetupRequestOnSourceDB",
                  "WaitingForDBsToMigrateSpecification",
                  "WaitingForTargetDBOverwriteConfirmation",
                  "WaitingForDataMigrationScheduling",
                  "WaitingForDataMigrationWindow",
                  "MigratingData",
                  "WaitingForCutoverTrigger",
                  "CompletingMigration",
                  "Completed",
                  "CancelingRequestedDBMigrations",
                  "ValidationInProgress",
                ]),
              ),
              dbDetails: Schema.optional(
                Schema.Record(
                  Schema.String,
                  Schema.Struct({
                    databaseName: Schema.optional(Schema.String),
                    migrationState: Schema.optional(
                      Schema.Literals([
                        "InProgress",
                        "WaitingForCutoverTrigger",
                        "Failed",
                        "Canceled",
                        "Succeeded",
                        "Canceling",
                      ]),
                    ),
                    migrationOperation: Schema.optional(Schema.String),
                    startedOn: Schema.optional(Schema.String),
                    endedOn: Schema.optional(Schema.String),
                    fullLoadQueuedTables: Schema.optional(Schema.Number),
                    fullLoadErroredTables: Schema.optional(Schema.Number),
                    fullLoadLoadingTables: Schema.optional(Schema.Number),
                    fullLoadCompletedTables: Schema.optional(Schema.Number),
                    cdcUpdateCounter: Schema.optional(Schema.Number),
                    cdcDeleteCounter: Schema.optional(Schema.Number),
                    cdcInsertCounter: Schema.optional(Schema.Number),
                    appliedChanges: Schema.optional(Schema.Number),
                    incomingChanges: Schema.optional(Schema.Number),
                    latency: Schema.optional(Schema.Number),
                    message: Schema.optional(Schema.String),
                  }),
                ),
              ),
              validationDetails: Schema.optional(
                Schema.Struct({
                  status: Schema.optional(
                    Schema.Literals(["Failed", "Succeeded", "Warning"]),
                  ),
                  validationStartTimeInUtc: Schema.optional(Schema.String),
                  validationEndTimeInUtc: Schema.optional(Schema.String),
                  serverLevelValidationDetails: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        type: Schema.optional(Schema.String),
                        state: Schema.optional(
                          Schema.Literals(["Failed", "Succeeded", "Warning"]),
                        ),
                        messages: Schema.optional(
                          Schema.Array(
                            Schema.Struct({
                              state: Schema.optional(
                                Schema.Literals([
                                  "Failed",
                                  "Succeeded",
                                  "Warning",
                                ]),
                              ),
                              message: Schema.optional(Schema.String),
                            }),
                          ),
                        ),
                      }),
                    ),
                  ),
                  dbLevelValidationDetails: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        databaseName: Schema.optional(Schema.String),
                        startedOn: Schema.optional(Schema.String),
                        endedOn: Schema.optional(Schema.String),
                        summary: Schema.optional(
                          Schema.Array(
                            Schema.Struct({
                              type: Schema.optional(Schema.String),
                              state: Schema.optional(
                                Schema.Literals([
                                  "Failed",
                                  "Succeeded",
                                  "Warning",
                                ]),
                              ),
                              messages: Schema.optional(
                                Schema.Array(
                                  Schema.Struct({
                                    state: Schema.optional(
                                      Schema.Literals([
                                        "Failed",
                                        "Succeeded",
                                        "Warning",
                                      ]),
                                    ),
                                    message: Schema.optional(Schema.String),
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
        }),
      ),
      migrationInstanceResourceId: Schema.optional(Schema.String),
      migrationMode: Schema.optional(Schema.Literals(["Offline", "Online"])),
      migrationOption: Schema.optional(
        Schema.Literals(["Validate", "Migrate", "ValidateAndMigrate"]),
      ),
      sourceType: Schema.optional(
        Schema.Literals([
          "OnPremises",
          "AWS",
          "GCP",
          "AzureVM",
          "PostgreSQLSingleServer",
          "AWS_RDS",
          "AWS_AURORA",
          "AWS_EC2",
          "GCP_CloudSQL",
          "GCP_AlloyDB",
          "GCP_Compute",
          "EDB",
          "EDB_Oracle_Server",
          "EDB_PostgreSQL",
          "PostgreSQLFlexibleServer",
          "PostgreSQLCosmosDB",
          "Huawei_RDS",
          "Huawei_Compute",
          "Heroku_PostgreSQL",
          "Crunchy_PostgreSQL",
          "ApsaraDB_RDS",
          "Digital_Ocean_Droplets",
          "Digital_Ocean_PostgreSQL",
          "Supabase_PostgreSQL",
        ]),
      ),
      sslMode: Schema.optional(
        Schema.Literals(["Prefer", "Require", "VerifyCA", "VerifyFull"]),
      ),
      sourceDbServerMetadata: Schema.optional(
        Schema.Struct({
          location: Schema.optional(Schema.String),
          version: Schema.optional(Schema.String),
          storageMb: Schema.optional(Schema.Number),
          sku: Schema.optional(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              tier: Schema.optional(
                Schema.Literals([
                  "Burstable",
                  "GeneralPurpose",
                  "MemoryOptimized",
                ]),
              ),
            }),
          ),
        }),
      ),
      targetDbServerMetadata: Schema.optional(
        Schema.Struct({
          location: Schema.optional(Schema.String),
          version: Schema.optional(Schema.String),
          storageMb: Schema.optional(Schema.Number),
          sku: Schema.optional(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              tier: Schema.optional(
                Schema.Literals([
                  "Burstable",
                  "GeneralPurpose",
                  "MemoryOptimized",
                ]),
              ),
            }),
          ),
        }),
      ),
      sourceDbServerResourceId: Schema.optional(Schema.String),
      sourceDbServerFullyQualifiedDomainName: Schema.optional(Schema.String),
      targetDbServerResourceId: Schema.optional(Schema.String),
      targetDbServerFullyQualifiedDomainName: Schema.optional(Schema.String),
      secretParameters: Schema.optional(
        Schema.Struct({
          adminCredentials: Schema.Struct({
            sourceServerPassword: SensitiveString,
            targetServerPassword: SensitiveString,
          }),
          sourceServerUsername: Schema.optional(Schema.String),
          targetServerUsername: Schema.optional(Schema.String),
        }),
      ),
      dbsToMigrate: Schema.optional(Schema.Array(Schema.String)),
      setupLogicalReplicationOnSourceDbIfNeeded: Schema.optional(
        Schema.Literals(["True", "False"]),
      ),
      overwriteDbsInTarget: Schema.optional(Schema.Literals(["True", "False"])),
      migrationWindowStartTimeInUtc: Schema.optional(Schema.String),
      migrationWindowEndTimeInUtc: Schema.optional(Schema.String),
      migrateRoles: Schema.optional(Schema.Literals(["True", "False"])),
      startDataMigration: Schema.optional(Schema.Literals(["True", "False"])),
      triggerCutover: Schema.optional(Schema.Literals(["True", "False"])),
      dbsToTriggerCutoverOn: Schema.optional(Schema.Array(Schema.String)),
      cancel: Schema.optional(Schema.Literals(["True", "False"])),
      dbsToCancelMigrationOn: Schema.optional(Schema.Array(Schema.String)),
    }),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.String,
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/migrations/{migrationName}",
    apiVersion: "2025-08-01",
  }),
) as unknown as Schema.Codec<MigrationsCreateInput>;

// Output Schema
export interface MigrationsCreateOutput {
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
export const MigrationsCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
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
  },
) as unknown as Schema.Codec<MigrationsCreateOutput>;

// The operation
/**
 * Creates a new migration.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param migrationName - Name of migration.
 */
export const MigrationsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: MigrationsCreateInput,
  outputSchema: MigrationsCreateOutput,
}));
// Input Schema
export interface MigrationsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  serverName: string;
  migrationName: string;
}
export const MigrationsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serverName: Schema.String.pipe(T.PathParam()),
  migrationName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/migrations/{migrationName}",
    apiVersion: "2025-08-01",
  }),
) as unknown as Schema.Codec<MigrationsGetInput>;

// Output Schema
export interface MigrationsGetOutput {
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
export const MigrationsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<MigrationsGetOutput>;

// The operation
/**
 * Gets information about a migration.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param migrationName - Name of migration.
 */
export const MigrationsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: MigrationsGetInput,
  outputSchema: MigrationsGetOutput,
}));
// Input Schema
export interface MigrationsListByTargetServerInput {
  subscriptionId: string;
  resourceGroupName: string;
  serverName: string;
  migrationListFilter?: "Active" | "All";
}
export const MigrationsListByTargetServerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
    migrationListFilter: Schema.optional(Schema.Literals(["Active", "All"])),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/migrations",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<MigrationsListByTargetServerInput>;

// Output Schema
export interface MigrationsListByTargetServerOutput {
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
export const MigrationsListByTargetServerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<MigrationsListByTargetServerOutput>;

// The operation
/**
 * Lists all migrations of a target flexible server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param migrationListFilter - Migration list filter. Indicates if the request should retrieve only active migrations or all migrations. Defaults to Active.
 */
export const MigrationsListByTargetServer =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MigrationsListByTargetServerInput,
    outputSchema: MigrationsListByTargetServerOutput,
  }));
// Input Schema
export interface MigrationsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  serverName: string;
  migrationName: string;
  properties?: {
    sourceDbServerResourceId?: string;
    sourceDbServerFullyQualifiedDomainName?: string;
    targetDbServerFullyQualifiedDomainName?: string;
    secretParameters?: {
      adminCredentials?: {
        sourceServerPassword?: string | Redacted.Redacted<string>;
        targetServerPassword?: string | Redacted.Redacted<string>;
      };
      sourceServerUsername?: string;
      targetServerUsername?: string;
    };
    dbsToMigrate?: string[];
    setupLogicalReplicationOnSourceDbIfNeeded?: "True" | "False";
    overwriteDbsInTarget?: "True" | "False";
    migrationWindowStartTimeInUtc?: string;
    migrateRoles?: "True" | "False";
    startDataMigration?: "True" | "False";
    triggerCutover?: "True" | "False";
    dbsToTriggerCutoverOn?: string[];
    cancel?: "True" | "False";
    dbsToCancelMigrationOn?: string[];
    migrationMode?: "Offline" | "Online";
  };
  tags?: Record<string, string>;
}
export const MigrationsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serverName: Schema.String.pipe(T.PathParam()),
  migrationName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      sourceDbServerResourceId: Schema.optional(Schema.String),
      sourceDbServerFullyQualifiedDomainName: Schema.optional(Schema.String),
      targetDbServerFullyQualifiedDomainName: Schema.optional(Schema.String),
      secretParameters: Schema.optional(
        Schema.Struct({
          adminCredentials: Schema.optional(
            Schema.Struct({
              sourceServerPassword: Schema.optional(SensitiveString),
              targetServerPassword: Schema.optional(SensitiveString),
            }),
          ),
          sourceServerUsername: Schema.optional(Schema.String),
          targetServerUsername: Schema.optional(Schema.String),
        }),
      ),
      dbsToMigrate: Schema.optional(Schema.Array(Schema.String)),
      setupLogicalReplicationOnSourceDbIfNeeded: Schema.optional(
        Schema.Literals(["True", "False"]),
      ),
      overwriteDbsInTarget: Schema.optional(Schema.Literals(["True", "False"])),
      migrationWindowStartTimeInUtc: Schema.optional(Schema.String),
      migrateRoles: Schema.optional(Schema.Literals(["True", "False"])),
      startDataMigration: Schema.optional(Schema.Literals(["True", "False"])),
      triggerCutover: Schema.optional(Schema.Literals(["True", "False"])),
      dbsToTriggerCutoverOn: Schema.optional(Schema.Array(Schema.String)),
      cancel: Schema.optional(Schema.Literals(["True", "False"])),
      dbsToCancelMigrationOn: Schema.optional(Schema.Array(Schema.String)),
      migrationMode: Schema.optional(Schema.Literals(["Offline", "Online"])),
    }),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/migrations/{migrationName}",
    apiVersion: "2025-08-01",
  }),
) as unknown as Schema.Codec<MigrationsUpdateInput>;

// Output Schema
export interface MigrationsUpdateOutput {
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
export const MigrationsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
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
  },
) as unknown as Schema.Codec<MigrationsUpdateOutput>;

// The operation
/**
 * Updates an existing migration. The request body can contain one to many of the mutable properties present in the migration definition. Certain property updates initiate migration state transitions.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param migrationName - Name of migration.
 */
export const MigrationsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: MigrationsUpdateInput,
  outputSchema: MigrationsUpdateOutput,
}));
// Input Schema
export interface NameAvailabilityCheckGloballyInput {
  subscriptionId: string;
  name?: string;
  type?: string;
}
export const NameAvailabilityCheckGloballyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DBforPostgreSQL/checkNameAvailability",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<NameAvailabilityCheckGloballyInput>;

// Output Schema
export interface NameAvailabilityCheckGloballyOutput {
  nameAvailable?: boolean;
  reason?: "Invalid" | "AlreadyExists";
  message?: string;
}
export const NameAvailabilityCheckGloballyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.Literals(["Invalid", "AlreadyExists"])),
    message: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<NameAvailabilityCheckGloballyOutput>;

// The operation
/**
 * Checks the validity and availability of the given name, to assign it to a new server or to use it as the base name of a new pair of virtual endpoints.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param name - The name of the resource for which availability needs to be checked.
 * @param type - The resource type.
 */
export const NameAvailabilityCheckGlobally =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NameAvailabilityCheckGloballyInput,
    outputSchema: NameAvailabilityCheckGloballyOutput,
  }));
// Input Schema
export interface NameAvailabilityCheckWithLocationInput {
  subscriptionId: string;
  locationName: string;
  name?: string;
  type?: string;
}
export const NameAvailabilityCheckWithLocationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    locationName: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DBforPostgreSQL/locations/{locationName}/checkNameAvailability",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<NameAvailabilityCheckWithLocationInput>;

// Output Schema
export interface NameAvailabilityCheckWithLocationOutput {
  nameAvailable?: boolean;
  reason?: "Invalid" | "AlreadyExists";
  message?: string;
}
export const NameAvailabilityCheckWithLocationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.Literals(["Invalid", "AlreadyExists"])),
    message: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<NameAvailabilityCheckWithLocationOutput>;

// The operation
/**
 * Check the availability of name for resource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param locationName - The name of the location.
 * @param name - The name of the resource for which availability needs to be checked.
 * @param type - The resource type.
 */
export const NameAvailabilityCheckWithLocation =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NameAvailabilityCheckWithLocationInput,
    outputSchema: NameAvailabilityCheckWithLocationOutput,
  }));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.DBforPostgreSQL/operations",
    apiVersion: "2025-08-01",
  }),
) as unknown as Schema.Codec<OperationsListInput>;

// Output Schema
export interface OperationsListOutput {
  value: {
    name?: string;
    display?: {
      provider?: string;
      resource?: string;
      operation?: string;
      description?: string;
    };
    isDataAction?: boolean;
    origin?: "NotSpecified" | "user" | "system";
    properties?: {
      serviceSpecification?: {
        metricSpecifications?: {
          name?: string;
          displayName?: string;
          displayDescription?: string;
          unit?: string;
          aggregationType?: string;
          supportedAggregationTypes?: string[];
          supportedTimeGrainTypes?: string[];
          category?: string;
        }[];
        logSpecifications?: {
          name?: string;
          displayName?: string;
          blobDuration?: string;
        }[];
      };
    };
  }[];
  nextLink?: string;
}
export const OperationsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.Array(
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
      isDataAction: Schema.optional(Schema.Boolean),
      origin: Schema.optional(
        Schema.Literals(["NotSpecified", "user", "system"]),
      ),
      properties: Schema.optional(
        Schema.Struct({
          serviceSpecification: Schema.optional(
            Schema.Struct({
              metricSpecifications: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    displayName: Schema.optional(Schema.String),
                    displayDescription: Schema.optional(Schema.String),
                    unit: Schema.optional(Schema.String),
                    aggregationType: Schema.optional(Schema.String),
                    supportedAggregationTypes: Schema.optional(
                      Schema.Array(Schema.String),
                    ),
                    supportedTimeGrainTypes: Schema.optional(
                      Schema.Array(Schema.String),
                    ),
                    category: Schema.optional(Schema.String),
                  }),
                ),
              ),
              logSpecifications: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    displayName: Schema.optional(Schema.String),
                    blobDuration: Schema.optional(Schema.String),
                  }),
                ),
              ),
            }),
          ),
        }),
      ),
    }),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<OperationsListOutput>;

// The operation
/**
 * Lists all available REST API operations.
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface PrivateDnsZoneSuffixGetInput {}
export const PrivateDnsZoneSuffixGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.DBforPostgreSQL/getPrivateDnsZoneSuffix",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<PrivateDnsZoneSuffixGetInput>;

// Output Schema
export type PrivateDnsZoneSuffixGetOutput = string;
export const PrivateDnsZoneSuffixGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.String as unknown as Schema.Codec<PrivateDnsZoneSuffixGetOutput>;

// The operation
/**
 * Gets the private DNS zone suffix.
 *
 * @param api-version - The API version to use for this operation.
 */
export const PrivateDnsZoneSuffixGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PrivateDnsZoneSuffixGetInput,
    outputSchema: PrivateDnsZoneSuffixGetOutput,
  }),
);
// Input Schema
export interface PrivateEndpointConnectionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  serverName: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsDeleteInput>;

// Output Schema
export type PrivateEndpointConnectionsDeleteOutput = void;
export const PrivateEndpointConnectionsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<PrivateEndpointConnectionsDeleteOutput>;

// The operation
/**
 * Deletes a private endpoint connection.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource.
 */
export const PrivateEndpointConnectionsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsDeleteInput,
    outputSchema: PrivateEndpointConnectionsDeleteOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  serverName: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2025-08-01",
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
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsGetOutput>;

// The operation
/**
 * Gets a private endpoint connection.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource.
 */
export const PrivateEndpointConnectionsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsGetInput,
    outputSchema: PrivateEndpointConnectionsGetOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsListByServerInput {
  subscriptionId: string;
  resourceGroupName: string;
  serverName: string;
}
export const PrivateEndpointConnectionsListByServerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/privateEndpointConnections",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsListByServerInput>;

// Output Schema
export interface PrivateEndpointConnectionsListByServerOutput {
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
export const PrivateEndpointConnectionsListByServerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsListByServerOutput>;

// The operation
/**
 * Lists all private endpoint connections on a server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 */
export const PrivateEndpointConnectionsListByServer =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsListByServerInput,
    outputSchema: PrivateEndpointConnectionsListByServerOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  serverName: string;
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
export const PrivateEndpointConnectionsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsUpdateInput>;

// Output Schema
export type PrivateEndpointConnectionsUpdateOutput = void;
export const PrivateEndpointConnectionsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<PrivateEndpointConnectionsUpdateOutput>;

// The operation
/**
 * Approves or rejects a private endpoint connection.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource.
 * @param properties - Resource properties.
 */
export const PrivateEndpointConnectionsUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsUpdateInput,
    outputSchema: PrivateEndpointConnectionsUpdateOutput,
  }));
// Input Schema
export interface PrivateLinkResourcesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  serverName: string;
  groupName: string;
}
export const PrivateLinkResourcesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/privateLinkResources/{groupName}",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<PrivateLinkResourcesGetInput>;

// Output Schema
export interface PrivateLinkResourcesGetOutput {
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
export const PrivateLinkResourcesGetOutput =
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
  }) as unknown as Schema.Codec<PrivateLinkResourcesGetOutput>;

// The operation
/**
 * Gets a private link resource for PostgreSQL server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param groupName - The name of the private link resource.
 */
export const PrivateLinkResourcesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PrivateLinkResourcesGetInput,
    outputSchema: PrivateLinkResourcesGetOutput,
  }),
);
// Input Schema
export interface PrivateLinkResourcesListByServerInput {
  subscriptionId: string;
  resourceGroupName: string;
  serverName: string;
}
export const PrivateLinkResourcesListByServerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/privateLinkResources",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<PrivateLinkResourcesListByServerInput>;

// Output Schema
export interface PrivateLinkResourcesListByServerOutput {
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
export const PrivateLinkResourcesListByServerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<PrivateLinkResourcesListByServerOutput>;

// The operation
/**
 * Gets the private link resources for PostgreSQL server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 */
export const PrivateLinkResourcesListByServer =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkResourcesListByServerInput,
    outputSchema: PrivateLinkResourcesListByServerOutput,
  }));
// Input Schema
export interface QuotaUsagesListInput {
  subscriptionId: string;
  locationName: string;
}
export const QuotaUsagesListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  locationName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.DBforPostgreSQL/locations/{locationName}/resourceType/flexibleServers/usages",
    apiVersion: "2025-08-01",
  }),
) as unknown as Schema.Codec<QuotaUsagesListInput>;

// Output Schema
export interface QuotaUsagesListOutput {
  value: {
    name?: { value?: string; localizedValue?: string };
    limit?: number;
    unit?: string;
    currentValue?: number;
    id?: string;
  }[];
  nextLink?: string;
}
export const QuotaUsagesListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.Array(
    Schema.Struct({
      name: Schema.optional(
        Schema.Struct({
          value: Schema.optional(Schema.String),
          localizedValue: Schema.optional(Schema.String),
        }),
      ),
      limit: Schema.optional(Schema.Number),
      unit: Schema.optional(Schema.String),
      currentValue: Schema.optional(Schema.Number),
      id: Schema.optional(Schema.String),
    }),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<QuotaUsagesListOutput>;

// The operation
/**
 * Get quota usages at specified location in a given subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param locationName - The name of the location.
 */
export const QuotaUsagesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: QuotaUsagesListInput,
  outputSchema: QuotaUsagesListOutput,
}));
// Input Schema
export interface ReplicasListByServerInput {
  subscriptionId: string;
  resourceGroupName: string;
  serverName: string;
}
export const ReplicasListByServerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/replicas",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<ReplicasListByServerInput>;

// Output Schema
export interface ReplicasListByServerOutput {
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
export const ReplicasListByServerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<ReplicasListByServerOutput>;

// The operation
/**
 * Lists all read replicas of a server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 */
export const ReplicasListByServer = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ReplicasListByServerInput,
    outputSchema: ReplicasListByServerOutput,
  }),
);
// Input Schema
export interface ServersCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  serverName: string;
  properties?: {
    administratorLogin?: string;
    administratorLoginPassword?: string | Redacted.Redacted<string>;
    version?: "18" | "17" | "16" | "15" | "14" | "13" | "12" | "11";
    minorVersion?: string;
    state?:
      | "Ready"
      | "Dropping"
      | "Disabled"
      | "Starting"
      | "Stopping"
      | "Stopped"
      | "Updating"
      | "Restarting"
      | "Inaccessible"
      | "Provisioning";
    fullyQualifiedDomainName?: string;
    storage?: {
      storageSizeGB?: number;
      autoGrow?: "Enabled" | "Disabled";
      tier?:
        | "P1"
        | "P2"
        | "P3"
        | "P4"
        | "P6"
        | "P10"
        | "P15"
        | "P20"
        | "P30"
        | "P40"
        | "P50"
        | "P60"
        | "P70"
        | "P80";
      iops?: number;
      throughput?: number;
      type?: "Premium_LRS" | "PremiumV2_LRS" | "UltraSSD_LRS";
    };
    authConfig?: {
      activeDirectoryAuth?: "Enabled" | "Disabled";
      passwordAuth?: "Enabled" | "Disabled";
      tenantId?: string;
    };
    dataEncryption?: {
      primaryKeyURI?: string;
      primaryUserAssignedIdentityId?: string;
      geoBackupKeyURI?: string;
      geoBackupUserAssignedIdentityId?: string;
      type?: "SystemManaged" | "AzureKeyVault";
      primaryEncryptionKeyStatus?: "Valid" | "Invalid";
      geoBackupEncryptionKeyStatus?: "Valid" | "Invalid";
    };
    backup?: {
      backupRetentionDays?: number;
      geoRedundantBackup?: "Enabled" | "Disabled";
      earliestRestoreDate?: string;
    };
    network?: {
      publicNetworkAccess?: "Enabled" | "Disabled";
      delegatedSubnetResourceId?: string;
      privateDnsZoneArmResourceId?: string;
    };
    highAvailability?: {
      mode?: "Disabled" | "ZoneRedundant" | "SameZone";
      state?:
        | "NotEnabled"
        | "CreatingStandby"
        | "ReplicatingData"
        | "FailingOver"
        | "Healthy"
        | "RemovingStandby"
        | "RecreatingStandby"
        | "ComputeUpdatingByFailover";
      standbyAvailabilityZone?: string;
    };
    maintenanceWindow?: {
      customWindow?: string;
      startHour?: number;
      startMinute?: number;
      dayOfWeek?: number;
    };
    sourceServerResourceId?: string;
    pointInTimeUTC?: string;
    availabilityZone?: string;
    replicationRole?: "None" | "Primary" | "AsyncReplica" | "GeoAsyncReplica";
    replicaCapacity?: number;
    replica?: {
      role?: "None" | "Primary" | "AsyncReplica" | "GeoAsyncReplica";
      capacity?: number;
      replicationState?:
        | "Active"
        | "Catchup"
        | "Provisioning"
        | "Updating"
        | "Broken"
        | "Reconfiguring";
      promoteMode?: "Standalone" | "Switchover";
      promoteOption?: "Planned" | "Forced";
    };
    createMode?:
      | "Default"
      | "Create"
      | "Update"
      | "PointInTimeRestore"
      | "GeoRestore"
      | "Replica"
      | "ReviveDropped";
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
    cluster?: { clusterSize?: number; defaultDatabaseName?: string };
  };
  sku?: {
    name: string;
    tier: "Burstable" | "GeneralPurpose" | "MemoryOptimized";
  };
  identity?: {
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
    principalId?: string;
    type:
      | "None"
      | "UserAssigned"
      | "SystemAssigned"
      | "SystemAssigned,UserAssigned";
    tenantId?: string;
  };
  tags?: Record<string, string>;
  location: string;
}
export const ServersCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        administratorLogin: Schema.optional(Schema.String),
        administratorLoginPassword: Schema.optional(SensitiveString),
        version: Schema.optional(
          Schema.Literals(["18", "17", "16", "15", "14", "13", "12", "11"]),
        ),
        minorVersion: Schema.optional(Schema.String),
        state: Schema.optional(
          Schema.Literals([
            "Ready",
            "Dropping",
            "Disabled",
            "Starting",
            "Stopping",
            "Stopped",
            "Updating",
            "Restarting",
            "Inaccessible",
            "Provisioning",
          ]),
        ),
        fullyQualifiedDomainName: Schema.optional(Schema.String),
        storage: Schema.optional(
          Schema.Struct({
            storageSizeGB: Schema.optional(Schema.Number),
            autoGrow: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
            tier: Schema.optional(
              Schema.Literals([
                "P1",
                "P2",
                "P3",
                "P4",
                "P6",
                "P10",
                "P15",
                "P20",
                "P30",
                "P40",
                "P50",
                "P60",
                "P70",
                "P80",
              ]),
            ),
            iops: Schema.optional(Schema.Number),
            throughput: Schema.optional(Schema.Number),
            type: Schema.optional(
              Schema.Literals(["Premium_LRS", "PremiumV2_LRS", "UltraSSD_LRS"]),
            ),
          }),
        ),
        authConfig: Schema.optional(
          Schema.Struct({
            activeDirectoryAuth: Schema.optional(
              Schema.Literals(["Enabled", "Disabled"]),
            ),
            passwordAuth: Schema.optional(
              Schema.Literals(["Enabled", "Disabled"]),
            ),
            tenantId: Schema.optional(Schema.String),
          }),
        ),
        dataEncryption: Schema.optional(
          Schema.Struct({
            primaryKeyURI: Schema.optional(Schema.String),
            primaryUserAssignedIdentityId: Schema.optional(Schema.String),
            geoBackupKeyURI: Schema.optional(Schema.String),
            geoBackupUserAssignedIdentityId: Schema.optional(Schema.String),
            type: Schema.optional(
              Schema.Literals(["SystemManaged", "AzureKeyVault"]),
            ),
            primaryEncryptionKeyStatus: Schema.optional(
              Schema.Literals(["Valid", "Invalid"]),
            ),
            geoBackupEncryptionKeyStatus: Schema.optional(
              Schema.Literals(["Valid", "Invalid"]),
            ),
          }),
        ),
        backup: Schema.optional(
          Schema.Struct({
            backupRetentionDays: Schema.optional(Schema.Number),
            geoRedundantBackup: Schema.optional(
              Schema.Literals(["Enabled", "Disabled"]),
            ),
            earliestRestoreDate: Schema.optional(Schema.String),
          }),
        ),
        network: Schema.optional(
          Schema.Struct({
            publicNetworkAccess: Schema.optional(
              Schema.Literals(["Enabled", "Disabled"]),
            ),
            delegatedSubnetResourceId: Schema.optional(Schema.String),
            privateDnsZoneArmResourceId: Schema.optional(Schema.String),
          }),
        ),
        highAvailability: Schema.optional(
          Schema.Struct({
            mode: Schema.optional(
              Schema.Literals(["Disabled", "ZoneRedundant", "SameZone"]),
            ),
            state: Schema.optional(
              Schema.Literals([
                "NotEnabled",
                "CreatingStandby",
                "ReplicatingData",
                "FailingOver",
                "Healthy",
                "RemovingStandby",
                "RecreatingStandby",
                "ComputeUpdatingByFailover",
              ]),
            ),
            standbyAvailabilityZone: Schema.optional(Schema.String),
          }),
        ),
        maintenanceWindow: Schema.optional(
          Schema.Struct({
            customWindow: Schema.optional(Schema.String),
            startHour: Schema.optional(Schema.Number),
            startMinute: Schema.optional(Schema.Number),
            dayOfWeek: Schema.optional(Schema.Number),
          }),
        ),
        sourceServerResourceId: Schema.optional(Schema.String),
        pointInTimeUTC: Schema.optional(Schema.String),
        availabilityZone: Schema.optional(Schema.String),
        replicationRole: Schema.optional(
          Schema.Literals([
            "None",
            "Primary",
            "AsyncReplica",
            "GeoAsyncReplica",
          ]),
        ),
        replicaCapacity: Schema.optional(Schema.Number),
        replica: Schema.optional(
          Schema.Struct({
            role: Schema.optional(
              Schema.Literals([
                "None",
                "Primary",
                "AsyncReplica",
                "GeoAsyncReplica",
              ]),
            ),
            capacity: Schema.optional(Schema.Number),
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
            promoteMode: Schema.optional(
              Schema.Literals(["Standalone", "Switchover"]),
            ),
            promoteOption: Schema.optional(
              Schema.Literals(["Planned", "Forced"]),
            ),
          }),
        ),
        createMode: Schema.optional(
          Schema.Literals([
            "Default",
            "Create",
            "Update",
            "PointInTimeRestore",
            "GeoRestore",
            "Replica",
            "ReviveDropped",
          ]),
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
        cluster: Schema.optional(
          Schema.Struct({
            clusterSize: Schema.optional(Schema.Number),
            defaultDatabaseName: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        tier: Schema.Literals([
          "Burstable",
          "GeneralPurpose",
          "MemoryOptimized",
        ]),
      }),
    ),
    identity: Schema.optional(
      Schema.Struct({
        userAssignedIdentities: Schema.optional(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              principalId: Schema.optional(Schema.String),
              clientId: Schema.optional(Schema.String),
            }),
          ),
        ),
        principalId: Schema.optional(Schema.String),
        type: Schema.Literals([
          "None",
          "UserAssigned",
          "SystemAssigned",
          "SystemAssigned,UserAssigned",
        ]),
        tenantId: Schema.optional(Schema.String),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<ServersCreateOrUpdateInput>;

// Output Schema
export type ServersCreateOrUpdateOutput = void;
export const ServersCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ServersCreateOrUpdateOutput>;

// The operation
/**
 * Creates a new server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 */
export const ServersCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ServersCreateOrUpdateInput,
    outputSchema: ServersCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface ServersDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  serverName: string;
}
export const ServersDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serverName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}",
    apiVersion: "2025-08-01",
  }),
) as unknown as Schema.Codec<ServersDeleteInput>;

// Output Schema
export type ServersDeleteOutput = void;
export const ServersDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ServersDeleteOutput>;

// The operation
/**
 * Deletes or drops an existing server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 */
export const ServersDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ServersDeleteInput,
  outputSchema: ServersDeleteOutput,
}));
// Input Schema
export interface ServersGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  serverName: string;
}
export const ServersGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serverName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}",
    apiVersion: "2025-08-01",
  }),
) as unknown as Schema.Codec<ServersGetInput>;

// Output Schema
export interface ServersGetOutput {
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
export const ServersGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ServersGetOutput>;

// The operation
/**
 * Gets information about an existing server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 */
export const ServersGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ServersGetInput,
  outputSchema: ServersGetOutput,
}));
// Input Schema
export interface ServersListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const ServersListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<ServersListByResourceGroupInput>;

// Output Schema
export interface ServersListByResourceGroupOutput {
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
export const ServersListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<ServersListByResourceGroupOutput>;

// The operation
/**
 * Lists all servers in a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ServersListByResourceGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ServersListByResourceGroupInput,
    outputSchema: ServersListByResourceGroupOutput,
  }),
);
// Input Schema
export interface ServersListBySubscriptionInput {
  subscriptionId: string;
}
export const ServersListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DBforPostgreSQL/flexibleServers",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<ServersListBySubscriptionInput>;

// Output Schema
export interface ServersListBySubscriptionOutput {
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
export const ServersListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<ServersListBySubscriptionOutput>;

// The operation
/**
 * Lists all servers in a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const ServersListBySubscription = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ServersListBySubscriptionInput,
    outputSchema: ServersListBySubscriptionOutput,
  }),
);
// Input Schema
export interface ServersRestartInput {
  subscriptionId: string;
  resourceGroupName: string;
  serverName: string;
  restartWithFailover?: boolean;
  failoverMode?:
    | "PlannedFailover"
    | "ForcedFailover"
    | "PlannedSwitchover"
    | "ForcedSwitchover";
}
export const ServersRestartInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serverName: Schema.String.pipe(T.PathParam()),
  restartWithFailover: Schema.optional(Schema.Boolean),
  failoverMode: Schema.optional(
    Schema.Literals([
      "PlannedFailover",
      "ForcedFailover",
      "PlannedSwitchover",
      "ForcedSwitchover",
    ]),
  ),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/restart",
    apiVersion: "2025-08-01",
  }),
) as unknown as Schema.Codec<ServersRestartInput>;

// Output Schema
export type ServersRestartOutput = void;
export const ServersRestartOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ServersRestartOutput>;

// The operation
/**
 * Restarts PostgreSQL database engine in a server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 */
export const ServersRestart = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ServersRestartInput,
  outputSchema: ServersRestartOutput,
}));
// Input Schema
export interface ServersStartInput {
  subscriptionId: string;
  resourceGroupName: string;
  serverName: string;
}
export const ServersStartInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serverName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/start",
    apiVersion: "2025-08-01",
  }),
) as unknown as Schema.Codec<ServersStartInput>;

// Output Schema
export type ServersStartOutput = void;
export const ServersStartOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ServersStartOutput>;

// The operation
/**
 * Starts a stopped server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 */
export const ServersStart = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ServersStartInput,
  outputSchema: ServersStartOutput,
}));
// Input Schema
export interface ServersStopInput {
  subscriptionId: string;
  resourceGroupName: string;
  serverName: string;
}
export const ServersStopInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serverName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/stop",
    apiVersion: "2025-08-01",
  }),
) as unknown as Schema.Codec<ServersStopInput>;

// Output Schema
export type ServersStopOutput = void;
export const ServersStopOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ServersStopOutput>;

// The operation
/**
 * Stops a server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 */
export const ServersStop = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ServersStopInput,
  outputSchema: ServersStopOutput,
}));
// Input Schema
export interface ServersUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  serverName: string;
  sku?: {
    name?: string;
    tier?: "Burstable" | "GeneralPurpose" | "MemoryOptimized";
  };
  identity?: {
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
    principalId?: string;
    type:
      | "None"
      | "UserAssigned"
      | "SystemAssigned"
      | "SystemAssigned,UserAssigned";
    tenantId?: string;
  };
  properties?: {
    administratorLogin?: string;
    administratorLoginPassword?: string | Redacted.Redacted<string>;
    version?: "18" | "17" | "16" | "15" | "14" | "13" | "12" | "11";
    storage?: {
      storageSizeGB?: number;
      autoGrow?: "Enabled" | "Disabled";
      tier?:
        | "P1"
        | "P2"
        | "P3"
        | "P4"
        | "P6"
        | "P10"
        | "P15"
        | "P20"
        | "P30"
        | "P40"
        | "P50"
        | "P60"
        | "P70"
        | "P80";
      iops?: number;
      throughput?: number;
      type?: "Premium_LRS" | "PremiumV2_LRS" | "UltraSSD_LRS";
    };
    backup?: {
      backupRetentionDays?: number;
      geoRedundantBackup?: "Enabled" | "Disabled";
      earliestRestoreDate?: string;
    };
    highAvailability?: {
      mode?: "Disabled" | "ZoneRedundant" | "SameZone";
      state?:
        | "NotEnabled"
        | "CreatingStandby"
        | "ReplicatingData"
        | "FailingOver"
        | "Healthy"
        | "RemovingStandby"
        | "RecreatingStandby"
        | "ComputeUpdatingByFailover";
      standbyAvailabilityZone?: string;
    };
    maintenanceWindow?: {
      customWindow?: string;
      startHour?: number;
      startMinute?: number;
      dayOfWeek?: number;
    };
    authConfig?: {
      activeDirectoryAuth?: "Enabled" | "Disabled";
      passwordAuth?: "Enabled" | "Disabled";
      tenantId?: string;
    };
    dataEncryption?: {
      primaryKeyURI?: string;
      primaryUserAssignedIdentityId?: string;
      geoBackupKeyURI?: string;
      geoBackupUserAssignedIdentityId?: string;
      type?: "SystemManaged" | "AzureKeyVault";
      primaryEncryptionKeyStatus?: "Valid" | "Invalid";
      geoBackupEncryptionKeyStatus?: "Valid" | "Invalid";
    };
    availabilityZone?: string;
    createMode?: "Default" | "Update";
    replicationRole?: "None" | "Primary" | "AsyncReplica" | "GeoAsyncReplica";
    replica?: {
      role?: "None" | "Primary" | "AsyncReplica" | "GeoAsyncReplica";
      capacity?: number;
      replicationState?:
        | "Active"
        | "Catchup"
        | "Provisioning"
        | "Updating"
        | "Broken"
        | "Reconfiguring";
      promoteMode?: "Standalone" | "Switchover";
      promoteOption?: "Planned" | "Forced";
    };
    network?: {
      publicNetworkAccess?: "Enabled" | "Disabled";
      delegatedSubnetResourceId?: string;
      privateDnsZoneArmResourceId?: string;
    };
    cluster?: { clusterSize?: number; defaultDatabaseName?: string };
  };
  tags?: Record<string, string>;
}
export const ServersUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serverName: Schema.String.pipe(T.PathParam()),
  sku: Schema.optional(
    Schema.Struct({
      name: Schema.optional(Schema.String),
      tier: Schema.optional(
        Schema.Literals(["Burstable", "GeneralPurpose", "MemoryOptimized"]),
      ),
    }),
  ),
  identity: Schema.optional(
    Schema.Struct({
      userAssignedIdentities: Schema.optional(
        Schema.Record(
          Schema.String,
          Schema.Struct({
            principalId: Schema.optional(Schema.String),
            clientId: Schema.optional(Schema.String),
          }),
        ),
      ),
      principalId: Schema.optional(Schema.String),
      type: Schema.Literals([
        "None",
        "UserAssigned",
        "SystemAssigned",
        "SystemAssigned,UserAssigned",
      ]),
      tenantId: Schema.optional(Schema.String),
    }),
  ),
  properties: Schema.optional(
    Schema.Struct({
      administratorLogin: Schema.optional(Schema.String),
      administratorLoginPassword: Schema.optional(SensitiveString),
      version: Schema.optional(
        Schema.Literals(["18", "17", "16", "15", "14", "13", "12", "11"]),
      ),
      storage: Schema.optional(
        Schema.Struct({
          storageSizeGB: Schema.optional(Schema.Number),
          autoGrow: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
          tier: Schema.optional(
            Schema.Literals([
              "P1",
              "P2",
              "P3",
              "P4",
              "P6",
              "P10",
              "P15",
              "P20",
              "P30",
              "P40",
              "P50",
              "P60",
              "P70",
              "P80",
            ]),
          ),
          iops: Schema.optional(Schema.Number),
          throughput: Schema.optional(Schema.Number),
          type: Schema.optional(
            Schema.Literals(["Premium_LRS", "PremiumV2_LRS", "UltraSSD_LRS"]),
          ),
        }),
      ),
      backup: Schema.optional(
        Schema.Struct({
          backupRetentionDays: Schema.optional(Schema.Number),
          geoRedundantBackup: Schema.optional(
            Schema.Literals(["Enabled", "Disabled"]),
          ),
          earliestRestoreDate: Schema.optional(Schema.String),
        }),
      ),
      highAvailability: Schema.optional(
        Schema.Struct({
          mode: Schema.optional(
            Schema.Literals(["Disabled", "ZoneRedundant", "SameZone"]),
          ),
          state: Schema.optional(
            Schema.Literals([
              "NotEnabled",
              "CreatingStandby",
              "ReplicatingData",
              "FailingOver",
              "Healthy",
              "RemovingStandby",
              "RecreatingStandby",
              "ComputeUpdatingByFailover",
            ]),
          ),
          standbyAvailabilityZone: Schema.optional(Schema.String),
        }),
      ),
      maintenanceWindow: Schema.optional(
        Schema.Struct({
          customWindow: Schema.optional(Schema.String),
          startHour: Schema.optional(Schema.Number),
          startMinute: Schema.optional(Schema.Number),
          dayOfWeek: Schema.optional(Schema.Number),
        }),
      ),
      authConfig: Schema.optional(
        Schema.Struct({
          activeDirectoryAuth: Schema.optional(
            Schema.Literals(["Enabled", "Disabled"]),
          ),
          passwordAuth: Schema.optional(
            Schema.Literals(["Enabled", "Disabled"]),
          ),
          tenantId: Schema.optional(Schema.String),
        }),
      ),
      dataEncryption: Schema.optional(
        Schema.Struct({
          primaryKeyURI: Schema.optional(Schema.String),
          primaryUserAssignedIdentityId: Schema.optional(Schema.String),
          geoBackupKeyURI: Schema.optional(Schema.String),
          geoBackupUserAssignedIdentityId: Schema.optional(Schema.String),
          type: Schema.optional(
            Schema.Literals(["SystemManaged", "AzureKeyVault"]),
          ),
          primaryEncryptionKeyStatus: Schema.optional(
            Schema.Literals(["Valid", "Invalid"]),
          ),
          geoBackupEncryptionKeyStatus: Schema.optional(
            Schema.Literals(["Valid", "Invalid"]),
          ),
        }),
      ),
      availabilityZone: Schema.optional(Schema.String),
      createMode: Schema.optional(Schema.Literals(["Default", "Update"])),
      replicationRole: Schema.optional(
        Schema.Literals(["None", "Primary", "AsyncReplica", "GeoAsyncReplica"]),
      ),
      replica: Schema.optional(
        Schema.Struct({
          role: Schema.optional(
            Schema.Literals([
              "None",
              "Primary",
              "AsyncReplica",
              "GeoAsyncReplica",
            ]),
          ),
          capacity: Schema.optional(Schema.Number),
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
          promoteMode: Schema.optional(
            Schema.Literals(["Standalone", "Switchover"]),
          ),
          promoteOption: Schema.optional(
            Schema.Literals(["Planned", "Forced"]),
          ),
        }),
      ),
      network: Schema.optional(
        Schema.Struct({
          publicNetworkAccess: Schema.optional(
            Schema.Literals(["Enabled", "Disabled"]),
          ),
          delegatedSubnetResourceId: Schema.optional(Schema.String),
          privateDnsZoneArmResourceId: Schema.optional(Schema.String),
        }),
      ),
      cluster: Schema.optional(
        Schema.Struct({
          clusterSize: Schema.optional(Schema.Number),
          defaultDatabaseName: Schema.optional(Schema.String),
        }),
      ),
    }),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}",
    apiVersion: "2025-08-01",
  }),
) as unknown as Schema.Codec<ServersUpdateInput>;

// Output Schema
export type ServersUpdateOutput = void;
export const ServersUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ServersUpdateOutput>;

// The operation
/**
 * Updates an existing server. The request body can contain one or multiple of the properties present in the normal server definition.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 */
export const ServersUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ServersUpdateInput,
  outputSchema: ServersUpdateOutput,
}));
// Input Schema
export interface ServerThreatProtectionSettingsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  serverName: string;
  threatProtectionName: "Default";
  properties?: { state: "Enabled" | "Disabled"; creationTime?: string };
}
export const ServerThreatProtectionSettingsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
    threatProtectionName: Schema.Literals(["Default"]).pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        state: Schema.Literals(["Enabled", "Disabled"]),
        creationTime: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/advancedThreatProtectionSettings/{threatProtectionName}",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<ServerThreatProtectionSettingsCreateOrUpdateInput>;

// Output Schema
export type ServerThreatProtectionSettingsCreateOrUpdateOutput = void;
export const ServerThreatProtectionSettingsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ServerThreatProtectionSettingsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a server's Advanced Threat Protection settings.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param threatProtectionName - Name of the advanced threat protection settings.
 */
export const ServerThreatProtectionSettingsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ServerThreatProtectionSettingsCreateOrUpdateInput,
    outputSchema: ServerThreatProtectionSettingsCreateOrUpdateOutput,
  }));
// Input Schema
export interface TuningOptionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  serverName: string;
  tuningOption: "index" | "table";
}
export const TuningOptionsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serverName: Schema.String.pipe(T.PathParam()),
  tuningOption: Schema.Literals(["index", "table"]).pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/tuningOptions/{tuningOption}",
    apiVersion: "2025-08-01",
  }),
) as unknown as Schema.Codec<TuningOptionsGetInput>;

// Output Schema
export interface TuningOptionsGetOutput {
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
export const TuningOptionsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
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
  },
) as unknown as Schema.Codec<TuningOptionsGetOutput>;

// The operation
/**
 * Gets the tuning options of a server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param tuningOption - The name of the tuning option.
 */
export const TuningOptionsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TuningOptionsGetInput,
  outputSchema: TuningOptionsGetOutput,
}));
// Input Schema
export interface TuningOptionsListByServerInput {
  subscriptionId: string;
  resourceGroupName: string;
  serverName: string;
}
export const TuningOptionsListByServerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/tuningOptions",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<TuningOptionsListByServerInput>;

// Output Schema
export interface TuningOptionsListByServerOutput {
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
export const TuningOptionsListByServerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<TuningOptionsListByServerOutput>;

// The operation
/**
 * Lists the tuning options of a server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 */
export const TuningOptionsListByServer = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: TuningOptionsListByServerInput,
    outputSchema: TuningOptionsListByServerOutput,
  }),
);
// Input Schema
export interface TuningOptionsListRecommendationsInput {
  subscriptionId: string;
  resourceGroupName: string;
  serverName: string;
  tuningOption: "index" | "table";
  recommendationType?: "CreateIndex" | "DropIndex" | "ReIndex" | "AnalyzeTable";
}
export const TuningOptionsListRecommendationsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
    tuningOption: Schema.Literals(["index", "table"]).pipe(T.PathParam()),
    recommendationType: Schema.optional(
      Schema.Literals(["CreateIndex", "DropIndex", "ReIndex", "AnalyzeTable"]),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/tuningOptions/{tuningOption}/recommendations",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<TuningOptionsListRecommendationsInput>;

// Output Schema
export interface TuningOptionsListRecommendationsOutput {
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
export const TuningOptionsListRecommendationsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<TuningOptionsListRecommendationsOutput>;

// The operation
/**
 * Lists available object recommendations.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param tuningOption - The name of the tuning option.
 * @param recommendationType - Recommendations list filter. Retrieves recommendations based on type.
 */
export const TuningOptionsListRecommendations =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: TuningOptionsListRecommendationsInput,
    outputSchema: TuningOptionsListRecommendationsOutput,
  }));
// Input Schema
export interface VirtualEndpointsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  serverName: string;
  virtualEndpointName: string;
  properties?: {
    endpointType?: "ReadWrite";
    members?: string[];
    virtualEndpoints?: string[];
  };
}
export const VirtualEndpointsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
    virtualEndpointName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        endpointType: Schema.optional(Schema.Literals(["ReadWrite"])),
        members: Schema.optional(Schema.Array(Schema.String)),
        virtualEndpoints: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/virtualendpoints/{virtualEndpointName}",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<VirtualEndpointsCreateInput>;

// Output Schema
export type VirtualEndpointsCreateOutput = void;
export const VirtualEndpointsCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<VirtualEndpointsCreateOutput>;

// The operation
/**
 * Creates a pair of virtual endpoints for a server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param virtualEndpointName - Base name of the virtual endpoints.
 */
export const VirtualEndpointsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualEndpointsCreateInput,
    outputSchema: VirtualEndpointsCreateOutput,
  }),
);
// Input Schema
export interface VirtualEndpointsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  serverName: string;
  virtualEndpointName: string;
}
export const VirtualEndpointsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
    virtualEndpointName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/virtualendpoints/{virtualEndpointName}",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<VirtualEndpointsDeleteInput>;

// Output Schema
export type VirtualEndpointsDeleteOutput = void;
export const VirtualEndpointsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<VirtualEndpointsDeleteOutput>;

// The operation
/**
 * Deletes a pair of virtual endpoints.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param virtualEndpointName - Base name of the virtual endpoints.
 */
export const VirtualEndpointsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualEndpointsDeleteInput,
    outputSchema: VirtualEndpointsDeleteOutput,
  }),
);
// Input Schema
export interface VirtualEndpointsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  serverName: string;
  virtualEndpointName: string;
}
export const VirtualEndpointsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
    virtualEndpointName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/virtualendpoints/{virtualEndpointName}",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<VirtualEndpointsGetInput>;

// Output Schema
export interface VirtualEndpointsGetOutput {
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
export const VirtualEndpointsGetOutput =
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
  }) as unknown as Schema.Codec<VirtualEndpointsGetOutput>;

// The operation
/**
 * Gets information about a pair of virtual endpoints.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param virtualEndpointName - Base name of the virtual endpoints.
 */
export const VirtualEndpointsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VirtualEndpointsGetInput,
  outputSchema: VirtualEndpointsGetOutput,
}));
// Input Schema
export interface VirtualEndpointsListByServerInput {
  subscriptionId: string;
  resourceGroupName: string;
  serverName: string;
}
export const VirtualEndpointsListByServerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/virtualendpoints",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<VirtualEndpointsListByServerInput>;

// Output Schema
export interface VirtualEndpointsListByServerOutput {
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
export const VirtualEndpointsListByServerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<VirtualEndpointsListByServerOutput>;

// The operation
/**
 * Lists pair of virtual endpoints associated to a server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 */
export const VirtualEndpointsListByServer =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualEndpointsListByServerInput,
    outputSchema: VirtualEndpointsListByServerOutput,
  }));
// Input Schema
export interface VirtualEndpointsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  serverName: string;
  virtualEndpointName: string;
  properties?: {
    endpointType?: "ReadWrite";
    members?: string[];
    virtualEndpoints?: string[];
  };
}
export const VirtualEndpointsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    serverName: Schema.String.pipe(T.PathParam()),
    virtualEndpointName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        endpointType: Schema.optional(Schema.Literals(["ReadWrite"])),
        members: Schema.optional(Schema.Array(Schema.String)),
        virtualEndpoints: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/flexibleServers/{serverName}/virtualendpoints/{virtualEndpointName}",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<VirtualEndpointsUpdateInput>;

// Output Schema
export type VirtualEndpointsUpdateOutput = void;
export const VirtualEndpointsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<VirtualEndpointsUpdateOutput>;

// The operation
/**
 * Updates a pair of virtual endpoints for a server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 * @param virtualEndpointName - Base name of the virtual endpoints.
 */
export const VirtualEndpointsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VirtualEndpointsUpdateInput,
    outputSchema: VirtualEndpointsUpdateOutput,
  }),
);
// Input Schema
export interface VirtualNetworkSubnetUsageListInput {
  subscriptionId: string;
  locationName: string;
  virtualNetworkArmResourceId?: string;
}
export const VirtualNetworkSubnetUsageListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    locationName: Schema.String.pipe(T.PathParam()),
    virtualNetworkArmResourceId: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DBforPostgreSQL/locations/{locationName}/checkVirtualNetworkSubnetUsage",
      apiVersion: "2025-08-01",
    }),
  ) as unknown as Schema.Codec<VirtualNetworkSubnetUsageListInput>;

// Output Schema
export interface VirtualNetworkSubnetUsageListOutput {
  delegatedSubnetsUsage?: { subnetName?: string; usage?: number }[];
  location?: string;
  subscriptionId?: string;
}
export const VirtualNetworkSubnetUsageListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    delegatedSubnetsUsage: Schema.optional(
      Schema.Array(
        Schema.Struct({
          subnetName: Schema.optional(Schema.String),
          usage: Schema.optional(Schema.Number),
        }),
      ),
    ),
    location: Schema.optional(Schema.String),
    subscriptionId: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<VirtualNetworkSubnetUsageListOutput>;

// The operation
/**
 * Lists the virtual network subnet usage for a given virtual network.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param locationName - The name of the location.
 */
export const VirtualNetworkSubnetUsageList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualNetworkSubnetUsageListInput,
    outputSchema: VirtualNetworkSubnetUsageListOutput,
  }));
