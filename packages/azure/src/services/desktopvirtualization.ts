/**
 * Azure Desktopvirtualization API
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
export interface AppAttachPackageCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  appAttachPackageName: string;
  properties: {
    provisioningState?: "Succeeded" | "Provisioning" | "Failed" | "Canceled";
    image?: {
      packageAlias?: string;
      imagePath?: string;
      packageName?: string;
      packageFamilyName?: string;
      packageFullName?: string;
      displayName?: string | null;
      packageRelativePath?: string;
      isRegularRegistration?: boolean;
      isActive?: boolean;
      packageDependencies?:
        | { dependencyName?: string; publisher?: string; minVersion?: string }[]
        | null;
      version?: string;
      lastUpdated?: string;
      packageApplications?: {
        appId?: string;
        description?: string;
        appUserModelID?: string;
        friendlyName?: string;
        iconImageName?: string;
        rawIcon?: string;
        rawPng?: string;
      }[];
      certificateName?: string | null;
      certificateExpiry?: string | null;
      isPackageTimestamped?: "Timestamped" | "NotTimestamped" | null;
    };
    hostPoolReferences?: string[];
    keyVaultURL?: string;
    failHealthCheckOnStagingFailure?:
      | "Unhealthy"
      | "NeedsAssistance"
      | "DoNotFail";
  };
  tags?: Record<string, string>;
  location: string;
}
export const AppAttachPackageCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    appAttachPackageName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      provisioningState: Schema.optional(
        Schema.Literals(["Succeeded", "Provisioning", "Failed", "Canceled"]),
      ),
      image: Schema.optional(
        Schema.Struct({
          packageAlias: Schema.optional(Schema.String),
          imagePath: Schema.optional(Schema.String),
          packageName: Schema.optional(Schema.String),
          packageFamilyName: Schema.optional(Schema.String),
          packageFullName: Schema.optional(Schema.String),
          displayName: Schema.optional(Schema.NullOr(Schema.String)),
          packageRelativePath: Schema.optional(Schema.String),
          isRegularRegistration: Schema.optional(Schema.Boolean),
          isActive: Schema.optional(Schema.Boolean),
          packageDependencies: Schema.optional(
            Schema.NullOr(
              Schema.Array(
                Schema.Struct({
                  dependencyName: Schema.optional(Schema.String),
                  publisher: Schema.optional(Schema.String),
                  minVersion: Schema.optional(Schema.String),
                }),
              ),
            ),
          ),
          version: Schema.optional(Schema.String),
          lastUpdated: Schema.optional(Schema.String),
          packageApplications: Schema.optional(
            Schema.Array(
              Schema.Struct({
                appId: Schema.optional(Schema.String),
                description: Schema.optional(Schema.String),
                appUserModelID: Schema.optional(Schema.String),
                friendlyName: Schema.optional(Schema.String),
                iconImageName: Schema.optional(Schema.String),
                rawIcon: Schema.optional(Schema.String),
                rawPng: Schema.optional(Schema.String),
              }),
            ),
          ),
          certificateName: Schema.optional(Schema.NullOr(Schema.String)),
          certificateExpiry: Schema.optional(Schema.NullOr(Schema.String)),
          isPackageTimestamped: Schema.optional(
            Schema.NullOr(Schema.Literals(["Timestamped", "NotTimestamped"])),
          ),
        }),
      ),
      hostPoolReferences: Schema.optional(Schema.Array(Schema.String)),
      keyVaultURL: Schema.optional(Schema.String),
      failHealthCheckOnStagingFailure: Schema.optional(
        Schema.Literals(["Unhealthy", "NeedsAssistance", "DoNotFail"]),
      ),
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/appAttachPackages/{appAttachPackageName}",
      apiVersion: "2025-10-10",
    }),
  ) as unknown as Schema.Codec<AppAttachPackageCreateOrUpdateInput>;

// Output Schema
export interface AppAttachPackageCreateOrUpdateOutput {
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
export const AppAttachPackageCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<AppAttachPackageCreateOrUpdateOutput>;

// The operation
/**
 * Create or update an App Attach package.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param appAttachPackageName - The name of the App Attach package
 */
export const AppAttachPackageCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AppAttachPackageCreateOrUpdateInput,
    outputSchema: AppAttachPackageCreateOrUpdateOutput,
  }));
// Input Schema
export interface AppAttachPackageDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  appAttachPackageName: string;
}
export const AppAttachPackageDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    appAttachPackageName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/appAttachPackages/{appAttachPackageName}",
      apiVersion: "2025-10-10",
    }),
  ) as unknown as Schema.Codec<AppAttachPackageDeleteInput>;

// Output Schema
export type AppAttachPackageDeleteOutput = void;
export const AppAttachPackageDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<AppAttachPackageDeleteOutput>;

// The operation
/**
 * Remove an App Attach Package.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param appAttachPackageName - The name of the App Attach package
 */
export const AppAttachPackageDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AppAttachPackageDeleteInput,
    outputSchema: AppAttachPackageDeleteOutput,
  }),
);
// Input Schema
export interface AppAttachPackageGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  appAttachPackageName: string;
}
export const AppAttachPackageGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    appAttachPackageName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/appAttachPackages/{appAttachPackageName}",
      apiVersion: "2025-10-10",
    }),
  ) as unknown as Schema.Codec<AppAttachPackageGetInput>;

// Output Schema
export interface AppAttachPackageGetOutput {
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
export const AppAttachPackageGetOutput =
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
  }) as unknown as Schema.Codec<AppAttachPackageGetOutput>;

// The operation
/**
 * Get an app attach package.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param appAttachPackageName - The name of the App Attach package
 */
export const AppAttachPackageGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AppAttachPackageGetInput,
  outputSchema: AppAttachPackageGetOutput,
}));
// Input Schema
export interface AppAttachPackageInfoImportInput {
  subscriptionId: string;
  resourceGroupName: string;
  hostPoolName: string;
  path?: string;
  packageArchitecture?:
    | "ARM"
    | "ARM64"
    | "x86"
    | "x64"
    | "Neutral"
    | "x86a64"
    | "ALL"
    | null;
}
export const AppAttachPackageInfoImportInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    hostPoolName: Schema.String.pipe(T.PathParam()),
    path: Schema.optional(Schema.String),
    packageArchitecture: Schema.optional(
      Schema.NullOr(
        Schema.Literals([
          "ARM",
          "ARM64",
          "x86",
          "x64",
          "Neutral",
          "x86a64",
          "ALL",
        ]),
      ),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/hostPools/{hostPoolName}/importAppAttachPackageInfo",
      apiVersion: "2025-10-10",
    }),
  ) as unknown as Schema.Codec<AppAttachPackageInfoImportInput>;

// Output Schema
export interface AppAttachPackageInfoImportOutput {
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
export const AppAttachPackageInfoImportOutput =
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
  }) as unknown as Schema.Codec<AppAttachPackageInfoImportOutput>;

// The operation
/**
 * Gets information from a package given the path to the package.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param hostPoolName - The name of the host pool within the specified resource group
 */
export const AppAttachPackageInfoImport = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AppAttachPackageInfoImportInput,
    outputSchema: AppAttachPackageInfoImportOutput,
  }),
);
// Input Schema
export interface AppAttachPackageListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  $filter?: string;
}
export const AppAttachPackageListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/appAttachPackages",
      apiVersion: "2025-10-10",
    }),
  ) as unknown as Schema.Codec<AppAttachPackageListByResourceGroupInput>;

// Output Schema
export interface AppAttachPackageListByResourceGroupOutput {
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
export const AppAttachPackageListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<AppAttachPackageListByResourceGroupOutput>;

// The operation
/**
 * List App Attach packages in resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $filter - OData filter expression. Valid properties for filtering are package name and host pool.
 */
export const AppAttachPackageListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AppAttachPackageListByResourceGroupInput,
    outputSchema: AppAttachPackageListByResourceGroupOutput,
  }));
// Input Schema
export interface AppAttachPackageListBySubscriptionInput {
  subscriptionId: string;
  $filter?: string;
}
export const AppAttachPackageListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DesktopVirtualization/appAttachPackages",
      apiVersion: "2025-10-10",
    }),
  ) as unknown as Schema.Codec<AppAttachPackageListBySubscriptionInput>;

// Output Schema
export interface AppAttachPackageListBySubscriptionOutput {
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
export const AppAttachPackageListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<AppAttachPackageListBySubscriptionOutput>;

// The operation
/**
 * List App Attach packages in subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param $filter - OData filter expression. Valid properties for filtering are package name, host pool, and resource group.
 */
export const AppAttachPackageListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AppAttachPackageListBySubscriptionInput,
    outputSchema: AppAttachPackageListBySubscriptionOutput,
  }));
// Input Schema
export interface AppAttachPackageUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  appAttachPackageName: string;
  properties?: {
    image?: {
      packageAlias?: string;
      imagePath?: string;
      packageName?: string;
      packageFamilyName?: string;
      packageFullName?: string;
      displayName?: string | null;
      packageRelativePath?: string;
      isRegularRegistration?: boolean;
      isActive?: boolean;
      packageDependencies?:
        | { dependencyName?: string; publisher?: string; minVersion?: string }[]
        | null;
      version?: string;
      lastUpdated?: string;
      packageApplications?: {
        appId?: string;
        description?: string;
        appUserModelID?: string;
        friendlyName?: string;
        iconImageName?: string;
        rawIcon?: string;
        rawPng?: string;
      }[];
      certificateName?: string | null;
      certificateExpiry?: string | null;
      isPackageTimestamped?: "Timestamped" | "NotTimestamped" | null;
    };
    hostPoolReferences?: string[];
    keyVaultURL?: string;
    failHealthCheckOnStagingFailure?:
      | "Unhealthy"
      | "NeedsAssistance"
      | "DoNotFail";
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
export const AppAttachPackageUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    appAttachPackageName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        image: Schema.optional(
          Schema.Struct({
            packageAlias: Schema.optional(Schema.String),
            imagePath: Schema.optional(Schema.String),
            packageName: Schema.optional(Schema.String),
            packageFamilyName: Schema.optional(Schema.String),
            packageFullName: Schema.optional(Schema.String),
            displayName: Schema.optional(Schema.NullOr(Schema.String)),
            packageRelativePath: Schema.optional(Schema.String),
            isRegularRegistration: Schema.optional(Schema.Boolean),
            isActive: Schema.optional(Schema.Boolean),
            packageDependencies: Schema.optional(
              Schema.NullOr(
                Schema.Array(
                  Schema.Struct({
                    dependencyName: Schema.optional(Schema.String),
                    publisher: Schema.optional(Schema.String),
                    minVersion: Schema.optional(Schema.String),
                  }),
                ),
              ),
            ),
            version: Schema.optional(Schema.String),
            lastUpdated: Schema.optional(Schema.String),
            packageApplications: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  appId: Schema.optional(Schema.String),
                  description: Schema.optional(Schema.String),
                  appUserModelID: Schema.optional(Schema.String),
                  friendlyName: Schema.optional(Schema.String),
                  iconImageName: Schema.optional(Schema.String),
                  rawIcon: Schema.optional(Schema.String),
                  rawPng: Schema.optional(Schema.String),
                }),
              ),
            ),
            certificateName: Schema.optional(Schema.NullOr(Schema.String)),
            certificateExpiry: Schema.optional(Schema.NullOr(Schema.String)),
            isPackageTimestamped: Schema.optional(
              Schema.NullOr(Schema.Literals(["Timestamped", "NotTimestamped"])),
            ),
          }),
        ),
        hostPoolReferences: Schema.optional(Schema.Array(Schema.String)),
        keyVaultURL: Schema.optional(Schema.String),
        failHealthCheckOnStagingFailure: Schema.optional(
          Schema.Literals(["Unhealthy", "NeedsAssistance", "DoNotFail"]),
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
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/appAttachPackages/{appAttachPackageName}",
      apiVersion: "2025-10-10",
    }),
  ) as unknown as Schema.Codec<AppAttachPackageUpdateInput>;

// Output Schema
export interface AppAttachPackageUpdateOutput {
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
export const AppAttachPackageUpdateOutput =
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
  }) as unknown as Schema.Codec<AppAttachPackageUpdateOutput>;

// The operation
/**
 * Update an App Attach Package
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param appAttachPackageName - The name of the App Attach package
 */
export const AppAttachPackageUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AppAttachPackageUpdateInput,
    outputSchema: AppAttachPackageUpdateOutput,
  }),
);
// Input Schema
export interface ApplicationGroupsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  applicationGroupName: string;
  managedBy?: string;
  kind?: string;
  etag?: string;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type: "None" | "SystemAssigned";
  };
  sku?: {
    name: string;
    tier?: "Free" | "Basic" | "Standard" | "Premium";
    size?: string;
    family?: string;
    capacity?: number;
  };
  plan?: {
    name: string;
    publisher: string;
    product: string;
    promotionCode?: string;
    version?: string;
  };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  properties: {
    objectId?: string;
    description?: string;
    friendlyName?: string;
    hostPoolArmPath: string;
    workspaceArmPath?: string;
    applicationGroupType: "RemoteApp" | "Desktop";
    cloudPcResource?: boolean | null;
    showInFeed?: boolean;
  };
  tags?: Record<string, string>;
  location: string;
}
export const ApplicationGroupsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    applicationGroupName: Schema.String.pipe(T.PathParam()),
    managedBy: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.Literals(["None", "SystemAssigned"]),
      }),
    ),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        tier: Schema.optional(
          Schema.Literals(["Free", "Basic", "Standard", "Premium"]),
        ),
        size: Schema.optional(Schema.String),
        family: Schema.optional(Schema.String),
        capacity: Schema.optional(Schema.Number),
      }),
    ),
    plan: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        publisher: Schema.String,
        product: Schema.String,
        promotionCode: Schema.optional(Schema.String),
        version: Schema.optional(Schema.String),
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
    properties: Schema.Struct({
      objectId: Schema.optional(Schema.String),
      description: Schema.optional(Schema.String),
      friendlyName: Schema.optional(Schema.String),
      hostPoolArmPath: Schema.String,
      workspaceArmPath: Schema.optional(Schema.String),
      applicationGroupType: Schema.Literals(["RemoteApp", "Desktop"]),
      cloudPcResource: Schema.optional(Schema.NullOr(Schema.Boolean)),
      showInFeed: Schema.optional(Schema.Boolean),
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/applicationGroups/{applicationGroupName}",
      apiVersion: "2025-10-10",
    }),
  ) as unknown as Schema.Codec<ApplicationGroupsCreateOrUpdateInput>;

// Output Schema
export interface ApplicationGroupsCreateOrUpdateOutput {
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
export const ApplicationGroupsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ApplicationGroupsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update an applicationGroup.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param applicationGroupName - The name of the application group
 */
export const ApplicationGroupsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ApplicationGroupsCreateOrUpdateInput,
    outputSchema: ApplicationGroupsCreateOrUpdateOutput,
  }));
// Input Schema
export interface ApplicationGroupsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  applicationGroupName: string;
}
export const ApplicationGroupsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    applicationGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/applicationGroups/{applicationGroupName}",
      apiVersion: "2025-10-10",
    }),
  ) as unknown as Schema.Codec<ApplicationGroupsDeleteInput>;

// Output Schema
export type ApplicationGroupsDeleteOutput = void;
export const ApplicationGroupsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ApplicationGroupsDeleteOutput>;

// The operation
/**
 * Remove an applicationGroup.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param applicationGroupName - The name of the application group
 */
export const ApplicationGroupsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ApplicationGroupsDeleteInput,
    outputSchema: ApplicationGroupsDeleteOutput,
  }),
);
// Input Schema
export interface ApplicationGroupsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  applicationGroupName: string;
}
export const ApplicationGroupsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    applicationGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/applicationGroups/{applicationGroupName}",
      apiVersion: "2025-10-10",
    }),
  ) as unknown as Schema.Codec<ApplicationGroupsGetInput>;

