/**
 * Azure Certificateregistration API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface AppServiceCertificateOrdersCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  certificateOrderName: string;
  properties?: {
    certificates?: Record<
      string,
      {
        keyVaultId?: string;
        keyVaultSecretName?: string;
        provisioningState?:
          | "Initialized"
          | "WaitingOnCertificateOrder"
          | "Succeeded"
          | "CertificateOrderFailed"
          | "OperationNotPermittedOnKeyVault"
          | "AzureServiceUnauthorizedToAccessKeyVault"
          | "KeyVaultDoesNotExist"
          | "KeyVaultSecretDoesNotExist"
          | "UnknownError"
          | "ExternalPrivateKey"
          | "Unknown";
      }
    >;
    distinguishedName?: string;
    domainVerificationToken?: string;
    validityInYears?: number;
    keySize?: number;
    productType:
      | "StandardDomainValidatedSsl"
      | "StandardDomainValidatedWildCardSsl";
    autoRenew?: boolean;
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "InProgress"
      | "Deleting";
    status?:
      | "Pendingissuance"
      | "Issued"
      | "Revoked"
      | "Canceled"
      | "Denied"
      | "Pendingrevocation"
      | "PendingRekey"
      | "Unused"
      | "Expired"
      | "NotSubmitted";
    signedCertificate?: {
      version?: number;
      serialNumber?: string;
      thumbprint?: string;
      subject?: string;
      notBefore?: string;
      notAfter?: string;
      signatureAlgorithm?: string;
      issuer?: string;
      rawData?: string;
    };
    csr?: string;
    intermediate?: {
      version?: number;
      serialNumber?: string;
      thumbprint?: string;
      subject?: string;
      notBefore?: string;
      notAfter?: string;
      signatureAlgorithm?: string;
      issuer?: string;
      rawData?: string;
    };
    root?: {
      version?: number;
      serialNumber?: string;
      thumbprint?: string;
      subject?: string;
      notBefore?: string;
      notAfter?: string;
      signatureAlgorithm?: string;
      issuer?: string;
      rawData?: string;
    };
    serialNumber?: string;
    lastCertificateIssuanceTime?: string;
    expirationTime?: string;
    isPrivateKeyExternal?: boolean;
    appServiceCertificateNotRenewableReasons?: (
      | "RegistrationStatusNotSupportedForRenewal"
      | "ExpirationNotInRenewalTimeRange"
      | "SubscriptionNotActive"
    )[];
    nextAutoRenewalTimeStamp?: string;
    contact?: {
      email?: string;
      nameFirst?: string;
      nameLast?: string;
      phone?: string;
    };
  };
  kind?: string;
  tags?: Record<string, string>;
  location: string;
}
export const AppServiceCertificateOrdersCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    certificateOrderName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        certificates: Schema.optional(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              keyVaultId: Schema.optional(Schema.String),
              keyVaultSecretName: Schema.optional(Schema.String),
              provisioningState: Schema.optional(
                Schema.Literals([
                  "Initialized",
                  "WaitingOnCertificateOrder",
                  "Succeeded",
                  "CertificateOrderFailed",
                  "OperationNotPermittedOnKeyVault",
                  "AzureServiceUnauthorizedToAccessKeyVault",
                  "KeyVaultDoesNotExist",
                  "KeyVaultSecretDoesNotExist",
                  "UnknownError",
                  "ExternalPrivateKey",
                  "Unknown",
                ]),
              ),
            }),
          ),
        ),
        distinguishedName: Schema.optional(Schema.String),
        domainVerificationToken: Schema.optional(Schema.String),
        validityInYears: Schema.optional(Schema.Number),
        keySize: Schema.optional(Schema.Number),
        productType: Schema.Literals([
          "StandardDomainValidatedSsl",
          "StandardDomainValidatedWildCardSsl",
        ]),
        autoRenew: Schema.optional(Schema.Boolean),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "InProgress",
            "Deleting",
          ]),
        ),
        status: Schema.optional(
          Schema.Literals([
            "Pendingissuance",
            "Issued",
            "Revoked",
            "Canceled",
            "Denied",
            "Pendingrevocation",
            "PendingRekey",
            "Unused",
            "Expired",
            "NotSubmitted",
          ]),
        ),
        signedCertificate: Schema.optional(
          Schema.Struct({
            version: Schema.optional(Schema.Number),
            serialNumber: Schema.optional(Schema.String),
            thumbprint: Schema.optional(Schema.String),
            subject: Schema.optional(Schema.String),
            notBefore: Schema.optional(Schema.String),
            notAfter: Schema.optional(Schema.String),
            signatureAlgorithm: Schema.optional(Schema.String),
            issuer: Schema.optional(Schema.String),
            rawData: Schema.optional(Schema.String),
          }),
        ),
        csr: Schema.optional(Schema.String),
        intermediate: Schema.optional(
          Schema.Struct({
            version: Schema.optional(Schema.Number),
            serialNumber: Schema.optional(Schema.String),
            thumbprint: Schema.optional(Schema.String),
            subject: Schema.optional(Schema.String),
            notBefore: Schema.optional(Schema.String),
            notAfter: Schema.optional(Schema.String),
            signatureAlgorithm: Schema.optional(Schema.String),
            issuer: Schema.optional(Schema.String),
            rawData: Schema.optional(Schema.String),
          }),
        ),
        root: Schema.optional(
          Schema.Struct({
            version: Schema.optional(Schema.Number),
            serialNumber: Schema.optional(Schema.String),
            thumbprint: Schema.optional(Schema.String),
            subject: Schema.optional(Schema.String),
            notBefore: Schema.optional(Schema.String),
            notAfter: Schema.optional(Schema.String),
            signatureAlgorithm: Schema.optional(Schema.String),
            issuer: Schema.optional(Schema.String),
            rawData: Schema.optional(Schema.String),
          }),
        ),
        serialNumber: Schema.optional(Schema.String),
        lastCertificateIssuanceTime: Schema.optional(Schema.String),
        expirationTime: Schema.optional(Schema.String),
        isPrivateKeyExternal: Schema.optional(Schema.Boolean),
        appServiceCertificateNotRenewableReasons: Schema.optional(
          Schema.Array(
            Schema.Literals([
              "RegistrationStatusNotSupportedForRenewal",
              "ExpirationNotInRenewalTimeRange",
              "SubscriptionNotActive",
            ]),
          ),
        ),
        nextAutoRenewalTimeStamp: Schema.optional(Schema.String),
        contact: Schema.optional(
          Schema.Struct({
            email: Schema.optional(Schema.String),
            nameFirst: Schema.optional(Schema.String),
            nameLast: Schema.optional(Schema.String),
            phone: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    kind: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}",
      apiVersion: "2024-11-01",
    }),
  ) as unknown as Schema.Codec<AppServiceCertificateOrdersCreateOrUpdateInput>;

// Output Schema
export interface AppServiceCertificateOrdersCreateOrUpdateOutput {
  id?: string;
  name?: string;
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
export const AppServiceCertificateOrdersCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<AppServiceCertificateOrdersCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a certificate purchase order.
 *
 * Description for Create or update a certificate purchase order.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param certificateOrderName - Name of the certificate order..
 */
export const AppServiceCertificateOrdersCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AppServiceCertificateOrdersCreateOrUpdateInput,
    outputSchema: AppServiceCertificateOrdersCreateOrUpdateOutput,
  }));
// Input Schema
export interface AppServiceCertificateOrdersCreateOrUpdateCertificateInput {
  subscriptionId: string;
  resourceGroupName: string;
  certificateOrderName: string;
  name: string;
  properties?: {
    keyVaultId?: string;
    keyVaultSecretName?: string;
    provisioningState?:
      | "Initialized"
      | "WaitingOnCertificateOrder"
      | "Succeeded"
      | "CertificateOrderFailed"
      | "OperationNotPermittedOnKeyVault"
      | "AzureServiceUnauthorizedToAccessKeyVault"
      | "KeyVaultDoesNotExist"
      | "KeyVaultSecretDoesNotExist"
      | "UnknownError"
      | "ExternalPrivateKey"
      | "Unknown";
  };
  kind?: string;
  tags?: Record<string, string>;
  location: string;
}
export const AppServiceCertificateOrdersCreateOrUpdateCertificateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    certificateOrderName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        keyVaultId: Schema.optional(Schema.String),
        keyVaultSecretName: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Initialized",
            "WaitingOnCertificateOrder",
            "Succeeded",
            "CertificateOrderFailed",
            "OperationNotPermittedOnKeyVault",
            "AzureServiceUnauthorizedToAccessKeyVault",
            "KeyVaultDoesNotExist",
            "KeyVaultSecretDoesNotExist",
            "UnknownError",
            "ExternalPrivateKey",
            "Unknown",
          ]),
        ),
      }),
    ),
    kind: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}/certificates/{name}",
      apiVersion: "2024-11-01",
    }),
  ) as unknown as Schema.Codec<AppServiceCertificateOrdersCreateOrUpdateCertificateInput>;

// Output Schema
export interface AppServiceCertificateOrdersCreateOrUpdateCertificateOutput {
  id?: string;
  name?: string;
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
export const AppServiceCertificateOrdersCreateOrUpdateCertificateOutput =
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
  }) as unknown as Schema.Codec<AppServiceCertificateOrdersCreateOrUpdateCertificateOutput>;

// The operation
/**
 * Creates or updates a certificate and associates with key vault secret.
 *
 * Description for Creates or updates a certificate and associates with key vault secret.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param certificateOrderName - Name of the certificate order..
 * @param name - Name of the certificate.
 */
export const AppServiceCertificateOrdersCreateOrUpdateCertificate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AppServiceCertificateOrdersCreateOrUpdateCertificateInput,
    outputSchema: AppServiceCertificateOrdersCreateOrUpdateCertificateOutput,
  }));
// Input Schema
export interface AppServiceCertificateOrdersDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  certificateOrderName: string;
}
export const AppServiceCertificateOrdersDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    certificateOrderName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}",
      apiVersion: "2024-11-01",
    }),
  ) as unknown as Schema.Codec<AppServiceCertificateOrdersDeleteInput>;

// Output Schema
export type AppServiceCertificateOrdersDeleteOutput = void;
export const AppServiceCertificateOrdersDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<AppServiceCertificateOrdersDeleteOutput>;

// The operation
/**
 * Delete an existing certificate order.
 *
 * Description for Delete an existing certificate order.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param certificateOrderName - Name of the certificate order..
 */
export const AppServiceCertificateOrdersDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AppServiceCertificateOrdersDeleteInput,
    outputSchema: AppServiceCertificateOrdersDeleteOutput,
  }));
// Input Schema
export interface AppServiceCertificateOrdersDeleteCertificateInput {
  subscriptionId: string;
  resourceGroupName: string;
  certificateOrderName: string;
  name: string;
}
export const AppServiceCertificateOrdersDeleteCertificateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    certificateOrderName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}/certificates/{name}",
      apiVersion: "2024-11-01",
    }),
  ) as unknown as Schema.Codec<AppServiceCertificateOrdersDeleteCertificateInput>;

// Output Schema
export type AppServiceCertificateOrdersDeleteCertificateOutput = void;
export const AppServiceCertificateOrdersDeleteCertificateOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<AppServiceCertificateOrdersDeleteCertificateOutput>;

// The operation
/**
 * Delete the certificate associated with a certificate order.
 *
 * Description for Delete the certificate associated with a certificate order.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param certificateOrderName - Name of the certificate order..
 * @param name - Name of the certificate.
 */
export const AppServiceCertificateOrdersDeleteCertificate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AppServiceCertificateOrdersDeleteCertificateInput,
    outputSchema: AppServiceCertificateOrdersDeleteCertificateOutput,
  }));
// Input Schema
export interface AppServiceCertificateOrdersGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  certificateOrderName: string;
}
export const AppServiceCertificateOrdersGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    certificateOrderName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}",
      apiVersion: "2024-11-01",
    }),
  ) as unknown as Schema.Codec<AppServiceCertificateOrdersGetInput>;

// Output Schema
export interface AppServiceCertificateOrdersGetOutput {
  id?: string;
  name?: string;
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
export const AppServiceCertificateOrdersGetOutput =
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
  }) as unknown as Schema.Codec<AppServiceCertificateOrdersGetOutput>;

// The operation
/**
 * Get a certificate order.
 *
 * Description for Get a certificate order.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param certificateOrderName - Name of the certificate order..
 */
export const AppServiceCertificateOrdersGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AppServiceCertificateOrdersGetInput,
    outputSchema: AppServiceCertificateOrdersGetOutput,
  }));
// Input Schema
export interface AppServiceCertificateOrdersGetCertificateInput {
  subscriptionId: string;
  resourceGroupName: string;
  certificateOrderName: string;
  name: string;
}
export const AppServiceCertificateOrdersGetCertificateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    certificateOrderName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}/certificates/{name}",
      apiVersion: "2024-11-01",
    }),
  ) as unknown as Schema.Codec<AppServiceCertificateOrdersGetCertificateInput>;

