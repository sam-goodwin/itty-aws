/**
 * Azure Databox API
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
export interface JobsBookShipmentPickUpInput {
  subscriptionId: string;
  resourceGroupName: string;
  jobName: string;
  startTime: string;
  endTime: string;
  shipmentLocation: string;
}
export const JobsBookShipmentPickUpInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    jobName: Schema.String.pipe(T.PathParam()),
    startTime: Schema.String,
    endTime: Schema.String,
    shipmentLocation: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBox/jobs/{jobName}/bookShipmentPickUp",
      apiVersion: "2025-07-01",
    }),
  ) as unknown as Schema.Codec<JobsBookShipmentPickUpInput>;

// Output Schema
export interface JobsBookShipmentPickUpOutput {
  confirmationNumber?: string;
  readyByTime?: string;
}
export const JobsBookShipmentPickUpOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    confirmationNumber: Schema.optional(Schema.String),
    readyByTime: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<JobsBookShipmentPickUpOutput>;

// The operation
/**
 * Book shipment pick up.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param jobName - The name of the job Resource within the specified resource group. job names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
 */
export const JobsBookShipmentPickUp = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: JobsBookShipmentPickUpInput,
    outputSchema: JobsBookShipmentPickUpOutput,
  }),
);
// Input Schema
export interface JobsCancelInput {
  subscriptionId: string;
  resourceGroupName: string;
  jobName: string;
  reason: string;
}
export const JobsCancelInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  jobName: Schema.String.pipe(T.PathParam()),
  reason: Schema.String,
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBox/jobs/{jobName}/cancel",
    apiVersion: "2025-07-01",
  }),
) as unknown as Schema.Codec<JobsCancelInput>;

// Output Schema
export type JobsCancelOutput = void;
export const JobsCancelOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<JobsCancelOutput>;

// The operation
/**
 * CancelJob.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param jobName - The name of the job Resource within the specified resource group. job names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
 */