// Output Schema
export interface ApplicationGroupsGetOutput {
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
export const ApplicationGroupsGetOutput =
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
  }) as unknown as Schema.Codec<ApplicationGroupsGetOutput>;

// The operation
/**
 * Get an application group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param applicationGroupName - The name of the application group
 */
export const ApplicationGroupsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ApplicationGroupsGetInput,
    outputSchema: ApplicationGroupsGetOutput,
  }),
);
// Input Schema
export interface ApplicationGroupsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  $filter?: string;
  pageSize?: number;
  isDescending?: boolean;
  initialSkip?: number;
}
export const ApplicationGroupsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
    isDescending: Schema.optional(Schema.Boolean),
    initialSkip: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/applicationGroups",
      apiVersion: "2025-10-10",
    }),
  ) as unknown as Schema.Codec<ApplicationGroupsListByResourceGroupInput>;

// Output Schema
export interface ApplicationGroupsListByResourceGroupOutput {
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
export const ApplicationGroupsListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<ApplicationGroupsListByResourceGroupOutput>;

// The operation
/**
 * List applicationGroups.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $filter - OData filter expression. Valid properties for filtering are applicationGroupType.
 * @param pageSize - Number of items per page.
 * @param isDescending - Indicates whether the collection is descending.
 * @param initialSkip - Initial number of items to skip.
 */
export const ApplicationGroupsListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ApplicationGroupsListByResourceGroupInput,
    outputSchema: ApplicationGroupsListByResourceGroupOutput,
  }));
// Input Schema
export interface ApplicationGroupsListBySubscriptionInput {
  subscriptionId: string;
  $filter?: string;
}
export const ApplicationGroupsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DesktopVirtualization/applicationGroups",
      apiVersion: "2025-10-10",
    }),
  ) as unknown as Schema.Codec<ApplicationGroupsListBySubscriptionInput>;

// Output Schema
export interface ApplicationGroupsListBySubscriptionOutput {
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
export const ApplicationGroupsListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<ApplicationGroupsListBySubscriptionOutput>;

// The operation
/**
 * List applicationGroups in subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param $filter - OData filter expression. Valid properties for filtering are applicationGroupType.
 */
export const ApplicationGroupsListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ApplicationGroupsListBySubscriptionInput,
    outputSchema: ApplicationGroupsListBySubscriptionOutput,
  }));
// Input Schema
export interface ApplicationGroupsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  applicationGroupName: string;
  tags?: Record<string, string> | null;
  properties?: {
    description?: string;
    friendlyName?: string;
    showInFeed?: boolean;
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
export const ApplicationGroupsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    applicationGroupName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(
      Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
    ),
    properties: Schema.optional(
      Schema.Struct({
        description: Schema.optional(Schema.String),
        friendlyName: Schema.optional(Schema.String),
        showInFeed: Schema.optional(Schema.Boolean),
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
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/applicationGroups/{applicationGroupName}",
      apiVersion: "2025-10-10",
    }),
  ) as unknown as Schema.Codec<ApplicationGroupsUpdateInput>;

// Output Schema
export interface ApplicationGroupsUpdateOutput {
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
export const ApplicationGroupsUpdateOutput =
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
  }) as unknown as Schema.Codec<ApplicationGroupsUpdateOutput>;

// The operation
/**
 * Update an applicationGroup.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param applicationGroupName - The name of the application group
 */
export const ApplicationGroupsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ApplicationGroupsUpdateInput,
    outputSchema: ApplicationGroupsUpdateOutput,
  }),
);
// Input Schema
export interface ApplicationsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  applicationGroupName: string;
  applicationName: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  properties: {
    objectId?: string;
    description?: string;
    friendlyName?: string;
    filePath?: string;
    msixPackageFamilyName?: string | null;
    msixPackageApplicationId?: string | null;
    applicationType?: "InBuilt" | "MsixApplication";
    commandLineSetting: "DoNotAllow" | "Allow" | "Require";
    commandLineArguments?: string;
    showInPortal?: boolean;
    iconPath?: string;
    iconIndex?: number;
    iconHash?: string;
    iconContent?: string;
  };
  id?: string;
  name?: string;
  type?: string;
}
export const ApplicationsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    applicationGroupName: Schema.String.pipe(T.PathParam()),
    applicationName: Schema.String.pipe(T.PathParam()),
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
    properties: Schema.Struct({
      objectId: Schema.optional(Schema.String),
      description: Schema.optional(Schema.String),
      friendlyName: Schema.optional(Schema.String),
      filePath: Schema.optional(Schema.String),
      msixPackageFamilyName: Schema.optional(Schema.NullOr(Schema.String)),
      msixPackageApplicationId: Schema.optional(Schema.NullOr(Schema.String)),
      applicationType: Schema.optional(
        Schema.Literals(["InBuilt", "MsixApplication"]),
      ),
      commandLineSetting: Schema.Literals(["DoNotAllow", "Allow", "Require"]),
      commandLineArguments: Schema.optional(Schema.String),
      showInPortal: Schema.optional(Schema.Boolean),
      iconPath: Schema.optional(Schema.String),
      iconIndex: Schema.optional(Schema.Number),
      iconHash: Schema.optional(Schema.String),
      iconContent: Schema.optional(Schema.String),
    }),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/applicationGroups/{applicationGroupName}/applications/{applicationName}",
      apiVersion: "2025-10-10",
    }),
  ) as unknown as Schema.Codec<ApplicationsCreateOrUpdateInput>;

// Output Schema
export interface ApplicationsCreateOrUpdateOutput {
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
export const ApplicationsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ApplicationsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update an application.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param applicationGroupName - The name of the application group
 * @param applicationName - The name of the application within the specified application group
 */
export const ApplicationsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ApplicationsCreateOrUpdateInput,
    outputSchema: ApplicationsCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface ApplicationsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  applicationGroupName: string;
  applicationName: string;
}
export const ApplicationsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    applicationGroupName: Schema.String.pipe(T.PathParam()),
    applicationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/applicationGroups/{applicationGroupName}/applications/{applicationName}",
      apiVersion: "2025-10-10",
    }),
  ) as unknown as Schema.Codec<ApplicationsDeleteInput>;

// Output Schema
export type ApplicationsDeleteOutput = void;
export const ApplicationsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ApplicationsDeleteOutput>;

// The operation
/**
 * Remove an application.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param applicationGroupName - The name of the application group
 * @param applicationName - The name of the application within the specified application group
 */
export const ApplicationsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ApplicationsDeleteInput,
  outputSchema: ApplicationsDeleteOutput,
}));
// Input Schema
export interface ApplicationsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  applicationGroupName: string;
  applicationName: string;
}
export const ApplicationsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  applicationGroupName: Schema.String.pipe(T.PathParam()),
  applicationName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/applicationGroups/{applicationGroupName}/applications/{applicationName}",
    apiVersion: "2025-10-10",
  }),
) as unknown as Schema.Codec<ApplicationsGetInput>;

// Output Schema
export interface ApplicationsGetOutput {
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
export const ApplicationsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ApplicationsGetOutput>;

// The operation
/**
 * Get an application.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param applicationGroupName - The name of the application group
 * @param applicationName - The name of the application within the specified application group
 */
export const ApplicationsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ApplicationsGetInput,
  outputSchema: ApplicationsGetOutput,
}));
// Input Schema
export interface ApplicationsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  applicationGroupName: string;
  pageSize?: number;
  isDescending?: boolean;
  initialSkip?: number;
}
export const ApplicationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  applicationGroupName: Schema.String.pipe(T.PathParam()),
  pageSize: Schema.optional(Schema.Number),
  isDescending: Schema.optional(Schema.Boolean),
  initialSkip: Schema.optional(Schema.Number),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/applicationGroups/{applicationGroupName}/applications",
    apiVersion: "2025-10-10",
  }),
) as unknown as Schema.Codec<ApplicationsListInput>;

// Output Schema
export interface ApplicationsListOutput {
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
export const ApplicationsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
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
) as unknown as Schema.Codec<ApplicationsListOutput>;

// The operation
/**
 * List applications.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param applicationGroupName - The name of the application group
 * @param pageSize - Number of items per page.
 * @param isDescending - Indicates whether the collection is descending.
 * @param initialSkip - Initial number of items to skip.
 */
export const ApplicationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ApplicationsListInput,
  outputSchema: ApplicationsListOutput,
}));
// Input Schema
export interface ApplicationsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  applicationGroupName: string;
  applicationName: string;
  properties?: {
    description?: string;
    friendlyName?: string;
    filePath?: string;
    commandLineSetting?: "DoNotAllow" | "Allow" | "Require";
    commandLineArguments?: string;
    showInPortal?: boolean;
    iconPath?: string;
    iconIndex?: number;
    msixPackageFamilyName?: string | null;
    msixPackageApplicationId?: string | null;
    applicationType?: "InBuilt" | "MsixApplication";
  };
}
export const ApplicationsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    applicationGroupName: Schema.String.pipe(T.PathParam()),
    applicationName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        description: Schema.optional(Schema.String),
        friendlyName: Schema.optional(Schema.String),
        filePath: Schema.optional(Schema.String),
        commandLineSetting: Schema.optional(
          Schema.Literals(["DoNotAllow", "Allow", "Require"]),
        ),
        commandLineArguments: Schema.optional(Schema.String),
        showInPortal: Schema.optional(Schema.Boolean),
        iconPath: Schema.optional(Schema.String),
        iconIndex: Schema.optional(Schema.Number),
        msixPackageFamilyName: Schema.optional(Schema.NullOr(Schema.String)),
        msixPackageApplicationId: Schema.optional(Schema.NullOr(Schema.String)),
        applicationType: Schema.optional(
          Schema.Literals(["InBuilt", "MsixApplication"]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/applicationGroups/{applicationGroupName}/applications/{applicationName}",
      apiVersion: "2025-10-10",
    }),
  ) as unknown as Schema.Codec<ApplicationsUpdateInput>;

// Output Schema
export interface ApplicationsUpdateOutput {
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
export const ApplicationsUpdateOutput =
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
  }) as unknown as Schema.Codec<ApplicationsUpdateOutput>;

// The operation
/**
 * Update an application.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param applicationGroupName - The name of the application group
 * @param applicationName - The name of the application within the specified application group
 */
export const ApplicationsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ApplicationsUpdateInput,
  outputSchema: ApplicationsUpdateOutput,
}));
// Input Schema
export interface DesktopsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  applicationGroupName: string;
  desktopName: string;
}
export const DesktopsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  applicationGroupName: Schema.String.pipe(T.PathParam()),
  desktopName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/applicationGroups/{applicationGroupName}/desktops/{desktopName}",
    apiVersion: "2025-10-10",
  }),
) as unknown as Schema.Codec<DesktopsGetInput>;

// Output Schema
export interface DesktopsGetOutput {
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
export const DesktopsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<DesktopsGetOutput>;

// The operation
/**
 * Get a desktop.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param applicationGroupName - The name of the application group
 * @param desktopName - The name of the desktop within the specified desktop group
 */
export const DesktopsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DesktopsGetInput,
  outputSchema: DesktopsGetOutput,
}));
// Input Schema
export interface DesktopsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  applicationGroupName: string;
  pageSize?: number;
  isDescending?: boolean;
  initialSkip?: number;
}
export const DesktopsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  applicationGroupName: Schema.String.pipe(T.PathParam()),
  pageSize: Schema.optional(Schema.Number),
  isDescending: Schema.optional(Schema.Boolean),
  initialSkip: Schema.optional(Schema.Number),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/applicationGroups/{applicationGroupName}/desktops",
    apiVersion: "2025-10-10",
  }),
) as unknown as Schema.Codec<DesktopsListInput>;

// Output Schema
export interface DesktopsListOutput {
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
export const DesktopsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<DesktopsListOutput>;

// The operation
/**
 * List desktops.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param applicationGroupName - The name of the application group
 * @param pageSize - Number of items per page.
 * @param isDescending - Indicates whether the collection is descending.
 * @param initialSkip - Initial number of items to skip.
 */
export const DesktopsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DesktopsListInput,
  outputSchema: DesktopsListOutput,
}));
// Input Schema
export interface DesktopsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  applicationGroupName: string;
  desktopName: string;
  properties?: { description?: string; friendlyName?: string };
}
export const DesktopsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  applicationGroupName: Schema.String.pipe(T.PathParam()),
  desktopName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      description: Schema.optional(Schema.String),
      friendlyName: Schema.optional(Schema.String),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/applicationGroups/{applicationGroupName}/desktops/{desktopName}",
    apiVersion: "2025-10-10",
  }),
) as unknown as Schema.Codec<DesktopsUpdateInput>;