// Output Schema
export interface AppServiceCertificateOrdersGetCertificateOutput {
  id?: string;
  name?: string;
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
export const AppServiceCertificateOrdersGetCertificateOutput =
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
  }) as unknown as Schema.Codec<AppServiceCertificateOrdersGetCertificateOutput>;

// The operation
/**
 * Get the certificate associated with a certificate order.
 *
 * Description for Get the certificate associated with a certificate order.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param certificateOrderName - Name of the certificate order..
 * @param name - Name of the certificate.
 */
export const AppServiceCertificateOrdersGetCertificate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AppServiceCertificateOrdersGetCertificateInput,
    outputSchema: AppServiceCertificateOrdersGetCertificateOutput,
  }));
// Input Schema
export interface AppServiceCertificateOrdersListInput {
  subscriptionId: string;
}
export const AppServiceCertificateOrdersListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.CertificateRegistration/certificateOrders",
      apiVersion: "2024-11-01",
    }),
  ) as unknown as Schema.Codec<AppServiceCertificateOrdersListInput>;

// Output Schema
export interface AppServiceCertificateOrdersListOutput {
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
export const AppServiceCertificateOrdersListOutput =
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
  }) as unknown as Schema.Codec<AppServiceCertificateOrdersListOutput>;

// The operation
/**
 * List all certificate orders in a subscription.
 *
 * Description for List all certificate orders in a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const AppServiceCertificateOrdersList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AppServiceCertificateOrdersListInput,
    outputSchema: AppServiceCertificateOrdersListOutput,
  }));
// Input Schema
export interface AppServiceCertificateOrdersListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const AppServiceCertificateOrdersListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders",
      apiVersion: "2024-11-01",
    }),
  ) as unknown as Schema.Codec<AppServiceCertificateOrdersListByResourceGroupInput>;

// Output Schema
export interface AppServiceCertificateOrdersListByResourceGroupOutput {
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
export const AppServiceCertificateOrdersListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<AppServiceCertificateOrdersListByResourceGroupOutput>;

// The operation
/**
 * Get certificate orders in a resource group.
 *
 * Description for Get certificate orders in a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const AppServiceCertificateOrdersListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AppServiceCertificateOrdersListByResourceGroupInput,
    outputSchema: AppServiceCertificateOrdersListByResourceGroupOutput,
  }));
// Input Schema
export interface AppServiceCertificateOrdersListCertificatesInput {
  subscriptionId: string;
  resourceGroupName: string;
  certificateOrderName: string;
}
export const AppServiceCertificateOrdersListCertificatesInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    certificateOrderName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}/certificates",
      apiVersion: "2024-11-01",
    }),
  ) as unknown as Schema.Codec<AppServiceCertificateOrdersListCertificatesInput>;

// Output Schema
export interface AppServiceCertificateOrdersListCertificatesOutput {
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
export const AppServiceCertificateOrdersListCertificatesOutput =
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
  }) as unknown as Schema.Codec<AppServiceCertificateOrdersListCertificatesOutput>;

// The operation
/**
 * List all certificates associated with a certificate order.
 *
 * Description for List all certificates associated with a certificate order.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param certificateOrderName - Name of the certificate order..
 */
export const AppServiceCertificateOrdersListCertificates =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AppServiceCertificateOrdersListCertificatesInput,
    outputSchema: AppServiceCertificateOrdersListCertificatesOutput,
  }));
// Input Schema
export interface AppServiceCertificateOrdersReissueInput {
  subscriptionId: string;
  resourceGroupName: string;
  certificateOrderName: string;
  properties?: {
    keySize?: number;
    delayExistingRevokeInHours?: number;
    csr?: string;
    isPrivateKeyExternal?: boolean;
  };
  id?: string;
  name?: string;
  kind?: string;
  type?: string;
}
export const AppServiceCertificateOrdersReissueInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    certificateOrderName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        keySize: Schema.optional(Schema.Number),
        delayExistingRevokeInHours: Schema.optional(Schema.Number),
        csr: Schema.optional(Schema.String),
        isPrivateKeyExternal: Schema.optional(Schema.Boolean),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}/reissue",
      apiVersion: "2024-11-01",
    }),
  ) as unknown as Schema.Codec<AppServiceCertificateOrdersReissueInput>;

// Output Schema
export type AppServiceCertificateOrdersReissueOutput = void;
export const AppServiceCertificateOrdersReissueOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<AppServiceCertificateOrdersReissueOutput>;

// The operation
/**
 * Reissue an existing certificate order.
 *
 * Description for Reissue an existing certificate order.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param certificateOrderName - Name of the certificate order..
 */
export const AppServiceCertificateOrdersReissue =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AppServiceCertificateOrdersReissueInput,
    outputSchema: AppServiceCertificateOrdersReissueOutput,
  }));
// Input Schema
export interface AppServiceCertificateOrdersRenewInput {
  subscriptionId: string;
  resourceGroupName: string;
  certificateOrderName: string;
  properties?: {
    keySize?: number;
    csr?: string;
    isPrivateKeyExternal?: boolean;
  };
  id?: string;
  name?: string;
  kind?: string;
  type?: string;
}
export const AppServiceCertificateOrdersRenewInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    certificateOrderName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        keySize: Schema.optional(Schema.Number),
        csr: Schema.optional(Schema.String),
        isPrivateKeyExternal: Schema.optional(Schema.Boolean),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}/renew",
      apiVersion: "2024-11-01",
    }),
  ) as unknown as Schema.Codec<AppServiceCertificateOrdersRenewInput>;

// Output Schema
export type AppServiceCertificateOrdersRenewOutput = void;
export const AppServiceCertificateOrdersRenewOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<AppServiceCertificateOrdersRenewOutput>;

// The operation
/**
 * Renew an existing certificate order.
 *
 * Description for Renew an existing certificate order.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param certificateOrderName - Name of the certificate order..
 */
export const AppServiceCertificateOrdersRenew =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AppServiceCertificateOrdersRenewInput,
    outputSchema: AppServiceCertificateOrdersRenewOutput,
  }));
// Input Schema
export interface AppServiceCertificateOrdersResendEmailInput {
  subscriptionId: string;
  resourceGroupName: string;
  certificateOrderName: string;
}
export const AppServiceCertificateOrdersResendEmailInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    certificateOrderName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}/resendEmail",
      apiVersion: "2024-11-01",
    }),
  ) as unknown as Schema.Codec<AppServiceCertificateOrdersResendEmailInput>;

