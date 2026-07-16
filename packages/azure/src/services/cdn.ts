/**
 * Azure Cdn API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface AFDCustomDomainsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  customDomainName: string;
  properties?: {
    profileName?: string;
    tlsSettings?: {
      certificateType:
        | "CustomerCertificate"
        | "ManagedCertificate"
        | "AzureFirstPartyManagedCertificate";
      cipherSuiteSetType?:
        | "Customized"
        | "TLS10_2019"
        | "TLS12_2022"
        | "TLS12_2023";
      minimumTlsVersion?: "TLS10" | "TLS12" | "TLS13";
      customizedCipherSuiteSet?: {
        cipherSuiteSetForTls12?: (
          | "ECDHE_RSA_AES128_GCM_SHA256"
          | "ECDHE_RSA_AES256_GCM_SHA384"
          | "DHE_RSA_AES256_GCM_SHA384"
          | "DHE_RSA_AES128_GCM_SHA256"
          | "ECDHE_RSA_AES128_SHA256"
          | "ECDHE_RSA_AES256_SHA384"
        )[];
        cipherSuiteSetForTls13?: (
          | "TLS_AES_128_GCM_SHA256"
          | "TLS_AES_256_GCM_SHA384"
        )[];
      };
      secret?: { id?: string };
    };
    azureDnsZone?: { id?: string };
    preValidatedCustomDomainResourceId?: { id?: string };
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Updating"
      | "Deleting"
      | "Creating";
    deploymentStatus?: "NotStarted" | "InProgress" | "Succeeded" | "Failed";
    domainValidationState?:
      | "Unknown"
      | "Submitting"
      | "Pending"
      | "Rejected"
      | "TimedOut"
      | "PendingRevalidation"
      | "Approved"
      | "RefreshingValidationToken"
      | "InternalError";
    hostName: string;
    extendedProperties?: Record<string, string>;
    validationProperties?: {
      validationToken?: string;
      expirationDate?: string;
    };
  };
}
export const AFDCustomDomainsCreateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
    customDomainName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        profileName: Schema.optional(Schema.String),
        tlsSettings: Schema.optional(
          Schema.Struct({
            certificateType: Schema.Literals([
              "CustomerCertificate",
              "ManagedCertificate",
              "AzureFirstPartyManagedCertificate",
            ]),
            cipherSuiteSetType: Schema.optional(
              Schema.Literals([
                "Customized",
                "TLS10_2019",
                "TLS12_2022",
                "TLS12_2023",
              ]),
            ),
            minimumTlsVersion: Schema.optional(
              Schema.Literals(["TLS10", "TLS12", "TLS13"]),
            ),
            customizedCipherSuiteSet: Schema.optional(
              Schema.Struct({
                cipherSuiteSetForTls12: Schema.optional(
                  Schema.Array(
                    Schema.Literals([
                      "ECDHE_RSA_AES128_GCM_SHA256",
                      "ECDHE_RSA_AES256_GCM_SHA384",
                      "DHE_RSA_AES256_GCM_SHA384",
                      "DHE_RSA_AES128_GCM_SHA256",
                      "ECDHE_RSA_AES128_SHA256",
                      "ECDHE_RSA_AES256_SHA384",
                    ]),
                  ),
                ),
                cipherSuiteSetForTls13: Schema.optional(
                  Schema.Array(
                    Schema.Literals([
                      "TLS_AES_128_GCM_SHA256",
                      "TLS_AES_256_GCM_SHA384",
                    ]),
                  ),
                ),
              }),
            ),
            secret: Schema.optional(
              Schema.Struct({
                id: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
        azureDnsZone: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
          }),
        ),
        preValidatedCustomDomainResourceId: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
          }),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Updating",
            "Deleting",
            "Creating",
          ]),
        ),
        deploymentStatus: Schema.optional(
          Schema.Literals(["NotStarted", "InProgress", "Succeeded", "Failed"]),
        ),
        domainValidationState: Schema.optional(
          Schema.Literals([
            "Unknown",
            "Submitting",
            "Pending",
            "Rejected",
            "TimedOut",
            "PendingRevalidation",
            "Approved",
            "RefreshingValidationToken",
            "InternalError",
          ]),
        ),
        hostName: Schema.String,
        extendedProperties: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        validationProperties: Schema.optional(
          Schema.Struct({
            validationToken: Schema.optional(Schema.String),
            expirationDate: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/customDomains/{customDomainName}",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<AFDCustomDomainsCreateInput>;

// Output Schema
export interface AFDCustomDomainsCreateOutput {
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
export const AFDCustomDomainsCreateOutput =
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
  }) as unknown as Schema.Codec<AFDCustomDomainsCreateOutput>;

// The operation
/**
 * Creates a new domain within the specified profile.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 * @param customDomainName - Name of the domain under the profile which is unique globally.
 */
export const AFDCustomDomainsCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: AFDCustomDomainsCreateInput,
  outputSchema: AFDCustomDomainsCreateOutput,
}));
// Input Schema
export interface AFDCustomDomainsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  customDomainName: string;
}
export const AFDCustomDomainsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
    customDomainName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/customDomains/{customDomainName}",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<AFDCustomDomainsDeleteInput>;

// Output Schema
export type AFDCustomDomainsDeleteOutput = void;
export const AFDCustomDomainsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<AFDCustomDomainsDeleteOutput>;

// The operation
/**
 * Deletes an existing AzureFrontDoor domain with the specified domain name under the specified subscription, resource group and profile.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 * @param customDomainName - Name of the domain under the profile which is unique globally.
 */
export const AFDCustomDomainsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: AFDCustomDomainsDeleteInput,
  outputSchema: AFDCustomDomainsDeleteOutput,
}));
// Input Schema
export interface AFDCustomDomainsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  customDomainName: string;
}
export const AFDCustomDomainsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
    customDomainName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/customDomains/{customDomainName}",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<AFDCustomDomainsGetInput>;

// Output Schema
export interface AFDCustomDomainsGetOutput {
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
export const AFDCustomDomainsGetOutput =
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
  }) as unknown as Schema.Codec<AFDCustomDomainsGetOutput>;

// The operation
/**
 * Gets an existing AzureFrontDoor domain with the specified domain name under the specified subscription, resource group and profile.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 * @param customDomainName - Name of the domain under the profile which is unique globally.
 */
export const AFDCustomDomainsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: AFDCustomDomainsGetInput,
  outputSchema: AFDCustomDomainsGetOutput,
}));
// Input Schema
export interface AFDCustomDomainsListByProfileInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
}
export const AFDCustomDomainsListByProfileInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/customDomains",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<AFDCustomDomainsListByProfileInput>;

// Output Schema
export interface AFDCustomDomainsListByProfileOutput {
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
export const AFDCustomDomainsListByProfileOutput =
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
  }) as unknown as Schema.Codec<AFDCustomDomainsListByProfileOutput>;

// The operation
/**
 * Lists existing AzureFrontDoor domains.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 */
export const AFDCustomDomainsListByProfile =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AFDCustomDomainsListByProfileInput,
    outputSchema: AFDCustomDomainsListByProfileOutput,
  }));
// Input Schema
export interface AFDCustomDomainsRefreshValidationTokenInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  customDomainName: string;
}
export const AFDCustomDomainsRefreshValidationTokenInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
    customDomainName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/customDomains/{customDomainName}/refreshValidationToken",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<AFDCustomDomainsRefreshValidationTokenInput>;

// Output Schema
export type AFDCustomDomainsRefreshValidationTokenOutput = void;
export const AFDCustomDomainsRefreshValidationTokenOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<AFDCustomDomainsRefreshValidationTokenOutput>;

// The operation
/**
 * Updates the domain validation token.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 * @param customDomainName - Name of the domain under the profile which is unique globally.
 */
export const AFDCustomDomainsRefreshValidationToken =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AFDCustomDomainsRefreshValidationTokenInput,
    outputSchema: AFDCustomDomainsRefreshValidationTokenOutput,
  }));
// Input Schema
export interface AFDCustomDomainsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  customDomainName: string;
  properties?: {
    profileName?: string;
    tlsSettings?: {
      certificateType:
        | "CustomerCertificate"
        | "ManagedCertificate"
        | "AzureFirstPartyManagedCertificate";
      cipherSuiteSetType?:
        | "Customized"
        | "TLS10_2019"
        | "TLS12_2022"
        | "TLS12_2023";
      minimumTlsVersion?: "TLS10" | "TLS12" | "TLS13";
      customizedCipherSuiteSet?: {
        cipherSuiteSetForTls12?: (
          | "ECDHE_RSA_AES128_GCM_SHA256"
          | "ECDHE_RSA_AES256_GCM_SHA384"
          | "DHE_RSA_AES256_GCM_SHA384"
          | "DHE_RSA_AES128_GCM_SHA256"
          | "ECDHE_RSA_AES128_SHA256"
          | "ECDHE_RSA_AES256_SHA384"
        )[];
        cipherSuiteSetForTls13?: (
          | "TLS_AES_128_GCM_SHA256"
          | "TLS_AES_256_GCM_SHA384"
        )[];
      };
      secret?: { id?: string };
    };
    azureDnsZone?: { id?: string };
    preValidatedCustomDomainResourceId?: { id?: string };
  };
}
export const AFDCustomDomainsUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
    customDomainName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        profileName: Schema.optional(Schema.String),
        tlsSettings: Schema.optional(
          Schema.Struct({
            certificateType: Schema.Literals([
              "CustomerCertificate",
              "ManagedCertificate",
              "AzureFirstPartyManagedCertificate",
            ]),
            cipherSuiteSetType: Schema.optional(
              Schema.Literals([
                "Customized",
                "TLS10_2019",
                "TLS12_2022",
                "TLS12_2023",
              ]),
            ),
            minimumTlsVersion: Schema.optional(
              Schema.Literals(["TLS10", "TLS12", "TLS13"]),
            ),
            customizedCipherSuiteSet: Schema.optional(
              Schema.Struct({
                cipherSuiteSetForTls12: Schema.optional(
                  Schema.Array(
                    Schema.Literals([
                      "ECDHE_RSA_AES128_GCM_SHA256",
                      "ECDHE_RSA_AES256_GCM_SHA384",
                      "DHE_RSA_AES256_GCM_SHA384",
                      "DHE_RSA_AES128_GCM_SHA256",
                      "ECDHE_RSA_AES128_SHA256",
                      "ECDHE_RSA_AES256_SHA384",
                    ]),
                  ),
                ),
                cipherSuiteSetForTls13: Schema.optional(
                  Schema.Array(
                    Schema.Literals([
                      "TLS_AES_128_GCM_SHA256",
                      "TLS_AES_256_GCM_SHA384",
                    ]),
                  ),
                ),
              }),
            ),
            secret: Schema.optional(
              Schema.Struct({
                id: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
        azureDnsZone: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
          }),
        ),
        preValidatedCustomDomainResourceId: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/customDomains/{customDomainName}",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<AFDCustomDomainsUpdateInput>;

// Output Schema
export interface AFDCustomDomainsUpdateOutput {
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
export const AFDCustomDomainsUpdateOutput =
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
  }) as unknown as Schema.Codec<AFDCustomDomainsUpdateOutput>;

// The operation
/**
 * Updates an existing domain within a profile.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 * @param customDomainName - Name of the domain under the profile which is unique globally.
 */
export const AFDCustomDomainsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: AFDCustomDomainsUpdateInput,
  outputSchema: AFDCustomDomainsUpdateOutput,
}));
// Input Schema
export interface AFDEndpointsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  endpointName: string;
  properties?: {
    profileName?: string;
    enabledState?: "Enabled" | "Disabled";
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Updating"
      | "Deleting"
      | "Creating";
    deploymentStatus?: "NotStarted" | "InProgress" | "Succeeded" | "Failed";
    hostName?: string;
    autoGeneratedDomainNameLabelScope?:
      | "TenantReuse"
      | "SubscriptionReuse"
      | "ResourceGroupReuse"
      | "NoReuse";
  };
  tags?: Record<string, string>;
  location: string;
}
export const AFDEndpointsCreateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
    endpointName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        profileName: Schema.optional(Schema.String),
        enabledState: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Updating",
            "Deleting",
            "Creating",
          ]),
        ),
        deploymentStatus: Schema.optional(
          Schema.Literals(["NotStarted", "InProgress", "Succeeded", "Failed"]),
        ),
        hostName: Schema.optional(Schema.String),
        autoGeneratedDomainNameLabelScope: Schema.optional(
          Schema.Literals([
            "TenantReuse",
            "SubscriptionReuse",
            "ResourceGroupReuse",
            "NoReuse",
          ]),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/afdEndpoints/{endpointName}",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<AFDEndpointsCreateInput>;

// Output Schema
export interface AFDEndpointsCreateOutput {
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
export const AFDEndpointsCreateOutput =
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
  }) as unknown as Schema.Codec<AFDEndpointsCreateOutput>;

// The operation
/**
 * Creates a new AzureFrontDoor endpoint with the specified endpoint name under the specified subscription, resource group and profile.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 * @param endpointName - Name of the endpoint under the profile which is unique globally.
 */
export const AFDEndpointsCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: AFDEndpointsCreateInput,
  outputSchema: AFDEndpointsCreateOutput,
}));
// Input Schema
export interface AFDEndpointsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  endpointName: string;
}
export const AFDEndpointsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
    endpointName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/afdEndpoints/{endpointName}",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<AFDEndpointsDeleteInput>;

// Output Schema
export type AFDEndpointsDeleteOutput = void;
export const AFDEndpointsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<AFDEndpointsDeleteOutput>;

// The operation
/**
 * Deletes an existing AzureFrontDoor endpoint with the specified endpoint name under the specified subscription, resource group and profile.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 * @param endpointName - Name of the endpoint under the profile which is unique globally.
 */
export const AFDEndpointsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: AFDEndpointsDeleteInput,
  outputSchema: AFDEndpointsDeleteOutput,
}));
// Input Schema
export interface AFDEndpointsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  endpointName: string;
}
export const AFDEndpointsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  profileName: Schema.String.pipe(T.PathParam()),
  endpointName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/afdEndpoints/{endpointName}",
    apiVersion: "2025-12-01",
  }),
) as unknown as Schema.Codec<AFDEndpointsGetInput>;

// Output Schema
export interface AFDEndpointsGetOutput {
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
export const AFDEndpointsGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<AFDEndpointsGetOutput>;

// The operation
/**
 * Gets an existing AzureFrontDoor endpoint with the specified endpoint name under the specified subscription, resource group and profile.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 * @param endpointName - Name of the endpoint under the profile which is unique globally.
 */
export const AFDEndpointsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: AFDEndpointsGetInput,
  outputSchema: AFDEndpointsGetOutput,
}));
// Input Schema
export interface AFDEndpointsListByProfileInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
}
export const AFDEndpointsListByProfileInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/afdEndpoints",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<AFDEndpointsListByProfileInput>;

// Output Schema
export interface AFDEndpointsListByProfileOutput {
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
export const AFDEndpointsListByProfileOutput =
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
  }) as unknown as Schema.Codec<AFDEndpointsListByProfileOutput>;

// The operation
/**
 * Lists existing AzureFrontDoor endpoints.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 */
export const AFDEndpointsListByProfile = /*@__PURE__*/ API.make(() => ({
  inputSchema: AFDEndpointsListByProfileInput,
  outputSchema: AFDEndpointsListByProfileOutput,
}));
// Input Schema
export interface AFDEndpointsListResourceUsageInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  endpointName: string;
}
export const AFDEndpointsListResourceUsageInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
    endpointName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/afdEndpoints/{endpointName}/usages",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<AFDEndpointsListResourceUsageInput>;

// Output Schema
export interface AFDEndpointsListResourceUsageOutput {
  value: {
    id?: string;
    unit: "Count";
    currentValue: number;
    limit: number;
    name: { value?: string; localizedValue?: string };
  }[];
  nextLink?: string;
}
export const AFDEndpointsListResourceUsageOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        unit: Schema.Literals(["Count"]),
        currentValue: Schema.Number,
        limit: Schema.Number,
        name: Schema.Struct({
          value: Schema.optional(Schema.String),
          localizedValue: Schema.optional(Schema.String),
        }),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AFDEndpointsListResourceUsageOutput>;

// The operation
/**
 * Checks the quota and actual usage of endpoints under the given Azure Front Door profile.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 * @param endpointName - Name of the endpoint under the profile which is unique globally.
 */
export const AFDEndpointsListResourceUsage =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AFDEndpointsListResourceUsageInput,
    outputSchema: AFDEndpointsListResourceUsageOutput,
  }));
// Input Schema
export interface AFDEndpointsPurgeContentInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  endpointName: string;
  contentPaths: string[];
  domains?: string[];
}
export const AFDEndpointsPurgeContentInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
    endpointName: Schema.String.pipe(T.PathParam()),
    contentPaths: Schema.Array(Schema.String),
    domains: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/afdEndpoints/{endpointName}/purge",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<AFDEndpointsPurgeContentInput>;

// Output Schema
export type AFDEndpointsPurgeContentOutput = void;
export const AFDEndpointsPurgeContentOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<AFDEndpointsPurgeContentOutput>;

// The operation
/**
 * Removes a content from AzureFrontDoor.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 * @param endpointName - Name of the endpoint under the profile which is unique globally.
 */
export const AFDEndpointsPurgeContent = /*@__PURE__*/ API.make(() => ({
  inputSchema: AFDEndpointsPurgeContentInput,
  outputSchema: AFDEndpointsPurgeContentOutput,
}));
// Input Schema
export interface AFDEndpointsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  endpointName: string;
  tags?: Record<string, string>;
  properties?: { profileName?: string; enabledState?: "Enabled" | "Disabled" };
}
export const AFDEndpointsUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
    endpointName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(
      Schema.Struct({
        profileName: Schema.optional(Schema.String),
        enabledState: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/afdEndpoints/{endpointName}",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<AFDEndpointsUpdateInput>;

// Output Schema
export interface AFDEndpointsUpdateOutput {
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
export const AFDEndpointsUpdateOutput =
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
  }) as unknown as Schema.Codec<AFDEndpointsUpdateOutput>;

// The operation
/**
 * Updates an existing AzureFrontDoor endpoint with the specified endpoint name under the specified subscription, resource group and profile. Only tags can be updated after creating an endpoint. To update origins, use the Update Origin operation. To update origin groups, use the Update Origin group operation. To update domains, use the Update Custom Domain operation.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 * @param endpointName - Name of the endpoint under the profile which is unique globally.
 */
export const AFDEndpointsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: AFDEndpointsUpdateInput,
  outputSchema: AFDEndpointsUpdateOutput,
}));
// Input Schema
export interface AFDEndpointsValidateCustomDomainInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  endpointName: string;
  hostName: string;
}
export const AFDEndpointsValidateCustomDomainInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
    endpointName: Schema.String.pipe(T.PathParam()),
    hostName: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/afdEndpoints/{endpointName}/validateCustomDomain",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<AFDEndpointsValidateCustomDomainInput>;

// Output Schema
export interface AFDEndpointsValidateCustomDomainOutput {
  customDomainValidated?: boolean;
  reason?: string;
  message?: string;
}
export const AFDEndpointsValidateCustomDomainOutput =
  /*@__PURE__*/ Schema.Struct({
    customDomainValidated: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AFDEndpointsValidateCustomDomainOutput>;

// The operation
/**
 * Validates the custom domain mapping to ensure it maps to the correct Azure Front Door endpoint in DNS.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 * @param endpointName - Name of the endpoint under the profile which is unique globally.
 */
export const AFDEndpointsValidateCustomDomain =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AFDEndpointsValidateCustomDomainInput,
    outputSchema: AFDEndpointsValidateCustomDomainOutput,
  }));