export const JobsCancel = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: JobsCancelInput,
  outputSchema: JobsCancelOutput,
}));
// Input Schema
export interface JobsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  jobName: string;
  properties: {
    transferType: "ImportToAzure" | "ExportFromAzure";
    isCancellable?: boolean;
    isDeletable?: boolean;
    isShippingAddressEditable?: boolean;
    reverseShippingDetailsUpdate?: "Enabled" | "Disabled" | "NotSupported";
    reverseTransportPreferenceUpdate?: "Enabled" | "Disabled" | "NotSupported";
    isPrepareToShipEnabled?: boolean;
    status?:
      | "DeviceOrdered"
      | "DevicePrepared"
      | "Dispatched"
      | "Delivered"
      | "PickedUp"
      | "AtAzureDC"
      | "DataCopy"
      | "Completed"
      | "CompletedWithErrors"
      | "Cancelled"
      | "Failed_IssueReportedAtCustomer"
      | "Failed_IssueDetectedAtAzureDC"
      | "Aborted"
      | "CompletedWithWarnings"
      | "ReadyToDispatchFromAzureDC"
      | "ReadyToReceiveAtAzureDC"
      | "Created"
      | "ShippedToAzureDC"
      | "AwaitingShipmentDetails"
      | "PreparingToShipFromAzureDC"
      | "ShippedToCustomer";
    delayedStage?:
      | "DeviceOrdered"
      | "DevicePrepared"
      | "Dispatched"
      | "Delivered"
      | "PickedUp"
      | "AtAzureDC"
      | "DataCopy"
      | "Completed"
      | "CompletedWithErrors"
      | "Cancelled"
      | "Failed_IssueReportedAtCustomer"
      | "Failed_IssueDetectedAtAzureDC"
      | "Aborted"
      | "CompletedWithWarnings"
      | "ReadyToDispatchFromAzureDC"
      | "ReadyToReceiveAtAzureDC"
      | "Created"
      | "ShippedToAzureDC"
      | "AwaitingShipmentDetails"
      | "PreparingToShipFromAzureDC"
      | "ShippedToCustomer";
    startTime?: string;
    error?: {
      additionalInfo?: { info?: Record<string, unknown>; type?: string }[];
      code?: string;
      details?: unknown[];
      message?: string;
      target?: string;
    };
    details?: {
      jobStages?: {
        stageName?:
          | "DeviceOrdered"
          | "DevicePrepared"
          | "Dispatched"
          | "Delivered"
          | "PickedUp"
          | "AtAzureDC"
          | "DataCopy"
          | "Completed"
          | "CompletedWithErrors"
          | "Cancelled"
          | "Failed_IssueReportedAtCustomer"
          | "Failed_IssueDetectedAtAzureDC"
          | "Aborted"
          | "CompletedWithWarnings"
          | "ReadyToDispatchFromAzureDC"
          | "ReadyToReceiveAtAzureDC"
          | "Created"
          | "ShippedToAzureDC"
          | "AwaitingShipmentDetails"
          | "PreparingToShipFromAzureDC"
          | "ShippedToCustomer";
        displayName?: string;
        stageStatus?:
          | "None"
          | "InProgress"
          | "Succeeded"
          | "Failed"
          | "Cancelled"
          | "Cancelling"
          | "SucceededWithErrors"
          | "WaitingForCustomerAction"
          | "SucceededWithWarnings"
          | "WaitingForCustomerActionForKek"
          | "WaitingForCustomerActionForCleanUp"
          | "CustomerActionPerformedForCleanUp"
          | "CustomerActionPerformed";
        stageTime?: string;
        jobStageDetails?: unknown;
        delayInformation?: {
          status?: "Active" | "Resolved";
          errorCode?:
            | "InternalIssueDelay"
            | "ActiveOrderLimitBreachedDelay"
            | "HighDemandDelay"
            | "LargeNumberOfFilesDelay";
          description?: string;
          startTime?: string;
          resolutionTime?: string;
        }[];
      }[];
      contactDetails: {
        contactName: string;
        phone: string;
        phoneExtension?: string;
        mobile?: string;
        emailList: string[];
        notificationPreference?: {
          stageName:
            | "DevicePrepared"
            | "Dispatched"
            | "Delivered"
            | "PickedUp"
            | "AtAzureDC"
            | "DataCopy"
            | "Created"
            | "ShippedToCustomer";
          sendNotification: boolean;
        }[];
      };
      shippingAddress?: {
        streetAddress1: string;
        streetAddress2?: string;
        streetAddress3?: string;
        city?: string;
        stateOrProvince?: string;
        country: string;
        postalCode?: string;
        zipExtendedCode?: string;
        companyName?: string;
        addressType?: "None" | "Residential" | "Commercial";
        skipAddressValidation?: boolean;
        taxIdentificationNumber?: string;
      };
      deliveryPackage?: {
        trackingUrl?: string;
        carrierName?: string;
        trackingId?: string;
      };
      returnPackage?: {
        trackingUrl?: string;
        carrierName?: string;
        trackingId?: string;
      };
      dataImportDetails?: {
        accountDetails: {
          dataAccountType: "StorageAccount" | "ManagedDisk";
          sharePassword?: string | Redacted.Redacted<string>;
        };
        logCollectionLevel?: "Error" | "Verbose";
      }[];
      dataExportDetails?: {
        transferConfiguration: {
          transferConfigurationType: "TransferAll" | "TransferUsingFilter";
          transferFilterDetails?: {
            include?: {
              dataAccountType: "StorageAccount" | "ManagedDisk";
              blobFilterDetails?: {
                blobPrefixList?: string[];
                blobPathList?: string[];
                containerList?: string[];
              };
              azureFileFilterDetails?: {
                filePrefixList?: string[];
                filePathList?: string[];
                fileShareList?: string[];
              };
              filterFileDetails?: {
                filterFileType: "AzureBlob" | "AzureFile";
                filterFilePath: string;
              }[];
            };
          };
          transferAllDetails?: {
            include?: {
              dataAccountType: "StorageAccount" | "ManagedDisk";
              transferAllBlobs?: boolean;
              transferAllFiles?: boolean;
            };
          };
        };
        logCollectionLevel?: "Error" | "Verbose";
        accountDetails: {
          dataAccountType: "StorageAccount" | "ManagedDisk";
          sharePassword?: string | Redacted.Redacted<string>;
        };
      }[];
      jobDetailsType:
        | "DataBox"
        | "DataBoxDisk"
        | "DataBoxHeavy"
        | "DataBoxCustomerDisk";
      preferences?: {
        preferredDataCenterRegion?: string[];
        transportPreferences?: {
          preferredShipmentType: "CustomerManaged" | "MicrosoftManaged";
          isUpdated?: boolean;
        };
        reverseTransportPreferences?: {
          preferredShipmentType: "CustomerManaged" | "MicrosoftManaged";
          isUpdated?: boolean;
        };
        encryptionPreferences?: {
          doubleEncryption?: "Enabled" | "Disabled";
          hardwareEncryption?: "Enabled" | "Disabled";
        };
        storageAccountAccessTierPreferences?: "Archive"[];
      };
      reverseShippingDetails?: {
        contactDetails?: {
          contactName: string;
          phone: string;
          phoneExtension?: string;
          mobile?: string;
        };
        shippingAddress?: {
          streetAddress1: string;
          streetAddress2?: string;
          streetAddress3?: string;
          city?: string;
          stateOrProvince?: string;
          country: string;
          postalCode?: string;
          zipExtendedCode?: string;
          companyName?: string;
          addressType?: "None" | "Residential" | "Commercial";
          skipAddressValidation?: boolean;
          taxIdentificationNumber?: string;
        };
        isUpdated?: boolean;
      };
      copyLogDetails?: {
        copyLogDetailsType:
          | "DataBox"
          | "DataBoxDisk"
          | "DataBoxHeavy"
          | "DataBoxCustomerDisk";
      }[];
      reverseShipmentLabelSasKey?: string;
      chainOfCustodySasKey?: string;
      deviceErasureDetails?: {
        deviceErasureStatus?:
          | "None"
          | "InProgress"
          | "Succeeded"
          | "Failed"
          | "Cancelled"
          | "Cancelling"
          | "SucceededWithErrors"
          | "WaitingForCustomerAction"
          | "SucceededWithWarnings"
          | "WaitingForCustomerActionForKek"
          | "WaitingForCustomerActionForCleanUp"
          | "CustomerActionPerformedForCleanUp"
          | "CustomerActionPerformed";
        erasureOrDestructionCertificateSasKey?: string;
        secureErasureCertificateSasKey?: string;
      };
      keyEncryptionKey?: {
        kekType: "MicrosoftManaged" | "CustomerManaged";
        identityProperties?: {
          type?: string;
          userAssigned?: { resourceId?: string };
        };
        kekUrl?: string;
        kekVaultResourceID?: string;
      };
      expectedDataSizeInTeraBytes?: number;
      actions?: (
        | "None"
        | "MoveToCleanUpDevice"
        | "Resume"
        | "Restart"
        | "ReachOutToOperation"
      )[];
      lastMitigationActionOnJob?: {
        actionDateTimeInUtc?: string;
        isPerformedByCustomer?: boolean;
        customerResolution?:
          | "None"
          | "MoveToCleanUpDevice"
          | "Resume"
          | "Restart"
          | "ReachOutToOperation";
      };
      datacenterAddress?: {
        datacenterAddressType:
          | "DatacenterAddressLocation"
          | "DatacenterAddressInstruction";
        supportedCarriersForReturnShipment?: string[];
        dataCenterAzureLocation?: string;
      };
      dataCenterCode?:
        | "Invalid"
        | "BY2"
        | "BY1"
        | "ORK70"
        | "AM2"
        | "AMS20"
        | "BY21"
        | "BY24"
        | "MWH01"
        | "AMS06"
        | "SSE90"
        | "SYD03"
        | "SYD23"
        | "CBR20"
        | "YTO20"
        | "CWL20"
        | "LON24"
        | "BOM01"
        | "BL20"
        | "BL7"
        | "SEL20"
        | "TYO01"
        | "BN1"
        | "SN5"
        | "CYS04"
        | "TYO22"
        | "YTO21"
        | "YQB20"
        | "FRA22"
        | "MAA01"
        | "CPQ02"
        | "CPQ20"
        | "SIN20"
        | "HKG20"
        | "SG2"
        | "MEL23"
        | "SEL21"
        | "OSA20"
        | "SHA03"
        | "BJB"
        | "JNB22"
        | "JNB21"
        | "MNZ21"
        | "SN8"
        | "AUH20"
        | "ZRH20"
        | "PUS20"
        | "AdHoc"
        | "CH1"
        | "DSM05"
        | "DUB07"
        | "PNQ01"
        | "SVG20"
        | "OSA02"
        | "OSA22"
        | "PAR22"
        | "BN7"
        | "SN6"
        | "BJS20"
        | "BL24"
        | "IDC5"
        | "TYO23"
        | "NTG20"
        | "DXB23"
        | "DSM11"
        | "AMS25"
        | "CPQ21"
        | "OSA23";
    };
    cancellationReason?: string;
    deliveryType?: "NonScheduled" | "Scheduled";
    deliveryInfo?: { scheduledDateTime?: string };
    isCancellableWithoutFee?: boolean;
    allDevicesLost?: boolean;
  };
  sku: {
    name: "DataBox" | "DataBoxDisk" | "DataBoxHeavy" | "DataBoxCustomerDisk";
    displayName?: string;
    family?: string;
    model?:
      | "DataBox"
      | "DataBoxDisk"
      | "DataBoxHeavy"
      | "DataBoxCustomerDisk"
      | "AzureDataBox120"
      | "AzureDataBox525";
  };
  identity?: {
    type?: string;
    principalId?: string;
    tenantId?: string;
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
  tags?: Record<string, string>;
  location: string;
}
export const JobsCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  jobName: Schema.String.pipe(T.PathParam()),
  properties: Schema.Struct({
    transferType: Schema.Literals(["ImportToAzure", "ExportFromAzure"]),
    isCancellable: Schema.optional(Schema.Boolean),
    isDeletable: Schema.optional(Schema.Boolean),
    isShippingAddressEditable: Schema.optional(Schema.Boolean),
    reverseShippingDetailsUpdate: Schema.optional(
      Schema.Literals(["Enabled", "Disabled", "NotSupported"]),
    ),
    reverseTransportPreferenceUpdate: Schema.optional(
      Schema.Literals(["Enabled", "Disabled", "NotSupported"]),
    ),
    isPrepareToShipEnabled: Schema.optional(Schema.Boolean),
    status: Schema.optional(
      Schema.Literals([
        "DeviceOrdered",
        "DevicePrepared",
        "Dispatched",
        "Delivered",
        "PickedUp",
        "AtAzureDC",
        "DataCopy",
        "Completed",
        "CompletedWithErrors",
        "Cancelled",
        "Failed_IssueReportedAtCustomer",
        "Failed_IssueDetectedAtAzureDC",
        "Aborted",
        "CompletedWithWarnings",
        "ReadyToDispatchFromAzureDC",
        "ReadyToReceiveAtAzureDC",
        "Created",
        "ShippedToAzureDC",
        "AwaitingShipmentDetails",
        "PreparingToShipFromAzureDC",
        "ShippedToCustomer",
      ]),
    ),
    delayedStage: Schema.optional(
      Schema.Literals([
        "DeviceOrdered",
        "DevicePrepared",
        "Dispatched",
        "Delivered",
        "PickedUp",
        "AtAzureDC",
        "DataCopy",
        "Completed",
        "CompletedWithErrors",
        "Cancelled",
        "Failed_IssueReportedAtCustomer",
        "Failed_IssueDetectedAtAzureDC",
        "Aborted",
        "CompletedWithWarnings",
        "ReadyToDispatchFromAzureDC",
        "ReadyToReceiveAtAzureDC",
        "Created",
        "ShippedToAzureDC",
        "AwaitingShipmentDetails",
        "PreparingToShipFromAzureDC",
        "ShippedToCustomer",
      ]),
    ),
    startTime: Schema.optional(Schema.String),
    error: Schema.optional(
      Schema.Struct({
        additionalInfo: Schema.optional(
          Schema.Array(
            Schema.Struct({
              info: Schema.optional(
                Schema.Record(Schema.String, Schema.Unknown),
              ),
              type: Schema.optional(Schema.String),
            }),
          ),
        ),
        code: Schema.optional(Schema.String),
        details: Schema.optional(Schema.Array(Schema.Unknown)),
        message: Schema.optional(Schema.String),
        target: Schema.optional(Schema.String),
      }),
    ),
    details: Schema.optional(
      Schema.Struct({
        jobStages: Schema.optional(
          Schema.Array(
            Schema.Struct({
              stageName: Schema.optional(
                Schema.Literals([
                  "DeviceOrdered",
                  "DevicePrepared",
                  "Dispatched",
                  "Delivered",
                  "PickedUp",
                  "AtAzureDC",
                  "DataCopy",
                  "Completed",
                  "CompletedWithErrors",
                  "Cancelled",
                  "Failed_IssueReportedAtCustomer",
                  "Failed_IssueDetectedAtAzureDC",
                  "Aborted",
                  "CompletedWithWarnings",
                  "ReadyToDispatchFromAzureDC",
                  "ReadyToReceiveAtAzureDC",
                  "Created",
                  "ShippedToAzureDC",
                  "AwaitingShipmentDetails",
                  "PreparingToShipFromAzureDC",
                  "ShippedToCustomer",
                ]),
              ),
              displayName: Schema.optional(Schema.String),
              stageStatus: Schema.optional(
                Schema.Literals([
                  "None",
                  "InProgress",
                  "Succeeded",
                  "Failed",
                  "Cancelled",
                  "Cancelling",
                  "SucceededWithErrors",
                  "WaitingForCustomerAction",
                  "SucceededWithWarnings",
                  "WaitingForCustomerActionForKek",
                  "WaitingForCustomerActionForCleanUp",
                  "CustomerActionPerformedForCleanUp",
                  "CustomerActionPerformed",
                ]),
              ),
              stageTime: Schema.optional(Schema.String),
              jobStageDetails: Schema.optional(Schema.Unknown),
              delayInformation: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    status: Schema.optional(
                      Schema.Literals(["Active", "Resolved"]),
                    ),
                    errorCode: Schema.optional(
                      Schema.Literals([
                        "InternalIssueDelay",
                        "ActiveOrderLimitBreachedDelay",
                        "HighDemandDelay",
                        "LargeNumberOfFilesDelay",
                      ]),
                    ),
                    description: Schema.optional(Schema.String),
                    startTime: Schema.optional(Schema.String),
                    resolutionTime: Schema.optional(Schema.String),
                  }),
                ),
              ),
            }),
          ),
        ),
        contactDetails: Schema.Struct({
          contactName: Schema.String,
          phone: Schema.String,
          phoneExtension: Schema.optional(Schema.String),
          mobile: Schema.optional(Schema.String),
          emailList: Schema.Array(Schema.String),
          notificationPreference: Schema.optional(
            Schema.Array(
              Schema.Struct({
                stageName: Schema.Literals([
                  "DevicePrepared",
                  "Dispatched",
                  "Delivered",
                  "PickedUp",
                  "AtAzureDC",
                  "DataCopy",
                  "Created",
                  "ShippedToCustomer",
                ]),
                sendNotification: Schema.Boolean,
              }),
            ),
          ),
        }),
        shippingAddress: Schema.optional(
          Schema.Struct({
            streetAddress1: Schema.String,
            streetAddress2: Schema.optional(Schema.String),
            streetAddress3: Schema.optional(Schema.String),
            city: Schema.optional(Schema.String),
            stateOrProvince: Schema.optional(Schema.String),
            country: Schema.String,
            postalCode: Schema.optional(Schema.String),
            zipExtendedCode: Schema.optional(Schema.String),
            companyName: Schema.optional(Schema.String),
            addressType: Schema.optional(
              Schema.Literals(["None", "Residential", "Commercial"]),
            ),
            skipAddressValidation: Schema.optional(Schema.Boolean),
            taxIdentificationNumber: Schema.optional(Schema.String),
          }),
        ),
        deliveryPackage: Schema.optional(
          Schema.Struct({
            trackingUrl: Schema.optional(Schema.String),
            carrierName: Schema.optional(Schema.String),
            trackingId: Schema.optional(Schema.String),
          }),
        ),
        returnPackage: Schema.optional(
          Schema.Struct({
            trackingUrl: Schema.optional(Schema.String),
            carrierName: Schema.optional(Schema.String),
            trackingId: Schema.optional(Schema.String),
          }),
        ),
        dataImportDetails: Schema.optional(
          Schema.Array(
            Schema.Struct({
              accountDetails: Schema.Struct({
                dataAccountType: Schema.Literals([
                  "StorageAccount",
                  "ManagedDisk",
                ]),
                sharePassword: Schema.optional(SensitiveString),
              }),
              logCollectionLevel: Schema.optional(
                Schema.Literals(["Error", "Verbose"]),
              ),
            }),
          ),
        ),
        dataExportDetails: Schema.optional(
          Schema.Array(
            Schema.Struct({
              transferConfiguration: Schema.Struct({
                transferConfigurationType: Schema.Literals([
                  "TransferAll",
                  "TransferUsingFilter",
                ]),
                transferFilterDetails: Schema.optional(
                  Schema.Struct({
                    include: Schema.optional(
                      Schema.Struct({
                        dataAccountType: Schema.Literals([
                          "StorageAccount",
                          "ManagedDisk",
                        ]),
                        blobFilterDetails: Schema.optional(
                          Schema.Struct({
                            blobPrefixList: Schema.optional(
                              Schema.Array(Schema.String),
                            ),
                            blobPathList: Schema.optional(
                              Schema.Array(Schema.String),
                            ),
                            containerList: Schema.optional(
                              Schema.Array(Schema.String),
                            ),
                          }),
                        ),
                        azureFileFilterDetails: Schema.optional(
                          Schema.Struct({
                            filePrefixList: Schema.optional(
                              Schema.Array(Schema.String),
                            ),
                            filePathList: Schema.optional(
                              Schema.Array(Schema.String),
                            ),
                            fileShareList: Schema.optional(
                              Schema.Array(Schema.String),
                            ),
                          }),
                        ),
                        filterFileDetails: Schema.optional(
                          Schema.Array(
                            Schema.Struct({
                              filterFileType: Schema.Literals([
                                "AzureBlob",
                                "AzureFile",
                              ]),
                              filterFilePath: Schema.String,
                            }),
                          ),
                        ),
                      }),
                    ),
                  }),
                ),
                transferAllDetails: Schema.optional(
                  Schema.Struct({
                    include: Schema.optional(
                      Schema.Struct({
                        dataAccountType: Schema.Literals([
                          "StorageAccount",
                          "ManagedDisk",
                        ]),
                        transferAllBlobs: Schema.optional(Schema.Boolean),
                        transferAllFiles: Schema.optional(Schema.Boolean),
                      }),
                    ),
                  }),
                ),
              }),
              logCollectionLevel: Schema.optional(
                Schema.Literals(["Error", "Verbose"]),
              ),
              accountDetails: Schema.Struct({
                dataAccountType: Schema.Literals([
                  "StorageAccount",
                  "ManagedDisk",
                ]),
                sharePassword: Schema.optional(SensitiveString),
              }),
            }),
          ),
        ),
        jobDetailsType: Schema.Literals([
          "DataBox",
          "DataBoxDisk",
          "DataBoxHeavy",
          "DataBoxCustomerDisk",
        ]),
        preferences: Schema.optional(
          Schema.Struct({
            preferredDataCenterRegion: Schema.optional(
              Schema.Array(Schema.String),
            ),
            transportPreferences: Schema.optional(
              Schema.Struct({
                preferredShipmentType: Schema.Literals([
                  "CustomerManaged",
                  "MicrosoftManaged",
                ]),
                isUpdated: Schema.optional(Schema.Boolean),
              }),
            ),
            reverseTransportPreferences: Schema.optional(
              Schema.Struct({
                preferredShipmentType: Schema.Literals([
                  "CustomerManaged",
                  "MicrosoftManaged",
                ]),
                isUpdated: Schema.optional(Schema.Boolean),
              }),
            ),
            encryptionPreferences: Schema.optional(
              Schema.Struct({
                doubleEncryption: Schema.optional(
                  Schema.Literals(["Enabled", "Disabled"]),
                ),
                hardwareEncryption: Schema.optional(
                  Schema.Literals(["Enabled", "Disabled"]),
                ),
              }),
            ),
            storageAccountAccessTierPreferences: Schema.optional(
              Schema.Array(Schema.Literals(["Archive"])),
            ),
          }),
        ),
        reverseShippingDetails: Schema.optional(
          Schema.Struct({
            contactDetails: Schema.optional(
              Schema.Struct({
                contactName: Schema.String,
                phone: Schema.String,
                phoneExtension: Schema.optional(Schema.String),
                mobile: Schema.optional(Schema.String),
              }),
            ),
            shippingAddress: Schema.optional(
              Schema.Struct({
                streetAddress1: Schema.String,
                streetAddress2: Schema.optional(Schema.String),
                streetAddress3: Schema.optional(Schema.String),
                city: Schema.optional(Schema.String),
                stateOrProvince: Schema.optional(Schema.String),
                country: Schema.String,
                postalCode: Schema.optional(Schema.String),
                zipExtendedCode: Schema.optional(Schema.String),
                companyName: Schema.optional(Schema.String),
                addressType: Schema.optional(
                  Schema.Literals(["None", "Residential", "Commercial"]),
                ),
                skipAddressValidation: Schema.optional(Schema.Boolean),
                taxIdentificationNumber: Schema.optional(Schema.String),
              }),
            ),
            isUpdated: Schema.optional(Schema.Boolean),
          }),
        ),
        copyLogDetails: Schema.optional(
          Schema.Array(
            Schema.Struct({
              copyLogDetailsType: Schema.Literals([
                "DataBox",
                "DataBoxDisk",
                "DataBoxHeavy",
                "DataBoxCustomerDisk",
              ]),
            }),
          ),
        ),
        reverseShipmentLabelSasKey: Schema.optional(Schema.String),
        chainOfCustodySasKey: Schema.optional(Schema.String),
        deviceErasureDetails: Schema.optional(
          Schema.Struct({
            deviceErasureStatus: Schema.optional(
              Schema.Literals([
                "None",
                "InProgress",
                "Succeeded",
                "Failed",
                "Cancelled",
                "Cancelling",
                "SucceededWithErrors",
                "WaitingForCustomerAction",
                "SucceededWithWarnings",
                "WaitingForCustomerActionForKek",
                "WaitingForCustomerActionForCleanUp",
                "CustomerActionPerformedForCleanUp",
                "CustomerActionPerformed",
              ]),
            ),
            erasureOrDestructionCertificateSasKey: Schema.optional(
              Schema.String,
            ),
            secureErasureCertificateSasKey: Schema.optional(Schema.String),
          }),
        ),
        keyEncryptionKey: Schema.optional(
          Schema.Struct({
            kekType: Schema.Literals(["MicrosoftManaged", "CustomerManaged"]),
            identityProperties: Schema.optional(
              Schema.Struct({
                type: Schema.optional(Schema.String),
                userAssigned: Schema.optional(
                  Schema.Struct({
                    resourceId: Schema.optional(Schema.String),
                  }),
                ),
              }),
            ),
            kekUrl: Schema.optional(Schema.String),
            kekVaultResourceID: Schema.optional(Schema.String),
          }),
        ),
        expectedDataSizeInTeraBytes: Schema.optional(Schema.Number),
        actions: Schema.optional(
          Schema.Array(
            Schema.Literals([
              "None",
              "MoveToCleanUpDevice",
              "Resume",
              "Restart",
              "ReachOutToOperation",
            ]),
          ),
        ),
        lastMitigationActionOnJob: Schema.optional(
          Schema.Struct({
            actionDateTimeInUtc: Schema.optional(Schema.String),
            isPerformedByCustomer: Schema.optional(Schema.Boolean),
            customerResolution: Schema.optional(
              Schema.Literals([
                "None",
                "MoveToCleanUpDevice",
                "Resume",
                "Restart",
                "ReachOutToOperation",
              ]),
            ),
          }),
        ),
        datacenterAddress: Schema.optional(
          Schema.Struct({
            datacenterAddressType: Schema.Literals([
              "DatacenterAddressLocation",
              "DatacenterAddressInstruction",
            ]),
            supportedCarriersForReturnShipment: Schema.optional(
              Schema.Array(Schema.String),
            ),
            dataCenterAzureLocation: Schema.optional(Schema.String),
          }),
        ),
        dataCenterCode: Schema.optional(
          Schema.Literals([
            "Invalid",
            "BY2",
            "BY1",
            "ORK70",
            "AM2",
            "AMS20",
            "BY21",
            "BY24",
            "MWH01",
            "AMS06",
            "SSE90",
            "SYD03",
            "SYD23",
            "CBR20",
            "YTO20",
            "CWL20",
            "LON24",
            "BOM01",
            "BL20",
            "BL7",
            "SEL20",
            "TYO01",
            "BN1",
            "SN5",
            "CYS04",
            "TYO22",
            "YTO21",
            "YQB20",
            "FRA22",
            "MAA01",
            "CPQ02",
            "CPQ20",
            "SIN20",
            "HKG20",
            "SG2",
            "MEL23",
            "SEL21",
            "OSA20",
            "SHA03",
            "BJB",
            "JNB22",
            "JNB21",
            "MNZ21",
            "SN8",
            "AUH20",
            "ZRH20",
            "PUS20",
            "AdHoc",
            "CH1",
            "DSM05",
            "DUB07",
            "PNQ01",
            "SVG20",
            "OSA02",
            "OSA22",
            "PAR22",
            "BN7",
            "SN6",
            "BJS20",
            "BL24",
            "IDC5",
            "TYO23",
            "NTG20",
            "DXB23",
            "DSM11",
            "AMS25",
            "CPQ21",
            "OSA23",
          ]),
        ),
      }),
    ),
    cancellationReason: Schema.optional(Schema.String),
    deliveryType: Schema.optional(
      Schema.Literals(["NonScheduled", "Scheduled"]),
    ),
    deliveryInfo: Schema.optional(
      Schema.Struct({
        scheduledDateTime: Schema.optional(Schema.String),
      }),
    ),
    isCancellableWithoutFee: Schema.optional(Schema.Boolean),
    allDevicesLost: Schema.optional(Schema.Boolean),
  }),
  sku: Schema.Struct({
    name: Schema.Literals([
      "DataBox",
      "DataBoxDisk",
      "DataBoxHeavy",
      "DataBoxCustomerDisk",
    ]),
    displayName: Schema.optional(Schema.String),
    family: Schema.optional(Schema.String),
    model: Schema.optional(
      Schema.Literals([
        "DataBox",
        "DataBoxDisk",
        "DataBoxHeavy",
        "DataBoxCustomerDisk",
        "AzureDataBox120",
        "AzureDataBox525",
      ]),
    ),
  }),
  identity: Schema.optional(
    Schema.Struct({
      type: Schema.optional(Schema.String),
      principalId: Schema.optional(Schema.String),
      tenantId: Schema.optional(Schema.String),
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
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBox/jobs/{jobName}",
    apiVersion: "2025-07-01",
  }),
) as unknown as Schema.Codec<JobsCreateInput>;

