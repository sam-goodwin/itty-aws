/**
 * Azure Iothub API
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
export interface CertificatesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  certificateName: string;
  properties?: {
    subject?: string;
    expiry?: string;
    thumbprint?: string;
    isVerified?: boolean;
    created?: string;
    updated?: string;
    certificate?: string;
  };
  id?: string;
  name?: string;
  etag?: string;
  type?: string;
}
export const CertificatesCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    certificateName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        subject: Schema.optional(Schema.String),
        expiry: Schema.optional(Schema.String),
        thumbprint: Schema.optional(Schema.String),
        isVerified: Schema.optional(Schema.Boolean),
        created: Schema.optional(Schema.String),
        updated: Schema.optional(Schema.String),
        certificate: Schema.optional(Schema.String),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/certificates/{certificateName}",
      apiVersion: "2023-06-30",
    }),
  ) as unknown as Schema.Codec<CertificatesCreateOrUpdateInput>;

// Output Schema
export interface CertificatesCreateOrUpdateOutput {
  properties?: {
    subject?: string;
    expiry?: string;
    thumbprint?: string;
    isVerified?: boolean;
    created?: string;
    updated?: string;
    certificate?: string;
  };
  id?: string;
  name?: string;
  etag?: string;
  type?: string;
}
export const CertificatesCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        subject: Schema.optional(Schema.String),
        expiry: Schema.optional(Schema.String),
        thumbprint: Schema.optional(Schema.String),
        isVerified: Schema.optional(Schema.Boolean),
        created: Schema.optional(Schema.String),
        updated: Schema.optional(Schema.String),
        certificate: Schema.optional(Schema.String),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<CertificatesCreateOrUpdateOutput>;

// The operation
/**
 * Upload the certificate to the IoT hub.
 *
 * Adds new or replaces existing certificate.
 *
 * @param api-version - The version of the API.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the IoT hub.
 * @param resourceName - The name of the IoT hub.
 * @param certificateName - The name of the certificate
 * @param If-Match - ETag of the Certificate. Do not specify for creating a brand new certificate. Required to update an existing certificate.
 */
export const CertificatesCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: CertificatesCreateOrUpdateInput,
  outputSchema: CertificatesCreateOrUpdateOutput,
}));
// Input Schema
export interface CertificatesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  certificateName: string;
}
export const CertificatesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    certificateName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/certificates/{certificateName}",
      apiVersion: "2023-06-30",
    }),
  ) as unknown as Schema.Codec<CertificatesDeleteInput>;

// Output Schema
export type CertificatesDeleteOutput = void;
export const CertificatesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<CertificatesDeleteOutput>;

// The operation
/**
 * Delete an X509 certificate.
 *
 * Deletes an existing X509 certificate or does nothing if it does not exist.
 *
 * @param api-version - The version of the API.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the IoT hub.
 * @param resourceName - The name of the IoT hub.
 * @param certificateName - The name of the certificate
 * @param If-Match - ETag of the Certificate.
 */
export const CertificatesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: CertificatesDeleteInput,
  outputSchema: CertificatesDeleteOutput,
}));
// Input Schema
export interface CertificatesGenerateVerificationCodeInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  certificateName: string;
}
export const CertificatesGenerateVerificationCodeInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    certificateName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/certificates/{certificateName}/generateVerificationCode",
      apiVersion: "2023-06-30",
    }),
  ) as unknown as Schema.Codec<CertificatesGenerateVerificationCodeInput>;

// Output Schema
export interface CertificatesGenerateVerificationCodeOutput {
  properties?: {
    subject?: string;
    expiry?: string;
    thumbprint?: string;
    isVerified?: boolean;
    created?: string;
    updated?: string;
    verificationCode?: string;
    certificate?: string;
  };
  id?: string;
  name?: string;
  etag?: string;
  type?: string;
}
export const CertificatesGenerateVerificationCodeOutput =
  /*@__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        subject: Schema.optional(Schema.String),
        expiry: Schema.optional(Schema.String),
        thumbprint: Schema.optional(Schema.String),
        isVerified: Schema.optional(Schema.Boolean),
        created: Schema.optional(Schema.String),
        updated: Schema.optional(Schema.String),
        verificationCode: Schema.optional(Schema.String),
        certificate: Schema.optional(Schema.String),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<CertificatesGenerateVerificationCodeOutput>;

// The operation
/**
 * Generate verification code for proof of possession flow.
 *
 * Generates verification code for proof of possession flow. The verification code will be used to generate a leaf certificate.
 *
 * @param api-version - The version of the API.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the IoT hub.
 * @param resourceName - The name of the IoT hub.
 * @param certificateName - The name of the certificate
 * @param If-Match - ETag of the Certificate.
 */
export const CertificatesGenerateVerificationCode =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CertificatesGenerateVerificationCodeInput,
    outputSchema: CertificatesGenerateVerificationCodeOutput,
  }));
// Input Schema
export interface CertificatesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  certificateName: string;
}
export const CertificatesGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  resourceName: Schema.String.pipe(T.PathParam()),
  certificateName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/certificates/{certificateName}",
    apiVersion: "2023-06-30",
  }),
) as unknown as Schema.Codec<CertificatesGetInput>;

// Output Schema
export interface CertificatesGetOutput {
  properties?: {
    subject?: string;
    expiry?: string;
    thumbprint?: string;
    isVerified?: boolean;
    created?: string;
    updated?: string;
    certificate?: string;
  };
  id?: string;
  name?: string;
  etag?: string;
  type?: string;
}
export const CertificatesGetOutput = /*@__PURE__*/ Schema.Struct({
  properties: Schema.optional(
    Schema.Struct({
      subject: Schema.optional(Schema.String),
      expiry: Schema.optional(Schema.String),
      thumbprint: Schema.optional(Schema.String),
      isVerified: Schema.optional(Schema.Boolean),
      created: Schema.optional(Schema.String),
      updated: Schema.optional(Schema.String),
      certificate: Schema.optional(Schema.String),
    }),
  ),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  etag: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<CertificatesGetOutput>;

// The operation
/**
 * Get the certificate.
 *
 * Returns the certificate.
 *
 * @param api-version - The version of the API.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the IoT hub.
 * @param resourceName - The name of the IoT hub.
 * @param certificateName - The name of the certificate
 */
export const CertificatesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: CertificatesGetInput,
  outputSchema: CertificatesGetOutput,
}));
// Input Schema
export interface CertificatesListByIotHubInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const CertificatesListByIotHubInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/certificates",
      apiVersion: "2023-06-30",
    }),
  ) as unknown as Schema.Codec<CertificatesListByIotHubInput>;

// Output Schema
export interface CertificatesListByIotHubOutput {
  value?: {
    properties?: {
      subject?: string;
      expiry?: string;
      thumbprint?: string;
      isVerified?: boolean;
      created?: string;
      updated?: string;
      certificate?: string;
    };
    id?: string;
    name?: string;
    etag?: string;
    type?: string;
  }[];
}
export const CertificatesListByIotHubOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          properties: Schema.optional(
            Schema.Struct({
              subject: Schema.optional(Schema.String),
              expiry: Schema.optional(Schema.String),
              thumbprint: Schema.optional(Schema.String),
              isVerified: Schema.optional(Schema.Boolean),
              created: Schema.optional(Schema.String),
              updated: Schema.optional(Schema.String),
              certificate: Schema.optional(Schema.String),
            }),
          ),
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          etag: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<CertificatesListByIotHubOutput>;

// The operation
/**
 * Get the certificate list.
 *
 * Returns the list of certificates.
 *
 * @param api-version - The version of the API.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the IoT hub.
 * @param resourceName - The name of the IoT hub.
 */
export const CertificatesListByIotHub = /*@__PURE__*/ API.make(() => ({
  inputSchema: CertificatesListByIotHubInput,
  outputSchema: CertificatesListByIotHubOutput,
}));
// Input Schema
export interface CertificatesVerifyInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  certificateName: string;
  certificate?: string;
}
export const CertificatesVerifyInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    certificateName: Schema.String.pipe(T.PathParam()),
    certificate: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/certificates/{certificateName}/verify",
      apiVersion: "2023-06-30",
    }),
  ) as unknown as Schema.Codec<CertificatesVerifyInput>;

// Output Schema
export interface CertificatesVerifyOutput {
  properties?: {
    subject?: string;
    expiry?: string;
    thumbprint?: string;
    isVerified?: boolean;
    created?: string;
    updated?: string;
    certificate?: string;
  };
  id?: string;
  name?: string;
  etag?: string;
  type?: string;
}
export const CertificatesVerifyOutput =
  /*@__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        subject: Schema.optional(Schema.String),
        expiry: Schema.optional(Schema.String),
        thumbprint: Schema.optional(Schema.String),
        isVerified: Schema.optional(Schema.Boolean),
        created: Schema.optional(Schema.String),
        updated: Schema.optional(Schema.String),
        certificate: Schema.optional(Schema.String),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<CertificatesVerifyOutput>;

// The operation
/**
 * Verify certificate's private key possession.
 *
 * Verifies the certificate's private key possession by providing the leaf cert issued by the verifying pre uploaded certificate.
 *
 * @param api-version - The version of the API.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the IoT hub.
 * @param resourceName - The name of the IoT hub.
 * @param certificateName - The name of the certificate
 * @param If-Match - ETag of the Certificate.
 */
