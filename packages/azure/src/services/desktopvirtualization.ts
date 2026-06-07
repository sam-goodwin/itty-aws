/**
 * Azure Desktopvirtualization API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const AppAttachPackageCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
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
  );
export type AppAttachPackageCreateOrUpdateInput =
  typeof AppAttachPackageCreateOrUpdateInput.Type;

// Output Schema
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
  });
export type AppAttachPackageCreateOrUpdateOutput =
  typeof AppAttachPackageCreateOrUpdateOutput.Type;

// The operation
/**
 * Create or update an App Attach package.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const AppAttachPackageCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AppAttachPackageCreateOrUpdateInput,
    outputSchema: AppAttachPackageCreateOrUpdateOutput,
  }));
// Input Schema
export const AppAttachPackageDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/appAttachPackages/{appAttachPackageName}",
      apiVersion: "2025-10-10",
    }),
  );
export type AppAttachPackageDeleteInput =
  typeof AppAttachPackageDeleteInput.Type;

// Output Schema
export const AppAttachPackageDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AppAttachPackageDeleteOutput =
  typeof AppAttachPackageDeleteOutput.Type;

// The operation
/**
 * Remove an App Attach Package.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const AppAttachPackageDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AppAttachPackageDeleteInput,
    outputSchema: AppAttachPackageDeleteOutput,
  }),
);
// Input Schema
export const AppAttachPackageGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/appAttachPackages/{appAttachPackageName}",
      apiVersion: "2025-10-10",
    }),
  );
export type AppAttachPackageGetInput = typeof AppAttachPackageGetInput.Type;

// Output Schema
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
  });
export type AppAttachPackageGetOutput = typeof AppAttachPackageGetOutput.Type;

// The operation
/**
 * Get an app attach package.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const AppAttachPackageGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AppAttachPackageGetInput,
  outputSchema: AppAttachPackageGetOutput,
}));
// Input Schema
export const AppAttachPackageInfoImportInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
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
  );
export type AppAttachPackageInfoImportInput =
  typeof AppAttachPackageInfoImportInput.Type;

// Output Schema
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
  });
export type AppAttachPackageInfoImportOutput =
  typeof AppAttachPackageInfoImportOutput.Type;

// The operation
/**
 * Gets information from a package given the path to the package.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const AppAttachPackageInfoImport = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AppAttachPackageInfoImportInput,
    outputSchema: AppAttachPackageInfoImportOutput,
  }),
);
// Input Schema
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
  );
export type AppAttachPackageListByResourceGroupInput =
  typeof AppAttachPackageListByResourceGroupInput.Type;

// Output Schema
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
  });
export type AppAttachPackageListByResourceGroupOutput =
  typeof AppAttachPackageListByResourceGroupOutput.Type;

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
  );
export type AppAttachPackageListBySubscriptionInput =
  typeof AppAttachPackageListBySubscriptionInput.Type;

// Output Schema
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
  });
export type AppAttachPackageListBySubscriptionOutput =
  typeof AppAttachPackageListBySubscriptionOutput.Type;

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
export const AppAttachPackageUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
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
  );
export type AppAttachPackageUpdateInput =
  typeof AppAttachPackageUpdateInput.Type;

// Output Schema
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
  });
export type AppAttachPackageUpdateOutput =
  typeof AppAttachPackageUpdateOutput.Type;

// The operation
/**
 * Update an App Attach Package
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const AppAttachPackageUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AppAttachPackageUpdateInput,
    outputSchema: AppAttachPackageUpdateOutput,
  }),
);
// Input Schema
export const ApplicationGroupsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
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
  );
export type ApplicationGroupsCreateOrUpdateInput =
  typeof ApplicationGroupsCreateOrUpdateInput.Type;

// Output Schema
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
  });
export type ApplicationGroupsCreateOrUpdateOutput =
  typeof ApplicationGroupsCreateOrUpdateOutput.Type;

// The operation
/**
 * Create or update an applicationGroup.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ApplicationGroupsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ApplicationGroupsCreateOrUpdateInput,
    outputSchema: ApplicationGroupsCreateOrUpdateOutput,
  }));
// Input Schema
export const ApplicationGroupsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/applicationGroups/{applicationGroupName}",
      apiVersion: "2025-10-10",
    }),
  );
export type ApplicationGroupsDeleteInput =
  typeof ApplicationGroupsDeleteInput.Type;

// Output Schema
export const ApplicationGroupsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ApplicationGroupsDeleteOutput =
  typeof ApplicationGroupsDeleteOutput.Type;

// The operation
/**
 * Remove an applicationGroup.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ApplicationGroupsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ApplicationGroupsDeleteInput,
    outputSchema: ApplicationGroupsDeleteOutput,
  }),
);
// Input Schema
export const ApplicationGroupsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/applicationGroups/{applicationGroupName}",
      apiVersion: "2025-10-10",
    }),
  );
export type ApplicationGroupsGetInput = typeof ApplicationGroupsGetInput.Type;

// Output Schema
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
  });
export type ApplicationGroupsGetOutput = typeof ApplicationGroupsGetOutput.Type;

// The operation
/**
 * Get an application group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ApplicationGroupsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ApplicationGroupsGetInput,
    outputSchema: ApplicationGroupsGetOutput,
  }),
);
// Input Schema
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
  );
export type ApplicationGroupsListByResourceGroupInput =
  typeof ApplicationGroupsListByResourceGroupInput.Type;

// Output Schema
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
  });
export type ApplicationGroupsListByResourceGroupOutput =
  typeof ApplicationGroupsListByResourceGroupOutput.Type;

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
  );
export type ApplicationGroupsListBySubscriptionInput =
  typeof ApplicationGroupsListBySubscriptionInput.Type;

// Output Schema
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
  });
export type ApplicationGroupsListBySubscriptionOutput =
  typeof ApplicationGroupsListBySubscriptionOutput.Type;

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
export const ApplicationGroupsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
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
  );
export type ApplicationGroupsUpdateInput =
  typeof ApplicationGroupsUpdateInput.Type;

// Output Schema
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
  });
export type ApplicationGroupsUpdateOutput =
  typeof ApplicationGroupsUpdateOutput.Type;

// The operation
/**
 * Update an applicationGroup.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ApplicationGroupsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ApplicationGroupsUpdateInput,
    outputSchema: ApplicationGroupsUpdateOutput,
  }),
);
// Input Schema
export const ApplicationsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
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
  );
export type ApplicationsCreateOrUpdateInput =
  typeof ApplicationsCreateOrUpdateInput.Type;

// Output Schema
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
  });
export type ApplicationsCreateOrUpdateOutput =
  typeof ApplicationsCreateOrUpdateOutput.Type;

// The operation
/**
 * Create or update an application.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ApplicationsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ApplicationsCreateOrUpdateInput,
    outputSchema: ApplicationsCreateOrUpdateOutput,
  }),
);
// Input Schema
export const ApplicationsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/applicationGroups/{applicationGroupName}/applications/{applicationName}",
      apiVersion: "2025-10-10",
    }),
  );
export type ApplicationsDeleteInput = typeof ApplicationsDeleteInput.Type;

// Output Schema
export const ApplicationsDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ApplicationsDeleteOutput = typeof ApplicationsDeleteOutput.Type;

// The operation
/**
 * Remove an application.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ApplicationsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ApplicationsDeleteInput,
  outputSchema: ApplicationsDeleteOutput,
}));
// Input Schema
export const ApplicationsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/applicationGroups/{applicationGroupName}/applications/{applicationName}",
    apiVersion: "2025-10-10",
  }),
);
export type ApplicationsGetInput = typeof ApplicationsGetInput.Type;

// Output Schema
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
});
export type ApplicationsGetOutput = typeof ApplicationsGetOutput.Type;

// The operation
/**
 * Get an application.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ApplicationsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ApplicationsGetInput,
  outputSchema: ApplicationsGetOutput,
}));
// Input Schema
export const ApplicationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  pageSize: Schema.optional(Schema.Number),
  isDescending: Schema.optional(Schema.Boolean),
  initialSkip: Schema.optional(Schema.Number),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/applicationGroups/{applicationGroupName}/applications",
    apiVersion: "2025-10-10",
  }),
);
export type ApplicationsListInput = typeof ApplicationsListInput.Type;

// Output Schema
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
);
export type ApplicationsListOutput = typeof ApplicationsListOutput.Type;

// The operation
/**
 * List applications.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param pageSize - Number of items per page.
 * @param isDescending - Indicates whether the collection is descending.
 * @param initialSkip - Initial number of items to skip.
 */