// Output Schema
export interface DesktopsUpdateOutput {
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
export const DesktopsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<DesktopsUpdateOutput>;

// The operation
/**
 * Update a desktop.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param applicationGroupName - The name of the application group
 * @param desktopName - The name of the desktop within the specified desktop group
 */
export const DesktopsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DesktopsUpdateInput,
  outputSchema: DesktopsUpdateOutput,
}));
// Input Schema
export interface HostPoolsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  hostPoolName: string;
  managedBy?: string;
  kind?: string;
  etag?: string;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type: "None" | "SystemAssigned";
  };
  sku?: {
    name: string;
    tier?: "Free" | "Basic" | "Standard" | "Premium";
    size?: string;
    family?: string;
    capacity?: number;
  };
  plan?: {
    name: string;
    publisher: string;
    product: string;
    promotionCode?: string;
    version?: string;
  };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  properties: {
    objectId?: string;
    friendlyName?: string;
    description?: string;
    hostPoolType: "Personal" | "Pooled" | "BYODesktop";
    personalDesktopAssignmentType?: "Automatic" | "Direct" | null;
    customRdpProperty?: string;
    maxSessionLimit?: number | null;
    loadBalancerType:
      | "BreadthFirst"
      | "DepthFirst"
      | "Persistent"
      | "MultiplePersistent";
    ring?: number | null;
    validationEnvironment?: boolean | null;
    registrationInfo?: {
      expirationTime?: string | null;
      token?: string;
      registrationTokenOperation?: "Delete" | "None" | "Update";
    };
    vmTemplate?: string;
    applicationGroupReferences?: string[] | null;
    appAttachPackageReferences?: string[];
    ssoadfsAuthority?: string;
    ssoClientId?: string;
    ssoClientSecretKeyVaultPath?: string | Redacted.Redacted<string>;
    ssoSecretType?:
      | "SharedKey"
      | "Certificate"
      | "SharedKeyInKeyVault"
      | "CertificateInKeyVault"
      | null;
    preferredAppGroupType: "None" | "Desktop" | "RailApplications";
    startVMOnConnect?: boolean | null;
    cloudPcResource?: boolean | null;
    publicNetworkAccess?:
      | "Enabled"
      | "Disabled"
      | "EnabledForSessionHostsOnly"
      | "EnabledForClientsOnly"
      | null;
    agentUpdate?: {
      type?: "Default" | "Scheduled";
      useSessionHostLocalTime?: boolean;
      maintenanceWindowTimeZone?: string;
      maintenanceWindows?:
        | {
            hour?: number;
            dayOfWeek?:
              | "Monday"
              | "Tuesday"
              | "Wednesday"
              | "Thursday"
              | "Friday"
              | "Saturday"
              | "Sunday";
          }[]
        | null;
    };
    privateEndpointConnections?:
      | {
          id?: string;
          name?: string;
          type?: string;
          systemData?: {
            createdBy?: string;
            createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
            createdAt?: string;
            lastModifiedBy?: string;
            lastModifiedByType?:
              | "User"
              | "Application"
              | "ManagedIdentity"
              | "Key";
            lastModifiedAt?: string;
          };
        }[]
      | null;
  };
  tags?: Record<string, string>;
  location: string;
}
export const HostPoolsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    hostPoolName: Schema.String.pipe(T.PathParam()),
    managedBy: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.Literals(["None", "SystemAssigned"]),
      }),
    ),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        tier: Schema.optional(
          Schema.Literals(["Free", "Basic", "Standard", "Premium"]),
        ),
        size: Schema.optional(Schema.String),
        family: Schema.optional(Schema.String),
        capacity: Schema.optional(Schema.Number),
      }),
    ),
    plan: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        publisher: Schema.String,
        product: Schema.String,
        promotionCode: Schema.optional(Schema.String),
        version: Schema.optional(Schema.String),
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
    properties: Schema.Struct({
      objectId: Schema.optional(Schema.String),
      friendlyName: Schema.optional(Schema.String),
      description: Schema.optional(Schema.String),
      hostPoolType: Schema.Literals(["Personal", "Pooled", "BYODesktop"]),
      personalDesktopAssignmentType: Schema.optional(
        Schema.NullOr(Schema.Literals(["Automatic", "Direct"])),
      ),
      customRdpProperty: Schema.optional(Schema.String),
      maxSessionLimit: Schema.optional(Schema.NullOr(Schema.Number)),
      loadBalancerType: Schema.Literals([
        "BreadthFirst",
        "DepthFirst",
        "Persistent",
        "MultiplePersistent",
      ]),
      ring: Schema.optional(Schema.NullOr(Schema.Number)),
      validationEnvironment: Schema.optional(Schema.NullOr(Schema.Boolean)),
      registrationInfo: Schema.optional(
        Schema.Struct({
          expirationTime: Schema.optional(Schema.NullOr(Schema.String)),
          token: Schema.optional(Schema.String),
          registrationTokenOperation: Schema.optional(
            Schema.Literals(["Delete", "None", "Update"]),
          ),
        }),
      ),
      vmTemplate: Schema.optional(Schema.String),
      applicationGroupReferences: Schema.optional(
        Schema.NullOr(Schema.Array(Schema.String)),
      ),
      appAttachPackageReferences: Schema.optional(Schema.Array(Schema.String)),
      ssoadfsAuthority: Schema.optional(Schema.String),
      ssoClientId: Schema.optional(Schema.String),
      ssoClientSecretKeyVaultPath: Schema.optional(SensitiveString),
      ssoSecretType: Schema.optional(
        Schema.NullOr(
          Schema.Literals([
            "SharedKey",
            "Certificate",
            "SharedKeyInKeyVault",
            "CertificateInKeyVault",
          ]),
        ),
      ),
      preferredAppGroupType: Schema.Literals([
        "None",
        "Desktop",
        "RailApplications",
      ]),
      startVMOnConnect: Schema.optional(Schema.NullOr(Schema.Boolean)),
      cloudPcResource: Schema.optional(Schema.NullOr(Schema.Boolean)),
      publicNetworkAccess: Schema.optional(
        Schema.NullOr(
          Schema.Literals([
            "Enabled",
            "Disabled",
            "EnabledForSessionHostsOnly",
            "EnabledForClientsOnly",
          ]),
        ),
      ),
      agentUpdate: Schema.optional(
        Schema.Struct({
          type: Schema.optional(Schema.Literals(["Default", "Scheduled"])),
          useSessionHostLocalTime: Schema.optional(Schema.Boolean),
          maintenanceWindowTimeZone: Schema.optional(Schema.String),
          maintenanceWindows: Schema.optional(
            Schema.NullOr(
              Schema.Array(
                Schema.Struct({
                  hour: Schema.optional(Schema.Number),
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
                }),
              ),
            ),
          ),
        }),
      ),
      privateEndpointConnections: Schema.optional(
        Schema.NullOr(
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
      ),
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/hostPools/{hostPoolName}",
      apiVersion: "2025-10-10",
    }),
  ) as unknown as Schema.Codec<HostPoolsCreateOrUpdateInput>;

// Output Schema
export interface HostPoolsCreateOrUpdateOutput {
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
export const HostPoolsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<HostPoolsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a host pool.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param hostPoolName - The name of the host pool within the specified resource group
 */
export const HostPoolsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: HostPoolsCreateOrUpdateInput,
    outputSchema: HostPoolsCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface HostPoolsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  hostPoolName: string;
  force?: boolean;
}
export const HostPoolsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  hostPoolName: Schema.String.pipe(T.PathParam()),
  force: Schema.optional(Schema.Boolean),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/hostPools/{hostPoolName}",
    apiVersion: "2025-10-10",
  }),
) as unknown as Schema.Codec<HostPoolsDeleteInput>;

// Output Schema
export type HostPoolsDeleteOutput = void;
export const HostPoolsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<HostPoolsDeleteOutput>;

// The operation
/**
 * Remove a host pool.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param hostPoolName - The name of the host pool within the specified resource group
 * @param force - Force flag to delete sessionHost.
 */
export const HostPoolsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: HostPoolsDeleteInput,
  outputSchema: HostPoolsDeleteOutput,
}));
// Input Schema
export interface HostPoolsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  hostPoolName: string;
}
export const HostPoolsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  hostPoolName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/hostPools/{hostPoolName}",
    apiVersion: "2025-10-10",
  }),
) as unknown as Schema.Codec<HostPoolsGetInput>;

// Output Schema
export interface HostPoolsGetOutput {
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
export const HostPoolsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<HostPoolsGetOutput>;

// The operation
/**
 * Get a host pool.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param hostPoolName - The name of the host pool within the specified resource group
 */
export const HostPoolsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: HostPoolsGetInput,
  outputSchema: HostPoolsGetOutput,
}));
// Input Schema
export interface HostPoolsListInput {
  subscriptionId: string;
  pageSize?: number;
  isDescending?: boolean;
  initialSkip?: number;
}
export const HostPoolsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  pageSize: Schema.optional(Schema.Number),
  isDescending: Schema.optional(Schema.Boolean),
  initialSkip: Schema.optional(Schema.Number),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.DesktopVirtualization/hostPools",
    apiVersion: "2025-10-10",
  }),
) as unknown as Schema.Codec<HostPoolsListInput>;

// Output Schema
export interface HostPoolsListOutput {
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
export const HostPoolsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<HostPoolsListOutput>;

// The operation
/**
 * List hostPools in subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param pageSize - Number of items per page.
 * @param isDescending - Indicates whether the collection is descending.
 * @param initialSkip - Initial number of items to skip.
 */
export const HostPoolsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: HostPoolsListInput,
  outputSchema: HostPoolsListOutput,
}));
// Input Schema
export interface HostPoolsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  pageSize?: number;
  isDescending?: boolean;
  initialSkip?: number;
}
export const HostPoolsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    pageSize: Schema.optional(Schema.Number),
    isDescending: Schema.optional(Schema.Boolean),
    initialSkip: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/hostPools",
      apiVersion: "2025-10-10",
    }),
  ) as unknown as Schema.Codec<HostPoolsListByResourceGroupInput>;

// Output Schema
export interface HostPoolsListByResourceGroupOutput {
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
export const HostPoolsListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<HostPoolsListByResourceGroupOutput>;

// The operation
/**
 * List hostPools.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param pageSize - Number of items per page.
 * @param isDescending - Indicates whether the collection is descending.
 * @param initialSkip - Initial number of items to skip.
 */
export const HostPoolsListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: HostPoolsListByResourceGroupInput,
    outputSchema: HostPoolsListByResourceGroupOutput,
  }));
// Input Schema
export interface HostPoolsListRegistrationTokensInput {
  subscriptionId: string;
  resourceGroupName: string;
  hostPoolName: string;
}
export const HostPoolsListRegistrationTokensInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    hostPoolName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/hostPools/{hostPoolName}/listRegistrationTokens",
      apiVersion: "2025-10-10",
    }),
  ) as unknown as Schema.Codec<HostPoolsListRegistrationTokensInput>;

// Output Schema
export interface HostPoolsListRegistrationTokensOutput {
  value?: { expirationTime?: string | null; token?: string }[];
  nextLink?: string;
}
export const HostPoolsListRegistrationTokensOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          expirationTime: Schema.optional(Schema.NullOr(Schema.String)),
          token: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<HostPoolsListRegistrationTokensOutput>;

// The operation
/**
 * Operation to list the RegistrationTokens associated with the HostPool
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param hostPoolName - The name of the host pool within the specified resource group
 */
export const HostPoolsListRegistrationTokens =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: HostPoolsListRegistrationTokensInput,
    outputSchema: HostPoolsListRegistrationTokensOutput,
  }));
// Input Schema
export interface HostPoolsRetrieveRegistrationTokenInput {
  subscriptionId: string;
  resourceGroupName: string;
  hostPoolName: string;
}
export const HostPoolsRetrieveRegistrationTokenInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    hostPoolName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/hostPools/{hostPoolName}/retrieveRegistrationToken",
      apiVersion: "2025-10-10",
    }),
  ) as unknown as Schema.Codec<HostPoolsRetrieveRegistrationTokenInput>;

// Output Schema
export interface HostPoolsRetrieveRegistrationTokenOutput {
  expirationTime?: string | null;
  token?: string;
  registrationTokenOperation?: "Delete" | "None" | "Update";
}
export const HostPoolsRetrieveRegistrationTokenOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expirationTime: Schema.optional(Schema.NullOr(Schema.String)),
    token: Schema.optional(Schema.String),
    registrationTokenOperation: Schema.optional(
      Schema.Literals(["Delete", "None", "Update"]),
    ),
  }) as unknown as Schema.Codec<HostPoolsRetrieveRegistrationTokenOutput>;

// The operation
/**
 * Registration token of the host pool.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param hostPoolName - The name of the host pool within the specified resource group
 */
export const HostPoolsRetrieveRegistrationToken =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: HostPoolsRetrieveRegistrationTokenInput,
    outputSchema: HostPoolsRetrieveRegistrationTokenOutput,
  }));
// Input Schema
export interface HostPoolsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  hostPoolName: string;
  tags?: Record<string, string> | null;
  properties?: {
    friendlyName?: string;
    description?: string;
    customRdpProperty?: string;
    maxSessionLimit?: number | null;
    personalDesktopAssignmentType?: "Automatic" | "Direct" | null;
    loadBalancerType?:
      | "BreadthFirst"
      | "DepthFirst"
      | "Persistent"
      | "MultiplePersistent";
    ring?: number | null;
    validationEnvironment?: boolean | null;
    registrationInfo?: {
      expirationTime?: string | null;
      registrationTokenOperation?: "Delete" | "None" | "Update";
    };
    vmTemplate?: string;
    ssoadfsAuthority?: string;
    ssoClientId?: string;
    ssoClientSecretKeyVaultPath?: string | Redacted.Redacted<string>;
    ssoSecretType?:
      | "SharedKey"
      | "Certificate"
      | "SharedKeyInKeyVault"
      | "CertificateInKeyVault"
      | null;
    preferredAppGroupType?: "None" | "Desktop" | "RailApplications";
    startVMOnConnect?: boolean | null;
    publicNetworkAccess?:
      | "Enabled"
      | "Disabled"
      | "EnabledForSessionHostsOnly"
      | "EnabledForClientsOnly"
      | null;
    agentUpdate?: {
      type?: "Default" | "Scheduled";
      useSessionHostLocalTime?: boolean;
      maintenanceWindowTimeZone?: string;
      maintenanceWindows?:
        | {
            hour?: number;
            dayOfWeek?:
              | "Monday"
              | "Tuesday"
              | "Wednesday"
              | "Thursday"
              | "Friday"
              | "Saturday"
              | "Sunday";
          }[]
        | null;
    };
  };
  identity?: {
    principalId?: string;
    tenantId?: string;
    type: "None" | "SystemAssigned";
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
export const HostPoolsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  hostPoolName: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(
    Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
  ),
  properties: Schema.optional(
    Schema.Struct({
      friendlyName: Schema.optional(Schema.String),
      description: Schema.optional(Schema.String),
      customRdpProperty: Schema.optional(Schema.String),
      maxSessionLimit: Schema.optional(Schema.NullOr(Schema.Number)),
      personalDesktopAssignmentType: Schema.optional(
        Schema.NullOr(Schema.Literals(["Automatic", "Direct"])),
      ),
      loadBalancerType: Schema.optional(
        Schema.Literals([
          "BreadthFirst",
          "DepthFirst",
          "Persistent",
          "MultiplePersistent",
        ]),
      ),
      ring: Schema.optional(Schema.NullOr(Schema.Number)),
      validationEnvironment: Schema.optional(Schema.NullOr(Schema.Boolean)),
      registrationInfo: Schema.optional(
        Schema.Struct({
          expirationTime: Schema.optional(Schema.NullOr(Schema.String)),
          registrationTokenOperation: Schema.optional(
            Schema.Literals(["Delete", "None", "Update"]),
          ),
        }),
      ),
      vmTemplate: Schema.optional(Schema.String),
      ssoadfsAuthority: Schema.optional(Schema.String),
      ssoClientId: Schema.optional(Schema.String),
      ssoClientSecretKeyVaultPath: Schema.optional(SensitiveString),
      ssoSecretType: Schema.optional(
        Schema.NullOr(
          Schema.Literals([
            "SharedKey",
            "Certificate",
            "SharedKeyInKeyVault",
            "CertificateInKeyVault",
          ]),
        ),
      ),
      preferredAppGroupType: Schema.optional(
        Schema.Literals(["None", "Desktop", "RailApplications"]),
      ),
      startVMOnConnect: Schema.optional(Schema.NullOr(Schema.Boolean)),
      publicNetworkAccess: Schema.optional(
        Schema.NullOr(
          Schema.Literals([
            "Enabled",
            "Disabled",
            "EnabledForSessionHostsOnly",
            "EnabledForClientsOnly",
          ]),
        ),
      ),
      agentUpdate: Schema.optional(
        Schema.Struct({
          type: Schema.optional(Schema.Literals(["Default", "Scheduled"])),
          useSessionHostLocalTime: Schema.optional(Schema.Boolean),
          maintenanceWindowTimeZone: Schema.optional(Schema.String),
          maintenanceWindows: Schema.optional(
            Schema.NullOr(
              Schema.Array(
                Schema.Struct({
                  hour: Schema.optional(Schema.Number),
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
                }),
              ),
            ),
          ),
        }),
      ),
    }),
  ),
  identity: Schema.optional(
    Schema.Struct({
      principalId: Schema.optional(Schema.String),
      tenantId: Schema.optional(Schema.String),
      type: Schema.Literals(["None", "SystemAssigned"]),
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
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/hostPools/{hostPoolName}",
    apiVersion: "2025-10-10",
  }),
) as unknown as Schema.Codec<HostPoolsUpdateInput>;

// Output Schema
export interface HostPoolsUpdateOutput {
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
export const HostPoolsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<HostPoolsUpdateOutput>;

// The operation
/**
 * Update a host pool.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param hostPoolName - The name of the host pool within the specified resource group
 */
export const HostPoolsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: HostPoolsUpdateInput,
  outputSchema: HostPoolsUpdateOutput,
}));
// Input Schema
export interface MsixImagesExpandInput {
  subscriptionId: string;
  resourceGroupName: string;
  hostPoolName: string;
  uri?: string;
}
export const MsixImagesExpandInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  hostPoolName: Schema.String.pipe(T.PathParam()),
  uri: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/hostPools/{hostPoolName}/expandMsixImage",
    apiVersion: "2025-10-10",
  }),
) as unknown as Schema.Codec<MsixImagesExpandInput>;

// Output Schema
export interface MsixImagesExpandOutput {
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
export const MsixImagesExpandOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
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
) as unknown as Schema.Codec<MsixImagesExpandOutput>;

// The operation
/**
 * Expands and Lists MSIX packages in an Image, given the Image Path.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param hostPoolName - The name of the host pool within the specified resource group
 */
