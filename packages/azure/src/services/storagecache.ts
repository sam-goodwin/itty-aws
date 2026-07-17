/**
 * Azure Storagecache API
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
export interface AmlFilesystemsArchiveInput {
  subscriptionId: string;
  resourceGroupName: string;
  amlFilesystemName: string;
  filesystemPath?: string;
}
export const AmlFilesystemsArchiveInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    amlFilesystemName: Schema.String.pipe(T.PathParam()),
    filesystemPath: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageCache/amlFilesystems/{amlFilesystemName}/archive",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<AmlFilesystemsArchiveInput>;

// Output Schema
export type AmlFilesystemsArchiveOutput = void;
export const AmlFilesystemsArchiveOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<AmlFilesystemsArchiveOutput>;

// The operation
/**
 * Archive data from the AML file system.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param amlFilesystemName - Name for the AML file system. Allows alphanumerics, underscores, and hyphens. Start and end with alphanumeric.
 */
export const amlFilesystemsArchive = /*@__PURE__*/ API.make(() => ({
  inputSchema: AmlFilesystemsArchiveInput,
  outputSchema: AmlFilesystemsArchiveOutput,
}));
// Input Schema
export interface AmlFilesystemsCancelArchiveInput {
  subscriptionId: string;
  resourceGroupName: string;
  amlFilesystemName: string;
}
export const AmlFilesystemsCancelArchiveInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    amlFilesystemName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageCache/amlFilesystems/{amlFilesystemName}/cancelArchive",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<AmlFilesystemsCancelArchiveInput>;

// Output Schema
export type AmlFilesystemsCancelArchiveOutput = void;
export const AmlFilesystemsCancelArchiveOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<AmlFilesystemsCancelArchiveOutput>;

// The operation
/**
 * Cancel archiving data from the AML file system.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param amlFilesystemName - Name for the AML file system. Allows alphanumerics, underscores, and hyphens. Start and end with alphanumeric.
 */
export const amlFilesystemsCancelArchive = /*@__PURE__*/ API.make(() => ({
  inputSchema: AmlFilesystemsCancelArchiveInput,
  outputSchema: AmlFilesystemsCancelArchiveOutput,
}));
// Input Schema
export interface AmlFilesystemsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  amlFilesystemName: string;
  properties?: {
    storageCapacityTiB: number;
    currentStorageCapacityTiB?: number;
    clusterUuid?: string;
    health?: {
      state?:
        | "Unavailable"
        | "Available"
        | "Degraded"
        | "Transitioning"
        | "Maintenance"
        | "Expanding";
      statusCode?: string;
      statusDescription?: string;
    };
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Creating"
      | "Deleting"
      | "Updating"
      | "Canceled";
    filesystemSubnet: string;
    clientInfo?: {
      mgsAddress?: string;
      mountCommand?: string;
      lustreVersion?: string;
      containerStorageInterface?: {
        persistentVolumeClaim?: string;
        persistentVolume?: string;
        storageClass?: string;
      };
    };
    throughputProvisionedMBps?: number;
    encryptionSettings?: {
      keyEncryptionKey?: { keyUrl: string; sourceVault: { id?: string } };
    };
    maintenanceWindow: {
      dayOfWeek?:
        | "Monday"
        | "Tuesday"
        | "Wednesday"
        | "Thursday"
        | "Friday"
        | "Saturday"
        | "Sunday";
      timeOfDayUTC?: string;
    };
    hsm?: {
      settings?: {
        container: string;
        loggingContainer: string;
        importPrefix?: string;
        importPrefixesInitial?: string[];
      };
      archiveStatus?: {
        filesystemPath?: string;
        status?: {
          state?:
            | "NotConfigured"
            | "Idle"
            | "InProgress"
            | "Canceled"
            | "Completed"
            | "Failed"
            | "Cancelling"
            | "FSScanInProgress";
          lastCompletionTime?: string;
          lastStartedTime?: string;
          percentComplete?: number;
          errorCode?: string;
          errorMessage?: string;
        };
      }[];
    };
    rootSquashSettings?: {
      mode?: "None" | "RootOnly" | "All";
      noSquashNidLists?: string;
      squashUID?: number;
      squashGID?: number;
      status?: string;
    };
  };
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?: "UserAssigned" | "None";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
  sku?: { name?: string };
  zones?: string[];
  tags?: Record<string, string>;
  location: string;
}
export const AmlFilesystemsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    amlFilesystemName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        storageCapacityTiB: Schema.Number,
        currentStorageCapacityTiB: Schema.optional(Schema.Number),
        clusterUuid: Schema.optional(Schema.String),
        health: Schema.optional(
          Schema.Struct({
            state: Schema.optional(
              Schema.Literals([
                "Unavailable",
                "Available",
                "Degraded",
                "Transitioning",
                "Maintenance",
                "Expanding",
              ]),
            ),
            statusCode: Schema.optional(Schema.String),
            statusDescription: Schema.optional(Schema.String),
          }),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Creating",
            "Deleting",
            "Updating",
            "Canceled",
          ]),
        ),
        filesystemSubnet: Schema.String,
        clientInfo: Schema.optional(
          Schema.Struct({
            mgsAddress: Schema.optional(Schema.String),
            mountCommand: Schema.optional(Schema.String),
            lustreVersion: Schema.optional(Schema.String),
            containerStorageInterface: Schema.optional(
              Schema.Struct({
                persistentVolumeClaim: Schema.optional(Schema.String),
                persistentVolume: Schema.optional(Schema.String),
                storageClass: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
        throughputProvisionedMBps: Schema.optional(Schema.Number),
        encryptionSettings: Schema.optional(
          Schema.Struct({
            keyEncryptionKey: Schema.optional(
              Schema.Struct({
                keyUrl: Schema.String,
                sourceVault: Schema.Struct({
                  id: Schema.optional(Schema.String),
                }),
              }),
            ),
          }),
        ),
        maintenanceWindow: Schema.Struct({
          dayOfWeek: Schema.optional(
            Schema.Literals([
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ]),
          ),
          timeOfDayUTC: Schema.optional(Schema.String),
        }),
        hsm: Schema.optional(
          Schema.Struct({
            settings: Schema.optional(
              Schema.Struct({
                container: Schema.String,
                loggingContainer: Schema.String,
                importPrefix: Schema.optional(Schema.String),
                importPrefixesInitial: Schema.optional(
                  Schema.Array(Schema.String),
                ),
              }),
            ),
            archiveStatus: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  filesystemPath: Schema.optional(Schema.String),
                  status: Schema.optional(
                    Schema.Struct({
                      state: Schema.optional(
                        Schema.Literals([
                          "NotConfigured",
                          "Idle",
                          "InProgress",
                          "Canceled",
                          "Completed",
                          "Failed",
                          "Cancelling",
                          "FSScanInProgress",
                        ]),
                      ),
                      lastCompletionTime: Schema.optional(Schema.String),
                      lastStartedTime: Schema.optional(Schema.String),
                      percentComplete: Schema.optional(Schema.Number),
                      errorCode: Schema.optional(Schema.String),
                      errorMessage: Schema.optional(Schema.String),
                    }),
                  ),
                }),
              ),
            ),
          }),
        ),
        rootSquashSettings: Schema.optional(
          Schema.Struct({
            mode: Schema.optional(Schema.Literals(["None", "RootOnly", "All"])),
            noSquashNidLists: Schema.optional(Schema.String),
            squashUID: Schema.optional(Schema.Number),
            squashGID: Schema.optional(Schema.Number),
            status: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(Schema.Literals(["UserAssigned", "None"])),
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
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
      }),
    ),
    zones: Schema.optional(Schema.Array(Schema.String)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageCache/amlFilesystems/{amlFilesystemName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<AmlFilesystemsCreateOrUpdateInput>;

// Output Schema
export interface AmlFilesystemsCreateOrUpdateOutput {
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
export const AmlFilesystemsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<AmlFilesystemsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update an AML file system.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param amlFilesystemName - Name for the AML file system. Allows alphanumerics, underscores, and hyphens. Start and end with alphanumeric.
 */
export const amlFilesystemsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AmlFilesystemsCreateOrUpdateInput,
    outputSchema: AmlFilesystemsCreateOrUpdateOutput,
  }));
// Input Schema
export interface AmlFilesystemsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  amlFilesystemName: string;
}
export const AmlFilesystemsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    amlFilesystemName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageCache/amlFilesystems/{amlFilesystemName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<AmlFilesystemsDeleteInput>;

// Output Schema
export type AmlFilesystemsDeleteOutput = void;
export const AmlFilesystemsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<AmlFilesystemsDeleteOutput>;

// The operation
/**
 * Schedules an AML file system for deletion.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param amlFilesystemName - Name for the AML file system. Allows alphanumerics, underscores, and hyphens. Start and end with alphanumeric.
 */
export const amlFilesystemsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: AmlFilesystemsDeleteInput,
  outputSchema: AmlFilesystemsDeleteOutput,
}));
// Input Schema
export interface AmlFilesystemsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  amlFilesystemName: string;
}
export const AmlFilesystemsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  amlFilesystemName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageCache/amlFilesystems/{amlFilesystemName}",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<AmlFilesystemsGetInput>;

// Output Schema
export interface AmlFilesystemsGetOutput {
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
export const AmlFilesystemsGetOutput =
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
  }) as unknown as Schema.Codec<AmlFilesystemsGetOutput>;

// The operation
/**
 * Returns an AML file system.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param amlFilesystemName - Name for the AML file system. Allows alphanumerics, underscores, and hyphens. Start and end with alphanumeric.
 */
export const amlFilesystemsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: AmlFilesystemsGetInput,
  outputSchema: AmlFilesystemsGetOutput,
}));
// Input Schema
export interface AmlFilesystemsListInput {
  subscriptionId: string;
}
export const AmlFilesystemsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.StorageCache/amlFilesystems",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<AmlFilesystemsListInput>;

// Output Schema
export interface AmlFilesystemsListOutput {
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
export const AmlFilesystemsListOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<AmlFilesystemsListOutput>;

// The operation
/**
 * Returns all AML file systems the user has access to under a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const amlFilesystemsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: AmlFilesystemsListInput,
  outputSchema: AmlFilesystemsListOutput,
}));
// Input Schema
export interface AmlFilesystemsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const AmlFilesystemsListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageCache/amlFilesystems",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<AmlFilesystemsListByResourceGroupInput>;

// Output Schema
export interface AmlFilesystemsListByResourceGroupOutput {
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
export const AmlFilesystemsListByResourceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<AmlFilesystemsListByResourceGroupOutput>;

// The operation
/**
 * Returns all AML file systems the user has access to under a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const amlFilesystemsListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AmlFilesystemsListByResourceGroupInput,
    outputSchema: AmlFilesystemsListByResourceGroupOutput,
  }));
// Input Schema
export interface AmlFilesystemsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  amlFilesystemName: string;
  tags?: Record<string, string>;
  properties?: {
    encryptionSettings?: {
      keyEncryptionKey?: { keyUrl: string; sourceVault: { id?: string } };
    };
    maintenanceWindow?: {
      dayOfWeek?:
        | "Monday"
        | "Tuesday"
        | "Wednesday"
        | "Thursday"
        | "Friday"
        | "Saturday"
        | "Sunday";
      timeOfDayUTC?: string;
    };
    rootSquashSettings?: {
      mode?: "None" | "RootOnly" | "All";
      noSquashNidLists?: string;
      squashUID?: number;
      squashGID?: number;
      status?: string;
    };
  };
}
export const AmlFilesystemsUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    amlFilesystemName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(
      Schema.Struct({
        encryptionSettings: Schema.optional(
          Schema.Struct({
            keyEncryptionKey: Schema.optional(
              Schema.Struct({
                keyUrl: Schema.String,
                sourceVault: Schema.Struct({
                  id: Schema.optional(Schema.String),
                }),
              }),
            ),
          }),
        ),
        maintenanceWindow: Schema.optional(
          Schema.Struct({
            dayOfWeek: Schema.optional(
              Schema.Literals([
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ]),
            ),
            timeOfDayUTC: Schema.optional(Schema.String),
          }),
        ),
        rootSquashSettings: Schema.optional(
          Schema.Struct({
            mode: Schema.optional(Schema.Literals(["None", "RootOnly", "All"])),
            noSquashNidLists: Schema.optional(Schema.String),
            squashUID: Schema.optional(Schema.Number),
            squashGID: Schema.optional(Schema.Number),
            status: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageCache/amlFilesystems/{amlFilesystemName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<AmlFilesystemsUpdateInput>;

// Output Schema
export interface AmlFilesystemsUpdateOutput {
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
export const AmlFilesystemsUpdateOutput =
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
  }) as unknown as Schema.Codec<AmlFilesystemsUpdateOutput>;

// The operation
/**
 * Update an AML file system instance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param amlFilesystemName - Name for the AML file system. Allows alphanumerics, underscores, and hyphens. Start and end with alphanumeric.
 */
export const amlFilesystemsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: AmlFilesystemsUpdateInput,
  outputSchema: AmlFilesystemsUpdateOutput,
}));
// Input Schema
export interface AscOperationsGetInput {
  subscriptionId: string;
  location: string;
  operationId: string;
}
export const AscOperationsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  location: Schema.String.pipe(T.PathParam()),
  operationId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.StorageCache/locations/{location}/ascOperations/{operationId}",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<AscOperationsGetInput>;