export const CertificatesVerify = /*@__PURE__*/ API.make(() => ({
  inputSchema: CertificatesVerifyInput,
  outputSchema: CertificatesVerifyOutput,
}));
// Input Schema
export interface IotHubManualFailoverInput {
  iotHubName: string;
  subscriptionId: string;
  resourceGroupName: string;
  failoverRegion: string;
}
export const IotHubManualFailoverInput =
  /*@__PURE__*/ Schema.Struct({
    iotHubName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    failoverRegion: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{iotHubName}/failover",
      apiVersion: "2023-06-30",
    }),
  ) as unknown as Schema.Codec<IotHubManualFailoverInput>;

// Output Schema
export type IotHubManualFailoverOutput = void;
export const IotHubManualFailoverOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<IotHubManualFailoverOutput>;

// The operation
/**
 * Manually initiate a failover for the IoT Hub to its secondary region
 *
 * Manually initiate a failover for the IoT Hub to its secondary region. To learn more, see https://aka.ms/manualfailover
 *
 * @param iotHubName - Name of the IoT hub to failover
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - Name of the resource group containing the IoT hub resource
 * @param api-version - The version of the API.
 */
export const IotHubManualFailover = /*@__PURE__*/ API.make(() => ({
  inputSchema: IotHubManualFailoverInput,
  outputSchema: IotHubManualFailoverOutput,
}));
// Input Schema
export interface IotHubResourceCheckNameAvailabilityInput {
  subscriptionId: string;
  name: string;
}
export const IotHubResourceCheckNameAvailabilityInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Devices/checkNameAvailability",
      apiVersion: "2023-06-30",
    }),
  ) as unknown as Schema.Codec<IotHubResourceCheckNameAvailabilityInput>;

// Output Schema
export interface IotHubResourceCheckNameAvailabilityOutput {
  nameAvailable?: boolean;
  reason?: "Invalid" | "AlreadyExists";
  message?: string;
}
export const IotHubResourceCheckNameAvailabilityOutput =
  /*@__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(Schema.Literals(["Invalid", "AlreadyExists"])),
    message: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<IotHubResourceCheckNameAvailabilityOutput>;

// The operation
/**
 * Check if an IoT hub name is available
 *
 * Check if an IoT hub name is available.
 *
 * @param api-version - The version of the API.
 * @param subscriptionId - The subscription identifier.
 */
export const IotHubResourceCheckNameAvailability =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: IotHubResourceCheckNameAvailabilityInput,
    outputSchema: IotHubResourceCheckNameAvailabilityOutput,
  }));
// Input Schema
export interface IotHubResourceCreateEventHubConsumerGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  eventHubEndpointName: string;
  name: string;
  properties: { name: string };
}
export const IotHubResourceCreateEventHubConsumerGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    eventHubEndpointName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      name: Schema.String,
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/eventHubEndpoints/{eventHubEndpointName}/ConsumerGroups/{name}",
      apiVersion: "2023-06-30",
    }),
  ) as unknown as Schema.Codec<IotHubResourceCreateEventHubConsumerGroupInput>;

// Output Schema
export interface IotHubResourceCreateEventHubConsumerGroupOutput {
  properties?: Record<string, unknown>;
  id?: string;
  name?: string;
  type?: string;
  etag?: string;
}
export const IotHubResourceCreateEventHubConsumerGroupOutput =
  /*@__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<IotHubResourceCreateEventHubConsumerGroupOutput>;

// The operation
/**
 * Add a consumer group to an Event Hub-compatible endpoint in an IoT hub
 *
 * Add a consumer group to an Event Hub-compatible endpoint in an IoT hub.
 *
 * @param api-version - The version of the API.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the IoT hub.
 * @param resourceName - The name of the IoT hub.
 * @param eventHubEndpointName - The name of the Event Hub-compatible endpoint in the IoT hub.
 * @param name - The name of the consumer group to add.
 */
export const IotHubResourceCreateEventHubConsumerGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: IotHubResourceCreateEventHubConsumerGroupInput,
    outputSchema: IotHubResourceCreateEventHubConsumerGroupOutput,
  }));