export const MsixImagesExpand = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: MsixImagesExpandInput,
  outputSchema: MsixImagesExpandOutput,
}));
// Input Schema
export interface MSIXPackagesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  hostPoolName: string;
  msixPackageFullName: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  properties: {
    imagePath?: string;
    packageName?: string;
    packageFamilyName?: string;
    displayName?: string | null;
    packageRelativePath?: string;
    isRegularRegistration?: boolean;
    isActive?: boolean;
    packageDependencies?: {
      dependencyName?: string;
      publisher?: string;
      minVersion?: string;
    }[];
    version?: string;
    lastUpdated?: string;
    packageApplications?: {
      appId?: string;
      description?: string;
      appUserModelID?: string;
      friendlyName?: string;
      iconImageName?: string;
      rawIcon?: string;
      rawPng?: string;
    }[];
  };
  id?: string;
  name?: string;
  type?: string;
}
export const MSIXPackagesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    hostPoolName: Schema.String.pipe(T.PathParam()),
    msixPackageFullName: Schema.String.pipe(T.PathParam()),
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
    properties: Schema.Struct({
      imagePath: Schema.optional(Schema.String),
      packageName: Schema.optional(Schema.String),
      packageFamilyName: Schema.optional(Schema.String),
      displayName: Schema.optional(Schema.NullOr(Schema.String)),
      packageRelativePath: Schema.optional(Schema.String),
      isRegularRegistration: Schema.optional(Schema.Boolean),
      isActive: Schema.optional(Schema.Boolean),
      packageDependencies: Schema.optional(
        Schema.Array(
          Schema.Struct({
            dependencyName: Schema.optional(Schema.String),
            publisher: Schema.optional(Schema.String),
            minVersion: Schema.optional(Schema.String),
          }),
        ),
      ),
      version: Schema.optional(Schema.String),
      lastUpdated: Schema.optional(Schema.String),
      packageApplications: Schema.optional(
        Schema.Array(
          Schema.Struct({
            appId: Schema.optional(Schema.String),
            description: Schema.optional(Schema.String),
            appUserModelID: Schema.optional(Schema.String),
            friendlyName: Schema.optional(Schema.String),
            iconImageName: Schema.optional(Schema.String),
            rawIcon: Schema.optional(Schema.String),
            rawPng: Schema.optional(Schema.String),
          }),
        ),
      ),
    }),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/hostPools/{hostPoolName}/msixPackages/{msixPackageFullName}",
      apiVersion: "2025-10-10",
    }),
  ) as unknown as Schema.Codec<MSIXPackagesCreateOrUpdateInput>;

// Output Schema
export interface MSIXPackagesCreateOrUpdateOutput {
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
export const MSIXPackagesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<MSIXPackagesCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a MSIX package.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param hostPoolName - The name of the host pool within the specified resource group
 * @param msixPackageFullName - The version specific package full name of the MSIX package within specified hostpool
 */
export const MSIXPackagesCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: MSIXPackagesCreateOrUpdateInput,
    outputSchema: MSIXPackagesCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface MSIXPackagesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  hostPoolName: string;
  msixPackageFullName: string;
}
export const MSIXPackagesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    hostPoolName: Schema.String.pipe(T.PathParam()),
    msixPackageFullName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/hostPools/{hostPoolName}/msixPackages/{msixPackageFullName}",
      apiVersion: "2025-10-10",
    }),
  ) as unknown as Schema.Codec<MSIXPackagesDeleteInput>;

// Output Schema
export type MSIXPackagesDeleteOutput = void;
export const MSIXPackagesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<MSIXPackagesDeleteOutput>;

// The operation
/**
 * Remove an MSIX Package.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param hostPoolName - The name of the host pool within the specified resource group
 * @param msixPackageFullName - The version specific package full name of the MSIX package within specified hostpool
 */
export const MSIXPackagesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: MSIXPackagesDeleteInput,
  outputSchema: MSIXPackagesDeleteOutput,
}));
// Input Schema
export interface MSIXPackagesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  hostPoolName: string;
  msixPackageFullName: string;
}
export const MSIXPackagesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  hostPoolName: Schema.String.pipe(T.PathParam()),
  msixPackageFullName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/hostPools/{hostPoolName}/msixPackages/{msixPackageFullName}",
    apiVersion: "2025-10-10",
  }),
) as unknown as Schema.Codec<MSIXPackagesGetInput>;

// Output Schema
export interface MSIXPackagesGetOutput {
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
export const MSIXPackagesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<MSIXPackagesGetOutput>;

// The operation
/**
 * Get a msixpackage.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param hostPoolName - The name of the host pool within the specified resource group
 * @param msixPackageFullName - The version specific package full name of the MSIX package within specified hostpool
 */
export const MSIXPackagesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: MSIXPackagesGetInput,
  outputSchema: MSIXPackagesGetOutput,
}));
// Input Schema
export interface MSIXPackagesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  hostPoolName: string;
  pageSize?: number;
  isDescending?: boolean;
  initialSkip?: number;
}
export const MSIXPackagesListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  hostPoolName: Schema.String.pipe(T.PathParam()),
  pageSize: Schema.optional(Schema.Number),
  isDescending: Schema.optional(Schema.Boolean),
  initialSkip: Schema.optional(Schema.Number),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/hostPools/{hostPoolName}/msixPackages",
    apiVersion: "2025-10-10",
  }),
) as unknown as Schema.Codec<MSIXPackagesListInput>;

// Output Schema
export interface MSIXPackagesListOutput {
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
export const MSIXPackagesListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
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
) as unknown as Schema.Codec<MSIXPackagesListOutput>;

// The operation
/**
 * List MSIX packages in hostpool.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param hostPoolName - The name of the host pool within the specified resource group
 * @param pageSize - Number of items per page.
 * @param isDescending - Indicates whether the collection is descending.
 * @param initialSkip - Initial number of items to skip.
 */
export const MSIXPackagesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: MSIXPackagesListInput,
  outputSchema: MSIXPackagesListOutput,
}));
// Input Schema
export interface MSIXPackagesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  hostPoolName: string;
  msixPackageFullName: string;
  properties?: {
    isActive?: boolean;
    isRegularRegistration?: boolean;
    displayName?: string;
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
export const MSIXPackagesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    hostPoolName: Schema.String.pipe(T.PathParam()),
    msixPackageFullName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        isActive: Schema.optional(Schema.Boolean),
        isRegularRegistration: Schema.optional(Schema.Boolean),
        displayName: Schema.optional(Schema.String),
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
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/hostPools/{hostPoolName}/msixPackages/{msixPackageFullName}",
      apiVersion: "2025-10-10",
    }),
  ) as unknown as Schema.Codec<MSIXPackagesUpdateInput>;

// Output Schema
export interface MSIXPackagesUpdateOutput {
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
export const MSIXPackagesUpdateOutput =
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
  }) as unknown as Schema.Codec<MSIXPackagesUpdateOutput>;

// The operation
/**
 * Update an  MSIX Package.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param hostPoolName - The name of the host pool within the specified resource group
 * @param msixPackageFullName - The version specific package full name of the MSIX package within specified hostpool
 */
export const MSIXPackagesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: MSIXPackagesUpdateInput,
  outputSchema: MSIXPackagesUpdateOutput,
}));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.DesktopVirtualization/operations",
    apiVersion: "2025-10-10",
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
    properties?: {
      serviceSpecification?: {
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
      properties: Schema.optional(
        Schema.Struct({
          serviceSpecification: Schema.optional(
            Schema.Struct({
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
 * List the operations for the provider
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface PrivateEndpointConnectionsDeleteByHostPoolInput {
  subscriptionId: string;
  resourceGroupName: string;
  hostPoolName: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionsDeleteByHostPoolInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    hostPoolName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/hostPools/{hostPoolName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2025-10-10",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsDeleteByHostPoolInput>;

// Output Schema
export type PrivateEndpointConnectionsDeleteByHostPoolOutput = void;
export const PrivateEndpointConnectionsDeleteByHostPoolOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<PrivateEndpointConnectionsDeleteByHostPoolOutput>;

// The operation
/**
 * Remove a connection.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param hostPoolName - The name of the host pool within the specified resource group
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource.
 */
export const PrivateEndpointConnectionsDeleteByHostPool =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsDeleteByHostPoolInput,
    outputSchema: PrivateEndpointConnectionsDeleteByHostPoolOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsDeleteByWorkspaceInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionsDeleteByWorkspaceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/workspaces/{workspaceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2025-10-10",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsDeleteByWorkspaceInput>;

// Output Schema
export type PrivateEndpointConnectionsDeleteByWorkspaceOutput = void;
export const PrivateEndpointConnectionsDeleteByWorkspaceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<PrivateEndpointConnectionsDeleteByWorkspaceOutput>;

// The operation
/**
 * Remove a connection.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource.
 */
export const PrivateEndpointConnectionsDeleteByWorkspace =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsDeleteByWorkspaceInput,
    outputSchema: PrivateEndpointConnectionsDeleteByWorkspaceOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsGetByHostPoolInput {
  subscriptionId: string;
  resourceGroupName: string;
  hostPoolName: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionsGetByHostPoolInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    hostPoolName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/hostPools/{hostPoolName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2025-10-10",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsGetByHostPoolInput>;

// Output Schema
export interface PrivateEndpointConnectionsGetByHostPoolOutput {
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
export const PrivateEndpointConnectionsGetByHostPoolOutput =
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
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsGetByHostPoolOutput>;

// The operation
/**
 * Get a private endpoint connection.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param hostPoolName - The name of the host pool within the specified resource group
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource.
 */
export const PrivateEndpointConnectionsGetByHostPool =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsGetByHostPoolInput,
    outputSchema: PrivateEndpointConnectionsGetByHostPoolOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsGetByWorkspaceInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionsGetByWorkspaceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/workspaces/{workspaceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2025-10-10",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsGetByWorkspaceInput>;

// Output Schema
export interface PrivateEndpointConnectionsGetByWorkspaceOutput {
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
export const PrivateEndpointConnectionsGetByWorkspaceOutput =
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
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsGetByWorkspaceOutput>;

// The operation
/**
 * Get a private endpoint connection.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource.
 */
export const PrivateEndpointConnectionsGetByWorkspace =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsGetByWorkspaceInput,
    outputSchema: PrivateEndpointConnectionsGetByWorkspaceOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsListByHostPoolInput {
  subscriptionId: string;
  resourceGroupName: string;
  hostPoolName: string;
  pageSize?: number;
  isDescending?: boolean;
  initialSkip?: number;
}
export const PrivateEndpointConnectionsListByHostPoolInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    hostPoolName: Schema.String.pipe(T.PathParam()),
    pageSize: Schema.optional(Schema.Number),
    isDescending: Schema.optional(Schema.Boolean),
    initialSkip: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/hostPools/{hostPoolName}/privateEndpointConnections",
      apiVersion: "2025-10-10",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsListByHostPoolInput>;

// Output Schema
export interface PrivateEndpointConnectionsListByHostPoolOutput {
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
export const PrivateEndpointConnectionsListByHostPoolOutput =
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
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsListByHostPoolOutput>;

// The operation
/**
 * List private endpoint connections associated with hostpool.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param hostPoolName - The name of the host pool within the specified resource group
 * @param pageSize - Number of items per page.
 * @param isDescending - Indicates whether the collection is descending.
 * @param initialSkip - Initial number of items to skip.
 */
export const PrivateEndpointConnectionsListByHostPool =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsListByHostPoolInput,
    outputSchema: PrivateEndpointConnectionsListByHostPoolOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsListByWorkspaceInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
}
export const PrivateEndpointConnectionsListByWorkspaceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/workspaces/{workspaceName}/privateEndpointConnections",
      apiVersion: "2025-10-10",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsListByWorkspaceInput>;

// Output Schema
export interface PrivateEndpointConnectionsListByWorkspaceOutput {
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
export const PrivateEndpointConnectionsListByWorkspaceOutput =
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
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsListByWorkspaceOutput>;

// The operation
/**
 * List private endpoint connections.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace
 */
export const PrivateEndpointConnectionsListByWorkspace =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsListByWorkspaceInput,
    outputSchema: PrivateEndpointConnectionsListByWorkspaceOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsUpdateByHostPoolInput {
  subscriptionId: string;
  resourceGroupName: string;
  hostPoolName: string;
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
export const PrivateEndpointConnectionsUpdateByHostPoolInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    hostPoolName: Schema.String.pipe(T.PathParam()),
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/hostPools/{hostPoolName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2025-10-10",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsUpdateByHostPoolInput>;

// Output Schema
export interface PrivateEndpointConnectionsUpdateByHostPoolOutput {
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
export const PrivateEndpointConnectionsUpdateByHostPoolOutput =
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
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsUpdateByHostPoolOutput>;

// The operation
/**
 * Approve or reject a private endpoint connection.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param hostPoolName - The name of the host pool within the specified resource group
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource.
 */
export const PrivateEndpointConnectionsUpdateByHostPool =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsUpdateByHostPoolInput,
    outputSchema: PrivateEndpointConnectionsUpdateByHostPoolOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsUpdateByWorkspaceInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
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
export const PrivateEndpointConnectionsUpdateByWorkspaceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/workspaces/{workspaceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2025-10-10",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsUpdateByWorkspaceInput>;

// Output Schema
export interface PrivateEndpointConnectionsUpdateByWorkspaceOutput {
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
export const PrivateEndpointConnectionsUpdateByWorkspaceOutput =
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
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsUpdateByWorkspaceOutput>;

// The operation
/**
 * Approve or reject a private endpoint connection.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource.
 */
export const PrivateEndpointConnectionsUpdateByWorkspace =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsUpdateByWorkspaceInput,
    outputSchema: PrivateEndpointConnectionsUpdateByWorkspaceOutput,
  }));
// Input Schema
export interface PrivateLinkResourcesListByHostPoolInput {
  subscriptionId: string;
  resourceGroupName: string;
  hostPoolName: string;
  pageSize?: number;
  isDescending?: boolean;
  initialSkip?: number;
}
export const PrivateLinkResourcesListByHostPoolInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    hostPoolName: Schema.String.pipe(T.PathParam()),
    pageSize: Schema.optional(Schema.Number),
    isDescending: Schema.optional(Schema.Boolean),
    initialSkip: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/hostPools/{hostPoolName}/privateLinkResources",
      apiVersion: "2025-10-10",
    }),
  ) as unknown as Schema.Codec<PrivateLinkResourcesListByHostPoolInput>;

// Output Schema
export interface PrivateLinkResourcesListByHostPoolOutput {
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
export const PrivateLinkResourcesListByHostPoolOutput =
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
  }) as unknown as Schema.Codec<PrivateLinkResourcesListByHostPoolOutput>;

// The operation
/**
 * List the private link resources available for this hostpool.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param hostPoolName - The name of the host pool within the specified resource group
 * @param pageSize - Number of items per page.
 * @param isDescending - Indicates whether the collection is descending.
 * @param initialSkip - Initial number of items to skip.
 */
export const PrivateLinkResourcesListByHostPool =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkResourcesListByHostPoolInput,
    outputSchema: PrivateLinkResourcesListByHostPoolOutput,
  }));
// Input Schema
export interface PrivateLinkResourcesListByWorkspaceInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  pageSize?: number;
  isDescending?: boolean;
  initialSkip?: number;
}
export const PrivateLinkResourcesListByWorkspaceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    pageSize: Schema.optional(Schema.Number),
    isDescending: Schema.optional(Schema.Boolean),
    initialSkip: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/workspaces/{workspaceName}/privateLinkResources",
      apiVersion: "2025-10-10",
    }),
  ) as unknown as Schema.Codec<PrivateLinkResourcesListByWorkspaceInput>;

// Output Schema
export interface PrivateLinkResourcesListByWorkspaceOutput {
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
export const PrivateLinkResourcesListByWorkspaceOutput =
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
  }) as unknown as Schema.Codec<PrivateLinkResourcesListByWorkspaceOutput>;

// The operation
/**
 * List the private link resources available for this workspace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace
 * @param pageSize - Number of items per page.
 * @param isDescending - Indicates whether the collection is descending.
 * @param initialSkip - Initial number of items to skip.
 */
export const PrivateLinkResourcesListByWorkspace =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkResourcesListByWorkspaceInput,
    outputSchema: PrivateLinkResourcesListByWorkspaceOutput,
  }));
// Input Schema
export interface ScalingPlanPersonalSchedulesCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  scalingPlanName: string;
  scalingPlanScheduleName: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  properties: {
    daysOfWeek?: (
      | "Monday"
      | "Tuesday"
      | "Wednesday"
      | "Thursday"
      | "Friday"
      | "Saturday"
      | "Sunday"
    )[];
    rampUpStartTime?: { hour: number; minute: number };
    rampUpAutoStartHosts?: "None" | "WithAssignedUser" | "All";
    rampUpStartVMOnConnect?: "Enable" | "Disable";
    rampUpActionOnDisconnect?: "None" | "Deallocate";
    rampUpMinutesToWaitOnDisconnect?: number;
    rampUpActionOnLogoff?: "None" | "Deallocate";
    rampUpMinutesToWaitOnLogoff?: number;
    peakStartTime?: { hour: number; minute: number };
    peakStartVMOnConnect?: "Enable" | "Disable";
    peakActionOnDisconnect?: "None" | "Deallocate";
    peakMinutesToWaitOnDisconnect?: number;
    peakActionOnLogoff?: "None" | "Deallocate";
    peakMinutesToWaitOnLogoff?: number;
    rampDownStartTime?: { hour: number; minute: number };
    rampDownStartVMOnConnect?: "Enable" | "Disable";
    rampDownActionOnDisconnect?: "None" | "Deallocate";
    rampDownMinutesToWaitOnDisconnect?: number;
    rampDownActionOnLogoff?: "None" | "Deallocate" | "Hibernate";
    rampDownMinutesToWaitOnLogoff?: number;
    offPeakStartTime?: { hour: number; minute: number };
    offPeakStartVMOnConnect?: "Enable" | "Disable";
    offPeakActionOnDisconnect?: "None" | "Deallocate" | "Hibernate";
    offPeakMinutesToWaitOnDisconnect?: number;
    offPeakActionOnLogoff?: "None" | "Deallocate" | "Hibernate";
    offPeakMinutesToWaitOnLogoff?: number;
  };
}
export const ScalingPlanPersonalSchedulesCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    scalingPlanName: Schema.String.pipe(T.PathParam()),
    scalingPlanScheduleName: Schema.String.pipe(T.PathParam()),
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
    properties: Schema.Struct({
      daysOfWeek: Schema.optional(
        Schema.Array(
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
      ),
      rampUpStartTime: Schema.optional(
        Schema.Struct({
          hour: Schema.Number,
          minute: Schema.Number,
        }),
      ),
      rampUpAutoStartHosts: Schema.optional(
        Schema.Literals(["None", "WithAssignedUser", "All"]),
      ),
      rampUpStartVMOnConnect: Schema.optional(
        Schema.Literals(["Enable", "Disable"]),
      ),
      rampUpActionOnDisconnect: Schema.optional(
        Schema.Literals(["None", "Deallocate"]),
      ),
      rampUpMinutesToWaitOnDisconnect: Schema.optional(Schema.Number),
      rampUpActionOnLogoff: Schema.optional(
        Schema.Literals(["None", "Deallocate"]),
      ),
      rampUpMinutesToWaitOnLogoff: Schema.optional(Schema.Number),
      peakStartTime: Schema.optional(
        Schema.Struct({
          hour: Schema.Number,
          minute: Schema.Number,
        }),
      ),
      peakStartVMOnConnect: Schema.optional(
        Schema.Literals(["Enable", "Disable"]),
      ),
      peakActionOnDisconnect: Schema.optional(
        Schema.Literals(["None", "Deallocate"]),
      ),
      peakMinutesToWaitOnDisconnect: Schema.optional(Schema.Number),
      peakActionOnLogoff: Schema.optional(
        Schema.Literals(["None", "Deallocate"]),
      ),
      peakMinutesToWaitOnLogoff: Schema.optional(Schema.Number),
      rampDownStartTime: Schema.optional(
        Schema.Struct({
          hour: Schema.Number,
          minute: Schema.Number,
        }),
      ),
      rampDownStartVMOnConnect: Schema.optional(
        Schema.Literals(["Enable", "Disable"]),
      ),
      rampDownActionOnDisconnect: Schema.optional(
        Schema.Literals(["None", "Deallocate"]),
      ),
      rampDownMinutesToWaitOnDisconnect: Schema.optional(Schema.Number),
      rampDownActionOnLogoff: Schema.optional(
        Schema.Literals(["None", "Deallocate", "Hibernate"]),
      ),
      rampDownMinutesToWaitOnLogoff: Schema.optional(Schema.Number),
      offPeakStartTime: Schema.optional(
        Schema.Struct({
          hour: Schema.Number,
          minute: Schema.Number,
        }),
      ),
      offPeakStartVMOnConnect: Schema.optional(
        Schema.Literals(["Enable", "Disable"]),
      ),
      offPeakActionOnDisconnect: Schema.optional(
        Schema.Literals(["None", "Deallocate", "Hibernate"]),
      ),
      offPeakMinutesToWaitOnDisconnect: Schema.optional(Schema.Number),
      offPeakActionOnLogoff: Schema.optional(
        Schema.Literals(["None", "Deallocate", "Hibernate"]),
      ),
      offPeakMinutesToWaitOnLogoff: Schema.optional(Schema.Number),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/scalingPlans/{scalingPlanName}/personalSchedules/{scalingPlanScheduleName}",
      apiVersion: "2025-10-10",
    }),
  ) as unknown as Schema.Codec<ScalingPlanPersonalSchedulesCreateInput>;

// Output Schema
export interface ScalingPlanPersonalSchedulesCreateOutput {
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
export const ScalingPlanPersonalSchedulesCreateOutput =
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
  }) as unknown as Schema.Codec<ScalingPlanPersonalSchedulesCreateOutput>;

// The operation
/**
 * Create or update a ScalingPlanPersonalSchedule.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param scalingPlanName - The name of the scaling plan.
 * @param scalingPlanScheduleName - The name of the ScalingPlanSchedule
 */
export const ScalingPlanPersonalSchedulesCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ScalingPlanPersonalSchedulesCreateInput,
    outputSchema: ScalingPlanPersonalSchedulesCreateOutput,
  }));