// Output Schema
export interface AscOperationsGetOutput {
  id?: string;
  name?: string;
  startTime?: string;
  endTime?: string;
  status?: string;
  error?: { code?: string; message?: string };
  properties?: { output?: Record<string, unknown> };
}
export const AscOperationsGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  startTime: Schema.optional(Schema.String),
  endTime: Schema.optional(Schema.String),
  status: Schema.optional(Schema.String),
  error: Schema.optional(
    Schema.Struct({
      code: Schema.optional(Schema.String),
      message: Schema.optional(Schema.String),
    }),
  ),
  properties: Schema.optional(
    Schema.Struct({
      output: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    }),
  ),
}) as unknown as Schema.Codec<AscOperationsGetOutput>;

// The operation
/**
 * Gets the status of an asynchronous operation for the Azure HPC Cache
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The name of Azure region.
 * @param operationId - The ID of an ongoing async operation.
 */
export const AscOperationsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: AscOperationsGetInput,
  outputSchema: AscOperationsGetOutput,
}));
// Input Schema
export interface AscUsagesListInput {
  subscriptionId: string;
  location: string;
}
export const AscUsagesListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  location: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.StorageCache/locations/{location}/usages",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<AscUsagesListInput>;

// Output Schema
export interface AscUsagesListOutput {
  value?: {
    limit?: number;
    unit?: string;
    currentValue?: number;
    name?: { value?: string; localizedValue?: string };
  }[];
  nextLink?: string;
}
export const AscUsagesListOutput = /*@__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        limit: Schema.optional(Schema.Number),
        unit: Schema.optional(Schema.String),
        currentValue: Schema.optional(Schema.Number),
        name: Schema.optional(
          Schema.Struct({
            value: Schema.optional(Schema.String),
            localizedValue: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<AscUsagesListOutput>;

// The operation
/**
 * Gets the quantity used and quota limit for resources
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The name of Azure region.
 */
export const AscUsagesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: AscUsagesListInput,
  outputSchema: AscUsagesListOutput,
}));
// Input Schema
export interface AutoExportJobsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  amlFilesystemName: string;
  autoExportJobName: string;
  properties?: {
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Creating"
      | "Deleting"
      | "Updating"
      | "Canceled";
    adminStatus?: "Enable" | "Disable";
    autoExportPrefixes?: string[];
    status?: {
      state?:
        | "InProgress"
        | "Disabling"
        | "Disabled"
        | "DisableFailed"
        | "Failed";
      statusCode?: string;
      statusMessage?: string;
      totalFilesExported?: number;
      totalMiBExported?: number;
      totalFilesFailed?: number;
      exportIterationCount?: number;
      lastSuccessfulIterationCompletionTimeUTC?: string;
      currentIterationFilesDiscovered?: number;
      currentIterationMiBDiscovered?: number;
      currentIterationFilesExported?: number;
      currentIterationMiBExported?: number;
      currentIterationFilesFailed?: number;
      lastStartedTimeUTC?: string;
      lastCompletionTimeUTC?: string;
    };
  };
  tags?: Record<string, string>;
  location: string;
}
export const AutoExportJobsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    amlFilesystemName: Schema.String.pipe(T.PathParam()),
    autoExportJobName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Creating",
            "Deleting",
            "Updating",
            "Canceled",
          ]),
        ),
        adminStatus: Schema.optional(Schema.Literals(["Enable", "Disable"])),
        autoExportPrefixes: Schema.optional(Schema.Array(Schema.String)),
        status: Schema.optional(
          Schema.Struct({
            state: Schema.optional(
              Schema.Literals([
                "InProgress",
                "Disabling",
                "Disabled",
                "DisableFailed",
                "Failed",
              ]),
            ),
            statusCode: Schema.optional(Schema.String),
            statusMessage: Schema.optional(Schema.String),
            totalFilesExported: Schema.optional(Schema.Number),
            totalMiBExported: Schema.optional(Schema.Number),
            totalFilesFailed: Schema.optional(Schema.Number),
            exportIterationCount: Schema.optional(Schema.Number),
            lastSuccessfulIterationCompletionTimeUTC: Schema.optional(
              Schema.String,
            ),
            currentIterationFilesDiscovered: Schema.optional(Schema.Number),
            currentIterationMiBDiscovered: Schema.optional(Schema.Number),
            currentIterationFilesExported: Schema.optional(Schema.Number),
            currentIterationMiBExported: Schema.optional(Schema.Number),
            currentIterationFilesFailed: Schema.optional(Schema.Number),
            lastStartedTimeUTC: Schema.optional(Schema.String),
            lastCompletionTimeUTC: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageCache/amlFilesystems/{amlFilesystemName}/autoExportJobs/{autoExportJobName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<AutoExportJobsCreateOrUpdateInput>;

// Output Schema
export interface AutoExportJobsCreateOrUpdateOutput {
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
export const AutoExportJobsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<AutoExportJobsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update an auto export job.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param amlFilesystemName - Name for the AML file system. Allows alphanumerics, underscores, and hyphens. Start and end with alphanumeric.
 * @param autoExportJobName - Name for the auto export job. Allows alphanumerics, underscores, and hyphens. Start and end with alphanumeric.
 */
export const autoExportJobsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AutoExportJobsCreateOrUpdateInput,
    outputSchema: AutoExportJobsCreateOrUpdateOutput,
  }));
// Input Schema
export interface AutoExportJobsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  amlFilesystemName: string;
  autoExportJobName: string;
}
export const AutoExportJobsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    amlFilesystemName: Schema.String.pipe(T.PathParam()),
    autoExportJobName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageCache/amlFilesystems/{amlFilesystemName}/autoExportJobs/{autoExportJobName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<AutoExportJobsDeleteInput>;

// Output Schema
export type AutoExportJobsDeleteOutput = void;
export const AutoExportJobsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<AutoExportJobsDeleteOutput>;

// The operation
/**
 * Schedules an auto export job for deletion.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param amlFilesystemName - Name for the AML file system. Allows alphanumerics, underscores, and hyphens. Start and end with alphanumeric.
 * @param autoExportJobName - Name for the auto export job. Allows alphanumerics, underscores, and hyphens. Start and end with alphanumeric.
 */
export const autoExportJobsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: AutoExportJobsDeleteInput,
  outputSchema: AutoExportJobsDeleteOutput,
}));
// Input Schema
export interface AutoExportJobsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  amlFilesystemName: string;
  autoExportJobName: string;
}
export const AutoExportJobsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  amlFilesystemName: Schema.String.pipe(T.PathParam()),
  autoExportJobName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageCache/amlFilesystems/{amlFilesystemName}/autoExportJobs/{autoExportJobName}",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<AutoExportJobsGetInput>;

// Output Schema
export interface AutoExportJobsGetOutput {
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
export const AutoExportJobsGetOutput =
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
  }) as unknown as Schema.Codec<AutoExportJobsGetOutput>;

// The operation
/**
 * Returns an auto export job.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param amlFilesystemName - Name for the AML file system. Allows alphanumerics, underscores, and hyphens. Start and end with alphanumeric.
 * @param autoExportJobName - Name for the auto export job. Allows alphanumerics, underscores, and hyphens. Start and end with alphanumeric.
 */
export const autoExportJobsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: AutoExportJobsGetInput,
  outputSchema: AutoExportJobsGetOutput,
}));
// Input Schema
export interface AutoExportJobsListByAmlFilesystemInput {
  subscriptionId: string;
  resourceGroupName: string;
  amlFilesystemName: string;
}
export const AutoExportJobsListByAmlFilesystemInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    amlFilesystemName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageCache/amlFilesystems/{amlFilesystemName}/autoExportJobs",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<AutoExportJobsListByAmlFilesystemInput>;

// Output Schema
export interface AutoExportJobsListByAmlFilesystemOutput {
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
export const AutoExportJobsListByAmlFilesystemOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<AutoExportJobsListByAmlFilesystemOutput>;

// The operation
/**
 * Returns all the auto export jobs the user has access to under an AML File System.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param amlFilesystemName - Name for the AML file system. Allows alphanumerics, underscores, and hyphens. Start and end with alphanumeric.
 */
export const autoExportJobsListByAmlFilesystem =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AutoExportJobsListByAmlFilesystemInput,
    outputSchema: AutoExportJobsListByAmlFilesystemOutput,
  }));