// Output Schema
export type AppServiceCertificateOrdersResendEmailOutput = void;
export const AppServiceCertificateOrdersResendEmailOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<AppServiceCertificateOrdersResendEmailOutput>;

// The operation
/**
 * Resend certificate email.
 *
 * Description for Resend certificate email.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param certificateOrderName - Name of the certificate order..
 */
export const AppServiceCertificateOrdersResendEmail =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AppServiceCertificateOrdersResendEmailInput,
    outputSchema: AppServiceCertificateOrdersResendEmailOutput,
  }));
// Input Schema
export interface AppServiceCertificateOrdersResendRequestEmailsInput {
  subscriptionId: string;
  resourceGroupName: string;
  certificateOrderName: string;
  name?: string;
}
export const AppServiceCertificateOrdersResendRequestEmailsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    certificateOrderName: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}/resendRequestEmails",
      apiVersion: "2024-11-01",
    }),
  ) as unknown as Schema.Codec<AppServiceCertificateOrdersResendRequestEmailsInput>;

// Output Schema
export type AppServiceCertificateOrdersResendRequestEmailsOutput = void;
export const AppServiceCertificateOrdersResendRequestEmailsOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<AppServiceCertificateOrdersResendRequestEmailsOutput>;

// The operation
/**
 * Resend domain verification email to customer for this certificate order
 *
 * Resend domain verification ownership email containing steps on how to verify a domain for a given certificate order
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param certificateOrderName - Name of the certificate order..
 */
export const AppServiceCertificateOrdersResendRequestEmails =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AppServiceCertificateOrdersResendRequestEmailsInput,
    outputSchema: AppServiceCertificateOrdersResendRequestEmailsOutput,
  }));
// Input Schema
export interface AppServiceCertificateOrdersRetrieveCertificateActionsInput {
  subscriptionId: string;
  resourceGroupName: string;
  name: string;
}
export const AppServiceCertificateOrdersRetrieveCertificateActionsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{name}/retrieveCertificateActions",
      apiVersion: "2024-11-01",
    }),
  ) as unknown as Schema.Codec<AppServiceCertificateOrdersRetrieveCertificateActionsInput>;

// Output Schema
export type AppServiceCertificateOrdersRetrieveCertificateActionsOutput = {
  actionType?:
    | "CertificateIssued"
    | "CertificateOrderCanceled"
    | "CertificateOrderCreated"
    | "CertificateRevoked"
    | "DomainValidationComplete"
    | "FraudDetected"
    | "OrgNameChange"
    | "OrgValidationComplete"
    | "SanDrop"
    | "FraudCleared"
    | "CertificateExpired"
    | "CertificateExpirationWarning"
    | "FraudDocumentationRequired"
    | "Unknown";
  createdAt?: string;
}[];
export const AppServiceCertificateOrdersRetrieveCertificateActionsOutput =
  /*@__PURE__*/ Schema.Array(
    Schema.Struct({
      actionType: Schema.optional(
        Schema.Literals([
          "CertificateIssued",
          "CertificateOrderCanceled",
          "CertificateOrderCreated",
          "CertificateRevoked",
          "DomainValidationComplete",
          "FraudDetected",
          "OrgNameChange",
          "OrgValidationComplete",
          "SanDrop",
          "FraudCleared",
          "CertificateExpired",
          "CertificateExpirationWarning",
          "FraudDocumentationRequired",
          "Unknown",
        ]),
      ),
      createdAt: Schema.optional(Schema.String),
    }),
  ) as unknown as Schema.Codec<AppServiceCertificateOrdersRetrieveCertificateActionsOutput>;

// The operation
/**
 * Retrieve the list of certificate actions.
 *
 * Description for Retrieve the list of certificate actions.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - Name of the certificate order..
 */
export const AppServiceCertificateOrdersRetrieveCertificateActions =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AppServiceCertificateOrdersRetrieveCertificateActionsInput,
    outputSchema: AppServiceCertificateOrdersRetrieveCertificateActionsOutput,
  }));
// Input Schema
export interface AppServiceCertificateOrdersRetrieveCertificateEmailHistoryInput {
  subscriptionId: string;
  resourceGroupName: string;
  name: string;
}
export const AppServiceCertificateOrdersRetrieveCertificateEmailHistoryInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{name}/retrieveEmailHistory",
      apiVersion: "2024-11-01",
    }),
  ) as unknown as Schema.Codec<AppServiceCertificateOrdersRetrieveCertificateEmailHistoryInput>;

// Output Schema
export type AppServiceCertificateOrdersRetrieveCertificateEmailHistoryOutput = {
  emailId?: string;
  timeStamp?: string;
}[];
export const AppServiceCertificateOrdersRetrieveCertificateEmailHistoryOutput =
  /*@__PURE__*/ Schema.Array(
    Schema.Struct({
      emailId: Schema.optional(Schema.String),
      timeStamp: Schema.optional(Schema.String),
    }),
  ) as unknown as Schema.Codec<AppServiceCertificateOrdersRetrieveCertificateEmailHistoryOutput>;

// The operation
/**
 * Retrieve email history.
 *
 * Description for Retrieve email history.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - Name of the certificate order..
 */
export const AppServiceCertificateOrdersRetrieveCertificateEmailHistory =
  /*@__PURE__*/ API.make(() => ({
    inputSchema:
      AppServiceCertificateOrdersRetrieveCertificateEmailHistoryInput,
    outputSchema:
      AppServiceCertificateOrdersRetrieveCertificateEmailHistoryOutput,
  }));
// Input Schema
export interface AppServiceCertificateOrdersRetrieveSiteSealInput {
  subscriptionId: string;
  resourceGroupName: string;
  certificateOrderName: string;
  lightTheme?: boolean;
  locale?: string;
}
export const AppServiceCertificateOrdersRetrieveSiteSealInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    certificateOrderName: Schema.String.pipe(T.PathParam()),
    lightTheme: Schema.optional(Schema.Boolean),
    locale: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}/retrieveSiteSeal",
      apiVersion: "2024-11-01",
    }),
  ) as unknown as Schema.Codec<AppServiceCertificateOrdersRetrieveSiteSealInput>;

// Output Schema
export interface AppServiceCertificateOrdersRetrieveSiteSealOutput {
  html: string;
}
export const AppServiceCertificateOrdersRetrieveSiteSealOutput =
  /*@__PURE__*/ Schema.Struct({
    html: Schema.String,
  }) as unknown as Schema.Codec<AppServiceCertificateOrdersRetrieveSiteSealOutput>;

