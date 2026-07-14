/**
 * Azure Batch API
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
export interface ApplicationCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  applicationName: string;
  properties?: {
    displayName?: string;
    allowUpdates?: boolean;
    defaultVersion?: string;
  };
  etag?: string;
  tags?: Record<string, string>;
}
export const ApplicationCreateInput = /*@__PURE__*/ Schema.Struct({
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
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/applications/{applicationName}",
    apiVersion: "2025-06-01",
  }),
) as unknown as Schema.Codec<ApplicationCreateInput>;

// Output Schema
export interface ApplicationCreateOutput {
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
export const ApplicationCreateOutput =
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
  }) as unknown as Schema.Codec<ApplicationCreateOutput>;

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
export const ApplicationCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ApplicationCreateInput,
  outputSchema: ApplicationCreateOutput,
}));
// Input Schema
export interface ApplicationDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  applicationName: string;
}
export const ApplicationDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
  applicationName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/applications/{applicationName}",
    apiVersion: "2025-06-01",
  }),
) as unknown as Schema.Codec<ApplicationDeleteInput>;

// Output Schema
export type ApplicationDeleteOutput = void;
export const ApplicationDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ApplicationDeleteOutput>;

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
export const ApplicationDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: ApplicationDeleteInput,
  outputSchema: ApplicationDeleteOutput,
}));
// Input Schema
export interface ApplicationGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  applicationName: string;
}
export const ApplicationGetInput = /*@__PURE__*/ Schema.Struct({
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
) as unknown as Schema.Codec<ApplicationGetInput>;

// Output Schema
export interface ApplicationGetOutput {
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
export const ApplicationGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ApplicationGetOutput>;

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
export const ApplicationGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ApplicationGetInput,
  outputSchema: ApplicationGetOutput,
}));
// Input Schema
export interface ApplicationListInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  maxresults?: number;
}
export const ApplicationListInput = /*@__PURE__*/ Schema.Struct({
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
) as unknown as Schema.Codec<ApplicationListInput>;

// Output Schema
export interface ApplicationListOutput {
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
export const ApplicationListOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ApplicationListOutput>;

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
export const ApplicationList = /*@__PURE__*/ API.make(() => ({
  inputSchema: ApplicationListInput,
  outputSchema: ApplicationListOutput,
}));
// Input Schema
export interface ApplicationPackageActivateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  applicationName: string;
  versionName: string;
  format: string;
}
export const ApplicationPackageActivateInput =
  /*@__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Codec<ApplicationPackageActivateInput>;

// Output Schema
export interface ApplicationPackageActivateOutput {
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
export const ApplicationPackageActivateOutput =
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
  }) as unknown as Schema.Codec<ApplicationPackageActivateOutput>;

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
export const ApplicationPackageActivate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ApplicationPackageActivateInput,
  outputSchema: ApplicationPackageActivateOutput,
}));
// Input Schema
export interface ApplicationPackageCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  applicationName: string;
  versionName: string;
  properties?: {
    state?: "Pending" | "Active";
    format?: string;
    storageUrl?: string;
    storageUrlExpiry?: string;
    lastActivationTime?: string;
  };
  etag?: string;
  tags?: Record<string, string>;
}
export const ApplicationPackageCreateInput =
  /*@__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Codec<ApplicationPackageCreateInput>;

// Output Schema
export interface ApplicationPackageCreateOutput {
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
export const ApplicationPackageCreateOutput =
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
  }) as unknown as Schema.Codec<ApplicationPackageCreateOutput>;

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
export const ApplicationPackageCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ApplicationPackageCreateInput,
  outputSchema: ApplicationPackageCreateOutput,
}));
// Input Schema
export interface ApplicationPackageDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  applicationName: string;
  versionName: string;
}
export const ApplicationPackageDeleteInput =
  /*@__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Codec<ApplicationPackageDeleteInput>;

// Output Schema
export type ApplicationPackageDeleteOutput = void;
export const ApplicationPackageDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ApplicationPackageDeleteOutput>;

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
export const ApplicationPackageDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: ApplicationPackageDeleteInput,
  outputSchema: ApplicationPackageDeleteOutput,
}));
// Input Schema
export interface ApplicationPackageGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  applicationName: string;
  versionName: string;
}
export const ApplicationPackageGetInput =
  /*@__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Codec<ApplicationPackageGetInput>;

// Output Schema
export interface ApplicationPackageGetOutput {
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
export const ApplicationPackageGetOutput =
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
  }) as unknown as Schema.Codec<ApplicationPackageGetOutput>;

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
export const ApplicationPackageGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ApplicationPackageGetInput,
  outputSchema: ApplicationPackageGetOutput,
}));
// Input Schema
export interface ApplicationPackageListInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  applicationName: string;
  maxresults?: number;
}
export const ApplicationPackageListInput =
  /*@__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Codec<ApplicationPackageListInput>;

// Output Schema
export interface ApplicationPackageListOutput {
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
export const ApplicationPackageListOutput =
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
  }) as unknown as Schema.Codec<ApplicationPackageListOutput>;

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
export const ApplicationPackageList = /*@__PURE__*/ API.make(() => ({
  inputSchema: ApplicationPackageListInput,
  outputSchema: ApplicationPackageListOutput,
}));
// Input Schema
export interface ApplicationUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  applicationName: string;
  properties?: {
    displayName?: string;
    allowUpdates?: boolean;
    defaultVersion?: string;
  };
  etag?: string;
  tags?: Record<string, string>;
}
export const ApplicationUpdateInput = /*@__PURE__*/ Schema.Struct({
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
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/applications/{applicationName}",
    apiVersion: "2025-06-01",
  }),
) as unknown as Schema.Codec<ApplicationUpdateInput>;