export const ApplicationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ApplicationsListInput,
  outputSchema: ApplicationsListOutput,
}));
// Input Schema
export const ApplicationsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
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
  );
export type ApplicationsUpdateInput = typeof ApplicationsUpdateInput.Type;

// Output Schema
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
  });
export type ApplicationsUpdateOutput = typeof ApplicationsUpdateOutput.Type;

// The operation
/**
 * Update an application.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ApplicationsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ApplicationsUpdateInput,
  outputSchema: ApplicationsUpdateOutput,
}));
// Input Schema
export const DesktopsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/applicationGroups/{applicationGroupName}/desktops/{desktopName}",
    apiVersion: "2025-10-10",
  }),
);
export type DesktopsGetInput = typeof DesktopsGetInput.Type;

// Output Schema
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
});
export type DesktopsGetOutput = typeof DesktopsGetOutput.Type;

// The operation
/**
 * Get a desktop.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const DesktopsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DesktopsGetInput,
  outputSchema: DesktopsGetOutput,
}));
// Input Schema
export const DesktopsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  pageSize: Schema.optional(Schema.Number),
  isDescending: Schema.optional(Schema.Boolean),
  initialSkip: Schema.optional(Schema.Number),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/applicationGroups/{applicationGroupName}/desktops",
    apiVersion: "2025-10-10",
  }),
);
export type DesktopsListInput = typeof DesktopsListInput.Type;

// Output Schema
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
});
export type DesktopsListOutput = typeof DesktopsListOutput.Type;

// The operation
/**
 * List desktops.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param pageSize - Number of items per page.
 * @param isDescending - Indicates whether the collection is descending.
 * @param initialSkip - Initial number of items to skip.
 */
export const DesktopsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DesktopsListInput,
  outputSchema: DesktopsListOutput,
}));
// Input Schema
export const DesktopsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
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
);
export type DesktopsUpdateInput = typeof DesktopsUpdateInput.Type;

// Output Schema
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
});
export type DesktopsUpdateOutput = typeof DesktopsUpdateOutput.Type;

// The operation
/**
 * Update a desktop.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const DesktopsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DesktopsUpdateInput,
  outputSchema: DesktopsUpdateOutput,
}));
// Input Schema
export const HostPoolsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
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
  );
export type HostPoolsCreateOrUpdateInput =
  typeof HostPoolsCreateOrUpdateInput.Type;

// Output Schema
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
  });
export type HostPoolsCreateOrUpdateOutput =
  typeof HostPoolsCreateOrUpdateOutput.Type;

// The operation
/**
 * Create or update a host pool.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const HostPoolsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: HostPoolsCreateOrUpdateInput,
    outputSchema: HostPoolsCreateOrUpdateOutput,
  }),
);
// Input Schema
export const HostPoolsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  force: Schema.optional(Schema.Boolean),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/hostPools/{hostPoolName}",
    apiVersion: "2025-10-10",
  }),
);
export type HostPoolsDeleteInput = typeof HostPoolsDeleteInput.Type;

// Output Schema
export const HostPoolsDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type HostPoolsDeleteOutput = typeof HostPoolsDeleteOutput.Type;

// The operation
/**
 * Remove a host pool.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param force - Force flag to delete sessionHost.
 */
