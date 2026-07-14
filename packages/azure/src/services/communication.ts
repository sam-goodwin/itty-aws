/**
 * Azure Communication API
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
export interface CommunicationServicesCheckNameAvailabilityInput {
  subscriptionId: string;
  name?: string;
  type?: string;
}
export const CommunicationServicesCheckNameAvailabilityInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Communication/checkNameAvailability",
      apiVersion: "2026-03-18",
    }),
  ) as unknown as Schema.Codec<CommunicationServicesCheckNameAvailabilityInput>;

// Output Schema
export interface CommunicationServicesCheckNameAvailabilityOutput {
  nameAvailable?: boolean;
  reason?: "Invalid" | "AlreadyExists";
  message?: string;
}
export const CommunicationServicesCheckNameAvailabilityOutput =
  /*@__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.Literals(["Invalid", "AlreadyExists"])),
    message: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<CommunicationServicesCheckNameAvailabilityOutput>;

// The operation
/**
 * Check Name Availability
 *
 * Checks that the CommunicationService name is valid and is not already in use.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const CommunicationServicesCheckNameAvailability =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CommunicationServicesCheckNameAvailabilityInput,
    outputSchema: CommunicationServicesCheckNameAvailabilityOutput,
  }));
// Input Schema
export interface CommunicationServicesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  communicationServiceName: string;
  properties?: {
    provisioningState?:
      | "Unknown"
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Running"
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Moving";
    hostName?: string;
    dataLocation: string;
    notificationHubId?: string;
    version?: string;
    immutableResourceId?: string;
    linkedDomains?: string[];
    publicNetworkAccess?: "Enabled" | "Disabled" | "SecuredByPerimeter";
    disableLocalAuth?: boolean;
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
export const CommunicationServicesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    communicationServiceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Unknown",
            "Succeeded",
            "Failed",
            "Canceled",
            "Running",
            "Creating",
            "Updating",
            "Deleting",
            "Moving",
          ]),
        ),
        hostName: Schema.optional(Schema.String),
        dataLocation: Schema.String,
        notificationHubId: Schema.optional(Schema.String),
        version: Schema.optional(Schema.String),
        immutableResourceId: Schema.optional(Schema.String),
        linkedDomains: Schema.optional(Schema.Array(Schema.String)),
        publicNetworkAccess: Schema.optional(
          Schema.Literals(["Enabled", "Disabled", "SecuredByPerimeter"]),
        ),
        disableLocalAuth: Schema.optional(Schema.Boolean),
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Communication/communicationServices/{communicationServiceName}",
      apiVersion: "2026-03-18",
    }),
  ) as unknown as Schema.Codec<CommunicationServicesCreateOrUpdateInput>;

// Output Schema
export interface CommunicationServicesCreateOrUpdateOutput {
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
export const CommunicationServicesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<CommunicationServicesCreateOrUpdateOutput>;

// The operation
/**
 * Create Or Update
 *
 * Create a new CommunicationService or update an existing CommunicationService.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param communicationServiceName - The name of the CommunicationService resource.
 */
export const CommunicationServicesCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CommunicationServicesCreateOrUpdateInput,
    outputSchema: CommunicationServicesCreateOrUpdateOutput,
  }));
// Input Schema
export interface CommunicationServicesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  communicationServiceName: string;
}
export const CommunicationServicesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    communicationServiceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Communication/communicationServices/{communicationServiceName}",
      apiVersion: "2026-03-18",
    }),
  ) as unknown as Schema.Codec<CommunicationServicesDeleteInput>;

// Output Schema
export type CommunicationServicesDeleteOutput = void;
export const CommunicationServicesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<CommunicationServicesDeleteOutput>;

// The operation
/**
 * Delete
 *
 * Operation to delete a CommunicationService.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param communicationServiceName - The name of the CommunicationService resource.
 */
export const CommunicationServicesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: CommunicationServicesDeleteInput,
  outputSchema: CommunicationServicesDeleteOutput,
}));
// Input Schema
export interface CommunicationServicesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  communicationServiceName: string;
}
export const CommunicationServicesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    communicationServiceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Communication/communicationServices/{communicationServiceName}",
      apiVersion: "2026-03-18",
    }),
  ) as unknown as Schema.Codec<CommunicationServicesGetInput>;

// Output Schema
export interface CommunicationServicesGetOutput {
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
export const CommunicationServicesGetOutput =
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
  }) as unknown as Schema.Codec<CommunicationServicesGetOutput>;

// The operation
/**
 * Get
 *
 * Get the CommunicationService and its properties.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param communicationServiceName - The name of the CommunicationService resource.
 */
export const CommunicationServicesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: CommunicationServicesGetInput,
  outputSchema: CommunicationServicesGetOutput,
}));
// Input Schema
export interface CommunicationServicesLinkNotificationHubInput {
  subscriptionId: string;
  resourceGroupName: string;
  communicationServiceName: string;
  resourceId: string;
  connectionString: string | Redacted.Redacted<string>;
}
export const CommunicationServicesLinkNotificationHubInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    communicationServiceName: Schema.String.pipe(T.PathParam()),
    resourceId: Schema.String,
    connectionString: SensitiveString,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Communication/communicationServices/{communicationServiceName}/linkNotificationHub",
      apiVersion: "2026-03-18",
    }),
  ) as unknown as Schema.Codec<CommunicationServicesLinkNotificationHubInput>;

// Output Schema
export interface CommunicationServicesLinkNotificationHubOutput {
  resourceId?: string;
}
export const CommunicationServicesLinkNotificationHubOutput =
  /*@__PURE__*/ Schema.Struct({
    resourceId: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<CommunicationServicesLinkNotificationHubOutput>;

// The operation
/**
 * Link Notification Hub
 *
 * Links an Azure Notification Hub to this communication service.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param communicationServiceName - The name of the CommunicationService resource.
 */
export const CommunicationServicesLinkNotificationHub =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CommunicationServicesLinkNotificationHubInput,
    outputSchema: CommunicationServicesLinkNotificationHubOutput,
  }));
// Input Schema
export interface CommunicationServicesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const CommunicationServicesListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Communication/communicationServices",
      apiVersion: "2026-03-18",
    }),
  ) as unknown as Schema.Codec<CommunicationServicesListByResourceGroupInput>;

