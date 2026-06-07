/**
 * Azure Batch API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const ApplicationCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    applicationName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        displayName: Schema.optional(Schema.String),
        allowUpdates: Schema.optional(Schema.Boolean),
        defaultVersion: Schema.optional(Schema.String),
      }),
    ),
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  },
).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/applications/{applicationName}",
    apiVersion: "2025-06-01",
  }),
);
export type ApplicationCreateInput = typeof ApplicationCreateInput.Type;

// Output Schema
export const ApplicationCreateOutput =
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
export type ApplicationCreateOutput = typeof ApplicationCreateOutput.Type;

// The operation
/**
 * Adds an application to the specified Batch account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - A name for the Batch account which must be unique within the region. Batch account names must be between 3 and 24 characters in length and must use only numbers and lowercase letters. This name is used as part of the DNS name that is used to access the Batch service in the region in which the account is created. For example: http://accountname.region.batch.azure.com/.
 * @param applicationName - The name of the application. This must be unique within the account.
 */
export const ApplicationCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ApplicationCreateInput,
  outputSchema: ApplicationCreateOutput,
}));
// Input Schema
export const ApplicationDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    applicationName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/applications/{applicationName}",
    apiVersion: "2025-06-01",
  }),
);
export type ApplicationDeleteInput = typeof ApplicationDeleteInput.Type;

// Output Schema
export const ApplicationDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ApplicationDeleteOutput = typeof ApplicationDeleteOutput.Type;

// The operation
/**
 * Deletes an application.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - A name for the Batch account which must be unique within the region. Batch account names must be between 3 and 24 characters in length and must use only numbers and lowercase letters. This name is used as part of the DNS name that is used to access the Batch service in the region in which the account is created. For example: http://accountname.region.batch.azure.com/.
 * @param applicationName - The name of the application. This must be unique within the account.
 */
export const ApplicationDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ApplicationDeleteInput,
  outputSchema: ApplicationDeleteOutput,
}));
// Input Schema
export const ApplicationGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  applicationName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/applications/{applicationName}",
    apiVersion: "2025-06-01",
  }),
);
export type ApplicationGetInput = typeof ApplicationGetInput.Type;

// Output Schema
export const ApplicationGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type ApplicationGetOutput = typeof ApplicationGetOutput.Type;

// The operation
/**
 * Gets information about the specified application.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - A name for the Batch account which must be unique within the region. Batch account names must be between 3 and 24 characters in length and must use only numbers and lowercase letters. This name is used as part of the DNS name that is used to access the Batch service in the region in which the account is created. For example: http://accountname.region.batch.azure.com/.
 * @param applicationName - The name of the application. This must be unique within the account.
 */
export const ApplicationGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ApplicationGetInput,
  outputSchema: ApplicationGetOutput,
}));
// Input Schema
export const ApplicationListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  maxresults: Schema.optional(Schema.Number),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/applications",
    apiVersion: "2025-06-01",
  }),
);
export type ApplicationListInput = typeof ApplicationListInput.Type;

// Output Schema
export const ApplicationListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.Array(
    Schema.Struct({
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
    }),
  ),
  nextLink: Schema.optional(Schema.String),
});
export type ApplicationListOutput = typeof ApplicationListOutput.Type;

// The operation
/**
 * Lists all of the applications in the specified account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - A name for the Batch account which must be unique within the region. Batch account names must be between 3 and 24 characters in length and must use only numbers and lowercase letters. This name is used as part of the DNS name that is used to access the Batch service in the region in which the account is created. For example: http://accountname.region.batch.azure.com/.
 * @param maxresults - The maximum number of items to return in the response.
 */
export const ApplicationList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ApplicationListInput,
  outputSchema: ApplicationListOutput,
}));
// Input Schema
export const ApplicationPackageActivateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    applicationName: Schema.String.pipe(T.PathParam()),
    versionName: Schema.String.pipe(T.PathParam()),
    format: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/applications/{applicationName}/versions/{versionName}/activate",
      apiVersion: "2025-06-01",
    }),
  );
export type ApplicationPackageActivateInput =
  typeof ApplicationPackageActivateInput.Type;

// Output Schema
export const ApplicationPackageActivateOutput =
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
export type ApplicationPackageActivateOutput =
  typeof ApplicationPackageActivateOutput.Type;

// The operation
/**
 * Activates the specified application package. This should be done after the `ApplicationPackage` was created and uploaded. This needs to be done before an `ApplicationPackage` can be used on Pools or Tasks.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - A name for the Batch account which must be unique within the region. Batch account names must be between 3 and 24 characters in length and must use only numbers and lowercase letters. This name is used as part of the DNS name that is used to access the Batch service in the region in which the account is created. For example: http://accountname.region.batch.azure.com/.
 * @param applicationName - The name of the application. This must be unique within the account.
 * @param versionName - The version of the application.
 */
export const ApplicationPackageActivate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ApplicationPackageActivateInput,
    outputSchema: ApplicationPackageActivateOutput,
  }),
);
// Input Schema
export const ApplicationPackageCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    applicationName: Schema.String.pipe(T.PathParam()),
    versionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        state: Schema.optional(Schema.Literals(["Pending", "Active"])),
        format: Schema.optional(Schema.String),
        storageUrl: Schema.optional(Schema.String),
        storageUrlExpiry: Schema.optional(Schema.String),
        lastActivationTime: Schema.optional(Schema.String),
      }),
    ),
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/applications/{applicationName}/versions/{versionName}",
      apiVersion: "2025-06-01",
    }),
  );
export type ApplicationPackageCreateInput =
  typeof ApplicationPackageCreateInput.Type;

// Output Schema
export const ApplicationPackageCreateOutput =
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
export type ApplicationPackageCreateOutput =
  typeof ApplicationPackageCreateOutput.Type;

// The operation
/**
 * Creates an application package record. The record contains a storageUrl where the package should be uploaded to.  Once it is uploaded the `ApplicationPackage` needs to be activated using `ApplicationPackageActive` before it can be used. If the auto storage account was configured to use storage keys, the URL returned will contain a SAS.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - A name for the Batch account which must be unique within the region. Batch account names must be between 3 and 24 characters in length and must use only numbers and lowercase letters. This name is used as part of the DNS name that is used to access the Batch service in the region in which the account is created. For example: http://accountname.region.batch.azure.com/.
 * @param applicationName - The name of the application. This must be unique within the account.
 * @param versionName - The version of the application.
 */
export const ApplicationPackageCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ApplicationPackageCreateInput,
    outputSchema: ApplicationPackageCreateOutput,
  }),
);
// Input Schema
export const ApplicationPackageDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    applicationName: Schema.String.pipe(T.PathParam()),
    versionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/applications/{applicationName}/versions/{versionName}",
      apiVersion: "2025-06-01",
    }),
  );
export type ApplicationPackageDeleteInput =
  typeof ApplicationPackageDeleteInput.Type;

// Output Schema
export const ApplicationPackageDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ApplicationPackageDeleteOutput =
  typeof ApplicationPackageDeleteOutput.Type;

// The operation
/**
 * Deletes an application package record and its associated binary file.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - A name for the Batch account which must be unique within the region. Batch account names must be between 3 and 24 characters in length and must use only numbers and lowercase letters. This name is used as part of the DNS name that is used to access the Batch service in the region in which the account is created. For example: http://accountname.region.batch.azure.com/.
 * @param applicationName - The name of the application. This must be unique within the account.
 * @param versionName - The version of the application.
 */
export const ApplicationPackageDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ApplicationPackageDeleteInput,
    outputSchema: ApplicationPackageDeleteOutput,
  }),
);
// Input Schema
export const ApplicationPackageGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    applicationName: Schema.String.pipe(T.PathParam()),
    versionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/applications/{applicationName}/versions/{versionName}",
      apiVersion: "2025-06-01",
    }),
  );
export type ApplicationPackageGetInput = typeof ApplicationPackageGetInput.Type;

// Output Schema
export const ApplicationPackageGetOutput =
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
export type ApplicationPackageGetOutput =
  typeof ApplicationPackageGetOutput.Type;

// The operation
/**
 * Gets information about the specified application package.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - A name for the Batch account which must be unique within the region. Batch account names must be between 3 and 24 characters in length and must use only numbers and lowercase letters. This name is used as part of the DNS name that is used to access the Batch service in the region in which the account is created. For example: http://accountname.region.batch.azure.com/.
 * @param applicationName - The name of the application. This must be unique within the account.
 * @param versionName - The version of the application.
 */
export const ApplicationPackageGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ApplicationPackageGetInput,
    outputSchema: ApplicationPackageGetOutput,
  }),
);
// Input Schema
export const ApplicationPackageListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    applicationName: Schema.String.pipe(T.PathParam()),
    maxresults: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/applications/{applicationName}/versions",
      apiVersion: "2025-06-01",
    }),
  );
export type ApplicationPackageListInput =
  typeof ApplicationPackageListInput.Type;

// Output Schema
export const ApplicationPackageListOutput =
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
  });
export type ApplicationPackageListOutput =
  typeof ApplicationPackageListOutput.Type;

// The operation
/**
 * Lists all of the application packages in the specified application.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - A name for the Batch account which must be unique within the region. Batch account names must be between 3 and 24 characters in length and must use only numbers and lowercase letters. This name is used as part of the DNS name that is used to access the Batch service in the region in which the account is created. For example: http://accountname.region.batch.azure.com/.
 * @param applicationName - The name of the application. This must be unique within the account.
 * @param maxresults - The maximum number of items to return in the response.
 */
export const ApplicationPackageList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ApplicationPackageListInput,
    outputSchema: ApplicationPackageListOutput,
  }),
);
// Input Schema
export const ApplicationUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    applicationName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        displayName: Schema.optional(Schema.String),
        allowUpdates: Schema.optional(Schema.Boolean),
        defaultVersion: Schema.optional(Schema.String),
      }),
    ),
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  },
).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/applications/{applicationName}",
    apiVersion: "2025-06-01",
  }),
);
export type ApplicationUpdateInput = typeof ApplicationUpdateInput.Type;

// Output Schema
export const ApplicationUpdateOutput =
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
export type ApplicationUpdateOutput = typeof ApplicationUpdateOutput.Type;