// The operation
/**
 * This method is used to obtain the site seal information for an issued certificate.
 *
 * This method is used to obtain the site seal information for an issued certificate. A site seal is a graphic that the certificate purchaser can embed on their web site to show their visitors information about their SSL certificate. If a web site visitor clicks on the site seal image, a pop-up page is displayed that contains detailed information about the SSL certificate. The site seal token is used to link the site seal graphic image to the appropriate certificate details pop-up page display when a user clicks on the site seal. The site seal images are expected to be static images and hosted by the reseller, to minimize delays for customer page load times.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param certificateOrderName - Name of the certificate order..
 */
export const AppServiceCertificateOrdersRetrieveSiteSeal =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AppServiceCertificateOrdersRetrieveSiteSealInput,
    outputSchema: AppServiceCertificateOrdersRetrieveSiteSealOutput,
  }));
// Input Schema
export interface AppServiceCertificateOrdersUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  certificateOrderName: string;
  properties?: {
    certificates?: Record<
      string,
      {
        keyVaultId?: string;
        keyVaultSecretName?: string;
        provisioningState?:
          | "Initialized"
          | "WaitingOnCertificateOrder"
          | "Succeeded"
          | "CertificateOrderFailed"
          | "OperationNotPermittedOnKeyVault"
          | "AzureServiceUnauthorizedToAccessKeyVault"
          | "KeyVaultDoesNotExist"
          | "KeyVaultSecretDoesNotExist"
          | "UnknownError"
          | "ExternalPrivateKey"
          | "Unknown";
      }
    >;
    distinguishedName?: string;
    domainVerificationToken?: string;
    validityInYears?: number;
    keySize?: number;
    productType:
      | "StandardDomainValidatedSsl"
      | "StandardDomainValidatedWildCardSsl";
    autoRenew?: boolean;
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "InProgress"
      | "Deleting";
    status?:
      | "Pendingissuance"
      | "Issued"
      | "Revoked"
      | "Canceled"
      | "Denied"
      | "Pendingrevocation"
      | "PendingRekey"
      | "Unused"
      | "Expired"
      | "NotSubmitted";
    signedCertificate?: {
      version?: number;
      serialNumber?: string;
      thumbprint?: string;
      subject?: string;
      notBefore?: string;
      notAfter?: string;
      signatureAlgorithm?: string;
      issuer?: string;
      rawData?: string;
    };
    csr?: string;
    intermediate?: {
      version?: number;
      serialNumber?: string;
      thumbprint?: string;
      subject?: string;
      notBefore?: string;
      notAfter?: string;
      signatureAlgorithm?: string;
      issuer?: string;
      rawData?: string;
    };
    root?: {
      version?: number;
      serialNumber?: string;
      thumbprint?: string;
      subject?: string;
      notBefore?: string;
      notAfter?: string;
      signatureAlgorithm?: string;
      issuer?: string;
      rawData?: string;
    };
    serialNumber?: string;
    lastCertificateIssuanceTime?: string;
    expirationTime?: string;
    isPrivateKeyExternal?: boolean;
    appServiceCertificateNotRenewableReasons?: (
      | "RegistrationStatusNotSupportedForRenewal"
      | "ExpirationNotInRenewalTimeRange"
      | "SubscriptionNotActive"
    )[];
    nextAutoRenewalTimeStamp?: string;
    contact?: {
      email?: string;
      nameFirst?: string;
      nameLast?: string;
      phone?: string;
    };
  };
  id?: string;
  name?: string;
  kind?: string;
  type?: string;
}
export const AppServiceCertificateOrdersUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    certificateOrderName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        certificates: Schema.optional(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              keyVaultId: Schema.optional(Schema.String),
              keyVaultSecretName: Schema.optional(Schema.String),
              provisioningState: Schema.optional(
                Schema.Literals([
                  "Initialized",
                  "WaitingOnCertificateOrder",
                  "Succeeded",
                  "CertificateOrderFailed",
                  "OperationNotPermittedOnKeyVault",
                  "AzureServiceUnauthorizedToAccessKeyVault",
                  "KeyVaultDoesNotExist",
                  "KeyVaultSecretDoesNotExist",
                  "UnknownError",
                  "ExternalPrivateKey",
                  "Unknown",
                ]),
              ),
            }),
          ),
        ),
        distinguishedName: Schema.optional(Schema.String),
        domainVerificationToken: Schema.optional(Schema.String),
        validityInYears: Schema.optional(Schema.Number),
        keySize: Schema.optional(Schema.Number),
        productType: Schema.Literals([
          "StandardDomainValidatedSsl",
          "StandardDomainValidatedWildCardSsl",
        ]),
        autoRenew: Schema.optional(Schema.Boolean),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "InProgress",
            "Deleting",
          ]),
        ),
        status: Schema.optional(
          Schema.Literals([
            "Pendingissuance",
            "Issued",
            "Revoked",
            "Canceled",
            "Denied",
            "Pendingrevocation",
            "PendingRekey",
            "Unused",
            "Expired",
            "NotSubmitted",
          ]),
        ),
        signedCertificate: Schema.optional(
          Schema.Struct({
            version: Schema.optional(Schema.Number),
            serialNumber: Schema.optional(Schema.String),
            thumbprint: Schema.optional(Schema.String),
            subject: Schema.optional(Schema.String),
            notBefore: Schema.optional(Schema.String),
            notAfter: Schema.optional(Schema.String),
            signatureAlgorithm: Schema.optional(Schema.String),
            issuer: Schema.optional(Schema.String),
            rawData: Schema.optional(Schema.String),
          }),
        ),
        csr: Schema.optional(Schema.String),
        intermediate: Schema.optional(
          Schema.Struct({
            version: Schema.optional(Schema.Number),
            serialNumber: Schema.optional(Schema.String),
            thumbprint: Schema.optional(Schema.String),
            subject: Schema.optional(Schema.String),
            notBefore: Schema.optional(Schema.String),
            notAfter: Schema.optional(Schema.String),
            signatureAlgorithm: Schema.optional(Schema.String),
            issuer: Schema.optional(Schema.String),
            rawData: Schema.optional(Schema.String),
          }),
        ),
        root: Schema.optional(
          Schema.Struct({
            version: Schema.optional(Schema.Number),
            serialNumber: Schema.optional(Schema.String),
            thumbprint: Schema.optional(Schema.String),
            subject: Schema.optional(Schema.String),
            notBefore: Schema.optional(Schema.String),
            notAfter: Schema.optional(Schema.String),
            signatureAlgorithm: Schema.optional(Schema.String),
            issuer: Schema.optional(Schema.String),
            rawData: Schema.optional(Schema.String),
          }),
        ),
        serialNumber: Schema.optional(Schema.String),
        lastCertificateIssuanceTime: Schema.optional(Schema.String),
        expirationTime: Schema.optional(Schema.String),
        isPrivateKeyExternal: Schema.optional(Schema.Boolean),
        appServiceCertificateNotRenewableReasons: Schema.optional(
          Schema.Array(
            Schema.Literals([
              "RegistrationStatusNotSupportedForRenewal",
              "ExpirationNotInRenewalTimeRange",
              "SubscriptionNotActive",
            ]),
          ),
        ),
        nextAutoRenewalTimeStamp: Schema.optional(Schema.String),
        contact: Schema.optional(
          Schema.Struct({
            email: Schema.optional(Schema.String),
            nameFirst: Schema.optional(Schema.String),
            nameLast: Schema.optional(Schema.String),
            phone: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}",
      apiVersion: "2024-11-01",
    }),
  ) as unknown as Schema.Codec<AppServiceCertificateOrdersUpdateInput>;