// Input Schema
export interface AFDOriginGroupsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  originGroupName: string;
  properties?: {
    profileName?: string;
    loadBalancingSettings?: {
      sampleSize?: number;
      successfulSamplesRequired?: number;
      additionalLatencyInMilliseconds?: number;
    };
    healthProbeSettings?: {
      probePath?: string;
      probeRequestType?: "NotSet" | "GET" | "HEAD";
      probeProtocol?: "NotSet" | "Http" | "Https";
      probeIntervalInSeconds?: number;
    };
    trafficRestorationTimeToHealedOrNewEndpointsInMinutes?: number;
    sessionAffinityState?: "Enabled" | "Disabled";
    authentication?: {
      type?: "SystemAssignedIdentity" | "UserAssignedIdentity";
      userAssignedIdentity?: { id?: string };
      scope?: string;
    };
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Updating"
      | "Deleting"
      | "Creating";
    deploymentStatus?: "NotStarted" | "InProgress" | "Succeeded" | "Failed";
  };
}
export const AFDOriginGroupsCreateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
    originGroupName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        profileName: Schema.optional(Schema.String),
        loadBalancingSettings: Schema.optional(
          Schema.Struct({
            sampleSize: Schema.optional(Schema.Number),
            successfulSamplesRequired: Schema.optional(Schema.Number),
            additionalLatencyInMilliseconds: Schema.optional(Schema.Number),
          }),
        ),
        healthProbeSettings: Schema.optional(
          Schema.Struct({
            probePath: Schema.optional(Schema.String),
            probeRequestType: Schema.optional(
              Schema.Literals(["NotSet", "GET", "HEAD"]),
            ),
            probeProtocol: Schema.optional(
              Schema.Literals(["NotSet", "Http", "Https"]),
            ),
            probeIntervalInSeconds: Schema.optional(Schema.Number),
          }),
        ),
        trafficRestorationTimeToHealedOrNewEndpointsInMinutes: Schema.optional(
          Schema.Number,
        ),
        sessionAffinityState: Schema.optional(
          Schema.Literals(["Enabled", "Disabled"]),
        ),
        authentication: Schema.optional(
          Schema.Struct({
            type: Schema.optional(
              Schema.Literals([
                "SystemAssignedIdentity",
                "UserAssignedIdentity",
              ]),
            ),
            userAssignedIdentity: Schema.optional(
              Schema.Struct({
                id: Schema.optional(Schema.String),
              }),
            ),
            scope: Schema.optional(Schema.String),
          }),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Updating",
            "Deleting",
            "Creating",
          ]),
        ),
        deploymentStatus: Schema.optional(
          Schema.Literals(["NotStarted", "InProgress", "Succeeded", "Failed"]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/originGroups/{originGroupName}",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<AFDOriginGroupsCreateInput>;

// Output Schema
export interface AFDOriginGroupsCreateOutput {
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
export const AFDOriginGroupsCreateOutput =
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
  }) as unknown as Schema.Codec<AFDOriginGroupsCreateOutput>;

// The operation
/**
 * Creates a new origin group within the specified profile.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 * @param originGroupName - Name of the origin group which is unique within the endpoint.
 */
export const AFDOriginGroupsCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: AFDOriginGroupsCreateInput,
  outputSchema: AFDOriginGroupsCreateOutput,
}));
// Input Schema
export interface AFDOriginGroupsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  originGroupName: string;
}
export const AFDOriginGroupsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
    originGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/originGroups/{originGroupName}",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<AFDOriginGroupsDeleteInput>;

// Output Schema
export type AFDOriginGroupsDeleteOutput = void;
export const AFDOriginGroupsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<AFDOriginGroupsDeleteOutput>;

// The operation
/**
 * Deletes an existing origin group within a profile.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 * @param originGroupName - Name of the origin group which is unique within the endpoint.
 */
export const AFDOriginGroupsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: AFDOriginGroupsDeleteInput,
  outputSchema: AFDOriginGroupsDeleteOutput,
}));
// Input Schema
export interface AFDOriginGroupsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  originGroupName: string;
}
export const AFDOriginGroupsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
    originGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/originGroups/{originGroupName}",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<AFDOriginGroupsGetInput>;

// Output Schema
export interface AFDOriginGroupsGetOutput {
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
export const AFDOriginGroupsGetOutput =
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
  }) as unknown as Schema.Codec<AFDOriginGroupsGetOutput>;

// The operation
/**
 * Gets an existing origin group within a profile.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 * @param originGroupName - Name of the origin group which is unique within the endpoint.
 */
export const AFDOriginGroupsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: AFDOriginGroupsGetInput,
  outputSchema: AFDOriginGroupsGetOutput,
}));
// Input Schema
export interface AFDOriginGroupsListByProfileInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
}
export const AFDOriginGroupsListByProfileInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/originGroups",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<AFDOriginGroupsListByProfileInput>;

// Output Schema
export interface AFDOriginGroupsListByProfileOutput {
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
export const AFDOriginGroupsListByProfileOutput =
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
  }) as unknown as Schema.Codec<AFDOriginGroupsListByProfileOutput>;

// The operation
/**
 * Lists all of the existing origin groups within a profile.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 */
export const AFDOriginGroupsListByProfile =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AFDOriginGroupsListByProfileInput,
    outputSchema: AFDOriginGroupsListByProfileOutput,
  }));
// Input Schema
export interface AFDOriginGroupsListResourceUsageInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  originGroupName: string;
}
export const AFDOriginGroupsListResourceUsageInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
    originGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/originGroups/{originGroupName}/usages",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<AFDOriginGroupsListResourceUsageInput>;

// Output Schema
export interface AFDOriginGroupsListResourceUsageOutput {
  value: {
    id?: string;
    unit: "Count";
    currentValue: number;
    limit: number;
    name: { value?: string; localizedValue?: string };
  }[];
  nextLink?: string;
}
export const AFDOriginGroupsListResourceUsageOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        unit: Schema.Literals(["Count"]),
        currentValue: Schema.Number,
        limit: Schema.Number,
        name: Schema.Struct({
          value: Schema.optional(Schema.String),
          localizedValue: Schema.optional(Schema.String),
        }),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AFDOriginGroupsListResourceUsageOutput>;

// The operation
/**
 * Checks the quota and actual usage of endpoints under the given Azure Front Door profile.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 * @param originGroupName - Name of the origin group which is unique within the endpoint.
 */
export const AFDOriginGroupsListResourceUsage =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AFDOriginGroupsListResourceUsageInput,
    outputSchema: AFDOriginGroupsListResourceUsageOutput,
  }));
// Input Schema
export interface AFDOriginGroupsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  originGroupName: string;
  properties?: {
    profileName?: string;
    loadBalancingSettings?: {
      sampleSize?: number;
      successfulSamplesRequired?: number;
      additionalLatencyInMilliseconds?: number;
    };
    healthProbeSettings?: {
      probePath?: string;
      probeRequestType?: "NotSet" | "GET" | "HEAD";
      probeProtocol?: "NotSet" | "Http" | "Https";
      probeIntervalInSeconds?: number;
    };
    trafficRestorationTimeToHealedOrNewEndpointsInMinutes?: number;
    sessionAffinityState?: "Enabled" | "Disabled";
    authentication?: {
      type?: "SystemAssignedIdentity" | "UserAssignedIdentity";
      userAssignedIdentity?: { id?: string };
      scope?: string;
    };
  };
}
export const AFDOriginGroupsUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
    originGroupName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        profileName: Schema.optional(Schema.String),
        loadBalancingSettings: Schema.optional(
          Schema.Struct({
            sampleSize: Schema.optional(Schema.Number),
            successfulSamplesRequired: Schema.optional(Schema.Number),
            additionalLatencyInMilliseconds: Schema.optional(Schema.Number),
          }),
        ),
        healthProbeSettings: Schema.optional(
          Schema.Struct({
            probePath: Schema.optional(Schema.String),
            probeRequestType: Schema.optional(
              Schema.Literals(["NotSet", "GET", "HEAD"]),
            ),
            probeProtocol: Schema.optional(
              Schema.Literals(["NotSet", "Http", "Https"]),
            ),
            probeIntervalInSeconds: Schema.optional(Schema.Number),
          }),
        ),
        trafficRestorationTimeToHealedOrNewEndpointsInMinutes: Schema.optional(
          Schema.Number,
        ),
        sessionAffinityState: Schema.optional(
          Schema.Literals(["Enabled", "Disabled"]),
        ),
        authentication: Schema.optional(
          Schema.Struct({
            type: Schema.optional(
              Schema.Literals([
                "SystemAssignedIdentity",
                "UserAssignedIdentity",
              ]),
            ),
            userAssignedIdentity: Schema.optional(
              Schema.Struct({
                id: Schema.optional(Schema.String),
              }),
            ),
            scope: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/originGroups/{originGroupName}",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<AFDOriginGroupsUpdateInput>;

// Output Schema
export interface AFDOriginGroupsUpdateOutput {
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
export const AFDOriginGroupsUpdateOutput =
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
  }) as unknown as Schema.Codec<AFDOriginGroupsUpdateOutput>;

// The operation
/**
 * Updates an existing origin group within a profile.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 * @param originGroupName - Name of the origin group which is unique within the endpoint.
 */
export const AFDOriginGroupsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: AFDOriginGroupsUpdateInput,
  outputSchema: AFDOriginGroupsUpdateOutput,
}));
// Input Schema
export interface AFDOriginsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  originGroupName: string;
  originName: string;
  properties?: {
    originGroupName?: string;
    azureOrigin?: { id?: string };
    hostName?: string;
    httpPort?: number;
    httpsPort?: number;
    originHostHeader?: string;
    priority?: number;
    weight?: number;
    sharedPrivateLinkResource?: {
      privateLink?: { id?: string };
      privateLinkLocation?: string;
      groupId?: string;
      requestMessage?: string;
      status?: "Pending" | "Approved" | "Rejected" | "Disconnected" | "Timeout";
    };
    enabledState?: "Enabled" | "Disabled";
    enforceCertificateNameCheck?: boolean;
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Updating"
      | "Deleting"
      | "Creating";
    deploymentStatus?: "NotStarted" | "InProgress" | "Succeeded" | "Failed";
  };
}
export const AFDOriginsCreateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  profileName: Schema.String.pipe(T.PathParam()),
  originGroupName: Schema.String.pipe(T.PathParam()),
  originName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      originGroupName: Schema.optional(Schema.String),
      azureOrigin: Schema.optional(
        Schema.Struct({
          id: Schema.optional(Schema.String),
        }),
      ),
      hostName: Schema.optional(Schema.String),
      httpPort: Schema.optional(Schema.Number),
      httpsPort: Schema.optional(Schema.Number),
      originHostHeader: Schema.optional(Schema.String),
      priority: Schema.optional(Schema.Number),
      weight: Schema.optional(Schema.Number),
      sharedPrivateLinkResource: Schema.optional(
        Schema.Struct({
          privateLink: Schema.optional(
            Schema.Struct({
              id: Schema.optional(Schema.String),
            }),
          ),
          privateLinkLocation: Schema.optional(Schema.String),
          groupId: Schema.optional(Schema.String),
          requestMessage: Schema.optional(Schema.String),
          status: Schema.optional(
            Schema.Literals([
              "Pending",
              "Approved",
              "Rejected",
              "Disconnected",
              "Timeout",
            ]),
          ),
        }),
      ),
      enabledState: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
      enforceCertificateNameCheck: Schema.optional(Schema.Boolean),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Succeeded",
          "Failed",
          "Updating",
          "Deleting",
          "Creating",
        ]),
      ),
      deploymentStatus: Schema.optional(
        Schema.Literals(["NotStarted", "InProgress", "Succeeded", "Failed"]),
      ),
    }),
  ),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/originGroups/{originGroupName}/origins/{originName}",
    apiVersion: "2025-12-01",
  }),
) as unknown as Schema.Codec<AFDOriginsCreateInput>;

// Output Schema
export interface AFDOriginsCreateOutput {
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
export const AFDOriginsCreateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<AFDOriginsCreateOutput>;

// The operation
/**
 * Creates a new origin within the specified origin group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 * @param originGroupName - Name of the origin group which is unique within the endpoint.
 * @param originName - Name of the origin which is unique within the profile.
 */
export const AFDOriginsCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: AFDOriginsCreateInput,
  outputSchema: AFDOriginsCreateOutput,
}));
// Input Schema
export interface AFDOriginsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  originGroupName: string;
  originName: string;
}
export const AFDOriginsDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  profileName: Schema.String.pipe(T.PathParam()),
  originGroupName: Schema.String.pipe(T.PathParam()),
  originName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/originGroups/{originGroupName}/origins/{originName}",
    apiVersion: "2025-12-01",
  }),
) as unknown as Schema.Codec<AFDOriginsDeleteInput>;

// Output Schema
export type AFDOriginsDeleteOutput = void;
export const AFDOriginsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<AFDOriginsDeleteOutput>;

// The operation
/**
 * Deletes an existing origin within an origin group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 * @param originGroupName - Name of the origin group which is unique within the endpoint.
 * @param originName - Name of the origin which is unique within the profile.
 */
export const AFDOriginsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: AFDOriginsDeleteInput,
  outputSchema: AFDOriginsDeleteOutput,
}));
// Input Schema
export interface AFDOriginsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  originGroupName: string;
  originName: string;
}
export const AFDOriginsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  profileName: Schema.String.pipe(T.PathParam()),
  originGroupName: Schema.String.pipe(T.PathParam()),
  originName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/originGroups/{originGroupName}/origins/{originName}",
    apiVersion: "2025-12-01",
  }),
) as unknown as Schema.Codec<AFDOriginsGetInput>;

// Output Schema
export interface AFDOriginsGetOutput {
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
export const AFDOriginsGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<AFDOriginsGetOutput>;

// The operation
/**
 * Gets an existing origin within an origin group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 * @param originGroupName - Name of the origin group which is unique within the endpoint.
 * @param originName - Name of the origin which is unique within the profile.
 */
export const AFDOriginsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: AFDOriginsGetInput,
  outputSchema: AFDOriginsGetOutput,
}));
// Input Schema
export interface AFDOriginsListByOriginGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  originGroupName: string;
}
export const AFDOriginsListByOriginGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
    originGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/originGroups/{originGroupName}/origins",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<AFDOriginsListByOriginGroupInput>;

// Output Schema
export interface AFDOriginsListByOriginGroupOutput {
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
export const AFDOriginsListByOriginGroupOutput =
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
  }) as unknown as Schema.Codec<AFDOriginsListByOriginGroupOutput>;

// The operation
/**
 * Lists all of the existing origins within an origin group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 * @param originGroupName - Name of the origin group which is unique within the endpoint.
 */
export const AFDOriginsListByOriginGroup = /*@__PURE__*/ API.make(() => ({
  inputSchema: AFDOriginsListByOriginGroupInput,
  outputSchema: AFDOriginsListByOriginGroupOutput,
}));
// Input Schema
export interface AFDOriginsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  originGroupName: string;
  originName: string;
  properties?: {
    originGroupName?: string;
    azureOrigin?: { id?: string };
    hostName?: string;
    httpPort?: number;
    httpsPort?: number;
    originHostHeader?: string;
    priority?: number;
    weight?: number;
    sharedPrivateLinkResource?: {
      privateLink?: { id?: string };
      privateLinkLocation?: string;
      groupId?: string;
      requestMessage?: string;
      status?: "Pending" | "Approved" | "Rejected" | "Disconnected" | "Timeout";
    };
    enabledState?: "Enabled" | "Disabled";
    enforceCertificateNameCheck?: boolean;
  };
}
export const AFDOriginsUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  profileName: Schema.String.pipe(T.PathParam()),
  originGroupName: Schema.String.pipe(T.PathParam()),
  originName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      originGroupName: Schema.optional(Schema.String),
      azureOrigin: Schema.optional(
        Schema.Struct({
          id: Schema.optional(Schema.String),
        }),
      ),
      hostName: Schema.optional(Schema.String),
      httpPort: Schema.optional(Schema.Number),
      httpsPort: Schema.optional(Schema.Number),
      originHostHeader: Schema.optional(Schema.String),
      priority: Schema.optional(Schema.Number),
      weight: Schema.optional(Schema.Number),
      sharedPrivateLinkResource: Schema.optional(
        Schema.Struct({
          privateLink: Schema.optional(
            Schema.Struct({
              id: Schema.optional(Schema.String),
            }),
          ),
          privateLinkLocation: Schema.optional(Schema.String),
          groupId: Schema.optional(Schema.String),
          requestMessage: Schema.optional(Schema.String),
          status: Schema.optional(
            Schema.Literals([
              "Pending",
              "Approved",
              "Rejected",
              "Disconnected",
              "Timeout",
            ]),
          ),
        }),
      ),
      enabledState: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
      enforceCertificateNameCheck: Schema.optional(Schema.Boolean),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/originGroups/{originGroupName}/origins/{originName}",
    apiVersion: "2025-12-01",
  }),
) as unknown as Schema.Codec<AFDOriginsUpdateInput>;

// Output Schema
export interface AFDOriginsUpdateOutput {
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
export const AFDOriginsUpdateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<AFDOriginsUpdateOutput>;

// The operation
/**
 * Updates an existing origin within an origin group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 * @param originGroupName - Name of the origin group which is unique within the endpoint.
 * @param originName - Name of the origin which is unique within the profile.
 */
export const AFDOriginsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: AFDOriginsUpdateInput,
  outputSchema: AFDOriginsUpdateOutput,
}));
// Input Schema
export interface AFDProfilesCheckEndpointNameAvailabilityInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  name: string;
  type:
    | "Microsoft.Cdn/Profiles/Endpoints"
    | "Microsoft.Cdn/Profiles/AfdEndpoints";
  autoGeneratedDomainNameLabelScope?:
    | "TenantReuse"
    | "SubscriptionReuse"
    | "ResourceGroupReuse"
    | "NoReuse";
}
export const AFDProfilesCheckEndpointNameAvailabilityInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
    type: Schema.Literals([
      "Microsoft.Cdn/Profiles/Endpoints",
      "Microsoft.Cdn/Profiles/AfdEndpoints",
    ]),
    autoGeneratedDomainNameLabelScope: Schema.optional(
      Schema.Literals([
        "TenantReuse",
        "SubscriptionReuse",
        "ResourceGroupReuse",
        "NoReuse",
      ]),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/checkEndpointNameAvailability",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<AFDProfilesCheckEndpointNameAvailabilityInput>;

// Output Schema
export interface AFDProfilesCheckEndpointNameAvailabilityOutput {
  nameAvailable?: boolean;
  availableHostname?: string;
  reason?: string;
  message?: string;
}
export const AFDProfilesCheckEndpointNameAvailabilityOutput =
  /*@__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    availableHostname: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AFDProfilesCheckEndpointNameAvailabilityOutput>;

// The operation
/**
 * Check the availability of an afdx endpoint name, and return the globally unique endpoint host name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 */
export const AFDProfilesCheckEndpointNameAvailability =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AFDProfilesCheckEndpointNameAvailabilityInput,
    outputSchema: AFDProfilesCheckEndpointNameAvailabilityOutput,
  }));
// Input Schema
export interface AFDProfilesCheckHostNameAvailabilityInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  hostName: string;
}
export const AFDProfilesCheckHostNameAvailabilityInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
    hostName: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/checkHostNameAvailability",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<AFDProfilesCheckHostNameAvailabilityInput>;

// Output Schema
export interface AFDProfilesCheckHostNameAvailabilityOutput {
  nameAvailable?: boolean;
  reason?: string;
  message?: string;
}
export const AFDProfilesCheckHostNameAvailabilityOutput =
  /*@__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AFDProfilesCheckHostNameAvailabilityOutput>;

// The operation
/**
 * Validates the custom domain mapping to ensure it maps to the correct Azure Front Door endpoint in DNS.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 */
export const AFDProfilesCheckHostNameAvailability =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AFDProfilesCheckHostNameAvailabilityInput,
    outputSchema: AFDProfilesCheckHostNameAvailabilityOutput,
  }));
// Input Schema
export interface AFDProfilesListResourceUsageInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
}
export const AFDProfilesListResourceUsageInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/usages",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<AFDProfilesListResourceUsageInput>;

// Output Schema
export interface AFDProfilesListResourceUsageOutput {
  value: {
    id?: string;
    unit: "Count";
    currentValue: number;
    limit: number;
    name: { value?: string; localizedValue?: string };
  }[];
  nextLink?: string;
}
export const AFDProfilesListResourceUsageOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        unit: Schema.Literals(["Count"]),
        currentValue: Schema.Number,
        limit: Schema.Number,
        name: Schema.Struct({
          value: Schema.optional(Schema.String),
          localizedValue: Schema.optional(Schema.String),
        }),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AFDProfilesListResourceUsageOutput>;

// The operation
/**
 * Checks the quota and actual usage of endpoints under the given Azure Front Door profile.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 */
export const AFDProfilesListResourceUsage =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AFDProfilesListResourceUsageInput,
    outputSchema: AFDProfilesListResourceUsageOutput,
  }));