// Output Schema
export interface CommunicationServicesListByResourceGroupOutput {
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
export const CommunicationServicesListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<CommunicationServicesListByResourceGroupOutput>;

// The operation
/**
 * List By Resource Group
 *
 * Handles requests to list all resources in a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const CommunicationServicesListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CommunicationServicesListByResourceGroupInput,
    outputSchema: CommunicationServicesListByResourceGroupOutput,
  }));
// Input Schema
export interface CommunicationServicesListBySubscriptionInput {
  subscriptionId: string;
}
export const CommunicationServicesListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Communication/communicationServices",
      apiVersion: "2026-03-18",
    }),
  ) as unknown as Schema.Codec<CommunicationServicesListBySubscriptionInput>;

// Output Schema
export interface CommunicationServicesListBySubscriptionOutput {
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
export const CommunicationServicesListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<CommunicationServicesListBySubscriptionOutput>;

// The operation
/**
 * List By Subscription
 *
 * Handles requests to list all resources in a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const CommunicationServicesListBySubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CommunicationServicesListBySubscriptionInput,
    outputSchema: CommunicationServicesListBySubscriptionOutput,
  }));
// Input Schema
export interface CommunicationServicesListKeysInput {
  subscriptionId: string;
  resourceGroupName: string;
  communicationServiceName: string;
}
export const CommunicationServicesListKeysInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    communicationServiceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Communication/communicationServices/{communicationServiceName}/listKeys",
      apiVersion: "2026-03-18",
    }),
  ) as unknown as Schema.Codec<CommunicationServicesListKeysInput>;

// Output Schema
export interface CommunicationServicesListKeysOutput {
  primaryKey?: string;
  secondaryKey?: string;
  primaryConnectionString?: string;
  secondaryConnectionString?: string;
}
export const CommunicationServicesListKeysOutput =
  /*@__PURE__*/ Schema.Struct({
    primaryKey: Schema.optional(Schema.String),
    secondaryKey: Schema.optional(Schema.String),
    primaryConnectionString: Schema.optional(Schema.String),
    secondaryConnectionString: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<CommunicationServicesListKeysOutput>;

// The operation
/**
 * List Keys
 *
 * Get the access keys of the CommunicationService resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param communicationServiceName - The name of the CommunicationService resource.
 */
export const CommunicationServicesListKeys =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CommunicationServicesListKeysInput,
    outputSchema: CommunicationServicesListKeysOutput,
  }));
// Input Schema
export interface CommunicationServicesRegenerateKeyInput {
  subscriptionId: string;
  resourceGroupName: string;
  communicationServiceName: string;
  keyType?: "Primary" | "Secondary";
}
export const CommunicationServicesRegenerateKeyInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    communicationServiceName: Schema.String.pipe(T.PathParam()),
    keyType: Schema.optional(Schema.Literals(["Primary", "Secondary"])),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Communication/communicationServices/{communicationServiceName}/regenerateKey",
      apiVersion: "2026-03-18",
    }),
  ) as unknown as Schema.Codec<CommunicationServicesRegenerateKeyInput>;

// Output Schema
export interface CommunicationServicesRegenerateKeyOutput {
  primaryKey?: string;
  secondaryKey?: string;
  primaryConnectionString?: string;
  secondaryConnectionString?: string;
}
export const CommunicationServicesRegenerateKeyOutput =
  /*@__PURE__*/ Schema.Struct({
    primaryKey: Schema.optional(Schema.String),
    secondaryKey: Schema.optional(Schema.String),
    primaryConnectionString: Schema.optional(Schema.String),
    secondaryConnectionString: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<CommunicationServicesRegenerateKeyOutput>;

// The operation
/**
 * Regenerate Key
 *
 * Regenerate CommunicationService access key. PrimaryKey and SecondaryKey cannot be regenerated at the same time.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param communicationServiceName - The name of the CommunicationService resource.
 */
export const CommunicationServicesRegenerateKey =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CommunicationServicesRegenerateKeyInput,
    outputSchema: CommunicationServicesRegenerateKeyOutput,
  }));
// Input Schema
export interface CommunicationServicesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  communicationServiceName: string;
  properties?: {
    linkedDomains?: string[];
    publicNetworkAccess?: "Enabled" | "Disabled" | "SecuredByPerimeter";
    disableLocalAuth?: boolean;
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
}
export const CommunicationServicesUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    communicationServiceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        linkedDomains: Schema.optional(Schema.Array(Schema.String)),
        publicNetworkAccess: Schema.optional(
          Schema.Literals(["Enabled", "Disabled", "SecuredByPerimeter"]),
        ),
        disableLocalAuth: Schema.optional(Schema.Boolean),
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
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Communication/communicationServices/{communicationServiceName}",
      apiVersion: "2026-03-18",
    }),
  ) as unknown as Schema.Codec<CommunicationServicesUpdateInput>;

// Output Schema
export interface CommunicationServicesUpdateOutput {
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
export const CommunicationServicesUpdateOutput =
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
  }) as unknown as Schema.Codec<CommunicationServicesUpdateOutput>;

// The operation
/**
 * Update
 *
 * Operation to update an existing CommunicationService.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param communicationServiceName - The name of the CommunicationService resource.
 */
export const CommunicationServicesUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: CommunicationServicesUpdateInput,
  outputSchema: CommunicationServicesUpdateOutput,
}));
// Input Schema
export interface DomainsCancelVerificationInput {
  subscriptionId: string;
  resourceGroupName: string;
  emailServiceName: string;
  domainName: string;
  verificationType: "Domain" | "SPF" | "DKIM" | "DKIM2" | "DMARC";
}
export const DomainsCancelVerificationInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    emailServiceName: Schema.String.pipe(T.PathParam()),
    domainName: Schema.String.pipe(T.PathParam()),
    verificationType: Schema.Literals([
      "Domain",
      "SPF",
      "DKIM",
      "DKIM2",
      "DMARC",
    ]),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Communication/emailServices/{emailServiceName}/domains/{domainName}/cancelVerification",
      apiVersion: "2026-03-18",
    }),
  ) as unknown as Schema.Codec<DomainsCancelVerificationInput>;