// Input Schema
export interface ScalingPlanPersonalSchedulesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  scalingPlanName: string;
  scalingPlanScheduleName: string;
}
export const ScalingPlanPersonalSchedulesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    scalingPlanName: Schema.String.pipe(T.PathParam()),
    scalingPlanScheduleName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/scalingPlans/{scalingPlanName}/personalSchedules/{scalingPlanScheduleName}",
      apiVersion: "2025-10-10",
    }),
  ) as unknown as Schema.Codec<ScalingPlanPersonalSchedulesDeleteInput>;

// Output Schema
export type ScalingPlanPersonalSchedulesDeleteOutput = void;
export const ScalingPlanPersonalSchedulesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ScalingPlanPersonalSchedulesDeleteOutput>;

// The operation
/**
 * Remove a ScalingPlanPersonalSchedule.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param scalingPlanName - The name of the scaling plan.
 * @param scalingPlanScheduleName - The name of the ScalingPlanSchedule
 */
export const ScalingPlanPersonalSchedulesDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ScalingPlanPersonalSchedulesDeleteInput,
    outputSchema: ScalingPlanPersonalSchedulesDeleteOutput,
  }));
// Input Schema
export interface ScalingPlanPersonalSchedulesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  scalingPlanName: string;
  scalingPlanScheduleName: string;
}
export const ScalingPlanPersonalSchedulesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    scalingPlanName: Schema.String.pipe(T.PathParam()),
    scalingPlanScheduleName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/scalingPlans/{scalingPlanName}/personalSchedules/{scalingPlanScheduleName}",
      apiVersion: "2025-10-10",
    }),
  ) as unknown as Schema.Codec<ScalingPlanPersonalSchedulesGetInput>;

// Output Schema
export interface ScalingPlanPersonalSchedulesGetOutput {
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
export const ScalingPlanPersonalSchedulesGetOutput =
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
  }) as unknown as Schema.Codec<ScalingPlanPersonalSchedulesGetOutput>;

// The operation
/**
 * Get a ScalingPlanPersonalSchedule.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param scalingPlanName - The name of the scaling plan.
 * @param scalingPlanScheduleName - The name of the ScalingPlanSchedule
 */
export const ScalingPlanPersonalSchedulesGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ScalingPlanPersonalSchedulesGetInput,
    outputSchema: ScalingPlanPersonalSchedulesGetOutput,
  }));
// Input Schema
export interface ScalingPlanPersonalSchedulesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  scalingPlanName: string;
  pageSize?: number;
  isDescending?: boolean;
  initialSkip?: number;
}
export const ScalingPlanPersonalSchedulesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    scalingPlanName: Schema.String.pipe(T.PathParam()),
    pageSize: Schema.optional(Schema.Number),
    isDescending: Schema.optional(Schema.Boolean),
    initialSkip: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/scalingPlans/{scalingPlanName}/personalSchedules",
      apiVersion: "2025-10-10",
    }),
  ) as unknown as Schema.Codec<ScalingPlanPersonalSchedulesListInput>;

// Output Schema
export interface ScalingPlanPersonalSchedulesListOutput {
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
export const ScalingPlanPersonalSchedulesListOutput =
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
  }) as unknown as Schema.Codec<ScalingPlanPersonalSchedulesListOutput>;

// The operation
/**
 * List ScalingPlanPersonalSchedules.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param scalingPlanName - The name of the scaling plan.
 * @param pageSize - Number of items per page.
 * @param isDescending - Indicates whether the collection is descending.
 * @param initialSkip - Initial number of items to skip.
 */
export const ScalingPlanPersonalSchedulesList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ScalingPlanPersonalSchedulesListInput,
    outputSchema: ScalingPlanPersonalSchedulesListOutput,
  }));
// Input Schema
export interface ScalingPlanPersonalSchedulesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  scalingPlanName: string;
  scalingPlanScheduleName: string;
  properties?: {
    daysOfWeek?: (
      | "Monday"
      | "Tuesday"
      | "Wednesday"
      | "Thursday"
      | "Friday"
      | "Saturday"
      | "Sunday"
    )[];
    rampUpStartTime?: { hour: number; minute: number };
    rampUpAutoStartHosts?: "None" | "WithAssignedUser" | "All";
    rampUpStartVMOnConnect?: "Enable" | "Disable";
    rampUpActionOnDisconnect?: "None" | "Deallocate";
    rampUpMinutesToWaitOnDisconnect?: number;
    rampUpActionOnLogoff?: "None" | "Deallocate";
    rampUpMinutesToWaitOnLogoff?: number;
    peakStartTime?: { hour: number; minute: number };
    peakStartVMOnConnect?: "Enable" | "Disable";
    peakActionOnDisconnect?: "None" | "Deallocate";
    peakMinutesToWaitOnDisconnect?: number;
    peakActionOnLogoff?: "None" | "Deallocate";
    peakMinutesToWaitOnLogoff?: number;
    rampDownStartTime?: { hour: number; minute: number };
    rampDownStartVMOnConnect?: "Enable" | "Disable";
    rampDownActionOnDisconnect?: "None" | "Deallocate";
    rampDownMinutesToWaitOnDisconnect?: number;
    rampDownActionOnLogoff?: "None" | "Deallocate" | "Hibernate";
    rampDownMinutesToWaitOnLogoff?: number;
    offPeakStartTime?: { hour: number; minute: number };
    offPeakStartVMOnConnect?: "Enable" | "Disable";
    offPeakActionOnDisconnect?: "None" | "Deallocate" | "Hibernate";
    offPeakMinutesToWaitOnDisconnect?: number;
    offPeakActionOnLogoff?: "None" | "Deallocate" | "Hibernate";
    offPeakMinutesToWaitOnLogoff?: number;
  };
}
export const ScalingPlanPersonalSchedulesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    scalingPlanName: Schema.String.pipe(T.PathParam()),
    scalingPlanScheduleName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        daysOfWeek: Schema.optional(
          Schema.Array(
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
        ),
        rampUpStartTime: Schema.optional(
          Schema.Struct({
            hour: Schema.Number,
            minute: Schema.Number,
          }),
        ),
        rampUpAutoStartHosts: Schema.optional(
          Schema.Literals(["None", "WithAssignedUser", "All"]),
        ),
        rampUpStartVMOnConnect: Schema.optional(
          Schema.Literals(["Enable", "Disable"]),
        ),
        rampUpActionOnDisconnect: Schema.optional(
          Schema.Literals(["None", "Deallocate"]),
        ),
        rampUpMinutesToWaitOnDisconnect: Schema.optional(Schema.Number),
        rampUpActionOnLogoff: Schema.optional(
          Schema.Literals(["None", "Deallocate"]),
        ),
        rampUpMinutesToWaitOnLogoff: Schema.optional(Schema.Number),
        peakStartTime: Schema.optional(
          Schema.Struct({
            hour: Schema.Number,
            minute: Schema.Number,
          }),
        ),
        peakStartVMOnConnect: Schema.optional(
          Schema.Literals(["Enable", "Disable"]),
        ),
        peakActionOnDisconnect: Schema.optional(
          Schema.Literals(["None", "Deallocate"]),
        ),
        peakMinutesToWaitOnDisconnect: Schema.optional(Schema.Number),
        peakActionOnLogoff: Schema.optional(
          Schema.Literals(["None", "Deallocate"]),
        ),
        peakMinutesToWaitOnLogoff: Schema.optional(Schema.Number),
        rampDownStartTime: Schema.optional(
          Schema.Struct({
            hour: Schema.Number,
            minute: Schema.Number,
          }),
        ),
        rampDownStartVMOnConnect: Schema.optional(
          Schema.Literals(["Enable", "Disable"]),
        ),
        rampDownActionOnDisconnect: Schema.optional(
          Schema.Literals(["None", "Deallocate"]),
        ),
        rampDownMinutesToWaitOnDisconnect: Schema.optional(Schema.Number),
        rampDownActionOnLogoff: Schema.optional(
          Schema.Literals(["None", "Deallocate", "Hibernate"]),
        ),
        rampDownMinutesToWaitOnLogoff: Schema.optional(Schema.Number),
        offPeakStartTime: Schema.optional(
          Schema.Struct({
            hour: Schema.Number,
            minute: Schema.Number,
          }),
        ),
        offPeakStartVMOnConnect: Schema.optional(
          Schema.Literals(["Enable", "Disable"]),
        ),
        offPeakActionOnDisconnect: Schema.optional(
          Schema.Literals(["None", "Deallocate", "Hibernate"]),
        ),
        offPeakMinutesToWaitOnDisconnect: Schema.optional(Schema.Number),
        offPeakActionOnLogoff: Schema.optional(
          Schema.Literals(["None", "Deallocate", "Hibernate"]),
        ),
        offPeakMinutesToWaitOnLogoff: Schema.optional(Schema.Number),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/scalingPlans/{scalingPlanName}/personalSchedules/{scalingPlanScheduleName}",
      apiVersion: "2025-10-10",
    }),
  ) as unknown as Schema.Codec<ScalingPlanPersonalSchedulesUpdateInput>;

// Output Schema
export interface ScalingPlanPersonalSchedulesUpdateOutput {
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
export const ScalingPlanPersonalSchedulesUpdateOutput =
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
  }) as unknown as Schema.Codec<ScalingPlanPersonalSchedulesUpdateOutput>;