// Input Schema
export interface AutoExportJobsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  amlFilesystemName: string;
  autoExportJobName: string;
  tags?: Record<string, string>;
  properties?: { adminStatus?: "Enable" | "Disable" };
}
export const AutoExportJobsUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    amlFilesystemName: Schema.String.pipe(T.PathParam()),
    autoExportJobName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(
      Schema.Struct({
        adminStatus: Schema.optional(Schema.Literals(["Enable", "Disable"])),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageCache/amlFilesystems/{amlFilesystemName}/autoExportJobs/{autoExportJobName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<AutoExportJobsUpdateInput>;

// Output Schema
export interface AutoExportJobsUpdateOutput {
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
export const AutoExportJobsUpdateOutput =
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
  }) as unknown as Schema.Codec<AutoExportJobsUpdateOutput>;

// The operation
/**
 * Update an auto export job instance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param amlFilesystemName - Name for the AML file system. Allows alphanumerics, underscores, and hyphens. Start and end with alphanumeric.
 * @param autoExportJobName - Name for the auto export job. Allows alphanumerics, underscores, and hyphens. Start and end with alphanumeric.
 */
export const autoExportJobsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: AutoExportJobsUpdateInput,
  outputSchema: AutoExportJobsUpdateOutput,
}));
// Input Schema
export interface AutoImportJobsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  amlFilesystemName: string;
  autoImportJobName: string;
  properties?: {
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Creating"
      | "Deleting"
      | "Updating"
      | "Canceled";
    adminStatus?: "Enable" | "Disable";
    autoImportPrefixes?: string[];
    conflictResolutionMode?:
      | "Fail"
      | "Skip"
      | "OverwriteIfDirty"
      | "OverwriteAlways";
    enableDeletions?: boolean;
    maximumErrors?: number;
    status?: {
      state?: "InProgress" | "Failed" | "Disabling" | "Disabled";
      statusCode?: string;
      statusMessage?: string;
      scanStartTime?: string;
      scanEndTime?: string;
      totalBlobsWalked?: number;
      rateOfBlobWalk?: number;
      totalBlobsImported?: number;
      rateOfBlobImport?: number;
      importedFiles?: number;
      importedDirectories?: number;
      importedSymlinks?: number;
      preexistingFiles?: number;
      preexistingDirectories?: number;
      preexistingSymlinks?: number;
      totalErrors?: number;
      totalConflicts?: number;
      blobSyncEvents?: {
        importedFiles?: number;
        importedDirectories?: number;
        importedSymlinks?: number;
        preexistingFiles?: number;
        preexistingDirectories?: number;
        preexistingSymlinks?: number;
        totalBlobsImported?: number;
        rateOfBlobImport?: number;
        totalErrors?: number;
        totalConflicts?: number;
        deletions?: number;
        lastChangeFeedEventConsumedTime?: string;
        lastTimeFullySynchronized?: string;
      };
      lastStartedTimeUTC?: string;
      lastCompletionTimeUTC?: string;
    };
  };
  tags?: Record<string, string>;
  location: string;
}
export const AutoImportJobsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    amlFilesystemName: Schema.String.pipe(T.PathParam()),
    autoImportJobName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Creating",
            "Deleting",
            "Updating",
            "Canceled",
          ]),
        ),
        adminStatus: Schema.optional(Schema.Literals(["Enable", "Disable"])),
        autoImportPrefixes: Schema.optional(Schema.Array(Schema.String)),
        conflictResolutionMode: Schema.optional(
          Schema.Literals([
            "Fail",
            "Skip",
            "OverwriteIfDirty",
            "OverwriteAlways",
          ]),
        ),
        enableDeletions: Schema.optional(Schema.Boolean),
        maximumErrors: Schema.optional(Schema.Number),
        status: Schema.optional(
          Schema.Struct({
            state: Schema.optional(
              Schema.Literals([
                "InProgress",
                "Failed",
                "Disabling",
                "Disabled",
              ]),
            ),
            statusCode: Schema.optional(Schema.String),
            statusMessage: Schema.optional(Schema.String),
            scanStartTime: Schema.optional(Schema.String),
            scanEndTime: Schema.optional(Schema.String),
            totalBlobsWalked: Schema.optional(Schema.Number),
            rateOfBlobWalk: Schema.optional(Schema.Number),
            totalBlobsImported: Schema.optional(Schema.Number),
            rateOfBlobImport: Schema.optional(Schema.Number),
            importedFiles: Schema.optional(Schema.Number),
            importedDirectories: Schema.optional(Schema.Number),
            importedSymlinks: Schema.optional(Schema.Number),
            preexistingFiles: Schema.optional(Schema.Number),
            preexistingDirectories: Schema.optional(Schema.Number),
            preexistingSymlinks: Schema.optional(Schema.Number),
            totalErrors: Schema.optional(Schema.Number),
            totalConflicts: Schema.optional(Schema.Number),
            blobSyncEvents: Schema.optional(
              Schema.Struct({
                importedFiles: Schema.optional(Schema.Number),
                importedDirectories: Schema.optional(Schema.Number),
                importedSymlinks: Schema.optional(Schema.Number),
                preexistingFiles: Schema.optional(Schema.Number),
                preexistingDirectories: Schema.optional(Schema.Number),
                preexistingSymlinks: Schema.optional(Schema.Number),
                totalBlobsImported: Schema.optional(Schema.Number),
                rateOfBlobImport: Schema.optional(Schema.Number),
                totalErrors: Schema.optional(Schema.Number),
                totalConflicts: Schema.optional(Schema.Number),
                deletions: Schema.optional(Schema.Number),
                lastChangeFeedEventConsumedTime: Schema.optional(Schema.String),
                lastTimeFullySynchronized: Schema.optional(Schema.String),
              }),
            ),
            lastStartedTimeUTC: Schema.optional(Schema.String),
            lastCompletionTimeUTC: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageCache/amlFilesystems/{amlFilesystemName}/autoImportJobs/{autoImportJobName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<AutoImportJobsCreateOrUpdateInput>;

// Output Schema
export interface AutoImportJobsCreateOrUpdateOutput {
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
export const AutoImportJobsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<AutoImportJobsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update an auto import job.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param amlFilesystemName - Name for the AML file system. Allows alphanumerics, underscores, and hyphens. Start and end with alphanumeric.
 * @param autoImportJobName - Name for the auto import job. Allows alphanumerics, underscores, and hyphens. Start and end with alphanumeric.
 */
export const autoImportJobsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AutoImportJobsCreateOrUpdateInput,
    outputSchema: AutoImportJobsCreateOrUpdateOutput,
  }));
// Input Schema
export interface AutoImportJobsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  amlFilesystemName: string;
  autoImportJobName: string;
}
export const AutoImportJobsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    amlFilesystemName: Schema.String.pipe(T.PathParam()),
    autoImportJobName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageCache/amlFilesystems/{amlFilesystemName}/autoImportJobs/{autoImportJobName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<AutoImportJobsDeleteInput>;

// Output Schema
export type AutoImportJobsDeleteOutput = void;
export const AutoImportJobsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<AutoImportJobsDeleteOutput>;

// The operation
/**
 * Schedules an auto import job for deletion.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param amlFilesystemName - Name for the AML file system. Allows alphanumerics, underscores, and hyphens. Start and end with alphanumeric.
 * @param autoImportJobName - Name for the auto import job. Allows alphanumerics, underscores, and hyphens. Start and end with alphanumeric.
 */
export const autoImportJobsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: AutoImportJobsDeleteInput,
  outputSchema: AutoImportJobsDeleteOutput,
}));
// Input Schema
export interface AutoImportJobsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  amlFilesystemName: string;
  autoImportJobName: string;
}
export const AutoImportJobsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  amlFilesystemName: Schema.String.pipe(T.PathParam()),
  autoImportJobName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageCache/amlFilesystems/{amlFilesystemName}/autoImportJobs/{autoImportJobName}",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<AutoImportJobsGetInput>;

// Output Schema
export interface AutoImportJobsGetOutput {
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
export const AutoImportJobsGetOutput =
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
  }) as unknown as Schema.Codec<AutoImportJobsGetOutput>;

// The operation
/**
 * Returns an auto import job.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param amlFilesystemName - Name for the AML file system. Allows alphanumerics, underscores, and hyphens. Start and end with alphanumeric.
 * @param autoImportJobName - Name for the auto import job. Allows alphanumerics, underscores, and hyphens. Start and end with alphanumeric.
 */
export const autoImportJobsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: AutoImportJobsGetInput,
  outputSchema: AutoImportJobsGetOutput,
}));
// Input Schema
export interface AutoImportJobsListByAmlFilesystemInput {
  subscriptionId: string;
  resourceGroupName: string;
  amlFilesystemName: string;
}
export const AutoImportJobsListByAmlFilesystemInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    amlFilesystemName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageCache/amlFilesystems/{amlFilesystemName}/autoImportJobs",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<AutoImportJobsListByAmlFilesystemInput>;

// Output Schema
export interface AutoImportJobsListByAmlFilesystemOutput {
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
export const AutoImportJobsListByAmlFilesystemOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<AutoImportJobsListByAmlFilesystemOutput>;

// The operation
/**
 * Returns all the auto import jobs the user has access to under an AML File System.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param amlFilesystemName - Name for the AML file system. Allows alphanumerics, underscores, and hyphens. Start and end with alphanumeric.
 */
export const autoImportJobsListByAmlFilesystem =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AutoImportJobsListByAmlFilesystemInput,
    outputSchema: AutoImportJobsListByAmlFilesystemOutput,
  }));