// Output Schema
export type DomainsCancelVerificationOutput = void;
export const DomainsCancelVerificationOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DomainsCancelVerificationOutput>;

// The operation
/**
 * Cancel Verification
 *
 * Cancel verification of DNS record.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param emailServiceName - The name of the EmailService resource.
 * @param domainName - The name of the Domains resource.
 */
export const DomainsCancelVerification = /*@__PURE__*/ API.make(() => ({
  inputSchema: DomainsCancelVerificationInput,
  outputSchema: DomainsCancelVerificationOutput,
}));
// Input Schema
export interface DomainsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  emailServiceName: string;
  domainName: string;
  properties?: {
    provisioningState?:
      | "Unknown"
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Running"
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Moving";
    dataLocation?: string;
    fromSenderDomain?: string;
    mailFromSenderDomain?: string;
    domainManagement:
      | "AzureManaged"
      | "CustomerManaged"
      | "CustomerManagedInExchangeOnline";
    verificationStates?: {
      Domain?: {
        status?:
          | "NotStarted"
          | "VerificationRequested"
          | "VerificationInProgress"
          | "VerificationFailed"
          | "Verified"
          | "CancellationRequested";
        errorCode?: string;
      };
      SPF?: {
        status?:
          | "NotStarted"
          | "VerificationRequested"
          | "VerificationInProgress"
          | "VerificationFailed"
          | "Verified"
          | "CancellationRequested";
        errorCode?: string;
      };
      DKIM?: {
        status?:
          | "NotStarted"
          | "VerificationRequested"
          | "VerificationInProgress"
          | "VerificationFailed"
          | "Verified"
          | "CancellationRequested";
        errorCode?: string;
      };
      DKIM2?: {
        status?:
          | "NotStarted"
          | "VerificationRequested"
          | "VerificationInProgress"
          | "VerificationFailed"
          | "Verified"
          | "CancellationRequested";
        errorCode?: string;
      };
      DMARC?: {
        status?:
          | "NotStarted"
          | "VerificationRequested"
          | "VerificationInProgress"
          | "VerificationFailed"
          | "Verified"
          | "CancellationRequested";
        errorCode?: string;
      };
    };
    verificationRecords?: {
      Domain?: { type?: string; name?: string; value?: string; ttl?: number };
      SPF?: { type?: string; name?: string; value?: string; ttl?: number };
      DKIM?: { type?: string; name?: string; value?: string; ttl?: number };
      DKIM2?: { type?: string; name?: string; value?: string; ttl?: number };
      DMARC?: { type?: string; name?: string; value?: string; ttl?: number };
    };
    userEngagementTracking?: "Disabled" | "Enabled";
  };
  tags?: Record<string, string>;
  location: string;
}
export const DomainsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    emailServiceName: Schema.String.pipe(T.PathParam()),
    domainName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Unknown",
            "Succeeded",
            "Failed",
            "Canceled",
            "Running",
            "Creating",
            "Updating",
            "Deleting",
            "Moving",
          ]),
        ),
        dataLocation: Schema.optional(Schema.String),
        fromSenderDomain: Schema.optional(Schema.String),
        mailFromSenderDomain: Schema.optional(Schema.String),
        domainManagement: Schema.Literals([
          "AzureManaged",
          "CustomerManaged",
          "CustomerManagedInExchangeOnline",
        ]),
        verificationStates: Schema.optional(
          Schema.Struct({
            Domain: Schema.optional(
              Schema.Struct({
                status: Schema.optional(
                  Schema.Literals([
                    "NotStarted",
                    "VerificationRequested",
                    "VerificationInProgress",
                    "VerificationFailed",
                    "Verified",
                    "CancellationRequested",
                  ]),
                ),
                errorCode: Schema.optional(Schema.String),
              }),
            ),
            SPF: Schema.optional(
              Schema.Struct({
                status: Schema.optional(
                  Schema.Literals([
                    "NotStarted",
                    "VerificationRequested",
                    "VerificationInProgress",
                    "VerificationFailed",
                    "Verified",
                    "CancellationRequested",
                  ]),
                ),
                errorCode: Schema.optional(Schema.String),
              }),
            ),
            DKIM: Schema.optional(
              Schema.Struct({
                status: Schema.optional(
                  Schema.Literals([
                    "NotStarted",
                    "VerificationRequested",
                    "VerificationInProgress",
                    "VerificationFailed",
                    "Verified",
                    "CancellationRequested",
                  ]),
                ),
                errorCode: Schema.optional(Schema.String),
              }),
            ),
            DKIM2: Schema.optional(
              Schema.Struct({
                status: Schema.optional(
                  Schema.Literals([
                    "NotStarted",
                    "VerificationRequested",
                    "VerificationInProgress",
                    "VerificationFailed",
                    "Verified",
                    "CancellationRequested",
                  ]),
                ),
                errorCode: Schema.optional(Schema.String),
              }),
            ),
            DMARC: Schema.optional(
              Schema.Struct({
                status: Schema.optional(
                  Schema.Literals([
                    "NotStarted",
                    "VerificationRequested",
                    "VerificationInProgress",
                    "VerificationFailed",
                    "Verified",
                    "CancellationRequested",
                  ]),
                ),
                errorCode: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
        verificationRecords: Schema.optional(
          Schema.Struct({
            Domain: Schema.optional(
              Schema.Struct({
                type: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                value: Schema.optional(Schema.String),
                ttl: Schema.optional(Schema.Number),
              }),
            ),
            SPF: Schema.optional(
              Schema.Struct({
                type: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                value: Schema.optional(Schema.String),
                ttl: Schema.optional(Schema.Number),
              }),
            ),
            DKIM: Schema.optional(
              Schema.Struct({
                type: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                value: Schema.optional(Schema.String),
                ttl: Schema.optional(Schema.Number),
              }),
            ),
            DKIM2: Schema.optional(
              Schema.Struct({
                type: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                value: Schema.optional(Schema.String),
                ttl: Schema.optional(Schema.Number),
              }),
            ),
            DMARC: Schema.optional(
              Schema.Struct({
                type: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                value: Schema.optional(Schema.String),
                ttl: Schema.optional(Schema.Number),
              }),
            ),
          }),
        ),
        userEngagementTracking: Schema.optional(
          Schema.Literals(["Disabled", "Enabled"]),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Communication/emailServices/{emailServiceName}/domains/{domainName}",
      apiVersion: "2026-03-18",
    }),
  ) as unknown as Schema.Codec<DomainsCreateOrUpdateInput>;

// Output Schema
export interface DomainsCreateOrUpdateOutput {
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
export const DomainsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<DomainsCreateOrUpdateOutput>;

// The operation
/**
 * Create Or Update
 *
 * Add a new Domains resource under the parent EmailService resource or update an existing Domains resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param emailServiceName - The name of the EmailService resource.
 * @param domainName - The name of the Domains resource.
 */
export const DomainsCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: DomainsCreateOrUpdateInput,
  outputSchema: DomainsCreateOrUpdateOutput,
}));
// Input Schema
export interface DomainsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  emailServiceName: string;
  domainName: string;
}
export const DomainsDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  emailServiceName: Schema.String.pipe(T.PathParam()),
  domainName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Communication/emailServices/{emailServiceName}/domains/{domainName}",
    apiVersion: "2026-03-18",
  }),
) as unknown as Schema.Codec<DomainsDeleteInput>;