// Output Schema
export interface JobsCreateOutput {
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
export const JobsCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<JobsCreateOutput>;

// The operation
/**
 * Creates a new job with the specified parameters. Existing job cannot be updated with this API and should instead be updated with the Update job API.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param jobName - The name of the job Resource within the specified resource group. job names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
 */
export const JobsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: JobsCreateInput,
  outputSchema: JobsCreateOutput,
}));
// Input Schema
export interface JobsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  jobName: string;
}
export const JobsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  jobName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBox/jobs/{jobName}",
    apiVersion: "2025-07-01",
  }),
) as unknown as Schema.Codec<JobsDeleteInput>;

// Output Schema
export type JobsDeleteOutput = void;
export const JobsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<JobsDeleteOutput>;

// The operation
/**
 * Deletes a job.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param jobName - The name of the job Resource within the specified resource group. job names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
 */
export const JobsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: JobsDeleteInput,
  outputSchema: JobsDeleteOutput,
}));
// Input Schema
export interface JobsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  jobName: string;
  $expand?: string;
}
export const JobsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  jobName: Schema.String.pipe(T.PathParam()),
  $expand: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBox/jobs/{jobName}",
    apiVersion: "2025-07-01",
  }),
) as unknown as Schema.Codec<JobsGetInput>;