// The operation
/**
 * Updates settings for the specified application.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - A name for the Batch account which must be unique within the region. Batch account names must be between 3 and 24 characters in length and must use only numbers and lowercase letters. This name is used as part of the DNS name that is used to access the Batch service in the region in which the account is created. For example: http://accountname.region.batch.azure.com/.
 * @param applicationName - The name of the application. This must be unique within the account.
 */
export const ApplicationUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ApplicationUpdateInput,
  outputSchema: ApplicationUpdateOutput,
}));
// Input Schema
export const BatchAccountCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    location: Schema.String,
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(
      Schema.Struct({
        autoStorage: Schema.optional(
          Schema.Struct({
            storageAccountId: Schema.String,
            authenticationMode: Schema.optional(
              Schema.Literals(["StorageKeys", "BatchAccountManagedIdentity"]),
            ),
            nodeIdentityReference: Schema.optional(
              Schema.Struct({
                resourceId: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
        poolAllocationMode: Schema.optional(
          Schema.Literals(["BatchService", "UserSubscription"]),
        ),
        keyVaultReference: Schema.optional(
          Schema.Struct({
            id: Schema.String,
            url: Schema.String,
          }),
        ),
        publicNetworkAccess: Schema.optional(
          Schema.Literals(["Enabled", "Disabled", "SecuredByPerimeter"]),
        ),
        networkProfile: Schema.optional(
          Schema.Struct({
            accountAccess: Schema.optional(
              Schema.Struct({
                defaultAction: Schema.Literals(["Allow", "Deny"]),
                ipRules: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      action: Schema.Literals(["Allow"]),
                      value: Schema.String,
                    }),
                  ),
                ),
              }),
            ),
            nodeManagementAccess: Schema.optional(
              Schema.Struct({
                defaultAction: Schema.Literals(["Allow", "Deny"]),
                ipRules: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      action: Schema.Literals(["Allow"]),
                      value: Schema.String,
                    }),
                  ),
                ),
              }),
            ),
          }),
        ),
        encryption: Schema.optional(
          Schema.Struct({
            keySource: Schema.optional(
              Schema.Literals(["Microsoft.Batch", "Microsoft.KeyVault"]),
            ),
            keyVaultProperties: Schema.optional(
              Schema.Struct({
                keyIdentifier: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
        allowedAuthenticationModes: Schema.optional(
          Schema.NullOr(
            Schema.Array(
              Schema.Literals(["SharedKey", "AAD", "TaskAuthenticationToken"]),
            ),
          ),
        ),
      }),
    ),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.Literals(["SystemAssigned", "UserAssigned", "None"]),
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
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}",
      apiVersion: "2025-06-01",
    }),
  );
export type BatchAccountCreateInput = typeof BatchAccountCreateInput.Type;

// Output Schema
export const BatchAccountCreateOutput =
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
export type BatchAccountCreateOutput = typeof BatchAccountCreateOutput.Type;

// The operation
/**
 * Creates a new Batch account with the specified parameters. Existing accounts cannot be updated with this API and should instead be updated with the Update Batch Account API.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - A name for the Batch account which must be unique within the region. Batch account names must be between 3 and 24 characters in length and must use only numbers and lowercase letters. This name is used as part of the DNS name that is used to access the Batch service in the region in which the account is created. For example: http://accountname.region.batch.azure.com/.
 */
export const BatchAccountCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BatchAccountCreateInput,
  outputSchema: BatchAccountCreateOutput,
}));
// Input Schema
export const BatchAccountDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}",
      apiVersion: "2025-06-01",
    }),
  );
export type BatchAccountDeleteInput = typeof BatchAccountDeleteInput.Type;

// Output Schema
export const BatchAccountDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type BatchAccountDeleteOutput = typeof BatchAccountDeleteOutput.Type;

// The operation
/**
 * Deletes the specified Batch account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - A name for the Batch account which must be unique within the region. Batch account names must be between 3 and 24 characters in length and must use only numbers and lowercase letters. This name is used as part of the DNS name that is used to access the Batch service in the region in which the account is created. For example: http://accountname.region.batch.azure.com/.
 */
export const BatchAccountDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BatchAccountDeleteInput,
  outputSchema: BatchAccountDeleteOutput,
}));
// Input Schema
export const BatchAccountGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}",
    apiVersion: "2025-06-01",
  }),
);
export type BatchAccountGetInput = typeof BatchAccountGetInput.Type;

// Output Schema
export const BatchAccountGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type BatchAccountGetOutput = typeof BatchAccountGetOutput.Type;

// The operation
/**
 * Gets information about the specified Batch account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - A name for the Batch account which must be unique within the region. Batch account names must be between 3 and 24 characters in length and must use only numbers and lowercase letters. This name is used as part of the DNS name that is used to access the Batch service in the region in which the account is created. For example: http://accountname.region.batch.azure.com/.
 */
export const BatchAccountGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BatchAccountGetInput,
  outputSchema: BatchAccountGetOutput,
}));
// Input Schema
export const BatchAccountGetDetectorInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    detectorId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/detectors/{detectorId}",
      apiVersion: "2025-06-01",
    }),
  );
export type BatchAccountGetDetectorInput =
  typeof BatchAccountGetDetectorInput.Type;

// Output Schema
export const BatchAccountGetDetectorOutput =
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
export type BatchAccountGetDetectorOutput =
  typeof BatchAccountGetDetectorOutput.Type;

// The operation
/**
 * Gets information about the given detector for a given Batch account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - A name for the Batch account which must be unique within the region. Batch account names must be between 3 and 24 characters in length and must use only numbers and lowercase letters. This name is used as part of the DNS name that is used to access the Batch service in the region in which the account is created. For example: http://accountname.region.batch.azure.com/.
 * @param detectorId - The name of the detector.
 */
export const BatchAccountGetDetector = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BatchAccountGetDetectorInput,
    outputSchema: BatchAccountGetDetectorOutput,
  }),
);
// Input Schema
export const BatchAccountGetKeysInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/listKeys",
      apiVersion: "2025-06-01",
    }),
  );
export type BatchAccountGetKeysInput = typeof BatchAccountGetKeysInput.Type;

// Output Schema
export const BatchAccountGetKeysOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountName: Schema.optional(Schema.String),
    primary: Schema.optional(Schema.String),
    secondary: Schema.optional(Schema.String),
  });
export type BatchAccountGetKeysOutput = typeof BatchAccountGetKeysOutput.Type;

// The operation
/**
 * Gets the account keys for the specified Batch account.
 *
 * This operation applies only to Batch accounts with allowedAuthenticationModes containing 'SharedKey'. If the Batch account doesn't contain 'SharedKey' in its allowedAuthenticationMode, clients cannot use shared keys to authenticate, and must use another allowedAuthenticationModes instead. In this case, getting the keys will fail.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - A name for the Batch account which must be unique within the region. Batch account names must be between 3 and 24 characters in length and must use only numbers and lowercase letters. This name is used as part of the DNS name that is used to access the Batch service in the region in which the account is created. For example: http://accountname.region.batch.azure.com/.
 */
export const BatchAccountGetKeys = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BatchAccountGetKeysInput,
  outputSchema: BatchAccountGetKeysOutput,
}));
// Input Schema
export const BatchAccountListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.Batch/batchAccounts",
    apiVersion: "2025-06-01",
  }),
);
export type BatchAccountListInput = typeof BatchAccountListInput.Type;

// Output Schema
export const BatchAccountListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
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
  },
);
export type BatchAccountListOutput = typeof BatchAccountListOutput.Type;

// The operation
/**
 * Gets information about the Batch accounts associated with the subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const BatchAccountList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BatchAccountListInput,
  outputSchema: BatchAccountListOutput,
}));
// Input Schema
export const BatchAccountListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts",
      apiVersion: "2025-06-01",
    }),
  );
export type BatchAccountListByResourceGroupInput =
  typeof BatchAccountListByResourceGroupInput.Type;

// Output Schema
export const BatchAccountListByResourceGroupOutput =
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
  });
export type BatchAccountListByResourceGroupOutput =
  typeof BatchAccountListByResourceGroupOutput.Type;

// The operation
/**
 * Gets information about the Batch accounts associated with the specified resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const BatchAccountListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BatchAccountListByResourceGroupInput,
    outputSchema: BatchAccountListByResourceGroupOutput,
  }));
// Input Schema
export const BatchAccountListDetectorsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/detectors",
      apiVersion: "2025-06-01",
    }),
  );
export type BatchAccountListDetectorsInput =
  typeof BatchAccountListDetectorsInput.Type;

// Output Schema
export const BatchAccountListDetectorsOutput =
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
  });
export type BatchAccountListDetectorsOutput =
  typeof BatchAccountListDetectorsOutput.Type;

// The operation
/**
 * Gets information about the detectors available for a given Batch account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - A name for the Batch account which must be unique within the region. Batch account names must be between 3 and 24 characters in length and must use only numbers and lowercase letters. This name is used as part of the DNS name that is used to access the Batch service in the region in which the account is created. For example: http://accountname.region.batch.azure.com/.
 */
export const BatchAccountListDetectors = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BatchAccountListDetectorsInput,
    outputSchema: BatchAccountListDetectorsOutput,
  }),
);
// Input Schema
export const BatchAccountListOutboundNetworkDependenciesEndpointsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/outboundNetworkDependenciesEndpoints",
      apiVersion: "2025-06-01",
    }),
  );
export type BatchAccountListOutboundNetworkDependenciesEndpointsInput =
  typeof BatchAccountListOutboundNetworkDependenciesEndpointsInput.Type;

// Output Schema
export const BatchAccountListOutboundNetworkDependenciesEndpointsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        category: Schema.optional(Schema.String),
        endpoints: Schema.optional(
          Schema.Array(
            Schema.Struct({
              domainName: Schema.optional(Schema.String),
              description: Schema.optional(Schema.String),
              endpointDetails: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    port: Schema.optional(Schema.Number),
                  }),
                ),
              ),
            }),
          ),
        ),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type BatchAccountListOutboundNetworkDependenciesEndpointsOutput =
  typeof BatchAccountListOutboundNetworkDependenciesEndpointsOutput.Type;