// Input Schema
export interface IotHubResourceCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  etag?: string;
  properties?: {
    authorizationPolicies?: {
      keyName: string;
      primaryKey?: string;
      secondaryKey?: string;
      rights:
        | "RegistryRead"
        | "RegistryWrite"
        | "ServiceConnect"
        | "DeviceConnect"
        | "RegistryRead, RegistryWrite"
        | "RegistryRead, ServiceConnect"
        | "RegistryRead, DeviceConnect"
        | "RegistryWrite, ServiceConnect"
        | "RegistryWrite, DeviceConnect"
        | "ServiceConnect, DeviceConnect"
        | "RegistryRead, RegistryWrite, ServiceConnect"
        | "RegistryRead, RegistryWrite, DeviceConnect"
        | "RegistryRead, ServiceConnect, DeviceConnect"
        | "RegistryWrite, ServiceConnect, DeviceConnect"
        | "RegistryRead, RegistryWrite, ServiceConnect, DeviceConnect";
    }[];
    disableLocalAuth?: boolean;
    disableDeviceSAS?: boolean;
    disableModuleSAS?: boolean;
    restrictOutboundNetworkAccess?: boolean;
    allowedFqdnList?: string[];
    publicNetworkAccess?: "Enabled" | "Disabled";
    ipFilterRules?: {
      filterName: string;
      action: "Accept" | "Reject";
      ipMask: string;
    }[];
    networkRuleSets?: {
      defaultAction?: "Deny" | "Allow";
      applyToBuiltInEventHubEndpoint: boolean;
      ipRules: { filterName: string; action?: "Allow"; ipMask: string }[];
    };
    minTlsVersion?: string;
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
    }[];
    provisioningState?: string;
    state?: string;
    hostName?: string;
    eventHubEndpoints?: Record<
      string,
      {
        retentionTimeInDays?: number;
        partitionCount?: number;
        partitionIds?: string[];
        path?: string;
        endpoint?: string;
      }
    >;
    routing?: {
      endpoints?: {
        serviceBusQueues?: {
          id?: string;
          connectionString?: string | Redacted.Redacted<string>;
          endpointUri?: string;
          entityPath?: string;
          authenticationType?: "keyBased" | "identityBased";
          identity?: { userAssignedIdentity?: string };
          name: string;
          subscriptionId?: string;
          resourceGroup?: string;
        }[];
        serviceBusTopics?: {
          id?: string;
          connectionString?: string | Redacted.Redacted<string>;
          endpointUri?: string;
          entityPath?: string;
          authenticationType?: "keyBased" | "identityBased";
          identity?: { userAssignedIdentity?: string };
          name: string;
          subscriptionId?: string;
          resourceGroup?: string;
        }[];
        eventHubs?: {
          id?: string;
          connectionString?: string | Redacted.Redacted<string>;
          endpointUri?: string;
          entityPath?: string;
          authenticationType?: "keyBased" | "identityBased";
          identity?: { userAssignedIdentity?: string };
          name: string;
          subscriptionId?: string;
          resourceGroup?: string;
        }[];
        storageContainers?: {
          id?: string;
          connectionString?: string | Redacted.Redacted<string>;
          endpointUri?: string;
          authenticationType?: "keyBased" | "identityBased";
          identity?: { userAssignedIdentity?: string };
          name: string;
          subscriptionId?: string;
          resourceGroup?: string;
          containerName: string;
          fileNameFormat?: string;
          batchFrequencyInSeconds?: number;
          maxChunkSizeInBytes?: number;
          encoding?: "Avro" | "AvroDeflate" | "JSON";
        }[];
        cosmosDBSqlContainers?: {
          name: string;
          id?: string;
          subscriptionId?: string;
          resourceGroup?: string;
          endpointUri: string;
          authenticationType?: "keyBased" | "identityBased";
          identity?: { userAssignedIdentity?: string };
          primaryKey?: string;
          secondaryKey?: string;
          databaseName: string;
          containerName: string;
          partitionKeyName?: string;
          partitionKeyTemplate?: string;
        }[];
      };
      routes?: {
        name: string;
        source:
          | "Invalid"
          | "DeviceMessages"
          | "TwinChangeEvents"
          | "DeviceLifecycleEvents"
          | "DeviceJobLifecycleEvents"
          | "DeviceConnectionStateEvents";
        condition?: string;
        endpointNames: string[];
        isEnabled: boolean;
      }[];
      fallbackRoute?: {
        name?: string;
        source: "DeviceMessages";
        condition?: string;
        endpointNames: string[];
        isEnabled: boolean;
      };
      enrichments?: { key: string; value: string; endpointNames: string[] }[];
    };
    storageEndpoints?: Record<
      string,
      {
        sasTtlAsIso8601?: string;
        connectionString: string | Redacted.Redacted<string>;
        containerName: string;
        authenticationType?: "keyBased" | "identityBased";
        identity?: { userAssignedIdentity?: string };
      }
    >;
    messagingEndpoints?: Record<
      string,
      {
        lockDurationAsIso8601?: string;
        ttlAsIso8601?: string;
        maxDeliveryCount?: number;
      }
    >;
    enableFileUploadNotifications?: boolean;
    cloudToDevice?: {
      maxDeliveryCount?: number;
      defaultTtlAsIso8601?: string;
      feedback?: {
        lockDurationAsIso8601?: string;
        ttlAsIso8601?: string;
        maxDeliveryCount?: number;
      };
    };
    comments?: string;
    features?: "None" | "DeviceManagement";
    locations?: { location?: string; role?: "primary" | "secondary" }[];
    enableDataResidency?: boolean;
  };
  sku: {
    name: "F1" | "S1" | "S2" | "S3" | "B1" | "B2" | "B3";
    tier?: "Free" | "Standard" | "Basic";
    capacity?: number;
  };
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
  tags?: Record<string, string>;
}
export const IotHubResourceCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    etag: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        authorizationPolicies: Schema.optional(
          Schema.Array(
            Schema.Struct({
              keyName: Schema.String,
              primaryKey: Schema.optional(Schema.String),
              secondaryKey: Schema.optional(Schema.String),
              rights: Schema.Literals([
                "RegistryRead",
                "RegistryWrite",
                "ServiceConnect",
                "DeviceConnect",
                "RegistryRead, RegistryWrite",
                "RegistryRead, ServiceConnect",
                "RegistryRead, DeviceConnect",
                "RegistryWrite, ServiceConnect",
                "RegistryWrite, DeviceConnect",
                "ServiceConnect, DeviceConnect",
                "RegistryRead, RegistryWrite, ServiceConnect",
                "RegistryRead, RegistryWrite, DeviceConnect",
                "RegistryRead, ServiceConnect, DeviceConnect",
                "RegistryWrite, ServiceConnect, DeviceConnect",
                "RegistryRead, RegistryWrite, ServiceConnect, DeviceConnect",
              ]),
            }),
          ),
        ),
        disableLocalAuth: Schema.optional(Schema.Boolean),
        disableDeviceSAS: Schema.optional(Schema.Boolean),
        disableModuleSAS: Schema.optional(Schema.Boolean),
        restrictOutboundNetworkAccess: Schema.optional(Schema.Boolean),
        allowedFqdnList: Schema.optional(Schema.Array(Schema.String)),
        publicNetworkAccess: Schema.optional(
          Schema.Literals(["Enabled", "Disabled"]),
        ),
        ipFilterRules: Schema.optional(
          Schema.Array(
            Schema.Struct({
              filterName: Schema.String,
              action: Schema.Literals(["Accept", "Reject"]),
              ipMask: Schema.String,
            }),
          ),
        ),
        networkRuleSets: Schema.optional(
          Schema.Struct({
            defaultAction: Schema.optional(Schema.Literals(["Deny", "Allow"])),
            applyToBuiltInEventHubEndpoint: Schema.Boolean,
            ipRules: Schema.Array(
              Schema.Struct({
                filterName: Schema.String,
                action: Schema.optional(Schema.Literals(["Allow"])),
                ipMask: Schema.String,
              }),
            ),
          }),
        ),
        minTlsVersion: Schema.optional(Schema.String),
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
            }),
          ),
        ),
        provisioningState: Schema.optional(Schema.String),
        state: Schema.optional(Schema.String),
        hostName: Schema.optional(Schema.String),
        eventHubEndpoints: Schema.optional(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              retentionTimeInDays: Schema.optional(Schema.Number),
              partitionCount: Schema.optional(Schema.Number),
              partitionIds: Schema.optional(Schema.Array(Schema.String)),
              path: Schema.optional(Schema.String),
              endpoint: Schema.optional(Schema.String),
            }),
          ),
        ),
        routing: Schema.optional(
          Schema.Struct({
            endpoints: Schema.optional(
              Schema.Struct({
                serviceBusQueues: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      id: Schema.optional(Schema.String),
                      connectionString: Schema.optional(SensitiveString),
                      endpointUri: Schema.optional(Schema.String),
                      entityPath: Schema.optional(Schema.String),
                      authenticationType: Schema.optional(
                        Schema.Literals(["keyBased", "identityBased"]),
                      ),
                      identity: Schema.optional(
                        Schema.Struct({
                          userAssignedIdentity: Schema.optional(Schema.String),
                        }),
                      ),
                      name: Schema.String,
                      subscriptionId: Schema.optional(Schema.String),
                      resourceGroup: Schema.optional(Schema.String),
                    }),
                  ),
                ),
                serviceBusTopics: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      id: Schema.optional(Schema.String),
                      connectionString: Schema.optional(SensitiveString),
                      endpointUri: Schema.optional(Schema.String),
                      entityPath: Schema.optional(Schema.String),
                      authenticationType: Schema.optional(
                        Schema.Literals(["keyBased", "identityBased"]),
                      ),
                      identity: Schema.optional(
                        Schema.Struct({
                          userAssignedIdentity: Schema.optional(Schema.String),
                        }),
                      ),
                      name: Schema.String,
                      subscriptionId: Schema.optional(Schema.String),
                      resourceGroup: Schema.optional(Schema.String),
                    }),
                  ),
                ),
                eventHubs: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      id: Schema.optional(Schema.String),
                      connectionString: Schema.optional(SensitiveString),
                      endpointUri: Schema.optional(Schema.String),
                      entityPath: Schema.optional(Schema.String),
                      authenticationType: Schema.optional(
                        Schema.Literals(["keyBased", "identityBased"]),
                      ),
                      identity: Schema.optional(
                        Schema.Struct({
                          userAssignedIdentity: Schema.optional(Schema.String),
                        }),
                      ),
                      name: Schema.String,
                      subscriptionId: Schema.optional(Schema.String),
                      resourceGroup: Schema.optional(Schema.String),
                    }),
                  ),
                ),
                storageContainers: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      id: Schema.optional(Schema.String),
                      connectionString: Schema.optional(SensitiveString),
                      endpointUri: Schema.optional(Schema.String),
                      authenticationType: Schema.optional(
                        Schema.Literals(["keyBased", "identityBased"]),
                      ),
                      identity: Schema.optional(
                        Schema.Struct({
                          userAssignedIdentity: Schema.optional(Schema.String),
                        }),
                      ),
                      name: Schema.String,
                      subscriptionId: Schema.optional(Schema.String),
                      resourceGroup: Schema.optional(Schema.String),
                      containerName: Schema.String,
                      fileNameFormat: Schema.optional(Schema.String),
                      batchFrequencyInSeconds: Schema.optional(Schema.Number),
                      maxChunkSizeInBytes: Schema.optional(Schema.Number),
                      encoding: Schema.optional(
                        Schema.Literals(["Avro", "AvroDeflate", "JSON"]),
                      ),
                    }),
                  ),
                ),
                cosmosDBSqlContainers: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      name: Schema.String,
                      id: Schema.optional(Schema.String),
                      subscriptionId: Schema.optional(Schema.String),
                      resourceGroup: Schema.optional(Schema.String),
                      endpointUri: Schema.String,
                      authenticationType: Schema.optional(
                        Schema.Literals(["keyBased", "identityBased"]),
                      ),
                      identity: Schema.optional(
                        Schema.Struct({
                          userAssignedIdentity: Schema.optional(Schema.String),
                        }),
                      ),
                      primaryKey: Schema.optional(Schema.String),
                      secondaryKey: Schema.optional(Schema.String),
                      databaseName: Schema.String,
                      containerName: Schema.String,
                      partitionKeyName: Schema.optional(Schema.String),
                      partitionKeyTemplate: Schema.optional(Schema.String),
                    }),
                  ),
                ),
              }),
            ),
            routes: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.String,
                  source: Schema.Literals([
                    "Invalid",
                    "DeviceMessages",
                    "TwinChangeEvents",
                    "DeviceLifecycleEvents",
                    "DeviceJobLifecycleEvents",
                    "DeviceConnectionStateEvents",
                  ]),
                  condition: Schema.optional(Schema.String),
                  endpointNames: Schema.Array(Schema.String),
                  isEnabled: Schema.Boolean,
                }),
              ),
            ),
            fallbackRoute: Schema.optional(
              Schema.Struct({
                name: Schema.optional(Schema.String),
                source: Schema.Literals(["DeviceMessages"]),
                condition: Schema.optional(Schema.String),
                endpointNames: Schema.Array(Schema.String),
                isEnabled: Schema.Boolean,
              }),
            ),
            enrichments: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  key: Schema.String,
                  value: Schema.String,
                  endpointNames: Schema.Array(Schema.String),
                }),
              ),
            ),
          }),
        ),
        storageEndpoints: Schema.optional(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              sasTtlAsIso8601: Schema.optional(Schema.String),
              connectionString: SensitiveString,
              containerName: Schema.String,
              authenticationType: Schema.optional(
                Schema.Literals(["keyBased", "identityBased"]),
              ),
              identity: Schema.optional(
                Schema.Struct({
                  userAssignedIdentity: Schema.optional(Schema.String),
                }),
              ),
            }),
          ),
        ),
        messagingEndpoints: Schema.optional(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              lockDurationAsIso8601: Schema.optional(Schema.String),
              ttlAsIso8601: Schema.optional(Schema.String),
              maxDeliveryCount: Schema.optional(Schema.Number),
            }),
          ),
        ),
        enableFileUploadNotifications: Schema.optional(Schema.Boolean),
        cloudToDevice: Schema.optional(
          Schema.Struct({
            maxDeliveryCount: Schema.optional(Schema.Number),
            defaultTtlAsIso8601: Schema.optional(Schema.String),
            feedback: Schema.optional(
              Schema.Struct({
                lockDurationAsIso8601: Schema.optional(Schema.String),
                ttlAsIso8601: Schema.optional(Schema.String),
                maxDeliveryCount: Schema.optional(Schema.Number),
              }),
            ),
          }),
        ),
        comments: Schema.optional(Schema.String),
        features: Schema.optional(
          Schema.Literals(["None", "DeviceManagement"]),
        ),
        locations: Schema.optional(
          Schema.Array(
            Schema.Struct({
              location: Schema.optional(Schema.String),
              role: Schema.optional(Schema.Literals(["primary", "secondary"])),
            }),
          ),
        ),
        enableDataResidency: Schema.optional(Schema.Boolean),
      }),
    ),
    sku: Schema.Struct({
      name: Schema.Literals(["F1", "S1", "S2", "S3", "B1", "B2", "B3"]),
      tier: Schema.optional(Schema.Literals(["Free", "Standard", "Basic"])),
      capacity: Schema.optional(Schema.Number),
    }),
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
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
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
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}",
      apiVersion: "2023-06-30",
    }),
  ) as unknown as Schema.Codec<IotHubResourceCreateOrUpdateInput>;

