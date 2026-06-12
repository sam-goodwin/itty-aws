/**
 * Azure Migrate API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Shared schemas
const OperationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  origin: Schema.optional(Schema.Literals(["user", "system", "user,system"])),
  actionType: Schema.optional(Schema.Literals(["Internal"])),
});
const AssessmentProjectSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
const ProjectPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  provisioningState: Schema.optional(
    Schema.suspend(() => ProvisioningStateSchema),
  ),
});
const ProvisioningStateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Succeeded",
  "Failed",
  "Canceled",
  "Provisioning",
  "Updating",
  "Deleting",
  "Accepted",
]);
const AssessmentProjectUpdatePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    assessmentSolutionId: Schema.optional(Schema.String),
    projectStatus: Schema.optional(Schema.suspend(() => ProjectStatusSchema)),
    customerWorkspaceId: Schema.optional(Schema.String),
    customerWorkspaceLocation: Schema.optional(Schema.String),
    publicNetworkAccess: Schema.optional(Schema.String),
    customerStorageAccountArmId: Schema.optional(Schema.String),
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
  });
const ProjectStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Active",
  "Inactive",
]);
const AKSAssessmentOptionsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const AKSAssessmentOptionsPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    edges: Schema.Record(
      Schema.String,
      Schema.suspend(() => RecordOfStringArraySchema),
    ),
  });
const RecordOfStringArraySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Record(
  Schema.String,
  Schema.Array(Schema.String),
);
const AKSAssessmentSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const AKSAssessmentPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStatusSchema),
    ),
  },
);
const ProvisioningStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Unknown",
  "Succeeded",
  "Failed",
  "Canceled",
  "InProgress",
]);
const AssessedWebApplicationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const AssessedWebApplicationPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    discoveryArmId: Schema.String,
    displayName: Schema.String,
    webServerArmId: Schema.String,
    webServerDisplayName: Schema.String,
    machineArmId: Schema.String,
    machineDisplayName: Schema.String,
    webAppType: Schema.suspend(() => WebAppTypeSchema),
  });
const WebAppTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Unknown",
  "IIS",
  "Tomcat",
]);
const AKSClusterSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const AKSClusterPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String,
  nodePools: Schema.Array(Schema.suspend(() => NodePoolSchema)),
  region: Schema.String,
  userNodePoolCount: Schema.Number,
  userNodeCount: Schema.Number,
  systemNodePoolCount: Schema.Number,
  systemNodeCount: Schema.Number,
  podCount: Schema.Number,
  monthlyCost: Schema.Number,
});
const NodePoolSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
  name: Schema.String,
  clusterName: Schema.String,
  mode: Schema.suspend(() => NodePoolModeSchema),
  osType: Schema.suspend(() => OSTypeSchema),
  armSkuName: Schema.String,
  nodeCount: Schema.Number,
  podCount: Schema.Number,
  monthlyCost: Schema.Number,
  podApproxMonthlyCost: Schema.Number,
});
const NodePoolModeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "User",
  "System",
]);
const OSTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Linux",
  "Windows",
]);
const AKSCostDetailSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const AKSSummarySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const AKSSummaryPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  assessmentName: Schema.String,
  summaryName: Schema.String,
  suitabilityPerTarget: Schema.Record(
    Schema.String,
    Schema.suspend(() => RecordOfIntSchema),
  ),
  monthlyComputeCost: Schema.Number,
  monthlyStorageCost: Schema.Number,
  confidenceScore: Schema.Number,
});
const RecordOfIntSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Record(
  Schema.String,
  Schema.Number,
);
const AssessmentOptionsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const AssessmentOptionsPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vmFamilies: Schema.optional(
      Schema.Array(Schema.suspend(() => VmFamilyOptionsSchema)),
    ),
    reservedInstanceVmFamilies: Schema.optional(Schema.Array(Schema.String)),
    reservedInstanceSupportedLocations: Schema.optional(
      Schema.Array(Schema.String),
    ),
    reservedInstanceSupportedCurrencies: Schema.optional(
      Schema.Array(Schema.String),
    ),
    reservedInstanceSupportedOffers: Schema.optional(
      Schema.Array(Schema.String),
    ),
    ultraDiskVmFamilies: Schema.optional(
      Schema.Array(Schema.suspend(() => UltraDiskAssessmentOptionsSchema)),
    ),
    premiumDiskVmFamilies: Schema.optional(Schema.Array(Schema.String)),
    savingsPlanVmFamilies: Schema.optional(Schema.Array(Schema.String)),
    savingsPlanSupportedLocations: Schema.optional(Schema.Array(Schema.String)),
    premiumV2DiskSupportedLocations: Schema.optional(
      Schema.Array(Schema.suspend(() => AzureLocationSchema)),
    ),
  });
const VmFamilyOptionsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  familyName: Schema.optional(Schema.String),
  targetLocations: Schema.optional(Schema.Array(Schema.String)),
  category: Schema.optional(Schema.Array(Schema.String)),
});
const UltraDiskAssessmentOptionsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    familyName: Schema.optional(Schema.String),
    targetLocations: Schema.optional(Schema.Array(Schema.String)),
  });
const AzureLocationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Unknown",
  "EastAsia",
  "SoutheastAsia",
  "AustraliaEast",
  "AustraliaSoutheast",
  "BrazilSouth",
  "CanadaCentral",
  "CanadaEast",
  "WestEurope",
  "NorthEurope",
  "CentralIndia",
  "SouthIndia",
  "WestIndia",
  "JapanEast",
  "JapanWest",
  "KoreaCentral",
  "KoreaSouth",
  "UkWest",
  "UkSouth",
  "NorthCentralUs",
  "EastUs",
  "WestUs2",
  "SouthCentralUs",
  "CentralUs",
  "EastUs2",
  "WestUs",
  "WestCentralUs",
  "GermanyCentral",
  "GermanyNortheast",
  "ChinaNorth",
  "ChinaEast",
  "USGovArizona",
  "USGovTexas",
  "USGovIowa",
  "USGovVirginia",
  "USDoDCentral",
  "USDoDEast",
  "FranceCentral",
  "AustraliaCentral",
  "SouthAfricaNorth",
  "FranceSouth",
  "AustraliaCentral2",
  "SouthAfricaWest",
  "GermanyNorth",
  "GermanyWestCentral",
  "NorwayEast",
  "NorwayWest",
  "ChinaEast2",
  "ChinaNorth2",
  "SwitzerlandNorth",
  "SwitzerlandWest",
  "UAENorth",
  "UAECentral",
  "UsNatEast",
  "UsNatWest",
  "UsSecEast",
  "UsSecCentral",
  "UsSecWest",
  "SwedenCentral",
  "QatarCentral",
]);
const AvsAssessmentOptionsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const AvsAssessmentOptionsPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    avsNodes: Schema.optional(
      Schema.Array(Schema.suspend(() => AvsSkuOptionsSchema)),
    ),
    avsExternalStorageTypes: Schema.optional(
      Schema.Array(Schema.suspend(() => AvsExternalStorageOptionsSchema)),
    ),
    failuresToTolerateAndRaidLevelValues: Schema.optional(
      Schema.Array(Schema.suspend(() => FttAndRaidLevelSchema)),
    ),
    reservedInstanceAvsNodes: Schema.optional(
      Schema.Array(Schema.suspend(() => AzureAvsNodeTypeSchema)),
    ),
    reservedInstanceSupportedLocations: Schema.optional(
      Schema.Array(Schema.suspend(() => AzureLocationSchema)),
    ),
    reservedInstanceSupportedCurrencies: Schema.optional(
      Schema.Array(Schema.suspend(() => AzureCurrencySchema)),
    ),
    reservedInstanceSupportedOffers: Schema.optional(
      Schema.Array(Schema.suspend(() => AzureOfferCodeSchema)),
    ),
  });
const AvsSkuOptionsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nodeType: Schema.optional(Schema.suspend(() => AzureAvsNodeTypeSchema)),
  targetLocations: Schema.optional(
    Schema.Array(Schema.suspend(() => AzureLocationSchema)),
  ),
});
const AzureAvsNodeTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Unknown",
  "AV36",
  "AV36P",
  "AV52",
  "AV64",
]);
const AvsExternalStorageOptionsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    storageType: Schema.optional(
      Schema.suspend(() => ExternalStorageTypeSchema),
    ),
    targetLocations: Schema.optional(
      Schema.Array(Schema.suspend(() => AzureLocationSchema)),
    ),
  });
const ExternalStorageTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Unknown",
  "None",
  "AnfStandard",
  "AnfPremium",
  "AnfUltra",
]);
const FttAndRaidLevelSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Unknown",
  "Ftt1Raid1",
  "Ftt1Raid5",
  "Ftt2Raid1",
  "Ftt2Raid6",
  "Ftt3Raid1",
]);
const AzureCurrencySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Unknown",
  "USD",
  "DKK",
  "CAD",
  "IDR",
  "JPY",
  "KRW",
  "NZD",
  "NOK",
  "RUB",
  "SAR",
  "ZAR",
  "SEK",
  "TRY",
  "GBP",
  "MXN",
  "MYR",
  "INR",
  "HKD",
  "BRL",
  "TWD",
  "EUR",
  "CHF",
  "ARS",
  "AUD",
  "CNY",
]);
const AzureOfferCodeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Unknown",
  "MSAZR0003P",
  "MSAZR0044P",
  "MSAZR0059P",
  "MSAZR0060P",
  "MSAZR0062P",
  "MSAZR0063P",
  "MSAZR0064P",
  "MSAZR0029P",
  "MSAZR0022P",
  "MSAZR0023P",
  "MSAZR0148P",
  "MSAZR0025P",
  "MSAZR0036P",
  "MSAZR0120P",
  "MSAZR0121P",
  "MSAZR0122P",
  "MSAZR0123P",
  "MSAZR0124P",
  "MSAZR0125P",
  "MSAZR0126P",
  "MSAZR0127P",
  "MSAZR0128P",
  "MSAZR0129P",
  "MSAZR0130P",
  "MSAZR0111P",
  "MSAZR0144P",
  "MSAZR0149P",
  "MSMCAZR0044P",
  "MSMCAZR0059P",
  "MSMCAZR0060P",
  "MSMCAZR0063P",
  "MSMCAZR0120P",
  "MSMCAZR0121P",
  "MSMCAZR0125P",
  "MSMCAZR0128P",
  "MSAZRDE0003P",
  "MSAZRDE0044P",
  "MSAZRUSGOV0003P",
  "EA",
  "MSAZR0243P",
  "SavingsPlan1Year",
  "SavingsPlan3Year",
]);
const GroupSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const GroupPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  provisioningState: Schema.optional(
    Schema.suspend(() => ProvisioningStateSchema),
  ),
});
const AssessmentSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const MachineAssessmentPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
  });
const AssessedMachineSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const AssessedMachinePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errors: Schema.optional(Schema.Array(Schema.suspend(() => ErrorSchema))),
    disks: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.suspend(() => AssessedDiskSchema),
      ),
    ),
    monthlyUltraStorageCost: Schema.optional(Schema.Number),
    hostProcessor: Schema.optional(Schema.suspend(() => ProcessorInfoSchema)),
    costComponents: Schema.optional(
      Schema.Array(Schema.suspend(() => CostComponentSchema)),
    ),
    productSupportStatus: Schema.optional(
      Schema.suspend(() => ProductSupportStatusSchema),
    ),
    monthlyBandwidthCost: Schema.optional(Schema.Number),
    monthlyStorageCost: Schema.optional(Schema.Number),
    monthlyPremiumStorageCost: Schema.optional(Schema.Number),
    monthlyStandardSsdStorageCost: Schema.optional(Schema.Number),
    networkAdapters: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.suspend(() => AssessedNetworkAdapterSchema),
      ),
    ),
    recommendedSize: Schema.optional(Schema.suspend(() => AzureVmSizeSchema)),
    numberOfCoresForRecommendedSize: Schema.optional(Schema.Number),
    megabytesOfMemoryForRecommendedSize: Schema.optional(Schema.Number),
    monthlyComputeCostForRecommendedSize: Schema.optional(Schema.Number),
    suitabilityExplanation: Schema.optional(
      Schema.suspend(() => AzureVmSuitabilityExplanationSchema),
    ),
    suitabilityDetail: Schema.optional(
      Schema.suspend(() => AzureVmSuitabilityDetailSchema),
    ),
    type: Schema.optional(Schema.suspend(() => AssessedMachineTypeSchema)),
    bootType: Schema.optional(Schema.suspend(() => MachineBootTypeSchema)),
    operatingSystemType: Schema.optional(Schema.String),
    operatingSystemName: Schema.optional(Schema.String),
    operatingSystemVersion: Schema.optional(Schema.String),
    operatingSystemArchitecture: Schema.optional(
      Schema.suspend(() => GuestOperatingSystemArchitectureSchema),
    ),
    createdTimestamp: Schema.optional(Schema.String),
    updatedTimestamp: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    datacenterMachineArmId: Schema.optional(Schema.String),
    datacenterManagementServerArmId: Schema.optional(Schema.String),
    datacenterManagementServerName: Schema.optional(Schema.String),
    megabytesOfMemory: Schema.optional(Schema.Number),
    numberOfCores: Schema.optional(Schema.Number),
    confidenceRatingInPercentage: Schema.optional(Schema.Number),
    percentageCoresUtilization: Schema.optional(Schema.Number),
    percentageMemoryUtilization: Schema.optional(Schema.Number),
    suitability: Schema.optional(Schema.suspend(() => CloudSuitabilitySchema)),
  });
const ErrorSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.Number),
  code: Schema.optional(Schema.String),
  runAsAccountId: Schema.optional(Schema.String),
  applianceName: Schema.optional(Schema.String),
  message: Schema.optional(Schema.String),
  summaryMessage: Schema.optional(Schema.String),
  agentScenario: Schema.optional(Schema.String),
  possibleCauses: Schema.optional(Schema.String),
  recommendedAction: Schema.optional(Schema.String),
  severity: Schema.optional(Schema.String),
  messageParameters: Schema.optional(
    Schema.Record(Schema.String, Schema.String),
  ),
  updatedTimeStamp: Schema.optional(Schema.String),
  impactedAssessmentType: Schema.optional(Schema.String),
});
const AssessedDiskSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  suitability: Schema.optional(Schema.suspend(() => CloudSuitabilitySchema)),
  suitabilityExplanation: Schema.optional(
    Schema.suspend(() => AzureDiskSuitabilityExplanationSchema),
  ),
  suitabilityDetail: Schema.optional(
    Schema.suspend(() => AzureDiskSuitabilityDetailSchema),
  ),
  recommendedDiskSize: Schema.optional(
    Schema.suspend(() => AzureDiskSizeSchema),
  ),
  recommendedDiskType: Schema.optional(
    Schema.suspend(() => AzureDiskTypeSchema),
  ),
  gigabytesForRecommendedDiskSize: Schema.optional(Schema.Number),
  recommendDiskThroughputInMbps: Schema.optional(Schema.Number),
  recommendedDiskIops: Schema.optional(Schema.Number),
  monthlyStorageCost: Schema.optional(Schema.Number),
  name: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
  gigabytesProvisioned: Schema.optional(Schema.Number),
  megabytesPerSecondOfRead: Schema.optional(Schema.Number),
  megabytesPerSecondOfWrite: Schema.optional(Schema.Number),
  numberOfReadOperationsPerSecond: Schema.optional(Schema.Number),
  numberOfWriteOperationsPerSecond: Schema.optional(Schema.Number),
});
const CloudSuitabilitySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Unknown",
  "NotSuitable",
  "Suitable",
  "ConditionallySuitable",
  "ReadinessUnknown",
]);
const AzureDiskSuitabilityExplanationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Unknown",
    "NotApplicable",
    "DiskSizeGreaterThanSupported",
    "NoSuitableDiskSizeForIops",
    "NoSuitableDiskSizeForThroughput",
    "NoDiskSizeFoundInSelectedLocation",
    "NoDiskSizeFoundForSelectedRedundancy",
    "InternalErrorOccurredForDiskEvaluation",
    "NoEaPriceFoundForDiskSize",
  ]);
const AzureDiskSuitabilityDetailSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "None",
    "NumberOfReadOperationsPerSecondMissing",
    "NumberOfWriteOperationsPerSecondMissing",
    "MegabytesPerSecondOfReadMissing",
    "MegabytesPerSecondOfWriteMissing",
    "DiskGigabytesConsumedMissing",
    "DiskGigabytesProvisionedMissing",
    "NumberOfReadOperationsPerSecondOutOfRange",
    "NumberOfWriteOperationsPerSecondOutOfRange",
    "MegabytesPerSecondOfReadOutOfRange",
    "MegabytesPerSecondOfWriteOutOfRange",
    "DiskGigabytesConsumedOutOfRange",
    "DiskGigabytesProvisionedOutOfRange",
  ]);
const AzureDiskSizeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Unknown",
  "Standard_S4",
  "Standard_S6",
  "Standard_S10",
  "Standard_S15",
  "Standard_S20",
  "Standard_S30",
  "Standard_S40",
  "Standard_S50",
  "Standard_S60",
  "Standard_S70",
  "Standard_S80",
  "Premium_P4",
  "Premium_P6",
  "Premium_P10",
  "Premium_P15",
  "Premium_P20",
  "Premium_P30",
  "Premium_P40",
  "Premium_P50",
  "Premium_P60",
  "Premium_P70",
  "Premium_P80",
  "StandardSSD_E10",
  "StandardSSD_E15",
  "StandardSSD_E20",
  "StandardSSD_E30",
  "StandardSSD_E40",
  "StandardSSD_E50",
  "StandardSSD_E60",
  "StandardSSD_E70",
  "StandardSSD_E80",
  "StandardSSD_E4",
  "StandardSSD_E6",
  "StandardSSD_E1",
  "StandardSSD_E2",
  "StandardSSD_E3",
  "Premium_P1",
  "Premium_P2",
  "Premium_P3",
  "Ultra",
  "PremiumV2",
]);
const AzureDiskTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Unknown",
  "Standard",
  "StandardSSD",
  "Premium",
  "StandardOrPremium",
  "Ultra",
  "PremiumV2",
]);
const ProcessorInfoSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  numberOfSockets: Schema.optional(Schema.Number),
  numberOfCoresPerSocket: Schema.optional(Schema.Number),
});
const CostComponentSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.suspend(() => CostComponentNameSchema)),
  value: Schema.optional(Schema.Number),
  description: Schema.optional(Schema.String),
});
const CostComponentNameSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Unknown",
  "MonthlyAzureHybridCostSavings",
  "MonthlySecurityCost",
  "MonthlyPremiumV2StorageCost",
  "MonthlyLinuxAzureHybridCostSavings",
  "MonthlyAvsNodeCost",
  "MonthlyAvsExternalStorageCost",
  "MonthlyAvsNetworkCost",
  "MonthlyVcfByolCostDifference",
]);
const ProductSupportStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  currentVersion: Schema.optional(Schema.String),
  servicePackStatus: Schema.optional(Schema.String),
  esuStatus: Schema.optional(Schema.String),
  supportStatus: Schema.optional(Schema.String),
  eta: Schema.optional(Schema.Number),
  currentEsuYear: Schema.optional(Schema.String),
  mainstreamEndDate: Schema.optional(Schema.String),
  extendedSupportEndDate: Schema.optional(Schema.String),
  extendedSecurityUpdateYear1EndDate: Schema.optional(Schema.String),
  extendedSecurityUpdateYear2EndDate: Schema.optional(Schema.String),
  extendedSecurityUpdateYear3EndDate: Schema.optional(Schema.String),
});
const AssessedNetworkAdapterSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  suitability: Schema.optional(Schema.suspend(() => CloudSuitabilitySchema)),
  suitabilityDetail: Schema.optional(
    Schema.suspend(() => AzureNetworkAdapterSuitabilityDetailSchema),
  ),
  suitabilityExplanation: Schema.optional(
    Schema.suspend(() => AzureNetworkAdapterSuitabilityExplanationSchema),
  ),
  monthlyBandwidthCosts: Schema.optional(Schema.Number),
  netGigabytesTransmittedPerMonth: Schema.optional(Schema.Number),
  displayName: Schema.optional(Schema.String),
  macAddress: Schema.optional(Schema.String),
  ipAddresses: Schema.optional(Schema.Array(Schema.String)),
  megabytesPerSecondReceived: Schema.optional(Schema.Number),
  megabytesPerSecondTransmitted: Schema.optional(Schema.Number),
});
const AzureNetworkAdapterSuitabilityDetailSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "None",
    "MegabytesOfDataTransmittedMissing",
    "MegabytesOfDataTransmittedOutOfRange",
    "MegabytesOfDataRecievedMissing",
    "MegabytesOfDataRecievedOutOfRange",
  ]);
const AzureNetworkAdapterSuitabilityExplanationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Unknown",
    "NotApplicable",
    "InternalErrorOccurred",
  ]);
const AzureVmSizeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Unknown",
  "Basic_A0",
  "Basic_A1",
  "Basic_A2",
  "Basic_A3",
  "Basic_A4",
  "Standard_A0",
  "Standard_A1",
  "Standard_A2",
  "Standard_A3",
  "Standard_A4",
  "Standard_A5",
  "Standard_A6",
  "Standard_A7",
  "Standard_A8",
  "Standard_A9",
  "Standard_A10",
  "Standard_A11",
  "Standard_A1_v2",
  "Standard_A2_v2",
  "Standard_A4_v2",
  "Standard_A8_v2",
  "Standard_A2m_v2",
  "Standard_A4m_v2",
  "Standard_A8m_v2",
  "Standard_D1",
  "Standard_D2",
  "Standard_D3",
  "Standard_D4",
  "Standard_D11",
  "Standard_D12",
  "Standard_D13",
  "Standard_D14",
  "Standard_D1_v2",
  "Standard_D2_v2",
  "Standard_D3_v2",
  "Standard_D4_v2",
  "Standard_D5_v2",
  "Standard_D11_v2",
  "Standard_D12_v2",
  "Standard_D13_v2",
  "Standard_D14_v2",
  "Standard_D15_v2",
  "Standard_DS1",
  "Standard_DS2",
  "Standard_DS3",
  "Standard_DS4",
  "Standard_DS11",
  "Standard_DS12",
  "Standard_DS13",
  "Standard_DS14",
  "Standard_DS1_v2",
  "Standard_DS2_v2",
  "Standard_DS3_v2",
  "Standard_DS4_v2",
  "Standard_DS5_v2",
  "Standard_DS11_v2",
  "Standard_DS12_v2",
  "Standard_DS13_v2",
  "Standard_DS14_v2",
  "Standard_DS15_v2",
  "Standard_F1",
  "Standard_F2",
  "Standard_F4",
  "Standard_F8",
  "Standard_F16",
  "Standard_F1s",
  "Standard_F2s",
  "Standard_F4s",
  "Standard_F8s",
  "Standard_F16s",
  "Standard_G1",
  "Standard_G2",
  "Standard_G3",
  "Standard_G4",
  "Standard_G5",
  "Standard_GS1",
  "Standard_GS2",
  "Standard_GS3",
  "Standard_GS4",
  "Standard_GS5",
  "Standard_H8",
  "Standard_H16",
  "Standard_H8m",
  "Standard_H16m",
  "Standard_H16r",
  "Standard_H16mr",
  "Standard_L4s",
  "Standard_L8s",
  "Standard_L16s",
  "Standard_L32s",
  "Standard_D2s_v3",
  "Standard_D4s_v3",
  "Standard_D8s_v3",
  "Standard_D16s_v3",
  "Standard_D32s_v3",
  "Standard_D64s_v3",
  "Standard_D2_v3",
  "Standard_D4_v3",
  "Standard_D8_v3",
  "Standard_D16_v3",
  "Standard_D32_v3",
  "Standard_D64_v3",
  "Standard_F2s_v2",
  "Standard_F4s_v2",
  "Standard_F8s_v2",
  "Standard_F16s_v2",
  "Standard_F32s_v2",
  "Standard_F64s_v2",
  "Standard_F72s_v2",
  "Standard_E2_v3",
  "Standard_E4_v3",
  "Standard_E8_v3",
  "Standard_E16_v3",
  "Standard_E32_v3",
  "Standard_E64_v3",
  "Standard_E2s_v3",
  "Standard_E4s_v3",
  "Standard_E8s_v3",
  "Standard_E16s_v3",
  "Standard_E32s_v3",
  "Standard_E64s_v3",
  "Standard_M64s",
  "Standard_M64ms",
  "Standard_M128s",
  "Standard_M128ms",
  "Standard_DC2s",
  "Standard_DC4s",
  "Standard_E20_v3",
  "Standard_E20s_v3",
  "Standard_E64i_v3",
  "Standard_E64is_v3",
  "Standard_M8ms",
  "Standard_M16ms",
  "Standard_M32ls",
  "Standard_M32ms",
  "Standard_M32ts",
  "Standard_M64",
  "Standard_M64ls",
  "Standard_M64m",
  "Standard_M128",
  "Standard_M128m",
  "Standard_L8s_v2",
  "Standard_L16s_v2",
  "Standard_L32s_v2",
  "Standard_L48s_v2",
  "Standard_L64s_v2",
  "Standard_L80s_v2",
  "Standard_D2_v4",
  "Standard_D4_v4",
  "Standard_D8_v4",
  "Standard_D16_v4",
  "Standard_D32_v4",
  "Standard_D48_v4",
  "Standard_D64_v4",
  "Standard_D2s_v4",
  "Standard_D4s_v4",
  "Standard_D8s_v4",
  "Standard_D16s_v4",
  "Standard_D32s_v4",
  "Standard_D48s_v4",
  "Standard_D64s_v4",
  "Standard_D2d_v4",
  "Standard_D4d_v4",
  "Standard_D8d_v4",
  "Standard_D16d_v4",
  "Standard_D32d_v4",
  "Standard_D48d_v4",
  "Standard_D64d_v4",
  "Standard_D2ds_v4",
  "Standard_D4ds_v4",
  "Standard_D8ds_v4",
  "Standard_D16ds_v4",
  "Standard_D32ds_v4",
  "Standard_D48ds_v4",
  "Standard_D64ds_v4",
  "Standard_E2_v4",
  "Standard_E4_v4",
  "Standard_E8_v4",
  "Standard_E16_v4",
  "Standard_E20_v4",
  "Standard_E32_v4",
  "Standard_E48_v4",
  "Standard_E64_v4",
  "Standard_E2s_v4",
  "Standard_E4s_v4",
  "Standard_E8s_v4",
  "Standard_E16s_v4",
  "Standard_E20s_v4",
  "Standard_E32s_v4",
  "Standard_E48s_v4",
  "Standard_E64s_v4",
  "Standard_E2d_v4",
  "Standard_E4d_v4",
  "Standard_E8d_v4",
  "Standard_E16d_v4",
  "Standard_E20d_v4",
  "Standard_E32d_v4",
  "Standard_E48d_v4",
  "Standard_E64d_v4",
  "Standard_E2ds_v4",
  "Standard_E4ds_v4",
  "Standard_E8ds_v4",
  "Standard_E16ds_v4",
  "Standard_E20ds_v4",
  "Standard_E32ds_v4",
  "Standard_E48ds_v4",
  "Standard_E64ds_v4",
  "Standard_E2as_v4",
  "Standard_E4as_v4",
  "Standard_E8as_v4",
  "Standard_E16as_v4",
  "Standard_E20as_v4",
  "Standard_E32as_v4",
  "Standard_E48as_v4",
  "Standard_E64as_v4",
  "Standard_E96as_v4",
  "Standard_D2as_v4",
  "Standard_D4as_v4",
  "Standard_D8as_v4",
  "Standard_D16as_v4",
  "Standard_D32as_v4",
  "Standard_D48as_v4",
  "Standard_D64as_v4",
  "Standard_D96as_v4",
  "Standard_M208ms_v2",
  "Standard_M208s_v2",
  "Standard_M416ms_v2",
  "Standard_M416s_v2",
  "Standard_F48s_v2",
  "Standard_E48_v3",
  "Standard_E48s_v3",
  "Standard_E80is_v4",
  "Standard_E80ids_v4",
  "Standard_E2a_v4",
  "Standard_E4a_v4",
  "Standard_E8a_v4",
  "Standard_E16a_v4",
  "Standard_E20a_v4",
  "Standard_E32a_v4",
  "Standard_E48a_v4",
  "Standard_E64a_v4",
  "Standard_E96a_v4",
  "Standard_D2a_v4",
  "Standard_D4a_v4",
  "Standard_D8a_v4",
  "Standard_D16a_v4",
  "Standard_D32a_v4",
  "Standard_D48a_v4",
  "Standard_D64a_v4",
  "Standard_D96a_v4",
  "Standard_M32ms_v2",
  "Standard_M64s_v2",
  "Standard_M64ms_v2",
  "Standard_M128s_v2",
  "Standard_M128ms_v2",
  "Standard_M192is_v2",
  "Standard_M192ims_v2",
  "Standard_M32dms_v2",
  "Standard_M64ds_v2",
  "Standard_M64dms_v2",
  "Standard_M128ds_v2",
  "Standard_M128dms_v2",
  "Standard_M192ids_v2",
  "Standard_M192idms_v2",
  "Standard_D2_v5",
  "Standard_D4_v5",
  "Standard_D8_v5",
  "Standard_D16_v5",
  "Standard_D32_v5",
  "Standard_D48_v5",
  "Standard_D64_v5",
  "Standard_D96_v5",
  "Standard_D2s_v5",
  "Standard_D4s_v5",
  "Standard_D8s_v5",
  "Standard_D16s_v5",
  "Standard_D32s_v5",
  "Standard_D48s_v5",
  "Standard_D64s_v5",
  "Standard_D96s_v5",
  "Standard_D2d_v5",
  "Standard_D4d_v5",
  "Standard_D8d_v5",
  "Standard_D16d_v5",
  "Standard_D32d_v5",
  "Standard_D48d_v5",
  "Standard_D64d_v5",
  "Standard_D96d_v5",
  "Standard_D2ds_v5",
  "Standard_D4ds_v5",
  "Standard_D8ds_v5",
  "Standard_D16ds_v5",
  "Standard_D32ds_v5",
  "Standard_D48ds_v5",
  "Standard_D64ds_v5",
  "Standard_D96ds_v5",
  "Standard_D2as_v5",
  "Standard_D4as_v5",
  "Standard_D8as_v5",
  "Standard_D16as_v5",
  "Standard_D32as_v5",
  "Standard_D48as_v5",
  "Standard_D64as_v5",
  "Standard_D96as_v5",
  "Standard_D2ads_v5",
  "Standard_D4ads_v5",
  "Standard_D8ads_v5",
  "Standard_D16ads_v5",
  "Standard_D32ads_v5",
  "Standard_D48ads_v5",
  "Standard_D64ads_v5",
  "Standard_D96ads_v5",
  "Standard_E2_v5",
  "Standard_E4_v5",
  "Standard_E8_v5",
  "Standard_E16_v5",
  "Standard_E20_v5",
  "Standard_E32_v5",
  "Standard_E48_v5",
  "Standard_E64_v5",
  "Standard_E96_v5",
  "Standard_E104i_v5",
  "Standard_E2s_v5",
  "Standard_E4s_v5",
  "Standard_E8s_v5",
  "Standard_E16s_v5",
  "Standard_E20s_v5",
  "Standard_E32s_v5",
  "Standard_E48s_v5",
  "Standard_E64s_v5",
  "Standard_E96s_v5",
  "Standard_E104is_v5",
  "Standard_E2d_v5",
  "Standard_E4d_v5",
  "Standard_E8d_v5",
  "Standard_E16d_v5",
  "Standard_E20d_v5",
  "Standard_E32d_v5",
  "Standard_E48d_v5",
  "Standard_E64d_v5",
  "Standard_E96d_v5",
  "Standard_E104id_v5",
  "Standard_E2ds_v5",
  "Standard_E4ds_v5",
  "Standard_E8ds_v5",
  "Standard_E16ds_v5",
  "Standard_E20ds_v5",
  "Standard_E32ds_v5",
  "Standard_E48ds_v5",
  "Standard_E64ds_v5",
  "Standard_E96ds_v5",
  "Standard_E104ids_v5",
  "Standard_E2as_v5",
  "Standard_E4as_v5",
  "Standard_E8as_v5",
  "Standard_E16as_v5",
  "Standard_E20as_v5",
  "Standard_E32as_v5",
  "Standard_E48as_v5",
  "Standard_E64as_v5",
  "Standard_E96as_v5",
  "Standard_E2ads_v5",
  "Standard_E4ads_v5",
  "Standard_E8ads_v5",
  "Standard_E16ads_v5",
  "Standard_E20ads_v5",
  "Standard_E32ads_v5",
  "Standard_E48ads_v5",
  "Standard_E64ads_v5",
  "Standard_E96ads_v5",
  "Standard_M8_2ms",
  "Standard_M8_4ms",
  "Standard_M16_4ms",
  "Standard_M16_8ms",
  "Standard_M32_8ms",
  "Standard_M32_16ms",
  "Standard_M64_32ms",
  "Standard_M64_16ms",
  "Standard_M128_64ms",
  "Standard_M128_32ms",
  "Standard_E4_2s_v3",
  "Standard_E8_4s_v3",
  "Standard_E8_2s_v3",
  "Standard_E16_8s_v3",
  "Standard_E16_4s_v3",
  "Standard_E32_16s_v3",
  "Standard_E32_8s_v3",
  "Standard_E64_32s_v3",
  "Standard_E64_16s_v3",
  "Standard_E4_2s_v4",
  "Standard_E8_4s_v4",
  "Standard_E8_2s_v4",
  "Standard_E16_8s_v4",
  "Standard_E16_4s_v4",
  "Standard_E32_16s_v4",
  "Standard_E32_8s_v4",
  "Standard_E64_32s_v4",
  "Standard_E64_16s_v4",
  "Standard_E4_2ds_v4",
  "Standard_E8_4ds_v4",
  "Standard_E8_2ds_v4",
  "Standard_E16_8ds_v4",
  "Standard_E16_4ds_v4",
  "Standard_E32_16ds_v4",
  "Standard_E32_8ds_v4",
  "Standard_E64_32ds_v4",
  "Standard_E64_16ds_v4",
  "Standard_E4_2as_v4",
  "Standard_E8_4as_v4",
  "Standard_E8_2as_v4",
  "Standard_E16_8as_v4",
  "Standard_E16_4as_v4",
  "Standard_E32_16as_v4",
  "Standard_E32_8as_v4",
  "Standard_E64_32as_v4",
  "Standard_E64_16as_v4",
  "Standard_E96_48as_v4",
  "Standard_E96_24as_v4",
  "Standard_E4_2ads_v5",
  "Standard_E8_4ads_v5",
  "Standard_E8_2ads_v5",
  "Standard_E16_8ads_v5",
  "Standard_E16_4ads_v5",
  "Standard_E32_16ads_v5",
  "Standard_E32_8ads_v5",
  "Standard_E64_32ads_v5",
  "Standard_E64_16ads_v5",
  "Standard_E96_48ads_v5",
  "Standard_E96_24ads_v5",
  "Standard_E4_2s_v5",
  "Standard_E8_4s_v5",
  "Standard_E8_2s_v5",
  "Standard_E16_8s_v5",
  "Standard_E16_4s_v5",
  "Standard_E32_16s_v5",
  "Standard_E32_8s_v5",
  "Standard_E64_32s_v5",
  "Standard_E64_16s_v5",
  "Standard_E96_48s_v5",
  "Standard_E96_24s_v5",
  "Standard_E4_2ds_v5",
  "Standard_E8_4ds_v5",
  "Standard_E8_2ds_v5",
  "Standard_E16_8ds_v5",
  "Standard_E16_4ds_v5",
  "Standard_E32_16ds_v5",
  "Standard_E32_8ds_v5",
  "Standard_E64_32ds_v5",
  "Standard_E64_16ds_v5",
  "Standard_E96_48ds_v5",
  "Standard_E96_24ds_v5",
  "Standard_E4_2as_v5",
  "Standard_E8_4as_v5",
  "Standard_E8_2as_v5",
  "Standard_E16_8as_v5",
  "Standard_E16_4as_v5",
  "Standard_E32_16as_v5",
  "Standard_E32_8as_v5",
  "Standard_E64_32as_v5",
  "Standard_E64_16as_v5",
  "Standard_E96_48as_v5",
  "Standard_E96_24as_v5",
  "Standard_GS4_8",
  "Standard_GS4_4",
  "Standard_GS5_16",
  "Standard_GS5_8",
  "Standard_DS11_1_v2",
  "Standard_DS12_2_v2",
  "Standard_DS12_1_v2",
  "Standard_DS13_4_v2",
  "Standard_DS13_2_v2",
  "Standard_DS14_8_v2",
  "Standard_DS14_4_v2",
  "Standard_M416_208s_v2",
  "Standard_M416_208ms_v2",
  "Standard_E2bs_v5",
  "Standard_E4bs_v5",
  "Standard_E8bs_v5",
  "Standard_E16bs_v5",
  "Standard_E32bs_v5",
  "Standard_E48bs_v5",
  "Standard_E64bs_v5",
  "Standard_E2bds_v5",
  "Standard_E4bds_v5",
  "Standard_E8bds_v5",
  "Standard_E16bds_v5",
  "Standard_E32bds_v5",
  "Standard_E48bds_v5",
  "Standard_E64bds_v5",
]);
const AzureVmSuitabilityExplanationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Unknown",
    "NotApplicable",
    "GuestOperatingSystemArchitectureNotSupported",
    "GuestOperatingSystemNotSupported",
    "BootTypeNotSupported",
    "MoreDisksThanSupported",
    "NoSuitableVmSizeFound",
    "OneOrMoreDisksNotSuitable",
    "OneOrMoreAdaptersNotSuitable",
    "InternalErrorOccurredDuringComputeEvaluation",
    "InternalErrorOccurredDuringStorageEvaluation",
    "InternalErrorOccurredDuringNetworkEvaluation",
    "NoVmSizeSupportsStoragePerformance",
    "NoVmSizeSupportsNetworkPerformance",
    "NoVmSizeForSelectedPricingTier",
    "NoVmSizeForSelectedAzureLocation",
    "CheckRedHatLinuxVersion",
    "CheckOpenSuseLinuxVersion",
    "CheckWindowsServer2008R2Version",
    "CheckCentOsVersion",
    "CheckDebianLinuxVersion",
    "CheckSuseLinuxVersion",
    "CheckOracleLinuxVersion",
    "CheckUbuntuLinuxVersion",
    "CheckCoreOsLinuxVersion",
    "WindowsServerVersionConditionallySupported",
    "NoGuestOperatingSystemConditionallySupported",
    "WindowsClientVersionsConditionallySupported",
    "BootTypeUnknown",
    "GuestOperatingSystemUnknown",
    "WindowsServerVersionsSupportedWithCaveat",
    "WindowsOSNoLongerUnderMSSupport",
    "EndorsedWithConditionsLinuxDistributions",
    "UnendorsedLinuxDistributions",
    "NoVmSizeForStandardPricingTier",
    "NoVmSizeForBasicPricingTier",
    "NoVmSizeInSelectedFamilyFound",
    "NoEaPriceFoundForVmSize",
    "NoVmSizeFoundForOfferCurrencyReservedInstance",
  ]);
const AzureVmSuitabilityDetailSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "None",
    "RecommendedSizeHasLessNetworkAdapters",
    "CannotReportComputeCost",
    "CannotReportStorageCost",
    "CannotReportBandwidthCosts",
    "PercentageOfCoresUtilizedMissing",
    "PercentageOfMemoryUtilizedMissing",
    "PercentageOfCoresUtilizedOutOfRange",
    "PercentageOfMemoryUtilizedOutOfRange",
  ]);
const AssessedMachineTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Unknown",
  "AssessedMachine",
  "AvsAssessedMachine",
  "SqlAssessedMachine",
]);
const MachineBootTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Unknown",
  "EFI",
  "BIOS",
  "NotSpecified",
]);
const GuestOperatingSystemArchitectureSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Unknown", "X86", "X64"]);
const AvsAssessmentSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const AvsAssessmentPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
  },
);
const AvsAssessedMachineSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const AvsAssessedMachinePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errors: Schema.optional(Schema.Array(Schema.suspend(() => ErrorSchema))),
    disks: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.suspend(() => AvsAssessedDiskSchema),
      ),
    ),
    networkAdapters: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.suspend(() => AvsAssessedNetworkAdapterSchema),
      ),
    ),
    storageInUseGB: Schema.optional(Schema.Number),
    suitabilityExplanation: Schema.optional(
      Schema.suspend(() => AzureAvsVmSuitabilityExplanationSchema),
    ),
    suitabilityDetail: Schema.optional(
      Schema.suspend(() => AzureAvsVmSuitabilityDetailSchema),
    ),
    type: Schema.optional(Schema.suspend(() => AssessedMachineTypeSchema)),
    bootType: Schema.optional(Schema.suspend(() => MachineBootTypeSchema)),
    operatingSystemType: Schema.optional(Schema.String),
    operatingSystemName: Schema.optional(Schema.String),
    operatingSystemVersion: Schema.optional(Schema.String),
    operatingSystemArchitecture: Schema.optional(
      Schema.suspend(() => GuestOperatingSystemArchitectureSchema),
    ),
    createdTimestamp: Schema.optional(Schema.String),
    updatedTimestamp: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    datacenterMachineArmId: Schema.optional(Schema.String),
    datacenterManagementServerArmId: Schema.optional(Schema.String),
    datacenterManagementServerName: Schema.optional(Schema.String),
    megabytesOfMemory: Schema.optional(Schema.Number),
    numberOfCores: Schema.optional(Schema.Number),
    confidenceRatingInPercentage: Schema.optional(Schema.Number),
    percentageCoresUtilization: Schema.optional(Schema.Number),
    percentageMemoryUtilization: Schema.optional(Schema.Number),
    suitability: Schema.optional(Schema.suspend(() => CloudSuitabilitySchema)),
  });
const AvsAssessedDiskSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
  gigabytesProvisioned: Schema.optional(Schema.Number),
  megabytesPerSecondOfRead: Schema.optional(Schema.Number),
  megabytesPerSecondOfWrite: Schema.optional(Schema.Number),
  numberOfReadOperationsPerSecond: Schema.optional(Schema.Number),
  numberOfWriteOperationsPerSecond: Schema.optional(Schema.Number),
  assessedExternalStorageType: Schema.optional(
    Schema.suspend(() => ExternalStorageTypeSchema),
  ),
  estimatedDiskSizeInGB: Schema.optional(Schema.Number),
  suitabilityDetail: Schema.optional(
    Schema.suspend(() => AzureDiskSuitabilityDetailSchema),
  ),
});
const AvsAssessedNetworkAdapterSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    macAddress: Schema.optional(Schema.String),
    ipAddresses: Schema.optional(Schema.Array(Schema.String)),
    displayName: Schema.optional(Schema.String),
    megabytesPerSecondReceived: Schema.optional(Schema.Number),
    megabytesPerSecondTransmitted: Schema.optional(Schema.Number),
  });
const AzureAvsVmSuitabilityExplanationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Unknown",
    "NotApplicable",
    "IpV6NotSupported",
    "UnsupportedOperatingSystem",
  ]);
const AzureAvsVmSuitabilityDetailSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "None",
    "PercentageOfCoresUtilizedMissing",
    "PercentageOfMemoryUtilizedMissing",
    "PercentageOfCoresUtilizedOutOfRange",
    "PercentageOfMemoryUtilizedOutOfRange",
    "PercentageOfStorageUtilizedOutOfRange",
  ]);
const SqlAssessmentV2Schema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const SqlAssessmentV2PropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
  });
const AssessedSqlDatabaseV2Schema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const AssessedSqlDatabaseV2PropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    recommendedAzureSqlTargetType: Schema.optional(
      Schema.suspend(() => TargetTypeSchema),
    ),
    recommendedSuitability: Schema.optional(
      Schema.suspend(() => RecommendedSuitabilitySchema),
    ),
    bufferCacheSizeInMB: Schema.optional(Schema.Number),
    productSupportStatus: Schema.optional(
      Schema.suspend(() => ProductSupportStatusSchema),
    ),
    azureSqlMISuitabilityDetails: Schema.optional(
      Schema.suspend(() => SqlAssessmentV2PaasSuitabilityDataSchema),
    ),
    azureSqlDBSuitabilityDetails: Schema.optional(
      Schema.suspend(() => SqlAssessmentV2PaasSuitabilityDataSchema),
    ),
    isDatabaseHighlyAvailable: Schema.optional(Schema.Boolean),
    linkedAvailabilityGroupOverview: Schema.optional(
      Schema.suspend(() => SqlAvailabilityGroupDataOverviewSchema),
    ),
    machineArmId: Schema.optional(Schema.String),
    assessedSqlInstanceArmId: Schema.optional(Schema.String),
    machineName: Schema.optional(Schema.String),
    instanceName: Schema.optional(Schema.String),
    databaseName: Schema.optional(Schema.String),
    databaseSizeInMB: Schema.optional(Schema.Number),
    compatibilityLevel: Schema.optional(
      Schema.suspend(() => CompatibilityLevelSchema),
    ),
    sqlDatabaseSdsArmId: Schema.optional(Schema.String),
    percentageCoresUtilization: Schema.optional(Schema.Number),
    megabytesPerSecondOfRead: Schema.optional(Schema.Number),
    megabytesPerSecondOfWrite: Schema.optional(Schema.Number),
    numberOfReadOperationsPerSecond: Schema.optional(Schema.Number),
    numberOfWriteOperationsPerSecond: Schema.optional(Schema.Number),
    confidenceRatingInPercentage: Schema.optional(Schema.Number),
    sizingCriterion: Schema.optional(
      Schema.suspend(() => AssessmentSizingCriterionSchema),
    ),
    createdTimestamp: Schema.optional(Schema.String),
    updatedTimestamp: Schema.optional(Schema.String),
  });
const TargetTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Unknown",
  "Recommended",
  "AzureSqlDatabase",
  "AzureSqlManagedInstance",
  "AzureSqlVirtualMachine",
  "AzureVirtualMachine",
]);
const RecommendedSuitabilitySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Unknown",
    "SuitableForSqlDB",
    "SuitableForSqlMI",
    "SuitableForVM",
    "PotentiallySuitableForVM",
    "ReadinessUnknown",
    "NotSuitable",
    "SuitableForSqlVM",
    "ConditionallySuitableForSqlDB",
    "ConditionallySuitableForSqlMI",
    "ConditionallySuitableForVM",
    "ConditionallySuitableForSqlVM",
  ]);
const SqlAssessmentV2PaasSuitabilityDataSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    azureSqlSku: Schema.optional(
      Schema.suspend(() => AzureSqlPaasSkuDTOSchema),
    ),
    replicaAzureSqlSku: Schema.optional(
      Schema.Array(Schema.suspend(() => AzureSqlPaasSkuDTOSchema)),
    ),
    sharedResources: Schema.optional(
      Schema.suspend(() => SharedResourcesDTOSchema),
    ),
    monthlyComputeCost: Schema.optional(Schema.Number),
    monthlyStorageCost: Schema.optional(Schema.Number),
    costComponents: Schema.optional(
      Schema.Array(Schema.suspend(() => CostComponentSchema)),
    ),
    securitySuitability: Schema.optional(
      Schema.suspend(() => CloudSuitabilitySchema),
    ),
    shouldProvisionReplicas: Schema.optional(Schema.Boolean),
    skuReplicationMode: Schema.optional(
      Schema.suspend(() => SkuReplicationModeSchema),
    ),
    migrationGuidelines: Schema.optional(
      Schema.Array(Schema.suspend(() => SqlMigrationGuidelineSchema)),
    ),
    recommendationReasonings: Schema.optional(
      Schema.Array(Schema.suspend(() => SqlRecommendationReasoningSchema)),
    ),
    migrationTargetPlatform: Schema.optional(
      Schema.suspend(() => TargetTypeSchema),
    ),
    suitability: Schema.optional(Schema.suspend(() => CloudSuitabilitySchema)),
    migrationIssues: Schema.optional(
      Schema.Array(Schema.suspend(() => SqlAssessmentMigrationIssueSchema)),
    ),
  });
const AzureSqlPaasSkuDTOSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  azureSqlServiceTier: Schema.optional(
    Schema.suspend(() => AzureSqlServiceTierSchema),
  ),
  azureSqlComputeTier: Schema.optional(Schema.suspend(() => ComputeTierSchema)),
  azureSqlHardwareGeneration: Schema.optional(
    Schema.suspend(() => HardwareGenerationSchema),
  ),
  storageMaxSizeInMB: Schema.optional(Schema.Number),
  predictedDataSizeInMB: Schema.optional(Schema.Number),
  predictedLogSizeInMB: Schema.optional(Schema.Number),
  cores: Schema.optional(Schema.Number),
  azureSqlTargetType: Schema.optional(Schema.suspend(() => TargetTypeSchema)),
});
const AzureSqlServiceTierSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Unknown",
  "Automatic",
  "GeneralPurpose",
  "BusinessCritical",
  "HyperScale",
]);
const ComputeTierSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Unknown",
  "Automatic",
  "Provisioned",
  "Serverless",
]);
const HardwareGenerationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Unknown",
  "Automatic",
  "Gen5",
  "Fsv2_series",
  "M_series",
  "DC_series",
]);
const SharedResourcesDTOSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  sharedDataDisks: Schema.optional(
    Schema.Array(Schema.suspend(() => AzureManagedDiskSkuDTOSchema)),
  ),
  sharedLogDisks: Schema.optional(
    Schema.Array(Schema.suspend(() => AzureManagedDiskSkuDTOSchema)),
  ),
  sharedTempDbDisks: Schema.optional(
    Schema.Array(Schema.suspend(() => AzureManagedDiskSkuDTOSchema)),
  ),
  numberOfMounts: Schema.optional(Schema.Number),
  quorumWitness: Schema.optional(
    Schema.suspend(() => AzureQuorumWitnessDTOSchema),
  ),
});
const AzureManagedDiskSkuDTOSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  diskType: Schema.optional(
    Schema.suspend(() => AzureManagedDiskSkuDTODiskTypeSchema),
  ),
  diskSize: Schema.optional(Schema.suspend(() => AzureDiskSizeSchema)),
  diskRedundancy: Schema.optional(
    Schema.suspend(() => AzureManagedDiskSkuDTODiskRedundancySchema),
  ),
  storageCost: Schema.optional(Schema.Number),
  recommendedSizeInGib: Schema.optional(Schema.Number),
  recommendedThroughputInMbps: Schema.optional(Schema.Number),
  recommendedIops: Schema.optional(Schema.Number),
});
const AzureManagedDiskSkuDTODiskTypeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Unknown",
    "Standard",
    "StandardSSD",
    "Premium",
    "StandardOrPremium",
    "Ultra",
    "PremiumV2",
  ]);
const AzureManagedDiskSkuDTODiskRedundancySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Unknown", "LRS", "ZRS"]);
const AzureQuorumWitnessDTOSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  quorumWitnessType: Schema.optional(
    Schema.suspend(() => AzureQuorumWitnessDTOQuorumWitnessTypeSchema),
  ),
});
const AzureQuorumWitnessDTOQuorumWitnessTypeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Unknown", "Cloud", "Disk"]);
const SkuReplicationModeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "NotApplicable",
  "ActiveGeoReplication",
  "FailoverGroupInstance",
]);
const SqlMigrationGuidelineSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  guidelineId: Schema.optional(Schema.String),
  migrationGuidelineCategory: Schema.optional(
    Schema.suspend(() => SqlMigrationGuidelineCategorySchema),
  ),
  migrationGuidelineContext: Schema.optional(
    Schema.Array(Schema.suspend(() => MigrationGuidelineContextSchema)),
  ),
});
const SqlMigrationGuidelineCategorySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Unknown",
    "General",
    "FailoverCluterInstanceGuideLine",
    "AvailabilityGroupGuideline",
  ]);
const MigrationGuidelineContextSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    contextKey: Schema.optional(Schema.String),
    contextValue: Schema.optional(Schema.String),
  });
const SqlRecommendationReasoningSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reasoningId: Schema.optional(Schema.String),
    reasoningString: Schema.optional(Schema.String),
    reasoningCategory: Schema.optional(Schema.String),
    contextParameters: Schema.optional(
      Schema.Array(
        Schema.suspend(() => SqlRecommendationReasoningContextSchema),
      ),
    ),
  });
const SqlRecommendationReasoningContextSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    contextKey: Schema.optional(Schema.String),
    contextValue: Schema.optional(Schema.String),
  });
const SqlAssessmentMigrationIssueSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    issueId: Schema.optional(Schema.String),
    issueCategory: Schema.optional(
      Schema.suspend(() => SqlAssessmentMigrationIssueCategorySchema),
    ),
    impactedObjects: Schema.optional(
      Schema.Array(Schema.suspend(() => ImpactedAssessmentObjectSchema)),
    ),
  });
const SqlAssessmentMigrationIssueCategorySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Issue", "Warning", "Internal"]);
const ImpactedAssessmentObjectSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    objectName: Schema.optional(Schema.String),
    objectType: Schema.optional(Schema.String),
  });
const SqlAvailabilityGroupDataOverviewSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    availabilityGroupId: Schema.optional(Schema.String),
    availabilityGroupName: Schema.optional(Schema.String),
    sqlAvailabilityGroupSdsArmId: Schema.optional(Schema.String),
    sqlAvailabilityGroupEntityId: Schema.optional(Schema.String),
    sqlAvailabilityReplicaId: Schema.optional(Schema.String),
  });
const CompatibilityLevelSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Unknown",
  "CompatLevel80",
  "CompatLevel90",
  "CompatLevel100",
  "CompatLevel110",
  "CompatLevel120",
  "CompatLevel130",
  "CompatLevel140",
  "CompatLevel150",
]);
const AssessmentSizingCriterionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "PerformanceBased",
    "AsOnPremises",
  ]);
const AssessedSqlInstanceV2Schema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const AssessedSqlInstanceV2PropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    memoryInUseInMB: Schema.optional(Schema.Number),
    hasScanOccurred: Schema.optional(Schema.Boolean),
    recommendedAzureSqlTargetType: Schema.optional(
      Schema.suspend(() => TargetTypeSchema),
    ),
    recommendedSuitability: Schema.optional(
      Schema.suspend(() => RecommendedSuitabilitySchema),
    ),
    azureSqlMISuitabilityDetails: Schema.optional(
      Schema.suspend(() => SqlAssessmentV2PaasSuitabilityDataSchema),
    ),
    azureSqlDBSuitabilityDetails: Schema.optional(
      Schema.suspend(() => SqlAssessmentV2PaasSuitabilityDataSchema),
    ),
    azureSqlVMSuitabilityDetails: Schema.optional(
      Schema.suspend(() => SqlAssessmentV2IaasSuitabilityDataSchema),
    ),
    storageTypeBasedDetails: Schema.optional(
      Schema.Array(
        Schema.suspend(() => AssessedSqlInstanceStorageDetailsSchema),
      ),
    ),
    productSupportStatus: Schema.optional(
      Schema.suspend(() => ProductSupportStatusSchema),
    ),
    fciMetadata: Schema.optional(Schema.suspend(() => SqlFCIMetadataSchema)),
    availabilityReplicaSummary: Schema.optional(
      Schema.suspend(() => SqlAvailabilityReplicaSummarySchema),
    ),
    isClustered: Schema.optional(Schema.Boolean),
    isHighAvailabilityEnabled: Schema.optional(Schema.Boolean),
    recommendedTargetReasonings: Schema.optional(
      Schema.Array(Schema.suspend(() => SqlRecommendationReasoningSchema)),
    ),
    machineArmId: Schema.optional(Schema.String),
    machineName: Schema.optional(Schema.String),
    instanceName: Schema.optional(Schema.String),
    sqlInstanceSdsArmId: Schema.optional(Schema.String),
    sqlEdition: Schema.optional(Schema.String),
    sqlVersion: Schema.optional(Schema.String),
    numberOfCoresAllocated: Schema.optional(Schema.Number),
    percentageCoresUtilization: Schema.optional(Schema.Number),
    logicalDisks: Schema.optional(
      Schema.Array(Schema.suspend(() => AssessedSqlInstanceDiskDetailsSchema)),
    ),
    databaseSummary: Schema.optional(
      Schema.suspend(() => AssessedSqlInstanceDatabaseSummarySchema),
    ),
    confidenceRatingInPercentage: Schema.optional(Schema.Number),
    sizingCriterion: Schema.optional(
      Schema.suspend(() => AssessmentSizingCriterionSchema),
    ),
    createdTimestamp: Schema.optional(Schema.String),
    updatedTimestamp: Schema.optional(Schema.String),
  });
const SqlAssessmentV2IaasSuitabilityDataSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    azureSqlSku: Schema.optional(
      Schema.suspend(() => AzureSqlIaasSkuDTOSchema),
    ),
    replicaAzureSqlSku: Schema.optional(
      Schema.Array(Schema.suspend(() => AzureSqlIaasSkuDTOSchema)),
    ),
    sharedResources: Schema.optional(
      Schema.suspend(() => SharedResourcesDTOSchema),
    ),
    monthlyComputeCost: Schema.optional(Schema.Number),
    monthlyStorageCost: Schema.optional(Schema.Number),
    costComponents: Schema.optional(
      Schema.Array(Schema.suspend(() => CostComponentSchema)),
    ),
    securitySuitability: Schema.optional(
      Schema.suspend(() => CloudSuitabilitySchema),
    ),
    shouldProvisionReplicas: Schema.optional(Schema.Boolean),
    skuReplicationMode: Schema.optional(
      Schema.suspend(() => SkuReplicationModeSchema),
    ),
    migrationGuidelines: Schema.optional(
      Schema.Array(Schema.suspend(() => SqlMigrationGuidelineSchema)),
    ),
    recommendationReasonings: Schema.optional(
      Schema.Array(Schema.suspend(() => SqlRecommendationReasoningSchema)),
    ),
    migrationTargetPlatform: Schema.optional(
      Schema.suspend(() => TargetTypeSchema),
    ),
    suitability: Schema.optional(Schema.suspend(() => CloudSuitabilitySchema)),
    migrationIssues: Schema.optional(
      Schema.Array(Schema.suspend(() => SqlAssessmentMigrationIssueSchema)),
    ),
  });
const AzureSqlIaasSkuDTOSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  virtualMachineSize: Schema.optional(
    Schema.suspend(() => AzureVirtualMachineSkuDTOSchema),
  ),
  dataDiskSizes: Schema.optional(
    Schema.Array(Schema.suspend(() => AzureManagedDiskSkuDTOSchema)),
  ),
  logDiskSizes: Schema.optional(
    Schema.Array(Schema.suspend(() => AzureManagedDiskSkuDTOSchema)),
  ),
  azureSqlTargetType: Schema.optional(Schema.suspend(() => TargetTypeSchema)),
});
const AzureVirtualMachineSkuDTOSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    azureVmFamily: Schema.optional(Schema.suspend(() => AzureVmFamilySchema)),
    cores: Schema.optional(Schema.Number),
    azureSkuName: Schema.optional(Schema.suspend(() => AzureVmSizeSchema)),
    availableCores: Schema.optional(Schema.Number),
    maxNetworkInterfaces: Schema.optional(Schema.Number),
  });
const AzureVmFamilySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Unknown",
  "Basic_A0_A4",
  "Standard_A0_A7",
  "Standard_A8_A11",
  "Av2_series",
  "D_series",
  "Dv2_series",
  "DS_series",
  "DSv2_series",
  "F_series",
  "Fs_series",
  "G_series",
  "GS_series",
  "H_series",
  "Ls_series",
  "Dsv3_series",
  "Dv3_series",
  "Fsv2_series",
  "Ev3_series",
  "Esv3_series",
  "M_series",
  "DC_Series",
  "Lsv2_series",
  "Ev4_series",
  "Esv4_series",
  "Edv4_series",
  "Edsv4_series",
  "Dv4_series",
  "Dsv4_series",
  "Ddv4_series",
  "Ddsv4_series",
  "Easv4_series",
  "Dasv4_series",
  "Mv2_series",
  "Eav4_series",
  "Dav4_series",
  "Msv2_series",
  "Mdsv2_series",
  "Dv5_series",
  "Dsv5_series",
  "Ddv5_series",
  "Ddsv5_series",
  "Dasv5_series",
  "Dadsv5_series",
  "Ev5_series",
  "Esv5_series",
  "Edv5_series",
  "Edsv5_series",
  "Easv5_series",
  "Eadsv5_series",
  "Ebsv5_series",
  "Ebdsv5_series",
]);
const AssessedSqlInstanceStorageDetailsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    storageType: Schema.optional(Schema.String),
    diskSizeInMB: Schema.optional(Schema.Number),
    megabytesPerSecondOfRead: Schema.optional(Schema.Number),
    megabytesPerSecondOfWrite: Schema.optional(Schema.Number),
    numberOfReadOperationsPerSecond: Schema.optional(Schema.Number),
    numberOfWriteOperationsPerSecond: Schema.optional(Schema.Number),
  });
const SqlFCIMetadataSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  state: Schema.optional(Schema.suspend(() => SqlFCIMetadataStateSchema)),
  isMultiSubnet: Schema.optional(Schema.Boolean),
  fciSharedDiskCount: Schema.optional(Schema.Number),
});
const SqlFCIMetadataStateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Unknown",
  "Inherited",
  "Initializing",
  "Online",
  "Offline",
  "Failed",
  "Pending",
  "OnlinePending",
  "OfflinePending",
]);
const SqlAvailabilityReplicaSummarySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    numberOfSynchronousReadReplicas: Schema.optional(Schema.Number),
    numberOfSynchronousNonReadReplicas: Schema.optional(Schema.Number),
    numberOfAsynchronousReadReplicas: Schema.optional(Schema.Number),
    numberOfAsynchronousNonReadReplicas: Schema.optional(Schema.Number),
    numberOfPrimaryReplicas: Schema.optional(Schema.Number),
  });
const AssessedSqlInstanceDiskDetailsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    diskId: Schema.optional(Schema.String),
    diskSizeInMB: Schema.optional(Schema.Number),
    megabytesPerSecondOfRead: Schema.optional(Schema.Number),
    megabytesPerSecondOfWrite: Schema.optional(Schema.Number),
    numberOfReadOperationsPerSecond: Schema.optional(Schema.Number),
    numberOfWriteOperationsPerSecond: Schema.optional(Schema.Number),
  });
const AssessedSqlInstanceDatabaseSummarySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    numberOfUserDatabases: Schema.optional(Schema.Number),
    totalDatabaseSizeInMB: Schema.optional(Schema.Number),
    largestDatabaseSizeInMB: Schema.optional(Schema.Number),
    totalDiscoveredUserDatabases: Schema.optional(Schema.Number),
  });
const AssessedSqlMachineSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const AssessedSqlMachinePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    biosGuid: Schema.optional(Schema.String),
    fqdn: Schema.optional(Schema.String),
    sqlInstances: Schema.optional(
      Schema.Array(Schema.suspend(() => AssessedSqlInstanceSummarySchema)),
    ),
    suitabilityDetail: Schema.optional(
      Schema.suspend(() => AzureVmSuitabilityDetailSchema),
    ),
    suitabilityExplanation: Schema.optional(
      Schema.suspend(() => AzureVmSuitabilityExplanationSchema),
    ),
    recommendedVmSize: Schema.optional(Schema.suspend(() => AzureVmSizeSchema)),
    recommendedVmFamily: Schema.optional(
      Schema.suspend(() => AzureVmFamilySchema),
    ),
    productSupportStatus: Schema.optional(
      Schema.suspend(() => ProductSupportStatusSchema),
    ),
    recommendedVmSizeNumberOfCores: Schema.optional(Schema.Number),
    recommendedVmSizeMegabytesOfMemory: Schema.optional(Schema.Number),
    monthlyComputeCost: Schema.optional(Schema.Number),
    disks: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.suspend(() => AssessedDiskDataSchema),
      ),
    ),
    networkAdapters: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.suspend(() => SqlAssessedNetworkAdapterSchema),
      ),
    ),
    monthlyBandwidthCost: Schema.optional(Schema.Number),
    monthlyStorageCost: Schema.optional(Schema.Number),
    costComponents: Schema.optional(
      Schema.Array(Schema.suspend(() => CostComponentSchema)),
    ),
    securitySuitability: Schema.optional(
      Schema.suspend(() => CloudSuitabilitySchema),
    ),
    migrationGuidelines: Schema.optional(
      Schema.Array(Schema.suspend(() => SqlMigrationGuidelineSchema)),
    ),
    bootType: Schema.optional(Schema.suspend(() => MachineBootTypeSchema)),
    operatingSystemType: Schema.optional(Schema.String),
    operatingSystemName: Schema.optional(Schema.String),
    operatingSystemVersion: Schema.optional(Schema.String),
    operatingSystemArchitecture: Schema.optional(
      Schema.suspend(() => GuestOperatingSystemArchitectureSchema),
    ),
    createdTimestamp: Schema.optional(Schema.String),
    updatedTimestamp: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    type: Schema.optional(Schema.suspend(() => AssessedMachineTypeSchema)),
    description: Schema.optional(Schema.String),
    datacenterMachineArmId: Schema.optional(Schema.String),
    datacenterManagementServerArmId: Schema.optional(Schema.String),
    datacenterManagementServerName: Schema.optional(Schema.String),
    megabytesOfMemory: Schema.optional(Schema.Number),
    numberOfCores: Schema.optional(Schema.Number),
    confidenceRatingInPercentage: Schema.optional(Schema.Number),
    percentageCoresUtilization: Schema.optional(Schema.Number),
    percentageMemoryUtilization: Schema.optional(Schema.Number),
    suitability: Schema.optional(Schema.suspend(() => CloudSuitabilitySchema)),
    sizingCriterion: Schema.optional(
      Schema.suspend(() => AssessmentSizingCriterionSchema),
    ),
  });
const AssessedSqlInstanceSummarySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    instanceId: Schema.optional(Schema.String),
    instanceName: Schema.optional(Schema.String),
    sqlInstanceSdsArmId: Schema.optional(Schema.String),
    sqlInstanceEntityId: Schema.optional(Schema.String),
    sqlEdition: Schema.optional(Schema.String),
    sqlVersion: Schema.optional(Schema.String),
    isClustered: Schema.optional(Schema.Boolean),
    isHighAvailabilityEnabled: Schema.optional(Schema.Boolean),
    sqlFciState: Schema.optional(Schema.suspend(() => SqlFCIStateSchema)),
  });
const SqlFCIStateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Unknown",
  "Active",
  "Passive",
  "NotApplicable",
]);
const AssessedDiskDataSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  suitability: Schema.optional(Schema.suspend(() => CloudSuitabilitySchema)),
  suitabilityExplanation: Schema.optional(
    Schema.suspend(() => AzureDiskSuitabilityExplanationSchema),
  ),
  suitabilityDetail: Schema.optional(
    Schema.suspend(() => AzureDiskSuitabilityDetailSchema),
  ),
  recommendedDiskSize: Schema.optional(
    Schema.suspend(() => AzureDiskSizeSchema),
  ),
  recommendedDiskType: Schema.optional(
    Schema.suspend(() => AzureDiskTypeSchema),
  ),
  recommendedDiskSizeGigabytes: Schema.optional(Schema.Number),
  recommendDiskThroughputInMbps: Schema.optional(Schema.Number),
  recommendedDiskIops: Schema.optional(Schema.Number),
  monthlyStorageCost: Schema.optional(Schema.Number),
  name: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
  gigabytesProvisioned: Schema.optional(Schema.Number),
  megabytesPerSecondOfRead: Schema.optional(Schema.Number),
  megabytesPerSecondOfWrite: Schema.optional(Schema.Number),
  numberOfReadOperationsPerSecond: Schema.optional(Schema.Number),
  numberOfWriteOperationsPerSecond: Schema.optional(Schema.Number),
});
const SqlAssessedNetworkAdapterSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    suitability: Schema.optional(Schema.suspend(() => CloudSuitabilitySchema)),
    suitabilityDetail: Schema.optional(
      Schema.suspend(() => AzureNetworkAdapterSuitabilityDetailSchema),
    ),
    suitabilityExplanation: Schema.optional(
      Schema.suspend(() => AzureNetworkAdapterSuitabilityExplanationSchema),
    ),
    monthlyBandwidthCosts: Schema.optional(Schema.Number),
    netGigabytesTransmittedPerMonth: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    macAddress: Schema.optional(Schema.String),
    ipAddresses: Schema.optional(Schema.Array(Schema.String)),
    megabytesPerSecondReceived: Schema.optional(Schema.Number),
    megabytesPerSecondTransmitted: Schema.optional(Schema.Number),
  });
const AssessedSqlRecommendedEntitySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
const AssessedSqlRecommendedEntityPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    machineName: Schema.optional(Schema.String),
    instanceName: Schema.optional(Schema.String),
    productSupportStatus: Schema.optional(
      Schema.suspend(() => ProductSupportStatusSchema),
    ),
    dbCount: Schema.optional(Schema.Number),
    discoveredDBCount: Schema.optional(Schema.Number),
    hasScanOccurred: Schema.optional(Schema.Boolean),
    recommendedAzureSqlTargetType: Schema.optional(
      Schema.suspend(() => TargetTypeSchema),
    ),
    recommendedSuitability: Schema.optional(
      Schema.suspend(() => RecommendedSuitabilitySchema),
    ),
    azureSqlMISuitabilityDetails: Schema.optional(
      Schema.suspend(() => SqlAssessmentV2PaasSuitabilityDataSchema),
    ),
    azureSqlDBSuitabilityDetails: Schema.optional(
      Schema.suspend(() => SqlAssessmentV2PaasSuitabilityDataSchema),
    ),
    azureSqlVMSuitabilityDetails: Schema.optional(
      Schema.suspend(() => SqlAssessmentV2IaasSuitabilityDataSchema),
    ),
    assessedSqlEntityArmId: Schema.optional(Schema.String),
    isClustered: Schema.optional(Schema.Boolean),
    isHighAvailabilityEnabled: Schema.optional(Schema.Boolean),
    sqlEdition: Schema.optional(Schema.String),
    sqlVersion: Schema.optional(Schema.String),
    sizingCriterion: Schema.optional(
      Schema.suspend(() => AssessmentSizingCriterionSchema),
    ),
  });
const SqlAssessmentV2SummarySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const SqlAssessmentV2SummaryPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    assessmentSummary: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.suspend(() => SqlAssessmentV2SummaryDataSchema),
      ),
    ),
    distributionBySupportStatus: Schema.optional(
      Schema.Record(Schema.String, Schema.Number),
    ),
    distributionByServicePackInsight: Schema.optional(
      Schema.Record(Schema.String, Schema.Number),
    ),
    distributionBySqlVersion: Schema.optional(
      Schema.Record(Schema.String, Schema.Number),
    ),
    distributionBySqlEdition: Schema.optional(
      Schema.Record(Schema.String, Schema.Number),
    ),
    instanceDistributionBySizingCriterion: Schema.optional(
      Schema.Record(Schema.String, Schema.Number),
    ),
    databaseDistributionBySizingCriterion: Schema.optional(
      Schema.Record(Schema.String, Schema.Number),
    ),
    numberOfMachines: Schema.optional(Schema.Number),
    numberOfSqlInstances: Schema.optional(Schema.Number),
    numberOfSuccessfullyDiscoveredSqlInstances: Schema.optional(Schema.Number),
    numberOfSqlDatabases: Schema.optional(Schema.Number),
    numberOfFciInstances: Schema.optional(Schema.Number),
    numberOfSqlAvailabilityGroups: Schema.optional(Schema.Number),
  });
const SqlAssessmentV2SummaryDataSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    suitabilitySummary: Schema.optional(
      Schema.Record(Schema.String, Schema.Number),
    ),
    monthlyComputeCost: Schema.optional(Schema.Number),
    monthlyStorageCost: Schema.optional(Schema.Number),
    monthlyLicenseCost: Schema.optional(Schema.Number),
    confidenceScore: Schema.optional(Schema.Number),
    monthlySecurityCost: Schema.optional(Schema.Number),
  });
const GroupBodyPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  operationType: Schema.optional(
    Schema.suspend(() => GroupUpdateOperationSchema),
  ),
  machines: Schema.optional(Schema.Array(Schema.String)),
});
const GroupUpdateOperationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Add",
  "Remove",
]);
const WebAppAssessmentV2Schema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const WebAppAssessmentV2PropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningState2Schema),
    ),
  });
const ProvisioningState2Schema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Succeeded",
  "Failed",
  "Canceled",
  "Provisioning",
  "Updating",
  "Deleting",
  "Accepted",
]);
const AssessedWebAppV2Schema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const AssessedWebAppV2PropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    webAppType: Schema.optional(Schema.suspend(() => WebAppTypeSchema)),
    targetSpecificResult: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.suspend(() => TargetSpecificResultSchema),
      ),
    ),
    appServicePlanName: Schema.String,
    machineName: Schema.String,
    serverArmId: Schema.optional(Schema.String),
    webServerName: Schema.optional(Schema.String),
    webAppName: Schema.optional(Schema.String),
    discoveredWebAppId: Schema.optional(Schema.String),
    discoveredMachineId: Schema.optional(Schema.String),
    confidenceRatingInPercentage: Schema.optional(Schema.Number),
    createdTimestamp: Schema.optional(Schema.String),
    updatedTimestamp: Schema.optional(Schema.String),
  });
const TargetSpecificResultSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  assessmentResult: Schema.suspend(() => AssessmentResultSchema),
  migrationIssues: Schema.Array(
    Schema.suspend(() => WebAppMigrationIssuesSchema),
  ),
});
const AssessmentResultSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  appServicePlanName: Schema.String,
  suitability: Schema.suspend(() => CloudSuitabilitySchema),
  securitySuitability: Schema.suspend(() => CloudSuitabilitySchema),
  webAppSkuName: Schema.String,
  webAppSkuSize: Schema.String,
});
const WebAppMigrationIssuesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  issueId: Schema.String,
  issueCategory: Schema.suspend(
    () => AzureWebAppSuitabilityIssueCategorySchema,
  ),
  issueDescriptionList: Schema.Array(Schema.String),
});
const AzureWebAppSuitabilityIssueCategorySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Unknown", "Issue", "Info"]);
const WebAppAssessmentV2SummarySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
const WebAppAssessmentV2SummaryPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    assessmentSummary: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.suspend(() => DiscoveredEntitiesSummarySchema),
      ),
    ),
    targetSpecificSummary: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.suspend(() => TargetSpecificSummarySchema),
      ),
    ),
  });
const DiscoveredEntitiesSummarySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    numberOfServers: Schema.optional(Schema.Number),
    numberOfWebApps: Schema.optional(Schema.Number),
    numberOfMachines: Schema.optional(Schema.Number),
    webServerSummary: Schema.optional(
      Schema.Record(Schema.String, Schema.Number),
    ),
    webAppSummary: Schema.optional(Schema.Record(Schema.String, Schema.Number)),
  });
const TargetSpecificSummarySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  readinessSummary: Schema.optional(
    Schema.Record(Schema.String, Schema.Number),
  ),
  recommendationResultSkuDetails: Schema.optional(
    Schema.Record(
      Schema.String,
      Schema.suspend(() => WebAppSkuDetailsSchema),
    ),
  ),
});
const WebAppSkuDetailsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  totalMonthlyCost: Schema.optional(Schema.Number),
  monthlySecurityCost: Schema.optional(Schema.Number),
  skuName: Schema.String,
  skuSize: Schema.String,
  appServicePlanCount: Schema.Number,
});
const WebAppServicePlanV2Schema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const WebAppServicePlanV2PropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    webAppType: Schema.optional(Schema.suspend(() => WebAppTypeSchema)),
    webAppTargetType: Schema.optional(
      Schema.suspend(() => AzureWebAppTargetTypeSchema),
    ),
    webAppServicePlanName: Schema.String,
    numberOfWebApps: Schema.Number,
    monthlyCost: Schema.optional(Schema.Number),
    storage: Schema.optional(Schema.Number),
    scaleOutInstances: Schema.optional(Schema.Number),
    cores: Schema.optional(Schema.Number),
    ram: Schema.optional(Schema.Number),
    webAppSkuName: Schema.optional(Schema.String),
    webAppSkuSize: Schema.optional(Schema.String),
    createdTimestamp: Schema.optional(Schema.String),
    updatedTimestamp: Schema.optional(Schema.String),
    costComponents: Schema.optional(
      Schema.Array(Schema.suspend(() => CostComponentSchema)),
    ),
  });
const AzureWebAppTargetTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(
  ["Unknown", "AzureAppService", "AzureAppServiceContainer"],
);
const HypervCollectorSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const CollectorPropertiesBaseWithAgentSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
  });
const ImportCollectorSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const CollectorPropertiesBaseSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
  },
);
const MachineSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const MachinePropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  workloadSummary: Schema.optional(Schema.suspend(() => WorkloadSummarySchema)),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => ErrorSchema))),
  hostProcessor: Schema.optional(Schema.suspend(() => ProcessorInfoSchema)),
  productSupportStatus: Schema.optional(
    Schema.suspend(() => ProductSupportStatusSchema),
  ),
  discoveryMachineArmId: Schema.optional(Schema.String),
  datacenterManagementServerArmId: Schema.optional(Schema.String),
  datacenterManagementServerName: Schema.optional(Schema.String),
  bootType: Schema.optional(Schema.suspend(() => MachineBootTypeSchema)),
  displayName: Schema.optional(Schema.String),
  megabytesOfMemory: Schema.optional(Schema.Number),
  numberOfCores: Schema.optional(Schema.Number),
  operatingSystemType: Schema.optional(Schema.String),
  operatingSystemName: Schema.optional(Schema.String),
  operatingSystemVersion: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  createdTimestamp: Schema.optional(Schema.String),
  disks: Schema.optional(
    Schema.Record(
      Schema.String,
      Schema.suspend(() => DiskSchema),
    ),
  ),
  groups: Schema.optional(Schema.Array(Schema.String)),
  networkAdapters: Schema.optional(
    Schema.Record(
      Schema.String,
      Schema.suspend(() => NetworkAdapterSchema),
    ),
  ),
  sqlInstances: Schema.optional(Schema.Array(Schema.String)),
  webApplications: Schema.optional(Schema.Array(Schema.String)),
  updatedTimestamp: Schema.optional(Schema.String),
});
const WorkloadSummarySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  oracleInstances: Schema.optional(Schema.Number),
  springApps: Schema.optional(Schema.Number),
});
const DiskSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  gigabytesAllocated: Schema.optional(Schema.Number),
  displayName: Schema.optional(Schema.String),
});
const NetworkAdapterSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  macAddress: Schema.optional(Schema.String),
  ipAddresses: Schema.optional(Schema.Array(Schema.String)),
  displayName: Schema.optional(Schema.String),
});
const PrivateEndpointConnectionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
const PrivateEndpointSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
});
const PrivateLinkServiceConnectionStateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(
      Schema.suspend(() => PrivateEndpointServiceConnectionStatusSchema),
    ),
    description: Schema.optional(Schema.String),
    actionsRequired: Schema.optional(Schema.String),
  });
const PrivateEndpointServiceConnectionStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Pending",
    "Approved",
    "Rejected",
  ]);
const PrivateEndpointConnectionProvisioningStateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Succeeded",
    "Creating",
    "Deleting",
    "Failed",
  ]);
const PrivateLinkResourceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const AssessmentProjectSummarySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
const AssessmentProjectSummaryPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    errorSummaryAffectedEntities: Schema.optional(
      Schema.Array(Schema.suspend(() => ErrorSummarySchema)),
    ),
    numberOfPrivateEndpointConnections: Schema.optional(Schema.Number),
    numberOfGroups: Schema.optional(Schema.Number),
    numberOfMachines: Schema.optional(Schema.Number),
    numberOfImportMachines: Schema.optional(Schema.Number),
    numberOfAssessments: Schema.optional(Schema.Number),
    lastAssessmentTimestamp: Schema.optional(Schema.String),
  });
const ErrorSummarySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  assessmentType: Schema.optional(Schema.suspend(() => AssessmentTypeSchema)),
  count: Schema.optional(Schema.Number),
});
const AssessmentTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Unknown",
  "MachineAssessment",
  "AvsAssessment",
  "SqlAssessment",
  "WebAppAssessment",
]);
const ServerCollectorSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const SqlAssessmentOptionsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const SqlAssessmentOptionsPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vmFamilies: Schema.optional(
      Schema.Array(Schema.suspend(() => VmFamilyOptionsSchema)),
    ),
    reservedInstanceVmFamilies: Schema.optional(
      Schema.Array(Schema.suspend(() => AzureVmFamilySchema)),
    ),
    premiumDiskVmFamilies: Schema.optional(
      Schema.Array(Schema.suspend(() => AzureVmFamilySchema)),
    ),
    savingsPlanVmFamilies: Schema.optional(
      Schema.Array(Schema.suspend(() => AzureVmFamilySchema)),
    ),
    savingsPlanSupportedLocations: Schema.optional(
      Schema.Array(Schema.suspend(() => AzureLocationSchema)),
    ),
    savingsPlanSupportedLocationsForPaas: Schema.optional(
      Schema.Array(Schema.suspend(() => AzureLocationSchema)),
    ),
    reservedInstanceSupportedLocationsForIaas: Schema.optional(
      Schema.Array(Schema.suspend(() => AzureLocationSchema)),
    ),
    savingsPlanSupportedOffers: Schema.optional(
      Schema.Array(Schema.suspend(() => AzureOfferCodeSchema)),
    ),
    sqlSkus: Schema.optional(
      Schema.Array(Schema.suspend(() => SqlPaaSTargetOptionsSchema)),
    ),
    reservedInstanceSqlTargets: Schema.optional(
      Schema.Array(Schema.suspend(() => TargetTypeSchema)),
    ),
    reservedInstanceSupportedLocations: Schema.optional(
      Schema.Array(Schema.suspend(() => AzureLocationSchema)),
    ),
    reservedInstanceSupportedCurrencies: Schema.optional(
      Schema.Array(Schema.suspend(() => AzureCurrencySchema)),
    ),
    reservedInstanceSupportedOffers: Schema.optional(
      Schema.Array(Schema.suspend(() => AzureOfferCodeSchema)),
    ),
    supportedOffers: Schema.optional(
      Schema.Array(Schema.suspend(() => AzureOfferCodeSchema)),
    ),
  });
const SqlPaaSTargetOptionsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  computeTier: Schema.optional(Schema.suspend(() => ComputeTierSchema)),
  hardwareGeneration: Schema.optional(
    Schema.suspend(() => HardwareGenerationSchema),
  ),
  targetType: Schema.optional(Schema.suspend(() => TargetTypeSchema)),
  serviceTier: Schema.optional(Schema.suspend(() => AzureSqlServiceTierSchema)),
  targetLocations: Schema.optional(
    Schema.Array(Schema.suspend(() => AzureLocationSchema)),
  ),
});
const SqlCollectorSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const VmwareCollectorSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const WebAppAssessmentOptionsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  },
);
const WebAppAssessmentOptionsPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    webAppSkus: Schema.optional(
      Schema.Array(Schema.suspend(() => WebAppTargetOptionsSchema)),
    ),
    savingsPlanSupportedLocations: Schema.optional(
      Schema.Array(Schema.suspend(() => AzureLocationSchema)),
    ),
    reservedInstanceSupportedLocations: Schema.optional(
      Schema.Array(Schema.suspend(() => AzureLocationSchema)),
    ),
    reservedInstanceSupportedCurrencies: Schema.optional(
      Schema.Array(Schema.suspend(() => AzureCurrencySchema)),
    ),
    reservedInstanceSupportedOffers: Schema.optional(
      Schema.Array(Schema.suspend(() => AzureOfferCodeSchema)),
    ),
    reservedInstanceSupportedWebAppTiers: Schema.optional(
      Schema.Array(Schema.suspend(() => AzureWebAppTierSchema)),
    ),
    savingsPlanSupportedWebAppTiers: Schema.optional(
      Schema.Array(Schema.suspend(() => AzureWebAppTierSchema)),
    ),
  });
const WebAppTargetOptionsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  webAppTier: Schema.optional(Schema.suspend(() => AzureWebAppTierSchema)),
  targetLocations: Schema.optional(
    Schema.Array(Schema.suspend(() => AzureLocationSchema)),
  ),
});
const AzureWebAppTierSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Unknown",
  "Free",
  "Premium_V2",
  "Premium_V3",
  "Isolated",
]);
const WebAppCollectorSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const WebAppCollectorPropertiesBaseWithAgentSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningState2Schema),
    ),
  });
const DatabaseInstanceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  properties: Schema.optional(
    Schema.suspend(() => DatabaseInstancePropertiesSchema),
  ),
});
const DatabaseInstancePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    discoveryData: Schema.optional(
      Schema.Array(
        Schema.suspend(() => DatabaseInstanceDiscoveryDetailsSchema),
      ),
    ),
    summary: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.suspend(() => DatabaseInstanceSummarySchema),
      ),
    ),
    lastUpdatedTime: Schema.optional(Schema.String),
  });
const DatabaseInstanceDiscoveryDetailsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lastUpdatedTime: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    instanceId: Schema.optional(Schema.String),
    enqueueTime: Schema.optional(Schema.String),
    solutionName: Schema.optional(Schema.String),
    instanceName: Schema.optional(Schema.String),
    instanceVersion: Schema.optional(Schema.String),
    instanceType: Schema.optional(Schema.String),
    hostName: Schema.optional(Schema.String),
    ipAddress: Schema.optional(Schema.String),
    portNumber: Schema.optional(Schema.Number),
    extendedInfo: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  });
const DatabaseInstanceSummarySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    databasesAssessedCount: Schema.optional(Schema.Number),
    migrationReadyCount: Schema.optional(Schema.Number),
  },
);
const DatabaseSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  properties: Schema.optional(Schema.suspend(() => DatabasePropertiesSchema)),
});
const DatabasePropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  assessmentData: Schema.optional(
    Schema.Array(Schema.suspend(() => DatabaseAssessmentDetailsSchema)),
  ),
  lastUpdatedTime: Schema.optional(Schema.String),
});
const DatabaseAssessmentDetailsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    assessmentId: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    migrationBlockersCount: Schema.optional(Schema.Number),
    breakingChangesCount: Schema.optional(Schema.Number),
    isReadyForMigration: Schema.optional(Schema.Boolean),
    assessmentTargetType: Schema.optional(Schema.String),
    lastAssessedTime: Schema.optional(Schema.String),
    compatibilityLevel: Schema.optional(Schema.String),
    databaseSizeInMB: Schema.optional(Schema.String),
    lastUpdatedTime: Schema.optional(Schema.String),
    enqueueTime: Schema.optional(Schema.String),
    solutionName: Schema.optional(Schema.String),
    instanceId: Schema.optional(Schema.String),
    databaseName: Schema.optional(Schema.String),
    extendedInfo: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  });
const MigrateEventSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  properties: Schema.optional(
    Schema.suspend(() => MigrateEventPropertiesSchema),
  ),
});
const MigrateEventPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  instanceType: Schema.optional(Schema.String),
  errorCode: Schema.optional(Schema.String),
  errorMessage: Schema.optional(Schema.String),
  recommendation: Schema.optional(Schema.String),
  possibleCauses: Schema.optional(Schema.String),
  solution: Schema.optional(Schema.String),
  clientRequestId: Schema.optional(Schema.String),
});
const DiscoveryDetailsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  osType: Schema.optional(Schema.String),
  osName: Schema.optional(Schema.String),
  osVersion: Schema.optional(Schema.String),
  enqueueTime: Schema.optional(Schema.String),
  solutionName: Schema.optional(Schema.String),
  machineId: Schema.optional(Schema.String),
  machineManagerId: Schema.optional(Schema.String),
  fabricType: Schema.optional(Schema.String),
  lastUpdatedTime: Schema.optional(Schema.String),
  machineName: Schema.optional(Schema.String),
  ipAddresses: Schema.optional(Schema.Array(Schema.String)),
  fqdn: Schema.optional(Schema.String),
  biosId: Schema.optional(Schema.String),
  macAddresses: Schema.optional(Schema.Array(Schema.String)),
  extendedInfo: Schema.optional(Schema.Record(Schema.String, Schema.String)),
});
const AssessmentDetailsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  assessmentId: Schema.optional(Schema.String),
  targetVMSize: Schema.optional(Schema.String),
  targetVMLocation: Schema.optional(Schema.String),
  targetStorageType: Schema.optional(
    Schema.Record(Schema.String, Schema.String),
  ),
  enqueueTime: Schema.optional(Schema.String),
  solutionName: Schema.optional(Schema.String),
  machineId: Schema.optional(Schema.String),
  machineManagerId: Schema.optional(Schema.String),
  fabricType: Schema.optional(Schema.String),
  lastUpdatedTime: Schema.optional(Schema.String),
  machineName: Schema.optional(Schema.String),
  ipAddresses: Schema.optional(Schema.Array(Schema.String)),
  fqdn: Schema.optional(Schema.String),
  biosId: Schema.optional(Schema.String),
  macAddresses: Schema.optional(Schema.Array(Schema.String)),
  extendedInfo: Schema.optional(Schema.Record(Schema.String, Schema.String)),
});
const MigrationDetailsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  migrationPhase: Schema.optional(Schema.String),
  migrationTested: Schema.optional(Schema.Boolean),
  replicationProgressPercentage: Schema.optional(Schema.Number),
  targetVMArmId: Schema.optional(Schema.String),
  enqueueTime: Schema.optional(Schema.String),
  solutionName: Schema.optional(Schema.String),
  machineId: Schema.optional(Schema.String),
  machineManagerId: Schema.optional(Schema.String),
  fabricType: Schema.optional(Schema.String),
  lastUpdatedTime: Schema.optional(Schema.String),
  machineName: Schema.optional(Schema.String),
  ipAddresses: Schema.optional(Schema.Array(Schema.String)),
  fqdn: Schema.optional(Schema.String),
  biosId: Schema.optional(Schema.String),
  macAddresses: Schema.optional(Schema.Array(Schema.String)),
  extendedInfo: Schema.optional(Schema.Record(Schema.String, Schema.String)),
});
const SolutionPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  tool: Schema.optional(
    Schema.Literals([
      "ServerDiscovery",
      "ServerAssessment",
      "ServerMigration",
      "Cloudamize",
      "Turbonomic",
      "Zerto",
      "CorentTech",
      "ServerAssessmentV1",
      "ServerMigration_Replication",
      "Carbonite",
      "DataMigrationAssistant",
      "DatabaseMigrationService",
      "Device42",
      "JetStream",
      "RackWare",
      "UnifyCloud",
      "Flexera",
      "ServerDiscovery_Import",
      "Lakeside",
      "AppServiceMigrationAssistant",
      "Movere",
      "CloudSphere",
      "Modernization",
      "ServerMigration_DataReplication",
      "Unknown",
    ]),
  ),
  purpose: Schema.optional(
    Schema.Literals(["Discovery", "Assessment", "Migration"]),
  ),
  goal: Schema.optional(
    Schema.Literals([
      "Servers",
      "Databases",
      "DesktopVirtualization",
      "WebApplications",
      "DataCenter",
    ]),
  ),
  status: Schema.optional(Schema.Literals(["Inactive", "Active"])),
  cleanupState: Schema.optional(
    Schema.Literals(["None", "Started", "InProgress", "Completed", "Failed"]),
  ),
  summary: Schema.optional(Schema.suspend(() => SolutionSummarySchema)),
  details: Schema.optional(Schema.suspend(() => SolutionDetailsSchema)),
});
const SolutionSummarySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  instanceType: Schema.optional(Schema.String),
});
const SolutionDetailsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  groupCount: Schema.optional(Schema.Number),
  assessmentCount: Schema.optional(Schema.Number),
  extendedDetails: Schema.optional(Schema.Record(Schema.String, Schema.String)),
});
const SolutionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  etag: Schema.optional(Schema.String),
  properties: Schema.optional(Schema.suspend(() => SolutionPropertiesSchema)),
});
const VirtualDesktopUserSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  properties: Schema.optional(
    Schema.suspend(() => VirtualDesktopUserPropertiesSchema),
  ),
});
const VirtualDesktopUserPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    assessmentData: Schema.optional(
      Schema.Array(
        Schema.suspend(() => VirtualDesktopUserAssessmentDetailsSchema),
      ),
    ),
    lastUpdatedTime: Schema.optional(Schema.String),
  });
const VirtualDesktopUserAssessmentDetailsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lastUpdatedTime: Schema.optional(Schema.String),
    userId: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    enqueueTime: Schema.optional(Schema.String),
    solutionName: Schema.optional(Schema.String),
    userName: Schema.optional(Schema.String),
    userAccount: Schema.optional(Schema.String),
    country: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    city: Schema.optional(Schema.String),
    devicesUsed: Schema.optional(Schema.Array(Schema.String)),
    virtualization: Schema.optional(Schema.String),
    totalApplicationsCount: Schema.optional(Schema.Number),
    criticalApplications: Schema.optional(Schema.Array(Schema.String)),
    osUsed: Schema.optional(Schema.Array(Schema.String)),
    multiUserWindows10: Schema.optional(Schema.Boolean),
    windows7: Schema.optional(Schema.Boolean),
    persona: Schema.optional(Schema.String),
    assessmentId: Schema.optional(Schema.String),
    targetLocation: Schema.optional(Schema.String),
    isReadyForMigration: Schema.optional(Schema.Boolean),
    targetAzureVmSize: Schema.optional(Schema.String),
    targetStorageType: Schema.optional(Schema.String),
    activeWeeklyHours: Schema.optional(Schema.Number),
    userExperienceScore: Schema.optional(Schema.Number),
    egressBandwidthWeekly: Schema.optional(Schema.Number),
    extendedInfo: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  });
const WebServerSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  properties: Schema.optional(Schema.suspend(() => WebServerPropertiesSchema)),
});
const WebServerPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  discoveryData: Schema.optional(
    Schema.Array(Schema.suspend(() => WebServerDiscoveryDetailsSchema)),
  ),
  summary: Schema.optional(
    Schema.Record(
      Schema.String,
      Schema.suspend(() => WebServerSummarySchema),
    ),
  ),
  lastUpdatedTime: Schema.optional(Schema.String),
});
const WebServerDiscoveryDetailsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    osName: Schema.optional(Schema.String),
    osVersion: Schema.optional(Schema.String),
    cpuCores: Schema.optional(Schema.Number),
    memoryInMb: Schema.optional(Schema.String),
    webServerType: Schema.optional(Schema.String),
    webServerVersion: Schema.optional(Schema.String),
    portList: Schema.optional(Schema.Array(Schema.Number)),
    lastUpdatedTime: Schema.optional(Schema.String),
    enqueueTime: Schema.optional(Schema.String),
    solutionName: Schema.optional(Schema.String),
    webServerId: Schema.optional(Schema.String),
    webServerName: Schema.optional(Schema.String),
    extendedInfo: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  });
const WebServerSummarySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  discoveredCount: Schema.optional(Schema.Number),
  assessedCount: Schema.optional(Schema.Number),
  readyForMigration: Schema.optional(Schema.Number),
  migratingCount: Schema.optional(Schema.Number),
  migratedCount: Schema.optional(Schema.Number),
});
const WebSiteSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  properties: Schema.optional(Schema.suspend(() => WebSitePropertiesSchema)),
});
const WebSitePropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  discoveryData: Schema.optional(
    Schema.Array(Schema.suspend(() => WebSiteDiscoveryDetailsSchema)),
  ),
  assessmentData: Schema.optional(
    Schema.Array(Schema.suspend(() => WebSiteAssessmentDetailsSchema)),
  ),
  migrationData: Schema.optional(
    Schema.Array(Schema.suspend(() => WebSiteMigrationDetailsSchema)),
  ),
  lastUpdatedTime: Schema.optional(Schema.String),
});
const WebSiteDiscoveryDetailsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    lastUpdatedTime: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    webServerId: Schema.optional(Schema.String),
    webServerType: Schema.optional(Schema.String),
    webSiteName: Schema.optional(Schema.String),
    enqueueTime: Schema.optional(Schema.String),
    solutionName: Schema.optional(Schema.String),
    port: Schema.optional(Schema.Number),
    extendedInfo: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  },
);
const WebSiteAssessmentDetailsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    assessmentId: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    isReadyForMigration: Schema.optional(Schema.Boolean),
    assessmentTargetType: Schema.optional(Schema.String),
    migrationBlockersCount: Schema.optional(Schema.Number),
    successList: Schema.optional(Schema.Array(Schema.String)),
    warningList: Schema.optional(Schema.Array(Schema.String)),
    errorList: Schema.optional(Schema.Array(Schema.String)),
    framework: Schema.optional(Schema.String),
    frameworkVersion: Schema.optional(Schema.String),
    lastUpdatedTime: Schema.optional(Schema.String),
    webServerId: Schema.optional(Schema.String),
    webServerType: Schema.optional(Schema.String),
    webSiteName: Schema.optional(Schema.String),
    enqueueTime: Schema.optional(Schema.String),
    solutionName: Schema.optional(Schema.String),
    port: Schema.optional(Schema.Number),
    extendedInfo: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  });
const WebSiteMigrationDetailsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.optional(Schema.String),
    migrationPhase: Schema.optional(Schema.String),
    progressPercentage: Schema.optional(Schema.Number),
    targetAppServiceArmId: Schema.optional(Schema.String),
    lastUpdatedTime: Schema.optional(Schema.String),
    webServerId: Schema.optional(Schema.String),
    webServerType: Schema.optional(Schema.String),
    webSiteName: Schema.optional(Schema.String),
    enqueueTime: Schema.optional(Schema.String),
    solutionName: Schema.optional(Schema.String),
    port: Schema.optional(Schema.Number),
    extendedInfo: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  },
);
const MigrateProjectSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(
    Schema.suspend(() => MigrateProjectPropertiesSchema),
  ),
  eTag: Schema.optional(Schema.String),
  location: Schema.optional(Schema.String),
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
const MigrateProjectPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    registeredTools: Schema.optional(
      Schema.Array(
        Schema.Literals([
          "ServerDiscovery",
          "ServerAssessment",
          "ServerMigration",
          "Cloudamize",
          "Turbonomic",
          "Zerto",
          "CorentTech",
          "ServerAssessmentV1",
          "ServerMigration_Replication",
          "Carbonite",
          "DataMigrationAssistant",
          "DatabaseMigrationService",
          "Device42",
          "JetStream",
          "RackWare",
          "UnifyCloud",
          "Flexera",
          "ServerDiscovery_Import",
          "Lakeside",
          "AppServiceMigrationAssistant",
          "Movere",
          "CloudSphere",
          "Modernization",
          "ServerMigration_DataReplication",
          "Unknown",
        ]),
      ),
    ),
    serviceEndpoint: Schema.optional(Schema.String),
    summary: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.suspend(() => ProjectSummarySchema),
      ),
    ),
    lastSummaryRefreshedTime: Schema.optional(Schema.String),
    refreshSummaryState: Schema.optional(
      Schema.Literals(["Started", "InProgress", "Completed", "Failed"]),
    ),
    utilityStorageAccountId: Schema.optional(Schema.String),
    publicNetworkAccess: Schema.optional(
      Schema.Literals(["NotSpecified", "Enabled", "Disabled"]),
    ),
    privateEndpointConnections: Schema.optional(
      Schema.Array(Schema.suspend(() => PrivateEndpointConnectionSchema)),
    ),
  });
const ProjectSummarySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  instanceType: Schema.optional(Schema.String),
  refreshSummaryState: Schema.optional(
    Schema.Literals(["Started", "InProgress", "Completed", "Failed"]),
  ),
  lastSummaryRefreshedTime: Schema.optional(Schema.String),
  extendedSummary: Schema.optional(Schema.Record(Schema.String, Schema.String)),
});
const PrivateEndpointConnectionPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provisioningState: Schema.optional(
      Schema.Literals([
        "Accepted",
        "InProgress",
        "Succeeded",
        "Failed",
        "Canceled",
      ]),
    ),
    privateEndpoint: Schema.optional(Schema.suspend(() => ResourceIdSchema)),
    privateLinkServiceConnectionState: Schema.optional(
      Schema.suspend(() => PrivateLinkServiceConnectionStateSchema),
    ),
  });
const ResourceIdSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
});
const AadAppDetailsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  tenantId: Schema.optional(Schema.String),
  applicationId: Schema.optional(Schema.String),
});
const PrivateEndpointConnectionProxySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    eTag: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.suspend(() => PrivateEndpointConnectionProxyPropertiesSchema),
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
  });
const PrivateEndpointConnectionProxyPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    remotePrivateEndpoint: Schema.optional(
      Schema.suspend(() => PrivateEndpointDetailsSchema),
    ),
    status: Schema.optional(
      Schema.Literals(["Succeeded", "Failed", "Cancelled", "Running"]),
    ),
  });
const PrivateEndpointDetailsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  manualPrivateLinkServiceConnections: Schema.optional(
    Schema.Array(Schema.suspend(() => PrivateLinkServiceConnectionSchema)),
  ),
  privateLinkServiceConnections: Schema.optional(
    Schema.Array(Schema.suspend(() => PrivateLinkServiceConnectionSchema)),
  ),
  privateLinkServiceProxies: Schema.optional(
    Schema.Array(Schema.suspend(() => PrivateLinkServiceProxySchema)),
  ),
  connectionDetails: Schema.optional(
    Schema.Array(Schema.suspend(() => IpConfigurationSchema)),
  ),
});
const PrivateLinkServiceConnectionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    groupIds: Schema.optional(Schema.Array(Schema.String)),
    requestMessage: Schema.optional(Schema.String),
  });
const PrivateLinkServiceProxySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.optional(Schema.String),
    groupConnectivityInformation: Schema.optional(
      Schema.Array(Schema.suspend(() => GroupConnectivityInformationSchema)),
    ),
    remotePrivateEndpointConnection: Schema.optional(
      Schema.suspend(() => ResourceIdSchema),
    ),
    remotePrivateLinkServiceConnectionState: Schema.optional(
      Schema.suspend(() => PrivateLinkServiceConnectionStateSchema),
    ),
  },
);
const GroupConnectivityInformationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    groupId: Schema.optional(Schema.String),
    memberName: Schema.optional(Schema.String),
    customerVisibleFqdns: Schema.optional(Schema.Array(Schema.String)),
    internalFqdn: Schema.optional(Schema.String),
    redirectMapId: Schema.optional(Schema.String),
    privateLinkServiceArmRegion: Schema.optional(Schema.String),
  });
const IpConfigurationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  privateIpAddress: Schema.optional(Schema.String),
  linkIdentifier: Schema.optional(Schema.String),
  groupId: Schema.optional(Schema.String),
  memberName: Schema.optional(Schema.String),
});
const PrivateLinkResourcePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requiredMembers: Schema.optional(Schema.Array(Schema.String)),
    requiredZoneNames: Schema.optional(Schema.Array(Schema.String)),
    groupId: Schema.optional(Schema.String),
  });
const HypervSiteSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const ImportSiteSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const MasterSiteSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const ServerSiteResourceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const VmwareSiteSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const SitePropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  masterSiteId: Schema.optional(Schema.String),
  servicePrincipalIdentityDetails: Schema.optional(
    Schema.suspend(() => SiteSpnPropertiesSchema),
  ),
  agentDetails: Schema.optional(
    Schema.suspend(() => SiteAgentPropertiesSchema),
  ),
  applianceName: Schema.optional(Schema.String),
  discoverySolutionId: Schema.optional(Schema.String),
  serviceEndpoint: Schema.optional(Schema.String),
  provisioningState: Schema.optional(
    Schema.suspend(() => ProvisioningStateSchema),
  ),
});
const SiteSpnPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  tenantId: Schema.optional(Schema.String),
  applicationId: Schema.optional(Schema.String),
  objectId: Schema.optional(Schema.String),
  audience: Schema.optional(Schema.String),
  aadAuthority: Schema.optional(Schema.String),
  rawCertData: Schema.optional(Schema.String),
});
const SiteAgentPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  version: Schema.optional(Schema.String),
  lastHeartBeatUtc: Schema.optional(Schema.String),
  keyVaultUri: Schema.optional(Schema.String),
  keyVaultId: Schema.optional(Schema.String),
});
const HypervSiteUpdatePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    servicePrincipalIdentityDetails: Schema.optional(
      Schema.suspend(() => SiteSpnPropertiesSchema),
    ),
    agentDetails: Schema.optional(
      Schema.suspend(() => SiteAgentPropertiesSchema),
    ),
    applianceName: Schema.optional(Schema.String),
    discoverySolutionId: Schema.optional(Schema.String),
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
  });
const DependencyMapServiceMapextensionsDependencyMapRequestFiltersSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    machineIds: Schema.optional(Schema.Array(Schema.String)),
    processIds: Schema.optional(Schema.Array(Schema.String)),
  });
const HypervClusterSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const HypervClusterPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    createdTimestamp: Schema.optional(Schema.String),
    updatedTimestamp: Schema.optional(Schema.String),
    fqdn: Schema.optional(Schema.String),
    functionalLevel: Schema.optional(Schema.Number),
    status: Schema.optional(Schema.String),
    runAsAccountId: Schema.optional(Schema.String),
    hostFqdnList: Schema.optional(Schema.Array(Schema.String)),
    errors: Schema.optional(
      Schema.Array(Schema.suspend(() => HealthErrorDetailsSchema)),
    ),
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
  },
);
const HealthErrorDetailsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  message: Schema.optional(Schema.String),
  messageParameters: Schema.optional(
    Schema.Record(Schema.String, Schema.String),
  ),
  applianceName: Schema.optional(Schema.String),
  id: Schema.optional(Schema.Number),
  code: Schema.optional(Schema.String),
  possibleCauses: Schema.optional(Schema.String),
  recommendedAction: Schema.optional(Schema.String),
  severity: Schema.optional(Schema.String),
  summaryMessage: Schema.optional(Schema.String),
  source: Schema.optional(Schema.suspend(() => HealthErrorDetailsSourceSchema)),
  updatedTimeStamp: Schema.optional(Schema.String),
  runAsAccountId: Schema.optional(Schema.String),
  discoveryScope: Schema.optional(
    Schema.suspend(() => HealthErrorDetailsDiscoveryScopeSchema),
  ),
});
const HealthErrorDetailsSourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "RefreshFabricLayout",
    "RefreshFabricLayoutGuest",
    "RefreshFabricLayoutDependencyMap",
  ]);
const HealthErrorDetailsDiscoveryScopeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "AppsAndRoles",
    "DependencyMap",
    "StaticData",
    "SQLServerConnectionInfo",
    "DiscoveryTargets",
  ]);
const DiscoveryScopeErrorSummarySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    affectedResourceType: Schema.String,
    affectedObjectsCount: Schema.Number,
    discoveryScope: Schema.suspend(() => DiscoveryScopesSchema),
  });
const DiscoveryScopesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "AppsAndRoles",
  "DependencyMap",
  "StaticData",
  "SQLServerConnectionInfo",
]);
const RequestExportMachineErrorsPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    discoveryScope: Schema.optional(
      Schema.suspend(() => ExportMachineErrorsPropertiesSchema),
    ),
  });
const ExportMachineErrorsPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "AppsAndRoles",
    "DependencyMap",
    "StaticData",
    "SQLServerConnectionInfo",
  ]);
const HypervHostSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const HypervHostPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  createdTimestamp: Schema.optional(Schema.String),
  updatedTimestamp: Schema.optional(Schema.String),
  fqdn: Schema.optional(Schema.String),
  runAsAccountId: Schema.optional(Schema.String),
  version: Schema.optional(Schema.String),
  errors: Schema.optional(
    Schema.Array(Schema.suspend(() => HealthErrorDetailsSchema)),
  ),
  provisioningState: Schema.optional(
    Schema.suspend(() => ProvisioningStateSchema),
  ),
});
const HypervJobSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const JobPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  status: Schema.optional(Schema.String),
  startTime: Schema.optional(Schema.String),
  endTime: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
  clientRequestId: Schema.optional(Schema.String),
  activityId: Schema.optional(Schema.String),
  errors: Schema.optional(
    Schema.Array(Schema.suspend(() => ErrorDetailsSchema)),
  ),
  provisioningState: Schema.optional(
    Schema.suspend(() => ProvisioningStateSchema),
  ),
});
const ErrorDetailsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  code: Schema.optional(Schema.String),
  message: Schema.optional(Schema.String),
  possibleCauses: Schema.optional(Schema.String),
  recommendedAction: Schema.optional(Schema.String),
  severity: Schema.optional(Schema.String),
  isAgentReportedError: Schema.optional(Schema.Boolean),
  agentErrorCode: Schema.optional(Schema.String),
  agentErrorMessage: Schema.optional(Schema.String),
  agentErrorPossibleCauses: Schema.optional(Schema.String),
  agentErrorRecommendedAction: Schema.optional(Schema.String),
});
const SiteHealthSummarySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  applianceName: Schema.optional(Schema.String),
  errorMessage: Schema.optional(Schema.String),
  summaryMessage: Schema.optional(Schema.String),
  errorId: Schema.optional(Schema.Number),
  errorCode: Schema.optional(Schema.String),
  affectedObjectsCount: Schema.optional(Schema.Number),
  hitCount: Schema.optional(Schema.Number),
  severity: Schema.optional(Schema.String),
  remediationGuidance: Schema.optional(Schema.String),
  affectedResourceType: Schema.optional(Schema.String),
  affectedResources: Schema.optional(Schema.Array(Schema.String)),
  fabricLayoutUpdateSources: Schema.optional(
    Schema.Array(
      Schema.suspend(
        () => SiteHealthSummaryFabricLayoutUpdateSourcesItemSchema,
      ),
    ),
  ),
});
const SiteHealthSummaryFabricLayoutUpdateSourcesItemSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "RefreshFabricLayout",
    "RefreshFabricLayoutGuest",
    "RefreshFabricLayoutDependencyMap",
  ]);
const HypervMachineSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const HypervMachinePropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    instanceUuid: Schema.optional(Schema.String),
    hostFqdn: Schema.optional(Schema.String),
    hostId: Schema.optional(Schema.String),
    generation: Schema.optional(Schema.Number),
    version: Schema.optional(Schema.String),
    highAvailability: Schema.optional(
      Schema.suspend(() => HighAvailabilitySchema),
    ),
    clusterFqdn: Schema.optional(Schema.String),
    clusterId: Schema.optional(Schema.String),
    maxMemoryMb: Schema.optional(Schema.Number),
    isDynamicMemoryEnabled: Schema.optional(Schema.Boolean),
    disks: Schema.optional(
      Schema.Array(Schema.suspend(() => HypervDiskSchema)),
    ),
    networkAdapters: Schema.optional(
      Schema.Array(Schema.suspend(() => HypervNetworkAdapterSchema)),
    ),
    managementServerType: Schema.optional(Schema.String),
    secureBootTemplateId: Schema.optional(Schema.String),
    secureBootEnabled: Schema.optional(Schema.Boolean),
    secureBootTemplate: Schema.optional(Schema.String),
    tpmEnabled: Schema.optional(Schema.Boolean),
    ksdEnabled: Schema.optional(Schema.Boolean),
    shieldingRequested: Schema.optional(Schema.Boolean),
    dataProtectionRequested: Schema.optional(Schema.Boolean),
    encryptStateAndVmMigrationTraffic: Schema.optional(Schema.Boolean),
    virtualizationBasedSecurityOptOut: Schema.optional(Schema.Boolean),
    powerStatus: Schema.optional(Schema.String),
    vmFqdn: Schema.optional(Schema.String),
    vmConfigurationFileLocation: Schema.optional(Schema.String),
    firmware: Schema.optional(Schema.String),
    guestOsDetails: Schema.optional(Schema.suspend(() => GuestOsDetailsSchema)),
    numberOfApplications: Schema.optional(Schema.Number),
    guestDetailsDiscoveryTimestamp: Schema.optional(Schema.String),
    isGuestDetailsDiscoveryInProgress: Schema.optional(Schema.Boolean),
    dependencyMapping: Schema.optional(Schema.String),
    dependencyMappingStartTime: Schema.optional(Schema.String),
    dependencyMappingEndTime: Schema.optional(Schema.String),
    runAsAccountId: Schema.optional(Schema.String),
    applianceNames: Schema.optional(Schema.Array(Schema.String)),
    errors: Schema.optional(
      Schema.Array(Schema.suspend(() => HealthErrorDetailsSchema)),
    ),
    applicationDiscovery: Schema.optional(
      Schema.suspend(() => ApplicationDiscoverySchema),
    ),
    dependencyMapDiscovery: Schema.optional(
      Schema.suspend(() => DependencyMapDiscoverySchema),
    ),
    staticDiscovery: Schema.optional(
      Schema.suspend(() => StaticDiscoverySchema),
    ),
    sqlDiscovery: Schema.optional(Schema.suspend(() => SqlDiscoverySchema)),
    webAppDiscovery: Schema.optional(
      Schema.suspend(() => WebAppDiscoverySchema),
    ),
    oracleDiscovery: Schema.optional(
      Schema.suspend(() => OracleDiscoverySchema),
    ),
    springBootDiscovery: Schema.optional(
      Schema.suspend(() => SpringBootDiscoverySchema),
    ),
    iisDiscovery: Schema.optional(Schema.suspend(() => WebAppDiscoverySchema)),
    tomcatDiscovery: Schema.optional(
      Schema.suspend(() => WebAppDiscoverySchema),
    ),
    appsAndRoles: Schema.optional(Schema.suspend(() => AppsAndRolesSchema)),
    productSupportStatus: Schema.optional(
      Schema.suspend(() => ProductSupportStatusSchema),
    ),
    numberOfProcessorCore: Schema.optional(Schema.Number),
    allocatedMemoryInMb: Schema.optional(Schema.Number),
    operatingSystemDetails: Schema.optional(
      Schema.suspend(() => OperatingSystemSchema),
    ),
    biosSerialNumber: Schema.optional(Schema.String),
    biosGuid: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    isDeleted: Schema.optional(Schema.Boolean),
    createdTimestamp: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    updatedTimestamp: Schema.optional(Schema.String),
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
  },
);
const HighAvailabilitySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Unknown",
  "No",
  "Yes",
]);
const HypervDiskSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  instanceId: Schema.optional(Schema.String),
  vhdId: Schema.optional(Schema.String),
  maxSizeInBytes: Schema.optional(Schema.Number),
  name: Schema.optional(Schema.String),
  diskType: Schema.optional(Schema.String),
  lun: Schema.optional(Schema.Number),
  path: Schema.optional(Schema.String),
});
const HypervNetworkAdapterSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  networkId: Schema.optional(Schema.String),
  subnetName: Schema.optional(Schema.String),
  staticIpAddress: Schema.optional(Schema.String),
  nicType: Schema.optional(Schema.String),
  nicId: Schema.optional(Schema.String),
  macAddress: Schema.optional(Schema.String),
  ipAddressList: Schema.optional(Schema.Array(Schema.String)),
  networkName: Schema.optional(Schema.String),
  ipAddressType: Schema.optional(Schema.String),
});
const GuestOsDetailsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  osType: Schema.optional(Schema.String),
  osName: Schema.optional(Schema.String),
  osVersion: Schema.optional(Schema.String),
  osArchitecture: Schema.optional(Schema.String),
});
const ApplicationDiscoverySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  discoveryScopeStatus: Schema.optional(
    Schema.suspend(() => ApplicationDiscoveryScopeStatusSchema),
  ),
  errors: Schema.optional(
    Schema.Array(Schema.suspend(() => HealthErrorDetailsSchema)),
  ),
  hydratedRunAsAccountId: Schema.optional(Schema.String),
});
const ApplicationDiscoveryScopeStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "DiscoverySucceededAtleastOnce",
    "DiscoveryFailed",
    "RunAsAccountNotAssociated",
    "DiscoveryNotStarted",
    "DiscoveryInProgress",
    "Disabled",
    "DiscoveryPartiallySucceded",
    "DiscoverySucceeded",
  ]);
const DependencyMapDiscoverySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  discoveryScopeStatus: Schema.optional(
    Schema.suspend(() => DependencyMapDiscoveryScopeStatusSchema),
  ),
  errors: Schema.optional(
    Schema.Array(Schema.suspend(() => HealthErrorDetailsSchema)),
  ),
  hydratedRunAsAccountId: Schema.optional(Schema.String),
});
const DependencyMapDiscoveryScopeStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "DiscoverySucceededAtleastOnce",
    "DiscoveryFailed",
    "RunAsAccountNotAssociated",
    "DiscoveryNotStarted",
    "DiscoveryInProgress",
    "Disabled",
    "DiscoveryPartiallySucceded",
    "DiscoverySucceeded",
  ]);
const StaticDiscoverySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  discoveryScopeStatus: Schema.optional(
    Schema.suspend(() => StaticDiscoveryScopeStatusSchema),
  ),
  errors: Schema.optional(
    Schema.Array(Schema.suspend(() => HealthErrorDetailsSchema)),
  ),
  hydratedRunAsAccountId: Schema.optional(Schema.String),
});
const StaticDiscoveryScopeStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "DiscoverySucceededAtleastOnce",
    "DiscoveryFailed",
    "RunAsAccountNotAssociated",
    "DiscoveryNotStarted",
    "DiscoveryInProgress",
    "Disabled",
    "DiscoveryPartiallySucceded",
    "DiscoverySucceeded",
  ]);
const SqlDiscoverySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  successfullyDiscoveredServerCount: Schema.optional(Schema.Number),
  totalServerCount: Schema.optional(Schema.Number),
  sqlMetadataHydratedRunAsAccountId: Schema.optional(Schema.String),
  sqlMetadataDiscoveryPipe: Schema.optional(
    Schema.suspend(() => SqlMetadataDiscoveryPipeSchema),
  ),
  discoveryScopeStatus: Schema.optional(
    Schema.suspend(() => SQLDiscoveryScopeStatusSchema),
  ),
});
const SqlMetadataDiscoveryPipeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Unknown",
    "VMware",
    "PowerShell",
    "SSH",
    "CIM",
    "Other",
  ]);
const SQLDiscoveryScopeStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "DiscoverySucceededAtleastOnce",
    "DiscoveryFailed",
    "RunAsAccountNotAssociated",
    "DiscoveryNotStarted",
    "DiscoveryInProgress",
    "Disabled",
    "DiscoveryPartiallySucceded",
    "DiscoverySucceeded",
  ]);
const WebAppDiscoverySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  totalWebServerCount: Schema.optional(Schema.Number),
  totalWebApplicationCount: Schema.optional(Schema.Number),
  discoveryScopeStatus: Schema.optional(
    Schema.suspend(() => DiscoveryScopeStatusSchema),
  ),
});
const DiscoveryScopeStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "DiscoverySucceededAtleastOnce",
  "DiscoveryFailed",
  "RunAsAccountNotAssociated",
  "DiscoveryNotStarted",
  "DiscoveryInProgress",
  "Disabled",
  "DiscoveryPartiallySucceded",
  "DiscoverySucceeded",
]);
const OracleDiscoverySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  totalInstanceCount: Schema.optional(Schema.Number),
  totalDatabaseCount: Schema.optional(Schema.Number),
  shallowDiscoveryStatus: Schema.optional(
    Schema.suspend(() => ShallowDiscoveryStatusSchema),
  ),
  discoveryScopeStatus: Schema.optional(
    Schema.suspend(() => DiscoveryScopeStatusSchema),
  ),
});
const ShallowDiscoveryStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "DiscoverySucceededAtleastOnce",
    "DiscoveryFailed",
    "RunAsAccountNotAssociated",
    "DiscoveryNotStarted",
    "DiscoveryInProgress",
    "Disabled",
    "DiscoveryPartiallySucceded",
    "DiscoverySucceeded",
  ]);
const SpringBootDiscoverySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  totalInstanceCount: Schema.optional(Schema.Number),
  totalApplicationCount: Schema.optional(Schema.Number),
  shallowDiscoveryStatus: Schema.optional(
    Schema.suspend(() => ShallowDiscoveryStatusSchema),
  ),
  discoveryScopeStatus: Schema.optional(
    Schema.suspend(() => DiscoveryScopeStatusSchema),
  ),
});
const AppsAndRolesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  applications: Schema.optional(
    Schema.Array(Schema.suspend(() => ApplicationSchema)),
  ),
  webApplications: Schema.optional(
    Schema.Array(Schema.suspend(() => WebApplicationAppsAndRolesModelSchema)),
  ),
  features: Schema.optional(Schema.Array(Schema.suspend(() => FeatureSchema))),
  sqlServers: Schema.optional(
    Schema.Array(Schema.suspend(() => SqlServerApplicationSchema)),
  ),
  sharePointServers: Schema.optional(
    Schema.Array(Schema.suspend(() => SharePointServerSchema)),
  ),
  systemCenters: Schema.optional(
    Schema.Array(Schema.suspend(() => SystemCenterSchema)),
  ),
  bizTalkServers: Schema.optional(
    Schema.Array(Schema.suspend(() => BizTalkServerSchema)),
  ),
  exchangeServers: Schema.optional(
    Schema.Array(Schema.suspend(() => ExchangeServerSchema)),
  ),
  otherDatabases: Schema.optional(
    Schema.Array(Schema.suspend(() => OtherDatabaseSchema)),
  ),
});
const ApplicationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  version: Schema.optional(Schema.String),
  provider: Schema.optional(Schema.String),
});
const WebApplicationAppsAndRolesModelSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    platform: Schema.optional(Schema.String),
    groupName: Schema.optional(Schema.String),
    webServer: Schema.optional(Schema.String),
    applicationPool: Schema.optional(Schema.String),
  });
const FeatureSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  featureType: Schema.optional(Schema.String),
  parent: Schema.optional(Schema.String),
  status: Schema.optional(Schema.String),
});
const SqlServerApplicationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  edition: Schema.optional(Schema.String),
  servicePack: Schema.optional(Schema.String),
  version: Schema.optional(Schema.String),
  clustered: Schema.optional(Schema.String),
  clusterName: Schema.optional(Schema.String),
  dnsHostName: Schema.optional(Schema.String),
  port: Schema.optional(Schema.String),
  commaSeparatedIps: Schema.optional(Schema.String),
  status: Schema.optional(Schema.String),
  isNamedPipeEnabled: Schema.optional(Schema.Boolean),
  isTcpIpEnabled: Schema.optional(Schema.Boolean),
  namedPipeName: Schema.optional(Schema.String),
});
const SharePointServerSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  productName: Schema.optional(Schema.String),
  isEnterprise: Schema.optional(Schema.Boolean),
  status: Schema.optional(Schema.String),
  version: Schema.optional(Schema.String),
});
const SystemCenterSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  productName: Schema.optional(Schema.String),
  status: Schema.optional(Schema.String),
  version: Schema.optional(Schema.String),
});
const BizTalkServerSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  productName: Schema.optional(Schema.String),
  status: Schema.optional(Schema.String),
});
const ExchangeServerSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  productName: Schema.optional(Schema.String),
  edition: Schema.optional(Schema.String),
  roles: Schema.optional(Schema.String),
  servicePack: Schema.optional(Schema.String),
  version: Schema.optional(Schema.String),
});
const OtherDatabaseSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  databaseType: Schema.optional(Schema.String),
  instance: Schema.optional(Schema.String),
  version: Schema.optional(Schema.String),
});
const esuStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Unknown",
  "Active",
  "InActive",
]);
const supportStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Unknown",
  "Mainstream",
  "Extended",
]);
const esuYearSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Unknown",
  "FirstYear",
  "SecondYear",
  "ThirdYear",
  "UpgradeYear",
]);
const OperatingSystemSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  osType: Schema.optional(Schema.String),
  osName: Schema.optional(Schema.String),
  osVersion: Schema.optional(Schema.String),
  osArchitecture: Schema.optional(Schema.String),
});
const HypervMachineUpdatePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    firmware: Schema.optional(Schema.String),
    runAsAccountId: Schema.optional(Schema.String),
    productSupportStatus: Schema.optional(
      Schema.suspend(() => ProductSupportStatusSchema),
    ),
    numberOfProcessorCore: Schema.optional(Schema.Number),
    allocatedMemoryInMb: Schema.optional(Schema.Number),
    operatingSystemDetails: Schema.optional(
      Schema.suspend(() => OperatingSystemSchema),
    ),
    biosSerialNumber: Schema.optional(Schema.String),
    biosGuid: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  });
const MachineSoftwareInventoryPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    appsAndRoles: Schema.optional(Schema.suspend(() => AppsAndRolesSchema)),
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
  });
const HypervVmSoftwareInventorySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
const OperationStatusErrorSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  code: Schema.optional(Schema.String),
  message: Schema.optional(Schema.String),
});
const OperationStatusPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    result: Schema.optional(Schema.String),
  });
const HypervRunAsAccountResourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
const RunAsAccountPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  displayName: Schema.optional(Schema.String),
  credentialType: Schema.optional(Schema.String),
  createdTimestamp: Schema.optional(Schema.String),
  updatedTimestamp: Schema.optional(Schema.String),
  applianceName: Schema.optional(Schema.String),
  provisioningState: Schema.optional(
    Schema.suspend(() => ProvisioningStateSchema),
  ),
});
const DependencyMapMachineInputSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    machineId: Schema.optional(Schema.String),
    isDependencyMapToBeEnabled: Schema.optional(Schema.Boolean),
  });
const MachineMetadataSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  machineArmId: Schema.String,
  dependencyMapping: Schema.String,
  tags: Schema.Record(Schema.String, Schema.String),
});
const ImportSitePropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  discoverySolutionId: Schema.optional(Schema.String),
  masterSiteId: Schema.optional(Schema.String),
  serviceEndpoint: Schema.optional(Schema.String),
  provisioningState: Schema.optional(
    Schema.suspend(() => ProvisioningStateSchema),
  ),
});
const ImportSiteUpdatePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    discoverySolutionId: Schema.optional(Schema.String),
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
  });
const DeleteImportMachinesJobSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  },
);
const DeleteImportedMachinesJobPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    blobName: Schema.optional(Schema.String),
    errorSasUri: Schema.optional(Schema.String),
    jobState: Schema.optional(
      Schema.suspend(() => DeleteImportedMachinesJobPropertiesJobStateSchema),
    ),
    numberOfMachinesDeleted: Schema.optional(Schema.Number),
    deletionConfirmation: Schema.optional(Schema.Boolean),
    errors: Schema.optional(Schema.Array(Schema.String)),
    status: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
  });
const DeleteImportedMachinesJobPropertiesJobStateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Unknown",
    "Verified",
    "VerifiedWithErrors",
    "Completed",
    "Failed",
  ]);
const ExportImportedMachinesJobSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.suspend(() => ExportImportedMachinesJobEntityPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  });
const ExportImportedMachinesJobEntityPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    blobName: Schema.optional(Schema.String),
    sasUri: Schema.optional(Schema.String),
  });
const ImportMachinesJobSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.optional(Schema.String),
  properties: Schema.optional(
    Schema.suspend(() => ImportMachinesJobPropertiesSchema),
  ),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  status: Schema.optional(Schema.String),
  startTime: Schema.optional(Schema.String),
  endTime: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
});
const ImportMachinesJobPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    blobName: Schema.optional(Schema.String),
    blobSasUri: Schema.optional(Schema.String),
    jobResult: Schema.optional(Schema.suspend(() => JobResultSchema)),
    numberOfMachinesImported: Schema.optional(Schema.Number),
    blobCreationTimeStamp: Schema.optional(Schema.String),
    errorSummary: Schema.optional(Schema.suspend(() => JobErrorSummarySchema)),
  });
const JobResultSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Unknown",
  "Completed",
  "CompletedWithWarnings",
  "CompletedWithErrors",
  "Failed",
  "WaitingForBlobUpload",
  "InProgress",
]);
const JobErrorSummarySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  errors: Schema.optional(Schema.Array(Schema.String)),
  errorCount: Schema.optional(Schema.Number),
  warningCount: Schema.optional(Schema.Number),
});
const ImportJobSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const ImportMachineSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const ImportMachinePropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    firmware: Schema.optional(Schema.String),
    percentageCpuUtilization: Schema.optional(Schema.Number),
    percentageMemoryUtilization: Schema.optional(Schema.Number),
    numberOfDisks: Schema.optional(Schema.Number),
    totalDiskReadOperationsPerSecond: Schema.optional(Schema.Number),
    totalDiskWriteOperationsPerSecond: Schema.optional(Schema.Number),
    totalDiskWriteThroughput: Schema.optional(Schema.Number),
    totalDiskReadThroughput: Schema.optional(Schema.Number),
    macAddress: Schema.optional(Schema.String),
    ipAddresses: Schema.optional(Schema.Array(Schema.String)),
    machineId: Schema.optional(Schema.String),
    machineManagerId: Schema.optional(Schema.String),
    numberOfNetworkAdapters: Schema.optional(Schema.Number),
    networkInThroughput: Schema.optional(Schema.Number),
    networkOutThroughput: Schema.optional(Schema.Number),
    serverType: Schema.optional(Schema.String),
    hypervisor: Schema.optional(Schema.String),
    hypervisorVersionNumber: Schema.optional(Schema.String),
    disks: Schema.optional(
      Schema.Array(Schema.suspend(() => WebRoleImportDiskSchema)),
    ),
    vmFqdn: Schema.optional(Schema.String),
    storageInUseGb: Schema.optional(Schema.Number),
    numberOfProcessorCore: Schema.optional(Schema.Number),
    allocatedMemoryInMb: Schema.optional(Schema.Number),
    operatingSystemDetails: Schema.optional(
      Schema.suspend(() => WebRoleOperatingSystemSchema),
    ),
    biosSerialNumber: Schema.optional(Schema.String),
    biosGuid: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    isDeleted: Schema.optional(Schema.Boolean),
    createdTimestamp: Schema.optional(Schema.String),
    updatedTimestamp: Schema.optional(Schema.String),
    tags: Schema.Record(Schema.String, Schema.String),
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
  },
);
const WebRoleImportDiskSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  megabytesPerSecondOfRead: Schema.optional(Schema.Number),
  megabytesPerSecondOfWrite: Schema.optional(Schema.Number),
  numberOfReadOperationsPerSecond: Schema.optional(Schema.Number),
  numberOfWriteOperationsPerSecond: Schema.optional(Schema.Number),
  maxSizeInBytes: Schema.optional(Schema.Number),
  name: Schema.optional(Schema.String),
  diskType: Schema.optional(Schema.String),
  lun: Schema.optional(Schema.Number),
  path: Schema.optional(Schema.String),
});
const WebRoleOperatingSystemSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  osType: Schema.optional(Schema.String),
  osName: Schema.optional(Schema.String),
  osVersion: Schema.optional(Schema.String),
  osArchitecture: Schema.optional(Schema.String),
});
const MasterSitePropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  publicNetworkAccess: Schema.optional(
    Schema.suspend(() => MasterSitePropertiesPublicNetworkAccessSchema),
  ),
  allowMultipleSites: Schema.optional(Schema.Boolean),
  sites: Schema.optional(Schema.Array(Schema.String)),
  customerStorageAccountArmId: Schema.optional(Schema.String),
  privateEndpointConnections: Schema.optional(
    Schema.Array(Schema.suspend(() => PrivateEndpointConnectionSchema)),
  ),
  nestedSites: Schema.optional(Schema.Array(Schema.String)),
  provisioningState: Schema.optional(
    Schema.suspend(() => ProvisioningStateSchema),
  ),
});
const MasterSitePropertiesPublicNetworkAccessSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "NotSpecified",
    "Enabled",
    "Disabled",
  ]);
const MasterSiteUpdatePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    publicNetworkAccess: Schema.optional(
      Schema.suspend(() => MasterSitePropertiesPublicNetworkAccessSchema),
    ),
    allowMultipleSites: Schema.optional(Schema.Boolean),
    sites: Schema.optional(Schema.Array(Schema.String)),
    customerStorageAccountArmId: Schema.optional(Schema.String),
  });
const PrivateEndpointConnectionPropertiesV2Schema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    groupIds: Schema.optional(Schema.Array(Schema.String)),
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
    privateEndpoint: Schema.optional(Schema.suspend(() => ResourceIdSchema)),
    privateLinkServiceConnectionState: Schema.optional(
      Schema.suspend(() => PrivateLinkServiceConnectionStateSchema),
    ),
  });
const PrivateLinkServiceConnectionStateStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Approved",
    "Pending",
    "Rejected",
    "Disconnected",
  ]);
const SqlSiteSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const SqlSitePropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  siteAppliancePropertiesCollection: Schema.optional(
    Schema.Array(Schema.suspend(() => SiteAppliancePropertiesSchema)),
  ),
  discoveryScenario: Schema.optional(
    Schema.suspend(() => SqlSitePropertiesDiscoveryScenarioSchema),
  ),
  serviceEndpoint: Schema.optional(Schema.String),
  provisioningState: Schema.optional(
    Schema.suspend(() => ProvisioningStateSchema),
  ),
});
const SiteAppliancePropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    servicePrincipalIdentityDetails: Schema.optional(
      Schema.suspend(() => SiteSpnPropertiesSchema),
    ),
    agentDetails: Schema.optional(
      Schema.suspend(() => SiteAgentPropertiesSchema),
    ),
    applianceName: Schema.optional(Schema.String),
  },
);
const SqlSitePropertiesDiscoveryScenarioSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Migrate", "DR"]);
const SqlSiteUpdatePropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    siteAppliancePropertiesCollection: Schema.optional(
      Schema.Array(Schema.suspend(() => SiteAppliancePropertiesSchema)),
    ),
    discoveryScenario: Schema.optional(
      Schema.suspend(() => SqlSitePropertiesDiscoveryScenarioSchema),
    ),
  },
);
const SqlDiscoverySiteDataSourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
const SqlDiscoverySiteDataSourcePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    discoverySiteId: Schema.optional(Schema.String),
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
  });
const SqlJobSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const SqlRunAsAccountSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const SqlAvailabilityGroupSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const SqlAvailabilityGroupPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    availabilityGroupName: Schema.optional(Schema.String),
    availabilityGroupType: Schema.optional(
      Schema.suspend(
        () => SqlAvailabilityGroupPropertiesAvailabilityGroupTypeSchema,
      ),
    ),
    isMultiSubNet: Schema.optional(Schema.Boolean),
    clusterName: Schema.optional(Schema.String),
    availabilityReplicas: Schema.optional(
      Schema.Array(
        Schema.suspend(() => SqlAvailabilityReplicaPropertiesSchema),
      ),
    ),
    parentReplicaOverviewList: Schema.optional(
      Schema.Array(Schema.suspend(() => SqlAvailabilityReplicaOverviewSchema)),
    ),
    isPartOfDistributedAvailabilityGroup: Schema.optional(Schema.Boolean),
    isDeleted: Schema.optional(Schema.Boolean),
    createdTimestamp: Schema.optional(Schema.String),
    updatedTimestamp: Schema.optional(Schema.String),
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
  });
const SqlAvailabilityGroupPropertiesAvailabilityGroupTypeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Unknown",
    "Traditional",
    "Distributed",
  ]);
const SqlAvailabilityReplicaPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    availabilityReplicaName: Schema.optional(Schema.String),
    availabilityReplicaId: Schema.optional(Schema.String),
    replicaType: Schema.optional(
      Schema.suspend(
        () =>
          SqlAvailabilityGroupSqlAvailabilityReplicaPropertiesReplicaTypeSchema,
      ),
    ),
    replicaState: Schema.optional(
      Schema.suspend(
        () =>
          SqlAvailabilityGroupSqlAvailabilityReplicaPropertiesReplicaStateSchema,
      ),
    ),
    replicaSyncStatus: Schema.optional(
      Schema.suspend(
        () =>
          SqlAvailabilityGroupSqlAvailabilityReplicaPropertiesReplicaSyncStatusSchema,
      ),
    ),
    replicaCommitMode: Schema.optional(
      Schema.suspend(
        () =>
          SqlAvailabilityGroupSqlAvailabilityReplicaPropertiesReplicaCommitModeSchema,
      ),
    ),
    replicaReadMode: Schema.optional(
      Schema.suspend(
        () =>
          SqlAvailabilityGroupSqlAvailabilityReplicaPropertiesReplicaReadModeSchema,
      ),
    ),
    replicaSeedMode: Schema.optional(
      Schema.suspend(
        () =>
          SqlAvailabilityGroupSqlAvailabilityReplicaPropertiesReplicaSeedModeSchema,
      ),
    ),
    sqlDatabaseReplicaInfo: Schema.optional(
      Schema.suspend(() => SqlDatabaseReplicaInfoSchema),
    ),
    sqlAvailabilityGroupReplicaInfo: Schema.optional(
      Schema.suspend(() => SqlAvailabilityGroupReplicaInfoSchema),
    ),
  });
const SqlAvailabilityGroupSqlAvailabilityReplicaPropertiesReplicaTypeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Unknown",
    "DatabaseReplica",
    "AvailabilityGroupReplica",
  ]);
const SqlAvailabilityGroupSqlAvailabilityReplicaPropertiesReplicaStateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Unknown",
    "Primary",
    "Secondary",
  ]);
const SqlAvailabilityGroupSqlAvailabilityReplicaPropertiesReplicaSyncStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Unknown",
    "Synchronized",
    "Unsynchronized",
  ]);
const SqlAvailabilityGroupSqlAvailabilityReplicaPropertiesReplicaCommitModeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Unknown",
    "Synchronous",
    "Asynchronous",
  ]);
const SqlAvailabilityGroupSqlAvailabilityReplicaPropertiesReplicaReadModeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Unknown",
    "None",
    "ReadOnly",
    "ReadWrite",
  ]);
const SqlAvailabilityGroupSqlAvailabilityReplicaPropertiesReplicaSeedModeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Unknown",
    "Manual",
    "Automatic",
  ]);
const SqlDatabaseReplicaInfoSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  hostName: Schema.optional(Schema.String),
  sqlServerName: Schema.optional(Schema.String),
  sqlServerArmId: Schema.optional(Schema.String),
});
const SqlAvailabilityGroupReplicaInfoSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clusterName: Schema.optional(Schema.String),
    availabilityGroupName: Schema.optional(Schema.String),
    availabilityGroupArmId: Schema.optional(Schema.String),
  });
const SqlAvailabilityReplicaOverviewSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    replicaState: Schema.optional(
      Schema.suspend(() => SqlAvailabilityReplicaOverviewReplicaStateSchema),
    ),
    availabilityReplicaId: Schema.optional(Schema.String),
    availabilityGroupArmId: Schema.optional(Schema.String),
    availabilityGroupName: Schema.optional(Schema.String),
  });
const SqlAvailabilityReplicaOverviewReplicaStateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Unknown",
    "Primary",
    "Secondary",
  ]);
const SqlDatabaseV2Schema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const SqlDatabasePropertiesV2Schema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    parentReplicaOverview: Schema.optional(
      Schema.suspend(() => SqlAvailabilityReplicaOverviewSchema),
    ),
    isDatabaseHighlyAvailable: Schema.optional(Schema.Boolean),
    fileMetadataList: Schema.optional(
      Schema.Array(Schema.suspend(() => FileMetaDataSchema)),
    ),
    hostname: Schema.optional(Schema.String),
    sqlServerName: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    sizeMb: Schema.optional(Schema.Number),
    databaseName: Schema.optional(Schema.String),
    sqlServerArmId: Schema.optional(Schema.String),
    compatibilityLevel: Schema.optional(Schema.String),
    isDeleted: Schema.optional(Schema.Boolean),
    errors: Schema.optional(Schema.Array(Schema.suspend(() => ErrorsSchema))),
    createdTimestamp: Schema.optional(Schema.String),
    updatedTimestamp: Schema.optional(Schema.String),
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
  },
);
const FileMetaDataSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  logicalName: Schema.optional(Schema.String),
  physicalFullName: Schema.optional(Schema.String),
  fileType: Schema.optional(Schema.suspend(() => FileTypeSchema)),
  sizeInMb: Schema.optional(Schema.Number),
  isMemoryOptimizedDataOptionEnabled: Schema.optional(Schema.Boolean),
});
const FileTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Rows",
  "Log",
  "Filestream",
  "NotSupported",
  "Fulltext",
]);
const ErrorsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  message: Schema.optional(Schema.String),
  messageParameters: Schema.optional(
    Schema.Record(Schema.String, Schema.String),
  ),
  applianceName: Schema.optional(Schema.String),
  id: Schema.optional(Schema.Number),
  code: Schema.optional(Schema.String),
  possibleCauses: Schema.optional(Schema.String),
  recommendedAction: Schema.optional(Schema.String),
  severity: Schema.optional(Schema.String),
  summaryMessage: Schema.optional(Schema.String),
  source: Schema.optional(
    Schema.suspend(
      () => MicrosoftAzureFDSWebRoleHealthErrorDetailsSourceSchema,
    ),
  ),
  updatedTimeStamp: Schema.optional(Schema.String),
  runAsAccountId: Schema.optional(Schema.String),
  discoveryScope: Schema.optional(
    Schema.suspend(() => HealthErrorDetailsDiscoveryScopeSchema),
  ),
});
const MicrosoftAzureFDSWebRoleHealthErrorDetailsSourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "RefreshFabricLayout",
    "RefreshFabricLayoutGuest",
    "RefreshFabricLayoutDependencyMap",
  ]);
const SqlServerV2Schema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const SqlServerPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  machineOverviewList: Schema.optional(
    Schema.Array(Schema.suspend(() => SqlMachineOverviewSchema)),
  ),
  numberOfAgDatabases: Schema.optional(Schema.Number),
  sqlFciProperties: Schema.optional(
    Schema.suspend(() => SqlFciPropertiesSchema),
  ),
  productSupportStatus: Schema.optional(
    Schema.suspend(() => ProductSupportStatusSchema),
  ),
  version: Schema.optional(Schema.String),
  numberOfUserDatabases: Schema.optional(Schema.Number),
  sumOfUserDatabasesSizeInMb: Schema.optional(Schema.Number),
  tempDbSizeInMb: Schema.optional(Schema.Number),
  maxServerMemoryInUseInMb: Schema.optional(Schema.Number),
  visibleOnlineCoreCount: Schema.optional(Schema.Number),
  numOfLogins: Schema.optional(Schema.Number),
  physicalCpuCount: Schema.optional(Schema.Number),
  logicalCpuCount: Schema.optional(Schema.Number),
  engineEdition: Schema.optional(Schema.String),
  edition: Schema.optional(Schema.String),
  isHighAvailabilityEnabled: Schema.optional(Schema.Boolean),
  isClustered: Schema.optional(Schema.Boolean),
  hyperthreadRatio: Schema.optional(Schema.Number),
  sqlStartTime: Schema.optional(Schema.String),
  machineArmIds: Schema.optional(Schema.Array(Schema.String)),
  runAsAccountId: Schema.optional(Schema.String),
  hydratedRunAsAccountId: Schema.optional(Schema.String),
  hostName: Schema.optional(Schema.String),
  sqlServerName: Schema.optional(Schema.String),
  portNumber: Schema.optional(Schema.Number),
  errors: Schema.optional(Schema.Array(Schema.suspend(() => ErrorsSchema))),
  tags: Schema.optional(
    Schema.Record(
      Schema.String,
      Schema.suspend(() => Azure_ResourceManager_ObjectSchema),
    ),
  ),
  isDeleted: Schema.optional(Schema.Boolean),
  createdTimestamp: Schema.optional(Schema.String),
  updatedTimestamp: Schema.optional(Schema.String),
  status: Schema.optional(Schema.suspend(() => SqlServerStatusSchema)),
  provisioningState: Schema.optional(
    Schema.suspend(() => ProvisioningStateSchema),
  ),
});
const SqlMachineOverviewSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  machineArmId: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
  fciRole: Schema.optional(
    Schema.suspend(() => SqlMachineOverviewFciRoleSchema),
  ),
});
const SqlMachineOverviewFciRoleSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Unknown",
    "NotApplicable",
    "ActiveNode",
    "PossibleOwnerNode",
  ]);
const SqlFciPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  state: Schema.optional(Schema.suspend(() => FCIInstanceStateSchema)),
  networkName: Schema.optional(Schema.String),
  isMultiSubnet: Schema.optional(Schema.Boolean),
  sharedDiskCount: Schema.optional(Schema.Number),
});
const FCIInstanceStateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Unknown",
  "Inherited",
  "Initializing",
  "Online",
  "Offline",
  "Failed",
  "Pending",
  "OnlinePending",
  "OfflinePending",
]);
const Azure_ResourceManager_ObjectSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
const SqlServerStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Unknown",
  "ContinuePending",
  "Paused",
  "PausePending",
  "Running",
  "StartPending",
  "Stopped",
  "StopPending",
]);
const SqlServerV2UpdatePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    numberOfAgDatabases: Schema.optional(Schema.Number),
    sqlFciProperties: Schema.optional(
      Schema.suspend(() => SqlFciPropertiesSchema),
    ),
    productSupportStatus: Schema.optional(
      Schema.suspend(() => ProductSupportStatusSchema),
    ),
    version: Schema.optional(Schema.String),
    numberOfUserDatabases: Schema.optional(Schema.Number),
    sumOfUserDatabasesSizeInMb: Schema.optional(Schema.Number),
    tempDbSizeInMb: Schema.optional(Schema.Number),
    maxServerMemoryInUseInMb: Schema.optional(Schema.Number),
    visibleOnlineCoreCount: Schema.optional(Schema.Number),
    numOfLogins: Schema.optional(Schema.Number),
    physicalCpuCount: Schema.optional(Schema.Number),
    logicalCpuCount: Schema.optional(Schema.Number),
    engineEdition: Schema.optional(Schema.String),
    edition: Schema.optional(Schema.String),
    isHighAvailabilityEnabled: Schema.optional(Schema.Boolean),
    isClustered: Schema.optional(Schema.Boolean),
    hyperthreadRatio: Schema.optional(Schema.Number),
    sqlStartTime: Schema.optional(Schema.String),
    runAsAccountId: Schema.optional(Schema.String),
    hydratedRunAsAccountId: Schema.optional(Schema.String),
    hostName: Schema.optional(Schema.String),
    sqlServerName: Schema.optional(Schema.String),
    portNumber: Schema.optional(Schema.Number),
    tags: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.suspend(() => Azure_ResourceManager_ObjectSchema),
      ),
    ),
    isDeleted: Schema.optional(Schema.Boolean),
    createdTimestamp: Schema.optional(Schema.String),
    updatedTimestamp: Schema.optional(Schema.String),
    status: Schema.optional(Schema.suspend(() => SqlServerStatusSchema)),
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
  });
const WebAppSiteSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const WebAppSitePropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  siteAppliancePropertiesCollection: Schema.optional(
    Schema.Array(Schema.suspend(() => SiteAppliancePropertiesSchema)),
  ),
  discoveryScenario: Schema.optional(
    Schema.suspend(() => WebAppSitePropertiesDiscoveryScenarioSchema),
  ),
  serviceEndpoint: Schema.optional(Schema.String),
  provisioningState: Schema.optional(
    Schema.suspend(() => ProvisioningStateSchema),
  ),
});
const WebAppSitePropertiesDiscoveryScenarioSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Migrate", "DR"]);
const WebAppSiteUpdatePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    siteAppliancePropertiesCollection: Schema.optional(
      Schema.Array(Schema.suspend(() => SiteAppliancePropertiesSchema)),
    ),
    discoveryScenario: Schema.optional(
      Schema.suspend(() => WebAppSitePropertiesDiscoveryScenarioSchema),
    ),
  });
const DiscoverySiteDataSourceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  },
);
const DiscoverySiteDataSourcePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    discoverySiteId: Schema.optional(Schema.String),
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
  });
const WebAppExtendedMachineSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const WebAppExtendedMachinePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    isDeleted: Schema.optional(Schema.Boolean),
    createdTimestamp: Schema.optional(Schema.String),
    updatedTimestamp: Schema.optional(Schema.String),
    errors: Schema.optional(
      Schema.Array(Schema.suspend(() => HealthErrorDetailsSchema)),
    ),
    hostName: Schema.optional(Schema.String),
    machineDisplayName: Schema.optional(Schema.String),
    machineId: Schema.optional(Schema.String),
    runAsAccountId: Schema.optional(Schema.String),
    hydratedRunAsAccountId: Schema.optional(Schema.String),
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
  });
const IisWebApplicationsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const IisWebApplicationPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    applications: Schema.optional(
      Schema.Array(Schema.suspend(() => IisApplicationUnitSchema)),
    ),
    virtualApplications: Schema.optional(
      Schema.Array(Schema.suspend(() => IisVirtualApplicationUnitSchema)),
    ),
    webServerId: Schema.optional(Schema.String),
    webServerName: Schema.optional(Schema.String),
    machineArmIds: Schema.optional(Schema.Array(Schema.String)),
    virtualPath: Schema.optional(Schema.String),
    physicalPath: Schema.optional(Schema.String),
    bindings: Schema.optional(
      Schema.Array(Schema.suspend(() => FrontEndBindingSchema)),
    ),
    frameworks: Schema.optional(
      Schema.Array(Schema.suspend(() => WebApplicationFrameworkSchema)),
    ),
    configurations: Schema.optional(
      Schema.Array(Schema.suspend(() => WebApplicationConfigurationUnitSchema)),
    ),
    directories: Schema.optional(
      Schema.Array(Schema.suspend(() => WebApplicationDirectoryUnitSchema)),
    ),
    displayName: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    staticFolders: Schema.optional(Schema.Array(Schema.String)),
    machineDisplayName: Schema.optional(Schema.String),
    isDeleted: Schema.optional(Schema.Boolean),
    createdTimestamp: Schema.optional(Schema.String),
    updatedTimestamp: Schema.optional(Schema.String),
    serverType: Schema.optional(Schema.String),
    errors: Schema.optional(
      Schema.Array(Schema.suspend(() => HealthErrorDetailsSchema)),
    ),
    applianceNames: Schema.optional(Schema.Array(Schema.String)),
    hasErrors: Schema.optional(Schema.Boolean),
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
  });
const IisApplicationUnitSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  applicationPoolName: Schema.optional(Schema.String),
  managedPipelineMode: Schema.optional(Schema.String),
  runtimeVersion: Schema.optional(Schema.String),
  enable32BitApiOnWin64: Schema.optional(Schema.Boolean),
  path: Schema.optional(Schema.suspend(() => DirectoryPathSchema)),
  directories: Schema.optional(
    Schema.Array(Schema.suspend(() => DirectoryPathSchema)),
  ),
});
const DirectoryPathSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  virtual: Schema.optional(Schema.String),
  physical: Schema.optional(Schema.String),
});
const IisVirtualApplicationUnitSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    isVirtualDirectory: Schema.optional(Schema.Boolean),
    path: Schema.optional(Schema.suspend(() => DirectoryPathSchema)),
    directories: Schema.optional(
      Schema.Array(Schema.suspend(() => DirectoryPathSchema)),
    ),
  });
const FrontEndBindingSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  protocol: Schema.optional(Schema.String),
  hostName: Schema.optional(Schema.String),
  port: Schema.optional(Schema.String),
  ipAddress: Schema.optional(Schema.String),
});
const WebApplicationFrameworkSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    name: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
  },
);
const WebApplicationConfigurationUnitSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    filePath: Schema.optional(Schema.String),
    localFilePath: Schema.optional(Schema.String),
    targetFilePath: Schema.optional(Schema.String),
    section: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    isDeploymentTimeEditable: Schema.optional(Schema.Boolean),
    identifier: Schema.optional(Schema.String),
  });
const WebApplicationDirectoryUnitSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    isEditable: Schema.optional(Schema.Boolean),
    sourcePaths: Schema.optional(Schema.Array(Schema.String)),
    localScratchPath: Schema.optional(Schema.String),
    mountPath: Schema.optional(Schema.String),
    sourceSize: Schema.optional(Schema.String),
  });
const IisWebApplicationsUpdatePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  });
const IisWebServersSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const IisWebServerPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  configurationLocation: Schema.optional(Schema.String),
  version: Schema.optional(Schema.String),
  machineIds: Schema.optional(Schema.Array(Schema.String)),
  webApplications: Schema.optional(Schema.Array(Schema.String)),
  displayName: Schema.optional(Schema.String),
  serverFqdn: Schema.optional(Schema.String),
  runAsAccountId: Schema.optional(Schema.String),
  isDeleted: Schema.optional(Schema.Boolean),
  createdTimestamp: Schema.optional(Schema.String),
  updatedTimestamp: Schema.optional(Schema.String),
  serverType: Schema.optional(Schema.String),
  errors: Schema.optional(
    Schema.Array(Schema.suspend(() => HealthErrorDetailsSchema)),
  ),
  applianceNames: Schema.optional(Schema.Array(Schema.String)),
  hasErrors: Schema.optional(Schema.Boolean),
  provisioningState: Schema.optional(
    Schema.suspend(() => ProvisioningStateSchema),
  ),
});
const WebAppRunAsAccountSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const TomcatWebApplicationsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const TomcatWebApplicationPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hasDatabaseDependency: Schema.optional(Schema.Boolean),
    isExternalLoggingConfigured: Schema.optional(Schema.Boolean),
    webServerId: Schema.optional(Schema.String),
    webServerName: Schema.optional(Schema.String),
    machineArmIds: Schema.optional(Schema.Array(Schema.String)),
    virtualPath: Schema.optional(Schema.String),
    physicalPath: Schema.optional(Schema.String),
    bindings: Schema.optional(
      Schema.Array(Schema.suspend(() => FrontEndBindingSchema)),
    ),
    frameworks: Schema.optional(
      Schema.Array(Schema.suspend(() => WebApplicationFrameworkSchema)),
    ),
    configurations: Schema.optional(
      Schema.Array(Schema.suspend(() => WebApplicationConfigurationUnitSchema)),
    ),
    directories: Schema.optional(
      Schema.Array(Schema.suspend(() => WebApplicationDirectoryUnitSchema)),
    ),
    displayName: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    staticFolders: Schema.optional(Schema.Array(Schema.String)),
    machineDisplayName: Schema.optional(Schema.String),
    isDeleted: Schema.optional(Schema.Boolean),
    createdTimestamp: Schema.optional(Schema.String),
    updatedTimestamp: Schema.optional(Schema.String),
    serverType: Schema.optional(Schema.String),
    errors: Schema.optional(
      Schema.Array(Schema.suspend(() => HealthErrorDetailsSchema)),
    ),
    applianceNames: Schema.optional(Schema.Array(Schema.String)),
    hasErrors: Schema.optional(Schema.Boolean),
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
  });
const TomcatWebServersSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const TomcatWebServerPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    services: Schema.optional(
      Schema.Array(Schema.suspend(() => TomcatServiceUnitSchema)),
    ),
    catalinaHome: Schema.optional(Schema.String),
    jvmVersion: Schema.optional(Schema.String),
    sessionPersistenceMechanism: Schema.optional(Schema.String),
    isClusteringPresent: Schema.optional(Schema.Boolean),
    isMemoryRealmPresent: Schema.optional(Schema.Boolean),
    isSessionTrackingPresent: Schema.optional(Schema.Boolean),
    isAccessLogValvePresent: Schema.optional(Schema.Boolean),
    maxMemoryUsageInMb: Schema.optional(Schema.String),
    configurationLocation: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    machineIds: Schema.optional(Schema.Array(Schema.String)),
    webApplications: Schema.optional(Schema.Array(Schema.String)),
    displayName: Schema.optional(Schema.String),
    serverFqdn: Schema.optional(Schema.String),
    runAsAccountId: Schema.optional(Schema.String),
    operatingSystemDetails: Schema.optional(
      Schema.suspend(() => OperatingSystemSchema),
    ),
    isDeleted: Schema.optional(Schema.Boolean),
    createdTimestamp: Schema.optional(Schema.String),
    updatedTimestamp: Schema.optional(Schema.String),
    serverType: Schema.optional(Schema.String),
    errors: Schema.optional(
      Schema.Array(Schema.suspend(() => HealthErrorDetailsSchema)),
    ),
    applianceNames: Schema.optional(Schema.Array(Schema.String)),
    hasErrors: Schema.optional(Schema.Boolean),
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
  });
const TomcatServiceUnitSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  connectors: Schema.optional(
    Schema.Array(Schema.suspend(() => ConnectorUnitSchema)),
  ),
  engine: Schema.optional(Schema.suspend(() => TomcatEngineUnitSchema)),
});
const ConnectorUnitSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  bindings: Schema.optional(
    Schema.Array(Schema.suspend(() => FrontEndBindingSchema)),
  ),
});
const TomcatEngineUnitSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  hosts: Schema.optional(
    Schema.Array(Schema.suspend(() => TomcatHostUnitSchema)),
  ),
});
const TomcatHostUnitSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  appBasePath: Schema.optional(Schema.String),
  appBase: Schema.optional(Schema.String),
});
const WebAppPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  webAppArmId: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
});
const WebApplicationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const SitesPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  masterSiteId: Schema.optional(Schema.String),
  servicePrincipalIdentityDetails: Schema.optional(
    Schema.suspend(() => SiteSpnPropertiesSchema),
  ),
  agentDetails: Schema.optional(
    Schema.suspend(() => SiteAgentPropertiesSchema),
  ),
  applianceName: Schema.optional(Schema.String),
  discoverySolutionId: Schema.optional(Schema.String),
  serviceEndpoint: Schema.optional(Schema.String),
  provisioningState: Schema.optional(
    Schema.suspend(() => ProvisioningStateSchema),
  ),
});
const ServerSiteResourceUpdatePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    servicePrincipalIdentityDetails: Schema.optional(
      Schema.suspend(() => SiteSpnPropertiesSchema),
    ),
    agentDetails: Schema.optional(
      Schema.suspend(() => SiteAgentPropertiesSchema),
    ),
    applianceName: Schema.optional(Schema.String),
    discoverySolutionId: Schema.optional(Schema.String),
  });
const ServerJobSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const ServerSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const ServerPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  displayName: Schema.optional(Schema.String),
  fqdn: Schema.optional(Schema.String),
  networkAdapters: Schema.optional(
    Schema.Array(Schema.suspend(() => ServerNetworkAdapterSchema)),
  ),
  hydratedFqdn: Schema.optional(Schema.String),
  disks: Schema.optional(Schema.Array(Schema.suspend(() => ServerDiskSchema))),
  validationRequired: Schema.optional(Schema.String),
  processorInfo: Schema.optional(Schema.suspend(() => ProcessorInfoSchema)),
  firmware: Schema.optional(Schema.String),
  guestOsDetails: Schema.optional(Schema.suspend(() => GuestOsDetailsSchema)),
  numberOfApplications: Schema.optional(Schema.Number),
  guestDetailsDiscoveryTimestamp: Schema.optional(Schema.String),
  isGuestDetailsDiscoveryInProgress: Schema.optional(Schema.Boolean),
  dependencyMapping: Schema.optional(Schema.String),
  dependencyMappingStartTime: Schema.optional(Schema.String),
  dependencyMappingEndTime: Schema.optional(Schema.String),
  runAsAccountId: Schema.optional(Schema.String),
  applianceNames: Schema.optional(Schema.Array(Schema.String)),
  errors: Schema.optional(
    Schema.Array(Schema.suspend(() => HealthErrorDetailsSchema)),
  ),
  applicationDiscovery: Schema.optional(
    Schema.suspend(() => ApplicationDiscoverySchema),
  ),
  dependencyMapDiscovery: Schema.optional(
    Schema.suspend(() => DependencyMapDiscoverySchema),
  ),
  staticDiscovery: Schema.optional(Schema.suspend(() => StaticDiscoverySchema)),
  sqlDiscovery: Schema.optional(Schema.suspend(() => SqlDiscoverySchema)),
  webAppDiscovery: Schema.optional(Schema.suspend(() => WebAppDiscoverySchema)),
  oracleDiscovery: Schema.optional(Schema.suspend(() => OracleDiscoverySchema)),
  springBootDiscovery: Schema.optional(
    Schema.suspend(() => SpringBootDiscoverySchema),
  ),
  iisDiscovery: Schema.optional(Schema.suspend(() => WebAppDiscoverySchema)),
  tomcatDiscovery: Schema.optional(Schema.suspend(() => WebAppDiscoverySchema)),
  appsAndRoles: Schema.optional(Schema.suspend(() => AppsAndRolesSchema)),
  productSupportStatus: Schema.optional(
    Schema.suspend(() => ProductSupportStatusSchema),
  ),
  numberOfProcessorCore: Schema.optional(Schema.Number),
  allocatedMemoryInMb: Schema.optional(Schema.Number),
  operatingSystemDetails: Schema.optional(
    Schema.suspend(() => OperatingSystemSchema),
  ),
  biosSerialNumber: Schema.optional(Schema.String),
  biosGuid: Schema.optional(Schema.String),
  isDeleted: Schema.optional(Schema.Boolean),
  createdTimestamp: Schema.optional(Schema.String),
  tags: Schema.optional(
    Schema.Record(
      Schema.String,
      Schema.suspend(() => Azure_ResourceManager_ObjectSchema),
    ),
  ),
  updatedTimestamp: Schema.optional(Schema.String),
  provisioningState: Schema.optional(
    Schema.suspend(() => ProvisioningStateSchema),
  ),
});
const ServerNetworkAdapterSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nicId: Schema.optional(Schema.String),
  macAddress: Schema.optional(Schema.String),
  ipAddressList: Schema.optional(Schema.Array(Schema.String)),
  networkName: Schema.optional(Schema.String),
  ipAddressType: Schema.optional(Schema.String),
});
const ServerDiskSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  generatedId: Schema.optional(Schema.String),
  maxSizeInBytes: Schema.optional(Schema.Number),
  name: Schema.optional(Schema.String),
  diskType: Schema.optional(Schema.String),
  lun: Schema.optional(Schema.Number),
  path: Schema.optional(Schema.String),
});
const ServerUpdatePropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  fqdn: Schema.optional(Schema.String),
  networkAdapters: Schema.optional(
    Schema.Array(Schema.suspend(() => ServerNetworkAdapterSchema)),
  ),
  hydratedFqdn: Schema.optional(Schema.String),
  disks: Schema.optional(Schema.Array(Schema.suspend(() => ServerDiskSchema))),
  validationRequired: Schema.optional(Schema.String),
  firmware: Schema.optional(Schema.String),
  runAsAccountId: Schema.optional(Schema.String),
  productSupportStatus: Schema.optional(
    Schema.suspend(() => ProductSupportStatusSchema),
  ),
  numberOfProcessorCore: Schema.optional(Schema.Number),
  allocatedMemoryInMb: Schema.optional(Schema.Number),
  operatingSystemDetails: Schema.optional(
    Schema.suspend(() => OperatingSystemSchema),
  ),
  biosSerialNumber: Schema.optional(Schema.String),
  biosGuid: Schema.optional(Schema.String),
  tags: Schema.optional(
    Schema.Record(
      Schema.String,
      Schema.suspend(() => Azure_ResourceManager_ObjectSchema),
    ),
  ),
  provisioningState: Schema.optional(
    Schema.suspend(() => ProvisioningStateSchema),
  ),
});
const ServerSoftwareInventorySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  },
);
const ServerRunAsAccountSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const VmwareSiteUpdatePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    servicePrincipalIdentityDetails: Schema.optional(
      Schema.suspend(() => SiteSpnPropertiesSchema),
    ),
    agentDetails: Schema.optional(
      Schema.suspend(() => SiteAgentPropertiesSchema),
    ),
    applianceName: Schema.optional(Schema.String),
    discoverySolutionId: Schema.optional(Schema.String),
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
  });
const VmwareHostSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const VmwareHostPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  createdTimestamp: Schema.optional(Schema.String),
  updatedTimestamp: Schema.optional(Schema.String),
  datastores: Schema.optional(
    Schema.Array(Schema.suspend(() => VmwareDatastoreSchema)),
  ),
  vcenterId: Schema.optional(Schema.String),
  uuid: Schema.optional(Schema.String),
  applianceNames: Schema.optional(Schema.Array(Schema.String)),
  provisioningState: Schema.optional(
    Schema.suspend(() => ProvisioningStateSchema),
  ),
});
const VmwareDatastoreSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  uuid: Schema.optional(Schema.String),
  capacityInGb: Schema.optional(Schema.Number),
  freeSpaceInGb: Schema.optional(Schema.Number),
  type: Schema.optional(Schema.suspend(() => VMwareDatastoreTypeSchema)),
  symbolicName: Schema.optional(Schema.String),
});
const VMwareDatastoreTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Unknown",
  "CIFS",
  "NFS",
  "NFS41",
  "PMEM",
  "VFFS",
  "VMFS",
  "VSAN",
  "VVOL",
]);
const VmwareJobSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const MachineResourceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const VmwareMachinePropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    vCenterFqdn: Schema.optional(Schema.String),
    vCenterId: Schema.optional(Schema.String),
    instanceUuid: Schema.optional(Schema.String),
    dataCenterScope: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    disks: Schema.optional(
      Schema.Array(Schema.suspend(() => VmwareDiskSchema)),
    ),
    hostInMaintenanceMode: Schema.optional(Schema.Boolean),
    hostName: Schema.optional(Schema.String),
    hostPowerState: Schema.optional(Schema.String),
    hostVersion: Schema.optional(Schema.String),
    networkAdapters: Schema.optional(
      Schema.Array(Schema.suspend(() => VmwareNetworkAdapterSchema)),
    ),
    vMwareToolsStatus: Schema.optional(Schema.String),
    vMwareToolsVersion: Schema.optional(Schema.String),
    changeTrackingSupported: Schema.optional(Schema.Boolean),
    changeTrackingEnabled: Schema.optional(Schema.Boolean),
    maxSnapshots: Schema.optional(Schema.Number),
    diskEnabledUuid: Schema.optional(Schema.String),
    numberOfSnapshots: Schema.optional(Schema.Number),
    altGuestName: Schema.optional(Schema.String),
    powerStatus: Schema.optional(Schema.String),
    vmFqdn: Schema.optional(Schema.String),
    vmConfigurationFileLocation: Schema.optional(Schema.String),
    firmware: Schema.optional(Schema.String),
    guestOsDetails: Schema.optional(Schema.suspend(() => GuestOsDetailsSchema)),
    numberOfApplications: Schema.optional(Schema.Number),
    guestDetailsDiscoveryTimestamp: Schema.optional(Schema.String),
    isGuestDetailsDiscoveryInProgress: Schema.optional(Schema.Boolean),
    dependencyMapping: Schema.optional(Schema.String),
    dependencyMappingStartTime: Schema.optional(Schema.String),
    dependencyMappingEndTime: Schema.optional(Schema.String),
    runAsAccountId: Schema.optional(Schema.String),
    applianceNames: Schema.optional(Schema.Array(Schema.String)),
    errors: Schema.optional(
      Schema.Array(Schema.suspend(() => HealthErrorDetailsSchema)),
    ),
    applicationDiscovery: Schema.optional(
      Schema.suspend(() => ApplicationDiscoverySchema),
    ),
    dependencyMapDiscovery: Schema.optional(
      Schema.suspend(() => DependencyMapDiscoverySchema),
    ),
    staticDiscovery: Schema.optional(
      Schema.suspend(() => StaticDiscoverySchema),
    ),
    sqlDiscovery: Schema.optional(Schema.suspend(() => SqlDiscoverySchema)),
    webAppDiscovery: Schema.optional(
      Schema.suspend(() => WebAppDiscoverySchema),
    ),
    oracleDiscovery: Schema.optional(
      Schema.suspend(() => OracleDiscoverySchema),
    ),
    springBootDiscovery: Schema.optional(
      Schema.suspend(() => SpringBootDiscoverySchema),
    ),
    iisDiscovery: Schema.optional(Schema.suspend(() => WebAppDiscoverySchema)),
    tomcatDiscovery: Schema.optional(
      Schema.suspend(() => WebAppDiscoverySchema),
    ),
    appsAndRoles: Schema.optional(Schema.suspend(() => AppsAndRolesSchema)),
    productSupportStatus: Schema.optional(
      Schema.suspend(() => ProductSupportStatusSchema),
    ),
    numberOfProcessorCore: Schema.optional(Schema.Number),
    allocatedMemoryInMb: Schema.optional(Schema.Number),
    operatingSystemDetails: Schema.optional(
      Schema.suspend(() => OperatingSystemSchema),
    ),
    biosSerialNumber: Schema.optional(Schema.String),
    biosGuid: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    isDeleted: Schema.optional(Schema.Boolean),
    createdTimestamp: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    updatedTimestamp: Schema.optional(Schema.String),
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
  },
);
const VmwareDiskSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  uuid: Schema.optional(Schema.String),
  label: Schema.optional(Schema.String),
  diskProvisioningPolicy: Schema.optional(Schema.String),
  diskScrubbingPolicy: Schema.optional(Schema.String),
  diskMode: Schema.optional(Schema.String),
  controllerType: Schema.optional(Schema.String),
  maxSizeInBytes: Schema.optional(Schema.Number),
  name: Schema.optional(Schema.String),
  diskType: Schema.optional(Schema.String),
  lun: Schema.optional(Schema.Number),
  path: Schema.optional(Schema.String),
});
const VmwareNetworkAdapterSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  label: Schema.optional(Schema.String),
  adapterType: Schema.optional(Schema.String),
  nicId: Schema.optional(Schema.String),
  macAddress: Schema.optional(Schema.String),
  ipAddressList: Schema.optional(Schema.Array(Schema.String)),
  networkName: Schema.optional(Schema.String),
  ipAddressType: Schema.optional(Schema.String),
});
const MachineResourceUpdatePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    firmware: Schema.optional(Schema.String),
    runAsAccountId: Schema.optional(Schema.String),
    productSupportStatus: Schema.optional(
      Schema.suspend(() => ProductSupportStatusSchema),
    ),
    numberOfProcessorCore: Schema.optional(Schema.Number),
    allocatedMemoryInMb: Schema.optional(Schema.Number),
    operatingSystemDetails: Schema.optional(
      Schema.suspend(() => OperatingSystemSchema),
    ),
    biosSerialNumber: Schema.optional(Schema.String),
    biosGuid: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  });
const VmwareMachineSoftwareInventorySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
const VmwareRunAsAccountResourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
const RunAsAccountMachineInputSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    machineId: Schema.optional(Schema.String),
    runAsAccountId: Schema.optional(Schema.String),
  });
const TagsMachineInputSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  machineId: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
});
const VcenterSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const VcenterPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  runAsAccountId: Schema.optional(Schema.String),
  errors: Schema.optional(
    Schema.Array(Schema.suspend(() => HealthErrorDetailsSchema)),
  ),
  createdTimestamp: Schema.optional(Schema.String),
  updatedTimestamp: Schema.optional(Schema.String),
  fqdn: Schema.optional(Schema.String),
  port: Schema.optional(Schema.String),
  version: Schema.optional(Schema.String),
  perfStatisticsLevel: Schema.optional(Schema.String),
  instanceUuid: Schema.optional(Schema.String),
  friendlyName: Schema.optional(Schema.String),
  provisioningState: Schema.optional(
    Schema.suspend(() => ProvisioningStateSchema),
  ),
});

// Input Schema
export const AksAssessmentOperationsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    assessmentName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => AKSAssessmentPropertiesSchema),
    ),
    eTag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/aksAssessments/{assessmentName}",
      apiVersion: "2024-01-15",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type AksAssessmentOperationsCreateInput =
  typeof AksAssessmentOperationsCreateInput.Type;

// Output Schema
export const AksAssessmentOperationsCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => AKSAssessmentPropertiesSchema),
    ),
    eTag: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type AksAssessmentOperationsCreateOutput =
  typeof AksAssessmentOperationsCreateOutput.Type;

// The operation
/**
 * Create a AKSAssessment
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 * @param assessmentName - AKS Assessment Name.
 */
export const AksAssessmentOperationsCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AksAssessmentOperationsCreateInput,
    outputSchema: AksAssessmentOperationsCreateOutput,
  }));
// Input Schema
export const AksAssessmentOperationsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    assessmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/aksAssessments/{assessmentName}",
      apiVersion: "2024-01-15",
    }),
  );
export type AksAssessmentOperationsDeleteInput =
  typeof AksAssessmentOperationsDeleteInput.Type;

// Output Schema
export const AksAssessmentOperationsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AksAssessmentOperationsDeleteOutput =
  typeof AksAssessmentOperationsDeleteOutput.Type;

// The operation
/**
 * Delete a AKSAssessment
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 * @param assessmentName - AKS Assessment Name.
 */
export const AksAssessmentOperationsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AksAssessmentOperationsDeleteInput,
    outputSchema: AksAssessmentOperationsDeleteOutput,
  }));
// Input Schema
export const AksAssessmentOperationsDownloadUrlInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    assessmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/aksAssessments/{assessmentName}/downloadUrl",
      apiVersion: "2024-01-15",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type AksAssessmentOperationsDownloadUrlInput =
  typeof AksAssessmentOperationsDownloadUrlInput.Type;

// Output Schema
export const AksAssessmentOperationsDownloadUrlOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    assessmentReportUrl: Schema.String,
    expirationTime: Schema.String,
  });
export type AksAssessmentOperationsDownloadUrlOutput =
  typeof AksAssessmentOperationsDownloadUrlOutput.Type;

// The operation
/**
 * Get URL for downloading AKS Assessment Report.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 * @param assessmentName - AKS Assessment Name.
 */
export const AksAssessmentOperationsDownloadUrl =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AksAssessmentOperationsDownloadUrlInput,
    outputSchema: AksAssessmentOperationsDownloadUrlOutput,
  }));
// Input Schema
export const AksAssessmentOperationsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    assessmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/aksAssessments/{assessmentName}",
      apiVersion: "2024-01-15",
    }),
  );
export type AksAssessmentOperationsGetInput =
  typeof AksAssessmentOperationsGetInput.Type;

// Output Schema
export const AksAssessmentOperationsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => AKSAssessmentPropertiesSchema),
    ),
    eTag: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type AksAssessmentOperationsGetOutput =
  typeof AksAssessmentOperationsGetOutput.Type;

// The operation
/**
 * Get a AKSAssessment
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 * @param assessmentName - AKS Assessment Name.
 */
export const AksAssessmentOperationsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AksAssessmentOperationsGetInput,
    outputSchema: AksAssessmentOperationsGetOutput,
  }),
);
// Input Schema
export const AksAssessmentOperationsListByAssessmentProjectInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    continuationToken: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
    $filter: Schema.optional(Schema.String),
    totalRecordCount: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/aksAssessments",
      apiVersion: "2024-01-15",
    }),
  );
export type AksAssessmentOperationsListByAssessmentProjectInput =
  typeof AksAssessmentOperationsListByAssessmentProjectInput.Type;

// Output Schema
export const AksAssessmentOperationsListByAssessmentProjectOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => AKSAssessmentSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type AksAssessmentOperationsListByAssessmentProjectOutput =
  typeof AksAssessmentOperationsListByAssessmentProjectOutput.Type;

// The operation
/**
 * List AKSAssessment resources by AssessmentProject
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param continuationToken - Continuation Token Query Parameter.
 * @param $top - Page Size Query Parameter.
 * @param $filter - Filter Query Parameter.
 * @param totalRecordCount - Total Record Count Query Parameter.
 * @param projectName - Assessment Project Name
 */
export const AksAssessmentOperationsListByAssessmentProject =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AksAssessmentOperationsListByAssessmentProjectInput,
    outputSchema: AksAssessmentOperationsListByAssessmentProjectOutput,
  }));
// Input Schema
export const AksClusterOperationsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    assessmentName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/aksAssessments/{assessmentName}/clusters/{clusterName}",
      apiVersion: "2024-01-15",
    }),
  );
export type AksClusterOperationsGetInput =
  typeof AksClusterOperationsGetInput.Type;

// Output Schema
export const AksClusterOperationsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => AKSClusterPropertiesSchema),
    ),
    eTag: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type AksClusterOperationsGetOutput =
  typeof AksClusterOperationsGetOutput.Type;

// The operation
/**
 * Get a AKSCluster
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 * @param assessmentName - AKS Assessment Name.
 * @param clusterName - AKS Cluster Name.
 */
export const AksClusterOperationsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AksClusterOperationsGetInput,
    outputSchema: AksClusterOperationsGetOutput,
  }),
);
// Input Schema
export const AksClusterOperationsListByAksAssessmentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    assessmentName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/aksAssessments/{assessmentName}/clusters",
      apiVersion: "2024-01-15",
    }),
  );
export type AksClusterOperationsListByAksAssessmentInput =
  typeof AksClusterOperationsListByAksAssessmentInput.Type;

// Output Schema
export const AksClusterOperationsListByAksAssessmentOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => AKSClusterSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type AksClusterOperationsListByAksAssessmentOutput =
  typeof AksClusterOperationsListByAksAssessmentOutput.Type;

// The operation
/**
 * List AKSCluster resources by AKSAssessment
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $filter - Filter Query Parameter.
 * @param projectName - Assessment Project Name
 * @param assessmentName - AKS Assessment Name.
 */
export const AksClusterOperationsListByAksAssessment =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AksClusterOperationsListByAksAssessmentInput,
    outputSchema: AksClusterOperationsListByAksAssessmentOutput,
  }));
// Input Schema
export const AksCostDetailOperationsListByAksAssessmentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    assessmentName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/aksAssessments/{assessmentName}/costDetails",
      apiVersion: "2024-01-15",
    }),
  );
export type AksCostDetailOperationsListByAksAssessmentInput =
  typeof AksCostDetailOperationsListByAksAssessmentInput.Type;

// Output Schema
export const AksCostDetailOperationsListByAksAssessmentOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => AKSCostDetailSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type AksCostDetailOperationsListByAksAssessmentOutput =
  typeof AksCostDetailOperationsListByAksAssessmentOutput.Type;

// The operation
/**
 * List AKSCostDetail resources by AKSAssessment
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $filter - Filter Query Parameter.
 * @param projectName - Assessment Project Name
 * @param assessmentName - AKS Assessment Name.
 */
export const AksCostDetailOperationsListByAksAssessment =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AksCostDetailOperationsListByAksAssessmentInput,
    outputSchema: AksCostDetailOperationsListByAksAssessmentOutput,
  }));
// Input Schema
export const AksOptionsOperationsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    assessmentOptionsName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/aksAssessmentOptions/{assessmentOptionsName}",
      apiVersion: "2024-01-15",
    }),
  );
export type AksOptionsOperationsGetInput =
  typeof AksOptionsOperationsGetInput.Type;

// Output Schema
export const AksOptionsOperationsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => AKSAssessmentOptionsPropertiesSchema),
    ),
    eTag: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type AksOptionsOperationsGetOutput =
  typeof AksOptionsOperationsGetOutput.Type;

// The operation
/**
 * Get a AKSAssessmentOptions
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 * @param assessmentOptionsName - AKS Assessment Options Name.
 */
export const AksOptionsOperationsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AksOptionsOperationsGetInput,
    outputSchema: AksOptionsOperationsGetOutput,
  }),
);
// Input Schema
export const AksOptionsOperationsListByAssessmentProjectInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/aksAssessmentOptions",
      apiVersion: "2024-01-15",
    }),
  );
export type AksOptionsOperationsListByAssessmentProjectInput =
  typeof AksOptionsOperationsListByAssessmentProjectInput.Type;

// Output Schema
export const AksOptionsOperationsListByAssessmentProjectOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => AKSAssessmentOptionsSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type AksOptionsOperationsListByAssessmentProjectOutput =
  typeof AksOptionsOperationsListByAssessmentProjectOutput.Type;

// The operation
/**
 * List AKSAssessmentOptions resources by AssessmentProject
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 */
export const AksOptionsOperationsListByAssessmentProject =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AksOptionsOperationsListByAssessmentProjectInput,
    outputSchema: AksOptionsOperationsListByAssessmentProjectOutput,
  }));
// Input Schema
export const AksSummaryOperationsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    assessmentName: Schema.String.pipe(T.PathParam()),
    summaryName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/aksAssessments/{assessmentName}/summaries/{summaryName}",
      apiVersion: "2024-01-15",
    }),
  );
export type AksSummaryOperationsGetInput =
  typeof AksSummaryOperationsGetInput.Type;

// Output Schema
export const AksSummaryOperationsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => AKSSummaryPropertiesSchema),
    ),
    eTag: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type AksSummaryOperationsGetOutput =
  typeof AksSummaryOperationsGetOutput.Type;

// The operation
/**
 * Get a AKSSummary
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 * @param assessmentName - AKS Assessment Name.
 * @param summaryName - AKS Assessment Summary Name.
 */
export const AksSummaryOperationsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AksSummaryOperationsGetInput,
    outputSchema: AksSummaryOperationsGetOutput,
  }),
);
// Input Schema
export const AksSummaryOperationsListByAksAssessmentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    assessmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/aksAssessments/{assessmentName}/summaries",
      apiVersion: "2024-01-15",
    }),
  );
export type AksSummaryOperationsListByAksAssessmentInput =
  typeof AksSummaryOperationsListByAksAssessmentInput.Type;

// Output Schema
export const AksSummaryOperationsListByAksAssessmentOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => AKSSummarySchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type AksSummaryOperationsListByAksAssessmentOutput =
  typeof AksSummaryOperationsListByAksAssessmentOutput.Type;

// The operation
/**
 * List AKSSummary resources by AKSAssessment
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 * @param assessmentName - AKS Assessment Name.
 */
export const AksSummaryOperationsListByAksAssessment =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AksSummaryOperationsListByAksAssessmentInput,
    outputSchema: AksSummaryOperationsListByAksAssessmentOutput,
  }));
// Input Schema
export const AssessedMachinesOperationsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
    assessmentName: Schema.String.pipe(T.PathParam()),
    assessedMachineName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}/assessments/{assessmentName}/assessedMachines/{assessedMachineName}",
      apiVersion: "2024-01-15",
    }),
  );
export type AssessedMachinesOperationsGetInput =
  typeof AssessedMachinesOperationsGetInput.Type;

// Output Schema
export const AssessedMachinesOperationsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => AssessedMachinePropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type AssessedMachinesOperationsGetOutput =
  typeof AssessedMachinesOperationsGetOutput.Type;

// The operation
/**
 * Get a AssessedMachine
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 * @param groupName - Group ARM name
 * @param assessmentName - Machine Assessment ARM name
 * @param assessedMachineName - Machine assessment Assessed Machine ARM name
 */
export const AssessedMachinesOperationsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AssessedMachinesOperationsGetInput,
    outputSchema: AssessedMachinesOperationsGetOutput,
  }));
// Input Schema
export const AssessedMachinesOperationsListByAssessmentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
    assessmentName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
    continuationToken: Schema.optional(Schema.String),
    totalRecordCount: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}/assessments/{assessmentName}/assessedMachines",
      apiVersion: "2024-01-15",
    }),
  );
export type AssessedMachinesOperationsListByAssessmentInput =
  typeof AssessedMachinesOperationsListByAssessmentInput.Type;

// Output Schema
export const AssessedMachinesOperationsListByAssessmentOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => AssessedMachineSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type AssessedMachinesOperationsListByAssessmentOutput =
  typeof AssessedMachinesOperationsListByAssessmentOutput.Type;

// The operation
/**
 * List AssessedMachine resources by Assessment
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $filter - Filter query.
 * @param pageSize - Optional parameter for page size.
 * @param continuationToken - Optional parameter for continuation token.
 * @param totalRecordCount - Total record count.
 * @param projectName - Assessment Project Name
 * @param groupName - Group ARM name
 * @param assessmentName - Machine Assessment ARM name
 */
export const AssessedMachinesOperationsListByAssessment =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AssessedMachinesOperationsListByAssessmentInput,
    outputSchema: AssessedMachinesOperationsListByAssessmentOutput,
  }));
// Input Schema
export const AssessedSqlDatabaseV2OperationsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
    assessmentName: Schema.String.pipe(T.PathParam()),
    assessedSqlDatabaseName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}/sqlAssessments/{assessmentName}/assessedSqlDatabases/{assessedSqlDatabaseName}",
      apiVersion: "2024-01-15",
    }),
  );
export type AssessedSqlDatabaseV2OperationsGetInput =
  typeof AssessedSqlDatabaseV2OperationsGetInput.Type;

// Output Schema
export const AssessedSqlDatabaseV2OperationsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => AssessedSqlDatabaseV2PropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type AssessedSqlDatabaseV2OperationsGetOutput =
  typeof AssessedSqlDatabaseV2OperationsGetOutput.Type;

// The operation
/**
 * Get a AssessedSqlDatabaseV2
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 * @param groupName - Group ARM name
 * @param assessmentName - SQL Assessment arm name.
 * @param assessedSqlDatabaseName - Sql assessment Assessed Databases ARM name.
 */
export const AssessedSqlDatabaseV2OperationsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AssessedSqlDatabaseV2OperationsGetInput,
    outputSchema: AssessedSqlDatabaseV2OperationsGetOutput,
  }));
// Input Schema
export const AssessedSqlDatabaseV2OperationsListBySqlAssessmentV2Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
    assessmentName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
    continuationToken: Schema.optional(Schema.String),
    totalRecordCount: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}/sqlAssessments/{assessmentName}/assessedSqlDatabases",
      apiVersion: "2024-01-15",
    }),
  );
export type AssessedSqlDatabaseV2OperationsListBySqlAssessmentV2Input =
  typeof AssessedSqlDatabaseV2OperationsListBySqlAssessmentV2Input.Type;

// Output Schema
export const AssessedSqlDatabaseV2OperationsListBySqlAssessmentV2Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => AssessedSqlDatabaseV2Schema)),
    nextLink: Schema.optional(Schema.String),
  });
export type AssessedSqlDatabaseV2OperationsListBySqlAssessmentV2Output =
  typeof AssessedSqlDatabaseV2OperationsListBySqlAssessmentV2Output.Type;

// The operation
/**
 * List AssessedSqlDatabaseV2 resources by SqlAssessmentV2
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $filter - Filter query.
 * @param pageSize - Optional parameter for page size.
 * @param continuationToken - Optional parameter for continuation token.
 * @param totalRecordCount - Total record count.
 * @param projectName - Assessment Project Name
 * @param groupName - Group ARM name
 * @param assessmentName - SQL Assessment arm name.
 */
export const AssessedSqlDatabaseV2OperationsListBySqlAssessmentV2 =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AssessedSqlDatabaseV2OperationsListBySqlAssessmentV2Input,
    outputSchema: AssessedSqlDatabaseV2OperationsListBySqlAssessmentV2Output,
  }));
// Input Schema
export const AssessedSqlInstanceV2OperationsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
    assessmentName: Schema.String.pipe(T.PathParam()),
    assessedSqlInstanceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}/sqlAssessments/{assessmentName}/assessedSqlInstances/{assessedSqlInstanceName}",
      apiVersion: "2024-01-15",
    }),
  );
export type AssessedSqlInstanceV2OperationsGetInput =
  typeof AssessedSqlInstanceV2OperationsGetInput.Type;

// Output Schema
export const AssessedSqlInstanceV2OperationsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => AssessedSqlInstanceV2PropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type AssessedSqlInstanceV2OperationsGetOutput =
  typeof AssessedSqlInstanceV2OperationsGetOutput.Type;

// The operation
/**
 * Get a AssessedSqlInstanceV2
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 * @param groupName - Group ARM name
 * @param assessmentName - SQL Assessment arm name.
 * @param assessedSqlInstanceName - Sql assessment Assessed Instance ARM name.
 */
export const AssessedSqlInstanceV2OperationsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AssessedSqlInstanceV2OperationsGetInput,
    outputSchema: AssessedSqlInstanceV2OperationsGetOutput,
  }));
// Input Schema
export const AssessedSqlInstanceV2OperationsListBySqlAssessmentV2Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
    assessmentName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
    continuationToken: Schema.optional(Schema.String),
    totalRecordCount: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}/sqlAssessments/{assessmentName}/assessedSqlInstances",
      apiVersion: "2024-01-15",
    }),
  );
export type AssessedSqlInstanceV2OperationsListBySqlAssessmentV2Input =
  typeof AssessedSqlInstanceV2OperationsListBySqlAssessmentV2Input.Type;

// Output Schema
export const AssessedSqlInstanceV2OperationsListBySqlAssessmentV2Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => AssessedSqlInstanceV2Schema)),
    nextLink: Schema.optional(Schema.String),
  });
export type AssessedSqlInstanceV2OperationsListBySqlAssessmentV2Output =
  typeof AssessedSqlInstanceV2OperationsListBySqlAssessmentV2Output.Type;

// The operation
/**
 * List AssessedSqlInstanceV2 resources by SqlAssessmentV2
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $filter - Filter query.
 * @param pageSize - Optional parameter for page size.
 * @param continuationToken - Optional parameter for continuation token.
 * @param totalRecordCount - Total record count.
 * @param projectName - Assessment Project Name
 * @param groupName - Group ARM name
 * @param assessmentName - SQL Assessment arm name.
 */
export const AssessedSqlInstanceV2OperationsListBySqlAssessmentV2 =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AssessedSqlInstanceV2OperationsListBySqlAssessmentV2Input,
    outputSchema: AssessedSqlInstanceV2OperationsListBySqlAssessmentV2Output,
  }));
// Input Schema
export const AssessedSqlMachinesOperationsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
    assessmentName: Schema.String.pipe(T.PathParam()),
    assessedSqlMachineName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}/sqlAssessments/{assessmentName}/assessedSqlMachines/{assessedSqlMachineName}",
      apiVersion: "2024-01-15",
    }),
  );
export type AssessedSqlMachinesOperationsGetInput =
  typeof AssessedSqlMachinesOperationsGetInput.Type;

// Output Schema
export const AssessedSqlMachinesOperationsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => AssessedSqlMachinePropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type AssessedSqlMachinesOperationsGetOutput =
  typeof AssessedSqlMachinesOperationsGetOutput.Type;

// The operation
/**
 * Get a AssessedSqlMachine
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 * @param groupName - Group ARM name
 * @param assessmentName - SQL Assessment arm name.
 * @param assessedSqlMachineName - Sql assessment Assessed Machine ARM name.
 */
export const AssessedSqlMachinesOperationsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AssessedSqlMachinesOperationsGetInput,
    outputSchema: AssessedSqlMachinesOperationsGetOutput,
  }));
// Input Schema
export const AssessedSqlMachinesOperationsListBySqlAssessmentV2Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
    assessmentName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
    continuationToken: Schema.optional(Schema.String),
    totalRecordCount: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}/sqlAssessments/{assessmentName}/assessedSqlMachines",
      apiVersion: "2024-01-15",
    }),
  );
export type AssessedSqlMachinesOperationsListBySqlAssessmentV2Input =
  typeof AssessedSqlMachinesOperationsListBySqlAssessmentV2Input.Type;

// Output Schema
export const AssessedSqlMachinesOperationsListBySqlAssessmentV2Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => AssessedSqlMachineSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type AssessedSqlMachinesOperationsListBySqlAssessmentV2Output =
  typeof AssessedSqlMachinesOperationsListBySqlAssessmentV2Output.Type;

// The operation
/**
 * List AssessedSqlMachine resources by SqlAssessmentV2
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $filter - Filter query.
 * @param pageSize - Optional parameter for page size.
 * @param continuationToken - Optional parameter for continuation token.
 * @param totalRecordCount - Total record count.
 * @param projectName - Assessment Project Name
 * @param groupName - Group ARM name
 * @param assessmentName - SQL Assessment arm name.
 */
export const AssessedSqlMachinesOperationsListBySqlAssessmentV2 =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AssessedSqlMachinesOperationsListBySqlAssessmentV2Input,
    outputSchema: AssessedSqlMachinesOperationsListBySqlAssessmentV2Output,
  }));
// Input Schema
export const AssessedSqlRecommendedEntityOperationsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
    assessmentName: Schema.String.pipe(T.PathParam()),
    recommendedAssessedEntityName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}/sqlAssessments/{assessmentName}/recommendedAssessedEntities/{recommendedAssessedEntityName}",
      apiVersion: "2024-01-15",
    }),
  );
export type AssessedSqlRecommendedEntityOperationsGetInput =
  typeof AssessedSqlRecommendedEntityOperationsGetInput.Type;

// Output Schema
export const AssessedSqlRecommendedEntityOperationsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => AssessedSqlRecommendedEntityPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type AssessedSqlRecommendedEntityOperationsGetOutput =
  typeof AssessedSqlRecommendedEntityOperationsGetOutput.Type;

// The operation
/**
 * Get a AssessedSqlRecommendedEntity
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 * @param groupName - Group ARM name
 * @param assessmentName - SQL Assessment arm name.
 * @param recommendedAssessedEntityName - Sql assessment Assessed Recommended Entity ARM name.
 */
export const AssessedSqlRecommendedEntityOperationsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AssessedSqlRecommendedEntityOperationsGetInput,
    outputSchema: AssessedSqlRecommendedEntityOperationsGetOutput,
  }));
// Input Schema
export const AssessedSqlRecommendedEntityOperationsListBySqlAssessmentV2Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
    assessmentName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
    continuationToken: Schema.optional(Schema.String),
    totalRecordCount: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}/sqlAssessments/{assessmentName}/recommendedAssessedEntities",
      apiVersion: "2024-01-15",
    }),
  );
export type AssessedSqlRecommendedEntityOperationsListBySqlAssessmentV2Input =
  typeof AssessedSqlRecommendedEntityOperationsListBySqlAssessmentV2Input.Type;

// Output Schema
export const AssessedSqlRecommendedEntityOperationsListBySqlAssessmentV2Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.suspend(() => AssessedSqlRecommendedEntitySchema),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type AssessedSqlRecommendedEntityOperationsListBySqlAssessmentV2Output =
  typeof AssessedSqlRecommendedEntityOperationsListBySqlAssessmentV2Output.Type;

// The operation
/**
 * List AssessedSqlRecommendedEntity resources by SqlAssessmentV2
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $filter - Filter query.
 * @param pageSize - Optional parameter for page size.
 * @param continuationToken - Optional parameter for continuation token.
 * @param totalRecordCount - Total record count.
 * @param projectName - Assessment Project Name
 * @param groupName - Group ARM name
 * @param assessmentName - SQL Assessment arm name.
 */
export const AssessedSqlRecommendedEntityOperationsListBySqlAssessmentV2 =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      AssessedSqlRecommendedEntityOperationsListBySqlAssessmentV2Input,
    outputSchema:
      AssessedSqlRecommendedEntityOperationsListBySqlAssessmentV2Output,
  }));
// Input Schema
export const AssessedWebApplicationOperationsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    assessmentName: Schema.String.pipe(T.PathParam()),
    assessedWorkload: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/aksAssessments/{assessmentName}/assessedWebApps/{assessedWorkload}",
      apiVersion: "2024-01-15",
    }),
  );
export type AssessedWebApplicationOperationsGetInput =
  typeof AssessedWebApplicationOperationsGetInput.Type;

// Output Schema
export const AssessedWebApplicationOperationsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => AssessedWebApplicationPropertiesSchema),
    ),
    eTag: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type AssessedWebApplicationOperationsGetOutput =
  typeof AssessedWebApplicationOperationsGetOutput.Type;

// The operation
/**
 * Get a AssessedWebApplication
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 * @param assessmentName - AKS Assessment Name.
 * @param assessedWorkload - Assessed Web Application Name.
 */
export const AssessedWebApplicationOperationsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AssessedWebApplicationOperationsGetInput,
    outputSchema: AssessedWebApplicationOperationsGetOutput,
  }));
// Input Schema
export const AssessedWebApplicationOperationsListByAksAssessmentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    assessmentName: Schema.String.pipe(T.PathParam()),
    continuationToken: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
    $filter: Schema.optional(Schema.String),
    totalRecordCount: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/aksAssessments/{assessmentName}/assessedWebApps",
      apiVersion: "2024-01-15",
    }),
  );
export type AssessedWebApplicationOperationsListByAksAssessmentInput =
  typeof AssessedWebApplicationOperationsListByAksAssessmentInput.Type;

// Output Schema
export const AssessedWebApplicationOperationsListByAksAssessmentOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => AssessedWebApplicationSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type AssessedWebApplicationOperationsListByAksAssessmentOutput =
  typeof AssessedWebApplicationOperationsListByAksAssessmentOutput.Type;

// The operation
/**
 * List AssessedWebApplication resources by AKSAssessment
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param continuationToken - Continuation Token Query Parameter.
 * @param $top - Page Size Query Parameter.
 * @param $filter - Filter Query Parameter.
 * @param totalRecordCount - Total Record Count Query Parameter.
 * @param projectName - Assessment Project Name
 * @param assessmentName - AKS Assessment Name.
 */
export const AssessedWebApplicationOperationsListByAksAssessment =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AssessedWebApplicationOperationsListByAksAssessmentInput,
    outputSchema: AssessedWebApplicationOperationsListByAksAssessmentOutput,
  }));
// Input Schema
export const AssessedWebAppV2OperationsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
    assessmentName: Schema.String.pipe(T.PathParam()),
    assessedWebAppName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}/webAppAssessments/{assessmentName}/assessedWebApps/{assessedWebAppName}",
      apiVersion: "2024-01-15",
    }),
  );
export type AssessedWebAppV2OperationsGetInput =
  typeof AssessedWebAppV2OperationsGetInput.Type;

// Output Schema
export const AssessedWebAppV2OperationsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => AssessedWebAppV2PropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type AssessedWebAppV2OperationsGetOutput =
  typeof AssessedWebAppV2OperationsGetOutput.Type;

// The operation
/**
 * Get a AssessedWebAppV2
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 * @param groupName - Group ARM name
 * @param assessmentName - Web app Assessment arm name.
 * @param assessedWebAppName - Assessed web app ARM name.
 */
export const AssessedWebAppV2OperationsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AssessedWebAppV2OperationsGetInput,
    outputSchema: AssessedWebAppV2OperationsGetOutput,
  }));
// Input Schema
export const AssessedWebAppV2OperationsListByWebAppAssessmentV2Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
    assessmentName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
    continuationToken: Schema.optional(Schema.String),
    totalRecordCount: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}/webAppAssessments/{assessmentName}/assessedWebApps",
      apiVersion: "2024-01-15",
    }),
  );
export type AssessedWebAppV2OperationsListByWebAppAssessmentV2Input =
  typeof AssessedWebAppV2OperationsListByWebAppAssessmentV2Input.Type;

// Output Schema
export const AssessedWebAppV2OperationsListByWebAppAssessmentV2Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => AssessedWebAppV2Schema)),
    nextLink: Schema.optional(Schema.String),
  });
export type AssessedWebAppV2OperationsListByWebAppAssessmentV2Output =
  typeof AssessedWebAppV2OperationsListByWebAppAssessmentV2Output.Type;

// The operation
/**
 * List AssessedWebAppV2 resources by WebAppAssessmentV2
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $filter - Filter query.
 * @param pageSize - Optional parameter for page size.
 * @param continuationToken - Optional parameter for continuation token.
 * @param totalRecordCount - Total record count.
 * @param projectName - Assessment Project Name
 * @param groupName - Group ARM name
 * @param assessmentName - Web app Assessment arm name.
 */
export const AssessedWebAppV2OperationsListByWebAppAssessmentV2 =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AssessedWebAppV2OperationsListByWebAppAssessmentV2Input,
    outputSchema: AssessedWebAppV2OperationsListByWebAppAssessmentV2Output,
  }));
// Input Schema
export const AssessmentOptionsOperationsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    assessmentOptionsName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/assessmentOptions/{assessmentOptionsName}",
      apiVersion: "2024-01-15",
    }),
  );
export type AssessmentOptionsOperationsGetInput =
  typeof AssessmentOptionsOperationsGetInput.Type;

// Output Schema
export const AssessmentOptionsOperationsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => AssessmentOptionsPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type AssessmentOptionsOperationsGetOutput =
  typeof AssessmentOptionsOperationsGetOutput.Type;

// The operation
/**
 * Get a AssessmentOptions
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 * @param assessmentOptionsName -  assessment options ARM name. Accepted value is 'default'
 */
export const AssessmentOptionsOperationsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AssessmentOptionsOperationsGetInput,
    outputSchema: AssessmentOptionsOperationsGetOutput,
  }));
// Input Schema
export const AssessmentOptionsOperationsListByAssessmentProjectInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/assessmentOptions",
      apiVersion: "2024-01-15",
    }),
  );
export type AssessmentOptionsOperationsListByAssessmentProjectInput =
  typeof AssessmentOptionsOperationsListByAssessmentProjectInput.Type;

// Output Schema
export const AssessmentOptionsOperationsListByAssessmentProjectOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => AssessmentOptionsSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type AssessmentOptionsOperationsListByAssessmentProjectOutput =
  typeof AssessmentOptionsOperationsListByAssessmentProjectOutput.Type;

// The operation
/**
 * List AssessmentOptions resources by AssessmentProject
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 */
export const AssessmentOptionsOperationsListByAssessmentProject =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AssessmentOptionsOperationsListByAssessmentProjectInput,
    outputSchema: AssessmentOptionsOperationsListByAssessmentProjectOutput,
  }));
// Input Schema
export const AssessmentProjectsOperationsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(Schema.suspend(() => ProjectPropertiesSchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}",
      apiVersion: "2024-01-15",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type AssessmentProjectsOperationsCreateInput =
  typeof AssessmentProjectsOperationsCreateInput.Type;

// Output Schema
export const AssessmentProjectsOperationsCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => ProjectPropertiesSchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type AssessmentProjectsOperationsCreateOutput =
  typeof AssessmentProjectsOperationsCreateOutput.Type;

// The operation
/**
 * Create a AssessmentProject
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 */
export const AssessmentProjectsOperationsCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AssessmentProjectsOperationsCreateInput,
    outputSchema: AssessmentProjectsOperationsCreateOutput,
  }));
// Input Schema
export const AssessmentProjectsOperationsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}",
      apiVersion: "2024-01-15",
    }),
  );
export type AssessmentProjectsOperationsDeleteInput =
  typeof AssessmentProjectsOperationsDeleteInput.Type;

// Output Schema
export const AssessmentProjectsOperationsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AssessmentProjectsOperationsDeleteOutput =
  typeof AssessmentProjectsOperationsDeleteOutput.Type;

// The operation
/**
 * Delete a AssessmentProject
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 */
export const AssessmentProjectsOperationsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AssessmentProjectsOperationsDeleteInput,
    outputSchema: AssessmentProjectsOperationsDeleteOutput,
  }));
// Input Schema
export const AssessmentProjectsOperationsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}",
      apiVersion: "2024-01-15",
    }),
  );
export type AssessmentProjectsOperationsGetInput =
  typeof AssessmentProjectsOperationsGetInput.Type;

// Output Schema
export const AssessmentProjectsOperationsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => ProjectPropertiesSchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type AssessmentProjectsOperationsGetOutput =
  typeof AssessmentProjectsOperationsGetOutput.Type;

// The operation
/**
 * Get a AssessmentProject
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 */
export const AssessmentProjectsOperationsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AssessmentProjectsOperationsGetInput,
    outputSchema: AssessmentProjectsOperationsGetOutput,
  }));
// Input Schema
export const AssessmentProjectsOperationsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects",
      apiVersion: "2024-01-15",
    }),
  );
export type AssessmentProjectsOperationsListByResourceGroupInput =
  typeof AssessmentProjectsOperationsListByResourceGroupInput.Type;

// Output Schema
export const AssessmentProjectsOperationsListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => AssessmentProjectSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type AssessmentProjectsOperationsListByResourceGroupOutput =
  typeof AssessmentProjectsOperationsListByResourceGroupOutput.Type;

// The operation
/**
 * List AssessmentProject resources by resource group
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const AssessmentProjectsOperationsListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AssessmentProjectsOperationsListByResourceGroupInput,
    outputSchema: AssessmentProjectsOperationsListByResourceGroupOutput,
  }));
// Input Schema
export const AssessmentProjectsOperationsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Migrate/assessmentProjects",
      apiVersion: "2024-01-15",
    }),
  );
export type AssessmentProjectsOperationsListBySubscriptionInput =
  typeof AssessmentProjectsOperationsListBySubscriptionInput.Type;

// Output Schema
export const AssessmentProjectsOperationsListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => AssessmentProjectSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type AssessmentProjectsOperationsListBySubscriptionOutput =
  typeof AssessmentProjectsOperationsListBySubscriptionOutput.Type;

// The operation
/**
 * List AssessmentProject resources by subscription ID
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const AssessmentProjectsOperationsListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AssessmentProjectsOperationsListBySubscriptionInput,
    outputSchema: AssessmentProjectsOperationsListBySubscriptionOutput,
  }));
// Input Schema
export const AssessmentProjectsOperationsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(
      Schema.suspend(() => AssessmentProjectUpdatePropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}",
      apiVersion: "2024-01-15",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type AssessmentProjectsOperationsUpdateInput =
  typeof AssessmentProjectsOperationsUpdateInput.Type;

// Output Schema
export const AssessmentProjectsOperationsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => ProjectPropertiesSchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type AssessmentProjectsOperationsUpdateOutput =
  typeof AssessmentProjectsOperationsUpdateOutput.Type;

// The operation
/**
 * Update a AssessmentProject
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 */
export const AssessmentProjectsOperationsUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AssessmentProjectsOperationsUpdateInput,
    outputSchema: AssessmentProjectsOperationsUpdateOutput,
  }));
// Input Schema
export const AssessmentProjectSummaryOperationsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    projectSummaryName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/projectSummary/{projectSummaryName}",
      apiVersion: "2024-01-15",
    }),
  );
export type AssessmentProjectSummaryOperationsGetInput =
  typeof AssessmentProjectSummaryOperationsGetInput.Type;

// Output Schema
export const AssessmentProjectSummaryOperationsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => AssessmentProjectSummaryPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type AssessmentProjectSummaryOperationsGetOutput =
  typeof AssessmentProjectSummaryOperationsGetOutput.Type;

// The operation
/**
 * Get a AssessmentProjectSummary
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 * @param projectSummaryName - Group ARM name
 */
export const AssessmentProjectSummaryOperationsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AssessmentProjectSummaryOperationsGetInput,
    outputSchema: AssessmentProjectSummaryOperationsGetOutput,
  }));
// Input Schema
export const AssessmentProjectSummaryOperationsListByAssessmentProjectInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/projectSummary",
      apiVersion: "2024-01-15",
    }),
  );
export type AssessmentProjectSummaryOperationsListByAssessmentProjectInput =
  typeof AssessmentProjectSummaryOperationsListByAssessmentProjectInput.Type;

// Output Schema
export const AssessmentProjectSummaryOperationsListByAssessmentProjectOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => AssessmentProjectSummarySchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type AssessmentProjectSummaryOperationsListByAssessmentProjectOutput =
  typeof AssessmentProjectSummaryOperationsListByAssessmentProjectOutput.Type;

// The operation
/**
 * List AssessmentProjectSummary resources by AssessmentProject
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 */
export const AssessmentProjectSummaryOperationsListByAssessmentProject =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AssessmentProjectSummaryOperationsListByAssessmentProjectInput,
    outputSchema:
      AssessmentProjectSummaryOperationsListByAssessmentProjectOutput,
  }));
// Input Schema
export const AssessmentsOperationsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
    assessmentName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => MachineAssessmentPropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}/assessments/{assessmentName}",
      apiVersion: "2024-01-15",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type AssessmentsOperationsCreateInput =
  typeof AssessmentsOperationsCreateInput.Type;

// Output Schema
export const AssessmentsOperationsCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => MachineAssessmentPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type AssessmentsOperationsCreateOutput =
  typeof AssessmentsOperationsCreateOutput.Type;

// The operation
/**
 * Create a Assessment
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 * @param groupName - Group ARM name
 * @param assessmentName - Machine Assessment ARM name
 */
export const AssessmentsOperationsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AssessmentsOperationsCreateInput,
    outputSchema: AssessmentsOperationsCreateOutput,
  }),
);
// Input Schema
export const AssessmentsOperationsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
    assessmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}/assessments/{assessmentName}",
      apiVersion: "2024-01-15",
    }),
  );
export type AssessmentsOperationsDeleteInput =
  typeof AssessmentsOperationsDeleteInput.Type;

// Output Schema
export const AssessmentsOperationsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AssessmentsOperationsDeleteOutput =
  typeof AssessmentsOperationsDeleteOutput.Type;

// The operation
/**
 * Delete a Assessment
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 * @param groupName - Group ARM name
 * @param assessmentName - Machine Assessment ARM name
 */
export const AssessmentsOperationsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AssessmentsOperationsDeleteInput,
    outputSchema: AssessmentsOperationsDeleteOutput,
  }),
);
// Input Schema
export const AssessmentsOperationsDownloadUrlInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
    assessmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}/assessments/{assessmentName}/downloadUrl",
      apiVersion: "2024-01-15",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type AssessmentsOperationsDownloadUrlInput =
  typeof AssessmentsOperationsDownloadUrlInput.Type;

// Output Schema
export const AssessmentsOperationsDownloadUrlOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    assessmentReportUrl: Schema.String,
    expirationTime: Schema.String,
  });
export type AssessmentsOperationsDownloadUrlOutput =
  typeof AssessmentsOperationsDownloadUrlOutput.Type;

// The operation
/**
 * Get download URL for the assessment report.
 *
 * Get the URL for downloading the assessment in a report format.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 * @param groupName - Group ARM name
 * @param assessmentName - Machine Assessment ARM name
 */
export const AssessmentsOperationsDownloadUrl =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AssessmentsOperationsDownloadUrlInput,
    outputSchema: AssessmentsOperationsDownloadUrlOutput,
  }));
// Input Schema
export const AssessmentsOperationsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
    assessmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}/assessments/{assessmentName}",
      apiVersion: "2024-01-15",
    }),
  );
export type AssessmentsOperationsGetInput =
  typeof AssessmentsOperationsGetInput.Type;

// Output Schema
export const AssessmentsOperationsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => MachineAssessmentPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type AssessmentsOperationsGetOutput =
  typeof AssessmentsOperationsGetOutput.Type;

// The operation
/**
 * Get a Assessment
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 * @param groupName - Group ARM name
 * @param assessmentName - Machine Assessment ARM name
 */
export const AssessmentsOperationsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AssessmentsOperationsGetInput,
    outputSchema: AssessmentsOperationsGetOutput,
  }),
);
// Input Schema
export const AssessmentsOperationsListByGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}/assessments",
      apiVersion: "2024-01-15",
    }),
  );
export type AssessmentsOperationsListByGroupInput =
  typeof AssessmentsOperationsListByGroupInput.Type;

// Output Schema
export const AssessmentsOperationsListByGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => AssessmentSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type AssessmentsOperationsListByGroupOutput =
  typeof AssessmentsOperationsListByGroupOutput.Type;

// The operation
/**
 * List Assessment resources by Group
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 * @param groupName - Group ARM name
 */
export const AssessmentsOperationsListByGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AssessmentsOperationsListByGroupInput,
    outputSchema: AssessmentsOperationsListByGroupOutput,
  }));
// Input Schema
export const AvsAssessedMachinesOperationsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
    assessmentName: Schema.String.pipe(T.PathParam()),
    avsAssessedMachineName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}/avsAssessments/{assessmentName}/avsAssessedMachines/{avsAssessedMachineName}",
      apiVersion: "2024-01-15",
    }),
  );
export type AvsAssessedMachinesOperationsGetInput =
  typeof AvsAssessedMachinesOperationsGetInput.Type;

// Output Schema
export const AvsAssessedMachinesOperationsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => AvsAssessedMachinePropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type AvsAssessedMachinesOperationsGetOutput =
  typeof AvsAssessedMachinesOperationsGetOutput.Type;

// The operation
/**
 * Get a AvsAssessedMachine
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 * @param groupName - Group ARM name
 * @param assessmentName - AVS Assessment ARM name
 * @param avsAssessedMachineName - AVS assessment Assessed Machine ARM name
 */
export const AvsAssessedMachinesOperationsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AvsAssessedMachinesOperationsGetInput,
    outputSchema: AvsAssessedMachinesOperationsGetOutput,
  }));
// Input Schema
export const AvsAssessedMachinesOperationsListByAvsAssessmentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
    assessmentName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
    continuationToken: Schema.optional(Schema.String),
    totalRecordCount: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}/avsAssessments/{assessmentName}/avsAssessedMachines",
      apiVersion: "2024-01-15",
    }),
  );
export type AvsAssessedMachinesOperationsListByAvsAssessmentInput =
  typeof AvsAssessedMachinesOperationsListByAvsAssessmentInput.Type;

// Output Schema
export const AvsAssessedMachinesOperationsListByAvsAssessmentOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => AvsAssessedMachineSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type AvsAssessedMachinesOperationsListByAvsAssessmentOutput =
  typeof AvsAssessedMachinesOperationsListByAvsAssessmentOutput.Type;

// The operation
/**
 * List AvsAssessedMachine resources by AvsAssessment
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $filter - Filter query.
 * @param pageSize - Optional parameter for page size.
 * @param continuationToken - Optional parameter for continuation token.
 * @param totalRecordCount - Total record count.
 * @param projectName - Assessment Project Name
 * @param groupName - Group ARM name
 * @param assessmentName - AVS Assessment ARM name
 */
export const AvsAssessedMachinesOperationsListByAvsAssessment =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AvsAssessedMachinesOperationsListByAvsAssessmentInput,
    outputSchema: AvsAssessedMachinesOperationsListByAvsAssessmentOutput,
  }));
// Input Schema
export const AvsAssessmentOptionsOperationsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    avsAssessmentOptionsName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/avsAssessmentOptions/{avsAssessmentOptionsName}",
      apiVersion: "2024-01-15",
    }),
  );
export type AvsAssessmentOptionsOperationsGetInput =
  typeof AvsAssessmentOptionsOperationsGetInput.Type;

// Output Schema
export const AvsAssessmentOptionsOperationsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => AvsAssessmentOptionsPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type AvsAssessmentOptionsOperationsGetOutput =
  typeof AvsAssessmentOptionsOperationsGetOutput.Type;

// The operation
/**
 * Get a AvsAssessmentOptions
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 * @param avsAssessmentOptionsName - AVS Assessment options ARM name. Accepted value is 'default'
 */
export const AvsAssessmentOptionsOperationsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AvsAssessmentOptionsOperationsGetInput,
    outputSchema: AvsAssessmentOptionsOperationsGetOutput,
  }));
// Input Schema
export const AvsAssessmentOptionsOperationsListByAssessmentProjectInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/avsAssessmentOptions",
      apiVersion: "2024-01-15",
    }),
  );
export type AvsAssessmentOptionsOperationsListByAssessmentProjectInput =
  typeof AvsAssessmentOptionsOperationsListByAssessmentProjectInput.Type;

// Output Schema
export const AvsAssessmentOptionsOperationsListByAssessmentProjectOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => AvsAssessmentOptionsSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type AvsAssessmentOptionsOperationsListByAssessmentProjectOutput =
  typeof AvsAssessmentOptionsOperationsListByAssessmentProjectOutput.Type;

// The operation
/**
 * List AvsAssessmentOptions resources by AssessmentProject
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 */
export const AvsAssessmentOptionsOperationsListByAssessmentProject =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AvsAssessmentOptionsOperationsListByAssessmentProjectInput,
    outputSchema: AvsAssessmentOptionsOperationsListByAssessmentProjectOutput,
  }));
// Input Schema
export const AvsAssessmentsOperationsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
    assessmentName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => AvsAssessmentPropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}/avsAssessments/{assessmentName}",
      apiVersion: "2024-01-15",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type AvsAssessmentsOperationsCreateInput =
  typeof AvsAssessmentsOperationsCreateInput.Type;

// Output Schema
export const AvsAssessmentsOperationsCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => AvsAssessmentPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type AvsAssessmentsOperationsCreateOutput =
  typeof AvsAssessmentsOperationsCreateOutput.Type;

// The operation
/**
 * Create a AvsAssessment
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 * @param groupName - Group ARM name
 * @param assessmentName - AVS Assessment ARM name
 */
export const AvsAssessmentsOperationsCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AvsAssessmentsOperationsCreateInput,
    outputSchema: AvsAssessmentsOperationsCreateOutput,
  }));
// Input Schema
export const AvsAssessmentsOperationsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
    assessmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}/avsAssessments/{assessmentName}",
      apiVersion: "2024-01-15",
    }),
  );
export type AvsAssessmentsOperationsDeleteInput =
  typeof AvsAssessmentsOperationsDeleteInput.Type;

// Output Schema
export const AvsAssessmentsOperationsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AvsAssessmentsOperationsDeleteOutput =
  typeof AvsAssessmentsOperationsDeleteOutput.Type;

// The operation
/**
 * Delete a AvsAssessment
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 * @param groupName - Group ARM name
 * @param assessmentName - AVS Assessment ARM name
 */
export const AvsAssessmentsOperationsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AvsAssessmentsOperationsDeleteInput,
    outputSchema: AvsAssessmentsOperationsDeleteOutput,
  }));
// Input Schema
export const AvsAssessmentsOperationsDownloadUrlInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
    assessmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}/avsAssessments/{assessmentName}/downloadUrl",
      apiVersion: "2024-01-15",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type AvsAssessmentsOperationsDownloadUrlInput =
  typeof AvsAssessmentsOperationsDownloadUrlInput.Type;

// Output Schema
export const AvsAssessmentsOperationsDownloadUrlOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    assessmentReportUrl: Schema.String,
    expirationTime: Schema.String,
  });
export type AvsAssessmentsOperationsDownloadUrlOutput =
  typeof AvsAssessmentsOperationsDownloadUrlOutput.Type;

// The operation
/**
 * Get download URL for the assessment report.
 *
 * Get the URL for downloading the assessment in a report format.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 * @param groupName - Group ARM name
 * @param assessmentName - AVS Assessment ARM name
 */
export const AvsAssessmentsOperationsDownloadUrl =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AvsAssessmentsOperationsDownloadUrlInput,
    outputSchema: AvsAssessmentsOperationsDownloadUrlOutput,
  }));
// Input Schema
export const AvsAssessmentsOperationsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
    assessmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}/avsAssessments/{assessmentName}",
      apiVersion: "2024-01-15",
    }),
  );
export type AvsAssessmentsOperationsGetInput =
  typeof AvsAssessmentsOperationsGetInput.Type;

// Output Schema
export const AvsAssessmentsOperationsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => AvsAssessmentPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type AvsAssessmentsOperationsGetOutput =
  typeof AvsAssessmentsOperationsGetOutput.Type;

// The operation
/**
 * Get a AvsAssessment
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 * @param groupName - Group ARM name
 * @param assessmentName - AVS Assessment ARM name
 */
export const AvsAssessmentsOperationsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AvsAssessmentsOperationsGetInput,
    outputSchema: AvsAssessmentsOperationsGetOutput,
  }),
);
// Input Schema
export const AvsAssessmentsOperationsListByGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}/avsAssessments",
      apiVersion: "2024-01-15",
    }),
  );
export type AvsAssessmentsOperationsListByGroupInput =
  typeof AvsAssessmentsOperationsListByGroupInput.Type;

// Output Schema
export const AvsAssessmentsOperationsListByGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => AvsAssessmentSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type AvsAssessmentsOperationsListByGroupOutput =
  typeof AvsAssessmentsOperationsListByGroupOutput.Type;

// The operation
/**
 * List AvsAssessment resources by Group
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 * @param groupName - Group ARM name
 */
export const AvsAssessmentsOperationsListByGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AvsAssessmentsOperationsListByGroupInput,
    outputSchema: AvsAssessmentsOperationsListByGroupOutput,
  }));
// Input Schema
export const DatabaseInstancesControllerGetDatabaseInstanceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/migrateProjects/{migrateProjectName}/databaseInstances/{databaseInstanceName}",
      apiVersion: "2023-01-01",
    }),
  );
export type DatabaseInstancesControllerGetDatabaseInstanceInput =
  typeof DatabaseInstancesControllerGetDatabaseInstanceInput.Type;

// Output Schema
export const DatabaseInstancesControllerGetDatabaseInstanceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.suspend(() => DatabaseInstancePropertiesSchema),
    ),
  });
export type DatabaseInstancesControllerGetDatabaseInstanceOutput =
  typeof DatabaseInstancesControllerGetDatabaseInstanceOutput.Type;

// The operation
/**
 * Gets a database instance in the migrate project.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const DatabaseInstancesControllerGetDatabaseInstance =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DatabaseInstancesControllerGetDatabaseInstanceInput,
    outputSchema: DatabaseInstancesControllerGetDatabaseInstanceOutput,
  }));
// Input Schema
export const DatabaseInstancesControllerListDatabaseInstancesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/migrateProjects/{migrateProjectName}/databaseInstances",
      apiVersion: "2023-01-01",
    }),
  );
export type DatabaseInstancesControllerListDatabaseInstancesInput =
  typeof DatabaseInstancesControllerListDatabaseInstancesInput.Type;

// Output Schema
export const DatabaseInstancesControllerListDatabaseInstancesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => DatabaseInstanceSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type DatabaseInstancesControllerListDatabaseInstancesOutput =
  typeof DatabaseInstancesControllerListDatabaseInstancesOutput.Type;

// The operation
/**
 * Gets a list of database instances in the migrate project.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const DatabaseInstancesControllerListDatabaseInstances =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DatabaseInstancesControllerListDatabaseInstancesInput,
    outputSchema: DatabaseInstancesControllerListDatabaseInstancesOutput,
  }));
// Input Schema
export const DatabasesControllerGetDatabaseInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/migrateProjects/{migrateProjectName}/databases/{databaseName}",
      apiVersion: "2023-01-01",
    }),
  );
export type DatabasesControllerGetDatabaseInput =
  typeof DatabasesControllerGetDatabaseInput.Type;

// Output Schema
export const DatabasesControllerGetDatabaseOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    properties: Schema.optional(Schema.suspend(() => DatabasePropertiesSchema)),
  });
export type DatabasesControllerGetDatabaseOutput =
  typeof DatabasesControllerGetDatabaseOutput.Type;

// The operation
/**
 * Gets a database in the migrate project.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const DatabasesControllerGetDatabase =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DatabasesControllerGetDatabaseInput,
    outputSchema: DatabasesControllerGetDatabaseOutput,
  }));
// Input Schema
export const DatabasesControllerListDatabasesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/migrateProjects/{migrateProjectName}/databases",
      apiVersion: "2023-01-01",
    }),
  );
export type DatabasesControllerListDatabasesInput =
  typeof DatabasesControllerListDatabasesInput.Type;

// Output Schema
export const DatabasesControllerListDatabasesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.Array(Schema.suspend(() => DatabaseSchema))),
    nextLink: Schema.optional(Schema.String),
  });
export type DatabasesControllerListDatabasesOutput =
  typeof DatabasesControllerListDatabasesOutput.Type;

// The operation
/**
 * Gets a list of databases in the migrate project.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const DatabasesControllerListDatabases =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DatabasesControllerListDatabasesInput,
    outputSchema: DatabasesControllerListDatabasesOutput,
  }));
// Input Schema
export const DependencyMapControllerClientGroupMembersInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    machineId: Schema.optional(Schema.String),
    processGroupName: Schema.optional(Schema.String),
    processName: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    filters: Schema.optional(
      Schema.suspend(
        () =>
          DependencyMapServiceMapextensionsDependencyMapRequestFiltersSchema,
      ),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/vmwareSites/{siteName}/clientGroupMembers",
      apiVersion: "2023-06-06",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type DependencyMapControllerClientGroupMembersInput =
  typeof DependencyMapControllerClientGroupMembersInput.Type;

// Output Schema
export const DependencyMapControllerClientGroupMembersOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type DependencyMapControllerClientGroupMembersOutput =
  typeof DependencyMapControllerClientGroupMembersOutput.Type;

// The operation
/**
 * API to list client group members for the selected client group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const DependencyMapControllerClientGroupMembers =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DependencyMapControllerClientGroupMembersInput,
    outputSchema: DependencyMapControllerClientGroupMembersOutput,
  }));
// Input Schema
export const DependencyMapControllerExportDependenciesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/vmwareSites/{siteName}/exportDependencies",
      apiVersion: "2023-06-06",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type DependencyMapControllerExportDependenciesInput =
  typeof DependencyMapControllerExportDependenciesInput.Type;

// Output Schema
export const DependencyMapControllerExportDependenciesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type DependencyMapControllerExportDependenciesOutput =
  typeof DependencyMapControllerExportDependenciesOutput.Type;

// The operation
/**
 * API to generate report containing agentless dependencies.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const DependencyMapControllerExportDependencies =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DependencyMapControllerExportDependenciesInput,
    outputSchema: DependencyMapControllerExportDependenciesOutput,
  }));
// Input Schema
export const DependencyMapControllerGenerateCoarseMapInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    filters: Schema.optional(
      Schema.suspend(
        () =>
          DependencyMapServiceMapextensionsDependencyMapRequestFiltersSchema,
      ),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/vmwareSites/{siteName}/generateCoarseMap",
      apiVersion: "2023-06-06",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type DependencyMapControllerGenerateCoarseMapInput =
  typeof DependencyMapControllerGenerateCoarseMapInput.Type;

// Output Schema
export const DependencyMapControllerGenerateCoarseMapOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type DependencyMapControllerGenerateCoarseMapOutput =
  typeof DependencyMapControllerGenerateCoarseMapOutput.Type;

// The operation
/**
 * API to generate coarse map for the list of machines.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const DependencyMapControllerGenerateCoarseMap =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DependencyMapControllerGenerateCoarseMapInput,
    outputSchema: DependencyMapControllerGenerateCoarseMapOutput,
  }));
// Input Schema
export const DependencyMapControllerGenerateDetailedMapInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    machineId: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    filters: Schema.optional(
      Schema.suspend(
        () =>
          DependencyMapServiceMapextensionsDependencyMapRequestFiltersSchema,
      ),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/vmwareSites/{siteName}/generateDetailedMap",
      apiVersion: "2023-06-06",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type DependencyMapControllerGenerateDetailedMapInput =
  typeof DependencyMapControllerGenerateDetailedMapInput.Type;

// Output Schema
export const DependencyMapControllerGenerateDetailedMapOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type DependencyMapControllerGenerateDetailedMapOutput =
  typeof DependencyMapControllerGenerateDetailedMapOutput.Type;

// The operation
/**
 * API to generate detailed map for a selected machine.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const DependencyMapControllerGenerateDetailedMap =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DependencyMapControllerGenerateDetailedMapInput,
    outputSchema: DependencyMapControllerGenerateDetailedMapOutput,
  }));
// Input Schema
export const DependencyMapControllerServerGroupMembersInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    serverPort: Schema.optional(Schema.Number),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    filters: Schema.optional(
      Schema.suspend(
        () =>
          DependencyMapServiceMapextensionsDependencyMapRequestFiltersSchema,
      ),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/vmwareSites/{siteName}/serverGroupMembers",
      apiVersion: "2023-06-06",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type DependencyMapControllerServerGroupMembersInput =
  typeof DependencyMapControllerServerGroupMembersInput.Type;

// Output Schema
export const DependencyMapControllerServerGroupMembersOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type DependencyMapControllerServerGroupMembersOutput =
  typeof DependencyMapControllerServerGroupMembersOutput.Type;

// The operation
/**
 * API to list server group members for the selected server group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const DependencyMapControllerServerGroupMembers =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DependencyMapControllerServerGroupMembersInput,
    outputSchema: DependencyMapControllerServerGroupMembersOutput,
  }));
// Input Schema
export const EventsControllerDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/migrateProjects/{migrateProjectName}/migrateEvents/{eventName}",
      apiVersion: "2023-01-01",
    }),
  );
export type EventsControllerDeleteInput =
  typeof EventsControllerDeleteInput.Type;

// Output Schema
export const EventsControllerDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({});
export type EventsControllerDeleteOutput =
  typeof EventsControllerDeleteOutput.Type;

// The operation
/**
 * Delete the migrate event
 *
 * Delete the migrate event. Deleting non-existent migrate event is a no-operation.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const EventsControllerDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: EventsControllerDeleteInput,
    outputSchema: EventsControllerDeleteOutput,
  }),
);
// Input Schema
export const EventsControllerGetEventInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/migrateProjects/{migrateProjectName}/migrateEvents/{eventName}",
      apiVersion: "2023-01-01",
    }),
  );
export type EventsControllerGetEventInput =
  typeof EventsControllerGetEventInput.Type;

// Output Schema
export const EventsControllerGetEventOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.suspend(() => MigrateEventPropertiesSchema),
    ),
  });
export type EventsControllerGetEventOutput =
  typeof EventsControllerGetEventOutput.Type;

// The operation
/**
 * Gets an event in the migrate project.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const EventsControllerGetEvent = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: EventsControllerGetEventInput,
    outputSchema: EventsControllerGetEventOutput,
  }),
);
// Input Schema
export const EventsControllerListEventsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/migrateProjects/{migrateProjectName}/migrateEvents",
      apiVersion: "2023-01-01",
    }),
  );
export type EventsControllerListEventsInput =
  typeof EventsControllerListEventsInput.Type;

// Output Schema
export const EventsControllerListEventsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => MigrateEventSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type EventsControllerListEventsOutput =
  typeof EventsControllerListEventsOutput.Type;

// The operation
/**
 * Gets a list of events in the migrate project.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const EventsControllerListEvents = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: EventsControllerListEventsInput,
    outputSchema: EventsControllerListEventsOutput,
  }),
);
// Input Schema
export const GroupsOperationsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(Schema.suspend(() => GroupPropertiesSchema)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}",
      apiVersion: "2024-01-15",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type GroupsOperationsCreateInput =
  typeof GroupsOperationsCreateInput.Type;

// Output Schema
export const GroupsOperationsCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => GroupPropertiesSchema)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type GroupsOperationsCreateOutput =
  typeof GroupsOperationsCreateOutput.Type;

// The operation
/**
 * Create a Group
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 * @param groupName - Group ARM name
 */
export const GroupsOperationsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GroupsOperationsCreateInput,
    outputSchema: GroupsOperationsCreateOutput,
  }),
);
// Input Schema
export const GroupsOperationsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}",
      apiVersion: "2024-01-15",
    }),
  );
export type GroupsOperationsDeleteInput =
  typeof GroupsOperationsDeleteInput.Type;

// Output Schema
export const GroupsOperationsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type GroupsOperationsDeleteOutput =
  typeof GroupsOperationsDeleteOutput.Type;

// The operation
/**
 * Delete a Group
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 * @param groupName - Group ARM name
 */
export const GroupsOperationsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GroupsOperationsDeleteInput,
    outputSchema: GroupsOperationsDeleteOutput,
  }),
);
// Input Schema
export const GroupsOperationsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}",
      apiVersion: "2024-01-15",
    }),
  );
export type GroupsOperationsGetInput = typeof GroupsOperationsGetInput.Type;

// Output Schema
export const GroupsOperationsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => GroupPropertiesSchema)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type GroupsOperationsGetOutput = typeof GroupsOperationsGetOutput.Type;

// The operation
/**
 * Get a Group
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 * @param groupName - Group ARM name
 */
export const GroupsOperationsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GroupsOperationsGetInput,
  outputSchema: GroupsOperationsGetOutput,
}));
// Input Schema
export const GroupsOperationsListByAssessmentProjectInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups",
      apiVersion: "2024-01-15",
    }),
  );
export type GroupsOperationsListByAssessmentProjectInput =
  typeof GroupsOperationsListByAssessmentProjectInput.Type;

// Output Schema
export const GroupsOperationsListByAssessmentProjectOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => GroupSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type GroupsOperationsListByAssessmentProjectOutput =
  typeof GroupsOperationsListByAssessmentProjectOutput.Type;

// The operation
/**
 * List Group resources by AssessmentProject
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 */
export const GroupsOperationsListByAssessmentProject =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GroupsOperationsListByAssessmentProjectInput,
    outputSchema: GroupsOperationsListByAssessmentProjectOutput,
  }));
// Input Schema
export const GroupsOperationsUpdateMachinesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
    eTag: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.suspend(() => GroupBodyPropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}/updateMachines",
      apiVersion: "2024-01-15",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type GroupsOperationsUpdateMachinesInput =
  typeof GroupsOperationsUpdateMachinesInput.Type;

// Output Schema
export const GroupsOperationsUpdateMachinesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => GroupPropertiesSchema)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type GroupsOperationsUpdateMachinesOutput =
  typeof GroupsOperationsUpdateMachinesOutput.Type;

// The operation
/**
 * Update machines in group.
 *
 * Update machines in group by adding or removing machines.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 * @param groupName - Group ARM name
 */
export const GroupsOperationsUpdateMachines =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GroupsOperationsUpdateMachinesInput,
    outputSchema: GroupsOperationsUpdateMachinesOutput,
  }));
// Input Schema
export const HypervClusterControllerCreateClusterInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => HypervClusterPropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/hypervSites/{siteName}/clusters/{clusterName}",
      apiVersion: "2023-06-06",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type HypervClusterControllerCreateClusterInput =
  typeof HypervClusterControllerCreateClusterInput.Type;

// Output Schema
export const HypervClusterControllerCreateClusterOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => HypervClusterPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type HypervClusterControllerCreateClusterOutput =
  typeof HypervClusterControllerCreateClusterOutput.Type;

// The operation
/**
 * Method to create or update a Hyper-V cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param clusterName -  Cluster ARM name
 */
export const HypervClusterControllerCreateCluster =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: HypervClusterControllerCreateClusterInput,
    outputSchema: HypervClusterControllerCreateClusterOutput,
  }));
// Input Schema
export const HypervClusterControllerDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/hypervSites/{siteName}/clusters/{clusterName}",
      apiVersion: "2023-06-06",
    }),
  );
export type HypervClusterControllerDeleteInput =
  typeof HypervClusterControllerDeleteInput.Type;

// Output Schema
export const HypervClusterControllerDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type HypervClusterControllerDeleteOutput =
  typeof HypervClusterControllerDeleteOutput.Type;

// The operation
/**
 * Delete a HypervCluster
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param clusterName -  Cluster ARM name
 */
export const HypervClusterControllerDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: HypervClusterControllerDeleteInput,
    outputSchema: HypervClusterControllerDeleteOutput,
  }));
// Input Schema
export const HypervClusterControllerGetClusterInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    clusterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/hypervSites/{siteName}/clusters/{clusterName}",
      apiVersion: "2023-06-06",
    }),
  );
export type HypervClusterControllerGetClusterInput =
  typeof HypervClusterControllerGetClusterInput.Type;

// Output Schema
export const HypervClusterControllerGetClusterOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => HypervClusterPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type HypervClusterControllerGetClusterOutput =
  typeof HypervClusterControllerGetClusterOutput.Type;

// The operation
/**
 * Method to get a Hyper-V cluster.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param clusterName -  Cluster ARM name
 */
export const HypervClusterControllerGetCluster =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: HypervClusterControllerGetClusterInput,
    outputSchema: HypervClusterControllerGetClusterOutput,
  }));
// Input Schema
export const HypervClusterControllerListByHypervSiteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/hypervSites/{siteName}/clusters",
      apiVersion: "2023-06-06",
    }),
  );
export type HypervClusterControllerListByHypervSiteInput =
  typeof HypervClusterControllerListByHypervSiteInput.Type;

// Output Schema
export const HypervClusterControllerListByHypervSiteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => HypervClusterSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type HypervClusterControllerListByHypervSiteOutput =
  typeof HypervClusterControllerListByHypervSiteOutput.Type;

// The operation
/**
 * List HypervCluster resources by HypervSite
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param filter - filter query
 * @param siteName - Site name
 */
export const HypervClusterControllerListByHypervSite =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: HypervClusterControllerListByHypervSiteInput,
    outputSchema: HypervClusterControllerListByHypervSiteOutput,
  }));
// Input Schema
export const HypervCollectorsOperationsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    hypervCollectorName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => CollectorPropertiesBaseWithAgentSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/hypervcollectors/{hypervCollectorName}",
      apiVersion: "2024-01-15",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type HypervCollectorsOperationsCreateInput =
  typeof HypervCollectorsOperationsCreateInput.Type;

// Output Schema
export const HypervCollectorsOperationsCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => CollectorPropertiesBaseWithAgentSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type HypervCollectorsOperationsCreateOutput =
  typeof HypervCollectorsOperationsCreateOutput.Type;

// The operation
/**
 * Create a HypervCollector
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 * @param hypervCollectorName - Hyper-V collector ARM name
 */
export const HypervCollectorsOperationsCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: HypervCollectorsOperationsCreateInput,
    outputSchema: HypervCollectorsOperationsCreateOutput,
  }));
// Input Schema
export const HypervCollectorsOperationsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    hypervCollectorName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/hypervcollectors/{hypervCollectorName}",
      apiVersion: "2024-01-15",
    }),
  );
export type HypervCollectorsOperationsDeleteInput =
  typeof HypervCollectorsOperationsDeleteInput.Type;

// Output Schema
export const HypervCollectorsOperationsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type HypervCollectorsOperationsDeleteOutput =
  typeof HypervCollectorsOperationsDeleteOutput.Type;

// The operation
/**
 * Delete a HypervCollector
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 * @param hypervCollectorName - Hyper-V collector ARM name
 */
export const HypervCollectorsOperationsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: HypervCollectorsOperationsDeleteInput,
    outputSchema: HypervCollectorsOperationsDeleteOutput,
  }));
// Input Schema
export const HypervCollectorsOperationsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    hypervCollectorName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/hypervcollectors/{hypervCollectorName}",
      apiVersion: "2024-01-15",
    }),
  );
export type HypervCollectorsOperationsGetInput =
  typeof HypervCollectorsOperationsGetInput.Type;

// Output Schema
export const HypervCollectorsOperationsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => CollectorPropertiesBaseWithAgentSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type HypervCollectorsOperationsGetOutput =
  typeof HypervCollectorsOperationsGetOutput.Type;

// The operation
/**
 * Get a HypervCollector
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 * @param hypervCollectorName - Hyper-V collector ARM name
 */
export const HypervCollectorsOperationsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: HypervCollectorsOperationsGetInput,
    outputSchema: HypervCollectorsOperationsGetOutput,
  }));
// Input Schema
export const HypervCollectorsOperationsListByAssessmentProjectInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/hypervcollectors",
      apiVersion: "2024-01-15",
    }),
  );
export type HypervCollectorsOperationsListByAssessmentProjectInput =
  typeof HypervCollectorsOperationsListByAssessmentProjectInput.Type;

// Output Schema
export const HypervCollectorsOperationsListByAssessmentProjectOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => HypervCollectorSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type HypervCollectorsOperationsListByAssessmentProjectOutput =
  typeof HypervCollectorsOperationsListByAssessmentProjectOutput.Type;

// The operation
/**
 * List HypervCollector resources by AssessmentProject
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 */
export const HypervCollectorsOperationsListByAssessmentProject =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: HypervCollectorsOperationsListByAssessmentProjectInput,
    outputSchema: HypervCollectorsOperationsListByAssessmentProjectOutput,
  }));
// Input Schema
export const HypervDependencyMapControllerClientGroupMembersInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    machineId: Schema.optional(Schema.String),
    processGroupName: Schema.optional(Schema.String),
    processName: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    filters: Schema.optional(
      Schema.suspend(
        () =>
          DependencyMapServiceMapextensionsDependencyMapRequestFiltersSchema,
      ),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/hypervSites/{siteName}/clientGroupMembers",
      apiVersion: "2023-06-06",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type HypervDependencyMapControllerClientGroupMembersInput =
  typeof HypervDependencyMapControllerClientGroupMembersInput.Type;

// Output Schema
export const HypervDependencyMapControllerClientGroupMembersOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type HypervDependencyMapControllerClientGroupMembersOutput =
  typeof HypervDependencyMapControllerClientGroupMembersOutput.Type;

// The operation
/**
 * API to list client group members for the selected client group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const HypervDependencyMapControllerClientGroupMembers =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: HypervDependencyMapControllerClientGroupMembersInput,
    outputSchema: HypervDependencyMapControllerClientGroupMembersOutput,
  }));
// Input Schema
export const HypervDependencyMapControllerExportDependenciesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/hypervSites/{siteName}/exportDependencies",
      apiVersion: "2023-06-06",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type HypervDependencyMapControllerExportDependenciesInput =
  typeof HypervDependencyMapControllerExportDependenciesInput.Type;

// Output Schema
export const HypervDependencyMapControllerExportDependenciesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type HypervDependencyMapControllerExportDependenciesOutput =
  typeof HypervDependencyMapControllerExportDependenciesOutput.Type;

// The operation
/**
 * API to generate report containing agentless dependencies.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const HypervDependencyMapControllerExportDependencies =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: HypervDependencyMapControllerExportDependenciesInput,
    outputSchema: HypervDependencyMapControllerExportDependenciesOutput,
  }));
// Input Schema
export const HypervDependencyMapControllerGenerateCoarseMapInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    filters: Schema.optional(
      Schema.suspend(
        () =>
          DependencyMapServiceMapextensionsDependencyMapRequestFiltersSchema,
      ),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/hypervSites/{siteName}/generateCoarseMap",
      apiVersion: "2023-06-06",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type HypervDependencyMapControllerGenerateCoarseMapInput =
  typeof HypervDependencyMapControllerGenerateCoarseMapInput.Type;

// Output Schema
export const HypervDependencyMapControllerGenerateCoarseMapOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type HypervDependencyMapControllerGenerateCoarseMapOutput =
  typeof HypervDependencyMapControllerGenerateCoarseMapOutput.Type;

// The operation
/**
 * API to generate coarse map for the list of machines.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const HypervDependencyMapControllerGenerateCoarseMap =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: HypervDependencyMapControllerGenerateCoarseMapInput,
    outputSchema: HypervDependencyMapControllerGenerateCoarseMapOutput,
  }));
// Input Schema
export const HypervDependencyMapControllerGenerateDetailedMapInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    machineId: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    filters: Schema.optional(
      Schema.suspend(
        () =>
          DependencyMapServiceMapextensionsDependencyMapRequestFiltersSchema,
      ),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/hypervSites/{siteName}/generateDetailedMap",
      apiVersion: "2023-06-06",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type HypervDependencyMapControllerGenerateDetailedMapInput =
  typeof HypervDependencyMapControllerGenerateDetailedMapInput.Type;

// Output Schema
export const HypervDependencyMapControllerGenerateDetailedMapOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type HypervDependencyMapControllerGenerateDetailedMapOutput =
  typeof HypervDependencyMapControllerGenerateDetailedMapOutput.Type;

// The operation
/**
 * API to generate detailed map for a selected machine.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const HypervDependencyMapControllerGenerateDetailedMap =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: HypervDependencyMapControllerGenerateDetailedMapInput,
    outputSchema: HypervDependencyMapControllerGenerateDetailedMapOutput,
  }));
// Input Schema
export const HypervDependencyMapControllerServerGroupMembersInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    serverPort: Schema.optional(Schema.Number),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    filters: Schema.optional(
      Schema.suspend(
        () =>
          DependencyMapServiceMapextensionsDependencyMapRequestFiltersSchema,
      ),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/hypervSites/{siteName}/serverGroupMembers",
      apiVersion: "2023-06-06",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type HypervDependencyMapControllerServerGroupMembersInput =
  typeof HypervDependencyMapControllerServerGroupMembersInput.Type;

// Output Schema
export const HypervDependencyMapControllerServerGroupMembersOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type HypervDependencyMapControllerServerGroupMembersOutput =
  typeof HypervDependencyMapControllerServerGroupMembersOutput.Type;

// The operation
/**
 * API to list server group members for the selected server group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const HypervDependencyMapControllerServerGroupMembers =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: HypervDependencyMapControllerServerGroupMembersInput,
    outputSchema: HypervDependencyMapControllerServerGroupMembersOutput,
  }));
// Input Schema
export const HypervDependencyMapControllerUpdateDependencyMapStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    machines: Schema.optional(
      Schema.Array(Schema.suspend(() => DependencyMapMachineInputSchema)),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/hypervSites/{siteName}/updateDependencyMapStatus",
      apiVersion: "2023-06-06",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type HypervDependencyMapControllerUpdateDependencyMapStatusInput =
  typeof HypervDependencyMapControllerUpdateDependencyMapStatusInput.Type;

// Output Schema
export const HypervDependencyMapControllerUpdateDependencyMapStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type HypervDependencyMapControllerUpdateDependencyMapStatusOutput =
  typeof HypervDependencyMapControllerUpdateDependencyMapStatusOutput.Type;

// The operation
/**
 * Method to enable disable dependency map status for machines
 * in a site.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const HypervDependencyMapControllerUpdateDependencyMapStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: HypervDependencyMapControllerUpdateDependencyMapStatusInput,
    outputSchema: HypervDependencyMapControllerUpdateDependencyMapStatusOutput,
  }));
// Input Schema
export const HypervHostControllerCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    hostName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => HypervHostPropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/hypervSites/{siteName}/hosts/{hostName}",
      apiVersion: "2023-06-06",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type HypervHostControllerCreateInput =
  typeof HypervHostControllerCreateInput.Type;

// Output Schema
export const HypervHostControllerCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => HypervHostPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type HypervHostControllerCreateOutput =
  typeof HypervHostControllerCreateOutput.Type;

// The operation
/**
 * Create a HypervHost
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param hostName -  Host name
 */
export const HypervHostControllerCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: HypervHostControllerCreateInput,
    outputSchema: HypervHostControllerCreateOutput,
  }),
);
// Input Schema
export const HypervHostControllerDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    hostName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/hypervSites/{siteName}/hosts/{hostName}",
      apiVersion: "2023-06-06",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type HypervHostControllerDeleteInput =
  typeof HypervHostControllerDeleteInput.Type;

// Output Schema
export const HypervHostControllerDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type HypervHostControllerDeleteOutput =
  typeof HypervHostControllerDeleteOutput.Type;

// The operation
/**
 * Delete a HypervHost
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param hostName -  Host name
 */
export const HypervHostControllerDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: HypervHostControllerDeleteInput,
    outputSchema: HypervHostControllerDeleteOutput,
  }),
);
// Input Schema
export const HypervHostControllerGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    hostName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/hypervSites/{siteName}/hosts/{hostName}",
      apiVersion: "2023-06-06",
    }),
  );
export type HypervHostControllerGetInput =
  typeof HypervHostControllerGetInput.Type;

// Output Schema
export const HypervHostControllerGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => HypervHostPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type HypervHostControllerGetOutput =
  typeof HypervHostControllerGetOutput.Type;

// The operation
/**
 * Get a HypervHost
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param hostName -  Host name
 */
export const HypervHostControllerGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: HypervHostControllerGetInput,
    outputSchema: HypervHostControllerGetOutput,
  }),
);
// Input Schema
export const HypervHostControllerListByHypervSiteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/hypervSites/{siteName}/hosts",
      apiVersion: "2023-06-06",
    }),
  );
export type HypervHostControllerListByHypervSiteInput =
  typeof HypervHostControllerListByHypervSiteInput.Type;

// Output Schema
export const HypervHostControllerListByHypervSiteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => HypervHostSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type HypervHostControllerListByHypervSiteOutput =
  typeof HypervHostControllerListByHypervSiteOutput.Type;

// The operation
/**
 * List HypervHost resources by HypervSite
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param filter - filter query
 * @param siteName - Site name
 */
export const HypervHostControllerListByHypervSite =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: HypervHostControllerListByHypervSiteInput,
    outputSchema: HypervHostControllerListByHypervSiteOutput,
  }));
// Input Schema
export const HypervJobsControllerGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    jobName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/vmwareSites/{siteName}/jobs/{jobName}",
      apiVersion: "2023-06-06",
    }),
  );
export type HypervJobsControllerGetInput =
  typeof HypervJobsControllerGetInput.Type;

// Output Schema
export const HypervJobsControllerGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => JobPropertiesSchema)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type HypervJobsControllerGetOutput =
  typeof HypervJobsControllerGetOutput.Type;

// The operation
/**
 * Get a VmwareJob
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param jobName -  Jobs name
 */
export const HypervJobsControllerGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: HypervJobsControllerGetInput,
    outputSchema: HypervJobsControllerGetOutput,
  }),
);
// Input Schema
export const HypervJobsControllerListByVmwareSiteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/vmwareSites/{siteName}/jobs",
      apiVersion: "2023-06-06",
    }),
  );
export type HypervJobsControllerListByVmwareSiteInput =
  typeof HypervJobsControllerListByVmwareSiteInput.Type;

// Output Schema
export const HypervJobsControllerListByVmwareSiteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => VmwareJobSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type HypervJobsControllerListByVmwareSiteOutput =
  typeof HypervJobsControllerListByVmwareSiteOutput.Type;

// The operation
/**
 * List VmwareJob resources by VmwareSite
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const HypervJobsControllerListByVmwareSite =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: HypervJobsControllerListByVmwareSiteInput,
    outputSchema: HypervJobsControllerListByVmwareSiteOutput,
  }));
// Input Schema
export const HypervJobsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  siteName: Schema.String.pipe(T.PathParam()),
  jobName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/hypervSites/{siteName}/jobs/{jobName}",
    apiVersion: "2023-06-06",
  }),
);
export type HypervJobsGetInput = typeof HypervJobsGetInput.Type;

// Output Schema
export const HypervJobsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => JobPropertiesSchema)),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type HypervJobsGetOutput = typeof HypervJobsGetOutput.Type;

// The operation
/**
 * Get a HypervJob
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param jobName -  Job name
 */
export const HypervJobsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: HypervJobsGetInput,
  outputSchema: HypervJobsGetOutput,
}));
// Input Schema
export const HypervJobsListByHypervSiteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/hypervSites/{siteName}/jobs",
      apiVersion: "2023-06-06",
    }),
  );
export type HypervJobsListByHypervSiteInput =
  typeof HypervJobsListByHypervSiteInput.Type;

// Output Schema
export const HypervJobsListByHypervSiteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => HypervJobSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type HypervJobsListByHypervSiteOutput =
  typeof HypervJobsListByHypervSiteOutput.Type;

// The operation
/**
 * List HypervJob resources by HypervSite
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const HypervJobsListByHypervSite = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: HypervJobsListByHypervSiteInput,
    outputSchema: HypervJobsListByHypervSiteOutput,
  }),
);
// Input Schema
export const HypervMachinesControllerGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    machineName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/hypervSites/{siteName}/machines/{machineName}",
      apiVersion: "2023-06-06",
    }),
  );
export type HypervMachinesControllerGetInput =
  typeof HypervMachinesControllerGetInput.Type;

// Output Schema
export const HypervMachinesControllerGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => HypervMachinePropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type HypervMachinesControllerGetOutput =
  typeof HypervMachinesControllerGetOutput.Type;

// The operation
/**
 * Get a HypervMachine
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param machineName -  HypervMachine name
 */
export const HypervMachinesControllerGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: HypervMachinesControllerGetInput,
    outputSchema: HypervMachinesControllerGetOutput,
  }),
);
// Input Schema
export const HypervMachinesControllerListByHypervSiteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    filter: Schema.optional(Schema.String),
    top: Schema.optional(Schema.Number),
    continuationToken: Schema.optional(Schema.String),
    totalRecordCount: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/hypervSites/{siteName}/machines",
      apiVersion: "2023-06-06",
    }),
  );
export type HypervMachinesControllerListByHypervSiteInput =
  typeof HypervMachinesControllerListByHypervSiteInput.Type;

// Output Schema
export const HypervMachinesControllerListByHypervSiteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => HypervMachineSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type HypervMachinesControllerListByHypervSiteOutput =
  typeof HypervMachinesControllerListByHypervSiteOutput.Type;

// The operation
/**
 * List HypervMachine resources by HypervSite
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param filter - filter query
 * @param top - page size  query
 * @param continuationToken - Optional parameter for continuation token.
 * @param totalRecordCount - Total count of machines in the given site.
 * @param siteName - Site name
 */
export const HypervMachinesControllerListByHypervSite =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: HypervMachinesControllerListByHypervSiteInput,
    outputSchema: HypervMachinesControllerListByHypervSiteOutput,
  }));
// Input Schema
export const HypervMachinesControllerUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    machineName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => HypervMachineUpdatePropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/hypervSites/{siteName}/machines/{machineName}",
      apiVersion: "2023-06-06",
    }),
  );
export type HypervMachinesControllerUpdateInput =
  typeof HypervMachinesControllerUpdateInput.Type;

// Output Schema
export const HypervMachinesControllerUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => HypervMachinePropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type HypervMachinesControllerUpdateOutput =
  typeof HypervMachinesControllerUpdateOutput.Type;

// The operation
/**
 * Update a HypervMachine
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param machineName -  HypervMachine name
 */
export const HypervMachinesControllerUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: HypervMachinesControllerUpdateInput,
    outputSchema: HypervMachinesControllerUpdateOutput,
  }));
// Input Schema
export const HypervMachinesControllerUpdatePropertiesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    value: Schema.Array(Schema.suspend(() => MachineMetadataSchema)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/hypervSites/{siteName}/updateProperties",
      apiVersion: "2023-06-06",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type HypervMachinesControllerUpdatePropertiesInput =
  typeof HypervMachinesControllerUpdatePropertiesInput.Type;

// Output Schema
export const HypervMachinesControllerUpdatePropertiesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type HypervMachinesControllerUpdatePropertiesOutput =
  typeof HypervMachinesControllerUpdatePropertiesOutput.Type;

// The operation
/**
 * Method to update custom properties for HYPERV machines
 * in a site.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const HypervMachinesControllerUpdateProperties =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: HypervMachinesControllerUpdatePropertiesInput,
    outputSchema: HypervMachinesControllerUpdatePropertiesOutput,
  }));
// Input Schema
export const HypervOperationsStatusControllerGetHypervOperationsStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    operationStatusName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/hypervSites/{siteName}/operationsStatus/{operationStatusName}",
      apiVersion: "2023-06-06",
    }),
  );
export type HypervOperationsStatusControllerGetHypervOperationsStatusInput =
  typeof HypervOperationsStatusControllerGetHypervOperationsStatusInput.Type;

// Output Schema
export const HypervOperationsStatusControllerGetHypervOperationsStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    error: Schema.optional(Schema.suspend(() => OperationStatusErrorSchema)),
    properties: Schema.optional(
      Schema.suspend(() => OperationStatusPropertiesSchema),
    ),
  });
export type HypervOperationsStatusControllerGetHypervOperationsStatusOutput =
  typeof HypervOperationsStatusControllerGetHypervOperationsStatusOutput.Type;

// The operation
/**
 * Method to get operation status.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param operationStatusName - Operation status  Arm Name.
 */
export const HypervOperationsStatusControllerGetHypervOperationsStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: HypervOperationsStatusControllerGetHypervOperationsStatusInput,
    outputSchema:
      HypervOperationsStatusControllerGetHypervOperationsStatusOutput,
  }));
// Input Schema
export const HypervRunAsAccountsControllerGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/hypervSites/{siteName}/runAsAccounts/{accountName}",
      apiVersion: "2023-06-06",
    }),
  );
export type HypervRunAsAccountsControllerGetInput =
  typeof HypervRunAsAccountsControllerGetInput.Type;

// Output Schema
export const HypervRunAsAccountsControllerGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => RunAsAccountPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type HypervRunAsAccountsControllerGetOutput =
  typeof HypervRunAsAccountsControllerGetOutput.Type;

// The operation
/**
 * Get a HypervRunAsAccountResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param accountName -  RunAsAccounts name
 */
export const HypervRunAsAccountsControllerGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: HypervRunAsAccountsControllerGetInput,
    outputSchema: HypervRunAsAccountsControllerGetOutput,
  }));
// Input Schema
export const HypervRunAsAccountsControllerListByHypervSiteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/hypervSites/{siteName}/runAsAccounts",
      apiVersion: "2023-06-06",
    }),
  );
export type HypervRunAsAccountsControllerListByHypervSiteInput =
  typeof HypervRunAsAccountsControllerListByHypervSiteInput.Type;

// Output Schema
export const HypervRunAsAccountsControllerListByHypervSiteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => HypervRunAsAccountResourceSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type HypervRunAsAccountsControllerListByHypervSiteOutput =
  typeof HypervRunAsAccountsControllerListByHypervSiteOutput.Type;

// The operation
/**
 * List HypervRunAsAccountResource resources by HypervSite
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const HypervRunAsAccountsControllerListByHypervSite =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: HypervRunAsAccountsControllerListByHypervSiteInput,
    outputSchema: HypervRunAsAccountsControllerListByHypervSiteOutput,
  }));
// Input Schema
export const HypervSitesControllerComputeErrorSummaryInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/hypervSites/{siteName}/computeErrorSummary",
      apiVersion: "2023-06-06",
    }),
  );
export type HypervSitesControllerComputeErrorSummaryInput =
  typeof HypervSitesControllerComputeErrorSummaryInput.Type;

// Output Schema
export const HypervSitesControllerComputeErrorSummaryOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    applianceName: Schema.String,
    discoveryScopeErrorSummaries: Schema.suspend(
      () => DiscoveryScopeErrorSummarySchema,
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type HypervSitesControllerComputeErrorSummaryOutput =
  typeof HypervSitesControllerComputeErrorSummaryOutput.Type;

// The operation
/**
 * Method to get site error summary.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const HypervSitesControllerComputeErrorSummary =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: HypervSitesControllerComputeErrorSummaryInput,
    outputSchema: HypervSitesControllerComputeErrorSummaryOutput,
  }));
// Input Schema
export const HypervSitesControllerComputeusageInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/hypervSites/{siteName}/computeusage",
      apiVersion: "2023-06-06",
    }),
  );
export type HypervSitesControllerComputeusageInput =
  typeof HypervSitesControllerComputeusageInput.Type;

// Output Schema
export const HypervSitesControllerComputeusageOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    machineCount: Schema.optional(Schema.Number),
    runAsAccountCount: Schema.optional(Schema.Number),
    hostCount: Schema.optional(Schema.Number),
    clusterCount: Schema.optional(Schema.Number),
  });
export type HypervSitesControllerComputeusageOutput =
  typeof HypervSitesControllerComputeusageOutput.Type;

// The operation
/**
 * Get a hyperv site usage.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const HypervSitesControllerComputeusage =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: HypervSitesControllerComputeusageInput,
    outputSchema: HypervSitesControllerComputeusageOutput,
  }));
// Input Schema
export const HypervSitesControllerCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(Schema.suspend(() => SitePropertiesSchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/hypervSites/{siteName}",
      apiVersion: "2023-06-06",
    }),
  );
export type HypervSitesControllerCreateInput =
  typeof HypervSitesControllerCreateInput.Type;

// Output Schema
export const HypervSitesControllerCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => SitePropertiesSchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type HypervSitesControllerCreateOutput =
  typeof HypervSitesControllerCreateOutput.Type;

// The operation
/**
 * Create a HypervSite
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const HypervSitesControllerCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: HypervSitesControllerCreateInput,
    outputSchema: HypervSitesControllerCreateOutput,
  }),
);
// Input Schema
export const HypervSitesControllerDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/hypervSites/{siteName}",
      apiVersion: "2023-06-06",
    }),
  );
export type HypervSitesControllerDeleteInput =
  typeof HypervSitesControllerDeleteInput.Type;

// Output Schema
export const HypervSitesControllerDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type HypervSitesControllerDeleteOutput =
  typeof HypervSitesControllerDeleteOutput.Type;

// The operation
/**
 * Delete a HypervSite
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const HypervSitesControllerDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: HypervSitesControllerDeleteInput,
    outputSchema: HypervSitesControllerDeleteOutput,
  }),
);
// Input Schema
export const HypervSitesControllerExportApplicationsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/hypervSites/{siteName}/exportApplications",
      apiVersion: "2023-06-06",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type HypervSitesControllerExportApplicationsInput =
  typeof HypervSitesControllerExportApplicationsInput.Type;

// Output Schema
export const HypervSitesControllerExportApplicationsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type HypervSitesControllerExportApplicationsOutput =
  typeof HypervSitesControllerExportApplicationsOutput.Type;

// The operation
/**
 * Method to generate report containing
 * machine and the deep discovery of the application installed in the machine.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const HypervSitesControllerExportApplications =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: HypervSitesControllerExportApplicationsInput,
    outputSchema: HypervSitesControllerExportApplicationsOutput,
  }));
// Input Schema
export const HypervSitesControllerExportMachineErrorsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => RequestExportMachineErrorsPropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/hypervSites/{siteName}/exportMachineErrors",
      apiVersion: "2023-06-06",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type HypervSitesControllerExportMachineErrorsInput =
  typeof HypervSitesControllerExportMachineErrorsInput.Type;

// Output Schema
export const HypervSitesControllerExportMachineErrorsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type HypervSitesControllerExportMachineErrorsOutput =
  typeof HypervSitesControllerExportMachineErrorsOutput.Type;

// The operation
/**
 * Method to generate report containing
 * machine and the errors encountered during guest discovery of the machine.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const HypervSitesControllerExportMachineErrors =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: HypervSitesControllerExportMachineErrorsInput,
    outputSchema: HypervSitesControllerExportMachineErrorsOutput,
  }));
// Input Schema
export const HypervSitesControllerGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/hypervSites/{siteName}",
      apiVersion: "2023-06-06",
    }),
  );
export type HypervSitesControllerGetInput =
  typeof HypervSitesControllerGetInput.Type;

// Output Schema
export const HypervSitesControllerGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => SitePropertiesSchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type HypervSitesControllerGetOutput =
  typeof HypervSitesControllerGetOutput.Type;

// The operation
/**
 * Get a HypervSite
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const HypervSitesControllerGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: HypervSitesControllerGetInput,
    outputSchema: HypervSitesControllerGetOutput,
  }),
);
// Input Schema
export const HypervSitesControllerListHealthSummaryInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/hypervSites/{siteName}/listHealthSummary",
      apiVersion: "2023-06-06",
    }),
  );
export type HypervSitesControllerListHealthSummaryInput =
  typeof HypervSitesControllerListHealthSummaryInput.Type;

// Output Schema
export const HypervSitesControllerListHealthSummaryOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => SiteHealthSummarySchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type HypervSitesControllerListHealthSummaryOutput =
  typeof HypervSitesControllerListHealthSummaryOutput.Type;

// The operation
/**
 * Method to get site health summary.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const HypervSitesControllerListHealthSummary =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: HypervSitesControllerListHealthSummaryInput,
    outputSchema: HypervSitesControllerListHealthSummaryOutput,
  }));
// Input Schema
export const HypervSitesControllerSummaryInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/hypervSites/{siteName}/summary",
      apiVersion: "2023-06-06",
    }),
  );
export type HypervSitesControllerSummaryInput =
  typeof HypervSitesControllerSummaryInput.Type;

// Output Schema
export const HypervSitesControllerSummaryOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    machineCount: Schema.optional(Schema.Number),
    runAsAccountCount: Schema.optional(Schema.Number),
    hostCount: Schema.optional(Schema.Number),
    clusterCount: Schema.optional(Schema.Number),
  });
export type HypervSitesControllerSummaryOutput =
  typeof HypervSitesControllerSummaryOutput.Type;

// The operation
/**
 * Method to get site usage.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const HypervSitesControllerSummary =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: HypervSitesControllerSummaryInput,
    outputSchema: HypervSitesControllerSummaryOutput,
  }));
// Input Schema
export const HypervSitesControllerUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(
      Schema.suspend(() => HypervSiteUpdatePropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/hypervSites/{siteName}",
      apiVersion: "2023-06-06",
    }),
  );
export type HypervSitesControllerUpdateInput =
  typeof HypervSitesControllerUpdateInput.Type;

// Output Schema
export const HypervSitesControllerUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => SitePropertiesSchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type HypervSitesControllerUpdateOutput =
  typeof HypervSitesControllerUpdateOutput.Type;

// The operation
/**
 * Update a HypervSite
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const HypervSitesControllerUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: HypervSitesControllerUpdateInput,
    outputSchema: HypervSitesControllerUpdateOutput,
  }),
);
// Input Schema
export const HypervSitesListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/hypervSites",
      apiVersion: "2023-06-06",
    }),
  );
export type HypervSitesListByResourceGroupInput =
  typeof HypervSitesListByResourceGroupInput.Type;

// Output Schema
export const HypervSitesListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => HypervSiteSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type HypervSitesListByResourceGroupOutput =
  typeof HypervSitesListByResourceGroupOutput.Type;

// The operation
/**
 * Get all hyperv sites.
 *
 * Get all the hyperv sites in the subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const HypervSitesListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: HypervSitesListByResourceGroupInput,
    outputSchema: HypervSitesListByResourceGroupOutput,
  }));
// Input Schema
export const HypervSitesListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.OffAzure/hypervSites",
      apiVersion: "2023-06-06",
    }),
  );
export type HypervSitesListBySubscriptionInput =
  typeof HypervSitesListBySubscriptionInput.Type;

// Output Schema
export const HypervSitesListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => HypervSiteSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type HypervSitesListBySubscriptionOutput =
  typeof HypervSitesListBySubscriptionOutput.Type;

// The operation
/**
 * Get all hyperv  sites.
 *
 * Get all the hyperv  sites in the subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const HypervSitesListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: HypervSitesListBySubscriptionInput,
    outputSchema: HypervSitesListBySubscriptionOutput,
  }));
// Input Schema
export const HypervSoftwareInventoriesControllerGetMachineSoftwareInventoryInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    machineName: Schema.String.pipe(T.PathParam()),
    default: Schema.Literals(["default"]).pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/hypervSites/{siteName}/machines/{machineName}/softwareInventories/{default}",
      apiVersion: "2023-06-06",
    }),
  );
export type HypervSoftwareInventoriesControllerGetMachineSoftwareInventoryInput =
  typeof HypervSoftwareInventoriesControllerGetMachineSoftwareInventoryInput.Type;

// Output Schema
export const HypervSoftwareInventoriesControllerGetMachineSoftwareInventoryOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => MachineSoftwareInventoryPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type HypervSoftwareInventoriesControllerGetMachineSoftwareInventoryOutput =
  typeof HypervSoftwareInventoriesControllerGetMachineSoftwareInventoryOutput.Type;

// The operation
/**
 * Method to get a machines software inventory like applications and roles.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param machineName -  HypervMachine name
 * @param default - Default value.
 */
export const HypervSoftwareInventoriesControllerGetMachineSoftwareInventory =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      HypervSoftwareInventoriesControllerGetMachineSoftwareInventoryInput,
    outputSchema:
      HypervSoftwareInventoriesControllerGetMachineSoftwareInventoryOutput,
  }));
// Input Schema
export const HypervSoftwareInventoriesControllerListByHypervMachineInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    machineName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/hypervSites/{siteName}/machines/{machineName}/softwareinventories",
      apiVersion: "2023-06-06",
    }),
  );
export type HypervSoftwareInventoriesControllerListByHypervMachineInput =
  typeof HypervSoftwareInventoriesControllerListByHypervMachineInput.Type;

// Output Schema
export const HypervSoftwareInventoriesControllerListByHypervMachineOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => HypervVmSoftwareInventorySchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type HypervSoftwareInventoriesControllerListByHypervMachineOutput =
  typeof HypervSoftwareInventoriesControllerListByHypervMachineOutput.Type;

// The operation
/**
 * List HypervVmSoftwareInventory resources by HypervMachine
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param machineName -  HypervMachine name
 */
export const HypervSoftwareInventoriesControllerListByHypervMachine =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: HypervSoftwareInventoriesControllerListByHypervMachineInput,
    outputSchema: HypervSoftwareInventoriesControllerListByHypervMachineOutput,
  }));
// Input Schema
export const IisWebApplicationsControllerGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    webAppSiteName: Schema.String.pipe(T.PathParam()),
    webApplicationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/masterSites/{siteName}/webAppSites/{webAppSiteName}/iisWebApplications/{webApplicationName}",
      apiVersion: "2023-06-06",
    }),
  );
export type IisWebApplicationsControllerGetInput =
  typeof IisWebApplicationsControllerGetInput.Type;

// Output Schema
export const IisWebApplicationsControllerGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => IisWebApplicationPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type IisWebApplicationsControllerGetOutput =
  typeof IisWebApplicationsControllerGetOutput.Type;

// The operation
/**
 * Method to get an IIS web application.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param webAppSiteName - Web app site name.
 * @param webApplicationName - Web application name.
 */
export const IisWebApplicationsControllerGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IisWebApplicationsControllerGetInput,
    outputSchema: IisWebApplicationsControllerGetOutput,
  }));
// Input Schema
export const IisWebApplicationsControllerListByWebAppSiteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    webAppSiteName: Schema.String.pipe(T.PathParam()),
    filter: Schema.optional(Schema.String),
    top: Schema.optional(Schema.String),
    continuationToken: Schema.optional(Schema.String),
    totalRecordCount: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/masterSites/{siteName}/webAppSites/{webAppSiteName}/iisWebApplications",
      apiVersion: "2023-06-06",
    }),
  );
export type IisWebApplicationsControllerListByWebAppSiteInput =
  typeof IisWebApplicationsControllerListByWebAppSiteInput.Type;

// Output Schema
export const IisWebApplicationsControllerListByWebAppSiteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => IisWebApplicationsSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type IisWebApplicationsControllerListByWebAppSiteOutput =
  typeof IisWebApplicationsControllerListByWebAppSiteOutput.Type;

// The operation
/**
 * Method to get all IIS web application.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param filter - filter query
 * @param top - page size  query
 * @param continuationToken - Optional parameter for continuation token.
 * @param totalRecordCount - Total count of machines in the given site.
 * @param siteName - Site name
 * @param webAppSiteName - Web app site name.
 */
export const IisWebApplicationsControllerListByWebAppSite =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IisWebApplicationsControllerListByWebAppSiteInput,
    outputSchema: IisWebApplicationsControllerListByWebAppSiteOutput,
  }));
// Input Schema
export const IisWebApplicationsControllerUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    webAppSiteName: Schema.String.pipe(T.PathParam()),
    webApplicationName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => IisWebApplicationsUpdatePropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/masterSites/{siteName}/webAppSites/{webAppSiteName}/iisWebApplications/{webApplicationName}",
      apiVersion: "2023-06-06",
    }),
  );
export type IisWebApplicationsControllerUpdateInput =
  typeof IisWebApplicationsControllerUpdateInput.Type;

// Output Schema
export const IisWebApplicationsControllerUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => IisWebApplicationPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type IisWebApplicationsControllerUpdateOutput =
  typeof IisWebApplicationsControllerUpdateOutput.Type;

// The operation
/**
 * Method to update tags on IIS web application.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param webAppSiteName - Web app site name.
 * @param webApplicationName - Web application name.
 */
export const IisWebApplicationsControllerUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IisWebApplicationsControllerUpdateInput,
    outputSchema: IisWebApplicationsControllerUpdateOutput,
  }));
// Input Schema
export const IisWebServersControllerGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    webAppSiteName: Schema.String.pipe(T.PathParam()),
    webServerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/masterSites/{siteName}/webAppSites/{webAppSiteName}/iisWebServers/{webServerName}",
      apiVersion: "2023-06-06",
    }),
  );
export type IisWebServersControllerGetInput =
  typeof IisWebServersControllerGetInput.Type;

// Output Schema
export const IisWebServersControllerGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => IisWebServerPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type IisWebServersControllerGetOutput =
  typeof IisWebServersControllerGetOutput.Type;

// The operation
/**
 * Method to get an IIS web server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param webAppSiteName - Web app site name.
 * @param webServerName - Web server name.
 */
export const IisWebServersControllerGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: IisWebServersControllerGetInput,
    outputSchema: IisWebServersControllerGetOutput,
  }),
);
// Input Schema
export const IisWebServersControllerListByWebAppSiteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    webAppSiteName: Schema.String.pipe(T.PathParam()),
    filter: Schema.optional(Schema.String),
    top: Schema.optional(Schema.String),
    continuationToken: Schema.optional(Schema.String),
    totalRecordCount: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/masterSites/{siteName}/webAppSites/{webAppSiteName}/iisWebServers",
      apiVersion: "2023-06-06",
    }),
  );
export type IisWebServersControllerListByWebAppSiteInput =
  typeof IisWebServersControllerListByWebAppSiteInput.Type;

// Output Schema
export const IisWebServersControllerListByWebAppSiteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => IisWebServersSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type IisWebServersControllerListByWebAppSiteOutput =
  typeof IisWebServersControllerListByWebAppSiteOutput.Type;

// The operation
/**
 * Method to get all IIS web servers.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param filter - filter query
 * @param top - page size  query
 * @param continuationToken - Optional parameter for continuation token.
 * @param totalRecordCount - Total count of machines in the given site.
 * @param siteName - Site name
 * @param webAppSiteName - Web app site name.
 */
export const IisWebServersControllerListByWebAppSite =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IisWebServersControllerListByWebAppSiteInput,
    outputSchema: IisWebServersControllerListByWebAppSiteOutput,
  }));
// Input Schema
export const ImportCollectorsOperationsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    importCollectorName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => CollectorPropertiesBaseSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/importcollectors/{importCollectorName}",
      apiVersion: "2024-01-15",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type ImportCollectorsOperationsCreateInput =
  typeof ImportCollectorsOperationsCreateInput.Type;

// Output Schema
export const ImportCollectorsOperationsCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => CollectorPropertiesBaseSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ImportCollectorsOperationsCreateOutput =
  typeof ImportCollectorsOperationsCreateOutput.Type;

// The operation
/**
 * Create a ImportCollector
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 * @param importCollectorName - Import collector ARM name
 */
export const ImportCollectorsOperationsCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ImportCollectorsOperationsCreateInput,
    outputSchema: ImportCollectorsOperationsCreateOutput,
  }));
// Input Schema
export const ImportCollectorsOperationsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    importCollectorName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/importcollectors/{importCollectorName}",
      apiVersion: "2024-01-15",
    }),
  );
export type ImportCollectorsOperationsDeleteInput =
  typeof ImportCollectorsOperationsDeleteInput.Type;

// Output Schema
export const ImportCollectorsOperationsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ImportCollectorsOperationsDeleteOutput =
  typeof ImportCollectorsOperationsDeleteOutput.Type;

// The operation
/**
 * Delete a ImportCollector
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 * @param importCollectorName - Import collector ARM name
 */
export const ImportCollectorsOperationsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ImportCollectorsOperationsDeleteInput,
    outputSchema: ImportCollectorsOperationsDeleteOutput,
  }));
// Input Schema
export const ImportCollectorsOperationsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    importCollectorName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/importcollectors/{importCollectorName}",
      apiVersion: "2024-01-15",
    }),
  );
export type ImportCollectorsOperationsGetInput =
  typeof ImportCollectorsOperationsGetInput.Type;

// Output Schema
export const ImportCollectorsOperationsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => CollectorPropertiesBaseSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ImportCollectorsOperationsGetOutput =
  typeof ImportCollectorsOperationsGetOutput.Type;

// The operation
/**
 * Get a ImportCollector
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 * @param importCollectorName - Import collector ARM name
 */
export const ImportCollectorsOperationsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ImportCollectorsOperationsGetInput,
    outputSchema: ImportCollectorsOperationsGetOutput,
  }));
// Input Schema
export const ImportCollectorsOperationsListByAssessmentProjectInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/importcollectors",
      apiVersion: "2024-01-15",
    }),
  );
export type ImportCollectorsOperationsListByAssessmentProjectInput =
  typeof ImportCollectorsOperationsListByAssessmentProjectInput.Type;

// Output Schema
export const ImportCollectorsOperationsListByAssessmentProjectOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => ImportCollectorSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type ImportCollectorsOperationsListByAssessmentProjectOutput =
  typeof ImportCollectorsOperationsListByAssessmentProjectOutput.Type;

// The operation
/**
 * List ImportCollector resources by AssessmentProject
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 */
export const ImportCollectorsOperationsListByAssessmentProject =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ImportCollectorsOperationsListByAssessmentProjectInput,
    outputSchema: ImportCollectorsOperationsListByAssessmentProjectOutput,
  }));
// Input Schema
export const ImportJobsControllerGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    jobName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/importSites/{siteName}/jobs/{jobName}",
      apiVersion: "2023-06-06",
    }),
  );
export type ImportJobsControllerGetInput =
  typeof ImportJobsControllerGetInput.Type;

// Output Schema
export const ImportJobsControllerGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => JobPropertiesSchema)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ImportJobsControllerGetOutput =
  typeof ImportJobsControllerGetOutput.Type;

// The operation
/**
 * Get a ImportJob
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param jobName -  Jobs name
 */
export const ImportJobsControllerGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ImportJobsControllerGetInput,
    outputSchema: ImportJobsControllerGetOutput,
  }),
);
// Input Schema
export const ImportJobsControllerGetDeletejobInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    jobName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/importSites/{siteName}/deleteJobs/{jobName}",
      apiVersion: "2023-06-06",
    }),
  );
export type ImportJobsControllerGetDeletejobInput =
  typeof ImportJobsControllerGetDeletejobInput.Type;

// Output Schema
export const ImportJobsControllerGetDeletejobOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => DeleteImportedMachinesJobPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ImportJobsControllerGetDeletejobOutput =
  typeof ImportJobsControllerGetDeletejobOutput.Type;

// The operation
/**
 * Gets the delete imported machines job with the given job name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param jobName - Job Arm Name.
 */
export const ImportJobsControllerGetDeletejob =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ImportJobsControllerGetDeletejobInput,
    outputSchema: ImportJobsControllerGetDeletejobOutput,
  }));
// Input Schema
export const ImportJobsControllerGetExportjobInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    jobName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/importSites/{siteName}/exportJobs/{jobName}",
      apiVersion: "2023-06-06",
    }),
  );
export type ImportJobsControllerGetExportjobInput =
  typeof ImportJobsControllerGetExportjobInput.Type;

// Output Schema
export const ImportJobsControllerGetExportjobOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.suspend(() => ExportImportedMachinesJobEntityPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  });
export type ImportJobsControllerGetExportjobOutput =
  typeof ImportJobsControllerGetExportjobOutput.Type;

// The operation
/**
 * Gets the export imported machines job with the given job name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param jobName - Job Arm Name.
 */
export const ImportJobsControllerGetExportjob =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ImportJobsControllerGetExportjobInput,
    outputSchema: ImportJobsControllerGetExportjobOutput,
  }));
// Input Schema
export const ImportJobsControllerGetImportjobInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    jobName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/importSites/{siteName}/importJobs/{jobName}",
      apiVersion: "2023-06-06",
    }),
  );
export type ImportJobsControllerGetImportjobInput =
  typeof ImportJobsControllerGetImportjobInput.Type;

// Output Schema
export const ImportJobsControllerGetImportjobOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.suspend(() => ImportMachinesJobPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  });
export type ImportJobsControllerGetImportjobOutput =
  typeof ImportJobsControllerGetImportjobOutput.Type;

// The operation
/**
 * Gets the import job with the given job name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param jobName - Job Arm Name.
 */
export const ImportJobsControllerGetImportjob =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ImportJobsControllerGetImportjobInput,
    outputSchema: ImportJobsControllerGetImportjobOutput,
  }));
// Input Schema
export const ImportJobsControllerListByImportSiteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/importSites/{siteName}/jobs",
      apiVersion: "2023-06-06",
    }),
  );
export type ImportJobsControllerListByImportSiteInput =
  typeof ImportJobsControllerListByImportSiteInput.Type;

// Output Schema
export const ImportJobsControllerListByImportSiteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => ImportJobSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type ImportJobsControllerListByImportSiteOutput =
  typeof ImportJobsControllerListByImportSiteOutput.Type;

// The operation
/**
 * List ImportJob resources by ImportSite
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const ImportJobsControllerListByImportSite =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ImportJobsControllerListByImportSiteInput,
    outputSchema: ImportJobsControllerListByImportSiteOutput,
  }));
// Input Schema
export const ImportJobsControllerListDeletejobsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/importSites/{siteName}/deleteJobs",
      apiVersion: "2023-06-06",
    }),
  );
export type ImportJobsControllerListDeletejobsInput =
  typeof ImportJobsControllerListDeletejobsInput.Type;

// Output Schema
export const ImportJobsControllerListDeletejobsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => DeleteImportMachinesJobSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type ImportJobsControllerListDeletejobsOutput =
  typeof ImportJobsControllerListDeletejobsOutput.Type;

// The operation
/**
 * Method to get all delete import machines job for the given site.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const ImportJobsControllerListDeletejobs =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ImportJobsControllerListDeletejobsInput,
    outputSchema: ImportJobsControllerListDeletejobsOutput,
  }));
// Input Schema
export const ImportJobsControllerListExportjobsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/importSites/{siteName}/exportJobs",
      apiVersion: "2023-06-06",
    }),
  );
export type ImportJobsControllerListExportjobsInput =
  typeof ImportJobsControllerListExportjobsInput.Type;

// Output Schema
export const ImportJobsControllerListExportjobsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => ExportImportedMachinesJobSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type ImportJobsControllerListExportjobsOutput =
  typeof ImportJobsControllerListExportjobsOutput.Type;

// The operation
/**
 * Method to get all export import machines job for the given site.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const ImportJobsControllerListExportjobs =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ImportJobsControllerListExportjobsInput,
    outputSchema: ImportJobsControllerListExportjobsOutput,
  }));
// Input Schema
export const ImportJobsControllerListImportjobsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/importSites/{siteName}/importJobs",
      apiVersion: "2023-06-06",
    }),
  );
export type ImportJobsControllerListImportjobsInput =
  typeof ImportJobsControllerListImportjobsInput.Type;

// Output Schema
export const ImportJobsControllerListImportjobsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => ImportMachinesJobSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type ImportJobsControllerListImportjobsOutput =
  typeof ImportJobsControllerListImportjobsOutput.Type;

// The operation
/**
 * Method to get all import machines job for the given site.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const ImportJobsControllerListImportjobs =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ImportJobsControllerListImportjobsInput,
    outputSchema: ImportJobsControllerListImportjobsOutput,
  }));
// Input Schema
export const ImportMachinesControllerDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    machineName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/importSites/{siteName}/machines/{machineName}",
      apiVersion: "2023-06-06",
    }),
  );
export type ImportMachinesControllerDeleteInput =
  typeof ImportMachinesControllerDeleteInput.Type;

// Output Schema
export const ImportMachinesControllerDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ImportMachinesControllerDeleteOutput =
  typeof ImportMachinesControllerDeleteOutput.Type;

// The operation
/**
 * Delete a ImportMachine
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param machineName - Machine name
 */
export const ImportMachinesControllerDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ImportMachinesControllerDeleteInput,
    outputSchema: ImportMachinesControllerDeleteOutput,
  }));
// Input Schema
export const ImportMachinesControllerGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    machineName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/importSites/{siteName}/machines/{machineName}",
      apiVersion: "2023-06-06",
    }),
  );
export type ImportMachinesControllerGetInput =
  typeof ImportMachinesControllerGetInput.Type;

// Output Schema
export const ImportMachinesControllerGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => ImportMachinePropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ImportMachinesControllerGetOutput =
  typeof ImportMachinesControllerGetOutput.Type;

// The operation
/**
 * Get a ImportMachine
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param machineName - Machine name
 */
export const ImportMachinesControllerGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ImportMachinesControllerGetInput,
    outputSchema: ImportMachinesControllerGetOutput,
  }),
);
// Input Schema
export const ImportMachinesControllerListByImportSiteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    filter: Schema.optional(Schema.String),
    top: Schema.optional(Schema.String),
    continuationToken: Schema.optional(Schema.String),
    totalRecordCount: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/importSites/{siteName}/machines",
      apiVersion: "2023-06-06",
    }),
  );
export type ImportMachinesControllerListByImportSiteInput =
  typeof ImportMachinesControllerListByImportSiteInput.Type;

// Output Schema
export const ImportMachinesControllerListByImportSiteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => ImportMachineSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type ImportMachinesControllerListByImportSiteOutput =
  typeof ImportMachinesControllerListByImportSiteOutput.Type;

// The operation
/**
 * List ImportMachine resources by ImportSite
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param filter - filter query
 * @param top - page size  query
 * @param continuationToken - Optional parameter for continuation token.
 * @param totalRecordCount - Total count of machines in the given site.
 * @param siteName - Site name
 */
export const ImportMachinesControllerListByImportSite =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ImportMachinesControllerListByImportSiteInput,
    outputSchema: ImportMachinesControllerListByImportSiteOutput,
  }));
// Input Schema
export const ImportSitesControllerCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => ImportSitePropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/importSites/{siteName}",
      apiVersion: "2023-06-06",
    }),
  );
export type ImportSitesControllerCreateInput =
  typeof ImportSitesControllerCreateInput.Type;

// Output Schema
export const ImportSitesControllerCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => ImportSitePropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ImportSitesControllerCreateOutput =
  typeof ImportSitesControllerCreateOutput.Type;

// The operation
/**
 * Create a ImportSite
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const ImportSitesControllerCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ImportSitesControllerCreateInput,
    outputSchema: ImportSitesControllerCreateOutput,
  }),
);
// Input Schema
export const ImportSitesControllerDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/importSites/{siteName}",
      apiVersion: "2023-06-06",
    }),
  );
export type ImportSitesControllerDeleteInput =
  typeof ImportSitesControllerDeleteInput.Type;

// Output Schema
export const ImportSitesControllerDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ImportSitesControllerDeleteOutput =
  typeof ImportSitesControllerDeleteOutput.Type;

// The operation
/**
 * Delete a ImportSite
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const ImportSitesControllerDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ImportSitesControllerDeleteInput,
    outputSchema: ImportSitesControllerDeleteOutput,
  }),
);
// Input Schema
export const ImportSitesControllerDeleteImportedMachinesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/importSites/{siteName}/deleteImportedMachines",
      apiVersion: "2023-06-06",
    }),
  );
export type ImportSitesControllerDeleteImportedMachinesInput =
  typeof ImportSitesControllerDeleteImportedMachinesInput.Type;

// Output Schema
export const ImportSitesControllerDeleteImportedMachinesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    jobArmId: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
  });
export type ImportSitesControllerDeleteImportedMachinesOutput =
  typeof ImportSitesControllerDeleteImportedMachinesOutput.Type;

// The operation
/**
 * Deletes the imported machines for site.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const ImportSitesControllerDeleteImportedMachines =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ImportSitesControllerDeleteImportedMachinesInput,
    outputSchema: ImportSitesControllerDeleteImportedMachinesOutput,
  }));
// Input Schema
export const ImportSitesControllerExportUriInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    jobArmId: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/importSites/{siteName}/exportUri",
      apiVersion: "2023-06-06",
    }),
  );
export type ImportSitesControllerExportUriInput =
  typeof ImportSitesControllerExportUriInput.Type;

// Output Schema
export const ImportSitesControllerExportUriOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    jobArmId: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
  });
export type ImportSitesControllerExportUriOutput =
  typeof ImportSitesControllerExportUriOutput.Type;

// The operation
/**
 * Method to export  a site.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const ImportSitesControllerExportUri =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ImportSitesControllerExportUriInput,
    outputSchema: ImportSitesControllerExportUriOutput,
  }));
// Input Schema
export const ImportSitesControllerGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/importSites/{siteName}",
      apiVersion: "2023-06-06",
    }),
  );
export type ImportSitesControllerGetInput =
  typeof ImportSitesControllerGetInput.Type;

// Output Schema
export const ImportSitesControllerGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => ImportSitePropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ImportSitesControllerGetOutput =
  typeof ImportSitesControllerGetOutput.Type;

// The operation
/**
 * Get a ImportSite
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const ImportSitesControllerGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ImportSitesControllerGetInput,
    outputSchema: ImportSitesControllerGetOutput,
  }),
);
// Input Schema
export const ImportSitesControllerImportUriInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    jobArmId: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/importSites/{siteName}/importUri",
      apiVersion: "2023-06-06",
    }),
  );
export type ImportSitesControllerImportUriInput =
  typeof ImportSitesControllerImportUriInput.Type;

// Output Schema
export const ImportSitesControllerImportUriOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    jobArmId: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
  });
export type ImportSitesControllerImportUriOutput =
  typeof ImportSitesControllerImportUriOutput.Type;

// The operation
/**
 * Method to import a site.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const ImportSitesControllerImportUri =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ImportSitesControllerImportUriInput,
    outputSchema: ImportSitesControllerImportUriOutput,
  }));
// Input Schema
export const ImportSitesControllerListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/importSites",
      apiVersion: "2023-06-06",
    }),
  );
export type ImportSitesControllerListByResourceGroupInput =
  typeof ImportSitesControllerListByResourceGroupInput.Type;

// Output Schema
export const ImportSitesControllerListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => ImportSiteSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type ImportSitesControllerListByResourceGroupOutput =
  typeof ImportSitesControllerListByResourceGroupOutput.Type;

// The operation
/**
 * Get all import sites.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ImportSitesControllerListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ImportSitesControllerListByResourceGroupInput,
    outputSchema: ImportSitesControllerListByResourceGroupOutput,
  }));
// Input Schema
export const ImportSitesControllerListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.OffAzure/importSites",
      apiVersion: "2023-06-06",
    }),
  );
export type ImportSitesControllerListBySubscriptionInput =
  typeof ImportSitesControllerListBySubscriptionInput.Type;

// Output Schema
export const ImportSitesControllerListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => ImportSiteSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type ImportSitesControllerListBySubscriptionOutput =
  typeof ImportSitesControllerListBySubscriptionOutput.Type;

// The operation
/**
 * List ImportSite resources by subscription ID
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const ImportSitesControllerListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ImportSitesControllerListBySubscriptionInput,
    outputSchema: ImportSitesControllerListBySubscriptionOutput,
  }));
// Input Schema
export const ImportSitesControllerUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(
      Schema.suspend(() => ImportSiteUpdatePropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/importSites/{siteName}",
      apiVersion: "2023-06-06",
    }),
  );
export type ImportSitesControllerUpdateInput =
  typeof ImportSitesControllerUpdateInput.Type;

// Output Schema
export const ImportSitesControllerUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => ImportSitePropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ImportSitesControllerUpdateOutput =
  typeof ImportSitesControllerUpdateOutput.Type;

// The operation
/**
 * Update a ImportSite
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const ImportSitesControllerUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ImportSitesControllerUpdateInput,
    outputSchema: ImportSitesControllerUpdateOutput,
  }),
);
// Input Schema
export const MachinesControllerGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    machineName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/vmwareSites/{siteName}/machines/{machineName}",
      apiVersion: "2023-06-06",
    }),
  );
export type MachinesControllerGetInput = typeof MachinesControllerGetInput.Type;

// Output Schema
export const MachinesControllerGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => VmwareMachinePropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type MachinesControllerGetOutput =
  typeof MachinesControllerGetOutput.Type;

// The operation
/**
 * Get a MachineResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param machineName - Machine name
 */
export const MachinesControllerGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: MachinesControllerGetInput,
    outputSchema: MachinesControllerGetOutput,
  }),
);
// Input Schema
export const MachinesControllerGetMachineInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/migrateProjects/{migrateProjectName}/machines/{machineName}",
      apiVersion: "2023-01-01",
    }),
  );
export type MachinesControllerGetMachineInput =
  typeof MachinesControllerGetMachineInput.Type;

// Output Schema
export const MachinesControllerGetMachineOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    properties: Schema.optional(Schema.suspend(() => MachinePropertiesSchema)),
  });
export type MachinesControllerGetMachineOutput =
  typeof MachinesControllerGetMachineOutput.Type;

// The operation
/**
 * Gets a machine in the migrate project.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const MachinesControllerGetMachine =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MachinesControllerGetMachineInput,
    outputSchema: MachinesControllerGetMachineOutput,
  }));
// Input Schema
export const MachinesControllerListByVmwareSiteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    filter: Schema.optional(Schema.String),
    top: Schema.optional(Schema.Number),
    continuationToken: Schema.optional(Schema.String),
    totalRecordCount: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/vmwareSites/{siteName}/machines",
      apiVersion: "2023-06-06",
    }),
  );
export type MachinesControllerListByVmwareSiteInput =
  typeof MachinesControllerListByVmwareSiteInput.Type;

// Output Schema
export const MachinesControllerListByVmwareSiteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => MachineResourceSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type MachinesControllerListByVmwareSiteOutput =
  typeof MachinesControllerListByVmwareSiteOutput.Type;

// The operation
/**
 * List MachineResource resources by VmwareSite
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param filter - filter query
 * @param top - page size  query
 * @param continuationToken - Optional parameter for continuation token.
 * @param totalRecordCount - Total count of machines in the given site.
 * @param siteName - Site name
 */
export const MachinesControllerListByVmwareSite =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MachinesControllerListByVmwareSiteInput,
    outputSchema: MachinesControllerListByVmwareSiteOutput,
  }));
// Input Schema
export const MachinesControllerListMachinesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/migrateProjects/{migrateProjectName}/machines",
      apiVersion: "2023-01-01",
    }),
  );
export type MachinesControllerListMachinesInput =
  typeof MachinesControllerListMachinesInput.Type;

// Output Schema
export const MachinesControllerListMachinesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.Array(Schema.suspend(() => MachineSchema))),
    nextLink: Schema.optional(Schema.String),
  });
export type MachinesControllerListMachinesOutput =
  typeof MachinesControllerListMachinesOutput.Type;

// The operation
/**
 * Gets a list of machines in the migrate project.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const MachinesControllerListMachines =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MachinesControllerListMachinesInput,
    outputSchema: MachinesControllerListMachinesOutput,
  }));
// Input Schema
export const MachinesControllerStartInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    machineName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/vmwareSites/{siteName}/machines/{machineName}/start",
      apiVersion: "2023-06-06",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type MachinesControllerStartInput =
  typeof MachinesControllerStartInput.Type;

// Output Schema
export const MachinesControllerStartOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type MachinesControllerStartOutput =
  typeof MachinesControllerStartOutput.Type;

// The operation
/**
 * Method to start a machine.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param machineName - Machine name
 */
export const MachinesControllerStart = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: MachinesControllerStartInput,
    outputSchema: MachinesControllerStartOutput,
  }),
);
// Input Schema
export const MachinesControllerStopInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    machineName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/vmwareSites/{siteName}/machines/{machineName}/stop",
      apiVersion: "2023-06-06",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type MachinesControllerStopInput =
  typeof MachinesControllerStopInput.Type;

// Output Schema
export const MachinesControllerStopOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type MachinesControllerStopOutput =
  typeof MachinesControllerStopOutput.Type;

// The operation
/**
 * Method to stop a machine.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param machineName - Machine name
 */
export const MachinesControllerStop = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: MachinesControllerStopInput,
    outputSchema: MachinesControllerStopOutput,
  }),
);
// Input Schema
export const MachinesControllerUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    machineName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => MachineResourceUpdatePropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/vmwareSites/{siteName}/machines/{machineName}",
      apiVersion: "2023-06-06",
    }),
  );
export type MachinesControllerUpdateInput =
  typeof MachinesControllerUpdateInput.Type;

// Output Schema
export const MachinesControllerUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => VmwareMachinePropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type MachinesControllerUpdateOutput =
  typeof MachinesControllerUpdateOutput.Type;

// The operation
/**
 * Update a MachineResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param machineName - Machine name
 */
export const MachinesControllerUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: MachinesControllerUpdateInput,
    outputSchema: MachinesControllerUpdateOutput,
  }),
);
// Input Schema
export const MachinesOperationsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    machineName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/machines/{machineName}",
      apiVersion: "2024-01-15",
    }),
  );
export type MachinesOperationsGetInput = typeof MachinesOperationsGetInput.Type;

// Output Schema
export const MachinesOperationsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => MachinePropertiesSchema)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type MachinesOperationsGetOutput =
  typeof MachinesOperationsGetOutput.Type;

// The operation
/**
 * Get a Machine
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 * @param machineName - Assessible Machine ARM name
 */
export const MachinesOperationsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: MachinesOperationsGetInput,
    outputSchema: MachinesOperationsGetOutput,
  }),
);
// Input Schema
export const MachinesOperationsListByAssessmentProjectInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
    continuationToken: Schema.optional(Schema.String),
    totalRecordCount: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/machines",
      apiVersion: "2024-01-15",
    }),
  );
export type MachinesOperationsListByAssessmentProjectInput =
  typeof MachinesOperationsListByAssessmentProjectInput.Type;

// Output Schema
export const MachinesOperationsListByAssessmentProjectOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => MachineSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type MachinesOperationsListByAssessmentProjectOutput =
  typeof MachinesOperationsListByAssessmentProjectOutput.Type;

// The operation
/**
 * List Machine resources by AssessmentProject
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $filter - Filter query.
 * @param pageSize - Optional parameter for page size.
 * @param continuationToken - Optional parameter for continuation token.
 * @param totalRecordCount - Total record count.
 * @param projectName - Assessment Project Name
 */
export const MachinesOperationsListByAssessmentProject =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MachinesOperationsListByAssessmentProjectInput,
    outputSchema: MachinesOperationsListByAssessmentProjectOutput,
  }));
// Input Schema
export const MasterSitesControllerCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => MasterSitePropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/masterSites/{siteName}",
      apiVersion: "2023-06-06",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type MasterSitesControllerCreateInput =
  typeof MasterSitesControllerCreateInput.Type;

// Output Schema
export const MasterSitesControllerCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => MasterSitePropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type MasterSitesControllerCreateOutput =
  typeof MasterSitesControllerCreateOutput.Type;

// The operation
/**
 * Method to create or update a site.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const MasterSitesControllerCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: MasterSitesControllerCreateInput,
    outputSchema: MasterSitesControllerCreateOutput,
  }),
);
// Input Schema
export const MasterSitesControllerDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/masterSites/{siteName}",
      apiVersion: "2023-06-06",
    }),
  );
export type MasterSitesControllerDeleteInput =
  typeof MasterSitesControllerDeleteInput.Type;

// Output Schema
export const MasterSitesControllerDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type MasterSitesControllerDeleteOutput =
  typeof MasterSitesControllerDeleteOutput.Type;

// The operation
/**
 * Method to delete a site.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const MasterSitesControllerDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: MasterSitesControllerDeleteInput,
    outputSchema: MasterSitesControllerDeleteOutput,
  }),
);
// Input Schema
export const MasterSitesControllerErrorSummaryInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    applianceName: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/masterSites/{siteName}/errorSummary",
      apiVersion: "2023-06-06",
    }),
  );
export type MasterSitesControllerErrorSummaryInput =
  typeof MasterSitesControllerErrorSummaryInput.Type;

// Output Schema
export const MasterSitesControllerErrorSummaryOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    applianceName: Schema.String,
    discoveryScopeErrorSummaries: Schema.suspend(
      () => DiscoveryScopeErrorSummarySchema,
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type MasterSitesControllerErrorSummaryOutput =
  typeof MasterSitesControllerErrorSummaryOutput.Type;

// The operation
/**
 * Method to get error summary from master site for an appliance.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const MasterSitesControllerErrorSummary =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MasterSitesControllerErrorSummaryInput,
    outputSchema: MasterSitesControllerErrorSummaryOutput,
  }));
// Input Schema
export const MasterSitesControllerGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/masterSites/{siteName}",
      apiVersion: "2023-06-06",
    }),
  );
export type MasterSitesControllerGetInput =
  typeof MasterSitesControllerGetInput.Type;

// Output Schema
export const MasterSitesControllerGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => MasterSitePropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type MasterSitesControllerGetOutput =
  typeof MasterSitesControllerGetOutput.Type;

// The operation
/**
 * Method to get a master site.
 *
 * Get a MasterSite
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const MasterSitesControllerGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: MasterSitesControllerGetInput,
    outputSchema: MasterSitesControllerGetOutput,
  }),
);
// Input Schema
export const MasterSitesControllerListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/masterSites",
      apiVersion: "2023-06-06",
    }),
  );
export type MasterSitesControllerListByResourceGroupInput =
  typeof MasterSitesControllerListByResourceGroupInput.Type;

// Output Schema
export const MasterSitesControllerListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => MasterSiteSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type MasterSitesControllerListByResourceGroupOutput =
  typeof MasterSitesControllerListByResourceGroupOutput.Type;

// The operation
/**
 * Get all sites.
 *
 * Get all the sites in the resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const MasterSitesControllerListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MasterSitesControllerListByResourceGroupInput,
    outputSchema: MasterSitesControllerListByResourceGroupOutput,
  }));
// Input Schema
export const MasterSitesControllerListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.OffAzure/masterSites",
      apiVersion: "2023-06-06",
    }),
  );
export type MasterSitesControllerListBySubscriptionInput =
  typeof MasterSitesControllerListBySubscriptionInput.Type;

// Output Schema
export const MasterSitesControllerListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => MasterSiteSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type MasterSitesControllerListBySubscriptionOutput =
  typeof MasterSitesControllerListBySubscriptionOutput.Type;

// The operation
/**
 * Get all the sites in the subscription.
 *
 * List MasterSite resources by subscription ID
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const MasterSitesControllerListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MasterSitesControllerListBySubscriptionInput,
    outputSchema: MasterSitesControllerListBySubscriptionOutput,
  }));
// Input Schema
export const MasterSitesControllerUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(
      Schema.suspend(() => MasterSiteUpdatePropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/masterSites/{siteName}",
      apiVersion: "2023-06-06",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type MasterSitesControllerUpdateInput =
  typeof MasterSitesControllerUpdateInput.Type;

// Output Schema
export const MasterSitesControllerUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => MasterSitePropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type MasterSitesControllerUpdateOutput =
  typeof MasterSitesControllerUpdateOutput.Type;

// The operation
/**
 * Method to update an existing site.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const MasterSitesControllerUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: MasterSitesControllerUpdateInput,
    outputSchema: MasterSitesControllerUpdateOutput,
  }),
);
// Input Schema
export const MasterSitesOperationsStatusControllerGetVmwareOperationStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    operationStatusName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/masterSites/{siteName}/operationsStatus/{operationStatusName}",
      apiVersion: "2023-06-06",
    }),
  );
export type MasterSitesOperationsStatusControllerGetVmwareOperationStatusInput =
  typeof MasterSitesOperationsStatusControllerGetVmwareOperationStatusInput.Type;

// Output Schema
export const MasterSitesOperationsStatusControllerGetVmwareOperationStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    error: Schema.optional(Schema.suspend(() => OperationStatusErrorSchema)),
    properties: Schema.optional(
      Schema.suspend(() => OperationStatusPropertiesSchema),
    ),
  });
export type MasterSitesOperationsStatusControllerGetVmwareOperationStatusOutput =
  typeof MasterSitesOperationsStatusControllerGetVmwareOperationStatusOutput.Type;

// The operation
/**
 * A operation status resource belonging to a master site resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param operationStatusName - Operation status  Arm Name.
 */
export const MasterSitesOperationsStatusControllerGetVmwareOperationStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      MasterSitesOperationsStatusControllerGetVmwareOperationStatusInput,
    outputSchema:
      MasterSitesOperationsStatusControllerGetVmwareOperationStatusOutput,
  }));
// Input Schema
export const MigrateProjectsControllerDeleteMigrateProjectInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/migrateProjects/{migrateProjectName}",
      apiVersion: "2023-01-01",
    }),
  );
export type MigrateProjectsControllerDeleteMigrateProjectInput =
  typeof MigrateProjectsControllerDeleteMigrateProjectInput.Type;

// Output Schema
export const MigrateProjectsControllerDeleteMigrateProjectOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type MigrateProjectsControllerDeleteMigrateProjectOutput =
  typeof MigrateProjectsControllerDeleteMigrateProjectOutput.Type;

// The operation
/**
 * Delete the project
 *
 * Delete the migrate project. It deletes summary of the project.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const MigrateProjectsControllerDeleteMigrateProject =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MigrateProjectsControllerDeleteMigrateProjectInput,
    outputSchema: MigrateProjectsControllerDeleteMigrateProjectOutput,
  }));
// Input Schema
export const MigrateProjectsControllerGetMigrateProjectInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/migrateProjects/{migrateProjectName}",
      apiVersion: "2023-01-01",
    }),
  );
export type MigrateProjectsControllerGetMigrateProjectInput =
  typeof MigrateProjectsControllerGetMigrateProjectInput.Type;

// Output Schema
export const MigrateProjectsControllerGetMigrateProjectOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => MigrateProjectPropertiesSchema),
    ),
    eTag: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
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
export type MigrateProjectsControllerGetMigrateProjectOutput =
  typeof MigrateProjectsControllerGetMigrateProjectOutput.Type;

// The operation
/**
 * Get a specific project.
 *
 * Get information related to a specific migrate project. Returns a json object of type 'migrateProject' as specified in the models section.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const MigrateProjectsControllerGetMigrateProject =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MigrateProjectsControllerGetMigrateProjectInput,
    outputSchema: MigrateProjectsControllerGetMigrateProjectOutput,
  }));
// Input Schema
export const MigrateProjectsControllerGetToolRegistrationDetailsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    tool: Schema.optional(
      Schema.Literals([
        "ServerDiscovery",
        "ServerAssessment",
        "ServerMigration",
        "Cloudamize",
        "Turbonomic",
        "Zerto",
        "CorentTech",
        "ServerAssessmentV1",
        "ServerMigration_Replication",
        "Carbonite",
        "DataMigrationAssistant",
        "DatabaseMigrationService",
        "Device42",
        "JetStream",
        "RackWare",
        "UnifyCloud",
        "Flexera",
        "ServerDiscovery_Import",
        "Lakeside",
        "AppServiceMigrationAssistant",
        "Movere",
        "CloudSphere",
        "Modernization",
        "ServerMigration_DataReplication",
        "Unknown",
      ]),
    ),
    applicationDetails: Schema.optional(
      Schema.suspend(() => AadAppDetailsSchema),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/migrateProjects/{migrateProjectName}/registrationDetails",
      apiVersion: "2023-01-01",
    }),
  );
export type MigrateProjectsControllerGetToolRegistrationDetailsInput =
  typeof MigrateProjectsControllerGetToolRegistrationDetailsInput.Type;

// Output Schema
export const MigrateProjectsControllerGetToolRegistrationDetailsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serviceEndpoint: Schema.optional(Schema.String),
    oneTimeKey: Schema.optional(Schema.String),
  });
export type MigrateProjectsControllerGetToolRegistrationDetailsOutput =
  typeof MigrateProjectsControllerGetToolRegistrationDetailsOutput.Type;

// The operation
/**
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const MigrateProjectsControllerGetToolRegistrationDetails =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MigrateProjectsControllerGetToolRegistrationDetailsInput,
    outputSchema: MigrateProjectsControllerGetToolRegistrationDetailsOutput,
  }));
// Input Schema
export const MigrateProjectsControllerPatchMigrateProjectInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => MigrateProjectPropertiesSchema),
    ),
    eTag: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
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
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/migrateProjects/{migrateProjectName}",
      apiVersion: "2023-01-01",
    }),
  );
export type MigrateProjectsControllerPatchMigrateProjectInput =
  typeof MigrateProjectsControllerPatchMigrateProjectInput.Type;

// Output Schema
export const MigrateProjectsControllerPatchMigrateProjectOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => MigrateProjectPropertiesSchema),
    ),
    eTag: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
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
export type MigrateProjectsControllerPatchMigrateProjectOutput =
  typeof MigrateProjectsControllerPatchMigrateProjectOutput.Type;

// The operation
/**
 * Update project.
 *
 * Update a project with specified name. Supports partial updates, for example only tags can be provided.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const MigrateProjectsControllerPatchMigrateProject =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MigrateProjectsControllerPatchMigrateProjectInput,
    outputSchema: MigrateProjectsControllerPatchMigrateProjectOutput,
  }));
// Input Schema
export const MigrateProjectsControllerPutMigrateProjectInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => MigrateProjectPropertiesSchema),
    ),
    eTag: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
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
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/migrateProjects/{migrateProjectName}",
      apiVersion: "2023-01-01",
    }),
  );
export type MigrateProjectsControllerPutMigrateProjectInput =
  typeof MigrateProjectsControllerPutMigrateProjectInput.Type;

// Output Schema
export const MigrateProjectsControllerPutMigrateProjectOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => MigrateProjectPropertiesSchema),
    ),
    eTag: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
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
export type MigrateProjectsControllerPutMigrateProjectOutput =
  typeof MigrateProjectsControllerPutMigrateProjectOutput.Type;

// The operation
/**
 * Create or update a new project with specified settings.
 *
 * Create or update a new project by sending a json object of type 'migrateproject' as given in Models section as part of the Request Body. The project name is unique.
 * This operation is Idempotent.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const MigrateProjectsControllerPutMigrateProject =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MigrateProjectsControllerPutMigrateProjectInput,
    outputSchema: MigrateProjectsControllerPutMigrateProjectOutput,
  }));
// Input Schema
export const MigrateProjectsControllerRefreshSummaryInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    goal: Schema.optional(Schema.Literals(["Servers", "Databases"])),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/migrateProjects/{migrateProjectName}/refreshSummary",
      apiVersion: "2023-01-01",
    }),
  );
export type MigrateProjectsControllerRefreshSummaryInput =
  typeof MigrateProjectsControllerRefreshSummaryInput.Type;

// Output Schema
export const MigrateProjectsControllerRefreshSummaryOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    isRefreshed: Schema.optional(Schema.Boolean),
  });
export type MigrateProjectsControllerRefreshSummaryOutput =
  typeof MigrateProjectsControllerRefreshSummaryOutput.Type;

// The operation
/**
 * Refresh the summary of the migrate project.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const MigrateProjectsControllerRefreshSummary =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MigrateProjectsControllerRefreshSummaryInput,
    outputSchema: MigrateProjectsControllerRefreshSummaryOutput,
  }));
// Input Schema
export const MigrateProjectsControllerRegisterToolInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    tool: Schema.optional(
      Schema.Literals([
        "ServerDiscovery",
        "ServerAssessment",
        "ServerMigration",
        "Cloudamize",
        "Turbonomic",
        "Zerto",
        "CorentTech",
        "ServerAssessmentV1",
        "ServerMigration_Replication",
        "Carbonite",
        "DataMigrationAssistant",
        "DatabaseMigrationService",
        "Device42",
        "JetStream",
        "RackWare",
        "UnifyCloud",
        "Flexera",
        "ServerDiscovery_Import",
        "Lakeside",
        "AppServiceMigrationAssistant",
        "Movere",
        "CloudSphere",
        "Modernization",
        "ServerMigration_DataReplication",
        "Unknown",
      ]),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/migrateProjects/{migrateProjectName}/registerTool",
      apiVersion: "2023-01-01",
    }),
  );
export type MigrateProjectsControllerRegisterToolInput =
  typeof MigrateProjectsControllerRegisterToolInput.Type;

// Output Schema
export const MigrateProjectsControllerRegisterToolOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    isRegistered: Schema.optional(Schema.Boolean),
  });
export type MigrateProjectsControllerRegisterToolOutput =
  typeof MigrateProjectsControllerRegisterToolOutput.Type;

// The operation
/**
 * Registers a tool with the migrate project.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const MigrateProjectsControllerRegisterTool =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MigrateProjectsControllerRegisterToolInput,
    outputSchema: MigrateProjectsControllerRegisterToolOutput,
  }));
// Input Schema
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Migrate/operations",
    apiVersion: "2024-01-15",
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
export const PrivateEndpointConnectionControllerCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    peConnectionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => PrivateEndpointConnectionPropertiesV2Schema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/masterSites/{siteName}/privateEndpointConnections/{peConnectionName}",
      apiVersion: "2023-06-06",
    }),
  );
export type PrivateEndpointConnectionControllerCreateInput =
  typeof PrivateEndpointConnectionControllerCreateInput.Type;

// Output Schema
export const PrivateEndpointConnectionControllerCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => PrivateEndpointConnectionPropertiesV2Schema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type PrivateEndpointConnectionControllerCreateOutput =
  typeof PrivateEndpointConnectionControllerCreateOutput.Type;

// The operation
/**
 * Gets the private link resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param peConnectionName -  Private link resource name.
 */
export const PrivateEndpointConnectionControllerCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionControllerCreateInput,
    outputSchema: PrivateEndpointConnectionControllerCreateOutput,
  }));
// Input Schema
export const PrivateEndpointConnectionControllerDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    peConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/masterSites/{siteName}/privateEndpointConnections/{peConnectionName}",
      apiVersion: "2023-06-06",
    }),
  );
export type PrivateEndpointConnectionControllerDeleteInput =
  typeof PrivateEndpointConnectionControllerDeleteInput.Type;

// Output Schema
export const PrivateEndpointConnectionControllerDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type PrivateEndpointConnectionControllerDeleteOutput =
  typeof PrivateEndpointConnectionControllerDeleteOutput.Type;

// The operation
/**
 * Deletes the private link resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param peConnectionName -  Private link resource name.
 */
export const PrivateEndpointConnectionControllerDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionControllerDeleteInput,
    outputSchema: PrivateEndpointConnectionControllerDeleteOutput,
  }));
// Input Schema
export const PrivateEndpointConnectionControllerDeletePrivateEndpointConnectionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    peConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/migrateProjects/{migrateProjectName}/privateEndpointConnections/{peConnectionName}",
      apiVersion: "2023-01-01",
    }),
  );
export type PrivateEndpointConnectionControllerDeletePrivateEndpointConnectionInput =
  typeof PrivateEndpointConnectionControllerDeletePrivateEndpointConnectionInput.Type;

// Output Schema
export const PrivateEndpointConnectionControllerDeletePrivateEndpointConnectionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Continue",
    "SwitchingProtocols",
    "OK",
    "Created",
    "Accepted",
    "NonAuthoritativeInformation",
    "NoContent",
    "ResetContent",
    "PartialContent",
    "MultipleChoices",
    "Ambiguous",
    "MovedPermanently",
    "Moved",
    "Found",
    "Redirect",
    "SeeOther",
    "RedirectMethod",
    "NotModified",
    "UseProxy",
    "Unused",
    "TemporaryRedirect",
    "RedirectKeepVerb",
    "BadRequest",
    "Unauthorized",
    "PaymentRequired",
    "Forbidden",
    "NotFound",
    "MethodNotAllowed",
    "NotAcceptable",
    "ProxyAuthenticationRequired",
    "RequestTimeout",
    "Conflict",
    "Gone",
    "LengthRequired",
    "PreconditionFailed",
    "RequestEntityTooLarge",
    "RequestUriTooLong",
    "UnsupportedMediaType",
    "RequestedRangeNotSatisfiable",
    "ExpectationFailed",
    "UpgradeRequired",
    "InternalServerError",
    "NotImplemented",
    "BadGateway",
    "ServiceUnavailable",
    "GatewayTimeout",
    "HttpVersionNotSupported",
  ]);
export type PrivateEndpointConnectionControllerDeletePrivateEndpointConnectionOutput =
  typeof PrivateEndpointConnectionControllerDeletePrivateEndpointConnectionOutput.Type;

// The operation
/**
 * Delete the endpoint
 *
 * Delete the private endpoint. Deleting non-existent private endpoint is a no-operation.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param peConnectionName - Private endpoint connection name.
 * @param api-version - The API version to use for this operation.
 */
export const PrivateEndpointConnectionControllerDeletePrivateEndpointConnection =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      PrivateEndpointConnectionControllerDeletePrivateEndpointConnectionInput,
    outputSchema:
      PrivateEndpointConnectionControllerDeletePrivateEndpointConnectionOutput,
  }));
// Input Schema
export const PrivateEndpointConnectionControllerGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    peConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/masterSites/{siteName}/privateEndpointConnections/{peConnectionName}",
      apiVersion: "2023-06-06",
    }),
  );
export type PrivateEndpointConnectionControllerGetInput =
  typeof PrivateEndpointConnectionControllerGetInput.Type;

// Output Schema
export const PrivateEndpointConnectionControllerGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => PrivateEndpointConnectionPropertiesV2Schema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type PrivateEndpointConnectionControllerGetOutput =
  typeof PrivateEndpointConnectionControllerGetOutput.Type;

// The operation
/**
 * Gets the private link resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param peConnectionName -  Private link resource name.
 */
export const PrivateEndpointConnectionControllerGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionControllerGetInput,
    outputSchema: PrivateEndpointConnectionControllerGetOutput,
  }));
// Input Schema
export const PrivateEndpointConnectionControllerGetPrivateEndpointConnectionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    peConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/migrateProjects/{migrateProjectName}/privateEndpointConnections/{peConnectionName}",
      apiVersion: "2023-01-01",
    }),
  );
export type PrivateEndpointConnectionControllerGetPrivateEndpointConnectionInput =
  typeof PrivateEndpointConnectionControllerGetPrivateEndpointConnectionInput.Type;

// Output Schema
export const PrivateEndpointConnectionControllerGetPrivateEndpointConnectionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    eTag: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.suspend(() => PrivateEndpointConnectionPropertiesSchema),
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
  });
export type PrivateEndpointConnectionControllerGetPrivateEndpointConnectionOutput =
  typeof PrivateEndpointConnectionControllerGetPrivateEndpointConnectionOutput.Type;

// The operation
/**
 * Get the private endpoint.
 *
 * Get the private endpoint with the specified name.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param peConnectionName - Private endpoint connection name.
 * @param api-version - The API version to use for this operation.
 */
export const PrivateEndpointConnectionControllerGetPrivateEndpointConnection =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      PrivateEndpointConnectionControllerGetPrivateEndpointConnectionInput,
    outputSchema:
      PrivateEndpointConnectionControllerGetPrivateEndpointConnectionOutput,
  }));
// Input Schema
export const PrivateEndpointConnectionControllerListByMasterSiteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/masterSites/{siteName}/privateEndpointConnections",
      apiVersion: "2023-06-06",
    }),
  );
export type PrivateEndpointConnectionControllerListByMasterSiteInput =
  typeof PrivateEndpointConnectionControllerListByMasterSiteInput.Type;

// Output Schema
export const PrivateEndpointConnectionControllerListByMasterSiteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => PrivateEndpointConnectionSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type PrivateEndpointConnectionControllerListByMasterSiteOutput =
  typeof PrivateEndpointConnectionControllerListByMasterSiteOutput.Type;

// The operation
/**
 * Gets the private link resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const PrivateEndpointConnectionControllerListByMasterSite =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionControllerListByMasterSiteInput,
    outputSchema: PrivateEndpointConnectionControllerListByMasterSiteOutput,
  }));
// Input Schema
export const PrivateEndpointConnectionControllerPutPrivateEndpointConnectionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    peConnectionName: Schema.String.pipe(T.PathParam()),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    eTag: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.suspend(() => PrivateEndpointConnectionPropertiesSchema),
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
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/migrateProjects/{migrateProjectName}/privateEndpointConnections/{peConnectionName}",
      apiVersion: "2023-01-01",
    }),
  );
export type PrivateEndpointConnectionControllerPutPrivateEndpointConnectionInput =
  typeof PrivateEndpointConnectionControllerPutPrivateEndpointConnectionInput.Type;

// Output Schema
export const PrivateEndpointConnectionControllerPutPrivateEndpointConnectionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    eTag: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.suspend(() => PrivateEndpointConnectionPropertiesSchema),
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
  });
export type PrivateEndpointConnectionControllerPutPrivateEndpointConnectionOutput =
  typeof PrivateEndpointConnectionControllerPutPrivateEndpointConnectionOutput.Type;

// The operation
/**
 * Create or update private endpoint.
 *
 * Create or update a private endpoint with specified name. If a private endpoint already exists, update it.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param peConnectionName - Private endpoint connection name.
 * @param api-version - The API version to use for this operation.
 */
export const PrivateEndpointConnectionControllerPutPrivateEndpointConnection =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      PrivateEndpointConnectionControllerPutPrivateEndpointConnectionInput,
    outputSchema:
      PrivateEndpointConnectionControllerPutPrivateEndpointConnectionOutput,
  }));
// Input Schema
export const PrivateEndpointConnectionOperationsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2024-01-15",
    }),
  );
export type PrivateEndpointConnectionOperationsDeleteInput =
  typeof PrivateEndpointConnectionOperationsDeleteInput.Type;

// Output Schema
export const PrivateEndpointConnectionOperationsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type PrivateEndpointConnectionOperationsDeleteOutput =
  typeof PrivateEndpointConnectionOperationsDeleteOutput.Type;

// The operation
/**
 * Delete a PrivateEndpointConnection
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 * @param privateEndpointConnectionName - Private endpoint connection ARM name
 */
export const PrivateEndpointConnectionOperationsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionOperationsDeleteInput,
    outputSchema: PrivateEndpointConnectionOperationsDeleteOutput,
  }));
// Input Schema
export const PrivateEndpointConnectionOperationsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2024-01-15",
    }),
  );
export type PrivateEndpointConnectionOperationsGetInput =
  typeof PrivateEndpointConnectionOperationsGetInput.Type;

// Output Schema
export const PrivateEndpointConnectionOperationsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        groupIds: Schema.optional(Schema.Array(Schema.String)),
        privateEndpoint: Schema.optional(
          Schema.suspend(() => PrivateEndpointSchema),
        ),
        privateLinkServiceConnectionState: Schema.suspend(
          () => PrivateLinkServiceConnectionStateSchema,
        ),
        provisioningState: Schema.optional(
          Schema.suspend(
            () => PrivateEndpointConnectionProvisioningStateSchema,
          ),
        ),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type PrivateEndpointConnectionOperationsGetOutput =
  typeof PrivateEndpointConnectionOperationsGetOutput.Type;

// The operation
/**
 * Get a PrivateEndpointConnection
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 * @param privateEndpointConnectionName - Private endpoint connection ARM name
 */
export const PrivateEndpointConnectionOperationsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionOperationsGetInput,
    outputSchema: PrivateEndpointConnectionOperationsGetOutput,
  }));
// Input Schema
export const PrivateEndpointConnectionOperationsListByAssessmentProjectInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/privateEndpointConnections",
      apiVersion: "2024-01-15",
    }),
  );
export type PrivateEndpointConnectionOperationsListByAssessmentProjectInput =
  typeof PrivateEndpointConnectionOperationsListByAssessmentProjectInput.Type;

// Output Schema
export const PrivateEndpointConnectionOperationsListByAssessmentProjectOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => PrivateEndpointConnectionSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type PrivateEndpointConnectionOperationsListByAssessmentProjectOutput =
  typeof PrivateEndpointConnectionOperationsListByAssessmentProjectOutput.Type;

// The operation
/**
 * List PrivateEndpointConnection resources by AssessmentProject
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 */
export const PrivateEndpointConnectionOperationsListByAssessmentProject =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      PrivateEndpointConnectionOperationsListByAssessmentProjectInput,
    outputSchema:
      PrivateEndpointConnectionOperationsListByAssessmentProjectOutput,
  }));
// Input Schema
export const PrivateEndpointConnectionOperationsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        groupIds: Schema.optional(Schema.Array(Schema.String)),
        privateEndpoint: Schema.optional(
          Schema.suspend(() => PrivateEndpointSchema),
        ),
        privateLinkServiceConnectionState: Schema.suspend(
          () => PrivateLinkServiceConnectionStateSchema,
        ),
        provisioningState: Schema.optional(
          Schema.suspend(
            () => PrivateEndpointConnectionProvisioningStateSchema,
          ),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2024-01-15",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type PrivateEndpointConnectionOperationsUpdateInput =
  typeof PrivateEndpointConnectionOperationsUpdateInput.Type;

// Output Schema
export const PrivateEndpointConnectionOperationsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        groupIds: Schema.optional(Schema.Array(Schema.String)),
        privateEndpoint: Schema.optional(
          Schema.suspend(() => PrivateEndpointSchema),
        ),
        privateLinkServiceConnectionState: Schema.suspend(
          () => PrivateLinkServiceConnectionStateSchema,
        ),
        provisioningState: Schema.optional(
          Schema.suspend(
            () => PrivateEndpointConnectionProvisioningStateSchema,
          ),
        ),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type PrivateEndpointConnectionOperationsUpdateOutput =
  typeof PrivateEndpointConnectionOperationsUpdateOutput.Type;

// The operation
/**
 * Create a PrivateEndpointConnection
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 * @param privateEndpointConnectionName - Private endpoint connection ARM name
 */
export const PrivateEndpointConnectionOperationsUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionOperationsUpdateInput,
    outputSchema: PrivateEndpointConnectionOperationsUpdateOutput,
  }));
// Input Schema
export const PrivateEndpointConnectionProxyControllerCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    pecProxyName: Schema.String.pipe(T.PathParam()),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    eTag: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.suspend(() => PrivateEndpointConnectionProxyPropertiesSchema),
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
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/migrateProjects/{migrateProjectName}/privateEndpointConnectionProxies/{pecProxyName}",
      apiVersion: "2023-01-01",
    }),
  );
export type PrivateEndpointConnectionProxyControllerCreateInput =
  typeof PrivateEndpointConnectionProxyControllerCreateInput.Type;

// Output Schema
export const PrivateEndpointConnectionProxyControllerCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    eTag: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.suspend(() => PrivateEndpointConnectionProxyPropertiesSchema),
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
  });
export type PrivateEndpointConnectionProxyControllerCreateOutput =
  typeof PrivateEndpointConnectionProxyControllerCreateOutput.Type;

// The operation
/**
 * Create or update private endpoint proxy.
 *
 * Create or update a private endpoint proxy with specified name. If a private endpoint already exists, update it.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param pecProxyName - Private endpoint proxy name.
 * @param api-version - The API version to use for this operation.
 */
export const PrivateEndpointConnectionProxyControllerCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionProxyControllerCreateInput,
    outputSchema: PrivateEndpointConnectionProxyControllerCreateOutput,
  }));
// Input Schema
export const PrivateEndpointConnectionProxyControllerDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    pecProxyName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/migrateProjects/{migrateProjectName}/privateEndpointConnectionProxies/{pecProxyName}",
      apiVersion: "2023-01-01",
    }),
  );
export type PrivateEndpointConnectionProxyControllerDeleteInput =
  typeof PrivateEndpointConnectionProxyControllerDeleteInput.Type;

// Output Schema
export const PrivateEndpointConnectionProxyControllerDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({});
export type PrivateEndpointConnectionProxyControllerDeleteOutput =
  typeof PrivateEndpointConnectionProxyControllerDeleteOutput.Type;

// The operation
/**
 * Delete the private endpoint proxy
 *
 * Delete the private endpoint proxy. Deleting non-existent private endpoint proxy is a no-operation.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param pecProxyName - Private endpoint proxy name.
 * @param api-version - The API version to use for this operation.
 */
export const PrivateEndpointConnectionProxyControllerDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionProxyControllerDeleteInput,
    outputSchema: PrivateEndpointConnectionProxyControllerDeleteOutput,
  }));
// Input Schema
export const PrivateEndpointConnectionProxyControllerGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    pecProxyName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/migrateProjects/{migrateProjectName}/privateEndpointConnectionProxies/{pecProxyName}",
      apiVersion: "2023-01-01",
    }),
  );
export type PrivateEndpointConnectionProxyControllerGetInput =
  typeof PrivateEndpointConnectionProxyControllerGetInput.Type;

// Output Schema
export const PrivateEndpointConnectionProxyControllerGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    eTag: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.suspend(() => PrivateEndpointConnectionProxyPropertiesSchema),
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
  });
export type PrivateEndpointConnectionProxyControllerGetOutput =
  typeof PrivateEndpointConnectionProxyControllerGetOutput.Type;

// The operation
/**
 * Get the private link proxy resource.
 *
 * Get the of private link proxy resources from a migrate project and private link proxy resource.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param pecProxyName - Private link proxy name.
 * @param api-version - The API version to use for this operation.
 */
export const PrivateEndpointConnectionProxyControllerGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionProxyControllerGetInput,
    outputSchema: PrivateEndpointConnectionProxyControllerGetOutput,
  }));
// Input Schema
export const PrivateEndpointConnectionProxyControllerListPrivateEndpointConnectionProxiesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/migrateProjects/{migrateProjectName}/privateEndpointConnectionProxies",
      apiVersion: "2023-01-01",
    }),
  );
export type PrivateEndpointConnectionProxyControllerListPrivateEndpointConnectionProxiesInput =
  typeof PrivateEndpointConnectionProxyControllerListPrivateEndpointConnectionProxiesInput.Type;

// Output Schema
export const PrivateEndpointConnectionProxyControllerListPrivateEndpointConnectionProxiesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => PrivateEndpointConnectionProxySchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type PrivateEndpointConnectionProxyControllerListPrivateEndpointConnectionProxiesOutput =
  typeof PrivateEndpointConnectionProxyControllerListPrivateEndpointConnectionProxiesOutput.Type;

// The operation
/**
 * Get the private endpoint connection proxies.
 *
 * Get all the private endpoint connections proxies under a migrate project.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const PrivateEndpointConnectionProxyControllerListPrivateEndpointConnectionProxies =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      PrivateEndpointConnectionProxyControllerListPrivateEndpointConnectionProxiesInput,
    outputSchema:
      PrivateEndpointConnectionProxyControllerListPrivateEndpointConnectionProxiesOutput,
  }));
// Input Schema
export const PrivateEndpointConnectionProxyControllerValidateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    pecProxyName: Schema.String.pipe(T.PathParam()),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    eTag: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.suspend(() => PrivateEndpointConnectionProxyPropertiesSchema),
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
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/migrateProjects/{migrateProjectName}/privateEndpointConnectionProxies/{pecProxyName}/validate",
      apiVersion: "2023-01-01",
    }),
  );
export type PrivateEndpointConnectionProxyControllerValidateInput =
  typeof PrivateEndpointConnectionProxyControllerValidateInput.Type;

// Output Schema
export const PrivateEndpointConnectionProxyControllerValidateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    eTag: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.suspend(() => PrivateEndpointConnectionProxyPropertiesSchema),
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
  });
export type PrivateEndpointConnectionProxyControllerValidateOutput =
  typeof PrivateEndpointConnectionProxyControllerValidateOutput.Type;

// The operation
/**
 * Validates private endpoint connection proxy.
 *
 * Validates private endpoint connection using a project and private endpoint connection proxy
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param pecProxyName - Private link proxy name.
 * @param api-version - The API version to use for this operation.
 */
export const PrivateEndpointConnectionProxyControllerValidate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionProxyControllerValidateInput,
    outputSchema: PrivateEndpointConnectionProxyControllerValidateOutput,
  }));
// Input Schema
export const PrivateEndpointConnectionsControllerGetPrivateEndpointConnectionsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/migrateProjects/{migrateProjectName}/privateEndpointConnections",
      apiVersion: "2023-01-01",
    }),
  );
export type PrivateEndpointConnectionsControllerGetPrivateEndpointConnectionsInput =
  typeof PrivateEndpointConnectionsControllerGetPrivateEndpointConnectionsInput.Type;

// Output Schema
export const PrivateEndpointConnectionsControllerGetPrivateEndpointConnectionsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => PrivateEndpointConnectionSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type PrivateEndpointConnectionsControllerGetPrivateEndpointConnectionsOutput =
  typeof PrivateEndpointConnectionsControllerGetPrivateEndpointConnectionsOutput.Type;

// The operation
/**
 * Get the private endpoint connections.
 *
 * Get all the private endpoint connections under a migrate project.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const PrivateEndpointConnectionsControllerGetPrivateEndpointConnections =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      PrivateEndpointConnectionsControllerGetPrivateEndpointConnectionsInput,
    outputSchema:
      PrivateEndpointConnectionsControllerGetPrivateEndpointConnectionsOutput,
  }));
// Input Schema
export const PrivateLinkResourceControllerGetPrivateLinkResourceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    privateLinkResourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/migrateProjects/{migrateProjectName}/privateLinkResources/{privateLinkResourceName}",
      apiVersion: "2023-01-01",
    }),
  );
export type PrivateLinkResourceControllerGetPrivateLinkResourceInput =
  typeof PrivateLinkResourceControllerGetPrivateLinkResourceInput.Type;

// Output Schema
export const PrivateLinkResourceControllerGetPrivateLinkResourceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.suspend(() => PrivateLinkResourcePropertiesSchema),
    ),
  });
export type PrivateLinkResourceControllerGetPrivateLinkResourceOutput =
  typeof PrivateLinkResourceControllerGetPrivateLinkResourceOutput.Type;

// The operation
/**
 * Get the private link resource.
 *
 * Get the private link resource with the specified name.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param privateLinkResourceName - Private Link resource name.
 * @param api-version - The API version to use for this operation.
 */
export const PrivateLinkResourceControllerGetPrivateLinkResource =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkResourceControllerGetPrivateLinkResourceInput,
    outputSchema: PrivateLinkResourceControllerGetPrivateLinkResourceOutput,
  }));
// Input Schema
export const PrivateLinkResourceControllerGetPrivateLinkResourcesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/migrateProjects/{migrateProjectName}/privateLinkResources",
      apiVersion: "2023-01-01",
    }),
  );
export type PrivateLinkResourceControllerGetPrivateLinkResourcesInput =
  typeof PrivateLinkResourceControllerGetPrivateLinkResourcesInput.Type;

// Output Schema
export const PrivateLinkResourceControllerGetPrivateLinkResourcesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => PrivateLinkResourceSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type PrivateLinkResourceControllerGetPrivateLinkResourcesOutput =
  typeof PrivateLinkResourceControllerGetPrivateLinkResourcesOutput.Type;

// The operation
/**
 * Get the list of private link resources.
 *
 * Get the list of private link resources under a resource group and migrate project.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const PrivateLinkResourceControllerGetPrivateLinkResources =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkResourceControllerGetPrivateLinkResourcesInput,
    outputSchema: PrivateLinkResourceControllerGetPrivateLinkResourcesOutput,
  }));
// Input Schema
export const PrivateLinkResourceOperationsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    privateLinkResourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/privateLinkResources/{privateLinkResourceName}",
      apiVersion: "2024-01-15",
    }),
  );
export type PrivateLinkResourceOperationsGetInput =
  typeof PrivateLinkResourceOperationsGetInput.Type;

// Output Schema
export const PrivateLinkResourceOperationsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        groupId: Schema.optional(Schema.String),
        requiredMembers: Schema.optional(Schema.Array(Schema.String)),
        requiredZoneNames: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type PrivateLinkResourceOperationsGetOutput =
  typeof PrivateLinkResourceOperationsGetOutput.Type;

// The operation
/**
 * Get a PrivateLinkResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 * @param privateLinkResourceName - Private link resource ARM name
 */
export const PrivateLinkResourceOperationsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkResourceOperationsGetInput,
    outputSchema: PrivateLinkResourceOperationsGetOutput,
  }));
// Input Schema
export const PrivateLinkResourceOperationsListByAssessmentProjectInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/privateLinkResources",
      apiVersion: "2024-01-15",
    }),
  );
export type PrivateLinkResourceOperationsListByAssessmentProjectInput =
  typeof PrivateLinkResourceOperationsListByAssessmentProjectInput.Type;

// Output Schema
export const PrivateLinkResourceOperationsListByAssessmentProjectOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => PrivateLinkResourceSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type PrivateLinkResourceOperationsListByAssessmentProjectOutput =
  typeof PrivateLinkResourceOperationsListByAssessmentProjectOutput.Type;

// The operation
/**
 * List PrivateLinkResource resources by AssessmentProject
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 */
export const PrivateLinkResourceOperationsListByAssessmentProject =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkResourceOperationsListByAssessmentProjectInput,
    outputSchema: PrivateLinkResourceOperationsListByAssessmentProjectOutput,
  }));
// Input Schema
export const PrivateLinkResourcesControllerGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    privateLinkResourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/masterSites/{siteName}/privateLinkResources/{privateLinkResourceName}",
      apiVersion: "2023-06-06",
    }),
  );
export type PrivateLinkResourcesControllerGetInput =
  typeof PrivateLinkResourcesControllerGetInput.Type;

// Output Schema
export const PrivateLinkResourcesControllerGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => PrivateLinkResourcePropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type PrivateLinkResourcesControllerGetOutput =
  typeof PrivateLinkResourcesControllerGetOutput.Type;

// The operation
/**
 * Gets the private link resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param privateLinkResourceName - Private link resource name.
 */
export const PrivateLinkResourcesControllerGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkResourcesControllerGetInput,
    outputSchema: PrivateLinkResourcesControllerGetOutput,
  }));
// Input Schema
export const PrivateLinkResourcesControllerListByMasterSiteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/masterSites/{siteName}/privateLinkResources",
      apiVersion: "2023-06-06",
    }),
  );
export type PrivateLinkResourcesControllerListByMasterSiteInput =
  typeof PrivateLinkResourcesControllerListByMasterSiteInput.Type;

// Output Schema
export const PrivateLinkResourcesControllerListByMasterSiteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => PrivateLinkResourceSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type PrivateLinkResourcesControllerListByMasterSiteOutput =
  typeof PrivateLinkResourcesControllerListByMasterSiteOutput.Type;

// The operation
/**
 * Gets the private link resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const PrivateLinkResourcesControllerListByMasterSite =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkResourcesControllerListByMasterSiteInput,
    outputSchema: PrivateLinkResourcesControllerListByMasterSiteOutput,
  }));
// Input Schema
export const ProjectsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Migrate/migrateProjects",
    apiVersion: "2023-01-01",
  }),
);
export type ProjectsListInput = typeof ProjectsListInput.Type;

// Output Schema
export const ProjectsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(Schema.suspend(() => MigrateProjectSchema)),
  ),
  nextLink: Schema.optional(Schema.String),
});
export type ProjectsListOutput = typeof ProjectsListOutput.Type;

// The operation
/**
 * Get all migrate projects.
 *
 * Get all the migrate projects in the resource group.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const ProjectsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ProjectsListInput,
  outputSchema: ProjectsListOutput,
}));
// Input Schema
export const ProjectsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Migrate/migrateProjects",
      apiVersion: "2023-01-01",
    }),
  );
export type ProjectsListBySubscriptionInput =
  typeof ProjectsListBySubscriptionInput.Type;

// Output Schema
export const ProjectsListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => MigrateProjectSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type ProjectsListBySubscriptionOutput =
  typeof ProjectsListBySubscriptionOutput.Type;

// The operation
/**
 * Get all migrate projects.
 *
 * Get all the migrate projects in the subscription.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param api-version - The API version to use for this operation.
 */
export const ProjectsListBySubscription = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ProjectsListBySubscriptionInput,
    outputSchema: ProjectsListBySubscriptionOutput,
  }),
);
// Input Schema
export const RunAsAccountsControllerGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/vmwareSites/{siteName}/runAsAccounts/{accountName}",
      apiVersion: "2023-06-06",
    }),
  );
export type RunAsAccountsControllerGetInput =
  typeof RunAsAccountsControllerGetInput.Type;

// Output Schema
export const RunAsAccountsControllerGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => RunAsAccountPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type RunAsAccountsControllerGetOutput =
  typeof RunAsAccountsControllerGetOutput.Type;

// The operation
/**
 * Get a VmwareRunAsAccountResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param accountName -  RunAsAccounts name
 */
export const RunAsAccountsControllerGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RunAsAccountsControllerGetInput,
    outputSchema: RunAsAccountsControllerGetOutput,
  }),
);
// Input Schema
export const RunAsAccountsControllerListByVmwareSiteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/vmwareSites/{siteName}/runAsAccounts",
      apiVersion: "2023-06-06",
    }),
  );
export type RunAsAccountsControllerListByVmwareSiteInput =
  typeof RunAsAccountsControllerListByVmwareSiteInput.Type;

// Output Schema
export const RunAsAccountsControllerListByVmwareSiteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => VmwareRunAsAccountResourceSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type RunAsAccountsControllerListByVmwareSiteOutput =
  typeof RunAsAccountsControllerListByVmwareSiteOutput.Type;

// The operation
/**
 * List VmwareRunAsAccountResource resources by VmwareSite
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const RunAsAccountsControllerListByVmwareSite =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RunAsAccountsControllerListByVmwareSiteInput,
    outputSchema: RunAsAccountsControllerListByVmwareSiteOutput,
  }));
// Input Schema
export const ServerCollectorsOperationsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    serverCollectorName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => CollectorPropertiesBaseWithAgentSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/servercollectors/{serverCollectorName}",
      apiVersion: "2024-01-15",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type ServerCollectorsOperationsCreateInput =
  typeof ServerCollectorsOperationsCreateInput.Type;

// Output Schema
export const ServerCollectorsOperationsCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => CollectorPropertiesBaseWithAgentSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ServerCollectorsOperationsCreateOutput =
  typeof ServerCollectorsOperationsCreateOutput.Type;

// The operation
/**
 * Create a ServerCollector
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 * @param serverCollectorName - Physical server collector ARM name
 */
export const ServerCollectorsOperationsCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ServerCollectorsOperationsCreateInput,
    outputSchema: ServerCollectorsOperationsCreateOutput,
  }));
// Input Schema
export const ServerCollectorsOperationsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    serverCollectorName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/servercollectors/{serverCollectorName}",
      apiVersion: "2024-01-15",
    }),
  );
export type ServerCollectorsOperationsDeleteInput =
  typeof ServerCollectorsOperationsDeleteInput.Type;

// Output Schema
export const ServerCollectorsOperationsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ServerCollectorsOperationsDeleteOutput =
  typeof ServerCollectorsOperationsDeleteOutput.Type;

// The operation
/**
 * Delete a ServerCollector
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 * @param serverCollectorName - Physical server collector ARM name
 */
export const ServerCollectorsOperationsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ServerCollectorsOperationsDeleteInput,
    outputSchema: ServerCollectorsOperationsDeleteOutput,
  }));
// Input Schema
export const ServerCollectorsOperationsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    serverCollectorName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/servercollectors/{serverCollectorName}",
      apiVersion: "2024-01-15",
    }),
  );
export type ServerCollectorsOperationsGetInput =
  typeof ServerCollectorsOperationsGetInput.Type;

// Output Schema
export const ServerCollectorsOperationsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => CollectorPropertiesBaseWithAgentSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ServerCollectorsOperationsGetOutput =
  typeof ServerCollectorsOperationsGetOutput.Type;

// The operation
/**
 * Get a ServerCollector
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 * @param serverCollectorName - Physical server collector ARM name
 */
export const ServerCollectorsOperationsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ServerCollectorsOperationsGetInput,
    outputSchema: ServerCollectorsOperationsGetOutput,
  }));
// Input Schema
export const ServerCollectorsOperationsListByAssessmentProjectInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/servercollectors",
      apiVersion: "2024-01-15",
    }),
  );
export type ServerCollectorsOperationsListByAssessmentProjectInput =
  typeof ServerCollectorsOperationsListByAssessmentProjectInput.Type;

// Output Schema
export const ServerCollectorsOperationsListByAssessmentProjectOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => ServerCollectorSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type ServerCollectorsOperationsListByAssessmentProjectOutput =
  typeof ServerCollectorsOperationsListByAssessmentProjectOutput.Type;

// The operation
/**
 * List ServerCollector resources by AssessmentProject
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 */
export const ServerCollectorsOperationsListByAssessmentProject =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ServerCollectorsOperationsListByAssessmentProjectInput,
    outputSchema: ServerCollectorsOperationsListByAssessmentProjectOutput,
  }));
// Input Schema
export const ServerDependencyMapControllerClientGroupMembersInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    machineId: Schema.optional(Schema.String),
    processGroupName: Schema.optional(Schema.String),
    processName: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    filters: Schema.optional(
      Schema.suspend(
        () =>
          DependencyMapServiceMapextensionsDependencyMapRequestFiltersSchema,
      ),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/serverSites/{siteName}/clientGroupMembers",
      apiVersion: "2023-06-06",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type ServerDependencyMapControllerClientGroupMembersInput =
  typeof ServerDependencyMapControllerClientGroupMembersInput.Type;

// Output Schema
export const ServerDependencyMapControllerClientGroupMembersOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type ServerDependencyMapControllerClientGroupMembersOutput =
  typeof ServerDependencyMapControllerClientGroupMembersOutput.Type;

// The operation
/**
 * API to list client group members for the selected client group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const ServerDependencyMapControllerClientGroupMembers =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ServerDependencyMapControllerClientGroupMembersInput,
    outputSchema: ServerDependencyMapControllerClientGroupMembersOutput,
  }));
// Input Schema
export const ServerDependencyMapControllerExportDependenciesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/serverSites/{siteName}/exportDependencies",
      apiVersion: "2023-06-06",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type ServerDependencyMapControllerExportDependenciesInput =
  typeof ServerDependencyMapControllerExportDependenciesInput.Type;

// Output Schema
export const ServerDependencyMapControllerExportDependenciesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type ServerDependencyMapControllerExportDependenciesOutput =
  typeof ServerDependencyMapControllerExportDependenciesOutput.Type;

// The operation
/**
 * API to generate report containing agentless dependencies.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const ServerDependencyMapControllerExportDependencies =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ServerDependencyMapControllerExportDependenciesInput,
    outputSchema: ServerDependencyMapControllerExportDependenciesOutput,
  }));
// Input Schema
export const ServerDependencyMapControllerGenerateCoarseMapInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    filters: Schema.optional(
      Schema.suspend(
        () =>
          DependencyMapServiceMapextensionsDependencyMapRequestFiltersSchema,
      ),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/serverSites/{siteName}/generateCoarseMap",
      apiVersion: "2023-06-06",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type ServerDependencyMapControllerGenerateCoarseMapInput =
  typeof ServerDependencyMapControllerGenerateCoarseMapInput.Type;

// Output Schema
export const ServerDependencyMapControllerGenerateCoarseMapOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type ServerDependencyMapControllerGenerateCoarseMapOutput =
  typeof ServerDependencyMapControllerGenerateCoarseMapOutput.Type;

// The operation
/**
 * API to generate coarse map for the list of machines.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const ServerDependencyMapControllerGenerateCoarseMap =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ServerDependencyMapControllerGenerateCoarseMapInput,
    outputSchema: ServerDependencyMapControllerGenerateCoarseMapOutput,
  }));
// Input Schema
export const ServerDependencyMapControllerGenerateDetailedMapInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    machineId: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    filters: Schema.optional(
      Schema.suspend(
        () =>
          DependencyMapServiceMapextensionsDependencyMapRequestFiltersSchema,
      ),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/serverSites/{siteName}/generateDetailedMap",
      apiVersion: "2023-06-06",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type ServerDependencyMapControllerGenerateDetailedMapInput =
  typeof ServerDependencyMapControllerGenerateDetailedMapInput.Type;

// Output Schema
export const ServerDependencyMapControllerGenerateDetailedMapOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type ServerDependencyMapControllerGenerateDetailedMapOutput =
  typeof ServerDependencyMapControllerGenerateDetailedMapOutput.Type;

// The operation
/**
 * API to generate detailed map for a selected machine.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const ServerDependencyMapControllerGenerateDetailedMap =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ServerDependencyMapControllerGenerateDetailedMapInput,
    outputSchema: ServerDependencyMapControllerGenerateDetailedMapOutput,
  }));
// Input Schema
export const ServerDependencyMapControllerServerGroupMembersInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    serverPort: Schema.optional(Schema.Number),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    filters: Schema.optional(
      Schema.suspend(
        () =>
          DependencyMapServiceMapextensionsDependencyMapRequestFiltersSchema,
      ),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/serverSites/{siteName}/serverGroupMembers",
      apiVersion: "2023-06-06",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type ServerDependencyMapControllerServerGroupMembersInput =
  typeof ServerDependencyMapControllerServerGroupMembersInput.Type;

// Output Schema
export const ServerDependencyMapControllerServerGroupMembersOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type ServerDependencyMapControllerServerGroupMembersOutput =
  typeof ServerDependencyMapControllerServerGroupMembersOutput.Type;

// The operation
/**
 * API to list server group members for the selected server group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const ServerDependencyMapControllerServerGroupMembers =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ServerDependencyMapControllerServerGroupMembersInput,
    outputSchema: ServerDependencyMapControllerServerGroupMembersOutput,
  }));
// Input Schema
export const ServerJobsControllerGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    jobName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/serverSites/{siteName}/jobs/{jobName}",
      apiVersion: "2023-06-06",
    }),
  );
export type ServerJobsControllerGetInput =
  typeof ServerJobsControllerGetInput.Type;

// Output Schema
export const ServerJobsControllerGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => JobPropertiesSchema)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ServerJobsControllerGetOutput =
  typeof ServerJobsControllerGetOutput.Type;

// The operation
/**
 * Get a ServerJob
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param jobName -  Jobs name
 */
export const ServerJobsControllerGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ServerJobsControllerGetInput,
    outputSchema: ServerJobsControllerGetOutput,
  }),
);
// Input Schema
export const ServerJobsControllerListByServerSiteResourceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/serverSites/{siteName}/jobs",
      apiVersion: "2023-06-06",
    }),
  );
export type ServerJobsControllerListByServerSiteResourceInput =
  typeof ServerJobsControllerListByServerSiteResourceInput.Type;

// Output Schema
export const ServerJobsControllerListByServerSiteResourceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => ServerJobSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type ServerJobsControllerListByServerSiteResourceOutput =
  typeof ServerJobsControllerListByServerSiteResourceOutput.Type;

// The operation
/**
 * List ServerJob resources by ServerSiteResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const ServerJobsControllerListByServerSiteResource =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ServerJobsControllerListByServerSiteResourceInput,
    outputSchema: ServerJobsControllerListByServerSiteResourceOutput,
  }));
// Input Schema
export const ServerOperationsStatusControllerGetServerSiteOperationsStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    operationStatusName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/serverSites/{siteName}/operationsStatus/{operationStatusName}",
      apiVersion: "2023-06-06",
    }),
  );
export type ServerOperationsStatusControllerGetServerSiteOperationsStatusInput =
  typeof ServerOperationsStatusControllerGetServerSiteOperationsStatusInput.Type;

// Output Schema
export const ServerOperationsStatusControllerGetServerSiteOperationsStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    error: Schema.optional(Schema.suspend(() => OperationStatusErrorSchema)),
    properties: Schema.optional(
      Schema.suspend(() => OperationStatusPropertiesSchema),
    ),
  });
export type ServerOperationsStatusControllerGetServerSiteOperationsStatusOutput =
  typeof ServerOperationsStatusControllerGetServerSiteOperationsStatusOutput.Type;

// The operation
/**
 * A operation status resource belonging to a site resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param operationStatusName - Operation status  Arm Name.
 */
export const ServerOperationsStatusControllerGetServerSiteOperationsStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      ServerOperationsStatusControllerGetServerSiteOperationsStatusInput,
    outputSchema:
      ServerOperationsStatusControllerGetServerSiteOperationsStatusOutput,
  }));
// Input Schema
export const ServerRunAsAccountsControllerGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/serverSites/{siteName}/runAsAccounts/{accountName}",
      apiVersion: "2023-06-06",
    }),
  );
export type ServerRunAsAccountsControllerGetInput =
  typeof ServerRunAsAccountsControllerGetInput.Type;

// Output Schema
export const ServerRunAsAccountsControllerGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => RunAsAccountPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ServerRunAsAccountsControllerGetOutput =
  typeof ServerRunAsAccountsControllerGetOutput.Type;

// The operation
/**
 * Get a ServerRunAsAccount
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param accountName -  RunAsAccounts name
 */
export const ServerRunAsAccountsControllerGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ServerRunAsAccountsControllerGetInput,
    outputSchema: ServerRunAsAccountsControllerGetOutput,
  }));
// Input Schema
export const ServerRunAsAccountsControllerListByServerSiteResourceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/serverSites/{siteName}/runAsAccounts",
      apiVersion: "2023-06-06",
    }),
  );
export type ServerRunAsAccountsControllerListByServerSiteResourceInput =
  typeof ServerRunAsAccountsControllerListByServerSiteResourceInput.Type;

// Output Schema
export const ServerRunAsAccountsControllerListByServerSiteResourceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => ServerRunAsAccountSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type ServerRunAsAccountsControllerListByServerSiteResourceOutput =
  typeof ServerRunAsAccountsControllerListByServerSiteResourceOutput.Type;

// The operation
/**
 * List ServerRunAsAccount resources by ServerSiteResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const ServerRunAsAccountsControllerListByServerSiteResource =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ServerRunAsAccountsControllerListByServerSiteResourceInput,
    outputSchema: ServerRunAsAccountsControllerListByServerSiteResourceOutput,
  }));
// Input Schema
export const ServersControllerDeleteMachineInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    machineName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/serverSites/{siteName}/machines/{machineName}",
      apiVersion: "2023-06-06",
    }),
  );
export type ServersControllerDeleteMachineInput =
  typeof ServersControllerDeleteMachineInput.Type;

// Output Schema
export const ServersControllerDeleteMachineOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ServersControllerDeleteMachineOutput =
  typeof ServersControllerDeleteMachineOutput.Type;

// The operation
/**
 * Delete a Server
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param machineName -  A server machine name
 */
export const ServersControllerDeleteMachine =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ServersControllerDeleteMachineInput,
    outputSchema: ServersControllerDeleteMachineOutput,
  }));
// Input Schema
export const ServersControllerGetMachineInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    machineName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/serverSites/{siteName}/machines/{machineName}",
      apiVersion: "2023-06-06",
    }),
  );
export type ServersControllerGetMachineInput =
  typeof ServersControllerGetMachineInput.Type;

// Output Schema
export const ServersControllerGetMachineOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => ServerPropertiesSchema)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ServersControllerGetMachineOutput =
  typeof ServersControllerGetMachineOutput.Type;

// The operation
/**
 * Get a Server
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param machineName -  A server machine name
 */
export const ServersControllerGetMachine = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ServersControllerGetMachineInput,
    outputSchema: ServersControllerGetMachineOutput,
  }),
);
// Input Schema
export const ServersControllerListByServerSiteResourceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    filter: Schema.optional(Schema.String),
    top: Schema.optional(Schema.String),
    continuationToken: Schema.optional(Schema.String),
    totalRecordCount: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/serverSites/{siteName}/machines",
      apiVersion: "2023-06-06",
    }),
  );
export type ServersControllerListByServerSiteResourceInput =
  typeof ServersControllerListByServerSiteResourceInput.Type;

// Output Schema
export const ServersControllerListByServerSiteResourceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => ServerSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type ServersControllerListByServerSiteResourceOutput =
  typeof ServersControllerListByServerSiteResourceOutput.Type;

// The operation
/**
 * Get all machines in a site.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param filter - filter query
 * @param top - page size  query
 * @param continuationToken - Optional parameter for continuation token.
 * @param totalRecordCount - Total count of machines in the given site.
 * @param siteName - Site name
 */
export const ServersControllerListByServerSiteResource =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ServersControllerListByServerSiteResourceInput,
    outputSchema: ServersControllerListByServerSiteResourceOutput,
  }));
// Input Schema
export const ServersControllerUpdateMachineInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    machineName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => ServerUpdatePropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/serverSites/{siteName}/machines/{machineName}",
      apiVersion: "2023-06-06",
    }),
  );
export type ServersControllerUpdateMachineInput =
  typeof ServersControllerUpdateMachineInput.Type;

// Output Schema
export const ServersControllerUpdateMachineOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => ServerPropertiesSchema)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ServersControllerUpdateMachineOutput =
  typeof ServersControllerUpdateMachineOutput.Type;

// The operation
/**
 * Update a Server machine
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param machineName -  A server machine name
 */
export const ServersControllerUpdateMachine =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ServersControllerUpdateMachineInput,
    outputSchema: ServersControllerUpdateMachineOutput,
  }));
// Input Schema
export const ServerSitesControllerComputeErrorSummaryInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/serverSites/{siteName}/computeErrorSummary",
      apiVersion: "2023-06-06",
    }),
  );
export type ServerSitesControllerComputeErrorSummaryInput =
  typeof ServerSitesControllerComputeErrorSummaryInput.Type;

// Output Schema
export const ServerSitesControllerComputeErrorSummaryOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    applianceName: Schema.String,
    discoveryScopeErrorSummaries: Schema.suspend(
      () => DiscoveryScopeErrorSummarySchema,
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type ServerSitesControllerComputeErrorSummaryOutput =
  typeof ServerSitesControllerComputeErrorSummaryOutput.Type;

// The operation
/**
 * Get the error summary for a server site.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const ServerSitesControllerComputeErrorSummary =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ServerSitesControllerComputeErrorSummaryInput,
    outputSchema: ServerSitesControllerComputeErrorSummaryOutput,
  }));
// Input Schema
export const ServerSitesControllerComputeusageInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/serverSites/{siteName}/computeusage",
      apiVersion: "2023-06-06",
    }),
  );
export type ServerSitesControllerComputeusageInput =
  typeof ServerSitesControllerComputeusageInput.Type;

// Output Schema
export const ServerSitesControllerComputeusageOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    runAsAccounts: Schema.Number,
    serverCount: Schema.Number,
  });
export type ServerSitesControllerComputeusageOutput =
  typeof ServerSitesControllerComputeusageOutput.Type;

// The operation
/**
 * Get a serve site usage.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const ServerSitesControllerComputeusage =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ServerSitesControllerComputeusageInput,
    outputSchema: ServerSitesControllerComputeusageOutput,
  }));
// Input Schema
export const ServerSitesControllerCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(Schema.suspend(() => SitesPropertiesSchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/serverSites/{siteName}",
      apiVersion: "2023-06-06",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type ServerSitesControllerCreateInput =
  typeof ServerSitesControllerCreateInput.Type;

// Output Schema
export const ServerSitesControllerCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => SitesPropertiesSchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ServerSitesControllerCreateOutput =
  typeof ServerSitesControllerCreateOutput.Type;

// The operation
/**
 * Create a ServerSiteResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const ServerSitesControllerCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ServerSitesControllerCreateInput,
    outputSchema: ServerSitesControllerCreateOutput,
  }),
);
// Input Schema
export const ServerSitesControllerDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/serverSites/{siteName}",
      apiVersion: "2023-06-06",
    }),
  );
export type ServerSitesControllerDeleteInput =
  typeof ServerSitesControllerDeleteInput.Type;

// Output Schema
export const ServerSitesControllerDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ServerSitesControllerDeleteOutput =
  typeof ServerSitesControllerDeleteOutput.Type;

// The operation
/**
 * Delete a ServerSiteResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const ServerSitesControllerDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ServerSitesControllerDeleteInput,
    outputSchema: ServerSitesControllerDeleteOutput,
  }),
);
// Input Schema
export const ServerSitesControllerExportApplicationsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/serverSites/{siteName}/exportApplications",
      apiVersion: "2023-06-06",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type ServerSitesControllerExportApplicationsInput =
  typeof ServerSitesControllerExportApplicationsInput.Type;

// Output Schema
export const ServerSitesControllerExportApplicationsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type ServerSitesControllerExportApplicationsOutput =
  typeof ServerSitesControllerExportApplicationsOutput.Type;

// The operation
/**
 * Method to generate report containing
 * machine and the deep discovery of the application installed in the machine.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const ServerSitesControllerExportApplications =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ServerSitesControllerExportApplicationsInput,
    outputSchema: ServerSitesControllerExportApplicationsOutput,
  }));
// Input Schema
export const ServerSitesControllerExportMachineErrorsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => RequestExportMachineErrorsPropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/serverSites/{siteName}/exportMachineErrors",
      apiVersion: "2023-06-06",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type ServerSitesControllerExportMachineErrorsInput =
  typeof ServerSitesControllerExportMachineErrorsInput.Type;

// Output Schema
export const ServerSitesControllerExportMachineErrorsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type ServerSitesControllerExportMachineErrorsOutput =
  typeof ServerSitesControllerExportMachineErrorsOutput.Type;

// The operation
/**
 * Method to generate report containing
 * machine and the errors encountered during guest discovery of the machine.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const ServerSitesControllerExportMachineErrors =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ServerSitesControllerExportMachineErrorsInput,
    outputSchema: ServerSitesControllerExportMachineErrorsOutput,
  }));
// Input Schema
export const ServerSitesControllerGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/serverSites/{siteName}",
      apiVersion: "2023-06-06",
    }),
  );
export type ServerSitesControllerGetInput =
  typeof ServerSitesControllerGetInput.Type;

// Output Schema
export const ServerSitesControllerGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => SitesPropertiesSchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ServerSitesControllerGetOutput =
  typeof ServerSitesControllerGetOutput.Type;

// The operation
/**
 * Get a ServerSiteResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const ServerSitesControllerGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ServerSitesControllerGetInput,
    outputSchema: ServerSitesControllerGetOutput,
  }),
);
// Input Schema
export const ServerSitesControllerListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/serverSites",
      apiVersion: "2023-06-06",
    }),
  );
export type ServerSitesControllerListByResourceGroupInput =
  typeof ServerSitesControllerListByResourceGroupInput.Type;

// Output Schema
export const ServerSitesControllerListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => ServerSiteResourceSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type ServerSitesControllerListByResourceGroupOutput =
  typeof ServerSitesControllerListByResourceGroupOutput.Type;

// The operation
/**
 * List ServerSiteResource resources by resource group
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ServerSitesControllerListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ServerSitesControllerListByResourceGroupInput,
    outputSchema: ServerSitesControllerListByResourceGroupOutput,
  }));
// Input Schema
export const ServerSitesControllerListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.OffAzure/serverSites",
      apiVersion: "2023-06-06",
    }),
  );
export type ServerSitesControllerListBySubscriptionInput =
  typeof ServerSitesControllerListBySubscriptionInput.Type;

// Output Schema
export const ServerSitesControllerListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => ServerSiteResourceSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type ServerSitesControllerListBySubscriptionOutput =
  typeof ServerSitesControllerListBySubscriptionOutput.Type;

// The operation
/**
 * List ServerSiteResource resources by subscription ID
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const ServerSitesControllerListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ServerSitesControllerListBySubscriptionInput,
    outputSchema: ServerSitesControllerListBySubscriptionOutput,
  }));
// Input Schema
export const ServerSitesControllerListHealthSummaryInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/serverSites/{siteName}/listHealthSummary",
      apiVersion: "2023-06-06",
    }),
  );
export type ServerSitesControllerListHealthSummaryInput =
  typeof ServerSitesControllerListHealthSummaryInput.Type;

// Output Schema
export const ServerSitesControllerListHealthSummaryOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => SiteHealthSummarySchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type ServerSitesControllerListHealthSummaryOutput =
  typeof ServerSitesControllerListHealthSummaryOutput.Type;

// The operation
/**
 * Method to get site health summary.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const ServerSitesControllerListHealthSummary =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ServerSitesControllerListHealthSummaryInput,
    outputSchema: ServerSitesControllerListHealthSummaryOutput,
  }));
// Input Schema
export const ServerSitesControllerRefreshSiteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/serverSites/{siteName}/refreshSite",
      apiVersion: "2023-06-06",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type ServerSitesControllerRefreshSiteInput =
  typeof ServerSitesControllerRefreshSiteInput.Type;

// Output Schema
export const ServerSitesControllerRefreshSiteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type ServerSitesControllerRefreshSiteOutput =
  typeof ServerSitesControllerRefreshSiteOutput.Type;

// The operation
/**
 * Operation to refresh a site
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const ServerSitesControllerRefreshSite =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ServerSitesControllerRefreshSiteInput,
    outputSchema: ServerSitesControllerRefreshSiteOutput,
  }));
// Input Schema
export const ServerSitesControllerSummaryInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/serverSites/{siteName}/summary",
      apiVersion: "2023-06-06",
    }),
  );
export type ServerSitesControllerSummaryInput =
  typeof ServerSitesControllerSummaryInput.Type;

// Output Schema
export const ServerSitesControllerSummaryOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    runAsAccountCount: Schema.optional(Schema.Number),
    serverCount: Schema.optional(Schema.Number),
  });
export type ServerSitesControllerSummaryOutput =
  typeof ServerSitesControllerSummaryOutput.Type;

// The operation
/**
 * Method to get site usage.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const ServerSitesControllerSummary =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ServerSitesControllerSummaryInput,
    outputSchema: ServerSitesControllerSummaryOutput,
  }));
// Input Schema
export const ServerSitesControllerUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(
      Schema.suspend(() => ServerSiteResourceUpdatePropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/serverSites/{siteName}",
      apiVersion: "2023-06-06",
    }),
  );
export type ServerSitesControllerUpdateInput =
  typeof ServerSitesControllerUpdateInput.Type;

// Output Schema
export const ServerSitesControllerUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => SitesPropertiesSchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ServerSitesControllerUpdateOutput =
  typeof ServerSitesControllerUpdateOutput.Type;

// The operation
/**
 * Update a ServerSiteResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const ServerSitesControllerUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ServerSitesControllerUpdateInput,
    outputSchema: ServerSitesControllerUpdateOutput,
  }),
);
// Input Schema
export const ServerSitesControllerUpdateDependencyMapStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    machines: Schema.optional(
      Schema.Array(Schema.suspend(() => DependencyMapMachineInputSchema)),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/serverSites/{siteName}/updateDependencyMapStatus",
      apiVersion: "2023-06-06",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type ServerSitesControllerUpdateDependencyMapStatusInput =
  typeof ServerSitesControllerUpdateDependencyMapStatusInput.Type;

// Output Schema
export const ServerSitesControllerUpdateDependencyMapStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type ServerSitesControllerUpdateDependencyMapStatusOutput =
  typeof ServerSitesControllerUpdateDependencyMapStatusOutput.Type;

// The operation
/**
 * Method to enable disable dependency map status for machines
 * in a site.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const ServerSitesControllerUpdateDependencyMapStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ServerSitesControllerUpdateDependencyMapStatusInput,
    outputSchema: ServerSitesControllerUpdateDependencyMapStatusOutput,
  }));
// Input Schema
export const ServerSitesControllerUpdatePropertiesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    value: Schema.Array(Schema.suspend(() => MachineMetadataSchema)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/serverSites/{siteName}/updateProperties",
      apiVersion: "2023-06-06",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type ServerSitesControllerUpdatePropertiesInput =
  typeof ServerSitesControllerUpdatePropertiesInput.Type;

// Output Schema
export const ServerSitesControllerUpdatePropertiesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type ServerSitesControllerUpdatePropertiesOutput =
  typeof ServerSitesControllerUpdatePropertiesOutput.Type;

// The operation
/**
 * Operation to update custom properties for servers
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const ServerSitesControllerUpdateProperties =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ServerSitesControllerUpdatePropertiesInput,
    outputSchema: ServerSitesControllerUpdatePropertiesOutput,
  }));
// Input Schema
export const ServerSoftwareInventoriesControllerGetMachineSoftwareInventoryInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    machineName: Schema.String.pipe(T.PathParam()),
    default: Schema.Literals(["default"]).pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/serverSites/{siteName}/machines/{machineName}/softwareInventories/{default}",
      apiVersion: "2023-06-06",
    }),
  );
export type ServerSoftwareInventoriesControllerGetMachineSoftwareInventoryInput =
  typeof ServerSoftwareInventoriesControllerGetMachineSoftwareInventoryInput.Type;

// Output Schema
export const ServerSoftwareInventoriesControllerGetMachineSoftwareInventoryOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => MachineSoftwareInventoryPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ServerSoftwareInventoriesControllerGetMachineSoftwareInventoryOutput =
  typeof ServerSoftwareInventoriesControllerGetMachineSoftwareInventoryOutput.Type;

// The operation
/**
 * Method to get a machines software inventory like applications and roles.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param machineName -  A server machine name
 * @param default - Default value.
 */
export const ServerSoftwareInventoriesControllerGetMachineSoftwareInventory =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      ServerSoftwareInventoriesControllerGetMachineSoftwareInventoryInput,
    outputSchema:
      ServerSoftwareInventoriesControllerGetMachineSoftwareInventoryOutput,
  }));
// Input Schema
export const ServerSoftwareInventoriesControllerListByServerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    machineName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/serverSites/{siteName}/machines/{machineName}/softwareinventories",
      apiVersion: "2023-06-06",
    }),
  );
export type ServerSoftwareInventoriesControllerListByServerInput =
  typeof ServerSoftwareInventoriesControllerListByServerInput.Type;

// Output Schema
export const ServerSoftwareInventoriesControllerListByServerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => ServerSoftwareInventorySchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type ServerSoftwareInventoriesControllerListByServerOutput =
  typeof ServerSoftwareInventoriesControllerListByServerOutput.Type;

// The operation
/**
 * List ServerSoftwareInventory resources by Server
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param machineName -  A server machine name
 */
export const ServerSoftwareInventoriesControllerListByServer =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ServerSoftwareInventoriesControllerListByServerInput,
    outputSchema: ServerSoftwareInventoriesControllerListByServerOutput,
  }));
// Input Schema
export const SitesControllerComputeErrorSummaryInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/vmwareSites/{siteName}/computeErrorSummary",
      apiVersion: "2023-06-06",
    }),
  );
export type SitesControllerComputeErrorSummaryInput =
  typeof SitesControllerComputeErrorSummaryInput.Type;

// Output Schema
export const SitesControllerComputeErrorSummaryOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    applianceName: Schema.String,
    discoveryScopeErrorSummaries: Schema.suspend(
      () => DiscoveryScopeErrorSummarySchema,
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type SitesControllerComputeErrorSummaryOutput =
  typeof SitesControllerComputeErrorSummaryOutput.Type;

// The operation
/**
 * Method to get site error summary.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const SitesControllerComputeErrorSummary =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SitesControllerComputeErrorSummaryInput,
    outputSchema: SitesControllerComputeErrorSummaryOutput,
  }));
// Input Schema
export const SitesControllerComputeusageInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/vmwareSites/{siteName}/computeusage",
      apiVersion: "2023-06-06",
    }),
  );
export type SitesControllerComputeusageInput =
  typeof SitesControllerComputeusageInput.Type;

// Output Schema
export const SitesControllerComputeusageOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    machineCount: Schema.optional(Schema.Number),
    runAsAccountCount: Schema.optional(Schema.Number),
    vCenterCount: Schema.optional(Schema.Number),
  });
export type SitesControllerComputeusageOutput =
  typeof SitesControllerComputeusageOutput.Type;

// The operation
/**
 * Method to get site error summary.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const SitesControllerComputeusage = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SitesControllerComputeusageInput,
    outputSchema: SitesControllerComputeusageOutput,
  }),
);
// Input Schema
export const SitesControllerCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(Schema.suspend(() => SitesPropertiesSchema)),
    eTag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/vmwareSites/{siteName}",
      apiVersion: "2023-06-06",
    }),
  );
export type SitesControllerCreateInput = typeof SitesControllerCreateInput.Type;

// Output Schema
export const SitesControllerCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => SitesPropertiesSchema)),
    eTag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type SitesControllerCreateOutput =
  typeof SitesControllerCreateOutput.Type;

// The operation
/**
 * Create a VmwareSite
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const SitesControllerCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SitesControllerCreateInput,
    outputSchema: SitesControllerCreateOutput,
  }),
);
// Input Schema
export const SitesControllerDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/vmwareSites/{siteName}",
      apiVersion: "2023-06-06",
    }),
  );
export type SitesControllerDeleteInput = typeof SitesControllerDeleteInput.Type;

// Output Schema
export const SitesControllerDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type SitesControllerDeleteOutput =
  typeof SitesControllerDeleteOutput.Type;

// The operation
/**
 * Delete a VmwareSite
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const SitesControllerDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SitesControllerDeleteInput,
    outputSchema: SitesControllerDeleteOutput,
  }),
);
// Input Schema
export const SitesControllerExportApplicationsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/vmwareSites/{siteName}/exportApplications",
      apiVersion: "2023-06-06",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type SitesControllerExportApplicationsInput =
  typeof SitesControllerExportApplicationsInput.Type;

// Output Schema
export const SitesControllerExportApplicationsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type SitesControllerExportApplicationsOutput =
  typeof SitesControllerExportApplicationsOutput.Type;

// The operation
/**
 * Method to generate report containing
 * machine and the deep discovery of the application installed in the machine.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const SitesControllerExportApplications =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SitesControllerExportApplicationsInput,
    outputSchema: SitesControllerExportApplicationsOutput,
  }));
// Input Schema
export const SitesControllerExportMachineErrorsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => RequestExportMachineErrorsPropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/vmwareSites/{siteName}/exportMachineErrors",
      apiVersion: "2023-06-06",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type SitesControllerExportMachineErrorsInput =
  typeof SitesControllerExportMachineErrorsInput.Type;

// Output Schema
export const SitesControllerExportMachineErrorsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type SitesControllerExportMachineErrorsOutput =
  typeof SitesControllerExportMachineErrorsOutput.Type;

// The operation
/**
 * Method to generate report containing
 * machine and the errors encountered during guest discovery of the machine.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const SitesControllerExportMachineErrors =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SitesControllerExportMachineErrorsInput,
    outputSchema: SitesControllerExportMachineErrorsOutput,
  }));
// Input Schema
export const SitesControllerExportMachinesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/vmwareSites/{siteName}/exportMachines",
      apiVersion: "2023-06-06",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type SitesControllerExportMachinesInput =
  typeof SitesControllerExportMachinesInput.Type;

// Output Schema
export const SitesControllerExportMachinesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type SitesControllerExportMachinesOutput =
  typeof SitesControllerExportMachinesOutput.Type;

// The operation
/**
 * Method to generate report containing
 * machine and the deep discovery of the application installed in the machine.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const SitesControllerExportMachines =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SitesControllerExportMachinesInput,
    outputSchema: SitesControllerExportMachinesOutput,
  }));
// Input Schema
export const SitesControllerGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/vmwareSites/{siteName}",
      apiVersion: "2023-06-06",
    }),
  );
export type SitesControllerGetInput = typeof SitesControllerGetInput.Type;

// Output Schema
export const SitesControllerGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => SitesPropertiesSchema)),
    eTag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type SitesControllerGetOutput = typeof SitesControllerGetOutput.Type;

// The operation
/**
 * Get a VmwareSite
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const SitesControllerGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SitesControllerGetInput,
  outputSchema: SitesControllerGetOutput,
}));
// Input Schema
export const SitesControllerListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/vmwareSites",
      apiVersion: "2023-06-06",
    }),
  );
export type SitesControllerListByResourceGroupInput =
  typeof SitesControllerListByResourceGroupInput.Type;

// Output Schema
export const SitesControllerListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => VmwareSiteSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type SitesControllerListByResourceGroupOutput =
  typeof SitesControllerListByResourceGroupOutput.Type;

// The operation
/**
 * Get all vmware sites.
 *
 * Get all the vmware sites in the resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const SitesControllerListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SitesControllerListByResourceGroupInput,
    outputSchema: SitesControllerListByResourceGroupOutput,
  }));
// Input Schema
export const SitesControllerListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.OffAzure/vmwareSites",
      apiVersion: "2023-06-06",
    }),
  );
export type SitesControllerListBySubscriptionInput =
  typeof SitesControllerListBySubscriptionInput.Type;

// Output Schema
export const SitesControllerListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => VmwareSiteSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type SitesControllerListBySubscriptionOutput =
  typeof SitesControllerListBySubscriptionOutput.Type;

// The operation
/**
 * Get all vmware sites.
 *
 * Get all the vmware sites in the subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 */
export const SitesControllerListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SitesControllerListBySubscriptionInput,
    outputSchema: SitesControllerListBySubscriptionOutput,
  }));
// Input Schema
export const SitesControllerListHealthSummaryInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/vmwareSites/{siteName}/listHealthSummary",
      apiVersion: "2023-06-06",
    }),
  );
export type SitesControllerListHealthSummaryInput =
  typeof SitesControllerListHealthSummaryInput.Type;

// Output Schema
export const SitesControllerListHealthSummaryOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => SiteHealthSummarySchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type SitesControllerListHealthSummaryOutput =
  typeof SitesControllerListHealthSummaryOutput.Type;

// The operation
/**
 * Method to get site health summary.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const SitesControllerListHealthSummary =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SitesControllerListHealthSummaryInput,
    outputSchema: SitesControllerListHealthSummaryOutput,
  }));
// Input Schema
export const SitesControllerSummaryInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/vmwareSites/{siteName}/summary",
      apiVersion: "2023-06-06",
    }),
  );
export type SitesControllerSummaryInput =
  typeof SitesControllerSummaryInput.Type;

// Output Schema
export const SitesControllerSummaryOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    machineCount: Schema.optional(Schema.Number),
    runAsAccountCount: Schema.optional(Schema.Number),
    vCenterCount: Schema.optional(Schema.Number),
  });
export type SitesControllerSummaryOutput =
  typeof SitesControllerSummaryOutput.Type;

// The operation
/**
 * Method to get site usage/summary.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const SitesControllerSummary = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SitesControllerSummaryInput,
    outputSchema: SitesControllerSummaryOutput,
  }),
);
// Input Schema
export const SitesControllerUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(
      Schema.suspend(() => VmwareSiteUpdatePropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/vmwareSites/{siteName}",
      apiVersion: "2023-06-06",
    }),
  );
export type SitesControllerUpdateInput = typeof SitesControllerUpdateInput.Type;

// Output Schema
export const SitesControllerUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => SitesPropertiesSchema)),
    eTag: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type SitesControllerUpdateOutput =
  typeof SitesControllerUpdateOutput.Type;

// The operation
/**
 * Update a VmwareSite
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const SitesControllerUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SitesControllerUpdateInput,
    outputSchema: SitesControllerUpdateOutput,
  }),
);
// Input Schema
export const SolutionsControllerCleanupDataInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/migrateProjects/{migrateProjectName}/solutions/{solutionName}/cleanupData",
      apiVersion: "2023-01-01",
    }),
  );
export type SolutionsControllerCleanupDataInput =
  typeof SolutionsControllerCleanupDataInput.Type;

// Output Schema
export const SolutionsControllerCleanupDataOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({});
export type SolutionsControllerCleanupDataOutput =
  typeof SolutionsControllerCleanupDataOutput.Type;

// The operation
/**
 * Cleanup the solution data in the migrate project.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const SolutionsControllerCleanupData =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SolutionsControllerCleanupDataInput,
    outputSchema: SolutionsControllerCleanupDataOutput,
  }));
// Input Schema
export const SolutionsControllerCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    properties: Schema.optional(Schema.suspend(() => SolutionPropertiesSchema)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/migrateProjects/{migrateProjectName}/solutions/{solutionName}",
      apiVersion: "2023-01-01",
    }),
  );
export type SolutionsControllerCreateInput =
  typeof SolutionsControllerCreateInput.Type;

// Output Schema
export const SolutionsControllerCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    properties: Schema.optional(Schema.suspend(() => SolutionPropertiesSchema)),
  });
export type SolutionsControllerCreateOutput =
  typeof SolutionsControllerCreateOutput.Type;

// The operation
/**
 * Creates a solution in the migrate project.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const SolutionsControllerCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SolutionsControllerCreateInput,
    outputSchema: SolutionsControllerCreateOutput,
  }),
);
// Input Schema
export const SolutionsControllerDeleteSolutionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/migrateProjects/{migrateProjectName}/solutions/{solutionName}",
      apiVersion: "2023-01-01",
    }),
  );
export type SolutionsControllerDeleteSolutionInput =
  typeof SolutionsControllerDeleteSolutionInput.Type;

// Output Schema
export const SolutionsControllerDeleteSolutionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({});
export type SolutionsControllerDeleteSolutionOutput =
  typeof SolutionsControllerDeleteSolutionOutput.Type;

// The operation
/**
 * Delete the solution
 *
 * Delete the solution. Deleting non-existent project is a no-operation.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const SolutionsControllerDeleteSolution =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SolutionsControllerDeleteSolutionInput,
    outputSchema: SolutionsControllerDeleteSolutionOutput,
  }));
// Input Schema
export const SolutionsControllerGetConfigInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/migrateProjects/{migrateProjectName}/solutions/{solutionName}/getConfig",
      apiVersion: "2023-01-01",
    }),
  );
export type SolutionsControllerGetConfigInput =
  typeof SolutionsControllerGetConfigInput.Type;

// Output Schema
export const SolutionsControllerGetConfigOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    publisherSasUri: Schema.optional(Schema.String),
  });
export type SolutionsControllerGetConfigOutput =
  typeof SolutionsControllerGetConfigOutput.Type;

// The operation
/**
 * Gets the config for the solution in the migrate project.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const SolutionsControllerGetConfig =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SolutionsControllerGetConfigInput,
    outputSchema: SolutionsControllerGetConfigOutput,
  }));
// Input Schema
export const SolutionsControllerGetSolutionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/migrateProjects/{migrateProjectName}/solutions/{solutionName}",
      apiVersion: "2023-01-01",
    }),
  );
export type SolutionsControllerGetSolutionInput =
  typeof SolutionsControllerGetSolutionInput.Type;

// Output Schema
export const SolutionsControllerGetSolutionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    properties: Schema.optional(Schema.suspend(() => SolutionPropertiesSchema)),
  });
export type SolutionsControllerGetSolutionOutput =
  typeof SolutionsControllerGetSolutionOutput.Type;

// The operation
/**
 * Gets a solution in the migrate project.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const SolutionsControllerGetSolution =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SolutionsControllerGetSolutionInput,
    outputSchema: SolutionsControllerGetSolutionOutput,
  }));
// Input Schema
export const SolutionsControllerListSolutionsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/migrateProjects/{migrateProjectName}/solutions",
      apiVersion: "2023-01-01",
    }),
  );
export type SolutionsControllerListSolutionsInput =
  typeof SolutionsControllerListSolutionsInput.Type;

// Output Schema
export const SolutionsControllerListSolutionsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.Array(Schema.suspend(() => SolutionSchema))),
    nextLink: Schema.optional(Schema.String),
  });
export type SolutionsControllerListSolutionsOutput =
  typeof SolutionsControllerListSolutionsOutput.Type;

// The operation
/**
 * Gets the list of solutions in the migrate project.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const SolutionsControllerListSolutions =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SolutionsControllerListSolutionsInput,
    outputSchema: SolutionsControllerListSolutionsOutput,
  }));
// Input Schema
export const SolutionsControllerUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    properties: Schema.optional(Schema.suspend(() => SolutionPropertiesSchema)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/migrateProjects/{migrateProjectName}/solutions/{solutionName}",
      apiVersion: "2023-01-01",
    }),
  );
export type SolutionsControllerUpdateInput =
  typeof SolutionsControllerUpdateInput.Type;

// Output Schema
export const SolutionsControllerUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    properties: Schema.optional(Schema.suspend(() => SolutionPropertiesSchema)),
  });
export type SolutionsControllerUpdateOutput =
  typeof SolutionsControllerUpdateOutput.Type;

// The operation
/**
 * Update solution.
 *
 * Update a solution with specified name. Supports partial updates, for example only tags can be provided.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const SolutionsControllerUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SolutionsControllerUpdateInput,
    outputSchema: SolutionsControllerUpdateOutput,
  }),
);
// Input Schema
export const SqlAssessmentOptionsOperationsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    assessmentOptionsName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/sqlAssessmentOptions/{assessmentOptionsName}",
      apiVersion: "2024-01-15",
    }),
  );
export type SqlAssessmentOptionsOperationsGetInput =
  typeof SqlAssessmentOptionsOperationsGetInput.Type;

// Output Schema
export const SqlAssessmentOptionsOperationsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => SqlAssessmentOptionsPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type SqlAssessmentOptionsOperationsGetOutput =
  typeof SqlAssessmentOptionsOperationsGetOutput.Type;

// The operation
/**
 * Get a SqlAssessmentOptions
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 * @param assessmentOptionsName - Sql assessment options ARM name. Accepted values is 'default'
 */
export const SqlAssessmentOptionsOperationsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlAssessmentOptionsOperationsGetInput,
    outputSchema: SqlAssessmentOptionsOperationsGetOutput,
  }));
// Input Schema
export const SqlAssessmentOptionsOperationsListByAssessmentProjectInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/sqlAssessmentOptions",
      apiVersion: "2024-01-15",
    }),
  );
export type SqlAssessmentOptionsOperationsListByAssessmentProjectInput =
  typeof SqlAssessmentOptionsOperationsListByAssessmentProjectInput.Type;

// Output Schema
export const SqlAssessmentOptionsOperationsListByAssessmentProjectOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => SqlAssessmentOptionsSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type SqlAssessmentOptionsOperationsListByAssessmentProjectOutput =
  typeof SqlAssessmentOptionsOperationsListByAssessmentProjectOutput.Type;

// The operation
/**
 * List SqlAssessmentOptions resources by AssessmentProject
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 */
export const SqlAssessmentOptionsOperationsListByAssessmentProject =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlAssessmentOptionsOperationsListByAssessmentProjectInput,
    outputSchema: SqlAssessmentOptionsOperationsListByAssessmentProjectOutput,
  }));
// Input Schema
export const SqlAssessmentV2OperationsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
    assessmentName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => SqlAssessmentV2PropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}/sqlAssessments/{assessmentName}",
      apiVersion: "2024-01-15",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type SqlAssessmentV2OperationsCreateInput =
  typeof SqlAssessmentV2OperationsCreateInput.Type;

// Output Schema
export const SqlAssessmentV2OperationsCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => SqlAssessmentV2PropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type SqlAssessmentV2OperationsCreateOutput =
  typeof SqlAssessmentV2OperationsCreateOutput.Type;

// The operation
/**
 * Create a SqlAssessmentV2
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 * @param groupName - Group ARM name
 * @param assessmentName - SQL Assessment arm name.
 */
export const SqlAssessmentV2OperationsCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlAssessmentV2OperationsCreateInput,
    outputSchema: SqlAssessmentV2OperationsCreateOutput,
  }));
// Input Schema
export const SqlAssessmentV2OperationsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
    assessmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}/sqlAssessments/{assessmentName}",
      apiVersion: "2024-01-15",
    }),
  );
export type SqlAssessmentV2OperationsDeleteInput =
  typeof SqlAssessmentV2OperationsDeleteInput.Type;

// Output Schema
export const SqlAssessmentV2OperationsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type SqlAssessmentV2OperationsDeleteOutput =
  typeof SqlAssessmentV2OperationsDeleteOutput.Type;

// The operation
/**
 * Delete a SqlAssessmentV2
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 * @param groupName - Group ARM name
 * @param assessmentName - SQL Assessment arm name.
 */
export const SqlAssessmentV2OperationsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlAssessmentV2OperationsDeleteInput,
    outputSchema: SqlAssessmentV2OperationsDeleteOutput,
  }));
// Input Schema
export const SqlAssessmentV2OperationsDownloadUrlInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
    assessmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}/sqlAssessments/{assessmentName}/downloadUrl",
      apiVersion: "2024-01-15",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type SqlAssessmentV2OperationsDownloadUrlInput =
  typeof SqlAssessmentV2OperationsDownloadUrlInput.Type;

// Output Schema
export const SqlAssessmentV2OperationsDownloadUrlOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    assessmentReportUrl: Schema.String,
    expirationTime: Schema.String,
  });
export type SqlAssessmentV2OperationsDownloadUrlOutput =
  typeof SqlAssessmentV2OperationsDownloadUrlOutput.Type;

// The operation
/**
 * Get download URL for the assessment report.
 *
 * Get the URL for downloading the assessment in a report format.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 * @param groupName - Group ARM name
 * @param assessmentName - SQL Assessment arm name.
 */
export const SqlAssessmentV2OperationsDownloadUrl =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlAssessmentV2OperationsDownloadUrlInput,
    outputSchema: SqlAssessmentV2OperationsDownloadUrlOutput,
  }));
// Input Schema
export const SqlAssessmentV2OperationsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
    assessmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}/sqlAssessments/{assessmentName}",
      apiVersion: "2024-01-15",
    }),
  );
export type SqlAssessmentV2OperationsGetInput =
  typeof SqlAssessmentV2OperationsGetInput.Type;

// Output Schema
export const SqlAssessmentV2OperationsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => SqlAssessmentV2PropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type SqlAssessmentV2OperationsGetOutput =
  typeof SqlAssessmentV2OperationsGetOutput.Type;

// The operation
/**
 * Get a SqlAssessmentV2
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 * @param groupName - Group ARM name
 * @param assessmentName - SQL Assessment arm name.
 */
export const SqlAssessmentV2OperationsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlAssessmentV2OperationsGetInput,
    outputSchema: SqlAssessmentV2OperationsGetOutput,
  }));
// Input Schema
export const SqlAssessmentV2OperationsListByGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}/sqlAssessments",
      apiVersion: "2024-01-15",
    }),
  );
export type SqlAssessmentV2OperationsListByGroupInput =
  typeof SqlAssessmentV2OperationsListByGroupInput.Type;

// Output Schema
export const SqlAssessmentV2OperationsListByGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => SqlAssessmentV2Schema)),
    nextLink: Schema.optional(Schema.String),
  });
export type SqlAssessmentV2OperationsListByGroupOutput =
  typeof SqlAssessmentV2OperationsListByGroupOutput.Type;

// The operation
/**
 * List SqlAssessmentV2 resources by Group
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 * @param groupName - Group ARM name
 */
export const SqlAssessmentV2OperationsListByGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlAssessmentV2OperationsListByGroupInput,
    outputSchema: SqlAssessmentV2OperationsListByGroupOutput,
  }));
// Input Schema
export const SqlAssessmentV2SummaryOperationsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
    assessmentName: Schema.String.pipe(T.PathParam()),
    summaryName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}/sqlAssessments/{assessmentName}/summaries/{summaryName}",
      apiVersion: "2024-01-15",
    }),
  );
export type SqlAssessmentV2SummaryOperationsGetInput =
  typeof SqlAssessmentV2SummaryOperationsGetInput.Type;

// Output Schema
export const SqlAssessmentV2SummaryOperationsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => SqlAssessmentV2SummaryPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type SqlAssessmentV2SummaryOperationsGetOutput =
  typeof SqlAssessmentV2SummaryOperationsGetOutput.Type;

// The operation
/**
 * Get a SqlAssessmentV2Summary
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 * @param groupName - Group ARM name
 * @param assessmentName - SQL Assessment arm name.
 * @param summaryName - Gets the Name of the SQL Summary.
 */
export const SqlAssessmentV2SummaryOperationsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlAssessmentV2SummaryOperationsGetInput,
    outputSchema: SqlAssessmentV2SummaryOperationsGetOutput,
  }));
// Input Schema
export const SqlAssessmentV2SummaryOperationsListBySqlAssessmentV2Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
    assessmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}/sqlAssessments/{assessmentName}/summaries",
      apiVersion: "2024-01-15",
    }),
  );
export type SqlAssessmentV2SummaryOperationsListBySqlAssessmentV2Input =
  typeof SqlAssessmentV2SummaryOperationsListBySqlAssessmentV2Input.Type;

// Output Schema
export const SqlAssessmentV2SummaryOperationsListBySqlAssessmentV2Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => SqlAssessmentV2SummarySchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type SqlAssessmentV2SummaryOperationsListBySqlAssessmentV2Output =
  typeof SqlAssessmentV2SummaryOperationsListBySqlAssessmentV2Output.Type;

// The operation
/**
 * List SqlAssessmentV2Summary resources by SqlAssessmentV2
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 * @param groupName - Group ARM name
 * @param assessmentName - SQL Assessment arm name.
 */
export const SqlAssessmentV2SummaryOperationsListBySqlAssessmentV2 =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlAssessmentV2SummaryOperationsListBySqlAssessmentV2Input,
    outputSchema: SqlAssessmentV2SummaryOperationsListBySqlAssessmentV2Output,
  }));
// Input Schema
export const SqlAvailabilityGroupsControllerGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    sqlSiteName: Schema.String.pipe(T.PathParam()),
    sqlAvailabilityGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/masterSites/{siteName}/sqlSites/{sqlSiteName}/sqlAvailabilityGroups/{sqlAvailabilityGroupName}",
      apiVersion: "2023-06-06",
    }),
  );
export type SqlAvailabilityGroupsControllerGetInput =
  typeof SqlAvailabilityGroupsControllerGetInput.Type;

// Output Schema
export const SqlAvailabilityGroupsControllerGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => SqlAvailabilityGroupPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type SqlAvailabilityGroupsControllerGetOutput =
  typeof SqlAvailabilityGroupsControllerGetOutput.Type;

// The operation
/**
 * Gets the sql availability group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param sqlSiteName - SQL site name.
 * @param sqlAvailabilityGroupName - SQL availability group name.
 */
export const SqlAvailabilityGroupsControllerGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlAvailabilityGroupsControllerGetInput,
    outputSchema: SqlAvailabilityGroupsControllerGetOutput,
  }));
// Input Schema
export const SqlAvailabilityGroupsControllerListBySqlSiteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    sqlSiteName: Schema.String.pipe(T.PathParam()),
    filter: Schema.optional(Schema.String),
    top: Schema.optional(Schema.String),
    continuationToken: Schema.optional(Schema.String),
    totalRecordCount: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/masterSites/{siteName}/sqlSites/{sqlSiteName}/sqlAvailabilityGroups",
      apiVersion: "2023-06-06",
    }),
  );
export type SqlAvailabilityGroupsControllerListBySqlSiteInput =
  typeof SqlAvailabilityGroupsControllerListBySqlSiteInput.Type;

// Output Schema
export const SqlAvailabilityGroupsControllerListBySqlSiteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => SqlAvailabilityGroupSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type SqlAvailabilityGroupsControllerListBySqlSiteOutput =
  typeof SqlAvailabilityGroupsControllerListBySqlSiteOutput.Type;

// The operation
/**
 * Gets the sql availability groups.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param filter - filter query
 * @param top - page size  query
 * @param continuationToken - Optional parameter for continuation token.
 * @param totalRecordCount - Total count of machines in the given site.
 * @param siteName - Site name
 * @param sqlSiteName - SQL site name.
 */
export const SqlAvailabilityGroupsControllerListBySqlSite =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlAvailabilityGroupsControllerListBySqlSiteInput,
    outputSchema: SqlAvailabilityGroupsControllerListBySqlSiteOutput,
  }));
// Input Schema
export const SqlCollectorOperationsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    collectorName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => CollectorPropertiesBaseWithAgentSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/sqlcollectors/{collectorName}",
      apiVersion: "2024-01-15",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type SqlCollectorOperationsCreateInput =
  typeof SqlCollectorOperationsCreateInput.Type;

// Output Schema
export const SqlCollectorOperationsCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => CollectorPropertiesBaseWithAgentSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type SqlCollectorOperationsCreateOutput =
  typeof SqlCollectorOperationsCreateOutput.Type;

// The operation
/**
 * Create a SqlCollector
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 * @param collectorName - Sql collector ARM name.
 */
export const SqlCollectorOperationsCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlCollectorOperationsCreateInput,
    outputSchema: SqlCollectorOperationsCreateOutput,
  }));
// Input Schema
export const SqlCollectorOperationsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    collectorName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/sqlcollectors/{collectorName}",
      apiVersion: "2024-01-15",
    }),
  );
export type SqlCollectorOperationsDeleteInput =
  typeof SqlCollectorOperationsDeleteInput.Type;

// Output Schema
export const SqlCollectorOperationsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type SqlCollectorOperationsDeleteOutput =
  typeof SqlCollectorOperationsDeleteOutput.Type;

// The operation
/**
 * Delete a SqlCollector
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 * @param collectorName - Sql collector ARM name.
 */
export const SqlCollectorOperationsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlCollectorOperationsDeleteInput,
    outputSchema: SqlCollectorOperationsDeleteOutput,
  }));
// Input Schema
export const SqlCollectorOperationsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    collectorName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/sqlcollectors/{collectorName}",
      apiVersion: "2024-01-15",
    }),
  );
export type SqlCollectorOperationsGetInput =
  typeof SqlCollectorOperationsGetInput.Type;

// Output Schema
export const SqlCollectorOperationsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => CollectorPropertiesBaseWithAgentSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type SqlCollectorOperationsGetOutput =
  typeof SqlCollectorOperationsGetOutput.Type;

// The operation
/**
 * Get a SqlCollector
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 * @param collectorName - Sql collector ARM name.
 */
export const SqlCollectorOperationsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SqlCollectorOperationsGetInput,
    outputSchema: SqlCollectorOperationsGetOutput,
  }),
);
// Input Schema
export const SqlCollectorOperationsListByAssessmentProjectInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/sqlcollectors",
      apiVersion: "2024-01-15",
    }),
  );
export type SqlCollectorOperationsListByAssessmentProjectInput =
  typeof SqlCollectorOperationsListByAssessmentProjectInput.Type;

// Output Schema
export const SqlCollectorOperationsListByAssessmentProjectOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => SqlCollectorSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type SqlCollectorOperationsListByAssessmentProjectOutput =
  typeof SqlCollectorOperationsListByAssessmentProjectOutput.Type;

// The operation
/**
 * List SqlCollector resources by AssessmentProject
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 */
export const SqlCollectorOperationsListByAssessmentProject =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlCollectorOperationsListByAssessmentProjectInput,
    outputSchema: SqlCollectorOperationsListByAssessmentProjectOutput,
  }));
// Input Schema
export const SqlDatabasesControllerGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    sqlSiteName: Schema.String.pipe(T.PathParam()),
    sqlDatabaseName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/masterSites/{siteName}/sqlSites/{sqlSiteName}/sqlDatabases/{sqlDatabaseName}",
      apiVersion: "2023-06-06",
    }),
  );
export type SqlDatabasesControllerGetInput =
  typeof SqlDatabasesControllerGetInput.Type;

// Output Schema
export const SqlDatabasesControllerGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => SqlDatabasePropertiesV2Schema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type SqlDatabasesControllerGetOutput =
  typeof SqlDatabasesControllerGetOutput.Type;

// The operation
/**
 * Gets the sql Database.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param sqlSiteName - SQL site name.
 * @param sqlDatabaseName - SQL Database name.
 */
export const SqlDatabasesControllerGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SqlDatabasesControllerGetInput,
    outputSchema: SqlDatabasesControllerGetOutput,
  }),
);
// Input Schema
export const SqlDatabasesControllerListBySqlSiteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    sqlSiteName: Schema.String.pipe(T.PathParam()),
    filter: Schema.optional(Schema.String),
    top: Schema.optional(Schema.String),
    continuationToken: Schema.optional(Schema.String),
    totalRecordCount: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/masterSites/{siteName}/sqlSites/{sqlSiteName}/sqlDatabases",
      apiVersion: "2023-06-06",
    }),
  );
export type SqlDatabasesControllerListBySqlSiteInput =
  typeof SqlDatabasesControllerListBySqlSiteInput.Type;

// Output Schema
export const SqlDatabasesControllerListBySqlSiteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => SqlDatabaseV2Schema)),
    nextLink: Schema.optional(Schema.String),
  });
export type SqlDatabasesControllerListBySqlSiteOutput =
  typeof SqlDatabasesControllerListBySqlSiteOutput.Type;

// The operation
/**
 * Gets the sql Databases.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param filter - filter query
 * @param top - page size  query
 * @param continuationToken - Optional parameter for continuation token.
 * @param totalRecordCount - Total count of machines in the given site.
 * @param siteName - Site name
 * @param sqlSiteName - SQL site name.
 */
export const SqlDatabasesControllerListBySqlSite =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlDatabasesControllerListBySqlSiteInput,
    outputSchema: SqlDatabasesControllerListBySqlSiteOutput,
  }));
// Input Schema
export const SqlDiscoverySiteDataSourceControllerCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    sqlSiteName: Schema.String.pipe(T.PathParam()),
    discoverySiteDataSourceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => SqlDiscoverySiteDataSourcePropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/masterSites/{siteName}/sqlSites/{sqlSiteName}/discoverySiteDataSources/{discoverySiteDataSourceName}",
      apiVersion: "2023-06-06",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type SqlDiscoverySiteDataSourceControllerCreateInput =
  typeof SqlDiscoverySiteDataSourceControllerCreateInput.Type;

// Output Schema
export const SqlDiscoverySiteDataSourceControllerCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => SqlDiscoverySiteDataSourcePropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type SqlDiscoverySiteDataSourceControllerCreateOutput =
  typeof SqlDiscoverySiteDataSourceControllerCreateOutput.Type;

// The operation
/**
 * Create a SqlDiscoverySiteDataSource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param sqlSiteName - SQL site name.
 * @param discoverySiteDataSourceName - SQL Discovery site data source name.
 */
export const SqlDiscoverySiteDataSourceControllerCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlDiscoverySiteDataSourceControllerCreateInput,
    outputSchema: SqlDiscoverySiteDataSourceControllerCreateOutput,
  }));
// Input Schema
export const SqlDiscoverySiteDataSourceControllerDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    sqlSiteName: Schema.String.pipe(T.PathParam()),
    discoverySiteDataSourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/masterSites/{siteName}/sqlSites/{sqlSiteName}/discoverySiteDataSources/{discoverySiteDataSourceName}",
      apiVersion: "2023-06-06",
    }),
  );
export type SqlDiscoverySiteDataSourceControllerDeleteInput =
  typeof SqlDiscoverySiteDataSourceControllerDeleteInput.Type;

// Output Schema
export const SqlDiscoverySiteDataSourceControllerDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type SqlDiscoverySiteDataSourceControllerDeleteOutput =
  typeof SqlDiscoverySiteDataSourceControllerDeleteOutput.Type;

// The operation
/**
 * Delete a SqlDiscoverySiteDataSource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param sqlSiteName - SQL site name.
 * @param discoverySiteDataSourceName - SQL Discovery site data source name.
 */
export const SqlDiscoverySiteDataSourceControllerDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlDiscoverySiteDataSourceControllerDeleteInput,
    outputSchema: SqlDiscoverySiteDataSourceControllerDeleteOutput,
  }));
// Input Schema
export const SqlDiscoverySiteDataSourceControllerGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    sqlSiteName: Schema.String.pipe(T.PathParam()),
    discoverySiteDataSourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/masterSites/{siteName}/sqlSites/{sqlSiteName}/discoverySiteDataSources/{discoverySiteDataSourceName}",
      apiVersion: "2023-06-06",
    }),
  );
export type SqlDiscoverySiteDataSourceControllerGetInput =
  typeof SqlDiscoverySiteDataSourceControllerGetInput.Type;

// Output Schema
export const SqlDiscoverySiteDataSourceControllerGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => SqlDiscoverySiteDataSourcePropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type SqlDiscoverySiteDataSourceControllerGetOutput =
  typeof SqlDiscoverySiteDataSourceControllerGetOutput.Type;

// The operation
/**
 * Get a SqlDiscoverySiteDataSource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param sqlSiteName - SQL site name.
 * @param discoverySiteDataSourceName - SQL Discovery site data source name.
 */
export const SqlDiscoverySiteDataSourceControllerGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlDiscoverySiteDataSourceControllerGetInput,
    outputSchema: SqlDiscoverySiteDataSourceControllerGetOutput,
  }));
// Input Schema
export const SqlDiscoverySiteDataSourceControllerListBySqlSiteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    sqlSiteName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/masterSites/{siteName}/sqlSites/{sqlSiteName}/discoverySiteDataSources",
      apiVersion: "2023-06-06",
    }),
  );
export type SqlDiscoverySiteDataSourceControllerListBySqlSiteInput =
  typeof SqlDiscoverySiteDataSourceControllerListBySqlSiteInput.Type;

// Output Schema
export const SqlDiscoverySiteDataSourceControllerListBySqlSiteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => SqlDiscoverySiteDataSourceSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type SqlDiscoverySiteDataSourceControllerListBySqlSiteOutput =
  typeof SqlDiscoverySiteDataSourceControllerListBySqlSiteOutput.Type;

// The operation
/**
 * List SqlDiscoverySiteDataSource resources by SqlSite
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param sqlSiteName - SQL site name.
 */
export const SqlDiscoverySiteDataSourceControllerListBySqlSite =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlDiscoverySiteDataSourceControllerListBySqlSiteInput,
    outputSchema: SqlDiscoverySiteDataSourceControllerListBySqlSiteOutput,
  }));
// Input Schema
export const SqlJobsControllerGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    sqlSiteName: Schema.String.pipe(T.PathParam()),
    jobName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/masterSites/{siteName}/sqlSites/{sqlSiteName}/jobs/{jobName}",
      apiVersion: "2023-06-06",
    }),
  );
export type SqlJobsControllerGetInput = typeof SqlJobsControllerGetInput.Type;

// Output Schema
export const SqlJobsControllerGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => JobPropertiesSchema)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type SqlJobsControllerGetOutput = typeof SqlJobsControllerGetOutput.Type;

// The operation
/**
 * Gets the sql Job.
 *
 * Get a SqlJob
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param sqlSiteName - SQL site name.
 * @param jobName - SQL Job name.
 */
export const SqlJobsControllerGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SqlJobsControllerGetInput,
    outputSchema: SqlJobsControllerGetOutput,
  }),
);
// Input Schema
export const SqlJobsControllerListBySqlSiteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    sqlSiteName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/masterSites/{siteName}/sqlSites/{sqlSiteName}/jobs",
      apiVersion: "2023-06-06",
    }),
  );
export type SqlJobsControllerListBySqlSiteInput =
  typeof SqlJobsControllerListBySqlSiteInput.Type;

// Output Schema
export const SqlJobsControllerListBySqlSiteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => SqlJobSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type SqlJobsControllerListBySqlSiteOutput =
  typeof SqlJobsControllerListBySqlSiteOutput.Type;

// The operation
/**
 * Gets the sql Jobs.
 *
 * List SqlJob resources by SqlSite
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param sqlSiteName - SQL site name.
 */
export const SqlJobsControllerListBySqlSite =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlJobsControllerListBySqlSiteInput,
    outputSchema: SqlJobsControllerListBySqlSiteOutput,
  }));
// Input Schema
export const SqlOperationsStatusControllerGetSqlOperationStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    sqlSiteName: Schema.String.pipe(T.PathParam()),
    operationStatusName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/masterSites/{siteName}/sqlSites/{sqlSiteName}/operationsStatus/{operationStatusName}",
      apiVersion: "2023-06-06",
    }),
  );
export type SqlOperationsStatusControllerGetSqlOperationStatusInput =
  typeof SqlOperationsStatusControllerGetSqlOperationStatusInput.Type;

// Output Schema
export const SqlOperationsStatusControllerGetSqlOperationStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    error: Schema.optional(Schema.suspend(() => OperationStatusErrorSchema)),
    properties: Schema.optional(
      Schema.suspend(() => OperationStatusPropertiesSchema),
    ),
  });
export type SqlOperationsStatusControllerGetSqlOperationStatusOutput =
  typeof SqlOperationsStatusControllerGetSqlOperationStatusOutput.Type;

// The operation
/**
 * Method to get operation status.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param sqlSiteName - SQL site name.
 * @param operationStatusName - Operation status  Arm Name.
 */
export const SqlOperationsStatusControllerGetSqlOperationStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlOperationsStatusControllerGetSqlOperationStatusInput,
    outputSchema: SqlOperationsStatusControllerGetSqlOperationStatusOutput,
  }));
// Input Schema
export const SqlRunAsAccountsControllerGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    sqlSiteName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/masterSites/{siteName}/sqlSites/{sqlSiteName}/runAsAccounts/{accountName}",
      apiVersion: "2023-06-06",
    }),
  );
export type SqlRunAsAccountsControllerGetInput =
  typeof SqlRunAsAccountsControllerGetInput.Type;

// Output Schema
export const SqlRunAsAccountsControllerGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => RunAsAccountPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type SqlRunAsAccountsControllerGetOutput =
  typeof SqlRunAsAccountsControllerGetOutput.Type;

// The operation
/**
 * Get a SqlRunAsAccount
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param sqlSiteName - SQL site name.
 * @param accountName - SQL RunAsAccounts name
 */
export const SqlRunAsAccountsControllerGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlRunAsAccountsControllerGetInput,
    outputSchema: SqlRunAsAccountsControllerGetOutput,
  }));
// Input Schema
export const SqlRunAsAccountsControllerListBySqlSiteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    sqlSiteName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/masterSites/{siteName}/sqlSites/{sqlSiteName}/runAsAccounts",
      apiVersion: "2023-06-06",
    }),
  );
export type SqlRunAsAccountsControllerListBySqlSiteInput =
  typeof SqlRunAsAccountsControllerListBySqlSiteInput.Type;

// Output Schema
export const SqlRunAsAccountsControllerListBySqlSiteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => SqlRunAsAccountSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type SqlRunAsAccountsControllerListBySqlSiteOutput =
  typeof SqlRunAsAccountsControllerListBySqlSiteOutput.Type;

// The operation
/**
 * List SqlRunAsAccount resources by SqlSite
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param sqlSiteName - SQL site name.
 */
export const SqlRunAsAccountsControllerListBySqlSite =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlRunAsAccountsControllerListBySqlSiteInput,
    outputSchema: SqlRunAsAccountsControllerListBySqlSiteOutput,
  }));
// Input Schema
export const SqlServersControllerGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    sqlSiteName: Schema.String.pipe(T.PathParam()),
    sqlServerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/masterSites/{siteName}/sqlSites/{sqlSiteName}/sqlServers/{sqlServerName}",
      apiVersion: "2023-06-06",
    }),
  );
export type SqlServersControllerGetInput =
  typeof SqlServersControllerGetInput.Type;

// Output Schema
export const SqlServersControllerGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => SqlServerPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type SqlServersControllerGetOutput =
  typeof SqlServersControllerGetOutput.Type;

// The operation
/**
 * Gets the sql server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param sqlSiteName - SQL site name.
 * @param sqlServerName - SQL server name.
 */
export const SqlServersControllerGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SqlServersControllerGetInput,
    outputSchema: SqlServersControllerGetOutput,
  }),
);
// Input Schema
export const SqlServersControllerListBySqlSiteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    sqlSiteName: Schema.String.pipe(T.PathParam()),
    filter: Schema.optional(Schema.String),
    top: Schema.optional(Schema.String),
    continuationToken: Schema.optional(Schema.String),
    totalRecordCount: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/masterSites/{siteName}/sqlSites/{sqlSiteName}/sqlServers",
      apiVersion: "2023-06-06",
    }),
  );
export type SqlServersControllerListBySqlSiteInput =
  typeof SqlServersControllerListBySqlSiteInput.Type;

// Output Schema
export const SqlServersControllerListBySqlSiteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => SqlServerV2Schema)),
    nextLink: Schema.optional(Schema.String),
  });
export type SqlServersControllerListBySqlSiteOutput =
  typeof SqlServersControllerListBySqlSiteOutput.Type;

// The operation
/**
 * Gets the sql servers.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param filter - filter query
 * @param top - page size  query
 * @param continuationToken - Optional parameter for continuation token.
 * @param totalRecordCount - Total count of machines in the given site.
 * @param siteName - Site name
 * @param sqlSiteName - SQL site name.
 */
export const SqlServersControllerListBySqlSite =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlServersControllerListBySqlSiteInput,
    outputSchema: SqlServersControllerListBySqlSiteOutput,
  }));
// Input Schema
export const SqlServersControllerUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    sqlSiteName: Schema.String.pipe(T.PathParam()),
    sqlServerName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => SqlServerV2UpdatePropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/masterSites/{siteName}/sqlSites/{sqlSiteName}/sqlServers/{sqlServerName}",
      apiVersion: "2023-06-06",
    }),
  );
export type SqlServersControllerUpdateInput =
  typeof SqlServersControllerUpdateInput.Type;

// Output Schema
export const SqlServersControllerUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => SqlServerPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type SqlServersControllerUpdateOutput =
  typeof SqlServersControllerUpdateOutput.Type;

// The operation
/**
 * Updates the sql server tags.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param sqlSiteName - SQL site name.
 * @param sqlServerName - SQL server name.
 */
export const SqlServersControllerUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SqlServersControllerUpdateInput,
    outputSchema: SqlServersControllerUpdateOutput,
  }),
);
// Input Schema
export const SqlSitesControllerCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    sqlSiteName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(Schema.suspend(() => SqlSitePropertiesSchema)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/masterSites/{siteName}/sqlSites/{sqlSiteName}",
      apiVersion: "2023-06-06",
    }),
  );
export type SqlSitesControllerCreateInput =
  typeof SqlSitesControllerCreateInput.Type;

// Output Schema
export const SqlSitesControllerCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => SqlSitePropertiesSchema)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type SqlSitesControllerCreateOutput =
  typeof SqlSitesControllerCreateOutput.Type;

// The operation
/**
 * Method to create a SQL site.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param sqlSiteName - SQL site name.
 */
export const SqlSitesControllerCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SqlSitesControllerCreateInput,
    outputSchema: SqlSitesControllerCreateOutput,
  }),
);
// Input Schema
export const SqlSitesControllerDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    sqlSiteName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/masterSites/{siteName}/sqlSites/{sqlSiteName}",
      apiVersion: "2023-06-06",
    }),
  );
export type SqlSitesControllerDeleteInput =
  typeof SqlSitesControllerDeleteInput.Type;

// Output Schema
export const SqlSitesControllerDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type SqlSitesControllerDeleteOutput =
  typeof SqlSitesControllerDeleteOutput.Type;

// The operation
/**
 * Deletes the SQL site.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param sqlSiteName - SQL site name.
 */
export const SqlSitesControllerDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SqlSitesControllerDeleteInput,
    outputSchema: SqlSitesControllerDeleteOutput,
  }),
);
// Input Schema
export const SqlSitesControllerErrorSummaryInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    sqlSiteName: Schema.String.pipe(T.PathParam()),
    applianceName: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/masterSites/{siteName}/sqlSites/{sqlSiteName}/errorSummary",
      apiVersion: "2023-06-06",
    }),
  );
export type SqlSitesControllerErrorSummaryInput =
  typeof SqlSitesControllerErrorSummaryInput.Type;

// Output Schema
export const SqlSitesControllerErrorSummaryOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    applianceName: Schema.String,
    discoveryScopeErrorSummaries: Schema.suspend(
      () => DiscoveryScopeErrorSummarySchema,
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type SqlSitesControllerErrorSummaryOutput =
  typeof SqlSitesControllerErrorSummaryOutput.Type;

// The operation
/**
 * Method to get error summary from SQL site.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param sqlSiteName - SQL site name.
 */
export const SqlSitesControllerErrorSummary =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlSitesControllerErrorSummaryInput,
    outputSchema: SqlSitesControllerErrorSummaryOutput,
  }));
// Input Schema
export const SqlSitesControllerExportSqlServerErrorsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    sqlSiteName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/masterSites/{siteName}/sqlSites/{sqlSiteName}/exportSqlServerErrors",
      apiVersion: "2023-06-06",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type SqlSitesControllerExportSqlServerErrorsInput =
  typeof SqlSitesControllerExportSqlServerErrorsInput.Type;

// Output Schema
export const SqlSitesControllerExportSqlServerErrorsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type SqlSitesControllerExportSqlServerErrorsOutput =
  typeof SqlSitesControllerExportSqlServerErrorsOutput.Type;

// The operation
/**
 * Method to generate report containing SQL servers.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param sqlSiteName - SQL site name.
 */
export const SqlSitesControllerExportSqlServerErrors =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlSitesControllerExportSqlServerErrorsInput,
    outputSchema: SqlSitesControllerExportSqlServerErrorsOutput,
  }));
// Input Schema
export const SqlSitesControllerExportSqlServersInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    sqlSiteName: Schema.String.pipe(T.PathParam()),
    applianceName: Schema.optional(Schema.String),
    filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/masterSites/{siteName}/sqlSites/{sqlSiteName}/exportSqlServers",
      apiVersion: "2023-06-06",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type SqlSitesControllerExportSqlServersInput =
  typeof SqlSitesControllerExportSqlServersInput.Type;

// Output Schema
export const SqlSitesControllerExportSqlServersOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type SqlSitesControllerExportSqlServersOutput =
  typeof SqlSitesControllerExportSqlServersOutput.Type;

// The operation
/**
 * Method to generate report containing SQL servers.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param sqlSiteName - SQL site name.
 */
export const SqlSitesControllerExportSqlServers =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlSitesControllerExportSqlServersInput,
    outputSchema: SqlSitesControllerExportSqlServersOutput,
  }));
// Input Schema
export const SqlSitesControllerGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    sqlSiteName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/masterSites/{siteName}/sqlSites/{sqlSiteName}",
      apiVersion: "2023-06-06",
    }),
  );
export type SqlSitesControllerGetInput = typeof SqlSitesControllerGetInput.Type;

// Output Schema
export const SqlSitesControllerGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => SqlSitePropertiesSchema)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type SqlSitesControllerGetOutput =
  typeof SqlSitesControllerGetOutput.Type;

// The operation
/**
 * Method to get a site.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param sqlSiteName - SQL site name.
 */
export const SqlSitesControllerGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SqlSitesControllerGetInput,
    outputSchema: SqlSitesControllerGetOutput,
  }),
);
// Input Schema
export const SqlSitesControllerListByMasterSiteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/masterSites/{siteName}/sqlSites",
      apiVersion: "2023-06-06",
    }),
  );
export type SqlSitesControllerListByMasterSiteInput =
  typeof SqlSitesControllerListByMasterSiteInput.Type;

// Output Schema
export const SqlSitesControllerListByMasterSiteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => SqlSiteSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type SqlSitesControllerListByMasterSiteOutput =
  typeof SqlSitesControllerListByMasterSiteOutput.Type;

// The operation
/**
 * Method to get all sites.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const SqlSitesControllerListByMasterSite =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SqlSitesControllerListByMasterSiteInput,
    outputSchema: SqlSitesControllerListByMasterSiteOutput,
  }));
// Input Schema
export const SqlSitesControllerRefreshInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    sqlSiteName: Schema.String.pipe(T.PathParam()),
    applianceName: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/masterSites/{siteName}/sqlSites/{sqlSiteName}/refresh",
      apiVersion: "2023-06-06",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type SqlSitesControllerRefreshInput =
  typeof SqlSitesControllerRefreshInput.Type;

// Output Schema
export const SqlSitesControllerRefreshOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type SqlSitesControllerRefreshOutput =
  typeof SqlSitesControllerRefreshOutput.Type;

// The operation
/**
 * Method to refresh a site.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param sqlSiteName - SQL site name.
 */
export const SqlSitesControllerRefresh = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SqlSitesControllerRefreshInput,
    outputSchema: SqlSitesControllerRefreshOutput,
  }),
);
// Input Schema
export const SqlSitesControllerSummaryInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    sqlSiteName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/masterSites/{siteName}/sqlSites/{sqlSiteName}/summary",
      apiVersion: "2023-06-06",
    }),
  );
export type SqlSitesControllerSummaryInput =
  typeof SqlSitesControllerSummaryInput.Type;

// Output Schema
export const SqlSitesControllerSummaryOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serverCount: Schema.optional(Schema.Number),
    databaseCount: Schema.optional(Schema.Number),
    runAsAccountCount: Schema.optional(Schema.Number),
  });
export type SqlSitesControllerSummaryOutput =
  typeof SqlSitesControllerSummaryOutput.Type;

// The operation
/**
 * Method to get site usage/summary.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param sqlSiteName - SQL site name.
 */
export const SqlSitesControllerSummary = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SqlSitesControllerSummaryInput,
    outputSchema: SqlSitesControllerSummaryOutput,
  }),
);
// Input Schema
export const SqlSitesControllerUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    sqlSiteName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => SqlSiteUpdatePropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/masterSites/{siteName}/sqlSites/{sqlSiteName}",
      apiVersion: "2023-06-06",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type SqlSitesControllerUpdateInput =
  typeof SqlSitesControllerUpdateInput.Type;

// Output Schema
export const SqlSitesControllerUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => SqlSitePropertiesSchema)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type SqlSitesControllerUpdateOutput =
  typeof SqlSitesControllerUpdateOutput.Type;

// The operation
/**
 * Method to update an existing site.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param sqlSiteName - SQL site name.
 */
export const SqlSitesControllerUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SqlSitesControllerUpdateInput,
    outputSchema: SqlSitesControllerUpdateOutput,
  }),
);
// Input Schema
export const TomcatWebApplicationsControllerGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    webAppSiteName: Schema.String.pipe(T.PathParam()),
    webApplicationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/masterSites/{siteName}/webAppSites/{webAppSiteName}/tomcatWebApplications/{webApplicationName}",
      apiVersion: "2023-06-06",
    }),
  );
export type TomcatWebApplicationsControllerGetInput =
  typeof TomcatWebApplicationsControllerGetInput.Type;

// Output Schema
export const TomcatWebApplicationsControllerGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => TomcatWebApplicationPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type TomcatWebApplicationsControllerGetOutput =
  typeof TomcatWebApplicationsControllerGetOutput.Type;

// The operation
/**
 * Method to get an Tomcat web application.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param webAppSiteName - Web app site name.
 * @param webApplicationName - Web application name.
 */
export const TomcatWebApplicationsControllerGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: TomcatWebApplicationsControllerGetInput,
    outputSchema: TomcatWebApplicationsControllerGetOutput,
  }));
// Input Schema
export const TomcatWebApplicationsControllerListByWebAppSiteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    webAppSiteName: Schema.String.pipe(T.PathParam()),
    filter: Schema.optional(Schema.String),
    top: Schema.optional(Schema.String),
    continuationToken: Schema.optional(Schema.String),
    totalRecordCount: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/masterSites/{siteName}/webAppSites/{webAppSiteName}/tomcatWebApplications",
      apiVersion: "2023-06-06",
    }),
  );
export type TomcatWebApplicationsControllerListByWebAppSiteInput =
  typeof TomcatWebApplicationsControllerListByWebAppSiteInput.Type;

// Output Schema
export const TomcatWebApplicationsControllerListByWebAppSiteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => TomcatWebApplicationsSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type TomcatWebApplicationsControllerListByWebAppSiteOutput =
  typeof TomcatWebApplicationsControllerListByWebAppSiteOutput.Type;

// The operation
/**
 * Method to get all Tomcat web application.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param filter - filter query
 * @param top - page size  query
 * @param continuationToken - Optional parameter for continuation token.
 * @param totalRecordCount - Total count of machines in the given site.
 * @param siteName - Site name
 * @param webAppSiteName - Web app site name.
 */
export const TomcatWebApplicationsControllerListByWebAppSite =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: TomcatWebApplicationsControllerListByWebAppSiteInput,
    outputSchema: TomcatWebApplicationsControllerListByWebAppSiteOutput,
  }));
// Input Schema
export const TomcatWebApplicationsControllerUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    webAppSiteName: Schema.String.pipe(T.PathParam()),
    webApplicationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/masterSites/{siteName}/webAppSites/{webAppSiteName}/tomcatWebApplications/{webApplicationName}",
      apiVersion: "2023-06-06",
    }),
  );
export type TomcatWebApplicationsControllerUpdateInput =
  typeof TomcatWebApplicationsControllerUpdateInput.Type;

// Output Schema
export const TomcatWebApplicationsControllerUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => TomcatWebApplicationPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type TomcatWebApplicationsControllerUpdateOutput =
  typeof TomcatWebApplicationsControllerUpdateOutput.Type;

// The operation
/**
 * Updates the Tomcat web application tags.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param webAppSiteName - Web app site name.
 * @param webApplicationName - Web application name.
 */
export const TomcatWebApplicationsControllerUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: TomcatWebApplicationsControllerUpdateInput,
    outputSchema: TomcatWebApplicationsControllerUpdateOutput,
  }));
// Input Schema
export const TomcatWebServersControllerGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    webAppSiteName: Schema.String.pipe(T.PathParam()),
    webServerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/masterSites/{siteName}/webAppSites/{webAppSiteName}/tomcatWebServers/{webServerName}",
      apiVersion: "2023-06-06",
    }),
  );
export type TomcatWebServersControllerGetInput =
  typeof TomcatWebServersControllerGetInput.Type;

// Output Schema
export const TomcatWebServersControllerGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => TomcatWebServerPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type TomcatWebServersControllerGetOutput =
  typeof TomcatWebServersControllerGetOutput.Type;

// The operation
/**
 * Method to get an Tomcat web server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param webAppSiteName - Web app site name.
 * @param webServerName - Web server name.
 */
export const TomcatWebServersControllerGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: TomcatWebServersControllerGetInput,
    outputSchema: TomcatWebServersControllerGetOutput,
  }));
// Input Schema
export const TomcatWebServersControllerListByWebAppSiteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    webAppSiteName: Schema.String.pipe(T.PathParam()),
    filter: Schema.optional(Schema.String),
    top: Schema.optional(Schema.String),
    continuationToken: Schema.optional(Schema.String),
    totalRecordCount: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/masterSites/{siteName}/webAppSites/{webAppSiteName}/tomcatWebServers",
      apiVersion: "2023-06-06",
    }),
  );
export type TomcatWebServersControllerListByWebAppSiteInput =
  typeof TomcatWebServersControllerListByWebAppSiteInput.Type;

// Output Schema
export const TomcatWebServersControllerListByWebAppSiteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => TomcatWebServersSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type TomcatWebServersControllerListByWebAppSiteOutput =
  typeof TomcatWebServersControllerListByWebAppSiteOutput.Type;

// The operation
/**
 * Method to get all Tomcat web servers.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param filter - filter query
 * @param top - page size  query
 * @param continuationToken - Optional parameter for continuation token.
 * @param totalRecordCount - Total count of machines in the given site.
 * @param siteName - Site name
 * @param webAppSiteName - Web app site name.
 */
export const TomcatWebServersControllerListByWebAppSite =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: TomcatWebServersControllerListByWebAppSiteInput,
    outputSchema: TomcatWebServersControllerListByWebAppSiteOutput,
  }));
// Input Schema
export const VcenterControllerCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    vcenterName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(Schema.suspend(() => VcenterPropertiesSchema)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/vmwareSites/{siteName}/vcenters/{vcenterName}",
      apiVersion: "2023-06-06",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type VcenterControllerCreateInput =
  typeof VcenterControllerCreateInput.Type;

// Output Schema
export const VcenterControllerCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => VcenterPropertiesSchema)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type VcenterControllerCreateOutput =
  typeof VcenterControllerCreateOutput.Type;

// The operation
/**
 * Create a Vcenter
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param vcenterName -  VCenters name
 */
export const VcenterControllerCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VcenterControllerCreateInput,
    outputSchema: VcenterControllerCreateOutput,
  }),
);
// Input Schema
export const VcenterControllerDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    vcenterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/vmwareSites/{siteName}/vcenters/{vcenterName}",
      apiVersion: "2023-06-06",
    }),
  );
export type VcenterControllerDeleteInput =
  typeof VcenterControllerDeleteInput.Type;

// Output Schema
export const VcenterControllerDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VcenterControllerDeleteOutput =
  typeof VcenterControllerDeleteOutput.Type;

// The operation
/**
 * Delete a Vcenter
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param vcenterName -  VCenters name
 */
export const VcenterControllerDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VcenterControllerDeleteInput,
    outputSchema: VcenterControllerDeleteOutput,
  }),
);
// Input Schema
export const VcenterControllerGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    vcenterName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/vmwareSites/{siteName}/vcenters/{vcenterName}",
      apiVersion: "2023-06-06",
    }),
  );
export type VcenterControllerGetInput = typeof VcenterControllerGetInput.Type;

// Output Schema
export const VcenterControllerGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => VcenterPropertiesSchema)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type VcenterControllerGetOutput = typeof VcenterControllerGetOutput.Type;

// The operation
/**
 * Get a Vcenter
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param vcenterName -  VCenters name
 */
export const VcenterControllerGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VcenterControllerGetInput,
    outputSchema: VcenterControllerGetOutput,
  }),
);
// Input Schema
export const VcenterControllerListByVmwareSiteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/vmwareSites/{siteName}/vcenters",
      apiVersion: "2023-06-06",
    }),
  );
export type VcenterControllerListByVmwareSiteInput =
  typeof VcenterControllerListByVmwareSiteInput.Type;

// Output Schema
export const VcenterControllerListByVmwareSiteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => VcenterSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type VcenterControllerListByVmwareSiteOutput =
  typeof VcenterControllerListByVmwareSiteOutput.Type;

// The operation
/**
 * List Vcenter resources by VmwareSite
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param filter - filter query
 * @param siteName - Site name
 */
export const VcenterControllerListByVmwareSite =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VcenterControllerListByVmwareSiteInput,
    outputSchema: VcenterControllerListByVmwareSiteOutput,
  }));
// Input Schema
export const VirtualDesktopUserControllerGetVirtualDesktopUserInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/migrateProjects/{migrateProjectName}/virtualDesktopUsers/{virtualDesktopUserName}",
      apiVersion: "2023-01-01",
    }),
  );
export type VirtualDesktopUserControllerGetVirtualDesktopUserInput =
  typeof VirtualDesktopUserControllerGetVirtualDesktopUserInput.Type;

// Output Schema
export const VirtualDesktopUserControllerGetVirtualDesktopUserOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.suspend(() => VirtualDesktopUserPropertiesSchema),
    ),
  });
export type VirtualDesktopUserControllerGetVirtualDesktopUserOutput =
  typeof VirtualDesktopUserControllerGetVirtualDesktopUserOutput.Type;

// The operation
/**
 * Gets a virtual desktop user in the migrate project.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const VirtualDesktopUserControllerGetVirtualDesktopUser =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualDesktopUserControllerGetVirtualDesktopUserInput,
    outputSchema: VirtualDesktopUserControllerGetVirtualDesktopUserOutput,
  }));
// Input Schema
export const VirtualDesktopUserControllerListVirtualDesktopUsersInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/migrateProjects/{migrateProjectName}/virtualDesktopUsers",
      apiVersion: "2023-01-01",
    }),
  );
export type VirtualDesktopUserControllerListVirtualDesktopUsersInput =
  typeof VirtualDesktopUserControllerListVirtualDesktopUsersInput.Type;

// Output Schema
export const VirtualDesktopUserControllerListVirtualDesktopUsersOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => VirtualDesktopUserSchema)),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type VirtualDesktopUserControllerListVirtualDesktopUsersOutput =
  typeof VirtualDesktopUserControllerListVirtualDesktopUsersOutput.Type;

// The operation
/**
 * Gets a list of virtual desktop users in the migrate project.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const VirtualDesktopUserControllerListVirtualDesktopUsers =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VirtualDesktopUserControllerListVirtualDesktopUsersInput,
    outputSchema: VirtualDesktopUserControllerListVirtualDesktopUsersOutput,
  }));
// Input Schema
export const VmwareCollectorsOperationsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    vmWareCollectorName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => CollectorPropertiesBaseWithAgentSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/vmwarecollectors/{vmWareCollectorName}",
      apiVersion: "2024-01-15",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type VmwareCollectorsOperationsCreateInput =
  typeof VmwareCollectorsOperationsCreateInput.Type;

// Output Schema
export const VmwareCollectorsOperationsCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => CollectorPropertiesBaseWithAgentSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type VmwareCollectorsOperationsCreateOutput =
  typeof VmwareCollectorsOperationsCreateOutput.Type;

// The operation
/**
 * Create a VmwareCollector
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 * @param vmWareCollectorName - VMware collector ARM name
 */
export const VmwareCollectorsOperationsCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VmwareCollectorsOperationsCreateInput,
    outputSchema: VmwareCollectorsOperationsCreateOutput,
  }));
// Input Schema
export const VmwareCollectorsOperationsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    vmWareCollectorName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/vmwarecollectors/{vmWareCollectorName}",
      apiVersion: "2024-01-15",
    }),
  );
export type VmwareCollectorsOperationsDeleteInput =
  typeof VmwareCollectorsOperationsDeleteInput.Type;

// Output Schema
export const VmwareCollectorsOperationsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VmwareCollectorsOperationsDeleteOutput =
  typeof VmwareCollectorsOperationsDeleteOutput.Type;

// The operation
/**
 * Delete a VmwareCollector
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 * @param vmWareCollectorName - VMware collector ARM name
 */
export const VmwareCollectorsOperationsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VmwareCollectorsOperationsDeleteInput,
    outputSchema: VmwareCollectorsOperationsDeleteOutput,
  }));
// Input Schema
export const VmwareCollectorsOperationsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    vmWareCollectorName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/vmwarecollectors/{vmWareCollectorName}",
      apiVersion: "2024-01-15",
    }),
  );
export type VmwareCollectorsOperationsGetInput =
  typeof VmwareCollectorsOperationsGetInput.Type;

// Output Schema
export const VmwareCollectorsOperationsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => CollectorPropertiesBaseWithAgentSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type VmwareCollectorsOperationsGetOutput =
  typeof VmwareCollectorsOperationsGetOutput.Type;

// The operation
/**
 * Get a VmwareCollector
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 * @param vmWareCollectorName - VMware collector ARM name
 */
export const VmwareCollectorsOperationsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VmwareCollectorsOperationsGetInput,
    outputSchema: VmwareCollectorsOperationsGetOutput,
  }));
// Input Schema
export const VmwareCollectorsOperationsListByAssessmentProjectInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/vmwarecollectors",
      apiVersion: "2024-01-15",
    }),
  );
export type VmwareCollectorsOperationsListByAssessmentProjectInput =
  typeof VmwareCollectorsOperationsListByAssessmentProjectInput.Type;

// Output Schema
export const VmwareCollectorsOperationsListByAssessmentProjectOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => VmwareCollectorSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type VmwareCollectorsOperationsListByAssessmentProjectOutput =
  typeof VmwareCollectorsOperationsListByAssessmentProjectOutput.Type;

// The operation
/**
 * List VmwareCollector resources by AssessmentProject
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 */
export const VmwareCollectorsOperationsListByAssessmentProject =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VmwareCollectorsOperationsListByAssessmentProjectInput,
    outputSchema: VmwareCollectorsOperationsListByAssessmentProjectOutput,
  }));
// Input Schema
export const VmwareHostControllerGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    hostName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/vmwareSites/{siteName}/hosts/{hostName}",
      apiVersion: "2023-06-06",
    }),
  );
export type VmwareHostControllerGetInput =
  typeof VmwareHostControllerGetInput.Type;

// Output Schema
export const VmwareHostControllerGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => VmwareHostPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type VmwareHostControllerGetOutput =
  typeof VmwareHostControllerGetOutput.Type;

// The operation
/**
 * Get a VmwareHost
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param hostName -  Hosts name
 */
export const VmwareHostControllerGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VmwareHostControllerGetInput,
    outputSchema: VmwareHostControllerGetOutput,
  }),
);
// Input Schema
export const VmwareHostControllerListByVmwareSiteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/vmwareSites/{siteName}/hosts",
      apiVersion: "2023-06-06",
    }),
  );
export type VmwareHostControllerListByVmwareSiteInput =
  typeof VmwareHostControllerListByVmwareSiteInput.Type;

// Output Schema
export const VmwareHostControllerListByVmwareSiteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => VmwareHostSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type VmwareHostControllerListByVmwareSiteOutput =
  typeof VmwareHostControllerListByVmwareSiteOutput.Type;

// The operation
/**
 * List VmwareHost resources by VmwareSite
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const VmwareHostControllerListByVmwareSite =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VmwareHostControllerListByVmwareSiteInput,
    outputSchema: VmwareHostControllerListByVmwareSiteOutput,
  }));
// Input Schema
export const VmwareOperationsStatusGetVmwareOperationStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    operationStatusName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/vmwareSites/{siteName}/operationsStatus/{operationStatusName}",
      apiVersion: "2023-06-06",
    }),
  );
export type VmwareOperationsStatusGetVmwareOperationStatusInput =
  typeof VmwareOperationsStatusGetVmwareOperationStatusInput.Type;

// Output Schema
export const VmwareOperationsStatusGetVmwareOperationStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    error: Schema.optional(Schema.suspend(() => OperationStatusErrorSchema)),
    properties: Schema.optional(
      Schema.suspend(() => OperationStatusPropertiesSchema),
    ),
  });
export type VmwareOperationsStatusGetVmwareOperationStatusOutput =
  typeof VmwareOperationsStatusGetVmwareOperationStatusOutput.Type;

// The operation
/**
 * A operation status resource belonging to a site resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param operationStatusName - Operation status  Arm Name.
 */
export const VmwareOperationsStatusGetVmwareOperationStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VmwareOperationsStatusGetVmwareOperationStatusInput,
    outputSchema: VmwareOperationsStatusGetVmwareOperationStatusOutput,
  }));
// Input Schema
export const VmwarePropertiesControllerUpdateDependencyMapStatusInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    machines: Schema.optional(
      Schema.Array(Schema.suspend(() => DependencyMapMachineInputSchema)),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/vmwareSites/{siteName}/updateDependencyMapStatus",
      apiVersion: "2023-06-06",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type VmwarePropertiesControllerUpdateDependencyMapStatusInput =
  typeof VmwarePropertiesControllerUpdateDependencyMapStatusInput.Type;

// Output Schema
export const VmwarePropertiesControllerUpdateDependencyMapStatusOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type VmwarePropertiesControllerUpdateDependencyMapStatusOutput =
  typeof VmwarePropertiesControllerUpdateDependencyMapStatusOutput.Type;

// The operation
/**
 * Method to enable disable dependency map status for machines
 * in a
 * site.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const VmwarePropertiesControllerUpdateDependencyMapStatus =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VmwarePropertiesControllerUpdateDependencyMapStatusInput,
    outputSchema: VmwarePropertiesControllerUpdateDependencyMapStatusOutput,
  }));
// Input Schema
export const VmwarePropertiesControllerUpdatePropertiesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    value: Schema.Array(Schema.suspend(() => MachineMetadataSchema)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/vmwareSites/{siteName}/updateProperties",
      apiVersion: "2023-06-06",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type VmwarePropertiesControllerUpdatePropertiesInput =
  typeof VmwarePropertiesControllerUpdatePropertiesInput.Type;

// Output Schema
export const VmwarePropertiesControllerUpdatePropertiesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type VmwarePropertiesControllerUpdatePropertiesOutput =
  typeof VmwarePropertiesControllerUpdatePropertiesOutput.Type;

// The operation
/**
 * Method to update properties for machines   in a site.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const VmwarePropertiesControllerUpdateProperties =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VmwarePropertiesControllerUpdatePropertiesInput,
    outputSchema: VmwarePropertiesControllerUpdatePropertiesOutput,
  }));
// Input Schema
export const VmwarePropertiesControllerUpdateRunAsAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    machines: Schema.optional(
      Schema.Array(Schema.suspend(() => RunAsAccountMachineInputSchema)),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/vmwareSites/{siteName}/updateRunAsAccount",
      apiVersion: "2023-06-06",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type VmwarePropertiesControllerUpdateRunAsAccountInput =
  typeof VmwarePropertiesControllerUpdateRunAsAccountInput.Type;

// Output Schema
export const VmwarePropertiesControllerUpdateRunAsAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type VmwarePropertiesControllerUpdateRunAsAccountOutput =
  typeof VmwarePropertiesControllerUpdateRunAsAccountOutput.Type;

// The operation
/**
 * Method to associate Run as account to machine
 * in a site.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const VmwarePropertiesControllerUpdateRunAsAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VmwarePropertiesControllerUpdateRunAsAccountInput,
    outputSchema: VmwarePropertiesControllerUpdateRunAsAccountOutput,
  }));
// Input Schema
export const VmwarePropertiesControllerUpdateTagsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    machines: Schema.optional(
      Schema.Array(Schema.suspend(() => TagsMachineInputSchema)),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/vmwareSites/{siteName}/updateTags",
      apiVersion: "2023-06-06",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type VmwarePropertiesControllerUpdateTagsInput =
  typeof VmwarePropertiesControllerUpdateTagsInput.Type;

// Output Schema
export const VmwarePropertiesControllerUpdateTagsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type VmwarePropertiesControllerUpdateTagsOutput =
  typeof VmwarePropertiesControllerUpdateTagsOutput.Type;

// The operation
/**
 * Method to associate Run as account to machine
 * in a site.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const VmwarePropertiesControllerUpdateTags =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VmwarePropertiesControllerUpdateTagsInput,
    outputSchema: VmwarePropertiesControllerUpdateTagsOutput,
  }));
// Input Schema
export const VmwareSoftwareInventoriesControllerGetMachineSoftwareInventoryInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    machineName: Schema.String.pipe(T.PathParam()),
    default: Schema.Literals(["default"]).pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/vmwareSites/{siteName}/machines/{machineName}/softwareInventories/{default}",
      apiVersion: "2023-06-06",
    }),
  );
export type VmwareSoftwareInventoriesControllerGetMachineSoftwareInventoryInput =
  typeof VmwareSoftwareInventoriesControllerGetMachineSoftwareInventoryInput.Type;

// Output Schema
export const VmwareSoftwareInventoriesControllerGetMachineSoftwareInventoryOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => MachineSoftwareInventoryPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type VmwareSoftwareInventoriesControllerGetMachineSoftwareInventoryOutput =
  typeof VmwareSoftwareInventoriesControllerGetMachineSoftwareInventoryOutput.Type;

// The operation
/**
 * Method to get a machines software inventory like applications and roles.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param machineName - Machine name
 * @param default - Default value.
 */
export const VmwareSoftwareInventoriesControllerGetMachineSoftwareInventory =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      VmwareSoftwareInventoriesControllerGetMachineSoftwareInventoryInput,
    outputSchema:
      VmwareSoftwareInventoriesControllerGetMachineSoftwareInventoryOutput,
  }));
// Input Schema
export const VmwareSoftwareInventoriesControllerListByMachineResourceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    machineName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/vmwareSites/{siteName}/machines/{machineName}/softwareinventories",
      apiVersion: "2023-06-06",
    }),
  );
export type VmwareSoftwareInventoriesControllerListByMachineResourceInput =
  typeof VmwareSoftwareInventoriesControllerListByMachineResourceInput.Type;

// Output Schema
export const VmwareSoftwareInventoriesControllerListByMachineResourceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.suspend(() => VmwareMachineSoftwareInventorySchema),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type VmwareSoftwareInventoriesControllerListByMachineResourceOutput =
  typeof VmwareSoftwareInventoriesControllerListByMachineResourceOutput.Type;

// The operation
/**
 * List VmwareMachineSoftwareInventory resources by MachineResource
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param machineName - Machine name
 */
export const VmwareSoftwareInventoriesControllerListByMachineResource =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VmwareSoftwareInventoriesControllerListByMachineResourceInput,
    outputSchema:
      VmwareSoftwareInventoriesControllerListByMachineResourceOutput,
  }));
// Input Schema
export const WebAppAssessmentOptionsOperationsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    assessmentOptionsName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/webAppAssessmentOptions/{assessmentOptionsName}",
      apiVersion: "2024-01-15",
    }),
  );
export type WebAppAssessmentOptionsOperationsGetInput =
  typeof WebAppAssessmentOptionsOperationsGetInput.Type;

// Output Schema
export const WebAppAssessmentOptionsOperationsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => WebAppAssessmentOptionsPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type WebAppAssessmentOptionsOperationsGetOutput =
  typeof WebAppAssessmentOptionsOperationsGetOutput.Type;

// The operation
/**
 * Get a WebAppAssessmentOptions
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 * @param assessmentOptionsName - Web app assessment options ARM name. Accepted values is 'default'
 */
export const WebAppAssessmentOptionsOperationsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WebAppAssessmentOptionsOperationsGetInput,
    outputSchema: WebAppAssessmentOptionsOperationsGetOutput,
  }));
// Input Schema
export const WebAppAssessmentOptionsOperationsListByAssessmentProjectInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/webAppAssessmentOptions",
      apiVersion: "2024-01-15",
    }),
  );
export type WebAppAssessmentOptionsOperationsListByAssessmentProjectInput =
  typeof WebAppAssessmentOptionsOperationsListByAssessmentProjectInput.Type;

// Output Schema
export const WebAppAssessmentOptionsOperationsListByAssessmentProjectOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => WebAppAssessmentOptionsSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type WebAppAssessmentOptionsOperationsListByAssessmentProjectOutput =
  typeof WebAppAssessmentOptionsOperationsListByAssessmentProjectOutput.Type;

// The operation
/**
 * List WebAppAssessmentOptions resources by AssessmentProject
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 */
export const WebAppAssessmentOptionsOperationsListByAssessmentProject =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WebAppAssessmentOptionsOperationsListByAssessmentProjectInput,
    outputSchema:
      WebAppAssessmentOptionsOperationsListByAssessmentProjectOutput,
  }));
// Input Schema
export const WebAppAssessmentV2OperationsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
    assessmentName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => WebAppAssessmentV2PropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}/webAppAssessments/{assessmentName}",
      apiVersion: "2024-01-15",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type WebAppAssessmentV2OperationsCreateInput =
  typeof WebAppAssessmentV2OperationsCreateInput.Type;

// Output Schema
export const WebAppAssessmentV2OperationsCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => WebAppAssessmentV2PropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type WebAppAssessmentV2OperationsCreateOutput =
  typeof WebAppAssessmentV2OperationsCreateOutput.Type;

// The operation
/**
 * Create a WebAppAssessmentV2
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 * @param groupName - Group ARM name
 * @param assessmentName - Web app Assessment arm name.
 */
export const WebAppAssessmentV2OperationsCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WebAppAssessmentV2OperationsCreateInput,
    outputSchema: WebAppAssessmentV2OperationsCreateOutput,
  }));
// Input Schema
export const WebAppAssessmentV2OperationsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
    assessmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}/webAppAssessments/{assessmentName}",
      apiVersion: "2024-01-15",
    }),
  );
export type WebAppAssessmentV2OperationsDeleteInput =
  typeof WebAppAssessmentV2OperationsDeleteInput.Type;

// Output Schema
export const WebAppAssessmentV2OperationsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type WebAppAssessmentV2OperationsDeleteOutput =
  typeof WebAppAssessmentV2OperationsDeleteOutput.Type;

// The operation
/**
 * Delete a WebAppAssessmentV2
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 * @param groupName - Group ARM name
 * @param assessmentName - Web app Assessment arm name.
 */
export const WebAppAssessmentV2OperationsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WebAppAssessmentV2OperationsDeleteInput,
    outputSchema: WebAppAssessmentV2OperationsDeleteOutput,
  }));
// Input Schema
export const WebAppAssessmentV2OperationsDownloadUrlInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
    assessmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}/webAppAssessments/{assessmentName}/downloadUrl",
      apiVersion: "2024-01-15",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type WebAppAssessmentV2OperationsDownloadUrlInput =
  typeof WebAppAssessmentV2OperationsDownloadUrlInput.Type;

// Output Schema
export const WebAppAssessmentV2OperationsDownloadUrlOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    assessmentReportUrl: Schema.String,
    expirationTime: Schema.String,
  });
export type WebAppAssessmentV2OperationsDownloadUrlOutput =
  typeof WebAppAssessmentV2OperationsDownloadUrlOutput.Type;

// The operation
/**
 * Get download URL for the assessment report.
 *
 * Get the URL for downloading the assessment in a report format.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 * @param groupName - Group ARM name
 * @param assessmentName - Web app Assessment arm name.
 */
export const WebAppAssessmentV2OperationsDownloadUrl =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WebAppAssessmentV2OperationsDownloadUrlInput,
    outputSchema: WebAppAssessmentV2OperationsDownloadUrlOutput,
  }));
// Input Schema
export const WebAppAssessmentV2OperationsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
    assessmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}/webAppAssessments/{assessmentName}",
      apiVersion: "2024-01-15",
    }),
  );
export type WebAppAssessmentV2OperationsGetInput =
  typeof WebAppAssessmentV2OperationsGetInput.Type;

// Output Schema
export const WebAppAssessmentV2OperationsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => WebAppAssessmentV2PropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type WebAppAssessmentV2OperationsGetOutput =
  typeof WebAppAssessmentV2OperationsGetOutput.Type;

// The operation
/**
 * Get a WebAppAssessmentV2
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 * @param groupName - Group ARM name
 * @param assessmentName - Web app Assessment arm name.
 */
export const WebAppAssessmentV2OperationsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WebAppAssessmentV2OperationsGetInput,
    outputSchema: WebAppAssessmentV2OperationsGetOutput,
  }));
// Input Schema
export const WebAppAssessmentV2OperationsListByGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}/webAppAssessments",
      apiVersion: "2024-01-15",
    }),
  );
export type WebAppAssessmentV2OperationsListByGroupInput =
  typeof WebAppAssessmentV2OperationsListByGroupInput.Type;

// Output Schema
export const WebAppAssessmentV2OperationsListByGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => WebAppAssessmentV2Schema)),
    nextLink: Schema.optional(Schema.String),
  });
export type WebAppAssessmentV2OperationsListByGroupOutput =
  typeof WebAppAssessmentV2OperationsListByGroupOutput.Type;

// The operation
/**
 * List WebAppAssessmentV2 resources by Group
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 * @param groupName - Group ARM name
 */
export const WebAppAssessmentV2OperationsListByGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WebAppAssessmentV2OperationsListByGroupInput,
    outputSchema: WebAppAssessmentV2OperationsListByGroupOutput,
  }));
// Input Schema
export const WebAppAssessmentV2SummaryOperationsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
    assessmentName: Schema.String.pipe(T.PathParam()),
    summaryName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}/webAppAssessments/{assessmentName}/summaries/{summaryName}",
      apiVersion: "2024-01-15",
    }),
  );
export type WebAppAssessmentV2SummaryOperationsGetInput =
  typeof WebAppAssessmentV2SummaryOperationsGetInput.Type;

// Output Schema
export const WebAppAssessmentV2SummaryOperationsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => WebAppAssessmentV2SummaryPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type WebAppAssessmentV2SummaryOperationsGetOutput =
  typeof WebAppAssessmentV2SummaryOperationsGetOutput.Type;

// The operation
/**
 * Get a WebAppAssessmentV2Summary
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 * @param groupName - Group ARM name
 * @param assessmentName - Web app Assessment arm name.
 * @param summaryName - Gets the Name of the Web app Summary.
 */
export const WebAppAssessmentV2SummaryOperationsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WebAppAssessmentV2SummaryOperationsGetInput,
    outputSchema: WebAppAssessmentV2SummaryOperationsGetOutput,
  }));
// Input Schema
export const WebAppAssessmentV2SummaryOperationsListByWebAppAssessmentV2Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
    assessmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}/webAppAssessments/{assessmentName}/summaries",
      apiVersion: "2024-01-15",
    }),
  );
export type WebAppAssessmentV2SummaryOperationsListByWebAppAssessmentV2Input =
  typeof WebAppAssessmentV2SummaryOperationsListByWebAppAssessmentV2Input.Type;

// Output Schema
export const WebAppAssessmentV2SummaryOperationsListByWebAppAssessmentV2Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => WebAppAssessmentV2SummarySchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type WebAppAssessmentV2SummaryOperationsListByWebAppAssessmentV2Output =
  typeof WebAppAssessmentV2SummaryOperationsListByWebAppAssessmentV2Output.Type;

// The operation
/**
 * List WebAppAssessmentV2Summary resources by WebAppAssessmentV2
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 * @param groupName - Group ARM name
 * @param assessmentName - Web app Assessment arm name.
 */
export const WebAppAssessmentV2SummaryOperationsListByWebAppAssessmentV2 =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      WebAppAssessmentV2SummaryOperationsListByWebAppAssessmentV2Input,
    outputSchema:
      WebAppAssessmentV2SummaryOperationsListByWebAppAssessmentV2Output,
  }));
// Input Schema
export const WebAppCollectorOperationsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    collectorName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => WebAppCollectorPropertiesBaseWithAgentSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/webAppCollectors/{collectorName}",
      apiVersion: "2024-01-15",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type WebAppCollectorOperationsCreateInput =
  typeof WebAppCollectorOperationsCreateInput.Type;

// Output Schema
export const WebAppCollectorOperationsCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => WebAppCollectorPropertiesBaseWithAgentSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type WebAppCollectorOperationsCreateOutput =
  typeof WebAppCollectorOperationsCreateOutput.Type;

// The operation
/**
 * Create a WebAppCollector
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 * @param collectorName - Web app collector ARM name.
 */
export const WebAppCollectorOperationsCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WebAppCollectorOperationsCreateInput,
    outputSchema: WebAppCollectorOperationsCreateOutput,
  }));
// Input Schema
export const WebAppCollectorOperationsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    collectorName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/webAppCollectors/{collectorName}",
      apiVersion: "2024-01-15",
    }),
  );
export type WebAppCollectorOperationsDeleteInput =
  typeof WebAppCollectorOperationsDeleteInput.Type;

// Output Schema
export const WebAppCollectorOperationsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type WebAppCollectorOperationsDeleteOutput =
  typeof WebAppCollectorOperationsDeleteOutput.Type;

// The operation
/**
 * Delete a WebAppCollector
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 * @param collectorName - Web app collector ARM name.
 */
export const WebAppCollectorOperationsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WebAppCollectorOperationsDeleteInput,
    outputSchema: WebAppCollectorOperationsDeleteOutput,
  }));
// Input Schema
export const WebAppCollectorOperationsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    collectorName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/webAppCollectors/{collectorName}",
      apiVersion: "2024-01-15",
    }),
  );
export type WebAppCollectorOperationsGetInput =
  typeof WebAppCollectorOperationsGetInput.Type;

// Output Schema
export const WebAppCollectorOperationsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => WebAppCollectorPropertiesBaseWithAgentSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type WebAppCollectorOperationsGetOutput =
  typeof WebAppCollectorOperationsGetOutput.Type;

// The operation
/**
 * Get a WebAppCollector
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 * @param collectorName - Web app collector ARM name.
 */
export const WebAppCollectorOperationsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WebAppCollectorOperationsGetInput,
    outputSchema: WebAppCollectorOperationsGetOutput,
  }));
// Input Schema
export const WebAppCollectorOperationsListByAssessmentProjectInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/webAppCollectors",
      apiVersion: "2024-01-15",
    }),
  );
export type WebAppCollectorOperationsListByAssessmentProjectInput =
  typeof WebAppCollectorOperationsListByAssessmentProjectInput.Type;

// Output Schema
export const WebAppCollectorOperationsListByAssessmentProjectOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => WebAppCollectorSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type WebAppCollectorOperationsListByAssessmentProjectOutput =
  typeof WebAppCollectorOperationsListByAssessmentProjectOutput.Type;

// The operation
/**
 * List WebAppCollector resources by AssessmentProject
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 */
export const WebAppCollectorOperationsListByAssessmentProject =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WebAppCollectorOperationsListByAssessmentProjectInput,
    outputSchema: WebAppCollectorOperationsListByAssessmentProjectOutput,
  }));
// Input Schema
export const WebAppDiscoverySiteDataSourcesControllerCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    webAppSiteName: Schema.String.pipe(T.PathParam()),
    discoverySiteDataSourceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => DiscoverySiteDataSourcePropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/masterSites/{siteName}/webAppSites/{webAppSiteName}/discoverySiteDataSources/{discoverySiteDataSourceName}",
      apiVersion: "2023-06-06",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type WebAppDiscoverySiteDataSourcesControllerCreateInput =
  typeof WebAppDiscoverySiteDataSourcesControllerCreateInput.Type;

// Output Schema
export const WebAppDiscoverySiteDataSourcesControllerCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => DiscoverySiteDataSourcePropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type WebAppDiscoverySiteDataSourcesControllerCreateOutput =
  typeof WebAppDiscoverySiteDataSourcesControllerCreateOutput.Type;

// The operation
/**
 * Method to create or update a Web app data source in site.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param webAppSiteName - Web app site name.
 * @param discoverySiteDataSourceName - Data Source ARM name.
 */
export const WebAppDiscoverySiteDataSourcesControllerCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WebAppDiscoverySiteDataSourcesControllerCreateInput,
    outputSchema: WebAppDiscoverySiteDataSourcesControllerCreateOutput,
  }));
// Input Schema
export const WebAppDiscoverySiteDataSourcesControllerDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    webAppSiteName: Schema.String.pipe(T.PathParam()),
    discoverySiteDataSourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/masterSites/{siteName}/webAppSites/{webAppSiteName}/discoverySiteDataSources/{discoverySiteDataSourceName}",
      apiVersion: "2023-06-06",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type WebAppDiscoverySiteDataSourcesControllerDeleteInput =
  typeof WebAppDiscoverySiteDataSourcesControllerDeleteInput.Type;

// Output Schema
export const WebAppDiscoverySiteDataSourcesControllerDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type WebAppDiscoverySiteDataSourcesControllerDeleteOutput =
  typeof WebAppDiscoverySiteDataSourcesControllerDeleteOutput.Type;

// The operation
/**
 * Method to delete a Web app data source in site.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param webAppSiteName - Web app site name.
 * @param discoverySiteDataSourceName - Data Source ARM name.
 */
export const WebAppDiscoverySiteDataSourcesControllerDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WebAppDiscoverySiteDataSourcesControllerDeleteInput,
    outputSchema: WebAppDiscoverySiteDataSourcesControllerDeleteOutput,
  }));
// Input Schema
export const WebAppDiscoverySiteDataSourcesControllerGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    webAppSiteName: Schema.String.pipe(T.PathParam()),
    discoverySiteDataSourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/masterSites/{siteName}/webAppSites/{webAppSiteName}/discoverySiteDataSources/{discoverySiteDataSourceName}",
      apiVersion: "2023-06-06",
    }),
  );
export type WebAppDiscoverySiteDataSourcesControllerGetInput =
  typeof WebAppDiscoverySiteDataSourcesControllerGetInput.Type;

// Output Schema
export const WebAppDiscoverySiteDataSourcesControllerGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => DiscoverySiteDataSourcePropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type WebAppDiscoverySiteDataSourcesControllerGetOutput =
  typeof WebAppDiscoverySiteDataSourcesControllerGetOutput.Type;

// The operation
/**
 * Method to get a Web app data source in site.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param webAppSiteName - Web app site name.
 * @param discoverySiteDataSourceName - Data Source ARM name.
 */
export const WebAppDiscoverySiteDataSourcesControllerGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WebAppDiscoverySiteDataSourcesControllerGetInput,
    outputSchema: WebAppDiscoverySiteDataSourcesControllerGetOutput,
  }));
// Input Schema
export const WebAppDiscoverySiteDataSourcesControllerListByWebAppSiteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    webAppSiteName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/masterSites/{siteName}/webAppSites/{webAppSiteName}/discoverySiteDataSources",
      apiVersion: "2023-06-06",
    }),
  );
export type WebAppDiscoverySiteDataSourcesControllerListByWebAppSiteInput =
  typeof WebAppDiscoverySiteDataSourcesControllerListByWebAppSiteInput.Type;

// Output Schema
export const WebAppDiscoverySiteDataSourcesControllerListByWebAppSiteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => DiscoverySiteDataSourceSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type WebAppDiscoverySiteDataSourcesControllerListByWebAppSiteOutput =
  typeof WebAppDiscoverySiteDataSourcesControllerListByWebAppSiteOutput.Type;

// The operation
/**
 * Method to get all Web app data sources in site.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param webAppSiteName - Web app site name.
 */
export const WebAppDiscoverySiteDataSourcesControllerListByWebAppSite =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WebAppDiscoverySiteDataSourcesControllerListByWebAppSiteInput,
    outputSchema:
      WebAppDiscoverySiteDataSourcesControllerListByWebAppSiteOutput,
  }));
// Input Schema
export const WebAppExtendedMachinesControllerGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    webAppSiteName: Schema.String.pipe(T.PathParam()),
    extendedMachineName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/masterSites/{siteName}/webAppSites/{webAppSiteName}/extendedMachines/{extendedMachineName}",
      apiVersion: "2023-06-06",
    }),
  );
export type WebAppExtendedMachinesControllerGetInput =
  typeof WebAppExtendedMachinesControllerGetInput.Type;

// Output Schema
export const WebAppExtendedMachinesControllerGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => WebAppExtendedMachinePropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type WebAppExtendedMachinesControllerGetOutput =
  typeof WebAppExtendedMachinesControllerGetOutput.Type;

// The operation
/**
 * Method to get a extended machine.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param webAppSiteName - Web app site name.
 * @param extendedMachineName - Extended machine name.
 */
export const WebAppExtendedMachinesControllerGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WebAppExtendedMachinesControllerGetInput,
    outputSchema: WebAppExtendedMachinesControllerGetOutput,
  }));
// Input Schema
export const WebAppExtendedMachinesControllerListByWebAppSiteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    webAppSiteName: Schema.String.pipe(T.PathParam()),
    filter: Schema.optional(Schema.String),
    top: Schema.optional(Schema.String),
    continuationToken: Schema.optional(Schema.String),
    totalRecordCount: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/masterSites/{siteName}/webAppSites/{webAppSiteName}/extendedMachines",
      apiVersion: "2023-06-06",
    }),
  );
export type WebAppExtendedMachinesControllerListByWebAppSiteInput =
  typeof WebAppExtendedMachinesControllerListByWebAppSiteInput.Type;

// Output Schema
export const WebAppExtendedMachinesControllerListByWebAppSiteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => WebAppExtendedMachineSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type WebAppExtendedMachinesControllerListByWebAppSiteOutput =
  typeof WebAppExtendedMachinesControllerListByWebAppSiteOutput.Type;

// The operation
/**
 * Method to get all extended machines.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param filter - filter query
 * @param top - page size  query
 * @param continuationToken - Optional parameter for continuation token.
 * @param totalRecordCount - Total count of machines in the given site.
 * @param siteName - Site name
 * @param webAppSiteName - Web app site name.
 */
export const WebAppExtendedMachinesControllerListByWebAppSite =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WebAppExtendedMachinesControllerListByWebAppSiteInput,
    outputSchema: WebAppExtendedMachinesControllerListByWebAppSiteOutput,
  }));
// Input Schema
export const WebApplicationsControllerListByWebAppSiteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    webAppSiteName: Schema.String.pipe(T.PathParam()),
    filter: Schema.optional(Schema.String),
    top: Schema.optional(Schema.String),
    continuationToken: Schema.optional(Schema.String),
    totalRecordCount: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/masterSites/{siteName}/webAppSites/{webAppSiteName}/webApplications",
      apiVersion: "2023-06-06",
    }),
  );
export type WebApplicationsControllerListByWebAppSiteInput =
  typeof WebApplicationsControllerListByWebAppSiteInput.Type;

// Output Schema
export const WebApplicationsControllerListByWebAppSiteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => WebApplicationSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type WebApplicationsControllerListByWebAppSiteOutput =
  typeof WebApplicationsControllerListByWebAppSiteOutput.Type;

// The operation
/**
 * Method to get all IIS web applications.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param filter - filter query
 * @param top - page size  query
 * @param continuationToken - Optional parameter for continuation token.
 * @param totalRecordCount - Total count of machines in the given site.
 * @param siteName - Site name
 * @param webAppSiteName - Web app site name.
 */
export const WebApplicationsControllerListByWebAppSite =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WebApplicationsControllerListByWebAppSiteInput,
    outputSchema: WebApplicationsControllerListByWebAppSiteOutput,
  }));
// Input Schema
export const WebAppPropertiesControllerUpdatePropertiesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    webAppSiteName: Schema.String.pipe(T.PathParam()),
    webApps: Schema.optional(
      Schema.Array(Schema.suspend(() => WebAppPropertiesSchema)),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/masterSites/{siteName}/webAppSites/{webAppSiteName}/updateProperties",
      apiVersion: "2023-06-06",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type WebAppPropertiesControllerUpdatePropertiesInput =
  typeof WebAppPropertiesControllerUpdatePropertiesInput.Type;

// Output Schema
export const WebAppPropertiesControllerUpdatePropertiesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type WebAppPropertiesControllerUpdatePropertiesOutput =
  typeof WebAppPropertiesControllerUpdatePropertiesOutput.Type;

// The operation
/**
 * Method to update properties for web applications.
 * in a site.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param webAppSiteName - Web app site name.
 */
export const WebAppPropertiesControllerUpdateProperties =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WebAppPropertiesControllerUpdatePropertiesInput,
    outputSchema: WebAppPropertiesControllerUpdatePropertiesOutput,
  }));
// Input Schema
export const WebAppRunAsAccountsControllerGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    webAppSiteName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/masterSites/{siteName}/webAppSites/{webAppSiteName}/runasaccounts/{accountName}",
      apiVersion: "2023-06-06",
    }),
  );
export type WebAppRunAsAccountsControllerGetInput =
  typeof WebAppRunAsAccountsControllerGetInput.Type;

// Output Schema
export const WebAppRunAsAccountsControllerGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => RunAsAccountPropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type WebAppRunAsAccountsControllerGetOutput =
  typeof WebAppRunAsAccountsControllerGetOutput.Type;

// The operation
/**
 * Method to get run as account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param webAppSiteName - Web app site name.
 * @param accountName - Run as account ARM name.
 */
export const WebAppRunAsAccountsControllerGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WebAppRunAsAccountsControllerGetInput,
    outputSchema: WebAppRunAsAccountsControllerGetOutput,
  }));
// Input Schema
export const WebAppRunAsAccountsControllerListByWebAppSiteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    webAppSiteName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/masterSites/{siteName}/webAppSites/{webAppSiteName}/runasaccounts",
      apiVersion: "2023-06-06",
    }),
  );
export type WebAppRunAsAccountsControllerListByWebAppSiteInput =
  typeof WebAppRunAsAccountsControllerListByWebAppSiteInput.Type;

// Output Schema
export const WebAppRunAsAccountsControllerListByWebAppSiteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => WebAppRunAsAccountSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type WebAppRunAsAccountsControllerListByWebAppSiteOutput =
  typeof WebAppRunAsAccountsControllerListByWebAppSiteOutput.Type;

// The operation
/**
 * Method to get all run as accounts.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param webAppSiteName - Web app site name.
 */
export const WebAppRunAsAccountsControllerListByWebAppSite =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WebAppRunAsAccountsControllerListByWebAppSiteInput,
    outputSchema: WebAppRunAsAccountsControllerListByWebAppSiteOutput,
  }));
// Input Schema
export const WebAppServicePlanV2OperationsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
    assessmentName: Schema.String.pipe(T.PathParam()),
    webAppServicePlanName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}/webAppAssessments/{assessmentName}/webAppServicePlans/{webAppServicePlanName}",
      apiVersion: "2024-01-15",
    }),
  );
export type WebAppServicePlanV2OperationsGetInput =
  typeof WebAppServicePlanV2OperationsGetInput.Type;

// Output Schema
export const WebAppServicePlanV2OperationsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => WebAppServicePlanV2PropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type WebAppServicePlanV2OperationsGetOutput =
  typeof WebAppServicePlanV2OperationsGetOutput.Type;

// The operation
/**
 * Get a WebAppServicePlanV2
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param projectName - Assessment Project Name
 * @param groupName - Group ARM name
 * @param assessmentName - Web app Assessment arm name.
 * @param webAppServicePlanName - Web app service plan ARM name.
 */
export const WebAppServicePlanV2OperationsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WebAppServicePlanV2OperationsGetInput,
    outputSchema: WebAppServicePlanV2OperationsGetOutput,
  }));
// Input Schema
export const WebAppServicePlanV2OperationsListByWebAppAssessmentV2Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    projectName: Schema.String.pipe(T.PathParam()),
    groupName: Schema.String.pipe(T.PathParam()),
    assessmentName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
    continuationToken: Schema.optional(Schema.String),
    totalRecordCount: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}/webAppAssessments/{assessmentName}/webAppServicePlans",
      apiVersion: "2024-01-15",
    }),
  );
export type WebAppServicePlanV2OperationsListByWebAppAssessmentV2Input =
  typeof WebAppServicePlanV2OperationsListByWebAppAssessmentV2Input.Type;

// Output Schema
export const WebAppServicePlanV2OperationsListByWebAppAssessmentV2Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => WebAppServicePlanV2Schema)),
    nextLink: Schema.optional(Schema.String),
  });
export type WebAppServicePlanV2OperationsListByWebAppAssessmentV2Output =
  typeof WebAppServicePlanV2OperationsListByWebAppAssessmentV2Output.Type;

// The operation
/**
 * List WebAppServicePlanV2 resources by WebAppAssessmentV2
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $filter - Filter query.
 * @param pageSize - Optional parameter for page size.
 * @param continuationToken - Optional parameter for continuation token.
 * @param totalRecordCount - Total record count.
 * @param projectName - Assessment Project Name
 * @param groupName - Group ARM name
 * @param assessmentName - Web app Assessment arm name.
 */
export const WebAppServicePlanV2OperationsListByWebAppAssessmentV2 =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WebAppServicePlanV2OperationsListByWebAppAssessmentV2Input,
    outputSchema: WebAppServicePlanV2OperationsListByWebAppAssessmentV2Output,
  }));
// Input Schema
export const WebAppSitesControllerCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    webAppSiteName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => WebAppSitePropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/masterSites/{siteName}/webAppSites/{webAppSiteName}",
      apiVersion: "2023-06-06",
    }),
  );
export type WebAppSitesControllerCreateInput =
  typeof WebAppSitesControllerCreateInput.Type;

// Output Schema
export const WebAppSitesControllerCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => WebAppSitePropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type WebAppSitesControllerCreateOutput =
  typeof WebAppSitesControllerCreateOutput.Type;

// The operation
/**
 * Method to create a WebApp site.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param webAppSiteName - Web app site name.
 */
export const WebAppSitesControllerCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WebAppSitesControllerCreateInput,
    outputSchema: WebAppSitesControllerCreateOutput,
  }),
);
// Input Schema
export const WebAppSitesControllerDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    webAppSiteName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/masterSites/{siteName}/webAppSites/{webAppSiteName}",
      apiVersion: "2023-06-06",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type WebAppSitesControllerDeleteInput =
  typeof WebAppSitesControllerDeleteInput.Type;

// Output Schema
export const WebAppSitesControllerDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type WebAppSitesControllerDeleteOutput =
  typeof WebAppSitesControllerDeleteOutput.Type;

// The operation
/**
 * Deletes the WebApp site.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param webAppSiteName - Web app site name.
 */
export const WebAppSitesControllerDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WebAppSitesControllerDeleteInput,
    outputSchema: WebAppSitesControllerDeleteOutput,
  }),
);
// Input Schema
export const WebAppSitesControllerErrorSummaryInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    webAppSiteName: Schema.String.pipe(T.PathParam()),
    applianceName: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/masterSites/{siteName}/webAppSites/{webAppSiteName}/errorSummary",
      apiVersion: "2023-06-06",
    }),
  );
export type WebAppSitesControllerErrorSummaryInput =
  typeof WebAppSitesControllerErrorSummaryInput.Type;

// Output Schema
export const WebAppSitesControllerErrorSummaryOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    applianceName: Schema.String,
    discoveryScopeErrorSummaries: Schema.suspend(
      () => DiscoveryScopeErrorSummarySchema,
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type WebAppSitesControllerErrorSummaryOutput =
  typeof WebAppSitesControllerErrorSummaryOutput.Type;

// The operation
/**
 * MMethod to get error summary from web app  site.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param webAppSiteName - Web app site name.
 */
export const WebAppSitesControllerErrorSummary =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WebAppSitesControllerErrorSummaryInput,
    outputSchema: WebAppSitesControllerErrorSummaryOutput,
  }));
// Input Schema
export const WebAppSitesControllerExportInventoryInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    webAppSiteName: Schema.String.pipe(T.PathParam()),
    filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/masterSites/{siteName}/webAppSites/{webAppSiteName}/exportInventory",
      apiVersion: "2023-06-06",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type WebAppSitesControllerExportInventoryInput =
  typeof WebAppSitesControllerExportInventoryInput.Type;

// Output Schema
export const WebAppSitesControllerExportInventoryOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type WebAppSitesControllerExportInventoryOutput =
  typeof WebAppSitesControllerExportInventoryOutput.Type;

// The operation
/**
 * Method to generate report containing web app inventory.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param webAppSiteName - Web app site name.
 */
export const WebAppSitesControllerExportInventory =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WebAppSitesControllerExportInventoryInput,
    outputSchema: WebAppSitesControllerExportInventoryOutput,
  }));
// Input Schema
export const WebAppSitesControllerGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    webAppSiteName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/masterSites/{siteName}/webAppSites/{webAppSiteName}",
      apiVersion: "2023-06-06",
    }),
  );
export type WebAppSitesControllerGetInput =
  typeof WebAppSitesControllerGetInput.Type;

// Output Schema
export const WebAppSitesControllerGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => WebAppSitePropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type WebAppSitesControllerGetOutput =
  typeof WebAppSitesControllerGetOutput.Type;

// The operation
/**
 * Method to get a site.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param webAppSiteName - Web app site name.
 */
export const WebAppSitesControllerGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WebAppSitesControllerGetInput,
    outputSchema: WebAppSitesControllerGetOutput,
  }),
);
// Input Schema
export const WebAppSitesControllerListByMasterSiteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/masterSites/{siteName}/webAppSites",
      apiVersion: "2023-06-06",
    }),
  );
export type WebAppSitesControllerListByMasterSiteInput =
  typeof WebAppSitesControllerListByMasterSiteInput.Type;

// Output Schema
export const WebAppSitesControllerListByMasterSiteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => WebAppSiteSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type WebAppSitesControllerListByMasterSiteOutput =
  typeof WebAppSitesControllerListByMasterSiteOutput.Type;

// The operation
/**
 * Method to get all sites.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 */
export const WebAppSitesControllerListByMasterSite =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WebAppSitesControllerListByMasterSiteInput,
    outputSchema: WebAppSitesControllerListByMasterSiteOutput,
  }));
// Input Schema
export const WebAppSitesControllerRefreshInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    webAppSiteName: Schema.String.pipe(T.PathParam()),
    applianceName: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/masterSites/{siteName}/webAppSites/{webAppSiteName}/refresh",
      apiVersion: "2023-06-06",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type WebAppSitesControllerRefreshInput =
  typeof WebAppSitesControllerRefreshInput.Type;

// Output Schema
export const WebAppSitesControllerRefreshOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type WebAppSitesControllerRefreshOutput =
  typeof WebAppSitesControllerRefreshOutput.Type;

// The operation
/**
 * Method to refresh a site.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param webAppSiteName - Web app site name.
 */
export const WebAppSitesControllerRefresh =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WebAppSitesControllerRefreshInput,
    outputSchema: WebAppSitesControllerRefreshOutput,
  }));
// Input Schema
export const WebAppSitesControllerSummaryInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    webAppSiteName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/masterSites/{siteName}/webAppSites/{webAppSiteName}/summary",
      apiVersion: "2023-06-06",
    }),
  );
export type WebAppSitesControllerSummaryInput =
  typeof WebAppSitesControllerSummaryInput.Type;

// Output Schema
export const WebAppSitesControllerSummaryOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    webServerCount: Schema.optional(Schema.Number),
    webApplicationCount: Schema.optional(Schema.Number),
    runAsAccountCount: Schema.optional(Schema.Number),
  });
export type WebAppSitesControllerSummaryOutput =
  typeof WebAppSitesControllerSummaryOutput.Type;

// The operation
/**
 * Method to get site usage/summary.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param webAppSiteName - Web app site name.
 */
export const WebAppSitesControllerSummary =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WebAppSitesControllerSummaryInput,
    outputSchema: WebAppSitesControllerSummaryOutput,
  }));
// Input Schema
export const WebAppSitesControllerUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    webAppSiteName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => WebAppSiteUpdatePropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/masterSites/{siteName}/webAppSites/{webAppSiteName}",
      apiVersion: "2023-06-06",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type WebAppSitesControllerUpdateInput =
  typeof WebAppSitesControllerUpdateInput.Type;

// Output Schema
export const WebAppSitesControllerUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => WebAppSitePropertiesSchema),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type WebAppSitesControllerUpdateOutput =
  typeof WebAppSitesControllerUpdateOutput.Type;

// The operation
/**
 * Method to update an existing site.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param siteName - Site name
 * @param webAppSiteName - Web app site name.
 */
export const WebAppSitesControllerUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: WebAppSitesControllerUpdateInput,
    outputSchema: WebAppSitesControllerUpdateOutput,
  }),
);
// Input Schema
export const WebServersControllerGetWebServerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/migrateProjects/{migrateProjectName}/webServers/{webServerId}",
      apiVersion: "2023-01-01",
    }),
  );
export type WebServersControllerGetWebServerInput =
  typeof WebServersControllerGetWebServerInput.Type;

// Output Schema
export const WebServersControllerGetWebServerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.suspend(() => WebServerPropertiesSchema),
    ),
  });
export type WebServersControllerGetWebServerOutput =
  typeof WebServersControllerGetWebServerOutput.Type;

// The operation
/**
 * Gets a webserver in the migrate project.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const WebServersControllerGetWebServer =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WebServersControllerGetWebServerInput,
    outputSchema: WebServersControllerGetWebServerOutput,
  }));
// Input Schema
export const WebServersControllerListByWebAppSiteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    siteName: Schema.String.pipe(T.PathParam()),
    webAppSiteName: Schema.String.pipe(T.PathParam()),
    filter: Schema.optional(Schema.String),
    top: Schema.optional(Schema.String),
    continuationToken: Schema.optional(Schema.String),
    totalRecordCount: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/masterSites/{siteName}/webAppSites/{webAppSiteName}/webServers",
      apiVersion: "2023-06-06",
    }),
  );
export type WebServersControllerListByWebAppSiteInput =
  typeof WebServersControllerListByWebAppSiteInput.Type;

// Output Schema
export const WebServersControllerListByWebAppSiteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => WebServerSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type WebServersControllerListByWebAppSiteOutput =
  typeof WebServersControllerListByWebAppSiteOutput.Type;

// The operation
/**
 * Method to get all web servers.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param filter - filter query
 * @param top - page size  query
 * @param continuationToken - Optional parameter for continuation token.
 * @param totalRecordCount - Total count of machines in the given site.
 * @param siteName - Site name
 * @param webAppSiteName - Web app site name.
 */
export const WebServersControllerListByWebAppSite =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WebServersControllerListByWebAppSiteInput,
    outputSchema: WebServersControllerListByWebAppSiteOutput,
  }));
// Input Schema
export const WebServersControllerListWebServersInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/migrateProjects/{migrateProjectName}/webServers",
      apiVersion: "2023-01-01",
    }),
  );
export type WebServersControllerListWebServersInput =
  typeof WebServersControllerListWebServersInput.Type;

// Output Schema
export const WebServersControllerListWebServersOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.Array(Schema.suspend(() => WebServerSchema))),
    nextLink: Schema.optional(Schema.String),
  });
export type WebServersControllerListWebServersOutput =
  typeof WebServersControllerListWebServersOutput.Type;

// The operation
/**
 * Gets a list of WebServers in the migrate project.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const WebServersControllerListWebServers =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WebServersControllerListWebServersInput,
    outputSchema: WebServersControllerListWebServersOutput,
  }));
// Input Schema
export const WebSitesControllerGetWebSiteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/migrateProjects/{migrateProjectName}/webSites/{webSiteName}",
      apiVersion: "2023-01-01",
    }),
  );
export type WebSitesControllerGetWebSiteInput =
  typeof WebSitesControllerGetWebSiteInput.Type;

// Output Schema
export const WebSitesControllerGetWebSiteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    properties: Schema.optional(Schema.suspend(() => WebSitePropertiesSchema)),
  });
export type WebSitesControllerGetWebSiteOutput =
  typeof WebSitesControllerGetWebSiteOutput.Type;

// The operation
/**
 * Gets a website in the migrate project.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const WebSitesControllerGetWebSite =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WebSitesControllerGetWebSiteInput,
    outputSchema: WebSitesControllerGetWebSiteOutput,
  }));
// Input Schema
export const WebSitesControllerListWebSitesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/migrateProjects/{migrateProjectName}/webSites",
      apiVersion: "2023-01-01",
    }),
  );
export type WebSitesControllerListWebSitesInput =
  typeof WebSitesControllerListWebSitesInput.Type;

// Output Schema
export const WebSitesControllerListWebSitesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.Array(Schema.suspend(() => WebSiteSchema))),
    nextLink: Schema.optional(Schema.String),
  });
export type WebSitesControllerListWebSitesOutput =
  typeof WebSitesControllerListWebSitesOutput.Type;

// The operation
/**
 * Gets a list of websites in the migrate project.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 */
export const WebSitesControllerListWebSites =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: WebSitesControllerListWebSitesInput,
    outputSchema: WebSitesControllerListWebSitesOutput,
  }));