// Input Schema
export interface AutoImportJobsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  amlFilesystemName: string;
  autoImportJobName: string;
  tags?: Record<string, string>;
  properties?: { adminStatus?: "Enable" | "Disable" };
}
export const AutoImportJobsUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    amlFilesystemName: Schema.String.pipe(T.PathParam()),
    autoImportJobName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(
      Schema.Struct({
        adminStatus: Schema.optional(Schema.Literals(["Enable", "Disable"])),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageCache/amlFilesystems/{amlFilesystemName}/autoImportJobs/{autoImportJobName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<AutoImportJobsUpdateInput>;

// Output Schema
export interface AutoImportJobsUpdateOutput {
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
export const AutoImportJobsUpdateOutput =
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
  }) as unknown as Schema.Codec<AutoImportJobsUpdateOutput>;

// The operation
/**
 * Update an auto import job instance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param amlFilesystemName - Name for the AML file system. Allows alphanumerics, underscores, and hyphens. Start and end with alphanumeric.
 * @param autoImportJobName - Name for the auto import job. Allows alphanumerics, underscores, and hyphens. Start and end with alphanumeric.
 */
export const autoImportJobsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: AutoImportJobsUpdateInput,
  outputSchema: AutoImportJobsUpdateOutput,
}));
// Input Schema
export interface CachesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  cacheName: string;
  properties?: {
    cacheSizeGB?: number;
    health?: {
      state?:
        | "Unknown"
        | "Healthy"
        | "Degraded"
        | "Down"
        | "Transitioning"
        | "Stopping"
        | "Stopped"
        | "Upgrading"
        | "Flushing"
        | "WaitingForKey"
        | "StartFailed"
        | "UpgradeFailed";
      statusDescription?: string;
      conditions?: { timestamp?: string; message?: string }[];
    };
    mountAddresses?: string[];
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Creating"
      | "Deleting"
      | "Updating";
    subnet?: string;
    upgradeStatus?: {
      currentFirmwareVersion?: string;
      firmwareUpdateStatus?: "available" | "unavailable";
      firmwareUpdateDeadline?: string;
      lastFirmwareUpdate?: string;
      pendingFirmwareVersion?: string;
    };
    upgradeSettings?: {
      upgradeScheduleEnabled?: boolean;
      scheduledTime?: string;
    };
    networkSettings?: {
      mtu?: number;
      utilityAddresses?: string[];
      dnsServers?: string[];
      dnsSearchDomain?: string;
      ntpServer?: string;
    };
    encryptionSettings?: {
      keyEncryptionKey?: { keyUrl: string; sourceVault: { id?: string } };
      rotationToLatestKeyVersionEnabled?: boolean;
    };
    securitySettings?: {
      accessPolicies?: {
        name: string;
        accessRules: {
          scope: "default" | "network" | "host";
          filter?: string;
          access: "no" | "ro" | "rw";
          suid?: boolean;
          submountAccess?: boolean;
          rootSquash?: boolean;
          anonymousUID?: string;
          anonymousGID?: string;
        }[];
      }[];
    };
    directoryServicesSettings?: {
      activeDirectory?: {
        primaryDnsIpAddress: string;
        secondaryDnsIpAddress?: string;
        domainName: string;
        domainNetBiosName: string;
        cacheNetBiosName: string;
        domainJoined?: "Yes" | "No" | "Error";
        credentials?: {
          username: string;
          password?: string | Redacted.Redacted<string>;
        };
      };
      usernameDownload?: {
        extendedGroups?: boolean;
        usernameSource?: "AD" | "LDAP" | "File" | "None";
        groupFileURI?: string;
        userFileURI?: string;
        ldapServer?: string;
        ldapBaseDN?: string;
        encryptLdapConnection?: boolean;
        requireValidCertificate?: boolean;
        autoDownloadCertificate?: boolean;
        caCertificateURI?: string;
        usernameDownloaded?: "Yes" | "No" | "Error";
        credentials?: {
          bindDn?: string;
          bindPassword?: string | Redacted.Redacted<string>;
        };
      };
    };
    zones?: string[];
    primingJobs?: {
      primingJobName: string;
      primingManifestUrl: string;
      primingJobId?: string;
      primingJobState?: "Queued" | "Running" | "Paused" | "Complete";
      primingJobStatus?: string;
      primingJobDetails?: string;
      primingJobPercentComplete?: number;
    }[];
    spaceAllocation?: { name?: string; allocationPercentage?: number }[];
  };
  tags?: Record<string, string>;
  location?: string;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?:
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned, UserAssigned"
      | "None";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
  sku?: { name?: string };
}
export const CachesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    cacheName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        cacheSizeGB: Schema.optional(Schema.Number),
        health: Schema.optional(
          Schema.Struct({
            state: Schema.optional(
              Schema.Literals([
                "Unknown",
                "Healthy",
                "Degraded",
                "Down",
                "Transitioning",
                "Stopping",
                "Stopped",
                "Upgrading",
                "Flushing",
                "WaitingForKey",
                "StartFailed",
                "UpgradeFailed",
              ]),
            ),
            statusDescription: Schema.optional(Schema.String),
            conditions: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  timestamp: Schema.optional(Schema.String),
                  message: Schema.optional(Schema.String),
                }),
              ),
            ),
          }),
        ),
        mountAddresses: Schema.optional(Schema.Array(Schema.String)),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Creating",
            "Deleting",
            "Updating",
          ]),
        ),
        subnet: Schema.optional(Schema.String),
        upgradeStatus: Schema.optional(
          Schema.Struct({
            currentFirmwareVersion: Schema.optional(Schema.String),
            firmwareUpdateStatus: Schema.optional(
              Schema.Literals(["available", "unavailable"]),
            ),
            firmwareUpdateDeadline: Schema.optional(Schema.String),
            lastFirmwareUpdate: Schema.optional(Schema.String),
            pendingFirmwareVersion: Schema.optional(Schema.String),
          }),
        ),
        upgradeSettings: Schema.optional(
          Schema.Struct({
            upgradeScheduleEnabled: Schema.optional(Schema.Boolean),
            scheduledTime: Schema.optional(Schema.String),
          }),
        ),
        networkSettings: Schema.optional(
          Schema.Struct({
            mtu: Schema.optional(Schema.Number),
            utilityAddresses: Schema.optional(Schema.Array(Schema.String)),
            dnsServers: Schema.optional(Schema.Array(Schema.String)),
            dnsSearchDomain: Schema.optional(Schema.String),
            ntpServer: Schema.optional(Schema.String),
          }),
        ),
        encryptionSettings: Schema.optional(
          Schema.Struct({
            keyEncryptionKey: Schema.optional(
              Schema.Struct({
                keyUrl: Schema.String,
                sourceVault: Schema.Struct({
                  id: Schema.optional(Schema.String),
                }),
              }),
            ),
            rotationToLatestKeyVersionEnabled: Schema.optional(Schema.Boolean),
          }),
        ),
        securitySettings: Schema.optional(
          Schema.Struct({
            accessPolicies: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.String,
                  accessRules: Schema.Array(
                    Schema.Struct({
                      scope: Schema.Literals(["default", "network", "host"]),
                      filter: Schema.optional(Schema.String),
                      access: Schema.Literals(["no", "ro", "rw"]),
                      suid: Schema.optional(Schema.Boolean),
                      submountAccess: Schema.optional(Schema.Boolean),
                      rootSquash: Schema.optional(Schema.Boolean),
                      anonymousUID: Schema.optional(Schema.String),
                      anonymousGID: Schema.optional(Schema.String),
                    }),
                  ),
                }),
              ),
            ),
          }),
        ),
        directoryServicesSettings: Schema.optional(
          Schema.Struct({
            activeDirectory: Schema.optional(
              Schema.Struct({
                primaryDnsIpAddress: Schema.String,
                secondaryDnsIpAddress: Schema.optional(Schema.String),
                domainName: Schema.String,
                domainNetBiosName: Schema.String,
                cacheNetBiosName: Schema.String,
                domainJoined: Schema.optional(
                  Schema.Literals(["Yes", "No", "Error"]),
                ),
                credentials: Schema.optional(
                  Schema.Struct({
                    username: Schema.String,
                    password: Schema.optional(SensitiveString),
                  }),
                ),
              }),
            ),
            usernameDownload: Schema.optional(
              Schema.Struct({
                extendedGroups: Schema.optional(Schema.Boolean),
                usernameSource: Schema.optional(
                  Schema.Literals(["AD", "LDAP", "File", "None"]),
                ),
                groupFileURI: Schema.optional(Schema.String),
                userFileURI: Schema.optional(Schema.String),
                ldapServer: Schema.optional(Schema.String),
                ldapBaseDN: Schema.optional(Schema.String),
                encryptLdapConnection: Schema.optional(Schema.Boolean),
                requireValidCertificate: Schema.optional(Schema.Boolean),
                autoDownloadCertificate: Schema.optional(Schema.Boolean),
                caCertificateURI: Schema.optional(Schema.String),
                usernameDownloaded: Schema.optional(
                  Schema.Literals(["Yes", "No", "Error"]),
                ),
                credentials: Schema.optional(
                  Schema.Struct({
                    bindDn: Schema.optional(Schema.String),
                    bindPassword: Schema.optional(SensitiveString),
                  }),
                ),
              }),
            ),
          }),
        ),
        zones: Schema.optional(Schema.Array(Schema.String)),
        primingJobs: Schema.optional(
          Schema.Array(
            Schema.Struct({
              primingJobName: Schema.String,
              primingManifestUrl: Schema.String,
              primingJobId: Schema.optional(Schema.String),
              primingJobState: Schema.optional(
                Schema.Literals(["Queued", "Running", "Paused", "Complete"]),
              ),
              primingJobStatus: Schema.optional(Schema.String),
              primingJobDetails: Schema.optional(Schema.String),
              primingJobPercentComplete: Schema.optional(Schema.Number),
            }),
          ),
        ),
        spaceAllocation: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              allocationPercentage: Schema.optional(Schema.Number),
            }),
          ),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.optional(
          Schema.Literals([
            "SystemAssigned",
            "UserAssigned",
            "SystemAssigned, UserAssigned",
            "None",
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
      }),
    ),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageCache/caches/{cacheName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<CachesCreateOrUpdateInput>;

// Output Schema
export interface CachesCreateOrUpdateOutput {
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
export const CachesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<CachesCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a cache.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cacheName - Name of cache. Length of name must not be greater than 80 and chars must be from the [-0-9a-zA-Z_] char class.
 */
export const CachesCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: CachesCreateOrUpdateInput,
  outputSchema: CachesCreateOrUpdateOutput,
}));
// Input Schema
export interface CachesDebugInfoInput {
  subscriptionId: string;
  resourceGroupName: string;
  cacheName: string;
}
export const CachesDebugInfoInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  cacheName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageCache/caches/{cacheName}/debugInfo",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<CachesDebugInfoInput>;

// Output Schema
export type CachesDebugInfoOutput = void;
export const CachesDebugInfoOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<CachesDebugInfoOutput>;

// The operation
/**
 * Tells a cache to write generate debug info for support to process.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cacheName - Name of cache. Length of name must not be greater than 80 and chars must be from the [-0-9a-zA-Z_] char class.
 */
export const CachesDebugInfo = /*@__PURE__*/ API.make(() => ({
  inputSchema: CachesDebugInfoInput,
  outputSchema: CachesDebugInfoOutput,
}));
// Input Schema
export interface CachesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  cacheName: string;
}
export const CachesDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  cacheName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageCache/caches/{cacheName}",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<CachesDeleteInput>;

// Output Schema
export type CachesDeleteOutput = void;
export const CachesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<CachesDeleteOutput>;

// The operation
/**
 * Schedules a cache for deletion.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cacheName - Name of cache. Length of name must not be greater than 80 and chars must be from the [-0-9a-zA-Z_] char class.
 */
export const CachesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: CachesDeleteInput,
  outputSchema: CachesDeleteOutput,
}));
// Input Schema
export interface CachesFlushInput {
  subscriptionId: string;
  resourceGroupName: string;
  cacheName: string;
}
export const CachesFlushInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  cacheName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageCache/caches/{cacheName}/flush",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<CachesFlushInput>;

// Output Schema
export type CachesFlushOutput = void;
export const CachesFlushOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<CachesFlushOutput>;

// The operation
/**
 * Tells a cache to write all dirty data to the Storage Target(s). During the flush, clients will see errors returned until the flush is complete.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cacheName - Name of cache. Length of name must not be greater than 80 and chars must be from the [-0-9a-zA-Z_] char class.
 */
export const CachesFlush = /*@__PURE__*/ API.make(() => ({
  inputSchema: CachesFlushInput,
  outputSchema: CachesFlushOutput,
}));
// Input Schema
export interface CachesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  cacheName: string;
}
export const CachesGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  cacheName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageCache/caches/{cacheName}",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<CachesGetInput>;

// Output Schema
export interface CachesGetOutput {
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
export const CachesGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<CachesGetOutput>;

// The operation
/**
 * Returns a cache.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cacheName - Name of cache. Length of name must not be greater than 80 and chars must be from the [-0-9a-zA-Z_] char class.
 */
export const CachesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: CachesGetInput,
  outputSchema: CachesGetOutput,
}));
// Input Schema
export interface CachesListInput {
  subscriptionId: string;
}
export const CachesListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.StorageCache/caches",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<CachesListInput>;