// Input Schema
export interface AFDProfilesUpgradeInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  wafMappingList: {
    securityPolicyName: string;
    changeToWafPolicy: { id?: string };
  }[];
}
export const AFDProfilesUpgradeInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
    wafMappingList: Schema.Array(
      Schema.Struct({
        securityPolicyName: Schema.String,
        changeToWafPolicy: Schema.Struct({
          id: Schema.optional(Schema.String),
        }),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/upgrade",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<AFDProfilesUpgradeInput>;

// Output Schema
export interface AFDProfilesUpgradeOutput {
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
export const AFDProfilesUpgradeOutput =
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
  }) as unknown as Schema.Codec<AFDProfilesUpgradeOutput>;

// The operation
/**
 * Upgrade a profile from Standard_AzureFrontDoor to Premium_AzureFrontDoor.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 */
export const AFDProfilesUpgrade = /*@__PURE__*/ API.make(() => ({
  inputSchema: AFDProfilesUpgradeInput,
  outputSchema: AFDProfilesUpgradeOutput,
}));
// Input Schema
export interface AFDProfilesValidateSecretInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  secretType:
    | "UrlSigningKey"
    | "CustomerCertificate"
    | "ManagedCertificate"
    | "AzureFirstPartyManagedCertificate";
  secretSource: { id?: string };
  secretVersion?: string;
}
export const AFDProfilesValidateSecretInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
    secretType: Schema.Literals([
      "UrlSigningKey",
      "CustomerCertificate",
      "ManagedCertificate",
      "AzureFirstPartyManagedCertificate",
    ]),
    secretSource: Schema.Struct({
      id: Schema.optional(Schema.String),
    }),
    secretVersion: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/validateSecret",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<AFDProfilesValidateSecretInput>;

// Output Schema
export interface AFDProfilesValidateSecretOutput {
  status?: "Valid" | "Invalid" | "AccessDenied" | "CertificateExpired";
  message?: string;
}
export const AFDProfilesValidateSecretOutput =
  /*@__PURE__*/ Schema.Struct({
    status: Schema.optional(
      Schema.Literals([
        "Valid",
        "Invalid",
        "AccessDenied",
        "CertificateExpired",
      ]),
    ),
    message: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AFDProfilesValidateSecretOutput>;

// The operation
/**
 * Validate a Secret in the profile.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 */
export const AFDProfilesValidateSecret = /*@__PURE__*/ API.make(() => ({
  inputSchema: AFDProfilesValidateSecretInput,
  outputSchema: AFDProfilesValidateSecretOutput,
}));
// Input Schema
export interface CheckEndpointNameAvailabilityInput {
  subscriptionId: string;
  resourceGroupName: string;
  name: string;
  type:
    | "Microsoft.Cdn/Profiles/Endpoints"
    | "Microsoft.Cdn/Profiles/AfdEndpoints";
  autoGeneratedDomainNameLabelScope?:
    | "TenantReuse"
    | "SubscriptionReuse"
    | "ResourceGroupReuse"
    | "NoReuse";
}
export const CheckEndpointNameAvailabilityInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
    type: Schema.Literals([
      "Microsoft.Cdn/Profiles/Endpoints",
      "Microsoft.Cdn/Profiles/AfdEndpoints",
    ]),
    autoGeneratedDomainNameLabelScope: Schema.optional(
      Schema.Literals([
        "TenantReuse",
        "SubscriptionReuse",
        "ResourceGroupReuse",
        "NoReuse",
      ]),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/checkEndpointNameAvailability",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<CheckEndpointNameAvailabilityInput>;

// Output Schema
export interface CheckEndpointNameAvailabilityOutput {
  nameAvailable?: boolean;
  availableHostname?: string;
  reason?: string;
  message?: string;
}
export const CheckEndpointNameAvailabilityOutput =
  /*@__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    availableHostname: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<CheckEndpointNameAvailabilityOutput>;

// The operation
/**
 * Check the availability of a resource name. This is needed for resources where name is globally unique, such as a afdx endpoint.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const CheckEndpointNameAvailability =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CheckEndpointNameAvailabilityInput,
    outputSchema: CheckEndpointNameAvailabilityOutput,
  }));
// Input Schema
export interface CheckNameAvailabilityInput {
  name: string;
  type:
    | "Microsoft.Cdn/Profiles/Endpoints"
    | "Microsoft.Cdn/Profiles/AfdEndpoints";
}
export const CheckNameAvailabilityInput =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String,
    type: Schema.Literals([
      "Microsoft.Cdn/Profiles/Endpoints",
      "Microsoft.Cdn/Profiles/AfdEndpoints",
    ]),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Cdn/checkNameAvailability",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<CheckNameAvailabilityInput>;

// Output Schema
export interface CheckNameAvailabilityOutput {
  nameAvailable?: boolean;
  reason?: string;
  message?: string;
}
export const CheckNameAvailabilityOutput =
  /*@__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<CheckNameAvailabilityOutput>;

// The operation
/**
 * Check the availability of a resource name. This is needed for resources where name is globally unique, such as a CDN endpoint.
 *
 * @param api-version - The API version to use for this operation.
 */
export const CheckNameAvailability = /*@__PURE__*/ API.make(() => ({
  inputSchema: CheckNameAvailabilityInput,
  outputSchema: CheckNameAvailabilityOutput,
}));
// Input Schema
export interface CheckNameAvailabilityWithSubscriptionInput {
  subscriptionId: string;
  name: string;
  type:
    | "Microsoft.Cdn/Profiles/Endpoints"
    | "Microsoft.Cdn/Profiles/AfdEndpoints";
}
export const CheckNameAvailabilityWithSubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
    type: Schema.Literals([
      "Microsoft.Cdn/Profiles/Endpoints",
      "Microsoft.Cdn/Profiles/AfdEndpoints",
    ]),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Cdn/checkNameAvailability",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<CheckNameAvailabilityWithSubscriptionInput>;

// Output Schema
export interface CheckNameAvailabilityWithSubscriptionOutput {
  nameAvailable?: boolean;
  reason?: string;
  message?: string;
}
export const CheckNameAvailabilityWithSubscriptionOutput =
  /*@__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<CheckNameAvailabilityWithSubscriptionOutput>;

// The operation
/**
 * Check the availability of a resource name. This is needed for resources where name is globally unique, such as a CDN endpoint.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const CheckNameAvailabilityWithSubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CheckNameAvailabilityWithSubscriptionInput,
    outputSchema: CheckNameAvailabilityWithSubscriptionOutput,
  }));
// Input Schema
export interface CustomDomainsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  endpointName: string;
  customDomainName: string;
  properties?: { hostName: string };
}
export const CustomDomainsCreateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
    endpointName: Schema.String.pipe(T.PathParam()),
    customDomainName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        hostName: Schema.String,
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}/customDomains/{customDomainName}",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<CustomDomainsCreateInput>;

// Output Schema
export interface CustomDomainsCreateOutput {
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
export const CustomDomainsCreateOutput =
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
  }) as unknown as Schema.Codec<CustomDomainsCreateOutput>;

// The operation
/**
 * Creates a new custom domain within an endpoint.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 * @param endpointName - Name of the endpoint under the profile which is unique globally.
 * @param customDomainName - Name of the custom domain within an endpoint.
 */
export const CustomDomainsCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: CustomDomainsCreateInput,
  outputSchema: CustomDomainsCreateOutput,
}));
// Input Schema
export interface CustomDomainsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  endpointName: string;
  customDomainName: string;
}
export const CustomDomainsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
    endpointName: Schema.String.pipe(T.PathParam()),
    customDomainName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}/customDomains/{customDomainName}",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<CustomDomainsDeleteInput>;

// Output Schema
export type CustomDomainsDeleteOutput = void;
export const CustomDomainsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<CustomDomainsDeleteOutput>;

// The operation
/**
 * Deletes an existing custom domain within an endpoint.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 * @param endpointName - Name of the endpoint under the profile which is unique globally.
 * @param customDomainName - Name of the custom domain within an endpoint.
 */
export const CustomDomainsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: CustomDomainsDeleteInput,
  outputSchema: CustomDomainsDeleteOutput,
}));
// Input Schema
export interface CustomDomainsDisableCustomHttpsInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  endpointName: string;
  customDomainName: string;
}
export const CustomDomainsDisableCustomHttpsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
    endpointName: Schema.String.pipe(T.PathParam()),
    customDomainName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}/customDomains/{customDomainName}/disableCustomHttps",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<CustomDomainsDisableCustomHttpsInput>;

// Output Schema
export interface CustomDomainsDisableCustomHttpsOutput {
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
export const CustomDomainsDisableCustomHttpsOutput =
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
  }) as unknown as Schema.Codec<CustomDomainsDisableCustomHttpsOutput>;

// The operation
/**
 * Disable https delivery of the custom domain.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 * @param endpointName - Name of the endpoint under the profile which is unique globally.
 * @param customDomainName - Name of the custom domain within an endpoint.
 */
export const CustomDomainsDisableCustomHttps =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CustomDomainsDisableCustomHttpsInput,
    outputSchema: CustomDomainsDisableCustomHttpsOutput,
  }));
// Input Schema
export interface CustomDomainsEnableCustomHttpsInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  endpointName: string;
  customDomainName: string;
  certificateSource: "AzureKeyVault" | "Cdn";
  protocolType: "ServerNameIndication" | "IPBased";
  minimumTlsVersion?: "None" | "TLS10" | "TLS12";
}
export const CustomDomainsEnableCustomHttpsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
    endpointName: Schema.String.pipe(T.PathParam()),
    customDomainName: Schema.String.pipe(T.PathParam()),
    certificateSource: Schema.Literals(["AzureKeyVault", "Cdn"]),
    protocolType: Schema.Literals(["ServerNameIndication", "IPBased"]),
    minimumTlsVersion: Schema.optional(
      Schema.Literals(["None", "TLS10", "TLS12"]),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}/customDomains/{customDomainName}/enableCustomHttps",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<CustomDomainsEnableCustomHttpsInput>;

// Output Schema
export interface CustomDomainsEnableCustomHttpsOutput {
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
export const CustomDomainsEnableCustomHttpsOutput =
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
  }) as unknown as Schema.Codec<CustomDomainsEnableCustomHttpsOutput>;

// The operation
/**
 * Enable https delivery of the custom domain.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 * @param endpointName - Name of the endpoint under the profile which is unique globally.
 * @param customDomainName - Name of the custom domain within an endpoint.
 */
export const CustomDomainsEnableCustomHttps =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CustomDomainsEnableCustomHttpsInput,
    outputSchema: CustomDomainsEnableCustomHttpsOutput,
  }));
// Input Schema
export interface CustomDomainsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  endpointName: string;
  customDomainName: string;
}
export const CustomDomainsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  profileName: Schema.String.pipe(T.PathParam()),
  endpointName: Schema.String.pipe(T.PathParam()),
  customDomainName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}/customDomains/{customDomainName}",
    apiVersion: "2025-12-01",
  }),
) as unknown as Schema.Codec<CustomDomainsGetInput>;

// Output Schema
export interface CustomDomainsGetOutput {
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
export const CustomDomainsGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<CustomDomainsGetOutput>;

// The operation
/**
 * Gets an existing custom domain within an endpoint.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 * @param endpointName - Name of the endpoint under the profile which is unique globally.
 * @param customDomainName - Name of the custom domain within an endpoint.
 */
export const CustomDomainsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: CustomDomainsGetInput,
  outputSchema: CustomDomainsGetOutput,
}));
// Input Schema
export interface CustomDomainsListByEndpointInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  endpointName: string;
}
export const CustomDomainsListByEndpointInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
    endpointName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}/customDomains",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<CustomDomainsListByEndpointInput>;

// Output Schema
export interface CustomDomainsListByEndpointOutput {
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
export const CustomDomainsListByEndpointOutput =
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
  }) as unknown as Schema.Codec<CustomDomainsListByEndpointOutput>;

// The operation
/**
 * Lists all of the existing custom domains within an endpoint.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 * @param endpointName - Name of the endpoint under the profile which is unique globally.
 */
export const CustomDomainsListByEndpoint = /*@__PURE__*/ API.make(() => ({
  inputSchema: CustomDomainsListByEndpointInput,
  outputSchema: CustomDomainsListByEndpointOutput,
}));
// Input Schema
export interface EdgeNodesListInput {}
export const EdgeNodesListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Cdn/edgenodes",
    apiVersion: "2025-12-01",
  }),
) as unknown as Schema.Codec<EdgeNodesListInput>;

// Output Schema
export interface EdgeNodesListOutput {
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
export const EdgeNodesListOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<EdgeNodesListOutput>;

// The operation
/**
 * Edgenodes are the global Point of Presence (POP) locations used to deliver CDN content to end users.
 *
 * @param api-version - The API version to use for this operation.
 */
export const EdgeNodesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: EdgeNodesListInput,
  outputSchema: EdgeNodesListOutput,
}));
// Input Schema
export interface EndpointsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  endpointName: string;
  properties?: {
    originPath?: string;
    contentTypesToCompress?: string[];
    originHostHeader?: string;
    isCompressionEnabled?: boolean;
    isHttpAllowed?: boolean;
    isHttpsAllowed?: boolean;
    queryStringCachingBehavior?:
      | "IgnoreQueryString"
      | "BypassCaching"
      | "UseQueryString"
      | "NotSet";
    optimizationType?:
      | "GeneralWebDelivery"
      | "GeneralMediaStreaming"
      | "VideoOnDemandMediaStreaming"
      | "LargeFileDownload"
      | "DynamicSiteAcceleration";
    probePath?: string;
    geoFilters?: {
      relativePath: string;
      action: "Block" | "Allow";
      countryCodes: string[];
    }[];
    defaultOriginGroup?: { id?: string };
    urlSigningKeys?: {
      keyId: string;
      keySourceParameters: {
        typeName: "KeyVaultSigningKeyParameters";
        subscriptionId: string;
        resourceGroupName: string;
        vaultName: string;
        secretName: string;
        secretVersion: string;
      };
    }[];
    deliveryPolicy?: {
      description?: string;
      rules: {
        name?: string;
        order: number;
        conditions?: {
          name:
            | "RemoteAddress"
            | "RequestMethod"
            | "QueryString"
            | "PostArgs"
            | "RequestUri"
            | "RequestHeader"
            | "RequestBody"
            | "RequestScheme"
            | "UrlPath"
            | "UrlFileExtension"
            | "UrlFileName"
            | "HttpVersion"
            | "Cookies"
            | "IsDevice"
            | "SocketAddr"
            | "ClientPort"
            | "ServerPort"
            | "HostName"
            | "SslProtocol";
        }[];
        actions: {
          name:
            | "CacheExpiration"
            | "CacheKeyQueryString"
            | "ModifyRequestHeader"
            | "ModifyResponseHeader"
            | "UrlRedirect"
            | "UrlRewrite"
            | "UrlSigning"
            | "OriginGroupOverride"
            | "RouteConfigurationOverride";
        }[];
      }[];
    };
    webApplicationFirewallPolicyLink?: { id?: string };
  };
  tags?: Record<string, string>;
  location: string;
}
export const EndpointsCreateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  profileName: Schema.String.pipe(T.PathParam()),
  endpointName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      originPath: Schema.optional(Schema.String),
      contentTypesToCompress: Schema.optional(Schema.Array(Schema.String)),
      originHostHeader: Schema.optional(Schema.String),
      isCompressionEnabled: Schema.optional(Schema.Boolean),
      isHttpAllowed: Schema.optional(Schema.Boolean),
      isHttpsAllowed: Schema.optional(Schema.Boolean),
      queryStringCachingBehavior: Schema.optional(
        Schema.Literals([
          "IgnoreQueryString",
          "BypassCaching",
          "UseQueryString",
          "NotSet",
        ]),
      ),
      optimizationType: Schema.optional(
        Schema.Literals([
          "GeneralWebDelivery",
          "GeneralMediaStreaming",
          "VideoOnDemandMediaStreaming",
          "LargeFileDownload",
          "DynamicSiteAcceleration",
        ]),
      ),
      probePath: Schema.optional(Schema.String),
      geoFilters: Schema.optional(
        Schema.Array(
          Schema.Struct({
            relativePath: Schema.String,
            action: Schema.Literals(["Block", "Allow"]),
            countryCodes: Schema.Array(Schema.String),
          }),
        ),
      ),
      defaultOriginGroup: Schema.optional(
        Schema.Struct({
          id: Schema.optional(Schema.String),
        }),
      ),
      urlSigningKeys: Schema.optional(
        Schema.Array(
          Schema.Struct({
            keyId: Schema.String,
            keySourceParameters: Schema.Struct({
              typeName: Schema.Literals(["KeyVaultSigningKeyParameters"]),
              subscriptionId: Schema.String,
              resourceGroupName: Schema.String,
              vaultName: Schema.String,
              secretName: Schema.String,
              secretVersion: Schema.String,
            }),
          }),
        ),
      ),
      deliveryPolicy: Schema.optional(
        Schema.Struct({
          description: Schema.optional(Schema.String),
          rules: Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              order: Schema.Number,
              conditions: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    name: Schema.Literals([
                      "RemoteAddress",
                      "RequestMethod",
                      "QueryString",
                      "PostArgs",
                      "RequestUri",
                      "RequestHeader",
                      "RequestBody",
                      "RequestScheme",
                      "UrlPath",
                      "UrlFileExtension",
                      "UrlFileName",
                      "HttpVersion",
                      "Cookies",
                      "IsDevice",
                      "SocketAddr",
                      "ClientPort",
                      "ServerPort",
                      "HostName",
                      "SslProtocol",
                    ]),
                  }),
                ),
              ),
              actions: Schema.Array(
                Schema.Struct({
                  name: Schema.Literals([
                    "CacheExpiration",
                    "CacheKeyQueryString",
                    "ModifyRequestHeader",
                    "ModifyResponseHeader",
                    "UrlRedirect",
                    "UrlRewrite",
                    "UrlSigning",
                    "OriginGroupOverride",
                    "RouteConfigurationOverride",
                  ]),
                }),
              ),
            }),
          ),
        }),
      ),
      webApplicationFirewallPolicyLink: Schema.optional(
        Schema.Struct({
          id: Schema.optional(Schema.String),
        }),
      ),
    }),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.String,
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}",
    apiVersion: "2025-12-01",
  }),
) as unknown as Schema.Codec<EndpointsCreateInput>;

// Output Schema
export interface EndpointsCreateOutput {
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
export const EndpointsCreateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<EndpointsCreateOutput>;

// The operation
/**
 * Creates a new CDN endpoint with the specified endpoint name under the specified subscription, resource group and profile.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 * @param endpointName - Name of the endpoint under the profile which is unique globally.
 */
export const EndpointsCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: EndpointsCreateInput,
  outputSchema: EndpointsCreateOutput,
}));
// Input Schema
export interface EndpointsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  endpointName: string;
}
export const EndpointsDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  profileName: Schema.String.pipe(T.PathParam()),
  endpointName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}",
    apiVersion: "2025-12-01",
  }),
) as unknown as Schema.Codec<EndpointsDeleteInput>;

// Output Schema
export type EndpointsDeleteOutput = void;
export const EndpointsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<EndpointsDeleteOutput>;

// The operation
/**
 * Deletes an existing CDN endpoint with the specified endpoint name under the specified subscription, resource group and profile.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 * @param endpointName - Name of the endpoint under the profile which is unique globally.
 */
export const EndpointsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: EndpointsDeleteInput,
  outputSchema: EndpointsDeleteOutput,
}));
// Input Schema
export interface EndpointsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  endpointName: string;
}
export const EndpointsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  profileName: Schema.String.pipe(T.PathParam()),
  endpointName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}",
    apiVersion: "2025-12-01",
  }),
) as unknown as Schema.Codec<EndpointsGetInput>;

// Output Schema
export interface EndpointsGetOutput {
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
export const EndpointsGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<EndpointsGetOutput>;

// The operation
/**
 * Gets an existing CDN endpoint with the specified endpoint name under the specified subscription, resource group and profile.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 * @param endpointName - Name of the endpoint under the profile which is unique globally.
 */
export const EndpointsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: EndpointsGetInput,
  outputSchema: EndpointsGetOutput,
}));
// Input Schema
export interface EndpointsListByProfileInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
}
export const EndpointsListByProfileInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<EndpointsListByProfileInput>;

// Output Schema
export interface EndpointsListByProfileOutput {
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
export const EndpointsListByProfileOutput =
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
  }) as unknown as Schema.Codec<EndpointsListByProfileOutput>;

// The operation
/**
 * Lists existing CDN endpoints.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 */
export const EndpointsListByProfile = /*@__PURE__*/ API.make(() => ({
  inputSchema: EndpointsListByProfileInput,
  outputSchema: EndpointsListByProfileOutput,
}));
// Input Schema
export interface EndpointsListResourceUsageInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  endpointName: string;
}
export const EndpointsListResourceUsageInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
    endpointName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}/checkResourceUsage",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<EndpointsListResourceUsageInput>;

// Output Schema
export interface EndpointsListResourceUsageOutput {
  value: {
    resourceType?: string;
    unit?: "count";
    currentValue?: number;
    limit?: number;
  }[];
  nextLink?: string;
}
export const EndpointsListResourceUsageOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        resourceType: Schema.optional(Schema.String),
        unit: Schema.optional(Schema.Literals(["count"])),
        currentValue: Schema.optional(Schema.Number),
        limit: Schema.optional(Schema.Number),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<EndpointsListResourceUsageOutput>;

// The operation
/**
 * Checks the quota and usage of geo filters and custom domains under the given endpoint.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 * @param endpointName - Name of the endpoint under the profile which is unique globally.
 */
export const EndpointsListResourceUsage = /*@__PURE__*/ API.make(() => ({
  inputSchema: EndpointsListResourceUsageInput,
  outputSchema: EndpointsListResourceUsageOutput,
}));
// Input Schema
export interface EndpointsLoadContentInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  endpointName: string;
  contentPaths: string[];
}
export const EndpointsLoadContentInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
    endpointName: Schema.String.pipe(T.PathParam()),
    contentPaths: Schema.Array(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}/load",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<EndpointsLoadContentInput>;

