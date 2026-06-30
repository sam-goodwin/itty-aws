/**
 * Azure Deviceprovisioningservices API
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
export interface DpsCertificateCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  provisioningServiceName: string;
  certificateName: string;
  properties?: {
    subject?: string;
    expiry?: string;
    thumbprint?: string;
    isVerified?: boolean;
    certificate?: string;
    created?: string;
    updated?: string;
  };
  id?: string;
  name?: string;
  etag?: string;
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
export const DpsCertificateCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    provisioningServiceName: Schema.String.pipe(T.PathParam()),
    certificateName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        subject: Schema.optional(Schema.String),
        expiry: Schema.optional(Schema.String),
        thumbprint: Schema.optional(Schema.String),
        isVerified: Schema.optional(Schema.Boolean),
        certificate: Schema.optional(Schema.String),
        created: Schema.optional(Schema.String),
        updated: Schema.optional(Schema.String),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/provisioningServices/{provisioningServiceName}/certificates/{certificateName}",
      apiVersion: "2022-12-12",
    }),
  ) as unknown as Schema.Codec<DpsCertificateCreateOrUpdateInput>;

// Output Schema
export interface DpsCertificateCreateOrUpdateOutput {
  properties?: {
    subject?: string;
    expiry?: string;
    thumbprint?: string;
    isVerified?: boolean;
    certificate?: string;
    created?: string;
    updated?: string;
  };
  id?: string;
  name?: string;
  etag?: string;
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
export const DpsCertificateCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        subject: Schema.optional(Schema.String),
        expiry: Schema.optional(Schema.String),
        thumbprint: Schema.optional(Schema.String),
        isVerified: Schema.optional(Schema.Boolean),
        certificate: Schema.optional(Schema.String),
        created: Schema.optional(Schema.String),
        updated: Schema.optional(Schema.String),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<DpsCertificateCreateOrUpdateOutput>;

// The operation
/**
 * Upload the certificate to the provisioning service.
 *
 * Add new certificate or update an existing certificate.
 *
 * @param api-version - The version of the API.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - Resource group identifier.
 * @param provisioningServiceName - The name of the provisioning service.
 * @param certificateName - The name of the certificate create or update.
 * @param If-Match - ETag of the certificate. This is required to update an existing certificate, and ignored while creating a brand new certificate.
 */
export const DpsCertificateCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DpsCertificateCreateOrUpdateInput,
    outputSchema: DpsCertificateCreateOrUpdateOutput,
  }));
// Input Schema
export interface DpsCertificateDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  provisioningServiceName: string;
  certificateName: string;
  "certificate.name"?: string;
  "certificate.rawBytes"?: string;
  "certificate.isVerified"?: boolean;
  "certificate.purpose"?: "clientAuthentication" | "serverAuthentication";
  "certificate.created"?: string;
  "certificate.lastUpdated"?: string;
  "certificate.hasPrivateKey"?: boolean;
  "certificate.nonce"?: string;
}
export const DpsCertificateDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    provisioningServiceName: Schema.String.pipe(T.PathParam()),
    certificateName: Schema.String.pipe(T.PathParam()),
    "certificate.name": Schema.optional(Schema.String),
    "certificate.rawBytes": Schema.optional(Schema.String),
    "certificate.isVerified": Schema.optional(Schema.Boolean),
    "certificate.purpose": Schema.optional(
      Schema.Literals(["clientAuthentication", "serverAuthentication"]),
    ),
    "certificate.created": Schema.optional(Schema.String),
    "certificate.lastUpdated": Schema.optional(Schema.String),
    "certificate.hasPrivateKey": Schema.optional(Schema.Boolean),
    "certificate.nonce": Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/provisioningServices/{provisioningServiceName}/certificates/{certificateName}",
      apiVersion: "2022-12-12",
    }),
  ) as unknown as Schema.Codec<DpsCertificateDeleteInput>;

// Output Schema
export type DpsCertificateDeleteOutput = void;
export const DpsCertificateDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DpsCertificateDeleteOutput>;

// The operation
/**
 * Delete the Provisioning Service Certificate.
 *
 * Deletes the specified certificate associated with the Provisioning Service
 *
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - Resource group identifier.
 * @param If-Match - ETag of the certificate
 * @param provisioningServiceName - The name of the provisioning service.
 * @param certificateName - This is a mandatory field, and is the logical name of the certificate that the provisioning service will access by.
 * @param certificate.name - This is optional, and it is the Common Name of the certificate.
 * @param certificate.rawBytes - Raw data within the certificate.
 * @param certificate.isVerified - Indicates if certificate has been verified by owner of the private key.
 * @param certificate.purpose - A description that mentions the purpose of the certificate.
 * @param certificate.created - Time the certificate is created.
 * @param certificate.lastUpdated - Time the certificate is last updated.
 * @param certificate.hasPrivateKey - Indicates if the certificate contains a private key.
 * @param certificate.nonce - Random number generated to indicate Proof of Possession.
 * @param api-version - The version of the API.
 */
export const DpsCertificateDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DpsCertificateDeleteInput,
    outputSchema: DpsCertificateDeleteOutput,
  }),
);
// Input Schema
export interface DpsCertificateGenerateVerificationCodeInput {
  certificateName: string;
  subscriptionId: string;
  resourceGroupName: string;
  provisioningServiceName: string;
  "certificate.name"?: string;
  "certificate.rawBytes"?: string;
  "certificate.isVerified"?: boolean;
  "certificate.purpose"?: "clientAuthentication" | "serverAuthentication";
  "certificate.created"?: string;
  "certificate.lastUpdated"?: string;
  "certificate.hasPrivateKey"?: boolean;
  "certificate.nonce"?: string;
}
export const DpsCertificateGenerateVerificationCodeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    certificateName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    provisioningServiceName: Schema.String.pipe(T.PathParam()),
    "certificate.name": Schema.optional(Schema.String),
    "certificate.rawBytes": Schema.optional(Schema.String),
    "certificate.isVerified": Schema.optional(Schema.Boolean),
    "certificate.purpose": Schema.optional(
      Schema.Literals(["clientAuthentication", "serverAuthentication"]),
    ),
    "certificate.created": Schema.optional(Schema.String),
    "certificate.lastUpdated": Schema.optional(Schema.String),
    "certificate.hasPrivateKey": Schema.optional(Schema.Boolean),
    "certificate.nonce": Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/provisioningServices/{provisioningServiceName}/certificates/{certificateName}/generateVerificationCode",
      apiVersion: "2022-12-12",
    }),
  ) as unknown as Schema.Codec<DpsCertificateGenerateVerificationCodeInput>;