// Output Schema
export interface CachesListOutput {
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
export const CachesListOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<CachesListOutput>;

// The operation
/**
 * Returns all caches the user has access to under a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const CachesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: CachesListInput,
  outputSchema: CachesListOutput,
}));
// Input Schema
export interface CachesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const CachesListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageCache/caches",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<CachesListByResourceGroupInput>;

// Output Schema
export interface CachesListByResourceGroupOutput {
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
export const CachesListByResourceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<CachesListByResourceGroupOutput>;

// The operation
/**
 * Returns all caches the user has access to under a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const CachesListByResourceGroup = /*@__PURE__*/ API.make(() => ({
  inputSchema: CachesListByResourceGroupInput,
  outputSchema: CachesListByResourceGroupOutput,
}));
// Input Schema
export interface CachesPausePrimingJobInput {
  subscriptionId: string;
  resourceGroupName: string;
  cacheName: string;
  primingJobId: string;
}
export const CachesPausePrimingJobInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    cacheName: Schema.String.pipe(T.PathParam()),
    primingJobId: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageCache/caches/{cacheName}/pausePrimingJob",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<CachesPausePrimingJobInput>;

// Output Schema
export type CachesPausePrimingJobOutput = void;
export const CachesPausePrimingJobOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<CachesPausePrimingJobOutput>;

// The operation
/**
 * Schedule a priming job to be paused.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cacheName - Name of cache. Length of name must not be greater than 80 and chars must be from the [-0-9a-zA-Z_] char class.
 */
export const CachesPausePrimingJob = /*@__PURE__*/ API.make(() => ({
  inputSchema: CachesPausePrimingJobInput,
  outputSchema: CachesPausePrimingJobOutput,
}));
// Input Schema
export interface CachesResumePrimingJobInput {
  subscriptionId: string;
  resourceGroupName: string;
  cacheName: string;
  primingJobId: string;
}
export const CachesResumePrimingJobInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    cacheName: Schema.String.pipe(T.PathParam()),
    primingJobId: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageCache/caches/{cacheName}/resumePrimingJob",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<CachesResumePrimingJobInput>;

// Output Schema
export type CachesResumePrimingJobOutput = void;
export const CachesResumePrimingJobOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<CachesResumePrimingJobOutput>;

// The operation
/**
 * Resumes a paused priming job.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cacheName - Name of cache. Length of name must not be greater than 80 and chars must be from the [-0-9a-zA-Z_] char class.
 */
export const CachesResumePrimingJob = /*@__PURE__*/ API.make(() => ({
  inputSchema: CachesResumePrimingJobInput,
  outputSchema: CachesResumePrimingJobOutput,
}));
// Input Schema
export interface CachesSpaceAllocationInput {
  subscriptionId: string;
  resourceGroupName: string;
  cacheName: string;
}
export const CachesSpaceAllocationInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    cacheName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageCache/caches/{cacheName}/spaceAllocation",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<CachesSpaceAllocationInput>;

// Output Schema
export type CachesSpaceAllocationOutput = void;
export const CachesSpaceAllocationOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<CachesSpaceAllocationOutput>;

// The operation
/**
 * Update cache space allocation.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cacheName - Name of cache. Length of name must not be greater than 80 and chars must be from the [-0-9a-zA-Z_] char class.
 */
export const CachesSpaceAllocation = /*@__PURE__*/ API.make(() => ({
  inputSchema: CachesSpaceAllocationInput,
  outputSchema: CachesSpaceAllocationOutput,
}));
// Input Schema
export interface CachesStartInput {
  subscriptionId: string;
  resourceGroupName: string;
  cacheName: string;
}
export const CachesStartInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  cacheName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageCache/caches/{cacheName}/start",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<CachesStartInput>;

// Output Schema
export type CachesStartOutput = void;
export const CachesStartOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<CachesStartOutput>;

// The operation
/**
 * Tells a Stopped state cache to transition to Active state.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cacheName - Name of cache. Length of name must not be greater than 80 and chars must be from the [-0-9a-zA-Z_] char class.
 */
export const CachesStart = /*@__PURE__*/ API.make(() => ({
  inputSchema: CachesStartInput,
  outputSchema: CachesStartOutput,
}));
// Input Schema
export interface CachesStartPrimingJobInput {
  subscriptionId: string;
  resourceGroupName: string;
  cacheName: string;
  primingJobName: string;
  primingManifestUrl: string;
  primingJobId?: string;
  primingJobState?: "Queued" | "Running" | "Paused" | "Complete";
  primingJobStatus?: string;
  primingJobDetails?: string;
  primingJobPercentComplete?: number;
}
export const CachesStartPrimingJobInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    cacheName: Schema.String.pipe(T.PathParam()),
    primingJobName: Schema.String,
    primingManifestUrl: Schema.String,
    primingJobId: Schema.optional(Schema.String),
    primingJobState: Schema.optional(
      Schema.Literals(["Queued", "Running", "Paused", "Complete"]),
    ),
    primingJobStatus: Schema.optional(Schema.String),
    primingJobDetails: Schema.optional(Schema.String),
    primingJobPercentComplete: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageCache/caches/{cacheName}/startPrimingJob",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<CachesStartPrimingJobInput>;

// Output Schema
export type CachesStartPrimingJobOutput = void;
export const CachesStartPrimingJobOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<CachesStartPrimingJobOutput>;

// The operation
/**
 * Create a priming job. This operation is only allowed when the cache is healthy.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cacheName - Name of cache. Length of name must not be greater than 80 and chars must be from the [-0-9a-zA-Z_] char class.
 */
export const CachesStartPrimingJob = /*@__PURE__*/ API.make(() => ({
  inputSchema: CachesStartPrimingJobInput,
  outputSchema: CachesStartPrimingJobOutput,
}));
// Input Schema
export interface CachesStopInput {
  subscriptionId: string;
  resourceGroupName: string;
  cacheName: string;
}
export const CachesStopInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  cacheName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageCache/caches/{cacheName}/stop",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<CachesStopInput>;

// Output Schema
export type CachesStopOutput = void;
export const CachesStopOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<CachesStopOutput>;

// The operation
/**
 * Tells an Active cache to transition to Stopped state.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cacheName - Name of cache. Length of name must not be greater than 80 and chars must be from the [-0-9a-zA-Z_] char class.
 */
export const CachesStop = /*@__PURE__*/ API.make(() => ({
  inputSchema: CachesStopInput,
  outputSchema: CachesStopOutput,
}));
// Input Schema
export interface CachesStopPrimingJobInput {
  subscriptionId: string;
  resourceGroupName: string;
  cacheName: string;
  primingJobId: string;
}
export const CachesStopPrimingJobInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    cacheName: Schema.String.pipe(T.PathParam()),
    primingJobId: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageCache/caches/{cacheName}/stopPrimingJob",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<CachesStopPrimingJobInput>;

// Output Schema
export type CachesStopPrimingJobOutput = void;
export const CachesStopPrimingJobOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<CachesStopPrimingJobOutput>;

// The operation
/**
 * Schedule a priming job for deletion.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cacheName - Name of cache. Length of name must not be greater than 80 and chars must be from the [-0-9a-zA-Z_] char class.
 */
export const CachesStopPrimingJob = /*@__PURE__*/ API.make(() => ({
  inputSchema: CachesStopPrimingJobInput,
  outputSchema: CachesStopPrimingJobOutput,
}));
// Input Schema
export interface CachesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  cacheName: string;
  properties?: {
    cacheSizeGB?: number;
    health?: {
      state?:
        | "Unknown"
        | "Healthy"
        | "Degraded"
        | "Down"
        | "Transitioning"
        | "Stopping"
        | "Stopped"
        | "Upgrading"
        | "Flushing"
        | "WaitingForKey"
        | "StartFailed"
        | "UpgradeFailed";
      statusDescription?: string;
      conditions?: { timestamp?: string; message?: string }[];
    };
    mountAddresses?: string[];
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Creating"
      | "Deleting"
      | "Updating";
    subnet?: string;
    upgradeStatus?: {
      currentFirmwareVersion?: string;
      firmwareUpdateStatus?: "available" | "unavailable";
      firmwareUpdateDeadline?: string;
      lastFirmwareUpdate?: string;
      pendingFirmwareVersion?: string;
    };
    upgradeSettings?: {
      upgradeScheduleEnabled?: boolean;
      scheduledTime?: string;
    };
    networkSettings?: {
      mtu?: number;
      utilityAddresses?: string[];
      dnsServers?: string[];
      dnsSearchDomain?: string;
      ntpServer?: string;
    };
    encryptionSettings?: {
      keyEncryptionKey?: { keyUrl: string; sourceVault: { id?: string } };
      rotationToLatestKeyVersionEnabled?: boolean;
    };
    securitySettings?: {
      accessPolicies?: {
        name: string;
        accessRules: {
          scope: "default" | "network" | "host";
          filter?: string;
          access: "no" | "ro" | "rw";
          suid?: boolean;
          submountAccess?: boolean;
          rootSquash?: boolean;
          anonymousUID?: string;
          anonymousGID?: string;
        }[];
      }[];
    };
    directoryServicesSettings?: {
      activeDirectory?: {
        primaryDnsIpAddress: string;
        secondaryDnsIpAddress?: string;
        domainName: string;
        domainNetBiosName: string;
        cacheNetBiosName: string;
        domainJoined?: "Yes" | "No" | "Error";
        credentials?: {
          username: string;
          password?: string | Redacted.Redacted<string>;
        };
      };
      usernameDownload?: {
        extendedGroups?: boolean;
        usernameSource?: "AD" | "LDAP" | "File" | "None";
        groupFileURI?: string;
        userFileURI?: string;
        ldapServer?: string;
        ldapBaseDN?: string;
        encryptLdapConnection?: boolean;
        requireValidCertificate?: boolean;
        autoDownloadCertificate?: boolean;
        caCertificateURI?: string;
        usernameDownloaded?: "Yes" | "No" | "Error";
        credentials?: {
          bindDn?: string;
          bindPassword?: string | Redacted.Redacted<string>;
        };
      };
    };
    zones?: string[];
    primingJobs?: {
      primingJobName: string;
      primingManifestUrl: string;
      primingJobId?: string;
      primingJobState?: "Queued" | "Running" | "Paused" | "Complete";
      primingJobStatus?: string;
      primingJobDetails?: string;
      primingJobPercentComplete?: number;
    }[];
    spaceAllocation?: { name?: string; allocationPercentage?: number }[];
  };
  tags?: Record<string, string>;
  location?: string;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type?:
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned, UserAssigned"
      | "None";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
  sku?: { name?: string };
}
export const CachesUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  cacheName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      cacheSizeGB: Schema.optional(Schema.Number),
      health: Schema.optional(
        Schema.Struct({
          state: Schema.optional(
            Schema.Literals([
              "Unknown",
              "Healthy",
              "Degraded",
              "Down",
              "Transitioning",
              "Stopping",
              "Stopped",
              "Upgrading",
              "Flushing",
              "WaitingForKey",
              "StartFailed",
              "UpgradeFailed",
            ]),
          ),
          statusDescription: Schema.optional(Schema.String),
          conditions: Schema.optional(
            Schema.Array(
              Schema.Struct({
                timestamp: Schema.optional(Schema.String),
                message: Schema.optional(Schema.String),
              }),
            ),
          ),
        }),
      ),
      mountAddresses: Schema.optional(Schema.Array(Schema.String)),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Succeeded",
          "Failed",
          "Canceled",
          "Creating",
          "Deleting",
          "Updating",
        ]),
      ),
      subnet: Schema.optional(Schema.String),
      upgradeStatus: Schema.optional(
        Schema.Struct({
          currentFirmwareVersion: Schema.optional(Schema.String),
          firmwareUpdateStatus: Schema.optional(
            Schema.Literals(["available", "unavailable"]),
          ),
          firmwareUpdateDeadline: Schema.optional(Schema.String),
          lastFirmwareUpdate: Schema.optional(Schema.String),
          pendingFirmwareVersion: Schema.optional(Schema.String),
        }),
      ),
      upgradeSettings: Schema.optional(
        Schema.Struct({
          upgradeScheduleEnabled: Schema.optional(Schema.Boolean),
          scheduledTime: Schema.optional(Schema.String),
        }),
      ),
      networkSettings: Schema.optional(
        Schema.Struct({
          mtu: Schema.optional(Schema.Number),
          utilityAddresses: Schema.optional(Schema.Array(Schema.String)),
          dnsServers: Schema.optional(Schema.Array(Schema.String)),
          dnsSearchDomain: Schema.optional(Schema.String),
          ntpServer: Schema.optional(Schema.String),
        }),
      ),
      encryptionSettings: Schema.optional(
        Schema.Struct({
          keyEncryptionKey: Schema.optional(
            Schema.Struct({
              keyUrl: Schema.String,
              sourceVault: Schema.Struct({
                id: Schema.optional(Schema.String),
              }),
            }),
          ),
          rotationToLatestKeyVersionEnabled: Schema.optional(Schema.Boolean),
        }),
      ),
      securitySettings: Schema.optional(
        Schema.Struct({
          accessPolicies: Schema.optional(
            Schema.Array(
              Schema.Struct({
                name: Schema.String,
                accessRules: Schema.Array(
                  Schema.Struct({
                    scope: Schema.Literals(["default", "network", "host"]),
                    filter: Schema.optional(Schema.String),
                    access: Schema.Literals(["no", "ro", "rw"]),
                    suid: Schema.optional(Schema.Boolean),
                    submountAccess: Schema.optional(Schema.Boolean),
                    rootSquash: Schema.optional(Schema.Boolean),
                    anonymousUID: Schema.optional(Schema.String),
                    anonymousGID: Schema.optional(Schema.String),
                  }),
                ),
              }),
            ),
          ),
        }),
      ),
      directoryServicesSettings: Schema.optional(
        Schema.Struct({
          activeDirectory: Schema.optional(
            Schema.Struct({
              primaryDnsIpAddress: Schema.String,
              secondaryDnsIpAddress: Schema.optional(Schema.String),
              domainName: Schema.String,
              domainNetBiosName: Schema.String,
              cacheNetBiosName: Schema.String,
              domainJoined: Schema.optional(
                Schema.Literals(["Yes", "No", "Error"]),
              ),
              credentials: Schema.optional(
                Schema.Struct({
                  username: Schema.String,
                  password: Schema.optional(SensitiveString),
                }),
              ),
            }),
          ),
          usernameDownload: Schema.optional(
            Schema.Struct({
              extendedGroups: Schema.optional(Schema.Boolean),
              usernameSource: Schema.optional(
                Schema.Literals(["AD", "LDAP", "File", "None"]),
              ),
              groupFileURI: Schema.optional(Schema.String),
              userFileURI: Schema.optional(Schema.String),
              ldapServer: Schema.optional(Schema.String),
              ldapBaseDN: Schema.optional(Schema.String),
              encryptLdapConnection: Schema.optional(Schema.Boolean),
              requireValidCertificate: Schema.optional(Schema.Boolean),
              autoDownloadCertificate: Schema.optional(Schema.Boolean),
              caCertificateURI: Schema.optional(Schema.String),
              usernameDownloaded: Schema.optional(
                Schema.Literals(["Yes", "No", "Error"]),
              ),
              credentials: Schema.optional(
                Schema.Struct({
                  bindDn: Schema.optional(Schema.String),
                  bindPassword: Schema.optional(SensitiveString),
                }),
              ),
            }),
          ),
        }),
      ),
      zones: Schema.optional(Schema.Array(Schema.String)),
      primingJobs: Schema.optional(
        Schema.Array(
          Schema.Struct({
            primingJobName: Schema.String,
            primingManifestUrl: Schema.String,
            primingJobId: Schema.optional(Schema.String),
            primingJobState: Schema.optional(
              Schema.Literals(["Queued", "Running", "Paused", "Complete"]),
            ),
            primingJobStatus: Schema.optional(Schema.String),
            primingJobDetails: Schema.optional(Schema.String),
            primingJobPercentComplete: Schema.optional(Schema.Number),
          }),
        ),
      ),
      spaceAllocation: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.optional(Schema.String),
            allocationPercentage: Schema.optional(Schema.Number),
          }),
        ),
      ),
    }),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.optional(Schema.String),
  identity: Schema.optional(
    Schema.Struct({
      principalId: Schema.optional(Schema.String),
      tenantId: Schema.optional(Schema.String),
      type: Schema.optional(
        Schema.Literals([
          "SystemAssigned",
          "UserAssigned",
          "SystemAssigned, UserAssigned",
          "None",
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
    }),
  ),
  sku: Schema.optional(
    Schema.Struct({
      name: Schema.optional(Schema.String),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageCache/caches/{cacheName}",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<CachesUpdateInput>;

// Output Schema
export interface CachesUpdateOutput {
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
export const CachesUpdateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<CachesUpdateOutput>;

// The operation
/**
 * Update a cache instance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cacheName - Name of cache. Length of name must not be greater than 80 and chars must be from the [-0-9a-zA-Z_] char class.
 */
export const CachesUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: CachesUpdateInput,
  outputSchema: CachesUpdateOutput,
}));
// Input Schema
export interface CachesUpgradeFirmwareInput {
  subscriptionId: string;
  resourceGroupName: string;
  cacheName: string;
}
export const CachesUpgradeFirmwareInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    cacheName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageCache/caches/{cacheName}/upgrade",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<CachesUpgradeFirmwareInput>;

// Output Schema
export type CachesUpgradeFirmwareOutput = void;
export const CachesUpgradeFirmwareOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<CachesUpgradeFirmwareOutput>;

// The operation
/**
 * Upgrade a cache's firmware if a new version is available. Otherwise, this operation has no effect.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cacheName - Name of cache. Length of name must not be greater than 80 and chars must be from the [-0-9a-zA-Z_] char class.
 */
export const CachesUpgradeFirmware = /*@__PURE__*/ API.make(() => ({
  inputSchema: CachesUpgradeFirmwareInput,
  outputSchema: CachesUpgradeFirmwareOutput,
}));
// Input Schema
export interface CheckAmlFSSubnetsInput {
  subscriptionId: string;
  filesystemSubnet?: string;
  storageCapacityTiB?: number;
  sku?: { name?: string };
  location?: string;
}
export const CheckAmlFSSubnetsInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  filesystemSubnet: Schema.optional(Schema.String),
  storageCapacityTiB: Schema.optional(Schema.Number),
  sku: Schema.optional(
    Schema.Struct({
      name: Schema.optional(Schema.String),
    }),
  ),
  location: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.StorageCache/checkAmlFSSubnets",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<CheckAmlFSSubnetsInput>;

// Output Schema
export type CheckAmlFSSubnetsOutput = void;
export const CheckAmlFSSubnetsOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<CheckAmlFSSubnetsOutput>;

// The operation
/**
 * Check that subnets will be valid for AML file system create calls.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const checkAmlFSSubnets = /*@__PURE__*/ API.make(() => ({
  inputSchema: CheckAmlFSSubnetsInput,
  outputSchema: CheckAmlFSSubnetsOutput,
}));
// Input Schema
export interface ExpansionJobsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  amlFilesystemName: string;
  expansionJobName: string;
  properties?: {
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Creating"
      | "Deleting"
      | "Updating"
      | "Canceled";
    newStorageCapacityTiB?: number;
    status?: {
      state?:
        | "InProgress"
        | "Completed"
        | "Failed"
        | "Deleting"
        | "RollingBack";
      statusCode?: string;
      statusMessage?: string;
      percentComplete?: number;
      startTimeUTC?: string;
      completionTimeUTC?: string;
    };
  };
  tags?: Record<string, string>;
  location: string;
}
export const ExpansionJobsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    amlFilesystemName: Schema.String.pipe(T.PathParam()),
    expansionJobName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Creating",
            "Deleting",
            "Updating",
            "Canceled",
          ]),
        ),
        newStorageCapacityTiB: Schema.optional(Schema.Number),
        status: Schema.optional(
          Schema.Struct({
            state: Schema.optional(
              Schema.Literals([
                "InProgress",
                "Completed",
                "Failed",
                "Deleting",
                "RollingBack",
              ]),
            ),
            statusCode: Schema.optional(Schema.String),
            statusMessage: Schema.optional(Schema.String),
            percentComplete: Schema.optional(Schema.Number),
            startTimeUTC: Schema.optional(Schema.String),
            completionTimeUTC: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageCache/amlFilesystems/{amlFilesystemName}/expansionJobs/{expansionJobName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ExpansionJobsCreateOrUpdateInput>;

// Output Schema
export interface ExpansionJobsCreateOrUpdateOutput {
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
export const ExpansionJobsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ExpansionJobsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update an expansion job.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param amlFilesystemName - Name for the AML file system. Allows alphanumerics, underscores, and hyphens. Start and end with alphanumeric.
 * @param expansionJobName - Name for the expansion job. Allows alphanumerics, underscores, and hyphens. Start and end with alphanumeric.
 */
export const expansionJobsCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ExpansionJobsCreateOrUpdateInput,
  outputSchema: ExpansionJobsCreateOrUpdateOutput,
}));
// Input Schema
export interface ExpansionJobsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  amlFilesystemName: string;
  expansionJobName: string;
}
export const ExpansionJobsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    amlFilesystemName: Schema.String.pipe(T.PathParam()),
    expansionJobName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageCache/amlFilesystems/{amlFilesystemName}/expansionJobs/{expansionJobName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ExpansionJobsDeleteInput>;

// Output Schema
export type ExpansionJobsDeleteOutput = void;
export const ExpansionJobsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ExpansionJobsDeleteOutput>;

// The operation
/**
 * Schedules an expansion job for deletion.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param amlFilesystemName - Name for the AML file system. Allows alphanumerics, underscores, and hyphens. Start and end with alphanumeric.
 * @param expansionJobName - Name for the expansion job. Allows alphanumerics, underscores, and hyphens. Start and end with alphanumeric.
 */
export const expansionJobsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: ExpansionJobsDeleteInput,
  outputSchema: ExpansionJobsDeleteOutput,
}));
// Input Schema
export interface ExpansionJobsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  amlFilesystemName: string;
  expansionJobName: string;
}
export const ExpansionJobsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  amlFilesystemName: Schema.String.pipe(T.PathParam()),
  expansionJobName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageCache/amlFilesystems/{amlFilesystemName}/expansionJobs/{expansionJobName}",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<ExpansionJobsGetInput>;