export const HostPoolsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: HostPoolsDeleteInput,
  outputSchema: HostPoolsDeleteOutput,
}));
// Input Schema
export const HostPoolsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/hostPools/{hostPoolName}",
    apiVersion: "2025-10-10",
  }),
);
export type HostPoolsGetInput = typeof HostPoolsGetInput.Type;

// Output Schema
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
});
export type HostPoolsGetOutput = typeof HostPoolsGetOutput.Type;

// The operation
/**
 * Get a host pool.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const HostPoolsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: HostPoolsGetInput,
  outputSchema: HostPoolsGetOutput,
}));
// Input Schema
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
);
export type HostPoolsListInput = typeof HostPoolsListInput.Type;

// Output Schema
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
});
export type HostPoolsListOutput = typeof HostPoolsListOutput.Type;

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
  );
export type HostPoolsListByResourceGroupInput =
  typeof HostPoolsListByResourceGroupInput.Type;

// Output Schema
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
  });
export type HostPoolsListByResourceGroupOutput =
  typeof HostPoolsListByResourceGroupOutput.Type;

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
export const HostPoolsListRegistrationTokensInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/hostPools/{hostPoolName}/listRegistrationTokens",
      apiVersion: "2025-10-10",
    }),
  );
export type HostPoolsListRegistrationTokensInput =
  typeof HostPoolsListRegistrationTokensInput.Type;

// Output Schema
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
  });
export type HostPoolsListRegistrationTokensOutput =
  typeof HostPoolsListRegistrationTokensOutput.Type;

// The operation
/**
 * Operation to list the RegistrationTokens associated with the HostPool
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const HostPoolsListRegistrationTokens =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: HostPoolsListRegistrationTokensInput,
    outputSchema: HostPoolsListRegistrationTokensOutput,
  }));
// Input Schema
export const HostPoolsRetrieveRegistrationTokenInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/hostPools/{hostPoolName}/retrieveRegistrationToken",
      apiVersion: "2025-10-10",
    }),
  );
export type HostPoolsRetrieveRegistrationTokenInput =
  typeof HostPoolsRetrieveRegistrationTokenInput.Type;

// Output Schema
export const HostPoolsRetrieveRegistrationTokenOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expirationTime: Schema.optional(Schema.NullOr(Schema.String)),
    token: Schema.optional(Schema.String),
    registrationTokenOperation: Schema.optional(
      Schema.Literals(["Delete", "None", "Update"]),
    ),
  });
export type HostPoolsRetrieveRegistrationTokenOutput =
  typeof HostPoolsRetrieveRegistrationTokenOutput.Type;

// The operation
/**
 * Registration token of the host pool.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const HostPoolsRetrieveRegistrationToken =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: HostPoolsRetrieveRegistrationTokenInput,
    outputSchema: HostPoolsRetrieveRegistrationTokenOutput,
  }));
// Input Schema
export const HostPoolsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
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
);
export type HostPoolsUpdateInput = typeof HostPoolsUpdateInput.Type;

// Output Schema
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
});
export type HostPoolsUpdateOutput = typeof HostPoolsUpdateOutput.Type;

// The operation
/**
 * Update a host pool.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const HostPoolsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: HostPoolsUpdateInput,
  outputSchema: HostPoolsUpdateOutput,
}));
// Input Schema
export const MsixImagesExpandInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  uri: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/hostPools/{hostPoolName}/expandMsixImage",
    apiVersion: "2025-10-10",
  }),
);
export type MsixImagesExpandInput = typeof MsixImagesExpandInput.Type;

// Output Schema
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
);
export type MsixImagesExpandOutput = typeof MsixImagesExpandOutput.Type;

// The operation
/**
 * Expands and Lists MSIX packages in an Image, given the Image Path.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const MsixImagesExpand = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: MsixImagesExpandInput,
  outputSchema: MsixImagesExpandOutput,
}));
// Input Schema
export const MSIXPackagesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
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
  );
export type MSIXPackagesCreateOrUpdateInput =
  typeof MSIXPackagesCreateOrUpdateInput.Type;

// Output Schema
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
  });
export type MSIXPackagesCreateOrUpdateOutput =
  typeof MSIXPackagesCreateOrUpdateOutput.Type;

// The operation
/**
 * Create or update a MSIX package.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const MSIXPackagesCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: MSIXPackagesCreateOrUpdateInput,
    outputSchema: MSIXPackagesCreateOrUpdateOutput,
  }),
);
// Input Schema
export const MSIXPackagesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/hostPools/{hostPoolName}/msixPackages/{msixPackageFullName}",
      apiVersion: "2025-10-10",
    }),
  );
export type MSIXPackagesDeleteInput = typeof MSIXPackagesDeleteInput.Type;

// Output Schema
export const MSIXPackagesDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type MSIXPackagesDeleteOutput = typeof MSIXPackagesDeleteOutput.Type;

// The operation
/**
 * Remove an MSIX Package.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const MSIXPackagesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: MSIXPackagesDeleteInput,
  outputSchema: MSIXPackagesDeleteOutput,
}));
// Input Schema
export const MSIXPackagesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/hostPools/{hostPoolName}/msixPackages/{msixPackageFullName}",
    apiVersion: "2025-10-10",
  }),
);
export type MSIXPackagesGetInput = typeof MSIXPackagesGetInput.Type;

// Output Schema
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
});
export type MSIXPackagesGetOutput = typeof MSIXPackagesGetOutput.Type;

// The operation
/**
 * Get a msixpackage.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const MSIXPackagesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: MSIXPackagesGetInput,
  outputSchema: MSIXPackagesGetOutput,
}));
// Input Schema
export const MSIXPackagesListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  pageSize: Schema.optional(Schema.Number),
  isDescending: Schema.optional(Schema.Boolean),
  initialSkip: Schema.optional(Schema.Number),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/hostPools/{hostPoolName}/msixPackages",
    apiVersion: "2025-10-10",
  }),
);
export type MSIXPackagesListInput = typeof MSIXPackagesListInput.Type;

// Output Schema
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
);
export type MSIXPackagesListOutput = typeof MSIXPackagesListOutput.Type;

// The operation
/**
 * List MSIX packages in hostpool.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param pageSize - Number of items per page.
 * @param isDescending - Indicates whether the collection is descending.
 * @param initialSkip - Initial number of items to skip.
 */