// Output Schema
export interface IotHubResourceCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  location: string;
  tags?: Record<string, string>;
}
export const IotHubResourceCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.String,
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }) as unknown as Schema.Codec<IotHubResourceCreateOrUpdateOutput>;

// The operation
/**
 * Create or update the metadata of an IoT hub.
 *
 * Create or update the metadata of an Iot hub. The usual pattern to modify a property is to retrieve the IoT hub metadata and security metadata, and then combine them with the modified values in a new body to update the IoT hub. If certain properties are missing in the JSON, updating IoT Hub may cause these values to fallback to default, which may lead to unexpected behavior.
 *
 * @param api-version - The version of the API.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the IoT hub.
 * @param resourceName - The name of the IoT hub.
 * @param If-Match - ETag of the IoT Hub. Do not specify for creating a brand new IoT Hub. Required to update an existing IoT Hub.
 */
export const IotHubResourceCreateOrUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: IotHubResourceCreateOrUpdateInput,
    outputSchema: IotHubResourceCreateOrUpdateOutput,
  }));
// Input Schema
export interface IotHubResourceDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const IotHubResourceDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}",
      apiVersion: "2023-06-30",
    }),
  ) as unknown as Schema.Codec<IotHubResourceDeleteInput>;

// Output Schema
export interface IotHubResourceDeleteOutput {
  id?: string;
  name?: string;
  type?: string;
  location: string;
  tags?: Record<string, string>;
}
export const IotHubResourceDeleteOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.String,
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }) as unknown as Schema.Codec<IotHubResourceDeleteOutput>;

// The operation
/**
 * Delete an IoT hub
 *
 * Delete an IoT hub.
 *
 * @param api-version - The version of the API.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the IoT hub.
 * @param resourceName - The name of the IoT hub.
 */
export const IotHubResourceDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: IotHubResourceDeleteInput,
  outputSchema: IotHubResourceDeleteOutput,
}));
// Input Schema
export interface IotHubResourceDeleteEventHubConsumerGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  eventHubEndpointName: string;
  name: string;
}
export const IotHubResourceDeleteEventHubConsumerGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    eventHubEndpointName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/eventHubEndpoints/{eventHubEndpointName}/ConsumerGroups/{name}",
      apiVersion: "2023-06-30",
    }),
  ) as unknown as Schema.Codec<IotHubResourceDeleteEventHubConsumerGroupInput>;

// Output Schema
export type IotHubResourceDeleteEventHubConsumerGroupOutput = void;
export const IotHubResourceDeleteEventHubConsumerGroupOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<IotHubResourceDeleteEventHubConsumerGroupOutput>;

// The operation
/**
 * Delete a consumer group from an Event Hub-compatible endpoint in an IoT hub
 *
 * Delete a consumer group from an Event Hub-compatible endpoint in an IoT hub.
 *
 * @param api-version - The version of the API.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the IoT hub.
 * @param resourceName - The name of the IoT hub.
 * @param eventHubEndpointName - The name of the Event Hub-compatible endpoint in the IoT hub.
 * @param name - The name of the consumer group to delete.
 */
export const IotHubResourceDeleteEventHubConsumerGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: IotHubResourceDeleteEventHubConsumerGroupInput,
    outputSchema: IotHubResourceDeleteEventHubConsumerGroupOutput,
  }));
// Input Schema
export interface IotHubResourceExportDevicesInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  exportBlobContainerUri: string;
  excludeKeys: boolean;
  exportBlobName?: string;
  authenticationType?: "keyBased" | "identityBased";
  identity?: { userAssignedIdentity?: string };
  includeConfigurations?: boolean;
  configurationsBlobName?: string;
}
export const IotHubResourceExportDevicesInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    exportBlobContainerUri: Schema.String,
    excludeKeys: Schema.Boolean,
    exportBlobName: Schema.optional(Schema.String),
    authenticationType: Schema.optional(
      Schema.Literals(["keyBased", "identityBased"]),
    ),
    identity: Schema.optional(
      Schema.Struct({
        userAssignedIdentity: Schema.optional(Schema.String),
      }),
    ),
    includeConfigurations: Schema.optional(Schema.Boolean),
    configurationsBlobName: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/exportDevices",
      apiVersion: "2023-06-30",
    }),
  ) as unknown as Schema.Codec<IotHubResourceExportDevicesInput>;

// Output Schema
export interface IotHubResourceExportDevicesOutput {
  jobId?: string;
  startTimeUtc?: string;
  endTimeUtc?: string;
  type?:
    | "unknown"
    | "export"
    | "import"
    | "backup"
    | "readDeviceProperties"
    | "writeDeviceProperties"
    | "updateDeviceConfiguration"
    | "rebootDevice"
    | "factoryResetDevice"
    | "firmwareUpdate";
  status?:
    | "unknown"
    | "enqueued"
    | "running"
    | "completed"
    | "failed"
    | "cancelled";
  failureReason?: string;
  statusMessage?: string;
  parentJobId?: string;
}
export const IotHubResourceExportDevicesOutput =
  /*@__PURE__*/ Schema.Struct({
    jobId: Schema.optional(Schema.String),
    startTimeUtc: Schema.optional(Schema.String),
    endTimeUtc: Schema.optional(Schema.String),
    type: Schema.optional(
      Schema.Literals([
        "unknown",
        "export",
        "import",
        "backup",
        "readDeviceProperties",
        "writeDeviceProperties",
        "updateDeviceConfiguration",
        "rebootDevice",
        "factoryResetDevice",
        "firmwareUpdate",
      ]),
    ),
    status: Schema.optional(
      Schema.Literals([
        "unknown",
        "enqueued",
        "running",
        "completed",
        "failed",
        "cancelled",
      ]),
    ),
    failureReason: Schema.optional(Schema.String),
    statusMessage: Schema.optional(Schema.String),
    parentJobId: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<IotHubResourceExportDevicesOutput>;

// The operation
/**
 * Exports all the device identities in the IoT hub identity registry to an Azure Storage blob container. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry#import-and-export-device-identities
 *
 * Exports all the device identities in the IoT hub identity registry to an Azure Storage blob container. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry#import-and-export-device-identities.
 *
 * @param api-version - The version of the API.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the IoT hub.
 * @param resourceName - The name of the IoT hub.
 */
export const IotHubResourceExportDevices = /*@__PURE__*/ API.make(() => ({
  inputSchema: IotHubResourceExportDevicesInput,
  outputSchema: IotHubResourceExportDevicesOutput,
}));
// Input Schema
export interface IotHubResourceGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const IotHubResourceGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  resourceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}",
    apiVersion: "2023-06-30",
  }),
) as unknown as Schema.Codec<IotHubResourceGetInput>;

// Output Schema
export interface IotHubResourceGetOutput {
  id?: string;
  name?: string;
  type?: string;
  location: string;
  tags?: Record<string, string>;
}
export const IotHubResourceGetOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.String,
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }) as unknown as Schema.Codec<IotHubResourceGetOutput>;

// The operation
/**
 * Get the non-security related metadata of an IoT hub
 *
 * Get the non-security related metadata of an IoT hub.
 *
 * @param api-version - The version of the API.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the IoT hub.
 * @param resourceName - The name of the IoT hub.
 */
export const IotHubResourceGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: IotHubResourceGetInput,
  outputSchema: IotHubResourceGetOutput,
}));
// Input Schema
export interface IotHubResourceGetEndpointHealthInput {
  subscriptionId: string;
  resourceGroupName: string;
  iotHubName: string;
}
export const IotHubResourceGetEndpointHealthInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    iotHubName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{iotHubName}/routingEndpointsHealth",
      apiVersion: "2023-06-30",
    }),
  ) as unknown as Schema.Codec<IotHubResourceGetEndpointHealthInput>;

// Output Schema
export interface IotHubResourceGetEndpointHealthOutput {
  value?: {
    endpointId?: string;
    healthStatus?: "unknown" | "healthy" | "degraded" | "unhealthy" | "dead";
    lastKnownError?: string;
    lastKnownErrorTime?: string;
    lastSuccessfulSendAttemptTime?: string;
    lastSendAttemptTime?: string;
  }[];
  nextLink?: string;
}
export const IotHubResourceGetEndpointHealthOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          endpointId: Schema.optional(Schema.String),
          healthStatus: Schema.optional(
            Schema.Literals([
              "unknown",
              "healthy",
              "degraded",
              "unhealthy",
              "dead",
            ]),
          ),
          lastKnownError: Schema.optional(Schema.String),
          lastKnownErrorTime: Schema.optional(Schema.String),
          lastSuccessfulSendAttemptTime: Schema.optional(Schema.String),
          lastSendAttemptTime: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<IotHubResourceGetEndpointHealthOutput>;