// Output Schema
export interface DpsCertificateGenerateVerificationCodeOutput {
  name?: string;
  etag?: string;
  id?: string;
  type?: string;
  properties?: {
    verificationCode?: string;
    subject?: string;
    expiry?: string;
    thumbprint?: string;
    isVerified?: boolean;
    certificate?: string;
    created?: string;
    updated?: string;
  };
}
export const DpsCertificateGenerateVerificationCodeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        verificationCode: Schema.optional(Schema.String),
        subject: Schema.optional(Schema.String),
        expiry: Schema.optional(Schema.String),
        thumbprint: Schema.optional(Schema.String),
        isVerified: Schema.optional(Schema.Boolean),
        certificate: Schema.optional(Schema.String),
        created: Schema.optional(Schema.String),
        updated: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<DpsCertificateGenerateVerificationCodeOutput>;

// The operation
/**
 * Generate verification code for Proof of Possession.
 *
 * @param certificateName - The mandatory logical name of the certificate, that the provisioning service uses to access.
 * @param If-Match - ETag of the certificate. This is required to update an existing certificate, and ignored while creating a brand new certificate.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - name of resource group.
 * @param provisioningServiceName - Name of provisioning service.
 * @param certificate.name - Common Name for the certificate.
 * @param certificate.rawBytes - Raw data of certificate.
 * @param certificate.isVerified - Indicates if the certificate has been verified by owner of the private key.
 * @param certificate.purpose - Description mentioning the purpose of the certificate.
 * @param certificate.created - Certificate creation time.
 * @param certificate.lastUpdated - Certificate last updated time.
 * @param certificate.hasPrivateKey - Indicates if the certificate contains private key.
 * @param certificate.nonce - Random number generated to indicate Proof of Possession.
 * @param api-version - The version of the API.
 */
export const DpsCertificateGenerateVerificationCode =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DpsCertificateGenerateVerificationCodeInput,
    outputSchema: DpsCertificateGenerateVerificationCodeOutput,
  }));
// Input Schema
export interface DpsCertificateGetInput {
  certificateName: string;
  subscriptionId: string;
  resourceGroupName: string;
  provisioningServiceName: string;
}
export const DpsCertificateGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    certificateName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    provisioningServiceName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/provisioningServices/{provisioningServiceName}/certificates/{certificateName}",
    apiVersion: "2022-12-12",
  }),
) as unknown as Schema.Codec<DpsCertificateGetInput>;

// Output Schema
export interface DpsCertificateGetOutput {
  properties?: {
    subject?: string;
    expiry?: string;
    thumbprint?: string;
    isVerified?: boolean;
    certificate?: string;
    created?: string;
    updated?: string;
  };
  id?: string;
  name?: string;
  etag?: string;
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
export const DpsCertificateGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        subject: Schema.optional(Schema.String),
        expiry: Schema.optional(Schema.String),
        thumbprint: Schema.optional(Schema.String),
        isVerified: Schema.optional(Schema.Boolean),
        certificate: Schema.optional(Schema.String),
        created: Schema.optional(Schema.String),
        updated: Schema.optional(Schema.String),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<DpsCertificateGetOutput>;

// The operation
/**
 * Get the certificate from the provisioning service.
 *
 * @param certificateName - Name of the certificate to retrieve.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - Resource group identifier.
 * @param provisioningServiceName - Name of the provisioning service the certificate is associated with.
 * @param If-Match - ETag of the certificate.
 * @param api-version - The version of the API.
 */
export const DpsCertificateGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DpsCertificateGetInput,
  outputSchema: DpsCertificateGetOutput,
}));
// Input Schema
export interface DpsCertificateListInput {
  subscriptionId: string;
  resourceGroupName: string;
  provisioningServiceName: string;
}
export const DpsCertificateListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    provisioningServiceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/provisioningServices/{provisioningServiceName}/certificates",
      apiVersion: "2022-12-12",
    }),
  ) as unknown as Schema.Codec<DpsCertificateListInput>;