// Output Schema
export interface AppServiceCertificateOrdersUpdateOutput {
  id?: string;
  name?: string;
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
export const AppServiceCertificateOrdersUpdateOutput =
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
  }) as unknown as Schema.Codec<AppServiceCertificateOrdersUpdateOutput>;

// The operation
/**
 * Create or update a certificate purchase order.
 *
 * Description for Create or update a certificate purchase order.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param certificateOrderName - Name of the certificate order..
 */
export const AppServiceCertificateOrdersUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AppServiceCertificateOrdersUpdateInput,
    outputSchema: AppServiceCertificateOrdersUpdateOutput,
  }));
// Input Schema
export interface AppServiceCertificateOrdersUpdateCertificateInput {
  subscriptionId: string;
  resourceGroupName: string;
  certificateOrderName: string;
  name: string;
  properties?: {
    keyVaultId?: string;
    keyVaultSecretName?: string;
    provisioningState?:
      | "Initialized"
      | "WaitingOnCertificateOrder"
      | "Succeeded"
      | "CertificateOrderFailed"
      | "OperationNotPermittedOnKeyVault"
      | "AzureServiceUnauthorizedToAccessKeyVault"
      | "KeyVaultDoesNotExist"
      | "KeyVaultSecretDoesNotExist"
      | "UnknownError"
      | "ExternalPrivateKey"
      | "Unknown";
  };
  id?: string;
  kind?: string;
  type?: string;
}
export const AppServiceCertificateOrdersUpdateCertificateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    certificateOrderName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        keyVaultId: Schema.optional(Schema.String),
        keyVaultSecretName: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Initialized",
            "WaitingOnCertificateOrder",
            "Succeeded",
            "CertificateOrderFailed",
            "OperationNotPermittedOnKeyVault",
            "AzureServiceUnauthorizedToAccessKeyVault",
            "KeyVaultDoesNotExist",
            "KeyVaultSecretDoesNotExist",
            "UnknownError",
            "ExternalPrivateKey",
            "Unknown",
          ]),
        ),
      }),
    ),
    id: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}/certificates/{name}",
      apiVersion: "2024-11-01",
    }),
  ) as unknown as Schema.Codec<AppServiceCertificateOrdersUpdateCertificateInput>;

// Output Schema
export interface AppServiceCertificateOrdersUpdateCertificateOutput {
  id?: string;
  name?: string;
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
export const AppServiceCertificateOrdersUpdateCertificateOutput =
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
  }) as unknown as Schema.Codec<AppServiceCertificateOrdersUpdateCertificateOutput>;

// The operation
/**
 * Creates or updates a certificate and associates with key vault secret.
 *
 * Description for Creates or updates a certificate and associates with key vault secret.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param certificateOrderName - Name of the certificate order..
 * @param name - Name of the certificate.
 */
export const AppServiceCertificateOrdersUpdateCertificate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AppServiceCertificateOrdersUpdateCertificateInput,
    outputSchema: AppServiceCertificateOrdersUpdateCertificateOutput,
  }));