export const MSIXPackagesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: MSIXPackagesListInput,
  outputSchema: MSIXPackagesListOutput,
}));
// Input Schema
export const MSIXPackagesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
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
  );
export type MSIXPackagesUpdateInput = typeof MSIXPackagesUpdateInput.Type;

// Output Schema
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
  });
export type MSIXPackagesUpdateOutput = typeof MSIXPackagesUpdateOutput.Type;

// The operation
/**
 * Update an  MSIX Package.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const MSIXPackagesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: MSIXPackagesUpdateInput,
  outputSchema: MSIXPackagesUpdateOutput,
}));
// Input Schema
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.DesktopVirtualization/operations",
    apiVersion: "2025-10-10",
  }),
);
export type OperationsListInput = typeof OperationsListInput.Type;

// Output Schema
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
export const PrivateEndpointConnectionsDeleteByHostPoolInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/hostPools/{hostPoolName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2025-10-10",
    }),
  );
export type PrivateEndpointConnectionsDeleteByHostPoolInput =
  typeof PrivateEndpointConnectionsDeleteByHostPoolInput.Type;

// Output Schema
export const PrivateEndpointConnectionsDeleteByHostPoolOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type PrivateEndpointConnectionsDeleteByHostPoolOutput =
  typeof PrivateEndpointConnectionsDeleteByHostPoolOutput.Type;

// The operation
/**
 * Remove a connection.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource.
 */
export const PrivateEndpointConnectionsDeleteByHostPool =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsDeleteByHostPoolInput,
    outputSchema: PrivateEndpointConnectionsDeleteByHostPoolOutput,
  }));
// Input Schema
export const PrivateEndpointConnectionsDeleteByWorkspaceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/workspaces/{workspaceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2025-10-10",
    }),
  );
export type PrivateEndpointConnectionsDeleteByWorkspaceInput =
  typeof PrivateEndpointConnectionsDeleteByWorkspaceInput.Type;

// Output Schema
export const PrivateEndpointConnectionsDeleteByWorkspaceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type PrivateEndpointConnectionsDeleteByWorkspaceOutput =
  typeof PrivateEndpointConnectionsDeleteByWorkspaceOutput.Type;

// The operation
/**
 * Remove a connection.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource.
 */
export const PrivateEndpointConnectionsDeleteByWorkspace =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsDeleteByWorkspaceInput,
    outputSchema: PrivateEndpointConnectionsDeleteByWorkspaceOutput,
  }));
// Input Schema
export const PrivateEndpointConnectionsGetByHostPoolInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/hostPools/{hostPoolName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2025-10-10",
    }),
  );
export type PrivateEndpointConnectionsGetByHostPoolInput =
  typeof PrivateEndpointConnectionsGetByHostPoolInput.Type;

// Output Schema
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
  });
export type PrivateEndpointConnectionsGetByHostPoolOutput =
  typeof PrivateEndpointConnectionsGetByHostPoolOutput.Type;

// The operation
/**
 * Get a private endpoint connection.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource.
 */
export const PrivateEndpointConnectionsGetByHostPool =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsGetByHostPoolInput,
    outputSchema: PrivateEndpointConnectionsGetByHostPoolOutput,
  }));
// Input Schema
export const PrivateEndpointConnectionsGetByWorkspaceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/workspaces/{workspaceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2025-10-10",
    }),
  );
export type PrivateEndpointConnectionsGetByWorkspaceInput =
  typeof PrivateEndpointConnectionsGetByWorkspaceInput.Type;

// Output Schema
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
  });
export type PrivateEndpointConnectionsGetByWorkspaceOutput =
  typeof PrivateEndpointConnectionsGetByWorkspaceOutput.Type;

// The operation
/**
 * Get a private endpoint connection.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource.
 */
export const PrivateEndpointConnectionsGetByWorkspace =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsGetByWorkspaceInput,
    outputSchema: PrivateEndpointConnectionsGetByWorkspaceOutput,
  }));
// Input Schema
export const PrivateEndpointConnectionsListByHostPoolInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    pageSize: Schema.optional(Schema.Number),
    isDescending: Schema.optional(Schema.Boolean),
    initialSkip: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/hostPools/{hostPoolName}/privateEndpointConnections",
      apiVersion: "2025-10-10",
    }),
  );
export type PrivateEndpointConnectionsListByHostPoolInput =
  typeof PrivateEndpointConnectionsListByHostPoolInput.Type;

// Output Schema
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
  });
export type PrivateEndpointConnectionsListByHostPoolOutput =
  typeof PrivateEndpointConnectionsListByHostPoolOutput.Type;