// Output Schema
export interface ExpansionJobsGetOutput {
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
export const ExpansionJobsGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ExpansionJobsGetOutput>;

// The operation
/**
 * Returns an expansion job.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param amlFilesystemName - Name for the AML file system. Allows alphanumerics, underscores, and hyphens. Start and end with alphanumeric.
 * @param expansionJobName - Name for the expansion job. Allows alphanumerics, underscores, and hyphens. Start and end with alphanumeric.
 */
export const expansionJobsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ExpansionJobsGetInput,
  outputSchema: ExpansionJobsGetOutput,
}));
// Input Schema
export interface ExpansionJobsListByAmlFilesystemInput {
  subscriptionId: string;
  resourceGroupName: string;
  amlFilesystemName: string;
}
export const ExpansionJobsListByAmlFilesystemInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    amlFilesystemName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageCache/amlFilesystems/{amlFilesystemName}/expansionJobs",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ExpansionJobsListByAmlFilesystemInput>;

// Output Schema
export interface ExpansionJobsListByAmlFilesystemOutput {
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
export const ExpansionJobsListByAmlFilesystemOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<ExpansionJobsListByAmlFilesystemOutput>;

// The operation
/**
 * Returns all the expansion jobs the user has access to under an AML File System.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param amlFilesystemName - Name for the AML file system. Allows alphanumerics, underscores, and hyphens. Start and end with alphanumeric.
 */
export const expansionJobsListByAmlFilesystem =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ExpansionJobsListByAmlFilesystemInput,
    outputSchema: ExpansionJobsListByAmlFilesystemOutput,
  }));
// Input Schema
export interface ExpansionJobsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  amlFilesystemName: string;
  expansionJobName: string;
  tags?: Record<string, string>;
}
export const ExpansionJobsUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    amlFilesystemName: Schema.String.pipe(T.PathParam()),
    expansionJobName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageCache/amlFilesystems/{amlFilesystemName}/expansionJobs/{expansionJobName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ExpansionJobsUpdateInput>;

// Output Schema
export interface ExpansionJobsUpdateOutput {
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
export const ExpansionJobsUpdateOutput =
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
  }) as unknown as Schema.Codec<ExpansionJobsUpdateOutput>;

// The operation
/**
 * Update an expansion job instance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param amlFilesystemName - Name for the AML file system. Allows alphanumerics, underscores, and hyphens. Start and end with alphanumeric.
 * @param expansionJobName - Name for the expansion job. Allows alphanumerics, underscores, and hyphens. Start and end with alphanumeric.
 */
export const expansionJobsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ExpansionJobsUpdateInput,
  outputSchema: ExpansionJobsUpdateOutput,
}));
// Input Schema
export interface GetRequiredAmlFSSubnetsSizeInput {
  subscriptionId: string;
  storageCapacityTiB?: number;
  sku?: { name?: string };
}
export const GetRequiredAmlFSSubnetsSizeInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    storageCapacityTiB: Schema.optional(Schema.Number),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.StorageCache/getRequiredAmlFSSubnetsSize",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<GetRequiredAmlFSSubnetsSizeInput>;

// Output Schema
export interface GetRequiredAmlFSSubnetsSizeOutput {
  filesystemSubnetSize?: number;
}
export const GetRequiredAmlFSSubnetsSizeOutput =
  /*@__PURE__*/ Schema.Struct({
    filesystemSubnetSize: Schema.optional(Schema.Number),
  }) as unknown as Schema.Codec<GetRequiredAmlFSSubnetsSizeOutput>;