// Output Schema
export type DomainsDeleteOutput = void;
export const DomainsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DomainsDeleteOutput>;

// The operation
/**
 * Delete
 *
 * Operation to delete a Domains resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param emailServiceName - The name of the EmailService resource.
 * @param domainName - The name of the Domains resource.
 */
export const DomainsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: DomainsDeleteInput,
  outputSchema: DomainsDeleteOutput,
}));
// Input Schema
export interface DomainsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  emailServiceName: string;
  domainName: string;
}
export const DomainsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  emailServiceName: Schema.String.pipe(T.PathParam()),
  domainName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Communication/emailServices/{emailServiceName}/domains/{domainName}",
    apiVersion: "2026-03-18",
  }),
) as unknown as Schema.Codec<DomainsGetInput>;

// Output Schema
export interface DomainsGetOutput {
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
export const DomainsGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<DomainsGetOutput>;

// The operation
/**
 * Get
 *
 * Get the Domains resource and its properties.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param emailServiceName - The name of the EmailService resource.
 * @param domainName - The name of the Domains resource.
 */
export const DomainsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: DomainsGetInput,
  outputSchema: DomainsGetOutput,
}));
// Input Schema
export interface DomainsInitiateVerificationInput {
  subscriptionId: string;
  resourceGroupName: string;
  emailServiceName: string;
  domainName: string;
  verificationType: "Domain" | "SPF" | "DKIM" | "DKIM2" | "DMARC";
}
export const DomainsInitiateVerificationInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    emailServiceName: Schema.String.pipe(T.PathParam()),
    domainName: Schema.String.pipe(T.PathParam()),
    verificationType: Schema.Literals([
      "Domain",
      "SPF",
      "DKIM",
      "DKIM2",
      "DMARC",
    ]),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Communication/emailServices/{emailServiceName}/domains/{domainName}/initiateVerification",
      apiVersion: "2026-03-18",
    }),
  ) as unknown as Schema.Codec<DomainsInitiateVerificationInput>;

// Output Schema
export type DomainsInitiateVerificationOutput = void;
export const DomainsInitiateVerificationOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DomainsInitiateVerificationOutput>;

// The operation
/**
 * Initiate Verification
 *
 * Initiate verification of DNS record.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param emailServiceName - The name of the EmailService resource.
 * @param domainName - The name of the Domains resource.
 */
export const DomainsInitiateVerification = /*@__PURE__*/ API.make(() => ({
  inputSchema: DomainsInitiateVerificationInput,
  outputSchema: DomainsInitiateVerificationOutput,
}));
// Input Schema
export interface DomainsListByEmailServiceResourceInput {
  subscriptionId: string;
  resourceGroupName: string;
  emailServiceName: string;
}
export const DomainsListByEmailServiceResourceInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    emailServiceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Communication/emailServices/{emailServiceName}/domains",
      apiVersion: "2026-03-18",
    }),
  ) as unknown as Schema.Codec<DomainsListByEmailServiceResourceInput>;

// Output Schema
export interface DomainsListByEmailServiceResourceOutput {
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
export const DomainsListByEmailServiceResourceOutput =
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
  }) as unknown as Schema.Codec<DomainsListByEmailServiceResourceOutput>;

// The operation
/**
 * List by EmailService
 *
 * Handles requests to list all Domains resources under the parent EmailServices resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param emailServiceName - The name of the EmailService resource.
 */
export const DomainsListByEmailServiceResource =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DomainsListByEmailServiceResourceInput,
    outputSchema: DomainsListByEmailServiceResourceOutput,
  }));
// Input Schema
export interface DomainsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  emailServiceName: string;
  domainName: string;
  properties?: { userEngagementTracking?: "Disabled" | "Enabled" };
  tags?: Record<string, string>;
}
export const DomainsUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  emailServiceName: Schema.String.pipe(T.PathParam()),
  domainName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      userEngagementTracking: Schema.optional(
        Schema.Literals(["Disabled", "Enabled"]),
      ),
    }),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Communication/emailServices/{emailServiceName}/domains/{domainName}",
    apiVersion: "2026-03-18",
  }),
) as unknown as Schema.Codec<DomainsUpdateInput>;

// Output Schema
export interface DomainsUpdateOutput {
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
export const DomainsUpdateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<DomainsUpdateOutput>;

// The operation
/**
 * Update
 *
 * Operation to update an existing Domains resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param emailServiceName - The name of the EmailService resource.
 * @param domainName - The name of the Domains resource.
 */
export const DomainsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: DomainsUpdateInput,
  outputSchema: DomainsUpdateOutput,
}));
// Input Schema
export interface EmailServicesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  emailServiceName: string;
  properties?: {
    provisioningState?:
      | "Unknown"
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Running"
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Moving";
    dataLocation: string;
  };
  tags?: Record<string, string>;
  location: string;
}
export const EmailServicesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    emailServiceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Unknown",
            "Succeeded",
            "Failed",
            "Canceled",
            "Running",
            "Creating",
            "Updating",
            "Deleting",
            "Moving",
          ]),
        ),
        dataLocation: Schema.String,
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Communication/emailServices/{emailServiceName}",
      apiVersion: "2026-03-18",
    }),
  ) as unknown as Schema.Codec<EmailServicesCreateOrUpdateInput>;