// Output Schema
export interface ApplicationUpdateOutput {
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
export const ApplicationUpdateOutput =
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
  }) as unknown as Schema.Codec<ApplicationUpdateOutput>;

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
export const ApplicationUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ApplicationUpdateInput,
  outputSchema: ApplicationUpdateOutput,
}));
// Input Schema
export interface BatchAccountCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  location: string;
  tags?: Record<string, string>;
  properties?: {
    autoStorage?: {
      storageAccountId: string;
      authenticationMode?: "StorageKeys" | "BatchAccountManagedIdentity";
      nodeIdentityReference?: { resourceId?: string };
    };
    poolAllocationMode?: "BatchService" | "UserSubscription";
    keyVaultReference?: { id: string; url: string };
    publicNetworkAccess?: "Enabled" | "Disabled" | "SecuredByPerimeter";
    networkProfile?: {
      accountAccess?: {
        defaultAction: "Allow" | "Deny";
        ipRules?: { action: "Allow"; value: string }[];
      };
      nodeManagementAccess?: {
        defaultAction: "Allow" | "Deny";
        ipRules?: { action: "Allow"; value: string }[];
      };
    };
    encryption?: {
      keySource?: "Microsoft.Batch" | "Microsoft.KeyVault";
      keyVaultProperties?: { keyIdentifier?: string };
    };
    allowedAuthenticationModes?:
      | ("SharedKey" | "AAD" | "TaskAuthenticationToken")[]
      | null;
  };
  identity?: {
    principalId?: string;
    tenantId?: string;
    type: "SystemAssigned" | "UserAssigned" | "None";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
}
export const BatchAccountCreateInput =
  /*@__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Codec<BatchAccountCreateInput>;

// Output Schema
export interface BatchAccountCreateOutput {
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
export const BatchAccountCreateOutput =
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
  }) as unknown as Schema.Codec<BatchAccountCreateOutput>;

// The operation
/**
 * Creates a new Batch account with the specified parameters. Existing accounts cannot be updated with this API and should instead be updated with the Update Batch Account API.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - A name for the Batch account which must be unique within the region. Batch account names must be between 3 and 24 characters in length and must use only numbers and lowercase letters. This name is used as part of the DNS name that is used to access the Batch service in the region in which the account is created. For example: http://accountname.region.batch.azure.com/.
 */
export const BatchAccountCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: BatchAccountCreateInput,
  outputSchema: BatchAccountCreateOutput,
}));
// Input Schema
export interface BatchAccountDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const BatchAccountDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}",
      apiVersion: "2025-06-01",
    }),
  ) as unknown as Schema.Codec<BatchAccountDeleteInput>;

// Output Schema
export type BatchAccountDeleteOutput = void;
export const BatchAccountDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<BatchAccountDeleteOutput>;

// The operation
/**
 * Deletes the specified Batch account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - A name for the Batch account which must be unique within the region. Batch account names must be between 3 and 24 characters in length and must use only numbers and lowercase letters. This name is used as part of the DNS name that is used to access the Batch service in the region in which the account is created. For example: http://accountname.region.batch.azure.com/.
 */
export const BatchAccountDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: BatchAccountDeleteInput,
  outputSchema: BatchAccountDeleteOutput,
}));
// Input Schema
export interface BatchAccountGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const BatchAccountGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  accountName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}",
    apiVersion: "2025-06-01",
  }),
) as unknown as Schema.Codec<BatchAccountGetInput>;

// Output Schema
export interface BatchAccountGetOutput {
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
export const BatchAccountGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<BatchAccountGetOutput>;

// The operation
/**
 * Gets information about the specified Batch account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - A name for the Batch account which must be unique within the region. Batch account names must be between 3 and 24 characters in length and must use only numbers and lowercase letters. This name is used as part of the DNS name that is used to access the Batch service in the region in which the account is created. For example: http://accountname.region.batch.azure.com/.
 */
export const BatchAccountGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: BatchAccountGetInput,
  outputSchema: BatchAccountGetOutput,
}));
// Input Schema
export interface BatchAccountGetDetectorInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  detectorId: string;
}
export const BatchAccountGetDetectorInput =
  /*@__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Codec<BatchAccountGetDetectorInput>;

// Output Schema
export interface BatchAccountGetDetectorOutput {
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
export const BatchAccountGetDetectorOutput =
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
  }) as unknown as Schema.Codec<BatchAccountGetDetectorOutput>;

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
export const BatchAccountGetDetector = /*@__PURE__*/ API.make(() => ({
  inputSchema: BatchAccountGetDetectorInput,
  outputSchema: BatchAccountGetDetectorOutput,
}));
// Input Schema
export interface BatchAccountGetKeysInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const BatchAccountGetKeysInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/listKeys",
      apiVersion: "2025-06-01",
    }),
  ) as unknown as Schema.Codec<BatchAccountGetKeysInput>;

// Output Schema
export interface BatchAccountGetKeysOutput {
  accountName?: string;
  primary?: string;
  secondary?: string;
}
export const BatchAccountGetKeysOutput =
  /*@__PURE__*/ Schema.Struct({
    accountName: Schema.optional(Schema.String),
    primary: Schema.optional(Schema.String),
    secondary: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<BatchAccountGetKeysOutput>;

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
export const BatchAccountGetKeys = /*@__PURE__*/ API.make(() => ({
  inputSchema: BatchAccountGetKeysInput,
  outputSchema: BatchAccountGetKeysOutput,
}));
// Input Schema
export interface BatchAccountListInput {
  subscriptionId: string;
}
export const BatchAccountListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.Batch/batchAccounts",
    apiVersion: "2025-06-01",
  }),
) as unknown as Schema.Codec<BatchAccountListInput>;

// Output Schema
export interface BatchAccountListOutput {
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
export const BatchAccountListOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<BatchAccountListOutput>;

// The operation
/**
 * Gets information about the Batch accounts associated with the subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const BatchAccountList = /*@__PURE__*/ API.make(() => ({
  inputSchema: BatchAccountListInput,
  outputSchema: BatchAccountListOutput,
}));
// Input Schema
export interface BatchAccountListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const BatchAccountListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts",
      apiVersion: "2025-06-01",
    }),
  ) as unknown as Schema.Codec<BatchAccountListByResourceGroupInput>;