// The operation
/**
 * Get the health for routing endpoints
 *
 * Get the health for routing endpoints.
 *
 * @param subscriptionId - The subscription identifier.
 * @param api-version - The version of the API.
 */
export const IotHubResourceGetEndpointHealth =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: IotHubResourceGetEndpointHealthInput,
    outputSchema: IotHubResourceGetEndpointHealthOutput,
  }));
// Input Schema
export interface IotHubResourceGetEventHubConsumerGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  eventHubEndpointName: string;
  name: string;
}
export const IotHubResourceGetEventHubConsumerGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    eventHubEndpointName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/eventHubEndpoints/{eventHubEndpointName}/ConsumerGroups/{name}",
      apiVersion: "2023-06-30",
    }),
  ) as unknown as Schema.Codec<IotHubResourceGetEventHubConsumerGroupInput>;

// Output Schema
export interface IotHubResourceGetEventHubConsumerGroupOutput {
  properties?: Record<string, unknown>;
  id?: string;
  name?: string;
  type?: string;
  etag?: string;
}
export const IotHubResourceGetEventHubConsumerGroupOutput =
  /*@__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<IotHubResourceGetEventHubConsumerGroupOutput>;

// The operation
/**
 * Get a consumer group from the Event Hub-compatible device-to-cloud endpoint for an IoT hub
 *
 * Get a consumer group from the Event Hub-compatible device-to-cloud endpoint for an IoT hub.
 *
 * @param api-version - The version of the API.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the IoT hub.
 * @param resourceName - The name of the IoT hub.
 * @param eventHubEndpointName - The name of the Event Hub-compatible endpoint in the IoT hub.
 * @param name - The name of the consumer group to retrieve.
 */
export const IotHubResourceGetEventHubConsumerGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: IotHubResourceGetEventHubConsumerGroupInput,
    outputSchema: IotHubResourceGetEventHubConsumerGroupOutput,
  }));
// Input Schema
export interface IotHubResourceGetJobInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  jobId: string;
}
export const IotHubResourceGetJobInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    jobId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/jobs/{jobId}",
      apiVersion: "2023-06-30",
    }),
  ) as unknown as Schema.Codec<IotHubResourceGetJobInput>;

// Output Schema
export interface IotHubResourceGetJobOutput {
  jobId?: string;
  startTimeUtc?: string;
  endTimeUtc?: string;
  type?:
    | "unknown"
    | "export"
    | "import"
    | "backup"
    | "readDeviceProperties"
    | "writeDeviceProperties"
    | "updateDeviceConfiguration"
    | "rebootDevice"
    | "factoryResetDevice"
    | "firmwareUpdate";
  status?:
    | "unknown"
    | "enqueued"
    | "running"
    | "completed"
    | "failed"
    | "cancelled";
  failureReason?: string;
  statusMessage?: string;
  parentJobId?: string;
}
export const IotHubResourceGetJobOutput =
  /*@__PURE__*/ Schema.Struct({
    jobId: Schema.optional(Schema.String),
    startTimeUtc: Schema.optional(Schema.String),
    endTimeUtc: Schema.optional(Schema.String),
    type: Schema.optional(
      Schema.Literals([
        "unknown",
        "export",
        "import",
        "backup",
        "readDeviceProperties",
        "writeDeviceProperties",
        "updateDeviceConfiguration",
        "rebootDevice",
        "factoryResetDevice",
        "firmwareUpdate",
      ]),
    ),
    status: Schema.optional(
      Schema.Literals([
        "unknown",
        "enqueued",
        "running",
        "completed",
        "failed",
        "cancelled",
      ]),
    ),
    failureReason: Schema.optional(Schema.String),
    statusMessage: Schema.optional(Schema.String),
    parentJobId: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<IotHubResourceGetJobOutput>;

// The operation
/**
 * Get the details of a job from an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry
 *
 * Get the details of a job from an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry.
 *
 * @param api-version - The version of the API.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the IoT hub.
 * @param resourceName - The name of the IoT hub.
 * @param jobId - The job identifier.
 */
export const IotHubResourceGetJob = /*@__PURE__*/ API.make(() => ({
  inputSchema: IotHubResourceGetJobInput,
  outputSchema: IotHubResourceGetJobOutput,
}));
// Input Schema
export interface IotHubResourceGetKeysForKeyNameInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  keyName: string;
}
export const IotHubResourceGetKeysForKeyNameInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    keyName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/IotHubKeys/{keyName}/listkeys",
      apiVersion: "2023-06-30",
    }),
  ) as unknown as Schema.Codec<IotHubResourceGetKeysForKeyNameInput>;

// Output Schema
export interface IotHubResourceGetKeysForKeyNameOutput {
  keyName: string;
  primaryKey?: string;
  secondaryKey?: string;
  rights:
    | "RegistryRead"
    | "RegistryWrite"
    | "ServiceConnect"
    | "DeviceConnect"
    | "RegistryRead, RegistryWrite"
    | "RegistryRead, ServiceConnect"
    | "RegistryRead, DeviceConnect"
    | "RegistryWrite, ServiceConnect"
    | "RegistryWrite, DeviceConnect"
    | "ServiceConnect, DeviceConnect"
    | "RegistryRead, RegistryWrite, ServiceConnect"
    | "RegistryRead, RegistryWrite, DeviceConnect"
    | "RegistryRead, ServiceConnect, DeviceConnect"
    | "RegistryWrite, ServiceConnect, DeviceConnect"
    | "RegistryRead, RegistryWrite, ServiceConnect, DeviceConnect";
}
export const IotHubResourceGetKeysForKeyNameOutput =
  /*@__PURE__*/ Schema.Struct({
    keyName: Schema.String,
    primaryKey: Schema.optional(Schema.String),
    secondaryKey: Schema.optional(Schema.String),
    rights: Schema.Literals([
      "RegistryRead",
      "RegistryWrite",
      "ServiceConnect",
      "DeviceConnect",
      "RegistryRead, RegistryWrite",
      "RegistryRead, ServiceConnect",
      "RegistryRead, DeviceConnect",
      "RegistryWrite, ServiceConnect",
      "RegistryWrite, DeviceConnect",
      "ServiceConnect, DeviceConnect",
      "RegistryRead, RegistryWrite, ServiceConnect",
      "RegistryRead, RegistryWrite, DeviceConnect",
      "RegistryRead, ServiceConnect, DeviceConnect",
      "RegistryWrite, ServiceConnect, DeviceConnect",
      "RegistryRead, RegistryWrite, ServiceConnect, DeviceConnect",
    ]),
  }) as unknown as Schema.Codec<IotHubResourceGetKeysForKeyNameOutput>;

// The operation
/**
 * Get a shared access policy by name from an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-security
 *
 * Get a shared access policy by name from an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-security.
 *
 * @param api-version - The version of the API.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the IoT hub.
 * @param resourceName - The name of the IoT hub.
 * @param keyName - The name of the shared access policy.
 */
export const IotHubResourceGetKeysForKeyName =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: IotHubResourceGetKeysForKeyNameInput,
    outputSchema: IotHubResourceGetKeysForKeyNameOutput,
  }));
// Input Schema
export interface IotHubResourceGetQuotaMetricsInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const IotHubResourceGetQuotaMetricsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/quotaMetrics",
      apiVersion: "2023-06-30",
    }),
  ) as unknown as Schema.Codec<IotHubResourceGetQuotaMetricsInput>;

// Output Schema
export interface IotHubResourceGetQuotaMetricsOutput {
  value?: { name?: string; currentValue?: number; maxValue?: number }[];
  nextLink?: string;
}
export const IotHubResourceGetQuotaMetricsOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.optional(Schema.String),
          currentValue: Schema.optional(Schema.Number),
          maxValue: Schema.optional(Schema.Number),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<IotHubResourceGetQuotaMetricsOutput>;

// The operation
/**
 * Get the quota metrics for an IoT hub
 *
 * Get the quota metrics for an IoT hub.
 *
 * @param api-version - The version of the API.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the IoT hub.
 * @param resourceName - The name of the IoT hub.
 */
export const IotHubResourceGetQuotaMetrics =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: IotHubResourceGetQuotaMetricsInput,
    outputSchema: IotHubResourceGetQuotaMetricsOutput,
  }));
// Input Schema
export interface IotHubResourceGetStatsInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const IotHubResourceGetStatsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/IotHubStats",
      apiVersion: "2023-06-30",
    }),
  ) as unknown as Schema.Codec<IotHubResourceGetStatsInput>;

// Output Schema
export interface IotHubResourceGetStatsOutput {
  totalDeviceCount?: number;
  enabledDeviceCount?: number;
  disabledDeviceCount?: number;
}
export const IotHubResourceGetStatsOutput =
  /*@__PURE__*/ Schema.Struct({
    totalDeviceCount: Schema.optional(Schema.Number),
    enabledDeviceCount: Schema.optional(Schema.Number),
    disabledDeviceCount: Schema.optional(Schema.Number),
  }) as unknown as Schema.Codec<IotHubResourceGetStatsOutput>;

// The operation
/**
 * Get the statistics from an IoT hub
 *
 * Get the statistics from an IoT hub.
 *
 * @param api-version - The version of the API.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the IoT hub.
 * @param resourceName - The name of the IoT hub.
 */