// The operation
/**
 * Lists the endpoints that a Batch Compute Node under this Batch Account may call as part of Batch service administration. If you are deploying a Pool inside of a virtual network that you specify, you must make sure your network allows outbound access to these endpoints. Failure to allow access to these endpoints may cause Batch to mark the affected nodes as unusable. For more information about creating a pool inside of a virtual network, see https://learn.microsoft.com/azure/batch/batch-virtual-network.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - A name for the Batch account which must be unique within the region. Batch account names must be between 3 and 24 characters in length and must use only numbers and lowercase letters. This name is used as part of the DNS name that is used to access the Batch service in the region in which the account is created. For example: http://accountname.region.batch.azure.com/.
 */
export const BatchAccountListOutboundNetworkDependenciesEndpoints =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BatchAccountListOutboundNetworkDependenciesEndpointsInput,
    outputSchema: BatchAccountListOutboundNetworkDependenciesEndpointsOutput,
  }));
// Input Schema
export const BatchAccountRegenerateKeyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    keyName: Schema.Literals(["Primary", "Secondary"]),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/regenerateKeys",
      apiVersion: "2025-06-01",
    }),
  );
export type BatchAccountRegenerateKeyInput =
  typeof BatchAccountRegenerateKeyInput.Type;

// Output Schema
export const BatchAccountRegenerateKeyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountName: Schema.optional(Schema.String),
    primary: Schema.optional(Schema.String),
    secondary: Schema.optional(Schema.String),
  });
export type BatchAccountRegenerateKeyOutput =
  typeof BatchAccountRegenerateKeyOutput.Type;

// The operation
/**
 * Regenerates the specified account key for the Batch account.
 *
 * This operation applies only to Batch accounts with allowedAuthenticationModes containing 'SharedKey'. If the Batch account doesn't contain 'SharedKey' in its allowedAuthenticationMode, clients cannot use shared keys to authenticate, and must use another allowedAuthenticationModes instead. In this case, regenerating the keys will fail.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - A name for the Batch account which must be unique within the region. Batch account names must be between 3 and 24 characters in length and must use only numbers and lowercase letters. This name is used as part of the DNS name that is used to access the Batch service in the region in which the account is created. For example: http://accountname.region.batch.azure.com/.
 */
export const BatchAccountRegenerateKey = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BatchAccountRegenerateKeyInput,
    outputSchema: BatchAccountRegenerateKeyOutput,
  }),
);
// Input Schema
export const BatchAccountSynchronizeAutoStorageKeysInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/syncAutoStorageKeys",
      apiVersion: "2025-06-01",
    }),
  );
export type BatchAccountSynchronizeAutoStorageKeysInput =
  typeof BatchAccountSynchronizeAutoStorageKeysInput.Type;

// Output Schema
export const BatchAccountSynchronizeAutoStorageKeysOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type BatchAccountSynchronizeAutoStorageKeysOutput =
  typeof BatchAccountSynchronizeAutoStorageKeysOutput.Type;

// The operation
/**
 * Synchronizes access keys for the auto-storage account configured for the specified Batch account, only if storage key authentication is being used.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - A name for the Batch account which must be unique within the region. Batch account names must be between 3 and 24 characters in length and must use only numbers and lowercase letters. This name is used as part of the DNS name that is used to access the Batch service in the region in which the account is created. For example: http://accountname.region.batch.azure.com/.
 */
export const BatchAccountSynchronizeAutoStorageKeys =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BatchAccountSynchronizeAutoStorageKeysInput,
    outputSchema: BatchAccountSynchronizeAutoStorageKeysOutput,
  }));
// Input Schema
export const BatchAccountUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(
      Schema.Struct({
        autoStorage: Schema.optional(
          Schema.Struct({
            storageAccountId: Schema.String,
            authenticationMode: Schema.optional(
              Schema.Literals(["StorageKeys", "BatchAccountManagedIdentity"]),
            ),
            nodeIdentityReference: Schema.optional(
              Schema.Struct({
                resourceId: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
        encryption: Schema.optional(
          Schema.Struct({
            keySource: Schema.optional(
              Schema.Literals(["Microsoft.Batch", "Microsoft.KeyVault"]),
            ),
            keyVaultProperties: Schema.optional(
              Schema.Struct({
                keyIdentifier: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
        allowedAuthenticationModes: Schema.optional(
          Schema.NullOr(
            Schema.Array(
              Schema.Literals(["SharedKey", "AAD", "TaskAuthenticationToken"]),
            ),
          ),
        ),
        publicNetworkAccess: Schema.optional(
          Schema.Literals(["Enabled", "Disabled", "SecuredByPerimeter"]),
        ),
        networkProfile: Schema.optional(
          Schema.Struct({
            accountAccess: Schema.optional(
              Schema.Struct({
                defaultAction: Schema.Literals(["Allow", "Deny"]),
                ipRules: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      action: Schema.Literals(["Allow"]),
                      value: Schema.String,
                    }),
                  ),
                ),
              }),
            ),
            nodeManagementAccess: Schema.optional(
              Schema.Struct({
                defaultAction: Schema.Literals(["Allow", "Deny"]),
                ipRules: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      action: Schema.Literals(["Allow"]),
                      value: Schema.String,
                    }),
                  ),
                ),
              }),
            ),
          }),
        ),
      }),
    ),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.Literals(["SystemAssigned", "UserAssigned", "None"]),
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
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}",
      apiVersion: "2025-06-01",
    }),
  );
export type BatchAccountUpdateInput = typeof BatchAccountUpdateInput.Type;

// Output Schema
export const BatchAccountUpdateOutput =
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
export type BatchAccountUpdateOutput = typeof BatchAccountUpdateOutput.Type;

// The operation
/**
 * Updates the properties of an existing Batch account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - A name for the Batch account which must be unique within the region. Batch account names must be between 3 and 24 characters in length and must use only numbers and lowercase letters. This name is used as part of the DNS name that is used to access the Batch service in the region in which the account is created. For example: http://accountname.region.batch.azure.com/.
 */
export const BatchAccountUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BatchAccountUpdateInput,
  outputSchema: BatchAccountUpdateOutput,
}));
// Input Schema
export const LocationCheckNameAvailabilityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    locationName: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
    type: Schema.Literals(["Microsoft.Batch/batchAccounts"]),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Batch/locations/{locationName}/checkNameAvailability",
      apiVersion: "2025-06-01",
    }),
  );
export type LocationCheckNameAvailabilityInput =
  typeof LocationCheckNameAvailabilityInput.Type;

// Output Schema
export const LocationCheckNameAvailabilityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.Literals(["Invalid", "AlreadyExists"])),
    message: Schema.optional(Schema.String),
  });
export type LocationCheckNameAvailabilityOutput =
  typeof LocationCheckNameAvailabilityOutput.Type;

// The operation
/**
 * Checks whether the Batch account name is available in the specified region.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param locationName - The desired region for the name check.
 */
export const LocationCheckNameAvailability =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LocationCheckNameAvailabilityInput,
    outputSchema: LocationCheckNameAvailabilityOutput,
  }));
// Input Schema
export const LocationGetQuotasInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    locationName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.Batch/locations/{locationName}/quotas",
    apiVersion: "2025-06-01",
  }),
);
export type LocationGetQuotasInput = typeof LocationGetQuotasInput.Type;

// Output Schema
export const LocationGetQuotasOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountQuota: Schema.optional(Schema.Number),
  });
export type LocationGetQuotasOutput = typeof LocationGetQuotasOutput.Type;

// The operation
/**
 * Gets the Batch service quotas for the specified subscription at the given location.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param locationName - The region for which to retrieve Batch service quotas.
 */
export const LocationGetQuotas = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LocationGetQuotasInput,
  outputSchema: LocationGetQuotasOutput,
}));
// Input Schema
export const LocationListSupportedVirtualMachineSkusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    locationName: Schema.String.pipe(T.PathParam()),
    maxresults: Schema.optional(Schema.Number),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Batch/locations/{locationName}/virtualMachineSkus",
      apiVersion: "2025-06-01",
    }),
  );
export type LocationListSupportedVirtualMachineSkusInput =
  typeof LocationListSupportedVirtualMachineSkusInput.Type;

// Output Schema
export const LocationListSupportedVirtualMachineSkusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        familyName: Schema.optional(Schema.String),
        capabilities: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              value: Schema.optional(Schema.String),
            }),
          ),
        ),
        batchSupportEndOfLife: Schema.optional(Schema.String),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type LocationListSupportedVirtualMachineSkusOutput =
  typeof LocationListSupportedVirtualMachineSkusOutput.Type;

// The operation
/**
 * Gets the list of Batch supported Virtual Machine VM sizes available at the given location.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param locationName - The region for which to retrieve Batch service supported SKUs.
 * @param maxresults - The maximum number of items to return in the response.
 * @param $filter - OData filter expression. Valid properties for filtering are "familyName".
 */
export const LocationListSupportedVirtualMachineSkus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LocationListSupportedVirtualMachineSkusInput,
    outputSchema: LocationListSupportedVirtualMachineSkusOutput,
  }));
// Input Schema
export const NetworkSecurityPerimeterGetConfigurationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    networkSecurityPerimeterConfigurationName: Schema.String.pipe(
      T.PathParam(),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/networkSecurityPerimeterConfigurations/{networkSecurityPerimeterConfigurationName}",
      apiVersion: "2025-06-01",
    }),
  );
export type NetworkSecurityPerimeterGetConfigurationInput =
  typeof NetworkSecurityPerimeterGetConfigurationInput.Type;

// Output Schema
export const NetworkSecurityPerimeterGetConfigurationOutput =
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
export type NetworkSecurityPerimeterGetConfigurationOutput =
  typeof NetworkSecurityPerimeterGetConfigurationOutput.Type;

// The operation
/**
 * Gets information about the specified NSP configuration.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - A name for the Batch account which must be unique within the region. Batch account names must be between 3 and 24 characters in length and must use only numbers and lowercase letters. This name is used as part of the DNS name that is used to access the Batch service in the region in which the account is created. For example: http://accountname.region.batch.azure.com/.
 * @param networkSecurityPerimeterConfigurationName - The name for a network security perimeter configuration
 */
export const NetworkSecurityPerimeterGetConfiguration =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkSecurityPerimeterGetConfigurationInput,
    outputSchema: NetworkSecurityPerimeterGetConfigurationOutput,
  }));
// Input Schema
export const NetworkSecurityPerimeterListConfigurationsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/networkSecurityPerimeterConfigurations",
      apiVersion: "2025-06-01",
    }),
  );
export type NetworkSecurityPerimeterListConfigurationsInput =
  typeof NetworkSecurityPerimeterListConfigurationsInput.Type;