// Output Schema
export type EndpointsLoadContentOutput = void;
export const EndpointsLoadContentOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<EndpointsLoadContentOutput>;

// The operation
/**
 * Pre-loads a content to CDN. Available for Verizon Profiles.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 * @param endpointName - Name of the endpoint under the profile which is unique globally.
 */
export const EndpointsLoadContent = /*@__PURE__*/ API.make(() => ({
  inputSchema: EndpointsLoadContentInput,
  outputSchema: EndpointsLoadContentOutput,
}));
// Input Schema
export interface EndpointsPurgeContentInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  endpointName: string;
  contentPaths: string[];
}
export const EndpointsPurgeContentInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
    endpointName: Schema.String.pipe(T.PathParam()),
    contentPaths: Schema.Array(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}/purge",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<EndpointsPurgeContentInput>;

// Output Schema
export type EndpointsPurgeContentOutput = void;
export const EndpointsPurgeContentOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<EndpointsPurgeContentOutput>;

// The operation
/**
 * Removes a content from CDN.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 * @param endpointName - Name of the endpoint under the profile which is unique globally.
 */
export const EndpointsPurgeContent = /*@__PURE__*/ API.make(() => ({
  inputSchema: EndpointsPurgeContentInput,
  outputSchema: EndpointsPurgeContentOutput,
}));
// Input Schema
export interface EndpointsStartInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  endpointName: string;
}
export const EndpointsStartInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  profileName: Schema.String.pipe(T.PathParam()),
  endpointName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}/start",
    apiVersion: "2025-12-01",
  }),
) as unknown as Schema.Codec<EndpointsStartInput>;

// Output Schema
export interface EndpointsStartOutput {
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
export const EndpointsStartOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<EndpointsStartOutput>;

// The operation
/**
 * Starts an existing CDN endpoint that is on a stopped state.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 * @param endpointName - Name of the endpoint under the profile which is unique globally.
 */
export const EndpointsStart = /*@__PURE__*/ API.make(() => ({
  inputSchema: EndpointsStartInput,
  outputSchema: EndpointsStartOutput,
}));
// Input Schema
export interface EndpointsStopInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  endpointName: string;
}
export const EndpointsStopInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  profileName: Schema.String.pipe(T.PathParam()),
  endpointName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}/stop",
    apiVersion: "2025-12-01",
  }),
) as unknown as Schema.Codec<EndpointsStopInput>;

// Output Schema
export interface EndpointsStopOutput {
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
export const EndpointsStopOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<EndpointsStopOutput>;

// The operation
/**
 * Stops an existing running CDN endpoint.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 * @param endpointName - Name of the endpoint under the profile which is unique globally.
 */
export const EndpointsStop = /*@__PURE__*/ API.make(() => ({
  inputSchema: EndpointsStopInput,
  outputSchema: EndpointsStopOutput,
}));
// Input Schema
export interface EndpointsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  endpointName: string;
  tags?: Record<string, string>;
  properties?: {
    originPath?: string;
    contentTypesToCompress?: string[];
    originHostHeader?: string;
    isCompressionEnabled?: boolean;
    isHttpAllowed?: boolean;
    isHttpsAllowed?: boolean;
    queryStringCachingBehavior?:
      | "IgnoreQueryString"
      | "BypassCaching"
      | "UseQueryString"
      | "NotSet";
    optimizationType?:
      | "GeneralWebDelivery"
      | "GeneralMediaStreaming"
      | "VideoOnDemandMediaStreaming"
      | "LargeFileDownload"
      | "DynamicSiteAcceleration";
    probePath?: string;
    geoFilters?: {
      relativePath: string;
      action: "Block" | "Allow";
      countryCodes: string[];
    }[];
    defaultOriginGroup?: { id?: string };
    urlSigningKeys?: {
      keyId: string;
      keySourceParameters: {
        typeName: "KeyVaultSigningKeyParameters";
        subscriptionId: string;
        resourceGroupName: string;
        vaultName: string;
        secretName: string;
        secretVersion: string;
      };
    }[];
    deliveryPolicy?: {
      description?: string;
      rules: {
        name?: string;
        order: number;
        conditions?: {
          name:
            | "RemoteAddress"
            | "RequestMethod"
            | "QueryString"
            | "PostArgs"
            | "RequestUri"
            | "RequestHeader"
            | "RequestBody"
            | "RequestScheme"
            | "UrlPath"
            | "UrlFileExtension"
            | "UrlFileName"
            | "HttpVersion"
            | "Cookies"
            | "IsDevice"
            | "SocketAddr"
            | "ClientPort"
            | "ServerPort"
            | "HostName"
            | "SslProtocol";
        }[];
        actions: {
          name:
            | "CacheExpiration"
            | "CacheKeyQueryString"
            | "ModifyRequestHeader"
            | "ModifyResponseHeader"
            | "UrlRedirect"
            | "UrlRewrite"
            | "UrlSigning"
            | "OriginGroupOverride"
            | "RouteConfigurationOverride";
        }[];
      }[];
    };
    webApplicationFirewallPolicyLink?: { id?: string };
  };
}
export const EndpointsUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  profileName: Schema.String.pipe(T.PathParam()),
  endpointName: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  properties: Schema.optional(
    Schema.Struct({
      originPath: Schema.optional(Schema.String),
      contentTypesToCompress: Schema.optional(Schema.Array(Schema.String)),
      originHostHeader: Schema.optional(Schema.String),
      isCompressionEnabled: Schema.optional(Schema.Boolean),
      isHttpAllowed: Schema.optional(Schema.Boolean),
      isHttpsAllowed: Schema.optional(Schema.Boolean),
      queryStringCachingBehavior: Schema.optional(
        Schema.Literals([
          "IgnoreQueryString",
          "BypassCaching",
          "UseQueryString",
          "NotSet",
        ]),
      ),
      optimizationType: Schema.optional(
        Schema.Literals([
          "GeneralWebDelivery",
          "GeneralMediaStreaming",
          "VideoOnDemandMediaStreaming",
          "LargeFileDownload",
          "DynamicSiteAcceleration",
        ]),
      ),
      probePath: Schema.optional(Schema.String),
      geoFilters: Schema.optional(
        Schema.Array(
          Schema.Struct({
            relativePath: Schema.String,
            action: Schema.Literals(["Block", "Allow"]),
            countryCodes: Schema.Array(Schema.String),
          }),
        ),
      ),
      defaultOriginGroup: Schema.optional(
        Schema.Struct({
          id: Schema.optional(Schema.String),
        }),
      ),
      urlSigningKeys: Schema.optional(
        Schema.Array(
          Schema.Struct({
            keyId: Schema.String,
            keySourceParameters: Schema.Struct({
              typeName: Schema.Literals(["KeyVaultSigningKeyParameters"]),
              subscriptionId: Schema.String,
              resourceGroupName: Schema.String,
              vaultName: Schema.String,
              secretName: Schema.String,
              secretVersion: Schema.String,
            }),
          }),
        ),
      ),
      deliveryPolicy: Schema.optional(
        Schema.Struct({
          description: Schema.optional(Schema.String),
          rules: Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              order: Schema.Number,
              conditions: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    name: Schema.Literals([
                      "RemoteAddress",
                      "RequestMethod",
                      "QueryString",
                      "PostArgs",
                      "RequestUri",
                      "RequestHeader",
                      "RequestBody",
                      "RequestScheme",
                      "UrlPath",
                      "UrlFileExtension",
                      "UrlFileName",
                      "HttpVersion",
                      "Cookies",
                      "IsDevice",
                      "SocketAddr",
                      "ClientPort",
                      "ServerPort",
                      "HostName",
                      "SslProtocol",
                    ]),
                  }),
                ),
              ),
              actions: Schema.Array(
                Schema.Struct({
                  name: Schema.Literals([
                    "CacheExpiration",
                    "CacheKeyQueryString",
                    "ModifyRequestHeader",
                    "ModifyResponseHeader",
                    "UrlRedirect",
                    "UrlRewrite",
                    "UrlSigning",
                    "OriginGroupOverride",
                    "RouteConfigurationOverride",
                  ]),
                }),
              ),
            }),
          ),
        }),
      ),
      webApplicationFirewallPolicyLink: Schema.optional(
        Schema.Struct({
          id: Schema.optional(Schema.String),
        }),
      ),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}",
    apiVersion: "2025-12-01",
  }),
) as unknown as Schema.Codec<EndpointsUpdateInput>;

// Output Schema
export interface EndpointsUpdateOutput {
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
export const EndpointsUpdateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<EndpointsUpdateOutput>;

// The operation
/**
 * Updates an existing CDN endpoint with the specified endpoint name under the specified subscription, resource group and profile. Only tags can be updated after creating an endpoint. To update origins, use the Update Origin operation. To update origin groups, use the Update Origin group operation. To update custom domains, use the Update Custom Domain operation.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 * @param endpointName - Name of the endpoint under the profile which is unique globally.
 */
export const EndpointsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: EndpointsUpdateInput,
  outputSchema: EndpointsUpdateOutput,
}));
// Input Schema
export interface EndpointsValidateCustomDomainInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  endpointName: string;
  hostName: string;
}
export const EndpointsValidateCustomDomainInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
    endpointName: Schema.String.pipe(T.PathParam()),
    hostName: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}/validateCustomDomain",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<EndpointsValidateCustomDomainInput>;

// Output Schema
export interface EndpointsValidateCustomDomainOutput {
  customDomainValidated?: boolean;
  reason?: string;
  message?: string;
}
export const EndpointsValidateCustomDomainOutput =
  /*@__PURE__*/ Schema.Struct({
    customDomainValidated: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<EndpointsValidateCustomDomainOutput>;

// The operation
/**
 * Validates the custom domain mapping to ensure it maps to the correct CDN endpoint in DNS.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 * @param endpointName - Name of the endpoint under the profile which is unique globally.
 */
export const EndpointsValidateCustomDomain =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: EndpointsValidateCustomDomainInput,
    outputSchema: EndpointsValidateCustomDomainOutput,
  }));
// Input Schema
export interface LogAnalyticsGetLogAnalyticsLocationsInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
}
export const LogAnalyticsGetLogAnalyticsLocationsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/getLogAnalyticsLocations",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<LogAnalyticsGetLogAnalyticsLocationsInput>;

// Output Schema
export interface LogAnalyticsGetLogAnalyticsLocationsOutput {
  continents?: { id?: string }[];
  countryOrRegions?: { id?: string; continentId?: string }[];
}
export const LogAnalyticsGetLogAnalyticsLocationsOutput =
  /*@__PURE__*/ Schema.Struct({
    continents: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
        }),
      ),
    ),
    countryOrRegions: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          continentId: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<LogAnalyticsGetLogAnalyticsLocationsOutput>;

// The operation
/**
 * Get all available location names for AFD log analytics report.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 */
export const LogAnalyticsGetLogAnalyticsLocations =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: LogAnalyticsGetLogAnalyticsLocationsInput,
    outputSchema: LogAnalyticsGetLogAnalyticsLocationsOutput,
  }));
// Input Schema
export interface LogAnalyticsGetLogAnalyticsMetricsInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  metrics: string;
  dateTimeBegin: string;
  dateTimeEnd: string;
  granularity: "PT5M" | "PT1H" | "P1D";
  groupBy?: string;
  continents?: string;
  countryOrRegions?: string;
  customDomains: string;
  protocols: string;
}
export const LogAnalyticsGetLogAnalyticsMetricsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
    metrics: Schema.String,
    dateTimeBegin: Schema.String,
    dateTimeEnd: Schema.String,
    granularity: Schema.Literals(["PT5M", "PT1H", "P1D"]),
    groupBy: Schema.optional(Schema.String),
    continents: Schema.optional(Schema.String),
    countryOrRegions: Schema.optional(Schema.String),
    customDomains: Schema.String,
    protocols: Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/getLogAnalyticsMetrics",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<LogAnalyticsGetLogAnalyticsMetricsInput>;

// Output Schema
export interface LogAnalyticsGetLogAnalyticsMetricsOutput {
  dateTimeBegin?: string;
  dateTimeEnd?: string;
  granularity?: "PT5M" | "PT1H" | "P1D";
  series?: {
    metric?: string;
    unit?: "count" | "bytes" | "bitsPerSecond" | "milliSeconds";
    groups?: { name?: string; value?: string }[];
    data?: { dateTime?: string; value?: number }[];
  }[];
}
export const LogAnalyticsGetLogAnalyticsMetricsOutput =
  /*@__PURE__*/ Schema.Struct({
    dateTimeBegin: Schema.optional(Schema.String),
    dateTimeEnd: Schema.optional(Schema.String),
    granularity: Schema.optional(Schema.Literals(["PT5M", "PT1H", "P1D"])),
    series: Schema.optional(
      Schema.Array(
        Schema.Struct({
          metric: Schema.optional(Schema.String),
          unit: Schema.optional(
            Schema.Literals([
              "count",
              "bytes",
              "bitsPerSecond",
              "milliSeconds",
            ]),
          ),
          groups: Schema.optional(
            Schema.Array(
              Schema.Struct({
                name: Schema.optional(Schema.String),
                value: Schema.optional(Schema.String),
              }),
            ),
          ),
          data: Schema.optional(
            Schema.Array(
              Schema.Struct({
                dateTime: Schema.optional(Schema.String),
                value: Schema.optional(Schema.Number),
              }),
            ),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<LogAnalyticsGetLogAnalyticsMetricsOutput>;

// The operation
/**
 * Get log report for AFD profile
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 */
export const LogAnalyticsGetLogAnalyticsMetrics =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: LogAnalyticsGetLogAnalyticsMetricsInput,
    outputSchema: LogAnalyticsGetLogAnalyticsMetricsOutput,
  }));
// Input Schema
export interface LogAnalyticsGetLogAnalyticsRankingsInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  rankings: string;
  metrics: string;
  maxRanking: number;
  dateTimeBegin: string;
  dateTimeEnd: string;
  customDomains?: string;
}
export const LogAnalyticsGetLogAnalyticsRankingsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
    rankings: Schema.String,
    metrics: Schema.String,
    maxRanking: Schema.Number,
    dateTimeBegin: Schema.String,
    dateTimeEnd: Schema.String,
    customDomains: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/getLogAnalyticsRankings",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<LogAnalyticsGetLogAnalyticsRankingsInput>;

// Output Schema
export interface LogAnalyticsGetLogAnalyticsRankingsOutput {
  dateTimeBegin?: string;
  dateTimeEnd?: string;
  tables?: {
    ranking?: string;
    data?: {
      name?: string;
      metrics?: { metric?: string; value?: number; percentage?: number }[];
    }[];
  }[];
}
export const LogAnalyticsGetLogAnalyticsRankingsOutput =
  /*@__PURE__*/ Schema.Struct({
    dateTimeBegin: Schema.optional(Schema.String),
    dateTimeEnd: Schema.optional(Schema.String),
    tables: Schema.optional(
      Schema.Array(
        Schema.Struct({
          ranking: Schema.optional(Schema.String),
          data: Schema.optional(
            Schema.Array(
              Schema.Struct({
                name: Schema.optional(Schema.String),
                metrics: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      metric: Schema.optional(Schema.String),
                      value: Schema.optional(Schema.Number),
                      percentage: Schema.optional(Schema.Number),
                    }),
                  ),
                ),
              }),
            ),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<LogAnalyticsGetLogAnalyticsRankingsOutput>;

// The operation
/**
 * Get log analytics ranking report for AFD profile
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 */
export const LogAnalyticsGetLogAnalyticsRankings =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: LogAnalyticsGetLogAnalyticsRankingsInput,
    outputSchema: LogAnalyticsGetLogAnalyticsRankingsOutput,
  }));
// Input Schema
export interface LogAnalyticsGetLogAnalyticsResourcesInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
}
export const LogAnalyticsGetLogAnalyticsResourcesInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/getLogAnalyticsResources",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<LogAnalyticsGetLogAnalyticsResourcesInput>;

// Output Schema
export interface LogAnalyticsGetLogAnalyticsResourcesOutput {
  endpoints?: {
    id?: string;
    name?: string;
    history?: boolean;
    customDomains?: {
      id?: string;
      name?: string;
      endpointId?: string;
      history?: boolean;
    }[];
  }[];
  customDomains?: {
    id?: string;
    name?: string;
    endpointId?: string;
    history?: boolean;
  }[];
}
export const LogAnalyticsGetLogAnalyticsResourcesOutput =
  /*@__PURE__*/ Schema.Struct({
    endpoints: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          history: Schema.optional(Schema.Boolean),
          customDomains: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                name: Schema.optional(Schema.String),
                endpointId: Schema.optional(Schema.String),
                history: Schema.optional(Schema.Boolean),
              }),
            ),
          ),
        }),
      ),
    ),
    customDomains: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          endpointId: Schema.optional(Schema.String),
          history: Schema.optional(Schema.Boolean),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<LogAnalyticsGetLogAnalyticsResourcesOutput>;

// The operation
/**
 * Get all endpoints and custom domains available for AFD log report
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 */
export const LogAnalyticsGetLogAnalyticsResources =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: LogAnalyticsGetLogAnalyticsResourcesInput,
    outputSchema: LogAnalyticsGetLogAnalyticsResourcesOutput,
  }));
// Input Schema
export interface LogAnalyticsGetWafLogAnalyticsMetricsInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  metrics: string;
  dateTimeBegin: string;
  dateTimeEnd: string;
  granularity: "PT5M" | "PT1H" | "P1D";
  actions?: string;
  groupBy?: string;
  ruleTypes?: string;
}
export const LogAnalyticsGetWafLogAnalyticsMetricsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
    metrics: Schema.String,
    dateTimeBegin: Schema.String,
    dateTimeEnd: Schema.String,
    granularity: Schema.Literals(["PT5M", "PT1H", "P1D"]),
    actions: Schema.optional(Schema.String),
    groupBy: Schema.optional(Schema.String),
    ruleTypes: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/getWafLogAnalyticsMetrics",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<LogAnalyticsGetWafLogAnalyticsMetricsInput>;