// The operation
/**
 * Get the number of available IP addresses needed for the AML file system information provided.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const getRequiredAmlFSSubnetsSize = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetRequiredAmlFSSubnetsSizeInput,
  outputSchema: GetRequiredAmlFSSubnetsSizeOutput,
}));
// Input Schema
export interface ImportJobsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  amlFilesystemName: string;
  importJobName: string;
  properties?: {
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Creating"
      | "Deleting"
      | "Updating"
      | "Canceled";
    adminStatus?: "Active" | "Cancel";
    importPrefixes?: string[];
    conflictResolutionMode?:
      | "Fail"
      | "Skip"
      | "OverwriteIfDirty"
      | "OverwriteAlways";
    maximumErrors?: number;
    status?: {
      state?:
        | "InProgress"
        | "Cancelling"
        | "Canceled"
        | "Completed"
        | "CompletedPartial"
        | "Failed";
      statusMessage?: string;
      totalBlobsWalked?: number;
      blobsWalkedPerSecond?: number;
      totalBlobsImported?: number;
      importedFiles?: number;
      importedDirectories?: number;
      importedSymlinks?: number;
      preexistingFiles?: number;
      preexistingDirectories?: number;
      preexistingSymlinks?: number;
      blobsImportedPerSecond?: number;
      lastCompletionTime?: string;
      lastStartedTime?: string;
      totalErrors?: number;
      totalConflicts?: number;
    };
  };
  tags?: Record<string, string>;
  location: string;
}
export const ImportJobsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    amlFilesystemName: Schema.String.pipe(T.PathParam()),
    importJobName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Creating",
            "Deleting",
            "Updating",
            "Canceled",
          ]),
        ),
        adminStatus: Schema.optional(Schema.Literals(["Active", "Cancel"])),
        importPrefixes: Schema.optional(Schema.Array(Schema.String)),
        conflictResolutionMode: Schema.optional(
          Schema.Literals([
            "Fail",
            "Skip",
            "OverwriteIfDirty",
            "OverwriteAlways",
          ]),
        ),
        maximumErrors: Schema.optional(Schema.Number),
        status: Schema.optional(
          Schema.Struct({
            state: Schema.optional(
              Schema.Literals([
                "InProgress",
                "Cancelling",
                "Canceled",
                "Completed",
                "CompletedPartial",
                "Failed",
              ]),
            ),
            statusMessage: Schema.optional(Schema.String),
            totalBlobsWalked: Schema.optional(Schema.Number),
            blobsWalkedPerSecond: Schema.optional(Schema.Number),
            totalBlobsImported: Schema.optional(Schema.Number),
            importedFiles: Schema.optional(Schema.Number),
            importedDirectories: Schema.optional(Schema.Number),
            importedSymlinks: Schema.optional(Schema.Number),
            preexistingFiles: Schema.optional(Schema.Number),
            preexistingDirectories: Schema.optional(Schema.Number),
            preexistingSymlinks: Schema.optional(Schema.Number),
            blobsImportedPerSecond: Schema.optional(Schema.Number),
            lastCompletionTime: Schema.optional(Schema.String),
            lastStartedTime: Schema.optional(Schema.String),
            totalErrors: Schema.optional(Schema.Number),
            totalConflicts: Schema.optional(Schema.Number),
          }),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageCache/amlFilesystems/{amlFilesystemName}/importJobs/{importJobName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ImportJobsCreateOrUpdateInput>;

// Output Schema
export interface ImportJobsCreateOrUpdateOutput {
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
export const ImportJobsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ImportJobsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update an import job.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param amlFilesystemName - Name for the AML file system. Allows alphanumerics, underscores, and hyphens. Start and end with alphanumeric.
 * @param importJobName - Name for the import job. Allows alphanumerics, underscores, and hyphens. Start and end with alphanumeric.
 */
export const importJobsCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ImportJobsCreateOrUpdateInput,
  outputSchema: ImportJobsCreateOrUpdateOutput,
}));
// Input Schema
export interface ImportJobsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  amlFilesystemName: string;
  importJobName: string;
}
export const ImportJobsDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  amlFilesystemName: Schema.String.pipe(T.PathParam()),
  importJobName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageCache/amlFilesystems/{amlFilesystemName}/importJobs/{importJobName}",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<ImportJobsDeleteInput>;

// Output Schema
export type ImportJobsDeleteOutput = void;
export const ImportJobsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ImportJobsDeleteOutput>;

// The operation
/**
 * Schedules an import job for deletion.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param amlFilesystemName - Name for the AML file system. Allows alphanumerics, underscores, and hyphens. Start and end with alphanumeric.
 * @param importJobName - Name for the import job. Allows alphanumerics, underscores, and hyphens. Start and end with alphanumeric.
 */
export const importJobsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: ImportJobsDeleteInput,
  outputSchema: ImportJobsDeleteOutput,
}));
// Input Schema
export interface ImportJobsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  amlFilesystemName: string;
  importJobName: string;
}
export const ImportJobsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  amlFilesystemName: Schema.String.pipe(T.PathParam()),
  importJobName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageCache/amlFilesystems/{amlFilesystemName}/importJobs/{importJobName}",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<ImportJobsGetInput>;

// Output Schema
export interface ImportJobsGetOutput {
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
export const ImportJobsGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ImportJobsGetOutput>;

// The operation
/**
 * Returns an import job.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param amlFilesystemName - Name for the AML file system. Allows alphanumerics, underscores, and hyphens. Start and end with alphanumeric.
 * @param importJobName - Name for the import job. Allows alphanumerics, underscores, and hyphens. Start and end with alphanumeric.
 */
export const importJobsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ImportJobsGetInput,
  outputSchema: ImportJobsGetOutput,
}));
// Input Schema
export interface ImportJobsListByAmlFilesystemInput {
  subscriptionId: string;
  resourceGroupName: string;
  amlFilesystemName: string;
}
export const ImportJobsListByAmlFilesystemInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    amlFilesystemName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageCache/amlFilesystems/{amlFilesystemName}/importJobs",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<ImportJobsListByAmlFilesystemInput>;

// Output Schema
export interface ImportJobsListByAmlFilesystemOutput {
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
export const ImportJobsListByAmlFilesystemOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<ImportJobsListByAmlFilesystemOutput>;

// The operation
/**
 * Returns all import jobs the user has access to under an AML File System.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param amlFilesystemName - Name for the AML file system. Allows alphanumerics, underscores, and hyphens. Start and end with alphanumeric.
 */
export const importJobsListByAmlFilesystem =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ImportJobsListByAmlFilesystemInput,
    outputSchema: ImportJobsListByAmlFilesystemOutput,
  }));
// Input Schema
export interface ImportJobsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  amlFilesystemName: string;
  importJobName: string;
  tags?: Record<string, string>;
  properties?: { adminStatus?: "Active" | "Cancel" };
}
export const ImportJobsUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  amlFilesystemName: Schema.String.pipe(T.PathParam()),
  importJobName: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  properties: Schema.optional(
    Schema.Struct({
      adminStatus: Schema.optional(Schema.Literals(["Active", "Cancel"])),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageCache/amlFilesystems/{amlFilesystemName}/importJobs/{importJobName}",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<ImportJobsUpdateInput>;

// Output Schema
export interface ImportJobsUpdateOutput {
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
export const ImportJobsUpdateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ImportJobsUpdateOutput>;

// The operation
/**
 * Update an import job instance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param amlFilesystemName - Name for the AML file system. Allows alphanumerics, underscores, and hyphens. Start and end with alphanumeric.
 * @param importJobName - Name for the import job. Allows alphanumerics, underscores, and hyphens. Start and end with alphanumeric.
 */
export const importJobsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ImportJobsUpdateInput,
  outputSchema: ImportJobsUpdateOutput,
}));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.StorageCache/operations",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<OperationsListInput>;

// Output Schema
export interface OperationsListOutput {
  value?: {
    display?: {
      operation?: string;
      provider?: string;
      resource?: string;
      description?: string;
    };
    origin?: string;
    isDataAction?: boolean;
    name?: string;
    properties?: {
      serviceSpecification?: {
        metricSpecifications?: {
          name?: string;
          displayName?: string;
          displayDescription?: string;
          unit?: string;
          aggregationType?: string;
          supportedAggregationTypes?: (
            | "NotSpecified"
            | "None"
            | "Average"
            | "Minimum"
            | "Maximum"
            | "Total"
            | "Count"
          )[];
          metricClass?: string;
          dimensions?: {
            name?: string;
            displayName?: string;
            internalName?: string;
            toBeExportedForShoebox?: boolean;
          }[];
        }[];
        logSpecifications?: { name?: string; displayName?: string }[];
      };
    };
  }[];
  nextLink?: string;
}
export const OperationsListOutput = /*@__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        display: Schema.optional(
          Schema.Struct({
            operation: Schema.optional(Schema.String),
            provider: Schema.optional(Schema.String),
            resource: Schema.optional(Schema.String),
            description: Schema.optional(Schema.String),
          }),
        ),
        origin: Schema.optional(Schema.String),
        isDataAction: Schema.optional(Schema.Boolean),
        name: Schema.optional(Schema.String),
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
                        Schema.Array(
                          Schema.Literals([
                            "NotSpecified",
                            "None",
                            "Average",
                            "Minimum",
                            "Maximum",
                            "Total",
                            "Count",
                          ]),
                        ),
                      ),
                      metricClass: Schema.optional(Schema.String),
                      dimensions: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            name: Schema.optional(Schema.String),
                            displayName: Schema.optional(Schema.String),
                            internalName: Schema.optional(Schema.String),
                            toBeExportedForShoebox: Schema.optional(
                              Schema.Boolean,
                            ),
                          }),
                        ),
                      ),
                    }),
                  ),
                ),
                logSpecifications: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      name: Schema.optional(Schema.String),
                      displayName: Schema.optional(Schema.String),
                    }),
                  ),
                ),
              }),
            ),
          }),
        ),
      }),
    ),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<OperationsListOutput>;

// The operation
/**
 * Lists all of the available Resource Provider operations.
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface SkusListInput {
  subscriptionId: string;
}
export const SkusListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.StorageCache/skus",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<SkusListInput>;

// Output Schema
export interface SkusListOutput {
  value?: {
    resourceType?: string;
    capabilities?: { name?: string; value?: string }[];
    locations?: string[];
    locationInfo?: { location?: string; zones?: string[] }[];
    name?: string;
    restrictions?: {
      type?: string;
      values?: string[];
      reasonCode?: "QuotaId" | "NotAvailableForSubscription";
    }[];
  }[];
  nextLink?: string;
}
export const SkusListOutput = /*@__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        resourceType: Schema.optional(Schema.String),
        capabilities: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              value: Schema.optional(Schema.String),
            }),
          ),
        ),
        locations: Schema.optional(Schema.Array(Schema.String)),
        locationInfo: Schema.optional(
          Schema.Array(
            Schema.Struct({
              location: Schema.optional(Schema.String),
              zones: Schema.optional(Schema.Array(Schema.String)),
            }),
          ),
        ),
        name: Schema.optional(Schema.String),
        restrictions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              type: Schema.optional(Schema.String),
              values: Schema.optional(Schema.Array(Schema.String)),
              reasonCode: Schema.optional(
                Schema.Literals(["QuotaId", "NotAvailableForSubscription"]),
              ),
            }),
          ),
        ),
      }),
    ),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<SkusListOutput>;

// The operation
/**
 * Get the list of StorageCache.Cache SKUs available to this subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const SkusList = /*@__PURE__*/ API.make(() => ({
  inputSchema: SkusListInput,
  outputSchema: SkusListOutput,
}));
// Input Schema
export interface StorageTargetFlushInput {
  subscriptionId: string;
  resourceGroupName: string;
  cacheName: string;
  storageTargetName: string;
}
export const StorageTargetFlushInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    cacheName: Schema.String.pipe(T.PathParam()),
    storageTargetName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageCache/caches/{cacheName}/storageTargets/{storageTargetName}/flush",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<StorageTargetFlushInput>;

// Output Schema
export type StorageTargetFlushOutput = void;
export const StorageTargetFlushOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<StorageTargetFlushOutput>;

// The operation
/**
 * Tells the cache to write all dirty data to the Storage Target's backend storage. Client requests to this storage target's namespace will return errors until the flush operation completes.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cacheName - Name of cache. Length of name must not be greater than 80 and chars must be from the [-0-9a-zA-Z_] char class.
 * @param storageTargetName - Name of Storage Target.
 */
export const StorageTargetFlush = /*@__PURE__*/ API.make(() => ({
  inputSchema: StorageTargetFlushInput,
  outputSchema: StorageTargetFlushOutput,
}));
// Input Schema
export interface StorageTargetInvalidateInput {
  subscriptionId: string;
  resourceGroupName: string;
  cacheName: string;
  storageTargetName: string;
}
export const StorageTargetInvalidateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    cacheName: Schema.String.pipe(T.PathParam()),
    storageTargetName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageCache/caches/{cacheName}/storageTargets/{storageTargetName}/invalidate",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<StorageTargetInvalidateInput>;

// Output Schema
export type StorageTargetInvalidateOutput = void;
export const StorageTargetInvalidateOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<StorageTargetInvalidateOutput>;

// The operation
/**
 * Invalidate all cached data for a storage target. Cached files are discarded and fetched from the back end on the next request.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cacheName - Name of cache. Length of name must not be greater than 80 and chars must be from the [-0-9a-zA-Z_] char class.
 * @param storageTargetName - Name of Storage Target.
 */
export const StorageTargetInvalidate = /*@__PURE__*/ API.make(() => ({
  inputSchema: StorageTargetInvalidateInput,
  outputSchema: StorageTargetInvalidateOutput,
}));
// Input Schema
export interface StorageTargetResumeInput {
  subscriptionId: string;
  resourceGroupName: string;
  cacheName: string;
  storageTargetName: string;
}
export const StorageTargetResumeInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    cacheName: Schema.String.pipe(T.PathParam()),
    storageTargetName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageCache/caches/{cacheName}/storageTargets/{storageTargetName}/resume",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<StorageTargetResumeInput>;

// Output Schema
export type StorageTargetResumeOutput = void;
export const StorageTargetResumeOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<StorageTargetResumeOutput>;

// The operation
/**
 * Resumes client access to a previously suspended storage target.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cacheName - Name of cache. Length of name must not be greater than 80 and chars must be from the [-0-9a-zA-Z_] char class.
 * @param storageTargetName - Name of Storage Target.
 */
export const StorageTargetResume = /*@__PURE__*/ API.make(() => ({
  inputSchema: StorageTargetResumeInput,
  outputSchema: StorageTargetResumeOutput,
}));
// Input Schema
export interface StorageTargetsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  cacheName: string;
  storageTargetName: string;
  properties?: {
    junctions?: {
      namespacePath?: string;
      targetPath?: string;
      nfsExport?: string;
      nfsAccessPolicy?: string;
    }[];
    targetType: "nfs3" | "clfs" | "unknown" | "blobNfs";
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Creating"
      | "Deleting"
      | "Updating";
    state?: "Ready" | "Busy" | "Suspended" | "Flushing";
    nfs3?: {
      target?: string;
      usageModel?: string;
      verificationTimer?: number;
      writeBackTimer?: number;
    };
    clfs?: { target?: string };
    unknown?: { attributes?: Record<string, string> };
    blobNfs?: {
      target?: string;
      usageModel?: string;
      verificationTimer?: number;
      writeBackTimer?: number;
    };
    allocationPercentage?: number;
  };
  location?: string;
}
export const StorageTargetsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    cacheName: Schema.String.pipe(T.PathParam()),
    storageTargetName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        junctions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              namespacePath: Schema.optional(Schema.String),
              targetPath: Schema.optional(Schema.String),
              nfsExport: Schema.optional(Schema.String),
              nfsAccessPolicy: Schema.optional(Schema.String),
            }),
          ),
        ),
        targetType: Schema.Literals(["nfs3", "clfs", "unknown", "blobNfs"]),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Creating",
            "Deleting",
            "Updating",
          ]),
        ),
        state: Schema.optional(
          Schema.Literals(["Ready", "Busy", "Suspended", "Flushing"]),
        ),
        nfs3: Schema.optional(
          Schema.Struct({
            target: Schema.optional(Schema.String),
            usageModel: Schema.optional(Schema.String),
            verificationTimer: Schema.optional(Schema.Number),
            writeBackTimer: Schema.optional(Schema.Number),
          }),
        ),
        clfs: Schema.optional(
          Schema.Struct({
            target: Schema.optional(Schema.String),
          }),
        ),
        unknown: Schema.optional(
          Schema.Struct({
            attributes: Schema.optional(
              Schema.Record(Schema.String, Schema.String),
            ),
          }),
        ),
        blobNfs: Schema.optional(
          Schema.Struct({
            target: Schema.optional(Schema.String),
            usageModel: Schema.optional(Schema.String),
            verificationTimer: Schema.optional(Schema.Number),
            writeBackTimer: Schema.optional(Schema.Number),
          }),
        ),
        allocationPercentage: Schema.optional(Schema.Number),
      }),
    ),
    location: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageCache/caches/{cacheName}/storageTargets/{storageTargetName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<StorageTargetsCreateOrUpdateInput>;

// Output Schema
export interface StorageTargetsCreateOrUpdateOutput {
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
export const StorageTargetsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<StorageTargetsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a Storage Target. This operation is allowed at any time, but if the cache is down or unhealthy, the actual creation/modification of the Storage Target may be delayed until the cache is healthy again.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cacheName - Name of cache. Length of name must not be greater than 80 and chars must be from the [-0-9a-zA-Z_] char class.
 * @param storageTargetName - Name of Storage Target.
 */
export const StorageTargetsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: StorageTargetsCreateOrUpdateInput,
    outputSchema: StorageTargetsCreateOrUpdateOutput,
  }));