// Output Schema
export const NetworkSecurityPerimeterListConfigurationsOutput =
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
  });
export type NetworkSecurityPerimeterListConfigurationsOutput =
  typeof NetworkSecurityPerimeterListConfigurationsOutput.Type;

// The operation
/**
 * Lists all of the NSP configurations in the specified account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - A name for the Batch account which must be unique within the region. Batch account names must be between 3 and 24 characters in length and must use only numbers and lowercase letters. This name is used as part of the DNS name that is used to access the Batch service in the region in which the account is created. For example: http://accountname.region.batch.azure.com/.
 */
export const NetworkSecurityPerimeterListConfigurations =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkSecurityPerimeterListConfigurationsInput,
    outputSchema: NetworkSecurityPerimeterListConfigurationsOutput,
  }));
// Input Schema
export const NetworkSecurityPerimeterReconcileConfigurationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    networkSecurityPerimeterConfigurationName: Schema.String.pipe(
      T.PathParam(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/networkSecurityPerimeterConfigurations/{networkSecurityPerimeterConfigurationName}/reconcile",
      apiVersion: "2025-06-01",
    }),
  );
export type NetworkSecurityPerimeterReconcileConfigurationInput =
  typeof NetworkSecurityPerimeterReconcileConfigurationInput.Type;

// Output Schema
export const NetworkSecurityPerimeterReconcileConfigurationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type NetworkSecurityPerimeterReconcileConfigurationOutput =
  typeof NetworkSecurityPerimeterReconcileConfigurationOutput.Type;

// The operation
/**
 * Reconciles the specified NSP configuration.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - A name for the Batch account which must be unique within the region. Batch account names must be between 3 and 24 characters in length and must use only numbers and lowercase letters. This name is used as part of the DNS name that is used to access the Batch service in the region in which the account is created. For example: http://accountname.region.batch.azure.com/.
 * @param networkSecurityPerimeterConfigurationName - The name for a network security perimeter configuration
 */
export const NetworkSecurityPerimeterReconcileConfiguration =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NetworkSecurityPerimeterReconcileConfigurationInput,
    outputSchema: NetworkSecurityPerimeterReconcileConfigurationOutput,
  }));
// Input Schema
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Batch/operations",
    apiVersion: "2025-06-01",
  }),
);
export type OperationsListInput = typeof OperationsListInput.Type;

// Output Schema
export const OperationsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.Array(
    Schema.Struct({
      name: Schema.optional(Schema.String),
      isDataAction: Schema.optional(Schema.Boolean),
      display: Schema.optional(
        Schema.Struct({
          provider: Schema.optional(Schema.String),
          operation: Schema.optional(Schema.String),
          resource: Schema.optional(Schema.String),
          description: Schema.optional(Schema.String),
        }),
      ),
      origin: Schema.optional(Schema.String),
      properties: Schema.optional(Schema.Unknown),
    }),
  ),
  nextLink: Schema.optional(Schema.String),
});
export type OperationsListOutput = typeof OperationsListOutput.Type;