// Output Schema
export interface DpsCertificateListOutput {
  value?: {
    properties?: {
      subject?: string;
      expiry?: string;
      thumbprint?: string;
      isVerified?: boolean;
      certificate?: string;
      created?: string;
      updated?: string;
    };
    id?: string;
    name?: string;
    etag?: string;
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
}
export const DpsCertificateListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          properties: Schema.optional(
            Schema.Struct({
              subject: Schema.optional(Schema.String),
              expiry: Schema.optional(Schema.String),
              thumbprint: Schema.optional(Schema.String),
              isVerified: Schema.optional(Schema.Boolean),
              certificate: Schema.optional(Schema.String),
              created: Schema.optional(Schema.String),
              updated: Schema.optional(Schema.String),
            }),
          ),
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          etag: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<DpsCertificateListOutput>;

// The operation
/**
 * Get all the certificates tied to the provisioning service.
 *
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - Name of resource group.
 * @param provisioningServiceName - Name of provisioning service to retrieve certificates for.
 * @param api-version - The version of the API.
 */
export const DpsCertificateList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DpsCertificateListInput,
  outputSchema: DpsCertificateListOutput,
}));
// Input Schema
export interface DpsCertificateVerifyCertificateInput {
  certificateName: string;
  subscriptionId: string;
  resourceGroupName: string;
  provisioningServiceName: string;
  "certificate.name"?: string;
  "certificate.rawBytes"?: string;
  "certificate.isVerified"?: boolean;
  "certificate.purpose"?: "clientAuthentication" | "serverAuthentication";
  "certificate.created"?: string;
  "certificate.lastUpdated"?: string;
  "certificate.hasPrivateKey"?: boolean;
  "certificate.nonce"?: string;
  certificate?: string;
}
export const DpsCertificateVerifyCertificateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    certificateName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    provisioningServiceName: Schema.String.pipe(T.PathParam()),
    "certificate.name": Schema.optional(Schema.String),
    "certificate.rawBytes": Schema.optional(Schema.String),
    "certificate.isVerified": Schema.optional(Schema.Boolean),
    "certificate.purpose": Schema.optional(
      Schema.Literals(["clientAuthentication", "serverAuthentication"]),
    ),
    "certificate.created": Schema.optional(Schema.String),
    "certificate.lastUpdated": Schema.optional(Schema.String),
    "certificate.hasPrivateKey": Schema.optional(Schema.Boolean),
    "certificate.nonce": Schema.optional(Schema.String),
    certificate: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/provisioningServices/{provisioningServiceName}/certificates/{certificateName}/verify",
      apiVersion: "2022-12-12",
    }),
  ) as unknown as Schema.Codec<DpsCertificateVerifyCertificateInput>;

// Output Schema
export interface DpsCertificateVerifyCertificateOutput {
  properties?: {
    subject?: string;
    expiry?: string;
    thumbprint?: string;
    isVerified?: boolean;
    certificate?: string;
    created?: string;
    updated?: string;
  };
  id?: string;
  name?: string;
  etag?: string;
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
export const DpsCertificateVerifyCertificateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        subject: Schema.optional(Schema.String),
        expiry: Schema.optional(Schema.String),
        thumbprint: Schema.optional(Schema.String),
        isVerified: Schema.optional(Schema.Boolean),
        certificate: Schema.optional(Schema.String),
        created: Schema.optional(Schema.String),
        updated: Schema.optional(Schema.String),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<DpsCertificateVerifyCertificateOutput>;

// The operation
/**
 * Verify certificate's private key possession.
 *
 * Verifies the certificate's private key possession by providing the leaf cert issued by the verifying pre uploaded certificate.
 *
 * @param certificateName - The mandatory logical name of the certificate, that the provisioning service uses to access.
 * @param If-Match - ETag of the certificate.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - Resource group name.
 * @param provisioningServiceName - Provisioning service name.
 * @param certificate.name - Common Name for the certificate.
 * @param certificate.rawBytes - Raw data of certificate.
 * @param certificate.isVerified - Indicates if the certificate has been verified by owner of the private key.
 * @param certificate.purpose - Describe the purpose of the certificate.
 * @param certificate.created - Certificate creation time.
 * @param certificate.lastUpdated - Certificate last updated time.
 * @param certificate.hasPrivateKey - Indicates if the certificate contains private key.
 * @param certificate.nonce - Random number generated to indicate Proof of Possession.
 * @param api-version - The version of the API.
 */
export const DpsCertificateVerifyCertificate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DpsCertificateVerifyCertificateInput,
    outputSchema: DpsCertificateVerifyCertificateOutput,
  }));
// Input Schema
export interface IotDpsResourceCheckProvisioningServiceNameAvailabilityInput {
  subscriptionId: string;
  name: string;
}
export const IotDpsResourceCheckProvisioningServiceNameAvailabilityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Devices/checkProvisioningServiceNameAvailability",
      apiVersion: "2022-12-12",
    }),
  ) as unknown as Schema.Codec<IotDpsResourceCheckProvisioningServiceNameAvailabilityInput>;

// Output Schema
export interface IotDpsResourceCheckProvisioningServiceNameAvailabilityOutput {
  nameAvailable?: boolean;
  reason?: "Invalid" | "AlreadyExists";
  message?: string;
}
export const IotDpsResourceCheckProvisioningServiceNameAvailabilityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.Literals(["Invalid", "AlreadyExists"])),
    message: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<IotDpsResourceCheckProvisioningServiceNameAvailabilityOutput>;

// The operation
/**
 * Check if a provisioning service name is available.
 *
 * Check if a provisioning service name is available. This will validate if the name is syntactically valid and if the name is usable
 *
 * @param subscriptionId - The subscription identifier.
 * @param api-version - The version of the API.
 */
export const IotDpsResourceCheckProvisioningServiceNameAvailability =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IotDpsResourceCheckProvisioningServiceNameAvailabilityInput,
    outputSchema: IotDpsResourceCheckProvisioningServiceNameAvailabilityOutput,
  }));