// The operation
/**
 * Update a ScalingPlanPersonalSchedule.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param scalingPlanName - The name of the scaling plan.
 * @param scalingPlanScheduleName - The name of the ScalingPlanSchedule
 */
export const ScalingPlanPersonalSchedulesUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ScalingPlanPersonalSchedulesUpdateInput,
    outputSchema: ScalingPlanPersonalSchedulesUpdateOutput,
  }));
// Input Schema
export interface ScalingPlanPooledSchedulesCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  scalingPlanName: string;
  scalingPlanScheduleName: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  properties: {
    daysOfWeek?: (
      | "Monday"
      | "Tuesday"
      | "Wednesday"
      | "Thursday"
      | "Friday"
      | "Saturday"
      | "Sunday"
    )[];
    rampUpStartTime?: { hour: number; minute: number };
    rampUpLoadBalancingAlgorithm?: "BreadthFirst" | "DepthFirst";
    rampUpMinimumHostsPct?: number;
    rampUpCapacityThresholdPct?: number;
    peakStartTime?: { hour: number; minute: number };
    peakLoadBalancingAlgorithm?: "BreadthFirst" | "DepthFirst";
    rampDownStartTime?: { hour: number; minute: number };
    rampDownLoadBalancingAlgorithm?: "BreadthFirst" | "DepthFirst";
    rampDownMinimumHostsPct?: number;
    rampDownCapacityThresholdPct?: number;
    rampDownForceLogoffUsers?: boolean;
    rampDownStopHostsWhen?: "ZeroSessions" | "ZeroActiveSessions";
    rampDownWaitTimeMinutes?: number;
    rampDownNotificationMessage?: string;
    offPeakStartTime?: { hour: number; minute: number };
    offPeakLoadBalancingAlgorithm?: "BreadthFirst" | "DepthFirst";
  };
  id?: string;
  name?: string;
  type?: string;
}
export const ScalingPlanPooledSchedulesCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    scalingPlanName: Schema.String.pipe(T.PathParam()),
    scalingPlanScheduleName: Schema.String.pipe(T.PathParam()),
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
    properties: Schema.Struct({
      daysOfWeek: Schema.optional(
        Schema.Array(
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
      ),
      rampUpStartTime: Schema.optional(
        Schema.Struct({
          hour: Schema.Number,
          minute: Schema.Number,
        }),
      ),
      rampUpLoadBalancingAlgorithm: Schema.optional(
        Schema.Literals(["BreadthFirst", "DepthFirst"]),
      ),
      rampUpMinimumHostsPct: Schema.optional(Schema.Number),
      rampUpCapacityThresholdPct: Schema.optional(Schema.Number),
      peakStartTime: Schema.optional(
        Schema.Struct({
          hour: Schema.Number,
          minute: Schema.Number,
        }),
      ),
      peakLoadBalancingAlgorithm: Schema.optional(
        Schema.Literals(["BreadthFirst", "DepthFirst"]),
      ),
      rampDownStartTime: Schema.optional(
        Schema.Struct({
          hour: Schema.Number,
          minute: Schema.Number,
        }),
      ),
      rampDownLoadBalancingAlgorithm: Schema.optional(
        Schema.Literals(["BreadthFirst", "DepthFirst"]),
      ),
      rampDownMinimumHostsPct: Schema.optional(Schema.Number),
      rampDownCapacityThresholdPct: Schema.optional(Schema.Number),
      rampDownForceLogoffUsers: Schema.optional(Schema.Boolean),
      rampDownStopHostsWhen: Schema.optional(
        Schema.Literals(["ZeroSessions", "ZeroActiveSessions"]),
      ),
      rampDownWaitTimeMinutes: Schema.optional(Schema.Number),
      rampDownNotificationMessage: Schema.optional(Schema.String),
      offPeakStartTime: Schema.optional(
        Schema.Struct({
          hour: Schema.Number,
          minute: Schema.Number,
        }),
      ),
      offPeakLoadBalancingAlgorithm: Schema.optional(
        Schema.Literals(["BreadthFirst", "DepthFirst"]),
      ),
    }),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/scalingPlans/{scalingPlanName}/pooledSchedules/{scalingPlanScheduleName}",
      apiVersion: "2025-10-10",
    }),
  ) as unknown as Schema.Codec<ScalingPlanPooledSchedulesCreateInput>;

// Output Schema
export interface ScalingPlanPooledSchedulesCreateOutput {
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
export const ScalingPlanPooledSchedulesCreateOutput =
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
  }) as unknown as Schema.Codec<ScalingPlanPooledSchedulesCreateOutput>;

// The operation
/**
 * Create or update a ScalingPlanPooledSchedule.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param scalingPlanName - The name of the scaling plan.
 * @param scalingPlanScheduleName - The name of the ScalingPlanSchedule
 */
export const ScalingPlanPooledSchedulesCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ScalingPlanPooledSchedulesCreateInput,
    outputSchema: ScalingPlanPooledSchedulesCreateOutput,
  }));
// Input Schema
export interface ScalingPlanPooledSchedulesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  scalingPlanName: string;
  scalingPlanScheduleName: string;
}
export const ScalingPlanPooledSchedulesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    scalingPlanName: Schema.String.pipe(T.PathParam()),
    scalingPlanScheduleName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/scalingPlans/{scalingPlanName}/pooledSchedules/{scalingPlanScheduleName}",
      apiVersion: "2025-10-10",
    }),
  ) as unknown as Schema.Codec<ScalingPlanPooledSchedulesDeleteInput>;

// Output Schema
export type ScalingPlanPooledSchedulesDeleteOutput = void;
export const ScalingPlanPooledSchedulesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ScalingPlanPooledSchedulesDeleteOutput>;

// The operation
/**
 * Remove a ScalingPlanPooledSchedule.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param scalingPlanName - The name of the scaling plan.
 * @param scalingPlanScheduleName - The name of the ScalingPlanSchedule
 */
export const ScalingPlanPooledSchedulesDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ScalingPlanPooledSchedulesDeleteInput,
    outputSchema: ScalingPlanPooledSchedulesDeleteOutput,
  }));
// Input Schema
export interface ScalingPlanPooledSchedulesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  scalingPlanName: string;
  scalingPlanScheduleName: string;
}
export const ScalingPlanPooledSchedulesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    scalingPlanName: Schema.String.pipe(T.PathParam()),
    scalingPlanScheduleName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/scalingPlans/{scalingPlanName}/pooledSchedules/{scalingPlanScheduleName}",
      apiVersion: "2025-10-10",
    }),
  ) as unknown as Schema.Codec<ScalingPlanPooledSchedulesGetInput>;

// Output Schema
export interface ScalingPlanPooledSchedulesGetOutput {
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
export const ScalingPlanPooledSchedulesGetOutput =
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
  }) as unknown as Schema.Codec<ScalingPlanPooledSchedulesGetOutput>;

// The operation
/**
 * Get a ScalingPlanPooledSchedule.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param scalingPlanName - The name of the scaling plan.
 * @param scalingPlanScheduleName - The name of the ScalingPlanSchedule
 */
export const ScalingPlanPooledSchedulesGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ScalingPlanPooledSchedulesGetInput,
    outputSchema: ScalingPlanPooledSchedulesGetOutput,
  }));
// Input Schema
export interface ScalingPlanPooledSchedulesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  scalingPlanName: string;
  pageSize?: number;
  isDescending?: boolean;
  initialSkip?: number;
}
export const ScalingPlanPooledSchedulesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    scalingPlanName: Schema.String.pipe(T.PathParam()),
    pageSize: Schema.optional(Schema.Number),
    isDescending: Schema.optional(Schema.Boolean),
    initialSkip: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/scalingPlans/{scalingPlanName}/pooledSchedules",
      apiVersion: "2025-10-10",
    }),
  ) as unknown as Schema.Codec<ScalingPlanPooledSchedulesListInput>;

// Output Schema
export interface ScalingPlanPooledSchedulesListOutput {
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
export const ScalingPlanPooledSchedulesListOutput =
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
  }) as unknown as Schema.Codec<ScalingPlanPooledSchedulesListOutput>;

// The operation
/**
 * List ScalingPlanPooledSchedules.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param scalingPlanName - The name of the scaling plan.
 * @param pageSize - Number of items per page.
 * @param isDescending - Indicates whether the collection is descending.
 * @param initialSkip - Initial number of items to skip.
 */
export const ScalingPlanPooledSchedulesList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ScalingPlanPooledSchedulesListInput,
    outputSchema: ScalingPlanPooledSchedulesListOutput,
  }));
// Input Schema
export interface ScalingPlanPooledSchedulesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  scalingPlanName: string;
  scalingPlanScheduleName: string;
  properties?: {
    daysOfWeek?: (
      | "Monday"
      | "Tuesday"
      | "Wednesday"
      | "Thursday"
      | "Friday"
      | "Saturday"
      | "Sunday"
    )[];
    rampUpStartTime?: { hour: number; minute: number };
    rampUpLoadBalancingAlgorithm?: "BreadthFirst" | "DepthFirst";
    rampUpMinimumHostsPct?: number;
    rampUpCapacityThresholdPct?: number;
    peakStartTime?: { hour: number; minute: number };
    peakLoadBalancingAlgorithm?: "BreadthFirst" | "DepthFirst";
    rampDownStartTime?: { hour: number; minute: number };
    rampDownLoadBalancingAlgorithm?: "BreadthFirst" | "DepthFirst";
    rampDownMinimumHostsPct?: number;
    rampDownCapacityThresholdPct?: number;
    rampDownForceLogoffUsers?: boolean;
    rampDownStopHostsWhen?: "ZeroSessions" | "ZeroActiveSessions";
    rampDownWaitTimeMinutes?: number;
    rampDownNotificationMessage?: string;
    offPeakStartTime?: { hour: number; minute: number };
    offPeakLoadBalancingAlgorithm?: "BreadthFirst" | "DepthFirst";
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
export const ScalingPlanPooledSchedulesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    scalingPlanName: Schema.String.pipe(T.PathParam()),
    scalingPlanScheduleName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        daysOfWeek: Schema.optional(
          Schema.Array(
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
        ),
        rampUpStartTime: Schema.optional(
          Schema.Struct({
            hour: Schema.Number,
            minute: Schema.Number,
          }),
        ),
        rampUpLoadBalancingAlgorithm: Schema.optional(
          Schema.Literals(["BreadthFirst", "DepthFirst"]),
        ),
        rampUpMinimumHostsPct: Schema.optional(Schema.Number),
        rampUpCapacityThresholdPct: Schema.optional(Schema.Number),
        peakStartTime: Schema.optional(
          Schema.Struct({
            hour: Schema.Number,
            minute: Schema.Number,
          }),
        ),
        peakLoadBalancingAlgorithm: Schema.optional(
          Schema.Literals(["BreadthFirst", "DepthFirst"]),
        ),
        rampDownStartTime: Schema.optional(
          Schema.Struct({
            hour: Schema.Number,
            minute: Schema.Number,
          }),
        ),
        rampDownLoadBalancingAlgorithm: Schema.optional(
          Schema.Literals(["BreadthFirst", "DepthFirst"]),
        ),
        rampDownMinimumHostsPct: Schema.optional(Schema.Number),
        rampDownCapacityThresholdPct: Schema.optional(Schema.Number),
        rampDownForceLogoffUsers: Schema.optional(Schema.Boolean),
        rampDownStopHostsWhen: Schema.optional(
          Schema.Literals(["ZeroSessions", "ZeroActiveSessions"]),
        ),
        rampDownWaitTimeMinutes: Schema.optional(Schema.Number),
        rampDownNotificationMessage: Schema.optional(Schema.String),
        offPeakStartTime: Schema.optional(
          Schema.Struct({
            hour: Schema.Number,
            minute: Schema.Number,
          }),
        ),
        offPeakLoadBalancingAlgorithm: Schema.optional(
          Schema.Literals(["BreadthFirst", "DepthFirst"]),
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
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/scalingPlans/{scalingPlanName}/pooledSchedules/{scalingPlanScheduleName}",
      apiVersion: "2025-10-10",
    }),
  ) as unknown as Schema.Codec<ScalingPlanPooledSchedulesUpdateInput>;

// Output Schema
export interface ScalingPlanPooledSchedulesUpdateOutput {
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
export const ScalingPlanPooledSchedulesUpdateOutput =
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
  }) as unknown as Schema.Codec<ScalingPlanPooledSchedulesUpdateOutput>;

// The operation
/**
 * Update a ScalingPlanPooledSchedule.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param scalingPlanName - The name of the scaling plan.
 * @param scalingPlanScheduleName - The name of the ScalingPlanSchedule
 */
export const ScalingPlanPooledSchedulesUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ScalingPlanPooledSchedulesUpdateInput,
    outputSchema: ScalingPlanPooledSchedulesUpdateOutput,
  }));
// Input Schema
export interface ScalingPlansCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  scalingPlanName: string;
  managedBy?: string;
  kind?: string;
  etag?: string;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type: "None" | "SystemAssigned";
  };
  sku?: {
    name: string;
    tier?: "Free" | "Basic" | "Standard" | "Premium";
    size?: string;
    family?: string;
    capacity?: number;
  };
  plan?: {
    name: string;
    publisher: string;
    product: string;
    promotionCode?: string;
    version?: string;
  };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  properties: {
    objectId?: string;
    description?: string;
    friendlyName?: string;
    timeZone: string;
    hostPoolType?: "Pooled";
    exclusionTag?: string;
    schedules?: {
      name?: string;
      daysOfWeek?: (
        | "Sunday"
        | "Monday"
        | "Tuesday"
        | "Wednesday"
        | "Thursday"
        | "Friday"
        | "Saturday"
      )[];
      rampUpStartTime?: { hour: number; minute: number };
      rampUpLoadBalancingAlgorithm?: "BreadthFirst" | "DepthFirst";
      rampUpMinimumHostsPct?: number;
      rampUpCapacityThresholdPct?: number;
      peakStartTime?: { hour: number; minute: number };
      peakLoadBalancingAlgorithm?: "BreadthFirst" | "DepthFirst";
      rampDownStartTime?: { hour: number; minute: number };
      rampDownLoadBalancingAlgorithm?: "BreadthFirst" | "DepthFirst";
      rampDownMinimumHostsPct?: number;
      rampDownCapacityThresholdPct?: number;
      rampDownForceLogoffUsers?: boolean;
      rampDownStopHostsWhen?: "ZeroSessions" | "ZeroActiveSessions";
      rampDownWaitTimeMinutes?: number;
      rampDownNotificationMessage?: string;
      offPeakStartTime?: { hour: number; minute: number };
      offPeakLoadBalancingAlgorithm?: "BreadthFirst" | "DepthFirst";
    }[];
    hostPoolReferences?: {
      hostPoolArmPath?: string;
      scalingPlanEnabled?: boolean;
    }[];
  };
  tags?: Record<string, string>;
  location: string;
}
export const ScalingPlansCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    scalingPlanName: Schema.String.pipe(T.PathParam()),
    managedBy: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.Literals(["None", "SystemAssigned"]),
      }),
    ),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        tier: Schema.optional(
          Schema.Literals(["Free", "Basic", "Standard", "Premium"]),
        ),
        size: Schema.optional(Schema.String),
        family: Schema.optional(Schema.String),
        capacity: Schema.optional(Schema.Number),
      }),
    ),
    plan: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        publisher: Schema.String,
        product: Schema.String,
        promotionCode: Schema.optional(Schema.String),
        version: Schema.optional(Schema.String),
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
    properties: Schema.Struct({
      objectId: Schema.optional(Schema.String),
      description: Schema.optional(Schema.String),
      friendlyName: Schema.optional(Schema.String),
      timeZone: Schema.String,
      hostPoolType: Schema.optional(Schema.Literals(["Pooled"])),
      exclusionTag: Schema.optional(Schema.String),
      schedules: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.optional(Schema.String),
            daysOfWeek: Schema.optional(
              Schema.Array(
                Schema.Literals([
                  "Sunday",
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ]),
              ),
            ),
            rampUpStartTime: Schema.optional(
              Schema.Struct({
                hour: Schema.Number,
                minute: Schema.Number,
              }),
            ),
            rampUpLoadBalancingAlgorithm: Schema.optional(
              Schema.Literals(["BreadthFirst", "DepthFirst"]),
            ),
            rampUpMinimumHostsPct: Schema.optional(Schema.Number),
            rampUpCapacityThresholdPct: Schema.optional(Schema.Number),
            peakStartTime: Schema.optional(
              Schema.Struct({
                hour: Schema.Number,
                minute: Schema.Number,
              }),
            ),
            peakLoadBalancingAlgorithm: Schema.optional(
              Schema.Literals(["BreadthFirst", "DepthFirst"]),
            ),
            rampDownStartTime: Schema.optional(
              Schema.Struct({
                hour: Schema.Number,
                minute: Schema.Number,
              }),
            ),
            rampDownLoadBalancingAlgorithm: Schema.optional(
              Schema.Literals(["BreadthFirst", "DepthFirst"]),
            ),
            rampDownMinimumHostsPct: Schema.optional(Schema.Number),
            rampDownCapacityThresholdPct: Schema.optional(Schema.Number),
            rampDownForceLogoffUsers: Schema.optional(Schema.Boolean),
            rampDownStopHostsWhen: Schema.optional(
              Schema.Literals(["ZeroSessions", "ZeroActiveSessions"]),
            ),
            rampDownWaitTimeMinutes: Schema.optional(Schema.Number),
            rampDownNotificationMessage: Schema.optional(Schema.String),
            offPeakStartTime: Schema.optional(
              Schema.Struct({
                hour: Schema.Number,
                minute: Schema.Number,
              }),
            ),
            offPeakLoadBalancingAlgorithm: Schema.optional(
              Schema.Literals(["BreadthFirst", "DepthFirst"]),
            ),
          }),
        ),
      ),
      hostPoolReferences: Schema.optional(
        Schema.Array(
          Schema.Struct({
            hostPoolArmPath: Schema.optional(Schema.String),
            scalingPlanEnabled: Schema.optional(Schema.Boolean),
          }),
        ),
      ),
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/scalingPlans/{scalingPlanName}",
      apiVersion: "2025-10-10",
    }),
  ) as unknown as Schema.Codec<ScalingPlansCreateInput>;