// Input Schema
export interface AppServiceCertificateOrdersValidatePurchaseInformationInput {
  subscriptionId: string;
  properties?: {
    certificates?: Record<
      string,
      {
        keyVaultId?: string;
        keyVaultSecretName?: string;
        provisioningState?:
          | "Initialized"
          | "WaitingOnCertificateOrder"
          | "Succeeded"
          | "CertificateOrderFailed"
          | "OperationNotPermittedOnKeyVault"
          | "AzureServiceUnauthorizedToAccessKeyVault"
          | "KeyVaultDoesNotExist"
          | "KeyVaultSecretDoesNotExist"
          | "UnknownError"
          | "ExternalPrivateKey"
          | "Unknown";
      }
    >;
    distinguishedName?: string;
    domainVerificationToken?: string;
    validityInYears?: number;
    keySize?: number;
    productType:
      | "StandardDomainValidatedSsl"
      | "StandardDomainValidatedWildCardSsl";
    autoRenew?: boolean;
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "InProgress"
      | "Deleting";
    status?:
      | "Pendingissuance"
      | "Issued"
      | "Revoked"
      | "Canceled"
      | "Denied"
      | "Pendingrevocation"
      | "PendingRekey"
      | "Unused"
      | "Expired"
      | "NotSubmitted";
    signedCertificate?: {
      version?: number;
      serialNumber?: string;
      thumbprint?: string;
      subject?: string;
      notBefore?: string;
      notAfter?: string;
      signatureAlgorithm?: string;
      issuer?: string;
      rawData?: string;
    };
    csr?: string;
    intermediate?: {
      version?: number;
      serialNumber?: string;
      thumbprint?: string;
      subject?: string;
      notBefore?: string;
      notAfter?: string;
      signatureAlgorithm?: string;
      issuer?: string;
      rawData?: string;
    };
    root?: {
      version?: number;
      serialNumber?: string;
      thumbprint?: string;
      subject?: string;
      notBefore?: string;
      notAfter?: string;
      signatureAlgorithm?: string;
      issuer?: string;
      rawData?: string;
    };
    serialNumber?: string;
    lastCertificateIssuanceTime?: string;
    expirationTime?: string;
    isPrivateKeyExternal?: boolean;
    appServiceCertificateNotRenewableReasons?: (
      | "RegistrationStatusNotSupportedForRenewal"
      | "ExpirationNotInRenewalTimeRange"
      | "SubscriptionNotActive"
    )[];
    nextAutoRenewalTimeStamp?: string;
    contact?: {
      email?: string;
      nameFirst?: string;
      nameLast?: string;
      phone?: string;
    };
  };
  kind?: string;
  tags?: Record<string, string>;
  location: string;
}
export const AppServiceCertificateOrdersValidatePurchaseInformationInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        certificates: Schema.optional(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              keyVaultId: Schema.optional(Schema.String),
              keyVaultSecretName: Schema.optional(Schema.String),
              provisioningState: Schema.optional(
                Schema.Literals([
                  "Initialized",
                  "WaitingOnCertificateOrder",
                  "Succeeded",
                  "CertificateOrderFailed",
                  "OperationNotPermittedOnKeyVault",
                  "AzureServiceUnauthorizedToAccessKeyVault",
                  "KeyVaultDoesNotExist",
                  "KeyVaultSecretDoesNotExist",
                  "UnknownError",
                  "ExternalPrivateKey",
                  "Unknown",
                ]),
              ),
            }),
          ),
        ),
        distinguishedName: Schema.optional(Schema.String),
        domainVerificationToken: Schema.optional(Schema.String),
        validityInYears: Schema.optional(Schema.Number),
        keySize: Schema.optional(Schema.Number),
        productType: Schema.Literals([
          "StandardDomainValidatedSsl",
          "StandardDomainValidatedWildCardSsl",
        ]),
        autoRenew: Schema.optional(Schema.Boolean),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "InProgress",
            "Deleting",
          ]),
        ),
        status: Schema.optional(
          Schema.Literals([
            "Pendingissuance",
            "Issued",
            "Revoked",
            "Canceled",
            "Denied",
            "Pendingrevocation",
            "PendingRekey",
            "Unused",
            "Expired",
            "NotSubmitted",
          ]),
        ),
        signedCertificate: Schema.optional(
          Schema.Struct({
            version: Schema.optional(Schema.Number),
            serialNumber: Schema.optional(Schema.String),
            thumbprint: Schema.optional(Schema.String),
            subject: Schema.optional(Schema.String),
            notBefore: Schema.optional(Schema.String),
            notAfter: Schema.optional(Schema.String),
            signatureAlgorithm: Schema.optional(Schema.String),
            issuer: Schema.optional(Schema.String),
            rawData: Schema.optional(Schema.String),
          }),
        ),
        csr: Schema.optional(Schema.String),
        intermediate: Schema.optional(
          Schema.Struct({
            version: Schema.optional(Schema.Number),
            serialNumber: Schema.optional(Schema.String),
            thumbprint: Schema.optional(Schema.String),
            subject: Schema.optional(Schema.String),
            notBefore: Schema.optional(Schema.String),
            notAfter: Schema.optional(Schema.String),
            signatureAlgorithm: Schema.optional(Schema.String),
            issuer: Schema.optional(Schema.String),
            rawData: Schema.optional(Schema.String),
          }),
        ),
        root: Schema.optional(
          Schema.Struct({
            version: Schema.optional(Schema.Number),
            serialNumber: Schema.optional(Schema.String),
            thumbprint: Schema.optional(Schema.String),
            subject: Schema.optional(Schema.String),
            notBefore: Schema.optional(Schema.String),
            notAfter: Schema.optional(Schema.String),
            signatureAlgorithm: Schema.optional(Schema.String),
            issuer: Schema.optional(Schema.String),
            rawData: Schema.optional(Schema.String),
          }),
        ),
        serialNumber: Schema.optional(Schema.String),
        lastCertificateIssuanceTime: Schema.optional(Schema.String),
        expirationTime: Schema.optional(Schema.String),
        isPrivateKeyExternal: Schema.optional(Schema.Boolean),
        appServiceCertificateNotRenewableReasons: Schema.optional(
          Schema.Array(
            Schema.Literals([
              "RegistrationStatusNotSupportedForRenewal",
              "ExpirationNotInRenewalTimeRange",
              "SubscriptionNotActive",
            ]),
          ),
        ),
        nextAutoRenewalTimeStamp: Schema.optional(Schema.String),
        contact: Schema.optional(
          Schema.Struct({
            email: Schema.optional(Schema.String),
            nameFirst: Schema.optional(Schema.String),
            nameLast: Schema.optional(Schema.String),
            phone: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    kind: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.CertificateRegistration/validateCertificateRegistrationInformation",
      apiVersion: "2024-11-01",
    }),
  ) as unknown as Schema.Codec<AppServiceCertificateOrdersValidatePurchaseInformationInput>;

// Output Schema
export type AppServiceCertificateOrdersValidatePurchaseInformationOutput = void;
export const AppServiceCertificateOrdersValidatePurchaseInformationOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<AppServiceCertificateOrdersValidatePurchaseInformationOutput>;

// The operation
/**
 * Validate information for a certificate order.
 *
 * Description for Validate information for a certificate order.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const AppServiceCertificateOrdersValidatePurchaseInformation =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AppServiceCertificateOrdersValidatePurchaseInformationInput,
    outputSchema: AppServiceCertificateOrdersValidatePurchaseInformationOutput,
  }));
// Input Schema
export interface AppServiceCertificateOrdersVerifyDomainOwnershipInput {
  subscriptionId: string;
  resourceGroupName: string;
  certificateOrderName: string;
}
export const AppServiceCertificateOrdersVerifyDomainOwnershipInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    certificateOrderName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}/verifyDomainOwnership",
      apiVersion: "2024-11-01",
    }),
  ) as unknown as Schema.Codec<AppServiceCertificateOrdersVerifyDomainOwnershipInput>;

// Output Schema
export type AppServiceCertificateOrdersVerifyDomainOwnershipOutput = void;
export const AppServiceCertificateOrdersVerifyDomainOwnershipOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<AppServiceCertificateOrdersVerifyDomainOwnershipOutput>;

// The operation
/**
 * Verify domain ownership for this certificate order.
 *
 * Description for Verify domain ownership for this certificate order.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param certificateOrderName - Name of the certificate order..
 */
export const AppServiceCertificateOrdersVerifyDomainOwnership =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AppServiceCertificateOrdersVerifyDomainOwnershipInput,
    outputSchema: AppServiceCertificateOrdersVerifyDomainOwnershipOutput,
  }));