// Input Schema
export interface StorageTargetsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  cacheName: string;
  storageTargetName: string;
  force?: string;
}
export const StorageTargetsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    cacheName: Schema.String.pipe(T.PathParam()),
    storageTargetName: Schema.String.pipe(T.PathParam()),
    force: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageCache/caches/{cacheName}/storageTargets/{storageTargetName}",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<StorageTargetsDeleteInput>;

// Output Schema
export type StorageTargetsDeleteOutput = void;
export const StorageTargetsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<StorageTargetsDeleteOutput>;

// The operation
/**
 * Removes a Storage Target from a cache. This operation is allowed at any time, but if the cache is down or unhealthy, the actual removal of the Storage Target may be delayed until the cache is healthy again. Note that if the cache has data to flush to the Storage Target, the data will be flushed before the Storage Target will be deleted.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cacheName - Name of cache. Length of name must not be greater than 80 and chars must be from the [-0-9a-zA-Z_] char class.
 * @param storageTargetName - Name of Storage Target.
 * @param force - Boolean value requesting the force delete operation for a storage target. Force delete discards unwritten-data in the cache instead of flushing it to back-end storage.
 */
export const StorageTargetsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: StorageTargetsDeleteInput,
  outputSchema: StorageTargetsDeleteOutput,
}));
// Input Schema
export interface StorageTargetsDnsRefreshInput {
  subscriptionId: string;
  resourceGroupName: string;
  cacheName: string;
  storageTargetName: string;
}
export const StorageTargetsDnsRefreshInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    cacheName: Schema.String.pipe(T.PathParam()),
    storageTargetName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageCache/caches/{cacheName}/storageTargets/{storageTargetName}/dnsRefresh",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<StorageTargetsDnsRefreshInput>;

// Output Schema
export type StorageTargetsDnsRefreshOutput = void;
export const StorageTargetsDnsRefreshOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<StorageTargetsDnsRefreshOutput>;

// The operation
/**
 * Tells a storage target to refresh its DNS information.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cacheName - Name of cache. Length of name must not be greater than 80 and chars must be from the [-0-9a-zA-Z_] char class.
 * @param storageTargetName - Name of Storage Target.
 */
export const StorageTargetsDnsRefresh = /*@__PURE__*/ API.make(() => ({
  inputSchema: StorageTargetsDnsRefreshInput,
  outputSchema: StorageTargetsDnsRefreshOutput,
}));
// Input Schema
export interface StorageTargetsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  cacheName: string;
  storageTargetName: string;
}
export const StorageTargetsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  cacheName: Schema.String.pipe(T.PathParam()),
  storageTargetName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageCache/caches/{cacheName}/storageTargets/{storageTargetName}",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<StorageTargetsGetInput>;

// Output Schema
export interface StorageTargetsGetOutput {
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
export const StorageTargetsGetOutput =
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
  }) as unknown as Schema.Codec<StorageTargetsGetOutput>;

// The operation
/**
 * Returns a Storage Target from a cache.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cacheName - Name of cache. Length of name must not be greater than 80 and chars must be from the [-0-9a-zA-Z_] char class.
 * @param storageTargetName - Name of Storage Target.
 */
export const StorageTargetsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: StorageTargetsGetInput,
  outputSchema: StorageTargetsGetOutput,
}));
// Input Schema
export interface StorageTargetsListByCacheInput {
  subscriptionId: string;
  resourceGroupName: string;
  cacheName: string;
}
export const StorageTargetsListByCacheInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    cacheName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageCache/caches/{cacheName}/storageTargets",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<StorageTargetsListByCacheInput>;

// Output Schema
export interface StorageTargetsListByCacheOutput {
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
export const StorageTargetsListByCacheOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<StorageTargetsListByCacheOutput>;

// The operation
/**
 * Returns a list of Storage Targets for the specified cache.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cacheName - Name of cache. Length of name must not be greater than 80 and chars must be from the [-0-9a-zA-Z_] char class.
 */
export const StorageTargetsListByCache = /*@__PURE__*/ API.make(() => ({
  inputSchema: StorageTargetsListByCacheInput,
  outputSchema: StorageTargetsListByCacheOutput,
}));
// Input Schema
export interface StorageTargetsRestoreDefaultsInput {
  subscriptionId: string;
  resourceGroupName: string;
  cacheName: string;
  storageTargetName: string;
}
export const StorageTargetsRestoreDefaultsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    cacheName: Schema.String.pipe(T.PathParam()),
    storageTargetName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageCache/caches/{cacheName}/storageTargets/{storageTargetName}/restoreDefaults",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<StorageTargetsRestoreDefaultsInput>;

// Output Schema
export type StorageTargetsRestoreDefaultsOutput = void;
export const StorageTargetsRestoreDefaultsOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<StorageTargetsRestoreDefaultsOutput>;

// The operation
/**
 * Tells a storage target to restore its settings to their default values.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cacheName - Name of cache. Length of name must not be greater than 80 and chars must be from the [-0-9a-zA-Z_] char class.
 * @param storageTargetName - Name of Storage Target.
 */
export const StorageTargetsRestoreDefaults =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: StorageTargetsRestoreDefaultsInput,
    outputSchema: StorageTargetsRestoreDefaultsOutput,
  }));
// Input Schema
export interface StorageTargetSuspendInput {
  subscriptionId: string;
  resourceGroupName: string;
  cacheName: string;
  storageTargetName: string;
}
export const StorageTargetSuspendInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    cacheName: Schema.String.pipe(T.PathParam()),
    storageTargetName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageCache/caches/{cacheName}/storageTargets/{storageTargetName}/suspend",
      apiVersion: "2026-01-01",
    }),
  ) as unknown as Schema.Codec<StorageTargetSuspendInput>;

// Output Schema
export type StorageTargetSuspendOutput = void;
export const StorageTargetSuspendOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<StorageTargetSuspendOutput>;

// The operation
/**
 * Suspends client access to a storage target.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param cacheName - Name of cache. Length of name must not be greater than 80 and chars must be from the [-0-9a-zA-Z_] char class.
 * @param storageTargetName - Name of Storage Target.
 */
export const StorageTargetSuspend = /*@__PURE__*/ API.make(() => ({
  inputSchema: StorageTargetSuspendInput,
  outputSchema: StorageTargetSuspendOutput,
}));
// Input Schema
export interface UsageModelsListInput {
  subscriptionId: string;
}
export const UsageModelsListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.StorageCache/usageModels",
    apiVersion: "2026-01-01",
  }),
) as unknown as Schema.Codec<UsageModelsListInput>;

// Output Schema
export interface UsageModelsListOutput {
  value?: {
    display?: { description?: string };
    modelName?: string;
    targetType?: string;
  }[];
  nextLink?: string;
}
export const UsageModelsListOutput = /*@__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        display: Schema.optional(
          Schema.Struct({
            description: Schema.optional(Schema.String),
          }),
        ),
        modelName: Schema.optional(Schema.String),
        targetType: Schema.optional(Schema.String),
      }),
    ),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<UsageModelsListOutput>;

// The operation
/**
 * Get the list of cache usage models available to this subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const UsageModelsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: UsageModelsListInput,
  outputSchema: UsageModelsListOutput,
}));