// The operation
/**
 * Lists available operations for the Microsoft.Batch provider
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export const PoolCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  poolName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      displayName: Schema.optional(Schema.String),
      lastModified: Schema.optional(Schema.String),
      creationTime: Schema.optional(Schema.String),
      provisioningState: Schema.optional(
        Schema.Literals(["Succeeded", "Deleting"]),
      ),
      provisioningStateTransitionTime: Schema.optional(Schema.String),
      allocationState: Schema.optional(
        Schema.Literals(["Steady", "Resizing", "Stopping"]),
      ),
      allocationStateTransitionTime: Schema.optional(Schema.String),
      vmSize: Schema.optional(Schema.String),
      deploymentConfiguration: Schema.optional(
        Schema.Struct({
          virtualMachineConfiguration: Schema.optional(
            Schema.Struct({
              imageReference: Schema.Struct({
                publisher: Schema.optional(Schema.String),
                offer: Schema.optional(Schema.String),
                sku: Schema.optional(Schema.String),
                version: Schema.optional(Schema.String),
                id: Schema.optional(Schema.String),
                sharedGalleryImageId: Schema.optional(Schema.String),
                communityGalleryImageId: Schema.optional(Schema.String),
              }),
              nodeAgentSkuId: Schema.String,
              windowsConfiguration: Schema.optional(
                Schema.Struct({
                  enableAutomaticUpdates: Schema.optional(Schema.Boolean),
                }),
              ),
              dataDisks: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    lun: Schema.Number,
                    caching: Schema.optional(
                      Schema.Literals(["None", "ReadOnly", "ReadWrite"]),
                    ),
                    diskSizeGB: Schema.Number,
                    managedDisk: Schema.optional(
                      Schema.Struct({
                        storageAccountType: Schema.optional(
                          Schema.Literals([
                            "Standard_LRS",
                            "Premium_LRS",
                            "StandardSSD_LRS",
                          ]),
                        ),
                        securityProfile: Schema.optional(
                          Schema.Struct({
                            securityEncryptionType: Schema.optional(
                              Schema.Literals([
                                "NonPersistedTPM",
                                "VMGuestStateOnly",
                                "DiskWithVMGuestState",
                              ]),
                            ),
                            diskEncryptionSet: Schema.optional(
                              Schema.Struct({
                                id: Schema.String,
                              }),
                            ),
                          }),
                        ),
                        diskEncryptionSet: Schema.optional(
                          Schema.Struct({
                            id: Schema.String,
                          }),
                        ),
                      }),
                    ),
                  }),
                ),
              ),
              licenseType: Schema.optional(Schema.String),
              containerConfiguration: Schema.optional(
                Schema.Struct({
                  type: Schema.Literals(["DockerCompatible", "CriCompatible"]),
                  containerImageNames: Schema.optional(
                    Schema.Array(Schema.String),
                  ),
                  containerRegistries: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        username: Schema.optional(Schema.String),
                        password: Schema.optional(SensitiveString),
                        registryServer: Schema.optional(Schema.String),
                        identityReference: Schema.optional(
                          Schema.Struct({
                            resourceId: Schema.optional(Schema.String),
                          }),
                        ),
                      }),
                    ),
                  ),
                }),
              ),
              diskEncryptionConfiguration: Schema.optional(
                Schema.Struct({
                  targets: Schema.optional(
                    Schema.Array(Schema.Literals(["OsDisk", "TemporaryDisk"])),
                  ),
                  customerManagedKey: Schema.optional(
                    Schema.Struct({
                      keyUrl: Schema.optional(Schema.String),
                      rotationToLatestKeyVersionEnabled: Schema.optional(
                        Schema.Boolean,
                      ),
                      identityReference: Schema.optional(
                        Schema.Struct({
                          resourceId: Schema.optional(Schema.String),
                        }),
                      ),
                    }),
                  ),
                }),
              ),
              nodePlacementConfiguration: Schema.optional(
                Schema.Struct({
                  policy: Schema.optional(
                    Schema.Literals(["Regional", "Zonal"]),
                  ),
                }),
              ),
              extensions: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    name: Schema.String,
                    publisher: Schema.String,
                    type: Schema.String,
                    typeHandlerVersion: Schema.optional(Schema.String),
                    autoUpgradeMinorVersion: Schema.optional(Schema.Boolean),
                    enableAutomaticUpgrade: Schema.optional(Schema.Boolean),
                    settings: Schema.optional(Schema.Unknown),
                    protectedSettings: Schema.optional(Schema.Unknown),
                    provisionAfterExtensions: Schema.optional(
                      Schema.Array(Schema.String),
                    ),
                  }),
                ),
              ),
              osDisk: Schema.optional(
                Schema.Struct({
                  ephemeralOSDiskSettings: Schema.optional(
                    Schema.Struct({
                      placement: Schema.optional(
                        Schema.Literals(["CacheDisk"]),
                      ),
                    }),
                  ),
                  caching: Schema.optional(
                    Schema.Literals(["None", "ReadOnly", "ReadWrite"]),
                  ),
                  managedDisk: Schema.optional(
                    Schema.Struct({
                      storageAccountType: Schema.optional(
                        Schema.Literals([
                          "Standard_LRS",
                          "Premium_LRS",
                          "StandardSSD_LRS",
                        ]),
                      ),
                      securityProfile: Schema.optional(
                        Schema.Struct({
                          securityEncryptionType: Schema.optional(
                            Schema.Literals([
                              "NonPersistedTPM",
                              "VMGuestStateOnly",
                              "DiskWithVMGuestState",
                            ]),
                          ),
                          diskEncryptionSet: Schema.optional(
                            Schema.Struct({
                              id: Schema.String,
                            }),
                          ),
                        }),
                      ),
                      diskEncryptionSet: Schema.optional(
                        Schema.Struct({
                          id: Schema.String,
                        }),
                      ),
                    }),
                  ),
                  diskSizeGB: Schema.optional(Schema.Number),
                  writeAcceleratorEnabled: Schema.optional(Schema.Boolean),
                }),
              ),
              securityProfile: Schema.optional(
                Schema.Struct({
                  securityType: Schema.optional(
                    Schema.Literals(["trustedLaunch", "confidentialVM"]),
                  ),
                  encryptionAtHost: Schema.optional(Schema.Boolean),
                  uefiSettings: Schema.optional(
                    Schema.Struct({
                      secureBootEnabled: Schema.optional(Schema.Boolean),
                      vTpmEnabled: Schema.optional(Schema.Boolean),
                    }),
                  ),
                  proxyAgentSettings: Schema.optional(
                    Schema.Struct({
                      enabled: Schema.optional(Schema.Boolean),
                      imds: Schema.optional(
                        Schema.Struct({
                          mode: Schema.optional(
                            Schema.Literals(["Audit", "Enforce"]),
                          ),
                          inVMAccessControlProfileReferenceId: Schema.optional(
                            Schema.String,
                          ),
                        }),
                      ),
                      wireServer: Schema.optional(
                        Schema.Struct({
                          mode: Schema.optional(
                            Schema.Literals(["Audit", "Enforce"]),
                          ),
                          inVMAccessControlProfileReferenceId: Schema.optional(
                            Schema.String,
                          ),
                        }),
                      ),
                    }),
                  ),
                }),
              ),
              serviceArtifactReference: Schema.optional(
                Schema.Struct({
                  id: Schema.String,
                }),
              ),
            }),
          ),
        }),
      ),
      currentDedicatedNodes: Schema.optional(Schema.Number),
      currentLowPriorityNodes: Schema.optional(Schema.Number),
      scaleSettings: Schema.optional(
        Schema.Struct({
          fixedScale: Schema.optional(
            Schema.Struct({
              resizeTimeout: Schema.optional(Schema.String),
              targetDedicatedNodes: Schema.optional(Schema.Number),
              targetLowPriorityNodes: Schema.optional(Schema.Number),
              nodeDeallocationOption: Schema.optional(
                Schema.Literals([
                  "Requeue",
                  "Terminate",
                  "TaskCompletion",
                  "RetainedData",
                ]),
              ),
            }),
          ),
          autoScale: Schema.optional(
            Schema.Struct({
              formula: Schema.String,
              evaluationInterval: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
      autoScaleRun: Schema.optional(
        Schema.Struct({
          evaluationTime: Schema.String,
          results: Schema.optional(Schema.String),
          error: Schema.optional(
            Schema.Struct({
              code: Schema.String,
              message: Schema.String,
              details: Schema.optional(Schema.Array(Schema.Unknown)),
            }),
          ),
        }),
      ),
      interNodeCommunication: Schema.optional(
        Schema.Literals(["Enabled", "Disabled"]),
      ),
      networkConfiguration: Schema.optional(
        Schema.Struct({
          subnetId: Schema.optional(Schema.String),
          dynamicVnetAssignmentScope: Schema.optional(
            Schema.Literals(["none", "job"]),
          ),
          endpointConfiguration: Schema.optional(
            Schema.Struct({
              inboundNatPools: Schema.Array(
                Schema.Struct({
                  name: Schema.String,
                  protocol: Schema.Literals(["TCP", "UDP"]),
                  backendPort: Schema.Number,
                  frontendPortRangeStart: Schema.Number,
                  frontendPortRangeEnd: Schema.Number,
                  networkSecurityGroupRules: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        priority: Schema.Number,
                        access: Schema.Literals(["Allow", "Deny"]),
                        sourceAddressPrefix: Schema.String,
                        sourcePortRanges: Schema.optional(
                          Schema.Array(Schema.String),
                        ),
                      }),
                    ),
                  ),
                }),
              ),
            }),
          ),
          publicIPAddressConfiguration: Schema.optional(
            Schema.Struct({
              provision: Schema.optional(
                Schema.Literals([
                  "BatchManaged",
                  "UserManaged",
                  "NoPublicIPAddresses",
                ]),
              ),
              ipAddressIds: Schema.optional(Schema.Array(Schema.String)),
              ipFamilies: Schema.optional(
                Schema.Array(Schema.Literals(["IPv4", "IPv6"])),
              ),
              ipTags: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    ipTagType: Schema.optional(Schema.String),
                    tag: Schema.optional(Schema.String),
                  }),
                ),
              ),
            }),
          ),
          enableAcceleratedNetworking: Schema.optional(Schema.Boolean),
        }),
      ),
      taskSlotsPerNode: Schema.optional(Schema.Number),
      taskSchedulingPolicy: Schema.optional(
        Schema.Struct({
          jobDefaultOrder: Schema.optional(
            Schema.Literals(["None", "CreationTime"]),
          ),
          nodeFillType: Schema.Literals(["Spread", "Pack"]),
        }),
      ),
      userAccounts: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.String,
            password: SensitiveString,
            elevationLevel: Schema.optional(
              Schema.Literals(["NonAdmin", "Admin"]),
            ),
            linuxUserConfiguration: Schema.optional(
              Schema.Struct({
                uid: Schema.optional(Schema.Number),
                gid: Schema.optional(Schema.Number),
                sshPrivateKey: Schema.optional(Schema.String),
              }),
            ),
            windowsUserConfiguration: Schema.optional(
              Schema.Struct({
                loginMode: Schema.optional(
                  Schema.Literals(["Batch", "Interactive"]),
                ),
              }),
            ),
          }),
        ),
      ),
      metadata: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.String,
            value: Schema.String,
          }),
        ),
      ),
      startTask: Schema.optional(
        Schema.Struct({
          commandLine: Schema.optional(Schema.String),
          resourceFiles: Schema.optional(
            Schema.Array(
              Schema.Struct({
                autoStorageContainerName: Schema.optional(Schema.String),
                storageContainerUrl: Schema.optional(Schema.String),
                httpUrl: Schema.optional(Schema.String),
                blobPrefix: Schema.optional(Schema.String),
                filePath: Schema.optional(Schema.String),
                fileMode: Schema.optional(Schema.String),
                identityReference: Schema.optional(
                  Schema.Struct({
                    resourceId: Schema.optional(Schema.String),
                  }),
                ),
              }),
            ),
          ),
          environmentSettings: Schema.optional(
            Schema.Array(
              Schema.Struct({
                name: Schema.String,
                value: Schema.optional(Schema.String),
              }),
            ),
          ),
          userIdentity: Schema.optional(
            Schema.Struct({
              userName: Schema.optional(Schema.String),
              autoUser: Schema.optional(
                Schema.Struct({
                  scope: Schema.optional(Schema.Literals(["Task", "Pool"])),
                  elevationLevel: Schema.optional(
                    Schema.Literals(["NonAdmin", "Admin"]),
                  ),
                }),
              ),
            }),
          ),
          maxTaskRetryCount: Schema.optional(Schema.Number),
          waitForSuccess: Schema.optional(Schema.Boolean),
          containerSettings: Schema.optional(
            Schema.Struct({
              containerRunOptions: Schema.optional(Schema.String),
              imageName: Schema.String,
              registry: Schema.optional(
                Schema.Struct({
                  username: Schema.optional(Schema.String),
                  password: Schema.optional(SensitiveString),
                  registryServer: Schema.optional(Schema.String),
                  identityReference: Schema.optional(
                    Schema.Struct({
                      resourceId: Schema.optional(Schema.String),
                    }),
                  ),
                }),
              ),
              workingDirectory: Schema.optional(
                Schema.Literals([
                  "TaskWorkingDirectory",
                  "ContainerImageDefault",
                ]),
              ),
              containerHostBatchBindMounts: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    source: Schema.optional(
                      Schema.Literals([
                        "Shared",
                        "Startup",
                        "VfsMounts",
                        "Task",
                        "JobPrep",
                        "Applications",
                      ]),
                    ),
                    isReadOnly: Schema.optional(Schema.Boolean),
                  }),
                ),
              ),
            }),
          ),
        }),
      ),
      applicationPackages: Schema.optional(
        Schema.Array(
          Schema.Struct({
            id: Schema.String,
            version: Schema.optional(Schema.String),
          }),
        ),
      ),
      resizeOperationStatus: Schema.optional(
        Schema.Struct({
          targetDedicatedNodes: Schema.optional(Schema.Number),
          targetLowPriorityNodes: Schema.optional(Schema.Number),
          resizeTimeout: Schema.optional(Schema.String),
          nodeDeallocationOption: Schema.optional(
            Schema.Literals([
              "Requeue",
              "Terminate",
              "TaskCompletion",
              "RetainedData",
            ]),
          ),
          startTime: Schema.optional(Schema.String),
          errors: Schema.optional(
            Schema.Array(
              Schema.Struct({
                code: Schema.String,
                message: Schema.String,
                details: Schema.optional(Schema.Array(Schema.Unknown)),
              }),
            ),
          ),
        }),
      ),
      mountConfiguration: Schema.optional(
        Schema.Array(
          Schema.Struct({
            azureBlobFileSystemConfiguration: Schema.optional(
              Schema.Struct({
                accountName: Schema.String,
                containerName: Schema.String,
                accountKey: Schema.optional(Schema.String),
                sasKey: Schema.optional(Schema.String),
                blobfuseOptions: Schema.optional(Schema.String),
                relativeMountPath: Schema.String,
                identityReference: Schema.optional(
                  Schema.Struct({
                    resourceId: Schema.optional(Schema.String),
                  }),
                ),
              }),
            ),
            nfsMountConfiguration: Schema.optional(
              Schema.Struct({
                source: Schema.String,
                relativeMountPath: Schema.String,
                mountOptions: Schema.optional(Schema.String),
              }),
            ),
            cifsMountConfiguration: Schema.optional(
              Schema.Struct({
                userName: Schema.String,
                source: Schema.String,
                relativeMountPath: Schema.String,
                mountOptions: Schema.optional(Schema.String),
                password: SensitiveString,
              }),
            ),
            azureFileShareConfiguration: Schema.optional(
              Schema.Struct({
                accountName: Schema.String,
                azureFileUrl: Schema.String,
                accountKey: Schema.String,
                relativeMountPath: Schema.String,
                mountOptions: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
      ),
      upgradePolicy: Schema.optional(
        Schema.Struct({
          mode: Schema.Literals(["automatic", "manual", "rolling"]),
          automaticOSUpgradePolicy: Schema.optional(
            Schema.Struct({
              disableAutomaticRollback: Schema.optional(Schema.Boolean),
              enableAutomaticOSUpgrade: Schema.optional(Schema.Boolean),
              useRollingUpgradePolicy: Schema.optional(Schema.Boolean),
              osRollingUpgradeDeferral: Schema.optional(Schema.Boolean),
            }),
          ),
          rollingUpgradePolicy: Schema.optional(
            Schema.Struct({
              enableCrossZoneUpgrade: Schema.optional(Schema.Boolean),
              maxBatchInstancePercent: Schema.optional(Schema.Number),
              maxUnhealthyInstancePercent: Schema.optional(Schema.Number),
              maxUnhealthyUpgradedInstancePercent: Schema.optional(
                Schema.Number,
              ),
              pauseTimeBetweenBatches: Schema.optional(Schema.String),
              prioritizeUnhealthyInstances: Schema.optional(Schema.Boolean),
              rollbackFailedInstancesOnPolicyBreach: Schema.optional(
                Schema.Boolean,
              ),
            }),
          ),
        }),
      ),
    }),
  ),
  identity: Schema.optional(
    Schema.Struct({
      type: Schema.Literals(["UserAssigned", "None"]),
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
  etag: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/pools/{poolName}",
    apiVersion: "2025-06-01",
  }),
);
export type PoolCreateInput = typeof PoolCreateInput.Type;

// Output Schema
export const PoolCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type PoolCreateOutput = typeof PoolCreateOutput.Type;

// The operation
/**
 * Creates a new pool inside the specified account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - A name for the Batch account which must be unique within the region. Batch account names must be between 3 and 24 characters in length and must use only numbers and lowercase letters. This name is used as part of the DNS name that is used to access the Batch service in the region in which the account is created. For example: http://accountname.region.batch.azure.com/.
 * @param poolName - The pool name. This must be unique within the account.
 * @param If-Match - The entity state (ETag) version of the pool to update. A value of "*" can be used to apply the operation only if the pool already exists. If omitted, this operation will always be applied.
 * @param If-None-Match - Set to '*' to allow a new pool to be created, but to prevent updating an existing pool. Other values will be ignored.
 */