// Output Schema
export interface JobsGetOutput {
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
export const JobsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<JobsGetOutput>;

// The operation
/**
 * Gets information about the specified job.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param jobName - The name of the job Resource within the specified resource group. job names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
 * @param $expand - $expand is supported on details parameter for job, which provides details on the job stages.
 */
export const JobsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: JobsGetInput,
  outputSchema: JobsGetOutput,
}));
// Input Schema
export interface JobsListInput {
  subscriptionId: string;
  $skipToken?: string;
}
export const JobsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  $skipToken: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.DataBox/jobs",
    apiVersion: "2025-07-01",
  }),
) as unknown as Schema.Codec<JobsListInput>;

// Output Schema
export interface JobsListOutput {
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
export const JobsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<JobsListOutput>;

// The operation
/**
 * Lists all the jobs available under the subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param $skipToken - $skipToken is supported on Get list of jobs, which provides the next page in the list of jobs.
 */
export const JobsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: JobsListInput,
  outputSchema: JobsListOutput,
}));
// Input Schema
export interface JobsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  $skipToken?: string;
}
export const JobsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    $skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBox/jobs",
      apiVersion: "2025-07-01",
    }),
  ) as unknown as Schema.Codec<JobsListByResourceGroupInput>;

// Output Schema
export interface JobsListByResourceGroupOutput {
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
export const JobsListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<JobsListByResourceGroupOutput>;

// The operation
/**
 * Lists all the jobs available under the given resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $skipToken - $skipToken is supported on Get list of jobs, which provides the next page in the list of jobs.
 */
export const JobsListByResourceGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: JobsListByResourceGroupInput,
    outputSchema: JobsListByResourceGroupOutput,
  }),
);
// Input Schema
export interface JobsListCredentialsInput {
  subscriptionId: string;
  resourceGroupName: string;
  jobName: string;
}
export const JobsListCredentialsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    jobName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBox/jobs/{jobName}/listCredentials",
      apiVersion: "2025-07-01",
    }),
  ) as unknown as Schema.Codec<JobsListCredentialsInput>;