// Output Schema
export interface LogAnalyticsGetWafLogAnalyticsMetricsOutput {
  dateTimeBegin?: string;
  dateTimeEnd?: string;
  granularity?: "PT5M" | "PT1H" | "P1D";
  series?: {
    metric?: string;
    unit?: "count";
    groups?: { name?: string; value?: string }[];
    data?: { dateTime?: string; value?: number }[];
  }[];
}
export const LogAnalyticsGetWafLogAnalyticsMetricsOutput =
  /*@__PURE__*/ Schema.Struct({
    dateTimeBegin: Schema.optional(Schema.String),
    dateTimeEnd: Schema.optional(Schema.String),
    granularity: Schema.optional(Schema.Literals(["PT5M", "PT1H", "P1D"])),
    series: Schema.optional(
      Schema.Array(
        Schema.Struct({
          metric: Schema.optional(Schema.String),
          unit: Schema.optional(Schema.Literals(["count"])),
          groups: Schema.optional(
            Schema.Array(
              Schema.Struct({
                name: Schema.optional(Schema.String),
                value: Schema.optional(Schema.String),
              }),
            ),
          ),
          data: Schema.optional(
            Schema.Array(
              Schema.Struct({
                dateTime: Schema.optional(Schema.String),
                value: Schema.optional(Schema.Number),
              }),
            ),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<LogAnalyticsGetWafLogAnalyticsMetricsOutput>;

// The operation
/**
 * Get Waf related log analytics report for AFD profile.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 */
export const LogAnalyticsGetWafLogAnalyticsMetrics =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: LogAnalyticsGetWafLogAnalyticsMetricsInput,
    outputSchema: LogAnalyticsGetWafLogAnalyticsMetricsOutput,
  }));
// Input Schema
export interface LogAnalyticsGetWafLogAnalyticsRankingsInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  metrics: string;
  dateTimeBegin: string;
  dateTimeEnd: string;
  maxRanking: number;
  rankings: string;
  actions?: string;
  ruleTypes?: string;
}
export const LogAnalyticsGetWafLogAnalyticsRankingsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
    metrics: Schema.String,
    dateTimeBegin: Schema.String,
    dateTimeEnd: Schema.String,
    maxRanking: Schema.Number,
    rankings: Schema.String,
    actions: Schema.optional(Schema.String),
    ruleTypes: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/getWafLogAnalyticsRankings",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<LogAnalyticsGetWafLogAnalyticsRankingsInput>;

// Output Schema
export interface LogAnalyticsGetWafLogAnalyticsRankingsOutput {
  dateTimeBegin?: string;
  dateTimeEnd?: string;
  groups?: string[];
  data?: {
    groupValues?: string[];
    metrics?: { metric?: string; value?: number; percentage?: number }[];
  }[];
}
export const LogAnalyticsGetWafLogAnalyticsRankingsOutput =
  /*@__PURE__*/ Schema.Struct({
    dateTimeBegin: Schema.optional(Schema.String),
    dateTimeEnd: Schema.optional(Schema.String),
    groups: Schema.optional(Schema.Array(Schema.String)),
    data: Schema.optional(
      Schema.Array(
        Schema.Struct({
          groupValues: Schema.optional(Schema.Array(Schema.String)),
          metrics: Schema.optional(
            Schema.Array(
              Schema.Struct({
                metric: Schema.optional(Schema.String),
                value: Schema.optional(Schema.Number),
                percentage: Schema.optional(Schema.Number),
              }),
            ),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<LogAnalyticsGetWafLogAnalyticsRankingsOutput>;

// The operation
/**
 * Get WAF log analytics charts for AFD profile
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 */
export const LogAnalyticsGetWafLogAnalyticsRankings =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: LogAnalyticsGetWafLogAnalyticsRankingsInput,
    outputSchema: LogAnalyticsGetWafLogAnalyticsRankingsOutput,
  }));
// Input Schema
export interface ManagedRuleSetsListInput {
  subscriptionId: string;
}
export const ManagedRuleSetsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Cdn/cdnWebApplicationFirewallManagedRuleSets",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<ManagedRuleSetsListInput>;

// Output Schema
export interface ManagedRuleSetsListOutput {
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
export const ManagedRuleSetsListOutput =
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
  }) as unknown as Schema.Codec<ManagedRuleSetsListOutput>;

// The operation
/**
 * Lists all available managed rule sets.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const ManagedRuleSetsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: ManagedRuleSetsListInput,
  outputSchema: ManagedRuleSetsListOutput,
}));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Cdn/operations",
    apiVersion: "2025-12-01",
  }),
) as unknown as Schema.Codec<OperationsListInput>;

// Output Schema
export interface OperationsListOutput {
  value: {
    name?: string;
    isDataAction?: boolean;
    display?: {
      provider?: string;
      resource?: string;
      operation?: string;
      description?: string;
    };
    origin?: string;
    properties?: {
      serviceSpecification?: {
        logSpecifications?: {
          name?: string;
          displayName?: string;
          blobDuration?: string;
          logFilterPattern?: string;
        }[];
        metricSpecifications?: {
          name?: string;
          displayName?: string;
          displayDescription?: string;
          unit?: string;
          aggregationType?: string;
          availabilities?: { timeGrain?: string; blobDuration?: string }[];
          supportedTimeGrainTypes?: string[];
          dimensions?: {
            name?: string;
            displayName?: string;
            internalName?: string;
          }[];
          fillGapWithZero?: boolean;
          metricFilterPattern?: string;
          isInternal?: boolean;
        }[];
      };
    };
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
          resource: Schema.optional(Schema.String),
          operation: Schema.optional(Schema.String),
          description: Schema.optional(Schema.String),
        }),
      ),
      origin: Schema.optional(Schema.String),
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
                    logFilterPattern: Schema.optional(Schema.String),
                  }),
                ),
              ),
              metricSpecifications: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    displayName: Schema.optional(Schema.String),
                    displayDescription: Schema.optional(Schema.String),
                    unit: Schema.optional(Schema.String),
                    aggregationType: Schema.optional(Schema.String),
                    availabilities: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          timeGrain: Schema.optional(Schema.String),
                          blobDuration: Schema.optional(Schema.String),
                        }),
                      ),
                    ),
                    supportedTimeGrainTypes: Schema.optional(
                      Schema.Array(Schema.String),
                    ),
                    dimensions: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          name: Schema.optional(Schema.String),
                          displayName: Schema.optional(Schema.String),
                          internalName: Schema.optional(Schema.String),
                        }),
                      ),
                    ),
                    fillGapWithZero: Schema.optional(Schema.Boolean),
                    metricFilterPattern: Schema.optional(Schema.String),
                    isInternal: Schema.optional(Schema.Boolean),
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
export const OperationsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface OriginGroupsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  endpointName: string;
  originGroupName: string;
  properties?: {
    healthProbeSettings?: {
      probePath?: string;
      probeRequestType?: "NotSet" | "GET" | "HEAD";
      probeProtocol?: "NotSet" | "Http" | "Https";
      probeIntervalInSeconds?: number;
    };
    origins?: { id?: string }[];
    trafficRestorationTimeToHealedOrNewEndpointsInMinutes?: number;
    responseBasedOriginErrorDetectionSettings?: {
      responseBasedDetectedErrorTypes?:
        | "None"
        | "TcpErrorsOnly"
        | "TcpAndHttpErrors";
      responseBasedFailoverThresholdPercentage?: number;
      httpErrorRanges?: { begin?: number; end?: number }[];
    };
  };
}
export const OriginGroupsCreateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
    endpointName: Schema.String.pipe(T.PathParam()),
    originGroupName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        healthProbeSettings: Schema.optional(
          Schema.Struct({
            probePath: Schema.optional(Schema.String),
            probeRequestType: Schema.optional(
              Schema.Literals(["NotSet", "GET", "HEAD"]),
            ),
            probeProtocol: Schema.optional(
              Schema.Literals(["NotSet", "Http", "Https"]),
            ),
            probeIntervalInSeconds: Schema.optional(Schema.Number),
          }),
        ),
        origins: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
            }),
          ),
        ),
        trafficRestorationTimeToHealedOrNewEndpointsInMinutes: Schema.optional(
          Schema.Number,
        ),
        responseBasedOriginErrorDetectionSettings: Schema.optional(
          Schema.Struct({
            responseBasedDetectedErrorTypes: Schema.optional(
              Schema.Literals(["None", "TcpErrorsOnly", "TcpAndHttpErrors"]),
            ),
            responseBasedFailoverThresholdPercentage: Schema.optional(
              Schema.Number,
            ),
            httpErrorRanges: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  begin: Schema.optional(Schema.Number),
                  end: Schema.optional(Schema.Number),
                }),
              ),
            ),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}/originGroups/{originGroupName}",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<OriginGroupsCreateInput>;

// Output Schema
export interface OriginGroupsCreateOutput {
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
export const OriginGroupsCreateOutput =
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
  }) as unknown as Schema.Codec<OriginGroupsCreateOutput>;

// The operation
/**
 * Creates a new origin group within the specified endpoint.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 * @param endpointName - Name of the endpoint under the profile which is unique globally.
 * @param originGroupName - Name of the origin group which is unique within the endpoint.
 */
export const OriginGroupsCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: OriginGroupsCreateInput,
  outputSchema: OriginGroupsCreateOutput,
}));
// Input Schema
export interface OriginGroupsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  endpointName: string;
  originGroupName: string;
}
export const OriginGroupsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
    endpointName: Schema.String.pipe(T.PathParam()),
    originGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}/originGroups/{originGroupName}",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<OriginGroupsDeleteInput>;

// Output Schema
export type OriginGroupsDeleteOutput = void;
export const OriginGroupsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<OriginGroupsDeleteOutput>;

// The operation
/**
 * Deletes an existing origin group within an endpoint.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 * @param endpointName - Name of the endpoint under the profile which is unique globally.
 * @param originGroupName - Name of the origin group which is unique within the endpoint.
 */
export const OriginGroupsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: OriginGroupsDeleteInput,
  outputSchema: OriginGroupsDeleteOutput,
}));
// Input Schema
export interface OriginGroupsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  endpointName: string;
  originGroupName: string;
}
export const OriginGroupsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  profileName: Schema.String.pipe(T.PathParam()),
  endpointName: Schema.String.pipe(T.PathParam()),
  originGroupName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}/originGroups/{originGroupName}",
    apiVersion: "2025-12-01",
  }),
) as unknown as Schema.Codec<OriginGroupsGetInput>;

// Output Schema
export interface OriginGroupsGetOutput {
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
export const OriginGroupsGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<OriginGroupsGetOutput>;

// The operation
/**
 * Gets an existing origin group within an endpoint.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 * @param endpointName - Name of the endpoint under the profile which is unique globally.
 * @param originGroupName - Name of the origin group which is unique within the endpoint.
 */
export const OriginGroupsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: OriginGroupsGetInput,
  outputSchema: OriginGroupsGetOutput,
}));
// Input Schema
export interface OriginGroupsListByEndpointInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  endpointName: string;
}
export const OriginGroupsListByEndpointInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
    endpointName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}/originGroups",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<OriginGroupsListByEndpointInput>;

// Output Schema
export interface OriginGroupsListByEndpointOutput {
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
export const OriginGroupsListByEndpointOutput =
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
  }) as unknown as Schema.Codec<OriginGroupsListByEndpointOutput>;

// The operation
/**
 * Lists all of the existing origin groups within an endpoint.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 * @param endpointName - Name of the endpoint under the profile which is unique globally.
 */
export const OriginGroupsListByEndpoint = /*@__PURE__*/ API.make(() => ({
  inputSchema: OriginGroupsListByEndpointInput,
  outputSchema: OriginGroupsListByEndpointOutput,
}));
// Input Schema
export interface OriginGroupsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  endpointName: string;
  originGroupName: string;
  properties?: {
    healthProbeSettings?: {
      probePath?: string;
      probeRequestType?: "NotSet" | "GET" | "HEAD";
      probeProtocol?: "NotSet" | "Http" | "Https";
      probeIntervalInSeconds?: number;
    };
    origins?: { id?: string }[];
    trafficRestorationTimeToHealedOrNewEndpointsInMinutes?: number;
    responseBasedOriginErrorDetectionSettings?: {
      responseBasedDetectedErrorTypes?:
        | "None"
        | "TcpErrorsOnly"
        | "TcpAndHttpErrors";
      responseBasedFailoverThresholdPercentage?: number;
      httpErrorRanges?: { begin?: number; end?: number }[];
    };
  };
}
export const OriginGroupsUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
    endpointName: Schema.String.pipe(T.PathParam()),
    originGroupName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        healthProbeSettings: Schema.optional(
          Schema.Struct({
            probePath: Schema.optional(Schema.String),
            probeRequestType: Schema.optional(
              Schema.Literals(["NotSet", "GET", "HEAD"]),
            ),
            probeProtocol: Schema.optional(
              Schema.Literals(["NotSet", "Http", "Https"]),
            ),
            probeIntervalInSeconds: Schema.optional(Schema.Number),
          }),
        ),
        origins: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
            }),
          ),
        ),
        trafficRestorationTimeToHealedOrNewEndpointsInMinutes: Schema.optional(
          Schema.Number,
        ),
        responseBasedOriginErrorDetectionSettings: Schema.optional(
          Schema.Struct({
            responseBasedDetectedErrorTypes: Schema.optional(
              Schema.Literals(["None", "TcpErrorsOnly", "TcpAndHttpErrors"]),
            ),
            responseBasedFailoverThresholdPercentage: Schema.optional(
              Schema.Number,
            ),
            httpErrorRanges: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  begin: Schema.optional(Schema.Number),
                  end: Schema.optional(Schema.Number),
                }),
              ),
            ),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}/originGroups/{originGroupName}",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<OriginGroupsUpdateInput>;

// Output Schema
export interface OriginGroupsUpdateOutput {
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
export const OriginGroupsUpdateOutput =
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
  }) as unknown as Schema.Codec<OriginGroupsUpdateOutput>;

// The operation
/**
 * Updates an existing origin group within an endpoint.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 * @param endpointName - Name of the endpoint under the profile which is unique globally.
 * @param originGroupName - Name of the origin group which is unique within the endpoint.
 */
export const OriginGroupsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: OriginGroupsUpdateInput,
  outputSchema: OriginGroupsUpdateOutput,
}));
// Input Schema
export interface OriginsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  endpointName: string;
  originName: string;
  properties?: {
    hostName?: string;
    httpPort?: number;
    httpsPort?: number;
    originHostHeader?: string;
    priority?: number;
    weight?: number;
    enabled?: boolean;
    privateLinkAlias?: string;
    privateLinkResourceId?: string;
    privateLinkLocation?: string;
    privateLinkApprovalMessage?: string;
  };
}
export const OriginsCreateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  profileName: Schema.String.pipe(T.PathParam()),
  endpointName: Schema.String.pipe(T.PathParam()),
  originName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      hostName: Schema.optional(Schema.String),
      httpPort: Schema.optional(Schema.Number),
      httpsPort: Schema.optional(Schema.Number),
      originHostHeader: Schema.optional(Schema.String),
      priority: Schema.optional(Schema.Number),
      weight: Schema.optional(Schema.Number),
      enabled: Schema.optional(Schema.Boolean),
      privateLinkAlias: Schema.optional(Schema.String),
      privateLinkResourceId: Schema.optional(Schema.String),
      privateLinkLocation: Schema.optional(Schema.String),
      privateLinkApprovalMessage: Schema.optional(Schema.String),
    }),
  ),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}/origins/{originName}",
    apiVersion: "2025-12-01",
  }),
) as unknown as Schema.Codec<OriginsCreateInput>;

// Output Schema
export interface OriginsCreateOutput {
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
export const OriginsCreateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<OriginsCreateOutput>;

// The operation
/**
 * Creates a new origin within the specified endpoint.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 * @param endpointName - Name of the endpoint under the profile which is unique globally.
 * @param originName - Name of the origin which is unique within the endpoint.
 */
export const OriginsCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: OriginsCreateInput,
  outputSchema: OriginsCreateOutput,
}));
// Input Schema
export interface OriginsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  endpointName: string;
  originName: string;
}
export const OriginsDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  profileName: Schema.String.pipe(T.PathParam()),
  endpointName: Schema.String.pipe(T.PathParam()),
  originName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}/origins/{originName}",
    apiVersion: "2025-12-01",
  }),
) as unknown as Schema.Codec<OriginsDeleteInput>;

// Output Schema
export type OriginsDeleteOutput = void;
export const OriginsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<OriginsDeleteOutput>;

// The operation
/**
 * Deletes an existing origin within an endpoint.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 * @param endpointName - Name of the endpoint under the profile which is unique globally.
 * @param originName - Name of the origin which is unique within the endpoint.
 */
export const OriginsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: OriginsDeleteInput,
  outputSchema: OriginsDeleteOutput,
}));
// Input Schema
export interface OriginsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  endpointName: string;
  originName: string;
}
export const OriginsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  profileName: Schema.String.pipe(T.PathParam()),
  endpointName: Schema.String.pipe(T.PathParam()),
  originName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}/origins/{originName}",
    apiVersion: "2025-12-01",
  }),
) as unknown as Schema.Codec<OriginsGetInput>;

// Output Schema
export interface OriginsGetOutput {
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
export const OriginsGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<OriginsGetOutput>;

// The operation
/**
 * Gets an existing origin within an endpoint.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 * @param endpointName - Name of the endpoint under the profile which is unique globally.
 * @param originName - Name of the origin which is unique within the endpoint.
 */
export const OriginsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: OriginsGetInput,
  outputSchema: OriginsGetOutput,
}));
// Input Schema
export interface OriginsListByEndpointInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  endpointName: string;
}
export const OriginsListByEndpointInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
    endpointName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}/origins",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<OriginsListByEndpointInput>;

// Output Schema
export interface OriginsListByEndpointOutput {
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
export const OriginsListByEndpointOutput =
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
  }) as unknown as Schema.Codec<OriginsListByEndpointOutput>;

// The operation
/**
 * Lists all of the existing origins within an endpoint.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 * @param endpointName - Name of the endpoint under the profile which is unique globally.
 */
export const OriginsListByEndpoint = /*@__PURE__*/ API.make(() => ({
  inputSchema: OriginsListByEndpointInput,
  outputSchema: OriginsListByEndpointOutput,
}));
// Input Schema
export interface OriginsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  endpointName: string;
  originName: string;
  properties?: {
    hostName?: string;
    httpPort?: number;
    httpsPort?: number;
    originHostHeader?: string;
    priority?: number;
    weight?: number;
    enabled?: boolean;
    privateLinkAlias?: string;
    privateLinkResourceId?: string;
    privateLinkLocation?: string;
    privateLinkApprovalMessage?: string;
  };
}
export const OriginsUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  profileName: Schema.String.pipe(T.PathParam()),
  endpointName: Schema.String.pipe(T.PathParam()),
  originName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      hostName: Schema.optional(Schema.String),
      httpPort: Schema.optional(Schema.Number),
      httpsPort: Schema.optional(Schema.Number),
      originHostHeader: Schema.optional(Schema.String),
      priority: Schema.optional(Schema.Number),
      weight: Schema.optional(Schema.Number),
      enabled: Schema.optional(Schema.Boolean),
      privateLinkAlias: Schema.optional(Schema.String),
      privateLinkResourceId: Schema.optional(Schema.String),
      privateLinkLocation: Schema.optional(Schema.String),
      privateLinkApprovalMessage: Schema.optional(Schema.String),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}/origins/{originName}",
    apiVersion: "2025-12-01",
  }),
) as unknown as Schema.Codec<OriginsUpdateInput>;