// Output Schema
export interface BatchAccountListByResourceGroupOutput {
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
export const BatchAccountListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<BatchAccountListByResourceGroupOutput>;

// The operation
/**
 * Gets information about the Batch accounts associated with the specified resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const BatchAccountListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: BatchAccountListByResourceGroupInput,
    outputSchema: BatchAccountListByResourceGroupOutput,
  }));
// Input Schema
export interface BatchAccountListDetectorsInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const BatchAccountListDetectorsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/detectors",
      apiVersion: "2025-06-01",
    }),
  ) as unknown as Schema.Codec<BatchAccountListDetectorsInput>;

// Output Schema
export interface BatchAccountListDetectorsOutput {
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
export const BatchAccountListDetectorsOutput =
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
  }) as unknown as Schema.Codec<BatchAccountListDetectorsOutput>;

// The operation
/**
 * Gets information about the detectors available for a given Batch account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - A name for the Batch account which must be unique within the region. Batch account names must be between 3 and 24 characters in length and must use only numbers and lowercase letters. This name is used as part of the DNS name that is used to access the Batch service in the region in which the account is created. For example: http://accountname.region.batch.azure.com/.
 */
export const BatchAccountListDetectors = /*@__PURE__*/ API.make(() => ({
  inputSchema: BatchAccountListDetectorsInput,
  outputSchema: BatchAccountListDetectorsOutput,
}));
// Input Schema
export interface BatchAccountListOutboundNetworkDependenciesEndpointsInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const BatchAccountListOutboundNetworkDependenciesEndpointsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/outboundNetworkDependenciesEndpoints",
      apiVersion: "2025-06-01",
    }),
  ) as unknown as Schema.Codec<BatchAccountListOutboundNetworkDependenciesEndpointsInput>;

// Output Schema
export interface BatchAccountListOutboundNetworkDependenciesEndpointsOutput {
  value: {
    category?: string;
    endpoints?: {
      domainName?: string;
      description?: string;
      endpointDetails?: { port?: number }[];
    }[];
  }[];
  nextLink?: string;
}
export const BatchAccountListOutboundNetworkDependenciesEndpointsOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<BatchAccountListOutboundNetworkDependenciesEndpointsOutput>;

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
  /*@__PURE__*/ API.make(() => ({
    inputSchema: BatchAccountListOutboundNetworkDependenciesEndpointsInput,
    outputSchema: BatchAccountListOutboundNetworkDependenciesEndpointsOutput,
  }));
// Input Schema
export interface BatchAccountRegenerateKeyInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  keyName: "Primary" | "Secondary";
}
export const BatchAccountRegenerateKeyInput =
  /*@__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Codec<BatchAccountRegenerateKeyInput>;

// Output Schema
export interface BatchAccountRegenerateKeyOutput {
  accountName?: string;
  primary?: string;
  secondary?: string;
}
export const BatchAccountRegenerateKeyOutput =
  /*@__PURE__*/ Schema.Struct({
    accountName: Schema.optional(Schema.String),
    primary: Schema.optional(Schema.String),
    secondary: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<BatchAccountRegenerateKeyOutput>;

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
export const BatchAccountRegenerateKey = /*@__PURE__*/ API.make(() => ({
  inputSchema: BatchAccountRegenerateKeyInput,
  outputSchema: BatchAccountRegenerateKeyOutput,
}));
// Input Schema
export interface BatchAccountSynchronizeAutoStorageKeysInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const BatchAccountSynchronizeAutoStorageKeysInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/syncAutoStorageKeys",
      apiVersion: "2025-06-01",
    }),
  ) as unknown as Schema.Codec<BatchAccountSynchronizeAutoStorageKeysInput>;

// Output Schema
export type BatchAccountSynchronizeAutoStorageKeysOutput = void;
export const BatchAccountSynchronizeAutoStorageKeysOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<BatchAccountSynchronizeAutoStorageKeysOutput>;

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
  /*@__PURE__*/ API.make(() => ({
    inputSchema: BatchAccountSynchronizeAutoStorageKeysInput,
    outputSchema: BatchAccountSynchronizeAutoStorageKeysOutput,
  }));
// Input Schema
export interface BatchAccountUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  tags?: Record<string, string>;
  properties?: {
    autoStorage?: {
      storageAccountId: string;
      authenticationMode?: "StorageKeys" | "BatchAccountManagedIdentity";
      nodeIdentityReference?: { resourceId?: string };
    };
    encryption?: {
      keySource?: "Microsoft.Batch" | "Microsoft.KeyVault";
      keyVaultProperties?: { keyIdentifier?: string };
    };
    allowedAuthenticationModes?:
      | ("SharedKey" | "AAD" | "TaskAuthenticationToken")[]
      | null;
    publicNetworkAccess?: "Enabled" | "Disabled" | "SecuredByPerimeter";
    networkProfile?: {
      accountAccess?: {
        defaultAction: "Allow" | "Deny";
        ipRules?: { action: "Allow"; value: string }[];
      };
      nodeManagementAccess?: {
        defaultAction: "Allow" | "Deny";
        ipRules?: { action: "Allow"; value: string }[];
      };
    };
  };
  identity?: {
    principalId?: string;
    tenantId?: string;
    type: "SystemAssigned" | "UserAssigned" | "None";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
}
export const BatchAccountUpdateInput =
  /*@__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Codec<BatchAccountUpdateInput>;

// Output Schema
export interface BatchAccountUpdateOutput {
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
export const BatchAccountUpdateOutput =
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
  }) as unknown as Schema.Codec<BatchAccountUpdateOutput>;

// The operation
/**
 * Updates the properties of an existing Batch account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - A name for the Batch account which must be unique within the region. Batch account names must be between 3 and 24 characters in length and must use only numbers and lowercase letters. This name is used as part of the DNS name that is used to access the Batch service in the region in which the account is created. For example: http://accountname.region.batch.azure.com/.
 */