// Output Schema
export interface JobsListCredentialsOutput {
  value: {
    jobName?: string;
    jobSecrets?: {
      jobSecretsType:
        | "DataBox"
        | "DataBoxDisk"
        | "DataBoxHeavy"
        | "DataBoxCustomerDisk";
      dcAccessSecurityCode?: {
        reverseDCAccessCode?: string;
        forwardDCAccessCode?: string;
      };
      error?: {
        additionalInfo?: { info?: Record<string, unknown>; type?: string }[];
        code?: string;
        details?: unknown[];
        message?: string;
        target?: string;
      };
    };
  }[];
  nextLink?: string;
}
export const JobsListCredentialsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        jobName: Schema.optional(Schema.String),
        jobSecrets: Schema.optional(
          Schema.Struct({
            jobSecretsType: Schema.Literals([
              "DataBox",
              "DataBoxDisk",
              "DataBoxHeavy",
              "DataBoxCustomerDisk",
            ]),
            dcAccessSecurityCode: Schema.optional(
              Schema.Struct({
                reverseDCAccessCode: Schema.optional(Schema.String),
                forwardDCAccessCode: Schema.optional(Schema.String),
              }),
            ),
            error: Schema.optional(
              Schema.Struct({
                additionalInfo: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      info: Schema.optional(
                        Schema.Record(Schema.String, Schema.Unknown),
                      ),
                      type: Schema.optional(Schema.String),
                    }),
                  ),
                ),
                code: Schema.optional(Schema.String),
                details: Schema.optional(Schema.Array(Schema.Unknown)),
                message: Schema.optional(Schema.String),
                target: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<JobsListCredentialsOutput>;

// The operation
/**
 * This method gets the unencrypted secrets related to the job.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param jobName - The name of the job Resource within the specified resource group. job names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
 */
export const JobsListCredentials = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: JobsListCredentialsInput,
  outputSchema: JobsListCredentialsOutput,
}));
// Input Schema
export interface JobsMarkDevicesShippedInput {
  subscriptionId: string;
  resourceGroupName: string;
  jobName: string;
  deliverToDcPackageDetails: { carrierName?: string; trackingId?: string };
}
export const JobsMarkDevicesShippedInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    jobName: Schema.String.pipe(T.PathParam()),
    deliverToDcPackageDetails: Schema.Struct({
      carrierName: Schema.optional(Schema.String),
      trackingId: Schema.optional(Schema.String),
    }),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBox/jobs/{jobName}/markDevicesShipped",
      apiVersion: "2025-07-01",
    }),
  ) as unknown as Schema.Codec<JobsMarkDevicesShippedInput>;

// Output Schema
export type JobsMarkDevicesShippedOutput = void;
export const JobsMarkDevicesShippedOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<JobsMarkDevicesShippedOutput>;

// The operation
/**
 * Request to mark devices for a given job as shipped
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param jobName - The name of the job Resource within the specified resource group. job names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
 */
export const JobsMarkDevicesShipped = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: JobsMarkDevicesShippedInput,
    outputSchema: JobsMarkDevicesShippedOutput,
  }),
);
// Input Schema
export interface JobsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  jobName: string;
  properties?: {
    details?: {
      contactDetails?: {
        contactName: string;
        phone: string;
        phoneExtension?: string;
        mobile?: string;
        emailList: string[];
        notificationPreference?: {
          stageName:
            | "DevicePrepared"
            | "Dispatched"
            | "Delivered"
            | "PickedUp"
            | "AtAzureDC"
            | "DataCopy"
            | "Created"
            | "ShippedToCustomer";
          sendNotification: boolean;
        }[];
      };
      shippingAddress?: {
        streetAddress1: string;
        streetAddress2?: string;
        streetAddress3?: string;
        city?: string;
        stateOrProvince?: string;
        country: string;
        postalCode?: string;
        zipExtendedCode?: string;
        companyName?: string;
        addressType?: "None" | "Residential" | "Commercial";
        skipAddressValidation?: boolean;
        taxIdentificationNumber?: string;
      };
      reverseShippingDetails?: {
        contactDetails?: {
          contactName: string;
          phone: string;
          phoneExtension?: string;
          mobile?: string;
        };
        shippingAddress?: {
          streetAddress1: string;
          streetAddress2?: string;
          streetAddress3?: string;
          city?: string;
          stateOrProvince?: string;
          country: string;
          postalCode?: string;
          zipExtendedCode?: string;
          companyName?: string;
          addressType?: "None" | "Residential" | "Commercial";
          skipAddressValidation?: boolean;
          taxIdentificationNumber?: string;
        };
        isUpdated?: boolean;
      };
      preferences?: {
        preferredDataCenterRegion?: string[];
        transportPreferences?: {
          preferredShipmentType: "CustomerManaged" | "MicrosoftManaged";
          isUpdated?: boolean;
        };
        reverseTransportPreferences?: {
          preferredShipmentType: "CustomerManaged" | "MicrosoftManaged";
          isUpdated?: boolean;
        };
        encryptionPreferences?: {
          doubleEncryption?: "Enabled" | "Disabled";
          hardwareEncryption?: "Enabled" | "Disabled";
        };
        storageAccountAccessTierPreferences?: "Archive"[];
      };
      keyEncryptionKey?: {
        kekType: "MicrosoftManaged" | "CustomerManaged";
        identityProperties?: {
          type?: string;
          userAssigned?: { resourceId?: string };
        };
        kekUrl?: string;
        kekVaultResourceID?: string;
      };
      returnToCustomerPackageDetails?: {
        carrierAccountNumber?: string;
        carrierName?: string;
        trackingId?: string;
      };
    };
  };
  tags?: Record<string, string>;
  identity?: {
    type?: string;
    principalId?: string;
    tenantId?: string;
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
}
export const JobsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  jobName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      details: Schema.optional(
        Schema.Struct({
          contactDetails: Schema.optional(
            Schema.Struct({
              contactName: Schema.String,
              phone: Schema.String,
              phoneExtension: Schema.optional(Schema.String),
              mobile: Schema.optional(Schema.String),
              emailList: Schema.Array(Schema.String),
              notificationPreference: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    stageName: Schema.Literals([
                      "DevicePrepared",
                      "Dispatched",
                      "Delivered",
                      "PickedUp",
                      "AtAzureDC",
                      "DataCopy",
                      "Created",
                      "ShippedToCustomer",
                    ]),
                    sendNotification: Schema.Boolean,
                  }),
                ),
              ),
            }),
          ),
          shippingAddress: Schema.optional(
            Schema.Struct({
              streetAddress1: Schema.String,
              streetAddress2: Schema.optional(Schema.String),
              streetAddress3: Schema.optional(Schema.String),
              city: Schema.optional(Schema.String),
              stateOrProvince: Schema.optional(Schema.String),
              country: Schema.String,
              postalCode: Schema.optional(Schema.String),
              zipExtendedCode: Schema.optional(Schema.String),
              companyName: Schema.optional(Schema.String),
              addressType: Schema.optional(
                Schema.Literals(["None", "Residential", "Commercial"]),
              ),
              skipAddressValidation: Schema.optional(Schema.Boolean),
              taxIdentificationNumber: Schema.optional(Schema.String),
            }),
          ),
          reverseShippingDetails: Schema.optional(
            Schema.Struct({
              contactDetails: Schema.optional(
                Schema.Struct({
                  contactName: Schema.String,
                  phone: Schema.String,
                  phoneExtension: Schema.optional(Schema.String),
                  mobile: Schema.optional(Schema.String),
                }),
              ),
              shippingAddress: Schema.optional(
                Schema.Struct({
                  streetAddress1: Schema.String,
                  streetAddress2: Schema.optional(Schema.String),
                  streetAddress3: Schema.optional(Schema.String),
                  city: Schema.optional(Schema.String),
                  stateOrProvince: Schema.optional(Schema.String),
                  country: Schema.String,
                  postalCode: Schema.optional(Schema.String),
                  zipExtendedCode: Schema.optional(Schema.String),
                  companyName: Schema.optional(Schema.String),
                  addressType: Schema.optional(
                    Schema.Literals(["None", "Residential", "Commercial"]),
                  ),
                  skipAddressValidation: Schema.optional(Schema.Boolean),
                  taxIdentificationNumber: Schema.optional(Schema.String),
                }),
              ),
              isUpdated: Schema.optional(Schema.Boolean),
            }),
          ),
          preferences: Schema.optional(
            Schema.Struct({
              preferredDataCenterRegion: Schema.optional(
                Schema.Array(Schema.String),
              ),
              transportPreferences: Schema.optional(
                Schema.Struct({
                  preferredShipmentType: Schema.Literals([
                    "CustomerManaged",
                    "MicrosoftManaged",
                  ]),
                  isUpdated: Schema.optional(Schema.Boolean),
                }),
              ),
              reverseTransportPreferences: Schema.optional(
                Schema.Struct({
                  preferredShipmentType: Schema.Literals([
                    "CustomerManaged",
                    "MicrosoftManaged",
                  ]),
                  isUpdated: Schema.optional(Schema.Boolean),
                }),
              ),
              encryptionPreferences: Schema.optional(
                Schema.Struct({
                  doubleEncryption: Schema.optional(
                    Schema.Literals(["Enabled", "Disabled"]),
                  ),
                  hardwareEncryption: Schema.optional(
                    Schema.Literals(["Enabled", "Disabled"]),
                  ),
                }),
              ),
              storageAccountAccessTierPreferences: Schema.optional(
                Schema.Array(Schema.Literals(["Archive"])),
              ),
            }),
          ),
          keyEncryptionKey: Schema.optional(
            Schema.Struct({
              kekType: Schema.Literals(["MicrosoftManaged", "CustomerManaged"]),
              identityProperties: Schema.optional(
                Schema.Struct({
                  type: Schema.optional(Schema.String),
                  userAssigned: Schema.optional(
                    Schema.Struct({
                      resourceId: Schema.optional(Schema.String),
                    }),
                  ),
                }),
              ),
              kekUrl: Schema.optional(Schema.String),
              kekVaultResourceID: Schema.optional(Schema.String),
            }),
          ),
          returnToCustomerPackageDetails: Schema.optional(
            Schema.Struct({
              carrierAccountNumber: Schema.optional(Schema.String),
              carrierName: Schema.optional(Schema.String),
              trackingId: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
    }),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  identity: Schema.optional(
    Schema.Struct({
      type: Schema.optional(Schema.String),
      principalId: Schema.optional(Schema.String),
      tenantId: Schema.optional(Schema.String),
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
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBox/jobs/{jobName}",
    apiVersion: "2025-07-01",
  }),
) as unknown as Schema.Codec<JobsUpdateInput>;

// Output Schema
export interface JobsUpdateOutput {
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
export const JobsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<JobsUpdateOutput>;

// The operation
/**
 * Updates the properties of an existing job.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param jobName - The name of the job Resource within the specified resource group. job names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
 * @param If-Match - Defines the If-Match condition. The patch will be performed only if the ETag of the job on the server matches this value.
 */
export const JobsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: JobsUpdateInput,
  outputSchema: JobsUpdateOutput,
}));
// Input Schema
export interface MitigateInput {
  subscriptionId: string;
  resourceGroupName: string;
  jobName: string;
  customerResolutionCode?:
    | "None"
    | "MoveToCleanUpDevice"
    | "Resume"
    | "Restart"
    | "ReachOutToOperation";
  serialNumberCustomerResolutionMap?: Record<
    string,
    | "None"
    | "MoveToCleanUpDevice"
    | "Resume"
    | "Restart"
    | "ReachOutToOperation"
  >;
}
export const MitigateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  jobName: Schema.String.pipe(T.PathParam()),
  customerResolutionCode: Schema.optional(
    Schema.Literals([
      "None",
      "MoveToCleanUpDevice",
      "Resume",
      "Restart",
      "ReachOutToOperation",
    ]),
  ),
  serialNumberCustomerResolutionMap: Schema.optional(
    Schema.Record(
      Schema.String,
      Schema.Literals([
        "None",
        "MoveToCleanUpDevice",
        "Resume",
        "Restart",
        "ReachOutToOperation",
      ]),
    ),
  ),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBox/jobs/{jobName}/mitigate",
    apiVersion: "2025-07-01",
  }),
) as unknown as Schema.Codec<MitigateInput>;