// Input Schema
export interface IotDpsResourceCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  provisioningServiceName: string;
  etag?: string;
  properties: {
    state?:
      | "Activating"
      | "Active"
      | "Deleting"
      | "Deleted"
      | "ActivationFailed"
      | "DeletionFailed"
      | "Transitioning"
      | "Suspending"
      | "Suspended"
      | "Resuming"
      | "FailingOver"
      | "FailoverFailed";
    publicNetworkAccess?: "Enabled" | "Disabled";
    ipFilterRules?: {
      filterName: string;
      action: "Accept" | "Reject";
      ipMask: string;
      target?: "all" | "serviceApi" | "deviceApi";
    }[];
    privateEndpointConnections?: {
      id?: string;
      name?: string;
      type?: string;
      properties: {
        privateEndpoint?: { id?: string };
        privateLinkServiceConnectionState: {
          status: "Pending" | "Approved" | "Rejected" | "Disconnected";
          description: string;
          actionsRequired?: string;
        };
      };
      systemData?: {
        createdBy?: string;
        createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
        createdAt?: string;
        lastModifiedBy?: string;
        lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
        lastModifiedAt?: string;
      };
    }[];
    provisioningState?: string;
    iotHubs?: {
      applyAllocationPolicy?: boolean;
      allocationWeight?: number;
      name?: string;
      connectionString: string | Redacted.Redacted<string>;
      location: string;
    }[];
    allocationPolicy?: "Hashed" | "GeoLatency" | "Static";
    serviceOperationsHostName?: string;
    deviceProvisioningHostName?: string;
    idScope?: string;
    authorizationPolicies?: {
      keyName: string;
      primaryKey?: string;
      secondaryKey?: string;
      rights:
        | "ServiceConfig"
        | "EnrollmentRead"
        | "EnrollmentWrite"
        | "DeviceConnect"
        | "RegistrationStatusRead"
        | "RegistrationStatusWrite";
    }[];
    enableDataResidency?: boolean;
    portalOperationsHostName?: string;
  };
  sku: { name?: "S1"; tier?: string; capacity?: number };
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
  location: string;
  resourcegroup?: string;
  subscriptionid?: string;
  tags?: Record<string, string>;
}
export const IotDpsResourceCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    provisioningServiceName: Schema.String.pipe(T.PathParam()),
    etag: Schema.optional(Schema.String),
    properties: Schema.Struct({
      state: Schema.optional(
        Schema.Literals([
          "Activating",
          "Active",
          "Deleting",
          "Deleted",
          "ActivationFailed",
          "DeletionFailed",
          "Transitioning",
          "Suspending",
          "Suspended",
          "Resuming",
          "FailingOver",
          "FailoverFailed",
        ]),
      ),
      publicNetworkAccess: Schema.optional(
        Schema.Literals(["Enabled", "Disabled"]),
      ),
      ipFilterRules: Schema.optional(
        Schema.Array(
          Schema.Struct({
            filterName: Schema.String,
            action: Schema.Literals(["Accept", "Reject"]),
            ipMask: Schema.String,
            target: Schema.optional(
              Schema.Literals(["all", "serviceApi", "deviceApi"]),
            ),
          }),
        ),
      ),
      privateEndpointConnections: Schema.optional(
        Schema.Array(
          Schema.Struct({
            id: Schema.optional(Schema.String),
            name: Schema.optional(Schema.String),
            type: Schema.optional(Schema.String),
            properties: Schema.Struct({
              privateEndpoint: Schema.optional(
                Schema.Struct({
                  id: Schema.optional(Schema.String),
                }),
              ),
              privateLinkServiceConnectionState: Schema.Struct({
                status: Schema.Literals([
                  "Pending",
                  "Approved",
                  "Rejected",
                  "Disconnected",
                ]),
                description: Schema.String,
                actionsRequired: Schema.optional(Schema.String),
              }),
            }),
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
      provisioningState: Schema.optional(Schema.String),
      iotHubs: Schema.optional(
        Schema.Array(
          Schema.Struct({
            applyAllocationPolicy: Schema.optional(Schema.Boolean),
            allocationWeight: Schema.optional(Schema.Number),
            name: Schema.optional(Schema.String),
            connectionString: SensitiveString,
            location: Schema.String,
          }),
        ),
      ),
      allocationPolicy: Schema.optional(
        Schema.Literals(["Hashed", "GeoLatency", "Static"]),
      ),
      serviceOperationsHostName: Schema.optional(Schema.String),
      deviceProvisioningHostName: Schema.optional(Schema.String),
      idScope: Schema.optional(Schema.String),
      authorizationPolicies: Schema.optional(
        Schema.Array(
          Schema.Struct({
            keyName: Schema.String,
            primaryKey: Schema.optional(Schema.String),
            secondaryKey: Schema.optional(Schema.String),
            rights: Schema.Literals([
              "ServiceConfig",
              "EnrollmentRead",
              "EnrollmentWrite",
              "DeviceConnect",
              "RegistrationStatusRead",
              "RegistrationStatusWrite",
            ]),
          }),
        ),
      ),
      enableDataResidency: Schema.optional(Schema.Boolean),
      portalOperationsHostName: Schema.optional(Schema.String),
    }),
    sku: Schema.Struct({
      name: Schema.optional(Schema.Literals(["S1"])),
      tier: Schema.optional(Schema.String),
      capacity: Schema.optional(Schema.Number),
    }),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
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
    location: Schema.String,
    resourcegroup: Schema.optional(Schema.String),
    subscriptionid: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/provisioningServices/{provisioningServiceName}",
      apiVersion: "2022-12-12",
    }),
  ) as unknown as Schema.Codec<IotDpsResourceCreateOrUpdateInput>;

// Output Schema
export interface IotDpsResourceCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  location: string;
  resourcegroup?: string;
  subscriptionid?: string;
  tags?: Record<string, string>;
}
export const IotDpsResourceCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.String,
    resourcegroup: Schema.optional(Schema.String),
    subscriptionid: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }) as unknown as Schema.Codec<IotDpsResourceCreateOrUpdateOutput>;

// The operation
/**
 * Create or update the metadata of the provisioning service.
 *
 * Create or update the metadata of the provisioning service. The usual pattern to modify a property is to retrieve the provisioning service metadata and security metadata, and then combine them with the modified values in a new body to update the provisioning service.
 *
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - Resource group identifier.
 * @param provisioningServiceName - Name of provisioning service to create or update.
 * @param api-version - The version of the API.
 */
export const IotDpsResourceCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IotDpsResourceCreateOrUpdateInput,
    outputSchema: IotDpsResourceCreateOrUpdateOutput,
  }));