// Output Schema
export interface EmailServicesCreateOrUpdateOutput {
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
export const EmailServicesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<EmailServicesCreateOrUpdateOutput>;

// The operation
/**
 * Create Or Update
 *
 * Create a new EmailService or update an existing EmailService.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param emailServiceName - The name of the EmailService resource.
 */
export const EmailServicesCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: EmailServicesCreateOrUpdateInput,
  outputSchema: EmailServicesCreateOrUpdateOutput,
}));
// Input Schema
export interface EmailServicesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  emailServiceName: string;
}
export const EmailServicesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    emailServiceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Communication/emailServices/{emailServiceName}",
      apiVersion: "2026-03-18",
    }),
  ) as unknown as Schema.Codec<EmailServicesDeleteInput>;

// Output Schema
export type EmailServicesDeleteOutput = void;
export const EmailServicesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<EmailServicesDeleteOutput>;

// The operation
/**
 * Delete
 *
 * Operation to delete a EmailService.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param emailServiceName - The name of the EmailService resource.
 */
export const EmailServicesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: EmailServicesDeleteInput,
  outputSchema: EmailServicesDeleteOutput,
}));
// Input Schema
export interface EmailServicesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  emailServiceName: string;
}
export const EmailServicesGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  emailServiceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Communication/emailServices/{emailServiceName}",
    apiVersion: "2026-03-18",
  }),
) as unknown as Schema.Codec<EmailServicesGetInput>;

// Output Schema
export interface EmailServicesGetOutput {
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
export const EmailServicesGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<EmailServicesGetOutput>;

// The operation
/**
 * Get
 *
 * Get the EmailService and its properties.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param emailServiceName - The name of the EmailService resource.
 */
export const EmailServicesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: EmailServicesGetInput,
  outputSchema: EmailServicesGetOutput,
}));
// Input Schema
export interface EmailServicesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const EmailServicesListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Communication/emailServices",
      apiVersion: "2026-03-18",
    }),
  ) as unknown as Schema.Codec<EmailServicesListByResourceGroupInput>;

// Output Schema
export interface EmailServicesListByResourceGroupOutput {
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
export const EmailServicesListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<EmailServicesListByResourceGroupOutput>;

// The operation
/**
 * List By Resource Group
 *
 * Handles requests to list all resources in a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const EmailServicesListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: EmailServicesListByResourceGroupInput,
    outputSchema: EmailServicesListByResourceGroupOutput,
  }));
// Input Schema
export interface EmailServicesListBySubscriptionInput {
  subscriptionId: string;
}
export const EmailServicesListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Communication/emailServices",
      apiVersion: "2026-03-18",
    }),
  ) as unknown as Schema.Codec<EmailServicesListBySubscriptionInput>;

// Output Schema
export interface EmailServicesListBySubscriptionOutput {
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
export const EmailServicesListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<EmailServicesListBySubscriptionOutput>;

// The operation
/**
 * List By Subscription
 *
 * Handles requests to list all resources in a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const EmailServicesListBySubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: EmailServicesListBySubscriptionInput,
    outputSchema: EmailServicesListBySubscriptionOutput,
  }));
// Input Schema
export interface EmailServicesListVerifiedExchangeOnlineDomainsInput {
  subscriptionId: string;
}
export const EmailServicesListVerifiedExchangeOnlineDomainsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Communication/listVerifiedExchangeOnlineDomains",
      apiVersion: "2026-03-18",
    }),
  ) as unknown as Schema.Codec<EmailServicesListVerifiedExchangeOnlineDomainsInput>;

// Output Schema
export type EmailServicesListVerifiedExchangeOnlineDomainsOutput = string[];
export const EmailServicesListVerifiedExchangeOnlineDomainsOutput =
  /*@__PURE__*/ Schema.Array(
    Schema.String,
  ) as unknown as Schema.Codec<EmailServicesListVerifiedExchangeOnlineDomainsOutput>;

// The operation
/**
 * List Verified Domains From Exchange Online
 *
 * Get a list of domains that are fully verified in Exchange Online.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const EmailServicesListVerifiedExchangeOnlineDomains =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: EmailServicesListVerifiedExchangeOnlineDomainsInput,
    outputSchema: EmailServicesListVerifiedExchangeOnlineDomainsOutput,
  }));
// Input Schema
export interface EmailServicesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  emailServiceName: string;
  tags?: Record<string, string>;
}
export const EmailServicesUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    emailServiceName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Communication/emailServices/{emailServiceName}",
      apiVersion: "2026-03-18",
    }),
  ) as unknown as Schema.Codec<EmailServicesUpdateInput>;

// Output Schema
export interface EmailServicesUpdateOutput {
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
export const EmailServicesUpdateOutput =
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
  }) as unknown as Schema.Codec<EmailServicesUpdateOutput>;

// The operation
/**
 * Update
 *
 * Operation to update an existing EmailService.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param emailServiceName - The name of the EmailService resource.
 */
export const EmailServicesUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: EmailServicesUpdateInput,
  outputSchema: EmailServicesUpdateOutput,
}));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Communication/operations",
    apiVersion: "2026-03-18",
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
 * List Operations
 *
 * Lists all of the available REST API operations of the Microsoft.Communication provider.
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface SenderUsernamesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  emailServiceName: string;
  domainName: string;
  senderUsername: string;
  properties?: {
    dataLocation?: string;
    username: string;
    displayName?: string;
    provisioningState?:
      | "Unknown"
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Running"
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Moving";
  };
}
export const SenderUsernamesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    emailServiceName: Schema.String.pipe(T.PathParam()),
    domainName: Schema.String.pipe(T.PathParam()),
    senderUsername: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        dataLocation: Schema.optional(Schema.String),
        username: Schema.String,
        displayName: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Unknown",
            "Succeeded",
            "Failed",
            "Canceled",
            "Running",
            "Creating",
            "Updating",
            "Deleting",
            "Moving",
          ]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Communication/emailServices/{emailServiceName}/domains/{domainName}/senderUsernames/{senderUsername}",
      apiVersion: "2026-03-18",
    }),
  ) as unknown as Schema.Codec<SenderUsernamesCreateOrUpdateInput>;