export const IotHubResourceGetStats = /*@__PURE__*/ API.make(() => ({
  inputSchema: IotHubResourceGetStatsInput,
  outputSchema: IotHubResourceGetStatsOutput,
}));
// Input Schema
export interface IotHubResourceGetValidSkusInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const IotHubResourceGetValidSkusInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/skus",
      apiVersion: "2023-06-30",
    }),
  ) as unknown as Schema.Codec<IotHubResourceGetValidSkusInput>;

// Output Schema
export interface IotHubResourceGetValidSkusOutput {
  value?: {
    resourceType?: string;
    sku: {
      name: "F1" | "S1" | "S2" | "S3" | "B1" | "B2" | "B3";
      tier?: "Free" | "Standard" | "Basic";
      capacity?: number;
    };
    capacity: {
      minimum?: number;
      maximum?: number;
      default?: number;
      scaleType?: "Automatic" | "Manual" | "None";
    };
  }[];
  nextLink?: string;
}
export const IotHubResourceGetValidSkusOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          resourceType: Schema.optional(Schema.String),
          sku: Schema.Struct({
            name: Schema.Literals(["F1", "S1", "S2", "S3", "B1", "B2", "B3"]),
            tier: Schema.optional(
              Schema.Literals(["Free", "Standard", "Basic"]),
            ),
            capacity: Schema.optional(Schema.Number),
          }),
          capacity: Schema.Struct({
            minimum: Schema.optional(Schema.Number),
            maximum: Schema.optional(Schema.Number),
            default: Schema.optional(Schema.Number),
            scaleType: Schema.optional(
              Schema.Literals(["Automatic", "Manual", "None"]),
            ),
          }),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<IotHubResourceGetValidSkusOutput>;

// The operation
/**
 * Get the list of valid SKUs for an IoT hub
 *
 * Get the list of valid SKUs for an IoT hub.
 *
 * @param api-version - The version of the API.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the IoT hub.
 * @param resourceName - The name of the IoT hub.
 */
export const IotHubResourceGetValidSkus = /*@__PURE__*/ API.make(() => ({
  inputSchema: IotHubResourceGetValidSkusInput,
  outputSchema: IotHubResourceGetValidSkusOutput,
}));
// Input Schema
export interface IotHubResourceImportDevicesInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  inputBlobContainerUri: string;
  outputBlobContainerUri: string;
  inputBlobName?: string;
  outputBlobName?: string;
  authenticationType?: "keyBased" | "identityBased";
  identity?: { userAssignedIdentity?: string };
  includeConfigurations?: boolean;
  configurationsBlobName?: string;
}
export const IotHubResourceImportDevicesInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    inputBlobContainerUri: Schema.String,
    outputBlobContainerUri: Schema.String,
    inputBlobName: Schema.optional(Schema.String),
    outputBlobName: Schema.optional(Schema.String),
    authenticationType: Schema.optional(
      Schema.Literals(["keyBased", "identityBased"]),
    ),
    identity: Schema.optional(
      Schema.Struct({
        userAssignedIdentity: Schema.optional(Schema.String),
      }),
    ),
    includeConfigurations: Schema.optional(Schema.Boolean),
    configurationsBlobName: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/importDevices",
      apiVersion: "2023-06-30",
    }),
  ) as unknown as Schema.Codec<IotHubResourceImportDevicesInput>;

// Output Schema
export interface IotHubResourceImportDevicesOutput {
  jobId?: string;
  startTimeUtc?: string;
  endTimeUtc?: string;
  type?:
    | "unknown"
    | "export"
    | "import"
    | "backup"
    | "readDeviceProperties"
    | "writeDeviceProperties"
    | "updateDeviceConfiguration"
    | "rebootDevice"
    | "factoryResetDevice"
    | "firmwareUpdate";
  status?:
    | "unknown"
    | "enqueued"
    | "running"
    | "completed"
    | "failed"
    | "cancelled";
  failureReason?: string;
  statusMessage?: string;
  parentJobId?: string;
}
export const IotHubResourceImportDevicesOutput =
  /*@__PURE__*/ Schema.Struct({
    jobId: Schema.optional(Schema.String),
    startTimeUtc: Schema.optional(Schema.String),
    endTimeUtc: Schema.optional(Schema.String),
    type: Schema.optional(
      Schema.Literals([
        "unknown",
        "export",
        "import",
        "backup",
        "readDeviceProperties",
        "writeDeviceProperties",
        "updateDeviceConfiguration",
        "rebootDevice",
        "factoryResetDevice",
        "firmwareUpdate",
      ]),
    ),
    status: Schema.optional(
      Schema.Literals([
        "unknown",
        "enqueued",
        "running",
        "completed",
        "failed",
        "cancelled",
      ]),
    ),
    failureReason: Schema.optional(Schema.String),
    statusMessage: Schema.optional(Schema.String),
    parentJobId: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<IotHubResourceImportDevicesOutput>;

// The operation
/**
 * Import, update, or delete device identities in the IoT hub identity registry from a blob. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry#import-and-export-device-identities
 *
 * Import, update, or delete device identities in the IoT hub identity registry from a blob. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry#import-and-export-device-identities.
 *
 * @param api-version - The version of the API.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the IoT hub.
 * @param resourceName - The name of the IoT hub.
 */
export const IotHubResourceImportDevices = /*@__PURE__*/ API.make(() => ({
  inputSchema: IotHubResourceImportDevicesInput,
  outputSchema: IotHubResourceImportDevicesOutput,
}));
// Input Schema
export interface IotHubResourceListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const IotHubResourceListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs",
      apiVersion: "2023-06-30",
    }),
  ) as unknown as Schema.Codec<IotHubResourceListByResourceGroupInput>;

// Output Schema
export interface IotHubResourceListByResourceGroupOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    location: string;
    tags?: Record<string, string>;
  }[];
  nextLink?: string;
}
export const IotHubResourceListByResourceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          location: Schema.String,
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<IotHubResourceListByResourceGroupOutput>;

// The operation
/**
 * Get all the IoT hubs in a resource group
 *
 * Get all the IoT hubs in a resource group.
 *
 * @param api-version - The version of the API.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the IoT hub.
 */
export const IotHubResourceListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: IotHubResourceListByResourceGroupInput,
    outputSchema: IotHubResourceListByResourceGroupOutput,
  }));
// Input Schema
export interface IotHubResourceListBySubscriptionInput {
  subscriptionId: string;
}
export const IotHubResourceListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Devices/IotHubs",
      apiVersion: "2023-06-30",
    }),
  ) as unknown as Schema.Codec<IotHubResourceListBySubscriptionInput>;

// Output Schema
export interface IotHubResourceListBySubscriptionOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    location: string;
    tags?: Record<string, string>;
  }[];
  nextLink?: string;
}
export const IotHubResourceListBySubscriptionOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          location: Schema.String,
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<IotHubResourceListBySubscriptionOutput>;

// The operation
/**
 * Get all the IoT hubs in a subscription
 *
 * Get all the IoT hubs in a subscription.
 *
 * @param api-version - The version of the API.
 * @param subscriptionId - The subscription identifier.
 */
export const IotHubResourceListBySubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: IotHubResourceListBySubscriptionInput,
    outputSchema: IotHubResourceListBySubscriptionOutput,
  }));
// Input Schema
export interface IotHubResourceListEventHubConsumerGroupsInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  eventHubEndpointName: string;
}
export const IotHubResourceListEventHubConsumerGroupsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    eventHubEndpointName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/eventHubEndpoints/{eventHubEndpointName}/ConsumerGroups",
      apiVersion: "2023-06-30",
    }),
  ) as unknown as Schema.Codec<IotHubResourceListEventHubConsumerGroupsInput>;

// Output Schema
export interface IotHubResourceListEventHubConsumerGroupsOutput {
  value?: {
    properties?: Record<string, unknown>;
    id?: string;
    name?: string;
    type?: string;
    etag?: string;
  }[];
  nextLink?: string;
}
export const IotHubResourceListEventHubConsumerGroupsOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          properties: Schema.optional(
            Schema.Record(Schema.String, Schema.Unknown),
          ),
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          etag: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<IotHubResourceListEventHubConsumerGroupsOutput>;

// The operation
/**
 * Get a list of the consumer groups in the Event Hub-compatible device-to-cloud endpoint in an IoT hub
 *
 * Get a list of the consumer groups in the Event Hub-compatible device-to-cloud endpoint in an IoT hub.
 *
 * @param api-version - The version of the API.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the IoT hub.
 * @param resourceName - The name of the IoT hub.
 * @param eventHubEndpointName - The name of the Event Hub-compatible endpoint.
 */
export const IotHubResourceListEventHubConsumerGroups =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: IotHubResourceListEventHubConsumerGroupsInput,
    outputSchema: IotHubResourceListEventHubConsumerGroupsOutput,
  }));
// Input Schema
export interface IotHubResourceListJobsInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const IotHubResourceListJobsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/jobs",
      apiVersion: "2023-06-30",
    }),
  ) as unknown as Schema.Codec<IotHubResourceListJobsInput>;