// Input Schema
export interface IotDpsResourceCreateOrUpdatePrivateEndpointConnectionInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  privateEndpointConnectionName: string;
  id?: string;
  name?: string;
  type?: string;
  properties: {
    privateEndpoint?: { id?: string };
    privateLinkServiceConnectionState: {
      status: "Pending" | "Approved" | "Rejected" | "Disconnected";
      description: string;
      actionsRequired?: string;
    };
  };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const IotDpsResourceCreateOrUpdatePrivateEndpointConnectionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    properties: Schema.Struct({
      privateEndpoint: Schema.optional(
        Schema.Struct({
          id: Schema.optional(Schema.String),
        }),
      ),
      privateLinkServiceConnectionState: Schema.Struct({
        status: Schema.Literals([
          "Pending",
          "Approved",
          "Rejected",
          "Disconnected",
        ]),
        description: Schema.String,
        actionsRequired: Schema.optional(Schema.String),
      }),
    }),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/provisioningServices/{resourceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2022-12-12",
    }),
  ) as unknown as Schema.Codec<IotDpsResourceCreateOrUpdatePrivateEndpointConnectionInput>;

// Output Schema
export interface IotDpsResourceCreateOrUpdatePrivateEndpointConnectionOutput {
  id?: string;
  name?: string;
  type?: string;
  properties: {
    privateEndpoint?: { id?: string };
    privateLinkServiceConnectionState: {
      status: "Pending" | "Approved" | "Rejected" | "Disconnected";
      description: string;
      actionsRequired?: string;
    };
  };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const IotDpsResourceCreateOrUpdatePrivateEndpointConnectionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    properties: Schema.Struct({
      privateEndpoint: Schema.optional(
        Schema.Struct({
          id: Schema.optional(Schema.String),
        }),
      ),
      privateLinkServiceConnectionState: Schema.Struct({
        status: Schema.Literals([
          "Pending",
          "Approved",
          "Rejected",
          "Disconnected",
        ]),
        description: Schema.String,
        actionsRequired: Schema.optional(Schema.String),
      }),
    }),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<IotDpsResourceCreateOrUpdatePrivateEndpointConnectionOutput>;

// The operation
/**
 * Create or update private endpoint connection
 *
 * Create or update the status of a private endpoint connection with the specified name
 *
 * @param api-version - The version of the API.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the provisioning service.
 * @param resourceName - The name of the provisioning service.
 * @param privateEndpointConnectionName - The name of the private endpoint connection
 */
export const IotDpsResourceCreateOrUpdatePrivateEndpointConnection =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IotDpsResourceCreateOrUpdatePrivateEndpointConnectionInput,
    outputSchema: IotDpsResourceCreateOrUpdatePrivateEndpointConnectionOutput,
  }));
// Input Schema
export interface IotDpsResourceDeleteInput {
  provisioningServiceName: string;
  subscriptionId: string;
  resourceGroupName: string;
}
export const IotDpsResourceDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provisioningServiceName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/provisioningServices/{provisioningServiceName}",
      apiVersion: "2022-12-12",
    }),
  ) as unknown as Schema.Codec<IotDpsResourceDeleteInput>;

// Output Schema
export type IotDpsResourceDeleteOutput = void;
export const IotDpsResourceDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<IotDpsResourceDeleteOutput>;

// The operation
/**
 * Delete the Provisioning Service
 *
 * Deletes the Provisioning Service.
 *
 * @param provisioningServiceName - Name of provisioning service to delete.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - Resource group identifier.
 * @param api-version - The version of the API.
 */
export const IotDpsResourceDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: IotDpsResourceDeleteInput,
    outputSchema: IotDpsResourceDeleteOutput,
  }),
);
// Input Schema
export interface IotDpsResourceDeletePrivateEndpointConnectionInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  privateEndpointConnectionName: string;
}
export const IotDpsResourceDeletePrivateEndpointConnectionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/provisioningServices/{resourceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2022-12-12",
    }),
  ) as unknown as Schema.Codec<IotDpsResourceDeletePrivateEndpointConnectionInput>;

// Output Schema
export interface IotDpsResourceDeletePrivateEndpointConnectionOutput {
  id?: string;
  name?: string;
  type?: string;
  properties: {
    privateEndpoint?: { id?: string };
    privateLinkServiceConnectionState: {
      status: "Pending" | "Approved" | "Rejected" | "Disconnected";
      description: string;
      actionsRequired?: string;
    };
  };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const IotDpsResourceDeletePrivateEndpointConnectionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    properties: Schema.Struct({
      privateEndpoint: Schema.optional(
        Schema.Struct({
          id: Schema.optional(Schema.String),
        }),
      ),
      privateLinkServiceConnectionState: Schema.Struct({
        status: Schema.Literals([
          "Pending",
          "Approved",
          "Rejected",
          "Disconnected",
        ]),
        description: Schema.String,
        actionsRequired: Schema.optional(Schema.String),
      }),
    }),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<IotDpsResourceDeletePrivateEndpointConnectionOutput>;

// The operation
/**
 * Delete private endpoint connection
 *
 * Delete private endpoint connection with the specified name
 *
 * @param api-version - The version of the API.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the provisioning service.
 * @param resourceName - The name of the provisioning service.
 * @param privateEndpointConnectionName - The name of the private endpoint connection
 */
export const IotDpsResourceDeletePrivateEndpointConnection =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IotDpsResourceDeletePrivateEndpointConnectionInput,
    outputSchema: IotDpsResourceDeletePrivateEndpointConnectionOutput,
  }));
// Input Schema
export interface IotDpsResourceGetInput {
  provisioningServiceName: string;
  subscriptionId: string;
  resourceGroupName: string;
}
export const IotDpsResourceGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    provisioningServiceName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/provisioningServices/{provisioningServiceName}",
    apiVersion: "2022-12-12",
  }),
) as unknown as Schema.Codec<IotDpsResourceGetInput>;

// Output Schema
export interface IotDpsResourceGetOutput {
  id?: string;
  name?: string;
  type?: string;
  location: string;
  resourcegroup?: string;
  subscriptionid?: string;
  tags?: Record<string, string>;
}
export const IotDpsResourceGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.String,
    resourcegroup: Schema.optional(Schema.String),
    subscriptionid: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }) as unknown as Schema.Codec<IotDpsResourceGetOutput>;