// Output Schema
export interface SenderUsernamesCreateOrUpdateOutput {
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
export const SenderUsernamesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<SenderUsernamesCreateOrUpdateOutput>;

// The operation
/**
 * Create Or Update
 *
 * Add a new SenderUsername resource under the parent Domains resource or update an existing SenderUsername resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param emailServiceName - The name of the EmailService resource.
 * @param domainName - The name of the Domains resource.
 * @param senderUsername - The valid sender Username.
 */
export const SenderUsernamesCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SenderUsernamesCreateOrUpdateInput,
    outputSchema: SenderUsernamesCreateOrUpdateOutput,
  }));
// Input Schema
export interface SenderUsernamesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  emailServiceName: string;
  domainName: string;
  senderUsername: string;
}
export const SenderUsernamesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    emailServiceName: Schema.String.pipe(T.PathParam()),
    domainName: Schema.String.pipe(T.PathParam()),
    senderUsername: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Communication/emailServices/{emailServiceName}/domains/{domainName}/senderUsernames/{senderUsername}",
      apiVersion: "2026-03-18",
    }),
  ) as unknown as Schema.Codec<SenderUsernamesDeleteInput>;

// Output Schema
export type SenderUsernamesDeleteOutput = void;
export const SenderUsernamesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<SenderUsernamesDeleteOutput>;

// The operation
/**
 * Delete
 *
 * Operation to delete a SenderUsernames resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param emailServiceName - The name of the EmailService resource.
 * @param domainName - The name of the Domains resource.
 * @param senderUsername - The valid sender Username.
 */
export const SenderUsernamesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: SenderUsernamesDeleteInput,
  outputSchema: SenderUsernamesDeleteOutput,
}));
// Input Schema
export interface SenderUsernamesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  emailServiceName: string;
  domainName: string;
  senderUsername: string;
}
export const SenderUsernamesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    emailServiceName: Schema.String.pipe(T.PathParam()),
    domainName: Schema.String.pipe(T.PathParam()),
    senderUsername: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Communication/emailServices/{emailServiceName}/domains/{domainName}/senderUsernames/{senderUsername}",
      apiVersion: "2026-03-18",
    }),
  ) as unknown as Schema.Codec<SenderUsernamesGetInput>;

// Output Schema
export interface SenderUsernamesGetOutput {
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
export const SenderUsernamesGetOutput =
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
  }) as unknown as Schema.Codec<SenderUsernamesGetOutput>;

// The operation
/**
 * Get
 *
 * Get a valid sender username for a domains resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param emailServiceName - The name of the EmailService resource.
 * @param domainName - The name of the Domains resource.
 * @param senderUsername - The valid sender Username.
 */
export const SenderUsernamesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: SenderUsernamesGetInput,
  outputSchema: SenderUsernamesGetOutput,
}));
// Input Schema
export interface SenderUsernamesListByDomainsInput {
  subscriptionId: string;
  resourceGroupName: string;
  emailServiceName: string;
  domainName: string;
}
export const SenderUsernamesListByDomainsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    emailServiceName: Schema.String.pipe(T.PathParam()),
    domainName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Communication/emailServices/{emailServiceName}/domains/{domainName}/senderUsernames",
      apiVersion: "2026-03-18",
    }),
  ) as unknown as Schema.Codec<SenderUsernamesListByDomainsInput>;

// Output Schema
export interface SenderUsernamesListByDomainsOutput {
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
export const SenderUsernamesListByDomainsOutput =
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
  }) as unknown as Schema.Codec<SenderUsernamesListByDomainsOutput>;

// The operation
/**
 * ListBy_Domains
 *
 * List all valid sender usernames for a domains resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param emailServiceName - The name of the EmailService resource.
 * @param domainName - The name of the Domains resource.
 */
export const SenderUsernamesListByDomains =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SenderUsernamesListByDomainsInput,
    outputSchema: SenderUsernamesListByDomainsOutput,
  }));
// Input Schema
export interface SmtpUsernamesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  communicationServiceName: string;
  smtpUsername: string;
  properties?: {
    username: string;
    entraApplicationId: string;
    tenantId: string;
  };
}
export const SmtpUsernamesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    communicationServiceName: Schema.String.pipe(T.PathParam()),
    smtpUsername: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        username: Schema.String,
        entraApplicationId: Schema.String,
        tenantId: Schema.String,
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Communication/communicationServices/{communicationServiceName}/smtpUsernames/{smtpUsername}",
      apiVersion: "2026-03-18",
    }),
  ) as unknown as Schema.Codec<SmtpUsernamesCreateOrUpdateInput>;

// Output Schema
export interface SmtpUsernamesCreateOrUpdateOutput {
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
export const SmtpUsernamesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<SmtpUsernamesCreateOrUpdateOutput>;

// The operation
/**
 * Create Or Update
 *
 * Create or update an SmtpUsernameResource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param communicationServiceName - The name of the CommunicationService resource.
 * @param smtpUsername - The name of the SmtpUsernameResource.
 */
export const SmtpUsernamesCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: SmtpUsernamesCreateOrUpdateInput,
  outputSchema: SmtpUsernamesCreateOrUpdateOutput,
}));
// Input Schema
export interface SmtpUsernamesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  communicationServiceName: string;
  smtpUsername: string;
}
export const SmtpUsernamesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    communicationServiceName: Schema.String.pipe(T.PathParam()),
    smtpUsername: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Communication/communicationServices/{communicationServiceName}/smtpUsernames/{smtpUsername}",
      apiVersion: "2026-03-18",
    }),
  ) as unknown as Schema.Codec<SmtpUsernamesDeleteInput>;

// Output Schema
export type SmtpUsernamesDeleteOutput = void;
export const SmtpUsernamesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<SmtpUsernamesDeleteOutput>;