export const PoolCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PoolCreateInput,
  outputSchema: PoolCreateOutput,
}));
// Input Schema
export const PoolDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  poolName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/pools/{poolName}",
    apiVersion: "2025-06-01",
  }),
);
export type PoolDeleteInput = typeof PoolDeleteInput.Type;

// Output Schema
export const PoolDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type PoolDeleteOutput = typeof PoolDeleteOutput.Type;

// The operation
/**
 * Deletes the specified pool.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - A name for the Batch account which must be unique within the region. Batch account names must be between 3 and 24 characters in length and must use only numbers and lowercase letters. This name is used as part of the DNS name that is used to access the Batch service in the region in which the account is created. For example: http://accountname.region.batch.azure.com/.
 * @param poolName - The pool name. This must be unique within the account.
 */
export const PoolDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PoolDeleteInput,
  outputSchema: PoolDeleteOutput,
}));
// Input Schema
export const PoolDisableAutoScaleInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    poolName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/pools/{poolName}/disableAutoScale",
      apiVersion: "2025-06-01",
    }),
  );
export type PoolDisableAutoScaleInput = typeof PoolDisableAutoScaleInput.Type;

// Output Schema
export const PoolDisableAutoScaleOutput =
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
export type PoolDisableAutoScaleOutput = typeof PoolDisableAutoScaleOutput.Type;

// The operation
/**
 * Disables automatic scaling for a pool.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - A name for the Batch account which must be unique within the region. Batch account names must be between 3 and 24 characters in length and must use only numbers and lowercase letters. This name is used as part of the DNS name that is used to access the Batch service in the region in which the account is created. For example: http://accountname.region.batch.azure.com/.
 * @param poolName - The pool name. This must be unique within the account.
 */
export const PoolDisableAutoScale = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PoolDisableAutoScaleInput,
    outputSchema: PoolDisableAutoScaleOutput,
  }),
);
// Input Schema
export const PoolGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  poolName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/pools/{poolName}",
    apiVersion: "2025-06-01",
  }),
);
export type PoolGetInput = typeof PoolGetInput.Type;

// Output Schema
export const PoolGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type PoolGetOutput = typeof PoolGetOutput.Type;

// The operation
/**
 * Gets information about the specified pool.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - A name for the Batch account which must be unique within the region. Batch account names must be between 3 and 24 characters in length and must use only numbers and lowercase letters. This name is used as part of the DNS name that is used to access the Batch service in the region in which the account is created. For example: http://accountname.region.batch.azure.com/.
 * @param poolName - The pool name. This must be unique within the account.
 */
export const PoolGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PoolGetInput,
  outputSchema: PoolGetOutput,
}));
// Input Schema
export const PoolListByBatchAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    maxresults: Schema.optional(Schema.Number),
    $select: Schema.optional(Schema.String),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/pools",
      apiVersion: "2025-06-01",
    }),
  );
export type PoolListByBatchAccountInput =
  typeof PoolListByBatchAccountInput.Type;

// Output Schema
export const PoolListByBatchAccountOutput =
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
  });
export type PoolListByBatchAccountOutput =
  typeof PoolListByBatchAccountOutput.Type;

// The operation
/**
 * Lists all of the pools in the specified account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - A name for the Batch account which must be unique within the region. Batch account names must be between 3 and 24 characters in length and must use only numbers and lowercase letters. This name is used as part of the DNS name that is used to access the Batch service in the region in which the account is created. For example: http://accountname.region.batch.azure.com/.
 * @param maxresults - The maximum number of items to return in the response.
 * @param $select - Comma separated list of properties that should be returned. e.g. "properties/provisioningState". Only top level properties under properties/ are valid for selection.
 * @param $filter - OData filter expression. Valid properties for filtering are:

name
properties/allocationState
properties/allocationStateTransitionTime
properties/creationTime
properties/provisioningState
properties/provisioningStateTransitionTime
properties/lastModified
properties/vmSize
properties/interNodeCommunication
properties/scaleSettings/autoScale
properties/scaleSettings/fixedScale
 */
export const PoolListByBatchAccount = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PoolListByBatchAccountInput,
    outputSchema: PoolListByBatchAccountOutput,
  }),
);
// Input Schema
export const PoolStopResizeInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  poolName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/pools/{poolName}/stopResize",
    apiVersion: "2025-06-01",
  }),
);
export type PoolStopResizeInput = typeof PoolStopResizeInput.Type;

// Output Schema
export const PoolStopResizeOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type PoolStopResizeOutput = typeof PoolStopResizeOutput.Type;

// The operation
/**
 * Stops an ongoing resize operation on the pool.
 *
 * This does not restore the pool to its previous state before the resize operation: it only stops any further changes being made, and the pool maintains its current state. After stopping, the pool stabilizes at the number of nodes it was at when the stop operation was done. During the stop operation, the pool allocation state changes first to stopping and then to steady. A resize operation need not be an explicit resize pool request; this API can also be used to halt the initial sizing of the pool when it is created.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - A name for the Batch account which must be unique within the region. Batch account names must be between 3 and 24 characters in length and must use only numbers and lowercase letters. This name is used as part of the DNS name that is used to access the Batch service in the region in which the account is created. For example: http://accountname.region.batch.azure.com/.
 * @param poolName - The pool name. This must be unique within the account.
 */