// The operation
/**
 * Get the non-security related metadata of the provisioning service.
 *
 * Get the metadata of the provisioning service without SAS keys.
 *
 * @param provisioningServiceName - Name of the provisioning service to retrieve.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - Resource group name.
 * @param api-version - The version of the API.
 */
export const IotDpsResourceGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: IotDpsResourceGetInput,
  outputSchema: IotDpsResourceGetOutput,
}));
// Input Schema
export interface IotDpsResourceGetOperationResultInput {
  operationId: string;
  subscriptionId: string;
  resourceGroupName: string;
  provisioningServiceName: string;
  asyncinfo: string;
}
export const IotDpsResourceGetOperationResultInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operationId: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    provisioningServiceName: Schema.String.pipe(T.PathParam()),
    asyncinfo: Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/provisioningServices/{provisioningServiceName}/operationresults/{operationId}",
      apiVersion: "2022-12-12",
    }),
  ) as unknown as Schema.Codec<IotDpsResourceGetOperationResultInput>;

// Output Schema
export interface IotDpsResourceGetOperationResultOutput {
  status?: string;
  error?: { code?: string; message?: string; details?: string };
}
export const IotDpsResourceGetOperationResultOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(Schema.String),
    error: Schema.optional(
      Schema.Struct({
        code: Schema.optional(Schema.String),
        message: Schema.optional(Schema.String),
        details: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<IotDpsResourceGetOperationResultOutput>;

// The operation
/**
 * Gets the status of a long running operation, such as create, update or delete a provisioning service.
 *
 * @param operationId - Operation id corresponding to long running operation. Use this to poll for the status.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - Resource group identifier.
 * @param provisioningServiceName - Name of provisioning service that the operation is running on.
 * @param asyncinfo - Async header used to poll on the status of the operation, obtained while creating the long running operation.
 * @param api-version - The version of the API.
 */
export const IotDpsResourceGetOperationResult =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IotDpsResourceGetOperationResultInput,
    outputSchema: IotDpsResourceGetOperationResultOutput,
  }));
// Input Schema
export interface IotDpsResourceGetPrivateEndpointConnectionInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  privateEndpointConnectionName: string;
}
export const IotDpsResourceGetPrivateEndpointConnectionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/provisioningServices/{resourceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2022-12-12",
    }),
  ) as unknown as Schema.Codec<IotDpsResourceGetPrivateEndpointConnectionInput>;

// Output Schema
export interface IotDpsResourceGetPrivateEndpointConnectionOutput {
  id?: string;
  name?: string;
  type?: string;
  properties: {
    privateEndpoint?: { id?: string };
    privateLinkServiceConnectionState: {
      status: "Pending" | "Approved" | "Rejected" | "Disconnected";
      description: string;
      actionsRequired?: string;
    };
  };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const IotDpsResourceGetPrivateEndpointConnectionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    properties: Schema.Struct({
      privateEndpoint: Schema.optional(
        Schema.Struct({
          id: Schema.optional(Schema.String),
        }),
      ),
      privateLinkServiceConnectionState: Schema.Struct({
        status: Schema.Literals([
          "Pending",
          "Approved",
          "Rejected",
          "Disconnected",
        ]),
        description: Schema.String,
        actionsRequired: Schema.optional(Schema.String),
      }),
    }),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<IotDpsResourceGetPrivateEndpointConnectionOutput>;

// The operation
/**
 * Get private endpoint connection
 *
 * Get private endpoint connection properties
 *
 * @param api-version - The version of the API.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the provisioning service.
 * @param resourceName - The name of the provisioning service.
 * @param privateEndpointConnectionName - The name of the private endpoint connection
 */
export const IotDpsResourceGetPrivateEndpointConnection =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IotDpsResourceGetPrivateEndpointConnectionInput,
    outputSchema: IotDpsResourceGetPrivateEndpointConnectionOutput,
  }));
// Input Schema
export interface IotDpsResourceGetPrivateLinkResourcesInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  groupId: string;
}
export const IotDpsResourceGetPrivateLinkResourcesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    groupId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/provisioningServices/{resourceName}/privateLinkResources/{groupId}",
      apiVersion: "2022-12-12",
    }),
  ) as unknown as Schema.Codec<IotDpsResourceGetPrivateLinkResourcesInput>;

// Output Schema
export interface IotDpsResourceGetPrivateLinkResourcesOutput {
  id?: string;
  name?: string;
  type?: string;
  properties: {
    groupId?: string;
    requiredMembers?: string[];
    requiredZoneNames?: string[];
  };
}
export const IotDpsResourceGetPrivateLinkResourcesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    properties: Schema.Struct({
      groupId: Schema.optional(Schema.String),
      requiredMembers: Schema.optional(Schema.Array(Schema.String)),
      requiredZoneNames: Schema.optional(Schema.Array(Schema.String)),
    }),
  }) as unknown as Schema.Codec<IotDpsResourceGetPrivateLinkResourcesOutput>;

// The operation
/**
 * Get the specified private link resource
 *
 * Get the specified private link resource for the given provisioning service
 *
 * @param api-version - The version of the API.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the provisioning service.
 * @param resourceName - The name of the provisioning service.
 * @param groupId - The name of the private link resource
 */
export const IotDpsResourceGetPrivateLinkResources =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IotDpsResourceGetPrivateLinkResourcesInput,
    outputSchema: IotDpsResourceGetPrivateLinkResourcesOutput,
  }));
// Input Schema
export interface IotDpsResourceListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const IotDpsResourceListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/provisioningServices",
      apiVersion: "2022-12-12",
    }),
  ) as unknown as Schema.Codec<IotDpsResourceListByResourceGroupInput>;