// Output Schema
export interface OriginsUpdateOutput {
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
export const OriginsUpdateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<OriginsUpdateOutput>;

// The operation
/**
 * Updates an existing origin within an endpoint.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 * @param endpointName - Name of the endpoint under the profile which is unique globally.
 * @param originName - Name of the origin which is unique within the endpoint.
 */
export const OriginsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: OriginsUpdateInput,
  outputSchema: OriginsUpdateOutput,
}));
// Input Schema
export interface PoliciesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  policyName: string;
  properties?: {
    policySettings?: {
      enabledState?: "Disabled" | "Enabled";
      mode?: "Prevention" | "Detection";
      defaultRedirectUrl?: string;
      defaultCustomBlockResponseStatusCode?: 200 | 403 | 405 | 406 | 429;
      defaultCustomBlockResponseBody?: string;
    };
    rateLimitRules?: {
      rules?: {
        name: string;
        enabledState?: "Disabled" | "Enabled";
        priority: number;
        matchConditions: {
          matchVariable:
            | "RemoteAddr"
            | "SocketAddr"
            | "RequestMethod"
            | "RequestHeader"
            | "RequestUri"
            | "QueryString"
            | "RequestBody"
            | "Cookies"
            | "PostArgs";
          selector?: string;
          operator:
            | "Any"
            | "IPMatch"
            | "GeoMatch"
            | "Equal"
            | "Contains"
            | "LessThan"
            | "GreaterThan"
            | "LessThanOrEqual"
            | "GreaterThanOrEqual"
            | "BeginsWith"
            | "EndsWith"
            | "RegEx";
          negateCondition?: boolean;
          matchValue: string[];
          transforms?: (
            | "Lowercase"
            | "Uppercase"
            | "Trim"
            | "UrlDecode"
            | "UrlEncode"
            | "RemoveNulls"
          )[];
        }[];
        action: "Allow" | "Block" | "Log" | "Redirect";
      }[];
    };
    customRules?: {
      rules?: {
        name: string;
        enabledState?: "Disabled" | "Enabled";
        priority: number;
        matchConditions: {
          matchVariable:
            | "RemoteAddr"
            | "SocketAddr"
            | "RequestMethod"
            | "RequestHeader"
            | "RequestUri"
            | "QueryString"
            | "RequestBody"
            | "Cookies"
            | "PostArgs";
          selector?: string;
          operator:
            | "Any"
            | "IPMatch"
            | "GeoMatch"
            | "Equal"
            | "Contains"
            | "LessThan"
            | "GreaterThan"
            | "LessThanOrEqual"
            | "GreaterThanOrEqual"
            | "BeginsWith"
            | "EndsWith"
            | "RegEx";
          negateCondition?: boolean;
          matchValue: string[];
          transforms?: (
            | "Lowercase"
            | "Uppercase"
            | "Trim"
            | "UrlDecode"
            | "UrlEncode"
            | "RemoveNulls"
          )[];
        }[];
        action: "Allow" | "Block" | "Log" | "Redirect";
      }[];
    };
    managedRules?: {
      managedRuleSets?: {
        ruleSetType: string;
        ruleSetVersion: string;
        anomalyScore?: number;
        ruleGroupOverrides?: {
          ruleGroupName: string;
          rules?: {
            ruleId: string;
            enabledState?: "Disabled" | "Enabled";
            action?: "Allow" | "Block" | "Log" | "Redirect";
          }[];
        }[];
      }[];
    };
    endpointLinks?: { id?: string }[];
    extendedProperties?: Record<string, string>;
    provisioningState?: "Creating" | "Succeeded" | "Failed";
    resourceState?:
      | "Creating"
      | "Enabling"
      | "Enabled"
      | "Disabling"
      | "Disabled"
      | "Deleting";
  };
  etag?: string;
  sku: {
    name?:
      | "Standard_Verizon"
      | "Premium_Verizon"
      | "Custom_Verizon"
      | "Standard_Akamai"
      | "Standard_ChinaCdn"
      | "Standard_Microsoft"
      | "Standard_AzureFrontDoor"
      | "Premium_AzureFrontDoor"
      | "Standard_955BandWidth_ChinaCdn"
      | "Standard_AvgBandWidth_ChinaCdn"
      | "StandardPlus_ChinaCdn"
      | "StandardPlus_955BandWidth_ChinaCdn"
      | "StandardPlus_AvgBandWidth_ChinaCdn";
  };
  tags?: Record<string, string>;
  location: string;
}
export const PoliciesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    policyName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        policySettings: Schema.optional(
          Schema.Struct({
            enabledState: Schema.optional(
              Schema.Literals(["Disabled", "Enabled"]),
            ),
            mode: Schema.optional(Schema.Literals(["Prevention", "Detection"])),
            defaultRedirectUrl: Schema.optional(Schema.String),
            defaultCustomBlockResponseStatusCode: Schema.optional(
              Schema.Literals([200, 403, 405, 406, 429]),
            ),
            defaultCustomBlockResponseBody: Schema.optional(Schema.String),
          }),
        ),
        rateLimitRules: Schema.optional(
          Schema.Struct({
            rules: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.String,
                  enabledState: Schema.optional(
                    Schema.Literals(["Disabled", "Enabled"]),
                  ),
                  priority: Schema.Number,
                  matchConditions: Schema.Array(
                    Schema.Struct({
                      matchVariable: Schema.Literals([
                        "RemoteAddr",
                        "SocketAddr",
                        "RequestMethod",
                        "RequestHeader",
                        "RequestUri",
                        "QueryString",
                        "RequestBody",
                        "Cookies",
                        "PostArgs",
                      ]),
                      selector: Schema.optional(Schema.String),
                      operator: Schema.Literals([
                        "Any",
                        "IPMatch",
                        "GeoMatch",
                        "Equal",
                        "Contains",
                        "LessThan",
                        "GreaterThan",
                        "LessThanOrEqual",
                        "GreaterThanOrEqual",
                        "BeginsWith",
                        "EndsWith",
                        "RegEx",
                      ]),
                      negateCondition: Schema.optional(Schema.Boolean),
                      matchValue: Schema.Array(Schema.String),
                      transforms: Schema.optional(
                        Schema.Array(
                          Schema.Literals([
                            "Lowercase",
                            "Uppercase",
                            "Trim",
                            "UrlDecode",
                            "UrlEncode",
                            "RemoveNulls",
                          ]),
                        ),
                      ),
                    }),
                  ),
                  action: Schema.Literals([
                    "Allow",
                    "Block",
                    "Log",
                    "Redirect",
                  ]),
                }),
              ),
            ),
          }),
        ),
        customRules: Schema.optional(
          Schema.Struct({
            rules: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.String,
                  enabledState: Schema.optional(
                    Schema.Literals(["Disabled", "Enabled"]),
                  ),
                  priority: Schema.Number,
                  matchConditions: Schema.Array(
                    Schema.Struct({
                      matchVariable: Schema.Literals([
                        "RemoteAddr",
                        "SocketAddr",
                        "RequestMethod",
                        "RequestHeader",
                        "RequestUri",
                        "QueryString",
                        "RequestBody",
                        "Cookies",
                        "PostArgs",
                      ]),
                      selector: Schema.optional(Schema.String),
                      operator: Schema.Literals([
                        "Any",
                        "IPMatch",
                        "GeoMatch",
                        "Equal",
                        "Contains",
                        "LessThan",
                        "GreaterThan",
                        "LessThanOrEqual",
                        "GreaterThanOrEqual",
                        "BeginsWith",
                        "EndsWith",
                        "RegEx",
                      ]),
                      negateCondition: Schema.optional(Schema.Boolean),
                      matchValue: Schema.Array(Schema.String),
                      transforms: Schema.optional(
                        Schema.Array(
                          Schema.Literals([
                            "Lowercase",
                            "Uppercase",
                            "Trim",
                            "UrlDecode",
                            "UrlEncode",
                            "RemoveNulls",
                          ]),
                        ),
                      ),
                    }),
                  ),
                  action: Schema.Literals([
                    "Allow",
                    "Block",
                    "Log",
                    "Redirect",
                  ]),
                }),
              ),
            ),
          }),
        ),
        managedRules: Schema.optional(
          Schema.Struct({
            managedRuleSets: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  ruleSetType: Schema.String,
                  ruleSetVersion: Schema.String,
                  anomalyScore: Schema.optional(Schema.Number),
                  ruleGroupOverrides: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        ruleGroupName: Schema.String,
                        rules: Schema.optional(
                          Schema.Array(
                            Schema.Struct({
                              ruleId: Schema.String,
                              enabledState: Schema.optional(
                                Schema.Literals(["Disabled", "Enabled"]),
                              ),
                              action: Schema.optional(
                                Schema.Literals([
                                  "Allow",
                                  "Block",
                                  "Log",
                                  "Redirect",
                                ]),
                              ),
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
        endpointLinks: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
            }),
          ),
        ),
        extendedProperties: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        provisioningState: Schema.optional(
          Schema.Literals(["Creating", "Succeeded", "Failed"]),
        ),
        resourceState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Enabling",
            "Enabled",
            "Disabling",
            "Disabled",
            "Deleting",
          ]),
        ),
      }),
    ),
    etag: Schema.optional(Schema.String),
    sku: Schema.Struct({
      name: Schema.optional(
        Schema.Literals([
          "Standard_Verizon",
          "Premium_Verizon",
          "Custom_Verizon",
          "Standard_Akamai",
          "Standard_ChinaCdn",
          "Standard_Microsoft",
          "Standard_AzureFrontDoor",
          "Premium_AzureFrontDoor",
          "Standard_955BandWidth_ChinaCdn",
          "Standard_AvgBandWidth_ChinaCdn",
          "StandardPlus_ChinaCdn",
          "StandardPlus_955BandWidth_ChinaCdn",
          "StandardPlus_AvgBandWidth_ChinaCdn",
        ]),
      ),
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/cdnWebApplicationFirewallPolicies/{policyName}",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<PoliciesCreateOrUpdateInput>;

// Output Schema
export interface PoliciesCreateOrUpdateOutput {
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
export const PoliciesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<PoliciesCreateOrUpdateOutput>;

// The operation
/**
 * Create or update policy with specified rule set name within a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param policyName - The name of the CdnWebApplicationFirewallPolicy.
 */
export const PoliciesCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: PoliciesCreateOrUpdateInput,
  outputSchema: PoliciesCreateOrUpdateOutput,
}));
// Input Schema
export interface PoliciesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  policyName: string;
}
export const PoliciesDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  policyName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/cdnWebApplicationFirewallPolicies/{policyName}",
    apiVersion: "2025-12-01",
  }),
) as unknown as Schema.Codec<PoliciesDeleteInput>;

// Output Schema
export type PoliciesDeleteOutput = void;
export const PoliciesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<PoliciesDeleteOutput>;

// The operation
/**
 * Deletes Policy
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param policyName - The name of the CdnWebApplicationFirewallPolicy.
 */
export const PoliciesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: PoliciesDeleteInput,
  outputSchema: PoliciesDeleteOutput,
}));
// Input Schema
export interface PoliciesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  policyName: string;
}
export const PoliciesGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  policyName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/cdnWebApplicationFirewallPolicies/{policyName}",
    apiVersion: "2025-12-01",
  }),
) as unknown as Schema.Codec<PoliciesGetInput>;

// Output Schema
export interface PoliciesGetOutput {
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
export const PoliciesGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<PoliciesGetOutput>;

// The operation
/**
 * Retrieve protection policy with specified name within a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param policyName - The name of the CdnWebApplicationFirewallPolicy.
 */
export const PoliciesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: PoliciesGetInput,
  outputSchema: PoliciesGetOutput,
}));
// Input Schema
export interface PoliciesListInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const PoliciesListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/cdnWebApplicationFirewallPolicies",
    apiVersion: "2025-12-01",
  }),
) as unknown as Schema.Codec<PoliciesListInput>;

// Output Schema
export interface PoliciesListOutput {
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
export const PoliciesListOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<PoliciesListOutput>;

// The operation
/**
 * Lists all of the protection policies within a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const PoliciesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: PoliciesListInput,
  outputSchema: PoliciesListOutput,
}));
// Input Schema
export interface PoliciesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  policyName: string;
  tags?: Record<string, string>;
}
export const PoliciesUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  policyName: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/cdnWebApplicationFirewallPolicies/{policyName}",
    apiVersion: "2025-12-01",
  }),
) as unknown as Schema.Codec<PoliciesUpdateInput>;

// Output Schema
export interface PoliciesUpdateOutput {
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
export const PoliciesUpdateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<PoliciesUpdateOutput>;

// The operation
/**
 * Update an existing CdnWebApplicationFirewallPolicy with the specified policy name under the specified subscription and resource group
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param policyName - The name of the CdnWebApplicationFirewallPolicy.
 */
export const PoliciesUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: PoliciesUpdateInput,
  outputSchema: PoliciesUpdateOutput,
}));
// Input Schema
export interface ProfilesCanMigrateInput {
  resourceGroupName: string;
  subscriptionId: string;
  classicResourceReference: { id?: string };
}
export const ProfilesCanMigrateInput =
  /*@__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    classicResourceReference: Schema.Struct({
      id: Schema.optional(Schema.String),
    }),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/canMigrate",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<ProfilesCanMigrateInput>;

// Output Schema
export interface ProfilesCanMigrateOutput {
  id?: string;
  type?: string;
  properties?: {
    canMigrate?: boolean;
    defaultSku?: "Standard_AzureFrontDoor" | "Premium_AzureFrontDoor";
    errors?: {
      code?: string;
      resourceName?: string;
      errorMessage?: string;
      nextSteps?: string;
    }[];
  };
}
export const ProfilesCanMigrateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        canMigrate: Schema.optional(Schema.Boolean),
        defaultSku: Schema.optional(
          Schema.Literals([
            "Standard_AzureFrontDoor",
            "Premium_AzureFrontDoor",
          ]),
        ),
        errors: Schema.optional(
          Schema.Array(
            Schema.Struct({
              code: Schema.optional(Schema.String),
              resourceName: Schema.optional(Schema.String),
              errorMessage: Schema.optional(Schema.String),
              nextSteps: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<ProfilesCanMigrateOutput>;

// The operation
/**
 * Checks if CDN profile can be migrated to Azure Frontdoor(Standard/Premium) profile.
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const ProfilesCanMigrate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ProfilesCanMigrateInput,
  outputSchema: ProfilesCanMigrateOutput,
}));
// Input Schema
export interface ProfilesCdnCanMigrateToAfdInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
}
export const ProfilesCdnCanMigrateToAfdInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/cdnCanMigrateToAfd",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<ProfilesCdnCanMigrateToAfdInput>;

// Output Schema
export interface ProfilesCdnCanMigrateToAfdOutput {
  id?: string;
  type?: string;
  properties?: {
    canMigrate?: boolean;
    defaultSku?: "Standard_AzureFrontDoor" | "Premium_AzureFrontDoor";
    errors?: {
      code?: string;
      resourceName?: string;
      errorMessage?: string;
      nextSteps?: string;
    }[];
  };
}
export const ProfilesCdnCanMigrateToAfdOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        canMigrate: Schema.optional(Schema.Boolean),
        defaultSku: Schema.optional(
          Schema.Literals([
            "Standard_AzureFrontDoor",
            "Premium_AzureFrontDoor",
          ]),
        ),
        errors: Schema.optional(
          Schema.Array(
            Schema.Struct({
              code: Schema.optional(Schema.String),
              resourceName: Schema.optional(Schema.String),
              errorMessage: Schema.optional(Schema.String),
              nextSteps: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<ProfilesCdnCanMigrateToAfdOutput>;

// The operation
/**
 * Checks if CDN profile can be migrated to Azure Frontdoor(Standard/Premium) profile.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 */
export const ProfilesCdnCanMigrateToAfd = /*@__PURE__*/ API.make(() => ({
  inputSchema: ProfilesCdnCanMigrateToAfdInput,
  outputSchema: ProfilesCdnCanMigrateToAfdOutput,
}));
// Input Schema
export interface ProfilesCdnMigrateToAfdInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  sku: {
    name?:
      | "Standard_Verizon"
      | "Premium_Verizon"
      | "Custom_Verizon"
      | "Standard_Akamai"
      | "Standard_ChinaCdn"
      | "Standard_Microsoft"
      | "Standard_AzureFrontDoor"
      | "Premium_AzureFrontDoor"
      | "Standard_955BandWidth_ChinaCdn"
      | "Standard_AvgBandWidth_ChinaCdn"
      | "StandardPlus_ChinaCdn"
      | "StandardPlus_955BandWidth_ChinaCdn"
      | "StandardPlus_AvgBandWidth_ChinaCdn";
  };
  migrationEndpointMappings?: { migratedFrom?: string; migratedTo?: string }[];
}
export const ProfilesCdnMigrateToAfdInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
    sku: Schema.Struct({
      name: Schema.optional(
        Schema.Literals([
          "Standard_Verizon",
          "Premium_Verizon",
          "Custom_Verizon",
          "Standard_Akamai",
          "Standard_ChinaCdn",
          "Standard_Microsoft",
          "Standard_AzureFrontDoor",
          "Premium_AzureFrontDoor",
          "Standard_955BandWidth_ChinaCdn",
          "Standard_AvgBandWidth_ChinaCdn",
          "StandardPlus_ChinaCdn",
          "StandardPlus_955BandWidth_ChinaCdn",
          "StandardPlus_AvgBandWidth_ChinaCdn",
        ]),
      ),
    }),
    migrationEndpointMappings: Schema.optional(
      Schema.Array(
        Schema.Struct({
          migratedFrom: Schema.optional(Schema.String),
          migratedTo: Schema.optional(Schema.String),
        }),
      ),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/cdnMigrateToAfd",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<ProfilesCdnMigrateToAfdInput>;

// Output Schema
export interface ProfilesCdnMigrateToAfdOutput {
  id?: string;
  type?: string;
  properties?: { migratedProfileResourceId?: { id?: string } };
}
export const ProfilesCdnMigrateToAfdOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        migratedProfileResourceId: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<ProfilesCdnMigrateToAfdOutput>;

// The operation
/**
 * Migrate the CDN profile to Azure Frontdoor(Standard/Premium) profile. This step prepares the profile for migration and will be followed by Commit to finalize the migration.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 */
export const ProfilesCdnMigrateToAfd = /*@__PURE__*/ API.make(() => ({
  inputSchema: ProfilesCdnMigrateToAfdInput,
  outputSchema: ProfilesCdnMigrateToAfdOutput,
}));
// Input Schema
export interface ProfilesCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  properties?: {
    resourceState?:
      | "Creating"
      | "Active"
      | "Deleting"
      | "Disabled"
      | "Migrating"
      | "Migrated"
      | "PendingMigrationCommit"
      | "CommittingMigration"
      | "AbortingMigration";
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Updating"
      | "Deleting"
      | "Creating";
    extendedProperties?: Record<string, string>;
    frontDoorId?: string;
    originResponseTimeoutSeconds?: number;
    logScrubbing?: {
      state?: "Enabled" | "Disabled";
      scrubbingRules?: {
        matchVariable:
          | "RequestIPAddress"
          | "RequestUri"
          | "QueryStringArgNames";
        selectorMatchOperator: "EqualsAny";
        selector?: string;
        state?: "Enabled" | "Disabled";
      }[];
    };
  };
  sku: {
    name?:
      | "Standard_Verizon"
      | "Premium_Verizon"
      | "Custom_Verizon"
      | "Standard_Akamai"
      | "Standard_ChinaCdn"
      | "Standard_Microsoft"
      | "Standard_AzureFrontDoor"
      | "Premium_AzureFrontDoor"
      | "Standard_955BandWidth_ChinaCdn"
      | "Standard_AvgBandWidth_ChinaCdn"
      | "StandardPlus_ChinaCdn"
      | "StandardPlus_955BandWidth_ChinaCdn"
      | "StandardPlus_AvgBandWidth_ChinaCdn";
  };
  kind?: string;
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
export const ProfilesCreateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  profileName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      resourceState: Schema.optional(
        Schema.Literals([
          "Creating",
          "Active",
          "Deleting",
          "Disabled",
          "Migrating",
          "Migrated",
          "PendingMigrationCommit",
          "CommittingMigration",
          "AbortingMigration",
        ]),
      ),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Succeeded",
          "Failed",
          "Updating",
          "Deleting",
          "Creating",
        ]),
      ),
      extendedProperties: Schema.optional(
        Schema.Record(Schema.String, Schema.String),
      ),
      frontDoorId: Schema.optional(Schema.String),
      originResponseTimeoutSeconds: Schema.optional(Schema.Number),
      logScrubbing: Schema.optional(
        Schema.Struct({
          state: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
          scrubbingRules: Schema.optional(
            Schema.Array(
              Schema.Struct({
                matchVariable: Schema.Literals([
                  "RequestIPAddress",
                  "RequestUri",
                  "QueryStringArgNames",
                ]),
                selectorMatchOperator: Schema.Literals(["EqualsAny"]),
                selector: Schema.optional(Schema.String),
                state: Schema.optional(
                  Schema.Literals(["Enabled", "Disabled"]),
                ),
              }),
            ),
          ),
        }),
      ),
    }),
  ),
  sku: Schema.Struct({
    name: Schema.optional(
      Schema.Literals([
        "Standard_Verizon",
        "Premium_Verizon",
        "Custom_Verizon",
        "Standard_Akamai",
        "Standard_ChinaCdn",
        "Standard_Microsoft",
        "Standard_AzureFrontDoor",
        "Premium_AzureFrontDoor",
        "Standard_955BandWidth_ChinaCdn",
        "Standard_AvgBandWidth_ChinaCdn",
        "StandardPlus_ChinaCdn",
        "StandardPlus_955BandWidth_ChinaCdn",
        "StandardPlus_AvgBandWidth_ChinaCdn",
      ]),
    ),
  }),
  kind: Schema.optional(Schema.String),
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
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}",
    apiVersion: "2025-12-01",
  }),
) as unknown as Schema.Codec<ProfilesCreateInput>;

// Output Schema
export interface ProfilesCreateOutput {
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
export const ProfilesCreateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ProfilesCreateOutput>;

// The operation
/**
 * Creates a new Azure Front Door Standard or Azure Front Door Premium or CDN profile with a profile name under the specified subscription and resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 */
export const ProfilesCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ProfilesCreateInput,
  outputSchema: ProfilesCreateOutput,
}));
// Input Schema
export interface ProfilesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
}
export const ProfilesDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  profileName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}",
    apiVersion: "2025-12-01",
  }),
) as unknown as Schema.Codec<ProfilesDeleteInput>;

// Output Schema
export type ProfilesDeleteOutput = void;
export const ProfilesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ProfilesDeleteOutput>;

// The operation
/**
 * Deletes an existing  Azure Front Door Standard or Azure Front Door Premium or CDN profile with the specified parameters. Deleting a profile will result in the deletion of all of the sub-resources including endpoints, origins and custom domains.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 */
export const ProfilesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: ProfilesDeleteInput,
  outputSchema: ProfilesDeleteOutput,
}));
// Input Schema
export interface ProfilesGenerateSsoUriInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
}
export const ProfilesGenerateSsoUriInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/generateSsoUri",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<ProfilesGenerateSsoUriInput>;

// Output Schema
export interface ProfilesGenerateSsoUriOutput {
  ssoUriValue?: string;
}
export const ProfilesGenerateSsoUriOutput =
  /*@__PURE__*/ Schema.Struct({
    ssoUriValue: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ProfilesGenerateSsoUriOutput>;

// The operation
/**
 * Generates a dynamic SSO URI used to sign in to the CDN supplemental portal. Supplemental portal is used to configure advanced feature capabilities that are not yet available in the Azure portal, such as core reports in a standard profile; rules engine, advanced HTTP reports, and real-time stats and alerts in a premium profile. The SSO URI changes approximately every 10 minutes.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 */
export const ProfilesGenerateSsoUri = /*@__PURE__*/ API.make(() => ({
  inputSchema: ProfilesGenerateSsoUriInput,
  outputSchema: ProfilesGenerateSsoUriOutput,
}));
// Input Schema
export interface ProfilesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
}
export const ProfilesGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  profileName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}",
    apiVersion: "2025-12-01",
  }),
) as unknown as Schema.Codec<ProfilesGetInput>;

// Output Schema
export interface ProfilesGetOutput {
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
export const ProfilesGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ProfilesGetOutput>;

// The operation
/**
 * Gets an Azure Front Door Standard or Azure Front Door Premium or CDN profile with the specified profile name under the specified subscription and resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 */
export const ProfilesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ProfilesGetInput,
  outputSchema: ProfilesGetOutput,
}));
// Input Schema
export interface ProfilesListInput {
  subscriptionId: string;
}
export const ProfilesListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.Cdn/profiles",
    apiVersion: "2025-12-01",
  }),
) as unknown as Schema.Codec<ProfilesListInput>;

