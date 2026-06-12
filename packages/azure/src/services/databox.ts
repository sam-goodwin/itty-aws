/**
 * Azure Databox API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveOutputString } from "../sensitive.ts";

// Shared schemas
const OperationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  display: Schema.optional(Schema.suspend(() => OperationDisplaySchema)),
  properties: Schema.optional(Schema.suspend(() => OperationPropertiesSchema)),
  origin: Schema.optional(Schema.String),
  isDataAction: Schema.optional(Schema.Boolean),
});
const OperationDisplaySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  provider: Schema.optional(Schema.String),
  resource: Schema.optional(Schema.String),
  operation: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
});
const OperationPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
const JobResourceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const systemDataSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
});
const ScheduleAvailabilityRequestSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    storageLocation: Schema.String,
    skuName: Schema.suspend(() => SkuNameSchema),
    country: Schema.optional(Schema.String),
    model: Schema.optional(Schema.suspend(() => ModelNameSchema)),
  });
const SkuNameSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "DataBox",
  "DataBoxDisk",
  "DataBoxHeavy",
  "DataBoxCustomerDisk",
]);
const ModelNameSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "DataBox",
  "DataBoxDisk",
  "DataBoxHeavy",
  "DataBoxCustomerDisk",
  "AzureDataBox120",
  "AzureDataBox525",
]);
const TransportAvailabilityRequestSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    skuName: Schema.optional(Schema.suspend(() => SkuNameSchema)),
    model: Schema.optional(Schema.suspend(() => ModelNameSchema)),
  });
const DatacenterAddressRequestSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    storageLocation: Schema.String,
    skuName: Schema.suspend(() => SkuNameSchema),
    model: Schema.optional(Schema.suspend(() => ModelNameSchema)),
  });
const DeviceCapabilityRequestSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    skuName: Schema.optional(Schema.suspend(() => SkuNameSchema)),
    model: Schema.optional(Schema.suspend(() => ModelNameSchema)),
  },
);
const ScheduleAvailabilityResponseSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    availableDates: Schema.optional(Schema.Array(Schema.String)),
  });
const TransportAvailabilityResponseSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    transportAvailabilityDetails: Schema.optional(
      Schema.Array(Schema.suspend(() => TransportAvailabilityDetailsSchema)),
    ),
  });
const TransportAvailabilityDetailsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    shipmentType: Schema.optional(
      Schema.suspend(() => TransportShipmentTypesSchema),
    ),
  });
const TransportShipmentTypesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "CustomerManaged",
    "MicrosoftManaged",
  ]);
const DatacenterAddressResponseSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    datacenterAddressType: Schema.suspend(() => DatacenterAddressTypeSchema),
    supportedCarriersForReturnShipment: Schema.optional(
      Schema.Array(Schema.String),
    ),
    dataCenterAzureLocation: Schema.optional(Schema.String),
  });
const DatacenterAddressTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(
  ["DatacenterAddressLocation", "DatacenterAddressInstruction"],
);
const DeviceCapabilityResponseSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deviceCapabilityDetails: Schema.optional(
      Schema.Array(Schema.suspend(() => DeviceCapabilityDetailsSchema)),
    ),
  });
const DeviceCapabilityDetailsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    hardwareEncryption: Schema.optional(
      Schema.suspend(() => HardwareEncryptionSchema),
    ),
  },
);
const HardwareEncryptionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Enabled",
  "Disabled",
]);
const ValidationInputRequestSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  validationType: Schema.suspend(() => ValidationInputDiscriminatorSchema),
});
const ValidationInputDiscriminatorSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "ValidateAddress",
    "ValidateSubscriptionIsAllowedToCreateJob",
    "ValidatePreferences",
    "ValidateCreateOrderLimit",
    "ValidateSkuAvailability",
    "ValidateDataTransferDetails",
  ]);
const ValidationResponsePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(
      Schema.suspend(() => OverallValidationStatusSchema),
    ),
    individualResponseDetails: Schema.optional(
      Schema.Array(Schema.suspend(() => ValidationInputResponseSchema)),
    ),
  });
const OverallValidationStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "AllValidToProceed",
    "InputsRevisitRequired",
    "CertainInputValidationsSkipped",
  ]);
const ValidationInputResponseSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    validationType: Schema.suspend(() => ValidationInputDiscriminatorSchema),
    error: Schema.optional(Schema.suspend(() => CloudErrorSchema)),
  },
);
const CloudErrorSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  additionalInfo: Schema.optional(
    Schema.Array(Schema.suspend(() => AdditionalErrorInfoSchema)),
  ),
  code: Schema.optional(Schema.String),
  details: Schema.optional(Schema.Array(Schema.Unknown)),
  message: Schema.optional(Schema.String),
  target: Schema.optional(Schema.String),
});
const AdditionalErrorInfoSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  info: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  type: Schema.optional(Schema.String),
});
const JobPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  transferType: Schema.suspend(() => TransferTypeSchema),
  isCancellable: Schema.optional(Schema.Boolean),
  isDeletable: Schema.optional(Schema.Boolean),
  isShippingAddressEditable: Schema.optional(Schema.Boolean),
  reverseShippingDetailsUpdate: Schema.optional(
    Schema.suspend(() => ReverseShippingDetailsEditStatusSchema),
  ),
  reverseTransportPreferenceUpdate: Schema.optional(
    Schema.suspend(() => ReverseTransportPreferenceEditStatusSchema),
  ),
  isPrepareToShipEnabled: Schema.optional(Schema.Boolean),
  status: Schema.optional(Schema.suspend(() => StageNameSchema)),
  delayedStage: Schema.optional(Schema.suspend(() => StageNameSchema)),
  startTime: Schema.optional(Schema.String),
  error: Schema.optional(Schema.suspend(() => CloudErrorSchema)),
  details: Schema.optional(Schema.suspend(() => JobDetailsSchema)),
  cancellationReason: Schema.optional(Schema.String),
  deliveryType: Schema.optional(Schema.Literals(["NonScheduled", "Scheduled"])),
  deliveryInfo: Schema.optional(Schema.suspend(() => JobDeliveryInfoSchema)),
  isCancellableWithoutFee: Schema.optional(Schema.Boolean),
  allDevicesLost: Schema.optional(Schema.Boolean),
});
const TransferTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "ImportToAzure",
  "ExportFromAzure",
]);
const ReverseShippingDetailsEditStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Enabled",
    "Disabled",
    "NotSupported",
  ]);
const ReverseTransportPreferenceEditStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Enabled",
    "Disabled",
    "NotSupported",
  ]);
const StageNameSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
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
]);
const JobDetailsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  jobStages: Schema.optional(
    Schema.Array(Schema.suspend(() => JobStagesSchema)),
  ),
  contactDetails: Schema.suspend(() => ContactDetailsSchema),
  shippingAddress: Schema.optional(Schema.suspend(() => ShippingAddressSchema)),
  deliveryPackage: Schema.optional(
    Schema.suspend(() => PackageShippingDetailsSchema),
  ),
  returnPackage: Schema.optional(
    Schema.suspend(() => PackageShippingDetailsSchema),
  ),
  dataImportDetails: Schema.optional(
    Schema.Array(Schema.suspend(() => DataImportDetailsSchema)),
  ),
  dataExportDetails: Schema.optional(
    Schema.Array(Schema.suspend(() => DataExportDetailsSchema)),
  ),
  jobDetailsType: Schema.suspend(() => ClassDiscriminatorSchema),
  preferences: Schema.optional(Schema.suspend(() => PreferencesSchema)),
  reverseShippingDetails: Schema.optional(
    Schema.suspend(() => ReverseShippingDetailsSchema),
  ),
  copyLogDetails: Schema.optional(
    Schema.Array(Schema.suspend(() => CopyLogDetailsSchema)),
  ),
  reverseShipmentLabelSasKey: Schema.optional(Schema.String),
  chainOfCustodySasKey: Schema.optional(Schema.String),
  deviceErasureDetails: Schema.optional(
    Schema.suspend(() => DeviceErasureDetailsSchema),
  ),
  keyEncryptionKey: Schema.optional(
    Schema.suspend(() => KeyEncryptionKeySchema),
  ),
  expectedDataSizeInTeraBytes: Schema.optional(Schema.Number),
  actions: Schema.optional(
    Schema.Array(Schema.suspend(() => CustomerResolutionCodeSchema)),
  ),
  lastMitigationActionOnJob: Schema.optional(
    Schema.suspend(() => LastMitigationActionOnJobSchema),
  ),
  datacenterAddress: Schema.optional(
    Schema.suspend(() => DatacenterAddressResponseSchema),
  ),
  dataCenterCode: Schema.optional(Schema.suspend(() => DataCenterCodeSchema)),
});
const JobStagesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  stageName: Schema.optional(Schema.suspend(() => StageNameSchema)),
  displayName: Schema.optional(Schema.String),
  stageStatus: Schema.optional(Schema.suspend(() => StageStatusSchema)),
  stageTime: Schema.optional(Schema.String),
  jobStageDetails: Schema.optional(Schema.Unknown),
  delayInformation: Schema.optional(
    Schema.Array(Schema.suspend(() => JobDelayDetailsSchema)),
  ),
});
const StageStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
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
]);
const JobDelayDetailsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  status: Schema.optional(Schema.suspend(() => DelayNotificationStatusSchema)),
  errorCode: Schema.optional(Schema.suspend(() => PortalDelayErrorCodeSchema)),
  description: Schema.optional(Schema.String),
  startTime: Schema.optional(Schema.String),
  resolutionTime: Schema.optional(Schema.String),
});
const DelayNotificationStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Active", "Resolved"]);
const PortalDelayErrorCodeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "InternalIssueDelay",
  "ActiveOrderLimitBreachedDelay",
  "HighDemandDelay",
  "LargeNumberOfFilesDelay",
]);
const ContactDetailsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  contactName: Schema.String,
  phone: Schema.String,
  phoneExtension: Schema.optional(Schema.String),
  mobile: Schema.optional(Schema.String),
  emailList: Schema.Array(Schema.String),
  notificationPreference: Schema.optional(
    Schema.Array(Schema.suspend(() => NotificationPreferenceSchema)),
  ),
});
const NotificationPreferenceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  stageName: Schema.suspend(() => NotificationStageNameSchema),
  sendNotification: Schema.Boolean,
});
const NotificationStageNameSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(
  [
    "DevicePrepared",
    "Dispatched",
    "Delivered",
    "PickedUp",
    "AtAzureDC",
    "DataCopy",
    "Created",
    "ShippedToCustomer",
  ],
);
const ShippingAddressSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
});
const PackageShippingDetailsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  trackingUrl: Schema.optional(Schema.String),
  carrierName: Schema.optional(Schema.String),
  trackingId: Schema.optional(Schema.String),
});
const DataImportDetailsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  accountDetails: Schema.suspend(() => DataAccountDetailsSchema),
  logCollectionLevel: Schema.optional(Schema.Literals(["Error", "Verbose"])),
});
const DataAccountDetailsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  dataAccountType: Schema.Literals(["StorageAccount", "ManagedDisk"]),
  sharePassword: Schema.optional(SensitiveOutputString),
});
const DataExportDetailsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  transferConfiguration: Schema.suspend(() => TransferConfigurationSchema),
  logCollectionLevel: Schema.optional(Schema.Literals(["Error", "Verbose"])),
  accountDetails: Schema.suspend(() => DataAccountDetailsSchema),
});
const TransferConfigurationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  transferConfigurationType: Schema.suspend(
    () => TransferConfigurationTypeSchema,
  ),
  transferFilterDetails: Schema.optional(
    Schema.suspend(() => TransferConfigurationTransferFilterDetailsSchema),
  ),
  transferAllDetails: Schema.optional(
    Schema.suspend(() => TransferConfigurationTransferAllDetailsSchema),
  ),
});
const TransferConfigurationTypeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "TransferAll",
    "TransferUsingFilter",
  ]);
const TransferConfigurationTransferFilterDetailsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    include: Schema.optional(Schema.suspend(() => TransferFilterDetailsSchema)),
  });
const TransferFilterDetailsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  dataAccountType: Schema.Literals(["StorageAccount", "ManagedDisk"]),
  blobFilterDetails: Schema.optional(
    Schema.suspend(() => BlobFilterDetailsSchema),
  ),
  azureFileFilterDetails: Schema.optional(
    Schema.suspend(() => AzureFileFilterDetailsSchema),
  ),
  filterFileDetails: Schema.optional(
    Schema.Array(Schema.suspend(() => FilterFileDetailsSchema)),
  ),
});
const BlobFilterDetailsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  blobPrefixList: Schema.optional(Schema.Array(Schema.String)),
  blobPathList: Schema.optional(Schema.Array(Schema.String)),
  containerList: Schema.optional(Schema.Array(Schema.String)),
});
const AzureFileFilterDetailsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  filePrefixList: Schema.optional(Schema.Array(Schema.String)),
  filePathList: Schema.optional(Schema.Array(Schema.String)),
  fileShareList: Schema.optional(Schema.Array(Schema.String)),
});
const FilterFileDetailsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  filterFileType: Schema.suspend(() => FilterFileTypeSchema),
  filterFilePath: Schema.String,
});
const FilterFileTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "AzureBlob",
  "AzureFile",
]);
const TransferConfigurationTransferAllDetailsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    include: Schema.optional(Schema.suspend(() => TransferAllDetailsSchema)),
  });
const TransferAllDetailsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  dataAccountType: Schema.Literals(["StorageAccount", "ManagedDisk"]),
  transferAllBlobs: Schema.optional(Schema.Boolean),
  transferAllFiles: Schema.optional(Schema.Boolean),
});
const ClassDiscriminatorSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "DataBox",
  "DataBoxDisk",
  "DataBoxHeavy",
  "DataBoxCustomerDisk",
]);
const PreferencesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  preferredDataCenterRegion: Schema.optional(Schema.Array(Schema.String)),
  transportPreferences: Schema.optional(
    Schema.suspend(() => TransportPreferencesSchema),
  ),
  reverseTransportPreferences: Schema.optional(
    Schema.suspend(() => TransportPreferencesSchema),
  ),
  encryptionPreferences: Schema.optional(
    Schema.suspend(() => EncryptionPreferencesSchema),
  ),
  storageAccountAccessTierPreferences: Schema.optional(
    Schema.Array(Schema.Literals(["Archive"])),
  ),
});
const TransportPreferencesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  preferredShipmentType: Schema.suspend(() => TransportShipmentTypesSchema),
  isUpdated: Schema.optional(Schema.Boolean),
});
const EncryptionPreferencesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  doubleEncryption: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
  hardwareEncryption: Schema.optional(
    Schema.suspend(() => HardwareEncryptionSchema),
  ),
});
const ReverseShippingDetailsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  contactDetails: Schema.optional(Schema.suspend(() => ContactInfoSchema)),
  shippingAddress: Schema.optional(Schema.suspend(() => ShippingAddressSchema)),
  isUpdated: Schema.optional(Schema.Boolean),
});
const ContactInfoSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  contactName: Schema.String,
  phone: Schema.String,
  phoneExtension: Schema.optional(Schema.String),
  mobile: Schema.optional(Schema.String),
});
const CopyLogDetailsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  copyLogDetailsType: Schema.suspend(() => ClassDiscriminatorSchema),
});
const DeviceErasureDetailsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  deviceErasureStatus: Schema.optional(Schema.suspend(() => StageStatusSchema)),
  erasureOrDestructionCertificateSasKey: Schema.optional(Schema.String),
  secureErasureCertificateSasKey: Schema.optional(Schema.String),
});
const KeyEncryptionKeySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kekType: Schema.Literals(["MicrosoftManaged", "CustomerManaged"]),
  identityProperties: Schema.optional(
    Schema.suspend(() => IdentityPropertiesSchema),
  ),
  kekUrl: Schema.optional(Schema.String),
  kekVaultResourceID: Schema.optional(Schema.String),
});
const IdentityPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.optional(Schema.String),
  userAssigned: Schema.optional(
    Schema.suspend(() => UserAssignedPropertiesSchema),
  ),
});
const UserAssignedPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceId: Schema.optional(Schema.String),
});
const CustomerResolutionCodeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "None",
    "MoveToCleanUpDevice",
    "Resume",
    "Restart",
    "ReachOutToOperation",
  ]);
const LastMitigationActionOnJobSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    actionDateTimeInUtc: Schema.optional(Schema.String),
    isPerformedByCustomer: Schema.optional(Schema.Boolean),
    customerResolution: Schema.optional(
      Schema.suspend(() => CustomerResolutionCodeSchema),
    ),
  });
const DataCenterCodeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
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
]);
const JobDeliveryInfoSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  scheduledDateTime: Schema.optional(Schema.String),
});
const SkuSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.suspend(() => SkuNameSchema),
  displayName: Schema.optional(Schema.String),
  family: Schema.optional(Schema.String),
  model: Schema.optional(Schema.suspend(() => ModelNameSchema)),
});
const ResourceIdentitySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
});
const UpdateJobPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  details: Schema.optional(Schema.suspend(() => UpdateJobDetailsSchema)),
});
const UpdateJobDetailsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  contactDetails: Schema.optional(Schema.suspend(() => ContactDetailsSchema)),
  shippingAddress: Schema.optional(Schema.suspend(() => ShippingAddressSchema)),
  reverseShippingDetails: Schema.optional(
    Schema.suspend(() => ReverseShippingDetailsSchema),
  ),
  preferences: Schema.optional(Schema.suspend(() => PreferencesSchema)),
  keyEncryptionKey: Schema.optional(
    Schema.suspend(() => KeyEncryptionKeySchema),
  ),
  returnToCustomerPackageDetails: Schema.optional(
    Schema.suspend(() => PackageCarrierDetailsSchema),
  ),
});
const PackageCarrierDetailsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  carrierAccountNumber: Schema.optional(Schema.String),
  carrierName: Schema.optional(Schema.String),
  trackingId: Schema.optional(Schema.String),
});
const UnencryptedCredentialsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  jobName: Schema.optional(Schema.String),
  jobSecrets: Schema.optional(Schema.suspend(() => JobSecretsSchema)),
});
const JobSecretsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  jobSecretsType: Schema.suspend(() => ClassDiscriminatorSchema),
  dcAccessSecurityCode: Schema.optional(
    Schema.suspend(() => DcAccessSecurityCodeSchema),
  ),
  error: Schema.optional(Schema.suspend(() => CloudErrorSchema)),
});
const DcAccessSecurityCodeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  reverseDCAccessCode: Schema.optional(Schema.String),
  forwardDCAccessCode: Schema.optional(Schema.String),
});
const PackageCarrierInfoSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  carrierName: Schema.optional(Schema.String),
  trackingId: Schema.optional(Schema.String),
});
const SkuInformationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  sku: Schema.optional(Schema.suspend(() => SkuSchema)),
  enabled: Schema.optional(Schema.Boolean),
  properties: Schema.optional(Schema.suspend(() => SkuPropertiesSchema)),
});
const SkuPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  dataLocationToServiceLocationMap: Schema.optional(
    Schema.Array(Schema.suspend(() => DataLocationToServiceLocationMapSchema)),
  ),
  capacity: Schema.optional(Schema.suspend(() => SkuCapacitySchema)),
  costs: Schema.optional(Schema.Array(Schema.suspend(() => SkuCostSchema))),
  apiVersions: Schema.optional(Schema.Array(Schema.String)),
  disabledReason: Schema.optional(
    Schema.suspend(() => SkuDisabledReasonSchema),
  ),
  disabledReasonMessage: Schema.optional(Schema.String),
  requiredFeature: Schema.optional(Schema.String),
  countriesWithinCommerceBoundary: Schema.optional(Schema.Array(Schema.String)),
});
const DataLocationToServiceLocationMapSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataLocation: Schema.optional(Schema.String),
    serviceLocation: Schema.optional(Schema.String),
  });
const SkuCapacitySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  usable: Schema.optional(Schema.String),
  maximum: Schema.optional(Schema.String),
  individualSkuUsable: Schema.optional(Schema.String),
});
const SkuCostSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  meterId: Schema.optional(Schema.String),
  meterType: Schema.optional(Schema.String),
  multiplier: Schema.optional(Schema.Number),
});
const SkuDisabledReasonSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "None",
  "Country",
  "Region",
  "Feature",
  "OfferType",
  "NoSubscriptionInfo",
]);

// Input Schema
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
  );
export type JobsBookShipmentPickUpInput =
  typeof JobsBookShipmentPickUpInput.Type;

// Output Schema
export const JobsBookShipmentPickUpOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    confirmationNumber: Schema.optional(Schema.String),
    readyByTime: Schema.optional(Schema.String),
  });
export type JobsBookShipmentPickUpOutput =
  typeof JobsBookShipmentPickUpOutput.Type;

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
);
export type JobsCancelInput = typeof JobsCancelInput.Type;

// Output Schema
export const JobsCancelOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type JobsCancelOutput = typeof JobsCancelOutput.Type;

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
export const JobsCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  jobName: Schema.String.pipe(T.PathParam()),
  properties: Schema.suspend(() => JobPropertiesSchema),
  sku: Schema.suspend(() => SkuSchema),
  identity: Schema.optional(Schema.suspend(() => ResourceIdentitySchema)),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.String,
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBox/jobs/{jobName}",
    apiVersion: "2025-07-01",
    longRunning: { finalStateVia: "location" },
  }),
);
export type JobsCreateInput = typeof JobsCreateInput.Type;

// Output Schema
export const JobsCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.suspend(() => JobPropertiesSchema),
  sku: Schema.suspend(() => SkuSchema),
  identity: Schema.optional(Schema.suspend(() => ResourceIdentitySchema)),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.String,
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type JobsCreateOutput = typeof JobsCreateOutput.Type;

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
export const JobsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  jobName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBox/jobs/{jobName}",
    apiVersion: "2025-07-01",
    longRunning: { finalStateVia: "location" },
  }),
);
export type JobsDeleteInput = typeof JobsDeleteInput.Type;

// Output Schema
export const JobsDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type JobsDeleteOutput = typeof JobsDeleteOutput.Type;

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
);
export type JobsGetInput = typeof JobsGetInput.Type;

// Output Schema
export const JobsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.suspend(() => JobPropertiesSchema),
  sku: Schema.suspend(() => SkuSchema),
  identity: Schema.optional(Schema.suspend(() => ResourceIdentitySchema)),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.String,
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type JobsGetOutput = typeof JobsGetOutput.Type;

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
export const JobsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  $skipToken: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.DataBox/jobs",
    apiVersion: "2025-07-01",
  }),
);
export type JobsListInput = typeof JobsListInput.Type;

// Output Schema
export const JobsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.Array(Schema.suspend(() => JobResourceSchema)),
  nextLink: Schema.optional(Schema.String),
});
export type JobsListOutput = typeof JobsListOutput.Type;

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
  );
export type JobsListByResourceGroupInput =
  typeof JobsListByResourceGroupInput.Type;

// Output Schema
export const JobsListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => JobResourceSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type JobsListByResourceGroupOutput =
  typeof JobsListByResourceGroupOutput.Type;

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
  );
export type JobsListCredentialsInput = typeof JobsListCredentialsInput.Type;

// Output Schema
export const JobsListCredentialsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => UnencryptedCredentialsSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type JobsListCredentialsOutput = typeof JobsListCredentialsOutput.Type;

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
export const JobsMarkDevicesShippedInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    jobName: Schema.String.pipe(T.PathParam()),
    deliverToDcPackageDetails: Schema.suspend(() => PackageCarrierInfoSchema),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBox/jobs/{jobName}/markDevicesShipped",
      apiVersion: "2025-07-01",
    }),
  );
export type JobsMarkDevicesShippedInput =
  typeof JobsMarkDevicesShippedInput.Type;

// Output Schema
export const JobsMarkDevicesShippedOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type JobsMarkDevicesShippedOutput =
  typeof JobsMarkDevicesShippedOutput.Type;

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
export const JobsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  jobName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(Schema.suspend(() => UpdateJobPropertiesSchema)),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  identity: Schema.optional(Schema.suspend(() => ResourceIdentitySchema)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBox/jobs/{jobName}",
    apiVersion: "2025-07-01",
    longRunning: { finalStateVia: "location" },
  }),
);
export type JobsUpdateInput = typeof JobsUpdateInput.Type;

// Output Schema
export const JobsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.suspend(() => JobPropertiesSchema),
  sku: Schema.suspend(() => SkuSchema),
  identity: Schema.optional(Schema.suspend(() => ResourceIdentitySchema)),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.String,
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type JobsUpdateOutput = typeof JobsUpdateOutput.Type;

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
export const MitigateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  jobName: Schema.String.pipe(T.PathParam()),
  customerResolutionCode: Schema.optional(
    Schema.suspend(() => CustomerResolutionCodeSchema),
  ),
  serialNumberCustomerResolutionMap: Schema.optional(
    Schema.Record(
      Schema.String,
      Schema.suspend(() => CustomerResolutionCodeSchema),
    ),
  ),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBox/jobs/{jobName}/mitigate",
    apiVersion: "2025-07-01",
  }),
);
export type MitigateInput = typeof MitigateInput.Type;

// Output Schema
export const MitigateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type MitigateOutput = typeof MitigateOutput.Type;

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
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.DataBox/operations",
    apiVersion: "2025-07-01",
  }),
);
export type OperationsListInput = typeof OperationsListInput.Type;

// Output Schema
export const OperationsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(Schema.Array(Schema.suspend(() => OperationSchema))),
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
export const ServiceListAvailableSkusByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    transferType: Schema.suspend(() => TransferTypeSchema),
    country: Schema.String,
    skuNames: Schema.optional(
      Schema.Array(Schema.suspend(() => SkuNameSchema)),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBox/locations/{location}/availableSkus",
      apiVersion: "2025-07-01",
    }),
  );
export type ServiceListAvailableSkusByResourceGroupInput =
  typeof ServiceListAvailableSkusByResourceGroupInput.Type;

// Output Schema
export const ServiceListAvailableSkusByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => SkuInformationSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type ServiceListAvailableSkusByResourceGroupOutput =
  typeof ServiceListAvailableSkusByResourceGroupOutput.Type;

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
export const ServiceRegionConfigurationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    scheduleAvailabilityRequest: Schema.optional(
      Schema.suspend(() => ScheduleAvailabilityRequestSchema),
    ),
    transportAvailabilityRequest: Schema.optional(
      Schema.suspend(() => TransportAvailabilityRequestSchema),
    ),
    datacenterAddressRequest: Schema.optional(
      Schema.suspend(() => DatacenterAddressRequestSchema),
    ),
    deviceCapabilityRequest: Schema.optional(
      Schema.suspend(() => DeviceCapabilityRequestSchema),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DataBox/locations/{location}/regionConfiguration",
      apiVersion: "2025-07-01",
    }),
  );
export type ServiceRegionConfigurationInput =
  typeof ServiceRegionConfigurationInput.Type;

// Output Schema
export const ServiceRegionConfigurationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scheduleAvailabilityResponse: Schema.optional(
      Schema.suspend(() => ScheduleAvailabilityResponseSchema),
    ),
    transportAvailabilityResponse: Schema.optional(
      Schema.suspend(() => TransportAvailabilityResponseSchema),
    ),
    datacenterAddressResponse: Schema.optional(
      Schema.suspend(() => DatacenterAddressResponseSchema),
    ),
    deviceCapabilityResponse: Schema.optional(
      Schema.suspend(() => DeviceCapabilityResponseSchema),
    ),
  });
export type ServiceRegionConfigurationOutput =
  typeof ServiceRegionConfigurationOutput.Type;

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
export const ServiceRegionConfigurationByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    scheduleAvailabilityRequest: Schema.optional(
      Schema.suspend(() => ScheduleAvailabilityRequestSchema),
    ),
    transportAvailabilityRequest: Schema.optional(
      Schema.suspend(() => TransportAvailabilityRequestSchema),
    ),
    datacenterAddressRequest: Schema.optional(
      Schema.suspend(() => DatacenterAddressRequestSchema),
    ),
    deviceCapabilityRequest: Schema.optional(
      Schema.suspend(() => DeviceCapabilityRequestSchema),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBox/locations/{location}/regionConfiguration",
      apiVersion: "2025-07-01",
    }),
  );
export type ServiceRegionConfigurationByResourceGroupInput =
  typeof ServiceRegionConfigurationByResourceGroupInput.Type;

// Output Schema
export const ServiceRegionConfigurationByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scheduleAvailabilityResponse: Schema.optional(
      Schema.suspend(() => ScheduleAvailabilityResponseSchema),
    ),
    transportAvailabilityResponse: Schema.optional(
      Schema.suspend(() => TransportAvailabilityResponseSchema),
    ),
    datacenterAddressResponse: Schema.optional(
      Schema.suspend(() => DatacenterAddressResponseSchema),
    ),
    deviceCapabilityResponse: Schema.optional(
      Schema.suspend(() => DeviceCapabilityResponseSchema),
    ),
  });
export type ServiceRegionConfigurationByResourceGroupOutput =
  typeof ServiceRegionConfigurationByResourceGroupOutput.Type;

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
export const ServiceValidateInputsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    validationCategory: Schema.Literals(["JobCreationValidation"]),
    individualRequestDetails: Schema.Array(
      Schema.suspend(() => ValidationInputRequestSchema),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.DataBox/locations/{location}/validateInputs",
      apiVersion: "2025-07-01",
    }),
  );
export type ServiceValidateInputsInput = typeof ServiceValidateInputsInput.Type;

// Output Schema
export const ServiceValidateInputsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => ValidationResponsePropertiesSchema),
    ),
  });
export type ServiceValidateInputsOutput =
  typeof ServiceValidateInputsOutput.Type;

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
export const ServiceValidateInputsByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    validationCategory: Schema.Literals(["JobCreationValidation"]),
    individualRequestDetails: Schema.Array(
      Schema.suspend(() => ValidationInputRequestSchema),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBox/locations/{location}/validateInputs",
      apiVersion: "2025-07-01",
    }),
  );
export type ServiceValidateInputsByResourceGroupInput =
  typeof ServiceValidateInputsByResourceGroupInput.Type;

// Output Schema
export const ServiceValidateInputsByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => ValidationResponsePropertiesSchema),
    ),
  });
export type ServiceValidateInputsByResourceGroupOutput =
  typeof ServiceValidateInputsByResourceGroupOutput.Type;

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