export const BatchAccountUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: BatchAccountUpdateInput,
  outputSchema: BatchAccountUpdateOutput,
}));
// Input Schema
export interface LocationCheckNameAvailabilityInput {
  subscriptionId: string;
  locationName: string;
  name: string;
  type: "Microsoft.Batch/batchAccounts";
}
export const LocationCheckNameAvailabilityInput =
  /*@__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Codec<LocationCheckNameAvailabilityInput>;

// Output Schema
export interface LocationCheckNameAvailabilityOutput {
  nameAvailable?: boolean;
  reason?: "Invalid" | "AlreadyExists";
  message?: string;
}
export const LocationCheckNameAvailabilityOutput =
  /*@__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.Literals(["Invalid", "AlreadyExists"])),
    message: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<LocationCheckNameAvailabilityOutput>;

// The operation
/**
 * Checks whether the Batch account name is available in the specified region.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param locationName - The desired region for the name check.
 */
export const LocationCheckNameAvailability =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: LocationCheckNameAvailabilityInput,
    outputSchema: LocationCheckNameAvailabilityOutput,
  }));
// Input Schema
export interface LocationGetQuotasInput {
  subscriptionId: string;
  locationName: string;
}
export const LocationGetQuotasInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  locationName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.Batch/locations/{locationName}/quotas",
    apiVersion: "2025-06-01",
  }),
) as unknown as Schema.Codec<LocationGetQuotasInput>;

// Output Schema
export interface LocationGetQuotasOutput {
  accountQuota?: number;
}
export const LocationGetQuotasOutput =
  /*@__PURE__*/ Schema.Struct({
    accountQuota: Schema.optional(Schema.Number),
  }) as unknown as Schema.Codec<LocationGetQuotasOutput>;

// The operation
/**
 * Gets the Batch service quotas for the specified subscription at the given location.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param locationName - The region for which to retrieve Batch service quotas.
 */
export const LocationGetQuotas = /*@__PURE__*/ API.make(() => ({
  inputSchema: LocationGetQuotasInput,
  outputSchema: LocationGetQuotasOutput,
}));
// Input Schema
export interface LocationListSupportedVirtualMachineSkusInput {
  subscriptionId: string;
  locationName: string;
  maxresults?: number;
  $filter?: string;
}
export const LocationListSupportedVirtualMachineSkusInput =
  /*@__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Codec<LocationListSupportedVirtualMachineSkusInput>;

// Output Schema
export interface LocationListSupportedVirtualMachineSkusOutput {
  value: {
    name?: string;
    familyName?: string;
    capabilities?: { name?: string; value?: string }[];
    batchSupportEndOfLife?: string;
  }[];
  nextLink?: string;
}
export const LocationListSupportedVirtualMachineSkusOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<LocationListSupportedVirtualMachineSkusOutput>;

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
  /*@__PURE__*/ API.make(() => ({
    inputSchema: LocationListSupportedVirtualMachineSkusInput,
    outputSchema: LocationListSupportedVirtualMachineSkusOutput,
  }));