// Output Schema
export interface ProfilesListOutput {
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
export const ProfilesListOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ProfilesListOutput>;

// The operation
/**
 * Lists all of the Azure Front Door Standard, Azure Front Door Premium, and CDN profiles within an Azure subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const ProfilesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: ProfilesListInput,
  outputSchema: ProfilesListOutput,
}));
// Input Schema
export interface ProfilesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const ProfilesListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<ProfilesListByResourceGroupInput>;

// Output Schema
export interface ProfilesListByResourceGroupOutput {
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
export const ProfilesListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<ProfilesListByResourceGroupOutput>;

// The operation
/**
 * Lists all of the Azure Front Door Standard, Azure Front Door Premium, and CDN profiles within a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ProfilesListByResourceGroup = /*@__PURE__*/ API.make(() => ({
  inputSchema: ProfilesListByResourceGroupInput,
  outputSchema: ProfilesListByResourceGroupOutput,
}));
// Input Schema
export interface ProfilesListResourceUsageInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
}
export const ProfilesListResourceUsageInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/checkResourceUsage",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<ProfilesListResourceUsageInput>;

// Output Schema
export interface ProfilesListResourceUsageOutput {
  value: {
    resourceType?: string;
    unit?: "count";
    currentValue?: number;
    limit?: number;
  }[];
  nextLink?: string;
}
export const ProfilesListResourceUsageOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        resourceType: Schema.optional(Schema.String),
        unit: Schema.optional(Schema.Literals(["count"])),
        currentValue: Schema.optional(Schema.Number),
        limit: Schema.optional(Schema.Number),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ProfilesListResourceUsageOutput>;

// The operation
/**
 * Checks the quota and actual usage of endpoints under the given Azure Front Door Standard or Azure Front Door Premium or CDN profile.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 */
export const ProfilesListResourceUsage = /*@__PURE__*/ API.make(() => ({
  inputSchema: ProfilesListResourceUsageInput,
  outputSchema: ProfilesListResourceUsageOutput,
}));
// Input Schema
export interface ProfilesListSupportedOptimizationTypesInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
}
export const ProfilesListSupportedOptimizationTypesInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/getSupportedOptimizationTypes",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<ProfilesListSupportedOptimizationTypesInput>;

// Output Schema
export interface ProfilesListSupportedOptimizationTypesOutput {
  supportedOptimizationTypes?: (
    | "GeneralWebDelivery"
    | "GeneralMediaStreaming"
    | "VideoOnDemandMediaStreaming"
    | "LargeFileDownload"
    | "DynamicSiteAcceleration"
  )[];
}
export const ProfilesListSupportedOptimizationTypesOutput =
  /*@__PURE__*/ Schema.Struct({
    supportedOptimizationTypes: Schema.optional(
      Schema.Array(
        Schema.Literals([
          "GeneralWebDelivery",
          "GeneralMediaStreaming",
          "VideoOnDemandMediaStreaming",
          "LargeFileDownload",
          "DynamicSiteAcceleration",
        ]),
      ),
    ),
  }) as unknown as Schema.Codec<ProfilesListSupportedOptimizationTypesOutput>;

// The operation
/**
 * Gets the supported optimization types for the current profile. A user can create an endpoint with an optimization type from the listed values.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 */
export const ProfilesListSupportedOptimizationTypes =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ProfilesListSupportedOptimizationTypesInput,
    outputSchema: ProfilesListSupportedOptimizationTypesOutput,
  }));
// Input Schema
export interface ProfilesMigrateInput {
  resourceGroupName: string;
  subscriptionId: string;
  sku: {
    name?:
      | "Standard_Verizon"
      | "Premium_Verizon"
      | "Custom_Verizon"
      | "Standard_Akamai"
      | "Standard_ChinaCdn"
      | "Standard_Microsoft"
      | "Standard_AzureFrontDoor"
      | "Premium_AzureFrontDoor"
      | "Standard_955BandWidth_ChinaCdn"
      | "Standard_AvgBandWidth_ChinaCdn"
      | "StandardPlus_ChinaCdn"
      | "StandardPlus_955BandWidth_ChinaCdn"
      | "StandardPlus_AvgBandWidth_ChinaCdn";
  };
  classicResourceReference: { id?: string };
  profileName: string;
  migrationWebApplicationFirewallMappings?: {
    migratedFrom?: { id?: string };
    migratedTo?: { id?: string };
  }[];
}
export const ProfilesMigrateInput = /*@__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
  sku: Schema.Struct({
    name: Schema.optional(
      Schema.Literals([
        "Standard_Verizon",
        "Premium_Verizon",
        "Custom_Verizon",
        "Standard_Akamai",
        "Standard_ChinaCdn",
        "Standard_Microsoft",
        "Standard_AzureFrontDoor",
        "Premium_AzureFrontDoor",
        "Standard_955BandWidth_ChinaCdn",
        "Standard_AvgBandWidth_ChinaCdn",
        "StandardPlus_ChinaCdn",
        "StandardPlus_955BandWidth_ChinaCdn",
        "StandardPlus_AvgBandWidth_ChinaCdn",
      ]),
    ),
  }),
  classicResourceReference: Schema.Struct({
    id: Schema.optional(Schema.String),
  }),
  profileName: Schema.String,
  migrationWebApplicationFirewallMappings: Schema.optional(
    Schema.Array(
      Schema.Struct({
        migratedFrom: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
          }),
        ),
        migratedTo: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  ),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/migrate",
    apiVersion: "2025-12-01",
  }),
) as unknown as Schema.Codec<ProfilesMigrateInput>;

// Output Schema
export interface ProfilesMigrateOutput {
  id?: string;
  type?: string;
  properties?: { migratedProfileResourceId?: { id?: string } };
}
export const ProfilesMigrateOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  properties: Schema.optional(
    Schema.Struct({
      migratedProfileResourceId: Schema.optional(
        Schema.Struct({
          id: Schema.optional(Schema.String),
        }),
      ),
    }),
  ),
}) as unknown as Schema.Codec<ProfilesMigrateOutput>;

// The operation
/**
 * Migrate the CDN profile to Azure Frontdoor(Standard/Premium) profile. The change need to be committed after this.
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const ProfilesMigrate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ProfilesMigrateInput,
  outputSchema: ProfilesMigrateOutput,
}));
// Input Schema
export interface ProfilesMigrationAbortInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
}
export const ProfilesMigrationAbortInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/migrationAbort",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<ProfilesMigrationAbortInput>;

// Output Schema
export type ProfilesMigrationAbortOutput = void;
export const ProfilesMigrationAbortOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ProfilesMigrationAbortOutput>;

// The operation
/**
 * Abort the migration to Azure Frontdoor Premium/Standard.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 */
export const ProfilesMigrationAbort = /*@__PURE__*/ API.make(() => ({
  inputSchema: ProfilesMigrationAbortInput,
  outputSchema: ProfilesMigrationAbortOutput,
}));
// Input Schema
export interface ProfilesMigrationCommitInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
}
export const ProfilesMigrationCommitInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/migrationCommit",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<ProfilesMigrationCommitInput>;

// Output Schema
export type ProfilesMigrationCommitOutput = void;
export const ProfilesMigrationCommitOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ProfilesMigrationCommitOutput>;

// The operation
/**
 * Commit the migrated Azure Frontdoor(Standard/Premium) profile.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 */
export const ProfilesMigrationCommit = /*@__PURE__*/ API.make(() => ({
  inputSchema: ProfilesMigrationCommitInput,
  outputSchema: ProfilesMigrationCommitOutput,
}));
// Input Schema
export interface ProfilesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  tags?: Record<string, string>;
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
  properties?: {
    originResponseTimeoutSeconds?: number;
    logScrubbing?: {
      state?: "Enabled" | "Disabled";
      scrubbingRules?: {
        matchVariable:
          | "RequestIPAddress"
          | "RequestUri"
          | "QueryStringArgNames";
        selectorMatchOperator: "EqualsAny";
        selector?: string;
        state?: "Enabled" | "Disabled";
      }[];
    };
  };
}
export const ProfilesUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  profileName: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
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
  properties: Schema.optional(
    Schema.Struct({
      originResponseTimeoutSeconds: Schema.optional(Schema.Number),
      logScrubbing: Schema.optional(
        Schema.Struct({
          state: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
          scrubbingRules: Schema.optional(
            Schema.Array(
              Schema.Struct({
                matchVariable: Schema.Literals([
                  "RequestIPAddress",
                  "RequestUri",
                  "QueryStringArgNames",
                ]),
                selectorMatchOperator: Schema.Literals(["EqualsAny"]),
                selector: Schema.optional(Schema.String),
                state: Schema.optional(
                  Schema.Literals(["Enabled", "Disabled"]),
                ),
              }),
            ),
          ),
        }),
      ),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}",
    apiVersion: "2025-12-01",
  }),
) as unknown as Schema.Codec<ProfilesUpdateInput>;

// Output Schema
export interface ProfilesUpdateOutput {
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
export const ProfilesUpdateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ProfilesUpdateOutput>;

// The operation
/**
 * Updates an existing Azure Front Door Standard or Azure Front Door Premium or CDN profile with the specified profile name under the specified subscription and resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 */
export const ProfilesUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: ProfilesUpdateInput,
  outputSchema: ProfilesUpdateOutput,
}));
// Input Schema
export interface ResourceUsageListInput {
  subscriptionId: string;
}
export const ResourceUsageListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.Cdn/checkResourceUsage",
    apiVersion: "2025-12-01",
  }),
) as unknown as Schema.Codec<ResourceUsageListInput>;

// Output Schema
export interface ResourceUsageListOutput {
  value: {
    resourceType?: string;
    unit?: "count";
    currentValue?: number;
    limit?: number;
  }[];
  nextLink?: string;
}
export const ResourceUsageListOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        resourceType: Schema.optional(Schema.String),
        unit: Schema.optional(Schema.Literals(["count"])),
        currentValue: Schema.optional(Schema.Number),
        limit: Schema.optional(Schema.Number),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ResourceUsageListOutput>;

// The operation
/**
 * Check the quota and actual usage of the CDN profiles under the given subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const ResourceUsageList = /*@__PURE__*/ API.make(() => ({
  inputSchema: ResourceUsageListInput,
  outputSchema: ResourceUsageListOutput,
}));
// Input Schema
export interface RoutesCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  endpointName: string;
  routeName: string;
  properties?: {
    endpointName?: string;
    customDomains?: { id?: string; isActive?: boolean }[];
    originGroup?: { id?: string };
    originPath?: string;
    ruleSets?: { id?: string }[];
    supportedProtocols?: ("Http" | "Https")[];
    patternsToMatch?: string[];
    cacheConfiguration?: {
      queryStringCachingBehavior?:
        | "IgnoreQueryString"
        | "UseQueryString"
        | "IgnoreSpecifiedQueryStrings"
        | "IncludeSpecifiedQueryStrings";
      queryParameters?: string;
      compressionSettings?: {
        contentTypesToCompress?: string[];
        isCompressionEnabled?: boolean;
      };
    };
    forwardingProtocol?: "HttpOnly" | "HttpsOnly" | "MatchRequest";
    linkToDefaultDomain?: "Enabled" | "Disabled";
    httpsRedirect?: "Enabled" | "Disabled";
    enabledState?: "Enabled" | "Disabled";
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Updating"
      | "Deleting"
      | "Creating";
    deploymentStatus?: "NotStarted" | "InProgress" | "Succeeded" | "Failed";
  };
}
export const RoutesCreateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  profileName: Schema.String.pipe(T.PathParam()),
  endpointName: Schema.String.pipe(T.PathParam()),
  routeName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      endpointName: Schema.optional(Schema.String),
      customDomains: Schema.optional(
        Schema.Array(
          Schema.Struct({
            id: Schema.optional(Schema.String),
            isActive: Schema.optional(Schema.Boolean),
          }),
        ),
      ),
      originGroup: Schema.optional(
        Schema.Struct({
          id: Schema.optional(Schema.String),
        }),
      ),
      originPath: Schema.optional(Schema.String),
      ruleSets: Schema.optional(
        Schema.Array(
          Schema.Struct({
            id: Schema.optional(Schema.String),
          }),
        ),
      ),
      supportedProtocols: Schema.optional(
        Schema.Array(Schema.Literals(["Http", "Https"])),
      ),
      patternsToMatch: Schema.optional(Schema.Array(Schema.String)),
      cacheConfiguration: Schema.optional(
        Schema.Struct({
          queryStringCachingBehavior: Schema.optional(
            Schema.Literals([
              "IgnoreQueryString",
              "UseQueryString",
              "IgnoreSpecifiedQueryStrings",
              "IncludeSpecifiedQueryStrings",
            ]),
          ),
          queryParameters: Schema.optional(Schema.String),
          compressionSettings: Schema.optional(
            Schema.Struct({
              contentTypesToCompress: Schema.optional(
                Schema.Array(Schema.String),
              ),
              isCompressionEnabled: Schema.optional(Schema.Boolean),
            }),
          ),
        }),
      ),
      forwardingProtocol: Schema.optional(
        Schema.Literals(["HttpOnly", "HttpsOnly", "MatchRequest"]),
      ),
      linkToDefaultDomain: Schema.optional(
        Schema.Literals(["Enabled", "Disabled"]),
      ),
      httpsRedirect: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
      enabledState: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Succeeded",
          "Failed",
          "Updating",
          "Deleting",
          "Creating",
        ]),
      ),
      deploymentStatus: Schema.optional(
        Schema.Literals(["NotStarted", "InProgress", "Succeeded", "Failed"]),
      ),
    }),
  ),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/afdEndpoints/{endpointName}/routes/{routeName}",
    apiVersion: "2025-12-01",
  }),
) as unknown as Schema.Codec<RoutesCreateInput>;

// Output Schema
export interface RoutesCreateOutput {
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
export const RoutesCreateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<RoutesCreateOutput>;

// The operation
/**
 * Creates a new route with the specified route name under the specified subscription, resource group, profile, and AzureFrontDoor endpoint.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 * @param endpointName - Name of the endpoint under the profile which is unique globally.
 * @param routeName - Name of the routing rule.
 */
export const RoutesCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: RoutesCreateInput,
  outputSchema: RoutesCreateOutput,
}));
// Input Schema
export interface RoutesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  endpointName: string;
  routeName: string;
}
export const RoutesDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  profileName: Schema.String.pipe(T.PathParam()),
  endpointName: Schema.String.pipe(T.PathParam()),
  routeName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/afdEndpoints/{endpointName}/routes/{routeName}",
    apiVersion: "2025-12-01",
  }),
) as unknown as Schema.Codec<RoutesDeleteInput>;

// Output Schema
export type RoutesDeleteOutput = void;
export const RoutesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<RoutesDeleteOutput>;

// The operation
/**
 * Deletes an existing route with the specified route name under the specified subscription, resource group, profile, and AzureFrontDoor endpoint.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 * @param endpointName - Name of the endpoint under the profile which is unique globally.
 * @param routeName - Name of the routing rule.
 */
export const RoutesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: RoutesDeleteInput,
  outputSchema: RoutesDeleteOutput,
}));
// Input Schema
export interface RoutesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  endpointName: string;
  routeName: string;
}
export const RoutesGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  profileName: Schema.String.pipe(T.PathParam()),
  endpointName: Schema.String.pipe(T.PathParam()),
  routeName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/afdEndpoints/{endpointName}/routes/{routeName}",
    apiVersion: "2025-12-01",
  }),
) as unknown as Schema.Codec<RoutesGetInput>;

// Output Schema
export interface RoutesGetOutput {
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
export const RoutesGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<RoutesGetOutput>;

// The operation
/**
 * Gets an existing route with the specified route name under the specified subscription, resource group, profile, and AzureFrontDoor endpoint.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 * @param endpointName - Name of the endpoint under the profile which is unique globally.
 * @param routeName - Name of the routing rule.
 */
export const RoutesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: RoutesGetInput,
  outputSchema: RoutesGetOutput,
}));
// Input Schema
export interface RoutesListByEndpointInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  endpointName: string;
}
export const RoutesListByEndpointInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
    endpointName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/afdEndpoints/{endpointName}/routes",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<RoutesListByEndpointInput>;

// Output Schema
export interface RoutesListByEndpointOutput {
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
export const RoutesListByEndpointOutput =
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
  }) as unknown as Schema.Codec<RoutesListByEndpointOutput>;

// The operation
/**
 * Lists all of the existing origins within a profile.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 * @param endpointName - Name of the endpoint under the profile which is unique globally.
 */
export const RoutesListByEndpoint = /*@__PURE__*/ API.make(() => ({
  inputSchema: RoutesListByEndpointInput,
  outputSchema: RoutesListByEndpointOutput,
}));
// Input Schema
export interface RoutesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  endpointName: string;
  routeName: string;
  properties?: {
    endpointName?: string;
    customDomains?: { id?: string; isActive?: boolean }[];
    originGroup?: { id?: string };
    originPath?: string;
    ruleSets?: { id?: string }[];
    supportedProtocols?: ("Http" | "Https")[];
    patternsToMatch?: string[];
    cacheConfiguration?: {
      queryStringCachingBehavior?:
        | "IgnoreQueryString"
        | "UseQueryString"
        | "IgnoreSpecifiedQueryStrings"
        | "IncludeSpecifiedQueryStrings";
      queryParameters?: string;
      compressionSettings?: {
        contentTypesToCompress?: string[];
        isCompressionEnabled?: boolean;
      };
    };
    forwardingProtocol?: "HttpOnly" | "HttpsOnly" | "MatchRequest";
    linkToDefaultDomain?: "Enabled" | "Disabled";
    httpsRedirect?: "Enabled" | "Disabled";
    enabledState?: "Enabled" | "Disabled";
  };
}
export const RoutesUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  profileName: Schema.String.pipe(T.PathParam()),
  endpointName: Schema.String.pipe(T.PathParam()),
  routeName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      endpointName: Schema.optional(Schema.String),
      customDomains: Schema.optional(
        Schema.Array(
          Schema.Struct({
            id: Schema.optional(Schema.String),
            isActive: Schema.optional(Schema.Boolean),
          }),
        ),
      ),
      originGroup: Schema.optional(
        Schema.Struct({
          id: Schema.optional(Schema.String),
        }),
      ),
      originPath: Schema.optional(Schema.String),
      ruleSets: Schema.optional(
        Schema.Array(
          Schema.Struct({
            id: Schema.optional(Schema.String),
          }),
        ),
      ),
      supportedProtocols: Schema.optional(
        Schema.Array(Schema.Literals(["Http", "Https"])),
      ),
      patternsToMatch: Schema.optional(Schema.Array(Schema.String)),
      cacheConfiguration: Schema.optional(
        Schema.Struct({
          queryStringCachingBehavior: Schema.optional(
            Schema.Literals([
              "IgnoreQueryString",
              "UseQueryString",
              "IgnoreSpecifiedQueryStrings",
              "IncludeSpecifiedQueryStrings",
            ]),
          ),
          queryParameters: Schema.optional(Schema.String),
          compressionSettings: Schema.optional(
            Schema.Struct({
              contentTypesToCompress: Schema.optional(
                Schema.Array(Schema.String),
              ),
              isCompressionEnabled: Schema.optional(Schema.Boolean),
            }),
          ),
        }),
      ),
      forwardingProtocol: Schema.optional(
        Schema.Literals(["HttpOnly", "HttpsOnly", "MatchRequest"]),
      ),
      linkToDefaultDomain: Schema.optional(
        Schema.Literals(["Enabled", "Disabled"]),
      ),
      httpsRedirect: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
      enabledState: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/afdEndpoints/{endpointName}/routes/{routeName}",
    apiVersion: "2025-12-01",
  }),
) as unknown as Schema.Codec<RoutesUpdateInput>;