// Output Schema
export interface IotHubResourceListJobsOutput {
  value?: {
    jobId?: string;
    startTimeUtc?: string;
    endTimeUtc?: string;
    type?:
      | "unknown"
      | "export"
      | "import"
      | "backup"
      | "readDeviceProperties"
      | "writeDeviceProperties"
      | "updateDeviceConfiguration"
      | "rebootDevice"
      | "factoryResetDevice"
      | "firmwareUpdate";
    status?:
      | "unknown"
      | "enqueued"
      | "running"
      | "completed"
      | "failed"
      | "cancelled";
    failureReason?: string;
    statusMessage?: string;
    parentJobId?: string;
  }[];
  nextLink?: string;
}
export const IotHubResourceListJobsOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          jobId: Schema.optional(Schema.String),
          startTimeUtc: Schema.optional(Schema.String),
          endTimeUtc: Schema.optional(Schema.String),
          type: Schema.optional(
            Schema.Literals([
              "unknown",
              "export",
              "import",
              "backup",
              "readDeviceProperties",
              "writeDeviceProperties",
              "updateDeviceConfiguration",
              "rebootDevice",
              "factoryResetDevice",
              "firmwareUpdate",
            ]),
          ),
          status: Schema.optional(
            Schema.Literals([
              "unknown",
              "enqueued",
              "running",
              "completed",
              "failed",
              "cancelled",
            ]),
          ),
          failureReason: Schema.optional(Schema.String),
          statusMessage: Schema.optional(Schema.String),
          parentJobId: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<IotHubResourceListJobsOutput>;

// The operation
/**
 * Get a list of all the jobs in an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry
 *
 * Get a list of all the jobs in an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry.
 *
 * @param api-version - The version of the API.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the IoT hub.
 * @param resourceName - The name of the IoT hub.
 */
export const IotHubResourceListJobs = /*@__PURE__*/ API.make(() => ({
  inputSchema: IotHubResourceListJobsInput,
  outputSchema: IotHubResourceListJobsOutput,
}));
// Input Schema
export interface IotHubResourceListKeysInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const IotHubResourceListKeysInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/listkeys",
      apiVersion: "2023-06-30",
    }),
  ) as unknown as Schema.Codec<IotHubResourceListKeysInput>;

// Output Schema
export interface IotHubResourceListKeysOutput {
  value?: {
    keyName: string;
    primaryKey?: string;
    secondaryKey?: string;
    rights:
      | "RegistryRead"
      | "RegistryWrite"
      | "ServiceConnect"
      | "DeviceConnect"
      | "RegistryRead, RegistryWrite"
      | "RegistryRead, ServiceConnect"
      | "RegistryRead, DeviceConnect"
      | "RegistryWrite, ServiceConnect"
      | "RegistryWrite, DeviceConnect"
      | "ServiceConnect, DeviceConnect"
      | "RegistryRead, RegistryWrite, ServiceConnect"
      | "RegistryRead, RegistryWrite, DeviceConnect"
      | "RegistryRead, ServiceConnect, DeviceConnect"
      | "RegistryWrite, ServiceConnect, DeviceConnect"
      | "RegistryRead, RegistryWrite, ServiceConnect, DeviceConnect";
  }[];
  nextLink?: string;
}
export const IotHubResourceListKeysOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          keyName: Schema.String,
          primaryKey: Schema.optional(Schema.String),
          secondaryKey: Schema.optional(Schema.String),
          rights: Schema.Literals([
            "RegistryRead",
            "RegistryWrite",
            "ServiceConnect",
            "DeviceConnect",
            "RegistryRead, RegistryWrite",
            "RegistryRead, ServiceConnect",
            "RegistryRead, DeviceConnect",
            "RegistryWrite, ServiceConnect",
            "RegistryWrite, DeviceConnect",
            "ServiceConnect, DeviceConnect",
            "RegistryRead, RegistryWrite, ServiceConnect",
            "RegistryRead, RegistryWrite, DeviceConnect",
            "RegistryRead, ServiceConnect, DeviceConnect",
            "RegistryWrite, ServiceConnect, DeviceConnect",
            "RegistryRead, RegistryWrite, ServiceConnect, DeviceConnect",
          ]),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<IotHubResourceListKeysOutput>;

// The operation
/**
 * Get the security metadata for an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-security
 *
 * Get the security metadata for an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-security.
 *
 * @param api-version - The version of the API.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the IoT hub.
 * @param resourceName - The name of the IoT hub.
 */