// The operation
/**
 * List private endpoint connections associated with hostpool.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
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
export const PrivateEndpointConnectionsListByWorkspaceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/workspaces/{workspaceName}/privateEndpointConnections",
      apiVersion: "2025-10-10",
    }),
  );
export type PrivateEndpointConnectionsListByWorkspaceInput =
  typeof PrivateEndpointConnectionsListByWorkspaceInput.Type;

// Output Schema
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
  });
export type PrivateEndpointConnectionsListByWorkspaceOutput =
  typeof PrivateEndpointConnectionsListByWorkspaceOutput.Type;

// The operation
/**
 * List private endpoint connections.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const PrivateEndpointConnectionsListByWorkspace =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsListByWorkspaceInput,
    outputSchema: PrivateEndpointConnectionsListByWorkspaceOutput,
  }));
// Input Schema
export const PrivateEndpointConnectionsUpdateByHostPoolInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
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
  );
export type PrivateEndpointConnectionsUpdateByHostPoolInput =
  typeof PrivateEndpointConnectionsUpdateByHostPoolInput.Type;

// Output Schema
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
  });
export type PrivateEndpointConnectionsUpdateByHostPoolOutput =
  typeof PrivateEndpointConnectionsUpdateByHostPoolOutput.Type;

// The operation
/**
 * Approve or reject a private endpoint connection.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource.
 */
export const PrivateEndpointConnectionsUpdateByHostPool =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsUpdateByHostPoolInput,
    outputSchema: PrivateEndpointConnectionsUpdateByHostPoolOutput,
  }));
// Input Schema
export const PrivateEndpointConnectionsUpdateByWorkspaceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
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
  );
export type PrivateEndpointConnectionsUpdateByWorkspaceInput =
  typeof PrivateEndpointConnectionsUpdateByWorkspaceInput.Type;

// Output Schema
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
  });
export type PrivateEndpointConnectionsUpdateByWorkspaceOutput =
  typeof PrivateEndpointConnectionsUpdateByWorkspaceOutput.Type;

// The operation
/**
 * Approve or reject a private endpoint connection.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateEndpointConnectionName - The name of the private endpoint connection associated with the Azure resource.
 */
export const PrivateEndpointConnectionsUpdateByWorkspace =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsUpdateByWorkspaceInput,
    outputSchema: PrivateEndpointConnectionsUpdateByWorkspaceOutput,
  }));
// Input Schema
export const PrivateLinkResourcesListByHostPoolInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    pageSize: Schema.optional(Schema.Number),
    isDescending: Schema.optional(Schema.Boolean),
    initialSkip: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/hostPools/{hostPoolName}/privateLinkResources",
      apiVersion: "2025-10-10",
    }),
  );
export type PrivateLinkResourcesListByHostPoolInput =
  typeof PrivateLinkResourcesListByHostPoolInput.Type;

// Output Schema
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
  });
export type PrivateLinkResourcesListByHostPoolOutput =
  typeof PrivateLinkResourcesListByHostPoolOutput.Type;