// Output Schema
export interface ScalingPlansCreateOutput {
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
export const ScalingPlansCreateOutput =
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
  }) as unknown as Schema.Codec<ScalingPlansCreateOutput>;

// The operation
/**
 * Create or update a scaling plan.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param scalingPlanName - The name of the scaling plan.
 */
export const ScalingPlansCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ScalingPlansCreateInput,
  outputSchema: ScalingPlansCreateOutput,
}));
// Input Schema
export interface ScalingPlansDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  scalingPlanName: string;
}
export const ScalingPlansDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    scalingPlanName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/scalingPlans/{scalingPlanName}",
      apiVersion: "2025-10-10",
    }),
  ) as unknown as Schema.Codec<ScalingPlansDeleteInput>;

// Output Schema
export type ScalingPlansDeleteOutput = void;
export const ScalingPlansDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ScalingPlansDeleteOutput>;

// The operation
/**
 * Remove a scaling plan.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param scalingPlanName - The name of the scaling plan.
 */
export const ScalingPlansDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ScalingPlansDeleteInput,
  outputSchema: ScalingPlansDeleteOutput,
}));
// Input Schema
export interface ScalingPlansGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  scalingPlanName: string;
}
export const ScalingPlansGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  scalingPlanName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/scalingPlans/{scalingPlanName}",
    apiVersion: "2025-10-10",
  }),
) as unknown as Schema.Codec<ScalingPlansGetInput>;

// Output Schema
export interface ScalingPlansGetOutput {
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
export const ScalingPlansGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ScalingPlansGetOutput>;

// The operation
/**
 * Get a scaling plan.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param scalingPlanName - The name of the scaling plan.
 */
export const ScalingPlansGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ScalingPlansGetInput,
  outputSchema: ScalingPlansGetOutput,
}));
// Input Schema
export interface ScalingPlansListByHostPoolInput {
  subscriptionId: string;
  resourceGroupName: string;
  hostPoolName: string;
  pageSize?: number;
  isDescending?: boolean;
  initialSkip?: number;
}
export const ScalingPlansListByHostPoolInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    hostPoolName: Schema.String.pipe(T.PathParam()),
    pageSize: Schema.optional(Schema.Number),
    isDescending: Schema.optional(Schema.Boolean),
    initialSkip: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/hostPools/{hostPoolName}/scalingPlans",
      apiVersion: "2025-10-10",
    }),
  ) as unknown as Schema.Codec<ScalingPlansListByHostPoolInput>;

// Output Schema
export interface ScalingPlansListByHostPoolOutput {
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
export const ScalingPlansListByHostPoolOutput =
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
  }) as unknown as Schema.Codec<ScalingPlansListByHostPoolOutput>;

// The operation
/**
 * List scaling plan associated with hostpool.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param hostPoolName - The name of the host pool within the specified resource group
 * @param pageSize - Number of items per page.
 * @param isDescending - Indicates whether the collection is descending.
 * @param initialSkip - Initial number of items to skip.
 */
export const ScalingPlansListByHostPool = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ScalingPlansListByHostPoolInput,
    outputSchema: ScalingPlansListByHostPoolOutput,
  }),
);
// Input Schema
export interface ScalingPlansListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  pageSize?: number;
  isDescending?: boolean;
  initialSkip?: number;
}
export const ScalingPlansListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    pageSize: Schema.optional(Schema.Number),
    isDescending: Schema.optional(Schema.Boolean),
    initialSkip: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/scalingPlans",
      apiVersion: "2025-10-10",
    }),
  ) as unknown as Schema.Codec<ScalingPlansListByResourceGroupInput>;

// Output Schema
export interface ScalingPlansListByResourceGroupOutput {
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
export const ScalingPlansListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<ScalingPlansListByResourceGroupOutput>;

// The operation
/**
 * List scaling plans.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param pageSize - Number of items per page.
 * @param isDescending - Indicates whether the collection is descending.
 * @param initialSkip - Initial number of items to skip.
 */
export const ScalingPlansListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ScalingPlansListByResourceGroupInput,
    outputSchema: ScalingPlansListByResourceGroupOutput,
  }));
// Input Schema
export interface ScalingPlansListBySubscriptionInput {
  subscriptionId: string;
  pageSize?: number;
  isDescending?: boolean;
  initialSkip?: number;
}
export const ScalingPlansListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    pageSize: Schema.optional(Schema.Number),
    isDescending: Schema.optional(Schema.Boolean),
    initialSkip: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DesktopVirtualization/scalingPlans",
      apiVersion: "2025-10-10",
    }),
  ) as unknown as Schema.Codec<ScalingPlansListBySubscriptionInput>;

// Output Schema
export interface ScalingPlansListBySubscriptionOutput {
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
export const ScalingPlansListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<ScalingPlansListBySubscriptionOutput>;

// The operation
/**
 * List scaling plans in subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param pageSize - Number of items per page.
 * @param isDescending - Indicates whether the collection is descending.
 * @param initialSkip - Initial number of items to skip.
 */
export const ScalingPlansListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ScalingPlansListBySubscriptionInput,
    outputSchema: ScalingPlansListBySubscriptionOutput,
  }));
// Input Schema
export interface ScalingPlansUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  scalingPlanName: string;
  tags?: Record<string, string> | null;
  properties?: {
    description?: string;
    friendlyName?: string;
    timeZone?: string;
    exclusionTag?: string;
    schedules?: {
      name?: string;
      daysOfWeek?: (
        | "Sunday"
        | "Monday"
        | "Tuesday"
        | "Wednesday"
        | "Thursday"
        | "Friday"
        | "Saturday"
      )[];
      rampUpStartTime?: { hour: number; minute: number };
      rampUpLoadBalancingAlgorithm?: "BreadthFirst" | "DepthFirst";
      rampUpMinimumHostsPct?: number;
      rampUpCapacityThresholdPct?: number;
      peakStartTime?: { hour: number; minute: number };
      peakLoadBalancingAlgorithm?: "BreadthFirst" | "DepthFirst";
      rampDownStartTime?: { hour: number; minute: number };
      rampDownLoadBalancingAlgorithm?: "BreadthFirst" | "DepthFirst";
      rampDownMinimumHostsPct?: number;
      rampDownCapacityThresholdPct?: number;
      rampDownForceLogoffUsers?: boolean;
      rampDownStopHostsWhen?: "ZeroSessions" | "ZeroActiveSessions";
      rampDownWaitTimeMinutes?: number;
      rampDownNotificationMessage?: string;
      offPeakStartTime?: { hour: number; minute: number };
      offPeakLoadBalancingAlgorithm?: "BreadthFirst" | "DepthFirst";
    }[];
    hostPoolReferences?: {
      hostPoolArmPath?: string;
      scalingPlanEnabled?: boolean;
    }[];
  };
}
export const ScalingPlansUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    scalingPlanName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(
      Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
    ),
    properties: Schema.optional(
      Schema.Struct({
        description: Schema.optional(Schema.String),
        friendlyName: Schema.optional(Schema.String),
        timeZone: Schema.optional(Schema.String),
        exclusionTag: Schema.optional(Schema.String),
        schedules: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              daysOfWeek: Schema.optional(
                Schema.Array(
                  Schema.Literals([
                    "Sunday",
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ]),
                ),
              ),
              rampUpStartTime: Schema.optional(
                Schema.Struct({
                  hour: Schema.Number,
                  minute: Schema.Number,
                }),
              ),
              rampUpLoadBalancingAlgorithm: Schema.optional(
                Schema.Literals(["BreadthFirst", "DepthFirst"]),
              ),
              rampUpMinimumHostsPct: Schema.optional(Schema.Number),
              rampUpCapacityThresholdPct: Schema.optional(Schema.Number),
              peakStartTime: Schema.optional(
                Schema.Struct({
                  hour: Schema.Number,
                  minute: Schema.Number,
                }),
              ),
              peakLoadBalancingAlgorithm: Schema.optional(
                Schema.Literals(["BreadthFirst", "DepthFirst"]),
              ),
              rampDownStartTime: Schema.optional(
                Schema.Struct({
                  hour: Schema.Number,
                  minute: Schema.Number,
                }),
              ),
              rampDownLoadBalancingAlgorithm: Schema.optional(
                Schema.Literals(["BreadthFirst", "DepthFirst"]),
              ),
              rampDownMinimumHostsPct: Schema.optional(Schema.Number),
              rampDownCapacityThresholdPct: Schema.optional(Schema.Number),
              rampDownForceLogoffUsers: Schema.optional(Schema.Boolean),
              rampDownStopHostsWhen: Schema.optional(
                Schema.Literals(["ZeroSessions", "ZeroActiveSessions"]),
              ),
              rampDownWaitTimeMinutes: Schema.optional(Schema.Number),
              rampDownNotificationMessage: Schema.optional(Schema.String),
              offPeakStartTime: Schema.optional(
                Schema.Struct({
                  hour: Schema.Number,
                  minute: Schema.Number,
                }),
              ),
              offPeakLoadBalancingAlgorithm: Schema.optional(
                Schema.Literals(["BreadthFirst", "DepthFirst"]),
              ),
            }),
          ),
        ),
        hostPoolReferences: Schema.optional(
          Schema.Array(
            Schema.Struct({
              hostPoolArmPath: Schema.optional(Schema.String),
              scalingPlanEnabled: Schema.optional(Schema.Boolean),
            }),
          ),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/scalingPlans/{scalingPlanName}",
      apiVersion: "2025-10-10",
    }),
  ) as unknown as Schema.Codec<ScalingPlansUpdateInput>;

// Output Schema
export interface ScalingPlansUpdateOutput {
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
export const ScalingPlansUpdateOutput =
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
  }) as unknown as Schema.Codec<ScalingPlansUpdateOutput>;

// The operation
/**
 * Update a scaling plan.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param scalingPlanName - The name of the scaling plan.
 */
export const ScalingPlansUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ScalingPlansUpdateInput,
  outputSchema: ScalingPlansUpdateOutput,
}));
// Input Schema
export interface SessionHostsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  hostPoolName: string;
  sessionHostName: string;
  force?: boolean;
}
export const SessionHostsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    hostPoolName: Schema.String.pipe(T.PathParam()),
    sessionHostName: Schema.String.pipe(T.PathParam()),
    force: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/hostPools/{hostPoolName}/sessionHosts/{sessionHostName}",
      apiVersion: "2025-10-10",
    }),
  ) as unknown as Schema.Codec<SessionHostsDeleteInput>;

// Output Schema
export type SessionHostsDeleteOutput = void;
export const SessionHostsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<SessionHostsDeleteOutput>;

// The operation
/**
 * Remove a SessionHost.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param hostPoolName - The name of the host pool within the specified resource group
 * @param sessionHostName - The name of the session host within the specified host pool
 * @param force - Force flag to force sessionHost deletion even when userSession exists.
 */
export const SessionHostsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SessionHostsDeleteInput,
  outputSchema: SessionHostsDeleteOutput,
}));
// Input Schema
export interface SessionHostsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  hostPoolName: string;
  sessionHostName: string;
}
export const SessionHostsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  hostPoolName: Schema.String.pipe(T.PathParam()),
  sessionHostName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/hostPools/{hostPoolName}/sessionHosts/{sessionHostName}",
    apiVersion: "2025-10-10",
  }),
) as unknown as Schema.Codec<SessionHostsGetInput>;

// Output Schema
export interface SessionHostsGetOutput {
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
export const SessionHostsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<SessionHostsGetOutput>;

// The operation
/**
 * Get a session host.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param hostPoolName - The name of the host pool within the specified resource group
 * @param sessionHostName - The name of the session host within the specified host pool
 */
export const SessionHostsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SessionHostsGetInput,
  outputSchema: SessionHostsGetOutput,
}));
// Input Schema
export interface SessionHostsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  hostPoolName: string;
  pageSize?: number;
  isDescending?: boolean;
  initialSkip?: number;
}
export const SessionHostsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  hostPoolName: Schema.String.pipe(T.PathParam()),
  pageSize: Schema.optional(Schema.Number),
  isDescending: Schema.optional(Schema.Boolean),
  initialSkip: Schema.optional(Schema.Number),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/hostPools/{hostPoolName}/sessionHosts",
    apiVersion: "2025-10-10",
  }),
) as unknown as Schema.Codec<SessionHostsListInput>;

// Output Schema
export interface SessionHostsListOutput {
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
export const SessionHostsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
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
) as unknown as Schema.Codec<SessionHostsListOutput>;

// The operation
/**
 * List sessionHosts.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param hostPoolName - The name of the host pool within the specified resource group
 * @param pageSize - Number of items per page.
 * @param isDescending - Indicates whether the collection is descending.
 * @param initialSkip - Initial number of items to skip.
 */