// The operation
/**
 * Delete
 *
 * Operation to delete a single SmtpUsername resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param communicationServiceName - The name of the CommunicationService resource.
 * @param smtpUsername - The name of the SmtpUsernameResource.
 */
export const SmtpUsernamesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: SmtpUsernamesDeleteInput,
  outputSchema: SmtpUsernamesDeleteOutput,
}));
// Input Schema
export interface SmtpUsernamesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  communicationServiceName: string;
  smtpUsername: string;
}
export const SmtpUsernamesGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  communicationServiceName: Schema.String.pipe(T.PathParam()),
  smtpUsername: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Communication/communicationServices/{communicationServiceName}/smtpUsernames/{smtpUsername}",
    apiVersion: "2026-03-18",
  }),
) as unknown as Schema.Codec<SmtpUsernamesGetInput>;

// Output Schema
export interface SmtpUsernamesGetOutput {
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
export const SmtpUsernamesGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<SmtpUsernamesGetOutput>;

// The operation
/**
 * Get
 *
 * Get a SmtpUsernameResource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param communicationServiceName - The name of the CommunicationService resource.
 * @param smtpUsername - The name of the SmtpUsernameResource.
 */
export const SmtpUsernamesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: SmtpUsernamesGetInput,
  outputSchema: SmtpUsernamesGetOutput,
}));
// Input Schema
export interface SmtpUsernamesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  communicationServiceName: string;
}
export const SmtpUsernamesListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  communicationServiceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Communication/communicationServices/{communicationServiceName}/smtpUsernames",
    apiVersion: "2026-03-18",
  }),
) as unknown as Schema.Codec<SmtpUsernamesListInput>;

// Output Schema
export interface SmtpUsernamesListOutput {
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
export const SmtpUsernamesListOutput =
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
  }) as unknown as Schema.Codec<SmtpUsernamesListOutput>;

// The operation
/**
 * Get
 *
 * Get all SmtpUsernameResources for a Communication resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param communicationServiceName - The name of the CommunicationService resource.
 */
export const SmtpUsernamesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: SmtpUsernamesListInput,
  outputSchema: SmtpUsernamesListOutput,
}));
// Input Schema
export interface SuppressionListAddressesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  emailServiceName: string;
  domainName: string;
  suppressionListName: string;
  addressId: string;
  properties?: {
    email: string;
    firstName?: string;
    lastName?: string;
    notes?: string;
    lastModified?: string;
    dataLocation?: string;
  };
}
export const SuppressionListAddressesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    emailServiceName: Schema.String.pipe(T.PathParam()),
    domainName: Schema.String.pipe(T.PathParam()),
    suppressionListName: Schema.String.pipe(T.PathParam()),
    addressId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        email: Schema.String,
        firstName: Schema.optional(Schema.String),
        lastName: Schema.optional(Schema.String),
        notes: Schema.optional(Schema.String),
        lastModified: Schema.optional(Schema.String),
        dataLocation: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Communication/emailServices/{emailServiceName}/domains/{domainName}/suppressionLists/{suppressionListName}/suppressionListAddresses/{addressId}",
      apiVersion: "2026-03-18",
    }),
  ) as unknown as Schema.Codec<SuppressionListAddressesCreateOrUpdateInput>;

// Output Schema
export interface SuppressionListAddressesCreateOrUpdateOutput {
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
export const SuppressionListAddressesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<SuppressionListAddressesCreateOrUpdateOutput>;

// The operation
/**
 * Create Or Update
 *
 * Create or update a SuppressionListAddress.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param emailServiceName - The name of the EmailService resource.
 * @param domainName - The name of the Domains resource.
 * @param suppressionListName - The name of the suppression list.
 * @param addressId - The id of the address in a suppression list.
 */
export const SuppressionListAddressesCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SuppressionListAddressesCreateOrUpdateInput,
    outputSchema: SuppressionListAddressesCreateOrUpdateOutput,
  }));
// Input Schema
export interface SuppressionListAddressesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  emailServiceName: string;
  domainName: string;
  suppressionListName: string;
  addressId: string;
}
export const SuppressionListAddressesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    emailServiceName: Schema.String.pipe(T.PathParam()),
    domainName: Schema.String.pipe(T.PathParam()),
    suppressionListName: Schema.String.pipe(T.PathParam()),
    addressId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Communication/emailServices/{emailServiceName}/domains/{domainName}/suppressionLists/{suppressionListName}/suppressionListAddresses/{addressId}",
      apiVersion: "2026-03-18",
    }),
  ) as unknown as Schema.Codec<SuppressionListAddressesDeleteInput>;

// Output Schema
export type SuppressionListAddressesDeleteOutput = void;
export const SuppressionListAddressesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<SuppressionListAddressesDeleteOutput>;

// The operation
/**
 * Delete
 *
 * Operation to delete a single address from a suppression list.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param emailServiceName - The name of the EmailService resource.
 * @param domainName - The name of the Domains resource.
 * @param suppressionListName - The name of the suppression list.
 * @param addressId - The id of the address in a suppression list.
 */
export const SuppressionListAddressesDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SuppressionListAddressesDeleteInput,
    outputSchema: SuppressionListAddressesDeleteOutput,
  }));
// Input Schema
export interface SuppressionListAddressesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  emailServiceName: string;
  domainName: string;
  suppressionListName: string;
  addressId: string;
}
export const SuppressionListAddressesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    emailServiceName: Schema.String.pipe(T.PathParam()),
    domainName: Schema.String.pipe(T.PathParam()),
    suppressionListName: Schema.String.pipe(T.PathParam()),
    addressId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Communication/emailServices/{emailServiceName}/domains/{domainName}/suppressionLists/{suppressionListName}/suppressionListAddresses/{addressId}",
      apiVersion: "2026-03-18",
    }),
  ) as unknown as Schema.Codec<SuppressionListAddressesGetInput>;

// Output Schema
export interface SuppressionListAddressesGetOutput {
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
export const SuppressionListAddressesGetOutput =
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
  }) as unknown as Schema.Codec<SuppressionListAddressesGetOutput>;