// Input Schema
export interface CertificateOrdersDiagnosticsGetAppServiceCertificateOrderDetectorResponseInput {
  subscriptionId: string;
  resourceGroupName: string;
  certificateOrderName: string;
  detectorName: string;
  startTime?: string;
  endTime?: string;
  timeGrain?: string;
}
export const CertificateOrdersDiagnosticsGetAppServiceCertificateOrderDetectorResponseInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    certificateOrderName: Schema.String.pipe(T.PathParam()),
    detectorName: Schema.String.pipe(T.PathParam()),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    timeGrain: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}/detectors/{detectorName}",
      apiVersion: "2024-11-01",
    }),
  ) as unknown as Schema.Codec<CertificateOrdersDiagnosticsGetAppServiceCertificateOrderDetectorResponseInput>;

// Output Schema
export interface CertificateOrdersDiagnosticsGetAppServiceCertificateOrderDetectorResponseOutput {
  id?: string;
  name?: string;
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
export const CertificateOrdersDiagnosticsGetAppServiceCertificateOrderDetectorResponseOutput =
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
  }) as unknown as Schema.Codec<CertificateOrdersDiagnosticsGetAppServiceCertificateOrderDetectorResponseOutput>;

// The operation
/**
 * Microsoft.CertificateRegistration call to get a detector response from App Lens.
 *
 * Description for Microsoft.CertificateRegistration call to get a detector response from App Lens.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param certificateOrderName - Name of the certificate order..
 * @param detectorName - The detector name which needs to be run.
 * @param startTime - The start time for detector response.
 * @param endTime - The end time for the detector response.
 * @param timeGrain - The time grain for the detector response.
 */
export const CertificateOrdersDiagnosticsGetAppServiceCertificateOrderDetectorResponse =
  /*@__PURE__*/ API.make(() => ({
    inputSchema:
      CertificateOrdersDiagnosticsGetAppServiceCertificateOrderDetectorResponseInput,
    outputSchema:
      CertificateOrdersDiagnosticsGetAppServiceCertificateOrderDetectorResponseOutput,
  }));
// Input Schema
export interface CertificateOrdersDiagnosticsListAppServiceCertificateOrderDetectorResponseInput {
  subscriptionId: string;
  resourceGroupName: string;
  certificateOrderName: string;
}
export const CertificateOrdersDiagnosticsListAppServiceCertificateOrderDetectorResponseInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    certificateOrderName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}/detectors",
      apiVersion: "2024-11-01",
    }),
  ) as unknown as Schema.Codec<CertificateOrdersDiagnosticsListAppServiceCertificateOrderDetectorResponseInput>;

// Output Schema
export interface CertificateOrdersDiagnosticsListAppServiceCertificateOrderDetectorResponseOutput {
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
export const CertificateOrdersDiagnosticsListAppServiceCertificateOrderDetectorResponseOutput =
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
  }) as unknown as Schema.Codec<CertificateOrdersDiagnosticsListAppServiceCertificateOrderDetectorResponseOutput>;

// The operation
/**
 * Microsoft.CertificateRegistration to get the list of detectors for this RP.
 *
 * Description for Microsoft.CertificateRegistration to get the list of detectors for this RP.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param certificateOrderName - Name of the certificate order..
 */
export const CertificateOrdersDiagnosticsListAppServiceCertificateOrderDetectorResponse =
  /*@__PURE__*/ API.make(() => ({
    inputSchema:
      CertificateOrdersDiagnosticsListAppServiceCertificateOrderDetectorResponseInput,
    outputSchema:
      CertificateOrdersDiagnosticsListAppServiceCertificateOrderDetectorResponseOutput,
  }));
// Input Schema
export interface CertificateRegistrationProviderListOperationsInput {}
export const CertificateRegistrationProviderListOperationsInput =
  /*@__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.CertificateRegistration/operations",
      apiVersion: "2024-11-01",
    }),
  ) as unknown as Schema.Codec<CertificateRegistrationProviderListOperationsInput>;

// Output Schema
export interface CertificateRegistrationProviderListOperationsOutput {
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
        metricSpecifications?: {
          name?: string;
          displayName?: string;
          displayDescription?: string;
          unit?: string;
          aggregationType?: string;
          supportsInstanceLevelAggregation?: boolean;
          enableRegionalMdmAccount?: boolean;
          sourceMdmAccount?: string;
          sourceMdmNamespace?: string;
          metricFilterPattern?: string;
          fillGapWithZero?: boolean;
          isInternal?: boolean;
          dimensions?: {
            name?: string;
            displayName?: string;
            internalName?: string;
            toBeExportedForShoebox?: boolean;
          }[];
          category?: string;
          availabilities?: { timeGrain?: string; blobDuration?: string }[];
          supportedTimeGrainTypes?: string[];
          supportedAggregationTypes?: string[];
        }[];
        logSpecifications?: {
          name?: string;
          displayName?: string;
          blobDuration?: string;
          logFilterPattern?: string;
        }[];
      };
    };
  }[];
  nextLink?: string;
}
export const CertificateRegistrationProviderListOperationsOutput =
  /*@__PURE__*/ Schema.Struct({
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
                metricSpecifications: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      name: Schema.optional(Schema.String),
                      displayName: Schema.optional(Schema.String),
                      displayDescription: Schema.optional(Schema.String),
                      unit: Schema.optional(Schema.String),
                      aggregationType: Schema.optional(Schema.String),
                      supportsInstanceLevelAggregation: Schema.optional(
                        Schema.Boolean,
                      ),
                      enableRegionalMdmAccount: Schema.optional(Schema.Boolean),
                      sourceMdmAccount: Schema.optional(Schema.String),
                      sourceMdmNamespace: Schema.optional(Schema.String),
                      metricFilterPattern: Schema.optional(Schema.String),
                      fillGapWithZero: Schema.optional(Schema.Boolean),
                      isInternal: Schema.optional(Schema.Boolean),
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
                      category: Schema.optional(Schema.String),
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
                      supportedAggregationTypes: Schema.optional(
                        Schema.Array(Schema.String),
                      ),
                    }),
                  ),
                ),
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
              }),
            ),
          }),
        ),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<CertificateRegistrationProviderListOperationsOutput>;

// The operation
/**
 * Implements Csm operations Api to exposes the list of available Csm Apis under the resource provider
 *
 * Description for Implements Csm operations Api to exposes the list of available Csm Apis under the resource provider
 *
 * @param api-version - The API version to use for this operation.
 */
export const CertificateRegistrationProviderListOperations =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CertificateRegistrationProviderListOperationsInput,
    outputSchema: CertificateRegistrationProviderListOperationsOutput,
  }));