export const IotHubResourceListKeys = /*@__PURE__*/ API.make(() => ({
  inputSchema: IotHubResourceListKeysInput,
  outputSchema: IotHubResourceListKeysOutput,
}));
// Input Schema
export interface IotHubResourceTestAllRoutesInput {
  iotHubName: string;
  subscriptionId: string;
  resourceGroupName: string;
  routingSource?:
    | "Invalid"
    | "DeviceMessages"
    | "TwinChangeEvents"
    | "DeviceLifecycleEvents"
    | "DeviceJobLifecycleEvents"
    | "DeviceConnectionStateEvents";
  message?: {
    body?: string;
    appProperties?: Record<string, string>;
    systemProperties?: Record<string, string>;
  };
  twin?: {
    tags?: unknown;
    properties?: { desired?: unknown; reported?: unknown };
  };
}
export const IotHubResourceTestAllRoutesInput =
  /*@__PURE__*/ Schema.Struct({
    iotHubName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    routingSource: Schema.optional(
      Schema.Literals([
        "Invalid",
        "DeviceMessages",
        "TwinChangeEvents",
        "DeviceLifecycleEvents",
        "DeviceJobLifecycleEvents",
        "DeviceConnectionStateEvents",
      ]),
    ),
    message: Schema.optional(
      Schema.Struct({
        body: Schema.optional(Schema.String),
        appProperties: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        systemProperties: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
      }),
    ),
    twin: Schema.optional(
      Schema.Struct({
        tags: Schema.optional(Schema.Unknown),
        properties: Schema.optional(
          Schema.Struct({
            desired: Schema.optional(Schema.Unknown),
            reported: Schema.optional(Schema.Unknown),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{iotHubName}/routing/routes/$testall",
      apiVersion: "2023-06-30",
    }),
  ) as unknown as Schema.Codec<IotHubResourceTestAllRoutesInput>;

// Output Schema
export interface IotHubResourceTestAllRoutesOutput {
  routes?: {
    properties?: {
      name: string;
      source:
        | "Invalid"
        | "DeviceMessages"
        | "TwinChangeEvents"
        | "DeviceLifecycleEvents"
        | "DeviceJobLifecycleEvents"
        | "DeviceConnectionStateEvents";
      condition?: string;
      endpointNames: string[];
      isEnabled: boolean;
    };
  }[];
}
export const IotHubResourceTestAllRoutesOutput =
  /*@__PURE__*/ Schema.Struct({
    routes: Schema.optional(
      Schema.Array(
        Schema.Struct({
          properties: Schema.optional(
            Schema.Struct({
              name: Schema.String,
              source: Schema.Literals([
                "Invalid",
                "DeviceMessages",
                "TwinChangeEvents",
                "DeviceLifecycleEvents",
                "DeviceJobLifecycleEvents",
                "DeviceConnectionStateEvents",
              ]),
              condition: Schema.optional(Schema.String),
              endpointNames: Schema.Array(Schema.String),
              isEnabled: Schema.Boolean,
            }),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<IotHubResourceTestAllRoutesOutput>;

// The operation
/**
 * Test all routes
 *
 * Test all routes configured in this Iot Hub
 *
 * @param iotHubName - IotHub to be tested
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - resource group which Iot Hub belongs to
 * @param api-version - The version of the API.
 */
export const IotHubResourceTestAllRoutes = /*@__PURE__*/ API.make(() => ({
  inputSchema: IotHubResourceTestAllRoutesInput,
  outputSchema: IotHubResourceTestAllRoutesOutput,
}));
// Input Schema
export interface IotHubResourceTestRouteInput {
  iotHubName: string;
  subscriptionId: string;
  resourceGroupName: string;
  message?: {
    body?: string;
    appProperties?: Record<string, string>;
    systemProperties?: Record<string, string>;
  };
  route: {
    name: string;
    source:
      | "Invalid"
      | "DeviceMessages"
      | "TwinChangeEvents"
      | "DeviceLifecycleEvents"
      | "DeviceJobLifecycleEvents"
      | "DeviceConnectionStateEvents";
    condition?: string;
    endpointNames: string[];
    isEnabled: boolean;
  };
  twin?: {
    tags?: unknown;
    properties?: { desired?: unknown; reported?: unknown };
  };
}
export const IotHubResourceTestRouteInput =
  /*@__PURE__*/ Schema.Struct({
    iotHubName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    message: Schema.optional(
      Schema.Struct({
        body: Schema.optional(Schema.String),
        appProperties: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        systemProperties: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
      }),
    ),
    route: Schema.Struct({
      name: Schema.String,
      source: Schema.Literals([
        "Invalid",
        "DeviceMessages",
        "TwinChangeEvents",
        "DeviceLifecycleEvents",
        "DeviceJobLifecycleEvents",
        "DeviceConnectionStateEvents",
      ]),
      condition: Schema.optional(Schema.String),
      endpointNames: Schema.Array(Schema.String),
      isEnabled: Schema.Boolean,
    }),
    twin: Schema.optional(
      Schema.Struct({
        tags: Schema.optional(Schema.Unknown),
        properties: Schema.optional(
          Schema.Struct({
            desired: Schema.optional(Schema.Unknown),
            reported: Schema.optional(Schema.Unknown),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{iotHubName}/routing/routes/$testnew",
      apiVersion: "2023-06-30",
    }),
  ) as unknown as Schema.Codec<IotHubResourceTestRouteInput>;

// Output Schema
export interface IotHubResourceTestRouteOutput {
  result?: "undefined" | "false" | "true";
  details?: {
    compilationErrors?: {
      message?: string;
      severity?: "error" | "warning";
      location?: {
        start?: { line?: number; column?: number };
        end?: { line?: number; column?: number };
      };
    }[];
  };
}
export const IotHubResourceTestRouteOutput =
  /*@__PURE__*/ Schema.Struct({
    result: Schema.optional(Schema.Literals(["undefined", "false", "true"])),
    details: Schema.optional(
      Schema.Struct({
        compilationErrors: Schema.optional(
          Schema.Array(
            Schema.Struct({
              message: Schema.optional(Schema.String),
              severity: Schema.optional(Schema.Literals(["error", "warning"])),
              location: Schema.optional(
                Schema.Struct({
                  start: Schema.optional(
                    Schema.Struct({
                      line: Schema.optional(Schema.Number),
                      column: Schema.optional(Schema.Number),
                    }),
                  ),
                  end: Schema.optional(
                    Schema.Struct({
                      line: Schema.optional(Schema.Number),
                      column: Schema.optional(Schema.Number),
                    }),
                  ),
                }),
              ),
            }),
          ),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<IotHubResourceTestRouteOutput>;

// The operation
/**
 * Test the new route
 *
 * Test the new route for this Iot Hub
 *
 * @param iotHubName - IotHub to be tested
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - resource group which Iot Hub belongs to
 * @param api-version - The version of the API.
 */
export const IotHubResourceTestRoute = /*@__PURE__*/ API.make(() => ({
  inputSchema: IotHubResourceTestRouteInput,
  outputSchema: IotHubResourceTestRouteOutput,
}));
// Input Schema
export interface IotHubResourceUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  tags?: unknown;
}
export const IotHubResourceUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Unknown),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}",
      apiVersion: "2023-06-30",
    }),
  ) as unknown as Schema.Codec<IotHubResourceUpdateInput>;

// Output Schema
export interface IotHubResourceUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  location: string;
  tags?: Record<string, string>;
}
export const IotHubResourceUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.String,
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }) as unknown as Schema.Codec<IotHubResourceUpdateOutput>;

// The operation
/**
 * Update an existing IoT Hubs tags.
 *
 * Update an existing IoT Hub tags. to update other fields use the CreateOrUpdate method
 *
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - Resource group identifier.
 * @param resourceName - Name of iot hub to update.
 * @param api-version - The version of the API.
 */
export const IotHubResourceUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: IotHubResourceUpdateInput,
  outputSchema: IotHubResourceUpdateOutput,
}));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Devices/operations",
    apiVersion: "2023-06-30",
  }),
) as unknown as Schema.Codec<OperationsListInput>;

// Output Schema
export interface OperationsListOutput {
  value?: {
    name?: string;
    display?: {
      provider?: string;
      resource?: string;
      operation?: string;
      description?: string;
    };
  }[];
  nextLink?: string;
}
export const OperationsListOutput = /*@__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(
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
      }),
    ),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<OperationsListOutput>;

// The operation
/**
 * Lists all of the available IoT Hub REST API operations.
 *
 * @param api-version - The version of the API.
 */
export const OperationsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface PrivateEndpointConnectionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/iotHubs/{resourceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2023-06-30",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsDeleteInput>;

// Output Schema
export interface PrivateEndpointConnectionsDeleteOutput {
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
}
export const PrivateEndpointConnectionsDeleteOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsDeleteOutput>;

// The operation
/**
 * Delete private endpoint connection
 *
 * Delete private endpoint connection with the specified name
 *
 * @param api-version - The version of the API.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the IoT hub.
 * @param resourceName - The name of the IoT hub.
 * @param privateEndpointConnectionName - The name of the private endpoint connection
 */
export const PrivateEndpointConnectionsDelete =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsDeleteInput,
    outputSchema: PrivateEndpointConnectionsDeleteOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/iotHubs/{resourceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2023-06-30",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsGetInput>;

// Output Schema
export interface PrivateEndpointConnectionsGetOutput {
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
}
export const PrivateEndpointConnectionsGetOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsGetOutput>;

// The operation
/**
 * Get private endpoint connection
 *
 * Get private endpoint connection properties
 *
 * @param api-version - The version of the API.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the IoT hub.
 * @param resourceName - The name of the IoT hub.
 * @param privateEndpointConnectionName - The name of the private endpoint connection
 */
export const PrivateEndpointConnectionsGet =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsGetInput,
    outputSchema: PrivateEndpointConnectionsGetOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const PrivateEndpointConnectionsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/iotHubs/{resourceName}/privateEndpointConnections",
      apiVersion: "2023-06-30",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsListInput>;

// Output Schema
export type PrivateEndpointConnectionsListOutput = {
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
}[];
export const PrivateEndpointConnectionsListOutput =
  /*@__PURE__*/ Schema.Array(
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
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsListOutput>;

// The operation
/**
 * List private endpoint connections
 *
 * List private endpoint connection properties
 *
 * @param api-version - The version of the API.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the IoT hub.
 * @param resourceName - The name of the IoT hub.
 */
export const PrivateEndpointConnectionsList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsListInput,
    outputSchema: PrivateEndpointConnectionsListOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsUpdateInput {
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
}
export const PrivateEndpointConnectionsUpdateInput =
  /*@__PURE__*/ Schema.Struct({
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
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/iotHubs/{resourceName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2023-06-30",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsUpdateInput>;

// Output Schema
export interface PrivateEndpointConnectionsUpdateOutput {
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
}
export const PrivateEndpointConnectionsUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsUpdateOutput>;

// The operation
/**
 * Update private endpoint connection
 *
 * Update the status of a private endpoint connection with the specified name
 *
 * @param api-version - The version of the API.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the IoT hub.
 * @param resourceName - The name of the IoT hub.
 * @param privateEndpointConnectionName - The name of the private endpoint connection
 */
export const PrivateEndpointConnectionsUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsUpdateInput,
    outputSchema: PrivateEndpointConnectionsUpdateOutput,
  }));
// Input Schema
export interface PrivateLinkResourcesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
  groupId: string;
}
export const PrivateLinkResourcesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    groupId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/iotHubs/{resourceName}/privateLinkResources/{groupId}",
      apiVersion: "2023-06-30",
    }),
  ) as unknown as Schema.Codec<PrivateLinkResourcesGetInput>;

// Output Schema
export interface PrivateLinkResourcesGetOutput {
  id?: string;
  name?: string;
  type?: string;
  properties: {
    groupId?: string;
    requiredMembers?: string[];
    requiredZoneNames?: string[];
  };
}
export const PrivateLinkResourcesGetOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    properties: Schema.Struct({
      groupId: Schema.optional(Schema.String),
      requiredMembers: Schema.optional(Schema.Array(Schema.String)),
      requiredZoneNames: Schema.optional(Schema.Array(Schema.String)),
    }),
  }) as unknown as Schema.Codec<PrivateLinkResourcesGetOutput>;

// The operation
/**
 * Get the specified private link resource
 *
 * Get the specified private link resource for the given IotHub
 *
 * @param api-version - The version of the API.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the IoT hub.
 * @param resourceName - The name of the IoT hub.
 * @param groupId - The name of the private link resource
 */
export const PrivateLinkResourcesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: PrivateLinkResourcesGetInput,
  outputSchema: PrivateLinkResourcesGetOutput,
}));
// Input Schema
export interface PrivateLinkResourcesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  resourceName: string;
}
export const PrivateLinkResourcesListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/iotHubs/{resourceName}/privateLinkResources",
      apiVersion: "2023-06-30",
    }),
  ) as unknown as Schema.Codec<PrivateLinkResourcesListInput>;

// Output Schema
export interface PrivateLinkResourcesListOutput {
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
export const PrivateLinkResourcesListOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<PrivateLinkResourcesListOutput>;

// The operation
/**
 * List private link resources
 *
 * List private link resources for the given IotHub
 *
 * @param api-version - The version of the API.
 * @param subscriptionId - The subscription identifier.
 * @param resourceGroupName - The name of the resource group that contains the IoT hub.
 * @param resourceName - The name of the IoT hub.
 */
export const PrivateLinkResourcesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: PrivateLinkResourcesListInput,
  outputSchema: PrivateLinkResourcesListOutput,
}));
// Input Schema
export interface ResourceProviderCommonGetSubscriptionQuotaInput {
  subscriptionId: string;
}
export const ResourceProviderCommonGetSubscriptionQuotaInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Devices/usages",
      apiVersion: "2023-06-30",
    }),
  ) as unknown as Schema.Codec<ResourceProviderCommonGetSubscriptionQuotaInput>;

// Output Schema
export interface ResourceProviderCommonGetSubscriptionQuotaOutput {
  value?: {
    id?: string;
    type?: string;
    unit?: string;
    currentValue?: number;
    limit?: number;
    name?: { value?: string; localizedValue?: string };
  }[];
  nextLink?: string;
}
export const ResourceProviderCommonGetSubscriptionQuotaOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          unit: Schema.optional(Schema.String),
          currentValue: Schema.optional(Schema.Number),
          limit: Schema.optional(Schema.Number),
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
  }) as unknown as Schema.Codec<ResourceProviderCommonGetSubscriptionQuotaOutput>;

// The operation
/**
 * Get the number of iot hubs in the subscription
 *
 * Get the number of free and paid iot hubs in the subscription
 *
 * @param subscriptionId - The subscription identifier.
 * @param api-version - The version of the API.
 */
export const ResourceProviderCommonGetSubscriptionQuota =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ResourceProviderCommonGetSubscriptionQuotaInput,
    outputSchema: ResourceProviderCommonGetSubscriptionQuotaOutput,
  }));