// The operation
/**
 * Get
 *
 * Get a SuppressionListAddress.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param emailServiceName - The name of the EmailService resource.
 * @param domainName - The name of the Domains resource.
 * @param suppressionListName - The name of the suppression list.
 * @param addressId - The id of the address in a suppression list.
 */
export const SuppressionListAddressesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: SuppressionListAddressesGetInput,
  outputSchema: SuppressionListAddressesGetOutput,
}));
// Input Schema
export interface SuppressionListAddressesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  emailServiceName: string;
  domainName: string;
  suppressionListName: string;
}
export const SuppressionListAddressesListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    emailServiceName: Schema.String.pipe(T.PathParam()),
    domainName: Schema.String.pipe(T.PathParam()),
    suppressionListName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Communication/emailServices/{emailServiceName}/domains/{domainName}/suppressionLists/{suppressionListName}/suppressionListAddresses",
      apiVersion: "2026-03-18",
    }),
  ) as unknown as Schema.Codec<SuppressionListAddressesListInput>;

// Output Schema
export interface SuppressionListAddressesListOutput {
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
export const SuppressionListAddressesListOutput =
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
  }) as unknown as Schema.Codec<SuppressionListAddressesListOutput>;

// The operation
/**
 * Get
 *
 * Get all the addresses in a suppression list.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param emailServiceName - The name of the EmailService resource.
 * @param domainName - The name of the Domains resource.
 * @param suppressionListName - The name of the suppression list.
 */
export const SuppressionListAddressesList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SuppressionListAddressesListInput,
    outputSchema: SuppressionListAddressesListOutput,
  }));
// Input Schema
export interface SuppressionListsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  emailServiceName: string;
  domainName: string;
  suppressionListName: string;
  properties?: {
    listName?: string;
    lastUpdatedTimeStamp?: string;
    createdTimeStamp?: string;
    dataLocation?: string;
  };
}
export const SuppressionListsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    emailServiceName: Schema.String.pipe(T.PathParam()),
    domainName: Schema.String.pipe(T.PathParam()),
    suppressionListName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        listName: Schema.optional(Schema.String),
        lastUpdatedTimeStamp: Schema.optional(Schema.String),
        createdTimeStamp: Schema.optional(Schema.String),
        dataLocation: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Communication/emailServices/{emailServiceName}/domains/{domainName}/suppressionLists/{suppressionListName}",
      apiVersion: "2026-03-18",
    }),
  ) as unknown as Schema.Codec<SuppressionListsCreateOrUpdateInput>;

// Output Schema
export interface SuppressionListsCreateOrUpdateOutput {
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
export const SuppressionListsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<SuppressionListsCreateOrUpdateOutput>;

// The operation
/**
 * Create Or Update
 *
 * Add a new SuppressionList resource under the parent Domains resource or update an existing SuppressionList resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param emailServiceName - The name of the EmailService resource.
 * @param domainName - The name of the Domains resource.
 * @param suppressionListName - The name of the suppression list.
 */
export const SuppressionListsCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SuppressionListsCreateOrUpdateInput,
    outputSchema: SuppressionListsCreateOrUpdateOutput,
  }));
// Input Schema
export interface SuppressionListsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  emailServiceName: string;
  domainName: string;
  suppressionListName: string;
}
export const SuppressionListsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    emailServiceName: Schema.String.pipe(T.PathParam()),
    domainName: Schema.String.pipe(T.PathParam()),
    suppressionListName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Communication/emailServices/{emailServiceName}/domains/{domainName}/suppressionLists/{suppressionListName}",
      apiVersion: "2026-03-18",
    }),
  ) as unknown as Schema.Codec<SuppressionListsDeleteInput>;

// Output Schema
export type SuppressionListsDeleteOutput = void;
export const SuppressionListsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<SuppressionListsDeleteOutput>;

// The operation
/**
 * Delete
 *
 * Delete a SuppressionList.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param emailServiceName - The name of the EmailService resource.
 * @param domainName - The name of the Domains resource.
 * @param suppressionListName - The name of the suppression list.
 */
export const SuppressionListsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: SuppressionListsDeleteInput,
  outputSchema: SuppressionListsDeleteOutput,
}));
// Input Schema
export interface SuppressionListsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  emailServiceName: string;
  domainName: string;
  suppressionListName: string;
}
export const SuppressionListsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    emailServiceName: Schema.String.pipe(T.PathParam()),
    domainName: Schema.String.pipe(T.PathParam()),
    suppressionListName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Communication/emailServices/{emailServiceName}/domains/{domainName}/suppressionLists/{suppressionListName}",
      apiVersion: "2026-03-18",
    }),
  ) as unknown as Schema.Codec<SuppressionListsGetInput>;

// Output Schema
export interface SuppressionListsGetOutput {
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
export const SuppressionListsGetOutput =
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
  }) as unknown as Schema.Codec<SuppressionListsGetOutput>;

// The operation
/**
 * Get
 *
 * Get a SuppressionList resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param emailServiceName - The name of the EmailService resource.
 * @param domainName - The name of the Domains resource.
 * @param suppressionListName - The name of the suppression list.
 */
export const SuppressionListsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: SuppressionListsGetInput,
  outputSchema: SuppressionListsGetOutput,
}));
// Input Schema
export interface SuppressionListsListByDomainInput {
  subscriptionId: string;
  resourceGroupName: string;
  emailServiceName: string;
  domainName: string;
}
export const SuppressionListsListByDomainInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    emailServiceName: Schema.String.pipe(T.PathParam()),
    domainName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Communication/emailServices/{emailServiceName}/domains/{domainName}/suppressionLists",
      apiVersion: "2026-03-18",
    }),
  ) as unknown as Schema.Codec<SuppressionListsListByDomainInput>;

// Output Schema
export interface SuppressionListsListByDomainOutput {
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
export const SuppressionListsListByDomainOutput =
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
  }) as unknown as Schema.Codec<SuppressionListsListByDomainOutput>;

// The operation
/**
 * List
 *
 * List all suppression lists for a domains resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param emailServiceName - The name of the EmailService resource.
 * @param domainName - The name of the Domains resource.
 */
export const SuppressionListsListByDomain =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SuppressionListsListByDomainInput,
    outputSchema: SuppressionListsListByDomainOutput,
  }));