// Output Schema
export type MitigateOutput = void;
export const MitigateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<MitigateOutput>;

// The operation
/**
 * Request to mitigate for a given job
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param jobName - The name of the job Resource within the specified resource group. job names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
 */
export const Mitigate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: MitigateInput,
  outputSchema: MitigateOutput,
}));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.DataBox/operations",
    apiVersion: "2025-07-01",
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
    properties?: unknown;
    origin?: string;
    isDataAction?: boolean;
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
            description: Schema.optional(Schema.String),
          }),
        ),
        properties: Schema.optional(Schema.Unknown),
        origin: Schema.optional(Schema.String),
        isDataAction: Schema.optional(Schema.Boolean),
      }),
    ),
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
export interface ServiceListAvailableSkusByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  location: string;
  transferType: "ImportToAzure" | "ExportFromAzure";
  country: string;
  skuNames?: (
    | "DataBox"
    | "DataBoxDisk"
    | "DataBoxHeavy"
    | "DataBoxCustomerDisk"
  )[];
}
export const ServiceListAvailableSkusByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    transferType: Schema.Literals(["ImportToAzure", "ExportFromAzure"]),
    country: Schema.String,
    skuNames: Schema.optional(
      Schema.Array(
        Schema.Literals([
          "DataBox",
          "DataBoxDisk",
          "DataBoxHeavy",
          "DataBoxCustomerDisk",
        ]),
      ),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBox/locations/{location}/availableSkus",
      apiVersion: "2025-07-01",
    }),
  ) as unknown as Schema.Codec<ServiceListAvailableSkusByResourceGroupInput>;

// Output Schema
export interface ServiceListAvailableSkusByResourceGroupOutput {
  value: {
    sku?: {
      name: "DataBox" | "DataBoxDisk" | "DataBoxHeavy" | "DataBoxCustomerDisk";
      displayName?: string;
      family?: string;
      model?:
        | "DataBox"
        | "DataBoxDisk"
        | "DataBoxHeavy"
        | "DataBoxCustomerDisk"
        | "AzureDataBox120"
        | "AzureDataBox525";
    };
    enabled?: boolean;
    properties?: {
      dataLocationToServiceLocationMap?: {
        dataLocation?: string;
        serviceLocation?: string;
      }[];
      capacity?: {
        usable?: string;
        maximum?: string;
        individualSkuUsable?: string;
      };
      costs?: { meterId?: string; meterType?: string; multiplier?: number }[];
      apiVersions?: string[];
      disabledReason?:
        | "None"
        | "Country"
        | "Region"
        | "Feature"
        | "OfferType"
        | "NoSubscriptionInfo";
      disabledReasonMessage?: string;
      requiredFeature?: string;
      countriesWithinCommerceBoundary?: string[];
    };
  }[];
  nextLink?: string;
}
export const ServiceListAvailableSkusByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        sku: Schema.optional(
          Schema.Struct({
            name: Schema.Literals([
              "DataBox",
              "DataBoxDisk",
              "DataBoxHeavy",
              "DataBoxCustomerDisk",
            ]),
            displayName: Schema.optional(Schema.String),
            family: Schema.optional(Schema.String),
            model: Schema.optional(
              Schema.Literals([
                "DataBox",
                "DataBoxDisk",
                "DataBoxHeavy",
                "DataBoxCustomerDisk",
                "AzureDataBox120",
                "AzureDataBox525",
              ]),
            ),
          }),
        ),
        enabled: Schema.optional(Schema.Boolean),
        properties: Schema.optional(
          Schema.Struct({
            dataLocationToServiceLocationMap: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  dataLocation: Schema.optional(Schema.String),
                  serviceLocation: Schema.optional(Schema.String),
                }),
              ),
            ),
            capacity: Schema.optional(
              Schema.Struct({
                usable: Schema.optional(Schema.String),
                maximum: Schema.optional(Schema.String),
                individualSkuUsable: Schema.optional(Schema.String),
              }),
            ),
            costs: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  meterId: Schema.optional(Schema.String),
                  meterType: Schema.optional(Schema.String),
                  multiplier: Schema.optional(Schema.Number),
                }),
              ),
            ),
            apiVersions: Schema.optional(Schema.Array(Schema.String)),
            disabledReason: Schema.optional(
              Schema.Literals([
                "None",
                "Country",
                "Region",
                "Feature",
                "OfferType",
                "NoSubscriptionInfo",
              ]),
            ),
            disabledReasonMessage: Schema.optional(Schema.String),
            requiredFeature: Schema.optional(Schema.String),
            countriesWithinCommerceBoundary: Schema.optional(
              Schema.Array(Schema.String),
            ),
          }),
        ),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ServiceListAvailableSkusByResourceGroupOutput>;

// The operation
/**
 * This method provides the list of available skus for the given subscription, resource group and location.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param location - The name of Azure region.
 */
export const ServiceListAvailableSkusByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ServiceListAvailableSkusByResourceGroupInput,
    outputSchema: ServiceListAvailableSkusByResourceGroupOutput,
  }));