// The operation
/**
 * List the private link resources available for this hostpool.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
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
export const PrivateLinkResourcesListByWorkspaceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    pageSize: Schema.optional(Schema.Number),
    isDescending: Schema.optional(Schema.Boolean),
    initialSkip: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/workspaces/{workspaceName}/privateLinkResources",
      apiVersion: "2025-10-10",
    }),
  );
export type PrivateLinkResourcesListByWorkspaceInput =
  typeof PrivateLinkResourcesListByWorkspaceInput.Type;

// Output Schema
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
  });
export type PrivateLinkResourcesListByWorkspaceOutput =
  typeof PrivateLinkResourcesListByWorkspaceOutput.Type;

// The operation
/**
 * List the private link resources available for this workspace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
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
export const ScalingPlanPersonalSchedulesCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
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
  );
export type ScalingPlanPersonalSchedulesCreateInput =
  typeof ScalingPlanPersonalSchedulesCreateInput.Type;

// Output Schema
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
  });
export type ScalingPlanPersonalSchedulesCreateOutput =
  typeof ScalingPlanPersonalSchedulesCreateOutput.Type;

// The operation
/**
 * Create or update a ScalingPlanPersonalSchedule.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ScalingPlanPersonalSchedulesCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ScalingPlanPersonalSchedulesCreateInput,
    outputSchema: ScalingPlanPersonalSchedulesCreateOutput,
  }));
// Input Schema
export const ScalingPlanPersonalSchedulesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/scalingPlans/{scalingPlanName}/personalSchedules/{scalingPlanScheduleName}",
      apiVersion: "2025-10-10",
    }),
  );
export type ScalingPlanPersonalSchedulesDeleteInput =
  typeof ScalingPlanPersonalSchedulesDeleteInput.Type;

// Output Schema
export const ScalingPlanPersonalSchedulesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ScalingPlanPersonalSchedulesDeleteOutput =
  typeof ScalingPlanPersonalSchedulesDeleteOutput.Type;

// The operation
/**
 * Remove a ScalingPlanPersonalSchedule.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ScalingPlanPersonalSchedulesDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ScalingPlanPersonalSchedulesDeleteInput,
    outputSchema: ScalingPlanPersonalSchedulesDeleteOutput,
  }));
// Input Schema
export const ScalingPlanPersonalSchedulesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/scalingPlans/{scalingPlanName}/personalSchedules/{scalingPlanScheduleName}",
      apiVersion: "2025-10-10",
    }),
  );
export type ScalingPlanPersonalSchedulesGetInput =
  typeof ScalingPlanPersonalSchedulesGetInput.Type;

// Output Schema
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
  });
export type ScalingPlanPersonalSchedulesGetOutput =
  typeof ScalingPlanPersonalSchedulesGetOutput.Type;

// The operation
/**
 * Get a ScalingPlanPersonalSchedule.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ScalingPlanPersonalSchedulesGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ScalingPlanPersonalSchedulesGetInput,
    outputSchema: ScalingPlanPersonalSchedulesGetOutput,
  }));
// Input Schema
export const ScalingPlanPersonalSchedulesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    pageSize: Schema.optional(Schema.Number),
    isDescending: Schema.optional(Schema.Boolean),
    initialSkip: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/scalingPlans/{scalingPlanName}/personalSchedules",
      apiVersion: "2025-10-10",
    }),
  );
export type ScalingPlanPersonalSchedulesListInput =
  typeof ScalingPlanPersonalSchedulesListInput.Type;

// Output Schema
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
  });
export type ScalingPlanPersonalSchedulesListOutput =
  typeof ScalingPlanPersonalSchedulesListOutput.Type;

// The operation
/**
 * List ScalingPlanPersonalSchedules.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
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
export const ScalingPlanPersonalSchedulesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
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
  );
export type ScalingPlanPersonalSchedulesUpdateInput =
  typeof ScalingPlanPersonalSchedulesUpdateInput.Type;

// Output Schema
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
  });
export type ScalingPlanPersonalSchedulesUpdateOutput =
  typeof ScalingPlanPersonalSchedulesUpdateOutput.Type;

// The operation
/**
 * Update a ScalingPlanPersonalSchedule.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ScalingPlanPersonalSchedulesUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ScalingPlanPersonalSchedulesUpdateInput,
    outputSchema: ScalingPlanPersonalSchedulesUpdateOutput,
  }));
// Input Schema
export const ScalingPlanPooledSchedulesCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
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
  );
export type ScalingPlanPooledSchedulesCreateInput =
  typeof ScalingPlanPooledSchedulesCreateInput.Type;

// Output Schema
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
  });
export type ScalingPlanPooledSchedulesCreateOutput =
  typeof ScalingPlanPooledSchedulesCreateOutput.Type;

// The operation
/**
 * Create or update a ScalingPlanPooledSchedule.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ScalingPlanPooledSchedulesCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ScalingPlanPooledSchedulesCreateInput,
    outputSchema: ScalingPlanPooledSchedulesCreateOutput,
  }));
// Input Schema
export const ScalingPlanPooledSchedulesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/scalingPlans/{scalingPlanName}/pooledSchedules/{scalingPlanScheduleName}",
      apiVersion: "2025-10-10",
    }),
  );
export type ScalingPlanPooledSchedulesDeleteInput =
  typeof ScalingPlanPooledSchedulesDeleteInput.Type;

// Output Schema
export const ScalingPlanPooledSchedulesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ScalingPlanPooledSchedulesDeleteOutput =
  typeof ScalingPlanPooledSchedulesDeleteOutput.Type;

// The operation
/**
 * Remove a ScalingPlanPooledSchedule.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ScalingPlanPooledSchedulesDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ScalingPlanPooledSchedulesDeleteInput,
    outputSchema: ScalingPlanPooledSchedulesDeleteOutput,
  }));
// Input Schema
export const ScalingPlanPooledSchedulesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/scalingPlans/{scalingPlanName}/pooledSchedules/{scalingPlanScheduleName}",
      apiVersion: "2025-10-10",
    }),
  );
export type ScalingPlanPooledSchedulesGetInput =
  typeof ScalingPlanPooledSchedulesGetInput.Type;

// Output Schema
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
  });
export type ScalingPlanPooledSchedulesGetOutput =
  typeof ScalingPlanPooledSchedulesGetOutput.Type;

// The operation
/**
 * Get a ScalingPlanPooledSchedule.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ScalingPlanPooledSchedulesGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ScalingPlanPooledSchedulesGetInput,
    outputSchema: ScalingPlanPooledSchedulesGetOutput,
  }));
// Input Schema
export const ScalingPlanPooledSchedulesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    pageSize: Schema.optional(Schema.Number),
    isDescending: Schema.optional(Schema.Boolean),
    initialSkip: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/scalingPlans/{scalingPlanName}/pooledSchedules",
      apiVersion: "2025-10-10",
    }),
  );
export type ScalingPlanPooledSchedulesListInput =
  typeof ScalingPlanPooledSchedulesListInput.Type;

// Output Schema
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
  });
export type ScalingPlanPooledSchedulesListOutput =
  typeof ScalingPlanPooledSchedulesListOutput.Type;

// The operation
/**
 * List ScalingPlanPooledSchedules.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
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
export const ScalingPlanPooledSchedulesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
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
  );
export type ScalingPlanPooledSchedulesUpdateInput =
  typeof ScalingPlanPooledSchedulesUpdateInput.Type;

// Output Schema
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
  });
export type ScalingPlanPooledSchedulesUpdateOutput =
  typeof ScalingPlanPooledSchedulesUpdateOutput.Type;

// The operation
/**
 * Update a ScalingPlanPooledSchedule.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ScalingPlanPooledSchedulesUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ScalingPlanPooledSchedulesUpdateInput,
    outputSchema: ScalingPlanPooledSchedulesUpdateOutput,
  }));
// Input Schema
export const ScalingPlansCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
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
  );
export type ScalingPlansCreateInput = typeof ScalingPlansCreateInput.Type;

// Output Schema
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
  });
export type ScalingPlansCreateOutput = typeof ScalingPlansCreateOutput.Type;

// The operation
/**
 * Create or update a scaling plan.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ScalingPlansCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ScalingPlansCreateInput,
  outputSchema: ScalingPlansCreateOutput,
}));
// Input Schema
export const ScalingPlansDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/scalingPlans/{scalingPlanName}",
      apiVersion: "2025-10-10",
    }),
  );
export type ScalingPlansDeleteInput = typeof ScalingPlansDeleteInput.Type;

// Output Schema
export const ScalingPlansDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ScalingPlansDeleteOutput = typeof ScalingPlansDeleteOutput.Type;

// The operation
/**
 * Remove a scaling plan.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ScalingPlansDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ScalingPlansDeleteInput,
  outputSchema: ScalingPlansDeleteOutput,
}));
// Input Schema
export const ScalingPlansGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/scalingPlans/{scalingPlanName}",
    apiVersion: "2025-10-10",
  }),
);
export type ScalingPlansGetInput = typeof ScalingPlansGetInput.Type;

// Output Schema
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
});
export type ScalingPlansGetOutput = typeof ScalingPlansGetOutput.Type;

// The operation
/**
 * Get a scaling plan.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ScalingPlansGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ScalingPlansGetInput,
  outputSchema: ScalingPlansGetOutput,
}));
// Input Schema
export const ScalingPlansListByHostPoolInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    pageSize: Schema.optional(Schema.Number),
    isDescending: Schema.optional(Schema.Boolean),
    initialSkip: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/hostPools/{hostPoolName}/scalingPlans",
      apiVersion: "2025-10-10",
    }),
  );
export type ScalingPlansListByHostPoolInput =
  typeof ScalingPlansListByHostPoolInput.Type;

// Output Schema
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
  });
export type ScalingPlansListByHostPoolOutput =
  typeof ScalingPlansListByHostPoolOutput.Type;

// The operation
/**
 * List scaling plan associated with hostpool.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
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
  );
export type ScalingPlansListByResourceGroupInput =
  typeof ScalingPlansListByResourceGroupInput.Type;

// Output Schema
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
  });
export type ScalingPlansListByResourceGroupOutput =
  typeof ScalingPlansListByResourceGroupOutput.Type;

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
  );
export type ScalingPlansListBySubscriptionInput =
  typeof ScalingPlansListBySubscriptionInput.Type;

// Output Schema
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
  });
export type ScalingPlansListBySubscriptionOutput =
  typeof ScalingPlansListBySubscriptionOutput.Type;

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
export const ScalingPlansUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
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
  );
export type ScalingPlansUpdateInput = typeof ScalingPlansUpdateInput.Type;

// Output Schema
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
  });
export type ScalingPlansUpdateOutput = typeof ScalingPlansUpdateOutput.Type;

// The operation
/**
 * Update a scaling plan.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ScalingPlansUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ScalingPlansUpdateInput,
  outputSchema: ScalingPlansUpdateOutput,
}));
// Input Schema
export const SessionHostsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    force: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/hostPools/{hostPoolName}/sessionHosts/{sessionHostName}",
      apiVersion: "2025-10-10",
    }),
  );
export type SessionHostsDeleteInput = typeof SessionHostsDeleteInput.Type;

// Output Schema
export const SessionHostsDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type SessionHostsDeleteOutput = typeof SessionHostsDeleteOutput.Type;

// The operation
/**
 * Remove a SessionHost.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param force - Force flag to force sessionHost deletion even when userSession exists.
 */