// Output Schema
export interface RoutesUpdateOutput {
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
export const RoutesUpdateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<RoutesUpdateOutput>;

// The operation
/**
 * Updates an existing route with the specified route name under the specified subscription, resource group, profile, and AzureFrontDoor endpoint.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 * @param endpointName - Name of the endpoint under the profile which is unique globally.
 * @param routeName - Name of the routing rule.
 */
export const RoutesUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: RoutesUpdateInput,
  outputSchema: RoutesUpdateOutput,
}));
// Input Schema
export interface RulesCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  ruleSetName: string;
  ruleName: string;
  properties?: {
    ruleSetName?: string;
    order?: number;
    conditions?: {
      name:
        | "RemoteAddress"
        | "RequestMethod"
        | "QueryString"
        | "PostArgs"
        | "RequestUri"
        | "RequestHeader"
        | "RequestBody"
        | "RequestScheme"
        | "UrlPath"
        | "UrlFileExtension"
        | "UrlFileName"
        | "HttpVersion"
        | "Cookies"
        | "IsDevice"
        | "SocketAddr"
        | "ClientPort"
        | "ServerPort"
        | "HostName"
        | "SslProtocol";
    }[];
    actions?: {
      name:
        | "CacheExpiration"
        | "CacheKeyQueryString"
        | "ModifyRequestHeader"
        | "ModifyResponseHeader"
        | "UrlRedirect"
        | "UrlRewrite"
        | "UrlSigning"
        | "OriginGroupOverride"
        | "RouteConfigurationOverride";
    }[];
    matchProcessingBehavior?: "Continue" | "Stop";
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Updating"
      | "Deleting"
      | "Creating";
    deploymentStatus?: "NotStarted" | "InProgress" | "Succeeded" | "Failed";
  };
}
export const RulesCreateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  profileName: Schema.String.pipe(T.PathParam()),
  ruleSetName: Schema.String.pipe(T.PathParam()),
  ruleName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      ruleSetName: Schema.optional(Schema.String),
      order: Schema.optional(Schema.Number),
      conditions: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.Literals([
              "RemoteAddress",
              "RequestMethod",
              "QueryString",
              "PostArgs",
              "RequestUri",
              "RequestHeader",
              "RequestBody",
              "RequestScheme",
              "UrlPath",
              "UrlFileExtension",
              "UrlFileName",
              "HttpVersion",
              "Cookies",
              "IsDevice",
              "SocketAddr",
              "ClientPort",
              "ServerPort",
              "HostName",
              "SslProtocol",
            ]),
          }),
        ),
      ),
      actions: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.Literals([
              "CacheExpiration",
              "CacheKeyQueryString",
              "ModifyRequestHeader",
              "ModifyResponseHeader",
              "UrlRedirect",
              "UrlRewrite",
              "UrlSigning",
              "OriginGroupOverride",
              "RouteConfigurationOverride",
            ]),
          }),
        ),
      ),
      matchProcessingBehavior: Schema.optional(
        Schema.Literals(["Continue", "Stop"]),
      ),
      provisioningState: Schema.optional(
        Schema.Literals([
          "Succeeded",
          "Failed",
          "Updating",
          "Deleting",
          "Creating",
        ]),
      ),
      deploymentStatus: Schema.optional(
        Schema.Literals(["NotStarted", "InProgress", "Succeeded", "Failed"]),
      ),
    }),
  ),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/ruleSets/{ruleSetName}/rules/{ruleName}",
    apiVersion: "2025-12-01",
  }),
) as unknown as Schema.Codec<RulesCreateInput>;

// Output Schema
export interface RulesCreateOutput {
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
export const RulesCreateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<RulesCreateOutput>;

// The operation
/**
 * Creates a new delivery rule within the specified rule set.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 * @param ruleSetName - Name of the rule set under the profile which is unique globally.
 * @param ruleName - Name of the delivery rule which is unique within the endpoint.
 */
export const RulesCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: RulesCreateInput,
  outputSchema: RulesCreateOutput,
}));
// Input Schema
export interface RulesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  ruleSetName: string;
  ruleName: string;
}
export const RulesDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  profileName: Schema.String.pipe(T.PathParam()),
  ruleSetName: Schema.String.pipe(T.PathParam()),
  ruleName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/ruleSets/{ruleSetName}/rules/{ruleName}",
    apiVersion: "2025-12-01",
  }),
) as unknown as Schema.Codec<RulesDeleteInput>;

// Output Schema
export type RulesDeleteOutput = void;
export const RulesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<RulesDeleteOutput>;

// The operation
/**
 * Deletes an existing delivery rule within a rule set.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 * @param ruleSetName - Name of the rule set under the profile which is unique globally.
 * @param ruleName - Name of the delivery rule which is unique within the endpoint.
 */
export const RulesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: RulesDeleteInput,
  outputSchema: RulesDeleteOutput,
}));
// Input Schema
export interface RuleSetsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  ruleSetName: string;
  properties?: {
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Updating"
      | "Deleting"
      | "Creating";
    deploymentStatus?: "NotStarted" | "InProgress" | "Succeeded" | "Failed";
  };
}
export const RuleSetsCreateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  profileName: Schema.String.pipe(T.PathParam()),
  ruleSetName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      provisioningState: Schema.optional(
        Schema.Literals([
          "Succeeded",
          "Failed",
          "Updating",
          "Deleting",
          "Creating",
        ]),
      ),
      deploymentStatus: Schema.optional(
        Schema.Literals(["NotStarted", "InProgress", "Succeeded", "Failed"]),
      ),
    }),
  ),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/ruleSets/{ruleSetName}",
    apiVersion: "2025-12-01",
  }),
) as unknown as Schema.Codec<RuleSetsCreateInput>;

// Output Schema
export interface RuleSetsCreateOutput {
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
export const RuleSetsCreateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<RuleSetsCreateOutput>;

// The operation
/**
 * Creates or update a batch rule set within the specified profile along with the rules associate to it.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 * @param ruleSetName - Name of the rule set under the profile which is unique globally.
 */
export const RuleSetsCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: RuleSetsCreateInput,
  outputSchema: RuleSetsCreateOutput,
}));
// Input Schema
export interface RuleSetsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  ruleSetName: string;
}
export const RuleSetsDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  profileName: Schema.String.pipe(T.PathParam()),
  ruleSetName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/ruleSets/{ruleSetName}",
    apiVersion: "2025-12-01",
  }),
) as unknown as Schema.Codec<RuleSetsDeleteInput>;

// Output Schema
export type RuleSetsDeleteOutput = void;
export const RuleSetsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<RuleSetsDeleteOutput>;

// The operation
/**
 * Deletes an existing AzureFrontDoor rule set with the specified rule set name under the specified subscription, resource group and profile.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 * @param ruleSetName - Name of the rule set under the profile which is unique globally.
 */
export const RuleSetsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: RuleSetsDeleteInput,
  outputSchema: RuleSetsDeleteOutput,
}));
// Input Schema
export interface RuleSetsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  ruleSetName: string;
}
export const RuleSetsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  profileName: Schema.String.pipe(T.PathParam()),
  ruleSetName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/ruleSets/{ruleSetName}",
    apiVersion: "2025-12-01",
  }),
) as unknown as Schema.Codec<RuleSetsGetInput>;

// Output Schema
export interface RuleSetsGetOutput {
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
export const RuleSetsGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<RuleSetsGetOutput>;

// The operation
/**
 * Gets an existing AzureFrontDoor rule set with the specified rule set name under the specified subscription, resource group and profile.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 * @param ruleSetName - Name of the rule set under the profile which is unique globally.
 */
export const RuleSetsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: RuleSetsGetInput,
  outputSchema: RuleSetsGetOutput,
}));
// Input Schema
export interface RuleSetsListByProfileInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
}
export const RuleSetsListByProfileInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/ruleSets",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<RuleSetsListByProfileInput>;

// Output Schema
export interface RuleSetsListByProfileOutput {
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
export const RuleSetsListByProfileOutput =
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
  }) as unknown as Schema.Codec<RuleSetsListByProfileOutput>;

// The operation
/**
 * Lists existing AzureFrontDoor rule sets within a profile.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 */
export const RuleSetsListByProfile = /*@__PURE__*/ API.make(() => ({
  inputSchema: RuleSetsListByProfileInput,
  outputSchema: RuleSetsListByProfileOutput,
}));
// Input Schema
export interface RuleSetsListResourceUsageInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  ruleSetName: string;
}
export const RuleSetsListResourceUsageInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
    ruleSetName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/ruleSets/{ruleSetName}/usages",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<RuleSetsListResourceUsageInput>;

// Output Schema
export interface RuleSetsListResourceUsageOutput {
  value: {
    id?: string;
    unit: "Count";
    currentValue: number;
    limit: number;
    name: { value?: string; localizedValue?: string };
  }[];
  nextLink?: string;
}
export const RuleSetsListResourceUsageOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        unit: Schema.Literals(["Count"]),
        currentValue: Schema.Number,
        limit: Schema.Number,
        name: Schema.Struct({
          value: Schema.optional(Schema.String),
          localizedValue: Schema.optional(Schema.String),
        }),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<RuleSetsListResourceUsageOutput>;

// The operation
/**
 * Checks the quota and actual usage of endpoints under the given Azure Front Door profile.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 * @param ruleSetName - Name of the rule set under the profile which is unique globally.
 */
export const RuleSetsListResourceUsage = /*@__PURE__*/ API.make(() => ({
  inputSchema: RuleSetsListResourceUsageInput,
  outputSchema: RuleSetsListResourceUsageOutput,
}));
// Input Schema
export interface RulesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  ruleSetName: string;
  ruleName: string;
}
export const RulesGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  profileName: Schema.String.pipe(T.PathParam()),
  ruleSetName: Schema.String.pipe(T.PathParam()),
  ruleName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/ruleSets/{ruleSetName}/rules/{ruleName}",
    apiVersion: "2025-12-01",
  }),
) as unknown as Schema.Codec<RulesGetInput>;

// Output Schema
export interface RulesGetOutput {
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
export const RulesGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<RulesGetOutput>;

// The operation
/**
 * Gets an existing delivery rule within a rule set.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 * @param ruleSetName - Name of the rule set under the profile which is unique globally.
 * @param ruleName - Name of the delivery rule which is unique within the endpoint.
 */
export const RulesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: RulesGetInput,
  outputSchema: RulesGetOutput,
}));
// Input Schema
export interface RulesListByRuleSetInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  ruleSetName: string;
}
export const RulesListByRuleSetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
    ruleSetName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/ruleSets/{ruleSetName}/rules",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<RulesListByRuleSetInput>;

// Output Schema
export interface RulesListByRuleSetOutput {
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
export const RulesListByRuleSetOutput =
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
  }) as unknown as Schema.Codec<RulesListByRuleSetOutput>;

// The operation
/**
 * Lists all of the existing delivery rules within a rule set.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 * @param ruleSetName - Name of the rule set under the profile which is unique globally.
 */
export const RulesListByRuleSet = /*@__PURE__*/ API.make(() => ({
  inputSchema: RulesListByRuleSetInput,
  outputSchema: RulesListByRuleSetOutput,
}));
// Input Schema
export interface RulesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  ruleSetName: string;
  ruleName: string;
  properties?: {
    ruleSetName?: string;
    order?: number;
    conditions?: {
      name:
        | "RemoteAddress"
        | "RequestMethod"
        | "QueryString"
        | "PostArgs"
        | "RequestUri"
        | "RequestHeader"
        | "RequestBody"
        | "RequestScheme"
        | "UrlPath"
        | "UrlFileExtension"
        | "UrlFileName"
        | "HttpVersion"
        | "Cookies"
        | "IsDevice"
        | "SocketAddr"
        | "ClientPort"
        | "ServerPort"
        | "HostName"
        | "SslProtocol";
    }[];
    actions?: {
      name:
        | "CacheExpiration"
        | "CacheKeyQueryString"
        | "ModifyRequestHeader"
        | "ModifyResponseHeader"
        | "UrlRedirect"
        | "UrlRewrite"
        | "UrlSigning"
        | "OriginGroupOverride"
        | "RouteConfigurationOverride";
    }[];
    matchProcessingBehavior?: "Continue" | "Stop";
  };
}
export const RulesUpdateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  profileName: Schema.String.pipe(T.PathParam()),
  ruleSetName: Schema.String.pipe(T.PathParam()),
  ruleName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      ruleSetName: Schema.optional(Schema.String),
      order: Schema.optional(Schema.Number),
      conditions: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.Literals([
              "RemoteAddress",
              "RequestMethod",
              "QueryString",
              "PostArgs",
              "RequestUri",
              "RequestHeader",
              "RequestBody",
              "RequestScheme",
              "UrlPath",
              "UrlFileExtension",
              "UrlFileName",
              "HttpVersion",
              "Cookies",
              "IsDevice",
              "SocketAddr",
              "ClientPort",
              "ServerPort",
              "HostName",
              "SslProtocol",
            ]),
          }),
        ),
      ),
      actions: Schema.optional(
        Schema.Array(
          Schema.Struct({
            name: Schema.Literals([
              "CacheExpiration",
              "CacheKeyQueryString",
              "ModifyRequestHeader",
              "ModifyResponseHeader",
              "UrlRedirect",
              "UrlRewrite",
              "UrlSigning",
              "OriginGroupOverride",
              "RouteConfigurationOverride",
            ]),
          }),
        ),
      ),
      matchProcessingBehavior: Schema.optional(
        Schema.Literals(["Continue", "Stop"]),
      ),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/ruleSets/{ruleSetName}/rules/{ruleName}",
    apiVersion: "2025-12-01",
  }),
) as unknown as Schema.Codec<RulesUpdateInput>;

// Output Schema
export interface RulesUpdateOutput {
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
export const RulesUpdateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<RulesUpdateOutput>;

// The operation
/**
 * Updates an existing delivery rule within a rule set.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 * @param ruleSetName - Name of the rule set under the profile which is unique globally.
 * @param ruleName - Name of the delivery rule which is unique within the endpoint.
 */
export const RulesUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: RulesUpdateInput,
  outputSchema: RulesUpdateOutput,
}));
// Input Schema
export interface SecretsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  secretName: string;
  properties?: {
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Updating"
      | "Deleting"
      | "Creating";
    deploymentStatus?: "NotStarted" | "InProgress" | "Succeeded" | "Failed";
  };
}
export const SecretsCreateInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  profileName: Schema.String.pipe(T.PathParam()),
  secretName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      provisioningState: Schema.optional(
        Schema.Literals([
          "Succeeded",
          "Failed",
          "Updating",
          "Deleting",
          "Creating",
        ]),
      ),
      deploymentStatus: Schema.optional(
        Schema.Literals(["NotStarted", "InProgress", "Succeeded", "Failed"]),
      ),
    }),
  ),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/secrets/{secretName}",
    apiVersion: "2025-12-01",
  }),
) as unknown as Schema.Codec<SecretsCreateInput>;

// Output Schema
export interface SecretsCreateOutput {
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
export const SecretsCreateOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<SecretsCreateOutput>;

// The operation
/**
 * Creates a new Secret within the specified profile.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 * @param secretName - Name of the Secret under the profile.
 */
export const SecretsCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: SecretsCreateInput,
  outputSchema: SecretsCreateOutput,
}));
// Input Schema
export interface SecretsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  secretName: string;
}
export const SecretsDeleteInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  profileName: Schema.String.pipe(T.PathParam()),
  secretName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/secrets/{secretName}",
    apiVersion: "2025-12-01",
  }),
) as unknown as Schema.Codec<SecretsDeleteInput>;

// Output Schema
export type SecretsDeleteOutput = void;
export const SecretsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<SecretsDeleteOutput>;

// The operation
/**
 * Deletes an existing Secret within profile.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 * @param secretName - Name of the Secret under the profile.
 */
export const SecretsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: SecretsDeleteInput,
  outputSchema: SecretsDeleteOutput,
}));
// Input Schema
export interface SecretsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  secretName: string;
}
export const SecretsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  profileName: Schema.String.pipe(T.PathParam()),
  secretName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/secrets/{secretName}",
    apiVersion: "2025-12-01",
  }),
) as unknown as Schema.Codec<SecretsGetInput>;

// Output Schema
export interface SecretsGetOutput {
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
export const SecretsGetOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<SecretsGetOutput>;

// The operation
/**
 * Gets an existing Secret within a profile.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 * @param secretName - Name of the Secret under the profile.
 */
export const SecretsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: SecretsGetInput,
  outputSchema: SecretsGetOutput,
}));
// Input Schema
export interface SecretsListByProfileInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
}
export const SecretsListByProfileInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/secrets",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<SecretsListByProfileInput>;

// Output Schema
export interface SecretsListByProfileOutput {
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
export const SecretsListByProfileOutput =
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
  }) as unknown as Schema.Codec<SecretsListByProfileOutput>;

// The operation
/**
 * Lists existing AzureFrontDoor secrets.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 */
export const SecretsListByProfile = /*@__PURE__*/ API.make(() => ({
  inputSchema: SecretsListByProfileInput,
  outputSchema: SecretsListByProfileOutput,
}));
// Input Schema
export interface SecurityPoliciesCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  securityPolicyName: string;
  properties?: {
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Updating"
      | "Deleting"
      | "Creating";
    deploymentStatus?: "NotStarted" | "InProgress" | "Succeeded" | "Failed";
  };
}
export const SecurityPoliciesCreateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
    securityPolicyName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Updating",
            "Deleting",
            "Creating",
          ]),
        ),
        deploymentStatus: Schema.optional(
          Schema.Literals(["NotStarted", "InProgress", "Succeeded", "Failed"]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/securityPolicies/{securityPolicyName}",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<SecurityPoliciesCreateInput>;

// Output Schema
export interface SecurityPoliciesCreateOutput {
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
export const SecurityPoliciesCreateOutput =
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
  }) as unknown as Schema.Codec<SecurityPoliciesCreateOutput>;

// The operation
/**
 * Creates a new security policy within the specified profile.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 * @param securityPolicyName - Name of the security policy under the profile.
 */
export const SecurityPoliciesCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: SecurityPoliciesCreateInput,
  outputSchema: SecurityPoliciesCreateOutput,
}));
// Input Schema
export interface SecurityPoliciesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  securityPolicyName: string;
}
export const SecurityPoliciesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
    securityPolicyName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/securityPolicies/{securityPolicyName}",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<SecurityPoliciesDeleteInput>;

// Output Schema
export type SecurityPoliciesDeleteOutput = void;
export const SecurityPoliciesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<SecurityPoliciesDeleteOutput>;

// The operation
/**
 * Deletes an existing security policy within profile.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 * @param securityPolicyName - Name of the security policy under the profile.
 */
export const SecurityPoliciesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: SecurityPoliciesDeleteInput,
  outputSchema: SecurityPoliciesDeleteOutput,
}));
// Input Schema
export interface SecurityPoliciesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  securityPolicyName: string;
}
export const SecurityPoliciesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
    securityPolicyName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/securityPolicies/{securityPolicyName}",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<SecurityPoliciesGetInput>;

// Output Schema
export interface SecurityPoliciesGetOutput {
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
export const SecurityPoliciesGetOutput =
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
  }) as unknown as Schema.Codec<SecurityPoliciesGetOutput>;

// The operation
/**
 * Gets an existing security policy within a profile.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 * @param securityPolicyName - Name of the security policy under the profile.
 */
export const SecurityPoliciesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: SecurityPoliciesGetInput,
  outputSchema: SecurityPoliciesGetOutput,
}));
// Input Schema
export interface SecurityPoliciesListByProfileInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
}
export const SecurityPoliciesListByProfileInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/securityPolicies",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<SecurityPoliciesListByProfileInput>;

// Output Schema
export interface SecurityPoliciesListByProfileOutput {
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
export const SecurityPoliciesListByProfileOutput =
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
  }) as unknown as Schema.Codec<SecurityPoliciesListByProfileOutput>;

// The operation
/**
 * Lists security policies associated with the profile
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 */
export const SecurityPoliciesListByProfile =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SecurityPoliciesListByProfileInput,
    outputSchema: SecurityPoliciesListByProfileOutput,
  }));
// Input Schema
export interface SecurityPoliciesPatchInput {
  subscriptionId: string;
  resourceGroupName: string;
  profileName: string;
  securityPolicyName: string;
  properties?: { parameters?: { type: "WebApplicationFirewall" } };
}
export const SecurityPoliciesPatchInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
    securityPolicyName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        parameters: Schema.optional(
          Schema.Struct({
            type: Schema.Literals(["WebApplicationFirewall"]),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/securityPolicies/{securityPolicyName}",
      apiVersion: "2025-12-01",
    }),
  ) as unknown as Schema.Codec<SecurityPoliciesPatchInput>;

// Output Schema
export interface SecurityPoliciesPatchOutput {
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
export const SecurityPoliciesPatchOutput =
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
  }) as unknown as Schema.Codec<SecurityPoliciesPatchOutput>;

// The operation
/**
 * Updates an existing security policy within a profile.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param profileName - Name of the Azure Front Door Standard or Azure Front Door Premium or CDN profile which is unique within the resource group.
 * @param securityPolicyName - Name of the security policy under the profile.
 */
export const SecurityPoliciesPatch = /*@__PURE__*/ API.make(() => ({
  inputSchema: SecurityPoliciesPatchInput,
  outputSchema: SecurityPoliciesPatchOutput,
}));
// Input Schema
export interface ValidateProbeInput {
  subscriptionId: string;
  probeURL: string;
}
export const ValidateProbeInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  probeURL: Schema.String,
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.Cdn/validateProbe",
    apiVersion: "2025-12-01",
  }),
) as unknown as Schema.Codec<ValidateProbeInput>;

// Output Schema
export interface ValidateProbeOutput {
  isValid?: boolean;
  errorCode?: string;
  message?: string;
}
export const ValidateProbeOutput = /*@__PURE__*/ Schema.Struct({
  isValid: Schema.optional(Schema.Boolean),
  errorCode: Schema.optional(Schema.String),
  message: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<ValidateProbeOutput>;

// The operation
/**
 * Check if the probe path is a valid path and the file can be accessed. Probe path is the path to a file hosted on the origin server to help accelerate the delivery of dynamic content via the CDN endpoint. This path is relative to the origin path specified in the endpoint configuration.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const ValidateProbe = /*@__PURE__*/ API.make(() => ({
  inputSchema: ValidateProbeInput,
  outputSchema: ValidateProbeOutput,
}));