export const PoolStopResize = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PoolStopResizeInput,
  outputSchema: PoolStopResizeOutput,
}));
// Input Schema
export const PoolUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  poolName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      displayName: Schema.optional(Schema.String),
      lastModified: Schema.optional(Schema.String),
      creationTime: Schema.optional(Schema.String),
      provisioningState: Schema.optional(
        Schema.Literals(["Succeeded", "Deleting"]),
      ),
      provisioningStateTransitionTime: Schema.optional(Schema.String),
      allocationState: Schema.optional(
        Schema.Literals(["Steady", "Resizing", "Stopping"]),
      ),
      allocationStateTransitionTime: Schema.optional(Schema.String),
      vmSize: Schema.optional(Schema.String),
      deploymentConfiguration: Schema.optional(
        Schema.Struct({
          virtualMachineConfiguration: Schema.optional(
            Schema.Struct({
              imageReference: Schema.Struct({
                publisher: Schema.optional(Schema.String),
                offer: Schema.optional(Schema.String),
                sku: Schema.optional(Schema.String),
                version: Schema.optional(Schema.String),
                id: Schema.optional(Schema.String),
                sharedGalleryImageId: Schema.optional(Schema.String),
                communityGalleryImageId: Schema.optional(Schema.String),
              }),
              nodeAgentSkuId: Schema.String,
              windowsConfiguration: Schema.optional(
                Schema.Struct({
                  enableAutomaticUpdates: Schema.optional(Schema.Boolean),
                }),
              ),
              dataDisks: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    lun: Schema.Number,
                    caching: Schema.optional(
                      Schema.Literals(["None", "ReadOnly", "ReadWrite"]),
                    ),
                    diskSizeGB: Schema.Number,
                    managedDisk: Schema.optional(
                      Schema.Struct({
                        storageAccountType: Schema.optional(
                          Schema.Literals([
                            "Standard_LRS",
                            "Premium_LRS",
                            "StandardSSD_LRS",
                          ]),
                        ),
                        securityProfile: Schema.optional(
                          Schema.Struct({
                            securityEncryptionType: Schema.optional(
                              Schema.Literals([
                                "NonPersistedTPM",
                                "VMGuestStateOnly",
                                "DiskWithVMGuestState",
                              ]),
                            ),
                            diskEncryptionSet: Schema.optional(
                              Schema.Struct({
                                id: Schema.String,
                              }),
                            ),
                          }),
                        ),
                        diskEncryptionSet: Schema.optional(
                          Schema.Struct({
                            id: Schema.String,
                          }),
                        ),
                      }),
                    ),
                  }),
                ),
              ),
              licenseType: Schema.optional(Schema.String),
              containerConfiguration: Schema.optional(
                Schema.Struct({
                  type: Schema.Literals(["DockerCompatible", "CriCompatible"]),
                  containerImageNames: Schema.optional(
                    Schema.Array(Schema.String),
                  ),
                  containerRegistries: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        username: Schema.optional(Schema.String),
                        password: Schema.optional(SensitiveString),
                        registryServer: Schema.optional(Schema.String),
                        identityReference: Schema.optional(
                          Schema.Struct({
                            resourceId: Schema.optional(Schema.String),
                          }),
                        ),
                      }),
                    ),
                  ),
                }),
              ),
              diskEncryptionConfiguration: Schema.optional(
                Schema.Struct({
                  targets: Schema.optional(
                    Schema.Array(Schema.Literals(["OsDisk", "TemporaryDisk"])),
                  ),
                  customerManagedKey: Schema.optional(
                    Schema.Struct({
                      keyUrl: Schema.optional(Schema.String),
                      rotationToLatestKeyVersionEnabled: Schema.optional(
                        Schema.Boolean,
                      ),
                      identityReference: Schema.optional(
                        Schema.Struct({
                          resourceId: Schema.optional(Schema.String),
                        }),
                      ),
                    }),
                  ),
                }),
              ),
              nodePlacementConfiguration: Schema.optional(
                Schema.Struct({
                  policy: Schema.optional(
                    Schema.Literals(["Regional", "Zonal"]),
                  ),
                }),
              ),
              extensions: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    name: Schema.String,
                    publisher: Schema.String,
                    type: Schema.String,
                    typeHandlerVersion: Schema.optional(Schema.String),
                    autoUpgradeMinorVersion: Schema.optional(Schema.Boolean),
                    enableAutomaticUpgrade: Schema.optional(Schema.Boolean),
                    settings: Schema.optional(Schema.Unknown),
                    protectedSettings: Schema.optional(Schema.Unknown),
                    provisionAfterExtensions: Schema.optional(
                      Schema.Array(Schema.String),
                    ),
                  }),
                ),
              ),
              osDisk: Schema.optional(
                Schema.Struct({
                  ephemeralOSDiskSettings: Schema.optional(
                    Schema.Struct({
                      placement: Schema.optional(
                        Schema.Literals(["CacheDisk"]),
                      ),
                    }),
                  ),
                  caching: Schema.optional(
                    Schema.Literals(["None", "ReadOnly", "ReadWrite"]),
                  ),
                  managedDisk: Schema.optional(
                    Schema.Struct({
                      storageAccountType: Schema.optional(
                        Schema.Literals([
                          "Standard_LRS",
                          "Premium_LRS",
                          "StandardSSD_LRS",
                        ]),
                      ),
                      securityProfile: Schema.optional(
                        Schema.Struct({
                          securityEncryptionType: Schema.optional(
                            Schema.Literals([
                              "NonPersistedTPM",
                              "VMGuestStateOnly",
                              "DiskWithVMGuestState",
                            ]),
                          ),
                          diskEncryptionSet: Schema.optional(
                            Schema.Struct({
                              id: Schema.String,
                            }),
                          ),
                        }),
                      ),
                      diskEncryptionSet: Schema.optional(
                        Schema.Struct({
                          id: Schema.String,
                        }),
                      ),
                    }),
                  ),
                  diskSizeGB: Schema.optional(Schema.Number),
                  writeAcceleratorEnabled: Schema.optional(Schema.Boolean),
                }),
              ),
              securityProfile: Schema.optional(
                Schema.Struct({
                  securityType: Schema.optional(
                    Schema.Literals(["trustedLaunch", "confidentialVM"]),
                  ),
                  encryptionAtHost: Schema.optional(Schema.Boolean),
                  uefiSettings: Schema.optional(
                    Schema.Struct({
                      secureBootEnabled: Schema.optional(Schema.Boolean),
                      vTpmEnabled: Schema.optional(Schema.Boolean),
                    }),
                  ),
                  proxyAgentSettings: Schema.optional(
                    Schema.Struct({
                      enabled: Schema.optional(Schema.Boolean),
                      imds: Schema.optional(
                        Schema.Struct({
                          mode: Schema.optional(
                            Schema.Literals(["Audit", "Enforce"]),
                          ),
                          inVMAccessControlProfileReferenceId: Schema.optional(
                            Schema.String,
                          ),
                        }),
                      ),
                      wireServer: Schema.optional(
                        Schema.Struct({
                          mode: Schema.optional(
                            Schema.Literals(["Audit", "Enforce"]),
                          ),
                          inVMAccessControlProfileReferenceId: Schema.optional(
                            Schema.String,
                          ),
                        }),
                      ),
                    }),
                  ),
                }),
              ),
              serviceArtifactReference: Schema.optional(
                Schema.Struct({
                  id: Schema.String,
                }),
              ),
            }),
          ),
        }),
      ),
      currentDedicatedNodes: Schema.optional(Schema.Number),
      currentLowPriorityNodes: Schema.optional(Schema.Number),
      scaleSettings: Schema.optional(
        Schema.Struct({
          fixedScale: Schema.optional(
            Schema.Struct({
              resizeTimeout: Schema.optional(Schema.String),
              targetDedicatedNodes: Schema.optional(Schema.Number),
              targetLowPriorityNodes: Schema.optional(Schema.Number),
              nodeDeallocationOption: Schema.optional(
                Schema.Literals([
                  "Requeue",
                  "Terminate",
                  "TaskCompletion",
                  "RetainedData",
                ]),
              ),
            }),
          ),
          autoScale: Schema.optional(
            Schema.Struct({
              formula: Schema.String,
              evaluationInterval: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
      autoScaleRun: Schema.optional(
        Schema.Struct({
          evaluationTime: Schema.String,
          results: Schema.optional(Schema.String),
          error: Schema.optional(
            Schema.Struct({
              code: Schema.String,
              message: Schema.String,
              details: Schema.optional(Schema.Array(Schema.Unknown)),
            }),
          ),
        }),
      ),
      interNodeCommunication: Schema.optional(
        Schema.Literals(["Enabled", "Disabled"]),
      ),
      networkConfiguration: Schema.optional(
        Schema.Struct({
          subnetId: Schema.optional(Schema.String),
          dynamicVnetAssignmentScope: Schema.optional(
            Schema.Literals(["none", "job"]),
          ),
          endpointConfiguration: Schema.optional(
            Schema.Struct({
              inboundNatPools: Schema.Array(
                Schema.Struct({
                  name: Schema.String,
                  protocol: Schema.Literals(["TCP", "UDP"]),
                  backendPort: Schema.Number,
                  frontendPortRangeStart: Schema.Number,
                  frontendPortRangeEnd: Schema.Number,
                  networkSecurityGroupRules: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        priority: Schema.Number,
                        access: Schema.Literals(["Allow", "Deny"]),
                        sourceAddressPrefix: Schema.String,
                        sourcePortRanges: Schema.optional(
                          Schema.Array(Schema.String),
                        ),
                      }),
                    ),
                  ),
                }),
              ),
            }),
          ),
          publicIPAddressConfiguration: Schema.optional(
            Schema.Struct({
              provision: Schema.optional(
                Schema.Literals([
                  "BatchManaged",
                  "UserManaged",
                  "NoPublicIPAddresses",
                ]),
              ),
              ipAddressIds: Schema.optional(Schema.Array(Schema.String)),
              ipFamilies: Schema.optional(
                Schema.Array(Schema.Literals(["IPv4", "IPv6"])),
              ),
              ipTags: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    ipTagType: Schema.optional(Schema.String),
                    tag: Schema.optional(Schema.String),
                  }),
                ),
              ),
            }),
          ),
          enableAcceleratedNetworking: Schema.optional(Schema.Boolean),
        }),
      ),
      taskSlotsPerNode: Schema.optional(Schema.Number),
      taskSchedulingPolicy: Schema.optional(
        Schema.Struct({
          jobDefaultOrder: Schema.optional(
            Schema.Literals(["None", "CreationTime"]),
          ),
          nodeFillType: Schema.Literals(["Spread", "Pack"]),
        }),
      ),
      userAccounts: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.String,
            password: SensitiveString,
            elevationLevel: Schema.optional(
              Schema.Literals(["NonAdmin", "Admin"]),
            ),
            linuxUserConfiguration: Schema.optional(
              Schema.Struct({
                uid: Schema.optional(Schema.Number),
                gid: Schema.optional(Schema.Number),
                sshPrivateKey: Schema.optional(Schema.String),
              }),
            ),
            windowsUserConfiguration: Schema.optional(
              Schema.Struct({
                loginMode: Schema.optional(
                  Schema.Literals(["Batch", "Interactive"]),
                ),
              }),
            ),
          }),
        ),
      ),
      metadata: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.String,
            value: Schema.String,
          }),
        ),
      ),
      startTask: Schema.optional(
        Schema.Struct({
          commandLine: Schema.optional(Schema.String),
          resourceFiles: Schema.optional(
            Schema.Array(
              Schema.Struct({
                autoStorageContainerName: Schema.optional(Schema.String),
                storageContainerUrl: Schema.optional(Schema.String),
                httpUrl: Schema.optional(Schema.String),
                blobPrefix: Schema.optional(Schema.String),
                filePath: Schema.optional(Schema.String),
                fileMode: Schema.optional(Schema.String),
                identityReference: Schema.optional(
                  Schema.Struct({
                    resourceId: Schema.optional(Schema.String),
                  }),
                ),
              }),
            ),
          ),
          environmentSettings: Schema.optional(
            Schema.Array(
              Schema.Struct({
                name: Schema.String,
                value: Schema.optional(Schema.String),
              }),
            ),
          ),
          userIdentity: Schema.optional(
            Schema.Struct({
              userName: Schema.optional(Schema.String),
              autoUser: Schema.optional(
                Schema.Struct({
                  scope: Schema.optional(Schema.Literals(["Task", "Pool"])),
                  elevationLevel: Schema.optional(
                    Schema.Literals(["NonAdmin", "Admin"]),
                  ),
                }),
              ),
            }),
          ),
          maxTaskRetryCount: Schema.optional(Schema.Number),
          waitForSuccess: Schema.optional(Schema.Boolean),
          containerSettings: Schema.optional(
            Schema.Struct({
              containerRunOptions: Schema.optional(Schema.String),
              imageName: Schema.String,
              registry: Schema.optional(
                Schema.Struct({
                  username: Schema.optional(Schema.String),
                  password: Schema.optional(SensitiveString),
                  registryServer: Schema.optional(Schema.String),
                  identityReference: Schema.optional(
                    Schema.Struct({
                      resourceId: Schema.optional(Schema.String),
                    }),
                  ),
                }),
              ),
              workingDirectory: Schema.optional(
                Schema.Literals([
                  "TaskWorkingDirectory",
                  "ContainerImageDefault",
                ]),
              ),
              containerHostBatchBindMounts: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    source: Schema.optional(
                      Schema.Literals([
                        "Shared",
                        "Startup",
                        "VfsMounts",
                        "Task",
                        "JobPrep",
                        "Applications",
                      ]),
                    ),
                    isReadOnly: Schema.optional(Schema.Boolean),
                  }),
                ),
              ),
            }),
          ),
        }),
      ),
      applicationPackages: Schema.optional(
        Schema.Array(
          Schema.Struct({
            id: Schema.String,
            version: Schema.optional(Schema.String),
          }),
        ),
      ),
      resizeOperationStatus: Schema.optional(
        Schema.Struct({
          targetDedicatedNodes: Schema.optional(Schema.Number),
          targetLowPriorityNodes: Schema.optional(Schema.Number),
          resizeTimeout: Schema.optional(Schema.String),
          nodeDeallocationOption: Schema.optional(
            Schema.Literals([
              "Requeue",
              "Terminate",
              "TaskCompletion",
              "RetainedData",
            ]),
          ),
          startTime: Schema.optional(Schema.String),
          errors: Schema.optional(
            Schema.Array(
              Schema.Struct({
                code: Schema.String,
                message: Schema.String,
                details: Schema.optional(Schema.Array(Schema.Unknown)),
              }),
            ),
          ),
        }),
      ),
      mountConfiguration: Schema.optional(
        Schema.Array(
          Schema.Struct({
            azureBlobFileSystemConfiguration: Schema.optional(
              Schema.Struct({
                accountName: Schema.String,
                containerName: Schema.String,
                accountKey: Schema.optional(Schema.String),
                sasKey: Schema.optional(Schema.String),
                blobfuseOptions: Schema.optional(Schema.String),
                relativeMountPath: Schema.String,
                identityReference: Schema.optional(
                  Schema.Struct({
                    resourceId: Schema.optional(Schema.String),
                  }),
                ),
              }),
            ),
            nfsMountConfiguration: Schema.optional(
              Schema.Struct({
                source: Schema.String,
                relativeMountPath: Schema.String,
                mountOptions: Schema.optional(Schema.String),
              }),
            ),
            cifsMountConfiguration: Schema.optional(
              Schema.Struct({
                userName: Schema.String,
                source: Schema.String,
                relativeMountPath: Schema.String,
                mountOptions: Schema.optional(Schema.String),
                password: SensitiveString,
              }),
            ),
            azureFileShareConfiguration: Schema.optional(
              Schema.Struct({
                accountName: Schema.String,
                azureFileUrl: Schema.String,
                accountKey: Schema.String,
                relativeMountPath: Schema.String,
                mountOptions: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
      ),
      upgradePolicy: Schema.optional(
        Schema.Struct({
          mode: Schema.Literals(["automatic", "manual", "rolling"]),
          automaticOSUpgradePolicy: Schema.optional(
            Schema.Struct({
              disableAutomaticRollback: Schema.optional(Schema.Boolean),
              enableAutomaticOSUpgrade: Schema.optional(Schema.Boolean),
              useRollingUpgradePolicy: Schema.optional(Schema.Boolean),
              osRollingUpgradeDeferral: Schema.optional(Schema.Boolean),
            }),
          ),
          rollingUpgradePolicy: Schema.optional(
            Schema.Struct({
              enableCrossZoneUpgrade: Schema.optional(Schema.Boolean),
              maxBatchInstancePercent: Schema.optional(Schema.Number),
              maxUnhealthyInstancePercent: Schema.optional(Schema.Number),
              maxUnhealthyUpgradedInstancePercent: Schema.optional(
                Schema.Number,
              ),
              pauseTimeBetweenBatches: Schema.optional(Schema.String),
              prioritizeUnhealthyInstances: Schema.optional(Schema.Boolean),
              rollbackFailedInstancesOnPolicyBreach: Schema.optional(
                Schema.Boolean,
              ),
            }),
          ),
        }),
      ),
    }),
  ),
  identity: Schema.optional(
    Schema.Struct({
      type: Schema.Literals(["UserAssigned", "None"]),
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
  etag: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/pools/{poolName}",
    apiVersion: "2025-06-01",
  }),
);
export type PoolUpdateInput = typeof PoolUpdateInput.Type;

// Output Schema
export const PoolUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type PoolUpdateOutput = typeof PoolUpdateOutput.Type;

// The operation
/**
 * Updates the properties of an existing pool.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - A name for the Batch account which must be unique within the region. Batch account names must be between 3 and 24 characters in length and must use only numbers and lowercase letters. This name is used as part of the DNS name that is used to access the Batch service in the region in which the account is created. For example: http://accountname.region.batch.azure.com/.
 * @param poolName - The pool name. This must be unique within the account.
 * @param If-Match - The entity state (ETag) version of the pool to update. This value can be omitted or set to "*" to apply the operation unconditionally.
 */
export const PoolUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PoolUpdateInput,
  outputSchema: PoolUpdateOutput,
}));
// Input Schema
export const PrivateEndpointConnectionDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2025-06-01",
    }),
  );