// Input Schema
export interface NetworkSecurityPerimeterGetConfigurationInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  networkSecurityPerimeterConfigurationName: string;
}
export const NetworkSecurityPerimeterGetConfigurationInput =
  /*@__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Codec<NetworkSecurityPerimeterGetConfigurationInput>;

// Output Schema
export interface NetworkSecurityPerimeterGetConfigurationOutput {
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
export const NetworkSecurityPerimeterGetConfigurationOutput =
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
  }) as unknown as Schema.Codec<NetworkSecurityPerimeterGetConfigurationOutput>;

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
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkSecurityPerimeterGetConfigurationInput,
    outputSchema: NetworkSecurityPerimeterGetConfigurationOutput,
  }));
// Input Schema
export interface NetworkSecurityPerimeterListConfigurationsInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const NetworkSecurityPerimeterListConfigurationsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/networkSecurityPerimeterConfigurations",
      apiVersion: "2025-06-01",
    }),
  ) as unknown as Schema.Codec<NetworkSecurityPerimeterListConfigurationsInput>;

// Output Schema
export interface NetworkSecurityPerimeterListConfigurationsOutput {
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
export const NetworkSecurityPerimeterListConfigurationsOutput =
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
  }) as unknown as Schema.Codec<NetworkSecurityPerimeterListConfigurationsOutput>;

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
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkSecurityPerimeterListConfigurationsInput,
    outputSchema: NetworkSecurityPerimeterListConfigurationsOutput,
  }));
// Input Schema
export interface NetworkSecurityPerimeterReconcileConfigurationInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  networkSecurityPerimeterConfigurationName: string;
}
export const NetworkSecurityPerimeterReconcileConfigurationInput =
  /*@__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Codec<NetworkSecurityPerimeterReconcileConfigurationInput>;

// Output Schema
export type NetworkSecurityPerimeterReconcileConfigurationOutput = void;
export const NetworkSecurityPerimeterReconcileConfigurationOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<NetworkSecurityPerimeterReconcileConfigurationOutput>;

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
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NetworkSecurityPerimeterReconcileConfigurationInput,
    outputSchema: NetworkSecurityPerimeterReconcileConfigurationOutput,
  }));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Batch/operations",
    apiVersion: "2025-06-01",
  }),
) as unknown as Schema.Codec<OperationsListInput>;

// Output Schema
export interface OperationsListOutput {
  value: {
    name?: string;
    isDataAction?: boolean;
    display?: {
      provider?: string;
      operation?: string;
      resource?: string;
      description?: string;
    };
    origin?: string;
    properties?: unknown;
  }[];
  nextLink?: string;
}
export const OperationsListOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<OperationsListOutput>;

// The operation
/**
 * Lists available operations for the Microsoft.Batch provider
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface PoolCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  poolName: string;
  properties?: {
    displayName?: string;
    lastModified?: string;
    creationTime?: string;
    provisioningState?: "Succeeded" | "Deleting";
    provisioningStateTransitionTime?: string;
    allocationState?: "Steady" | "Resizing" | "Stopping";
    allocationStateTransitionTime?: string;
    vmSize?: string;
    deploymentConfiguration?: {
      virtualMachineConfiguration?: {
        imageReference: {
          publisher?: string;
          offer?: string;
          sku?: string;
          version?: string;
          id?: string;
          sharedGalleryImageId?: string;
          communityGalleryImageId?: string;
        };
        nodeAgentSkuId: string;
        windowsConfiguration?: { enableAutomaticUpdates?: boolean };
        dataDisks?: {
          lun: number;
          caching?: "None" | "ReadOnly" | "ReadWrite";
          diskSizeGB: number;
          managedDisk?: {
            storageAccountType?:
              | "Standard_LRS"
              | "Premium_LRS"
              | "StandardSSD_LRS";
            securityProfile?: {
              securityEncryptionType?:
                | "NonPersistedTPM"
                | "VMGuestStateOnly"
                | "DiskWithVMGuestState";
              diskEncryptionSet?: { id: string };
            };
            diskEncryptionSet?: { id: string };
          };
        }[];
        licenseType?: string;
        containerConfiguration?: {
          type: "DockerCompatible" | "CriCompatible";
          containerImageNames?: string[];
          containerRegistries?: {
            username?: string;
            password?: string | Redacted.Redacted<string>;
            registryServer?: string;
            identityReference?: { resourceId?: string };
          }[];
        };
        diskEncryptionConfiguration?: {
          targets?: ("OsDisk" | "TemporaryDisk")[];
          customerManagedKey?: {
            keyUrl?: string;
            rotationToLatestKeyVersionEnabled?: boolean;
            identityReference?: { resourceId?: string };
          };
        };
        nodePlacementConfiguration?: { policy?: "Regional" | "Zonal" };
        extensions?: {
          name: string;
          publisher: string;
          type: string;
          typeHandlerVersion?: string;
          autoUpgradeMinorVersion?: boolean;
          enableAutomaticUpgrade?: boolean;
          settings?: unknown;
          protectedSettings?: unknown;
          provisionAfterExtensions?: string[];
        }[];
        osDisk?: {
          ephemeralOSDiskSettings?: { placement?: "CacheDisk" };
          caching?: "None" | "ReadOnly" | "ReadWrite";
          managedDisk?: {
            storageAccountType?:
              | "Standard_LRS"
              | "Premium_LRS"
              | "StandardSSD_LRS";
            securityProfile?: {
              securityEncryptionType?:
                | "NonPersistedTPM"
                | "VMGuestStateOnly"
                | "DiskWithVMGuestState";
              diskEncryptionSet?: { id: string };
            };
            diskEncryptionSet?: { id: string };
          };
          diskSizeGB?: number;
          writeAcceleratorEnabled?: boolean;
        };
        securityProfile?: {
          securityType?: "trustedLaunch" | "confidentialVM";
          encryptionAtHost?: boolean;
          uefiSettings?: { secureBootEnabled?: boolean; vTpmEnabled?: boolean };
          proxyAgentSettings?: {
            enabled?: boolean;
            imds?: {
              mode?: "Audit" | "Enforce";
              inVMAccessControlProfileReferenceId?: string;
            };
            wireServer?: {
              mode?: "Audit" | "Enforce";
              inVMAccessControlProfileReferenceId?: string;
            };
          };
        };
        serviceArtifactReference?: { id: string };
      };
    };
    currentDedicatedNodes?: number;
    currentLowPriorityNodes?: number;
    scaleSettings?: {
      fixedScale?: {
        resizeTimeout?: string;
        targetDedicatedNodes?: number;
        targetLowPriorityNodes?: number;
        nodeDeallocationOption?:
          | "Requeue"
          | "Terminate"
          | "TaskCompletion"
          | "RetainedData";
      };
      autoScale?: { formula: string; evaluationInterval?: string };
    };
    autoScaleRun?: {
      evaluationTime: string;
      results?: string;
      error?: { code: string; message: string; details?: unknown[] };
    };
    interNodeCommunication?: "Enabled" | "Disabled";
    networkConfiguration?: {
      subnetId?: string;
      dynamicVnetAssignmentScope?: "none" | "job";
      endpointConfiguration?: {
        inboundNatPools: {
          name: string;
          protocol: "TCP" | "UDP";
          backendPort: number;
          frontendPortRangeStart: number;
          frontendPortRangeEnd: number;
          networkSecurityGroupRules?: {
            priority: number;
            access: "Allow" | "Deny";
            sourceAddressPrefix: string;
            sourcePortRanges?: string[];
          }[];
        }[];
      };
      publicIPAddressConfiguration?: {
        provision?: "BatchManaged" | "UserManaged" | "NoPublicIPAddresses";
        ipAddressIds?: string[];
        ipFamilies?: ("IPv4" | "IPv6")[];
        ipTags?: { ipTagType?: string; tag?: string }[];
      };
      enableAcceleratedNetworking?: boolean;
    };
    taskSlotsPerNode?: number;
    taskSchedulingPolicy?: {
      jobDefaultOrder?: "None" | "CreationTime";
      nodeFillType: "Spread" | "Pack";
    };
    userAccounts?: {
      name: string;
      password: string | Redacted.Redacted<string>;
      elevationLevel?: "NonAdmin" | "Admin";
      linuxUserConfiguration?: {
        uid?: number;
        gid?: number;
        sshPrivateKey?: string;
      };
      windowsUserConfiguration?: { loginMode?: "Batch" | "Interactive" };
    }[];
    metadata?: { name: string; value: string }[];
    startTask?: {
      commandLine?: string;
      resourceFiles?: {
        autoStorageContainerName?: string;
        storageContainerUrl?: string;
        httpUrl?: string;
        blobPrefix?: string;
        filePath?: string;
        fileMode?: string;
        identityReference?: { resourceId?: string };
      }[];
      environmentSettings?: { name: string; value?: string }[];
      userIdentity?: {
        userName?: string;
        autoUser?: {
          scope?: "Task" | "Pool";
          elevationLevel?: "NonAdmin" | "Admin";
        };
      };
      maxTaskRetryCount?: number;
      waitForSuccess?: boolean;
      containerSettings?: {
        containerRunOptions?: string;
        imageName: string;
        registry?: {
          username?: string;
          password?: string | Redacted.Redacted<string>;
          registryServer?: string;
          identityReference?: { resourceId?: string };
        };
        workingDirectory?: "TaskWorkingDirectory" | "ContainerImageDefault";
        containerHostBatchBindMounts?: {
          source?:
            | "Shared"
            | "Startup"
            | "VfsMounts"
            | "Task"
            | "JobPrep"
            | "Applications";
          isReadOnly?: boolean;
        }[];
      };
    };
    applicationPackages?: { id: string; version?: string }[];
    resizeOperationStatus?: {
      targetDedicatedNodes?: number;
      targetLowPriorityNodes?: number;
      resizeTimeout?: string;
      nodeDeallocationOption?:
        | "Requeue"
        | "Terminate"
        | "TaskCompletion"
        | "RetainedData";
      startTime?: string;
      errors?: { code: string; message: string; details?: unknown[] }[];
    };
    mountConfiguration?: {
      azureBlobFileSystemConfiguration?: {
        accountName: string;
        containerName: string;
        accountKey?: string;
        sasKey?: string;
        blobfuseOptions?: string;
        relativeMountPath: string;
        identityReference?: { resourceId?: string };
      };
      nfsMountConfiguration?: {
        source: string;
        relativeMountPath: string;
        mountOptions?: string;
      };
      cifsMountConfiguration?: {
        userName: string;
        source: string;
        relativeMountPath: string;
        mountOptions?: string;
        password: string | Redacted.Redacted<string>;
      };
      azureFileShareConfiguration?: {
        accountName: string;
        azureFileUrl: string;
        accountKey: string;
        relativeMountPath: string;
        mountOptions?: string;
      };
    }[];
    upgradePolicy?: {
      mode: "automatic" | "manual" | "rolling";
      automaticOSUpgradePolicy?: {
        disableAutomaticRollback?: boolean;
        enableAutomaticOSUpgrade?: boolean;
        useRollingUpgradePolicy?: boolean;
        osRollingUpgradeDeferral?: boolean;
      };
      rollingUpgradePolicy?: {
        enableCrossZoneUpgrade?: boolean;
        maxBatchInstancePercent?: number;
        maxUnhealthyInstancePercent?: number;
        maxUnhealthyUpgradedInstancePercent?: number;
        pauseTimeBetweenBatches?: string;
        prioritizeUnhealthyInstances?: boolean;
        rollbackFailedInstancesOnPolicyBreach?: boolean;
      };
    };
  };
  identity?: {
    type: "UserAssigned" | "None";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
  etag?: string;
  tags?: Record<string, string>;
}
export const PoolCreateInput = /*@__PURE__*/ Schema.Struct({
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
) as unknown as Schema.Codec<PoolCreateInput>;

// Output Schema
export interface PoolCreateOutput {
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
export const PoolCreateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<PoolCreateOutput>;

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
export const PoolCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: PoolCreateInput,
  outputSchema: PoolCreateOutput,
}));
// Input Schema
export interface PoolDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  poolName: string;
}
export const PoolDeleteInput = /*@__PURE__*/ Schema.Struct({
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
) as unknown as Schema.Codec<PoolDeleteInput>;

// Output Schema
export type PoolDeleteOutput = void;
export const PoolDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<PoolDeleteOutput>;

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
export const PoolDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: PoolDeleteInput,
  outputSchema: PoolDeleteOutput,
}));
// Input Schema
export interface PoolDisableAutoScaleInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  poolName: string;
}
export const PoolDisableAutoScaleInput =
  /*@__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Codec<PoolDisableAutoScaleInput>;

// Output Schema
export interface PoolDisableAutoScaleOutput {
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
export const PoolDisableAutoScaleOutput =
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
  }) as unknown as Schema.Codec<PoolDisableAutoScaleOutput>;

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
export const PoolDisableAutoScale = /*@__PURE__*/ API.make(() => ({
  inputSchema: PoolDisableAutoScaleInput,
  outputSchema: PoolDisableAutoScaleOutput,
}));
// Input Schema
export interface PoolGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  poolName: string;
}
export const PoolGetInput = /*@__PURE__*/ Schema.Struct({
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
) as unknown as Schema.Codec<PoolGetInput>;

// Output Schema
export interface PoolGetOutput {
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
export const PoolGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<PoolGetOutput>;

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
export const PoolGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: PoolGetInput,
  outputSchema: PoolGetOutput,
}));
// Input Schema
export interface PoolListByBatchAccountInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  maxresults?: number;
  $select?: string;
  $filter?: string;
}
export const PoolListByBatchAccountInput =
  /*@__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Codec<PoolListByBatchAccountInput>;

// Output Schema
export interface PoolListByBatchAccountOutput {
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
export const PoolListByBatchAccountOutput =
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
  }) as unknown as Schema.Codec<PoolListByBatchAccountOutput>;

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
export const PoolListByBatchAccount = /*@__PURE__*/ API.make(() => ({
  inputSchema: PoolListByBatchAccountInput,
  outputSchema: PoolListByBatchAccountOutput,
}));
// Input Schema
export interface PoolStopResizeInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  poolName: string;
}
export const PoolStopResizeInput = /*@__PURE__*/ Schema.Struct({
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
) as unknown as Schema.Codec<PoolStopResizeInput>;

// Output Schema
export interface PoolStopResizeOutput {
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
export const PoolStopResizeOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<PoolStopResizeOutput>;

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
export const PoolStopResize = /*@__PURE__*/ API.make(() => ({
  inputSchema: PoolStopResizeInput,
  outputSchema: PoolStopResizeOutput,
}));
// Input Schema
export interface PoolUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  poolName: string;
  properties?: {
    displayName?: string;
    lastModified?: string;
    creationTime?: string;
    provisioningState?: "Succeeded" | "Deleting";
    provisioningStateTransitionTime?: string;
    allocationState?: "Steady" | "Resizing" | "Stopping";
    allocationStateTransitionTime?: string;
    vmSize?: string;
    deploymentConfiguration?: {
      virtualMachineConfiguration?: {
        imageReference: {
          publisher?: string;
          offer?: string;
          sku?: string;
          version?: string;
          id?: string;
          sharedGalleryImageId?: string;
          communityGalleryImageId?: string;
        };
        nodeAgentSkuId: string;
        windowsConfiguration?: { enableAutomaticUpdates?: boolean };
        dataDisks?: {
          lun: number;
          caching?: "None" | "ReadOnly" | "ReadWrite";
          diskSizeGB: number;
          managedDisk?: {
            storageAccountType?:
              | "Standard_LRS"
              | "Premium_LRS"
              | "StandardSSD_LRS";
            securityProfile?: {
              securityEncryptionType?:
                | "NonPersistedTPM"
                | "VMGuestStateOnly"
                | "DiskWithVMGuestState";
              diskEncryptionSet?: { id: string };
            };
            diskEncryptionSet?: { id: string };
          };
        }[];
        licenseType?: string;
        containerConfiguration?: {
          type: "DockerCompatible" | "CriCompatible";
          containerImageNames?: string[];
          containerRegistries?: {
            username?: string;
            password?: string | Redacted.Redacted<string>;
            registryServer?: string;
            identityReference?: { resourceId?: string };
          }[];
        };
        diskEncryptionConfiguration?: {
          targets?: ("OsDisk" | "TemporaryDisk")[];
          customerManagedKey?: {
            keyUrl?: string;
            rotationToLatestKeyVersionEnabled?: boolean;
            identityReference?: { resourceId?: string };
          };
        };
        nodePlacementConfiguration?: { policy?: "Regional" | "Zonal" };
        extensions?: {
          name: string;
          publisher: string;
          type: string;
          typeHandlerVersion?: string;
          autoUpgradeMinorVersion?: boolean;
          enableAutomaticUpgrade?: boolean;
          settings?: unknown;
          protectedSettings?: unknown;
          provisionAfterExtensions?: string[];
        }[];
        osDisk?: {
          ephemeralOSDiskSettings?: { placement?: "CacheDisk" };
          caching?: "None" | "ReadOnly" | "ReadWrite";
          managedDisk?: {
            storageAccountType?:
              | "Standard_LRS"
              | "Premium_LRS"
              | "StandardSSD_LRS";
            securityProfile?: {
              securityEncryptionType?:
                | "NonPersistedTPM"
                | "VMGuestStateOnly"
                | "DiskWithVMGuestState";
              diskEncryptionSet?: { id: string };
            };
            diskEncryptionSet?: { id: string };
          };
          diskSizeGB?: number;
          writeAcceleratorEnabled?: boolean;
        };
        securityProfile?: {
          securityType?: "trustedLaunch" | "confidentialVM";
          encryptionAtHost?: boolean;
          uefiSettings?: { secureBootEnabled?: boolean; vTpmEnabled?: boolean };
          proxyAgentSettings?: {
            enabled?: boolean;
            imds?: {
              mode?: "Audit" | "Enforce";
              inVMAccessControlProfileReferenceId?: string;
            };
            wireServer?: {
              mode?: "Audit" | "Enforce";
              inVMAccessControlProfileReferenceId?: string;
            };
          };
        };
        serviceArtifactReference?: { id: string };
      };
    };
    currentDedicatedNodes?: number;
    currentLowPriorityNodes?: number;
    scaleSettings?: {
      fixedScale?: {
        resizeTimeout?: string;
        targetDedicatedNodes?: number;
        targetLowPriorityNodes?: number;
        nodeDeallocationOption?:
          | "Requeue"
          | "Terminate"
          | "TaskCompletion"
          | "RetainedData";
      };
      autoScale?: { formula: string; evaluationInterval?: string };
    };
    autoScaleRun?: {
      evaluationTime: string;
      results?: string;
      error?: { code: string; message: string; details?: unknown[] };
    };
    interNodeCommunication?: "Enabled" | "Disabled";
    networkConfiguration?: {
      subnetId?: string;
      dynamicVnetAssignmentScope?: "none" | "job";
      endpointConfiguration?: {
        inboundNatPools: {
          name: string;
          protocol: "TCP" | "UDP";
          backendPort: number;
          frontendPortRangeStart: number;
          frontendPortRangeEnd: number;
          networkSecurityGroupRules?: {
            priority: number;
            access: "Allow" | "Deny";
            sourceAddressPrefix: string;
            sourcePortRanges?: string[];
          }[];
        }[];
      };
      publicIPAddressConfiguration?: {
        provision?: "BatchManaged" | "UserManaged" | "NoPublicIPAddresses";
        ipAddressIds?: string[];
        ipFamilies?: ("IPv4" | "IPv6")[];
        ipTags?: { ipTagType?: string; tag?: string }[];
      };
      enableAcceleratedNetworking?: boolean;
    };
    taskSlotsPerNode?: number;
    taskSchedulingPolicy?: {
      jobDefaultOrder?: "None" | "CreationTime";
      nodeFillType: "Spread" | "Pack";
    };
    userAccounts?: {
      name: string;
      password: string | Redacted.Redacted<string>;
      elevationLevel?: "NonAdmin" | "Admin";
      linuxUserConfiguration?: {
        uid?: number;
        gid?: number;
        sshPrivateKey?: string;
      };
      windowsUserConfiguration?: { loginMode?: "Batch" | "Interactive" };
    }[];
    metadata?: { name: string; value: string }[];
    startTask?: {
      commandLine?: string;
      resourceFiles?: {
        autoStorageContainerName?: string;
        storageContainerUrl?: string;
        httpUrl?: string;
        blobPrefix?: string;
        filePath?: string;
        fileMode?: string;
        identityReference?: { resourceId?: string };
      }[];
      environmentSettings?: { name: string; value?: string }[];
      userIdentity?: {
        userName?: string;
        autoUser?: {
          scope?: "Task" | "Pool";
          elevationLevel?: "NonAdmin" | "Admin";
        };
      };
      maxTaskRetryCount?: number;
      waitForSuccess?: boolean;
      containerSettings?: {
        containerRunOptions?: string;
        imageName: string;
        registry?: {
          username?: string;
          password?: string | Redacted.Redacted<string>;
          registryServer?: string;
          identityReference?: { resourceId?: string };
        };
        workingDirectory?: "TaskWorkingDirectory" | "ContainerImageDefault";
        containerHostBatchBindMounts?: {
          source?:
            | "Shared"
            | "Startup"
            | "VfsMounts"
            | "Task"
            | "JobPrep"
            | "Applications";
          isReadOnly?: boolean;
        }[];
      };
    };
    applicationPackages?: { id: string; version?: string }[];
    resizeOperationStatus?: {
      targetDedicatedNodes?: number;
      targetLowPriorityNodes?: number;
      resizeTimeout?: string;
      nodeDeallocationOption?:
        | "Requeue"
        | "Terminate"
        | "TaskCompletion"
        | "RetainedData";
      startTime?: string;
      errors?: { code: string; message: string; details?: unknown[] }[];
    };
    mountConfiguration?: {
      azureBlobFileSystemConfiguration?: {
        accountName: string;
        containerName: string;
        accountKey?: string;
        sasKey?: string;
        blobfuseOptions?: string;
        relativeMountPath: string;
        identityReference?: { resourceId?: string };
      };
      nfsMountConfiguration?: {
        source: string;
        relativeMountPath: string;
        mountOptions?: string;
      };
      cifsMountConfiguration?: {
        userName: string;
        source: string;
        relativeMountPath: string;
        mountOptions?: string;
        password: string | Redacted.Redacted<string>;
      };
      azureFileShareConfiguration?: {
        accountName: string;
        azureFileUrl: string;
        accountKey: string;
        relativeMountPath: string;
        mountOptions?: string;
      };
    }[];
    upgradePolicy?: {
      mode: "automatic" | "manual" | "rolling";
      automaticOSUpgradePolicy?: {
        disableAutomaticRollback?: boolean;
        enableAutomaticOSUpgrade?: boolean;
        useRollingUpgradePolicy?: boolean;
        osRollingUpgradeDeferral?: boolean;
      };
      rollingUpgradePolicy?: {
        enableCrossZoneUpgrade?: boolean;
        maxBatchInstancePercent?: number;
        maxUnhealthyInstancePercent?: number;
        maxUnhealthyUpgradedInstancePercent?: number;
        pauseTimeBetweenBatches?: string;
        prioritizeUnhealthyInstances?: boolean;
        rollbackFailedInstancesOnPolicyBreach?: boolean;
      };
    };
  };
  identity?: {
    type: "UserAssigned" | "None";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
  etag?: string;
  tags?: Record<string, string>;
}
export const PoolUpdateInput = /*@__PURE__*/ Schema.Struct({
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
) as unknown as Schema.Codec<PoolUpdateInput>;

// Output Schema
export interface PoolUpdateOutput {
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
export const PoolUpdateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<PoolUpdateOutput>;

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
export const PoolUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: PoolUpdateInput,
  outputSchema: PoolUpdateOutput,
}));
// Input Schema
export interface PrivateEndpointConnectionDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionDeleteInput =
  /*@__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Codec<PrivateEndpointConnectionDeleteInput>;

// Output Schema
export type PrivateEndpointConnectionDeleteOutput = void;
export const PrivateEndpointConnectionDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<PrivateEndpointConnectionDeleteOutput>;

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
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionDeleteInput,
    outputSchema: PrivateEndpointConnectionDeleteOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionGetInput =
  /*@__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Codec<PrivateEndpointConnectionGetInput>;

// Output Schema
export interface PrivateEndpointConnectionGetOutput {
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
export const PrivateEndpointConnectionGetOutput =
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
  }) as unknown as Schema.Codec<PrivateEndpointConnectionGetOutput>;

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
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionGetInput,
    outputSchema: PrivateEndpointConnectionGetOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionListByBatchAccountInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  maxresults?: number;
}
export const PrivateEndpointConnectionListByBatchAccountInput =
  /*@__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Codec<PrivateEndpointConnectionListByBatchAccountInput>;

// Output Schema
export interface PrivateEndpointConnectionListByBatchAccountOutput {
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
export const PrivateEndpointConnectionListByBatchAccountOutput =
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
  }) as unknown as Schema.Codec<PrivateEndpointConnectionListByBatchAccountOutput>;

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
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionListByBatchAccountInput,
    outputSchema: PrivateEndpointConnectionListByBatchAccountOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  privateEndpointConnectionName: string;
  properties?: {
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Succeeded"
      | "Failed"
      | "Cancelled";
    privateEndpoint?: { id?: string };
    groupIds?: string[];
    privateLinkServiceConnectionState?: {
      status: "Approved" | "Pending" | "Rejected" | "Disconnected";
      description?: string;
      actionsRequired?: string;
    };
  };
  etag?: string;
  tags?: Record<string, string>;
}
export const PrivateEndpointConnectionUpdateInput =
  /*@__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Codec<PrivateEndpointConnectionUpdateInput>;

// Output Schema
export interface PrivateEndpointConnectionUpdateOutput {
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
export const PrivateEndpointConnectionUpdateOutput =
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
  }) as unknown as Schema.Codec<PrivateEndpointConnectionUpdateOutput>;

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
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionUpdateInput,
    outputSchema: PrivateEndpointConnectionUpdateOutput,
  }));
// Input Schema
export interface PrivateLinkResourceGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  privateLinkResourceName: string;
}
export const PrivateLinkResourceGetInput =
  /*@__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Codec<PrivateLinkResourceGetInput>;

// Output Schema
export interface PrivateLinkResourceGetOutput {
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
export const PrivateLinkResourceGetOutput =
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
  }) as unknown as Schema.Codec<PrivateLinkResourceGetOutput>;

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
export const PrivateLinkResourceGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: PrivateLinkResourceGetInput,
  outputSchema: PrivateLinkResourceGetOutput,
}));
// Input Schema
export interface PrivateLinkResourceListByBatchAccountInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  maxresults?: number;
}
export const PrivateLinkResourceListByBatchAccountInput =
  /*@__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Codec<PrivateLinkResourceListByBatchAccountInput>;

// Output Schema
export interface PrivateLinkResourceListByBatchAccountOutput {
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
export const PrivateLinkResourceListByBatchAccountOutput =
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
  }) as unknown as Schema.Codec<PrivateLinkResourceListByBatchAccountOutput>;

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
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkResourceListByBatchAccountInput,
    outputSchema: PrivateLinkResourceListByBatchAccountOutput,
  }));