// Output Schema
export interface IotDpsResourceListByResourceGroupOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    location: string;
    resourcegroup?: string;
    subscriptionid?: string;
    tags?: Record<string, string>;
  }[];
  nextLink?: string;
}
export const IotDpsResourceListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          location: Schema.String,
          resourcegroup: Schema.optional(Schema.String),
          subscriptionid: Schema.optional(Schema.String),
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<IotDpsResourceListByResourceGroupOutput>;

// The operation
/**
 * Get a list of all provisioning services in the given resource group.
 *
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - Resource group identifier.
 * @param api-version - The version of the API.
 */
export const IotDpsResourceListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IotDpsResourceListByResourceGroupInput,
    outputSchema: IotDpsResourceListByResourceGroupOutput,
  }));
// Input Schema
export interface IotDpsResourceListBySubscriptionInput {
  subscriptionId: string;
}
export const IotDpsResourceListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Devices/provisioningServices",
      apiVersion: "2022-12-12",
    }),
  ) as unknown as Schema.Codec<IotDpsResourceListBySubscriptionInput>;

// Output Schema
export interface IotDpsResourceListBySubscriptionOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    location: string;
    resourcegroup?: string;
    subscriptionid?: string;
    tags?: Record<string, string>;
  }[];
  nextLink?: string;
}
export const IotDpsResourceListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          location: Schema.String,
          resourcegroup: Schema.optional(Schema.String),
          subscriptionid: Schema.optional(Schema.String),
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<IotDpsResourceListBySubscriptionOutput>;

// The operation
/**
 * Get all the provisioning services in a subscription.
 *
 * List all the provisioning services for a given subscription id.
 *
 * @param subscriptionId - The subscription identifier.
 * @param api-version - The version of the API.
 */
export const IotDpsResourceListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IotDpsResourceListBySubscriptionInput,
    outputSchema: IotDpsResourceListBySubscriptionOutput,
  }));
// Input Schema
export interface IotDpsResourceListKeysInput {
  provisioningServiceName: string;
  subscriptionId: string;
  resourceGroupName: string;
}
export const IotDpsResourceListKeysInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provisioningServiceName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/provisioningServices/{provisioningServiceName}/listkeys",
      apiVersion: "2022-12-12",
    }),
  ) as unknown as Schema.Codec<IotDpsResourceListKeysInput>;

// Output Schema
export interface IotDpsResourceListKeysOutput {
  value?: {
    keyName: string;
    primaryKey?: string;
    secondaryKey?: string;
    rights:
      | "ServiceConfig"
      | "EnrollmentRead"
      | "EnrollmentWrite"
      | "DeviceConnect"
      | "RegistrationStatusRead"
      | "RegistrationStatusWrite";
  }[];
  nextLink?: string;
}
export const IotDpsResourceListKeysOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          keyName: Schema.String,
          primaryKey: Schema.optional(Schema.String),
          secondaryKey: Schema.optional(Schema.String),
          rights: Schema.Literals([
            "ServiceConfig",
            "EnrollmentRead",
            "EnrollmentWrite",
            "DeviceConnect",
            "RegistrationStatusRead",
            "RegistrationStatusWrite",
          ]),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<IotDpsResourceListKeysOutput>;

// The operation
/**
 * Get the security metadata for a provisioning service.
 *
 * List the primary and secondary keys for a provisioning service.
 *
 * @param provisioningServiceName - The provisioning service name to get the shared access keys for.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - resource group name
 * @param api-version - The version of the API.
 */
export const IotDpsResourceListKeys = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: IotDpsResourceListKeysInput,
    outputSchema: IotDpsResourceListKeysOutput,
  }),
);
// Input Schema
export interface IotDpsResourceListKeysForKeyNameInput {
  provisioningServiceName: string;
  keyName: string;
  subscriptionId: string;
  resourceGroupName: string;
}
export const IotDpsResourceListKeysForKeyNameInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provisioningServiceName: Schema.String.pipe(T.PathParam()),
    keyName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/provisioningServices/{provisioningServiceName}/keys/{keyName}/listkeys",
      apiVersion: "2022-12-12",
    }),
  ) as unknown as Schema.Codec<IotDpsResourceListKeysForKeyNameInput>;

// Output Schema
export interface IotDpsResourceListKeysForKeyNameOutput {
  keyName: string;
  primaryKey?: string;
  secondaryKey?: string;
  rights:
    | "ServiceConfig"
    | "EnrollmentRead"
    | "EnrollmentWrite"
    | "DeviceConnect"
    | "RegistrationStatusRead"
    | "RegistrationStatusWrite";
}
export const IotDpsResourceListKeysForKeyNameOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    keyName: Schema.String,
    primaryKey: Schema.optional(Schema.String),
    secondaryKey: Schema.optional(Schema.String),
    rights: Schema.Literals([
      "ServiceConfig",
      "EnrollmentRead",
      "EnrollmentWrite",
      "DeviceConnect",
      "RegistrationStatusRead",
      "RegistrationStatusWrite",
    ]),
  }) as unknown as Schema.Codec<IotDpsResourceListKeysForKeyNameOutput>;

// The operation
/**
 * Get a shared access policy by name from a provisioning service.
 *
 * List primary and secondary keys for a specific key name
 *
 * @param provisioningServiceName - Name of the provisioning service.
 * @param keyName - Logical key name to get key-values for.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the provisioning service.
 * @param api-version - The version of the API.
 */
export const IotDpsResourceListKeysForKeyName =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IotDpsResourceListKeysForKeyNameInput,
    outputSchema: IotDpsResourceListKeysForKeyNameOutput,
  }));
// Input Schema
export interface IotDpsResourceListPrivateEndpointConnectionsInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const IotDpsResourceListPrivateEndpointConnectionsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/provisioningServices/{resourceName}/privateEndpointConnections",
      apiVersion: "2022-12-12",
    }),
  ) as unknown as Schema.Codec<IotDpsResourceListPrivateEndpointConnectionsInput>;