export const SessionHostsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SessionHostsDeleteInput,
  outputSchema: SessionHostsDeleteOutput,
}));
// Input Schema
export const SessionHostsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/hostPools/{hostPoolName}/sessionHosts/{sessionHostName}",
    apiVersion: "2025-10-10",
  }),
);
export type SessionHostsGetInput = typeof SessionHostsGetInput.Type;

// Output Schema
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
});
export type SessionHostsGetOutput = typeof SessionHostsGetOutput.Type;

// The operation
/**
 * Get a session host.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const SessionHostsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SessionHostsGetInput,
  outputSchema: SessionHostsGetOutput,
}));
// Input Schema
export const SessionHostsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  pageSize: Schema.optional(Schema.Number),
  isDescending: Schema.optional(Schema.Boolean),
  initialSkip: Schema.optional(Schema.Number),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/hostPools/{hostPoolName}/sessionHosts",
    apiVersion: "2025-10-10",
  }),
);
export type SessionHostsListInput = typeof SessionHostsListInput.Type;

// Output Schema
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
);
export type SessionHostsListOutput = typeof SessionHostsListOutput.Type;

// The operation
/**
 * List sessionHosts.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param pageSize - Number of items per page.
 * @param isDescending - Indicates whether the collection is descending.
 * @param initialSkip - Initial number of items to skip.
 */
export const SessionHostsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SessionHostsListInput,
  outputSchema: SessionHostsListOutput,
}));
// Input Schema
export const SessionHostsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
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
  );
export type SessionHostsUpdateInput = typeof SessionHostsUpdateInput.Type;

// Output Schema
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
  });
export type SessionHostsUpdateOutput = typeof SessionHostsUpdateOutput.Type;

// The operation
/**
 * Update a session host.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param force - Force flag to update assign, unassign or reassign personal desktop.
 */
export const SessionHostsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SessionHostsUpdateInput,
  outputSchema: SessionHostsUpdateOutput,
}));
// Input Schema
export const StartMenuItemsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    pageSize: Schema.optional(Schema.Number),
    isDescending: Schema.optional(Schema.Boolean),
    initialSkip: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/applicationGroups/{applicationGroupName}/startMenuItems",
      apiVersion: "2025-10-10",
    }),
  );
export type StartMenuItemsListInput = typeof StartMenuItemsListInput.Type;

// Output Schema
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
  });
export type StartMenuItemsListOutput = typeof StartMenuItemsListOutput.Type;

// The operation
/**
 * List start menu items in the given application group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param pageSize - Number of items per page.
 * @param isDescending - Indicates whether the collection is descending.
 * @param initialSkip - Initial number of items to skip.
 */
export const StartMenuItemsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: StartMenuItemsListInput,
  outputSchema: StartMenuItemsListOutput,
}));
// Input Schema
export const UserSessionsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    force: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/hostPools/{hostPoolName}/sessionHosts/{sessionHostName}/userSessions/{userSessionId}",
      apiVersion: "2025-10-10",
    }),
  );
export type UserSessionsDeleteInput = typeof UserSessionsDeleteInput.Type;

// Output Schema
export const UserSessionsDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type UserSessionsDeleteOutput = typeof UserSessionsDeleteOutput.Type;

// The operation
/**
 * Remove a userSession.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param force - Force flag to login off userSession.
 */