export type PrivateEndpointConnectionDeleteInput =
  typeof PrivateEndpointConnectionDeleteInput.Type;

// Output Schema
export const PrivateEndpointConnectionDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type PrivateEndpointConnectionDeleteOutput =
  typeof PrivateEndpointConnectionDeleteOutput.Type;

// The operation
/**
 * Deletes the specified private endpoint connection.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - A name for the Batch account which must be unique within the region. Batch account names must be between 3 and 24 characters in length and must use only numbers and lowercase letters. This name is used as part of the DNS name that is used to access the Batch service in the region in which the account is created. For example: http://accountname.region.batch.azure.com/.
 * @param privateEndpointConnectionName - The private endpoint connection name. This must be unique within the account.
 */
export const PrivateEndpointConnectionDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionDeleteInput,
    outputSchema: PrivateEndpointConnectionDeleteOutput,
  }));
// Input Schema
export const PrivateEndpointConnectionGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2025-06-01",
    }),
  );
export type PrivateEndpointConnectionGetInput =
  typeof PrivateEndpointConnectionGetInput.Type;

// Output Schema
export const PrivateEndpointConnectionGetOutput =
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
export type PrivateEndpointConnectionGetOutput =
  typeof PrivateEndpointConnectionGetOutput.Type;

// The operation
/**
 * Gets information about the specified private endpoint connection.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - A name for the Batch account which must be unique within the region. Batch account names must be between 3 and 24 characters in length and must use only numbers and lowercase letters. This name is used as part of the DNS name that is used to access the Batch service in the region in which the account is created. For example: http://accountname.region.batch.azure.com/.
 * @param privateEndpointConnectionName - The private endpoint connection name. This must be unique within the account.
 */
export const PrivateEndpointConnectionGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionGetInput,
    outputSchema: PrivateEndpointConnectionGetOutput,
  }));
// Input Schema
export const PrivateEndpointConnectionListByBatchAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    maxresults: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/privateEndpointConnections",
      apiVersion: "2025-06-01",
    }),
  );
export type PrivateEndpointConnectionListByBatchAccountInput =
  typeof PrivateEndpointConnectionListByBatchAccountInput.Type;

// Output Schema
export const PrivateEndpointConnectionListByBatchAccountOutput =
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
  });
export type PrivateEndpointConnectionListByBatchAccountOutput =
  typeof PrivateEndpointConnectionListByBatchAccountOutput.Type;

// The operation
/**
 * Lists all of the private endpoint connections in the specified account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - A name for the Batch account which must be unique within the region. Batch account names must be between 3 and 24 characters in length and must use only numbers and lowercase letters. This name is used as part of the DNS name that is used to access the Batch service in the region in which the account is created. For example: http://accountname.region.batch.azure.com/.
 * @param maxresults - The maximum number of items to return in the response.
 */
export const PrivateEndpointConnectionListByBatchAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionListByBatchAccountInput,
    outputSchema: PrivateEndpointConnectionListByBatchAccountOutput,
  }));
// Input Schema
export const PrivateEndpointConnectionUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Deleting",
            "Succeeded",
            "Failed",
            "Cancelled",
          ]),
        ),
        privateEndpoint: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
          }),
        ),
        groupIds: Schema.optional(Schema.Array(Schema.String)),
        privateLinkServiceConnectionState: Schema.optional(
          Schema.Struct({
            status: Schema.Literals([
              "Approved",
              "Pending",
              "Rejected",
              "Disconnected",
            ]),
            description: Schema.optional(Schema.String),
            actionsRequired: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    etag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2025-06-01",
    }),
  );
export type PrivateEndpointConnectionUpdateInput =
  typeof PrivateEndpointConnectionUpdateInput.Type;

// Output Schema
export const PrivateEndpointConnectionUpdateOutput =
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
export type PrivateEndpointConnectionUpdateOutput =
  typeof PrivateEndpointConnectionUpdateOutput.Type;

// The operation
/**
 * Updates the properties of an existing private endpoint connection.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - A name for the Batch account which must be unique within the region. Batch account names must be between 3 and 24 characters in length and must use only numbers and lowercase letters. This name is used as part of the DNS name that is used to access the Batch service in the region in which the account is created. For example: http://accountname.region.batch.azure.com/.
 * @param privateEndpointConnectionName - The private endpoint connection name. This must be unique within the account.
 * @param If-Match - The state (ETag) version of the private endpoint connection to update. This value can be omitted or set to "*" to apply the operation unconditionally.
 */
export const PrivateEndpointConnectionUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionUpdateInput,
    outputSchema: PrivateEndpointConnectionUpdateOutput,
  }));
// Input Schema
export const PrivateLinkResourceGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    privateLinkResourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/privateLinkResources/{privateLinkResourceName}",
      apiVersion: "2025-06-01",
    }),
  );
export type PrivateLinkResourceGetInput =
  typeof PrivateLinkResourceGetInput.Type;

// Output Schema
export const PrivateLinkResourceGetOutput =
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
export type PrivateLinkResourceGetOutput =
  typeof PrivateLinkResourceGetOutput.Type;

// The operation
/**
 * Gets information about the specified private link resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - A name for the Batch account which must be unique within the region. Batch account names must be between 3 and 24 characters in length and must use only numbers and lowercase letters. This name is used as part of the DNS name that is used to access the Batch service in the region in which the account is created. For example: http://accountname.region.batch.azure.com/.
 * @param privateLinkResourceName - The private link resource name. This must be unique within the account.
 */
export const PrivateLinkResourceGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PrivateLinkResourceGetInput,
    outputSchema: PrivateLinkResourceGetOutput,
  }),
);
// Input Schema
export const PrivateLinkResourceListByBatchAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    maxresults: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/privateLinkResources",
      apiVersion: "2025-06-01",
    }),
  );
export type PrivateLinkResourceListByBatchAccountInput =
  typeof PrivateLinkResourceListByBatchAccountInput.Type;

// Output Schema
export const PrivateLinkResourceListByBatchAccountOutput =
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
  });
export type PrivateLinkResourceListByBatchAccountOutput =
  typeof PrivateLinkResourceListByBatchAccountOutput.Type;

// The operation
/**
 * Lists all of the private link resources in the specified account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - A name for the Batch account which must be unique within the region. Batch account names must be between 3 and 24 characters in length and must use only numbers and lowercase letters. This name is used as part of the DNS name that is used to access the Batch service in the region in which the account is created. For example: http://accountname.region.batch.azure.com/.
 * @param maxresults - The maximum number of items to return in the response.
 */
export const PrivateLinkResourceListByBatchAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkResourceListByBatchAccountInput,
    outputSchema: PrivateLinkResourceListByBatchAccountOutput,
  }));