// Output Schema
export type IotDpsResourceListPrivateEndpointConnectionsOutput = {
  id?: string;
  name?: string;
  type?: string;
  properties: {
    privateEndpoint?: { id?: string };
    privateLinkServiceConnectionState: {
      status: "Pending" | "Approved" | "Rejected" | "Disconnected";
      description: string;
      actionsRequired?: string;
    };
  };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}[];
export const IotDpsResourceListPrivateEndpointConnectionsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      id: Schema.optional(Schema.String),
      name: Schema.optional(Schema.String),
      type: Schema.optional(Schema.String),
      properties: Schema.Struct({
        privateEndpoint: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
          }),
        ),
        privateLinkServiceConnectionState: Schema.Struct({
          status: Schema.Literals([
            "Pending",
            "Approved",
            "Rejected",
            "Disconnected",
          ]),
          description: Schema.String,
          actionsRequired: Schema.optional(Schema.String),
        }),
      }),
      systemData: Schema.optional(
        Schema.Struct({
          createdBy: Schema.optional(Schema.String),
          createdByType: Schema.optional(
            Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
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
  ) as unknown as Schema.Codec<IotDpsResourceListPrivateEndpointConnectionsOutput>;

// The operation
/**
 * List private endpoint connections
 *
 * List private endpoint connection properties
 *
 * @param api-version - The version of the API.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the provisioning service.
 * @param resourceName - The name of the provisioning service.
 */
export const IotDpsResourceListPrivateEndpointConnections =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IotDpsResourceListPrivateEndpointConnectionsInput,
    outputSchema: IotDpsResourceListPrivateEndpointConnectionsOutput,
  }));
// Input Schema
export interface IotDpsResourceListPrivateLinkResourcesInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const IotDpsResourceListPrivateLinkResourcesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/provisioningServices/{resourceName}/privateLinkResources",
      apiVersion: "2022-12-12",
    }),
  ) as unknown as Schema.Codec<IotDpsResourceListPrivateLinkResourcesInput>;

// Output Schema
export interface IotDpsResourceListPrivateLinkResourcesOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    properties: {
      groupId?: string;
      requiredMembers?: string[];
      requiredZoneNames?: string[];
    };
  }[];
}
export const IotDpsResourceListPrivateLinkResourcesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          properties: Schema.Struct({
            groupId: Schema.optional(Schema.String),
            requiredMembers: Schema.optional(Schema.Array(Schema.String)),
            requiredZoneNames: Schema.optional(Schema.Array(Schema.String)),
          }),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<IotDpsResourceListPrivateLinkResourcesOutput>;

// The operation
/**
 * List private link resources
 *
 * List private link resources for the given provisioning service
 *
 * @param api-version - The version of the API.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the provisioning service.
 * @param resourceName - The name of the provisioning service.
 */
export const IotDpsResourceListPrivateLinkResources =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IotDpsResourceListPrivateLinkResourcesInput,
    outputSchema: IotDpsResourceListPrivateLinkResourcesOutput,
  }));
// Input Schema
export interface IotDpsResourceListValidSkusInput {
  provisioningServiceName: string;
  subscriptionId: string;
  resourceGroupName: string;
}
export const IotDpsResourceListValidSkusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provisioningServiceName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/provisioningServices/{provisioningServiceName}/skus",
      apiVersion: "2022-12-12",
    }),
  ) as unknown as Schema.Codec<IotDpsResourceListValidSkusInput>;

// Output Schema
export interface IotDpsResourceListValidSkusOutput {
  value?: { name?: "S1" }[];
  nextLink?: string;
}
export const IotDpsResourceListValidSkusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.optional(Schema.Literals(["S1"])),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<IotDpsResourceListValidSkusOutput>;

// The operation
/**
 * Get the list of valid SKUs for a provisioning service.
 *
 * Gets the list of valid SKUs and tiers for a provisioning service.
 *
 * @param provisioningServiceName - Name of provisioning service.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - Name of resource group.
 * @param api-version - The version of the API.
 */
export const IotDpsResourceListValidSkus = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: IotDpsResourceListValidSkusInput,
    outputSchema: IotDpsResourceListValidSkusOutput,
  }),
);
// Input Schema
export interface IotDpsResourceUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  provisioningServiceName: string;
  tags?: unknown;
}
export const IotDpsResourceUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    provisioningServiceName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Unknown),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/provisioningServices/{provisioningServiceName}",
      apiVersion: "2022-12-12",
    }),
  ) as unknown as Schema.Codec<IotDpsResourceUpdateInput>;

// Output Schema
export interface IotDpsResourceUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  location: string;
  resourcegroup?: string;
  subscriptionid?: string;
  tags?: Record<string, string>;
}
export const IotDpsResourceUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.String,
    resourcegroup: Schema.optional(Schema.String),
    subscriptionid: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }) as unknown as Schema.Codec<IotDpsResourceUpdateOutput>;

// The operation
/**
 * Update an existing provisioning service's tags.
 *
 * Update an existing provisioning service's tags. to update other fields use the CreateOrUpdate method
 *
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - Resource group identifier.
 * @param provisioningServiceName - Name of provisioning service to create or update.
 * @param api-version - The version of the API.
 */
export const IotDpsResourceUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: IotDpsResourceUpdateInput,
    outputSchema: IotDpsResourceUpdateOutput,
  }),
);
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Devices/operations",
    apiVersion: "2022-12-12",
  }),
) as unknown as Schema.Codec<OperationsListInput>;

// Output Schema
export interface OperationsListOutput {
  value?: {
    name?: string;
    display?: { provider?: string; resource?: string; operation?: string };
  }[];
  nextLink?: string;
}
export const OperationsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        display: Schema.optional(
          Schema.Struct({
            provider: Schema.optional(Schema.String),
            resource: Schema.optional(Schema.String),
            operation: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<OperationsListOutput>;

// The operation
/**
 * Lists all of the available Microsoft.Devices REST API operations.
 *
 * @param api-version - The version of the API.
 */
export const OperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