export const UserSessionsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UserSessionsDeleteInput,
  outputSchema: UserSessionsDeleteOutput,
}));
// Input Schema
export const UserSessionsDisconnectInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/hostPools/{hostPoolName}/sessionHosts/{sessionHostName}/userSessions/{userSessionId}/disconnect",
      apiVersion: "2025-10-10",
    }),
  );
export type UserSessionsDisconnectInput =
  typeof UserSessionsDisconnectInput.Type;

// Output Schema
export const UserSessionsDisconnectOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type UserSessionsDisconnectOutput =
  typeof UserSessionsDisconnectOutput.Type;

// The operation
/**
 * Disconnect a userSession.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const UserSessionsDisconnect = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: UserSessionsDisconnectInput,
    outputSchema: UserSessionsDisconnectOutput,
  }),
);
// Input Schema
export const UserSessionsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/hostPools/{hostPoolName}/sessionHosts/{sessionHostName}/userSessions/{userSessionId}",
    apiVersion: "2025-10-10",
  }),
);
export type UserSessionsGetInput = typeof UserSessionsGetInput.Type;

// Output Schema
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
});
export type UserSessionsGetOutput = typeof UserSessionsGetOutput.Type;

// The operation
/**
 * Get a userSession.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const UserSessionsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UserSessionsGetInput,
  outputSchema: UserSessionsGetOutput,
}));
// Input Schema
export const UserSessionsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  pageSize: Schema.optional(Schema.Number),
  isDescending: Schema.optional(Schema.Boolean),
  initialSkip: Schema.optional(Schema.Number),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/hostPools/{hostPoolName}/sessionHosts/{sessionHostName}/userSessions",
    apiVersion: "2025-10-10",
  }),
);
export type UserSessionsListInput = typeof UserSessionsListInput.Type;

// Output Schema
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
);
export type UserSessionsListOutput = typeof UserSessionsListOutput.Type;

// The operation
/**
 * List userSessions.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param pageSize - Number of items per page.
 * @param isDescending - Indicates whether the collection is descending.
 * @param initialSkip - Initial number of items to skip.
 */
export const UserSessionsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UserSessionsListInput,
  outputSchema: UserSessionsListOutput,
}));
// Input Schema
export const UserSessionsListByHostPoolInput =
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/hostPools/{hostPoolName}/userSessions",
      apiVersion: "2025-10-10",
    }),
  );
export type UserSessionsListByHostPoolInput =
  typeof UserSessionsListByHostPoolInput.Type;

// Output Schema
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
  });
export type UserSessionsListByHostPoolOutput =
  typeof UserSessionsListByHostPoolOutput.Type;

// The operation
/**
 * List userSessions.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
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
export const UserSessionsSendMessageInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    messageTitle: Schema.optional(Schema.String),
    messageBody: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/hostPools/{hostPoolName}/sessionHosts/{sessionHostName}/userSessions/{userSessionId}/sendMessage",
      apiVersion: "2025-10-10",
    }),
  );
export type UserSessionsSendMessageInput =
  typeof UserSessionsSendMessageInput.Type;

// Output Schema
export const UserSessionsSendMessageOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type UserSessionsSendMessageOutput =
  typeof UserSessionsSendMessageOutput.Type;

// The operation
/**
 * Send a message to a user.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const UserSessionsSendMessage = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: UserSessionsSendMessageInput,
    outputSchema: UserSessionsSendMessageOutput,
  }),
);
// Input Schema
export const WorkspacesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
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
  );
export type WorkspacesCreateOrUpdateInput =
  typeof WorkspacesCreateOrUpdateInput.Type;

// Output Schema
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
  });
export type WorkspacesCreateOrUpdateOutput =
  typeof WorkspacesCreateOrUpdateOutput.Type;

// The operation
/**
 * Create or update a workspace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
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
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/workspaces/{workspaceName}",
    apiVersion: "2025-10-10",
  }),
);
export type WorkspacesDeleteInput = typeof WorkspacesDeleteInput.Type;

// Output Schema
export const WorkspacesDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type WorkspacesDeleteOutput = typeof WorkspacesDeleteOutput.Type;

// The operation
/**
 * Remove a workspace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const WorkspacesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WorkspacesDeleteInput,
  outputSchema: WorkspacesDeleteOutput,
}));
// Input Schema
export const WorkspacesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/workspaces/{workspaceName}",
    apiVersion: "2025-10-10",
  }),
);
export type WorkspacesGetInput = typeof WorkspacesGetInput.Type;

// Output Schema
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
});
export type WorkspacesGetOutput = typeof WorkspacesGetOutput.Type;

// The operation
/**
 * Get a workspace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
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
    pageSize: Schema.optional(Schema.Number),
    isDescending: Schema.optional(Schema.Boolean),
    initialSkip: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/workspaces",
      apiVersion: "2025-10-10",
    }),
  );
export type WorkspacesListByResourceGroupInput =
  typeof WorkspacesListByResourceGroupInput.Type;

// Output Schema
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
  });
export type WorkspacesListByResourceGroupOutput =
  typeof WorkspacesListByResourceGroupOutput.Type;

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
export const WorkspacesListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DesktopVirtualization/workspaces",
      apiVersion: "2025-10-10",
    }),
  );
export type WorkspacesListBySubscriptionInput =
  typeof WorkspacesListBySubscriptionInput.Type;

// Output Schema
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
  });
export type WorkspacesListBySubscriptionOutput =
  typeof WorkspacesListBySubscriptionOutput.Type;

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
export const WorkspacesUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
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
);
export type WorkspacesUpdateInput = typeof WorkspacesUpdateInput.Type;

// Output Schema
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
);
export type WorkspacesUpdateOutput = typeof WorkspacesUpdateOutput.Type;

// The operation
/**
 * Update a workspace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const WorkspacesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WorkspacesUpdateInput,
  outputSchema: WorkspacesUpdateOutput,
}));