export const SessionHostsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SessionHostsListInput,
  outputSchema: SessionHostsListOutput,
}));
// Input Schema
export interface SessionHostsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  hostPoolName: string;
  sessionHostName: string;
  force?: boolean;
  properties?: {
    allowNewSession?: boolean;
    assignedUser?: string;
    friendlyName?: string;
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
export const SessionHostsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    hostPoolName: Schema.String.pipe(T.PathParam()),
    sessionHostName: Schema.String.pipe(T.PathParam()),
    force: Schema.optional(Schema.Boolean),
    properties: Schema.optional(
      Schema.Struct({
        allowNewSession: Schema.optional(Schema.Boolean),
        assignedUser: Schema.optional(Schema.String),
        friendlyName: Schema.optional(Schema.String),
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
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/hostPools/{hostPoolName}/sessionHosts/{sessionHostName}",
      apiVersion: "2025-10-10",
    }),
  ) as unknown as Schema.Codec<SessionHostsUpdateInput>;

// Output Schema
export interface SessionHostsUpdateOutput {
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
export const SessionHostsUpdateOutput =
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
  }) as unknown as Schema.Codec<SessionHostsUpdateOutput>;

// The operation
/**
 * Update a session host.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param hostPoolName - The name of the host pool within the specified resource group
 * @param sessionHostName - The name of the session host within the specified host pool
 * @param force - Force flag to update assign, unassign or reassign personal desktop.
 */
export const SessionHostsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SessionHostsUpdateInput,
  outputSchema: SessionHostsUpdateOutput,
}));
// Input Schema
export interface StartMenuItemsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  applicationGroupName: string;
  pageSize?: number;
  isDescending?: boolean;
  initialSkip?: number;
}
export const StartMenuItemsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    applicationGroupName: Schema.String.pipe(T.PathParam()),
    pageSize: Schema.optional(Schema.Number),
    isDescending: Schema.optional(Schema.Boolean),
    initialSkip: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/applicationGroups/{applicationGroupName}/startMenuItems",
      apiVersion: "2025-10-10",
    }),
  ) as unknown as Schema.Codec<StartMenuItemsListInput>;

// Output Schema
export interface StartMenuItemsListOutput {
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
export const StartMenuItemsListOutput =
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
  }) as unknown as Schema.Codec<StartMenuItemsListOutput>;

// The operation
/**
 * List start menu items in the given application group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param applicationGroupName - The name of the application group
 * @param pageSize - Number of items per page.
 * @param isDescending - Indicates whether the collection is descending.
 * @param initialSkip - Initial number of items to skip.
 */
export const StartMenuItemsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: StartMenuItemsListInput,
  outputSchema: StartMenuItemsListOutput,
}));
// Input Schema
export interface UserSessionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  hostPoolName: string;
  sessionHostName: string;
  userSessionId: string;
  force?: boolean;
}
export const UserSessionsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    hostPoolName: Schema.String.pipe(T.PathParam()),
    sessionHostName: Schema.String.pipe(T.PathParam()),
    userSessionId: Schema.String.pipe(T.PathParam()),
    force: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/hostPools/{hostPoolName}/sessionHosts/{sessionHostName}/userSessions/{userSessionId}",
      apiVersion: "2025-10-10",
    }),
  ) as unknown as Schema.Codec<UserSessionsDeleteInput>;

// Output Schema
export type UserSessionsDeleteOutput = void;
export const UserSessionsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<UserSessionsDeleteOutput>;

// The operation
/**
 * Remove a userSession.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param hostPoolName - The name of the host pool within the specified resource group
 * @param sessionHostName - The name of the session host within the specified host pool
 * @param userSessionId - The name of the user session within the specified session host
 * @param force - Force flag to login off userSession.
 */
export const UserSessionsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UserSessionsDeleteInput,
  outputSchema: UserSessionsDeleteOutput,
}));
// Input Schema
export interface UserSessionsDisconnectInput {
  subscriptionId: string;
  resourceGroupName: string;
  hostPoolName: string;
  sessionHostName: string;
  userSessionId: string;
}
export const UserSessionsDisconnectInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    hostPoolName: Schema.String.pipe(T.PathParam()),
    sessionHostName: Schema.String.pipe(T.PathParam()),
    userSessionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/hostPools/{hostPoolName}/sessionHosts/{sessionHostName}/userSessions/{userSessionId}/disconnect",
      apiVersion: "2025-10-10",
    }),
  ) as unknown as Schema.Codec<UserSessionsDisconnectInput>;

// Output Schema
export type UserSessionsDisconnectOutput = void;
export const UserSessionsDisconnectOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<UserSessionsDisconnectOutput>;

// The operation
/**
 * Disconnect a userSession.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param hostPoolName - The name of the host pool within the specified resource group
 * @param sessionHostName - The name of the session host within the specified host pool
 * @param userSessionId - The name of the user session within the specified session host
 */
export const UserSessionsDisconnect = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: UserSessionsDisconnectInput,
    outputSchema: UserSessionsDisconnectOutput,
  }),
);
// Input Schema
export interface UserSessionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  hostPoolName: string;
  sessionHostName: string;
  userSessionId: string;
}
export const UserSessionsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  hostPoolName: Schema.String.pipe(T.PathParam()),
  sessionHostName: Schema.String.pipe(T.PathParam()),
  userSessionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/hostPools/{hostPoolName}/sessionHosts/{sessionHostName}/userSessions/{userSessionId}",
    apiVersion: "2025-10-10",
  }),
) as unknown as Schema.Codec<UserSessionsGetInput>;

// Output Schema
export interface UserSessionsGetOutput {
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
export const UserSessionsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<UserSessionsGetOutput>;

// The operation
/**
 * Get a userSession.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param hostPoolName - The name of the host pool within the specified resource group
 * @param sessionHostName - The name of the session host within the specified host pool
 * @param userSessionId - The name of the user session within the specified session host
 */
export const UserSessionsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UserSessionsGetInput,
  outputSchema: UserSessionsGetOutput,
}));
// Input Schema
export interface UserSessionsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  hostPoolName: string;
  sessionHostName: string;
  pageSize?: number;
  isDescending?: boolean;
  initialSkip?: number;
}
export const UserSessionsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  hostPoolName: Schema.String.pipe(T.PathParam()),
  sessionHostName: Schema.String.pipe(T.PathParam()),
  pageSize: Schema.optional(Schema.Number),
  isDescending: Schema.optional(Schema.Boolean),
  initialSkip: Schema.optional(Schema.Number),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/hostPools/{hostPoolName}/sessionHosts/{sessionHostName}/userSessions",
    apiVersion: "2025-10-10",
  }),
) as unknown as Schema.Codec<UserSessionsListInput>;

// Output Schema
export interface UserSessionsListOutput {
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
export const UserSessionsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
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
) as unknown as Schema.Codec<UserSessionsListOutput>;

// The operation
/**
 * List userSessions.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param hostPoolName - The name of the host pool within the specified resource group
 * @param sessionHostName - The name of the session host within the specified host pool
 * @param pageSize - Number of items per page.
 * @param isDescending - Indicates whether the collection is descending.
 * @param initialSkip - Initial number of items to skip.
 */
export const UserSessionsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UserSessionsListInput,
  outputSchema: UserSessionsListOutput,
}));
// Input Schema
export interface UserSessionsListByHostPoolInput {
  subscriptionId: string;
  resourceGroupName: string;
  hostPoolName: string;
  $filter?: string;
  pageSize?: number;
  isDescending?: boolean;
  initialSkip?: number;
}
export const UserSessionsListByHostPoolInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    hostPoolName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
    isDescending: Schema.optional(Schema.Boolean),
    initialSkip: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/hostPools/{hostPoolName}/userSessions",
      apiVersion: "2025-10-10",
    }),
  ) as unknown as Schema.Codec<UserSessionsListByHostPoolInput>;

// Output Schema
export interface UserSessionsListByHostPoolOutput {
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
export const UserSessionsListByHostPoolOutput =
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
  }) as unknown as Schema.Codec<UserSessionsListByHostPoolOutput>;

// The operation
/**
 * List userSessions.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param hostPoolName - The name of the host pool within the specified resource group
 * @param $filter - OData filter expression. Valid properties for filtering are userprincipalname and sessionstate.
 * @param pageSize - Number of items per page.
 * @param isDescending - Indicates whether the collection is descending.
 * @param initialSkip - Initial number of items to skip.
 */
export const UserSessionsListByHostPool = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: UserSessionsListByHostPoolInput,
    outputSchema: UserSessionsListByHostPoolOutput,
  }),
);
// Input Schema
export interface UserSessionsSendMessageInput {
  subscriptionId: string;
  resourceGroupName: string;
  hostPoolName: string;
  sessionHostName: string;
  userSessionId: string;
  messageTitle?: string;
  messageBody?: string;
}
export const UserSessionsSendMessageInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    hostPoolName: Schema.String.pipe(T.PathParam()),
    sessionHostName: Schema.String.pipe(T.PathParam()),
    userSessionId: Schema.String.pipe(T.PathParam()),
    messageTitle: Schema.optional(Schema.String),
    messageBody: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/hostPools/{hostPoolName}/sessionHosts/{sessionHostName}/userSessions/{userSessionId}/sendMessage",
      apiVersion: "2025-10-10",
    }),
  ) as unknown as Schema.Codec<UserSessionsSendMessageInput>;

// Output Schema
export type UserSessionsSendMessageOutput = void;
export const UserSessionsSendMessageOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<UserSessionsSendMessageOutput>;

// The operation
/**
 * Send a message to a user.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param hostPoolName - The name of the host pool within the specified resource group
 * @param sessionHostName - The name of the session host within the specified host pool
 * @param userSessionId - The name of the user session within the specified session host
 */
export const UserSessionsSendMessage = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: UserSessionsSendMessageInput,
    outputSchema: UserSessionsSendMessageOutput,
  }),
);
// Input Schema
export interface WorkspacesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  managedBy?: string;
  kind?: string;
  etag?: string;
  identity?: {
    principalId?: string;
    tenantId?: string;
    type: "None" | "SystemAssigned";
  };
  sku?: {
    name: string;
    tier?: "Free" | "Basic" | "Standard" | "Premium";
    size?: string;
    family?: string;
    capacity?: number;
  };
  plan?: {
    name: string;
    publisher: string;
    product: string;
    promotionCode?: string;
    version?: string;
  };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  properties?: {
    objectId?: string;
    description?: string;
    friendlyName?: string;
    applicationGroupReferences?: string[] | null;
    cloudPcResource?: boolean | null;
    publicNetworkAccess?: "Enabled" | "Disabled" | null;
    privateEndpointConnections?:
      | {
          id?: string;
          name?: string;
          type?: string;
          systemData?: {
            createdBy?: string;
            createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
            createdAt?: string;
            lastModifiedBy?: string;
            lastModifiedByType?:
              | "User"
              | "Application"
              | "ManagedIdentity"
              | "Key";
            lastModifiedAt?: string;
          };
        }[]
      | null;
  };
  tags?: Record<string, string>;
  location: string;
}
export const WorkspacesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    workspaceName: Schema.String.pipe(T.PathParam()),
    managedBy: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.Literals(["None", "SystemAssigned"]),
      }),
    ),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        tier: Schema.optional(
          Schema.Literals(["Free", "Basic", "Standard", "Premium"]),
        ),
        size: Schema.optional(Schema.String),
        family: Schema.optional(Schema.String),
        capacity: Schema.optional(Schema.Number),
      }),
    ),
    plan: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        publisher: Schema.String,
        product: Schema.String,
        promotionCode: Schema.optional(Schema.String),
        version: Schema.optional(Schema.String),
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
    properties: Schema.optional(
      Schema.Struct({
        objectId: Schema.optional(Schema.String),
        description: Schema.optional(Schema.String),
        friendlyName: Schema.optional(Schema.String),
        applicationGroupReferences: Schema.optional(
          Schema.NullOr(Schema.Array(Schema.String)),
        ),
        cloudPcResource: Schema.optional(Schema.NullOr(Schema.Boolean)),
        publicNetworkAccess: Schema.optional(
          Schema.NullOr(Schema.Literals(["Enabled", "Disabled"])),
        ),
        privateEndpointConnections: Schema.optional(
          Schema.NullOr(
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
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/workspaces/{workspaceName}",
      apiVersion: "2025-10-10",
    }),
  ) as unknown as Schema.Codec<WorkspacesCreateOrUpdateInput>;

// Output Schema
export interface WorkspacesCreateOrUpdateOutput {
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
export const WorkspacesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<WorkspacesCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a workspace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace
 */
export const WorkspacesCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WorkspacesCreateOrUpdateInput,
    outputSchema: WorkspacesCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface WorkspacesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
}
export const WorkspacesDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/workspaces/{workspaceName}",
    apiVersion: "2025-10-10",
  }),
) as unknown as Schema.Codec<WorkspacesDeleteInput>;

// Output Schema
export type WorkspacesDeleteOutput = void;
export const WorkspacesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<WorkspacesDeleteOutput>;

// The operation
/**
 * Remove a workspace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace
 */
export const WorkspacesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WorkspacesDeleteInput,
  outputSchema: WorkspacesDeleteOutput,
}));
// Input Schema
export interface WorkspacesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
}
export const WorkspacesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/workspaces/{workspaceName}",
    apiVersion: "2025-10-10",
  }),
) as unknown as Schema.Codec<WorkspacesGetInput>;

// Output Schema
export interface WorkspacesGetOutput {
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
export const WorkspacesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<WorkspacesGetOutput>;

// The operation
/**
 * Get a workspace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace
 */
export const WorkspacesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WorkspacesGetInput,
  outputSchema: WorkspacesGetOutput,
}));
// Input Schema
export interface WorkspacesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  pageSize?: number;
  isDescending?: boolean;
  initialSkip?: number;
}
export const WorkspacesListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    pageSize: Schema.optional(Schema.Number),
    isDescending: Schema.optional(Schema.Boolean),
    initialSkip: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/workspaces",
      apiVersion: "2025-10-10",
    }),
  ) as unknown as Schema.Codec<WorkspacesListByResourceGroupInput>;

// Output Schema
export interface WorkspacesListByResourceGroupOutput {
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
export const WorkspacesListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<WorkspacesListByResourceGroupOutput>;

// The operation
/**
 * List workspaces.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param pageSize - Number of items per page.
 * @param isDescending - Indicates whether the collection is descending.
 * @param initialSkip - Initial number of items to skip.
 */
export const WorkspacesListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WorkspacesListByResourceGroupInput,
    outputSchema: WorkspacesListByResourceGroupOutput,
  }));
// Input Schema
export interface WorkspacesListBySubscriptionInput {
  subscriptionId: string;
}
export const WorkspacesListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DesktopVirtualization/workspaces",
      apiVersion: "2025-10-10",
    }),
  ) as unknown as Schema.Codec<WorkspacesListBySubscriptionInput>;

// Output Schema
export interface WorkspacesListBySubscriptionOutput {
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
export const WorkspacesListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<WorkspacesListBySubscriptionOutput>;

// The operation
/**
 * List workspaces in subscription.
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
export interface WorkspacesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;
  tags?: Record<string, string> | null;
  properties?: {
    description?: string;
    friendlyName?: string;
    applicationGroupReferences?: string[] | null;
    publicNetworkAccess?: "Enabled" | "Disabled" | null;
  };
}
export const WorkspacesUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  workspaceName: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(
    Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
  ),
  properties: Schema.optional(
    Schema.Struct({
      description: Schema.optional(Schema.String),
      friendlyName: Schema.optional(Schema.String),
      applicationGroupReferences: Schema.optional(
        Schema.NullOr(Schema.Array(Schema.String)),
      ),
      publicNetworkAccess: Schema.optional(
        Schema.NullOr(Schema.Literals(["Enabled", "Disabled"])),
      ),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/workspaces/{workspaceName}",
    apiVersion: "2025-10-10",
  }),
) as unknown as Schema.Codec<WorkspacesUpdateInput>;

// Output Schema
export interface WorkspacesUpdateOutput {
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
export const WorkspacesUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
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
) as unknown as Schema.Codec<WorkspacesUpdateOutput>;

// The operation
/**
 * Update a workspace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param workspaceName - The name of the workspace
 */
export const WorkspacesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WorkspacesUpdateInput,
  outputSchema: WorkspacesUpdateOutput,
}));