// Input Schema
export interface ServiceRegionConfigurationInput {
  subscriptionId: string;
  location: string;
  scheduleAvailabilityRequest?: {
    storageLocation: string;
    skuName: "DataBox" | "DataBoxDisk" | "DataBoxHeavy" | "DataBoxCustomerDisk";
    country?: string;
    model?:
      | "DataBox"
      | "DataBoxDisk"
      | "DataBoxHeavy"
      | "DataBoxCustomerDisk"
      | "AzureDataBox120"
      | "AzureDataBox525";
  };
  transportAvailabilityRequest?: {
    skuName?:
      | "DataBox"
      | "DataBoxDisk"
      | "DataBoxHeavy"
      | "DataBoxCustomerDisk";
    model?:
      | "DataBox"
      | "DataBoxDisk"
      | "DataBoxHeavy"
      | "DataBoxCustomerDisk"
      | "AzureDataBox120"
      | "AzureDataBox525";
  };
  datacenterAddressRequest?: {
    storageLocation: string;
    skuName: "DataBox" | "DataBoxDisk" | "DataBoxHeavy" | "DataBoxCustomerDisk";
    model?:
      | "DataBox"
      | "DataBoxDisk"
      | "DataBoxHeavy"
      | "DataBoxCustomerDisk"
      | "AzureDataBox120"
      | "AzureDataBox525";
  };
  deviceCapabilityRequest?: {
    skuName?:
      | "DataBox"
      | "DataBoxDisk"
      | "DataBoxHeavy"
      | "DataBoxCustomerDisk";
    model?:
      | "DataBox"
      | "DataBoxDisk"
      | "DataBoxHeavy"
      | "DataBoxCustomerDisk"
      | "AzureDataBox120"
      | "AzureDataBox525";
  };
}
export const ServiceRegionConfigurationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    scheduleAvailabilityRequest: Schema.optional(
      Schema.Struct({
        storageLocation: Schema.String,
        skuName: Schema.Literals([
          "DataBox",
          "DataBoxDisk",
          "DataBoxHeavy",
          "DataBoxCustomerDisk",
        ]),
        country: Schema.optional(Schema.String),
        model: Schema.optional(
          Schema.Literals([
            "DataBox",
            "DataBoxDisk",
            "DataBoxHeavy",
            "DataBoxCustomerDisk",
            "AzureDataBox120",
            "AzureDataBox525",
          ]),
        ),
      }),
    ),
    transportAvailabilityRequest: Schema.optional(
      Schema.Struct({
        skuName: Schema.optional(
          Schema.Literals([
            "DataBox",
            "DataBoxDisk",
            "DataBoxHeavy",
            "DataBoxCustomerDisk",
          ]),
        ),
        model: Schema.optional(
          Schema.Literals([
            "DataBox",
            "DataBoxDisk",
            "DataBoxHeavy",
            "DataBoxCustomerDisk",
            "AzureDataBox120",
            "AzureDataBox525",
          ]),
        ),
      }),
    ),
    datacenterAddressRequest: Schema.optional(
      Schema.Struct({
        storageLocation: Schema.String,
        skuName: Schema.Literals([
          "DataBox",
          "DataBoxDisk",
          "DataBoxHeavy",
          "DataBoxCustomerDisk",
        ]),
        model: Schema.optional(
          Schema.Literals([
            "DataBox",
            "DataBoxDisk",
            "DataBoxHeavy",
            "DataBoxCustomerDisk",
            "AzureDataBox120",
            "AzureDataBox525",
          ]),
        ),
      }),
    ),
    deviceCapabilityRequest: Schema.optional(
      Schema.Struct({
        skuName: Schema.optional(
          Schema.Literals([
            "DataBox",
            "DataBoxDisk",
            "DataBoxHeavy",
            "DataBoxCustomerDisk",
          ]),
        ),
        model: Schema.optional(
          Schema.Literals([
            "DataBox",
            "DataBoxDisk",
            "DataBoxHeavy",
            "DataBoxCustomerDisk",
            "AzureDataBox120",
            "AzureDataBox525",
          ]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DataBox/locations/{location}/regionConfiguration",
      apiVersion: "2025-07-01",
    }),
  ) as unknown as Schema.Codec<ServiceRegionConfigurationInput>;

// Output Schema
export interface ServiceRegionConfigurationOutput {
  scheduleAvailabilityResponse?: { availableDates?: string[] };
  transportAvailabilityResponse?: {
    transportAvailabilityDetails?: {
      shipmentType?: "CustomerManaged" | "MicrosoftManaged";
    }[];
  };
  datacenterAddressResponse?: {
    datacenterAddressType:
      | "DatacenterAddressLocation"
      | "DatacenterAddressInstruction";
    supportedCarriersForReturnShipment?: string[];
    dataCenterAzureLocation?: string;
  };
  deviceCapabilityResponse?: {
    deviceCapabilityDetails?: { hardwareEncryption?: "Enabled" | "Disabled" }[];
  };
}
export const ServiceRegionConfigurationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scheduleAvailabilityResponse: Schema.optional(
      Schema.Struct({
        availableDates: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
    transportAvailabilityResponse: Schema.optional(
      Schema.Struct({
        transportAvailabilityDetails: Schema.optional(
          Schema.Array(
            Schema.Struct({
              shipmentType: Schema.optional(
                Schema.Literals(["CustomerManaged", "MicrosoftManaged"]),
              ),
            }),
          ),
        ),
      }),
    ),
    datacenterAddressResponse: Schema.optional(
      Schema.Struct({
        datacenterAddressType: Schema.Literals([
          "DatacenterAddressLocation",
          "DatacenterAddressInstruction",
        ]),
        supportedCarriersForReturnShipment: Schema.optional(
          Schema.Array(Schema.String),
        ),
        dataCenterAzureLocation: Schema.optional(Schema.String),
      }),
    ),
    deviceCapabilityResponse: Schema.optional(
      Schema.Struct({
        deviceCapabilityDetails: Schema.optional(
          Schema.Array(
            Schema.Struct({
              hardwareEncryption: Schema.optional(
                Schema.Literals(["Enabled", "Disabled"]),
              ),
            }),
          ),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<ServiceRegionConfigurationOutput>;

// The operation
/**
 * This API provides configuration details specific to given region/location at Subscription level.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The name of Azure region.
 */
export const ServiceRegionConfiguration = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ServiceRegionConfigurationInput,
    outputSchema: ServiceRegionConfigurationOutput,
  }),
);
// Input Schema
export interface ServiceRegionConfigurationByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  location: string;
  scheduleAvailabilityRequest?: {
    storageLocation: string;
    skuName: "DataBox" | "DataBoxDisk" | "DataBoxHeavy" | "DataBoxCustomerDisk";
    country?: string;
    model?:
      | "DataBox"
      | "DataBoxDisk"
      | "DataBoxHeavy"
      | "DataBoxCustomerDisk"
      | "AzureDataBox120"
      | "AzureDataBox525";
  };
  transportAvailabilityRequest?: {
    skuName?:
      | "DataBox"
      | "DataBoxDisk"
      | "DataBoxHeavy"
      | "DataBoxCustomerDisk";
    model?:
      | "DataBox"
      | "DataBoxDisk"
      | "DataBoxHeavy"
      | "DataBoxCustomerDisk"
      | "AzureDataBox120"
      | "AzureDataBox525";
  };
  datacenterAddressRequest?: {
    storageLocation: string;
    skuName: "DataBox" | "DataBoxDisk" | "DataBoxHeavy" | "DataBoxCustomerDisk";
    model?:
      | "DataBox"
      | "DataBoxDisk"
      | "DataBoxHeavy"
      | "DataBoxCustomerDisk"
      | "AzureDataBox120"
      | "AzureDataBox525";
  };
  deviceCapabilityRequest?: {
    skuName?:
      | "DataBox"
      | "DataBoxDisk"
      | "DataBoxHeavy"
      | "DataBoxCustomerDisk";
    model?:
      | "DataBox"
      | "DataBoxDisk"
      | "DataBoxHeavy"
      | "DataBoxCustomerDisk"
      | "AzureDataBox120"
      | "AzureDataBox525";
  };
}
export const ServiceRegionConfigurationByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    scheduleAvailabilityRequest: Schema.optional(
      Schema.Struct({
        storageLocation: Schema.String,
        skuName: Schema.Literals([
          "DataBox",
          "DataBoxDisk",
          "DataBoxHeavy",
          "DataBoxCustomerDisk",
        ]),
        country: Schema.optional(Schema.String),
        model: Schema.optional(
          Schema.Literals([
            "DataBox",
            "DataBoxDisk",
            "DataBoxHeavy",
            "DataBoxCustomerDisk",
            "AzureDataBox120",
            "AzureDataBox525",
          ]),
        ),
      }),
    ),
    transportAvailabilityRequest: Schema.optional(
      Schema.Struct({
        skuName: Schema.optional(
          Schema.Literals([
            "DataBox",
            "DataBoxDisk",
            "DataBoxHeavy",
            "DataBoxCustomerDisk",
          ]),
        ),
        model: Schema.optional(
          Schema.Literals([
            "DataBox",
            "DataBoxDisk",
            "DataBoxHeavy",
            "DataBoxCustomerDisk",
            "AzureDataBox120",
            "AzureDataBox525",
          ]),
        ),
      }),
    ),
    datacenterAddressRequest: Schema.optional(
      Schema.Struct({
        storageLocation: Schema.String,
        skuName: Schema.Literals([
          "DataBox",
          "DataBoxDisk",
          "DataBoxHeavy",
          "DataBoxCustomerDisk",
        ]),
        model: Schema.optional(
          Schema.Literals([
            "DataBox",
            "DataBoxDisk",
            "DataBoxHeavy",
            "DataBoxCustomerDisk",
            "AzureDataBox120",
            "AzureDataBox525",
          ]),
        ),
      }),
    ),
    deviceCapabilityRequest: Schema.optional(
      Schema.Struct({
        skuName: Schema.optional(
          Schema.Literals([
            "DataBox",
            "DataBoxDisk",
            "DataBoxHeavy",
            "DataBoxCustomerDisk",
          ]),
        ),
        model: Schema.optional(
          Schema.Literals([
            "DataBox",
            "DataBoxDisk",
            "DataBoxHeavy",
            "DataBoxCustomerDisk",
            "AzureDataBox120",
            "AzureDataBox525",
          ]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBox/locations/{location}/regionConfiguration",
      apiVersion: "2025-07-01",
    }),
  ) as unknown as Schema.Codec<ServiceRegionConfigurationByResourceGroupInput>;

// Output Schema
export interface ServiceRegionConfigurationByResourceGroupOutput {
  scheduleAvailabilityResponse?: { availableDates?: string[] };
  transportAvailabilityResponse?: {
    transportAvailabilityDetails?: {
      shipmentType?: "CustomerManaged" | "MicrosoftManaged";
    }[];
  };
  datacenterAddressResponse?: {
    datacenterAddressType:
      | "DatacenterAddressLocation"
      | "DatacenterAddressInstruction";
    supportedCarriersForReturnShipment?: string[];
    dataCenterAzureLocation?: string;
  };
  deviceCapabilityResponse?: {
    deviceCapabilityDetails?: { hardwareEncryption?: "Enabled" | "Disabled" }[];
  };
}
export const ServiceRegionConfigurationByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scheduleAvailabilityResponse: Schema.optional(
      Schema.Struct({
        availableDates: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
    transportAvailabilityResponse: Schema.optional(
      Schema.Struct({
        transportAvailabilityDetails: Schema.optional(
          Schema.Array(
            Schema.Struct({
              shipmentType: Schema.optional(
                Schema.Literals(["CustomerManaged", "MicrosoftManaged"]),
              ),
            }),
          ),
        ),
      }),
    ),
    datacenterAddressResponse: Schema.optional(
      Schema.Struct({
        datacenterAddressType: Schema.Literals([
          "DatacenterAddressLocation",
          "DatacenterAddressInstruction",
        ]),
        supportedCarriersForReturnShipment: Schema.optional(
          Schema.Array(Schema.String),
        ),
        dataCenterAzureLocation: Schema.optional(Schema.String),
      }),
    ),
    deviceCapabilityResponse: Schema.optional(
      Schema.Struct({
        deviceCapabilityDetails: Schema.optional(
          Schema.Array(
            Schema.Struct({
              hardwareEncryption: Schema.optional(
                Schema.Literals(["Enabled", "Disabled"]),
              ),
            }),
          ),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<ServiceRegionConfigurationByResourceGroupOutput>;

// The operation
/**
 * This API provides configuration details specific to given region/location at Resource group level.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param location - The name of Azure region.
 */
export const ServiceRegionConfigurationByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ServiceRegionConfigurationByResourceGroupInput,
    outputSchema: ServiceRegionConfigurationByResourceGroupOutput,
  }));
// Input Schema
export interface ServiceValidateInputsInput {
  subscriptionId: string;
  location: string;
  validationCategory: "JobCreationValidation";
  individualRequestDetails: {
    validationType:
      | "ValidateAddress"
      | "ValidateSubscriptionIsAllowedToCreateJob"
      | "ValidatePreferences"
      | "ValidateCreateOrderLimit"
      | "ValidateSkuAvailability"
      | "ValidateDataTransferDetails";
  }[];
}
export const ServiceValidateInputsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    validationCategory: Schema.Literals(["JobCreationValidation"]),
    individualRequestDetails: Schema.Array(
      Schema.Struct({
        validationType: Schema.Literals([
          "ValidateAddress",
          "ValidateSubscriptionIsAllowedToCreateJob",
          "ValidatePreferences",
          "ValidateCreateOrderLimit",
          "ValidateSkuAvailability",
          "ValidateDataTransferDetails",
        ]),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DataBox/locations/{location}/validateInputs",
      apiVersion: "2025-07-01",
    }),
  ) as unknown as Schema.Codec<ServiceValidateInputsInput>;

// Output Schema
export interface ServiceValidateInputsOutput {
  properties?: {
    status?:
      | "AllValidToProceed"
      | "InputsRevisitRequired"
      | "CertainInputValidationsSkipped";
    individualResponseDetails?: {
      validationType:
        | "ValidateAddress"
        | "ValidateSubscriptionIsAllowedToCreateJob"
        | "ValidatePreferences"
        | "ValidateCreateOrderLimit"
        | "ValidateSkuAvailability"
        | "ValidateDataTransferDetails";
      error?: {
        additionalInfo?: { info?: Record<string, unknown>; type?: string }[];
        code?: string;
        details?: unknown[];
        message?: string;
        target?: string;
      };
    }[];
  };
}
export const ServiceValidateInputsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        status: Schema.optional(
          Schema.Literals([
            "AllValidToProceed",
            "InputsRevisitRequired",
            "CertainInputValidationsSkipped",
          ]),
        ),
        individualResponseDetails: Schema.optional(
          Schema.Array(
            Schema.Struct({
              validationType: Schema.Literals([
                "ValidateAddress",
                "ValidateSubscriptionIsAllowedToCreateJob",
                "ValidatePreferences",
                "ValidateCreateOrderLimit",
                "ValidateSkuAvailability",
                "ValidateDataTransferDetails",
              ]),
              error: Schema.optional(
                Schema.Struct({
                  additionalInfo: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        info: Schema.optional(
                          Schema.Record(Schema.String, Schema.Unknown),
                        ),
                        type: Schema.optional(Schema.String),
                      }),
                    ),
                  ),
                  code: Schema.optional(Schema.String),
                  details: Schema.optional(Schema.Array(Schema.Unknown)),
                  message: Schema.optional(Schema.String),
                  target: Schema.optional(Schema.String),
                }),
              ),
            }),
          ),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<ServiceValidateInputsOutput>;

// The operation
/**
 * This method does all necessary pre-job creation validation under subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param location - The name of Azure region.
 */
export const ServiceValidateInputs = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ServiceValidateInputsInput,
    outputSchema: ServiceValidateInputsOutput,
  }),
);
// Input Schema
export interface ServiceValidateInputsByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  location: string;
  validationCategory: "JobCreationValidation";
  individualRequestDetails: {
    validationType:
      | "ValidateAddress"
      | "ValidateSubscriptionIsAllowedToCreateJob"
      | "ValidatePreferences"
      | "ValidateCreateOrderLimit"
      | "ValidateSkuAvailability"
      | "ValidateDataTransferDetails";
  }[];
}
export const ServiceValidateInputsByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    validationCategory: Schema.Literals(["JobCreationValidation"]),
    individualRequestDetails: Schema.Array(
      Schema.Struct({
        validationType: Schema.Literals([
          "ValidateAddress",
          "ValidateSubscriptionIsAllowedToCreateJob",
          "ValidatePreferences",
          "ValidateCreateOrderLimit",
          "ValidateSkuAvailability",
          "ValidateDataTransferDetails",
        ]),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBox/locations/{location}/validateInputs",
      apiVersion: "2025-07-01",
    }),
  ) as unknown as Schema.Codec<ServiceValidateInputsByResourceGroupInput>;

// Output Schema
export interface ServiceValidateInputsByResourceGroupOutput {
  properties?: {
    status?:
      | "AllValidToProceed"
      | "InputsRevisitRequired"
      | "CertainInputValidationsSkipped";
    individualResponseDetails?: {
      validationType:
        | "ValidateAddress"
        | "ValidateSubscriptionIsAllowedToCreateJob"
        | "ValidatePreferences"
        | "ValidateCreateOrderLimit"
        | "ValidateSkuAvailability"
        | "ValidateDataTransferDetails";
      error?: {
        additionalInfo?: { info?: Record<string, unknown>; type?: string }[];
        code?: string;
        details?: unknown[];
        message?: string;
        target?: string;
      };
    }[];
  };
}
export const ServiceValidateInputsByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        status: Schema.optional(
          Schema.Literals([
            "AllValidToProceed",
            "InputsRevisitRequired",
            "CertainInputValidationsSkipped",
          ]),
        ),
        individualResponseDetails: Schema.optional(
          Schema.Array(
            Schema.Struct({
              validationType: Schema.Literals([
                "ValidateAddress",
                "ValidateSubscriptionIsAllowedToCreateJob",
                "ValidatePreferences",
                "ValidateCreateOrderLimit",
                "ValidateSkuAvailability",
                "ValidateDataTransferDetails",
              ]),
              error: Schema.optional(
                Schema.Struct({
                  additionalInfo: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        info: Schema.optional(
                          Schema.Record(Schema.String, Schema.Unknown),
                        ),
                        type: Schema.optional(Schema.String),
                      }),
                    ),
                  ),
                  code: Schema.optional(Schema.String),
                  details: Schema.optional(Schema.Array(Schema.Unknown)),
                  message: Schema.optional(Schema.String),
                  target: Schema.optional(Schema.String),
                }),
              ),
            }),
          ),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<ServiceValidateInputsByResourceGroupOutput>;

// The operation
/**
 * This method does all necessary pre-job creation validation under resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param location - The name of Azure region.
 */
export const ServiceValidateInputsByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ServiceValidateInputsByResourceGroupInput,
    outputSchema: ServiceValidateInputsByResourceGroupOutput,
  }));
